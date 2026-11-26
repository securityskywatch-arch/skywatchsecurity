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

const SUCCESS_PATH = "/recruitment/apply?sent=1";
const ERROR_PATH = "/recruitment/apply?sent=0";
const SUCCESS_MESSAGE =
  "Application submitted successfully. We will contact suitable candidates.";
const DELIVERY_ERROR_MESSAGE = `We could not submit your application right now. Please try again shortly or call our desk on ${siteContact.phone.display}.`;

export async function POST(request) {
  const rateLimit = checkRateLimit(request, "application");
  if (!rateLimit.allowed) {
    console.warn("[forms/application] Rate limit exceeded.");
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
      "[forms/application] Failed to parse form data:",
      error instanceof Error ? error.message : error
    );
    return respondError(request, ERROR_PATH, DELIVERY_ERROR_MESSAGE, 400);
  }

  if (isHoneypotTriggered(formData)) {
    console.warn("[forms/application] Honeypot triggered; ignoring submission.");
    return respondSuccess(request, SUCCESS_PATH, SUCCESS_MESSAGE);
  }

  const data = {
    full_name: String(formData.get("full_name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    postcode: String(formData.get("postcode") || "").trim(),
    sia_number: String(formData.get("sia_number") || "").trim(),
    right_to_work: String(formData.get("right_to_work") || "").trim(),
    experience_years: String(formData.get("experience_years") || "").trim(),
    availability: String(formData.get("availability") || "").trim(),
    preferred_regions: String(formData.get("preferred_regions") || "").trim(),
    notes: String(formData.get("notes") || "").trim()
  };

  if (
    !data.full_name ||
    data.full_name.length < 2 ||
    !emailPattern.test(data.email) ||
    !phonePattern.test(data.phone) ||
    !data.postcode ||
    data.postcode.length < 3 ||
    !data.right_to_work ||
    !data.experience_years ||
    !data.availability ||
    !data.preferred_regions ||
    data.preferred_regions.length < 2 ||
    !data.notes ||
    data.notes.length < 10
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
      subject: "New Recruitment Application - SkyWatch Security",
      formType: "Recruitment application",
      replyTo: data.email || undefined,
      fields: [
        { label: "Full name", value: data.full_name },
        { label: "Email address", value: data.email },
        { label: "Phone number", value: data.phone },
        { label: "Home postcode", value: data.postcode },
        { label: "SIA licence number", value: data.sia_number },
        { label: "Right to work in UK", value: data.right_to_work },
        { label: "Security experience", value: data.experience_years },
        { label: "Availability", value: data.availability },
        { label: "Preferred work areas", value: data.preferred_regions },
        { label: "Relevant notes", value: data.notes }
      ]
    });
    return respondSuccess(request, SUCCESS_PATH, SUCCESS_MESSAGE);
  } catch (error) {
    console.error(
      "[forms/application] Email delivery failed:",
      error instanceof Error ? error.message : error
    );
    return respondError(request, ERROR_PATH, DELIVERY_ERROR_MESSAGE, 500);
  }
}
