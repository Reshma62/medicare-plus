"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Form } from "@heroui/react";

const MediForm = ({ onSubmit, children, defaultValues, resolver }) => {
  const formConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm({
    ...formConfig,
    mode: "onChange", // Validate fields on change
    reValidateMode: "onChange", // Revalidate fields as user types
  });

  const submit = (data) => {
    console.log("Form Data:", data); // Logs the form data
    onSubmit(data); // Pass the data to the parent component
    methods.reset(); // Reset form after submission
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(submit)}>{children}</Form>
    </FormProvider>
  );
};

export default MediForm;
