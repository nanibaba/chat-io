class MessageInputEventHandler {
    #setIsChatActive; 
    #setIsTextFaded;
    #setMessagedContent;
    #setMessage; 

    constructor(
        setIsChatActive,
        setIsTextFaded,
        setMessagedContent,
        setMessage
    ) {
        this.#setIsChatActive = setIsChatActive; 
        this.#setIsTextFaded = setIsTextFaded;
        this.#setMessagedContent = setMessagedContent;
        this.#setMessage = setMessage; 
    }

    sendMessage(isChatActive, messagedContent, message) {
        // 1. Set chat to active state
        if (!isChatActive) {
            this.#setIsChatActive(true); 
            setTimeout(() => {
                this.#setIsTextFaded(true);
            }, 280)
        }
        // 2. Add sent message to chat scroll
        this.#setMessagedContent([
            ...messagedContent,
            message
        ]); 
        // 3. Clear message input
        this.#setMessage('');
    }

    activateKeyboardEvent(key, isChatActive, messagedContent, message) {
        const isMessageSendEvent = key === "Enter" && 
            message !== '' && message !== null;
            if (isMessageSendEvent) {
                this.sendMessage(isChatActive, messagedContent, message); 
            }
    } 
}

  export default MessageInputEventHandler;