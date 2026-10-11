const PHONE = '56963550639';
const products = [
  {title:'Conjunto negro & blanco',category:'fiesta',label:'Nuevo ingreso',image:'conjunto-negro-blanco.jpg',alt:'Conjunto negro modelado frente a Brilliant Tienda',size:'Talla estándar publicada',description:'Un conjunto de silueta elegante para ocasiones especiales.',post:'https://www.instagram.com/brilliant_tienda/reel/DeUIMLoRJCh/'},
  {title:'Falda brillo burdeos',category:'fiesta',label:'Look de noche',image:'falda-burdeos.jpg',alt:'Falda burdeos con brillo, body negro y botas',size:'Tallas: consultar',description:'Brillo burdeos, body negro y mucha personalidad.',post:'https://www.instagram.com/brilliant_tienda/p/DePe4ulkZ2n/'},
  {title:'Vestido azul marino',category:'fiesta',label:'Gala',image:'vestido-azul-marino.jpg',alt:'Vestido largo azul marino en la entrada de la boutique',size:'Tallas: consultar',description:'Para matrimonios, cenas y celebraciones especiales.',post:'https://www.instagram.com/brilliant_tienda/reel/DePXnG1RYiC/'},
  {title:'Enterito palazzo',category:'fiesta',label:'Confección Brasil',image:'enterito-palazzo.jpg',alt:'Enterito palazzo negro modelado frente a la tienda',size:'Talla única · color negro',description:'Una pieza protagonista con caída amplia y elegante.',post:'https://www.instagram.com/brilliant_tienda/reel/Dd65JmQRCMN/'},
  {title:'Falda short & body',category:'tendencia',label:'Tendencia',image:'falda-short.jpg',alt:'Falda short y body café modelados dentro de la boutique',size:'Falda short S · M · L',description:'Falda short también publicada en negro; body estándar.',post:'https://www.instagram.com/brilliant_tienda/reel/DdXXNMMRrDi/'},
  {title:'Cuerina con flecos',category:'tendencia',label:'Nuevo ingreso',image:'cuerina-flecos.jpg',alt:'Falda de cuerina con flecos y top negro frente a Brilliant Tienda',size:'Tallas: consultar',description:'El detalle de flecos que transforma todo el look.',post:'https://www.instagram.com/brilliant_tienda/p/DdufMsnkTRy/'},
  {title:'Jeans baggy',category:'denim',label:'Denim',image:'jeans-baggy.jpg',alt:'Jeans baggy azul con top blanco',size:'Tallas publicadas: 36 a 46',description:'Denim de calce relajado para llevar a tu estilo.',post:'https://www.instagram.com/brilliant_tienda/reel/DdZHQB2RjKX/'},
  {title:'Jeans con bucito',category:'denim',label:'Nuevo ingreso',image:'jeans-buzito.jpg',alt:'Jeans azul modelado con top en Brilliant Tienda',size:'Tallas publicadas: 36 · 38 · 40',description:'Un look cómodo y con actitud para cualquier día.',post:'https://www.instagram.com/brilliant_tienda/reel/DeKGAxzR4zh/'}
];

const followers = [
  {name:'@monica22_quin',image:'comunidad-monica.jpg',url:'https://www.instagram.com/monica22_quin/'},
  {name:'@claudia.lybrochet',image:'comunidad-claudia.jpg',url:'https://www.instagram.com/claudia.lybrochet/'},
  {name:'@javiera.alaniz.m',image:'comunidad-javiera.jpg',url:'https://www.instagram.com/javiera.alaniz.m/'},
  {name:'@cgc_belen',image:'comunidad-belen.jpg',url:'https://www.instagram.com/cgc_belen/'},
  {name:'@barbaraabaeza_',image:'comunidad-barbara.jpg',url:'https://www.instagram.com/barbaraabaeza_/'},
  {name:'@isii_1503',image:'comunidad-isidora.jpg',url:'https://www.instagram.com/isii_1503/'}
];

const productGrid = document.getElementById('productGrid');
const availabilityMessage = (name) => `Hola Brilliant, vi el look ${name} en su web. ¿Me pueden confirmar tallas, colores y disponibilidad?`;
productGrid.innerHTML = products.map((product, index) => `
  <article class="product-card reveal" data-category="${product.category}" style="transition-delay:${(index % 4) * 65}ms">
    <div class="product-photo"><img src="./assets/${product.image}" alt="${product.alt}" width="720" height="960" loading="lazy"><span class="product-tag">${product.label}</span></div>
    <div class="product-info"><span class="product-meta">Brilliant Tienda · Antofagasta</span><h3>${product.title}</h3><p>${product.size}<br>${product.description}</p>
      <div class="product-actions"><a href="https://wa.me/${PHONE}?text=${encodeURIComponent(availabilityMessage(product.title))}" target="_blank" rel="noopener noreferrer" aria-label="Consultar disponibilidad de ${product.title} por WhatsApp">Consultar <span aria-hidden="true">↗</span></a><a href="${product.post}" target="_blank" rel="noopener noreferrer" aria-label="Ver publicación de ${product.title} en Instagram">Ver publicación ↗</a></div>
    </div>
  </article>`).join('');

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const chosen = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {item.classList.toggle('is-active',item===button);item.setAttribute('aria-pressed',String(item===button));});
  document.querySelectorAll('.product-card').forEach(card => {card.hidden = chosen !== 'todos' && card.dataset.category !== chosen;});
}));

const followerCard = (person, interactive) => {
  const inner = `<img src="./assets/${person.image}" alt="${interactive ? `Foto de perfil de ${person.name}` : ''}" width="76" height="76" loading="lazy"><strong>${person.name}</strong><span>Comunidad Brilliant</span>`;
  return interactive ? `<a class="community-item" href="${person.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver el perfil de ${person.name} en Instagram">${inner}</a>` : `<div class="community-item">${inner}</div>`;
};
document.getElementById('marqueeTrack').innerHTML = `<div class="marquee-group">${followers.map(person => followerCard(person,true)).join('')}</div><div class="marquee-group" aria-hidden="true">${followers.map(person => followerCard(person,false)).join('')}</div>`;

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
