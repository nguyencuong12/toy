"use-client";

import React from "react";
import { ContainerComponent } from ".";
const BodyComponent = ({ children }: any) => {
  return (
    <div>
      <div className="bg-[#f3d2c1] py-4 section-1 min-h-screen">
        <ContainerComponent>{children}</ContainerComponent>
      </div>
    </div>
  );
};

export default BodyComponent;
