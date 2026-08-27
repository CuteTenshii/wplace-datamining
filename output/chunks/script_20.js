var Ot = Object.defineProperty;
var ot = r => {
  throw TypeError(r)
};
var vt = (r, t, e) => t in r ? Ot(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var y = (r, t, e) => vt(r, typeof t != "symbol" ? t + "" : t, e),
  Q = (r, t, e) => t.has(r) || ot("Cannot " + e);
var u = (r, t, e) => (Q(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  p = (r, t, e) => t.has(r) ? ot("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e),
  g = (r, t, e, n) => (Q(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e),
  A = (r, t, e) => (Q(r, t, "access private method"), e);
import {
  T as mt,
  m as et,
  g as wt,
  t as jt,
  W as D,
  a as X,
  n as W,
  u as _,
  A as Nt,
  G as St,
  S as Tt
} from "./DH3WiCeb.js";
import {
  e as it,
  i as at,
  h as ct,
  bu as kt,
  bQ as Et,
  aR as ut
} from "./D5GL_E7i.js";
import {
  g as Bt
} from "./CaSoEX0R.js";
import {
  r as Lt
} from "./D9qabHo7.js";
import {
  d as Ct
} from "./DT1Yp-1-.js";
import {
  c as Rt
} from "./BATewRf7.js";
import {
  e as Ut
} from "./DHnjfrE5.js";
import {
  m as B
} from "./XL5Wf48w.js";
import "./BvZMA6BE.js";

function Dt(r) {
  return Math.floor(Math.random() * r)
}
const rt = 14.5,
  xt = 0,
  zt = 24;
async function De() {
  const r = Kt();
  if (r) return r;
  try {
    if ((await navigator.permissions.query({
        name: "geolocation"
      })).state === "granted") {
      const e = await new Promise((n, s) => navigator.geolocation.getCurrentPosition(i => n(i), i => s(i)));
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
    ...Ft().pos,
    zoom: rt
  }
}

function Ft() {
  const r = Object.entries(Mt),
    t = Dt(r.length),
    [e, n] = r[t];
  return {
    city: e,
    pos: n
  }
}
const Mt = {
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

function Gt(r, t) {
  localStorage.setItem(bt, JSON.stringify({
    ...r,
    zoom: t
  }))
}

function Kt() {
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
    zoom: s
  } = t;
  if (!(typeof e != "number" || typeof n != "number" || !qt({
      lat: e,
      lng: n
    }))) return {
    lat: e,
    lng: n,
    zoom: typeof s == "number" && Ht(s) ? s : rt
  }
}

function qt(r) {
  return r.lat >= -90 && r.lat <= 90 && r.lng >= -180 && r.lng <= 180
}

function Ht(r) {
  return Number.isFinite(r) && r >= xt && r <= zt
}
var K, q;
class Yt {
  constructor() {
    p(this, K, it(-1));
    p(this, q, it([]))
  }
  get idx() {
    return at(u(this, K))
  }
  set idx(t) {
    ct(u(this, K), t, !0)
  }
  get entries() {
    return at(u(this, q))
  }
  set entries(t) {
    ct(u(this, q), t)
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
K = new WeakMap, q = new WeakMap;
const xe = new Yt;

function $t(r, t) {
  const e = {};
  for (let n = 0; n < r.length; n++) {
    const s = r[n],
      i = t(s, n, r);
    Object.hasOwn(e, i) || (e[i] = []), e[i].push(s)
  }
  return e
}
const lt = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
  return this
})();

function Jt(r, t = {}) {
  const {
    cache: e = new Map,
    getCacheKey: n
  } = t, s = function(i) {
    const c = n ? n(i) : i;
    if (e.has(c)) return e.get(c);
    const a = r.call(this, i);
    return e.set(c, a), a
  };
  return s.cache = e, s
}

function Vt() {}

function dt(r) {
  return typeof lt.Buffer < "u" && lt.Buffer.isBuffer(r)
}

function ft(r) {
  return Object.getOwnPropertySymbols(r).filter(t => Object.prototype.propertyIsEnumerable.call(r, t))
}

function gt(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r)
}
const Zt = "[object RegExp]",
  Qt = "[object String]",
  Xt = "[object Number]",
  Wt = "[object Boolean]",
  _t = "[object Symbol]",
  te = "[object Date]",
  ee = "[object Map]",
  re = "[object Set]",
  ne = "[object Array]",
  se = "[object Function]",
  oe = "[object ArrayBuffer]",
  tt = "[object Object]",
  ie = "[object Error]",
  ae = "[object DataView]",
  ce = "[object Uint8Array]",
  ue = "[object Uint8ClampedArray]",
  le = "[object Uint16Array]",
  de = "[object Uint32Array]",
  fe = "[object BigUint64Array]",
  ge = "[object Int8Array]",
  he = "[object Int16Array]",
  pe = "[object Int32Array]",
  ye = "[object BigInt64Array]",
  me = "[object Float32Array]",
  we = "[object Float64Array]";

function ht(r) {
  if (!r || typeof r != "object") return !1;
  const t = Object.getPrototypeOf(r);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1
}

function be(r, t) {
  return r === t || Number.isNaN(r) && Number.isNaN(t)
}

function Ie(r, t, e) {
  return x(r, t, void 0, void 0, void 0, void 0, e)
}

function x(r, t, e, n, s, i, c) {
  const a = c(r, t, e, n, s, i);
  if (a !== void 0) return a;
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
      return M(r, t, i, c)
  }
  return M(r, t, i, c)
}

function M(r, t, e, n) {
  if (Object.is(r, t)) return !0;
  let s = gt(r),
    i = gt(t);
  if (s === "[object Arguments]" && (s = tt), i === "[object Arguments]" && (i = tt), s !== i) return !1;
  switch (s) {
    case Qt:
      return r.toString() === t.toString();
    case Xt:
      return be(r.valueOf(), t.valueOf());
    case Wt:
    case te:
    case _t:
      return Object.is(r.valueOf(), t.valueOf());
    case Zt:
      return r.source === t.source && r.flags === t.flags;
    case se:
      return r === t
  }
  e = e ?? new Map;
  const c = e.get(r),
    a = e.get(t);
  if (c != null && a != null) return c === t;
  e.set(r, t), e.set(t, r);
  try {
    switch (s) {
      case ee:
        if (r.size !== t.size) return !1;
        for (const [l, f] of r.entries())
          if (!t.has(l) || !x(f, t.get(l), l, r, t, e, n)) return !1;
        return !0;
      case re: {
        if (r.size !== t.size) return !1;
        const l = Array.from(r.values()),
          f = Array.from(t.values());
        for (let w = 0; w < l.length; w++) {
          const v = l[w],
            b = f.findIndex(j => x(v, j, void 0, r, t, e, n));
          if (b === -1) return !1;
          f.splice(b, 1)
        }
        return !0
      }
      case ne:
      case ce:
      case ue:
      case le:
      case de:
      case fe:
      case ge:
      case he:
      case pe:
      case ye:
      case me:
      case we:
        if (dt(r) !== dt(t) || r.length !== t.length) return !1;
        for (let l = 0; l < r.length; l++)
          if (!x(r[l], t[l], l, r, t, e, n)) return !1;
        return !0;
      case oe:
        return r.byteLength !== t.byteLength ? !1 : M(new Uint8Array(r), new Uint8Array(t), e, n);
      case ae:
        return r.byteLength !== t.byteLength || r.byteOffset !== t.byteOffset ? !1 : M(new Uint8Array(r), new Uint8Array(t), e, n);
      case ie:
        return r.name === t.name && r.message === t.message;
      case tt: {
        if (!(M(r.constructor, t.constructor, e, n) || ht(r) && ht(t))) return !1;
        const l = [...Object.keys(r), ...ft(r)],
          f = [...Object.keys(t), ...ft(t)];
        if (l.length !== f.length) return !1;
        for (let w = 0; w < l.length; w++) {
          const v = l[w],
            b = r[v];
          if (!Object.hasOwn(t, v)) return !1;
          const j = t[v];
          if (!x(b, j, v, r, t, e, n)) return !1
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

function Ae(r, t) {
  return Ie(r, t, Vt)
}

function Pe(r, t) {
  switch (r) {
    case "local":
      return t.localStorage;
    case "session":
      return t.sessionStorage
  }
}

function It(r, t, e, n, s, i) {
  if (r === null || typeof r != "object") return r;
  const c = Object.getPrototypeOf(r);
  if (c !== null && c !== Object.prototype && !Array.isArray(r)) return r;
  let a = e.get(r);
  return a || (a = new Proxy(r, {
    get: (l, f) => (n == null || n(), It(Reflect.get(l, f), t, e, n, s, i)),
    set: (l, f, w) => (s == null || s(), Reflect.set(l, f, w), i(t), !0)
  }), e.set(r, a)), a
}
var P, O, R, N, C, T, $, I, k, U, H, Y, J, m, z, F, nt, Pt;
class At {
  constructor(t, e, n = {}) {
    p(this, m);
    p(this, P);
    p(this, O);
    p(this, R);
    p(this, N);
    p(this, C);
    p(this, T);
    p(this, $, new WeakMap);
    p(this, I);
    p(this, k);
    p(this, U);
    p(this, H);
    p(this, Y);
    p(this, J, t => {
      var e;
      t.key !== u(this, O) || t.newValue === null || (g(this, P, A(this, m, z).call(this, t.newValue)), (e = u(this, T)) == null || e.call(this))
    });
    const {
      storage: s = "local",
      serializer: i = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs: c = !0,
      connected: a = !0
    } = n, l = "window" in n ? n.window : Ct;
    if (g(this, P, e), g(this, O, t), g(this, R, i), g(this, I, a), g(this, U, l), g(this, H, c), g(this, Y, s), l === void 0) return;
    const f = Pe(s, l);
    g(this, N, f);
    const w = f.getItem(t);
    w !== null ? g(this, P, A(this, m, z).call(this, w)) : a && A(this, m, F).call(this, e), A(this, m, nt).call(this)
  }
  get current() {
    var e, n, s, i;
    (e = u(this, C)) == null || e.call(this);
    let t;
    if (u(this, I)) {
      const c = (n = u(this, N)) == null ? void 0 : n.getItem(u(this, O));
      t = c ? A(this, m, z).call(this, c) : u(this, P)
    } else t = u(this, P);
    return It(t, t, u(this, $), (s = u(this, C)) == null ? void 0 : s.bind(this), (i = u(this, T)) == null ? void 0 : i.bind(this), A(this, m, F).bind(this))
  }
  set current(t) {
    var e;
    A(this, m, F).call(this, t), (e = u(this, T)) == null || e.call(this)
  }
  get connected() {
    return u(this, I)
  }
  disconnect() {
    var e, n;
    if (!u(this, I)) return;
    const t = (e = u(this, N)) == null ? void 0 : e.getItem(u(this, O));
    t && g(this, P, A(this, m, z).call(this, t)), g(this, I, !1), (n = u(this, N)) == null || n.removeItem(u(this, O)), A(this, m, Pt).call(this)
  }
  connect() {
    u(this, I) || (g(this, I, !0), A(this, m, F).call(this, u(this, P)), A(this, m, nt).call(this))
  }
}
P = new WeakMap, O = new WeakMap, R = new WeakMap, N = new WeakMap, C = new WeakMap, T = new WeakMap, $ = new WeakMap, I = new WeakMap, k = new WeakMap, U = new WeakMap, H = new WeakMap, Y = new WeakMap, J = new WeakMap, m = new WeakSet, z = function(t) {
  try {
    return u(this, R).deserialize(t)
  } catch (e) {
    console.error(`Error when parsing "${t}" from persisted store "${u(this,O)}"`, e);
    return
  }
}, F = function(t) {
  var e;
  if (!u(this, I)) {
    g(this, P, t);
    return
  }
  try {
    t !== void 0 && ((e = u(this, N)) == null || e.setItem(u(this, O), u(this, R).serialize(t)))
  } catch (n) {
    console.error(`Error when writing value from persisted store "${u(this,O)}" to ${u(this,N)}`, n)
  }
}, nt = function() {
  !u(this, U) || !u(this, I) || g(this, C, Rt(t => (g(this, T, t), g(this, k, u(this, I) && u(this, H) && u(this, Y) === "local" ? kt(u(this, U), "storage", u(this, J)) : void 0), () => {
    var e;
    (e = u(this, k)) == null || e.call(this), g(this, k, void 0), g(this, T, void 0)
  })))
}, Pt = function() {
  var t;
  (t = u(this, k)) == null || t.call(this), g(this, k, void 0), g(this, C, void 0)
};
class G extends Promise {
  constructor(e) {
    let n;
    const s = {
      current: {
        status: "pending"
      }
    };
    super((c, a) => {
      n = {
        resolve: i("fulfilled", c),
        reject: i("rejected", a)
      }, e == null || e(n.resolve, n.reject)
    });
    y(this, "resolvers");
    y(this, "stateHolder");
    this.resolvers = n, this.stateHolder = s;

    function i(c, a) {
      return function(...f) {
        return s.current.status === "pending" && (s.current = Oe(c, f[0], s.current)), a(...f)
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
    const n = new G;
    return G.trap(e, n), n
  }
  static async trap(e, n) {
    try {
      return n.resolve(await e)
    } catch (s) {
      n.reject(s)
    }
  }
  static delay(e) {
    const n = G.create(void 0),
      s = setTimeout(n.resolve, e);
    return n.catch(() => clearTimeout(s)), n
  }
}

function Oe(r, t, e) {
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
var st = (r => (r.Play = "https://play.google.com/billing", r))(st || {});

function ve(r) {
  return Jt(r)
}

function pt(r) {
  return ve(function(...e) {
    return G.create(r(...e))
  })
}
var je = (r => (r.Fail = "fail", r.Success = "success", r.Wait = "unknown", r))(je || {});
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
    return S() && ((t = d.checkout) == null ? void 0 : t.startedAt) && Date.now() - ((e = d.checkout) == null ? void 0 : e.startedAt) <= 3 * mt.day
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
    S() && (d.addFocusListener(t), d.addNavigationListener(t))
  }
  static addFocusListener(t) {
    window.addEventListener("focus", () => {
      L.recover()
    }, {
      signal: t.signal
    })
  }
  static addNavigationListener(t) {
    const e = window.navigation;
    e && e.addEventListener("navigate", n => {
      var s;
      (!document.hasFocus() && d.memoryCheckout || d.isRunning()) && (n.preventDefault(), (s = L.log) == null || s.call(L, "intercepted", new Error().stack))
    }, {
      signal: t.signal
    })
  }
  static openCheckoutDialog(t) {
    d.markViewed();
    const e = et(Array.isArray(t) ? t : [t]).map(n => `${n.currency}=${encodeURIComponent(String(n.amount))}`).join("&");
    if (e) return Bt(Lt("/payment/success-v3") + `?${e}`, {
      replaceState: !0
    })
  }
  static openPendingDialog() {
    wt.pendingHistoryDialogOpen = !0
  }
};
y(d, "checkoutState", new At("twa:checkout", void 0, {
  syncTabs: !1,
  storage: "local"
})), y(d, "memoryCheckout");
let h = d;

function yt(r) {
  const t = r;
  return {
    name: t == null ? void 0 : t.name,
    message: t == null ? void 0 : t.message
  }
}
var V;
const o = class o {
  static get playBillingBlockedError() {
    return o.errors.at(-1)
  }
  static get playBillingBlocked() {
    return !!o.errors.at(-1)
  }
  static get log() {}
  static get error() {}
  static get warn() {}
  static toastError(...t) {
    var n;
    const e = t.map(s => JSON.stringify(s));
    throw (n = o.error) == null || n.call(o, ...t), e.forEach(s => jt.error(s)), new D(t.length === 1 ? e[0] : e.join(`
`))
  }
  static twaGuard() {}
  static createPaymentRequest(t, e) {
    const n = {
      sku: t,
      obfuscatedAccountId: e
    };
    return new PaymentRequest([{
      supportedMethods: st.Play,
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
      const n = o.PLAY_BILLING_NOT_AVAILABLE.find(s => Ae(yt(t), yt(s)));
      if (!n) return;
      if ((n == null ? void 0 : n.kind) === "not-twa-context") {
        o.forceTWA.current = !1;
        return
      }
      o.errors.push(n)
    } finally {
      throw e || t
    }
  }
  static async getObfuscatedAccountId() {
    const t = await X.getPlayAccountId().then(({
      accountId: e
    }) => e);
    if (!t) throw o.setAsPlayBillingBlockedErrorIfNecessary(o.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION), new D("No hash account id");
    return t
  }
  static async createPaymentBySkuId(t) {
    const e = await o.getObfuscatedAccountId();
    return o.createPaymentRequest(t, e)
  }
  static async createPayment(t) {
    var v;
    o.twaGuard();
    const e = W(t);
    if (!(e != null && e.productId)) throw new D("No sku config or productId found");
    if (!((v = _.data) != null && v.id)) throw new D("No user id");
    const n = await o.createPaymentBySkuId(t),
      s = h.start(),
      c = await n.show().catch(o.setAsPlayBillingBlockedErrorIfNecessary).finally(() => {
        var b;
        return (b = h.finish) == null ? void 0 : b.call(h, s)
      }),
      a = c == null ? void 0 : c.toJSON();
    let l = "unknown";
    return a != null && a.details.purchaseToken ? f(l) : f("fail", new D("Play Billing returned no purchase token")), {
      setStatus: f,
      status: l,
      out: a,
      verify: w
    };
    async function f(b, j) {
      if (l = b, await (c == null ? void 0 : c.complete(b).catch(() => {})), j) throw j
    }
    async function w() {
      var b, j;
      if ((b = a == null ? void 0 : a.details) != null && b.purchaseToken) try {
        const {
          grant: Z
        } = await o.verifyBySKU({
          sku: t,
          token: (j = a == null ? void 0 : a.details) == null ? void 0 : j.purchaseToken
        });
        return await f("success"), await o.refresh(), h.openCheckoutDialog(Z)
      } catch (Z) {
        await f("fail", Z)
      }
    }
  }
  static refresh() {
    return o.twaGuard(), _.refresh()
  }
  static async dispatchPendingPurchases() {
    o.twaGuard();
    const t = {
      credited: [],
      pending: 0
    };
    try {
      if (!o.service) return t;
      const e = await o.service.listPurchases().catch(() => []);
      if (!e.length) return t;
      const n = await Promise.allSettled(e.map(a => o.verifyBySKU({
          sku: a.itemId,
          token: a.purchaseToken
        }))),
        s = [];
      let i = 0;
      for (const a of n) a.status === "fulfilled" ? s.push(a.value.grant) : i++;
      const c = et(s);
      return c.length > 0 && await o.refresh(), {
        credited: c,
        pending: i
      }
    } catch {
      return t
    }
  }
  static async autoRecoverPendingPurchases() {
    var s;
    if (o.twaGuard(), await o.loadService(), !h.shouldRecover()) return;
    const {
      credited: t,
      pending: e
    } = await o.dispatchPendingPurchases().catch(() => ({
      credited: [],
      pending: 0
    }));
    if (t.length > 0) {
      h.openCheckoutDialog(t);
      return
    }
    if (e > 0) {
      h.openPendingDialog();
      return
    }
    const n = (s = h.checkout) == null ? void 0 : s.state;
    if ((n == null ? void 0 : n.type) === "finished" && !n.view) {
      n.droplets && h.openCheckoutDialog({
        currency: "droplets",
        amount: n.droplets
      });
      return
    }
    h.clear()
  }
  static verifyBySKU(t) {
    o.twaGuard();
    const e = W(t.sku);
    return X.verifyPlayPurchase({
      productId: Number(e.productId),
      purchaseToken: t.token
    })
  }
  static getGlobal() {
    return window
  }
  static isTWA() {
    return !!(S() && o.forceTWA.current !== !1 && (o.forceTWA.current || o.service))
  }
  static isTWALoaded() {
    return !!(_.data && o.service && o.forceTWA.current !== !1)
  }
  static async load() {
    var t;
    if (S()) {
      try {
        await this.loadMapSKUs()
      } catch (e) {
        (t = o.log) == null || t.call(o, e)
      }
      o.service && (await o.recover(), o.forceTWA.current = !0)
    }
  }
  static async recover() {
    var t;
    if (h.shouldRecover()) {
      await o.loadService();
      try {
        const e = await o.getPurchasesAfter(),
          n = $t(e, i => i.status),
          s = et(((t = n.paid) == null ? void 0 : t.map(i => i.grant)) ?? []);
        if (s.length > 0) {
          await h.openCheckoutDialog(s);
          return
        }
        if (e != null && e.length) {
          await h.openPendingDialog();
          return
        }
      } finally {
        await o.refresh()
      }
    }
  }
  static async getPurchasesAfter() {
    var s, i;
    const t = ((s = h.checkout) == null ? void 0 : s.state.view) ?? ((i = h.checkout) == null ? void 0 : i.state.startedAt);
    return t ? (await X.listPlayPurchaseHistory()).purchases.sort((c, a) => Date.parse(a.updatedAt) - Date.parse(c.updatedAt)).filter(c => Date.parse(c.updatedAt) > t) : []
  }
  static get hasTWAFlag() {
    const t = new URLSearchParams(window.location.search).get("twa") ?? void 0;
    return u(this, V).has(t)
  }
  static checkIfShouldForceTWA() {
    var e, n;
    if (!S()) {
      o.forceTWA.current = !1;
      return
    }
    if (this.hasTWAFlag) {
      o.forceTWA.current = !0;
      const s = new URL(location.href);
      s.search = (s.searchParams.delete("twa"), s.searchParams.toString()), window.history.replaceState({}, "", s.href)
    }
    const t = [document.referrer, (n = (e = window == null ? void 0 : window.opener) == null ? void 0 : e.document) == null ? void 0 : n.referrer].filter(s => s);
    if (t != null && t.length)
      for (const s of t) {
        const i = s.match(o.pattern),
          c = i == null ? void 0 : i[1];
        c && c === Nt.appName && (o.forceTWA.current = !0)
      }
  }
  static async loadTWA() {
    S() && await o.load()
  }
  static isSamsung() {
    return Ut() === "Samsung Internet"
  }
  static nativeFormat(t) {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: t.price.currency
    }).format(+t.price.value)
  }
  static printPriceBySKU(t) {
    var s;
    const e = o.mapSKUs.get(t);
    if ((e == null ? void 0 : e.price) != null) return this.nativeFormat(e);
    const n = {
      value: ((s = W(t)) == null ? void 0 : s.price) * St / 100,
      currency: "USD"
    };
    return [n.currency, Number(n.value).toFixed(2)].join(" ")
  }
};
V = new WeakMap, y(o, "pattern", /^android-app:[/][/]([^/?]+)(.+)?$/), y(o, "forceTWA", new At("twa:force_twa", void 0, {
  syncTabs: !1,
  storage: "session"
})), y(o, "POOLING_TIME", 10), y(o, "errors", []), y(o, "service"), y(o, "mapSKUs", new Map), y(o, "referrer", []), y(o, "ERRORS", {
  PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION: {
    kind: "billing-blocked",
    printError: B.payment_play_no_account_description(),
    name: "NO_ACCOUNT_ID",
    message: "NO_ACCOUNT_ID",
    contexts: []
  },
  GENERIC_NOT_SUPPORTED: {
    kind: "billing-blocked",
    printError: B.payment_play_no_account_description(),
    name: "NotSupportedError",
    message: 'The payment method "https://play.google.com/billing" is not supported.'
  }
}), y(o, "PLAY_BILLING_NOT_AVAILABLE", [{
  kind: "not-twa-context",
  printError: B.payment_play_unsupported_description(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Payment method https://play.google.com/billing is only supported in Trusted Web Activity.'
}, {
  kind: "not-twa-context",
  printError: B.payment_play_unsupported_description(),
  name: "NotSupportedError",
  message: 'The payment method "https://play.google.com/billing" is not supported. Unable to download payment manifest "https://play.google.com/billing". HTTP 403 Forbidden.'
}, {
  kind: "not-twa-context",
  printError: B.payment_play_download_description(),
  name: "OperationError",
  message: "unsupported context"
}, {
  kind: "billing-blocked",
  printError: B.payment_play_reload_description(),
  name: "SecurityError",
  message: "PaymentRequest.show() calls after the first (per page load) require either transient user activation or delegated payment request capability."
}, {
  kind: "billing-blocked",
  printError: B.payment_play_unavailable_description(),
  name: "AbortError",
  message: "Invalid state."
}, o.ERRORS.PAYMENT_PLAY_NO_ACCOUNT_DESCRIPTION, o.ERRORS.GENERIC_NOT_SUPPORTED]), y(o, "loadMapSKUs", pt(async () => {
  var i, c;
  if (!S()) return;
  o.twaGuard();
  const t = Object.values(Tt.products).filter(a => "lookupKey" in a).map(a => a.lookupKey),
    e = await ((i = o.loadService) == null ? void 0 : i.call(o).catch(o.setAsPlayBillingBlockedErrorIfNecessary)),
    n = await (e == null ? void 0 : e.getDetails(t).catch(o.setAsPlayBillingBlockedErrorIfNecessary)),
    s = new Map(n == null ? void 0 : n.map(a => [a.itemId, a]));
  return (c = o.mapSKUs) != null && c.size || (o.mapSKUs = s), s
})), y(o, "loadService", pt(() => {
  var t, e, n;
  return (n = (e = (t = o.getGlobal()).getDigitalGoodsService) == null ? void 0 : e.call(t, st.Play)) == null ? void 0 : n.then(s => o.service ?? (o.service = s)).then(s => (s && (o.forceTWA.current = !0), s))
})), p(o, V, new Set([1, !0].map(String))), y(o, "onInit", async t => {
  o.loadService(), o.checkIfShouldForceTWA(), h.preventNavigationInTWAIfInCheckout(t)
});
let L = o;
const E = Et({
  status: "unavailable"
});
async function ze() {
  const r = ut(E);
  if (r.status === "available") {
    E.set({
      status: "prompting"
    });
    try {
      return await r.event.prompt()
    } finally {
      ut(E).status === "prompting" && E.set({
        status: "unavailable"
      })
    }
  }
}

function S() {
  return window.matchMedia("(display-mode: standalone)").matches || "standalone" in window.navigator && window.navigator.standalone === !0
}

function Fe() {
  const r = "last-unfocus",
    t = new AbortController,
    e = window.pwaInstallPrompt;
  if (window.pwaInstallPrompt = void 0, e && E.set({
      status: "available",
      event: e
    }), window.addEventListener("beforeinstallprompt", n => {
      n.preventDefault(), window.pwaInstallPrompt === n && (window.pwaInstallPrompt = void 0), E.set({
        status: "available",
        event: n
      })
    }, {
      signal: t.signal
    }), window.addEventListener("appinstalled", () => {
      E.set({
        status: "installed"
      })
    }, {
      signal: t.signal
    }), S()) {
    queueMicrotask(async () => {
      await L.onInit(t)
    });
    const n = () => {
        const i = localStorage.getItem(r);
        if (i) {
          const c = parseInt(i, 10);
          Date.now() - c > 5 * mt.minute && window.location.reload()
        }
      },
      s = () => {
        localStorage.setItem(r, Date.now().toString());
        const i = wt.map;
        if (i) {
          const c = i.getCenter(),
            a = i.getZoom();
          Gt(c, a)
        }
      };
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? n() : s()
    }, {
      signal: t.signal
    }), window.addEventListener("pageshow", n, {
      signal: t.signal
    }), window.addEventListener("pagehide", s, {
      signal: t.signal
    })
  }
  return () => {
    t.abort(), E.set({
      status: "unavailable"
    })
  }
}
export {
  je as P, h as T, L as a, Ht as b, Gt as c, ze as d, Mt as e, S as f, De as g, qt as i, xe as l, E as p, Fe as s
};