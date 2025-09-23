"use client";
import { LineChart } from "@mantine/charts";
import { Flex, Paper, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    date: "Jan",
    Trips: 1200,
    AdminCommissions: 450,
  },
  {
    date: "Feb",
    Trips: 1350,
    AdminCommissions: 520,
  },
  {
    date: "Mar",
    Trips: 1600,
    AdminCommissions: 600,
  },
  {
    date: "Apr",
    Trips: 1480,
    AdminCommissions: 570,
  },
  {
    date: "May",
    Trips: 1750,
    AdminCommissions: 640,
  },
  {
    date: "Jun",
    Trips: 1900,
    AdminCommissions: 700,
  },
  {
    date: "Jul",
    Trips: 2100,
    AdminCommissions: 780,
  },
  {
    date: "Aug",
    Trips: 2000,
    AdminCommissions: 750,
  },
  {
    date: "Sep",
    Trips: 1850,
    AdminCommissions: 690,
  },
  {
    date: "Oct",
    Trips: 2200,
    AdminCommissions: 810,
  },
  {
    date: "Nov",
    Trips: 2400,
    AdminCommissions: 890,
  },
  {
    date: "Dec",
    Trips: 2500,
    AdminCommissions: 950,
  },
];

export default function EarningChart() {
  return (
    <Paper w="100%" bg="white" p="lg" mt="lg" radius="xs">
      <Flex justify="space-between" align="center" mb={-16} ml="md">
        <Text c="textPrimary" fw={600}>
          Admin Earnings Statistics
        </Text>
      </Flex>

      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: "Trips", color: "primary" },
          { name: "AdminCommissions", color: "success" },
        ]}
        curveType="natural"
        withDots={false}
        tickLine="none"
        withLegend
        tooltipAnimationDuration={200}
      />
    </Paper>
  );
}
