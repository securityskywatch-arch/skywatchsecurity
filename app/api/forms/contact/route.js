import { NextResponse } from "next/server";
import { sendStructuredFormEmail } from "@/lib/formEmail";

export async function POST(request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
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
    return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/contact?sent=0", request.url), 303);
  }
}
