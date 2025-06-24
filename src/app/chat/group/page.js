import PageContainer from '@/ui/components/pageContainer.js';
import { Title } from '@mantine/core';

export default function GroupChat() {
    return (
        <PageContainer>
          <Title mb="lg" order={2} textWrap="wrap">
            You&apos;re now in a group chat with Sigma Squad. Type<br></br>in something to start the conversation:
          </Title>
        </PageContainer>
      )
}