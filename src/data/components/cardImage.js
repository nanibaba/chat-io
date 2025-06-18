class CardImage {
    #src; 
    #alt; 

    constructor(src, alt) {
        this.#src = src; 
        this.#alt = alt; 
    }

    get src() {
        return this.#src; 
    }

    set src(src) {
        this.#src = src; 
    }

    get alt() {
        return this.#alt; 
    }

    set alt(alt) {
        this.#alt = alt; 
    }
}

export default CardImage; 