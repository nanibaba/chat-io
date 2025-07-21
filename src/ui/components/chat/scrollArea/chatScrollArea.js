import MessageBox from "./messageBox.js";
import { ScrollArea } from "@mantine/core"; 
import classes from "./styles/scrollarea.module.css";

export default function ChatScrollArea({messagedContent, viewportRef}) { 
    const content = messagedContent
        .map((messageEntity, index) => {
            const marginBottom = index !== 
                messagedContent.length - 1 ? 
                "sm": 0; 
            const right = messageEntity.sender === "me"; 
            return (
            <MessageBox key={index} 
                right={right}
                marginBottom={marginBottom}
                message={messageEntity.message}/>
            )
        });
    return (
    <ScrollArea classNames={{
            root: classes.root,
            content: classes.content
        }}
        viewportRef={viewportRef}
        flex="1 1 auto"
        scrollbars="y"> 
        {content}
    </ScrollArea> 
    )
}