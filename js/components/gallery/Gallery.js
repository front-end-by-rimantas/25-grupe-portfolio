class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.allGalleryItemsDOM = [];
        this.activeFilterIndex = 0;
        this.uniqueTags = [];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: nepavyko rasti galerijos vietos pagal pateikta selektoriu');
            return false;
        }

        this.formatData();
        this.render();
        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    formatData() {
        for (const item of this.data.list) {
            for (let i = 0; i < item.tags.length; i++) {
                item.tags[i] = item.tags[i].toLowerCase();
            }
        }
    }

    render() {
        const HTML = `<div class="filter">${this.generateFilter()}</div>
                    <div class="list">${this.generateList()}</div>`;
        this.DOM.innerHTML = HTML;
        this.DOM.classList.add('gallery');
        this.allGalleryItemsDOM = this.DOM.querySelectorAll('.list > .item');
    }

    generateList() {
        let HTML = '';

        for (const item of this.data.list) {
            HTML += `<div class="item">
                        <img src="${this.data.imgPath + item.img}" alt="${item.alt}">
                        <div class="title">${item.title}</div>
                    </div>`;
        }

        return HTML;
    }

    generateFilter() {
        let HTML = '<div class="item active">All</div>';
        let allTags = [];
        let uniqueTags = [];

        // susirenkame visus tag'us
        for (const item of this.data.list) {
            allTags = [...allTags, ...item.tags];
        }

        // atfiltruojame tik unikalius
        for (const tag of allTags) {
            if (!uniqueTags.includes(tag)) {
                uniqueTags = [...uniqueTags, tag];
            }
        }

        for (const tag of uniqueTags) {
            HTML += `<div class="item">${tag}</div>`;
        }

        this.uniqueTags = ['all', ...uniqueTags];

        return HTML;
    }

    addEvents() {
        const filterItems = this.DOM.querySelectorAll('.filter > .item');

        filterItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                filterItems[this.activeFilterIndex].classList.remove('active');
                item.classList.add('active');
                this.activeFilterIndex = index;

                this.updateList(this.uniqueTags[index]);
            })
        });
    }

    updateList(tag) {
        for (let i = 0; i < this.data.list.length; i++) {
            const itemTags = this.data.list[i].tags;
            if (itemTags.includes(tag) || tag === 'all') {
                this.allGalleryItemsDOM[i].classList.remove('hidden');
            } else {
                this.allGalleryItemsDOM[i].classList.add('hidden');
            }
        }
    }
}

export { Gallery }