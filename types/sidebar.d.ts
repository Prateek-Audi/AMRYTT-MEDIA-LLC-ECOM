export type MenuItem = {
    label: string;
    icon: string;
    href: string;
    badgeContent?: number;
    children?: MenuItem[];
  };
  
  export type SidebarProps = {
    menuItems: MenuItem[];
    mobile?: boolean;
  };