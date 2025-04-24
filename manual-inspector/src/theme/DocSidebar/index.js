
console.log("✅ Custom DocSidebar cargado");
import React from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import {useLocation} from '@docusaurus/router';
import sidebarStyles from './styles.module.css';
const iconMap = {
  // Categorías
  'Inicio': '/sidebar/inicio.png',
  'Guía': '/sidebar/conceptos_basicos.png', // Puedes usar un ícono general aquí
  'Trucos': '/sidebar/iconotips.png',

  // Archivos individuales (según id o label)
  'conceptos-basicos': '/sidebar/conceptos_basicos.png',
  'inspeccionar-elementos': '/sidebar/inspeccionar_elemento.png',
  'Depurar CSS': '/sidebar/debug.png',
  'Explorar el DOM': '/sidebar/explorar_dom.png',
  'Animaciones CSS': '/sidebar/animaciones.png',

  // Trucos
  'tips1': '/sidebar/subtip.png',
  'tips2': '/sidebar/subtip.png',
  'tips3': '/sidebar/subtip.png',
  'tips4': '/sidebar/subtip.png',
  'tips5': '/sidebar/subtip.png',
};

function getItemLabel(item) {
  if (typeof item === 'string') {
    return item; // ID del documento
  }
  return item.label || item.id;
}


function CustomLabel({label}) {
  const iconSrc = iconMap[label] || null;
  console.log(label, iconSrc);
  return (
    <span className={sidebarStyles.labelWithIcon}>
      {iconSrc && (
        <img
          src={iconSrc}
          className={sidebarStyles.icon}
          alt={`${label} icon`}
        />
      )}
      {label}
    </span>
  );
}

export default function DocSidebar(props) {
  const location = useLocation();

  // Evita error si props.sidebar o props.sidebar.items es undefined
  if (!props.sidebar?.items) {
    return <OriginalDocSidebar {...props} />;
  }

  const patchedItems = props.sidebar.items.map((item) => {
    if (item.type === 'category') {
      return {
        ...item,
        label: <CustomLabel label={getItemLabel(item)} />,
        items: item.items.map((subItem) => ({
          ...subItem,
          label: <CustomLabel label={getItemLabel(subItem)} />,
        })),
      };
    }
  
    return {
      ...item,
      label: <CustomLabel label={getItemLabel(item)} />,
    };
  });
  

  return <OriginalDocSidebar {...props} sidebar={{...props.sidebar, items: patchedItems}} />;
}
