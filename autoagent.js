/* AutoAgent page demos — all client-side, sample data only.
   Each demo guards for missing elements so the shared script.js
   never breaks if markup changes. */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Demo 1: week rebalance simulator ───────────────────
     Opening counts are the real pre-flight numbers from a live
     rebalance (11 Oct 2026). Target: 20 meaningful follow-ups
     per working day; remainder parks on a catch-up Friday. */
  (function rebalance() {
    var play = document.getElementById('rb-play');
    var wrap = document.getElementById('rb-days');
    var log = document.getElementById('rb-log');
    var summary = document.getElementById('rb-summary');
    if (!play || !wrap || !log) return;

    var TARGET = 20;
    var DAYS = [
      { d: 'Mon', n: 4 }, { d: 'Tue', n: 10 }, { d: 'Wed', n: 35 },
      { d: 'Thu', n: 0 }, { d: 'Fri', n: 58 }
    ];
    var TIERS = ['HOT', 'WARM', 'MILD', 'WARM', 'HOT', 'MILD'];
    var MAX = 58;

    function row(day, over) {
      var r = document.createElement('div');
      r.className = 'rb-day' + (over ? ' over' : '');
      r.innerHTML = '<b></b><div class="rb-track"><i></i></div><output></output>';
      r.querySelector('b').textContent = day;
      wrap.appendChild(r);
      return r;
    }
    var rows = {};
    DAYS.forEach(function (x) { rows[x.d] = row(x.d, x.n > TARGET); });

    function paint(counts) {
      Object.keys(counts).forEach(function (d) {
        var r = rows[d];
        if (!r) return;
        r.querySelector('output').textContent = counts[d];
        r.querySelector('i').style.width = Math.min(100, counts[d] / MAX * 100) + '%';
        r.classList.toggle('over', counts[d] > TARGET);
      });
    }
    function say(html) {
      var div = document.createElement('div');
      div.innerHTML = html;
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    }
    var counts0 = {};
    DAYS.forEach(function (x) { counts0[x.d] = x.n; });
    paint(counts0);

    // Build the move list deterministically.
    function plan() {
      var c = {}, moves = [], ti = 0;
      DAYS.forEach(function (x) { c[x.d] = x.n; });
      for (;;) {
        var src = null, dst = null, sMax = TARGET, dMin = TARGET;
        Object.keys(c).forEach(function (d) {
          if (c[d] > sMax) { sMax = c[d]; src = d; }
          if (c[d] < dMin) { dMin = c[d]; dst = d; }
        });
        if (!src || !dst) break;
        c[src]--; c[dst]++;
        moves.push({ from: src, to: dst, tier: TIERS[ti++ % TIERS.length] });
      }
      var leftover = 0;
      Object.keys(c).forEach(function (d) { leftover += Math.max(0, c[d] - TARGET); });
      return { moves: moves, end: c, leftover: leftover };
    }

    var running = false;
    play.addEventListener('click', function () {
      if (running) return;
      running = true;
      play.disabled = true;
      log.innerHTML = '';
      if (summary) summary.hidden = true;
      var p = plan();
      paint(counts0);

      // Reset to opening counts, then animate.
      var live = {};
      DAYS.forEach(function (x) { live[x.d] = x.n; });
      say('Plan: <b>' + p.moves.length + ' moves</b> + ' + p.leftover +
        ' overflow to a catch-up Friday. Preview approved — executing, ~4s apart.');

      if (reduceMotion) {
        paint(p.end);
        finish(p);
        return;
      }
      var i = 0;
      (function step() {
        if (i >= p.moves.length) { finish(p); return; }
        var m = p.moves[i++];
        live[m.from]--; live[m.to]++;
        paint(live);
        say(m.tier + ' · moved ' + m.from + ' &rarr; ' + m.to +
          ' <span style="opacity:.6">· verified</span>');
        setTimeout(step, 70);
      })();

      function finish(p) {
        if (p.leftover > 0 && !rows['Catch-up']) {
          rows['Catch-up'] = row('Next Fri', false);
        }
        var end = {};
        Object.keys(p.end).forEach(function (d) { end[d] = Math.min(TARGET, p.end[d]); });
        paint(end);
        if (rows['Catch-up']) {
          rows['Catch-up'].querySelector('output').textContent = p.leftover;
          rows['Catch-up'].querySelector('i').style.width =
            Math.min(100, p.leftover / MAX * 100) + '%';
        }
        say('<b>Done — ' + p.moves.length + '/' + p.moves.length +
          ' verified, 0 failed.</b> Every day at ' + TARGET +
          ', overflow parked Friday. One-command undo kept throughout.');
        if (summary) {
          summary.hidden = false;
          document.getElementById('rb-moves').textContent = p.moves.length;
          document.getElementById('rb-verified').textContent = p.moves.length;
          document.getElementById('rb-failed').textContent = '0';
        }
        play.textContent = 'Run it again';
        play.disabled = false;
        running = false;
      }
    });
  })();

  /* ── Demo 2: morning triage ───────────────────────────── */
  (function triage() {
    var play = document.getElementById('tg-play');
    var list = document.getElementById('tg-list');
    if (!play || !list) return;
    var badges = Array.prototype.slice.call(list.querySelectorAll('.tg-badge'));
    play.addEventListener('click', function () {
      play.disabled = true;
      badges.forEach(function (b) { b.classList.remove('show'); });
      badges.forEach(function (b, i) {
        setTimeout(function () {
          b.classList.add('show');
          if (i === badges.length - 1) {
            play.textContent = 'Triaged — HOT first';
            play.disabled = false;
          }
        }, reduceMotion ? 0 : 350 * (i + 1));
      });
    });
  })();

  /* ── Demo 3: internal 30-second update ────────────────── */
  (function whatsapp() {
    var play = document.getElementById('wa-play');
    var chat = document.getElementById('wa-chat');
    var meta = document.getElementById('wa-meta');
    if (!play || !chat) return;
    // Internal-only flow: the salesperson updates the co-pilot after a
    // call. Nothing here is customer-facing — the draft waits for a tap.
    var script = [
      { cls: 'wa-me', html: 'Just called T*** — no answer. Send him the white Hilux photos and move him to Thursday.' },
      { cls: 'wa-them', html: '<small>Co-pilot · internal</small>Done: call logged twice, diary moved to Thu 10:00. Photos + reply drafted below — nothing sent.' },
      { cls: 'wa-draft', html: '<small>Draft for you — tap send</small>Hi! As discussed — white Hilux 2.8 GD-6 Raider, R489,900, 42,000&nbsp;km. Photos attached. Is Thursday good for a viewing?' }
    ];
    var running = false;
    function bubble(s) {
      var d = document.createElement('div');
      d.className = 'wa-bubble ' + s.cls;
      d.innerHTML = s.html;
      chat.appendChild(d);
      requestAnimationFrame(function () { d.classList.add('show'); });
    }
    play.addEventListener('click', function () {
      if (running) return;
      running = true;
      play.disabled = true;
      chat.innerHTML = '';
      if (meta) meta.classList.remove('show');
      var i = 0;
      (function step() {
        if (i >= script.length) {
          if (meta) meta.classList.add('show');
          play.textContent = 'Play it again';
          play.disabled = false;
          running = false;
          return;
        }
        bubble(script[i++]);
        setTimeout(step, reduceMotion ? 0 : 1100);
      })();
    });
  })();

  /* ── Demo 4: stock lookup ─────────────────────────────── */
  (function stock() {
    var input = document.getElementById('st-input');
    var go = document.getElementById('st-go');
    var out = document.getElementById('st-out');
    if (!input || !go || !out) return;
    var STOCK = [
      { m: 'Toyota Hilux 2.8 GD-6 Raider', c: 'White', p: 489900, k: '42,000 km' },
      { m: 'Toyota Hilux 2.4 GD-6 SRX', c: 'Silver', p: 419900, k: '68,500 km' },
      { m: 'Ford Ranger 2.0 Wildtrak', c: 'White', p: 529900, k: '35,200 km' },
      { m: 'Nissan Navara 2.5 LE', c: 'Grey', p: 359900, k: '81,000 km' },
      { m: 'Toyota Corolla Cross 1.8 XS', c: 'White', p: 389900, k: '29,400 km' },
      { m: 'Nissan Magnite 1.0 Acenta', c: 'Red', p: 219900, k: '51,300 km' },
      { m: 'Suzuki Swift 1.2 GLX', c: 'Blue', p: 189900, k: '44,700 km' },
      { m: 'Toyota Fortuner 2.8 GD-6', c: 'Black', p: 619900, k: '55,900 km' },
      { m: 'Nissan NP200 1.6', c: 'White', p: 149900, k: '97,200 km' },
      { m: 'Toyota Starlet 1.4 XR', c: 'Silver', p: 239900, k: '38,100 km' },
      { m: 'Ford Everest 2.0 XLT', c: 'White', p: 599900, k: '47,600 km' },
      { m: 'Nissan Almera 1.5 Acenta', c: 'Grey', p: 199900, k: '62,800 km' }
    ];
    function fmt(n) {
      return 'R' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    function search(q) {
      q = (q || '').toLowerCase().trim();
      if (!q) return STOCK.slice(0, 4);
      var maxP = null;
      // Price cap: an explicit "500k" suffix wins; otherwise a bare number
      // only counts as a cap next to under / < / max / budget, so engine
      // sizes ("2.8") never become prices. The matched price text is cut
      // out before word matching, so model codes ("NP200") still match
      // literally while cap numbers ("500k") can't poison the words.
      var q2 = q;
      var km = q2.match(/(\d[\d ]*)\s*k\b/);
      if (km) {
        maxP = parseInt(km[1].replace(/\s+/g, ''), 10) * 1000;
        q2 = q2.replace(km[0], ' ');
      } else if (q2.indexOf('under') > -1 || q2.indexOf('<') > -1 ||
                 q2.indexOf('max') > -1 || q2.indexOf('budget') > -1) {
        var nm = q2.match(/(\d[\d ]*)/);
        if (nm) {
          var n = parseInt(nm[1].replace(/\s+/g, ''), 10);
          maxP = n < 2000 ? n * 1000 : n;
          q2 = q2.replace(nm[0], ' ');
        }
      }
      var words = q2.replace(/[^a-z0-9 ]/g, ' ').split(/\s+/)
        .filter(function (w) {
          return w && w !== 'under' && w !== 'max' && w !== 'budget' && w.length > 1;
        });
      return STOCK.filter(function (s) {
        var hay = (s.m + ' ' + s.c).toLowerCase();
        var okW = words.length === 0 || words.every(function (w) { return hay.indexOf(w) > -1; });
        return okW && (maxP === null || s.p < maxP);
      });
    }
    function run() {
      var t0 = performance.now();
      var res = search(input.value);
      var ms = performance.now() - t0;
      if (!res.length) {
        out.innerHTML = '<p style="color:var(--muted);font-size:.86rem">No matches in the sample forecourt — try &ldquo;hilux&rdquo; or &ldquo;white&rdquo;.</p>';
        return;
      }
      var html = res.map(function (s) {
        return '<div class="st-car"><span><b>' + s.m + '</b><br><span style="color:var(--muted);font-size:.8rem">' +
          s.c + ' · ' + s.k + '</span></span><span><b>' + fmt(s.p) + '</b></span></div>';
      }).join('');
      html += '<p style="margin-top:.7rem;font-size:.85rem"><span class="st-ms">' + res.length +
        ' found in ' + ms.toFixed(2) + ' ms</span> <span style="color:var(--muted)">on this device, sample data.</span></p>';
      out.innerHTML = html;
    }
    go.addEventListener('click', run);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') run(); });
  })();
  /* ── Demo 5: ROI calculator ───────────────────────────── */
  (function roi() {
    var ids = ['roi-team', 'roi-overdue', 'roi-recover', 'roi-close', 'roi-gross'];
    var els = {};
    for (var k = 0; k < ids.length; k++) {
      els[ids[k]] = document.getElementById(ids[k]);
      if (!els[ids[k]]) return;
    }
    var zar = null;
    try {
      zar = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 });
    } catch (e) { zar = null; }
    function money(n) {
      if (zar) return zar.format(Math.round(n));
      return 'R' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    function grouped(n) {
      return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    function calc() {
      var team = +els['roi-team'].value,
          perW = +els['roi-overdue'].value,
          rec = +els['roi-recover'].value / 100,
          close = +els['roi-close'].value / 100,
          gross = +els['roi-gross'].value;
      document.getElementById('roi-team-v').textContent = team;
      document.getElementById('roi-overdue-v').textContent = perW;
      document.getElementById('roi-recover-v').textContent = els['roi-recover'].value + '%';
      document.getElementById('roi-close-v').textContent = els['roi-close'].value + '%';
      document.getElementById('roi-gross-v').textContent = grouped(gross);
      var followups = team * perW * 4.33 * rec;
      var deals = followups * close;
      document.getElementById('roi-followups').textContent = grouped(followups);
      document.getElementById('roi-deals').textContent = deals.toFixed(1);
      document.getElementById('roi-rands').textContent = money(deals * gross);
    }
    ids.forEach(function (id) { els[id].addEventListener('input', calc); });
    calc();
  })();

})();
