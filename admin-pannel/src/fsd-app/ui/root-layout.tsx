import { Aside } from "@/fsd-widgets/aside";
import { Header } from "@/fsd-widgets/header";
import { Poppins } from "next/font/google";
import React from "react";

interface IProps {
  children: React.ReactNode;
}
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "800"],
});

function Layout({ children }: IProps) {
  return (
    <body
      className={`${poppins.variable} max-w-dvw h-dvh antialiased flex overflow-hidden`}
    >
      <Aside />
      <div className="box-border w-full max-h-full">
        <Header />
        {children}
      </div>
    </body>
  );
}

export { Layout };
