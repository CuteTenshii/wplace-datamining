var go = Object.defineProperty;
var Qn = t => {
  throw TypeError(t)
};
var yo = (t, n, e) => n in t ? go(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[n] = e;
var $ = (t, n, e) => yo(t, typeof n != "symbol" ? n + "" : n, e),
  wo = (t, n, e) => n.has(t) || Qn("Cannot " + e);
var B = (t, n, e) => (wo(t, n, "read from private field"), e ? e.call(t) : n.get(t)),
  Z = (t, n, e) => n.has(t) ? Qn("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
import {
  f as bo,
  h as vo,
  P as Bn,
  g as On
} from "./yew7vgrr.js";
import {
  e as fe,
  i as re,
  h as oe,
  g as an,
  bM as Eo,
  I as To,
  L as Zn,
  u as pt
} from "./Dbe4PVAU.js";
import {
  g as R
} from "./BhCkpOlh.js";
const ct = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Be = globalThis,
  gt = "10.40.0";

function Hn() {
  return Un(Be), Be
}

function Un(t) {
  const n = t.__SENTRY__ = t.__SENTRY__ || {};
  return n.version = n.version || gt, n[gt] = n[gt] || {}
}

function Fn(t, n, e = Be) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    o = r[gt] = r[gt] || {};
  return o[t] || (o[t] = n())
}
const So = "Sentry Logger ",
  er = {};

function Ao(t) {
  if (!("console" in Be)) return t();
  const n = Be.console,
    e = {},
    r = Object.keys(er);
  r.forEach(o => {
    const a = er[o];
    e[o] = n[o], n[o] = a
  });
  try {
    return t()
  } finally {
    r.forEach(o => {
      n[o] = e[o]
    })
  }
}

function Oo() {
  Gn().enabled = !0
}

function Ro() {
  Gn().enabled = !1
}

function Br() {
  return Gn().enabled
}

function Do(...t) {
  jn("log", ...t)
}

function Io(...t) {
  jn("warn", ...t)
}

function No(...t) {
  jn("error", ...t)
}

function jn(t, ...n) {
  ct && Br() && Ao(() => {
    Be.console[t](`${So}[${t}]:`, ...n)
  })
}

function Gn() {
  return ct ? Fn("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Zt = {
    enable: Oo,
    disable: Ro,
    isEnabled: Br,
    log: Do,
    warn: Io,
    error: No
  },
  Co = Object.prototype.toString;

function ko(t, n) {
  return Co.call(t) === `[object ${n}]`
}

function Po(t) {
  return ko(t, "Object")
}

function xo(t) {
  return !!(t != null && t.then && typeof t.then == "function")
}

function Lo(t, n, e) {
  try {
    Object.defineProperty(t, n, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    ct && Zt.log(`Failed to add non-enumerable property "${n}" to object`, t)
  }
}
let rt;

function fn(t) {
  if (rt !== void 0) return rt ? rt(t) : t();
  const n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = Be;
  return n in e && typeof e[n] == "function" ? (rt = e[n], rt(t)) : (rt = null, t())
}

function Rn() {
  return fn(() => Math.random())
}

function Mo() {
  return fn(() => Date.now())
}

function Bo(t, n = 0) {
  return typeof t != "string" || n === 0 || t.length <= n ? t : `${t.slice(0,n)}...`
}

function Ho() {
  const t = Be;
  return t.crypto || t.msCrypto
}
let wn;

function Uo() {
  return Rn() * 16
}

function yt(t = Ho()) {
  try {
    if (t != null && t.randomUUID) return fn(() => t.randomUUID()).replace(/-/g, "")
  } catch {}
  return wn || (wn = "10000000100040008000" + 1e11), wn.replace(/[018]/g, n => (n ^ (Uo() & 15) >> n / 4).toString(16))
}
const Hr = 1e3;

function Ur() {
  return Mo() / Hr
}

function Fo() {
  const {
    performance: t
  } = Be;
  if (!(t != null && t.now) || !t.timeOrigin) return Ur;
  const n = t.timeOrigin;
  return () => (n + fn(() => t.now())) / Hr
}
let tr;

function jo() {
  return (tr ?? (tr = Fo()))()
}

function Go(t, n = {}) {
  if (n.user && (!t.ipAddress && n.user.ip_address && (t.ipAddress = n.user.ip_address), !t.did && !n.did && (t.did = n.user.id || n.user.email || n.user.username)), t.timestamp = n.timestamp || jo(), n.abnormal_mechanism && (t.abnormal_mechanism = n.abnormal_mechanism), n.ignoreDuration && (t.ignoreDuration = n.ignoreDuration), n.sid && (t.sid = n.sid.length === 32 ? n.sid : yt()), n.init !== void 0 && (t.init = n.init), !t.did && n.did && (t.did = `${n.did}`), typeof n.started == "number" && (t.started = n.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof n.duration == "number") t.duration = n.duration;
  else {
    const e = t.timestamp - t.started;
    t.duration = e >= 0 ? e : 0
  }
  n.release && (t.release = n.release), n.environment && (t.environment = n.environment), !t.ipAddress && n.ipAddress && (t.ipAddress = n.ipAddress), !t.userAgent && n.userAgent && (t.userAgent = n.userAgent), typeof n.errors == "number" && (t.errors = n.errors), n.status && (t.status = n.status)
}

function Fr(t, n, e = 2) {
  if (!n || typeof n != "object" || e <= 0) return n;
  if (t && Object.keys(n).length === 0) return t;
  const r = {
    ...t
  };
  for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = Fr(r[o], n[o], e - 1));
  return r
}

function nr() {
  return yt()
}
const Dn = "_sentrySpan";

function rr(t, n) {
  n ? Lo(t, Dn, n) : delete t[Dn]
}

function or(t) {
  return t[Dn]
}
const Wo = 100;
class et {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: nr(),
      sampleRand: Rn()
    }
  }
  clone() {
    const n = new et;
    return n._breadcrumbs = [...this._breadcrumbs], n._tags = {
      ...this._tags
    }, n._attributes = {
      ...this._attributes
    }, n._extra = {
      ...this._extra
    }, n._contexts = {
      ...this._contexts
    }, this._contexts.flags && (n._contexts.flags = {
      values: [...this._contexts.flags.values]
    }), n._user = this._user, n._level = this._level, n._session = this._session, n._transactionName = this._transactionName, n._fingerprint = this._fingerprint, n._eventProcessors = [...this._eventProcessors], n._attachments = [...this._attachments], n._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    }, n._propagationContext = {
      ...this._propagationContext
    }, n._client = this._client, n._lastEventId = this._lastEventId, n._conversationId = this._conversationId, rr(n, or(this)), n
  }
  setClient(n) {
    this._client = n
  }
  setLastEventId(n) {
    this._lastEventId = n
  }
  getClient() {
    return this._client
  }
  lastEventId() {
    return this._lastEventId
  }
  addScopeListener(n) {
    this._scopeListeners.push(n)
  }
  addEventProcessor(n) {
    return this._eventProcessors.push(n), this
  }
  setUser(n) {
    return this._user = n || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    }, this._session && Go(this._session, {
      user: n
    }), this._notifyScopeListeners(), this
  }
  getUser() {
    return this._user
  }
  setConversationId(n) {
    return this._conversationId = n || void 0, this._notifyScopeListeners(), this
  }
  setTags(n) {
    return this._tags = {
      ...this._tags,
      ...n
    }, this._notifyScopeListeners(), this
  }
  setTag(n, e) {
    return this.setTags({
      [n]: e
    })
  }
  setAttributes(n) {
    return this._attributes = {
      ...this._attributes,
      ...n
    }, this._notifyScopeListeners(), this
  }
  setAttribute(n, e) {
    return this.setAttributes({
      [n]: e
    })
  }
  removeAttribute(n) {
    return n in this._attributes && (delete this._attributes[n], this._notifyScopeListeners()), this
  }
  setExtras(n) {
    return this._extra = {
      ...this._extra,
      ...n
    }, this._notifyScopeListeners(), this
  }
  setExtra(n, e) {
    return this._extra = {
      ...this._extra,
      [n]: e
    }, this._notifyScopeListeners(), this
  }
  setFingerprint(n) {
    return this._fingerprint = n, this._notifyScopeListeners(), this
  }
  setLevel(n) {
    return this._level = n, this._notifyScopeListeners(), this
  }
  setTransactionName(n) {
    return this._transactionName = n, this._notifyScopeListeners(), this
  }
  setContext(n, e) {
    return e === null ? delete this._contexts[n] : this._contexts[n] = e, this._notifyScopeListeners(), this
  }
  setSession(n) {
    return n ? this._session = n : delete this._session, this._notifyScopeListeners(), this
  }
  getSession() {
    return this._session
  }
  update(n) {
    if (!n) return this;
    const e = typeof n == "function" ? n(this) : n,
      r = e instanceof et ? e.getScopeData() : Po(e) ? n : void 0,
      {
        tags: o,
        attributes: a,
        extra: i,
        user: s,
        contexts: c,
        level: _,
        fingerprint: u = [],
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
      ...c
    }, s && Object.keys(s).length && (this._user = s), _ && (this._level = _), u.length && (this._fingerprint = u), p && (this._propagationContext = p), f && (this._conversationId = f), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, rr(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: nr(),
      sampleRand: Rn()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(n, e) {
    var a;
    const r = typeof e == "number" ? e : Wo;
    if (r <= 0) return this;
    const o = {
      timestamp: Ur(),
      ...n,
      message: n.message ? Bo(n.message, 2048) : n.message
    };
    return this._breadcrumbs.push(o), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (a = this._client) == null || a.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1]
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this
  }
  addAttachment(n) {
    return this._attachments.push(n), this
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
      span: or(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(n) {
    return this._sdkProcessingMetadata = Fr(this._sdkProcessingMetadata, n, 2), this
  }
  setPropagationContext(n) {
    return this._propagationContext = n, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(n, e) {
    const r = (e == null ? void 0 : e.event_id) || yt();
    if (!this._client) return ct && Zt.warn("No client configured on scope - will not capture exception!"), r;
    const o = new Error("Sentry syntheticException");
    return this._client.captureException(n, {
      originalException: n,
      syntheticException: o,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(n, e, r) {
    const o = (r == null ? void 0 : r.event_id) || yt();
    if (!this._client) return ct && Zt.warn("No client configured on scope - will not capture message!"), o;
    const a = (r == null ? void 0 : r.syntheticException) ?? new Error(n);
    return this._client.captureMessage(n, e, {
      originalException: n,
      syntheticException: a,
      ...r,
      event_id: o
    }, this), o
  }
  captureEvent(n, e) {
    const r = n.event_id || (e == null ? void 0 : e.event_id) || yt();
    return this._client ? (this._client.captureEvent(n, {
      ...e,
      event_id: r
    }, this), r) : (ct && Zt.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(n => {
      n(this)
    }), this._notifyingListeners = !1)
  }
}

function Vo() {
  return Fn("defaultCurrentScope", () => new et)
}

function zo() {
  return Fn("defaultIsolationScope", () => new et)
}
class $o {
  constructor(n, e) {
    let r;
    n ? r = n : r = new et;
    let o;
    e ? o = e : o = new et, this._stack = [{
      scope: r
    }], this._isolationScope = o
  }
  withScope(n) {
    const e = this._pushScope();
    let r;
    try {
      r = n(e)
    } catch (o) {
      throw this._popScope(), o
    }
    return xo(r) ? r.then(o => (this._popScope(), o), o => {
      throw this._popScope(), o
    }) : (this._popScope(), r)
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
    const n = this.getScope().clone();
    return this._stack.push({
      client: this.getClient(),
      scope: n
    }), n
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop()
  }
}

function dt() {
  const t = Hn(),
    n = Un(t);
  return n.stack = n.stack || new $o(Vo(), zo())
}

function qo(t) {
  return dt().withScope(t)
}

function Ko(t, n) {
  const e = dt();
  return e.withScope(() => (e.getStackTop().scope = t, n(t)))
}

function ar(t) {
  return dt().withScope(() => t(dt().getIsolationScope()))
}

function Xo() {
  return {
    withIsolationScope: ar,
    withScope: qo,
    withSetScope: Ko,
    withSetIsolationScope: (t, n) => ar(n),
    getCurrentScope: () => dt().getScope(),
    getIsolationScope: () => dt().getIsolationScope()
  }
}

function jr(t) {
  const n = Un(t);
  return n.acs ? n.acs : Xo()
}

function Yo() {
  const t = Hn();
  return jr(t).getCurrentScope()
}

function Jo() {
  const t = Hn();
  return jr(t).getIsolationScope()
}

function Qo(t, n) {
  return Yo().captureException(t, void 0)
}

function Zo(t, n) {
  Jo().setContext(t, n)
}
const ea = "" + new URL("../assets/pawtect_wasm_bg.Ckfht_86.wasm", import.meta.url).href;
var ta = "2.0.0";
const j = {
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
class J extends Error {
  constructor(n, e) {
    super(e), this.state = n, this.name = "BotdError", Object.setPrototypeOf(this, J.prototype)
  }
}

function na(t, n) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const o in n) {
    const a = n[o],
      i = a(t);
    let s = {
      bot: !1
    };
    typeof i == "string" ? s = {
      bot: !0,
      botKind: i
    } : i && (s = {
      bot: !0,
      botKind: j.Unknown
    }), e[o] = s, s.bot && (r = s)
  }
  return [e, r]
}
async function ra(t) {
  const n = {},
    e = Object.keys(t);
  return await Promise.all(e.map(async r => {
    const o = t[r];
    try {
      n[r] = {
        value: await o(),
        state: 0
      }
    } catch (a) {
      a instanceof J ? n[r] = {
        state: a.state,
        error: `${a.name}: ${a.message}`
      } : n[r] = {
        state: -3,
        error: a instanceof Error ? `${a.name}: ${a.message}` : String(a)
      }
    }
  })), n
}

function oa({
  appVersion: t
}) {
  if (t.state !== 0) return !1;
  if (/headless/i.test(t.value)) return j.HeadlessChrome;
  if (/electron/i.test(t.value)) return j.Electron;
  if (/slimerjs/i.test(t.value)) return j.SlimerJS
}

function en(t, n) {
  return t.indexOf(n) !== -1
}

function xe(t, n) {
  return t.indexOf(n) !== -1
}

function aa(t, n) {
  if ("find" in t) return t.find(n);
  for (let e = 0; e < t.length; e++)
    if (n(t[e], e, t)) return t[e]
}

function ir(t) {
  return Object.getOwnPropertyNames(t)
}

function In(t, ...n) {
  for (const e of n)
    if (typeof e == "string") {
      if (en(t, e)) return !0
    } else if (aa(t, o => e.test(o)) != null) return !0;
  return !1
}

function ut(t) {
  return t.reduce((n, e) => n + (e ? 1 : 0), 0)
}

function ia({
  documentElementKeys: t
}) {
  if (t.state !== 0) return !1;
  if (In(t.value, "selenium", "webdriver", "driver")) return j.Selenium
}

function sa({
  errorTrace: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return j.PhantomJS
}

function ca({
  evalLength: t,
  browserKind: n,
  browserEngineKind: e
}) {
  if (t.state !== 0 || n.state !== 0 || e.state !== 0) return;
  const r = t.value;
  return e.value === "unknown" ? !1 : r === 37 && !en(["webkit", "gecko"], e.value) || r === 39 && !en(["internet_explorer"], n.value) || r === 33 && !en(["chromium"], e.value)
}

function ua({
  functionBind: t
}) {
  if (t.state === -2) return j.PhantomJS
}

function la({
  languages: t
}) {
  if (t.state === 0 && t.value.length === 0) return j.HeadlessChrome
}

function da({
  mimeTypesConsistent: t
}) {
  if (t.state === 0 && !t.value) return j.Unknown
}

function _a({
  notificationPermissions: t,
  browserKind: n
}) {
  if (n.state !== 0 || n.value !== "chrome") return !1;
  if (t.state === 0 && t.value) return j.HeadlessChrome
}

function fa({
  pluginsArray: t
}) {
  if (t.state === 0 && !t.value) return j.HeadlessChrome
}

function pa({
  pluginsLength: t,
  android: n,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(t.state !== 0 || n.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || n.value || r.value !== "chromium") && t.value === 0) return j.HeadlessChrome
}

function ma({
  process: t
}) {
  var n;
  if (t.state !== 0) return !1;
  if (t.value.type === "renderer" || ((n = t.value.versions) === null || n === void 0 ? void 0 : n.electron) != null) return j.Electron
}

function ha({
  productSub: t,
  browserKind: n
}) {
  if (t.state !== 0 || n.state !== 0) return !1;
  if ((n.value === "chrome" || n.value === "safari" || n.value === "opera" || n.value === "wechat") && t.value !== "20030107") return j.Unknown
}

function ga({
  userAgent: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return j.PhantomJS;
  if (/Headless/i.test(t.value)) return j.HeadlessChrome;
  if (/Electron/i.test(t.value)) return j.Electron;
  if (/slimerjs/i.test(t.value)) return j.SlimerJS
}

function ya({
  webDriver: t
}) {
  if (t.state === 0 && t.value) return j.HeadlessChrome
}

function wa({
  webGL: t
}) {
  if (t.state === 0) {
    const {
      vendor: n,
      renderer: e
    } = t.value;
    if (n == "Brian Paul" && e == "Mesa OffScreen") return j.HeadlessChrome
  }
}

function ba({
  windowExternal: t
}) {
  if (t.state !== 0) return !1;
  if (/Sequentum/i.test(t.value)) return j.Sequentum
}

function va({
  windowSize: t,
  documentFocus: n
}) {
  if (t.state !== 0 || n.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = t.value;
  if (n.value && e === 0 && r === 0) return j.HeadlessChrome
}

function Ea({
  distinctiveProps: t
}) {
  if (t.state !== 0) return !1;
  const n = t.value;
  let e;
  for (e in n)
    if (n[e]) return e
}
const Ta = {
  detectAppVersion: oa,
  detectDocumentAttributes: ia,
  detectErrorTrace: sa,
  detectEvalLengthInconsistency: ca,
  detectFunctionBind: ua,
  detectLanguagesLengthInconsistency: la,
  detectNotificationPermissions: _a,
  detectPluginsArray: fa,
  detectPluginsLengthInconsistency: pa,
  detectProcess: ma,
  detectUserAgent: ga,
  detectWebDriver: ya,
  detectWebGL: wa,
  detectWindowExternal: ba,
  detectWindowSize: va,
  detectMimeTypesConsistent: da,
  detectProductSub: ha,
  detectDistinctiveProperties: Ea
};

function Sa() {
  const t = navigator.appVersion;
  if (t == null) throw new J(-1, "navigator.appVersion is undefined");
  return t
}

function Aa() {
  if (document.documentElement === void 0) throw new J(-1, "document.documentElement is undefined");
  const {
    documentElement: t
  } = document;
  if (typeof t.getAttributeNames != "function") throw new J(-2, "document.documentElement.getAttributeNames is not a function");
  return t.getAttributeNames()
}

function Oa() {
  try {
    null[0]()
  } catch (t) {
    if (t instanceof Error && t.stack != null) return t.stack.toString()
  }
  throw new J(-3, "errorTrace signal unexpected behaviour")
}

function Ra() {
  return eval.toString().length
}

function Da() {
  if (Function.prototype.bind === void 0) throw new J(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Wn() {
  var t, n;
  const e = window,
    r = navigator;
  return ut(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : ut(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : ut(["buildID" in navigator, "MozAppearance" in ((n = (t = document.documentElement) === null || t === void 0 ? void 0 : t.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Ia() {
  var t;
  const n = (t = navigator.userAgent) === null || t === void 0 ? void 0 : t.toLowerCase();
  return xe(n, "edg/") ? "edge" : xe(n, "trident") || xe(n, "msie") ? "internet_explorer" : xe(n, "wechat") ? "wechat" : xe(n, "firefox") ? "firefox" : xe(n, "opera") || xe(n, "opr") ? "opera" : xe(n, "chrome") ? "chrome" : xe(n, "safari") ? "safari" : "unknown"
}

function Na() {
  const t = Wn(),
    n = t === "chromium",
    e = t === "gecko",
    r = window,
    o = navigator,
    a = "connection";
  return n ? ut([!("SharedWorker" in r), o[a] && "ontypechange" in o[a], !("sinkId" in new Audio)]) >= 2 : e ? ut(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Ca() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function ka() {
  const t = window;
  return ut([!("MediaSettingsRange" in t), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3
}

function Pa() {
  const t = navigator,
    n = [],
    e = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
  if (e !== void 0 && n.push([e]), Array.isArray(t.languages)) Wn() === "chromium" && ka() || n.push(t.languages);
  else if (typeof t.languages == "string") {
    const r = t.languages;
    r && n.push(r.split(","))
  }
  return n
}

function xa() {
  if (navigator.mimeTypes === void 0) throw new J(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: t
  } = navigator;
  let n = Object.getPrototypeOf(t) === MimeTypeArray.prototype;
  for (let e = 0; e < t.length; e++) n && (n = Object.getPrototypeOf(t[e]) === MimeType.prototype);
  return n
}
async function La() {
  if (window.Notification === void 0) throw new J(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new J(-1, "navigator.permissions is undefined");
  const {
    permissions: t
  } = navigator;
  if (typeof t.query != "function") throw new J(-2, "navigator.permissions.query is not a function");
  try {
    const n = await t.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && n.state === "prompt"
  } catch {
    throw new J(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Ma() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new J(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Ba() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new J(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Ha() {
  const {
    process: t
  } = window, n = "window.process is";
  if (t === void 0) throw new J(-1, `${n} undefined`);
  if (t && typeof t != "object") throw new J(-3, `${n} not an object`);
  return t
}

function Ua() {
  const {
    productSub: t
  } = navigator;
  if (t === void 0) throw new J(-1, "navigator.productSub is undefined");
  return t
}

function Fa() {
  if (navigator.connection === void 0) throw new J(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new J(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function ja() {
  return navigator.userAgent
}

function Ga() {
  if (navigator.webdriver == null) throw new J(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Wa() {
  const t = document.createElement("canvas");
  if (typeof t.getContext != "function") throw new J(-2, "HTMLCanvasElement.getContext is not a function");
  const n = t.getContext("webgl");
  if (n === null) throw new J(-4, "WebGLRenderingContext is null");
  if (typeof n.getParameter != "function") throw new J(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = n.getParameter(n.VENDOR),
    r = n.getParameter(n.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function Va() {
  if (window.external === void 0) throw new J(-1, "window.external is undefined");
  const {
    external: t
  } = window;
  if (typeof t.toString != "function") throw new J(-2, "window.external.toString is not a function");
  return t.toString()
}

function za() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function $a() {
  const t = {
    [j.Awesomium]: {
      window: ["awesomium"]
    },
    [j.Cef]: {
      window: ["RunPerfTest"]
    },
    [j.CefSharp]: {
      window: ["CefSharp"]
    },
    [j.CoachJS]: {
      window: ["emit"]
    },
    [j.FMiner]: {
      window: ["fmget_targets"]
    },
    [j.Geb]: {
      window: ["geb"]
    },
    [j.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [j.Phantomas]: {
      window: ["__phantomas"]
    },
    [j.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [j.Rhino]: {
      window: ["spawn"]
    },
    [j.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [j.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [j.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [j.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let n;
  const e = {},
    r = ir(window);
  let o = [];
  window.document !== void 0 && (o = ir(window.document));
  for (n in t) {
    const a = t[n];
    if (a !== void 0) {
      const i = a.window === void 0 ? !1 : In(r, ...a.window),
        s = a.document === void 0 || !o.length ? !1 : In(o, ...a.document);
      e[n] = i || s
    }
  }
  return e
}
const qa = {
  android: Na,
  browserKind: Ia,
  browserEngineKind: Wn,
  documentFocus: Ca,
  userAgent: ja,
  appVersion: Sa,
  rtt: Fa,
  windowSize: za,
  pluginsLength: Ba,
  pluginsArray: Ma,
  errorTrace: Oa,
  productSub: Ua,
  windowExternal: Va,
  mimeTypesConsistent: xa,
  evalLength: Ra,
  webGL: Wa,
  webDriver: Ga,
  languages: Pa,
  notificationPermissions: La,
  documentElementKeys: Aa,
  functionBind: Da,
  process: Ha,
  distinctiveProps: $a
};
class Ka {
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
    const [n, e] = na(this.components, Ta);
    return this.detections = n, e
  }
  async collect() {
    return this.components = await ra(qa), this.components
  }
}

function Xa() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const t = new XMLHttpRequest;
    t.open("get", `https://m1.openfpcdn.io/botd/v${ta}/npm-monitoring`, !0), t.send()
  } catch (t) {
    console.error(t)
  }
}
async function Ya({
  monitoring: t = !0
} = {}) {
  t && Xa();
  const n = new Ka;
  return await n.collect(), n
}
let bn = null;
async function Ja() {
  return (await Qa()).detect()
}

function Qa() {
  return bn || (bn = Ya({
    monitoring: !1
  })), bn
}

function Gr(t) {
  const n = atob(t),
    e = new Uint8Array(n.length);
  for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
  return e
}

function Wr(t) {
  if (typeof Buffer < "u") return Buffer.from(t).toString("base64");
  let n = "";
  for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
  return btoa(n)
}
class Za {
  constructor(n) {
    $(this, "bytes");
    this.bytes = n ?? new Uint8Array
  }
  set(n, e) {
    const r = Math.floor(n / 8),
      o = n % 8;
    if (r >= this.bytes.length) {
      const i = new Uint8Array(r + 1),
        s = i.length - this.bytes.length;
      for (let c = 0; c < this.bytes.length; c++) i[c + s] = this.bytes[c];
      this.bytes = i
    }
    const a = this.bytes.length - 1 - r;
    e ? this.bytes[a] = this.bytes[a] | 1 << o : this.bytes[a] = this.bytes[a] & ~(1 << o)
  }
  get(n) {
    const e = Math.floor(n / 8),
      r = n % 8,
      o = this.bytes.length;
    return e > o ? !1 : (this.bytes[o - 1 - e] & 1 << r) !== 0
  }
}

function XE(t) {
  return new Promise((n, e) => {
    const r = new FileReader;
    r.onload = () => {
      const o = r.result;
      if (!o || typeof o != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      n(o.substring(o.indexOf(",") + 1))
    }, r.readAsDataURL(t)
  })
}

function YE(t) {
  if (typeof FileReader > "u") {
    const n = t.type || "application/octet-stream";
    return t.arrayBuffer().then(e => `data:${n};base64,${Wr(new Uint8Array(e))}`)
  }
  return new Promise((n, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const o = r.result;
      if (typeof o != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      n(o)
    }, r.onerror = e, r.readAsDataURL(t)
  })
}

function JE(t) {
  if (!t.startsWith("data:")) throw new Error("Could not parse data URL");
  const n = t.indexOf(",");
  if (n === -1) throw new Error("Could not parse data URL");
  const e = t.slice(5, n),
    r = t.slice(n + 1),
    o = e.indexOf(";base64"),
    a = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const i = Gr(r),
      s = new Uint8Array(i.byteLength);
    return s.set(i), new Blob([s], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}
async function O(t, n = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(t)),
    r = await crypto.subtle.digest(n, e);
  return Wr(new Uint8Array(r))
}
const X = Math,
  Te = () => 0;

function ei() {
  const t = X.acos || Te,
    n = X.acosh || Te,
    e = X.asin || Te,
    r = X.asinh || Te,
    o = X.atanh || Te,
    a = X.atan || Te,
    i = X.sin || Te,
    s = X.sinh || Te,
    c = X.cos || Te,
    _ = X.cosh || Te,
    u = X.tan || Te,
    p = X.tanh || Te,
    f = X.exp || Te,
    d = X.expm1 || Te,
    g = X.log1p || Te,
    h = v => X.pow(X.PI, v),
    y = v => X.log(v + X.sqrt(v * v - 1)),
    C = v => X.log(v + X.sqrt(v * v + 1)),
    T = v => X.log((1 + v) / (1 - v)) / 2,
    D = v => X.exp(v) - 1 / X.exp(v) / 2,
    S = v => (X.exp(v) + 1 / X.exp(v)) / 2,
    N = v => X.exp(v) - 1,
    A = v => (X.exp(2 * v) - 1) / (X.exp(2 * v) + 1),
    w = v => X.log(1 + v);
  return {
    acos: t(.12312423423423424),
    acosh: n(1e308),
    acoshPf: y(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: C(1),
    atanh: o(.5),
    atanhPf: T(.5),
    atan: a(.5),
    sin: i(-1e300),
    sinh: s(1),
    sinhPf: D(1),
    cos: c(10.000000000123),
    cosh: _(1),
    coshPf: S(1),
    tan: u(-1e300),
    tanh: p(1),
    tanhPf: A(1),
    exp: f(1),
    expm1: d(1),
    expm1Pf: N(1),
    log1p: g(10),
    log1pPf: w(10),
    powPI: h(-100)
  }
}
const ti = () => {
    const t = [];
    return {
      getErrors: () => t,
      captureError: (n, e = "") => {
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
          o = u => /.+(\s).+/g.test(u),
          a = n ?? {},
          i = typeof a.name == "string" ? a.name : "",
          s = typeof a.message == "string" ? a.message : "",
          c = o(s) ? e ? `${s} [${e}]` : s : void 0,
          _ = r[i] ? i : void 0;
        t.push({
          trustedName: _,
          trustedMessage: c
        })
      }
    }
  },
  Vr = ti(),
  {
    captureError: ae
  } = Vr,
  P = (t, n = "") => {
    try {
      return t()
    } catch (e) {
      return n ? ae(e, n) : ae(e)
    }
  },
  Ee = t => {
    try {
      return t()
    } catch {
      return
    }
  },
  ni = () => ({
    data: Vr.getErrors()
  });
var Ie = (t => (t.WINDOWS = "Windows", t.LINUX = "Linux", t.APPLE = "Apple", t.OTHER = "Other", t))(Ie || {});
const zr = !globalThis.document && globalThis.WorkerGlobalScope;

function ri() {
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    return (n instanceof Error ? n.message : String(n)).length + (t + "").split(t.name).join("").length
  }
}
const pn = ri(),
  pe = pn == 80,
  vt = pn == 58,
  Et = pn == 77,
  sr = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [pn] || null,
  $r = pe && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function qr() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function oi() {
  const t = {
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
      })()) return t.strict = !0, t;
    const e = /(Chrom(e|ium)|Microsoft Edge) PDF (Plugin|Viewer)/,
      r = [...navigator.plugins],
      o = r.filter(a => e.test(a.name)).length == 2;
    return r.length && !o ? (t.standard = !0, t) : (t.allow = !0, t)
  } catch {
    return t.unknown = !0, t
  }
}
const Nn = t => /windows phone/ig.test(t) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? "Windows" : /android/ig.test(t) ? "Android" : /cros/ig.test(t) ? "Chrome OS" : /linux/ig.test(t) ? "Linux" : /ipad/ig.test(t) ? "iPad" : /iphone/ig.test(t) ? "iPhone" : /ipod/ig.test(t) ? "iPod" : /ios/ig.test(t) ? "iOS" : /mac/ig.test(t) ? "Mac" : "Other";

function Kr(t, n) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? Ie.WINDOWS : /android|linux|cros/ig.test(t) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? Ie.APPLE : Ie.OTHER;
  if (!n) return [e];
  const r = /win/ig.test(n) ? Ie.WINDOWS : /android|arm|linux/ig.test(n) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? Ie.APPLE : Ie.OTHER;
  return [e, r]
}
const {
  userAgent: ai,
  platform: ii
} = globalThis.navigator || {}, [sn, cr] = Kr(ai, ii), Xr = ({
  ua: t,
  os: n,
  isBrave: e
}) => {
  const r = /ipad|iphone|ipod|ios|mac/ig.test(n),
    o = /OPR\//g.test(t),
    a = /Vivaldi/g.test(t),
    i = /DuckDuckGo/g.test(t),
    s = /YaBrowser/g.test(t),
    c = t.match(/(palemoon)\/(\d+)./i),
    _ = t.match(/(edgios|edg|edge|edga)\/(\d+)./i),
    u = _ && /edgios/i.test(_[1]),
    p = t.match(/(crios|chrome)\/(\d+)./i),
    f = t.match(/(fxios|firefox)\/(\d+)./i),
    g = /AppleWebKit/g.test(t) && /Safari/g.test(t) && !f && !p && !_ && t.match(/(version)\/(\d+)\.(\d|\.)+\s(mobile|safari)/i);
  if (p) {
    const h = p[1],
      y = p[2];
    return `${h} ${y}${o?" Opera":a?" Vivaldi":i?" DuckDuckGo":s?" Yandex":_?" Edge":e?" Brave":""}`
  } else if (u && _) {
    const h = _[1],
      y = _[2];
    return `${h} ${y}`
  } else if (f) {
    const h = c ? c[1] : f[1],
      y = c ? c[2] : f[2];
    return `${h} ${y}`
  } else if (r && g) {
    const h = "Safari",
      y = g[2];
    return `${h} ${y}`
  }
  return "unknown"
}, Yr = ({
  userAgent: t,
  excludeBuild: n = !0
}) => {
  if (!t) return "unknown";
  const e = /\((khtml|unlike|vizio|like gec|internal dummy|org\.eclipse|openssl|ipv6|via translate|safari|cardamon).+|xt\d+\)/ig,
    r = /\((.+)\)/,
    o = /((android).+)/i,
    a = /^(linux|[a-z]|wv|mobile|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|windows|(rv:|trident|webview|iemobile).+/i,
    i = /build\/.+\s|\sbuild\/.+/i,
    s = /android( |-)\d+/i,
    c = /((windows).+)/i,
    _ = /^(windows|ms(-|)office|microsoft|compatible|[a-z]|x64|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|outlook|ms(-|)office|microsoft|trident|\.net|msie|httrack|media center|infopath|aol|opera|iemobile|webbrowser).+/i,
    u = /w(ow|in)64/i,
    p = /cros/i,
    f = /^([a-z]|x11|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|trident).+/i,
    d = /\d+\.\d+\.\d+/i,
    g = /linux|x11|ubuntu|debian/i,
    h = /^([a-z]|x11|unknown|compatible|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|java|oracle|\+http|http|unknown|mozilla|konqueror|valve).+/i,
    y = /(cpu iphone|cpu os|iphone os|mac os|macos|intel os|ppc mac).+/i,
    C = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i,
    T = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
    D = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
    S = (N, A) => N.filter(w => A.test(w)).length;
  if (t = t.trim().replace(/\s{2,}/, " ").replace(e, ""), r.test(t)) {
    const N = t.match(r);
    if (!N) return "unknown";
    const w = N[0].slice(1, -1).replace(/,/g, ";").split(";").map(v => v.trim());
    if (S(w, o)) return w.map(v => s.test(v) ? s.exec(v)[0].replace("-", " ") : v).filter(v => !a.test(v)).join(" ").replace(n ? i : "", "").trim().replace(/\s{2,}/, " ");
    if (S(w, c)) return w.filter(v => !_.test(v)).join(" ").replace(/\sNT (\d+\.\d+)/, (v, E) => E == "10.0" ? " 10" : E == "6.3" ? " 8.1" : E == "6.2" ? " 8" : E == "6.1" ? " 7" : E == "6.0" ? " Vista" : E == "5.2" ? " XP Pro" : E == "5.1" ? " XP" : E == "5.0" ? " 2000" : E == "4.0" ? v : " " + E).replace(u, "(64-bit)").trim().replace(/\s{2,}/, " ");
    if (S(w, p)) return w.filter(v => !f.test(v)).join(" ").replace(n ? d : "", "").trim().replace(/\s{2,}/, " ");
    if (S(w, g)) return w.filter(v => !h.test(v)).join(" ").trim().replace(/\s{2,}/, " ");
    if (S(w, y)) return w.map(v => {
      if (T.test(v)) {
        const E = T.exec(v)[0],
          I = {
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
          H = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(E) || [])[0] || "").replace(/\./g, "_"),
          L = /^10/.test(H) ? H : (/^\d{2,}/.exec(H) || [])[0],
          U = L ? I[L] : void 0;
        return U ? `macOS ${U}` : E
      }
      return v
    }).filter(v => !C.test(v)).join(" ").replace(/\slike mac.+/ig, "").trim().replace(/\s{2,}/, " ");
    {
      const v = w.filter(E => D.test(E));
      return v.length ? v.join(" ").trim().replace(/\s{2,}/, " ") : w.join(" ")
    }
  } else return "unknown"
}, Jr = t => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(t) || [])[1];
  return pe && !!e
}, ce = (t = 0) => new Promise(n => setTimeout(n, t)), Qr = [
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
].map(t => String.fromCodePoint(...t)), Cn = `
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

function si(t) {
  var r;
  if (!t) return null;
  const n = /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i;
  return /radeon/i.test(t) ? "AMD" : /geforce/i.test(t) ? "NVIDIA" : (((r = n.exec(t)) == null ? void 0 : r[0]) || "other").toLocaleUpperCase()
}
const We = {},
  ke = {
    AUDIO: !1,
    CANVAS: !1,
    FONTS: !1,
    SCREEN: !1,
    TIME_ZONE: !1,
    WEBGL: !1
  };

function ci() {
  const t = {};
  return {
    getRecords: () => t,
    documentLie: (n, e) => {
      const r = e instanceof Array;
      return t[n] ? r ? t[n] = [...t[n], ...e] : t[n].push(e) : r ? t[n] = e : t[n] = [e]
    }
  }
}
const Zr = ci(),
  {
    documentLie: ne
  } = Zr,
  eo = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function mn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function ui(t) {
  try {
    if (!pe) return t;
    const n = t.document.createElement("div");
    n.setAttribute("id", mn()), n.setAttribute("style", eo), n.innerHTML = "<div><iframe></iframe></div>", t.document.body.appendChild(n);
    const e = [...[...n.childNodes][0].childNodes][0];
    if (!e) return null;
    const {
      contentWindow: r
    } = e || {};
    if (!r) return null;
    const o = r.document.createElement("div");
    return o.innerHTML = "<div><iframe></iframe></div>", r.document.body.appendChild(o), [...[...o.childNodes][0].childNodes][0].contentWindow
  } catch (n) {
    return ae(n, "client blocked behemoth iframe"), t
  }
}
const ur = mn(),
  ft = "Reflect" in globalThis;

function li(t) {
  return t.constructor.name == "TypeError"
}

function we({
  spawnErr: t,
  withStack: n,
  final: e
}) {
  try {
    throw t(), Error()
  } catch (r) {
    return li(r) ? n ? n(r) : !1 : !0
  } finally {
    e && e()
  }
}

function di(t) {
  try {
    return t(), !1
  } catch {
    return !0
  }
}

function lr(t) {
  return {
    [`function ${t}() { [native code] }`]: !0,
    [`function get ${t}() { [native code] }`]: !0,
    "function () { [native code] }": !0,
    [`function ${t}() {
    [native code]
}`]: !0,
    [`function get ${t}() {
    [native code]
}`]: !0,
    "function () {\n    [native code]\n}": !0
  }
}

function ot(t, n, e = 1) {
  const r = t;
  return e === 0 ? n.test(r.message) : n.test(r.stack.split(`
`)[e])
}
const _i = /at Function\.toString /,
  fi = /at Object\.toString/,
  pi = /at (Function\.)?\[Symbol.hasInstance\]/,
  mi = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  dr = /strict mode/;

function _r({
  scope: t,
  apiFunction: n,
  proto: e,
  obj: r,
  lieProps: o
}) {
  if (typeof n != "function") return {
    lied: 0,
    lieTypes: []
  };
  const a = n.name.replace(/get\s/, ""),
    i = r == null ? void 0 : r.name,
    s = Object.getPrototypeOf(n),
    c = self;
  let _ = {
    "failed illegal error": !!r && we({
      spawnErr: () => {
        r.prototype[a]
      }
    }),
    "failed undefined properties": !!r && !!i && /^(screen|navigator)$/i.test(i) && !!(Object.getOwnPropertyDescriptor(c[i.toLowerCase()], a) || ft && Reflect.getOwnPropertyDescriptor(c[i.toLowerCase()], a)),
    "failed call interface error": we({
      spawnErr: () => {
        new n, n.call(e)
      }
    }),
    "failed apply interface error": we({
      spawnErr: () => {
        new n, n.apply(e)
      }
    }),
    "failed new instance error": we({
      spawnErr: () => {
        new n
      }
    }),
    "failed class extends error": !Et && we({
      spawnErr: () => {
        class f extends n {}
      }
    }),
    "failed null conversion error": we({
      spawnErr: () => {
        Object.setPrototypeOf(n, null).toString()
      },
      final: () => {
        Object.setPrototypeOf(n, s)
      }
    }),
    "failed toString": !lr(a)[t.Function.prototype.toString.call(n)] || !lr("toString")[t.Function.prototype.toString.call(n.toString)],
    'failed "prototype" in function': "prototype" in n,
    "failed descriptor": !!(Object.getOwnPropertyDescriptor(n, "arguments") || Reflect.getOwnPropertyDescriptor(n, "arguments") || Object.getOwnPropertyDescriptor(n, "caller") || Reflect.getOwnPropertyDescriptor(n, "caller") || Object.getOwnPropertyDescriptor(n, "prototype") || Reflect.getOwnPropertyDescriptor(n, "prototype") || Object.getOwnPropertyDescriptor(n, "toString") || Reflect.getOwnPropertyDescriptor(n, "toString")),
    "failed own property": !!(n.hasOwnProperty("arguments") || n.hasOwnProperty("caller") || n.hasOwnProperty("prototype") || n.hasOwnProperty("toString")),
    "failed descriptor keys": Object.keys(Object.getOwnPropertyDescriptors(n)).sort().toString() != "length,name",
    "failed own property names": Object.getOwnPropertyNames(n).sort().toString() != "length,name",
    "failed own keys names": ft && Reflect.ownKeys(n).sort().toString() != "length,name",
    "failed object toString error": we({
      spawnErr: () => {
        Object.create(n).toString()
      },
      withStack: f => pe && !ot(f, _i)
    }) || we({
      spawnErr: () => {
        Object.create(new Proxy(n, {})).toString()
      },
      withStack: f => pe && !ot(f, fi)
    }),
    "failed at incompatible proxy error": we({
      spawnErr: () => {
        n.arguments, n.caller
      },
      withStack: f => vt && !ot(f, dr, 0)
    }),
    "failed at toString incompatible proxy error": we({
      spawnErr: () => {
        n.toString.arguments, n.toString.caller
      },
      withStack: f => vt && !ot(f, dr, 0)
    }),
    "failed at too much recursion error": we({
      spawnErr: () => {
        Object.setPrototypeOf(n, Object.create(n)).toString()
      },
      final: () => {
        Object.setPrototypeOf(n, s)
      }
    })
  };
  if (a == "toString" || !!o["Function.toString"] || !!o["Permissions.query"]) {
    const f = new Proxy(n, {});
    let d = new Proxy(n, {});
    const g = new Proxy(n, {});
    _ = {
      ..._,
      "failed at too much recursion __proto__ error": !we({
        spawnErr: () => {
          n.__proto__ = proxy, n++
        },
        final: () => {
          Object.setPrototypeOf(n, s)
        }
      }),
      "failed at chain cycle error": !we({
        spawnErr: () => {
          Object.setPrototypeOf(f, Object.create(f)).toString()
        },
        final: () => {
          Object.setPrototypeOf(f, s)
        }
      }),
      "failed at chain cycle __proto__ error": !we({
        spawnErr: () => {
          d.__proto__ = d, d++
        },
        final: () => {
          Object.setPrototypeOf(d, s)
        }
      }),
      "failed at reflect set proto": ft && we({
        spawnErr: () => {
          throw Reflect.setPrototypeOf(n, Object.create(n)), ur in n, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(n, s)
        }
      }),
      "failed at reflect set proto proxy": ft && !we({
        spawnErr: () => {
          Reflect.setPrototypeOf(g, Object.create(g)), ur in g
        },
        final: () => {
          Object.setPrototypeOf(g, s)
        }
      }),
      "failed at instanceof check error": pe && (we({
        spawnErr: () => {
          n instanceof n
        },
        withStack: h => !ot(h, pi)
      }) || we({
        spawnErr: () => {
          const h = new Proxy(n, {});
          h instanceof h
        },
        withStack: h => !ot(h, mi)
      })),
      "failed at define properties": pe && ft && di(() => {
        Object.defineProperty(n, "", {
          configurable: !0
        }).toString(), Reflect.deleteProperty(n, "")
      })
    }
  }
  const p = Object.keys(_).filter(f => !!_[f]);
  return {
    lied: p.length,
    lieTypes: p
  }
}

function hi(t) {
  const n = o => typeof o < "u" && !!o,
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
      let c;
      try {
        if (c = o(), !n(c)) return
      } catch {
        return
      }
      const _ = c.prototype ? c.prototype : c;
      [...new Set([...Object.getOwnPropertyNames(_), ...Object.keys(_)])].sort().forEach(u => {
        var g;
        if (u == "constructor" || !!i && !new Set(i).has(u) || !!s && new Set(s).has(u)) return;
        const f = /\s(.+)\]/,
          d = `${c.name?c.name:f.test(c)?(g=f.exec(c))==null?void 0:g[1]:void 0}.${u}`;
        r.push(d);
        try {
          const h = c.prototype ? c.prototype : c;
          let y;
          try {
            if (typeof h[u] == "function") {
              if (y = _r({
                  scope: t,
                  apiFunction: h[u],
                  proto: h,
                  obj: null,
                  lieProps: e
                }), y.lied) {
                ne(d, y.lieTypes), e[d] = y.lieTypes;
                return
              }
              return
            }
            if (u != "name" && u != "length" && u[0] !== u[0].toUpperCase()) {
              const S = ["failed descriptor.value undefined"];
              ne(d, S), e[d] = S;
              return
            }
          } catch {}
          const T = Object.getOwnPropertyDescriptor(h, u).get;
          if (y = _r({
              scope: t,
              apiFunction: T,
              proto: h,
              obj: c,
              lieProps: e
            }), y.lied) {
            ne(d, y.lieTypes), e[d] = y.lieTypes;
            return
          }
          return
        } catch {
          const y = "failed prototype test execution";
          ne(d, y), e[d] = [y];
          return
        }
      })
    }
  }
}

function gi() {
  const t = globalThis;
  if (zr) return {
    iframeWindow: t,
    div: void 0
  };
  try {
    const n = t.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      o = mn();
    r.setAttribute("id", o), e.appendChild(r), r.innerHTML = `<div style="${eo}"><iframe></iframe></div>`, document.body.appendChild(e);
    const a = t[n];
    return {
      iframeWindow: ui(a) || t,
      div: r
    }
  } catch (n) {
    return ae(n, "client blocked phantom iframe"), {
      iframeWindow: t,
      div: void 0
    }
  }
}

function yi(t) {
  const n = hi(t),
    {
      searchLies: e
    } = n;
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
  const r = n.getProps(),
    o = n.getPropsSearched();
  return {
    lieDetector: n,
    lieList: Object.keys(r).sort(),
    lieDetail: r,
    lieCount: Object.keys(r).reduce((a, i) => a + r[i].length, 0),
    propsSearched: o
  }
}
const wi = t => t && t.filter(n => !/object toString|toString incompatible proxy/.test(n)).length;
let cn, it, to = {},
  no = {},
  fr = !1;

function hn() {
  if (fr) return;
  fr = !0;
  const {
    iframeWindow: t,
    div: n
  } = gi() || {};
  cn = t, it = n;
  const {
    lieDetector: e,
    lieDetail: r
  } = yi(cn);
  if (!zr) {
    const o = e.getProps();
    to = Object.keys(o).reduce((a, i) => (a[i] = wi(o[i]), a), {}), no = JSON.parse(JSON.stringify(r))
  }
}

function gn() {
  return hn(), cn
}

function ro() {
  return hn(), it
}

function bi() {
  it == null || it.remove(), it = void 0, cn = void 0
}

function ze() {
  return hn(), to
}

function vi() {
  return hn(), no
}
const Ei = () => {
    const t = Zr.getRecords(),
      n = Object.keys(t).reduce((e, r) => (e += t[r].length, e), 0);
    return {
      data: t,
      totalLies: n
    }
  },
  Ti = t => typeof t == "function",
  Si = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
  tn = (t, {
    strict: n = !1
  } = {}) => {
    if (!t) return [];
    const e = [];
    [/([A-Z]{3,}[a-z])/g, /([a-z][A-Z]{3,})/g, /([a-z][A-Z]{2,}[a-z])/g, /([a-z][\d]{2,}[a-z])/g, /([A-Z][\d]{2,}[a-z])/g, /([a-z][\d]{2,}[A-Z])/g].forEach(u => {
      const p = t.match(u);
      if (p) return e.push(p.join(", "))
    });
    const o = [],
      a = t.replace(/\d|\W|_/g, " ").replace(/\s+/g, " ").trim().split(" ").join("_"),
      i = a.length,
      s = [...a];
    s.forEach((u, p) => {
      const f = p + 1,
        d = s[f];
      if (d !== "_" && u !== "_" && f !== i) {
        const h = u + d;
        Si.test(h) && o.push(h)
      }
    });
    const c = [...!n && o.length < 3 ? [] : o, ...!n && e.length < 4 ? [] : e],
      _ = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return c.filter(u => !_.includes(u))
  };

function oo(t) {
  if (t) return ("" + t).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...n) => `${n[1]}${n[6][0]}${n[6].slice(1).replace(/\d/g,"0")}s`)
}
const Ai = t => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + t).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  ao = t => {
    if (!t) return;
    const n = Ai(t),
      e = n.length,
      r = /\s{2,}|^\s|\s$/.test(t),
      o = /^ANGLE/.test(t) && !(/^ANGLE \((.+)\)/.exec(t) || [])[1],
      a = tn(t, {
        strict: !0
      }).join(", "),
      i = e && !r && !o,
      s = i && !a.length ? "high" : i && a.length ? "moderate" : "low",
      c = s == "high" ? "A" : s == "moderate" ? "C" : "F",
      _ = new Set([r ? "found extra spaces" : void 0, o ? "broken angle structure" : void 0]);
    return _.delete(void 0), {
      parts: n,
      warnings: [..._],
      gibbers: a,
      confidence: s,
      grade: c
    }
  },
  Oi = () => {
    const t = [];
    return {
      getBin: () => t,
      sendToTrash: (n, e, r = void 0) => {
        const a = Ti(e) ? "proxy behavior detected" : e;
        return t.push({
          name: n,
          value: a
        }), r
      }
    }
  },
  io = Oi(),
  {
    sendToTrash: se
  } = io,
  Ri = () => ({
    trashBin: io.getBin()
  });
async function Di() {
  const t = navigator.userAgentData;
  if (!(t != null && t.getHighEntropyValues)) return null;
  try {
    const n = await t.getHighEntropyValues(["architecture", "bitness", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList", "wow64"]),
      r = (n.brands ?? t.brands ?? []).filter(i => !/Not.*Brand/i.test(i.brand)),
      a = r.length > 1 ? r.filter(i => i.brand !== "Chromium") : r;
    return {
      ...n,
      brands: a.map(i => i.brand),
      brandsVersion: a.map(i => `${i.brand} ${i.version}`),
      mobile: n.mobile ?? t.mobile ?? !1
    }
  } catch {
    return null
  }
}

function Ii() {
  const t = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"],
    n = new Set;
  for (const e of t) try {
    const r = Intl[e];
    if (!r) continue;
    n.add(new r().resolvedOptions().locale)
  } catch {}
  return [...n].join(",")
}

function Ni(t) {
  const n = {
      style: "currency",
      currency: "USD",
      currencyDisplay: "name",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    },
    e = (t || "").split(",")[0] || void 0;
  let r = "",
    o = "";
  try {
    r = 1 .toLocaleString(e, n)
  } catch {}
  try {
    o = 1 .toLocaleString(void 0, n)
  } catch {}
  return {
    systemCurrencyLocale: r,
    engineCurrencyLocale: o
  }
}

function Ci() {
  try {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone ?? ""
  } catch {
    return ""
  }
}

function ki() {
  const t = {
    renderer: "",
    vendor: ""
  };
  if (typeof OffscreenCanvas > "u") return t;
  try {
    const n = new OffscreenCanvas(1, 1),
      e = n.getContext("webgl2") || n.getContext("webgl");
    if (!e) return t;
    const r = e.getExtension("WEBGL_debug_renderer_info");
    return r ? {
      renderer: String(e.getParameter(r.UNMASKED_RENDERER_WEBGL) ?? ""),
      vendor: String(e.getParameter(r.UNMASKED_VENDOR_WEBGL) ?? "")
    } : {
      renderer: String(e.getParameter(e.RENDERER) ?? ""),
      vendor: String(e.getParameter(e.VENDOR) ?? "")
    }
  } catch {
    return t
  }
}
async function Pi(t) {
  const [n, e] = await Promise.all([Di(), Promise.resolve(ki())]), r = navigator.deviceMemory, o = navigator.language, a = Ii(), {
    systemCurrencyLocale: i,
    engineCurrencyLocale: s
  } = Ni(o);
  return {
    type: t,
    userAgent: navigator.userAgent,
    userAgentData: n,
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
    timezoneLocation: Ci(),
    webglRenderer: e.renderer,
    webglVendor: e.vendor,
    lies: {
      proto: {}
    }
  }
}

function xi(t) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}

function Li(t) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}
async function Mi() {
  try {
    await ce();
    const t = x => {
        try {
          return x()
        } catch {
          return
        }
      },
      n = () => new Promise(x => {
        const L = t(() => new xi);
        if (!L) return x(null);
        const U = setTimeout(() => {
          L.terminate(), x(null)
        }, 3e3);
        L.onerror = () => {
          clearTimeout(U), L.terminate(), x(null)
        }, L.onmessage = Q => {
          clearTimeout(U), L.terminate(), x(Q.data)
        }
      }),
      e = () => new Promise(x => {
        const L = t(() => new Li);
        if (!L) return x(null);
        const U = setTimeout(() => {
          L.port.close(), x(null)
        }, 3e3);
        L.port.start(), L.port.onmessage = Q => {
          clearTimeout(U), L.port.close(), x(Q.data)
        }
      }),
      r = x => (ae(x), null),
      [o, a] = await Promise.all([e().catch(r), n().catch(r)]);
    let i = null,
      s = !1;
    if (a != null && a.userAgent ? i = a : (s = !0, i = await Pi("dedicated").catch(r) ?? null), !i || !i.userAgent) return;
    if (s && (i.lied = !0, i.lies.workerUnavailable = "dedicated worker did not respond; collected from main thread", ne("WorkerGlobalScope", i.lies.workerUnavailable)), o != null && o.userAgent && !s) {
      const x = [];
      o.userAgent !== i.userAgent && x.push("userAgent"), o.platform !== i.platform && x.push("platform"), o.hardwareConcurrency !== i.hardwareConcurrency && x.push("hardwareConcurrency"), o.deviceMemory !== i.deviceMemory && x.push("deviceMemory"), o.timezoneLocation !== i.timezoneLocation && x.push("timezoneLocation"), x.length && (i.lied = !0, i.lies.workerMismatch = `dedicated and shared worker disagree on: ${x.join(", ")}`, ne("WorkerGlobalScope", i.lies.workerMismatch))
    }
    i.system = Nn(i.userAgent), i.device = Yr({
      userAgent: i.userAgent
    });
    const {
      system: c,
      userAgent: _,
      userAgentData: u,
      platform: p,
      deviceMemory: f,
      hardwareConcurrency: d
    } = i, g = "does not match worker scope";
    if (p != navigator.platform && ne("Navigator.platform", g), _ != navigator.userAgent && ne("Navigator.userAgent", g), d && d != navigator.hardwareConcurrency && ne("Navigator.hardwareConcurrency", g), f && f != navigator.deviceMemory && ne("Navigator.deviceMemory", g), i.lies.proto) {
      const {
        proto: x
      } = i.lies;
      Object.keys(x).forEach(U => {
        const Q = `WorkerGlobalScope.${U}`;
        x[U].forEach(F => {
          ne(Q, F)
        })
      })
    }
    const [h, y] = Kr(_, p);
    h != y && (i.lied = !0, i.lies.os = `${y} platform and ${h} user agent do not match`, ne("WorkerGlobalScope", i.lies.os));
    const C = Xr({
        ua: _,
        os: c,
        isBrave: !1
      }),
      T = /safari/i.test(C) || /iphone|ipad/i.test(_) ? "JavaScriptCore" : /firefox/i.test(_) ? "SpiderMonkey" : /chrome/i.test(_) ? "V8" : void 0;
    T != sr && (i.lied = !0, i.lies.engine = `${sr} JS runtime and ${T} user agent do not match`, ne("WorkerGlobalScope", i.lies.engine));
    const D = x => (/\d+/.exec(x) || [])[0],
      S = D(C),
      N = D(u ? u.uaFullVersion ?? "" : ""),
      A = N && S,
      w = N == S;
    A && !w && (i.lied = !0, i.lies.version = `userAgentData version ${N} and user agent version ${S} do not match`, ne("WorkerGlobalScope", i.lies.version));
    const v = pe && CSS.supports("accent-color: initial");
    ((x, L) => {
      if (!/windows|mac/i.test(x) || !(L != null && L.platformVersion)) return !1;
      if (L.platform == "macOS") return v ? /_/.test(L.platformVersion) : !1;
      const U = (/windows ([\d|\.]+)/i.exec(x) || [])[1],
        Q = +U == 10,
        {
          platformVersion: ue
        } = L,
        Oe = {
          "6.1": "7",
          "6.2": "8",
          "6.3": "8.1",
          "10.0": "10"
        } [ue];
      if (!v && Oe) return Oe != U;
      const k = ue.split(".");
      if (k.length != 3) return !0;
      const M = +k[0] > 0;
      return M && !Q || !M && Q
    })(i.device, u) && (i.lied = !0, i.lies.platformVersion = "platform version is fake", ne("WorkerGlobalScope", i.lies.platformVersion)), i.userAgentVersion = S, i.userAgentDataVersion = N, i.userAgentEngine = T;
    const H = {
      ...ao(i.webglRenderer) || {},
      compressedGPU: oo(i.webglRenderer)
    };
    return {
      ...i,
      gpu: H,
      uaPostReduction: Jr(i.userAgent)
    }
  } catch (t) {
    ae(t, "workers failed or blocked by client");
    return
  }
}
const pr = Math.random();
async function Bi() {
  const t = new OfflineAudioContext(1, 100, 44100),
    n = t.createOscillator();
  return n.frequency.value = 0, n.start(0), t.startRendering(), new Promise(e => {
    t.oncomplete = r => {
      var a, i;
      const o = (i = (a = r.renderedBuffer).getChannelData) == null ? void 0 : i.call(a, 0);
      o || e(!1), e("" + [...new Set(o)] != "0")
    }
  }).finally(() => {
    var e;
    try {
      n.disconnect()
    } catch {}
    try {
      (e = t.close) == null || e.call(t)
    } catch {}
  })
}
async function Hi() {
  var e, r, o;
  const t = [],
    n = a => {
      var i;
      try {
        (i = a == null ? void 0 : a.close) == null || i.call(a)
      } catch {}
    };
  try {
    await ce();
    try {
      window.OfflineAudioContext = OfflineAudioContext || webkitOfflineAudioContext
    } catch {}
    if (!window.OfflineAudioContext) return;
    const a = ze(),
      i = a["AudioBuffer.getChannelData"],
      s = a["AudioBuffer.copyFromChannel"];
    let c = i || s || !1;
    const _ = 5e3,
      u = new OfflineAudioContext(1, _, 44100);
    t.push(u);
    const p = u.createAnalyser(),
      f = u.createOscillator(),
      d = u.createDynamicsCompressor(),
      g = u.createBiquadFilter(),
      h = new Float32Array(p.frequencyBinCount);
    (e = p.getFloatFrequencyData) == null || e.call(p, h);
    const y = new Set(h).size;
    if (y > 1) {
      c = !0;
      const W = `expected -Infinity (silence) and got ${y} frequencies`;
      ne("AnalyserNode.getFloatFrequencyData", W)
    }
    const C = {
        "AnalyserNode.channelCount": P(() => p.channelCount),
        "AnalyserNode.channelCountMode": P(() => p.channelCountMode),
        "AnalyserNode.channelInterpretation": P(() => p.channelInterpretation),
        "AnalyserNode.context.sampleRate": P(() => p.context.sampleRate),
        "AnalyserNode.fftSize": P(() => p.fftSize),
        "AnalyserNode.frequencyBinCount": P(() => p.frequencyBinCount),
        "AnalyserNode.maxDecibels": P(() => p.maxDecibels),
        "AnalyserNode.minDecibels": P(() => p.minDecibels),
        "AnalyserNode.numberOfInputs": P(() => p.numberOfInputs),
        "AnalyserNode.numberOfOutputs": P(() => p.numberOfOutputs),
        "AnalyserNode.smoothingTimeConstant": P(() => p.smoothingTimeConstant),
        "AnalyserNode.context.listener.forwardX.maxValue": P(() => Ee(() => p.context.listener.forwardX.maxValue)),
        "BiquadFilterNode.gain.maxValue": P(() => g.gain.maxValue),
        "BiquadFilterNode.frequency.defaultValue": P(() => g.frequency.defaultValue),
        "BiquadFilterNode.frequency.maxValue": P(() => g.frequency.maxValue),
        "DynamicsCompressorNode.attack.defaultValue": P(() => d.attack.defaultValue),
        "DynamicsCompressorNode.knee.defaultValue": P(() => d.knee.defaultValue),
        "DynamicsCompressorNode.knee.maxValue": P(() => d.knee.maxValue),
        "DynamicsCompressorNode.ratio.defaultValue": P(() => d.ratio.defaultValue),
        "DynamicsCompressorNode.ratio.maxValue": P(() => d.ratio.maxValue),
        "DynamicsCompressorNode.release.defaultValue": P(() => d.release.defaultValue),
        "DynamicsCompressorNode.release.maxValue": P(() => d.release.maxValue),
        "DynamicsCompressorNode.threshold.defaultValue": P(() => d.threshold.defaultValue),
        "DynamicsCompressorNode.threshold.minValue": P(() => d.threshold.minValue),
        "OscillatorNode.detune.maxValue": P(() => f.detune.maxValue),
        "OscillatorNode.detune.minValue": P(() => f.detune.minValue),
        "OscillatorNode.frequency.defaultValue": P(() => f.frequency.defaultValue),
        "OscillatorNode.frequency.maxValue": P(() => f.frequency.maxValue),
        "OscillatorNode.frequency.minValue": P(() => f.frequency.minValue)
      },
      T = W => new Promise(V => {
        const Y = W.createAnalyser(),
          ie = W.createOscillator(),
          le = W.createDynamicsCompressor();
        try {
          ie.type = "triangle", ie.frequency.value = 1e4, le.threshold.value = -50, le.knee.value = 40, le.attack.value = 0
        } catch {}
        return ie.connect(le), le.connect(Y), le.connect(W.destination), ie.start(0), W.startRendering(), W.addEventListener("complete", de => {
          var He;
          try {
            le.disconnect(), ie.disconnect();
            const Pe = new Float32Array(Y.frequencyBinCount);
            (He = Y.getFloatFrequencyData) == null || He.call(Y, Pe);
            const $e = new Float32Array(Y.fftSize);
            return "getFloatTimeDomainData" in Y && Y.getFloatTimeDomainData($e), V({
              floatFrequencyData: Pe,
              floatTimeDomainData: $e,
              buffer: de.renderedBuffer,
              compressorGainReduction: le.reduction.value || le.reduction
            })
          } catch {
            return V(null)
          }
        })
      });
    await ce();
    const [D, S] = await Promise.all([T(u), Bi().catch(() => !1)]), {
      floatFrequencyData: N,
      floatTimeDomainData: A,
      buffer: w,
      compressorGainReduction: v
    } = D || {};
    await ce();
    const E = (W, V, Y) => {
        const ie = Math.min(Y, W.length),
          le = [];
        for (let de = V; de < ie; de++) le.push(W[de]);
        return le
      },
      I = W => {
        if (!W) return 0;
        let V = 0;
        for (let Y = 0; Y < W.length; Y++) V += Math.abs(W[Y]);
        return V
      },
      H = I(N),
      x = I(A),
      L = new Float32Array(_);
    let U = new Float32Array;
    w && ((r = w.copyFromChannel) == null || r.call(w, L, 0), U = ((o = w.getChannelData) == null ? void 0 : o.call(w, 0)) || []);
    const Q = E(L, 4500, 4600),
      ue = E(U, 4500, 4600),
      F = I(E(U, 4500, _));
    S && (c = !0, ne("AudioBuffer", "audio is fake"));
    const Oe = "" + ue == "" + Q,
      k = "copyFromChannel" in AudioBuffer.prototype;
    k && !Oe && (c = !0, ne("AudioBuffer", "getChannelData and copyFromChannel samples mismatch"));
    const M = new Set(U).size;
    if (M == _) {
      const W = `${M} unique samples of ${_} is too high`;
      se("AudioBuffer", W)
    }
    const z = (W, V) => Math.floor(Math.random() * (V - W + 1)) + W,
      ee = (W, V, Y) => {
        const {
          length: ie
        } = V, le = 20, de = z(275, ie - (le + 1)), He = de + le / 2, Pe = de + le;
        V.getChannelData(0)[de] = W, V.getChannelData(0)[He] = W, V.getChannelData(0)[Pe] = W, V.copyFromChannel(Y, 0);
        const $e = [V.getChannelData(0)[de] === 0 ? Math.random() : 0, V.getChannelData(0)[He] === 0 ? Math.random() : 0, V.getChannelData(0)[Pe] === 0 ? Math.random() : 0];
        return [...new Set([...V.getChannelData(0), ...Y, ...$e])].filter(Jt => Jt !== 0)
      },
      me = (W, V, Y) => {
        V.copyToChannel(Y.map(() => W), 0);
        const ie = V.getChannelData(0)[0];
        return [...V.getChannelData(0)].map(de => de !== ie || !de ? Math.random() : de).filter(de => de !== ie)
      };
    let Se = (() => {
      try {
        const V = [...new Set([...ee(pr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...me(pr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3))])];
        return +(V.length !== 1 && V.reduce((Y, ie) => Y += +ie, 0))
      } catch {
        return 0
      }
    })();
    if (!Se) {
      const W = Math.min(100, U.length),
        V = new Set;
      for (let Y = 0; Y < W; Y++) {
        const ie = U[Y];
        V.has(ie) || (V.add(ie), Se += ie)
      }
    }
    const Xt = {
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
    Se && (c = !0, ne("AudioBuffer", "sample noise detected"));
    const Yt = "" + [v, H, x],
      _t = Xt[Yt];
    return _t && !_t.includes(F) && (ke.AUDIO = !0, se("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: M,
      compressorGainReduction: v,
      floatFrequencyDataSum: H,
      floatTimeDomainDataSum: x,
      sampleSum: F,
      binsSample: ue,
      copySample: k ? Q : [void 0],
      values: C,
      noise: Se,
      baseLatency: Ui(),
      lied: c
    }
  } catch (a) {
    ae(a, "OfflineAudioContext failed or blocked by client");
    return
  } finally {
    t.forEach(n)
  }
}

function Ui() {
  var t;
  try {
    const n = window.AudioContext ?? window.webkitAudioContext;
    if (!n) return -2;
    const e = new n,
      r = e.baseLatency;
    return (t = e.close) == null || t.call(e), typeof r == "number" ? r : -1
  } catch (n) {
    return ae(n), -1
  }
}

function wt(t) {
  t && (t.width = 0, t.height = 0, t.remove())
}
const Fi = () => {
    const o = {
        willReadFrequently: !0,
        desynchronized: !0
      },
      a = document.createElement("canvas"),
      i = document.createElement("canvas"),
      s = document.createElement("canvas");
    try {
      const c = a.getContext("2d", o),
        _ = i.getContext("2d", o),
        u = s.getContext("2d", o);
      if (!c || !_ || !u) throw new Error("canvas context blocked");
      a.width = 40, a.height = 40, i.width = 8, i.height = 8, s.width = 8, s.height = 8;
      const p = new Uint8Array(256),
        f = new Uint8Array(256);
      let d = 0;
      for (let D = 0; D < 8; D++)
        for (let S = 0; S < 8; S++) {
          const N = ~~(Math.random() * 256),
            A = ~~(Math.random() * 256),
            w = ~~(Math.random() * 256);
          p[d] = N, p[d + 1] = A, p[d + 2] = w, p[d + 3] = 255, d += 4, _.fillStyle = `rgba(${N}, ${A}, ${w}, 255)`, _.fillRect(D, S, 1, 1)
        }
      d = 0;
      for (let D = 0; D < 8; D++)
        for (let S = 0; S < 8; S++) {
          const N = _.getImageData(D, S, 1, 1).data,
            A = N[0],
            w = N[1],
            v = N[2],
            E = N[3];
          u.fillStyle = `rgba(${A}, ${w}, ${v}, ${E})`, u.fillRect(D, S, 1, 1);
          const I = u.getImageData(D, S, 1, 1).data,
            H = I[0],
            x = I[1],
            L = I[2],
            U = I[3];
          f[d] = A, f[d + 1] = w, f[d + 2] = v, f[d + 3] = E, d += 4, c.fillStyle = `rgba(${A!==H?H:255}, ${w!==x?x:255}, ${v!==L?L:255}, ${E!==U?U:1})`, c.fillRect(D * 5, S * 5, 5, 5)
        }
      const g = [],
        h = new Set;
      for (let D = 0; D < 64; D++) {
        const S = D * 4,
          N = p[S] !== f[S],
          A = p[S + 1] !== f[S + 1],
          w = p[S + 2] !== f[S + 2],
          v = p[S + 3] !== f[S + 3];
        if (N || A || w || v) {
          const E = (N ? "r" : "") + (A ? "g" : "") + (w ? "b" : "") + (v ? "a" : "");
          h.add(E), g.push([D, E])
        }
      }
      const y = a.toDataURL(),
        C = h.size ? [...h].sort().join(", ") : void 0,
        T = g.length || void 0;
      return {
        rgba: C,
        pixels: T,
        pixelImage: y
      }
    } catch {
      return
    } finally {
      wt(a), wt(i), wt(s)
    }
  },
  vn = ({
    canvas: t,
    context: n,
    strokeText: e = !1,
    cssFontFamily: r = "",
    area: o = {
      width: 50,
      height: 50
    },
    rounds: a = 10,
    maxShadowBlur: i = 50,
    seed: s = 500,
    offset: c = 2001000001,
    multiplier: _ = 15e3
  }) => {
    if (!n) return;
    n.clearRect(0, 0, t.width, t.height), t.width = o.width, t.height = o.height, t.style && (t.style.display = "none");
    const p = (({
        seed: A,
        offset: w,
        multiplier: v
      }) => {
        let E = Number(A) % Number(w);
        return {
          getNextSeed: () => (E = Number(v) * E % Number(w), E)
        }
      })({
        seed: s,
        offset: c,
        multiplier: _
      }),
      {
        getNextSeed: f
      } = p,
      d = (A, w, v, E) => {
        const I = (A - 1) / w * (v || 1) || 0;
        return E ? I : Math.floor(I)
      },
      g = (A, w, v, E, I) => {
        const {
          width: H,
          height: x
        } = v, L = A.createRadialGradient(d(I(), w, H), d(I(), w, x), d(I(), w, H), d(I(), w, H), d(I(), w, x), d(I(), w, H));
        L.addColorStop(0, E[d(I(), w, E.length)]), L.addColorStop(1, E[d(I(), w, E.length)]), A.fillStyle = L
      },
      h = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      y = (A, w, v, E) => {
        const {
          width: I,
          height: H
        } = v, x = 2.99;
        A.font = `${H/x}px ${r.replace(/!important/gm,"")}`, A.strokeText("👾A", d(E(), w, I), d(E(), w, H), d(E(), w, I))
      },
      C = (A, w, v, E) => {
        const {
          width: I,
          height: H
        } = v;
        A.beginPath(), A.arc(d(E(), w, I), d(E(), w, H), d(E(), w, Math.min(I, H)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), A.stroke()
      },
      T = (A, w, v, E) => {
        const {
          width: I,
          height: H
        } = v;
        A.beginPath(), A.moveTo(d(E(), w, I), d(E(), w, H)), A.bezierCurveTo(d(E(), w, I), d(E(), w, H), d(E(), w, I), d(E(), w, H), d(E(), w, I), d(E(), w, H)), A.stroke()
      },
      D = (A, w, v, E) => {
        const {
          width: I,
          height: H
        } = v;
        A.beginPath(), A.moveTo(d(E(), w, I), d(E(), w, H)), A.quadraticCurveTo(d(E(), w, I), d(E(), w, H), d(E(), w, I), d(E(), w, H)), A.stroke()
      },
      S = (A, w, v, E) => {
        if (!("ellipse" in A)) return;
        const {
          width: I,
          height: H
        } = v;
        A.beginPath(), A.ellipse(d(E(), w, I), d(E(), w, H), d(E(), w, Math.floor(I / 2)), d(E(), w, Math.floor(H / 2)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), A.stroke()
      },
      N = [C, T, D];
    Et || N.push(S), e && N.push(y), [...Array(a)].forEach(A => {
      g(n, c, o, h, f), n.shadowBlur = d(f(), c, i, !0), n.shadowColor = h[d(f(), c, h.length)];
      const w = N[d(f(), c, N.length)];
      w(n, c, o, f), n.fill()
    })
  };
async function ji() {
  let t, n;
  try {
    await ce();
    const e = ze(),
      r = gn(),
      o = e["HTMLCanvasElement.toDataURL"],
      a = e["HTMLCanvasElement.getContext"],
      i = e["CanvasRenderingContext2D.fillText"] || e["CanvasRenderingContext2D.font"] || e["CanvasRenderingContext2D.getImageData"] || e["CanvasRenderingContext2D.strokeText"],
      s = e["String.fromCodePoint"];
    let c = e["CanvasRenderingContext2D.measureText"] || e["TextMetrics.actualBoundingBoxAscent"] || e["TextMetrics.actualBoundingBoxDescent"] || e["TextMetrics.actualBoundingBoxLeft"] || e["TextMetrics.actualBoundingBoxRight"] || e["TextMetrics.fontBoundingBoxAscent"] || e["TextMetrics.fontBoundingBoxDescent"] || e["TextMetrics.width"],
      _ = o || a || i || c || s || !1,
      u = window;
    !$r && r && (u = r);
    const p = u.document;
    t = p.createElement("canvas");
    const f = t.getContext("2d", {
      willReadFrequently: !1
    });
    n = p.createElement("canvas");
    const d = n.getContext("2d", {
      desynchronized: !0,
      willReadFrequently: !0
    });
    if (!f) throw new Error("canvas context blocked");
    await ce();
    const g = Et ? 50 : 75;
    vn({
      canvas: t,
      context: f,
      strokeText: !0,
      cssFontFamily: Cn,
      area: {
        width: g,
        height: g
      },
      rounds: 10
    });
    const h = t.toDataURL();
    await ce();
    const y = Fi();
    await ce();
    const C = Cn.replace(/!important/gm, "");
    f.font = `10px ${C}`;
    const T = new Set,
      D = Qr.reduce((L, U) => {
        const {
          actualBoundingBoxAscent: Q,
          actualBoundingBoxDescent: ue,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Oe,
          fontBoundingBoxAscent: k,
          fontBoundingBoxDescent: M,
          width: z
        } = f.measureText(U) || {}, ee = [Q, ue, F, Oe, k, M, z].join(",");
        return T.has(ee) || (T.add(ee), L.add(U)), L
      }, new Set),
      S = 1e-5 * [...T].map(L => L.split(",").reduce((U, Q) => U += +Q || 0, 0)).reduce((L, U) => L += U, 0),
      N = 75;
    await ce(), vn({
      canvas: t,
      context: f,
      area: {
        width: N,
        height: N
      }
    });
    const A = t.toDataURL();
    await ce(), vn({
      canvas: n,
      context: d,
      area: {
        width: N,
        height: N
      }
    });
    const w = n.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `50px ${C}`, f.fillText("A", 7, 37);
    const v = t.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `35px ${C}`, f.fillText("👾", 0, 37);
    const E = t.toDataURL();
    f.clearRect(0, 0, t.width, t.height), (y && y.pixels || Math.max(...f.getImageData(0, 0, 8, 8).data)) && (_ = !0, ne("CanvasRenderingContext2D.getImageData", "pixel data modified")), t.width = 2, t.height = 2, f.fillStyle = "#000", f.fillRect(0, 0, t.width, t.height), f.fillStyle = "#fff", f.fillRect(2, 2, 1, 1), f.beginPath(), f.arc(0, 0, 2, 0, 1, !0), f.closePath(), f.fill();
    const I = f.getImageData(0, 0, 2, 2).data.join(""),
      H = {
        BLINK: ["255255255255178178178255246246246255555555255", "255255255255192192192255240240240255484848255", "255255255255177177177255246246246255535353255", "255255255255128128128255191191191255646464255", "255255255255178178178255247247247255565656255", "255255255255174174174255242242242255474747255", "255255255255229229229255127127127255686868255", "255255255255192192192255244244244255535353255"],
        GECKO: ["255255255255191191191255207207207255646464255", "255255255255192192192255240240240255484848255", "255255255255191191191255239239239255646464255", "255255255255191191191255223223223255606060255", "255255255255171171171255223223223255606060255", "255255255255188188188255245245245255525252255"],
        WEBKIT: ["255255255255185185185255233233233255474747255", "255255255255185185185255229229229255474747255", "255255255255185185185255218218218255474747255", "255255255255192192192255240240240255484848255", "255255255255178178178255247247247255565656255", "255255255255178178178255247247247255565656255", "255255255255192192192255240240240255484848255", "255255255255186186186255218218218255464646255"]
      };
    We.imageDataLowEntropy = I, (pe && !H.BLINK.includes(I) || vt && !H.GECKO.includes(I) || Et && !H.WEBKIT.includes(I)) && (ke.CANVAS = !0), ke.CANVAS && se("CanvasRenderingContext2D.getImageData", "suspicious pixel data");
    const x = L => {
      const U = ee => ee % 1 !== 0,
        {
          actualBoundingBoxAscent: Q,
          actualBoundingBoxDescent: ue,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Oe,
          fontBoundingBoxAscent: k,
          fontBoundingBoxDescent: M
        } = L.measureText("") || {};
      return [Q, ue, F, Oe, k, M].find(ee => U(ee || 0))
    };
    return await ce(), x(f) && (c = !0, _ = !0, ne("CanvasRenderingContext2D.measureText", "metric noise detected")), {
      dataURI: h,
      paintURI: A,
      paintCpuURI: w,
      textURI: v,
      emojiURI: E,
      mods: y,
      textMetricsSystemSum: S,
      liedTextMetrics: c,
      emojiSet: [...D],
      lied: _
    }
  } catch (e) {
    ae(e);
    return
  } finally {
    wt(t), wt(n)
  }
}

function Gi() {
  const t = (e, {
      require: [r]
    }) => {
      try {
        const o = e == "getComputedStyle" ? getComputedStyle(document.body) : e == "HTMLElement.style" ? document.body.style : e == "CSSRuleList.style" ? document.styleSheets[0].cssRules[0].style : void 0;
        if (!o) throw new TypeError("invalid argument string");
        const a = Object.getPrototypeOf(o),
          i = Object.getOwnPropertyNames(a),
          s = [],
          c = /^--.*$/;
        Object.keys(o).forEach(y => {
          const C = !isNaN(+y),
            T = o[y],
            D = c.test(y),
            S = c.test(T);
          if (C && !S) return s.push(T);
          if (!C && !D) return s.push(y)
        });
        const _ = {},
          u = y => y.charAt(0).toUpperCase() + y.slice(1),
          p = y => y.charAt(0).toLowerCase() + y.slice(1),
          f = y => y.slice(1),
          d = /[A-Z]/g;
        s.forEach(y => {
          if (_[y]) return;
          const C = y.indexOf("-") > -1,
            T = d.test(y),
            D = y.charAt(0),
            S = C && D == "-",
            N = T && D == D.toUpperCase();
          if (y = S ? f(y) : N ? p(y) : y, C) {
            const A = y.split("-").map((w, v) => v == 0 ? w : u(w)).join("");
            A in o ? _[A] = !0 : u(A) in o && (_[u(A)] = !0)
          } else if (T) {
            const A = y.replace(d, w => "-" + w.toLowerCase());
            A in o ? _[A] = !0 : `-${A}` in o && (_[`-${A}`] = !0)
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
    n = e => {
      var r;
      try {
        const o = ["ActiveBorder", "ActiveCaption", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "VisitedText", "Window", "WindowFrame", "WindowText"],
          a = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
          i = s => ({
            colors: o.map(c => (s.setAttribute("style", `background-color: ${c} !important`), {
              [c]: getComputedStyle(s).backgroundColor
            })),
            fonts: a.map(c => {
              s.setAttribute("style", `font: ${c} !important`);
              const _ = getComputedStyle(s);
              return {
                [c]: `${_.fontSize} ${_.fontFamily}`
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
        ae(o);
        return
      }
    };
  try {
    const e = t("getComputedStyle", {
        require: [ae]
      }),
      r = n(ro());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    ae(e);
    return
  }
}

function Wi() {
  const t = (o, a) => a == 0 ? o : t(a, o % a),
    n = (o, a) => {
      const i = t(o, a);
      return `${o/i}/${a/i}`
    },
    e = ({
      body: o,
      type: a,
      rangeStart: i,
      rangeLen: s
    }) => {
      const c = [...Array(s)].map((u, p) => (p += i, `@media(device-${a}:${p}px){body{--device-${a}:${p};}}`)).join("");
      return o.innerHTML = `<style>${c}</style>`, getComputedStyle(o).getPropertyValue(`--device-${a}`).trim()
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
        c = e({
          body: o,
          type: "height",
          rangeStart: i,
          rangeLen: 1
        });
      if (s && c) return {
        width: a,
        height: i
      };
      const _ = 1e3;
      return [...Array(10)].find((u, p) => (s || (s = e({
        body: o,
        type: "width",
        rangeStart: p * _,
        rangeLen: _
      })), c || (c = e({
        body: o,
        type: "height",
        rangeStart: p * _,
        rangeLen: _
      })), !!(s && c))), {
        width: +s,
        height: +c
      }
    };
  try {
    const o = gn().window,
      {
        body: a
      } = o.document,
      {
        width: i,
        availWidth: s,
        height: c,
        availHeight: _
      } = o.screen,
      u = !(i - s || c - _);
    (screen.width !== i || i > 800 && u) && (ke.IFRAME_SCREEN = !0);
    const p = n(i, c),
      f = T => {
        var D;
        return !!((D = o.matchMedia(T)) != null && D.matches)
      },
      d = T => {
        var D;
        return !!((D = matchMedia(T)) != null && D.matches)
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
        "device-screen": f(`(device-width: ${i}px) and (device-height: ${c}px)`) ? `${i} x ${c}` : void 0,
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
		@media (device-width: ${i}px) and (device-height: ${c}px) {body {--device-screen: ${i} x ${c}}}
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
      y = {
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
      C = r({
        body: a,
        width: i,
        height: c
      });
    return {
      mediaCSS: y,
      matchMediaCSS: g,
      screenQuery: C
    }
  } catch (o) {
    ae(o);
    return
  }
}

function Vi(t) {
  const n = [],
    e = t.length;
  for (let r = 0; r < e; r++) try {
    t[r]()
  } catch (o) {
    n.push(o.message)
  }
  return n
}

function zi() {
  try {
    return {
      errors: Vi([() => new Function('alert(")')(), () => new Function("const foo;foo.bar")(), () => new Function("null.bar")(), () => new Function("abc.xyz = 123")(), () => new Function("const foo;foo.bar")(), () => new Function("(1).toString(1000)")(), () => new Function("[...undefined].length")(), () => new Function("var x = new Array(-1)")(), () => new Function("const a=1; const a=2;")()])
    }
  } catch (t) {
    ae(t);
    return
  }
}

function $i(t, n) {
  if (!t || !n || !n.length) return !1;
  const e = n.reduce((i, s) => (i[s] = !0, i), {}),
    r = "Cambria Math" in e || "Nirmala UI" in e || "Leelawadee UI" in e || "HoloLens MDL2 Assets" in e || "Segoe Fluent Icons" in e,
    o = "Helvetica Neue" in e || "Luminari" in e || "PingFang HK Light" in e || "InaiMathi Bold" in e || "Galvji" in e || "Chakra Petch" in e,
    a = "Arimo" in e || "MONO" in e || "Ubuntu" in e || "Noto Color Emoji" in e || "Dancing Script" in e || "Droid Sans Mono" in e;
  return r && t != Ie.WINDOWS || o && t != Ie.APPLE ? !0 : !!(a && t != Ie.LINUX)
}

function qi(t, n, e) {
  var r;
  return t ? ((r = t.parentNode) == null || r.replaceChild(n, t), !0) : null
}

function Ki(t, ...n) {
  const e = document.createElement("template");
  return e.innerHTML = t.map((r, o) => `${r}${n[o]||""}`).join(""), document.importNode(e.content, !0)
}
const kn = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  Pn = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  un = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  Xi = Object.keys(Pn).map(t => Pn[t]).flat(),
  Yi = Object.keys(kn).map(t => kn[t]).flat(),
  Ji = Object.keys(un).map(t => un[t]).flat(),
  Qi = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  Zi = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  es = [...Xi, ...Yi, ...Qi, ...Zi, ...Ji].sort();
async function ts() {
  const t = ({
      doc: o,
      id: a,
      emojis: i
    }) => {
      try {
        qi(o.getElementById(a), Ki`
				<div id="pixel-emoji-container">
				<style>
					.pixel-emoji {
						font-family: ${Cn};
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
          c = new Set,
          u = [...o.getElementsByClassName("pixel-emoji")].reduce((d, g, h) => {
            const y = getComputedStyle(g),
              C = i[h],
              {
                height: T,
                width: D
              } = s(y),
              S = `${D},${T}`;
            return c.has(S) || (c.add(S), d.add(C)), d
          }, new Set),
          p = d => +d.replace("px", ""),
          f = 1e-5 * [...c].map(d => d.split(",").map(g => p(g)).reduce((g, h) => g += +h || 0, 0)).reduce((d, g) => d += g, 0);
        return o.body.removeChild(o.getElementById("pixel-emoji-container")), {
          emojiSet: [...u],
          pixelSizeSystemSum: f
        }
      } catch {
        return {
          emojiSet: [],
          pixelSizeSystemSum: 0
        }
      }
    },
    n = async o => {
      try {
        let a = [];
        document.fonts.check(`0px "${mn()}"`) || (a = o.reduce((_, u) => (document.fonts.check(`0px "${u}"`) && _.push(u), _), []));
        const i = o.map(_ => new FontFace(_, `local("${_}")`)),
          c = (await Promise.allSettled(i.map(_ => _.load()))).reduce((_, u) => (u.status == "fulfilled" && _.push(u.value.family), _), []);
        return [...new Set([...a, ...c])].sort()
      } catch {
        return []
      }
    }, e = o => {
      const a = ({
          fonts: s,
          fontMap: c
        }) => {
          const _ = {
              11: c[11].find(d => s.includes(d)),
              10: c[10].find(d => s.includes(d)),
              "8.1": c["8.1"].find(d => s.includes(d)),
              8: c[8].find(d => s.includes(d)),
              7: c[7].filter(d => s.includes(d)).length == c[7].length
            },
            u = "" + Object.keys(_).sort().filter(d => !!_[d]),
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
            } [u];
          return f ? `Windows ${f}` : void 0
        },
        i = ({
          fonts: s,
          fontMap: c
        }) => {
          const _ = {
              13: c[13].find(d => s.includes(d)),
              12: c[12].find(d => s.includes(d)),
              "10.15-11": c["10.15-11"].find(d => s.includes(d)),
              "10.13-10.14": c["10.13-10.14"].find(d => s.includes(d)),
              "10.12": c["10.12"].find(d => s.includes(d)),
              "10.11": c["10.11"].find(d => s.includes(d)),
              "10.10": c["10.10"].find(d => s.includes(d)),
              "10.9": c["10.9"].filter(d => s.includes(d)).length == c["10.9"].length
            },
            u = "" + Object.keys(_).sort().filter(d => !!_[d]),
            f = {
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9,12,13": "Ventura",
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9,12": "Monterey",
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9": "10.15-11",
              "10.10,10.11,10.12,10.13-10.14,10.9": "10.13-10.14",
              "10.10,10.11,10.12,10.9": "Sierra",
              "10.10,10.11,10.9": "El Capitan",
              "10.10,10.9": "Yosemite",
              "10.9": "Mavericks"
            } [u];
          return f ? `macOS ${f}` : void 0
        };
      return a({
        fonts: o,
        fontMap: kn
      }) || i({
        fonts: o,
        fontMap: Pn
      })
    }, r = o => Object.keys(un).reduce((i, s) => {
      const c = un[s];
      return c.filter(u => o.includes(u)).length == c.length ? [...i, s] : i
    }, []);
  try {
    await ce();
    const o = gn(),
      a = ze(),
      i = o && o.document && o.document.body ? o.document : document,
      s = "font-fingerprint",
      c = i.createElement("div");
    c.setAttribute("id", s), i.body.appendChild(c);
    const {
      emojiSet: _,
      pixelSizeSystemSum: u
    } = t({
      doc: i,
      id: s,
      emojis: Qr
    }) || {}, f = await n(es), d = e(f), g = r(f), h = a["FontFace.load"] || a["FontFace.family"] || a["FontFace.status"] || a["String.fromCodePoint"] || a["CSSStyleDeclaration.setProperty"] || a["CSS2Properties.setProperty"] || !1;
    return $i(sn, f) && (ke.FONTS = !0, We.FontOsIsBad = !0, se("platform", `${sn} system and fonts are uncommon`)), {
      fontFaceLoadFonts: f,
      platformVersion: d,
      apps: g,
      emojiSet: _,
      pixelSizeSystemSum: u,
      lied: h
    }
  } catch (o) {
    ae(o);
    return
  }
}
const q = t => {
    const n = `${JSON.stringify(t)}`;
    return ("0000000" + (n.split("").reduce((r, o, a) => Math.imul(31, r) + n.charCodeAt(a) | 0, 2166136261) >>> 0).toString(16)).substr(-8)
  },
  ns = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var ye = (t => (t.WINDOWS = "Windows", t.MAC = "Mac", t.LINUX = "Linux", t.ANDROID = "Android", t.CHROME_OS = "Chrome OS", t))(ye || {});
const rs = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function os() {
  var v;
  if (!pe) return [];
  const t = "getVideoPlaybackQuality" in HTMLVideoElement.prototype,
    n = CSS.supports("color-scheme: initial"),
    e = CSS.supports("appearance: initial"),
    r = "DisplayNames" in Intl,
    o = CSS.supports("aspect-ratio: initial"),
    a = CSS.supports("border-end-end-radius: initial"),
    i = "randomUUID" in Crypto.prototype,
    s = "BarcodeDetector" in window,
    c = "downlinkMax" in (((v = window.NetworkInformation) == null ? void 0 : v.prototype) || {}),
    _ = "ContentIndex" in window,
    u = "ContactsManager" in window,
    p = "EyeDropper" in window,
    f = "FileSystemWritableFileStream" in window,
    d = "HID" in window && "HIDDevice" in window,
    g = "SerialPort" in window && "Serial" in window,
    h = "SharedWorker" in window,
    y = "ontouchstart" in Window && "TouchEvent" in window,
    C = "setAppBadge" in Navigator.prototype,
    T = (E, I) => E ? [I] : [],
    D = {
      [ye.ANDROID]: [...T(o, s), ...T(e, _), ...T(t, u), c, ...T(i, !p), ...T(r, !f), ...T(a, !d), ...T(a, !g), !h, y, ...T(n, !C)],
      [ye.CHROME_OS]: [...T(o, s), ...T(e, !_), ...T(t, !u), c, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, y || !y, ...T(n, !C)],
      [ye.WINDOWS]: [...T(o, !s), ...T(e, !_), ...T(t, !u), !c, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, y || !y, ...T(n, C)],
      [ye.MAC]: [...T(o, s), ...T(e, !_), ...T(t, !u), !c, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, !y, ...T(n, C)],
      [ye.LINUX]: [...T(o, !s), ...T(e, !_), ...T(t, !u), !c, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, !y || !y, ...T(n, !C)]
    },
    S = {
      noContentIndex: e && !_,
      noContactsManager: t && !u,
      noDownlinkMax: !c
    },
    N = Object.keys(D).reduce((E, I) => {
      const H = D[I],
        x = +(H.filter(L => L).length / H.length).toFixed(2);
      return E[I] = x, E
    }, {}),
    A = Object.keys(N).reduce((E, I) => N[E] > N[I] ? E : I),
    w = N[A];
  return [N, w, S]
}
const mr = {
  "-apple-system": ye.MAC,
  "Segoe UI": ye.WINDOWS,
  Tahoma: ye.WINDOWS,
  "Yu Gothic UI": ye.WINDOWS,
  "Microsoft JhengHei UI": ye.WINDOWS,
  "Microsoft YaHei UI": ye.WINDOWS,
  "Meiryo UI": ye.WINDOWS,
  Cantarell: ye.LINUX,
  Ubuntu: ye.LINUX,
  Sans: ye.LINUX,
  "sans-serif": ye.LINUX,
  "Fira Sans": ye.LINUX,
  Roboto: ye.ANDROID
};

function as() {
  const {
    body: t
  } = document, n = document.createElement("div");
  t.appendChild(n);
  try {
    const e = String([...rs.reduce((o, a) => (n.setAttribute("style", `font: ${a} !important`), o.add(getComputedStyle(n).fontFamily)), new Set)]),
      r = mr[e];
    return mr[e] ? `${e}:${r}` : e
  } catch {
    return ""
  } finally {
    t.removeChild(n)
  }
}
async function is({
  webgl: t
}) {
  var n, e;
  try {
    await ce();
    const r = ze(),
      o = ro(),
      a = Object.keys({
        ...navigator.mimeTypes
      }),
      i = as(),
      [s, c, _] = os(),
      u = {
        chromium: pe,
        likeHeadless: {
          noChrome: pe && !("chrome" in window),
          hasPermissionsBug: pe && "permissions" in navigator && await (async () => (await navigator.permissions.query({
            name: "notifications"
          })).state == "prompt" && "Notification" in window && Notification.permission === "denied")(),
          noPlugins: pe && navigator.plugins.length === 0,
          noMimeTypes: pe && a.length === 0,
          notificationIsDenied: pe && "Notification" in window && Notification.permission == "denied",
          hasKnownBgColor: pe && (() => {
            let S = o;
            if (o || (S = document.createElement("div"), document.body.appendChild(S)), !S) return !1;
            S.setAttribute("style", "background-color: ActiveText");
            const {
              backgroundColor: N
            } = getComputedStyle(S) || {};
            return o || document.body.removeChild(S), N === "rgb(255, 0, 0)"
          })(),
          prefersLightColor: !!((n = matchMedia("(prefers-color-scheme: light)")) != null && n.matches),
          uaDataIsBlank: "userAgentData" in navigator && (((e = navigator.userAgentData) == null ? void 0 : e.platform) === "" || await navigator.userAgentData.getHighEntropyValues(["platform"]).platform === ""),
          pdfIsDisabled: "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !1,
          noTaskbar: screen.height === screen.availHeight && screen.width === screen.availWidth,
          hasVvpScreenRes: innerWidth === screen.width && outerHeight === screen.height || "visualViewport" in window && visualViewport !== null && visualViewport.width === screen.width && visualViewport.height === screen.height,
          hasSwiftShader: /SwiftShader/.test(""),
          noWebShare: pe && CSS.supports("accent-color: initial") && (!("share" in navigator) || !("canShare" in navigator)),
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
              return S.srcdoc = ns, !!S.contentWindow
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
      } = u,
      g = Object.keys(p),
      h = Object.keys(f),
      y = Object.keys(d),
      C = +(g.filter(S => p[S]).length / g.length * 100).toFixed(0),
      T = +(h.filter(S => f[S]).length / h.length * 100).toFixed(0),
      D = +(y.filter(S => d[S]).length / y.length * 100).toFixed(0);
    return {
      ...u,
      likeHeadlessRating: C,
      headlessRating: T,
      stealthRating: D,
      systemFonts: i,
      platformEstimate: [s, c]
    }
  } catch (r) {
    ae(r);
    return
  }
}
async function ss() {
  const t = n => {
    const r = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"].reduce((o, a) => {
      try {
        const i = new n[a];
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
    await ce();
    const n = ze(),
      e = n["Intl.Collator.resolvedOptions"] || n["Intl.DateTimeFormat.resolvedOptions"] || n["Intl.DisplayNames.resolvedOptions"] || n["Intl.ListFormat.resolvedOptions"] || n["Intl.NumberFormat.resolvedOptions"] || n["Intl.PluralRules.resolvedOptions"] || n["Intl.RelativeTimeFormat.resolvedOptions"] || !1,
      r = Ee(() => new Intl.DateTimeFormat(void 0, {
        month: "long",
        timeZoneName: "long"
      }).format(9636444e5)),
      o = Ee(() => new Intl.DisplayNames(void 0, {
        type: "language"
      }).of("en-US")),
      a = Ee(() => new Intl.ListFormat(void 0, {
        style: "long",
        type: "disjunction"
      }).format(["0", "1"])),
      i = Ee(() => new Intl.NumberFormat(void 0, {
        notation: "compact",
        compactDisplay: "long"
      }).format(21e6)),
      s = Ee(() => new Intl.PluralRules().select(1)),
      c = Ee(() => new Intl.RelativeTimeFormat(void 0, {
        localeMatcher: "best fit",
        numeric: "auto",
        style: "long"
      }).format(1, "year")),
      _ = t(Intl);
    return {
      dateTimeFormat: r,
      displayNames: o,
      listFormat: a,
      numberFormat: i,
      pluralRules: s,
      relativeTimeFormat: c,
      locale: "" + _,
      lied: e
    }
  } catch (n) {
    ae(n);
    return
  }
}
const cs = () => ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"].sort();
async function us() {
  const t = () => {
    try {
      const n = cs(),
        e = document.createElement("video"),
        r = new Audio,
        o = "MediaRecorder" in window;
      return n.reduce((i, s) => {
        const c = {
          mimeType: s,
          audioPlayType: r.canPlayType(s),
          videoPlayType: e.canPlayType(s),
          mediaSource: MediaSource.isTypeSupported(s),
          mediaRecorder: o ? MediaRecorder.isTypeSupported(s) : !1
        };
        return !c.audioPlayType && !c.videoPlayType && !c.mediaSource && !c.mediaRecorder || i.push(c), i
      }, [])
    } catch {
      return
    }
  };
  try {
    return {
      mimeTypes: t()
    }
  } catch (n) {
    ae(n);
    return
  }
}
async function ls(t) {
  try {
    await ce();
    const n = ze();
    let e = n["Navigator.appVersion"] || n["Navigator.deviceMemory"] || n["Navigator.doNotTrack"] || n["Navigator.hardwareConcurrency"] || n["Navigator.language"] || n["Navigator.languages"] || n["Navigator.maxTouchPoints"] || n["Navigator.oscpu"] || n["Navigator.platform"] || n["Navigator.userAgent"] || n["Navigator.vendor"] || n["Navigator.plugins"] || n["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      o = P(async () => {
        const u = Ee(() => navigator.userAgent),
          p = Nn(u),
          f = await qr();
        return Xr({
          ua: u,
          os: p,
          isBrave: f
        })
      }),
      a = {
        platform: P(() => {
          const {
            platform: u
          } = navigator, p = ["win", "linux", "mac", "arm", "pike", "linux", "iphone", "ipad", "ipod", "android", "x11"], f = typeof u == "string" ? u.toLowerCase() : "";
          return !!f && p.some(g => f.includes(g)) || se("platform", `${u} is unusual`), sn !== cr && (e = !0, ne("Navigator.platform", `${cr} platform and ${sn} user agent do not match`)), t && u != t.platform && (e = !0), u
        }),
        system: P(() => Nn(navigator.userAgent), "userAgent system failed"),
        device: P(() => Yr({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: P(() => {
          const {
            userAgent: u
          } = navigator;
          return r || se("userAgent", `${u} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(u) && se("userAgent", "extra spaces detected"), tn(u).length && se("userAgent is gibberish", u), t && u != t.userAgent && (e = !0), u.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: Jr((navigator || {}).userAgent),
        appVersion: P(() => {
          const {
            appVersion: u
          } = navigator;
          return r || se("appVersion", `${u} does not match userAgent`), "appVersion" in navigator && !u && se("appVersion", "Living Standard property returned falsy value"), /\s{2,}|^\s|\s$/g.test(u) && se("appVersion", "extra spaces detected"), u.trim().replace(/\s{2,}/, " ")
        }, "appVersion failed"),
        deviceMemory: P(() => {
          var g;
          if (!("deviceMemory" in navigator)) return;
          const {
            deviceMemory: u
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
          })[String(u)] || se("deviceMemory", `${u} is not a valid value [0.25, 0.5, 1, 2, 4, 8, 16, 32]`);
          const f = ((g = performance == null ? void 0 : performance.memory) == null ? void 0 : g.jsHeapSizeLimit) || null,
            d = f ? +(f / 1073741824).toFixed(1) : 0;
          return d > u && se("deviceMemory", `available memory ${d}GB is greater than device memory ${u}GB`), t && u !== t.deviceMemory && (e = !0), u
        }, "deviceMemory failed"),
        doNotTrack: P(() => {
          const {
            doNotTrack: u
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
          } [String(u)] || se("doNotTrack - unusual result", u), u
        }, "doNotTrack failed"),
        globalPrivacyControl: P(() => {
          if (!("globalPrivacyControl" in navigator)) return;
          const {
            globalPrivacyControl: u
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
          } [String(u)] || se("globalPrivacyControl - unusual result", u), u
        }, "globalPrivacyControl failed"),
        hardwareConcurrency: P(() => {
          if (!("hardwareConcurrency" in navigator)) return;
          const {
            hardwareConcurrency: u
          } = navigator;
          return t && u !== t.hardwareConcurrency && (e = !0), u
        }, "hardwareConcurrency failed"),
        language: P(() => {
          const {
            language: u,
            languages: p
          } = navigator;
          if (u && p) {
            const f = (/^.{0,2}/g.exec(u) ?? [""])[0];
            if ((/^.{0,2}/g.exec(p[0]) ?? [""])[0] != f && se("language/languages", `${[u,p].join(" ")} mismatch`), t) {
              u != t.language && (e = !0, ne("Navigator.language", `${u} does not match worker scope`));
              const g = p.join(",");
              g !== t.languages.join(",") && (e = !0, ne("Navigator.languages", `${g} does not match worker scope`))
            }
            return `${p.join(", ")} (${u})`
          }
          return `${u} ${p}`
        }, "language(s) failed"),
        maxTouchPoints: P(() => "maxTouchPoints" in navigator ? navigator.maxTouchPoints : null, "maxTouchPoints failed"),
        vendor: P(() => navigator.vendor, "vendor failed"),
        mimeTypes: P(() => {
          const {
            mimeTypes: u
          } = navigator;
          return u ? [...u].map(p => p.type) : []
        }, "mimeTypes failed"),
        oscpu: P(() => navigator.oscpu, "oscpu failed"),
        plugins: P(() => {
          const {
            plugins: u
          } = navigator;
          if (!(u instanceof PluginArray)) return;
          const p = u ? [...u].map(f => ({
            name: f.name,
            description: f.description,
            filename: f.filename,
            version: f.version
          })) : [];
          return p.length && p.forEach(f => {
            const {
              name: d,
              description: g
            } = f, h = tn(d), y = tn(g);
            h.length && se("plugin name is gibberish", d), y.length && se("plugin description is gibberish", g)
          }), p
        }, "plugins failed"),
        properties: P(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: ds(),
        privateClickMeasurement: _s(),
        pdfViewerEnabled: fs()
      },
      i = () => P(() => {
        const u = navigator;
        if (!(!u.userAgentData || !u.userAgentData.getHighEntropyValues)) return u.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(p => {
          const {
            brands: f,
            mobile: d
          } = u.userAgentData || {}, g = (C, T = !1) => C.filter(D => !/Not/.test(D.brand)).map(D => `${D.brand}${T?` ${D.version}`:""}`), h = C => C.length > 1 ? C.filter(T => !/Chromium/.test(T)) : C;
          return p.brands || (p.brands = f), p.brandsVersion = g(p.brands ?? [], !0), p.brands = g(p.brands ?? []), p.brandsVersion = h(p.brandsVersion ?? []), p.brands = h(p.brands ?? []), p.mobile || (p.mobile = d), Object.keys(p).sort().reduce((C, T) => (C[T] = p[T], C), {})
        })
      }, "userAgentData failed"),
      s = () => P(() => {
        const u = navigator;
        if (!(!("bluetooth" in navigator) || !u.bluetooth || !u.bluetooth.getAvailability)) return u.bluetooth.getAvailability()
      }, "bluetoothAvailability failed"),
      c = () => P(() => {
        const u = f => navigator.permissions.query({
          name: f
        }).then(d => ({
          name: f,
          state: d.state
        })).catch(() => ({
          name: f,
          state: "unknown"
        }));
        return "permissions" in navigator ? Promise.all([u("accelerometer"), u("ambient-light-sensor"), u("background-fetch"), u("background-sync"), u("bluetooth"), u("camera"), u("clipboard"), u("device-info"), u("display-capture"), u("gamepad"), u("geolocation"), u("gyroscope"), u("magnetometer"), u("microphone"), u("midi"), u("nfc"), u("notifications"), u("persistent-storage"), u("push"), u("screen-wake-lock"), u("speaker"), u("speaker-selection")]).then(f => f.reduce((d, g) => {
          const {
            state: h,
            name: y
          } = g || {};
          return d[h] ? (d[h].push(y), d) : (d[h] = [y], d)
        }, {})).catch(() => {}) : void 0
      }, "permissions failed"),
      _ = () => P(() => {
        const u = navigator.gpu;
        if (u) return u.requestAdapter().then(p => {
          if (!p) return;
          const {
            limits: f,
            features: d
          } = p, g = y => {
            const {
              architecture: C,
              description: T,
              device: D,
              vendor: S
            } = y, N = [S, C, T, D], A = [...(d == null ? void 0 : d.values()) ?? []], w = (v => {
              const E = {};
              for (const I in v) E[I] = v[I];
              return E
            })(f);
            return We.webGpuAdapter = N, We.webGpuFeatures = A, We.webGpuLimits = q(w), {
              adapterInfo: N,
              limits: w
            }
          }, {
            info: h
          } = p;
          return h ? g(h) : p.requestAdapterInfo ? p.requestAdapterInfo().then(g) : void 0
        })
      }, "webgpu failed");
    return await ce(), Promise.all([o, i(), s(), c(), _()]).then(([u, p, f, d, g]) => ({
      ...a,
      userAgentParsed: u,
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
  } catch (n) {
    ae(n, "Navigator failed or blocked by client");
    return
  }
}

function ds() {
  const n = window.ApplePaySession;
  if (typeof n != "function" || typeof n.canMakePayments != "function") return -1;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (e) {
    const r = (e == null ? void 0 : e.message) ?? "";
    return r.includes("disabled in this insecure context") ? 2 : r.includes("Trying to start an Apple Pay session") ? 0 : -1
  }
}

function _s() {
  const t = document.createElement("a");
  try {
    const n = t.attributionSourceId ?? t.attributionsourceid;
    return n == null ? void 0 : String(n)
  } catch (n) {
    ae(n);
    return
  } finally {
    t.remove()
  }
}

function fs() {
  try {
    const t = navigator.pdfViewerEnabled;
    return typeof t == "boolean" ? t : void 0
  } catch (t) {
    ae(t);
    return
  }
}
const _e = "c767712b",
  ps = {
    noscript: {
      contentDocumentHash: ["0b637a33", "37e2f32e", "318390d1"],
      contentWindowHash: ["0b637a33", "37e2f32e", "318390d1"],
      getContextHash: ["0b637a33", "081d6d1b", _e]
    },
    trace: {
      contentDocumentHash: ["ca9d9c2f"],
      contentWindowHash: ["ca9d9c2f"],
      createElementHash: ["77dea834"],
      getElementByIdHash: ["77dea834"],
      getImageDataHash: ["77dea834"],
      toBlobHash: ["77dea834", _e],
      toDataURLHash: ["77dea834", _e]
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
      getImageDataHash: ["98ec858e", "a2971888", "dbbaf31f", _e],
      toBlobHash: ["9f1c3dfe", "a2971888", "dbbaf31f", _e],
      toDataURLHash: ["98ec858e", "a2971888", "dbbaf31f", _e]
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
      toDataURLHash: ["fd00bf5d", "8ee7df22", _e],
      toBlobHash: ["fd00bf5d", "8ee7df22", _e],
      getImageDataHash: ["fd00bf5d", "8ee7df22", _e],
      getByteFrequencyDataHash: ["fd00bf5d", "8ee7df22", _e],
      getByteTimeDomainDataHash: ["fd00bf5d", "8ee7df22", _e],
      getFloatFrequencyDataHash: ["fd00bf5d", "8ee7df22", _e],
      getFloatTimeDomainDataHash: ["fd00bf5d", "8ee7df22", _e],
      copyFromChannelHash: ["fd00bf5d", "8ee7df22", _e],
      getChannelDataHash: ["fd00bf5d", "8ee7df22", _e],
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
      getContextHash: ["55e9b959", _e],
      toDataURLHash: ["55e9b959", _e],
      toBlobHash: ["55e9b959", _e],
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
    noscript: En,
    trace: qe,
    cydec: Ke,
    canvasblocker: at,
    chameleon: Le,
    duckduckgo: ve,
    privacybadger: hr,
    privacypossum: Tn,
    jshelter: Ne,
    puppeteerExtra: he,
    fakeBrowser: Re
  } = ps;

function ms(t, n) {
  if (n) {
    if (n >= 7 && qe.contentDocumentHash.includes(t.contentDocumentHash) && qe.contentWindowHash.includes(t.contentWindowHash) && qe.createElementHash.includes(t.createElementHash) && qe.getElementByIdHash.includes(t.getElementByIdHash) && qe.toDataURLHash.includes(t.toDataURLHash) && qe.toBlobHash.includes(t.toBlobHash) && qe.getImageDataHash.includes(t.getImageDataHash)) return "Trace";
    if (n >= 7 && Ke.contentDocumentHash.includes(t.contentDocumentHash) && Ke.contentWindowHash.includes(t.contentWindowHash) && Ke.createElementHash.includes(t.createElementHash) && Ke.getElementByIdHash.includes(t.getElementByIdHash) && Ke.toDataURLHash.includes(t.toDataURLHash) && Ke.toBlobHash.includes(t.toBlobHash) && Ke.getImageDataHash.includes(t.getImageDataHash)) return "CyDec";
    if (n >= 6 && at.contentDocumentHash.includes(t.contentDocumentHash) && at.contentWindowHash.includes(t.contentWindowHash) && at.appendHash.includes(t.appendHash) && at.toDataURLHash.includes(t.toDataURLHash) && at.toBlobHash.includes(t.toBlobHash) && at.getImageDataHash.includes(t.getImageDataHash)) return "CanvasBlocker";
    if (n >= 9 && Le.appendHash.includes(t.appendHash) && Le.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Le.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Le.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && Le.prependHash.includes(t.prependHash) && Le.replaceWithHash.includes(t.replaceWithHash) && Le.appendChildHash.includes(t.appendChildHash) && Le.insertBeforeHash.includes(t.insertBeforeHash) && Le.replaceChildHash.includes(t.replaceChildHash)) return "Chameleon";
    if (n >= 7 && ve.toDataURLHash.includes(t.toDataURLHash) && ve.toBlobHash.includes(t.toBlobHash) && ve.getImageDataHash.includes(t.getImageDataHash) && ve.getByteFrequencyDataHash.includes(t.getByteFrequencyDataHash) && ve.getByteTimeDomainDataHash.includes(t.getByteTimeDomainDataHash) && ve.getFloatFrequencyDataHash.includes(t.getFloatFrequencyDataHash) && ve.getFloatTimeDomainDataHash.includes(t.getFloatTimeDomainDataHash) && ve.copyFromChannelHash.includes(t.copyFromChannelHash) && ve.getChannelDataHash.includes(t.getChannelDataHash) && ve.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && ve.availHeightHash.includes(t.availHeightHash) && ve.availLeftHash.includes(t.availLeftHash) && ve.availTopHash.includes(t.availTopHash) && ve.availWidthHash.includes(t.availWidthHash) && ve.colorDepthHash.includes(t.colorDepthHash) && ve.pixelDepthHash.includes(t.pixelDepthHash)) return "DuckDuckGo";
    if (n >= 2 && hr.getImageDataHash.includes(t.getImageDataHash) && hr.toDataURLHash.includes(t.toDataURLHash)) return "Privacy Badger";
    if (n >= 3 && Tn.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Tn.availWidthHash.includes(t.availWidthHash) && Tn.colorDepthHash.includes(t.colorDepthHash)) return "Privacy Possum";
    if (n >= 2 && En.contentDocumentHash.includes(t.contentDocumentHash) && En.contentWindowHash.includes(t.contentDocumentHash) && En.getContextHash.includes(t.getContextHash) && t.hardwareConcurrencyHash == _e) return "NoScript";
    if (n >= 14 && Ne.contentDocumentHash.includes(t.contentDocumentHash) && Ne.contentWindowHash.includes(t.contentDocumentHash) && Ne.appendHash.includes(t.appendHash) && Ne.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Ne.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Ne.prependHash.includes(t.prependHash) && Ne.replaceWithHash.includes(t.replaceWithHash) && Ne.appendChildHash.includes(t.appendChildHash) && Ne.insertBeforeHash.includes(t.insertBeforeHash) && Ne.replaceChildHash.includes(t.replaceChildHash) && Ne.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "JShelter";
    if (n >= 13 && he.contentDocumentHash.includes(t.contentDocumentHash) && he.contentWindowHash.includes(t.contentWindowHash) && he.createElementHash.includes(t.createElementHash) && he.getElementByIdHash.includes(t.getElementByIdHash) && he.appendHash.includes(t.appendHash) && he.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && he.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && he.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && he.prependHash.includes(t.prependHash) && he.replaceWithHash.includes(t.replaceWithHash) && he.appendChildHash.includes(t.appendChildHash) && he.insertBeforeHash.includes(t.insertBeforeHash) && he.contentDocumentHash.includes(t.contentDocumentHash) && he.replaceChildHash.includes(t.replaceChildHash) && he.getContextHash.includes(t.getContextHash) && he.toDataURLHash.includes(t.toDataURLHash) && he.toBlobHash.includes(t.toBlobHash) && he.getImageDataHash.includes(t.getImageDataHash) && he.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "puppeteer-extra";
    if (n >= 12 && Re.appendChildHash.includes(t.appendChildHash) && Re.getContextHash.includes(t.getContextHash) && Re.toDataURLHash.includes(t.toDataURLHash) && Re.toBlobHash.includes(t.toBlobHash) && Re.getImageDataHash.includes(t.getImageDataHash) && Re.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Re.availHeightHash.includes(t.availHeightHash) && Re.availLeftHash.includes(t.availLeftHash) && Re.availTopHash.includes(t.availTopHash) && Re.availWidthHash.includes(t.availWidthHash) && Re.colorDepthHash.includes(t.colorDepthHash) && Re.pixelDepthHash.includes(t.pixelDepthHash)) return "FakeBrowser"
  }
}
async function hs() {
  const t = +new Date,
    n = +("" + t).slice(-1),
    e = new RegExp(`${n}+$`),
    r = (_, u) => new Promise(p => setTimeout(() => {
      const f = u ? t : +new Date,
        d = e.exec("" + f);
      p(d ? d[0] : f)
    }, _)),
    o = await Promise.all([r(0, !0), r(1, !1), r(2, !1), r(3, !1), r(4, !1), r(5, !1), r(6, !1), r(7, !1), r(8, !1), r(9, !1)]),
    a = o.map(_ => "" + _),
    i = a[0].slice(-1),
    s = a.every(_ => _.slice(-1) === i),
    c = a[0].length;
  return {
    protection: s,
    delays: o.map((_, u) => a[u].length > c ? a[u].slice(-c) : _),
    precision: s ? Math.min(...a.map(_ => _.length)) : void 0,
    precisionValue: s ? i : void 0
  }
}
async function gs() {
  try {
    await ce();
    const t = vi(),
      n = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: pe ? "Blink" : vt ? "Gecko" : ""
      },
      [e, r] = await Promise.all([qr(), pe ? void 0 : hs()]);
    if (e) {
      const c = oi();
      n.privacy = "Brave", n.security = {
        FileSystemWritableFileStream: "FileSystemWritableFileStream" in window,
        Serial: "Serial" in window,
        ReportingObserver: "ReportingObserver" in window
      }, n.mode = c.allow ? "allow" : c.standard ? "standard" : c.strict ? "strict" : ""
    }
    const {
      protection: o
    } = r || {};
    if (vt && o) {
      const c = {
          OfflineAudioContext: "OfflineAudioContext" in window,
          WebGL2RenderingContext: "WebGL2RenderingContext" in window,
          WebAssembly: "WebAssembly" in window,
          maxTouchPoints: "maxTouchPoints" in navigator,
          RTCRtpTransceiver: "RTCRtpTransceiver" in window,
          MediaDevices: "MediaDevices" in window,
          Credential: "Credential" in window
        },
        _ = Object.keys(c),
        u = new Set(["RTCRtpTransceiver", "MediaDevices", "Credential"]),
        p = _.filter(d => u.has(d) && !c[d]).length == u.size,
        f = !c.WebAssembly;
      n.privacy = p ? "Tor Browser" : "Firefox", n.security = {
        reduceTimerPrecision: !0,
        ...c
      }, n.mode = p ? f ? "safer" : "standard" : "resistFingerprinting"
    }
    const a = Object.keys(t).length;
    await ce();
    const i = {
        contentDocumentHash: q(t["HTMLIFrameElement.contentDocument"]),
        contentWindowHash: q(t["HTMLIFrameElement.contentWindow"]),
        createElementHash: q(t["Document.createElement"]),
        getElementByIdHash: q(t["Document.getElementById"]),
        appendHash: q(t["Element.append"]),
        insertAdjacentElementHash: q(t["Element.insertAdjacentElement"]),
        insertAdjacentHTMLHash: q(t["Element.insertAdjacentHTML"]),
        insertAdjacentTextHash: q(t["Element.insertAdjacentText"]),
        prependHash: q(t["Element.prepend"]),
        replaceWithHash: q(t["Element.replaceWith"]),
        appendChildHash: q(t["Node.appendChild"]),
        insertBeforeHash: q(t["Node.insertBefore"]),
        replaceChildHash: q(t["Node.replaceChild"]),
        getContextHash: q(t["HTMLCanvasElement.getContext"]),
        toDataURLHash: q(t["HTMLCanvasElement.toDataURL"]),
        toBlobHash: q(t["HTMLCanvasElement.toBlob"]),
        getImageDataHash: q(t["CanvasRenderingContext2D.getImageData"]),
        getByteFrequencyDataHash: q(t["AnalyserNode.getByteFrequencyData"]),
        getByteTimeDomainDataHash: q(t["AnalyserNode.getByteTimeDomainData"]),
        getFloatFrequencyDataHash: q(t["AnalyserNode.getFloatFrequencyData"]),
        getFloatTimeDomainDataHash: q(t["AnalyserNode.getFloatTimeDomainData"]),
        copyFromChannelHash: q(t["AudioBuffer.copyFromChannel"]),
        getChannelDataHash: q(t["AudioBuffer.getChannelData"]),
        hardwareConcurrencyHash: q(t["Navigator.hardwareConcurrency"]),
        availHeightHash: q(t["Screen.availHeight"]),
        availLeftHash: q(t["Screen.availLeft"]),
        availTopHash: q(t["Screen.availTop"]),
        availWidthHash: q(t["Screen.availWidth"]),
        colorDepthHash: q(t["Screen.colorDepth"]),
        pixelDepthHash: q(t["Screen.pixelDepth"])
      },
      s = {};
    for (const [c, _] of Object.entries(i)) _ !== _e && (s[c.slice(0, -4)] = _);
    return n.extensionHashPattern = s, n.extension = ms(i, a), n
  } catch (t) {
    ae(t);
    return
  }
}

function ys() {
  try {
    return "ontouchstart" in window && !!document.createEvent("TouchEvent")
  } catch {
    return !1
  }
}
async function ws() {
  try {
    const t = ze();
    let n = !!t["Screen.width"] || !!t["Screen.height"] || !!t["Screen.availWidth"] || !!t["Screen.availHeight"] || !!t["Screen.colorDepth"] || !!t["Screen.pixelDepth"] || !1;
    const e = window.screen || {};
    let {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i,
      colorDepth: s,
      pixelDepth: c
    } = e;
    r = Number(r), o = Number(o), i = Number(i), s = Number(s), c = Number(c);
    const _ = g => {
        var h;
        return !!((h = matchMedia(g)) != null && h.matches)
      },
      u = window.devicePixelRatio || 0,
      p = !_(`(resolution: ${u}dppx)`);
    !Et && p && (n = !0, ne("Window.devicePixelRatio", "lied dpr"));
    const f = !(r - a || o - i);
    return r > 800 && f && (ke.SCREEN = !0), {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i,
      colorDepth: s,
      pixelDepth: c,
      touch: ys(),
      lied: n
    }
  } catch (t) {
    ae(t);
    return
  }
}

function bs() {
  var e;
  const t = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (t) {
    const r = new t().resolvedOptions().timeZone;
    if (r) return r
  }
  const n = -vs();
  return `UTC${n>=0?"+":""}${n}`
}

function vs() {
  const t = new Date().getFullYear();
  return Math.max(new Date(t, 0, 1).getTimezoneOffset(), new Date(t, 6, 1).getTimezoneOffset())
}
const Es = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  Ts = {
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
  Ss = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  As = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]);
async function Os() {
  var o;
  let t, n, e, r;
  try {
    await ce();
    const a = ze(),
      i = gn(),
      s = a["HTMLCanvasElement.toDataURL"],
      c = a["HTMLCanvasElement.getContext"],
      _ = a["WebGLRenderingContext.getParameter"] || a["WebGL2RenderingContext.getParameter"] || a["WebGLRenderingContext.getExtension"] || a["WebGL2RenderingContext.getExtension"],
      u = s || c || _ || a["WebGLRenderingContext.getSupportedExtensions"] || a["WebGL2RenderingContext.getSupportedExtensions"] || !1;
    let p = window;
    !$r && i && (p = i);
    const f = p.document;
    "OffscreenCanvas" in window ? (t = new p.OffscreenCanvas(256, 256), n = new p.OffscreenCanvas(256, 256)) : (t = f.createElement("canvas"), n = f.createElement("canvas"));
    const d = yr(t, "webgl"),
      g = yr(n, "webgl2");
    if (e = d, r = g, !d) return;
    const h = (k, M) => {
        if (!k) return;
        const z = P(() => k.getShaderPrecisionFormat(k[M], k.LOW_FLOAT)),
          ee = P(() => k.getShaderPrecisionFormat(k[M], k.MEDIUM_FLOAT)),
          me = P(() => k.getShaderPrecisionFormat(k[M], k.HIGH_FLOAT)),
          be = P(() => k.getShaderPrecisionFormat(k[M], k.HIGH_INT));
        return {
          LOW_FLOAT: z,
          MEDIUM_FLOAT: ee,
          HIGH_FLOAT: me,
          HIGH_INT: be
        }
      },
      y = (k, M) => {
        const z = {};
        if (!M) return z;
        for (const ee in M) {
          const me = M[ee];
          z[k + "." + ee + ".precision"] = me ? P(() => me.precision) : void 0, z[k + "." + ee + ".rangeMax"] = me ? P(() => me.rangeMax) : void 0, z[k + "." + ee + ".rangeMin"] = me ? P(() => me.rangeMin) : void 0
        }
        return z
      },
      C = k => {
        const M = {};
        if (!k) return M;
        const z = k;
        for (const ee of Es) {
          const me = z[ee];
          if (me === void 0) continue;
          const be = k.getParameter(me);
          be && ArrayBuffer.isView(be) ? M[ee] = Array.from(be) : M[ee] = be
        }
        return M
      },
      T = k => {
        if (!k) return [];
        const M = P(() => k.getContextAttributes());
        return M ? Object.keys(M).sort().map(z => `${z}=${M[z]}`) : []
      },
      D = k => {
        if (!k) return [];
        const M = [];
        for (const [z, ee] of Object.entries(Ts)) {
          const me = P(() => k.getExtension(z));
          if (me)
            for (const be of ee) {
              const Ce = me[be];
              if (typeof Ce != "number") continue;
              if (!Ss.has(be)) {
                M.push(`${be}=${Ce}`);
                continue
              }
              const Se = P(() => k.getParameter(Ce));
              Se == null ? M.push(`${be}=${Ce}`) : typeof Se == "object" && "length" in Se ? M.push(`${be}=${Ce}=${Array.from(Se).join(",")}`) : M.push(`${be}=${Ce}=${Se}`)
            }
        }
        return M.sort()
      },
      S = k => {
        const M = k ? k.getExtension("WEBGL_debug_renderer_info") : null;
        return !M || !k ? {} : {
          UNMASKED_VENDOR_WEBGL: k.getParameter(M.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: k.getParameter(M.UNMASKED_RENDERER_WEBGL)
        }
      },
      N = k => {
        if (!k) return [];
        const M = P(() => k.getSupportedExtensions());
        return M || []
      };
    await ce();
    const A = {
        ...C(d),
        ...S(d)
      },
      w = {
        ...C(g),
        ...S(g)
      },
      v = [];
    for (const k in w) {
      const M = A[k];
      !M || As.has(k) || "" + M != "" + w[k] && v.push(k)
    }
    v.length && se("webgl/webgl2 mirrored params mismatch", v.toString()), await ce();
    const E = {
        extensions: [...N(d), ...N(g)],
        contextAttributes: T(d),
        contextAttributes2: T(g),
        extensionParameters: D(d),
        extensionParameters2: D(g),
        parameters: {
          ...A,
          ...w,
          ...y("VERTEX_SHADER", h(d, "VERTEX_SHADER")),
          ...y("FRAGMENT_SHADER", h(d, "FRAGMENT_SHADER"))
        },
        parameterOrExtensionLie: _,
        lied: u
      },
      I = ["00b72507", "00c1b42d", "00fe1ec9", "02b3eea3", "0461d3de", "0463627d", "057857ac", "0586e20b", "0639a81a", "087d5759", "08847ba5", "0b2d4333", "0cdb985d", "0e058699", "0eb2fc19", "0f39d057", "0f840379", "0fc123c7", "101e0582", "12e92e62", "12f8ac14", "1453d59a", "149a1efa", "166dc7c8", "16c481a6", "171831c5", "177cc258", "18579e83", "19594666", "1b251fd7", "1bfd326c", "1e8a9a79", "1ff7c7e7", "2048bc5a", "2259b706", "22d0f2cf", "230d6a0d", "23d1ce20", "2402c3d2", "24306836", "258789d0", "25a760b8", "25f9385d", "27938830", "27db292c", "2b80fd96", "2bb488da", "2c04c2eb", "2d15287f", "2f014c41", "2f582ed9", "300ee927", "33bc5492", "34270469", "3660b71f", "3740c4c7", "3999a5e1", "39ead506", "3a91d0d6", "3b724916", "3bf321b8", "3c546144", "3f9ef44c", "3fea1100", "3ff82303", "4027d193", "402e1064", "4065cd69", "43038e3d", "4503e771", "461f97e1", "464d51ac", "467b99a5", "482c81b2", "48af038f", "4962ada1", "49bf7358", "4c9e8f5d", "502c402c", "508d1625", "52e348ba", "534002ab", "5582debe", "55d3aa56", "55e821f7", "581f3282", "5831d5fd", "58871380", "58fdc720", "5a5658f1", "5a90a5f8", "5aea1af1", "5b6a17aa", "5bef9a39", "5ca55292", "5d786cef", "5ddb9237", "5ee41456", "61178f2a", "61ca8e23", "61d9464e", "61eecaae", "623c3bfd", "6248d9e3", "6294d84e", "62bf7ef1", "6346cf49", "6357365c", "66628310", "668f0f93", "66d992e8", "67995996", "6843ebbf", "6864dcb0", "6951838b", "696e1548", "698c5c2e", "6a75ae3b", "6aa1ff7e", "6b07d4f8", "6b290cd4", "6c168801", "6dfae3cb", "6e806ffc", "6edf1720", "6f81cbe7", "70859bdb", "70a095b1", "7238c5dd", "7360ebd1", "741688e4", "74daf866", "78640859", "79284c47", "794f8929", "795e5c95", "79a57aa9", "7aa13573", "7b2e5242", "7b811cdd", "7ec0ea6b", "801d73af", "802e2547", "81b9cd29", "8219e1a4", "82a9a2f1", "8428fc8e", "849ccb64", "8541aa4c", "85479b99", "8bd0b91b", "8d371161", "903c8847", "917871e7", "98aeaba9", "99b1a1c6", "99ef2c3b", "9b67b7dc", "9c6df98c", "9c814c1b", "9e2b5e94", "9fd76352", "a1c808d5", "a22788f8", "a2383001", "a26e9aa9", "a397a568", "a3f9ee34", "a4b988da", "a4d34176", "a581f55e", "a5a477ae", "a9640880", "a97d3858", "aa73f3a4", "ab40bece", "ac4d4ba8", "ad01a422", "ade75c4f", "ae2c4777", "afa583bc", "b10c2a85", "b224cc7c", "b2d6fc98", "b362c2f5", "b467620a", "b4d40dcc", "b504662d", "b50edd99", "b5494027", "b62321c3", "b8961d15", "b8ea6e7f", "bb77a469", "bc0f9686", "bcf7315f", "be2dfaea", "beffda26", "bf06317e", "bf610cdb", "bfe1c212", "c00582e9", "c026469d", "c04889b1", "c04b0635", "c04e374a", "c05f7596", "c07307c6", "c092fdf8", "c25dd065", "c2bce496", "c5e9a883", "c79634c2", "c7e37ca0", "c93b5366", "c9bc4ffd", "cba1878b", "cbeade8c", "ce2e3d16", "cefb72ca", "cf9643e6", "cfd20274", "d05a66eb", "d09c1c07", "d1e76c89", "d2172943", "d2dc2474", "d498797d", "d6bf35ad", "d734ea08", "d860ff42", "d8bd9e5a", "d913dafa", "d970d345", "dbdbe7a4", "dc271c35", "dcd9a29e", "dd67b076", "de793ead", "ded74044", "df9daeb6", "e10339b3", "e142d1f9", "e155c47e", "e15afab0", "e16bb1bb", "e316e4c0", "e3eff92a", "e4569a5b", "e574bef6", "e5962ba3", "e6464c9f", "e68b5c4e", "e796b84e", "e8694547", "e965d180", "e965d541", "e9bdc904", "e9dbb8d5", "ea54d525", "ea59b343", "ea7f90ea", "ea8f5ad0", "eaa13804", "eb799d34", "ec050bb6", "ec928655", "eed2e5e1", "ef8f5db1", "f0d5a3c7", "f1077334", "f221fef5", "f2293447", "f33d918e", "f3c6ea11", "f51056a1", "f51cab9a", "f573bb34", "f5d19934", "f7451c92", "f8e65486", "f9714b3d", "fa994f33", "fafa14c0", "fc37fe1f", "fca66520", "fe0997b6"],
      H = [-1056897629, -1056946782, -1073719331, -1147160399, -1147160553, -1147168724, -1147419751, -1147419753, -1147419775, -1147427826, -1147451883, -1147451901, -1147464169, -1147464177, -1147488144, -1147602934, -1147643759, -1147643872, -1147765274, -1148326739, -1148335070, -1148572354, -1148678631, -1148680509, -1148713259, -1164279890, -1164800191, -1164800478, -1332029332, -133757475, -1342154787, -134823971, -16746546, -1878102921, -1878111124, -1962893370, -1962919974, -1962928178, -2130164162, -2130164382, -2130164388, -2130164546, -2130172573, -2130659912, -2145933648, -2145941977, -2145958228, -2145966414, -2145966441, -2145966529, -2145966535, -2145966545, -2145970658, -2145974343, -2145974380, -2145974489, -2145974596, -2145974598, -2145974612, -2145974637, -2145974657, -2145974729, -2146187766, -2146232338, -2146232480, -2146232503, -2146232590, -2146232723, -2146232724, -2146236588, -2146236703, -2146237020, -2146251619, -2146251641, -2146251681, -2146253671, -2146253693, -2146277218, -2146286438, -2146286463, -2146286583, -2146319268, -2146376065, -2146379955, -2146384003, -2146384011, -2146384027, -2146384034, -2146384120, -2146384281, -2146398568, -2146400384, -2146400556, -2146400620, -2146401928, -2146417027, -2146526795, -2146526934, -2147125544, -2147128275, -2147133747, -2147133749, -2147133760, -2147134974, -2147136328, -2147142429, -2147287810, -2147287811, -2147287820, -2147287834, -2147287835, -2147287854, -2147291718, -2147291820, -2147293058, -2147295768, -2147295822, -2147295823, -2147295849, -2147295857, -2147300019, -2147304193, -2147304219, -2147306321, -2147316382, -2147316383, -2147333118, -2147336998, -2147337003, -2147337012, -2147337022, -2147344686, -2147346747, -2147361652, -2147361731, -2147361769, -2147361774, -2147361775, -2147361778, -2147361792, -2147362760, -2147365698, -2147365730, -2147365759, -2147365760, -2147365827, -2147365863, -2147373914, -2147373984, -2147374032, -2147374080, -2147378041, -2147378146, -2147382130, -2147382221, -2147382251, -2147382270, -2147382272, -2147383246, -2147385825, -2147385849, -2147386292, -2147386326, -2147387335, -2147387364, -2147389930, -2147389937, -2147389951, -2147390461, -2147394188, -2147394251, -2147394484, -2147400057, -2147406798, -2147407643, -2147407821, -2147410938, -2147410941, -2147414733, -2147414956, -2147414987, -2147415037, -2147429201, -2147429223, -2147439020, -2147440422, -2147447111, -2147447122, -2147447126, -2147447137, -2147447149, -2147447157, -2147447161, -2147447163, -2147447873, -2147447892, -2147447896, -2147447928, -2147448592, -2147453701, -2147453767, -2147453768, -2147459031, -2147461169, -2147466956, -2147466972, -2147467172, -2147470173, -2147475351, -2147475352, -638494755, -671082546, -677558160, -999987216, 1099536, 1099644, 1147714426, 1197075, 1229835, 1508998, 1509050, 1610618841, 184555483, 2146590728, 2147305224, 2147361749, 2147440438, 2147475085, 2147479181, 21667, 349912, 351513, 83625, 998804992, 998911268, 999148597, 999156922];
    let x;
    if (E.parameters) {
      const k = new Set;
      for (const M in E.parameters) {
        const z = E.parameters[M];
        if (!(!z || typeof z == "string"))
          if (Array.isArray(z))
            for (const ee of z) k.add(Number(ee));
          else k.add(Number(z))
      }
      x = [...k].sort((M, z) => M - z)
    }
    const L = si((o = E.parameters) == null ? void 0 : o.UNMASKED_RENDERER_WEBGL),
      U = "" + x,
      Q = !L || !U ? void 0 : q([L, U]),
      ue = x ? x.reduce((k, M, z) => k ^ +M + z, 0) : void 0;
    We.webglParams = U, We.webglBrandCapabilities = Q, We.webglCapabilities = ue;
    const F = Q && !I.includes(Q),
      Oe = ue && !H.includes(ue);
    return F && (ke.WEBGL = !0, se("WebGLRenderingContext.getParameter", "suspicious gpu")), Oe && (ke.WEBGL = !0, se("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...E,
      gpu: {
        ...ao((E.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: oo((E.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (a) {
    ae(a);
    return
  } finally {
    gr(t, e), gr(n, r)
  }
}

function gr(t, n) {
  var e;
  if (t) {
    try {
      (e = n == null ? void 0 : n.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    t.width = 0, t.height = 0, t instanceof HTMLCanvasElement && t.remove()
  }
}

function yr(t, n) {
  try {
    if (n == "webgl2") {
      const r = t.getContext("webgl2");
      return r || !(t instanceof HTMLCanvasElement) ? r : t.getContext("experimental-webgl2")
    }
    const e = t.getContext("webgl");
    return e || !(t instanceof HTMLCanvasElement) ? e : t.getContext("experimental-webgl") ?? t.getContext("moz-webgl") ?? t.getContext("webkit-3d")
  } catch (e) {
    console.error("Error while getting canvas context:", e);
    return
  }
}
async function Rs() {
  var n, e, r, o, a, i, s, c, _, u, p, f, d, g, h, y, C, T, D, S, N, A, w, v, E, I, H, x, L, U, Q, ue;
  const t = await Ds();
  if (!t) throw new Error("Fingerprint failed!");
  return {
    navigator: t.navigator ? {
      bluetoothAvailability: t.navigator.bluetoothAvailability,
      deviceMemory: t.navigator.deviceMemory,
      hardwareConcurrency: t.navigator.hardwareConcurrency,
      oscpu: t.navigator.oscpu,
      platform: t.navigator.platform,
      vendor: t.navigator.vendor,
      applePay: t.navigator.applePay,
      privateClickMeasurement: t.navigator.privateClickMeasurement,
      pdfViewerEnabled: t.navigator.pdfViewerEnabled,
      lied: t.navigator.lied
    } : void 0,
    workerScope: t.workerScope ? {
      deviceMemory: t.workerScope.deviceMemory,
      hardwareConcurrency: t.workerScope.hardwareConcurrency,
      platform: t.workerScope.platform,
      system: t.workerScope.system,
      userAgent: t.workerScope.userAgent,
      userAgentData: {
        architecture: (n = t.workerScope.userAgentData) == null ? void 0 : n.architecture,
        bitness: (e = t.workerScope.userAgentData) == null ? void 0 : e.bitness,
        mobile: (r = t.workerScope.userAgentData) == null ? void 0 : r.mobile,
        model: (o = t.workerScope.userAgentData) == null ? void 0 : o.model,
        platform: (a = t.workerScope.userAgentData) == null ? void 0 : a.platform,
        platformVersion: (i = t.workerScope.userAgentData) == null ? void 0 : i.platformVersion
      }
    } : void 0,
    screen: t.screen ? {
      minDim: Math.min(t.screen.width, t.screen.height),
      maxDim: Math.max(t.screen.width, t.screen.height),
      pixelDepth: t.screen.pixelDepth,
      colorDepth: t.screen.colorDepth
    } : void 0,
    media: t.media,
    canvas2d: {
      ...(s = t.canvas2d) != null && s.lied ? {} : {
        dataURI: (c = t.canvas2d) == null ? void 0 : c.dataURI,
        paintURI: (_ = t.canvas2d) == null ? void 0 : _.paintURI,
        textURI: (u = t.canvas2d) == null ? void 0 : u.textURI,
        emojiURI: (p = t.canvas2d) == null ? void 0 : p.emojiURI
      },
      ...(f = t.canvas2d) != null && f.liedTextMetrics ? {} : {
        textMetricsSystemSum: (d = t.canvas2d) == null ? void 0 : d.textMetricsSystemSum,
        emojiSet: (g = t.canvas2d) == null ? void 0 : g.emojiSet
      }
    },
    canvasWebgl: t.canvasWebgl,
    cssMedia: t.cssMedia ? {
      reducedMotion: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS["prefers-reduced-motion"]
      }),
      monochrome: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS.monochrome
      }),
      invertedColors: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS["inverted-colors"]
      }),
      forcedColors: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS["forced-colors"]
      }),
      colorGamut: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS["color-gamut"]
      }),
      hdr: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS["dynamic-range"]
      }),
      contrast: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS["prefers-contrast"]
      }),
      reducedTransparency: Ee(() => {
        var F;
        return (F = t.cssMedia) == null ? void 0 : F.mediaCSS["prefers-reduced-transparency"]
      })
    } : void 0,
    css: t.css ? (y = (h = t.css) == null ? void 0 : h.system) == null ? void 0 : y.fonts : void 0,
    timezone: t.timezone,
    offlineAudioContext: (C = t.offlineAudioContext) != null && C.lied ? void 0 : {
      binsSample: (T = t.offlineAudioContext) == null ? void 0 : T.binsSample,
      compressorGainReduction: (D = t.offlineAudioContext) == null ? void 0 : D.compressorGainReduction,
      copySample: (S = t.offlineAudioContext) == null ? void 0 : S.copySample,
      floatFrequencyDataSum: (N = t.offlineAudioContext) == null ? void 0 : N.floatFrequencyDataSum,
      floatTimeDomainDataSum: (A = t.offlineAudioContext) == null ? void 0 : A.floatTimeDomainDataSum,
      lied: (w = t.offlineAudioContext) == null ? void 0 : w.lied,
      noise: (v = t.offlineAudioContext) == null ? void 0 : v.noise,
      totalUniqueSamples: (E = t.offlineAudioContext) == null ? void 0 : E.totalUniqueSamples,
      values: (I = t.offlineAudioContext) == null ? void 0 : I.values
    },
    fonts: t.fonts ? t.fonts.fontFaceLoadFonts : void 0,
    intl: !t.intl || t.intl.lied ? void 0 : {
      lied: (H = t.intl) == null ? void 0 : H.lied,
      listFormat: (x = t.intl) == null ? void 0 : x.listFormat,
      locale: (L = t.intl) == null ? void 0 : L.locale,
      numberFormat: (U = t.intl) == null ? void 0 : U.numberFormat,
      pluralRules: (Q = t.intl) == null ? void 0 : Q.pluralRules,
      relativeTimeFormat: (ue = t.intl) == null ? void 0 : ue.relativeTimeFormat
    },
    resistance: t.resistance,
    math: t.math
  }
}
async function Ds() {
  try {
    const [t, n, e, r, o, a, i, s, c, _, u, p, f, d] = await Promise.all([ge("offlineAudioContext", Hi()), ge("canvasWebgl", Os()), ge("canvas2d", ji()), ge("css", Promise.resolve(Gi())), ge("cssMedia", Promise.resolve(Wi())), ge("screen", ws()), ge("consoleErrors", Promise.resolve(zi())), ge("timezone", Promise.resolve(bs())), ge("fonts", ts()), ge("media", us()), ge("resistance", gs()), ge("intl", ss()), ge("workerScope", Mi()), ge("maths", Promise.resolve(ei()))]), [g, h, y, C, T] = await Promise.all([ge("navigator", ls(f)), ge("headless", is({
      webgl: n
    })), ge("lies", Promise.resolve(Ei())), ge("trash", Promise.resolve(Ri())), ge("capturedErrors", Promise.resolve(ni()))]);
    return {
      navigator: g,
      headless: h,
      cssMedia: o,
      css: r,
      screen: a,
      media: _,
      canvas2d: e,
      canvasWebgl: {
        ...n
      },
      consoleErrors: i,
      timezone: s,
      offlineAudioContext: t,
      fonts: c,
      lies: y,
      trash: C,
      capturedErrors: T,
      resistance: u,
      intl: p,
      workerScope: f,
      math: d
    }
  } finally {
    bi()
  }
}

function ge(t, n) {
  return n.catch(() => {})
}
let Qt;
async function Is() {
  if (Qt) try {
    return await Qt
  } catch {}
  return Qt = (async () => {
    var a, i, s, c, _, u, p, f, d, g, h, y, C, T, D, S, N, A, w, v, E, I, H, x, L, U, Q, ue, F, Oe, k, M, z, ee, me, be, Ce, Se, Xt, Yt, _t, W, V, Y, ie, le, de, He, Pe, $e, Jt, Vn, zn, $n, qn, Kn, Xn, Yn, Jn;
    const t = await Rs();
    switch ((a = t.navigator) != null && a.lied && t.screen && (t.screen.minDim = 0, t.screen.maxDim = 0), bo({
        userAgent: (i = t.workerScope) == null ? void 0 : i.userAgent
      })) {
      case "Firefox":
        delete t.intl, t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI);
        break;
      case "Brave":
        t.navigator && (delete t.navigator.deviceMemory, delete t.navigator.hardwareConcurrency), t.workerScope && (delete t.workerScope.deviceMemory, delete t.workerScope.hardwareConcurrency), t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI), t.canvasWebgl && delete t.canvasWebgl.parameters, t.offlineAudioContext && (delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.floatTimeDomainDataSum, delete t.offlineAudioContext.sampleSum, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.noise), t.fonts && delete t.fonts;
      case "Safari":
        t.canvas2d && delete t.canvas2d.dataURI, t.offlineAudioContext && (delete t.offlineAudioContext.baseLatency, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.totalUniqueSamples, delete t.offlineAudioContext.noise), t.screen && (delete t.screen.minDim, delete t.screen.maxDim)
    }
    const e = (s = t.navigator) == null ? void 0 : s.lied;
    t.navigator && delete t.navigator.lied, t.workerScope && delete t.workerScope.userAgent;
    const r = await Promise.all([O(t.navigator), O(t.workerScope), O(t.screen), O(t.media), "a0", O(t.canvas2d), O(t.canvasWebgl), O(t.cssMedia), O(t.css), "47", O(t.timezone), O(t.offlineAudioContext), O(t.fonts), O(t.intl), O(t.math), "wF"]),
      o = await Promise.all([O((c = t.canvas2d) == null ? void 0 : c.dataURI), O((_ = t.canvas2d) == null ? void 0 : _.emojiSet), O((u = t.canvas2d) == null ? void 0 : u.emojiURI), O((p = t.canvas2d) == null ? void 0 : p.paintURI), O((f = t.canvas2d) == null ? void 0 : f.textMetricsSystemSum), O((d = t.canvas2d) == null ? void 0 : d.textURI), "|", O((g = t.offlineAudioContext) == null ? void 0 : g.binsSample), O((h = t.offlineAudioContext) == null ? void 0 : h.compressorGainReduction), O((y = t.offlineAudioContext) == null ? void 0 : y.copySample), O((C = t.offlineAudioContext) == null ? void 0 : C.floatFrequencyDataSum), O((T = t.offlineAudioContext) == null ? void 0 : T.floatTimeDomainDataSum), O((D = t.offlineAudioContext) == null ? void 0 : D.lied), O((S = t.offlineAudioContext) == null ? void 0 : S.noise), O((N = t.offlineAudioContext) == null ? void 0 : N.totalUniqueSamples), O((A = t.offlineAudioContext) == null ? void 0 : A.values), "|", O(t.intl), "|", O((w = t.intl) == null ? void 0 : w.lied), O((v = t.intl) == null ? void 0 : v.listFormat), O((E = t.intl) == null ? void 0 : E.locale), O((I = t.intl) == null ? void 0 : I.numberFormat), O((H = t.intl) == null ? void 0 : H.pluralRules), O((x = t.intl) == null ? void 0 : x.relativeTimeFormat), "|", O(e), O((L = t.navigator) == null ? void 0 : L.applePay), O((U = t.navigator) == null ? void 0 : U.bluetoothAvailability), O((Q = t.navigator) == null ? void 0 : Q.deviceMemory), O((ue = t.navigator) == null ? void 0 : ue.hardwareConcurrency), O((F = t.navigator) == null ? void 0 : F.oscpu), O((Oe = t.navigator) == null ? void 0 : Oe.pdfViewerEnabled), O((k = t.navigator) == null ? void 0 : k.platform), O((M = t.navigator) == null ? void 0 : M.privateClickMeasurement), O((z = t.navigator) == null ? void 0 : z.vendor), "|", O((ee = t.workerScope) == null ? void 0 : ee.deviceMemory), O((me = t.workerScope) == null ? void 0 : me.hardwareConcurrency), O((be = t.workerScope) == null ? void 0 : be.platform), O((Ce = t.workerScope) == null ? void 0 : Ce.system), O((Se = t.workerScope) == null ? void 0 : Se.userAgentData), "|", O((Xt = t.cssMedia) == null ? void 0 : Xt.colorGamut), O((Yt = t.cssMedia) == null ? void 0 : Yt.contrast), O((_t = t.cssMedia) == null ? void 0 : _t.forcedColors), O((W = t.cssMedia) == null ? void 0 : W.hdr), O((V = t.cssMedia) == null ? void 0 : V.invertedColors), O((Y = t.cssMedia) == null ? void 0 : Y.monochrome), O((ie = t.cssMedia) == null ? void 0 : ie.reducedMotion), O((le = t.cssMedia) == null ? void 0 : le.reducedTransparency), "|", O((de = t.canvasWebgl) == null ? void 0 : de.contextAttributes2), O((He = t.canvasWebgl) == null ? void 0 : He.contextAttributes), O((Pe = t.canvasWebgl) == null ? void 0 : Pe.extensionParameters2), O(($e = t.canvasWebgl) == null ? void 0 : $e.extensionParameters), O((Jt = t.canvasWebgl) == null ? void 0 : Jt.extensions), O((Vn = t.canvasWebgl) == null ? void 0 : Vn.gpu), O((zn = t.canvasWebgl) == null ? void 0 : zn.lied), O(($n = t.canvasWebgl) == null ? void 0 : $n.parameterOrExtensionLie), O((qn = t.canvasWebgl) == null ? void 0 : qn.parameters), "|", O((Kn = t.screen) == null ? void 0 : Kn.colorDepth), O((Xn = t.screen) == null ? void 0 : Xn.pixelDepth), O((Yn = t.screen) == null ? void 0 : Yn.minDim), O((Jn = t.screen) == null ? void 0 : Jn.maxDim)]);
    return r.map(yn => yn.slice(0, 2)).join("").padEnd(32, "0").slice(0, 32) + "|" + o.map(yn => yn[0]).join("") + "|11"
  })(), Qt
}
const wr = "theme";
var Tt, St, At, Ot, Rt, Dt, It, Nt, Ct, kt;
class Ns {
  constructor() {
    Z(this, Tt, fe(!1));
    Z(this, St, fe(!1));
    Z(this, At, fe(0));
    Z(this, Ot, fe(!1));
    Z(this, Rt, fe(an(Cs())));
    Z(this, Dt, fe(null));
    Z(this, It, fe(!1));
    Z(this, Nt, fe("custom-winter"));
    Z(this, Ct, fe(an(Date.now())));
    Z(this, kt, fe(void 0));
    setInterval(() => {
      oe(B(this, Ct), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(wr), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return re(B(this, Tt))
  }
  set dropletsDialogOpen(n) {
    oe(B(this, Tt), n, !0)
  }
  get storeDialogOpen() {
    return re(B(this, St))
  }
  set storeDialogOpen(n) {
    oe(B(this, St), n, !0)
  }
  get storeTabIndex() {
    return re(B(this, At))
  }
  set storeTabIndex(n) {
    oe(B(this, At), n, !0)
  }
  get muted() {
    return re(B(this, Ot))
  }
  set muted(n) {
    oe(B(this, Ot), n, !0)
  }
  get language() {
    return re(B(this, Rt))
  }
  set language(n) {
    oe(B(this, Rt), n, !0)
  }
  get map() {
    return re(B(this, Dt))
  }
  set map(n) {
    oe(B(this, Dt), n)
  }
  get automatedClicks() {
    return re(B(this, It))
  }
  set automatedClicks(n) {
    oe(B(this, It), n, !0)
  }
  get theme() {
    return re(B(this, Nt))
  }
  set theme(n) {
    oe(B(this, Nt), n, !0), localStorage.setItem(wr, n), document.documentElement.setAttribute("data-theme", n)
  }
  get now() {
    return re(B(this, Ct))
  }
  get captcha() {
    return ks ? re(B(this, kt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(n) {
    oe(B(this, kt), n, !0)
  }
}
Tt = new WeakMap, St = new WeakMap, At = new WeakMap, Ot = new WeakMap, Rt = new WeakMap, Dt = new WeakMap, It = new WeakMap, Nt = new WeakMap, Ct = new WeakMap, kt = new WeakMap;
const so = new Ns;

function Cs() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(n => n.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const ks = vo.toLowerCase() !== "false",
  Ps = `
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
async function xs() {
  try {
    const t = await fetch(`${Bn}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!t.ok) return null;
    const n = await t.json(),
      e = await Ls(n.prefix, n.difficulty);
    return e ? {
      ...n,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Ls(t, n) {
  return new Promise(e => {
    const r = new Blob([Ps], {
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
      prefix: t,
      difficulty: n
    })
  })
}
const co = 3;
var Pt, xt;
class Ms {
  constructor() {
    Z(this, Pt, fe(null));
    Z(this, xt, fe(0))
  }
  get current() {
    return re(B(this, Pt))
  }
  set current(n) {
    oe(B(this, Pt), n, !0)
  }
  get errorCount() {
    return re(B(this, xt))
  }
  set errorCount(n) {
    oe(B(this, xt), n, !0)
  }
}
Pt = new WeakMap, xt = new WeakMap;
const Ae = new Ms;
async function br(t) {
  if (t === 1) return Bs();
  if (t === 2) {
    const n = await uo();
    return n ? vr("turnstile", n) : !1
  }
  if (t === 3) {
    const n = await Hs();
    return n ? vr("hcaptcha", n) : !1
  }
  return t === 4 ? Us() : !1
}
async function Bs() {
  for (let t = 0; t < co; t++) try {
    const n = await xs();
    if (!n) continue;
    return await Ve.verifyChallenge({
      type: "pow",
      challengeId: n.challengeId,
      nonce: n.nonce
    }), !0
  } catch {}
  return !1
}
async function vr(t, n) {
  try {
    const e = await Ve.postCaptchaSession({
      provider: t,
      token: n
    });
    return await Ve.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const lt = {};

function uo() {
  return lo(2)
}

function Hs() {
  return lo(3)
}

function lo(t) {
  const n = lt[t];
  if (n) return n;
  const e = new Promise(r => {
    Ae.errorCount = 0, Ae.current = {
      tier: t,
      resolve: o => {
        delete lt[t], r(o)
      }
    }
  });
  return lt[t] = e, e
}

function Us() {
  const t = lt[4];
  if (t) return t;
  const n = new Promise(e => {
    Ae.errorCount = 0, Ae.current = {
      tier: 4,
      resolve: r => {
        delete lt[4], e(r)
      }
    }
  });
  return lt[4] = n, n
}

function QE(t) {
  const n = Ae.current;
  !n || n.tier === 4 || (n.resolve(t), Ae.current = null)
}

function ZE() {
  const t = Ae.current;
  !t || t.tier === 4 || (Ae.errorCount += 1, Ae.errorCount >= co && (t.resolve(void 0), Ae.current = null))
}

function eT() {
  const t = Ae.current;
  !t || t.tier !== 4 || (t.resolve(!0), Ae.current = null)
}

function tT() {
  const t = Ae.current;
  t && (t.tier === 4 ? t.resolve(!1) : t.resolve(void 0), Ae.current = null)
}
var l = (t => (t[t.CONTINUE = 100] = "CONTINUE", t[t.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", t[t.PROCESSING = 102] = "PROCESSING", t[t.EARLY_HINTS = 103] = "EARLY_HINTS", t[t.OK = 200] = "OK", t[t.CREATED = 201] = "CREATED", t[t.ACCEPTED = 202] = "ACCEPTED", t[t.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", t[t.NO_CONTENT = 204] = "NO_CONTENT", t[t.RESET_CONTENT = 205] = "RESET_CONTENT", t[t.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", t[t.MULTI_STATUS = 207] = "MULTI_STATUS", t[t.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", t[t.IM_USED = 226] = "IM_USED", t[t.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", t[t.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", t[t.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", t[t.FOUND = 302] = "FOUND", t[t.SEE_OTHER = 303] = "SEE_OTHER", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.USE_PROXY = 305] = "USE_PROXY", t[t.SWITCH_PROXY = 306] = "SWITCH_PROXY", t[t.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", t[t.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZED = 401] = "UNAUTHORIZED", t[t.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", t[t.FORBIDDEN = 403] = "FORBIDDEN", t[t.NOT_FOUND = 404] = "NOT_FOUND", t[t.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", t[t.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", t[t.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", t[t.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", t[t.CONFLICT = 409] = "CONFLICT", t[t.GONE = 410] = "GONE", t[t.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", t[t.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", t[t.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", t[t.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", t[t.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", t[t.URI_TOO_LONG = 414] = "URI_TOO_LONG", t[t.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", t[t.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", t[t.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", t[t.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", t[t.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", t[t.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", t[t.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", t[t.LOCKED = 423] = "LOCKED", t[t.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", t[t.TOO_EARLY = 425] = "TOO_EARLY", t[t.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", t[t.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", t[t.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", t[t.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", t[t.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", t[t.BAD_GATEWAY = 502] = "BAD_GATEWAY", t[t.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", t[t.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", t[t.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", t[t.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", t[t.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", t[t.LOOP_DETECTED = 508] = "LOOP_DETECTED", t[t.NOT_EXTENDED = 510] = "NOT_EXTENDED", t[t.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", t[t.AWS_ELB_000 = 0] = "AWS_ELB_000", t[t.THIS_IS_FINE = 218] = "THIS_IS_FINE", t[t.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", t[t.METHOD_FAILURE = 420] = "METHOD_FAILURE", t[t.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", t[t.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", t[t.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", t[t.NO_RESPONSE = 444] = "NO_RESPONSE", t[t.RETRY_WITH = 449] = "RETRY_WITH", t[t.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", t[t.REDIRECT_IIS = 451] = "REDIRECT_IIS", t[t.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", t[t.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", t[t.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", t[t.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", t[t.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", t[t.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", t[t.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", t[t.INVALID_TOKEN = 498] = "INVALID_TOKEN", t[t.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", t[t.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", t[t.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", t[t.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", t[t.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", t[t.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", t[t.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", t[t.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", t[t.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", t[t.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", t[t.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", t[t.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", t[t.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", t[t.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", t[t.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", t[t.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", t[t.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", t[t.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", t[t.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", t[t.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", t[t.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", t[t.REQUEST_DENIED = 999] = "REQUEST_DENIED", t))(l || {});
const Fs = () => "Your account has been suspended for breaking the rules",
  js = () => "Sua conta foi suspensa por quebrar as regras",
  Gs = () => "您的账号因违反规则已被暂停",
  Ws = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Vs = () => "Tu cuenta ha sido suspendida por infringir las regras",
  zs = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  $s = () => "Il tuo account è stato sospeso per aver infranto le regole",
  qs = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Ks = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Xs = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ys = () => "Ваш обліковий запис було призупинено за порушення правил",
  Js = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Qs = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Fs() : e === "pt" ? js() : e === "ch" ? Gs() : e === "de" ? Ws() : e === "es" ? Vs() : e === "fr" ? zs() : e === "it" ? $s() : e === "jp" ? qs() : e === "pl" ? Ks() : e === "ru" ? Xs() : e === "uk" ? Ys() : Js()
  },
  Zs = () => "Alliance name already taken",
  ec = () => "Já possui uma aliança com esse nome",
  tc = () => "该联盟名称已被占用",
  nc = () => "Der Allianzname ist bereits vergeben",
  rc = () => "Ese nombre de alianza ya está en uso",
  oc = () => "Ce nom d’alliance est déjà pris",
  ac = () => "Esiste già un'alleanza con questo nome",
  ic = () => "このアライアンス名は既に使用されています。",
  sc = () => "Nazwa sojuszu jest już zajęta",
  cc = () => "Такое название альянса уже используется",
  uc = () => "Назва альянсу вже зайнята",
  lc = () => "Tên liên minh đã được sử dụng",
  dc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Zs() : e === "pt" ? ec() : e === "ch" ? tc() : e === "de" ? nc() : e === "es" ? rc() : e === "fr" ? oc() : e === "it" ? ac() : e === "jp" ? ic() : e === "pl" ? sc() : e === "ru" ? cc() : e === "uk" ? uc() : lc()
  },
  _c = () => "Alliance name exceeded the maximum number of characters",
  fc = () => "O nome da aliança excedeu o número máximo de caracteres",
  pc = () => "联盟名称超过最大字符数限制",
  mc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  hc = () => "El nombre de la alianza superó el número máximo de caracteres",
  gc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  yc = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  wc = () => "アライアンス名が最大文字数を超えています。",
  bc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  vc = () => "Название альянса превышает максимальную длину",
  Ec = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Tc = () => "Tên liên minh vượt quá số ký tự cho phép",
  Sc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? _c() : e === "pt" ? fc() : e === "ch" ? pc() : e === "de" ? mc() : e === "es" ? hc() : e === "fr" ? gc() : e === "it" ? yc() : e === "jp" ? wc() : e === "pl" ? bc() : e === "ru" ? vc() : e === "uk" ? Ec() : Tc()
  },
  Ac = () => "Alliance with empty name",
  Oc = () => "Aliança com nome vazio",
  Rc = () => "名称为空的联盟",
  Dc = () => "Allianz mit leerem Namen",
  Ic = () => "Alianza con nombre vacío",
  Nc = () => "Alliance avec nom vide",
  Cc = () => "Alleanza con nome vuoto",
  kc = () => "名前が空のアライアンスです。",
  Pc = () => "Sojusz z pustą nazwą",
  xc = () => "Альянс с пустым названием",
  Lc = () => "Альянс із порожньою назвою",
  Mc = () => "Liên minh không có tên",
  Bc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ac() : e === "pt" ? Oc() : e === "ch" ? Rc() : e === "de" ? Dc() : e === "es" ? Ic() : e === "fr" ? Nc() : e === "it" ? Cc() : e === "jp" ? kc() : e === "pl" ? Pc() : e === "ru" ? xc() : e === "uk" ? Lc() : Mc()
  },
  Hc = () => "Botting",
  Uc = () => "Uso de bots",
  Fc = () => "脚本",
  jc = () => "Bot-Nutzung",
  Gc = () => "Botting",
  Wc = () => "Bots",
  Vc = () => "Uso di bot",
  zc = () => "ボット使用",
  $c = () => "Botting",
  qc = () => "Боттинг",
  Kc = () => "Боти",
  Xc = () => "Botting",
  Yc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Hc() : e === "pt" ? Uc() : e === "ch" ? Fc() : e === "de" ? jc() : e === "es" ? Gc() : e === "fr" ? Wc() : e === "it" ? Vc() : e === "jp" ? zc() : e === "pl" ? $c() : e === "ru" ? qc() : e === "uk" ? Kc() : Xc()
  },
  Jc = () => "Use of software to completely automate painting",
  Qc = () => "Uso de software para pintar de forma completamente automatizada ",
  Zc = () => "使用软件完全自动化绘制",
  eu = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  tu = () => "Uso de software para automatizar completamente la pintura",
  nu = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  ru = () => "Uso di software per dipingere in modo completamente automatizzato",
  ou = () => "ペイントを完全に自動化するソフトウェアの使用",
  au = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  iu = () => "Использование программ для полной автоматизации рисования",
  su = () => "Використання програм, які повністю автоматизують малювання",
  cu = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  uu = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Jc() : e === "pt" ? Qc() : e === "ch" ? Zc() : e === "de" ? eu() : e === "es" ? tu() : e === "fr" ? nu() : e === "it" ? ru() : e === "jp" ? ou() : e === "pl" ? au() : e === "ru" ? iu() : e === "uk" ? su() : cu()
  },
  lu = () => "Breaking the rules",
  du = () => "Quebrar as regras",
  _u = () => "违反规则",
  fu = () => "Regeln brechen",
  pu = () => "Romper las reglas",
  mu = () => "Violation des règles",
  hu = () => "Violazione delle regole",
  gu = () => "ルール違反",
  yu = () => "Łamanie zasad",
  wu = () => "Нарушение правил",
  bu = () => "Порушення правил",
  vu = () => "Vi phạm luật",
  Eu = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? lu() : e === "pt" ? du() : e === "ch" ? _u() : e === "de" ? fu() : e === "es" ? pu() : e === "fr" ? mu() : e === "it" ? hu() : e === "jp" ? gu() : e === "pl" ? yu() : e === "ru" ? wu() : e === "uk" ? bu() : vu()
  },
  Tu = () => "You have broken one of Wplace's rules",
  Su = () => "Você quebrou uma das regras do Wplace",
  Au = () => "你违反了 Wplace 的一项规则",
  Ou = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Ru = () => "Has infringido una de las reglas de Wplace",
  Du = () => "Vous avez enfreint l’une des règles de Wplace",
  Iu = () => "Hai infranto una delle regole di Wplace",
  Nu = () => "Wplaceのルールのいずれかに違反しました。",
  Cu = () => "Złamałeś jedną z zasad Wplace",
  ku = () => "Вы нарушили одно из правил Wplace",
  Pu = () => "Ви порушили одне з правил Wplace",
  xu = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Lu = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Tu() : e === "pt" ? Su() : e === "ch" ? Au() : e === "de" ? Ou() : e === "es" ? Ru() : e === "fr" ? Du() : e === "it" ? Iu() : e === "jp" ? Nu() : e === "pl" ? Cu() : e === "ru" ? ku() : e === "uk" ? Pu() : xu()
  },
  Mu = () => "You cannot paint over event pixels",
  Bu = () => "Você não pode pintar sobre pixels de eventos",
  Hu = () => "你不能覆盖活动像素",
  Uu = () => "Du kannst nicht über Event-Pixel malen",
  Fu = () => "No puedes pintar sobre píxeles de evento",
  ju = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Gu = () => "Non puoi dipingere sopra i pixel dell'evento",
  Wu = () => "イベント用のピクセルの上には塗れません。",
  Vu = () => "Nie możesz malować po pikselach wydarzenia",
  zu = () => "Вы не можете рисовать по пикселям события",
  $u = () => "Ви не можете малювати поверх пікселів події",
  qu = () => "Bạn không thể tô lên pixel sự kiện",
  Er = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Mu() : e === "pt" ? Bu() : e === "ch" ? Hu() : e === "de" ? Uu() : e === "es" ? Fu() : e === "fr" ? ju() : e === "it" ? Gu() : e === "jp" ? Wu() : e === "pl" ? Vu() : e === "ru" ? zu() : e === "uk" ? $u() : qu()
  },
  Ku = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Xu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Yu = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Ju = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Qu = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Zu = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  el = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  tl = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  nl = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  rl = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  ol = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  al = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  il = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ku() : e === "pt" ? Xu() : e === "ch" ? Yu() : e === "de" ? Ju() : e === "es" ? Qu() : e === "fr" ? Zu() : e === "it" ? el() : e === "jp" ? tl() : e === "pl" ? nl() : e === "ru" ? rl() : e === "uk" ? ol() : al()
  },
  sl = () => "Challenge verification not completed",
  cl = () => "Verificação do desafio não concluída",
  ul = () => "挑战验证未完成",
  ll = () => "Herausforderungsverifizierung nicht abgeschlossen",
  dl = () => "Verificación del desafío no completada",
  _l = () => "Vérification du défi non terminée",
  fl = () => "Verifica della sfida non completata",
  pl = () => "チャレンジ検証が完了していません",
  ml = () => "Weryfikacja wyzwania niezakończona",
  hl = () => "Верификация вызова не завершена",
  gl = () => "Перевірку виклику не завершено",
  yl = () => "Xác minh thử thách chưa hoàn thành",
  Sn = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? sl() : e === "pt" ? cl() : e === "ch" ? ul() : e === "de" ? ll() : e === "es" ? dl() : e === "fr" ? _l() : e === "it" ? fl() : e === "jp" ? pl() : e === "pl" ? ml() : e === "ru" ? hl() : e === "uk" ? gl() : yl()
  },
  wl = () => "Couldn't complete the purchase. This item does not exist.",
  bl = () => "Não foi possível concluir a compra. Este item não existe.",
  vl = () => "无法完成购买。该物品不存在。",
  El = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Tl = () => "No se pudo completar la compra. Este ítem no existe.",
  Sl = () => "Achat impossible. Cet objet n’existe pas.",
  Al = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Ol = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Rl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Dl = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Il = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Nl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Tr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? wl() : e === "pt" ? bl() : e === "ch" ? vl() : e === "de" ? El() : e === "es" ? Tl() : e === "fr" ? Sl() : e === "it" ? Al() : e === "jp" ? Ol() : e === "pl" ? Rl() : e === "ru" ? Dl() : e === "uk" ? Il() : Nl()
  },
  Cl = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  kl = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Pl = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  xl = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Ll = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Ml = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Bl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Hl = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Ul = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  Fl = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  jl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Gl = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Wl = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Cl() : e === "pt" ? kl() : e === "ch" ? Pl() : e === "de" ? xl() : e === "es" ? Ll() : e === "fr" ? Ml() : e === "it" ? Bl() : e === "jp" ? Hl() : e === "pl" ? Ul() : e === "ru" ? Fl() : e === "uk" ? jl() : Gl()
  },
  Vl = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  zl = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  $l = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  ql = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Kl = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Xl = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Yl = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Jl = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ql = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Zl = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  ed = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  td = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Sr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Vl() : e === "pt" ? zl() : e === "ch" ? $l() : e === "de" ? ql() : e === "es" ? Kl() : e === "fr" ? Xl() : e === "it" ? Yl() : e === "jp" ? Jl() : e === "pl" ? Ql() : e === "ru" ? Zl() : e === "uk" ? ed() : td()
  },
  nd = () => "Doxxing",
  rd = () => "Doxxing",
  od = () => "人肉搜索",
  ad = () => "Doxxing",
  id = () => "Doxxing",
  sd = () => "Doxxing",
  cd = () => "Doxxing",
  ud = () => "ドックス（Doxxing）",
  ld = () => "Doxxing",
  dd = () => "Докcинг",
  _d = () => "Докcинг",
  fd = () => "Doxxing",
  pd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? nd() : e === "pt" ? rd() : e === "ch" ? od() : e === "de" ? ad() : e === "es" ? id() : e === "fr" ? sd() : e === "it" ? cd() : e === "jp" ? ud() : e === "pl" ? ld() : e === "ru" ? dd() : e === "uk" ? _d() : fd()
  },
  md = () => "Released other's personal information without their consent",
  hd = () => "Vazar informações pessoais de terceiros sem consentimento",
  gd = () => "在未获同意的情况下公开他人个人信息",
  yd = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  wd = () => "Divulgó información personal de otra persona sin su consentimiento",
  bd = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  vd = () => "Diffusione di informazioni personali di terzi senza consenso",
  Ed = () => "他人の個人情報を同意なく公開した。",
  Td = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Sd = () => "Публикация личной информации других людей без их согласия",
  Ad = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Od = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Rd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? md() : e === "pt" ? hd() : e === "ch" ? gd() : e === "de" ? yd() : e === "es" ? wd() : e === "fr" ? bd() : e === "it" ? vd() : e === "jp" ? Ed() : e === "pl" ? Td() : e === "ru" ? Sd() : e === "uk" ? Ad() : Od()
  },
  Dd = () => "This email is already in use.",
  Id = () => "Este e-mail já está em uso.",
  Nd = () => "This email is already in use.",
  Cd = () => "This email is already in use.",
  kd = () => "Este correo electrónico ya está en uso.",
  Pd = () => "This email is already in use.",
  xd = () => "Questa email è già in uso.",
  Ld = () => "This email is already in use.",
  Md = () => "This email is already in use.",
  Bd = () => "This email is already in use.",
  Hd = () => "This email is already in use.",
  Ud = () => "This email is already in use.",
  Fd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Dd() : e === "pt" ? Id() : e === "ch" ? Nd() : e === "de" ? Cd() : e === "es" ? kd() : e === "fr" ? Pd() : e === "it" ? xd() : e === "jp" ? Ld() : e === "pl" ? Md() : e === "ru" ? Bd() : e === "uk" ? Hd() : Ud()
  },
  jd = t => `This email is already in use by user #${t.userId}.`,
  Gd = t => `Este e-mail já está em uso pelo usuário #${t.userId}.`,
  Wd = t => `This email is already in use by user #${t.userId}.`,
  Vd = t => `This email is already in use by user #${t.userId}.`,
  zd = t => `Este correo electrónico ya está en uso por el usuario #${t.userId}.`,
  $d = t => `This email is already in use by user #${t.userId}.`,
  qd = t => `Questa email è già in uso dall'utente #${t.userId}.`,
  Kd = t => `This email is already in use by user #${t.userId}.`,
  Xd = t => `This email is already in use by user #${t.userId}.`,
  Yd = t => `This email is already in use by user #${t.userId}.`,
  Jd = t => `This email is already in use by user #${t.userId}.`,
  Qd = t => `This email is already in use by user #${t.userId}.`,
  Zd = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? jd(t) : e === "pt" ? Gd(t) : e === "ch" ? Wd(t) : e === "de" ? Vd(t) : e === "es" ? zd(t) : e === "fr" ? $d(t) : e === "it" ? qd(t) : e === "jp" ? Kd(t) : e === "pl" ? Xd(t) : e === "ru" ? Yd(t) : e === "uk" ? Jd(t) : Qd(t)
  },
  e_ = () => "Enter a valid email address.",
  t_ = () => "Informe um endereço de e-mail válido.",
  n_ = () => "Enter a valid email address.",
  r_ = () => "Enter a valid email address.",
  o_ = () => "Introduce una dirección de correo electrónico válida.",
  a_ = () => "Enter a valid email address.",
  i_ = () => "Inserisci un indirizzo email valido.",
  s_ = () => "Enter a valid email address.",
  c_ = () => "Enter a valid email address.",
  u_ = () => "Enter a valid email address.",
  l_ = () => "Enter a valid email address.",
  d_ = () => "Enter a valid email address.",
  __ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? e_() : e === "pt" ? t_() : e === "ch" ? n_() : e === "de" ? r_() : e === "es" ? o_() : e === "fr" ? a_() : e === "it" ? i_() : e === "jp" ? s_() : e === "pl" ? c_() : e === "ru" ? u_() : e === "uk" ? l_() : d_()
  },
  f_ = t => `Error while painting: ${t.err}`,
  p_ = t => `Erro enquanto pinta: ${t.err}`,
  m_ = t => `绘制时出错：${t.err}`,
  h_ = t => `Fehler beim Malen: ${t.err}`,
  g_ = t => `Error al pintar: ${t.err}`,
  y_ = t => `Erreur lors de la peinture : ${t.err}`,
  w_ = t => `Errore durante la pittura: ${t.err}`,
  b_ = t => `ペイント中にエラーが発生しました: ${t.err}`,
  v_ = t => `Błąd podczas malowania: ${t.err}`,
  E_ = t => `Ошибка при рисовании: ${t.err}`,
  T_ = t => `Помилка під час малювання: ${t.err}`,
  S_ = t => `Lỗi khi tô: ${t.err}`,
  A_ = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? f_(t) : e === "pt" ? p_(t) : e === "ch" ? m_(t) : e === "de" ? h_(t) : e === "es" ? g_(t) : e === "fr" ? y_(t) : e === "it" ? w_(t) : e === "jp" ? b_(t) : e === "pl" ? v_(t) : e === "ru" ? E_(t) : e === "uk" ? T_(t) : S_(t)
  },
  O_ = () => "Exceeded maximum number of characters",
  R_ = () => "Excedeu o número máximo de caracteres permitidos",
  D_ = () => "超出最大字符数",
  I_ = () => "Maximale Zeichenanzahl überschritten",
  N_ = () => "Se excedió el número máximo de caracteres",
  C_ = () => "Nombre maximal de caractères dépassé",
  k_ = () => "Numero massimo di caratteri superato",
  P_ = () => "最大文字数を超過しました",
  x_ = () => "Przekroczono maksymalną liczbę znaków",
  L_ = () => "Превышено максимальное количество символов",
  M_ = () => "Перевищено максимальну кількість символів",
  B_ = () => "Đã vượt quá số ký tự tối đa",
  H_ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? O_() : e === "pt" ? R_() : e === "ch" ? D_() : e === "de" ? I_() : e === "es" ? N_() : e === "fr" ? C_() : e === "it" ? k_() : e === "jp" ? P_() : e === "pl" ? x_() : e === "ru" ? L_() : e === "uk" ? M_() : B_()
  },
  U_ = () => "Verification code expired. Please request a new one.",
  F_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  j_ = () => "验证码已过期，请重新获取。",
  G_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  W_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  V_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  z_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  $_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  q_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  K_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  X_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  Y_ = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  J_ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? U_() : e === "pt" ? F_() : e === "ch" ? j_() : e === "de" ? G_() : e === "es" ? W_() : e === "fr" ? V_() : e === "it" ? z_() : e === "jp" ? $_() : e === "pl" ? q_() : e === "ru" ? K_() : e === "uk" ? X_() : Y_()
  },
  Q_ = () => "Griefing",
  Z_ = () => "Griefing",
  ef = () => "破坏行为",
  tf = () => "Griefing",
  nf = () => "Griefing",
  rf = () => "Griefing",
  of = () => "Griefing",
  af = () => "グリーフィング",
  sf = () => "Griefing",
  cf = () => "Гриферство",
  uf = () => "Гріфінг",
  lf = () => "Griefing",
  df = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Q_() : e === "pt" ? Z_() : e === "ch" ? ef() : e === "de" ? tf() : e === "es" ? nf() : e === "fr" ? rf() : e === "it" ? of() : e === "jp" ? af() : e === "pl" ? sf() : e === "ru" ? cf() : e === "uk" ? uf() : lf()
  },
  _f = () => "Messed up with other's artworks",
  ff = () => "Estragou os desenhos dos outros",
  pf = () => "破坏了他人的作品",
  mf = () => "Kunstwerke anderer beschädigt",
  hf = () => "Arruinó las obras de arte de otros",
  gf = () => "A abîmé les œuvres des autres",
  yf = () => "Ha rovinato i disegni degli altri",
  wf = () => "他人の作品を荒らした",
  bf = () => "Zniszczył prace innych",
  vf = () => "Испортил чужие рисунки",
  Ef = () => "Зіпсував роботи інших",
  Tf = () => "Phá hỏng tranh của người khác",
  Sf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? _f() : e === "pt" ? ff() : e === "ch" ? pf() : e === "de" ? mf() : e === "es" ? hf() : e === "fr" ? gf() : e === "it" ? yf() : e === "jp" ? wf() : e === "pl" ? bf() : e === "ru" ? vf() : e === "uk" ? Ef() : Tf()
  },
  Af = () => "Hate speech",
  Of = () => "Discurso de Ódio",
  Rf = () => "仇恨言论",
  Df = () => "Hassrede",
  If = () => "Discurso de odio",
  Nf = () => "Discours haineux",
  Cf = () => "Discorso d'odio",
  kf = () => "ヘイトスピーチ",
  Pf = () => "Mowa nienawiści",
  xf = () => "Речь ненависти",
  Lf = () => "Мова ворожнечі",
  Mf = () => "Ngôn từ thù hằn",
  Bf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Af() : e === "pt" ? Of() : e === "ch" ? Rf() : e === "de" ? Df() : e === "es" ? If() : e === "fr" ? Nf() : e === "it" ? Cf() : e === "jp" ? kf() : e === "pl" ? Pf() : e === "ru" ? xf() : e === "uk" ? Lf() : Mf()
  },
  Hf = () => "Racism, homophobia, hate groups, ...",
  Uf = () => "Racismo, homofobia, grupos de ódio, ...",
  Ff = () => "种族主义、恐同、仇恨团体等",
  jf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Gf = () => "Racismo, homofobia, grupos de odio, ...",
  Wf = () => "Racisme, homophobie, groupes haineux, ...",
  Vf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  zf = () => "人種差別、同性愛差別、ヘイト団体など。",
  $f = () => "Rasizm, homofobia, grupy nienawiści, ...",
  qf = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Kf = () => "Расизм, гомофобія, групи ненависті, ...",
  Xf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Yf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Hf() : e === "pt" ? Uf() : e === "ch" ? Ff() : e === "de" ? jf() : e === "es" ? Gf() : e === "fr" ? Wf() : e === "it" ? Vf() : e === "jp" ? zf() : e === "pl" ? $f() : e === "ru" ? qf() : e === "uk" ? Kf() : Xf()
  },
  Jf = () => "Inappropriate content",
  Qf = () => "Conteúdo inapropriado",
  Zf = () => "不当内容",
  ep = () => "Unangemessene Inhalte",
  tp = () => "Contenido inapropiado",
  np = () => "Contenu inapproprié",
  rp = () => "Contenuto inappropriato",
  op = () => "不適切なコンテンツ",
  ap = () => "Nieodpowiednie treści",
  ip = () => "Неприемлемый контент",
  sp = () => "Неприйнятний вміст",
  cp = () => "Nội dung không phù hợp",
  up = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Jf() : e === "pt" ? Qf() : e === "ch" ? Zf() : e === "de" ? ep() : e === "es" ? tp() : e === "fr" ? np() : e === "it" ? rp() : e === "jp" ? op() : e === "pl" ? ap() : e === "ru" ? ip() : e === "uk" ? sp() : cp()
  },
  lp = () => "Explicit, hateful, or illegal content",
  dp = () => "Conteúdo explícito, de ódio ou ilegal",
  _p = () => "露骨、仇恨或非法内容",
  fp = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  pp = () => "Contenido explícito, de odio o ilegal",
  mp = () => "Contenu explicite, haineux ou illégal",
  hp = () => "Contenuto esplicito, d'odio o illegale",
  gp = () => "露骨、差別的、または違法なコンテンツ",
  yp = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  wp = () => "Откровенный, разжигающий ненависть или незаконный контент",
  bp = () => "Відвертий, ворожий або незаконний вміст",
  vp = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Ep = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? lp() : e === "pt" ? dp() : e === "ch" ? _p() : e === "de" ? fp() : e === "es" ? pp() : e === "fr" ? mp() : e === "it" ? hp() : e === "jp" ? gp() : e === "pl" ? yp() : e === "ru" ? wp() : e === "uk" ? bp() : vp()
  },
  Tp = () => "Invalid captcha. Please try again.",
  Sp = () => "Captcha inválido. Por favor, tente novamente.",
  Ap = () => "验证码无效，请重试。",
  Op = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Rp = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Dp = () => "Captcha invalide. Veuillez réessayer.",
  Ip = () => "Captcha non valido. Riprova.",
  Np = () => "キャプチャが無効です。もう一度お試しください。",
  Cp = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  kp = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Pp = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  xp = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Lp = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Tp() : e === "pt" ? Sp() : e === "ch" ? Ap() : e === "de" ? Op() : e === "es" ? Rp() : e === "fr" ? Dp() : e === "it" ? Ip() : e === "jp" ? Np() : e === "pl" ? Cp() : e === "ru" ? kp() : e === "uk" ? Pp() : xp()
  },
  Mp = () => "Invalid challenge response",
  Bp = () => "Resposta de desafio inválida",
  Hp = () => "质询响应无效",
  Up = () => "Ungültige Challenge-Antwort",
  Fp = () => "Respuesta de desafío inválida",
  jp = () => "Réponse au défi invalide",
  Gp = () => "Risposta alla sfida non valida",
  Wp = () => "無効なチャレンジ応答",
  Vp = () => "Nieprawidłowa odpowiedź na wyzwanie",
  zp = () => "Неверный ответ на вызов",
  $p = () => "Недійсна відповідь на виклик",
  qp = () => "Phản hồi thử thách không hợp lệ",
  Kp = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Mp() : e === "pt" ? Bp() : e === "ch" ? Hp() : e === "de" ? Up() : e === "es" ? Fp() : e === "fr" ? jp() : e === "it" ? Gp() : e === "jp" ? Wp() : e === "pl" ? Vp() : e === "ru" ? zp() : e === "uk" ? $p() : qp()
  },
  Xp = () => "The verification code is incorrect. Please check it and try again.",
  Yp = () => "Código inválido",
  Jp = () => "验证码不正确。请检查后重试。",
  Qp = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  Zp = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  em = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  tm = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  nm = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  rm = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  om = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  am = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  im = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  sm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Xp() : e === "pt" ? Yp() : e === "ch" ? Jp() : e === "de" ? Qp() : e === "es" ? Zp() : e === "fr" ? em() : e === "it" ? tm() : e === "jp" ? nm() : e === "pl" ? rm() : e === "ru" ? om() : e === "uk" ? am() : im()
  },
  cm = () => "Invalid discord.",
  um = () => "Discord inválido.",
  lm = () => "无效的 Discord。",
  dm = () => "Ungültiger Discord.",
  _m = () => "Discord inválido.",
  fm = () => "Discord invalide.",
  pm = () => "Discord non valido.",
  mm = () => "無効なDiscordアカウントです。",
  hm = () => "Nieprawidłowy Discord.",
  gm = () => "Неверный Discord.",
  ym = () => "Некоректний Discord.",
  wm = () => "Discord không hợp lệ.",
  bm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? cm() : e === "pt" ? um() : e === "ch" ? lm() : e === "de" ? dm() : e === "es" ? _m() : e === "fr" ? fm() : e === "it" ? pm() : e === "jp" ? mm() : e === "pl" ? hm() : e === "ru" ? gm() : e === "uk" ? ym() : wm()
  },
  vm = () => "The name contains disallowed characters or words. Please choose a different name.",
  Em = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Tm = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Sm = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Am = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Om = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Rm = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Dm = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Im = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Nm = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Cm = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  km = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Ar = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? vm() : e === "pt" ? Em() : e === "ch" ? Tm() : e === "de" ? Sm() : e === "es" ? Am() : e === "fr" ? Om() : e === "it" ? Rm() : e === "jp" ? Dm() : e === "pl" ? Im() : e === "ru" ? Nm() : e === "uk" ? Cm() : km()
  },
  Pm = () => "Please enter a valid phone number with country code.",
  xm = () => "Insira um número de telefone válido com código do país.",
  Lm = () => "请输入带国家代码的有效电话号码。",
  Mm = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Bm = () => "Introduce un número de teléfono válido con código de país.",
  Hm = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Um = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Fm = () => "国番号付きの有効な電話番号を入力してください。",
  jm = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Gm = () => "Введите действительный номер телефона с кодом страны.",
  Wm = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Vm = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  zm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Pm() : e === "pt" ? xm() : e === "ch" ? Lm() : e === "de" ? Mm() : e === "es" ? Bm() : e === "fr" ? Hm() : e === "it" ? Um() : e === "jp" ? Fm() : e === "pl" ? jm() : e === "ru" ? Gm() : e === "uk" ? Wm() : Vm()
  },
  $m = () => "Phone number not supported. Please try another number.",
  qm = () => "Número de telefone não suportado. Por favor, tente outro número.",
  Km = () => "不支持此电话号码。请尝试其他号码。",
  Xm = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  Ym = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  Jm = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  Qm = () => "Numero di telefono non supportato. Prova con un altro numero.",
  Zm = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  eh = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  th = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  nh = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  rh = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  oh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? $m() : e === "pt" ? qm() : e === "ch" ? Km() : e === "de" ? Xm() : e === "es" ? Ym() : e === "fr" ? Jm() : e === "it" ? Qm() : e === "jp" ? Zm() : e === "pl" ? eh() : e === "ru" ? th() : e === "uk" ? nh() : rh()
  },
  ah = () => "The new leader must be a member of the alliance",
  ih = () => "O novo líder deve ser um membro da aliança",
  sh = () => "新盟主必须是联盟成员",
  ch = () => "Der neue Anführer muss Mitglied der Allianz sein",
  uh = () => "El nuevo líder debe ser miembro de la alianza",
  lh = () => "Le nouveau chef doit être membre de l’alliance",
  dh = () => "Il nuovo leader deve essere un membro dell'alleanza",
  _h = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  fh = () => "Nowy lider musi być członkiem sojuszu",
  ph = () => "Новый лидер должен быть участником альянса",
  mh = () => "Новий лідер має бути учасником альянсу",
  hh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  gh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ah() : e === "pt" ? ih() : e === "ch" ? sh() : e === "de" ? ch() : e === "es" ? uh() : e === "fr" ? lh() : e === "it" ? dh() : e === "jp" ? _h() : e === "pl" ? fh() : e === "ru" ? ph() : e === "uk" ? mh() : hh()
  },
  yh = () => "Leaderboard is temporarily disabled",
  wh = () => "O ranking está temporariamente desativado",
  bh = () => "排行榜已暂时停用",
  vh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Eh = () => "La clasificación está deshabilitada temporalmente",
  Th = () => "Le classement est temporairement désactivé",
  Sh = () => "La classifica è temporaneamente disattivata",
  Ah = () => "ランキングは一時的に無効になっています。",
  Oh = () => "Ranking jest tymczasowo wyłączony",
  Rh = () => "Таблица лидеров временно отключена",
  Dh = () => "Таблиця лідерів тимчасово вимкнена",
  Ih = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  Xe = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? yh() : e === "pt" ? wh() : e === "ch" ? bh() : e === "de" ? vh() : e === "es" ? Eh() : e === "fr" ? Th() : e === "it" ? Sh() : e === "jp" ? Ah() : e === "pl" ? Oh() : e === "ru" ? Rh() : e === "uk" ? Dh() : Ih()
  },
  Nh = () => "Location name is too big (max. 128 characters)",
  Ch = () => "Nome da localização é grande demais (max. 128 caracteres)",
  kh = () => "位置名称过长（最大 128 个字符）",
  Ph = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  xh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Lh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Mh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Bh = () => "場所の名前が長すぎます（最大128文字）。",
  Hh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Uh = () => "Название локации слишком длинное (макс. 128 символов)",
  Fh = () => "Назва локації надто довга (макс. 128 символів)",
  jh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Gh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Nh() : e === "pt" ? Ch() : e === "ch" ? kh() : e === "de" ? Ph() : e === "es" ? xh() : e === "fr" ? Lh() : e === "it" ? Mh() : e === "jp" ? Bh() : e === "pl" ? Hh() : e === "ru" ? Uh() : e === "uk" ? Fh() : jh()
  },
  Wh = () => "Multi-accounting",
  Vh = () => "Múltiplas contas",
  zh = () => "多账号",
  $h = () => "Multi-Accounting",
  qh = () => "Multi-cuentas",
  Kh = () => "Multi-comptes",
  Xh = () => "Multi-account",
  Yh = () => "複数アカウント使用",
  Jh = () => "Multi-konta",
  Qh = () => "Мультиаккаунт",
  Zh = () => "Мультиакаунтинг",
  eg = () => "Nhiều tài khoản",
  tg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Wh() : e === "pt" ? Vh() : e === "ch" ? zh() : e === "de" ? $h() : e === "es" ? qh() : e === "fr" ? Kh() : e === "it" ? Xh() : e === "jp" ? Yh() : e === "pl" ? Jh() : e === "ru" ? Qh() : e === "uk" ? Zh() : eg()
  },
  ng = () => "Use more than one account to paint pixels",
  rg = () => "Usar mais de uma conta para pintar",
  og = () => "使用多个账号绘制像素",
  ag = () => "Mehr als ein Konto zum Malen verwenden",
  ig = () => "Uso de más de una cuenta para pintar píxeles",
  sg = () => "Utiliser plus d’un compte pour peindre",
  cg = () => "Usare più di un account per dipingere",
  ug = () => "複数のアカウントを使ってピクセルを塗った。",
  lg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  dg = () => "Использование более одного аккаунта для рисования",
  _g = () => "Використання більше ніж одного акаунта для малювання",
  fg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  pg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ng() : e === "pt" ? rg() : e === "ch" ? og() : e === "de" ? ag() : e === "es" ? ig() : e === "fr" ? sg() : e === "it" ? cg() : e === "jp" ? ug() : e === "pl" ? lg() : e === "ru" ? dg() : e === "uk" ? _g() : fg()
  },
  mg = t => `You can change your name again in ${t.days} days`,
  hg = t => `Você pode alterar seu nome novamente em ${t.days} dias.`,
  gg = t => `你可以在 ${t.days} 天后再次修改名称`,
  yg = t => `Du kannst deinen Namen in ${t.days} Tagen erneut ändern`,
  wg = t => `Podrás cambiar tu nombre de nuevo en ${t.days} días`,
  bg = t => `Vous pourrez changer votre nom à nouveau dans ${t.days} jours`,
  vg = t => `Potrai cambiare di nuovo il tuo nome tra ${t.days} giorni.`,
  Eg = t => `${t.days}日後に再び名前を変更できます。`,
  Tg = t => `Następną zmianę nazwy możesz wykonać za ${t.days} dni`,
  Sg = t => `Вы сможете изменить имя снова через ${t.days} дн.`,
  Ag = t => `Ви зможете змінити імʼя знову через ${t.days} днів`,
  Og = t => `Bạn có thể đổi tên lại sau ${t.days} ngày`,
  Rg = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? mg(t) : e === "pt" ? hg(t) : e === "ch" ? gg(t) : e === "de" ? yg(t) : e === "es" ? wg(t) : e === "fr" ? bg(t) : e === "it" ? vg(t) : e === "jp" ? Eg(t) : e === "pl" ? Tg(t) : e === "ru" ? Sg(t) : e === "uk" ? Ag(t) : Og(t)
  },
  Dg = () => "No internet access or the servers are offline. Try again later.",
  Ig = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Ng = () => "没有网络连接或服务器已离线。请稍后重试。",
  Cg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  kg = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Pg = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  xg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Lg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Mg = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Bg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Hg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Ug = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Fg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Dg() : e === "pt" ? Ig() : e === "ch" ? Ng() : e === "de" ? Cg() : e === "es" ? kg() : e === "fr" ? Pg() : e === "it" ? xg() : e === "jp" ? Lg() : e === "pl" ? Mg() : e === "ru" ? Bg() : e === "uk" ? Hg() : Ug()
  },
  jg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Gg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Wg = () => "您无权验证电话号码。请尝试刷新页面。",
  Vg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  zg = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  $g = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  qg = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Kg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Xg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Yg = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  Jg = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  Qg = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  Zg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? jg() : e === "pt" ? Gg() : e === "ch" ? Wg() : e === "de" ? Vg() : e === "es" ? zg() : e === "fr" ? $g() : e === "it" ? qg() : e === "jp" ? Kg() : e === "pl" ? Xg() : e === "ru" ? Yg() : e === "uk" ? Jg() : Qg()
  },
  ey = () => "Operation not allowed. Maybe you have too many favorite locations.",
  ty = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  ny = () => "操作不被允许。你的收藏位置可能过多。",
  ry = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  oy = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  ay = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  iy = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  sy = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  cy = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  uy = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  ly = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  dy = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  _y = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ey() : e === "pt" ? ty() : e === "ch" ? ny() : e === "de" ? ry() : e === "es" ? oy() : e === "fr" ? ay() : e === "it" ? iy() : e === "jp" ? sy() : e === "pl" ? cy() : e === "ru" ? uy() : e === "uk" ? ly() : dy()
  },
  fy = t => `Not enough charges: you have ${t.charges} but this overlay needs ${t.pixels}.`,
  py = t => `Cargas insuficientes: você tem ${t.charges}, mas esta sobreposição precisa de ${t.pixels}.`,
  my = t => `充能不足：你有 ${t.charges}，但此叠加层需要 ${t.pixels}。`,
  hy = t => `Nicht genügend Ladungen: Du hast ${t.charges}, aber dieses Overlay benötigt ${t.pixels}.`,
  gy = t => `Cargas insuficientes: tienes ${t.charges} pero esta superposición necesita ${t.pixels}.`,
  yy = t => `Charges insuffisantes : vous avez ${t.charges} mais ce calque nécessite ${t.pixels}.`,
  wy = t => `Cariche insufficienti: ne hai ${t.charges} ma questo overlay ne richiede ${t.pixels}.`,
  by = t => `チャージが足りません：現在 ${t.charges} ですが、このオーバーレイには ${t.pixels} 必要です。`,
  vy = t => `Za mało ładunków: masz ${t.charges}, ale ta nakładka wymaga ${t.pixels}.`,
  Ey = t => `Недостаточно зарядов: у вас ${t.charges}, но для этого слоя нужно ${t.pixels}.`,
  Ty = t => `Недостатньо зарядів: у вас ${t.charges}, але для цього шару потрібно ${t.pixels}.`,
  Sy = t => `Không đủ lượt sơn: bạn có ${t.charges} nhưng lớp phủ này cần ${t.pixels}.`,
  Ay = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? fy(t) : e === "pt" ? py(t) : e === "ch" ? my(t) : e === "de" ? hy(t) : e === "es" ? gy(t) : e === "fr" ? yy(t) : e === "it" ? wy(t) : e === "jp" ? by(t) : e === "pl" ? vy(t) : e === "ru" ? Ey(t) : e === "uk" ? Ty(t) : Sy(t)
  },
  Oy = () => "You are trying to paint with a color you do not own",
  Ry = () => "Você está tentando pintar com uma cor que não possui",
  Dy = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Iy = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Ny = () => "Estás intentando pintar con un color que no posees",
  Cy = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  ky = () => "Stai cercando di dipingere con un colore che non possiedi",
  Py = () => "所持していない色で塗ろうとしています。",
  xy = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Ly = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  My = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  By = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Or = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Oy() : e === "pt" ? Ry() : e === "ch" ? Dy() : e === "de" ? Iy() : e === "es" ? Ny() : e === "fr" ? Cy() : e === "it" ? ky() : e === "jp" ? Py() : e === "pl" ? xy() : e === "ru" ? Ly() : e === "uk" ? My() : By()
  },
  Hy = () => "Phone already used",
  Uy = () => "Telefone já usado",
  Fy = () => "电话号码已被使用",
  jy = () => "Telefonnummer bereits verwendet",
  Gy = () => "Teléfono ya utilizado",
  Wy = () => "Téléphone déjà utilisé",
  Vy = () => "Telefono già utilizzato",
  zy = () => "この電話番号は既に使用されています。",
  $y = () => "Numer telefonu jest już używany",
  qy = () => "Телефон уже используется",
  Ky = () => "Номер телефону вже використовується",
  Xy = () => "Số điện thoại đã được sử dụng",
  Yy = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Hy() : e === "pt" ? Uy() : e === "ch" ? Fy() : e === "de" ? jy() : e === "es" ? Gy() : e === "fr" ? Wy() : e === "it" ? Vy() : e === "jp" ? zy() : e === "pl" ? $y() : e === "ru" ? qy() : e === "uk" ? Ky() : Xy()
  },
  Jy = () => "This phone number's region is not supported",
  Qy = () => "A região deste número de telefone não é suportada",
  Zy = () => "此电话号码的地区不受支持",
  ew = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  tw = () => "La región de este número de teléfono no es compatible",
  nw = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  rw = () => "La regione di questo numero di telefono non è supportata",
  ow = () => "この電話番号の地域はサポートされていません",
  aw = () => "Region tego numeru telefonu nie jest obsługiwany",
  iw = () => "Регион этого номера телефона не поддерживается",
  sw = () => "Регіон цього номера телефону не підтримується",
  cw = () => "Vùng của số điện thoại này không được hỗ trợ",
  uw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Jy() : e === "pt" ? Qy() : e === "ch" ? Zy() : e === "de" ? ew() : e === "es" ? tw() : e === "fr" ? nw() : e === "it" ? rw() : e === "jp" ? ow() : e === "pl" ? aw() : e === "ru" ? iw() : e === "uk" ? sw() : cw()
  },
  lw = () => "Refresh your page to get the latest update",
  dw = () => "Recarregue sua página para obter as últimas atualizações",
  _w = () => "刷新页面以获取最新更新",
  fw = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  pw = () => "Actualiza la página para obtener la última versión",
  mw = () => "Actualisez la page pour obtenir les dernières mises à jour",
  hw = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  gw = () => "最新の状態にするにはページを再読み込みしてください。",
  yw = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  ww = () => "Обновите страницу, чтобы получить последние изменения",
  bw = () => "Оновіть сторінку, щоб отримати останні оновлення",
  vw = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Rr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? lw() : e === "pt" ? dw() : e === "ch" ? _w() : e === "de" ? fw() : e === "es" ? pw() : e === "fr" ? mw() : e === "it" ? hw() : e === "jp" ? gw() : e === "pl" ? yw() : e === "ru" ? ww() : e === "uk" ? bw() : vw()
  },
  Ew = () => "The request timed out. Please try again.",
  Tw = () => "A solicitação expirou. Por favor, tente novamente.",
  Sw = () => "请求超时。请重试。",
  Aw = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Ow = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Rw = () => "La requête a expiré. Veuillez réessayer.",
  Dw = () => "La richiesta è scaduta. Riprova.",
  Iw = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Nw = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Cw = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  kw = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Pw = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  xw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ew() : e === "pt" ? Tw() : e === "ch" ? Sw() : e === "de" ? Aw() : e === "es" ? Ow() : e === "fr" ? Rw() : e === "it" ? Dw() : e === "jp" ? Iw() : e === "pl" ? Nw() : e === "ru" ? Cw() : e === "uk" ? kw() : Pw()
  },
  Lw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Mw = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Bw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Hw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Uw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Fw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jw = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Gw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ww = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Vw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $w = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  qw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Lw() : e === "pt" ? Mw() : e === "ch" ? Bw() : e === "de" ? Hw() : e === "es" ? Uw() : e === "fr" ? Fw() : e === "it" ? jw() : e === "jp" ? Gw() : e === "pl" ? Ww() : e === "ru" ? Vw() : e === "uk" ? zw() : $w()
  },
  Kw = () => "The service is currently unavailable. Please try again later.",
  Xw = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Yw = () => "服务当前不可用。请稍后再试。",
  Jw = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Qw = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Zw = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  eb = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  tb = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  nb = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  rb = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  ob = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  ab = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  ib = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Kw() : e === "pt" ? Xw() : e === "ch" ? Yw() : e === "de" ? Jw() : e === "es" ? Qw() : e === "fr" ? Zw() : e === "it" ? eb() : e === "jp" ? tb() : e === "pl" ? nb() : e === "ru" ? rb() : e === "uk" ? ob() : ab()
  },
  sb = () => "Too many attempts. Please try again later",
  cb = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  ub = () => "尝试次数过多，请稍后再试",
  lb = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  db = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  _b = () => "Trop de tentatives. Veuillez réessayer plus tard",
  fb = () => "Troppi tentativi. Riprova più tardi.",
  pb = () => "試行回数が多すぎます。後で再度お試しください。",
  mb = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  hb = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  gb = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  yb = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Dr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? sb() : e === "pt" ? cb() : e === "ch" ? ub() : e === "de" ? lb() : e === "es" ? db() : e === "fr" ? _b() : e === "it" ? fb() : e === "jp" ? pb() : e === "pl" ? mb() : e === "ru" ? hb() : e === "uk" ? gb() : yb()
  },
  wb = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  bb = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  vb = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Eb = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Tb = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Sb = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Ab = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Ob = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Rb = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Db = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Ib = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Nb = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Cb = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? wb() : e === "pt" ? bb() : e === "ch" ? vb() : e === "de" ? Eb() : e === "es" ? Tb() : e === "fr" ? Sb() : e === "it" ? Ab() : e === "jp" ? Ob() : e === "pl" ? Rb() : e === "ru" ? Db() : e === "uk" ? Ib() : Nb()
  },
  kb = () => "The typed username does not match your current username.",
  Pb = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  xb = () => "输入的用户名与当前用户名不匹配。",
  Lb = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Mb = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Bb = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Hb = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Ub = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Fb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  jb = () => "Введённое имя пользователя не совпадает с текущим.",
  Gb = () => "Введене імʼя користувача не збігається з поточним.",
  Wb = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Vb = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? kb() : e === "pt" ? Pb() : e === "ch" ? xb() : e === "de" ? Lb() : e === "es" ? Mb() : e === "fr" ? Bb() : e === "it" ? Hb() : e === "jp" ? Ub() : e === "pl" ? Fb() : e === "ru" ? jb() : e === "uk" ? Gb() : Wb()
  },
  zb = () => "Unexpected server error. Try again later.",
  $b = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  qb = () => "服务器出现意外错误。请稍后再试。",
  Kb = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Xb = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Yb = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Jb = () => "Errore imprevisto del server. Riprova più tardi.",
  Qb = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Zb = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  e1 = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  t1 = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  n1 = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  m = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? zb() : e === "pt" ? $b() : e === "ch" ? qb() : e === "de" ? Kb() : e === "es" ? Xb() : e === "fr" ? Yb() : e === "it" ? Jb() : e === "jp" ? Qb() : e === "pl" ? Zb() : e === "ru" ? e1() : e === "uk" ? t1() : n1()
  },
  r1 = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  o1 = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  a1 = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  i1 = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  s1 = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  c1 = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  u1 = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  l1 = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  d1 = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  _1 = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  f1 = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  p1 = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  m1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? r1() : e === "pt" ? o1() : e === "ch" ? a1() : e === "de" ? i1() : e === "es" ? s1() : e === "fr" ? c1() : e === "it" ? u1() : e === "jp" ? l1() : e === "pl" ? d1() : e === "ru" ? _1() : e === "uk" ? f1() : p1()
  },
  h1 = () => "VPN or proxy detected. Please disable your VPN and try again.",
  g1 = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  y1 = () => "检测到VPN或代理。请关闭VPN后重试。",
  w1 = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  b1 = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  v1 = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  E1 = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  T1 = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  S1 = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  A1 = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  O1 = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  R1 = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  D1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? h1() : e === "pt" ? g1() : e === "ch" ? y1() : e === "de" ? w1() : e === "es" ? b1() : e === "fr" ? v1() : e === "it" ? E1() : e === "jp" ? T1() : e === "pl" ? S1() : e === "ru" ? A1() : e === "uk" ? O1() : R1()
  },
  I1 = () => "Failed to load WebAssembly module. Try to use another browser.",
  N1 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  C1 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  k1 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  P1 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  x1 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  L1 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  M1 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  B1 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  H1 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  U1 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  F1 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  j1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? I1() : e === "pt" ? N1() : e === "ch" ? C1() : e === "de" ? k1() : e === "es" ? P1() : e === "fr" ? x1() : e === "it" ? L1() : e === "jp" ? M1() : e === "pl" ? B1() : e === "ru" ? H1() : e === "uk" ? U1() : F1()
  },
  G1 = () => "You already have this item. Please refresh the page.",
  W1 = () => "Você já possui este item. Atualize a página.",
  V1 = () => "你已经拥有此物品。请刷新页面。",
  z1 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  $1 = () => "Ya tienes este ítem. Actualiza la página.",
  q1 = () => "Vous possédez déjà cet objet. Actualisez la page.",
  K1 = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  X1 = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Y1 = () => "Masz już ten przedmiot. Odśwież stronę.",
  J1 = () => "У вас уже есть этот предмет. Обновите страницу.",
  Q1 = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Z1 = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Ir = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? G1() : e === "pt" ? W1() : e === "ch" ? V1() : e === "de" ? z1() : e === "es" ? $1() : e === "fr" ? q1() : e === "it" ? K1() : e === "jp" ? X1() : e === "pl" ? Y1() : e === "ru" ? J1() : e === "uk" ? Q1() : Z1()
  },
  ev = () => "You are already in an alliance",
  tv = () => "Você já está em uma aliança",
  nv = () => "你已经在一个联盟中",
  rv = () => "Du bist bereits in einer Allianz",
  ov = () => "Ya estás en una alianza",
  av = () => "Vous êtes déjà dans une alliance",
  iv = () => "Sei già in un'alleanza",
  sv = () => "すでにアライアンスに所属しています。",
  cv = () => "Jesteś już w sojuszu",
  uv = () => "Вы уже состоите в альянсе",
  lv = () => "Ви вже перебуваєте в альянсі",
  dv = () => "Bạn đã ở trong một liên minh",
  _v = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ev() : e === "pt" ? tv() : e === "ch" ? nv() : e === "de" ? rv() : e === "es" ? ov() : e === "fr" ? av() : e === "it" ? iv() : e === "jp" ? sv() : e === "pl" ? cv() : e === "ru" ? uv() : e === "uk" ? lv() : dv()
  },
  fv = () => "You are not allowed to do this",
  pv = () => "Você não tem permissão para fazer isso",
  mv = () => "你无权执行此操作",
  hv = () => "Du bist dazu nicht berechtigt",
  gv = () => "No tienes permiso para hacer esto",
  yv = () => "Vous n’êtes pas autorisé à faire cela",
  wv = () => "Non hai il permesso di farlo",
  bv = () => "この操作を行う権限がありません。",
  vv = () => "Nie masz uprawnień, aby to zrobić",
  Ev = () => "У вас нет прав для этого действия",
  Tv = () => "Ви не маєте права це робити",
  Sv = () => "Bạn không có quyền làm việc này",
  Ye = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? fv() : e === "pt" ? pv() : e === "ch" ? mv() : e === "de" ? hv() : e === "es" ? gv() : e === "fr" ? yv() : e === "it" ? wv() : e === "jp" ? bv() : e === "pl" ? vv() : e === "ru" ? Ev() : e === "uk" ? Tv() : Sv()
  },
  Av = () => "You do not have enough Droplets to buy this item.",
  Ov = () => "Você não tem Droplets suficientes para comprar este item.",
  Rv = () => "你的 Droplets 不足，无法购买此物品。",
  Dv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Iv = () => "No tienes suficientes Droplets para comprar este ítem.",
  Nv = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Cv = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  kv = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Pv = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  xv = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Lv = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Mv = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Nr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Av() : e === "pt" ? Ov() : e === "ch" ? Rv() : e === "de" ? Dv() : e === "es" ? Iv() : e === "fr" ? Nv() : e === "it" ? Cv() : e === "jp" ? kv() : e === "pl" ? Pv() : e === "ru" ? xv() : e === "uk" ? Lv() : Mv()
  },
  Bv = () => "You need to be logged in to paint",
  Hv = () => "Você precisa estar conectado para pintar",
  Uv = () => "你需要登录才能进行绘制",
  Fv = () => "Du musst eingeloggt sein, um zu malen",
  jv = () => "Debes iniciar sesión para pintar",
  Gv = () => "Vous devez être connecté pour peindre",
  Wv = () => "Devi avere effettuato l'accesso per dipingere",
  Vv = () => "ペイントするにはログインが必要です。",
  zv = () => "Musisz być zalogowany, aby malować",
  $v = () => "Чтобы рисовать, нужно войти в аккаунт",
  qv = () => "Щоб малювати, необхідно увійти в акаунт",
  Kv = () => "Bạn cần đăng nhập để tô",
  Cr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Bv() : e === "pt" ? Hv() : e === "ch" ? Uv() : e === "de" ? Fv() : e === "es" ? jv() : e === "fr" ? Gv() : e === "it" ? Wv() : e === "jp" ? Vv() : e === "pl" ? zv() : e === "ru" ? $v() : e === "uk" ? qv() : Kv()
  },
  Xv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Yv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Jv = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Qv = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Zv = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  e0 = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  t0 = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  n0 = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  r0 = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  o0 = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  a0 = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  i0 = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  s0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Xv() : e === "pt" ? Yv() : e === "ch" ? Jv() : e === "de" ? Qv() : e === "es" ? Zv() : e === "fr" ? e0() : e === "it" ? t0() : e === "jp" ? n0() : e === "pl" ? r0() : e === "ru" ? o0() : e === "uk" ? a0() : i0()
  },
  c0 = t => `Your account has been suspended out until ${t.until}`,
  u0 = t => `A sua conta está suspensa até ${t.until}`,
  l0 = t => `你的账号已被暂停至 ${t.until}`,
  d0 = t => `Dein Konto ist gesperrt bis ${t.until}`,
  _0 = t => `Tu cuenta ha sido suspendida hasta ${t.until}`,
  f0 = t => `Votre compte est suspendu jusqu’au ${t.until}`,
  p0 = t => `Il tuo account è sospeso fino al ${t.until}`,
  m0 = t => `あなたのアカウントは${t.until}まで一時停止されています。`,
  h0 = t => `Twoje konto zostało zawieszone do ${t.until}`,
  g0 = t => `Ваш аккаунт заблокирован до ${t.until}`,
  y0 = t => `Ваш акаунт призупинено до ${t.until}`,
  w0 = t => `Tài khoản của bạn đã bị đình chỉ đến ${t.until}`,
  kr = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? c0(t) : e === "pt" ? u0(t) : e === "ch" ? l0(t) : e === "de" ? d0(t) : e === "es" ? _0(t) : e === "fr" ? f0(t) : e === "it" ? p0(t) : e === "jp" ? m0(t) : e === "pl" ? h0(t) : e === "ru" ? g0(t) : e === "uk" ? y0(t) : w0(t)
  },
  b0 = () => "A correction is already pending for this ticket.",
  v0 = () => "Já existe uma correção pendente para este ticket.",
  E0 = () => "此工单已存在待审核的更正请求。",
  T0 = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  S0 = () => "Ya hay una corrección pendiente para este ticket.",
  A0 = () => "Une correction est déjà en attente pour ce ticket.",
  O0 = () => "Una correzione è già in sospeso per questo ticket.",
  R0 = () => "このチケットには未処理の修正があります。",
  D0 = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  I0 = () => "Для этого тикета уже есть запрос на исправление.",
  N0 = () => "Для цього тікета вже є запит на перевірці.",
  C0 = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  k0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? b0() : e === "pt" ? v0() : e === "ch" ? E0() : e === "de" ? T0() : e === "es" ? S0() : e === "fr" ? A0() : e === "it" ? O0() : e === "jp" ? R0() : e === "pl" ? D0() : e === "ru" ? I0() : e === "uk" ? N0() : C0()
  },
  P0 = () => "You cannot review your own correction request.",
  x0 = () => "Você não pode revisar sua própria solicitação de correção.",
  L0 = () => "不能审核自己提交的更正请求。",
  M0 = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  B0 = () => "No puedes revisar tu propia solicitud de corrección.",
  H0 = () => "Tu ne peux pas examiner ta propre demande de correction.",
  U0 = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  F0 = () => "自分のリクエストはレビューできません。",
  j0 = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  G0 = () => "Нельзя рассматривать собственный запрос.",
  W0 = () => "Не можна перевіряти власний запит.",
  V0 = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  z0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? P0() : e === "pt" ? x0() : e === "ch" ? L0() : e === "de" ? M0() : e === "es" ? B0() : e === "fr" ? H0() : e === "it" ? U0() : e === "jp" ? F0() : e === "pl" ? j0() : e === "ru" ? G0() : e === "uk" ? W0() : V0()
  },
  $0 = () => "This correction has already been reviewed.",
  q0 = () => "Esta correção já foi revisada.",
  K0 = () => "此请求已被审核。",
  X0 = () => "Diese Korrektur wurde bereits geprüft.",
  Y0 = () => "Esta corrección ya ha sido revisada.",
  J0 = () => "Cette correction a déjà été examinée.",
  Q0 = () => "Questa correzione è già stata revisionata.",
  Z0 = () => "このリクエストはすでにレビュー済みです。",
  eE = () => "Ta prośba została już rozpatrzona.",
  tE = () => "Этот запрос уже рассмотрен.",
  nE = () => "Цей запит вже перевірено.",
  rE = () => "Yêu cầu này đã được duyệt.",
  oE = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? $0() : e === "pt" ? q0() : e === "ch" ? K0() : e === "de" ? X0() : e === "es" ? Y0() : e === "fr" ? J0() : e === "it" ? Q0() : e === "jp" ? Z0() : e === "pl" ? eE() : e === "ru" ? tE() : e === "uk" ? nE() : rE()
  },
  Ge = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function nT(t) {
  const n = Math.floor(t / Ge.hour);
  t -= n * Ge.hour;
  const e = Math.floor(t / Ge.minute);
  t -= e * Ge.minute;
  const o = Math.floor(t / Ge.second).toString().padStart(2, "0");
  return n > 0 ? `${n}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function rT(t) {
  const n = t.getFullYear(),
    e = String(t.getMonth() + 1).padStart(2, "0"),
    r = String(t.getDate()).padStart(2, "0"),
    o = String(t.getHours()).padStart(2, "0"),
    a = String(t.getMinutes()).padStart(2, "0"),
    i = String(t.getSeconds()).padStart(2, "0");
  return `${n}-${e}-${r} ${o}:${a}:${i}`
}
const oT = {
    griefing: df(),
    "multi-accounting": tg(),
    "hate-speech": Bf(),
    bot: Yc(),
    doxxing: pd(),
    "inappropriate-content": up(),
    other: Eu()
  },
  aT = {
    doxxing: Rd(),
    "hate-speech": Yf(),
    griefing: Sf(),
    "multi-accounting": pg(),
    bot: uu(),
    "inappropriate-content": Ep(),
    other: Lu()
  },
  iT = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Pr = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  sT = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  aE = 365 * Ge.day;

function _o(t) {
  if (!t) return null;
  const e = (t instanceof Date ? t : new Date(t)).getTime();
  return Number.isFinite(e) ? e : null
}

function cT(t, n = Date.now()) {
  const e = _o(t);
  return e === null ? !1 : e - n >= aE
}

function uT(t, n = Date.now()) {
  const e = _o(t);
  if (e === null || e <= n) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - n) / 6e4)),
    o = Math.floor(r / 1440),
    a = Math.floor(r % 1440 / 60),
    i = r % 60;
  return {
    days: o,
    hours: a,
    minutes: i
  }
}
const iE = [{
    tileSize: 1e3,
    zoom: 11
  }],
  sE = 4,
  cE = 6e3,
  uE = [{
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
  lE = {
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
  dE = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  _E = {
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
          incrementDroplets: "staff.dashboard.summary.users.increment_droplets"
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
  fE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  nt = {
    seasons: iE,
    regionSize: sE,
    refreshIntervalMs: cE,
    colors: uE,
    products: lE,
    countries: dE,
    permissions: _E,
    settings: fE
  },
  xn = nt,
  pE = nt.seasons,
  fo = nt.seasons.length - 1,
  lT = nt.seasons[fo].zoom,
  dT = nt.seasons[fo].tileSize,
  _T = nt.permissions,
  mE = nt.settings;

function fT(t) {
  return xn.countries[t - 1]
}
class b extends Error {
  constructor(n, e) {
    super(n), this.message = n, this.status = e
  }
}

function xr(t, n) {
  const e = {};
  for (const r of t) {
    const o = n(r);
    let a = e[o];
    a ? a.push(r) : e[o] = [r]
  }
  return e
}

function pT(t, n) {
  const e = {};
  for (const r of t) {
    const o = n(r);
    e[o] = r
  }
  return e
}
const hE = 30 * Ge.minute;
var Lt, Mt;
class gE {
  constructor(n) {
    Z(this, Lt, fe(!0));
    Z(this, Mt, fe(null));
    $(this, "lastHotspotRequestAt", 0);
    this.url = n
  }
  get online() {
    return re(B(this, Lt))
  }
  set online(n) {
    oe(B(this, Lt), n, !0)
  }
  get serverTimeOffsetMs() {
    return re(B(this, Mt))
  }
  set serverTimeOffsetMs(n) {
    oe(B(this, Mt), n, !0)
  }
  hasServerTimeEstimate() {
    return this.serverTimeOffsetMs !== null
  }
  getEstimatedServerNowMs() {
    const n = Date.now();
    return this.serverTimeOffsetMs === null ? n - 6e4 : n + this.serverTimeOffsetMs
  }
  clampWaybackTimestamp(n) {
    if (!Number.isFinite(n)) return 0;
    const e = Math.trunc(n);
    if (e <= 0) return 0;
    const r = Math.trunc(this.getEstimatedServerNowMs());
    return e > r ? r : e
  }
  updateServerTimeEstimate(n) {
    const e = n.headers.get("date");
    if (!e) return;
    const r = new Date(e).getTime();
    Number.isFinite(r) && (this.serverTimeOffsetMs = r - Date.now())
  }
  async paint(n) {
    const e = xr(n, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
      r = {
        season: n[0].season,
        tiles: Object.values(e).map(s => ({
          x: s[0].tile[0],
          y: s[0].tile[1],
          pixels: {
            x: s.map(c => c.pixel[0]),
            y: s.map(c => c.pixel[1]),
            colors: s.map(c => c.colorIdx)
          }
        }))
      },
      o = JSON.stringify(r),
      a = await ht.getHeaders(o),
      i = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: a,
        credentials: "include"
      });
    if (i.status !== l.OK) {
      if (i.status === l.UNAUTHORIZED) throw new Error(Cr());
      if (i.status === l.FORBIDDEN) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(Sr());
        const s = await i.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const c = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(kr({
            until: c.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(Rr());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(Or());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(Er());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await br(s.tier)) return this.paint(n);
            throw new Error(Sn())
          } else console.error("Challenge required but no tier provided", s);
        st.refresh()
      } else throw new Error(m())
    }
  }
  async selectAreaClear(n, e) {
    return this.sendPaintRequests(n, (r, o, a) => `/staff/tools/select-area/clear/s${r}/pixel/${o}/${a}`, e)
  }
  async createReverseSession(n) {
    const e = await this.request("/staff/tools/select-area/reverse/session", {
      method: "POST",
      body: n.buffer,
      headers: {
        "Content-Type": "application/octet-stream"
      },
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async getReverseTimestamps(n, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: o,
      beforeTimestamp: a
    } = e, i = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        beforeDepth: o,
        beforeTimestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== l.OK) throw new b(m(), i.status);
    return i.json()
  }
  async getReversePreview(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, i = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        snapshotDepth: o,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== l.OK) throw new b(m(), i.status);
    return i.json()
  }
  async getReverseTimelapse(n, e) {
    const r = await this.request("/staff/tools/select-area/reverse/timelapse", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
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
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "timelapse_too_many_events" ? new b(qw(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
    }
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, i = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        snapshotDepth: o,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== l.OK) throw new b(m(), i.status);
    return i.json()
  }
  async sendPaintRequests(n, e, r, o) {
    const a = xr(n, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
      s = (await Promise.all(Object.values(a).map(async c => {
        const [_, u] = c[0].tile, p = c[0].season, f = {
          colors: c.map(y => y.colorIdx),
          coords: c.flatMap(y => y.pixel),
          csid: r
        }, d = JSON.stringify(f), g = e(p, _, u), h = await ht.getHeaders(d);
        return this.request(g, {
          method: "POST",
          body: d,
          headers: h,
          credentials: "include"
        })
      }))).filter(c => c.status !== l.OK);
    if (s.length) {
      const c = s[0];
      if (c.status === l.UNAUTHORIZED) throw new Error(Cr());
      if (c.status === l.FORBIDDEN) {
        if (c.headers.get("cf-mitigated") === "challenge") throw new Error(Sr());
        const _ = await c.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const u = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(kr({
            until: u.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(Rr());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(Or());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(Er());
        st.refresh()
      } else throw new Error(m())
    }
  }
  async adminAutoPainterPaint(n, e, r) {
    const o = yE(n),
      a = await wE(o),
      i = new FormData;
    i.append("fingerprint", e), i.append("season", o.season.toString()), i.append("px0", o.offsetX.toString()), i.append("py0", o.offsetY.toString()), i.append("width", o.width.toString()), i.append("height", o.height.toString()), i.append("pixels", n.length.toString()), i.append("bitmap", a, "auto-painter.png"), i.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: i,
      credentials: "include"
    });
    if (s.status === l.FORBIDDEN) {
      const c = await s.json().catch(() => null);
      if (typeof(c == null ? void 0 : c.charges) == "number") throw new Error(Ay({
        charges: Math.floor(c.charges),
        pixels: n.length
      }));
      const _ = typeof(c == null ? void 0 : c.error) == "string" ? c.error.trim() : "";
      throw _ && _ !== "Forbidden" ? new Error(_) : new Error("Auto painter is restricted to administrators.")
    }
    if (s.status !== l.OK) throw new Error(m());
    return s.json()
  }
  async getPixelInfo({
    season: n,
    tile: [e, r],
    pixel: [o, a]
  }) {
    const i = new URLSearchParams;
    i.set("x", String(o)), i.set("y", String(a));
    const s = await this.request(`/s${n}/pixel/${e}/${r}?${i.toString()}`, {
      credentials: "include"
    });
    if (s.status !== l.OK) {
      const c = await s.text();
      throw new Error(A_({
        err: c
      }))
    }
    return s.json()
  }
  async getPixelAreaInfo({
    season: n,
    tile: [e, r],
    p0: [o, a],
    p1: [i, s]
  }) {
    const c = await this.request(`/staff/tools/select-area/s${n}/${e}/${r}?x0=${o}&y0=${a}&x1=${i}&y1=${s}`, {
      credentials: "include"
    });
    if (c.status !== l.OK) {
      const g = await c.text();
      throw console.error("Error while fetching pixel area info", g), new Error(m())
    }
    const _ = await c.arrayBuffer(),
      u = new DataView(_),
      p = Math.floor(_.byteLength / 5),
      f = new Uint32Array(p),
      d = new Uint8Array(p);
    for (let g = 0; g < p; g++) {
      const h = g * 5;
      f[g] = u.getUint32(h, !0), d[g] = u.getUint8(h + 4)
    }
    return {
      paintedBy: f,
      colors: d
    }
  }
  async me() {
    const n = await this.request("/me", {
      credentials: "include"
    });
    if (n.status === l.OK) return await n.json()
  }
  async meEmail() {
    const n = await this.request("/me/email", {
      credentials: "include"
    });
    if (n.status === l.OK) return (await n.json()).email
  }
  async logout() {
    const n = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new Error(await n.text());
    return await n.json()
  }
  async createEmbeddedCheckout(n) {
    const e = await this.request("/payment/create-checkout-session", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        lookup_key: n
      })
    });
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Qs());
    if (e.status !== l.OK) throw new Error(await e.text());
    return e.json()
  }
  async refreshDropletSession(n) {
    await this.request(`/payment/refresh-session/${n}`, {
      method: "POST",
      credentials: "include"
    })
  }
  async refreshFastspringSession(n) {
    const e = await this.request(`/payment/fastspring/refresh-session/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (!e.ok) throw new Error(`fastspring refresh failed: ${e.status}`);
    return await e.json()
  }
  async getLastFastspringOrder() {
    const n = await this.request("/payment/fastspring/orders/last", {
      credentials: "include"
    });
    if (n.status === l.NOT_FOUND) return null;
    if (!n.ok) throw new Error(`Failed to get last FastSpring order: ${n.status} ${n.statusText}`);
    return await n.json()
  }
  async markFastspringOrderAsRead(n) {
    const e = await this.request(`/payment/fastspring/orders/${n}/mark-as-read`, {
      method: "PATCH",
      credentials: "include"
    });
    if (!e.ok) throw new Error(`Failed to update FastSpring order: ${e.status} ${e.statusText}`)
  }
  async getOtpCooldown() {
    const n = await this.request("/anticheat/otp/cooldown", {
      credentials: "include"
    });
    if (n.status !== l.OK) throw new Error(m());
    return await n.json()
  }
  async sendOtp(n) {
    const e = await this.request("/anticheat/otp/send", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: n
      }),
      throwOnStatus: !1
    });
    if (e.status === l.BAD_REQUEST) throw new Error(zm());
    if (e.status === l.CONFLICT) throw new Error(Yy());
    if (e.status === l.FORBIDDEN) throw new Error(Zg());
    if (e.status === l.TOO_MANY_REQUESTS) throw new Error(Dr());
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(uw());
    if (e.status === l.LOCKED) throw new Error(m1());
    if (e.status === l.UNPROCESSABLE_ENTITY) throw new Error(oh());
    if (e.status === l.NOT_ACCEPTABLE) throw new Error(D1());
    if (e.status === l.PRECONDITION_FAILED) throw new Error(Wl());
    if (e.status !== l.OK) throw new Error(m());
    return await e.json()
  }
  async verifyChallenge(n) {
    let e;
    switch (n.type) {
      case "pow":
        e = {
          code: n.challengeId,
          nonce: n.nonce
        };
        break;
      case "captcha":
        e = {
          code: n.sessionId
        };
        break;
      case "otp":
        e = {
          code: n.code
        }
    }
    const r = await this.request("/anticheat/challenge/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e),
      headers: {
        "x-fp": await On()
      }
    });
    if (n.type === "otp") {
      if (r.status === l.GONE) throw new Error(J_());
      if (r.status === l.BAD_REQUEST) throw new Error(sm());
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(Dr());
      if (r.status !== l.OK) throw new Error(m())
    } else {
      if (r.status === l.BAD_REQUEST) throw new Error(Kp());
      if (r.status !== l.OK) throw new Error(m())
    }
  }
  async updateMe(n) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status === l.BAD_REQUEST) {
      const r = await e.json(),
        o = (r == null ? void 0 : r.error) ?? "";
      if (o === "invalid_name") throw new Error(Ar());
      if (o === "invalid_discord") throw new Error(bm());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const a = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(Rg({
          days: a
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== l.OK) throw new Error(m())
  }
  async deleteMe(n) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: n
      })
    });
    if (e.status === l.BAD_REQUEST) throw new Error(Vb());
    if (e.status !== l.OK) throw new Error(m())
  }
  async favoriteLocation(n) {
    const e = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: n[0],
        longitude: n[1]
      }),
      credentials: "include"
    });
    if (e.status === l.FORBIDDEN) throw new Error(_y());
    if (e.status !== l.OK) throw new Error(m())
  }
  async deleteFavoriteLocation(n) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: n
        }),
        credentials: "include"
      })).status !== l.OK) throw new Error(m())
  }
  async updateFavoriteLocation(n, e) {
    const r = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: n,
        name: e
      }),
      credentials: "include"
    });
    if (r.status === l.BAD_REQUEST) throw new Error(Gh());
    if (r.status !== l.OK) throw new Error(m())
  }
  async leaderboardPlayers(n) {
    const e = await this.request(`/leaderboard/player/${n}`);
    if (e.status !== l.OK) throw new Error(Xe());
    return e.json()
  }
  async leaderboardAlliances(n) {
    const e = await this.request(`/leaderboard/alliance/${n}`);
    if (e.status !== l.OK) throw new Error(Xe());
    return e.json()
  }
  async leaderboardRegions(n, e = 0) {
    const r = await this.request(`/leaderboard/region/${n}/${e}`);
    if (r.status === l.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardRegionPlayers(n, e) {
    const r = await this.request(`/leaderboard/region/players/${n}/${e}`);
    if (r.status === l.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardRegionAlliances(n, e) {
    const r = await this.request(`/leaderboard/region/alliances/${n}/${e}`);
    if (r.status === l.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardCountries(n) {
    const e = await this.request(`/leaderboard/country/${n}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw new Error(Xe())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < hE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
      credentials: "include",
      keepalive: !0,
      throwOnStatus: !1
    }).catch(() => {
      this.lastHotspotRequestAt = 0
    }))
  }
  async getMapHotspots() {
    const n = await this.request("/map/hotspots", {
      credentials: "include"
    });
    return n.status !== 200 ? [] : (this.lastHotspotRequestAt = Date.now(), n.json())
  }
  async getRandomTile(n) {
    const e = await this.request(`/s${n}/tile/random`);
    if (e.status !== l.OK) throw new Error(m());
    return e.json()
  }
  async purchase(n) {
    const e = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: n
      })
    });
    if (e.status !== l.OK) throw e.status === l.NOT_FOUND ? new Error(Tr()) : e.status === l.FORBIDDEN ? new Error(Nr()) : e.status === l.CONFLICT ? new Error(Ir()) : new Error(m())
  }
  async getAlliance() {
    const n = await this.request("/alliance", {
      credentials: "include"
    });
    if (n.status === l.OK) return n.json();
    if (n.status === l.NOT_FOUND) return;
    throw new Error(m())
  }
  async createAlliance(n) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: n
      })
    });
    if (e.status === l.OK) return e.json();
    if (e.status === l.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(Sc()) : r.error === "name_taken" ? new Error(dc()) : r.error == "empty_name" ? new Error(Bc()) : new Error(m())
    } else throw e.status === l.FORBIDDEN ? new Error(_v()) : new Error(m())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== l.OK) throw new Error(m())
  }
  async updateAllianceDescription(n) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: n
      })
    });
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : e.status === l.BAD_REQUEST ? new Error(H_()) : new Error(m())
  }
  async updateAllianceHeadquarters(n, e) {
    const r = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: n,
        longitude: e
      })
    });
    if (r.status !== l.OK) throw r.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async allianceLeaderboard(n) {
    const e = await this.request(`/alliance/leaderboard/${n}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw e.status === l.FORBIDDEN ? new Error(Ye()) : new Error(Xe())
  }
  async getAllianceInvites() {
    const n = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (n.status === l.OK) return n.json();
    throw n.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async joinAlliance(n) {
    switch ((await this.request(`/alliance/join/${n}`, {
        credentials: "include"
      })).status) {
      case l.OK:
        return "success";
      case l.ALREADY_REPORTED:
        return "in-another-alliance";
      case l.UNAUTHORIZED:
        return "not-logged-in";
      case l.FORBIDDEN:
        return "banned";
      case l.BAD_REQUEST:
      case l.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(n) {
    const e = await this.request(`/alliance/members/${n}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw new Error(m())
  }
  async getAllianceBannedMembers(n) {
    const e = await this.request(`/alliance/members/banned/${n}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw new Error(m())
  }
  async getAllianceById(n) {
    const e = await this.request(`/staff/dashboard/alliances/${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === l.NOT_FOUND) return;
    if (e.status !== l.OK) throw new b(m(), e.status);
    const r = await e.json();
    return {
      id: Number(r.id),
      name: String(r.name),
      pixelsPainted: Number((r == null ? void 0 : r.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(n) {
    const e = new URLSearchParams({
        q: n
      }),
      r = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== l.OK) throw new b(m(), r.status);
    const o = await r.json();
    return (Array.isArray(o) ? o : []).map(a => ({
      id: Number(a.id),
      name: String(a.name ?? ""),
      pixelsPainted: Number((a == null ? void 0 : a.pixels_painted) ?? 0)
    }))
  }
  async searchAlliances(n) {
    return this.searchAlliance(n)
  }
  async getAllianceFull(n) {
    const e = await this.request(`/staff/dashboard/alliances/${n}/full`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === l.NOT_FOUND) return null;
    if (e.status !== l.OK) throw new b(m(), e.status);
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
  async getAdminAllianceMembers(n, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      o = await this.request(`/staff/dashboard/alliances/${n}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (o.status === l.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (o.status !== l.OK) throw new b(m(), o.status);
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
  async renameAlliance(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json().catch(() => ({}));
      throw new Error((o == null ? void 0 : o.error) ?? m())
    } else if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async changeAllianceLeader(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json();
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(gh()) : new Error(m())
    } else if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async banAllAllianceMembers(n, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${n}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async setAllianceMemberRole(n, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${n}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async removeAllianceMember(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async giveAllianceAdmin(n) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async banAllianceUser(n) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async equipFlag(n) {
    if ((await this.request(`/flag/equip/${n}`, {
        method: "POST",
        credentials: "include"
      })).status !== l.OK) throw new Error(m())
  }
  async getMyProfilePictures() {
    const n = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (n.status !== l.OK) throw new Error(m());
    return n.json()
  }
  async changeProfilePicture(n) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: n
        })
      })).status !== l.OK) throw new Error(m())
  }
  async unbanAllianceUser(n) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getModeratorTickets() {
    const n = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    const e = await n.json();
    for (const r of e.tickets) r.reports.sort((o, a) => Pr[o.reason] - Pr[a.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const n = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const n = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    const {
      tickets: e
    } = await n.json();
    return e
  }
  async assignNewTickets() {
    const n = await this.request("/staff/tickets/assign", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async setTicketStatus(n, e, r, o) {
    const a = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: n,
        status: e,
        selectedReportId: r,
        assignedReason: o
      })
    });
    if (a.status !== l.OK && a.status !== l.BAD_REQUEST) throw new b(m(), a.status)
  }
  async getLastResolvedTicket() {
    const n = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return (await n.json()).ticket
  }
  async getTicketReversalTicketInfo(n) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(n) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status === l.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new b(k0(), l.CONFLICT) : new b(m(), l.CONFLICT)
    }
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async listTicketReversals(n = {}) {
    const e = new URLSearchParams;
    n.status && e.set("status", n.status), n.page != null && e.set("page", String(n.page)), n.pageSize != null && e.set("pageSize", String(n.pageSize));
    const r = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== l.OK) throw new b(m(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(n) {
    const e = await this.request(`/staff/tickets/reversals/${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return (await e.json()).reversal
  }
  async reviewTicketReversal(n, e, r) {
    const o = await this.request(`/staff/tickets/reversals/${n}/review`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        decision: e,
        notes: r
      })
    });
    if (o.status === l.FORBIDDEN) throw new b(z0(), l.FORBIDDEN);
    if (o.status === l.CONFLICT) throw new b(oE(), l.CONFLICT);
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async request(n, e) {
    var i;
    let r;
    e = {
      credentials: "include",
      ...e
    };
    try {
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (s) {
      throw console.error("Fetch error:", s), this.online = !1, new Error(il(), {
        cause: s
      })
    }
    if (r.status === l.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Cb());
    const o = ((i = r.headers.get("cf-mitigated")) == null ? void 0 : i.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (ht.setCfLikelyAutomated(!0), !await uo()) throw new Error(Sn());
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(s0());
      if (r.status === l.REQUEST_TIMEOUT) throw new Error(xw());
      if (r.status === l.SERVICE_UNAVAILABLE) throw new Error(ib())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const n = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async getOpenReportsSummary() {
    const n = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async getBanAppealStats(n, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    const o = await r.json();
    return {
      items: o.items ?? [],
      globals: o.globals
    }
  }
  async getClosedTicketsByMod(n, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return (await r.json()).items.map(a => ({
      ...a,
      suspensionRate: (a.ban + a.timeout) / a.total
    }))
  }
  async getClosedReportsByMod(n, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return (await r.json()).items.map(a => ({
      ...a,
      suspensionRate: (a.ban + a.timeout) / a.total
    }))
  }
  async getMultipleUsersInfoById(n) {
    const e = await this.request("/staff/tools/select-area/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n
      })
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async getUserInfoFull(n) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.NOT_FOUND) {
      if (e.status !== l.OK) throw new b(m(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(n) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.NOT_FOUND) {
      if (e.status !== l.OK) throw new b(m(), e.status);
      return e.json()
    }
  }
  async removePunishment(n, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      o = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: n
        })
      });
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async getUserNotes(n, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(n)}` : `/staff/appeals/notes?userId=${encodeURIComponent(n)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== l.OK) throw new b(m(), o.status);
    return o.json()
  }
  async addUserNote(n, e, r) {
    const o = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(n)}` : `/staff/appeals/notes?userId=${encodeURIComponent(n)}`,
      a = await this.request(o, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: n,
          note: e
        })
      });
    if (a.status !== l.OK) throw new b(m(), a.status)
  }
  async getUserPermissions(n) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async setUserPermissions(n, e) {
    const r = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        permissions: Array.from(e)
      })
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(n) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(a => {
      const i = a.is_dollar ?? a.isDollar ?? a.currency ?? a.Currency ?? 0;
      let s;
      if (typeof i == "string") {
        const p = i.toLowerCase();
        s = p === "usd" || p === "dollar" || p === "true"
      } else typeof i == "number" ? s = i !== 0 : s = !!i;
      const c = typeof a.createdAt == "string" ? a.createdAt : a.CreatedAt ? new Date(a.CreatedAt).toISOString() : "",
        _ = a.product_variant ?? a.productVariant,
        u = _ == null || _ === "" ? null : Number(_);
      return {
        product_name: String(a.productName ?? a.product_name ?? ""),
        amount: Number(a.amount ?? 0),
        price: Number(a.price ?? 0),
        is_dollar: s,
        created_at: c,
        product_variant: Number.isInteger(u) ? u : null
      }
    })
  }
  async postSetUserDroplets(n, e) {
    const r = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        droplets: e
      })
    });
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async postAdminRenameUser(n, e, r) {
    const o = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        newName: e,
        oldName: r
      })
    });
    if (o.status === l.BAD_REQUEST) {
      const a = await o.json(),
        i = (a == null ? void 0 : a.error) ?? "";
      throw i === "invalid_name" ? new b(Ar(), l.BAD_REQUEST) : new b(typeof i == "string" && i ? i : m(), l.BAD_REQUEST)
    }
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async postAdminChangeUserEmail(n, e) {
    const r = await this.request("/staff/dashboard/users/email", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        email: e
      })
    });
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "email_required" || a === "invalid_email" ? new b(__(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
    }
    if (r.status === l.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const i = new b(typeof(o == null ? void 0 : o.userId) == "number" ? Zd({
          userId: o.userId
        }) : Fd(), l.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (i.userId = o.userId), i
      }
      throw new b(m(), l.CONFLICT)
    }
    if (r.status === l.NOT_FOUND) throw new b("User not found.", l.NOT_FOUND);
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async getAdminUserProfilePictures(n) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${n}`, {
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async postAdminRemoveUserPicture(n) {
    const e = await this.request("/staff/dashboard/users/remove-picture", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pictureId: n
      })
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getUserTickets(n, e) {
    if (e === "appeals" && (n.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(n.userId)), r.set("kind", String(n.kind)), r.set("page", String(n.page ?? 0)), r.set("pageSize", String(n.pageSize ?? 20)), n.sortBy && r.set("sortBy", n.sortBy), n.sortDir && r.set("sortDir", n.sortDir), n.status && r.set("status", n.status), e === "appeals" && r.set("appealId", String(n.appealId));
    const o = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      a = await this.request(o, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== l.OK) throw new b(m(), a.status);
    const i = await a.json();
    return Array.isArray(i == null ? void 0 : i.tickets) ? i.tickets : []
  }
  async getUserAppeals(n) {
    const e = new URLSearchParams;
    e.set("userId", String(n.userId)), e.set("kind", n.kind), n.page !== void 0 && e.set("page", String(n.page)), n.pageSize !== void 0 && e.set("pageSize", String(n.pageSize)), n.sortBy && e.set("sortBy", n.sortBy), n.sortDir && e.set("sortDir", n.sortDir);
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.appeals) ? o.appeals : []
  }
  async getModerationTranslate(n, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      o = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: n
        })
      });
    if (o.status !== l.OK) throw new b(m(), o.status);
    const a = await o.json();
    return a == null ? void 0 : a.translation
  }
  mapTicketsToReportRows(n, e) {
    var o, a, i, s, c;
    const r = [];
    for (const _ of n) {
      const u = _.status ?? "open";
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
          status: u
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
          status: u
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
        reason: String(((c = (s = _.reports) == null ? void 0 : s[0]) == null ? void 0 : c.reason) ?? "other"),
        status: u
      })
    }
    return r.sort((_, u) => new Date(u.createdAt).getTime() - new Date(_.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(n) {
    const e = new URLSearchParams({
        id: String(n)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const n = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== l.NO_CONTENT) throw new b(m(), n.status)
  }
  async deleteSessions() {
    const n = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status)
  }
  async deleteAllUserSessions(n) {
    const e = await this.request(`/staff/dashboard/users/${n}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async banUsers(n, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        reason: e,
        notes: r
      })
    });
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async timeoutUsers(n, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        reason: e,
        notes: r
      })
    });
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async incrementUsersDroplets(n, e, r) {
    const o = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        delta: e,
        notes: r
      })
    });
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async postUnbanUsers(n, e) {
    const r = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        notes: e
      })
    });
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async getAuditLogs(n) {
    const e = new URLSearchParams;
    n.actorUserId !== void 0 && e.set("actorUserId", String(n.actorUserId)), n.targetUserId !== void 0 && e.set("targetUserId", String(n.targetUserId)), n.action && e.set("action", n.action), n.sortKey && e.set("sortKey", n.sortKey), n.sortDir && e.set("sortDir", n.sortDir), e.set("limit", String(n.limit)), e.set("offset", String(n.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async postUsersSuspend(n, e, r) {
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
        body: JSON.stringify(n)
      })).status !== l.OK) throw new Error(m())
  }
  async postSelectAreaPhoneVerification(n, e = "") {
    const r = await this.request("/staff/tools/select-area/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        notes: e
      })
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return await r.json()
  }
  async postDashboardUserPhoneVerification(n, e = "") {
    const r = await this.request("/staff/dashboard/users/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: [n],
        notes: e
      })
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return await r.json()
  }
  async postReportUserName(n) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n
      })
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async postReportAllianceName(n) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: n
      })
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async submitBanAppeal(n) {
    const e = JSON.stringify({
        message: n
      }),
      r = await ht.getHeaders(e),
      o = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (o.status === l.FORBIDDEN) {
      const a = await o.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await br(a.tier)) return this.submitBanAppeal(n);
        throw new b(Sn(), o.status)
      }
    }
    if (o.status !== l.OK && o.status !== l.ALREADY_REPORTED) throw new b(m(), o.status);
    return o.status
  }
  async getOpenAppeals() {
    const n = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async postSolveAppeal(n, e) {
    const r = await this.request(`/staff/appeals/${n}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const n = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const n = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    const e = await n.json();
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
    const n = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return await n.json()
  }
  async getNotificationCount() {
    const n = await this.request("/notification/count", {
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    const {
      count: e
    } = await n.json();
    return e
  }
  async getNotificationPage(n) {
    const r = `/notification/page${n!==void 0?`?cursor=${encodeURIComponent(n)}`:""}`,
      o = await this.request(r, {
        credentials: "include"
      });
    if (o.status !== l.OK) throw new b(m(), o.status);
    return o.json()
  }
  async postNotificationMarkRead(n) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: n
      })
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const n = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async getAnticheatStats(n, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${n}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async getAnticheatSignals(n, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${n}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(n, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${n}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== l.OK) throw new b(m(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const n = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const n = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const n = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async postEquipUserFrame(n) {
    const e = await this.request(`/me/frames/equip/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getUserBadges() {
    const n = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async postEquipUserBadge(n) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async postCaptchaSession(n, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(n),
      headers: {
        "x-fp": await On()
      }
    });
    if (!r.ok) throw r.status === 500 ? new b(m(), r.status) : new b(Lp(), r.status);
    return r.json()
  }
  validWaybackInput(n) {
    const e = Number.isFinite(n.timestamp) && Number.isInteger(n.timestamp) && n.timestamp >= 0 && n.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(n.season) && Number.isInteger(n.season) && n.season >= 0 && n.season < pE.length,
      o = Number.isFinite(n.limit) && Number.isInteger(n.limit) && n.limit > 0 && n.limit <= mE.tools.wayback.limit,
      a = Number.isFinite(n.tileX) && Number.isFinite(n.tileY) && Number.isInteger(n.tileX) && Number.isInteger(n.tileY) && n.tileX >= 0 && n.tileY >= 0,
      i = n.cursorTs !== void 0,
      s = n.cursorUserId !== void 0,
      c = n.cursorAllianceId !== void 0,
      _ = n.cursorPixelsCount !== void 0,
      u = i || s || c || _,
      p = i && s && c && _;
    let f = !0;
    return u && (f = p && Number.isFinite(n.cursorTs) && Number.isInteger(n.cursorTs) && n.cursorTs >= 0 && n.cursorTs <= n.timestamp && Number.isFinite(n.cursorUserId) && Number.isInteger(n.cursorUserId) && n.cursorUserId >= 0 && Number.isFinite(n.cursorAllianceId) && Number.isInteger(n.cursorAllianceId) && n.cursorAllianceId >= 0 && Number.isFinite(n.cursorPixelsCount) && Number.isInteger(n.cursorPixelsCount) && n.cursorPixelsCount >= 0), !(!r || !o || !a || !e || !f)
  }
  getSafeWaybackInput(n) {
    return n.season = Math.trunc(n.season), n.limit = Math.trunc(n.limit), n.timestamp = Math.trunc(n.timestamp), n.tileX = Math.trunc(n.tileX), n.tileY = Math.trunc(n.tileY), n.cursorTs !== void 0 && (n.cursorTs = Math.trunc(n.cursorTs)), n.cursorUserId !== void 0 && (n.cursorUserId = Math.trunc(n.cursorUserId)), n.cursorAllianceId !== void 0 && (n.cursorAllianceId = Math.trunc(n.cursorAllianceId)), n.cursorPixelsCount !== void 0 && (n.cursorPixelsCount = Math.trunc(n.cursorPixelsCount)), n
  }
  async getWaybackEvents(n) {
    if (!this.validWaybackInput(n)) throw new Error("Invalid query params");
    n = this.getSafeWaybackInput(n);
    const e = new URLSearchParams;
    n.cursorTs !== void 0 && e.set("cursorTs", String(n.cursorTs)), n.cursorUserId !== void 0 && e.set("cursorUserId", String(n.cursorUserId)), n.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(n.cursorAllianceId)), n.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(n.cursorPixelsCount));
    const r = `/staff/tools/wayback/s${n.season}/l${n.limit}/x${n.tileX}/y${n.tileY}/t${n.timestamp}`,
      o = e.toString(),
      a = await this.request(o.length > 0 ? `${r}?${o}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === l.FORBIDDEN) throw new Error("Access denied");
    if (a.status !== l.OK) throw new Error("Failed to fetch wayback events");
    return a.json()
  }
  async getStoreFrames() {
    const n = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return n.json()
  }
  async postBuyUserFrame(n) {
    const e = await this.request(`/store/frames/buy/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === l.NOT_FOUND) throw new Error(Tr());
    if (e.status === l.FORBIDDEN) throw new Error(Nr());
    if (e.status === l.CONFLICT) throw new Error(Ir());
    if (e.status !== l.OK) throw new Error(m())
  }
  async postEquipCosmetics(n) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getStoreNameCosmetics() {
    const n = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return await n.json()
  }
  async postBuyCosmetic(n) {
    const e = await this.request(`/store/name/buy/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getMyNameCosmetics() {
    const n = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== l.OK) throw new b(m(), n.status);
    return await n.json()
  }
  async getTicketsKpi(n) {
    const e = new URLSearchParams;
    e.set("start", n.startIso), e.set("end", n.endIso), n.compare && e.set("compare", "1"), n.userId != null && e.set("userId", String(n.userId)), n.allianceId != null && e.set("allianceId", String(n.allianceId)), n.reason != null && e.set("reason", n.reason), n.punishment != null && e.set("punishment", n.punishment), n.granularity != null && e.set("granularity", n.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async postCreateFrame(n) {
    const e = new FormData;
    e.append("name", n.name), e.append("image", n.image), e.append("description", n.description), e.append("value", n.value.toString()), e.append("rarity", n.rarity), e.append("purchasable", n.purchasable.toString());
    const r = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async postCreateFont(n) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async postCreateStyle(n) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getR2Images(n) {
    const e = new URLSearchParams({
        page: String(n.page),
        pageSize: String(n.pageSize)
      }),
      r = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async postUploadR2Image(n) {
    const e = new FormData;
    n.name && e.append("name", n.name), e.append("image", n.image);
    const r = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async deleteR2Image(n) {
    const e = await this.request(`/staff/store-manager/images/${n}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === l.OK
  }
}
Lt = new WeakMap, Mt = new WeakMap;

function yE(t) {
  var f, d;
  if (!t.length) throw new Error("Auto painter request does not contain any pixels.");
  const n = t[0].season;
  for (const g of t)
    if (g.season !== n) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = xn.seasons) == null ? void 0 : f[n];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let o = Number.POSITIVE_INFINITY,
    a = Number.POSITIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const c = t.map(g => {
      const h = Math.round(g.tile[0] * r + g.pixel[0]),
        y = Math.round(g.tile[1] * r + g.pixel[1]);
      return h < o && (o = h), y < a && (a = y), h > i && (i = h), y > s && (s = y), {
        x: h,
        y,
        colorIdx: g.colorIdx
      }
    }),
    _ = i - o + 1,
    u = s - a + 1;
  if (!Number.isFinite(_) || !Number.isFinite(u) || _ <= 0 || u <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const p = new Uint8ClampedArray(_ * u * 4);
  for (const {
      x: g,
      y: h,
      colorIdx: y
    }
    of c) {
    const C = (d = xn.colors) == null ? void 0 : d[y];
    if (!C) throw new Error(`Unknown palette color index: ${y}`);
    const T = g - o,
      S = ((h - a) * _ + T) * 4,
      [N, A, w] = C.rgb;
    p[S] = N, p[S + 1] = A, p[S + 2] = w, p[S + 3] = y === 0 ? 1 : 255
  }
  return {
    data: p,
    width: _,
    height: u,
    offsetX: o,
    offsetY: a,
    season: n
  }
}
async function wE(t) {
  const n = bE(t.width, t.height),
    e = n.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(t.width, t.height);
  return r.data.set(t.data), e.putImageData(r, 0, 0), "convertToBlob" in n ? n.convertToBlob({
    type: "image/png"
  }) : new Promise((o, a) => {
    n.toBlob(i => {
      if (!i) {
        a(new Error("Failed to encode auto painter bitmap."));
        return
      }
      o(i)
    }, "image/png")
  })
}

function bE(t, n) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(t, n);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = t, e.height = n, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let Ve = new gE(Bn);
typeof window < "u" && Eo(() => {
  let t = Ve.online;
  To(() => {
    const n = Ve.online;
    n && !t && window.dispatchEvent(new CustomEvent("wplace:online")), t = n
  })
});
const mT = t => new URL(t, Bn).toString();

function po(t, n) {
  if (!(t != null && t.length)) return !1;
  for (const e of t)
    if (e === n) return !0;
  return !1
}

function vE(t, n) {
  for (const e of n)
    if (po(t, e)) return !0;
  return !1
}

function hT(...t) {
  return t.filter(Boolean).join(" ")
}
const EE = typeof document < "u";
let Lr = 0;
var Bt, Ht, Ut;
class TE {
  constructor() {
    Z(this, Bt, fe(an([])));
    Z(this, Ht, fe(an([])));
    Z(this, Ut, n => {
      const e = this.toasts.findIndex(r => r.id === n);
      return e === -1 ? null : e
    });
    $(this, "addToast", n => {
      EE && this.toasts.unshift(n)
    });
    $(this, "updateToast", ({
      id: n,
      data: e,
      type: r,
      message: o
    }) => {
      const a = this.toasts.findIndex(s => s.id === n),
        i = this.toasts[a];
      this.toasts[a] = {
        ...i,
        ...e,
        id: n,
        title: o,
        type: r,
        updated: !0
      }
    });
    $(this, "create", n => {
      var s;
      const {
        message: e,
        ...r
      } = n, o = typeof(n == null ? void 0 : n.id) == "number" || n.id && ((s = n.id) == null ? void 0 : s.length) > 0 ? n.id : Lr++, a = n.dismissable === void 0 ? !0 : n.dismissable, i = n.type === void 0 ? "default" : n.type;
      return Zn(() => {
        this.toasts.find(_ => _.id === o) ? this.updateToast({
          id: o,
          data: n,
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
    $(this, "dismiss", n => (Zn(() => {
      if (n === void 0) {
        this.toasts = this.toasts.map(r => ({
          ...r,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(r => r.id === n);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), n));
    $(this, "remove", n => {
      if (n === void 0) {
        this.toasts = [];
        return
      }
      const e = B(this, Ut).call(this, n);
      if (e !== null) return this.toasts.splice(e, 1), n
    });
    $(this, "message", (n, e) => this.create({
      ...e,
      type: "default",
      message: n
    }));
    $(this, "error", (n, e) => this.create({
      ...e,
      type: "error",
      message: n
    }));
    $(this, "success", (n, e) => this.create({
      ...e,
      type: "success",
      message: n
    }));
    $(this, "info", (n, e) => this.create({
      ...e,
      type: "info",
      message: n
    }));
    $(this, "warning", (n, e) => this.create({
      ...e,
      type: "warning",
      message: n
    }));
    $(this, "loading", (n, e) => this.create({
      ...e,
      type: "loading",
      message: n
    }));
    $(this, "promise", (n, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: n,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const o = n instanceof Promise ? n : n();
      let a = r !== void 0;
      return o.then(i => {
        if (typeof i == "object" && i && "ok" in i && typeof i.ok == "boolean" && !i.ok) {
          a = !1;
          const s = SE(i);
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
    $(this, "custom", (n, e) => {
      const r = (e == null ? void 0 : e.id) || Lr++;
      return this.create({
        component: n,
        id: r,
        ...e
      }), r
    });
    $(this, "removeHeight", n => {
      this.heights = this.heights.filter(e => e.toastId !== n)
    });
    $(this, "setHeight", n => {
      const e = B(this, Ut).call(this, n.toastId);
      if (e === null) {
        this.heights.push(n);
        return
      }
      this.heights[e] = n
    });
    $(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return re(B(this, Bt))
  }
  set toasts(n) {
    oe(B(this, Bt), n, !0)
  }
  get heights() {
    return re(B(this, Ht))
  }
  set heights(n) {
    oe(B(this, Ht), n, !0)
  }
}
Bt = new WeakMap, Ht = new WeakMap, Ut = new WeakMap;

function SE(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const De = new TE;

function AE(t, n) {
  return De.create({
    message: t,
    ...n
  })
}
var _n;
class gT {
  constructor() {
    Z(this, _n, pt(() => De.toasts.filter(n => !n.dismiss)))
  }
  get toasts() {
    return re(B(this, _n))
  }
}
_n = new WeakMap;
const OE = AE,
  RE = Object.assign(OE, {
    success: De.success,
    info: De.info,
    warning: De.warning,
    error: De.error,
    custom: De.custom,
    message: De.message,
    promise: De.promise,
    dismiss: De.dismiss,
    loading: De.loading,
    getActiveToasts: () => De.toasts.filter(t => !t.dismiss)
  });
var Ft, jt, Gt, Wt, Vt, zt, $t, qt;
class DE {
  constructor() {
    $(this, "channel", new BroadcastChannel("user-channel"));
    Z(this, Ft, fe());
    Z(this, jt, fe(!0));
    Z(this, Gt, fe());
    Z(this, Wt, fe(Date.now()));
    Z(this, Vt, pt(() => {
      if (!this.data) return;
      const n = this.data.charges;
      if (n.count > n.max) return n.count;
      const e = n.count + Math.max((so.now - this.lastFetch) / n.cooldownMs, 0);
      return Math.min(n.max, e)
    }));
    Z(this, zt, pt(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    Z(this, $t, pt(() => {
      var n;
      return new Za(Gr(((n = this.data) == null ? void 0 : n.flagsBitmap) ?? "AA=="))
    }));
    Z(this, qt, pt(() => {
      var e;
      if (!((e = this.data) != null && e.timeoutUntil)) return;
      const n = new Date(this.data.timeoutUntil);
      if (!(n.getTime() < Date.now())) return n
    }));
    this.channel && (this.channel.onmessage = n => {
      const e = JSON.parse(n.data);
      e.type === "refresh" ? (this.data = e.data, this.lastFetch = Date.now()) : e.type === "logout" && (this.data = void 0)
    })
  }
  get data() {
    return re(B(this, Ft))
  }
  set data(n) {
    oe(B(this, Ft), n, !0)
  }
  get loading() {
    return re(B(this, jt))
  }
  set loading(n) {
    oe(B(this, jt), n, !0)
  }
  get notificationCount() {
    return re(B(this, Gt))
  }
  set notificationCount(n) {
    oe(B(this, Gt), n, !0)
  }
  get lastFetch() {
    return re(B(this, Wt))
  }
  set lastFetch(n) {
    oe(B(this, Wt), n)
  }
  get charges() {
    return re(B(this, Vt))
  }
  set charges(n) {
    oe(B(this, Vt), n)
  }
  get cooldown() {
    return re(B(this, zt))
  }
  set cooldown(n) {
    oe(B(this, zt), n)
  }
  get flagsBitmap() {
    return re(B(this, $t))
  }
  set flagsBitmap(n) {
    oe(B(this, $t), n)
  }
  get timeoutUntil() {
    return re(B(this, qt))
  }
  set timeoutUntil(n) {
    oe(B(this, qt), n)
  }
  async refresh() {
    var n, e;
    try {
      return this.loading = !0, this.data = await Ve.me(), this.lastFetch = Date.now(), (n = this.channel) == null || n.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && Ve.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (Zo("userId", {
        id: this.data.id
      }), ht.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), RE.warning(Fg(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var n;
    await Ve.logout(), (n = this.channel) == null || n.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(n) {
    var r;
    return n < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << n - 32) !== 0
  }
  hasPermission(n) {
    var e;
    return po((e = this.data) == null ? void 0 : e.permissions, n)
  }
  hasAnyPermission(n) {
    var e;
    return vE((e = this.data) == null ? void 0 : e.permissions, n)
  }
}
Ft = new WeakMap, jt = new WeakMap, Gt = new WeakMap, Wt = new WeakMap, Vt = new WeakMap, zt = new WeakMap, $t = new WeakMap, qt = new WeakMap;
const st = new DE;
let K;
const Me = new Array(128).fill(void 0);
Me.push(void 0, null, !0, !1);

function G(t) {
  return Me[t]
}
let bt = Me.length;

function te(t) {
  bt === Me.length && Me.push(Me.length + 1);
  const n = bt;
  return bt = Me[n], Me[n] = t, n
}

function Ue(t, n) {
  try {
    return t.apply(this, n)
  } catch (e) {
    K.__wbindgen_export_0(te(e))
  }
}

function Je(t) {
  return t == null
}
const mo = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && mo.decode();
let mt = null;

function nn() {
  return (mt === null || mt.byteLength === 0) && (mt = new Uint8Array(K.memory.buffer)), mt
}

function rn(t, n) {
  return t = t >>> 0, mo.decode(nn().subarray(t, t + n))
}

function IE(t) {
  t < 132 || (Me[t] = bt, bt = t)
}

function Mr(t) {
  const n = G(t);
  return IE(t), n
}
let Qe = null;

function ln() {
  return (Qe === null || Qe.buffer.detached === !0 || Qe.buffer.detached === void 0 && Qe.buffer !== K.memory.buffer) && (Qe = new DataView(K.memory.buffer)), Qe
}
let tt = 0;
const on = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  NE = typeof on.encodeInto == "function" ? function(t, n) {
    return on.encodeInto(t, n)
  } : function(t, n) {
    const e = on.encode(t);
    return n.set(e), {
      read: t.length,
      written: e.length
    }
  };

function Kt(t, n, e) {
  if (e === void 0) {
    const s = on.encode(t),
      c = n(s.length, 1) >>> 0;
    return nn().subarray(c, c + s.length).set(s), tt = s.length, c
  }
  let r = t.length,
    o = n(r, 1) >>> 0;
  const a = nn();
  let i = 0;
  for (; i < r; i++) {
    const s = t.charCodeAt(i);
    if (s > 127) break;
    a[o + i] = s
  }
  if (i !== r) {
    i !== 0 && (t = t.slice(i)), o = e(o, r, r = i + t.length * 3, 1) >>> 0;
    const s = nn().subarray(o + i, o + r),
      c = NE(t, s);
    i += c.written, o = e(o, r, i, 1) >>> 0
  }
  return tt = i, o
}

function CE(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_fingerprint_v2(n, e)
}

function kE(t) {
  let n, e;
  try {
    const a = K.__wbindgen_add_to_stack_pointer(-16),
      i = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
      s = tt;
    K.get_pawtected_endpoint_payload(a, i, s);
    var r = ln().getInt32(a + 0, !0),
      o = ln().getInt32(a + 4, !0);
    return n = r, e = o, rn(r, o)
  } finally {
    K.__wbindgen_add_to_stack_pointer(16), K.__wbindgen_export_3(n, e, 1)
  }
}

function PE(t) {
  K.set_automated_browser(t)
}

function An(t) {
  K.set_user_id(t)
}

function xE(t) {
  K.set_automated_clicks(t)
}

function LE(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_detected_bot(n, e)
}

function ME(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.request_url(n, e)
}

function BE(t) {
  K.set_cf_likely_automated(t)
}

function HE(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_fingerprint(n, e)
}
async function UE(t, n) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, n)
    } catch (r) {
      if (t.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
    }
    const e = await t.arrayBuffer();
    return await WebAssembly.instantiate(e, n)
  } else {
    const e = await WebAssembly.instantiate(t, n);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: t
    } : e
  }
}

function FE() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_buffer_609cc3eee51ed158 = function(n) {
    const e = G(n).buffer;
    return te(e)
  }, t.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return Ue(function(n, e) {
      const r = G(n).call(G(e));
      return te(r)
    }, arguments)
  }, t.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return Ue(function(n, e, r) {
      const o = G(n).call(G(e), G(r));
      return te(o)
    }, arguments)
  }, t.wbg.__wbg_crypto_574e78ad8b13b65f = function(n) {
    const e = G(n).crypto;
    return te(e)
  }, t.wbg.__wbg_document_d249400bd7bd996d = function(n) {
    const e = G(n).document;
    return Je(e) ? 0 : te(e)
  }, t.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return Ue(function(n, e) {
      G(n).getRandomValues(G(e))
    }, arguments)
  }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return Ue(function(n, e) {
      const r = Reflect.get(G(n), G(e));
      return te(r)
    }, arguments)
  }, t.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return Ue(function(n) {
      return G(n).hasFocus()
    }, arguments)
  }, t.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return Ue(function(n) {
      const e = G(n).innerWidth;
      return te(e)
    }, arguments)
  }, t.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(n) {
    let e;
    try {
      e = G(n) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, t.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(n) {
    const e = G(n).msCrypto;
    return te(e)
  }, t.wbg.__wbg_navigator_1577371c070c8947 = function(n) {
    const e = G(n).navigator;
    return te(e)
  }, t.wbg.__wbg_new_a12002a7f91c75be = function(n) {
    const e = new Uint8Array(G(n));
    return te(e)
  }, t.wbg.__wbg_newnoargs_105ed471475aaf50 = function(n, e) {
    const r = new Function(rn(n, e));
    return te(r)
  }, t.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(n, e, r) {
    const o = new Uint8Array(G(n), e >>> 0, r >>> 0);
    return te(o)
  }, t.wbg.__wbg_newwithlength_a381634e90c276d4 = function(n) {
    const e = new Uint8Array(n >>> 0);
    return te(e)
  }, t.wbg.__wbg_node_905d3e251edff8a2 = function(n) {
    const e = G(n).node;
    return te(e)
  }, t.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, t.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(n) {
    const e = G(n).process;
    return te(e)
  }, t.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return Ue(function(n, e) {
      G(n).randomFillSync(Mr(e))
    }, arguments)
  }, t.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return Ue(function() {
      const n = module.require;
      return te(n)
    }, arguments)
  }, t.wbg.__wbg_set_65595bdd868b3009 = function(n, e, r) {
    G(n).set(G(e), r >>> 0)
  }, t.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const n = typeof global > "u" ? null : global;
    return Je(n) ? 0 : te(n)
  }, t.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const n = typeof globalThis > "u" ? null : globalThis;
    return Je(n) ? 0 : te(n)
  }, t.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const n = typeof self > "u" ? null : self;
    return Je(n) ? 0 : te(n)
  }, t.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const n = typeof window > "u" ? null : window;
    return Je(n) ? 0 : te(n)
  }, t.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(n, e, r) {
    const o = G(n).subarray(e >>> 0, r >>> 0);
    return te(o)
  }, t.wbg.__wbg_versions_c01dfd4722a88165 = function(n) {
    const e = G(n).versions;
    return te(e)
  }, t.wbg.__wbindgen_boolean_get = function(n) {
    const e = G(n);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, t.wbg.__wbindgen_is_function = function(n) {
    return typeof G(n) == "function"
  }, t.wbg.__wbindgen_is_null = function(n) {
    return G(n) === null
  }, t.wbg.__wbindgen_is_object = function(n) {
    const e = G(n);
    return typeof e == "object" && e !== null
  }, t.wbg.__wbindgen_is_string = function(n) {
    return typeof G(n) == "string"
  }, t.wbg.__wbindgen_is_undefined = function(n) {
    return G(n) === void 0
  }, t.wbg.__wbindgen_memory = function() {
    const n = K.memory;
    return te(n)
  }, t.wbg.__wbindgen_number_get = function(n, e) {
    const r = G(e),
      o = typeof r == "number" ? r : void 0;
    ln().setFloat64(n + 8, Je(o) ? 0 : o, !0), ln().setInt32(n + 0, !Je(o), !0)
  }, t.wbg.__wbindgen_object_clone_ref = function(n) {
    const e = G(n);
    return te(e)
  }, t.wbg.__wbindgen_object_drop_ref = function(n) {
    Mr(n)
  }, t.wbg.__wbindgen_string_new = function(n, e) {
    const r = rn(n, e);
    return te(r)
  }, t.wbg.__wbindgen_throw = function(n, e) {
    throw new Error(rn(n, e))
  }, t
}

function jE(t, n) {
  return K = t.exports, ho.__wbindgen_wasm_module = n, Qe = null, mt = null, K
}
async function ho(t) {
  if (K !== void 0) return K;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? {
    module_or_path: t
  } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const n = FE();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const {
    instance: e,
    module: r
  } = await UE(await t, n);
  return jE(e, r)
}
class GE {
  constructor() {
    $(this, "interval");
    $(this, "storagesEmpty", !1);
    $(this, "storages", [new dn, new Ln, new Mn, new VE]);
    $(this, "pawtectLoaded");
    $(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!st.data || this.storagesEmpty || localStorage.getItem(dn.KEY))) {
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
  isMultiAccounting(n) {
    const e = Ge.day;
    for (const o of this.storages) {
      const a = o.get();
      if (a && !(a.timestamp + e < Date.now()) && a.userId !== n) return !0
    }
    const r = {
      userId: n,
      timestamp: Date.now()
    };
    for (const o of this.storages) o.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var n;
      try {
        await ho(ea), (n = st.data) != null && n.id && An(st.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: WE((r, o) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && ME(a), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Qo(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(n) {
    await this.loadPawtect(), An(n)
  }
  async setCfLikelyAutomated(n) {
    await this.loadPawtect(), BE(n)
  }
  isPawtectReady() {
    return this.pawtectLoaded ?? Promise.resolve(!1)
  }
  getPawtectError() {
    return this.pawtectError
  }
  async getHeaders(n) {
    return {
      "x-pawtect-token": await this.getPawtectedEndpointPayload(n)
    }
  }
  async getPawtectedEndpointPayload(n) {
    if (!await this.loadPawtect()) throw new Error(j1());
    const r = navigator.webdriver,
      [o, a, i] = await Promise.all([On(), Is(), Ja().catch(s => (console.error(s), {
        bot: !1
      }))]);
    return An(st.data.id), HE(o), CE(a), PE(r), xE(so.automatedClicks), i.bot && LE(i.botKind ?? "unknown"), kE(n)
  }
}

function WE(t) {
  return t.bind().bind()
}
const Fe = class Fe {
  static codec(n) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(n.length);
    for (let o = 0; o < n.length; o++) r[o] = n[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const n = localStorage.getItem(Fe.KEY);
      if (!n) return;
      const e = Uint8Array.from(atob(n), o => o.charCodeAt(0)),
        r = new TextDecoder().decode(Fe.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(n) {
    const e = new TextEncoder().encode(JSON.stringify(n)),
      r = Fe.codec(e);
    localStorage.setItem(Fe.KEY, btoa(String.fromCharCode(...r)))
  }
};
$(Fe, "KEY", "ui_layout_v3"), $(Fe, "XOR_KEY", "wplace-prefs");
let dn = Fe;
const je = class je {
  get() {
    try {
      const n = sessionStorage.getItem(je.KEY);
      if (!n) return;
      let e = "";
      for (let r = 0; r < n.length; r += 4) {
        const o = parseInt(n.slice(r, r + 4), 16);
        e += String.fromCharCode(o - je.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(n) {
    const e = JSON.stringify(n);
    let r = "";
    for (const o of e) {
      const a = o.charCodeAt(0) + je.SHIFT & 65535;
      r += a.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(je.KEY, r)
  }
};
$(je, "KEY", "nav.cursor"), $(je, "SHIFT", 13);
let Ln = je;
const Ze = class Ze {
  get() {
    const n = document.cookie.match(new RegExp("(?:^|; )" + Ze.KEY + "=([^;]*)"));
    if (n) try {
      const [e, r] = decodeURIComponent(n[1]).split("."), o = parseInt(e, 36), a = parseInt(r, 36);
      return !Number.isFinite(o) || !Number.isFinite(a) ? void 0 : {
        userId: o,
        timestamp: a
      }
    } catch {
      return
    }
  }
  set(n) {
    const e = `${n.userId.toString(36)}.${n.timestamp.toString(36)}`;
    document.cookie = `${Ze.KEY}=${encodeURIComponent(e)};path=/;max-age=${Ze.MAX_AGE};SameSite=Lax`
  }
};
$(Ze, "KEY", "_pf_uid"), $(Ze, "MAX_AGE", 3600 * 24 * 365);
let Mn = Ze;
class VE {
  constructor() {
    $(this, "packed")
  }
  get() {
    if (this.packed === void 0) return;
    const n = Number(this.packed & 0xffffffffn),
      e = Number(this.packed >> 32n);
    return {
      userId: n,
      timestamp: e
    }
  }
  set(n) {
    this.packed = BigInt(n.timestamp) << 32n | BigInt(n.userId) & 0xffffffffn
  }
}
const ht = new GE;
export {
  pT as $, Is as A, mE as B, fo as C, __ as D, br as E, Sn as F, XE as G, Ep as H, Yf as I, Rd as J, uu as K, pg as L, Sf as M, YE as N, JE as O, dT as P, fT as Q, rT as R, _T as S, Ge as T, j1 as U, Vb as V, mT as W, cT as X, aT as Y, uT as Z, sT as _, Ve as a, lT as a0, Lp as a1, xn as b, m as c, oT as d, pd as e, Yc as f, df as g, Bf as h, up as i, so as j, z0 as k, De as l, tg as m, hT as n, gT as o, nT as p, tT as q, Ae as r, iT as s, RE as t, st as u, ZE as v, QE as w, eT as x, ht as y, Qa as z
};