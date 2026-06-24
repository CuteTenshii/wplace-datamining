var It = Object.defineProperty;
var ot = r => {
  throw TypeError(r)
};
var St = (r, t, e) => t in r ? It(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var m = (r, t, e) => St(r, typeof t != "symbol" ? t + "" : t, e),
  J = (r, t, e) => t.has(r) || ot("Cannot " + e);
var c = (r, t, e) => (J(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  f = (r, t, e) => t.has(r) ? ot("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  d = (r, t, e, n) => (J(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  b = (r, t, e) => (J(r, t, "access private method"), e);
import {
  T as mt,
  g as _t,
  t as Ot,
  a as $,
  v as Z,
  u as Q,
  A as Nt,
  w as Tt,
  G as Bt,
  b as Et
} from "./D2EF9Wn0.js";
import {
  e as at,
  i as it,
  h as st,
  bJ as tt,
  aE as Gt,
  y as Ct,
  B as Dt
} from "./CNUayq5u.js";
import {
  g as zt
} from "./BSGuLKyq.js";
import {
  r as Lt
} from "./WB1JvQRM.js";
import {
  c as wt
} from "./Dnqs5_45.js";
import {
  g as M
} from "./BhCkpOlh.js";
import "./B5NEOuSn.js";
const Rt = () => "Download WPlace from the Google Play Store.",
  Ut = () => "Baixe o WPlace na Google Play Store.",
  xt = () => "请从 Google Play 商店下载 WPlace。",
  Ft = () => "Lade WPlace aus dem Google Play Store herunter.",
  Wt = () => "Descarga WPlace desde Google Play Store.",
  Kt = () => "Téléchargez WPlace depuis le Google Play Store.",
  Mt = () => "Scarica WPlace dal Google Play Store.",
  qt = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  Ht = () => "Pobierz WPlace ze Sklepu Google Play.",
  Vt = () => "Скачайте WPlace из Google Play Store.",
  Yt = () => "Завантажте WPlace з Google Play Store.",
  Jt = () => "Hãy tải WPlace từ Google Play Store.",
  $t = (r = {}, t = {}) => {
    const e = t.locale ?? M();
    return e === "en" ? Rt() : e === "pt" ? Ut() : e === "ch" ? xt() : e === "de" ? Ft() : e === "es" ? Wt() : e === "fr" ? Kt() : e === "it" ? Mt() : e === "jp" ? qt() : e === "pl" ? Ht() : e === "ru" ? Vt() : e === "uk" ? Yt() : Jt()
  },
  Zt = () => "We couldn't find your account. Please try again later.",
  Qt = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  Xt = () => "找不到你的账号，请稍后重试。",
  te = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  ee = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  re = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  ne = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  oe = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  ae = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  ie = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  se = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  ce = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  ct = (r = {}, t = {}) => {
    const e = t.locale ?? M();
    return e === "en" ? Zt() : e === "pt" ? Qt() : e === "ch" ? Xt() : e === "de" ? te() : e === "es" ? ee() : e === "fr" ? re() : e === "it" ? ne() : e === "jp" ? oe() : e === "pl" ? ae() : e === "ru" ? ie() : e === "uk" ? se() : ce()
  },
  le = () => "Reload the page and try again.",
  ue = () => "Recarregue a página e tente novamente.",
  pe = () => "请刷新页面后重试。",
  de = () => "Lade die Seite neu und versuche es erneut.",
  ye = () => "Recarga la página e inténtalo de nuevo.",
  fe = () => "Rechargez la page et réessayez.",
  ge = () => "Ricarica la pagina e riprova.",
  he = () => "ページを再読み込みして、もう一度お試しください。",
  me = () => "Odśwież stronę i spróbuj ponownie.",
  _e = () => "Перезагрузите страницу и попробуйте снова.",
  we = () => "Перезавантажте сторінку та спробуйте ще раз.",
  Pe = () => "Hãy tải lại trang và thử lại.",
  be = (r = {}, t = {}) => {
    const e = t.locale ?? M();
    return e === "en" ? le() : e === "pt" ? ue() : e === "ch" ? pe() : e === "de" ? de() : e === "es" ? ye() : e === "fr" ? fe() : e === "it" ? ge() : e === "jp" ? he() : e === "pl" ? me() : e === "ru" ? _e() : e === "uk" ? we() : Pe()
  },
  ve = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  ke = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  je = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  Ae = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  Ie = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Se = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Oe = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Ne = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Te = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Be = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Ee = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Ge = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Ce = (r = {}, t = {}) => {
    const e = t.locale ?? M();
    return e === "en" ? ve() : e === "pt" ? ke() : e === "ch" ? je() : e === "de" ? Ae() : e === "es" ? Ie() : e === "fr" ? Se() : e === "it" ? Oe() : e === "jp" ? Ne() : e === "pl" ? Te() : e === "ru" ? Be() : e === "uk" ? Ee() : Ge()
  },
  De = () => "Play Billing not supported.",
  ze = () => "Play Billing não suportado.",
  Le = () => "不支持 Play Billing。",
  Re = () => "Play Billing wird nicht unterstützt.",
  Ue = () => "Play Billing no es compatible.",
  xe = () => "Play Billing non pris en charge.",
  Fe = () => "Play Billing non supportato.",
  We = () => "Play Billing はサポートされていません。",
  Ke = () => "Play Billing nie jest obsługiwane.",
  Me = () => "Play Billing не поддерживается.",
  qe = () => "Play Billing не підтримується.",
  He = () => "Play Billing không được hỗ trợ.",
  lt = (r = {}, t = {}) => {
    const e = t.locale ?? M();
    return e === "en" ? De() : e === "pt" ? ze() : e === "ch" ? Le() : e === "de" ? Re() : e === "es" ? Ue() : e === "fr" ? xe() : e === "it" ? Fe() : e === "jp" ? We() : e === "pl" ? Ke() : e === "ru" ? Me() : e === "uk" ? qe() : He()
  };

function Ve(r) {
  return Math.floor(Math.random() * r)
}
const et = 14.5;
async function Kr() {
  const r = Ze();
  if (r) return r;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((n, o) => navigator.geolocation.getCurrentPosition(i => n(i), i => o(i)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: et
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...Ye().pos,
    zoom: et
  }
}

function Ye() {
  const r = Object.entries(Je),
    t = Ve(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const Je = {
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
  Pt = "location";

function $e(r, t) {
  localStorage.setItem(Pt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function Ze() {
  const r = localStorage.getItem(Pt);
  if (!r) return;
  const t = JSON.parse(r);
  return t.zoom ?? (t.zoom = et), t
}

function Mr(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}
var U, x;
class Qe {
  constructor() {
    f(this, U, at(-1));
    f(this, x, at([]))
  }
  get idx() {
    return it(c(this, U))
  }
  set idx(t) {
    st(c(this, U), t, !0)
  }
  get entries() {
    return it(c(this, x))
  }
  set entries(t) {
    st(c(this, x), t)
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
U = new WeakMap, x = new WeakMap;
const qr = new Qe,
  ut = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
    return this
  })();

function Xe(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, o = function(i) {
    const s = n ? n(i) : i;
    if (e.has(s)) return e.get(s);
    const l = r.call(this, i);
    return e.set(s, l), l
  };
  return o.cache = e, o
}

function tr() {}

function pt(r) {
  return typeof ut.Buffer < "u" && ut.Buffer.isBuffer(r)
}

function dt(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function yt(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const er = "[object RegExp]",
  rr = "[object String]",
  nr = "[object Number]",
  or = "[object Boolean]",
  ar = "[object Symbol]",
  ir = "[object Date]",
  sr = "[object Map]",
  cr = "[object Set]",
  lr = "[object Array]",
  ur = "[object Function]",
  pr = "[object ArrayBuffer]",
  X = "[object Object]",
  dr = "[object Error]",
  yr = "[object DataView]",
  fr = "[object Uint8Array]",
  gr = "[object Uint8ClampedArray]",
  hr = "[object Uint16Array]",
  mr = "[object Uint32Array]",
  _r = "[object BigUint64Array]",
  wr = "[object Int8Array]",
  Pr = "[object Int16Array]",
  br = "[object Int32Array]",
  vr = "[object BigInt64Array]",
  kr = "[object Float32Array]",
  jr = "[object Float64Array]";

function ft(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function Ar(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Ir(r, t, e) {
  return C(r, t, void 0, void 0, void 0, void 0, e)
}

function C(r, t, e, n, o, i, s) {
  const l = s(r, t, e, n, o, i);
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
      return L(r, t, i, s)
  }
  return L(r, t, i, s)
}

function L(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let o = yt(r),
    i = yt(t);
  if (o === "[object Arguments]" && (o = X), i === "[object Arguments]" && (i = X), o !== i) return !1;
  switch (o) {
    case rr:
      return r.toString() === t.toString();
    case nr:
      return Ar(r.valueOf(), t.valueOf());
    case or:
    case ir:
    case ar:
      return Object.is(r.valueOf(), t.valueOf());
    case er:
      return r.source === t.source && r.flags === t.flags;
    case ur:
      return r === t
  }
  e = e ?? new Map;
  const s = e.get(r),
    l = e.get(t);
  if (s != null && l != null) return s === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (o) {
      case sr:
        if (r.size !== t.size) return !1;
        for (const [u, y] of r.entries())
          if (!t.has(u) || !C(y, t.get(u), u, r, t, e, n)) return !1;
        return !0;
      case cr: {
        if (r.size !== t.size) return !1;
        const u = Array.from(r.values()),
          y = Array.from(t.values());
        for (let w = 0; w < u.length; w++) {
          const h = u[w],
            O = y.findIndex(Y => C(h, Y, void 0, r, t, e, n));
          if (O === -1) return !1;
          y.splice(O, 1)
        }
        return !0
      }
      case lr:
      case fr:
      case gr:
      case hr:
      case mr:
      case _r:
      case wr:
      case Pr:
      case br:
      case vr:
      case kr:
      case jr:
        if (pt(r) !== pt(t) || r.length !== t.length) return !1;
        for (let u = 0; u < r.length; u++)
          if (!C(r[u], t[u], u, r, t, e, n)) return !1;
        return !0;
      case pr:
        return r.byteLength !== t.byteLength ? !1 : L(new Uint8Array(r), new Uint8Array(t), e, n);
      case yr:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : L(new Uint8Array(r), new Uint8Array(t), e, n);
      case dr:
        return r.name === t.name && r.message === t.message;
      case X: {
        if (!(L(r.constructor, t.constructor, e, n) || ft(r) && ft(t))) return !1;
        const u = [...Object.keys(r), ...dt(r)],
          y = [...Object.keys(t), ...dt(t)];
        if (u.length !== y.length) return !1;
        for (let w = 0; w < u.length; w++) {
          const h = u[w],
            O = r[h];
          if (!Object.hasOwn(t, h)) return !1;
          const Y = t[h];
          if (!C(O, Y, h, r, t, e, n)) return !1
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

function Sr(r, t) {
  return Ir(r, t, tr)
}
const bt = typeof window < "u" ? window : void 0;

function Or(r) {
  let t = r.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var B, F;
class Nr {
  constructor(t = {}) {
    f(this, B);
    f(this, F);
    const {
      window: e = bt,
      document: n = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (d(this, B, n), d(this, F, wt(o => {
      const i = tt(e, "focusin", o),
        s = tt(e, "focusout", o);
      return () => {
        i(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = c(this, F)) == null || t.call(this), c(this, B) ? Or(c(this, B)) : null
  }
}
B = new WeakMap, F = new WeakMap;
new Nr;

function Tr(r, t) {
  switch (r) {
    case "post":
      Ct(t);
      break;
    case "pre":
      Gt(t);
      break
  }
}

function vt(r, t, e, n = {}) {
  const {
    lazy: o = !1
  } = n;
  let i = !o,
    s = Array.isArray(r) ? [] : void 0;
  Tr(t, () => {
    const l = Array.isArray(r) ? r.map(y => y()) : r();
    if (!i) {
      i = !0, s = l;
      return
    }
    const u = Dt(() => e(l, s));
    return s = l, u
  })
}

function Br(r, t, e) {
  vt(r, "post", t, e)
}

function Er(r, t, e) {
  vt(r, "pre", t, e)
}
Br.pre = Er;

function Gr(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function kt(r, t, e, n, o, i) {
  if (r === null || typeof r != "object") return r;
  const s = Object.getPrototypeOf(r);
  if (s !== null && s !== Object.prototype && !Array.isArray(r)) return r;
  let l = e.get(r);
  return l || (l = new Proxy(r, {
    get: (u, y) => (n == null || n(), kt(Reflect.get(u, y), t, e, n, o, i)),
    set: (u, y, w) => (o == null || o(), Reflect.set(u, y, w), i(t), !0)
  }), e.set(r, l)), l
}
var v, k, E, j, T, I, q, P, S, G, W, K, H, _, D, z, rt, At;
class jt {
  constructor(t, e, n = {}) {
    f(this, _);
    f(this, v);
    f(this, k);
    f(this, E);
    f(this, j);
    f(this, T);
    f(this, I);
    f(this, q, new WeakMap);
    f(this, P);
    f(this, S);
    f(this, G);
    f(this, W);
    f(this, K);
    f(this, H, t => {
      var e;
      t.key !== c(this, k) || t.newValue === null || (d(this, v, b(this, _, D).call(this, t.newValue)), (e = c(this, I)) == null || e.call(this))
    });
    const {
      storage: o = "local",
      serializer: i = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: s = !0,
      connected: l = !0
    } = n, u = "window" in n ? n.window : bt;
    if (d(this, v, e), d(this, k, t), d(this, E, i), d(this, P, l), d(this, G, u), d(this, W, s), d(this, K, o), u === void 0) return;
    const y = Gr(o, u);
    d(this, j, y);
    const w = y.getItem(t);
    w !== null ? d(this, v, b(this, _, D).call(this, w)) : l && b(this, _, z).call(this, e), b(this, _, rt).call(this)
  }
  get current() {
    var e, n, o, i;
    (e = c(this, T)) == null || e.call(this);
    let t;
    if (c(this, P)) {
      const s = (n = c(this, j)) == null ? void 0 : n.getItem(c(this, k));
      t = s ? b(this, _, D).call(this, s) : c(this, v)
    } else t = c(this, v);
    return kt(t, t, c(this, q), (o = c(this, T)) == null ? void 0 : o.bind(this), (i = c(this, I)) == null ? void 0 : i.bind(this), b(this, _, z).bind(this))
  }
  set current(t) {
    var e;
    b(this, _, z).call(this, t), (e = c(this, I)) == null || e.call(this)
  }
  get connected() {
    return c(this, P)
  }
  disconnect() {
    var e, n;
    if (!c(this, P)) return;
    const t = (e = c(this, j)) == null ? void 0 : e.getItem(c(this, k));
    t && d(this, v, b(this, _, D).call(this, t)), d(this, P, !1), (n = c(this, j)) == null || n.removeItem(c(this, k)), b(this, _, At).call(this)
  }
  connect() {
    c(this, P) || (d(this, P, !0), b(this, _, z).call(this, c(this, v)), b(this, _, rt).call(this))
  }
}
v = new WeakMap, k = new WeakMap, E = new WeakMap, j = new WeakMap, T = new WeakMap, I = new WeakMap, q = new WeakMap, P = new WeakMap, S = new WeakMap, G = new WeakMap, W = new WeakMap, K = new WeakMap, H = new WeakMap, _ = new WeakSet, D = function(t) {
  try {
    return c(this, E).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${c(this,k)}"`, e);
    return
  }
}, z = function(t) {
  var e;
  if (!c(this, P)) {
    d(this, v, t);
    return
  }
  try {
    t !== void 0 && ((e = c(this, j)) == null || e.setItem(c(this, k), c(this, E).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${c(this,k)}" to ${c(this,j)}`, n)
  }
}, rt = function() {
  !c(this, G) || !c(this, P) || d(this, T, wt(t => (d(this, I, t), d(this, S, c(this, P) && c(this, W) && c(this, K) === "local" ? tt(c(this, G), "storage", c(this, H)) : void 0), () => {
    var e;
    (e = c(this, S)) == null || e.call(this), d(this, S, void 0), d(this, I, void 0)
  })))
}, At = function() {
  var t;
  (t = c(this, S)) == null || t.call(this), d(this, S, void 0), d(this, T, void 0)
};
class R extends Promise {
  constructor(e) {
    let n;
    super((s, l) => {
      n = {
        resolve: i("fulfilled", s),
        reject: i("rejected", l)
      }, e == null || e(n.resolve, n.reject)
    });
    m(this, "resolvers");
    m(this, "state", {
      status: "pending"
    });
    this.resolvers = n;
    const o = this;

    function i(s, l) {
      return function(...y) {
        return o.state.status === "pending" && (o.state = o.mountStateByStatus(s, y[0])), l(...y)
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
  static create(e) {
    const n = new R;
    return R.trap(e, n), n
  }
  static async trap(e, n) {
    try {
      return n.resolve(await e)
    } catch (o) {
      n.reject(o)
    }
  }
  static delay(e) {
    const n = R.create(void 0),
      o = setTimeout(n.resolve, e);
    return n.catch(() => clearTimeout(o)), n
  }
}
var nt = (r => (r.Play = "https://play.google.com/billing", r))(nt || {});

function Cr(r) {
  return Xe(r)
}

function gt(r) {
  return Cr(function(...e) {
    return R.create(r(...e))
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
    return A() && ((t = p.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = p.checkout) == null ? void 0 : e.startedAt) <= 3 * mt.day
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
    A() && (p.addFocusListener(t), p.addNavigationListener(t))
  }
  static addFocusListener(t) {
    window.addEventListener("focus", () => {
      N.recover()
    }, {
      signal: t.signal
    })
  }
  static addNavigationListener(t) {
    const e = window.navigation;
    e && e.addEventListener("navigate", n => {
      var o;
      (!document.hasFocus() && p.memoryCheckout || p.isRunning()) && (n.preventDefault(), (o = N.log) == null || o.call(N, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    return p.markViewed(), zt(Lt("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    _t.pendingHistoryDialogOpen = !0
  }
};
m(p, "checkoutState", new jt("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), m(p, "memoryCheckout");
let g = p;

function ht(r) {
  const t = r;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var V;
const a = class a {
  static get playBillingBlocked() {
    return !!this.playBillingBlockedError
  }
  static get log() {}
  static get error() {}
  static get warn() {}
  static toastError(...t) {
    var n;
    const e = t.map(o => JSON.stringify(o));
    throw (n = a.error) == null || n.call(a, ...t), e.forEach(o => Ot.error(o)), new Error(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const n = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: nt.Play,
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
  static setAsPlayBillingBlockedErrorIfNecessary(t) {
    if (t) try {
      const e = a.PLAY_BILLING_NOT_AVAILABLE.find(n => Sr(ht(t), ht(n)));
      if ((e == null ? void 0 : e.kind) === "not-twa-context") {
        a.forceTWA.current = !1;
        return
      }
      a.setAsPlayBillingBlocked(e)
    } catch {
      return Promise.reject(t)
    }
  }
  static setAsPlayBillingBlocked(t) {
    a.playBillingBlockedError = t
  }
  static async getObfuscatedAccountId() {
    const t = await $.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw a.setAsPlayBillingBlockedErrorIfNecessary({
      name: "NO_ACCOUNT_ID",
      message: "NO_ACCOUNT_ID"
    }), new Error("No hash account id");
    return t
  }
  static async createPaymentBySkuId(t) {
    const e = await a.getObfuscatedAccountId();
    return a.createPaymentRequest(t, e)
  }
  static async createPayment(t) {
    var w;
    a.twaGuard();
    const e = Z(t);
    if (!(e != null && e.productId)) throw new Error("No sku config or productId found");
    if (!((w = Q.data) != null && w.id)) throw new Error("No user id");
    const n = await a.createPaymentBySkuId(t),
      o = g.start(),
      i = await n.show().catch(h => a.setAsPlayBillingBlockedErrorIfNecessary(h)).finally(() => {
        var h;
        return (h = g.finish) == null ? void 0 : h.call(g, o)
      }),
      s = i == null ? void 0 : i.toJSON();
    let l = "unknown";
    return s.details.purchaseToken ? u(l) : u("fail", new Error("Play Billing returned no purchase token")), {
      setStatus: u,
      status: l,
      out: s,
      verify: y
    };
    async function u(h, O) {
      if (l = h, await (i == null ? void 0 : i.complete(h).catch(() => {})), O) throw O
    }
    async function y() {
      try {
        const {
          droplets: h
        } = await a.verifyBySKU({
          sku: t,
          token: s.details.purchaseToken
        });
        return await u("success"), await a.refresh(), g.openCheckoutDialog(h)
      } catch (h) {
        await u("fail", h)
      }
    }
  }
  static refresh() {
    return a.twaGuard(), Q.refresh()
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
    const e = Z(t.sku);
    return $.verifyPlayPurchase({
      productId: Number(e.productId),
      purchaseToken: t.token
    })
  }
  static getGlobal() {
    return window
  }
  static isTWA() {
    return !!(A() && a.forceTWA.current !== !1 && (a.forceTWA.current || a.service))
  }
  static isTWALoaded() {
    return !!(Q.data && a.service && a.forceTWA.current !== !1)
  }
  static async load() {
    var t;
    if (A()) {
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
          o = ((t = Object.groupBy(e, i => i.status).paid) == null ? void 0 : t.reduce((i, s) => i + s.droplets, 0)) ?? 0;
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
    return t ? (await $.listPlayPurchaseHistory()).purchases.sort((s, l) => Date.parse(l.updatedAt) - Date.parse(s.updatedAt)).filter(s => Date.parse(s.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return c(this, V).has(t)
  }
  static checkIfShouldForceTWA() {
    var t, e, n, o;
    if (!A()) {
      a.forceTWA.current = !1;
      return
    }
    if (this.hasTWAFlag) {
      a.forceTWA.current = !0;
      const i = new URL(location.href);
      i.search = (i.searchParams.delete("twa"), i.searchParams.toString()), window.history.replaceState({}, "", i.href)
    }
    this.referrer.push(document.referrer), (e = (t = window == null ? void 0 : window.opener) == null ? void 0 : t.document) != null && e.referrer && this.referrer.push((o = (n = window == null ? void 0 : window.opener) == null ? void 0 : n.document) == null ? void 0 : o.referrer);
    for (const i of this.referrer) {
      const s = i.match(a.pattern),
        l = s == null ? void 0 : s[1];
      l && l === Nt.appName && (a.forceTWA.current = !0)
    }
  }
  static async loadTWA() {
    A() && await a.load()
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
    const e = a.mapSKUs.get(t);
    if ((e == null ? void 0 : e.price) != null) return this.nativeFormat(e);
    const n = {
      value: ((o = Z(t)) == null ? void 0 : o.price) * Bt / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
V = new WeakMap, m(a, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), m(a, "forceTWA", new jt("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), m(a, "POOLING_TIME", 10), m(a, "playBillingBlockedError"), m(a, "service"), m(a, "mapSKUs", new Map), m(a, "referrer", []), m(a, "ERRORS", {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: "billing-blocked",
    printError: ct(),
    name: "NO_ACCOUNT_ID",
    message: "NO_ACCOUNT_ID",
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: "billing-blocked",
    printError: ct(),
    name: "NotSupportedError",
    message: 'The payment method "https://play.google.com/billing" is not supported.'
  }
}), m(a, "PLAY_BILLING_NOT_AVAILABLE", [{
  kind: "not-twa-context",
  printError: lt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.'
}, {
  kind: "not-twa-context",
  printError: lt(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.'
}, {
  kind: "not-twa-context",
  printError: $t(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: be(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: Ce(),
  name: "AbortError",
  message: "Invalid state."
}, a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, a.ERRORS.GENERIC_NOT_SUPPORTED]), m(a, "loadMapSKUs", gt(async () => {
  var i;
  if (!A()) return;
  a.twaGuard();
  const t = Object.values(Et.products).filter(s => "lookupKey" in s).map(s => s.lookupKey),
    e = await a.loadService().catch(s => a.setAsPlayBillingBlockedErrorIfNecessary(s)),
    n = await (e == null ? void 0 : e.getDetails(t).catch(s => a.setAsPlayBillingBlockedErrorIfNecessary(s))),
    o = new Map(n == null ? void 0 : n.map(s => [s.itemId, s]));
  return (i = a.mapSKUs) != null && i.size || (a.mapSKUs = o), o
})), m(a, "loadService", gt(() => {
  var t, e, n;
  return (n = (e = (t = a.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, nt.Play)) == null ? void 0 : n.then(o => a.service ?? (a.service = o)).then(o => (o && (a.forceTWA.current = !0), o))
})), f(a, V, new Set([1, !0].map(String))), m(a, "onInit", async t => {
  a.loadService(), a.checkIfShouldForceTWA(), g.preventNavigationInTWAIfInCheckout(t)
});
let N = a;

function A() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function Hr() {
  const r = "last-unfocus",
    t = new AbortController;
  if (A()) {
    queueMicrotask(async () => {
      await N.onInit(t)
    });
    const e = () => {
        const o = localStorage.getItem(r);
        if (o) {
          const i = parseInt(o, 10);
          Date.now() - i > 5 * mt.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const o = _t.map;
        if (o) {
          const i = o.getCenter(),
            s = o.getZoom();
          $e(i, s)
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
  g as T, N as a, $e as b, Mr as c, Je as d, Kr as g, A as i, qr as l, Ce as p, Hr as s, Br as w
};