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

Los mockups actuales son placeholders generados con CSS. Para integrar fotografía o renders reales, usa los identificadores `data-asset-slot` en las tarjetas de producto y reemplaza el contenido visual dentro de cada `.product-image`.
