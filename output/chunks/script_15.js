var un = Object.defineProperty;
var ft = n => {
  throw TypeError(n)
};
var ln = (n, t, e) => t in n ? un(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var w = (n, t, e) => ln(n, typeof t != "symbol" ? t + "" : t, e),
  dn = (n, t, e) => t.has(n) || ft("Cannot " + e);
var p = (n, t, e) => (dn(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  b = (n, t, e) => t.has(n) ? ft("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  h as _n,
  P as ot,
  g as Qe
} from "./BRnlEJuB.js";
import {
  e as S,
  i as k,
  h as O,
  g as Ce,
  bM as fn,
  I as pn,
  L as pt,
  u as ne
} from "./CV6xI6o5.js";
import {
  g as d
} from "./BhCkpOlh.js";
const Z = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  x = globalThis,
  oe = "10.57.0";

function at() {
  return st(x), x
}

function st(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || oe, t[oe] = t[oe] || {}
}

function ct(n, t, e = x) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    i = r[oe] = r[oe] || {};
  return i[n] || (i[n] = t())
}
const hn = "Sentry Logger ",
  ht = {};

function mn(n) {
  if (!("console" in x)) return n();
  const t = x.console,
    e = {},
    r = Object.keys(ht);
  r.forEach(i => {
    const o = ht[i];
    e[i] = t[i], t[i] = o
  });
  try {
    return n()
  } finally {
    r.forEach(i => {
      t[i] = e[i]
    })
  }
}

function gn() {
  lt().enabled = !0
}

function wn() {
  lt().enabled = !1
}

function Kt() {
  return lt().enabled
}

function yn(...n) {
  ut("log", ...n)
}

function bn(...n) {
  ut("warn", ...n)
}

function vn(...n) {
  ut("error", ...n)
}

function ut(n, ...t) {
  Z && Kt() && mn(() => {
    x.console[n](`${hn}[${n}]:`, ...t)
  })
}

function lt() {
  return Z ? ct("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Le = {
    enable: gn,
    disable: wn,
    isEnabled: Kt,
    log: yn,
    warn: bn,
    error: vn
  },
  En = Object.prototype.toString;

function kn(n, t) {
  return En.call(n) === `[object ${t}]`
}

function Tn(n) {
  return kn(n, "Object")
}

function On(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Sn(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    Z && Le.log(`Failed to add non-enumerable property "${String(t)}" to object`, n)
  }
}
let Q;

function Ve(n) {
  if (Q !== void 0) return Q ? Q(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = x;
  return t in e && typeof e[t] == "function" ? (Q = e[t], Q(n)) : (Q = null, n())
}

function Ze() {
  return Ve(() => Math.random())
}

function In() {
  return Ve(() => Date.now())
}

function Nn(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function An() {
  const n = x;
  return n.crypto || n.msCrypto
}
let He;

function zn() {
  return Ze() * 16
}

function ae(n = An()) {
  try {
    if (n != null && n.randomUUID) return Ve(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return He || (He = "10000000100040008000" + 1e11), He.replace(/[018]/g, t => (t ^ (zn() & 15) >> t / 4).toString(16))
}
const Ft = 1e3;

function $t() {
  return In() / Ft
}

function Rn() {
  const {
    performance: n
  } = x;
  if (!(n != null && n.now) || !n.timeOrigin) return $t;
  const t = n.timeOrigin;
  return () => (t + Ve(() => n.now())) / Ft
}
let mt;

function Dn() {
  return (mt ?? (mt = Rn()))()
}

function xn(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Dn(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : ae()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function Gt(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = Gt(r[i], t[i], e - 1));
  return r
}

function gt() {
  return ae()
}

function Pn(n) {
  try {
    const t = x.WeakRef;
    if (typeof t == "function") return new t(n)
  } catch {}
  return n
}

function jn(n) {
  if (n) {
    if (typeof n == "object" && "deref" in n && typeof n.deref == "function") try {
      return n.deref()
    } catch {
      return
    }
    return n
  }
}
const Xe = "_sentrySpan";

function wt(n, t) {
  t ? Sn(n, Xe, Pn(t)) : delete n[Xe]
}

function yt(n) {
  return jn(n[Xe])
}
const Ln = 100;
class Y {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: gt(),
      sampleRand: Ze()
    }
  }
  clone() {
    const t = new Y;
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = {
      ...this._tags
    }, t._attributes = {
      ...this._attributes
    }, t._extra = {
      ...this._extra
    }, t._contexts = {
      ...this._contexts
    }, this._contexts.flags && (t._contexts.flags = {
      values: [...this._contexts.flags.values]
    }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    }, t._propagationContext = {
      ...this._propagationContext
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, wt(t, yt(this)), t
  }
  setClient(t) {
    this._client = t
  }
  setLastEventId(t) {
    this._lastEventId = t
  }
  getClient() {
    return this._client
  }
  lastEventId() {
    return this._lastEventId
  }
  addScopeListener(t) {
    this._scopeListeners.push(t)
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this
  }
  setUser(t) {
    return this._user = t || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    }, this._session && xn(this._session, {
      user: t
    }), this._notifyScopeListeners(), this
  }
  getUser() {
    return this._user
  }
  setConversationId(t) {
    return this._conversationId = t || void 0, this._notifyScopeListeners(), this
  }
  setTags(t) {
    return this._tags = {
      ...this._tags,
      ...t
    }, this._notifyScopeListeners(), this
  }
  setTag(t, e) {
    return this.setTags({
      [t]: e
    })
  }
  setAttributes(t) {
    return this._attributes = {
      ...this._attributes,
      ...t
    }, this._notifyScopeListeners(), this
  }
  setAttribute(t, e) {
    return this.setAttributes({
      [t]: e
    })
  }
  removeAttribute(t) {
    return t in this._attributes && (delete this._attributes[t], this._notifyScopeListeners()), this
  }
  setExtras(t) {
    return this._extra = {
      ...this._extra,
      ...t
    }, this._notifyScopeListeners(), this
  }
  setExtra(t, e) {
    return this._extra = {
      ...this._extra,
      [t]: e
    }, this._notifyScopeListeners(), this
  }
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this
  }
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this
  }
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this
  }
  setContext(t, e) {
    return e === null ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
  }
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
  }
  getSession() {
    return this._session
  }
  update(t) {
    if (!t) return this;
    const e = typeof t == "function" ? t(this) : t,
      r = e instanceof Y ? e.getScopeData() : Tn(e) ? t : void 0,
      {
        tags: i,
        attributes: o,
        extra: c,
        user: u,
        contexts: f,
        level: _,
        fingerprint: T = [],
        propagationContext: g,
        conversationId: A
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...i
    }, this._attributes = {
      ...this._attributes,
      ...o
    }, this._extra = {
      ...this._extra,
      ...c
    }, this._contexts = {
      ...this._contexts,
      ...f
    }, u && Object.keys(u).length && (this._user = u), _ && (this._level = _), T.length && (this._fingerprint = T), g && (this._propagationContext = g), A && (this._conversationId = A), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, wt(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: gt(),
      sampleRand: Ze()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var o;
    const r = typeof e == "number" ? e : Ln;
    if (r <= 0) return this;
    const i = {
      timestamp: $t(),
      ...t,
      message: t.message ? Nn(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(i), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (o = this._client) == null || o.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1]
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this
  }
  addAttachment(t) {
    return this._attachments.push(t), this
  }
  clearAttachments() {
    return this._attachments = [], this
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: yt(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Gt(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || ae();
    if (!this._client) return Z && Le.warn("No client configured on scope - will not capture exception!"), r;
    const i = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: i,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const i = (r == null ? void 0 : r.event_id) || ae();
    if (!this._client) return Z && Le.warn("No client configured on scope - will not capture message!"), i;
    const o = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: o,
      ...r,
      event_id: i
    }, this), i
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || ae();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (Z && Le.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function qn() {
  return ct("defaultCurrentScope", () => new Y)
}

function Un() {
  return ct("defaultIsolationScope", () => new Y)
}
const bt = n => n instanceof Promise && !n[Vt],
  Vt = Symbol("chained PromiseLike"),
  Mn = (n, t, e) => {
    const r = n.then(i => (t(i), i), i => {
      throw e(i), i
    });
    return bt(r) && bt(n) ? r : Bn(n, r)
  },
  Bn = (n, t) => {
    if (!t) return n;
    let e = !1;
    for (const r in n) {
      if (r in t) continue;
      e = !0;
      const i = n[r];
      typeof i == "function" ? Object.defineProperty(t, r, {
        value: (...o) => i.apply(n, o),
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[r] = i
    }
    return e && Object.assign(t, {
      [Vt]: !0
    }), t
  };
class Cn {
  constructor(t, e) {
    let r;
    t ? r = t : r = new Y;
    let i;
    e ? i = e : i = new Y, this._stack = [{
      scope: r
    }], this._isolationScope = i
  }
  withScope(t) {
    const e = this._pushScope();
    let r;
    try {
      r = t(e)
    } catch (i) {
      throw this._popScope(), i
    }
    return On(r) ? Mn(r, () => this._popScope(), () => this._popScope()) : (this._popScope(), r)
  }
  getClient() {
    return this.getStackTop().client
  }
  getScope() {
    return this.getStackTop().scope
  }
  getIsolationScope() {
    return this._isolationScope
  }
  getStackTop() {
    return this._stack[this._stack.length - 1]
  }
  _pushScope() {
    const t = this.getScope().clone();
    return this._stack.push({
      client: this.getClient(),
      scope: t
    }), t
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop()
  }
}

function te() {
  const n = at(),
    t = st(n);
  return t.stack = t.stack || new Cn(qn(), Un())
}

function Kn(n) {
  return te().withScope(n)
}

function Fn(n, t) {
  const e = te();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function vt(n) {
  return te().withScope(() => n(te().getIsolationScope()))
}

function $n() {
  return {
    withIsolationScope: vt,
    withScope: Kn,
    withSetScope: Fn,
    withSetIsolationScope: (n, t) => vt(t),
    getCurrentScope: () => te().getScope(),
    getIsolationScope: () => te().getIsolationScope()
  }
}

function Ht(n) {
  const t = st(n);
  return t.acs ? t.acs : $n()
}

function Gn() {
  const n = at();
  return Ht(n).getCurrentScope()
}

function Vn() {
  const n = at();
  return Ht(n).getIsolationScope()
}

function Hn(n, t) {
  return Gn().captureException(n, void 0)
}

function Wn(n, t) {
  Vn().setContext(n, t)
}
const Yn = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var Jn = "2.0.0";
const h = {
  Awesomium: "awesomium",
  Cef: "cef",
  CefSharp: "cefsharp",
  CoachJS: "coachjs",
  Electron: "electron",
  FMiner: "fminer",
  Geb: "geb",
  NightmareJS: "nightmarejs",
  Phantomas: "phantomas",
  PhantomJS: "phantomjs",
  Rhino: "rhino",
  Selenium: "selenium",
  Sequentum: "sequentum",
  SlimerJS: "slimerjs",
  WebDriverIO: "webdriverio",
  WebDriver: "webdriver",
  HeadlessChrome: "headless_chrome",
  Unknown: "unknown"
};
class v extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, v.prototype)
  }
}

function Qn(n, t) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const i in t) {
    const o = t[i],
      c = o(n);
    let u = {
      bot: !1
    };
    typeof c == "string" ? u = {
      bot: !0,
      botKind: c
    } : c && (u = {
      bot: !0,
      botKind: h.Unknown
    }), e[i] = u, u.bot && (r = u)
  }
  return [e, r]
}
async function Zn(n) {
  const t = {},
    e = Object.keys(n);
  return await Promise.all(e.map(async r => {
    const i = n[r];
    try {
      t[r] = {
        value: await i(),
        state: 0
      }
    } catch (o) {
      o instanceof v ? t[r] = {
        state: o.state,
        error: `${o.name}: ${o.message}`
      } : t[r] = {
        state: -3,
        error: o instanceof Error ? `${o.name}: ${o.message}` : String(o)
      }
    }
  })), t
}

function Xn({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return h.HeadlessChrome;
  if (/electron/i.test(n.value)) return h.Electron;
  if (/slimerjs/i.test(n.value)) return h.SlimerJS
}

function qe(n, t) {
  return n.indexOf(t) !== -1
}

function P(n, t) {
  return n.indexOf(t) !== -1
}

function er(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function Et(n) {
  return Object.getOwnPropertyNames(n)
}

function et(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (qe(n, e)) return !0
    } else if (er(n, i => e.test(i)) != null) return !0;
  return !1
}

function X(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function tr({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (et(n.value, "selenium", "webdriver", "driver")) return h.Selenium
}

function nr({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return h.PhantomJS
}

function rr({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !qe(["webkit", "gecko"], e.value) || r === 39 && !qe(["internet_explorer"], t.value) || r === 33 && !qe(["chromium"], e.value)
}

function ir({
  functionBind: n
}) {
  if (n.state === -2) return h.PhantomJS
}

function or({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return h.HeadlessChrome
}

function ar({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return h.Unknown
}

function sr({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return h.HeadlessChrome
}

function cr({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return h.HeadlessChrome
}

function ur({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return h.HeadlessChrome
}

function lr({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return h.Electron
}

function dr({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return h.Unknown
}

function _r({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return h.PhantomJS;
  if (/Headless/i.test(n.value)) return h.HeadlessChrome;
  if (/Electron/i.test(n.value)) return h.Electron;
  if (/slimerjs/i.test(n.value)) return h.SlimerJS
}

function fr({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return h.HeadlessChrome
}

function pr({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = n.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return h.HeadlessChrome
  }
}

function hr({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return h.Sequentum
}

function mr({
  windowSize: n,
  documentFocus: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = n.value;
  if (t.value && e === 0 && r === 0) return h.HeadlessChrome
}

function gr({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const wr = {
  detectAppVersion: Xn,
  detectDocumentAttributes: tr,
  detectErrorTrace: nr,
  detectEvalLengthInconsistency: rr,
  detectFunctionBind: ir,
  detectLanguagesLengthInconsistency: or,
  detectNotificationPermissions: sr,
  detectPluginsArray: cr,
  detectPluginsLengthInconsistency: ur,
  detectProcess: lr,
  detectUserAgent: _r,
  detectWebDriver: fr,
  detectWebGL: pr,
  detectWindowExternal: hr,
  detectWindowSize: mr,
  detectMimeTypesConsistent: ar,
  detectProductSub: dr,
  detectDistinctiveProperties: gr
};

function yr() {
  const n = navigator.appVersion;
  if (n == null) throw new v(-1, "navigator.appVersion is undefined");
  return n
}

function br() {
  if (document.documentElement === void 0) throw new v(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new v(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function vr() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new v(-3, "errorTrace signal unexpected behaviour")
}

function Er() {
  return eval.toString().length
}

function kr() {
  if (Function.prototype.bind === void 0) throw new v(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function dt() {
  var n, t;
  const e = window,
    r = navigator;
  return X(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : X(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : X(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Tr() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return P(t, "edg/") ? "edge" : P(t, "trident") || P(t, "msie") ? "internet_explorer" : P(t, "wechat") ? "wechat" : P(t, "firefox") ? "firefox" : P(t, "opera") || P(t, "opr") ? "opera" : P(t, "chrome") ? "chrome" : P(t, "safari") ? "safari" : "unknown"
}

function Or() {
  const n = dt(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    i = navigator,
    o = "connection";
  return t ? X([!("SharedWorker" in r), i[o] && "ontypechange" in i[o], !("sinkId" in new Audio)]) >= 2 : e ? X(["onorientationchange" in r, "orientation" in r, /android/i.test(i.appVersion)]) >= 2 : !1
}

function Sr() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Ir() {
  const n = window;
  return X([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Nr() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) dt() === "chromium" && Ir() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Ar() {
  if (navigator.mimeTypes === void 0) throw new v(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function zr() {
  if (window.Notification === void 0) throw new v(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new v(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new v(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new v(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Rr() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new v(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Dr() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new v(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function xr() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new v(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new v(-3, `${t} not an object`);
  return n
}

function Pr() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new v(-1, "navigator.productSub is undefined");
  return n
}

function jr() {
  if (navigator.connection === void 0) throw new v(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new v(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Lr() {
  return navigator.userAgent
}

function qr() {
  if (navigator.webdriver == null) throw new v(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Ur() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new v(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new v(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new v(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function Mr() {
  if (window.external === void 0) throw new v(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new v(-2, "window.external.toString is not a function");
  return n.toString()
}

function Br() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Cr() {
  const n = {
    [h.Awesomium]: {
      window: ["awesomium"]
    },
    [h.Cef]: {
      window: ["RunPerfTest"]
    },
    [h.CefSharp]: {
      window: ["CefSharp"]
    },
    [h.CoachJS]: {
      window: ["emit"]
    },
    [h.FMiner]: {
      window: ["fmget_targets"]
    },
    [h.Geb]: {
      window: ["geb"]
    },
    [h.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [h.Phantomas]: {
      window: ["__phantomas"]
    },
    [h.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [h.Rhino]: {
      window: ["spawn"]
    },
    [h.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [h.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [h.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [h.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let t;
  const e = {},
    r = Et(window);
  let i = [];
  window.document !== void 0 && (i = Et(window.document));
  for (t in n) {
    const o = n[t];
    if (o !== void 0) {
      const c = o.window === void 0 ? !1 : et(r, ...o.window),
        u = o.document === void 0 || !i.length ? !1 : et(i, ...o.document);
      e[t] = c || u
    }
  }
  return e
}
const Kr = {
  android: Or,
  browserKind: Tr,
  browserEngineKind: dt,
  documentFocus: Sr,
  userAgent: Lr,
  appVersion: yr,
  rtt: jr,
  windowSize: Br,
  pluginsLength: Dr,
  pluginsArray: Rr,
  errorTrace: vr,
  productSub: Pr,
  windowExternal: Mr,
  mimeTypesConsistent: Ar,
  evalLength: Er,
  webGL: Ur,
  webDriver: qr,
  languages: Nr,
  notificationPermissions: zr,
  documentElementKeys: br,
  functionBind: kr,
  process: xr,
  distinctiveProps: Cr
};
class Fr {
  constructor() {
    this.components = void 0, this.detections = void 0
  }
  getComponents() {
    return this.components
  }
  getDetections() {
    return this.detections
  }
  detect() {
    if (this.components === void 0) throw new Error("BotDetector.detect can't be called before BotDetector.collect");
    const [t, e] = Qn(this.components, wr);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await Zn(Kr), this.components
  }
}

function $r() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${Jn}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Gr({
  monitoring: n = !0
} = {}) {
  n && $r();
  const t = new Fr;
  return await t.collect(), t
}
let We = null;
async function Vr() {
  return await Hr() ? {
    bot: !1
  } : (await Wr()).detect()
}
async function Hr() {
  var e;
  const n = navigator;
  if (!((e = n.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function Wr() {
  return We || (We = Gr({
    monitoring: !1
  })), We
}
const kt = "theme";
var ce, ue, le, de, _e, fe, pe, he, me, ge, we;
class Yr {
  constructor() {
    b(this, ce, S(!1));
    b(this, ue, S(!1));
    b(this, le, S(!1));
    b(this, de, S(0));
    b(this, _e, S(!1));
    b(this, fe, S(Ce(Jr())));
    b(this, pe, S(null));
    b(this, he, S(!1));
    b(this, me, S("custom-winter"));
    b(this, ge, S(Ce(Date.now())));
    b(this, we, S(void 0));
    setInterval(() => {
      O(p(this, ge), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(kt), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return k(p(this, ce))
  }
  set dropletsDialogOpen(t) {
    O(p(this, ce), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return k(p(this, ue))
  }
  set pendingHistoryDialogOpen(t) {
    O(p(this, ue), t, !0)
  }
  get storeDialogOpen() {
    return k(p(this, le))
  }
  set storeDialogOpen(t) {
    O(p(this, le), t, !0)
  }
  get storeTabIndex() {
    return k(p(this, de))
  }
  set storeTabIndex(t) {
    O(p(this, de), t, !0)
  }
  get muted() {
    return k(p(this, _e))
  }
  set muted(t) {
    O(p(this, _e), t, !0)
  }
  get language() {
    return k(p(this, fe))
  }
  set language(t) {
    O(p(this, fe), t, !0)
  }
  get map() {
    return k(p(this, pe))
  }
  set map(t) {
    O(p(this, pe), t)
  }
  get automatedClicks() {
    return k(p(this, he))
  }
  set automatedClicks(t) {
    O(p(this, he), t, !0)
  }
  get theme() {
    return k(p(this, me))
  }
  set theme(t) {
    O(p(this, me), t, !0), localStorage.setItem(kt, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return k(p(this, ge))
  }
  get captcha() {
    return Qr ? k(p(this, we)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    O(p(this, we), t, !0)
  }
}
ce = new WeakMap, ue = new WeakMap, le = new WeakMap, de = new WeakMap, _e = new WeakMap, fe = new WeakMap, pe = new WeakMap, he = new WeakMap, me = new WeakMap, ge = new WeakMap, we = new WeakMap;
const Wt = new Yr;

function Jr() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Qr = _n.toLowerCase() !== "false",
  Zr = `
self.onmessage = function(e) {
  const { prefix, difficulty } = e.data;

  // Brute-force: find nonce where SHA256(prefix + nonce) has 'difficulty' leading zero bits
  const targetBytes = Math.floor(difficulty / 8);
  const remainingBits = difficulty % 8;

  async function solve() {
    let nonce = 0;
    while (true) {
      const nonceStr = nonce.toString(16).padStart(8, '0');
      const data = new TextEncoder().encode(prefix + nonceStr);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashBytes = new Uint8Array(hashBuffer);

      let valid = true;
      for (let i = 0; i < targetBytes; i++) {
        if (hashBytes[i] !== 0) { valid = false; break; }
      }
      if (valid && remainingBits > 0) {
        const mask = (0xFF << (8 - remainingBits)) & 0xFF;
        if ((hashBytes[targetBytes] & mask) !== 0) valid = false;
      }

      if (valid) {
        self.postMessage({ nonce: nonceStr });
        return;
      }
      nonce++;

      // Yield every 1000 iterations to allow other work
      if (nonce % 1000 === 0) {
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }
  }

  solve().catch(err => self.postMessage({ error: err.message }));
};
`;
async function Xr() {
  try {
    const n = await fetch(`${ot}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await ei(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function ei(n, t) {
  return new Promise(e => {
    const r = new Blob([Zr], {
        type: "application/javascript"
      }),
      i = URL.createObjectURL(r),
      o = new Worker(i),
      c = setTimeout(() => {
        o.terminate(), URL.revokeObjectURL(i), e(null)
      }, 12e4);
    o.onmessage = u => {
      clearTimeout(c), o.terminate(), URL.revokeObjectURL(i), u.data.error ? e(null) : e(u.data.nonce)
    }, o.onerror = () => {
      clearTimeout(c), o.terminate(), URL.revokeObjectURL(i), e(null)
    }, o.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const Yt = 3;
var ye, be;
class ti {
  constructor() {
    b(this, ye, S(null));
    b(this, be, S(0))
  }
  get current() {
    return k(p(this, ye))
  }
  set current(t) {
    O(p(this, ye), t, !0)
  }
  get errorCount() {
    return k(p(this, be))
  }
  set errorCount(t) {
    O(p(this, be), t, !0)
  }
}
ye = new WeakMap, be = new WeakMap;
const N = new ti;
async function Tt(n) {
  if (n === 1) return ni();
  if (n === 2) {
    const t = await Jt();
    return t ? Ot("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await ri();
    return t ? Ot("hcaptcha", t) : !1
  }
  return n === 4 ? ii() : !1
}
async function ni() {
  for (let n = 0; n < Yt; n++) try {
    const t = await Xr();
    if (!t) continue;
    return await C.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function Ot(n, t) {
  try {
    const e = await C.postCaptchaSession({
      provider: n,
      token: t
    });
    return await C.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const ee = {};

function Jt() {
  return Qt(2)
}

function ri() {
  return Qt(3)
}

function Qt(n) {
  const t = ee[n];
  if (t) return t;
  const e = new Promise(r => {
    N.errorCount = 0, N.current = {
      tier: n,
      resolve: i => {
        delete ee[n], r(i)
      }
    }
  });
  return ee[n] = e, e
}

function ii() {
  const n = ee[4];
  if (n) return n;
  const t = new Promise(e => {
    N.errorCount = 0, N.current = {
      tier: 4,
      resolve: r => {
        delete ee[4], e(r)
      }
    }
  });
  return ee[4] = t, t
}

function _O(n) {
  const t = N.current;
  !t || t.tier === 4 || (t.resolve(n), N.current = null)
}

function fO() {
  const n = N.current;
  !n || n.tier === 4 || (N.errorCount += 1, N.errorCount >= Yt && (n.resolve(void 0), N.current = null))
}

function pO() {
  const n = N.current;
  !n || n.tier !== 4 || (n.resolve(!0), N.current = null)
}

function hO() {
  const n = N.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), N.current = null)
}
var a = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(a || {});
const oi = () => "Your account has been suspended for breaking the rules",
  ai = () => "Sua conta foi suspensa por quebrar as regras",
  si = () => "您的账号因违反规则已被暂停",
  ci = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  ui = () => "Tu cuenta ha sido suspendida por infringir las regras",
  li = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  di = () => "Il tuo account è stato sospeso per aver infranto le regole",
  _i = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  fi = () => "Twoje konto zostało zawieszone za łamanie zasad",
  pi = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  hi = () => "Ваш обліковий запис було призупинено за порушення правил",
  mi = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  St = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? oi() : e === "pt" ? ai() : e === "ch" ? si() : e === "de" ? ci() : e === "es" ? ui() : e === "fr" ? li() : e === "it" ? di() : e === "jp" ? _i() : e === "pl" ? fi() : e === "ru" ? pi() : e === "uk" ? hi() : mi()
  },
  gi = () => "Alliance name already taken",
  wi = () => "Já possui uma aliança com esse nome",
  yi = () => "该联盟名称已被占用",
  bi = () => "Der Allianzname ist bereits vergeben",
  vi = () => "Ese nombre de alianza ya está en uso",
  Ei = () => "Ce nom d’alliance est déjà pris",
  ki = () => "Esiste già un'alleanza con questo nome",
  Ti = () => "このアライアンス名は既に使用されています。",
  Oi = () => "Nazwa sojuszu jest już zajęta",
  Si = () => "Такое название альянса уже используется",
  Ii = () => "Назва альянсу вже зайнята",
  Ni = () => "Tên liên minh đã được sử dụng",
  Ai = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gi() : e === "pt" ? wi() : e === "ch" ? yi() : e === "de" ? bi() : e === "es" ? vi() : e === "fr" ? Ei() : e === "it" ? ki() : e === "jp" ? Ti() : e === "pl" ? Oi() : e === "ru" ? Si() : e === "uk" ? Ii() : Ni()
  },
  zi = () => "Alliance name exceeded the maximum number of characters",
  Ri = () => "O nome da aliança excedeu o número máximo de caracteres",
  Di = () => "联盟名称超过最大字符数限制",
  xi = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Pi = () => "El nombre de la alianza superó el número máximo de caracteres",
  ji = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Li = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  qi = () => "アライアンス名が最大文字数を超えています。",
  Ui = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Mi = () => "Название альянса превышает максимальную длину",
  Bi = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Ci = () => "Tên liên minh vượt quá số ký tự cho phép",
  Ki = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? zi() : e === "pt" ? Ri() : e === "ch" ? Di() : e === "de" ? xi() : e === "es" ? Pi() : e === "fr" ? ji() : e === "it" ? Li() : e === "jp" ? qi() : e === "pl" ? Ui() : e === "ru" ? Mi() : e === "uk" ? Bi() : Ci()
  },
  Fi = () => "Alliance with empty name",
  $i = () => "Aliança com nome vazio",
  Gi = () => "名称为空的联盟",
  Vi = () => "Allianz mit leerem Namen",
  Hi = () => "Alianza con nombre vacío",
  Wi = () => "Alliance avec nom vide",
  Yi = () => "Alleanza con nome vuoto",
  Ji = () => "名前が空のアライアンスです。",
  Qi = () => "Sojusz z pustą nazwą",
  Zi = () => "Альянс с пустым названием",
  Xi = () => "Альянс із порожньою назвою",
  eo = () => "Liên minh không có tên",
  to = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fi() : e === "pt" ? $i() : e === "ch" ? Gi() : e === "de" ? Vi() : e === "es" ? Hi() : e === "fr" ? Wi() : e === "it" ? Yi() : e === "jp" ? Ji() : e === "pl" ? Qi() : e === "ru" ? Zi() : e === "uk" ? Xi() : eo()
  },
  no = () => "Botting",
  ro = () => "Uso de bots",
  io = () => "脚本",
  oo = () => "Bot-Nutzung",
  ao = () => "Botting",
  so = () => "Bots",
  co = () => "Uso di bot",
  uo = () => "ボット使用",
  lo = () => "Botting",
  _o = () => "Боттинг",
  fo = () => "Боти",
  po = () => "Botting",
  ho = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? no() : e === "pt" ? ro() : e === "ch" ? io() : e === "de" ? oo() : e === "es" ? ao() : e === "fr" ? so() : e === "it" ? co() : e === "jp" ? uo() : e === "pl" ? lo() : e === "ru" ? _o() : e === "uk" ? fo() : po()
  },
  mo = () => "Use of software to completely automate painting",
  go = () => "Uso de software para pintar de forma completamente automatizada ",
  wo = () => "使用软件完全自动化绘制",
  yo = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  bo = () => "Uso de software para automatizar completamente la pintura",
  vo = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Eo = () => "Uso di software per dipingere in modo completamente automatizzato",
  ko = () => "ペイントを完全に自動化するソフトウェアの使用",
  To = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Oo = () => "Использование программ для полной автоматизации рисования",
  So = () => "Використання програм, які повністю автоматизують малювання",
  Io = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  No = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? mo() : e === "pt" ? go() : e === "ch" ? wo() : e === "de" ? yo() : e === "es" ? bo() : e === "fr" ? vo() : e === "it" ? Eo() : e === "jp" ? ko() : e === "pl" ? To() : e === "ru" ? Oo() : e === "uk" ? So() : Io()
  },
  Ao = () => "Breaking the rules",
  zo = () => "Quebrar as regras",
  Ro = () => "违反规则",
  Do = () => "Regeln brechen",
  xo = () => "Romper las reglas",
  Po = () => "Violation des règles",
  jo = () => "Violazione delle regole",
  Lo = () => "ルール違反",
  qo = () => "Łamanie zasad",
  Uo = () => "Нарушение правил",
  Mo = () => "Порушення правил",
  Bo = () => "Vi phạm luật",
  Co = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ao() : e === "pt" ? zo() : e === "ch" ? Ro() : e === "de" ? Do() : e === "es" ? xo() : e === "fr" ? Po() : e === "it" ? jo() : e === "jp" ? Lo() : e === "pl" ? qo() : e === "ru" ? Uo() : e === "uk" ? Mo() : Bo()
  },
  Ko = () => "You have broken one of Wplace's rules",
  Fo = () => "Você quebrou uma das regras do Wplace",
  $o = () => "你违反了 Wplace 的一项规则",
  Go = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Vo = () => "Has infringido una de las reglas de Wplace",
  Ho = () => "Vous avez enfreint l’une des règles de Wplace",
  Wo = () => "Hai infranto una delle regole di Wplace",
  Yo = () => "Wplaceのルールのいずれかに違反しました。",
  Jo = () => "Złamałeś jedną z zasad Wplace",
  Qo = () => "Вы нарушили одно из правил Wplace",
  Zo = () => "Ви порушили одне з правил Wplace",
  Xo = () => "Bạn đã vi phạm một trong các luật của Wplace",
  ea = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ko() : e === "pt" ? Fo() : e === "ch" ? $o() : e === "de" ? Go() : e === "es" ? Vo() : e === "fr" ? Ho() : e === "it" ? Wo() : e === "jp" ? Yo() : e === "pl" ? Jo() : e === "ru" ? Qo() : e === "uk" ? Zo() : Xo()
  },
  ta = () => "You cannot paint over event pixels",
  na = () => "Você não pode pintar sobre pixels de eventos",
  ra = () => "你不能覆盖活动像素",
  ia = () => "Du kannst nicht über Event-Pixel malen",
  oa = () => "No puedes pintar sobre píxeles de evento",
  aa = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  sa = () => "Non puoi dipingere sopra i pixel dell'evento",
  ca = () => "イベント用のピクセルの上には塗れません。",
  ua = () => "Nie możesz malować po pikselach wydarzenia",
  la = () => "Вы не можете рисовать по пикселям события",
  da = () => "Ви не можете малювати поверх пікселів події",
  _a = () => "Bạn không thể tô lên pixel sự kiện",
  It = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ta() : e === "pt" ? na() : e === "ch" ? ra() : e === "de" ? ia() : e === "es" ? oa() : e === "fr" ? aa() : e === "it" ? sa() : e === "jp" ? ca() : e === "pl" ? ua() : e === "ru" ? la() : e === "uk" ? da() : _a()
  },
  fa = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  pa = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  ha = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  ma = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  ga = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  wa = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  ya = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  ba = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  va = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Ea = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  ka = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Ta = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Oa = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fa() : e === "pt" ? pa() : e === "ch" ? ha() : e === "de" ? ma() : e === "es" ? ga() : e === "fr" ? wa() : e === "it" ? ya() : e === "jp" ? ba() : e === "pl" ? va() : e === "ru" ? Ea() : e === "uk" ? ka() : Ta()
  },
  Sa = () => "Challenge verification not completed",
  Ia = () => "Verificação do desafio não concluída",
  Na = () => "挑战验证未完成",
  Aa = () => "Herausforderungsverifizierung nicht abgeschlossen",
  za = () => "Verificación del desafío no completada",
  Ra = () => "Vérification du défi non terminée",
  Da = () => "Verifica della sfida non completata",
  xa = () => "チャレンジ検証が完了していません",
  Pa = () => "Weryfikacja wyzwania niezakończona",
  ja = () => "Верификация вызова не завершена",
  La = () => "Перевірку виклику не завершено",
  qa = () => "Xác minh thử thách chưa hoàn thành",
  Ye = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Sa() : e === "pt" ? Ia() : e === "ch" ? Na() : e === "de" ? Aa() : e === "es" ? za() : e === "fr" ? Ra() : e === "it" ? Da() : e === "jp" ? xa() : e === "pl" ? Pa() : e === "ru" ? ja() : e === "uk" ? La() : qa()
  },
  Ua = () => "Couldn't complete the purchase. This item does not exist.",
  Ma = () => "Não foi possível concluir a compra. Este item não existe.",
  Ba = () => "无法完成购买。该物品不存在。",
  Ca = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Ka = () => "No se pudo completar la compra. Este ítem no existe.",
  Fa = () => "Achat impossible. Cet objet n’existe pas.",
  $a = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Ga = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Va = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Ha = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Wa = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Ya = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Nt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ua() : e === "pt" ? Ma() : e === "ch" ? Ba() : e === "de" ? Ca() : e === "es" ? Ka() : e === "fr" ? Fa() : e === "it" ? $a() : e === "jp" ? Ga() : e === "pl" ? Va() : e === "ru" ? Ha() : e === "uk" ? Wa() : Ya()
  },
  Ja = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Qa = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Za = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Xa = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  es = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  ts = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  ns = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  rs = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  is = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  os = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  as = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  ss = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  cs = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ja() : e === "pt" ? Qa() : e === "ch" ? Za() : e === "de" ? Xa() : e === "es" ? es() : e === "fr" ? ts() : e === "it" ? ns() : e === "jp" ? rs() : e === "pl" ? is() : e === "ru" ? os() : e === "uk" ? as() : ss()
  },
  us = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  ls = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  ds = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  _s = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  fs = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  ps = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  hs = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  ms = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  gs = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  ws = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  ys = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  bs = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  At = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? us() : e === "pt" ? ls() : e === "ch" ? ds() : e === "de" ? _s() : e === "es" ? fs() : e === "fr" ? ps() : e === "it" ? hs() : e === "jp" ? ms() : e === "pl" ? gs() : e === "ru" ? ws() : e === "uk" ? ys() : bs()
  },
  vs = () => "Doxxing",
  Es = () => "Doxxing",
  ks = () => "人肉搜索",
  Ts = () => "Doxxing",
  Os = () => "Doxxing",
  Ss = () => "Doxxing",
  Is = () => "Doxxing",
  Ns = () => "ドックス（Doxxing）",
  As = () => "Doxxing",
  zs = () => "Докcинг",
  Rs = () => "Докcинг",
  Ds = () => "Doxxing",
  xs = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vs() : e === "pt" ? Es() : e === "ch" ? ks() : e === "de" ? Ts() : e === "es" ? Os() : e === "fr" ? Ss() : e === "it" ? Is() : e === "jp" ? Ns() : e === "pl" ? As() : e === "ru" ? zs() : e === "uk" ? Rs() : Ds()
  },
  Ps = () => "Released other's personal information without their consent",
  js = () => "Vazar informações pessoais de terceiros sem consentimento",
  Ls = () => "在未获同意的情况下公开他人个人信息",
  qs = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Us = () => "Divulgó información personal de otra persona sin su consentimiento",
  Ms = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Bs = () => "Diffusione di informazioni personali di terzi senza consenso",
  Cs = () => "他人の個人情報を同意なく公開した。",
  Ks = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Fs = () => "Публикация личной информации других людей без их согласия",
  $s = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Gs = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Vs = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Ps() : e === "pt" ? js() : e === "ch" ? Ls() : e === "de" ? qs() : e === "es" ? Us() : e === "fr" ? Ms() : e === "it" ? Bs() : e === "jp" ? Cs() : e === "pl" ? Ks() : e === "ru" ? Fs() : e === "uk" ? $s() : Gs()
  },
  Hs = () => "This email is already in use.",
  Ws = () => "Este e-mail já está em uso.",
  Ys = () => "This email is already in use.",
  Js = () => "This email is already in use.",
  Qs = () => "Este correo electrónico ya está en uso.",
  Zs = () => "This email is already in use.",
  Xs = () => "Questa email è già in uso.",
  ec = () => "This email is already in use.",
  tc = () => "This email is already in use.",
  nc = () => "This email is already in use.",
  rc = () => "This email is already in use.",
  ic = () => "This email is already in use.",
  oc = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hs() : e === "pt" ? Ws() : e === "ch" ? Ys() : e === "de" ? Js() : e === "es" ? Qs() : e === "fr" ? Zs() : e === "it" ? Xs() : e === "jp" ? ec() : e === "pl" ? tc() : e === "ru" ? nc() : e === "uk" ? rc() : ic()
  },
  ac = n => `This email is already in use by user #${n.userId}.`,
  sc = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  cc = n => `This email is already in use by user #${n.userId}.`,
  uc = n => `This email is already in use by user #${n.userId}.`,
  lc = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  dc = n => `This email is already in use by user #${n.userId}.`,
  _c = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  fc = n => `This email is already in use by user #${n.userId}.`,
  pc = n => `This email is already in use by user #${n.userId}.`,
  hc = n => `This email is already in use by user #${n.userId}.`,
  mc = n => `This email is already in use by user #${n.userId}.`,
  gc = n => `This email is already in use by user #${n.userId}.`,
  wc = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ac(n) : e === "pt" ? sc(n) : e === "ch" ? cc(n) : e === "de" ? uc(n) : e === "es" ? lc(n) : e === "fr" ? dc(n) : e === "it" ? _c(n) : e === "jp" ? fc(n) : e === "pl" ? pc(n) : e === "ru" ? hc(n) : e === "uk" ? mc(n) : gc(n)
  },
  yc = () => "Enter a valid email address.",
  bc = () => "Informe um endereço de e-mail válido.",
  vc = () => "Enter a valid email address.",
  Ec = () => "Enter a valid email address.",
  kc = () => "Introduce una dirección de correo electrónico válida.",
  Tc = () => "Enter a valid email address.",
  Oc = () => "Inserisci un indirizzo email valido.",
  Sc = () => "Enter a valid email address.",
  Ic = () => "Enter a valid email address.",
  Nc = () => "Enter a valid email address.",
  Ac = () => "Enter a valid email address.",
  zc = () => "Enter a valid email address.",
  Rc = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yc() : e === "pt" ? bc() : e === "ch" ? vc() : e === "de" ? Ec() : e === "es" ? kc() : e === "fr" ? Tc() : e === "it" ? Oc() : e === "jp" ? Sc() : e === "pl" ? Ic() : e === "ru" ? Nc() : e === "uk" ? Ac() : zc()
  },
  Dc = n => `Error while painting: ${n.err}`,
  xc = n => `Erro enquanto pinta: ${n.err}`,
  Pc = n => `绘制时出错：${n.err}`,
  jc = n => `Fehler beim Malen: ${n.err}`,
  Lc = n => `Error al pintar: ${n.err}`,
  qc = n => `Erreur lors de la peinture : ${n.err}`,
  Uc = n => `Errore durante la pittura: ${n.err}`,
  Mc = n => `ペイント中にエラーが発生しました: ${n.err}`,
  Bc = n => `Błąd podczas malowania: ${n.err}`,
  Cc = n => `Ошибка при рисовании: ${n.err}`,
  Kc = n => `Помилка під час малювання: ${n.err}`,
  Fc = n => `Lỗi khi tô: ${n.err}`,
  $c = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Dc(n) : e === "pt" ? xc(n) : e === "ch" ? Pc(n) : e === "de" ? jc(n) : e === "es" ? Lc(n) : e === "fr" ? qc(n) : e === "it" ? Uc(n) : e === "jp" ? Mc(n) : e === "pl" ? Bc(n) : e === "ru" ? Cc(n) : e === "uk" ? Kc(n) : Fc(n)
  },
  Gc = () => "Exceeded maximum number of characters",
  Vc = () => "Excedeu o número máximo de caracteres permitidos",
  Hc = () => "超出最大字符数",
  Wc = () => "Maximale Zeichenanzahl überschritten",
  Yc = () => "Se excedió el número máximo de caracteres",
  Jc = () => "Nombre maximal de caractères dépassé",
  Qc = () => "Numero massimo di caratteri superato",
  Zc = () => "最大文字数を超過しました",
  Xc = () => "Przekroczono maksymalną liczbę znaków",
  eu = () => "Превышено максимальное количество символов",
  tu = () => "Перевищено максимальну кількість символів",
  nu = () => "Đã vượt quá số ký tự tối đa",
  ru = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Gc() : e === "pt" ? Vc() : e === "ch" ? Hc() : e === "de" ? Wc() : e === "es" ? Yc() : e === "fr" ? Jc() : e === "it" ? Qc() : e === "jp" ? Zc() : e === "pl" ? Xc() : e === "ru" ? eu() : e === "uk" ? tu() : nu()
  },
  iu = () => "Verification code expired. Please request a new one.",
  ou = () => "Código de verificação expirado. Por favor, solicite um novo.",
  au = () => "验证码已过期，请重新获取。",
  su = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  cu = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  uu = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  lu = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  du = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  _u = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  fu = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  pu = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  hu = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  mu = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? iu() : e === "pt" ? ou() : e === "ch" ? au() : e === "de" ? su() : e === "es" ? cu() : e === "fr" ? uu() : e === "it" ? lu() : e === "jp" ? du() : e === "pl" ? _u() : e === "ru" ? fu() : e === "uk" ? pu() : hu()
  },
  gu = () => "Griefing",
  wu = () => "Griefing",
  yu = () => "破坏行为",
  bu = () => "Griefing",
  vu = () => "Griefing",
  Eu = () => "Griefing",
  ku = () => "Griefing",
  Tu = () => "グリーフィング",
  Ou = () => "Griefing",
  Su = () => "Гриферство",
  Iu = () => "Гріфінг",
  Nu = () => "Griefing",
  Au = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? gu() : e === "pt" ? wu() : e === "ch" ? yu() : e === "de" ? bu() : e === "es" ? vu() : e === "fr" ? Eu() : e === "it" ? ku() : e === "jp" ? Tu() : e === "pl" ? Ou() : e === "ru" ? Su() : e === "uk" ? Iu() : Nu()
  },
  zu = () => "Messed up with other's artworks",
  Ru = () => "Estragou os desenhos dos outros",
  Du = () => "破坏了他人的作品",
  xu = () => "Kunstwerke anderer beschädigt",
  Pu = () => "Arruinó las obras de arte de otros",
  ju = () => "A abîmé les œuvres des autres",
  Lu = () => "Ha rovinato i disegni degli altri",
  qu = () => "他人の作品を荒らした",
  Uu = () => "Zniszczył prace innych",
  Mu = () => "Испортил чужие рисунки",
  Bu = () => "Зіпсував роботи інших",
  Cu = () => "Phá hỏng tranh của người khác",
  Ku = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? zu() : e === "pt" ? Ru() : e === "ch" ? Du() : e === "de" ? xu() : e === "es" ? Pu() : e === "fr" ? ju() : e === "it" ? Lu() : e === "jp" ? qu() : e === "pl" ? Uu() : e === "ru" ? Mu() : e === "uk" ? Bu() : Cu()
  },
  Fu = () => "Hate speech",
  $u = () => "Discurso de Ódio",
  Gu = () => "仇恨言论",
  Vu = () => "Hassrede",
  Hu = () => "Discurso de odio",
  Wu = () => "Discours haineux",
  Yu = () => "Discorso d'odio",
  Ju = () => "ヘイトスピーチ",
  Qu = () => "Mowa nienawiści",
  Zu = () => "Речь ненависти",
  Xu = () => "Мова ворожнечі",
  el = () => "Ngôn từ thù hằn",
  tl = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fu() : e === "pt" ? $u() : e === "ch" ? Gu() : e === "de" ? Vu() : e === "es" ? Hu() : e === "fr" ? Wu() : e === "it" ? Yu() : e === "jp" ? Ju() : e === "pl" ? Qu() : e === "ru" ? Zu() : e === "uk" ? Xu() : el()
  },
  nl = () => "Racism, homophobia, hate groups, ...",
  rl = () => "Racismo, homofobia, grupos de ódio, ...",
  il = () => "种族主义、恐同、仇恨团体等",
  ol = () => "Rassismus, Homophobie, Hassgruppen, ...",
  al = () => "Racismo, homofobia, grupos de odio, ...",
  sl = () => "Racisme, homophobie, groupes haineux, ...",
  cl = () => "Razzismo, omofobia, gruppi d'odio, ...",
  ul = () => "人種差別、同性愛差別、ヘイト団体など。",
  ll = () => "Rasizm, homofobia, grupy nienawiści, ...",
  dl = () => "Расизм, гомофобия, группы ненависти и т.п.",
  _l = () => "Расизм, гомофобія, групи ненависті, ...",
  fl = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  pl = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? nl() : e === "pt" ? rl() : e === "ch" ? il() : e === "de" ? ol() : e === "es" ? al() : e === "fr" ? sl() : e === "it" ? cl() : e === "jp" ? ul() : e === "pl" ? ll() : e === "ru" ? dl() : e === "uk" ? _l() : fl()
  },
  hl = () => `This case has already been reviewed, resolved, or acted on by the moderation team.

The reported incident may have already resulted in a punishment, warning, previous decision, or internal review. Submitting the same case again without new evidence will not usually change the outcome.

If you have new and relevant evidence that was not included before, please submit a new report and clearly explain what new information is being provided.`,
  ml = () => `Este caso já foi analisado, resolvido ou tratado pela equipe de moderação.

O incidente denunciado pode já ter resultado em uma punição, advertência, decisão anterior ou revisão interna. Enviar o mesmo caso novamente sem novas evidências geralmente não altera o resultado.

Se você tiver evidências novas e relevantes que não foram incluídas antes, envie uma nova denúncia e explique claramente quais novas informações estão sendo fornecidas.`,
  gl = () => `此案件已由审核团队审查、解决或处理。

被举报的事件可能已经导致了处罚、警告、先前的裁决或内部审查。在没有新证据的情况下重复提交相同的案件通常不会改变结果。

如果您有此前未提供的、相关的新证据，请提交一份新的举报，并清楚说明所提供的新信息是什么。`,
  wl = () => `Dieser Fall wurde vom Moderationsteam bereits überprüft, gelöst oder bearbeitet.

Der gemeldete Vorfall hat möglicherweise bereits zu einer Strafe, einer Verwarnung, einer früheren Entscheidung oder einer internen Überprüfung geführt. Denselben Fall ohne neue Beweise erneut einzureichen, ändert das Ergebnis in der Regel nicht.

Wenn du neue und relevante Beweise hast, die zuvor nicht enthalten waren, reiche bitte eine neue Meldung ein und erkläre klar, welche neuen Informationen vorliegen.`,
  yl = () => `Este caso ya ha sido revisado, resuelto o gestionado por el equipo de moderación.

El incidente reportado puede haber dado lugar ya a una sanción, una advertencia, una decisión previa o una revisión interna. Enviar el mismo caso de nuevo sin pruebas nuevas no suele cambiar el resultado.

Si tienes pruebas nuevas y relevantes que no se incluyeron antes, envía un nuevo reporte y explica claramente qué información nueva aportas.`,
  bl = () => `Ce cas a déjà été examiné, résolu ou traité par l'équipe de modération.

L'incident signalé a peut-être déjà donné lieu à une sanction, un avertissement, une décision antérieure ou un examen interne. Soumettre à nouveau le même cas sans nouvelles preuves ne change généralement pas le résultat.

Si vous disposez de nouvelles preuves pertinentes qui n'avaient pas été incluses, veuillez soumettre un nouveau signalement et expliquer clairement quelles nouvelles informations vous apportez.`,
  vl = () => `Questo caso è già stato esaminato, risolto o gestito dal team di moderazione.

L'incidente segnalato potrebbe aver già portato a una punizione, un avviso, una decisione precedente o una revisione interna. Inviare di nuovo lo stesso caso senza nuove prove di solito non cambia l'esito.

Se hai prove nuove e pertinenti non incluse in precedenza, invia una nuova segnalazione e spiega chiaramente quali nuove informazioni stai fornendo.`,
  El = () => `このケースはすでにモデレーションチームによって確認・解決・対応されています。

報告された事案は、すでに処分、警告、過去の判断、または内部審査につながっている可能性があります。新たな証拠なしに同じケースを再度提出しても、通常は結果は変わりません。

以前に含まれていなかった新しく関連性のある証拠がある場合は、新しい報告を提出し、どのような新しい情報を提供するのかを明確に説明してください。`,
  kl = () => `Ta sprawa została już sprawdzona, rozstrzygnięta lub rozpatrzona przez zespół moderacji.

Zgłoszone zdarzenie mogło już skutkować karą, ostrzeżeniem, wcześniejszą decyzją lub wewnętrzną weryfikacją. Ponowne przesłanie tej samej sprawy bez nowych dowodów zwykle nie zmieni wyniku.

Jeśli masz nowe i istotne dowody, które nie zostały wcześniej dołączone, prześlij nowe zgłoszenie i jasno wyjaśnij, jakie nowe informacje przekazujesz.`,
  Tl = () => `Этот случай уже был рассмотрен, решён или обработан командой модерации.

Сообщённый инцидент мог уже привести к наказанию, предупреждению, ранее принятому решению или внутренней проверке. Повторная подача того же случая без новых доказательств обычно не меняет результат.

Если у вас есть новые и значимые доказательства, которые ранее не были предоставлены, отправьте новую жалобу и чётко объясните, какая новая информация предоставляется.`,
  Ol = () => `Цю справу вже розглянуто, вирішено або опрацьовано командою модерації.

Повідомлений інцидент, можливо, вже призвів до покарання, попередження, попереднього рішення або внутрішньої перевірки. Повторне надсилання тієї самої справи без нових доказів зазвичай не змінює результату.

Якщо у вас є нові та важливі докази, які не були додані раніше, надішліть нову скаргу та чітко поясніть, яку нову інформацію ви надаєте.`,
  Sl = () => `Trường hợp này đã được đội ngũ kiểm duyệt xem xét, giải quyết hoặc xử lý.

Sự việc bị báo cáo có thể đã dẫn đến một hình phạt, cảnh cáo, quyết định trước đó hoặc một lần xem xét nội bộ. Việc gửi lại cùng một trường hợp mà không có bằng chứng mới thường sẽ không thay đổi kết quả.

Nếu bạn có bằng chứng mới và liên quan mà trước đây chưa được đưa vào, vui lòng gửi một báo cáo mới và giải thích rõ thông tin mới mà bạn cung cấp là gì.`,
  Il = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? hl() : e === "pt" ? ml() : e === "ch" ? gl() : e === "de" ? wl() : e === "es" ? yl() : e === "fr" ? bl() : e === "it" ? vl() : e === "jp" ? El() : e === "pl" ? kl() : e === "ru" ? Tl() : e === "uk" ? Ol() : Sl()
  },
  Nl = () => "Already Handled",
  Al = () => "Já tratado",
  zl = () => "已处理",
  Rl = () => "Bereits bearbeitet",
  Dl = () => "Ya gestionado",
  xl = () => "Déjà traité",
  Pl = () => "Già gestito",
  jl = () => "対応済み",
  Ll = () => "Już rozpatrzone",
  ql = () => "Уже рассмотрено",
  Ul = () => "Вже розглянуто",
  Ml = () => "Đã xử lý",
  Bl = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Nl() : e === "pt" ? Al() : e === "ch" ? zl() : e === "de" ? Rl() : e === "es" ? Dl() : e === "fr" ? xl() : e === "it" ? Pl() : e === "jp" ? jl() : e === "pl" ? Ll() : e === "ru" ? ql() : e === "uk" ? Ul() : Ml()
  },
  Cl = () => `The reported action was allowed under the event rules or special conditions active at the time.

Some events, areas, game modes, or temporary rules may allow behavior that would normally be restricted elsewhere. Because the action was permitted in that specific context, no moderation action will be taken.

Please make sure to check the current event rules or special-area rules before submitting reports related to event gameplay.`,
  Kl = () => `A ação denunciada era permitida pelas regras do evento ou pelas condições especiais ativas no momento.

Alguns eventos, áreas, modos de jogo ou regras temporárias podem permitir comportamentos que normalmente seriam restritos em outros lugares. Como a ação era permitida nesse contexto específico, nenhuma ação de moderação será tomada.

Verifique as regras atuais do evento ou as regras de áreas especiais antes de enviar denúncias relacionadas à jogabilidade do evento.`,
  Fl = () => `被举报的行为在当时生效的活动规则或特殊条件下是被允许的。

某些活动、区域、游戏模式或临时规则可能允许在其他情况下通常会被限制的行为。由于该行为在特定情境下被允许，因此不会采取任何审核措施。

在提交与活动玩法相关的举报之前，请务必查看当前的活动规则或特殊区域规则。`,
  $l = () => `Die gemeldete Aktion war nach den Event-Regeln oder den zu diesem Zeitpunkt geltenden Sonderbedingungen erlaubt.

Manche Events, Bereiche, Spielmodi oder temporäre Regeln können Verhalten erlauben, das anderswo normalerweise eingeschränkt wäre. Da die Aktion in diesem speziellen Kontext erlaubt war, wird keine Moderationsmaßnahme ergriffen.

Bitte prüfe die aktuellen Event-Regeln oder die Regeln für Sonderbereiche, bevor du Meldungen zum Event-Gameplay einreichst.`,
  Gl = () => `La acción reportada estaba permitida según las reglas del evento o las condiciones especiales activas en ese momento.

Algunos eventos, áreas, modos de juego o reglas temporales pueden permitir comportamientos que normalmente estarían restringidos en otros lugares. Dado que la acción estaba permitida en ese contexto específico, no se tomará ninguna medida de moderación.

Asegúrate de revisar las reglas actuales del evento o las reglas de áreas especiales antes de enviar reportes relacionados con la jugabilidad del evento.`,
  Vl = () => `L'action signalée était autorisée par les règles de l'événement ou par les conditions spéciales en vigueur à ce moment-là.

Certains événements, zones, modes de jeu ou règles temporaires peuvent autoriser des comportements qui seraient normalement restreints ailleurs. Comme l'action était autorisée dans ce contexte précis, aucune mesure de modération ne sera prise.

Veuillez vérifier les règles actuelles de l'événement ou les règles des zones spéciales avant de soumettre des signalements liés au gameplay d'un événement.`,
  Hl = () => `L'azione segnalata era consentita dalle regole dell'evento o dalle condizioni speciali attive in quel momento.

Alcuni eventi, aree, modalità di gioco o regole temporanee possono consentire comportamenti che altrove sarebbero normalmente vietati. Poiché l'azione era consentita in quel contesto specifico, non verrà presa alcuna azione di moderazione.

Assicurati di controllare le regole attuali dell'evento o le regole delle aree speciali prima di inviare segnalazioni relative al gameplay degli eventi.`,
  Wl = () => `報告された行為は、その時点で有効だったイベントのルールや特別な条件のもとで許可されていました。

一部のイベント、エリア、ゲームモード、または一時的なルールでは、通常なら他の場所で制限される行為が許可される場合があります。その特定の状況では行為が許可されていたため、モデレーションの措置は行われません。

イベントのプレイに関する報告を提出する前に、現在のイベントルールや特別エリアのルールを必ず確認してください。`,
  Yl = () => `Zgłoszone działanie było dozwolone zgodnie z zasadami wydarzenia lub specjalnymi warunkami obowiązującymi w tym czasie.

Niektóre wydarzenia, obszary, tryby gry lub zasady tymczasowe mogą zezwalać na zachowania, które gdzie indziej byłyby zwykle ograniczone. Ponieważ działanie było dozwolone w tym konkretnym kontekście, nie zostaną podjęte żadne działania moderacyjne.

Przed wysłaniem zgłoszeń dotyczących rozgrywki podczas wydarzenia sprawdź aktualne zasady wydarzenia lub zasady obszarów specjalnych.`,
  Jl = () => `Сообщённое действие было разрешено правилами события или особыми условиями, действовавшими в тот момент.

Некоторые события, зоны, режимы игры или временные правила могут разрешать поведение, которое обычно ограничено в других местах. Поскольку действие было разрешено в этом конкретном контексте, никаких мер модерации приниматься не будет.

Пожалуйста, проверяйте текущие правила события или правила особых зон, прежде чем отправлять жалобы, связанные с игровым процессом события.`,
  Ql = () => `Повідомлена дія була дозволена правилами події або особливими умовами, що діяли на той момент.

Деякі події, зони, режими гри або тимчасові правила можуть дозволяти поведінку, яка зазвичай обмежена в інших місцях. Оскільки дія була дозволена в цьому конкретному контексті, жодних заходів модерації вжито не буде.

Будь ласка, перевіряйте чинні правила події або правила особливих зон, перш ніж надсилати скарги, пов'язані з ігровим процесом події.`,
  Zl = () => `Hành động bị báo cáo được cho phép theo quy tắc sự kiện hoặc các điều kiện đặc biệt đang có hiệu lực vào thời điểm đó.

Một số sự kiện, khu vực, chế độ chơi hoặc quy tắc tạm thời có thể cho phép những hành vi mà ở nơi khác thường bị hạn chế. Vì hành động được cho phép trong bối cảnh cụ thể đó, sẽ không có biện pháp kiểm duyệt nào được áp dụng.

Vui lòng kiểm tra quy tắc sự kiện hiện hành hoặc quy tắc khu vực đặc biệt trước khi gửi báo cáo liên quan đến lối chơi trong sự kiện.`,
  Xl = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Cl() : e === "pt" ? Kl() : e === "ch" ? Fl() : e === "de" ? $l() : e === "es" ? Gl() : e === "fr" ? Vl() : e === "it" ? Hl() : e === "jp" ? Wl() : e === "pl" ? Yl() : e === "ru" ? Jl() : e === "uk" ? Ql() : Zl()
  },
  ed = () => "Allowed by Event or Special Rules",
  td = () => "Permitido por evento ou regras especiais",
  nd = () => "活动或特殊规则允许",
  rd = () => "Durch Event oder Sonderregeln erlaubt",
  id = () => "Permitido por evento o reglas especiales",
  od = () => "Autorisé par un événement ou des règles spéciales",
  ad = () => "Consentito da evento o regole speciali",
  sd = () => "イベントまたは特別ルールにより許可",
  cd = () => "Dozwolone przez wydarzenie lub zasady specjalne",
  ud = () => "Разрешено событием или особыми правилами",
  ld = () => "Дозволено подією або особливими правилами",
  dd = () => "Được phép theo sự kiện hoặc quy tắc đặc biệt",
  _d = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ed() : e === "pt" ? td() : e === "ch" ? nd() : e === "de" ? rd() : e === "es" ? id() : e === "fr" ? od() : e === "it" ? ad() : e === "jp" ? sd() : e === "pl" ? cd() : e === "ru" ? ud() : e === "uk" ? ld() : dd()
  },
  fd = () => `The reported issue appears to have been caused by a glitch, bug, lag, desync, or another technical problem.

Because the evidence suggests that the situation may not have been intentional player misconduct, we cannot treat it as a punishable rule violation.

If the issue continues, please report it as a bug or provide more evidence showing that a player intentionally abused the glitch.`,
  pd = () => `O problema denunciado parece ter sido causado por uma falha, bug, lag, dessincronização ou outro problema técnico.

Como as evidências sugerem que a situação pode não ter sido má conduta intencional de um jogador, não podemos tratá-la como uma violação de regras passível de punição.

Se o problema persistir, denuncie-o como um bug ou forneça mais evidências mostrando que um jogador abusou intencionalmente da falha.`,
  hd = () => `被举报的问题似乎是由故障、漏洞、延迟、不同步或其他技术问题导致的。

由于证据表明该情况可能并非玩家的故意不当行为，我们无法将其视为可处罚的违规行为。

如果问题持续存在，请将其作为漏洞举报，或提供更多证据，证明有玩家故意利用了该故障。`,
  md = () => `Das gemeldete Problem scheint durch einen Glitch, Bug, Lag, eine Desynchronisation oder ein anderes technisches Problem verursacht worden zu sein.

Da die Beweise darauf hindeuten, dass es sich möglicherweise nicht um vorsätzliches Fehlverhalten eines Spielers handelte, können wir es nicht als strafbaren Regelverstoß behandeln.

Wenn das Problem weiterhin besteht, melde es bitte als Bug oder liefere weitere Beweise, die zeigen, dass ein Spieler den Glitch absichtlich ausgenutzt hat.`,
  gd = () => `El problema reportado parece haber sido causado por un fallo, un error, lag, desincronización u otro problema técnico.

Dado que las pruebas sugieren que la situación pudo no ser una mala conducta intencional de un jugador, no podemos tratarla como una violación de reglas sancionable.

Si el problema continúa, repórtalo como un error o aporta más pruebas que demuestren que un jugador abusó intencionalmente del fallo.`,
  wd = () => `Le problème signalé semble avoir été causé par un bug, un glitch, du lag, une désynchronisation ou un autre problème technique.

Comme les preuves suggèrent que la situation n'était peut-être pas une faute intentionnelle d'un joueur, nous ne pouvons pas la traiter comme une infraction passible de sanction.

Si le problème persiste, veuillez le signaler en tant que bug ou fournir davantage de preuves montrant qu'un joueur a intentionnellement abusé du bug.`,
  yd = () => `Il problema segnalato sembra essere stato causato da un glitch, un bug, lag, desincronizzazione o un altro problema tecnico.

Poiché le prove suggeriscono che la situazione potrebbe non essere stata una cattiva condotta intenzionale di un giocatore, non possiamo trattarla come una violazione delle regole punibile.

Se il problema persiste, segnalalo come bug o fornisci ulteriori prove che mostrino che un giocatore ha abusato intenzionalmente del glitch.`,
  bd = () => `報告された問題は、不具合、バグ、ラグ、同期ずれ、またはその他の技術的な問題によって引き起こされた可能性があります。

証拠からは、プレイヤーの意図的な不正行為ではなかった可能性が示唆されるため、処罰の対象となるルール違反として扱うことはできません。

問題が続く場合は、バグとして報告するか、プレイヤーが意図的に不具合を悪用したことを示すさらなる証拠を提出してください。`,
  vd = () => `Zgłoszony problem prawdopodobnie został spowodowany usterką, błędem, lagiem, desynchronizacją lub innym problemem technicznym.

Ponieważ dowody sugerują, że sytuacja mogła nie być celowym niewłaściwym zachowaniem gracza, nie możemy potraktować jej jako karalnego naruszenia zasad.

Jeśli problem będzie się powtarzał, zgłoś go jako błąd lub dostarcz więcej dowodów pokazujących, że gracz celowo wykorzystał usterkę.`,
  Ed = () => `Сообщённая проблема, по-видимому, была вызвана сбоем, багом, лагом, рассинхронизацией или другой технической неполадкой.

Поскольку доказательства указывают на то, что ситуация могла не быть умышленным нарушением со стороны игрока, мы не можем рассматривать её как наказуемое нарушение правил.

Если проблема сохраняется, сообщите о ней как об ошибке или предоставьте дополнительные доказательства того, что игрок умышленно воспользовался сбоем.`,
  kd = () => `Повідомлена проблема, схоже, була спричинена збоєм, багом, лагом, розсинхронізацією або іншою технічною несправністю.

Оскільки докази свідчать, що ситуація могла не бути навмисною неправомірною поведінкою гравця, ми не можемо розглядати її як порушення правил, що карається.

Якщо проблема повторюється, повідомте про неї як про помилку або надайте додаткові докази того, що гравець навмисно скористався збоєм.`,
  Td = () => `Vấn đề bị báo cáo có vẻ do một lỗi kỹ thuật, bug, lag, mất đồng bộ hoặc một sự cố kỹ thuật khác gây ra.

Vì bằng chứng cho thấy tình huống có thể không phải là hành vi sai phạm cố ý của người chơi, chúng tôi không thể xem đó là vi phạm quy tắc có thể bị xử phạt.

Nếu vấn đề vẫn tiếp diễn, vui lòng báo cáo dưới dạng lỗi hoặc cung cấp thêm bằng chứng cho thấy người chơi đã cố ý lợi dụng lỗi đó.`,
  Od = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fd() : e === "pt" ? pd() : e === "ch" ? hd() : e === "de" ? md() : e === "es" ? gd() : e === "fr" ? wd() : e === "it" ? yd() : e === "jp" ? bd() : e === "pl" ? vd() : e === "ru" ? Ed() : e === "uk" ? kd() : Td()
  },
  Sd = () => "Caused by a Glitch",
  Id = () => "Causado por uma falha",
  Nd = () => "由故障导致",
  Ad = () => "Durch einen Glitch verursacht",
  zd = () => "Causado por un fallo",
  Rd = () => "Causé par un bug",
  Dd = () => "Causato da un glitch",
  xd = () => "不具合が原因",
  Pd = () => "Spowodowane usterką",
  jd = () => "Вызвано сбоем",
  Ld = () => "Спричинено збоєм",
  qd = () => "Do lỗi kỹ thuật gây ra",
  Ud = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Sd() : e === "pt" ? Id() : e === "ch" ? Nd() : e === "de" ? Ad() : e === "es" ? zd() : e === "fr" ? Rd() : e === "it" ? Dd() : e === "jp" ? xd() : e === "pl" ? Pd() : e === "ru" ? jd() : e === "uk" ? Ld() : qd()
  },
  Md = () => `We could not confirm what happened based on the information provided.

The report may show part of the situation, but it does not include enough context for the moderation team to understand the full incident, verify the sequence of events, or determine whether a rule was broken.

When submitting a report, please include clear evidence, relevant timestamps, location or coordinates when applicable, and enough surrounding context to help us understand what happened before and after the reported action.`,
  Bd = () => `Não foi possível confirmar o que aconteceu com base nas informações fornecidas.

A denúncia pode mostrar parte da situação, mas não inclui contexto suficiente para que a equipe de moderação entenda o incidente completo, verifique a sequência dos eventos ou determine se uma regra foi violada.

Ao enviar uma denúncia, inclua evidências claras, registros de horário relevantes, localização ou coordenadas quando aplicável e contexto suficiente para nos ajudar a entender o que aconteceu antes e depois da ação denunciada.`,
  Cd = () => `根据所提供的信息，我们无法确认发生了什么。

该举报可能展示了部分情况，但没有包含足够的背景信息，使审核团队无法了解整个事件、核实事件的先后顺序，或判断是否违反了规则。

提交举报时，请附上清晰的证据、相关的时间戳、适用时的位置或坐标，以及足够的背景信息，帮助我们了解被举报行为前后发生了什么。`,
  Kd = () => `Anhand der bereitgestellten Informationen konnten wir nicht bestätigen, was passiert ist.

Die Meldung zeigt möglicherweise einen Teil der Situation, enthält aber nicht genug Kontext, damit das Moderationsteam den gesamten Vorfall verstehen, den Ablauf der Ereignisse überprüfen oder feststellen kann, ob eine Regel verletzt wurde.

Füge beim Einreichen einer Meldung bitte klare Beweise, relevante Zeitstempel, gegebenenfalls Ort oder Koordinaten sowie genügend Kontext hinzu, damit wir verstehen, was vor und nach der gemeldeten Aktion geschah.`,
  Fd = () => `No pudimos confirmar qué ocurrió con la información proporcionada.

El reporte puede mostrar parte de la situación, pero no incluye contexto suficiente para que el equipo de moderación entienda el incidente completo, verifique la secuencia de los hechos o determine si se infringió una regla.

Al enviar un reporte, incluye pruebas claras, marcas de tiempo relevantes, ubicación o coordenadas cuando corresponda y contexto suficiente para ayudarnos a entender qué ocurrió antes y después de la acción reportada.`,
  $d = () => `Nous n'avons pas pu confirmer ce qui s'est passé sur la base des informations fournies.

Le signalement montre peut-être une partie de la situation, mais il ne fournit pas assez de contexte pour que l'équipe de modération comprenne l'incident dans son ensemble, vérifie le déroulement des événements ou détermine si une règle a été enfreinte.

Lorsque vous soumettez un signalement, veuillez inclure des preuves claires, les horodatages pertinents, l'emplacement ou les coordonnées le cas échéant, et suffisamment de contexte pour nous aider à comprendre ce qui s'est passé avant et après l'action signalée.`,
  Gd = () => `Non siamo riusciti a confermare cosa sia successo in base alle informazioni fornite.

La segnalazione può mostrare parte della situazione, ma non include abbastanza contesto per permettere al team di moderazione di comprendere l'intero incidente, verificare la sequenza degli eventi o stabilire se una regola sia stata violata.

Quando invii una segnalazione, includi prove chiare, marche temporali pertinenti, posizione o coordinate quando applicabile e contesto sufficiente per aiutarci a capire cosa è successo prima e dopo l'azione segnalata.`,
  Vd = () => `提供された情報からは、何が起きたのかを確認できませんでした。

この報告は状況の一部を示しているかもしれませんが、モデレーションチームが事案の全体像を把握し、出来事の流れを確認し、ルール違反があったかどうかを判断するのに十分な背景情報が含まれていません。

報告を提出する際は、明確な証拠、関連するタイムスタンプ、該当する場合は場所や座標、そして報告された行為の前後に何が起きたかを理解するのに十分な背景情報を含めてください。`,
  Hd = () => `Na podstawie podanych informacji nie mogliśmy potwierdzić, co się wydarzyło.

Zgłoszenie może pokazywać część sytuacji, ale nie zawiera wystarczającego kontekstu, aby zespół moderacji mógł zrozumieć całe zdarzenie, zweryfikować przebieg wydarzeń lub ustalić, czy doszło do naruszenia zasad.

Wysyłając zgłoszenie, dołącz wyraźne dowody, odpowiednie znaczniki czasu, lokalizację lub współrzędne, jeśli dotyczy, oraz wystarczający kontekst, który pomoże nam zrozumieć, co wydarzyło się przed zgłoszonym działaniem i po nim.`,
  Wd = () => `На основании предоставленной информации мы не смогли подтвердить, что произошло.

Жалоба может показывать часть ситуации, но в ней недостаточно контекста, чтобы команда модерации могла понять инцидент целиком, проверить последовательность событий или определить, было ли нарушено правило.

При отправке жалобы прилагайте чёткие доказательства, соответствующие временные метки, местоположение или координаты, если применимо, и достаточный контекст, чтобы помочь нам понять, что происходило до и после указанного действия.`,
  Yd = () => `На основі наданої інформації ми не змогли підтвердити, що сталося.

Скарга може показувати частину ситуації, але в ній недостатньо контексту, щоб команда модерації зрозуміла весь інцидент, перевірила послідовність подій або визначила, чи було порушено правило.

Надсилаючи скаргу, додавайте чіткі докази, відповідні позначки часу, місце або координати, якщо це доречно, і достатньо контексту, щоб допомогти нам зрозуміти, що відбувалося до та після зазначеної дії.`,
  Jd = () => `Chúng tôi không thể xác nhận điều gì đã xảy ra dựa trên thông tin được cung cấp.

Báo cáo có thể cho thấy một phần tình huống, nhưng không bao gồm đủ bối cảnh để đội ngũ kiểm duyệt hiểu toàn bộ sự việc, xác minh trình tự các sự kiện hoặc xác định liệu có vi phạm quy tắc hay không.

Khi gửi báo cáo, vui lòng kèm theo bằng chứng rõ ràng, dấu thời gian liên quan, vị trí hoặc tọa độ khi cần, và đủ bối cảnh xung quanh để giúp chúng tôi hiểu điều gì đã xảy ra trước và sau hành động bị báo cáo.`,
  Qd = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Md() : e === "pt" ? Bd() : e === "ch" ? Cd() : e === "de" ? Kd() : e === "es" ? Fd() : e === "fr" ? $d() : e === "it" ? Gd() : e === "jp" ? Vd() : e === "pl" ? Hd() : e === "ru" ? Wd() : e === "uk" ? Yd() : Jd()
  },
  Zd = () => "Insufficient Context",
  Xd = () => "Contexto insuficiente",
  e_ = () => "背景信息不足",
  t_ = () => "Unzureichender Kontext",
  n_ = () => "Contexto insuficiente",
  r_ = () => "Contexte insuffisant",
  i_ = () => "Contesto insufficiente",
  o_ = () => "情報が不十分",
  a_ = () => "Niewystarczający kontekst",
  s_ = () => "Недостаточно контекста",
  c_ = () => "Недостатньо контексту",
  u_ = () => "Không đủ bối cảnh",
  l_ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Zd() : e === "pt" ? Xd() : e === "ch" ? e_() : e === "de" ? t_() : e === "es" ? n_() : e === "fr" ? r_() : e === "it" ? i_() : e === "jp" ? o_() : e === "pl" ? a_() : e === "ru" ? s_() : e === "uk" ? c_() : u_()
  },
  d_ = () => `The report contains incorrect, incomplete, inaccessible, or unusable information.

This can happen when the evidence does not match the report, the link is broken, or required details are missing.

Please review the information carefully before submitting a report. Make sure to report the correct player, make sure that it is an actual violation, and make sure to submit enough context details to help the moderation team investigate reports properly.`,
  __ = () => `A denúncia contém informações incorretas, incompletas, inacessíveis ou inutilizáveis.

Isso pode acontecer quando as evidências não correspondem à denúncia, o link está quebrado ou detalhes obrigatórios estão faltando.

Revise as informações com atenção antes de enviar uma denúncia. Certifique-se de denunciar o jogador correto, de que se trata de uma violação real e de fornecer detalhes de contexto suficientes para ajudar a equipe de moderação a investigar as denúncias adequadamente.`,
  f_ = () => `该举报包含不正确、不完整、无法访问或无法使用的信息。

这可能是因为证据与举报内容不符、链接失效，或缺少必要的细节。

提交举报前，请仔细核对信息。请确保举报的是正确的玩家、确实存在违规行为，并提供足够的背景细节，以帮助审核团队妥善调查举报。`,
  p_ = () => `Die Meldung enthält falsche, unvollständige, nicht zugängliche oder unbrauchbare Informationen.

Das kann passieren, wenn die Beweise nicht zur Meldung passen, der Link defekt ist oder erforderliche Angaben fehlen.

Bitte überprüfe die Informationen sorgfältig, bevor du eine Meldung einreichst. Stelle sicher, dass du den richtigen Spieler meldest, dass es sich tatsächlich um einen Verstoß handelt und dass du genügend Kontextdetails angibst, damit das Moderationsteam Meldungen ordnungsgemäß untersuchen kann.`,
  h_ = () => `El reporte contiene información incorrecta, incompleta, inaccesible o inservible.

Esto puede ocurrir cuando las pruebas no coinciden con el reporte, el enlace está roto o faltan datos necesarios.

Revisa la información con cuidado antes de enviar un reporte. Asegúrate de reportar al jugador correcto, de que se trata de una infracción real y de aportar suficientes detalles de contexto para ayudar al equipo de moderación a investigar los reportes adecuadamente.`,
  m_ = () => `Le signalement contient des informations incorrectes, incomplètes, inaccessibles ou inutilisables.

Cela peut arriver lorsque les preuves ne correspondent pas au signalement, que le lien est rompu ou que des détails requis sont manquants.

Veuillez vérifier attentivement les informations avant de soumettre un signalement. Assurez-vous de signaler le bon joueur, qu'il s'agit bien d'une véritable infraction et de fournir suffisamment de détails de contexte pour aider l'équipe de modération à enquêter correctement sur les signalements.`,
  g_ = () => `La segnalazione contiene informazioni errate, incomplete, inaccessibili o inutilizzabili.

Ciò può accadere quando le prove non corrispondono alla segnalazione, il link è interrotto o mancano dettagli obbligatori.

Controlla attentamente le informazioni prima di inviare una segnalazione. Assicurati di segnalare il giocatore corretto, che si tratti di una violazione reale e di fornire dettagli di contesto sufficienti per aiutare il team di moderazione a investigare correttamente le segnalazioni.`,
  w_ = () => `この報告には、誤った、不完全な、アクセスできない、または使用できない情報が含まれています。

これは、証拠が報告内容と一致しない、リンクが切れている、または必要な詳細が欠けている場合に起こり得ます。

報告を提出する前に、情報を注意深く確認してください。正しいプレイヤーを報告していること、実際に違反であること、そしてモデレーションチームが報告を適切に調査できるよう十分な背景情報を提出していることを確認してください。`,
  y_ = () => `Zgłoszenie zawiera nieprawidłowe, niepełne, niedostępne lub nieprzydatne informacje.

Może się to zdarzyć, gdy dowody nie pasują do zgłoszenia, link jest nieaktywny lub brakuje wymaganych szczegółów.

Przed wysłaniem zgłoszenia dokładnie sprawdź informacje. Upewnij się, że zgłaszasz właściwego gracza, że jest to rzeczywiste naruszenie oraz że podajesz wystarczające szczegóły kontekstu, aby pomóc zespołowi moderacji prawidłowo zbadać zgłoszenia.`,
  b_ = () => `Жалоба содержит неверную, неполную, недоступную или непригодную информацию.

Это может произойти, когда доказательства не соответствуют жалобе, ссылка не работает или отсутствуют необходимые сведения.

Внимательно проверьте информацию перед отправкой жалобы. Убедитесь, что вы жалуетесь на нужного игрока, что это действительно нарушение, и что вы предоставили достаточно контекстных деталей, чтобы помочь команде модерации правильно расследовать жалобы.`,
  v_ = () => `Скарга містить неправильну, неповну, недоступну або непридатну інформацію.

Це може статися, коли докази не відповідають скарзі, посилання не працює або відсутні обов'язкові деталі.

Уважно перевірте інформацію перед надсиланням скарги. Переконайтеся, що ви скаржитеся на правильного гравця, що це справді порушення, і що ви надаєте достатньо контекстних деталей, щоб допомогти команді модерації належно розслідувати скарги.`,
  E_ = () => `Báo cáo chứa thông tin không chính xác, không đầy đủ, không truy cập được hoặc không sử dụng được.

Điều này có thể xảy ra khi bằng chứng không khớp với báo cáo, liên kết bị hỏng hoặc thiếu các chi tiết bắt buộc.

Vui lòng xem lại thông tin cẩn thận trước khi gửi báo cáo. Hãy chắc chắn rằng bạn báo cáo đúng người chơi, rằng đó thực sự là một vi phạm, và cung cấp đủ chi tiết bối cảnh để giúp đội ngũ kiểm duyệt điều tra báo cáo một cách hợp lý.`,
  k_ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? d_() : e === "pt" ? __() : e === "ch" ? f_() : e === "de" ? p_() : e === "es" ? h_() : e === "fr" ? m_() : e === "it" ? g_() : e === "jp" ? w_() : e === "pl" ? y_() : e === "ru" ? b_() : e === "uk" ? v_() : E_()
  },
  T_ = () => "Invalid Information",
  O_ = () => "Informação inválida",
  S_ = () => "信息无效",
  I_ = () => "Ungültige Informationen",
  N_ = () => "Información no válida",
  A_ = () => "Informations non valides",
  z_ = () => "Informazioni non valide",
  R_ = () => "無効な情報",
  D_ = () => "Nieprawidłowe informacje",
  x_ = () => "Недействительная информация",
  P_ = () => "Недійсна інформація",
  j_ = () => "Thông tin không hợp lệ",
  L_ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? T_() : e === "pt" ? O_() : e === "ch" ? S_() : e === "de" ? I_() : e === "es" ? N_() : e === "fr" ? A_() : e === "it" ? z_() : e === "jp" ? R_() : e === "pl" ? D_() : e === "ru" ? x_() : e === "uk" ? P_() : j_()
  },
  q_ = () => `The reported behavior does not appear to violate the current rules.

The situation may have been frustrating, unwanted, or disruptive from your perspective, but based on the evidence provided, it does not meet the criteria for a rule violation.

Moderation actions are only taken when a report clearly shows behavior that breaks the rules. If you believe this decision is incorrect, please make sure future reports include enough context explaining why you believe that a rule was violated.`,
  U_ = () => `O comportamento denunciado não parece violar as regras atuais.

A situação pode ter sido frustrante, indesejada ou perturbadora do seu ponto de vista, mas, com base nas evidências fornecidas, ela não atende aos critérios de uma violação de regra.

Ações de moderação só são tomadas quando uma denúncia mostra claramente um comportamento que infringe as regras. Se você acredita que esta decisão está incorreta, certifique-se de que futuras denúncias incluam contexto suficiente explicando por que você acredita que uma regra foi violada.`,
  M_ = () => `被举报的行为似乎并未违反当前规则。

从您的角度看，这种情况可能令人沮丧、不受欢迎或具有干扰性，但根据所提供的证据，它并不符合违规的标准。

只有当举报清楚地显示出违反规则的行为时，才会采取审核措施。如果您认为此决定有误，请确保今后的举报包含足够的背景信息，说明您为何认为某条规则被违反。`,
  B_ = () => `Das gemeldete Verhalten scheint nicht gegen die aktuellen Regeln zu verstoßen.

Die Situation mag aus deiner Sicht frustrierend, unerwünscht oder störend gewesen sein, aber auf Grundlage der vorgelegten Beweise erfüllt sie nicht die Kriterien für einen Regelverstoß.

Moderationsmaßnahmen werden nur ergriffen, wenn eine Meldung eindeutig ein Verhalten zeigt, das gegen die Regeln verstößt. Wenn du der Meinung bist, dass diese Entscheidung falsch ist, achte bitte darauf, dass künftige Meldungen genügend Kontext enthalten und erklären, warum du glaubst, dass eine Regel verletzt wurde.`,
  C_ = () => `El comportamiento reportado no parece infringir las reglas actuales.

La situación pudo haber sido frustrante, no deseada o molesta desde tu punto de vista, pero, según las pruebas aportadas, no cumple los criterios de una infracción de reglas.

Las acciones de moderación solo se toman cuando un reporte muestra claramente un comportamiento que rompe las reglas. Si crees que esta decisión es incorrecta, asegúrate de que los reportes futuros incluyan suficiente contexto que explique por qué consideras que se infringió una regla.`,
  K_ = () => `Le comportement signalé ne semble pas enfreindre les règles actuelles.

La situation a peut-être été frustrante, indésirable ou perturbante de votre point de vue, mais d'après les preuves fournies, elle ne remplit pas les critères d'une infraction aux règles.

Des mesures de modération ne sont prises que lorsqu'un signalement montre clairement un comportement qui enfreint les règles. Si vous pensez que cette décision est incorrecte, veillez à ce que vos futurs signalements incluent suffisamment de contexte expliquant pourquoi vous estimez qu'une règle a été enfreinte.`,
  F_ = () => `Il comportamento segnalato non sembra violare le regole attuali.

La situazione potrebbe essere stata frustrante, indesiderata o fastidiosa dal tuo punto di vista, ma in base alle prove fornite non soddisfa i criteri di una violazione delle regole.

Le azioni di moderazione vengono intraprese solo quando una segnalazione mostra chiaramente un comportamento che infrange le regole. Se ritieni che questa decisione sia errata, assicurati che le segnalazioni future includano contesto sufficiente a spiegare perché ritieni che una regola sia stata violata.`,
  $_ = () => `報告された行為は、現在のルールに違反していないようです。

その状況は、あなたの視点ではいら立たしく、望ましくなく、または迷惑なものだったかもしれませんが、提供された証拠に基づくと、ルール違反の基準を満たしていません。

モデレーションの措置は、報告が明確にルールを破る行為を示している場合にのみ行われます。この判断が誤っていると思われる場合は、今後の報告に、なぜルール違反だと考えるのかを説明する十分な背景情報を含めるようにしてください。`,
  G_ = () => `Zgłoszone zachowanie nie wydaje się naruszać obowiązujących zasad.

Sytuacja mogła być z twojej perspektywy frustrująca, niechciana lub uciążliwa, ale na podstawie dostarczonych dowodów nie spełnia kryteriów naruszenia zasad.

Działania moderacyjne są podejmowane tylko wtedy, gdy zgłoszenie wyraźnie pokazuje zachowanie łamiące zasady. Jeśli uważasz, że ta decyzja jest błędna, zadbaj o to, aby przyszłe zgłoszenia zawierały wystarczający kontekst wyjaśniający, dlaczego uważasz, że doszło do naruszenia zasad.`,
  V_ = () => `Указанное поведение, по-видимому, не нарушает действующих правил.

С вашей точки зрения ситуация могла быть неприятной, нежелательной или мешающей, но на основании предоставленных доказательств она не соответствует критериям нарушения правил.

Меры модерации принимаются только тогда, когда жалоба чётко показывает поведение, нарушающее правила. Если вы считаете, что это решение неверно, постарайтесь, чтобы будущие жалобы содержали достаточно контекста, объясняющего, почему вы считаете, что правило было нарушено.`,
  H_ = () => `Зазначена поведінка, схоже, не порушує чинних правил.

З вашого погляду ситуація могла бути неприємною, небажаною або такою, що заважає, але на основі наданих доказів вона не відповідає критеріям порушення правил.

Заходи модерації вживаються лише тоді, коли скарга чітко показує поведінку, що порушує правила. Якщо ви вважаєте, що це рішення неправильне, подбайте, щоб майбутні скарги містили достатньо контексту з поясненням, чому ви вважаєте, що правило було порушено.`,
  W_ = () => `Hành vi bị báo cáo dường như không vi phạm các quy tắc hiện hành.

Tình huống có thể gây bực bội, không mong muốn hoặc gây phiền toái từ góc nhìn của bạn, nhưng dựa trên bằng chứng được cung cấp, nó không đáp ứng tiêu chí của một vi phạm quy tắc.

Các biện pháp kiểm duyệt chỉ được áp dụng khi một báo cáo cho thấy rõ hành vi vi phạm quy tắc. Nếu bạn cho rằng quyết định này không đúng, hãy đảm bảo các báo cáo trong tương lai có đủ bối cảnh giải thích vì sao bạn tin rằng một quy tắc đã bị vi phạm.`,
  Y_ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? q_() : e === "pt" ? U_() : e === "ch" ? M_() : e === "de" ? B_() : e === "es" ? C_() : e === "fr" ? K_() : e === "it" ? F_() : e === "jp" ? $_() : e === "pl" ? G_() : e === "ru" ? V_() : e === "uk" ? H_() : W_()
  },
  J_ = () => "No Rule Violation",
  Q_ = () => "Nenhuma violação de regra",
  Z_ = () => "未违反规则",
  X_ = () => "Kein Regelverstoß",
  ef = () => "Sin infracción de reglas",
  tf = () => "Aucune infraction aux règles",
  nf = () => "Nessuna violazione delle regole",
  rf = () => "ルール違反なし",
  of = () => "Brak naruszenia zasad",
  af = () => "Нарушения правил нет",
  sf = () => "Порушення правил немає",
  cf = () => "Không vi phạm quy tắc",
  uf = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? J_() : e === "pt" ? Q_() : e === "ch" ? Z_() : e === "de" ? X_() : e === "es" ? ef() : e === "fr" ? tf() : e === "it" ? nf() : e === "jp" ? rf() : e === "pl" ? of() : e === "ru" ? af() : e === "uk" ? sf() : cf()
  },
  lf = () => `The report shows behavior that may be questionable, but it is not severe or clear enough to justify a moderation action.

Some situations may be inappropriate, annoying, or borderline, but still not reach the threshold required for a punishment. In these cases, the moderation team may choose not to take formal action unless the behavior continues or becomes more serious.

If this happens again, please submit a new report with additional evidence showing a repeated pattern or a more serious violation.`,
  df = () => `A denúncia mostra um comportamento que pode ser questionável, mas não é grave nem claro o suficiente para justificar uma ação de moderação.

Algumas situações podem ser inadequadas, irritantes ou limítrofes, mas ainda assim não atingem o limite necessário para uma punição. Nesses casos, a equipe de moderação pode optar por não tomar uma ação formal, a menos que o comportamento continue ou se torne mais grave.

Se isso acontecer novamente, envie uma nova denúncia com evidências adicionais que mostrem um padrão repetido ou uma violação mais grave.`,
  _f = () => `该举报显示的行为可能存在问题，但还不够严重或明确，不足以采取审核措施。

某些情况可能不恰当、令人厌烦或处于灰色地带，但仍未达到处罚所需的门槛。在这种情况下，除非该行为继续发生或变得更加严重，否则审核团队可能选择不采取正式行动。

如果此情况再次发生，请提交一份新的举报，并附上能显示重复行为模式或更严重违规的额外证据。`,
  ff = () => `Die Meldung zeigt ein Verhalten, das fragwürdig sein mag, aber nicht schwerwiegend oder eindeutig genug ist, um eine Moderationsmaßnahme zu rechtfertigen.

Manche Situationen sind vielleicht unangemessen, störend oder grenzwertig, erreichen aber dennoch nicht die für eine Strafe erforderliche Schwelle. In solchen Fällen kann das Moderationsteam entscheiden, keine formelle Maßnahme zu ergreifen, sofern das Verhalten nicht anhält oder schwerwiegender wird.

Wenn dies erneut geschieht, reiche bitte eine neue Meldung mit zusätzlichen Beweisen ein, die ein wiederholtes Muster oder einen schwerwiegenderen Verstoß zeigen.`,
  pf = () => `El reporte muestra un comportamiento que puede ser cuestionable, pero no es lo bastante grave ni claro como para justificar una acción de moderación.

Algunas situaciones pueden ser inapropiadas, molestas o estar en el límite, pero aun así no alcanzan el umbral necesario para una sanción. En estos casos, el equipo de moderación puede optar por no tomar medidas formales a menos que el comportamiento continúe o se agrave.

Si esto vuelve a ocurrir, envía un nuevo reporte con pruebas adicionales que muestren un patrón repetido o una infracción más grave.`,
  hf = () => `Le signalement montre un comportement qui peut être discutable, mais qui n'est pas assez grave ou clair pour justifier une mesure de modération.

Certaines situations peuvent être inappropriées, agaçantes ou limites, sans pour autant atteindre le seuil requis pour une sanction. Dans ces cas, l'équipe de modération peut choisir de ne pas prendre de mesure formelle, sauf si le comportement persiste ou s'aggrave.

Si cela se reproduit, veuillez soumettre un nouveau signalement avec des preuves supplémentaires montrant un schéma répété ou une infraction plus grave.`,
  mf = () => `La segnalazione mostra un comportamento che può essere discutibile, ma non è abbastanza grave o chiaro da giustificare un'azione di moderazione.

Alcune situazioni possono essere inappropriate, fastidiose o al limite, ma non raggiungono comunque la soglia richiesta per una punizione. In questi casi, il team di moderazione può scegliere di non intervenire formalmente, a meno che il comportamento non continui o diventi più grave.

Se dovesse ripetersi, invia una nuova segnalazione con prove aggiuntive che mostrino uno schema ripetuto o una violazione più grave.`,
  gf = () => `この報告は、問題があるかもしれない行為を示していますが、モデレーションの措置を正当化するほど深刻でも明確でもありません。

一部の状況は不適切だったり、迷惑だったり、際どいものだったりするかもしれませんが、それでも処分に必要な基準には達していません。こうした場合、行為が続いたりより深刻になったりしない限り、モデレーションチームは正式な措置を取らないことを選ぶことがあります。

再び起きた場合は、繰り返しのパターンやより深刻な違反を示す追加の証拠を添えて、新しい報告を提出してください。`,
  wf = () => `Zgłoszenie pokazuje zachowanie, które może budzić wątpliwości, ale nie jest na tyle poważne ani jednoznaczne, aby uzasadniać działanie moderacyjne.

Niektóre sytuacje mogą być nieodpowiednie, irytujące lub graniczne, a mimo to nie osiągają progu wymaganego do nałożenia kary. W takich przypadkach zespół moderacji może nie podjąć formalnych działań, chyba że zachowanie będzie się powtarzać lub stanie się poważniejsze.

Jeśli sytuacja się powtórzy, prześlij nowe zgłoszenie z dodatkowymi dowodami pokazującymi powtarzający się wzorzec lub poważniejsze naruszenie.`,
  yf = () => `Жалоба показывает поведение, которое может вызывать сомнения, но оно недостаточно серьёзное или явное, чтобы оправдать меры модерации.

Некоторые ситуации могут быть неуместными, раздражающими или пограничными, но всё же не достигают порога, необходимого для наказания. В таких случаях команда модерации может решить не предпринимать официальных действий, если поведение не продолжится или не станет более серьёзным.

Если это повторится, отправьте новую жалобу с дополнительными доказательствами, показывающими повторяющийся характер или более серьёзное нарушение.`,
  bf = () => `Скарга показує поведінку, яка може викликати сумніви, але вона недостатньо серйозна чи однозначна, щоб виправдати захід модерації.

Деякі ситуації можуть бути недоречними, дратівливими або межовими, але все ж не досягають порогу, потрібного для покарання. У таких випадках команда модерації може вирішити не вживати офіційних заходів, якщо поведінка не повторюватиметься або не стане серйознішою.

Якщо це повториться, надішліть нову скаргу з додатковими доказами, що показують повторюваний характер або серйозніше порушення.`,
  vf = () => `Báo cáo cho thấy hành vi có thể đáng ngờ, nhưng chưa đủ nghiêm trọng hoặc rõ ràng để biện minh cho một biện pháp kiểm duyệt.

Một số tình huống có thể không phù hợp, gây khó chịu hoặc nằm ở ranh giới, nhưng vẫn chưa đạt đến mức cần thiết để xử phạt. Trong những trường hợp này, đội ngũ kiểm duyệt có thể chọn không hành động chính thức trừ khi hành vi tiếp diễn hoặc trở nên nghiêm trọng hơn.

Nếu điều này lại xảy ra, vui lòng gửi một báo cáo mới kèm bằng chứng bổ sung cho thấy một khuôn mẫu lặp lại hoặc một vi phạm nghiêm trọng hơn.`,
  Ef = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? lf() : e === "pt" ? df() : e === "ch" ? _f() : e === "de" ? ff() : e === "es" ? pf() : e === "fr" ? hf() : e === "it" ? mf() : e === "jp" ? gf() : e === "pl" ? wf() : e === "ru" ? yf() : e === "uk" ? bf() : vf()
  },
  kf = () => "Not Enough for Punishment",
  Tf = () => "Insuficiente para punição",
  Of = () => "不足以处罚",
  Sf = () => "Nicht ausreichend für eine Strafe",
  If = () => "Insuficiente para una sanción",
  Nf = () => "Insuffisant pour une sanction",
  Af = () => "Insufficiente per una punizione",
  zf = () => "処分には不十分",
  Rf = () => "Niewystarczające do nałożenia kary",
  Df = () => "Недостаточно для наказания",
  xf = () => "Недостатньо для покарання",
  Pf = () => "Không đủ để xử phạt",
  jf = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? kf() : e === "pt" ? Tf() : e === "ch" ? Of() : e === "de" ? Sf() : e === "es" ? If() : e === "fr" ? Nf() : e === "it" ? Af() : e === "jp" ? zf() : e === "pl" ? Rf() : e === "ru" ? Df() : e === "uk" ? xf() : Pf()
  },
  Lf = () => `This report is outside the scope of what the moderation team can act on through the report system.

This may include issues that happened outside the game, personal disputes, support requests, appeals, bug reports, or situations that are not covered by the current moderation rules.

Please use the correct support channel if your issue is related to technical problems, account issues, appeals, or other non-moderation matters.`,
  qf = () => `Esta denúncia está fora do escopo daquilo que a equipe de moderação pode tratar pelo sistema de denúncias.

Isso pode incluir problemas que aconteceram fora do jogo, disputas pessoais, pedidos de suporte, apelos, relatos de bugs ou situações que não são abrangidas pelas regras de moderação atuais.

Use o canal de suporte correto se o seu problema estiver relacionado a problemas técnicos, questões de conta, apelos ou outros assuntos que não sejam de moderação.`,
  Uf = () => `此举报超出了审核团队通过举报系统能够处理的范围。

这可能包括发生在游戏之外的问题、个人纠纷、支持请求、申诉、漏洞报告，或当前审核规则未涵盖的情况。

如果您的问题与技术故障、账户问题、申诉或其他非审核事项有关，请使用正确的支持渠道。`,
  Mf = () => `Diese Meldung liegt außerhalb dessen, was das Moderationsteam über das Meldesystem bearbeiten kann.

Dazu können Probleme gehören, die außerhalb des Spiels aufgetreten sind, persönliche Streitigkeiten, Support-Anfragen, Einsprüche, Fehlerberichte oder Situationen, die nicht von den aktuellen Moderationsregeln abgedeckt sind.

Bitte nutze den richtigen Support-Kanal, wenn dein Anliegen technische Probleme, Kontoangelegenheiten, Einsprüche oder andere nicht zur Moderation gehörende Themen betrifft.`,
  Bf = () => `Este reporte está fuera del alcance de lo que el equipo de moderación puede gestionar a través del sistema de reportes.

Esto puede incluir problemas ocurridos fuera del juego, disputas personales, solicitudes de soporte, apelaciones, reportes de errores o situaciones que no están cubiertas por las reglas de moderación actuales.

Utiliza el canal de soporte correcto si tu problema está relacionado con problemas técnicos, asuntos de cuenta, apelaciones u otros temas ajenos a la moderación.`,
  Cf = () => `Ce signalement dépasse le champ d'action de l'équipe de modération via le système de signalement.

Cela peut inclure des problèmes survenus en dehors du jeu, des différends personnels, des demandes d'assistance, des recours, des rapports de bugs ou des situations qui ne sont pas couvertes par les règles de modération actuelles.

Veuillez utiliser le bon canal d'assistance si votre problème concerne des soucis techniques, des questions de compte, des recours ou d'autres sujets ne relevant pas de la modération.`,
  Kf = () => `Questa segnalazione esula da ciò che il team di moderazione può gestire tramite il sistema di segnalazione.

Può includere problemi avvenuti al di fuori del gioco, dispute personali, richieste di assistenza, ricorsi, segnalazioni di bug o situazioni non coperte dalle attuali regole di moderazione.

Utilizza il canale di assistenza corretto se il tuo problema riguarda questioni tecniche, problemi di account, ricorsi o altre questioni non legate alla moderazione.`,
  Ff = () => `この報告は、モデレーションチームが報告システムを通じて対応できる範囲を超えています。

これには、ゲーム外で起きた問題、個人的なトラブル、サポート依頼、異議申し立て、バグ報告、または現在のモデレーションルールでは扱えない状況が含まれる場合があります。

技術的な問題、アカウントの問題、異議申し立て、その他モデレーション以外の事項に関する場合は、適切なサポート窓口をご利用ください。`,
  $f = () => `To zgłoszenie wykracza poza zakres tego, czym zespół moderacji może się zająć za pośrednictwem systemu zgłoszeń.

Może to obejmować problemy, które miały miejsce poza grą, spory osobiste, prośby o wsparcie, odwołania, zgłoszenia błędów lub sytuacje nieobjęte obecnymi zasadami moderacji.

Skorzystaj z właściwego kanału wsparcia, jeśli twój problem dotyczy kwestii technicznych, spraw związanych z kontem, odwołań lub innych zagadnień niezwiązanych z moderacją.`,
  Gf = () => `Эта жалоба выходит за рамки того, что команда модерации может рассматривать через систему жалоб.

Сюда могут относиться проблемы, возникшие вне игры, личные споры, обращения в поддержку, апелляции, сообщения об ошибках или ситуации, не охваченные действующими правилами модерации.

Пожалуйста, используйте подходящий канал поддержки, если ваш вопрос связан с техническими проблемами, вопросами учётной записи, апелляциями или другими темами, не относящимися к модерации.`,
  Vf = () => `Ця скарга виходить за межі того, що команда модерації може розглядати через систему скарг.

Сюди можуть належати проблеми, що сталися поза грою, особисті суперечки, звернення до підтримки, апеляції, повідомлення про помилки або ситуації, не охоплені чинними правилами модерації.

Будь ласка, скористайтеся відповідним каналом підтримки, якщо ваше питання стосується технічних проблем, питань облікового запису, апеляцій або інших тем, не пов'язаних із модерацією.`,
  Hf = () => `Báo cáo này nằm ngoài phạm vi mà đội ngũ kiểm duyệt có thể xử lý qua hệ thống báo cáo.

Điều này có thể bao gồm các vấn đề xảy ra bên ngoài trò chơi, tranh chấp cá nhân, yêu cầu hỗ trợ, kháng cáo, báo cáo lỗi hoặc các tình huống không thuộc phạm vi các quy tắc kiểm duyệt hiện hành.

Vui lòng sử dụng kênh hỗ trợ phù hợp nếu vấn đề của bạn liên quan đến sự cố kỹ thuật, vấn đề tài khoản, kháng cáo hoặc các vấn đề khác không thuộc về kiểm duyệt.`,
  Wf = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Lf() : e === "pt" ? qf() : e === "ch" ? Uf() : e === "de" ? Mf() : e === "es" ? Bf() : e === "fr" ? Cf() : e === "it" ? Kf() : e === "jp" ? Ff() : e === "pl" ? $f() : e === "ru" ? Gf() : e === "uk" ? Vf() : Hf()
  },
  Yf = () => "Out of Scope",
  Jf = () => "Fora do escopo",
  Qf = () => "超出处理范围",
  Zf = () => "Außerhalb des Zuständigkeitsbereichs",
  Xf = () => "Fuera del alcance",
  ep = () => "Hors du champ d'action",
  tp = () => "Fuori ambito",
  np = () => "対応範囲外",
  rp = () => "Poza zakresem",
  ip = () => "Вне зоны ответственности",
  op = () => "Поза межами компетенції",
  ap = () => "Ngoài phạm vi xử lý",
  sp = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Yf() : e === "pt" ? Jf() : e === "ch" ? Qf() : e === "de" ? Zf() : e === "es" ? Xf() : e === "fr" ? ep() : e === "it" ? tp() : e === "jp" ? np() : e === "pl" ? rp() : e === "ru" ? ip() : e === "uk" ? op() : ap()
  },
  cp = () => "Inappropriate content",
  up = () => "Conteúdo inapropriado",
  lp = () => "不当内容",
  dp = () => "Unangemessene Inhalte",
  _p = () => "Contenido inapropiado",
  fp = () => "Contenu inapproprié",
  pp = () => "Contenuto inappropriato",
  hp = () => "不適切なコンテンツ",
  mp = () => "Nieodpowiednie treści",
  gp = () => "Неприемлемый контент",
  wp = () => "Неприйнятний вміст",
  yp = () => "Nội dung không phù hợp",
  bp = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cp() : e === "pt" ? up() : e === "ch" ? lp() : e === "de" ? dp() : e === "es" ? _p() : e === "fr" ? fp() : e === "it" ? pp() : e === "jp" ? hp() : e === "pl" ? mp() : e === "ru" ? gp() : e === "uk" ? wp() : yp()
  },
  vp = () => "Explicit, hateful, or illegal content",
  Ep = () => "Conteúdo explícito, de ódio ou ilegal",
  kp = () => "露骨、仇恨或非法内容",
  Tp = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  Op = () => "Contenido explícito, de odio o ilegal",
  Sp = () => "Contenu explicite, haineux ou illégal",
  Ip = () => "Contenuto esplicito, d'odio o illegale",
  Np = () => "露骨、差別的、または違法なコンテンツ",
  Ap = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  zp = () => "Откровенный, разжигающий ненависть или незаконный контент",
  Rp = () => "Відвертий, ворожий або незаконний вміст",
  Dp = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  xp = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vp() : e === "pt" ? Ep() : e === "ch" ? kp() : e === "de" ? Tp() : e === "es" ? Op() : e === "fr" ? Sp() : e === "it" ? Ip() : e === "jp" ? Np() : e === "pl" ? Ap() : e === "ru" ? zp() : e === "uk" ? Rp() : Dp()
  },
  Pp = () => "Invalid captcha. Please try again.",
  jp = () => "Captcha inválido. Por favor, tente novamente.",
  Lp = () => "验证码无效，请重试。",
  qp = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Up = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Mp = () => "Captcha invalide. Veuillez réessayer.",
  Bp = () => "Captcha non valido. Riprova.",
  Cp = () => "キャプチャが無効です。もう一度お試しください。",
  Kp = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Fp = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  $p = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Gp = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Vp = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Pp() : e === "pt" ? jp() : e === "ch" ? Lp() : e === "de" ? qp() : e === "es" ? Up() : e === "fr" ? Mp() : e === "it" ? Bp() : e === "jp" ? Cp() : e === "pl" ? Kp() : e === "ru" ? Fp() : e === "uk" ? $p() : Gp()
  },
  Hp = () => "Invalid challenge response",
  Wp = () => "Resposta de desafio inválida",
  Yp = () => "质询响应无效",
  Jp = () => "Ungültige Challenge-Antwort",
  Qp = () => "Respuesta de desafío inválida",
  Zp = () => "Réponse au défi invalide",
  Xp = () => "Risposta alla sfida non valida",
  eh = () => "無効なチャレンジ応答",
  th = () => "Nieprawidłowa odpowiedź na wyzwanie",
  nh = () => "Неверный ответ на вызов",
  rh = () => "Недійсна відповідь на виклик",
  ih = () => "Phản hồi thử thách không hợp lệ",
  oh = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Hp() : e === "pt" ? Wp() : e === "ch" ? Yp() : e === "de" ? Jp() : e === "es" ? Qp() : e === "fr" ? Zp() : e === "it" ? Xp() : e === "jp" ? eh() : e === "pl" ? th() : e === "ru" ? nh() : e === "uk" ? rh() : ih()
  },
  ah = () => "The verification code is incorrect. Please check it and try again.",
  sh = () => "Código inválido",
  ch = () => "验证码不正确。请检查后重试。",
  uh = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  lh = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  dh = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  _h = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  fh = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  ph = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  hh = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  mh = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  gh = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  wh = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ah() : e === "pt" ? sh() : e === "ch" ? ch() : e === "de" ? uh() : e === "es" ? lh() : e === "fr" ? dh() : e === "it" ? _h() : e === "jp" ? fh() : e === "pl" ? ph() : e === "ru" ? hh() : e === "uk" ? mh() : gh()
  },
  yh = () => "Invalid discord.",
  bh = () => "Discord inválido.",
  vh = () => "无效的 Discord。",
  Eh = () => "Ungültiger Discord.",
  kh = () => "Discord inválido.",
  Th = () => "Discord invalide.",
  Oh = () => "Discord non valido.",
  Sh = () => "無効なDiscordアカウントです。",
  Ih = () => "Nieprawidłowy Discord.",
  Nh = () => "Неверный Discord.",
  Ah = () => "Некоректний Discord.",
  zh = () => "Discord không hợp lệ.",
  Rh = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yh() : e === "pt" ? bh() : e === "ch" ? vh() : e === "de" ? Eh() : e === "es" ? kh() : e === "fr" ? Th() : e === "it" ? Oh() : e === "jp" ? Sh() : e === "pl" ? Ih() : e === "ru" ? Nh() : e === "uk" ? Ah() : zh()
  },
  Dh = () => "The name contains disallowed characters or words. Please choose a different name.",
  xh = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Ph = () => "名称包含禁止的字符或词语，请选择其他名称。",
  jh = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Lh = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  qh = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Uh = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Mh = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Bh = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Ch = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Kh = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Fh = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  zt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Dh() : e === "pt" ? xh() : e === "ch" ? Ph() : e === "de" ? jh() : e === "es" ? Lh() : e === "fr" ? qh() : e === "it" ? Uh() : e === "jp" ? Mh() : e === "pl" ? Bh() : e === "ru" ? Ch() : e === "uk" ? Kh() : Fh()
  },
  $h = () => "Please enter a valid phone number with country code.",
  Gh = () => "Insira um número de telefone válido com código do país.",
  Vh = () => "请输入带国家代码的有效电话号码。",
  Hh = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Wh = () => "Introduce un número de teléfono válido con código de país.",
  Yh = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Jh = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Qh = () => "国番号付きの有効な電話番号を入力してください。",
  Zh = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Xh = () => "Введите действительный номер телефона с кодом страны.",
  em = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  tm = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  nm = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? $h() : e === "pt" ? Gh() : e === "ch" ? Vh() : e === "de" ? Hh() : e === "es" ? Wh() : e === "fr" ? Yh() : e === "it" ? Jh() : e === "jp" ? Qh() : e === "pl" ? Zh() : e === "ru" ? Xh() : e === "uk" ? em() : tm()
  },
  rm = () => "Phone number not supported. Please try another number.",
  im = () => "Número de telefone não suportado. Por favor, tente outro número.",
  om = () => "不支持此电话号码。请尝试其他号码。",
  am = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  sm = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  cm = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  um = () => "Numero di telefono non supportato. Prova con un altro numero.",
  lm = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  dm = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  _m = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  fm = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  pm = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  hm = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? rm() : e === "pt" ? im() : e === "ch" ? om() : e === "de" ? am() : e === "es" ? sm() : e === "fr" ? cm() : e === "it" ? um() : e === "jp" ? lm() : e === "pl" ? dm() : e === "ru" ? _m() : e === "uk" ? fm() : pm()
  },
  mm = () => "The new leader must be a member of the alliance",
  gm = () => "O novo líder deve ser um membro da aliança",
  wm = () => "新盟主必须是联盟成员",
  ym = () => "Der neue Anführer muss Mitglied der Allianz sein",
  bm = () => "El nuevo líder debe ser miembro de la alianza",
  vm = () => "Le nouveau chef doit être membre de l’alliance",
  Em = () => "Il nuovo leader deve essere un membro dell'alleanza",
  km = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Tm = () => "Nowy lider musi być członkiem sojuszu",
  Om = () => "Новый лидер должен быть участником альянса",
  Sm = () => "Новий лідер має бути учасником альянсу",
  Im = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Nm = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? mm() : e === "pt" ? gm() : e === "ch" ? wm() : e === "de" ? ym() : e === "es" ? bm() : e === "fr" ? vm() : e === "it" ? Em() : e === "jp" ? km() : e === "pl" ? Tm() : e === "ru" ? Om() : e === "uk" ? Sm() : Im()
  },
  Am = () => "Leaderboard is temporarily disabled",
  zm = () => "O ranking está temporariamente desativado",
  Rm = () => "排行榜已暂时停用",
  Dm = () => "Die Bestenliste ist vorübergehend deaktiviert",
  xm = () => "La clasificación está deshabilitada temporalmente",
  Pm = () => "Le classement est temporairement désactivé",
  jm = () => "La classifica è temporaneamente disattivata",
  Lm = () => "ランキングは一時的に無効になっています。",
  qm = () => "Ranking jest tymczasowo wyłączony",
  Um = () => "Таблица лидеров временно отключена",
  Mm = () => "Таблиця лідерів тимчасово вимкнена",
  Bm = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  F = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Am() : e === "pt" ? zm() : e === "ch" ? Rm() : e === "de" ? Dm() : e === "es" ? xm() : e === "fr" ? Pm() : e === "it" ? jm() : e === "jp" ? Lm() : e === "pl" ? qm() : e === "ru" ? Um() : e === "uk" ? Mm() : Bm()
  },
  Cm = () => "Location name is too big (max. 128 characters)",
  Km = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Fm = () => "位置名称过长（最大 128 个字符）",
  $m = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Gm = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Vm = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Hm = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Wm = () => "場所の名前が長すぎます（最大128文字）。",
  Ym = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Jm = () => "Название локации слишком длинное (макс. 128 символов)",
  Qm = () => "Назва локації надто довга (макс. 128 символів)",
  Zm = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Xm = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Cm() : e === "pt" ? Km() : e === "ch" ? Fm() : e === "de" ? $m() : e === "es" ? Gm() : e === "fr" ? Vm() : e === "it" ? Hm() : e === "jp" ? Wm() : e === "pl" ? Ym() : e === "ru" ? Jm() : e === "uk" ? Qm() : Zm()
  },
  eg = () => "Multi-accounting",
  tg = () => "Múltiplas contas",
  ng = () => "多账号",
  rg = () => "Multi-Accounting",
  ig = () => "Multi-cuentas",
  og = () => "Multi-comptes",
  ag = () => "Multi-account",
  sg = () => "複数アカウント使用",
  cg = () => "Multi-konta",
  ug = () => "Мультиаккаунт",
  lg = () => "Мультиакаунтинг",
  dg = () => "Nhiều tài khoản",
  _g = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? eg() : e === "pt" ? tg() : e === "ch" ? ng() : e === "de" ? rg() : e === "es" ? ig() : e === "fr" ? og() : e === "it" ? ag() : e === "jp" ? sg() : e === "pl" ? cg() : e === "ru" ? ug() : e === "uk" ? lg() : dg()
  },
  fg = () => "Use more than one account to paint pixels",
  pg = () => "Usar mais de uma conta para pintar",
  hg = () => "使用多个账号绘制像素",
  mg = () => "Mehr als ein Konto zum Malen verwenden",
  gg = () => "Uso de más de una cuenta para pintar píxeles",
  wg = () => "Utiliser plus d’un compte pour peindre",
  yg = () => "Usare più di un account per dipingere",
  bg = () => "複数のアカウントを使ってピクセルを塗った。",
  vg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Eg = () => "Использование более одного аккаунта для рисования",
  kg = () => "Використання більше ніж одного акаунта для малювання",
  Tg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Og = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? fg() : e === "pt" ? pg() : e === "ch" ? hg() : e === "de" ? mg() : e === "es" ? gg() : e === "fr" ? wg() : e === "it" ? yg() : e === "jp" ? bg() : e === "pl" ? vg() : e === "ru" ? Eg() : e === "uk" ? kg() : Tg()
  },
  Sg = n => `You can change your name again in ${n.days} days`,
  Ig = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  Ng = n => `你可以在 ${n.days} 天后再次修改名称`,
  Ag = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  zg = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  Rg = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  Dg = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  xg = n => `${n.days}日後に再び名前を変更できます。`,
  Pg = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  jg = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Lg = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  qg = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Ug = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Sg(n) : e === "pt" ? Ig(n) : e === "ch" ? Ng(n) : e === "de" ? Ag(n) : e === "es" ? zg(n) : e === "fr" ? Rg(n) : e === "it" ? Dg(n) : e === "jp" ? xg(n) : e === "pl" ? Pg(n) : e === "ru" ? jg(n) : e === "uk" ? Lg(n) : qg(n)
  },
  Mg = () => "No internet access or the servers are offline. Try again later.",
  Bg = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Cg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Kg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Fg = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  $g = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Gg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Vg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Hg = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Wg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Yg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Jg = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Qg = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Mg() : e === "pt" ? Bg() : e === "ch" ? Cg() : e === "de" ? Kg() : e === "es" ? Fg() : e === "fr" ? $g() : e === "it" ? Gg() : e === "jp" ? Vg() : e === "pl" ? Hg() : e === "ru" ? Wg() : e === "uk" ? Yg() : Jg()
  },
  Zg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Xg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  ew = () => "您无权验证电话号码。请尝试刷新页面。",
  tw = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  nw = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  rw = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  iw = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  ow = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  aw = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  sw = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  cw = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  uw = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  lw = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Zg() : e === "pt" ? Xg() : e === "ch" ? ew() : e === "de" ? tw() : e === "es" ? nw() : e === "fr" ? rw() : e === "it" ? iw() : e === "jp" ? ow() : e === "pl" ? aw() : e === "ru" ? sw() : e === "uk" ? cw() : uw()
  },
  dw = () => "Operation not allowed. Maybe you have too many favorite locations.",
  _w = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  fw = () => "操作不被允许。你的收藏位置可能过多。",
  pw = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  hw = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  mw = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  gw = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  ww = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  yw = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  bw = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  vw = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Ew = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  kw = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? dw() : e === "pt" ? _w() : e === "ch" ? fw() : e === "de" ? pw() : e === "es" ? hw() : e === "fr" ? mw() : e === "it" ? gw() : e === "jp" ? ww() : e === "pl" ? yw() : e === "ru" ? bw() : e === "uk" ? vw() : Ew()
  },
  Tw = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  Ow = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  Sw = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  Iw = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  Nw = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  Aw = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  zw = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  Rw = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  Dw = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  xw = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  Pw = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  jw = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  Lw = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Tw(n) : e === "pt" ? Ow(n) : e === "ch" ? Sw(n) : e === "de" ? Iw(n) : e === "es" ? Nw(n) : e === "fr" ? Aw(n) : e === "it" ? zw(n) : e === "jp" ? Rw(n) : e === "pl" ? Dw(n) : e === "ru" ? xw(n) : e === "uk" ? Pw(n) : jw(n)
  },
  qw = () => "You are trying to paint with a color you do not own",
  Uw = () => "Você está tentando pintar com uma cor que não possui",
  Mw = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Bw = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Cw = () => "Estás intentando pintar con un color que no posees",
  Kw = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Fw = () => "Stai cercando di dipingere con un colore che non possiedi",
  $w = () => "所持していない色で塗ろうとしています。",
  Gw = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Vw = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Hw = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Ww = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Rt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? qw() : e === "pt" ? Uw() : e === "ch" ? Mw() : e === "de" ? Bw() : e === "es" ? Cw() : e === "fr" ? Kw() : e === "it" ? Fw() : e === "jp" ? $w() : e === "pl" ? Gw() : e === "ru" ? Vw() : e === "uk" ? Hw() : Ww()
  },
  Yw = () => "Phone already used",
  Jw = () => "Telefone já usado",
  Qw = () => "电话号码已被使用",
  Zw = () => "Telefonnummer bereits verwendet",
  Xw = () => "Teléfono ya utilizado",
  ey = () => "Téléphone déjà utilisé",
  ty = () => "Telefono già utilizzato",
  ny = () => "この電話番号は既に使用されています。",
  ry = () => "Numer telefonu jest już używany",
  iy = () => "Телефон уже используется",
  oy = () => "Номер телефону вже використовується",
  ay = () => "Số điện thoại đã được sử dụng",
  sy = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Yw() : e === "pt" ? Jw() : e === "ch" ? Qw() : e === "de" ? Zw() : e === "es" ? Xw() : e === "fr" ? ey() : e === "it" ? ty() : e === "jp" ? ny() : e === "pl" ? ry() : e === "ru" ? iy() : e === "uk" ? oy() : ay()
  },
  cy = () => "This phone number's region is not supported",
  uy = () => "A região deste número de telefone não é suportada",
  ly = () => "此电话号码的地区不受支持",
  dy = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  _y = () => "La región de este número de teléfono no es compatible",
  fy = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  py = () => "La regione di questo numero di telefono non è supportata",
  hy = () => "この電話番号の地域はサポートされていません",
  my = () => "Region tego numeru telefonu nie jest obsługiwany",
  gy = () => "Регион этого номера телефона не поддерживается",
  wy = () => "Регіон цього номера телефону не підтримується",
  yy = () => "Vùng của số điện thoại này không được hỗ trợ",
  by = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? cy() : e === "pt" ? uy() : e === "ch" ? ly() : e === "de" ? dy() : e === "es" ? _y() : e === "fr" ? fy() : e === "it" ? py() : e === "jp" ? hy() : e === "pl" ? my() : e === "ru" ? gy() : e === "uk" ? wy() : yy()
  },
  vy = () => "Refresh your page to get the latest update",
  Ey = () => "Recarregue sua página para obter as últimas atualizações",
  ky = () => "刷新页面以获取最新更新",
  Ty = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Oy = () => "Actualiza la página para obtener la última versión",
  Sy = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Iy = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Ny = () => "最新の状態にするにはページを再読み込みしてください。",
  Ay = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  zy = () => "Обновите страницу, чтобы получить последние изменения",
  Ry = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Dy = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Dt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? vy() : e === "pt" ? Ey() : e === "ch" ? ky() : e === "de" ? Ty() : e === "es" ? Oy() : e === "fr" ? Sy() : e === "it" ? Iy() : e === "jp" ? Ny() : e === "pl" ? Ay() : e === "ru" ? zy() : e === "uk" ? Ry() : Dy()
  },
  xy = () => "The request timed out. Please try again.",
  Py = () => "A solicitação expirou. Por favor, tente novamente.",
  jy = () => "请求超时。请重试。",
  Ly = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  qy = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Uy = () => "La requête a expiré. Veuillez réessayer.",
  My = () => "La richiesta è scaduta. Riprova.",
  By = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Cy = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Ky = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Fy = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  $y = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Gy = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? xy() : e === "pt" ? Py() : e === "ch" ? jy() : e === "de" ? Ly() : e === "es" ? qy() : e === "fr" ? Uy() : e === "it" ? My() : e === "jp" ? By() : e === "pl" ? Cy() : e === "ru" ? Ky() : e === "uk" ? Fy() : $y()
  },
  Vy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Hy = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Wy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Yy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Jy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Qy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Zy = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Xy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  eb = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  tb = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  nb = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  rb = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ib = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Vy() : e === "pt" ? Hy() : e === "ch" ? Wy() : e === "de" ? Yy() : e === "es" ? Jy() : e === "fr" ? Qy() : e === "it" ? Zy() : e === "jp" ? Xy() : e === "pl" ? eb() : e === "ru" ? tb() : e === "uk" ? nb() : rb()
  },
  ob = () => "The service is currently unavailable. Please try again later.",
  ab = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  sb = () => "服务当前不可用。请稍后再试。",
  cb = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  ub = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  lb = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  db = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  _b = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  fb = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  pb = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  hb = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  mb = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  gb = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ob() : e === "pt" ? ab() : e === "ch" ? sb() : e === "de" ? cb() : e === "es" ? ub() : e === "fr" ? lb() : e === "it" ? db() : e === "jp" ? _b() : e === "pl" ? fb() : e === "ru" ? pb() : e === "uk" ? hb() : mb()
  },
  wb = () => "Too many attempts. Please try again later",
  yb = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  bb = () => "尝试次数过多，请稍后再试",
  vb = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Eb = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  kb = () => "Trop de tentatives. Veuillez réessayer plus tard",
  Tb = () => "Troppi tentativi. Riprova più tardi.",
  Ob = () => "試行回数が多すぎます。後で再度お試しください。",
  Sb = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Ib = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Nb = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  Ab = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  xt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? wb() : e === "pt" ? yb() : e === "ch" ? bb() : e === "de" ? vb() : e === "es" ? Eb() : e === "fr" ? kb() : e === "it" ? Tb() : e === "jp" ? Ob() : e === "pl" ? Sb() : e === "ru" ? Ib() : e === "uk" ? Nb() : Ab()
  },
  zb = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Rb = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Db = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  xb = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Pb = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  jb = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Lb = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  qb = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Ub = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Mb = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Bb = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Cb = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Kb = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? zb() : e === "pt" ? Rb() : e === "ch" ? Db() : e === "de" ? xb() : e === "es" ? Pb() : e === "fr" ? jb() : e === "it" ? Lb() : e === "jp" ? qb() : e === "pl" ? Ub() : e === "ru" ? Mb() : e === "uk" ? Bb() : Cb()
  },
  Fb = () => "The typed username does not match your current username.",
  $b = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Gb = () => "输入的用户名与当前用户名不匹配。",
  Vb = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Hb = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Wb = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Yb = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Jb = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Qb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Zb = () => "Введённое имя пользователя не совпадает с текущим.",
  Xb = () => "Введене імʼя користувача не збігається з поточним.",
  ev = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  tv = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Fb() : e === "pt" ? $b() : e === "ch" ? Gb() : e === "de" ? Vb() : e === "es" ? Hb() : e === "fr" ? Wb() : e === "it" ? Yb() : e === "jp" ? Jb() : e === "pl" ? Qb() : e === "ru" ? Zb() : e === "uk" ? Xb() : ev()
  },
  nv = () => "Unexpected server error. Try again later.",
  rv = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  iv = () => "服务器出现意外错误。请稍后再试。",
  ov = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  av = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  sv = () => "Erreur serveur inattendue. Réessayez plus tard.",
  cv = () => "Errore imprevisto del server. Riprova più tardi.",
  uv = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  lv = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  dv = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  _v = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  fv = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  s = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? nv() : e === "pt" ? rv() : e === "ch" ? iv() : e === "de" ? ov() : e === "es" ? av() : e === "fr" ? sv() : e === "it" ? cv() : e === "jp" ? uv() : e === "pl" ? lv() : e === "ru" ? dv() : e === "uk" ? _v() : fv()
  },
  pv = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  hv = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  mv = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  gv = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  wv = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  yv = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  bv = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  vv = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Ev = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  kv = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  Tv = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  Ov = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Sv = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? pv() : e === "pt" ? hv() : e === "ch" ? mv() : e === "de" ? gv() : e === "es" ? wv() : e === "fr" ? yv() : e === "it" ? bv() : e === "jp" ? vv() : e === "pl" ? Ev() : e === "ru" ? kv() : e === "uk" ? Tv() : Ov()
  },
  Iv = () => "VPN or proxy detected. Please disable your VPN and try again.",
  Nv = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  Av = () => "检测到VPN或代理。请关闭VPN后重试。",
  zv = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  Rv = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  Dv = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  xv = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  Pv = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  jv = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Lv = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  qv = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Uv = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Mv = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Iv() : e === "pt" ? Nv() : e === "ch" ? Av() : e === "de" ? zv() : e === "es" ? Rv() : e === "fr" ? Dv() : e === "it" ? xv() : e === "jp" ? Pv() : e === "pl" ? jv() : e === "ru" ? Lv() : e === "uk" ? qv() : Uv()
  },
  Bv = () => "Failed to load WebAssembly module. Try to use another browser.",
  Cv = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Kv = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Fv = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  $v = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Gv = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Vv = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Hv = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Wv = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  Yv = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  Jv = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Qv = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Zv = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Bv() : e === "pt" ? Cv() : e === "ch" ? Kv() : e === "de" ? Fv() : e === "es" ? $v() : e === "fr" ? Gv() : e === "it" ? Vv() : e === "jp" ? Hv() : e === "pl" ? Wv() : e === "ru" ? Yv() : e === "uk" ? Jv() : Qv()
  },
  Xv = () => "You already have this item. Please refresh the page.",
  eE = () => "Você já possui este item. Atualize a página.",
  tE = () => "你已经拥有此物品。请刷新页面。",
  nE = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  rE = () => "Ya tienes este ítem. Actualiza la página.",
  iE = () => "Vous possédez déjà cet objet. Actualisez la page.",
  oE = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  aE = () => "このアイテムはすでに所持しています。ページを更新してください。",
  sE = () => "Masz już ten przedmiot. Odśwież stronę.",
  cE = () => "У вас уже есть этот предмет. Обновите страницу.",
  uE = () => "У вас уже є цей предмет. Оновіть сторінку.",
  lE = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Pt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Xv() : e === "pt" ? eE() : e === "ch" ? tE() : e === "de" ? nE() : e === "es" ? rE() : e === "fr" ? iE() : e === "it" ? oE() : e === "jp" ? aE() : e === "pl" ? sE() : e === "ru" ? cE() : e === "uk" ? uE() : lE()
  },
  dE = () => "You are already in an alliance",
  _E = () => "Você já está em uma aliança",
  fE = () => "你已经在一个联盟中",
  pE = () => "Du bist bereits in einer Allianz",
  hE = () => "Ya estás en una alianza",
  mE = () => "Vous êtes déjà dans une alliance",
  gE = () => "Sei già in un'alleanza",
  wE = () => "すでにアライアンスに所属しています。",
  yE = () => "Jesteś już w sojuszu",
  bE = () => "Вы уже состоите в альянсе",
  vE = () => "Ви вже перебуваєте в альянсі",
  EE = () => "Bạn đã ở trong một liên minh",
  kE = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? dE() : e === "pt" ? _E() : e === "ch" ? fE() : e === "de" ? pE() : e === "es" ? hE() : e === "fr" ? mE() : e === "it" ? gE() : e === "jp" ? wE() : e === "pl" ? yE() : e === "ru" ? bE() : e === "uk" ? vE() : EE()
  },
  TE = () => "You are not allowed to do this",
  OE = () => "Você não tem permissão para fazer isso",
  SE = () => "你无权执行此操作",
  IE = () => "Du bist dazu nicht berechtigt",
  NE = () => "No tienes permiso para hacer esto",
  AE = () => "Vous n’êtes pas autorisé à faire cela",
  zE = () => "Non hai il permesso di farlo",
  RE = () => "この操作を行う権限がありません。",
  DE = () => "Nie masz uprawnień, aby to zrobić",
  xE = () => "У вас нет прав для этого действия",
  PE = () => "Ви не маєте права це робити",
  jE = () => "Bạn không có quyền làm việc này",
  $ = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? TE() : e === "pt" ? OE() : e === "ch" ? SE() : e === "de" ? IE() : e === "es" ? NE() : e === "fr" ? AE() : e === "it" ? zE() : e === "jp" ? RE() : e === "pl" ? DE() : e === "ru" ? xE() : e === "uk" ? PE() : jE()
  },
  LE = () => "You do not have enough Droplets to buy this item.",
  qE = () => "Você não tem Droplets suficientes para comprar este item.",
  UE = () => "你的 Droplets 不足，无法购买此物品。",
  ME = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  BE = () => "No tienes suficientes Droplets para comprar este ítem.",
  CE = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  KE = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  FE = () => "このアイテムを購入するのに十分なDropletsがありません。",
  $E = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  GE = () => "У вас недостаточно Droplets для покупки этого предмета.",
  VE = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  HE = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  jt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? LE() : e === "pt" ? qE() : e === "ch" ? UE() : e === "de" ? ME() : e === "es" ? BE() : e === "fr" ? CE() : e === "it" ? KE() : e === "jp" ? FE() : e === "pl" ? $E() : e === "ru" ? GE() : e === "uk" ? VE() : HE()
  },
  WE = () => "You need to be logged in to paint",
  YE = () => "Você precisa estar conectado para pintar",
  JE = () => "你需要登录才能进行绘制",
  QE = () => "Du musst eingeloggt sein, um zu malen",
  ZE = () => "Debes iniciar sesión para pintar",
  XE = () => "Vous devez être connecté pour peindre",
  ek = () => "Devi avere effettuato l'accesso per dipingere",
  tk = () => "ペイントするにはログインが必要です。",
  nk = () => "Musisz być zalogowany, aby malować",
  rk = () => "Чтобы рисовать, нужно войти в аккаунт",
  ik = () => "Щоб малювати, необхідно увійти в акаунт",
  ok = () => "Bạn cần đăng nhập để tô",
  Lt = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? WE() : e === "pt" ? YE() : e === "ch" ? JE() : e === "de" ? QE() : e === "es" ? ZE() : e === "fr" ? XE() : e === "it" ? ek() : e === "jp" ? tk() : e === "pl" ? nk() : e === "ru" ? rk() : e === "uk" ? ik() : ok()
  },
  ak = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  sk = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  ck = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  uk = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  lk = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  dk = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  _k = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  fk = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  pk = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  hk = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  mk = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  gk = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  wk = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? ak() : e === "pt" ? sk() : e === "ch" ? ck() : e === "de" ? uk() : e === "es" ? lk() : e === "fr" ? dk() : e === "it" ? _k() : e === "jp" ? fk() : e === "pl" ? pk() : e === "ru" ? hk() : e === "uk" ? mk() : gk()
  },
  yk = n => `Your account has been suspended out until ${n.until}`,
  bk = n => `A sua conta está suspensa até ${n.until}`,
  vk = n => `你的账号已被暂停至 ${n.until}`,
  Ek = n => `Dein Konto ist gesperrt bis ${n.until}`,
  kk = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  Tk = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  Ok = n => `Il tuo account è sospeso fino al ${n.until}`,
  Sk = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  Ik = n => `Twoje konto zostało zawieszone do ${n.until}`,
  Nk = n => `Ваш аккаунт заблокирован до ${n.until}`,
  Ak = n => `Ваш акаунт призупинено до ${n.until}`,
  zk = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  qt = (n, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? yk(n) : e === "pt" ? bk(n) : e === "ch" ? vk(n) : e === "de" ? Ek(n) : e === "es" ? kk(n) : e === "fr" ? Tk(n) : e === "it" ? Ok(n) : e === "jp" ? Sk(n) : e === "pl" ? Ik(n) : e === "ru" ? Nk(n) : e === "uk" ? Ak(n) : zk(n)
  },
  Rk = () => "A correction is already pending for this ticket.",
  Dk = () => "Já existe uma correção pendente para este ticket.",
  xk = () => "此工单已存在待审核的更正请求。",
  Pk = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  jk = () => "Ya hay una corrección pendiente para este ticket.",
  Lk = () => "Une correction est déjà en attente pour ce ticket.",
  qk = () => "Una correzione è già in sospeso per questo ticket.",
  Uk = () => "このチケットには未処理の修正があります。",
  Mk = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Bk = () => "Для этого тикета уже есть запрос на исправление.",
  Ck = () => "Для цього тікета вже є запит на перевірці.",
  Kk = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Fk = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? Rk() : e === "pt" ? Dk() : e === "ch" ? xk() : e === "de" ? Pk() : e === "es" ? jk() : e === "fr" ? Lk() : e === "it" ? qk() : e === "jp" ? Uk() : e === "pl" ? Mk() : e === "ru" ? Bk() : e === "uk" ? Ck() : Kk()
  },
  $k = () => "You cannot review your own correction request.",
  Gk = () => "Você não pode revisar sua própria solicitação de correção.",
  Vk = () => "不能审核自己提交的更正请求。",
  Hk = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Wk = () => "No puedes revisar tu propia solicitud de corrección.",
  Yk = () => "Tu ne peux pas examiner ta propre demande de correction.",
  Jk = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  Qk = () => "自分のリクエストはレビューできません。",
  Zk = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Xk = () => "Нельзя рассматривать собственный запрос.",
  eT = () => "Не можна перевіряти власний запит.",
  tT = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  nT = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? $k() : e === "pt" ? Gk() : e === "ch" ? Vk() : e === "de" ? Hk() : e === "es" ? Wk() : e === "fr" ? Yk() : e === "it" ? Jk() : e === "jp" ? Qk() : e === "pl" ? Zk() : e === "ru" ? Xk() : e === "uk" ? eT() : tT()
  },
  rT = () => "This correction has already been reviewed.",
  iT = () => "Esta correção já foi revisada.",
  oT = () => "此请求已被审核。",
  aT = () => "Diese Korrektur wurde bereits geprüft.",
  sT = () => "Esta corrección ya ha sido revisada.",
  cT = () => "Cette correction a déjà été examinée.",
  uT = () => "Questa correzione è già stata revisionata.",
  lT = () => "このリクエストはすでにレビュー済みです。",
  dT = () => "Ta prośba została już rozpatrzona.",
  _T = () => "Этот запрос уже рассмотрен.",
  fT = () => "Цей запит вже перевірено.",
  pT = () => "Yêu cầu này đã được duyệt.",
  hT = (n = {}, t = {}) => {
    const e = t.locale ?? d();
    return e === "en" ? rT() : e === "pt" ? iT() : e === "ch" ? oT() : e === "de" ? aT() : e === "es" ? sT() : e === "fr" ? cT() : e === "it" ? uT() : e === "jp" ? lT() : e === "pl" ? dT() : e === "ru" ? _T() : e === "uk" ? fT() : pT()
  },
  B = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function mO(n) {
  const t = Math.floor(n / B.hour);
  n -= t * B.hour;
  const e = Math.floor(n / B.minute);
  n -= e * B.minute;
  const i = Math.floor(n / B.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${i}` : `${e}:${i}`
}

function gO(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    i = String(n.getHours()).padStart(2, "0"),
    o = String(n.getMinutes()).padStart(2, "0"),
    c = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${i}:${o}:${c}`
}
const wO = {
    griefing: Au(),
    "multi-accounting": _g(),
    "hate-speech": tl(),
    bot: ho(),
    doxxing: xs(),
    "inappropriate-content": bp(),
    other: Co()
  },
  yO = {
    doxxing: Vs(),
    "hate-speech": pl(),
    griefing: Ku(),
    "multi-accounting": Og(),
    bot: No(),
    "inappropriate-content": xp(),
    other: ea()
  },
  bO = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Ut = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  vO = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  mT = 365 * B.day;

function Zt(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function EO(n, t = Date.now()) {
  const e = Zt(n);
  return e === null ? !1 : e - t >= mT
}

function kO(n, t = Date.now()) {
  const e = Zt(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    i = Math.floor(r / 1440),
    o = Math.floor(r % 1440 / 60),
    c = r % 60;
  return {
    days: i,
    hours: o,
    minutes: c
  }
}
const tt = {
    insufficient_context: l_(),
    no_rule_violation: uf(),
    not_enough_for_punishment: jf(),
    caused_by_glitch: Ud(),
    out_of_scope: sp(),
    invalid_information: L_(),
    allowed_by_event: _d(),
    already_handled: Bl()
  },
  TO = {
    insufficient_context: Qd(),
    no_rule_violation: Y_(),
    not_enough_for_punishment: Ef(),
    caused_by_glitch: Od(),
    out_of_scope: Wf(),
    invalid_information: k_(),
    allowed_by_event: Xl(),
    already_handled: Il()
  },
  OO = Object.keys(tt).map(n => ({
    value: n,
    label: tt[n]
  }));

function SO(n) {
  return n in tt
}
const gT = [{
    tileSize: 1e3,
    zoom: 11
  }],
  wT = 4,
  yT = 6e3,
  bT = [{
    name: "Transparent",
    rgb: [0, 0, 0]
  }, {
    name: "Black",
    rgb: [0, 0, 0]
  }, {
    name: "Dark Gray",
    rgb: [60, 60, 60]
  }, {
    name: "Gray",
    rgb: [120, 120, 120]
  }, {
    name: "Light Gray",
    rgb: [210, 210, 210]
  }, {
    name: "White",
    rgb: [255, 255, 255]
  }, {
    name: "Deep Red",
    rgb: [96, 0, 24]
  }, {
    name: "Red",
    rgb: [237, 28, 36]
  }, {
    name: "Orange",
    rgb: [255, 127, 39]
  }, {
    name: "Gold",
    rgb: [246, 170, 9]
  }, {
    name: "Yellow",
    rgb: [249, 221, 59]
  }, {
    name: "Light Yellow",
    rgb: [255, 250, 188]
  }, {
    name: "Dark Green",
    rgb: [14, 185, 104]
  }, {
    name: "Green",
    rgb: [19, 230, 123]
  }, {
    name: "Light Green",
    rgb: [135, 255, 94]
  }, {
    name: "Dark Teal",
    rgb: [12, 129, 110]
  }, {
    name: "Teal",
    rgb: [16, 174, 166]
  }, {
    name: "Light Teal",
    rgb: [19, 225, 190]
  }, {
    name: "Dark Blue",
    rgb: [40, 80, 158]
  }, {
    name: "Blue",
    rgb: [64, 147, 228]
  }, {
    name: "Cyan",
    rgb: [96, 247, 242]
  }, {
    name: "Indigo",
    rgb: [107, 80, 246]
  }, {
    name: "Light Indigo",
    rgb: [153, 177, 251]
  }, {
    name: "Dark Purple",
    rgb: [120, 12, 153]
  }, {
    name: "Purple",
    rgb: [170, 56, 185]
  }, {
    name: "Light Purple",
    rgb: [224, 159, 249]
  }, {
    name: "Dark Pink",
    rgb: [203, 0, 122]
  }, {
    name: "Pink",
    rgb: [236, 31, 128]
  }, {
    name: "Light Pink",
    rgb: [243, 141, 169]
  }, {
    name: "Dark Brown",
    rgb: [104, 70, 52]
  }, {
    name: "Brown",
    rgb: [149, 104, 42]
  }, {
    name: "Beige",
    rgb: [248, 178, 119]
  }, {
    name: "Medium Gray",
    rgb: [170, 170, 170]
  }, {
    name: "Dark Red",
    rgb: [165, 14, 30]
  }, {
    name: "Light Red",
    rgb: [250, 128, 114]
  }, {
    name: "Dark Orange",
    rgb: [228, 92, 26]
  }, {
    name: "Light Tan",
    rgb: [214, 181, 148]
  }, {
    name: "Dark Goldenrod",
    rgb: [156, 132, 49]
  }, {
    name: "Goldenrod",
    rgb: [197, 173, 49]
  }, {
    name: "Light Goldenrod",
    rgb: [232, 212, 95]
  }, {
    name: "Dark Olive",
    rgb: [74, 107, 58]
  }, {
    name: "Olive",
    rgb: [90, 148, 74]
  }, {
    name: "Light Olive",
    rgb: [132, 197, 115]
  }, {
    name: "Dark Cyan",
    rgb: [15, 121, 159]
  }, {
    name: "Light Cyan",
    rgb: [187, 250, 242]
  }, {
    name: "Light Blue",
    rgb: [125, 199, 255]
  }, {
    name: "Dark Indigo",
    rgb: [77, 49, 184]
  }, {
    name: "Dark Slate Blue",
    rgb: [74, 66, 132]
  }, {
    name: "Slate Blue",
    rgb: [122, 113, 196]
  }, {
    name: "Light Slate Blue",
    rgb: [181, 174, 241]
  }, {
    name: "Light Brown",
    rgb: [219, 164, 99]
  }, {
    name: "Dark Beige",
    rgb: [209, 128, 81]
  }, {
    name: "Light Beige",
    rgb: [255, 197, 165]
  }, {
    name: "Dark Peach",
    rgb: [155, 82, 73]
  }, {
    name: "Peach",
    rgb: [209, 128, 120]
  }, {
    name: "Light Peach",
    rgb: [250, 182, 164]
  }, {
    name: "Dark Tan",
    rgb: [123, 99, 82]
  }, {
    name: "Tan",
    rgb: [156, 132, 107]
  }, {
    name: "Dark Slate",
    rgb: [51, 57, 65]
  }, {
    name: "Slate",
    rgb: [109, 117, 141]
  }, {
    name: "Light Slate",
    rgb: [179, 185, 209]
  }, {
    name: "Dark Stone",
    rgb: [109, 100, 63]
  }, {
    name: "Stone",
    rgb: [148, 140, 107]
  }, {
    name: "Light Stone",
    rgb: [205, 197, 158]
  }],
  vT = {
    price: {
      googlePlayBilling: 1.2
    }
  },
  ET = {
    10: {
      name: "25,000 Droplets",
      price: 500,
      isDollar: !0,
      lookupKey: "droplets_5",
      items: [{
        name: "Droplet",
        amount: 25e3
      }]
    },
    20: {
      name: "78,750 Droplets",
      price: 1500,
      isDollar: !0,
      lookupKey: "droplets_15",
      items: [{
        name: "Droplet",
        amount: 78750
      }]
    },
    30: {
      name: "165,000 Droplets",
      price: 3e3,
      isDollar: !0,
      lookupKey: "droplets_30",
      items: [{
        name: "Droplet",
        amount: 165e3
      }]
    },
    40: {
      name: "287,500 Droplets",
      price: 5e3,
      isDollar: !0,
      lookupKey: "droplets_50",
      items: [{
        name: "Droplet",
        amount: 287500
      }]
    },
    50: {
      name: "450,000 Droplets",
      price: 7500,
      isDollar: !0,
      lookupKey: "droplets_75",
      items: [{
        name: "Droplet",
        amount: 45e4
      }]
    },
    60: {
      name: "625,000 Droplets",
      price: 1e4,
      isDollar: !0,
      lookupKey: "droplets_100",
      items: [{
        name: "Droplet",
        amount: 625e3
      }]
    },
    70: {
      name: "+5 Max. Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Max. Charge",
        amount: 5
      }]
    },
    80: {
      name: "+30 Paint Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Paint Charge",
        amount: 30
      }]
    },
    100: {
      name: "Unlock Color",
      price: 2e3,
      isDollar: !1,
      items: [{
        name: "Color",
        amount: 1
      }]
    },
    110: {
      name: "Flag",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Flag",
        amount: 1
      }]
    },
    120: {
      name: "Profile Picture",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Profile Picture",
        amount: 1
      }]
    },
    130: {
      name: "FRAME",
      isDollar: !1,
      items: [{
        name: "FRAME",
        amount: 1
      }]
    },
    140: {
      name: "Custom Name Font",
      isDollar: !1,
      items: [{
        name: "Custom Name Font",
        amount: 1
      }]
    },
    150: {
      name: "Custom Name Style",
      isDollar: !1,
      items: [{
        name: "Custom Name Style",
        amount: 1
      }]
    }
  },
  kT = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  TT = {
    dashboard: {
      summary: {
        counters: {
          tickets: "staff.dashboard.summary.counters.tickets",
          reports: "staff.dashboard.summary.counters.reports"
        },
        events: {
          status: "staff.dashboard.summary.events.status",
          start: "staff.dashboard.summary.events.start",
          stop: "staff.dashboard.summary.events.stop",
          anchors: "staff.dashboard.summary.events.anchors"
        },
        users: {
          ban: "staff.dashboard.summary.users.ban",
          timeout: "staff.dashboard.summary.users.timeout",
          unban: "staff.dashboard.summary.users.unban",
          incrementDroplets: "staff.dashboard.summary.users.increment_droplets",
          phoneVerification: "staff.dashboard.summary.users.phone_verification"
        }
      },
      team: {
        tickets: "staff.dashboard.team.tickets",
        reports: "staff.dashboard.team.reports"
      },
      users: {
        info: "staff.dashboard.users.info",
        rename: "staff.dashboard.users.rename",
        notesGet: "staff.dashboard.users.notes_get",
        notesSet: "staff.dashboard.users.notes_set",
        purchases: "staff.dashboard.users.purchases",
        ticketsHistory: "staff.dashboard.users.tickets_history",
        ticketsStats: "staff.dashboard.users.tickets_stats",
        appealsHistory: "staff.dashboard.users.appeals_history",
        timeout: "staff.dashboard.users.timeout",
        removeTimeout: "staff.dashboard.users.remove_timeout",
        ban: "staff.dashboard.users.ban",
        removeBan: "staff.dashboard.users.remove_ban",
        personalInformation: "staff.dashboard.users.personal_information",
        editEmail: "staff.dashboard.users.edit_email",
        disconnect: "staff.dashboard.users.disconnect",
        setDroplets: "staff.dashboard.users.set_droplets",
        phoneVerification: "staff.dashboard.users.phone_verification",
        removePicture: "staff.dashboard.users.remove_picture"
      },
      permissions: {
        get: "staff.dashboard.permissions.get",
        set: "staff.dashboard.permissions.set"
      },
      alliances: {
        search: "staff.dashboard.alliances.search",
        details: "staff.dashboard.alliances.details",
        members: "staff.dashboard.alliances.members",
        rename: "staff.dashboard.alliances.rename",
        leader: "staff.dashboard.alliances.leader",
        banAll: "staff.dashboard.alliances.ban_all",
        role: "staff.dashboard.alliances.role",
        removeMember: "staff.dashboard.alliances.remove_member"
      },
      auditLogs: {
        see: "staff.dashboard.audit_logs.see"
      },
      banAppeals: {
        see: "staff.dashboard.ban_appeals.see"
      },
      kpi: {
        tickets: "staff.dashboard.kpi.tickets"
      },
      storeManager: {
        frames: "staff.dashboard.store_manager.frames",
        fonts: "staff.dashboard.store_manager.fonts",
        styles: "staff.dashboard.store_manager.styles",
        badges: "staff.dashboard.store_manager.badges"
      },
      anticheat: {
        see: "staff.dashboard.anticheat.see"
      }
    },
    tickets: {
      assign: "staff.tickets.assign",
      closedToday: "staff.tickets.closed_today",
      openCount: "staff.tickets.open_count",
      translate: "staff.tickets.translate",
      setStatus: "staff.tickets.set_status",
      revert: "staff.tickets.revert",
      revertReview: "staff.tickets.revert_review"
    },
    appeals: {
      assign: "staff.appeals.assign",
      openCount: "staff.appeals.open_count",
      ticketsHistory: "staff.appeals.tickets_history",
      notes_get: "staff.appeals.notes_get",
      notes_set: "staff.appeals.notes_set",
      translate: "staff.appeals.translate",
      solve: "staff.appeals.solve"
    },
    tools: {
      selectArea: {
        timeout: "staff.tools.select_area.timeout",
        ban: "staff.tools.select_area.ban",
        clear: "staff.tools.select_area.clear",
        info: "staff.tools.select_area.info",
        phoneVerification: "staff.tools.select_area.phone_verification",
        reverse: "staff.tools.select_area.reverse",
        timelapse: "staff.tools.select_area.timelapse"
      },
      selectPixel: {
        timeout: "staff.tools.select_pixel.timeout",
        ban: "staff.tools.select_pixel.ban",
        seeRole: "staff.tools.select_pixel.see_role",
        seePunishment: "staff.tools.select_pixel.see_punishment"
      },
      autoPainter: {
        paint: "staff.tools.auto_painter.paint",
        transparent: "staff.tools.auto_painter.transparent",
        noCharges: "staff.tools.auto_painter.no_charges",
        asUser: "staff.tools.auto_painter.as_user",
        noSizeLimit: "staff.tools.auto_painter.no_size_limit"
      },
      wayback: "staff.tools.wayback"
    },
    ui: {
      themeDarkMode: "staff.ui.theme.dark_mode",
      tooglePixelArt: "staff.ui.toggle_pixel_art"
    },
    cosmetics: {
      viewCosmetics: "staff.cosmetics.view_cosmetics",
      manageCosmetics: "staff.cosmetics.manage_cosmetics",
      assignCosmetics: "staff.cosmetics.assign_cosmetics"
    }
  },
  OT = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  ST = {
    areaRadius: 1e3
  },
  K = {
    seasons: gT,
    regionSize: wT,
    refreshIntervalMs: yT,
    colors: bT,
    platforms: vT,
    products: ET,
    countries: kT,
    permissions: TT,
    settings: OT,
    moderation: ST
  },
  Ke = K,
  IT = K.seasons,
  Xt = K.seasons.length - 1,
  IO = K.seasons[Xt].zoom,
  NO = K.seasons[Xt].tileSize,
  AO = K.permissions,
  NT = K.settings,
  zO = K.platforms.price.googlePlayBilling;

function RO(n) {
  return Ke.countries[n - 1]
}

function nt(n) {
  return nt.map.get(n)
}(n => {
  n.sharedProducts = Object.entries(Ke.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), n.map = AT(n.sharedProducts, t => t.lookupKey)
})(nt || (nt = {}));

function AT(n, t) {
  const e = new Map;
  for (const r in n) {
    const i = Reflect.get(n, r),
      o = t(i, r, n);
    e.set(o, i)
  }
  return e
}
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Mt(n, t) {
  const e = {};
  for (const r of n) {
    const i = t(r);
    let o = e[i];
    o ? o.push(r) : e[i] = [r]
  }
  return e
}

function DO(n, t) {
  const e = {};
  for (const r of n) {
    const i = t(r);
    e[i] = r
  }
  return e
}
const zT = 30 * B.minute;
var ve, Ee;
class RT {
  constructor(t) {
    b(this, ve, S(!0));
    b(this, Ee, S(null));
    w(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return k(p(this, ve))
  }
  set online(t) {
    O(p(this, ve), t, !0)
  }
  get serverTimeOffsetMs() {
    return k(p(this, Ee))
  }
  set serverTimeOffsetMs(t) {
    O(p(this, Ee), t, !0)
  }
  hasServerTimeEstimate() {
    return this.serverTimeOffsetMs !== null
  }
  getEstimatedServerNowMs() {
    const t = Date.now();
    return this.serverTimeOffsetMs === null ? t - 6e4 : t + this.serverTimeOffsetMs
  }
  clampWaybackTimestamp(t) {
    if (!Number.isFinite(t)) return 0;
    const e = Math.trunc(t);
    if (e <= 0) return 0;
    const r = Math.trunc(this.getEstimatedServerNowMs());
    return e > r ? r : e
  }
  updateServerTimeEstimate(t) {
    const e = t.headers.get("date");
    if (!e) return;
    const r = new Date(e).getTime();
    Number.isFinite(r) && (this.serverTimeOffsetMs = r - Date.now())
  }
  async paint(t) {
    const e = Mt(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      r = {
        season: t[0].season,
        tiles: Object.values(e).map(u => ({
          x: u[0].tile[0],
          y: u[0].tile[1],
          pixels: {
            x: u.map(f => f.pixel[0]),
            y: u.map(f => f.pixel[1]),
            colors: u.map(f => f.colorIdx)
          }
        }))
      },
      i = JSON.stringify(r),
      o = await ie.getHeaders(i),
      c = await this.request("/paint", {
        method: "POST",
        body: i,
        headers: o,
        credentials: "include"
      });
    if (c.status !== a.OK) {
      if (c.status === a.UNAUTHORIZED) throw new Error(Lt());
      if (c.status === a.FORBIDDEN) {
        if (c.headers.get("cf-mitigated") === "challenge") throw new Error(At());
        const u = await c.json();
        if ((u == null ? void 0 : u.error) === "timeout") {
          const f = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
          throw new Error(qt({
            until: f.toLocaleString()
          }))
        }
        if ((u == null ? void 0 : u.error) === "refresh") throw new Error(Dt());
        if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(Rt());
        if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(It());
        if ((u == null ? void 0 : u.error) === "challenge-required")
          if (u.tier) {
            if (await Tt(u.tier)) return this.paint(t);
            throw new Error(Ye())
          } else console.error("Challenge required but no tier provided", u);
        H.refresh()
      } else throw new Error(s())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, i, o) => `/staff/tools/select-area/clear/s${r}/pixel/${i}/${o}`, e)
  }
  async createReverseSession(t) {
    const e = await this.request("/staff/tools/select-area/reverse/session", {
      method: "POST",
      body: t.buffer,
      headers: {
        "Content-Type": "application/octet-stream"
      },
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: i,
      beforeTimestamp: o
    } = e, c = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: i,
        beforeTimestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status !== a.OK) throw new l(s(), c.status);
    return c.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: i,
      timestamp: o
    } = e, c = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: i,
        timestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status !== a.OK) throw new l(s(), c.status);
    return c.json()
  }
  async getReverseTimelapse(t, e) {
    const r = await this.request("/staff/tools/select-area/reverse/timelapse", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        paceMode: e.paceMode,
        fps: e.fps,
        durationSeconds: e.durationSeconds,
        maxFrameCount: e.maxFrameCount,
        beforeTimestamp: e.beforeTimestamp ?? 0
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (r.status === a.BAD_REQUEST) {
      const i = await r.json(),
        o = (i == null ? void 0 : i.error) ?? "";
      throw o === "timelapse_too_many_events" ? new l(ib(), a.BAD_REQUEST) : new l(typeof o == "string" && o ? o : s(), a.BAD_REQUEST)
    }
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: i,
      timestamp: o
    } = e, c = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: i,
        timestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status !== a.OK) throw new l(s(), c.status);
    return c.json()
  }
  async sendPaintRequests(t, e, r, i) {
    const o = Mt(t, f => `t=(${f.tile[0]},${f.tile[1]}),s=${f.season}`),
      u = (await Promise.all(Object.values(o).map(async f => {
        const [_, T] = f[0].tile, g = f[0].season, A = {
          colors: f.map(z => z.colorIdx),
          coords: f.flatMap(z => z.pixel),
          csid: r
        }, L = JSON.stringify(A), I = e(g, _, T), R = await ie.getHeaders(L);
        return this.request(I, {
          method: "POST",
          body: L,
          headers: R,
          credentials: "include"
        })
      }))).filter(f => f.status !== a.OK);
    if (u.length) {
      const f = u[0];
      if (f.status === a.UNAUTHORIZED) throw new Error(Lt());
      if (f.status === a.FORBIDDEN) {
        if (f.headers.get("cf-mitigated") === "challenge") throw new Error(At());
        const _ = await f.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const T = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(qt({
            until: T.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(Dt());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(Rt());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(It());
        H.refresh()
      } else throw new Error(s())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const i = DT(t),
      o = await xT(i),
      c = new FormData;
    c.append("fingerprint", e), c.append("season", i.season.toString()), c.append("px0", i.offsetX.toString()), c.append("py0", i.offsetY.toString()), c.append("width", i.width.toString()), c.append("height", i.height.toString()), c.append("pixels", t.length.toString()), c.append("bitmap", o, "auto-painter.png"), c.append("userId", r.toString());
    const u = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: c,
      credentials: "include"
    });
    if (u.status === a.FORBIDDEN) {
      const f = await u.json().catch(() => null);
      if (typeof(f == null ? void 0 : f.charges) == "number") throw new Error(Lw({
        charges: Math.floor(f.charges),
        pixels: t.length
      }));
      const _ = typeof(f == null ? void 0 : f.error) == "string" ? f.error.trim() : "";
      throw _ && _ !== "Forbidden" ? new Error(_) : new Error("Auto painter is restricted to administrators.")
    }
    if (u.status !== a.OK) throw new Error(s());
    return u.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [i, o]
  }) {
    const c = new URLSearchParams;
    c.set("x", String(i)), c.set("y", String(o));
    const u = await this.request(`/s${t}/pixel/${e}/${r}?${c.toString()}`, {
      credentials: "include"
    });
    if (u.status !== a.OK) {
      const f = await u.text();
      throw new Error($c({
        err: f
      }))
    }
    return u.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [i, o],
    p1: [c, u]
  }) {
    const f = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${i}&y0=${o}&x1=${c}&y1=${u}`, {
      credentials: "include"
    });
    if (f.status !== a.OK) {
      const I = await f.text();
      throw console.error("Error while fetching pixel area info", I), new Error(s())
    }
    const _ = await f.arrayBuffer(),
      T = new DataView(_),
      g = Math.floor(_.byteLength / 5),
      A = new Uint32Array(g),
      L = new Uint8Array(g);
    for (let I = 0; I < g; I++) {
      const R = I * 5;
      A[I] = T.getUint32(R, !0), L[I] = T.getUint8(R + 4)
    }
    return {
      paintedBy: A,
      colors: L
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === a.OK) return await t.json()
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === a.OK) return (await t.json()).email
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(await t.text());
    return await t.json()
  }
  async driveStatus() {
    const t = await this.request("/drive/status", {
      credentials: "include"
    });
    return t.status !== a.OK ? !1 : !!(await t.json()).connected
  }
  async driveConnect(t) {
    const e = await this.request("/drive/connect", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: t
      })
    });
    if (e.status !== a.OK) throw new Error(`drive connect failed: ${e.status}`);
    return e.json()
  }
  async driveToken() {
    const t = await this.request("/drive/token", {
      credentials: "include",
      throwOnStatus: !1
    });
    if (t.status === a.CONFLICT) return null;
    if (t.status !== a.OK) throw new Error(`drive token failed: ${t.status}`);
    return t.json()
  }
  async driveDisconnect() {
    await this.request("/drive/disconnect", {
      method: "POST",
      credentials: "include",
      throwOnStatus: !1
    })
  }
  async createEmbeddedCheckout(t) {
    const e = await this.request("/payment/create-checkout-session", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        lookup_key: t
      })
    });
    if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(St());
    if (e.status !== a.OK) throw new Error(await e.text());
    return e.json()
  }
  async refreshStripeSession(t) {
    await this.request(`/payment/refresh-session/${t}`, {
      method: "POST",
      credentials: "include"
    })
  }
  async refreshFastspringSession(t) {
    const e = await this.request(`/payment/fastspring/refresh-session/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (!e.ok) throw new Error(`fastspring refresh failed: ${e.status}`);
    return await e.json()
  }
  async getLastFastspringOrder() {
    const t = await this.request("/payment/fastspring/orders/last", {
      credentials: "include"
    });
    if (t.status === a.NOT_FOUND) return null;
    if (!t.ok) throw new Error(`Failed to get last FastSpring order: ${t.status} ${t.statusText}`);
    return await t.json()
  }
  async markFastspringOrderAsRead(t) {
    const e = await this.request(`/payment/fastspring/orders/${t}/mark-as-read`, {
      method: "PATCH",
      credentials: "include"
    });
    if (!e.ok) throw new Error(`Failed to update FastSpring order: ${e.status} ${e.statusText}`)
  }
  async getOtpCooldown() {
    const t = await this.request("/anticheat/otp/cooldown", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(s());
    return await t.json()
  }
  async sendOtp(t) {
    const e = await this.request("/anticheat/otp/send", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: t
      }),
      throwOnStatus: !1
    });
    if (e.status === a.BAD_REQUEST) throw new Error(nm());
    if (e.status === a.CONFLICT) throw new Error(sy());
    if (e.status === a.FORBIDDEN) throw new Error(lw());
    if (e.status === a.TOO_MANY_REQUESTS) throw new Error(xt());
    if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(by());
    if (e.status === a.LOCKED) throw new Error(Sv());
    if (e.status === a.UNPROCESSABLE_ENTITY) throw new Error(hm());
    if (e.status === a.NOT_ACCEPTABLE) throw new Error(Mv());
    if (e.status === a.PRECONDITION_FAILED) throw new Error(cs());
    if (e.status !== a.OK) throw new Error(s());
    return await e.json()
  }
  async verifyChallenge(t) {
    let e;
    switch (t.type) {
      case "pow":
        e = {
          code: t.challengeId,
          nonce: t.nonce
        };
        break;
      case "captcha":
        e = {
          code: t.sessionId
        };
        break;
      case "otp":
        e = {
          code: t.code
        }
    }
    const r = await this.request("/anticheat/challenge/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e),
      headers: {
        "x-fp": await Qe()
      }
    });
    if (t.type === "otp") {
      if (r.status === a.GONE) throw new Error(mu());
      if (r.status === a.BAD_REQUEST) throw new Error(wh());
      if (r.status === a.TOO_MANY_REQUESTS) throw new Error(xt());
      if (r.status !== a.OK) throw new Error(s())
    } else {
      if (r.status === a.BAD_REQUEST) throw new Error(oh());
      if (r.status !== a.OK) throw new Error(s())
    }
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === a.BAD_REQUEST) {
      const r = await e.json(),
        i = (r == null ? void 0 : r.error) ?? "";
      if (i === "invalid_name") throw new Error(zt());
      if (i === "invalid_discord") throw new Error(Rh());
      if (typeof i == "string" && i.startsWith("name_change_cooldown:")) {
        const o = parseInt(i.split(":")[1] ?? "0", 10);
        throw new Error(Ug({
          days: o
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== a.OK) throw new Error(s())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === a.BAD_REQUEST) throw new Error(tv());
    if (e.status !== a.OK) throw new Error(s())
  }
  async favoriteLocation(t) {
    const e = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: t[0],
        longitude: t[1]
      }),
      credentials: "include"
    });
    if (e.status === a.FORBIDDEN) throw new Error(kw());
    if (e.status !== a.OK) throw new Error(s())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== a.OK) throw new Error(s())
  }
  async updateFavoriteLocation(t, e) {
    const r = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: t,
        name: e
      }),
      credentials: "include"
    });
    if (r.status === a.BAD_REQUEST) throw new Error(Xm());
    if (r.status !== a.OK) throw new Error(s())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== a.OK) throw new Error(F());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== a.OK) throw new Error(F());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === a.OK) return r.json();
    throw new Error(F())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === a.OK) return r.json();
    throw new Error(F())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === a.OK) return r.json();
    throw new Error(F())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(F())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < zT || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
      credentials: "include",
      keepalive: !0,
      throwOnStatus: !1
    }).catch(() => {
      this.lastHotspotRequestAt = 0
    }))
  }
  async getMapHotspots() {
    const t = await this.request("/map/hotspots", {
      credentials: "include"
    });
    return t.status !== 200 ? [] : (this.lastHotspotRequestAt = Date.now(), t.json())
  }
  async getRandomTile(t) {
    const e = await this.request(`/s${t}/tile/random`);
    if (e.status !== a.OK) throw new Error(s());
    return e.json()
  }
  async purchase(t) {
    const e = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: t
      })
    });
    if (e.status !== a.OK) throw e.status === a.NOT_FOUND ? new Error(Nt()) : e.status === a.FORBIDDEN ? new Error(jt()) : e.status === a.CONFLICT ? new Error(Pt()) : new Error(s())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === a.OK) return t.json();
    if (t.status === a.NOT_FOUND) return;
    throw new Error(s())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === a.OK) return e.json();
    if (e.status === a.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(Ki()) : r.error === "name_taken" ? new Error(Ai()) : r.error == "empty_name" ? new Error(to()) : new Error(s())
    } else throw e.status === a.FORBIDDEN ? new Error(kE()) : new Error(s())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== a.OK) throw new Error(s())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error($()) : e.status === a.BAD_REQUEST ? new Error(ru()) : new Error(s())
  }
  async updateAllianceHeadquarters(t, e) {
    const r = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: t,
        longitude: e
      })
    });
    if (r.status !== a.OK) throw r.status === a.FORBIDDEN ? new Error($()) : new Error(s())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw e.status === a.FORBIDDEN ? new Error($()) : new Error(F())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === a.OK) return t.json();
    throw t.status === a.FORBIDDEN ? new Error($()) : new Error(s())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case a.OK:
        return "success";
      case a.ALREADY_REPORTED:
        return "in-another-alliance";
      case a.UNAUTHORIZED:
        return "not-logged-in";
      case a.FORBIDDEN:
        return "banned";
      case a.BAD_REQUEST:
      case a.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(s())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(s())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) return;
    if (e.status !== a.OK) throw new l(s(), e.status);
    const r = await e.json();
    return {
      id: Number(r.id),
      name: String(r.name),
      pixelsPainted: Number((r == null ? void 0 : r.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(t) {
    const e = new URLSearchParams({
        q: t
      }),
      r = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== a.OK) throw new l(s(), r.status);
    const i = await r.json();
    return (Array.isArray(i) ? i : []).map(o => ({
      id: Number(o.id),
      name: String(o.name ?? ""),
      pixelsPainted: Number((o == null ? void 0 : o.pixels_painted) ?? 0)
    }))
  }
  async searchAlliances(t) {
    return this.searchAlliance(t)
  }
  async getAllianceFull(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}/full`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) return null;
    if (e.status !== a.OK) throw new l(s(), e.status);
    const r = await e.json(),
      i = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
    return {
      id: Number(r == null ? void 0 : r.id),
      name: String((r == null ? void 0 : r.name) ?? ""),
      description: (r == null ? void 0 : r.description) ?? null,
      ownerId: Number((r == null ? void 0 : r.ownerId) ?? (r == null ? void 0 : r.created_by)),
      ownerName: (r == null ? void 0 : r.ownerName) ?? null,
      hqName: (r == null ? void 0 : r.hqName) ?? null,
      hqLatitude: (r == null ? void 0 : r.hqLatitude) ?? (r == null ? void 0 : r.hq_latitude) ?? null,
      hqLongitude: (r == null ? void 0 : r.hqLongitude) ?? (r == null ? void 0 : r.hq_longitude) ?? null,
      pixelsPainted: Number((r == null ? void 0 : r.pixelsPainted) ?? (r == null ? void 0 : r.pixels_painted) ?? 0),
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? i.length),
      members: i.map(o => ({
        id: Number(o == null ? void 0 : o.id),
        name: String((o == null ? void 0 : o.name) ?? `#${o==null?void 0:o.id}`),
        picture: (o == null ? void 0 : o.picture) ?? null,
        pixelsPainted: Number((o == null ? void 0 : o.pixelsPainted) ?? (o == null ? void 0 : o.pixels_painted) ?? 0),
        lastPixelLatitude: (o == null ? void 0 : o.lastPixelLatitude) ?? null,
        lastPixelLongitude: (o == null ? void 0 : o.lastPixelLongitude) ?? null,
        role: (o == null ? void 0 : o.alliance_role) === "admin" || (o == null ? void 0 : o.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(t, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      i = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (i.status === a.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (i.status !== a.OK) throw new l(s(), i.status);
    const o = await i.json(),
      c = Array.isArray(o == null ? void 0 : o.members) ? o.members : [];
    return {
      members: c.map(u => ({
        id: Number(u == null ? void 0 : u.id),
        name: String((u == null ? void 0 : u.name) ?? `#${u==null?void 0:u.id}`),
        picture: (u == null ? void 0 : u.picture) ?? null,
        pixelsPainted: Number((u == null ? void 0 : u.pixelsPainted) ?? (u == null ? void 0 : u.pixels_painted) ?? 0),
        lastPixelLatitude: (u == null ? void 0 : u.lastPixelLatitude) ?? null,
        lastPixelLongitude: (u == null ? void 0 : u.lastPixelLongitude) ?? null,
        role: (u == null ? void 0 : u.alliance_role) === "admin" || (u == null ? void 0 : u.role) === "admin" ? "admin" : "member"
      })),
      total: Number((o == null ? void 0 : o.total) ?? c.length)
    }
  }
  async renameAlliance(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (r.status === a.BAD_REQUEST) {
      const i = await r.json().catch(() => ({}));
      throw new Error((i == null ? void 0 : i.error) ?? s())
    } else if (r.status !== a.OK) throw new l(s(), r.status)
  }
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === a.BAD_REQUEST) {
      const i = await r.json();
      throw (i == null ? void 0 : i.error) === "user_not_in_alliance" ? new Error(Nm()) : new Error(s())
    } else if (r.status !== a.OK) throw new l(s(), r.status)
  }
  async banAllAllianceMembers(t, e, r) {
    const i = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const i = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error($()) : new Error(s())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error($()) : new Error(s())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== a.OK) throw new Error(s())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(s());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== a.OK) throw new Error(s())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error($()) : new Error(s())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getPlayAccountId() {
    const t = await this.request("/payment/play/account-id", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(s());
    return t.json()
  }
  async verifyPlayPurchase(t) {
    const e = await this.request("/payment/play/verify", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    });
    if (e.status === a.BAD_REQUEST) {
      const r = await e.json().catch(() => ({}));
      throw new Error((r == null ? void 0 : r.error) ?? "Invalid Play purchase")
    }
    if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(St());
    if (e.status !== a.OK) throw new Error(s());
    return e.json()
  }
  async verifyPendingPlayPurchases() {
    const t = await this.request("/payment/play/verify-pending", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(s());
    return t.json()
  }
  async getPlayClaimStatus(t) {
    const e = await this.request(`/payment/play/claim/${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) return {
      status: "unknown",
      droplets: 0
    };
    if (e.status !== a.OK) throw new Error(s());
    return e.json()
  }
  async listPlayPurchaseHistory() {
    const t = await this.request("/payment/play/history", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(s());
    return t.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((i, o) => Ut[i.reason] - Ut[o.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    const {
      tickets: e
    } = await t.json();
    return e
  }
  async assignNewTickets() {
    const t = await this.request("/staff/tickets/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, i, o) {
    const c = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: i,
        ignoreReason: o
      })
    });
    if (c.status !== a.OK && c.status !== a.BAD_REQUEST) throw new l(s(), c.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(t) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === a.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new l(Fk(), a.CONFLICT) : new l(s(), a.CONFLICT)
    }
    if (e.status !== a.OK) throw new l(s(), e.status);
    return e.json()
  }
  async listTicketReversals(t = {}) {
    const e = new URLSearchParams;
    t.status && e.set("status", t.status), t.page != null && e.set("page", String(t.page)), t.pageSize != null && e.set("pageSize", String(t.pageSize));
    const r = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
      i = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== a.OK) throw new l(s(), i.status);
    return (await i.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return (await e.json()).reversal
  }
  async reviewTicketReversal(t, e, r) {
    const i = await this.request(`/staff/tickets/reversals/${t}/review`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        decision: e,
        notes: r
      })
    });
    if (i.status === a.FORBIDDEN) throw new l(nT(), a.FORBIDDEN);
    if (i.status === a.CONFLICT) throw new l(hT(), a.CONFLICT);
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async request(t, e) {
    var c;
    let r;
    e = {
      credentials: "include",
      ...e
    };
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (u) {
      throw console.error("Fetch error:", u), this.online = !1, new Error(Oa(), {
        cause: u
      })
    }
    if (r.status === a.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Kb());
    const i = ((c = r.headers.get("cf-mitigated")) == null ? void 0 : c.toLowerCase()) === "challenge";
    if (r.status === 403 && i) {
      if (ie.setCfLikelyAutomated(!0), !await Jt()) throw new Error(Ye());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === a.TOO_MANY_REQUESTS) throw new Error(wk());
      if (r.status === a.REQUEST_TIMEOUT) throw new Error(Gy());
      if (r.status === a.SERVICE_UNAVAILABLE) throw new Error(gb())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    const i = await r.json();
    return {
      items: i.items ?? [],
      globals: i.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return (await r.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return (await r.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
    }))
  }
  async getMultipleUsersInfoById(t) {
    const e = await this.request("/staff/tools/select-area/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t
      })
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new l(s(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new l(s(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      i = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async getUserPunishments(t) {
    const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return (await e.json()).punishments ?? []
  }
  async getPunishmentTicket(t) {
    const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return (await e.json()).ticket
  }
  async overturnPunishment(t) {
    const e = await this.request("/staff/dashboard/users/overturn-punishment", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        punishmentId: t
      })
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      i = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== a.OK) throw new l(s(), i.status);
    return i.json()
  }
  async addUserNote(t, e, r) {
    const i = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(i, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (o.status !== a.OK) throw new l(s(), o.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return e.json()
  }
  async setUserPermissions(t, e) {
    const r = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        permissions: Array.from(e)
      })
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    const i = await r.json();
    return Array.isArray(i == null ? void 0 : i.permissions) ? i.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(o => {
      const c = o.is_dollar ?? o.isDollar ?? o.currency ?? o.Currency ?? 0;
      let u;
      if (typeof c == "string") {
        const g = c.toLowerCase();
        u = g === "usd" || g === "dollar" || g === "true"
      } else typeof c == "number" ? u = c !== 0 : u = !!c;
      const f = typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : "",
        _ = o.product_variant ?? o.productVariant,
        T = _ == null || _ === "" ? null : Number(_);
      return {
        product_name: String(o.productName ?? o.product_name ?? ""),
        amount: Number(o.amount ?? 0),
        price: Number(o.price ?? 0),
        is_dollar: u,
        created_at: f,
        product_variant: Number.isInteger(T) ? T : null
      }
    })
  }
  async postSetUserDroplets(t, e) {
    const r = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        droplets: e
      })
    });
    if (r.status !== a.OK) throw new l(s(), r.status)
  }
  async postAdminRenameUser(t, e, r) {
    const i = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: r
      })
    });
    if (i.status === a.BAD_REQUEST) {
      const o = await i.json(),
        c = (o == null ? void 0 : o.error) ?? "";
      throw c === "invalid_name" ? new l(zt(), a.BAD_REQUEST) : new l(typeof c == "string" && c ? c : s(), a.BAD_REQUEST)
    }
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async postAdminChangeUserEmail(t, e) {
    const r = await this.request("/staff/dashboard/users/email", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        email: e
      })
    });
    if (r.status === a.BAD_REQUEST) {
      const i = await r.json(),
        o = (i == null ? void 0 : i.error) ?? "";
      throw o === "email_required" || o === "invalid_email" ? new l(Rc(), a.BAD_REQUEST) : new l(typeof o == "string" && o ? o : s(), a.BAD_REQUEST)
    }
    if (r.status === a.CONFLICT) {
      const i = await r.json();
      if (((i == null ? void 0 : i.error) ?? "") === "email_already_in_use") {
        const c = new l(typeof(i == null ? void 0 : i.userId) == "number" ? wc({
          userId: i.userId
        }) : oc(), a.CONFLICT);
        throw typeof(i == null ? void 0 : i.userId) == "number" && (c.userId = i.userId), c
      }
      throw new l(s(), a.CONFLICT)
    }
    if (r.status === a.NOT_FOUND) throw new l("User not found.", a.NOT_FOUND);
    if (r.status !== a.OK) throw new l(s(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return e.json()
  }
  async postAdminRemoveUserPicture(t) {
    const e = await this.request("/staff/dashboard/users/remove-picture", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pictureId: t
      })
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && r.set("sortBy", t.sortBy), t.sortDir && r.set("sortDir", t.sortDir), t.status && r.set("status", t.status), e === "appeals" && r.set("appealId", String(t.appealId));
    const i = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      o = await this.request(i, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== a.OK) throw new l(s(), o.status);
    const c = await o.json();
    return Array.isArray(c == null ? void 0 : c.tickets) ? c.tickets : []
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    const i = await r.json();
    return Array.isArray(i == null ? void 0 : i.appeals) ? i.appeals : []
  }
  async getModerationTranslate(t, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      i = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (i.status !== a.OK) throw new l(s(), i.status);
    const o = await i.json();
    return o == null ? void 0 : o.translation
  }
  mapTicketsToReportRows(t, e) {
    var i, o, c, u, f;
    const r = [];
    for (const _ of t) {
      const T = _.status ?? "open";
      if (e === "received") {
        for (const g of _.reports) r.push({
          id: String(g.id),
          ticketId: String(_.id),
          createdAt: g.createdAt ?? _.createdAt,
          byUser: {
            id: Number(g.reportedBy),
            name: String(g.reportedByName ?? g.reportedBy),
            picture: g.reportedByPicture ?? null
          },
          reason: String(g.reason),
          status: T
        });
        continue
      }
      if (e === "sent") {
        for (const g of _.reports) r.push({
          id: String(g.id),
          ticketId: String(_.id),
          createdAt: g.createdAt ?? _.createdAt,
          toUser: {
            id: Number(_.reportedUser.id),
            name: String(_.reportedUser.name),
            picture: _.reportedUser.picture ?? null
          },
          reason: String(g.reason),
          status: T
        });
        continue
      }
      r.push({
        id: String(_.id),
        ticketId: String(_.id),
        createdAt: _.createdAt,
        handledBy: _.status && _.status !== "open" ? {
          id: ((i = _.handledBy) == null ? void 0 : i.id) ?? 0,
          name: ((o = _.handledBy) == null ? void 0 : o.name) ?? "Moderator",
          picture: ((c = _.handledBy) == null ? void 0 : c.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((f = (u = _.reports) == null ? void 0 : u[0]) == null ? void 0 : f.reason) ?? "other"),
        status: T
      })
    }
    return r.sort((_, T) => new Date(T.createdAt).getTime() - new Date(_.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.NO_CONTENT) throw new l(s(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async banUsers(t, e, r) {
    const i = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async timeoutUsers(t, e, r) {
    const i = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async incrementUsersDroplets(t, e, r) {
    const i = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: r
      })
    });
    if (i.status !== a.OK) throw new l(s(), i.status)
  }
  async postUnbanUsers(t, e) {
    const r = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== a.OK) throw new l(s(), r.status)
  }
  async postBulkPhoneVerification(t, e) {
    const r = await this.request("/staff/dashboard/summary/users/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return await r.json()
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.json()
  }
  async postUsersSuspend(t, e, r) {
    let i;
    switch (e) {
      case "dashboard":
        i = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        i = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        i = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(i, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== a.OK) throw new Error(s())
  }
  async postSelectAreaPhoneVerification(t, e = "") {
    const r = await this.request("/staff/tools/select-area/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return await r.json()
  }
  async postDashboardUserPhoneVerification(t, e = "") {
    const r = await this.request("/staff/dashboard/users/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: [t],
        notes: e
      })
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return await r.json()
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return e.json()
  }
  async submitBanAppeal(t, e) {
    const r = JSON.stringify(e ? {
        message: t,
        ticketId: e
      } : {
        message: t
      }),
      i = await ie.getHeaders(r),
      o = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: r,
        headers: i
      });
    if (o.status === a.FORBIDDEN) {
      const c = await o.json();
      if ((c == null ? void 0 : c.error) === "challenge-required" && c.tier) {
        if (await Tt(c.tier)) return this.submitBanAppeal(t, e);
        throw new l(Ye(), o.status)
      }
    }
    if (o.status !== a.OK && o.status !== a.ALREADY_REPORTED) throw new l(s(), o.status);
    return o.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async postSolveAppeal(t, e) {
    const r = await this.request(`/staff/appeals/${t}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    const e = await t.json();
    return !(e != null && e.active) || !Array.isArray(e == null ? void 0 : e.punishments) ? null : {
      punishments: e.punishments.map(i => ({
        kind: (i == null ? void 0 : i.kind) === "ban" ? "ban" : "timeout",
        reason: i == null ? void 0 : i.reason,
        timeoutUntil: typeof(i == null ? void 0 : i.timeoutUntil) == "string" ? i.timeoutUntil : void 0,
        reportedLatitude: typeof(i == null ? void 0 : i.reportedLatitude) == "number" ? i.reportedLatitude : void 0,
        reportedLongitude: typeof(i == null ? void 0 : i.reportedLongitude) == "number" ? i.reportedLongitude : void 0,
        zoom: typeof(i == null ? void 0 : i.zoom) == "number" ? i.zoom : void 0,
        appealSubmitted: (i == null ? void 0 : i.appealSubmitted) === !0,
        ticketId: typeof(i == null ? void 0 : i.ticketId) == "string" ? i.ticketId : void 0
      }))
    }
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const r = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      i = await this.request(r, {
        credentials: "include"
      });
    if (i.status !== a.OK) throw new l(s(), i.status);
    return i.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== a.OK) throw new l(s(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const i = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (i.status !== a.OK) throw new l(s(), i.status);
    return i.json()
  }
  async getAnticheatSignalAnalysis(t, e, r) {
    const i = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(r)}`, {
      method: "GET",
      credentials: "include"
    });
    if (i.status !== a.OK) throw new l(s(), i.status);
    return i.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Qe()
      }
    });
    if (!r.ok) throw r.status === 500 ? new l(s(), r.status) : new l(Vp(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < IT.length,
      i = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= NT.tools.wayback.limit,
      o = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      c = t.cursorTs !== void 0,
      u = t.cursorUserId !== void 0,
      f = t.cursorAllianceId !== void 0,
      _ = t.cursorPixelsCount !== void 0,
      T = c || u || f || _,
      g = c && u && f && _;
    let A = !0;
    return T && (A = g && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !i || !o || !e || !A)
  }
  getSafeWaybackInput(t) {
    return t.season = Math.trunc(t.season), t.limit = Math.trunc(t.limit), t.timestamp = Math.trunc(t.timestamp), t.tileX = Math.trunc(t.tileX), t.tileY = Math.trunc(t.tileY), t.cursorTs !== void 0 && (t.cursorTs = Math.trunc(t.cursorTs)), t.cursorUserId !== void 0 && (t.cursorUserId = Math.trunc(t.cursorUserId)), t.cursorAllianceId !== void 0 && (t.cursorAllianceId = Math.trunc(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && (t.cursorPixelsCount = Math.trunc(t.cursorPixelsCount)), t
  }
  async getWaybackEvents(t) {
    if (!this.validWaybackInput(t)) throw new Error("Invalid query params");
    t = this.getSafeWaybackInput(t);
    const e = new URLSearchParams;
    t.cursorTs !== void 0 && e.set("cursorTs", String(t.cursorTs)), t.cursorUserId !== void 0 && e.set("cursorUserId", String(t.cursorUserId)), t.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(t.cursorPixelsCount));
    const r = `/staff/tools/wayback/s${t.season}/l${t.limit}/x${t.tileX}/y${t.tileY}/t${t.timestamp}`,
      i = e.toString(),
      o = await this.request(i.length > 0 ? `${r}?${i}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status === a.FORBIDDEN) throw new Error("Access denied");
    if (o.status !== a.OK) throw new Error("Failed to fetch wayback events");
    return o.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) throw new Error(Nt());
    if (e.status === a.FORBIDDEN) throw new Error(jt());
    if (e.status === a.CONFLICT) throw new Error(Pt());
    if (e.status !== a.OK) throw new Error(s())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(s(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.json()
  }
  async postCreateFrame(t) {
    const e = new FormData;
    e.append("name", t.name), e.append("image", t.image), e.append("description", t.description), e.append("value", t.value.toString()), e.append("rarity", t.rarity), e.append("purchasable", t.purchasable.toString());
    const r = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== a.OK) throw new l(s(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async getR2Images(t) {
    const e = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      }),
      r = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.json()
  }
  async postUploadR2Image(t) {
    const e = new FormData;
    t.name && e.append("name", t.name), e.append("image", t.image);
    const r = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== a.OK) throw new l(s(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(s(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === a.OK
  }
}
ve = new WeakMap, Ee = new WeakMap;

function DT(n) {
  var A, L;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const I of n)
    if (I.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (A = Ke.seasons) == null ? void 0 : A[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let i = Number.POSITIVE_INFINITY,
    o = Number.POSITIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY;
  const f = n.map(I => {
      const R = Math.round(I.tile[0] * r + I.pixel[0]),
        z = Math.round(I.tile[1] * r + I.pixel[1]);
      return R < i && (i = R), z < o && (o = z), R > c && (c = R), z > u && (u = z), {
        x: R,
        y: z,
        colorIdx: I.colorIdx
      }
    }),
    _ = c - i + 1,
    T = u - o + 1;
  if (!Number.isFinite(_) || !Number.isFinite(T) || _ <= 0 || T <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const g = new Uint8ClampedArray(_ * T * 4);
  for (const {
      x: I,
      y: R,
      colorIdx: z
    }
    of f) {
    const _t = (L = Ke.colors) == null ? void 0 : L[z];
    if (!_t) throw new Error(`Unknown palette color index: ${z}`);
    const on = I - i,
      je = ((R - o) * _ + on) * 4,
      [an, sn, cn] = _t.rgb;
    g[je] = an, g[je + 1] = sn, g[je + 2] = cn, g[je + 3] = z === 0 ? 1 : 255
  }
  return {
    data: g,
    width: _,
    height: T,
    offsetX: i,
    offsetY: o,
    season: t
  }
}
async function xT(n) {
  const t = PT(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((i, o) => {
    t.toBlob(c => {
      if (!c) {
        o(new Error("Failed to encode auto painter bitmap."));
        return
      }
      i(c)
    }, "image/png")
  })
}

function PT(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let C = new RT(ot);
typeof window < "u" && fn(() => {
  let n = C.online;
  pn(() => {
    const t = C.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const xO = n => new URL(n, ot).toString();

function en(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function jT(n, t) {
  for (const e of t)
    if (en(n, e)) return !0;
  return !1
}

function tn(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function LT(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class qT {
  constructor(t) {
    w(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      i = t % 8;
    if (r >= this.bytes.length) {
      const c = new Uint8Array(r + 1),
        u = c.length - this.bytes.length;
      for (let f = 0; f < this.bytes.length; f++) c[f + u] = this.bytes[f];
      this.bytes = c
    }
    const o = this.bytes.length - 1 - r;
    e ? this.bytes[o] = this.bytes[o] | 1 << i : this.bytes[o] = this.bytes[o] & ~(1 << i)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      i = this.bytes.length;
    return e > i ? !1 : (this.bytes[i - 1 - e] & 1 << r) !== 0
  }
}

function PO(n) {
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onload = () => {
      const i = r.result;
      if (!i || typeof i != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(i.substring(i.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}

function jO(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${LT(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const i = r.result;
      if (typeof i != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(i)
    }, r.onerror = e, r.readAsDataURL(n)
  })
}

function LO(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    i = e.indexOf(";base64"),
    o = (i === -1 ? e : e.slice(0, i)) || "text/plain";
  if (i !== -1) {
    const c = tn(r),
      u = new Uint8Array(c.byteLength);
    return u.set(c), new Blob([u], {
      type: o
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: o
  })
}

function qO(...n) {
  return n.filter(Boolean).join(" ")
}
const UT = typeof document < "u";
let Bt = 0;
var ke, Te, Oe;
class MT {
  constructor() {
    b(this, ke, S(Ce([])));
    b(this, Te, S(Ce([])));
    b(this, Oe, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    w(this, "addToast", t => {
      UT && this.toasts.unshift(t)
    });
    w(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: i
    }) => {
      const o = this.toasts.findIndex(u => u.id === t),
        c = this.toasts[o];
      this.toasts[o] = {
        ...c,
        ...e,
        id: t,
        title: i,
        type: r,
        updated: !0
      }
    });
    w(this, "create", t => {
      var u;
      const {
        message: e,
        ...r
      } = t, i = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((u = t.id) == null ? void 0 : u.length) > 0 ? t.id : Bt++, o = t.dismissable === void 0 ? !0 : t.dismissable, c = t.type === void 0 ? "default" : t.type;
      return pt(() => {
        this.toasts.find(_ => _.id === i) ? this.updateToast({
          id: i,
          data: t,
          type: c,
          message: e,
          dismissable: o
        }) : this.addToast({
          ...r,
          id: i,
          title: e,
          dismissable: o,
          type: c
        })
      }), i
    });
    w(this, "dismiss", t => (pt(() => {
      if (t === void 0) {
        this.toasts = this.toasts.map(r => ({
          ...r,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(r => r.id === t);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), t));
    w(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = p(this, Oe).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    w(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    w(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    w(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    w(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    w(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    w(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    w(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const i = t instanceof Promise ? t : t();
      let o = r !== void 0;
      return i.then(c => {
        if (typeof c == "object" && c && "ok" in c && typeof c.ok == "boolean" && !c.ok) {
          o = !1;
          const u = BT(c);
          this.create({
            id: r,
            type: "error",
            message: u
          })
        } else if (e.success !== void 0) {
          o = !1;
          const u = typeof e.success == "function" ? e.success(c) : e.success;
          this.create({
            id: r,
            type: "success",
            message: u
          })
        }
      }).catch(c => {
        if (e.error !== void 0) {
          o = !1;
          const u = typeof e.error == "function" ? e.error(c) : e.error;
          this.create({
            id: r,
            type: "error",
            message: u
          })
        }
      }).finally(() => {
        var c;
        o && (this.dismiss(r), r = void 0), (c = e.finally) == null || c.call(e)
      }), r
    });
    w(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || Bt++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    w(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    w(this, "setHeight", t => {
      const e = p(this, Oe).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    w(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return k(p(this, ke))
  }
  set toasts(t) {
    O(p(this, ke), t, !0)
  }
  get heights() {
    return k(p(this, Te))
  }
  set heights(t) {
    O(p(this, Te), t, !0)
  }
}
ke = new WeakMap, Te = new WeakMap, Oe = new WeakMap;

function BT(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const D = new MT;

function CT(n, t) {
  return D.create({
    message: n,
    ...t
  })
}
var Ge;
class UO {
  constructor() {
    b(this, Ge, ne(() => D.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return k(p(this, Ge))
  }
}
Ge = new WeakMap;
const KT = CT,
  FT = Object.assign(KT, {
    success: D.success,
    info: D.info,
    warning: D.warning,
    error: D.error,
    custom: D.custom,
    message: D.message,
    promise: D.promise,
    dismiss: D.dismiss,
    loading: D.loading,
    getActiveToasts: () => D.toasts.filter(n => !n.dismiss)
  });
var Se, Ie, Ne, Ae, ze, Re, De, xe;
class $T {
  constructor() {
    w(this, "channel", new BroadcastChannel("user-channel"));
    b(this, Se, S());
    b(this, Ie, S(!0));
    b(this, Ne, S());
    b(this, Ae, S(Date.now()));
    b(this, ze, ne(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Wt.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    b(this, Re, ne(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    b(this, De, ne(() => {
      var t;
      return new qT(tn(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    b(this, xe, ne(() => {
      var e;
      if (!((e = this.data) != null && e.timeoutUntil)) return;
      const t = new Date(this.data.timeoutUntil);
      if (!(t.getTime() < Date.now())) return t
    }));
    this.channel && (this.channel.onmessage = t => {
      const e = JSON.parse(t.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return k(p(this, Se))
  }
  set data(t) {
    O(p(this, Se), t, !0)
  }
  get loading() {
    return k(p(this, Ie))
  }
  set loading(t) {
    O(p(this, Ie), t, !0)
  }
  get notificationCount() {
    return k(p(this, Ne))
  }
  set notificationCount(t) {
    O(p(this, Ne), t, !0)
  }
  get lastFetch() {
    return k(p(this, Ae))
  }
  set lastFetch(t) {
    O(p(this, Ae), t)
  }
  get charges() {
    return k(p(this, ze))
  }
  set charges(t) {
    O(p(this, ze), t)
  }
  get cooldown() {
    return k(p(this, Re))
  }
  set cooldown(t) {
    O(p(this, Re), t)
  }
  get flagsBitmap() {
    return k(p(this, De))
  }
  set flagsBitmap(t) {
    O(p(this, De), t)
  }
  get timeoutUntil() {
    return k(p(this, xe))
  }
  set timeoutUntil(t) {
    O(p(this, xe), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await C.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && C.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (Wn("userId", {
        id: this.data.id
      }), ie.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), FT.warning(Qg(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await C.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return en((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return jT((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Se = new WeakMap, Ie = new WeakMap, Ne = new WeakMap, Ae = new WeakMap, ze = new WeakMap, Re = new WeakMap, De = new WeakMap, xe = new WeakMap;
const H = new $T;
let y;
const j = new Array(128).fill(void 0);
j.push(void 0, null, !0, !1);

function m(n) {
  return j[n]
}
let se = j.length;

function E(n) {
  se === j.length && j.push(j.length + 1);
  const t = se;
  return se = j[t], j[t] = n, t
}

function q(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    y.__wbindgen_export_0(E(e))
  }
}

function G(n) {
  return n == null
}
const nn = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && nn.decode();
let re = null;

function Ue() {
  return (re === null || re.byteLength === 0) && (re = new Uint8Array(y.memory.buffer)), re
}

function Me(n, t) {
  return n = n >>> 0, nn.decode(Ue().subarray(n, n + t))
}

function GT(n) {
  n < 132 || (j[n] = se, se = n)
}

function Ct(n) {
  const t = m(n);
  return GT(n), t
}
let V = null;

function Fe() {
  return (V === null || V.buffer.detached === !0 || V.buffer.detached === void 0 && V.buffer !== y.memory.buffer) && (V = new DataView(y.memory.buffer)), V
}
let J = 0;
const Be = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  VT = typeof Be.encodeInto == "function" ? function(n, t) {
    return Be.encodeInto(n, t)
  } : function(n, t) {
    const e = Be.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Pe(n, t, e) {
  if (e === void 0) {
    const u = Be.encode(n),
      f = t(u.length, 1) >>> 0;
    return Ue().subarray(f, f + u.length).set(u), J = u.length, f
  }
  let r = n.length,
    i = t(r, 1) >>> 0;
  const o = Ue();
  let c = 0;
  for (; c < r; c++) {
    const u = n.charCodeAt(c);
    if (u > 127) break;
    o[i + c] = u
  }
  if (c !== r) {
    c !== 0 && (n = n.slice(c)), i = e(i, r, r = c + n.length * 3, 1) >>> 0;
    const u = Ue().subarray(i + c, i + r),
      f = VT(n, u);
    c += f.written, i = e(i, r, c, 1) >>> 0
  }
  return J = c, i
}

function HT(n) {
  const t = Pe(n, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.set_discord_id(t, e)
}

function WT(n) {
  const t = Pe(n, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.set_fingerprint(t, e)
}

function YT(n) {
  const t = Pe(n, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.set_detected_bot(t, e)
}

function JT(n) {
  let t, e;
  try {
    const o = y.__wbindgen_add_to_stack_pointer(-16),
      c = Pe(n, y.__wbindgen_export_1, y.__wbindgen_export_2),
      u = J;
    y.get_pawtected_endpoint_payload(o, c, u);
    var r = Fe().getInt32(o + 0, !0),
      i = Fe().getInt32(o + 4, !0);
    return t = r, e = i, Me(r, i)
  } finally {
    y.__wbindgen_add_to_stack_pointer(16), y.__wbindgen_export_3(t, e, 1)
  }
}

function Je(n) {
  y.set_user_id(n)
}

function QT(n) {
  y.set_cf_likely_automated(n)
}

function ZT(n) {
  y.set_automated_clicks(n)
}

function XT(n) {
  const t = Pe(n, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.request_url(t, e)
}

function eO(n) {
  y.set_automated_browser(n)
}
async function tO(n, t) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, t)
    } catch (r) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
    }
    const e = await n.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(n, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: n
    } : e
  }
}

function nO() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return E(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return q(function(t, e) {
      const r = m(t).call(m(e));
      return E(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return q(function(t, e, r) {
      const i = m(t).call(m(e), m(r));
      return E(i)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return E(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return G(e) ? 0 : E(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return q(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return q(function(t, e) {
      const r = Reflect.get(m(t), m(e));
      return E(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return q(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return q(function(t) {
      const e = m(t).innerWidth;
      return E(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = m(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = m(t).msCrypto;
    return E(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = m(t).navigator;
    return E(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(m(t));
    return E(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(Me(t, e));
    return E(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const i = new Uint8Array(m(t), e >>> 0, r >>> 0);
    return E(i)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return E(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = m(t).node;
    return E(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = m(t).process;
    return E(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return q(function(t, e) {
      m(t).randomFillSync(Ct(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return q(function() {
      const t = module.require;
      return E(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    m(t).set(m(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return G(t) ? 0 : E(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return G(t) ? 0 : E(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return G(t) ? 0 : E(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return G(t) ? 0 : E(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const i = m(t).subarray(e >>> 0, r >>> 0);
    return E(i)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = m(t).versions;
    return E(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = m(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof m(t) == "function"
  }, n.wbg.__wbindgen_is_null = function(t) {
    return m(t) === null
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = m(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof m(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return m(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = y.memory;
    return E(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = m(e),
      i = typeof r == "number" ? r : void 0;
    Fe().setFloat64(t + 8, G(i) ? 0 : i, !0), Fe().setInt32(t + 0, !G(i), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return E(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Ct(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = Me(t, e);
    return E(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Me(t, e))
  }, n
}

function rO(n, t) {
  return y = n.exports, rn.__wbindgen_wasm_module = t, V = null, re = null, y
}
async function rn(n) {
  if (y !== void 0) return y;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = nO();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await tO(await n, t);
  return rO(e, r)
}
class iO {
  constructor() {
    w(this, "interval");
    w(this, "storagesEmpty", !1);
    w(this, "storages", [new $e, new rt, new it, new aO]);
    w(this, "pawtectLoaded");
    w(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!H.data || this.storagesEmpty || localStorage.getItem($e.KEY))) {
        for (const e of this.storages) {
          const r = e.get();
          if (r) {
            for (const i of this.storages) i.set(r);
            return
          }
        }
        this.storagesEmpty = !0
      }
    }, 500))
  }
  cleanup() {
    clearInterval(this.interval), this.interval = void 0
  }
  isMultiAccounting(t) {
    const e = B.day;
    for (const i of this.storages) {
      const o = i.get();
      if (o && !(o.timestamp + e < Date.now()) && o.userId !== t) return !0
    }
    const r = {
      userId: t,
      timestamp: Date.now()
    };
    for (const i of this.storages) i.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await rn(Yn), (t = H.data) != null && t.id && Je(H.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: oO((r, i) => {
            let o = null;
            return r instanceof Request ? o = r.url : r instanceof URL ? o = r.href : typeof r == "string" && (o = r), o !== null && !o.startsWith("/") && XT(o), e.call(window, r, i)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Hn(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Je(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), QT(t)
  }
  isPawtectReady() {
    return this.pawtectLoaded ?? Promise.resolve(!1)
  }
  getPawtectError() {
    return this.pawtectError
  }
  async getHeaders(t) {
    return {
      "x-pawtect-token": await this.getPawtectedEndpointPayload(t)
    }
  }
  async getPawtectedEndpointPayload(t) {
    if (!await this.loadPawtect()) throw new Error(Zv());
    const r = navigator.webdriver,
      [i, o] = await Promise.all([Qe(), Vr().catch(c => (console.error(c), {
        bot: !1
      }))]);
    return Je(H.data.id), HT(H.data.discordId ?? ""), WT(i), eO(r), ZT(Wt.automatedClicks), o.bot && YT(o.botKind ?? "unknown"), JT(t)
  }
}

function oO(n) {
  return n.bind().bind()
}
const U = class U {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let i = 0; i < t.length; i++) r[i] = t[i] ^ e[i % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(U.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), i => i.charCodeAt(0)),
        r = new TextDecoder().decode(U.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = U.codec(e);
    localStorage.setItem(U.KEY, btoa(String.fromCharCode(...r)))
  }
};
w(U, "KEY", "ui_layout_v3"), w(U, "XOR_KEY", "wplace-prefs");
let $e = U;
const M = class M {
  get() {
    try {
      const t = sessionStorage.getItem(M.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const i = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(i - M.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let r = "";
    for (const i of e) {
      const o = i.charCodeAt(0) + M.SHIFT & 65535;
      r += o.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(M.KEY, r)
  }
};
w(M, "KEY", "nav.cursor"), w(M, "SHIFT", 13);
let rt = M;
const W = class W {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + W.KEY + "=([^;]*)"));
    if (t) try {
      const [e, r] = decodeURIComponent(t[1]).split("."), i = parseInt(e, 36), o = parseInt(r, 36);
      return !Number.isFinite(i) || !Number.isFinite(o) ? void 0 : {
        userId: i,
        timestamp: o
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${W.KEY}=${encodeURIComponent(e)};path=/;max-age=${W.MAX_AGE};SameSite=Lax`
  }
};
w(W, "KEY", "_pf_uid"), w(W, "MAX_AGE", 3600 * 24 * 365);
let it = W;
class aO {
  constructor() {
    w(this, "packed")
  }
  get() {
    if (this.packed === void 0) return;
    const t = Number(this.packed & 0xffffffffn),
      e = Number(this.packed >> 32n);
    return {
      userId: t,
      timestamp: e
    }
  }
  set(t) {
    this.packed = BigInt(t.timestamp) << 32n | BigInt(t.userId) & 0xffffffffn
  }
}
const ie = new iO;
export {
  Zv as $, _O as A, pO as B, ie as C, Wr as D, NT as E, Xt as F, zO as G, Rc as H, tt as I, SO as J, Jt as K, Ye as L, Tt as M, PO as N, xp as O, IO as P, pl as Q, Vs as R, AO as S, B as T, No as U, Og as V, Ku as W, jO as X, LO as Y, RO as Z, gO as _, C as a, tv as a0, xO as a1, EO as a2, yO as a3, kO as a4, vO as a5, DO as a6, Vp as a7, Ke as b, s as c, wO as d, NO as e, xs as f, ho as g, tl as h, bp as i, Au as j, Wt as k, OO as l, _g as m, TO as n, nT as o, nt as p, D as q, qO as r, bO as s, FT as t, H as u, UO as v, mO as w, hO as x, N as y, fO as z
};