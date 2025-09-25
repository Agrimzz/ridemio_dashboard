"use client";
import {
  Box,
  Group,
  Tabs,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import TripStatsCard from "./components/TripStatsCard";
import { CarIcon } from "@phosphor-icons/react";

const tabs = [
  { label: "All Trips", href: "/trips/all" },
  { label: "Pending", href: "/trips/pending" },
  { label: "Accepted", href: "/trips/accepted" },
  { label: "Ongoing", href: "/trips/ongoing" },
  { label: "Completed", href: "/trips/completed" },
  { label: "Cancelled", href: "/trips/cancelled" },
  { label: "Returning", href: "/trips/returning" },
  { label: "Returned", href: "/trips/returned" },
];

export function TripsLayout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Box>
      <Title size={36} fw={600} c="textPrimary">
        Trips List
      </Title>

      <Group
        my="lg"
        gap="sm"
        style={{
          borderBottom: `1px solid ${theme.colors.grayLight[4]} `,
        }}
      >
        {tabs.map((tab) => (
          <UnstyledButton
            key={tab.href}
            onClick={() => router.push(tab.href)}
            p="md"
            fz="sm"
            ta="center"
            style={{
              borderBottom:
                pathname === tab.href
                  ? `2px solid ${theme.colors.primary[5]}`
                  : "none",
              color:
                pathname === tab.href
                  ? theme.colors.primary[5]
                  : theme.colors.textSecondary[5],
            }}
          >
            {tab.label}
          </UnstyledButton>
        ))}
      </Group>

      <Box p="lg" bg="white" my="lg">
        <Group justify="space-between">
          <Text c="textSecondary" fw={600}>
            Trip Statistics
          </Text>
        </Group>

        <Group justify="space-between" mt="lg">
          <TripStatsCard Icon={CarIcon} label="Pending" value="20" />
          <TripStatsCard Icon={CarIcon} label="Accepted" value="40" />
          <TripStatsCard Icon={CarIcon} label="Ongoing" value="11" />
          <TripStatsCard Icon={CarIcon} label="Completed" value="87" />
          <TripStatsCard Icon={CarIcon} label="Cancelled" value="12" />
          <TripStatsCard Icon={CarIcon} label="Returning" value="8" />
          <TripStatsCard Icon={CarIcon} label="Returned" value="12" />
        </Group>
      </Box>
      {children}
    </Box>
  );
}
