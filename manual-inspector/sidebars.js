const sidebars = {
  // Eliminamos la generación automática y definimos manualmente:
  manualSidebar: [
    {
      type: 'doc',
      id: 'intro',          // Enlaza a intro.md (¡sin extensión!)
      label: 'Inicio',      // Texto que aparecerá en el menú
    },
    {
      type: 'category',
      label: 'Guía Práctica',  // Título de la categoría
      items: [
        'conceptos-basicos',
        'inspeccionar-elementos',
        'debug-css',
      ],
    },
    {
      type: 'doc',
      id: 'trucos-avanzados',
      label: 'Trucos Avanzados', 
    },
  ],
};

export default sidebars;
