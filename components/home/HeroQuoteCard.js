"use client";

import { Shield } from "lucide-react";
import { LoadingSubmitButton } from "@/components/forms/LoadingSubmitButton";
import {
  FieldError,
  FormStatusBanner,
  ValidatedForm,
  ValidatedInput,
  ValidatedTextarea
} from "@/components/forms/ValidatedForm";
import { siteContact } from "@/lib/siteContact";

const labelClass =
  "mb-0 block text-[0.8125rem] font-medium tracking-wide text-base/75 dark:text-[#d8d3c8]";
const fieldClass =
  "mt-1 w-full rounded-lg border border-sage/45 bg-white px-3 py-2 text-[0.875rem] text-base shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline-none transition placeholder:text-[#767676] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:border-white/12 dark:bg-white/[0.07] dark:text-[#f4f0e6] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#9a9488] dark:focus:border-primary/65 dark:ring-accent backdrop-blur-sm";

const successMessage =
  "Quote request sent successfully. Our operations desk will contact you shortly.";
const errorMessage = `Could not send request right now. Please call our 24/7 desk directly on ${siteContact.phone.display}.`;

function HeroQuoteCard({ initialStatus = null }) {
  return (
    <div className="min-w-0 w-full flex justify-center lg:justify-start">
      <div className="relative w-full max-w-[30rem] overflow-hidden rounded-2xl border border-sage/40 bg-gradient-to-b from-white/70 via-secondary/50 to-white/40 shadow-md ring-1 ring-sage/25 backdrop-blur-xl sm:max-w-[32rem] lg:max-w-none dark:border-sage/30 dark:from-secondary/[0.08] dark:via-base/45 dark:to-base/35 dark:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.65)] dark:shadow-lift-gold dark:ring-sage/25">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-[0.85]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 10% 0%, rgba(196,129,0,0.12), transparent 55%), radial-gradient(ellipse 90% 70% at 100% 100%, rgba(255,204,0,0.06), transparent 50%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
          aria-hidden="true"
        />
        <div
          className="h-0.5 w-full bg-gradient-to-r from-primary/80 via-accent/90 to-primary/80"
          aria-hidden="true"
        />
        <div className="relative px-4 pb-4 pt-4 sm:px-5 sm:pb-4 sm:pt-4">
          <div className="flex gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary shadow-sm backdrop-blur-sm">
              <Shield className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="min-w-0 pt-0.5">
              <h2
                id="hero-quote-heading"
                className="text-base font-bold tracking-tight text-base sm:text-lg dark:text-secondary"
              >
                Request a Proposal
              </h2>
              <p className="mt-0.5 text-xs leading-snug text-base/65 sm:text-[13px] dark:text-sage">
                Tell us your site requirements. We will reply within one business day.
              </p>
            </div>
          </div>
          <ValidatedForm
            className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-2.5"
            action="/api/forms/quote"
            method="post"
            aria-labelledby="hero-quote-heading"
            initialStatus={initialStatus}
            successMessage={successMessage}
            errorMessage={errorMessage}
          >
            <input type="hidden" name="quote_source" value="hero" />
            <FormStatusBanner className="text-xs" />
            <p className="text-[11px] text-base/70 sm:text-xs dark:text-sage">
              All fields are required unless marked optional.
            </p>
            <div>
              <label htmlFor="hero-quote-name" className={labelClass}>
                Full Name
              </label>
              <ValidatedInput
                id="hero-quote-name"
                name="name"
                required={true}
                minLength={2}
                maxLength={80}
                autoComplete="name"
                placeholder="e.g. John Smith"
                className={fieldClass}
              />
              <FieldError id="hero-quote-name-error" name="name">
                Please enter your name (at least 2 characters).
              </FieldError>
            </div>
            <div>
              <label htmlFor="hero-quote-email" className={labelClass}>
                Work Email
              </label>
              <ValidatedInput
                id="hero-quote-email"
                name="email"
                type="email"
                inputMode="email"
                required={true}
                autoComplete="email"
                placeholder="e.g. j.smith@company.co.uk"
                className={fieldClass}
              />
              <FieldError id="hero-quote-email-error" name="email">
                Please enter a valid work email.
              </FieldError>
            </div>
            <div>
              <label htmlFor="hero-quote-phone" className={labelClass}>
                Contact Telephone
              </label>
              <ValidatedInput
                id="hero-quote-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required={true}
                autoComplete="tel"
                pattern="^\+?[0-9\(\)\-\s]{7,20}$"
                title="Please enter a valid phone number"
                placeholder="e.g. 07365 128 680"
                className={fieldClass}
              />
              <FieldError id="hero-quote-phone-error" name="phone">
                Please enter a valid UK contact number.
              </FieldError>
            </div>
            <div>
              <label htmlFor="hero-quote-msg" className={labelClass}>
                Assignment Requirements
              </label>
              <ValidatedTextarea
                id="hero-quote-msg"
                name="message"
                rows={2}
                required={true}
                minLength={10}
                maxLength={1000}
                placeholder="Site location, hours required, service type (guarding, patrols, alarm response)..."
                className={`${fieldClass} min-h-[3.75rem] resize-y sm:min-h-16`}
              />
              <FieldError id="hero-quote-msg-error" name="message">
                Please add at least 10 characters describing your requirement.
              </FieldError>
            </div>
            <div className="mt-0.5">
              <LoadingSubmitButton
                idleLabel="Submit Quotation Request"
                loadingLabel="Sending..."
                className="flex min-h-[42px] w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold tracking-wide text-[#141414] shadow-sm transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-75"
              />
            </div>
            <p className="mt-1 text-center text-[10px] leading-tight text-[#5c574c] sm:text-[11px] dark:text-sage/75">
              Confidential. We never share or sell client details.
            </p>
          </ValidatedForm>
        </div>
      </div>
    </div>
  );
}

export { HeroQuoteCard };