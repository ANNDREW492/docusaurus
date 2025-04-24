---
title: "Trucos Avanzados"
sidebar_label: "Trucos"
---

## 💡 Funciones poco conocidas

### 1. Referencia rápida al último elemento
```javascript
$0  // En la consola, referencia al último elemento seleccionado
```

### 2. Breakpoints en atributos DOM
1. Haz clic derecho en un elemento → **Break on** → "Attribute modifications"

### 3. Copiar estilos entre elementos
```javascript
const estilo = getComputedStyle($0);
$1.style.cssText = estilo.cssText;  // $1 = otro elemento
```

### 4. Editar cualquier elemento como HTML
```javascript
// En la consola:
document.designMode = 'on';  // Activa el modo edición en toda la página
```

### 5. Simular dispositivos móviles
- Usa el atajo `Ctrl + Shift + M` (Windows) o `Cmd + Opt + M` (Mac) en el inspector

### 6. Monitorizar eventos
```javascript
// Monitorea todos los clicks en la página:
monitorEvents(document, 'click');
// Detener monitorización:
unmonitorEvents(document);
```

## 🔥 Trucos de productividad
- **Forzar estado :hover**: Haz clic derecho en un elemento → "Force state" → :hover
- **Buscar en todos los archivos**: `Ctrl + Shift + F` en el inspector
- **Capturar screenshot**: `Ctrl + Shift + P` → escribir "screenshot"