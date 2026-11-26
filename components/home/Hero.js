"use client";
import Link from "next/link";
import { ArrowRight, Check, Shield } from "lucide-react";
import { LoadingSubmitButton } from "@/components/forms/LoadingSubmitButton";
import {
  FieldError,
  FormStatusBanner,
  ValidatedForm,
  ValidatedInput,
  ValidatedTextarea
} from "@/components/forms/ValidatedForm";
import { siteContact } from "@/lib/siteContact";

const heroServices = [
  "Static Site & Perimeter Guarding",
  "Key Holding & Alarm Response",
  "Mobile Vehicle Patrols",
  "Construction Compound Security",
  "Concierge Security & Access Desks",
  "Corporate Headquarters Security",
  "CCTV & Remote Surveillance",
  "Logistics Hub & Warehouse Security",
];

const labelClass =
  "mb-0 block text-[0.8125rem] font-medium tracking-wide text-base/75 dark:text-[#d8d3c8]";
const fieldClass =
  "mt-1 w-full rounded-lg border border-sage/45 bg-white px-3 py-2 text-[0.875rem] text-base shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline-none transition placeholder:text-[#767676] focus:border-primary focus-visible:ring-2 ring-[#5C3D06] dark:border-white/12 dark:bg-white/[0.07] dark:text-[#f4f0e6] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:placeholder:text-[#9a9488] dark:focus:border-primary/65 dark:ring-accent backdrop-blur-sm";

function Hero({ heroSent }) {
  const successMessage =
    "Quote request sent successfully. Our operations desk will contact you shortly.";
  const errorMessage = `Could not send request right now. Please call our 24/7 desk directly on ${siteContact.phone.display}.`;
  const initialStatus =
    heroSent === "1"
      ? { type: "success", message: successMessage }
      : heroSent === "0"
        ? { type: "error", message: errorMessage }
        : null;

  return (
    <section className="relative overflow-hidden border-b border-sage/25 bg-secondary px-4 pb-14 pt-8 dark:border-white/[0.06] dark:bg-[#0c0c0c] sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#faf6ec_0%,#f3ecdc_42%,#efe6d4_100%)] dark:bg-[linear-gradient(180deg,#141414_0%,#0c0c0c_45%,#0a0a0a_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 100% 0%, rgba(196,129,0,0.14), transparent 52%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(255,204,0,0.08), transparent 48%)",
        }}
      />
      <div className="relative z-[1] mx-auto w-full min-w-0 max-w-page">
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-6 xl:gap-8">
          <div className="min-w-0 max-w-xl lg:max-w-none">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.12] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5c3d06] dark:text-accent sm:text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping motion-reduce:animate-none rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Commercial Enquiries Open
            </div>
            <h1 className="text-balance text-[1.625rem] font-bold leading-snug tracking-tight text-base sm:text-3xl sm:leading-snug lg:text-[2.125rem] lg:leading-tight xl:text-[2.25rem] dark:text-white">
              Professional Site & Commercial Security Across Bedfordshire & London
            </h1>
            <p className="mt-4 text-base leading-relaxed text-base/75 sm:mt-5 sm:max-w-[34rem] sm:text-[1.0625rem] sm:leading-relaxed lg:max-w-none lg:text-[1.085rem] xl:pr-4 dark:text-[#c4bfb4]">
              Vigilance, Integrity, and Disciplined Site Protection. Dedicated static guarding, mobile
              patrols, key holding, and CCTV monitoring for commercial and industrial sites.
            </p>
            <p className="mt-3 text-xs font-medium text-[#5c574c] sm:text-[13px] dark:text-[#a69f8f]">
              Covering Luton, Bedfordshire, Hertfordshire, and Greater London.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-2 lg:gap-x-12">
              {heroServices.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-base/85 dark:text-[#e8e4dc]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/55 bg-white text-[#5c3d06] shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:border-transparent dark:bg-primary/25 dark:text-accent dark:shadow-none">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/services"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-sage/50 bg-base/[0.04] px-5 py-2.5 text-sm font-semibold text-base transition hover:border-primary/50 hover:bg-base/[0.07] hover:text-primary-text dark:border-white/25 dark:bg-white/[0.06] dark:text-white dark:hover:border-accent/60 dark:hover:bg-white/[0.1] dark:hover:text-accent"
              >
                Explore All 18 Services
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-[#5c574c] underline decoration-[#5c3d06]/35 underline-offset-[5px] transition hover:text-[#3d2904] sm:min-h-0 sm:py-2.5 dark:text-[#b5ae9e] dark:decoration-white/20 dark:hover:text-accent"
              >
                Detailed Tender Form
              </Link>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}

export { Hero };
