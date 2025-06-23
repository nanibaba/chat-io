'use client'

import SendIcon from './sendIcon.js';
import { TextInput } from '@mantine/core';

export default function MessageInput({message, setMessage, isChatActive, setIsChatActive, increment}) {
    const icon = <SendIcon message={message} 
        isChatActive={isChatActive} 
        setIsChatActive={setIsChatActive} 
        increment={increment}/>
    const textInputProps = {
        size: "lg", 
        w: "43rem",
        maw: "65%",
        radius: "lg",
        rightSectionPointerEvents: "all",
        placeholder: "Message..."
    }
    if (isChatActive) {
        textInputProps.pos = "absolute";
        textInputProps.bottom = 0; 
    }
    return (
    <TextInput {...textInputProps}
        aria-label="Message Input"
        rightSection={icon}
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
    />
    )
}