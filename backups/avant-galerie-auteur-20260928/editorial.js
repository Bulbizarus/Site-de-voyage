// Homepage media rails share the existing gallery data and YouTube renderer.
function initializeMediaRail(track, section, label) {
  if (!track || track.children.length < 2) return;
  track.classList.add('media-rail');
  track.tabIndex = 0;
  track.setAttribute('role', 'region');
  track.setAttribute('aria-label', label);
  const controls = document.createElement('div');
  controls.className = 'rail-controls';
  const previous = document.createElement('button');
  const next = document.createElement('button');
  for (const [button, text, name] of [[previous, '←', 'Précédent'], [next, '→', 'Suivant']]) {
    button.type = 'button';
    button.textContent = text;
    button.setAttribute('aria-label', `${label} — ${name}`);
    button.setAttribute('aria-controls', track.id);
    controls.append(button);
  }
  const viewport = document.createElement('div');
  viewport.className = 'media-rail-viewport';
  track.before(viewport);
  viewport.append(track, controls);
  function update() {
    const end = Math.max(0, track.scrollWidth - track.clientWidth);
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= end - 2;
    controls.hidden = end <= 2;
  }
  function move(direction) {
    const first = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (first.getBoundingClientRect().width + gap),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  });
  track.addEventListener('scroll', update, { passive: true });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(update).observe(track);
  else window.addEventListener('resize', update);
  update();
}

document.addEventListener('DOMContentLoaded', () => {
  const photos = document.querySelector('.editorial-photo-grid');
  if (photos && typeof GALLERIES !== 'undefined') {
    photos.id = 'home-photos';
    // Keep the opening selection, then let visitors browse the rest of the series.
    const featured = new Set(['6.jpg', '2.jpg', '11.jpg']);
    const base = new URL('galeries/', document.baseURI);
    for (const photo of GALLERIES.maroc.photos) {
      if (featured.has(photo.src.split('/').pop())) continue;
      const link = document.createElement('a');
      link.className = 'editorial-photo';
      link.href = 'galeries/maroc-photos.html';
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = new URL(photo.thumbnail || photo.src, base).href;
      img.alt = photo.alt || 'Photographie du Maroc';
      img.loading = 'lazy';
      img.decoding = 'async';
      const caption = document.createElement('figcaption');
      const place = document.createElement('span');
      place.textContent = 'Maroc';
      caption.append(place);
      figure.append(img, caption);
      link.append(figure);
      photos.append(link);
    }
    initializeMediaRail(photos, document.querySelector('#selection'), 'Photographies');
  }
  const host = document.querySelector('#editorial-film-list');
  if (host && typeof initializeVideos === 'function') {
    host.innerHTML = '<p class="video-count sr-only"></p><div id="home-films" class="video-grid"></div><p class="videos-empty" hidden>Les films arrivent bientôt.</p>';
    initializeVideos(host, GALLERIES.bresil.videos);
    initializeMediaRail(host.querySelector('.video-grid'), document.querySelector('#films'), 'Films');
  }
});
