// @ts-check
const { themes } = require('prism-react-renderer');

// Configuración adaptable para local y producción
const isLocal = process.env.NODE_ENV !== 'production';
const siteUrl = isLocal ? 'http://localhost' : 'https://tudominio.com';
const baseUrl = isLocal ? '/' : '/docusaurus/'; // Ajusta '/docusaurus/' según tu subdirectorio en cPanel

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual del Inspector de elemento',
  tagline: 'Domina las herramientas de desarrollo del navegador',
  favicon: 'img/favicon.ico',

  // Configuración dinámica de URL
  url: siteUrl,
  baseUrl: baseUrl,

  // Configuración básica
  organizationName: 'ANNDREW492', // Actualizado con tu usuario GitHub
  projectName: 'proyect_docusaurios', // Actualizado con tu repo

  onBrokenLinks: isLocal ? 'warn' : 'throw', // Más estricto en producción
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  themeConfig: {
    navbar: {
      title: 'Manual del Inspector',
      logo: {
        alt: 'Logo del Inspector',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual',
        },
        // Opcional: añadir enlace a GitHub
        {
          href: 'https://github.com/ANNDREW492/proyect_docusaurios',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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

  // Configuración adicional para producción (opcional)
  ...(!isLocal && {
    plugins: [
      [
        '@docusaurus/plugin-sitemap',
        {
          changefreq: 'weekly',
          priority: 0.5,
        },
      ],
    ],
  }),
};

module.exports = config;