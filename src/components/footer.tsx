"use-client";
import React from "react";
function RenderFooterItem(title: string, list: [string]): any {
  return (
    <ul className="list-disc">
      <p className="mb-2">{title}</p>
      {list.map((item) => (
        <li className="text-[#bfd5db]" key={list.indexOf(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
const FooterComponent = () => {
  return (
    <div className="h-auto p-10 bg-[#fef6e4] text-[#172c66]">
      <div className="container mx-auto">
        <img className="h-10 object-cover text-center mx-auto" src="./next.svg"></img>

        <div className="mt-10 grid grid-cols-2 gap-5 2xl:grid-cols-3 ">
          <div>{RenderFooterItem("Solutions", ["Now this is a story all about how, my life got flipped-turned upside down"])}</div>
          <div>{RenderFooterItem("Solutions", ["Now this is a story all about how, my life got flipped-turned upside down"])}</div>
          <div>{RenderFooterItem("Solutions", ["Now this is a story all about how, my life got flipped-turned upside down"])}</div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-col 2xl:flex-row lg:flex-row md:flex-row justify-between">
          <div className="m-2">
            <p>Subscribe to our newsletter</p>
            <span>The latest news, articles, and resources, sent to your inbox weekly.</span>
          </div>
          <div className="m-2">
            <div className="flex flex-row">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              <button className="ml-4 px-4 py-2 font-semibold text-sm bg-[#f582ae] text-[#001858] rounded-md shadow-sm">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-col 2xl:flex-row lg:flex-row md:flex-row justify-between">
          <p className="mb-3">© 2023 Your Company, Inc. All rights reserved.</p>
          <div className="flex flex-row">
            <a className="mr-3 ml-3">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
              </svg>
            </a>
            <a className="mr-3 ml-3">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
              </svg>
            </a>
            <a className="mr-3 ml-3">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
