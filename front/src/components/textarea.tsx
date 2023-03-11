import { useRef, useEffect, TextareaHTMLAttributes } from "react";

import { useField, SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";

interface Props {
  name: string;
  label?: string;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props;

export default function Textarea({ name, label, ...rest }: TextareaProps) {
  const textareaRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  /**
   * If you need to set a default value for the textarea,
   * use the initial data property on your form,
   * or set it dynamically (be aware of the differences).
   *
   * initial data: https://unform.dev/guides/initial-data
   * set field value: https://unform.dev/guides/get-set-field-value
   */

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={fieldName}>{label}</label>}

      <textarea
        ref={textareaRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <span className="text-center text-red-600 border border-red-600 bg-red-400">
          {error}
        </span>
      )}
    </div>
  );
}
