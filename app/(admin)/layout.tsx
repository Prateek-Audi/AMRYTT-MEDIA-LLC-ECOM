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
      { label: "Dashboard", icon: "", href: "/", badgeContent: 5 },
      {
        label: "E-Commerce",
        icon: "FaShoppingCart",
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
        icon: "FaFileAlt",
        href: "/",
      },
      {
        label: "Contact",
        icon: "FaIdCardAlt",
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
        icon: "FaFolder",
        href: "/",
      },
      { label: "Chat", icon: "FaCommentAlt", href: "/" },
      { label: "Calendar", icon: "FaCalendarMinus", href: "/" },
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
          <div className={`w-[15%] ${styles.sidebar}`}>
            <Sidebar menuItems={menuItems} />
          </div>
          <main className="w-[85%] flex-1 h-full">
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
