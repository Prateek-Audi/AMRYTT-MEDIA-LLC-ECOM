import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/Sidebar";
import { MenuItem } from "@/types/sidebar";
import { AdminLayoutProps } from "@/types/admin-layout";
import NavBar from "@/components/Navbar";
import styles from "./admin.module.css";
import "react-toastify/dist/ReactToastify.css";

async function getMenuItems(): Promise<MenuItem[]> {
  try {
    return [
      { label: "Dashboard", icon: "/assets/dashboard.svg", href: "/", badgeContent: 5 },
      {
        label: "E-Commerce",
        icon: "/assets/ecommerce.svg",
        href: "/",
        badgeContent: 2,
        children: [
          {
            label: "Product",
            icon: "FaUser",
            href: "/product",
          },
          {
            label: "Categories",
            icon: "FaUser",
            href: "/",
          },
          {
            label: "Orders",
            icon: "FaUser",
            href: "/",
          },
          {
            label: "Customer",
            icon: "FaUser",
            href: "/",
          },
        ],
      },
      {
        label: "Project",
        icon: "/assets/project.svg",
        href: "/",
      },
      {
        label: "Contact",
        icon: "/assets/contact.svg",
        href: "/",
        children: [
          {
            label: "User Info",
            icon: "FaUser",
            href: "/",
          },
        ],
      },
      {
        label: "File Manager",
        icon: "/assets/file-manager.svg",
        href: "/",
      },
      { label: "Chat", icon: "/assets/chat.svg", href: "/" },
      { label: "Calendar", icon: "/assets/calendar.svg", href: "/" },
    ];
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
}

const AdminLayout = async ({ children }: AdminLayoutProps) => {
  const [menuItems] = await Promise.all([getMenuItems()]);

  return (
    <div className="flex max-h-screen">
      <div
        className={`flex flex-col ${styles["main-content"]}`}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="w-full h-full flex bg-[#FBFBFB] flex-1">
          <div className={`w-[18%] ${styles.sidebar}`}>
            <Sidebar menuItems={menuItems} />
          </div>
          <main className={`w-[82%] flex-1 h-full ${styles["right-content"]}`}>
            <NavBar menuItems={menuItems} />
            <div className="overflow-auto h-full max-h-[86vh] max-w-full rounded-md custom-scrollbar">
              {children}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
