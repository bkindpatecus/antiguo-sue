

## Cartelera de Shows en Vivo

**Objetivo**: Agregar una sección de "Próximos Shows" debajo del carrusel de fotos actual, donde los visitantes puedan ver la programación de shows futuros con fecha, artista, hora y descripción.

### Diseño

Debajo del carrusel de fotos existente, agregar una lista/grilla de tarjetas con los próximos shows:

```text
┌─────────────────────────────────────────────┐
│         [Carrusel de fotos actual]           │
├─────────────────────────────────────────────┤
│           PRÓXIMOS SHOWS                     │
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │ 22 MAR  │  │ 29 MAR  │  │ 05 ABR  │     │
│  │ 21:00   │  │ 21:30   │  │ 20:00   │     │
│  │ Artista │  │ Artista │  │ Artista │     │
│  │ Género  │  │ Género  │  │ Género  │     │
│  └─────────┘  └─────────┘  └─────────┘     │
└─────────────────────────────────────────────┘
```

### Cambios

**1. Modificar `src/components/ShowsSection.tsx`**
- Agregar un array de datos `upcomingShows` con campos: `date`, `time`, `artist`, `genre`, `description`
- Por ahora con datos de ejemplo (placeholder) hasta que el cliente envíe la programación real
- Renderizar tarjetas debajo del carrusel en una grilla responsive (1 col mobile, 2-3 cols desktop)
- Cada tarjeta muestra: fecha destacada, hora, nombre del artista, género musical
- Al hacer click en una tarjeta, se expande un modal/acordeón con más detalles

**2. Estilo de las tarjetas**
- Fecha grande y destacada con el color primary
- Borde sutil, hover con elevación
- Consistente con el diseño rústico/elegante del sitio

### Datos de ejemplo (hasta que envíen los reales)

```ts
const upcomingShows = [
  { date: "22 Mar", day: "Sábado", time: "21:00", artist: "Por confirmar", genre: "Rock/Folk" },
  { date: "29 Mar", day: "Sábado", time: "21:00", artist: "Por confirmar", genre: "Música Latina" },
  { date: "05 Abr", day: "Sábado", time: "21:00", artist: "Por confirmar", genre: "Jazz & Blues" },
];
```

Cuando el cliente envíe la programación real, simplemente se reemplazan estos datos.

