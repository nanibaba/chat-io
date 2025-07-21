import { flushSync } from 'react-dom';
import { scrollToBottom } from "../scrollArea/scroller.js";

class MessageInputEventHandler {
    #setIsChatActive; 
    #setIsTextFaded;
    #setMessagedContent;
    #setMessage; 
    #socket;

    constructor(
        setIsChatActive,
        setIsTextFaded,
        setMessagedContent,
        setMessage,
        socket
    ) {
        this.#setIsChatActive = setIsChatActive; 
        this.#setIsTextFaded = setIsTextFaded;
        this.#setMessagedContent = setMessagedContent;
        this.#setMessage = setMessage; 
        this.#socket = socket;
    }
    
    sendMessage(
        isChatActive, 
        messagedContent, 
        messageEntity,
        viewport
    ) {
        // 1. Set chat to active state
        if (!isChatActive) {
            this.#setIsChatActive(true); 
            setTimeout(() => {
                this.#setIsTextFaded(true);
            }, 280)
        }
        flushSync(() => {
            // 2. Add sent message to chat scroll
            this.#setMessagedContent([
                ...messagedContent,
                messageEntity
            ]); 
            // 3. Clear message input
            this.#setMessage('');
        });
        // 4. Scroll to last message 
        if (viewport && viewport.current) {
            scrollToBottom(viewport.current);
        }
    }

    sendSocketMessage(
        isChatActive, 
        messagedContent, 
        messageEntity,
        viewport
    ) {
        // 1. Emit socket event
        this.#socket.emit('sendMessage', messageEntity.message);
        // 2. Set sender to current user
        messageEntity.sender = "me"; 
        // 3. Send message 
        this.sendMessage(
            isChatActive,
            messagedContent,
            messageEntity,
            viewport
        );
    }

    activateKeyboardEvent(
        key, 
        isChatActive, 
        messagedContent, 
        message,
        viewport
    ) {
        const isMessageSendEvent = key === "Enter" && 
            message !== '' && message !== null;
            if (isMessageSendEvent) {
                const messageEntity = {
                    message
                };  
                this.sendSocketMessage(
                    isChatActive, 
                    messagedContent, 
                    messageEntity,
                    viewport
                ); 
            }
        } 
    }

  export default MessageInputEventHandler;