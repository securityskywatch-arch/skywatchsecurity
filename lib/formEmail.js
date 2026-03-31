import nodemailer from "nodemailer";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass || Number.isNaN(port)) {
    throw new Error("Missing SMTP configuration.");
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });
}

function buildRows(fields) {
  return fields.map(({ label, value }) => {
    const safeLabel = escapeHtml(label);
    const safeValue = escapeHtml(value || "-");
    return `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;background:#faf7ef;">${safeLabel}</td><td style="padding:8px;border:1px solid #ddd;">${safeValue}</td></tr>`;
  }).join("");
}

async function sendStructuredFormEmail({
  subject,
  formType,
  fields,
  replyTo
}) {
  const to = process.env.FORM_TO_EMAIL || "admin@skywatchsecurity.co.uk";
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  if (!from) throw new Error("Missing SMTP_FROM/SMTP_USER.");
  const transporter = getTransport();
  const rows = buildRows(fields);
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#1a1a1a;">
      <h2 style="margin:0 0 12px;">${escapeHtml(subject)}</h2>
      <p style="margin:0 0 12px;"><strong>Form type:</strong> ${escapeHtml(formType)}</p>
      <table style="border-collapse:collapse;width:100%;max-width:760px;">${rows}</table>
      <p style="margin-top:14px;font-size:12px;color:#666;">Sent from SkyWatch Security website.</p>
    </div>
  `;
  const text = [
    subject,
    `Form type: ${formType}`,
    ...fields.map((f) => `${f.label}: ${f.value || "-"}`),
    "Sent from SkyWatch Security website."
  ].join("\n");
  await transporter.sendMail({
    from,
    to,
    replyTo: replyTo || undefined,
    subject,
    text,
    html
  });
}

export {
  sendStructuredFormEmail
};
