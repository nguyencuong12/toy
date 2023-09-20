"use client";
import React, { useState } from "react";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "./searchIcon";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className="sticky top-0 text-black w-full border z-50 ">
      <div className="bg-[#fef6e4] hidden md:block">
        <div className="container mx-auto nav-top flex gap-4 justify-between py-4">
          <div className="text-center">
            <span className="font-normal">Mua hàng và CSKH:</span>
            <span className="text-violet-500 font-medium"> 1800 6609</span>
          </div>
          <Link href="#">
            <div className="text-center font-medium text-gray-500 flex gap-2 items-center ">
              <FaUser />
              <span>Đăng nhập</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-[#fef6e4] px-4">
        <div className="container mx-auto nav-top flex gap-4 justify-between py-4 items-center">
          <Link href="/">
            <Image src="/shopping.png" width={50} height={50} alt="logo"></Image>
          </Link>
          <div className="flex-1 flex justify-center">
            <Input
              classNames={{
                base: "max-w-full md:max-w-[40rem] sm:max-w-[50rem] h-10",
                mainWrapper: "h-full w-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
            />
          </div>

          <Link href="#">
            <FaShoppingCart className="text-2xl text-[#f582ae]"></FaShoppingCart>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
