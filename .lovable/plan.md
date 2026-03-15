

## Actualizar sección "About" con texto real del cliente

### Cambios en `src/components/AboutSection.tsx`

**Reemplazar el contenido actual** con:

- **Título**: "Somos Antiguo Sueño" (en lugar de "El Restaurante")
- **Subtítulo**: Mantener "Conócenos"
- **Párrafo resumen visible**: Texto condensado con la esencia — origen como tienda de antigüedades (año 2000), ahora restorán familiar en el Cajón del Maipo, gastronomía casera, música en vivo desde el camión escenario.
- **Botón "Leer más"**: Al hacer click, expande el texto completo del cliente con un `useState` toggle.
- **Texto expandido**: El contenido completo incluyendo la nota sobre mascotas.
- **Nota mascotas**: Bloque destacado visual (icono de mascota + texto) al final del texto expandido.

### Estructura visual

```text
        Conócenos
   SOMOS ANTIGUO SUEÑO
   ─────────────────

  [Párrafo resumen 3-4 líneas]
  
     [ Leer más ▼ ]
  
  ── si expandido ──
  [Texto completo en 2-3 párrafos]
  [🐾 Nota sobre mascotas destacada]
     [ Leer menos ▲ ]

  [Foto exterior]  [Foto interior]
  
  [4 tarjetas de features]
```

Los features existentes (Ambiente Familiar, Música en Vivo, etc.) se mantienen igual. Solo cambia el bloque de texto superior.

