import { TopText } from './TopText.js';
import { Logo } from './Logo.js';
import { Nav } from './Nav.js';

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

        this.render();
        // uzregistruoti event - scroll - position: static/fixed
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const HTML = `<div class="row top-text"></div>
                    <div class="row"><div class="col-12 bottom-content"></div></div>`;
        this.DOM.innerHTML = HTML;

        const allColsDOM = this.DOM.querySelectorAll('.row');

        new TopText(allColsDOM[0], this.data.topText);
        new Logo(allColsDOM[1], this.data.logo);
        new Nav(allColsDOM[1], this.data.nav);
    }
}

export { Header }