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
            type: 'text',
            href: '#',
            text: 'Home',
            submenu: [
                { type: 'link', href: '#', text: 'Infotechno' },
                { type: 'link', href: '#', text: 'Processing' },
                {
                    type: 'link', href: '#', text: 'Appointment',
                    submenu: [
                        { type: 'link', href: '#', text: 'Infotechno' },
                        {
                            type: 'link', href: '#', text: 'Processing',
                            submenu: [
                                { type: 'link', href: '#', text: 'Infotechno' },
                                { type: 'link', href: '#', text: 'Processing' },
                                {
                                    type: 'link', href: '#', text: 'Appointment',
                                    submenu: [
                                        { type: 'link', href: '#', text: 'Infotechno' },
                                        { type: 'link', href: '#', text: 'Processing' },
                                        {
                                            type: 'link', href: '#', text: 'Appointment',
                                            submenu: [
                                                { type: 'link', href: '#', text: 'Infotechno' },
                                                { type: 'link', href: '#', text: 'Processing' },
                                                {
                                                    type: 'link', href: '#', text: 'Appointment',
                                                    submenu: [
                                                        { type: 'link', href: '#', text: 'Infotechno' },
                                                        { type: 'link', href: '#', text: 'Processing' },
                                                        { type: 'link', href: '#', text: 'Appointment' },
                                                    ],
                                                    submenuDirection: 'left',
                                                },
                                            ],
                                            submenuDirection: 'left',
                                        },
                                    ],
                                    submenuDirection: 'right',
                                },
                            ],
                            submenuDirection: 'right',
                        },
                        { type: 'link', href: '#', text: 'Appointment' },
                    ],
                    submenuDirection: 'right',
                },
                { type: 'link', href: '#', text: 'Services' },
                { type: 'link', href: '#', text: 'Resolutions' },
                {
                    type: 'link', href: '#', text: 'Cybersecurity',
                    submenu: [
                        { type: 'link', href: '#', text: 'Infotechno' },
                        { type: 'link', href: '#', text: 'Processing' },
                        { type: 'link', href: '#', text: 'Appointment' },
                    ],
                    submenuDirection: 'left',
                },
                { type: 'link', href: '#', text: 'Modern IT Company' },
                { type: 'link', href: '#', text: 'Machine Learning' },
                { type: 'link', href: '#', text: 'Software Innovation' },
            ],
            submenuDirection: 'bottom',
        },
        {
            type: 'link',
            href: '#',
            text: 'Company',
            submenu: [
                { type: 'link', href: '#', text: 'About us' },
                { type: 'link', href: '#', text: 'Contact us' },
                { type: 'link', href: '#', text: 'Leadership' },
                { type: 'link', href: '#', text: 'Why choose us' },
                { type: 'link', href: '#', text: 'Our history' },
                { type: 'link', href: '#', text: 'FAQs' },
                { type: 'link', href: '#', text: 'Careers' },
                { type: 'link', href: '#', text: 'Pricing plans' },
            ],
            submenuDirection: 'bottom',
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
        defaultLang: 'en',
        list: {
            en: {
                full: 'English',
                img: 'en.png',
            },
            fr: {
                full: 'Français',
                img: 'fr.png',
            },
            de: {
                full: 'Deutsch',
                img: 'de.png',
            },
        }
    }
}

export { headerData }