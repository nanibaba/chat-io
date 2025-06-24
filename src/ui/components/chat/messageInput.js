'use client'

import { useState } from 'react';
import SendIcon from './sendIcon.js';
import { TextInput } from '@mantine/core';

export default function MessageInput({
    messagedContent,
    setMessagedContent, 
    isChatActive, 
    setIsChatActive
}) {
    const [message, setMessage] = useState('');
    const icon = <SendIcon messagedContent={messagedContent}
        setMessagedContent={setMessagedContent}
        setMessage={setMessage}
        message={message} 
        isChatActive={isChatActive} 
        setIsChatActive={setIsChatActive}/>
    return (
    <TextInput size="lg" 
        w="50rem"
        maw="65%"
        radius="lg"
        rightSectionPointerEvents="all"
        placeholder="Message..."
        aria-label="Message Input"
        rightSection={icon}
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
    />
    )
}