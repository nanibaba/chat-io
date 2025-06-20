'use client'

import { useState } from 'react';
import SendIcon from './sendIcon.js';
import { TextInput } from '@mantine/core';

export default function MessageInput({setIsChatActive}) {
    const [value, setValue] = useState('');
    const icon = <SendIcon setIsChatActive={setIsChatActive} inputValue={value}/>
    return (
    <TextInput aria-label="Message Input"
        size="lg"
        w="43rem"
        maw="65%"
        radius="lg"
        rightSectionPointerEvents="all"
        rightSection={icon}
        placeholder="Message..."
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
    />
    )
}