import { Flex, Text, ThemeIcon, Title } from "@mantine/core";
import React from "react";
import { AnalticsCardProps } from "../Overview.type";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

export default function AnalyticsCard({
  Icon,
  title,
  count,
  change,
  changeCount,
  border = true,
}: AnalticsCardProps) {
  return (
    <Flex
      direction="column"
      gap="md"
      bg="white"
      p="xl"
      style={{
        borderRight: border ? "1px solid #EBEAED" : "none",
      }}
    >
      <Flex gap="sm" align="center">
        <ThemeIcon radius="xl" variant="light" size="sm">
          <Icon size={24} />
        </ThemeIcon>
        <Text c="textPrimary" size="sm" fw={500}>
          {title}
        </Text>
      </Flex>

      <Title size={32} fw={600} c="textPrimary">
        {count}
      </Title>
      <Flex gap="xs" align="center">
        {change === "up" ? (
          <ArrowUpRightIcon size={16} color="green" />
        ) : (
          <ArrowDownRightIcon size={16} color="red" />
        )}

        <Text c="textPrimary" fw={600} size="sm">
          {changeCount}
        </Text>
        <Text c="textSecondary" size="sm">
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}
