---
id: "Depurar CSS"
title: "Depurar CSS"
sidebar_label: "debug-css"
---

# 🧪 Depuración de estilos CSS

Explora cómo identificar y corregir errores de diseño directamente desde el navegador.

## 🎨 Editar estilos en tiempo real

1. Abre el Inspector de Elementos (`F12` o clic derecho → "Inspeccionar").
2. Selecciona el elemento que quieras modificar.
3. En la pestaña **Styles**:
   - Marca o desmarca reglas CSS para ver su efecto.
   - Agrega nuevas propiedades desde el botón `+`.
   - Cambia valores directamente en el panel y observa los cambios en vivo.

> 💡 **Tip**: También puedes probar con pseudoclases como `:hover`, `:active` y `:focus` desde la misma pestaña.

## 📊 Modelo de caja (Box Model)

Visualiza cómo se compone un elemento y ajusta su espaciado:

- Ve a la pestaña **Computed**.
- Desplázate hacia abajo hasta encontrar la representación del modelo de caja.
- Verás claramente los márgenes (`margin`), bordes (`border`), relleno (`padding`) y contenido (`content`).

## 🧩 Depurar estilos heredados

- Usa el checkbox “Show all” para ver también estilos no aplicados.
- Los estilos tachados indican reglas sobreescritas por otras más específicas.

---

Ahora que este está listo, ¿quieres que pasemos a trabajar en el primero de los dos nuevos documentos que continuarían esta parte de la guía? Por ejemplo podríamos hacer:

- **debug-layout.md**: Para aprender a corregir errores de alineación, grid o flexbox.
- **debug-responsive.md**: Para abordar temas de diseño responsivo y breakpoints.

