"use client";

import { useValidatedForm } from "@/components/forms/ValidatedForm";

function LoadingSubmitButton({
  idleLabel,
  loadingLabel = "Sending...",
  className = ""
}) {
  const { isSubmitting } = useValidatedForm();

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      aria-busy={isSubmitting ? "true" : undefined}
      className={className}
    >
      {isSubmitting ? loadingLabel : idleLabel}
    </button>
  );
}

export {
  LoadingSubmitButton
};
