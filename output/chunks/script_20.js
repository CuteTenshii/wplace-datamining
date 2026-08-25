var jt = Object.defineProperty;
var ot = r => {
  throw TypeError(r)
};
var At = (r, t, e) => t in r ? jt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var h = (r, t, e) => At(r, typeof t != "symbol" ? t + "" : t, e),
  J = (r, t, e) => t.has(r) || ot("Cannot " + e);
var l = (r, t, e) => (J(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  g = (r, t, e) => t.has(r) ? ot("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  y = (r, t, e, n) => (J(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  b = (r, t, e) => (J(r, t, "access private method"), e);
import {
  T as wt,
  G as tt,
  g as _t,
  t as It,
  W as C,
  b as Z,
  H as X,
  u as H,
  I as St,
  J as Ot,
  d as Nt
} from "./CJwiUDoa.js";
import {
  e as at,
  i as it,
  h as st,
  bn as Tt
} from "./m4hpPlb8.js";
import {
  g as Et
} from "./C_O8RY_g.js";
import {
  r as Bt
} from "./BL6QnBvx.js";
import {
  d as Gt
} from "./BL0vj2vA.js";
import {
  c as Ct
} from "./riRxs-wl.js";
import {
  d as Dt
} from "./CftFOTTa.js";
import {
  g as K
} from "./BhCkpOlh.js";
import "./D--1jHVZ.js";
const Lt = () => "Download WPlace from the Google Play Store.",
  Rt = () => "Baixe o WPlace na Google Play Store.",
  zt = () => "请从 Google Play 商店下载 WPlace。",
  Ut = () => "Lade WPlace aus dem Google Play Store herunter.",
  xt = () => "Descarga WPlace desde Google Play Store.",
  Ft = () => "Téléchargez WPlace depuis le Google Play Store.",
  Mt = () => "Scarica WPlace dal Google Play Store.",
  Wt = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  Kt = () => "Pobierz WPlace ze Sklepu Google Play.",
  Ht = () => "Скачайте WPlace из Google Play Store.",
  qt = () => "Завантажте WPlace з Google Play Store.",
  Yt = () => "Hãy tải WPlace từ Google Play Store.",
  Vt = (r = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? Lt() : e === "pt" ? Rt() : e === "ch" ? zt() : e === "de" ? Ut() : e === "es" ? xt() : e === "fr" ? Ft() : e === "it" ? Mt() : e === "jp" ? Wt() : e === "pl" ? Kt() : e === "ru" ? Ht() : e === "uk" ? qt() : Yt()
  },
  $t = () => "We couldn't find your account. Please try again later.",
  Jt = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  Zt = () => "找不到你的账号，请稍后重试。",
  Xt = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  Qt = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  te = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  ee = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  re = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  ne = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  oe = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  ae = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  ie = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  ct = (r = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? $t() : e === "pt" ? Jt() : e === "ch" ? Zt() : e === "de" ? Xt() : e === "es" ? Qt() : e === "fr" ? te() : e === "it" ? ee() : e === "jp" ? re() : e === "pl" ? ne() : e === "ru" ? oe() : e === "uk" ? ae() : ie()
  },
  se = () => "Reload the page and try again.",
  ce = () => "Recarregue a página e tente novamente.",
  le = () => "请刷新页面后重试。",
  ue = () => "Lade die Seite neu und versuche es erneut.",
  pe = () => "Recarga la página e inténtalo de nuevo.",
  de = () => "Rechargez la page et réessayez.",
  ye = () => "Ricarica la pagina e riprova.",
  fe = () => "ページを再読み込みして、もう一度お試しください。",
  ge = () => "Odśwież stronę i spróbuj ponownie.",
  he = () => "Перезагрузите страницу и попробуйте снова.",
  me = () => "Перезавантажте сторінку та спробуйте ще раз.",
  we = () => "Hãy tải lại trang và thử lại.",
  _e = (r = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? se() : e === "pt" ? ce() : e === "ch" ? le() : e === "de" ? ue() : e === "es" ? pe() : e === "fr" ? de() : e === "it" ? ye() : e === "jp" ? fe() : e === "pl" ? ge() : e === "ru" ? he() : e === "uk" ? me() : we()
  },
  Pe = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  be = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  ve = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  ke = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  je = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Ae = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Ie = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Se = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Oe = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Ne = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Te = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Ee = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Be = (r = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? Pe() : e === "pt" ? be() : e === "ch" ? ve() : e === "de" ? ke() : e === "es" ? je() : e === "fr" ? Ae() : e === "it" ? Ie() : e === "jp" ? Se() : e === "pl" ? Oe() : e === "ru" ? Ne() : e === "uk" ? Te() : Ee()
  },
  Ge = () => "Play Billing not supported.",
  Ce = () => "Play Billing não suportado.",
  De = () => "不支持 Play Billing。",
  Le = () => "Play Billing wird nicht unterstützt.",
  Re = () => "Play Billing no es compatible.",
  ze = () => "Play Billing non pris en charge.",
  Ue = () => "Play Billing non supportato.",
  xe = () => "Play Billing はサポートされていません。",
  Fe = () => "Play Billing nie jest obsługiwane.",
  Me = () => "Play Billing не поддерживается.",
  We = () => "Play Billing не підтримується.",
  Ke = () => "Play Billing không được hỗ trợ.",
  lt = (r = {}, t = {}) => {
    const e = t.locale ?? K();
    return e === "en" ? Ge() : e === "pt" ? Ce() : e === "ch" ? De() : e === "de" ? Le() : e === "es" ? Re() : e === "fr" ? ze() : e === "it" ? Ue() : e === "jp" ? xe() : e === "pl" ? Fe() : e === "ru" ? Me() : e === "uk" ? We() : Ke()
  };

function He(r) {
  return Math.floor(Math.random() * r)
}
const et = 14.5,
  qe = 0,
  Ye = 24;
async function qr() {
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
    ...Ve().pos,
    zoom: et
  }
}

function Ve() {
  const r = Object.entries($e),
    t = He(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const $e = {
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

function Je(r, t) {
  localStorage.setItem(Pt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function Ze() {
  const r = localStorage.getItem(Pt);
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
  if (!(typeof e != "number" || typeof n != "number" || !Xe({
      lat: e,
      lng: n
    }))) return {
    lat: e,
    lng: n,
    zoom: typeof o == "number" && Qe(o) ? o : et
  }
}

function Xe(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}

function Qe(r) {
  return Number.isFinite(r) && r >= qe && r <= Ye
}
var x, F;
class tr {
  constructor() {
    g(this, x, at(-1));
    g(this, F, at([]))
  }
  get idx() {
    return it(l(this, x))
  }
  set idx(t) {
    st(l(this, x), t, !0)
  }
  get entries() {
    return it(l(this, F))
  }
  set entries(t) {
    st(l(this, F), t)
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
const Yr = new tr;

function er(r, t) {
  const e = {};
  for (let n = 0; n < r.length; n++) {
    const o = r[n],
      i = t(o, n, r);
    Object.hasOwn(e, i) || (e[i] = []), e[i].push(o)
  }
  return e
}
const ut = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
  return this
})();

function rr(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, o = function(i) {
    const s = n ? n(i) : i;
    if (e.has(s)) return e.get(s);
    const c = r.call(this, i);
    return e.set(s, c), c
  };
  return o.cache = e, o
}

function nr() {}

function pt(r) {
  return typeof ut.Buffer < "u" && ut.Buffer.isBuffer(r)
}

function dt(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function yt(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const or = "[object RegExp]",
  ar = "[object String]",
  ir = "[object Number]",
  sr = "[object Boolean]",
  cr = "[object Symbol]",
  lr = "[object Date]",
  ur = "[object Map]",
  pr = "[object Set]",
  dr = "[object Array]",
  yr = "[object Function]",
  fr = "[object ArrayBuffer]",
  Q = "[object Object]",
  gr = "[object Error]",
  hr = "[object DataView]",
  mr = "[object Uint8Array]",
  wr = "[object Uint8ClampedArray]",
  _r = "[object Uint16Array]",
  Pr = "[object Uint32Array]",
  br = "[object BigUint64Array]",
  vr = "[object Int8Array]",
  kr = "[object Int16Array]",
  jr = "[object Int32Array]",
  Ar = "[object BigInt64Array]",
  Ir = "[object Float32Array]",
  Sr = "[object Float64Array]";

function ft(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function Or(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Nr(r, t, e) {
  return D(r, t, void 0, void 0, void 0, void 0, e)
}

function D(r, t, e, n, o, i, s) {
  const c = s(r, t, e, n, o, i);
  if (c !== void 0) return c;
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
      return z(r, t, i, s)
  }
  return z(r, t, i, s)
}

function z(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let o = yt(r),
    i = yt(t);
  if (o === "[object Arguments]" && (o = Q), i === "[object Arguments]" && (i = Q), o !== i) return !1;
  switch (o) {
    case ar:
      return r.toString() === t.toString();
    case ir:
      return Or(r.valueOf(), t.valueOf());
    case sr:
    case lr:
    case cr:
      return Object.is(r.valueOf(), t.valueOf());
    case or:
      return r.source === t.source && r.flags === t.flags;
    case yr:
      return r === t
  }
  e = e ?? new Map;
  const s = e.get(r),
    c = e.get(t);
  if (s != null && c != null) return s === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (o) {
      case ur:
        if (r.size !== t.size) return !1;
        for (const [u, d] of r.entries())
          if (!t.has(u) || !D(d, t.get(u), u, r, t, e, n)) return !1;
        return !0;
      case pr: {
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
      case dr:
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
      case Sr:
        if (pt(r) !== pt(t) || r.length !== t.length) return !1;
        for (let u = 0; u < r.length; u++)
          if (!D(r[u], t[u], u, r, t, e, n)) return !1;
        return !0;
      case fr:
        return r.byteLength !== t.byteLength ? !1 : z(new Uint8Array(r), new Uint8Array(t), e, n);
      case hr:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : z(new Uint8Array(r), new Uint8Array(t), e, n);
      case gr:
        return r.name === t.name && r.message === t.message;
      case Q: {
        if (!(z(r.constructor, t.constructor, e, n) || ft(r) && ft(t))) return !1;
        const u = [...Object.keys(r), ...dt(r)],
          d = [...Object.keys(t), ...dt(t)];
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

function Tr(r, t) {
  return Nr(r, t, nr)
}

function Er(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function bt(r, t, e, n, o, i) {
  if (r === null || typeof r != "object") return r;
  const s = Object.getPrototypeOf(r);
  if (s !== null && s !== Object.prototype && !Array.isArray(r)) return r;
  let c = e.get(r);
  return c || (c = new Proxy(r, {
    get: (u, d) => (n == null || n(), bt(Reflect.get(u, d), t, e, n, o, i)),
    set: (u, d, w) => (o == null || o(), Reflect.set(u, d, w), i(t), !0)
  }), e.set(r, c)), c
}
var v, k, B, I, E, O, q, P, N, G, M, W, Y, m, L, R, rt, kt;
class vt {
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
    g(this, W);
    g(this, Y, t => {
      var e;
      t.key !== l(this, k) || t.newValue === null || (y(this, v, b(this, m, L).call(this, t.newValue)), (e = l(this, O)) == null || e.call(this))
    });
    const {
      storage: o = "local",
      serializer: i = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: s = !0,
      connected: c = !0
    } = n, u = "window" in n ? n.window : Gt;
    if (y(this, v, e), y(this, k, t), y(this, B, i), y(this, P, c), y(this, G, u), y(this, M, s), y(this, W, o), u === void 0) return;
    const d = Er(o, u);
    y(this, I, d);
    const w = d.getItem(t);
    w !== null ? y(this, v, b(this, m, L).call(this, w)) : c && b(this, m, R).call(this, e), b(this, m, rt).call(this)
  }
  get current() {
    var e, n, o, i;
    (e = l(this, E)) == null || e.call(this);
    let t;
    if (l(this, P)) {
      const s = (n = l(this, I)) == null ? void 0 : n.getItem(l(this, k));
      t = s ? b(this, m, L).call(this, s) : l(this, v)
    } else t = l(this, v);
    return bt(t, t, l(this, q), (o = l(this, E)) == null ? void 0 : o.bind(this), (i = l(this, O)) == null ? void 0 : i.bind(this), b(this, m, R).bind(this))
  }
  set current(t) {
    var e;
    b(this, m, R).call(this, t), (e = l(this, O)) == null || e.call(this)
  }
  get connected() {
    return l(this, P)
  }
  disconnect() {
    var e, n;
    if (!l(this, P)) return;
    const t = (e = l(this, I)) == null ? void 0 : e.getItem(l(this, k));
    t && y(this, v, b(this, m, L).call(this, t)), y(this, P, !1), (n = l(this, I)) == null || n.removeItem(l(this, k)), b(this, m, kt).call(this)
  }
  connect() {
    l(this, P) || (y(this, P, !0), b(this, m, R).call(this, l(this, v)), b(this, m, rt).call(this))
  }
}
v = new WeakMap, k = new WeakMap, B = new WeakMap, I = new WeakMap, E = new WeakMap, O = new WeakMap, q = new WeakMap, P = new WeakMap, N = new WeakMap, G = new WeakMap, M = new WeakMap, W = new WeakMap, Y = new WeakMap, m = new WeakSet, L = function(t) {
  try {
    return l(this, B).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${l(this,k)}"`, e);
    return
  }
}, R = function(t) {
  var e;
  if (!l(this, P)) {
    y(this, v, t);
    return
  }
  try {
    t !== void 0 && ((e = l(this, I)) == null || e.setItem(l(this, k), l(this, B).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${l(this,k)}" to ${l(this,I)}`, n)
  }
}, rt = function() {
  !l(this, G) || !l(this, P) || y(this, E, Ct(t => (y(this, O, t), y(this, N, l(this, P) && l(this, M) && l(this, W) === "local" ? Tt(l(this, G), "storage", l(this, Y)) : void 0), () => {
    var e;
    (e = l(this, N)) == null || e.call(this), y(this, N, void 0), y(this, O, void 0)
  })))
}, kt = function() {
  var t;
  (t = l(this, N)) == null || t.call(this), y(this, N, void 0), y(this, E, void 0)
};
class U extends Promise {
  constructor(e) {
    let n;
    const o = {
      current: {
        status: "pending"
      }
    };
    super((s, c) => {
      n = {
        resolve: i("fulfilled", s),
        reject: i("rejected", c)
      }, e == null || e(n.resolve, n.reject)
    });
    h(this, "resolvers");
    h(this, "stateHolder");
    this.resolvers = n, this.stateHolder = o;

    function i(s, c) {
      return function(...d) {
        return o.current.status === "pending" && (o.current = Br(s, d[0], o.current)), c(...d)
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

function Br(r, t, e) {
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
var nt = (r => (r.Play = "https://play.google.com/billing", r))(nt || {});

function Gr(r) {
  return rr(r)
}

function gt(r) {
  return Gr(function(...e) {
    return U.create(r(...e))
  })
}
var Cr = (r => (r.Fail = "fail", r.Success = "success", r.Wait = "unknown", r))(Cr || {});
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
    return S() && ((t = p.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = p.checkout) == null ? void 0 : e.startedAt) <= 3 * wt.day
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
    p.markViewed();
    const e = tt(Array.isArray(t) ? t : [t]).map(n => `${n.currency}=${encodeURIComponent(String(n.amount))}`).join("&");
    if (e) return Et(Bt("/payment/success-v3") + `?${e}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    _t.pendingHistoryDialogOpen = !0
  }
};
h(p, "checkoutState", new vt("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), h(p, "memoryCheckout");
let f = p;

function ht(r) {
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
    throw (n = a.error) == null || n.call(a, ...t), e.forEach(o => It.error(o)), new C(t.length === 1 ? e[0] : e.join(`
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
  static setAsPlayBillingBlockedErrorIfNecessary(t, e) {
    if (t) try {
      const n = a.PLAY_BILLING_NOT_AVAILABLE.find(o => Tr(ht(t), ht(o)));
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
      c = s == null ? void 0 : s.toJSON();
    let u = "unknown";
    return c != null && c.details.purchaseToken ? d(u) : d("fail", new C("Play Billing returned no purchase token")), {
      setStatus: d,
      status: u,
      out: c,
      verify: w
    };
    async function d(_, A) {
      if (u = _, await (s == null ? void 0 : s.complete(_).catch(() => {})), A) throw A
    }
    async function w() {
      var _, A;
      if ((_ = c == null ? void 0 : c.details) != null && _.purchaseToken) try {
        const {
          grant: $
        } = await a.verifyBySKU({
          sku: t,
          token: (A = c == null ? void 0 : c.details) == null ? void 0 : A.purchaseToken
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
      credited: [],
      pending: 0
    };
    try {
      if (!a.service) return t;
      const e = await a.service.listPurchases().catch(() => []);
      if (!e.length) return t;
      const n = await Promise.allSettled(e.map(c => a.verifyBySKU({
          sku: c.itemId,
          token: c.purchaseToken
        }))),
        o = [];
      let i = 0;
      for (const c of n) c.status === "fulfilled" ? o.push(c.value.grant) : i++;
      const s = tt(o);
      return s.length > 0 && await a.refresh(), {
        credited: s,
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
      credited: [],
      pending: 0
    }));
    if (t.length > 0) {
      f.openCheckoutDialog(t);
      return
    }
    if (e > 0) {
      f.openPendingDialog();
      return
    }
    const n = (o = f.checkout) == null ? void 0 : o.state;
    if ((n == null ? void 0 : n.type) === "finished" && !n.view) {
      n.droplets && f.openCheckoutDialog({
        currency: "droplets",
        amount: n.droplets
      });
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
          n = er(e, i => i.status),
          o = tt(((t = n.paid) == null ? void 0 : t.map(i => i.grant)) ?? []);
        if (o.length > 0) {
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
    return t ? (await Z.listPlayPurchaseHistory()).purchases.sort((s, c) => Date.parse(c.updatedAt) - Date.parse(s.updatedAt)).filter(s => Date.parse(s.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return l(this, V).has(t)
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
        s && s === St.appName && (a.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    S() && await a.load()
  }
  static isSamsung() {
    return Dt() === "Samsung Internet"
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
      value: ((o = X(t)) == null ? void 0 : o.price) * Ot / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
V = new WeakMap, h(a, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), h(a, "forceTWA", new vt("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), h(a, "POOLING_TIME", 10), h(a, "errors", []), h(a, "service"), h(a, "mapSKUs", new Map), h(a, "referrer", []), h(a, "ERRORS", {
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
}), h(a, "PLAY_BILLING_NOT_AVAILABLE", [{
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
  printError: Vt(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: _e(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: Be(),
  name: "AbortError",
  message: "Invalid state."
}, a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, a.ERRORS.GENERIC_NOT_SUPPORTED]), h(a, "loadMapSKUs", gt(async () => {
  var i, s;
  if (!S()) return;
  a.twaGuard();
  const t = Object.values(Nt.products).filter(c => "lookupKey" in c).map(c => c.lookupKey),
    e = await ((i = a.loadService) == null ? void 0 : i.call(a).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    n = await (e == null ? void 0 : e.getDetails(t).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    o = new Map(n == null ? void 0 : n.map(c => [c.itemId, c]));
  return (s = a.mapSKUs) != null && s.size || (a.mapSKUs = o), o
})), h(a, "loadService", gt(() => {
  var t, e, n;
  return (n = (e = (t = a.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, nt.Play)) == null ? void 0 : n.then(o => a.service ?? (a.service = o)).then(o => (o && (a.forceTWA.current = !0), o))
})), g(a, V, new Set([1, !0].map(String))), h(a, "onInit", async t => {
  a.loadService(), a.checkIfShouldForceTWA(), f.preventNavigationInTWAIfInCheckout(t)
});
let T = a;
var mt;
(r => {
  async function t() {
    if (n() || history.length < 3) return;
    const o = 50;
    for (let i = 0; i < o; i++) history.pushState({}, "");
    navigator.userActivation.hasBeenActive || await Dr(document, ["pointerdown", "keydown", "touchstart", "click"]), !n() && history.go(-(history.length - 1))
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
})(mt || (mt = {}));

function Dr(r, t, e) {
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

function Vr() {
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
          Date.now() - i > 5 * wt.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const o = _t.map;
        if (o) {
          const i = o.getCenter(),
            s = o.getZoom();
          Je(i, s)
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
  Cr as P, f as T, T as a, Qe as b, Je as c, $e as d, S as e, qr as g, Xe as i, Yr as l, Be as p, Vr as s
};