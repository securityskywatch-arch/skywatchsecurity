"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HomeReviewCard } from "@/components/home/HomeReviewCard";
function useReviewsPerPage() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");
    const update = () => {
      if (mqLg.matches) setN(3);
      else if (mqSm.matches) setN(2);
      else setN(1);
    };
    update();
    mqLg.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);
  return n;
}
function chunkReviews(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}
function reviewKey(r) {
  return `${r.name}-${r.role}`;
}
const AUTO_MS = 6e3;
function HomeReviewsCarousel({ reviews }) {
  const perPage = useReviewsPerPage();
  const pages = useMemo(() => chunkReviews(reviews, perPage), [reviews, perPage]);
  const pageCount = pages.length;
  const [page, setPage] = useState(0);
  const clampedPage = Math.min(page, Math.max(0, pageCount - 1));
  useEffect(() => {
    if (page !== clampedPage) setPage(clampedPage);
  }, [page, clampedPage]);
  const go = useCallback(
    (dir) => {
      setPage((p) => {
        const next = p + dir;
        if (next < 0) return pageCount - 1;
        if (next >= pageCount) return 0;
        return next;
      });
    },
    [pageCount]
  );
  useEffect(() => {
    if (pageCount <= 1) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [pageCount, go]);
  if (pageCount === 0) return null;
  return /* @__PURE__ */ jsxs("div", { className: "relative mt-10 min-w-0", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden pb-2", "aria-roledescription": "carousel", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "flex",
        style: { width: `${pageCount * 100}%` },
        animate: { x: `-${clampedPage * 100 / pageCount}%` },
        transition: { type: "spring", stiffness: 260, damping: 32 },
        children: pages.map((group, pi) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "grid shrink-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
            style: { width: `${100 / pageCount}%` },
            "aria-hidden": pi !== clampedPage,
            children: group.map((r) => /* @__PURE__ */ jsx(HomeReviewCard, { review: r, staticEntry: true }, reviewKey(r)))
          },
          pi
        ))
      }
    ) }),
    pageCount > 1 ? /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => go(-1),
            className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage/40 text-primary transition hover:border-primary hover:bg-primary/10 dark:border-sage/35 dark:hover:bg-primary/15",
            "aria-label": "Previous testimonials",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => go(1),
            className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage/40 text-primary transition hover:border-primary hover:bg-primary/10 dark:border-sage/35 dark:hover:bg-primary/15",
            "aria-label": "Next testimonials",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", role: "tablist", "aria-label": "Testimonial pages", children: pages.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": i === clampedPage,
          "aria-label": `Go to testimonial page ${i + 1} of ${pageCount}`,
          onClick: () => setPage(i),
          className: "inline-flex h-10 w-10 items-center justify-center rounded-full touch-manipulation",
          children: /* @__PURE__ */ jsx("span", {
            className: `block h-2.5 rounded-full transition-all ${i === clampedPage ? "w-8 bg-primary dark:bg-accent" : "w-2.5 bg-sage/40 hover:bg-sage/60 dark:bg-sage/30"}`
          })
        },
        i
      )) })
    ] }) : null
  ] });
}
export {
  HomeReviewsCarousel
};
