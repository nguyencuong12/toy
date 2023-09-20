"use client";

import { NextUIProvider } from "@nextui-org/react";
import { NavbarComponent, FooterComponent, BodyComponent, Advertise } from "@/components";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {/* <Advertise></Advertise> */}
      <NavbarComponent></NavbarComponent>
      <BodyComponent>{children}</BodyComponent>
      <FooterComponent></FooterComponent>
    </NextUIProvider>
  );
}
