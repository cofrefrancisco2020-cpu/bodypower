# Body Power — versión 1

Web estática responsive para Body Power, Huechuraba. Lista para subir a GitHub y desplegar en Vercel.

## Abrir y publicar

- Vista rápida: abre `index.html` en un navegador. Para desarrollo también puedes servir esta carpeta con cualquier servidor estático local.
- GitHub: sube **el contenido de `version 1`** a la raíz de un repositorio. `index.html` debe quedar en la raíz del repositorio.
- Vercel: importa ese repositorio, selecciona **Other** como framework y deja vacío el comando de build y el directorio de salida. La raíz del proyecto debe ser la carpeta que contiene `index.html`.

No requiere instalación de dependencias ni API. Los enlaces de contacto abren WhatsApp; no hay formulario ni backend. El mapa de Google y las fuentes de Google requieren conexión a Internet. La tipografía tiene alternativas locales si no cargan las fuentes.

## Archivos

- `index.html`: estructura, contenido, metadatos y datos estructurados.
- `styles.css`: diseño responsive y animaciones.
- `script.js`: menú móvil, barra de progreso, selector de objetivos, datos interactivos y aparición al hacer scroll.
- `assets/`: únicamente imágenes usadas por la página, sin subcarpetas.
- `brief-marca.md`: fuentes, decisiones visuales y límites de la investigación.

## Imágenes

`logo-bpower-oficial.jpg` se obtuvo del perfil público de Instagram de Body Power. `entrenamiento-real-1.jpg`, `entrenamiento-real-mejorado.png` y `entrenamiento-real-3.webp` provienen de fotogramas/fotos publicados por la cuenta y se muestran en la sección «Personas reales». La foto mejorada recibió ajuste de luz, nitidez y color con IA, conservando a las personas, el ejercicio y el espacio.

`hero-entrenamiento-personalizado.png`, `coach-personal.png` y `evaluacion-corporal.png` fueron generadas con IA para ambientar la web. No representan al local, al equipo ni a clientes reales de Body Power. Esta distinción se documenta en `brief-marca.md`.

## Antes de publicar con dominio propio

Confirma con Body Power los servicios vigentes, el teléfono y las condiciones de la clase de prueba. Cuando exista un dominio definitivo, añade la URL canónica absoluta, actualiza la imagen social a URL absoluta y crea `robots.txt`/`sitemap.xml` con ese dominio. No se publicaron precios, promociones ni horarios que puedan haber cambiado.
