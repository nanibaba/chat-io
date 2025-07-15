import { flushSync } from 'react-dom';
import { scrollToBottom } from "../scrollArea/scroller.js";

class MessageInputEventHandler {
    #setIsChatActive; 
    #setIsTextFaded;
    #setMessagedContent;
    #setMessageObject; 
    #socket; 

    constructor(
        setIsChatActive,
        setIsTextFaded,
        setMessagedContent,
        setMessageObject,
        socket
    ) {
        this.#setIsChatActive = setIsChatActive; 
        this.#setIsTextFaded = setIsTextFaded;
        this.#setMessagedContent = setMessagedContent;
        this.#setMessageObject = setMessageObject; 
        this.#socket = socket;
    }
    
    sendMessage(
        isChatActive, 
        messagedContent, 
        messageObject,
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
                messageObject
            ]); 
            // 3. Clear message input
            this.#setMessageObject({
                ...messageObject,
                message: ''
            });
        });
        // 4. Scroll to last message 
        if (viewport && viewport.current) {
            scrollToBottom(viewport.current);
        }
    }

    sendSocketMessage(
        isChatActive, 
        messagedContent, 
        messageObject,
        viewport
    ) {
        console.log(messageObject); 
        // 1. Emit socket event
        this.#socket.emit('sendMessage', messageObject.message);
        // 2. Send message 
        this.sendMessage(
            isChatActive,
            messagedContent,
            messageObject,
            viewport
        );
    }

    activateKeyboardEvent(
        key, 
        isChatActive, 
        messagedContent, 
        messageObject,
        viewport
    ) {
        const message = messageObject.message;
        const isMessageSendEvent = key === "Enter" && 
            message !== '' && message !== null;
            if (isMessageSendEvent) {
                this.sendSocketMessage(
                    isChatActive, 
                    messagedContent, 
                    messageObject,
                    viewport
                ); 
            }
        } 
    }

  export default MessageInputEventHandler;