import { Badge, Button, Container, Pill, Text } from "@mantine/core";

export default function Home() {
  return (
    <Container bg="background" py={40} my={40}>
      <Text size="xl" c="textPrimary">
        Ridemio
      </Text>
      <Button>Click me</Button>
    </Container>
  );
}
