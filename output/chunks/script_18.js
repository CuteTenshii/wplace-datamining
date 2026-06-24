var It = Object.defineProperty;
var rt = r => {
  throw TypeError(r)
};
var kt = (r, t, e) => t in r ? It(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var m = (r, t, e) => kt(r, typeof t != "symbol" ? t + "" : t, e),
  V = (r, t, e) => t.has(r) || rt("Cannot " + e);
var c = (r, t, e) => (V(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  f = (r, t, e) => t.has(r) ? rt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  d = (r, t, e, n) => (V(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  v = (r, t, e) => (V(r, t, "access private method"), e);
import {
  T as gt,
  g as ft,
  t as Bt,
  a as H,
  q as J,
  u as Y,
  r as Tt,
  G as Ot,
  b as Et
} from "./D6vLbxsX.js";
import {
  e as nt,
  i as ot,
  h as st,
  bI as Z,
  aE as St,
  y as Nt,
  B as Lt
} from "./CxLQz1V2.js";
import {
  g as Ct
} from "./w2U8PlhT.js";
import {
  r as Dt
} from "./DPNm9WWT.js";
import {
  c as ht
} from "./CMG3kxXu.js";
import {
  g as yt
} from "./BhCkpOlh.js";
const _t = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
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
    return e === "en" ? _t() : e === "pt" ? Gt() : e === "ch" ? zt() : e === "de" ? Ut() : e === "es" ? xt() : e === "fr" ? Rt() : e === "it" ? Kt() : e === "jp" ? Ft() : e === "pl" ? Mt() : e === "ru" ? qt() : e === "uk" ? Vt() : Ht()
  },
  Yt = () => "Play Billing not supported.",
  $t = () => "Play Billing não suportado.",
  Wt = () => "不支持 Play Billing。",
  Zt = () => "Play Billing wird nicht unterstützt.",
  Qt = () => "Play Billing no es compatible.",
  Xt = () => "Play Billing non pris en charge.",
  te = () => "Play Billing non supportato.",
  ee = () => "Play Billing はサポートされていません。",
  re = () => "Play Billing nie jest obsługiwane.",
  ne = () => "Play Billing не поддерживается.",
  oe = () => "Play Billing не підтримується.",
  se = () => "Play Billing không được hỗ trợ.",
  $ = (r = {}, t = {}) => {
    const e = t.locale ?? yt();
    return e === "en" ? Yt() : e === "pt" ? $t() : e === "ch" ? Wt() : e === "de" ? Zt() : e === "es" ? Qt() : e === "fr" ? Xt() : e === "it" ? te() : e === "jp" ? ee() : e === "pl" ? re() : e === "ru" ? ne() : e === "uk" ? oe() : se()
  };

function ie(r) {
  return Math.floor(Math.random() * r)
}
const Q = 14.5;
async function tr() {
  const r = ue();
  if (r) return r;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((n, o) => navigator.geolocation.getCurrentPosition(s => n(s), s => o(s)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: Q
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...ae().pos,
    zoom: Q
  }
}

function ae() {
  const r = Object.entries(ce),
    t = ie(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const ce = {
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

function ue() {
  const r = localStorage.getItem(mt);
  if (!r) return;
  const t = JSON.parse(r);
  return t.zoom ?? (t.zoom = Q), t
}

function er(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}
var z, U;
class pe {
  constructor() {
    f(this, z, nt(-1));
    f(this, U, nt([]))
  }
  get idx() {
    return ot(c(this, z))
  }
  set idx(t) {
    st(c(this, z), t, !0)
  }
  get entries() {
    return ot(c(this, U))
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
const rr = new pe,
  it = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
    return this
  })();

function de(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, o = function(s) {
    const a = n ? n(s) : s;
    if (e.has(a)) return e.get(a);
    const u = r.call(this, s);
    return e.set(a, u), u
  };
  return o.cache = e, o
}

function ge() {}

function at(r) {
  return typeof it.Buffer < "u" && it.Buffer.isBuffer(r)
}

function ct(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function lt(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const fe = "[object RegExp]",
  he = "[object String]",
  ye = "[object Number]",
  me = "[object Boolean]",
  we = "[object Symbol]",
  be = "[object Date]",
  Pe = "[object Map]",
  ve = "[object Set]",
  Ae = "[object Array]",
  je = "[object Function]",
  Ie = "[object ArrayBuffer]",
  W = "[object Object]",
  ke = "[object Error]",
  Be = "[object DataView]",
  Te = "[object Uint8Array]",
  Oe = "[object Uint8ClampedArray]",
  Ee = "[object Uint16Array]",
  Se = "[object Uint32Array]",
  Ne = "[object BigUint64Array]",
  Le = "[object Int8Array]",
  Ce = "[object Int16Array]",
  De = "[object Int32Array]",
  _e = "[object BigInt64Array]",
  Ge = "[object Float32Array]",
  ze = "[object Float64Array]";

function ut(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function Ue(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function xe(r, t, e) {
  return C(r, t, void 0, void 0, void 0, void 0, e)
}

function C(r, t, e, n, o, s, a) {
  const u = a(r, t, e, n, o, s);
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
      return G(r, t, s, a)
  }
  return G(r, t, s, a)
}

function G(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let o = lt(r),
    s = lt(t);
  if (o === "[object Arguments]" && (o = W), s === "[object Arguments]" && (s = W), o !== s) return !1;
  switch (o) {
    case he:
      return r.toString() === t.toString();
    case ye:
      return Ue(r.valueOf(), t.valueOf());
    case me:
    case be:
    case we:
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
    switch (o) {
      case Pe:
        if (r.size !== t.size) return !1;
        for (const [l, g] of r.entries())
          if (!t.has(l) || !C(g, t.get(l), l, r, t, e, n)) return !1;
        return !0;
      case ve: {
        if (r.size !== t.size) return !1;
        const l = Array.from(r.values()),
          g = Array.from(t.values());
        for (let b = 0; b < l.length; b++) {
          const y = l[b],
            O = g.findIndex(q => C(y, q, void 0, r, t, e, n));
          if (O === -1) return !1;
          g.splice(O, 1)
        }
        return !0
      }
      case Ae:
      case Te:
      case Oe:
      case Ee:
      case Se:
      case Ne:
      case Le:
      case Ce:
      case De:
      case _e:
      case Ge:
      case ze:
        if (at(r) !== at(t) || r.length !== t.length) return !1;
        for (let l = 0; l < r.length; l++)
          if (!C(r[l], t[l], l, r, t, e, n)) return !1;
        return !0;
      case Ie:
        return r.byteLength !== t.byteLength ? !1 : G(new Uint8Array(r), new Uint8Array(t), e, n);
      case Be:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : G(new Uint8Array(r), new Uint8Array(t), e, n);
      case ke:
        return r.name === t.name && r.message === t.message;
      case W: {
        if (!(G(r.constructor, t.constructor, e, n) || ut(r) && ut(t))) return !1;
        const l = [...Object.keys(r), ...ct(r)],
          g = [...Object.keys(t), ...ct(t)];
        if (l.length !== g.length) return !1;
        for (let b = 0; b < l.length; b++) {
          const y = l[b],
            O = r[y];
          if (!Object.hasOwn(t, y)) return !1;
          const q = t[y];
          if (!C(O, q, y, r, t, e, n)) return !1
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

function Re(r, t) {
  return xe(r, t, ge)
}
const wt = typeof window < "u" ? window : void 0;

function Ke(r) {
  let t = r.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var S, x;
class Fe {
  constructor(t = {}) {
    f(this, S);
    f(this, x);
    const {
      window: e = wt,
      document: n = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (d(this, S, n), d(this, x, ht(o => {
      const s = Z(e, "focusin", o),
        a = Z(e, "focusout", o);
      return () => {
        s(), a()
      }
    })))
  }
  get current() {
    var t;
    return (t = c(this, x)) == null || t.call(this), c(this, S) ? Ke(c(this, S)) : null
  }
}
S = new WeakMap, x = new WeakMap;
new Fe;

function Me(r, t) {
  switch (r) {
    case "post":
      Nt(t);
      break;
    case "pre":
      St(t);
      break
  }
}

function bt(r, t, e, n = {}) {
  const {
    lazy: o = !1
  } = n;
  let s = !o,
    a = Array.isArray(r) ? [] : void 0;
  Me(t, () => {
    const u = Array.isArray(r) ? r.map(g => g()) : r();
    if (!s) {
      s = !0, a = u;
      return
    }
    const l = Lt(() => e(u, a));
    return a = u, l
  })
}

function qe(r, t, e) {
  bt(r, "post", t, e)
}

function Ve(r, t, e) {
  bt(r, "pre", t, e)
}
qe.pre = Ve;

function He(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function Pt(r, t, e, n, o, s) {
  if (r === null || typeof r != "object") return r;
  const a = Object.getPrototypeOf(r);
  if (a !== null && a !== Object.prototype && !Array.isArray(r)) return r;
  let u = e.get(r);
  return u || (u = new Proxy(r, {
    get: (l, g) => (n == null || n(), Pt(Reflect.get(l, g), t, e, n, o, s)),
    set: (l, g, b) => (o == null || o(), Reflect.set(l, g, b), s(t), !0)
  }), e.set(r, u)), u
}
var A, j, N, I, E, B, F, P, T, L, R, K, M, w, D, _, X, At;
class vt {
  constructor(t, e, n = {}) {
    f(this, w);
    f(this, A);
    f(this, j);
    f(this, N);
    f(this, I);
    f(this, E);
    f(this, B);
    f(this, F, new WeakMap);
    f(this, P);
    f(this, T);
    f(this, L);
    f(this, R);
    f(this, K);
    f(this, M, t => {
      var e;
      t.key !== c(this, j) || t.newValue === null || (d(this, A, v(this, w, D).call(this, t.newValue)), (e = c(this, B)) == null || e.call(this))
    });
    const {
      storage: o = "local",
      serializer: s = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: a = !0,
      connected: u = !0
    } = n, l = "window" in n ? n.window : wt;
    if (d(this, A, e), d(this, j, t), d(this, N, s), d(this, P, u), d(this, L, l), d(this, R, a), d(this, K, o), l === void 0) return;
    const g = He(o, l);
    d(this, I, g);
    const b = g.getItem(t);
    b !== null ? d(this, A, v(this, w, D).call(this, b)) : u && v(this, w, _).call(this, e), v(this, w, X).call(this)
  }
  get current() {
    var e, n, o, s;
    (e = c(this, E)) == null || e.call(this);
    let t;
    if (c(this, P)) {
      const a = (n = c(this, I)) == null ? void 0 : n.getItem(c(this, j));
      t = a ? v(this, w, D).call(this, a) : c(this, A)
    } else t = c(this, A);
    return Pt(t, t, c(this, F), (o = c(this, E)) == null ? void 0 : o.bind(this), (s = c(this, B)) == null ? void 0 : s.bind(this), v(this, w, _).bind(this))
  }
  set current(t) {
    var e;
    v(this, w, _).call(this, t), (e = c(this, B)) == null || e.call(this)
  }
  get connected() {
    return c(this, P)
  }
  disconnect() {
    var e, n;
    if (!c(this, P)) return;
    const t = (e = c(this, I)) == null ? void 0 : e.getItem(c(this, j));
    t && d(this, A, v(this, w, D).call(this, t)), d(this, P, !1), (n = c(this, I)) == null || n.removeItem(c(this, j)), v(this, w, At).call(this)
  }
  connect() {
    c(this, P) || (d(this, P, !0), v(this, w, _).call(this, c(this, A)), v(this, w, X).call(this))
  }
}
A = new WeakMap, j = new WeakMap, N = new WeakMap, I = new WeakMap, E = new WeakMap, B = new WeakMap, F = new WeakMap, P = new WeakMap, T = new WeakMap, L = new WeakMap, R = new WeakMap, K = new WeakMap, M = new WeakMap, w = new WeakSet, D = function(t) {
  try {
    return c(this, N).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${c(this,j)}"`, e);
    return
  }
}, _ = function(t) {
  var e;
  if (!c(this, P)) {
    d(this, A, t);
    return
  }
  try {
    t !== void 0 && ((e = c(this, I)) == null || e.setItem(c(this, j), c(this, N).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${c(this,j)}" to ${c(this,I)}`, n)
  }
}, X = function() {
  !c(this, L) || !c(this, P) || d(this, E, ht(t => (d(this, B, t), d(this, T, c(this, P) && c(this, R) && c(this, K) === "local" ? Z(c(this, L), "storage", c(this, M)) : void 0), () => {
    var e;
    (e = c(this, T)) == null || e.call(this), d(this, T, void 0), d(this, B, void 0)
  })))
}, At = function() {
  var t;
  (t = c(this, T)) == null || t.call(this), d(this, T, void 0), d(this, E, void 0)
};
class et extends Promise {
  constructor(e) {
    let n;
    super((a, u) => {
      n = {
        resolve: s("fulfilled", a),
        reject: s("rejected", u)
      }, e == null || e(n.resolve, n.reject)
    });
    m(this, "resolvers");
    m(this, "state", {
      status: "pending"
    });
    this.resolvers = n;
    const o = this;

    function s(a, u) {
      return function(...g) {
        return o.state.status === "pending" && (o.state = o.mountStateByStatus(a, g[0])), u(...g)
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
    return new et
  }
}
var tt = (r => (r.Play = "https://play.google.com/billing", r))(tt || {});

function pt(r) {
  return de(r)
}
const p = class p {
  constructor(t) {
    this.state = t
  }
  static get checkout() {
    var t, e;
    return ((t = p.checkoutState) == null ? void 0 : t.current) && new p((e = p.checkoutState) == null ? void 0 : e.current)
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
    return ((t = p.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = p.checkout) == null ? void 0 : e.startedAt) <= 3 * gt.day
  }
  static isRunning() {
    var t;
    return ((t = p.memoryCheckout) == null ? void 0 : t.type) === "running"
  }
  applyFinishIfNecessary(t) {
    this.startedAt > t.startedAt || p.isRunning() && p.onChangeCheckout({
      ...this.state,
      finishedAt: Date.now(),
      type: "finished",
      view: void 0,
      droplets: 0
    })
  }
  static start() {
    return p.onChangeCheckout({
      type: "running",
      startedAt: Date.now(),
      view: void 0,
      finishedAt: void 0
    })
  }
  static finish(t) {
    var e, n;
    return (n = (e = p.checkout) == null ? void 0 : e.applyFinishIfNecessary) == null ? void 0 : n.call(e, t)
  }
  static markViewed() {
    var e;
    const t = (e = p.checkout) == null ? void 0 : e.state;
    t && p.onChangeCheckout({
      startedAt: t == null ? void 0 : t.startedAt,
      finishedAt: Date.now(),
      droplets: t.type === "running" ? 0 : t.droplets,
      type: "finished",
      view: Date.now()
    })
  }
  static clear() {
    p.checkoutState.current = void 0
  }
  static onChangeCheckout(t) {
    return p.checkoutState.current = t, p.memoryCheckout = p.checkout, p.memoryCheckout
  }
  static preventNavigationInTWAIfInCheckout(t) {
    k.isTWA() && (p.addFocusListener(t), p.addNavigationListener(t))
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
      var o;
      (!document.hasFocus() && p.memoryCheckout || p.isRunning()) && (n.preventDefault(), (o = k.log) == null || o.call(k, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    return p.markViewed(), Ct(Dt("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    ft.pendingHistoryDialogOpen = !0
  }
};
m(p, "checkoutState", new vt("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), m(p, "memoryCheckout");
let h = p;

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
    const e = t.map(o => JSON.stringify(o));
    throw (n = i.error) == null || n.call(i, ...t), e.forEach(o => Bt.error(o)), new Error(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const n = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: tt.Play,
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
    const e = i.PLAY_BILLING_NOT_AVAILABLE.findIndex(o => Re(dt(t), dt(o)));
    return i.PLAY_BILLING_NOT_AVAILABLE[e]
  }
  static setAsPlayBillingBlockedErrorIfNecessary(t) {
    try {
      if (!t) return;
      const e = i.isPlayBillingBlockedError(t);
      if (e != null && e.notTwaContext) {
        i.forceNotTWA.current = !0;
        return
      }
      i.setAsPlayBillingBlocked(e)
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
      o = h.start(),
      s = await n.show().catch(y => i.setAsPlayBillingBlockedErrorIfNecessary(y)).finally(() => {
        var y;
        return (y = h.finish) == null ? void 0 : y.call(h, o)
      }),
      a = s == null ? void 0 : s.toJSON();
    let u = "unknown";
    return a.details.purchaseToken ? l(u) : l("fail", new Error("Play Billing returned no purchase token")), {
      setStatus: l,
      status: u,
      out: a,
      verify: g
    };
    async function l(y, O) {
      if (u = y, await (s == null ? void 0 : s.complete(y).catch(() => {})), O) throw O
    }
    async function g() {
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
      let o = 0,
        s = 0;
      for (const a of n) a.status === "fulfilled" ? o += a.value.droplets : s++;
      return o > 0 && await i.refresh(), {
        credited: o,
        pending: s
      }
    } catch {
      return t
    }
  }
  static async autoRecoverPendingPurchases() {
    var o;
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
    const n = (o = h.checkout) == null ? void 0 : o.state;
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
    return jt() && !this.forceNotTWA.current && !!this.getGlobal().getDigitalGoodsService
  }
  static canLoadTWA() {
    return this.isTWA()
  }
  static isTWALoaded() {
    return !!(Y.data && this.billing && this.service && !this.forceNotTWA.current)
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
        o = ((t = Object.groupBy(e, s => s.status).paid) == null ? void 0 : t.reduce((s, a) => s + a.droplets, 0)) ?? 0;
      if (o > 0) {
        await h.openCheckoutDialog(o);
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
    var o, s;
    const t = ((o = h.checkout) == null ? void 0 : o.state.view) ?? ((s = h.checkout) == null ? void 0 : s.state.startedAt);
    return t ? (await H.listPlayPurchaseHistory()).purchases.sort((a, u) => Date.parse(u.updatedAt) - Date.parse(a.updatedAt)).filter(a => Date.parse(a.updatedAt) > t) : []
  }
  static async loadTWA() {
    i.canLoadTWA() && await i.load()
  }
  static isSamsung() {
    return Tt() === "Samsung Internet"
  }
  static nativeFormat(t) {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: t.price.currency
    }).format(+t.price.value)
  }
  static printPriceBySKU(t) {
    var o;
    const e = i.mapSKUs.get(t);
    if ((e == null ? void 0 : e.price) != null) return this.nativeFormat(e);
    const n = (e == null ? void 0 : e.price) ?? {
      value: ((o = J(t)) == null ? void 0 : o.price) * Ot / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
m(i, "POOLING_TIME", 10), m(i, "playBillingBlockedError"), m(i, "forceNotTWA", new vt("twa:force_not_twa", !1, {
  syncTabs: !1,
  storage: "session"
})), m(i, "billing", !1), m(i, "service"), m(i, "mapSKUs", new Map), m(i, "referrer", []), m(i, "wait", new et), m(i, "USER_CANCELLED_ERROR", "Payment app returned RESULT_CANCELED code. This is how payment apps can close their activity programmatically."), m(i, "PLAY_BILLING_NOT_AVAILABLE", [{
  printError: Jt(),
  name: "AbortError",
  message: "Invalid state."
}, {
  printError: $(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported.'
}, {
  notTwaContext: !0,
  printError: $(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.'
}, {
  notTwaContext: !0,
  printError: $(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.'
}]), m(i, "getMapSKUs", pt(async () => {
  var o;
  i.twaGuard();
  const t = Object.values(Et.products).filter(s => "lookupKey" in s).map(s => s.lookupKey),
    e = await ((o = i.service) == null ? void 0 : o.getDetails(t).catch(s => i.setAsPlayBillingBlockedErrorIfNecessary(s)));
  return new Map(e == null ? void 0 : e.map(s => [s.itemId, s]))
})), m(i, "getService", pt(() => {
  var t, e;
  return (e = (t = i.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, tt.Play).then(n => (i.billing = !0, n))
})), m(i, "onInit", async t => {
  i.referrer.push(document.referrer), h.preventNavigationInTWAIfInCheckout(t)
});
let k = i;

function jt() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function nr() {
  const r = "last-unfocus",
    t = new AbortController;
  if (jt()) {
    queueMicrotask(async () => {
      await k.onInit(t)
    });
    const e = () => {
        const o = localStorage.getItem(r);
        if (o) {
          const s = parseInt(o, 10);
          Date.now() - s > 5 * gt.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const o = ft.map;
        if (o) {
          const s = o.getCenter(),
            a = o.getZoom();
          le(s, a)
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
  h as T, k as a, le as b, ce as c, jt as d, tr as g, er as i, rr as l, Jt as p, nr as s, qe as w
};