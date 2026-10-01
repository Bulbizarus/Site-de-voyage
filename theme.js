(() => {
  'use strict';
  const key = 'portfolio-theme';
  const root = document.documentElement;
  let theme = 'light';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) {}
  if (location.protocol === 'file:') {
    const requested = new URLSearchParams(location.search).get('theme');
    if (requested === 'light' || requested === 'dark') theme = requested;
  }
  root.dataset.theme = theme;
  let toggle;
  function apply(value) {
    theme = value === 'dark' ? 'dark' : 'light';
    root.dataset.theme = theme;
    if (toggle) {
      toggle.setAttribute('aria-checked', String(theme === 'dark'));
      toggle.title = theme === 'light' ? 'Passer en mode nuit' : 'Passer en mode jour';
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const host = document.querySelector('.socials');
    if (!host) return;
    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'theme-toggle';
    toggle.setAttribute('role', 'switch');
    toggle.setAttribute('aria-label', 'Mode sombre');
    toggle.innerHTML = '<span class="theme-icon" aria-hidden="true"><svg class="theme-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg><svg class="theme-moon" viewBox="0 0 24 24"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/></svg></span>';
    toggle.addEventListener('click', () => {
      apply(theme === 'light' ? 'dark' : 'light');
      try { localStorage.setItem(key, theme); } catch (_) {}
      if (location.protocol === 'file:') {
        const url = new URL(location.href);
        url.searchParams.set('theme', theme);
        try { history.replaceState(null, '', url); } catch (_) {}
      }
    });
    host.prepend(toggle);
    apply(theme);
  });
  // Local files can have separate storage per page; carry the choice in local links.
  document.addEventListener('click', event => {
    if (location.protocol !== 'file:') return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href);
    if (url.protocol === 'file:' && url.pathname.endsWith('.html')) {
      url.searchParams.set('theme', theme);
      link.href = url.href;
    }
  }, true);
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
})();
