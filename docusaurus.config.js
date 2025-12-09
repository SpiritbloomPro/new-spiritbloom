// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spiritbloom.Pro',
  tagline: 'Level up your healing',
  favicon: 'img/Spiritbloom.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://new.spiritbloom.pro',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Harrek', // Usually your GitHub org/user name.
  projectName: 'new-spiritbloom', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n'
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs : false,
        blog: {
          showReadingTime: false,
          feedOptions: {},
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [
            require('./src/plugins/replace-wowhead-links.js'),
            require('./src/plugins/wowhead-talent-calc.js')
          ]
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      }),
    ],
  ],
  plugins: [
    path.resolve(__dirname, './src/plugins/docusaurus-wowhead-tooltips'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general',
        path: 'general',
        routeBasePath: 'general',
        sidebarPath: './sidebars.js',
        remarkPlugins: [
          require('./src/plugins/replace-wowhead-links.js'),
          require('./src/plugins/wowhead-talent-calc.js')
        ]
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'preservation',
        path: 'preservation',
        routeBasePath: 'preservation',
        sidebarPath: './sidebars.js',
        remarkPlugins: [
          require('./src/plugins/replace-wowhead-links.js'),
          require('./src/plugins/wowhead-talent-calc.js')
        ]
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'restoration-shaman',
        path: 'restoration-shaman',
        routeBasePath: 'restoration-shaman',
        sidebarPath: './sidebars.js',
        remarkPlugins: [
          require('./src/plugins/replace-wowhead-links.js'),
          require('./src/plugins/wowhead-talent-calc.js')
        ]
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'holy-paladin',
        path: 'holy-paladin',
        routeBasePath: 'holy-paladin',
        sidebarPath: './sidebars.js',
        remarkPlugins: [
          require('./src/plugins/replace-wowhead-links.js'),
          require('./src/plugins/wowhead-talent-calc.js')
        ]
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'holy-priest',
        path: 'holy-priest',
        routeBasePath: 'holy-priest',
        sidebarPath: './sidebars.js',
        remarkPlugins: [
          require('./src/plugins/replace-wowhead-links.js'),
          require('./src/plugins/wowhead-talent-calc.js')
        ]
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Spiritbloom.png',
      metadata: [
        {name: 'twitter:card', content: 'summary'},
        {name: 'og:site_name', content: 'Spiritbloom.Pro'}
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Spiritbloom.Pro',
        logo: {
          alt: 'SpiritbloomPro logo',
          src: 'img/Spiritbloom.png',
        },
        items: [
          /*{
            type: 'localeDropdown',
            position: 'left',
          },*/
          {
            to: '/general',
            label: 'General Healing',
            position: 'right',
            className: 'navbar-general'
          },
          {
            to: '/preservation',
            label: 'Preservation',
            position: 'right',
            className: 'navbar-preservation'
          },
          {
            to: '/holy-paladin',
            label: 'Holy Paladin',
            position: 'right',
            className: 'navbar-holy-paladin'
          },
          {
            to: '/restoration-shaman',
            label: 'Restoration Shaman',
            position: 'right',
            className: 'navbar-restoration-shaman'
          },
          {
            to: '/holy-priest',
            label: 'Holy Priest',
            position: 'right',
            className: 'navbar-holy-priest'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
            className: 'navbar-general'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Built by Harrek, powered by the SpiritbloomPro team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    scripts: []
};

export default config;
