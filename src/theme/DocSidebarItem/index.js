import React from 'react';
import DefaultItem from '@theme-original/DocSidebarItem';
import styles from './styles.module.css';

const iconPaths = {
  'Inicio': '/sidebar/intro.png',
  'Guía': '/sidebar/inicio.png',
  'fundamentos': '/sidebar/conceptos_basicos.png',
  'Explorar el DOM': '/sidebar/explorar_dom.png',
  'Inspeccion': '/sidebar/inspeccionar_elemento.png',
  'Animaciones CSS': '/sidebar/animaciones.png',
  'Depurar CSS': '/sidebar/debug.png',
  'Trucos': '/sidebar/iconotips.png',
  'tips1': '/sidebar/subtip.png',
  'tips2': '/sidebar/subtip.png',
  'tips3': '/sidebar/subtip.png',
  'tips4': '/sidebar/subtip.png',
  'tips5': '/sidebar/subtip.png',
};

export default function DocSidebarItem(props) {
  const { item } = props;

  const label = item?.label;
  const icon = iconPaths[label];

  if (icon && label) {
    const newItem = {
      ...item,
      label: (
        <span className={styles.labelWithIcon}>
          <img src={icon} alt="" className={styles.icon} />
          {label}
        </span>
      ),
    };
    return <DefaultItem {...props} item={newItem} />;
  }

  return <DefaultItem {...props} />;
}
