'use client'

import { useState, useMemo, useEffect } from 'react';
import { useSocket } from '@/websocket/socketProvider.js';
import SendIcon from './sendIcon.js';
import { TextInput } from '@mantine/core';
import MessageInputEventHandler from './messageInputEventHandler.js';

export default function MessageInput({
    setIsChatActive,
    setIsTextFaded,
    setMessagedContent, 
    setSender,
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
        socket,
        setSender
    );
    }, [
        setIsChatActive, setIsTextFaded, 
        setMessagedContent, socket, setSender
    ]); 
    useEffect(() => {
        if (!socket) return;
        socket.on("sendMessage", message => {
            setSender("other"); 
            messageInputEventHandler.sendMessage(
                isChatActive,
                messagedContent,
                message,
                viewport
            )
        });
        return () => {
		    socket.off("sendMessage");
	    };
    }, [
        socket,
        setSender,
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