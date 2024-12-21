'use client'

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
  Avatar
} from "@nextui-org/react";
import Sidebar from "@/components/Sidebar";
import { NavbarProps } from "@/types/navbar";
import { ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const NavBar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  const onHandleLogout = () => {
    router.push("/login")
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-20 bg-[#E8E9E4]">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="flex items-center bg-[#1A1A1A] text-white px-4 py-3 rounded-xl cursor-pointer">
                <div className="flex items-center gap-3">
                  <Avatar
                    isBordered
                    className="w-6 h-6"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    alt="User Avatar"
                  />
                  <span className="text-sm font-semibold">Admin</span>
                </div>
                <div className="ml-12">
                  <ChevronDown className="w-4 h-4" />
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
                    <p className="text-base font-semibold text-gray-800">Admin User</p>
                    <p className="text-sm text-gray-500">admin@example.com</p>
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
                <span className="text-sm font-medium text-red-500">Log Out</span>
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