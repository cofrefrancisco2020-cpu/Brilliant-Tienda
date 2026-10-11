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
- `script.js`: filtros del lookbook, carrusel de comunidad, menú móvil y enlaces de consulta.
- `brief-marca.md`: fuentes y decisiones de contenido.
- `assets/`: logo entregado y portadas reales descargadas desde publicaciones de la marca. No se usaron imágenes generadas con IA.

## Antes de usar un dominio definitivo

1. Confirmar con la tienda que los horarios y el número de WhatsApp siguen vigentes.
2. Confirmar tallas, colores y existencias; las fichas muestran lo publicado y envían a consulta.
3. Actualizar `og:image` a una URL absoluta del dominio final y añadir `canonical` cuando el dominio esté definido.
4. Revisar con la marca qué perfiles de seguidoras quiere mostrar públicamente en el carrusel. Los perfiles incluidos eran visibles en la lista de seguidores al preparar esta versión; seguir una cuenta no equivale a recomendar sus productos.

## Contacto y ubicación usados

- WhatsApp: +56 9 6355 0639.
- Dirección: Teniente Luis Uribe 305, local 4, Antofagasta, Chile.
- Horario: lunes 11:00–20:00; martes a sábado 11:00–21:00; domingo cerrado.

## Fuentes

Perfil y publicaciones: <https://www.instagram.com/brilliant_tienda/>. El detalle de los productos y sus enlaces individuales está en `brief-marca.md`. Dirección y contacto contrastados con <https://www.brillianttienda.com/politica-de-reembolso> y la captura de WhatsApp Business entregada por el usuario.
