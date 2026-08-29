import {
  Ft as e,
  Lt as t,
  Rt as n,
  Ut as r,
  Wt as i,
  ct as a,
  in as o,
  jt as s,
  kt as c,
  ln as l
} from "./D6uuD926.js";
import {
  b as u,
  i as d
} from "./3pGDfLLI.js";
import {
  o as ee,
  r as f
} from "./CMCDTH43.js";
import {
  D as te,
  L as p,
  M as ne,
  P as m,
  S as re,
  T as ie,
  f as h,
  i as ae,
  m as g,
  n as _,
  q as oe
} from "./BHDig7Ul.js";
import {
  t as v
} from "./ciZYZuIg.js";
import {
  t as se
} from "./BIL2ibXE.js";
import {
  t as y
} from "./BSVaYKOI.js";

function ce(e) {
  return Math.floor(Math.random() * e)
}
var b = 14.5;
async function le() {
  let e = me();
  if (e) return e;
  try {
    if ((await navigator.permissions.query({
        name: `geolocation`
      })).state === `granted`) {
      let e = await new Promise((e, t) => navigator.geolocation.getCurrentPosition(t => e(t), e => t(e)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: b
      }
    }
  } catch (e) {
    console.error(e)
  }
  return {
    ...ue().pos,
    zoom: b
  }
}

function ue() {
  let e = Object.entries(de),
    [t, n] = e[ce(e.length)];
  return {
    city: t,
    pos: n
  }
}
var de = {
    tokyo: {
      lat: 35.677545560719665,
      lng: 139.76394445809638
    },
    paris: {
      lat: 48.8537151734952,
      lng: 2.3484026030630787
    },
    newYork: {
      lat: 40.71283173786517,
      lng: -74.00599771376795
    },
    saoPaulo: {
      lat: -23.550584064565356,
      lng: -46.63339720713918
    },
    sydney: {
      lat: -33.86943325619071,
      lng: 151.2083447239608
    }
  },
  fe = `location`;

function pe(e, t) {
  localStorage.setItem(fe, JSON.stringify({
    ...e,
    zoom: t
  }))
}

function me() {
  let e = localStorage.getItem(fe);
  if (!e) return;
  let t;
  try {
    t = JSON.parse(e)
  } catch {
    return
  }
  if (!t || typeof t != `object`) return;
  let {
    lat: n,
    lng: r,
    zoom: i
  } = t;
  if (!(typeof n != `number` || typeof r != `number` || !he({
      lat: n,
      lng: r
    }))) return {
    lat: n,
    lng: r,
    zoom: typeof i == `number` && ge(i) ? i : b
  }
}

function he(e) {
  return e.lat >= -90 && e.lat <= 90 && e.lng >= -180 && e.lng <= 180
}

function ge(e) {
  return Number.isFinite(e) && e >= 0 && e <= 24
}
var x = new WeakMap,
  _e = new WeakMap,
  ve = new class {
    get idx() {
      return a(e(x, this))
    }
    set idx(t) {
      c(e(x, this), t, !0)
    }
    get entries() {
      return a(e(_e, this))
    }
    set entries(t) {
      c(e(_e, this), t)
    }
    constructor() {
      n(this, x, s(-1)), n(this, _e, s([]))
    }
    hasNext() {
      return this.idx < this.entries.length - 1
    }
    goToNext(e) {
      let t = this.idx + 1,
        n = this.entries[t];
      n && (this.idx = t, e.flyTo({
        center: n.pos,
        zoom: n.zoom
      }))
    }
    hasPrev() {
      return this.idx > 0
    }
    goToPrev(e) {
      let t = this.idx - 1,
        n = this.entries[t];
      n && (this.idx = t, e.flyTo({
        center: n.pos,
        zoom: n.zoom
      }))
    }
    isEmpty() {
      return this.entries.length === 0
    }
    push(e) {
      this.idx += 1, this.entries = [...this.entries.slice(0, this.idx), e]
    }
  };

function ye(e, t) {
  let n = Array(t.length),
    r = e.length;
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    a = Number.isInteger(a) ? a : Math.trunc(a) || 0, a < 0 && (a += r), n[i] = e[a]
  }
  return n
}

function be(...e) {
  if (e.length === 0) return [
    []
  ];
  let t = 1;
  for (let n = 0; n < e.length; n++) t *= e[n].length;
  if (t === 0) return [];
  let n = e.length,
    r = Array(t);
  for (let i = 0; i < t; i++) {
    let t = Array(n),
      a = i;
    for (let r = n - 1; r >= 0; r--) {
      let n = e[r],
        i = n.length;
      t[r] = n[a % i], a = Math.floor(a / i)
    }
    r[i] = t
  }
  return r
}

function xe(e, t) {
  if (!Number.isInteger(t) || t <= 0) throw Error(`Size must be an integer greater than zero.`);
  let n = Math.ceil(e.length / t),
    r = Array(n);
  for (let i = 0; i < n; i++) {
    let n = i * t,
      a = n + t;
    r[i] = e.slice(n, a)
  }
  return r
}

function Se(e, t) {
  if (!Number.isInteger(t) || t < 0) throw Error(`r must be a non-negative integer.`);
  let n = e.length;
  if (t > n) return [];
  if (t === 0) return [
    []
  ];
  let r = Array(t);
  for (let e = 0; e < t; e++) r[e] = e;
  let i = [];
  for (;;) {
    let a = Array(t);
    for (let n = 0; n < t; n++) a[n] = e[r[n]];
    i.push(a);
    let o = t - 1;
    for (; o >= 0 && r[o] === o + n - t;) o--;
    if (o < 0) return i;
    r[o]++;
    for (let e = o + 1; e < t; e++) r[e] = r[e - 1] + 1
  }
}

function Ce(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r && t.push(r)
  }
  return t
}

function we(e, t) {
  let n = {};
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t(i, r, e);
    n[a] = (n[a] ?? 0) + 1
  }
  return n
}

function S(e, t) {
  let n = new Set(t);
  return e.filter(e => !n.has(e))
}

function Te(e, t, n) {
  let r = new Set(t.map(e => n(e)));
  return e.filter(e => !r.has(n(e)))
}

function Ee(e, t, n) {
  return e.filter(e => t.every(t => !n(e, t)))
}

function De(e, t) {
  return t = Math.max(t, 0), e.slice(t)
}

function Oe(e, t) {
  return t = Math.min(-t, 0), t === 0 ? e.slice() : e.slice(0, t)
}

function ke(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (!t(e[n], n, e)) return e.slice(0, n + 1);
  return []
}

function Ae(e, t) {
  let n = e.findIndex((e, n, r) => !t(e, n, r));
  return n === -1 ? [] : e.slice(n)
}

function je(e, t, n = 0, r = e.length) {
  let i = e.length,
    a = Math.max(n >= 0 ? n : i + n, 0),
    o = Math.min(r >= 0 ? r : i + r, i);
  for (let n = a; n < o; n++) e[n] = t;
  return e
}
var Me = class {
  constructor(e) {
    o(this, `capacity`, void 0), o(this, `available`, void 0), o(this, `deferredTasks`, []), this.capacity = e, this.available = e
  }
  async acquire() {
    if (this.available > 0) {
      this.available--;
      return
    }
    return new Promise(e => {
      this.deferredTasks.push(e)
    })
  }
  release() {
    let e = this.deferredTasks.shift();
    if (e != null) {
      e();
      return
    }
    this.available < this.capacity && this.available++
  }
};

function C(e, t) {
  let n = new Me(t);
  return async function(...t) {
    try {
      return await n.acquire(), await e.apply(this, t)
    } finally {
      n.release()
    }
  }
}
async function Ne(e, t, n) {
  (n == null ? void 0 : n.concurrency) != null && (t = C(t, n.concurrency));
  let r = await Promise.all(e.map(t));
  return e.filter((e, t) => r[t])
}

function w(e, t = 1) {
  let n = [],
    r = Math.floor(t),
    i = (e, t) => {
      for (let a = 0; a < e.length; a++) {
        let o = e[a];
        Array.isArray(o) && t < r ? i(o, t + 1) : n.push(o)
      }
    };
  return i(e, 0), n
}

function Pe(e, t, n = 1) {
  return w(e.map((n, r) => t(n, r, e)), n)
}
async function Fe(e, t, n) {
  return (n == null ? void 0 : n.concurrency) != null && (t = C(t, n.concurrency)), w(await Promise.all(e.map(t)))
}

function Ie(e) {
  return w(e, 1 / 0)
}

function Le(e, t) {
  return Ie(e.map((n, r) => t(n, r, e)))
}
async function Re(e, t, n) {
  (n == null ? void 0 : n.concurrency) != null && (t = C(t, n.concurrency)), await Promise.all(e.map(t))
}

function ze(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    t(r, n, e)
  }
}

function Be(e, t) {
  let n = {};
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t(i, r, e);
    Object.hasOwn(n, a) || (n[a] = []), n[a].push(i)
  }
  return n
}

function Ve(e) {
  return e[0]
}

function He(e) {
  return e.slice(0, -1)
}

function Ue(e, t) {
  let n = new Set(t);
  return e.filter(e => n.has(e))
}

function We(e, t, n) {
  let r = [],
    i = new Set(t.map(n));
  for (let t = 0; t < e.length; t++) {
    let a = e[t],
      o = n(a);
    i.has(o) && (r.push(a), i.delete(o))
  }
  return r
}

function Ge(e, t, n) {
  return e.filter(e => t.some(t => n(e, t)))
}

function Ke(e, t) {
  return S(t, e).length === 0
}

function qe(e, t, n) {
  return Ee(t, e, n).length === 0
}

function Je(e, t) {
  let n = {};
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t(i, r, e);
    n[a] = i
  }
  return n
}

function Ye(e) {
  return e[e.length - 1]
}

function Xe(e, t, n) {
  return (n == null ? void 0 : n.concurrency) != null && (t = C(t, n.concurrency)), Promise.all(e.map(t))
}

function Ze(e, t) {
  if (e.length === 0) return;
  let n = e[0],
    r = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i],
      o = t(a, i, e);
    if (Number.isNaN(o)) return a;
    o > r && (r = o, n = a)
  }
  return n
}

function Qe(e, t) {
  if (e.length === 0) return;
  let n = e[0],
    r = 1 / 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i],
      o = t(a, i, e);
    if (Number.isNaN(o)) return a;
    o < r && (r = o, n = a)
  }
  return n
}

function $e(e) {
  return e === null ? 1 : e === void 0 ? 2 : 0
}

function et(e, t) {
  let n = $e(e),
    r = $e(t);
  return n < r ? -1 : n > r ? 1 : n === 0 ? e < t ? -1 : +(e > t) : 0
}

function tt(e, t, n) {
  return n === `asc` ? et(e, t) : et(t, e)
}

function nt(e, t, n) {
  return e.slice().sort((e, r) => {
    let i = n.length;
    for (let a = 0; a < t.length; a++) {
      let o = i > a ? n[a] : n[i - 1],
        s = t[a],
        c = typeof s == `function`,
        l = tt(c ? s(e) : e[s], c ? s(r) : r[s], o);
      if (l !== 0) return l
    }
    return 0
  })
}

function rt(e, t) {
  let n = [],
    r = [];
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    t(a, i, e) ? n.push(a) : r.push(a)
  }
  return [n, r]
}

function it(e, t) {
  let n = new Set(t),
    r = 0;
  for (let t = 0; t < e.length; t++)
    if (!n.has(e[t])) {
      if (!Object.hasOwn(e, t)) {
        delete e[r++];
        continue
      }
      e[r++] = e[t]
    } return e.length = r, e
}

function at(e, t) {
  let n = ye(e, t),
    r = new Set(t.slice().sort((e, t) => t - e));
  for (let t of r) e.splice(t, 1);
  return n
}
async function ot(e, t, n) {
  let r = 0;
  n ?? (n = e[0], r = 1);
  let i = n;
  for (let n = r; n < e.length; n++) i = await t(i, e[n], n, e);
  return i
}

function st(e, t) {
  let n = e.slice(),
    r = [],
    i = 0;
  for (let a = 0; a < e.length; a++) {
    if (t(e[a], a, n)) {
      r.push(e[a]);
      continue
    }
    if (!Object.hasOwn(e, a)) {
      delete e[i++];
      continue
    }
    e[i++] = e[a]
  }
  return e.length = i, r
}

function ct(e) {
  return e[Math.floor(Math.random() * e.length)]
}

function lt(e, t) {
  if (t ?? (t = e, e = 0), e >= t) throw Error(`Invalid input: The maximum value must be greater than the minimum value.`);
  return Math.random() * (t - e) + e
}

function ut(e, t) {
  return Math.floor(lt(e, t))
}

function dt(e, t) {
  if (t > e.length) throw Error(`Size must be less than or equal to the length of array.`);
  let n = Array(t),
    r = new Set;
  for (let i = e.length - t, a = 0; i < e.length; i++, a++) {
    let t = ut(0, i + 1);
    r.has(t) && (t = i), r.add(t), n[a] = e[t]
  }
  return n
}

function ft(e) {
  let t = e.slice();
  for (let e = t.length - 1; e >= 1; e--) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]]
  }
  return t
}

function pt(e, t) {
  return nt(e, t, [`asc`])
}

function mt(e) {
  return e.slice(1)
}

function ht(e) {
  return typeof e == `symbol` || e instanceof Symbol
}

function gt(e) {
  return ht(e) ? NaN : Number(e)
}

function _t(e) {
  return e ? (e = gt(e), e === 1 / 0 || e === -1 / 0 ? (e < 0 ? -1 : 1) * Number.MAX_VALUE : e === e ? e : 0) : e === 0 ? e : 0
}

function vt(e) {
  let t = _t(e),
    n = t % 1;
  return n ? t - n : t
}

function yt(e, t, n) {
  return t = n || t === void 0 ? 1 : vt(t), e.slice(0, t)
}

function bt(e, t, n) {
  return t = n || t === void 0 ? 1 : vt(t), t <= 0 || e.length === 0 ? [] : e.slice(-t)
}

function xt(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (!t(e[n], n, e)) return e.slice(n + 1);
  return e.slice()
}

function St(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (!t(i, r, e)) break;
    n.push(i)
  }
  return n
}

function Ct(e, t, n = 0, r = e.length) {
  let i = e.length,
    a = Math.max(n >= 0 ? n : i + n, 0),
    o = Math.min(r >= 0 ? r : i + r, i),
    s = e.slice();
  for (let e = a; e < o; e++) s[e] = t;
  return s
}

function wt(e) {
  return [...new Set(e)]
}

function Tt(e, t) {
  return wt(e.concat(t))
}

function Et(e, t) {
  let n = new Map;
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t(i, r, e);
    n.has(a) || n.set(a, i)
  }
  return Array.from(n.values())
}

function Dt(e, t, n) {
  return Et(e.concat(t), n)
}

function Ot(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    n.every(e => !t(e, i)) && n.push(i)
  }
  return n
}

function kt(e, t, n) {
  return Ot(e.concat(t), n)
}

function At(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length);
  let n = Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = Array(e.length);
    for (let t = 0; t < e.length; t++) n[r][t] = e[t][r]
  }
  return n
}

function jt(e, t) {
  let n = Math.max(...e.map(e => e.length)),
    r = Array(n);
  for (let i = 0; i < n; i++) {
    let n = Array(e.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t][i];
    r[i] = t(...n)
  }
  return r
}

function Mt(e, t, n = 1, {
  partialWindows: r = !1
} = {}) {
  if (t <= 0 || !Number.isInteger(t)) throw Error(`Size must be a positive integer.`);
  if (n <= 0 || !Number.isInteger(n)) throw Error(`Step must be a positive integer.`);
  let i = [],
    a = r ? e.length : e.length - t + 1;
  for (let r = 0; r < a; r += n) i.push(e.slice(r, r + t));
  return i
}

function Nt(e, ...t) {
  return S(e, t)
}

function Pt(e, t) {
  return S(Tt(e, t), Ue(e, t))
}

function Ft(e, t, n) {
  return Te(Dt(e, t, n), We(e, t, n), n)
}

function It(e, t, n) {
  return Ee(kt(e, t, n), Ge(e, t, n), n)
}

function Lt(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length);
  let n = e.length,
    r = Array(t);
  for (let i = 0; i < t; ++i) {
    let t = Array(n);
    for (let r = 0; r < n; ++r) t[r] = e[r][i];
    r[i] = t
  }
  return r
}

function Rt(e, t) {
  let n = {};
  for (let r = 0; r < e.length; r++) n[e[r]] = t[r];
  return n
}

function zt(e, ...t) {
  let n = [e, ...t.slice(0, -1)],
    r = t[t.length - 1],
    i = Math.max(...n.map(e => e.length)),
    a = Array(i);
  for (let e = 0; e < i; e++) a[e] = r(...n.map(t => t[e]), e);
  return a
}
var T = typeof globalThis == `object` && globalThis || typeof window == `object` && window || typeof self == `object` && self || typeof global == `object` && global || (function() {
    return this
  })(),
  Bt = T.DOMException === void 0 ? Error : T.DOMException,
  Vt = class extends Bt {
    constructor(e = `The operation was aborted`) {
      super(e)
    }
  },
  Ht = class extends Bt {
    constructor(e = `The operation was timed out`) {
      super(e)
    }
  };

function Ut(e, t) {
  if (!Number.isInteger(e) || e < 0) throw Error(`n must be a non-negative integer.`);
  let n = 0;
  return (...r) => {
    if (++n >= e) return t(...r)
  }
}

function Wt(e, t) {
  return function(...n) {
    return e.apply(this, n.slice(0, t))
  }
}
async function Gt() {}

function Kt(e, t) {
  if (!Number.isInteger(e) || e < 0) throw Error(`n must be a non-negative integer.`);
  let n = 0;
  return (...r) => {
    if (++n < e) return t(...r)
  }
}

function qt(e) {
  return e.length === 0 || e.length === 1 ? e : function(t) {
    return Jt(e, e.length, [t])
  }
}

function Jt(e, t, n) {
  return n.length === t ? e(...n) : function(r) {
    return Jt(e, t, [...n, r])
  }
}

function Yt(e) {
  return e.length === 0 || e.length === 1 ? e : function(t) {
    return Xt(e, e.length, [t])
  }
}

function Xt(e, t, n) {
  return n.length === t ? e(...n) : function(r) {
    return Xt(e, t, [r, ...n])
  }
}

function Zt(e, t, {
  signal: n,
  edges: r
} = {}) {
  let i, a = null,
    o = r != null && r.includes(`leading`),
    s = r == null || r.includes(`trailing`),
    c = () => {
      a !== null && (e.apply(i, a), i = void 0, a = null)
    },
    l = () => {
      s && c(), f()
    },
    u = null,
    d = () => {
      u != null && clearTimeout(u), u = setTimeout(() => {
        u = null, l()
      }, t)
    },
    ee = () => {
      u !== null && (clearTimeout(u), u = null)
    },
    f = () => {
      ee(), i = void 0, a = null
    },
    te = () => {
      c()
    },
    p = function(...e) {
      if (n != null && n.aborted) return;
      i = this, a = e;
      let t = u == null;
      d(), o && t && c()
    };
  return p.schedule = d, p.cancel = f, p.flush = te, n == null || n.addEventListener(`abort`, f, {
    once: !0
  }), p
}

function Qt(...e) {
  return function(...t) {
    let n = e.length ? e[0].apply(this, t) : t[0];
    for (let t = 1; t < e.length; t++) n = e[t].call(this, n);
    return n
  }
}

function $t(...e) {
  return Qt(...e.reverse())
}

function en(e) {
  return e
}

function tn(e, t = {}) {
  let {
    cache: n = new Map,
    getCacheKey: r
  } = t, i = function(t) {
    let i = r ? r(t) : t;
    if (n.has(i)) return n.get(i);
    let a = e.call(this, t);
    return n.set(i, a), a
  };
  return i.cache = n, i
}

function nn(e) {
  return ((...t) => !e(...t))
}

function rn() {}

function an(e) {
  let t = !1,
    n;
  return function(...r) {
    return t || (t = !0, n = e(...r)), n
  }
}

function on(e, ...t) {
  return sn(e, cn, ...t)
}

function sn(e, t, ...n) {
  let r = function(...r) {
    let i = 0,
      a = n.slice().map(e => e === t ? r[i++] : e),
      o = r.slice(i);
    return e.apply(this, a.concat(o))
  };
  return e.prototype && (r.prototype = Object.create(e.prototype)), r
}
var cn = Symbol(`partial.placeholder`);
on.placeholder = cn;

function ln(e, ...t) {
  return un(e, dn, ...t)
}

function un(e, t, ...n) {
  let r = function(...r) {
    let i = n.filter(e => e === t).length,
      a = Math.max(r.length - i, 0),
      o = r.slice(0, a),
      s = a,
      c = n.slice().map(e => e === t ? r[s++] : e);
    return e.apply(this, o.concat(c))
  };
  return e.prototype && (r.prototype = Object.create(e.prototype)), r
}
var dn = Symbol(`partialRight.placeholder`);
ln.placeholder = dn;

function fn(e, t = e.length - 1) {
  return function(...n) {
    let r = n.slice(t),
      i = n.slice(0, t);
    for (; i.length < t;) i.push(void 0);
    return e.apply(this, [...i, r])
  }
}

function E(e, {
  signal: t
} = {}) {
  return new Promise((n, r) => {
    let i = () => {
        r(new Vt)
      },
      a = () => {
        clearTimeout(o), i()
      };
    if (t != null && t.aborted) return i();
    let o = setTimeout(() => {
      t == null || t.removeEventListener(`abort`, a), n()
    }, e);
    t == null || t.addEventListener(`abort`, a, {
      once: !0
    })
  })
}
var pn = 0,
  mn = 1 / 0,
  hn = () => !0;
async function gn(e, t) {
  let n, r, i, a;
  typeof t == `number` ? (n = pn, r = t, i = void 0, a = hn) : (n = (t == null ? void 0 : t.delay) ?? pn, r = (t == null ? void 0 : t.retries) ?? mn, i = t == null ? void 0 : t.signal, a = (t == null ? void 0 : t.shouldRetry) ?? hn);
  let o;
  for (let t = 0; t <= r; t++) {
    if (i != null && i.aborted) throw o ?? Error(`The retry operation was aborted due to an abort signal.`);
    try {
      return await e()
    } catch (e) {
      if (o = e, !a(e, t)) throw e;
      await E(typeof n == `function` ? n(t) : n)
    }
  }
  throw o
}

function _n(e) {
  return function(t) {
    return e.apply(this, t)
  }
}

function vn(e, t, {
  signal: n,
  edges: r = [`leading`, `trailing`]
} = {}) {
  let i = null,
    a = Zt(function(...t) {
      i = Date.now(), e.apply(this, t)
    }, t, {
      signal: n,
      edges: r
    }),
    o = function(...n) {
      if (i ?? (i = Date.now()), Date.now() - i >= t) {
        i = Date.now(), e.apply(this, n), a.cancel(), a.schedule();
        return
      }
      a.apply(this, n)
    };
  return o.cancel = a.cancel, o.flush = a.flush, o
}

function yn(e) {
  return Wt(e, 1)
}

function bn(e, t, n) {
  return n == null ? Math.min(e, t) : Math.min(Math.max(e, t), n)
}

function xn(e, t, n) {
  if (n ?? (n = t, t = 0), t >= n) throw Error(`The maximum value must be greater than the minimum value.`);
  return t <= e && e < n
}

function Sn(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n];
  return t
}

function Cn(e) {
  return Sn(e) / e.length
}

function wn(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) n += t(e[r], r);
  return n
}

function Tn(e, t) {
  return wn(e, e => t(e)) / e.length
}

function En(e) {
  if (e.length === 0) return NaN;
  let t = e.slice().sort((e, t) => e - t),
    n = Math.floor(t.length / 2);
  return t.length % 2 == 0 ? (t[n - 1] + t[n]) / 2 : t[n]
}

function Dn(e, t) {
  return En(e.map(e => t(e)))
}

function On(e, t) {
  if (Number.isNaN(Number(t))) throw Error(`Expected percentile to be a number but got "${t}".`);
  if (t < 0) throw Error(`Expected percentile to be >= 0 but got "${t}".`);
  if (t > 100) throw Error(`Expected percentile to be <= 100 but got "${t}".`);
  if (e.length === 0) return NaN;
  let n = e.slice().sort((e, t) => (Number.isNaN(e) ? -1 / 0 : e) - (Number.isNaN(t) ? -1 / 0 : t));
  return t === 0 ? n[0] : n[Math.ceil(n.length * (t / 100)) - 1]
}

function kn(e, t, n = 1) {
  if (t ?? (t = e, e = 0), !Number.isInteger(n) || n === 0) throw Error(`The step value must be a non-zero integer.`);
  let r = Math.max(Math.ceil((t - e) / n), 0),
    i = Array(r);
  for (let t = 0; t < r; t++) i[t] = e + t * n;
  return i
}

function An(e, t, n = 1) {
  if (t ?? (t = e, e = 0), !Number.isInteger(n) || n === 0) throw Error(`The step value must be a non-zero integer.`);
  let r = Math.max(Math.ceil((t - e) / n), 0),
    i = Array(r);
  for (let t = 0; t < r; t++) i[t] = e + (r - t - 1) * n;
  return i
}

function jn(e, t = 0) {
  if (!Number.isInteger(t)) throw Error(`Precision must be an integer.`);
  let n = 10 ** t;
  return Math.round(e * n) / n
}

function D(e) {
  return e == null || typeof e != `object` && typeof e != `function`
}

function O(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView)
}

function k(e) {
  if (D(e)) return e;
  if (Array.isArray(e) || O(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer) return e.slice(0);
  let t = Object.getPrototypeOf(e);
  if (t == null) return Object.assign(Object.create(t), e);
  let n = t.constructor;
  if (e instanceof Date || e instanceof Map || e instanceof Set) return new n(e);
  if (e instanceof RegExp) {
    let t = new n(e);
    return t.lastIndex = e.lastIndex, t
  }
  if (e instanceof DataView) return new n(e.buffer.slice(0));
  if (e instanceof Error) {
    let t;
    return t = e instanceof AggregateError ? new n(e.errors, e.message, {
      cause: e.cause
    }) : new n(e.message, {
      cause: e.cause
    }), t.stack = e.stack, Object.assign(t, e), t
  }
  return typeof File < `u` && e instanceof File ? new n([e], e.name, {
    type: e.type,
    lastModified: e.lastModified
  }) : typeof e == `object` ? Object.assign(Object.create(t), e) : e
}

function A(e) {
  return T.Buffer !== void 0 && T.Buffer.isBuffer(e)
}

function j(e) {
  return Object.getOwnPropertySymbols(e).filter(t => Object.prototype.propertyIsEnumerable.call(e, t))
}

function M(e) {
  return e == null ? e === void 0 ? `[object Undefined]` : `[object Null]` : Object.prototype.toString.call(e)
}
var Mn = `[object RegExp]`,
  Nn = `[object String]`,
  Pn = `[object Number]`,
  Fn = `[object Boolean]`,
  In = `[object Arguments]`,
  Ln = `[object Symbol]`,
  Rn = `[object Date]`,
  zn = `[object Map]`,
  Bn = `[object Set]`,
  Vn = `[object Array]`,
  Hn = `[object Function]`,
  Un = `[object ArrayBuffer]`,
  N = `[object Object]`,
  Wn = `[object Error]`,
  Gn = `[object DataView]`,
  Kn = `[object Uint8Array]`,
  qn = `[object Uint8ClampedArray]`,
  Jn = `[object Uint16Array]`,
  Yn = `[object Uint32Array]`,
  Xn = `[object BigUint64Array]`,
  Zn = `[object Int8Array]`,
  Qn = `[object Int16Array]`,
  $n = `[object Int32Array]`,
  er = `[object BigInt64Array]`,
  tr = `[object Float32Array]`,
  nr = `[object Float64Array]`;

function rr(e, t) {
  return P(e, void 0, e, new Map, t)
}

function P(e, t, n, r = new Map, i = void 0) {
  let a = i == null ? void 0 : i(e, t, n, r);
  if (a !== void 0) return a;
  if (D(e)) return e;
  if (r.has(e)) return r.get(e);
  if (Array.isArray(e)) {
    let t = Array(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = P(e[a], a, n, r, i);
    return Object.hasOwn(e, `index`) && (t.index = e.index), Object.hasOwn(e, `input`) && (t.input = e.input), t
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    let t = new RegExp(e.source, e.flags);
    return t.lastIndex = e.lastIndex, t
  }
  if (e instanceof Map) {
    let t = new Map;
    r.set(e, t);
    for (let [a, o] of e) t.set(a, P(o, a, n, r, i));
    return t
  }
  if (e instanceof Set) {
    let t = new Set;
    r.set(e, t);
    for (let a of e) t.add(P(a, void 0, n, r, i));
    return t
  }
  if (A(e)) return e.subarray();
  if (O(e)) {
    let t = new(Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, t);
    for (let a = 0; a < e.length; a++) t[a] = P(e[a], a, n, r, i);
    return t
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, t), F(t, e, n, r, i), t
  }
  if (typeof File < `u` && e instanceof File) {
    let t = new File([e], e.name, {
      type: e.type
    });
    return r.set(e, t), F(t, e, n, r, i), t
  }
  if (typeof Blob < `u` && e instanceof Blob) {
    let t = new Blob([e], {
      type: e.type
    });
    return r.set(e, t), F(t, e, n, r, i), t
  }
  if (e instanceof Error) {
    let t = structuredClone(e);
    return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, t.constructor = e.constructor, F(t, e, n, r, i), t
  }
  if (e instanceof Boolean) {
    let t = new Boolean(e.valueOf());
    return r.set(e, t), F(t, e, n, r, i), t
  }
  if (e instanceof Number) {
    let t = new Number(e.valueOf());
    return r.set(e, t), F(t, e, n, r, i), t
  }
  if (e instanceof String) {
    let t = new String(e.valueOf());
    return r.set(e, t), F(t, e, n, r, i), t
  }
  if (typeof e == `object` && ir(e)) {
    let t = Object.create(Object.getPrototypeOf(e));
    return r.set(e, t), F(t, e, n, r, i), t
  }
  return e
}

function F(e, t, n = e, r, i) {
  let a = [...Object.keys(t), ...j(t)];
  for (let o = 0; o < a.length; o++) {
    let s = a[o],
      c = Object.getOwnPropertyDescriptor(e, s);
    (c == null || c.writable) && (e[s] = P(t[s], s, n, r, i))
  }
}

function ir(e) {
  switch (M(e)) {
    case In:
    case Vn:
    case Un:
    case Gn:
    case Fn:
    case Rn:
    case tr:
    case nr:
    case Zn:
    case Qn:
    case $n:
    case zn:
    case Pn:
    case N:
    case Mn:
    case Bn:
    case Nn:
    case Ln:
    case Kn:
    case qn:
    case Jn:
    case Yn:
      return !0;
    default:
      return !1
  }
}

function ar(e) {
  return P(e, void 0, e, new Map, void 0)
}

function or(e, t) {
  return Object.keys(e).find(n => t(e[n], n, e))
}

function I(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null ? !1 : Object.prototype.toString.call(e) === `[object Object]`
}

function sr(e, {
  delimiter: t = `.`
} = {}) {
  return L(e, ``, t)
}

function L(e, t, n) {
  let r = {},
    i = Object.keys(e);
  for (let a = 0; a < i.length; a++) {
    let o = i[a],
      s = e[o],
      c = t ? `${t}${n}${o}` : o;
    if (I(s) && Object.keys(s).length > 0) {
      Object.assign(r, L(s, c, n));
      continue
    }
    if (Array.isArray(s) && s.length > 0) {
      Object.assign(r, L(s, c, n));
      continue
    }
    r[c] = s
  }
  return r
}

function cr(e) {
  let t = {},
    n = Object.keys(e);
  for (let r = 0; r < n.length; r++) {
    let i = n[r],
      a = e[i];
    t[a] = i
  }
  return t
}

function lr(e, t) {
  let n = {},
    r = Object.keys(e);
  for (let i = 0; i < r.length; i++) {
    let a = r[i],
      o = e[a];
    n[t(o, a, e)] = o
  }
  return n
}

function ur(e, t) {
  let n = {},
    r = Object.keys(e);
  for (let i = 0; i < r.length; i++) {
    let a = r[i],
      o = e[a];
    n[a] = t(o, a, e)
  }
  return n
}

function dr(e) {
  return e === `__proto__`
}

function R(e, t) {
  let n = Object.keys(t);
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    if (dr(i)) continue;
    let a = t[i],
      o = e[i];
    fr(a) && fr(o) ? e[i] = R(o, a) : Array.isArray(a) ? e[i] = R([], a) : I(a) ? e[i] = R({}, a) : (o === void 0 || a !== void 0) && (e[i] = a)
  }
  return e
}

function fr(e) {
  return I(e) || Array.isArray(e)
}

function z(e, t, n) {
  let r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    let a = r[i];
    if (dr(a)) continue;
    let o = t[a],
      s = e[a],
      c = n(s, o, a, e, t);
    c === void 0 ? Array.isArray(o) ? e[a] = z(Array.isArray(s) ? s : [], o, n) : I(o) ? e[a] = I(s) ? z(s, o, n) : z({}, o, n) : (s === void 0 || o !== void 0) && (e[a] = o) : e[a] = c
  }
  return e
}

function pr(e, t) {
  let n = {
    ...e
  };
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    delete n[r]
  }
  return n
}

function mr(e, t) {
  let n = {},
    r = Object.keys(e);
  for (let i = 0; i < r.length; i++) {
    let a = r[i],
      o = e[a];
    t(o, a) || (n[a] = o)
  }
  return n
}

function hr(e, t) {
  let n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    Object.hasOwn(e, i) && (n[i] = e[i])
  }
  return n
}

function gr(e, t) {
  let n = {},
    r = Object.keys(e);
  for (let i = 0; i < r.length; i++) {
    let a = r[i],
      o = e[a];
    t(o, a) && (n[a] = o)
  }
  return n
}

function _r(e, t) {
  let n = Object.keys(e).sort(t),
    r = {};
  for (let t = 0; t < n.length; t++) {
    let i = n[t];
    r[i] = e[i]
  }
  return r
}

function B(e) {
  return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
}
var vr = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;

function V(e) {
  return Array.from(e.match(vr) ?? [])
}

function yr(e) {
  let t = V(e);
  if (t.length === 0) return ``;
  let [n, ...r] = t;
  return `${n.toLowerCase()}${r.map(e=>B(e)).join(``)}`
}

function br(e) {
  return Array.isArray(e)
}

function H(e) {
  if (br(e)) return e.map(e => H(e));
  if (I(e)) {
    let t = {},
      n = Object.keys(e);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = yr(i);
      t[a] = H(e[i])
    }
    return t
  }
  return e
}

function xr(e, t) {
  return z(k(e), t, function e(t, n) {
    if (Array.isArray(n)) return z(Array.isArray(t) ? k(t) : [], n, e);
    if (I(n)) return I(t) ? z(k(t), n, e) : z({}, n, e)
  })
}

function Sr(e) {
  return V(e).map(e => e.toLowerCase()).join(`_`)
}

function Cr(e) {
  if (typeof e != `object` || !e) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== `[object Object]`) {
    var t;
    let n = e[Symbol.toStringTag];
    return n == null || !((t = Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)) != null && t.writable) ? !1 : e.toString() === `[object ${n}]`
  }
  let n = e;
  for (; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(e) === n
}

function U(e) {
  if (br(e)) return e.map(e => U(e));
  if (Cr(e)) {
    let t = {},
      n = Object.keys(e);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = Sr(i);
      t[a] = U(e[i])
    }
    return t
  }
  return e
}

function wr(e) {
  return e instanceof ArrayBuffer
}

function Tr(e) {
  return typeof Blob > `u` ? !1 : e instanceof Blob
}

function Er(e) {
  return typeof e == `boolean`
}

function Dr() {
  var e;
  return typeof window < `u` && ((e = window) == null ? void 0 : e.document) != null
}

function Or(e) {
  return e instanceof Date
}

function kr(e) {
  return I(e) && Object.keys(e).length === 0
}

function Ar(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t)
}

function jr(e, t, n) {
  return W(e, t, void 0, void 0, void 0, void 0, n)
}

function W(e, t, n, r, i, a, o) {
  let s = o(e, t, n, r, i, a);
  if (s !== void 0) return s;
  if (typeof e == typeof t) switch (typeof e) {
    case `bigint`:
    case `string`:
    case `boolean`:
    case `symbol`:
    case `undefined`:
      return e === t;
    case `number`:
      return e === t || Object.is(e, t);
    case `function`:
      return e === t;
    case `object`:
      return G(e, t, a, o)
  }
  return G(e, t, a, o)
}

function G(e, t, n, r) {
  if (Object.is(e, t)) return !0;
  let i = M(e),
    a = M(t);
  if (i === `[object Arguments]` && (i = N), a === `[object Arguments]` && (a = N), i !== a) return !1;
  switch (i) {
    case Nn:
      return e.toString() === t.toString();
    case Pn:
      return Ar(e.valueOf(), t.valueOf());
    case Fn:
    case Rn:
    case Ln:
      return Object.is(e.valueOf(), t.valueOf());
    case Mn:
      return e.source === t.source && e.flags === t.flags;
    case Hn:
      return e === t
  }
  n = n ?? new Map;
  let o = n.get(e),
    s = n.get(t);
  if (o != null && s != null) return o === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (i) {
      case zn:
        if (e.size !== t.size) return !1;
        for (let [i, a] of e.entries())
          if (!t.has(i) || !W(a, t.get(i), i, e, t, n, r)) return !1;
        return !0;
      case Bn: {
        if (e.size !== t.size) return !1;
        let i = Array.from(e.values()),
          a = Array.from(t.values());
        for (let o = 0; o < i.length; o++) {
          let s = i[o],
            c = a.findIndex(i => W(s, i, void 0, e, t, n, r));
          if (c === -1) return !1;
          a.splice(c, 1)
        }
        return !0
      }
      case Vn:
      case Kn:
      case qn:
      case Jn:
      case Yn:
      case Xn:
      case Zn:
      case Qn:
      case $n:
      case er:
      case tr:
      case nr:
        if (A(e) !== A(t) || e.length !== t.length) return !1;
        for (let i = 0; i < e.length; i++)
          if (!W(e[i], t[i], i, e, t, n, r)) return !1;
        return !0;
      case Un:
        return e.byteLength === t.byteLength && G(new Uint8Array(e), new Uint8Array(t), n, r);
      case Gn:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : G(new Uint8Array(e), new Uint8Array(t), n, r);
      case Wn:
        return e.name === t.name && e.message === t.message;
      case N: {
        if (!(G(e.constructor, t.constructor, n, r) || I(e) && I(t))) return !1;
        let i = [...Object.keys(e), ...j(e)],
          a = [...Object.keys(t), ...j(t)];
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++) {
          let o = i[a],
            s = e[o];
          if (!Object.hasOwn(t, o)) return !1;
          let c = t[o];
          if (!W(s, c, o, e, t, n, r)) return !1
        }
        return !0
      }
      default:
        return !1
    }
  } finally {
    n.delete(e), n.delete(t)
  }
}

function Mr(e, t) {
  return jr(e, t, rn)
}

function Nr(e) {
  return e instanceof Error
}

function Pr(e) {
  return typeof File > `u` ? !1 : Tr(e) && e instanceof File
}

function Fr(e) {
  return typeof e == `function`
}

function Ir(e) {
  if (typeof e != `string`) return !1;
  try {
    return JSON.parse(e), !0
  } catch {
    return !1
  }
}

function K(e) {
  switch (typeof e) {
    case `object`:
      return e === null || Lr(e) || Rr(e);
    case `string`:
    case `number`:
    case `boolean`:
      return !0;
    default:
      return !1
  }
}

function Lr(e) {
  return Array.isArray(e) ? e.every(e => K(e)) : !1
}

function Rr(e) {
  if (!I(e)) return !1;
  let t = Reflect.ownKeys(e);
  for (let n = 0; n < t.length; n++) {
    let r = t[n],
      i = e[r];
    if (typeof r != `string` || !K(i)) return !1
  }
  return !0
}

function zr(e) {
  return Number.isSafeInteger(e) && e >= 0
}

function Br(e) {
  return e instanceof Map
}

function Vr(e) {
  return e == null
}

function Hr() {
  var e;
  return typeof process < `u` && ((e = process) == null || (e = e.versions) == null ? void 0 : e.node) != null
}

function Ur(e) {
  return e != null
}

function Wr(e) {
  return e === null
}

function Gr(e) {
  return typeof e == `number`
}

function Kr(e) {
  return e instanceof Promise
}

function qr(e) {
  return e instanceof RegExp
}

function Jr(e) {
  return e instanceof Set
}

function Yr(e) {
  return typeof e == `string`
}

function Xr(e) {
  return typeof e == `symbol`
}

function Zr(e) {
  return e === void 0
}

function Qr(e) {
  return e instanceof WeakMap
}

function $r(e) {
  return e instanceof WeakSet
}
async function ei(e) {
  let t = Object.keys(e),
    n = await Promise.all(t.map(t => e[t])),
    r = {};
  for (let e = 0; e < t.length; e++) r[t[e]] = n[e];
  return r
}
var ti = class {
  constructor() {
    o(this, `semaphore`, new Me(1))
  }
  get isLocked() {
    return this.semaphore.available === 0
  }
  async acquire() {
    return this.semaphore.acquire()
  }
  release() {
    this.semaphore.release()
  }
};
async function ni(e) {
  throw await E(e), new Ht
}
async function ri(e, t) {
  return Promise.race([e(), ni(t)])
}

function ii(e) {
  return V(e).map(e => e.toUpperCase()).join(`_`)
}
var ai = new Map([
  [`Æ`, `Ae`],
  [`Ð`, `D`],
  [`Ø`, `O`],
  [`Þ`, `Th`],
  [`ß`, `ss`],
  [`æ`, `ae`],
  [`ð`, `d`],
  [`ø`, `o`],
  [`þ`, `th`],
  [`Đ`, `D`],
  [`đ`, `d`],
  [`Ħ`, `H`],
  [`ħ`, `h`],
  [`ı`, `i`],
  [`Ĳ`, `IJ`],
  [`ĳ`, `ij`],
  [`ĸ`, `k`],
  [`Ŀ`, `L`],
  [`ŀ`, `l`],
  [`Ł`, `L`],
  [`ł`, `l`],
  [`ŉ`, `'n`],
  [`Ŋ`, `N`],
  [`ŋ`, `n`],
  [`Œ`, `Oe`],
  [`œ`, `oe`],
  [`Ŧ`, `T`],
  [`ŧ`, `t`],
  [`ſ`, `s`]
]);

function oi(e) {
  e = e.normalize(`NFD`);
  let t = ``;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r >= `̀` && r <= `ͯ` || r >= `︠` && r <= `︣` || (t += ai.get(r) ?? r)
  }
  return t
}
var si = {
  "&": `&amp;`,
  "<": `&lt;`,
  ">": `&gt;`,
  '"': `&quot;`,
  "'": `&#39;`
};

function ci(e) {
  return e.replace(/[&<>"']/g, e => si[e])
}

function li(e) {
  return e.replace(/[\\^$.*+?()[\]{}|]/g, `\\$&`)
}

function ui(e) {
  return V(e).map(e => e.toLowerCase()).join(`-`)
}

function di(e) {
  return V(e).map(e => e.toLowerCase()).join(` `)
}

function fi(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1)
}

function pi(e, t, n = ` `) {
  return e.padStart(Math.floor((t - e.length) / 2) + e.length, n).padEnd(t, n)
}

function mi(e) {
  return V(e).map(e => B(e)).join(``)
}

function hi(e) {
  return [...e].reverse().join(``)
}

function gi(e) {
  let t = V(e.trim()),
    n = ``;
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    n && (n += ` `), n += r[0].toUpperCase() + r.slice(1).toLowerCase()
  }
  return n
}

function _i(e, t) {
  if (t === void 0) return e.trimEnd();
  let n = e.length;
  switch (typeof t) {
    case `string`:
      if (t.length !== 1) throw Error(`The 'chars' parameter should be a single character string.`);
      for (; n > 0 && e[n - 1] === t;) n--;
      break;
    case `object`:
      for (; n > 0 && t.includes(e[n - 1]);) n--
  }
  return e.substring(0, n)
}

function vi(e, t) {
  if (t === void 0) return e.trimStart();
  let n = 0;
  switch (typeof t) {
    case `string`:
      for (; n < e.length && e[n] === t;) n++;
      break;
    case `object`:
      for (; n < e.length && t.includes(e[n]);) n++
  }
  return e.substring(n)
}

function yi(e, t) {
  return t === void 0 ? e.trim() : vi(_i(e, t), t)
}
var bi = {
  "&amp;": `&`,
  "&lt;": `<`,
  "&gt;": `>`,
  "&quot;": `"`,
  "&#39;": `'`
};

function xi(e) {
  return e.replace(/&(?:amp|lt|gt|quot|#(0+)?39);/g, e => bi[e] || `'`)
}

function Si(e) {
  let t = V(e),
    n = ``;
  for (let e = 0; e < t.length; e++) n += t[e].toUpperCase(), e < t.length - 1 && (n += ` `);
  return n
}

function Ci(e) {
  return e.substring(0, 1).toUpperCase() + e.substring(1)
}

function wi(e) {
  try {
    return [null, e()]
  } catch (e) {
    return [e, null]
  }
}
async function Ti(e) {
  try {
    return [null, await e()]
  } catch (e) {
    return [e, null]
  }
}

function Ei(e, t) {
  if (!e) throw typeof t == `string` ? Error(t) : t
}
var Di = l({
    AbortError: () => Vt,
    Mutex: () => ti,
    Semaphore: () => Me,
    TimeoutError: () => Ht,
    after: () => Ut,
    allKeyed: () => ei,
    ary: () => Wt,
    assert: () => Ei,
    asyncNoop: () => Gt,
    at: () => ye,
    attempt: () => wi,
    attemptAsync: () => Ti,
    before: () => Kt,
    camelCase: () => yr,
    capitalize: () => B,
    cartesianProduct: () => be,
    chunk: () => xe,
    clamp: () => bn,
    clone: () => k,
    cloneDeep: () => ar,
    cloneDeepWith: () => rr,
    combinations: () => Se,
    compact: () => Ce,
    constantCase: () => ii,
    countBy: () => we,
    curry: () => qt,
    curryRight: () => Yt,
    debounce: () => Zt,
    deburr: () => oi,
    delay: () => E,
    difference: () => S,
    differenceBy: () => Te,
    differenceWith: () => Ee,
    drop: () => De,
    dropRight: () => Oe,
    dropRightWhile: () => ke,
    dropWhile: () => Ae,
    escape: () => ci,
    escapeRegExp: () => li,
    fill: () => je,
    filterAsync: () => Ne,
    findKey: () => or,
    flatMap: () => Pe,
    flatMapAsync: () => Fe,
    flatMapDeep: () => Le,
    flatten: () => w,
    flattenDeep: () => Ie,
    flattenObject: () => sr,
    flow: () => Qt,
    flowRight: () => $t,
    forEachAsync: () => Re,
    forEachRight: () => ze,
    groupBy: () => Be,
    head: () => Ve,
    identity: () => en,
    inRange: () => xn,
    initial: () => He,
    intersection: () => Ue,
    intersectionBy: () => We,
    intersectionWith: () => Ge,
    invariant: () => Ei,
    invert: () => cr,
    isArrayBuffer: () => wr,
    isBlob: () => Tr,
    isBoolean: () => Er,
    isBrowser: () => Dr,
    isBuffer: () => A,
    isDate: () => Or,
    isEmptyObject: () => kr,
    isEqual: () => Mr,
    isEqualWith: () => jr,
    isError: () => Nr,
    isFile: () => Pr,
    isFunction: () => Fr,
    isJSON: () => Ir,
    isJSONArray: () => Lr,
    isJSONObject: () => Rr,
    isJSONValue: () => K,
    isLength: () => zr,
    isMap: () => Br,
    isNil: () => Vr,
    isNode: () => Hr,
    isNotNil: () => Ur,
    isNull: () => Wr,
    isNumber: () => Gr,
    isPlainObject: () => I,
    isPrimitive: () => D,
    isPromise: () => Kr,
    isRegExp: () => qr,
    isSet: () => Jr,
    isString: () => Yr,
    isSubset: () => Ke,
    isSubsetWith: () => qe,
    isSymbol: () => Xr,
    isTypedArray: () => O,
    isUndefined: () => Zr,
    isWeakMap: () => Qr,
    isWeakSet: () => $r,
    kebabCase: () => ui,
    keyBy: () => Je,
    last: () => Ye,
    limitAsync: () => C,
    lowerCase: () => di,
    lowerFirst: () => fi,
    mapAsync: () => Xe,
    mapKeys: () => lr,
    mapValues: () => ur,
    maxBy: () => Ze,
    mean: () => Cn,
    meanBy: () => Tn,
    median: () => En,
    medianBy: () => Dn,
    memoize: () => tn,
    merge: () => R,
    mergeWith: () => z,
    minBy: () => Qe,
    negate: () => nn,
    noop: () => rn,
    omit: () => pr,
    omitBy: () => mr,
    once: () => an,
    orderBy: () => nt,
    pad: () => pi,
    partial: () => on,
    partialRight: () => ln,
    partition: () => rt,
    pascalCase: () => mi,
    percentile: () => On,
    pick: () => hr,
    pickBy: () => gr,
    pull: () => it,
    pullAt: () => at,
    random: () => lt,
    randomInt: () => ut,
    range: () => kn,
    rangeRight: () => An,
    reduceAsync: () => ot,
    remove: () => st,
    rest: () => fn,
    retry: () => gn,
    reverseString: () => hi,
    round: () => jn,
    sample: () => ct,
    sampleSize: () => dt,
    shuffle: () => ft,
    snakeCase: () => Sr,
    sortBy: () => pt,
    sortKeys: () => _r,
    spread: () => _n,
    startCase: () => gi,
    sum: () => Sn,
    sumBy: () => wn,
    tail: () => mt,
    take: () => yt,
    takeRight: () => bt,
    takeRightWhile: () => xt,
    takeWhile: () => St,
    throttle: () => vn,
    timeout: () => ni,
    toCamelCaseKeys: () => H,
    toFilled: () => Ct,
    toMerged: () => xr,
    toSnakeCaseKeys: () => U,
    trim: () => yi,
    trimEnd: () => _i,
    trimStart: () => vi,
    unary: () => yn,
    unescape: () => xi,
    union: () => Tt,
    unionBy: () => Dt,
    unionWith: () => kt,
    uniq: () => wt,
    uniqBy: () => Et,
    uniqWith: () => Ot,
    unzip: () => At,
    unzipWith: () => jt,
    upperCase: () => Si,
    upperFirst: () => Ci,
    windowed: () => Mt,
    withTimeout: () => ri,
    without: () => Nt,
    words: () => V,
    xor: () => Pt,
    xorBy: () => Ft,
    xorWith: () => It,
    zip: () => Lt,
    zipObject: () => Rt,
    zipWith: () => zt
  }),
  Oi = class e extends Promise {
    get state() {
      return this.stateHolder.current
    }
    get resolve() {
      return this.resolvers.resolve
    }
    get reject() {
      return this.resolvers.reject
    }
    get isFinished() {
      return this.state.status && this.state.status !== `pending`
    }
    constructor(e) {
      let t, n = {
        current: {
          status: `pending`
        }
      };
      super((n, i) => {
        t = {
          resolve: r(`fulfilled`, n),
          reject: r(`rejected`, i)
        }, e == null || e(t.resolve, t.reject)
      }), o(this, `resolvers`, void 0), o(this, `stateHolder`, void 0), this.resolvers = t, this.stateHolder = n;

      function r(e, t) {
        return function(...r) {
          return n.current.status === `pending` && (n.current = ki(e, r[0], n.current)), t(...r)
        }
      }
    }
    static create(t) {
      let n = new e;
      return e.trap(t, n), n
    }
    static async trap(e, t) {
      try {
        return t.resolve(await e)
      } catch (e) {
        t.reject(e)
      }
    }
    static delay(t) {
      let n = e.create(void 0),
        r = setTimeout(n.resolve, t);
      return n.catch(() => clearTimeout(r)), n
    }
  };

function ki(e, t, n) {
  switch (e) {
    case `fulfilled`:
      return {
        status: e, value: t
      };
    case `rejected`:
      return {
        status: e, reason: t
      }
  }
  return n
}
var Ai = function(e) {
    return e.Play = `https://play.google.com/billing`, e
  }({}),
  q;

function ji(e) {
  return tn(e)
}

function Mi(e) {
  return ji(function(...t) {
    return Oi.create(e(...t))
  })
}
var J = (function(e) {
    return e.Fail = `fail`, e.Success = `success`, e.Wait = `unknown`, e
  })({}),
  Y = class e {
    static get checkout() {
      var t, n;
      return ((t = e.checkoutState) == null ? void 0 : t.current) && new e((n = e.checkoutState) == null ? void 0 : n.current)
    }
    constructor(e) {
      o(this, `state`, void 0), this.state = e
    }
    get startedAt() {
      return this.state.startedAt
    }
    get finishedAt() {
      return this.state.finishedAt
    }
    get type() {
      return this.state.type
    }
    static shouldRecover() {
      var t, n;
      return $() && ((t = e.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((n = e.checkout) == null ? void 0 : n.startedAt) <= 3 * re.day
    }
    static isRunning() {
      var t;
      return ((t = e.memoryCheckout) == null ? void 0 : t.type) === `running`
    }
    applyFinishIfNecessary(t) {
      this.startedAt > t.startedAt || e.isRunning() && e.onChangeCheckout({
        ...this.state,
        finishedAt: Date.now(),
        type: `finished`,
        view: void 0,
        droplets: 0
      })
    }
    static start() {
      return e.onChangeCheckout({
        type: `running`,
        startedAt: Date.now(),
        view: void 0,
        finishedAt: void 0
      })
    }
    static finish(t) {
      var n, r;
      return (n = e.checkout) == null || (r = n.applyFinishIfNecessary) == null ? void 0 : r.call(n, t)
    }
    static markViewed() {
      var t;
      let n = (t = e.checkout) == null ? void 0 : t.state;
      n && e.onChangeCheckout({
        startedAt: n == null ? void 0 : n.startedAt,
        finishedAt: Date.now(),
        droplets: n.type === `running` ? 0 : n.droplets,
        type: `finished`,
        view: Date.now()
      })
    }
    static clear() {
      e.checkoutState.current = void 0
    }
    static onChangeCheckout(t) {
      return e.checkoutState.current = t, e.memoryCheckout = e.checkout, e.memoryCheckout
    }
    static preventNavigationInTWAIfInCheckout(t) {
      $() && (e.addFocusListener(t), e.addNavigationListener(t))
    }
    static addFocusListener(e) {
      window.addEventListener(`focus`, () => {
        Z.recover()
      }, {
        signal: e.signal
      })
    }
    static addNavigationListener(t) {
      let n = window.navigation;
      n && n.addEventListener(`navigate`, t => {
        if (!document.hasFocus() && e.memoryCheckout || e.isRunning()) {
          var n;
          t.preventDefault(), (n = Z.log) == null || n.call(Z, `intercepted`, Error().stack)
        }
      }, {
        signal: t.signal
      })
    }
    static openCheckoutDialog(t) {
      e.markViewed();
      let n = g(Array.isArray(t) ? t : [t]).map(e => `${e.currency}=${encodeURIComponent(String(e.amount))}`).join(`&`);
      if (n) return d(u(`/payment/success-v3`) + `?${n}`, {
        replaceState: !0
      })
    }
    static openPendingDialog() {
      oe.pendingHistoryDialogOpen = !0
    }
  };
o(Y, `checkoutState`, new y(`twa:checkout`, void 0, {
  syncTabs: !1,
  storage: `local`
})), o(Y, `memoryCheckout`, void 0);
var X = (function(e) {
  return e.NotTwaContext = `not-twa-context`, e.BillingBlocked = `billing-blocked`, e
})(X || {});

function Ni(e) {
  let t = e;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var Z = class e {
  static get playBillingBlockedError() {
    return e.errors.at(-1)
  }
  static get playBillingBlocked() {
    return !!e.errors.at(-1)
  }
  static get log() {}
  static get error() {}
  static get warn() {}
  static toastError(...t) {
    var n;
    let r = t.map(e => JSON.stringify(e));
    throw (n = e.error) == null || n.call(e, ...t), r.forEach(e => ae.error(e)), new p(t.length === 1 ? r[0] : r.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(e, t) {
    let n = {
      sku: e,
      obfuscatedAccountId: t
    };
    return new PaymentRequest([{
      supportedMethods: Ai.Play,
      data: n
    }], {
      total: {
        label: `Total`,
        amount: {
          currency: `USD`,
          value: `0`
        }
      }
    })
  }
  static setAsPlayBillingBlockedErrorIfNecessary(t, n) {
    if (t) try {
      let n = e.PLAY_BILLING_NOT_AVAILABLE.find(e => Mr(Ni(t), Ni(e)));
      if (!n) return;
      if ((n == null ? void 0 : n.kind) === X.NotTwaContext) {
        e.forceTWA.current = !1;
        return
      }
      e.errors.push(n)
    } finally {
      throw n || t
    }
  }
  static async getObfuscatedAccountId() {
    let t = await h.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw e.setAsPlayBillingBlockedErrorIfNecessary(e.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION), new p(`No hash account id`);
    return t
  }
  static async createPaymentBySkuId(t) {
    let n = await e.getObfuscatedAccountId();
    return e.createPaymentRequest(t, n)
  }
  static async createPayment(t) {
    var n;
    e.twaGuard();
    let r = m(t);
    if (!(r != null && r.productId)) throw new p(`No sku config or productId found`);
    if (!((n = _.data) != null && n.id)) throw new p(`No user id`);
    let i = await e.createPaymentBySkuId(t),
      a = Y.start(),
      o = await i.show().catch(e.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var e;
        return (e = Y.finish) == null ? void 0 : e.call(Y, a)
      }),
      s = o == null ? void 0 : o.toJSON(),
      c = J.Wait;
    return s != null && s.details.purchaseToken ? l(c) : l(J.Fail, new p(`Play Billing returned no purchase token`)), {
      setStatus: l,
      status: c,
      out: s,
      verify: u
    };
    async function l(e, t) {
      if (c = e, await (o == null ? void 0 : o.complete(e).catch(() => {})), t) throw t
    }
    async function u() {
      var n;
      if (s != null && (n = s.details) != null && n.purchaseToken) try {
        var r;
        let {
          grant: n
        } = await e.verifyBySKU({
          sku: t,
          token: s == null || (r = s.details) == null ? void 0 : r.purchaseToken
        });
        return await l(J.Success), await e.refresh(), Y.openCheckoutDialog(n)
      } catch (e) {
        await l(J.Fail, e)
      }
    }
  }
  static refresh() {
    return e.twaGuard(), _.refresh()
  }
  static async dispatchPendingPurchases() {
    e.twaGuard();
    let t = {
      credited: [],
      pending: 0
    };
    try {
      if (!e.service) return t;
      let n = await e.service.listPurchases().catch(() => []);
      if (!n.length) return t;
      let r = await Promise.allSettled(n.map(t => e.verifyBySKU({
          sku: t.itemId,
          token: t.purchaseToken
        }))),
        i = [],
        a = 0;
      for (let e of r) e.status === `fulfilled` ? i.push(e.value.grant) : a++;
      let o = g(i);
      return o.length > 0 && await e.refresh(), {
        credited: o,
        pending: a
      }
    } catch {
      return t
    }
  }
  static async autoRecoverPendingPurchases() {
    var t;
    if (e.twaGuard(), await e.loadService(), !Y.shouldRecover()) return;
    let {
      credited: n,
      pending: r
    } = await e.dispatchPendingPurchases().catch(() => ({
      credited: [],
      pending: 0
    }));
    if (n.length > 0) {
      Y.openCheckoutDialog(n);
      return
    }
    if (r > 0) {
      Y.openPendingDialog();
      return
    }
    let i = (t = Y.checkout) == null ? void 0 : t.state;
    if ((i == null ? void 0 : i.type) === `finished` && !i.view) {
      i.droplets && Y.openCheckoutDialog({
        currency: `droplets`,
        amount: i.droplets
      });
      return
    }
    Y.clear()
  }
  static verifyBySKU(t) {
    e.twaGuard();
    let n = m(t.sku);
    return h.verifyPlayPurchase({
      productId: Number(n.productId),
      purchaseToken: t.token
    })
  }
  static getGlobal() {
    return window
  }
  static isTWA() {
    return !!($() && e.forceTWA.current !== !1 && (e.forceTWA.current || e.service))
  }
  static isTWALoaded() {
    return !!(_.data && e.service && e.forceTWA.current !== !1)
  }
  static async load() {
    if ($()) {
      try {
        await this.loadMapSKUs()
      } catch (n) {
        var t;
        (t = e.log) == null || t.call(e, n)
      }
      e.service && (await e.recover(), e.forceTWA.current = !0)
    }
  }
  static async recover() {
    if (Y.shouldRecover()) {
      await e.loadService();
      try {
        var t;
        let n = await e.getPurchasesAfter(),
          r = Be(n, e => e.status),
          i = g(((t = r.paid) == null ? void 0 : t.map(e => e.grant)) ?? []);
        if (i.length > 0) {
          await Y.openCheckoutDialog(i);
          return
        }
        if (n != null && n.length) {
          await Y.openPendingDialog();
          return
        }
      } finally {
        await e.refresh()
      }
    }
  }
  static async getPurchasesAfter() {
    var e, t;
    let n = ((e = Y.checkout) == null ? void 0 : e.state.view) ?? ((t = Y.checkout) == null ? void 0 : t.state.startedAt);
    return n ? (await h.listPlayPurchaseHistory()).purchases.sort((e, t) => Date.parse(t.updatedAt) - Date.parse(e.updatedAt)).filter(e => Date.parse(e.updatedAt) > n) : []
  }
  static get hasTWAFlag() {
    let n = new URLSearchParams(window.location.search).get(`twa`) ?? void 0;
    return t(e, this, Pi)._.has(n)
  }
  static checkIfShouldForceTWA() {
    var t;
    if (!$()) {
      e.forceTWA.current = !1;
      return
    }
    if (this.hasTWAFlag) {
      e.forceTWA.current = !0;
      let t = new URL(location.href);
      t.search = (t.searchParams.delete(`twa`), t.searchParams.toString()), window.history.replaceState({}, ``, t.href)
    }
    let n = [document.referrer, (t = window) == null || (t = t.opener) == null || (t = t.document) == null ? void 0 : t.referrer].filter(e => e);
    if (n != null && n.length)
      for (let t of n) {
        let n = t.match(e.pattern),
          r = n == null ? void 0 : n[1];
        r && r === ie.appName && (e.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    $() && await e.load()
  }
  static isSamsung() {
    return f() === `Samsung Internet`
  }
  static nativeFormat(e) {
    return new Intl.NumberFormat(navigator.language, {
      style: `currency`,
      currency: e.price.currency
    }).format(+e.price.value)
  }
  static printPriceBySKU(t) {
    var n;
    let r = e.mapSKUs.get(t);
    if ((r == null ? void 0 : r.price) != null) return this.nativeFormat(r);
    let i = {
      value: ((n = m(t)) == null ? void 0 : n.price) * te / 100,
      currency: `USD`
    };
    return [i.currency, Number(i.value).toFixed(2)].join(` `)
  }
};
q = Z, o(Z, `pattern`, /^android-app:[/][/]([^/?]+)(.+)?$/), o(Z, `forceTWA`, new y(`twa:force_twa`, void 0, {
  syncTabs: !1,
  storage: `session`
})), o(Z, `POOLING_TIME`, 10), o(Z, `errors`, []), o(Z, `service`, void 0), o(Z, `mapSKUs`, new Map), o(Z, `referrer`, []), o(Z, `ERRORS`, {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: X.BillingBlocked,
    printError: v.payment_play_no_account_description(),
    name: `NO_ACCOUNT_ID`,
    message: `NO_ACCOUNT_ID`,
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: X.BillingBlocked,
    printError: v.payment_play_no_account_description(),
    name: `NotSupportedError`,
    message: `The payment method "https://play.google.com/billing" is not supported.`
  }
}), o(Z, `PLAY_BILLING_NOT_AVAILABLE`, [{
  kind: X.NotTwaContext,
  printError: v.payment_play_unsupported_description(),
  name: `NotSupportedError`,
  message: `The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.`
}, {
  kind: X.NotTwaContext,
  printError: v.payment_play_unsupported_description(),
  name: `NotSupportedError`,
  message: `The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.`
}, {
  kind: X.NotTwaContext,
  printError: v.payment_play_download_description(),
  name: `OperationError`,
  message: `unsupported context`
}, {
  kind: X.BillingBlocked,
  printError: v.payment_play_reload_description(),
  name: `SecurityError`,
  message: `PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability.`
}, {
  kind: X.BillingBlocked,
  printError: v.payment_play_unavailable_description(),
  name: `AbortError`,
  message: `Invalid state.`
}, q.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, q.ERRORS.GENERIC_NOT_SUPPORTED]), o(Z, `loadMapSKUs`, Mi(async () => {
  var e, t;
  if (!$()) return;
  q.twaGuard();
  let n = Object.values(ne.products).filter(e => `lookupKey` in e).map(e => e.lookupKey),
    r = await ((e = q.loadService) == null ? void 0 : e.call(q).catch(q.setAsPlayBillingBlockedErrorIfNecessary)),
    i = await (r == null ? void 0 : r.getDetails(n).catch(q.setAsPlayBillingBlockedErrorIfNecessary)),
    a = new Map(i == null ? void 0 : i.map(e => [e.itemId, e]));
  return (t = q.mapSKUs) != null && t.size || (q.mapSKUs = a), a
})), o(Z, `loadService`, Mi(() => {
  var e, t;
  return (e = (t = q.getGlobal()).getDigitalGoodsService) == null || (e = e.call(t, Ai.Play)) == null ? void 0 : e.then(e => q.service ?? (q.service = e)).then(e => (e && (q.forceTWA.current = !0), e))
}));
var Pi = {
  _: new Set([1, !0].map(String))
};
o(Z, `onInit`, async e => {
  q.loadService(), q.checkIfShouldForceTWA(), Y.preventNavigationInTWAIfInCheckout(e)
}), ee(() => ({
  TWACheckout: () => Y,
  TWAServices: () => Z,
  PersistedState: () => y,
  svelteNavigation: () => se,
  isPWA: () => $,
  estoolkit: () => Di
}));
var Q = i({
  status: `unavailable`
});
async function Fi() {
  let e = r(Q);
  if (e.status === `available`) {
    Q.set({
      status: `prompting`
    });
    try {
      return await e.event.prompt()
    } finally {
      r(Q).status === `prompting` && Q.set({
        status: `unavailable`
      })
    }
  }
}

function $() {
  return window.matchMedia(`(display-mode: standalone)`).matches || `standalone` in window.navigator && window.navigator.standalone === !0
}

function Ii() {
  let e = `last-unfocus`,
    t = new AbortController,
    n = window.pwaInstallPrompt;
  if (window.pwaInstallPrompt = void 0, n && Q.set({
      status: `available`,
      event: n
    }), window.addEventListener(`beforeinstallprompt`, e => {
      e.preventDefault(), window.pwaInstallPrompt === e && (window.pwaInstallPrompt = void 0), Q.set({
        status: `available`,
        event: e
      })
    }, {
      signal: t.signal
    }), window.addEventListener(`appinstalled`, () => {
      Q.set({
        status: `installed`
      })
    }, {
      signal: t.signal
    }), $()) {
    queueMicrotask(async () => {
      await Z.onInit(t)
    });
    let n = () => {
        let t = localStorage.getItem(e);
        if (t) {
          let e = parseInt(t, 10);
          Date.now() - e > 5 * re.minute && window.location.reload()
        }
      },
      r = () => {
        localStorage.setItem(e, Date.now().toString());
        let t = oe.map;
        t && pe(t.getCenter(), t.getZoom())
      };
    document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `visible` ? n() : r()
    }, {
      signal: t.signal
    }), window.addEventListener(`pageshow`, n, {
      signal: t.signal
    }), window.addEventListener(`pagehide`, r, {
      signal: t.signal
    })
  }
  return () => {
    t.abort(), Q.set({
      status: `unavailable`
    })
  }
}
export {
  J as a, de as c, ge as d, ve as f, Ii as i, le as l, Fi as n, Y as o, pe as p, Q as r, Z as s, $ as t, he as u
};