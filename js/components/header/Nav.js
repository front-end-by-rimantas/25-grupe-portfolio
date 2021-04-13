class Nav {
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
        let HTML = '';

        for (const link of this.data) {
            HTML += `<a class="item" href="${link.href}">${link.text}</a>`;
        }

        this.DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
    }
}

export { Nav }