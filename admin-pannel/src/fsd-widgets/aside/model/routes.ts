import { DashboardSvg, MenuSvg, IRoute } from "@/fsd-shared";

export const asideRoutes: IRoute[] = [
  {
    href: "/",
    title: "Dashboard",
    Icon: DashboardSvg,
  },
  {
    href: "/menu",
    title: "Menu",
    Icon: MenuSvg,
  },
];
