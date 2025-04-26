---
id: "Inspeccion"
title: "Inspeccionar Elementos"
sidebar_label: "Inspeccion"
---

## Seleccionar elementos
1. Haz clic en el ícono de selección (☑️) en la barra del inspector
2. Usa el atajo:
   - Windows/Linux: `Ctrl + Shift + C`
   - Mac: `Cmd + Opt + C`

## Modificar HTML en vivo
### Ejemplo básico:
```html
<div id="ejemplo">Texto original</div>
```

```javascript
// Ejecuta en la consola:
document.getElementById('ejemplo').textContent = 'Texto modificado!';
```

### Editar atributos:
```javascript
// Cambiar un atributo 'src' de imagen:
document.querySelector('img').src = 'nueva-imagen.jpg';
```

## Trabajar con eventos
### Listar event listeners:
```javascript
// Obtener eventos de un elemento:
getEventListeners(document.getElementById('boton'));
```

### Eliminar evento:
```javascript
// Remover un click listener:
document.getElementById('boton').removeEventListener('click', funcionHandler);
```

## Consejos profesionales
- Usa $0 en la consola para referirte al último elemento seleccionado
- Presiona Esc en el inspector para mostrar/ocultar la consola
- Doble clic en cualquier valor CSS para editarlo rápidamente