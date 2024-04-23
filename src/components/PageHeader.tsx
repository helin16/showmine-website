"use client";
import Link from "next/link";
import { useState } from "react";
import AppLogo from "./AppLogo";
import { SIGN_UP_URL, SIGN_IN_URL, CONTACT_US_URL } from "./Urls";

export const PAGE_NAME_HOME = "home";
export const PAGE_NAME_PRICING = "pricing";
export const PAGE_NAME_ABOUT_US = "blog";
export const PAGE_NAME_CONTACT_US = "contact";
export const PAGE_NAME_START_FREE = "start_free";
export const PAGE_NAME_LOGIN = "login";

export type iMenuItem = {
  name: string;
  href: string;
};

export const allMenuItems: iMenuItem[] = [
  { name: PAGE_NAME_HOME, href: "/" },
  { name: PAGE_NAME_PRICING, href: `/pricing` },
  { name: PAGE_NAME_ABOUT_US, href: `/blog` },
  { name: PAGE_NAME_CONTACT_US, href: CONTACT_US_URL },
  { name: PAGE_NAME_START_FREE, href: SIGN_UP_URL },
  { name: PAGE_NAME_LOGIN, href: SIGN_IN_URL },
];

type iPageHeader = {
  currentPageName?: string;
};

export default function PageHeader({
  currentPageName = PAGE_NAME_HOME,
}: iPageHeader) {
  const [showingSideMenu, setShowingSideMenu] = useState(false);

  const getMenuItem = (item: iMenuItem, extraClassName = "") => {
    const btnName = item.name.split("_").join(" ");

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`uppercase top-menu-item font-light text-sm flex items-center gap-2 hover:text-orange-400 ${
          currentPageName === item.name ? "active text-orange-400" : ""
        } ${extraClassName || ""}`}
      >
        {btnName}
      </Link>
    );
  };

  const getSideMenu = () => {
    if (showingSideMenu !== true) {
      return null;
    }
    return (
      <div
        className={"bg-white absolute w-full left-0 top-0 p-6 opacity-100"}
        style={{
          boxShadow: "0 4px 6px rgba(33,51,67,.12)",
          borderBottom: "1px solid rgba(33,51,67,.35)",
        }}
      >
        <div className={"flex items-center justify-between"}>
          <AppLogo width={100} />
          <div className="flex gap-1 items-center">
            <div>Close</div>
            <button onClick={() => setShowingSideMenu(!showingSideMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-list h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-2">
          {allMenuItems.map((menuItem) => getMenuItem(menuItem, "py-2"))}
        </div>

        <div className="flex mt-8"></div>
      </div>
    );
  };

  return (
    <div className={"app-header"}>
      <header className="w-full">
        <nav
          className="mx-auto flex container items-center justify-between py-4 px-3"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">
                {process.env.NEXT_PUBLIC_APP_NAME || ""}
              </span>
              <AppLogo className="duration-300" width={150} />
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-2 lg:items-center">
            {allMenuItems.map((menuItem) => getMenuItem(menuItem, "py-4 px-4"))}
            <div className="flex"></div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setShowingSideMenu(!showingSideMenu)}>
              <div className="flex gap-1 items-center">
                <div>Menu</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-list h-8 w-8"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </div>
            </button>
            {getSideMenu()}
          </div>
        </nav>
      </header>
    </div>
  );
}
