import logo from "./assets/quick-bite-logo.png";

export * from "./assets/icons";
export { logo };

export { api } from "./api/api";

export type { IRoute } from "./types/route";
export type { IMenuItem } from "./types/menu-item";
export type { ICategory } from "./types/category";

export { Input } from "./ui/input";
export { Table } from "./ui/table";
export { NumberInput } from "./ui/number-input";

export { useClickOutside } from "./helpers/use-click-outside";
