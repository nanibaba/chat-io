'use client'

import { useState, useRef } from 'react';
import PageContainer from '@/ui/components/pageContainer.js';
import { CSSTransition } from 'react-transition-group';
import { Title } from '@mantine/core';
import ChatScrollArea from '@/ui/components/chat/chatScrollArea.js';
import MessageInput from '@/ui/components/chat/messageInput.js';
import classes from '../chat.module.css';

export default function RegularChat() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [messagedContent, setMessagedContent] = useState([]); 
  const ref = useRef(null); 
  const containerStyle = {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
  if (isChatActive) {
    containerStyle.justifyContent = "space-between";
  }
  return (
  <PageContainer style={containerStyle}>
    <CSSTransition in={!isChatActive} 
      classNames={{
        exit: classes['fade-out-exit'],
        exitActive: classes['fade-out-exit-active']
      }}
      nodeRef={ref}
      timeout={280}
      unmountOnExit>
        <Title ref={ref}
          mb="lg" 
          order={2} 
          textWrap="wrap">
            You&apos;re now chatting with Martin. Type<br></br>in something to start the conversation:
        </Title>
      </CSSTransition>
      {isChatActive && (
        <ChatScrollArea messagedContent={messagedContent} />
        )}
        <MessageInput messagedContent={messagedContent}
          setMessagedContent={setMessagedContent}
          isChatActive={isChatActive} 
          setIsChatActive={setIsChatActive}
        />
    </PageContainer>
    )
}