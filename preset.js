// Remplacer par deux exports JPG/WebP de la même photo, cadrés à l'identique.
// L'export « avant » vient du RAW sans preset ; les navigateurs n'affichent pas le RAW.
const PRESET = {
  name: 'PRESET SIGNATURE',
  beforeImage: null,
  afterImage: null,
  // URL HTTPS du produit chez un vendeur assurant paiement ET livraison du fichier.
  // Le fichier payant doit être hébergé chez ce prestataire, pas dans les assets publics.
  purchaseUrl: null,
  price: null
};
const presetSection = document.querySelector('#preset');
const comparison = document.querySelector('.preset-comparison');
const slider = document.querySelector('#preset-slider');
const realPreview = Boolean(PRESET.beforeImage && PRESET.afterImage);
const presetTitle = document.querySelector('#preset-title');
if (presetTitle) presetTitle.textContent = PRESET.name;
if (realPreview) {
  document.querySelector('#preset-before').src = PRESET.beforeImage;
  document.querySelector('#preset-after').src = PRESET.afterImage;
  comparison.classList.remove('is-demo');
  document.querySelector('#preset-note').textContent = 'La même image, avant et après application du preset.';
  document.querySelector('.before-label').textContent = 'AVANT';
  document.querySelector('.after-label').textContent = 'APRÈS';
}
function updateComparison() {
  comparison.style.setProperty('--split', `${slider.value}%`);
  slider.setAttribute('aria-valuetext', `${slider.value} % de la version avant visible`);
}
slider.addEventListener('input', updateComparison);
updateComparison();
let checkoutUrl = null;
try {
  const url = new URL(PRESET.purchaseUrl);
  if (url.protocol === 'https:') checkoutUrl = url.href;
} catch { /* Pas encore de lien de vente configuré. */ }
if (checkoutUrl) {
  const link = document.querySelector('#preset-buy');
  link.href = checkoutUrl;
  link.textContent = PRESET.price ? `Acheter le preset — ${PRESET.price}` : 'Acheter le preset';
  link.hidden = false;
  document.querySelector('#preset-soon').hidden = true;
  document.querySelector('#preset-payment-note').textContent = 'Paiement par carte · Téléchargement disponible après achat';
  document.querySelector('#preset-availability').textContent = 'DISPONIBLE';
}
// Le contenu reste visible sans JavaScript et avec la réduction des animations.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.1 });
  document.querySelectorAll('.about-section, .preset-section').forEach(section => {
    section.classList.add('will-reveal');
    observer.observe(section);
    section.addEventListener('focusin', () => section.classList.add('is-visible'));
  });
}
