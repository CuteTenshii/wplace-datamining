var Ot = Object.defineProperty;
var it = r => {
  throw TypeError(r)
};
var Nt = (r, t, e) => t in r ? Ot(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var h = (r, t, e) => Nt(r, typeof t != "symbol" ? t + "" : t, e),
  Z = (r, t, e) => t.has(r) || it("Cannot " + e);
var c = (r, t, e) => (Z(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  f = (r, t, e) => t.has(r) ? it("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  y = (r, t, e, n) => (Z(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  b = (r, t, e) => (Z(r, t, "access private method"), e);
import {
  T as _t,
  g as Pt,
  t as Tt,
  W as D,
  a as Q,
  H as X,
  u as tt,
  I as Bt,
  J as Et,
  K as Gt,
  b as Ct
} from "./DRnS8Zxq.js";
import {
  e as st,
  i as ct,
  h as lt,
  bJ as rt,
  aE as Dt,
  y as Lt,
  B as zt
} from "./DmPVOt2G.js";
import {
  g as Rt
} from "./BpSZ4X4f.js";
import {
  r as Ut
} from "./Dvcn0Rvz.js";
import {
  c as bt
} from "./DhqkUb9U.js";
import {
  g as Y
} from "./BhCkpOlh.js";
import "./BwPDOByu.js";
const xt = () => "Download WPlace from the Google Play Store.",
  Ft = () => "Baixe o WPlace na Google Play Store.",
  Kt = () => "请从 Google Play 商店下载 WPlace。",
  Wt = () => "Lade WPlace aus dem Google Play Store herunter.",
  Mt = () => "Descarga WPlace desde Google Play Store.",
  qt = () => "Téléchargez WPlace depuis le Google Play Store.",
  Yt = () => "Scarica WPlace dal Google Play Store.",
  Ht = () => "Google PlayストアからWPlaceをダウンロードしてください。",
  Vt = () => "Pobierz WPlace ze Sklepu Google Play.",
  Jt = () => "Скачайте WPlace из Google Play Store.",
  $t = () => "Завантажте WPlace з Google Play Store.",
  Zt = () => "Hãy tải WPlace từ Google Play Store.",
  Qt = (r = {}, t = {}) => {
    const e = t.locale ?? Y();
    return e === "en" ? xt() : e === "pt" ? Ft() : e === "ch" ? Kt() : e === "de" ? Wt() : e === "es" ? Mt() : e === "fr" ? qt() : e === "it" ? Yt() : e === "jp" ? Ht() : e === "pl" ? Vt() : e === "ru" ? Jt() : e === "uk" ? $t() : Zt()
  },
  Xt = () => "We couldn't find your account. Please try again later.",
  te = () => "Não foi possível encontrar sua conta. Tente novamente mais tarde.",
  ee = () => "找不到你的账号，请稍后重试。",
  re = () => "Wir konnten dein Konto nicht finden. Bitte versuche es später erneut.",
  ne = () => "No pudimos encontrar tu cuenta. Inténtalo de nuevo más tarde.",
  oe = () => "Nous n'avons pas trouvé votre compte. Veuillez réessayer plus tard.",
  ae = () => "Non siamo riusciti a trovare il tuo account. Riprova più tardi.",
  ie = () => "アカウントが見つかりませんでした。後でもう一度お試しください。",
  se = () => "Nie udało się znaleźć Twojego konta. Spróbuj ponownie później.",
  ce = () => "Не удалось найти ваш аккаунт. Повторите попытку позже.",
  le = () => "Не вдалося знайти ваш обліковий запис. Спробуйте пізніше.",
  ue = () => "Không tìm thấy tài khoản của bạn. Vui lòng thử lại sau.",
  ut = (r = {}, t = {}) => {
    const e = t.locale ?? Y();
    return e === "en" ? Xt() : e === "pt" ? te() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? ne() : e === "fr" ? oe() : e === "it" ? ae() : e === "jp" ? ie() : e === "pl" ? se() : e === "ru" ? ce() : e === "uk" ? le() : ue()
  },
  pe = () => "Reload the page and try again.",
  de = () => "Recarregue a página e tente novamente.",
  ye = () => "请刷新页面后重试。",
  fe = () => "Lade die Seite neu und versuche es erneut.",
  ge = () => "Recarga la página e inténtalo de nuevo.",
  he = () => "Rechargez la page et réessayez.",
  me = () => "Ricarica la pagina e riprova.",
  we = () => "ページを再読み込みして、もう一度お試しください。",
  _e = () => "Odśwież stronę i spróbuj ponownie.",
  Pe = () => "Перезагрузите страницу и попробуйте снова.",
  be = () => "Перезавантажте сторінку та спробуйте ще раз.",
  ve = () => "Hãy tải lại trang và thử lại.",
  ke = (r = {}, t = {}) => {
    const e = t.locale ?? Y();
    return e === "en" ? pe() : e === "pt" ? de() : e === "ch" ? ye() : e === "de" ? fe() : e === "es" ? ge() : e === "fr" ? he() : e === "it" ? me() : e === "jp" ? we() : e === "pl" ? _e() : e === "ru" ? Pe() : e === "uk" ? be() : ve()
  },
  je = () => "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.",
  Ae = () => "Seu browser não processa compras pela Google Play. Defina o Google Chrome como navegador padrão do dispositivo e reabra o WPlace para comprar Droplets.",
  Ie = () => "你的浏览器无法处理 Google Play 购买。请将 Google Chrome 设为设备默认浏览器，然后重新打开 WPlace 购买 Droplets。",
  Se = () => "Dein Browser kann keine Google-Play-Käufe verarbeiten. Lege Google Chrome als Standardbrowser deines Geräts fest und öffne WPlace erneut, um Droplets zu kaufen.",
  Oe = () => "Tu navegador no puede procesar compras de Google Play. Establece Google Chrome como navegador predeterminado del dispositivo y vuelve a abrir WPlace para comprar Droplets.",
  Ne = () => "Votre navigateur ne peut pas traiter les achats Google Play. Définissez Google Chrome comme navigateur par défaut de votre appareil, puis rouvrez WPlace pour acheter des Droplets.",
  Te = () => "Il tuo browser non può elaborare gli acquisti di Google Play. Imposta Google Chrome come browser predefinito del dispositivo, poi riapri WPlace per acquistare Droplets.",
  Be = () => "お使いのブラウザではGoogle Play購入を処理できません。Google Chromeを端末の既定のブラウザに設定し、WPlaceを開き直してDropletsを購入してください。",
  Ee = () => "Twoja przeglądarka nie obsługuje zakupów w Google Play. Ustaw Google Chrome jako domyślną przeglądarkę urządzenia, a następnie otwórz WPlace ponownie, aby kupić Droplets.",
  Ge = () => "Ваш браузер не может обрабатывать покупки Google Play. Установите Google Chrome браузером по умолчанию на устройстве и снова откройте WPlace, чтобы купить Droplets.",
  Ce = () => "Ваш браузер не може обробляти покупки Google Play. Установіть Google Chrome браузером за замовчуванням на пристрої та знову відкрийте WPlace, щоб купити Droplets.",
  De = () => "Trình duyệt của bạn không thể xử lý giao dịch mua qua Google Play. Hãy đặt Google Chrome làm trình duyệt mặc định của thiết bị, sau đó mở lại WPlace để mua Droplets.",
  Le = (r = {}, t = {}) => {
    const e = t.locale ?? Y();
    return e === "en" ? je() : e === "pt" ? Ae() : e === "ch" ? Ie() : e === "de" ? Se() : e === "es" ? Oe() : e === "fr" ? Ne() : e === "it" ? Te() : e === "jp" ? Be() : e === "pl" ? Ee() : e === "ru" ? Ge() : e === "uk" ? Ce() : De()
  },
  ze = () => "Play Billing not supported.",
  Re = () => "Play Billing não suportado.",
  Ue = () => "不支持 Play Billing。",
  xe = () => "Play Billing wird nicht unterstützt.",
  Fe = () => "Play Billing no es compatible.",
  Ke = () => "Play Billing non pris en charge.",
  We = () => "Play Billing non supportato.",
  Me = () => "Play Billing はサポートされていません。",
  qe = () => "Play Billing nie jest obsługiwane.",
  Ye = () => "Play Billing не поддерживается.",
  He = () => "Play Billing не підтримується.",
  Ve = () => "Play Billing không được hỗ trợ.",
  pt = (r = {}, t = {}) => {
    const e = t.locale ?? Y();
    return e === "en" ? ze() : e === "pt" ? Re() : e === "ch" ? Ue() : e === "de" ? xe() : e === "es" ? Fe() : e === "fr" ? Ke() : e === "it" ? We() : e === "jp" ? Me() : e === "pl" ? qe() : e === "ru" ? Ye() : e === "uk" ? He() : Ve()
  };

function Je(r) {
  return Math.floor(Math.random() * r)
}
const nt = 14.5;
async function Yr() {
  const r = Xe();
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
    ...$e().pos,
    zoom: nt
  }
}

function $e() {
  const r = Object.entries(Ze),
    t = Je(r.length),
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
  vt = "location";

function Qe(r, t) {
  localStorage.setItem(vt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function Xe() {
  const r = localStorage.getItem(vt);
  if (!r) return;
  const t = JSON.parse(r);
  return t.zoom ?? (t.zoom = nt), t
}

function Hr(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}
var F, K;
class tr {
  constructor() {
    f(this, F, st(-1));
    f(this, K, st([]))
  }
  get idx() {
    return ct(c(this, F))
  }
  set idx(t) {
    lt(c(this, F), t, !0)
  }
  get entries() {
    return ct(c(this, K))
  }
  set entries(t) {
    lt(c(this, K), t)
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
F = new WeakMap, K = new WeakMap;
const Vr = new tr;

function er(r, t) {
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

function rr(r, t = {}) {
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

function nr() {}

function yt(r) {
  return typeof dt.Buffer < "u" && dt.Buffer.isBuffer(r)
}

function ft(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function gt(r) {
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
  et = "[object Object]",
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

function ht(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function Or(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Nr(r, t, e) {
  return L(r, t, void 0, void 0, void 0, void 0, e)
}

function L(r, t, e, n, o, i, s) {
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
    l = e.get(t);
  if (s != null && l != null) return s === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (o) {
      case ur:
        if (r.size !== t.size) return !1;
        for (const [u, d] of r.entries())
          if (!t.has(u) || !L(d, t.get(u), u, r, t, e, n)) return !1;
        return !0;
      case pr: {
        if (r.size !== t.size) return !1;
        const u = Array.from(r.values()),
          d = Array.from(t.values());
        for (let w = 0; w < u.length; w++) {
          const j = u[w],
            _ = d.findIndex(A => L(j, A, void 0, r, t, e, n));
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
        if (yt(r) !== yt(t) || r.length !== t.length) return !1;
        for (let u = 0; u < r.length; u++)
          if (!L(r[u], t[u], u, r, t, e, n)) return !1;
        return !0;
      case fr:
        return r.byteLength !== t.byteLength ? !1 : U(new Uint8Array(r), new Uint8Array(t), e, n);
      case hr:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : U(new Uint8Array(r), new Uint8Array(t), e, n);
      case gr:
        return r.name === t.name && r.message === t.message;
      case et: {
        if (!(U(r.constructor, t.constructor, e, n) || ht(r) && ht(t))) return !1;
        const u = [...Object.keys(r), ...ft(r)],
          d = [...Object.keys(t), ...ft(t)];
        if (u.length !== d.length) return !1;
        for (let w = 0; w < u.length; w++) {
          const j = u[w],
            _ = r[j];
          if (!Object.hasOwn(t, j)) return !1;
          const A = t[j];
          if (!L(_, A, j, r, t, e, n)) return !1
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
const kt = typeof window < "u" ? window : void 0;

function Br(r) {
  let t = r.activeElement;
  for (; t != null && t.shadowRoot;) {
    const e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var E, W;
class Er {
  constructor(t = {}) {
    f(this, E);
    f(this, W);
    const {
      window: e = kt,
      document: n = e == null ? void 0 : e.document
    } = t;
    e !== void 0 && (y(this, E, n), y(this, W, bt(o => {
      const i = rt(e, "focusin", o),
        s = rt(e, "focusout", o);
      return () => {
        i(), s()
      }
    })))
  }
  get current() {
    var t;
    return (t = c(this, W)) == null || t.call(this), c(this, E) ? Br(c(this, E)) : null
  }
}
E = new WeakMap, W = new WeakMap;
new Er;

function Gr(r, t) {
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
  Gr(t, () => {
    const l = Array.isArray(r) ? r.map(d => d()) : r();
    if (!i) {
      i = !0, s = l;
      return
    }
    const u = zt(() => e(l, s));
    return s = l, u
  })
}

function Cr(r, t, e) {
  jt(r, "post", t, e)
}

function Dr(r, t, e) {
  jt(r, "pre", t, e)
}
Cr.pre = Dr;

function Lr(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function At(r, t, e, n, o, i) {
  if (r === null || typeof r != "object") return r;
  const s = Object.getPrototypeOf(r);
  if (s !== null && s !== Object.prototype && !Array.isArray(r)) return r;
  let l = e.get(r);
  return l || (l = new Proxy(r, {
    get: (u, d) => (n == null || n(), At(Reflect.get(u, d), t, e, n, o, i)),
    set: (u, d, w) => (o == null || o(), Reflect.set(u, d, w), i(t), !0)
  }), e.set(r, l)), l
}
var v, k, G, I, B, O, H, P, N, C, M, q, V, m, z, R, ot, St;
class It {
  constructor(t, e, n = {}) {
    f(this, m);
    f(this, v);
    f(this, k);
    f(this, G);
    f(this, I);
    f(this, B);
    f(this, O);
    f(this, H, new WeakMap);
    f(this, P);
    f(this, N);
    f(this, C);
    f(this, M);
    f(this, q);
    f(this, V, t => {
      var e;
      t.key !== c(this, k) || t.newValue === null || (y(this, v, b(this, m, z).call(this, t.newValue)), (e = c(this, O)) == null || e.call(this))
    });
    const {
      storage: o = "local",
      serializer: i = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: s = !0,
      connected: l = !0
    } = n, u = "window" in n ? n.window : kt;
    if (y(this, v, e), y(this, k, t), y(this, G, i), y(this, P, l), y(this, C, u), y(this, M, s), y(this, q, o), u === void 0) return;
    const d = Lr(o, u);
    y(this, I, d);
    const w = d.getItem(t);
    w !== null ? y(this, v, b(this, m, z).call(this, w)) : l && b(this, m, R).call(this, e), b(this, m, ot).call(this)
  }
  get current() {
    var e, n, o, i;
    (e = c(this, B)) == null || e.call(this);
    let t;
    if (c(this, P)) {
      const s = (n = c(this, I)) == null ? void 0 : n.getItem(c(this, k));
      t = s ? b(this, m, z).call(this, s) : c(this, v)
    } else t = c(this, v);
    return At(t, t, c(this, H), (o = c(this, B)) == null ? void 0 : o.bind(this), (i = c(this, O)) == null ? void 0 : i.bind(this), b(this, m, R).bind(this))
  }
  set current(t) {
    var e;
    b(this, m, R).call(this, t), (e = c(this, O)) == null || e.call(this)
  }
  get connected() {
    return c(this, P)
  }
  disconnect() {
    var e, n;
    if (!c(this, P)) return;
    const t = (e = c(this, I)) == null ? void 0 : e.getItem(c(this, k));
    t && y(this, v, b(this, m, z).call(this, t)), y(this, P, !1), (n = c(this, I)) == null || n.removeItem(c(this, k)), b(this, m, St).call(this)
  }
  connect() {
    c(this, P) || (y(this, P, !0), b(this, m, R).call(this, c(this, v)), b(this, m, ot).call(this))
  }
}
v = new WeakMap, k = new WeakMap, G = new WeakMap, I = new WeakMap, B = new WeakMap, O = new WeakMap, H = new WeakMap, P = new WeakMap, N = new WeakMap, C = new WeakMap, M = new WeakMap, q = new WeakMap, V = new WeakMap, m = new WeakSet, z = function(t) {
  try {
    return c(this, G).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${c(this,k)}"`, e);
    return
  }
}, R = function(t) {
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
  !c(this, C) || !c(this, P) || y(this, B, bt(t => (y(this, O, t), y(this, N, c(this, P) && c(this, M) && c(this, q) === "local" ? rt(c(this, C), "storage", c(this, V)) : void 0), () => {
    var e;
    (e = c(this, N)) == null || e.call(this), y(this, N, void 0), y(this, O, void 0)
  })))
}, St = function() {
  var t;
  (t = c(this, N)) == null || t.call(this), y(this, N, void 0), y(this, B, void 0)
};
class x extends Promise {
  constructor(e) {
    let n;
    super((s, l) => {
      n = {
        resolve: i("fulfilled", s),
        reject: i("rejected", l)
      }, e == null || e(n.resolve, n.reject)
    });
    h(this, "resolvers");
    h(this, "state", {
      status: "pending"
    });
    this.resolvers = n;
    const o = this;

    function i(s, l) {
      return function(...d) {
        return o.state.status === "pending" && (o.state = o.mountStateByStatus(s, d[0])), l(...d)
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
var at = (r => (r.Play = "https://play.google.com/billing", r))(at || {});

function zr(r) {
  return rr(r)
}

function mt(r) {
  return zr(function(...e) {
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
    return p.markViewed(), Rt(Ut("/payment/success-v3") + `?droplets=${t}`, {
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
    throw (n = a.error) == null || n.call(a, ...t), e.forEach(o => Tt.error(o)), new D(t.length === 1 ? e[0] : e.join(`
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
      const n = a.PLAY_BILLING_NOT_AVAILABLE.find(o => Tr(wt(t), wt(o)));
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
    var j;
    a.twaGuard();
    const e = X(t);
    if (!(e != null && e.productId)) throw new D("No sku config or productId found");
    if (!((j = tt.data) != null && j.id)) throw new D("No user id");
    const n = await a.createPaymentBySkuId(t),
      o = g.start(),
      s = await n.show().catch(a.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var _;
        return (_ = g.finish) == null ? void 0 : _.call(g, o)
      }),
      l = s == null ? void 0 : s.toJSON();
    let u = "unknown";
    return l != null && l.details.purchaseToken ? d(u) : d("fail", new D("Play Billing returned no purchase token")), {
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
        return await d("success"), await a.refresh(), g.openCheckoutDialog($)
      } catch ($) {
        await d("fail", $)
      }
    }
  }
  static refresh() {
    return a.twaGuard(), tt.refresh()
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
    const e = X(t.sku);
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
    return !!(tt.data && a.service && a.forceTWA.current !== !1)
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
          o = ((t = er(e, i => i.status).paid) == null ? void 0 : t.reduce((i, s) => i + s.droplets, 0)) ?? 0;
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
    return t ? (await Q.listPlayPurchaseHistory()).purchases.sort((s, l) => Date.parse(l.updatedAt) - Date.parse(s.updatedAt)).filter(s => Date.parse(s.updatedAt) > t) : []
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
    return Et() === "Samsung Internet"
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
      value: ((o = X(t)) == null ? void 0 : o.price) * Gt / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
J = new WeakMap, h(a, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), h(a, "forceTWA", new It("twa:force_twa", void 0, {
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
  printError: Qt(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: ke(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: Le(),
  name: "AbortError",
  message: "Invalid state."
}, a.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, a.ERRORS.GENERIC_NOT_SUPPORTED]), h(a, "loadMapSKUs", mt(async () => {
  var i, s;
  if (!S()) return;
  a.twaGuard();
  const t = Object.values(Ct.products).filter(l => "lookupKey" in l).map(l => l.lookupKey),
    e = await ((i = a.loadService) == null ? void 0 : i.call(a).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    n = await (e == null ? void 0 : e.getDetails(t).catch(a.setAsPlayBillingBlockedErrorIfNecessary)),
    o = new Map(n == null ? void 0 : n.map(l => [l.itemId, l]));
  return (s = a.mapSKUs) != null && s.size || (a.mapSKUs = o), o
})), h(a, "loadService", mt(() => {
  var t, e, n;
  return (n = (e = (t = a.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, at.Play)) == null ? void 0 : n.then(o => a.service ?? (a.service = o)).then(o => (o && (a.forceTWA.current = !0), o))
})), f(a, J, new Set([1, !0].map(String))), h(a, "onInit", async t => {
  a.loadService(), a.checkIfShouldForceTWA(), g.preventNavigationInTWAIfInCheckout(t)
});
let T = a;

function S() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function Jr() {
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
          Date.now() - i > 5 * _t.minute && window.location.reload()
        }
      },
      n = () => {
        localStorage.setItem(r, Date.now().toString());
        const o = Pt.map;
        if (o) {
          const i = o.getCenter(),
            s = o.getZoom();
          Qe(i, s)
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
  g as T, T as a, Qe as b, Hr as c, Ze as d, Yr as g, S as i, Vr as l, Le as p, Jr as s, Cr as w
};