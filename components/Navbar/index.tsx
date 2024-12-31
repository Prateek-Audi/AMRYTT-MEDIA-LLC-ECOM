"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Avatar,
  Badge,
  Input,
} from "@nextui-org/react";
import Sidebar from "@/components/Sidebar";
import { NavbarProps } from "@/types/navbar";
import { LogOut, SearchIcon } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NavBar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  const onHandleLogout = () => {
    router.push("/");
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-[82px] bg-[#FBFBFB]">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-sm",
            inputWrapper:
              "h-full font-medium text-sm shadow-none text-[#858D9D] bg-[#FBFBFB]",
          }}
          placeholder="Search"
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          className={`${styles["custom-search"]}`}
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <div className={`flex gap-12 ${styles["nav-items"]}`}>
          <Image
            src={"/assets/calendar.svg"}
            alt={""}
            className="text-[#858D9D] cursor-pointer"
            width={18}
            height={18}
          />
          <Badge
            color="primary"
            content="2"
            className="bg-[#2BB2FE] border-none rounded-[4px] cursor-pointer"
          >
            <Image
              src={"/assets/bell.svg"}
              alt={""}
              className="text-[#858D9D] cursor-pointer"
              width={18}
              height={18}
            />
          </Badge>
          <Badge
            color="primary"
            content="2"
            className="bg-[#2BB2FE] border-none rounded-[4px] cursor-pointer"
          >
            <Image
              src={"/assets/message.svg"}
              alt={""}
              className="text-[#858D9D] cursor-pointer"
              width={18}
              height={18}
            />
          </Badge>
          <Avatar
            className="w-7 h-7 cursor-pointer"
            src="https://images.unsplash.com/broken"
            alt="User Avatar"
          />
        </div>
        <div
          className={`h-8 border-l border-gray-300 ${styles["nav-items"]}`}
        ></div>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="flex items-center pr-4 py-3 rounded-xl cursor-pointer">
                <div className="flex items-center gap-3">
                  <Badge
                    color="success"
                    content=""
                    placement="bottom-right"
                    shape="circle"
                  >
                    <Avatar
                      className="w-8 h-8"
                      src="https://images.unsplash.com/broken"
                      alt="User Avatar"
                    />
                  </Badge>
                  <div className="flex flex-col">
                    <span className="text-sm text-[#1D1F2C] font-medium">
                      Jenil Patel
                    </span>
                    <span className="text-xs text-[4A4656] font-medium">
                      Manager
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <IoMdArrowDropdown className="text-[#858D9D] w-6 h-6" />
                </div>
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="User Actions"
              className="w-72"
              itemClasses={{
                base: "rounded-none",
              }}
            >
              <DropdownItem
                key="profile"
                className="h-20 gap-2 bg-gray-50"
                textValue="Profile Section"
              >
                <div className="flex items-center gap-3">
                  <Avatar
                    isBordered
                    className="w-12 h-12"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    alt="User Avatar"
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-semibold text-gray-800">
                      Jenil Patel
                    </p>
                    <p className="text-sm text-gray-500">jenil@example.com</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem
                key="logout"
                startContent={<LogOut className="w-4 h-4 text-red-500" />}
                className="h-11 data-[hover=true]:bg-gray-100"
                color="danger"
                onClick={onHandleLogout}
              >
                <span className="text-sm font-medium text-red-500">
                  Log Out
                </span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#E8E9E4]">
        {menuItems && <Sidebar menuItems={menuItems} mobile={true} />}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
