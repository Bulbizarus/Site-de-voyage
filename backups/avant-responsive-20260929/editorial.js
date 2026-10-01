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
    const media = track.querySelector('.film-poster, iframe, .editorial-photo img');
    if (media) {
      const bounds = media.getBoundingClientRect();
      const parent = viewport.getBoundingClientRect();
      controls.style.setProperty('--arrow-center', `${bounds.top - parent.top + bounds.height / 2}px`);
    }
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
  track.addEventListener('load', update, true);
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(update).observe(track);
  else window.addEventListener('resize', update);
  update();
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.editorial-home .site-header');
  if (header) {
    const sizeOpeningSection = () => document.body.style.setProperty('--home-header-height', `${header.getBoundingClientRect().height}px`);
    sizeOpeningSection();
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(sizeOpeningSection).observe(header);
    else window.addEventListener('resize', sizeOpeningSection);
  }

  const photos = document.querySelector('.editorial-photo-grid');
  if (photos && typeof GALLERIES !== 'undefined') {
    photos.id = 'home-photos';
    // Keep the opening selection, then let visitors browse the rest of the series.
    const featured = new Set(['6.jpg', '2.jpg', '11.jpg']);
    const base = new URL('galeries/', document.baseURI);
    for (const photo of GALLERIES.maroc.photos) {
      const filename = photo.src.split('/').pop();
      if (featured.has(filename)) continue;
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
    host.querySelectorAll('.video-grid figcaption').forEach((caption, index) => {
      const destination = document.createElement('span');
      destination.textContent = GALLERIES.bresil.videos[index].description || 'Brésil';
      caption.replaceChildren(destination);
    });
    initializeMediaRail(host.querySelector('.video-grid'), document.querySelector('#films'), 'Films');
  }
});

// Use generous framing only when a visitor explicitly navigates to a section.
document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('editorial-home')) return;
  let framedSection = null;
  const sections = new Set(['selection', 'films', 'about', 'preset']);
  function releaseFrame() {
    if (!framedSection) return;
    const section = framedSection;
    const reference = section.querySelector('.editorial-section-heading, .about-portrait, .preset-heading') || section;
    const before = reference.getBoundingClientRect().top;
    section.classList.remove('is-navigation-focus');
    framedSection = null;
    // Keep the visible content in place as the surrounding blank space shrinks.
    const delta = reference.getBoundingClientRect().top - before;
    window.scrollBy({ top: delta, behavior: 'instant' });
  }
  function frame(id) {
    if (framedSection?.id === id) return;
    releaseFrame();
    const section = sections.has(id) ? document.getElementById(id) : null;
    if (!section) return;
    section.classList.add('is-navigation-focus');
    framedSection = section;
  }
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link || link.target === '_blank') return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname) return;
    const id = url.hash.slice(1);
    if (sections.has(id) || id === 'top' || id === 'explorer') frame(id);
  });
  window.addEventListener('wheel', event => {
    if (!event.ctrlKey && Math.abs(event.deltaY) > Math.abs(event.deltaX)) releaseFrame();
  }, { passive: true });
  window.addEventListener('touchstart', releaseFrame, { passive: true });
  window.addEventListener('keydown', event => {
    if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) releaseFrame();
  });
  window.addEventListener('hashchange', () => {
    frame(location.hash.slice(1));
    if (framedSection) framedSection.scrollIntoView({ block: 'start' });
  });
  frame(location.hash.slice(1));
  if (framedSection) requestAnimationFrame(() => framedSection?.scrollIntoView({ block: 'start', behavior: 'instant' }));
});
