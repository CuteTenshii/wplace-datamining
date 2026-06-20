var At = Object.defineProperty;
var et = r => {
  throw TypeError(r)
};
var kt = (r, t, e) => t in r ? At(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var m = (r, t, e) => kt(r, typeof t != "symbol" ? t + "" : t, e),
  V = (r, t, e) => t.has(r) || et("Cannot " + e);
var c = (r, t, e) => (V(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  g = (r, t, e) => t.has(r) ? et("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  f = (r, t, e, n) => (V(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  v = (r, t, e) => (V(r, t, "access private method"), e);
import {
  T as ft,
  g as gt,
  t as Bt,
  a as H,
  q as J,
  u as Y,
  r as Ot,
  G as St,
  b as Et
} from "./D7KqenLe.js";
import {
  e as rt,
  i as nt,
  h as st,
  bI as Z,
  aE as Lt,
  y as Dt,
  B as Nt
} from "./CxLQz1V2.js";
import {
  g as Tt
} from "./DYQE8a57.js";
import {
  r as _t
} from "./CtAUB48k.js";
import {
  c as ht
} from "./CMG3kxXu.js";
import {
  g as yt
} from "./BhCkpOlh.js";
const Ct = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  Gt = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  zt = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  Ut = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  xt = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Rt = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Kt = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Ft = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Mt = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  qt = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Vt = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Ht = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Jt = (r = {}, t = {}) => {
    const e = t.locale ?? yt();
    return e === "en" ? Ct() : e === "pt" ? Gt() : e === "ch" ? zt() : e === "de" ? Ut() : e === "es" ? xt() : e === "fr" ? Rt() : e === "it" ? Kt() : e === "jp" ? Ft() : e === "pl" ? Mt() : e === "ru" ? qt() : e === "uk" ? Vt() : Ht()
  },
  Yt = () => "Play Billing not supported.",
  $t = () => "Play Billing não suportado.",
  Zt = () => "不支持 Play Billing。",
  Wt = () => "Play Billing wird nicht unterstützt.",
  Qt = () => "Play Billing no es compatible.",
  Xt = () => "Play Billing non pris en charge.",
  te = () => "Play Billing non supportato.",
  ee = () => "Play Billing はサポートされていません。",
  re = () => "Play Billing nie jest obsługiwane.",
  ne = () => "Play Billing не поддерживается.",
  se = () => "Play Billing не підтримується.",
  oe = () => "Play Billing không được hỗ trợ.",
  ie = (r = {}, t = {}) => {
    const e = t.locale ?? yt();
    return e === "en" ? Yt() : e === "pt" ? $t() : e === "ch" ? Zt() : e === "de" ? Wt() : e === "es" ? Qt() : e === "fr" ? Xt() : e === "it" ? te() : e === "jp" ? ee() : e === "pl" ? re() : e === "ru" ? ne() : e === "uk" ? se() : oe()
  };

function ae(r) {
  return Math.floor(Math.random() * r)
}
const W = 14.5;
async function rr() {
  const r = de();
  if (r) return r;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((n, s) => navigator.geolocation.getCurrentPosition(o => n(o), o => s(o)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: W
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...ce().pos,
    zoom: W
  }
}

function ce() {
  const r = Object.entries(ue),
    t = ae(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const ue = {
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
  mt = "location";

function le(r, t) {
  localStorage.setItem(mt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function de() {
  const r = localStorage.getItem(mt);
  if (!r) return;
  const t = JSON.parse(r);
  return t.zoom ?? (t.zoom = W), t
}

function nr(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}
var z, U;
class pe {
  constructor() {
    g(this, z, rt(-1));
    g(this, U, rt([]))
  }
  get idx() {
    return nt(c(this, z))
  }
  set idx(t) {
    st(c(this, z), t, !0)
  }
  get entries() {
    return nt(c(this, U))
  }
  set entries(t) {
    st(c(this, U), t)
  }
  hasNext() {
    return this.idx < this.entries.length - 1
  }
  goToNext(t) {
    const e = this.idx + 1,
      n = this.entries[e];
    n && (this.idx = e, t.flyTo({
      center: n.pos,
      zoom: n.zoom
    }))
  }
  hasPrev() {
    return this.idx > 0
  }
  goToPrev(t) {
    const e = this.idx - 1,
      n = this.entries[e];
    n && (this.idx = e, t.flyTo({
      center: n.pos,
      zoom: n.zoom
    }))
  }
  isEmpty() {
    return this.entries.length === 0
  }
  push(t) {
    this.idx = this.idx + 1, this.entries = [...this.entries.slice(0, this.idx), t]
  }
}
z = new WeakMap, U = new WeakMap;
const sr = new pe,
  ot = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
    return this
  })() || Function("return this")();

function fe(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, s = function(o) {
    const a = n ? n(o) : o;
    if (e.has(a)) return e.get(a);
    const l = r.call(this, o);
    return e.set(a, l), l
  };
  return s.cache = e, s
}

function ge() {}

function it(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function at(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const he = "[object RegExp]",
  ye = "[object String]",
  me = "[object Number]",
  we = "[object Boolean]",
  ct = "[object Arguments]",
  be = "[object Symbol]",
  Pe = "[object Date]",
  ve = "[object Map]",
  je = "[object Set]",
  Ie = "[object Array]",
  Ae = "[object Function]",
  ke = "[object ArrayBuffer]",
  $ = "[object Object]",
  Be = "[object Error]",
  Oe = "[object DataView]",
  Se = "[object Uint8Array]",
  Ee = "[object Uint8ClampedArray]",
  Le = "[object Uint16Array]",
  De = "[object Uint32Array]",
  Ne = "[object BigUint64Array]",
  Te = "[object Int8Array]",
  _e = "[object Int16Array]",
  Ce = "[object Int32Array]",
  Ge = "[object BigInt64Array]",
  ze = "[object Float32Array]",
  Ue = "[object Float64Array]";

function ut(r) {
  return typeof ot.Buffer < "u" && ot.Buffer.isBuffer(r)
}

function lt(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function xe(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Re(r, t, e) {
  return T(r, t, void 0, void 0, void 0, void 0, e)
}

function T(r, t, e, n, s, o, a) {
  const l = a(r, t, e, n, s, o);
  if (l !== void 0) return l;
  if (typeof r == typeof t) switch (typeof r) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return r === t;
    case "number":
      return r === t || Object.is(r, t);
    case "function":
      return r === t;
    case "object":
      return G(r, t, o, a)
  }
  return G(r, t, o, a)
}

function G(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let s = at(r),
    o = at(t);
  if (s === ct && (s = $), o === ct && (o = $), s !== o) return !1;
  switch (s) {
    case ye:
      return r.toString() === t.toString();
    case me: {
      const u = r.valueOf(),
        p = t.valueOf();
      return xe(u, p)
    }
    case we:
    case Pe:
    case be:
      return Object.is(r.valueOf(), t.valueOf());
    case he:
      return r.source === t.source && r.flags === t.flags;
    case Ae:
      return r === t
  }
  e = e ?? new Map;
  const a = e.get(r),
    l = e.get(t);
  if (a != null && l != null) return a === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (s) {
      case ve: {
        if (r.size !== t.size) return !1;
        for (const [u, p] of r.entries())
          if (!t.has(u) || !T(p, t.get(u), u, r, t, e, n)) return !1;
        return !0
      }
      case je: {
        if (r.size !== t.size) return !1;
        const u = Array.from(r.values()),
          p = Array.from(t.values());
        for (let b = 0; b < u.length; b++) {
          const y = u[b],
            A = p.findIndex(q => T(y, q, void 0, r, t, e, n));
          if (A === -1) return !1;
          p.splice(A, 1)
        }
        return !0
      }
      case Ie:
      case Se:
      case Ee:
      case Le:
      case De:
      case Ne:
      case Te:
      case _e:
      case Ce:
      case Ge:
      case ze:
      case Ue: {
        if (ut(r) !== ut(t) || r.length !== t.length) return !1;
        for (let u = 0; u < r.length; u++)
          if (!T(r[u], t[u], u, r, t, e, n)) return !1;
        return !0
      }
      case ke:
        return r.byteLength !== t.byteLength ? !1 : G(new Uint8Array(r), new Uint8Array(t), e, n);
      case Oe:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : G(new Uint8Array(r), new Uint8Array(t), e, n);
      case Be:
        return r.name === t.name && r.message === t.message;
      case $: {
        if (!(G(r.constructor, t.constructor, e, n) || lt(r) && lt(t))) return !1;
        const p = [...Object.keys(r), ...it(r)],
          b = [...Object.keys(t), ...it(t)];
        if (p.length !== b.length) return !1;
        for (let y = 0; y < p.length; y++) {
          const A = p[y],
            q = r[A];
          if (!Object.hasOwn(t, A)) return !1;
          const It = t[A];
          if (!T(q, It, A, r, t, e, n)) return !1
        }
        return !0
      }
      default:
        return !1
    }
  } finally {
    e.delete(r), e.delete(t)
  }
}

function Ke(r, t) {
  return Re(r, t, ge)
}
const wt = typeof window < "u" ? window : void 0;

function Fe(r) {
  let t = r.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var L, x;
class Me {
  constructor(t = {}) {
    g(this, L);
    g(this, x);
    const {
      window: e = wt,
      document: n = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (f(this, L, n), f(this, x, ht(s => {
      const o = Z(e, "focusin", s),
        a = Z(e, "focusout", s);
      return () => {
        o(), a()
      }
    })))
  }
  get current() {
    var t;
    return (t = c(this, x)) == null || t.call(this), c(this, L) ? Fe(c(this, L)) : null
  }
}
L = new WeakMap, x = new WeakMap;
new Me;

function qe(r, t) {
  switch (r) {
    case "post":
      Dt(t);
      break;
    case "pre":
      Lt(t);
      break
  }
}

function bt(r, t, e, n = {}) {
  const {
    lazy: s = !1
  } = n;
  let o = !s,
    a = Array.isArray(r) ? [] : void 0;
  qe(t, () => {
    const l = Array.isArray(r) ? r.map(p => p()) : r();
    if (!o) {
      o = !0, a = l;
      return
    }
    const u = Nt(() => e(l, a));
    return a = l, u
  })
}

function Ve(r, t, e) {
  bt(r, "post", t, e)
}

function He(r, t, e) {
  bt(r, "pre", t, e)
}
Ve.pre = He;

function Je(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function Pt(r, t, e, n, s, o) {
  if (r === null || typeof r != "object") return r;
  const a = Object.getPrototypeOf(r);
  if (a !== null && a !== Object.prototype && !Array.isArray(r)) return r;
  let l = e.get(r);
  return l || (l = new Proxy(r, {
    get: (u, p) => (n == null || n(), Pt(Reflect.get(u, p), t, e, n, s, o)),
    set: (u, p, b) => (s == null || s(), Reflect.set(u, p, b), o(t), !0)
  }), e.set(r, l)), l
}
var j, I, D, k, E, O, F, P, S, N, R, K, M, w, _, C, Q, vt;
class Ye {
  constructor(t, e, n = {}) {
    g(this, w);
    g(this, j);
    g(this, I);
    g(this, D);
    g(this, k);
    g(this, E);
    g(this, O);
    g(this, F, new WeakMap);
    g(this, P);
    g(this, S);
    g(this, N);
    g(this, R);
    g(this, K);
    g(this, M, t => {
      var e;
      t.key !== c(this, I) || t.newValue === null || (f(this, j, v(this, w, _).call(this, t.newValue)), (e = c(this, O)) == null || e.call(this))
    });
    const {
      storage: s = "local",
      serializer: o = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: a = !0,
      connected: l = !0
    } = n, u = "window" in n ? n.window : wt;
    if (f(this, j, e), f(this, I, t), f(this, D, o), f(this, P, l), f(this, N, u), f(this, R, a), f(this, K, s), u === void 0) return;
    const p = Je(s, u);
    f(this, k, p);
    const b = p.getItem(t);
    b !== null ? f(this, j, v(this, w, _).call(this, b)) : l && v(this, w, C).call(this, e), v(this, w, Q).call(this)
  }
  get current() {
    var e, n, s, o;
    (e = c(this, E)) == null || e.call(this);
    let t;
    if (c(this, P)) {
      const a = (n = c(this, k)) == null ? void 0 : n.getItem(c(this, I));
      t = a ? v(this, w, _).call(this, a) : c(this, j)
    } else t = c(this, j);
    return Pt(t, t, c(this, F), (s = c(this, E)) == null ? void 0 : s.bind(this), (o = c(this, O)) == null ? void 0 : o.bind(this), v(this, w, C).bind(this))
  }
  set current(t) {
    var e;
    v(this, w, C).call(this, t), (e = c(this, O)) == null || e.call(this)
  }
  get connected() {
    return c(this, P)
  }
  disconnect() {
    var e, n;
    if (!c(this, P)) return;
    const t = (e = c(this, k)) == null ? void 0 : e.getItem(c(this, I));
    t && f(this, j, v(this, w, _).call(this, t)), f(this, P, !1), (n = c(this, k)) == null || n.removeItem(c(this, I)), v(this, w, vt).call(this)
  }
  connect() {
    c(this, P) || (f(this, P, !0), v(this, w, C).call(this, c(this, j)), v(this, w, Q).call(this))
  }
}
j = new WeakMap, I = new WeakMap, D = new WeakMap, k = new WeakMap, E = new WeakMap, O = new WeakMap, F = new WeakMap, P = new WeakMap, S = new WeakMap, N = new WeakMap, R = new WeakMap, K = new WeakMap, M = new WeakMap, w = new WeakSet, _ = function(t) {
  try {
    return c(this, D).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${c(this,I)}"`, e);
    return
  }
}, C = function(t) {
  var e;
  if (!c(this, P)) {
    f(this, j, t);
    return
  }
  try {
    t !== void 0 && ((e = c(this, k)) == null || e.setItem(c(this, I), c(this, D).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${c(this,I)}" to ${c(this,k)}`, n)
  }
}, Q = function() {
  !c(this, N) || !c(this, P) || f(this, E, ht(t => (f(this, O, t), f(this, S, c(this, P) && c(this, R) && c(this, K) === "local" ? Z(c(this, N), "storage", c(this, M)) : void 0), () => {
    var e;
    (e = c(this, S)) == null || e.call(this), f(this, S, void 0), f(this, O, void 0)
  })))
}, vt = function() {
  var t;
  (t = c(this, S)) == null || t.call(this), f(this, S, void 0), f(this, E, void 0)
};
class tt extends Promise {
  constructor(e) {
    let n;
    super((a, l) => {
      n = {
        resolve: o("fulfilled", a),
        reject: o("rejected", l)
      }, e == null || e(n.resolve, n.reject)
    });
    m(this, "resolvers");
    m(this, "state", {
      status: "pending"
    });
    this.resolvers = n;
    const s = this;

    function o(a, l) {
      return function(...p) {
        return s.state.status === "pending" && (s.state = s.mountStateByStatus(a, p[0])), l(...p)
      }
    }
  }
  get resolve() {
    return this.resolvers.resolve
  }
  get reject() {
    return this.resolvers.reject
  }
  get isFinished() {
    return this.state.status && this.state.status !== "pending"
  }
  mountStateByStatus(e, n) {
    switch (e) {
      case "fulfilled":
        return {
          status: e, value: n
        };
      case "rejected":
        return {
          status: e, reason: n
        }
    }
    return this.state
  }
  create() {
    return new tt
  }
}
var X = (r => (r.Play = "https://play.google.com/billing", r))(X || {});

function dt(r) {
  return fe(r)
}
const d = class d {
  constructor(t) {
    this.state = t
  }
  static get checkout() {
    var t, e;
    return ((t = d.checkoutState) == null ? void 0 : t.current) && new d((e = d.checkoutState) == null ? void 0 : e.current)
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
    var t, e;
    return ((t = d.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = d.checkout) == null ? void 0 : e.startedAt) <= 3 * ft.day
  }
  static isRunning() {
    var t;
    return ((t = d.memoryCheckout) == null ? void 0 : t.type) === "running"
  }
  applyFinishIfNecessary(t) {
    this.startedAt > t.startedAt || d.isRunning() && d.onChangeCheckout({
      ...this.state,
      finishedAt: Date.now(),
      type: "finished",
      view: void 0,
      droplets: 0
    })
  }
  static start() {
    return d.onChangeCheckout({
      type: "running",
      startedAt: Date.now(),
      view: void 0,
      finishedAt: void 0
    })
  }
  static finish(t) {
    var e, n;
    return (n = (e = d.checkout) == null ? void 0 : e.applyFinishIfNecessary) == null ? void 0 : n.call(e, t)
  }
  static markViewed() {
    var e;
    const t = (e = d.checkout) == null ? void 0 : e.state;
    t && d.onChangeCheckout({
      startedAt: t == null ? void 0 : t.startedAt,
      finishedAt: Date.now(),
      droplets: t.type === "running" ? 0 : t.droplets,
      type: "finished",
      view: Date.now()
    })
  }
  static clear() {
    d.checkoutState.current = void 0
  }
  static onChangeCheckout(t) {
    return d.checkoutState.current = t, d.memoryCheckout = d.checkout, d.memoryCheckout
  }
  static preventNavigationInTWAIfInCheckout(t) {
    B.isTWA() && (d.addFocusListener(t), d.addNavigationListener(t))
  }
  static addFocusListener(t) {
    window.addEventListener("focus", () => {
      B.recover()
    }, {
      signal: t.signal
    })
  }
  static addNavigationListener(t) {
    const e = window.navigation;
    e && e.addEventListener("navigate", n => {
      var s;
      (!document.hasFocus() && d.memoryCheckout || d.isRunning()) && (n.preventDefault(), (s = B.log) == null || s.call(B, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    return d.markViewed(), Tt(_t("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    gt.pendingHistoryDialogOpen = !0
  }
};
m(d, "checkoutState", new Ye("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), m(d, "memoryCheckout");
let h = d;

function pt(r) {
  const t = r;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
const i = class i {
  static get playBillingBlocked() {
    return !!this.playBillingBlockedError
  }
  static get log() {}
  static get error() {}
  static get warn() {}
  static toastError(...t) {
    var n;
    const e = t.map(s => JSON.stringify(s));
    throw (n = i.error) == null || n.call(i, ...t), e.forEach(s => Bt.error(s)), new Error(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const n = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: X.Play,
      data: n
    }], {
      total: {
        label: "Total",
        amount: {
          currency: "USD",
          value: "0"
        }
      }
    })
  }
  static isPlayBillingBlockedError(t) {
    const e = i.PLAY_BILLING_NOT_AVAILABLE.findIndex(s => Ke(pt(t), pt(s)));
    return i.PLAY_BILLING_NOT_AVAILABLE[e]
  }
  static setAsPlayBillingBlockedErrorIfNecessary(t) {
    try {
      if (!t) return;
      i.setAsPlayBillingBlocked(i.isPlayBillingBlockedError(t))
    } finally {
      return Promise.reject(t)
    }
  }
  static setAsPlayBillingBlocked(t) {
    i.playBillingBlockedError = t
  }
  static async getObfuscatedAccountId() {
    const t = await H.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw i.setAsPlayBillingBlocked({
      message: "NO_ACCOUNT_ID",
      name: "NO_ACCOUNT_ID",
      printError: "Cannot find account id. Try again later."
    }), new Error("No hash account id");
    return t
  }
  static async createPaymentBySkuId(t) {
    const e = await i.getObfuscatedAccountId();
    return i.createPaymentRequest(t, e)
  }
  static async createPayment(t) {
    var b;
    i.twaGuard();
    const e = J(t);
    if (!(e != null && e.productId)) throw new Error("No sku config or productId found");
    if (!((b = Y.data) != null && b.id)) throw new Error("No user id");
    const n = await i.createPaymentBySkuId(t),
      s = h.start(),
      o = await n.show().catch(y => i.setAsPlayBillingBlockedErrorIfNecessary(y)).finally(() => {
        var y;
        return (y = h.finish) == null ? void 0 : y.call(h, s)
      }),
      a = o == null ? void 0 : o.toJSON();
    let l = "unknown";
    return a.details.purchaseToken ? u(l) : u("fail", new Error("Play Billing returned no purchase token")), {
      setStatus: u,
      status: l,
      out: a,
      verify: p
    };
    async function u(y, A) {
      if (l = y, await (o == null ? void 0 : o.complete(y).catch(() => {})), A) throw A
    }
    async function p() {
      try {
        const {
          droplets: y
        } = await i.verifyBySKU({
          sku: t,
          token: a.details.purchaseToken
        });
        return await u("success"), await i.refresh(), h.openCheckoutDialog(y)
      } catch (y) {
        await u("fail", y)
      }
    }
  }
  static refresh() {
    return i.twaGuard(), Y.refresh()
  }
  static async dispatchPendingPurchases() {
    i.twaGuard();
    const t = {
      credited: 0,
      pending: 0
    };
    try {
      if (!i.service) return t;
      const e = await i.service.listPurchases().catch(() => []);
      if (!e.length) return t;
      const n = await Promise.allSettled(e.map(a => i.verifyBySKU({
        sku: a.itemId,
        token: a.purchaseToken
      })));
      let s = 0,
        o = 0;
      for (const a of n) a.status === "fulfilled" ? s += a.value.droplets : o++;
      return s > 0 && await i.refresh(), {
        credited: s,
        pending: o
      }
    } catch {
      return t
    }
  }
  static async autoRecoverPendingPurchases() {
    var s;
    if (i.twaGuard(), !h.shouldRecover() || (await i.wait, !i.isTWALoaded())) return;
    const {
      credited: t,
      pending: e
    } = await i.dispatchPendingPurchases().catch(() => ({
      credited: 0,
      pending: 0
    }));
    if (t > 0) {
      h.openCheckoutDialog(t);
      return
    }
    if (e > 0) {
      h.openPendingDialog();
      return
    }
    const n = (s = h.checkout) == null ? void 0 : s.state;
    if ((n == null ? void 0 : n.type) === "finished" && !n.view) {
      n.droplets && h.openCheckoutDialog(n.droplets);
      return
    }
    h.clear()
  }
  static verifyBySKU(t) {
    i.twaGuard();
    const e = J(t.sku);
    return H.verifyPlayPurchase({
      productId: Number(e.productId),
      purchaseToken: t.token
    })
  }
  static getGlobal() {
    return window
  }
  static isTWA() {
    return jt() && !!this.getGlobal().getDigitalGoodsService
  }
  static canLoadTWA() {
    return this.isTWA()
  }
  static isTWALoaded() {
    return !!(Y.data && this.billing && this.service)
  }
  static async load() {
    var t;
    try {
      this.service ?? (this.service = await this.getService()), (t = this.mapSKUs) != null && t.size || (this.mapSKUs = await this.getMapSKUs()), i.wait.resolve()
    } catch (e) {
      i.wait.reject(e)
    } finally {
      i.service && await i.recover()
    }
  }
  static async recover() {
    var t;
    if (h.shouldRecover()) try {
      const e = await i.getPurchasesAfter(),
        s = ((t = Object.groupBy(e, o => o.status).paid) == null ? void 0 : t.reduce((o, a) => o + a.droplets, 0)) ?? 0;
      if (s > 0) {
        await h.openCheckoutDialog(s);
        return
      }
      if (e != null && e.length) {
        await h.openPendingDialog();
        return
      }
    } finally {
      await i.refresh()
    }
  }
  static async getPurchasesAfter() {
    var s, o;
    const t = ((s = h.checkout) == null ? void 0 : s.state.view) ?? ((o = h.checkout) == null ? void 0 : o.state.startedAt);
    return t ? (await H.listPlayPurchaseHistory()).purchases.sort((a, l) => Date.parse(l.updatedAt) - Date.parse(a.updatedAt)).filter(a => Date.parse(a.updatedAt) > t) : []
  }
  static async loadTWA() {
    i.canLoadTWA() && await i.load()
  }
  static isSamsung() {
    return Ot() === "Samsung Internet"
  }
  static nativeFormat(t) {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: t.price.currency
    }).format(+t.price.value)
  }
  static printPriceBySKU(t) {
    var s;
    const e = i.mapSKUs.get(t);
    if ((e == null ? void 0 : e.price) != null) return this.nativeFormat(e);
    const n = (e == null ? void 0 : e.price) ?? {
      value: ((s = J(t)) == null ? void 0 : s.price) * St / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
m(i, "POOLING_TIME", 10), m(i, "playBillingBlockedError"), m(i, "billing", !1), m(i, "service"), m(i, "mapSKUs", new Map), m(i, "referrer", []), m(i, "wait", new tt), m(i, "USER_CANCELLED_ERROR", "Payment app returned RESULT_CANCELED code. This is how payment apps can close their activity programmatically."), m(i, "PLAY_BILLING_NOT_AVAILABLE", [{
  printError: Jt(),
  name: "AbortError",
  message: "Invalid state."
}, {
  printError: ie(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported.'
}]), m(i, "getMapSKUs", dt(async () => {
  var s;
  i.twaGuard();
  const t = Object.values(Et.products).filter(o => "lookupKey" in o).map(o => o.lookupKey),
    e = await ((s = i.service) == null ? void 0 : s.getDetails(t).catch(o => i.setAsPlayBillingBlockedErrorIfNecessary(o)));
  return new Map(e == null ? void 0 : e.map(o => [o.itemId, o]))
})), m(i, "getService", dt(() => {
  var t, e;
  return (e = (t = i.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, X.Play).then(n => (i.billing = !0, n))
})), m(i, "onInit", async t => {
  i.referrer.push(document.referrer), h.preventNavigationInTWAIfInCheckout(t)
});
let B = i;

function jt() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function or() {
  const r = "last-unfocus",
    t = new AbortController;
  if (jt()) {
    queueMicrotask(async () => {
      await B.onInit(t)
    });
    const e = () => {
        const s = localStorage.getItem(r);
        if (s) {
          const o = parseInt(s, 10);
          Date.now() - o > 5 * ft.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const s = gt.map;
        if (s) {
          const o = s.getCenter(),
            a = s.getZoom();
          le(o, a)
        }
      };
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? e() : n()
    }, {
      signal: t.signal
    }), window.addEventListener("pageshow", e, {
      signal: t.signal
    }), window.addEventListener("pagehide", n, {
      signal: t.signal
    })
  }
  return () => {
    t.abort()
  }
}
export {
  h as T, B as a, le as b, ue as c, jt as d, rr as g, nr as i, sr as l, Jt as p, or as s, Ve as w
};