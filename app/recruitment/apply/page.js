import Link from "next/link";
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

const metadata = {
  title: "Application Form",
  description: "Register your details for future security opportunities. No CV upload required."
};

const inputClass =
  "mt-2 w-full rounded-lg border border-sage/50 bg-secondary px-3 py-2.5 text-base outline-none placeholder:text-[#6B6350] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:bg-base dark:text-secondary dark:placeholder:text-[#9a9488] dark:ring-accent";

const textFields = [
  {
    id: "full_name",
    label: "Full name",
    type: "text",
    required: true,
    minLength: 2,
    maxLength: 100,
    autoComplete: "name",
    error: "Please enter a valid full name."
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    inputMode: "email",
    required: true,
    autoComplete: "email",
    error: "Please enter a valid email address, e.g. name@email.co.uk."
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    inputMode: "tel",
    required: true,
    autoComplete: "tel",
    pattern: "^\\+?[0-9\\(\\)\\-\\s]{7,20}$",
    title: "Please enter a valid UK phone number",
    error: "Please enter a valid UK phone number."
  },
  {
    id: "postcode",
    label: "Home postcode",
    type: "text",
    required: true,
    minLength: 3,
    maxLength: 12,
    autoComplete: "postal-code",
    title: "Please enter a valid UK postcode",
    error: "Please enter a valid UK postcode, e.g. LU1 3HH."
  },
  {
    id: "sia_number",
    label: "SIA licence number (optional)",
    type: "text",
    required: false,
    maxLength: 30,
    autoComplete: "off",
    error: "Please enter a valid SIA licence number."
  }
];

function ApplyPage({ searchParams }) {
  const sent = searchParams?.sent;
  const successMessage =
    "Application submitted successfully. We will contact suitable candidates.";
  const errorMessage = `We could not submit your application right now. Please try again shortly or call our desk on ${siteContact.phone.display}.`;
  const initialStatus =
    sent === "1"
      ? { type: "success", message: successMessage }
      : sent === "0"
        ? { type: "error", message: errorMessage }
        : null;

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-secondary px-4 py-14 focus:outline-none dark:bg-base sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/recruitment" className="inline-flex min-h-[44px] items-center py-1.5 text-sm text-primary-text hover:text-[#5c3d06] sm:min-h-[24px] sm:py-1 dark:text-primary dark:hover:text-accent">
          ← Recruitment
        </Link>
        <Reveal>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-base dark:text-secondary sm:text-4xl">
            Application form
          </h1>
          <p className="mt-3 leading-relaxed text-base/75 dark:text-sage">
            Share your core details for manual shortlisting. We review applications and contact suitable
            candidates when roles are available.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <ValidatedForm
            className="brand-card brand-card-interactive mt-10 space-y-5 p-6 sm:p-8"
            action="/api/forms/application"
            method="post"
            initialStatus={initialStatus}
            successMessage={successMessage}
            errorMessage={errorMessage}
          >
            <FormStatusBanner className="text-sm" />
            <p className="text-xs text-base/70 dark:text-sage">
              All fields are required unless marked optional.
            </p>
            {textFields.map(({ error, id, label, ...fieldProps }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-base dark:text-secondary"
                >
                  {label}
                </label>
                <ValidatedInput id={id} name={id} className={inputClass} {...fieldProps} />
                <FieldError id={`${id}-error`} name={id}>
                  {error}
                </FieldError>
              </div>
            ))}
            <div>
              <label
                htmlFor="right_to_work"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Do you have the right to work in the UK?
              </label>
              <ValidatedSelect
                id="right_to_work"
                name="right_to_work"
                required={true}
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled={true}>
                  Select an option
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </ValidatedSelect>
              <FieldError id="right_to_work-error" name="right_to_work">
                Please select if you have the right to work in the UK.
              </FieldError>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="experience_years"
                  className="block text-sm font-medium text-base dark:text-secondary"
                >
                  Security experience
                </label>
                <ValidatedSelect
                  id="experience_years"
                  name="experience_years"
                  required={true}
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled={true}>
                    Select
                  </option>
                  <option value="none">No direct experience</option>
                  <option value="0-1">Up to 1 year</option>
                  <option value="1-3">1 to 3 years</option>
                  <option value="3-5">3 to 5 years</option>
                  <option value="5+">5+ years</option>
                </ValidatedSelect>
                <FieldError id="experience_years-error" name="experience_years">
                  Please select your security experience.
                </FieldError>
              </div>
              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-base dark:text-secondary"
                >
                  Availability
                </label>
                <ValidatedSelect
                  id="availability"
                  name="availability"
                  required={true}
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled={true}>
                    Select
                  </option>
                  <option value="days">Days</option>
                  <option value="nights">Nights</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                </ValidatedSelect>
                <FieldError id="availability-error" name="availability">
                  Please select your availability.
                </FieldError>
              </div>
            </div>
            <div>
              <label
                htmlFor="preferred_regions"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Preferred work area(s)
              </label>
              <ValidatedInput
                id="preferred_regions"
                name="preferred_regions"
                type="text"
                required={true}
                minLength={2}
                maxLength={120}
                placeholder="e.g. Luton, Bedfordshire, Hertfordshire, London"
                className={inputClass}
              />
              <FieldError id="preferred_regions-error" name="preferred_regions">
                Please enter your preferred work areas.
              </FieldError>
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-base dark:text-secondary"
              >
                Relevant notes
              </label>
              <ValidatedTextarea
                id="notes"
                name="notes"
                rows={4}
                required={true}
                minLength={10}
                maxLength={1800}
                placeholder="Any additional details (licences, transport, notice period, preferred role)"
                className={inputClass}
              />
              <FieldError id="notes-error" name="notes">
                Please add at least 10 characters in relevant notes.
              </FieldError>
            </div>
            <LoadingSubmitButton
              idleLabel="Submit application"
              loadingLabel="Sending..."
              className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-base hover:bg-accent disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto sm:px-10"
            />
          </ValidatedForm>
        </Reveal>
      </div>
    </main>
  );
}

export { ApplyPage as default, metadata };
