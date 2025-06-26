'use client'

import { useState } from 'react';
import SendIcon from './sendIcon.js';
import { TextInput } from '@mantine/core';
import MessageInputEventHandler from './messageInputEventHandler.js';

export default function MessageInput({
    setIsChatActive,
    setIsTextFaded,
    setMessagedContent, 
    isChatActive,
    messagedContent,
    viewport
}) {
    const [message, setMessage] = useState('');
    const messageInputEventHandler = new MessageInputEventHandler(
        setIsChatActive,
        setIsTextFaded,
        setMessagedContent,
        setMessage
    );
    const icon = <SendIcon message={message} 
        messageInputEventHandler={messageInputEventHandler}
        isChatActive={isChatActive}
        messagedContent={messagedContent} 
        viewport={viewport}/>
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
        onKeyDown={(event) => messageInputEventHandler.activateKeyboardEvent(
            event.key, 
            isChatActive,
            messagedContent,
            message,
            viewport
        )} 
    />
    )
}