---
id: "tips1"
title: Cómo descargar videos con el Inspector
sidebar_label: "tips1"
---

# Cómo descargar videos con el Inspector

Cuando los sitios web bloquean la descarga directa de videos, el Inspector de Elementos puede ser tu mejor aliado.

## 📹 Proceso detallado

1. **Activar el Inspector**:  
   Presiona `F12` o haz clic derecho → "Inspeccionar"

2. **Configurar el filtro**:  
   Ve a la pestaña **Red** → selecciona **Media** (solo para archivos multimedia)

3. **Reproducir el video**:  
   El video debe estar **reproduciéndose** para que aparezca en la lista

4. **Identificar el archivo**:  
   Busca extensiones como `.mp4`, `.webm` o `.m3u8`  
   Puedes ordenar por tamaño para encontrar el video principal

## 📌 Casos especiales

- **Videos en streaming**: Busca segmentos `.ts` o listas `.m3u8`
- **Videos protegidos**: Algunos utilizan DRM y no podrán descargarse fácilmente

## 🛠️ Herramientas complementarias

Para videos fragmentados:

1. Usa la extensión [**Video DownloadHelper**](https://www.downloadhelper.net/) para Firefox o Chrome
2. Para archivos HLS (`.m3u8`), considera utilizar el programa [**FFmpeg**](https://ffmpeg.org/)