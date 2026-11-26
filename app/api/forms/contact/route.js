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

const SUCCESS_PATH = "/contact?sent=1";
const ERROR_PATH = "/contact?sent=0";
const SUCCESS_MESSAGE =
  "Message sent successfully. Our operations team will contact you shortly.";
const DELIVERY_ERROR_MESSAGE = `Unable to send message right now. Please call our 24/7 operations desk directly on ${siteContact.phone.display}.`;

export async function POST(request) {
  const rateLimit = checkRateLimit(request, "contact");
  if (!rateLimit.allowed) {
    console.warn("[forms/contact] Rate limit exceeded.");
    return respondError(
      request,
      ERROR_PATH,
      getRateLimitErrorMessage(),
      429,
      { "Retry-After": String(rateLimit.retryAfterSeconds) }
    );
  }

  let formData;
  try {
    formData = await request.formData();
  } catch (error) {
    console.error(
      "[forms/contact] Failed to parse form data:",
      error instanceof Error ? error.message : error
    );
    return respondError(request, ERROR_PATH, DELIVERY_ERROR_MESSAGE, 400);
  }

  if (isHoneypotTriggered(formData)) {
    console.warn("[forms/contact] Honeypot triggered; ignoring submission.");
    return respondSuccess(request, SUCCESS_PATH, SUCCESS_MESSAGE);
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (
    !name ||
    name.length < 2 ||
    !emailPattern.test(email) ||
    !phonePattern.test(phone) ||
    message.length < 10
  ) {
    return respondError(
      request,
      ERROR_PATH,
      "Please check the required fields and ensure all details are valid.",
      400
    );
  }

  try {
    await sendStructuredFormEmail({
      subject: "New Contact Form Submission - SkyWatch Security",
      formType: "Contact form",
      replyTo: email || undefined,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Message", value: message }
      ]
    });
    return respondSuccess(request, SUCCESS_PATH, SUCCESS_MESSAGE);
  } catch (error) {
    console.error(
      "[forms/contact] Email delivery failed:",
      error instanceof Error ? error.message : error
    );
    return respondError(request, ERROR_PATH, DELIVERY_ERROR_MESSAGE, 500);
  }
}
