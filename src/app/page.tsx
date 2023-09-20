"use client";
import styles from "./page.module.css";
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/react";

import { ProductItem, ProductList, ContainerComponent } from "@/components";
export default function Home() {
  return (
    <>
      <ProductList>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
        <ProductItem
          title={"Company retreats"}
          shortDescription=" Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that."
        ></ProductItem>
      </ProductList>
      <Pagination
        total={5}
        initialPage={1}
        className="flex justify-center mt-5 "
        classNames={{
          wrapper: "gap-2 overflow-visible h-10 rounded",
          item: "bg-[#fef6e4] text-[#001858] opacity-60",
          cursor: "shadow-lg bg-[#fef6e4] text-[#001858] font-bold",
        }}
      />
    </>
  );
}
