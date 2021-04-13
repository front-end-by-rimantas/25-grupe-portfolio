class TopText {
    /**
     * Headerio top-text sekcijos generavimas
     * @param {Object} DOM Nuoroda (reference) i DOM elementa
     * @param {Object[]} data Objektas su info apie virsutini teksta
     * @param {boolean} data.isVisible Ar top-text sekcija yra matoma
     * @param {Object[]} data.content Top-text turinio dalys
     * @param {string} data.content[].type Turinio elemento tipas (options: link, text)
     * @param {string} [data.content[].href] Nuoroda (jei taikoma)
     * @param {string} data.content[].text Top-text turinio tekstas
     */
    constructor(DOM, data) {
        this.DOM = DOM;
        this.data = data;

        this.init();
    }

    init() {
        if (!this.isValidDOM) {
            return false;
        }
        if (!this.isValidData) {
            return false;
        }

        this.render();
    }

    isValidDOM() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        if (!this.data.isVisible) {
            return false;
        }

        let HTML = '';

        for (const item of this.data.content) {
            if (item.type === 'link') {
                HTML += `<a href="${item.href}">${item.text}</a>`;
            }
            if (item.type === 'text') {
                HTML += `<span>${item.text}</span>`;
            }
        }

        this.DOM.innerHTML = HTML;
    }
}

export { TopText }