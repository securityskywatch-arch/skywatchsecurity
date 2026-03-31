"use client";

import { jsx } from "react/jsx-runtime";
import { useFormStatus } from "react-dom";

function LoadingSubmitButton({
  idleLabel,
  loadingLabel = "Sending...",
  className = ""
}) {
  const { pending } = useFormStatus();
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "submit",
      disabled: pending,
      className,
      children: pending ? loadingLabel : idleLabel
    }
  );
}

export {
  LoadingSubmitButton
};
