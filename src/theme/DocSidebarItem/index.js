import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import DefaultItem from '@theme-original/DocSidebarItem';
import styles from './styles.module.css';

export default function DocSidebarItem(props) {
  const { item } = props;
  const label = item?.label;

  const iconPaths = {
    'Inicio': useBaseUrl('/sidebar/intro.png'),
    'Guía': useBaseUrl('/sidebar/inicio.png'),
    'Conceptos básicos': useBaseUrl('/sidebar/conceptos_basicos.png'),
    'Explorar el DOM': useBaseUrl('/sidebar/explorar_dom.png'),
    'Inspeccionar Elemento': useBaseUrl('/sidebar/inspeccionar_elemento.png'),
    'Animaciones CSS': useBaseUrl('/sidebar/animaciones.png'),
    'Depurar CSS': useBaseUrl('/sidebar/debug.png'),
    'Trucos': useBaseUrl('/sidebar/iconotips.png'),
    'tips1': useBaseUrl('/sidebar/subtip.png'),
    'tips2': useBaseUrl('/sidebar/subtip.png'),
    'tips3': useBaseUrl('/sidebar/subtip.png'),
    'tips4': useBaseUrl('/sidebar/subtip.png'),
    'tips5': useBaseUrl('/sidebar/subtip.png'),
  };

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
