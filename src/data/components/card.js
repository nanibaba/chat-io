class StandardCard {
    #image; 
    #body; 

    constructor(image, body) {
        this.#image = image; 
        this.#body = body; 
    }

    get image() {
        return this.#image; 
    }

    set image(image) {
        this.#image = image; 
    }

    get body() {
        return this.#body; 
    }

    set body(body) {
        this.#body = body; 
    }
}

export default StandardCard; 