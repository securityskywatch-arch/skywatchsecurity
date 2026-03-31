import { NextResponse } from "next/server";
import { sendStructuredFormEmail } from "@/lib/formEmail";

export async function POST(request) {
  const formData = await request.formData();
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
    return NextResponse.redirect(new URL("/recruitment/apply?sent=1", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/recruitment/apply?sent=0", request.url), 303);
  }
}
