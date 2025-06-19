import CenteredPageContainer from '@/ui/components/centeredPageContainer.js';
import { Title } from '@mantine/core';

export default function RegularChat() {
    return (
        <CenteredPageContainer>
          <Title mb="lg" order={2}>
            You&apos;re now chatting with Martin.<br></br>Type in something to start the conversation:
          </Title>
        </CenteredPageContainer>
      )
}