import { TopText } from './TopText.js';

/*
Jeigu nori susikurti Header su siuo komponentu, viskas ko tau reikia yra
<header id="main_header" class="container"></header>
*/

class Header {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti jokio elemento');
            return false;
        }
        this.DOM = DOM;

        this.DOM.classList.add('header');

        this.renderBase();
        // sukurti top-text
        // sukurti logo
        // sukurti nav
        // sukurti kalbas
        // sukurti search
        // uzregistruoti event - scroll - position: static/fixed
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    renderBase() {
        const HTML = `<div class="row"><div class="col-12"></div></div>
                    <div class="row"><div class="col-12"></div></div>`;
        this.DOM.innerHTML = HTML;

        const allColsDOM = this.DOM.querySelectorAll('.col-12');

        new TopText(allColsDOM[0], this.data.topText);
    }
}

export { Header }