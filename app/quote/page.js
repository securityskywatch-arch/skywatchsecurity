import { LoadingSubmitButton } from "@/components/forms/LoadingSubmitButton";
import {
  FieldError,
  FormStatusBanner,
  ValidatedForm,
  ValidatedInput,
  ValidatedSelect,
  ValidatedTextarea
} from "@/components/forms/ValidatedForm";
import { Reveal } from "@/components/motion/scroll-reveal";
import { siteContact } from "@/lib/siteContact";
import { withCanonical } from "@/lib/pageMetadata";

const metadata = withCanonical({
  title: "Request a Security Quote",
  description:
    "Request a commercial security quote for guarding, key holding or patrols in Luton, Bedfordshire and London."
}, "/quote");

function QuotePage({ searchParams }) {
  const sent = searchParams?.sent;
  const initialService = searchParams?.service ?? "";
  const successMessage =
    "Quote request sent successfully. Our operations desk will review and contact you shortly.";
  const errorMessage = `We could not send your quote request right now. Please call our operations desk directly on ${siteContact.phone.display}.`;
  const initialStatus =
    sent === "1"
      ? { type: "success", message: successMessage }
      : sent === "0"
        ? { type: "error", message: errorMessage }
        : null;

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary px-4 py-16 focus:outline-none dark:bg-base sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h1 className="text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl">
            Request a Commercial Quotation
          </h1>
          <p className="mt-3 leading-relaxed text-base/75 dark:text-sage">
            Submit your site profile and coverage requirements below. Our commercial team will respond with
            a transparent, itemised proposal within one business day. For urgent cover, call our 24/7 desk on{" "}
            <a
              href={`tel:${siteContact.phone.tel}`}
              className="font-semibold text-primary-text underline-offset-2 hover:underline dark:text-primary"
            >
              {siteContact.phone.display}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ValidatedForm
            className="brand-card brand-card-interactive mt-10 space-y-6 p-6 sm:p-8"
            action="/api/forms/quote"
            method="post"
            initialStatus={initialStatus}
            successMessage={successMessage}
            errorMessage={errorMessage}
          >
            <FormStatusBanner className="text-sm" />
            <p className="text-xs text-base/70 dark:text-sage">
              All fields are required unless marked optional.
            </p>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Contact Name
              </label>
              <ValidatedInput
                id="name"
                name="name"
                required={true}
                minLength={2}
                maxLength={80}
                autoComplete="name"
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
                placeholder="e.g. John Smith"
              />
              <FieldError id="name-error" name="name">
                Please enter your name (at least 2 characters).
              </FieldError>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Work Email Address
              </label>
              <ValidatedInput
                id="email"
                name="email"
                type="email"
                inputMode="email"
                required={true}
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
                placeholder="e.g. j.smith@company.co.uk"
              />
              <FieldError id="email-error" name="email">
                Please enter a valid work email address.
              </FieldError>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Contact Telephone
              </label>
              <ValidatedInput
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required={true}
                autoComplete="tel"
                pattern="^\+?[0-9\(\)\-\s]{7,20}$"
                title="Please enter a valid UK phone number"
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
                placeholder="e.g. 07365 128 680"
              />
              <FieldError id="phone-error" name="phone">
                Please enter a valid UK contact number.
              </FieldError>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Primary Service Required
              </label>
              <ValidatedSelect
                id="service"
                name="service"
                required={true}
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:ring-accent"
                defaultValue={initialService}
              >
                <option value="" disabled={true}>
                  Select a commercial security service
                </option>
                <option value="manned-security-guards">Static Site & Perimeter Guarding</option>
                <option value="key-holding-alarm-response">Key Holding & Rapid Alarm Response</option>
                <option value="mobile-patrols">Mobile Vehicle Patrols</option>
                <option value="construction-security">Construction Site & Plant Security</option>
                <option value="concierge-security">Concierge Security & Access Desks</option>
                <option value="corporate-security">Corporate Headquarters Security</option>
                <option value="cctv-monitoring">CCTV & Remote Surveillance</option>
                <option value="event-security">Event Safety & Crowd Management</option>
                <option value="industrial-warehouse">Logistics Hub & Warehouse Loss Prevention</option>
                <option value="commercial-security">Commercial Estate & Facility Protection</option>
                <option value="retail-security">Retail Store Security & Loss Prevention</option>
                <option value="door-supervision">Licensed Venue & Door Management</option>
                <option value="educational-campus">Educational Institution & Campus Safety</option>
                <option value="dog-handling">K9 Patrol & Canine Deterrence Teams</option>
                <option value="close-protection">Executive Escort & Close Protection</option>
                <option value="blended">Multiple / Blended Security Services</option>
              </ValidatedSelect>
              <FieldError id="service-error" name="service">
                Please select a service.
              </FieldError>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Site Details & Operational Requirements
              </label>
              <ValidatedTextarea
                id="message"
                name="message"
                rows={5}
                required={true}
                minLength={10}
                maxLength={1800}
                className="mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent"
                placeholder="Site location (town/postcode), required shift hours (e.g. 24/7 or nights/weekends), hazards, target start date..."
              />
              <FieldError id="message-error" name="message">
                Please provide site details such as location, hours, and service type (minimum 10 characters).
              </FieldError>
            </div>

            <LoadingSubmitButton
              idleLabel="Submit Quotation Request"
              loadingLabel="Sending..."
              className="w-full rounded-md bg-primary py-3 text-sm font-bold text-base transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto sm:px-10"
            />
          </ValidatedForm>
        </Reveal>
      </div>
    </main>
  );
}

export { QuotePage as default, metadata };
