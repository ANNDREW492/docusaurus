/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual del Inspector de Elementos',
  tagline: 'Domina las herramientas de desarrollo del navegador',
  favicon: 'img/favicon.ico',

  url: 'https://ANNDREW492.github.io', // URL base para el sitio
  baseUrl: '/proyect_docusaurios/', // Base URL para el sitio

  
  // Configuración básica
  organizationName: 'ANNDREW492', // Tu usuario de GitHub
  projectName: 'proyect_docusaurios', // Nombre de tu repositorio

  // Configuración de la barra lateral
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Ruta al archivo de la barra lateral
          editUrl: 'https://github.com/ANNDREW492/proyect_docusaurios/tree/main/docs/', // URL para editar documentos
        },
        blog: false, // Si no estás usando un blog, puedes desactivarlo
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Ruta a tu CSS personalizado
        },
      },
    ],
  ],

  // Opciones adicionales
  onBrokenLinks: 'warn', // Comportamiento al encontrar enlaces rotos
  onBrokenMarkdownLinks: 'warn', // Comportamiento al encontrar enlaces rotos en Markdown
  themes: [], // Puedes agregar temas adicionales aquí si es necesario
};

module.exports = config;