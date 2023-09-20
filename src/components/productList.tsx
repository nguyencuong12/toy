"use-client";

import React from "react";

const ProductList = ({ children }: any) => {
  return <div className="grid grid-cols-1 gap-5 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">{children}</div>;
};

export default ProductList;
