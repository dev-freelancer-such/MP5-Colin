type BreadcrumbType = {
  label: string;
  href?: string;
};

export interface RouterInterface {
  key: string | number;
  path: string;
  component: React.ComponentType | string;
  breadcrumb?: BreadcrumbType[];
  name?: string;
}
