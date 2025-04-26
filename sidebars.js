module.exports = {
  manualSidebar: [
    {
      type: 'doc',
      id: 'Inicio',
      label: 'Inicio', // Coincide con 'Inicio' en iconPaths
      className: 'fa fa-home',
    },
    {
      type: 'category',
      label: 'Guía', // ok
      items: [
        'fundamentos', 
        'Inspeccion',
        'Depurar CSS',
        'Explorar el DOM',
        'Animaciones CSS',
      ],
    },
    {
      type: 'category',
      label: 'Trucos', // Coincide con 'Trucos' en iconPaths
      items: [
        'tips1', 
        'tips2',
        'tips3',
        'tips4',
        'tips5',
      ],
    },
  ],
};