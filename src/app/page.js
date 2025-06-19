import { Container, Title } from '@mantine/core';
import ChatTypesContainer from '@/ui/components/home/chatTypesContainer.js';

export default function Home() {
  return (
  <Container style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }}
    h={1000} 
    mt="sm" 
    fluid >
      <Title mb="lg" order={2}>
        Welcome to ChatIO! Please<br></br>choose your preferred chat type:
      </Title>
    <ChatTypesContainer />
  </Container>
  )
}
