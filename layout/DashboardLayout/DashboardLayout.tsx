import { Box, Flex } from "@mantine/core";
import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex h="100vh" bg="background">
      <Sidebar />
      <Flex direction="column" flex={1}>
        <TopBar />
        <Box
          flex={1}
          p="lg"
          style={{
            overflowY: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
