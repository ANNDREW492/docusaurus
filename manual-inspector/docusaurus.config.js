import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual del Inspector de Elementos', // Cambiado
  tagline: 'Domina las herramientas de desarrollo del navegador', // Cambiado
  favicon: 'img/favicon.ico',

  // Configuración de URL (ajusta según tu dominio)
  url: 'https://tudominio.com',
  baseUrl: '/docusaurus/', // Asegúrate del slash final

  // Elimina las configuraciones de GitHub Pages si no las usas
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es', // Cambiado a español
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Elimina editUrl si no quieres enlaces de "editar esta página"
        },
        blog: false, // Desactiva el blog si no lo usas
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/inspector-social-card.jpg', // Cambia por tu imagen
    navbar: {
      title: 'Inspector de Elementos', // Cambiado
      logo: {
        alt: 'Logo del Inspector',
        src: 'img/logo-inspector.svg', // Cambia por tu logo
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar', // ¡Actualizado para coincidir con sidebars.js!
          position: 'left',
          label: 'Manual',
        },
        // Elimina el ítem del blog si no lo usas
        {
          href: 'https://github.com/tu-usuario/tu-repositorio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Recursos',
          items: [
            {
              label: 'Chrome DevTools Docs',
              href: 'https://developer.chrome.com/docs/devtools/',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/devtools',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Manual del Inspector.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['javascript', 'html', 'css'], // Añade lenguajes relevantes
    },
  },
};

export default config;