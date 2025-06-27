import InnerPageContainer from '@/ui/components/innerPageContainer.js';
import { Title } from '@mantine/core';
import ChatTypesContainer from '@/ui/components/home/chatTypesContainer.js';

export default function Home() {
  return (
    <InnerPageContainer>
      <Title mb="lg" order={2} textWrap="wrap">
        Welcome to ChatIO! Please<br></br>choose your preferred chat type:
      </Title>
      <ChatTypesContainer/>
    </InnerPageContainer>
  )
}
