import { sendStructuredFormEmail } from "@/lib/formEmail";
import {
  checkRateLimit,
  emailPattern,
  getRateLimitErrorMessage,
  isHoneypotTriggered,
  phonePattern,
  respondError,
  respondSuccess
} from "@/lib/formProtection";
import { siteContact } from "@/lib/siteContact";

export async function POST(request) {
  let formData;
  try {
    formData = await request.formData();
  } catch (error) {
    console.error(
      "[forms/quote] Failed to parse form data:",
      error instanceof Error ? error.message : error
    );
    return respondError(
      request,
      "/quote?sent=0",
      `We could not send your quote request right now. Please call our operations desk directly on ${siteContact.phone.display}.`,
      400
    );
  }

  const quoteSource = String(formData.get("quote_source") || "").trim();
  const isHero = quoteSource === "hero";
  const successPath = isHero ? "/?hero_sent=1" : "/quote?sent=1";
  const errorPath = isHero ? "/?hero_sent=0" : "/quote?sent=0";
  const successMessage = isHero
    ? "Quote request sent successfully. Our operations desk will contact you shortly."
    : "Quote request sent successfully. Our operations desk will review and contact you shortly.";
  const deliveryErrorMessage = isHero
    ? `Could not send request right now. Please call our 24/7 desk directly on ${siteContact.phone.display}.`
    : `We could not send your quote request right now. Please call our operations desk directly on ${siteContact.phone.display}.`;

  const rateLimit = checkRateLimit(request, "quote");
  if (!rateLimit.allowed) {
    console.warn("[forms/quote] Rate limit exceeded.");
    return respondError(
      request,
      errorPath,
      getRateLimitErrorMessage(),
      429,
      { "Retry-After": String(rateLimit.retryAfterSeconds) }
    );
  }

  if (isHoneypotTriggered(formData)) {
    console.warn("[forms/quote] Honeypot triggered; ignoring submission.");
    return respondSuccess(request, successPath, successMessage);
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const rawService = String(formData.get("service") || "").trim();
  const service = rawService || (isHero ? "General enquiry" : "");
  const message = String(formData.get("message") || "").trim();

  if (
    !name ||
    name.length < 2 ||
    !emailPattern.test(email) ||
    !phonePattern.test(phone) ||
    !service ||
    message.length < 10
  ) {
    return respondError(
      request,
      errorPath,
      "Please check the required fields and ensure all details are valid.",
      400
    );
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
        { label: "Source", value: quoteSource || "quote" },
        { label: "Site details and requirements", value: message }
      ]
    });
    return respondSuccess(request, successPath, successMessage);
  } catch (error) {
    console.error(
      "[forms/quote] Email delivery failed:",
      error instanceof Error ? error.message : error
    );
    return respondError(request, errorPath, deliveryErrorMessage, 500);
  }
}
