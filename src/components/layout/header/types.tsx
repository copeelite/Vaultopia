export type SideNavItem = {
    name: string;
    icon?: any; // ReactNode allows any valid React component to be passed as an icon
    current?: boolean;
    badge?: boolean;
    href: string;
    children?: SideNavItem[];

  };
