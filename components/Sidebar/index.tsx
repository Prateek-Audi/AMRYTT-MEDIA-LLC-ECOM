import React from "react";
import Link from "next/link";
import * as Icons from "react-icons/fa";
import Image from "next/image";
import { Home } from "lucide-react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MenuItem, SidebarProps } from "@/types/sidebar";

const Sidebar: React.FC<SidebarProps> = ({ menuItems, mobile }) => {
  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const IconComponent = Icons[item.icon as keyof typeof Icons] || Home;

    const fontSizeClass =
      depth === 0
        ? "text-[15px] font-semi-bold hover:bg-black hover:text-white"
        : depth === 1
        ? "text-sm font-normal hover:text-[#318531]"
        : "text-xs font-normal hover:text-[#318531]";

    if (item.children && item.children.length > 0) {
      return (
        <li key={item.label}>
          <details className="group">
            <summary
              className={`flex items-center gap-2 mb-2 cursor-pointer px-3 py-2 rounded-[0.35rem] ${fontSizeClass}`}
            >
              <IconComponent className={`${depth === 0 ? 'h-5 w-5' : depth === 1 ? 'h-3 w-3' : ''}`} />
              <span className="flex-1">{item.label}</span>
              <span className="ml-auto group-open:hidden">
                <FaChevronRight className="h-4 w-4" />
              </span>
              <span className="ml-auto hidden group-open:block">
                <FaChevronDown className="h-4 w-4" />
              </span>
            </summary>
            <ul className={`${depth === 1 ? 'pl-4' : 'pl-1'}`}>
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
          className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all rounded-[0.35rem] hover:rounded-[0.35rem] ${fontSizeClass}`}
        >
          <IconComponent className={`${depth === 0 ? 'h-5 w-5' : 'h-3 w-3'}`} />
          <span className="flex-1">{item.label}</span>
        </Link>
      </li>
    );
  };

  return (
    <aside
      className={`transition-all duration-300 text-black px-4 bg-[#E8E9E4] ${
        mobile ? "block md:hidden h-full" : "hidden md:block"
      } relative`}
      style={{ height: mobile ? "100%" : "auto" }}
    >
      <div className="flex h-14 mb-3 px-2 items-end lg:h-[59px]">
        <Image src={""} alt="Logo" className="w-40" />
      </div>
      <div
        className="flex-1 mt-12 overflow-y-auto custom-scrollbar"
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
