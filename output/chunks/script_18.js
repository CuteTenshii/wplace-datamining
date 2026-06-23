var jt = Object.defineProperty;
var et = r => {
  throw TypeError(r)
};
var At = (r, t, e) => t in r ? jt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var m = (r, t, e) => At(r, typeof t != "symbol" ? t + "" : t, e),
  V = (r, t, e) => t.has(r) || et("Cannot " + e);
var c = (r, t, e) => (V(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  g = (r, t, e) => t.has(r) ? et("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  p = (r, t, e, n) => (V(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  v = (r, t, e) => (V(r, t, "access private method"), e);
import {
  T as pt,
  g as ft,
  t as It,
  a as H,
  q as J,
  u as Y,
  r as kt,
  G as Bt,
  b as Ot
} from "./zqgC2Q_d.js";
import {
  e as rt,
  i as nt,
  h as st,
  bI as Z,
  aE as St,
  y as Et,
  B as Lt
} from "./CxLQz1V2.js";
import {
  g as Dt
} from "./CB1HunzX.js";
import {
  r as Nt
} from "./CXHQVBbW.js";
import {
  c as gt
} from "./CMG3kxXu.js";
import {
  g as ht
} from "./BhCkpOlh.js";
const _t = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  Ct = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  Gt = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  Tt = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  zt = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Ut = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  xt = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Rt = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Kt = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Ft = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Mt = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  qt = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Vt = (r = {}, t = {}) => {
    const e = t.locale ?? ht();
    return e === "en" ? _t() : e === "pt" ? Ct() : e === "ch" ? Gt() : e === "de" ? Tt() : e === "es" ? zt() : e === "fr" ? Ut() : e === "it" ? xt() : e === "jp" ? Rt() : e === "pl" ? Kt() : e === "ru" ? Ft() : e === "uk" ? Mt() : qt()
  },
  Ht = () => "Play Billing not supported.",
  Jt = () => "Play Billing não suportado.",
  Yt = () => "不支持 Play Billing。",
  $t = () => "Play Billing wird nicht unterstützt.",
  Zt = () => "Play Billing no es compatible.",
  Wt = () => "Play Billing non pris en charge.",
  Qt = () => "Play Billing non supportato.",
  Xt = () => "Play Billing はサポートされていません。",
  te = () => "Play Billing nie jest obsługiwane.",
  ee = () => "Play Billing не поддерживается.",
  re = () => "Play Billing не підтримується.",
  ne = () => "Play Billing không được hỗ trợ.",
  se = (r = {}, t = {}) => {
    const e = t.locale ?? ht();
    return e === "en" ? Ht() : e === "pt" ? Jt() : e === "ch" ? Yt() : e === "de" ? $t() : e === "es" ? Zt() : e === "fr" ? Wt() : e === "it" ? Qt() : e === "jp" ? Xt() : e === "pl" ? te() : e === "ru" ? ee() : e === "uk" ? re() : ne()
  };

function oe(r) {
  return Math.floor(Math.random() * r)
}
const W = 14.5;
async function tr() {
  const r = le();
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
    ...ie().pos,
    zoom: W
  }
}

function ie() {
  const r = Object.entries(ae),
    t = oe(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const ae = {
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
  yt = "location";

function ce(r, t) {
  localStorage.setItem(yt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function le() {
  const r = localStorage.getItem(yt);
  if (!r) return;
  const t = JSON.parse(r);
  return t.zoom ?? (t.zoom = W), t
}

function er(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}
var z, U;
class ue {
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
const rr = new ue,
  ot = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
    return this
  })();

function de(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, s = function(o) {
    const a = n ? n(o) : o;
    if (e.has(a)) return e.get(a);
    const u = r.call(this, o);
    return e.set(a, u), u
  };
  return s.cache = e, s
}

function pe() {}

function it(r) {
  return typeof ot.Buffer < "u" && ot.Buffer.isBuffer(r)
}

function at(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function ct(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const fe = "[object RegExp]",
  ge = "[object String]",
  he = "[object Number]",
  ye = "[object Boolean]",
  me = "[object Symbol]",
  we = "[object Date]",
  be = "[object Map]",
  Pe = "[object Set]",
  ve = "[object Array]",
  je = "[object Function]",
  Ae = "[object ArrayBuffer]",
  $ = "[object Object]",
  Ie = "[object Error]",
  ke = "[object DataView]",
  Be = "[object Uint8Array]",
  Oe = "[object Uint8ClampedArray]",
  Se = "[object Uint16Array]",
  Ee = "[object Uint32Array]",
  Le = "[object BigUint64Array]",
  De = "[object Int8Array]",
  Ne = "[object Int16Array]",
  _e = "[object Int32Array]",
  Ce = "[object BigInt64Array]",
  Ge = "[object Float32Array]",
  Te = "[object Float64Array]";

function lt(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function ze(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Ue(r, t, e) {
  return _(r, t, void 0, void 0, void 0, void 0, e)
}

function _(r, t, e, n, s, o, a) {
  const u = a(r, t, e, n, s, o);
  if (u !== void 0) return u;
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
      return T(r, t, o, a)
  }
  return T(r, t, o, a)
}

function T(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let s = ct(r),
    o = ct(t);
  if (s === "[object Arguments]" && (s = $), o === "[object Arguments]" && (o = $), s !== o) return !1;
  switch (s) {
    case ge:
      return r.toString() === t.toString();
    case he:
      return ze(r.valueOf(), t.valueOf());
    case ye:
    case we:
    case me:
      return Object.is(r.valueOf(), t.valueOf());
    case fe:
      return r.source === t.source && r.flags === t.flags;
    case je:
      return r === t
  }
  e = e ?? new Map;
  const a = e.get(r),
    u = e.get(t);
  if (a != null && u != null) return a === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (s) {
      case be:
        if (r.size !== t.size) return !1;
        for (const [l, f] of r.entries())
          if (!t.has(l) || !_(f, t.get(l), l, r, t, e, n)) return !1;
        return !0;
      case Pe: {
        if (r.size !== t.size) return !1;
        const l = Array.from(r.values()),
          f = Array.from(t.values());
        for (let b = 0; b < l.length; b++) {
          const y = l[b],
            S = f.findIndex(q => _(y, q, void 0, r, t, e, n));
          if (S === -1) return !1;
          f.splice(S, 1)
        }
        return !0
      }
      case ve:
      case Be:
      case Oe:
      case Se:
      case Ee:
      case Le:
      case De:
      case Ne:
      case _e:
      case Ce:
      case Ge:
      case Te:
        if (it(r) !== it(t) || r.length !== t.length) return !1;
        for (let l = 0; l < r.length; l++)
          if (!_(r[l], t[l], l, r, t, e, n)) return !1;
        return !0;
      case Ae:
        return r.byteLength !== t.byteLength ? !1 : T(new Uint8Array(r), new Uint8Array(t), e, n);
      case ke:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : T(new Uint8Array(r), new Uint8Array(t), e, n);
      case Ie:
        return r.name === t.name && r.message === t.message;
      case $: {
        if (!(T(r.constructor, t.constructor, e, n) || lt(r) && lt(t))) return !1;
        const l = [...Object.keys(r), ...at(r)],
          f = [...Object.keys(t), ...at(t)];
        if (l.length !== f.length) return !1;
        for (let b = 0; b < l.length; b++) {
          const y = l[b],
            S = r[y];
          if (!Object.hasOwn(t, y)) return !1;
          const q = t[y];
          if (!_(S, q, y, r, t, e, n)) return !1
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

function xe(r, t) {
  return Ue(r, t, pe)
}
const mt = typeof window < "u" ? window : void 0;

function Re(r) {
  let t = r.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var L, x;
class Ke {
  constructor(t = {}) {
    g(this, L);
    g(this, x);
    const {
      window: e = mt,
      document: n = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (p(this, L, n), p(this, x, gt(s => {
      const o = Z(e, "focusin", s),
        a = Z(e, "focusout", s);
      return () => {
        o(), a()
      }
    })))
  }
  get current() {
    var t;
    return (t = c(this, x)) == null || t.call(this), c(this, L) ? Re(c(this, L)) : null
  }
}
L = new WeakMap, x = new WeakMap;
new Ke;

function Fe(r, t) {
  switch (r) {
    case "post":
      Et(t);
      break;
    case "pre":
      St(t);
      break
  }
}

function wt(r, t, e, n = {}) {
  const {
    lazy: s = !1
  } = n;
  let o = !s,
    a = Array.isArray(r) ? [] : void 0;
  Fe(t, () => {
    const u = Array.isArray(r) ? r.map(f => f()) : r();
    if (!o) {
      o = !0, a = u;
      return
    }
    const l = Lt(() => e(u, a));
    return a = u, l
  })
}

function Me(r, t, e) {
  wt(r, "post", t, e)
}

function qe(r, t, e) {
  wt(r, "pre", t, e)
}
Me.pre = qe;

function Ve(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function bt(r, t, e, n, s, o) {
  if (r === null || typeof r != "object") return r;
  const a = Object.getPrototypeOf(r);
  if (a !== null && a !== Object.prototype && !Array.isArray(r)) return r;
  let u = e.get(r);
  return u || (u = new Proxy(r, {
    get: (l, f) => (n == null || n(), bt(Reflect.get(l, f), t, e, n, s, o)),
    set: (l, f, b) => (s == null || s(), Reflect.set(l, f, b), o(t), !0)
  }), e.set(r, u)), u
}
var j, A, D, I, E, B, F, P, O, N, R, K, M, w, C, G, Q, Pt;
class He {
  constructor(t, e, n = {}) {
    g(this, w);
    g(this, j);
    g(this, A);
    g(this, D);
    g(this, I);
    g(this, E);
    g(this, B);
    g(this, F, new WeakMap);
    g(this, P);
    g(this, O);
    g(this, N);
    g(this, R);
    g(this, K);
    g(this, M, t => {
      var e;
      t.key !== c(this, A) || t.newValue === null || (p(this, j, v(this, w, C).call(this, t.newValue)), (e = c(this, B)) == null || e.call(this))
    });
    const {
      storage: s = "local",
      serializer: o = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: a = !0,
      connected: u = !0
    } = n, l = "window" in n ? n.window : mt;
    if (p(this, j, e), p(this, A, t), p(this, D, o), p(this, P, u), p(this, N, l), p(this, R, a), p(this, K, s), l === void 0) return;
    const f = Ve(s, l);
    p(this, I, f);
    const b = f.getItem(t);
    b !== null ? p(this, j, v(this, w, C).call(this, b)) : u && v(this, w, G).call(this, e), v(this, w, Q).call(this)
  }
  get current() {
    var e, n, s, o;
    (e = c(this, E)) == null || e.call(this);
    let t;
    if (c(this, P)) {
      const a = (n = c(this, I)) == null ? void 0 : n.getItem(c(this, A));
      t = a ? v(this, w, C).call(this, a) : c(this, j)
    } else t = c(this, j);
    return bt(t, t, c(this, F), (s = c(this, E)) == null ? void 0 : s.bind(this), (o = c(this, B)) == null ? void 0 : o.bind(this), v(this, w, G).bind(this))
  }
  set current(t) {
    var e;
    v(this, w, G).call(this, t), (e = c(this, B)) == null || e.call(this)
  }
  get connected() {
    return c(this, P)
  }
  disconnect() {
    var e, n;
    if (!c(this, P)) return;
    const t = (e = c(this, I)) == null ? void 0 : e.getItem(c(this, A));
    t && p(this, j, v(this, w, C).call(this, t)), p(this, P, !1), (n = c(this, I)) == null || n.removeItem(c(this, A)), v(this, w, Pt).call(this)
  }
  connect() {
    c(this, P) || (p(this, P, !0), v(this, w, G).call(this, c(this, j)), v(this, w, Q).call(this))
  }
}
j = new WeakMap, A = new WeakMap, D = new WeakMap, I = new WeakMap, E = new WeakMap, B = new WeakMap, F = new WeakMap, P = new WeakMap, O = new WeakMap, N = new WeakMap, R = new WeakMap, K = new WeakMap, M = new WeakMap, w = new WeakSet, C = function(t) {
  try {
    return c(this, D).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${c(this,A)}"`, e);
    return
  }
}, G = function(t) {
  var e;
  if (!c(this, P)) {
    p(this, j, t);
    return
  }
  try {
    t !== void 0 && ((e = c(this, I)) == null || e.setItem(c(this, A), c(this, D).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${c(this,A)}" to ${c(this,I)}`, n)
  }
}, Q = function() {
  !c(this, N) || !c(this, P) || p(this, E, gt(t => (p(this, B, t), p(this, O, c(this, P) && c(this, R) && c(this, K) === "local" ? Z(c(this, N), "storage", c(this, M)) : void 0), () => {
    var e;
    (e = c(this, O)) == null || e.call(this), p(this, O, void 0), p(this, B, void 0)
  })))
}, Pt = function() {
  var t;
  (t = c(this, O)) == null || t.call(this), p(this, O, void 0), p(this, E, void 0)
};
class tt extends Promise {
  constructor(e) {
    let n;
    super((a, u) => {
      n = {
        resolve: o("fulfilled", a),
        reject: o("rejected", u)
      }, e == null || e(n.resolve, n.reject)
    });
    m(this, "resolvers");
    m(this, "state", {
      status: "pending"
    });
    this.resolvers = n;
    const s = this;

    function o(a, u) {
      return function(...f) {
        return s.state.status === "pending" && (s.state = s.mountStateByStatus(a, f[0])), u(...f)
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

function ut(r) {
  return de(r)
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
    return ((t = d.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = d.checkout) == null ? void 0 : e.startedAt) <= 3 * pt.day
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
    k.isTWA() && (d.addFocusListener(t), d.addNavigationListener(t))
  }
  static addFocusListener(t) {
    window.addEventListener("focus", () => {
      k.recover()
    }, {
      signal: t.signal
    })
  }
  static addNavigationListener(t) {
    const e = window.navigation;
    e && e.addEventListener("navigate", n => {
      var s;
      (!document.hasFocus() && d.memoryCheckout || d.isRunning()) && (n.preventDefault(), (s = k.log) == null || s.call(k, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    return d.markViewed(), Dt(Nt("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    ft.pendingHistoryDialogOpen = !0
  }
};
m(d, "checkoutState", new He("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), m(d, "memoryCheckout");
let h = d;

function dt(r) {
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
    throw (n = i.error) == null || n.call(i, ...t), e.forEach(s => It.error(s)), new Error(t.length === 1 ? e[0] : e.join(`
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
    const e = i.PLAY_BILLING_NOT_AVAILABLE.findIndex(s => xe(dt(t), dt(s)));
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
    let u = "unknown";
    return a.details.purchaseToken ? l(u) : l("fail", new Error("Play Billing returned no purchase token")), {
      setStatus: l,
      status: u,
      out: a,
      verify: f
    };
    async function l(y, S) {
      if (u = y, await (o == null ? void 0 : o.complete(y).catch(() => {})), S) throw S
    }
    async function f() {
      try {
        const {
          droplets: y
        } = await i.verifyBySKU({
          sku: t,
          token: a.details.purchaseToken
        });
        return await l("success"), await i.refresh(), h.openCheckoutDialog(y)
      } catch (y) {
        await l("fail", y)
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
    return vt() && !!this.getGlobal().getDigitalGoodsService
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
    return t ? (await H.listPlayPurchaseHistory()).purchases.sort((a, u) => Date.parse(u.updatedAt) - Date.parse(a.updatedAt)).filter(a => Date.parse(a.updatedAt) > t) : []
  }
  static async loadTWA() {
    i.canLoadTWA() && await i.load()
  }
  static isSamsung() {
    return kt() === "Samsung Internet"
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
      value: ((s = J(t)) == null ? void 0 : s.price) * Bt / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
m(i, "POOLING_TIME", 10), m(i, "playBillingBlockedError"), m(i, "billing", !1), m(i, "service"), m(i, "mapSKUs", new Map), m(i, "referrer", []), m(i, "wait", new tt), m(i, "USER_CANCELLED_ERROR", "Payment app returned RESULT_CANCELED code. This is how payment apps can close their activity programmatically."), m(i, "PLAY_BILLING_NOT_AVAILABLE", [{
  printError: Vt(),
  name: "AbortError",
  message: "Invalid state."
}, {
  printError: se(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported.'
}]), m(i, "getMapSKUs", ut(async () => {
  var s;
  i.twaGuard();
  const t = Object.values(Ot.products).filter(o => "lookupKey" in o).map(o => o.lookupKey),
    e = await ((s = i.service) == null ? void 0 : s.getDetails(t).catch(o => i.setAsPlayBillingBlockedErrorIfNecessary(o)));
  return new Map(e == null ? void 0 : e.map(o => [o.itemId, o]))
})), m(i, "getService", ut(() => {
  var t, e;
  return (e = (t = i.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, X.Play).then(n => (i.billing = !0, n))
})), m(i, "onInit", async t => {
  i.referrer.push(document.referrer), h.preventNavigationInTWAIfInCheckout(t)
});
let k = i;

function vt() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function nr() {
  const r = "last-unfocus",
    t = new AbortController;
  if (vt()) {
    queueMicrotask(async () => {
      await k.onInit(t)
    });
    const e = () => {
        const s = localStorage.getItem(r);
        if (s) {
          const o = parseInt(s, 10);
          Date.now() - o > 5 * pt.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const s = ft.map;
        if (s) {
          const o = s.getCenter(),
            a = s.getZoom();
          ce(o, a)
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
  h as T, k as a, ce as b, ae as c, vt as d, tr as g, er as i, rr as l, Vt as p, nr as s, Me as w
};