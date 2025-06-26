import { ScrollArea } from "@mantine/core"; 

export default function ChatScrollArea({messagedContent, viewportRef}) { 
    const content = messagedContent
        .map((message, index) => <p key={index}>{message}</p>);
    return (
    <ScrollArea viewportRef={viewportRef}
        flex="1 1 auto"
        w="50rem"
        maw="65%"
        scrollbars="y"> 
        {content}
    </ScrollArea> 
    )
}