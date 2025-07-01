'use client'

import { useSocket } from '@/websocket/socketProvider.js';
import { useEffect } from 'react';
import InnerPageContainer from '@/ui/components/innerPageContainer.js';
import { Title } from '@mantine/core';
import ChatTypesContainer from '@/ui/components/home/chatTypesContainer.js';

export default function Home() {
  const socket = useSocket(); 
  useEffect(() => {
    if (!socket) return;
    socket.on("sendMessage", (message) => {
      console.log(message); 
	});
	return () => {
		socket.off("sendMessage");
	};
}, [socket]);
socket.emit('sendMessage', "Hello World");
  return (
    <InnerPageContainer>
      <Title mb="lg" order={2} textWrap="wrap">
        Welcome to ChatIO! Please<br></br>choose your preferred chat type:
      </Title>
      <ChatTypesContainer/>
    </InnerPageContainer>
  )
}
