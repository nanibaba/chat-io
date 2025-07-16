import { flushSync } from 'react-dom';
import { scrollToBottom } from "../scrollArea/scroller.js";

class MessageInputEventHandler {
    #setIsChatActive; 
    #setIsTextFaded;
    #setMessagedContent;
    #setMessage; 
    #socket; 
    #setSender; 

    constructor(
        setIsChatActive,
        setIsTextFaded,
        setMessagedContent,
        setMessage,
        socket,
        setSender
    ) {
        this.#setIsChatActive = setIsChatActive; 
        this.#setIsTextFaded = setIsTextFaded;
        this.#setMessagedContent = setMessagedContent;
        this.#setMessage = setMessage; 
        this.#socket = socket;
        this.#setSender = setSender
    }
    
    sendMessage(
        isChatActive, 
        messagedContent, 
        message,
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
                message
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
        message,
        viewport
    ) {
        // 1. Emit socket event
        this.#socket.emit('sendMessage', message);
        // 2. Set sender to current user
        this.#setSender("me"); 
        // 3. Send message 
        this.sendMessage(
            isChatActive,
            messagedContent,
            message,
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
                this.sendSocketMessage(
                    isChatActive, 
                    messagedContent, 
                    message,
                    viewport
                ); 
            }
        } 
    }

  export default MessageInputEventHandler;