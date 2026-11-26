"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { getServiceImage } from "@/lib/serviceImages";

export function ServiceCard({ slug }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const { Icon } = service;
  const imageSrc = getServiceImage(slug);

  return (
    <Link
      href={`/services/${service.slug}`}
      prefetch={false}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border-2 border-base/15 bg-gradient-to-br from-secondary via-[#fdf4d4] to-base/[0.09] shadow-md shadow-base/[0.07] ring-1 ring-primary/25 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift-gold hover:ring-primary/45 dark:border-secondary/15 dark:bg-gradient-to-br dark:from-base dark:via-[#22211c] dark:to-secondary/[0.07] dark:shadow-black/40 dark:ring-primary/30 dark:hover:border-primary/55 dark:hover:ring-primary/50"
    >
      {/* Interior lighting & ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl shadow-card-inset-light dark:shadow-card-inset-dark"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-[20%] -top-[25%] h-[85%] w-[85%] rounded-full bg-gradient-to-br from-primary/25 via-accent/15 to-transparent opacity-40 blur-3xl motion-safe:animate-brand-ambient motion-reduce:animate-none motion-reduce:opacity-25 dark:from-primary/30 dark:via-accent/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 10% 0%, rgba(196,129,0,0.18), transparent 55%), radial-gradient(ellipse 90% 70% at 100% 100%, rgba(255,204,0,0.1), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60"
        aria-hidden="true"
      />

      {/* Service Image Frame */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-base/80">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-base to-secondary/30">
            <Shield className="h-12 w-12 text-primary/40" aria-hidden="true" />
          </div>
        )}

        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/35 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-60 dark:from-[#141414] dark:via-[#141414]/40"
          aria-hidden="true"
        />

        {/* Floating icon badge */}
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-base/85 text-primary shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:border-primary dark:bg-[#141414]/90">
          <Icon className="h-4 w-4 transition duration-300 group-hover:text-accent" aria-hidden="true" />
        </div>

        {/* Subtle bottom border on image */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Card Body Content */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="line-clamp-2 text-base font-bold leading-snug tracking-tight text-[#1a1a1a] transition duration-300 group-hover:text-primary-text dark:text-secondary dark:group-hover:text-primary sm:text-lg">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-base/75 dark:text-sage">
          {service.short}
        </p>

        {/* Action / Learn More */}
        <div className="mt-5 flex items-center justify-between border-t border-sage/15 pt-3.5 dark:border-sage/20">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#5c3d06] transition-colors duration-300 group-hover:text-primary-text dark:text-accent dark:group-hover:text-primary">
            Learn more
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-[#5c574c] dark:text-sage/85">
            SIA Aligned
          </span>
        </div>
      </div>
    </Link>
  );
}
