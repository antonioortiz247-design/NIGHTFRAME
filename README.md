# NIGHTFRAME México

Landing page premium para el lanzamiento real de **NIGHTFRAME** en México: `DROP_001 — NO SIGNAL`, una cápsula oversized inspirada en cine neo-noir, nostalgia VHS, transmisiones perdidas y atmósferas urbanas de medianoche.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

El proyecto está listo para Vercel. Importa el repositorio, conserva el preset de Next.js y utiliza:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: valor por defecto de Next.js

## Reemplazo de assets de campaña

Las siluetas CSS fueron retiradas. El sitio ya apunta a archivos `.webp` dentro de `public/images/drop001/`; solo sube tus imágenes con estos nombres:

- `public/images/drop001/campaign/hero.webp`
- `public/images/drop001/products/no-signal.webp`
- `public/images/drop001/products/static-memory.webp`
- `public/images/drop001/products/midnight-transmission.webp`
- `public/images/drop001/products/lost-frame.webp`
- `public/images/drop001/archive/archive-01.webp` a `archive-06.webp`

Consulta `public/images/drop001/README.md` para la guía completa de slots.


## Tipografía

La identidad editorial prioriza `Monumental` / `Monument Extended` para titulares, logo y jerarquía de marca. Por licencia, el repositorio usa `local()` y fallbacks seguros; si se cuenta con el archivo licenciado, puede añadirse al proyecto y declararse en `app/globals.css`.
