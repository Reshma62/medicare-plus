"use client";

import { NextUIProvider } from "@nextui-org/react";

const UiProviders = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UiProviders;
