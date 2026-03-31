import { NextResponse } from "next/server";
import { sendStructuredFormEmail } from "@/lib/formEmail";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9()\-\s]{7,20}$/;

export async function POST(request) {
  const formData = await request.formData();
  const quoteSource = String(formData.get("quote_source") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const successPath = quoteSource === "hero" ? "/?hero_sent=1" : "/quote?sent=1";
  const errorPath = quoteSource === "hero" ? "/?hero_sent=0" : "/quote?sent=0";
  if (!name || name.length < 2 || !emailPattern.test(email) || !phonePattern.test(phone) || !service || message.length < 10) {
    return NextResponse.redirect(new URL(errorPath, request.url), 303);
  }
  try {
    await sendStructuredFormEmail({
      subject: "New Quote Request - SkyWatch Security",
      formType: "Quote request",
      replyTo: email || undefined,
      fields: [
        { label: "Full name", value: name },
        { label: "Work email", value: email },
        { label: "Phone", value: phone },
        { label: "Service interest", value: service },
        { label: "Site details and requirements", value: message }
      ]
    });
    return NextResponse.redirect(new URL(successPath, request.url), 303);
  } catch {
    return NextResponse.redirect(new URL(errorPath, request.url), 303);
  }
}
