var po = Object.defineProperty;
var Wn = n => {
  throw TypeError(n)
};
var mo = (n, t, e) => t in n ? po(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var G = (n, t, e) => mo(n, typeof t != "symbol" ? t + "" : t, e),
  ho = (n, t, e) => t.has(n) || Wn("Cannot " + e);
var P = (n, t, e) => (ho(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  X = (n, t, e) => t.has(n) ? Wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  d as go,
  h as yo,
  P as Ln,
  g as Sn
} from "./BRnlEJuB.js";
import {
  e as ie,
  i as Q,
  h as ee,
  g as nn,
  bM as wo,
  I as bo,
  L as Vn,
  u as _t
} from "./CV6xI6o5.js";
import {
  g as A
} from "./BhCkpOlh.js";
const it = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Ce = globalThis,
  mt = "10.57.0";

function Mn() {
  return Bn(Ce), Ce
}

function Bn(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || mt, t[mt] = t[mt] || {}
}

function Hn(n, t, e = Ce) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    o = r[mt] = r[mt] || {};
  return o[n] || (o[n] = t())
}
const vo = "Sentry Logger ",
  zn = {};

function Eo(n) {
  if (!("console" in Ce)) return n();
  const t = Ce.console,
    e = {},
    r = Object.keys(zn);
  r.forEach(o => {
    const a = zn[o];
    e[o] = t[o], t[o] = a
  });
  try {
    return n()
  } finally {
    r.forEach(o => {
      t[o] = e[o]
    })
  }
}

function To() {
  Fn().enabled = !0
}

function So() {
  Fn().enabled = !1
}

function Nr() {
  return Fn().enabled
}

function Oo(...n) {
  Un("log", ...n)
}

function Ao(...n) {
  Un("warn", ...n)
}

function Ro(...n) {
  Un("error", ...n)
}

function Un(n, ...t) {
  it && Nr() && Eo(() => {
    Ce.console[n](`${vo}[${n}]:`, ...t)
  })
}

function Fn() {
  return it ? Hn("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Yt = {
    enable: To,
    disable: So,
    isEnabled: Nr,
    log: Oo,
    warn: Ao,
    error: Ro
  },
  Do = Object.prototype.toString;

function Io(n, t) {
  return Do.call(n) === `[object ${t}]`
}

function No(n) {
  return Io(n, "Object")
}

function ko(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Co(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    it && Yt.log(`Failed to add non-enumerable property "${String(t)}" to object`, n)
  }
}
let tt;

function dn(n) {
  if (tt !== void 0) return tt ? tt(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = Ce;
  return t in e && typeof e[t] == "function" ? (tt = e[t], tt(n)) : (tt = null, n())
}

function On() {
  return dn(() => Math.random())
}

function Po() {
  return dn(() => Date.now())
}

function xo(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function Lo() {
  const n = Ce;
  return n.crypto || n.msCrypto
}
let hn;

function Mo() {
  return On() * 16
}

function ht(n = Lo()) {
  try {
    if (n != null && n.randomUUID) return dn(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return hn || (hn = "10000000100040008000" + 1e11), hn.replace(/[018]/g, t => (t ^ (Mo() & 15) >> t / 4).toString(16))
}
const kr = 1e3;

function Cr() {
  return Po() / kr
}

function Bo() {
  const {
    performance: n
  } = Ce;
  if (!(n != null && n.now) || !n.timeOrigin) return Cr;
  const t = n.timeOrigin;
  return () => (t + dn(() => n.now())) / kr
}
let qn;

function Ho() {
  return (qn ?? (qn = Bo()))()
}

function Uo(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Ho(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : ht()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function Pr(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = Pr(r[o], t[o], e - 1));
  return r
}

function $n() {
  return ht()
}

function Fo(n) {
  try {
    const t = Ce.WeakRef;
    if (typeof t == "function") return new t(n)
  } catch {}
  return n
}

function jo(n) {
  if (n) {
    if (typeof n == "object" && "deref" in n && typeof n.deref == "function") try {
      return n.deref()
    } catch {
      return
    }
    return n
  }
}
const An = "_sentrySpan";

function Kn(n, t) {
  t ? Co(n, An, Fo(t)) : delete n[An]
}

function Xn(n) {
  return jo(n[An])
}
const Go = 100;
class Qe {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: $n(),
      sampleRand: On()
    }
  }
  clone() {
    const t = new Qe;
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, Kn(t, Xn(this)), t
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
    }, this._session && Uo(this._session, {
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
      r = e instanceof Qe ? e.getScopeData() : No(e) ? t : void 0,
      {
        tags: o,
        attributes: a,
        extra: i,
        user: s,
        contexts: u,
        level: _,
        fingerprint: l = [],
        propagationContext: p,
        conversationId: f
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...o
    }, this._attributes = {
      ...this._attributes,
      ...a
    }, this._extra = {
      ...this._extra,
      ...i
    }, this._contexts = {
      ...this._contexts,
      ...u
    }, s && Object.keys(s).length && (this._user = s), _ && (this._level = _), l.length && (this._fingerprint = l), p && (this._propagationContext = p), f && (this._conversationId = f), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Kn(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: $n(),
      sampleRand: On()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var a;
    const r = typeof e == "number" ? e : Go;
    if (r <= 0) return this;
    const o = {
      timestamp: Cr(),
      ...t,
      message: t.message ? xo(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(o), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (a = this._client) == null || a.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
      span: Xn(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Pr(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || ht();
    if (!this._client) return it && Yt.warn("No client configured on scope - will not capture exception!"), r;
    const o = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: o,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const o = (r == null ? void 0 : r.event_id) || ht();
    if (!this._client) return it && Yt.warn("No client configured on scope - will not capture message!"), o;
    const a = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: a,
      ...r,
      event_id: o
    }, this), o
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || ht();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (it && Yt.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function Wo() {
  return Hn("defaultCurrentScope", () => new Qe)
}

function Vo() {
  return Hn("defaultIsolationScope", () => new Qe)
}
const Yn = n => n instanceof Promise && !n[xr],
  xr = Symbol("chained PromiseLike"),
  zo = (n, t, e) => {
    const r = n.then(o => (t(o), o), o => {
      throw e(o), o
    });
    return Yn(r) && Yn(n) ? r : qo(n, r)
  },
  qo = (n, t) => {
    if (!t) return n;
    let e = !1;
    for (const r in n) {
      if (r in t) continue;
      e = !0;
      const o = n[r];
      typeof o == "function" ? Object.defineProperty(t, r, {
        value: (...a) => o.apply(n, a),
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[r] = o
    }
    return e && Object.assign(t, {
      [xr]: !0
    }), t
  };
class $o {
  constructor(t, e) {
    let r;
    t ? r = t : r = new Qe;
    let o;
    e ? o = e : o = new Qe, this._stack = [{
      scope: r
    }], this._isolationScope = o
  }
  withScope(t) {
    const e = this._pushScope();
    let r;
    try {
      r = t(e)
    } catch (o) {
      throw this._popScope(), o
    }
    return ko(r) ? zo(r, () => this._popScope(), () => this._popScope()) : (this._popScope(), r)
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

function ut() {
  const n = Mn(),
    t = Bn(n);
  return t.stack = t.stack || new $o(Wo(), Vo())
}

function Ko(n) {
  return ut().withScope(n)
}

function Xo(n, t) {
  const e = ut();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function Jn(n) {
  return ut().withScope(() => n(ut().getIsolationScope()))
}

function Yo() {
  return {
    withIsolationScope: Jn,
    withScope: Ko,
    withSetScope: Xo,
    withSetIsolationScope: (n, t) => Jn(t),
    getCurrentScope: () => ut().getScope(),
    getIsolationScope: () => ut().getIsolationScope()
  }
}

function Lr(n) {
  const t = Bn(n);
  return t.acs ? t.acs : Yo()
}

function Jo() {
  const n = Mn();
  return Lr(n).getCurrentScope()
}

function Qo() {
  const n = Mn();
  return Lr(n).getIsolationScope()
}

function Zo(n, t) {
  return Jo().captureException(n, void 0)
}

function ea(n, t) {
  Qo().setContext(n, t)
}
const ta = "" + new URL("../assets/pawtect_wasm_bg.CyqdkIlW.wasm", import.meta.url).href;
var na = "2.0.0";
const U = {
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
class Y extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, Y.prototype)
  }
}

function ra(n, t) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const o in t) {
    const a = t[o],
      i = a(n);
    let s = {
      bot: !1
    };
    typeof i == "string" ? s = {
      bot: !0,
      botKind: i
    } : i && (s = {
      bot: !0,
      botKind: U.Unknown
    }), e[o] = s, s.bot && (r = s)
  }
  return [e, r]
}
async function oa(n) {
  const t = {},
    e = Object.keys(n);
  return await Promise.all(e.map(async r => {
    const o = n[r];
    try {
      t[r] = {
        value: await o(),
        state: 0
      }
    } catch (a) {
      a instanceof Y ? t[r] = {
        state: a.state,
        error: `${a.name}: ${a.message}`
      } : t[r] = {
        state: -3,
        error: a instanceof Error ? `${a.name}: ${a.message}` : String(a)
      }
    }
  })), t
}

function aa({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return U.HeadlessChrome;
  if (/electron/i.test(n.value)) return U.Electron;
  if (/slimerjs/i.test(n.value)) return U.SlimerJS
}

function Jt(n, t) {
  return n.indexOf(t) !== -1
}

function Pe(n, t) {
  return n.indexOf(t) !== -1
}

function ia(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function Qn(n) {
  return Object.getOwnPropertyNames(n)
}

function Rn(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Jt(n, e)) return !0
    } else if (ia(n, o => e.test(o)) != null) return !0;
  return !1
}

function st(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function sa({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (Rn(n.value, "selenium", "webdriver", "driver")) return U.Selenium
}

function ca({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return U.PhantomJS
}

function ua({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !Jt(["webkit", "gecko"], e.value) || r === 39 && !Jt(["internet_explorer"], t.value) || r === 33 && !Jt(["chromium"], e.value)
}

function la({
  functionBind: n
}) {
  if (n.state === -2) return U.PhantomJS
}

function da({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return U.HeadlessChrome
}

function _a({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return U.Unknown
}

function fa({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return U.HeadlessChrome
}

function pa({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return U.HeadlessChrome
}

function ma({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return U.HeadlessChrome
}

function ha({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return U.Electron
}

function ga({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return U.Unknown
}

function ya({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return U.PhantomJS;
  if (/Headless/i.test(n.value)) return U.HeadlessChrome;
  if (/Electron/i.test(n.value)) return U.Electron;
  if (/slimerjs/i.test(n.value)) return U.SlimerJS
}

function wa({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return U.HeadlessChrome
}

function ba({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = n.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return U.HeadlessChrome
  }
}

function va({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return U.Sequentum
}

function Ea({
  windowSize: n,
  documentFocus: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = n.value;
  if (t.value && e === 0 && r === 0) return U.HeadlessChrome
}

function Ta({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const Sa = {
  detectAppVersion: aa,
  detectDocumentAttributes: sa,
  detectErrorTrace: ca,
  detectEvalLengthInconsistency: ua,
  detectFunctionBind: la,
  detectLanguagesLengthInconsistency: da,
  detectNotificationPermissions: fa,
  detectPluginsArray: pa,
  detectPluginsLengthInconsistency: ma,
  detectProcess: ha,
  detectUserAgent: ya,
  detectWebDriver: wa,
  detectWebGL: ba,
  detectWindowExternal: va,
  detectWindowSize: Ea,
  detectMimeTypesConsistent: _a,
  detectProductSub: ga,
  detectDistinctiveProperties: Ta
};

function Oa() {
  const n = navigator.appVersion;
  if (n == null) throw new Y(-1, "navigator.appVersion is undefined");
  return n
}

function Aa() {
  if (document.documentElement === void 0) throw new Y(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new Y(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function Ra() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new Y(-3, "errorTrace signal unexpected behaviour")
}

function Da() {
  return eval.toString().length
}

function Ia() {
  if (Function.prototype.bind === void 0) throw new Y(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function jn() {
  var n, t;
  const e = window,
    r = navigator;
  return st(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : st(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : st(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Na() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return Pe(t, "edg/") ? "edge" : Pe(t, "trident") || Pe(t, "msie") ? "internet_explorer" : Pe(t, "wechat") ? "wechat" : Pe(t, "firefox") ? "firefox" : Pe(t, "opera") || Pe(t, "opr") ? "opera" : Pe(t, "chrome") ? "chrome" : Pe(t, "safari") ? "safari" : "unknown"
}

function ka() {
  const n = jn(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    o = navigator,
    a = "connection";
  return t ? st([!("SharedWorker" in r), o[a] && "ontypechange" in o[a], !("sinkId" in new Audio)]) >= 2 : e ? st(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Ca() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Pa() {
  const n = window;
  return st([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function xa() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) jn() === "chromium" && Pa() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function La() {
  if (navigator.mimeTypes === void 0) throw new Y(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function Ma() {
  if (window.Notification === void 0) throw new Y(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new Y(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new Y(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new Y(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Ba() {
  if (navigator.plugins === void 0) throw new Y(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new Y(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Ha() {
  if (navigator.plugins === void 0) throw new Y(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new Y(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Ua() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new Y(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new Y(-3, `${t} not an object`);
  return n
}

function Fa() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new Y(-1, "navigator.productSub is undefined");
  return n
}

function ja() {
  if (navigator.connection === void 0) throw new Y(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new Y(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Ga() {
  return navigator.userAgent
}

function Wa() {
  if (navigator.webdriver == null) throw new Y(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Va() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new Y(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new Y(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new Y(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function za() {
  if (window.external === void 0) throw new Y(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new Y(-2, "window.external.toString is not a function");
  return n.toString()
}

function qa() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function $a() {
  const n = {
    [U.Awesomium]: {
      window: ["awesomium"]
    },
    [U.Cef]: {
      window: ["RunPerfTest"]
    },
    [U.CefSharp]: {
      window: ["CefSharp"]
    },
    [U.CoachJS]: {
      window: ["emit"]
    },
    [U.FMiner]: {
      window: ["fmget_targets"]
    },
    [U.Geb]: {
      window: ["geb"]
    },
    [U.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [U.Phantomas]: {
      window: ["__phantomas"]
    },
    [U.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [U.Rhino]: {
      window: ["spawn"]
    },
    [U.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [U.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [U.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [U.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let t;
  const e = {},
    r = Qn(window);
  let o = [];
  window.document !== void 0 && (o = Qn(window.document));
  for (t in n) {
    const a = n[t];
    if (a !== void 0) {
      const i = a.window === void 0 ? !1 : Rn(r, ...a.window),
        s = a.document === void 0 || !o.length ? !1 : Rn(o, ...a.document);
      e[t] = i || s
    }
  }
  return e
}
const Ka = {
  android: ka,
  browserKind: Na,
  browserEngineKind: jn,
  documentFocus: Ca,
  userAgent: Ga,
  appVersion: Oa,
  rtt: ja,
  windowSize: qa,
  pluginsLength: Ha,
  pluginsArray: Ba,
  errorTrace: Ra,
  productSub: Fa,
  windowExternal: za,
  mimeTypesConsistent: La,
  evalLength: Da,
  webGL: Va,
  webDriver: Wa,
  languages: xa,
  notificationPermissions: Ma,
  documentElementKeys: Aa,
  functionBind: Ia,
  process: Ua,
  distinctiveProps: $a
};
class Xa {
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
    const [t, e] = ra(this.components, Sa);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await oa(Ka), this.components
  }
}

function Ya() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${na}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Ja({
  monitoring: n = !0
} = {}) {
  n && Ya();
  const t = new Xa;
  return await t.collect(), t
}
let gn = null;
async function Qa() {
  return await Za() ? {
    bot: !1
  } : (await ei()).detect()
}
async function Za() {
  var e;
  const n = navigator;
  if (!((e = n.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function ei() {
  return gn || (gn = Ja({
    monitoring: !1
  })), gn
}

function Mr(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function Br(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class ti {
  constructor(t) {
    G(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      o = t % 8;
    if (r >= this.bytes.length) {
      const i = new Uint8Array(r + 1),
        s = i.length - this.bytes.length;
      for (let u = 0; u < this.bytes.length; u++) i[u + s] = this.bytes[u];
      this.bytes = i
    }
    const a = this.bytes.length - 1 - r;
    e ? this.bytes[a] = this.bytes[a] | 1 << o : this.bytes[a] = this.bytes[a] & ~(1 << o)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      o = this.bytes.length;
    return e > o ? !1 : (this.bytes[o - 1 - e] & 1 << r) !== 0
  }
}

function QE(n) {
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onload = () => {
      const o = r.result;
      if (!o || typeof o != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(o.substring(o.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}

function ZE(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${Br(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const o = r.result;
      if (typeof o != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(o)
    }, r.onerror = e, r.readAsDataURL(n)
  })
}

function eT(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    o = e.indexOf(";base64"),
    a = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const i = Mr(r),
      s = new Uint8Array(i.byteLength);
    return s.set(i), new Blob([s], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}
async function De(n, t = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(n)),
    r = await crypto.subtle.digest(t, e);
  return Br(new Uint8Array(r))
}
const $ = Math,
  ve = () => 0;

function ni() {
  const n = $.acos || ve,
    t = $.acosh || ve,
    e = $.asin || ve,
    r = $.asinh || ve,
    o = $.atanh || ve,
    a = $.atan || ve,
    i = $.sin || ve,
    s = $.sinh || ve,
    u = $.cos || ve,
    _ = $.cosh || ve,
    l = $.tan || ve,
    p = $.tanh || ve,
    f = $.exp || ve,
    d = $.expm1 || ve,
    g = $.log1p || ve,
    h = v => $.pow($.PI, v),
    w = v => $.log(v + $.sqrt(v * v - 1)),
    k = v => $.log(v + $.sqrt(v * v + 1)),
    T = v => $.log((1 + v) / (1 - v)) / 2,
    R = v => $.exp(v) - 1 / $.exp(v) / 2,
    S = v => ($.exp(v) + 1 / $.exp(v)) / 2,
    N = v => $.exp(v) - 1,
    O = v => ($.exp(2 * v) - 1) / ($.exp(2 * v) + 1),
    b = v => $.log(1 + v);
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: w(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: k(1),
    atanh: o(.5),
    atanhPf: T(.5),
    atan: a(.5),
    sin: i(-1e300),
    sinh: s(1),
    sinhPf: R(1),
    cos: u(10.000000000123),
    cosh: _(1),
    coshPf: S(1),
    tan: l(-1e300),
    tanh: p(1),
    tanhPf: O(1),
    exp: f(1),
    expm1: d(1),
    expm1Pf: N(1),
    log1p: g(10),
    log1pPf: b(10),
    powPI: h(-100)
  }
}
const ri = () => {
    const n = [];
    return {
      getErrors: () => n,
      captureError: (t, e = "") => {
        const r = {
            Error: !0,
            EvalError: !0,
            InternalError: !0,
            RangeError: !0,
            ReferenceError: !0,
            SyntaxError: !0,
            TypeError: !0,
            URIError: !0,
            InvalidStateError: !0,
            SecurityError: !0
          },
          o = l => /.+(\s).+/g.test(l),
          a = t ?? {},
          i = typeof a.name == "string" ? a.name : "",
          s = typeof a.message == "string" ? a.message : "",
          u = o(s) ? e ? `${s} [${e}]` : s : void 0,
          _ = r[i] ? i : void 0;
        n.push({
          trustedName: _,
          trustedMessage: u
        })
      }
    }
  },
  Hr = ri(),
  {
    captureError: re
  } = Hr,
  I = (n, t = "") => {
    try {
      return n()
    } catch (e) {
      return t ? re(e, t) : re(e)
    }
  },
  be = n => {
    try {
      return n()
    } catch {
      return
    }
  },
  oi = () => ({
    data: Hr.getErrors()
  });
var Ae = (n => (n.WINDOWS = "Windows", n.LINUX = "Linux", n.APPLE = "Apple", n.OTHER = "Other", n))(Ae || {});
const Ur = !globalThis.document && globalThis.WorkerGlobalScope;

function ai() {
  const n = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (t) {
    return (t instanceof Error ? t.message : String(t)).length + (n + "").split(n.name).join("").length
  }
}
const _n = ai(),
  ue = _n == 80,
  wt = _n == 58,
  bt = _n == 77,
  Zn = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [_n] || null,
  Fr = ue && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function jr() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function ii() {
  const n = {
    unknown: !1,
    allow: !1,
    standard: !1,
    strict: !1
  };
  try {
    if ((() => {
        try {
          window.OfflineAudioContext = OfflineAudioContext || webkitOfflineAudioContext
        } catch (_) {}
        if (!window.OfflineAudioContext) return !1;
        const i = new OfflineAudioContext(1, 1, 44100).createAnalyser(),
          s = new Float32Array(i.frequencyBinCount);
        return i.getFloatFrequencyData(s), new Set(s).size > 1
      })()) return n.strict = !0, n;
    const e = /(Chrom(e|ium)|Microsoft Edge) PDF (Plugin|Viewer)/,
      r = [...navigator.plugins],
      o = r.filter(a => e.test(a.name)).length == 2;
    return r.length && !o ? (n.standard = !0, n) : (n.allow = !0, n)
  } catch {
    return n.unknown = !0, n
  }
}
const Dn = n => /windows phone/ig.test(n) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/ig.test(n) ? "Windows" : /android/ig.test(n) ? "Android" : /cros/ig.test(n) ? "Chrome OS" : /linux/ig.test(n) ? "Linux" : /ipad/ig.test(n) ? "iPad" : /iphone/ig.test(n) ? "iPhone" : /ipod/ig.test(n) ? "iPod" : /ios/ig.test(n) ? "iOS" : /mac/ig.test(n) ? "Mac" : "Other";

function Gr(n, t) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(n) ? Ae.WINDOWS : /android|linux|cros/ig.test(n) ? Ae.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? Ae.APPLE : Ae.OTHER;
  if (!t) return [e];
  const r = /win/ig.test(t) ? Ae.WINDOWS : /android|arm|linux/ig.test(t) ? Ae.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? Ae.APPLE : Ae.OTHER;
  return [e, r]
}
const {
  userAgent: si,
  platform: ci
} = globalThis.navigator || {}, [rn, er] = Gr(si, ci), Wr = ({
  ua: n,
  os: t,
  isBrave: e
}) => {
  const r = /ipad|iphone|ipod|ios|mac/ig.test(t),
    o = /OPR\//g.test(n),
    a = /Vivaldi/g.test(n),
    i = /DuckDuckGo/g.test(n),
    s = /YaBrowser/g.test(n),
    u = n.match(/(palemoon)\/(\d+)./i),
    _ = n.match(/(edgios|edg|edge|edga)\/(\d+)./i),
    l = _ && /edgios/i.test(_[1]),
    p = n.match(/(crios|chrome)\/(\d+)./i),
    f = n.match(/(fxios|firefox)\/(\d+)./i),
    g = /AppleWebKit/g.test(n) && /Safari/g.test(n) && !f && !p && !_ && n.match(/(version)\/(\d+)\.(\d|\.)+\s(mobile|safari)/i);
  if (p) {
    const h = p[1],
      w = p[2];
    return `${h} ${w}${o?" Opera":a?" Vivaldi":i?" DuckDuckGo":s?" Yandex":_?" Edge":e?" Brave":""}`
  } else if (l && _) {
    const h = _[1],
      w = _[2];
    return `${h} ${w}`
  } else if (f) {
    const h = u ? u[1] : f[1],
      w = u ? u[2] : f[2];
    return `${h} ${w}`
  } else if (r && g) {
    const h = "Safari",
      w = g[2];
    return `${h} ${w}`
  }
  return "unknown"
}, Vr = ({
  userAgent: n,
  excludeBuild: t = !0
}) => {
  if (!n) return "unknown";
  const e = /\((khtml|unlike|vizio|like gec|internal dummy|org\.eclipse|openssl|ipv6|via translate|safari|cardamon).+|xt\d+\)/ig,
    r = /\((.+)\)/,
    o = /((android).+)/i,
    a = /^(linux|[a-z]|wv|mobile|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|windows|(rv:|trident|webview|iemobile).+/i,
    i = /build\/.+\s|\sbuild\/.+/i,
    s = /android( |-)\d+/i,
    u = /((windows).+)/i,
    _ = /^(windows|ms(-|)office|microsoft|compatible|[a-z]|x64|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|outlook|ms(-|)office|microsoft|trident|\.net|msie|httrack|media center|infopath|aol|opera|iemobile|webbrowser).+/i,
    l = /w(ow|in)64/i,
    p = /cros/i,
    f = /^([a-z]|x11|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|trident).+/i,
    d = /\d+\.\d+\.\d+/i,
    g = /linux|x11|ubuntu|debian/i,
    h = /^([a-z]|x11|unknown|compatible|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|java|oracle|\+http|http|unknown|mozilla|konqueror|valve).+/i,
    w = /(cpu iphone|cpu os|iphone os|mac os|macos|intel os|ppc mac).+/i,
    k = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i,
    T = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
    R = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
    S = (N, O) => N.filter(b => O.test(b)).length;
  if (n = n.trim().replace(/\s{2,}/, " ").replace(e, ""), r.test(n)) {
    const N = n.match(r);
    if (!N) return "unknown";
    const b = N[0].slice(1, -1).replace(/,/g, ";").split(";").map(v => v.trim());
    if (S(b, o)) return b.map(v => s.test(v) ? s.exec(v)[0].replace("-", " ") : v).filter(v => !a.test(v)).join(" ").replace(t ? i : "", "").trim().replace(/\s{2,}/, " ");
    if (S(b, u)) return b.filter(v => !_.test(v)).join(" ").replace(/\sNT (\d+\.\d+)/, (v, E) => E == "10.0" ? " 10" : E == "6.3" ? " 8.1" : E == "6.2" ? " 8" : E == "6.1" ? " 7" : E == "6.0" ? " Vista" : E == "5.2" ? " XP Pro" : E == "5.1" ? " XP" : E == "5.0" ? " 2000" : E == "4.0" ? v : " " + E).replace(l, "(64-bit)").trim().replace(/\s{2,}/, " ");
    if (S(b, p)) return b.filter(v => !f.test(v)).join(" ").replace(t ? d : "", "").trim().replace(/\s{2,}/, " ");
    if (S(b, g)) return b.filter(v => !h.test(v)).join(" ").trim().replace(/\s{2,}/, " ");
    if (S(b, w)) return b.map(v => {
      if (T.test(v)) {
        const E = T.exec(v)[0],
          D = {
            "10_7": "Lion",
            "10_8": "Mountain Lion",
            "10_9": "Mavericks",
            "10_10": "Yosemite",
            "10_11": "El Capitan",
            "10_12": "Sierra",
            "10_13": "High Sierra",
            "10_14": "Mojave",
            "10_15": "Catalina",
            11: "Big Sur",
            12: "Monterey",
            13: "Ventura"
          },
          B = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(E) || [])[0] || "").replace(/\./g, "_"),
          L = /^10/.test(B) ? B : (/^\d{2,}/.exec(B) || [])[0],
          H = L ? D[L] : void 0;
        return H ? `macOS ${H}` : E
      }
      return v
    }).filter(v => !k.test(v)).join(" ").replace(/\slike mac.+/ig, "").trim().replace(/\s{2,}/, " ");
    {
      const v = b.filter(E => R.test(E));
      return v.length ? v.join(" ").trim().replace(/\s{2,}/, " ") : b.join(" ")
    }
  } else return "unknown"
}, zr = n => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(n) || [])[1];
  return ue && !!e
}, se = (n = 0) => new Promise(t => setTimeout(t, n)), qr = [
  [128512],
  [9786],
  [129333, 8205, 9794, 65039],
  [9832],
  [9784],
  [9895],
  [8265],
  [8505],
  [127987, 65039, 8205, 9895, 65039],
  [129394],
  [9785],
  [9760],
  [129489, 8205, 129456],
  [129487, 8205, 9794, 65039],
  [9975],
  [129489, 8205, 129309, 8205, 129489],
  [9752],
  [9968],
  [9961],
  [9972],
  [9992],
  [9201],
  [9928],
  [9730],
  [9969],
  [9731],
  [9732],
  [9976],
  [9823],
  [9937],
  [9e3],
  [9993],
  [9999],
  [128105, 8205, 10084, 65039, 8205, 128139, 8205, 128104],
  [128104, 8205, 128105, 8205, 128103, 8205, 128102],
  [128104, 8205, 128105, 8205, 128102],
  [128512],
  [169],
  [174],
  [8482],
  [128065, 65039, 8205, 128488, 65039],
  [10002],
  [9986],
  [9935],
  [9874],
  [9876],
  [9881],
  [9939],
  [9879],
  [9904],
  [9905],
  [9888],
  [9762],
  [9763],
  [11014],
  [8599],
  [10145],
  [11013],
  [9883],
  [10017],
  [10013],
  [9766],
  [9654],
  [9197],
  [9199],
  [9167],
  [9792],
  [9794],
  [10006],
  [12336],
  [9877],
  [9884],
  [10004],
  [10035],
  [10055],
  [9724],
  [9642],
  [10083],
  [10084],
  [9996],
  [9757],
  [9997],
  [10052],
  [9878],
  [8618],
  [9775],
  [9770],
  [9774],
  [9745],
  [10036],
  [127344],
  [127359]
].map(n => String.fromCodePoint(...n)), In = `
	'Segoe Fluent Icons',
	'Ink Free',
	'Bahnschrift',
	'Segoe MDL2 Assets',
	'HoloLens MDL2 Assets',
	'Leelawadee UI',
	'Javanese Text',
	'Segoe UI Emoji',
	'Aldhabi',
	'Gadugi',
	'Myanmar Text',
	'Nirmala UI',
	'Lucida Console',
	'Cambria Math',
	'Bai Jamjuree',
	'Chakra Petch',
	'Charmonman',
	'Fahkwang',
	'K2D',
	'Kodchasan',
	'KoHo',
	'Sarabun',
	'Srisakdi',
	'Galvji',
	'MuktaMahee Regular',
	'InaiMathi Bold',
	'American Typewriter Semibold',
	'Futura Bold',
	'SignPainter-HouseScript Semibold',
	'PingFang HK Light',
	'Kohinoor Devanagari Medium',
	'Luminari',
	'Geneva',
	'Helvetica Neue',
	'Droid Sans Mono',
	'Dancing Script',
	'Roboto',
	'Ubuntu',
	'Liberation Mono',
	'Source Code Pro',
	'DejaVu Sans',
	'OpenSymbol',
	'Chilanka',
	'Cousine',
	'Arimo',
	'Jomolhari',
	'MONO',
	'Noto Color Emoji',
	sans-serif !important
`;

function ui(n) {
  var r;
  if (!n) return null;
  const t = /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i;
  return /radeon/i.test(n) ? "AMD" : /geforce/i.test(n) ? "NVIDIA" : (((r = t.exec(n)) == null ? void 0 : r[0]) || "other").toLocaleUpperCase()
}
const Fe = {},
  ke = {
    AUDIO: !1,
    CANVAS: !1,
    FONTS: !1,
    SCREEN: !1,
    TIME_ZONE: !1,
    WEBGL: !1
  };

function li() {
  const n = {};
  return {
    getRecords: () => n,
    documentLie: (t, e) => {
      const r = e instanceof Array;
      return n[t] ? r ? n[t] = [...n[t], ...e] : n[t].push(e) : r ? n[t] = e : n[t] = [e]
    }
  }
}
const $r = li(),
  {
    documentLie: te
  } = $r,
  Kr = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function fn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function di(n) {
  try {
    if (!ue) return n;
    const t = n.document.createElement("div");
    t.setAttribute("id", fn()), t.setAttribute("style", Kr), t.innerHTML = "<div><iframe></iframe></div>", n.document.body.appendChild(t);
    const e = [...[...t.childNodes][0].childNodes][0];
    if (!e) return null;
    const {
      contentWindow: r
    } = e || {};
    if (!r) return null;
    const o = r.document.createElement("div");
    return o.innerHTML = "<div><iframe></iframe></div>", r.document.body.appendChild(o), [...[...o.childNodes][0].childNodes][0].contentWindow
  } catch (t) {
    return re(t, "client blocked behemoth iframe"), n
  }
}
const tr = fn(),
  dt = "Reflect" in globalThis;

function _i(n) {
  return n.constructor.name == "TypeError"
}

function pe({
  spawnErr: n,
  withStack: t,
  final: e
}) {
  try {
    throw n(), Error()
  } catch (r) {
    return _i(r) ? t ? t(r) : !1 : !0
  } finally {
    e && e()
  }
}

function fi(n) {
  try {
    return n(), !1
  } catch {
    return !0
  }
}

function nr(n) {
  return {
    [`function ${n}() { [native code] }`]: !0,
    [`function get ${n}() { [native code] }`]: !0,
    "function () { [native code] }": !0,
    [`function ${n}() {
    [native code]
}`]: !0,
    [`function get ${n}() {
    [native code]
}`]: !0,
    "function () {\n    [native code]\n}": !0
  }
}

function nt(n, t, e = 1) {
  const r = n;
  return e === 0 ? t.test(r.message) : t.test(r.stack.split(`
`)[e])
}
const pi = /at Function\.toString /,
  mi = /at Object\.toString/,
  hi = /at (Function\.)?\[Symbol.hasInstance\]/,
  gi = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  rr = /strict mode/;

function or({
  scope: n,
  apiFunction: t,
  proto: e,
  obj: r,
  lieProps: o
}) {
  if (typeof t != "function") return {
    lied: 0,
    lieTypes: []
  };
  const a = t.name.replace(/get\s/, ""),
    i = r == null ? void 0 : r.name,
    s = Object.getPrototypeOf(t),
    u = self;
  let _ = {
    "failed illegal error": !!r && pe({
      spawnErr: () => {
        r.prototype[a]
      }
    }),
    "failed undefined properties": !!r && !!i && /^(screen|navigator)$/i.test(i) && !!(Object.getOwnPropertyDescriptor(u[i.toLowerCase()], a) || dt && Reflect.getOwnPropertyDescriptor(u[i.toLowerCase()], a)),
    "failed call interface error": pe({
      spawnErr: () => {
        new t, t.call(e)
      }
    }),
    "failed apply interface error": pe({
      spawnErr: () => {
        new t, t.apply(e)
      }
    }),
    "failed new instance error": pe({
      spawnErr: () => {
        new t
      }
    }),
    "failed class extends error": !bt && pe({
      spawnErr: () => {
        class f extends t {}
      }
    }),
    "failed null conversion error": pe({
      spawnErr: () => {
        Object.setPrototypeOf(t, null).toString()
      },
      final: () => {
        Object.setPrototypeOf(t, s)
      }
    }),
    "failed toString": !nr(a)[n.Function.prototype.toString.call(t)] || !nr("toString")[n.Function.prototype.toString.call(t.toString)],
    'failed "prototype" in function': "prototype" in t,
    "failed descriptor": !!(Object.getOwnPropertyDescriptor(t, "arguments") || Reflect.getOwnPropertyDescriptor(t, "arguments") || Object.getOwnPropertyDescriptor(t, "caller") || Reflect.getOwnPropertyDescriptor(t, "caller") || Object.getOwnPropertyDescriptor(t, "prototype") || Reflect.getOwnPropertyDescriptor(t, "prototype") || Object.getOwnPropertyDescriptor(t, "toString") || Reflect.getOwnPropertyDescriptor(t, "toString")),
    "failed own property": !!(t.hasOwnProperty("arguments") || t.hasOwnProperty("caller") || t.hasOwnProperty("prototype") || t.hasOwnProperty("toString")),
    "failed descriptor keys": Object.keys(Object.getOwnPropertyDescriptors(t)).sort().toString() != "length,name",
    "failed own property names": Object.getOwnPropertyNames(t).sort().toString() != "length,name",
    "failed own keys names": dt && Reflect.ownKeys(t).sort().toString() != "length,name",
    "failed object toString error": pe({
      spawnErr: () => {
        Object.create(t).toString()
      },
      withStack: f => ue && !nt(f, pi)
    }) || pe({
      spawnErr: () => {
        Object.create(new Proxy(t, {})).toString()
      },
      withStack: f => ue && !nt(f, mi)
    }),
    "failed at incompatible proxy error": pe({
      spawnErr: () => {
        t.arguments, t.caller
      },
      withStack: f => wt && !nt(f, rr, 0)
    }),
    "failed at toString incompatible proxy error": pe({
      spawnErr: () => {
        t.toString.arguments, t.toString.caller
      },
      withStack: f => wt && !nt(f, rr, 0)
    }),
    "failed at too much recursion error": pe({
      spawnErr: () => {
        Object.setPrototypeOf(t, Object.create(t)).toString()
      },
      final: () => {
        Object.setPrototypeOf(t, s)
      }
    })
  };
  if (a == "toString" || !!o["Function.toString"] || !!o["Permissions.query"]) {
    const f = new Proxy(t, {});
    let d = new Proxy(t, {});
    const g = new Proxy(t, {});
    _ = {
      ..._,
      "failed at too much recursion __proto__ error": !pe({
        spawnErr: () => {
          t.__proto__ = proxy, t++
        },
        final: () => {
          Object.setPrototypeOf(t, s)
        }
      }),
      "failed at chain cycle error": !pe({
        spawnErr: () => {
          Object.setPrototypeOf(f, Object.create(f)).toString()
        },
        final: () => {
          Object.setPrototypeOf(f, s)
        }
      }),
      "failed at chain cycle __proto__ error": !pe({
        spawnErr: () => {
          d.__proto__ = d, d++
        },
        final: () => {
          Object.setPrototypeOf(d, s)
        }
      }),
      "failed at reflect set proto": dt && pe({
        spawnErr: () => {
          throw Reflect.setPrototypeOf(t, Object.create(t)), tr in t, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(t, s)
        }
      }),
      "failed at reflect set proto proxy": dt && !pe({
        spawnErr: () => {
          Reflect.setPrototypeOf(g, Object.create(g)), tr in g
        },
        final: () => {
          Object.setPrototypeOf(g, s)
        }
      }),
      "failed at instanceof check error": ue && (pe({
        spawnErr: () => {
          t instanceof t
        },
        withStack: h => !nt(h, hi)
      }) || pe({
        spawnErr: () => {
          const h = new Proxy(t, {});
          h instanceof h
        },
        withStack: h => !nt(h, gi)
      })),
      "failed at define properties": ue && dt && fi(() => {
        Object.defineProperty(t, "", {
          configurable: !0
        }).toString(), Reflect.deleteProperty(t, "")
      })
    }
  }
  const p = Object.keys(_).filter(f => !!_[f]);
  return {
    lied: p.length,
    lieTypes: p
  }
}

function yi(n) {
  const t = o => typeof o < "u" && !!o,
    e = {},
    r = [];
  return {
    getProps: () => e,
    getPropsSearched: () => r,
    searchLies: (o, a) => {
      const {
        target: i,
        ignore: s
      } = a || {};
      let u;
      try {
        if (u = o(), !t(u)) return
      } catch {
        return
      }
      const _ = u.prototype ? u.prototype : u;
      [...new Set([...Object.getOwnPropertyNames(_), ...Object.keys(_)])].sort().forEach(l => {
        var g;
        if (l == "constructor" || !!i && !new Set(i).has(l) || !!s && new Set(s).has(l)) return;
        const f = /\s(.+)\]/,
          d = `${u.name?u.name:f.test(u)?(g=f.exec(u))==null?void 0:g[1]:void 0}.${l}`;
        r.push(d);
        try {
          const h = u.prototype ? u.prototype : u;
          let w;
          try {
            if (typeof h[l] == "function") {
              if (w = or({
                  scope: n,
                  apiFunction: h[l],
                  proto: h,
                  obj: null,
                  lieProps: e
                }), w.lied) {
                te(d, w.lieTypes), e[d] = w.lieTypes;
                return
              }
              return
            }
            if (l != "name" && l != "length" && l[0] !== l[0].toUpperCase()) {
              const S = ["failed descriptor.value undefined"];
              te(d, S), e[d] = S;
              return
            }
          } catch {}
          const T = Object.getOwnPropertyDescriptor(h, l).get;
          if (w = or({
              scope: n,
              apiFunction: T,
              proto: h,
              obj: u,
              lieProps: e
            }), w.lied) {
            te(d, w.lieTypes), e[d] = w.lieTypes;
            return
          }
          return
        } catch {
          const w = "failed prototype test execution";
          te(d, w), e[d] = [w];
          return
        }
      })
    }
  }
}

function wi() {
  const n = globalThis;
  if (Ur) return {
    iframeWindow: n,
    div: void 0
  };
  try {
    const t = n.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      o = fn();
    r.setAttribute("id", o), e.appendChild(r), r.innerHTML = `<div style="${Kr}"><iframe></iframe></div>`, document.body.appendChild(e);
    const a = n[t];
    return {
      iframeWindow: di(a) || n,
      div: r
    }
  } catch (t) {
    return re(t, "client blocked phantom iframe"), {
      iframeWindow: n,
      div: void 0
    }
  }
}

function bi(n) {
  const t = yi(n),
    {
      searchLies: e
    } = t;
  e(() => Function, {
    target: ["toString"],
    ignore: ["caller", "arguments"]
  }), e(() => AnalyserNode), e(() => AudioBuffer, {
    target: ["copyFromChannel", "getChannelData"]
  }), e(() => BiquadFilterNode, {
    target: ["getFrequencyResponse"]
  }), e(() => CanvasRenderingContext2D, {
    target: ["getImageData", "getLineDash", "isPointInPath", "isPointInStroke", "measureText", "quadraticCurveTo", "fillText", "strokeText", "font"]
  }), e(() => CSSStyleDeclaration, {
    target: ["setProperty"]
  }), e(() => CSS2Properties, {
    target: ["setProperty"]
  }), e(() => Date, {
    target: ["getDate", "getDay", "getFullYear", "getHours", "getMinutes", "getMonth", "getTime", "getTimezoneOffset", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMonth", "setSeconds", "setTime", "toDateString", "toJSON", "toLocaleDateString", "toLocaleString", "toLocaleTimeString", "toString", "toTimeString", "valueOf"]
  }), e(() => globalThis.GPU, {
    target: ["requestAdapter"]
  }), e(() => globalThis.GPUAdapter, {
    target: ["requestAdapterInfo"]
  }), e(() => Intl.DateTimeFormat, {
    target: ["format", "formatRange", "formatToParts", "resolvedOptions"]
  }), e(() => Document, {
    target: ["createElement", "createElementNS", "getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "getElementsByTagNameNS", "referrer", "write", "writeln"],
    ignore: ["onreadystatechange", "onmouseenter", "onmouseleave"]
  }), e(() => DOMRect), e(() => DOMRectReadOnly), e(() => Element, {
    target: ["append", "appendChild", "getBoundingClientRect", "getClientRects", "insertAdjacentElement", "insertAdjacentHTML", "insertAdjacentText", "insertBefore", "prepend", "replaceChild", "replaceWith", "setAttribute"]
  }), e(() => FontFace, {
    target: ["family", "load", "status"]
  }), e(() => HTMLCanvasElement), e(() => HTMLElement, {
    target: ["clientHeight", "clientWidth", "offsetHeight", "offsetWidth", "scrollHeight", "scrollWidth"],
    ignore: ["onmouseenter", "onmouseleave"]
  }), e(() => HTMLIFrameElement, {
    target: ["contentDocument", "contentWindow"]
  }), e(() => IntersectionObserverEntry, {
    target: ["boundingClientRect", "intersectionRect", "rootBounds"]
  }), e(() => Math, {
    target: ["acos", "acosh", "asinh", "atan", "atan2", "atanh", "cbrt", "cos", "cosh", "exp", "expm1", "log", "log10", "log1p", "sin", "sinh", "sqrt", "tan", "tanh"]
  }), e(() => MediaDevices, {
    target: ["enumerateDevices", "getDisplayMedia", "getUserMedia"]
  }), e(() => Navigator, {
    target: ["appCodeName", "appName", "appVersion", "buildID", "connection", "deviceMemory", "getBattery", "getGamepads", "getVRDisplays", "hardwareConcurrency", "language", "languages", "maxTouchPoints", "mimeTypes", "oscpu", "platform", "plugins", "product", "productSub", "sendBeacon", "serviceWorker", "storage", "userAgent", "vendor", "vendorSub", "webdriver", "gpu"]
  }), e(() => Node, {
    target: ["appendChild", "insertBefore", "replaceChild"]
  }), e(() => OffscreenCanvas, {
    target: ["convertToBlob", "getContext"]
  }), e(() => OffscreenCanvasRenderingContext2D, {
    target: ["getImageData", "getLineDash", "isPointInPath", "isPointInStroke", "measureText", "quadraticCurveTo", "font"]
  }), e(() => Permissions, {
    target: ["query"]
  }), e(() => Range, {
    target: ["getBoundingClientRect", "getClientRects"]
  }), e(() => Intl.RelativeTimeFormat, {
    target: ["resolvedOptions"]
  }), e(() => Screen), e(() => String, {
    target: ["fromCodePoint"]
  }), e(() => StorageManager, {
    target: ["estimate"]
  }), e(() => SVGRect), e(() => SVGRectElement, {
    target: ["getBBox"]
  }), e(() => SVGTextContentElement, {
    target: ["getExtentOfChar", "getSubStringLength", "getComputedTextLength"]
  }), e(() => TextMetrics), e(() => WebGLRenderingContext, {
    target: ["bufferData", "getParameter", "readPixels"]
  }), e(() => WebGL2RenderingContext, {
    target: ["bufferData", "getParameter", "readPixels"]
  });
  const r = t.getProps(),
    o = t.getPropsSearched();
  return {
    lieDetector: t,
    lieList: Object.keys(r).sort(),
    lieDetail: r,
    lieCount: Object.keys(r).reduce((a, i) => a + r[i].length, 0),
    propsSearched: o
  }
}
const vi = n => n && n.filter(t => !/object toString|toString incompatible proxy/.test(t)).length;
let on, ot, Xr = {},
  Yr = {},
  ar = !1;

function pn() {
  if (ar) return;
  ar = !0;
  const {
    iframeWindow: n,
    div: t
  } = wi() || {};
  on = n, ot = t;
  const {
    lieDetector: e,
    lieDetail: r
  } = bi(on);
  if (!Ur) {
    const o = e.getProps();
    Xr = Object.keys(o).reduce((a, i) => (a[i] = vi(o[i]), a), {}), Yr = JSON.parse(JSON.stringify(r))
  }
}

function mn() {
  return pn(), on
}

function Jr() {
  return pn(), ot
}

function Ei() {
  ot == null || ot.remove(), ot = void 0, on = void 0
}

function Ge() {
  return pn(), Xr
}

function Ti() {
  return pn(), Yr
}
const Si = () => {
    const n = $r.getRecords(),
      t = Object.keys(n).reduce((e, r) => (e += n[r].length, e), 0);
    return {
      data: n,
      totalLies: t
    }
  },
  Oi = n => typeof n == "function",
  Ai = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
  Qt = (n, {
    strict: t = !1
  } = {}) => {
    if (!n) return [];
    const e = [];
    [/([A-Z]{3,}[a-z])/g, /([a-z][A-Z]{3,})/g, /([a-z][A-Z]{2,}[a-z])/g, /([a-z][\d]{2,}[a-z])/g, /([A-Z][\d]{2,}[a-z])/g, /([a-z][\d]{2,}[A-Z])/g].forEach(l => {
      const p = n.match(l);
      if (p) return e.push(p.join(", "))
    });
    const o = [],
      a = n.replace(/\d|\W|_/g, " ").replace(/\s+/g, " ").trim().split(" ").join("_"),
      i = a.length,
      s = [...a];
    s.forEach((l, p) => {
      const f = p + 1,
        d = s[f];
      if (d !== "_" && l !== "_" && f !== i) {
        const h = l + d;
        Ai.test(h) && o.push(h)
      }
    });
    const u = [...!t && o.length < 3 ? [] : o, ...!t && e.length < 4 ? [] : e],
      _ = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return u.filter(l => !_.includes(l))
  };

function Qr(n) {
  if (n) return ("" + n).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...t) => `${t[1]}${t[6][0]}${t[6].slice(1).replace(/\d/g,"0")}s`)
}
const Ri = n => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + n).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  Zr = n => {
    if (!n) return;
    const t = Ri(n),
      e = t.length,
      r = /\s{2,}|^\s|\s$/.test(n),
      o = /^ANGLE/.test(n) && !(/^ANGLE \((.+)\)/.exec(n) || [])[1],
      a = Qt(n, {
        strict: !0
      }).join(", "),
      i = e && !r && !o,
      s = i && !a.length ? "high" : i && a.length ? "moderate" : "low",
      u = s == "high" ? "A" : s == "moderate" ? "C" : "F",
      _ = new Set([r ? "found extra spaces" : void 0, o ? "broken angle structure" : void 0]);
    return _.delete(void 0), {
      parts: t,
      warnings: [..._],
      gibbers: a,
      confidence: s,
      grade: u
    }
  },
  Di = () => {
    const n = [];
    return {
      getBin: () => n,
      sendToTrash: (t, e, r = void 0) => {
        const a = Oi(e) ? "proxy behavior detected" : e;
        return n.push({
          name: t,
          value: a
        }), r
      }
    }
  },
  eo = Di(),
  {
    sendToTrash: ae
  } = eo,
  Ii = () => ({
    trashBin: eo.getBin()
  });
async function Ni() {
  const n = navigator.userAgentData;
  if (!(n != null && n.getHighEntropyValues)) return null;
  try {
    const t = await n.getHighEntropyValues(["architecture", "bitness", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList", "wow64"]),
      r = (t.brands ?? n.brands ?? []).filter(i => !/Not.*Brand/i.test(i.brand)),
      a = r.length > 1 ? r.filter(i => i.brand !== "Chromium") : r;
    return {
      ...t,
      brands: a.map(i => i.brand),
      brandsVersion: a.map(i => `${i.brand} ${i.version}`),
      mobile: t.mobile ?? n.mobile ?? !1
    }
  } catch {
    return null
  }
}

function ki() {
  const n = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"],
    t = new Set;
  for (const e of n) try {
    const r = Intl[e];
    if (!r) continue;
    t.add(new r().resolvedOptions().locale)
  } catch {}
  return [...t].join(",")
}

function Ci(n) {
  const t = {
      style: "currency",
      currency: "USD",
      currencyDisplay: "name",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    },
    e = (n || "").split(",")[0] || void 0;
  let r = "",
    o = "";
  try {
    r = 1 .toLocaleString(e, t)
  } catch {}
  try {
    o = 1 .toLocaleString(void 0, t)
  } catch {}
  return {
    systemCurrencyLocale: r,
    engineCurrencyLocale: o
  }
}

function Pi() {
  try {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone ?? ""
  } catch {
    return ""
  }
}

function xi() {
  const n = {
    renderer: "",
    vendor: ""
  };
  if (typeof OffscreenCanvas > "u") return n;
  try {
    const t = new OffscreenCanvas(1, 1),
      e = t.getContext("webgl2") || t.getContext("webgl");
    if (!e) return n;
    const r = e.getExtension("WEBGL_debug_renderer_info");
    return r ? {
      renderer: String(e.getParameter(r.UNMASKED_RENDERER_WEBGL) ?? ""),
      vendor: String(e.getParameter(r.UNMASKED_VENDOR_WEBGL) ?? "")
    } : {
      renderer: String(e.getParameter(e.RENDERER) ?? ""),
      vendor: String(e.getParameter(e.VENDOR) ?? "")
    }
  } catch {
    return n
  }
}
async function Li(n) {
  const [t, e] = await Promise.all([Ni(), Promise.resolve(xi())]), r = navigator.deviceMemory, o = navigator.language, a = ki(), {
    systemCurrencyLocale: i,
    engineCurrencyLocale: s
  } = Ci(o);
  return {
    type: n,
    userAgent: navigator.userAgent,
    userAgentData: t,
    platform: navigator.platform,
    deviceMemory: r,
    hardwareConcurrency: navigator.hardwareConcurrency,
    language: o,
    languages: navigator.languages,
    locale: a,
    systemCurrencyLocale: i,
    engineCurrencyLocale: s,
    localeEntropyIsTrusty: s === i,
    localeIntlEntropyIsTrusty: new Set(o.split(",")).has(a),
    timezoneOffset: new Date().getTimezoneOffset(),
    timezoneLocation: Pi(),
    webglRenderer: e.renderer,
    webglVendor: e.vendor,
    lies: {
      proto: {}
    }
  }
}

function Mi(n) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: n == null ? void 0 : n.name
  })
}

function Bi(n) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: n == null ? void 0 : n.name
  })
}
async function Hi() {
  try {
    await se();
    const n = x => {
        try {
          return x()
        } catch {
          return
        }
      },
      t = () => new Promise(x => {
        const L = n(() => new Mi);
        if (!L) return x(null);
        const H = setTimeout(() => {
          L.terminate(), x(null)
        }, 3e3);
        L.onerror = () => {
          clearTimeout(H), L.terminate(), x(null)
        }, L.onmessage = ne => {
          clearTimeout(H), L.terminate(), x(ne.data)
        }
      }),
      e = () => new Promise(x => {
        const L = n(() => new Bi);
        if (!L) return x(null);
        const H = setTimeout(() => {
          L.port.close(), x(null)
        }, 3e3);
        L.port.start(), L.port.onmessage = ne => {
          clearTimeout(H), L.port.close(), x(ne.data)
        }
      }),
      r = x => (re(x), null),
      [o, a] = await Promise.all([e().catch(r), t().catch(r)]);
    let i = null,
      s = !1;
    if (a != null && a.userAgent ? i = a : (s = !0, i = await Li("dedicated").catch(r) ?? null), !i || !i.userAgent) return;
    if (s && (i.lied = !0, i.lies.workerUnavailable = "dedicated worker did not respond; collected from main thread", te("WorkerGlobalScope", i.lies.workerUnavailable)), o != null && o.userAgent && !s) {
      const x = [];
      o.userAgent !== i.userAgent && x.push("userAgent"), o.platform !== i.platform && x.push("platform"), o.hardwareConcurrency !== i.hardwareConcurrency && x.push("hardwareConcurrency"), o.deviceMemory !== i.deviceMemory && x.push("deviceMemory"), o.timezoneLocation !== i.timezoneLocation && x.push("timezoneLocation"), x.length && (i.lied = !0, i.lies.workerMismatch = `dedicated and shared worker disagree on: ${x.join(", ")}`, te("WorkerGlobalScope", i.lies.workerMismatch))
    }
    i.system = Dn(i.userAgent), i.device = Vr({
      userAgent: i.userAgent
    });
    const {
      system: u,
      userAgent: _,
      userAgentData: l,
      platform: p,
      deviceMemory: f,
      hardwareConcurrency: d
    } = i, g = "does not match worker scope";
    if (p != navigator.platform && te("Navigator.platform", g), _ != navigator.userAgent && te("Navigator.userAgent", g), d && d != navigator.hardwareConcurrency && te("Navigator.hardwareConcurrency", g), f && f != navigator.deviceMemory && te("Navigator.deviceMemory", g), i.lies.proto) {
      const {
        proto: x
      } = i.lies;
      Object.keys(x).forEach(H => {
        const ne = `WorkerGlobalScope.${H}`;
        x[H].forEach(F => {
          te(ne, F)
        })
      })
    }
    const [h, w] = Gr(_, p);
    h != w && (i.lied = !0, i.lies.os = `${w} platform and ${h} user agent do not match`, te("WorkerGlobalScope", i.lies.os));
    const k = Wr({
        ua: _,
        os: u,
        isBrave: !1
      }),
      T = /safari/i.test(k) || /iphone|ipad/i.test(_) ? "JavaScriptCore" : /firefox/i.test(_) ? "SpiderMonkey" : /chrome/i.test(_) ? "V8" : void 0;
    T != Zn && (i.lied = !0, i.lies.engine = `${Zn} JS runtime and ${T} user agent do not match`, te("WorkerGlobalScope", i.lies.engine));
    const R = x => (/\d+/.exec(x) || [])[0],
      S = R(k),
      N = R(l ? l.uaFullVersion ?? "" : ""),
      O = N && S,
      b = N == S;
    O && !b && (i.lied = !0, i.lies.version = `userAgentData version ${N} and user agent version ${S} do not match`, te("WorkerGlobalScope", i.lies.version));
    const v = ue && CSS.supports("accent-color: initial");
    ((x, L) => {
      if (!/windows|mac/i.test(x) || !(L != null && L.platformVersion)) return !1;
      if (L.platform == "macOS") return v ? /_/.test(L.platformVersion) : !1;
      const H = (/windows ([\d|\.]+)/i.exec(x) || [])[1],
        ne = +H == 10,
        {
          platformVersion: me
        } = L,
        Ne = {
          "6.1": "7",
          "6.2": "8",
          "6.3": "8.1",
          "10.0": "10"
        } [me];
      if (!v && Ne) return Ne != H;
      const C = me.split(".");
      if (C.length != 3) return !0;
      const M = +C[0] > 0;
      return M && !ne || !M && ne
    })(i.device, l) && (i.lied = !0, i.lies.platformVersion = "platform version is fake", te("WorkerGlobalScope", i.lies.platformVersion)), i.userAgentVersion = S, i.userAgentDataVersion = N, i.userAgentEngine = T;
    const B = {
      ...Zr(i.webglRenderer) || {},
      compressedGPU: Qr(i.webglRenderer)
    };
    return {
      ...i,
      gpu: B,
      uaPostReduction: zr(i.userAgent)
    }
  } catch (n) {
    re(n, "workers failed or blocked by client");
    return
  }
}
const ir = Math.random();
async function Ui() {
  const n = new OfflineAudioContext(1, 100, 44100),
    t = n.createOscillator();
  return t.frequency.value = 0, t.start(0), n.startRendering(), new Promise(e => {
    n.oncomplete = r => {
      var a, i;
      const o = (i = (a = r.renderedBuffer).getChannelData) == null ? void 0 : i.call(a, 0);
      o || e(!1), e("" + [...new Set(o)] != "0")
    }
  }).finally(() => {
    var e;
    try {
      t.disconnect()
    } catch {}
    try {
      (e = n.close) == null || e.call(n)
    } catch {}
  })
}
async function Fi() {
  var e, r, o;
  const n = [],
    t = a => {
      var i;
      try {
        (i = a == null ? void 0 : a.close) == null || i.call(a)
      } catch {}
    };
  try {
    await se();
    try {
      window.OfflineAudioContext = OfflineAudioContext || webkitOfflineAudioContext
    } catch {}
    if (!window.OfflineAudioContext) return;
    const a = Ge(),
      i = a["AudioBuffer.getChannelData"],
      s = a["AudioBuffer.copyFromChannel"];
    let u = i || s || !1;
    const _ = 5e3,
      l = new OfflineAudioContext(1, _, 44100);
    n.push(l);
    const p = l.createAnalyser(),
      f = l.createOscillator(),
      d = l.createDynamicsCompressor(),
      g = l.createBiquadFilter(),
      h = new Float32Array(p.frequencyBinCount);
    (e = p.getFloatFrequencyData) == null || e.call(p, h);
    const w = new Set(h).size;
    if (w > 1) {
      u = !0;
      const V = `expected -Infinity (silence) and got ${w} frequencies`;
      te("AnalyserNode.getFloatFrequencyData", V)
    }
    const k = {
        "AnalyserNode.channelCount": I(() => p.channelCount),
        "AnalyserNode.channelCountMode": I(() => p.channelCountMode),
        "AnalyserNode.channelInterpretation": I(() => p.channelInterpretation),
        "AnalyserNode.context.sampleRate": I(() => p.context.sampleRate),
        "AnalyserNode.fftSize": I(() => p.fftSize),
        "AnalyserNode.frequencyBinCount": I(() => p.frequencyBinCount),
        "AnalyserNode.maxDecibels": I(() => p.maxDecibels),
        "AnalyserNode.minDecibels": I(() => p.minDecibels),
        "AnalyserNode.numberOfInputs": I(() => p.numberOfInputs),
        "AnalyserNode.numberOfOutputs": I(() => p.numberOfOutputs),
        "AnalyserNode.smoothingTimeConstant": I(() => p.smoothingTimeConstant),
        "AnalyserNode.context.listener.forwardX.maxValue": I(() => be(() => p.context.listener.forwardX.maxValue)),
        "BiquadFilterNode.gain.maxValue": I(() => g.gain.maxValue),
        "BiquadFilterNode.frequency.defaultValue": I(() => g.frequency.defaultValue),
        "BiquadFilterNode.frequency.maxValue": I(() => g.frequency.maxValue),
        "DynamicsCompressorNode.attack.defaultValue": I(() => d.attack.defaultValue),
        "DynamicsCompressorNode.knee.defaultValue": I(() => d.knee.defaultValue),
        "DynamicsCompressorNode.knee.maxValue": I(() => d.knee.maxValue),
        "DynamicsCompressorNode.ratio.defaultValue": I(() => d.ratio.defaultValue),
        "DynamicsCompressorNode.ratio.maxValue": I(() => d.ratio.maxValue),
        "DynamicsCompressorNode.release.defaultValue": I(() => d.release.defaultValue),
        "DynamicsCompressorNode.release.maxValue": I(() => d.release.maxValue),
        "DynamicsCompressorNode.threshold.defaultValue": I(() => d.threshold.defaultValue),
        "DynamicsCompressorNode.threshold.minValue": I(() => d.threshold.minValue),
        "OscillatorNode.detune.maxValue": I(() => f.detune.maxValue),
        "OscillatorNode.detune.minValue": I(() => f.detune.minValue),
        "OscillatorNode.frequency.defaultValue": I(() => f.frequency.defaultValue),
        "OscillatorNode.frequency.maxValue": I(() => f.frequency.maxValue),
        "OscillatorNode.frequency.minValue": I(() => f.frequency.minValue)
      },
      T = V => new Promise(q => {
        const Z = V.createAnalyser(),
          fe = V.createOscillator(),
          he = V.createDynamicsCompressor();
        try {
          fe.type = "triangle", fe.frequency.value = 1e4, he.threshold.value = -50, he.knee.value = 40, he.attack.value = 0
        } catch {}
        return fe.connect(he), he.connect(Z), he.connect(V.destination), fe.start(0), V.startRendering(), V.addEventListener("complete", ge => {
          var lt;
          try {
            he.disconnect(), fe.disconnect();
            const et = new Float32Array(Z.frequencyBinCount);
            (lt = Z.getFloatFrequencyData) == null || lt.call(Z, et);
            const Kt = new Float32Array(Z.fftSize);
            return "getFloatTimeDomainData" in Z && Z.getFloatTimeDomainData(Kt), q({
              floatFrequencyData: et,
              floatTimeDomainData: Kt,
              buffer: ge.renderedBuffer,
              compressorGainReduction: he.reduction.value || he.reduction
            })
          } catch {
            return q(null)
          }
        })
      });
    await se();
    const [R, S] = await Promise.all([T(l), Ui().catch(() => !1)]), {
      floatFrequencyData: N,
      floatTimeDomainData: O,
      buffer: b,
      compressorGainReduction: v
    } = R || {};
    await se();
    const E = (V, q, Z) => {
        const fe = Math.min(Z, V.length),
          he = [];
        for (let ge = q; ge < fe; ge++) he.push(V[ge]);
        return he
      },
      D = V => {
        if (!V) return 0;
        let q = 0;
        for (let Z = 0; Z < V.length; Z++) q += Math.abs(V[Z]);
        return q
      },
      B = D(N),
      x = D(O),
      L = new Float32Array(_);
    let H = new Float32Array;
    b && ((r = b.copyFromChannel) == null || r.call(b, L, 0), H = ((o = b.getChannelData) == null ? void 0 : o.call(b, 0)) || []);
    const ne = E(L, 4500, 4600),
      me = E(H, 4500, 4600),
      F = D(E(H, 4500, _));
    S && (u = !0, te("AudioBuffer", "audio is fake"));
    const Ne = "" + me == "" + ne,
      C = "copyFromChannel" in AudioBuffer.prototype;
    C && !Ne && (u = !0, te("AudioBuffer", "getChannelData and copyFromChannel samples mismatch"));
    const M = new Set(H).size;
    if (M == _) {
      const V = `${M} unique samples of ${_} is too high`;
      ae("AudioBuffer", V)
    }
    const K = (V, q) => Math.floor(Math.random() * (q - V + 1)) + V,
      oe = (V, q, Z) => {
        const {
          length: fe
        } = q, he = 20, ge = K(275, fe - (he + 1)), lt = ge + he / 2, et = ge + he;
        q.getChannelData(0)[ge] = V, q.getChannelData(0)[lt] = V, q.getChannelData(0)[et] = V, q.copyFromChannel(Z, 0);
        const Kt = [q.getChannelData(0)[ge] === 0 ? Math.random() : 0, q.getChannelData(0)[lt] === 0 ? Math.random() : 0, q.getChannelData(0)[et] === 0 ? Math.random() : 0];
        return [...new Set([...q.getChannelData(0), ...Z, ...Kt])].filter(fo => fo !== 0)
      },
      ye = (V, q, Z) => {
        q.copyToChannel(Z.map(() => V), 0);
        const fe = q.getChannelData(0)[0];
        return [...q.getChannelData(0)].map(ge => ge !== fe || !ge ? Math.random() : ge).filter(ge => ge !== fe)
      };
    let Re = (() => {
      try {
        const q = [...new Set([...oe(ir, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...ye(ir, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3))])];
        return +(q.length !== 1 && q.reduce((Z, fe) => Z += +fe, 0))
      } catch {
        return 0
      }
    })();
    if (!Re) {
      const V = Math.min(100, H.length),
        q = new Set;
      for (let Z = 0; Z < V; Z++) {
        const fe = H[Z];
        q.has(fe) || (q.add(fe), Re += fe)
      }
    }
    const lo = {
      "-20.538286209106445,164537.64796829224,502.5999283068122": [124.04347527516074],
      "-20.538288116455078,164537.64796829224,502.5999283068122": [124.04347527516074],
      "-20.538288116455078,164537.64795303345,502.5999283068122": [124.04347527516074, 124.04347518575378, 124.04347519320436, 124.04347523045726],
      "-20.538286209106445,164537.64805984497,502.5999283068122": [124.04347527516074],
      "-20.538288116455078,164537.64805984497,502.5999283068122": [124.04347527516074, 124.04347518575378, 124.04347520065494, 124.04347523790784, 124.043475252809, 124.04347526025958, 124.04347522300668, 124.04347523045726, 124.04347524535842],
      "-20.538288116455078,164881.9727935791,502.59990317908887": [124.04344884395687],
      "-20.538288116455078,164881.9729309082,502.59990317908887": [124.04344884395687],
      "-20.538286209106445,164882.2082748413,502.59990317911434": [124.0434488439787],
      "-20.538288116455078,164882.20836639404,502.59990317911434": [124.0434488439787],
      "-20.538286209106445,164863.45319366455,502.5999033495791": [124.04344968475198],
      "-20.538288116455078,164863.45319366455,502.5999033495791": [124.04344968475198, 124.04375314689969, 124.04341541208123],
      "-20.538288116455078,164531.82670593262,502.59992767886797": [124.04347503720783, 124.04347494780086, 124.04347495525144, 124.04347499250434, 124.0434750074055],
      "-20.538286209106445,164540.1567993164,502.59992209258417": [124.04347657808103],
      "-20.538288116455078,164540.1567993164,502.59992209258417": [124.04347657808103, 124.0434765110258, 124.04347656317987, 124.04347657063045, 124.04378004022874],
      "-20.538288116455078,164540.1580810547,502.59992209258417": [124.04347657808103],
      "-20.535268783569336,164940.360786438,502.69695458233764": [124.080722568091],
      "-20.538288116455078,164538.55073928833,502.5999307175407": [124.04347730590962],
      "-20.535268783569336,164948.14596557617,502.6969545823631": [124.08072256811283],
      "-20.535268783569336,164926.65912628174,502.6969610930064": [124.08072766105033],
      "-20.535268783569336,164932.96168518066,502.69696179985476": [124.08072787802666],
      "-20.535268783569336,164931.54252624512,502.6969617998802": [124.08072787804849],
      "-20.535268783569336,164591.9659729004,502.6969925059784": [124.08074500028306],
      "-20.535268783569336,164590.4111480713,502.6969947774742": [124.0807470110085],
      "-20.535268783569336,164590.41115570068,502.6969947774742": [124.0807470110085],
      "-20.535268783569336,164593.64263916016,502.69700490119067": [124.08075528279005],
      "-20.535268783569336,164595.0285797119,502.69700578315314": [124.08075643483608],
      "-20.538288116455078,164860.96576690674,502.6075748118915": [124.0434496279413],
      "-20.538288116455078,164860.9938583374,502.6073723861407": [124.04344962817413],
      "-20.538288116455078,164862.14078521729,502.59991004130643": [124.04345734833623],
      "-20.538288116455078,164534.50047683716,502.61542110471055": [124.04347520368174],
      "-20.538288116455078,164535.1324043274,502.6079200572931": [124.04347521997988],
      "-20.538288116455078,164535.51135635376,502.60633126448374": [124.04347522952594],
      "-31.509262084960938,167722.6894454956,148.42717787250876": [35.7383295930922],
      "-31.509262084960938,167728.72756958008,148.427184343338": [35.73833402246237],
      "-31.50218963623047,167721.27517700195,148.47537828609347": [35.74996031448245],
      "-31.502185821533203,167727.52931976318,148.47542023658752": [35.7499681673944],
      "-31.502185821533203,167700.7530517578,148.475412953645": [35.749968223273754],
      "-31.502187728881836,167697.23177337646,148.47541113197803": [35.74996626004577],
      "-20.538288116455078,164873.80361557007,502.59989904452596": [124.0434485301812],
      "-20.538288116455078,164863.47760391235,502.5999033453372": [124.0434496849557],
      "-20.538288116455078,164876.62466049194,502.5998911961724": [124.043453265891],
      "-20.538288116455078,164862.14879989624,502.59991004130643": [124.04345734833623],
      "-20.538288116455078,164896.54167175293,502.5999054916465": [124.04345808873768],
      "-29.837873458862305,163206.43050384521,0": [35.10892717540264],
      "-29.837873458862305,163224.69785308838,0": [35.10892752557993],
      "-29.83786964416504,163209.17245483398,0": [35.10893232002854],
      "-29.83786964416504,163202.77336883545,0": [35.10893253237009]
    };
    Re && (u = !0, te("AudioBuffer", "sample noise detected"));
    const _o = "" + [v, B, x],
      Gn = lo[_o];
    return Gn && !Gn.includes(F) && (ke.AUDIO = !0, ae("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: M,
      compressorGainReduction: v,
      floatFrequencyDataSum: B,
      floatTimeDomainDataSum: x,
      sampleSum: F,
      binsSample: me,
      copySample: C ? ne : [void 0],
      values: k,
      noise: Re,
      baseLatency: ji(),
      lied: u
    }
  } catch (a) {
    re(a, "OfflineAudioContext failed or blocked by client");
    return
  } finally {
    n.forEach(t)
  }
}

function ji() {
  var n;
  try {
    const t = window.AudioContext ?? window.webkitAudioContext;
    if (!t) return -2;
    const e = new t,
      r = e.baseLatency;
    return (n = e.close) == null || n.call(e), typeof r == "number" ? r : -1
  } catch (t) {
    return re(t), -1
  }
}

function gt(n) {
  n && (n.width = 0, n.height = 0, n.remove())
}
const Gi = () => {
    const o = {
        willReadFrequently: !0,
        desynchronized: !0
      },
      a = document.createElement("canvas"),
      i = document.createElement("canvas"),
      s = document.createElement("canvas");
    try {
      const u = a.getContext("2d", o),
        _ = i.getContext("2d", o),
        l = s.getContext("2d", o);
      if (!u || !_ || !l) throw new Error("canvas context blocked");
      a.width = 40, a.height = 40, i.width = 8, i.height = 8, s.width = 8, s.height = 8;
      const p = new Uint8Array(256),
        f = new Uint8Array(256);
      let d = 0;
      for (let R = 0; R < 8; R++)
        for (let S = 0; S < 8; S++) {
          const N = ~~(Math.random() * 256),
            O = ~~(Math.random() * 256),
            b = ~~(Math.random() * 256);
          p[d] = N, p[d + 1] = O, p[d + 2] = b, p[d + 3] = 255, d += 4, _.fillStyle = `rgba(${N}, ${O}, ${b}, 255)`, _.fillRect(R, S, 1, 1)
        }
      d = 0;
      for (let R = 0; R < 8; R++)
        for (let S = 0; S < 8; S++) {
          const N = _.getImageData(R, S, 1, 1).data,
            O = N[0],
            b = N[1],
            v = N[2],
            E = N[3];
          l.fillStyle = `rgba(${O}, ${b}, ${v}, ${E})`, l.fillRect(R, S, 1, 1);
          const D = l.getImageData(R, S, 1, 1).data,
            B = D[0],
            x = D[1],
            L = D[2],
            H = D[3];
          f[d] = O, f[d + 1] = b, f[d + 2] = v, f[d + 3] = E, d += 4, u.fillStyle = `rgba(${O!==B?B:255}, ${b!==x?x:255}, ${v!==L?L:255}, ${E!==H?H:1})`, u.fillRect(R * 5, S * 5, 5, 5)
        }
      const g = [],
        h = new Set;
      for (let R = 0; R < 64; R++) {
        const S = R * 4,
          N = p[S] !== f[S],
          O = p[S + 1] !== f[S + 1],
          b = p[S + 2] !== f[S + 2],
          v = p[S + 3] !== f[S + 3];
        if (N || O || b || v) {
          const E = (N ? "r" : "") + (O ? "g" : "") + (b ? "b" : "") + (v ? "a" : "");
          h.add(E), g.push([R, E])
        }
      }
      const w = a.toDataURL(),
        k = h.size ? [...h].sort().join(", ") : void 0,
        T = g.length || void 0;
      return {
        rgba: k,
        pixels: T,
        pixelImage: w
      }
    } catch {
      return
    } finally {
      gt(a), gt(i), gt(s)
    }
  },
  yn = ({
    canvas: n,
    context: t,
    strokeText: e = !1,
    cssFontFamily: r = "",
    area: o = {
      width: 50,
      height: 50
    },
    rounds: a = 10,
    maxShadowBlur: i = 50,
    seed: s = 500,
    offset: u = 2001000001,
    multiplier: _ = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, n.width, n.height), n.width = o.width, n.height = o.height, n.style && (n.style.display = "none");
    const p = (({
        seed: O,
        offset: b,
        multiplier: v
      }) => {
        let E = Number(O) % Number(b);
        return {
          getNextSeed: () => (E = Number(v) * E % Number(b), E)
        }
      })({
        seed: s,
        offset: u,
        multiplier: _
      }),
      {
        getNextSeed: f
      } = p,
      d = (O, b, v, E) => {
        const D = (O - 1) / b * (v || 1) || 0;
        return E ? D : Math.floor(D)
      },
      g = (O, b, v, E, D) => {
        const {
          width: B,
          height: x
        } = v, L = O.createRadialGradient(d(D(), b, B), d(D(), b, x), d(D(), b, B), d(D(), b, B), d(D(), b, x), d(D(), b, B));
        L.addColorStop(0, E[d(D(), b, E.length)]), L.addColorStop(1, E[d(D(), b, E.length)]), O.fillStyle = L
      },
      h = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      w = (O, b, v, E) => {
        const {
          width: D,
          height: B
        } = v, x = 2.99;
        O.font = `${B/x}px ${r.replace(/!important/gm,"")}`, O.strokeText("👾A", d(E(), b, D), d(E(), b, B), d(E(), b, D))
      },
      k = (O, b, v, E) => {
        const {
          width: D,
          height: B
        } = v;
        O.beginPath(), O.arc(d(E(), b, D), d(E(), b, B), d(E(), b, Math.min(D, B)), d(E(), b, 2 * Math.PI, !0), d(E(), b, 2 * Math.PI, !0)), O.stroke()
      },
      T = (O, b, v, E) => {
        const {
          width: D,
          height: B
        } = v;
        O.beginPath(), O.moveTo(d(E(), b, D), d(E(), b, B)), O.bezierCurveTo(d(E(), b, D), d(E(), b, B), d(E(), b, D), d(E(), b, B), d(E(), b, D), d(E(), b, B)), O.stroke()
      },
      R = (O, b, v, E) => {
        const {
          width: D,
          height: B
        } = v;
        O.beginPath(), O.moveTo(d(E(), b, D), d(E(), b, B)), O.quadraticCurveTo(d(E(), b, D), d(E(), b, B), d(E(), b, D), d(E(), b, B)), O.stroke()
      },
      S = (O, b, v, E) => {
        if (!("ellipse" in O)) return;
        const {
          width: D,
          height: B
        } = v;
        O.beginPath(), O.ellipse(d(E(), b, D), d(E(), b, B), d(E(), b, Math.floor(D / 2)), d(E(), b, Math.floor(B / 2)), d(E(), b, 2 * Math.PI, !0), d(E(), b, 2 * Math.PI, !0), d(E(), b, 2 * Math.PI, !0)), O.stroke()
      },
      N = [k, T, R];
    bt || N.push(S), e && N.push(w), [...Array(a)].forEach(O => {
      g(t, u, o, h, f), t.shadowBlur = d(f(), u, i, !0), t.shadowColor = h[d(f(), u, h.length)];
      const b = N[d(f(), u, N.length)];
      b(t, u, o, f), t.fill()
    })
  };
async function Wi() {
  let n, t;
  try {
    await se();
    const e = Ge(),
      r = mn(),
      o = e["HTMLCanvasElement.toDataURL"],
      a = e["HTMLCanvasElement.getContext"],
      i = e["CanvasRenderingContext2D.fillText"] || e["CanvasRenderingContext2D.font"] || e["CanvasRenderingContext2D.getImageData"] || e["CanvasRenderingContext2D.strokeText"],
      s = e["String.fromCodePoint"];
    let u = e["CanvasRenderingContext2D.measureText"] || e["TextMetrics.actualBoundingBoxAscent"] || e["TextMetrics.actualBoundingBoxDescent"] || e["TextMetrics.actualBoundingBoxLeft"] || e["TextMetrics.actualBoundingBoxRight"] || e["TextMetrics.fontBoundingBoxAscent"] || e["TextMetrics.fontBoundingBoxDescent"] || e["TextMetrics.width"],
      _ = o || a || i || u || s || !1,
      l = window;
    !Fr && r && (l = r);
    const p = l.document;
    n = p.createElement("canvas");
    const f = n.getContext("2d", {
      willReadFrequently: !1
    });
    t = p.createElement("canvas");
    const d = t.getContext("2d", {
      desynchronized: !0,
      willReadFrequently: !0
    });
    if (!f) throw new Error("canvas context blocked");
    await se();
    const g = bt ? 50 : 75;
    yn({
      canvas: n,
      context: f,
      strokeText: !0,
      cssFontFamily: In,
      area: {
        width: g,
        height: g
      },
      rounds: 10
    });
    const h = n.toDataURL();
    await se();
    const w = Gi();
    await se();
    const k = In.replace(/!important/gm, "");
    f.font = `10px ${k}`;
    const T = new Set,
      R = qr.reduce((L, H) => {
        const {
          actualBoundingBoxAscent: ne,
          actualBoundingBoxDescent: me,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Ne,
          fontBoundingBoxAscent: C,
          fontBoundingBoxDescent: M,
          width: K
        } = f.measureText(H) || {}, oe = [ne, me, F, Ne, C, M, K].join(",");
        return T.has(oe) || (T.add(oe), L.add(H)), L
      }, new Set),
      S = 1e-5 * [...T].map(L => L.split(",").reduce((H, ne) => H += +ne || 0, 0)).reduce((L, H) => L += H, 0),
      N = 75;
    await se(), yn({
      canvas: n,
      context: f,
      area: {
        width: N,
        height: N
      }
    });
    const O = n.toDataURL();
    await se(), yn({
      canvas: t,
      context: d,
      area: {
        width: N,
        height: N
      }
    });
    const b = t.toDataURL();
    f.restore(), f.clearRect(0, 0, n.width, n.height), n.width = 50, n.height = 50, f.font = `50px ${k}`, f.fillText("A", 7, 37);
    const v = n.toDataURL();
    f.restore(), f.clearRect(0, 0, n.width, n.height), n.width = 50, n.height = 50, f.font = `35px ${k}`, f.fillText("👾", 0, 37);
    const E = n.toDataURL();
    f.clearRect(0, 0, n.width, n.height), (w && w.pixels || Math.max(...f.getImageData(0, 0, 8, 8).data)) && (_ = !0, te("CanvasRenderingContext2D.getImageData", "pixel data modified")), n.width = 2, n.height = 2, f.fillStyle = "#000", f.fillRect(0, 0, n.width, n.height), f.fillStyle = "#fff", f.fillRect(2, 2, 1, 1), f.beginPath(), f.arc(0, 0, 2, 0, 1, !0), f.closePath(), f.fill();
    const D = f.getImageData(0, 0, 2, 2).data.join(""),
      B = {
        BLINK: ["255255255255178178178255246246246255555555255", "255255255255192192192255240240240255484848255", "255255255255177177177255246246246255535353255", "255255255255128128128255191191191255646464255", "255255255255178178178255247247247255565656255", "255255255255174174174255242242242255474747255", "255255255255229229229255127127127255686868255", "255255255255192192192255244244244255535353255"],
        GECKO: ["255255255255191191191255207207207255646464255", "255255255255192192192255240240240255484848255", "255255255255191191191255239239239255646464255", "255255255255191191191255223223223255606060255", "255255255255171171171255223223223255606060255", "255255255255188188188255245245245255525252255"],
        WEBKIT: ["255255255255185185185255233233233255474747255", "255255255255185185185255229229229255474747255", "255255255255185185185255218218218255474747255", "255255255255192192192255240240240255484848255", "255255255255178178178255247247247255565656255", "255255255255178178178255247247247255565656255", "255255255255192192192255240240240255484848255", "255255255255186186186255218218218255464646255"]
      };
    Fe.imageDataLowEntropy = D, (ue && !B.BLINK.includes(D) || wt && !B.GECKO.includes(D) || bt && !B.WEBKIT.includes(D)) && (ke.CANVAS = !0), ke.CANVAS && ae("CanvasRenderingContext2D.getImageData", "suspicious pixel data");
    const x = L => {
      const H = oe => oe % 1 !== 0,
        {
          actualBoundingBoxAscent: ne,
          actualBoundingBoxDescent: me,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Ne,
          fontBoundingBoxAscent: C,
          fontBoundingBoxDescent: M
        } = L.measureText("") || {};
      return [ne, me, F, Ne, C, M].find(oe => H(oe || 0))
    };
    return await se(), x(f) && (u = !0, _ = !0, te("CanvasRenderingContext2D.measureText", "metric noise detected")), {
      dataURI: h,
      paintURI: O,
      paintCpuURI: b,
      textURI: v,
      emojiURI: E,
      mods: w,
      textMetricsSystemSum: S,
      liedTextMetrics: u,
      emojiSet: [...R],
      lied: _
    }
  } catch (e) {
    re(e);
    return
  } finally {
    gt(n), gt(t)
  }
}

function Vi() {
  const n = (e, {
      require: [r]
    }) => {
      try {
        const o = e == "getComputedStyle" ? getComputedStyle(document.body) : e == "HTMLElement.style" ? document.body.style : e == "CSSRuleList.style" ? document.styleSheets[0].cssRules[0].style : void 0;
        if (!o) throw new TypeError("invalid argument string");
        const a = Object.getPrototypeOf(o),
          i = Object.getOwnPropertyNames(a),
          s = [],
          u = /^--.*$/;
        Object.keys(o).forEach(w => {
          const k = !isNaN(+w),
            T = o[w],
            R = u.test(w),
            S = u.test(T);
          if (k && !S) return s.push(T);
          if (!k && !R) return s.push(w)
        });
        const _ = {},
          l = w => w.charAt(0).toUpperCase() + w.slice(1),
          p = w => w.charAt(0).toLowerCase() + w.slice(1),
          f = w => w.slice(1),
          d = /[A-Z]/g;
        s.forEach(w => {
          if (_[w]) return;
          const k = w.indexOf("-") > -1,
            T = d.test(w),
            R = w.charAt(0),
            S = k && R == "-",
            N = T && R == R.toUpperCase();
          if (w = S ? f(w) : N ? p(w) : w, k) {
            const O = w.split("-").map((b, v) => v == 0 ? b : l(b)).join("");
            O in o ? _[O] = !0 : l(O) in o && (_[l(O)] = !0)
          } else if (T) {
            const O = w.replace(d, b => "-" + b.toLowerCase());
            O in o ? _[O] = !0 : `-${O}` in o && (_[`-${O}`] = !0)
          }
        });
        const g = [...new Set([...i, ...s, ...Object.keys(_)])],
          h = ("" + a).match(/\[object (.+)\]/)[1];
        return {
          keys: g,
          interfaceName: h
        }
      } catch (o) {
        r(o);
        return
      }
    },
    t = e => {
      var r;
      try {
        const o = ["ActiveBorder", "ActiveCaption", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "VisitedText", "Window", "WindowFrame", "WindowText"],
          a = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
          i = s => ({
            colors: o.map(u => (s.setAttribute("style", `background-color: ${u} !important`), {
              [u]: getComputedStyle(s).backgroundColor
            })),
            fonts: a.map(u => {
              s.setAttribute("style", `font: ${u} !important`);
              const _ = getComputedStyle(s);
              return {
                [u]: `${_.fontSize} ${_.fontFamily}`
              }
            })
          });
        if (!e) {
          e = document.createElement("div"), document.body.append(e);
          const s = i(e);
          return (r = e.parentNode) == null || r.removeChild(e), s
        }
        return i(e)
      } catch (o) {
        re(o);
        return
      }
    };
  try {
    const e = n("getComputedStyle", {
        require: [re]
      }),
      r = t(Jr());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    re(e);
    return
  }
}

function zi() {
  const n = (o, a) => a == 0 ? o : n(a, o % a),
    t = (o, a) => {
      const i = n(o, a);
      return `${o/i}/${a/i}`
    },
    e = ({
      body: o,
      type: a,
      rangeStart: i,
      rangeLen: s
    }) => {
      const u = [...Array(s)].map((l, p) => (p += i, `@media(device-${a}:${p}px){body{--device-${a}:${p};}}`)).join("");
      return o.innerHTML = `<style>${u}</style>`, getComputedStyle(o).getPropertyValue(`--device-${a}`).trim()
    },
    r = ({
      body: o,
      width: a,
      height: i
    }) => {
      let s = e({
          body: o,
          type: "width",
          rangeStart: a,
          rangeLen: 1
        }),
        u = e({
          body: o,
          type: "height",
          rangeStart: i,
          rangeLen: 1
        });
      if (s && u) return {
        width: a,
        height: i
      };
      const _ = 1e3;
      return [...Array(10)].find((l, p) => (s || (s = e({
        body: o,
        type: "width",
        rangeStart: p * _,
        rangeLen: _
      })), u || (u = e({
        body: o,
        type: "height",
        rangeStart: p * _,
        rangeLen: _
      })), !!(s && u))), {
        width: +s,
        height: +u
      }
    };
  try {
    const o = mn().window,
      {
        body: a
      } = o.document,
      {
        width: i,
        availWidth: s,
        height: u,
        availHeight: _
      } = o.screen,
      l = !(i - s || u - _);
    (screen.width !== i || i > 800 && l) && (ke.IFRAME_SCREEN = !0);
    const p = t(i, u),
      f = T => {
        var R;
        return !!((R = o.matchMedia(T)) != null && R.matches)
      },
      d = T => {
        var R;
        return !!((R = matchMedia(T)) != null && R.matches)
      },
      g = {
        "prefers-reduced-motion": f("(prefers-reduced-motion: no-preference)") ? "no-preference" : f("(prefers-reduced-motion: reduce)") ? "reduce" : void 0,
        "prefers-color-scheme": d("(prefers-color-scheme: light)") ? "light" : d("(prefers-color-scheme: dark)") ? "dark" : void 0,
        monochrome: f("(monochrome)") ? "monochrome" : f("(monochrome: 0)") ? "non-monochrome" : void 0,
        "inverted-colors": f("(inverted-colors: inverted)") ? "inverted" : f("(inverted-colors: none)") ? "none" : void 0,
        "forced-colors": f("(forced-colors: none)") ? "none" : f("(forced-colors: active)") ? "active" : void 0,
        "any-hover": f("(any-hover: hover)") ? "hover" : f("(any-hover: none)") ? "none" : void 0,
        hover: f("(hover: hover)") ? "hover" : f("(hover: none)") ? "none" : void 0,
        "any-pointer": f("(any-pointer: fine)") ? "fine" : f("(any-pointer: coarse)") ? "coarse" : f("(any-pointer: none)") ? "none" : void 0,
        pointer: f("(pointer: fine)") ? "fine" : f("(pointer: coarse)") ? "coarse" : f("(pointer: none)") ? "none" : void 0,
        "device-aspect-ratio": f(`(device-aspect-ratio: ${p})`) ? p : void 0,
        "device-screen": f(`(device-width: ${i}px) and (device-height: ${u}px)`) ? `${i} x ${u}` : void 0,
        "display-mode": f("(display-mode: fullscreen)") ? "fullscreen" : f("(display-mode: standalone)") ? "standalone" : f("(display-mode: minimal-ui)") ? "minimal-ui" : f("(display-mode: browser)") ? "browser" : void 0,
        "color-gamut": f("(color-gamut: rec2020)") ? "rec2020" : f("(color-gamut: p3)") ? "p3" : f("(color-gamut: srgb)") ? "srgb" : void 0,
        orientation: d("(orientation: landscape)") ? "landscape" : d("(orientation: portrait)") ? "portrait" : void 0,
        "dynamic-range": f("(dynamic-range: high)") ? "high" : f("(dynamic-range: standard)") ? "standard" : void 0,
        "prefers-contrast": f("(prefers-contrast: no-preference)") ? "no-preference" : f("(prefers-contrast: more)") ? "more" : f("(prefers-contrast: less)") ? "less" : f("(prefers-contrast: custom)") ? "custom" : void 0,
        "prefers-reduced-transparency": f("(prefers-reduced-transparency: no-preference)") ? "no-preference" : f("(prefers-reduced-transparency: reduce)") ? "reduce" : void 0
      };
    a.innerHTML = `
		<style>
		@media (prefers-reduced-motion: no-preference) {body {--prefers-reduced-motion: no-preference}}
		@media (prefers-reduced-motion: reduce) {body {--prefers-reduced-motion: reduce}}
		@media (prefers-color-scheme: light) {body {--prefers-color-scheme: light}}
		@media (prefers-color-scheme: dark) {body {--prefers-color-scheme: dark}}
		@media (monochrome) {body {--monochrome: monochrome}}
		@media (monochrome: 0) {body {--monochrome: non-monochrome}}
		@media (inverted-colors: inverted) {body {--inverted-colors: inverted}}
		@media (inverted-colors: none) {body {--inverted-colors: none}}
		@media (forced-colors: none) {body {--forced-colors: none}}
		@media (forced-colors: active) {body {--forced-colors: active}}
		@media (any-hover: hover) {body {--any-hover: hover}}
		@media (any-hover: none) {body {--any-hover: none}}
		@media (hover: hover) {body {--hover: hover}}
		@media (hover: none) {body {--hover: none}}
		@media (any-pointer: fine) {body {--any-pointer: fine}}
		@media (any-pointer: coarse) {body {--any-pointer: coarse}}
		@media (any-pointer: none) {body {--any-pointer: none}}
		@media (pointer: fine) {body {--pointer: fine}}
		@media (pointer: coarse) {body {--pointer: coarse}}
		@media (pointer: none) {body {--pointer: none}}
		@media (device-aspect-ratio: ${p}) {body {--device-aspect-ratio: ${p}}}
		@media (device-width: ${i}px) and (device-height: ${u}px) {body {--device-screen: ${i} x ${u}}}
		@media (display-mode: fullscreen) {body {--display-mode: fullscreen}}
		@media (display-mode: standalone) {body {--display-mode: standalone}}
		@media (display-mode: minimal-ui) {body {--display-mode: minimal-ui}}
		@media (display-mode: browser) {body {--display-mode: browser}}
		@media (color-gamut: srgb) {body {--color-gamut: srgb}}
		@media (color-gamut: p3) {body {--color-gamut: p3}}
		@media (color-gamut: rec2020) {body {--color-gamut: rec2020}}
		@media (orientation: landscape) {body {--orientation: landscape}}
		@media (orientation: portrait) {body {--orientation: portrait}}
		@media (dynamic-range: high) {body {--dynamic-range: high}}
		@media (dynamic-range: standard) {body {--dynamic-range: standard}}
		@media (prefers-contrast: no-preference) {body {--prefers-contrast: no-preference}}
		@media (prefers-contrast: more) {body {--prefers-contrast: more}}
		@media (prefers-contrast: less) {body {--prefers-contrast: less}}
		@media (prefers-contrast: custom) {body {--prefers-contrast: custom}}
		@media (prefers-reduced-transparency: no-preference) {body {--prefers-reduced-transparency: no-preference}}
		@media (prefers-reduced-transparency: reduce) {body {--prefers-reduced-transparency: reduce}}
		</style>
		`;
    const h = getComputedStyle(a),
      w = {
        "prefers-reduced-motion": h.getPropertyValue("--prefers-reduced-motion").trim() || void 0,
        "prefers-color-scheme": h.getPropertyValue("--prefers-color-scheme").trim() || void 0,
        monochrome: h.getPropertyValue("--monochrome").trim() || void 0,
        "inverted-colors": h.getPropertyValue("--inverted-colors").trim() || void 0,
        "forced-colors": h.getPropertyValue("--forced-colors").trim() || void 0,
        "any-hover": h.getPropertyValue("--any-hover").trim() || void 0,
        hover: h.getPropertyValue("--hover").trim() || void 0,
        "any-pointer": h.getPropertyValue("--any-pointer").trim() || void 0,
        pointer: h.getPropertyValue("--pointer").trim() || void 0,
        "device-aspect-ratio": h.getPropertyValue("--device-aspect-ratio").trim() || void 0,
        "device-screen": h.getPropertyValue("--device-screen").trim() || void 0,
        "display-mode": h.getPropertyValue("--display-mode").trim() || void 0,
        "color-gamut": h.getPropertyValue("--color-gamut").trim() || void 0,
        orientation: h.getPropertyValue("--orientation").trim() || void 0,
        "dynamic-range": h.getPropertyValue("--dynamic-range").trim() || void 0,
        "prefers-contrast": h.getPropertyValue("--prefers-contrast").trim() || void 0,
        "prefers-reduced-transparency": h.getPropertyValue("--prefers-reduced-transparency").trim() || void 0
      },
      k = r({
        body: a,
        width: i,
        height: u
      });
    return {
      mediaCSS: w,
      matchMediaCSS: g,
      screenQuery: k
    }
  } catch (o) {
    re(o);
    return
  }
}

function qi(n) {
  const t = [],
    e = n.length;
  for (let r = 0; r < e; r++) try {
    n[r]()
  } catch (o) {
    t.push(o.message)
  }
  return t
}

function $i() {
  try {
    return {
      errors: qi([() => new Function('alert(")')(), () => new Function("const foo;foo.bar")(), () => new Function("null.bar")(), () => new Function("abc.xyz = 123")(), () => new Function("const foo;foo.bar")(), () => new Function("(1).toString(1000)")(), () => new Function("[...undefined].length")(), () => new Function("var x = new Array(-1)")(), () => new Function("const a=1; const a=2;")()])
    }
  } catch (n) {
    re(n);
    return
  }
}

function Ki(n, t) {
  if (!n || !t || !t.length) return !1;
  const e = t.reduce((i, s) => (i[s] = !0, i), {}),
    r = "Cambria Math" in e || "Nirmala UI" in e || "Leelawadee UI" in e || "HoloLens MDL2 Assets" in e || "Segoe Fluent Icons" in e,
    o = "Helvetica Neue" in e || "Luminari" in e || "PingFang HK Light" in e || "InaiMathi Bold" in e || "Galvji" in e || "Chakra Petch" in e,
    a = "Arimo" in e || "MONO" in e || "Ubuntu" in e || "Noto Color Emoji" in e || "Dancing Script" in e || "Droid Sans Mono" in e;
  return r && n != Ae.WINDOWS || o && n != Ae.APPLE ? !0 : !!(a && n != Ae.LINUX)
}

function Xi(n, t, e) {
  var r;
  return n ? ((r = n.parentNode) == null || r.replaceChild(t, n), !0) : null
}

function Yi(n, ...t) {
  const e = document.createElement("template");
  return e.innerHTML = n.map((r, o) => `${r}${t[o]||""}`).join(""), document.importNode(e.content, !0)
}
const Nn = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  kn = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  an = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  Ji = Object.keys(kn).map(n => kn[n]).flat(),
  Qi = Object.keys(Nn).map(n => Nn[n]).flat(),
  Zi = Object.keys(an).map(n => an[n]).flat(),
  es = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  ts = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  ns = [...Ji, ...Qi, ...es, ...ts, ...Zi].sort();
async function rs() {
  const n = ({
      doc: o,
      id: a,
      emojis: i
    }) => {
      try {
        Xi(o.getElementById(a), Yi`
				<div id="pixel-emoji-container">
				<style>
					.pixel-emoji {
						font-family: ${In};
						font-size: 200px !important;
						height: auto;
						position: absolute !important;
						transform: scale(1.000999);
					}
					</style>
					${i.map(d=>`<div class="pixel-emoji">${d}</div>`).join("")}
				</div>
			`);
        const s = d => ({
            width: d.inlineSize,
            height: d.blockSize
          }),
          u = new Set,
          l = [...o.getElementsByClassName("pixel-emoji")].reduce((d, g, h) => {
            const w = getComputedStyle(g),
              k = i[h],
              {
                height: T,
                width: R
              } = s(w),
              S = `${R},${T}`;
            return u.has(S) || (u.add(S), d.add(k)), d
          }, new Set),
          p = d => +d.replace("px", ""),
          f = 1e-5 * [...u].map(d => d.split(",").map(g => p(g)).reduce((g, h) => g += +h || 0, 0)).reduce((d, g) => d += g, 0);
        return o.body.removeChild(o.getElementById("pixel-emoji-container")), {
          emojiSet: [...l],
          pixelSizeSystemSum: f
        }
      } catch {
        return {
          emojiSet: [],
          pixelSizeSystemSum: 0
        }
      }
    },
    t = async o => {
      try {
        let a = [];
        document.fonts.check(`0px "${fn()}"`) || (a = o.reduce((_, l) => (document.fonts.check(`0px "${l}"`) && _.push(l), _), []));
        const i = o.map(_ => new FontFace(_, `local("${_}")`)),
          u = (await Promise.allSettled(i.map(_ => _.load()))).reduce((_, l) => (l.status == "fulfilled" && _.push(l.value.family), _), []);
        return [...new Set([...a, ...u])].sort()
      } catch {
        return []
      }
    }, e = o => {
      const a = ({
          fonts: s,
          fontMap: u
        }) => {
          const _ = {
              11: u[11].find(d => s.includes(d)),
              10: u[10].find(d => s.includes(d)),
              "8.1": u["8.1"].find(d => s.includes(d)),
              8: u[8].find(d => s.includes(d)),
              7: u[7].filter(d => s.includes(d)).length == u[7].length
            },
            l = "" + Object.keys(_).sort().filter(d => !!_[d]),
            f = {
              "10,11,7,8,8.1": "11",
              "10,7,8,8.1": "10",
              "7,8,8.1": "8.1",
              "11,7,8,8.1": "8.1",
              "7,8": "8",
              "10,7,8": "8",
              "10,11,7,8": "8",
              7: "7",
              "7,8.1": "7",
              "10,7,8.1": "7",
              "10,11,7,8.1": "7"
            } [l];
          return f ? `Windows ${f}` : void 0
        },
        i = ({
          fonts: s,
          fontMap: u
        }) => {
          const _ = {
              13: u[13].find(d => s.includes(d)),
              12: u[12].find(d => s.includes(d)),
              "10.15-11": u["10.15-11"].find(d => s.includes(d)),
              "10.13-10.14": u["10.13-10.14"].find(d => s.includes(d)),
              "10.12": u["10.12"].find(d => s.includes(d)),
              "10.11": u["10.11"].find(d => s.includes(d)),
              "10.10": u["10.10"].find(d => s.includes(d)),
              "10.9": u["10.9"].filter(d => s.includes(d)).length == u["10.9"].length
            },
            l = "" + Object.keys(_).sort().filter(d => !!_[d]),
            f = {
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9,12,13": "Ventura",
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9,12": "Monterey",
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9": "10.15-11",
              "10.10,10.11,10.12,10.13-10.14,10.9": "10.13-10.14",
              "10.10,10.11,10.12,10.9": "Sierra",
              "10.10,10.11,10.9": "El Capitan",
              "10.10,10.9": "Yosemite",
              "10.9": "Mavericks"
            } [l];
          return f ? `macOS ${f}` : void 0
        };
      return a({
        fonts: o,
        fontMap: Nn
      }) || i({
        fonts: o,
        fontMap: kn
      })
    }, r = o => Object.keys(an).reduce((i, s) => {
      const u = an[s];
      return u.filter(l => o.includes(l)).length == u.length ? [...i, s] : i
    }, []);
  try {
    await se();
    const o = mn(),
      a = Ge(),
      i = o && o.document && o.document.body ? o.document : document,
      s = "font-fingerprint",
      u = i.createElement("div");
    u.setAttribute("id", s), i.body.appendChild(u);
    const {
      emojiSet: _,
      pixelSizeSystemSum: l
    } = n({
      doc: i,
      id: s,
      emojis: qr
    }) || {}, f = await t(ns), d = e(f), g = r(f), h = a["FontFace.load"] || a["FontFace.family"] || a["FontFace.status"] || a["String.fromCodePoint"] || a["CSSStyleDeclaration.setProperty"] || a["CSS2Properties.setProperty"] || !1;
    return Ki(rn, f) && (ke.FONTS = !0, Fe.FontOsIsBad = !0, ae("platform", `${rn} system and fonts are uncommon`)), {
      fontFaceLoadFonts: f,
      platformVersion: d,
      apps: g,
      emojiSet: _,
      pixelSizeSystemSum: l,
      lied: h
    }
  } catch (o) {
    re(o);
    return
  }
}
const W = n => {
    const t = `${JSON.stringify(n)}`;
    return ("0000000" + (t.split("").reduce((r, o, a) => Math.imul(31, r) + t.charCodeAt(a) | 0, 2166136261) >>> 0).toString(16)).substr(-8)
  },
  os = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var _e = (n => (n.WINDOWS = "Windows", n.MAC = "Mac", n.LINUX = "Linux", n.ANDROID = "Android", n.CHROME_OS = "Chrome OS", n))(_e || {});
const as = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function is() {
  var v;
  if (!ue) return [];
  const n = "getVideoPlaybackQuality" in HTMLVideoElement.prototype,
    t = CSS.supports("color-scheme: initial"),
    e = CSS.supports("appearance: initial"),
    r = "DisplayNames" in Intl,
    o = CSS.supports("aspect-ratio: initial"),
    a = CSS.supports("border-end-end-radius: initial"),
    i = "randomUUID" in Crypto.prototype,
    s = "BarcodeDetector" in window,
    u = "downlinkMax" in (((v = window.NetworkInformation) == null ? void 0 : v.prototype) || {}),
    _ = "ContentIndex" in window,
    l = "ContactsManager" in window,
    p = "EyeDropper" in window,
    f = "FileSystemWritableFileStream" in window,
    d = "HID" in window && "HIDDevice" in window,
    g = "SerialPort" in window && "Serial" in window,
    h = "SharedWorker" in window,
    w = "ontouchstart" in Window && "TouchEvent" in window,
    k = "setAppBadge" in Navigator.prototype,
    T = (E, D) => E ? [D] : [],
    R = {
      [_e.ANDROID]: [...T(o, s), ...T(e, _), ...T(n, l), u, ...T(i, !p), ...T(r, !f), ...T(a, !d), ...T(a, !g), !h, w, ...T(t, !k)],
      [_e.CHROME_OS]: [...T(o, s), ...T(e, !_), ...T(n, !l), u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, w || !w, ...T(t, !k)],
      [_e.WINDOWS]: [...T(o, !s), ...T(e, !_), ...T(n, !l), !u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, w || !w, ...T(t, k)],
      [_e.MAC]: [...T(o, s), ...T(e, !_), ...T(n, !l), !u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, !w, ...T(t, k)],
      [_e.LINUX]: [...T(o, !s), ...T(e, !_), ...T(n, !l), !u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, !w || !w, ...T(t, !k)]
    },
    S = {
      noContentIndex: e && !_,
      noContactsManager: n && !l,
      noDownlinkMax: !u
    },
    N = Object.keys(R).reduce((E, D) => {
      const B = R[D],
        x = +(B.filter(L => L).length / B.length).toFixed(2);
      return E[D] = x, E
    }, {}),
    O = Object.keys(N).reduce((E, D) => N[E] > N[D] ? E : D),
    b = N[O];
  return [N, b, S]
}
const sr = {
  "-apple-system": _e.MAC,
  "Segoe UI": _e.WINDOWS,
  Tahoma: _e.WINDOWS,
  "Yu Gothic UI": _e.WINDOWS,
  "Microsoft JhengHei UI": _e.WINDOWS,
  "Microsoft YaHei UI": _e.WINDOWS,
  "Meiryo UI": _e.WINDOWS,
  Cantarell: _e.LINUX,
  Ubuntu: _e.LINUX,
  Sans: _e.LINUX,
  "sans-serif": _e.LINUX,
  "Fira Sans": _e.LINUX,
  Roboto: _e.ANDROID
};

function ss() {
  const {
    body: n
  } = document, t = document.createElement("div");
  n.appendChild(t);
  try {
    const e = String([...as.reduce((o, a) => (t.setAttribute("style", `font: ${a} !important`), o.add(getComputedStyle(t).fontFamily)), new Set)]),
      r = sr[e];
    return sr[e] ? `${e}:${r}` : e
  } catch {
    return ""
  } finally {
    n.removeChild(t)
  }
}
async function cs({
  webgl: n
}) {
  var t, e;
  try {
    await se();
    const r = Ge(),
      o = Jr(),
      a = Object.keys({
        ...navigator.mimeTypes
      }),
      i = ss(),
      [s, u, _] = is(),
      l = {
        chromium: ue,
        likeHeadless: {
          noChrome: ue && !("chrome" in window),
          hasPermissionsBug: ue && "permissions" in navigator && await (async () => (await navigator.permissions.query({
            name: "notifications"
          })).state == "prompt" && "Notification" in window && Notification.permission === "denied")(),
          noPlugins: ue && navigator.plugins.length === 0,
          noMimeTypes: ue && a.length === 0,
          notificationIsDenied: ue && "Notification" in window && Notification.permission == "denied",
          hasKnownBgColor: ue && (() => {
            let S = o;
            if (o || (S = document.createElement("div"), document.body.appendChild(S)), !S) return !1;
            S.setAttribute("style", "background-color: ActiveText");
            const {
              backgroundColor: N
            } = getComputedStyle(S) || {};
            return o || document.body.removeChild(S), N === "rgb(255, 0, 0)"
          })(),
          prefersLightColor: !!((t = matchMedia("(prefers-color-scheme: light)")) != null && t.matches),
          uaDataIsBlank: "userAgentData" in navigator && (((e = navigator.userAgentData) == null ? void 0 : e.platform) === "" || await navigator.userAgentData.getHighEntropyValues(["platform"]).platform === ""),
          pdfIsDisabled: "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !1,
          noTaskbar: screen.height === screen.availHeight && screen.width === screen.availWidth,
          hasVvpScreenRes: innerWidth === screen.width && outerHeight === screen.height || "visualViewport" in window && visualViewport !== null && visualViewport.width === screen.width && visualViewport.height === screen.height,
          hasSwiftShader: /SwiftShader/.test(""),
          noWebShare: ue && CSS.supports("accent-color: initial") && (!("share" in navigator) || !("canShare" in navigator)),
          noContentIndex: !!(_ != null && _.noContentIndex),
          noContactsManager: !!(_ != null && _.noContactsManager),
          noDownlinkMax: !!(_ != null && _.noDownlinkMax)
        },
        headless: {
          webDriverIsOn: CSS.supports("border-end-end-radius: initial") && navigator.webdriver === void 0 || !!navigator.webdriver || !!r["Navigator.webdriver"],
          hasHeadlessUA: /HeadlessChrome/.test(navigator.userAgent) || /HeadlessChrome/.test(navigator.appVersion),
          hasHeadlessWorkerUA: /HeadlessChrome/.test(navigator.userAgent)
        },
        stealth: {
          hasIframeProxy: (() => {
            try {
              const S = document.createElement("iframe");
              return S.srcdoc = os, !!S.contentWindow
            } catch {
              return !0
            }
          })(),
          hasHighChromeIndex: (() => {
            const S = "chrome";
            return Object.keys(window).slice(-50).includes(S) && Object.getOwnPropertyNames(window).slice(-50).includes(S)
          })(),
          hasBadChromeRuntime: (() => {
            var S;
            if (!("chrome" in window && "runtime" in chrome)) return !1;
            try {
              return "prototype" in chrome.runtime.sendMessage || "prototype" in chrome.runtime.connect || (new chrome.runtime.sendMessage, new chrome.runtime.connect), !0
            } catch (N) {
              return ((S = N == null ? void 0 : N.constructor) == null ? void 0 : S.name) != "TypeError"
            }
          })(),
          hasToStringProxy: !!r["Function.toString"],
          hasBadWebGL: !1
        }
      },
      {
        likeHeadless: p,
        headless: f,
        stealth: d
      } = l,
      g = Object.keys(p),
      h = Object.keys(f),
      w = Object.keys(d),
      k = +(g.filter(S => p[S]).length / g.length * 100).toFixed(0),
      T = +(h.filter(S => f[S]).length / h.length * 100).toFixed(0),
      R = +(w.filter(S => d[S]).length / w.length * 100).toFixed(0);
    return {
      ...l,
      likeHeadlessRating: k,
      headlessRating: T,
      stealthRating: R,
      systemFonts: i,
      platformEstimate: [s, u]
    }
  } catch (r) {
    re(r);
    return
  }
}
async function us() {
  const n = t => {
    const r = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"].reduce((o, a) => {
      try {
        const i = new t[a];
        if (!i) return o;
        const {
          locale: s
        } = i.resolvedOptions() || {};
        return [...o, s]
      } catch {
        return o
      }
    }, []);
    return [...new Set(r)]
  };
  try {
    await se();
    const t = Ge(),
      e = t["Intl.Collator.resolvedOptions"] || t["Intl.DateTimeFormat.resolvedOptions"] || t["Intl.DisplayNames.resolvedOptions"] || t["Intl.ListFormat.resolvedOptions"] || t["Intl.NumberFormat.resolvedOptions"] || t["Intl.PluralRules.resolvedOptions"] || t["Intl.RelativeTimeFormat.resolvedOptions"] || !1,
      r = be(() => new Intl.DateTimeFormat(void 0, {
        month: "long",
        timeZoneName: "long"
      }).format(9636444e5)),
      o = be(() => new Intl.DisplayNames(void 0, {
        type: "language"
      }).of("en-US")),
      a = be(() => new Intl.ListFormat(void 0, {
        style: "long",
        type: "disjunction"
      }).format(["0", "1"])),
      i = be(() => new Intl.NumberFormat(void 0, {
        notation: "compact",
        compactDisplay: "long"
      }).format(21e6)),
      s = be(() => new Intl.PluralRules().select(1)),
      u = be(() => new Intl.RelativeTimeFormat(void 0, {
        localeMatcher: "best fit",
        numeric: "auto",
        style: "long"
      }).format(1, "year")),
      _ = n(Intl);
    return {
      dateTimeFormat: r,
      displayNames: o,
      listFormat: a,
      numberFormat: i,
      pluralRules: s,
      relativeTimeFormat: u,
      locale: "" + _,
      lied: e
    }
  } catch (t) {
    re(t);
    return
  }
}
const ls = () => ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"].sort();
async function ds() {
  const n = () => {
    try {
      const t = ls(),
        e = document.createElement("video"),
        r = new Audio,
        o = "MediaRecorder" in window;
      return t.reduce((i, s) => {
        const u = {
          mimeType: s,
          audioPlayType: r.canPlayType(s),
          videoPlayType: e.canPlayType(s),
          mediaSource: MediaSource.isTypeSupported(s),
          mediaRecorder: o ? MediaRecorder.isTypeSupported(s) : !1
        };
        return !u.audioPlayType && !u.videoPlayType && !u.mediaSource && !u.mediaRecorder || i.push(u), i
      }, [])
    } catch {
      return
    }
  };
  try {
    return {
      mimeTypes: n()
    }
  } catch (t) {
    re(t);
    return
  }
}
async function _s(n) {
  try {
    await se();
    const t = Ge();
    let e = t["Navigator.appVersion"] || t["Navigator.deviceMemory"] || t["Navigator.doNotTrack"] || t["Navigator.hardwareConcurrency"] || t["Navigator.language"] || t["Navigator.languages"] || t["Navigator.maxTouchPoints"] || t["Navigator.oscpu"] || t["Navigator.platform"] || t["Navigator.userAgent"] || t["Navigator.vendor"] || t["Navigator.plugins"] || t["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      o = I(async () => {
        const l = be(() => navigator.userAgent),
          p = Dn(l),
          f = await jr();
        return Wr({
          ua: l,
          os: p,
          isBrave: f
        })
      }),
      a = {
        platform: I(() => {
          const {
            platform: l
          } = navigator, p = ["win", "linux", "mac", "arm", "pike", "linux", "iphone", "ipad", "ipod", "android", "x11"], f = typeof l == "string" ? l.toLowerCase() : "";
          return !!f && p.some(g => f.includes(g)) || ae("platform", `${l} is unusual`), rn !== er && (e = !0, te("Navigator.platform", `${er} platform and ${rn} user agent do not match`)), n && l != n.platform && (e = !0), l
        }),
        system: I(() => Dn(navigator.userAgent), "userAgent system failed"),
        device: I(() => Vr({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: I(() => {
          const {
            userAgent: l
          } = navigator;
          return r || ae("userAgent", `${l} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(l) && ae("userAgent", "extra spaces detected"), Qt(l).length && ae("userAgent is gibberish", l), n && l != n.userAgent && (e = !0), l.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: zr((navigator || {}).userAgent),
        appVersion: I(() => {
          const {
            appVersion: l
          } = navigator;
          return r || ae("appVersion", `${l} does not match userAgent`), "appVersion" in navigator && !l && ae("appVersion", "Living Standard property returned falsy value"), /\s{2,}|^\s|\s$/g.test(l) && ae("appVersion", "extra spaces detected"), l.trim().replace(/\s{2,}/, " ")
        }, "appVersion failed"),
        deviceMemory: I(() => {
          var g;
          if (!("deviceMemory" in navigator)) return;
          const {
            deviceMemory: l
          } = navigator;
          ({
            "0.25": !0,
            "0.5": !0,
            1: !0,
            2: !0,
            4: !0,
            8: !0,
            16: !0,
            32: !0
          })[String(l)] || ae("deviceMemory", `${l} is not a valid value [0.25, 0.5, 1, 2, 4, 8, 16, 32]`);
          const f = ((g = performance == null ? void 0 : performance.memory) == null ? void 0 : g.jsHeapSizeLimit) || null,
            d = f ? +(f / 1073741824).toFixed(1) : 0;
          return d > l && ae("deviceMemory", `available memory ${d}GB is greater than device memory ${l}GB`), n && l !== n.deviceMemory && (e = !0), l
        }, "deviceMemory failed"),
        doNotTrack: I(() => {
          const {
            doNotTrack: l
          } = navigator;
          return {
            1: !0,
            true: !0,
            yes: !0,
            0: !0,
            false: !0,
            no: !0,
            unspecified: !0,
            null: !0,
            undefined: !0
          } [String(l)] || ae("doNotTrack - unusual result", l), l
        }, "doNotTrack failed"),
        globalPrivacyControl: I(() => {
          if (!("globalPrivacyControl" in navigator)) return;
          const {
            globalPrivacyControl: l
          } = navigator;
          return {
            1: !0,
            true: !0,
            yes: !0,
            0: !0,
            false: !0,
            no: !0,
            unspecified: !0,
            null: !0,
            undefined: !0
          } [String(l)] || ae("globalPrivacyControl - unusual result", l), l
        }, "globalPrivacyControl failed"),
        hardwareConcurrency: I(() => {
          if (!("hardwareConcurrency" in navigator)) return;
          const {
            hardwareConcurrency: l
          } = navigator;
          return n && l !== n.hardwareConcurrency && (e = !0), l
        }, "hardwareConcurrency failed"),
        language: I(() => {
          const {
            language: l,
            languages: p
          } = navigator;
          if (l && p) {
            const f = (/^.{0,2}/g.exec(l) ?? [""])[0];
            if ((/^.{0,2}/g.exec(p[0]) ?? [""])[0] != f && ae("language/languages", `${[l,p].join(" ")} mismatch`), n) {
              l != n.language && (e = !0, te("Navigator.language", `${l} does not match worker scope`));
              const g = p.join(",");
              g !== n.languages.join(",") && (e = !0, te("Navigator.languages", `${g} does not match worker scope`))
            }
            return `${p.join(", ")} (${l})`
          }
          return `${l} ${p}`
        }, "language(s) failed"),
        maxTouchPoints: I(() => "maxTouchPoints" in navigator ? navigator.maxTouchPoints : null, "maxTouchPoints failed"),
        vendor: I(() => navigator.vendor, "vendor failed"),
        mimeTypes: I(() => {
          const {
            mimeTypes: l
          } = navigator;
          return l ? [...l].map(p => p.type) : []
        }, "mimeTypes failed"),
        oscpu: I(() => navigator.oscpu, "oscpu failed"),
        plugins: I(() => {
          const {
            plugins: l
          } = navigator;
          if (!(l instanceof PluginArray)) return;
          const p = l ? [...l].map(f => ({
            name: f.name,
            description: f.description,
            filename: f.filename,
            version: f.version
          })) : [];
          return p.length && p.forEach(f => {
            const {
              name: d,
              description: g
            } = f, h = Qt(d), w = Qt(g);
            h.length && ae("plugin name is gibberish", d), w.length && ae("plugin description is gibberish", g)
          }), p
        }, "plugins failed"),
        properties: I(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: fs(),
        privateClickMeasurement: ps(),
        pdfViewerEnabled: ms()
      },
      i = () => I(() => {
        const l = navigator;
        if (!(!l.userAgentData || !l.userAgentData.getHighEntropyValues)) return l.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(p => {
          const {
            brands: f,
            mobile: d
          } = l.userAgentData || {}, g = (k, T = !1) => k.filter(R => !/Not/.test(R.brand)).map(R => `${R.brand}${T?` ${R.version}`:""}`), h = k => k.length > 1 ? k.filter(T => !/Chromium/.test(T)) : k;
          return p.brands || (p.brands = f), p.brandsVersion = g(p.brands ?? [], !0), p.brands = g(p.brands ?? []), p.brandsVersion = h(p.brandsVersion ?? []), p.brands = h(p.brands ?? []), p.mobile || (p.mobile = d), Object.keys(p).sort().reduce((k, T) => (k[T] = p[T], k), {})
        })
      }, "userAgentData failed"),
      s = () => I(() => {
        const l = navigator;
        if (!(!("bluetooth" in navigator) || !l.bluetooth || !l.bluetooth.getAvailability)) return l.bluetooth.getAvailability()
      }, "bluetoothAvailability failed"),
      u = () => I(() => {
        const l = f => navigator.permissions.query({
          name: f
        }).then(d => ({
          name: f,
          state: d.state
        })).catch(() => ({
          name: f,
          state: "unknown"
        }));
        return "permissions" in navigator ? Promise.all([l("accelerometer"), l("ambient-light-sensor"), l("background-fetch"), l("background-sync"), l("bluetooth"), l("camera"), l("clipboard"), l("device-info"), l("display-capture"), l("gamepad"), l("geolocation"), l("gyroscope"), l("magnetometer"), l("microphone"), l("midi"), l("nfc"), l("notifications"), l("persistent-storage"), l("push"), l("screen-wake-lock"), l("speaker"), l("speaker-selection")]).then(f => f.reduce((d, g) => {
          const {
            state: h,
            name: w
          } = g || {};
          return d[h] ? (d[h].push(w), d) : (d[h] = [w], d)
        }, {})).catch(() => {}) : void 0
      }, "permissions failed"),
      _ = () => I(() => {
        const l = navigator.gpu;
        if (l) return l.requestAdapter().then(p => {
          if (!p) return;
          const {
            limits: f,
            features: d
          } = p, g = w => {
            const {
              architecture: k,
              description: T,
              device: R,
              vendor: S
            } = w, N = [S, k, T, R], O = [...(d == null ? void 0 : d.values()) ?? []], b = (v => {
              const E = {};
              for (const D in v) E[D] = v[D];
              return E
            })(f);
            return Fe.webGpuAdapter = N, Fe.webGpuFeatures = O, Fe.webGpuLimits = W(b), {
              adapterInfo: N,
              limits: b
            }
          }, {
            info: h
          } = p;
          return h ? g(h) : p.requestAdapterInfo ? p.requestAdapterInfo().then(g) : void 0
        })
      }, "webgpu failed");
    return await se(), Promise.all([o, i(), s(), u(), _()]).then(([l, p, f, d, g]) => ({
      ...a,
      userAgentParsed: l,
      userAgentData: p,
      bluetoothAvailability: f,
      permissions: d,
      webgpu: g,
      lied: e
    })).catch(() => ({
      ...a,
      userAgentParsed: void 0,
      userAgentData: void 0,
      bluetoothAvailability: void 0,
      permissions: void 0,
      webgpu: void 0,
      lied: e
    }))
  } catch (t) {
    re(t, "Navigator failed or blocked by client");
    return
  }
}

function fs() {
  const t = window.ApplePaySession;
  if (typeof t != "function" || typeof t.canMakePayments != "function") return -1;
  try {
    return t.canMakePayments() ? 1 : 0
  } catch (e) {
    const r = (e == null ? void 0 : e.message) ?? "";
    return r.includes("disabled in this insecure context") ? 2 : r.includes("Trying to start an Apple Pay session") ? 0 : -1
  }
}

function ps() {
  const n = document.createElement("a");
  try {
    const t = n.attributionSourceId ?? n.attributionsourceid;
    return t == null ? void 0 : String(t)
  } catch (t) {
    re(t);
    return
  } finally {
    n.remove()
  }
}

function ms() {
  try {
    const n = navigator.pdfViewerEnabled;
    return typeof n == "boolean" ? n : void 0
  } catch (n) {
    re(n);
    return
  }
}
const ce = "c767712b",
  hs = {
    noscript: {
      contentDocumentHash: ["0b637a33", "37e2f32e", "318390d1"],
      contentWindowHash: ["0b637a33", "37e2f32e", "318390d1"],
      getContextHash: ["0b637a33", "081d6d1b", ce]
    },
    trace: {
      contentDocumentHash: ["ca9d9c2f"],
      contentWindowHash: ["ca9d9c2f"],
      createElementHash: ["77dea834"],
      getElementByIdHash: ["77dea834"],
      getImageDataHash: ["77dea834"],
      toBlobHash: ["77dea834", ce],
      toDataURLHash: ["77dea834", ce]
    },
    cydec: {
      contentDocumentHash: ["945b0c78", "15771efa", "403a1a21", "55e9b959"],
      contentWindowHash: ["945b0c78", "15771efa", "403a1a21", "55e9b959"],
      createElementHash: ["3dd86d6f", "cc7cb598", "4237b44c", "1466aaf0", "0cb0c682", "73c662d9", "72b1ee2b", "ae3d02c9"],
      getElementByIdHash: ["3dd86d6f", "cc7cb598", "4237b44c", "1466aaf0", "0cb0c682", "73c662d9", "72b1ee2b", "ae3d02c9"],
      getImageDataHash: ["044f14c2", "db60d7f9", "15771efa", "db60d7f9", "55e9b959"],
      toBlobHash: ["044f14c2", "15771efa", "afec348d", "55e9b959", "0dbbf456"],
      toDataURLHash: ["ecb498d9", "15771efa", "6b838fb6", "d19104ec", "6985d315", "55e9b959", "fe88259f"]
    },
    canvasblocker: {
      contentDocumentHash: ["98ec858e", "dbbaf31f"],
      contentWindowHash: ["98ec858e", "dbbaf31f"],
      appendHash: ["98ec858e", "dbbaf31f"],
      getImageDataHash: ["98ec858e", "a2971888", "dbbaf31f", ce],
      toBlobHash: ["9f1c3dfe", "a2971888", "dbbaf31f", ce],
      toDataURLHash: ["98ec858e", "a2971888", "dbbaf31f", ce]
    },
    chameleon: {
      appendHash: ["77dea834"],
      insertAdjacentElementHash: ["77dea834"],
      insertAdjacentHTMLHash: ["77dea834"],
      insertAdjacentTextHash: ["77dea834"],
      prependHash: ["77dea834"],
      replaceWithHash: ["77dea834"],
      appendChildHash: ["77dea834"],
      insertBeforeHash: ["77dea834"],
      replaceChildHash: ["77dea834"]
    },
    duckduckgo: {
      toDataURLHash: ["fd00bf5d", "8ee7df22", ce],
      toBlobHash: ["fd00bf5d", "8ee7df22", ce],
      getImageDataHash: ["fd00bf5d", "8ee7df22", ce],
      getByteFrequencyDataHash: ["fd00bf5d", "8ee7df22", ce],
      getByteTimeDomainDataHash: ["fd00bf5d", "8ee7df22", ce],
      getFloatFrequencyDataHash: ["fd00bf5d", "8ee7df22", ce],
      getFloatTimeDomainDataHash: ["fd00bf5d", "8ee7df22", ce],
      copyFromChannelHash: ["fd00bf5d", "8ee7df22", ce],
      getChannelDataHash: ["fd00bf5d", "8ee7df22", ce],
      hardwareConcurrencyHash: ["dfd41ab4"],
      availHeightHash: ["dfd41ab4"],
      availLeftHash: ["dfd41ab4"],
      availTopHash: ["dfd41ab4"],
      availWidthHash: ["dfd41ab4"],
      colorDepthHash: ["dfd41ab4"],
      pixelDepthHash: ["dfd41ab4"]
    },
    privacybadger: {
      getImageDataHash: ["0cb0c682"],
      toDataURLHash: ["0cb0c682"]
    },
    privacypossum: {
      hardwareConcurrencyHash: ["452924d5"],
      availWidthHash: ["452924d5"],
      colorDepthHash: ["452924d5"]
    },
    jshelter: {
      contentDocumentHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      contentWindowHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      appendHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      insertAdjacentElementHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      insertAdjacentHTMLHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      prependHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      replaceWithHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      appendChildHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      insertBeforeHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      replaceChildHash: ["0007ab4e", "0b637a33", "866fa7e7", "318390d1"],
      hardwareConcurrencyHash: ["dfd41ab4"]
    },
    puppeteerExtra: {
      contentDocumentHash: ["55e9b959"],
      contentWindowHash: ["55e9b959", "50a281b5"],
      createElementHash: ["55e9b959"],
      getElementByIdHash: ["55e9b959"],
      appendHash: ["55e9b959"],
      insertAdjacentElementHash: ["55e9b959"],
      insertAdjacentHTMLHash: ["55e9b959"],
      insertAdjacentTextHash: ["55e9b959"],
      prependHash: ["55e9b959"],
      replaceWithHash: ["55e9b959"],
      appendChildHash: ["55e9b959"],
      insertBeforeHash: ["55e9b959"],
      replaceChildHash: ["55e9b959"],
      getContextHash: ["55e9b959", ce],
      toDataURLHash: ["55e9b959", ce],
      toBlobHash: ["55e9b959", ce],
      getImageDataHash: ["55e9b959"],
      hardwareConcurrencyHash: ["efbd4cf9", "a63491fb", "b011fd1c", "194ecf17", "55e9b959"]
    },
    fakeBrowser: {
      appendChildHash: ["8dfec2ec", "f43e6134"],
      getContextHash: ["83b825ab", "a63491fb"],
      toDataURLHash: ["83b825ab", "a63491fb"],
      toBlobHash: ["83b825ab", "a63491fb"],
      getImageDataHash: ["83b825ab", "a63491fb"],
      hardwareConcurrencyHash: ["83b825ab", "a63491fb"],
      availHeightHash: ["83b825ab", "a63491fb"],
      availLeftHash: ["83b825ab", "a63491fb"],
      availTopHash: ["83b825ab", "a63491fb"],
      availWidthHash: ["83b825ab", "a63491fb"],
      colorDepthHash: ["83b825ab", "a63491fb"],
      pixelDepthHash: ["83b825ab", "a63491fb"]
    }
  },
  {
    noscript: wn,
    trace: ze,
    cydec: qe,
    canvasblocker: rt,
    chameleon: xe,
    duckduckgo: we,
    privacybadger: cr,
    privacypossum: bn,
    jshelter: Ie,
    puppeteerExtra: le,
    fakeBrowser: Se
  } = hs;

function gs(n, t) {
  if (t) {
    if (t >= 7 && ze.contentDocumentHash.includes(n.contentDocumentHash) && ze.contentWindowHash.includes(n.contentWindowHash) && ze.createElementHash.includes(n.createElementHash) && ze.getElementByIdHash.includes(n.getElementByIdHash) && ze.toDataURLHash.includes(n.toDataURLHash) && ze.toBlobHash.includes(n.toBlobHash) && ze.getImageDataHash.includes(n.getImageDataHash)) return "Trace";
    if (t >= 7 && qe.contentDocumentHash.includes(n.contentDocumentHash) && qe.contentWindowHash.includes(n.contentWindowHash) && qe.createElementHash.includes(n.createElementHash) && qe.getElementByIdHash.includes(n.getElementByIdHash) && qe.toDataURLHash.includes(n.toDataURLHash) && qe.toBlobHash.includes(n.toBlobHash) && qe.getImageDataHash.includes(n.getImageDataHash)) return "CyDec";
    if (t >= 6 && rt.contentDocumentHash.includes(n.contentDocumentHash) && rt.contentWindowHash.includes(n.contentWindowHash) && rt.appendHash.includes(n.appendHash) && rt.toDataURLHash.includes(n.toDataURLHash) && rt.toBlobHash.includes(n.toBlobHash) && rt.getImageDataHash.includes(n.getImageDataHash)) return "CanvasBlocker";
    if (t >= 9 && xe.appendHash.includes(n.appendHash) && xe.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && xe.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && xe.insertAdjacentTextHash.includes(n.insertAdjacentTextHash) && xe.prependHash.includes(n.prependHash) && xe.replaceWithHash.includes(n.replaceWithHash) && xe.appendChildHash.includes(n.appendChildHash) && xe.insertBeforeHash.includes(n.insertBeforeHash) && xe.replaceChildHash.includes(n.replaceChildHash)) return "Chameleon";
    if (t >= 7 && we.toDataURLHash.includes(n.toDataURLHash) && we.toBlobHash.includes(n.toBlobHash) && we.getImageDataHash.includes(n.getImageDataHash) && we.getByteFrequencyDataHash.includes(n.getByteFrequencyDataHash) && we.getByteTimeDomainDataHash.includes(n.getByteTimeDomainDataHash) && we.getFloatFrequencyDataHash.includes(n.getFloatFrequencyDataHash) && we.getFloatTimeDomainDataHash.includes(n.getFloatTimeDomainDataHash) && we.copyFromChannelHash.includes(n.copyFromChannelHash) && we.getChannelDataHash.includes(n.getChannelDataHash) && we.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && we.availHeightHash.includes(n.availHeightHash) && we.availLeftHash.includes(n.availLeftHash) && we.availTopHash.includes(n.availTopHash) && we.availWidthHash.includes(n.availWidthHash) && we.colorDepthHash.includes(n.colorDepthHash) && we.pixelDepthHash.includes(n.pixelDepthHash)) return "DuckDuckGo";
    if (t >= 2 && cr.getImageDataHash.includes(n.getImageDataHash) && cr.toDataURLHash.includes(n.toDataURLHash)) return "Privacy Badger";
    if (t >= 3 && bn.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && bn.availWidthHash.includes(n.availWidthHash) && bn.colorDepthHash.includes(n.colorDepthHash)) return "Privacy Possum";
    if (t >= 2 && wn.contentDocumentHash.includes(n.contentDocumentHash) && wn.contentWindowHash.includes(n.contentDocumentHash) && wn.getContextHash.includes(n.getContextHash) && n.hardwareConcurrencyHash == ce) return "NoScript";
    if (t >= 14 && Ie.contentDocumentHash.includes(n.contentDocumentHash) && Ie.contentWindowHash.includes(n.contentDocumentHash) && Ie.appendHash.includes(n.appendHash) && Ie.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && Ie.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && Ie.prependHash.includes(n.prependHash) && Ie.replaceWithHash.includes(n.replaceWithHash) && Ie.appendChildHash.includes(n.appendChildHash) && Ie.insertBeforeHash.includes(n.insertBeforeHash) && Ie.replaceChildHash.includes(n.replaceChildHash) && Ie.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash)) return "JShelter";
    if (t >= 13 && le.contentDocumentHash.includes(n.contentDocumentHash) && le.contentWindowHash.includes(n.contentWindowHash) && le.createElementHash.includes(n.createElementHash) && le.getElementByIdHash.includes(n.getElementByIdHash) && le.appendHash.includes(n.appendHash) && le.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && le.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && le.insertAdjacentTextHash.includes(n.insertAdjacentTextHash) && le.prependHash.includes(n.prependHash) && le.replaceWithHash.includes(n.replaceWithHash) && le.appendChildHash.includes(n.appendChildHash) && le.insertBeforeHash.includes(n.insertBeforeHash) && le.contentDocumentHash.includes(n.contentDocumentHash) && le.replaceChildHash.includes(n.replaceChildHash) && le.getContextHash.includes(n.getContextHash) && le.toDataURLHash.includes(n.toDataURLHash) && le.toBlobHash.includes(n.toBlobHash) && le.getImageDataHash.includes(n.getImageDataHash) && le.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash)) return "puppeteer-extra";
    if (t >= 12 && Se.appendChildHash.includes(n.appendChildHash) && Se.getContextHash.includes(n.getContextHash) && Se.toDataURLHash.includes(n.toDataURLHash) && Se.toBlobHash.includes(n.toBlobHash) && Se.getImageDataHash.includes(n.getImageDataHash) && Se.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && Se.availHeightHash.includes(n.availHeightHash) && Se.availLeftHash.includes(n.availLeftHash) && Se.availTopHash.includes(n.availTopHash) && Se.availWidthHash.includes(n.availWidthHash) && Se.colorDepthHash.includes(n.colorDepthHash) && Se.pixelDepthHash.includes(n.pixelDepthHash)) return "FakeBrowser"
  }
}
async function ys() {
  const n = +new Date,
    t = +("" + n).slice(-1),
    e = new RegExp(`${t}+$`),
    r = (_, l) => new Promise(p => setTimeout(() => {
      const f = l ? n : +new Date,
        d = e.exec("" + f);
      p(d ? d[0] : f)
    }, _)),
    o = await Promise.all([r(0, !0), r(1, !1), r(2, !1), r(3, !1), r(4, !1), r(5, !1), r(6, !1), r(7, !1), r(8, !1), r(9, !1)]),
    a = o.map(_ => "" + _),
    i = a[0].slice(-1),
    s = a.every(_ => _.slice(-1) === i),
    u = a[0].length;
  return {
    protection: s,
    delays: o.map((_, l) => a[l].length > u ? a[l].slice(-u) : _),
    precision: s ? Math.min(...a.map(_ => _.length)) : void 0,
    precisionValue: s ? i : void 0
  }
}
async function ws() {
  try {
    await se();
    const n = Ti(),
      t = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: ue ? "Blink" : wt ? "Gecko" : ""
      },
      [e, r] = await Promise.all([jr(), ue ? void 0 : ys()]);
    if (e) {
      const u = ii();
      t.privacy = "Brave", t.security = {
        FileSystemWritableFileStream: "FileSystemWritableFileStream" in window,
        Serial: "Serial" in window,
        ReportingObserver: "ReportingObserver" in window
      }, t.mode = u.allow ? "allow" : u.standard ? "standard" : u.strict ? "strict" : ""
    }
    const {
      protection: o
    } = r || {};
    if (wt && o) {
      const u = {
          OfflineAudioContext: "OfflineAudioContext" in window,
          WebGL2RenderingContext: "WebGL2RenderingContext" in window,
          WebAssembly: "WebAssembly" in window,
          maxTouchPoints: "maxTouchPoints" in navigator,
          RTCRtpTransceiver: "RTCRtpTransceiver" in window,
          MediaDevices: "MediaDevices" in window,
          Credential: "Credential" in window
        },
        _ = Object.keys(u),
        l = new Set(["RTCRtpTransceiver", "MediaDevices", "Credential"]),
        p = _.filter(d => l.has(d) && !u[d]).length == l.size,
        f = !u.WebAssembly;
      t.privacy = p ? "Tor Browser" : "Firefox", t.security = {
        reduceTimerPrecision: !0,
        ...u
      }, t.mode = p ? f ? "safer" : "standard" : "resistFingerprinting"
    }
    const a = Object.keys(n).length;
    await se();
    const i = {
        contentDocumentHash: W(n["HTMLIFrameElement.contentDocument"]),
        contentWindowHash: W(n["HTMLIFrameElement.contentWindow"]),
        createElementHash: W(n["Document.createElement"]),
        getElementByIdHash: W(n["Document.getElementById"]),
        appendHash: W(n["Element.append"]),
        insertAdjacentElementHash: W(n["Element.insertAdjacentElement"]),
        insertAdjacentHTMLHash: W(n["Element.insertAdjacentHTML"]),
        insertAdjacentTextHash: W(n["Element.insertAdjacentText"]),
        prependHash: W(n["Element.prepend"]),
        replaceWithHash: W(n["Element.replaceWith"]),
        appendChildHash: W(n["Node.appendChild"]),
        insertBeforeHash: W(n["Node.insertBefore"]),
        replaceChildHash: W(n["Node.replaceChild"]),
        getContextHash: W(n["HTMLCanvasElement.getContext"]),
        toDataURLHash: W(n["HTMLCanvasElement.toDataURL"]),
        toBlobHash: W(n["HTMLCanvasElement.toBlob"]),
        getImageDataHash: W(n["CanvasRenderingContext2D.getImageData"]),
        getByteFrequencyDataHash: W(n["AnalyserNode.getByteFrequencyData"]),
        getByteTimeDomainDataHash: W(n["AnalyserNode.getByteTimeDomainData"]),
        getFloatFrequencyDataHash: W(n["AnalyserNode.getFloatFrequencyData"]),
        getFloatTimeDomainDataHash: W(n["AnalyserNode.getFloatTimeDomainData"]),
        copyFromChannelHash: W(n["AudioBuffer.copyFromChannel"]),
        getChannelDataHash: W(n["AudioBuffer.getChannelData"]),
        hardwareConcurrencyHash: W(n["Navigator.hardwareConcurrency"]),
        availHeightHash: W(n["Screen.availHeight"]),
        availLeftHash: W(n["Screen.availLeft"]),
        availTopHash: W(n["Screen.availTop"]),
        availWidthHash: W(n["Screen.availWidth"]),
        colorDepthHash: W(n["Screen.colorDepth"]),
        pixelDepthHash: W(n["Screen.pixelDepth"])
      },
      s = {};
    for (const [u, _] of Object.entries(i)) _ !== ce && (s[u.slice(0, -4)] = _);
    return t.extensionHashPattern = s, t.extension = gs(i, a), t
  } catch (n) {
    re(n);
    return
  }
}

function bs() {
  try {
    return "ontouchstart" in window && !!document.createEvent("TouchEvent")
  } catch {
    return !1
  }
}
let vn;
async function vs() {
  try {
    const n = Ge();
    let t = !!n["Screen.width"] || !!n["Screen.height"] || !!n["Screen.availWidth"] || !!n["Screen.availHeight"] || !!n["Screen.colorDepth"] || !!n["Screen.pixelDepth"] || !1;
    const e = window.screen || {};
    let {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i,
      colorDepth: s,
      pixelDepth: u
    } = e;
    r = Number(r), o = Number(o), a = Number(a), i = Number(i), s = Number(s), u = Number(u), vn ? {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i
    } = vn : vn = {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i
    };
    const _ = g => {
        var h;
        return !!((h = matchMedia(g)) != null && h.matches)
      },
      l = window.devicePixelRatio || 0,
      p = !_(`(resolution: ${l}dppx)`);
    !bt && p && (t = !0, te("Window.devicePixelRatio", "lied dpr"));
    const f = !(r - a || o - i);
    return r > 800 && f && (ke.SCREEN = !0), {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i,
      colorDepth: s,
      pixelDepth: u,
      touch: bs(),
      lied: t
    }
  } catch (n) {
    re(n);
    return
  }
}

function Es() {
  var e;
  const n = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (n) {
    const r = new n().resolvedOptions().timeZone;
    if (r) return r
  }
  const t = -Ts();
  return `UTC${t>=0?"+":""}${t}`
}

function Ts() {
  const n = new Date().getFullYear();
  return Math.max(new Date(n, 0, 1).getTimezoneOffset(), new Date(n, 6, 1).getTimezoneOffset())
}
const Ss = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  Os = {
    EXT_clip_control: ["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "LOWER_LEFT_EXT", "UPPER_LEFT_EXT", "NEGATIVE_ONE_TO_ONE_EXT", "ZERO_TO_ONE_EXT"],
    EXT_color_buffer_half_float: ["RGB16F_EXT", "RGBA16F_EXT", "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", "UNSIGNED_NORMALIZED_EXT"],
    EXT_depth_clamp: ["DEPTH_CLAMP_EXT"],
    EXT_disjoint_timer_query: ["CURRENT_QUERY_EXT", "GPU_DISJOINT_EXT", "QUERY_COUNTER_BITS_EXT", "QUERY_RESULT_AVAILABLE_EXT", "QUERY_RESULT_EXT", "TIMESTAMP_EXT", "TIME_ELAPSED_EXT"],
    EXT_polygon_offset_clamp: ["POLYGON_OFFSET_CLAMP_EXT"],
    EXT_sRGB: ["SRGB8_ALPHA8_EXT", "SRGB_ALPHA_EXT", "SRGB_EXT", "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT"],
    EXT_texture_compression_bptc: ["COMPRESSED_RGBA_BPTC_UNORM_EXT", "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT"],
    EXT_texture_compression_rgtc: ["COMPRESSED_RED_GREEN_RGTC2_EXT", "COMPRESSED_RED_RGTC1_EXT", "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", "COMPRESSED_SIGNED_RED_RGTC1_EXT"],
    EXT_texture_filter_anisotropic: ["MAX_TEXTURE_MAX_ANISOTROPY_EXT", "TEXTURE_MAX_ANISOTROPY_EXT"],
    EXT_texture_mirror_clamp_to_edge: ["MIRROR_CLAMP_TO_EDGE_EXT"],
    KHR_parallel_shader_compile: ["COMPLETION_STATUS_KHR"],
    OES_standard_derivatives: ["FRAGMENT_SHADER_DERIVATIVE_HINT_OES"],
    OES_texture_half_float: ["HALF_FLOAT_OES"],
    OES_vertex_array_object: ["VERTEX_ARRAY_BINDING_OES"],
    WEBGL_blend_func_extended: ["ONE_MINUS_SRC1_ALPHA_WEBGL", "ONE_MINUS_SRC1_COLOR_WEBGL", "SRC1_ALPHA_WEBGL", "SRC1_COLOR_WEBGL", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL"],
    WEBGL_color_buffer_float: ["RGBA32F_EXT"],
    WEBGL_compressed_texture_s3tc: ["COMPRESSED_RGBA_S3TC_DXT1_EXT", "COMPRESSED_RGBA_S3TC_DXT3_EXT", "COMPRESSED_RGBA_S3TC_DXT5_EXT", "COMPRESSED_RGB_S3TC_DXT1_EXT"],
    WEBGL_compressed_texture_s3tc_srgb: ["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", "COMPRESSED_SRGB_S3TC_DXT1_EXT"],
    WEBGL_debug_renderer_info: ["UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL"],
    WEBGL_depth_texture: ["UNSIGNED_INT_24_8_WEBGL"],
    WEBGL_draw_buffers: ["COLOR_ATTACHMENT0_WEBGL", "COLOR_ATTACHMENT1_WEBGL", "COLOR_ATTACHMENT2_WEBGL", "COLOR_ATTACHMENT3_WEBGL", "COLOR_ATTACHMENT4_WEBGL", "COLOR_ATTACHMENT5_WEBGL", "COLOR_ATTACHMENT6_WEBGL", "COLOR_ATTACHMENT7_WEBGL", "COLOR_ATTACHMENT8_WEBGL", "COLOR_ATTACHMENT9_WEBGL", "COLOR_ATTACHMENT10_WEBGL", "COLOR_ATTACHMENT11_WEBGL", "COLOR_ATTACHMENT12_WEBGL", "COLOR_ATTACHMENT13_WEBGL", "COLOR_ATTACHMENT14_WEBGL", "COLOR_ATTACHMENT15_WEBGL", "DRAW_BUFFER0_WEBGL", "DRAW_BUFFER1_WEBGL", "DRAW_BUFFER2_WEBGL", "DRAW_BUFFER3_WEBGL", "DRAW_BUFFER4_WEBGL", "DRAW_BUFFER5_WEBGL", "DRAW_BUFFER6_WEBGL", "DRAW_BUFFER7_WEBGL", "DRAW_BUFFER8_WEBGL", "DRAW_BUFFER9_WEBGL", "DRAW_BUFFER10_WEBGL", "DRAW_BUFFER11_WEBGL", "DRAW_BUFFER12_WEBGL", "DRAW_BUFFER13_WEBGL", "DRAW_BUFFER14_WEBGL", "DRAW_BUFFER15_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"],
    ANGLE_instanced_arrays: ["VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE"],
    EXT_blend_minmax: ["MIN_EXT", "MAX_EXT"]
  },
  As = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  Rs = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]);
async function Ds() {
  var o;
  let n, t, e, r;
  try {
    await se();
    const a = Ge(),
      i = mn(),
      s = a["HTMLCanvasElement.toDataURL"],
      u = a["HTMLCanvasElement.getContext"],
      _ = a["WebGLRenderingContext.getParameter"] || a["WebGL2RenderingContext.getParameter"] || a["WebGLRenderingContext.getExtension"] || a["WebGL2RenderingContext.getExtension"],
      l = s || u || _ || a["WebGLRenderingContext.getSupportedExtensions"] || a["WebGL2RenderingContext.getSupportedExtensions"] || !1;
    let p = window;
    !Fr && i && (p = i);
    const f = p.document;
    "OffscreenCanvas" in window ? (n = new p.OffscreenCanvas(256, 256), t = new p.OffscreenCanvas(256, 256)) : (n = f.createElement("canvas"), t = f.createElement("canvas"));
    const d = lr(n, "webgl"),
      g = lr(t, "webgl2");
    if (e = d, r = g, !d) return;
    const h = (C, M) => {
        if (!C) return;
        const K = I(() => C.getShaderPrecisionFormat(C[M], C.LOW_FLOAT)),
          oe = I(() => C.getShaderPrecisionFormat(C[M], C.MEDIUM_FLOAT)),
          ye = I(() => C.getShaderPrecisionFormat(C[M], C.HIGH_FLOAT)),
          Ee = I(() => C.getShaderPrecisionFormat(C[M], C.HIGH_INT));
        return {
          LOW_FLOAT: K,
          MEDIUM_FLOAT: oe,
          HIGH_FLOAT: ye,
          HIGH_INT: Ee
        }
      },
      w = (C, M) => {
        const K = {};
        if (!M) return K;
        for (const oe in M) {
          const ye = M[oe];
          K[C + "." + oe + ".precision"] = ye ? I(() => ye.precision) : void 0, K[C + "." + oe + ".rangeMax"] = ye ? I(() => ye.rangeMax) : void 0, K[C + "." + oe + ".rangeMin"] = ye ? I(() => ye.rangeMin) : void 0
        }
        return K
      },
      k = C => {
        const M = {};
        if (!C) return M;
        const K = C;
        for (const oe of Ss) {
          const ye = K[oe];
          if (ye === void 0) continue;
          const Ee = C.getParameter(ye);
          Ee && ArrayBuffer.isView(Ee) ? M[oe] = Array.from(Ee) : M[oe] = Ee
        }
        return M
      },
      T = C => {
        if (!C) return [];
        const M = I(() => C.getContextAttributes());
        return M ? Object.keys(M).sort().map(K => `${K}=${M[K]}`) : []
      },
      R = C => {
        if (!C) return [];
        const M = [];
        for (const [K, oe] of Object.entries(Os)) {
          const ye = I(() => C.getExtension(K));
          if (ye)
            for (const Ee of oe) {
              const Ve = ye[Ee];
              if (typeof Ve != "number") continue;
              if (!As.has(Ee)) {
                M.push(`${Ee}=${Ve}`);
                continue
              }
              const Re = I(() => C.getParameter(Ve));
              Re == null ? M.push(`${Ee}=${Ve}`) : typeof Re == "object" && "length" in Re ? M.push(`${Ee}=${Ve}=${Array.from(Re).join(",")}`) : M.push(`${Ee}=${Ve}=${Re}`)
            }
        }
        return M.sort()
      },
      S = C => {
        const M = C ? C.getExtension("WEBGL_debug_renderer_info") : null;
        return !M || !C ? {} : {
          UNMASKED_VENDOR_WEBGL: C.getParameter(M.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: C.getParameter(M.UNMASKED_RENDERER_WEBGL)
        }
      },
      N = C => {
        if (!C) return [];
        const M = I(() => C.getSupportedExtensions());
        return M || []
      };
    await se();
    const O = {
        ...k(d),
        ...S(d)
      },
      b = {
        ...k(g),
        ...S(g)
      },
      v = [];
    for (const C in b) {
      const M = O[C];
      !M || Rs.has(C) || "" + M != "" + b[C] && v.push(C)
    }
    v.length && ae("webgl/webgl2 mirrored params mismatch", v.toString()), await se();
    const E = {
        extensions: [...N(d), ...N(g)],
        contextAttributes: T(d),
        contextAttributes2: T(g),
        extensionParameters: R(d),
        extensionParameters2: R(g),
        parameters: {
          ...O,
          ...b,
          ...w("VERTEX_SHADER", h(d, "VERTEX_SHADER")),
          ...w("FRAGMENT_SHADER", h(d, "FRAGMENT_SHADER"))
        },
        parameterOrExtensionLie: _,
        lied: l
      },
      D = ["00b72507", "00c1b42d", "00fe1ec9", "02b3eea3", "0461d3de", "0463627d", "057857ac", "0586e20b", "0639a81a", "087d5759", "08847ba5", "0b2d4333", "0cdb985d", "0e058699", "0eb2fc19", "0f39d057", "0f840379", "0fc123c7", "101e0582", "12e92e62", "12f8ac14", "1453d59a", "149a1efa", "166dc7c8", "16c481a6", "171831c5", "177cc258", "18579e83", "19594666", "1b251fd7", "1bfd326c", "1e8a9a79", "1ff7c7e7", "2048bc5a", "2259b706", "22d0f2cf", "230d6a0d", "23d1ce20", "2402c3d2", "24306836", "258789d0", "25a760b8", "25f9385d", "27938830", "27db292c", "2b80fd96", "2bb488da", "2c04c2eb", "2d15287f", "2f014c41", "2f582ed9", "300ee927", "33bc5492", "34270469", "3660b71f", "3740c4c7", "3999a5e1", "39ead506", "3a91d0d6", "3b724916", "3bf321b8", "3c546144", "3f9ef44c", "3fea1100", "3ff82303", "4027d193", "402e1064", "4065cd69", "43038e3d", "4503e771", "461f97e1", "464d51ac", "467b99a5", "482c81b2", "48af038f", "4962ada1", "49bf7358", "4c9e8f5d", "502c402c", "508d1625", "52e348ba", "534002ab", "5582debe", "55d3aa56", "55e821f7", "581f3282", "5831d5fd", "58871380", "58fdc720", "5a5658f1", "5a90a5f8", "5aea1af1", "5b6a17aa", "5bef9a39", "5ca55292", "5d786cef", "5ddb9237", "5ee41456", "61178f2a", "61ca8e23", "61d9464e", "61eecaae", "623c3bfd", "6248d9e3", "6294d84e", "62bf7ef1", "6346cf49", "6357365c", "66628310", "668f0f93", "66d992e8", "67995996", "6843ebbf", "6864dcb0", "6951838b", "696e1548", "698c5c2e", "6a75ae3b", "6aa1ff7e", "6b07d4f8", "6b290cd4", "6c168801", "6dfae3cb", "6e806ffc", "6edf1720", "6f81cbe7", "70859bdb", "70a095b1", "7238c5dd", "7360ebd1", "741688e4", "74daf866", "78640859", "79284c47", "794f8929", "795e5c95", "79a57aa9", "7aa13573", "7b2e5242", "7b811cdd", "7ec0ea6b", "801d73af", "802e2547", "81b9cd29", "8219e1a4", "82a9a2f1", "8428fc8e", "849ccb64", "8541aa4c", "85479b99", "8bd0b91b", "8d371161", "903c8847", "917871e7", "98aeaba9", "99b1a1c6", "99ef2c3b", "9b67b7dc", "9c6df98c", "9c814c1b", "9e2b5e94", "9fd76352", "a1c808d5", "a22788f8", "a2383001", "a26e9aa9", "a397a568", "a3f9ee34", "a4b988da", "a4d34176", "a581f55e", "a5a477ae", "a9640880", "a97d3858", "aa73f3a4", "ab40bece", "ac4d4ba8", "ad01a422", "ade75c4f", "ae2c4777", "afa583bc", "b10c2a85", "b224cc7c", "b2d6fc98", "b362c2f5", "b467620a", "b4d40dcc", "b504662d", "b50edd99", "b5494027", "b62321c3", "b8961d15", "b8ea6e7f", "bb77a469", "bc0f9686", "bcf7315f", "be2dfaea", "beffda26", "bf06317e", "bf610cdb", "bfe1c212", "c00582e9", "c026469d", "c04889b1", "c04b0635", "c04e374a", "c05f7596", "c07307c6", "c092fdf8", "c25dd065", "c2bce496", "c5e9a883", "c79634c2", "c7e37ca0", "c93b5366", "c9bc4ffd", "cba1878b", "cbeade8c", "ce2e3d16", "cefb72ca", "cf9643e6", "cfd20274", "d05a66eb", "d09c1c07", "d1e76c89", "d2172943", "d2dc2474", "d498797d", "d6bf35ad", "d734ea08", "d860ff42", "d8bd9e5a", "d913dafa", "d970d345", "dbdbe7a4", "dc271c35", "dcd9a29e", "dd67b076", "de793ead", "ded74044", "df9daeb6", "e10339b3", "e142d1f9", "e155c47e", "e15afab0", "e16bb1bb", "e316e4c0", "e3eff92a", "e4569a5b", "e574bef6", "e5962ba3", "e6464c9f", "e68b5c4e", "e796b84e", "e8694547", "e965d180", "e965d541", "e9bdc904", "e9dbb8d5", "ea54d525", "ea59b343", "ea7f90ea", "ea8f5ad0", "eaa13804", "eb799d34", "ec050bb6", "ec928655", "eed2e5e1", "ef8f5db1", "f0d5a3c7", "f1077334", "f221fef5", "f2293447", "f33d918e", "f3c6ea11", "f51056a1", "f51cab9a", "f573bb34", "f5d19934", "f7451c92", "f8e65486", "f9714b3d", "fa994f33", "fafa14c0", "fc37fe1f", "fca66520", "fe0997b6"],
      B = [-1056897629, -1056946782, -1073719331, -1147160399, -1147160553, -1147168724, -1147419751, -1147419753, -1147419775, -1147427826, -1147451883, -1147451901, -1147464169, -1147464177, -1147488144, -1147602934, -1147643759, -1147643872, -1147765274, -1148326739, -1148335070, -1148572354, -1148678631, -1148680509, -1148713259, -1164279890, -1164800191, -1164800478, -1332029332, -133757475, -1342154787, -134823971, -16746546, -1878102921, -1878111124, -1962893370, -1962919974, -1962928178, -2130164162, -2130164382, -2130164388, -2130164546, -2130172573, -2130659912, -2145933648, -2145941977, -2145958228, -2145966414, -2145966441, -2145966529, -2145966535, -2145966545, -2145970658, -2145974343, -2145974380, -2145974489, -2145974596, -2145974598, -2145974612, -2145974637, -2145974657, -2145974729, -2146187766, -2146232338, -2146232480, -2146232503, -2146232590, -2146232723, -2146232724, -2146236588, -2146236703, -2146237020, -2146251619, -2146251641, -2146251681, -2146253671, -2146253693, -2146277218, -2146286438, -2146286463, -2146286583, -2146319268, -2146376065, -2146379955, -2146384003, -2146384011, -2146384027, -2146384034, -2146384120, -2146384281, -2146398568, -2146400384, -2146400556, -2146400620, -2146401928, -2146417027, -2146526795, -2146526934, -2147125544, -2147128275, -2147133747, -2147133749, -2147133760, -2147134974, -2147136328, -2147142429, -2147287810, -2147287811, -2147287820, -2147287834, -2147287835, -2147287854, -2147291718, -2147291820, -2147293058, -2147295768, -2147295822, -2147295823, -2147295849, -2147295857, -2147300019, -2147304193, -2147304219, -2147306321, -2147316382, -2147316383, -2147333118, -2147336998, -2147337003, -2147337012, -2147337022, -2147344686, -2147346747, -2147361652, -2147361731, -2147361769, -2147361774, -2147361775, -2147361778, -2147361792, -2147362760, -2147365698, -2147365730, -2147365759, -2147365760, -2147365827, -2147365863, -2147373914, -2147373984, -2147374032, -2147374080, -2147378041, -2147378146, -2147382130, -2147382221, -2147382251, -2147382270, -2147382272, -2147383246, -2147385825, -2147385849, -2147386292, -2147386326, -2147387335, -2147387364, -2147389930, -2147389937, -2147389951, -2147390461, -2147394188, -2147394251, -2147394484, -2147400057, -2147406798, -2147407643, -2147407821, -2147410938, -2147410941, -2147414733, -2147414956, -2147414987, -2147415037, -2147429201, -2147429223, -2147439020, -2147440422, -2147447111, -2147447122, -2147447126, -2147447137, -2147447149, -2147447157, -2147447161, -2147447163, -2147447873, -2147447892, -2147447896, -2147447928, -2147448592, -2147453701, -2147453767, -2147453768, -2147459031, -2147461169, -2147466956, -2147466972, -2147467172, -2147470173, -2147475351, -2147475352, -638494755, -671082546, -677558160, -999987216, 1099536, 1099644, 1147714426, 1197075, 1229835, 1508998, 1509050, 1610618841, 184555483, 2146590728, 2147305224, 2147361749, 2147440438, 2147475085, 2147479181, 21667, 349912, 351513, 83625, 998804992, 998911268, 999148597, 999156922];
    let x;
    if (E.parameters) {
      const C = new Set;
      for (const M in E.parameters) {
        const K = E.parameters[M];
        if (!(!K || typeof K == "string"))
          if (Array.isArray(K))
            for (const oe of K) C.add(Number(oe));
          else C.add(Number(K))
      }
      x = [...C].sort((M, K) => M - K)
    }
    const L = ui((o = E.parameters) == null ? void 0 : o.UNMASKED_RENDERER_WEBGL),
      H = "" + x,
      ne = !L || !H ? void 0 : W([L, H]),
      me = x ? x.reduce((C, M, K) => C ^ +M + K, 0) : void 0;
    Fe.webglParams = H, Fe.webglBrandCapabilities = ne, Fe.webglCapabilities = me;
    const F = ne && !D.includes(ne),
      Ne = me && !B.includes(me);
    return F && (ke.WEBGL = !0, ae("WebGLRenderingContext.getParameter", "suspicious gpu")), Ne && (ke.WEBGL = !0, ae("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...E,
      gpu: {
        ...Zr((E.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: Qr((E.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (a) {
    re(a);
    return
  } finally {
    ur(n, e), ur(t, r)
  }
}

function ur(n, t) {
  var e;
  if (n) {
    try {
      (e = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    n.width = 0, n.height = 0, n instanceof HTMLCanvasElement && n.remove()
  }
}

function lr(n, t) {
  try {
    if (t == "webgl2") {
      const r = n.getContext("webgl2");
      return r || !(n instanceof HTMLCanvasElement) ? r : n.getContext("experimental-webgl2")
    }
    const e = n.getContext("webgl");
    return e || !(n instanceof HTMLCanvasElement) ? e : n.getContext("experimental-webgl") ?? n.getContext("moz-webgl") ?? n.getContext("webkit-3d")
  } catch (e) {
    console.error("Error while getting canvas context:", e);
    return
  }
}
async function Is() {
  var t, e, r, o, a, i, s, u, _, l, p, f, d, g, h, w, k, T, R, S, N, O, b, v, E, D, B, x, L, H, ne, me;
  const n = await Ns();
  if (!n) throw new Error("Fingerprint failed!");
  return {
    navigator: n.navigator ? {
      bluetoothAvailability: n.navigator.bluetoothAvailability,
      deviceMemory: n.navigator.deviceMemory,
      hardwareConcurrency: n.navigator.hardwareConcurrency,
      oscpu: n.navigator.oscpu,
      platform: n.navigator.platform,
      vendor: n.navigator.vendor,
      applePay: n.navigator.applePay,
      privateClickMeasurement: n.navigator.privateClickMeasurement,
      pdfViewerEnabled: n.navigator.pdfViewerEnabled,
      lied: n.navigator.lied
    } : void 0,
    workerScope: n.workerScope ? {
      deviceMemory: n.workerScope.deviceMemory,
      hardwareConcurrency: n.workerScope.hardwareConcurrency,
      platform: n.workerScope.platform,
      system: n.workerScope.system,
      userAgent: n.workerScope.userAgent,
      userAgentData: {
        architecture: (t = n.workerScope.userAgentData) == null ? void 0 : t.architecture,
        bitness: (e = n.workerScope.userAgentData) == null ? void 0 : e.bitness,
        mobile: (r = n.workerScope.userAgentData) == null ? void 0 : r.mobile,
        model: (o = n.workerScope.userAgentData) == null ? void 0 : o.model,
        platform: (a = n.workerScope.userAgentData) == null ? void 0 : a.platform,
        platformVersion: (i = n.workerScope.userAgentData) == null ? void 0 : i.platformVersion
      }
    } : void 0,
    screen: n.screen ? {
      minDim: Math.min(n.screen.width, n.screen.height),
      maxDim: Math.max(n.screen.width, n.screen.height),
      pixelDepth: n.screen.pixelDepth,
      colorDepth: n.screen.colorDepth
    } : void 0,
    media: n.media,
    canvas2d: {
      ...(s = n.canvas2d) != null && s.lied ? {} : {
        dataURI: (u = n.canvas2d) == null ? void 0 : u.dataURI,
        paintURI: (_ = n.canvas2d) == null ? void 0 : _.paintURI,
        textURI: (l = n.canvas2d) == null ? void 0 : l.textURI,
        emojiURI: (p = n.canvas2d) == null ? void 0 : p.emojiURI
      },
      ...(f = n.canvas2d) != null && f.liedTextMetrics ? {} : {
        textMetricsSystemSum: (d = n.canvas2d) == null ? void 0 : d.textMetricsSystemSum,
        emojiSet: (g = n.canvas2d) == null ? void 0 : g.emojiSet
      }
    },
    canvasWebgl: n.canvasWebgl,
    cssMedia: n.cssMedia ? {
      reducedMotion: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["prefers-reduced-motion"]
      }),
      monochrome: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS.monochrome
      }),
      invertedColors: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["inverted-colors"]
      }),
      forcedColors: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["forced-colors"]
      }),
      colorGamut: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["color-gamut"]
      }),
      hdr: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["dynamic-range"]
      }),
      contrast: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["prefers-contrast"]
      }),
      reducedTransparency: be(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["prefers-reduced-transparency"]
      })
    } : void 0,
    css: n.css ? (w = (h = n.css) == null ? void 0 : h.system) == null ? void 0 : w.fonts : void 0,
    timezone: n.timezone,
    offlineAudioContext: (k = n.offlineAudioContext) != null && k.lied ? void 0 : {
      binsSample: (T = n.offlineAudioContext) == null ? void 0 : T.binsSample,
      compressorGainReduction: (R = n.offlineAudioContext) == null ? void 0 : R.compressorGainReduction,
      copySample: (S = n.offlineAudioContext) == null ? void 0 : S.copySample,
      floatFrequencyDataSum: (N = n.offlineAudioContext) == null ? void 0 : N.floatFrequencyDataSum,
      floatTimeDomainDataSum: (O = n.offlineAudioContext) == null ? void 0 : O.floatTimeDomainDataSum,
      lied: (b = n.offlineAudioContext) == null ? void 0 : b.lied,
      noise: (v = n.offlineAudioContext) == null ? void 0 : v.noise,
      totalUniqueSamples: (E = n.offlineAudioContext) == null ? void 0 : E.totalUniqueSamples,
      values: (D = n.offlineAudioContext) == null ? void 0 : D.values
    },
    fonts: n.fonts ? n.fonts.fontFaceLoadFonts : void 0,
    intl: !n.intl || n.intl.lied ? void 0 : {
      lied: (B = n.intl) == null ? void 0 : B.lied,
      listFormat: (x = n.intl) == null ? void 0 : x.listFormat,
      locale: (L = n.intl) == null ? void 0 : L.locale,
      numberFormat: (H = n.intl) == null ? void 0 : H.numberFormat,
      pluralRules: (ne = n.intl) == null ? void 0 : ne.pluralRules,
      relativeTimeFormat: (me = n.intl) == null ? void 0 : me.relativeTimeFormat
    },
    resistance: n.resistance,
    math: n.math
  }
}
async function Ns() {
  try {
    const [n, t, e, r, o, a, i, s, u, _, l, p, f, d] = await Promise.all([de("offlineAudioContext", Fi()), de("canvasWebgl", Ds()), de("canvas2d", Wi()), de("css", Promise.resolve(Vi())), de("cssMedia", Promise.resolve(zi())), de("screen", vs()), de("consoleErrors", Promise.resolve($i())), de("timezone", Promise.resolve(Es())), de("fonts", rs()), de("media", ds()), de("resistance", ws()), de("intl", us()), de("workerScope", Hi()), de("maths", Promise.resolve(ni()))]), [g, h, w, k, T] = await Promise.all([de("navigator", _s(f)), de("headless", cs({
      webgl: t
    })), de("lies", Promise.resolve(Si())), de("trash", Promise.resolve(Ii())), de("capturedErrors", Promise.resolve(oi()))]);
    return {
      navigator: g,
      headless: h,
      cssMedia: o,
      css: r,
      screen: a,
      media: _,
      canvas2d: e,
      canvasWebgl: {
        ...t
      },
      consoleErrors: i,
      timezone: s,
      offlineAudioContext: n,
      fonts: u,
      lies: w,
      trash: k,
      capturedErrors: T,
      resistance: l,
      intl: p,
      workerScope: f,
      math: d
    }
  } finally {
    Ei()
  }
}

function de(n, t) {
  return t.catch(() => {})
}
let Xt;
async function ks() {
  if (Xt) try {
    return await Xt
  } catch {}
  return Xt = (async () => {
    var _, l, p;
    const n = await Is();
    (_ = n.navigator) != null && _.lied && n.screen && (n.screen.minDim = 0, n.screen.maxDim = 0);
    const t = go({
      userAgent: (l = n.workerScope) == null ? void 0 : l.userAgent
    });
    switch (/\bCrOS x86_64\b/.test(((p = n.workerScope) == null ? void 0 : p.userAgent) ?? "") && n.canvas2d && (delete n.canvas2d.dataURI, delete n.canvas2d.emojiSet, delete n.canvas2d.textMetricsSystemSum, delete n.canvas2d.textURI), t) {
      case "Firefox":
        delete n.intl, n.canvas2d && (delete n.canvas2d.dataURI, delete n.canvas2d.paintURI, delete n.canvas2d.emojiURI, delete n.canvas2d.textURI);
        break;
      case "Brave":
        n.navigator && (delete n.navigator.deviceMemory, delete n.navigator.hardwareConcurrency), n.workerScope && (delete n.workerScope.deviceMemory, delete n.workerScope.hardwareConcurrency), n.canvas2d && (delete n.canvas2d.dataURI, delete n.canvas2d.paintURI, delete n.canvas2d.emojiURI, delete n.canvas2d.textURI), n.canvasWebgl && delete n.canvasWebgl.parameters, n.offlineAudioContext && (delete n.offlineAudioContext.floatFrequencyDataSum, delete n.offlineAudioContext.floatTimeDomainDataSum, delete n.offlineAudioContext.sampleSum, delete n.offlineAudioContext.binsSample, delete n.offlineAudioContext.copySample, delete n.offlineAudioContext.noise), n.fonts && delete n.fonts;
        break;
      case "Safari":
        n.canvas2d && delete n.canvas2d.dataURI, n.offlineAudioContext && (delete n.offlineAudioContext.binsSample, delete n.offlineAudioContext.copySample, delete n.offlineAudioContext.floatFrequencyDataSum, delete n.offlineAudioContext.totalUniqueSamples, delete n.offlineAudioContext.noise), n.screen && (delete n.screen.minDim, delete n.screen.maxDim);
        break
    }
    n.navigator && delete n.navigator.lied, n.workerScope && t !== "Safari" && delete n.workerScope.userAgent, n.screen && (!n.offlineAudioContext || !n.intl) && (delete n.screen.minDim, delete n.screen.maxDim);
    const r = await Promise.all([De(n.workerScope), De(n.canvas2d), De(n.canvasWebgl), De(n.fonts), De(n.screen), De(n.navigator), "a0", De(n.timezone), De(n.intl), De(n.css), De({
        ...n.cssMedia,
        ...n.offlineAudioContext
      }), De({
        ...n.media,
        ...n.math
      })]),
      o = 32,
      a = Math.floor(o / r.length),
      i = r.map(f => f.slice(0, a)).join(""),
      s = o % r.length,
      u = r.slice(0, s).map(f => f[a] ?? "0").join("");
    return i + u
  })(), Xt
}
const dr = "theme";
var vt, Et, Tt, St, Ot, At, Rt, Dt, It, Nt, kt;
class Cs {
  constructor() {
    X(this, vt, ie(!1));
    X(this, Et, ie(!1));
    X(this, Tt, ie(!1));
    X(this, St, ie(0));
    X(this, Ot, ie(!1));
    X(this, At, ie(nn(Ps())));
    X(this, Rt, ie(null));
    X(this, Dt, ie(!1));
    X(this, It, ie("custom-winter"));
    X(this, Nt, ie(nn(Date.now())));
    X(this, kt, ie(void 0));
    setInterval(() => {
      ee(P(this, Nt), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(dr), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return Q(P(this, vt))
  }
  set dropletsDialogOpen(t) {
    ee(P(this, vt), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return Q(P(this, Et))
  }
  set pendingHistoryDialogOpen(t) {
    ee(P(this, Et), t, !0)
  }
  get storeDialogOpen() {
    return Q(P(this, Tt))
  }
  set storeDialogOpen(t) {
    ee(P(this, Tt), t, !0)
  }
  get storeTabIndex() {
    return Q(P(this, St))
  }
  set storeTabIndex(t) {
    ee(P(this, St), t, !0)
  }
  get muted() {
    return Q(P(this, Ot))
  }
  set muted(t) {
    ee(P(this, Ot), t, !0)
  }
  get language() {
    return Q(P(this, At))
  }
  set language(t) {
    ee(P(this, At), t, !0)
  }
  get map() {
    return Q(P(this, Rt))
  }
  set map(t) {
    ee(P(this, Rt), t)
  }
  get automatedClicks() {
    return Q(P(this, Dt))
  }
  set automatedClicks(t) {
    ee(P(this, Dt), t, !0)
  }
  get theme() {
    return Q(P(this, It))
  }
  set theme(t) {
    ee(P(this, It), t, !0), localStorage.setItem(dr, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return Q(P(this, Nt))
  }
  get captcha() {
    return xs ? Q(P(this, kt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    ee(P(this, kt), t, !0)
  }
}
vt = new WeakMap, Et = new WeakMap, Tt = new WeakMap, St = new WeakMap, Ot = new WeakMap, At = new WeakMap, Rt = new WeakMap, Dt = new WeakMap, It = new WeakMap, Nt = new WeakMap, kt = new WeakMap;
const to = new Cs;

function Ps() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const xs = yo.toLowerCase() !== "false",
  Ls = `
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
async function Ms() {
  try {
    const n = await fetch(`${Ln}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await Bs(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Bs(n, t) {
  return new Promise(e => {
    const r = new Blob([Ls], {
        type: "application/javascript"
      }),
      o = URL.createObjectURL(r),
      a = new Worker(o),
      i = setTimeout(() => {
        a.terminate(), URL.revokeObjectURL(o), e(null)
      }, 12e4);
    a.onmessage = s => {
      clearTimeout(i), a.terminate(), URL.revokeObjectURL(o), s.data.error ? e(null) : e(s.data.nonce)
    }, a.onerror = () => {
      clearTimeout(i), a.terminate(), URL.revokeObjectURL(o), e(null)
    }, a.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const no = 3;
var Ct, Pt;
class Hs {
  constructor() {
    X(this, Ct, ie(null));
    X(this, Pt, ie(0))
  }
  get current() {
    return Q(P(this, Ct))
  }
  set current(t) {
    ee(P(this, Ct), t, !0)
  }
  get errorCount() {
    return Q(P(this, Pt))
  }
  set errorCount(t) {
    ee(P(this, Pt), t, !0)
  }
}
Ct = new WeakMap, Pt = new WeakMap;
const Te = new Hs;
async function _r(n) {
  if (n === 1) return Us();
  if (n === 2) {
    const t = await ro();
    return t ? fr("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await Fs();
    return t ? fr("hcaptcha", t) : !1
  }
  return n === 4 ? js() : !1
}
async function Us() {
  for (let n = 0; n < no; n++) try {
    const t = await Ms();
    if (!t) continue;
    return await je.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function fr(n, t) {
  try {
    const e = await je.postCaptchaSession({
      provider: n,
      token: t
    });
    return await je.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const ct = {};

function ro() {
  return oo(2)
}

function Fs() {
  return oo(3)
}

function oo(n) {
  const t = ct[n];
  if (t) return t;
  const e = new Promise(r => {
    Te.errorCount = 0, Te.current = {
      tier: n,
      resolve: o => {
        delete ct[n], r(o)
      }
    }
  });
  return ct[n] = e, e
}

function js() {
  const n = ct[4];
  if (n) return n;
  const t = new Promise(e => {
    Te.errorCount = 0, Te.current = {
      tier: 4,
      resolve: r => {
        delete ct[4], e(r)
      }
    }
  });
  return ct[4] = t, t
}

function tT(n) {
  const t = Te.current;
  !t || t.tier === 4 || (t.resolve(n), Te.current = null)
}

function nT() {
  const n = Te.current;
  !n || n.tier === 4 || (Te.errorCount += 1, Te.errorCount >= no && (n.resolve(void 0), Te.current = null))
}

function rT() {
  const n = Te.current;
  !n || n.tier !== 4 || (n.resolve(!0), Te.current = null)
}

function oT() {
  const n = Te.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), Te.current = null)
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const Gs = () => "Your account has been suspended for breaking the rules",
  Ws = () => "Sua conta foi suspensa por quebrar as regras",
  Vs = () => "您的账号因违反规则已被暂停",
  zs = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  qs = () => "Tu cuenta ha sido suspendida por infringir las regras",
  $s = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Ks = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Xs = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Ys = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Js = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Qs = () => "Ваш обліковий запис було призупинено за порушення правил",
  Zs = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  pr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Gs() : e === "pt" ? Ws() : e === "ch" ? Vs() : e === "de" ? zs() : e === "es" ? qs() : e === "fr" ? $s() : e === "it" ? Ks() : e === "jp" ? Xs() : e === "pl" ? Ys() : e === "ru" ? Js() : e === "uk" ? Qs() : Zs()
  },
  ec = () => "Alliance name already taken",
  tc = () => "Já possui uma aliança com esse nome",
  nc = () => "该联盟名称已被占用",
  rc = () => "Der Allianzname ist bereits vergeben",
  oc = () => "Ese nombre de alianza ya está en uso",
  ac = () => "Ce nom d’alliance est déjà pris",
  ic = () => "Esiste già un'alleanza con questo nome",
  sc = () => "このアライアンス名は既に使用されています。",
  cc = () => "Nazwa sojuszu jest już zajęta",
  uc = () => "Такое название альянса уже используется",
  lc = () => "Назва альянсу вже зайнята",
  dc = () => "Tên liên minh đã được sử dụng",
  _c = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? ec() : e === "pt" ? tc() : e === "ch" ? nc() : e === "de" ? rc() : e === "es" ? oc() : e === "fr" ? ac() : e === "it" ? ic() : e === "jp" ? sc() : e === "pl" ? cc() : e === "ru" ? uc() : e === "uk" ? lc() : dc()
  },
  fc = () => "Alliance name exceeded the maximum number of characters",
  pc = () => "O nome da aliança excedeu o número máximo de caracteres",
  mc = () => "联盟名称超过最大字符数限制",
  hc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  gc = () => "El nombre de la alianza superó el número máximo de caracteres",
  yc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  wc = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  bc = () => "アライアンス名が最大文字数を超えています。",
  vc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Ec = () => "Название альянса превышает максимальную длину",
  Tc = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Sc = () => "Tên liên minh vượt quá số ký tự cho phép",
  Oc = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? fc() : e === "pt" ? pc() : e === "ch" ? mc() : e === "de" ? hc() : e === "es" ? gc() : e === "fr" ? yc() : e === "it" ? wc() : e === "jp" ? bc() : e === "pl" ? vc() : e === "ru" ? Ec() : e === "uk" ? Tc() : Sc()
  },
  Ac = () => "Alliance with empty name",
  Rc = () => "Aliança com nome vazio",
  Dc = () => "名称为空的联盟",
  Ic = () => "Allianz mit leerem Namen",
  Nc = () => "Alianza con nombre vacío",
  kc = () => "Alliance avec nom vide",
  Cc = () => "Alleanza con nome vuoto",
  Pc = () => "名前が空のアライアンスです。",
  xc = () => "Sojusz z pustą nazwą",
  Lc = () => "Альянс с пустым названием",
  Mc = () => "Альянс із порожньою назвою",
  Bc = () => "Liên minh không có tên",
  Hc = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Ac() : e === "pt" ? Rc() : e === "ch" ? Dc() : e === "de" ? Ic() : e === "es" ? Nc() : e === "fr" ? kc() : e === "it" ? Cc() : e === "jp" ? Pc() : e === "pl" ? xc() : e === "ru" ? Lc() : e === "uk" ? Mc() : Bc()
  },
  Uc = () => "Botting",
  Fc = () => "Uso de bots",
  jc = () => "脚本",
  Gc = () => "Bot-Nutzung",
  Wc = () => "Botting",
  Vc = () => "Bots",
  zc = () => "Uso di bot",
  qc = () => "ボット使用",
  $c = () => "Botting",
  Kc = () => "Боттинг",
  Xc = () => "Боти",
  Yc = () => "Botting",
  Jc = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Uc() : e === "pt" ? Fc() : e === "ch" ? jc() : e === "de" ? Gc() : e === "es" ? Wc() : e === "fr" ? Vc() : e === "it" ? zc() : e === "jp" ? qc() : e === "pl" ? $c() : e === "ru" ? Kc() : e === "uk" ? Xc() : Yc()
  },
  Qc = () => "Use of software to completely automate painting",
  Zc = () => "Uso de software para pintar de forma completamente automatizada ",
  eu = () => "使用软件完全自动化绘制",
  tu = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  nu = () => "Uso de software para automatizar completamente la pintura",
  ru = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  ou = () => "Uso di software per dipingere in modo completamente automatizzato",
  au = () => "ペイントを完全に自動化するソフトウェアの使用",
  iu = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  su = () => "Использование программ для полной автоматизации рисования",
  cu = () => "Використання програм, які повністю автоматизують малювання",
  uu = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  lu = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Qc() : e === "pt" ? Zc() : e === "ch" ? eu() : e === "de" ? tu() : e === "es" ? nu() : e === "fr" ? ru() : e === "it" ? ou() : e === "jp" ? au() : e === "pl" ? iu() : e === "ru" ? su() : e === "uk" ? cu() : uu()
  },
  du = () => "Breaking the rules",
  _u = () => "Quebrar as regras",
  fu = () => "违反规则",
  pu = () => "Regeln brechen",
  mu = () => "Romper las reglas",
  hu = () => "Violation des règles",
  gu = () => "Violazione delle regole",
  yu = () => "ルール違反",
  wu = () => "Łamanie zasad",
  bu = () => "Нарушение правил",
  vu = () => "Порушення правил",
  Eu = () => "Vi phạm luật",
  Tu = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? du() : e === "pt" ? _u() : e === "ch" ? fu() : e === "de" ? pu() : e === "es" ? mu() : e === "fr" ? hu() : e === "it" ? gu() : e === "jp" ? yu() : e === "pl" ? wu() : e === "ru" ? bu() : e === "uk" ? vu() : Eu()
  },
  Su = () => "You have broken one of Wplace's rules",
  Ou = () => "Você quebrou uma das regras do Wplace",
  Au = () => "你违反了 Wplace 的一项规则",
  Ru = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Du = () => "Has infringido una de las reglas de Wplace",
  Iu = () => "Vous avez enfreint l’une des règles de Wplace",
  Nu = () => "Hai infranto una delle regole di Wplace",
  ku = () => "Wplaceのルールのいずれかに違反しました。",
  Cu = () => "Złamałeś jedną z zasad Wplace",
  Pu = () => "Вы нарушили одно из правил Wplace",
  xu = () => "Ви порушили одне з правил Wplace",
  Lu = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Mu = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Su() : e === "pt" ? Ou() : e === "ch" ? Au() : e === "de" ? Ru() : e === "es" ? Du() : e === "fr" ? Iu() : e === "it" ? Nu() : e === "jp" ? ku() : e === "pl" ? Cu() : e === "ru" ? Pu() : e === "uk" ? xu() : Lu()
  },
  Bu = () => "You cannot paint over event pixels",
  Hu = () => "Você não pode pintar sobre pixels de eventos",
  Uu = () => "你不能覆盖活动像素",
  Fu = () => "Du kannst nicht über Event-Pixel malen",
  ju = () => "No puedes pintar sobre píxeles de evento",
  Gu = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Wu = () => "Non puoi dipingere sopra i pixel dell'evento",
  Vu = () => "イベント用のピクセルの上には塗れません。",
  zu = () => "Nie możesz malować po pikselach wydarzenia",
  qu = () => "Вы не можете рисовать по пикселям события",
  $u = () => "Ви не можете малювати поверх пікселів події",
  Ku = () => "Bạn không thể tô lên pixel sự kiện",
  mr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Bu() : e === "pt" ? Hu() : e === "ch" ? Uu() : e === "de" ? Fu() : e === "es" ? ju() : e === "fr" ? Gu() : e === "it" ? Wu() : e === "jp" ? Vu() : e === "pl" ? zu() : e === "ru" ? qu() : e === "uk" ? $u() : Ku()
  },
  Xu = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Yu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ju = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Qu = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Zu = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  el = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  tl = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  nl = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  rl = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  ol = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  al = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  il = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  sl = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Xu() : e === "pt" ? Yu() : e === "ch" ? Ju() : e === "de" ? Qu() : e === "es" ? Zu() : e === "fr" ? el() : e === "it" ? tl() : e === "jp" ? nl() : e === "pl" ? rl() : e === "ru" ? ol() : e === "uk" ? al() : il()
  },
  cl = () => "Challenge verification not completed",
  ul = () => "Verificação do desafio não concluída",
  ll = () => "挑战验证未完成",
  dl = () => "Herausforderungsverifizierung nicht abgeschlossen",
  _l = () => "Verificación del desafío no completada",
  fl = () => "Vérification du défi non terminée",
  pl = () => "Verifica della sfida non completata",
  ml = () => "チャレンジ検証が完了していません",
  hl = () => "Weryfikacja wyzwania niezakończona",
  gl = () => "Верификация вызова не завершена",
  yl = () => "Перевірку виклику не завершено",
  wl = () => "Xác minh thử thách chưa hoàn thành",
  En = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? cl() : e === "pt" ? ul() : e === "ch" ? ll() : e === "de" ? dl() : e === "es" ? _l() : e === "fr" ? fl() : e === "it" ? pl() : e === "jp" ? ml() : e === "pl" ? hl() : e === "ru" ? gl() : e === "uk" ? yl() : wl()
  },
  bl = () => "Couldn't complete the purchase. This item does not exist.",
  vl = () => "Não foi possível concluir a compra. Este item não existe.",
  El = () => "无法完成购买。该物品不存在。",
  Tl = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Sl = () => "No se pudo completar la compra. Este ítem no existe.",
  Ol = () => "Achat impossible. Cet objet n’existe pas.",
  Al = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Rl = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Dl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Il = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Nl = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  kl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  hr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? bl() : e === "pt" ? vl() : e === "ch" ? El() : e === "de" ? Tl() : e === "es" ? Sl() : e === "fr" ? Ol() : e === "it" ? Al() : e === "jp" ? Rl() : e === "pl" ? Dl() : e === "ru" ? Il() : e === "uk" ? Nl() : kl()
  },
  Cl = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Pl = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  xl = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Ll = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Ml = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Bl = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Hl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Ul = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Fl = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  jl = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Gl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Wl = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Vl = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Cl() : e === "pt" ? Pl() : e === "ch" ? xl() : e === "de" ? Ll() : e === "es" ? Ml() : e === "fr" ? Bl() : e === "it" ? Hl() : e === "jp" ? Ul() : e === "pl" ? Fl() : e === "ru" ? jl() : e === "uk" ? Gl() : Wl()
  },
  zl = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  ql = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  $l = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Kl = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Xl = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Yl = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Jl = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Ql = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Zl = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  ed = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  td = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  nd = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  gr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? zl() : e === "pt" ? ql() : e === "ch" ? $l() : e === "de" ? Kl() : e === "es" ? Xl() : e === "fr" ? Yl() : e === "it" ? Jl() : e === "jp" ? Ql() : e === "pl" ? Zl() : e === "ru" ? ed() : e === "uk" ? td() : nd()
  },
  rd = () => "Doxxing",
  od = () => "Doxxing",
  ad = () => "人肉搜索",
  id = () => "Doxxing",
  sd = () => "Doxxing",
  cd = () => "Doxxing",
  ud = () => "Doxxing",
  ld = () => "ドックス（Doxxing）",
  dd = () => "Doxxing",
  _d = () => "Докcинг",
  fd = () => "Докcинг",
  pd = () => "Doxxing",
  md = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? rd() : e === "pt" ? od() : e === "ch" ? ad() : e === "de" ? id() : e === "es" ? sd() : e === "fr" ? cd() : e === "it" ? ud() : e === "jp" ? ld() : e === "pl" ? dd() : e === "ru" ? _d() : e === "uk" ? fd() : pd()
  },
  hd = () => "Released other's personal information without their consent",
  gd = () => "Vazar informações pessoais de terceiros sem consentimento",
  yd = () => "在未获同意的情况下公开他人个人信息",
  wd = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  bd = () => "Divulgó información personal de otra persona sin su consentimiento",
  vd = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Ed = () => "Diffusione di informazioni personali di terzi senza consenso",
  Td = () => "他人の個人情報を同意なく公開した。",
  Sd = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Od = () => "Публикация личной информации других людей без их согласия",
  Ad = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Rd = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Dd = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? hd() : e === "pt" ? gd() : e === "ch" ? yd() : e === "de" ? wd() : e === "es" ? bd() : e === "fr" ? vd() : e === "it" ? Ed() : e === "jp" ? Td() : e === "pl" ? Sd() : e === "ru" ? Od() : e === "uk" ? Ad() : Rd()
  },
  Id = () => "This email is already in use.",
  Nd = () => "Este e-mail já está em uso.",
  kd = () => "This email is already in use.",
  Cd = () => "This email is already in use.",
  Pd = () => "Este correo electrónico ya está en uso.",
  xd = () => "This email is already in use.",
  Ld = () => "Questa email è già in uso.",
  Md = () => "This email is already in use.",
  Bd = () => "This email is already in use.",
  Hd = () => "This email is already in use.",
  Ud = () => "This email is already in use.",
  Fd = () => "This email is already in use.",
  jd = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Id() : e === "pt" ? Nd() : e === "ch" ? kd() : e === "de" ? Cd() : e === "es" ? Pd() : e === "fr" ? xd() : e === "it" ? Ld() : e === "jp" ? Md() : e === "pl" ? Bd() : e === "ru" ? Hd() : e === "uk" ? Ud() : Fd()
  },
  Gd = n => `This email is already in use by user #${n.userId}.`,
  Wd = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  Vd = n => `This email is already in use by user #${n.userId}.`,
  zd = n => `This email is already in use by user #${n.userId}.`,
  qd = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  $d = n => `This email is already in use by user #${n.userId}.`,
  Kd = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  Xd = n => `This email is already in use by user #${n.userId}.`,
  Yd = n => `This email is already in use by user #${n.userId}.`,
  Jd = n => `This email is already in use by user #${n.userId}.`,
  Qd = n => `This email is already in use by user #${n.userId}.`,
  Zd = n => `This email is already in use by user #${n.userId}.`,
  e_ = (n, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Gd(n) : e === "pt" ? Wd(n) : e === "ch" ? Vd(n) : e === "de" ? zd(n) : e === "es" ? qd(n) : e === "fr" ? $d(n) : e === "it" ? Kd(n) : e === "jp" ? Xd(n) : e === "pl" ? Yd(n) : e === "ru" ? Jd(n) : e === "uk" ? Qd(n) : Zd(n)
  },
  t_ = () => "Enter a valid email address.",
  n_ = () => "Informe um endereço de e-mail válido.",
  r_ = () => "Enter a valid email address.",
  o_ = () => "Enter a valid email address.",
  a_ = () => "Introduce una dirección de correo electrónico válida.",
  i_ = () => "Enter a valid email address.",
  s_ = () => "Inserisci un indirizzo email valido.",
  c_ = () => "Enter a valid email address.",
  u_ = () => "Enter a valid email address.",
  l_ = () => "Enter a valid email address.",
  d_ = () => "Enter a valid email address.",
  __ = () => "Enter a valid email address.",
  f_ = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? t_() : e === "pt" ? n_() : e === "ch" ? r_() : e === "de" ? o_() : e === "es" ? a_() : e === "fr" ? i_() : e === "it" ? s_() : e === "jp" ? c_() : e === "pl" ? u_() : e === "ru" ? l_() : e === "uk" ? d_() : __()
  },
  p_ = n => `Error while painting: ${n.err}`,
  m_ = n => `Erro enquanto pinta: ${n.err}`,
  h_ = n => `绘制时出错：${n.err}`,
  g_ = n => `Fehler beim Malen: ${n.err}`,
  y_ = n => `Error al pintar: ${n.err}`,
  w_ = n => `Erreur lors de la peinture : ${n.err}`,
  b_ = n => `Errore durante la pittura: ${n.err}`,
  v_ = n => `ペイント中にエラーが発生しました: ${n.err}`,
  E_ = n => `Błąd podczas malowania: ${n.err}`,
  T_ = n => `Ошибка при рисовании: ${n.err}`,
  S_ = n => `Помилка під час малювання: ${n.err}`,
  O_ = n => `Lỗi khi tô: ${n.err}`,
  A_ = (n, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? p_(n) : e === "pt" ? m_(n) : e === "ch" ? h_(n) : e === "de" ? g_(n) : e === "es" ? y_(n) : e === "fr" ? w_(n) : e === "it" ? b_(n) : e === "jp" ? v_(n) : e === "pl" ? E_(n) : e === "ru" ? T_(n) : e === "uk" ? S_(n) : O_(n)
  },
  R_ = () => "Exceeded maximum number of characters",
  D_ = () => "Excedeu o número máximo de caracteres permitidos",
  I_ = () => "超出最大字符数",
  N_ = () => "Maximale Zeichenanzahl überschritten",
  k_ = () => "Se excedió el número máximo de caracteres",
  C_ = () => "Nombre maximal de caractères dépassé",
  P_ = () => "Numero massimo di caratteri superato",
  x_ = () => "最大文字数を超過しました",
  L_ = () => "Przekroczono maksymalną liczbę znaków",
  M_ = () => "Превышено максимальное количество символов",
  B_ = () => "Перевищено максимальну кількість символів",
  H_ = () => "Đã vượt quá số ký tự tối đa",
  U_ = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? R_() : e === "pt" ? D_() : e === "ch" ? I_() : e === "de" ? N_() : e === "es" ? k_() : e === "fr" ? C_() : e === "it" ? P_() : e === "jp" ? x_() : e === "pl" ? L_() : e === "ru" ? M_() : e === "uk" ? B_() : H_()
  },
  F_ = () => "Verification code expired. Please request a new one.",
  j_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  G_ = () => "验证码已过期，请重新获取。",
  W_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  V_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  z_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  q_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  $_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  K_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  X_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Y_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  J_ = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  Q_ = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? F_() : e === "pt" ? j_() : e === "ch" ? G_() : e === "de" ? W_() : e === "es" ? V_() : e === "fr" ? z_() : e === "it" ? q_() : e === "jp" ? $_() : e === "pl" ? K_() : e === "ru" ? X_() : e === "uk" ? Y_() : J_()
  },
  Z_ = () => "Griefing",
  ef = () => "Griefing",
  tf = () => "破坏行为",
  nf = () => "Griefing",
  rf = () => "Griefing",
  of = () => "Griefing",
  af = () => "Griefing",
  sf = () => "グリーフィング",
  cf = () => "Griefing",
  uf = () => "Гриферство",
  lf = () => "Гріфінг",
  df = () => "Griefing",
  _f = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Z_() : e === "pt" ? ef() : e === "ch" ? tf() : e === "de" ? nf() : e === "es" ? rf() : e === "fr" ? of() : e === "it" ? af() : e === "jp" ? sf() : e === "pl" ? cf() : e === "ru" ? uf() : e === "uk" ? lf() : df()
  },
  ff = () => "Messed up with other's artworks",
  pf = () => "Estragou os desenhos dos outros",
  mf = () => "破坏了他人的作品",
  hf = () => "Kunstwerke anderer beschädigt",
  gf = () => "Arruinó las obras de arte de otros",
  yf = () => "A abîmé les œuvres des autres",
  wf = () => "Ha rovinato i disegni degli altri",
  bf = () => "他人の作品を荒らした",
  vf = () => "Zniszczył prace innych",
  Ef = () => "Испортил чужие рисунки",
  Tf = () => "Зіпсував роботи інших",
  Sf = () => "Phá hỏng tranh của người khác",
  Of = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? ff() : e === "pt" ? pf() : e === "ch" ? mf() : e === "de" ? hf() : e === "es" ? gf() : e === "fr" ? yf() : e === "it" ? wf() : e === "jp" ? bf() : e === "pl" ? vf() : e === "ru" ? Ef() : e === "uk" ? Tf() : Sf()
  },
  Af = () => "Hate speech",
  Rf = () => "Discurso de Ódio",
  Df = () => "仇恨言论",
  If = () => "Hassrede",
  Nf = () => "Discurso de odio",
  kf = () => "Discours haineux",
  Cf = () => "Discorso d'odio",
  Pf = () => "ヘイトスピーチ",
  xf = () => "Mowa nienawiści",
  Lf = () => "Речь ненависти",
  Mf = () => "Мова ворожнечі",
  Bf = () => "Ngôn từ thù hằn",
  Hf = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Af() : e === "pt" ? Rf() : e === "ch" ? Df() : e === "de" ? If() : e === "es" ? Nf() : e === "fr" ? kf() : e === "it" ? Cf() : e === "jp" ? Pf() : e === "pl" ? xf() : e === "ru" ? Lf() : e === "uk" ? Mf() : Bf()
  },
  Uf = () => "Racism, homophobia, hate groups, ...",
  Ff = () => "Racismo, homofobia, grupos de ódio, ...",
  jf = () => "种族主义、恐同、仇恨团体等",
  Gf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Wf = () => "Racismo, homofobia, grupos de odio, ...",
  Vf = () => "Racisme, homophobie, groupes haineux, ...",
  zf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  qf = () => "人種差別、同性愛差別、ヘイト団体など。",
  $f = () => "Rasizm, homofobia, grupy nienawiści, ...",
  Kf = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Xf = () => "Расизм, гомофобія, групи ненависті, ...",
  Yf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Jf = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Uf() : e === "pt" ? Ff() : e === "ch" ? jf() : e === "de" ? Gf() : e === "es" ? Wf() : e === "fr" ? Vf() : e === "it" ? zf() : e === "jp" ? qf() : e === "pl" ? $f() : e === "ru" ? Kf() : e === "uk" ? Xf() : Yf()
  },
  Qf = () => "Inappropriate content",
  Zf = () => "Conteúdo inapropriado",
  ep = () => "不当内容",
  tp = () => "Unangemessene Inhalte",
  np = () => "Contenido inapropiado",
  rp = () => "Contenu inapproprié",
  op = () => "Contenuto inappropriato",
  ap = () => "不適切なコンテンツ",
  ip = () => "Nieodpowiednie treści",
  sp = () => "Неприемлемый контент",
  cp = () => "Неприйнятний вміст",
  up = () => "Nội dung không phù hợp",
  lp = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Qf() : e === "pt" ? Zf() : e === "ch" ? ep() : e === "de" ? tp() : e === "es" ? np() : e === "fr" ? rp() : e === "it" ? op() : e === "jp" ? ap() : e === "pl" ? ip() : e === "ru" ? sp() : e === "uk" ? cp() : up()
  },
  dp = () => "Explicit, hateful, or illegal content",
  _p = () => "Conteúdo explícito, de ódio ou ilegal",
  fp = () => "露骨、仇恨或非法内容",
  pp = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  mp = () => "Contenido explícito, de odio o ilegal",
  hp = () => "Contenu explicite, haineux ou illégal",
  gp = () => "Contenuto esplicito, d'odio o illegale",
  yp = () => "露骨、差別的、または違法なコンテンツ",
  wp = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  bp = () => "Откровенный, разжигающий ненависть или незаконный контент",
  vp = () => "Відвертий, ворожий або незаконний вміст",
  Ep = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Tp = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? dp() : e === "pt" ? _p() : e === "ch" ? fp() : e === "de" ? pp() : e === "es" ? mp() : e === "fr" ? hp() : e === "it" ? gp() : e === "jp" ? yp() : e === "pl" ? wp() : e === "ru" ? bp() : e === "uk" ? vp() : Ep()
  },
  Sp = () => "Invalid captcha. Please try again.",
  Op = () => "Captcha inválido. Por favor, tente novamente.",
  Ap = () => "验证码无效，请重试。",
  Rp = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Dp = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Ip = () => "Captcha invalide. Veuillez réessayer.",
  Np = () => "Captcha non valido. Riprova.",
  kp = () => "キャプチャが無効です。もう一度お試しください。",
  Cp = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Pp = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  xp = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Lp = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Mp = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Sp() : e === "pt" ? Op() : e === "ch" ? Ap() : e === "de" ? Rp() : e === "es" ? Dp() : e === "fr" ? Ip() : e === "it" ? Np() : e === "jp" ? kp() : e === "pl" ? Cp() : e === "ru" ? Pp() : e === "uk" ? xp() : Lp()
  },
  Bp = () => "Invalid challenge response",
  Hp = () => "Resposta de desafio inválida",
  Up = () => "质询响应无效",
  Fp = () => "Ungültige Challenge-Antwort",
  jp = () => "Respuesta de desafío inválida",
  Gp = () => "Réponse au défi invalide",
  Wp = () => "Risposta alla sfida non valida",
  Vp = () => "無効なチャレンジ応答",
  zp = () => "Nieprawidłowa odpowiedź na wyzwanie",
  qp = () => "Неверный ответ на вызов",
  $p = () => "Недійсна відповідь на виклик",
  Kp = () => "Phản hồi thử thách không hợp lệ",
  Xp = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Bp() : e === "pt" ? Hp() : e === "ch" ? Up() : e === "de" ? Fp() : e === "es" ? jp() : e === "fr" ? Gp() : e === "it" ? Wp() : e === "jp" ? Vp() : e === "pl" ? zp() : e === "ru" ? qp() : e === "uk" ? $p() : Kp()
  },
  Yp = () => "The verification code is incorrect. Please check it and try again.",
  Jp = () => "Código inválido",
  Qp = () => "验证码不正确。请检查后重试。",
  Zp = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  em = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  tm = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  nm = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  rm = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  om = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  am = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  im = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  sm = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  cm = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Yp() : e === "pt" ? Jp() : e === "ch" ? Qp() : e === "de" ? Zp() : e === "es" ? em() : e === "fr" ? tm() : e === "it" ? nm() : e === "jp" ? rm() : e === "pl" ? om() : e === "ru" ? am() : e === "uk" ? im() : sm()
  },
  um = () => "Invalid discord.",
  lm = () => "Discord inválido.",
  dm = () => "无效的 Discord。",
  _m = () => "Ungültiger Discord.",
  fm = () => "Discord inválido.",
  pm = () => "Discord invalide.",
  mm = () => "Discord non valido.",
  hm = () => "無効なDiscordアカウントです。",
  gm = () => "Nieprawidłowy Discord.",
  ym = () => "Неверный Discord.",
  wm = () => "Некоректний Discord.",
  bm = () => "Discord không hợp lệ.",
  vm = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? um() : e === "pt" ? lm() : e === "ch" ? dm() : e === "de" ? _m() : e === "es" ? fm() : e === "fr" ? pm() : e === "it" ? mm() : e === "jp" ? hm() : e === "pl" ? gm() : e === "ru" ? ym() : e === "uk" ? wm() : bm()
  },
  Em = () => "The name contains disallowed characters or words. Please choose a different name.",
  Tm = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Sm = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Om = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Am = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Rm = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Dm = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Im = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Nm = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  km = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Cm = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Pm = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  yr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Em() : e === "pt" ? Tm() : e === "ch" ? Sm() : e === "de" ? Om() : e === "es" ? Am() : e === "fr" ? Rm() : e === "it" ? Dm() : e === "jp" ? Im() : e === "pl" ? Nm() : e === "ru" ? km() : e === "uk" ? Cm() : Pm()
  },
  xm = () => "Please enter a valid phone number with country code.",
  Lm = () => "Insira um número de telefone válido com código do país.",
  Mm = () => "请输入带国家代码的有效电话号码。",
  Bm = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Hm = () => "Introduce un número de teléfono válido con código de país.",
  Um = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Fm = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  jm = () => "国番号付きの有効な電話番号を入力してください。",
  Gm = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Wm = () => "Введите действительный номер телефона с кодом страны.",
  Vm = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  zm = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  qm = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? xm() : e === "pt" ? Lm() : e === "ch" ? Mm() : e === "de" ? Bm() : e === "es" ? Hm() : e === "fr" ? Um() : e === "it" ? Fm() : e === "jp" ? jm() : e === "pl" ? Gm() : e === "ru" ? Wm() : e === "uk" ? Vm() : zm()
  },
  $m = () => "Phone number not supported. Please try another number.",
  Km = () => "Número de telefone não suportado. Por favor, tente outro número.",
  Xm = () => "不支持此电话号码。请尝试其他号码。",
  Ym = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  Jm = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  Qm = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  Zm = () => "Numero di telefono non supportato. Prova con un altro numero.",
  eh = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  th = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  nh = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  rh = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  oh = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  ah = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? $m() : e === "pt" ? Km() : e === "ch" ? Xm() : e === "de" ? Ym() : e === "es" ? Jm() : e === "fr" ? Qm() : e === "it" ? Zm() : e === "jp" ? eh() : e === "pl" ? th() : e === "ru" ? nh() : e === "uk" ? rh() : oh()
  },
  ih = () => "The new leader must be a member of the alliance",
  sh = () => "O novo líder deve ser um membro da aliança",
  ch = () => "新盟主必须是联盟成员",
  uh = () => "Der neue Anführer muss Mitglied der Allianz sein",
  lh = () => "El nuevo líder debe ser miembro de la alianza",
  dh = () => "Le nouveau chef doit être membre de l’alliance",
  _h = () => "Il nuovo leader deve essere un membro dell'alleanza",
  fh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  ph = () => "Nowy lider musi być członkiem sojuszu",
  mh = () => "Новый лидер должен быть участником альянса",
  hh = () => "Новий лідер має бути учасником альянсу",
  gh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  yh = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? ih() : e === "pt" ? sh() : e === "ch" ? ch() : e === "de" ? uh() : e === "es" ? lh() : e === "fr" ? dh() : e === "it" ? _h() : e === "jp" ? fh() : e === "pl" ? ph() : e === "ru" ? mh() : e === "uk" ? hh() : gh()
  },
  wh = () => "Leaderboard is temporarily disabled",
  bh = () => "O ranking está temporariamente desativado",
  vh = () => "排行榜已暂时停用",
  Eh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Th = () => "La clasificación está deshabilitada temporalmente",
  Sh = () => "Le classement est temporairement désactivé",
  Oh = () => "La classifica è temporaneamente disattivata",
  Ah = () => "ランキングは一時的に無効になっています。",
  Rh = () => "Ranking jest tymczasowo wyłączony",
  Dh = () => "Таблица лидеров временно отключена",
  Ih = () => "Таблиця лідерів тимчасово вимкнена",
  Nh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  $e = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? wh() : e === "pt" ? bh() : e === "ch" ? vh() : e === "de" ? Eh() : e === "es" ? Th() : e === "fr" ? Sh() : e === "it" ? Oh() : e === "jp" ? Ah() : e === "pl" ? Rh() : e === "ru" ? Dh() : e === "uk" ? Ih() : Nh()
  },
  kh = () => "Location name is too big (max. 128 characters)",
  Ch = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Ph = () => "位置名称过长（最大 128 个字符）",
  xh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Lh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Mh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Bh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Hh = () => "場所の名前が長すぎます（最大128文字）。",
  Uh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Fh = () => "Название локации слишком длинное (макс. 128 символов)",
  jh = () => "Назва локації надто довга (макс. 128 символів)",
  Gh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Wh = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? kh() : e === "pt" ? Ch() : e === "ch" ? Ph() : e === "de" ? xh() : e === "es" ? Lh() : e === "fr" ? Mh() : e === "it" ? Bh() : e === "jp" ? Hh() : e === "pl" ? Uh() : e === "ru" ? Fh() : e === "uk" ? jh() : Gh()
  },
  Vh = () => "Multi-accounting",
  zh = () => "Múltiplas contas",
  qh = () => "多账号",
  $h = () => "Multi-Accounting",
  Kh = () => "Multi-cuentas",
  Xh = () => "Multi-comptes",
  Yh = () => "Multi-account",
  Jh = () => "複数アカウント使用",
  Qh = () => "Multi-konta",
  Zh = () => "Мультиаккаунт",
  eg = () => "Мультиакаунтинг",
  tg = () => "Nhiều tài khoản",
  ng = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Vh() : e === "pt" ? zh() : e === "ch" ? qh() : e === "de" ? $h() : e === "es" ? Kh() : e === "fr" ? Xh() : e === "it" ? Yh() : e === "jp" ? Jh() : e === "pl" ? Qh() : e === "ru" ? Zh() : e === "uk" ? eg() : tg()
  },
  rg = () => "Use more than one account to paint pixels",
  og = () => "Usar mais de uma conta para pintar",
  ag = () => "使用多个账号绘制像素",
  ig = () => "Mehr als ein Konto zum Malen verwenden",
  sg = () => "Uso de más de una cuenta para pintar píxeles",
  cg = () => "Utiliser plus d’un compte pour peindre",
  ug = () => "Usare più di un account per dipingere",
  lg = () => "複数のアカウントを使ってピクセルを塗った。",
  dg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  _g = () => "Использование более одного аккаунта для рисования",
  fg = () => "Використання більше ніж одного акаунта для малювання",
  pg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  mg = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? rg() : e === "pt" ? og() : e === "ch" ? ag() : e === "de" ? ig() : e === "es" ? sg() : e === "fr" ? cg() : e === "it" ? ug() : e === "jp" ? lg() : e === "pl" ? dg() : e === "ru" ? _g() : e === "uk" ? fg() : pg()
  },
  hg = n => `You can change your name again in ${n.days} days`,
  gg = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  yg = n => `你可以在 ${n.days} 天后再次修改名称`,
  wg = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  bg = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  vg = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  Eg = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  Tg = n => `${n.days}日後に再び名前を変更できます。`,
  Sg = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  Og = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Ag = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Rg = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Dg = (n, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? hg(n) : e === "pt" ? gg(n) : e === "ch" ? yg(n) : e === "de" ? wg(n) : e === "es" ? bg(n) : e === "fr" ? vg(n) : e === "it" ? Eg(n) : e === "jp" ? Tg(n) : e === "pl" ? Sg(n) : e === "ru" ? Og(n) : e === "uk" ? Ag(n) : Rg(n)
  },
  Ig = () => "No internet access or the servers are offline. Try again later.",
  Ng = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  kg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Cg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Pg = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  xg = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Lg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Mg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Bg = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Hg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Ug = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Fg = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  jg = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Ig() : e === "pt" ? Ng() : e === "ch" ? kg() : e === "de" ? Cg() : e === "es" ? Pg() : e === "fr" ? xg() : e === "it" ? Lg() : e === "jp" ? Mg() : e === "pl" ? Bg() : e === "ru" ? Hg() : e === "uk" ? Ug() : Fg()
  },
  Gg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Wg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Vg = () => "您无权验证电话号码。请尝试刷新页面。",
  zg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  qg = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  $g = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Kg = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Xg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Yg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Jg = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  Qg = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  Zg = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  ey = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Gg() : e === "pt" ? Wg() : e === "ch" ? Vg() : e === "de" ? zg() : e === "es" ? qg() : e === "fr" ? $g() : e === "it" ? Kg() : e === "jp" ? Xg() : e === "pl" ? Yg() : e === "ru" ? Jg() : e === "uk" ? Qg() : Zg()
  },
  ty = () => "Operation not allowed. Maybe you have too many favorite locations.",
  ny = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  ry = () => "操作不被允许。你的收藏位置可能过多。",
  oy = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  ay = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  iy = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  sy = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  cy = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  uy = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  ly = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  dy = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  _y = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  fy = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? ty() : e === "pt" ? ny() : e === "ch" ? ry() : e === "de" ? oy() : e === "es" ? ay() : e === "fr" ? iy() : e === "it" ? sy() : e === "jp" ? cy() : e === "pl" ? uy() : e === "ru" ? ly() : e === "uk" ? dy() : _y()
  },
  py = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  my = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  hy = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  gy = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  yy = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  wy = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  by = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  vy = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  Ey = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  Ty = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  Sy = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  Oy = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  Ay = (n, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? py(n) : e === "pt" ? my(n) : e === "ch" ? hy(n) : e === "de" ? gy(n) : e === "es" ? yy(n) : e === "fr" ? wy(n) : e === "it" ? by(n) : e === "jp" ? vy(n) : e === "pl" ? Ey(n) : e === "ru" ? Ty(n) : e === "uk" ? Sy(n) : Oy(n)
  },
  Ry = () => "You are trying to paint with a color you do not own",
  Dy = () => "Você está tentando pintar com uma cor que não possui",
  Iy = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Ny = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  ky = () => "Estás intentando pintar con un color que no posees",
  Cy = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Py = () => "Stai cercando di dipingere con un colore che non possiedi",
  xy = () => "所持していない色で塗ろうとしています。",
  Ly = () => "Próbujesz malować kolorem, którego nie posiadasz",
  My = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  By = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Hy = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  wr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Ry() : e === "pt" ? Dy() : e === "ch" ? Iy() : e === "de" ? Ny() : e === "es" ? ky() : e === "fr" ? Cy() : e === "it" ? Py() : e === "jp" ? xy() : e === "pl" ? Ly() : e === "ru" ? My() : e === "uk" ? By() : Hy()
  },
  Uy = () => "Phone already used",
  Fy = () => "Telefone já usado",
  jy = () => "电话号码已被使用",
  Gy = () => "Telefonnummer bereits verwendet",
  Wy = () => "Teléfono ya utilizado",
  Vy = () => "Téléphone déjà utilisé",
  zy = () => "Telefono già utilizzato",
  qy = () => "この電話番号は既に使用されています。",
  $y = () => "Numer telefonu jest już używany",
  Ky = () => "Телефон уже используется",
  Xy = () => "Номер телефону вже використовується",
  Yy = () => "Số điện thoại đã được sử dụng",
  Jy = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Uy() : e === "pt" ? Fy() : e === "ch" ? jy() : e === "de" ? Gy() : e === "es" ? Wy() : e === "fr" ? Vy() : e === "it" ? zy() : e === "jp" ? qy() : e === "pl" ? $y() : e === "ru" ? Ky() : e === "uk" ? Xy() : Yy()
  },
  Qy = () => "This phone number's region is not supported",
  Zy = () => "A região deste número de telefone não é suportada",
  ew = () => "此电话号码的地区不受支持",
  tw = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  nw = () => "La región de este número de teléfono no es compatible",
  rw = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  ow = () => "La regione di questo numero di telefono non è supportata",
  aw = () => "この電話番号の地域はサポートされていません",
  iw = () => "Region tego numeru telefonu nie jest obsługiwany",
  sw = () => "Регион этого номера телефона не поддерживается",
  cw = () => "Регіон цього номера телефону не підтримується",
  uw = () => "Vùng của số điện thoại này không được hỗ trợ",
  lw = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Qy() : e === "pt" ? Zy() : e === "ch" ? ew() : e === "de" ? tw() : e === "es" ? nw() : e === "fr" ? rw() : e === "it" ? ow() : e === "jp" ? aw() : e === "pl" ? iw() : e === "ru" ? sw() : e === "uk" ? cw() : uw()
  },
  dw = () => "Refresh your page to get the latest update",
  _w = () => "Recarregue sua página para obter as últimas atualizações",
  fw = () => "刷新页面以获取最新更新",
  pw = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  mw = () => "Actualiza la página para obtener la última versión",
  hw = () => "Actualisez la page pour obtenir les dernières mises à jour",
  gw = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  yw = () => "最新の状態にするにはページを再読み込みしてください。",
  ww = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  bw = () => "Обновите страницу, чтобы получить последние изменения",
  vw = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Ew = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  br = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? dw() : e === "pt" ? _w() : e === "ch" ? fw() : e === "de" ? pw() : e === "es" ? mw() : e === "fr" ? hw() : e === "it" ? gw() : e === "jp" ? yw() : e === "pl" ? ww() : e === "ru" ? bw() : e === "uk" ? vw() : Ew()
  },
  Tw = () => "The request timed out. Please try again.",
  Sw = () => "A solicitação expirou. Por favor, tente novamente.",
  Ow = () => "请求超时。请重试。",
  Aw = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Rw = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Dw = () => "La requête a expiré. Veuillez réessayer.",
  Iw = () => "La richiesta è scaduta. Riprova.",
  Nw = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  kw = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Cw = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Pw = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  xw = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Lw = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Tw() : e === "pt" ? Sw() : e === "ch" ? Ow() : e === "de" ? Aw() : e === "es" ? Rw() : e === "fr" ? Dw() : e === "it" ? Iw() : e === "jp" ? Nw() : e === "pl" ? kw() : e === "ru" ? Cw() : e === "uk" ? Pw() : xw()
  },
  Mw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Bw = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Hw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Uw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Fw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Gw = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Ww = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Vw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  qw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $w = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Kw = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Mw() : e === "pt" ? Bw() : e === "ch" ? Hw() : e === "de" ? Uw() : e === "es" ? Fw() : e === "fr" ? jw() : e === "it" ? Gw() : e === "jp" ? Ww() : e === "pl" ? Vw() : e === "ru" ? zw() : e === "uk" ? qw() : $w()
  },
  Xw = () => "The service is currently unavailable. Please try again later.",
  Yw = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Jw = () => "服务当前不可用。请稍后再试。",
  Qw = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Zw = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  eb = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  tb = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  nb = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  rb = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  ob = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  ab = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  ib = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  sb = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Xw() : e === "pt" ? Yw() : e === "ch" ? Jw() : e === "de" ? Qw() : e === "es" ? Zw() : e === "fr" ? eb() : e === "it" ? tb() : e === "jp" ? nb() : e === "pl" ? rb() : e === "ru" ? ob() : e === "uk" ? ab() : ib()
  },
  cb = () => "Too many attempts. Please try again later",
  ub = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  lb = () => "尝试次数过多，请稍后再试",
  db = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  _b = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  fb = () => "Trop de tentatives. Veuillez réessayer plus tard",
  pb = () => "Troppi tentativi. Riprova più tardi.",
  mb = () => "試行回数が多すぎます。後で再度お試しください。",
  hb = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  gb = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  yb = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  wb = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  vr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? cb() : e === "pt" ? ub() : e === "ch" ? lb() : e === "de" ? db() : e === "es" ? _b() : e === "fr" ? fb() : e === "it" ? pb() : e === "jp" ? mb() : e === "pl" ? hb() : e === "ru" ? gb() : e === "uk" ? yb() : wb()
  },
  bb = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  vb = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Eb = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Tb = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Sb = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Ob = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Ab = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Rb = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Db = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Ib = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Nb = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  kb = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Cb = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? bb() : e === "pt" ? vb() : e === "ch" ? Eb() : e === "de" ? Tb() : e === "es" ? Sb() : e === "fr" ? Ob() : e === "it" ? Ab() : e === "jp" ? Rb() : e === "pl" ? Db() : e === "ru" ? Ib() : e === "uk" ? Nb() : kb()
  },
  Pb = () => "The typed username does not match your current username.",
  xb = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Lb = () => "输入的用户名与当前用户名不匹配。",
  Mb = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Bb = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Hb = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Ub = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Fb = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  jb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Gb = () => "Введённое имя пользователя не совпадает с текущим.",
  Wb = () => "Введене імʼя користувача не збігається з поточним.",
  Vb = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  zb = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Pb() : e === "pt" ? xb() : e === "ch" ? Lb() : e === "de" ? Mb() : e === "es" ? Bb() : e === "fr" ? Hb() : e === "it" ? Ub() : e === "jp" ? Fb() : e === "pl" ? jb() : e === "ru" ? Gb() : e === "uk" ? Wb() : Vb()
  },
  qb = () => "Unexpected server error. Try again later.",
  $b = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Kb = () => "服务器出现意外错误。请稍后再试。",
  Xb = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Yb = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Jb = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Qb = () => "Errore imprevisto del server. Riprova più tardi.",
  Zb = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  e1 = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  t1 = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  n1 = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  r1 = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  m = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? qb() : e === "pt" ? $b() : e === "ch" ? Kb() : e === "de" ? Xb() : e === "es" ? Yb() : e === "fr" ? Jb() : e === "it" ? Qb() : e === "jp" ? Zb() : e === "pl" ? e1() : e === "ru" ? t1() : e === "uk" ? n1() : r1()
  },
  o1 = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  a1 = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  i1 = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  s1 = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  c1 = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  u1 = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  l1 = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  d1 = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  _1 = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  f1 = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  p1 = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  m1 = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  h1 = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? o1() : e === "pt" ? a1() : e === "ch" ? i1() : e === "de" ? s1() : e === "es" ? c1() : e === "fr" ? u1() : e === "it" ? l1() : e === "jp" ? d1() : e === "pl" ? _1() : e === "ru" ? f1() : e === "uk" ? p1() : m1()
  },
  g1 = () => "VPN or proxy detected. Please disable your VPN and try again.",
  y1 = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  w1 = () => "检测到VPN或代理。请关闭VPN后重试。",
  b1 = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  v1 = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  E1 = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  T1 = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  S1 = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  O1 = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  A1 = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  R1 = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  D1 = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  I1 = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? g1() : e === "pt" ? y1() : e === "ch" ? w1() : e === "de" ? b1() : e === "es" ? v1() : e === "fr" ? E1() : e === "it" ? T1() : e === "jp" ? S1() : e === "pl" ? O1() : e === "ru" ? A1() : e === "uk" ? R1() : D1()
  },
  N1 = () => "Failed to load WebAssembly module. Try to use another browser.",
  k1 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  C1 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  P1 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  x1 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  L1 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  M1 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  B1 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  H1 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  U1 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  F1 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  j1 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  G1 = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? N1() : e === "pt" ? k1() : e === "ch" ? C1() : e === "de" ? P1() : e === "es" ? x1() : e === "fr" ? L1() : e === "it" ? M1() : e === "jp" ? B1() : e === "pl" ? H1() : e === "ru" ? U1() : e === "uk" ? F1() : j1()
  },
  W1 = () => "You already have this item. Please refresh the page.",
  V1 = () => "Você já possui este item. Atualize a página.",
  z1 = () => "你已经拥有此物品。请刷新页面。",
  q1 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  $1 = () => "Ya tienes este ítem. Actualiza la página.",
  K1 = () => "Vous possédez déjà cet objet. Actualisez la page.",
  X1 = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Y1 = () => "このアイテムはすでに所持しています。ページを更新してください。",
  J1 = () => "Masz już ten przedmiot. Odśwież stronę.",
  Q1 = () => "У вас уже есть этот предмет. Обновите страницу.",
  Z1 = () => "У вас уже є цей предмет. Оновіть сторінку.",
  e0 = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Er = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? W1() : e === "pt" ? V1() : e === "ch" ? z1() : e === "de" ? q1() : e === "es" ? $1() : e === "fr" ? K1() : e === "it" ? X1() : e === "jp" ? Y1() : e === "pl" ? J1() : e === "ru" ? Q1() : e === "uk" ? Z1() : e0()
  },
  t0 = () => "You are already in an alliance",
  n0 = () => "Você já está em uma aliança",
  r0 = () => "你已经在一个联盟中",
  o0 = () => "Du bist bereits in einer Allianz",
  a0 = () => "Ya estás en una alianza",
  i0 = () => "Vous êtes déjà dans une alliance",
  s0 = () => "Sei già in un'alleanza",
  c0 = () => "すでにアライアンスに所属しています。",
  u0 = () => "Jesteś już w sojuszu",
  l0 = () => "Вы уже состоите в альянсе",
  d0 = () => "Ви вже перебуваєте в альянсі",
  _0 = () => "Bạn đã ở trong một liên minh",
  f0 = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? t0() : e === "pt" ? n0() : e === "ch" ? r0() : e === "de" ? o0() : e === "es" ? a0() : e === "fr" ? i0() : e === "it" ? s0() : e === "jp" ? c0() : e === "pl" ? u0() : e === "ru" ? l0() : e === "uk" ? d0() : _0()
  },
  p0 = () => "You are not allowed to do this",
  m0 = () => "Você não tem permissão para fazer isso",
  h0 = () => "你无权执行此操作",
  g0 = () => "Du bist dazu nicht berechtigt",
  y0 = () => "No tienes permiso para hacer esto",
  w0 = () => "Vous n’êtes pas autorisé à faire cela",
  b0 = () => "Non hai il permesso di farlo",
  v0 = () => "この操作を行う権限がありません。",
  E0 = () => "Nie masz uprawnień, aby to zrobić",
  T0 = () => "У вас нет прав для этого действия",
  S0 = () => "Ви не маєте права це робити",
  O0 = () => "Bạn không có quyền làm việc này",
  Ke = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? p0() : e === "pt" ? m0() : e === "ch" ? h0() : e === "de" ? g0() : e === "es" ? y0() : e === "fr" ? w0() : e === "it" ? b0() : e === "jp" ? v0() : e === "pl" ? E0() : e === "ru" ? T0() : e === "uk" ? S0() : O0()
  },
  A0 = () => "You do not have enough Droplets to buy this item.",
  R0 = () => "Você não tem Droplets suficientes para comprar este item.",
  D0 = () => "你的 Droplets 不足，无法购买此物品。",
  I0 = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  N0 = () => "No tienes suficientes Droplets para comprar este ítem.",
  k0 = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  C0 = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  P0 = () => "このアイテムを購入するのに十分なDropletsがありません。",
  x0 = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  L0 = () => "У вас недостаточно Droplets для покупки этого предмета.",
  M0 = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  B0 = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Tr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? A0() : e === "pt" ? R0() : e === "ch" ? D0() : e === "de" ? I0() : e === "es" ? N0() : e === "fr" ? k0() : e === "it" ? C0() : e === "jp" ? P0() : e === "pl" ? x0() : e === "ru" ? L0() : e === "uk" ? M0() : B0()
  },
  H0 = () => "You need to be logged in to paint",
  U0 = () => "Você precisa estar conectado para pintar",
  F0 = () => "你需要登录才能进行绘制",
  j0 = () => "Du musst eingeloggt sein, um zu malen",
  G0 = () => "Debes iniciar sesión para pintar",
  W0 = () => "Vous devez être connecté pour peindre",
  V0 = () => "Devi avere effettuato l'accesso per dipingere",
  z0 = () => "ペイントするにはログインが必要です。",
  q0 = () => "Musisz być zalogowany, aby malować",
  $0 = () => "Чтобы рисовать, нужно войти в аккаунт",
  K0 = () => "Щоб малювати, необхідно увійти в акаунт",
  X0 = () => "Bạn cần đăng nhập để tô",
  Sr = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? H0() : e === "pt" ? U0() : e === "ch" ? F0() : e === "de" ? j0() : e === "es" ? G0() : e === "fr" ? W0() : e === "it" ? V0() : e === "jp" ? z0() : e === "pl" ? q0() : e === "ru" ? $0() : e === "uk" ? K0() : X0()
  },
  Y0 = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  J0 = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Q0 = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Z0 = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  ev = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  tv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  nv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  rv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  ov = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  av = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  iv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  sv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  cv = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? Y0() : e === "pt" ? J0() : e === "ch" ? Q0() : e === "de" ? Z0() : e === "es" ? ev() : e === "fr" ? tv() : e === "it" ? nv() : e === "jp" ? rv() : e === "pl" ? ov() : e === "ru" ? av() : e === "uk" ? iv() : sv()
  },
  uv = n => `Your account has been suspended out until ${n.until}`,
  lv = n => `A sua conta está suspensa até ${n.until}`,
  dv = n => `你的账号已被暂停至 ${n.until}`,
  _v = n => `Dein Konto ist gesperrt bis ${n.until}`,
  fv = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  pv = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  mv = n => `Il tuo account è sospeso fino al ${n.until}`,
  hv = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  gv = n => `Twoje konto zostało zawieszone do ${n.until}`,
  yv = n => `Ваш аккаунт заблокирован до ${n.until}`,
  wv = n => `Ваш акаунт призупинено до ${n.until}`,
  bv = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  Or = (n, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? uv(n) : e === "pt" ? lv(n) : e === "ch" ? dv(n) : e === "de" ? _v(n) : e === "es" ? fv(n) : e === "fr" ? pv(n) : e === "it" ? mv(n) : e === "jp" ? hv(n) : e === "pl" ? gv(n) : e === "ru" ? yv(n) : e === "uk" ? wv(n) : bv(n)
  },
  vv = () => "A correction is already pending for this ticket.",
  Ev = () => "Já existe uma correção pendente para este ticket.",
  Tv = () => "此工单已存在待审核的更正请求。",
  Sv = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  Ov = () => "Ya hay una corrección pendiente para este ticket.",
  Av = () => "Une correction est déjà en attente pour ce ticket.",
  Rv = () => "Una correzione è già in sospeso per questo ticket.",
  Dv = () => "このチケットには未処理の修正があります。",
  Iv = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Nv = () => "Для этого тикета уже есть запрос на исправление.",
  kv = () => "Для цього тікета вже є запит на перевірці.",
  Cv = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Pv = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? vv() : e === "pt" ? Ev() : e === "ch" ? Tv() : e === "de" ? Sv() : e === "es" ? Ov() : e === "fr" ? Av() : e === "it" ? Rv() : e === "jp" ? Dv() : e === "pl" ? Iv() : e === "ru" ? Nv() : e === "uk" ? kv() : Cv()
  },
  xv = () => "You cannot review your own correction request.",
  Lv = () => "Você não pode revisar sua própria solicitação de correção.",
  Mv = () => "不能审核自己提交的更正请求。",
  Bv = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Hv = () => "No puedes revisar tu propia solicitud de corrección.",
  Uv = () => "Tu ne peux pas examiner ta propre demande de correction.",
  Fv = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  jv = () => "自分のリクエストはレビューできません。",
  Gv = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Wv = () => "Нельзя рассматривать собственный запрос.",
  Vv = () => "Не можна перевіряти власний запит.",
  zv = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  qv = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? xv() : e === "pt" ? Lv() : e === "ch" ? Mv() : e === "de" ? Bv() : e === "es" ? Hv() : e === "fr" ? Uv() : e === "it" ? Fv() : e === "jp" ? jv() : e === "pl" ? Gv() : e === "ru" ? Wv() : e === "uk" ? Vv() : zv()
  },
  $v = () => "This correction has already been reviewed.",
  Kv = () => "Esta correção já foi revisada.",
  Xv = () => "此请求已被审核。",
  Yv = () => "Diese Korrektur wurde bereits geprüft.",
  Jv = () => "Esta corrección ya ha sido revisada.",
  Qv = () => "Cette correction a déjà été examinée.",
  Zv = () => "Questa correzione è già stata revisionata.",
  eE = () => "このリクエストはすでにレビュー済みです。",
  tE = () => "Ta prośba została już rozpatrzona.",
  nE = () => "Этот запрос уже рассмотрен.",
  rE = () => "Цей запит вже перевірено.",
  oE = () => "Yêu cầu này đã được duyệt.",
  aE = (n = {}, t = {}) => {
    const e = t.locale ?? A();
    return e === "en" ? $v() : e === "pt" ? Kv() : e === "ch" ? Xv() : e === "de" ? Yv() : e === "es" ? Jv() : e === "fr" ? Qv() : e === "it" ? Zv() : e === "jp" ? eE() : e === "pl" ? tE() : e === "ru" ? nE() : e === "uk" ? rE() : oE()
  },
  Ue = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function aT(n) {
  const t = Math.floor(n / Ue.hour);
  n -= t * Ue.hour;
  const e = Math.floor(n / Ue.minute);
  n -= e * Ue.minute;
  const o = Math.floor(n / Ue.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function iT(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    o = String(n.getHours()).padStart(2, "0"),
    a = String(n.getMinutes()).padStart(2, "0"),
    i = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${o}:${a}:${i}`
}
const sT = {
    griefing: _f(),
    "multi-accounting": ng(),
    "hate-speech": Hf(),
    bot: Jc(),
    doxxing: md(),
    "inappropriate-content": lp(),
    other: Tu()
  },
  cT = {
    doxxing: Dd(),
    "hate-speech": Jf(),
    griefing: Of(),
    "multi-accounting": mg(),
    bot: lu(),
    "inappropriate-content": Tp(),
    other: Mu()
  },
  uT = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Ar = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  lT = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  iE = 365 * Ue.day;

function ao(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function dT(n, t = Date.now()) {
  const e = ao(n);
  return e === null ? !1 : e - t >= iE
}

function _T(n, t = Date.now()) {
  const e = ao(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    o = Math.floor(r / 1440),
    a = Math.floor(r % 1440 / 60),
    i = r % 60;
  return {
    days: o,
    hours: a,
    minutes: i
  }
}
const sE = [{
    tileSize: 1e3,
    zoom: 11
  }],
  cE = 4,
  uE = 6e3,
  lE = [{
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
  dE = {
    price: {
      googlePlayBilling: 1.2
    }
  },
  _E = {
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
  fE = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  pE = {
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
  mE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  We = {
    seasons: sE,
    regionSize: cE,
    refreshIntervalMs: uE,
    colors: lE,
    platforms: dE,
    products: _E,
    countries: fE,
    permissions: pE,
    settings: mE
  },
  sn = We,
  hE = We.seasons,
  io = We.seasons.length - 1,
  fT = We.seasons[io].zoom,
  pT = We.seasons[io].tileSize,
  mT = We.permissions,
  gE = We.settings,
  hT = We.platforms.price.googlePlayBilling;

function gT(n) {
  return sn.countries[n - 1]
}

function Cn(n) {
  return Cn.map.get(n)
}(n => {
  n.sharedProducts = Object.entries(sn.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), n.map = yE(n.sharedProducts, t => t.lookupKey)
})(Cn || (Cn = {}));

function yE(n, t) {
  const e = new Map;
  for (const r in n) {
    const o = Reflect.get(n, r),
      a = t(o, r, n);
    e.set(a, o)
  }
  return e
}
class y extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Rr(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    let a = e[o];
    a ? a.push(r) : e[o] = [r]
  }
  return e
}

function yT(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    e[o] = r
  }
  return e
}
const wE = 30 * Ue.minute;
var xt, Lt;
class bE {
  constructor(t) {
    X(this, xt, ie(!0));
    X(this, Lt, ie(null));
    G(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return Q(P(this, xt))
  }
  set online(t) {
    ee(P(this, xt), t, !0)
  }
  get serverTimeOffsetMs() {
    return Q(P(this, Lt))
  }
  set serverTimeOffsetMs(t) {
    ee(P(this, Lt), t, !0)
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
    const e = Rr(t, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
      r = {
        season: t[0].season,
        tiles: Object.values(e).map(s => ({
          x: s[0].tile[0],
          y: s[0].tile[1],
          pixels: {
            x: s.map(u => u.pixel[0]),
            y: s.map(u => u.pixel[1]),
            colors: s.map(u => u.colorIdx)
          }
        }))
      },
      o = JSON.stringify(r),
      a = await pt.getHeaders(o),
      i = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: a,
        credentials: "include"
      });
    if (i.status !== c.OK) {
      if (i.status === c.UNAUTHORIZED) throw new Error(Sr());
      if (i.status === c.FORBIDDEN) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(gr());
        const s = await i.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const u = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(Or({
            until: u.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(br());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(wr());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(mr());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await _r(s.tier)) return this.paint(t);
            throw new Error(En())
          } else console.error("Challenge required but no tier provided", s);
        at.refresh()
      } else throw new Error(m())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, o, a) => `/staff/tools/select-area/clear/s${r}/pixel/${o}/${a}`, e)
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
    if (e.status !== c.OK) throw new y(m(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: o,
      beforeTimestamp: a
    } = e, i = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: o,
        beforeTimestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== c.OK) throw new y(m(), i.status);
    return i.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, i = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== c.OK) throw new y(m(), i.status);
    return i.json()
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
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "timelapse_too_many_events" ? new y(Kw(), c.BAD_REQUEST) : new y(typeof a == "string" && a ? a : m(), c.BAD_REQUEST)
    }
    if (r.status !== c.OK) throw new y(m(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, i = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== c.OK) throw new y(m(), i.status);
    return i.json()
  }
  async sendPaintRequests(t, e, r, o) {
    const a = Rr(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      s = (await Promise.all(Object.values(a).map(async u => {
        const [_, l] = u[0].tile, p = u[0].season, f = {
          colors: u.map(w => w.colorIdx),
          coords: u.flatMap(w => w.pixel),
          csid: r
        }, d = JSON.stringify(f), g = e(p, _, l), h = await pt.getHeaders(d);
        return this.request(g, {
          method: "POST",
          body: d,
          headers: h,
          credentials: "include"
        })
      }))).filter(u => u.status !== c.OK);
    if (s.length) {
      const u = s[0];
      if (u.status === c.UNAUTHORIZED) throw new Error(Sr());
      if (u.status === c.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(gr());
        const _ = await u.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const l = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(Or({
            until: l.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(br());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(wr());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(mr());
        at.refresh()
      } else throw new Error(m())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const o = vE(t),
      a = await EE(o),
      i = new FormData;
    i.append("fingerprint", e), i.append("season", o.season.toString()), i.append("px0", o.offsetX.toString()), i.append("py0", o.offsetY.toString()), i.append("width", o.width.toString()), i.append("height", o.height.toString()), i.append("pixels", t.length.toString()), i.append("bitmap", a, "auto-painter.png"), i.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: i,
      credentials: "include"
    });
    if (s.status === c.FORBIDDEN) {
      const u = await s.json().catch(() => null);
      if (typeof(u == null ? void 0 : u.charges) == "number") throw new Error(Ay({
        charges: Math.floor(u.charges),
        pixels: t.length
      }));
      const _ = typeof(u == null ? void 0 : u.error) == "string" ? u.error.trim() : "";
      throw _ && _ !== "Forbidden" ? new Error(_) : new Error("Auto painter is restricted to administrators.")
    }
    if (s.status !== c.OK) throw new Error(m());
    return s.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [o, a]
  }) {
    const i = new URLSearchParams;
    i.set("x", String(o)), i.set("y", String(a));
    const s = await this.request(`/s${t}/pixel/${e}/${r}?${i.toString()}`, {
      credentials: "include"
    });
    if (s.status !== c.OK) {
      const u = await s.text();
      throw new Error(A_({
        err: u
      }))
    }
    return s.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [o, a],
    p1: [i, s]
  }) {
    const u = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${o}&y0=${a}&x1=${i}&y1=${s}`, {
      credentials: "include"
    });
    if (u.status !== c.OK) {
      const g = await u.text();
      throw console.error("Error while fetching pixel area info", g), new Error(m())
    }
    const _ = await u.arrayBuffer(),
      l = new DataView(_),
      p = Math.floor(_.byteLength / 5),
      f = new Uint32Array(p),
      d = new Uint8Array(p);
    for (let g = 0; g < p; g++) {
      const h = g * 5;
      f[g] = l.getUint32(h, !0), d[g] = l.getUint8(h + 4)
    }
    return {
      paintedBy: f,
      colors: d
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === c.OK) return await t.json()
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === c.OK) return (await t.json()).email
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(await t.text());
    return await t.json()
  }
  async driveStatus() {
    const t = await this.request("/drive/status", {
      credentials: "include"
    });
    return t.status !== c.OK ? !1 : !!(await t.json()).connected
  }
  async driveConnect(t) {
    const e = await this.request("/drive/connect", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: t
      })
    });
    if (e.status !== c.OK) throw new Error(`drive connect failed: ${e.status}`);
    return e.json()
  }
  async driveToken() {
    const t = await this.request("/drive/token", {
      credentials: "include",
      throwOnStatus: !1
    });
    if (t.status === c.CONFLICT) return null;
    if (t.status !== c.OK) throw new Error(`drive token failed: ${t.status}`);
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
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(pr());
    if (e.status !== c.OK) throw new Error(await e.text());
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
    if (t.status === c.NOT_FOUND) return null;
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
    if (t.status !== c.OK) throw new Error(m());
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
    if (e.status === c.BAD_REQUEST) throw new Error(qm());
    if (e.status === c.CONFLICT) throw new Error(Jy());
    if (e.status === c.FORBIDDEN) throw new Error(ey());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(vr());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(lw());
    if (e.status === c.LOCKED) throw new Error(h1());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(ah());
    if (e.status === c.NOT_ACCEPTABLE) throw new Error(I1());
    if (e.status === c.PRECONDITION_FAILED) throw new Error(Vl());
    if (e.status !== c.OK) throw new Error(m());
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
        "x-fp": await Sn()
      }
    });
    if (t.type === "otp") {
      if (r.status === c.GONE) throw new Error(Q_());
      if (r.status === c.BAD_REQUEST) throw new Error(cm());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(vr());
      if (r.status !== c.OK) throw new Error(m())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(Xp());
      if (r.status !== c.OK) throw new Error(m())
    }
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json(),
        o = (r == null ? void 0 : r.error) ?? "";
      if (o === "invalid_name") throw new Error(yr());
      if (o === "invalid_discord") throw new Error(vm());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const a = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(Dg({
          days: a
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== c.OK) throw new Error(m())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === c.BAD_REQUEST) throw new Error(zb());
    if (e.status !== c.OK) throw new Error(m())
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
    if (e.status === c.FORBIDDEN) throw new Error(fy());
    if (e.status !== c.OK) throw new Error(m())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== c.OK) throw new Error(m())
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
    if (r.status === c.BAD_REQUEST) throw new Error(Wh());
    if (r.status !== c.OK) throw new Error(m())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== c.OK) throw new Error($e());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== c.OK) throw new Error($e());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error($e())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error($e())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error($e())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error($e())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < wE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== c.OK) throw new Error(m());
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(hr()) : e.status === c.FORBIDDEN ? new Error(Tr()) : e.status === c.CONFLICT ? new Error(Er()) : new Error(m())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    if (t.status === c.NOT_FOUND) return;
    throw new Error(m())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === c.OK) return e.json();
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(Oc()) : r.error === "name_taken" ? new Error(_c()) : r.error == "empty_name" ? new Error(Hc()) : new Error(m())
    } else throw e.status === c.FORBIDDEN ? new Error(f0()) : new Error(m())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(m())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(Ke()) : e.status === c.BAD_REQUEST ? new Error(U_()) : new Error(m())
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
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(Ke()) : new Error(m())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(Ke()) : new Error($e())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    throw t.status === c.FORBIDDEN ? new Error(Ke()) : new Error(m())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case c.OK:
        return "success";
      case c.ALREADY_REPORTED:
        return "in-another-alliance";
      case c.UNAUTHORIZED:
        return "not-logged-in";
      case c.FORBIDDEN:
        return "banned";
      case c.BAD_REQUEST:
      case c.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(m())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(m())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return;
    if (e.status !== c.OK) throw new y(m(), e.status);
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
    if (r.status !== c.OK) throw new y(m(), r.status);
    const o = await r.json();
    return (Array.isArray(o) ? o : []).map(a => ({
      id: Number(a.id),
      name: String(a.name ?? ""),
      pixelsPainted: Number((a == null ? void 0 : a.pixels_painted) ?? 0)
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
    if (e.status === c.NOT_FOUND) return null;
    if (e.status !== c.OK) throw new y(m(), e.status);
    const r = await e.json(),
      o = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
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
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? o.length),
      members: o.map(a => ({
        id: Number(a == null ? void 0 : a.id),
        name: String((a == null ? void 0 : a.name) ?? `#${a==null?void 0:a.id}`),
        picture: (a == null ? void 0 : a.picture) ?? null,
        pixelsPainted: Number((a == null ? void 0 : a.pixelsPainted) ?? (a == null ? void 0 : a.pixels_painted) ?? 0),
        lastPixelLatitude: (a == null ? void 0 : a.lastPixelLatitude) ?? null,
        lastPixelLongitude: (a == null ? void 0 : a.lastPixelLongitude) ?? null,
        role: (a == null ? void 0 : a.alliance_role) === "admin" || (a == null ? void 0 : a.role) === "admin" ? "admin" : "member"
      }))
    }
  }
  async getAdminAllianceMembers(t, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      o = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (o.status === c.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (o.status !== c.OK) throw new y(m(), o.status);
    const a = await o.json(),
      i = Array.isArray(a == null ? void 0 : a.members) ? a.members : [];
    return {
      members: i.map(s => ({
        id: Number(s == null ? void 0 : s.id),
        name: String((s == null ? void 0 : s.name) ?? `#${s==null?void 0:s.id}`),
        picture: (s == null ? void 0 : s.picture) ?? null,
        pixelsPainted: Number((s == null ? void 0 : s.pixelsPainted) ?? (s == null ? void 0 : s.pixels_painted) ?? 0),
        lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
        lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
        role: (s == null ? void 0 : s.alliance_role) === "admin" || (s == null ? void 0 : s.role) === "admin" ? "admin" : "member"
      })),
      total: Number((a == null ? void 0 : a.total) ?? i.length)
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
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json().catch(() => ({}));
      throw new Error((o == null ? void 0 : o.error) ?? m())
    } else if (r.status !== c.OK) throw new y(m(), r.status)
  }
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json();
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(yh()) : new Error(m())
    } else if (r.status !== c.OK) throw new y(m(), r.status)
  }
  async banAllAllianceMembers(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (o.status !== c.OK) throw new y(m(), o.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== c.OK) throw new y(m(), o.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(Ke()) : new Error(m())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(Ke()) : new Error(m())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(m())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(m());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== c.OK) throw new Error(m())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(Ke()) : new Error(m())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getPlayAccountId() {
    const t = await this.request("/payment/play/account-id", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(m());
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
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json().catch(() => ({}));
      throw new Error((r == null ? void 0 : r.error) ?? "Invalid Play purchase")
    }
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(pr());
    if (e.status !== c.OK) throw new Error(m());
    return e.json()
  }
  async verifyPendingPlayPurchases() {
    const t = await this.request("/payment/play/verify-pending", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(m());
    return t.json()
  }
  async getPlayClaimStatus(t) {
    const e = await this.request(`/payment/play/claim/${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return {
      status: "unknown",
      droplets: 0
    };
    if (e.status !== c.OK) throw new Error(m());
    return e.json()
  }
  async listPlayPurchaseHistory() {
    const t = await this.request("/payment/play/history", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(m());
    return t.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((o, a) => Ar[o.reason] - Ar[a.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
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
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, o) {
    const a = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: o
      })
    });
    if (a.status !== c.OK && a.status !== c.BAD_REQUEST) throw new y(m(), a.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(t) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === c.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new y(Pv(), c.CONFLICT) : new y(m(), c.CONFLICT)
    }
    if (e.status !== c.OK) throw new y(m(), e.status);
    return e.json()
  }
  async listTicketReversals(t = {}) {
    const e = new URLSearchParams;
    t.status && e.set("status", t.status), t.page != null && e.set("page", String(t.page)), t.pageSize != null && e.set("pageSize", String(t.pageSize));
    const r = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== c.OK) throw new y(m(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status);
    return (await e.json()).reversal
  }
  async reviewTicketReversal(t, e, r) {
    const o = await this.request(`/staff/tickets/reversals/${t}/review`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        decision: e,
        notes: r
      })
    });
    if (o.status === c.FORBIDDEN) throw new y(qv(), c.FORBIDDEN);
    if (o.status === c.CONFLICT) throw new y(aE(), c.CONFLICT);
    if (o.status !== c.OK) throw new y(m(), o.status)
  }
  async request(t, e) {
    var i;
    let r;
    e = {
      credentials: "include",
      ...e
    };
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (s) {
      throw console.error("Fetch error:", s), this.online = !1, new Error(sl(), {
        cause: s
      })
    }
    if (r.status === c.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Cb());
    const o = ((i = r.headers.get("cf-mitigated")) == null ? void 0 : i.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (pt.setCfLikelyAutomated(!0), !await ro()) throw new Error(En());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(cv());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(Lw());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(sb())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
    const o = await r.json();
    return {
      items: o.items ?? [],
      globals: o.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
    return (await r.json()).items.map(a => ({
      ...a,
      suspensionRate: (a.ban + a.timeout) / a.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
    return (await r.json()).items.map(a => ({
      ...a,
      suspensionRate: (a.ban + a.timeout) / a.total
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
    if (e.status !== c.OK) throw new y(m(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new y(m(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new y(m(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      o = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (o.status !== c.OK) throw new y(m(), o.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== c.OK) throw new y(m(), o.status);
    return o.json()
  }
  async addUserNote(t, e, r) {
    const o = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      a = await this.request(o, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (a.status !== c.OK) throw new y(m(), a.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status);
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
    if (r.status !== c.OK) throw new y(m(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(a => {
      const i = a.is_dollar ?? a.isDollar ?? a.currency ?? a.Currency ?? 0;
      let s;
      if (typeof i == "string") {
        const p = i.toLowerCase();
        s = p === "usd" || p === "dollar" || p === "true"
      } else typeof i == "number" ? s = i !== 0 : s = !!i;
      const u = typeof a.createdAt == "string" ? a.createdAt : a.CreatedAt ? new Date(a.CreatedAt).toISOString() : "",
        _ = a.product_variant ?? a.productVariant,
        l = _ == null || _ === "" ? null : Number(_);
      return {
        product_name: String(a.productName ?? a.product_name ?? ""),
        amount: Number(a.amount ?? 0),
        price: Number(a.price ?? 0),
        is_dollar: s,
        created_at: u,
        product_variant: Number.isInteger(l) ? l : null
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
    if (r.status !== c.OK) throw new y(m(), r.status)
  }
  async postAdminRenameUser(t, e, r) {
    const o = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: r
      })
    });
    if (o.status === c.BAD_REQUEST) {
      const a = await o.json(),
        i = (a == null ? void 0 : a.error) ?? "";
      throw i === "invalid_name" ? new y(yr(), c.BAD_REQUEST) : new y(typeof i == "string" && i ? i : m(), c.BAD_REQUEST)
    }
    if (o.status !== c.OK) throw new y(m(), o.status)
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
    if (r.status === c.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "email_required" || a === "invalid_email" ? new y(f_(), c.BAD_REQUEST) : new y(typeof a == "string" && a ? a : m(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const i = new y(typeof(o == null ? void 0 : o.userId) == "number" ? e_({
          userId: o.userId
        }) : jd(), c.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (i.userId = o.userId), i
      }
      throw new y(m(), c.CONFLICT)
    }
    if (r.status === c.NOT_FOUND) throw new y("User not found.", c.NOT_FOUND);
    if (r.status !== c.OK) throw new y(m(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status);
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
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && r.set("sortBy", t.sortBy), t.sortDir && r.set("sortDir", t.sortDir), t.status && r.set("status", t.status), e === "appeals" && r.set("appealId", String(t.appealId));
    const o = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      a = await this.request(o, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== c.OK) throw new y(m(), a.status);
    const i = await a.json();
    return Array.isArray(i == null ? void 0 : i.tickets) ? i.tickets : []
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.appeals) ? o.appeals : []
  }
  async getModerationTranslate(t, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      o = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (o.status !== c.OK) throw new y(m(), o.status);
    const a = await o.json();
    return a == null ? void 0 : a.translation
  }
  mapTicketsToReportRows(t, e) {
    var o, a, i, s, u;
    const r = [];
    for (const _ of t) {
      const l = _.status ?? "open";
      if (e === "received") {
        for (const p of _.reports) r.push({
          id: String(p.id),
          ticketId: String(_.id),
          createdAt: p.createdAt ?? _.createdAt,
          byUser: {
            id: Number(p.reportedBy),
            name: String(p.reportedByName ?? p.reportedBy),
            picture: p.reportedByPicture ?? null
          },
          reason: String(p.reason),
          status: l
        });
        continue
      }
      if (e === "sent") {
        for (const p of _.reports) r.push({
          id: String(p.id),
          ticketId: String(_.id),
          createdAt: p.createdAt ?? _.createdAt,
          toUser: {
            id: Number(_.reportedUser.id),
            name: String(_.reportedUser.name),
            picture: _.reportedUser.picture ?? null
          },
          reason: String(p.reason),
          status: l
        });
        continue
      }
      r.push({
        id: String(_.id),
        ticketId: String(_.id),
        createdAt: _.createdAt,
        handledBy: _.status && _.status !== "open" ? {
          id: ((o = _.handledBy) == null ? void 0 : o.id) ?? 0,
          name: ((a = _.handledBy) == null ? void 0 : a.name) ?? "Moderator",
          picture: ((i = _.handledBy) == null ? void 0 : i.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((u = (s = _.reports) == null ? void 0 : s[0]) == null ? void 0 : u.reason) ?? "other"),
        status: l
      })
    }
    return r.sort((_, l) => new Date(l.createdAt).getTime() - new Date(_.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== c.OK) throw new y(m(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.NO_CONTENT) throw new y(m(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async banUsers(t, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (o.status !== c.OK) throw new y(m(), o.status)
  }
  async timeoutUsers(t, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (o.status !== c.OK) throw new y(m(), o.status)
  }
  async incrementUsersDroplets(t, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: r
      })
    });
    if (o.status !== c.OK) throw new y(m(), o.status)
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
    if (r.status !== c.OK) throw new y(m(), r.status)
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
    if (r.status !== c.OK) throw new y(m(), r.status);
    return await r.json()
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
    return r.json()
  }
  async postUsersSuspend(t, e, r) {
    let o;
    switch (e) {
      case "dashboard":
        o = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        o = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        o = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(o, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== c.OK) throw new Error(m())
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
    if (r.status !== c.OK) throw new y(m(), r.status);
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
    if (r.status !== c.OK) throw new y(m(), r.status);
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
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== c.OK) throw new y(m(), e.status);
    return e.json()
  }
  async submitBanAppeal(t) {
    const e = JSON.stringify({
        message: t
      }),
      r = await pt.getHeaders(e),
      o = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (o.status === c.FORBIDDEN) {
      const a = await o.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await _r(a.tier)) return this.submitBanAppeal(t);
        throw new y(En(), o.status)
      }
    }
    if (o.status !== c.OK && o.status !== c.ALREADY_REPORTED) throw new y(m(), o.status);
    return o.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
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
    if (r.status !== c.OK) throw new y(m(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
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
    if (t.status !== c.OK) throw new y(m(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const r = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      o = await this.request(r, {
        credentials: "include"
      });
    if (o.status !== c.OK) throw new y(m(), o.status);
    return o.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== c.OK) throw new y(m(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== c.OK) throw new y(m(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Sn()
      }
    });
    if (!r.ok) throw r.status === 500 ? new y(m(), r.status) : new y(Mp(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < hE.length,
      o = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= gE.tools.wayback.limit,
      a = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      i = t.cursorTs !== void 0,
      s = t.cursorUserId !== void 0,
      u = t.cursorAllianceId !== void 0,
      _ = t.cursorPixelsCount !== void 0,
      l = i || s || u || _,
      p = i && s && u && _;
    let f = !0;
    return l && (f = p && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !o || !a || !e || !f)
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
      o = e.toString(),
      a = await this.request(o.length > 0 ? `${r}?${o}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === c.FORBIDDEN) throw new Error("Access denied");
    if (a.status !== c.OK) throw new Error("Failed to fetch wayback events");
    return a.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) throw new Error(hr());
    if (e.status === c.FORBIDDEN) throw new Error(Tr());
    if (e.status === c.CONFLICT) throw new Error(Er());
    if (e.status !== c.OK) throw new Error(m())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new y(m(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new y(m(), r.status);
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
    if (r.status !== c.OK) throw new y(m(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
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
    if (r.status !== c.OK) throw new y(m(), r.status);
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
    if (r.status !== c.OK) throw new y(m(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new y(m(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
}
xt = new WeakMap, Lt = new WeakMap;

function vE(n) {
  var f, d;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const g of n)
    if (g.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = sn.seasons) == null ? void 0 : f[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let o = Number.POSITIVE_INFINITY,
    a = Number.POSITIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const u = n.map(g => {
      const h = Math.round(g.tile[0] * r + g.pixel[0]),
        w = Math.round(g.tile[1] * r + g.pixel[1]);
      return h < o && (o = h), w < a && (a = w), h > i && (i = h), w > s && (s = w), {
        x: h,
        y: w,
        colorIdx: g.colorIdx
      }
    }),
    _ = i - o + 1,
    l = s - a + 1;
  if (!Number.isFinite(_) || !Number.isFinite(l) || _ <= 0 || l <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const p = new Uint8ClampedArray(_ * l * 4);
  for (const {
      x: g,
      y: h,
      colorIdx: w
    }
    of u) {
    const k = (d = sn.colors) == null ? void 0 : d[w];
    if (!k) throw new Error(`Unknown palette color index: ${w}`);
    const T = g - o,
      S = ((h - a) * _ + T) * 4,
      [N, O, b] = k.rgb;
    p[S] = N, p[S + 1] = O, p[S + 2] = b, p[S + 3] = w === 0 ? 1 : 255
  }
  return {
    data: p,
    width: _,
    height: l,
    offsetX: o,
    offsetY: a,
    season: t
  }
}
async function EE(n) {
  const t = TE(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((o, a) => {
    t.toBlob(i => {
      if (!i) {
        a(new Error("Failed to encode auto painter bitmap."));
        return
      }
      o(i)
    }, "image/png")
  })
}

function TE(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let je = new bE(Ln);
typeof window < "u" && wo(() => {
  let n = je.online;
  bo(() => {
    const t = je.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const wT = n => new URL(n, Ln).toString();

function so(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function SE(n, t) {
  for (const e of t)
    if (so(n, e)) return !0;
  return !1
}

function bT(...n) {
  return n.filter(Boolean).join(" ")
}
const OE = typeof document < "u";
let Dr = 0;
var Mt, Bt, Ht;
class AE {
  constructor() {
    X(this, Mt, ie(nn([])));
    X(this, Bt, ie(nn([])));
    X(this, Ht, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    G(this, "addToast", t => {
      OE && this.toasts.unshift(t)
    });
    G(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: o
    }) => {
      const a = this.toasts.findIndex(s => s.id === t),
        i = this.toasts[a];
      this.toasts[a] = {
        ...i,
        ...e,
        id: t,
        title: o,
        type: r,
        updated: !0
      }
    });
    G(this, "create", t => {
      var s;
      const {
        message: e,
        ...r
      } = t, o = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : Dr++, a = t.dismissable === void 0 ? !0 : t.dismissable, i = t.type === void 0 ? "default" : t.type;
      return Vn(() => {
        this.toasts.find(_ => _.id === o) ? this.updateToast({
          id: o,
          data: t,
          type: i,
          message: e,
          dismissable: a
        }) : this.addToast({
          ...r,
          id: o,
          title: e,
          dismissable: a,
          type: i
        })
      }), o
    });
    G(this, "dismiss", t => (Vn(() => {
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
    G(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = P(this, Ht).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    G(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    G(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    G(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    G(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    G(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    G(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    G(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const o = t instanceof Promise ? t : t();
      let a = r !== void 0;
      return o.then(i => {
        if (typeof i == "object" && i && "ok" in i && typeof i.ok == "boolean" && !i.ok) {
          a = !1;
          const s = RE(i);
          this.create({
            id: r,
            type: "error",
            message: s
          })
        } else if (e.success !== void 0) {
          a = !1;
          const s = typeof e.success == "function" ? e.success(i) : e.success;
          this.create({
            id: r,
            type: "success",
            message: s
          })
        }
      }).catch(i => {
        if (e.error !== void 0) {
          a = !1;
          const s = typeof e.error == "function" ? e.error(i) : e.error;
          this.create({
            id: r,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var i;
        a && (this.dismiss(r), r = void 0), (i = e.finally) == null || i.call(e)
      }), r
    });
    G(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || Dr++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    G(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    G(this, "setHeight", t => {
      const e = P(this, Ht).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    G(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return Q(P(this, Mt))
  }
  set toasts(t) {
    ee(P(this, Mt), t, !0)
  }
  get heights() {
    return Q(P(this, Bt))
  }
  set heights(t) {
    ee(P(this, Bt), t, !0)
  }
}
Mt = new WeakMap, Bt = new WeakMap, Ht = new WeakMap;

function RE(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const Oe = new AE;

function DE(n, t) {
  return Oe.create({
    message: n,
    ...t
  })
}
var ln;
class vT {
  constructor() {
    X(this, ln, _t(() => Oe.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return Q(P(this, ln))
  }
}
ln = new WeakMap;
const IE = DE,
  NE = Object.assign(IE, {
    success: Oe.success,
    info: Oe.info,
    warning: Oe.warning,
    error: Oe.error,
    custom: Oe.custom,
    message: Oe.message,
    promise: Oe.promise,
    dismiss: Oe.dismiss,
    loading: Oe.loading,
    getActiveToasts: () => Oe.toasts.filter(n => !n.dismiss)
  });
var Ut, Ft, jt, Gt, Wt, Vt, zt, qt;
class kE {
  constructor() {
    G(this, "channel", new BroadcastChannel("user-channel"));
    X(this, Ut, ie());
    X(this, Ft, ie(!0));
    X(this, jt, ie());
    X(this, Gt, ie(Date.now()));
    X(this, Wt, _t(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((to.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    X(this, Vt, _t(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    X(this, zt, _t(() => {
      var t;
      return new ti(Mr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    X(this, qt, _t(() => {
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
    return Q(P(this, Ut))
  }
  set data(t) {
    ee(P(this, Ut), t, !0)
  }
  get loading() {
    return Q(P(this, Ft))
  }
  set loading(t) {
    ee(P(this, Ft), t, !0)
  }
  get notificationCount() {
    return Q(P(this, jt))
  }
  set notificationCount(t) {
    ee(P(this, jt), t, !0)
  }
  get lastFetch() {
    return Q(P(this, Gt))
  }
  set lastFetch(t) {
    ee(P(this, Gt), t)
  }
  get charges() {
    return Q(P(this, Wt))
  }
  set charges(t) {
    ee(P(this, Wt), t)
  }
  get cooldown() {
    return Q(P(this, Vt))
  }
  set cooldown(t) {
    ee(P(this, Vt), t)
  }
  get flagsBitmap() {
    return Q(P(this, zt))
  }
  set flagsBitmap(t) {
    ee(P(this, zt), t)
  }
  get timeoutUntil() {
    return Q(P(this, qt))
  }
  set timeoutUntil(t) {
    ee(P(this, qt), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await je.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && je.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (ea("userId", {
        id: this.data.id
      }), pt.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), NE.warning(jg(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await je.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return so((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return SE((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ut = new WeakMap, Ft = new WeakMap, jt = new WeakMap, Gt = new WeakMap, Wt = new WeakMap, Vt = new WeakMap, zt = new WeakMap, qt = new WeakMap;
const at = new kE;
let z;
const Le = new Array(128).fill(void 0);
Le.push(void 0, null, !0, !1);

function j(n) {
  return Le[n]
}
let yt = Le.length;

function J(n) {
  yt === Le.length && Le.push(Le.length + 1);
  const t = yt;
  return yt = Le[t], Le[t] = n, t
}

function Me(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    z.__wbindgen_export_0(J(e))
  }
}

function Xe(n) {
  return n == null
}
const co = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && co.decode();
let ft = null;

function Zt() {
  return (ft === null || ft.byteLength === 0) && (ft = new Uint8Array(z.memory.buffer)), ft
}

function en(n, t) {
  return n = n >>> 0, co.decode(Zt().subarray(n, n + t))
}

function CE(n) {
  n < 132 || (Le[n] = yt, yt = n)
}

function Ir(n) {
  const t = j(n);
  return CE(n), t
}
let Ye = null;

function cn() {
  return (Ye === null || Ye.buffer.detached === !0 || Ye.buffer.detached === void 0 && Ye.buffer !== z.memory.buffer) && (Ye = new DataView(z.memory.buffer)), Ye
}
let Ze = 0;
const tn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  PE = typeof tn.encodeInto == "function" ? function(n, t) {
    return tn.encodeInto(n, t)
  } : function(n, t) {
    const e = tn.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function $t(n, t, e) {
  if (e === void 0) {
    const s = tn.encode(n),
      u = t(s.length, 1) >>> 0;
    return Zt().subarray(u, u + s.length).set(s), Ze = s.length, u
  }
  let r = n.length,
    o = t(r, 1) >>> 0;
  const a = Zt();
  let i = 0;
  for (; i < r; i++) {
    const s = n.charCodeAt(i);
    if (s > 127) break;
    a[o + i] = s
  }
  if (i !== r) {
    i !== 0 && (n = n.slice(i)), o = e(o, r, r = i + n.length * 3, 1) >>> 0;
    const s = Zt().subarray(o + i, o + r),
      u = PE(n, s);
    i += u.written, o = e(o, r, i, 1) >>> 0
  }
  return Ze = i, o
}

function xE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Ze;
  z.set_fingerprint_v2(t, e)
}

function LE(n) {
  let t, e;
  try {
    const a = z.__wbindgen_add_to_stack_pointer(-16),
      i = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
      s = Ze;
    z.get_pawtected_endpoint_payload(a, i, s);
    var r = cn().getInt32(a + 0, !0),
      o = cn().getInt32(a + 4, !0);
    return t = r, e = o, en(r, o)
  } finally {
    z.__wbindgen_add_to_stack_pointer(16), z.__wbindgen_export_3(t, e, 1)
  }
}

function ME(n) {
  z.set_automated_browser(n)
}

function Tn(n) {
  z.set_user_id(n)
}

function BE(n) {
  z.set_automated_clicks(n)
}

function HE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Ze;
  z.set_detected_bot(t, e)
}

function UE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Ze;
  z.request_url(t, e)
}

function FE(n) {
  z.set_cf_likely_automated(n)
}

function jE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Ze;
  z.set_fingerprint(t, e)
}
async function GE(n, t) {
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

function WE() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = j(t).buffer;
    return J(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return Me(function(t, e) {
      const r = j(t).call(j(e));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return Me(function(t, e, r) {
      const o = j(t).call(j(e), j(r));
      return J(o)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = j(t).crypto;
    return J(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = j(t).document;
    return Xe(e) ? 0 : J(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return Me(function(t, e) {
      j(t).getRandomValues(j(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return Me(function(t, e) {
      const r = Reflect.get(j(t), j(e));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return Me(function(t) {
      return j(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return Me(function(t) {
      const e = j(t).innerWidth;
      return J(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = j(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = j(t).msCrypto;
    return J(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = j(t).navigator;
    return J(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(j(t));
    return J(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(en(t, e));
    return J(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const o = new Uint8Array(j(t), e >>> 0, r >>> 0);
    return J(o)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return J(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = j(t).node;
    return J(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = j(t).process;
    return J(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return Me(function(t, e) {
      j(t).randomFillSync(Ir(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return Me(function() {
      const t = module.require;
      return J(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    j(t).set(j(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return Xe(t) ? 0 : J(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return Xe(t) ? 0 : J(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return Xe(t) ? 0 : J(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return Xe(t) ? 0 : J(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const o = j(t).subarray(e >>> 0, r >>> 0);
    return J(o)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = j(t).versions;
    return J(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = j(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof j(t) == "function"
  }, n.wbg.__wbindgen_is_null = function(t) {
    return j(t) === null
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = j(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof j(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return j(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = z.memory;
    return J(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = j(e),
      o = typeof r == "number" ? r : void 0;
    cn().setFloat64(t + 8, Xe(o) ? 0 : o, !0), cn().setInt32(t + 0, !Xe(o), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = j(t);
    return J(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Ir(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = en(t, e);
    return J(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(en(t, e))
  }, n
}

function VE(n, t) {
  return z = n.exports, uo.__wbindgen_wasm_module = t, Ye = null, ft = null, z
}
async function uo(n) {
  if (z !== void 0) return z;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = WE();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await GE(await n, t);
  return VE(e, r)
}
class zE {
  constructor() {
    G(this, "interval");
    G(this, "storagesEmpty", !1);
    G(this, "storages", [new un, new Pn, new xn, new $E]);
    G(this, "pawtectLoaded");
    G(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!at.data || this.storagesEmpty || localStorage.getItem(un.KEY))) {
        for (const e of this.storages) {
          const r = e.get();
          if (r) {
            for (const o of this.storages) o.set(r);
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
    const e = Ue.day;
    for (const o of this.storages) {
      const a = o.get();
      if (a && !(a.timestamp + e < Date.now()) && a.userId !== t) return !0
    }
    const r = {
      userId: t,
      timestamp: Date.now()
    };
    for (const o of this.storages) o.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await uo(ta), (t = at.data) != null && t.id && Tn(at.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: qE((r, o) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && UE(a), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Zo(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Tn(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), FE(t)
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
    if (!await this.loadPawtect()) throw new Error(G1());
    const r = navigator.webdriver,
      [o, a, i] = await Promise.all([Sn(), ks(), Qa().catch(s => (console.error(s), {
        bot: !1
      }))]);
    return Tn(at.data.id), jE(o), xE(a), ME(r), BE(to.automatedClicks), i.bot && HE(i.botKind ?? "unknown"), LE(t)
  }
}

function qE(n) {
  return n.bind().bind()
}
const Be = class Be {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) r[o] = t[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(Be.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), o => o.charCodeAt(0)),
        r = new TextDecoder().decode(Be.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = Be.codec(e);
    localStorage.setItem(Be.KEY, btoa(String.fromCharCode(...r)))
  }
};
G(Be, "KEY", "ui_layout_v3"), G(Be, "XOR_KEY", "wplace-prefs");
let un = Be;
const He = class He {
  get() {
    try {
      const t = sessionStorage.getItem(He.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const o = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(o - He.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let r = "";
    for (const o of e) {
      const a = o.charCodeAt(0) + He.SHIFT & 65535;
      r += a.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(He.KEY, r)
  }
};
G(He, "KEY", "nav.cursor"), G(He, "SHIFT", 13);
let Pn = He;
const Je = class Je {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + Je.KEY + "=([^;]*)"));
    if (t) try {
      const [e, r] = decodeURIComponent(t[1]).split("."), o = parseInt(e, 36), a = parseInt(r, 36);
      return !Number.isFinite(o) || !Number.isFinite(a) ? void 0 : {
        userId: o,
        timestamp: a
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${Je.KEY}=${encodeURIComponent(e)};path=/;max-age=${Je.MAX_AGE};SameSite=Lax`
  }
};
G(Je, "KEY", "_pf_uid"), G(Je, "MAX_AGE", 3600 * 24 * 365);
let xn = Je;
class $E {
  constructor() {
    G(this, "packed")
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
const pt = new zE;
export {
  _T as $, ei as A, ks as B, gE as C, io as D, f_ as E, _r as F, hT as G, En as H, QE as I, Tp as J, Jf as K, Dd as L, lu as M, mg as N, Of as O, pT as P, ZE as Q, eT as R, mT as S, Ue as T, gT as U, iT as V, G1 as W, zb as X, wT as Y, dT as Z, cT as _, je as a, lT as a0, yT as a1, fT as a2, Mp as a3, sn as b, m as c, sT as d, md as e, Jc as f, _f as g, Hf as h, lp as i, to as j, qv as k, Cn as l, ng as m, Oe as n, bT as o, vT as p, aT as q, oT as r, uT as s, NE as t, at as u, Te as v, nT as w, tT as x, rT as y, pt as z
};