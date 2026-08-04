var kt = Object.defineProperty;
var nt = r => {
  throw TypeError(r)
};
var jt = (r, t, e) => t in r ? kt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var h = (r, t, e) => jt(r, typeof t != "symbol" ? t + "" : t, e),
  J = (r, t, e) => t.has(r) || nt("Cannot " + e);
var c = (r, t, e) => (J(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  g = (r, t, e) => t.has(r) ? nt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  y = (r, t, e, n) => (J(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  b = (r, t, e) => (J(r, t, "access private method"), e);
import {
  T as mt,
  g as wt,
  t as At,
  W as C,
  b as Z,
  E as X,
  u as H,
  F as It,
  G as St,
  d as Ot
} from "./Bj8wTZm9.js";
import {
  e as ot,
  i as at,
  h as it,
  bm as Nt
} from "./DUZ_qUVk.js";
import {
  g as Tt
} from "./ClwHouV3.js";
import {
  r as Et
} from "./rrpPc8q9.js";
import {
  d as Bt
} from "./BC0G5yvq.js";
import {
  c as Gt
} from "./DtUyTUmd.js";
import {
  d as Ct
} from "./CftFOTTa.js";
import {
  g as W
} from "./BhCkpOlh.js";
import "./BD1JBkbR.js";
const Dt = () => "Download WPlace from the Google Play Store.",
  Lt = () => "Baixe o WPlace na Google Play Store.",
  zt = () => "请从 Google Play 商店下载 WPlace。",
  Rt = () => "Lade WPlace aus dem Google Play Store herunter.",
  Ut = () => "Descarga WPlace desde Google Play Store.",
  xt = () => "Téléchargez WPlace depuis le Google Play Store.",
  Ft = () => "Scarica WPlace dal Google Play Store.",
  Mt = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  Kt = () => "Pobierz WPlace ze Sklepu Google Play.",
  Wt = () => "Скачайте WPlace из Google Play Store.",
  Ht = () => "Завантажте WPlace з Google Play Store.",
  qt = () => "Hãy tải WPlace từ Google Play Store.",
  Yt = (r = {}, t = {}) => {
    const e = t.locale ?? W();
    return e === "en" ? Dt() : e === "pt" ? Lt() : e === "ch" ? zt() : e === "de" ? Rt() : e === "es" ? Ut() : e === "fr" ? xt() : e === "it" ? Ft() : e === "jp" ? Mt() : e === "pl" ? Kt() : e === "ru" ? Wt() : e === "uk" ? Ht() : qt()
  },
  Vt = () => "We couldn't find your account. Please try again later.",
  $t = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  Jt = () => "找不到你的账号，请稍后重试。",
  Zt = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  Xt = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  Qt = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  te = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  ee = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  re = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  ne = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  oe = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  ae = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  st = (r = {}, t = {}) => {
    const e = t.locale ?? W();
    return e === "en" ? Vt() : e === "pt" ? $t() : e === "ch" ? Jt() : e === "de" ? Zt() : e === "es" ? Xt() : e === "fr" ? Qt() : e === "it" ? te() : e === "jp" ? ee() : e === "pl" ? re() : e === "ru" ? ne() : e === "uk" ? oe() : ae()
  },
  ie = () => "Reload the page and try again.",
  se = () => "Recarregue a página e tente novamente.",
  ce = () => "请刷新页面后重试。",
  le = () => "Lade die Seite neu und versuche es erneut.",
  ue = () => "Recarga la página e inténtalo de nuevo.",
  pe = () => "Rechargez la page et réessayez.",
  de = () => "Ricarica la pagina e riprova.",
  ye = () => "ページを再読み込みして、もう一度お試しください。",
  fe = () => "Odśwież stronę i spróbuj ponownie.",
  ge = () => "Перезагрузите страницу и попробуйте снова.",
  he = () => "Перезавантажте сторінку та спробуйте ще раз.",
  me = () => "Hãy tải lại trang và thử lại.",
  we = (r = {}, t = {}) => {
    const e = t.locale ?? W();
    return e === "en" ? ie() : e === "pt" ? se() : e === "ch" ? ce() : e === "de" ? le() : e === "es" ? ue() : e === "fr" ? pe() : e === "it" ? de() : e === "jp" ? ye() : e === "pl" ? fe() : e === "ru" ? ge() : e === "uk" ? he() : me()
  },
  _e = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  Pe = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  be = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  ve = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  ke = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  je = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Ae = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Ie = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Se = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Oe = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Ne = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Te = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Ee = (r = {}, t = {}) => {
    const e = t.locale ?? W();
    return e === "en" ? _e() : e === "pt" ? Pe() : e === "ch" ? be() : e === "de" ? ve() : e === "es" ? ke() : e === "fr" ? je() : e === "it" ? Ae() : e === "jp" ? Ie() : e === "pl" ? Se() : e === "ru" ? Oe() : e === "uk" ? Ne() : Te()
  },
  Be = () => "Play Billing not supported.",
  Ge = () => "Play Billing não suportado.",
  Ce = () => "不支持 Play Billing。",
  De = () => "Play Billing wird nicht unterstützt.",
  Le = () => "Play Billing no es compatible.",
  ze = () => "Play Billing non pris en charge.",
  Re = () => "Play Billing non supportato.",
  Ue = () => "Play Billing はサポートされていません。",
  xe = () => "Play Billing nie jest obsługiwane.",
  Fe = () => "Play Billing не поддерживается.",
  Me = () => "Play Billing не підтримується.",
  Ke = () => "Play Billing không được hỗ trợ.",
  ct = (r = {}, t = {}) => {
    const e = t.locale ?? W();
    return e === "en" ? Be() : e === "pt" ? Ge() : e === "ch" ? Ce() : e === "de" ? De() : e === "es" ? Le() : e === "fr" ? ze() : e === "it" ? Re() : e === "jp" ? Ue() : e === "pl" ? xe() : e === "ru" ? Fe() : e === "uk" ? Me() : Ke()
  };

function We(r) {
  return Math.floor(Math.random() * r)
}
const tt = 14.5,
  He = 0,
  qe = 24;
async function Wr() {
  const r = Je();
  if (r) return r;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((n, o) => navigator.geolocation.getCurrentPosition(i => n(i), i => o(i)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: tt
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...Ye().pos,
    zoom: tt
  }
}

function Ye() {
  const r = Object.entries(Ve),
    t = We(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const Ve = {
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
  _t = "location";

function $e(r, t) {
  localStorage.setItem(_t, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function Je() {
  const r = localStorage.getItem(_t);
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
  if (!(typeof e != "number" || typeof n != "number" || !Ze({
      lat: e,
      lng: n
    }))) return {
    lat: e,
    lng: n,
    zoom: typeof o == "number" && Xe(o) ? o : tt
  }
}

function Ze(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}

function Xe(r) {
  return Number.isFinite(r) && r >= He && r <= qe
}
var x, F;
class Qe {
  constructor() {
    g(this, x, ot(-1));
    g(this, F, ot([]))
  }
  get idx() {
    return at(c(this, x))
  }
  set idx(t) {
    it(c(this, x), t, !0)
  }
  get entries() {
    return at(c(this, F))
  }
  set entries(t) {
    it(c(this, F), t)
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
x = new WeakMap, F = new WeakMap;
const Hr = new Qe;

function tr(r, t) {
  const e = {};
  for (let n = 0; n < r.length; n++) {
    const o = r[n],
      i = t(o, n, r);
    Object.hasOwn(e, i) || (e[i] = []), e[i].push(o)
  }
  return e
}
const lt = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
  return this
})();

function er(r, t = {}) {
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

function rr() {}

function ut(r) {
  return typeof lt.Buffer < "u" && lt.Buffer.isBuffer(r)
}

function pt(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function dt(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const nr = "[object RegExp]",
  or = "[object String]",
  ar = "[object Number]",
  ir = "[object Boolean]",
  sr = "[object Symbol]",
  cr = "[object Date]",
  lr = "[object Map]",
  ur = "[object Set]",
  pr = "[object Array]",
  dr = "[object Function]",
  yr = "[object ArrayBuffer]",
  Q = "[object Object]",
  fr = "[object Error]",
  gr = "[object DataView]",
  hr = "[object Uint8Array]",
  mr = "[object Uint8ClampedArray]",
  wr = "[object Uint16Array]",
  _r = "[object Uint32Array]",
  Pr = "[object BigUint64Array]",
  br = "[object Int8Array]",
  vr = "[object Int16Array]",
  kr = "[object Int32Array]",
  jr = "[object BigInt64Array]",
  Ar = "[object Float32Array]",
  Ir = "[object Float64Array]";

function yt(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function Sr(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Or(r, t, e) {
  return D(r, t, void 0, void 0, void 0, void 0, e)
}

function D(r, t, e, n, o, i, s) {
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
      return R(r, t, i, s)
  }
  return R(r, t, i, s)
}

function R(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let o = dt(r),
    i = dt(t);
  if (o === "[object Arguments]" && (o = Q), i === "[object Arguments]" && (i = Q), o !== i) return !1;
  switch (o) {
    case or:
      return r.toString() === t.toString();
    case ar:
      return Sr(r.valueOf(), t.valueOf());
    case ir:
    case cr:
    case sr:
      return Object.is(r.valueOf(), t.valueOf());
    case nr:
      return r.source === t.source && r.flags === t.flags;
    case dr:
      return r === t
  }
  e = e ?? new Map;
  const s = e.get(r),
    l = e.get(t);
  if (s != null && l != null) return s === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (o) {
      case lr:
        if (r.size !== t.size) return !1;
        for (const [u, d] of r.entries())
          if (!t.has(u) || !D(d, t.get(u), u, r, t, e, n)) return !1;
        return !0;
      case ur: {
        if (r.size !== t.size) return !1;
        const u = Array.from(r.values()),
          d = Array.from(t.values());
        for (let w = 0; w < u.length; w++) {
          const j = u[w],
            _ = d.findIndex(A => D(j, A, void 0, r, t, e, n));
          if (_ === -1) return !1;
          d.splice(_, 1)
        }
        return !0
      }
      case pr:
      case hr:
      case mr:
      case wr:
      case _r:
      case Pr:
      case br:
      case vr:
      case kr:
      case jr:
      case Ar:
      case Ir:
        if (ut(r) !== ut(t) || r.length !== t.length) return !1;
        for (let u = 0; u < r.length; u++)
          if (!D(r[u], t[u], u, r, t, e, n)) return !1;
        return !0;
      case yr:
        return r.byteLength !== t.byteLength ? !1 : R(new Uint8Array(r), new Uint8Array(t), e, n);
      case gr:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : R(new Uint8Array(r), new Uint8Array(t), e, n);
      case fr:
        return r.name === t.name && r.message === t.message;
      case Q: {
        if (!(R(r.constructor, t.constructor, e, n) || yt(r) && yt(t))) return !1;
        const u = [...Object.keys(r), ...pt(r)],
          d = [...Object.keys(t), ...pt(t)];
        if (u.length !== d.length) return !1;
        for (let w = 0; w < u.length; w++) {
          const j = u[w],
            _ = r[j];
          if (!Object.hasOwn(t, j)) return !1;
          const A = t[j];
          if (!D(_, A, j, r, t, e, n)) return !1
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

function Nr(r, t) {
  return Or(r, t, rr)
}

function Tr(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function Pt(r, t, e, n, o, i) {
  if (r === null || typeof r != "object") return r;
  const s = Object.getPrototypeOf(r);
  if (s !== null && s !== Object.prototype && !Array.isArray(r)) return r;
  let l = e.get(r);
  return l || (l = new Proxy(r, {
    get: (u, d) => (n == null || n(), Pt(Reflect.get(u, d), t, e, n, o, i)),
    set: (u, d, w) => (o == null || o(), Reflect.set(u, d, w), i(t), !0)
  }), e.set(r, l)), l
}
var v, k, B, I, E, O, q, P, N, G, M, K, Y, m, L, z, et, vt;
class bt {
  constructor(t, e, n = {}) {
    g(this, m);
    g(this, v);
    g(this, k);
    g(this, B);
    g(this, I);
    g(this, E);
    g(this, O);
    g(this, q, new WeakMap);
    g(this, P);
    g(this, N);
    g(this, G);
    g(this, M);
    g(this, K);
    g(this, Y, t => {
      var e;
      t.key !== c(this, k) || t.newValue === null || (y(this, v, b(this, m, L).call(this, t.newValue)), (e = c(this, O)) == null || e.call(this))
    });
    const {
      storage: o = "local",
      serializer: i = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: s = !0,
      connected: l = !0
    } = n, u = "window" in n ? n.window : Bt;
    if (y(this, v, e), y(this, k, t), y(this, B, i), y(this, P, l), y(this, G, u), y(this, M, s), y(this, K, o), u === void 0) return;
    const d = Tr(o, u);
    y(this, I, d);
    const w = d.getItem(t);
    w !== null ? y(this, v, b(this, m, L).call(this, w)) : l && b(this, m, z).call(this, e), b(this, m, et).call(this)
  }
  get current() {
    var e, n, o, i;
    (e = c(this, E)) == null || e.call(this);
    let t;
    if (c(this, P)) {
      const s = (n = c(this, I)) == null ? void 0 : n.getItem(c(this, k));
      t = s ? b(this, m, L).call(this, s) : c(this, v)
    } else t = c(this, v);
    return Pt(t, t, c(this, q), (o = c(this, E)) == null ? void 0 : o.bind(this), (i = c(this, O)) == null ? void 0 : i.bind(this), b(this, m, z).bind(this))
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
    t && y(this, v, b(this, m, L).call(this, t)), y(this, P, !1), (n = c(this, I)) == null || n.removeItem(c(this, k)), b(this, m, vt).call(this)
  }
  connect() {
    c(this, P) || (y(this, P, !0), b(this, m, z).call(this, c(this, v)), b(this, m, et).call(this))
  }
}
v = new WeakMap, k = new WeakMap, B = new WeakMap, I = new WeakMap, E = new WeakMap, O = new WeakMap, q = new WeakMap, P = new WeakMap, N = new WeakMap, G = new WeakMap, M = new WeakMap, K = new WeakMap, Y = new WeakMap, m = new WeakSet, L = function(t) {
  try {
    return c(this, B).deserialize(t)
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
    t !== void 0 && ((e = c(this, I)) == null || e.setItem(c(this, k), c(this, B).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${c(this,k)}" to ${c(this,I)}`, n)
  }
}, et = function() {
  !c(this, G) || !c(this, P) || y(this, E, Gt(t => (y(this, O, t), y(this, N, c(this, P) && c(this, M) && c(this, K) === "local" ? Nt(c(this, G), "storage", c(this, Y)) : void 0), () => {
    var e;
    (e = c(this, N)) == null || e.call(this), y(this, N, void 0), y(this, O, void 0)
  })))
}, vt = function() {
  var t;
  (t = c(this, N)) == null || t.call(this), y(this, N, void 0), y(this, E, void 0)
};
class U extends Promise {
  constructor(e) {
    let n;
    const o = {
      current: {
        status: "pending"
      }
    };
    super((s, l) => {
      n = {
        resolve: i("fulfilled", s),
        reject: i("rejected", l)
      }, e == null || e(n.resolve, n.reject)
    });
    h(this, "resolvers");
    h(this, "stateHolder");
    this.resolvers = n, this.stateHolder = o;

    function i(s, l) {
      return function(...d) {
        return o.current.status === "pending" && (o.current = Er(s, d[0], o.current)), l(...d)
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
    const n = new U;
    return U.trap(e, n), n
  }
  static async trap(e, n) {
    try {
      return n.resolve(await e)
    } catch (o) {
      n.reject(o)
    }
  }
  static delay(e) {
    const n = U.create(void 0),
      o = setTimeout(n.resolve, e);
    return n.catch(() => clearTimeout(o)), n
  }
}

function Er(r, t, e) {
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
var rt = (r => (r.Play = "https://play.google.com/billing", r))(rt || {});

function Br(r) {
  return er(r)
}

function ft(r) {
  return Br(function(...e) {
    return U.create(r(...e))
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
    return S() && ((t = p.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = p.checkout) == null ? void 0 : e.startedAt) <= 3 * mt.day
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
    return p.markViewed(), Tt(Et("/payment/success-v3") + `?droplets=${t}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    wt.pendingHistoryDialogOpen = !0
  }
};
h(p, "checkoutState", new bt("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), h(p, "memoryCheckout");
let f = p;

function gt(r) {
  const t = r;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var V;
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
    throw (n = a.error) == null || n.call(a, ...t), e.forEach(o => At.error(o)), new C(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const n = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: rt.Play,
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
      const n = a.PLAY_BILLING_NOT_AVAILABLE.find(o => Nr(gt(t), gt(o)));
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
    const t = await Z.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw a.setAsPlayBillingBlockedErrorIfNecessary(a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION), new C("No hash account id");
    return t
  }
  static async createPaymentBySkuId(t) {
    const e = await a.getObfuscatedAccountId();
    return a.createPaymentRequest(t, e)
  }
  static async createPayment(t) {
    var j;
    a.twaGuard();
    const e = X(t);
    if (!(e != null && e.productId)) throw new C("No sku config or productId found");
    if (!((j = H.data) != null && j.id)) throw new C("No user id");
    const n = await a.createPaymentBySkuId(t),
      o = f.start(),
      s = await n.show().catch(a.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var _;
        return (_ = f.finish) == null ? void 0 : _.call(f, o)
      }),
      l = s == null ? void 0 : s.toJSON();
    let u = "unknown";
    return l != null && l.details.purchaseToken ? d(u) : d("fail", new C("Play Billing returned no purchase token")), {
      setStatus: d,
      status: u,
      out: l,
      verify: w
    };
    async function d(_, A) {
      if (u = _, await (s == null ? void 0 : s.complete(_).catch(() => {})), A) throw A
    }
    async function w() {
      var _, A;
      if ((_ = l == null ? void 0 : l.details) != null && _.purchaseToken) try {
        const {
          droplets: $
        } = await a.verifyBySKU({
          sku: t,
          token: (A = l == null ? void 0 : l.details) == null ? void 0 : A.purchaseToken
        });
        return await d("success"), await a.refresh(), f.openCheckoutDialog($)
      } catch ($) {
        await d("fail", $)
      }
    }
  }
  static refresh() {
    return a.twaGuard(), H.refresh()
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
    if (a.twaGuard(), await a.loadService(), !f.shouldRecover()) return;
    const {
      credited: t,
      pending: e
    } = await a.dispatchPendingPurchases().catch(() => ({
      credited: 0,
      pending: 0
    }));
    if (t > 0) {
      f.openCheckoutDialog(t);
      return
    }
    if (e > 0) {
      f.openPendingDialog();
      return
    }
    const n = (o = f.checkout) == null ? void 0 : o.state;
    if ((n == null ? void 0 : n.type) === "finished" && !n.view) {
      n.droplets && f.openCheckoutDialog(n.droplets);
      return
    }
    f.clear()
  }
  static verifyBySKU(t) {
    a.twaGuard();
    const e = X(t.sku);
    return Z.verifyPlayPurchase({
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
    return !!(H.data && a.service && a.forceTWA.current !== !1)
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
    if (f.shouldRecover()) {
      await a.loadService();
      try {
        const e = await a.getPurchasesAfter(),
          o = ((t = tr(e, i => i.status).paid) == null ? void 0 : t.reduce((i, s) => i + s.droplets, 0)) ?? 0;
        if (o > 0) {
          await f.openCheckoutDialog(o);
          return
        }
        if (e != null && e.length) {
          await f.openPendingDialog();
          return
        }
      } finally {
        await a.refresh()
      }
    }
  }
  static async getPurchasesAfter() {
    var o, i;
    const t = ((o = f.checkout) == null ? void 0 : o.state.view) ?? ((i = f.checkout) == null ? void 0 : i.state.startedAt);
    return t ? (await Z.listPlayPurchaseHistory()).purchases.sort((s, l) => Date.parse(l.updatedAt) - Date.parse(s.updatedAt)).filter(s => Date.parse(s.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return c(this, V).has(t)
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
        s && s === It.appName && (a.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    S() && await a.load()
  }
  static isSamsung() {
    return Ct() === "Samsung Internet"
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
      value: ((o = X(t)) == null ? void 0 : o.price) * St / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
V = new WeakMap, h(a, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), h(a, "forceTWA", new bt("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), h(a, "POOLING_TIME", 10), h(a, "errors", []), h(a, "service"), h(a, "mapSKUs", new Map), h(a, "referrer", []), h(a, "ERRORS", {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: "billing-blocked",
    printError: st(),
    name: "NO_ACCOUNT_ID",
    message: "NO_ACCOUNT_ID",
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: "billing-blocked",
    printError: st(),
    name: "NotSupportedError",
    message: 'The payment method "https://play.google.com/billing" is not supported.'
  }
}), h(a, "PLAY_BILLING_NOT_AVAILABLE", [{
  kind: "not-twa-context",
  printError: ct(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.'
}, {
  kind: "not-twa-context",
  printError: ct(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.'
}, {
  kind: "not-twa-context",
  printError: Yt(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: we(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: Ee(),
  name: "AbortError",
  message: "Invalid state."
}, a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, a.ERRORS.GENERIC_NOT_SUPPORTED]), h(a, "loadMapSKUs", ft(async () => {
  var i, s;
  if (!S()) return;
  a.twaGuard();
  const t = Object.values(Ot.products).filter(l => "lookupKey" in l).map(l => l.lookupKey),
    e = await ((i = a.loadService) == null ? void 0 : i.call(a).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    n = await (e == null ? void 0 : e.getDetails(t).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    o = new Map(n == null ? void 0 : n.map(l => [l.itemId, l]));
  return (s = a.mapSKUs) != null && s.size || (a.mapSKUs = o), o
})), h(a, "loadService", ft(() => {
  var t, e, n;
  return (n = (e = (t = a.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, rt.Play)) == null ? void 0 : n.then(o => a.service ?? (a.service = o)).then(o => (o && (a.forceTWA.current = !0), o))
})), g(a, V, new Set([1, !0].map(String))), h(a, "onInit", async t => {
  a.loadService(), a.checkIfShouldForceTWA(), f.preventNavigationInTWAIfInCheckout(t)
});
let T = a;
var ht;
(r => {
  async function t() {
    if (n() || history.length < 3) return;
    const o = 50;
    for (let i = 0; i < o; i++) history.pushState({}, "");
    navigator.userActivation.hasBeenActive || await Gr(document, ["pointerdown", "keydown", "touchstart", "click"]), !n() && history.go(-(history.length - 1))
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
    if ((i = (o = H) == null ? void 0 : o.data) != null && i.id) return !0;
    try {
      const s = e();
      return s !== void 0 && s >= history.length
    } catch {
      return !1
    }
  }
})(ht || (ht = {}));

function Gr(r, t, e) {
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

function qr() {
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
          Date.now() - i > 5 * mt.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const o = wt.map;
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
  f as T, T as a, Xe as b, $e as c, Ve as d, S as e, Wr as g, Ze as i, Hr as l, Ee as p, qr as s
};