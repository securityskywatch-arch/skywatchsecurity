"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from "react";

const ValidatedFormContext = createContext({
  isSubmitting: false,
  fieldErrors: {},
  status: null,
  statusRef: { current: null },
  syncFieldValidity: () => {}
});

function useValidatedForm() {
  return useContext(ValidatedFormContext);
}

function isElementValid(element) {
  if (!element || typeof element.checkValidity !== "function") {
    return true;
  }
  if (!element.checkValidity()) {
    return false;
  }
  const value = typeof element.value === "string" ? element.value.trim() : "";
  if (element.required && value.length === 0) {
    return false;
  }
  const minLengthAttr = element.getAttribute("minlength");
  if (minLengthAttr && value.length > 0 && value.length < Number(minLengthAttr)) {
    return false;
  }
  return true;
}

function ValidatedForm({
  className = "",
  action,
  method = "post",
  initialStatus = null,
  successMessage = "Submitted successfully.",
  errorMessage = "Unable to submit right now. Please try again or call our 24/7 desk.",
  children,
  onSubmit,
  ...props
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState(initialStatus);
  const [statusVersion, setStatusVersion] = useState(0);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const honeypotId = useId();

  const initialType = initialStatus?.type ?? null;
  const initialMessage = initialStatus?.message ?? null;

  useEffect(() => {
    setStatus(
      initialType && initialMessage
        ? { type: initialType, message: initialMessage }
        : null
    );
  }, [initialType, initialMessage]);

  useEffect(() => {
    if (statusVersion > 0 && status && statusRef.current) {
      statusRef.current.focus();
    }
  }, [status, statusVersion]);

  const syncFieldValidity = useCallback((element) => {
    if (!element?.name) return;
    const fieldName = element.name;
    setFieldErrors((prev) => {
      if (!prev[fieldName]) return prev;
      if (isElementValid(element)) {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      }
      return prev;
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const nextErrors = {};
    let firstInvalidElement = null;

    for (const element of Array.from(form.elements)) {
      if (!element.name || element.name === "company_website" || element.disabled) {
        continue;
      }
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        if (element.type === "hidden" || element.type === "submit" || element.type === "button") {
          continue;
        }
        if (!isElementValid(element)) {
          nextErrors[element.name] = true;
          if (!firstInvalidElement) {
            firstInvalidElement = element;
          }
        }
      }
    }

    if (firstInvalidElement) {
      setFieldErrors(nextErrors);
      setStatus(null);
      firstInvalidElement.focus();
      return;
    }

    setFieldErrors({});
    setStatus(null);
    onSubmit?.(event);

    if (!action) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData(form);
      const response = await fetch(action, {
        method: String(method || "post").toUpperCase(),
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (response.ok && payload?.ok) {
        form.reset();
        setFieldErrors({});
        setStatus({
          type: "success",
          message: payload.message || successMessage
        });
        setStatusVersion((v) => v + 1);
      } else {
        setStatus({
          type: "error",
          message: payload?.error || errorMessage
        });
        setStatusVersion((v) => v + 1);
      }
    } catch (error) {
      console.error("[ValidatedForm] Submission request failed:", error);
      setStatus({
        type: "error",
        message: errorMessage
      });
      setStatusVersion((v) => v + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contextValue = useMemo(
    () => ({
      isSubmitting,
      fieldErrors,
      status,
      statusRef,
      syncFieldValidity
    }),
    [isSubmitting, fieldErrors, status, syncFieldValidity]
  );

  return (
    <ValidatedFormContext.Provider value={contextValue}>
      <form
        ref={formRef}
        action={action}
        method={method}
        noValidate={true}
        className={className}
        onSubmit={handleSubmit}
        {...props}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
        >
          <label htmlFor={honeypotId}>Company website</label>
          <input
            id={honeypotId}
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
        {children}
      </form>
    </ValidatedFormContext.Provider>
  );
}

function FormStatusBanner({ className = "" }) {
  const { status, statusRef } = useValidatedForm();
  if (!status?.message) return null;

  const isSuccess = status.type === "success";
  const toneClasses = isSuccess
    ? "border-emerald-600/40 bg-emerald-500/10 text-emerald-800 dark:border-emerald-500/40 dark:text-emerald-300"
    : "border-red-600/40 bg-red-500/10 text-red-800 dark:border-red-500/40 dark:text-red-300";

  return (
    <p
      ref={statusRef}
      tabIndex={-1}
      role={isSuccess ? "status" : "alert"}
      aria-live={isSuccess ? "polite" : "assertive"}
      className={`rounded-md border px-3 py-2 outline-none focus-visible:ring-2 ring-[#5C3D06] dark:ring-accent ${toneClasses} ${className}`.trim()}
    >
      {status.message}
    </p>
  );
}

function ValidatedInput({
  id,
  name,
  errorId,
  className = "",
  onInput,
  onChange,
  ...props
}) {
  const { fieldErrors, syncFieldValidity } = useValidatedForm();
  const hasError = Boolean(name && fieldErrors[name]);
  const resolvedErrorId = errorId || (id ? `${id}-error` : undefined);

  return (
    <input
      id={id}
      name={name}
      aria-invalid={hasError ? "true" : undefined}
      aria-describedby={hasError ? resolvedErrorId : undefined}
      className={`${className} ${hasError ? "border-red-600 dark:border-red-400" : ""}`.trim()}
      onInput={(event) => {
        syncFieldValidity(event.currentTarget);
        onInput?.(event);
      }}
      onChange={(event) => {
        syncFieldValidity(event.currentTarget);
        onChange?.(event);
      }}
      {...props}
    />
  );
}

function ValidatedSelect({
  id,
  name,
  errorId,
  className = "",
  onChange,
  children,
  ...props
}) {
  const { fieldErrors, syncFieldValidity } = useValidatedForm();
  const hasError = Boolean(name && fieldErrors[name]);
  const resolvedErrorId = errorId || (id ? `${id}-error` : undefined);

  return (
    <select
      id={id}
      name={name}
      aria-invalid={hasError ? "true" : undefined}
      aria-describedby={hasError ? resolvedErrorId : undefined}
      className={`${className} ${hasError ? "border-red-600 dark:border-red-400" : ""}`.trim()}
      onChange={(event) => {
        syncFieldValidity(event.currentTarget);
        onChange?.(event);
      }}
      {...props}
    >
      {children}
    </select>
  );
}

function ValidatedTextarea({
  id,
  name,
  errorId,
  className = "",
  onInput,
  onChange,
  ...props
}) {
  const { fieldErrors, syncFieldValidity } = useValidatedForm();
  const hasError = Boolean(name && fieldErrors[name]);
  const resolvedErrorId = errorId || (id ? `${id}-error` : undefined);

  return (
    <textarea
      id={id}
      name={name}
      aria-invalid={hasError ? "true" : undefined}
      aria-describedby={hasError ? resolvedErrorId : undefined}
      className={`${className} ${hasError ? "border-red-600 dark:border-red-400" : ""}`.trim()}
      onInput={(event) => {
        syncFieldValidity(event.currentTarget);
        onInput?.(event);
      }}
      onChange={(event) => {
        syncFieldValidity(event.currentTarget);
        onChange?.(event);
      }}
      {...props}
    />
  );
}

function FieldError({ id, name, className = "", children }) {
  const { fieldErrors } = useValidatedForm();
  const hasError = Boolean(name && fieldErrors[name]);

  return (
    <p
      id={id}
      hidden={!hasError}
      className={
        hasError
          ? `mt-1 text-xs font-medium text-red-700 dark:text-red-300 ${className}`.trim()
          : "hidden"
      }
    >
      {children}
    </p>
  );
}

export {
  FieldError,
  FormStatusBanner,
  ValidatedForm,
  ValidatedInput,
  ValidatedSelect,
  ValidatedTextarea,
  useValidatedForm
};
