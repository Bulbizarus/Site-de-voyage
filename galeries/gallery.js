// YouTube refuse certains films sur l’adresse IP de boucle locale.
// Conserver le port, la page et la sélection en utilisant le nom localhost.
if (['http:', 'https:'].includes(window.location.protocol)
    && window.location.hostname === '127.0.0.1') {
  const previewUrl = new URL(window.location.href);
  previewUrl.hostname = 'localhost';
  window.location.replace(previewUrl.href);
}

// Ajoutez vos fichiers dans assets/photos/<destination>/, puis renseignez cette liste.
// Les chemins sont relatifs aux pages du dossier galeries.
const GALLERIES = {
  maroc: {
    photos: [
      { src: '../assets/photos/maroc/1.jpg', thumbnail: '../assets/photos/maroc/previews/1.jpg', alt: 'Voyageur et dromadaire dans les dunes' },
      { src: '../assets/photos/maroc/2.jpg', thumbnail: '../assets/photos/maroc/previews/2.jpg', alt: 'Portrait au turban orange' },
      { src: '../assets/photos/maroc/3.jpg', thumbnail: '../assets/photos/maroc/previews/3.jpg', alt: 'Silhouettes et dromadaire au soleil couchant' },
      { src: '../assets/photos/maroc/4.jpg', thumbnail: '../assets/photos/maroc/previews/4.jpg', alt: 'Deux silhouettes et un dromadaire sous un ciel orangé' },
      { src: '../assets/photos/maroc/5.jpg', thumbnail: '../assets/photos/maroc/previews/5.jpg', alt: 'Groupe d’enfants avec des vélos sur une route' },
      { src: '../assets/photos/maroc/6.jpg', thumbnail: '../assets/photos/maroc/previews/6.jpg', alt: 'Personne vêtue de blanc entre les palmes et le lac' },
      { src: '../assets/photos/maroc/7.jpg', thumbnail: '../assets/photos/maroc/previews/7.jpg', alt: 'Portrait au turban blanc' },
      { src: '../assets/photos/maroc/8.jpg', thumbnail: '../assets/photos/maroc/previews/8.jpg', alt: 'Croissant de lune au-dessus de l’eau au crépuscule' },
      { src: '../assets/photos/maroc/9.jpg', thumbnail: '../assets/photos/maroc/previews/9.jpg', alt: 'Lanternes suspendues dans un passage étroit' },
      { src: '../assets/photos/maroc/10.jpg', thumbnail: '../assets/photos/maroc/previews/10.jpg', alt: 'Portrait devant un paysage rocheux' },
      { src: '../assets/photos/maroc/11.jpg', thumbnail: '../assets/photos/maroc/previews/11.jpg', alt: 'Silhouettes sur la plage à la lumière du soir' },
    ],
    videos: [
      // { url: "https://www.youtube.com/watch?v=IDENTIFIANT", title: "Titre du film", kind: "film", duration: "", description: "" },
    ]
  },
  thailande: {
    photos: [
      // { src: '../assets/photos/thailande/photo-01.jpg', alt: 'Description de la photographie', caption: 'Lieu, année' },
    ],
    videos: [
      // { url: "https://www.youtube.com/watch?v=IDENTIFIANT", title: "Titre du film", kind: "film", duration: "", description: "" },
    ]
  }
};

// City galleries share the existing photo viewer and video renderer.
Object.assign(GALLERIES, window.CITY_CONTENT || {});
// Le carnet du pays réutilise les vidéos attribuées aux villes.
GALLERIES.bresil = {
  photos: [],
  videos: ['bresil-recife', 'bresil-manaus', 'bresil-sao-luis']
    .flatMap(key => (window.CITY_CONTENT?.[key]?.videos || []).map(video => ({
      ...video, description: window.CITY_CONTENT[key].name
    })))
    .sort((a, b) => ['Recife', 'Amazona', 'Brazil Nordeste', 'Umbanda'].indexOf(a.title)
      - ['Recife', 'Amazona', 'Brazil Nordeste', 'Umbanda'].indexOf(b.title))
};

function initializePhotos(container = document, photos = GALLERIES[document.body.dataset.gallery]?.photos || []) {
const grid = container.querySelector('.photo-grid');
const viewer = container.querySelector('#photo-viewer');
const fullImage = viewer.querySelector('img');
const caption = viewer.querySelector('figcaption');
const closeButton = viewer.querySelector('.viewer-close');
const previousButton = viewer.querySelector('.viewer-prev');
const nextButton = viewer.querySelector('.viewer-next');
const counter = viewer.querySelector('.viewer-counter');
let currentIndex = 0;
let openingButton = null;
let touchStart = null;

function showPhoto(index) {
  if (index < 0 || index >= photos.length) return;
  currentIndex = index;
  const photo = photos[index];
  fullImage.src = photo.src;
  fullImage.alt = photo.alt || '';
  caption.textContent = photo.caption || '';
  counter.textContent = `${index + 1} / ${photos.length}`;
  previousButton.setAttribute('aria-disabled', String(index === 0));
  nextButton.setAttribute('aria-disabled', String(index === photos.length - 1));
}
previousButton.addEventListener('click', () => showPhoto(currentIndex - 1));
nextButton.addEventListener('click', () => showPhoto(currentIndex + 1));
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
viewer.addEventListener('touchstart', event => {
  touchStart = event.touches.length === 1 && !event.target.closest('button')
    ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
}, { passive: true });
viewer.addEventListener('touchend', event => {
  if (!touchStart || event.touches.length) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    showPhoto(currentIndex + (dx < 0 ? 1 : -1));
  }
}, { passive: true });
viewer.addEventListener('touchcancel', () => { touchStart = null; });

container.querySelector('.gallery-empty').hidden = photos.length > 0;
container.querySelector('.photo-count').textContent = `${String(photos.length).padStart(2, '0')} PHOTOGRAPHIE${photos.length === 1 ? '' : 'S'}`;
for (const [index, photo] of photos.entries()) {
  const figure = document.createElement('figure');
  const button = document.createElement('button');
  button.className = 'photo-open';
  button.setAttribute('aria-label', `Agrandir : ${photo.alt || `photographie ${index + 1}`}`);
  const img = document.createElement('img');
  img.src = photo.thumbnail || photo.src;
  img.alt = photo.alt || '';
  img.loading = index < 2 ? 'eager' : 'lazy';
  img.decoding = 'async';
  button.append(img);
  button.addEventListener('click', () => {
    openingButton = button;
    showPhoto(index);
    viewer.showModal();
    document.body.classList.add('viewer-open');
    closeButton.focus();
  });
  figure.append(button);
  if (photo.caption) {
    const description = document.createElement('figcaption');
    description.textContent = photo.caption;
    figure.append(description);
  }
  grid.append(figure);
}
closeButton.addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer && event.detail !== 0 && event.pointerType !== 'touch') viewer.close(); });
viewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  touchStart = null;
  openingButton?.focus({ preventScroll: true });
});

}
if (document.querySelector('.photo-grid')) initializePhotos();

// Accepte les liens YouTube classiques, courts, Shorts et les identifiants seuls.
function youtubeId(value) {
  if (typeof value !== 'string') return null;
  const raw = value.trim();
  if (/^[\w-]{11}$/.test(raw)) return raw;
  try {
    const url = new URL(raw);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    let id = null;
    if (host === 'youtu.be') id = url.pathname.split('/')[1];
    else if (['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)) {
      const parts = url.pathname.split('/');
      id = parts[1] === 'watch' ? url.searchParams.get('v') : ['embed', 'shorts', 'live'].includes(parts[1]) ? parts[2] : null;
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch { return null; }
}
function initializeVideos(container = document, entries = GALLERIES[document.body.dataset.gallery]?.videos || []) {
const videos = entries.map(video => ({ ...video, id: youtubeId(video.url) })).filter(video => {
  if (!video.id) console.warn('Lien YouTube invalide ignoré :', video.url);
  return video.id;
});
container.querySelector('.video-count').textContent = `${String(videos.length).padStart(2, '0')} VIDÉO${videos.length === 1 ? '' : 'S'}`;
container.querySelector('.videos-empty').hidden = videos.length > 0;
for (const [index, video] of videos.entries()) {
  const figure = document.createElement('figure');
  const filmTitle = video.title || `Film ${index + 1}`;
  const poster = document.createElement('a');
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const canEmbed = ['http:', 'https:'].includes(window.location.protocol);
  poster.href = watchUrl;
  poster.target = '_blank';
  poster.rel = 'noopener noreferrer';
  poster.className = 'film-poster';
  poster.setAttribute('aria-label', canEmbed ? `Lire le film : ${filmTitle}` : `${filmTitle} — voir sur YouTube (nouvel onglet)`);
  const thumbnail = document.createElement('img');
  // Prefer a wide frame from this exact video, with smaller YouTube fallbacks.
  const thumbnailSizes = ['maxresdefault', 'sddefault', 'hqdefault'];
  let thumbnailIndex = 0;
  function nextThumbnail() {
    if (thumbnailIndex < thumbnailSizes.length - 1) {
      thumbnailIndex += 1;
      thumbnail.src = `https://i.ytimg.com/vi/${video.id}/${thumbnailSizes[thumbnailIndex]}.jpg`;
    } else {
      thumbnail.hidden = true;
    }
  }
  thumbnail.addEventListener('error', nextThumbnail);
  thumbnail.addEventListener('load', () => {
    // Missing YouTube thumbnails can return a 120px placeholder with HTTP 200.
    if (thumbnail.naturalWidth <= 120) nextThumbnail();
  });
  thumbnail.src = `https://i.ytimg.com/vi/${video.id}/${thumbnailSizes[0]}.jpg`;
  thumbnail.alt = '';
  thumbnail.loading = 'lazy';
  thumbnail.decoding = 'async';
  const play = document.createElement('span');
  play.className = 'film-play';
  play.setAttribute('aria-hidden', 'true');
  play.textContent = '▶';
  const hint = document.createElement('span');
  hint.className = 'film-watch';
  hint.textContent = canEmbed ? 'Lire le film' : 'Voir sur YouTube ↗';
  poster.append(thumbnail, play, hint);
  if (video.duration) {
    const duration = document.createElement('span');
    duration.className = 'film-duration';
    duration.textContent = video.duration;
    poster.append(duration);
  }
  poster.addEventListener('click', event => {
    // Local files have no HTTP referrer: keep the real YouTube link usable.
    if (!canEmbed || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    // Restore another poster when starting a film so only one player can play.
    document.querySelectorAll('.video-grid iframe').forEach(player => {
      if (player._poster) player.replaceWith(player._poster);
    });
    const iframe = document.createElement('iframe');
    const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${video.id}`);
    embedUrl.search = new URLSearchParams({ playsinline: '1', rel: '0', autoplay: '1', origin: window.location.origin });
    iframe.src = embedUrl.href;
    iframe.width = '1280';
    iframe.height = '720';
    iframe.title = filmTitle;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe._poster = poster;
    poster.replaceWith(iframe);
    iframe.focus();
  });
  const description = document.createElement('figcaption');
  const title = document.createElement('span');
  title.textContent = filmTitle;
  const link = document.createElement('a');
  link.href = watchUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Voir sur YouTube ↗';
  link.setAttribute('aria-label', `${filmTitle} — voir sur YouTube (nouvel onglet)`);
  const metadata = document.createElement('div');
  metadata.className = 'film-metadata';
  const category = document.createElement('span');
  category.className = 'eyebrow';
  category.textContent = `${video.kind === 'vlog' ? 'VLOG' : 'FILM'}${video.duration ? ` · ${video.duration}` : ''}`;
  metadata.append(category, title);
  description.append(metadata, link);
  if (video.description) {
    const summary = document.createElement('p');
    summary.className = 'film-summary';
    summary.textContent = video.description;
    description.append(summary);
  }
  figure.append(poster, description);
  container.querySelector('.video-grid').append(figure);
}

}
if (document.querySelector('.video-grid')) initializeVideos();
