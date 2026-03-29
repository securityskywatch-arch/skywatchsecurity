"use client";
import { jsx } from "react/jsx-runtime";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const STORAGE_KEY = "skywatch_loader_shown";
const DISPLAY_MS = 2000;

export function SiteLoader({ logoSrc }) {
  const [visible, setVisible] = useState(true);
  const skipIntroRef = useRef(false);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        skipIntroRef.current = true;
        setVisible(false);
      }
    } catch {
      /* private mode — show intro */
    }
  }, []);

  useEffect(() => {
    if (skipIntroRef.current) return;
    const t = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, DISPLAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  return /* @__PURE__ */ jsx(AnimatePresence, {
    children: visible
      ? /* @__PURE__ */ jsx(
          motion.div,
          {
            key: "loader",
            className:
              "fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0c0c]",
            initial: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            "aria-busy": "true",
            "aria-label": "Loading",
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "relative h-28 w-56 sm:h-32 sm:w-64",
                initial: { opacity: 0, scale: 0.94 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                children: /* @__PURE__ */ jsx(Image, {
                  src: logoSrc,
                  alt: "SkyWatch Security",
                  fill: true,
                  className: "object-contain",
                  priority: true,
                  sizes: "(max-width: 640px) 224px, 256px",
                }),
              },
            ),
          },
        )
      : null,
  });
}
