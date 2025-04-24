---
id: "Explorar el DOM"
title: "Explorar y modificar el DOM"
sidebar_label: "Explorar el DOM"
---

Comprender cómo está estructurado el contenido de una página web es fundamental para cualquier desarrollador, diseñador o curioso del navegador. A través del DOM (Document Object Model), el Inspector te permite ver, modificar y experimentar con el contenido y la estructura de cualquier sitio en tiempo real.

## 🧭 Navegar por la estructura de la página

Cuando abres el Inspector (F12 o clic derecho → "Inspeccionar"), verás un árbol jerárquico. Cada nodo representa una etiqueta HTML, y puedes expandirlos o contraerlos para ver su contenido.

- **Sugerencia**: Usa la lupa 🔍 para seleccionar un elemento específico de la página, ideal para ubicar partes complejas rápidamente.

## 🛠️ Modificar contenido y estructura

Haz doble clic sobre cualquier etiqueta o atributo:
- Puedes **editar textos**, clases, ids, incluso insertar nuevas etiquetas.
- Usa el botón derecho sobre cualquier nodo para:
  - Eliminar (`Delete element`)
  - Duplicar (`Copy → OuterHTML / InnerHTML`)
  - Mover elementos (`Cut / Paste`)

### 🧪 Ejemplo práctico
1. Abre el sitio web de tu elección.
2. Selecciona un bloque de texto con el Inspector.
3. Modifica el contenido por uno personalizado.
4. Observa el cambio reflejado de inmediato.

> ⚠️ Los cambios son **temporales**. Si recargas la página, volverá a su estado original.

## 🔍 ¿Por qué es útil?

- Para aprender cómo otros diseñan sus sitios.
- Para probar posibles mejoras o rediseños.
- Para ver qué código genera ciertos efectos visuales o animaciones.

## 💡 Consejo extra

Prueba crear un nuevo `div` desde cero y aplicar estilos directamente desde la pestaña **Styles**. Es una forma rápida y efectiva de prototipar sin tocar el código original del sitio.
