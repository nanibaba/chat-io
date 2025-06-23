'use client'

import { useState, useRef } from 'react';
import { useCounter } from '@mantine/hooks';
import CenteredPageContainer from '@/ui/components/centeredPageContainer.js';
import { CSSTransition } from 'react-transition-group';
import { Title, ScrollAreaAutosize } from '@mantine/core';
import MessageInput from '@/ui/components/chat/messageInput.js';
import classes from '../chat.module.css';

export default function RegularChat() {
  const [message, setMessage] = useState('');
  const [isChatActive, setIsChatActive] = useState(false);
  const ref = useRef(null); 
  const [count, handlers] = useCounter(0);
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{message}</p>);
    return (
        <CenteredPageContainer isChatActive={isChatActive}>
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
          <ScrollAreaAutosize mah={300} w="100%" mx="auto">
            {content}
          </ScrollAreaAutosize>
          <MessageInput message={message} 
            setMessage={setMessage}
            isChatActive={isChatActive} 
            setIsChatActive={setIsChatActive}
            increment={handlers.increment}/>
        </CenteredPageContainer>
      )
}