/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual del Inspector de Elementos',
  tagline: 'Domina las herramientas de desarrollo del navegador',
  favicon: 'favicon.ico',

  url: 'https://ANNDREW492.github.io', // URL base para el sitio
  baseUrl: '/docusaurus/', // Base URL para el sitio

  organizationName: 'ANNDREW492',
  projectName: 'proyect_docusaurios',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ANNDREW492/proyect_docusaurios/tree/master',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  themes: [],

  themeConfig: {
    navbar: {
      title: 'Manual del Inspector',
      logo: {
        alt: 'Logo Inspector',
        src: 'img/logo-inspector.svg',
      },
      items: [
        {
          href: 'https://github.com/ANNDREW492/proyect_docusaurios',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};

module.exports = config;
