import React from 'react';
import DefaultItem from '@theme-original/DocSidebarItem';
import styles from './styles.module.css';

const iconPaths = {
  'Inicio': '${baseUrl}/sidebar/intro.png',
  'Guía': '${baseUrl}/sidebar/inicio.png',
  'fundamentos': '${baseUrl}/sidebar/conceptos_basicos.png',
  'Explorar el DOM': '${baseUrl}/sidebar/explorar_dom.png',
  'Inspeccion': '${baseUrl}/sidebar/inspeccionar_elemento.png',
  'Animaciones CSS': '${baseUrl}/sidebar/animaciones.png',
  'Depurar CSS': '${baseUrl}/sidebar/debug.png',
  'Trucos': '${baseUrl}/sidebar/iconotips.png',
  'tips1': '${baseUrl}/sidebar/subtip.png',
  'tips2': '${baseUrl}/sidebar/subtip.png',
  'tips3': '${baseUrl}/sidebar/subtip.png',
  'tips4': '${baseUrl}/sidebar/subtip.png',
  'tips5': '${baseUrl}/sidebar/subtip.png',
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
