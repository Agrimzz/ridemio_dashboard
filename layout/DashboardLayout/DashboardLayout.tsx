import { Flex, Text } from "@mantine/core";
import React from "react";
import Sidebar from "./components/Sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="bg-background" h="100vh">
      <Sidebar />
      {children}
    </Flex>
  );
}
