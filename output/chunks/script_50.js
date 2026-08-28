var un = Object.defineProperty;
var vn = Object.getPrototypeOf;
var fn = Reflect.get;
var Ms = r => {
  throw TypeError(r)
};
var hn = (r, e, t) => e in r ? un(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : r[e] = t;
var sr = (r, e, t) => hn(r, typeof e != "symbol" ? e + "" : e, t),
  Ss = (r, e, t) => e.has(r) || Ms("Cannot " + t);
var B = (r, e, t) => (Ss(r, e, "read from private field"), t ? t.call(r) : e.get(r)),
  Mt = (r, e, t) => e.has(r) ? Ms("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t);
var Nt = (r, e, t) => (Ss(r, e, "access private method"), t);
var Is = (r, e, t) => fn(vn(r), t, e);
import "./Bzak7iHL.js";
import {
  o as mn,
  a as pn
} from "./D68Ns86n.js";
import {
  e as G,
  bR as Ps,
  ao as gn,
  i as s,
  h as _,
  b2 as Pr,
  a as S,
  w as Br,
  k as gs,
  p as rs,
  g as ss,
  y as Kr,
  v as _n,
  x as bn,
  f as ar,
  d as c,
  s as g,
  r as l,
  t as W,
  m as me,
  u as N,
  b as ns,
  c as L,
  z as Ys,
  q as xn,
  n as yn,
  o as wn,
  E as Mn
} from "./D5GL_E7i.js";
import {
  i as J
} from "./unjGrhDm.js";
import {
  e as kr,
  a as At,
  s as qe,
  b as Us,
  r as Ur,
  d as cs,
  h as Ts
} from "./Ce1mtF2R.js";
import {
  g as Sn
} from "./CsoPxbZX.js";
import {
  A as Or
} from "./CwG1zf2_.js";
import {
  R as In
} from "./CS_toMuy.js";
import {
  s as w
} from "./BATewRf7.js";
import {
  e as Qr
} from "./Clrj6tX0.js";
import {
  b as Hs
} from "./59dp7Pbq.js";
import {
  r as qr,
  p as ir
} from "./LT-XNHCk.js";
import {
  a as Pn
} from "./D5blgKZB.js";
import {
  S as Ct,
  a as Et,
  t as he,
  u as gr,
  C as Un,
  k as Tn
} from "./CT6bOf-I.js";
import {
  D as En
} from "./DeqNqtry.js";
import {
  A as Es
} from "./D4Cpnjo6.js";
import {
  R as vs
} from "./CJqQ1NCk.js";
import {
  T as fs,
  G as As
} from "./DzC6MGf5.js";
import {
  W as An
} from "./TCJCGDMB.js";
import {
  m
} from "./XL5Wf48w.js";
import {
  s as zs
} from "./BMTVjKyu.js";
import {
  t as Cs
} from "./DsK3CEHG.js";
import {
  b as ds
} from "./siaHaSCw.js";
import {
  P as Cn
} from "./DVUNSmMz.js";
import {
  R as Bn
} from "./CBmji4NJ.js";
import {
  S as kn
} from "./CTHZBsX-.js";
import {
  S as qn
} from "./B5P6urkd.js";
import {
  C as Fn
} from "./lC2jQGp7.js";
import {
  C as Rn
} from "./BxRHPcdt.js";
import {
  I as Xn
} from "./Cr_oAYYY.js";
import {
  c as Ln,
  M as Dn,
  D as Yn
} from "./B7951MQu.js";
import {
  P as _r
} from "./pKce-aOf.js";
import {
  R as Hn
} from "./C5ztOpp6.js";
import {
  g as Vr,
  a as Bs
} from "./C-Wf8VQD.js";
import {
  s as ks
} from "./CiB29Aqe.js";
var Pt, Ut, Dt, ts, St, Tr, Jr;
const xs = class xs extends Map {
  constructor(t) {
    super();
    Mt(this, St);
    Mt(this, Pt, new Map);
    Mt(this, Ut, G(0));
    Mt(this, Dt, G(0));
    Mt(this, ts, Ps || -1);
    if (t) {
      for (var [n, a] of t) super.set(n, a);
      B(this, Dt).v = super.size
    }
  }
  has(t) {
    var n = B(this, Pt),
      a = n.get(t);
    if (a === void 0)
      if (super.has(t)) a = Nt(this, St, Tr).call(this, 0), n.set(t, a);
      else return s(B(this, Ut)), !1;
    return s(a), !0
  }
  forEach(t, n) {
    Nt(this, St, Jr).call(this), super.forEach(t, n)
  }
  get(t) {
    var n = B(this, Pt),
      a = n.get(t);
    if (a === void 0)
      if (super.has(t)) a = Nt(this, St, Tr).call(this, 0), n.set(t, a);
      else {
        s(B(this, Ut));
        return
      } return s(a), super.get(t)
  }
  set(t, n) {
    var T;
    var a = B(this, Pt),
      o = a.get(t),
      d = super.get(t),
      v = super.set(t, n),
      f = B(this, Ut);
    if (o === void 0) o = Nt(this, St, Tr).call(this, 0), a.set(t, o), _(B(this, Dt), super.size), Pr(f);
    else if (d !== n) {
      Pr(o);
      var p = f.reactions === null ? null : new Set(f.reactions),
        E = p === null || !((T = o.reactions) != null && T.every(R => p.has(R)));
      E && Pr(f)
    }
    return v
  }
  delete(t) {
    var n = B(this, Pt),
      a = n.get(t),
      o = super.delete(t);
    return a !== void 0 && (n.delete(t), _(a, -1)), o && (_(B(this, Dt), super.size), Pr(B(this, Ut))), o
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = B(this, Pt);
      _(B(this, Dt), 0);
      for (var n of t.values()) _(n, -1);
      Pr(B(this, Ut)), t.clear()
    }
  }
  keys() {
    return s(B(this, Ut)), super.keys()
  }
  values() {
    return Nt(this, St, Jr).call(this), super.values()
  }
  entries() {
    return Nt(this, St, Jr).call(this), super.entries()
  } [Symbol.iterator]() {
    return this.entries()
  }
  get size() {
    return s(B(this, Dt)), super.size
  }
};
Pt = new WeakMap, Ut = new WeakMap, Dt = new WeakMap, ts = new WeakMap, St = new WeakSet, Tr = function(t) {
  return Ps === B(this, ts) ? G(t) : gn(t)
}, Jr = function() {
  s(B(this, Ut));
  var t = B(this, Pt);
  if (B(this, Dt).v !== t.size) {
    for (var n of Is(xs.prototype, this, "keys").call(this))
      if (!t.has(n)) {
        var a = Nt(this, St, Tr).call(this, 0);
        t.set(n, a)
      }
  }
  for ([, a] of B(this, Pt)) s(a)
};
let hs = xs;
const wo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAAXNSR0IArs4c6QAAACVJREFUeNpj+A8FDEAAZwMRBAIBmIYLIgHcgkQDIs3E6SRsjgcABYFLtfTgakEAAAAASUVORK5CYII=";
var zn = new Set(["$$slots", "$$events", "$$legacy"]),
  Wn = Br('<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');

function jn(r, e) {
  let t = qr(e, zn);
  var n = Wn();
  kr(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...t
  })), S(r, n)
}
var Nn = new Set(["$$slots", "$$events", "$$legacy"]),
  Gn = Br('<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>');

function On(r, e) {
  let t = qr(e, Nn);
  var n = Gn();
  kr(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...t
  })), S(r, n)
}
var Vn = new Set(["$$slots", "$$events", "$$legacy"]),
  Zn = Br('<svg><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Z"></path></svg>');

function Kn(r, e) {
  let t = qr(e, Vn);
  var n = Zn();
  kr(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...t
  })), S(r, n)
}
var us = L('<div class="py-8 text-center"><p class="text-base-content/60"> </p></div>'),
  qs = L('<div class="flex flex-col items-center justify-center gap-3 py-8"><span class="loading loading-spinner loading-lg"></span> <p class="text-base-content/70 text-sm"> </p></div>'),
  Qn = L('<div class="reverse-selection-pill svelte-o0qsvj"> </div>'),
  Jn = L('<div class="bg-base-300/40 absolute inset-0 z-10 flex items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  $n = L('<span class="loading loading-spinner loading-xs mt-1 shrink-0"></span>'),
  ea = L('<button type="button"><div class="reverse-gallery-item-head svelte-o0qsvj"><div class="reverse-gallery-item-copy svelte-o0qsvj"><div class="reverse-gallery-item-label flex justify-between svelte-o0qsvj"> <div class="badge badge-sm badge-outline"> </div></div> <div class="reverse-gallery-item-subtitle svelte-o0qsvj"> </div></div></div> <div class="mt-2 flex flex-wrap justify-between gap-2"><div class="badge badge-sm badge-outline"> </div> <!></div></button>'),
  ta = L('<span class="loading loading-spinner loading-xs"></span>'),
  ra = L('<button type="button" class="btn btn-sm btn-outline w-full"><!> </button>'),
  sa = L('<div class="reverse-workspace svelte-o0qsvj"><div class="reverse-panel svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <!></div> <div class="reverse-preview-toolbar svelte-o0qsvj"><div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="reverse-meta-chip svelte-o0qsvj"><!> </div> <div class="flex items-center gap-1"><button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Previous preview"><!></button> <button type="button" class="btn btn-sm btn-ghost btn-circle" aria-label="Next preview"><!></button></div></div> <div class="reverse-preview-stage svelte-o0qsvj"><!> <canvas style="max-width: 100%; height: auto;"></canvas></div> <div class="reverse-preview-footer svelte-o0qsvj"><div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm"><div class="badge badge-outline"> </div> <div class="badge badge-outline"> </div></div> <div class="reverse-callout svelte-o0qsvj"><!> <span> </span></div></div></div> <div class="reverse-panel h-full svelte-o0qsvj"><div class="reverse-panel-header svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="reverse-history-count svelte-o0qsvj"> </div></div> <div class="reverse-keyboard-hint svelte-o0qsvj"> </div> <div class="reverse-gallery-list h-full p-2 svelte-o0qsvj"></div> <!></div></div> <div class="reverse-action-bar svelte-o0qsvj"><div class="flex flex-wrap items-center justify-end gap-2"><button type="button" class="btn btn-sm btn-outline"> </button> <button type="button" class="btn btn-sm btn-warning"><!> </button></div></div>', 1),
  na = L('<div><div class="min-w-0"><h3 class="flex items-center gap-2 text-lg font-bold"><!> </h3> <p class="text-base-content/70 mt-1 text-sm"> </p></div></div> <div class="mt-4"><div class="reverse-mode-bar svelte-o0qsvj"><div><div class="reverse-section-title svelte-o0qsvj"> </div> <p class="reverse-section-copy svelte-o0qsvj"> </p></div> <div class="tabs tabs-boxed reverse-mode-tabs svelte-o0qsvj"><button type="button"> </button> <button type="button"> </button></div></div> <!></div>', 1);

function aa(r, e) {
  rs(e, !0);
  let t = ir(e, "open", 15),
    n = ir(e, "sessionPayload", 3, void 0),
    a = ir(e, "previewBounds", 3, void 0),
    o = ir(e, "showMapBackground", 3, !0);
  const d = N(() => e.tileSize ?? Ct.seasons[e.season].tileSize);
  let v = G("idle"),
    f = G(null),
    p = G(ss([])),
    E = G(!1),
    T = G(!1),
    R = G(null),
    K = G([]),
    Ye = G(!1),
    He = G(!1),
    $ = G(void 0),
    ye, de, D = G(null),
    Le = 0,
    Ge = 0,
    ze = 0,
    at = 0,
    Ze = null,
    Ce;
  const It = "wplace:reverse-debug",
    Re = new Intl.RelativeTimeFormat(void 0, {
      numeric: "auto"
    });

  function ie() {
    return typeof performance < "u" ? performance.now() : Date.now()
  }

  function Q(i) {
    return Math.round((ie() - i) * 100) / 100
  }

  function We() {
    if (globalThis.__WPLACE_REVERSE_DEBUG__) return !0;
    try {
      const u = globalThis.localStorage.getItem(It);
      return u === "1" || u === "true"
    } catch {
      return !1
    }
  }

  function re(i, u = {}) {
    We() && console.info(`[ReversePixelsDialog] ${i}`, u)
  }

  function lr() {
    at += 1, Ce == null || Ce.abort(), Ce = void 0, _(He, !1)
  }
  const Ie = N(() => (() => {
      const i = s(f);
      return s(R) === null || i === null ? null : s(p).find(u => Ke(u, i) === s(R)) ?? null
    })()),
    Gt = N(ur),
    mt = N(() => (() => {
      const i = s(f);
      return s(R) === null || i === null ? -1 : s(p).findIndex(u => Ke(u, i) === s(R))
    })()),
    lt = N(() => s(mt) > 0),
    Ot = N(() => s(mt) >= 0 && s(mt) < s(p).length - 1),
    pt = N(() => s(Ye) || s(He));
  Kr(() => {
    t() || (Le += 1, ze += 1, lr(), _(v, "idle"), _(D, null), _(p, [], !0), _(R, null), _(K, []), _(Ye, !1), de = void 0, Ze = null, _(E, !1), _(T, !1), _(f, null))
  }), Kr(() => {
    if (!t() || s(f) === null) return;
    const i = s(Gt);
    if (!o() || !i || !a()) {
      lr(), de = void 0, Ze = null;
      return
    }
    P(i)
  }), Kr(() => {
    const i = s(R),
      u = s(f);
    !t() || s(v) !== "gallery" || u === null || i === null || requestAnimationFrame(() => {
      var x;
      (x = document.getElementById(I(u, i))) == null || x.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      })
    })
  });

  function Ke(i, u) {
    return u === "historical" ? i.ts : i.depth
  }

  function cr(i, u) {
    return i === "historical" ? {
      mode: i,
      timestamp: u
    } : {
      mode: i,
      snapshotDepth: u
    }
  }
  async function kt(i) {
    var U;
    if (!e.dataSource && (!n() || n().length === 0)) {
      t(!1);
      return
    }
    const u = ie(),
      x = ++Le;
    ze += 1, re("loadTimestamps:start", {
      season: e.season,
      selectedPixels: e.selectedPixelCount,
      payloadBytes: ((U = n()) == null ? void 0 : U.length) ?? 0
    }), _(v, "loading"), _(f, i, !0), _(p, [], !0), _(E, !1), _(T, !1), _(R, null), _(K, []), _(Ye, !1), _(D, null), Ge += 1;
    try {
      if (e.dataSource) _(D, "custom"), await Vt("custom", i, {
        sessionMs: 0,
        loadStart: u,
        payloadBytes: 0,
        selectedPixels: e.selectedPixelCount
      });
      else {
        const y = ie(),
          A = await Et.createReverseSession(n()),
          C = Q(y);
        if (x !== Le) return;
        _(D, A.sessionId, !0), await Vt(A.sessionId, i, {
          sessionMs: C,
          loadStart: u,
          payloadBytes: n().length,
          selectedPixels: e.selectedPixelCount
        })
      }
    } catch (y) {
      if (x !== Le) return;
      re("loadTimestamps:error", {
        season: e.season,
        selectedPixels: e.selectedPixelCount,
        durationMs: Q(u),
        message: y.message
      }), he.error(y.message), t(!1)
    }
  }
  async function Vt(i, u, x) {
    var V;
    const U = ++Ge;
    ze += 1, _(v, "loading"), _(p, [], !0), _(E, !1), _(T, !1), _(R, null), _(K, []), _(Ye, !1);
    const y = ie(),
      A = e.dataSource ? await e.dataSource.getTimeline({
        mode: u
      }) : await Et.getReverseTimestamps(i, {
        mode: u
      }),
      C = Q(y);
    U !== Ge || i !== s(D) || (_(p, A.timestamps, !0), _(E, A.hasMore, !0), _(v, "gallery"), re("loadTimestamps:resolved", {
      season: e.season,
      mode: u,
      selectedPixels: (x == null ? void 0 : x.selectedPixels) ?? e.selectedPixelCount,
      payloadBytes: (x == null ? void 0 : x.payloadBytes) ?? ((V = n()) == null ? void 0 : V.length) ?? 0,
      sessionId: i,
      snapshots: s(p).length,
      hasMore: A.hasMore,
      sessionMs: x == null ? void 0 : x.sessionMs,
      timestampsMs: C,
      durationMs: x != null && x.loadStart ? Q(x.loadStart) : C
    }), s(p).length > 0 && await zt(i, Ke(s(p)[0], u), u))
  }
  async function dr() {
    if (!s(D) || s(T) || !s(E) || s(p).length === 0) return;
    const i = Ge,
      u = s(p)[s(p).length - 1],
      x = s(f);
    if (!u || x === null) return;
    const U = Ke(u, x);
    if (!U) return;
    _(T, !0);
    const y = ie();
    re("loadMoreTimestamps:start", {
      season: e.season,
      mode: s(f),
      sessionId: s(D),
      beforeEntryValue: U,
      loadedSnapshots: s(p).length
    });
    try {
      const A = x === "historical" ? {
          mode: x,
          beforeTimestamp: U
        } : {
          mode: x,
          beforeDepth: U
        },
        C = e.dataSource ? await e.dataSource.getTimeline(A) : await Et.getReverseTimestamps(s(D), A);
      if (i !== Ge) return;
      _(p, [...s(p), ...C.timestamps], !0), _(E, C.hasMore, !0), re("loadMoreTimestamps:resolved", {
        season: e.season,
        mode: x,
        sessionId: s(D),
        beforeEntryValue: U,
        appendedSnapshots: C.timestamps.length,
        loadedSnapshots: s(p).length,
        hasMore: C.hasMore,
        durationMs: Q(y)
      })
    } catch (A) {
      if (i !== Ge) return;
      re("loadMoreTimestamps:error", {
        season: e.season,
        mode: x,
        sessionId: s(D),
        beforeEntryValue: U,
        durationMs: Q(y),
        message: A.message
      }), he.error(A.message)
    } finally {
      i === Ge && _(T, !1)
    }
  }
  async function zt(i, u, x = s(f)) {
    if (x === null) return;
    const U = ie();
    _(R, u, !0), _(Ye, !0);
    const y = ++ze;
    re("loadPreview:start", {
      season: e.season,
      mode: x,
      sessionId: i,
      entryValue: u,
      requestNonce: y
    });
    try {
      const A = ie(),
        C = cr(x, u),
        V = e.dataSource ? await e.dataSource.getPreview(C) : await Et.getReversePreview(i, C),
        oe = Q(A);
      if (y !== ze || (_(K, V.pixels), await new Promise(Z => requestAnimationFrame(() => Z())), y !== ze)) return;
      const Be = ie();
      q();
      const ue = Q(Be);
      re("loadPreview:resolved", {
        season: e.season,
        mode: x,
        sessionId: i,
        entryValue: u,
        requestNonce: y,
        previewPixels: V.pixels.length,
        apiMs: oe,
        renderMs: ue,
        durationMs: Q(U)
      })
    } catch (A) {
      if (y !== ze) return;
      re("loadPreview:error", {
        season: e.season,
        mode: x,
        sessionId: i,
        entryValue: u,
        requestNonce: y,
        durationMs: Q(U),
        message: A.message
      }), he.error(A.message)
    } finally {
      y === ze && _(Ye, !1)
    }
  }

  function ur() {
    let i = 1 / 0,
      u = 1 / 0,
      x = -1 / 0,
      U = -1 / 0;
    if (a()) i = a().minGlobalX, u = a().minGlobalY, x = a().maxGlobalX, U = a().maxGlobalY;
    else {
      if (s(K).length === 0) return null;
      for (const Z of s(K)) {
        const we = Z.tileX * s(d) + Z.pixelX,
          F = Z.tileY * s(d) + Z.pixelY;
        we < i && (i = we), F < u && (u = F), we > x && (x = we), F > U && (U = F)
      }
    }
    if (!Number.isFinite(i) || !Number.isFinite(u) || !Number.isFinite(x) || !Number.isFinite(U)) return null;
    const y = x - i + 1,
      A = U - u + 1;
    if (y <= 0 || A <= 0) return null;
    const C = 520,
      V = Math.max(1, Math.ceil(Math.max(y / C, A / C))),
      oe = Math.max(1, Math.ceil(y / V)),
      Be = Math.max(1, Math.ceil(A / V)),
      ue = Math.max(1, Math.min(Math.floor(C / oe), Math.floor(C / Be)));
    return {
      minGX: i,
      minGY: u,
      width: y,
      height: A,
      downsample: V,
      sampledWidth: oe,
      sampledHeight: Be,
      scale: ue
    }
  }
  async function br(i) {
    if ("createImageBitmap" in globalThis) return createImageBitmap(i);
    const u = URL.createObjectURL(i);
    try {
      return await new Promise((x, U) => {
        const y = new Image;
        y.crossOrigin = "anonymous", y.onload = () => x(y), y.onerror = () => U(new Error("Failed to decode preview tile.")), y.src = u
      })
    } finally {
      URL.revokeObjectURL(u)
    }
  }

  function vr(i) {
    "close" in i && i.close()
  }
  async function P(i) {
    if (!a()) return;
    const u = [e.season, i.minGX, i.minGY, i.width, i.height, i.downsample, i.sampledWidth, i.sampledHeight].join(":");
    if (Ze === u && de) return;
    const x = ++at;
    Ce == null || Ce.abort();
    const U = new AbortController;
    Ce = U, _(He, !0), re("loadPreviewBackground:start", {
      season: e.season,
      requestNonce: x,
      width: i.width,
      height: i.height,
      sampledWidth: i.sampledWidth,
      sampledHeight: i.sampledHeight
    });
    try {
      const y = ie(),
        A = document.createElement("canvas");
      A.width = i.sampledWidth, A.height = i.sampledHeight;
      const C = A.getContext("2d");
      if (!C) throw new Error("Unable to create preview background.");
      C.imageSmoothingEnabled = !1;
      const V = i.minGX + i.width,
        oe = i.minGY + i.height,
        Be = Math.floor(i.minGX / s(d)),
        ue = Math.floor((V - 1) / s(d)),
        Z = Math.floor(i.minGY / s(d)),
        we = Math.floor((oe - 1) / s(d));
      for (let F = Z; F <= we; F += 1)
        for (let X = Be; X <= ue; X += 1) {
          if (x !== at || U.signal.aborted) return;
          const le = X * s(d),
            ge = F * s(d),
            ve = Math.max(i.minGX, le),
            Ue = Math.max(i.minGY, ge),
            Oe = Math.min(V, le + s(d)),
            je = Math.min(oe, ge + s(d));
          if (Oe <= ve || je <= Ue) continue;
          const qt = await fetch(`${Pn}/s${e.season}/tiles/${X}/${F}.png`, {
            signal: U.signal
          });
          if (!qt.ok) continue;
          const $e = await br(await qt.blob());
          if (x !== at || U.signal.aborted) {
            vr($e);
            return
          }
          const ct = Math.floor((ve - i.minGX) / i.downsample),
            Ft = Math.floor((Ue - i.minGY) / i.downsample),
            gt = Math.ceil((Oe - i.minGX) / i.downsample),
            Zt = Math.ceil((je - i.minGY) / i.downsample),
            dt = Math.max(1, gt - ct),
            Kt = Math.max(1, Zt - Ft);
          C.drawImage($e, ve - le, Ue - ge, Oe - ve, je - Ue, ct, Ft, dt, Kt), vr($e)
        }
      if (x !== at || U.signal.aborted) return;
      de = A, Ze = u, re("loadPreviewBackground:resolved", {
        season: e.season,
        requestNonce: x,
        width: i.width,
        height: i.height,
        sampledWidth: i.sampledWidth,
        sampledHeight: i.sampledHeight,
        durationMs: Q(y)
      }), q()
    } catch (y) {
      if (y instanceof DOMException && y.name === "AbortError" || x !== at) return;
      de = void 0, Ze = null, re("loadPreviewBackground:error", {
        season: e.season,
        requestNonce: x,
        message: y.message
      })
    } finally {
      x === at && (Ce = void 0, _(He, !1))
    }
  }

  function q() {
    const i = ie();
    if (!s($)) return;
    const u = ur();
    if (!u) {
      s($).width = 1, s($).height = 1;
      const C = s($).getContext("2d");
      C == null || C.clearRect(0, 0, 1, 1), re("renderPreviewCanvas:empty", {
        season: e.season,
        previewPixels: s(K).length,
        durationMs: Q(i)
      });
      return
    }
    s($).width = u.sampledWidth * u.scale, s($).height = u.sampledHeight * u.scale, ye || (ye = document.createElement("canvas")), ye.width = u.sampledWidth, ye.height = u.sampledHeight;
    const x = ye.getContext("2d"),
      U = s($).getContext("2d");
    if (!x || !U) return;
    if (de && de.width === u.sampledWidth && de.height === u.sampledHeight) x.clearRect(0, 0, u.sampledWidth, u.sampledHeight), x.drawImage(de, 0, 0);
    else {
      const C = x.createImageData(u.sampledWidth, u.sampledHeight),
        V = C.data;
      for (let oe = 0; oe < u.sampledHeight; oe += 1) {
        const Be = oe * u.sampledWidth;
        for (let ue = 0; ue < u.sampledWidth; ue += 1) {
          const Z = (Be + ue) * 4;
          (ue + oe) % 2 === 0 ? (V[Z] = 22, V[Z + 1] = 33, V[Z + 2] = 62) : (V[Z] = 26, V[Z + 1] = 26, V[Z + 2] = 46), V[Z + 3] = 255
        }
      }
      x.putImageData(C, 0, 0)
    }
    const y = x.getImageData(0, 0, u.sampledWidth, u.sampledHeight),
      A = y.data;
    for (const C of s(K)) {
      const V = C.tileX * s(d) + C.pixelX - u.minGX,
        oe = C.tileY * s(d) + C.pixelY - u.minGY;
      if (V < 0 || oe < 0 || V >= u.width || oe >= u.height) continue;
      const Be = Math.floor(V / u.downsample),
        ue = Math.floor(oe / u.downsample);
      if (Be < 0 || ue < 0 || Be >= u.sampledWidth || ue >= u.sampledHeight) continue;
      const Z = Ct.colors[Math.min(C.color, Ct.colors.length - 1)],
        we = (ue * u.sampledWidth + Be) * 4;
      A[we] = Z.rgb[0], A[we + 1] = Z.rgb[1], A[we + 2] = Z.rgb[2], A[we + 3] = C.color === 0 ? 0 : 255
    }
    x.putImageData(y, 0, 0), U.imageSmoothingEnabled = !1, U.clearRect(0, 0, s($).width, s($).height), U.drawImage(ye, 0, 0, u.sampledWidth, u.sampledHeight, 0, 0, s($).width, s($).height), re("renderPreviewCanvas:resolved", {
      season: e.season,
      previewPixels: s(K).length,
      width: u.width,
      height: u.height,
      sampledWidth: u.sampledWidth,
      sampledHeight: u.sampledHeight,
      scale: u.scale,
      downsample: u.downsample,
      durationMs: Q(i)
    })
  }

  function O(i) {
    return new Date(i).toLocaleString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  }

  function Pe(i) {
    return new Date(i).toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  function Qe(i) {
    return new Date(i).toLocaleTimeString(void 0, {
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  function Je(i) {
    const u = i - Date.now(),
      x = Math.abs(u);
    return x < 45e3 ? Re.format(Math.round(u / 1e3), "second") : x < 45 * 6e4 ? Re.format(Math.round(u / 6e4), "minute") : x < 22 * 36e5 ? Re.format(Math.round(u / 36e5), "hour") : x < 26 * 864e5 ? Re.format(Math.round(u / 864e5), "day") : x < 320 * 864e5 ? Re.format(Math.round(u / 2592e6), "month") : Re.format(Math.round(u / 31536e6), "year")
  }

  function h(i) {
    return i ? `${i.width.toLocaleString()} x ${i.height.toLocaleString()}` : "0 x 0"
  }

  function I(i, u) {
    return `reverse-history-${i}-${u}`
  }

  function Y() {
    const i = s(f);
    !s(lt) || !s(D) || i === null || zt(s(D), Ke(s(p)[s(mt) - 1], i))
  }

  function H() {
    const i = s(f);
    !s(Ot) || !s(D) || i === null || zt(s(D), Ke(s(p)[s(mt) + 1], i))
  }
  async function se(i) {
    if (s(f) !== i && t()) {
      if (!s(D)) {
        await kt(i);
        return
      }
      _(f, i, !0);
      try {
        await Vt(s(D), i)
      } catch (u) {
        re("loadTimestamps:error", {
          season: e.season,
          mode: i,
          sessionId: s(D),
          durationMs: 0,
          message: u.message
        }), he.error(u.message), _(v, "gallery")
      }
    }
  }

  function j(i) {
    if (!(!t() || s(v) !== "gallery" || s(pt))) {
      if (i.key === "ArrowLeft" || i.key === "ArrowUp") {
        i.preventDefault(), Y();
        return
      }(i.key === "ArrowRight" || i.key === "ArrowDown") && (i.preventDefault(), H())
    }
  }
  async function ne() {
    const i = s(f);
    if (!s(D) || s(R) === null || i === null) return;
    const u = ie();
    re("applyReverse:start", {
      season: e.season,
      mode: i,
      sessionId: s(D),
      entryValue: s(R),
      selectedPixels: e.selectedPixelCount
    }), _(v, "applying");
    try {
      const x = ie(),
        U = await e.onApply(s(D), i, s(R)),
        y = Q(x);
      re("applyReverse:resolved", {
        season: e.season,
        mode: i,
        sessionId: s(D),
        entryValue: s(R),
        painted: U.painted,
        onApplyMs: y,
        durationMs: Q(u)
      }), he.success(m.reverse_apply_success({
        count: U.painted.toString()
      })), t(!1)
    } catch (x) {
      re("applyReverse:error", {
        season: e.season,
        mode: i,
        sessionId: s(D),
        entryValue: s(R),
        durationMs: Q(u),
        message: x.message
      }), he.error(x.message), _(v, "gallery")
    }
  }
  _n("keydown", bn, j), En(r, {
    useModalLayer: !0,
    modalBoxClass: "w-11/12 max-w-7xl max-h-[92vh] overflow-y-auto",
    get open() {
      return t()
    },
    set open(i) {
      t(i)
    },
    children: (i, u) => {
      var x = na(),
        U = ar(x),
        y = c(U),
        A = c(y),
        C = c(A);
      vs(C, {
        class: "size-5"
      });
      var V = g(C);
      l(A);
      var oe = g(A, 2),
        Be = c(oe, !0);
      l(oe), l(y), l(U);
      var ue = g(U, 2),
        Z = c(ue),
        we = c(Z),
        F = c(we),
        X = c(F, !0);
      l(F);
      var le = g(F, 2),
        ge = c(le, !0);
      l(le), l(we);
      var ve = g(we, 2),
        Ue = c(ve),
        Oe = c(Ue, !0);
      l(Ue);
      var je = g(Ue, 2),
        qt = c(je, !0);
      l(je), l(ve), l(Z);
      var $e = g(Z, 2);
      {
        var ct = ae => {
            var ee = us(),
              ce = c(ee),
              Te = c(ce, !0);
            l(ce), l(ee), W(ke => w(Te, ke), [() => m.reverse_history_description()]), S(ae, ee)
          },
          Ft = ae => {
            var ee = qs(),
              ce = g(c(ee), 2),
              Te = c(ce, !0);
            l(ce), l(ee), W(ke => w(Te, ke), [() => m.reverse_loading()]), S(ae, ee)
          },
          gt = ae => {
            var ee = qs(),
              ce = g(c(ee), 2),
              Te = c(ce, !0);
            l(ce), l(ee), W(ke => w(Te, ke), [() => m.reverse_applying()]), S(ae, ee)
          },
          Zt = ae => {
            var ee = us(),
              ce = c(ee),
              Te = c(ce, !0);
            l(ce), l(ee), W(ke => w(Te, ke), [() => m.reverse_no_modifications()]), S(ae, ee)
          },
          dt = ae => {
            var ee = sa(),
              ce = ar(ee),
              Te = c(ce),
              ke = c(Te),
              ut = c(ke),
              Rt = c(ut),
              Qt = c(Rt, !0);
            l(Rt);
            var Jt = g(Rt, 2),
              $t = c(Jt, !0);
            l(Jt), l(ut);
            var er = g(ut, 2);
            {
              var tr = Xe => {
                var Se = Qn(),
                  jt = c(Se, !0);
                l(Se), W(ft => w(jt, ft), [() => m.reverse_snapshot_position({
                  current: (s(mt) + 1).toString(),
                  total: s(p).length.toString()
                })]), S(Xe, Se)
              };
              J(er, Xe => {
                s(Ie) && Xe(tr)
              })
            }
            l(ke);
            var Wt = g(ke, 2),
              z = c(Wt),
              b = c(z);
            fs(b, {
              class: "size-3.5"
            });
            var Ee = g(b);
            l(z);
            var fe = g(z, 2),
              Ae = c(fe);
            Kn(Ae, {
              class: "size-3.5"
            });
            var k = g(Ae);
            l(fe);
            var _e = g(fe, 2),
              _t = c(_e),
              be = c(_t);
            Es(be, {
              class: "size-4"
            }), l(_t);
            var rt = g(_t, 2),
              bt = c(rt);
            Es(bt, {
              class: "size-4 rotate-180"
            }), l(rt), l(_e), l(Wt);
            var et = g(Wt, 2),
              Ne = c(et);
            {
              var st = Xe => {
                var Se = Jn();
                S(Xe, Se)
              };
              J(Ne, Xe => {
                s(pt) && Xe(st)
              })
            }
            var xt = g(Ne, 2);
            Hs(xt, Xe => _($, Xe), () => s($)), l(et);
            var it = g(et, 2),
              De = c(it),
              te = c(De),
              xe = c(te);
            l(te);
            var Ve = g(te, 2),
              tt = c(Ve);
            l(Ve), l(De);
            var Xt = g(De, 2),
              xr = c(Xt);
            An(xr, {
              class: "size-4 shrink-0"
            });
            var Fr = g(xr, 2),
              Rr = c(Fr, !0);
            l(Fr), l(Xt), l(it), l(Te);
            var Xr = g(Te, 2),
              fr = c(Xr),
              yr = c(fr),
              wr = c(yr),
              as = c(wr, !0);
            l(wr);
            var Lr = g(wr, 2),
              pe = c(Lr, !0);
            l(Lr), l(yr);
            var Me = g(yr, 2),
              yt = c(Me);
            l(Me), l(fr);
            var vt = g(fr, 2),
              hr = c(vt, !0);
            l(vt);
            var Lt = g(vt, 2);
            Qr(Lt, 23, () => s(p), Xe => Ke(Xe, s(f)), (Xe, Se, jt) => {
              var ft = ea();
              let mr;
              var wt = c(ft),
                pr = c(wt),
                Mr = c(pr),
                Wr = c(Mr),
                jr = g(Wr),
                is = c(jr);
              l(jr), l(Mr);
              var Nr = g(Mr, 2),
                os = c(Nr);
              l(Nr), l(pr), l(wt);
              var Gr = g(wt, 2),
                Sr = c(Gr),
                tn = c(Sr);
              l(Sr);
              var rn = g(Sr, 2);
              {
                var sn = Ir => {
                    var ls = $n();
                    S(Ir, ls)
                  },
                  nn = N(() => s(pt) && s(R) === Ke(s(Se), s(f)));
                J(rn, Ir => {
                  s(nn) && Ir(sn)
                })
              }
              l(Gr), l(ft), W((Ir, ls, an, on, ln, cn, dn) => {
                qe(ft, "id", Ir), mr = At(ft, 1, "reverse-gallery-item svelte-o0qsvj", null, mr, ls), w(Wr, `${an??""} `), w(is, `#${s(jt)+1}`), w(os, `${on??""} · ${ln??""}`), w(tn, `${cn??""}
										${dn??""}`)
              }, [() => I(s(f), Ke(s(Se), s(f))), () => ({
                "reverse-gallery-item-active": s(R) === Ke(s(Se), s(f))
              }), () => Pe(s(Se).ts), () => Qe(s(Se).ts), () => Je(s(Se).ts), () => s(Se).pixelCount.toLocaleString(), () => m.reverse_col_pixels()]), me("click", ft, () => s(D) && zt(s(D), Ke(s(Se), s(f)))), S(Xe, ft)
            }), l(Lt);
            var Dr = g(Lt, 2);
            {
              var rr = Xe => {
                var Se = ra(),
                  jt = c(Se);
                {
                  var ft = wt => {
                    var pr = ta();
                    S(wt, pr)
                  };
                  J(jt, wt => {
                    s(T) && wt(ft)
                  })
                }
                var mr = g(jt);
                l(Se), W(wt => {
                  Se.disabled = s(T), w(mr, ` ${wt??""}`)
                }, [() => m.load_more()]), me("click", Se, dr), S(Xe, Se)
              };
              J(Dr, Xe => {
                s(E) && Xe(rr)
              })
            }
            l(Xr), l(ce);
            var Yr = g(ce, 2),
              ys = c(Yr),
              Hr = c(ys),
              $s = c(Hr, !0);
            l(Hr);
            var zr = g(Hr, 2),
              ws = c(zr);
            vs(ws, {
              class: "size-4"
            });
            var en = g(ws);
            l(zr), l(ys), l(Yr), W((Xe, Se, jt, ft, mr, wt, pr, Mr, Wr, jr, is, Nr, os, Gr, Sr) => {
              w(Qt, Xe), w($t, Se), w(Ee, ` ${jt??""}`), w(k, ` ${ft??""}`), _t.disabled = !s(lt) || s(pt), rt.disabled = !s(Ot) || s(pt), At(xt, 1, `reverse-preview-canvas pixelated ${s(pt)?"opacity-40":""}`, "svelte-o0qsvj"), w(xe, `${mr??""}
								${wt??""}`), w(tt, `${pr??""}
								${Mr??""}`), w(Rr, Wr), w(as, jr), w(pe, is), w(yt, `${Nr??""}${s(E)?"+":""}`), w(hr, os), w($s, Gr), zr.disabled = s(pt) || s(R) === null || !s(D), w(en, ` ${Sr??""}`)
            }, [() => m.reverse_preview(), () => s(Ie) ? `${O(s(Ie).ts)} - ${Je(s(Ie).ts)}` : "", () => s(Ie) ? Je(s(Ie).ts) : "", () => h(s(Gt)), () => s(Ie) ? s(Ie).eventCount.toLocaleString() : "0", () => m.reverse_col_events(), () => s(Ie) ? s(Ie).pixelCount.toLocaleString() : "0", () => m.reverse_col_pixels(), () => m.reverse_action_hint(), () => m.reverse_snapshots(), () => s(f) === "historical" ? m.reverse_mode_historical_hint() : m.reverse_mode_depth_hint(), () => s(p).length.toLocaleString(), () => m.reverse_keyboard_hint(), () => m.close(), () => m.reverse_apply()]), me("click", _t, Y), me("click", rt, H), me("click", Hr, () => t(!1)), me("click", zr, ne), S(ae, ee)
          },
          Kt = ae => {
            var ee = us(),
              ce = c(ee),
              Te = c(ce, !0);
            l(ce), l(ee), W(ke => w(Te, ke), [() => m.reverse_history_description()]), S(ae, ee)
          };
        J($e, ae => {
          s(v) === "idle" ? ae(ct) : s(v) === "loading" ? ae(Ft, 1) : s(v) === "applying" ? ae(gt, 2) : s(p).length === 0 ? ae(Zt, 3) : s(f) !== null ? ae(dt, 4) : ae(Kt, -1)
        })
      }
      l(ue), W((ae, ee, ce, Te, ke, ut) => {
        w(V, ` ${ae??""}`), w(Be, ee), w(X, ce), w(ge, Te), At(Ue, 1, `tab transition-all ${s(f)==="depth"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), Ue.disabled = s(v) === "loading" || s(v) === "applying", w(Oe, ke), At(je, 1, `tab transition-all ${s(f)==="historical"?"tab-active bg-primary! text-primary-content! border-primary/60! btn btn-primary btn-sm scale-[1.02] border! shadow-md!":"hover:brightness-105"}`, "svelte-o0qsvj"), je.disabled = s(v) === "loading" || s(v) === "applying", w(qt, ut)
      }, [() => m.reverse_pixels(), () => m.reverse_pixels_description({
        count: e.selectedPixelCount.toString()
      }), () => m.reverse_mode_label(), () => s(f) === "historical" ? m.reverse_mode_historical_hint() : s(f) === "depth" ? m.reverse_mode_depth_hint() : m.reverse_history_description(), () => m.reverse_mode_depth(), () => m.reverse_mode_historical()]), me("click", Ue, () => se("depth")), me("click", je, () => se("historical")), S(i, x)
    },
    $$slots: {
      default: !0
    }
  }), ns()
}
gs(["click"]);
var ia = new Set(["$$slots", "$$events", "$$legacy"]),
  oa = Br('<svg><path d="M200-80q-50 0-85-35t-35-85q0-39 22.5-69.5T160-313v-334q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h334q12-35 42.5-57.5T760-880q50 0 85 35t35 85q0 40-22.5 70.5T800-647v334q35 13 57.5 43.5T880-200q0 50-35 85t-85 35q-39 0-69.5-22.5T647-160H313q-13 35-43.5 57.5T200-80Zm0-640q17 0 28.5-11.5T240-760q0-17-11.5-28.5T200-800q-17 0-28.5 11.5T160-760q0 17 11.5 28.5T200-720Zm560 0q17 0 28.5-11.5T800-760q0-17-11.5-28.5T760-800q-17 0-28.5 11.5T720-760q0 17 11.5 28.5T760-720ZM313-240h334q9-26 28-45t45-28v-334q-26-9-45-28t-28-45H313q-9 26-28 45t-45 28v334q26 9 45 28t28 45Zm447 80q17 0 28.5-11.5T800-200q0-17-11.5-28.5T760-240q-17 0-28.5 11.5T720-200q0 17 11.5 28.5T760-160Zm-560 0q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm0-600Zm560 0Zm0 560Zm-560 0Z"></path></svg>');

function la(r, e) {
  let t = qr(e, ia);
  var n = oa();
  kr(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...t
  })), S(r, n)
}
var ca = new Set(["$$slots", "$$events", "$$legacy"]),
  da = Br('<svg><path fill="currentColor" d="M9 14c1.381 0 2.631-.56 3.536-1.465C13.44 11.631 14 10.381 14 9s-.56-2.631-1.464-3.535C11.631 4.56 10.381 4 9 4s-2.631.56-3.536 1.465C4.56 6.369 4 7.619 4 9s.56 2.631 1.464 3.535A5 5 0 0 0 9 14m0 7c3.518 0 6-1 6-2c0-2-2.354-4-6-4c-3.75 0-6 2-6 4c0 1 2.25 2 6 2m12-9h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2"></path></svg>');

function ua(r, e) {
  let t = qr(e, ca);
  var n = da();
  kr(n, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...t
  })), S(r, n)
}
var Zr = L('<span class="loading loading-spinner loading-xs"></span>'),
  va = L('<div class="mt-3 flex justify-center"><span class="loading loading-spinner"></span></div>'),
  Fs = L('<div class="mt-3 flex justify-center"><p class="text-base-content/80 text-sm"> </p></div>'),
  fa = L('<span class="badge badge-primary badge-sm"> </span>'),
  ha = L('<span class="badge badge-ghost badge-sm"> </span>'),
  Rs = L("<option> </option>"),
  ma = L('<label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label>'),
  pa = L('<div class="border-base-300/60 border-t px-4 pt-3 pb-4"><div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3"><!> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><option> </option><option> </option><option> </option></select></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" type="text"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <input class="input input-xs input-bordered" inputmode="numeric" pattern="[0-9]*"/></label> <label class="form-control"><span class="label pb-1 text-xs"> </span> <select class="select select-xs select-bordered"><option> </option><!></select></label></div></div>'),
  ga = L('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom"><!></button>'),
  _a = L('<button class="btn btn-xs btn-circle btn-soft btn-error tooltip tooltip-bottom ml-0.5"><!></button>'),
  ba = L('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom ml-0.5"><!></button>'),
  xa = L('<button class="btn btn-xs btn-circle btn-soft btn-primary tooltip tooltip-bottom mr-1"><!></button>'),
  ya = L('<button class="btn btn-xs btn-circle btn-soft btn-warning tooltip tooltip-bottom mr-1"><!></button>'),
  wa = L('<div class="size-5"></div> <div class="text-base-content/80 ml-0.5"> </div>', 1),
  Ma = L("<span> </span><span> </span>", 1),
  Sa = L('<span class="badge badge-sm badge-error ml-0.5 border-0"> </span>'),
  Xs = L('<span class="tooltip"><!></span>'),
  Ia = L('<!> <div class="ml-0.5 flex flex-wrap items-center gap-1"><!> <!> <!> <!> <!></div>', 1),
  Pa = L('<span class="text-base-content/60 ml-1 text-xs"> </span>'),
  Ua = L('<span class="text-primary ml-1 text-xs"> </span>'),
  Ta = L('<tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox pointer-events-none"/></th><td class="flex items-center gap-1"><!></td><td class="text-center"> <!> <!></td></tr>'),
  Ea = L('<div class="max-h-[27vh] overflow-x-hidden overflow-y-auto"><table class="table max-w-full"><thead><tr><th class="w-1"><input type="checkbox" class="checkbox-sm checkbox"/></th><th> <button class="btn btn-xs btn-circle btn-ghost tooltip tooltip-bottom ml-0.5"><!></button> <!> <!> <!></th><th class="text-center"><!> <!> </th></tr></thead><tbody></tbody></table></div>'),
  Aa = L('<div class="mb-3"><div class="bg-base-200/60 border-base-300/60 rounded-xl border"><div class="flex flex-wrap items-start justify-between gap-2 px-4 py-3"><button type="button" class="flex min-w-0 flex-1 items-start justify-between gap-3 text-left"><div class="space-y-1"><div class="flex flex-wrap items-center gap-2"><span>▼</span> <span class="text-sm font-semibold"> </span> <!></div> <p class="text-base-content/70 text-xs"> </p></div></button> <div class="flex flex-wrap gap-1"><button class="btn btn-xs btn-soft"> </button> <button class="btn btn-xs btn-ghost"> </button></div></div> <!></div></div> <!>', 1),
  Ca = L('<div class="pointer-events-none w-full select-none"><div class="rounded-t-box bg-base-100 border-base-300 sm:rounded-b-box pointer-events-auto w-full border-t sm:mb-3 sm:shadow-xl"><div class="p-3"><div role="button" tabindex="0" class="flex cursor-grab flex-wrap items-center justify-between gap-1 active:cursor-grabbing"><h2 class="flex items-center gap-1 pl-1 text-lg"><div class="bg-base-content/20 flex size-6 items-center justify-center rounded-full"><!></div> <span class="ml-0.5"> </span> <span class="text-base-content/80 ml-0.5 text-sm"> </span></h2> <div class="flex items-center gap-1"><!> <button><!></button> <button><!></button> <button><!></button> <button class="btn btn-circle btn-sm"><!></button></div></div> <div class="pb-3"><!></div></div></div></div>');

function Ba(r, e) {
  rs(e, !0);
  let t = ir(e, "filters", 7),
    n = ir(e, "userPickerLoading", 3, !1),
    a = ir(e, "busy", 19, () => ({})),
    o = G(!1),
    d = G(void 0),
    v = G(ss({
      x: 0,
      y: 0
    })),
    f, p;
  const E = ["user", "discord_mod", "discord_leader", "sac", "game_master", "game_master_leader", "dev", "admin"];

  function T() {
    return new DOMRect(0, 0, window.innerWidth, window.innerHeight)
  }

  function R(P, q, O) {
    return O >= q ? Math.min(O, Math.max(q, P)) : q
  }

  function K() {
    var Qe;
    if (!s(d)) return;
    const P = ((Qe = e.getDragBounds) == null ? void 0 : Qe.call(e)) ?? T(),
      q = s(d).getBoundingClientRect(),
      O = q.left - s(v).x,
      Pe = q.top - s(v).y;
    _(v, {
      x: R(s(v).x, P.left - O, P.right - O - q.width),
      y: R(s(v).y, P.top - Pe, P.bottom - Pe - q.height)
    }, !0)
  }

  function Ye() {
    var P, q, O, Pe;
    f && ((q = (P = f.handle).hasPointerCapture) != null && q.call(P, f.pointerId) && ((Pe = (O = f.handle).releasePointerCapture) == null || Pe.call(O, f.pointerId)), f = void 0, document.body.style.userSelect = p ?? "", p = void 0, K())
  }

  function He(P) {
    var Qe, Je;
    if (f || P.pointerType === "mouse" && P.button !== 0) return;
    const q = P.target;
    if (q != null && q.closest("button, input, textarea, select, a") || !s(d)) return;
    const O = P.currentTarget,
      Pe = s(d).getBoundingClientRect();
    f = {
      pointerId: P.pointerId,
      handle: O,
      startX: P.clientX,
      startY: P.clientY,
      startPosX: s(v).x,
      startPosY: s(v).y,
      baseLeft: Pe.left - s(v).x,
      baseTop: Pe.top - s(v).y,
      bounds: ((Qe = e.getDragBounds) == null ? void 0 : Qe.call(e)) ?? T(),
      panelWidth: Pe.width,
      panelHeight: Pe.height
    }, p = document.body.style.userSelect, document.body.style.userSelect = "none", (Je = O.setPointerCapture) == null || Je.call(O, P.pointerId), P.preventDefault(), P.stopPropagation()
  }
  mn(() => {
    const P = O => {
        !f || O.pointerId !== f.pointerId || _(v, {
          x: R(f.startPosX + O.clientX - f.startX, f.bounds.left - f.baseLeft, f.bounds.right - f.baseLeft - f.panelWidth),
          y: R(f.startPosY + O.clientY - f.startY, f.bounds.top - f.baseTop, f.bounds.bottom - f.baseTop - f.panelHeight)
        }, !0)
      },
      q = O => {
        (f == null ? void 0 : f.pointerId) === O.pointerId && Ye()
      };
    return window.addEventListener("pointermove", P), window.addEventListener("pointerup", q), window.addEventListener("pointercancel", q), window.addEventListener("resize", K), () => {
      window.removeEventListener("pointermove", P), window.removeEventListener("pointerup", q), window.removeEventListener("pointercancel", q), window.removeEventListener("resize", K), Ye()
    }
  });
  var $ = Ca();
  let ye;
  var de = c($),
    D = c(de),
    Le = c(D);
  Us(Le, "", {}, {
    "touch-action": "none"
  });
  var Ge = c(Le),
    ze = c(Ge),
    at = c(ze);
  la(at, {
    class: "size-4"
  }), l(ze);
  var Ze = g(ze, 2),
    Ce = c(Ze, !0);
  l(Ze);
  var It = g(Ze, 2),
    Re = c(It);
  l(It), l(Ge);
  var ie = g(Ge, 2),
    Q = c(ie);
  zs(Q, () => e.headerActions ?? Ys);
  var We = g(Q, 2);
  let re;
  var lr = c(We);
  jn(lr, {
    class: "size-4"
  }), l(We);
  var Ie = g(We, 2);
  let Gt;
  var mt = c(Ie);
  On(mt, {
    class: "size-4"
  }), l(Ie);
  var lt = g(Ie, 2);
  let Ot;
  var pt = c(lt);
  {
    var Ke = P => {
        var q = Zr();
        S(P, q)
      },
      cr = P => {
        ua(P, {
          class: "size-4"
        })
      };
    J(pt, P => {
      n() ? P(Ke) : P(cr, -1)
    })
  }
  l(lt);
  var kt = g(lt, 2),
    Vt = c(kt);
  Fn(Vt, {
    class: "size-4"
  }), l(kt), l(ie), l(Le);
  var dr = g(Le, 2),
    zt = c(dr);
  {
    var ur = P => {
        var q = va();
        S(P, q)
      },
      br = P => {
        var q = Fs(),
          O = c(q),
          Pe = c(O, !0);
        l(O), l(q), W(() => w(Pe, e.emptyLabel)), S(P, q)
      },
      vr = P => {
        var q = Aa(),
          O = ar(q),
          Pe = c(O),
          Qe = c(Pe),
          Je = c(Qe),
          h = c(Je),
          I = c(h),
          Y = c(I),
          H = g(Y, 2),
          se = c(H, !0);
        l(H);
        var j = g(H, 2);
        {
          var ne = F => {
              var X = fa(),
                le = c(X, !0);
              l(X), W(() => w(le, e.activeFilterCount)), S(F, X)
            },
            i = F => {
              var X = ha(),
                le = c(X, !0);
              l(X), W(ge => w(le, ge), [() => m.optional()]), S(F, X)
            };
          J(j, F => {
            e.hasActiveFilters ? F(ne) : F(i, -1)
          })
        }
        l(I);
        var u = g(I, 2),
          x = c(u);
        l(u), l(h), l(Je);
        var U = g(Je, 2),
          y = c(U),
          A = c(y, !0);
        l(y);
        var C = g(y, 2),
          V = c(C, !0);
        l(C), l(U), l(Qe);
        var oe = g(Qe, 2);
        {
          var Be = F => {
            var X = pa(),
              le = c(X),
              ge = c(le);
            {
              var ve = be => {
                  var rt = ma(),
                    bt = c(rt),
                    et = c(bt, !0);
                  l(bt);
                  var Ne = g(bt, 2),
                    st = c(Ne),
                    xt = c(st, !0);
                  l(st), st.value = st.__value = "";
                  var it = g(st);
                  Qr(it, 16, () => E, De => De, (De, te) => {
                    var xe = Rs(),
                      Ve = c(xe, !0);
                    l(xe);
                    var tt = {};
                    W(() => {
                      w(Ve, Hn[te]), tt !== (tt = te) && (xe.value = (xe.__value = te) ?? "")
                    }), S(De, xe)
                  }), l(Ne), l(rt), W((De, te) => {
                    w(et, De), w(xt, te)
                  }, [() => m.role(), () => m.alliance_hq_select_area_all_roles()]), cs(Ne, () => t().role, De => t().role = De), S(be, rt)
                },
                Ue = N(() => gr.hasPermission(_r.tools.selectPixel.seeRole));
              J(ge, be => {
                s(Ue) && be(ve)
              })
            }
            var Oe = g(ge, 2),
              je = c(Oe),
              qt = c(je, !0);
            l(je);
            var $e = g(je, 2),
              ct = c($e),
              Ft = c(ct, !0);
            l(ct), ct.value = ct.__value = "";
            var gt = g(ct),
              Zt = c(gt, !0);
            l(gt), gt.value = gt.__value = "none";
            var dt = g(gt),
              Kt = c(dt, !0);
            l(dt), dt.value = dt.__value = "timeout";
            var ae = g(dt),
              ee = c(ae, !0);
            l(ae), ae.value = ae.__value = "ban", l($e), l(Oe);
            var ce = g(Oe, 2),
              Te = c(ce),
              ke = c(Te, !0);
            l(Te);
            var ut = g(Te, 2);
            Ur(ut), l(ce);
            var Rt = g(ce, 2),
              Qt = c(Rt),
              Jt = c(Qt, !0);
            l(Qt);
            var $t = g(Qt, 2);
            Ur($t), l(Rt);
            var er = g(Rt, 2),
              tr = c(er),
              Wt = c(tr, !0);
            l(tr);
            var z = g(tr, 2);
            Ur(z), l(er);
            var b = g(er, 2),
              Ee = c(b),
              fe = c(Ee, !0);
            l(Ee);
            var Ae = g(Ee, 2),
              k = c(Ae),
              _e = c(k, !0);
            l(k), k.value = k.__value = "";
            var _t = g(k);
            Qr(_t, 17, () => Ct.colors.entries(), ([be]) => be, (be, rt) => {
              var bt = N(() => xn(s(rt), 1));
              let et = () => s(bt)[0];
              var Ne = Rs(),
                st = c(Ne, !0);
              l(Ne);
              var xt = {};
              W(it => {
                w(st, it), xt !== (xt = et()) && (Ne.value = (Ne.__value = et()) ?? "")
              }, [() => {
                var it, De;
                return ((De = (it = Ln)[et()]) == null ? void 0 : De.call(it)) ?? `${m.color()} ${et()}`
              }]), S(be, Ne)
            }), l(Ae), l(b), l(le), l(X), W((be, rt, bt, et, Ne, st, xt, it, De, te, xe, Ve, tt) => {
              w(qt, be), w(Ft, rt), w(Zt, bt), w(Kt, et), w(ee, Ne), w(ke, st), qe(ut, "placeholder", xt), w(Jt, it), qe($t, "placeholder", De), w(Wt, te), qe(z, "placeholder", xe), w(fe, Ve), w(_e, tt)
            }, [() => m.punishment(), () => m.select_area_any(), () => m.none(), () => m.timeout(), () => m.banned(), () => m.alliance(), () => m.select_area_name_or_id(), () => m.select_area_user_id_from(), () => m.select_area_min(), () => m.select_area_user_id_to(), () => m.select_area_max(), () => m.color(), () => m.select_area_any()]), cs($e, () => t().punishment, be => t().punishment = be), ds(ut, () => t().alliance, be => t().alliance = be), ds($t, () => t().minUserId, be => t().minUserId = be), ds(z, () => t().maxUserId, be => t().maxUserId = be), cs(Ae, () => t().colorIdx, be => t().colorIdx = be), Cs(3, X, () => ks, () => ({
              duration: 100
            })), S(F, X)
          };
          J(oe, F => {
            s(o) && F(Be)
          })
        }
        l(Pe), l(O);
        var ue = g(O, 2);
        {
          var Z = F => {
              var X = Fs(),
                le = c(X),
                ge = c(le, !0);
              l(le), l(X), W(ve => w(ge, ve), [() => m.select_area_no_players_match()]), S(F, X)
            },
            we = F => {
              var X = Ea(),
                le = c(X),
                ge = c(le),
                ve = c(ge),
                Ue = c(ve),
                Oe = c(Ue);
              Ur(Oe), l(Ue);
              var je = g(Ue),
                qt = c(je),
                $e = g(qt),
                ct = c($e);
              Rn(ct, {
                class: "size-3"
              }), l($e);
              var Ft = g($e, 2);
              {
                var gt = z => {
                    var b = ga(),
                      Ee = c(b);
                    fs(Ee, {
                      class: "size-4"
                    }), l(b), W(fe => {
                      qe(b, "data-tip", fe), b.disabled = a().timeout
                    }, [() => m.timeout()]), me("click", b, function(...fe) {
                      var Ae;
                      (Ae = e.ontimeout) == null || Ae.apply(this, fe)
                    }), S(z, b)
                  },
                  Zt = N(() => gr.hasPermission(_r.tools.selectArea.timeout));
                J(Ft, z => {
                  s(Zt) && z(gt)
                })
              }
              var dt = g(Ft, 2);
              {
                var Kt = z => {
                    var b = _a(),
                      Ee = c(b);
                    As(Ee, {
                      class: "size-4"
                    }), l(b), W(fe => {
                      qe(b, "data-tip", fe), b.disabled = a().ban
                    }, [() => m.ban()]), me("click", b, function(...fe) {
                      var Ae;
                      (Ae = e.onban) == null || Ae.apply(this, fe)
                    }), S(z, b)
                  },
                  ae = N(() => gr.hasPermission(_r.tools.selectArea.ban));
                J(dt, z => {
                  s(ae) && z(Kt)
                })
              }
              var ee = g(dt, 2);
              {
                var ce = z => {
                    var b = ba(),
                      Ee = c(b);
                    {
                      var fe = k => {
                          var _e = Zr();
                          S(k, _e)
                        },
                        Ae = k => {
                          Dn(k, {
                            class: "size-4"
                          })
                        };
                      J(Ee, k => {
                        a().phone ? k(fe) : k(Ae, -1)
                      })
                    }
                    l(b), W(k => {
                      qe(b, "data-tip", k), b.disabled = a().phone || !e.hasSelection
                    }, [() => m.phone_verification()]), me("click", b, function(...k) {
                      var _e;
                      (_e = e.onphone) == null || _e.apply(this, k)
                    }), S(z, b)
                  },
                  Te = N(() => gr.hasPermission(_r.tools.selectArea.phoneVerification));
                J(ee, z => {
                  s(Te) && z(ce)
                })
              }
              l(je);
              var ke = g(je),
                ut = c(ke);
              {
                var Rt = z => {
                    var b = xa(),
                      Ee = c(b);
                    {
                      var fe = k => {
                          var _e = Zr();
                          S(k, _e)
                        },
                        Ae = k => {
                          Xn(k, {
                            class: "size-4"
                          })
                        };
                      J(Ee, k => {
                        a().clear ? k(fe) : k(Ae, -1)
                      })
                    }
                    l(b), W(k => {
                      qe(b, "data-tip", k), b.disabled = a().clear || !e.hasSelection
                    }, [() => m.clear()]), me("click", b, function(...k) {
                      var _e;
                      (_e = e.onclear) == null || _e.apply(this, k)
                    }), S(z, b)
                  },
                  Qt = N(() => gr.hasPermission(_r.tools.selectArea.clear));
                J(ut, z => {
                  s(Qt) && z(Rt)
                })
              }
              var Jt = g(ut, 2);
              {
                var $t = z => {
                    var b = ya(),
                      Ee = c(b);
                    {
                      var fe = k => {
                          var _e = Zr();
                          S(k, _e)
                        },
                        Ae = k => {
                          vs(k, {
                            class: "size-4"
                          })
                        };
                      J(Ee, k => {
                        a().reverse ? k(fe) : k(Ae, -1)
                      })
                    }
                    l(b), W(k => {
                      qe(b, "data-tip", k), b.disabled = a().reverse || !e.hasSelection
                    }, [() => m.reverse_pixels()]), me("click", b, function(...k) {
                      var _e;
                      (_e = e.onreverse) == null || _e.apply(this, k)
                    }), S(z, b)
                  },
                  er = N(() => gr.hasPermission(_r.tools.selectArea.reverse));
                J(Jt, z => {
                  s(er) && z($t)
                })
              }
              var tr = g(Jt);
              l(ke), l(ve), l(ge);
              var Wt = g(ge);
              Qr(Wt, 21, () => e.rows, z => z.id, (z, b) => {
                const Ee = N(() => s(b).filteredPixelCount > 0 && s(b).selectedFilteredCount >= s(b).filteredPixelCount);
                var fe = Ta();
                let Ae;
                var k = c(fe),
                  _e = c(k);
                Ur(_e), l(k);
                var _t = g(k),
                  be = c(_t);
                {
                  var rt = te => {
                      var xe = wa(),
                        Ve = g(ar(xe), 2),
                        tt = c(Ve, !0);
                      l(Ve), W(Xt => w(tt, Xt), [() => m.alliance_hq_select_area_not_painted()]), S(te, xe)
                    },
                    bt = te => {
                      var xe = Ia(),
                        Ve = ar(xe);
                      {
                        let pe = N(() => s(b).picture ?? void 0),
                          Me = N(() => s(b).avatarSeed ?? void 0);
                        Cn(Ve, {
                          class: "size-5",
                          get userId() {
                            return s(b).id
                          },
                          get pictureUrl() {
                            return s(pe)
                          },
                          get avatarSeed() {
                            return s(Me)
                          }
                        })
                      }
                      var tt = g(Ve, 2),
                        Xt = c(tt);
                      {
                        let pe = N(() => Vr(s(b).id)),
                          Me = N(() => Vr(s(b).id));
                        qn(Xt, {
                          get userId() {
                            return s(b).id
                          },
                          get linkClass() {
                            return `font-medium ${s(pe)??""} flex gap-1.5`
                          },
                          get textClass() {
                            return `font-medium ${s(Me)??""} flex gap-1.5`
                          },
                          children: (yt, vt) => {
                            var hr = Ma(),
                              Lt = ar(hr),
                              Dr = c(Lt, !0);
                            l(Lt);
                            var rr = g(Lt),
                              Yr = c(rr);
                            l(rr), W(() => {
                              w(Dr, s(b).name), w(Yr, `#${s(b).id??""}`)
                            }), S(yt, hr)
                          },
                          $$slots: {
                            default: !0
                          }
                        })
                      }
                      var xr = g(Xt, 2);
                      {
                        var Fr = pe => {
                          {
                            let Me = N(() => Bs(s(b).allianceId)),
                              yt = N(() => Vr(s(b).allianceId)),
                              vt = N(() => Bs(s(b).allianceId)),
                              hr = N(() => Vr(s(b).allianceId));
                            kn(pe, {
                              get allianceId() {
                                return s(b).allianceId
                              },
                              get linkClass() {
                                return `badge badge-sm ml-0.5 border-0 ${s(Me)??""} ${s(yt)??""}`
                              },
                              get textClass() {
                                return `badge badge-sm ml-0.5 border-0 ${s(vt)??""} ${s(hr)??""}`
                              },
                              children: (Lt, Dr) => {
                                yn();
                                var rr = wn();
                                W(() => w(rr, s(b).allianceName)), S(Lt, rr)
                              },
                              $$slots: {
                                default: !0
                              }
                            })
                          }
                        };
                        J(xr, pe => {
                          s(b).allianceId && pe(Fr)
                        })
                      }
                      var Rr = g(xr, 2);
                      {
                        var Xr = pe => {
                          Bn(pe, {
                            get role() {
                              return s(b).role
                            },
                            big: !1
                          })
                        };
                        J(Rr, pe => {
                          s(b).role && s(b).role !== "user" && pe(Xr)
                        })
                      }
                      var fr = g(Rr, 2);
                      {
                        var yr = pe => {
                          var Me = Sa(),
                            yt = c(Me, !0);
                          l(Me), W(vt => w(yt, vt), [() => m.alliance_asset_deleted()]), S(pe, Me)
                        };
                        J(fr, pe => {
                          s(b).deleted && pe(yr)
                        })
                      }
                      var wr = g(fr, 2);
                      {
                        var as = pe => {
                            var Me = Xs(),
                              yt = c(Me);
                            As(yt, {
                              class: "text-error size-4"
                            }), l(Me), W(vt => qe(Me, "data-tip", vt), [() => m.banned()]), S(pe, Me)
                          },
                          Lr = pe => {
                            var Me = Xs(),
                              yt = c(Me);
                            fs(yt, {
                              class: "text-error size-4"
                            }), l(Me), W(vt => qe(Me, "data-tip", vt), [() => m.timeout()]), S(pe, Me)
                          };
                        J(wr, pe => {
                          s(b).banned ? pe(as) : s(b).timedOut && pe(Lr, 1)
                        })
                      }
                      l(tt), S(te, xe)
                    };
                  J(be, te => {
                    s(b).id === 0 ? te(rt) : te(bt, -1)
                  })
                }
                l(_t);
                var et = g(_t),
                  Ne = c(et),
                  st = g(Ne);
                {
                  var xt = te => {
                    var xe = Pa(),
                      Ve = c(xe);
                    l(xe), W((tt, Xt) => w(Ve, `${tt??""}
														${Xt??""}`), [() => m.of(), () => s(b).totalPixelCount.toLocaleString(navigator.language)]), S(te, xe)
                  };
                  J(st, te => {
                    s(b).filteredPixelCount !== s(b).totalPixelCount && te(xt)
                  })
                }
                var it = g(st, 2);
                {
                  var De = te => {
                    var xe = Ua(),
                      Ve = c(xe);
                    l(xe), W(tt => w(Ve, `(${tt??""})`), [() => s(b).selectedFilteredCount.toLocaleString(navigator.language)]), S(te, xe)
                  };
                  J(it, te => {
                    s(b).selectedFilteredCount > 0 && !s(Ee) && te(De)
                  })
                }
                l(et), l(fe), W(te => {
                  Ae = At(fe, 1, "hover:bg-base-300 cursor-pointer", null, Ae, {
                    "bg-base-200": s(b).selectedFilteredCount > 0
                  }), Ts(_e, s(Ee)), _e.indeterminate = !s(Ee) && s(b).selectedFilteredCount > 0, w(Ne, `${te??""} `)
                }, [() => s(b).filteredPixelCount.toLocaleString(navigator.language)]), me("click", fe, () => e.ontogglerow(s(b).id)), S(z, fe)
              }), l(Wt), l(le), l(X), W((z, b, Ee) => {
                Ts(Oe, e.filteredSelectionState !== "none"), Oe.indeterminate = e.filteredSelectionState === "some", w(qt, `${z??""} `), qe($e, "data-tip", b), w(tr, ` ${Ee??""}`)
              }, [() => m.player(), () => m.copy(), () => m.pixels_painted()]), me("click", Oe, function(...z) {
                var b;
                (b = e.ontogglefiltered) == null || b.apply(this, z)
              }), me("click", $e, function(...z) {
                var b;
                (b = e.oncopy) == null || b.apply(this, z)
              }), S(F, X)
            };
          J(ue, F => {
            e.rows.length === 0 ? F(Z) : F(we, -1)
          })
        }
        W((F, X, le, ge, ve, Ue, Oe) => {
          At(Y, 1, `text-base-content/60 mt-0.5 text-xs transition-transform duration-200 ${s(o)?"rotate-180":""}`), w(se, F), w(x, `${X??""}
											${le??""} -
											${ge??""}
											${ve??""}`), y.disabled = e.rows.length === 0, w(A, Ue), C.disabled = !e.hasActiveFilters, w(V, Oe)
        }, [() => m.filter(), () => e.rows.length.toLocaleString(navigator.language), () => m.players(), () => e.filteredPixelCount.toLocaleString(navigator.language), () => m.pixels(), () => e.filteredSelectionState === "all" ? m.alliance_hq_select_area_clear_filtered() : m.alliance_hq_select_area_select_filtered(), () => m.reset()]), me("click", Je, () => _(o, !s(o))), me("click", y, function(...F) {
          var X;
          (X = e.ontogglefiltered) == null || X.apply(this, F)
        }), me("click", C, function(...F) {
          var X;
          (X = e.onresetfilters) == null || X.apply(this, F)
        }), S(P, q)
      };
    J(zt, P => {
      e.loading ? P(ur) : e.totalRowCount === 0 ? P(br, 1) : P(vr, -1)
    })
  }
  l(dr), l(D), l(de), l($), Hs($, P => _(d, P), () => s(d)), W((P, q, O, Pe, Qe, Je, h) => {
    ye = Us($, "", ye, {
      transform: `translate3d(${s(v).x}px, ${s(v).y}px, 0)`,
      "will-change": "transform"
    }), w(Ce, P), w(Re, `(${q??""}: ${O??""})`), re = At(We, 1, "btn btn-xs tooltip tooltip-bottom", null, re, {
      "btn-soft": e.activeTool !== "brush-circle",
      "btn-primary": e.activeTool === "brush-circle"
    }), qe(We, "data-tip", Pe), qe(We, "aria-pressed", e.activeTool === "brush-circle"), Gt = At(Ie, 1, "btn btn-xs tooltip tooltip-bottom", null, Gt, {
      "btn-soft": e.activeTool !== "brush-square",
      "btn-primary": e.activeTool === "brush-square"
    }), qe(Ie, "data-tip", Qe), qe(Ie, "aria-pressed", e.activeTool === "brush-square"), Ot = At(lt, 1, "btn btn-xs tooltip tooltip-bottom", null, Ot, {
      "btn-soft": e.activeTool !== "user-picker",
      "btn-primary": e.activeTool === "user-picker"
    }), qe(lt, "data-tip", Je), qe(lt, "aria-pressed", e.activeTool === "user-picker"), qe(kt, "aria-label", h)
  }, [() => m.select_area_selected_area(), () => m.pixels(), () => e.totalSelectedPixels.toLocaleString(navigator.language), () => m.select_area_circle_brush_tip({
    size: e.brushDiameter
  }), () => m.select_area_square_brush_tip({
    size: e.brushDiameter
  }), () => m.alliance_hq_select_area_user_picker(), () => m.close()]), me("pointerdown", Le, He), me("click", We, () => e.ontoolchange("brush-circle")), me("click", Ie, () => e.ontoolchange("brush-square")), me("click", lt, () => e.ontoolchange("user-picker")), me("click", kt, function(...P) {
    var q;
    (q = e.onclose) == null || q.apply(this, P)
  }), Cs(3, de, () => ks, () => ({
    duration: 100
  })), S(r, $), ns()
}
gs(["pointerdown", "click"]);

function ka() {
  return {
    role: "",
    alliance: "",
    minUserId: "",
    maxUserId: "",
    colorIdx: "",
    punishment: ""
  }
}

function ms(r) {
  if (typeof r == "number") return Number.isInteger(r) ? r : void 0;
  const e = r.trim();
  if (e === "") return;
  const t = Number(e);
  return Number.isInteger(t) ? t : void 0
}

function _s(r) {
  return r.trim().toLowerCase()
}

function Er(r) {
  return r.tileXs.length
}

function or(r, e = Ct.colors.length) {
  const t = ms(r.colorIdx);
  if (!(t === void 0 || t < 0 || t >= e)) return t
}

function qa(r, e) {
  return e.punishment === "" ? !0 : e.punishment === "ban" ? r.banned === !0 : e.punishment === "timeout" ? r.timedOut === !0 && r.banned !== !0 : r.banned !== !0 && r.timedOut !== !0
}

function Fa(r, e) {
  var o, d;
  if (e.role !== "" && r.role !== e.role) return !1;
  const t = _s(e.alliance);
  if (t !== "") {
    const v = ((o = r.allianceId) == null ? void 0 : o.toString()) ?? "",
      f = ((d = r.allianceName) == null ? void 0 : d.toLowerCase()) ?? "";
    if (!v.includes(t) && !f.includes(t)) return !1
  }
  const n = ms(e.minUserId);
  if (n !== void 0 && r.id < n) return !1;
  const a = ms(e.maxUserId);
  return a !== void 0 && r.id > a ? !1 : qa(r, e)
}

function Ra(r, e, t = or(e)) {
  return Fa(r, e) ? t === void 0 ? Er(r.painted) : r.painted.colorCounts[t] ?? 0 : 0
}

function Xa(r, e = Ct.colors.length) {
  return r.role !== "" || _s(r.alliance) !== "" || r.minUserId.trim() !== "" || r.maxUserId.trim() !== "" || or(r, e) !== void 0 || r.punishment !== ""
}

function La(r, e = Ct.colors.length) {
  let t = 0;
  return r.role !== "" && (t += 1), _s(r.alliance) !== "" && (t += 1), r.minUserId.trim() !== "" && (t += 1), r.maxUserId.trim() !== "" && (t += 1), or(r, e) !== void 0 && (t += 1), r.punishment !== "" && (t += 1), t
}

function Mo(r) {
  return r + .5
}

function Da(r, e, t, n, a, o) {
  const d = r + .5 - t,
    v = e + .5 - n;
  return o === "circle" ? d * d + v * v <= a * a : Math.abs(d) <= a && Math.abs(v) <= a
}
var Yt, Tt;
class Ya {
  constructor() {
    sr(this, "pixels", new Map);
    sr(this, "countByUser", new Map);
    Mt(this, Yt, G(0));
    Mt(this, Tt, G(0))
  }
  get size() {
    return s(B(this, Yt))
  }
  get changeToken() {
    return s(B(this, Tt))
  }
  has(e) {
    return this.pixels.has(e)
  }
  countForUser(e) {
    return this.countByUser.get(e) ?? 0
  }
  addPixel(e) {
    return this.pixels.has(e.key) ? !1 : (this.pixels.set(e.key, e), _(B(this, Yt), s(B(this, Yt)) + 1), this.countByUser.set(e.userId, (this.countByUser.get(e.userId) ?? 0) + 1), _(B(this, Tt), s(B(this, Tt)) + 1), !0)
  }
  removePixel(e) {
    const t = this.pixels.get(e);
    if (!t) return;
    this.pixels.delete(e), _(B(this, Yt), s(B(this, Yt)) - 1);
    const n = this.countByUser.get(t.userId) ?? 0;
    return n <= 1 ? this.countByUser.delete(t.userId) : this.countByUser.set(t.userId, n - 1), _(B(this, Tt), s(B(this, Tt)) + 1), t
  }
  clear() {
    this.pixels.clear(), this.countByUser.clear(), _(B(this, Yt), 0), _(B(this, Tt), s(B(this, Tt)) + 1)
  }
}
Yt = new WeakMap, Tt = new WeakMap;
const Ha = 1e4;

function ps(r, e) {
  return `${r}:${e}`
}
var Ar, Cr, Ht;
class za {
  constructor(e, t) {
    sr(this, "selectedUsers", new hs);
    sr(this, "selection", new Ya);
    Mt(this, Ar, G(ss(ka())));
    sr(this, "pixels", new Map);
    sr(this, "pixelsByTile", new Map);
    Mt(this, Cr, G([]));
    Mt(this, Ht, G(0));
    this.tileSize = e, this.renderer = t
  }
  get filters() {
    return s(B(this, Ar))
  }
  set filters(e) {
    _(B(this, Ar), e, !0)
  }
  get users() {
    return s(B(this, Cr))
  }
  set users(e) {
    _(B(this, Cr), e)
  }
  get changeToken() {
    return s(B(this, Ht)) + this.selection.changeToken
  }
  get totalSelectedPixels() {
    this.selection.changeToken;
    let e = this.selection.size;
    for (const t of this.selectedUsers.values()) e += Er(t.painted);
    return e
  }
  get filteredPixelCountByUser() {
    s(B(this, Ht));
    const e = or(this.filters),
      t = new Map;
    for (const n of this.users) {
      const a = Ra(n, this.filters, e);
      a > 0 && t.set(n.id, a)
    }
    return t
  }
  get filteredUsers() {
    const e = this.filteredPixelCountByUser;
    return this.users.filter(t => e.has(t.id))
  }
  get filteredPixelsTotal() {
    let e = 0;
    for (const t of this.filteredPixelCountByUser.values()) e += t;
    return e
  }
  get hasActiveFilters() {
    return Xa(this.filters)
  }
  get activeFilterCount() {
    return La(this.filters)
  }
  get filteredSelectionState() {
    const e = this.filteredUsers;
    if (e.length === 0) return "none";
    let t = !1,
      n = !0;
    for (const a of e) {
      const o = this.filteredPixelCountByUser.get(a.id) ?? 0,
        d = this.getSelectedFilteredPixelCount(a.id);
      d > 0 && (t = !0), d < o && (n = !1)
    }
    return t ? n ? "all" : "some" : "none"
  }
  get panelRows() {
    const e = this.filteredPixelCountByUser;
    return this.filteredUsers.map(t => ({
      id: t.id,
      name: t.name,
      picture: t.picture,
      avatarSeed: t.avatarSeed,
      allianceId: t.allianceId,
      allianceName: t.allianceName,
      role: t.role,
      deleted: t.deleted,
      banned: t.banned,
      timedOut: t.timedOut,
      filteredPixelCount: e.get(t.id) ?? 0,
      totalPixelCount: Er(t.painted),
      selectedFilteredCount: this.getSelectedFilteredPixelCount(t.id)
    }))
  }
  load(e, t) {
    this.clearSelection(), this.users = e, this.pixels.clear(), this.pixelsByTile.clear();
    for (const n of t) {
      this.pixels.set(n.key, n);
      const a = `${Math.floor(n.x/this.tileSize)}:${Math.floor(n.y/this.tileSize)}`,
        o = this.pixelsByTile.get(a) ?? [];
      o.push(n), this.pixelsByTile.set(a, o)
    }
    _(B(this, Ht), s(B(this, Ht)) + 1)
  }
  clear() {
    this.clearSelection(), this.users = [], this.pixels.clear(), this.pixelsByTile.clear(), this.resetFilters(), _(B(this, Ht), s(B(this, Ht)) + 1)
  }
  clearSelected() {
    this.clearSelection()
  }
  restoreSelection(e, t) {
    this.clearSelection();
    for (const n of e) {
      const a = this.findUser(n);
      a && this.selectedUsers.set(n, a)
    }
    for (const n of t) {
      const a = this.pixels.get(n);
      a && !this.selectedUsers.has(a.userId) && this.selection.addPixel(a)
    }
    this.rebuildRenderer()
  }
  resetFilters() {
    this.filters.role = "", this.filters.alliance = "", this.filters.minUserId = "", this.filters.maxUserId = "", this.filters.colorIdx = "", this.filters.punishment = ""
  }
  findUser(e) {
    return this.users.find(t => t.id === e)
  }
  pixelAt(e, t) {
    return this.pixels.get(ps(e, t))
  }
  getSelectedFilteredPixelCount(e) {
    const t = this.filteredPixelCountByUser.get(e) ?? 0;
    if (t === 0) return 0;
    if (this.selectedUsers.has(e)) return t;
    const n = or(this.filters);
    if (n === void 0) return this.selection.countForUser(e);
    let a = 0;
    for (const o of this.selection.pixels.values()) o.userId === e && o.colorIdx === n && (a += 1);
    return a
  }
  toggleFilteredUser(e) {
    const t = this.findUser(e);
    if (!t) return !1;
    const n = this.filteredPixelCountByUser.get(e) ?? 0;
    return n === 0 ? !1 : this.getSelectedFilteredPixelCount(e) >= n ? this.removeFilteredPixels(t) : this.addFilteredPixels(t)
  }
  toggleAllFiltered() {
    const e = this.filteredUsers;
    if (e.length === 0) return !1;
    const t = this.filteredSelectionState !== "all";
    let n = !1;
    for (const a of e) n = (t ? this.addFilteredPixels(a, !0) : this.removeFilteredPixels(a, !0)) || n;
    return n && this.rebuildRenderer(), n
  }
  selectUser(e) {
    const t = this.findUser(e);
    return !t || t.id === 0 ? !1 : this.selectEntireUser(t)
  }
  deselectUser(e) {
    if (!this.findUser(e)) return !1;
    const n = this.selectedUsers.delete(e),
      a = this.clearSelectedPixelsForUser(e, !0);
    return (n || a) && this.rebuildRenderer(), n || a
  }
  applyBrush(e, t, n, a, o) {
    var p, E;
    const d = this.collectPixelsWithinBrush(e, t, a, n);
    if (d.length === 0) return !1;
    const v = [],
      f = new Map;
    if (o === "add")
      for (const T of d) this.selectedUsers.has(T.userId) || this.selection.has(T.key) || this.selection.addPixel(T) && (v.push(T), f.set(T.userId, (f.get(T.userId) ?? 0) + 1));
    else
      for (const T of d) this.selectedUsers.has(T.userId) && this.expandSelectedUser(T.userId), this.selection.removePixel(T.key) && v.push(T);
    return v.length === 0 ? !1 : (o === "add" ? ((p = this.renderer) == null || p.addPixels(v), this.promoteUsersForFullCoverage(f)) : (E = this.renderer) == null || E.removePixels(v), !0)
  }
  selectedPixels() {
    const e = [],
      t = new Set;
    for (const n of this.selectedUsers.values()) this.forEachUserPixel(n, a => {
      t.has(a.key) || (t.add(a.key), e.push(a))
    });
    for (const n of this.selection.pixels.values()) t.has(n.key) || e.push(n);
    return e
  }
  selectedUserIds() {
    return [...new Set(this.selectedPixels().map(t => t.userId).filter(t => t > 0))]
  }
  clearSelection() {
    var e;
    this.selectedUsers.clear(), this.selection.clear(), (e = this.renderer) == null || e.clear()
  }
  userCoversEntireArea(e) {
    return this.pixels.size > 0 && Er(e.painted) === this.pixels.size
  }
  forEachUserPixel(e, t) {
    var a;
    const n = e.painted;
    for (let o = 0; o < n.tileXs.length; o += 1) {
      const d = n.tileXs[o] * this.tileSize + n.pixelXs[o],
        v = n.tileYs[o] * this.tileSize + n.pixelYs[o],
        f = ps(d, v),
        p = this.pixels.get(f) ?? {
          key: f,
          userId: e.id,
          x: d,
          y: v,
          tile: [Math.floor(d / this.tileSize), Math.floor(v / this.tileSize)],
          pixel: [d - Math.floor(d / this.tileSize) * this.tileSize, v - Math.floor(v / this.tileSize) * this.tileSize],
          colorIdx: n.colorIdxs[o],
          eventId: (a = n.eventIds) == null ? void 0 : a[o]
        };
      t(p, o)
    }
  }
  selectEntireUser(e, t = !1) {
    if (this.userCoversEntireArea(e)) return this.selectedUsers.size === 1 && this.selectedUsers.has(e.id) && this.selection.size === 0 ? !1 : (this.selectedUsers.clear(), this.selectedUsers.set(e.id, e), this.selection.clear(), t || this.rebuildRenderer(), !0);
    let n = this.clearSelectedPixelsForUser(e.id, !0);
    return this.selectedUsers.has(e.id) || (this.selectedUsers.set(e.id, e), n = !0), n && !t && this.rebuildRenderer(), n
  }
  expandSelectedUser(e) {
    const t = this.selectedUsers.get(e);
    t && (this.selectedUsers.delete(e), this.forEachUserPixel(t, n => this.selection.addPixel(n)))
  }
  clearSelectedPixelsForUser(e, t = !1) {
    var a;
    const n = [];
    for (const o of this.selection.pixels.values()) o.userId === e && this.selection.removePixel(o.key) && n.push(o);
    return n.length > 0 && !t && ((a = this.renderer) == null || a.removePixels(n)), n.length > 0
  }
  addFilteredPixels(e, t = !1) {
    var o;
    const n = or(this.filters);
    if (n === void 0) return this.selectEntireUser(e, t);
    const a = [];
    return this.forEachUserPixel(e, d => {
      d.colorIdx === n && !this.selectedUsers.has(d.userId) && this.selection.addPixel(d) && a.push(d)
    }), a.length > 0 && !t && ((o = this.renderer) == null || o.addPixels(a)), a.length > 0
  }
  removeFilteredPixels(e, t = !1) {
    var o;
    const n = or(this.filters);
    if (n === void 0) {
      const d = this.selectedUsers.delete(e.id),
        v = this.clearSelectedPixelsForUser(e.id, !0);
      return (d || v) && !t && this.rebuildRenderer(), d || v
    }
    this.selectedUsers.has(e.id) && this.expandSelectedUser(e.id);
    const a = [];
    return this.forEachUserPixel(e, d => {
      d.colorIdx === n && this.selection.removePixel(d.key) && a.push(d)
    }), a.length > 0 && !t && ((o = this.renderer) == null || o.removePixels(a)), a.length > 0
  }
  promoteUsersForFullCoverage(e) {
    let t = !1;
    for (const [n, a] of e) {
      if (this.selectedUsers.has(n)) continue;
      const o = this.findUser(n);
      if (!o) continue;
      this.selection.countForUser(n) - a + a >= Er(o.painted) && (this.selectEntireUser(o, !0), t = !0)
    }
    t && this.rebuildRenderer()
  }
  collectPixelsWithinBrush(e, t, n, a) {
    const o = Math.floor((e - n) / this.tileSize),
      d = Math.floor((e + n) / this.tileSize),
      v = Math.floor((t - n) / this.tileSize),
      f = Math.floor((t + n) / this.tileSize),
      p = [];
    for (let E = v; E <= f; E += 1)
      for (let T = o; T <= d; T += 1) {
        const R = this.pixelsByTile.get(`${T}:${E}`);
        if (R)
          for (const K of R) Da(K.x, K.y, e, t, n, a) && p.push(K)
      }
    return p
  }
  rebuildRenderer() {
    if (!this.renderer) return;
    this.renderer.clear();
    for (const t of this.selectedUsers.values()) {
      if (this.renderer.addPaintedCoordinates) {
        this.renderer.addPaintedCoordinates(t.painted, this.tileSize);
        continue
      }
      const n = [];
      this.forEachUserPixel(t, a => n.push(a)), this.renderer.addPixels(n)
    }
    const e = [...this.selection.pixels.values()].filter(t => !this.selectedUsers.has(t.userId));
    if (e.length !== 0) {
      if (e.length < Ha) {
        this.renderer.addPixels(e);
        return
      }
      this.renderer.addRectangles(Wa(e))
    }
  }
}
Ar = new WeakMap, Cr = new WeakMap, Ht = new WeakMap;

function Wa(r) {
  const e = [...r].sort((a, o) => a.y - o.y || a.x - o.x),
    t = [];
  let n;
  for (const a of e) {
    if (n && n.minY === a.y && n.maxX + 1 === a.x) {
      n.maxX = a.x;
      continue
    }
    n = {
      minX: a.x,
      minY: a.y,
      maxX: a.x,
      maxY: a.y
    }, t.push(n)
  }
  return t
}
const ja = 3e4,
  Na = 1e6;

function Ga(r, e, t, n, a) {
  var Ye;
  const o = ((Ye = r[0]) == null ? void 0 : Ye.durationUs) ?? Math.max(1, Math.round(83333.33333333333)),
    d = vi(r),
    v = ui(r),
    f = Oa();
  let p = Ls(r, t, n, o, d, a, 0);
  const T = f.byteLength + p.byteLength + 8;
  p = Ls(r, t, n, o, d, a, T);
  const R = di("mdat", v),
    K = [f, p, R];
  for (const He of r) K.push(He.data);
  return new Blob(K, {
    type: e.mimeType
  })
}

function Oa() {
  return Bt("ftyp", [nr("isom"), M(512), nr("isom"), nr("iso2"), nr("avc1"), nr("mp41")])
}

function Ls(r, e, t, n, a, o, d) {
  return Bt("moov", [Va(a), Za(r, e, t, n, a, o, d)])
}

function Va(r) {
  return ot("mvhd", 0, 0, [M(0), M(0), M(1e6), M(r), M(65536), Fe(256), Fe(0), M(0), M(0), Ws(), M(0), M(0), M(0), M(0), M(0), M(0), M(2)])
}

function Za(r, e, t, n, a, o, d) {
  return Bt("trak", [Ka(e, t, a), Qa(r, e, t, n, a, o, d)])
}

function Ka(r, e, t) {
  return ot("tkhd", 0, 7, [M(0), M(0), M(1), M(0), M(t), M(0), M(0), Fe(0), Fe(0), Fe(0), Fe(0), Ws(), M(r << 16), M(e << 16)])
}

function Qa(r, e, t, n, a, o, d) {
  return Bt("mdia", [Ja(a), $a(), ei(r, e, t, n, o, d)])
}

function Ja(r) {
  return ot("mdhd", 0, 0, [M(0), M(0), M(1e6), M(r), Fe(0), Fe(0)])
}

function $a() {
  return ot("hdlr", 0, 0, [M(0), nr("vide"), M(0), M(0), M(0), nr("VideoHandler\0")])
}

function ei(r, e, t, n, a, o) {
  return Bt("minf", [ot("vmhd", 0, 1, [Fe(0), Fe(0), Fe(0), Fe(0)]), ti(), ri(r, e, t, n, a, o)])
}

function ti() {
  const r = ot("url ", 0, 1, []),
    e = ot("dref", 0, 0, [M(1), r]);
  return Bt("dinf", [e])
}

function ri(r, e, t, n, a, o) {
  return Bt("stbl", [si(e, t, a), ai(r.length, n), ii(r.length), oi(r), li(o), ci(r)])
}

function si(r, e, t) {
  return ot("stsd", 0, 0, [M(1), ni(r, e, t)])
}

function ni(r, e, t) {
  const n = new Uint8Array(32);
  return Bt("avc1", [new Uint8Array(6), Fe(1), Fe(0), Fe(0), M(0), M(0), M(0), Fe(r), Fe(e), M(4718592), M(4718592), M(0), Fe(1), n, Fe(24), Fe(65535), Bt("avcC", [t])])
}

function ai(r, e) {
  return ot("stts", 0, 0, [M(1), M(r), M(e)])
}

function ii(r) {
  return ot("stsc", 0, 0, [M(1), M(1), M(r), M(1)])
}

function oi(r) {
  const e = new Array(r.length);
  for (let t = 0; t < r.length; t += 1) e[t] = M(r[t].data.byteLength);
  return ot("stsz", 0, 0, [M(0), M(r.length), ...e])
}

function li(r) {
  if (r > 4294967295) throw new Error(m.select_area_timelapse_unsupported());
  return ot("stco", 0, 0, [M(1), M(r)])
}

function ci(r) {
  let e = 0;
  for (const a of r) a.keyFrame && (e += 1);
  const t = new Array(e);
  let n = 0;
  for (let a = 0; a < r.length; a += 1) r[a].keyFrame && (t[n] = M(a + 1), n += 1);
  return ot("stss", 0, 0, [M(e), ...t])
}

function Bt(r, e) {
  const t = js(e),
    n = new Uint8Array(8 + t);
  new DataView(n.buffer).setUint32(0, n.byteLength, !1), bs(n, 4, r);
  let o = 8;
  for (const d of e) n.set(d, o), o += d.byteLength;
  return n
}

function ot(r, e, t, n) {
  const a = new Uint8Array(4);
  return a[0] = e & 255, a[1] = t >> 16 & 255, a[2] = t >> 8 & 255, a[3] = t & 255, Bt(r, [a, ...n])
}

function di(r, e) {
  if (!Number.isSafeInteger(e) || e < 0 || e > 4294967287) throw new Error(m.select_area_timelapse_unsupported());
  const t = new Uint8Array(8);
  return new DataView(t.buffer).setUint32(0, e + 8, !1), bs(t, 4, r), t
}

function Ws() {
  const r = new Uint8Array(36),
    e = new DataView(r.buffer);
  return e.setUint32(0, 65536, !1), e.setUint32(16, 65536, !1), e.setUint32(32, 1073741824, !1), r
}

function nr(r) {
  const e = new Uint8Array(r.length);
  return bs(e, 0, r), e
}

function Fe(r) {
  const e = new Uint8Array(2);
  return new DataView(e.buffer).setUint16(0, r, !1), e
}

function M(r) {
  if (!Number.isSafeInteger(r) || r < 0 || r > 4294967295) throw new Error(m.select_area_timelapse_unsupported());
  const e = new Uint8Array(4);
  return new DataView(e.buffer).setUint32(0, r, !1), e
}

function bs(r, e, t) {
  for (let n = 0; n < t.length; n += 1) r[e + n] = t.charCodeAt(n) & 255
}

function ui(r) {
  let e = 0;
  for (const t of r) e += t.data.byteLength;
  return e
}

function vi(r) {
  const e = r[r.length - 1];
  return e ? e.timestampUs + e.durationUs : 0
}

function fi(r) {
  const e = ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : new Uint8Array(r),
    t = new Uint8Array(e.byteLength);
  return t.set(e), t
}

function hi(r, e, t, n, a) {
  const o = e.webmCodecId;
  if (!o) throw new Error(m.select_area_timelapse_unsupported());
  const d = ht([26, 69, 223, 163], [...nt([66, 134], 1), ...nt([66, 247], 1), ...nt([66, 242], 4), ...nt([66, 243], 8), ...es([66, 130], "webm"), ...nt([66, 135], 4), ...nt([66, 133], 2)]),
    v = [...mi(r), ...pi(o, t, n, a), ...gi(r)],
    f = ht([24, 83, 128, 103], v),
    p = [];
  for (const E of d) p.push(E);
  for (const E of f) p.push(E);
  return new Blob(p, {
    type: e.mimeType
  })
}

function mi(r) {
  const e = r[r.length - 1],
    t = e ? (e.timestampUs + e.durationUs) / 1e3 : 0;
  return ht([21, 73, 169, 102], [...nt([42, 215, 177], Na), ...bi([68, 137], t), ...es([77, 128], "wplace"), ...es([87, 65], "wplace")])
}

function pi(r, e, t, n) {
  const a = ht([174], [...nt([215], 1), ...nt([115, 197], 1), ...nt([131], 1), ...es([134], r), ...nt([35, 227, 131], Math.round(1e9 / n)), ...ht([224], [...nt([176], e), ...nt([186], t)])]);
  return ht([22, 84, 174, 107], a)
}

function gi(r) {
  const e = [];
  let t = -1,
    n = [];
  for (const a of r) {
    const o = Math.round(a.timestampUs / 1e3);
    (t < 0 || o - t > ja) && (n.length > 0 && e.push(...ht([31, 67, 182, 117], n)), t = o, n = nt([231], t)), n.push(..._i(a, t))
  }
  return n.length > 0 && e.push(...ht([31, 67, 182, 117], n)), e
}

function _i(r, e) {
  const n = Math.round(r.timestampUs / 1e3) - e;
  if (n < -32768 || n > 32767) throw new Error(m.select_area_timelapse_unsupported());
  const a = new Uint8Array(4);
  return a[0] = 129, a[1] = n >> 8 & 255, a[2] = n & 255, a[3] = r.keyFrame ? 128 : 0, ht([163], [a, r.data])
}

function ht(r, e) {
  const t = js(e);
  return [new Uint8Array(r), yi(t), ...e]
}

function nt(r, e) {
  return ht(r, [xi(e)])
}

function bi(r, e) {
  const t = new Uint8Array(8);
  return new DataView(t.buffer).setFloat64(0, e, !1), ht(r, [t])
}

function es(r, e) {
  return ht(r, [new TextEncoder().encode(e)])
}

function xi(r) {
  if (!Number.isSafeInteger(r) || r < 0) throw new Error(m.select_area_timelapse_unsupported());
  let e = 1;
  for (; e < 8 && r >= 2 ** (e * 8);) e += 1;
  const t = new Uint8Array(e);
  let n = r;
  for (let a = e - 1; a >= 0; a -= 1) t[a] = n & 255, n = Math.floor(n / 256);
  return t
}

function yi(r) {
  if (!Number.isSafeInteger(r) || r < 0) throw new Error(m.select_area_timelapse_unsupported());
  for (let e = 1; e <= 8; e += 1) {
    const t = 2 ** (7 * e) - 2;
    if (r <= t) {
      const n = new Uint8Array(e);
      let a = r;
      for (let o = e - 1; o >= 0; o -= 1) n[o] = a & 255, a = Math.floor(a / 256);
      return n[0] |= 1 << 8 - e, n
    }
  }
  throw new Error(m.select_area_timelapse_unsupported())
}

function js(r) {
  let e = 0;
  for (const t of r) e += t.byteLength;
  return e
}
const wi = 4096,
  Mi = .15,
  Si = 5e5,
  Ii = 25e6,
  Pi = 8,
  Ui = /^#[0-9a-fA-F]{6}$/;

function So(r) {
  const e = new DataView(r);
  if (r.byteLength < 5) return {
    view: e,
    frames: []
  };
  const t = e.getUint8(0);
  if (t !== 1) throw new Error(`unsupported timelapse binary version: ${t}`);
  const n = e.getUint32(1, !0);
  let a = 5;
  const o = new Array(n);
  for (let d = 0; d < n; d += 1) {
    const v = e.getUint32(a, !0),
      p = e.getInt32(a + 4, !0) * 4294967296 + v;
    a += 8;
    const E = e.getUint32(a, !0);
    a += 4, o[d] = {
      timestamp: p,
      changeCount: E,
      dataOffset: a
    }, a += E * 13
  }
  return {
    view: e,
    frames: o
  }
}

function Ns(r, e, t, n, a, o) {
  const {
    data: d
  } = r, {
    sampledWidth: v,
    sampledHeight: f,
    width: p,
    height: E,
    minGlobalX: T,
    minGlobalY: R,
    downsample: K
  } = e, Ye = Ct.colors.length;
  let He = v,
    $ = f,
    ye = -1,
    de = -1,
    D = n.dataOffset;
  for (let Le = 0; Le < n.changeCount; Le += 1) {
    const Ge = t.getInt32(D, !0),
      ze = t.getInt32(D + 4, !0),
      at = t.getUint16(D + 8, !0),
      Ze = t.getUint16(D + 10, !0),
      Ce = t.getUint8(D + 12);
    D += 13;
    const It = Ge * o + at - T,
      Re = ze * o + Ze - R;
    if (It < 0 || Re < 0 || It >= p || Re >= E) continue;
    const ie = Math.floor(It / K),
      Q = Math.floor(Re / K);
    if (ie < 0 || Q < 0 || ie >= v || Q >= f) continue;
    ie < He && (He = ie), Q < $ && ($ = Q), ie > ye && (ye = ie), Q > de && (de = Q);
    const We = (Q * v + ie) * 4;
    if (Ce === 0) {
      Ti(d, We, ie, Q, a);
      continue
    }
    const re = Ct.colors[Math.min(Ce, Ye - 1)];
    d[We] = re.rgb[0], d[We + 1] = re.rgb[1], d[We + 2] = re.rgb[2], d[We + 3] = 255
  }
  if (!(ye < He || de < $)) return {
    minX: He,
    minY: $,
    maxX: ye,
    maxY: de
  }
}

function Ti(r, e, t, n, a) {
  if (a) {
    const o = (t + n) % 2 === 0 ? 232 : 218;
    r[e] = o, r[e + 1] = o, r[e + 2] = o, r[e + 3] = 255;
    return
  }
  r[e] = 0, r[e + 1] = 0, r[e + 2] = 0, r[e + 3] = 0
}

function Ei(r, e, t) {
  for (let n = 0; n < t; n += 1) {
    const a = n * e;
    for (let o = 0; o < e; o += 1) {
      const d = (a + o) * 4,
        v = (o + n) % 2 === 0 ? 232 : 218;
      r[d] = v, r[d + 1] = v, r[d + 2] = v, r[d + 3] = 255
    }
  }
}

function Io(r) {
  const e = r.maxGlobalX - r.minGlobalX + 1,
    t = r.maxGlobalY - r.minGlobalY + 1;
  if (e <= 0 || t <= 0) return;
  const n = wi,
    a = Math.max(1, Math.ceil(Math.max(e / n, t / n))),
    o = Math.max(1, Math.ceil(e / a)),
    d = Math.max(1, Math.ceil(t / a)),
    v = Math.max(o, d),
    f = n / v;
  return {
    minGlobalX: r.minGlobalX,
    minGlobalY: r.minGlobalY,
    width: e,
    height: t,
    downsample: a,
    sampledWidth: o,
    sampledHeight: d,
    outputWidth: Ds(o * f),
    outputHeight: Ds(d * f)
  }
}

function Ds(r) {
  const e = Math.max(2, Math.round(r));
  return e % 2 === 0 ? e : e + 1
}

function Gs(r, e, t) {
  const n = Math.round(r * e * t * Mi);
  return Ai(n, Si, Ii)
}

function Ai(r, e, t) {
  return Number.isFinite(r) ? Math.min(t, Math.max(e, r)) : e
}

function Po(r) {
  if (typeof r != "string") return null;
  const e = r.trim();
  return Ui.test(e) ? e.toUpperCase() : null
}

function Uo() {
  if (typeof MediaRecorder > "u") return;
  const r = ["video/webm;codecs=vp8", "video/webm;codecs=vp9", "video/webm"];
  for (const e of r)
    if (MediaRecorder.isTypeSupported(e)) return e
}
async function To(r, e, t) {
  if (typeof VideoEncoder > "u" || typeof VideoFrame > "u") return;
  const n = [{
      codec: "avc1.64003C",
      container: "mp4",
      webmCodecId: void 0,
      mimeType: "video/mp4;codecs=avc1.64003C",
      fileExtension: "mp4"
    }, {
      codec: "avc1.640034",
      container: "mp4",
      webmCodecId: void 0,
      mimeType: "video/mp4;codecs=avc1.640034",
      fileExtension: "mp4"
    }, {
      codec: "avc1.640033",
      container: "mp4",
      webmCodecId: void 0,
      mimeType: "video/mp4;codecs=avc1.640033",
      fileExtension: "mp4"
    }, {
      codec: "vp8",
      container: "webm",
      webmCodecId: "V_VP8",
      mimeType: "video/webm;codecs=vp8",
      fileExtension: "webm"
    }, {
      codec: "vp09.00.10.08",
      container: "webm",
      webmCodecId: "V_VP9",
      mimeType: "video/webm;codecs=vp9",
      fileExtension: "webm"
    }],
    a = ["prefer-hardware", "no-preference", "prefer-software"];
  for (const o of a)
    for (const d of n) {
      if (t && d.container !== t) continue;
      const v = {
        codec: d.codec,
        width: r.outputWidth,
        height: r.outputHeight,
        bitrate: Gs(r.outputWidth, r.outputHeight, e.fps),
        bitrateMode: "variable",
        framerate: e.fps,
        latencyMode: "quality",
        hardwareAcceleration: o
      };
      d.container === "mp4" && (v.avc = {
        format: "avc"
      });
      try {
        const f = await VideoEncoder.isConfigSupported(v);
        if (f.supported) return {
          ...d,
          encoderConfig: f.config ?? v,
          requestedHardwareAcceleration: o
        }
      } catch {}
    }
}

function Os(r) {
  const {
    imageData: e,
    renderFrame: t,
    renderContext: n,
    frameIndex: a,
    drawTransparentPattern: o,
    tileSize: d
  } = r;
  o ? Ei(e.data, t.sampledWidth, t.sampledHeight) : e.data.fill(0);
  const v = a.frames[0];
  Ns(e, t, a.view, v, o, d), n.putImageData(e, 0, 0), Vs(r), Zs(r, v.timestamp)
}

function Vs(r) {
  const {
    outputContext: e,
    renderCanvas: t,
    renderFrame: n,
    mapBackgroundCanvas: a,
    options: o
  } = r;
  e.imageSmoothingEnabled = !1, o.backgroundColor ? (e.fillStyle = o.backgroundColor, e.fillRect(0, 0, n.outputWidth, n.outputHeight)) : a ? e.drawImage(a, 0, 0, n.outputWidth, n.outputHeight) : (e.fillStyle = "#e2e8f0", e.fillRect(0, 0, n.outputWidth, n.outputHeight)), e.drawImage(t, 0, 0, n.outputWidth, n.outputHeight)
}

function Zs(r, e) {
  if (!r.options.showDate) return;
  const {
    outputContext: t,
    renderFrame: n,
    timestampFormatter: a
  } = r, o = (a ?? new Intl.DateTimeFormat).format(e), d = Math.max(12, Math.round(Math.min(n.outputWidth, n.outputHeight) * .045)), v = Math.max(8, Math.round(d * .65));
  t.font = `600 ${d}px ui-monospace, SFMono-Regular, Menlo, monospace`, t.textBaseline = "bottom";
  const f = t.measureText(o).width,
    p = d + v,
    E = f + v * 2,
    T = Math.max(4, Math.round(v * .4)),
    R = n.outputHeight - p - T;
  t.fillStyle = "rgba(15, 23, 42, 0.78)", t.fillRect(T, R, E, p), t.fillStyle = "#f8fafc", t.fillText(o, T + v, n.outputHeight - T)
}

function Ks(r, e) {
  const {
    imageData: t,
    renderFrame: n,
    renderContext: a,
    frameIndex: o,
    drawTransparentPattern: d,
    tileSize: v
  } = r;
  if (e.changeCount > 0) {
    const f = Ns(t, n, o.view, e, d, v);
    f && a.putImageData(t, 0, 0, f.minX, f.minY, f.maxX - f.minX + 1, f.maxY - f.minY + 1)
  }
  Vs(r), Zs(r, e.timestamp)
}
async function Eo(r, e) {
  console.info("Timelapse export is using WebCodecs video renderer.", {
    container: e.container,
    codec: e.codec,
    requestedHardwareAcceleration: e.requestedHardwareAcceleration ?? "not-requested",
    hardwareAcceleration: e.encoderConfig.hardwareAcceleration ?? "not-returned",
    latencyMode: e.encoderConfig.latencyMode ?? "not-returned",
    width: r.renderFrame.outputWidth,
    height: r.renderFrame.outputHeight,
    fps: r.options.fps,
    bitrate: e.encoderConfig.bitrate
  });
  const t = Math.max(1, Math.round(1e6 / r.options.fps)),
    n = Math.max(1, Math.round(r.options.fps * 5)),
    a = [];
  let o, d, v;
  try {
    v = new VideoEncoder({
      output: (p, E) => {
        var K;
        const T = (K = E == null ? void 0 : E.decoderConfig) == null ? void 0 : K.description;
        !o && T && (o = fi(T));
        const R = new Uint8Array(p.byteLength);
        p.copyTo(R), a.push({
          data: R,
          timestampUs: p.timestamp,
          durationUs: p.duration ?? t,
          keyFrame: p.type === "key"
        })
      },
      error: p => {
        d = p
      }
    }), v.configure(e.encoderConfig), Os(r);
    const f = async p => {
      if (!v) throw new Error(m.select_area_timelapse_unsupported());
      const E = new VideoFrame(r.outputCanvas, {
        timestamp: p * t,
        duration: t
      });
      for (v.encode(E, {
          keyFrame: p === 0 || p % n === 0
        }), E.close(); v.encodeQueueSize > Pi;)
        if (await $r(0), d) throw d
    };
    await f(0);
    for (let p = 1; p < r.frameIndex.frames.length; p += 1)
      if (Ks(r, r.frameIndex.frames[p]), await f(p), d) throw d;
    if (await v.flush(), d) throw d
  } finally {
    v && v.state !== "closed" && v.close()
  }
  if (a.length === 0) throw new Error(m.select_area_timelapse_unsupported());
  if (a.sort((f, p) => f.timestampUs - p.timestampUs), e.container === "mp4") {
    if (!o) throw new Error(m.select_area_timelapse_unsupported());
    return {
      blob: Ga(a, e, r.renderFrame.outputWidth, r.renderFrame.outputHeight, o),
      fileExtension: "mp4"
    }
  }
  if (!e.webmCodecId) throw new Error(m.select_area_timelapse_unsupported());
  return {
    blob: hi(a, e, r.renderFrame.outputWidth, r.renderFrame.outputHeight, r.options.fps),
    fileExtension: "webm"
  }
}
async function Ao(r, e) {
  const t = Gs(r.renderFrame.outputWidth, r.renderFrame.outputHeight, r.options.fps);
  console.info("Timelapse export is using MediaRecorder video renderer.", {
    mimeType: e,
    width: r.renderFrame.outputWidth,
    height: r.renderFrame.outputHeight,
    fps: r.options.fps,
    bitrate: t
  }), Os(r);
  const n = Math.max(1, Math.round(1e3 / r.options.fps));
  let a, o, d;
  try {
    a = r.outputCanvas.captureStream(0);
    const v = a.getVideoTracks()[0];
    if (!v) throw new Error(m.select_area_timelapse_unsupported());
    const f = [];
    d = new Promise((p, E) => {
      o = new MediaRecorder(a, {
        mimeType: e,
        videoBitsPerSecond: t
      }), o.ondataavailable = T => {
        T.data.size > 0 && f.push(T.data)
      }, o.onerror = () => {
        E(new Error(m.select_area_timelapse_unsupported()))
      }, o.onstop = () => {
        p(new Blob(f, {
          type: e
        }))
      }, o.start()
    }), v.requestFrame(), await $r(n);
    for (let p = 1; p < r.frameIndex.frames.length; p += 1) Ks(r, r.frameIndex.frames[p]), v.requestFrame(), await $r(n);
    return await $r(n * 2), o == null || o.stop(), {
      blob: await d,
      fileExtension: "webm"
    }
  } catch (v) {
    throw o && o.state !== "inactive" && o.stop(), d && await d.catch(() => {}), v
  } finally {
    a == null || a.getTracks().forEach(v => v.stop())
  }
}

function Ci(r, e) {
  const t = URL.createObjectURL(r),
    n = document.createElement("a");
  n.href = t, n.download = e, document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(t)
}

function $r(r) {
  return new Promise(e => {
    window.setTimeout(e, r)
  })
}
const Qs = r => `${r.x}:${r.y}`;

function Bi(r, e) {
  if (e.mode === "depth") return r[r.length - 1 - e.snapshotDepth];
  for (let t = r.length - 1; t >= 0; t -= 1)
    if (r[t].ts < e.timestamp) return r[t]
}

function Js(r, e, t, n, a) {
  const o = Math.floor(r.x / a),
    d = Math.floor(r.y / a);
  return {
    tileX: o,
    tileY: d,
    pixelX: r.x - o * a,
    pixelY: r.y - d * a,
    color: e,
    userId: t,
    allianceId: n
  }
}

function ki(r, e, t, n, a = 64) {
  return r.map(o => {
    const d = Bi(e.get(Qs(o)) ?? [], t),
      v = (d == null ? void 0 : d.userId) ?? 0;
    return Js(o, (d == null ? void 0 : d.newColor) ?? 0, v, n(v), a)
  })
}

function qi(r, e, t, n = 64) {
  const a = new Map(e.map(o => [`${o.tileX*n+o.pixelX}:${o.tileY*n+o.pixelY}`, o]));
  return r.map(o => {
    const d = a.get(Qs(o));
    if (d) return d;
    const v = o.userId ?? 0;
    return Js(o, o.color, v, t(v), n)
  })
}
var Fi = L('<span class="loading loading-spinner loading-xs"></span>'),
  Ri = L('<button class="btn btn-xs tooltip tooltip-bottom btn-soft"><!></button>'),
  Xi = L("<!> <!> <!>", 1);

function Co(r, e) {
  rs(e, !0);
  const t = h => {
      var I = Ri(),
        Y = c(I);
      {
        var H = j => {
            var ne = Fi();
            S(j, ne)
          },
          se = j => {
            Yn(j, {
              class: "size-4"
            })
          };
        J(Y, j => {
          s(E) ? j(H) : j(se, -1)
        })
      }
      l(I), W(j => {
        qe(I, "data-tip", j), I.disabled = s(E) || s(a)
      }, [() => m.download()]), me("click", I, Gt), S(h, I)
    },
    n = new za(64, {
      clear: () => e.selectionRenderer.clear(),
      addPixels: h => e.selectionRenderer.addPixels(h),
      removePixels: h => e.selectionRenderer.removePixels(h),
      addRectangles: h => e.selectionRenderer.addRectangles(h),
      addPaintedCoordinates: (h, I) => {
        var Y, H;
        return (H = (Y = e.selectionRenderer).addPaintedCoordinates) == null ? void 0 : H.call(Y, h, I)
      }
    });
  let a = G(!0),
    o = G(0),
    d = G(void 0),
    v = "",
    f = 0,
    p = G(!1),
    E = G(!1),
    T = G(!1),
    R = G("timeout"),
    K = G(ss([])),
    Ye = G(void 0),
    He = G(!1),
    $ = G(void 0),
    ye = new Map,
    de = G([]);
  const D = N(() => e.brushRadius * 2 + 1),
    Le = N(() => e.anchor ?? s(d)),
    Ge = h => `${h.x}:${h.y}`,
    ze = N(() => new Map(n.users.map(h => [h.id, h]))),
    at = N(() => (n.changeToken, [...n.pixels.values()].map(h => ({
      x: h.x,
      y: h.y,
      color: h.colorIdx,
      eventId: h.eventId,
      userId: h.userId
    })))),
    Ze = N(() => (n.changeToken, n.selectedPixels().map(h => ({
      x: h.x,
      y: h.y,
      color: h.colorIdx,
      eventId: h.eventId,
      userId: h.userId
    })))),
    Ce = N(() => (n.changeToken, n.selectedUserIds())),
    It = N(() => ({
      minGlobalX: e.area.minX,
      minGlobalY: e.area.minY,
      maxGlobalX: e.area.maxX,
      maxGlobalY: e.area.maxY
    }));
  Kr(() => {
    const h = `${e.allianceId}:${e.area.minX}:${e.area.minY}:${e.area.maxX}:${e.area.maxY}`;
    h !== v && (v = h, Re(Mn(() => e.eventHwm)))
  }), pn(() => {
    f += 1, n.clear()
  });
  async function Re(h = e.eventHwm) {
    var Y;
    const I = ++f;
    _(a, !0), n.clear();
    try {
      const H = await Et.getAdminAllianceHqSelectArea(e.allianceId, e.area, h);
      if (I !== f) return;
      const se = new Map,
        j = [];
      let ne = 0;
      for (const y of H.chunks) {
        const A = y.bounds.maxX - y.bounds.minX + 1,
          C = y.bounds.maxY - y.bounds.minY + 1;
        for (let V = 0; V < C; V += 1)
          for (let oe = 0; oe < A; oe += 1) {
            const Be = V * A + oe,
              ue = y.bounds.minX + oe,
              Z = y.bounds.minY + V,
              we = y.paintedBy[Be],
              F = y.colors[Be],
              X = Number(y.eventIds[Be]),
              le = Math.floor(ue / 64),
              ge = Math.floor(Z / 64),
              ve = se.get(we) ?? {
                tileXs: [],
                tileYs: [],
                pixelXs: [],
                pixelYs: [],
                colorIdxs: [],
                colorCounts: new Uint32Array(Ct.colors.length),
                eventIds: []
              };
            if (se.has(we) || se.set(we, ve), ve.tileXs.push(le), ve.tileYs.push(ge), ve.pixelXs.push(ue - le * 64), ve.pixelYs.push(Z - ge * 64), ve.colorIdxs.push(F), ve.colorCounts[F] += 1, (Y = ve.eventIds) == null || Y.push(X), j.push({
                key: ps(ue, Z),
                userId: we,
                x: ue,
                y: Z,
                tile: [le, ge],
                pixel: [ue - le * 64, Z - ge * 64],
                colorIdx: F,
                eventId: X || void 0
              }), ne += 1, ne % 5e4 === 0 && (await new Promise(Ue => setTimeout(Ue, 0)), I !== f)) return
          }
      }
      const i = [...se.keys()].filter(y => y > 0),
        u = i.length > 0 ? (await Et.getMultipleUsersInfoById(i)).users : [];
      if (I !== f) return;
      const x = new Map(u.map(y => [y.id, y])),
        U = [...se.entries()].map(([y, A]) => ({
          ...x.get(y) ?? {
            id: y,
            name: y === 0 ? m.alliance_hq_select_area_not_painted() : m.player(),
            role: "user",
            deleted: y !== 0
          },
          painted: A
        }));
      U.sort((y, A) => y.id === 0 ? 1 : A.id === 0 ? -1 : A.painted.tileXs.length - y.painted.tileXs.length), n.load(U, j), _(o, H.eventHwm, !0), _(d, H.anchor, !0)
    } catch (H) {
      I === f && he.error(H.message)
    } finally {
      I === f && _(a, !1)
    }
  }

  function ie(h, I, Y) {
    if (s(a)) {
      he.info(m.loading());
      return
    }
    const H = n.pixelAt(h, I);
    if (!(H != null && H.userId)) {
      he.info(m.alliance_hq_select_area_not_painted());
      return
    }
    const se = n.findUser(H.userId);
    (Y ? n.deselectUser(H.userId) : n.selectUser(H.userId)) && (Or.plop.play(), he.success(Y ? m.select_area_player_deselected({
      name: (se == null ? void 0 : se.name) ?? m.player()
    }) : m.select_area_player_selected({
      name: (se == null ? void 0 : se.name) ?? m.player()
    })))
  }

  function Q(h, I, Y, H, se) {
    if (s(a)) {
      he.info(m.loading());
      return
    }
    n.applyBrush(h + .5, I + .5, Y, H + .5, se ? "remove" : "add") && Or.plop.play()
  }

  function We() {
    return Re()
  }

  function re() {
    return s(Ce).map(h => s(ze).get(h)).filter(h => !!h).map(h => ({
      id: h.id,
      name: h.name,
      picture: h.picture,
      avatarSeed: h.avatarSeed,
      allianceId: h.allianceId,
      allianceName: h.allianceName,
      timedOut: h.timedOut,
      banned: h.banned
    }))
  }

  function lr() {
    const h = new URLSearchParams({
      minX: String(e.area.minX),
      minY: String(e.area.minY),
      maxX: String(e.area.maxX),
      maxY: String(e.area.maxY)
    });
    return Sn(`/staff/dashboard/alliances/${e.allianceId}/headquarters/wayback?${h.toString()}`)
  }
  async function Ie() {
    const h = await fetch(lr(), {
      credentials: "include"
    });
    if (!h.ok) throw new Error(m.unexpected_server_error());
    return h.blob()
  }
  async function Gt() {
    if (!(s(E) || s(a))) {
      _(E, !0);
      try {
        const h = await Ie();
        Ci(h, `selected-area-${e.area.maxX-e.area.minX+1}x${e.area.maxY-e.area.minY+1}.png`), he.success(m.alliance_hq_select_area_image_saved())
      } catch (h) {
        he.error(h.message)
      } finally {
        _(E, !1)
      }
    }
  }

  function mt(h) {
    const I = re();
    if (I.length === 0 || !s(Le)) {
      he.info(m.alliance_hq_select_area_select_players());
      return
    }
    _(K, I, !0), _(R, h, !0), _(Ye, Ie(), !0), _(T, !0)
  }
  async function lt() {
    if (s(Ce).length === 0) {
      he.info(m.alliance_hq_select_area_select_players());
      return
    }
    _(p, !0);
    try {
      const h = await Et.postSelectAreaPhoneVerification(s(Ce));
      he.success(m.alliance_hq_select_area_phone_required({
        count: h.affected
      })), await Re()
    } catch (h) {
      he.error(h.message)
    } finally {
      _(p, !1)
    }
  }
  async function Ot() {
    const h = s(Ze).filter(I => I.eventId && I.color !== 0);
    if (h.length === 0) {
      he.info(m.reverse_no_modifications());
      return
    }
    _(p, !0);
    try {
      const I = await Et.reverseAdminAllianceHqPixels(e.allianceId, h.map(Y => ({
        x: Y.x,
        y: Y.y,
        eventId: Y.eventId
      })), "HQ Select Area clear", !0);
      he.success(m.alliance_hq_select_area_cleared({
        count: I.reversed
      })), n.clearSelected(), await e.onchanged(), await Re()
    } catch (I) {
      he.error(I.message), await e.onchanged()
    } finally {
      _(p, !1)
    }
  }
  async function pt() {
    var se;
    const h = new Set(s(de).map(Ge)),
      I = [];
    let Y, H = !0;
    for (; H;) {
      const j = await Et.getAllianceHqWaybackEvents(e.allianceId, {
        limit: Tn.tools.wayback.hqLimit,
        before: Y,
        area: e.area
      });
      if (I.push(...j.events.filter(ne => ne.id <= s(o) && h.has(`${ne.x}:${ne.y}`))), H = j.hasNext, Y = (se = j.events.at(-1)) == null ? void 0 : se.id, H && !Y) throw new Error(m.unexpected_server_error())
    }
    ye = new Map;
    for (const j of I.reverse()) {
      const ne = `${j.x}:${j.y}`,
        i = ye.get(ne) ?? [];
      i.push(j), ye.set(ne, i)
    }
  }

  function Ke(h) {
    if (h.mode === "depth") {
      const j = Math.max(0, ...[...ye.values()].map(u => u.length)),
        ne = Math.max(1, (h.beforeDepth ?? 0) + 1),
        i = [];
      for (let u = ne; u <= j && i.length < 100; u += 1) {
        const x = [...ye.values()].filter(U => U.length >= u);
        x.length !== 0 && i.push({
          depth: u,
          ts: Math.max(...x.map(U => U[U.length - u].ts)),
          eventCount: x.length,
          pixelCount: x.length
        })
      }
      return {
        timestamps: i,
        hasMore: ne + i.length <= j
      }
    }
    const Y = new Map;
    for (const [j, ne] of ye)
      for (const i of ne) {
        if (h.beforeTimestamp && i.ts >= h.beforeTimestamp) continue;
        const u = Y.get(i.ts) ?? new Set;
        u.add(j), Y.set(i.ts, u)
      }
    const H = [...Y.entries()].sort((j, ne) => ne[0] - j[0]);
    return {
      timestamps: H.slice(0, 100).map(([j, ne], i) => ({
        depth: i + 1,
        ts: j,
        eventCount: ne.size,
        pixelCount: ne.size
      })),
      hasMore: H.length > 100
    }
  }

  function cr(h) {
    var I;
    return ((I = s(ze).get(h)) == null ? void 0 : I.allianceId) ?? 0
  }

  function kt(h) {
    return ki(s(de), ye, h, cr)
  }

  function Vt(h) {
    return qi(s(at), kt(h), cr)
  }
  async function dr() {
    if (_(de, s(Ze).filter(h => !!h.eventId)), s(de).length === 0) {
      he.info(m.reverse_no_modifications());
      return
    }
    _(p, !0);
    try {
      await pt(), _($, {
        getTimeline: async h => Ke(h),
        getPreview: async h => ({
          pixels: Vt(h)
        })
      }, !0), _(He, !0)
    } catch (h) {
      he.error(h.message)
    } finally {
      _(p, !1)
    }
  }
  async function zt(h, I, Y) {
    const H = I === "historical" ? {
        mode: I,
        timestamp: Y
      } : {
        mode: I,
        snapshotDepth: Y
      },
      se = new Map(kt(H).map(i => [`${i.tileX*64+i.pixelX}:${i.tileY*64+i.pixelY}`, i.color])),
      j = s(de).map(i => ({
        pixel: i,
        color: se.get(Ge(i)) ?? 0
      })).filter(({
        pixel: i,
        color: u
      }) => i.color !== u);
    if (j.length === 0) return {
      painted: 0
    };
    const ne = await Et.reverseAdminAllianceHqPixels(e.allianceId, j.map(({
      pixel: i,
      color: u
    }) => ({
      x: i.x,
      y: i.y,
      eventId: i.eventId,
      color: u
    })), "HQ Select Area history reversal");
    return n.clearSelected(), await e.onchanged(), await Re(), {
      painted: ne.reversed
    }
  }

  function ur() {
    if (s(Ce).length === 0) {
      he.info(m.alliance_hq_select_area_select_players());
      return
    }
    navigator.clipboard.writeText(s(Ce).join(", ")), he.success(m.alliance_hq_select_area_ids_copied())
  }

  function br(h) {
    if (e.activeTool === h) {
      e.ontoolchange("area-select");
      return
    }
    if (s(a)) {
      he.info(m.loading());
      return
    }
    e.ontoolchange(h)
  }
  var vr = {
      pickUser: ie,
      brush: Q,
      reload: We
    },
    P = Xi(),
    q = ar(P);
  {
    let h = N(() => m.alliance_hq_select_area_not_painted()),
      I = N(() => ({
        timeout: s(p),
        ban: s(p),
        phone: s(p),
        clear: s(p),
        reverse: s(p)
      })),
      Y = N(() => s(Ze).length > 0);
    Ba(q, {
      get totalSelectedPixels() {
        return n.totalSelectedPixels
      },
      get rows() {
        return n.panelRows
      },
      get totalRowCount() {
        return n.users.length
      },
      get filteredPixelCount() {
        return n.filteredPixelsTotal
      },
      get filters() {
        return n.filters
      },
      get activeFilterCount() {
        return n.activeFilterCount
      },
      get hasActiveFilters() {
        return n.hasActiveFilters
      },
      get filteredSelectionState() {
        return n.filteredSelectionState
      },
      get loading() {
        return s(a)
      },
      get emptyLabel() {
        return s(h)
      },
      get activeTool() {
        return e.activeTool
      },
      get brushDiameter() {
        return s(D)
      },
      get busy() {
        return s(I)
      },
      get hasSelection() {
        return s(Y)
      },
      get headerActions() {
        return t
      },
      ontoolchange: br,
      ontogglefiltered: () => {
        n.toggleAllFiltered() && Or.plop.play()
      },
      onresetfilters: () => n.resetFilters(),
      ontogglerow: H => {
        n.toggleFilteredUser(H) && Or.plop.play()
      },
      oncopy: ur,
      ontimeout: () => mt("timeout"),
      onban: () => mt("ban"),
      onphone: lt,
      onclear: Ot,
      onreverse: dr,
      get onclose() {
        return e.onclose
      }
    })
  }
  var O = g(q, 2);
  {
    var Pe = h => {
      aa(h, {
        get season() {
          return Un
        },
        tileSize: 64,
        showMapBackground: !1,
        get selectedPixelCount() {
          return s(de).length
        },
        get previewBounds() {
          return s(It)
        },
        get dataSource() {
          return s($)
        },
        onApply: zt,
        get open() {
          return s(He)
        },
        set open(I) {
          _(He, I, !0)
        }
      })
    };
    J(O, h => {
      s($) && h(Pe)
    })
  }
  var Qe = g(O, 2);
  {
    var Je = h => {
      {
        let I = N(() => [s(Le).latitude, s(Le).longitude]);
        In(h, {
          get image() {
            return s(Ye)
          },
          get targets() {
            return s(K)
          },
          get latLon() {
            return s(I)
          },
          zoom: 0,
          get action() {
            return s(R)
          },
          origin: "select-area",
          onsuccess: () => void Re(),
          get open() {
            return s(T)
          },
          set open(Y) {
            _(T, Y, !0)
          }
        })
      }
    };
    J(Qe, h => {
      s(K).length > 0 && s(Le) && h(Je)
    })
  }
  return S(r, P), ns(vr)
}
gs(["click"]);
var Li = L("<div><!></div>");

function Bo(r, e) {
  rs(e, !0);
  var t = Li(),
    n = c(t);
  zs(n, () => e.children ?? Ys), l(t), W(() => At(t, 1, `bg-base-100/60 border-base-content/20 pointer-events-none absolute -top-15 left-1/2 line-clamp-1 flex w-max -translate-x-1/2 items-center gap-1 rounded-full border-2 px-3 py-1.5 select-none ${e.class??""}`)), S(r, t), ns()
}
export {
  la as A, jn as C, Bo as I, aa as R, hs as S, Co as a, On as b, wo as c, za as d, Ai as e, Mo as f, Er as g, Ba as h, Io as i, To as j, Uo as k, Eo as l, Ao as m, Po as n, Ci as o, So as p, ps as s
};