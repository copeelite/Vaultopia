export type LeaseTemplateList = {
    id: string;
    name: string;
    description?: string | null;
    icon?: any; // ReactNode allows any valid React component to be passed as an icon
    current?: boolean;
    badge?: boolean;
    children?: LeaseTemplateList[];
  };
