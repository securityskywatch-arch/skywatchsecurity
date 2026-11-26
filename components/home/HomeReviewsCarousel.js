"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HomeReviewCard } from "@/components/home/HomeReviewCard";
import { useReducedMotionPreference } from "@/components/motion/scroll-reveal";

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

const AUTO_MS = 6000;

function HomeReviewsCarousel({ reviews }) {
  const perPage = useReviewsPerPage();
  const reducedMotion = useReducedMotionPreference();
  const pages = useMemo(() => chunkReviews(reviews, perPage), [reviews, perPage]);
  const pageCount = pages.length;
  const [page, setPage] = useState(0);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedWithin, setIsFocusedWithin] = useState(false);

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

  const isPaused = isUserPaused || reducedMotion;
  const isAutoRotating =
    pageCount > 1 &&
    !reducedMotion &&
    !isUserPaused &&
    !isHovered &&
    !isFocusedWithin;

  useEffect(() => {
    if (!isAutoRotating) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [isAutoRotating, go]);

  if (pageCount === 0) return null;

  return (
    <div
      className="relative mt-10 min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocusedWithin(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsFocusedWithin(false);
        }
      }}
    >
      <div
        className="overflow-hidden pb-2"
        aria-live={isAutoRotating ? undefined : "polite"}
      >
        <motion.div
          className="flex"
          style={{ width: `${pageCount * 100}%` }}
          animate={{ x: `-${(clampedPage * 100) / pageCount}%` }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 260, damping: 32 }
          }
        >
          {pages.map((group, pi) => (
            <div
              key={pi}
              className="grid shrink-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              style={{ width: `${100 / pageCount}%` }}
              aria-hidden={pi !== clampedPage}
            >
              {group.map((r) => (
                <HomeReviewCard
                  key={reviewKey(r)}
                  review={r}
                  staticEntry={true}
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {pageCount > 1 ? (
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage/40 text-primary transition hover:border-primary hover:bg-primary/10 dark:border-sage/35 dark:hover:bg-primary/15"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (!reducedMotion) setIsUserPaused((p) => !p);
              }}
              disabled={reducedMotion}
              aria-pressed={isPaused}
              aria-label={
                reducedMotion
                  ? "Play testimonials auto-rotation (disabled for reduced motion)"
                  : isPaused
                    ? "Play testimonials auto-rotation"
                    : "Pause testimonials auto-rotation"
              }
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-sage/40 px-3.5 py-2 text-xs font-semibold text-[#5c3d06] transition hover:border-primary hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-sage/35 dark:text-accent dark:hover:bg-primary/15"
            >
              {isPaused ? (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Play</span>
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Pause</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage/40 text-primary transition hover:border-primary hover:bg-primary/10 dark:border-sage/35 dark:hover:bg-primary/15"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-current={i === clampedPage ? "true" : undefined}
                aria-label={`Show review ${i + 1} of ${pageCount}`}
                onClick={() => setPage(i)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full touch-manipulation"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all ${
                    i === clampedPage
                      ? "w-8 bg-primary dark:bg-accent"
                      : "w-2.5 bg-sage/40 hover:bg-sage/60 dark:bg-sage/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { HomeReviewsCarousel };
