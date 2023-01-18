class Search {
    constructor(parentDOM) {
        this.parentDOM = parentDOM;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidDOM) {
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

    render() {
        let HTML = `<div class="search">
                        <input type="text">
                        <i class="fa fa-search"></i>
                    </div>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { Search }