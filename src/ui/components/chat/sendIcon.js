import { ActionIcon } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';

function sendMessage(isChatActive, setIsChatActive, increment) {
    // 1. Set chat to active state
    if (!isChatActive) {
        setIsChatActive(true); 
    }
    // 2. Add new message
    increment()
}

export default function SendIcon({message, isChatActive, setIsChatActive, increment}) {
    const disabled = message === '' || message === null
    return (
    <ActionIcon onClick={() => sendMessage( 
        isChatActive, 
        setIsChatActive, 
        increment
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