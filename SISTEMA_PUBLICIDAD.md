# Sistema de Publicidad - Banners

## 📁 Ubicación de los Banners

Coloca tus imágenes de banners en la carpeta `/public/banners/` con los nombres:
- `1.jpg`
- `2.jpg`
- `3.jpg`
- `4.jpg`
- `5.jpg`
- `6.jpg`
- `7.jpg`

## 📐 Tamaños Recomendados de Banners

### Banners Horizontales (Entre secciones)
**Tamaño estándar: 728x90 píxeles** (Leaderboard)
- Usado en la página de inicio entre secciones
- Formato: JPG o PNG
- Peso recomendado: < 150KB

### Banner Inferior Sticky
**Tamaño estándar: 728x90 píxeles** (Leaderboard)
- Aparece en la parte inferior de todas las páginas
- Se muestra después de 15 segundos
- Formato: JPG o PNG
- Peso recomendado: < 150KB

### Banners Laterales (Página de Comunidad)
**Tamaño estándar: 160x600 píxeles** (Wide Skyscraper)
- Usado a los lados de la página de comunidad
- Formato: JPG o PNG
- Peso recomendado: < 100KB

## ⚙️ Configuración de Rotación

### Banners Horizontales
- Cambian cada **10 segundos**
- Selección inicial aleatoria
- 7 banners disponibles en rotación

### Banner Inferior Sticky
- Aparece después de **15 segundos** de carga
- Cambia cada **10 segundos** después de aparecer
- Puede cerrarse con el botón X
- NO aparece en la página de comunidad

### Banners Laterales
- Cambian cada **10 segundos**
- Solo visibles en pantallas XL (≥1280px)
- Posición sticky (siguen el scroll)

## 🎨 Ajustes de Diseño

### Modificar Márgenes de la Página de Inicio
En `app/page.tsx`, busca el comentario:
```tsx
{/* MÁRGENES LATERALES: Ajusta el valor px-[14%] según necesites para pruebas */}
<main className="md:ml-20 pt-16 px-[14%]">
```
Cambia el valor `14%` al porcentaje deseado.

### Modificar Tiempos de Rotación

**Para banners horizontales y laterales:**
En los componentes, busca:
```typescript
}, 10000) // 10 segundos
```
Cambia `10000` al número de milisegundos deseado (ej: 15000 = 15 segundos)

**Para el banner sticky:**
- Tiempo de aparición: Busca `15000` en `sticky-bottom-ad.tsx`
- Tiempo de rotación: Busca `10000` en el mismo archivo

## 📊 Componentes Creados

1. **AdBanner** (`components/ad-banner.tsx`)
   - Banners horizontales entre secciones
   - Tamaño: 728x90

2. **StickyBottomAd** (`components/sticky-bottom-ad.tsx`)
   - Banner inferior fijo
   - Aparece a los 15 segundos
   - Se puede cerrar

3. **SideAdBanner** (`components/side-ad-banner.tsx`)
   - Banners verticales laterales
   - Tamaño: 160x600
   - Solo en página de comunidad

## 🚀 Implementación

Los banners están integrados en:
- ✅ Página de inicio (`app/page.tsx`) - 4 banners horizontales + sticky
- ✅ Todas las páginas (`app/client-layout.tsx`) - sticky inferior
- ✅ Página de comunidad (`app/comunidad/page.tsx`) - banners laterales (sin sticky)

## 💡 Notas Importantes

1. **Fallback**: Si una imagen no existe, se muestra un placeholder "Espacio Publicitario"
2. **Responsive**: Los banners laterales solo se muestran en pantallas grandes (XL)
3. **Performance**: Las imágenes se cargan con lazy loading implícito
4. **SEO**: Todos los banners tienen etiquetas "Ad" para transparencia

## 🎯 Monetización Simulada

Este sistema simula la integración con plataformas como Google AdSense:
- Rotación automática de creatividades
- Posicionamiento estratégico entre contenido
- Banner sticky no intrusivo
- Banners laterales en páginas con espacio
- Indicadores claros de publicidad ("Ad" / "Anuncio")
