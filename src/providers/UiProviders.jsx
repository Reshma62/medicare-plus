"use client";

import {HeroUIProvider} from '@heroui/react'

const UiProviders = ({ children }) => {
  return <HeroUIProvider>
      {children}
    </HeroUIProvider>
};

export default UiProviders;
