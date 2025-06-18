class CardBody {
    #title; 
    #text;
    #buttonText; 

    constructor(title, text, buttonText) {
        this.#title = title; 
        this.#text = text; 
        this.#buttonText = buttonText; 
    }

    get title() {
        return this.#title; 
    }

    set title(title) {
        this.#title = title; 
    }

    get text() {
        return this.#text; 
    }

    set text(text) {
        this.#text = text; 
    }

    get buttonText() {
        return this.#buttonText; 
    }

    set buttonText(buttonText) {
        this.#buttonText = buttonText; 
    }
}

export default CardBody; 