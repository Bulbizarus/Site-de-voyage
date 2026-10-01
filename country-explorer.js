(() => {
  const stage = document.querySelector('.map-stage');
  const root = document.createElement('section');
  root.className = 'country-explorer';
  root.hidden = true;
  root.setAttribute('aria-label', 'Explorer les villes du pays');
  root.innerHTML = `<aside class="country-facts city-facts city-map-facts" hidden aria-label="Informations sur la ville"><h3></h3><dl></dl></aside><svg class="detail-map" viewBox="0 0 1000 540" role="group" aria-label="Carte du pays et de ses villes"><path class="detail-land"/><g class="detail-cities"></g></svg><div class="city-list" aria-label="Villes principales"></div><p class="city-description" aria-live="polite">Choisissez une ville pour l’explorer.</p>`;
  stage.append(root);
  const svg = root.querySelector('svg');
  const layer = root.querySelector('.detail-cities');
  const list = root.querySelector('.city-list');
  const description = root.querySelector('.city-description');
  const cityFacts = root.querySelector('.city-map-facts');
  function showCityFacts(city) {
    const key = city.galleryUrl?.split('/').pop().replace(/\.html$/, '');
    const facts = window.CITY_CONTENT?.[key]?.facts;
    cityFacts.hidden = !facts;
    if (!facts) return;
    cityFacts.querySelector('h3').textContent = city.name;
    const details = cityFacts.querySelector('dl');
    details.replaceChildren();
    for (const [name, value] of [['Population', facts.population], ['Région', facts.region], ['Altitude', facts.altitude]]) {
      const pair = document.createElement('div');
      const term = document.createElement('dt');
      const definition = document.createElement('dd');
      term.textContent = name;
      definition.textContent = value;
      pair.append(term, definition);
      details.append(pair);
    }
  }
  const ns = 'http://www.w3.org/2000/svg';
  let view = [0, 0, 1000, 540], frame = 0, active = null, dragging = null, moved = false;
  function setView(next) { view = next; svg.setAttribute('viewBox', view.join(' ')); }
  function move(next) {
    cancelAnimationFrame(frame);
    if (reducedMotion.matches) { setView(next); return; }
    const from = [...view], start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / 500), ease = 1 - (1 - t) ** 3;
      setView(from.map((v, i) => v + (next[i] - v) * ease));
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  }
  function selectCity(city, index) {
    if (moved) return;
    showCityFacts(city);
    void playSound('select');
    active = index;
    [...layer.children].forEach((el, i) => el.classList.toggle('active', i === index));
    [...list.children].forEach((el, i) => el.tagName === 'BUTTON' && el.setAttribute('aria-pressed', String(i === index)));
    description.textContent = `${city.name}${city.capital ? ' · Capitale' : ''} — ${Math.abs(city.coordinates[1]).toFixed(2)}° ${city.coordinates[1] >= 0 ? 'N' : 'S'}, ${Math.abs(city.coordinates[0]).toFixed(2)}° ${city.coordinates[0] >= 0 ? 'E' : 'O'}`;
    move([city.x - 250, city.y - 135, 500, 270]);
    window.cityMedia?.show(city);
  }
  svg.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    moved = false;
    dragging = {x:event.clientX, y:event.clientY, view:[...view], id:event.pointerId};
  });
  svg.addEventListener('pointermove', event => {
    if (!dragging || event.pointerId !== dragging.id) return;
    const dx = event.clientX - dragging.x, dy = event.clientY - dragging.y;
    if (Math.hypot(dx, dy) < 5 && !moved) return;
    moved = true;
    svg.setPointerCapture(event.pointerId);
    cancelAnimationFrame(frame);
    const scale = Math.max(view[2] / svg.clientWidth, view[3] / svg.clientHeight);
    setView([dragging.view[0] - dx * scale, dragging.view[1] - dy * scale, view[2], view[3]]);
  });
  svg.addEventListener('pointerup', () => { dragging = null; setTimeout(() => { moved = false; }, 0); });
  svg.addEventListener('pointercancel', () => { dragging = null; moved = false; });
  window.countryExplorer = {
    hide() {
      window.cityMedia?.hide();
      cancelAnimationFrame(frame);
      root.hidden = true;
      cityFacts.hidden = true;
      stage.classList.remove('country-mode');
    },
    show(country) {
      window.cityMedia?.showCountry(country);
      const data = window.COUNTRY_MAPS[country.code];
      if (!data) return;
      cancelAnimationFrame(frame);
      active = null;
      cityFacts.hidden = true;
      setView([0, 0, 1000, 540]);
      root.setAttribute('aria-label', `Explorer les villes : ${country.name}`);
      root.setAttribute('tabindex', '-1');
      root.querySelector('.detail-land').setAttribute('d', data.path);
      layer.replaceChildren(); list.replaceChildren();
      data.cities.forEach((city, index) => {
        const group = document.createElementNS(ns, 'g');
        group.setAttribute('transform', `translate(${city.x} ${city.y})`);
        group.setAttribute('class', 'detail-city');
        // The equivalent HTML buttons provide keyboard navigation and generous touch targets.
        group.setAttribute('aria-hidden', 'true');
        const hit = document.createElementNS(ns, 'circle'); hit.setAttribute('r', '17'); hit.setAttribute('class', 'city-hit');
        const dot = document.createElementNS(ns, 'circle'); dot.setAttribute('r', city.capital ? '4' : '3'); dot.setAttribute('class', 'city-dot');
        const text = document.createElementNS(ns, 'text'); text.setAttribute('x', '10'); text.setAttribute('y', '4'); text.textContent = city.name;
        // Keep nearby labels from overlapping; every name remains available below the map.
        if (data.cities.slice(0,index).some(other => Math.abs(other.x-city.x)<110 && Math.abs(other.y-city.y)<18)) text.classList.add('crowded-label');
        group.append(hit, dot, text);
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('aria-pressed', 'false');
        button.textContent = city.name;
        button.setAttribute('data-hover-sound-managed', '');
        for (const el of [group, button]) {
          el.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse' && !dragging) { void playSound('hover'); } });
          el.addEventListener('click', event => {
            event.preventDefault();
            selectCity(city, index);
          });
        }
        button.addEventListener('focus', () => { group.classList.add('focused'); });
        button.addEventListener('blur', () => group.classList.remove('focused'));
        layer.append(group); list.append(button);
      });
      description.textContent = data.cities.length ? 'Choisissez une ville pour l’explorer.' : 'Les repères de villes seront ajoutés prochainement.';
      root.hidden = false;
      stage.classList.add('country-mode');
      // Fit the actual silhouette instead of leaving the empty world-sized margins.
      const bounds = root.querySelector('.detail-land').getBBox();
      if (bounds.width > 0 && bounds.height > 0) {
        const padding = Math.max(bounds.width, bounds.height) * .07;
        setView([bounds.x - padding, bounds.y - padding, bounds.width + padding * 2, bounds.height + padding * 2]);
      }
      label.hidden = true;
      if (document.activeElement?.closest('#world-map')) root.focus({preventScroll:true});
    }
  };
  const initialCountry = new URLSearchParams(window.location.hash.slice(1)).get('country');
  if (initialCountry && byCode.has(initialCountry)) openCountry(initialCountry);
})();
