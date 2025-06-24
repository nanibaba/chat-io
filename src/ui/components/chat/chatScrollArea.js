import { ScrollArea } from "@mantine/core"; 

export default function ChatScrollArea({messagedContent}) { 
    const content = messagedContent
        .map((message, index) => <p key={index}>{message}</p>);
    return (
    <ScrollArea flex="1 1 auto"
        w="50rem"
        maw="65%"
        scrollbars="y"> 
        {content}
    </ScrollArea> 
    )
}