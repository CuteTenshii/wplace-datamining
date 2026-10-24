import {
  Bt as e,
  It as t,
  Lt as n,
  Nt as r,
  jt as i,
  kt as a,
  lt as o,
  on as s,
  pt as c
} from "./DTpxYwnW.js";
import {
  c as l
} from "./DGRftoM6.js";
import {
  B as u,
  C as d,
  N as f,
  R as p,
  V as m,
  W as h,
  vt as g
} from "./DqaL19d6.js";
import {
  t as _
} from "./BR6bFImc.js";
import {
  i as v,
  l as y,
  n as b,
  o as x
} from "./szg2bTqU.js";

function S(e, t) {
  if (typeof EventSource > `u`) return () => {};
  let n, r = !1,
    i = 0,
    a, o, s = () => document.visibilityState !== `hidden` && navigator.onLine,
    c = () => {
      n == null || n.close(), n = void 0, clearTimeout(o), clearTimeout(a), a = void 0
    },
    l = () => {
      if (c(), r || !s()) return;
      let e = Math.min(6e4, 2e3 * 2 ** Math.min(i++, 5));
      a = setTimeout(() => {
        a = void 0, d()
      }, e * (.5 + Math.random() / 2))
    },
    u = () => {
      clearTimeout(o), o = setTimeout(l, 55e3)
    },
    d = () => {
      if (r || n || a !== void 0 || !s()) return;
      let c = new EventSource(e, {
        withCredentials: !0
      });
      n = c, o = setTimeout(l, 55e3), c.addEventListener(`heartbeat`, () => {
        n === c && (i = 0, u())
      }), c.addEventListener(`seals`, e => {
        if (n !== c) return;
        i = 0, u();
        let r = C(e.data);
        r ? t.onCopies(r) : t.onReset()
      }), c.onerror = () => {
        n === c && l()
      }
    },
    f = () => {
      if (!s()) {
        c();
        return
      }
      n || (d(), t.onReset())
    };
  return document.addEventListener(`visibilitychange`, f), window.addEventListener(`online`, f), window.addEventListener(`offline`, f), d(), () => {
    r = !0, c(), document.removeEventListener(`visibilitychange`, f), window.removeEventListener(`online`, f), window.removeEventListener(`offline`, f)
  }
}

function C(e) {
  try {
    let t = JSON.parse(String(e));
    if (t.reset === !0 || !Array.isArray(t.copies) || t.copies.length > 200) return null;
    let n = [];
    for (let e of t.copies) {
      if (!Number.isSafeInteger(e == null ? void 0 : e.index) || e.index <= 0 || !Number.isSafeInteger(e.paintedPixels) || e.paintedPixels < 0 || e.completedAt !== null && typeof e.completedAt != `string`) return null;
      n.push({
        index: e.index,
        paintedPixels: e.paintedPixels,
        completedAt: e.completedAt
      })
    }
    return n
  } catch {
    return null
  }
}
var w = `seven-seals:opened`,
  T = new WeakMap,
  E = new WeakMap,
  D = new WeakMap,
  O = new WeakMap,
  k = new WeakMap,
  A = new WeakMap,
  j = new WeakMap,
  M = new WeakMap,
  N = new WeakMap,
  P = new WeakMap,
  F = new class {
    get data() {
      return o(n(T, this))
    }
    set data(e) {
      i(n(T, this), e, !0)
    }
    get now() {
      return o(n(E, this))
    }
    set now(e) {
      i(n(E, this), e)
    }
    get viewCopy() {
      return o(n(D, this))
    }
    set viewCopy(e) {
      i(n(D, this), e)
    }
    get cardSeal() {
      return o(n(O, this))
    }
    set cardSeal(e) {
      i(n(O, this), e)
    }
    get opened() {
      return o(n(k, this))
    }
    set opened(e) {
      i(n(k, this), e, !0)
    }
    get badgeAwards() {
      return o(n(A, this))
    }
    set badgeAwards(e) {
      i(n(A, this), e, !0)
    }
    get openCount() {
      return o(n(j, this))
    }
    set openCount(e) {
      i(n(j, this), e)
    }
    get openCopies() {
      return o(n(M, this))
    }
    set openCopies(e) {
      i(n(M, this), e)
    }
    get statesByIndex() {
      return o(n(N, this))
    }
    set statesByIndex(e) {
      i(n(N, this), e)
    }
    get readyCount() {
      return o(n(P, this))
    }
    set readyCount(e) {
      i(n(P, this), e)
    }
    constructor() {
      e(this, T, r(null)), e(this, E, t(() => Math.floor(g.now / f.second) * f.second)), e(this, D, r(null)), e(this, O, r(null)), e(this, k, r(!1)), e(this, A, r(a([]))), e(this, j, t(() => Math.min(b.length, Math.max(0, Math.floor((this.now - x) / v) + 1)))), e(this, M, t(() => b.slice(0, this.openCount))), e(this, N, t(() => {
        var e;
        let t = [];
        for (let n of ((e = this.data) == null ? void 0 : e.copies) ?? []) t[n.index] = n;
        return t
      })), e(this, P, t(() => {
        var e;
        let t = (e = this.data) == null ? void 0 : e.me;
        return t ? this.data.pass.tiers.filter(e => t.pixels >= e.pixels && !t.claimed.includes(`tier:${e.pixels}`)).length : 0
      })), s(this, `watchers`, 0), s(this, `stopPolling`, void 0), s(this, `stopStream`, void 0), s(this, `inflight`, void 0);
      try {
        this.opened = localStorage.getItem(w) === `1`
      } catch {}
      this.now >= x && this.refresh()
    }
    markOpened() {
      if (!this.opened) {
        this.opened = !0;
        try {
          localStorage.setItem(w, `1`)
        } catch {}
      }
    }
    isOpen(e) {
      return e.index <= this.openCount
    }
    copyState(e) {
      return this.statesByIndex[e.index] ?? null
    }
    progress(e) {
      let t = this.copyState(e);
      return t ? t.paintedPixels / t.totalPixels : 0
    }
    watch() {
      return c(() => void this.refresh()), this.watchers++ === 0 && (this.stopPolling = l(() => void this.refresh(), {
        interval: f.minute
      }), this.stopStream = S(`${d.url}/seven-seals/stream`, {
        onCopies: e => this.applyLive(e),
        onReset: () => void this.refresh()
      })), () => {
        if (--this.watchers === 0) {
          var e, t;
          (e = this.stopPolling) == null || e.call(this), (t = this.stopStream) == null || t.call(this)
        }
      }
    }
    applyLive(e) {
      let t = this.data;
      if (!t) {
        this.refresh();
        return
      }
      let n = {};
      for (let t of e) n[t.index] = t;
      let r = 0,
        i = t.copies.map(e => {
          let t = n[e.index];
          return t ? (r++, {
            ...e,
            paintedPixels: t.paintedPixels,
            completedAt: t.completedAt
          }) : e
        });
      this.data = {
        ...t,
        copies: i
      }, r < Object.keys(n).length && this.refresh()
    }
    recordFilled(e, t, n = !1, r = []) {
      let i = this.data;
      if (!i) {
        this.refresh();
        return
      }
      if (r.length && (this.badgeAwards = [...this.badgeAwards, ...r]), t > 0) {
        let a = i.me && {
            ...i.me,
            pixels: i.me.pixels + t,
            sealPixels: i.me.sealPixels.map((n, r) => r === e.seal.index - 1 ? n + t : n),
            claimed: [...i.me.claimed, ...r.map(e => `badge:${e}`)]
          },
          o = i.copies.map(r => r.index === e.index ? {
            ...r,
            paintedPixels: Math.min(r.totalPixels, r.paintedPixels + t),
            completedAt: r.completedAt ?? (n ? new Date().toISOString() : null)
          } : r);
        this.data = {
          ...i,
          copies: o,
          me: a
        }
      }
    }
    async claim(e) {
      var t;
      if (!((t = this.data) != null && t.me)) return;
      let {
        me: n
      } = await d.claimSevenSeals(e);
      this.data && (this.data = {
        ...this.data,
        me: n
      })
    }
    refresh() {
      return this.inflight ?? (this.inflight = this.load().finally(() => {
        this.inflight = void 0
      }))
    }
    async load() {
      try {
        this.data = await d.getSevenSeals()
      } catch {}
      this.collectBadges()
    }
    async collectBadges() {
      let e = this.data;
      if (!(e != null && e.me)) return;
      let t = e.me.sealPixels.map((t, n) => t >= e.pass.badgePixels ? n + 1 : 0).filter(t => t && !e.me.claimed.includes(`badge:${t}`));
      for (let e of t) try {
        await this.claim(`badge:${e}`), this.badgeAwards = [...this.badgeAwards, e]
      } catch (e) {
        console.error(`Seven Seals badge collection failed.`, e)
      }
    }
  },
  I = new Map(b.flatMap(e => y(e).map(([t, n]) => [`${t},${n}`, e]))),
  L = new Map,
  R = (e, t, n) => e << 16 | t << 8 | n,
  z = new Map;
h.colors.forEach((e, t) => {
  let n = R(e.rgb[0], e.rgb[1], e.rgb[2]);
  t > 0 && !z.has(n) && z.set(n, t)
});

function B(e) {
  let t = L.get(e.index);
  return t || (t = new Promise(t => {
    let n = new Image;
    n.onload = () => {
      let e = document.createElement(`canvas`);
      e.width = n.width, e.height = n.height;
      let r = e.getContext(`2d`);
      r == null || r.drawImage(n, 0, 0), t((r == null ? void 0 : r.getImageData(0, 0, n.width, n.height)) ?? null)
    }, n.onerror = () => {
      L.delete(e.index), t(null)
    }, n.src = e.template.src
  }), L.set(e.index, t)), t
}

function V(e) {
  return I.get(`${e[0]},${e[1]}`)
}

function H(e, t, {
  tile: n,
  pixel: r
}) {
  let i = t.bounds,
    a = n[0] * u + r[0] - i.x,
    o = n[1] * u + r[1] - i.y;
  if (a < 0 || o < 0 || a >= i.width || o >= i.height) return null;
  let s = (o * e.width + a) * 4,
    c = e.data;
  return c[s + 3] === 0 ? null : z.get(R(c[s], c[s + 1], c[s + 2])) ?? null
}

function U(e) {
  let t = V(e);
  return t && t.opensAt <= Date.now() ? t : void 0
}
async function W(e) {
  let t = U(e.tile);
  if (!t || e.season !== p) return null;
  let n = await B(t.seal);
  return n && H(n, t, e)
}
async function G(e) {
  let t = {
      right: [],
      wrong: [],
      expected: []
    },
    n = new Map;
  for (let t of e) {
    let e = U(t.tile);
    e && t.season === p && !n.has(e.seal) && n.set(e.seal, await B(e.seal))
  }
  for (let r of e) {
    let e = U(r.tile);
    if (!e || r.season !== p) continue;
    let i = n.get(e.seal),
      a = i && H(i, e, r);
    if (a == null) continue;
    let [o, s, c] = h.colors[a].rgb;
    if (r.color.a !== 0 && r.color.r === o && r.color.g === s && r.color.b === c) {
      t.right.push(r);
      continue
    }
    t.wrong.push(r), t.expected.includes(a) || t.expected.push(a)
  }
  return t
}
var K = 8,
  q = `rgba(167, 139, 250, 0.9)`;

function J(e) {
  let t = document.querySelector(`[data-seal-cell="${e}"]`) ?? document.querySelector(`[data-seal-pill="${e}"]`),
    n = t == null ? void 0 : t.getBoundingClientRect();
  return t && n && n.width > 0 ? {
    element: t,
    rect: n
  } : null
}

function Y(e) {
  e.animate([{
    transform: `scale(1)`,
    boxShadow: `0 0 0 0 ${q}`
  }, {
    transform: `scale(1.3)`,
    boxShadow: `0 0 0 7px rgba(167, 139, 250, 0)`
  }, {
    transform: `scale(1)`,
    boxShadow: `0 0 0 0 rgba(167, 139, 250, 0)`
  }], {
    duration: 380,
    easing: `ease-out`
  })
}

function X(e) {
  let t = J(e);
  if (!t || (Y(t.element), window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)) return;
  let n = t.rect.left + t.rect.width / 2,
    r = t.rect.top + t.rect.height / 2,
    i = [`#a78bfa`, `#c4b5fd`, `#fbbf24`, `#f5f3ff`];
  for (let e = 0; e < 22; e++) {
    let t = e / 22 * 2 * Math.PI + Math.random() * .4,
      a = 50 + Math.random() * 70,
      o = 4 + Math.random() * 5,
      s = document.createElement(`div`);
    s.style.cssText = `position:fixed;left:${n-o/2}px;top:${r-o/2}px;width:${o}px;height:${o}px;border-radius:2px;z-index:60;pointer-events:none;background:${i[e%i.length]};box-shadow:0 0 8px 2px ${q};`, document.body.append(s), s.animate([{
      transform: `translate(0, 0) scale(1)`,
      opacity: 1
    }, {
      transform: `translate(${Math.cos(t)*a}px, ${Math.sin(t)*a}px) scale(0)`,
      opacity: 0
    }], {
      duration: 700 + Math.random() * 400,
      easing: `cubic-bezier(0.2, 0.8, 0.3, 1)`,
      fill: `both`
    }).finished.finally(() => s.remove())
  }
}

function Z(e, t) {
  let n = new _(u),
    r = e.getContainer().getBoundingClientRect(),
    i = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    a = Math.max(1, Math.floor(t.length / K));
  t.filter((e, t) => t % a === 0).slice(0, K).forEach(({
    tile: t,
    pixel: a,
    color: o
  }, s) => {
    let c = V(t),
      l = c && J(c.index);
    if (!l) return;
    if (i) {
      s === 0 && Y(l.element);
      return
    }
    let [d, f] = n.pixelsToLatLon(t[0] * u + a[0] + .5, t[1] * u + a[1] + .5, m), p = e.project({
      lat: d,
      lng: f
    }), h = l.rect.left + l.rect.width / 2 - (r.left + p.x), g = l.rect.top + l.rect.height / 2 - (r.top + p.y), _ = document.createElement(`div`), v = document.createElement(`div`);
    _.style.cssText = `position:fixed;left:${r.left+p.x-5}px;top:${r.top+p.y-5}px;z-index:60;pointer-events:none;`, v.style.cssText = `width:10px;height:10px;border-radius:2px;background:rgb(${o.r},${o.g},${o.b});box-shadow:0 0 6px 2px ${q},0 0 16px 6px rgba(139,92,246,0.55);`, _.append(v), document.body.append(_);
    let y = {
      duration: 850,
      delay: s * 70,
      fill: `both`
    };
    _.animate([{
      transform: `translateX(0)`
    }, {
      transform: `translateX(${h}px)`
    }], {
      ...y,
      easing: `cubic-bezier(0.5, 0, 0.9, 0.6)`
    }), v.animate([{
      transform: `translateY(0) scale(1)`,
      opacity: 1
    }, {
      transform: `translateY(${g*.6}px) scale(1.5)`,
      opacity: 1,
      offset: .55
    }, {
      transform: `translateY(${g}px) scale(0.5)`,
      opacity: .4
    }], {
      ...y,
      easing: `cubic-bezier(0.2, 0.7, 0.4, 1)`
    }).finished.finally(() => {
      _.remove(), Y(l.element)
    })
  })
}
export {
  W as a, B as i, Z as n, V as o, G as r, F as s, X as t
};