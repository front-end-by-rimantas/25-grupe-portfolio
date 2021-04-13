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
        defaultLogo: 'logo-dark.png',
        alt: 'Logo',
    },
    nav: [
        {
            type: 'link',
            href: '#',
            text: 'Home',
        },
        {
            type: 'link',
            href: '#',
            text: 'Company',
        },
        {
            type: 'link',
            href: '#',
            text: 'IT Solutions',
        },
        {
            type: 'link',
            href: '#',
            text: 'Elements',
        },
        {
            type: 'link',
            href: '#',
            text: 'Case Studies',
        },
        {
            type: 'link',
            href: '#',
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