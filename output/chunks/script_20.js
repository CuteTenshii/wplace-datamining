var kt = Object.defineProperty;
var at = r => {
  throw TypeError(r)
};
var At = (r, t, e) => t in r ? kt(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var h = (r, t, e) => At(r, typeof t != "symbol" ? t + "" : t, e),
  J = (r, t, e) => t.has(r) || at("Cannot " + e);
var l = (r, t, e) => (J(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  g = (r, t, e) => t.has(r) ? at("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  y = (r, t, e, n) => (J(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  b = (r, t, e) => (J(r, t, "access private method"), e);
import {
  T as _t,
  G as et,
  g as Pt,
  t as St,
  W as D,
  b as Z,
  H as X,
  u as Q,
  I as Ot,
  J as Nt,
  d as Tt
} from "./Cpgf6r_0.js";
import {
  e as it,
  i as st,
  h as ct,
  bq as Bt,
  bO as Gt,
  aN as lt
} from "./B20EPEO9.js";
import {
  g as Et
} from "./ByKIHAoP.js";
import {
  r as Ct
} from "./B0pdzQDm.js";
import {
  d as Dt
} from "./BwL0ie2E.js";
import {
  c as Lt
} from "./dXo2ef-x.js";
import {
  d as zt
} from "./CftFOTTa.js";
import {
  g as q
} from "./BhCkpOlh.js";
import "./DitbnRdH.js";
const Rt = () => "Download WPlace from the Google Play Store.",
  Ut = () => "Baixe o WPlace na Google Play Store.",
  xt = () => "请从 Google Play 商店下载 WPlace。",
  Ft = () => "Lade WPlace aus dem Google Play Store herunter.",
  Mt = () => "Descarga WPlace desde Google Play Store.",
  Wt = () => "Téléchargez WPlace depuis le Google Play Store.",
  Kt = () => "Scarica WPlace dal Google Play Store.",
  qt = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  Ht = () => "Pobierz WPlace ze Sklepu Google Play.",
  Yt = () => "Скачайте WPlace из Google Play Store.",
  $t = () => "Завантажте WPlace з Google Play Store.",
  Vt = () => "Hãy tải WPlace từ Google Play Store.",
  Jt = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? Rt() : e === "pt" ? Ut() : e === "ch" ? xt() : e === "de" ? Ft() : e === "es" ? Mt() : e === "fr" ? Wt() : e === "it" ? Kt() : e === "jp" ? qt() : e === "pl" ? Ht() : e === "ru" ? Yt() : e === "uk" ? $t() : Vt()
  },
  Zt = () => "We couldn't find your account. Please try again later.",
  Xt = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  Qt = () => "找不到你的账号，请稍后重试。",
  te = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  ee = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  re = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  ne = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  oe = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  ae = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  ie = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  se = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  ce = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  ut = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? Zt() : e === "pt" ? Xt() : e === "ch" ? Qt() : e === "de" ? te() : e === "es" ? ee() : e === "fr" ? re() : e === "it" ? ne() : e === "jp" ? oe() : e === "pl" ? ae() : e === "ru" ? ie() : e === "uk" ? se() : ce()
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
  we = () => "Перезагрузите страницу и попробуйте снова.",
  _e = () => "Перезавантажте сторінку та спробуйте ще раз.",
  Pe = () => "Hãy tải lại trang và thử lại.",
  be = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? le() : e === "pt" ? ue() : e === "ch" ? pe() : e === "de" ? de() : e === "es" ? ye() : e === "fr" ? fe() : e === "it" ? ge() : e === "jp" ? he() : e === "pl" ? me() : e === "ru" ? we() : e === "uk" ? _e() : Pe()
  },
  ve = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  Ie = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  je = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  ke = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  Ae = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Se = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Oe = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Ne = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Te = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Be = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Ge = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  Ee = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Ce = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? ve() : e === "pt" ? Ie() : e === "ch" ? je() : e === "de" ? ke() : e === "es" ? Ae() : e === "fr" ? Se() : e === "it" ? Oe() : e === "jp" ? Ne() : e === "pl" ? Te() : e === "ru" ? Be() : e === "uk" ? Ge() : Ee()
  },
  De = () => "Play Billing not supported.",
  Le = () => "Play Billing não suportado.",
  ze = () => "不支持 Play Billing。",
  Re = () => "Play Billing wird nicht unterstützt.",
  Ue = () => "Play Billing no es compatible.",
  xe = () => "Play Billing non pris en charge.",
  Fe = () => "Play Billing non supportato.",
  Me = () => "Play Billing はサポートされていません。",
  We = () => "Play Billing nie jest obsługiwane.",
  Ke = () => "Play Billing не поддерживается.",
  qe = () => "Play Billing не підтримується.",
  He = () => "Play Billing không được hỗ trợ.",
  pt = (r = {}, t = {}) => {
    const e = t.locale ?? q();
    return e === "en" ? De() : e === "pt" ? Le() : e === "ch" ? ze() : e === "de" ? Re() : e === "es" ? Ue() : e === "fr" ? xe() : e === "it" ? Fe() : e === "jp" ? Me() : e === "pl" ? We() : e === "ru" ? Ke() : e === "uk" ? qe() : He()
  };

function Ye(r) {
  return Math.floor(Math.random() * r)
}
const rt = 14.5,
  $e = 0,
  Ve = 24;
async function Yr() {
  const r = Qe();
  if (r) return r;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((n, o) => navigator.geolocation.getCurrentPosition(i => n(i), i => o(i)));
      return {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
        zoom: rt
      }
    }
  } catch (t) {
    console.error(t)
  }
  return {
    ...Je().pos,
    zoom: rt
  }
}

function Je() {
  const r = Object.entries(Ze),
    t = Ye(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const Ze = {
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
  bt = "location";

function Xe(r, t) {
  localStorage.setItem(bt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function Qe() {
  const r = localStorage.getItem(bt);
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
  if (!(typeof e != "number" || typeof n != "number" || !tr({
      lat: e,
      lng: n
    }))) return {
    lat: e,
    lng: n,
    zoom: typeof o == "number" && er(o) ? o : rt
  }
}

function tr(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}

function er(r) {
  return Number.isFinite(r) && r >= $e && r <= Ve
}
var F, M;
class rr {
  constructor() {
    g(this, F, it(-1));
    g(this, M, it([]))
  }
  get idx() {
    return st(l(this, F))
  }
  set idx(t) {
    ct(l(this, F), t, !0)
  }
  get entries() {
    return st(l(this, M))
  }
  set entries(t) {
    ct(l(this, M), t)
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
const $r = new rr;

function nr(r, t) {
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

function or(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, o = function(i) {
    const c = n ? n(i) : i;
    if (e.has(c)) return e.get(c);
    const s = r.call(this, i);
    return e.set(c, s), s
  };
  return o.cache = e, o
}

function ar() {}

function yt(r) {
  return typeof dt.Buffer < "u" && dt.Buffer.isBuffer(r)
}

function ft(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function gt(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const ir = "[object RegExp]",
  sr = "[object String]",
  cr = "[object Number]",
  lr = "[object Boolean]",
  ur = "[object Symbol]",
  pr = "[object Date]",
  dr = "[object Map]",
  yr = "[object Set]",
  fr = "[object Array]",
  gr = "[object Function]",
  hr = "[object ArrayBuffer]",
  tt = "[object Object]",
  mr = "[object Error]",
  wr = "[object DataView]",
  _r = "[object Uint8Array]",
  Pr = "[object Uint8ClampedArray]",
  br = "[object Uint16Array]",
  vr = "[object Uint32Array]",
  Ir = "[object BigUint64Array]",
  jr = "[object Int8Array]",
  kr = "[object Int16Array]",
  Ar = "[object Int32Array]",
  Sr = "[object BigInt64Array]",
  Or = "[object Float32Array]",
  Nr = "[object Float64Array]";

function ht(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function Tr(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Br(r, t, e) {
  return L(r, t, void 0, void 0, void 0, void 0, e)
}

function L(r, t, e, n, o, i, c) {
  const s = c(r, t, e, n, o, i);
  if (s !== void 0) return s;
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
      return U(r, t, i, c)
  }
  return U(r, t, i, c)
}

function U(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let o = gt(r),
    i = gt(t);
  if (o === "[object Arguments]" && (o = tt), i === "[object Arguments]" && (i = tt), o !== i) return !1;
  switch (o) {
    case sr:
      return r.toString() === t.toString();
    case cr:
      return Tr(r.valueOf(), t.valueOf());
    case lr:
    case pr:
    case ur:
      return Object.is(r.valueOf(), t.valueOf());
    case ir:
      return r.source === t.source && r.flags === t.flags;
    case gr:
      return r === t
  }
  e = e ?? new Map;
  const c = e.get(r),
    s = e.get(t);
  if (c != null && s != null) return c === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (o) {
      case dr:
        if (r.size !== t.size) return !1;
        for (const [u, d] of r.entries())
          if (!t.has(u) || !L(d, t.get(u), u, r, t, e, n)) return !1;
        return !0;
      case yr: {
        if (r.size !== t.size) return !1;
        const u = Array.from(r.values()),
          d = Array.from(t.values());
        for (let w = 0; w < u.length; w++) {
          const j = u[w],
            _ = d.findIndex(k => L(j, k, void 0, r, t, e, n));
          if (_ === -1) return !1;
          d.splice(_, 1)
        }
        return !0
      }
      case fr:
      case _r:
      case Pr:
      case br:
      case vr:
      case Ir:
      case jr:
      case kr:
      case Ar:
      case Sr:
      case Or:
      case Nr:
        if (yt(r) !== yt(t) || r.length !== t.length) return !1;
        for (let u = 0; u < r.length; u++)
          if (!L(r[u], t[u], u, r, t, e, n)) return !1;
        return !0;
      case hr:
        return r.byteLength !== t.byteLength ? !1 : U(new Uint8Array(r), new Uint8Array(t), e, n);
      case wr:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : U(new Uint8Array(r), new Uint8Array(t), e, n);
      case mr:
        return r.name === t.name && r.message === t.message;
      case tt: {
        if (!(U(r.constructor, t.constructor, e, n) || ht(r) && ht(t))) return !1;
        const u = [...Object.keys(r), ...ft(r)],
          d = [...Object.keys(t), ...ft(t)];
        if (u.length !== d.length) return !1;
        for (let w = 0; w < u.length; w++) {
          const j = u[w],
            _ = r[j];
          if (!Object.hasOwn(t, j)) return !1;
          const k = t[j];
          if (!L(_, k, j, r, t, e, n)) return !1
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

function Gr(r, t) {
  return Br(r, t, ar)
}

function Er(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function vt(r, t, e, n, o, i) {
  if (r === null || typeof r != "object") return r;
  const c = Object.getPrototypeOf(r);
  if (c !== null && c !== Object.prototype && !Array.isArray(r)) return r;
  let s = e.get(r);
  return s || (s = new Proxy(r, {
    get: (u, d) => (n == null || n(), vt(Reflect.get(u, d), t, e, n, o, i)),
    set: (u, d, w) => (o == null || o(), Reflect.set(u, d, w), i(t), !0)
  }), e.set(r, s)), s
}
var v, I, E, A, G, O, H, P, N, C, W, K, Y, m, z, R, nt, jt;
class It {
  constructor(t, e, n = {}) {
    g(this, m);
    g(this, v);
    g(this, I);
    g(this, E);
    g(this, A);
    g(this, G);
    g(this, O);
    g(this, H, new WeakMap);
    g(this, P);
    g(this, N);
    g(this, C);
    g(this, W);
    g(this, K);
    g(this, Y, t => {
      var e;
      t.key !== l(this, I) || t.newValue === null || (y(this, v, b(this, m, z).call(this, t.newValue)), (e = l(this, O)) == null || e.call(this))
    });
    const {
      storage: o = "local",
      serializer: i = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: c = !0,
      connected: s = !0
    } = n, u = "window" in n ? n.window : Dt;
    if (y(this, v, e), y(this, I, t), y(this, E, i), y(this, P, s), y(this, C, u), y(this, W, c), y(this, K, o), u === void 0) return;
    const d = Er(o, u);
    y(this, A, d);
    const w = d.getItem(t);
    w !== null ? y(this, v, b(this, m, z).call(this, w)) : s && b(this, m, R).call(this, e), b(this, m, nt).call(this)
  }
  get current() {
    var e, n, o, i;
    (e = l(this, G)) == null || e.call(this);
    let t;
    if (l(this, P)) {
      const c = (n = l(this, A)) == null ? void 0 : n.getItem(l(this, I));
      t = c ? b(this, m, z).call(this, c) : l(this, v)
    } else t = l(this, v);
    return vt(t, t, l(this, H), (o = l(this, G)) == null ? void 0 : o.bind(this), (i = l(this, O)) == null ? void 0 : i.bind(this), b(this, m, R).bind(this))
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
    const t = (e = l(this, A)) == null ? void 0 : e.getItem(l(this, I));
    t && y(this, v, b(this, m, z).call(this, t)), y(this, P, !1), (n = l(this, A)) == null || n.removeItem(l(this, I)), b(this, m, jt).call(this)
  }
  connect() {
    l(this, P) || (y(this, P, !0), b(this, m, R).call(this, l(this, v)), b(this, m, nt).call(this))
  }
}
v = new WeakMap, I = new WeakMap, E = new WeakMap, A = new WeakMap, G = new WeakMap, O = new WeakMap, H = new WeakMap, P = new WeakMap, N = new WeakMap, C = new WeakMap, W = new WeakMap, K = new WeakMap, Y = new WeakMap, m = new WeakSet, z = function(t) {
  try {
    return l(this, E).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${l(this,I)}"`, e);
    return
  }
}, R = function(t) {
  var e;
  if (!l(this, P)) {
    y(this, v, t);
    return
  }
  try {
    t !== void 0 && ((e = l(this, A)) == null || e.setItem(l(this, I), l(this, E).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${l(this,I)}" to ${l(this,A)}`, n)
  }
}, nt = function() {
  !l(this, C) || !l(this, P) || y(this, G, Lt(t => (y(this, O, t), y(this, N, l(this, P) && l(this, W) && l(this, K) === "local" ? Bt(l(this, C), "storage", l(this, Y)) : void 0), () => {
    var e;
    (e = l(this, N)) == null || e.call(this), y(this, N, void 0), y(this, O, void 0)
  })))
}, jt = function() {
  var t;
  (t = l(this, N)) == null || t.call(this), y(this, N, void 0), y(this, G, void 0)
};
class x extends Promise {
  constructor(e) {
    let n;
    const o = {
      current: {
        status: "pending"
      }
    };
    super((c, s) => {
      n = {
        resolve: i("fulfilled", c),
        reject: i("rejected", s)
      }, e == null || e(n.resolve, n.reject)
    });
    h(this, "resolvers");
    h(this, "stateHolder");
    this.resolvers = n, this.stateHolder = o;

    function i(c, s) {
      return function(...d) {
        return o.current.status === "pending" && (o.current = Cr(c, d[0], o.current)), s(...d)
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

function Cr(r, t, e) {
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
var ot = (r => (r.Play = "https://play.google.com/billing", r))(ot || {});

function Dr(r) {
  return or(r)
}

function mt(r) {
  return Dr(function(...e) {
    return x.create(r(...e))
  })
}
var Lr = (r => (r.Fail = "fail", r.Success = "success", r.Wait = "unknown", r))(Lr || {});
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
    return S() && ((t = p.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = p.checkout) == null ? void 0 : e.startedAt) <= 3 * _t.day
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
      B.recover()
    }, {
      signal: t.signal
    })
  }
  static addNavigationListener(t) {
    const e = window.navigation;
    e && e.addEventListener("navigate", n => {
      var o;
      (!document.hasFocus() && p.memoryCheckout || p.isRunning()) && (n.preventDefault(), (o = B.log) == null || o.call(B, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    p.markViewed();
    const e = et(Array.isArray(t) ? t : [t]).map(n => `${n.currency}=${encodeURIComponent(String(n.amount))}`).join("&");
    if (e) return Et(Ct("/payment/success-v3") + `?${e}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    Pt.pendingHistoryDialogOpen = !0
  }
};
h(p, "checkoutState", new It("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), h(p, "memoryCheckout");
let f = p;

function wt(r) {
  const t = r;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var $;
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
    throw (n = a.error) == null || n.call(a, ...t), e.forEach(o => St.error(o)), new D(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const n = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: ot.Play,
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
      const n = a.PLAY_BILLING_NOT_AVAILABLE.find(o => Gr(wt(t), wt(o)));
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
    if (!t) throw a.setAsPlayBillingBlockedErrorIfNecessary(a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION), new D("No hash account id");
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
    if (!(e != null && e.productId)) throw new D("No sku config or productId found");
    if (!((j = Q.data) != null && j.id)) throw new D("No user id");
    const n = await a.createPaymentBySkuId(t),
      o = f.start(),
      c = await n.show().catch(a.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var _;
        return (_ = f.finish) == null ? void 0 : _.call(f, o)
      }),
      s = c == null ? void 0 : c.toJSON();
    let u = "unknown";
    return s != null && s.details.purchaseToken ? d(u) : d("fail", new D("Play Billing returned no purchase token")), {
      setStatus: d,
      status: u,
      out: s,
      verify: w
    };
    async function d(_, k) {
      if (u = _, await (c == null ? void 0 : c.complete(_).catch(() => {})), k) throw k
    }
    async function w() {
      var _, k;
      if ((_ = s == null ? void 0 : s.details) != null && _.purchaseToken) try {
        const {
          grant: V
        } = await a.verifyBySKU({
          sku: t,
          token: (k = s == null ? void 0 : s.details) == null ? void 0 : k.purchaseToken
        });
        return await d("success"), await a.refresh(), f.openCheckoutDialog(V)
      } catch (V) {
        await d("fail", V)
      }
    }
  }
  static refresh() {
    return a.twaGuard(), Q.refresh()
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
      const n = await Promise.allSettled(e.map(s => a.verifyBySKU({
          sku: s.itemId,
          token: s.purchaseToken
        }))),
        o = [];
      let i = 0;
      for (const s of n) s.status === "fulfilled" ? o.push(s.value.grant) : i++;
      const c = et(o);
      return c.length > 0 && await a.refresh(), {
        credited: c,
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
    return !!(Q.data && a.service && a.forceTWA.current !== !1)
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
          n = nr(e, i => i.status),
          o = et(((t = n.paid) == null ? void 0 : t.map(i => i.grant)) ?? []);
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
    return t ? (await Z.listPlayPurchaseHistory()).purchases.sort((c, s) => Date.parse(s.updatedAt) - Date.parse(c.updatedAt)).filter(c => Date.parse(c.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return l(this, $).has(t)
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
          c = i == null ? void 0 : i[1];
        c && c === Ot.appName && (a.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    S() && await a.load()
  }
  static isSamsung() {
    return zt() === "Samsung Internet"
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
      value: ((o = X(t)) == null ? void 0 : o.price) * Nt / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
$ = new WeakMap, h(a, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), h(a, "forceTWA", new It("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), h(a, "POOLING_TIME", 10), h(a, "errors", []), h(a, "service"), h(a, "mapSKUs", new Map), h(a, "referrer", []), h(a, "ERRORS", {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: "billing-blocked",
    printError: ut(),
    name: "NO_ACCOUNT_ID",
    message: "NO_ACCOUNT_ID",
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: "billing-blocked",
    printError: ut(),
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
  printError: Jt(),
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
}, a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, a.ERRORS.GENERIC_NOT_SUPPORTED]), h(a, "loadMapSKUs", mt(async () => {
  var i, c;
  if (!S()) return;
  a.twaGuard();
  const t = Object.values(Tt.products).filter(s => "lookupKey" in s).map(s => s.lookupKey),
    e = await ((i = a.loadService) == null ? void 0 : i.call(a).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    n = await (e == null ? void 0 : e.getDetails(t).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    o = new Map(n == null ? void 0 : n.map(s => [s.itemId, s]));
  return (c = a.mapSKUs) != null && c.size || (a.mapSKUs = o), o
})), h(a, "loadService", mt(() => {
  var t, e, n;
  return (n = (e = (t = a.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, ot.Play)) == null ? void 0 : n.then(o => a.service ?? (a.service = o)).then(o => (o && (a.forceTWA.current = !0), o))
})), g(a, $, new Set([1, !0].map(String))), h(a, "onInit", async t => {
  a.loadService(), a.checkIfShouldForceTWA(), f.preventNavigationInTWAIfInCheckout(t)
});
let B = a;
const T = Gt({
  status: "unavailable"
});
async function Vr() {
  const r = lt(T);
  if (r.status === "available") {
    T.set({
      status: "prompting"
    });
    try {
      return await r.event.prompt()
    } finally {
      lt(T).status === "prompting" && T.set({
        status: "unavailable"
      })
    }
  }
}

function S() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function Jr() {
  const r = "last-unfocus",
    t = new AbortController,
    e = window.pwaInstallPrompt;
  if (window.pwaInstallPrompt = void 0, e && T.set({
      status: "available",
      event: e
    }), window.addEventListener("beforeinstallprompt", n => {
      n.preventDefault(), window.pwaInstallPrompt === n && (window.pwaInstallPrompt = void 0), T.set({
        status: "available",
        event: n
      })
    }, {
      signal: t.signal
    }), window.addEventListener("appinstalled", () => {
      T.set({
        status: "installed"
      })
    }, {
      signal: t.signal
    }), S()) {
    queueMicrotask(async () => {
      await B.onInit(t)
    });
    const n = () => {
        const i = localStorage.getItem(r);
        if (i) {
          const c = parseInt(i, 10);
          Date.now() - c > 5 * _t.minute && window.location.reload()
        }
      },
      o = () => {
        localStorage.setItem(r, Date.now().toString());
        const i = Pt.map;
        if (i) {
          const c = i.getCenter(),
            s = i.getZoom();
          Xe(c, s)
        }
      };
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? n() : o()
    }, {
      signal: t.signal
    }), window.addEventListener("pageshow", n, {
      signal: t.signal
    }), window.addEventListener("pagehide", o, {
      signal: t.signal
    })
  }
  return () => {
    t.abort(), T.set({
      status: "unavailable"
    })
  }
}
export {
  Lr as P, f as T, B as a, er as b, Xe as c, T as d, Vr as e, Ze as f, Yr as g, S as h, tr as i, $r as l, Ce as p, Jr as s
};