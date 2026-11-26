import { Mail, MapPin, Phone } from "lucide-react";
import { LoadingSubmitButton } from "@/components/forms/LoadingSubmitButton";
import {
  FieldError,
  FormStatusBanner,
  ValidatedForm,
  ValidatedInput,
  ValidatedTextarea
} from "@/components/forms/ValidatedForm";
import { Reveal } from "@/components/motion/scroll-reveal";
import { siteContact } from "@/lib/siteContact";

const metadata = {
  title: "Contact SkyWatch Security Ltd | Luton HQ & 24/7 Desk",
  description:
    "Contact SkyWatch Security Ltd in Luton. Phone +44 7365 128 680 or email admin@skywatchsecurity.co.uk for commercial security across Bedfordshire & London."
};

function ContactPage({ searchParams }) {
  const sent = searchParams?.sent;
  const successMessage =
    "Message sent successfully. Our operations team will contact you shortly.";
  const errorMessage = `Unable to send message right now. Please call our 24/7 operations desk directly on ${siteContact.phone.display}.`;
  const initialStatus =
    sent === "1"
      ? { type: "success", message: successMessage }
      : sent === "0"
        ? { type: "error", message: errorMessage }
        : null;

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary focus:outline-none dark:bg-base">
      <section className="border-b border-sage/30 bg-base px-4 py-14 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact SkyWatch Security Ltd
          </h1>
          <p className="mt-4 text-lg text-sage">
            Speak directly with our operations desk regarding commercial guarding, mobile patrols,
            alarm response, or key holding contracts.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-page gap-8 px-4 py-14 lg:grid-cols-2 sm:px-6 lg:px-8">
        <Reveal>
          <div className="brand-card brand-card-interactive space-y-6 p-8">
            <div>
              <h2 className="text-xl font-bold text-base dark:text-secondary">
                Operating Headquarters & Contact
              </h2>
              <p className="mt-1 text-xs text-[#5c574c] dark:text-sage">
                Registered in England and Wales · Company No. 16520149
              </p>
            </div>

            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="min-w-0 text-sm leading-relaxed text-base/80 dark:text-sage">
                {siteContact.addressLines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-base dark:text-secondary">Operations Desk (24/7)</p>
                <a
                  href={`tel:${siteContact.phone.tel}`}
                  className="mt-0.5 inline-flex min-h-[44px] items-center gap-2 py-1 text-sm font-medium text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-0.5 dark:text-primary dark:hover:text-accent"
                >
                  {siteContact.phone.display}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-base dark:text-secondary">Direct Email</p>
                <a
                  href={`mailto:${siteContact.email}`}
                  className="mt-0.5 inline-flex min-h-[44px] items-center py-1 text-sm text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-0.5 dark:text-primary dark:hover:text-accent"
                >
                  {siteContact.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary opacity-70" aria-hidden="true" />
              <div>
                <p className="font-semibold text-base dark:text-secondary">Primary Operating Corridor</p>
                <p className="mt-1 text-sm text-base/80 dark:text-sage">{siteContact.coverageArea}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <ValidatedForm
            className="brand-card brand-card-interactive space-y-4 p-8"
            action="/api/forms/contact"
            method="post"
            initialStatus={initialStatus}
            successMessage={successMessage}
            errorMessage={errorMessage}
          >
            <FormStatusBanner className="text-sm" />
            <h2 className="text-lg font-semibold text-base dark:text-secondary">
              Direct Enquiry Form
            </h2>
            <p className="text-xs text-base/70 dark:text-sage">
              All fields are required unless marked optional.
            </p>

            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Full Name
              </label>
              <ValidatedInput
                id="contact-name"
                name="name"
                required={true}
                minLength={2}
                maxLength={80}
                autoComplete="name"
                placeholder="e.g. John Smith"
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
              />
              <FieldError id="contact-name-error" name="name">
                Please enter your name (at least 2 characters).
              </FieldError>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Work Email
              </label>
              <ValidatedInput
                id="contact-email"
                name="email"
                type="email"
                inputMode="email"
                required={true}
                autoComplete="email"
                placeholder="e.g. j.smith@company.co.uk"
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
              />
              <FieldError id="contact-email-error" name="email">
                Please enter a valid work email address.
              </FieldError>
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Contact Telephone
              </label>
              <ValidatedInput
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required={true}
                autoComplete="tel"
                pattern="^\+?[0-9\(\)\-\s]{7,20}$"
                title="Please enter a valid UK phone number"
                placeholder="e.g. 07365 128 680"
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
              />
              <FieldError id="contact-phone-error" name="phone">
                Please enter a valid UK contact number.
              </FieldError>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Message & Requirement Details
              </label>
              <ValidatedTextarea
                id="contact-message"
                name="message"
                rows={4}
                required={true}
                minLength={10}
                maxLength={1500}
                placeholder="e.g. Site location, required hours, and service enquiry..."
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
              />
              <FieldError id="contact-message-error" name="message">
                Please include at least 10 characters.
              </FieldError>
            </div>

            <LoadingSubmitButton
              idleLabel="Send Message to Operations"
              loadingLabel="Sending..."
              className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-base hover:bg-accent disabled:cursor-not-allowed disabled:opacity-75"
            />
          </ValidatedForm>
        </Reveal>
      </section>
    </main>
  );
}

export { ContactPage as default, metadata };
