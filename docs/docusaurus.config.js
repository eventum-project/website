// @ts-nocheck

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eventum',
  tagline: 'Flexible event generator',
  favicon: 'img/favicon.ico',

  url: 'https://eventum-project.github.io',
  baseUrl: '/Website/',

  organizationName: 'eventum-project',
  projectName: 'website',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Eventum',
        logo: {
          alt: 'Eventum Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'left',
            label: 'Getting started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'configuringSidebar',
            position: 'left',
            label: 'Configuring',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pluginsSidebar',
            position: 'left',
            label: 'Plugins',
          },
          {
            type: 'docSidebar',
            sidebarId: 'contentDesigningSidebar',
            position: 'left',
            label: 'Content designing',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            position: 'right',
            href: 'https://github.com/eventum-project',
            className: 'header-github-link',
            'aria-label': 'GitHub organization',
          },
        ],
      },
      footer: {
        copyright: `© Eventum, ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'csv',
          'json',
          'python',
          'regex',
          'yaml'
        ]
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
    themes: [
      [
        require.resolve('@easyops-cn/docusaurus-search-local'),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          hashed: true,
          indexPages: true,
          searchBarShortcut: false,
          removeDefaultStemmer: true,
          highlightSearchTermsOnTargetPage: true
        })
      ]
    ]
};

export default config;
