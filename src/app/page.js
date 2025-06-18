import { Container, Title } from '@mantine/core';
import ChatTypesContainer from '@/ui/components/home/chatTypesContainer.js';

export default function Home() {
  return (
  <Container mx="initial" mt="sm">
    <Title order={2}>Welcome to the best chat app!</Title>
    <ChatTypesContainer />
  </Container>
  )
}
