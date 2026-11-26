import { NextResponse } from "next/server";
import { siteContact } from "@/lib/siteContact";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const MAX_RATE_LIMIT_KEYS = 2000;
const rateLimitStore = new Map();

export const HONEYPOT_FIELD_NAME = "company_website";
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phonePattern = /^\+?[0-9()\-\s]{7,20}$/;

function wantsJsonResponse(request) {
  const accept = request.headers.get("accept") || "";
  return accept.includes("application/json");
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || "unknown";
}

function pruneExpiredEntries(now) {
  for (const [key, timestamps] of rateLimitStore.entries()) {
    const active = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) {
      rateLimitStore.delete(key);
    } else {
      rateLimitStore.set(key, active);
    }
  }
}

function checkRateLimit(request, routeKey) {
  const now = Date.now();
  if (rateLimitStore.size > MAX_RATE_LIMIT_KEYS) {
    pruneExpiredEntries(now);
  }

  const key = `${getClientIp(request)}:${routeKey}`;
  const recent = (rateLimitStore.get(key) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = recent[0];
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 1000)
    );
    rateLimitStore.set(key, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  rateLimitStore.set(key, recent);
  return { allowed: true, retryAfterSeconds: 0 };
}

function isHoneypotTriggered(formData) {
  return String(formData.get(HONEYPOT_FIELD_NAME) || "").trim().length > 0;
}

function respondSuccess(request, redirectPath, message) {
  if (wantsJsonResponse(request)) {
    return NextResponse.json({ ok: true, message }, { status: 200 });
  }
  return NextResponse.redirect(new URL(redirectPath, request.url), 303);
}

function respondError(request, redirectPath, errorMessage, status = 400, extraHeaders = {}) {
  if (wantsJsonResponse(request)) {
    return NextResponse.json(
      { ok: false, error: errorMessage },
      { status, headers: extraHeaders }
    );
  }
  return NextResponse.redirect(new URL(redirectPath, request.url), 303);
}

function getRateLimitErrorMessage() {
  return `Too many submissions received. Please wait a few minutes or call our 24/7 operations desk on ${siteContact.phone.display}.`;
}

export {
  checkRateLimit,
  getRateLimitErrorMessage,
  isHoneypotTriggered,
  respondError,
  respondSuccess
};
