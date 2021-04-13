const headerData = {
    topText: {
        isVisible: true,
        content: [
            {
                type: 'link',
                href: '#',
                text: 'Now Hiring:'
            },
            {
                type: 'text',
                text: 'Are you a driven and motivated 1st Line IT Support Engineer?'
            },
        ]
    },
    logo: {
        imgPath: './img/',
        mobile: 'logo-mobile.png',
        default: 'logo.png',
    },
    nav: [
        {
            type: 'link',
            text: 'Home',
        },
        {
            type: 'link',
            text: 'Company',
        },
        {
            type: 'link',
            text: 'IT Solutions',
        },
        {
            type: 'link',
            text: 'Elements',
        },
        {
            type: 'link',
            text: 'Case Studies',
        },
        {
            type: 'link',
            text: 'Blog',
        },
    ],
    languages: {
        imgPath: './img/languages/',
        default: 'en',
        list: [
            {
                short: 'en',
                full: 'English',
                img: 'en.jpg',
            },
            {
                short: 'fr',
                full: 'Français',
                img: 'fr.jpg',
            },
            {
                short: 'de',
                full: 'Deutsch',
                img: 'de.jpg',
            },
        ]
    }
}

export { headerData }