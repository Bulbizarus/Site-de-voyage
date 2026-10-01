// Reuse the gallery viewer while keeping city exploration on the map page.
(() => {
  const section = document.createElement('section');
  section.id = 'city-media';
  section.className = 'inline-city-media';
  section.hidden = true;
  section.setAttribute('aria-labelledby', 'city-media-title');
  document.querySelector('.map-controls').after(section);
  let pendingScroll = 0;
  function hide() {
    cancelAnimationFrame(pendingScroll);
    const viewer = section.querySelector('dialog');
    if (viewer?.open) viewer.close();
    section.replaceChildren();
    section.hidden = true;
  }
  let selectedCountry = null;
  window.cityMedia = {
    hide,
    showCountry(country) {
      selectedCountry = country;
      const key = country.galleryUrl?.split('/').pop().replace(/\.html$/, '');
      const cities = Object.values(window.CITY_CONTENT || {}).filter(city => city.country === country.name);
      const content = GALLERIES[key] || {
        photos: cities.flatMap(city => city.photos || []),
        videos: cities.flatMap(city => city.videos || [])
      };
      this.show(country, content, false);
    },
    show(city, countryContent = null, scroll = true) {
      const key = city.galleryUrl?.split('/').pop().replace(/\.html$/, '');
      const content = countryContent || window.CITY_CONTENT?.[key];
      hide();
      if (!content) return;
      section.innerHTML = `<div class="media-heading"><h2 id="city-media-title" tabindex="-1"></h2><a class="back-to-map" href="#country-panel">↑ Revenir à la carte</a></div>
        <section aria-labelledby="city-photos-title"><div class="media-heading"><h3 id="city-photos-title">PHOTOS</h3><p class="photo-count"></p></div><div class="photo-grid"></div><div class="gallery-empty"><p>Les photographies arrivent bientôt.</p></div></section>
        <section aria-labelledby="city-videos-title"><div class="media-heading"><h3 id="city-videos-title">VIDÉOS</h3><p class="video-count"></p></div><div class="video-grid"></div><div class="videos-empty gallery-empty"><p>Les films arrivent bientôt.</p></div></section>
          <dialog id="photo-viewer" aria-label="Photographie agrandie">
    <button class="viewer-close" aria-label="Fermer la photographie">×</button>
    <div class="viewer-stage">
      <button class="viewer-prev viewer-arrow" aria-label="Photo précédente"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H4m7-7-7 7 7 7"/></svg></button>
      <figure><img alt="" draggable="false"><figcaption></figcaption></figure>
      <button class="viewer-next viewer-arrow" aria-label="Photo suivante"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7"/></svg></button>
    </div>
    <p class="viewer-counter" role="status" aria-live="polite" aria-atomic="true"></p>
  </dialog>
`;
      section.querySelector('#city-media-title').textContent = city.name;
      const mediaBase = new URL('galeries/', document.baseURI);
      const photos = (content.photos || []).map(photo => ({
        ...photo,
        src: new URL(photo.src, mediaBase).href,
        thumbnail: photo.thumbnail ? new URL(photo.thumbnail, mediaBase).href : undefined
      }));
      initializePhotos(section, photos);
      initializeVideos(section, content.videos || []);
      // Do not insert large empty sections between the map and existing media.
      if (photos.length || content.videos?.length) {
        section.querySelector('#city-photos-title').closest('section').hidden = !photos.length;
        section.querySelector('#city-videos-title').closest('section').hidden = !content.videos?.length;
      }
      section.hidden = false;
      section.querySelector('.back-to-map').addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('#country-panel').scrollIntoView({behavior:'smooth', block:'start'});
      });
      if (!countryContent && selectedCountry) {
        const back = document.createElement('button');
        back.type = 'button';
        back.className = 'back-to-map';
        back.textContent = 'Toutes les photos et vidéos du pays';
        back.addEventListener('click', () => window.countryExplorer.show(selectedCountry));
        section.querySelector('.media-heading').append(back);
      }
      if (scroll) pendingScroll = requestAnimationFrame(() => {
        section.querySelector('#city-media-title').focus({preventScroll:true});
        section.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
      });
    }
  };
})();

// Use actual media availability, rather than a destination's planned status.
const destinationNav = document.querySelector('.map-discover');
if (destinationNav) {
  destinationNav.replaceChildren();
  for (const country of countries) {
    const key = country.galleryUrl?.split('/').pop().replace(/\.html$/, '');
    const content = GALLERIES[key];
    const photos = content?.photos?.length || 0;
    const videos = content?.videos?.length || 0;
    const available = photos + videos > 0;
    shapes.get(country.code)?.classList.toggle('has-media', available);
    if (!available) continue;
    const link = document.createElement('a');
    link.href = `#country=${country.code}`;
    const name = document.createElement('strong');
    name.textContent = country.name;
    appendCountryFlag(name, country.code);
    const count = document.createElement('span');
    count.textContent = [photos && `${photos} photographies`, videos && `${videos} films`].filter(Boolean).join(' · ');
    link.append(name, count);
    link.addEventListener('click', event => {
      event.preventDefault();
      openCountry(country.code);
      document.querySelector('#country-panel').scrollIntoView({block:'start', behavior:reducedMotion.matches ? 'instant' : 'smooth'});
    });
    destinationNav.append(link);
  }
}
