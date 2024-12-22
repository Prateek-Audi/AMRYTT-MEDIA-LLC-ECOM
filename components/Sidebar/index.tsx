import React from "react";
import Link from "next/link";
import * as Icons from "react-icons/fa";
import Image from "next/image";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { MenuItem, SidebarProps } from "@/types/sidebar";
import styles from "./sidebar.module.css";

const Sidebar: React.FC<SidebarProps> = ({ menuItems, mobile }) => {
  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const IconComponent =
      Icons[item.icon as keyof typeof Icons] || HiMiniSquares2X2;

    const fontSizeClass =
      depth === 0
        ? "text-sm font-bold hover:bg-[#EAF8FF] hover:text-[#2086BF]"
        : depth === 1
        ? "text-sm font-semibold hover:text-[#2086BF] hover:bg-[#EAF8FF]"
        : "text-xs font-semibold hover:text-[#2086BF] hover:bg-[#EAF8FF]";

    if (item.children && item.children.length > 0) {
      return (
        <li key={item.label}>
          <details className="group">
            <summary
              className={`flex text-[#4A4C56] hover:border-l-4 hover:border-[#2086BF] items-center gap-2 mb-2 cursor-pointer px-5 py-3 ${fontSizeClass}`}
            >
              <IconComponent
                className={`${
                  depth === 0 ? "h-5 w-5" : depth === 1 ? "h-3 w-3" : ""
                }`}
              />
              <span className="flex-1">{item.label}</span>
              <span className="ml-auto group-open:hidden">
                <IoMdArrowDropdown className="h-4 w-4" />
              </span>
              <span className="ml-auto hidden group-open:block">
                <IoMdArrowDropup className="h-4 w-4" />
              </span>
            </summary>
            <ul className={`${depth === 1 ? "pl-4" : ""}`}>
              {item.children.map((child) => renderMenuItem(child, depth + 1))}
            </ul>
          </details>
        </li>
      );
    }

    return (
      <li key={item.label} className="mb-2">
        <Link
          href={item.href}
          className={`flex items-center text-[#4A4C56] gap-2 ${
            depth === 0 ? "px-5" : depth === 1 ? "px-[3rem]" : ""
          } py-3 transition-all hover:border-l-4 hover:border-[#2086BF] ${fontSizeClass}`}
        >
          {depth === 0 ? (
            <IconComponent
              className={`${depth === 0 ? "h-5 w-5" : "h-3 w-3"}`}
            />
          ) : null}
          <span className="flex-1">{item.label}</span>
          {item.badgeContent && depth === 0 ? (
            <p className="bg-[#2BB2FE] text-white text-[10px] font-semibold px-2 border-none rounded-[4px]">
              {item.badgeContent}
            </p>
          ) : null}
        </Link>
      </li>
    );
  };

  return (
    <aside
      className={`transition-all duration-300 text-black bg-white ${
        mobile ? "block md:hidden h-full" : "hidden md:block"
      } relative`}
      style={{ height: mobile ? "100%" : "auto" }}
    >
      <div className="flex items-center px-6 pt-2 items-center lg:h-[59px]">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={150}
          height={40}
          className="w-auto"
        />
        <span className="text-2xl font-semibold text-[#1D1F2C] ml-2">
          Mytech
        </span>
      </div>
      <div
        className={`flex-1 mt-6 overflow-y-auto custom-scrollbar ${styles["custom-height"]}`}
        style={{ maxHeight: "calc(100vh - 150px)" }}
      >
        <nav className="grid items-start text-sm font-medium">
          <ul className="flex flex-col w-full">
            {menuItems.map((item) => renderMenuItem(item))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
