'use client'

import { useState, useMemo, useEffect } from 'react';
import { useSocket } from '@/websocket/socketProvider.js';
import MessageInputEventHandler from './messageInputEventHandler.js';
import SendIcon from './sendIcon.js';
import { TextInput } from '@mantine/core';

export default function MessageInput({
    setIsChatActive,
    setIsTextFaded,
    setMessagedContent, 
    isChatActive,
    messagedContent,
    viewport
}) {
    const [message, setMessage] = useState('');
    const socket = useSocket();
    const messageInputEventHandler = useMemo(() => {
        return new MessageInputEventHandler(
        setIsChatActive,
        setIsTextFaded,
        setMessagedContent,
        setMessage,
        socket
    );
    }, [
        setIsChatActive, setIsTextFaded, 
        setMessagedContent, socket
    ]); 
    useEffect(() => {
        if (!socket) return;
        socket.on("sendMessage", message => {
            const messageEntity = {
                message,
                sender: "other"
            };
            messageInputEventHandler.sendMessage(
                isChatActive,
                messagedContent,
                messageEntity,
                viewport
            );
        });
        return () => {
		    socket.off("sendMessage");
	    };
    }, [
        socket,
        messageInputEventHandler,
        isChatActive,
        messagedContent,
        viewport
    ]);
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