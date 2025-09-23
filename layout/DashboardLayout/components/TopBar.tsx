"use client";
import {
  Avatar,
  Box,
  Flex,
  Indicator,
  Menu,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import {
  ArrowFatDownIcon,
  BellIcon,
  CaretDownIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import React from "react";

export default function TopBar() {
  return (
    <Flex w="100%" p="lg" justify="space-between" align="center">
      <TextInput
        placeholder="Search..."
        variant="unstyled"
        leftSection={<MagnifyingGlassIcon size={24} />}
      />

      <Flex gap="md" align="center">
        <Indicator color="danger">
          <BellIcon size={24} weight="fill" color="gray" />
        </Indicator>

        <Menu withArrow position="bottom-end" shadow="md">
          <Menu.Target>
            <Flex gap="sm" align="center" style={{ cursor: "pointer" }}>
              <Avatar radius="xl">AA</Avatar>
              <Text c="textPrimary" fw={600}>
                John Doe
              </Text>
              <CaretDownIcon size={18} color="gray" weight="fill" />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Flex>
  );
}
