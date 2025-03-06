"use client";

import { Input } from "@heroui/react";
import { Controller } from "react-hook-form";

export default function MediInput({
  name,
  label,
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  placeHolder,
}) {
  return (
    <Controller
      name={name} // Use the correct name prop here (dynamic name)
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error },
      }) => (
        <Input
          type={type}
          labelPlacement="outside"
          ref={ref}
          isRequired={required}
          errorMessage={error?.message}
          validationBehavior="aria"
          placeholder={placeHolder}
          isInvalid={invalid}
          label={label}
          variant={variant}
          size={size}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
      rules={{
        required: required ? `${label} is required` : false, // Custom message if required
        pattern:
          type === "email"
            ? {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address", // Custom error message for email validation
              }
            : null, // Only apply email pattern validation if type is email
      }}
    />
  );
}
