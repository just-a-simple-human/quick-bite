"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { getQueryClient } from "./get-query-client";

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const client = getQueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
