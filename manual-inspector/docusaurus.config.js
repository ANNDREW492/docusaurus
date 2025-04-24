// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual del Inspector de elemento',
  tagline: 'Domina las herramientas de desarrollo del navegador',
  favicon: 'img/favicon.ico',

  url: 'http://localhost',
  baseUrl: '/',

  // Configuración básica
  organizationName: 'ANNDREW492', // Actualizado con tu usuario
  projectName: 'proyect_docusaurios', // Actualizado con tu repo

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  themeConfig: {
    image: 'img/logo-inspector.svg', // Imagen para redes sociales
    
    navbar: {
      title: 'Manual del Inspector',
      logo: {
        alt: 'Logo del Inspector',
        src: 'img/logo-inspector.svg', // Ruta actualizada a tu nuevo logo
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - Manual del Inspector.`,
    },
    
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['javascript', 'html', 'css'],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ANNDREW492/proyect_docusaurios/tree/main/manual-inspector',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;