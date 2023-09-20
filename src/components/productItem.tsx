"use-client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface propsInterface {
  title?: string;
  shortDescription?: string;
  price?: number;
  productID?: string;
}
const ProductItem = (propsInterface: propsInterface) => {
  const { title, shortDescription, price, productID } = propsInterface;
  // bg-gradient-to-t from-violet-100
  return (
    <Link href="#">
      <div className="mt-4 max-h-90 max-w-md mx-auto bg-[#fef6e4]  rounded-xl shadow-md overflow-hidden ">
        <div className="flex direction flex-col items-center justify-center py-4">
          <div className="md:shrink-0">
            <Image
              src="https://cdn1.concung.com/2022/04/55578-86496-large_mobile/xe-keo-thu-nhun-vui-ve-me-va-con-khung-long-js047331.png"
              height={160}
              width={160}
              alt="Product Image"
            ></Image>
          </div>

          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-[#001858] text-lg">{title}</div>
            <p className="mt-2 text-slate-500 h-24 text-clip overflow-hidden text-[#172c66] text-sm font-normal">{shortDescription}</p>
            <p className="mt-2 text-red-500 text-end font-medium">
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(50000)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
