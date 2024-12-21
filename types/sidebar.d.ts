export type MenuItem = {
    label: string;
    icon: string;
    href: string;
    children?: MenuItem[];
  };
  
  export type SidebarProps = {
    menuItems: MenuItem[];
    mobile?: boolean;
  };