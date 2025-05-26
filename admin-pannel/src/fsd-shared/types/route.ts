import { FC, SVGAttributes } from "react";

export interface IRoute {
  href: string;
  title: string;
  Icon: FC<SVGAttributes<unknown>>;
}
