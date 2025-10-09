# Carrusel del Equipo - Documentación

## 📸 Características del Carrusel

### Diseño Visual
- **Fotos prominentes**: Proporción 3:4 (más alta que ancha) para dar énfasis a las fotos
- **Tamaño de cards**: 320px de ancho cada una
- **Efecto hover**: 
  - Las imágenes hacen zoom (scale 110%) al pasar el mouse
  - Aparece un overlay con gradiente oscuro
  - Sombra más pronunciada en la card
  - Duración de transición: 700ms

### Animación del Carrusel
- **Movimiento continuo**: Las cards se desplazan de derecha a izquierda automáticamente
- **Efecto infinito**: El array del equipo se duplica para crear un loop seamless
- **Velocidad**: 40 segundos para completar un ciclo completo
- **Pausa al hover**: La animación se detiene cuando pasas el mouse sobre el carrusel
- **Suave y fluido**: Usa `linear` timing para movimiento constante

### Estructura de las Cards
```
┌─────────────────────┐
│                     │
│                     │
│      FOTO 3:4       │ ← Más alta, más énfasis
│                     │
│                     │
├─────────────────────┤
│  Nombre (xl, bold)  │
│  Rol (uppercase)    │
│  Descripción        │
└─────────────────────┘
```

### Código CSS Clave

**Animación infinita:**
```css
@keyframes scroll-infinite {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-scroll-infinite {
  animation: scroll-infinite 40s linear infinite;
}

.animate-scroll-infinite:hover {
  animation-play-state: paused;
}
```

**Por qué -50%:**
- Duplicamos el array: `[...team, ...team]`
- Cuando llegamos al 50% del contenedor, ya mostramos todos los items originales
- Volvemos al inicio sin que el usuario lo note (loop perfecto)

## 🎨 Personalización

### Ajustar velocidad
En `globals.css`, cambia el valor de la animación:
```css
animation: scroll-infinite 40s linear infinite;
                         ↑
                    Más tiempo = más lento
                    Menos tiempo = más rápido
```

### Cambiar tamaño de las cards
En `about-content.tsx`, modifica:
```tsx
className="flex-shrink-0 w-[320px] group"
                           ↑
                      Cambia el ancho aquí
```

### Ajustar proporción de la foto
Cambia `aspect-[3/4]` por:
- `aspect-square` - Cuadrado (1:1)
- `aspect-[4/5]` - Más alto
- `aspect-[2/3]` - Más vertical

### Modificar el gap entre cards
```tsx
<div className="flex gap-8 animate-scroll-infinite">
                      ↑
                Cambia el espaciado aquí
```

## 🔧 Cómo Funciona

1. **Duplicación del contenido**: 
   ```tsx
   {[...team, ...team].map((member, index) => ...)}
   ```
   Esto crea una copia exacta del equipo

2. **Contenedor flex sin wrap**:
   - Las cards se alinean horizontalmente
   - No hay salto de línea
   - El contenedor se desborda (overflow-hidden en el padre)

3. **Animación continua**:
   - Se mueve de 0% a -50% de su ancho
   - Al llegar al -50%, muestra exactamente lo mismo que al inicio
   - Se reinicia sin que se note el salto

4. **Interacción del usuario**:
   - Hover pausa la animación
   - Hover en una card específica hace zoom en la foto

## 📱 Responsive

El carrusel funciona en todos los tamaños de pantalla:
- **Mobile**: Se ve una card a la vez con parte de la siguiente
- **Tablet**: Se ven 2-3 cards
- **Desktop**: Se ven 3-4 cards simultáneamente

## 🎯 Mejoras Futuras (Opcionales)

Si quieres agregar más funcionalidades:

1. **Botones de navegación**: Agregar flechas para control manual
2. **Indicadores**: Puntos que muestren qué miembro estás viendo
3. **Velocidad variable**: Más rápido en mobile, más lento en desktop
4. **Autoplay toggle**: Botón para pausar/reanudar la animación
5. **Modal con más info**: Click en una card para ver detalles completos

## 🌟 Tips de Diseño

- Las fotos deben ser de alta calidad (mínimo 800x1000px)
- Usar fondos consistentes para las fotos del equipo
- Mantener el mismo estilo de iluminación
- Considerar usar fotos con poses similares para uniformidad
