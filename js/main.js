/* Sitrep landing: preloader, hero cells, marquees, chart, scroll-driven sections, carousel, FAQ, pricing. */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- preloader: blue hold, then a flickering pixel dissolve ---------- */
  const preloadDone = new Promise(resolve => {
    const el = $('#preloader');
    if (!el) return resolve();
    if (reduce) { el.remove(); return resolve(); }
    const vw = window.innerWidth, vh = window.innerHeight;
    const cell = vw < 720 ? 40 : vw < 1200 ? 72 : 120;
    const cols = Math.ceil(vw / cell), rows = Math.ceil(vh / cell);
    el.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    el.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    const shades = ['#0151AF', '#0B2E5E', '#1A1A1A', '#3D74C2', '#9DB6DC', '#D9E2EF', '#F9EDDD'];
    const cells = [];
    const frag = document.createDocumentFragment();
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const s = document.createElement('span');
      // clear time: a loose sweep from the top-left with plenty of scatter
      s._t = ((r + c) / (rows + cols)) * 0.55 + Math.random() * 0.45;
      s._flick = 0.25 + Math.random() * 0.2; // how long before clearing it flickers
      s._next = 0;
      frag.appendChild(s); cells.push(s);
    }
    el.appendChild(frag);
    document.body.classList.add('is-locked');
    const hold = 450, total = 850;
    const t0 = performance.now() + hold;
    function tick(now) {
      const p = (now - t0) / total;
      for (const s of cells) {
        if (s._gone) continue;
        if (s._t <= p) { s._gone = true; s.style.visibility = 'hidden'; continue; }
        if (p > s._t - s._flick && now >= s._next) {
          s.style.background = shades[Math.floor(Math.random() * shades.length)];
          s._next = now + 60 + Math.random() * 90;
        }
      }
      if (p < 1) requestAnimationFrame(tick);
      else { el.remove(); document.body.classList.remove('is-locked'); resolve(); }
    }
    requestAnimationFrame(tick);
  });

  /* ---------- hero headline: type in, then rotate the bracketed word ---------- */
  (function typewriter() {
    const pixel = $('.hero-top .pixel'), tail = $('.hero-top .l2');
    if (!pixel || !tail) return;
    const words = ['[Cursor]', '[Claude Code]', '[Evidence]', '[Precedents]'];
    const tailText = tail.textContent;
    if (reduce) return;
    const glyphs = '_{}[]=>/#\\?^';
    const rnd = () => glyphs[Math.floor(Math.random() * glyphs.length)];
    const wait = ms => new Promise(r => setTimeout(r, ms));
    async function type(el, text, ms) {
      for (let i = 1; i <= text.length; i++) { el.textContent = text.slice(0, i) + (i < text.length ? rnd() : ''); await wait(ms); }
      el.textContent = text;
    }
    async function erase(el, ms) {
      let t = el.textContent;
      while (t.length) { t = t.slice(0, -1); el.textContent = t; await wait(ms); }
    }
    pixel.textContent = ''; tail.textContent = '';
    preloadDone.then(async () => {
      await wait(150);
      await type(pixel, words[0], 55);
      await type(tail, tailText, 32);
      let i = 0;
      while (true) {
        await wait(3200);
        await erase(pixel, 40);
        await wait(250);
        i = (i + 1) % words.length;
        await type(pixel, words[i], 65);
      }
    });
  })();

  /* ---------- nav ---------- */
  (function nav() {
    const burger = $('#burger'), menu = $('#navMenu');
    if (burger && menu) {
      burger.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('is-locked', open);
      });
      $$('a', menu).forEach(a => a.addEventListener('click', () => { menu.classList.remove('is-open'); document.body.classList.remove('is-locked'); }));
    }
    const brandSm = $('.brand-sm');
    const mq = window.matchMedia('(max-width: 720px)');
    const sync = () => { if (brandSm) brandSm.style.display = mq.matches ? 'flex' : 'none'; };
    mq.addEventListener('change', sync); sync();

    // active link follows the section in view
    const links = $$('.nav-links a');
    const targets = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window && targets.length) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      targets.forEach(t => io.observe(t));
    }
  })();

  /* ---------- hero: twinkling grid cells ---------- */
  (function heroCells() {
    const wrap = $('#heroCells');
    if (!wrap || reduce) return;
    const band = wrap.parentElement;
    let cells = [];
    const build = () => {
      wrap.innerHTML = ''; cells = [];
      const size = 48, cols = Math.ceil(band.clientWidth / size) + 1, rows = Math.ceil(band.clientHeight / size) + 1;
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const i = document.createElement('i');
        i.style.left = (c * size - 1) + 'px'; i.style.top = (r * size - 1) + 'px';
        wrap.appendChild(i); cells.push(i);
      }
    };
    build();
    window.addEventListener('resize', build);
    setInterval(() => {
      if (!cells.length) return;
      const n = 3 + Math.floor(Math.random() * 4);
      for (let k = 0; k < n; k++) {
        const c = cells[Math.floor(Math.random() * cells.length)];
        c.classList.add('on');
        setTimeout(() => c.classList.remove('on'), 1200 + Math.random() * 1800);
      }
    }, 500);
  })();

  /* ---------- tickers ---------- */
  (function tickers() {
    const items = ['[#Evidence]', '&', '[#Graded]', '//'];
    ['#ticker1', '#ticker2'].forEach(id => {
      const t = $(id); if (!t) return;
      let html = '';
      for (let i = 0; i < 12; i++) html += `<span>${items.map(x => `<i>${x}</i>`).join('')}</span>`;
      t.innerHTML = html;
    });
  })();

  /* ---------- chart: before/after bars ---------- */
  (function chart() {
    const svg = $('#chartSvg'); if (!svg) return;
    const W = 1200, H = 420, n = 200, bw = W / n;
    let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    let out = '';
    // vertical guides every 100
    for (let g = 0; g <= 8; g++) out += `<line x1="${g * W / 8}" y1="0" x2="${g * W / 8}" y2="${H}" stroke="#E1D4C1" stroke-dasharray="2 3"/>`;
    for (let i = 0; i < n; i++) {
      const x = i * bw + 1;
      const t = i / n;
      let h, fill;
      if (t < 0.5) {
        const env = 0.25 + 0.25 * Math.sin(t * 12) * Math.sin(t * 5 + 1) + 0.1 * rnd();
        h = Math.max(4, env * 0.55 * H); fill = '#E9DAC6';
      } else {
        const env = 0.82 + 0.12 * Math.sin(t * 20) + 0.05 * rnd();
        h = env * H; fill = '#0151AF';
      }
      out += `<rect x="${x}" y="${H - h}" width="${bw - 2}" height="${h}" fill="${fill}"/>`;
    }
    out += `<line x1="${W / 2}" y1="0" x2="${W / 2}" y2="${H}" stroke="#0151AF" stroke-dasharray="3 3"/>`;
    out += `<line x1="0" y1="${H}" x2="${W}" y2="${H}" stroke="#E1D4C1"/>`;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = out;
  })();

  /* ---------- capabilities tabs (click + auto-cycle) ---------- */
  (function caps() {
    const list = $('#capList'); if (!list) return;
    const items = $$('.cap-item', list);
    let idx = 0, timer;
    const set = i => { idx = i; items.forEach((el, k) => el.classList.toggle('is-active', k === i)); };
    const cycle = () => { timer = setInterval(() => set((idx + 1) % items.length), 4500); };
    items.forEach((el, i) => el.addEventListener('click', () => { clearInterval(timer); set(i); cycle(); }));
    if (!reduce) cycle();
  })();

  /* ---------- scroll-driven steps (how it works, install) ---------- */
  function scrolly(wrapId, itemSel, step, onChange) {
    const wrap = $(wrapId); if (!wrap) return;
    const items = $$(itemSel, wrap);
    const mq = window.matchMedia('(max-width: 1080px)');
    let current = -1;
    const set = i => { if (i === current) return; current = i; items.forEach((el, k) => el.classList.toggle('is-active', k === i)); if (onChange) onChange(i); };
    const onScroll = () => {
      if (mq.matches) { if (current !== 0) set(0); return; }
      const top = wrap.getBoundingClientRect().top;
      const i = Math.min(items.length - 1, Math.max(0, Math.floor(-top / step)));
      set(i);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    items.forEach((el, i) => el.addEventListener('click', () => {
      if (mq.matches) { set(i); return; }
      const y = wrap.getBoundingClientRect().top + window.scrollY + i * step + 1;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }));
    onScroll();
  }
  scrolly('#howScrolly', '.how-card', 450);
  scrolly('#installScrolly', '.install-tab', 700, i => {
    $$('.code pre').forEach(p => { p.hidden = Number(p.dataset.tab) !== i; if (!p.hidden) { const nm = $('#codeName'); if (nm) nm.textContent = p.dataset.name; } });
  });

  /* ---------- copy button ---------- */
  (function copy() {
    const b = $('#copyBtn'); if (!b) return;
    b.addEventListener('click', () => {
      const pre = $$('.code pre').find(p => !p.hidden); if (!pre) return;
      const label = $('span', b);
      navigator.clipboard?.writeText(pre.textContent).then(() => { label.textContent = 'Copied'; setTimeout(() => label.textContent = 'Copy', 1400); });
    });
  })();

  /* ---------- invariants carousel ---------- */
  (function carousel() {
    const track = $('#carTrack'); if (!track) return;
    const cards = $$('.inv-card', track);
    let i = 0;
    const gap = 16;
    const width = () => cards[0].getBoundingClientRect().width + gap;
    const visible = () => Math.max(1, Math.floor((track.parentElement.clientWidth - 2 * parseFloat(getComputedStyle(track).paddingLeft)) / width()));
    const go = k => { i = Math.max(0, Math.min(cards.length - visible(), k)); track.style.transform = `translateX(${-i * width()}px)`; };
    $('#carPrev')?.addEventListener('click', () => go(i - 1));
    $('#carNext')?.addEventListener('click', () => go(i + 1));
    window.addEventListener('resize', () => go(i));
    // drag / swipe
    let sx = null;
    track.addEventListener('pointerdown', e => { sx = e.clientX; });
    window.addEventListener('pointerup', e => { if (sx === null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); });
  })();

  /* ---------- FAQ ---------- */
  (function faq() {
    $$('.faq-item').forEach(item => {
      const q = $('.faq-q', item);
      q.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        q.setAttribute('aria-expanded', String(open));
      });
    });
    const first = $('.faq-item'); if (first) { first.classList.add('is-open'); $('.faq-q', first).setAttribute('aria-expanded', 'true'); }
  })();

  /* ---------- pricing toggle ---------- */
  (function billing() {
    const t = $('#billing'); if (!t) return;
    $$('button', t).forEach(b => b.addEventListener('click', () => {
      $$('button', t).forEach(x => x.classList.toggle('is-on', x === b));
      const p = b.dataset.period;
      $$('.price-card [data-m]').forEach(n => n.textContent = n.dataset[p]);
      $$('.price-card .per').forEach(per => per.textContent = per.textContent.includes('seat') ? `/seat /month${p === 'y' ? ', billed yearly' : ''}` : `/month${p === 'y' ? ', billed yearly' : ''}`);
    }));
  })();

  /* ---------- newsletter (mailto fallback) ---------- */
  (function join() {
    const f = $('.newsletter'); if (!f) return;
    f.addEventListener('submit', e => {
      e.preventDefault();
      const v = $('input', f).value.trim();
      if (!v) return;
      window.location.href = `mailto:hello@sitrep.so?subject=Sitrep%20updates&body=${encodeURIComponent('Add me to the list: ' + v)}`;
    });
  })();

  /* ---------- reveal on scroll ---------- */
  (function reveal() {
    const els = $$('.reveal');
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  })();
})();
