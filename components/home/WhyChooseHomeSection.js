"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  FileCheck,
  Radio,
  Shield,
  Smartphone
} from "lucide-react";
import { useReducedMotionPreference } from "@/components/motion/scroll-reveal";
import { homeImages } from "@/lib/homeImages";
import { publicLiabilityCoverText } from "@/lib/siteContact";

const points = [
  {
    Icon: Shield,
    title: "Bespoke Assignment Instructions",
    text: "Every deployment begins with written Assignment Instructions tailored to your site access protocols, hazards, and emergency escalation paths."
  },
  {
    Icon: FileCheck,
    title: "Pre-Deployment Checks",
    text: "UK Right to Work, employment history, references, and criminal disclosure checks before an officer is deployed."
  },
  {
    Icon: Radio,
    title: "Active Field Supervision",
    text: "Unannounced supervisor visits and proactive welfare checks ensure assignment instructions are rigorously followed."
  },
  {
    Icon: Smartphone,
    title: "Electronic Patrol Scans",
    text: "Real-time RFID and NFC checkpoint verification providing transparent, auditable proof of patrol routes."
  },
  {
    Icon: Clock,
    title: "24/7 Operations Desk",
    text: "Round-the-clock operational support, lone-worker safety check-ins, and rapid emergency escalation."
  },
  ...(publicLiabilityCoverText()
    ? [
        {
          Icon: BadgeCheck,
          title: publicLiabilityCoverText(),
          text: `${publicLiabilityCoverText()}.`
        }
      ]
    : [])
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 }
  }
};

const reducedContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0, delayChildren: 0 }
  }
};

const item = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const reducedItem = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0 }
  }
};

function WhyChooseHomeSection() {
  const reduced = useReducedMotionPreference();

  return (
    <section className="relative overflow-x-clip border-b border-sage/20 bg-secondary px-4 py-16 dark:border-sage/25 dark:bg-base sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/4 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15 sm:h-96 sm:w-96 sm:translate-x-1/3 lg:-translate-y-1/4"
        aria-hidden="true"
      />
      <div className="relative mx-auto min-w-0 max-w-page">
        <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-10 lg:gap-y-12">
          <div className="min-w-0 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={reduced ? { opacity: 1, y: 0 } : undefined}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: "some" }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
              className="relative mx-auto aspect-[3/4] max-h-[min(70vh,28rem)] w-full max-w-md overflow-hidden rounded-2xl border border-sage/40 shadow-lift dark:border-sage/30 sm:max-h-[520px] sm:max-w-none lg:sticky lg:top-28 lg:mx-0"
            >
              <Image
                src={homeImages.whyChoose}
                alt="SkyWatch Security: professional security officer on commercial duty"
                fill={true}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/20 to-transparent dark:from-base/80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
                  Why SkyWatch
                </p>
                <p className="mt-1 text-base font-bold leading-snug text-secondary sm:mt-2 sm:text-lg">
                  Disciplined protection built on vigilance, precision, and verified presence.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={reduced ? { opacity: 1, y: 0 } : undefined}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduced ? { duration: 0 } : { duration: 0.55 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5c3d06] dark:text-accent sm:text-sm sm:tracking-[0.2em]">
                Commercial Accountability
              </p>
              <h2 className="mt-3 break-words text-[1.65rem] font-bold leading-tight tracking-tight text-base dark:text-secondary sm:text-3xl md:text-4xl">
                Why Choose SkyWatch Security?
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-base/80 dark:text-sage">
                Security is only as effective as the discipline behind it. Written assignment instructions
                and active field supervision mean officers are briefed on your site risks and represent your
                brand with calm authority.
              </p>
              <blockquote className="mt-6 break-words border-l-4 border-primary pl-5 font-medium italic text-base/90 dark:text-secondary/90">
                “Vigilance, Integrity, and Disciplined Site Protection.”
              </blockquote>
            </motion.div>
            <motion.ul
              className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-2"
              variants={reduced ? reducedContainer : container}
              initial="hidden"
              animate={reduced ? "visible" : undefined}
              whileInView={reduced ? undefined : "visible"}
              viewport={{ once: true, margin: "0px", amount: "some" }}
            >
              {points.map(({ Icon, title, text }) => (
                <motion.li
                  key={title}
                  variants={reduced ? reducedItem : item}
                  animate={reduced ? "visible" : undefined}
                  className="group rounded-xl border border-sage/35 bg-base/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-sage/30 dark:bg-secondary/[0.06]"
                >
                  <div className="flex min-w-0 gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition group-hover:border-primary group-hover:text-[#5c3d06] dark:group-hover:border-accent dark:group-hover:text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-words font-semibold text-base dark:text-secondary">
                        {title}
                      </h3>
                      <p className="mt-1 break-words text-sm leading-relaxed text-base/75 dark:text-sage">
                        {text}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="mt-10 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={reduced ? { opacity: 1, y: 0 } : undefined}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduced ? { duration: 0, delay: 0 } : { delay: 0.2, duration: 0.5 }}
            >
              <Link
                href="/why-choose-us"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-base shadow-md touch-manipulation transition hover:bg-accent"
              >
                Read Our Operating Standards
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-sage/45 px-6 py-3 text-sm font-semibold text-primary-text touch-manipulation transition hover:border-primary dark:border-sage/40 dark:text-accent"
              >
                Request a Site Assessment
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WhyChooseHomeSection };
