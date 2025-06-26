import { ActionIcon } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';

export default function SendIcon({
    message, 
    messageInputEventHandler, 
    isChatActive, 
    messagedContent,
    viewport
}) {
    const disabled = message === '' || message === null
    return (
    <ActionIcon onClick={() => messageInputEventHandler.sendMessage(
        isChatActive, 
        messagedContent, 
        message,
        viewport
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