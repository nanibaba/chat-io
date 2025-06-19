class CardBody {
    #title; 
    #text;
    #buttonText; 
    #buttonHref; 

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

    get buttonHref() {
        return this.#buttonHref
    }

    set buttonHref(buttonHref) {
        this.#buttonHref = buttonHref
    }
}

export default CardBody; 