class Languages {
    constructor(parentDOM, data) {
        this.parentDOM = parentDOM;
        this.data = data;

        this.DOM = null;
        this.localStorageLangKey = 'portfolio-lang';

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
        this.addEvents();
    }

    isValidDOM() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const { imgPath, defaultLang, list } = this.data;
        const selectedLang = localStorage.getItem(this.localStorageLangKey) || defaultLang;
        const selectedLangData = list[selectedLang];

        let otherLangsHTML = '';
        for (const langKey in list) {
            const lang = list[langKey];

            if (langKey !== selectedLang) {
                otherLangsHTML += `<div class="item" data-lang-short="${langKey}">
                                    <img src="${imgPath + lang.img}" alt="${lang.full} flag">
                                    <span>${lang.full}</span>
                                </div>`;
            }
        }

        let HTML = `<div class="languages">
                        <div class="selected">
                            <img src="${imgPath + selectedLangData.img}" alt="${selectedLangData.full} flag">
                            <span>${selectedLangData.full}</span>
                            <i class="fa fa-angle-down"></i>
                        </div>
                        <div class="list">${otherLangsHTML}</div>
                    </div>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML)
    }

    addEvents() {
        const otherLangs = this.DOM.querySelectorAll('.languages .item');

        for (const lang of otherLangs) {
            lang.addEventListener('click', () => {
                const short = lang.dataset.langShort;
                localStorage.setItem(this.localStorageLangKey, short);
                location.reload();
            })
        }
    }
}

export { Languages }