"use client";
import {
  Anchor,
  Box,
  Flex,
  Image,
  NavLink,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { navconfig } from "./navigation.config";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const theme = useMantineTheme();

  return (
    <Box
      w={250}
      h="100vh"
      px="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      {/* Fixed logo */}
      <Box
        pos="sticky"
        top={0}
        bg="white"
        py="lg"
        style={{
          zIndex: 10,
        }}
      >
        <Image src="/logo.png" alt="Ridemio Logo" w={150} mx="auto" />
      </Box>

      <Box
        style={{
          flex: 1,
          overflowY: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Flex direction="column" gap="sm" w="100%" py="md">
          {navconfig.map(({ label, href, icon, children }) => {
            const isActive = pathname === href;

            return (
              <NavLink
                key={label}
                label={label}
                href={href}
                leftSection={
                  icon &&
                  React.createElement(icon, {
                    size: 18,
                    weight: "fill",
                  })
                }
                active={isActive}
              >
                {children?.map(({ label, href }) => {
                  const childActive = pathname === href;
                  return (
                    <NavLink
                      key={label}
                      label={label}
                      href={href}
                      variant="subtle"
                      active={childActive}
                    />
                  );
                })}
              </NavLink>
            );
          })}
        </Flex>
      </Box>
      <Flex
        direction="column"
        py="md"
        style={{ borderTop: "1px solid #E5E5E5" }}
      >
        <Anchor href="" c="textSecondary" size="sm">
          Technical Help
        </Anchor>
        <Anchor href="" c="textSecondary" size="sm">
          Contact Us
        </Anchor>
      </Flex>
    </Box>
  );
}
