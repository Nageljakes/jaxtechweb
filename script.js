/* ============================================================
   JAXTECH — site behaviour v1.0
   ============================================================ */

// This script is also served from mirrors of the site that aren't the
// Worker itself (e.g. a GitHub Pages copy, kept as a fallback for visitors
// whose network blocks the shared *.workers.dev zone). On tiny/tiny-test
// a relative path already reaches the right backend and stays isolated
// per environment; anywhere else, point API calls at production directly
// — cross-origin is fine, the Worker already sends
// Access-Control-Allow-Origin: *.
const API_ORIGIN = /\.workers\.dev$/.test(location.hostname) ? '' : 'https://tiny.jaxtech.workers.dev';

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     CONFIG — ⚠️ EDIT THESE THREE LINES AND NOTHING ELSE
     ══════════════════════════════════════════════════════════ */
  const CONFIG = {
    // Where enquiries are emailed. Used by the mailto fallback too.
    email: 'nageljakes@gmail.com',

    // WhatsApp number in FULL international format, digits only.
    // South Africa: drop the leading 0, prefix 27.  082 123 4567 → '27821234567'
    whatsapp: '27793950395',

    // Telegram bot username, no @.
    telegram: 'jaxchatbot',

    // Number for the "Call" button, as you want it dialled.
    phone: '+27 79 395 0395',

    // Backend endpoint. Leave as-is; falls back to email automatically if not deployed.
    endpoint: API_ORIGIN + '/api/enquiry',

    // Prefilled WhatsApp opener
    waGreeting: "Hi Jaxtech, I've got a task I'd like to hand over to an AI agent."
  };
  /* ════════════════════════════════════════════════════════ */

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const isPlaceholder = (n) => /^2?7?0{6,}$/.test(String(n).replace(/\D/g, ''));

  /* ── Analytics shim ─────────────────────────────────────── */
  function track(event, data) {
    try {
      if (typeof window.gtag === 'function') window.gtag('event', event, data || {});
      if (typeof window.fbq === 'function') window.fbq('trackCustom', event, data || {});
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: event }, data || {}));
    } catch (e) { /* never break the page for analytics */ }
  }

  /* ── Contact links ──────────────────────────────────────── */
  function wireContactLinks() {
    const waNumber = CONFIG.whatsapp.replace(/\D/g, '');
    const waText = encodeURIComponent(CONFIG.waGreeting);
    const waHref = 'https://wa.me/' + waNumber + '?text=' + waText;

    // On phones, wa.me needs a top-level navigation for the OS to hand off
    // to the WhatsApp app — opening it in a new tab (target=_blank) leaves
    // it stranded on the wa.me redirect page instead.
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    $$('.js-whatsapp').forEach(a => {
      a.href = waHref;
      if (isMobile) {
        a.removeAttribute('target');
      } else {
        // wa.me never attempts a desktop-app handoff by itself — it always
        // lands on the web page, even with WhatsApp Desktop installed. Try
        // the app's own whatsapp:// link first (that's what makes the
        // browser prompt to open the app); if nothing takes focus within
        // 1.5s, assume the app isn't installed and fall back to wa.me.
        // Reads a.href fresh at click time (rather than closing over the
        // number/text above) so this still works after the success screen
        // re-points this same button at the composed enquiry message.
        a.target = '_blank';
        a.rel = 'noopener';
        a.addEventListener('click', (e) => {
          const match = /^https:\/\/wa\.me\/(\d+)(?:\?text=(.*))?$/.exec(a.href);
          if (!match) return; // unrecognised href — let the browser handle it normally
          e.preventDefault();
          const protoUrl = 'whatsapp://send?phone=' + match[1] + (match[2] ? '&text=' + match[2] : '');
          const fallbackHref = a.href;

          // Open the fallback tab now, synchronously in the click handler —
          // browsers block window.open() called later from a setTimeout.
          // We just leave it blank and either redirect or close it below.
          const fallbackTab = window.open('', '_blank');

          let handedOff = false;
          const onBlur = () => { handedOff = true; };
          window.addEventListener('blur', onBlur, { once: true });
          window.location.href = protoUrl;
          setTimeout(() => {
            window.removeEventListener('blur', onBlur);
            if (!fallbackTab) return; // popup blocked outright — nothing more we can do
            if (handedOff) fallbackTab.close();
            else fallbackTab.location.href = fallbackHref;
          }, 1500);
        });
      }
    });

    $$('.js-telegram').forEach(a => {
      a.href = 'https://t.me/' + CONFIG.telegram;
      a.target = '_blank';
      a.rel = 'noopener';
    });

    $$('.js-tel').forEach(a => { a.href = 'tel:' + CONFIG.phone.replace(/[^\d+]/g, ''); });

    $$('.js-mail').forEach(a => {
      a.href = 'mailto:' + CONFIG.email +
        '?subject=' + encodeURIComponent('Website enquiry — Jaxtech');
    });

    // If the number hasn't been filled in yet, don't show visitors a dead link.
    if (isPlaceholder(CONFIG.whatsapp)) {
      $$('.js-whatsapp, .js-tel').forEach(a => {
        a.href = '#enquire';
        a.target = '';
        a.addEventListener('click', () => {
          const f = $('#f-name'); if (f) setTimeout(() => f.focus(), 600);
        });
      });
      console.warn('[Jaxtech] WhatsApp/phone not configured — those buttons point at the enquiry form. Set CONFIG.whatsapp and CONFIG.phone in script.js');
    }
  }

  /* ── Nav ────────────────────────────────────────────────── */
  function initNav() {
    const nav = $('#nav'), toggle = $('#nav-toggle'), links = $('#nav-links');
    if (!nav) return;

    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toggle && links) {
      const close = () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      };
      toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      $$('a', links).forEach(a => a.addEventListener('click', close));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    }
  }

  /* ── Sticky mobile bar (hide while the form is on screen) ─ */
  function initMobileBar() {
    const bar = $('#mobile-bar'), form = $('#enquire');
    if (!bar) return;

    let formVisible = false;
    if (form && 'IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        formVisible = entries[0].isIntersecting;
        update();
      }, { threshold: 0.12 }).observe(form);
    }
    const update = () => bar.classList.toggle('show', window.scrollY > 520 && !formVisible);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ── Reveal on scroll ───────────────────────────────────── */
  function initReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = Array.from(el.parentElement ? el.parentElement.children : []);
        const delay = Math.min(siblings.indexOf(el), 5) * 70;
        setTimeout(() => el.classList.add('in'), delay);
        io.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => io.observe(el));

    // Safety net: nothing stays invisible for more than 3s, whatever happens
    // to the observer. Content matters more than the animation.
    setTimeout(() => items.forEach(el => el.classList.add('in')), 3000);
  }

  /* ── Pointer glow on pillar cards ───────────────────────── */
  function initPillarGlow() {
    if (window.matchMedia('(hover: none)').matches) return;
    $$('.pillar').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  /* ── Tier buttons prefill the form ──────────────────────── */
  function initTierLinks() {
    $$('[data-tier]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tier = $('#f-tier');
        if (tier) tier.value = btn.getAttribute('data-tier');
        const status = $('#form-status');
        if (status) {
          status.className = 'form-status info';
          status.textContent = 'Asking about ' + btn.getAttribute('data-tier') + ' — noted.';
        }
        // A package button implies the smart home domain is wanted.
        const homeDomain = $('#domain-home');
        if (homeDomain && !homeDomain.checked) {
          homeDomain.checked = true;
          setPropertyFieldsVisible(true);
        }
      });
    });
  }

  /* ── Property detail only matters once "Smart home" is picked ── */
  function setPropertyFieldsVisible(visible) {
    const fields = $('#fields-property');
    if (fields) { fields.hidden = !visible; fields.disabled = !visible; }
  }

  function initDomainPicker() {
    const homeDomain = $('#domain-home');
    if (!homeDomain) return;
    setPropertyFieldsVisible(homeDomain.checked);
    homeDomain.addEventListener('change', () => setPropertyFieldsVisible(homeDomain.checked));
  }

  /* ── CTA click tracking ─────────────────────────────────── */
  function initTracking() {
    $$('[data-track]').forEach(el => {
      el.addEventListener('click', () => track('cta_click', { id: el.getAttribute('data-track') }));
    });
  }

  /* ══════════════════════════════════════════════════════════
     ENQUIRY FORM
     ══════════════════════════════════════════════════════════ */
  const DRAFT_KEY = 'jaxtech_enquiry_draft';

  function collect(form) {
    const fd = new FormData(form);
    return {
      name:      (fd.get('name')     || '').toString().trim(),
      phone:     (fd.get('phone')    || '').toString().trim(),
      email:     (fd.get('email')    || '').toString().trim(),
      area:      (fd.get('area')     || '').toString().trim(),
      property:  (fd.get('property') || '').toString(),
      interests: fd.getAll('interests').map(String),
      message:   (fd.get('message')  || '').toString().trim(),
      tier:      (fd.get('tier')     || '').toString(),
      consent:   !!fd.get('consent'),
      hp:        (fd.get('company_website') || '').toString(),
      source:    (fd.get('source')   || '').toString(),
      page:      (fd.get('page')     || '').toString(),
      transcript: (fd.get('transcript') || '').toString(),
      // Turnstile injects this hidden field into the form itself once the
      // visitor passes the challenge. If the widget hasn't loaded or
      // rendered (slow connection, blocked script), this is just empty and
      // the worker skips verification rather than blocking submission.
      turnstileToken: (fd.get('cf-turnstile-response') || '').toString()
    };
  }

  function setError(id, msg) {
    const input = document.getElementById(id);
    const slot  = $('[data-err-for="' + id + '"]');
    if (input) input.classList.toggle('invalid', !!msg);
    if (slot)  slot.textContent = msg || '';
  }

  function validate(data) {
    let firstBad = null;
    const fail = (id, msg) => { setError(id, msg); if (!firstBad) firstBad = id; };

    ['f-name', 'f-phone', 'f-email', 'f-area', 'f-consent'].forEach(id => setError(id, ''));

    if (data.name.length < 2) fail('f-name', 'Please tell us your name.');

    const digits = data.phone.replace(/\D/g, '');
    if (digits.length < 9) fail('f-phone', 'Please enter a contactable number.');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) fail('f-email', 'Please check your email address.');

    if (data.area.length < 2) fail('f-area', 'Which suburb or town?');

    if (!data.consent) fail('f-consent', 'We need your okay to reply to you.');

    return firstBad;
  }

  function asPlainText(d) {
    const lines = [
      'NEW WEBSITE ENQUIRY — JAXTECH',
      '',
      'Name:      ' + d.name,
      'Phone:     ' + d.phone,
      'Email:     ' + d.email,
      'Area:      ' + d.area,
      'Property:  ' + (d.property || '—'),
      'Interests: ' + (d.interests.length ? d.interests.join(', ') : '—')
    ];
    if (d.tier) lines.push('Package:   ' + d.tier);
    lines.push('', 'Message:', d.message || '(none)');
    if (d.transcript) lines.push('', 'Tiny chat transcript:', d.transcript);
    lines.push('', '—', 'Sent from ' + (d.page || 'the Jaxtech website'));
    if (d.source) lines.push('Source: ' + d.source);
    return lines.join('\n');
  }

  /* Last-resort delivery. Builds a fully composed mailto: and WhatsApp
     message so the enquiry still reaches us if the backend is unreachable.
     Deliberately does NOT set window.location.href — that can navigate the
     page away and strand the visitor. We click a detached anchor instead,
     and always leave visible manual buttons as the real safety net. */
  function fallbackLinks(d) {
    const subject = 'Website enquiry — ' + (d.name || 'Jaxtech') + (d.area ? ' (' + d.area + ')' : '');
    return {
      mail: 'mailto:' + CONFIG.email +
            '?subject=' + encodeURIComponent(subject) +
            '&body='    + encodeURIComponent(asPlainText(d)),
      whatsapp: 'https://wa.me/' + CONFIG.whatsapp.replace(/\D/g, '') +
                '?text=' + encodeURIComponent(asPlainText(d))
    };
  }

  function tryOpen(href) {
    try {
      const a = document.createElement('a');
      a.href = href;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => a.remove(), 0);
      return true;
    } catch (e) {
      return false;
    }
  }

  function saveDraft(form) {
    try {
      const d = collect(form);
      delete d.hp;
      localStorage.setItem(DRAFT_KEY, JSON.stringify(d));
    } catch (e) { /* private mode — not important */ }
  }

  function restoreDraft(form) {
    let d;
    try { d = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null'); } catch (e) { return; }
    if (!d) return;
    ['name', 'phone', 'email', 'area', 'message'].forEach(k => {
      const el = form.elements[k];
      if (el && d[k]) el.value = d[k];
    });
    if (d.property) {
      const r = form.querySelector('input[name="property"][value="' + CSS.escape(d.property) + '"]');
      if (r) r.checked = true;
    }
    (d.interests || []).forEach(v => {
      const c = form.querySelector('input[name="interests"][value="' + CSS.escape(v) + '"]');
      if (c) c.checked = true;
    });
  }

  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
  }

  function initForm() {
    const form    = $('#enquiry-form');
    const btn     = $('#submit-btn');
    const status  = $('#form-status');
    const success = $('#form-success');
    if (!form) return;

    // Provenance — tells you which ad or post produced the lead
    const params = new URLSearchParams(window.location.search);
    const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
      .map(k => params.get(k) ? k + '=' + params.get(k) : null).filter(Boolean).join(' | ');
    const src = $('#f-source');
    if (src) src.value = utm || (document.referrer || 'direct');
    const pg = $('#f-page');
    if (pg) pg.value = window.location.href;

    restoreDraft(form);
    let started = false;
    form.addEventListener('input', () => {
      if (!started) { started = true; track('form_start', {}); }
      saveDraft(form);
    });

    // Clear an error the moment the visitor fixes it
    ['f-name', 'f-phone', 'f-email', 'f-area'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', () => { if (el.classList.contains('invalid')) setError(id, ''); });
    });
    const consent = $('#f-consent');
    if (consent) consent.addEventListener('change', () => { if (consent.checked) setError('f-consent', ''); });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = collect(form);

      // Silent bot rejection
      if (data.hp) { showSuccess(data); return; }

      const bad = validate(data);
      if (bad) {
        const el = document.getElementById(bad);
        if (el) { el.focus(); el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
        status.className = 'form-status error';
        status.textContent = 'Just a couple of things to fix above.';
        return;
      }

      btn.disabled = true;
      btn.classList.add('loading');
      $('.btn-label', btn).textContent = 'Sending…';
      status.className = 'form-status info';
      status.textContent = '';

      let delivered = false;
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 12000);
        const res = await fetch(CONFIG.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          signal: ctrl.signal
        });
        clearTimeout(timer);
        delivered = res.ok;
      } catch (err) {
        delivered = false;
      }

      btn.disabled = false;
      btn.classList.remove('loading');
      $('.btn-label', btn).textContent = 'Submit my challenge entry';

      // Turnstile tokens are single-use and expire after a few minutes —
      // reset so a resubmission (after fixing a validation error, or
      // trying again) gets a fresh one instead of silently failing.
      if (window.turnstile) { try { window.turnstile.reset(); } catch (e) {} }

      if (delivered) {
        clearDraft();
        track('enquiry_submitted', { method: 'api', area: data.area, tier: data.tier });
        showSuccess(data);
      } else {
        // Backend unreachable. Show the handover state FIRST so the visitor is
        // never left staring at a spinner, then attempt to open their mail app.
        // The draft is deliberately kept so nothing is lost either way.
        track('enquiry_submitted', { method: 'mailto_fallback', area: data.area });
        showSuccess(data, true);
        setTimeout(() => tryOpen(fallbackLinks(data).mail), 250);
      }
    });

    function showSuccess(data, viaMail) {
      window.hasSubmittedForm = true;
      form.hidden = true;
      success.hidden = false;

      // The message cap no longer applies once they're a captured lead —
      // let them keep talking to Tiny if the chat was disabled by it.
      window.tinyDepleted = false;
      const ci = document.getElementById('chat-input');
      const cs = document.getElementById('chat-send');
      if (ci) { ci.disabled = false; ci.placeholder = 'Tell Tiny...'; }
      if (cs) cs.disabled = false;

      const title = $('#success-title');
      const body  = $('#success-body');
      const sub   = $('.success-sub', success);
      const first = (data.name || '').split(' ')[0];

      if (title && first) title.textContent = 'Thanks, ' + first + ' — got it.';

      if (viaMail) {
        const links = fallbackLinks(data);

        if (body) {
          body.textContent = 'One last tap: your email app should be opening with the ' +
            'enquiry already written. If nothing happened, use a button below — ' +
            'your details are saved, so nothing is lost.';
        }
        if (sub) sub.textContent = 'Whichever you pick, the message is already filled in for you.';

        // Re-point the success buttons at the fully composed enquiry
        const mailBtn = $('.js-mail', success);
        if (mailBtn) { mailBtn.href = links.mail; mailBtn.textContent = 'Open my email app'; }

        const waBtn = $('.js-whatsapp', success);
        if (waBtn) {
          if (isPlaceholder(CONFIG.whatsapp)) {
            waBtn.remove();                       // no number configured yet
          } else {
            waBtn.href = links.whatsapp;
            waBtn.target = '_blank';
            waBtn.rel = 'noopener';
            waBtn.textContent = 'Send on WhatsApp instead';
          }
        }
      }

      success.focus();
      success.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }

  /* ── Boot ───────────────────────────────────────────────── */
  function init() {
    const y = $('#year');
    if (y) y.textContent = new Date().getFullYear();
    wireContactLinks();
    initNav();
    initMobileBar();
    initReveal();
    initPillarGlow();
    initTierLinks();
    initDomainPicker();
    initTracking();
    initForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


// V0.5 JS appended
(function(){
const modalData = window.MODAL_DATA || {};


/* modalData is scoped to this IIFE, so anything outside it — the hero
   console, for one — cannot read the catalogue. Publish the flattened
   tool names once, here, so those readouts stay tied to this object
   instead of drifting against a second hardcoded list. */
try {
    // Already supplied by catalogue.js on pages that skip modals.js.
    if (window.JAXTECH_CATALOGUE) throw 0;
    const _probe = document.createElement('div');
    const _skillKeys = Object.keys(modalData).filter(k => k.indexOf('skill_') === 0);
    const _tools = [];
    _skillKeys.forEach(k => {
        _probe.innerHTML = (modalData[k] && modalData[k].content) || '';
        Array.from(_probe.querySelectorAll('.badge'))
            .map(b => b.textContent.trim())
            .filter(Boolean)
            .forEach(n => _tools.push(n));
    });
    window.JAXTECH_CATALOGUE = { tools: _tools, domains: _skillKeys.length };
} catch (e) { /* readouts fall back to the numbers authored in the HTML */ }

function openModal(id) {
    const data = modalData[id];
    if (!data) return;
    
    document.getElementById('modal-icon').innerText = data.icon;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-body').innerHTML = data.content;
    
    const modal = document.getElementById('detail-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

window.openModal = openModal;
window.closeModal = closeModal;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.glass-card[data-modal], .arch-node[data-modal], .skill-category[data-modal], button[data-modal]').forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.getAttribute('data-modal'));
        });
    });

    const modalOverlay = document.getElementById('detail-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target.id === 'detail-modal') {
                closeModal();
            }
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/* ============================================================
   Skills Index — live search, tilt, dice spotlight
   Progressive enhancement: without JS the grid renders as before.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('skills-grid');
    const toolbar = document.getElementById('skills-toolbar');
    const meter = document.getElementById('skills-meter');
    const emptyEl = document.getElementById('skills-empty');
    const emptyTerm = document.getElementById('skills-empty-term');
    const input = document.getElementById('skill-search');
    const clearBtn = document.getElementById('skill-clear');
    const resetBtn = document.getElementById('skills-reset');
    const diceBtn = document.getElementById('skill-dice');
    const searchWrap = document.querySelector('.skills-search-wrap');
    const countEl = document.getElementById('skill-count');
    const catEl = document.getElementById('cat-count');

    if (!grid || !toolbar || !input) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Build the search index straight from modalData -----------------
    // Each category's modal body holds one <span class="badge"> per skill,
    // so the index stays in sync with the modals automatically.
    const parser = document.createElement('div');
    const cards = Array.from(grid.querySelectorAll('.skill-category[data-modal]'));

    const index = cards.map(card => {
        const id = card.getAttribute('data-modal');
        const entry = (typeof modalData !== 'undefined' && modalData[id]) || null;
        let skills = [];
        if (entry && entry.content) {
            parser.innerHTML = entry.content;
            skills = Array.from(parser.querySelectorAll('.badge'))
                .map(b => b.textContent.trim())
                .filter(Boolean);
        }
        const heading = card.querySelector('h4');
        const title = heading ? heading.textContent.trim() : id;

        // Per-card count badge + container for matched skill chips
        const badge = document.createElement('div');
        badge.className = 'skill-count-badge';
        badge.textContent = skills.length ? skills.length : '';
        card.appendChild(badge);

        const hits = document.createElement('div');
        hits.className = 'skill-hits';
        card.appendChild(hits);

        return { card, title, skills, hits, haystack: (title + ' ' + skills.join(' ')).toLowerCase() };
    });

    const totalSkills = index.reduce((n, e) => n + e.skills.length, 0);

    // Enhancement is live — reveal the controls.
    toolbar.hidden = false;
    meter.hidden = false;
    grid.classList.add('enhanced');
    catEl.textContent = index.length;

    // Keep the hardcoded count in the status note honest — it's authored in the
    // HTML so it's correct without JS, but modalData is the real source of truth.
    const inlineTotal = document.getElementById('skills-total-inline');
    if (inlineTotal && String(totalSkills) !== inlineTotal.textContent.trim()) {
        inlineTotal.textContent = totalSkills;
    }
    const inlineTotalAbout = document.getElementById('skills-total-inline-about');
    if (inlineTotalAbout && String(totalSkills) !== inlineTotalAbout.textContent.trim()) {
        inlineTotalAbout.textContent = totalSkills;
    }

    // ---- Staggered reveal + count-up on first scroll into view ----------
    let counted = false;
    const countUp = (el, target) => {
        if (reduceMotion) { el.textContent = target; return; }
        const duration = 900;
        const start = performance.now();
        const tick = now => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            index.forEach((e, i) => {
                setTimeout(() => e.card.classList.add('revealed'), reduceMotion ? 0 : i * 45);
            });
            // Only run the reveal count-up if the user hasn't already filtered.
            if (!counted && !input.value.trim()) { counted = true; countUp(countEl, totalSkills); }
            obs.disconnect();
        });
    }, { threshold: 0.1 });
    revealObserver.observe(grid);

    // ---- Live filtering --------------------------------------------------
    const escapeHtml = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const MAX_CHIPS = 6;
    const PREVIEW_CHIPS = 4;

    const applyFilter = () => {
        const q = input.value.trim().toLowerCase();
        searchWrap.classList.toggle('has-query', q.length > 0);

        let visibleCats = 0;
        let visibleSkills = 0;

        index.forEach(e => {
            e.hits.innerHTML = '';

            if (!q) {
                e.card.classList.remove('filtered-out');
                visibleCats++;
                visibleSkills += e.skills.length;
                // Idle state: surface real skill names rather than leaving the
                // card as a title and an emoji. Seeing the actual names is what
                // makes the total believable without anyone opening a modal.
                e.skills.slice(0, PREVIEW_CHIPS).forEach(s => {
                    const chip = document.createElement('span');
                    chip.className = 'skill-hit preview';
                    chip.textContent = s;
                    e.hits.appendChild(chip);
                });
                const rest = e.skills.length - PREVIEW_CHIPS;
                if (rest > 0) {
                    const more = document.createElement('span');
                    more.className = 'skill-hit more';
                    more.textContent = '+' + rest;
                    e.hits.appendChild(more);
                }
                return;
            }

            const titleMatch = e.title.toLowerCase().includes(q);
            const matched = e.skills.filter(s => s.toLowerCase().includes(q));
            const isMatch = titleMatch || matched.length > 0;

            e.card.classList.toggle('filtered-out', !isMatch);
            if (!isMatch) return;

            visibleCats++;
            visibleSkills += matched.length || (titleMatch ? e.skills.length : 0);

            // Show the actual matching skill names, with the query highlighted.
            const shown = matched.slice(0, MAX_CHIPS);
            shown.forEach((s, i) => {
                const chip = document.createElement('span');
                chip.className = 'skill-hit';
                chip.style.animationDelay = (i * 35) + 'ms';
                const at = s.toLowerCase().indexOf(q);
                chip.innerHTML = at === -1 ? escapeHtml(s)
                    : escapeHtml(s.slice(0, at)) + '<mark>' + escapeHtml(s.slice(at, at + q.length)) + '</mark>' + escapeHtml(s.slice(at + q.length));
                e.hits.appendChild(chip);
            });
            if (matched.length > MAX_CHIPS) {
                const more = document.createElement('span');
                more.className = 'skill-hit more';
                more.textContent = '+' + (matched.length - MAX_CHIPS) + ' more';
                e.hits.appendChild(more);
            }
        });

        countEl.textContent = visibleSkills;
        catEl.textContent = visibleCats;

        const noResults = visibleCats === 0;
        emptyEl.hidden = !noResults;
        if (noResults) emptyTerm.textContent = '"' + input.value.trim() + '"';
    };

    let debounce;
    input.addEventListener('input', () => {
        clearTimeout(debounce);
        debounce = setTimeout(applyFilter, 90);
    });

    const clearSearch = () => { input.value = ''; applyFilter(); input.focus(); };
    clearBtn.addEventListener('click', clearSearch);
    resetBtn.addEventListener('click', clearSearch);

    // ---- Keyboard: "/" to search, Escape to close modal or clear --------
    document.addEventListener('keydown', e => {
        if (e.key === '/' && document.activeElement !== input) {
            e.preventDefault();
            input.focus();
            input.select();
        } else if (e.key === 'Escape') {
            const modal = document.getElementById('detail-modal');
            if (modal && modal.classList.contains('active')) {
                closeModal();
            } else if (input.value) {
                clearSearch();
            }
        }
    });

    // ---- Pointer-tracking glow + 3D tilt --------------------------------
    if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
        index.forEach(({ card }) => {
            card.addEventListener('pointermove', ev => {
                const r = card.getBoundingClientRect();
                const px = (ev.clientX - r.left) / r.width;
                const py = (ev.clientY - r.top) / r.height;
                card.style.setProperty('--mx', (px * 100) + '%');
                card.style.setProperty('--my', (py * 100) + '%');
                card.style.transform =
                    'perspective(1200px) rotateX(' + ((0.5 - py) * 9).toFixed(2) + 'deg) rotateY(' +
                    ((px - 0.5) * 9).toFixed(2) + 'deg) translateY(-4px)';
            });
            card.addEventListener('pointerleave', () => { card.style.transform = ''; });
        });
    }

    // ---- Dice: spotlight a random category ------------------------------
    let lastPick = -1;
    diceBtn.addEventListener('click', () => {
        const pool = index.filter(e => !e.card.classList.contains('filtered-out'));
        if (!pool.length) return;

        let i = Math.floor(Math.random() * pool.length);
        if (pool.length > 1 && i === lastPick) i = (i + 1) % pool.length;
        lastPick = i;
        const pick = pool[i];

        diceBtn.classList.add('rolling');
        setTimeout(() => diceBtn.classList.remove('rolling'), 520);

        pick.card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        pick.card.classList.add('spotlight');
        setTimeout(() => pick.card.classList.remove('spotlight'), 1100);
        setTimeout(() => openModal(pick.card.getAttribute('data-modal')), reduceMotion ? 0 : 700);
    });

    // Cards are interactive — make that true for keyboard users too.
    index.forEach(({ card, title, skills }) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', title + ' — ' + skills.length + ' skills');
        card.addEventListener('keydown', ev => {
            if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault();
                openModal(card.getAttribute('data-modal'));
            }
        });
    });

    applyFilter();
});

})();


// Chat logic
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatHistory = document.getElementById('chat-history');

function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `hv-msg ${sender}`;
    msg.textContent = text;
    if (chatHistory) {
        chatHistory.appendChild(msg);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}

// Some South African mobile carriers' default DNS blocks the shared
// *.workers.dev domain the chat API lives on, so a fetch to it never even
// reaches the server — it just throws. Rather than leave that visitor
// staring at "Network error", hand them straight to WhatsApp or Telegram.
// Reads hrefs already wired by wireContactLinks() elsewhere on the page,
// so this stays correct if a number/handle ever changes there.
function appendUnreachableMessage() {
    const msg = document.createElement('div');
    msg.className = 'hv-msg them unreachable';
    const wa = document.querySelector('.js-whatsapp');
    const tg = document.querySelector('.js-telegram');
    const link = (el, label) => el && el.href
        ? `<a href="${el.href}" target="${el.target || '_self'}" rel="noopener">${label}</a>`
        : null;
    const options = [link(wa, 'WhatsApp'), link(tg, 'Telegram')].filter(Boolean);
    msg.innerHTML = options.length
        ? `Can't reach Tiny from this network right now — some SA mobile networks block this connection. Message us directly on ${options.join(' or ')} instead, or scroll down to submit the form.`
        : `Can't reach Tiny from this network right now. Scroll down to submit the form below instead — it will still reach us.`;
    if (chatHistory) {
        chatHistory.appendChild(msg);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}

// Rotating status lines shown while Tiny is working on a reply — same idea
// as the CLI-style "thinking" spinners in tools like Claude Code, tuned to
// Tiny's own voice.
const TINY_THINKING_LINES = [
    'Thinking…', 'Noodling on it…', 'Crunching the details…',
    'Consulting the manual…', 'Weighing the options…', 'Connecting the dots…',
    'Reticulating splines…', 'Warming up the circuits…', 'Untangling the wiring…',
    'Checking the load-shedding schedule…', 'Percolating…', 'Assembling a reply…',
    'Doing the sums…', 'Fetching a good answer…', 'Reading between the lines…',
];

function startThinking() {
    const msg = document.createElement('div');
    msg.className = 'hv-msg them thinking';
    const textEl = document.createElement('span');
    textEl.className = 'thinking-text';
    const dotsEl = document.createElement('span');
    dotsEl.className = 'thinking-dots';
    dotsEl.innerHTML = '<i></i><i></i><i></i>';
    msg.append(textEl, dotsEl);

    if (chatHistory) {
        chatHistory.appendChild(msg);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    let last = Math.floor(Math.random() * TINY_THINKING_LINES.length);
    textEl.textContent = TINY_THINKING_LINES[last];
    const cycle = setInterval(() => {
        let next = last;
        while (next === last) next = Math.floor(Math.random() * TINY_THINKING_LINES.length);
        last = next;
        textEl.textContent = TINY_THINKING_LINES[next];
    }, 1700);

    return { remove() { clearInterval(cycle); msg.remove(); } };
}

// Keeps the enquiry form's hidden transcript field current so whoever reads
// the lead email sees the actual Tiny conversation, not just whatever the
// visitor typed into the message box.
function formatTranscript(convo) {
    if (!convo || !convo.length) return '';
    return convo.map(m => (m.role === 'user' ? 'Visitor: ' : 'Tiny: ') + m.content).join('\n');
}

function syncTranscriptField() {
    const field = document.getElementById('f-transcript');
    if (field) field.value = formatTranscript(window.tinyConvo);
}

// Ends the free preview once the message budget is spent: tells the
// visitor, disables the input so there's nowhere else to go, and sends
// them to the enquiry form with the transcript already attached.
function depleteChat() {
    if (window.tinyDepleted) return;
    window.tinyDepleted = true;
    appendMessage("That's the free preview — pop your details in the form below and I'll pick up exactly where we left off.", 'them');
    syncTranscriptField();
    if (chatInput) {
        chatInput.disabled = true;
        chatInput.placeholder = 'Continue in the form below ↓';
    }
    if (chatSend) chatSend.disabled = true;
    const formSection = document.getElementById('enquire');
    if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
}

async function sendChatMessage() {
    if (!chatInput || !chatHistory) return;

    if (!window.hasSubmittedForm && window.chatMessagesSent >= 5) {
        depleteChat();
        return;
    }

    // The visitor's very first message answers the opening question
    // ("what would be the first task you'd delegate?"). It still goes to
    // the real model — the worker just swaps in a prompt built for an
    // arbitrary hypothetical task instead of the Jaxtech-grounded one.
    const isOpener = !window.chatMessagesSent;
    window.chatMessagesSent = (window.chatMessagesSent || 0) + 1;

    const text = chatInput.value.trim();
    if (!text) return;

    // Keep the first delegated task in the browser until the visitor chooses
    // to submit it. This avoids sending form details without consent.
    if (isOpener) {
        window.tinyChallengeTask = text;
        const messageField = document.getElementById('f-message');
        const captured = document.getElementById('task-captured');
        if (messageField && !messageField.value.trim()) {
            messageField.value = `My task for Tiny: ${text}`;
            try { messageField.dispatchEvent(new Event('input', { bubbles: true })); } catch (e) {}
        }
        if (captured) captured.hidden = false;
    }

    appendMessage(text, 'me');
    chatInput.value = '';
    chatInput.disabled = true;
    if (chatSend) chatSend.disabled = true;
    const thinking = startThinking();

    // Tiny needs the actual conversation to hold a thread across turns —
    // e.g. remembering its own clarifying question and the task it was
    // asked about — instead of answering each message with no memory of
    // what came before.
    window.tinyConvo = window.tinyConvo || [];
    const history = window.tinyConvo.slice(-8);

    try {
        const response = await fetch(API_ORIGIN + '/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, opener: isOpener, history })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.reply) {
                // The worker already has an answer (AI or fallback) — show it now.
                // pending_id may still be set alongside it so a human can later
                // override via the admin panel, but there's nothing to poll for yet.
                thinking.remove();
                appendMessage(data.reply, 'them');
                window.tinyConvo.push({ role: 'user', content: text }, { role: 'assistant', content: data.reply });
                syncTranscriptField();
            } else if (data.pending_id) {
                // No immediate answer — poll until a human replies.
                let attempts = 0;
                const pollInterval = setInterval(async () => {
                    attempts++;
                    if (attempts > 30) {
                        clearInterval(pollInterval);
                        thinking.remove();
                        appendMessage("Sorry, I took too long to think. Please try again.", 'them');
                        return;
                    }
                    try {
                        const pollRes = await fetch(`${API_ORIGIN}/api/chat-poll?id=${data.pending_id}`);
                        if (pollRes.ok) {
                            const pollData = await pollRes.json();
                            if (pollData.reply) {
                                clearInterval(pollInterval);
                                thinking.remove();
                                appendMessage(pollData.reply, 'them');
                                window.tinyConvo.push({ role: 'user', content: text }, { role: 'assistant', content: pollData.reply });
                                syncTranscriptField();
                            }
                        }
                    } catch (e) {
                        console.error("Polling error:", e);
                    }
                }, 1000); // check every second
            } else {
                thinking.remove();
                appendMessage("Message received by Tiny test agent.", 'them');
            }
        } else {
            thinking.remove();
            appendUnreachableMessage();
        }
    } catch (e) {
        thinking.remove();
        appendUnreachableMessage();
    } finally {
        if (!window.hasSubmittedForm && window.chatMessagesSent >= 5) {
            depleteChat();
        } else {
            chatInput.disabled = false;
            if (chatSend) chatSend.disabled = false;
            chatInput.focus();
        }
    }
}

if (chatSend) {
    chatSend.addEventListener('click', sendChatMessage);
}
if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
}


/* ============================================================
   AGENT RUN SHOWCASE
   Plays back an agent run — task, plan, tool calls, result —
   so visitors see what an agent does rather than reading about
   it. Purely presentational; no network calls.
   ============================================================ */
(function () {
  'use strict';

  const RUNS = [
    {
      task: 'Every Monday, pull last week’s sales, compare each rep against target, and email the team a summary.',
      steps: [
        { text: 'Pull last week’s closed deals from the CRM',
          tools: [{ name: 'crm.query', arg: 'deals[status=won]', ms: 380 }] },
        { text: 'Group by rep and region, total the values',
          tools: [{ name: 'table.aggregate', arg: 'by=rep,region', ms: 90 }] },
        { text: 'Compare each rep against their monthly target',
          tools: [{ name: 'sheets.read', arg: 'targets!A2:D40', ms: 240 },
                  { name: 'table.join', arg: 'on=rep_id', ms: 60 }] },
        { text: 'Write the summary and send it to the team',
          tools: [{ name: 'doc.compose', arg: 'weekly_summary', ms: 720 },
                  { name: 'mail.send', arg: 'to=sales@… (4)', ms: 310 }] }
      ],
      result: { title: 'Report sent — 4 recipients, 2.1s',
                body: 'Ran at 07:00 without anyone opening a laptop. Two reps flagged as behind target, with the shortfall shown in rands.' }
    },
    {
      task: 'Take the supplier invoices out of my inbox, check them against the purchase orders, and load them into the accounting system.',
      steps: [
        { text: 'Find unread invoice attachments in the inbox',
          tools: [{ name: 'mail.search', arg: 'has:pdf is:unread', ms: 210 }] },
        { text: 'Read each PDF — supplier, line items, VAT, total',
          tools: [{ name: 'pdf.extract', arg: '× 20 documents', ms: 1450 }] },
        { text: 'Match every invoice to its purchase order',
          tools: [{ name: 'erp.lookup', arg: 'po_number', ms: 430 },
                  { name: 'rules.verify', arg: 'total ± tolerance', ms: 70 }] },
        { text: 'Load the matches, hold anything that disagrees',
          tools: [{ name: 'erp.create', arg: 'bills × 18', ms: 640 },
                  { name: 'queue.flag', arg: 'review × 2', ms: 50 }] }
      ],
      result: { title: '18 invoices captured, 2 held for you',
                body: 'The two held back disagreed with their purchase order by more than the tolerance. Nothing was posted without a match — that is the point.' }
    },
    {
      task: 'When the grid drops, protect the battery and tell me what it cost me — without waiting for me to do anything.',
      steps: [
        { text: 'Detect the transfer from grid to inverter',
          tools: [{ name: 'home-assistant-api', arg: 'states/binary_sensor.grid', ms: 40 }] },
        { text: 'Shed the heavy loads before the battery drains',
          tools: [{ name: 'home-assistant-api', arg: 'switch.turn_off · geyser', ms: 60 },
                  { name: 'home-assistant-api', arg: 'switch.turn_off · pool_pump', ms: 55 }] },
        { text: 'Keep watching cameras and gates locally',
          tools: [{ name: 'home-assistant-api', arg: 'states/binary_sensor.perimeter × 4', ms: 120 }] },
        { text: 'When power returns, reschedule and report',
          tools: [{ name: 'home-assistant-api', arg: 'automation.trigger · geyser_cheap', ms: 80 },
                  { name: 'home-assistant-api', arg: 'notify.whatsapp', ms: 290 }] },
        { text: 'Answer out loud when you ask what happened',
          tools: [{ name: 'home-assistant-voice-pipelines', arg: 'intent · outage_report', ms: 210 }] }
      ],
      result: { title: 'Battery held at 61% — outage survived',
                body: 'Geyser reheated after tariff dropped instead of on the battery. You got one WhatsApp when it was over, not five alerts during it.' }
    },
    {
      task: 'I’m meeting a prospective client on Thursday. Tell me what I should already know before I walk in.',
      steps: [
        { text: 'Map the company — registration, footprint, who owns it',
          tools: [{ name: 'domain-intel', arg: 'company.co.za', ms: 420 },
                  { name: 'duckduckgo-search', arg: 'company + directors', ms: 280 }] },
        { text: 'Pull recent news and anything public that changed',
          tools: [{ name: 'blogwatcher', arg: 'mentions, 90 days', ms: 350 },
                  { name: 'parallel-cli', arg: 'fan-out × 12 sources', ms: 610 }] },
        { text: 'Check the people who’ll be in the room',
          tools: [{ name: 'osint-investigation', arg: 'attendees × 3', ms: 540 }] },
        { text: 'Write it into something readable on the drive there',
          tools: [{ name: 'docx', arg: 'brief_thursday', ms: 300 }] }
      ],
      result: { title: 'Two-page brief, 14 sources cited',
                body: 'Includes the three things that changed at the company this quarter, and which person to ask about each one. Every claim links back to where it came from.' }
    },
    {
      task: 'Take this product idea and put a real landing page live today so I can start sending people to it.',
      steps: [
        { text: 'Turn the brief into a layout and a visual direction',
          tools: [{ name: 'frontend-design', arg: 'brief → layout', ms: 880 }] },
        { text: 'Build the page properly, not a template',
          tools: [{ name: 'web-artifacts-builder', arg: 'landing/index', ms: 1240 }] },
        { text: 'Check it on the widths people actually use',
          tools: [{ name: 'webapp-testing', arg: '390px, 1440px', ms: 760 }] },
        { text: 'Put it on a URL you can share',
          tools: [{ name: 'cloudflare-temporary-deploy', arg: 'preview', ms: 410 }] }
      ],
      result: { title: 'Live on a URL — 3.4s of agent time',
                body: 'Checked at phone and desktop widths before it went up. Change a line of copy and it redeploys itself; you never open a dashboard.' }
    },
    {
      task: 'We go live next month. Find what an attacker would find first, and tell me what to fix in what order.',
      steps: [
        { text: 'Model what someone would actually try against us',
          tools: [{ name: 'security-threat-model', arg: 'surface map', ms: 520 }] },
        { text: 'Probe the public surface the way they would',
          tools: [{ name: 'web-pentest', arg: 'authenticated + anon', ms: 1680 }] },
        { text: 'Check the dependencies for known trouble',
          tools: [{ name: 'oss-forensics', arg: 'lockfile × 214 pkgs', ms: 740 }] },
        { text: 'Rank it by what gets reached first',
          tools: [{ name: 'security-best-practices', arg: 'report', ms: 390 }] }
      ],
      result: { title: '2 findings worth acting on today',
                body: 'Ranked by what an attacker reaches first, not by scanner severity — which is why the list is short. Written in plain language, not a raw scan log.' }
    },
    {
      task: 'Build me a valuation pack for this acquisition — comparables, a DCF, and something I can actually present.',
      steps: [
        { text: 'Pull comparable companies and their trading multiples',
          tools: [{ name: 'comps-analysis', arg: 'peer set × 9', ms: 640 }] },
        { text: 'Build the three statements from the financials',
          tools: [{ name: '3-statement-model', arg: 'FY22–FY26', ms: 920 },
                  { name: 'excel-author', arg: 'model.xlsx', ms: 380 }] },
        { text: 'Run the DCF and stress the assumptions',
          tools: [{ name: 'dcf-model', arg: 'wacc ± 150bps', ms: 780 }] },
        { text: 'Assemble it into a deck for the meeting',
          tools: [{ name: 'pptx-author', arg: 'valuation_pack', ms: 450 }] }
      ],
      result: { title: 'Valuation range, assumptions visible',
                body: 'Every number traces back to a source you can open. The sensitivity table shows exactly where the range stops holding — which is the part people argue about.' }
    },
    {
      task: 'I want it answering from our own documents and procedures, not from whatever it read on the internet.',
      steps: [
        { text: 'Index your documents so they can be retrieved properly',
          tools: [{ name: 'chroma', arg: 'embed × 4,180 chunks', ms: 1120 }] },
        { text: 'Fine-tune on the examples that represent the job',
          tools: [{ name: 'fine-tuning-with-trl', arg: 'lora, 3 epochs', ms: 2400 }] },
        { text: 'Score it against questions it has not seen',
          tools: [{ name: 'evaluating-llms-harness', arg: 'held-out × 120', ms: 890 }] },
        { text: 'Deploy it where you want it to run',
          tools: [{ name: 'huggingface-accelerate', arg: 'quantise + serve', ms: 530 }] }
      ],
      result: { title: 'Grounded in your material, and measured',
                body: 'Scored before and after, so the improvement is a number rather than a feeling. Can run on hardware you own if the documents are sensitive.' }
    },
    {
      task: 'We’re launching this product. I need the visuals, the explainer and something for the video — in one style.',
      steps: [
        { text: 'Settle the campaign line and the key messages',
          tools: [{ name: 'claude-design', arg: 'direction × 3', ms: 480 }] },
        { text: 'Generate the product imagery in that direction',
          tools: [{ name: 'comfyui', arg: 'hero + 6 variants', ms: 1850 }] },
        { text: 'Build the graphic that explains how it works',
          tools: [{ name: 'baoyu-infographic', arg: 'how_it_works', ms: 720 }] },
        { text: 'Cut an audio bed for the launch video',
          tools: [{ name: 'audiocraft-audio-generation', arg: '30s bed', ms: 960 }] }
      ],
      result: { title: 'Full asset set in one visual language',
                body: 'Imagery, an explainer graphic and audio that look and sound like they belong together — ready to hand to whoever runs your channels.' }
    },
    {
      task: 'Review this repository like a senior engineer would, and get the build passing again.',
      steps: [
        { text: 'Read the repository and map how it fits together',
          tools: [{ name: 'codebase-inspection', arg: '412 files', ms: 1340 }] },
        { text: 'Review the open pull request properly',
          tools: [{ name: 'github-code-review', arg: 'PR #128', ms: 880 }] },
        { text: 'Work out why the build is actually failing',
          tools: [{ name: 'gh-fix-ci', arg: 'reproduce locally', ms: 620 }] },
        { text: 'Push the fix and answer the review threads',
          tools: [{ name: 'github-pr-workflow', arg: 'push + reply × 6', ms: 410 }] }
      ],
      result: { title: 'CI green, 6 comments addressed',
                body: 'Each comment answered on its own thread with the reasoning, so the author can disagree with something specific instead of a wall of changes.' }
    }
  ];

  const panel = document.getElementById('run-panel');
  if (!panel) return;

  const $id = (s) => document.getElementById(s);
  const elTask = $id('run-task'), elSteps = $id('run-steps'), elTools = $id('run-tools'),
        elResult = $id('run-result'), elRTitle = $id('run-result-title'),
        elRBody = $id('run-result-body'), elClock = $id('run-clock'),
        elCount = $id('run-stepcount');
  const elIdle = $id('run-idle'), elBody = $id('run-body'), elBarTitle = $id('run-bar-title');
  const cards = Array.from(document.querySelectorAll('.run-card'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let token = 0;           // cancels an in-flight run when we switch
  let current = -1;
  let clockTimer = null;

  const sleep = (ms, my) => new Promise(res => setTimeout(() => res(my === token), ms));

  function selectCard(i) {
    cards.forEach((c, n) => c.classList.toggle('playing', n === i));
    const label = cards[i] && cards[i].querySelector('b');
    if (elBarTitle) elBarTitle.textContent = label ? 'tiny — ' + label.textContent.toLowerCase() : 'tiny — idle';
  }

  function progress(pct) {
    const c = cards[current];
    if (c) c.style.setProperty('--run-progress', pct + '%');
  }

  function startClock(my) {
    const t0 = performance.now();
    clearInterval(clockTimer);
    clockTimer = setInterval(() => {
      if (my !== token) return clearInterval(clockTimer);
      elClock.textContent = ((performance.now() - t0) / 1000).toFixed(1) + 's';
    }, 100);
  }

  function reset() {
    elSteps.innerHTML = ''; elTools.innerHTML = '';
    elResult.classList.remove('in');
    elTask.textContent = ''; elClock.textContent = '0.0s';
    elCount.textContent = ''; progress(0);
  }

  function stepEl(text, n) {
    const li = document.createElement('li');
    li.className = 'run-step';
    li.innerHTML = '<span class="run-step-mark">' + n + '</span><span></span>';
    li.lastChild.textContent = text;
    return li;
  }

  function toolEl(t) {
    const row = document.createElement('div');
    row.className = 'run-tool';
    const name = document.createElement('span');
    name.className = 'run-tool-name';
    name.textContent = t.name;
    const arg = document.createElement('em');
    arg.textContent = '  ' + t.arg;
    name.appendChild(arg);
    const ms = document.createElement('span');
    ms.className = 'run-tool-ms';
    const st = document.createElement('span');
    st.className = 'run-tool-state';
    row.append(name, ms, st);
    return { row, ms };
  }

  /* Render the finished state instantly — used for reduced motion. */
  function renderStatic(run) {
    reset();
    elTask.textContent = run.task;
    elCount.textContent = run.steps.length + ' steps';
    run.steps.forEach((s, i) => {
      const li = stepEl(s.text, i + 1);
      li.classList.add('in', 'done');
      li.querySelector('.run-step-mark').textContent = '✓';
      elSteps.appendChild(li);
      s.tools.forEach(t => {
        const { row, ms } = toolEl(t);
        row.classList.add('in', 'ok');
        ms.textContent = t.ms + 'ms';
        elTools.appendChild(row);
      });
    });
    const total = run.steps.reduce((n, s) => n + s.tools.reduce((m, t) => m + t.ms, 0), 0);
    elClock.textContent = (total / 1000).toFixed(1) + 's';
    elRTitle.textContent = run.result.title;
    elRBody.textContent = run.result.body;
    elResult.classList.add('in');
    progress(100);
  }

  async function play(i) {
    const my = ++token;
    if (current !== -1 && cards[current]) cards[current].style.removeProperty('--run-progress');
    current = i;
    selectCard(i);
    // First click swaps the idle poster out for the console proper.
    if (elIdle) elIdle.hidden = true;
    if (elBody) elBody.hidden = false;
    const run = RUNS[i];

    if (reduce) { renderStatic(run); return; }

    reset();
    startClock(my);

    // 1 — type the task in
    const caret = document.createElement('span');
    caret.className = 'run-caret';
    elTask.appendChild(caret);
    for (let c = 0; c < run.task.length; c++) {
      if (!(await sleep(12, my))) return;
      caret.insertAdjacentText('beforebegin', run.task[c]);
    }
    if (!(await sleep(280, my))) return;
    caret.remove();

    // 2 — reveal the plan
    elCount.textContent = run.steps.length + ' steps';
    const lis = run.steps.map((s, n) => {
      const li = stepEl(s.text, n + 1);
      elSteps.appendChild(li);
      return li;
    });
    for (const li of lis) {
      if (!(await sleep(110, my))) return;
      li.classList.add('in');
    }
    if (!(await sleep(320, my))) return;

    // 3 — work each step, firing its tool calls
    const totalTools = run.steps.reduce((n, s) => n + s.tools.length, 0);
    let doneTools = 0;

    for (let n = 0; n < run.steps.length; n++) {
      if (my !== token) return;
      const li = lis[n], mark = li.querySelector('.run-step-mark');
      li.classList.add('active'); mark.textContent = '';

      for (const t of run.steps[n].tools) {
        const { row, ms } = toolEl(t);
        elTools.appendChild(row);
        if (!(await sleep(60, my))) return;
        row.classList.add('in', 'running');
        // Compress real latency into something watchable
        if (!(await sleep(Math.min(360, 140 + t.ms * 0.28), my))) return;
        row.classList.remove('running'); row.classList.add('ok');
        ms.textContent = t.ms + 'ms';
        doneTools++;
        progress(Math.round((doneTools / totalTools) * 92));
      }

      li.classList.remove('active'); li.classList.add('done');
      mark.textContent = '✓';
      if (!(await sleep(180, my))) return;
    }

    // 4 — land the result
    if (!(await sleep(260, my))) return;
    elRTitle.textContent = run.result.title;
    elRBody.textContent = run.result.body;
    elResult.classList.add('in');
    progress(100);
    clearInterval(clockTimer);
    // Stops here on purpose. Nothing auto-advances — the next run is the
    // visitor's decision, same as the first one was.
    if (cards[i]) cards[i].classList.add('done');
  }

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      play(i);
      // On narrow screens the panel sits below ten cards, so bring it to them.
      const r = panel.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight) {
        panel.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
      }
    });
  });

  // Never auto-starts — a run is always something the visitor asked for.
  // We only listen in order to stop a run that has scrolled out of sight.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting || current === -1) return;
      token++;                      // cancel the in-flight timeline
      clearInterval(clockTimer);
    }, { threshold: 0.05 }).observe(panel);
  }
})();

/* ============================================================
   AGENT CONSOLE — hero telemetry.
   Keeps the console's readouts honest: the counters come from
   the same modalData the skills index is built from, and the
   status pill reflects what the chat is actually doing.
   ============================================================ */
(function () {
  'use strict';

  const console_ = document.getElementById('agent-console');
  if (!console_) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Real tool names + counts, published by the catalogue IIFE ----
     modalData itself is out of reach from here; see the export beside it. */
  const catalogue = window.JAXTECH_CATALOGUE || { tools: [], domains: 0 };
  const tools = catalogue.tools;
  const domains = catalogue.domains;

  const setNum = (id, n) => {
    const el = document.getElementById(id);
    if (el && n > 0) el.textContent = n;
  };
  setNum('ac-skills', tools.length);
  setNum('ac-domains', domains);

  /* ---- Cycle the armed-tool readout --------------------------------
     Shows that the breadth below is on hand right now, not a brochure. */
  const toolEl = document.getElementById('ac-tool');
  if (toolEl && tools.length && !reduce) {
    // Start somewhere arbitrary so two visitors don't see the same order.
    let i = Math.floor(Math.random() * tools.length);
    toolEl.textContent = tools[i];
    setInterval(() => {
      i = (i + 1) % tools.length;
      toolEl.textContent = tools[i];
      // Re-trigger the swap animation.
      toolEl.style.animation = 'none';
      void toolEl.offsetWidth;
      toolEl.style.animation = '';
    }, 2200);
  }

  /* ---- Reflect real work in the status pill ------------------------
     The chat code owns the thinking indicator, so rather than reaching
     into it we just watch the transcript for one appearing. */
  const feed = document.getElementById('chat-history');
  const stateEl = document.getElementById('ac-state');
  if (feed && stateEl && 'MutationObserver' in window) {
    const label = () => {
      const busy = !!feed.querySelector('.thinking');
      console_.classList.toggle('working', busy);
      const text = busy ? 'Working' : 'Operational';
      if (stateEl.lastChild && stateEl.lastChild.nodeType === 3) {
        stateEl.lastChild.nodeValue = text;
      }
    };
    new MutationObserver(label).observe(feed, { childList: true, subtree: true });
  }
})();

/* ============================================================
   CHALLENGE LIFECYCLE
   The challenge has a closing date, and the page around it was
   written as though it never would. Rather than leave a dead
   competition advertised on the homepage, the copy that depends
   on the date is set here from the date itself.

   Everything defaults to the neutral, always-true wording in the
   HTML. If this never runs, the page understates the campaign —
   it never advertises something that has already ended.
   ============================================================ */
(function () {
  'use strict';

  // 31 August 2026, end of day, South African Standard Time (UTC+2).
  const CLOSES = new Date('2026-08-31T23:59:59+02:00');
  const open = Date.now() <= CLOSES.getTime();

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (el && text) el.textContent = text;
  };

  const status = document.getElementById('challenge-status');
  if (status) {
    const days = Math.ceil((CLOSES.getTime() - Date.now()) / 86400000);
    status.textContent = open
      ? (days <= 14
          ? `Open now — ${days} day${days === 1 ? '' : 's'} left to enter`
          : 'Open for entries now')
      : 'Entries for this round have closed. Tasks are still welcome — they are quoted as normal work.';
    status.classList.toggle('is-closed', !open);
    status.hidden = false;
  }

  // Once it has closed, the enquiry form should stop calling itself an entry.
  if (!open) {
    set('enquire-kicker', 'Tell us about the task');
    set('enquire-title', 'What would you hand over?');
    set('enquire-lede', 'Your conversation with Tiny is attached automatically. Add your details and what solving this would change for you.');
    const label = document.querySelector('#submit-btn .btn-label');
    if (label) label.textContent = 'Send my enquiry';
  }
})();
