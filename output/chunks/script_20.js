var Nt = Object.defineProperty;
var it = r => {
  throw TypeError(r)
};
var Tt = (r, t, e) => t in r ? Nt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var h = (r, t, e) => Tt(r, typeof t != "symbol" ? t + "" : t, e),
  X = (r, t, e) => t.has(r) || it("Cannot " + e);
var c = (r, t, e) => (X(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  f = (r, t, e) => t.has(r) ? it("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  y = (r, t, e, n) => (X(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  b = (r, t, e) => (X(r, t, "access private method"), e);
import {
  T as Pt,
  g as bt,
  t as Et,
  W as D,
  b as Q,
  F as tt,
  u as Y,
  G as Bt,
  H as Gt,
  d as Ct
} from "./DTIeP7CF.js";
import {
  e as st,
  i as ct,
  h as ut,
  bL as rt,
  aF as Dt,
  y as Lt,
  B as Rt
} from "./sZguypfn.js";
import {
  g as zt
} from "./Ci5ic0QO.js";
import {
  r as Ut
} from "./Bl7xwM4Y.js";
import {
  c as vt
} from "./jdzncLHG.js";
import {
  d as xt
} from "./CftFOTTa.js";
import {
  g as q
} from "./BhCkpOlh.js";
import "./BzoQacgb.js";
const Ft = () => "Download WPlace from the Google Play Store.",
  Mt = () => "Baixe o WPlace na Google Play Store.",
  Wt = () => "请从 Google Play 商店下载 WPlace。",
  Kt = () => "Lade WPlace aus dem Google Play Store herunter.",
  Ht = () => "Descarga WPlace desde Google Play Store.",
  qt = () => "Téléchargez WPlace depuis le Google Play Store.",
  Yt = () => "Scarica WPlace dal Google Play Store.",
  Vt = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  $t = () => "Pobierz WPlace ze Sklepu Google Play.",
  Jt = () => "Скачайте WPlace из Google Play Store.",
  Zt = () => "Завантажте WPlace з Google Play Store.",
  Xt = () => "Hãy tải WPlace từ Google Play Store.",
  Qt = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? Ft() : e === "pt" ? Mt() : e === "ch" ? Wt() : e === "de" ? Kt() : e === "es" ? Ht() : e === "fr" ? qt() : e === "it" ? Yt() : e === "jp" ? Vt() : e === "pl" ? $t() : e === "ru" ? Jt() : e === "uk" ? Zt() : Xt()
  },
  te = () => "We couldn't find your account. Please try again later.",
  ee = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  re = () => "找不到你的账号，请稍后重试。",
  ne = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  oe = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  ae = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  ie = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  se = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  ce = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  ue = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  le = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  pe = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  lt = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? te() : e === "pt" ? ee() : e === "ch" ? re() : e === "de" ? ne() : e === "es" ? oe() : e === "fr" ? ae() : e === "it" ? ie() : e === "jp" ? se() : e === "pl" ? ce() : e === "ru" ? ue() : e === "uk" ? le() : pe()
  },
  de = () => "Reload the page and try again.",
  ye = () => "Recarregue a página e tente novamente.",
  fe = () => "请刷新页面后重试。",
  ge = () => "Lade die Seite neu und versuche es erneut.",
  he = () => "Recarga la página e inténtalo de nuevo.",
  me = () => "Rechargez la page et réessayez.",
  we = () => "Ricarica la pagina e riprova.",
  _e = () => "ページを再読み込みして、もう一度お試しください。",
  Pe = () => "Odśwież stronę i spróbuj ponownie.",
  be = () => "Перезагрузите страницу и попробуйте снова.",
  ve = () => "Перезавантажте сторінку та спробуйте ще раз.",
  ke = () => "Hãy tải lại trang và thử lại.",
  Ae = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? de() : e === "pt" ? ye() : e === "ch" ? fe() : e === "de" ? ge() : e === "es" ? he() : e === "fr" ? me() : e === "it" ? we() : e === "jp" ? _e() : e === "pl" ? Pe() : e === "ru" ? be() : e === "uk" ? ve() : ke()
  },
  je = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  Ie = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  Se = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  Oe = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  Ne = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Te = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Ee = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Be = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Ge = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Ce = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  De = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Le = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Re = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? je() : e === "pt" ? Ie() : e === "ch" ? Se() : e === "de" ? Oe() : e === "es" ? Ne() : e === "fr" ? Te() : e === "it" ? Ee() : e === "jp" ? Be() : e === "pl" ? Ge() : e === "ru" ? Ce() : e === "uk" ? De() : Le()
  },
  ze = () => "Play Billing not supported.",
  Ue = () => "Play Billing não suportado.",
  xe = () => "不支持 Play Billing。",
  Fe = () => "Play Billing wird nicht unterstützt.",
  Me = () => "Play Billing no es compatible.",
  We = () => "Play Billing non pris en charge.",
  Ke = () => "Play Billing non supportato.",
  He = () => "Play Billing はサポートされていません。",
  qe = () => "Play Billing nie jest obsługiwane.",
  Ye = () => "Play Billing не поддерживается.",
  Ve = () => "Play Billing не підтримується.",
  $e = () => "Play Billing không được hỗ trợ.",
  pt = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? ze() : e === "pt" ? Ue() : e === "ch" ? xe() : e === "de" ? Fe() : e === "es" ? Me() : e === "fr" ? We() : e === "it" ? Ke() : e === "jp" ? He() : e === "pl" ? qe() : e === "ru" ? Ye() : e === "uk" ? Ve() : $e()
  };

function Je(r) {
  return Math.floor(Math.random() * r)
}
const nt = 14.5,
  Ze = 0,
  Xe = 24;
async function tn() {
  const r = rr();
  if (r) return r;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((n, o) => navigator.geolocation.getCurrentPosition(i => n(i), i => o(i)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: nt
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...Qe().pos,
    zoom: nt
  }
}

function Qe() {
  const r = Object.entries(tr),
    t = Je(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const tr = {
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
  kt = "location";

function er(r, t) {
  localStorage.setItem(kt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function rr() {
  const r = localStorage.getItem(kt);
  if (!r) return;
  let t;
  try {
    t = JSON.parse(r)
  } catch {
    return
  }
  if (!t || typeof t != "object") return;
  const {
    lat: e,
    lng: n,
    zoom: o
  } = t;
  if (!(typeof e != "number" || typeof n != "number" || !nr({
      lat: e,
      lng: n
    }))) return {
    lat: e,
    lng: n,
    zoom: typeof o == "number" && or(o) ? o : nt
  }
}

function nr(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}

function or(r) {
  return Number.isFinite(r) && r >= Ze && r <= Xe
}
var F, M;
class ar {
  constructor() {
    f(this, F, st(-1));
    f(this, M, st([]))
  }
  get idx() {
    return ct(c(this, F))
  }
  set idx(t) {
    ut(c(this, F), t, !0)
  }
  get entries() {
    return ct(c(this, M))
  }
  set entries(t) {
    ut(c(this, M), t)
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
F = new WeakMap, M = new WeakMap;
const en = new ar;

function ir(r, t) {
  const e = {};
  for (let n = 0; n < r.length; n++) {
    const o = r[n],
      i = t(o, n, r);
    Object.hasOwn(e, i) || (e[i] = []), e[i].push(o)
  }
  return e
}
const dt = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
  return this
})();

function sr(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, o = function(i) {
    const s = n ? n(i) : i;
    if (e.has(s)) return e.get(s);
    const u = r.call(this, i);
    return e.set(s, u), u
  };
  return o.cache = e, o
}

function cr() {}

function yt(r) {
  return typeof dt.Buffer < "u" && dt.Buffer.isBuffer(r)
}

function ft(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function gt(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const ur = "[object RegExp]",
  lr = "[object String]",
  pr = "[object Number]",
  dr = "[object Boolean]",
  yr = "[object Symbol]",
  fr = "[object Date]",
  gr = "[object Map]",
  hr = "[object Set]",
  mr = "[object Array]",
  wr = "[object Function]",
  _r = "[object ArrayBuffer]",
  et = "[object Object]",
  Pr = "[object Error]",
  br = "[object DataView]",
  vr = "[object Uint8Array]",
  kr = "[object Uint8ClampedArray]",
  Ar = "[object Uint16Array]",
  jr = "[object Uint32Array]",
  Ir = "[object BigUint64Array]",
  Sr = "[object Int8Array]",
  Or = "[object Int16Array]",
  Nr = "[object Int32Array]",
  Tr = "[object BigInt64Array]",
  Er = "[object Float32Array]",
  Br = "[object Float64Array]";

function ht(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function Gr(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Cr(r, t, e) {
  return L(r, t, void 0, void 0, void 0, void 0, e)
}

function L(r, t, e, n, o, i, s) {
  const u = s(r, t, e, n, o, i);
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
      return U(r, t, i, s)
  }
  return U(r, t, i, s)
}

function U(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let o = gt(r),
    i = gt(t);
  if (o === "[object Arguments]" && (o = et), i === "[object Arguments]" && (i = et), o !== i) return !1;
  switch (o) {
    case lr:
      return r.toString() === t.toString();
    case pr:
      return Gr(r.valueOf(), t.valueOf());
    case dr:
    case fr:
    case yr:
      return Object.is(r.valueOf(), t.valueOf());
    case ur:
      return r.source === t.source && r.flags === t.flags;
    case wr:
      return r === t
  }
  e = e ?? new Map;
  const s = e.get(r),
    u = e.get(t);
  if (s != null && u != null) return s === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (o) {
      case gr:
        if (r.size !== t.size) return !1;
        for (const [l, d] of r.entries())
          if (!t.has(l) || !L(d, t.get(l), l, r, t, e, n)) return !1;
        return !0;
      case hr: {
        if (r.size !== t.size) return !1;
        const l = Array.from(r.values()),
          d = Array.from(t.values());
        for (let w = 0; w < l.length; w++) {
          const A = l[w],
            _ = d.findIndex(j => L(A, j, void 0, r, t, e, n));
          if (_ === -1) return !1;
          d.splice(_, 1)
        }
        return !0
      }
      case mr:
      case vr:
      case kr:
      case Ar:
      case jr:
      case Ir:
      case Sr:
      case Or:
      case Nr:
      case Tr:
      case Er:
      case Br:
        if (yt(r) !== yt(t) || r.length !== t.length) return !1;
        for (let l = 0; l < r.length; l++)
          if (!L(r[l], t[l], l, r, t, e, n)) return !1;
        return !0;
      case _r:
        return r.byteLength !== t.byteLength ? !1 : U(new Uint8Array(r), new Uint8Array(t), e, n);
      case br:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : U(new Uint8Array(r), new Uint8Array(t), e, n);
      case Pr:
        return r.name === t.name && r.message === t.message;
      case et: {
        if (!(U(r.constructor, t.constructor, e, n) || ht(r) && ht(t))) return !1;
        const l = [...Object.keys(r), ...ft(r)],
          d = [...Object.keys(t), ...ft(t)];
        if (l.length !== d.length) return !1;
        for (let w = 0; w < l.length; w++) {
          const A = l[w],
            _ = r[A];
          if (!Object.hasOwn(t, A)) return !1;
          const j = t[A];
          if (!L(_, j, A, r, t, e, n)) return !1
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

function Dr(r, t) {
  return Cr(r, t, cr)
}
const At = typeof window < "u" ? window : void 0;

function Lr(r) {
  let t = r.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var B, W;
class Rr {
  constructor(t = {}) {
    f(this, B);
    f(this, W);
    const {
      window: e = At,
      document: n = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (y(this, B, n), y(this, W, vt(o => {
      const i = rt(e, "focusin", o),
        s = rt(e, "focusout", o);
      return () => {
        i(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = c(this, W)) == null || t.call(this), c(this, B) ? Lr(c(this, B)) : null
  }
}
B = new WeakMap, W = new WeakMap;
new Rr;

function zr(r, t) {
  switch (r) {
    case "post":
      Lt(t);
      break;
    case "pre":
      Dt(t);
      break
  }
}

function jt(r, t, e, n = {}) {
  const {
    lazy: o = !1
  } = n;
  let i = !o,
    s = Array.isArray(r) ? [] : void 0;
  zr(t, () => {
    const u = Array.isArray(r) ? r.map(d => d()) : r();
    if (!i) {
      i = !0, s = u;
      return
    }
    const l = Rt(() => e(u, s));
    return s = u, l
  })
}

function Ur(r, t, e) {
  jt(r, "post", t, e)
}

function xr(r, t, e) {
  jt(r, "pre", t, e)
}
Ur.pre = xr;

function Fr(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function It(r, t, e, n, o, i) {
  if (r === null || typeof r != "object") return r;
  const s = Object.getPrototypeOf(r);
  if (s !== null && s !== Object.prototype && !Array.isArray(r)) return r;
  let u = e.get(r);
  return u || (u = new Proxy(r, {
    get: (l, d) => (n == null || n(), It(Reflect.get(l, d), t, e, n, o, i)),
    set: (l, d, w) => (o == null || o(), Reflect.set(l, d, w), i(t), !0)
  }), e.set(r, u)), u
}
var v, k, G, I, E, O, V, P, N, C, K, H, $, m, R, z, ot, Ot;
class St {
  constructor(t, e, n = {}) {
    f(this, m);
    f(this, v);
    f(this, k);
    f(this, G);
    f(this, I);
    f(this, E);
    f(this, O);
    f(this, V, new WeakMap);
    f(this, P);
    f(this, N);
    f(this, C);
    f(this, K);
    f(this, H);
    f(this, $, t => {
      var e;
      t.key !== c(this, k) || t.newValue === null || (y(this, v, b(this, m, R).call(this, t.newValue)), (e = c(this, O)) == null || e.call(this))
    });
    const {
      storage: o = "local",
      serializer: i = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: s = !0,
      connected: u = !0
    } = n, l = "window" in n ? n.window : At;
    if (y(this, v, e), y(this, k, t), y(this, G, i), y(this, P, u), y(this, C, l), y(this, K, s), y(this, H, o), l === void 0) return;
    const d = Fr(o, l);
    y(this, I, d);
    const w = d.getItem(t);
    w !== null ? y(this, v, b(this, m, R).call(this, w)) : u && b(this, m, z).call(this, e), b(this, m, ot).call(this)
  }
  get current() {
    var e, n, o, i;
    (e = c(this, E)) == null || e.call(this);
    let t;
    if (c(this, P)) {
      const s = (n = c(this, I)) == null ? void 0 : n.getItem(c(this, k));
      t = s ? b(this, m, R).call(this, s) : c(this, v)
    } else t = c(this, v);
    return It(t, t, c(this, V), (o = c(this, E)) == null ? void 0 : o.bind(this), (i = c(this, O)) == null ? void 0 : i.bind(this), b(this, m, z).bind(this))
  }
  set current(t) {
    var e;
    b(this, m, z).call(this, t), (e = c(this, O)) == null || e.call(this)
  }
  get connected() {
    return c(this, P)
  }
  disconnect() {
    var e, n;
    if (!c(this, P)) return;
    const t = (e = c(this, I)) == null ? void 0 : e.getItem(c(this, k));
    t && y(this, v, b(this, m, R).call(this, t)), y(this, P, !1), (n = c(this, I)) == null || n.removeItem(c(this, k)), b(this, m, Ot).call(this)
  }
  connect() {
    c(this, P) || (y(this, P, !0), b(this, m, z).call(this, c(this, v)), b(this, m, ot).call(this))
  }
}
v = new WeakMap, k = new WeakMap, G = new WeakMap, I = new WeakMap, E = new WeakMap, O = new WeakMap, V = new WeakMap, P = new WeakMap, N = new WeakMap, C = new WeakMap, K = new WeakMap, H = new WeakMap, $ = new WeakMap, m = new WeakSet, R = function(t) {
  try {
    return c(this, G).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${c(this,k)}"`, e);
    return
  }
}, z = function(t) {
  var e;
  if (!c(this, P)) {
    y(this, v, t);
    return
  }
  try {
    t !== void 0 && ((e = c(this, I)) == null || e.setItem(c(this, k), c(this, G).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${c(this,k)}" to ${c(this,I)}`, n)
  }
}, ot = function() {
  !c(this, C) || !c(this, P) || y(this, E, vt(t => (y(this, O, t), y(this, N, c(this, P) && c(this, K) && c(this, H) === "local" ? rt(c(this, C), "storage", c(this, $)) : void 0), () => {
    var e;
    (e = c(this, N)) == null || e.call(this), y(this, N, void 0), y(this, O, void 0)
  })))
}, Ot = function() {
  var t;
  (t = c(this, N)) == null || t.call(this), y(this, N, void 0), y(this, E, void 0)
};
class x extends Promise {
  constructor(e) {
    let n;
    const o = {
      current: {
        status: "pending"
      }
    };
    super((s, u) => {
      n = {
        resolve: i("fulfilled", s),
        reject: i("rejected", u)
      }, e == null || e(n.resolve, n.reject)
    });
    h(this, "resolvers");
    h(this, "stateHolder");
    this.resolvers = n, this.stateHolder = o;

    function i(s, u) {
      return function(...d) {
        return o.current.status === "pending" && (o.current = Mr(s, d[0], o.current)), u(...d)
      }
    }
  }
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
    return this.state.status && this.state.status !== "pending"
  }
  static create(e) {
    const n = new x;
    return x.trap(e, n), n
  }
  static async trap(e, n) {
    try {
      return n.resolve(await e)
    } catch (o) {
      n.reject(o)
    }
  }
  static delay(e) {
    const n = x.create(void 0),
      o = setTimeout(n.resolve, e);
    return n.catch(() => clearTimeout(o)), n
  }
}

function Mr(r, t, e) {
  switch (r) {
    case "fulfilled":
      return {
        status: r, value: t
      };
    case "rejected":
      return {
        status: r, reason: t
      }
  }
  return e
}
var at = (r => (r.Play = "https://play.google.com/billing", r))(at || {});

function Wr(r) {
  return sr(r)
}

function mt(r) {
  return Wr(function(...e) {
    return x.create(r(...e))
  })
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
    return S() && ((t = p.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = p.checkout) == null ? void 0 : e.startedAt) <= 3 * Pt.day
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
    S() && (p.addFocusListener(t), p.addNavigationListener(t))
  }
  static addFocusListener(t) {
    window.addEventListener("focus", () => {
      T.recover()
    }, {
      signal: t.signal
    })
  }
  static addNavigationListener(t) {
    const e = window.navigation;
    e && e.addEventListener("navigate", n => {
      var o;
      (!document.hasFocus() && p.memoryCheckout || p.isRunning()) && (n.preventDefault(), (o = T.log) == null || o.call(T, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    return p.markViewed(), zt(Ut("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    bt.pendingHistoryDialogOpen = !0
  }
};
h(p, "checkoutState", new St("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), h(p, "memoryCheckout");
let g = p;

function wt(r) {
  const t = r;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var J;
const a = class a {
  static get playBillingBlockedError() {
    return a.errors.at(-1)
  }
  static get playBillingBlocked() {
    return !!a.errors.at(-1)
  }
  static get log() {}
  static get error() {}
  static get warn() {}
  static toastError(...t) {
    var n;
    const e = t.map(o => JSON.stringify(o));
    throw (n = a.error) == null || n.call(a, ...t), e.forEach(o => Et.error(o)), new D(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const n = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: at.Play,
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
  static setAsPlayBillingBlockedErrorIfNecessary(t, e) {
    if (t) try {
      const n = a.PLAY_BILLING_NOT_AVAILABLE.find(o => Dr(wt(t), wt(o)));
      if (!n) return;
      if ((n == null ? void 0 : n.kind) === "not-twa-context") {
        a.forceTWA.current = !1;
        return
      }
      a.errors.push(n)
    } finally {
      throw e || t
    }
  }
  static async getObfuscatedAccountId() {
    const t = await Q.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw a.setAsPlayBillingBlockedErrorIfNecessary(a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION), new D("No hash account id");
    return t
  }
  static async createPaymentBySkuId(t) {
    const e = await a.getObfuscatedAccountId();
    return a.createPaymentRequest(t, e)
  }
  static async createPayment(t) {
    var A;
    a.twaGuard();
    const e = tt(t);
    if (!(e != null && e.productId)) throw new D("No sku config or productId found");
    if (!((A = Y.data) != null && A.id)) throw new D("No user id");
    const n = await a.createPaymentBySkuId(t),
      o = g.start(),
      s = await n.show().catch(a.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var _;
        return (_ = g.finish) == null ? void 0 : _.call(g, o)
      }),
      u = s == null ? void 0 : s.toJSON();
    let l = "unknown";
    return u != null && u.details.purchaseToken ? d(l) : d("fail", new D("Play Billing returned no purchase token")), {
      setStatus: d,
      status: l,
      out: u,
      verify: w
    };
    async function d(_, j) {
      if (l = _, await (s == null ? void 0 : s.complete(_).catch(() => {})), j) throw j
    }
    async function w() {
      var _, j;
      if ((_ = u == null ? void 0 : u.details) != null && _.purchaseToken) try {
        const {
          droplets: Z
        } = await a.verifyBySKU({
          sku: t,
          token: (j = u == null ? void 0 : u.details) == null ? void 0 : j.purchaseToken
        });
        return await d("success"), await a.refresh(), g.openCheckoutDialog(Z)
      } catch (Z) {
        await d("fail", Z)
      }
    }
  }
  static refresh() {
    return a.twaGuard(), Y.refresh()
  }
  static async dispatchPendingPurchases() {
    a.twaGuard();
    const t = {
      credited: 0,
      pending: 0
    };
    try {
      if (!a.service) return t;
      const e = await a.service.listPurchases().catch(() => []);
      if (!e.length) return t;
      const n = await Promise.allSettled(e.map(s => a.verifyBySKU({
        sku: s.itemId,
        token: s.purchaseToken
      })));
      let o = 0,
        i = 0;
      for (const s of n) s.status === "fulfilled" ? o += s.value.droplets : i++;
      return o > 0 && await a.refresh(), {
        credited: o,
        pending: i
      }
    } catch {
      return t
    }
  }
  static async autoRecoverPendingPurchases() {
    var o;
    if (a.twaGuard(), await a.loadService(), !g.shouldRecover()) return;
    const {
      credited: t,
      pending: e
    } = await a.dispatchPendingPurchases().catch(() => ({
      credited: 0,
      pending: 0
    }));
    if (t > 0) {
      g.openCheckoutDialog(t);
      return
    }
    if (e > 0) {
      g.openPendingDialog();
      return
    }
    const n = (o = g.checkout) == null ? void 0 : o.state;
    if ((n == null ? void 0 : n.type) === "finished" && !n.view) {
      n.droplets && g.openCheckoutDialog(n.droplets);
      return
    }
    g.clear()
  }
  static verifyBySKU(t) {
    a.twaGuard();
    const e = tt(t.sku);
    return Q.verifyPlayPurchase({
      productId: Number(e.productId),
      purchaseToken: t.token
    })
  }
  static getGlobal() {
    return window
  }
  static isTWA() {
    return !!(S() && a.forceTWA.current !== !1 && (a.forceTWA.current || a.service))
  }
  static isTWALoaded() {
    return !!(Y.data && a.service && a.forceTWA.current !== !1)
  }
  static async load() {
    var t;
    if (S()) {
      try {
        await this.loadMapSKUs()
      } catch (e) {
        (t = a.log) == null || t.call(a, e)
      }
      a.service && (await a.recover(), a.forceTWA.current = !0)
    }
  }
  static async recover() {
    var t;
    if (g.shouldRecover()) {
      await a.loadService();
      try {
        const e = await a.getPurchasesAfter(),
          o = ((t = ir(e, i => i.status).paid) == null ? void 0 : t.reduce((i, s) => i + s.droplets, 0)) ?? 0;
        if (o > 0) {
          await g.openCheckoutDialog(o);
          return
        }
        if (e != null && e.length) {
          await g.openPendingDialog();
          return
        }
      } finally {
        await a.refresh()
      }
    }
  }
  static async getPurchasesAfter() {
    var o, i;
    const t = ((o = g.checkout) == null ? void 0 : o.state.view) ?? ((i = g.checkout) == null ? void 0 : i.state.startedAt);
    return t ? (await Q.listPlayPurchaseHistory()).purchases.sort((s, u) => Date.parse(u.updatedAt) - Date.parse(s.updatedAt)).filter(s => Date.parse(s.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return c(this, J).has(t)
  }
  static checkIfShouldForceTWA() {
    var e, n;
    if (!S()) {
      a.forceTWA.current = !1;
      return
    }
    if (this.hasTWAFlag) {
      a.forceTWA.current = !0;
      const o = new URL(location.href);
      o.search = (o.searchParams.delete("twa"), o.searchParams.toString()), window.history.replaceState({}, "", o.href)
    }
    const t = [document.referrer, (n = (e = window == null ? void 0 : window.opener) == null ? void 0 : e.document) == null ? void 0 : n.referrer].filter(o => o);
    if (t != null && t.length)
      for (const o of t) {
        const i = o.match(a.pattern),
          s = i == null ? void 0 : i[1];
        s && s === Bt.appName && (a.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    S() && await a.load()
  }
  static isSamsung() {
    return xt() === "Samsung Internet"
  }
  static nativeFormat(t) {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: t.price.currency
    }).format(+t.price.value)
  }
  static printPriceBySKU(t) {
    var o;
    const e = a.mapSKUs.get(t);
    if ((e == null ? void 0 : e.price) != null) return this.nativeFormat(e);
    const n = {
      value: ((o = tt(t)) == null ? void 0 : o.price) * Gt / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
J = new WeakMap, h(a, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), h(a, "forceTWA", new St("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), h(a, "POOLING_TIME", 10), h(a, "errors", []), h(a, "service"), h(a, "mapSKUs", new Map), h(a, "referrer", []), h(a, "ERRORS", {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: "billing-blocked",
    printError: lt(),
    name: "NO_ACCOUNT_ID",
    message: "NO_ACCOUNT_ID",
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: "billing-blocked",
    printError: lt(),
    name: "NotSupportedError",
    message: 'The payment method "https://play.google.com/billing" is not supported.'
  }
}), h(a, "PLAY_BILLING_NOT_AVAILABLE", [{
  kind: "not-twa-context",
  printError: pt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.'
}, {
  kind: "not-twa-context",
  printError: pt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.'
}, {
  kind: "not-twa-context",
  printError: Qt(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: Ae(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: Re(),
  name: "AbortError",
  message: "Invalid state."
}, a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, a.ERRORS.GENERIC_NOT_SUPPORTED]), h(a, "loadMapSKUs", mt(async () => {
  var i, s;
  if (!S()) return;
  a.twaGuard();
  const t = Object.values(Ct.products).filter(u => "lookupKey" in u).map(u => u.lookupKey),
    e = await ((i = a.loadService) == null ? void 0 : i.call(a).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    n = await (e == null ? void 0 : e.getDetails(t).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    o = new Map(n == null ? void 0 : n.map(u => [u.itemId, u]));
  return (s = a.mapSKUs) != null && s.size || (a.mapSKUs = o), o
})), h(a, "loadService", mt(() => {
  var t, e, n;
  return (n = (e = (t = a.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, at.Play)) == null ? void 0 : n.then(o => a.service ?? (a.service = o)).then(o => (o && (a.forceTWA.current = !0), o))
})), f(a, J, new Set([1, !0].map(String))), h(a, "onInit", async t => {
  a.loadService(), a.checkIfShouldForceTWA(), g.preventNavigationInTWAIfInCheckout(t)
});
let T = a;
var _t;
(r => {
  async function t() {
    if (n() || history.length < 3) return;
    const o = 50;
    for (let i = 0; i < o; i++) history.pushState({}, "");
    navigator.userActivation.hasBeenActive || await Kr(document, ["pointerdown", "keydown", "touchstart", "click"]), !n() && history.go(-(history.length - 1))
  }
  r.reset = t;

  function e() {
    if (!("navigation" in window)) return;
    const o = window.navigation;
    if (typeof o != "object" || o === null || !("entries" in o) || typeof o.entries != "function") return;
    const i = o.entries();
    return Array.isArray(i) ? i.length : void 0
  }

  function n() {
    var o, i;
    if ((i = (o = Y) == null ? void 0 : o.data) != null && i.id) return !0;
    try {
      const s = e();
      return s !== void 0 && s >= history.length
    } catch {
      return !1
    }
  }
})(_t || (_t = {}));

function Kr(r, t, e) {
  return new Promise(n => {
    const o = i => {
      t.forEach(s => r.removeEventListener(s, o)), n(i)
    };
    t.forEach(i => r.addEventListener(i, o))
  })
}

function S() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function rn() {
  const r = "last-unfocus",
    t = new AbortController;
  if (S()) {
    queueMicrotask(async () => {
      await T.onInit(t)
    });
    const e = () => {
        const o = localStorage.getItem(r);
        if (o) {
          const i = parseInt(o, 10);
          Date.now() - i > 5 * Pt.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const o = bt.map;
        if (o) {
          const i = o.getCenter(),
            s = o.getZoom();
          er(i, s)
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
  g as T, T as a, or as b, er as c, tr as d, S as e, tn as g, nr as i, en as l, Re as p, rn as s, Ur as w
};