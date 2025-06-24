import { ActionIcon } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';

function sendMessage(
    isChatActive, 
    setIsChatActive, 
    messagedContent,
    setMessagedContent,
    message, 
    setMessage
) {
    setTimeout(() => {
        // 1. Set chat to active state
        if (!isChatActive) {
            setIsChatActive(true); 
        }
        // 2. Add sent message to chat scroll
        setMessagedContent([
        ...messagedContent,
        message
    ]); 
        // 3. Clear message input
        setMessage('');
    }, 280) 
}

export default function SendIcon({
    messagedContent,
    setMessagedContent, 
    setMessage,
    message, 
    isChatActive, 
    setIsChatActive
    }) {
    const disabled = message === '' || message === null
    return (
    <ActionIcon onClick={() => sendMessage( 
        isChatActive, 
        setIsChatActive, 
        messagedContent,
        setMessagedContent,
        message,
        setMessage
        )}
        variant="filled" 
        radius="md" 
        size="lg" 
        disabled={disabled} 
        aria-label="Send Message">
        <IconSend2 style={{ width: '70%', height: '70%' }} stroke={1.75} />
    </ActionIcon>
    )
}