import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Reveal, StaggerItem, StaggerSection } from "@/components/motion/scroll-reveal";
import { StarRating } from "@/components/ui/StarRating";
import { reviews } from "@/lib/reviews";
const metadata = {
  title: "Customer Reviews",
  description: "What clients say about SkyWatch Security."
};
function ReviewsPage() {
  return /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-secondary dark:bg-base", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-sage/30 bg-base px-4 py-12 text-secondary sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Customer reviews" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sage", children: "Feedback from facilities, operations, and estates teams we support." })
    ] }) }),
    /* @__PURE__ */ jsxs(StaggerSection, { className: "mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: reviews.map((r) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("blockquote", { className: "brand-card brand-card-interactive group relative h-full overflow-hidden p-6 transition duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsx(StarRating, { value: r.rating }),
          /* @__PURE__ */ jsx(Quote, { className: "h-7 w-7 shrink-0 text-primary/30 dark:text-primary/40", "aria-hidden": true })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "relative mt-4 text-sm leading-relaxed text-base/90 dark:text-sage", children: [
          "\u201C",
          r.quote,
          "\u201D"
        ] }),
        /* @__PURE__ */ jsxs("footer", { className: "relative mt-5 border-t border-sage/25 pt-4 dark:border-sage/20", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-base dark:text-secondary", children: r.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-base/65 dark:text-sage", children: r.role })
        ] })
      ] }) }, `${r.name}-${r.role}`)) }),
      /* @__PURE__ */ jsx(Reveal, { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/quote",
          className: "inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-base hover:bg-accent",
          children: "Request a quote"
        }
      ) })
    ] })
  ] });
}
export {
  ReviewsPage as default,
  metadata
};
