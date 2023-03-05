import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

export default function Input({
  type,
  name,
  ...rest
}: {
  type: string;
  name: string;
}) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
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

  return (
    <input
      ref={inputRef}
      type={type}
      name={name}
      id={name}
      defaultValue={defaultValue}
      className="input"
      required
      {...rest}
    />
  );
}
