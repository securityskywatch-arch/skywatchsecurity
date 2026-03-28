"use client";
import { jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 }
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
function StaggerSection({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-72px", amount: 0.2 },
      variants: container,
      children
    }
  );
}
function StaggerItem({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(motion.div, { variants: item, className, children });
}
function Reveal({
  children,
  className,
  delay = 0
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-48px" },
      transition: {
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1]
      },
      children
    }
  );
}
export {
  Reveal,
  StaggerItem,
  StaggerSection
};
