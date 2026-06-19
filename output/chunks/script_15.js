var ar = Object.defineProperty;
var dt = r => {
  throw TypeError(r)
};
var cr = (r, t, e) => t in r ? ar(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var w = (r, t, e) => cr(r, typeof t != "symbol" ? t + "" : t, e),
  ur = (r, t, e) => t.has(r) || dt("Cannot " + e);
var p = (r, t, e) => (ur(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  b = (r, t, e) => t.has(r) ? dt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  h as lr,
  P as st,
  g as Qe
} from "./BRnlEJuB.js";
import {
  e as I,
  i as T,
  h as S,
  g as qe,
  bM as _r,
  I as dr,
  L as ft,
  u as re
} from "./CV6xI6o5.js";
import {
  g as _
} from "./BhCkpOlh.js";
const X = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  x = globalThis,
  ie = "10.57.0";

function it() {
  return ot(x), x
}

function ot(r) {
  const t = r.__SENTRY__ = r.__SENTRY__ || {};
  return t.version = t.version || ie, t[ie] = t[ie] || {}
}

function at(r, t, e = x) {
  const n = e.__SENTRY__ = e.__SENTRY__ || {},
    s = n[ie] = n[ie] || {};
  return s[r] || (s[r] = t())
}
const fr = "Sentry Logger ",
  pt = {};

function pr(r) {
  if (!("console" in x)) return r();
  const t = x.console,
    e = {},
    n = Object.keys(pt);
  n.forEach(s => {
    const i = pt[s];
    e[s] = t[s], t[s] = i
  });
  try {
    return r()
  } finally {
    n.forEach(s => {
      t[s] = e[s]
    })
  }
}

function hr() {
  ut().enabled = !0
}

function mr() {
  ut().enabled = !1
}

function qt() {
  return ut().enabled
}

function gr(...r) {
  ct("log", ...r)
}

function wr(...r) {
  ct("warn", ...r)
}

function yr(...r) {
  ct("error", ...r)
}

function ct(r, ...t) {
  X && qt() && pr(() => {
    x.console[r](`${fr}[${r}]:`, ...t)
  })
}

function ut() {
  return X ? at("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const je = {
    enable: hr,
    disable: mr,
    isEnabled: qt,
    log: gr,
    warn: wr,
    error: yr
  },
  br = Object.prototype.toString;

function vr(r, t) {
  return br.call(r) === `[object ${t}]`
}

function Er(r) {
  return vr(r, "Object")
}

function Tr(r) {
  return !!(r != null && r.then && typeof r.then == "function")
}

function Or(r, t, e) {
  try {
    Object.defineProperty(r, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    X && je.log(`Failed to add non-enumerable property "${String(t)}" to object`, r)
  }
}
let Q;

function Ve(r) {
  if (Q !== void 0) return Q ? Q(r) : r();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = x;
  return t in e && typeof e[t] == "function" ? (Q = e[t], Q(r)) : (Q = null, r())
}

function Xe() {
  return Ve(() => Math.random())
}

function Sr() {
  return Ve(() => Date.now())
}

function Ir(r, t = 0) {
  return typeof r != "string" || t === 0 || r.length <= t ? r : `${r.slice(0,t)}...`
}

function kr() {
  const r = x;
  return r.crypto || r.msCrypto
}
let He;

function Nr() {
  return Xe() * 16
}

function oe(r = kr()) {
  try {
    if (r != null && r.randomUUID) return Ve(() => r.randomUUID()).replace(/-/g, "")
  } catch {}
  return He || (He = "10000000100040008000" + 1e11), He.replace(/[018]/g, t => (t ^ (Nr() & 15) >> t / 4).toString(16))
}
const Ft = 1e3;

function Kt() {
  return Sr() / Ft
}

function Ar() {
  const {
    performance: r
  } = x;
  if (!(r != null && r.now) || !r.timeOrigin) return Kt;
  const t = r.timeOrigin;
  return () => (t + Ve(() => r.now())) / Ft
}
let ht;

function Rr() {
  return (ht ?? (ht = Ar()))()
}

function Dr(r, t = {}) {
  if (t.user && (!r.ipAddress && t.user.ip_address && (r.ipAddress = t.user.ip_address), !r.did && !t.did && (r.did = t.user.id || t.user.email || t.user.username)), r.timestamp = t.timestamp || Rr(), t.abnormal_mechanism && (r.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (r.ignoreDuration = t.ignoreDuration), t.sid && (r.sid = t.sid.length === 32 ? t.sid : oe()), t.init !== void 0 && (r.init = t.init), !r.did && t.did && (r.did = `${t.did}`), typeof t.started == "number" && (r.started = t.started), r.ignoreDuration) r.duration = void 0;
  else if (typeof t.duration == "number") r.duration = t.duration;
  else {
    const e = r.timestamp - r.started;
    r.duration = e >= 0 ? e : 0
  }
  t.release && (r.release = t.release), t.environment && (r.environment = t.environment), !r.ipAddress && t.ipAddress && (r.ipAddress = t.ipAddress), !r.userAgent && t.userAgent && (r.userAgent = t.userAgent), typeof t.errors == "number" && (r.errors = t.errors), t.status && (r.status = t.status)
}

function $t(r, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (r && Object.keys(t).length === 0) return r;
  const n = {
    ...r
  };
  for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (n[s] = $t(n[s], t[s], e - 1));
  return n
}

function mt() {
  return oe()
}

function Pr(r) {
  try {
    const t = x.WeakRef;
    if (typeof t == "function") return new t(r)
  } catch {}
  return r
}

function xr(r) {
  if (r) {
    if (typeof r == "object" && "deref" in r && typeof r.deref == "function") try {
      return r.deref()
    } catch {
      return
    }
    return r
  }
}
const Ze = "_sentrySpan";

function gt(r, t) {
  t ? Or(r, Ze, Pr(t)) : delete r[Ze]
}

function wt(r) {
  return xr(r[Ze])
}
const Lr = 100;
class Y {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: mt(),
      sampleRand: Xe()
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, gt(t, wt(this)), t
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
    }, this._session && Dr(this._session, {
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
      n = e instanceof Y ? e.getScopeData() : Er(e) ? t : void 0,
      {
        tags: s,
        attributes: i,
        extra: u,
        user: a,
        contexts: f,
        level: d,
        fingerprint: O = [],
        propagationContext: g,
        conversationId: A
      } = n || {};
    return this._tags = {
      ...this._tags,
      ...s
    }, this._attributes = {
      ...this._attributes,
      ...i
    }, this._extra = {
      ...this._extra,
      ...u
    }, this._contexts = {
      ...this._contexts,
      ...f
    }, a && Object.keys(a).length && (this._user = a), d && (this._level = d), O.length && (this._fingerprint = O), g && (this._propagationContext = g), A && (this._conversationId = A), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, gt(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: mt(),
      sampleRand: Xe()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var i;
    const n = typeof e == "number" ? e : Lr;
    if (n <= 0) return this;
    const s = {
      timestamp: Kt(),
      ...t,
      message: t.message ? Ir(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(s), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), (i = this._client) == null || i.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
      span: wt(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = $t(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const n = (e == null ? void 0 : e.event_id) || oe();
    if (!this._client) return X && je.warn("No client configured on scope - will not capture exception!"), n;
    const s = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: s,
      ...e,
      event_id: n
    }, this), n
  }
  captureMessage(t, e, n) {
    const s = (n == null ? void 0 : n.event_id) || oe();
    if (!this._client) return X && je.warn("No client configured on scope - will not capture message!"), s;
    const i = (n == null ? void 0 : n.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: i,
      ...n,
      event_id: s
    }, this), s
  }
  captureEvent(t, e) {
    const n = t.event_id || (e == null ? void 0 : e.event_id) || oe();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: n
    }, this), n) : (X && je.warn("No client configured on scope - will not capture event!"), n)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function Ur() {
  return at("defaultCurrentScope", () => new Y)
}

function jr() {
  return at("defaultIsolationScope", () => new Y)
}
const yt = r => r instanceof Promise && !r[Gt],
  Gt = Symbol("chained PromiseLike"),
  Mr = (r, t, e) => {
    const n = r.then(s => (t(s), s), s => {
      throw e(s), s
    });
    return yt(n) && yt(r) ? n : Br(r, n)
  },
  Br = (r, t) => {
    if (!t) return r;
    let e = !1;
    for (const n in r) {
      if (n in t) continue;
      e = !0;
      const s = r[n];
      typeof s == "function" ? Object.defineProperty(t, n, {
        value: (...i) => s.apply(r, i),
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = s
    }
    return e && Object.assign(t, {
      [Gt]: !0
    }), t
  };
class Cr {
  constructor(t, e) {
    let n;
    t ? n = t : n = new Y;
    let s;
    e ? s = e : s = new Y, this._stack = [{
      scope: n
    }], this._isolationScope = s
  }
  withScope(t) {
    const e = this._pushScope();
    let n;
    try {
      n = t(e)
    } catch (s) {
      throw this._popScope(), s
    }
    return Tr(n) ? Mr(n, () => this._popScope(), () => this._popScope()) : (this._popScope(), n)
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
  const r = it(),
    t = ot(r);
  return t.stack = t.stack || new Cr(Ur(), jr())
}

function zr(r) {
  return te().withScope(r)
}

function qr(r, t) {
  const e = te();
  return e.withScope(() => (e.getStackTop().scope = r, t(r)))
}

function bt(r) {
  return te().withScope(() => r(te().getIsolationScope()))
}

function Fr() {
  return {
    withIsolationScope: bt,
    withScope: zr,
    withSetScope: qr,
    withSetIsolationScope: (r, t) => bt(t),
    getCurrentScope: () => te().getScope(),
    getIsolationScope: () => te().getIsolationScope()
  }
}

function Vt(r) {
  const t = ot(r);
  return t.acs ? t.acs : Fr()
}

function Kr() {
  const r = it();
  return Vt(r).getCurrentScope()
}

function $r() {
  const r = it();
  return Vt(r).getIsolationScope()
}

function Gr(r, t) {
  return Kr().captureException(r, void 0)
}

function Vr(r, t) {
  $r().setContext(r, t)
}
const Hr = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var Wr = "2.0.0";
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

function Yr(r, t) {
  const e = {};
  let n = {
    bot: !1
  };
  for (const s in t) {
    const i = t[s],
      u = i(r);
    let a = {
      bot: !1
    };
    typeof u == "string" ? a = {
      bot: !0,
      botKind: u
    } : u && (a = {
      bot: !0,
      botKind: h.Unknown
    }), e[s] = a, a.bot && (n = a)
  }
  return [e, n]
}
async function Jr(r) {
  const t = {},
    e = Object.keys(r);
  return await Promise.all(e.map(async n => {
    const s = r[n];
    try {
      t[n] = {
        value: await s(),
        state: 0
      }
    } catch (i) {
      i instanceof v ? t[n] = {
        state: i.state,
        error: `${i.name}: ${i.message}`
      } : t[n] = {
        state: -3,
        error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
      }
    }
  })), t
}

function Qr({
  appVersion: r
}) {
  if (r.state !== 0) return !1;
  if (/headless/i.test(r.value)) return h.HeadlessChrome;
  if (/electron/i.test(r.value)) return h.Electron;
  if (/slimerjs/i.test(r.value)) return h.SlimerJS
}

function Me(r, t) {
  return r.indexOf(t) !== -1
}

function L(r, t) {
  return r.indexOf(t) !== -1
}

function Xr(r, t) {
  if ("find" in r) return r.find(t);
  for (let e = 0; e < r.length; e++)
    if (t(r[e], e, r)) return r[e]
}

function vt(r) {
  return Object.getOwnPropertyNames(r)
}

function et(r, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Me(r, e)) return !0
    } else if (Xr(r, s => e.test(s)) != null) return !0;
  return !1
}

function Z(r) {
  return r.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function Zr({
  documentElementKeys: r
}) {
  if (r.state !== 0) return !1;
  if (et(r.value, "selenium", "webdriver", "driver")) return h.Selenium
}

function en({
  errorTrace: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return h.PhantomJS
}

function tn({
  evalLength: r,
  browserKind: t,
  browserEngineKind: e
}) {
  if (r.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const n = r.value;
  return e.value === "unknown" ? !1 : n === 37 && !Me(["webkit", "gecko"], e.value) || n === 39 && !Me(["internet_explorer"], t.value) || n === 33 && !Me(["chromium"], e.value)
}

function rn({
  functionBind: r
}) {
  if (r.state === -2) return h.PhantomJS
}

function nn({
  languages: r
}) {
  if (r.state === 0 && r.value.length === 0) return h.HeadlessChrome
}

function sn({
  mimeTypesConsistent: r
}) {
  if (r.state === 0 && !r.value) return h.Unknown
}

function on({
  notificationPermissions: r,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (r.state === 0 && r.value) return h.HeadlessChrome
}

function an({
  pluginsArray: r
}) {
  if (r.state === 0 && !r.value) return h.HeadlessChrome
}

function cn({
  pluginsLength: r,
  android: t,
  browserKind: e,
  browserEngineKind: n
}) {
  if (!(r.state !== 0 || t.state !== 0 || e.state !== 0 || n.state !== 0) && !(e.value !== "chrome" || t.value || n.value !== "chromium") && r.value === 0) return h.HeadlessChrome
}

function un({
  process: r
}) {
  var t;
  if (r.state !== 0) return !1;
  if (r.value.type === "renderer" || ((t = r.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return h.Electron
}

function ln({
  productSub: r,
  browserKind: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && r.value !== "20030107") return h.Unknown
}

function _n({
  userAgent: r
}) {
  if (r.state !== 0) return !1;
  if (/PhantomJS/i.test(r.value)) return h.PhantomJS;
  if (/Headless/i.test(r.value)) return h.HeadlessChrome;
  if (/Electron/i.test(r.value)) return h.Electron;
  if (/slimerjs/i.test(r.value)) return h.SlimerJS
}

function dn({
  webDriver: r
}) {
  if (r.state === 0 && r.value) return h.HeadlessChrome
}

function fn({
  webGL: r
}) {
  if (r.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = r.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return h.HeadlessChrome
  }
}

function pn({
  windowExternal: r
}) {
  if (r.state !== 0) return !1;
  if (/Sequentum/i.test(r.value)) return h.Sequentum
}

function hn({
  windowSize: r,
  documentFocus: t
}) {
  if (r.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: n
  } = r.value;
  if (t.value && e === 0 && n === 0) return h.HeadlessChrome
}

function mn({
  distinctiveProps: r
}) {
  if (r.state !== 0) return !1;
  const t = r.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const gn = {
  detectAppVersion: Qr,
  detectDocumentAttributes: Zr,
  detectErrorTrace: en,
  detectEvalLengthInconsistency: tn,
  detectFunctionBind: rn,
  detectLanguagesLengthInconsistency: nn,
  detectNotificationPermissions: on,
  detectPluginsArray: an,
  detectPluginsLengthInconsistency: cn,
  detectProcess: un,
  detectUserAgent: _n,
  detectWebDriver: dn,
  detectWebGL: fn,
  detectWindowExternal: pn,
  detectWindowSize: hn,
  detectMimeTypesConsistent: sn,
  detectProductSub: ln,
  detectDistinctiveProperties: mn
};

function wn() {
  const r = navigator.appVersion;
  if (r == null) throw new v(-1, "navigator.appVersion is undefined");
  return r
}

function yn() {
  if (document.documentElement === void 0) throw new v(-1, "document.documentElement is undefined");
  const {
    documentElement: r
  } = document;
  if (typeof r.getAttributeNames != "function") throw new v(-2, "document.documentElement.getAttributeNames is not a function");
  return r.getAttributeNames()
}

function bn() {
  try {
    null[0]()
  } catch (r) {
    if (r instanceof Error && r.stack != null) return r.stack.toString()
  }
  throw new v(-3, "errorTrace signal unexpected behaviour")
}

function vn() {
  return eval.toString().length
}

function En() {
  if (Function.prototype.bind === void 0) throw new v(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function lt() {
  var r, t;
  const e = window,
    n = navigator;
  return Z(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, n.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : Z(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, n.vendor.indexOf("Apple") === 0, "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : Z(["buildID" in navigator, "MozAppearance" in ((t = (r = document.documentElement) === null || r === void 0 ? void 0 : r.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Tn() {
  var r;
  const t = (r = navigator.userAgent) === null || r === void 0 ? void 0 : r.toLowerCase();
  return L(t, "edg/") ? "edge" : L(t, "trident") || L(t, "msie") ? "internet_explorer" : L(t, "wechat") ? "wechat" : L(t, "firefox") ? "firefox" : L(t, "opera") || L(t, "opr") ? "opera" : L(t, "chrome") ? "chrome" : L(t, "safari") ? "safari" : "unknown"
}

function On() {
  const r = lt(),
    t = r === "chromium",
    e = r === "gecko",
    n = window,
    s = navigator,
    i = "connection";
  return t ? Z([!("SharedWorker" in n), s[i] && "ontypechange" in s[i], !("sinkId" in new Audio)]) >= 2 : e ? Z(["onorientationchange" in n, "orientation" in n, /android/i.test(s.appVersion)]) >= 2 : !1
}

function Sn() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function In() {
  const r = window;
  return Z([!("MediaSettingsRange" in r), "RTCEncodedAudioFrame" in r, "" + r.Intl == "[object Intl]", "" + r.Reflect == "[object Reflect]"]) >= 3
}

function kn() {
  const r = navigator,
    t = [],
    e = r.language || r.userLanguage || r.browserLanguage || r.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(r.languages)) lt() === "chromium" && In() || t.push(r.languages);
  else if (typeof r.languages == "string") {
    const n = r.languages;
    n && t.push(n.split(","))
  }
  return t
}

function Nn() {
  if (navigator.mimeTypes === void 0) throw new v(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: r
  } = navigator;
  let t = Object.getPrototypeOf(r) === MimeTypeArray.prototype;
  for (let e = 0; e < r.length; e++) t && (t = Object.getPrototypeOf(r[e]) === MimeType.prototype);
  return t
}
async function An() {
  if (window.Notification === void 0) throw new v(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new v(-1, "navigator.permissions is undefined");
  const {
    permissions: r
  } = navigator;
  if (typeof r.query != "function") throw new v(-2, "navigator.permissions.query is not a function");
  try {
    const t = await r.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new v(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Rn() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new v(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Dn() {
  if (navigator.plugins === void 0) throw new v(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new v(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Pn() {
  const {
    process: r
  } = window, t = "window.process is";
  if (r === void 0) throw new v(-1, `${t} undefined`);
  if (r && typeof r != "object") throw new v(-3, `${t} not an object`);
  return r
}

function xn() {
  const {
    productSub: r
  } = navigator;
  if (r === void 0) throw new v(-1, "navigator.productSub is undefined");
  return r
}

function Ln() {
  if (navigator.connection === void 0) throw new v(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new v(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Un() {
  return navigator.userAgent
}

function jn() {
  if (navigator.webdriver == null) throw new v(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Mn() {
  const r = document.createElement("canvas");
  if (typeof r.getContext != "function") throw new v(-2, "HTMLCanvasElement.getContext is not a function");
  const t = r.getContext("webgl");
  if (t === null) throw new v(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new v(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    n = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: n
  }
}

function Bn() {
  if (window.external === void 0) throw new v(-1, "window.external is undefined");
  const {
    external: r
  } = window;
  if (typeof r.toString != "function") throw new v(-2, "window.external.toString is not a function");
  return r.toString()
}

function Cn() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function zn() {
  const r = {
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
    n = vt(window);
  let s = [];
  window.document !== void 0 && (s = vt(window.document));
  for (t in r) {
    const i = r[t];
    if (i !== void 0) {
      const u = i.window === void 0 ? !1 : et(n, ...i.window),
        a = i.document === void 0 || !s.length ? !1 : et(s, ...i.document);
      e[t] = u || a
    }
  }
  return e
}
const qn = {
  android: On,
  browserKind: Tn,
  browserEngineKind: lt,
  documentFocus: Sn,
  userAgent: Un,
  appVersion: wn,
  rtt: Ln,
  windowSize: Cn,
  pluginsLength: Dn,
  pluginsArray: Rn,
  errorTrace: bn,
  productSub: xn,
  windowExternal: Bn,
  mimeTypesConsistent: Nn,
  evalLength: vn,
  webGL: Mn,
  webDriver: jn,
  languages: kn,
  notificationPermissions: An,
  documentElementKeys: yn,
  functionBind: En,
  process: Pn,
  distinctiveProps: zn
};
class Fn {
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
    const [t, e] = Yr(this.components, gn);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await Jr(qn), this.components
  }
}

function Kn() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const r = new XMLHttpRequest;
    r.open("get", `https://m1.openfpcdn.io/botd/v${Wr}/npm-monitoring`, !0), r.send()
  } catch (r) {
    console.error(r)
  }
}
async function $n({
  monitoring: r = !0
} = {}) {
  r && Kn();
  const t = new Fn;
  return await t.collect(), t
}
let We = null;
async function Gn() {
  return await Vn() ? {
    bot: !1
  } : (await Hn()).detect()
}
async function Vn() {
  var e;
  const r = navigator;
  if (!((e = r.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(r.userAgent)) return !1;
  try {
    return await r.brave.isBrave()
  } catch {
    return !1
  }
}

function Hn() {
  return We || (We = $n({
    monitoring: !1
  })), We
}
const Et = "theme";
var ce, ue, le, _e, de, fe, pe, he, me, ge, we;
class Wn {
  constructor() {
    b(this, ce, I(!1));
    b(this, ue, I(!1));
    b(this, le, I(!1));
    b(this, _e, I(0));
    b(this, de, I(!1));
    b(this, fe, I(qe(Yn())));
    b(this, pe, I(null));
    b(this, he, I(!1));
    b(this, me, I("custom-winter"));
    b(this, ge, I(qe(Date.now())));
    b(this, we, I(void 0));
    setInterval(() => {
      S(p(this, ge), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Et), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return T(p(this, ce))
  }
  set dropletsDialogOpen(t) {
    S(p(this, ce), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return T(p(this, ue))
  }
  set pendingHistoryDialogOpen(t) {
    S(p(this, ue), t, !0)
  }
  get storeDialogOpen() {
    return T(p(this, le))
  }
  set storeDialogOpen(t) {
    S(p(this, le), t, !0)
  }
  get storeTabIndex() {
    return T(p(this, _e))
  }
  set storeTabIndex(t) {
    S(p(this, _e), t, !0)
  }
  get muted() {
    return T(p(this, de))
  }
  set muted(t) {
    S(p(this, de), t, !0)
  }
  get language() {
    return T(p(this, fe))
  }
  set language(t) {
    S(p(this, fe), t, !0)
  }
  get map() {
    return T(p(this, pe))
  }
  set map(t) {
    S(p(this, pe), t)
  }
  get automatedClicks() {
    return T(p(this, he))
  }
  set automatedClicks(t) {
    S(p(this, he), t, !0)
  }
  get theme() {
    return T(p(this, me))
  }
  set theme(t) {
    S(p(this, me), t, !0), localStorage.setItem(Et, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return T(p(this, ge))
  }
  get captcha() {
    return Jn ? T(p(this, we)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    S(p(this, we), t, !0)
  }
}
ce = new WeakMap, ue = new WeakMap, le = new WeakMap, _e = new WeakMap, de = new WeakMap, fe = new WeakMap, pe = new WeakMap, he = new WeakMap, me = new WeakMap, ge = new WeakMap, we = new WeakMap;
const Ht = new Wn;

function Yn() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Jn = lr.toLowerCase() !== "false",
  Qn = `
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
async function Xn() {
  try {
    const r = await fetch(`${st}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await Zn(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Zn(r, t) {
  return new Promise(e => {
    const n = new Blob([Qn], {
        type: "application/javascript"
      }),
      s = URL.createObjectURL(n),
      i = new Worker(s),
      u = setTimeout(() => {
        i.terminate(), URL.revokeObjectURL(s), e(null)
      }, 12e4);
    i.onmessage = a => {
      clearTimeout(u), i.terminate(), URL.revokeObjectURL(s), a.data.error ? e(null) : e(a.data.nonce)
    }, i.onerror = () => {
      clearTimeout(u), i.terminate(), URL.revokeObjectURL(s), e(null)
    }, i.postMessage({
      prefix: r,
      difficulty: t
    })
  })
}
const Wt = 3;
var ye, be;
class es {
  constructor() {
    b(this, ye, I(null));
    b(this, be, I(0))
  }
  get current() {
    return T(p(this, ye))
  }
  set current(t) {
    S(p(this, ye), t, !0)
  }
  get errorCount() {
    return T(p(this, be))
  }
  set errorCount(t) {
    S(p(this, be), t, !0)
  }
}
ye = new WeakMap, be = new WeakMap;
const N = new es;
async function Tt(r) {
  if (r === 1) return ts();
  if (r === 2) {
    const t = await Yt();
    return t ? Ot("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await rs();
    return t ? Ot("hcaptcha", t) : !1
  }
  return r === 4 ? ns() : !1
}
async function ts() {
  for (let r = 0; r < Wt; r++) try {
    const t = await Xn();
    if (!t) continue;
    return await q.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function Ot(r, t) {
  try {
    const e = await q.postCaptchaSession({
      provider: r,
      token: t
    });
    return await q.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const ee = {};

function Yt() {
  return Jt(2)
}

function rs() {
  return Jt(3)
}

function Jt(r) {
  const t = ee[r];
  if (t) return t;
  const e = new Promise(n => {
    N.errorCount = 0, N.current = {
      tier: r,
      resolve: s => {
        delete ee[r], n(s)
      }
    }
  });
  return ee[r] = e, e
}

function ns() {
  const r = ee[4];
  if (r) return r;
  const t = new Promise(e => {
    N.errorCount = 0, N.current = {
      tier: 4,
      resolve: n => {
        delete ee[4], e(n)
      }
    }
  });
  return ee[4] = t, t
}

function wv(r) {
  const t = N.current;
  !t || t.tier === 4 || (t.resolve(r), N.current = null)
}

function yv() {
  const r = N.current;
  !r || r.tier === 4 || (N.errorCount += 1, N.errorCount >= Wt && (r.resolve(void 0), N.current = null))
}

function bv() {
  const r = N.current;
  !r || r.tier !== 4 || (r.resolve(!0), N.current = null)
}

function vv() {
  const r = N.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), N.current = null)
}
var o = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(o || {});
const ss = () => "Your account has been suspended for breaking the rules",
  is = () => "Sua conta foi suspensa por quebrar as regras",
  os = () => "您的账号因违反规则已被暂停",
  as = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  cs = () => "Tu cuenta ha sido suspendida por infringir las regras",
  us = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  ls = () => "Il tuo account è stato sospeso per aver infranto le regole",
  _s = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  ds = () => "Twoje konto zostało zawieszone za łamanie zasad",
  fs = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  ps = () => "Ваш обліковий запис було призупинено за порушення правил",
  hs = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  St = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ss() : e === "pt" ? is() : e === "ch" ? os() : e === "de" ? as() : e === "es" ? cs() : e === "fr" ? us() : e === "it" ? ls() : e === "jp" ? _s() : e === "pl" ? ds() : e === "ru" ? fs() : e === "uk" ? ps() : hs()
  },
  ms = () => "Alliance name already taken",
  gs = () => "Já possui uma aliança com esse nome",
  ws = () => "该联盟名称已被占用",
  ys = () => "Der Allianzname ist bereits vergeben",
  bs = () => "Ese nombre de alianza ya está en uso",
  vs = () => "Ce nom d’alliance est déjà pris",
  Es = () => "Esiste già un'alleanza con questo nome",
  Ts = () => "このアライアンス名は既に使用されています。",
  Os = () => "Nazwa sojuszu jest już zajęta",
  Ss = () => "Такое название альянса уже используется",
  Is = () => "Назва альянсу вже зайнята",
  ks = () => "Tên liên minh đã được sử dụng",
  Ns = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ms() : e === "pt" ? gs() : e === "ch" ? ws() : e === "de" ? ys() : e === "es" ? bs() : e === "fr" ? vs() : e === "it" ? Es() : e === "jp" ? Ts() : e === "pl" ? Os() : e === "ru" ? Ss() : e === "uk" ? Is() : ks()
  },
  As = () => "Alliance name exceeded the maximum number of characters",
  Rs = () => "O nome da aliança excedeu o número máximo de caracteres",
  Ds = () => "联盟名称超过最大字符数限制",
  Ps = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  xs = () => "El nombre de la alianza superó el número máximo de caracteres",
  Ls = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Us = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  js = () => "アライアンス名が最大文字数を超えています。",
  Ms = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Bs = () => "Название альянса превышает максимальную длину",
  Cs = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  zs = () => "Tên liên minh vượt quá số ký tự cho phép",
  qs = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? As() : e === "pt" ? Rs() : e === "ch" ? Ds() : e === "de" ? Ps() : e === "es" ? xs() : e === "fr" ? Ls() : e === "it" ? Us() : e === "jp" ? js() : e === "pl" ? Ms() : e === "ru" ? Bs() : e === "uk" ? Cs() : zs()
  },
  Fs = () => "Alliance with empty name",
  Ks = () => "Aliança com nome vazio",
  $s = () => "名称为空的联盟",
  Gs = () => "Allianz mit leerem Namen",
  Vs = () => "Alianza con nombre vacío",
  Hs = () => "Alliance avec nom vide",
  Ws = () => "Alleanza con nome vuoto",
  Ys = () => "名前が空のアライアンスです。",
  Js = () => "Sojusz z pustą nazwą",
  Qs = () => "Альянс с пустым названием",
  Xs = () => "Альянс із порожньою назвою",
  Zs = () => "Liên minh không có tên",
  ei = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Fs() : e === "pt" ? Ks() : e === "ch" ? $s() : e === "de" ? Gs() : e === "es" ? Vs() : e === "fr" ? Hs() : e === "it" ? Ws() : e === "jp" ? Ys() : e === "pl" ? Js() : e === "ru" ? Qs() : e === "uk" ? Xs() : Zs()
  },
  ti = () => "Botting",
  ri = () => "Uso de bots",
  ni = () => "脚本",
  si = () => "Bot-Nutzung",
  ii = () => "Botting",
  oi = () => "Bots",
  ai = () => "Uso di bot",
  ci = () => "ボット使用",
  ui = () => "Botting",
  li = () => "Боттинг",
  _i = () => "Боти",
  di = () => "Botting",
  fi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ti() : e === "pt" ? ri() : e === "ch" ? ni() : e === "de" ? si() : e === "es" ? ii() : e === "fr" ? oi() : e === "it" ? ai() : e === "jp" ? ci() : e === "pl" ? ui() : e === "ru" ? li() : e === "uk" ? _i() : di()
  },
  pi = () => "Use of software to completely automate painting",
  hi = () => "Uso de software para pintar de forma completamente automatizada ",
  mi = () => "使用软件完全自动化绘制",
  gi = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  wi = () => "Uso de software para automatizar completamente la pintura",
  yi = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  bi = () => "Uso di software per dipingere in modo completamente automatizzato",
  vi = () => "ペイントを完全に自動化するソフトウェアの使用",
  Ei = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Ti = () => "Использование программ для полной автоматизации рисования",
  Oi = () => "Використання програм, які повністю автоматизують малювання",
  Si = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Ii = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pi() : e === "pt" ? hi() : e === "ch" ? mi() : e === "de" ? gi() : e === "es" ? wi() : e === "fr" ? yi() : e === "it" ? bi() : e === "jp" ? vi() : e === "pl" ? Ei() : e === "ru" ? Ti() : e === "uk" ? Oi() : Si()
  },
  ki = () => "Breaking the rules",
  Ni = () => "Quebrar as regras",
  Ai = () => "违反规则",
  Ri = () => "Regeln brechen",
  Di = () => "Romper las reglas",
  Pi = () => "Violation des règles",
  xi = () => "Violazione delle regole",
  Li = () => "ルール違反",
  Ui = () => "Łamanie zasad",
  ji = () => "Нарушение правил",
  Mi = () => "Порушення правил",
  Bi = () => "Vi phạm luật",
  Ci = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ki() : e === "pt" ? Ni() : e === "ch" ? Ai() : e === "de" ? Ri() : e === "es" ? Di() : e === "fr" ? Pi() : e === "it" ? xi() : e === "jp" ? Li() : e === "pl" ? Ui() : e === "ru" ? ji() : e === "uk" ? Mi() : Bi()
  },
  zi = () => "You have broken one of Wplace's rules",
  qi = () => "Você quebrou uma das regras do Wplace",
  Fi = () => "你违反了 Wplace 的一项规则",
  Ki = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  $i = () => "Has infringido una de las reglas de Wplace",
  Gi = () => "Vous avez enfreint l’une des règles de Wplace",
  Vi = () => "Hai infranto una delle regole di Wplace",
  Hi = () => "Wplaceのルールのいずれかに違反しました。",
  Wi = () => "Złamałeś jedną z zasad Wplace",
  Yi = () => "Вы нарушили одно из правил Wplace",
  Ji = () => "Ви порушили одне з правил Wplace",
  Qi = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Xi = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zi() : e === "pt" ? qi() : e === "ch" ? Fi() : e === "de" ? Ki() : e === "es" ? $i() : e === "fr" ? Gi() : e === "it" ? Vi() : e === "jp" ? Hi() : e === "pl" ? Wi() : e === "ru" ? Yi() : e === "uk" ? Ji() : Qi()
  },
  Zi = () => "You cannot paint over event pixels",
  eo = () => "Você não pode pintar sobre pixels de eventos",
  to = () => "你不能覆盖活动像素",
  ro = () => "Du kannst nicht über Event-Pixel malen",
  no = () => "No puedes pintar sobre píxeles de evento",
  so = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  io = () => "Non puoi dipingere sopra i pixel dell'evento",
  oo = () => "イベント用のピクセルの上には塗れません。",
  ao = () => "Nie możesz malować po pikselach wydarzenia",
  co = () => "Вы не можете рисовать по пикселям события",
  uo = () => "Ви не можете малювати поверх пікселів події",
  lo = () => "Bạn không thể tô lên pixel sự kiện",
  It = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zi() : e === "pt" ? eo() : e === "ch" ? to() : e === "de" ? ro() : e === "es" ? no() : e === "fr" ? so() : e === "it" ? io() : e === "jp" ? oo() : e === "pl" ? ao() : e === "ru" ? co() : e === "uk" ? uo() : lo()
  },
  _o = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  fo = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  po = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  ho = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  mo = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  go = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  wo = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  yo = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  bo = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  vo = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Eo = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  To = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Oo = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? _o() : e === "pt" ? fo() : e === "ch" ? po() : e === "de" ? ho() : e === "es" ? mo() : e === "fr" ? go() : e === "it" ? wo() : e === "jp" ? yo() : e === "pl" ? bo() : e === "ru" ? vo() : e === "uk" ? Eo() : To()
  },
  So = () => "Challenge verification not completed",
  Io = () => "Verificação do desafio não concluída",
  ko = () => "挑战验证未完成",
  No = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Ao = () => "Verificación del desafío no completada",
  Ro = () => "Vérification du défi non terminée",
  Do = () => "Verifica della sfida non completata",
  Po = () => "チャレンジ検証が完了していません",
  xo = () => "Weryfikacja wyzwania niezakończona",
  Lo = () => "Верификация вызова не завершена",
  Uo = () => "Перевірку виклику не завершено",
  jo = () => "Xác minh thử thách chưa hoàn thành",
  Ye = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? So() : e === "pt" ? Io() : e === "ch" ? ko() : e === "de" ? No() : e === "es" ? Ao() : e === "fr" ? Ro() : e === "it" ? Do() : e === "jp" ? Po() : e === "pl" ? xo() : e === "ru" ? Lo() : e === "uk" ? Uo() : jo()
  },
  Mo = () => "Couldn't complete the purchase. This item does not exist.",
  Bo = () => "Não foi possível concluir a compra. Este item não existe.",
  Co = () => "无法完成购买。该物品不存在。",
  zo = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  qo = () => "No se pudo completar la compra. Este ítem no existe.",
  Fo = () => "Achat impossible. Cet objet n’existe pas.",
  Ko = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  $o = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Go = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Vo = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Ho = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Wo = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  kt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mo() : e === "pt" ? Bo() : e === "ch" ? Co() : e === "de" ? zo() : e === "es" ? qo() : e === "fr" ? Fo() : e === "it" ? Ko() : e === "jp" ? $o() : e === "pl" ? Go() : e === "ru" ? Vo() : e === "uk" ? Ho() : Wo()
  },
  Yo = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Jo = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Qo = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Xo = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Zo = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  ea = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  ta = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  ra = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  na = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  sa = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  ia = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  oa = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  aa = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Yo() : e === "pt" ? Jo() : e === "ch" ? Qo() : e === "de" ? Xo() : e === "es" ? Zo() : e === "fr" ? ea() : e === "it" ? ta() : e === "jp" ? ra() : e === "pl" ? na() : e === "ru" ? sa() : e === "uk" ? ia() : oa()
  },
  ca = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  ua = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  la = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  _a = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  da = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  fa = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  pa = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  ha = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  ma = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  ga = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  wa = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  ya = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Nt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ca() : e === "pt" ? ua() : e === "ch" ? la() : e === "de" ? _a() : e === "es" ? da() : e === "fr" ? fa() : e === "it" ? pa() : e === "jp" ? ha() : e === "pl" ? ma() : e === "ru" ? ga() : e === "uk" ? wa() : ya()
  },
  ba = () => "Doxxing",
  va = () => "Doxxing",
  Ea = () => "人肉搜索",
  Ta = () => "Doxxing",
  Oa = () => "Doxxing",
  Sa = () => "Doxxing",
  Ia = () => "Doxxing",
  ka = () => "ドックス（Doxxing）",
  Na = () => "Doxxing",
  Aa = () => "Докcинг",
  Ra = () => "Докcинг",
  Da = () => "Doxxing",
  Pa = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ba() : e === "pt" ? va() : e === "ch" ? Ea() : e === "de" ? Ta() : e === "es" ? Oa() : e === "fr" ? Sa() : e === "it" ? Ia() : e === "jp" ? ka() : e === "pl" ? Na() : e === "ru" ? Aa() : e === "uk" ? Ra() : Da()
  },
  xa = () => "Released other's personal information without their consent",
  La = () => "Vazar informações pessoais de terceiros sem consentimento",
  Ua = () => "在未获同意的情况下公开他人个人信息",
  ja = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Ma = () => "Divulgó información personal de otra persona sin su consentimiento",
  Ba = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Ca = () => "Diffusione di informazioni personali di terzi senza consenso",
  za = () => "他人の個人情報を同意なく公開した。",
  qa = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Fa = () => "Публикация личной информации других людей без их согласия",
  Ka = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  $a = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Ga = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xa() : e === "pt" ? La() : e === "ch" ? Ua() : e === "de" ? ja() : e === "es" ? Ma() : e === "fr" ? Ba() : e === "it" ? Ca() : e === "jp" ? za() : e === "pl" ? qa() : e === "ru" ? Fa() : e === "uk" ? Ka() : $a()
  },
  Va = () => "This email is already in use.",
  Ha = () => "Este e-mail já está em uso.",
  Wa = () => "This email is already in use.",
  Ya = () => "This email is already in use.",
  Ja = () => "Este correo electrónico ya está en uso.",
  Qa = () => "This email is already in use.",
  Xa = () => "Questa email è già in uso.",
  Za = () => "This email is already in use.",
  ec = () => "This email is already in use.",
  tc = () => "This email is already in use.",
  rc = () => "This email is already in use.",
  nc = () => "This email is already in use.",
  sc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Va() : e === "pt" ? Ha() : e === "ch" ? Wa() : e === "de" ? Ya() : e === "es" ? Ja() : e === "fr" ? Qa() : e === "it" ? Xa() : e === "jp" ? Za() : e === "pl" ? ec() : e === "ru" ? tc() : e === "uk" ? rc() : nc()
  },
  ic = r => `This email is already in use by user #${r.userId}.`,
  oc = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  ac = r => `This email is already in use by user #${r.userId}.`,
  cc = r => `This email is already in use by user #${r.userId}.`,
  uc = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  lc = r => `This email is already in use by user #${r.userId}.`,
  _c = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  dc = r => `This email is already in use by user #${r.userId}.`,
  fc = r => `This email is already in use by user #${r.userId}.`,
  pc = r => `This email is already in use by user #${r.userId}.`,
  hc = r => `This email is already in use by user #${r.userId}.`,
  mc = r => `This email is already in use by user #${r.userId}.`,
  gc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ic(r) : e === "pt" ? oc(r) : e === "ch" ? ac(r) : e === "de" ? cc(r) : e === "es" ? uc(r) : e === "fr" ? lc(r) : e === "it" ? _c(r) : e === "jp" ? dc(r) : e === "pl" ? fc(r) : e === "ru" ? pc(r) : e === "uk" ? hc(r) : mc(r)
  },
  wc = () => "Enter a valid email address.",
  yc = () => "Informe um endereço de e-mail válido.",
  bc = () => "Enter a valid email address.",
  vc = () => "Enter a valid email address.",
  Ec = () => "Introduce una dirección de correo electrónico válida.",
  Tc = () => "Enter a valid email address.",
  Oc = () => "Inserisci un indirizzo email valido.",
  Sc = () => "Enter a valid email address.",
  Ic = () => "Enter a valid email address.",
  kc = () => "Enter a valid email address.",
  Nc = () => "Enter a valid email address.",
  Ac = () => "Enter a valid email address.",
  Rc = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? wc() : e === "pt" ? yc() : e === "ch" ? bc() : e === "de" ? vc() : e === "es" ? Ec() : e === "fr" ? Tc() : e === "it" ? Oc() : e === "jp" ? Sc() : e === "pl" ? Ic() : e === "ru" ? kc() : e === "uk" ? Nc() : Ac()
  },
  Dc = r => `Error while painting: ${r.err}`,
  Pc = r => `Erro enquanto pinta: ${r.err}`,
  xc = r => `绘制时出错：${r.err}`,
  Lc = r => `Fehler beim Malen: ${r.err}`,
  Uc = r => `Error al pintar: ${r.err}`,
  jc = r => `Erreur lors de la peinture : ${r.err}`,
  Mc = r => `Errore durante la pittura: ${r.err}`,
  Bc = r => `ペイント中にエラーが発生しました: ${r.err}`,
  Cc = r => `Błąd podczas malowania: ${r.err}`,
  zc = r => `Ошибка при рисовании: ${r.err}`,
  qc = r => `Помилка під час малювання: ${r.err}`,
  Fc = r => `Lỗi khi tô: ${r.err}`,
  Kc = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Dc(r) : e === "pt" ? Pc(r) : e === "ch" ? xc(r) : e === "de" ? Lc(r) : e === "es" ? Uc(r) : e === "fr" ? jc(r) : e === "it" ? Mc(r) : e === "jp" ? Bc(r) : e === "pl" ? Cc(r) : e === "ru" ? zc(r) : e === "uk" ? qc(r) : Fc(r)
  },
  $c = () => "Exceeded maximum number of characters",
  Gc = () => "Excedeu o número máximo de caracteres permitidos",
  Vc = () => "超出最大字符数",
  Hc = () => "Maximale Zeichenanzahl überschritten",
  Wc = () => "Se excedió el número máximo de caracteres",
  Yc = () => "Nombre maximal de caractères dépassé",
  Jc = () => "Numero massimo di caratteri superato",
  Qc = () => "最大文字数を超過しました",
  Xc = () => "Przekroczono maksymalną liczbę znaków",
  Zc = () => "Превышено максимальное количество символов",
  eu = () => "Перевищено максимальну кількість символів",
  tu = () => "Đã vượt quá số ký tự tối đa",
  ru = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $c() : e === "pt" ? Gc() : e === "ch" ? Vc() : e === "de" ? Hc() : e === "es" ? Wc() : e === "fr" ? Yc() : e === "it" ? Jc() : e === "jp" ? Qc() : e === "pl" ? Xc() : e === "ru" ? Zc() : e === "uk" ? eu() : tu()
  },
  nu = () => "Verification code expired. Please request a new one.",
  su = () => "Código de verificação expirado. Por favor, solicite um novo.",
  iu = () => "验证码已过期，请重新获取。",
  ou = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  au = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  cu = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  uu = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  lu = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  _u = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  du = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  fu = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  pu = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  hu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? nu() : e === "pt" ? su() : e === "ch" ? iu() : e === "de" ? ou() : e === "es" ? au() : e === "fr" ? cu() : e === "it" ? uu() : e === "jp" ? lu() : e === "pl" ? _u() : e === "ru" ? du() : e === "uk" ? fu() : pu()
  },
  mu = () => "Griefing",
  gu = () => "Griefing",
  wu = () => "破坏行为",
  yu = () => "Griefing",
  bu = () => "Griefing",
  vu = () => "Griefing",
  Eu = () => "Griefing",
  Tu = () => "グリーフィング",
  Ou = () => "Griefing",
  Su = () => "Гриферство",
  Iu = () => "Гріфінг",
  ku = () => "Griefing",
  Nu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? mu() : e === "pt" ? gu() : e === "ch" ? wu() : e === "de" ? yu() : e === "es" ? bu() : e === "fr" ? vu() : e === "it" ? Eu() : e === "jp" ? Tu() : e === "pl" ? Ou() : e === "ru" ? Su() : e === "uk" ? Iu() : ku()
  },
  Au = () => "Messed up with other's artworks",
  Ru = () => "Estragou os desenhos dos outros",
  Du = () => "破坏了他人的作品",
  Pu = () => "Kunstwerke anderer beschädigt",
  xu = () => "Arruinó las obras de arte de otros",
  Lu = () => "A abîmé les œuvres des autres",
  Uu = () => "Ha rovinato i disegni degli altri",
  ju = () => "他人の作品を荒らした",
  Mu = () => "Zniszczył prace innych",
  Bu = () => "Испортил чужие рисунки",
  Cu = () => "Зіпсував роботи інших",
  zu = () => "Phá hỏng tranh của người khác",
  qu = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Au() : e === "pt" ? Ru() : e === "ch" ? Du() : e === "de" ? Pu() : e === "es" ? xu() : e === "fr" ? Lu() : e === "it" ? Uu() : e === "jp" ? ju() : e === "pl" ? Mu() : e === "ru" ? Bu() : e === "uk" ? Cu() : zu()
  },
  Fu = () => "Hate speech",
  Ku = () => "Discurso de Ódio",
  $u = () => "仇恨言论",
  Gu = () => "Hassrede",
  Vu = () => "Discurso de odio",
  Hu = () => "Discours haineux",
  Wu = () => "Discorso d'odio",
  Yu = () => "ヘイトスピーチ",
  Ju = () => "Mowa nienawiści",
  Qu = () => "Речь ненависти",
  Xu = () => "Мова ворожнечі",
  Zu = () => "Ngôn từ thù hằn",
  el = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Fu() : e === "pt" ? Ku() : e === "ch" ? $u() : e === "de" ? Gu() : e === "es" ? Vu() : e === "fr" ? Hu() : e === "it" ? Wu() : e === "jp" ? Yu() : e === "pl" ? Ju() : e === "ru" ? Qu() : e === "uk" ? Xu() : Zu()
  },
  tl = () => "Racism, homophobia, hate groups, ...",
  rl = () => "Racismo, homofobia, grupos de ódio, ...",
  nl = () => "种族主义、恐同、仇恨团体等",
  sl = () => "Rassismus, Homophobie, Hassgruppen, ...",
  il = () => "Racismo, homofobia, grupos de odio, ...",
  ol = () => "Racisme, homophobie, groupes haineux, ...",
  al = () => "Razzismo, omofobia, gruppi d'odio, ...",
  cl = () => "人種差別、同性愛差別、ヘイト団体など。",
  ul = () => "Rasizm, homofobia, grupy nienawiści, ...",
  ll = () => "Расизм, гомофобия, группы ненависти и т.п.",
  _l = () => "Расизм, гомофобія, групи ненависті, ...",
  dl = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  fl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? tl() : e === "pt" ? rl() : e === "ch" ? nl() : e === "de" ? sl() : e === "es" ? il() : e === "fr" ? ol() : e === "it" ? al() : e === "jp" ? cl() : e === "pl" ? ul() : e === "ru" ? ll() : e === "uk" ? _l() : dl()
  },
  pl = () => "Inappropriate content",
  hl = () => "Conteúdo inapropriado",
  ml = () => "不当内容",
  gl = () => "Unangemessene Inhalte",
  wl = () => "Contenido inapropiado",
  yl = () => "Contenu inapproprié",
  bl = () => "Contenuto inappropriato",
  vl = () => "不適切なコンテンツ",
  El = () => "Nieodpowiednie treści",
  Tl = () => "Неприемлемый контент",
  Ol = () => "Неприйнятний вміст",
  Sl = () => "Nội dung không phù hợp",
  Il = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? pl() : e === "pt" ? hl() : e === "ch" ? ml() : e === "de" ? gl() : e === "es" ? wl() : e === "fr" ? yl() : e === "it" ? bl() : e === "jp" ? vl() : e === "pl" ? El() : e === "ru" ? Tl() : e === "uk" ? Ol() : Sl()
  },
  kl = () => "Explicit, hateful, or illegal content",
  Nl = () => "Conteúdo explícito, de ódio ou ilegal",
  Al = () => "露骨、仇恨或非法内容",
  Rl = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  Dl = () => "Contenido explícito, de odio o ilegal",
  Pl = () => "Contenu explicite, haineux ou illégal",
  xl = () => "Contenuto esplicito, d'odio o illegale",
  Ll = () => "露骨、差別的、または違法なコンテンツ",
  Ul = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  jl = () => "Откровенный, разжигающий ненависть или незаконный контент",
  Ml = () => "Відвертий, ворожий або незаконний вміст",
  Bl = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Cl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? kl() : e === "pt" ? Nl() : e === "ch" ? Al() : e === "de" ? Rl() : e === "es" ? Dl() : e === "fr" ? Pl() : e === "it" ? xl() : e === "jp" ? Ll() : e === "pl" ? Ul() : e === "ru" ? jl() : e === "uk" ? Ml() : Bl()
  },
  zl = () => "Invalid captcha. Please try again.",
  ql = () => "Captcha inválido. Por favor, tente novamente.",
  Fl = () => "验证码无效，请重试。",
  Kl = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  $l = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Gl = () => "Captcha invalide. Veuillez réessayer.",
  Vl = () => "Captcha non valido. Riprova.",
  Hl = () => "キャプチャが無効です。もう一度お試しください。",
  Wl = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Yl = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Jl = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Ql = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Xl = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zl() : e === "pt" ? ql() : e === "ch" ? Fl() : e === "de" ? Kl() : e === "es" ? $l() : e === "fr" ? Gl() : e === "it" ? Vl() : e === "jp" ? Hl() : e === "pl" ? Wl() : e === "ru" ? Yl() : e === "uk" ? Jl() : Ql()
  },
  Zl = () => "Invalid challenge response",
  e_ = () => "Resposta de desafio inválida",
  t_ = () => "质询响应无效",
  r_ = () => "Ungültige Challenge-Antwort",
  n_ = () => "Respuesta de desafío inválida",
  s_ = () => "Réponse au défi invalide",
  i_ = () => "Risposta alla sfida non valida",
  o_ = () => "無効なチャレンジ応答",
  a_ = () => "Nieprawidłowa odpowiedź na wyzwanie",
  c_ = () => "Неверный ответ на вызов",
  u_ = () => "Недійсна відповідь на виклик",
  l_ = () => "Phản hồi thử thách không hợp lệ",
  __ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zl() : e === "pt" ? e_() : e === "ch" ? t_() : e === "de" ? r_() : e === "es" ? n_() : e === "fr" ? s_() : e === "it" ? i_() : e === "jp" ? o_() : e === "pl" ? a_() : e === "ru" ? c_() : e === "uk" ? u_() : l_()
  },
  d_ = () => "The verification code is incorrect. Please check it and try again.",
  f_ = () => "Código inválido",
  p_ = () => "验证码不正确。请检查后重试。",
  h_ = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  m_ = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  g_ = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  w_ = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  y_ = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  b_ = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  v_ = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  E_ = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  T_ = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  O_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? d_() : e === "pt" ? f_() : e === "ch" ? p_() : e === "de" ? h_() : e === "es" ? m_() : e === "fr" ? g_() : e === "it" ? w_() : e === "jp" ? y_() : e === "pl" ? b_() : e === "ru" ? v_() : e === "uk" ? E_() : T_()
  },
  S_ = () => "Invalid discord.",
  I_ = () => "Discord inválido.",
  k_ = () => "无效的 Discord。",
  N_ = () => "Ungültiger Discord.",
  A_ = () => "Discord inválido.",
  R_ = () => "Discord invalide.",
  D_ = () => "Discord non valido.",
  P_ = () => "無効なDiscordアカウントです。",
  x_ = () => "Nieprawidłowy Discord.",
  L_ = () => "Неверный Discord.",
  U_ = () => "Некоректний Discord.",
  j_ = () => "Discord không hợp lệ.",
  M_ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? S_() : e === "pt" ? I_() : e === "ch" ? k_() : e === "de" ? N_() : e === "es" ? A_() : e === "fr" ? R_() : e === "it" ? D_() : e === "jp" ? P_() : e === "pl" ? x_() : e === "ru" ? L_() : e === "uk" ? U_() : j_()
  },
  B_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  C_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  z_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  q_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  F_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  K_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  $_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  G_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  V_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  H_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  W_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Y_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  At = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? B_() : e === "pt" ? C_() : e === "ch" ? z_() : e === "de" ? q_() : e === "es" ? F_() : e === "fr" ? K_() : e === "it" ? $_() : e === "jp" ? G_() : e === "pl" ? V_() : e === "ru" ? H_() : e === "uk" ? W_() : Y_()
  },
  J_ = () => "Please enter a valid phone number with country code.",
  Q_ = () => "Insira um número de telefone válido com código do país.",
  X_ = () => "请输入带国家代码的有效电话号码。",
  Z_ = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  ed = () => "Introduce un número de teléfono válido con código de país.",
  td = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  rd = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  nd = () => "国番号付きの有効な電話番号を入力してください。",
  sd = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  id = () => "Введите действительный номер телефона с кодом страны.",
  od = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  ad = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  cd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? J_() : e === "pt" ? Q_() : e === "ch" ? X_() : e === "de" ? Z_() : e === "es" ? ed() : e === "fr" ? td() : e === "it" ? rd() : e === "jp" ? nd() : e === "pl" ? sd() : e === "ru" ? id() : e === "uk" ? od() : ad()
  },
  ud = () => "Phone number not supported. Please try another number.",
  ld = () => "Número de telefone não suportado. Por favor, tente outro número.",
  _d = () => "不支持此电话号码。请尝试其他号码。",
  dd = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  fd = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  pd = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  hd = () => "Numero di telefono non supportato. Prova con un altro numero.",
  md = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  gd = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  wd = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  yd = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  bd = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  vd = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ud() : e === "pt" ? ld() : e === "ch" ? _d() : e === "de" ? dd() : e === "es" ? fd() : e === "fr" ? pd() : e === "it" ? hd() : e === "jp" ? md() : e === "pl" ? gd() : e === "ru" ? wd() : e === "uk" ? yd() : bd()
  },
  Ed = () => "The new leader must be a member of the alliance",
  Td = () => "O novo líder deve ser um membro da aliança",
  Od = () => "新盟主必须是联盟成员",
  Sd = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Id = () => "El nuevo líder debe ser miembro de la alianza",
  kd = () => "Le nouveau chef doit être membre de l’alliance",
  Nd = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Ad = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Rd = () => "Nowy lider musi być członkiem sojuszu",
  Dd = () => "Новый лидер должен быть участником альянса",
  Pd = () => "Новий лідер має бути учасником альянсу",
  xd = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Ld = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ed() : e === "pt" ? Td() : e === "ch" ? Od() : e === "de" ? Sd() : e === "es" ? Id() : e === "fr" ? kd() : e === "it" ? Nd() : e === "jp" ? Ad() : e === "pl" ? Rd() : e === "ru" ? Dd() : e === "uk" ? Pd() : xd()
  },
  Ud = () => "Leaderboard is temporarily disabled",
  jd = () => "O ranking está temporariamente desativado",
  Md = () => "排行榜已暂时停用",
  Bd = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Cd = () => "La clasificación está deshabilitada temporalmente",
  zd = () => "Le classement est temporairement désactivé",
  qd = () => "La classifica è temporaneamente disattivata",
  Fd = () => "ランキングは一時的に無効になっています。",
  Kd = () => "Ranking jest tymczasowo wyłączony",
  $d = () => "Таблица лидеров временно отключена",
  Gd = () => "Таблиця лідерів тимчасово вимкнена",
  Vd = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  K = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Ud() : e === "pt" ? jd() : e === "ch" ? Md() : e === "de" ? Bd() : e === "es" ? Cd() : e === "fr" ? zd() : e === "it" ? qd() : e === "jp" ? Fd() : e === "pl" ? Kd() : e === "ru" ? $d() : e === "uk" ? Gd() : Vd()
  },
  Hd = () => "Location name is too big (max. 128 characters)",
  Wd = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Yd = () => "位置名称过长（最大 128 个字符）",
  Jd = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Qd = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Xd = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Zd = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  ef = () => "場所の名前が長すぎます（最大128文字）。",
  tf = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  rf = () => "Название локации слишком длинное (макс. 128 символов)",
  nf = () => "Назва локації надто довга (макс. 128 символів)",
  sf = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  of = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Hd() : e === "pt" ? Wd() : e === "ch" ? Yd() : e === "de" ? Jd() : e === "es" ? Qd() : e === "fr" ? Xd() : e === "it" ? Zd() : e === "jp" ? ef() : e === "pl" ? tf() : e === "ru" ? rf() : e === "uk" ? nf() : sf()
  },
  af = () => "Multi-accounting",
  cf = () => "Múltiplas contas",
  uf = () => "多账号",
  lf = () => "Multi-Accounting",
  _f = () => "Multi-cuentas",
  df = () => "Multi-comptes",
  ff = () => "Multi-account",
  pf = () => "複数アカウント使用",
  hf = () => "Multi-konta",
  mf = () => "Мультиаккаунт",
  gf = () => "Мультиакаунтинг",
  wf = () => "Nhiều tài khoản",
  yf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? af() : e === "pt" ? cf() : e === "ch" ? uf() : e === "de" ? lf() : e === "es" ? _f() : e === "fr" ? df() : e === "it" ? ff() : e === "jp" ? pf() : e === "pl" ? hf() : e === "ru" ? mf() : e === "uk" ? gf() : wf()
  },
  bf = () => "Use more than one account to paint pixels",
  vf = () => "Usar mais de uma conta para pintar",
  Ef = () => "使用多个账号绘制像素",
  Tf = () => "Mehr als ein Konto zum Malen verwenden",
  Of = () => "Uso de más de una cuenta para pintar píxeles",
  Sf = () => "Utiliser plus d’un compte pour peindre",
  If = () => "Usare più di un account per dipingere",
  kf = () => "複数のアカウントを使ってピクセルを塗った。",
  Nf = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Af = () => "Использование более одного аккаунта для рисования",
  Rf = () => "Використання більше ніж одного акаунта для малювання",
  Df = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Pf = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? bf() : e === "pt" ? vf() : e === "ch" ? Ef() : e === "de" ? Tf() : e === "es" ? Of() : e === "fr" ? Sf() : e === "it" ? If() : e === "jp" ? kf() : e === "pl" ? Nf() : e === "ru" ? Af() : e === "uk" ? Rf() : Df()
  },
  xf = r => `You can change your name again in ${r.days} days`,
  Lf = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  Uf = r => `你可以在 ${r.days} 天后再次修改名称`,
  jf = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  Mf = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  Bf = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  Cf = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  zf = r => `${r.days}日後に再び名前を変更できます。`,
  qf = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  Ff = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  Kf = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  $f = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  Gf = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? xf(r) : e === "pt" ? Lf(r) : e === "ch" ? Uf(r) : e === "de" ? jf(r) : e === "es" ? Mf(r) : e === "fr" ? Bf(r) : e === "it" ? Cf(r) : e === "jp" ? zf(r) : e === "pl" ? qf(r) : e === "ru" ? Ff(r) : e === "uk" ? Kf(r) : $f(r)
  },
  Vf = () => "No internet access or the servers are offline. Try again later.",
  Hf = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Wf = () => "没有网络连接或服务器已离线。请稍后重试。",
  Yf = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Jf = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Qf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Xf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Zf = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  ep = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  tp = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  rp = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  np = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  sp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Vf() : e === "pt" ? Hf() : e === "ch" ? Wf() : e === "de" ? Yf() : e === "es" ? Jf() : e === "fr" ? Qf() : e === "it" ? Xf() : e === "jp" ? Zf() : e === "pl" ? ep() : e === "ru" ? tp() : e === "uk" ? rp() : np()
  },
  ip = () => "You are not allowed to verify a phone number. Try refreshing the page",
  op = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  ap = () => "您无权验证电话号码。请尝试刷新页面。",
  cp = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  up = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  lp = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  _p = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  dp = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  fp = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  pp = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  hp = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  mp = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  gp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ip() : e === "pt" ? op() : e === "ch" ? ap() : e === "de" ? cp() : e === "es" ? up() : e === "fr" ? lp() : e === "it" ? _p() : e === "jp" ? dp() : e === "pl" ? fp() : e === "ru" ? pp() : e === "uk" ? hp() : mp()
  },
  wp = () => "Operation not allowed. Maybe you have too many favorite locations.",
  yp = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  bp = () => "操作不被允许。你的收藏位置可能过多。",
  vp = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Ep = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Tp = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Op = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Sp = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Ip = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  kp = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Np = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Ap = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Rp = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? wp() : e === "pt" ? yp() : e === "ch" ? bp() : e === "de" ? vp() : e === "es" ? Ep() : e === "fr" ? Tp() : e === "it" ? Op() : e === "jp" ? Sp() : e === "pl" ? Ip() : e === "ru" ? kp() : e === "uk" ? Np() : Ap()
  },
  Dp = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  Pp = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  xp = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  Lp = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  Up = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  jp = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  Mp = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  Bp = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  Cp = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  zp = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  qp = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  Fp = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  Kp = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Dp(r) : e === "pt" ? Pp(r) : e === "ch" ? xp(r) : e === "de" ? Lp(r) : e === "es" ? Up(r) : e === "fr" ? jp(r) : e === "it" ? Mp(r) : e === "jp" ? Bp(r) : e === "pl" ? Cp(r) : e === "ru" ? zp(r) : e === "uk" ? qp(r) : Fp(r)
  },
  $p = () => "You are trying to paint with a color you do not own",
  Gp = () => "Você está tentando pintar com uma cor que não possui",
  Vp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Hp = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Wp = () => "Estás intentando pintar con un color que no posees",
  Yp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Jp = () => "Stai cercando di dipingere con un colore che non possiedi",
  Qp = () => "所持していない色で塗ろうとしています。",
  Xp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Zp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  eh = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  th = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Rt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? $p() : e === "pt" ? Gp() : e === "ch" ? Vp() : e === "de" ? Hp() : e === "es" ? Wp() : e === "fr" ? Yp() : e === "it" ? Jp() : e === "jp" ? Qp() : e === "pl" ? Xp() : e === "ru" ? Zp() : e === "uk" ? eh() : th()
  },
  rh = () => "Phone already used",
  nh = () => "Telefone já usado",
  sh = () => "电话号码已被使用",
  ih = () => "Telefonnummer bereits verwendet",
  oh = () => "Teléfono ya utilizado",
  ah = () => "Téléphone déjà utilisé",
  ch = () => "Telefono già utilizzato",
  uh = () => "この電話番号は既に使用されています。",
  lh = () => "Numer telefonu jest już używany",
  _h = () => "Телефон уже используется",
  dh = () => "Номер телефону вже використовується",
  fh = () => "Số điện thoại đã được sử dụng",
  ph = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? rh() : e === "pt" ? nh() : e === "ch" ? sh() : e === "de" ? ih() : e === "es" ? oh() : e === "fr" ? ah() : e === "it" ? ch() : e === "jp" ? uh() : e === "pl" ? lh() : e === "ru" ? _h() : e === "uk" ? dh() : fh()
  },
  hh = () => "This phone number's region is not supported",
  mh = () => "A região deste número de telefone não é suportada",
  gh = () => "此电话号码的地区不受支持",
  wh = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  yh = () => "La región de este número de teléfono no es compatible",
  bh = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  vh = () => "La regione di questo numero di telefono non è supportata",
  Eh = () => "この電話番号の地域はサポートされていません",
  Th = () => "Region tego numeru telefonu nie jest obsługiwany",
  Oh = () => "Регион этого номера телефона не поддерживается",
  Sh = () => "Регіон цього номера телефону не підтримується",
  Ih = () => "Vùng của số điện thoại này không được hỗ trợ",
  kh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? hh() : e === "pt" ? mh() : e === "ch" ? gh() : e === "de" ? wh() : e === "es" ? yh() : e === "fr" ? bh() : e === "it" ? vh() : e === "jp" ? Eh() : e === "pl" ? Th() : e === "ru" ? Oh() : e === "uk" ? Sh() : Ih()
  },
  Nh = () => "Refresh your page to get the latest update",
  Ah = () => "Recarregue sua página para obter as últimas atualizações",
  Rh = () => "刷新页面以获取最新更新",
  Dh = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Ph = () => "Actualiza la página para obtener la última versión",
  xh = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Lh = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Uh = () => "最新の状態にするにはページを再読み込みしてください。",
  jh = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Mh = () => "Обновите страницу, чтобы получить последние изменения",
  Bh = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Ch = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Dt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Nh() : e === "pt" ? Ah() : e === "ch" ? Rh() : e === "de" ? Dh() : e === "es" ? Ph() : e === "fr" ? xh() : e === "it" ? Lh() : e === "jp" ? Uh() : e === "pl" ? jh() : e === "ru" ? Mh() : e === "uk" ? Bh() : Ch()
  },
  zh = () => "The request timed out. Please try again.",
  qh = () => "A solicitação expirou. Por favor, tente novamente.",
  Fh = () => "请求超时。请重试。",
  Kh = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  $h = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Gh = () => "La requête a expiré. Veuillez réessayer.",
  Vh = () => "La richiesta è scaduta. Riprova.",
  Hh = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Wh = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Yh = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Jh = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Qh = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Xh = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? zh() : e === "pt" ? qh() : e === "ch" ? Fh() : e === "de" ? Kh() : e === "es" ? $h() : e === "fr" ? Gh() : e === "it" ? Vh() : e === "jp" ? Hh() : e === "pl" ? Wh() : e === "ru" ? Yh() : e === "uk" ? Jh() : Qh()
  },
  Zh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  em = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  tm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  rm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  nm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  sm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  im = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  om = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  am = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  cm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  um = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  lm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  _m = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Zh() : e === "pt" ? em() : e === "ch" ? tm() : e === "de" ? rm() : e === "es" ? nm() : e === "fr" ? sm() : e === "it" ? im() : e === "jp" ? om() : e === "pl" ? am() : e === "ru" ? cm() : e === "uk" ? um() : lm()
  },
  dm = () => "The service is currently unavailable. Please try again later.",
  fm = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  pm = () => "服务当前不可用。请稍后再试。",
  hm = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  mm = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  gm = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  wm = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  ym = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  bm = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  vm = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Em = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Tm = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Om = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? dm() : e === "pt" ? fm() : e === "ch" ? pm() : e === "de" ? hm() : e === "es" ? mm() : e === "fr" ? gm() : e === "it" ? wm() : e === "jp" ? ym() : e === "pl" ? bm() : e === "ru" ? vm() : e === "uk" ? Em() : Tm()
  },
  Sm = () => "Too many attempts. Please try again later",
  Im = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  km = () => "尝试次数过多，请稍后再试",
  Nm = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Am = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  Rm = () => "Trop de tentatives. Veuillez réessayer plus tard",
  Dm = () => "Troppi tentativi. Riprova più tardi.",
  Pm = () => "試行回数が多すぎます。後で再度お試しください。",
  xm = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Lm = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Um = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  jm = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Pt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Sm() : e === "pt" ? Im() : e === "ch" ? km() : e === "de" ? Nm() : e === "es" ? Am() : e === "fr" ? Rm() : e === "it" ? Dm() : e === "jp" ? Pm() : e === "pl" ? xm() : e === "ru" ? Lm() : e === "uk" ? Um() : jm()
  },
  Mm = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Bm = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Cm = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  zm = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  qm = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Fm = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Km = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  $m = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Gm = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Vm = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Hm = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Wm = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Ym = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Mm() : e === "pt" ? Bm() : e === "ch" ? Cm() : e === "de" ? zm() : e === "es" ? qm() : e === "fr" ? Fm() : e === "it" ? Km() : e === "jp" ? $m() : e === "pl" ? Gm() : e === "ru" ? Vm() : e === "uk" ? Hm() : Wm()
  },
  Jm = () => "The typed username does not match your current username.",
  Qm = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Xm = () => "输入的用户名与当前用户名不匹配。",
  Zm = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  eg = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  tg = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  rg = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  ng = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  sg = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  ig = () => "Введённое имя пользователя не совпадает с текущим.",
  og = () => "Введене імʼя користувача не збігається з поточним.",
  ag = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  cg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Jm() : e === "pt" ? Qm() : e === "ch" ? Xm() : e === "de" ? Zm() : e === "es" ? eg() : e === "fr" ? tg() : e === "it" ? rg() : e === "jp" ? ng() : e === "pl" ? sg() : e === "ru" ? ig() : e === "uk" ? og() : ag()
  },
  ug = () => "Unexpected server error. Try again later.",
  lg = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  _g = () => "服务器出现意外错误。请稍后再试。",
  dg = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  fg = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  pg = () => "Erreur serveur inattendue. Réessayez plus tard.",
  hg = () => "Errore imprevisto del server. Riprova più tardi.",
  mg = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  gg = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  wg = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  yg = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  bg = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  c = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ug() : e === "pt" ? lg() : e === "ch" ? _g() : e === "de" ? dg() : e === "es" ? fg() : e === "fr" ? pg() : e === "it" ? hg() : e === "jp" ? mg() : e === "pl" ? gg() : e === "ru" ? wg() : e === "uk" ? yg() : bg()
  },
  vg = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Eg = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Tg = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Og = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Sg = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  Ig = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  kg = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  Ng = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Ag = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Rg = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  Dg = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  Pg = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  xg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? vg() : e === "pt" ? Eg() : e === "ch" ? Tg() : e === "de" ? Og() : e === "es" ? Sg() : e === "fr" ? Ig() : e === "it" ? kg() : e === "jp" ? Ng() : e === "pl" ? Ag() : e === "ru" ? Rg() : e === "uk" ? Dg() : Pg()
  },
  Lg = () => "VPN or proxy detected. Please disable your VPN and try again.",
  Ug = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  jg = () => "检测到VPN或代理。请关闭VPN后重试。",
  Mg = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  Bg = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  Cg = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  zg = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  qg = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  Fg = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Kg = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  $g = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Gg = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Vg = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Lg() : e === "pt" ? Ug() : e === "ch" ? jg() : e === "de" ? Mg() : e === "es" ? Bg() : e === "fr" ? Cg() : e === "it" ? zg() : e === "jp" ? qg() : e === "pl" ? Fg() : e === "ru" ? Kg() : e === "uk" ? $g() : Gg()
  },
  Hg = () => "Failed to load WebAssembly module. Try to use another browser.",
  Wg = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Yg = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Jg = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Qg = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Xg = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Zg = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  ew = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  tw = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  rw = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  nw = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  sw = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  iw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Hg() : e === "pt" ? Wg() : e === "ch" ? Yg() : e === "de" ? Jg() : e === "es" ? Qg() : e === "fr" ? Xg() : e === "it" ? Zg() : e === "jp" ? ew() : e === "pl" ? tw() : e === "ru" ? rw() : e === "uk" ? nw() : sw()
  },
  ow = () => "You already have this item. Please refresh the page.",
  aw = () => "Você já possui este item. Atualize a página.",
  cw = () => "你已经拥有此物品。请刷新页面。",
  uw = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  lw = () => "Ya tienes este ítem. Actualiza la página.",
  _w = () => "Vous possédez déjà cet objet. Actualisez la page.",
  dw = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  fw = () => "このアイテムはすでに所持しています。ページを更新してください。",
  pw = () => "Masz już ten przedmiot. Odśwież stronę.",
  hw = () => "У вас уже есть этот предмет. Обновите страницу.",
  mw = () => "У вас уже є цей предмет. Оновіть сторінку.",
  gw = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  xt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ow() : e === "pt" ? aw() : e === "ch" ? cw() : e === "de" ? uw() : e === "es" ? lw() : e === "fr" ? _w() : e === "it" ? dw() : e === "jp" ? fw() : e === "pl" ? pw() : e === "ru" ? hw() : e === "uk" ? mw() : gw()
  },
  ww = () => "You are already in an alliance",
  yw = () => "Você já está em uma aliança",
  bw = () => "你已经在一个联盟中",
  vw = () => "Du bist bereits in einer Allianz",
  Ew = () => "Ya estás en una alianza",
  Tw = () => "Vous êtes déjà dans une alliance",
  Ow = () => "Sei già in un'alleanza",
  Sw = () => "すでにアライアンスに所属しています。",
  Iw = () => "Jesteś już w sojuszu",
  kw = () => "Вы уже состоите в альянсе",
  Nw = () => "Ви вже перебуваєте в альянсі",
  Aw = () => "Bạn đã ở trong một liên minh",
  Rw = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ww() : e === "pt" ? yw() : e === "ch" ? bw() : e === "de" ? vw() : e === "es" ? Ew() : e === "fr" ? Tw() : e === "it" ? Ow() : e === "jp" ? Sw() : e === "pl" ? Iw() : e === "ru" ? kw() : e === "uk" ? Nw() : Aw()
  },
  Dw = () => "You are not allowed to do this",
  Pw = () => "Você não tem permissão para fazer isso",
  xw = () => "你无权执行此操作",
  Lw = () => "Du bist dazu nicht berechtigt",
  Uw = () => "No tienes permiso para hacer esto",
  jw = () => "Vous n’êtes pas autorisé à faire cela",
  Mw = () => "Non hai il permesso di farlo",
  Bw = () => "この操作を行う権限がありません。",
  Cw = () => "Nie masz uprawnień, aby to zrobić",
  zw = () => "У вас нет прав для этого действия",
  qw = () => "Ви не маєте права це робити",
  Fw = () => "Bạn không có quyền làm việc này",
  $ = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Dw() : e === "pt" ? Pw() : e === "ch" ? xw() : e === "de" ? Lw() : e === "es" ? Uw() : e === "fr" ? jw() : e === "it" ? Mw() : e === "jp" ? Bw() : e === "pl" ? Cw() : e === "ru" ? zw() : e === "uk" ? qw() : Fw()
  },
  Kw = () => "You do not have enough Droplets to buy this item.",
  $w = () => "Você não tem Droplets suficientes para comprar este item.",
  Gw = () => "你的 Droplets 不足，无法购买此物品。",
  Vw = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Hw = () => "No tienes suficientes Droplets para comprar este ítem.",
  Ww = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Yw = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Jw = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Qw = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Xw = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Zw = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  ey = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Lt = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Kw() : e === "pt" ? $w() : e === "ch" ? Gw() : e === "de" ? Vw() : e === "es" ? Hw() : e === "fr" ? Ww() : e === "it" ? Yw() : e === "jp" ? Jw() : e === "pl" ? Qw() : e === "ru" ? Xw() : e === "uk" ? Zw() : ey()
  },
  ty = () => "You need to be logged in to paint",
  ry = () => "Você precisa estar conectado para pintar",
  ny = () => "你需要登录才能进行绘制",
  sy = () => "Du musst eingeloggt sein, um zu malen",
  iy = () => "Debes iniciar sesión para pintar",
  oy = () => "Vous devez être connecté pour peindre",
  ay = () => "Devi avere effettuato l'accesso per dipingere",
  cy = () => "ペイントするにはログインが必要です。",
  uy = () => "Musisz być zalogowany, aby malować",
  ly = () => "Чтобы рисовать, нужно войти в аккаунт",
  _y = () => "Щоб малювати, необхідно увійти в акаунт",
  dy = () => "Bạn cần đăng nhập để tô",
  Ut = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? ty() : e === "pt" ? ry() : e === "ch" ? ny() : e === "de" ? sy() : e === "es" ? iy() : e === "fr" ? oy() : e === "it" ? ay() : e === "jp" ? cy() : e === "pl" ? uy() : e === "ru" ? ly() : e === "uk" ? _y() : dy()
  },
  fy = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  py = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  hy = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  my = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  gy = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  wy = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  yy = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  by = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  vy = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Ey = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Ty = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Oy = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Sy = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? fy() : e === "pt" ? py() : e === "ch" ? hy() : e === "de" ? my() : e === "es" ? gy() : e === "fr" ? wy() : e === "it" ? yy() : e === "jp" ? by() : e === "pl" ? vy() : e === "ru" ? Ey() : e === "uk" ? Ty() : Oy()
  },
  Iy = r => `Your account has been suspended out until ${r.until}`,
  ky = r => `A sua conta está suspensa até ${r.until}`,
  Ny = r => `你的账号已被暂停至 ${r.until}`,
  Ay = r => `Dein Konto ist gesperrt bis ${r.until}`,
  Ry = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  Dy = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  Py = r => `Il tuo account è sospeso fino al ${r.until}`,
  xy = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  Ly = r => `Twoje konto zostało zawieszone do ${r.until}`,
  Uy = r => `Ваш аккаунт заблокирован до ${r.until}`,
  jy = r => `Ваш акаунт призупинено до ${r.until}`,
  My = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  jt = (r, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Iy(r) : e === "pt" ? ky(r) : e === "ch" ? Ny(r) : e === "de" ? Ay(r) : e === "es" ? Ry(r) : e === "fr" ? Dy(r) : e === "it" ? Py(r) : e === "jp" ? xy(r) : e === "pl" ? Ly(r) : e === "ru" ? Uy(r) : e === "uk" ? jy(r) : My(r)
  },
  By = () => "A correction is already pending for this ticket.",
  Cy = () => "Já existe uma correção pendente para este ticket.",
  zy = () => "此工单已存在待审核的更正请求。",
  qy = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  Fy = () => "Ya hay una corrección pendiente para este ticket.",
  Ky = () => "Une correction est déjà en attente pour ce ticket.",
  $y = () => "Una correzione è già in sospeso per questo ticket.",
  Gy = () => "このチケットには未処理の修正があります。",
  Vy = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Hy = () => "Для этого тикета уже есть запрос на исправление.",
  Wy = () => "Для цього тікета вже є запит на перевірці.",
  Yy = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Jy = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? By() : e === "pt" ? Cy() : e === "ch" ? zy() : e === "de" ? qy() : e === "es" ? Fy() : e === "fr" ? Ky() : e === "it" ? $y() : e === "jp" ? Gy() : e === "pl" ? Vy() : e === "ru" ? Hy() : e === "uk" ? Wy() : Yy()
  },
  Qy = () => "You cannot review your own correction request.",
  Xy = () => "Você não pode revisar sua própria solicitação de correção.",
  Zy = () => "不能审核自己提交的更正请求。",
  eb = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  tb = () => "No puedes revisar tu propia solicitud de corrección.",
  rb = () => "Tu ne peux pas examiner ta propre demande de correction.",
  nb = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  sb = () => "自分のリクエストはレビューできません。",
  ib = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  ob = () => "Нельзя рассматривать собственный запрос.",
  ab = () => "Не можна перевіряти власний запит.",
  cb = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  ub = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? Qy() : e === "pt" ? Xy() : e === "ch" ? Zy() : e === "de" ? eb() : e === "es" ? tb() : e === "fr" ? rb() : e === "it" ? nb() : e === "jp" ? sb() : e === "pl" ? ib() : e === "ru" ? ob() : e === "uk" ? ab() : cb()
  },
  lb = () => "This correction has already been reviewed.",
  _b = () => "Esta correção já foi revisada.",
  db = () => "此请求已被审核。",
  fb = () => "Diese Korrektur wurde bereits geprüft.",
  pb = () => "Esta corrección ya ha sido revisada.",
  hb = () => "Cette correction a déjà été examinée.",
  mb = () => "Questa correzione è già stata revisionata.",
  gb = () => "このリクエストはすでにレビュー済みです。",
  wb = () => "Ta prośba została już rozpatrzona.",
  yb = () => "Этот запрос уже рассмотрен.",
  bb = () => "Цей запит вже перевірено.",
  vb = () => "Yêu cầu này đã được duyệt.",
  Eb = (r = {}, t = {}) => {
    const e = t.locale ?? _();
    return e === "en" ? lb() : e === "pt" ? _b() : e === "ch" ? db() : e === "de" ? fb() : e === "es" ? pb() : e === "fr" ? hb() : e === "it" ? mb() : e === "jp" ? gb() : e === "pl" ? wb() : e === "ru" ? yb() : e === "uk" ? bb() : vb()
  },
  z = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function Ev(r) {
  const t = Math.floor(r / z.hour);
  r -= t * z.hour;
  const e = Math.floor(r / z.minute);
  r -= e * z.minute;
  const s = Math.floor(r / z.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${s}` : `${e}:${s}`
}

function Tv(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    s = String(r.getHours()).padStart(2, "0"),
    i = String(r.getMinutes()).padStart(2, "0"),
    u = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${s}:${i}:${u}`
}
const Ov = {
    griefing: Nu(),
    "multi-accounting": yf(),
    "hate-speech": el(),
    bot: fi(),
    doxxing: Pa(),
    "inappropriate-content": Il(),
    other: Ci()
  },
  Sv = {
    doxxing: Ga(),
    "hate-speech": fl(),
    griefing: qu(),
    "multi-accounting": Pf(),
    bot: Ii(),
    "inappropriate-content": Cl(),
    other: Xi()
  },
  Iv = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Mt = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  kv = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  Tb = 365 * z.day;

function Qt(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function Nv(r, t = Date.now()) {
  const e = Qt(r);
  return e === null ? !1 : e - t >= Tb
}

function Av(r, t = Date.now()) {
  const e = Qt(r);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const n = Math.max(0, Math.ceil((e - t) / 6e4)),
    s = Math.floor(n / 1440),
    i = Math.floor(n % 1440 / 60),
    u = n % 60;
  return {
    days: s,
    hours: i,
    minutes: u
  }
}
const Ob = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Sb = 4,
  Ib = 6e3,
  kb = [{
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
  Nb = {
    price: {
      googlePlayBilling: 1.2
    }
  },
  Ab = {
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
  Rb = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  Db = {
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
      ignoreAll: "staff.tickets.ignore_all",
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
  Pb = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  F = {
    seasons: Ob,
    regionSize: Sb,
    refreshIntervalMs: Ib,
    colors: kb,
    platforms: Nb,
    products: Ab,
    countries: Rb,
    permissions: Db,
    settings: Pb
  },
  Fe = F,
  xb = F.seasons,
  Xt = F.seasons.length - 1,
  Rv = F.seasons[Xt].zoom,
  Dv = F.seasons[Xt].tileSize,
  Pv = F.permissions,
  Lb = F.settings,
  xv = F.platforms.price.googlePlayBilling;

function Lv(r) {
  return Fe.countries[r - 1]
}

function tt(r) {
  return tt.map.get(r)
}(r => {
  r.sharedProducts = Object.entries(Fe.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), r.map = Ub(r.sharedProducts, t => t.lookupKey)
})(tt || (tt = {}));

function Ub(r, t) {
  const e = new Map;
  for (const n in r) {
    const s = Reflect.get(r, n),
      i = t(s, n, r);
    e.set(i, s)
  }
  return e
}
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Bt(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    let i = e[s];
    i ? i.push(n) : e[s] = [n]
  }
  return e
}

function Uv(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    e[s] = n
  }
  return e
}
const jb = 30 * z.minute;
var ve, Ee;
class Mb {
  constructor(t) {
    b(this, ve, I(!0));
    b(this, Ee, I(null));
    w(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return T(p(this, ve))
  }
  set online(t) {
    S(p(this, ve), t, !0)
  }
  get serverTimeOffsetMs() {
    return T(p(this, Ee))
  }
  set serverTimeOffsetMs(t) {
    S(p(this, Ee), t, !0)
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
    const n = Math.trunc(this.getEstimatedServerNowMs());
    return e > n ? n : e
  }
  updateServerTimeEstimate(t) {
    const e = t.headers.get("date");
    if (!e) return;
    const n = new Date(e).getTime();
    Number.isFinite(n) && (this.serverTimeOffsetMs = n - Date.now())
  }
  async paint(t) {
    const e = Bt(t, a => `t=(${a.tile[0]},${a.tile[1]}),s=${a.season}`),
      n = {
        season: t[0].season,
        tiles: Object.values(e).map(a => ({
          x: a[0].tile[0],
          y: a[0].tile[1],
          pixels: {
            x: a.map(f => f.pixel[0]),
            y: a.map(f => f.pixel[1]),
            colors: a.map(f => f.colorIdx)
          }
        }))
      },
      s = JSON.stringify(n),
      i = await se.getHeaders(s),
      u = await this.request("/paint", {
        method: "POST",
        body: s,
        headers: i,
        credentials: "include"
      });
    if (u.status !== o.OK) {
      if (u.status === o.UNAUTHORIZED) throw new Error(Ut());
      if (u.status === o.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(Nt());
        const a = await u.json();
        if ((a == null ? void 0 : a.error) === "timeout") {
          const f = new Date(Date.now() + ((a == null ? void 0 : a.durationMs) ?? 0));
          throw new Error(jt({
            until: f.toLocaleString()
          }))
        }
        if ((a == null ? void 0 : a.error) === "refresh") throw new Error(Dt());
        if ((a == null ? void 0 : a.error) === "color-not-owned") throw new Error(Rt());
        if ((a == null ? void 0 : a.error) === "event-pixel-present") throw new Error(It());
        if ((a == null ? void 0 : a.error) === "challenge-required")
          if (a.tier) {
            if (await Tt(a.tier)) return this.paint(t);
            throw new Error(Ye())
          } else console.error("Challenge required but no tier provided", a);
        H.refresh()
      } else throw new Error(c())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (n, s, i) => `/staff/tools/select-area/clear/s${n}/pixel/${s}/${i}`, e)
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
    if (e.status !== o.OK) throw new l(c(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: n = "depth",
      beforeDepth: s,
      beforeTimestamp: i
    } = e, u = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: n,
        beforeDepth: s,
        beforeTimestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (u.status !== o.OK) throw new l(c(), u.status);
    return u.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: n = "depth",
      snapshotDepth: s,
      timestamp: i
    } = e, u = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: n,
        snapshotDepth: s,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (u.status !== o.OK) throw new l(c(), u.status);
    return u.json()
  }
  async getReverseTimelapse(t, e) {
    const n = await this.request("/staff/tools/select-area/reverse/timelapse", {
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
    if (n.status === o.BAD_REQUEST) {
      const s = await n.json(),
        i = (s == null ? void 0 : s.error) ?? "";
      throw i === "timelapse_too_many_events" ? new l(_m(), o.BAD_REQUEST) : new l(typeof i == "string" && i ? i : c(), o.BAD_REQUEST)
    }
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: n = "depth",
      snapshotDepth: s,
      timestamp: i
    } = e, u = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: n,
        snapshotDepth: s,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (u.status !== o.OK) throw new l(c(), u.status);
    return u.json()
  }
  async sendPaintRequests(t, e, n, s) {
    const i = Bt(t, f => `t=(${f.tile[0]},${f.tile[1]}),s=${f.season}`),
      a = (await Promise.all(Object.values(i).map(async f => {
        const [d, O] = f[0].tile, g = f[0].season, A = {
          colors: f.map(R => R.colorIdx),
          coords: f.flatMap(R => R.pixel),
          csid: n
        }, j = JSON.stringify(A), k = e(g, d, O), D = await se.getHeaders(j);
        return this.request(k, {
          method: "POST",
          body: j,
          headers: D,
          credentials: "include"
        })
      }))).filter(f => f.status !== o.OK);
    if (a.length) {
      const f = a[0];
      if (f.status === o.UNAUTHORIZED) throw new Error(Ut());
      if (f.status === o.FORBIDDEN) {
        if (f.headers.get("cf-mitigated") === "challenge") throw new Error(Nt());
        const d = await f.json();
        if ((d == null ? void 0 : d.error) === "timeout") {
          const O = new Date(Date.now() + ((d == null ? void 0 : d.durationMs) ?? 0));
          throw new Error(jt({
            until: O.toLocaleString()
          }))
        }
        if ((d == null ? void 0 : d.error) === "refresh") throw new Error(Dt());
        if ((d == null ? void 0 : d.error) === "color-not-owned") throw new Error(Rt());
        if ((d == null ? void 0 : d.error) === "event-pixel-present") throw new Error(It());
        H.refresh()
      } else throw new Error(c())
    }
  }
  async adminAutoPainterPaint(t, e, n) {
    const s = Bb(t),
      i = await Cb(s),
      u = new FormData;
    u.append("fingerprint", e), u.append("season", s.season.toString()), u.append("px0", s.offsetX.toString()), u.append("py0", s.offsetY.toString()), u.append("width", s.width.toString()), u.append("height", s.height.toString()), u.append("pixels", t.length.toString()), u.append("bitmap", i, "auto-painter.png"), u.append("userId", n.toString());
    const a = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: u,
      credentials: "include"
    });
    if (a.status === o.FORBIDDEN) {
      const f = await a.json().catch(() => null);
      if (typeof(f == null ? void 0 : f.charges) == "number") throw new Error(Kp({
        charges: Math.floor(f.charges),
        pixels: t.length
      }));
      const d = typeof(f == null ? void 0 : f.error) == "string" ? f.error.trim() : "";
      throw d && d !== "Forbidden" ? new Error(d) : new Error("Auto painter is restricted to administrators.")
    }
    if (a.status !== o.OK) throw new Error(c());
    return a.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, n],
    pixel: [s, i]
  }) {
    const u = new URLSearchParams;
    u.set("x", String(s)), u.set("y", String(i));
    const a = await this.request(`/s${t}/pixel/${e}/${n}?${u.toString()}`, {
      credentials: "include"
    });
    if (a.status !== o.OK) {
      const f = await a.text();
      throw new Error(Kc({
        err: f
      }))
    }
    return a.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, n],
    p0: [s, i],
    p1: [u, a]
  }) {
    const f = await this.request(`/staff/tools/select-area/s${t}/${e}/${n}?x0=${s}&y0=${i}&x1=${u}&y1=${a}`, {
      credentials: "include"
    });
    if (f.status !== o.OK) {
      const k = await f.text();
      throw console.error("Error while fetching pixel area info", k), new Error(c())
    }
    const d = await f.arrayBuffer(),
      O = new DataView(d),
      g = Math.floor(d.byteLength / 5),
      A = new Uint32Array(g),
      j = new Uint8Array(g);
    for (let k = 0; k < g; k++) {
      const D = k * 5;
      A[k] = O.getUint32(D, !0), j[k] = O.getUint8(D + 4)
    }
    return {
      paintedBy: A,
      colors: j
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === o.OK) return await t.json()
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === o.OK) return (await t.json()).email
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new Error(await t.text());
    return await t.json()
  }
  async driveStatus() {
    const t = await this.request("/drive/status", {
      credentials: "include"
    });
    return t.status !== o.OK ? !1 : !!(await t.json()).connected
  }
  async driveConnect(t) {
    const e = await this.request("/drive/connect", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: t
      })
    });
    if (e.status !== o.OK) throw new Error(`drive connect failed: ${e.status}`);
    return e.json()
  }
  async driveToken() {
    const t = await this.request("/drive/token", {
      credentials: "include",
      throwOnStatus: !1
    });
    if (t.status === o.CONFLICT) return null;
    if (t.status !== o.OK) throw new Error(`drive token failed: ${t.status}`);
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
    if (e.status === o.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(St());
    if (e.status !== o.OK) throw new Error(await e.text());
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
    if (t.status === o.NOT_FOUND) return null;
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
    if (t.status !== o.OK) throw new Error(c());
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
    if (e.status === o.BAD_REQUEST) throw new Error(cd());
    if (e.status === o.CONFLICT) throw new Error(ph());
    if (e.status === o.FORBIDDEN) throw new Error(gp());
    if (e.status === o.TOO_MANY_REQUESTS) throw new Error(Pt());
    if (e.status === o.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(kh());
    if (e.status === o.LOCKED) throw new Error(xg());
    if (e.status === o.UNPROCESSABLE_ENTITY) throw new Error(vd());
    if (e.status === o.NOT_ACCEPTABLE) throw new Error(Vg());
    if (e.status === o.PRECONDITION_FAILED) throw new Error(aa());
    if (e.status !== o.OK) throw new Error(c());
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
    const n = await this.request("/anticheat/challenge/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e),
      headers: {
        "x-fp": await Qe()
      }
    });
    if (t.type === "otp") {
      if (n.status === o.GONE) throw new Error(hu());
      if (n.status === o.BAD_REQUEST) throw new Error(O_());
      if (n.status === o.TOO_MANY_REQUESTS) throw new Error(Pt());
      if (n.status !== o.OK) throw new Error(c())
    } else {
      if (n.status === o.BAD_REQUEST) throw new Error(__());
      if (n.status !== o.OK) throw new Error(c())
    }
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === o.BAD_REQUEST) {
      const n = await e.json(),
        s = (n == null ? void 0 : n.error) ?? "";
      if (s === "invalid_name") throw new Error(At());
      if (s === "invalid_discord") throw new Error(M_());
      if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
        const i = parseInt(s.split(":")[1] ?? "0", 10);
        throw new Error(Gf({
          days: i
        }))
      }
      throw new Error(n == null ? void 0 : n.error)
    } else if (e.status !== o.OK) throw new Error(c())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === o.BAD_REQUEST) throw new Error(cg());
    if (e.status !== o.OK) throw new Error(c())
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
    if (e.status === o.FORBIDDEN) throw new Error(Rp());
    if (e.status !== o.OK) throw new Error(c())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== o.OK) throw new Error(c())
  }
  async updateFavoriteLocation(t, e) {
    const n = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: t,
        name: e
      }),
      credentials: "include"
    });
    if (n.status === o.BAD_REQUEST) throw new Error(of());
    if (n.status !== o.OK) throw new Error(c())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== o.OK) throw new Error(K());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== o.OK) throw new Error(K());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const n = await this.request(`/leaderboard/region/${t}/${e}`);
    if (n.status === o.OK) return n.json();
    throw new Error(K())
  }
  async leaderboardRegionPlayers(t, e) {
    const n = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (n.status === o.OK) return n.json();
    throw new Error(K())
  }
  async leaderboardRegionAlliances(t, e) {
    const n = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (n.status === o.OK) return n.json();
    throw new Error(K())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === o.OK) return e.json();
    throw new Error(K())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < jb || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== o.OK) throw new Error(c());
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
    if (e.status !== o.OK) throw e.status === o.NOT_FOUND ? new Error(kt()) : e.status === o.FORBIDDEN ? new Error(Lt()) : e.status === o.CONFLICT ? new Error(xt()) : new Error(c())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === o.OK) return t.json();
    if (t.status === o.NOT_FOUND) return;
    throw new Error(c())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === o.OK) return e.json();
    if (e.status === o.BAD_REQUEST) {
      const n = await e.json();
      throw n.error === "max_characters" ? new Error(qs()) : n.error === "name_taken" ? new Error(Ns()) : n.error == "empty_name" ? new Error(ei()) : new Error(c())
    } else throw e.status === o.FORBIDDEN ? new Error(Rw()) : new Error(c())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== o.OK) throw new Error(c())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== o.OK) throw e.status === o.FORBIDDEN ? new Error($()) : e.status === o.BAD_REQUEST ? new Error(ru()) : new Error(c())
  }
  async updateAllianceHeadquarters(t, e) {
    const n = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: t,
        longitude: e
      })
    });
    if (n.status !== o.OK) throw n.status === o.FORBIDDEN ? new Error($()) : new Error(c())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === o.OK) return e.json();
    throw e.status === o.FORBIDDEN ? new Error($()) : new Error(K())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === o.OK) return t.json();
    throw t.status === o.FORBIDDEN ? new Error($()) : new Error(c())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case o.OK:
        return "success";
      case o.ALREADY_REPORTED:
        return "in-another-alliance";
      case o.UNAUTHORIZED:
        return "not-logged-in";
      case o.FORBIDDEN:
        return "banned";
      case o.BAD_REQUEST:
      case o.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === o.OK) return e.json();
    throw new Error(c())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === o.OK) return e.json();
    throw new Error(c())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === o.NOT_FOUND) return;
    if (e.status !== o.OK) throw new l(c(), e.status);
    const n = await e.json();
    return {
      id: Number(n.id),
      name: String(n.name),
      pixelsPainted: Number((n == null ? void 0 : n.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(t) {
    const e = new URLSearchParams({
        q: t
      }),
      n = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== o.OK) throw new l(c(), n.status);
    const s = await n.json();
    return (Array.isArray(s) ? s : []).map(i => ({
      id: Number(i.id),
      name: String(i.name ?? ""),
      pixelsPainted: Number((i == null ? void 0 : i.pixels_painted) ?? 0)
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
    if (e.status === o.NOT_FOUND) return null;
    if (e.status !== o.OK) throw new l(c(), e.status);
    const n = await e.json(),
      s = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
    return {
      id: Number(n == null ? void 0 : n.id),
      name: String((n == null ? void 0 : n.name) ?? ""),
      description: (n == null ? void 0 : n.description) ?? null,
      ownerId: Number((n == null ? void 0 : n.ownerId) ?? (n == null ? void 0 : n.created_by)),
      ownerName: (n == null ? void 0 : n.ownerName) ?? null,
      hqName: (n == null ? void 0 : n.hqName) ?? null,
      hqLatitude: (n == null ? void 0 : n.hqLatitude) ?? (n == null ? void 0 : n.hq_latitude) ?? null,
      hqLongitude: (n == null ? void 0 : n.hqLongitude) ?? (n == null ? void 0 : n.hq_longitude) ?? null,
      pixelsPainted: Number((n == null ? void 0 : n.pixelsPainted) ?? (n == null ? void 0 : n.pixels_painted) ?? 0),
      membersCount: Number((n == null ? void 0 : n.membersCount) ?? s.length),
      members: s.map(i => ({
        id: Number(i == null ? void 0 : i.id),
        name: String((i == null ? void 0 : i.name) ?? `#${i==null?void 0:i.id}`),
        picture: (i == null ? void 0 : i.picture) ?? null,
        pixelsPainted: Number((i == null ? void 0 : i.pixelsPainted) ?? (i == null ? void 0 : i.pixels_painted) ?? 0),
        lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
        lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
        role: (i == null ? void 0 : i.alliance_role) === "admin" || (i == null ? void 0 : i.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(t, e) {
    const n = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      s = await this.request(`/staff/dashboard/alliances/${t}/members?${n.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (s.status === o.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (s.status !== o.OK) throw new l(c(), s.status);
    const i = await s.json(),
      u = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
    return {
      members: u.map(a => ({
        id: Number(a == null ? void 0 : a.id),
        name: String((a == null ? void 0 : a.name) ?? `#${a==null?void 0:a.id}`),
        picture: (a == null ? void 0 : a.picture) ?? null,
        pixelsPainted: Number((a == null ? void 0 : a.pixelsPainted) ?? (a == null ? void 0 : a.pixels_painted) ?? 0),
        lastPixelLatitude: (a == null ? void 0 : a.lastPixelLatitude) ?? null,
        lastPixelLongitude: (a == null ? void 0 : a.lastPixelLongitude) ?? null,
        role: (a == null ? void 0 : a.alliance_role) === "admin" || (a == null ? void 0 : a.role) === "admin" ? "admin" : "member"
      })),
      total: Number((i == null ? void 0 : i.total) ?? u.length)
    }
  }
  async renameAlliance(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (n.status === o.BAD_REQUEST) {
      const s = await n.json().catch(() => ({}));
      throw new Error((s == null ? void 0 : s.error) ?? c())
    } else if (n.status !== o.OK) throw new l(c(), n.status)
  }
  async changeAllianceLeader(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (n.status === o.BAD_REQUEST) {
      const s = await n.json();
      throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(Ld()) : new Error(c())
    } else if (n.status !== o.OK) throw new l(c(), n.status)
  }
  async banAllAllianceMembers(t, e, n) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: n
      })
    });
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async setAllianceMemberRole(t, e, n) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: n
      })
    });
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async removeAllianceMember(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== o.OK) throw e.status === o.FORBIDDEN ? new Error($()) : new Error(c())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== o.OK) throw e.status === o.FORBIDDEN ? new Error($()) : new Error(c())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== o.OK) throw new Error(c())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== o.OK) throw new Error(c());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== o.OK) throw new Error(c())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== o.OK) throw e.status === o.FORBIDDEN ? new Error($()) : new Error(c())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getPlayAccountId() {
    const t = await this.request("/payment/play/account-id", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new Error(c());
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
    if (e.status === o.BAD_REQUEST) {
      const n = await e.json().catch(() => ({}));
      throw new Error((n == null ? void 0 : n.error) ?? "Invalid Play purchase")
    }
    if (e.status === o.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(St());
    if (e.status !== o.OK) throw new Error(c());
    return e.json()
  }
  async verifyPendingPlayPurchases() {
    const t = await this.request("/payment/play/verify-pending", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new Error(c());
    return t.json()
  }
  async getPlayClaimStatus(t) {
    const e = await this.request(`/payment/play/claim/${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === o.NOT_FOUND) return {
      status: "unknown",
      droplets: 0
    };
    if (e.status !== o.OK) throw new Error(c());
    return e.json()
  }
  async listPlayPurchaseHistory() {
    const t = await this.request("/payment/play/history", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new Error(c());
    return t.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    const e = await t.json();
    for (const n of e.tickets) n.reports.sort((s, i) => Mt[s.reason] - Mt[i.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
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
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, n, s) {
    const i = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: n,
        assignedReason: s
      })
    });
    if (i.status !== o.OK && i.status !== o.BAD_REQUEST) throw new l(c(), i.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(t) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === o.CONFLICT) {
      const n = await e.json().catch(() => ({}));
      throw (n == null ? void 0 : n.error) === "reversal_already_pending" ? new l(Jy(), o.CONFLICT) : new l(c(), o.CONFLICT)
    }
    if (e.status !== o.OK) throw new l(c(), e.status);
    return e.json()
  }
  async listTicketReversals(t = {}) {
    const e = new URLSearchParams;
    t.status && e.set("status", t.status), t.page != null && e.set("page", String(t.page)), t.pageSize != null && e.set("pageSize", String(t.pageSize));
    const n = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
      s = await this.request(n, {
        method: "GET",
        credentials: "include"
      });
    if (s.status !== o.OK) throw new l(c(), s.status);
    return (await s.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status);
    return (await e.json()).reversal
  }
  async reviewTicketReversal(t, e, n) {
    const s = await this.request(`/staff/tickets/reversals/${t}/review`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        decision: e,
        notes: n
      })
    });
    if (s.status === o.FORBIDDEN) throw new l(ub(), o.FORBIDDEN);
    if (s.status === o.CONFLICT) throw new l(Eb(), o.CONFLICT);
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async request(t, e) {
    var u;
    let n;
    e = {
      credentials: "include",
      ...e
    };
    try {
      n = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(n)
    } catch (a) {
      throw console.error("Fetch error:", a), this.online = !1, new Error(Oo(), {
        cause: a
      })
    }
    if (n.status === o.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(Ym());
    const s = ((u = n.headers.get("cf-mitigated")) == null ? void 0 : u.toLowerCase()) === "challenge";
    if (n.status === 403 && s) {
      if (se.setCfLikelyAutomated(!0), !await Yt()) throw new Error(Ye());
      n = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(n)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === o.TOO_MANY_REQUESTS) throw new Error(Sy());
      if (n.status === o.REQUEST_TIMEOUT) throw new Error(Xh());
      if (n.status === o.SERVICE_UNAVAILABLE) throw new Error(Om())
    }
    return n
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    const s = await n.json();
    return {
      items: s.items ?? [],
      globals: s.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const n = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return (await n.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const n = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return (await n.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
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
    if (e.status !== o.OK) throw new l(c(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== o.NOT_FOUND) {
      if (e.status !== o.OK) throw new l(c(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== o.NOT_FOUND) {
      if (e.status !== o.OK) throw new l(c(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const n = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      s = await this.request(n, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async getUserNotes(t, e) {
    const n = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      s = await this.request(n, {
        method: "GET",
        credentials: "include"
      });
    if (s.status !== o.OK) throw new l(c(), s.status);
    return s.json()
  }
  async addUserNote(t, e, n) {
    const s = n == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      i = await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (i.status !== o.OK) throw new l(c(), i.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status);
    return e.json()
  }
  async setUserPermissions(t, e) {
    const n = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        permissions: Array.from(e)
      })
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    const s = await n.json();
    return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status);
    const n = await e.json();
    return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(i => {
      const u = i.is_dollar ?? i.isDollar ?? i.currency ?? i.Currency ?? 0;
      let a;
      if (typeof u == "string") {
        const g = u.toLowerCase();
        a = g === "usd" || g === "dollar" || g === "true"
      } else typeof u == "number" ? a = u !== 0 : a = !!u;
      const f = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
        d = i.product_variant ?? i.productVariant,
        O = d == null || d === "" ? null : Number(d);
      return {
        product_name: String(i.productName ?? i.product_name ?? ""),
        amount: Number(i.amount ?? 0),
        price: Number(i.price ?? 0),
        is_dollar: a,
        created_at: f,
        product_variant: Number.isInteger(O) ? O : null
      }
    })
  }
  async postSetUserDroplets(t, e) {
    const n = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        droplets: e
      })
    });
    if (n.status !== o.OK) throw new l(c(), n.status)
  }
  async postAdminRenameUser(t, e, n) {
    const s = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: n
      })
    });
    if (s.status === o.BAD_REQUEST) {
      const i = await s.json(),
        u = (i == null ? void 0 : i.error) ?? "";
      throw u === "invalid_name" ? new l(At(), o.BAD_REQUEST) : new l(typeof u == "string" && u ? u : c(), o.BAD_REQUEST)
    }
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async postAdminChangeUserEmail(t, e) {
    const n = await this.request("/staff/dashboard/users/email", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        email: e
      })
    });
    if (n.status === o.BAD_REQUEST) {
      const s = await n.json(),
        i = (s == null ? void 0 : s.error) ?? "";
      throw i === "email_required" || i === "invalid_email" ? new l(Rc(), o.BAD_REQUEST) : new l(typeof i == "string" && i ? i : c(), o.BAD_REQUEST)
    }
    if (n.status === o.CONFLICT) {
      const s = await n.json();
      if (((s == null ? void 0 : s.error) ?? "") === "email_already_in_use") {
        const u = new l(typeof(s == null ? void 0 : s.userId) == "number" ? gc({
          userId: s.userId
        }) : sc(), o.CONFLICT);
        throw typeof(s == null ? void 0 : s.userId) == "number" && (u.userId = s.userId), u
      }
      throw new l(c(), o.CONFLICT)
    }
    if (n.status === o.NOT_FOUND) throw new l("User not found.", o.NOT_FOUND);
    if (n.status !== o.OK) throw new l(c(), n.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status);
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
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const n = new URLSearchParams;
    n.set("userId", String(t.userId)), n.set("kind", String(t.kind)), n.set("page", String(t.page ?? 0)), n.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && n.set("sortBy", t.sortBy), t.sortDir && n.set("sortDir", t.sortDir), t.status && n.set("status", t.status), e === "appeals" && n.set("appealId", String(t.appealId));
    const s = e === "appeals" ? `/staff/appeals/tickets?${n.toString()}` : `/staff/dashboard/users/tickets?${n.toString()}`,
      i = await this.request(s, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== o.OK) throw new l(c(), i.status);
    const u = await i.json();
    return Array.isArray(u == null ? void 0 : u.tickets) ? u.tickets : []
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
    const n = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    const s = await n.json();
    return Array.isArray(s == null ? void 0 : s.appeals) ? s.appeals : []
  }
  async getModerationTranslate(t, e) {
    const n = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      s = await this.request(n, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (s.status !== o.OK) throw new l(c(), s.status);
    const i = await s.json();
    return i == null ? void 0 : i.translation
  }
  mapTicketsToReportRows(t, e) {
    var s, i, u, a, f;
    const n = [];
    for (const d of t) {
      const O = d.status ?? "open";
      if (e === "received") {
        for (const g of d.reports) n.push({
          id: String(g.id),
          ticketId: String(d.id),
          createdAt: g.createdAt ?? d.createdAt,
          byUser: {
            id: Number(g.reportedBy),
            name: String(g.reportedByName ?? g.reportedBy),
            picture: g.reportedByPicture ?? null
          },
          reason: String(g.reason),
          status: O
        });
        continue
      }
      if (e === "sent") {
        for (const g of d.reports) n.push({
          id: String(g.id),
          ticketId: String(d.id),
          createdAt: g.createdAt ?? d.createdAt,
          toUser: {
            id: Number(d.reportedUser.id),
            name: String(d.reportedUser.name),
            picture: d.reportedUser.picture ?? null
          },
          reason: String(g.reason),
          status: O
        });
        continue
      }
      n.push({
        id: String(d.id),
        ticketId: String(d.id),
        createdAt: d.createdAt,
        handledBy: d.status && d.status !== "open" ? {
          id: ((s = d.handledBy) == null ? void 0 : s.id) ?? 0,
          name: ((i = d.handledBy) == null ? void 0 : i.name) ?? "Moderator",
          picture: ((u = d.handledBy) == null ? void 0 : u.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((f = (a = d.reports) == null ? void 0 : a[0]) == null ? void 0 : f.reason) ?? "other"),
        status: O
      })
    }
    return n.sort((d, O) => new Date(O.createdAt).getTime() - new Date(d.createdAt).getTime()), n
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      n = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== o.NO_CONTENT) throw new l(c(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async banUsers(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: n
      })
    });
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async timeoutUsers(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: n
      })
    });
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async incrementUsersDroplets(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: n
      })
    });
    if (s.status !== o.OK) throw new l(c(), s.status)
  }
  async postUnbanUsers(t, e) {
    const n = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (n.status !== o.OK) throw new l(c(), n.status)
  }
  async postBulkPhoneVerification(t, e) {
    const n = await this.request("/staff/dashboard/summary/users/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return await n.json()
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.json()
  }
  async postUsersSuspend(t, e, n) {
    let s;
    switch (e) {
      case "dashboard":
        s = `/staff/dashboard/users/${n}`;
        break;
      case "select-area":
        s = `/staff/tools/select-area/${n}`;
        break;
      case "select-pixel":
      default:
        s = `/staff/tools/select-pixel/${n}`;
        break
    }
    if ((await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== o.OK) throw new Error(c())
  }
  async postSelectAreaPhoneVerification(t, e = "") {
    const n = await this.request("/staff/tools/select-area/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return await n.json()
  }
  async postDashboardUserPhoneVerification(t, e = "") {
    const n = await this.request("/staff/dashboard/users/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: [t],
        notes: e
      })
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return await n.json()
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== o.OK) throw new l(c(), e.status);
    return e.json()
  }
  async submitBanAppeal(t) {
    const e = JSON.stringify({
        message: t
      }),
      n = await se.getHeaders(e),
      s = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: n
      });
    if (s.status === o.FORBIDDEN) {
      const i = await s.json();
      if ((i == null ? void 0 : i.error) === "challenge-required" && i.tier) {
        if (await Tt(i.tier)) return this.submitBanAppeal(t);
        throw new l(Ye(), s.status)
      }
    }
    if (s.status !== o.OK && s.status !== o.ALREADY_REPORTED) throw new l(c(), s.status);
    return s.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async postSolveAppeal(t, e) {
    const n = await this.request(`/staff/appeals/${t}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return await n.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    const e = await t.json();
    return e != null && e.active ? {
      kind: (e == null ? void 0 : e.kind) === "ban" ? "ban" : "timeout",
      reason: e == null ? void 0 : e.reason,
      reportedLatitude: typeof(e == null ? void 0 : e.reportedLatitude) == "number" ? e.reportedLatitude : void 0,
      reportedLongitude: typeof(e == null ? void 0 : e.reportedLongitude) == "number" ? e.reportedLongitude : void 0,
      zoom: typeof(e == null ? void 0 : e.zoom) == "number" ? e.zoom : void 0,
      appealSubmitted: (e == null ? void 0 : e.appealSubmitted) === !0
    } : null
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const n = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      s = await this.request(n, {
        credentials: "include"
      });
    if (s.status !== o.OK) throw new l(c(), s.status);
    return s.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== o.OK) throw new l(c(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const n = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.json()
  }
  async getAnticheatSignals(t, e) {
    const n = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.json()
  }
  async getAnticheatUserJourney(t, e, n) {
    const s = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (s.status !== o.OK) throw new l(c(), s.status);
    return s.json()
  }
  async getAnticheatSignalAnalysis(t, e, n) {
    const s = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (s.status !== o.OK) throw new l(c(), s.status);
    return s.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const n = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Qe()
      }
    });
    if (!n.ok) throw n.status === 500 ? new l(c(), n.status) : new l(Xl(), n.status);
    return n.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < xb.length,
      s = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Lb.tools.wayback.limit,
      i = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      u = t.cursorTs !== void 0,
      a = t.cursorUserId !== void 0,
      f = t.cursorAllianceId !== void 0,
      d = t.cursorPixelsCount !== void 0,
      O = u || a || f || d,
      g = u && a && f && d;
    let A = !0;
    return O && (A = g && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !s || !i || !e || !A)
  }
  getSafeWaybackInput(t) {
    return t.season = Math.trunc(t.season), t.limit = Math.trunc(t.limit), t.timestamp = Math.trunc(t.timestamp), t.tileX = Math.trunc(t.tileX), t.tileY = Math.trunc(t.tileY), t.cursorTs !== void 0 && (t.cursorTs = Math.trunc(t.cursorTs)), t.cursorUserId !== void 0 && (t.cursorUserId = Math.trunc(t.cursorUserId)), t.cursorAllianceId !== void 0 && (t.cursorAllianceId = Math.trunc(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && (t.cursorPixelsCount = Math.trunc(t.cursorPixelsCount)), t
  }
  async getWaybackEvents(t) {
    if (!this.validWaybackInput(t)) throw new Error("Invalid query params");
    t = this.getSafeWaybackInput(t);
    const e = new URLSearchParams;
    t.cursorTs !== void 0 && e.set("cursorTs", String(t.cursorTs)), t.cursorUserId !== void 0 && e.set("cursorUserId", String(t.cursorUserId)), t.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(t.cursorPixelsCount));
    const n = `/staff/tools/wayback/s${t.season}/l${t.limit}/x${t.tileX}/y${t.tileY}/t${t.timestamp}`,
      s = e.toString(),
      i = await this.request(s.length > 0 ? `${n}?${s}` : n, {
        method: "GET",
        credentials: "include"
      });
    if (i.status === o.FORBIDDEN) throw new Error("Access denied");
    if (i.status !== o.OK) throw new Error("Failed to fetch wayback events");
    return i.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === o.NOT_FOUND) throw new Error(kt());
    if (e.status === o.FORBIDDEN) throw new Error(Lt());
    if (e.status === o.CONFLICT) throw new Error(xt());
    if (e.status !== o.OK) throw new Error(c())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== o.OK) throw new l(c(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const n = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.json()
  }
  async postCreateFrame(t) {
    const e = new FormData;
    e.append("name", t.name), e.append("image", t.image), e.append("description", t.description), e.append("value", t.value.toString()), e.append("rarity", t.rarity), e.append("purchasable", t.purchasable.toString());
    const n = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (n.status !== o.OK) throw new l(c(), n.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async getR2Images(t) {
    const e = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      }),
      n = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.json()
  }
  async postUploadR2Image(t) {
    const e = new FormData;
    t.name && e.append("name", t.name), e.append("image", t.image);
    const n = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (n.status !== o.OK) throw new l(c(), n.status);
    return n.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== o.OK) throw new l(c(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === o.OK
  }
}
ve = new WeakMap, Ee = new WeakMap;

function Bb(r) {
  var A, j;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const k of r)
    if (k.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (A = Fe.seasons) == null ? void 0 : A[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let s = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    u = Number.NEGATIVE_INFINITY,
    a = Number.NEGATIVE_INFINITY;
  const f = r.map(k => {
      const D = Math.round(k.tile[0] * n + k.pixel[0]),
        R = Math.round(k.tile[1] * n + k.pixel[1]);
      return D < s && (s = D), R < i && (i = R), D > u && (u = D), R > a && (a = R), {
        x: D,
        y: R,
        colorIdx: k.colorIdx
      }
    }),
    d = u - s + 1,
    O = a - i + 1;
  if (!Number.isFinite(d) || !Number.isFinite(O) || d <= 0 || O <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const g = new Uint8ClampedArray(d * O * 4);
  for (const {
      x: k,
      y: D,
      colorIdx: R
    }
    of f) {
    const _t = (j = Fe.colors) == null ? void 0 : j[R];
    if (!_t) throw new Error(`Unknown palette color index: ${R}`);
    const nr = k - s,
      Ue = ((D - i) * d + nr) * 4,
      [sr, ir, or] = _t.rgb;
    g[Ue] = sr, g[Ue + 1] = ir, g[Ue + 2] = or, g[Ue + 3] = R === 0 ? 1 : 255
  }
  return {
    data: g,
    width: d,
    height: O,
    offsetX: s,
    offsetY: i,
    season: t
  }
}
async function Cb(r) {
  const t = zb(r.width, r.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = e.createImageData(r.width, r.height);
  return n.data.set(r.data), e.putImageData(n, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((s, i) => {
    t.toBlob(u => {
      if (!u) {
        i(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(u)
    }, "image/png")
  })
}

function zb(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let q = new Mb(st);
typeof window < "u" && _r(() => {
  let r = q.online;
  dr(() => {
    const t = q.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});
const jv = r => new URL(r, st).toString();

function Zt(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function qb(r, t) {
  for (const e of t)
    if (Zt(r, e)) return !0;
  return !1
}

function er(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function Fb(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class Kb {
  constructor(t) {
    w(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const n = Math.floor(t / 8),
      s = t % 8;
    if (n >= this.bytes.length) {
      const u = new Uint8Array(n + 1),
        a = u.length - this.bytes.length;
      for (let f = 0; f < this.bytes.length; f++) u[f + a] = this.bytes[f];
      this.bytes = u
    }
    const i = this.bytes.length - 1 - n;
    e ? this.bytes[i] = this.bytes[i] | 1 << s : this.bytes[i] = this.bytes[i] & ~(1 << s)
  }
  get(t) {
    const e = Math.floor(t / 8),
      n = t % 8,
      s = this.bytes.length;
    return e > s ? !1 : (this.bytes[s - 1 - e] & 1 << n) !== 0
  }
}

function Mv(r) {
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onload = () => {
      const s = n.result;
      if (!s || typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s.substring(s.indexOf(",") + 1))
    }, n.readAsDataURL(r)
  })
}

function Bv(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${Fb(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onloadend = () => {
      const s = n.result;
      if (typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s)
    }, n.onerror = e, n.readAsDataURL(r)
  })
}

function Cv(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    s = e.indexOf(";base64"),
    i = (s === -1 ? e : e.slice(0, s)) || "text/plain";
  if (s !== -1) {
    const u = er(n),
      a = new Uint8Array(u.byteLength);
    return a.set(u), new Blob([a], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: i
  })
}

function zv(...r) {
  return r.filter(Boolean).join(" ")
}
const $b = typeof document < "u";
let Ct = 0;
var Te, Oe, Se;
class Gb {
  constructor() {
    b(this, Te, I(qe([])));
    b(this, Oe, I(qe([])));
    b(this, Se, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    w(this, "addToast", t => {
      $b && this.toasts.unshift(t)
    });
    w(this, "updateToast", ({
      id: t,
      data: e,
      type: n,
      message: s
    }) => {
      const i = this.toasts.findIndex(a => a.id === t),
        u = this.toasts[i];
      this.toasts[i] = {
        ...u,
        ...e,
        id: t,
        title: s,
        type: n,
        updated: !0
      }
    });
    w(this, "create", t => {
      var a;
      const {
        message: e,
        ...n
      } = t, s = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((a = t.id) == null ? void 0 : a.length) > 0 ? t.id : Ct++, i = t.dismissable === void 0 ? !0 : t.dismissable, u = t.type === void 0 ? "default" : t.type;
      return ft(() => {
        this.toasts.find(d => d.id === s) ? this.updateToast({
          id: s,
          data: t,
          type: u,
          message: e,
          dismissable: i
        }) : this.addToast({
          ...n,
          id: s,
          title: e,
          dismissable: i,
          type: u
        })
      }), s
    });
    w(this, "dismiss", t => (ft(() => {
      if (t === void 0) {
        this.toasts = this.toasts.map(n => ({
          ...n,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(n => n.id === t);
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
      const e = p(this, Se).call(this, t);
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
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const s = t instanceof Promise ? t : t();
      let i = n !== void 0;
      return s.then(u => {
        if (typeof u == "object" && u && "ok" in u && typeof u.ok == "boolean" && !u.ok) {
          i = !1;
          const a = Vb(u);
          this.create({
            id: n,
            type: "error",
            message: a
          })
        } else if (e.success !== void 0) {
          i = !1;
          const a = typeof e.success == "function" ? e.success(u) : e.success;
          this.create({
            id: n,
            type: "success",
            message: a
          })
        }
      }).catch(u => {
        if (e.error !== void 0) {
          i = !1;
          const a = typeof e.error == "function" ? e.error(u) : e.error;
          this.create({
            id: n,
            type: "error",
            message: a
          })
        }
      }).finally(() => {
        var u;
        i && (this.dismiss(n), n = void 0), (u = e.finally) == null || u.call(e)
      }), n
    });
    w(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || Ct++;
      return this.create({
        component: t,
        id: n,
        ...e
      }), n
    });
    w(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    w(this, "setHeight", t => {
      const e = p(this, Se).call(this, t.toastId);
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
    return T(p(this, Te))
  }
  set toasts(t) {
    S(p(this, Te), t, !0)
  }
  get heights() {
    return T(p(this, Oe))
  }
  set heights(t) {
    S(p(this, Oe), t, !0)
  }
}
Te = new WeakMap, Oe = new WeakMap, Se = new WeakMap;

function Vb(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const P = new Gb;

function Hb(r, t) {
  return P.create({
    message: r,
    ...t
  })
}
var Ge;
class qv {
  constructor() {
    b(this, Ge, re(() => P.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return T(p(this, Ge))
  }
}
Ge = new WeakMap;
const Wb = Hb,
  Yb = Object.assign(Wb, {
    success: P.success,
    info: P.info,
    warning: P.warning,
    error: P.error,
    custom: P.custom,
    message: P.message,
    promise: P.promise,
    dismiss: P.dismiss,
    loading: P.loading,
    getActiveToasts: () => P.toasts.filter(r => !r.dismiss)
  });
var Ie, ke, Ne, Ae, Re, De, Pe, xe;
class Jb {
  constructor() {
    w(this, "channel", new BroadcastChannel("user-channel"));
    b(this, Ie, I());
    b(this, ke, I(!0));
    b(this, Ne, I());
    b(this, Ae, I(Date.now()));
    b(this, Re, re(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Ht.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    b(this, De, re(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    b(this, Pe, re(() => {
      var t;
      return new Kb(er(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    b(this, xe, re(() => {
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
    return T(p(this, Ie))
  }
  set data(t) {
    S(p(this, Ie), t, !0)
  }
  get loading() {
    return T(p(this, ke))
  }
  set loading(t) {
    S(p(this, ke), t, !0)
  }
  get notificationCount() {
    return T(p(this, Ne))
  }
  set notificationCount(t) {
    S(p(this, Ne), t, !0)
  }
  get lastFetch() {
    return T(p(this, Ae))
  }
  set lastFetch(t) {
    S(p(this, Ae), t)
  }
  get charges() {
    return T(p(this, Re))
  }
  set charges(t) {
    S(p(this, Re), t)
  }
  get cooldown() {
    return T(p(this, De))
  }
  set cooldown(t) {
    S(p(this, De), t)
  }
  get flagsBitmap() {
    return T(p(this, Pe))
  }
  set flagsBitmap(t) {
    S(p(this, Pe), t)
  }
  get timeoutUntil() {
    return T(p(this, xe))
  }
  set timeoutUntil(t) {
    S(p(this, xe), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await q.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && q.getNotificationCount().then(n => {
        this.notificationCount = n
      }), (e = this.data) != null && e.id && (Vr("userId", {
        id: this.data.id
      }), se.setUserId(this.data.id)), !!this.data
    } catch (n) {
      return console.error(n), Yb.warning(sp(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await q.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var n;
    return t < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Zt((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return qb((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ie = new WeakMap, ke = new WeakMap, Ne = new WeakMap, Ae = new WeakMap, Re = new WeakMap, De = new WeakMap, Pe = new WeakMap, xe = new WeakMap;
const H = new Jb;
let y;
const U = new Array(128).fill(void 0);
U.push(void 0, null, !0, !1);

function m(r) {
  return U[r]
}
let ae = U.length;

function E(r) {
  ae === U.length && U.push(U.length + 1);
  const t = ae;
  return ae = U[t], U[t] = r, t
}

function M(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    y.__wbindgen_export_0(E(e))
  }
}

function G(r) {
  return r == null
}
const tr = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && tr.decode();
let ne = null;

function Be() {
  return (ne === null || ne.byteLength === 0) && (ne = new Uint8Array(y.memory.buffer)), ne
}

function Ce(r, t) {
  return r = r >>> 0, tr.decode(Be().subarray(r, r + t))
}

function Qb(r) {
  r < 132 || (U[r] = ae, ae = r)
}

function zt(r) {
  const t = m(r);
  return Qb(r), t
}
let V = null;

function Ke() {
  return (V === null || V.buffer.detached === !0 || V.buffer.detached === void 0 && V.buffer !== y.memory.buffer) && (V = new DataView(y.memory.buffer)), V
}
let J = 0;
const ze = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Xb = typeof ze.encodeInto == "function" ? function(r, t) {
    return ze.encodeInto(r, t)
  } : function(r, t) {
    const e = ze.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function Le(r, t, e) {
  if (e === void 0) {
    const a = ze.encode(r),
      f = t(a.length, 1) >>> 0;
    return Be().subarray(f, f + a.length).set(a), J = a.length, f
  }
  let n = r.length,
    s = t(n, 1) >>> 0;
  const i = Be();
  let u = 0;
  for (; u < n; u++) {
    const a = r.charCodeAt(u);
    if (a > 127) break;
    i[s + u] = a
  }
  if (u !== n) {
    u !== 0 && (r = r.slice(u)), s = e(s, n, n = u + r.length * 3, 1) >>> 0;
    const a = Be().subarray(s + u, s + n),
      f = Xb(r, a);
    u += f.written, s = e(s, n, u, 1) >>> 0
  }
  return J = u, s
}

function Zb(r) {
  const t = Le(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.set_discord_id(t, e)
}

function ev(r) {
  const t = Le(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.set_fingerprint(t, e)
}

function tv(r) {
  const t = Le(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.set_detected_bot(t, e)
}

function rv(r) {
  let t, e;
  try {
    const i = y.__wbindgen_add_to_stack_pointer(-16),
      u = Le(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
      a = J;
    y.get_pawtected_endpoint_payload(i, u, a);
    var n = Ke().getInt32(i + 0, !0),
      s = Ke().getInt32(i + 4, !0);
    return t = n, e = s, Ce(n, s)
  } finally {
    y.__wbindgen_add_to_stack_pointer(16), y.__wbindgen_export_3(t, e, 1)
  }
}

function Je(r) {
  y.set_user_id(r)
}

function nv(r) {
  y.set_cf_likely_automated(r)
}

function sv(r) {
  y.set_automated_clicks(r)
}

function iv(r) {
  const t = Le(r, y.__wbindgen_export_1, y.__wbindgen_export_2),
    e = J;
  y.request_url(t, e)
}

function ov(r) {
  y.set_automated_browser(r)
}
async function av(r, t) {
  if (typeof Response == "function" && r instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(r, t)
    } catch (n) {
      if (r.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n
    }
    const e = await r.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(r, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: r
    } : e
  }
}

function cv() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = m(t).buffer;
    return E(e)
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return M(function(t, e) {
      const n = m(t).call(m(e));
      return E(n)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return M(function(t, e, n) {
      const s = m(t).call(m(e), m(n));
      return E(s)
    }, arguments)
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = m(t).crypto;
    return E(e)
  }, r.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = m(t).document;
    return G(e) ? 0 : E(e)
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return M(function(t, e) {
      m(t).getRandomValues(m(e))
    }, arguments)
  }, r.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return M(function(t, e) {
      const n = Reflect.get(m(t), m(e));
      return E(n)
    }, arguments)
  }, r.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return M(function(t) {
      return m(t).hasFocus()
    }, arguments)
  }, r.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return M(function(t) {
      const e = m(t).innerWidth;
      return E(e)
    }, arguments)
  }, r.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = m(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, r.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = m(t).msCrypto;
    return E(e)
  }, r.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = m(t).navigator;
    return E(e)
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(m(t));
    return E(e)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const n = new Function(Ce(t, e));
    return E(n)
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    const s = new Uint8Array(m(t), e >>> 0, n >>> 0);
    return E(s)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return E(e)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = m(t).node;
    return E(e)
  }, r.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = m(t).process;
    return E(e)
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return M(function(t, e) {
      m(t).randomFillSync(zt(e))
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return M(function() {
      const t = module.require;
      return E(t)
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    m(t).set(m(e), n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return G(t) ? 0 : E(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return G(t) ? 0 : E(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return G(t) ? 0 : E(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return G(t) ? 0 : E(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    const s = m(t).subarray(e >>> 0, n >>> 0);
    return E(s)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = m(t).versions;
    return E(e)
  }, r.wbg.__wbindgen_boolean_get = function(t) {
    const e = m(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, r.wbg.__wbindgen_is_function = function(t) {
    return typeof m(t) == "function"
  }, r.wbg.__wbindgen_is_null = function(t) {
    return m(t) === null
  }, r.wbg.__wbindgen_is_object = function(t) {
    const e = m(t);
    return typeof e == "object" && e !== null
  }, r.wbg.__wbindgen_is_string = function(t) {
    return typeof m(t) == "string"
  }, r.wbg.__wbindgen_is_undefined = function(t) {
    return m(t) === void 0
  }, r.wbg.__wbindgen_memory = function() {
    const t = y.memory;
    return E(t)
  }, r.wbg.__wbindgen_number_get = function(t, e) {
    const n = m(e),
      s = typeof n == "number" ? n : void 0;
    Ke().setFloat64(t + 8, G(s) ? 0 : s, !0), Ke().setInt32(t + 0, !G(s), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = m(t);
    return E(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    zt(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = Ce(t, e);
    return E(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Ce(t, e))
  }, r
}

function uv(r, t) {
  return y = r.exports, rr.__wbindgen_wasm_module = t, V = null, ne = null, y
}
async function rr(r) {
  if (y !== void 0) return y;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = cv();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await av(await r, t);
  return uv(e, n)
}
class lv {
  constructor() {
    w(this, "interval");
    w(this, "storagesEmpty", !1);
    w(this, "storages", [new $e, new rt, new nt, new dv]);
    w(this, "pawtectLoaded");
    w(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!H.data || this.storagesEmpty || localStorage.getItem($e.KEY))) {
        for (const e of this.storages) {
          const n = e.get();
          if (n) {
            for (const s of this.storages) s.set(n);
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
    const e = z.day;
    for (const s of this.storages) {
      const i = s.get();
      if (i && !(i.timestamp + e < Date.now()) && i.userId !== t) return !0
    }
    const n = {
      userId: t,
      timestamp: Date.now()
    };
    for (const s of this.storages) s.set(n);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await rr(Hr), (t = H.data) != null && t.id && Je(H.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: _v((n, s) => {
            let i = null;
            return n instanceof Request ? i = n.url : n instanceof URL ? i = n.href : typeof n == "string" && (i = n), i !== null && !i.startsWith("/") && iv(i), e.call(window, n, s)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Gr(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Je(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), nv(t)
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
    if (!await this.loadPawtect()) throw new Error(iw());
    const n = navigator.webdriver,
      [s, i] = await Promise.all([Qe(), Gn().catch(u => (console.error(u), {
        bot: !1
      }))]);
    return Je(H.data.id), Zb(H.data.discordId ?? ""), ev(s), ov(n), sv(Ht.automatedClicks), i.bot && tv(i.botKind ?? "unknown"), rv(t)
  }
}

function _v(r) {
  return r.bind().bind()
}
const B = class B {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      n = new Uint8Array(t.length);
    for (let s = 0; s < t.length; s++) n[s] = t[s] ^ e[s % e.length];
    return n
  }
  get() {
    try {
      const t = localStorage.getItem(B.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), s => s.charCodeAt(0)),
        n = new TextDecoder().decode(B.codec(e));
      return JSON.parse(n)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      n = B.codec(e);
    localStorage.setItem(B.KEY, btoa(String.fromCharCode(...n)))
  }
};
w(B, "KEY", "ui_layout_v3"), w(B, "XOR_KEY", "wplace-prefs");
let $e = B;
const C = class C {
  get() {
    try {
      const t = sessionStorage.getItem(C.KEY);
      if (!t) return;
      let e = "";
      for (let n = 0; n < t.length; n += 4) {
        const s = parseInt(t.slice(n, n + 4), 16);
        e += String.fromCharCode(s - C.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let n = "";
    for (const s of e) {
      const i = s.charCodeAt(0) + C.SHIFT & 65535;
      n += i.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(C.KEY, n)
  }
};
w(C, "KEY", "nav.cursor"), w(C, "SHIFT", 13);
let rt = C;
const W = class W {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + W.KEY + "=([^;]*)"));
    if (t) try {
      const [e, n] = decodeURIComponent(t[1]).split("."), s = parseInt(e, 36), i = parseInt(n, 36);
      return !Number.isFinite(s) || !Number.isFinite(i) ? void 0 : {
        userId: s,
        timestamp: i
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
let nt = W;
class dv {
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
const se = new lv;
export {
  Av as $, Hn as A, Lb as B, Xt as C, Rc as D, Yt as E, Ye as F, xv as G, Tt as H, Mv as I, Cl as J, fl as K, Ga as L, Ii as M, Pf as N, qu as O, Dv as P, Bv as Q, Cv as R, Pv as S, z as T, Lv as U, Tv as V, iw as W, cg as X, jv as Y, Nv as Z, Sv as _, q as a, kv as a0, Uv as a1, Rv as a2, Xl as a3, Fe as b, c, Ov as d, Pa as e, fi as f, Nu as g, el as h, Il as i, Ht as j, ub as k, tt as l, yf as m, P as n, zv as o, qv as p, Ev as q, vv as r, Iv as s, Yb as t, H as u, N as v, yv as w, wv as x, bv as y, se as z
};