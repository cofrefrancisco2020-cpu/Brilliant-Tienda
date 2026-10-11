# Brilliant Tienda — versión 1

Sitio estático de boutique para Brilliant Tienda, Antofagasta. La web muestra prendas reales publicadas por la marca y lleva cada consulta a WhatsApp o Instagram. No tiene carrito ni procesa pagos.

## Abrir y publicar

- Vista local: abrir `index.html` o servir esta carpeta con `npx serve .`.
- GitHub: subir **el contenido de esta carpeta** a la raíz del repositorio.
- Vercel: importar ese repositorio. Framework Preset: **Other**; no se requiere build command ni variables de entorno.
- Todos los archivos de imagen están en `assets/`. No hay dependencias de instalación.

## Archivos

- `index.html`: contenido, metadatos y datos estructurados de la tienda.
- `styles.css`: diseño responsive, animaciones y adaptación a movimiento reducido.
- `script.js`: filtros del lookbook, galería de cada prenda, carrusel anónimo de comunidad, menú móvil y enlaces de consulta.
- `brief-marca.md`: fuentes y decisiones de contenido.
- `assets/`: logo entregado, portadas reales descargadas desde publicaciones de la marca y nueve vistas de estudio generadas a partir de esas prendas. Los detalles de estudio son referencias visuales, no fotografías verificadas del tejido.

## Mejoras de esta versión

- Cada uno de los ocho looks abre una galería con la foto original, prenda sola y dos acercamientos.
- La portada usa una composición editorial nueva del vestido azul; el bloque de brillo usa una vista de detalle para evitar repetir la misma foto de las tarjetas.
- El conjunto negro se nombra según la variante que aparece en su foto. La publicación original menciona también blanco, sujeto a confirmación con la tienda.
- El carrusel ahora reúne 20 fotos de perfil distintas antes de repetir el ciclo. Oculta los nombres de usuario y no enlaza a perfiles individuales; las fotos reciben un desenfoque visual suave.

## Antes de usar un dominio definitivo

1. Confirmar con la tienda que los horarios y el número de WhatsApp siguen vigentes.
2. Confirmar tallas, colores y existencias; las fichas muestran lo publicado y envían a consulta.
3. Actualizar `og:image` a una URL absoluta del dominio final y añadir `canonical` cuando el dominio esté definido.
4. Antes de publicar, revisar con la marca el uso de fotos de perfil de terceros. Estar visible entre seguidores no equivale a autorizar una aparición promocional; reemplazarlas por fotos autorizadas si corresponde.

## Contacto y ubicación usados

- WhatsApp: +56 9 6355 0639.
- Dirección: Teniente Luis Uribe 305, local 4, Antofagasta, Chile.
- Horario: lunes 11:00–20:00; martes a sábado 11:00–21:00; domingo cerrado.

## Fuentes

Perfil y publicaciones: <https://www.instagram.com/brilliant_tienda/>. El detalle de los productos y sus enlaces individuales está en `brief-marca.md`. Dirección y contacto contrastados con <https://www.brillianttienda.com/politica-de-reembolso> y la captura de WhatsApp Business entregada por el usuario.
