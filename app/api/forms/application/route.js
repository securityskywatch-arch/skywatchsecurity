import { NextResponse } from "next/server";
import { sendStructuredFormEmail } from "@/lib/formEmail";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9()\-\s]{7,20}$/;

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
    return NextResponse.redirect(new URL("/recruitment/apply?sent=0", request.url), 303);
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
    return NextResponse.redirect(new URL("/recruitment/apply?sent=1", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/recruitment/apply?sent=0", request.url), 303);
  }
}
