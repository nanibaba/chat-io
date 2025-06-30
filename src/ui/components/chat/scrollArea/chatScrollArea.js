import MessageBox from "./messageBox.js";
import { ScrollArea } from "@mantine/core"; 
import classes from "./styles/scrollarea.module.css";

export default function ChatScrollArea({messagedContent, viewportRef}) { 
    const content = messagedContent
        .map((message, index) => {
            const marginBottom = index !== 
                messagedContent.length - 1 ? 
                "sm": 0; 
            return (
            <MessageBox key={index} 
                right={true}
                marginBottom={marginBottom}
                message={message}/>
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