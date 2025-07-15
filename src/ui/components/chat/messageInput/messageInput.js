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
    isChatActive,
    messagedContent,
    viewport
}) {
    const [messageObject, setMessageObject] = useState({
        message: "",
        sender: "me"
    });
    const socket = useSocket();
    const messageInputEventHandler = useMemo(() => {
        return new MessageInputEventHandler(
        setIsChatActive,
        setIsTextFaded,
        setMessagedContent,
        setMessageObject,
        socket
    );
    }, [setIsChatActive, setIsTextFaded, setMessagedContent, 
        setMessageObject, socket
    ]); 
    useEffect(() => {
        if (!socket) return;
        socket.on("sendMessage", message => {
            console.log(message);
            setMessageObject({
                message,
                sender: "other"
            })
            messageInputEventHandler.sendMessage(
                isChatActive,
                messagedContent,
                messageObject,
                viewport
            )
        });
        return () => {
		    socket.off("sendMessage");
	    };
    }, [
        socket,
        messageInputEventHandler,
        isChatActive,
        messagedContent,
        messageObject,
        viewport
    ]);
    const icon = <SendIcon messageObject={messageObject} 
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
        value={messageObject.message}
        onChange={(event) => setMessageObject({
            ...messageObject,
            message: event.currentTarget.value
        })}
        onKeyDown={(event) => messageInputEventHandler.activateKeyboardEvent(
            event.key, 
            isChatActive,
            messagedContent,
            messageObject,
            viewport
        )} 
    />
    )
}