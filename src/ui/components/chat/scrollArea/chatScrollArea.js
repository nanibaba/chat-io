import { ScrollArea } from "@mantine/core"; 
import classes from "./styles/scrollarea.module.css";

export default function ChatScrollArea({messagedContent, viewportRef}) { 
    const content = messagedContent
        .map((message, index) => <p key={index}>{message}</p>);
    return (
    <ScrollArea classNames={{
            root: classes.root,
            viewport: classes.viewport,
            content: classes.content
        }}
        viewportRef={viewportRef}
        flex="1 1 auto"
        scrollbars="y"> 
        {content}
    </ScrollArea> 
    )
}