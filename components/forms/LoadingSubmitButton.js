"use client";

import { jsx } from "react/jsx-runtime";
import { useState } from "react";

function LoadingSubmitButton({
  idleLabel,
  loadingLabel = "Sending...",
  className = ""
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "submit",
      disabled: isSubmitting,
      onClick: () => setIsSubmitting(true),
      className,
      children: isSubmitting ? loadingLabel : idleLabel
    }
  );
}

export {
  LoadingSubmitButton
};
