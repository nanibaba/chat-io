import { ActionIcon } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';

export default function SendIcon({inputValue, setIsChatActive}) {
    const disabled = inputValue === '' || inputValue === null
    return (
    <ActionIcon onClick={() => setIsChatActive(true)}
        variant="filled" 
        radius="md" size="lg" 
        disabled={disabled} 
        aria-label="Send Message">
        <IconSend2 style={{ width: '70%', height: '70%' }} stroke={1.75} />
    </ActionIcon>
    )
}