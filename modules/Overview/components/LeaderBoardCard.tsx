import { Avatar, Badge, Button, Flex, Paper, Text } from "@mantine/core";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  MinusIcon,
} from "@phosphor-icons/react";
import React from "react";

export default function LeaderBoardCard({
  type,
}: {
  type: "driver" | "customer";
}) {
  return (
    <Paper bg="white" p="lg" radius="xs">
      <Flex justify="space-between" align="center">
        <Text c="textPrimary" fw={600} size="lg">
          Leaderboard
        </Text>

        <Flex gap="sm">
          <Button color="textSecondary" size="xs">
            Daily
          </Button>
          <Button color="grayLight" size="xs">
            Weekly
          </Button>
        </Flex>
      </Flex>

      <Badge color={type === "driver" ? "info" : "success"} mt="md">
        Top {type === "driver" ? "Drivers" : "Customers"}
      </Badge>

      <Flex align="center" justify="space-between" mt="lg">
        <Flex gap="xl" align="center">
          <Text c="textPrimary" size="sm" fw={500}>
            1
          </Text>
          <Flex
            align="center"
            gap="sm"
            pl="lg"
            style={{ borderLeft: "1px solid #EBEAED" }}
          >
            <Avatar radius="xl" size="lg">
              AA
            </Avatar>
            <Flex direction="column">
              <Text c="textPrimary" fw={600} size="sm">
                Alex Andrews
              </Text>
              <Text c="textSecondary" size="sm">
                alex@ridemio.com
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <ArrowUpRightIcon size={20} color="green" />
      </Flex>
      <Flex align="center" justify="space-between" mt="lg">
        <Flex gap="xl" align="center">
          <Text c="textPrimary" size="sm" fw={500}>
            2
          </Text>
          <Flex
            align="center"
            gap="sm"
            pl="lg"
            style={{ borderLeft: "1px solid #EBEAED" }}
          >
            <Avatar radius="xl" size="lg">
              EW
            </Avatar>
            <Flex direction="column">
              <Text c="textPrimary" fw={600} size="sm">
                Emma Watson
              </Text>
              <Text c="textSecondary" size="sm">
                emma@ridemio.com
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <ArrowDownRightIcon size={20} color="red" />
      </Flex>
      <Flex align="center" justify="space-between" mt="lg">
        <Flex gap="xl" align="center">
          <Text c="textPrimary" size="sm" fw={500}>
            3
          </Text>
          <Flex
            align="center"
            gap="sm"
            pl="lg"
            style={{ borderLeft: "1px solid #EBEAED" }}
          >
            <Avatar radius="xl" size="lg">
              SS
            </Avatar>
            <Flex direction="column">
              <Text c="textPrimary" fw={600} size="sm">
                Sam Smith
              </Text>
              <Text c="textSecondary" size="sm">
                sam@ridemio.com
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <MinusIcon size={20} color="orange" />
      </Flex>
      <Flex align="center" justify="space-between" mt="lg">
        <Flex gap="xl" align="center">
          <Text c="textPrimary" size="sm" fw={500}>
            4
          </Text>
          <Flex
            align="center"
            gap="sm"
            pl="lg"
            style={{ borderLeft: "1px solid #EBEAED" }}
          >
            <Avatar radius="xl" size="lg">
              LW
            </Avatar>
            <Flex direction="column">
              <Text c="textPrimary" fw={600} size="sm">
                Lyon Walker
              </Text>
              <Text c="textSecondary" size="sm">
                lyon@ridemio.com
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <ArrowUpRightIcon size={20} color="green" />
      </Flex>
    </Paper>
  );
}
