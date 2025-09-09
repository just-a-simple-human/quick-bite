import { Aside } from "@/fsd-widgets/aside";
import { Header } from "@/fsd-widgets/header";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={
        "max-w-dvw h-dvh antialiased flex overflow-hidden font-nunito-sans"
      }
    >
      <Aside />
      <div className="w-full max-h-full flex flex-col">
        <Header />
        {children}
      </div>
    </body>
  );
}

export { Layout };
