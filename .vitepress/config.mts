import { defineConfig } from 'vitepress'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
    title: "Eventum",
    description: "Infrastructure-grade, security-first logging for Node.js powered by Rust.",
    cleanUrls: true,
    vite: {
        plugins: [
            sitemap({ 
                hostname: 'https://eventum.sh',
            })
        ]
    },
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/eventum-project/eventum/main/eventum-banner.png',
        siteTitle: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/what-is-eventum' },
            { text: 'API Reference', link: '/api/reference' },
            { text: 'Roadmap', link: '/guide/roadmap' }
        ],

        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'What is Eventum?', link: '/guide/what-is-eventum' },
                    { text: 'Installation', link: '/guide/installation' },
                    { text: 'Quick Start', link: '/guide/quick-start' },
                    { text: 'Advanced Usage', link: '/guide/advanced' },
                    { text: 'Roadmap', link: '/guide/roadmap' }
                ]
            },
            {
                text: 'API',
                items: [
                    { text: 'API Reference', link: '/api/reference' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/eventum-project/eventum' },
            { icon: 'npm', link: 'https://www.npmjs.com/package/eventum' }
        ],

        search: {
            provider: 'local'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © Dmytro Polhul'
        }
    }
})
