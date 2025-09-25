import { Paper, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { TripStatsCardProps } from "../TripsLayout.type";

export default function TripStatsCard({
  Icon,
  label,
  value,
}: TripStatsCardProps) {
  return (
    <Paper flex={1} bg="#EBEAED" withBorder radius="sm" p="md">
      <Icon size={24} weight="fill" />
      <Text size="sm" fw={500} c="textSecondary" mt="xs">
        {label}
      </Text>

      <Title size={28} fw={600} c="textPrimary">
        {value}
      </Title>
    </Paper>
  );
}
