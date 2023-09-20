"use client";
import React from "react";
interface ProductDetailInterface {
  name: string;
  id: string;
}
const ProductDetails = (props: ProductDetailInterface) => {
  const { name, id } = props;

  return (
    <div className="flex items-center flex-col">
      <div>Product details</div>
      <div>Product details</div>
      <div>Product details</div>
      <div>Product details</div>
      <div>Product details</div>
      <div>Product details</div>
    </div>
  );
};

export default ProductDetails;
