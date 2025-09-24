"use client";
import {
  Box,
  Flex,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  Grid,
  Image,
  Badge,
} from "@mantine/core";
import React from "react";
import AnalyticsCard from "./components/AnalyticsCard";
import {
  ArrowClockwiseIcon,
  CarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  DotsThreeVerticalIcon,
  TireIcon,
  UsersIcon,
  XIcon,
} from "@phosphor-icons/react";
import EarningChart from "./components/EarningChart";
import LeaderBoardCard from "./components/LeaderBoardCard";
import { ArrowRight } from "lucide-react";

export function Overview() {
  return (
    <Box>
      <Title size={36} fw={600} c="textPrimary">
        Welcome back, John
      </Title>
      <Text c="textSecondary" size="sm">
        Monitor your Ridemio Statistics
      </Text>

      <SimpleGrid
        cols={4}
        mt="lg"
        spacing={0}
        style={{ borderRadius: 4, overflow: "hidden" }}
      >
        <AnalyticsCard
          Icon={UsersIcon}
          title="Active Costumers"
          count="20"
          change="up"
          changeCount="10%"
        />

        <AnalyticsCard
          Icon={CarIcon}
          title="Active Drivers"
          count="15"
          change="down"
          changeCount="5%"
        />

        <AnalyticsCard
          Icon={CurrencyDollarIcon}
          title="Total Earnings"
          count="$100,000"
          change="up"
          changeCount="10%"
        />

        <AnalyticsCard
          Icon={TireIcon}
          title="Total Trips"
          count="100"
          change="up"
          changeCount="10%"
          border={false}
        />
      </SimpleGrid>

      <Box w="100%" h={500} bg="grayLight" mt="lg">
        <Text c="white">Map Placeholder</Text>
      </Box>

      <EarningChart />

      <SimpleGrid cols={3} mt="lg">
        <LeaderBoardCard type="driver" />
        <LeaderBoardCard type="customer" />
        <Paper bg="white" p="lg" radius="xs" style={{ position: "relative" }}>
          <Flex justify="space-between" align="center">
            <Text c="textPrimary" fw={600} size="lg">
              Transaction History
            </Text>

            <Flex gap="sm">
              <ArrowClockwiseIcon size={20} color="#84818A" />
              <DotsThreeVerticalIcon size={20} color="#84818A" />
            </Flex>
          </Flex>

          <Flex mt="lg" justify="space-between" align="center">
            <Flex gap="sm" align="center">
              <ThemeIcon color="success" size="sm" radius="xl">
                <CheckIcon size={18} />
              </ThemeIcon>
              <Flex direction="column">
                <Text c="textPrimary" fw={500} size="sm">
                  Payment from #1032
                </Text>
                <Text c="textSecondary" size="xs">
                  Jan 10, 2024, 10:00 AM
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column">
              <Text c="textPrimary" size="sm" fw={500} ta="right">
                + $250.00
              </Text>
              <Text c="success" size="xs" ta="right">
                Completed
              </Text>
            </Flex>
          </Flex>

          <Flex mt="lg" justify="space-between" align="center">
            <Flex gap="sm" align="center">
              <ThemeIcon color="danger" size="sm" radius="xl">
                <XIcon size={18} />
              </ThemeIcon>
              <Flex direction="column">
                <Text c="textPrimary" fw={500} size="sm">
                  Payment from #2042
                </Text>
                <Text c="textSecondary" size="xs">
                  Jan 23, 2024, 12:00 AM
                </Text>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Text c="textPrimary" size="sm" fw={500} ta="right">
                + $50.00
              </Text>
              <Text c="danger" size="xs" ta="right">
                Declined
              </Text>
            </Flex>
          </Flex>

          <Flex mt="lg" justify="space-between" align="center">
            <Flex gap="sm" align="center">
              <ThemeIcon color="info" size="sm" radius="xl">
                <DotsThreeVerticalIcon size={18} />
              </ThemeIcon>
              <Flex direction="column">
                <Text c="textPrimary" fw={500} size="sm">
                  Payment from #3042
                </Text>
                <Text c="textSecondary" size="xs">
                  Jan 23, 2024, 12:00 AM
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column">
              <Text c="textPrimary" size="sm" fw={500} ta="right">
                + $50.00
              </Text>
              <Text c="info" size="xs" ta="right">
                Pending
              </Text>
            </Flex>
          </Flex>

          <Flex mt="lg" justify="space-between" align="center">
            <Flex gap="sm" align="center">
              <ThemeIcon color="success" size="sm" radius="xl">
                <CheckIcon size={18} />
              </ThemeIcon>
              <Flex direction="column">
                <Text c="textPrimary" fw={500} size="sm">
                  Payment from #1032
                </Text>
                <Text c="textSecondary" size="xs">
                  Jan 10, 2024, 10:00 AM
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column">
              <Text c="textPrimary" size="sm" fw={500} ta="right">
                + $250.00
              </Text>
              <Text c="success" size="xs" ta="right">
                Completed
              </Text>
            </Flex>
          </Flex>

          <Flex mt="lg" justify="space-between" align="center">
            <Flex gap="sm" align="center">
              <ThemeIcon color="success" size="sm" radius="xl">
                <CheckIcon size={18} />
              </ThemeIcon>
              <Flex direction="column">
                <Text c="textPrimary" fw={500} size="sm">
                  Payment from #1032
                </Text>
                <Text c="textSecondary" size="xs">
                  Jan 10, 2024, 10:00 AM
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column">
              <Text c="textPrimary" size="sm" fw={500} ta="right">
                + $250.00
              </Text>
              <Text c="success" size="xs" ta="right">
                Completed
              </Text>
            </Flex>
          </Flex>

          <Flex
            justify="center"
            w="90%"
            align="center"
            gap="sm"
            mt="lg"
            style={{
              borderTop: "1px solid #EBEAED",
              paddingTop: 16,
              cursor: "pointer",
              position: "absolute",
              bottom: 16,
            }}
          >
            <Text c="textSecondary" size="sm" fw={600} ta="center">
              View all transactions
            </Text>
            <ArrowRight size={16} color="#84818A" />
          </Flex>
        </Paper>
      </SimpleGrid>

      <Grid mt="lg" align="stetch">
        <Grid.Col span={4}>
          <Paper
            bg="white"
            p="lg"
            radius="xs"
            style={{ position: "relative" }}
            h="100%"
          >
            <Flex justify="space-between" align="center">
              <Text c="textPrimary" fw={600} size="lg">
                Transaction History
              </Text>

              <Flex gap="sm">
                <ArrowClockwiseIcon size={20} color="#84818A" />
                <DotsThreeVerticalIcon size={20} color="#84818A" />
              </Flex>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <ThemeIcon color="success" size="sm" radius="xl">
                  <CheckIcon size={18} />
                </ThemeIcon>
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Payment from #1032
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 10, 2024, 10:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Flex direction="column">
                <Text c="textPrimary" size="sm" fw={500} ta="right">
                  + $250.00
                </Text>
                <Text c="success" size="xs" ta="right">
                  Completed
                </Text>
              </Flex>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <ThemeIcon color="danger" size="sm" radius="xl">
                  <XIcon size={18} />
                </ThemeIcon>
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Payment from #2042
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 23, 2024, 12:00 AM
                  </Text>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Text c="textPrimary" size="sm" fw={500} ta="right">
                  + $50.00
                </Text>
                <Text c="danger" size="xs" ta="right">
                  Declined
                </Text>
              </Flex>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <ThemeIcon color="info" size="sm" radius="xl">
                  <DotsThreeVerticalIcon size={18} />
                </ThemeIcon>
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Payment from #3042
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 23, 2024, 12:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Flex direction="column">
                <Text c="textPrimary" size="sm" fw={500} ta="right">
                  + $50.00
                </Text>
                <Text c="info" size="xs" ta="right">
                  Pending
                </Text>
              </Flex>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <ThemeIcon color="success" size="sm" radius="xl">
                  <CheckIcon size={18} />
                </ThemeIcon>
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Payment from #1032
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 10, 2024, 10:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Flex direction="column">
                <Text c="textPrimary" size="sm" fw={500} ta="right">
                  + $250.00
                </Text>
                <Text c="success" size="xs" ta="right">
                  Completed
                </Text>
              </Flex>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <ThemeIcon color="success" size="sm" radius="xl">
                  <CheckIcon size={18} />
                </ThemeIcon>
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Payment from #1032
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 10, 2024, 10:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Flex direction="column">
                <Text c="textPrimary" size="sm" fw={500} ta="right">
                  + $250.00
                </Text>
                <Text c="success" size="xs" ta="right">
                  Completed
                </Text>
              </Flex>
            </Flex>

            <Flex
              justify="center"
              w="90%"
              align="center"
              gap="sm"
              style={{
                borderTop: "1px solid #EBEAED",
                paddingTop: 16,
                cursor: "pointer",
                position: "absolute",
                bottom: 0,
              }}
            >
              <Text c="textSecondary" size="sm" fw={600} ta="center">
                View all transactions
              </Text>
              <ArrowRight size={16} color="#84818A" />
            </Flex>
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Paper bg="white" p="lg" radius="xs" style={{ position: "relative" }}>
            <Flex justify="space-between" align="center">
              <Text c="textPrimary" fw={600} size="lg">
                Recent Trips Activity
              </Text>
              <Text c="primary" fw={600} size="sm">
                View All
              </Text>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <Image src="/car.png" alt="Car" radius="md" w={60} />
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Trip #1032
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 10, 2024, 10:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Badge color="success" variant="light">
                Completed
              </Badge>
            </Flex>
            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <Image src="/car.png" alt="Car" radius="md" w={60} />
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Trip #1234
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 10, 2024, 10:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Badge color="success" variant="light">
                Completed
              </Badge>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <Image src="/car.png" alt="Car" radius="md" w={60} />
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Trip #1224
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 10, 2024, 10:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Badge color="success" variant="light">
                Completed
              </Badge>
            </Flex>

            <Flex mt="lg" justify="space-between" align="center">
              <Flex gap="sm" align="center">
                <Image src="/car.png" alt="Car" radius="md" w={60} />
                <Flex direction="column">
                  <Text c="textPrimary" fw={500} size="sm">
                    Trip #3234
                  </Text>
                  <Text c="textSecondary" size="xs">
                    Jan 10, 2024, 10:00 AM
                  </Text>
                </Flex>
              </Flex>

              <Badge color="success" variant="light">
                Completed
              </Badge>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
