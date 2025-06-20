'use client'

import { useState } from 'react';
import CenteredPageContainer from '@/ui/components/centeredPageContainer.js';
import { Title } from '@mantine/core';
import MessageInput from '@/ui/components/chat/messageInput.js';

export default function RegularChat() {
  const [isChatActive, setIsChatActive] = useState(false); 
  const justifyContent = isChatActive ? "flex-end": "center"; 
    return (
        <CenteredPageContainer justifyContent={justifyContent}>
          {!isChatActive && (
          <Title mb="lg" order={2} textWrap="wrap">
            You&apos;re now chatting with Martin. Type<br></br>in something to start the conversation:
          </Title>
          )}
          <MessageInput setIsChatActive={setIsChatActive}/>
        </CenteredPageContainer>
      )
}