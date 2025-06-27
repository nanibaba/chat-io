'use client'

import { useState, useRef } from 'react';
import OuterPageContainer from '@/ui/components/outerpageContainer.js';
import Drawer from '@/ui/components/drawer.js';
import InnerPageContainer from '@/ui/components/innerPageContainer.js';
import { CSSTransition } from 'react-transition-group';
import { Title } from '@mantine/core';
import ChatScrollArea from '@/ui/components/chat/scrollArea/chatScrollArea.js';
import MessageInput from '@/ui/components/chat/messageInput/messageInput.js';
import classes from '../chat.module.css';

export default function RegularChat() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [isTextFaded, setIsTextFaded] = useState(false); 
  const [messagedContent, setMessagedContent] = useState([]); 
  const titleRef = useRef(null); 
  const viewport = useRef(null);
  const innerPageContainerStyle = {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexGrow: 1
  }
  const hasTransitioned = isChatActive && isTextFaded; 
  if (hasTransitioned) {
    innerPageContainerStyle.justifyContent = "space-between";
  }
  return (
  <OuterPageContainer>
    <Drawer type="left" width={260}/>
    <InnerPageContainer style={innerPageContainerStyle}>
      <CSSTransition in={!isChatActive} 
        classNames={{
          exit: classes['fade-out-exit'],
          exitActive: classes['fade-out-exit-active']
        }}
        nodeRef={titleRef}
        timeout={280}
        unmountOnExit>
          <Title ref={titleRef}
            mb="lg" 
            order={2} 
            textWrap="wrap">
              You&apos;re now chatting with Martin. Type<br></br>in something to start the conversation:
          </Title>
      </CSSTransition>
      {hasTransitioned && (
        <ChatScrollArea messagedContent={messagedContent} 
          viewportRef={viewport}/>
      )}
      <MessageInput setIsChatActive={setIsChatActive}
        setIsTextFaded={setIsTextFaded}
        setMessagedContent={setMessagedContent}
        isChatActive={isChatActive} 
        messagedContent={messagedContent}
        viewport={viewport}
      />
    </InnerPageContainer>
  </OuterPageContainer>
  )
}