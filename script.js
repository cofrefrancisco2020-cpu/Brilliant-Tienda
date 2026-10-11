const PHONE = '56963550639';
const products = [
  {title:'Conjunto negro con peplum',category:'fiesta',label:'Nuevo ingreso',image:'conjunto-negro.jpg',detail:'detalle-conjunto-negro.webp',alt:'Conjunto negro modelado frente a Brilliant Tienda',size:'Talla estándar publicada',description:'Top halter con peplum y pantalón amplio para ocasiones especiales. Consulta por otros colores.',post:'https://www.instagram.com/brilliant_tienda/reel/DeUIMLoRJCh/'},
  {title:'Falda brillo burdeos',category:'fiesta',label:'Look de noche',image:'falda-burdeos.jpg',detail:'detalle-falda-burdeos.webp',alt:'Falda burdeos con brillo, body negro y botas',size:'Consultar',description:'Una falda con brillo burdeos para un look de noche con personalidad.',post:'https://www.instagram.com/brilliant_tienda/p/DePe4ulkZ2n/'},
  {title:'Vestido azul marino',category:'fiesta',label:'Gala',image:'vestido-azul-marino.jpg',detail:'detalle-vestido-azul.webp',alt:'Vestido largo azul marino en la entrada de la boutique',size:'Consultar',description:'Vestido largo de cuello halter con drapeado y abertura frontal.',post:'https://www.instagram.com/brilliant_tienda/reel/DePXnG1RYiC/'},
  {title:'Enterito palazzo',category:'fiesta',label:'Confección Brasil',image:'enterito-palazzo.jpg',detail:'detalle-enterito-palazzo.webp',alt:'Enterito palazzo negro modelado frente a la tienda',size:'Talla única · color negro',description:'Enterito negro de piernas amplias para una silueta elegante.',post:'https://www.instagram.com/brilliant_tienda/reel/Dd65JmQRCMN/'},
  {title:'Falda short & body',category:'tendencia',label:'Tendencia',image:'falda-short.jpg',detail:'detalle-falda-short.webp',alt:'Falda short y body café modelados dentro de la boutique',size:'Falda short S · M · L',description:'Falda short café y body de transparencias; consulta otras variantes.',post:'https://www.instagram.com/brilliant_tienda/reel/DdXXNMMRrDi/'},
  {title:'Cuerina con flecos',category:'tendencia',label:'Nuevo ingreso',image:'cuerina-flecos.jpg',detail:'detalle-cuerina-flecos.webp',alt:'Falda de cuerina con flecos y top negro frente a Brilliant Tienda',size:'Consultar',description:'Top y falda de efecto cuerina con flecos que dan movimiento.',post:'https://www.instagram.com/brilliant_tienda/p/DdufMsnkTRy/'},
  {title:'Jeans baggy',category:'denim',label:'Denim',image:'jeans-baggy.jpg',detail:'detalle-jeans-baggy.webp',alt:'Jeans baggy azul con top blanco',size:'36 a 46',description:'Denim azul claro de calce relajado y terminación angosta.',post:'https://www.instagram.com/brilliant_tienda/reel/DdZHQB2RjKX/'},
  {title:'Jeans con bucito',category:'denim',label:'Nuevo ingreso',image:'jeans-buzito.jpg',detail:'detalle-jeans-buzito.webp',alt:'Jeans azul modelado con top en Brilliant Tienda',size:'36 · 38 · 40',description:'Jeans azul con cintura elástica gris y cordón ajustable.',post:'https://www.instagram.com/brilliant_tienda/reel/DeKGAxzR4zh/'}
];

const communityMessages = [
  'Brillo propio','Estilo de todos los días','Looks que inspiran','Modo fiesta','Siempre auténticas','Un toque de brillo',
  'Moda con actitud','Crear nuevos looks','Elegancia a tu manera','Denim con personalidad','Nuevos comienzos','Elige tu estilo',
  'Momentos especiales','Detalles que encantan','Para cada ocasión','Vive Brilliant','Encuentra tu look','Seguimos brillando',
  'Brillar a tu manera','Moda para nosotras'
];

const productGrid = document.getElementById('productGrid');
const availabilityMessage = (name) => `Hola Brilliant, vi el look ${name} en su web. ¿Me pueden confirmar tallas, colores y disponibilidad?`;
productGrid.innerHTML = products.map((product, index) => `
  <article class="product-card reveal" data-category="${product.category}" style="transition-delay:${(index % 4) * 65}ms">
    <div class="product-photo"><img src="./assets/${product.image}" alt="${product.alt}" width="720" height="960" loading="lazy"><span class="product-tag">${product.label}</span><button class="product-open" type="button" data-product="${index}" aria-label="Ver fotos y detalles de ${product.title}">Ver fotos y detalles <span aria-hidden="true">↗</span></button></div>
    <div class="product-info"><span class="product-meta">Brilliant Tienda · Antofagasta</span><h3>${product.title}</h3><p>${product.size}<br>${product.description}</p>
      <div class="product-actions"><button type="button" class="product-details" data-product="${index}">Ver prenda y detalles ↗</button><a href="https://wa.me/${PHONE}?text=${encodeURIComponent(availabilityMessage(product.title))}" target="_blank" rel="noopener noreferrer" aria-label="Consultar disponibilidad de ${product.title} por WhatsApp">Consultar ↗</a></div>
    </div>
  </article>`).join('');

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const chosen = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {item.classList.toggle('is-active',item===button);item.setAttribute('aria-pressed',String(item===button));});
  document.querySelectorAll('.product-card').forEach(card => {card.hidden = chosen !== 'todos' && card.dataset.category !== chosen;});
}));

const productDialog = document.getElementById('productDialog');
const galleryStage = document.getElementById('galleryStage');
const galleryCrop = document.getElementById('galleryCrop');
const galleryBadge = document.getElementById('galleryBadge');
const galleryButtons = [...document.querySelectorAll('.gallery-control')];
let activeProduct = null;
let returnFocus = null;
const viewNames = {look:'Foto de la boutique',garment:'Prenda sola',finish:'Acercamiento del acabado',texture:'Acercamiento de la textura'};

function setGalleryView(view) {
  if (!activeProduct || !viewNames[view]) return;
  galleryStage.dataset.view = view;
  galleryBadge.textContent = viewNames[view];
  galleryCrop.setAttribute('aria-label', `${viewNames[view]}: ${activeProduct.title}`);
  galleryButtons.forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function openProduct(index, trigger) {
  const product = products[index];
  if (!product) return;
  activeProduct = product;
  returnFocus = trigger;
  document.getElementById('dialogTitle').textContent = product.title;
  document.getElementById('dialogDescription').textContent = product.description;
  document.getElementById('dialogSize').textContent = product.size;
  const original = document.getElementById('galleryLook');
  original.src = `./assets/${product.image}`;
  original.alt = product.alt;
  galleryCrop.style.backgroundImage = `url("./assets/${product.detail}")`;
  document.getElementById('dialogWhatsapp').href = `https://wa.me/${PHONE}?text=${encodeURIComponent(availabilityMessage(product.title))}`;
  document.getElementById('dialogInstagram').href = product.post;
  setGalleryView('look');
  productDialog.showModal();
}

document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => openProduct(Number(button.dataset.product), button)));
galleryButtons.forEach(button => button.addEventListener('click', () => setGalleryView(button.dataset.view)));
document.getElementById('dialogClose').addEventListener('click', () => productDialog.close());
productDialog.addEventListener('click', event => {if (event.target === productDialog) productDialog.close();});
productDialog.addEventListener('close', () => {activeProduct = null; returnFocus?.focus();});

const communityCard = (message, index) => `<div class="community-item"><span class="community-avatar" aria-hidden="true"><img src="./assets/comunidad-${String(index + 1).padStart(2, '0')}.jpg" alt="" width="76" height="76" loading="lazy"></span><strong>Comunidad Brilliant</strong><span>${message}</span></div>`;
document.getElementById('marqueeTrack').innerHTML = `<div class="marquee-group">${communityMessages.map(communityCard).join('')}</div><div class="marquee-group" aria-hidden="true">${communityMessages.map(communityCard).join('')}</div>`;

const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');
const closeMenu = () => {nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');};
menuButton.addEventListener('click', () => {const open = nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown', event => {if(event.key==='Escape') closeMenu();});
document.addEventListener('click', event => {if(!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}}), {threshold:.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));

document.getElementById('year').textContent = new Date().getFullYear();
