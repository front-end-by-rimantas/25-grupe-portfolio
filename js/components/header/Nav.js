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

    submenuDirection(direction) {
        const available = ['bottom', 'right', 'left'];
        return available.includes(direction) ? direction : available[0];
    }

    generateHTML(item) {
        let HTML = '';

        if (item.submenu) {
            const labelHMTL = item.type === 'link'
                ? `<a href="${item.href}" class="label">${item.text}</a>`
                : `<div class="label">${item.text}</div>`;

            HTML += `<div class="item dropdown ${this.submenuDirection(item.submenuDirection)}">
                        ${labelHMTL}
                        <div class="submenu">SUBMENU</div>
                    </div>`;
        } else {
            HTML += `<a href="${item.href}" class="item">${item.text}</a>`;
        }

        return HTML;
    }

    render() {
        let HTML = '';

        for (const item of this.data) {
            HTML += this.generateHTML(item);
        }

        this.DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
    }
}

export { Nav }