import CenteredPageContainer from '@/ui/components/centeredPageContainer.js';
import { Title } from '@mantine/core';

export default function GroupChat() {
    return (
        <CenteredPageContainer>
          <Title mb="lg" order={2}>
            You&apos;re now in a group chat with Sigma Squad.<br></br>Type in something to start the conversation:
          </Title>
        </CenteredPageContainer>
      )
}