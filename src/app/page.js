import CenteredPageContainer from '@/ui/components/centeredPageContainer.js';
import { Title } from '@mantine/core';
import ChatTypesContainer from '@/ui/components/home/chatTypesContainer.js';

export default function Home() {
  return (
    <CenteredPageContainer>
      <Title mb="lg" order={2} textWrap="wrap">
        Welcome to ChatIO! Please<br></br>choose your preferred chat type:
      </Title>
      <ChatTypesContainer/>
    </CenteredPageContainer>
  )
}
