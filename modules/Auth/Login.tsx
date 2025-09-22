"use client";

import {
  Button,
  Container,
  Image,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useRouter } from "next/navigation";

export function Login() {
  const router = useRouter();
  return (
    <Container size={420} my={40}>
      <Image src="/logo.png" alt="Ridemio Logo" mb="xl" w={100} />
      <Text size="xl" c="textPrimary" fw={700} mb="md">
        Login to Ridemio Dashboard
      </Text>

      <TextInput placeholder="Email" label="Email" size="md" />
      <PasswordInput placeholder="Password" label="Password" size="md" />

      <Button
        fullWidth
        mt="xl"
        size="md"
        onClick={() => router.push("/overview")}
      >
        Login
      </Button>
    </Container>
  );
}
