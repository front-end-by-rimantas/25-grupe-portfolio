class Logo {
    constructor(parentDOM, data) {
        this.parentDOM = parentDOM;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidDOM) {
            return false;
        }
        if (!this.isValidData) {
            return false;
        }

        const DOM = this.parentDOM.querySelector('.col-12');
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;

        this.render();
    }

    isValidDOM() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const { imgPath, defaultLogo, alt } = this.data;
        let HTML = `<img class="logo" src="${imgPath + defaultLogo}" alt="${alt}">`;

        this.DOM.insertAdjacentHTML('beforeend', HTML)
    }
}

export { Logo }