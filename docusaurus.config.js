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
    locales: ['en', 'es', 'ko'],
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
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general',
        path: 'general',
        routeBasePath: 'general',
        sidebarPath: './sidebars.js'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'preservation',
        path: 'preservation',
        routeBasePath: 'preservation',
        sidebarPath: './sidebars.js',
        remarkPlugins: [require('./src/plugins/replace-wowhead-links.js')]
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'restoration-shaman',
        path: 'restoration-shaman',
        routeBasePath: 'restoration-shaman',
        sidebarPath: './sidebars.js'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'holy-paladin',
        path: 'holy-paladin',
        routeBasePath: 'holy-paladin',
        sidebarPath: './sidebars.js'
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
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
            position: 'right'
          },
          {
            to: '/preservation',
            label: 'Preservation',
            position: 'right'
          },
          {
            to: '/restoration-shaman',
            label: 'Restoration Shaman',
            position: 'right'
          },
          {
            to: '/holy-paladin',
            label: 'Holy Paladin',
            position: 'right'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.spiritbloom.pro',
              },
              {
                label: 'Authors',
                href: '/blog/authors',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spiritbloom.Pro. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    scripts: [
      '/js/wowhead-tooltips.js',
		  'https://wow.zamimg.com/js/tooltips.js'
    ]
};

export default config;
