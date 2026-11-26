"use client";
import { MotionConfigContext, motion } from "framer-motion";
import { useContext, useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Resolves effective reduced-motion state from MotionConfig and OS preference
 * after mount so SSR and initial hydration stay consistent while avoiding
 * hidden or half-faded opacity states before paint.
 */
export function useReducedMotionPreference() {
  const { reducedMotion } = useContext(MotionConfigContext);
  const [systemPrefersReduced, setSystemPrefersReduced] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemPrefersReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reducedMotion === "always") return true;
  if (reducedMotion === "never") return false;
  return systemPrefersReduced;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 }
  }
};

const reducedContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0, delayChildren: 0 }
  }
};

const item = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] }
  }
};

const reducedItem = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0 }
  }
};

function StaggerSection({ children, className }) {
  const reduced = useReducedMotionPreference();
  return (
    <motion.section
      className={className}
      initial="hidden"
      animate={reduced ? "visible" : undefined}
      whileInView={reduced ? undefined : "visible"}
      // Loose viewport so tall sections still trigger on mobile / iOS (avoid stuck opacity: 0 on Vercel)
      viewport={{ once: true, margin: "0px", amount: "some" }}
      variants={reduced ? reducedContainer : container}
    >
      {children}
    </motion.section>
  );
}

function StaggerItem({ children, className, as = "div" }) {
  const reduced = useReducedMotionPreference();
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      variants={reduced ? reducedItem : item}
      animate={reduced ? "visible" : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}

function Reveal({ children, className, delay = 0, as = "div" }) {
  const reduced = useReducedMotionPreference();
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px", amount: "some" }}
      transition={
        reduced
          ? { duration: 0, delay: 0 }
          : {
              duration: 0.65,
              delay,
              ease: [0.22, 1, 0.36, 1]
            }
      }
    >
      {children}
    </Component>
  );
}

export { Reveal, StaggerItem, StaggerSection };
