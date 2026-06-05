var bo = Object.defineProperty;
var tr = t => {
  throw TypeError(t)
};
var vo = (t, n, e) => n in t ? bo(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[n] = e;
var $ = (t, n, e) => vo(t, typeof n != "symbol" ? n + "" : n, e),
  Eo = (t, n, e) => n.has(t) || tr("Cannot " + e);
var B = (t, n, e) => (Eo(t, n, "read from private field"), e ? e.call(t) : n.get(t)),
  Z = (t, n, e) => n.has(t) ? tr("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
import {
  f as To,
  h as So,
  P as Hn,
  g as Rn
} from "./yew7vgrr.js";
import {
  e as fe,
  i as re,
  h as oe,
  g as an,
  bM as Ao,
  I as Oo,
  L as nr,
  u as pt
} from "./Dbe4PVAU.js";
import {
  g as R
} from "./BhCkpOlh.js";
const ct = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Be = globalThis,
  gt = "10.40.0";

function Un() {
  return Fn(Be), Be
}

function Fn(t) {
  const n = t.__SENTRY__ = t.__SENTRY__ || {};
  return n.version = n.version || gt, n[gt] = n[gt] || {}
}

function jn(t, n, e = Be) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    o = r[gt] = r[gt] || {};
  return o[t] || (o[t] = n())
}
const Ro = "Sentry Logger ",
  rr = {};

function Do(t) {
  if (!("console" in Be)) return t();
  const n = Be.console,
    e = {},
    r = Object.keys(rr);
  r.forEach(o => {
    const a = rr[o];
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

function Io() {
  Wn().enabled = !0
}

function No() {
  Wn().enabled = !1
}

function Fr() {
  return Wn().enabled
}

function Co(...t) {
  Gn("log", ...t)
}

function ko(...t) {
  Gn("warn", ...t)
}

function xo(...t) {
  Gn("error", ...t)
}

function Gn(t, ...n) {
  ct && Fr() && Do(() => {
    Be.console[t](`${Ro}[${t}]:`, ...n)
  })
}

function Wn() {
  return ct ? jn("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Zt = {
    enable: Io,
    disable: No,
    isEnabled: Fr,
    log: Co,
    warn: ko,
    error: xo
  },
  Po = Object.prototype.toString;

function Lo(t, n) {
  return Po.call(t) === `[object ${n}]`
}

function Mo(t) {
  return Lo(t, "Object")
}

function Bo(t) {
  return !!(t != null && t.then && typeof t.then == "function")
}

function Ho(t, n, e) {
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

function Dn() {
  return fn(() => Math.random())
}

function Uo() {
  return fn(() => Date.now())
}

function Fo(t, n = 0) {
  return typeof t != "string" || n === 0 || t.length <= n ? t : `${t.slice(0,n)}...`
}

function jo() {
  const t = Be;
  return t.crypto || t.msCrypto
}
let wn;

function Go() {
  return Dn() * 16
}

function yt(t = jo()) {
  try {
    if (t != null && t.randomUUID) return fn(() => t.randomUUID()).replace(/-/g, "")
  } catch {}
  return wn || (wn = "10000000100040008000" + 1e11), wn.replace(/[018]/g, n => (n ^ (Go() & 15) >> n / 4).toString(16))
}
const jr = 1e3;

function Gr() {
  return Uo() / jr
}

function Wo() {
  const {
    performance: t
  } = Be;
  if (!(t != null && t.now) || !t.timeOrigin) return Gr;
  const n = t.timeOrigin;
  return () => (n + fn(() => t.now())) / jr
}
let or;

function Vo() {
  return (or ?? (or = Wo()))()
}

function zo(t, n = {}) {
  if (n.user && (!t.ipAddress && n.user.ip_address && (t.ipAddress = n.user.ip_address), !t.did && !n.did && (t.did = n.user.id || n.user.email || n.user.username)), t.timestamp = n.timestamp || Vo(), n.abnormal_mechanism && (t.abnormal_mechanism = n.abnormal_mechanism), n.ignoreDuration && (t.ignoreDuration = n.ignoreDuration), n.sid && (t.sid = n.sid.length === 32 ? n.sid : yt()), n.init !== void 0 && (t.init = n.init), !t.did && n.did && (t.did = `${n.did}`), typeof n.started == "number" && (t.started = n.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof n.duration == "number") t.duration = n.duration;
  else {
    const e = t.timestamp - t.started;
    t.duration = e >= 0 ? e : 0
  }
  n.release && (t.release = n.release), n.environment && (t.environment = n.environment), !t.ipAddress && n.ipAddress && (t.ipAddress = n.ipAddress), !t.userAgent && n.userAgent && (t.userAgent = n.userAgent), typeof n.errors == "number" && (t.errors = n.errors), n.status && (t.status = n.status)
}

function Wr(t, n, e = 2) {
  if (!n || typeof n != "object" || e <= 0) return n;
  if (t && Object.keys(n).length === 0) return t;
  const r = {
    ...t
  };
  for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = Wr(r[o], n[o], e - 1));
  return r
}

function ar() {
  return yt()
}
const In = "_sentrySpan";

function ir(t, n) {
  n ? Ho(t, In, n) : delete t[In]
}

function sr(t) {
  return t[In]
}
const $o = 100;
class et {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: ar(),
      sampleRand: Dn()
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
    }, n._client = this._client, n._lastEventId = this._lastEventId, n._conversationId = this._conversationId, ir(n, sr(this)), n
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
    }, this._session && zo(this._session, {
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
      r = e instanceof et ? e.getScopeData() : Mo(e) ? n : void 0,
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
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, ir(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: ar(),
      sampleRand: Dn()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(n, e) {
    var a;
    const r = typeof e == "number" ? e : $o;
    if (r <= 0) return this;
    const o = {
      timestamp: Gr(),
      ...n,
      message: n.message ? Fo(n.message, 2048) : n.message
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
      span: sr(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(n) {
    return this._sdkProcessingMetadata = Wr(this._sdkProcessingMetadata, n, 2), this
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

function qo() {
  return jn("defaultCurrentScope", () => new et)
}

function Ko() {
  return jn("defaultIsolationScope", () => new et)
}
class Xo {
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
    return Bo(r) ? r.then(o => (this._popScope(), o), o => {
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
  const t = Un(),
    n = Fn(t);
  return n.stack = n.stack || new Xo(qo(), Ko())
}

function Yo(t) {
  return dt().withScope(t)
}

function Jo(t, n) {
  const e = dt();
  return e.withScope(() => (e.getStackTop().scope = t, n(t)))
}

function cr(t) {
  return dt().withScope(() => t(dt().getIsolationScope()))
}

function Qo() {
  return {
    withIsolationScope: cr,
    withScope: Yo,
    withSetScope: Jo,
    withSetIsolationScope: (t, n) => cr(n),
    getCurrentScope: () => dt().getScope(),
    getIsolationScope: () => dt().getIsolationScope()
  }
}

function Vr(t) {
  const n = Fn(t);
  return n.acs ? n.acs : Qo()
}

function Zo() {
  const t = Un();
  return Vr(t).getCurrentScope()
}

function ea() {
  const t = Un();
  return Vr(t).getIsolationScope()
}

function ta(t, n) {
  return Zo().captureException(t, void 0)
}

function na(t, n) {
  ea().setContext(t, n)
}
const ra = "" + new URL("../assets/pawtect_wasm_bg.Ckfht_86.wasm", import.meta.url).href;
var oa = "2.0.0";
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

function aa(t, n) {
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
async function ia(t) {
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

function sa({
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

function Pe(t, n) {
  return t.indexOf(n) !== -1
}

function ca(t, n) {
  if ("find" in t) return t.find(n);
  for (let e = 0; e < t.length; e++)
    if (n(t[e], e, t)) return t[e]
}

function ur(t) {
  return Object.getOwnPropertyNames(t)
}

function Nn(t, ...n) {
  for (const e of n)
    if (typeof e == "string") {
      if (en(t, e)) return !0
    } else if (ca(t, o => e.test(o)) != null) return !0;
  return !1
}

function ut(t) {
  return t.reduce((n, e) => n + (e ? 1 : 0), 0)
}

function ua({
  documentElementKeys: t
}) {
  if (t.state !== 0) return !1;
  if (Nn(t.value, "selenium", "webdriver", "driver")) return j.Selenium
}

function la({
  errorTrace: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return j.PhantomJS
}

function da({
  evalLength: t,
  browserKind: n,
  browserEngineKind: e
}) {
  if (t.state !== 0 || n.state !== 0 || e.state !== 0) return;
  const r = t.value;
  return e.value === "unknown" ? !1 : r === 37 && !en(["webkit", "gecko"], e.value) || r === 39 && !en(["internet_explorer"], n.value) || r === 33 && !en(["chromium"], e.value)
}

function _a({
  functionBind: t
}) {
  if (t.state === -2) return j.PhantomJS
}

function fa({
  languages: t
}) {
  if (t.state === 0 && t.value.length === 0) return j.HeadlessChrome
}

function pa({
  mimeTypesConsistent: t
}) {
  if (t.state === 0 && !t.value) return j.Unknown
}

function ma({
  notificationPermissions: t,
  browserKind: n
}) {
  if (n.state !== 0 || n.value !== "chrome") return !1;
  if (t.state === 0 && t.value) return j.HeadlessChrome
}

function ha({
  pluginsArray: t
}) {
  if (t.state === 0 && !t.value) return j.HeadlessChrome
}

function ga({
  pluginsLength: t,
  android: n,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(t.state !== 0 || n.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || n.value || r.value !== "chromium") && t.value === 0) return j.HeadlessChrome
}

function ya({
  process: t
}) {
  var n;
  if (t.state !== 0) return !1;
  if (t.value.type === "renderer" || ((n = t.value.versions) === null || n === void 0 ? void 0 : n.electron) != null) return j.Electron
}

function wa({
  productSub: t,
  browserKind: n
}) {
  if (t.state !== 0 || n.state !== 0) return !1;
  if ((n.value === "chrome" || n.value === "safari" || n.value === "opera" || n.value === "wechat") && t.value !== "20030107") return j.Unknown
}

function ba({
  userAgent: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return j.PhantomJS;
  if (/Headless/i.test(t.value)) return j.HeadlessChrome;
  if (/Electron/i.test(t.value)) return j.Electron;
  if (/slimerjs/i.test(t.value)) return j.SlimerJS
}

function va({
  webDriver: t
}) {
  if (t.state === 0 && t.value) return j.HeadlessChrome
}

function Ea({
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

function Ta({
  windowExternal: t
}) {
  if (t.state !== 0) return !1;
  if (/Sequentum/i.test(t.value)) return j.Sequentum
}

function Sa({
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

function Aa({
  distinctiveProps: t
}) {
  if (t.state !== 0) return !1;
  const n = t.value;
  let e;
  for (e in n)
    if (n[e]) return e
}
const Oa = {
  detectAppVersion: sa,
  detectDocumentAttributes: ua,
  detectErrorTrace: la,
  detectEvalLengthInconsistency: da,
  detectFunctionBind: _a,
  detectLanguagesLengthInconsistency: fa,
  detectNotificationPermissions: ma,
  detectPluginsArray: ha,
  detectPluginsLengthInconsistency: ga,
  detectProcess: ya,
  detectUserAgent: ba,
  detectWebDriver: va,
  detectWebGL: Ea,
  detectWindowExternal: Ta,
  detectWindowSize: Sa,
  detectMimeTypesConsistent: pa,
  detectProductSub: wa,
  detectDistinctiveProperties: Aa
};

function Ra() {
  const t = navigator.appVersion;
  if (t == null) throw new J(-1, "navigator.appVersion is undefined");
  return t
}

function Da() {
  if (document.documentElement === void 0) throw new J(-1, "document.documentElement is undefined");
  const {
    documentElement: t
  } = document;
  if (typeof t.getAttributeNames != "function") throw new J(-2, "document.documentElement.getAttributeNames is not a function");
  return t.getAttributeNames()
}

function Ia() {
  try {
    null[0]()
  } catch (t) {
    if (t instanceof Error && t.stack != null) return t.stack.toString()
  }
  throw new J(-3, "errorTrace signal unexpected behaviour")
}

function Na() {
  return eval.toString().length
}

function Ca() {
  if (Function.prototype.bind === void 0) throw new J(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Vn() {
  var t, n;
  const e = window,
    r = navigator;
  return ut(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : ut(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : ut(["buildID" in navigator, "MozAppearance" in ((n = (t = document.documentElement) === null || t === void 0 ? void 0 : t.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function ka() {
  var t;
  const n = (t = navigator.userAgent) === null || t === void 0 ? void 0 : t.toLowerCase();
  return Pe(n, "edg/") ? "edge" : Pe(n, "trident") || Pe(n, "msie") ? "internet_explorer" : Pe(n, "wechat") ? "wechat" : Pe(n, "firefox") ? "firefox" : Pe(n, "opera") || Pe(n, "opr") ? "opera" : Pe(n, "chrome") ? "chrome" : Pe(n, "safari") ? "safari" : "unknown"
}

function xa() {
  const t = Vn(),
    n = t === "chromium",
    e = t === "gecko",
    r = window,
    o = navigator,
    a = "connection";
  return n ? ut([!("SharedWorker" in r), o[a] && "ontypechange" in o[a], !("sinkId" in new Audio)]) >= 2 : e ? ut(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Pa() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function La() {
  const t = window;
  return ut([!("MediaSettingsRange" in t), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3
}

function Ma() {
  const t = navigator,
    n = [],
    e = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
  if (e !== void 0 && n.push([e]), Array.isArray(t.languages)) Vn() === "chromium" && La() || n.push(t.languages);
  else if (typeof t.languages == "string") {
    const r = t.languages;
    r && n.push(r.split(","))
  }
  return n
}

function Ba() {
  if (navigator.mimeTypes === void 0) throw new J(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: t
  } = navigator;
  let n = Object.getPrototypeOf(t) === MimeTypeArray.prototype;
  for (let e = 0; e < t.length; e++) n && (n = Object.getPrototypeOf(t[e]) === MimeType.prototype);
  return n
}
async function Ha() {
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

function Ua() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new J(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Fa() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new J(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function ja() {
  const {
    process: t
  } = window, n = "window.process is";
  if (t === void 0) throw new J(-1, `${n} undefined`);
  if (t && typeof t != "object") throw new J(-3, `${n} not an object`);
  return t
}

function Ga() {
  const {
    productSub: t
  } = navigator;
  if (t === void 0) throw new J(-1, "navigator.productSub is undefined");
  return t
}

function Wa() {
  if (navigator.connection === void 0) throw new J(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new J(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Va() {
  return navigator.userAgent
}

function za() {
  if (navigator.webdriver == null) throw new J(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function $a() {
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

function qa() {
  if (window.external === void 0) throw new J(-1, "window.external is undefined");
  const {
    external: t
  } = window;
  if (typeof t.toString != "function") throw new J(-2, "window.external.toString is not a function");
  return t.toString()
}

function Ka() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Xa() {
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
    r = ur(window);
  let o = [];
  window.document !== void 0 && (o = ur(window.document));
  for (n in t) {
    const a = t[n];
    if (a !== void 0) {
      const i = a.window === void 0 ? !1 : Nn(r, ...a.window),
        s = a.document === void 0 || !o.length ? !1 : Nn(o, ...a.document);
      e[n] = i || s
    }
  }
  return e
}
const Ya = {
  android: xa,
  browserKind: ka,
  browserEngineKind: Vn,
  documentFocus: Pa,
  userAgent: Va,
  appVersion: Ra,
  rtt: Wa,
  windowSize: Ka,
  pluginsLength: Fa,
  pluginsArray: Ua,
  errorTrace: Ia,
  productSub: Ga,
  windowExternal: qa,
  mimeTypesConsistent: Ba,
  evalLength: Na,
  webGL: $a,
  webDriver: za,
  languages: Ma,
  notificationPermissions: Ha,
  documentElementKeys: Da,
  functionBind: Ca,
  process: ja,
  distinctiveProps: Xa
};
class Ja {
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
    const [n, e] = aa(this.components, Oa);
    return this.detections = n, e
  }
  async collect() {
    return this.components = await ia(Ya), this.components
  }
}

function Qa() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const t = new XMLHttpRequest;
    t.open("get", `https://m1.openfpcdn.io/botd/v${oa}/npm-monitoring`, !0), t.send()
  } catch (t) {
    console.error(t)
  }
}
async function Za({
  monitoring: t = !0
} = {}) {
  t && Qa();
  const n = new Ja;
  return await n.collect(), n
}
let bn = null;
async function ei() {
  return (await ti()).detect()
}

function ti() {
  return bn || (bn = Za({
    monitoring: !1
  })), bn
}

function zr(t) {
  const n = atob(t),
    e = new Uint8Array(n.length);
  for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
  return e
}

function $r(t) {
  if (typeof Buffer < "u") return Buffer.from(t).toString("base64");
  let n = "";
  for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
  return btoa(n)
}
class ni {
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

function QE(t) {
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

function ZE(t) {
  if (typeof FileReader > "u") {
    const n = t.type || "application/octet-stream";
    return t.arrayBuffer().then(e => `data:${n};base64,${$r(new Uint8Array(e))}`)
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

function eT(t) {
  if (!t.startsWith("data:")) throw new Error("Could not parse data URL");
  const n = t.indexOf(",");
  if (n === -1) throw new Error("Could not parse data URL");
  const e = t.slice(5, n),
    r = t.slice(n + 1),
    o = e.indexOf(";base64"),
    a = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const i = zr(r),
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
  return $r(new Uint8Array(r))
}
const X = Math,
  Te = () => 0;

function ri() {
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
const oi = () => {
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
  qr = oi(),
  {
    captureError: ae
  } = qr,
  x = (t, n = "") => {
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
  ai = () => ({
    data: qr.getErrors()
  });
var Ie = (t => (t.WINDOWS = "Windows", t.LINUX = "Linux", t.APPLE = "Apple", t.OTHER = "Other", t))(Ie || {});
const Kr = !globalThis.document && globalThis.WorkerGlobalScope;

function ii() {
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    return (n instanceof Error ? n.message : String(n)).length + (t + "").split(t.name).join("").length
  }
}
const pn = ii(),
  pe = pn == 80,
  vt = pn == 58,
  Et = pn == 77,
  lr = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [pn] || null,
  Xr = pe && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function Yr() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function si() {
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
const Cn = t => /windows phone/ig.test(t) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? "Windows" : /android/ig.test(t) ? "Android" : /cros/ig.test(t) ? "Chrome OS" : /linux/ig.test(t) ? "Linux" : /ipad/ig.test(t) ? "iPad" : /iphone/ig.test(t) ? "iPhone" : /ipod/ig.test(t) ? "iPod" : /ios/ig.test(t) ? "iOS" : /mac/ig.test(t) ? "Mac" : "Other";

function Jr(t, n) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? Ie.WINDOWS : /android|linux|cros/ig.test(t) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? Ie.APPLE : Ie.OTHER;
  if (!n) return [e];
  const r = /win/ig.test(n) ? Ie.WINDOWS : /android|arm|linux/ig.test(n) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? Ie.APPLE : Ie.OTHER;
  return [e, r]
}
const {
  userAgent: ci,
  platform: ui
} = globalThis.navigator || {}, [sn, dr] = Jr(ci, ui), Qr = ({
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
}, Zr = ({
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
}, eo = t => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(t) || [])[1];
  return pe && !!e
}, ce = (t = 0) => new Promise(n => setTimeout(n, t)), to = [
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
].map(t => String.fromCodePoint(...t)), kn = `
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

function li(t) {
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

function di() {
  const t = {};
  return {
    getRecords: () => t,
    documentLie: (n, e) => {
      const r = e instanceof Array;
      return t[n] ? r ? t[n] = [...t[n], ...e] : t[n].push(e) : r ? t[n] = e : t[n] = [e]
    }
  }
}
const no = di(),
  {
    documentLie: ne
  } = no,
  ro = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function mn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function _i(t) {
  try {
    if (!pe) return t;
    const n = t.document.createElement("div");
    n.setAttribute("id", mn()), n.setAttribute("style", ro), n.innerHTML = "<div><iframe></iframe></div>", t.document.body.appendChild(n);
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
const _r = mn(),
  ft = "Reflect" in globalThis;

function fi(t) {
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
    return fi(r) ? n ? n(r) : !1 : !0
  } finally {
    e && e()
  }
}

function pi(t) {
  try {
    return t(), !1
  } catch {
    return !0
  }
}

function fr(t) {
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
const mi = /at Function\.toString /,
  hi = /at Object\.toString/,
  gi = /at (Function\.)?\[Symbol.hasInstance\]/,
  yi = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  pr = /strict mode/;

function mr({
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
    "failed toString": !fr(a)[t.Function.prototype.toString.call(n)] || !fr("toString")[t.Function.prototype.toString.call(n.toString)],
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
      withStack: f => pe && !ot(f, mi)
    }) || we({
      spawnErr: () => {
        Object.create(new Proxy(n, {})).toString()
      },
      withStack: f => pe && !ot(f, hi)
    }),
    "failed at incompatible proxy error": we({
      spawnErr: () => {
        n.arguments, n.caller
      },
      withStack: f => vt && !ot(f, pr, 0)
    }),
    "failed at toString incompatible proxy error": we({
      spawnErr: () => {
        n.toString.arguments, n.toString.caller
      },
      withStack: f => vt && !ot(f, pr, 0)
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
          throw Reflect.setPrototypeOf(n, Object.create(n)), _r in n, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(n, s)
        }
      }),
      "failed at reflect set proto proxy": ft && !we({
        spawnErr: () => {
          Reflect.setPrototypeOf(g, Object.create(g)), _r in g
        },
        final: () => {
          Object.setPrototypeOf(g, s)
        }
      }),
      "failed at instanceof check error": pe && (we({
        spawnErr: () => {
          n instanceof n
        },
        withStack: h => !ot(h, gi)
      }) || we({
        spawnErr: () => {
          const h = new Proxy(n, {});
          h instanceof h
        },
        withStack: h => !ot(h, yi)
      })),
      "failed at define properties": pe && ft && pi(() => {
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

function wi(t) {
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
              if (y = mr({
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
          if (y = mr({
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

function bi() {
  const t = globalThis;
  if (Kr) return {
    iframeWindow: t,
    div: void 0
  };
  try {
    const n = t.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      o = mn();
    r.setAttribute("id", o), e.appendChild(r), r.innerHTML = `<div style="${ro}"><iframe></iframe></div>`, document.body.appendChild(e);
    const a = t[n];
    return {
      iframeWindow: _i(a) || t,
      div: r
    }
  } catch (n) {
    return ae(n, "client blocked phantom iframe"), {
      iframeWindow: t,
      div: void 0
    }
  }
}

function vi(t) {
  const n = wi(t),
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
const Ei = t => t && t.filter(n => !/object toString|toString incompatible proxy/.test(n)).length;
let cn, it, oo = {},
  ao = {},
  hr = !1;

function hn() {
  if (hr) return;
  hr = !0;
  const {
    iframeWindow: t,
    div: n
  } = bi() || {};
  cn = t, it = n;
  const {
    lieDetector: e,
    lieDetail: r
  } = vi(cn);
  if (!Kr) {
    const o = e.getProps();
    oo = Object.keys(o).reduce((a, i) => (a[i] = Ei(o[i]), a), {}), ao = JSON.parse(JSON.stringify(r))
  }
}

function gn() {
  return hn(), cn
}

function io() {
  return hn(), it
}

function Ti() {
  it == null || it.remove(), it = void 0, cn = void 0
}

function ze() {
  return hn(), oo
}

function Si() {
  return hn(), ao
}
const Ai = () => {
    const t = no.getRecords(),
      n = Object.keys(t).reduce((e, r) => (e += t[r].length, e), 0);
    return {
      data: t,
      totalLies: n
    }
  },
  Oi = t => typeof t == "function",
  Ri = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
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
        Ri.test(h) && o.push(h)
      }
    });
    const c = [...!n && o.length < 3 ? [] : o, ...!n && e.length < 4 ? [] : e],
      _ = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return c.filter(u => !_.includes(u))
  };

function so(t) {
  if (t) return ("" + t).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...n) => `${n[1]}${n[6][0]}${n[6].slice(1).replace(/\d/g,"0")}s`)
}
const Di = t => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + t).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  co = t => {
    if (!t) return;
    const n = Di(t),
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
  Ii = () => {
    const t = [];
    return {
      getBin: () => t,
      sendToTrash: (n, e, r = void 0) => {
        const a = Oi(e) ? "proxy behavior detected" : e;
        return t.push({
          name: n,
          value: a
        }), r
      }
    }
  },
  uo = Ii(),
  {
    sendToTrash: se
  } = uo,
  Ni = () => ({
    trashBin: uo.getBin()
  });
async function Ci() {
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

function ki() {
  const t = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"],
    n = new Set;
  for (const e of t) try {
    const r = Intl[e];
    if (!r) continue;
    n.add(new r().resolvedOptions().locale)
  } catch {}
  return [...n].join(",")
}

function xi(t) {
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

function Pi() {
  try {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone ?? ""
  } catch {
    return ""
  }
}

function Li() {
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
async function Mi(t) {
  const [n, e] = await Promise.all([Ci(), Promise.resolve(Li())]), r = navigator.deviceMemory, o = navigator.language, a = ki(), {
    systemCurrencyLocale: i,
    engineCurrencyLocale: s
  } = xi(o);
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
    timezoneLocation: Pi(),
    webglRenderer: e.renderer,
    webglVendor: e.vendor,
    lies: {
      proto: {}
    }
  }
}

function Bi(t) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}

function Hi(t) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}
async function Ui() {
  try {
    await ce();
    const t = P => {
        try {
          return P()
        } catch {
          return
        }
      },
      n = () => new Promise(P => {
        const L = t(() => new Bi);
        if (!L) return P(null);
        const U = setTimeout(() => {
          L.terminate(), P(null)
        }, 3e3);
        L.onerror = () => {
          clearTimeout(U), L.terminate(), P(null)
        }, L.onmessage = Q => {
          clearTimeout(U), L.terminate(), P(Q.data)
        }
      }),
      e = () => new Promise(P => {
        const L = t(() => new Hi);
        if (!L) return P(null);
        const U = setTimeout(() => {
          L.port.close(), P(null)
        }, 3e3);
        L.port.start(), L.port.onmessage = Q => {
          clearTimeout(U), L.port.close(), P(Q.data)
        }
      }),
      r = P => (ae(P), null),
      [o, a] = await Promise.all([e().catch(r), n().catch(r)]);
    let i = null,
      s = !1;
    if (a != null && a.userAgent ? i = a : (s = !0, i = await Mi("dedicated").catch(r) ?? null), !i || !i.userAgent) return;
    if (s && (i.lied = !0, i.lies.workerUnavailable = "dedicated worker did not respond; collected from main thread", ne("WorkerGlobalScope", i.lies.workerUnavailable)), o != null && o.userAgent && !s) {
      const P = [];
      o.userAgent !== i.userAgent && P.push("userAgent"), o.platform !== i.platform && P.push("platform"), o.hardwareConcurrency !== i.hardwareConcurrency && P.push("hardwareConcurrency"), o.deviceMemory !== i.deviceMemory && P.push("deviceMemory"), o.timezoneLocation !== i.timezoneLocation && P.push("timezoneLocation"), P.length && (i.lied = !0, i.lies.workerMismatch = `dedicated and shared worker disagree on: ${P.join(", ")}`, ne("WorkerGlobalScope", i.lies.workerMismatch))
    }
    i.system = Cn(i.userAgent), i.device = Zr({
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
        proto: P
      } = i.lies;
      Object.keys(P).forEach(U => {
        const Q = `WorkerGlobalScope.${U}`;
        P[U].forEach(F => {
          ne(Q, F)
        })
      })
    }
    const [h, y] = Jr(_, p);
    h != y && (i.lied = !0, i.lies.os = `${y} platform and ${h} user agent do not match`, ne("WorkerGlobalScope", i.lies.os));
    const C = Qr({
        ua: _,
        os: c,
        isBrave: !1
      }),
      T = /safari/i.test(C) || /iphone|ipad/i.test(_) ? "JavaScriptCore" : /firefox/i.test(_) ? "SpiderMonkey" : /chrome/i.test(_) ? "V8" : void 0;
    T != lr && (i.lied = !0, i.lies.engine = `${lr} JS runtime and ${T} user agent do not match`, ne("WorkerGlobalScope", i.lies.engine));
    const D = P => (/\d+/.exec(P) || [])[0],
      S = D(C),
      N = D(u ? u.uaFullVersion ?? "" : ""),
      A = N && S,
      w = N == S;
    A && !w && (i.lied = !0, i.lies.version = `userAgentData version ${N} and user agent version ${S} do not match`, ne("WorkerGlobalScope", i.lies.version));
    const v = pe && CSS.supports("accent-color: initial");
    ((P, L) => {
      if (!/windows|mac/i.test(P) || !(L != null && L.platformVersion)) return !1;
      if (L.platform == "macOS") return v ? /_/.test(L.platformVersion) : !1;
      const U = (/windows ([\d|\.]+)/i.exec(P) || [])[1],
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
      ...co(i.webglRenderer) || {},
      compressedGPU: so(i.webglRenderer)
    };
    return {
      ...i,
      gpu: H,
      uaPostReduction: eo(i.userAgent)
    }
  } catch (t) {
    ae(t, "workers failed or blocked by client");
    return
  }
}
const gr = Math.random();
async function Fi() {
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
async function ji() {
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
        "AnalyserNode.channelCount": x(() => p.channelCount),
        "AnalyserNode.channelCountMode": x(() => p.channelCountMode),
        "AnalyserNode.channelInterpretation": x(() => p.channelInterpretation),
        "AnalyserNode.context.sampleRate": x(() => p.context.sampleRate),
        "AnalyserNode.fftSize": x(() => p.fftSize),
        "AnalyserNode.frequencyBinCount": x(() => p.frequencyBinCount),
        "AnalyserNode.maxDecibels": x(() => p.maxDecibels),
        "AnalyserNode.minDecibels": x(() => p.minDecibels),
        "AnalyserNode.numberOfInputs": x(() => p.numberOfInputs),
        "AnalyserNode.numberOfOutputs": x(() => p.numberOfOutputs),
        "AnalyserNode.smoothingTimeConstant": x(() => p.smoothingTimeConstant),
        "AnalyserNode.context.listener.forwardX.maxValue": x(() => Ee(() => p.context.listener.forwardX.maxValue)),
        "BiquadFilterNode.gain.maxValue": x(() => g.gain.maxValue),
        "BiquadFilterNode.frequency.defaultValue": x(() => g.frequency.defaultValue),
        "BiquadFilterNode.frequency.maxValue": x(() => g.frequency.maxValue),
        "DynamicsCompressorNode.attack.defaultValue": x(() => d.attack.defaultValue),
        "DynamicsCompressorNode.knee.defaultValue": x(() => d.knee.defaultValue),
        "DynamicsCompressorNode.knee.maxValue": x(() => d.knee.maxValue),
        "DynamicsCompressorNode.ratio.defaultValue": x(() => d.ratio.defaultValue),
        "DynamicsCompressorNode.ratio.maxValue": x(() => d.ratio.maxValue),
        "DynamicsCompressorNode.release.defaultValue": x(() => d.release.defaultValue),
        "DynamicsCompressorNode.release.maxValue": x(() => d.release.maxValue),
        "DynamicsCompressorNode.threshold.defaultValue": x(() => d.threshold.defaultValue),
        "DynamicsCompressorNode.threshold.minValue": x(() => d.threshold.minValue),
        "OscillatorNode.detune.maxValue": x(() => f.detune.maxValue),
        "OscillatorNode.detune.minValue": x(() => f.detune.minValue),
        "OscillatorNode.frequency.defaultValue": x(() => f.frequency.defaultValue),
        "OscillatorNode.frequency.maxValue": x(() => f.frequency.maxValue),
        "OscillatorNode.frequency.minValue": x(() => f.frequency.minValue)
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
            const xe = new Float32Array(Y.frequencyBinCount);
            (He = Y.getFloatFrequencyData) == null || He.call(Y, xe);
            const $e = new Float32Array(Y.fftSize);
            return "getFloatTimeDomainData" in Y && Y.getFloatTimeDomainData($e), V({
              floatFrequencyData: xe,
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
    const [D, S] = await Promise.all([T(u), Fi().catch(() => !1)]), {
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
      P = I(A),
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
        } = V, le = 20, de = z(275, ie - (le + 1)), He = de + le / 2, xe = de + le;
        V.getChannelData(0)[de] = W, V.getChannelData(0)[He] = W, V.getChannelData(0)[xe] = W, V.copyFromChannel(Y, 0);
        const $e = [V.getChannelData(0)[de] === 0 ? Math.random() : 0, V.getChannelData(0)[He] === 0 ? Math.random() : 0, V.getChannelData(0)[xe] === 0 ? Math.random() : 0];
        return [...new Set([...V.getChannelData(0), ...Y, ...$e])].filter(Jt => Jt !== 0)
      },
      me = (W, V, Y) => {
        V.copyToChannel(Y.map(() => W), 0);
        const ie = V.getChannelData(0)[0];
        return [...V.getChannelData(0)].map(de => de !== ie || !de ? Math.random() : de).filter(de => de !== ie)
      };
    let Se = (() => {
      try {
        const V = [...new Set([...ee(gr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...me(gr, new AudioBuffer({
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
    const Yt = "" + [v, H, P],
      _t = Xt[Yt];
    return _t && !_t.includes(F) && (ke.AUDIO = !0, se("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: M,
      compressorGainReduction: v,
      floatFrequencyDataSum: H,
      floatTimeDomainDataSum: P,
      sampleSum: F,
      binsSample: ue,
      copySample: k ? Q : [void 0],
      values: C,
      noise: Se,
      baseLatency: Gi(),
      lied: c
    }
  } catch (a) {
    ae(a, "OfflineAudioContext failed or blocked by client");
    return
  } finally {
    t.forEach(n)
  }
}

function Gi() {
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
const Wi = () => {
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
            P = I[1],
            L = I[2],
            U = I[3];
          f[d] = A, f[d + 1] = w, f[d + 2] = v, f[d + 3] = E, d += 4, c.fillStyle = `rgba(${A!==H?H:255}, ${w!==P?P:255}, ${v!==L?L:255}, ${E!==U?U:1})`, c.fillRect(D * 5, S * 5, 5, 5)
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
          height: P
        } = v, L = A.createRadialGradient(d(I(), w, H), d(I(), w, P), d(I(), w, H), d(I(), w, H), d(I(), w, P), d(I(), w, H));
        L.addColorStop(0, E[d(I(), w, E.length)]), L.addColorStop(1, E[d(I(), w, E.length)]), A.fillStyle = L
      },
      h = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      y = (A, w, v, E) => {
        const {
          width: I,
          height: H
        } = v, P = 2.99;
        A.font = `${H/P}px ${r.replace(/!important/gm,"")}`, A.strokeText("👾A", d(E(), w, I), d(E(), w, H), d(E(), w, I))
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
async function Vi() {
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
    !Xr && r && (u = r);
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
      cssFontFamily: kn,
      area: {
        width: g,
        height: g
      },
      rounds: 10
    });
    const h = t.toDataURL();
    await ce();
    const y = Wi();
    await ce();
    const C = kn.replace(/!important/gm, "");
    f.font = `10px ${C}`;
    const T = new Set,
      D = to.reduce((L, U) => {
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
    const P = L => {
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
    return await ce(), P(f) && (c = !0, _ = !0, ne("CanvasRenderingContext2D.measureText", "metric noise detected")), {
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

function zi() {
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
      r = n(io());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    ae(e);
    return
  }
}

function $i() {
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

function qi(t) {
  const n = [],
    e = t.length;
  for (let r = 0; r < e; r++) try {
    t[r]()
  } catch (o) {
    n.push(o.message)
  }
  return n
}

function Ki() {
  try {
    return {
      errors: qi([() => new Function('alert(")')(), () => new Function("const foo;foo.bar")(), () => new Function("null.bar")(), () => new Function("abc.xyz = 123")(), () => new Function("const foo;foo.bar")(), () => new Function("(1).toString(1000)")(), () => new Function("[...undefined].length")(), () => new Function("var x = new Array(-1)")(), () => new Function("const a=1; const a=2;")()])
    }
  } catch (t) {
    ae(t);
    return
  }
}

function Xi(t, n) {
  if (!t || !n || !n.length) return !1;
  const e = n.reduce((i, s) => (i[s] = !0, i), {}),
    r = "Cambria Math" in e || "Nirmala UI" in e || "Leelawadee UI" in e || "HoloLens MDL2 Assets" in e || "Segoe Fluent Icons" in e,
    o = "Helvetica Neue" in e || "Luminari" in e || "PingFang HK Light" in e || "InaiMathi Bold" in e || "Galvji" in e || "Chakra Petch" in e,
    a = "Arimo" in e || "MONO" in e || "Ubuntu" in e || "Noto Color Emoji" in e || "Dancing Script" in e || "Droid Sans Mono" in e;
  return r && t != Ie.WINDOWS || o && t != Ie.APPLE ? !0 : !!(a && t != Ie.LINUX)
}

function Yi(t, n, e) {
  var r;
  return t ? ((r = t.parentNode) == null || r.replaceChild(n, t), !0) : null
}

function Ji(t, ...n) {
  const e = document.createElement("template");
  return e.innerHTML = t.map((r, o) => `${r}${n[o]||""}`).join(""), document.importNode(e.content, !0)
}
const xn = {
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
  Qi = Object.keys(Pn).map(t => Pn[t]).flat(),
  Zi = Object.keys(xn).map(t => xn[t]).flat(),
  es = Object.keys(un).map(t => un[t]).flat(),
  ts = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  ns = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  rs = [...Qi, ...Zi, ...ts, ...ns, ...es].sort();
async function os() {
  const t = ({
      doc: o,
      id: a,
      emojis: i
    }) => {
      try {
        Yi(o.getElementById(a), Ji`
				<div id="pixel-emoji-container">
				<style>
					.pixel-emoji {
						font-family: ${kn};
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
        fontMap: xn
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
      emojis: to
    }) || {}, f = await n(rs), d = e(f), g = r(f), h = a["FontFace.load"] || a["FontFace.family"] || a["FontFace.status"] || a["String.fromCodePoint"] || a["CSSStyleDeclaration.setProperty"] || a["CSS2Properties.setProperty"] || !1;
    return Xi(sn, f) && (ke.FONTS = !0, We.FontOsIsBad = !0, se("platform", `${sn} system and fonts are uncommon`)), {
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
  as = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var ye = (t => (t.WINDOWS = "Windows", t.MAC = "Mac", t.LINUX = "Linux", t.ANDROID = "Android", t.CHROME_OS = "Chrome OS", t))(ye || {});
const is = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function ss() {
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
        P = +(H.filter(L => L).length / H.length).toFixed(2);
      return E[I] = P, E
    }, {}),
    A = Object.keys(N).reduce((E, I) => N[E] > N[I] ? E : I),
    w = N[A];
  return [N, w, S]
}
const yr = {
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

function cs() {
  const {
    body: t
  } = document, n = document.createElement("div");
  t.appendChild(n);
  try {
    const e = String([...is.reduce((o, a) => (n.setAttribute("style", `font: ${a} !important`), o.add(getComputedStyle(n).fontFamily)), new Set)]),
      r = yr[e];
    return yr[e] ? `${e}:${r}` : e
  } catch {
    return ""
  } finally {
    t.removeChild(n)
  }
}
async function us({
  webgl: t
}) {
  var n, e;
  try {
    await ce();
    const r = ze(),
      o = io(),
      a = Object.keys({
        ...navigator.mimeTypes
      }),
      i = cs(),
      [s, c, _] = ss(),
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
              return S.srcdoc = as, !!S.contentWindow
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
async function ls() {
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
const ds = () => ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"].sort();
async function _s() {
  const t = () => {
    try {
      const n = ds(),
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
async function fs(t) {
  try {
    await ce();
    const n = ze();
    let e = n["Navigator.appVersion"] || n["Navigator.deviceMemory"] || n["Navigator.doNotTrack"] || n["Navigator.hardwareConcurrency"] || n["Navigator.language"] || n["Navigator.languages"] || n["Navigator.maxTouchPoints"] || n["Navigator.oscpu"] || n["Navigator.platform"] || n["Navigator.userAgent"] || n["Navigator.vendor"] || n["Navigator.plugins"] || n["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      o = x(async () => {
        const u = Ee(() => navigator.userAgent),
          p = Cn(u),
          f = await Yr();
        return Qr({
          ua: u,
          os: p,
          isBrave: f
        })
      }),
      a = {
        platform: x(() => {
          const {
            platform: u
          } = navigator, p = ["win", "linux", "mac", "arm", "pike", "linux", "iphone", "ipad", "ipod", "android", "x11"], f = typeof u == "string" ? u.toLowerCase() : "";
          return !!f && p.some(g => f.includes(g)) || se("platform", `${u} is unusual`), sn !== dr && (e = !0, ne("Navigator.platform", `${dr} platform and ${sn} user agent do not match`)), t && u != t.platform && (e = !0), u
        }),
        system: x(() => Cn(navigator.userAgent), "userAgent system failed"),
        device: x(() => Zr({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: x(() => {
          const {
            userAgent: u
          } = navigator;
          return r || se("userAgent", `${u} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(u) && se("userAgent", "extra spaces detected"), tn(u).length && se("userAgent is gibberish", u), t && u != t.userAgent && (e = !0), u.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: eo((navigator || {}).userAgent),
        appVersion: x(() => {
          const {
            appVersion: u
          } = navigator;
          return r || se("appVersion", `${u} does not match userAgent`), "appVersion" in navigator && !u && se("appVersion", "Living Standard property returned falsy value"), /\s{2,}|^\s|\s$/g.test(u) && se("appVersion", "extra spaces detected"), u.trim().replace(/\s{2,}/, " ")
        }, "appVersion failed"),
        deviceMemory: x(() => {
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
        doNotTrack: x(() => {
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
        globalPrivacyControl: x(() => {
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
        hardwareConcurrency: x(() => {
          if (!("hardwareConcurrency" in navigator)) return;
          const {
            hardwareConcurrency: u
          } = navigator;
          return t && u !== t.hardwareConcurrency && (e = !0), u
        }, "hardwareConcurrency failed"),
        language: x(() => {
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
        maxTouchPoints: x(() => "maxTouchPoints" in navigator ? navigator.maxTouchPoints : null, "maxTouchPoints failed"),
        vendor: x(() => navigator.vendor, "vendor failed"),
        mimeTypes: x(() => {
          const {
            mimeTypes: u
          } = navigator;
          return u ? [...u].map(p => p.type) : []
        }, "mimeTypes failed"),
        oscpu: x(() => navigator.oscpu, "oscpu failed"),
        plugins: x(() => {
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
        properties: x(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: ps(),
        privateClickMeasurement: ms(),
        pdfViewerEnabled: hs()
      },
      i = () => x(() => {
        const u = navigator;
        if (!(!u.userAgentData || !u.userAgentData.getHighEntropyValues)) return u.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(p => {
          const {
            brands: f,
            mobile: d
          } = u.userAgentData || {}, g = (C, T = !1) => C.filter(D => !/Not/.test(D.brand)).map(D => `${D.brand}${T?` ${D.version}`:""}`), h = C => C.length > 1 ? C.filter(T => !/Chromium/.test(T)) : C;
          return p.brands || (p.brands = f), p.brandsVersion = g(p.brands ?? [], !0), p.brands = g(p.brands ?? []), p.brandsVersion = h(p.brandsVersion ?? []), p.brands = h(p.brands ?? []), p.mobile || (p.mobile = d), Object.keys(p).sort().reduce((C, T) => (C[T] = p[T], C), {})
        })
      }, "userAgentData failed"),
      s = () => x(() => {
        const u = navigator;
        if (!(!("bluetooth" in navigator) || !u.bluetooth || !u.bluetooth.getAvailability)) return u.bluetooth.getAvailability()
      }, "bluetoothAvailability failed"),
      c = () => x(() => {
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
      _ = () => x(() => {
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

function ps() {
  const n = window.ApplePaySession;
  if (typeof n != "function" || typeof n.canMakePayments != "function") return -1;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (e) {
    const r = (e == null ? void 0 : e.message) ?? "";
    return r.includes("disabled in this insecure context") ? 2 : r.includes("Trying to start an Apple Pay session") ? 0 : -1
  }
}

function ms() {
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

function hs() {
  try {
    const t = navigator.pdfViewerEnabled;
    return typeof t == "boolean" ? t : void 0
  } catch (t) {
    ae(t);
    return
  }
}
const _e = "c767712b",
  gs = {
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
    privacybadger: wr,
    privacypossum: Tn,
    jshelter: Ne,
    puppeteerExtra: he,
    fakeBrowser: Re
  } = gs;

function ys(t, n) {
  if (n) {
    if (n >= 7 && qe.contentDocumentHash.includes(t.contentDocumentHash) && qe.contentWindowHash.includes(t.contentWindowHash) && qe.createElementHash.includes(t.createElementHash) && qe.getElementByIdHash.includes(t.getElementByIdHash) && qe.toDataURLHash.includes(t.toDataURLHash) && qe.toBlobHash.includes(t.toBlobHash) && qe.getImageDataHash.includes(t.getImageDataHash)) return "Trace";
    if (n >= 7 && Ke.contentDocumentHash.includes(t.contentDocumentHash) && Ke.contentWindowHash.includes(t.contentWindowHash) && Ke.createElementHash.includes(t.createElementHash) && Ke.getElementByIdHash.includes(t.getElementByIdHash) && Ke.toDataURLHash.includes(t.toDataURLHash) && Ke.toBlobHash.includes(t.toBlobHash) && Ke.getImageDataHash.includes(t.getImageDataHash)) return "CyDec";
    if (n >= 6 && at.contentDocumentHash.includes(t.contentDocumentHash) && at.contentWindowHash.includes(t.contentWindowHash) && at.appendHash.includes(t.appendHash) && at.toDataURLHash.includes(t.toDataURLHash) && at.toBlobHash.includes(t.toBlobHash) && at.getImageDataHash.includes(t.getImageDataHash)) return "CanvasBlocker";
    if (n >= 9 && Le.appendHash.includes(t.appendHash) && Le.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Le.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Le.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && Le.prependHash.includes(t.prependHash) && Le.replaceWithHash.includes(t.replaceWithHash) && Le.appendChildHash.includes(t.appendChildHash) && Le.insertBeforeHash.includes(t.insertBeforeHash) && Le.replaceChildHash.includes(t.replaceChildHash)) return "Chameleon";
    if (n >= 7 && ve.toDataURLHash.includes(t.toDataURLHash) && ve.toBlobHash.includes(t.toBlobHash) && ve.getImageDataHash.includes(t.getImageDataHash) && ve.getByteFrequencyDataHash.includes(t.getByteFrequencyDataHash) && ve.getByteTimeDomainDataHash.includes(t.getByteTimeDomainDataHash) && ve.getFloatFrequencyDataHash.includes(t.getFloatFrequencyDataHash) && ve.getFloatTimeDomainDataHash.includes(t.getFloatTimeDomainDataHash) && ve.copyFromChannelHash.includes(t.copyFromChannelHash) && ve.getChannelDataHash.includes(t.getChannelDataHash) && ve.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && ve.availHeightHash.includes(t.availHeightHash) && ve.availLeftHash.includes(t.availLeftHash) && ve.availTopHash.includes(t.availTopHash) && ve.availWidthHash.includes(t.availWidthHash) && ve.colorDepthHash.includes(t.colorDepthHash) && ve.pixelDepthHash.includes(t.pixelDepthHash)) return "DuckDuckGo";
    if (n >= 2 && wr.getImageDataHash.includes(t.getImageDataHash) && wr.toDataURLHash.includes(t.toDataURLHash)) return "Privacy Badger";
    if (n >= 3 && Tn.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Tn.availWidthHash.includes(t.availWidthHash) && Tn.colorDepthHash.includes(t.colorDepthHash)) return "Privacy Possum";
    if (n >= 2 && En.contentDocumentHash.includes(t.contentDocumentHash) && En.contentWindowHash.includes(t.contentDocumentHash) && En.getContextHash.includes(t.getContextHash) && t.hardwareConcurrencyHash == _e) return "NoScript";
    if (n >= 14 && Ne.contentDocumentHash.includes(t.contentDocumentHash) && Ne.contentWindowHash.includes(t.contentDocumentHash) && Ne.appendHash.includes(t.appendHash) && Ne.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Ne.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Ne.prependHash.includes(t.prependHash) && Ne.replaceWithHash.includes(t.replaceWithHash) && Ne.appendChildHash.includes(t.appendChildHash) && Ne.insertBeforeHash.includes(t.insertBeforeHash) && Ne.replaceChildHash.includes(t.replaceChildHash) && Ne.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "JShelter";
    if (n >= 13 && he.contentDocumentHash.includes(t.contentDocumentHash) && he.contentWindowHash.includes(t.contentWindowHash) && he.createElementHash.includes(t.createElementHash) && he.getElementByIdHash.includes(t.getElementByIdHash) && he.appendHash.includes(t.appendHash) && he.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && he.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && he.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && he.prependHash.includes(t.prependHash) && he.replaceWithHash.includes(t.replaceWithHash) && he.appendChildHash.includes(t.appendChildHash) && he.insertBeforeHash.includes(t.insertBeforeHash) && he.contentDocumentHash.includes(t.contentDocumentHash) && he.replaceChildHash.includes(t.replaceChildHash) && he.getContextHash.includes(t.getContextHash) && he.toDataURLHash.includes(t.toDataURLHash) && he.toBlobHash.includes(t.toBlobHash) && he.getImageDataHash.includes(t.getImageDataHash) && he.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "puppeteer-extra";
    if (n >= 12 && Re.appendChildHash.includes(t.appendChildHash) && Re.getContextHash.includes(t.getContextHash) && Re.toDataURLHash.includes(t.toDataURLHash) && Re.toBlobHash.includes(t.toBlobHash) && Re.getImageDataHash.includes(t.getImageDataHash) && Re.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Re.availHeightHash.includes(t.availHeightHash) && Re.availLeftHash.includes(t.availLeftHash) && Re.availTopHash.includes(t.availTopHash) && Re.availWidthHash.includes(t.availWidthHash) && Re.colorDepthHash.includes(t.colorDepthHash) && Re.pixelDepthHash.includes(t.pixelDepthHash)) return "FakeBrowser"
  }
}
async function ws() {
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
async function bs() {
  try {
    await ce();
    const t = Si(),
      n = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: pe ? "Blink" : vt ? "Gecko" : ""
      },
      [e, r] = await Promise.all([Yr(), pe ? void 0 : ws()]);
    if (e) {
      const c = si();
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
    return n.extensionHashPattern = s, n.extension = ys(i, a), n
  } catch (t) {
    ae(t);
    return
  }
}

function vs() {
  try {
    return "ontouchstart" in window && !!document.createEvent("TouchEvent")
  } catch {
    return !1
  }
}
let Sn;
async function Es() {
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
    r = Number(r), o = Number(o), a = Number(a), i = Number(i), s = Number(s), c = Number(c), Sn ? {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i
    } = Sn : Sn = {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i
    };
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
      touch: vs(),
      lied: n
    }
  } catch (t) {
    ae(t);
    return
  }
}

function Ts() {
  var e;
  const t = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (t) {
    const r = new t().resolvedOptions().timeZone;
    if (r) return r
  }
  const n = -Ss();
  return `UTC${n>=0?"+":""}${n}`
}

function Ss() {
  const t = new Date().getFullYear();
  return Math.max(new Date(t, 0, 1).getTimezoneOffset(), new Date(t, 6, 1).getTimezoneOffset())
}
const As = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
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
  Rs = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  Ds = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]);
async function Is() {
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
    !Xr && i && (p = i);
    const f = p.document;
    "OffscreenCanvas" in window ? (t = new p.OffscreenCanvas(256, 256), n = new p.OffscreenCanvas(256, 256)) : (t = f.createElement("canvas"), n = f.createElement("canvas"));
    const d = vr(t, "webgl"),
      g = vr(n, "webgl2");
    if (e = d, r = g, !d) return;
    const h = (k, M) => {
        if (!k) return;
        const z = x(() => k.getShaderPrecisionFormat(k[M], k.LOW_FLOAT)),
          ee = x(() => k.getShaderPrecisionFormat(k[M], k.MEDIUM_FLOAT)),
          me = x(() => k.getShaderPrecisionFormat(k[M], k.HIGH_FLOAT)),
          be = x(() => k.getShaderPrecisionFormat(k[M], k.HIGH_INT));
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
          z[k + "." + ee + ".precision"] = me ? x(() => me.precision) : void 0, z[k + "." + ee + ".rangeMax"] = me ? x(() => me.rangeMax) : void 0, z[k + "." + ee + ".rangeMin"] = me ? x(() => me.rangeMin) : void 0
        }
        return z
      },
      C = k => {
        const M = {};
        if (!k) return M;
        const z = k;
        for (const ee of As) {
          const me = z[ee];
          if (me === void 0) continue;
          const be = k.getParameter(me);
          be && ArrayBuffer.isView(be) ? M[ee] = Array.from(be) : M[ee] = be
        }
        return M
      },
      T = k => {
        if (!k) return [];
        const M = x(() => k.getContextAttributes());
        return M ? Object.keys(M).sort().map(z => `${z}=${M[z]}`) : []
      },
      D = k => {
        if (!k) return [];
        const M = [];
        for (const [z, ee] of Object.entries(Os)) {
          const me = x(() => k.getExtension(z));
          if (me)
            for (const be of ee) {
              const Ce = me[be];
              if (typeof Ce != "number") continue;
              if (!Rs.has(be)) {
                M.push(`${be}=${Ce}`);
                continue
              }
              const Se = x(() => k.getParameter(Ce));
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
        const M = x(() => k.getSupportedExtensions());
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
      !M || Ds.has(k) || "" + M != "" + w[k] && v.push(k)
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
    let P;
    if (E.parameters) {
      const k = new Set;
      for (const M in E.parameters) {
        const z = E.parameters[M];
        if (!(!z || typeof z == "string"))
          if (Array.isArray(z))
            for (const ee of z) k.add(Number(ee));
          else k.add(Number(z))
      }
      P = [...k].sort((M, z) => M - z)
    }
    const L = li((o = E.parameters) == null ? void 0 : o.UNMASKED_RENDERER_WEBGL),
      U = "" + P,
      Q = !L || !U ? void 0 : q([L, U]),
      ue = P ? P.reduce((k, M, z) => k ^ +M + z, 0) : void 0;
    We.webglParams = U, We.webglBrandCapabilities = Q, We.webglCapabilities = ue;
    const F = Q && !I.includes(Q),
      Oe = ue && !H.includes(ue);
    return F && (ke.WEBGL = !0, se("WebGLRenderingContext.getParameter", "suspicious gpu")), Oe && (ke.WEBGL = !0, se("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...E,
      gpu: {
        ...co((E.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: so((E.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (a) {
    ae(a);
    return
  } finally {
    br(t, e), br(n, r)
  }
}

function br(t, n) {
  var e;
  if (t) {
    try {
      (e = n == null ? void 0 : n.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    t.width = 0, t.height = 0, t instanceof HTMLCanvasElement && t.remove()
  }
}

function vr(t, n) {
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
async function Ns() {
  var n, e, r, o, a, i, s, c, _, u, p, f, d, g, h, y, C, T, D, S, N, A, w, v, E, I, H, P, L, U, Q, ue;
  const t = await Cs();
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
      listFormat: (P = t.intl) == null ? void 0 : P.listFormat,
      locale: (L = t.intl) == null ? void 0 : L.locale,
      numberFormat: (U = t.intl) == null ? void 0 : U.numberFormat,
      pluralRules: (Q = t.intl) == null ? void 0 : Q.pluralRules,
      relativeTimeFormat: (ue = t.intl) == null ? void 0 : ue.relativeTimeFormat
    },
    resistance: t.resistance,
    math: t.math
  }
}
async function Cs() {
  try {
    const [t, n, e, r, o, a, i, s, c, _, u, p, f, d] = await Promise.all([ge("offlineAudioContext", ji()), ge("canvasWebgl", Is()), ge("canvas2d", Vi()), ge("css", Promise.resolve(zi())), ge("cssMedia", Promise.resolve($i())), ge("screen", Es()), ge("consoleErrors", Promise.resolve(Ki())), ge("timezone", Promise.resolve(Ts())), ge("fonts", os()), ge("media", _s()), ge("resistance", bs()), ge("intl", ls()), ge("workerScope", Ui()), ge("maths", Promise.resolve(ri()))]), [g, h, y, C, T] = await Promise.all([ge("navigator", fs(f)), ge("headless", us({
      webgl: n
    })), ge("lies", Promise.resolve(Ai())), ge("trash", Promise.resolve(Ni())), ge("capturedErrors", Promise.resolve(ai()))]);
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
    Ti()
  }
}

function ge(t, n) {
  return n.catch(() => {})
}
let Qt;
async function ks() {
  if (Qt) try {
    return await Qt
  } catch {}
  return Qt = (async () => {
    var i, s, c, _, u, p, f, d, g, h, y, C, T, D, S, N, A, w, v, E, I, H, P, L, U, Q, ue, F, Oe, k, M, z, ee, me, be, Ce, Se, Xt, Yt, _t, W, V, Y, ie, le, de, He, xe, $e, Jt, zn, $n, qn, Kn, Xn, Yn, Jn, Qn, Zn, er;
    const t = await Ns();
    (i = t.navigator) != null && i.lied && t.screen && (t.screen.minDim = 0, t.screen.maxDim = 0);
    const n = To({
      userAgent: (s = t.workerScope) == null ? void 0 : s.userAgent
    });
    switch (/\bCrOS x86_64\b/.test(((c = t.workerScope) == null ? void 0 : c.userAgent) ?? "") && t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.emojiSet, delete t.canvas2d.textMetricsSystemSum, delete t.canvas2d.textURI), n) {
      case "Firefox":
        delete t.intl, t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI);
        break;
      case "Brave":
        t.navigator && (delete t.navigator.deviceMemory, delete t.navigator.hardwareConcurrency), t.workerScope && (delete t.workerScope.deviceMemory, delete t.workerScope.hardwareConcurrency), t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI), t.canvasWebgl && delete t.canvasWebgl.parameters, t.offlineAudioContext && (delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.floatTimeDomainDataSum, delete t.offlineAudioContext.sampleSum, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.noise), t.fonts && delete t.fonts;
        break;
      case "Safari":
        t.canvas2d && delete t.canvas2d.dataURI, t.offlineAudioContext && (delete t.offlineAudioContext.baseLatency, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.totalUniqueSamples, delete t.offlineAudioContext.noise), t.screen && (delete t.screen.minDim, delete t.screen.maxDim);
        break
    }
    const r = (_ = t.navigator) == null ? void 0 : _.lied;
    t.navigator && delete t.navigator.lied, t.workerScope && delete t.workerScope.userAgent;
    const o = await Promise.all([O(t.navigator), O(t.workerScope), O(t.screen), O(t.media), "a0", O(t.canvas2d), O(t.canvasWebgl), O(t.cssMedia), O(t.css), "47", O(t.timezone), O(t.offlineAudioContext), O(t.fonts), O(t.intl), O(t.math), "wF"]),
      a = await Promise.all([O((u = t.canvas2d) == null ? void 0 : u.dataURI), O((p = t.canvas2d) == null ? void 0 : p.emojiSet), O((f = t.canvas2d) == null ? void 0 : f.emojiURI), O((d = t.canvas2d) == null ? void 0 : d.paintURI), O((g = t.canvas2d) == null ? void 0 : g.textMetricsSystemSum), O((h = t.canvas2d) == null ? void 0 : h.textURI), "|", O((y = t.offlineAudioContext) == null ? void 0 : y.binsSample), O((C = t.offlineAudioContext) == null ? void 0 : C.compressorGainReduction), O((T = t.offlineAudioContext) == null ? void 0 : T.copySample), O((D = t.offlineAudioContext) == null ? void 0 : D.floatFrequencyDataSum), O((S = t.offlineAudioContext) == null ? void 0 : S.floatTimeDomainDataSum), O((N = t.offlineAudioContext) == null ? void 0 : N.lied), O((A = t.offlineAudioContext) == null ? void 0 : A.noise), O((w = t.offlineAudioContext) == null ? void 0 : w.totalUniqueSamples), O((v = t.offlineAudioContext) == null ? void 0 : v.values), "|", O(t.intl), "|", O((E = t.intl) == null ? void 0 : E.lied), O((I = t.intl) == null ? void 0 : I.listFormat), O((H = t.intl) == null ? void 0 : H.locale), O((P = t.intl) == null ? void 0 : P.numberFormat), O((L = t.intl) == null ? void 0 : L.pluralRules), O((U = t.intl) == null ? void 0 : U.relativeTimeFormat), "|", O(r), O((Q = t.navigator) == null ? void 0 : Q.applePay), O((ue = t.navigator) == null ? void 0 : ue.bluetoothAvailability), O((F = t.navigator) == null ? void 0 : F.deviceMemory), O((Oe = t.navigator) == null ? void 0 : Oe.hardwareConcurrency), O((k = t.navigator) == null ? void 0 : k.oscpu), O((M = t.navigator) == null ? void 0 : M.pdfViewerEnabled), O((z = t.navigator) == null ? void 0 : z.platform), O((ee = t.navigator) == null ? void 0 : ee.privateClickMeasurement), O((me = t.navigator) == null ? void 0 : me.vendor), "|", O((be = t.workerScope) == null ? void 0 : be.deviceMemory), O((Ce = t.workerScope) == null ? void 0 : Ce.hardwareConcurrency), O((Se = t.workerScope) == null ? void 0 : Se.platform), O((Xt = t.workerScope) == null ? void 0 : Xt.system), O((Yt = t.workerScope) == null ? void 0 : Yt.userAgentData), "|", O((_t = t.cssMedia) == null ? void 0 : _t.colorGamut), O((W = t.cssMedia) == null ? void 0 : W.contrast), O((V = t.cssMedia) == null ? void 0 : V.forcedColors), O((Y = t.cssMedia) == null ? void 0 : Y.hdr), O((ie = t.cssMedia) == null ? void 0 : ie.invertedColors), O((le = t.cssMedia) == null ? void 0 : le.monochrome), O((de = t.cssMedia) == null ? void 0 : de.reducedMotion), O((He = t.cssMedia) == null ? void 0 : He.reducedTransparency), "|", O((xe = t.canvasWebgl) == null ? void 0 : xe.contextAttributes2), O(($e = t.canvasWebgl) == null ? void 0 : $e.contextAttributes), O((Jt = t.canvasWebgl) == null ? void 0 : Jt.extensionParameters2), O((zn = t.canvasWebgl) == null ? void 0 : zn.extensionParameters), O(($n = t.canvasWebgl) == null ? void 0 : $n.extensions), O((qn = t.canvasWebgl) == null ? void 0 : qn.gpu), O((Kn = t.canvasWebgl) == null ? void 0 : Kn.lied), O((Xn = t.canvasWebgl) == null ? void 0 : Xn.parameterOrExtensionLie), O((Yn = t.canvasWebgl) == null ? void 0 : Yn.parameters), "|", O((Jn = t.screen) == null ? void 0 : Jn.colorDepth), O((Qn = t.screen) == null ? void 0 : Qn.pixelDepth), O((Zn = t.screen) == null ? void 0 : Zn.minDim), O((er = t.screen) == null ? void 0 : er.maxDim)]);
    return o.map(yn => yn.slice(0, 2)).join("").padEnd(32, "0").slice(0, 32) + "|" + a.map(yn => yn[0]).join("") + "|11"
  })(), Qt
}
const Er = "theme";
var Tt, St, At, Ot, Rt, Dt, It, Nt, Ct, kt;
class xs {
  constructor() {
    Z(this, Tt, fe(!1));
    Z(this, St, fe(!1));
    Z(this, At, fe(0));
    Z(this, Ot, fe(!1));
    Z(this, Rt, fe(an(Ps())));
    Z(this, Dt, fe(null));
    Z(this, It, fe(!1));
    Z(this, Nt, fe("custom-winter"));
    Z(this, Ct, fe(an(Date.now())));
    Z(this, kt, fe(void 0));
    setInterval(() => {
      oe(B(this, Ct), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Er), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
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
    oe(B(this, Nt), n, !0), localStorage.setItem(Er, n), document.documentElement.setAttribute("data-theme", n)
  }
  get now() {
    return re(B(this, Ct))
  }
  get captcha() {
    return Ls ? re(B(this, kt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(n) {
    oe(B(this, kt), n, !0)
  }
}
Tt = new WeakMap, St = new WeakMap, At = new WeakMap, Ot = new WeakMap, Rt = new WeakMap, Dt = new WeakMap, It = new WeakMap, Nt = new WeakMap, Ct = new WeakMap, kt = new WeakMap;
const lo = new xs;

function Ps() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(n => n.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Ls = So.toLowerCase() !== "false",
  Ms = `
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
async function Bs() {
  try {
    const t = await fetch(`${Hn}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!t.ok) return null;
    const n = await t.json(),
      e = await Hs(n.prefix, n.difficulty);
    return e ? {
      ...n,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Hs(t, n) {
  return new Promise(e => {
    const r = new Blob([Ms], {
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
const _o = 3;
var xt, Pt;
class Us {
  constructor() {
    Z(this, xt, fe(null));
    Z(this, Pt, fe(0))
  }
  get current() {
    return re(B(this, xt))
  }
  set current(n) {
    oe(B(this, xt), n, !0)
  }
  get errorCount() {
    return re(B(this, Pt))
  }
  set errorCount(n) {
    oe(B(this, Pt), n, !0)
  }
}
xt = new WeakMap, Pt = new WeakMap;
const Ae = new Us;
async function Tr(t) {
  if (t === 1) return Fs();
  if (t === 2) {
    const n = await fo();
    return n ? Sr("turnstile", n) : !1
  }
  if (t === 3) {
    const n = await js();
    return n ? Sr("hcaptcha", n) : !1
  }
  return t === 4 ? Gs() : !1
}
async function Fs() {
  for (let t = 0; t < _o; t++) try {
    const n = await Bs();
    if (!n) continue;
    return await Ve.verifyChallenge({
      type: "pow",
      challengeId: n.challengeId,
      nonce: n.nonce
    }), !0
  } catch {}
  return !1
}
async function Sr(t, n) {
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

function fo() {
  return po(2)
}

function js() {
  return po(3)
}

function po(t) {
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

function Gs() {
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

function tT(t) {
  const n = Ae.current;
  !n || n.tier === 4 || (n.resolve(t), Ae.current = null)
}

function nT() {
  const t = Ae.current;
  !t || t.tier === 4 || (Ae.errorCount += 1, Ae.errorCount >= _o && (t.resolve(void 0), Ae.current = null))
}

function rT() {
  const t = Ae.current;
  !t || t.tier !== 4 || (t.resolve(!0), Ae.current = null)
}

function oT() {
  const t = Ae.current;
  t && (t.tier === 4 ? t.resolve(!1) : t.resolve(void 0), Ae.current = null)
}
var l = (t => (t[t.CONTINUE = 100] = "CONTINUE", t[t.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", t[t.PROCESSING = 102] = "PROCESSING", t[t.EARLY_HINTS = 103] = "EARLY_HINTS", t[t.OK = 200] = "OK", t[t.CREATED = 201] = "CREATED", t[t.ACCEPTED = 202] = "ACCEPTED", t[t.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", t[t.NO_CONTENT = 204] = "NO_CONTENT", t[t.RESET_CONTENT = 205] = "RESET_CONTENT", t[t.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", t[t.MULTI_STATUS = 207] = "MULTI_STATUS", t[t.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", t[t.IM_USED = 226] = "IM_USED", t[t.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", t[t.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", t[t.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", t[t.FOUND = 302] = "FOUND", t[t.SEE_OTHER = 303] = "SEE_OTHER", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.USE_PROXY = 305] = "USE_PROXY", t[t.SWITCH_PROXY = 306] = "SWITCH_PROXY", t[t.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", t[t.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZED = 401] = "UNAUTHORIZED", t[t.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", t[t.FORBIDDEN = 403] = "FORBIDDEN", t[t.NOT_FOUND = 404] = "NOT_FOUND", t[t.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", t[t.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", t[t.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", t[t.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", t[t.CONFLICT = 409] = "CONFLICT", t[t.GONE = 410] = "GONE", t[t.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", t[t.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", t[t.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", t[t.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", t[t.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", t[t.URI_TOO_LONG = 414] = "URI_TOO_LONG", t[t.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", t[t.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", t[t.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", t[t.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", t[t.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", t[t.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", t[t.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", t[t.LOCKED = 423] = "LOCKED", t[t.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", t[t.TOO_EARLY = 425] = "TOO_EARLY", t[t.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", t[t.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", t[t.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", t[t.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", t[t.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", t[t.BAD_GATEWAY = 502] = "BAD_GATEWAY", t[t.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", t[t.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", t[t.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", t[t.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", t[t.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", t[t.LOOP_DETECTED = 508] = "LOOP_DETECTED", t[t.NOT_EXTENDED = 510] = "NOT_EXTENDED", t[t.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", t[t.AWS_ELB_000 = 0] = "AWS_ELB_000", t[t.THIS_IS_FINE = 218] = "THIS_IS_FINE", t[t.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", t[t.METHOD_FAILURE = 420] = "METHOD_FAILURE", t[t.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", t[t.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", t[t.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", t[t.NO_RESPONSE = 444] = "NO_RESPONSE", t[t.RETRY_WITH = 449] = "RETRY_WITH", t[t.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", t[t.REDIRECT_IIS = 451] = "REDIRECT_IIS", t[t.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", t[t.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", t[t.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", t[t.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", t[t.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", t[t.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", t[t.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", t[t.INVALID_TOKEN = 498] = "INVALID_TOKEN", t[t.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", t[t.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", t[t.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", t[t.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", t[t.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", t[t.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", t[t.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", t[t.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", t[t.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", t[t.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", t[t.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", t[t.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", t[t.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", t[t.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", t[t.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", t[t.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", t[t.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", t[t.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", t[t.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", t[t.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", t[t.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", t[t.REQUEST_DENIED = 999] = "REQUEST_DENIED", t))(l || {});
const Ws = () => "Your account has been suspended for breaking the rules",
  Vs = () => "Sua conta foi suspensa por quebrar as regras",
  zs = () => "您的账号因违反规则已被暂停",
  $s = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  qs = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Ks = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Xs = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Ys = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Js = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Qs = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Zs = () => "Ваш обліковий запис було призупинено за порушення правил",
  ec = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  tc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ws() : e === "pt" ? Vs() : e === "ch" ? zs() : e === "de" ? $s() : e === "es" ? qs() : e === "fr" ? Ks() : e === "it" ? Xs() : e === "jp" ? Ys() : e === "pl" ? Js() : e === "ru" ? Qs() : e === "uk" ? Zs() : ec()
  },
  nc = () => "Alliance name already taken",
  rc = () => "Já possui uma aliança com esse nome",
  oc = () => "该联盟名称已被占用",
  ac = () => "Der Allianzname ist bereits vergeben",
  ic = () => "Ese nombre de alianza ya está en uso",
  sc = () => "Ce nom d’alliance est déjà pris",
  cc = () => "Esiste già un'alleanza con questo nome",
  uc = () => "このアライアンス名は既に使用されています。",
  lc = () => "Nazwa sojuszu jest już zajęta",
  dc = () => "Такое название альянса уже используется",
  _c = () => "Назва альянсу вже зайнята",
  fc = () => "Tên liên minh đã được sử dụng",
  pc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? nc() : e === "pt" ? rc() : e === "ch" ? oc() : e === "de" ? ac() : e === "es" ? ic() : e === "fr" ? sc() : e === "it" ? cc() : e === "jp" ? uc() : e === "pl" ? lc() : e === "ru" ? dc() : e === "uk" ? _c() : fc()
  },
  mc = () => "Alliance name exceeded the maximum number of characters",
  hc = () => "O nome da aliança excedeu o número máximo de caracteres",
  gc = () => "联盟名称超过最大字符数限制",
  yc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  wc = () => "El nombre de la alianza superó el número máximo de caracteres",
  bc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  vc = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Ec = () => "アライアンス名が最大文字数を超えています。",
  Tc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Sc = () => "Название альянса превышает максимальную длину",
  Ac = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Oc = () => "Tên liên minh vượt quá số ký tự cho phép",
  Rc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? mc() : e === "pt" ? hc() : e === "ch" ? gc() : e === "de" ? yc() : e === "es" ? wc() : e === "fr" ? bc() : e === "it" ? vc() : e === "jp" ? Ec() : e === "pl" ? Tc() : e === "ru" ? Sc() : e === "uk" ? Ac() : Oc()
  },
  Dc = () => "Alliance with empty name",
  Ic = () => "Aliança com nome vazio",
  Nc = () => "名称为空的联盟",
  Cc = () => "Allianz mit leerem Namen",
  kc = () => "Alianza con nombre vacío",
  xc = () => "Alliance avec nom vide",
  Pc = () => "Alleanza con nome vuoto",
  Lc = () => "名前が空のアライアンスです。",
  Mc = () => "Sojusz z pustą nazwą",
  Bc = () => "Альянс с пустым названием",
  Hc = () => "Альянс із порожньою назвою",
  Uc = () => "Liên minh không có tên",
  Fc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Dc() : e === "pt" ? Ic() : e === "ch" ? Nc() : e === "de" ? Cc() : e === "es" ? kc() : e === "fr" ? xc() : e === "it" ? Pc() : e === "jp" ? Lc() : e === "pl" ? Mc() : e === "ru" ? Bc() : e === "uk" ? Hc() : Uc()
  },
  jc = () => "Botting",
  Gc = () => "Uso de bots",
  Wc = () => "脚本",
  Vc = () => "Bot-Nutzung",
  zc = () => "Botting",
  $c = () => "Bots",
  qc = () => "Uso di bot",
  Kc = () => "ボット使用",
  Xc = () => "Botting",
  Yc = () => "Боттинг",
  Jc = () => "Боти",
  Qc = () => "Botting",
  Zc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? jc() : e === "pt" ? Gc() : e === "ch" ? Wc() : e === "de" ? Vc() : e === "es" ? zc() : e === "fr" ? $c() : e === "it" ? qc() : e === "jp" ? Kc() : e === "pl" ? Xc() : e === "ru" ? Yc() : e === "uk" ? Jc() : Qc()
  },
  eu = () => "Use of software to completely automate painting",
  tu = () => "Uso de software para pintar de forma completamente automatizada ",
  nu = () => "使用软件完全自动化绘制",
  ru = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  ou = () => "Uso de software para automatizar completamente la pintura",
  au = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  iu = () => "Uso di software per dipingere in modo completamente automatizzato",
  su = () => "ペイントを完全に自動化するソフトウェアの使用",
  cu = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  uu = () => "Использование программ для полной автоматизации рисования",
  lu = () => "Використання програм, які повністю автоматизують малювання",
  du = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  _u = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? eu() : e === "pt" ? tu() : e === "ch" ? nu() : e === "de" ? ru() : e === "es" ? ou() : e === "fr" ? au() : e === "it" ? iu() : e === "jp" ? su() : e === "pl" ? cu() : e === "ru" ? uu() : e === "uk" ? lu() : du()
  },
  fu = () => "Breaking the rules",
  pu = () => "Quebrar as regras",
  mu = () => "违反规则",
  hu = () => "Regeln brechen",
  gu = () => "Romper las reglas",
  yu = () => "Violation des règles",
  wu = () => "Violazione delle regole",
  bu = () => "ルール違反",
  vu = () => "Łamanie zasad",
  Eu = () => "Нарушение правил",
  Tu = () => "Порушення правил",
  Su = () => "Vi phạm luật",
  Au = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? fu() : e === "pt" ? pu() : e === "ch" ? mu() : e === "de" ? hu() : e === "es" ? gu() : e === "fr" ? yu() : e === "it" ? wu() : e === "jp" ? bu() : e === "pl" ? vu() : e === "ru" ? Eu() : e === "uk" ? Tu() : Su()
  },
  Ou = () => "You have broken one of Wplace's rules",
  Ru = () => "Você quebrou uma das regras do Wplace",
  Du = () => "你违反了 Wplace 的一项规则",
  Iu = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Nu = () => "Has infringido una de las reglas de Wplace",
  Cu = () => "Vous avez enfreint l’une des règles de Wplace",
  ku = () => "Hai infranto una delle regole di Wplace",
  xu = () => "Wplaceのルールのいずれかに違反しました。",
  Pu = () => "Złamałeś jedną z zasad Wplace",
  Lu = () => "Вы нарушили одно из правил Wplace",
  Mu = () => "Ви порушили одне з правил Wplace",
  Bu = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Hu = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ou() : e === "pt" ? Ru() : e === "ch" ? Du() : e === "de" ? Iu() : e === "es" ? Nu() : e === "fr" ? Cu() : e === "it" ? ku() : e === "jp" ? xu() : e === "pl" ? Pu() : e === "ru" ? Lu() : e === "uk" ? Mu() : Bu()
  },
  Uu = () => "You cannot paint over event pixels",
  Fu = () => "Você não pode pintar sobre pixels de eventos",
  ju = () => "你不能覆盖活动像素",
  Gu = () => "Du kannst nicht über Event-Pixel malen",
  Wu = () => "No puedes pintar sobre píxeles de evento",
  Vu = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  zu = () => "Non puoi dipingere sopra i pixel dell'evento",
  $u = () => "イベント用のピクセルの上には塗れません。",
  qu = () => "Nie możesz malować po pikselach wydarzenia",
  Ku = () => "Вы не можете рисовать по пикселям события",
  Xu = () => "Ви не можете малювати поверх пікселів події",
  Yu = () => "Bạn không thể tô lên pixel sự kiện",
  Ar = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Uu() : e === "pt" ? Fu() : e === "ch" ? ju() : e === "de" ? Gu() : e === "es" ? Wu() : e === "fr" ? Vu() : e === "it" ? zu() : e === "jp" ? $u() : e === "pl" ? qu() : e === "ru" ? Ku() : e === "uk" ? Xu() : Yu()
  },
  Ju = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Qu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Zu = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  el = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  tl = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  nl = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  rl = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  ol = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  al = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  il = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  sl = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  cl = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  ul = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ju() : e === "pt" ? Qu() : e === "ch" ? Zu() : e === "de" ? el() : e === "es" ? tl() : e === "fr" ? nl() : e === "it" ? rl() : e === "jp" ? ol() : e === "pl" ? al() : e === "ru" ? il() : e === "uk" ? sl() : cl()
  },
  ll = () => "Challenge verification not completed",
  dl = () => "Verificação do desafio não concluída",
  _l = () => "挑战验证未完成",
  fl = () => "Herausforderungsverifizierung nicht abgeschlossen",
  pl = () => "Verificación del desafío no completada",
  ml = () => "Vérification du défi non terminée",
  hl = () => "Verifica della sfida non completata",
  gl = () => "チャレンジ検証が完了していません",
  yl = () => "Weryfikacja wyzwania niezakończona",
  wl = () => "Верификация вызова не завершена",
  bl = () => "Перевірку виклику не завершено",
  vl = () => "Xác minh thử thách chưa hoàn thành",
  An = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ll() : e === "pt" ? dl() : e === "ch" ? _l() : e === "de" ? fl() : e === "es" ? pl() : e === "fr" ? ml() : e === "it" ? hl() : e === "jp" ? gl() : e === "pl" ? yl() : e === "ru" ? wl() : e === "uk" ? bl() : vl()
  },
  El = () => "Couldn't complete the purchase. This item does not exist.",
  Tl = () => "Não foi possível concluir a compra. Este item não existe.",
  Sl = () => "无法完成购买。该物品不存在。",
  Al = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Ol = () => "No se pudo completar la compra. Este ítem no existe.",
  Rl = () => "Achat impossible. Cet objet n’existe pas.",
  Dl = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Il = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Nl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Cl = () => "Не удалось завершить покупку. Этот предмет не существует.",
  kl = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  xl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Or = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? El() : e === "pt" ? Tl() : e === "ch" ? Sl() : e === "de" ? Al() : e === "es" ? Ol() : e === "fr" ? Rl() : e === "it" ? Dl() : e === "jp" ? Il() : e === "pl" ? Nl() : e === "ru" ? Cl() : e === "uk" ? kl() : xl()
  },
  Pl = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Ll = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Ml = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Bl = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Hl = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Ul = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Fl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  jl = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Gl = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  Wl = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Vl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  zl = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  $l = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Pl() : e === "pt" ? Ll() : e === "ch" ? Ml() : e === "de" ? Bl() : e === "es" ? Hl() : e === "fr" ? Ul() : e === "it" ? Fl() : e === "jp" ? jl() : e === "pl" ? Gl() : e === "ru" ? Wl() : e === "uk" ? Vl() : zl()
  },
  ql = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Kl = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Xl = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Yl = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Jl = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Ql = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Zl = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  ed = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  td = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  nd = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  rd = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  od = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Rr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ql() : e === "pt" ? Kl() : e === "ch" ? Xl() : e === "de" ? Yl() : e === "es" ? Jl() : e === "fr" ? Ql() : e === "it" ? Zl() : e === "jp" ? ed() : e === "pl" ? td() : e === "ru" ? nd() : e === "uk" ? rd() : od()
  },
  ad = () => "Doxxing",
  id = () => "Doxxing",
  sd = () => "人肉搜索",
  cd = () => "Doxxing",
  ud = () => "Doxxing",
  ld = () => "Doxxing",
  dd = () => "Doxxing",
  _d = () => "ドックス（Doxxing）",
  fd = () => "Doxxing",
  pd = () => "Докcинг",
  md = () => "Докcинг",
  hd = () => "Doxxing",
  gd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ad() : e === "pt" ? id() : e === "ch" ? sd() : e === "de" ? cd() : e === "es" ? ud() : e === "fr" ? ld() : e === "it" ? dd() : e === "jp" ? _d() : e === "pl" ? fd() : e === "ru" ? pd() : e === "uk" ? md() : hd()
  },
  yd = () => "Released other's personal information without their consent",
  wd = () => "Vazar informações pessoais de terceiros sem consentimento",
  bd = () => "在未获同意的情况下公开他人个人信息",
  vd = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Ed = () => "Divulgó información personal de otra persona sin su consentimiento",
  Td = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Sd = () => "Diffusione di informazioni personali di terzi senza consenso",
  Ad = () => "他人の個人情報を同意なく公開した。",
  Od = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Rd = () => "Публикация личной информации других людей без их согласия",
  Dd = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Id = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Nd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? yd() : e === "pt" ? wd() : e === "ch" ? bd() : e === "de" ? vd() : e === "es" ? Ed() : e === "fr" ? Td() : e === "it" ? Sd() : e === "jp" ? Ad() : e === "pl" ? Od() : e === "ru" ? Rd() : e === "uk" ? Dd() : Id()
  },
  Cd = () => "This email is already in use.",
  kd = () => "Este e-mail já está em uso.",
  xd = () => "This email is already in use.",
  Pd = () => "This email is already in use.",
  Ld = () => "Este correo electrónico ya está en uso.",
  Md = () => "This email is already in use.",
  Bd = () => "Questa email è già in uso.",
  Hd = () => "This email is already in use.",
  Ud = () => "This email is already in use.",
  Fd = () => "This email is already in use.",
  jd = () => "This email is already in use.",
  Gd = () => "This email is already in use.",
  Wd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Cd() : e === "pt" ? kd() : e === "ch" ? xd() : e === "de" ? Pd() : e === "es" ? Ld() : e === "fr" ? Md() : e === "it" ? Bd() : e === "jp" ? Hd() : e === "pl" ? Ud() : e === "ru" ? Fd() : e === "uk" ? jd() : Gd()
  },
  Vd = t => `This email is already in use by user #${t.userId}.`,
  zd = t => `Este e-mail já está em uso pelo usuário #${t.userId}.`,
  $d = t => `This email is already in use by user #${t.userId}.`,
  qd = t => `This email is already in use by user #${t.userId}.`,
  Kd = t => `Este correo electrónico ya está en uso por el usuario #${t.userId}.`,
  Xd = t => `This email is already in use by user #${t.userId}.`,
  Yd = t => `Questa email è già in uso dall'utente #${t.userId}.`,
  Jd = t => `This email is already in use by user #${t.userId}.`,
  Qd = t => `This email is already in use by user #${t.userId}.`,
  Zd = t => `This email is already in use by user #${t.userId}.`,
  e_ = t => `This email is already in use by user #${t.userId}.`,
  t_ = t => `This email is already in use by user #${t.userId}.`,
  n_ = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Vd(t) : e === "pt" ? zd(t) : e === "ch" ? $d(t) : e === "de" ? qd(t) : e === "es" ? Kd(t) : e === "fr" ? Xd(t) : e === "it" ? Yd(t) : e === "jp" ? Jd(t) : e === "pl" ? Qd(t) : e === "ru" ? Zd(t) : e === "uk" ? e_(t) : t_(t)
  },
  r_ = () => "Enter a valid email address.",
  o_ = () => "Informe um endereço de e-mail válido.",
  a_ = () => "Enter a valid email address.",
  i_ = () => "Enter a valid email address.",
  s_ = () => "Introduce una dirección de correo electrónico válida.",
  c_ = () => "Enter a valid email address.",
  u_ = () => "Inserisci un indirizzo email valido.",
  l_ = () => "Enter a valid email address.",
  d_ = () => "Enter a valid email address.",
  __ = () => "Enter a valid email address.",
  f_ = () => "Enter a valid email address.",
  p_ = () => "Enter a valid email address.",
  m_ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? r_() : e === "pt" ? o_() : e === "ch" ? a_() : e === "de" ? i_() : e === "es" ? s_() : e === "fr" ? c_() : e === "it" ? u_() : e === "jp" ? l_() : e === "pl" ? d_() : e === "ru" ? __() : e === "uk" ? f_() : p_()
  },
  h_ = t => `Error while painting: ${t.err}`,
  g_ = t => `Erro enquanto pinta: ${t.err}`,
  y_ = t => `绘制时出错：${t.err}`,
  w_ = t => `Fehler beim Malen: ${t.err}`,
  b_ = t => `Error al pintar: ${t.err}`,
  v_ = t => `Erreur lors de la peinture : ${t.err}`,
  E_ = t => `Errore durante la pittura: ${t.err}`,
  T_ = t => `ペイント中にエラーが発生しました: ${t.err}`,
  S_ = t => `Błąd podczas malowania: ${t.err}`,
  A_ = t => `Ошибка при рисовании: ${t.err}`,
  O_ = t => `Помилка під час малювання: ${t.err}`,
  R_ = t => `Lỗi khi tô: ${t.err}`,
  D_ = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? h_(t) : e === "pt" ? g_(t) : e === "ch" ? y_(t) : e === "de" ? w_(t) : e === "es" ? b_(t) : e === "fr" ? v_(t) : e === "it" ? E_(t) : e === "jp" ? T_(t) : e === "pl" ? S_(t) : e === "ru" ? A_(t) : e === "uk" ? O_(t) : R_(t)
  },
  I_ = () => "Exceeded maximum number of characters",
  N_ = () => "Excedeu o número máximo de caracteres permitidos",
  C_ = () => "超出最大字符数",
  k_ = () => "Maximale Zeichenanzahl überschritten",
  x_ = () => "Se excedió el número máximo de caracteres",
  P_ = () => "Nombre maximal de caractères dépassé",
  L_ = () => "Numero massimo di caratteri superato",
  M_ = () => "最大文字数を超過しました",
  B_ = () => "Przekroczono maksymalną liczbę znaków",
  H_ = () => "Превышено максимальное количество символов",
  U_ = () => "Перевищено максимальну кількість символів",
  F_ = () => "Đã vượt quá số ký tự tối đa",
  j_ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? I_() : e === "pt" ? N_() : e === "ch" ? C_() : e === "de" ? k_() : e === "es" ? x_() : e === "fr" ? P_() : e === "it" ? L_() : e === "jp" ? M_() : e === "pl" ? B_() : e === "ru" ? H_() : e === "uk" ? U_() : F_()
  },
  G_ = () => "Verification code expired. Please request a new one.",
  W_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  V_ = () => "验证码已过期，请重新获取。",
  z_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  $_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  q_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  K_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  X_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  Y_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  J_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Q_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  Z_ = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  ef = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? G_() : e === "pt" ? W_() : e === "ch" ? V_() : e === "de" ? z_() : e === "es" ? $_() : e === "fr" ? q_() : e === "it" ? K_() : e === "jp" ? X_() : e === "pl" ? Y_() : e === "ru" ? J_() : e === "uk" ? Q_() : Z_()
  },
  tf = () => "Griefing",
  nf = () => "Griefing",
  rf = () => "破坏行为",
  of = () => "Griefing",
  af = () => "Griefing",
  sf = () => "Griefing",
  cf = () => "Griefing",
  uf = () => "グリーフィング",
  lf = () => "Griefing",
  df = () => "Гриферство",
  _f = () => "Гріфінг",
  ff = () => "Griefing",
  pf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? tf() : e === "pt" ? nf() : e === "ch" ? rf() : e === "de" ? of() : e === "es" ? af() : e === "fr" ? sf() : e === "it" ? cf() : e === "jp" ? uf() : e === "pl" ? lf() : e === "ru" ? df() : e === "uk" ? _f() : ff()
  },
  mf = () => "Messed up with other's artworks",
  hf = () => "Estragou os desenhos dos outros",
  gf = () => "破坏了他人的作品",
  yf = () => "Kunstwerke anderer beschädigt",
  wf = () => "Arruinó las obras de arte de otros",
  bf = () => "A abîmé les œuvres des autres",
  vf = () => "Ha rovinato i disegni degli altri",
  Ef = () => "他人の作品を荒らした",
  Tf = () => "Zniszczył prace innych",
  Sf = () => "Испортил чужие рисунки",
  Af = () => "Зіпсував роботи інших",
  Of = () => "Phá hỏng tranh của người khác",
  Rf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? mf() : e === "pt" ? hf() : e === "ch" ? gf() : e === "de" ? yf() : e === "es" ? wf() : e === "fr" ? bf() : e === "it" ? vf() : e === "jp" ? Ef() : e === "pl" ? Tf() : e === "ru" ? Sf() : e === "uk" ? Af() : Of()
  },
  Df = () => "Hate speech",
  If = () => "Discurso de Ódio",
  Nf = () => "仇恨言论",
  Cf = () => "Hassrede",
  kf = () => "Discurso de odio",
  xf = () => "Discours haineux",
  Pf = () => "Discorso d'odio",
  Lf = () => "ヘイトスピーチ",
  Mf = () => "Mowa nienawiści",
  Bf = () => "Речь ненависти",
  Hf = () => "Мова ворожнечі",
  Uf = () => "Ngôn từ thù hằn",
  Ff = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Df() : e === "pt" ? If() : e === "ch" ? Nf() : e === "de" ? Cf() : e === "es" ? kf() : e === "fr" ? xf() : e === "it" ? Pf() : e === "jp" ? Lf() : e === "pl" ? Mf() : e === "ru" ? Bf() : e === "uk" ? Hf() : Uf()
  },
  jf = () => "Racism, homophobia, hate groups, ...",
  Gf = () => "Racismo, homofobia, grupos de ódio, ...",
  Wf = () => "种族主义、恐同、仇恨团体等",
  Vf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  zf = () => "Racismo, homofobia, grupos de odio, ...",
  $f = () => "Racisme, homophobie, groupes haineux, ...",
  qf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Kf = () => "人種差別、同性愛差別、ヘイト団体など。",
  Xf = () => "Rasizm, homofobia, grupy nienawiści, ...",
  Yf = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Jf = () => "Расизм, гомофобія, групи ненависті, ...",
  Qf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Zf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? jf() : e === "pt" ? Gf() : e === "ch" ? Wf() : e === "de" ? Vf() : e === "es" ? zf() : e === "fr" ? $f() : e === "it" ? qf() : e === "jp" ? Kf() : e === "pl" ? Xf() : e === "ru" ? Yf() : e === "uk" ? Jf() : Qf()
  },
  ep = () => "Inappropriate content",
  tp = () => "Conteúdo inapropriado",
  np = () => "不当内容",
  rp = () => "Unangemessene Inhalte",
  op = () => "Contenido inapropiado",
  ap = () => "Contenu inapproprié",
  ip = () => "Contenuto inappropriato",
  sp = () => "不適切なコンテンツ",
  cp = () => "Nieodpowiednie treści",
  up = () => "Неприемлемый контент",
  lp = () => "Неприйнятний вміст",
  dp = () => "Nội dung không phù hợp",
  _p = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ep() : e === "pt" ? tp() : e === "ch" ? np() : e === "de" ? rp() : e === "es" ? op() : e === "fr" ? ap() : e === "it" ? ip() : e === "jp" ? sp() : e === "pl" ? cp() : e === "ru" ? up() : e === "uk" ? lp() : dp()
  },
  fp = () => "Explicit, hateful, or illegal content",
  pp = () => "Conteúdo explícito, de ódio ou ilegal",
  mp = () => "露骨、仇恨或非法内容",
  hp = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  gp = () => "Contenido explícito, de odio o ilegal",
  yp = () => "Contenu explicite, haineux ou illégal",
  wp = () => "Contenuto esplicito, d'odio o illegale",
  bp = () => "露骨、差別的、または違法なコンテンツ",
  vp = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  Ep = () => "Откровенный, разжигающий ненависть или незаконный контент",
  Tp = () => "Відвертий, ворожий або незаконний вміст",
  Sp = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Ap = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? fp() : e === "pt" ? pp() : e === "ch" ? mp() : e === "de" ? hp() : e === "es" ? gp() : e === "fr" ? yp() : e === "it" ? wp() : e === "jp" ? bp() : e === "pl" ? vp() : e === "ru" ? Ep() : e === "uk" ? Tp() : Sp()
  },
  Op = () => "Invalid captcha. Please try again.",
  Rp = () => "Captcha inválido. Por favor, tente novamente.",
  Dp = () => "验证码无效，请重试。",
  Ip = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Np = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Cp = () => "Captcha invalide. Veuillez réessayer.",
  kp = () => "Captcha non valido. Riprova.",
  xp = () => "キャプチャが無効です。もう一度お試しください。",
  Pp = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Lp = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Mp = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Bp = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Hp = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Op() : e === "pt" ? Rp() : e === "ch" ? Dp() : e === "de" ? Ip() : e === "es" ? Np() : e === "fr" ? Cp() : e === "it" ? kp() : e === "jp" ? xp() : e === "pl" ? Pp() : e === "ru" ? Lp() : e === "uk" ? Mp() : Bp()
  },
  Up = () => "Invalid challenge response",
  Fp = () => "Resposta de desafio inválida",
  jp = () => "质询响应无效",
  Gp = () => "Ungültige Challenge-Antwort",
  Wp = () => "Respuesta de desafío inválida",
  Vp = () => "Réponse au défi invalide",
  zp = () => "Risposta alla sfida non valida",
  $p = () => "無効なチャレンジ応答",
  qp = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Kp = () => "Неверный ответ на вызов",
  Xp = () => "Недійсна відповідь на виклик",
  Yp = () => "Phản hồi thử thách không hợp lệ",
  Jp = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Up() : e === "pt" ? Fp() : e === "ch" ? jp() : e === "de" ? Gp() : e === "es" ? Wp() : e === "fr" ? Vp() : e === "it" ? zp() : e === "jp" ? $p() : e === "pl" ? qp() : e === "ru" ? Kp() : e === "uk" ? Xp() : Yp()
  },
  Qp = () => "The verification code is incorrect. Please check it and try again.",
  Zp = () => "Código inválido",
  em = () => "验证码不正确。请检查后重试。",
  tm = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  nm = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  rm = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  om = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  am = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  im = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  sm = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  cm = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  um = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  lm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Qp() : e === "pt" ? Zp() : e === "ch" ? em() : e === "de" ? tm() : e === "es" ? nm() : e === "fr" ? rm() : e === "it" ? om() : e === "jp" ? am() : e === "pl" ? im() : e === "ru" ? sm() : e === "uk" ? cm() : um()
  },
  dm = () => "Invalid discord.",
  _m = () => "Discord inválido.",
  fm = () => "无效的 Discord。",
  pm = () => "Ungültiger Discord.",
  mm = () => "Discord inválido.",
  hm = () => "Discord invalide.",
  gm = () => "Discord non valido.",
  ym = () => "無効なDiscordアカウントです。",
  wm = () => "Nieprawidłowy Discord.",
  bm = () => "Неверный Discord.",
  vm = () => "Некоректний Discord.",
  Em = () => "Discord không hợp lệ.",
  Tm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? dm() : e === "pt" ? _m() : e === "ch" ? fm() : e === "de" ? pm() : e === "es" ? mm() : e === "fr" ? hm() : e === "it" ? gm() : e === "jp" ? ym() : e === "pl" ? wm() : e === "ru" ? bm() : e === "uk" ? vm() : Em()
  },
  Sm = () => "The name contains disallowed characters or words. Please choose a different name.",
  Am = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Om = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Rm = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Dm = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Im = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Nm = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Cm = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  km = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  xm = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Pm = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Lm = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Dr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Sm() : e === "pt" ? Am() : e === "ch" ? Om() : e === "de" ? Rm() : e === "es" ? Dm() : e === "fr" ? Im() : e === "it" ? Nm() : e === "jp" ? Cm() : e === "pl" ? km() : e === "ru" ? xm() : e === "uk" ? Pm() : Lm()
  },
  Mm = () => "Please enter a valid phone number with country code.",
  Bm = () => "Insira um número de telefone válido com código do país.",
  Hm = () => "请输入带国家代码的有效电话号码。",
  Um = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Fm = () => "Introduce un número de teléfono válido con código de país.",
  jm = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Gm = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Wm = () => "国番号付きの有効な電話番号を入力してください。",
  Vm = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  zm = () => "Введите действительный номер телефона с кодом страны.",
  $m = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  qm = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Km = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Mm() : e === "pt" ? Bm() : e === "ch" ? Hm() : e === "de" ? Um() : e === "es" ? Fm() : e === "fr" ? jm() : e === "it" ? Gm() : e === "jp" ? Wm() : e === "pl" ? Vm() : e === "ru" ? zm() : e === "uk" ? $m() : qm()
  },
  Xm = () => "Phone number not supported. Please try another number.",
  Ym = () => "Número de telefone não suportado. Por favor, tente outro número.",
  Jm = () => "不支持此电话号码。请尝试其他号码。",
  Qm = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  Zm = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  eh = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  th = () => "Numero di telefono non supportato. Prova con un altro numero.",
  nh = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  rh = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  oh = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  ah = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  ih = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  sh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Xm() : e === "pt" ? Ym() : e === "ch" ? Jm() : e === "de" ? Qm() : e === "es" ? Zm() : e === "fr" ? eh() : e === "it" ? th() : e === "jp" ? nh() : e === "pl" ? rh() : e === "ru" ? oh() : e === "uk" ? ah() : ih()
  },
  ch = () => "The new leader must be a member of the alliance",
  uh = () => "O novo líder deve ser um membro da aliança",
  lh = () => "新盟主必须是联盟成员",
  dh = () => "Der neue Anführer muss Mitglied der Allianz sein",
  _h = () => "El nuevo líder debe ser miembro de la alianza",
  fh = () => "Le nouveau chef doit être membre de l’alliance",
  ph = () => "Il nuovo leader deve essere un membro dell'alleanza",
  mh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  hh = () => "Nowy lider musi być członkiem sojuszu",
  gh = () => "Новый лидер должен быть участником альянса",
  yh = () => "Новий лідер має бути учасником альянсу",
  wh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  bh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ch() : e === "pt" ? uh() : e === "ch" ? lh() : e === "de" ? dh() : e === "es" ? _h() : e === "fr" ? fh() : e === "it" ? ph() : e === "jp" ? mh() : e === "pl" ? hh() : e === "ru" ? gh() : e === "uk" ? yh() : wh()
  },
  vh = () => "Leaderboard is temporarily disabled",
  Eh = () => "O ranking está temporariamente desativado",
  Th = () => "排行榜已暂时停用",
  Sh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Ah = () => "La clasificación está deshabilitada temporalmente",
  Oh = () => "Le classement est temporairement désactivé",
  Rh = () => "La classifica è temporaneamente disattivata",
  Dh = () => "ランキングは一時的に無効になっています。",
  Ih = () => "Ranking jest tymczasowo wyłączony",
  Nh = () => "Таблица лидеров временно отключена",
  Ch = () => "Таблиця лідерів тимчасово вимкнена",
  kh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  Xe = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? vh() : e === "pt" ? Eh() : e === "ch" ? Th() : e === "de" ? Sh() : e === "es" ? Ah() : e === "fr" ? Oh() : e === "it" ? Rh() : e === "jp" ? Dh() : e === "pl" ? Ih() : e === "ru" ? Nh() : e === "uk" ? Ch() : kh()
  },
  xh = () => "Location name is too big (max. 128 characters)",
  Ph = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Lh = () => "位置名称过长（最大 128 个字符）",
  Mh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Bh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Hh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Uh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Fh = () => "場所の名前が長すぎます（最大128文字）。",
  jh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Gh = () => "Название локации слишком длинное (макс. 128 символов)",
  Wh = () => "Назва локації надто довга (макс. 128 символів)",
  Vh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  zh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? xh() : e === "pt" ? Ph() : e === "ch" ? Lh() : e === "de" ? Mh() : e === "es" ? Bh() : e === "fr" ? Hh() : e === "it" ? Uh() : e === "jp" ? Fh() : e === "pl" ? jh() : e === "ru" ? Gh() : e === "uk" ? Wh() : Vh()
  },
  $h = () => "Multi-accounting",
  qh = () => "Múltiplas contas",
  Kh = () => "多账号",
  Xh = () => "Multi-Accounting",
  Yh = () => "Multi-cuentas",
  Jh = () => "Multi-comptes",
  Qh = () => "Multi-account",
  Zh = () => "複数アカウント使用",
  eg = () => "Multi-konta",
  tg = () => "Мультиаккаунт",
  ng = () => "Мультиакаунтинг",
  rg = () => "Nhiều tài khoản",
  og = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? $h() : e === "pt" ? qh() : e === "ch" ? Kh() : e === "de" ? Xh() : e === "es" ? Yh() : e === "fr" ? Jh() : e === "it" ? Qh() : e === "jp" ? Zh() : e === "pl" ? eg() : e === "ru" ? tg() : e === "uk" ? ng() : rg()
  },
  ag = () => "Use more than one account to paint pixels",
  ig = () => "Usar mais de uma conta para pintar",
  sg = () => "使用多个账号绘制像素",
  cg = () => "Mehr als ein Konto zum Malen verwenden",
  ug = () => "Uso de más de una cuenta para pintar píxeles",
  lg = () => "Utiliser plus d’un compte pour peindre",
  dg = () => "Usare più di un account per dipingere",
  _g = () => "複数のアカウントを使ってピクセルを塗った。",
  fg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  pg = () => "Использование более одного аккаунта для рисования",
  mg = () => "Використання більше ніж одного акаунта для малювання",
  hg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  gg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ag() : e === "pt" ? ig() : e === "ch" ? sg() : e === "de" ? cg() : e === "es" ? ug() : e === "fr" ? lg() : e === "it" ? dg() : e === "jp" ? _g() : e === "pl" ? fg() : e === "ru" ? pg() : e === "uk" ? mg() : hg()
  },
  yg = t => `You can change your name again in ${t.days} days`,
  wg = t => `Você pode alterar seu nome novamente em ${t.days} dias.`,
  bg = t => `你可以在 ${t.days} 天后再次修改名称`,
  vg = t => `Du kannst deinen Namen in ${t.days} Tagen erneut ändern`,
  Eg = t => `Podrás cambiar tu nombre de nuevo en ${t.days} días`,
  Tg = t => `Vous pourrez changer votre nom à nouveau dans ${t.days} jours`,
  Sg = t => `Potrai cambiare di nuovo il tuo nome tra ${t.days} giorni.`,
  Ag = t => `${t.days}日後に再び名前を変更できます。`,
  Og = t => `Następną zmianę nazwy możesz wykonać za ${t.days} dni`,
  Rg = t => `Вы сможете изменить имя снова через ${t.days} дн.`,
  Dg = t => `Ви зможете змінити імʼя знову через ${t.days} днів`,
  Ig = t => `Bạn có thể đổi tên lại sau ${t.days} ngày`,
  Ng = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? yg(t) : e === "pt" ? wg(t) : e === "ch" ? bg(t) : e === "de" ? vg(t) : e === "es" ? Eg(t) : e === "fr" ? Tg(t) : e === "it" ? Sg(t) : e === "jp" ? Ag(t) : e === "pl" ? Og(t) : e === "ru" ? Rg(t) : e === "uk" ? Dg(t) : Ig(t)
  },
  Cg = () => "No internet access or the servers are offline. Try again later.",
  kg = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  xg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Pg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Lg = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Mg = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Bg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Hg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Ug = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Fg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  jg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Gg = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Wg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Cg() : e === "pt" ? kg() : e === "ch" ? xg() : e === "de" ? Pg() : e === "es" ? Lg() : e === "fr" ? Mg() : e === "it" ? Bg() : e === "jp" ? Hg() : e === "pl" ? Ug() : e === "ru" ? Fg() : e === "uk" ? jg() : Gg()
  },
  Vg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  zg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  $g = () => "您无权验证电话号码。请尝试刷新页面。",
  qg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Kg = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  Xg = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Yg = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Jg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Qg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Zg = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  ey = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  ty = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  ny = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Vg() : e === "pt" ? zg() : e === "ch" ? $g() : e === "de" ? qg() : e === "es" ? Kg() : e === "fr" ? Xg() : e === "it" ? Yg() : e === "jp" ? Jg() : e === "pl" ? Qg() : e === "ru" ? Zg() : e === "uk" ? ey() : ty()
  },
  ry = () => "Operation not allowed. Maybe you have too many favorite locations.",
  oy = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  ay = () => "操作不被允许。你的收藏位置可能过多。",
  iy = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  sy = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  cy = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  uy = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  ly = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  dy = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  _y = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  fy = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  py = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  my = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ry() : e === "pt" ? oy() : e === "ch" ? ay() : e === "de" ? iy() : e === "es" ? sy() : e === "fr" ? cy() : e === "it" ? uy() : e === "jp" ? ly() : e === "pl" ? dy() : e === "ru" ? _y() : e === "uk" ? fy() : py()
  },
  hy = t => `Not enough charges: you have ${t.charges} but this overlay needs ${t.pixels}.`,
  gy = t => `Cargas insuficientes: você tem ${t.charges}, mas esta sobreposição precisa de ${t.pixels}.`,
  yy = t => `充能不足：你有 ${t.charges}，但此叠加层需要 ${t.pixels}。`,
  wy = t => `Nicht genügend Ladungen: Du hast ${t.charges}, aber dieses Overlay benötigt ${t.pixels}.`,
  by = t => `Cargas insuficientes: tienes ${t.charges} pero esta superposición necesita ${t.pixels}.`,
  vy = t => `Charges insuffisantes : vous avez ${t.charges} mais ce calque nécessite ${t.pixels}.`,
  Ey = t => `Cariche insufficienti: ne hai ${t.charges} ma questo overlay ne richiede ${t.pixels}.`,
  Ty = t => `チャージが足りません：現在 ${t.charges} ですが、このオーバーレイには ${t.pixels} 必要です。`,
  Sy = t => `Za mało ładunków: masz ${t.charges}, ale ta nakładka wymaga ${t.pixels}.`,
  Ay = t => `Недостаточно зарядов: у вас ${t.charges}, но для этого слоя нужно ${t.pixels}.`,
  Oy = t => `Недостатньо зарядів: у вас ${t.charges}, але для цього шару потрібно ${t.pixels}.`,
  Ry = t => `Không đủ lượt sơn: bạn có ${t.charges} nhưng lớp phủ này cần ${t.pixels}.`,
  Dy = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? hy(t) : e === "pt" ? gy(t) : e === "ch" ? yy(t) : e === "de" ? wy(t) : e === "es" ? by(t) : e === "fr" ? vy(t) : e === "it" ? Ey(t) : e === "jp" ? Ty(t) : e === "pl" ? Sy(t) : e === "ru" ? Ay(t) : e === "uk" ? Oy(t) : Ry(t)
  },
  Iy = () => "You are trying to paint with a color you do not own",
  Ny = () => "Você está tentando pintar com uma cor que não possui",
  Cy = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  ky = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  xy = () => "Estás intentando pintar con un color que no posees",
  Py = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Ly = () => "Stai cercando di dipingere con un colore che non possiedi",
  My = () => "所持していない色で塗ろうとしています。",
  By = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Hy = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Uy = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Fy = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Ir = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Iy() : e === "pt" ? Ny() : e === "ch" ? Cy() : e === "de" ? ky() : e === "es" ? xy() : e === "fr" ? Py() : e === "it" ? Ly() : e === "jp" ? My() : e === "pl" ? By() : e === "ru" ? Hy() : e === "uk" ? Uy() : Fy()
  },
  jy = () => "Phone already used",
  Gy = () => "Telefone já usado",
  Wy = () => "电话号码已被使用",
  Vy = () => "Telefonnummer bereits verwendet",
  zy = () => "Teléfono ya utilizado",
  $y = () => "Téléphone déjà utilisé",
  qy = () => "Telefono già utilizzato",
  Ky = () => "この電話番号は既に使用されています。",
  Xy = () => "Numer telefonu jest już używany",
  Yy = () => "Телефон уже используется",
  Jy = () => "Номер телефону вже використовується",
  Qy = () => "Số điện thoại đã được sử dụng",
  Zy = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? jy() : e === "pt" ? Gy() : e === "ch" ? Wy() : e === "de" ? Vy() : e === "es" ? zy() : e === "fr" ? $y() : e === "it" ? qy() : e === "jp" ? Ky() : e === "pl" ? Xy() : e === "ru" ? Yy() : e === "uk" ? Jy() : Qy()
  },
  ew = () => "This phone number's region is not supported",
  tw = () => "A região deste número de telefone não é suportada",
  nw = () => "此电话号码的地区不受支持",
  rw = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  ow = () => "La región de este número de teléfono no es compatible",
  aw = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  iw = () => "La regione di questo numero di telefono non è supportata",
  sw = () => "この電話番号の地域はサポートされていません",
  cw = () => "Region tego numeru telefonu nie jest obsługiwany",
  uw = () => "Регион этого номера телефона не поддерживается",
  lw = () => "Регіон цього номера телефону не підтримується",
  dw = () => "Vùng của số điện thoại này không được hỗ trợ",
  _w = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ew() : e === "pt" ? tw() : e === "ch" ? nw() : e === "de" ? rw() : e === "es" ? ow() : e === "fr" ? aw() : e === "it" ? iw() : e === "jp" ? sw() : e === "pl" ? cw() : e === "ru" ? uw() : e === "uk" ? lw() : dw()
  },
  fw = () => "Refresh your page to get the latest update",
  pw = () => "Recarregue sua página para obter as últimas atualizações",
  mw = () => "刷新页面以获取最新更新",
  hw = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  gw = () => "Actualiza la página para obtener la última versión",
  yw = () => "Actualisez la page pour obtenir les dernières mises à jour",
  ww = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  bw = () => "最新の状態にするにはページを再読み込みしてください。",
  vw = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Ew = () => "Обновите страницу, чтобы получить последние изменения",
  Tw = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Sw = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Nr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? fw() : e === "pt" ? pw() : e === "ch" ? mw() : e === "de" ? hw() : e === "es" ? gw() : e === "fr" ? yw() : e === "it" ? ww() : e === "jp" ? bw() : e === "pl" ? vw() : e === "ru" ? Ew() : e === "uk" ? Tw() : Sw()
  },
  Aw = () => "The request timed out. Please try again.",
  Ow = () => "A solicitação expirou. Por favor, tente novamente.",
  Rw = () => "请求超时。请重试。",
  Dw = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Iw = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Nw = () => "La requête a expiré. Veuillez réessayer.",
  Cw = () => "La richiesta è scaduta. Riprova.",
  kw = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  xw = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Pw = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Lw = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Mw = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Bw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Aw() : e === "pt" ? Ow() : e === "ch" ? Rw() : e === "de" ? Dw() : e === "es" ? Iw() : e === "fr" ? Nw() : e === "it" ? Cw() : e === "jp" ? kw() : e === "pl" ? xw() : e === "ru" ? Pw() : e === "uk" ? Lw() : Mw()
  },
  Hw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Uw = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Fw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Gw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ww = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Vw = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  zw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $w = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  qw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Kw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Xw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Yw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Hw() : e === "pt" ? Uw() : e === "ch" ? Fw() : e === "de" ? jw() : e === "es" ? Gw() : e === "fr" ? Ww() : e === "it" ? Vw() : e === "jp" ? zw() : e === "pl" ? $w() : e === "ru" ? qw() : e === "uk" ? Kw() : Xw()
  },
  Jw = () => "The service is currently unavailable. Please try again later.",
  Qw = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Zw = () => "服务当前不可用。请稍后再试。",
  eb = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  tb = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  nb = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  rb = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  ob = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  ab = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  ib = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  sb = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  cb = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  ub = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Jw() : e === "pt" ? Qw() : e === "ch" ? Zw() : e === "de" ? eb() : e === "es" ? tb() : e === "fr" ? nb() : e === "it" ? rb() : e === "jp" ? ob() : e === "pl" ? ab() : e === "ru" ? ib() : e === "uk" ? sb() : cb()
  },
  lb = () => "Too many attempts. Please try again later",
  db = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  _b = () => "尝试次数过多，请稍后再试",
  fb = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  pb = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  mb = () => "Trop de tentatives. Veuillez réessayer plus tard",
  hb = () => "Troppi tentativi. Riprova più tardi.",
  gb = () => "試行回数が多すぎます。後で再度お試しください。",
  yb = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  wb = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  bb = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  vb = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Cr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? lb() : e === "pt" ? db() : e === "ch" ? _b() : e === "de" ? fb() : e === "es" ? pb() : e === "fr" ? mb() : e === "it" ? hb() : e === "jp" ? gb() : e === "pl" ? yb() : e === "ru" ? wb() : e === "uk" ? bb() : vb()
  },
  Eb = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Tb = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Sb = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Ab = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Ob = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Rb = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Db = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Ib = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Nb = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Cb = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  kb = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  xb = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Pb = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Eb() : e === "pt" ? Tb() : e === "ch" ? Sb() : e === "de" ? Ab() : e === "es" ? Ob() : e === "fr" ? Rb() : e === "it" ? Db() : e === "jp" ? Ib() : e === "pl" ? Nb() : e === "ru" ? Cb() : e === "uk" ? kb() : xb()
  },
  Lb = () => "The typed username does not match your current username.",
  Mb = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Bb = () => "输入的用户名与当前用户名不匹配。",
  Hb = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Ub = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Fb = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  jb = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Gb = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Wb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Vb = () => "Введённое имя пользователя не совпадает с текущим.",
  zb = () => "Введене імʼя користувача не збігається з поточним.",
  $b = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  qb = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Lb() : e === "pt" ? Mb() : e === "ch" ? Bb() : e === "de" ? Hb() : e === "es" ? Ub() : e === "fr" ? Fb() : e === "it" ? jb() : e === "jp" ? Gb() : e === "pl" ? Wb() : e === "ru" ? Vb() : e === "uk" ? zb() : $b()
  },
  Kb = () => "Unexpected server error. Try again later.",
  Xb = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Yb = () => "服务器出现意外错误。请稍后再试。",
  Jb = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Qb = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Zb = () => "Erreur serveur inattendue. Réessayez plus tard.",
  e1 = () => "Errore imprevisto del server. Riprova più tardi.",
  t1 = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  n1 = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  r1 = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  o1 = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  a1 = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  m = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Kb() : e === "pt" ? Xb() : e === "ch" ? Yb() : e === "de" ? Jb() : e === "es" ? Qb() : e === "fr" ? Zb() : e === "it" ? e1() : e === "jp" ? t1() : e === "pl" ? n1() : e === "ru" ? r1() : e === "uk" ? o1() : a1()
  },
  i1 = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  s1 = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  c1 = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  u1 = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  l1 = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  d1 = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  _1 = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  f1 = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  p1 = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  m1 = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  h1 = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  g1 = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  y1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? i1() : e === "pt" ? s1() : e === "ch" ? c1() : e === "de" ? u1() : e === "es" ? l1() : e === "fr" ? d1() : e === "it" ? _1() : e === "jp" ? f1() : e === "pl" ? p1() : e === "ru" ? m1() : e === "uk" ? h1() : g1()
  },
  w1 = () => "VPN or proxy detected. Please disable your VPN and try again.",
  b1 = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  v1 = () => "检测到VPN或代理。请关闭VPN后重试。",
  E1 = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  T1 = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  S1 = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  A1 = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  O1 = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  R1 = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  D1 = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  I1 = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  N1 = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  C1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? w1() : e === "pt" ? b1() : e === "ch" ? v1() : e === "de" ? E1() : e === "es" ? T1() : e === "fr" ? S1() : e === "it" ? A1() : e === "jp" ? O1() : e === "pl" ? R1() : e === "ru" ? D1() : e === "uk" ? I1() : N1()
  },
  k1 = () => "Failed to load WebAssembly module. Try to use another browser.",
  x1 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  P1 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  L1 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  M1 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  B1 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  H1 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  U1 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  F1 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  j1 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  G1 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  W1 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  V1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? k1() : e === "pt" ? x1() : e === "ch" ? P1() : e === "de" ? L1() : e === "es" ? M1() : e === "fr" ? B1() : e === "it" ? H1() : e === "jp" ? U1() : e === "pl" ? F1() : e === "ru" ? j1() : e === "uk" ? G1() : W1()
  },
  z1 = () => "You already have this item. Please refresh the page.",
  $1 = () => "Você já possui este item. Atualize a página.",
  q1 = () => "你已经拥有此物品。请刷新页面。",
  K1 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  X1 = () => "Ya tienes este ítem. Actualiza la página.",
  Y1 = () => "Vous possédez déjà cet objet. Actualisez la page.",
  J1 = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Q1 = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Z1 = () => "Masz już ten przedmiot. Odśwież stronę.",
  ev = () => "У вас уже есть этот предмет. Обновите страницу.",
  tv = () => "У вас уже є цей предмет. Оновіть сторінку.",
  nv = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  kr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? z1() : e === "pt" ? $1() : e === "ch" ? q1() : e === "de" ? K1() : e === "es" ? X1() : e === "fr" ? Y1() : e === "it" ? J1() : e === "jp" ? Q1() : e === "pl" ? Z1() : e === "ru" ? ev() : e === "uk" ? tv() : nv()
  },
  rv = () => "You are already in an alliance",
  ov = () => "Você já está em uma aliança",
  av = () => "你已经在一个联盟中",
  iv = () => "Du bist bereits in einer Allianz",
  sv = () => "Ya estás en una alianza",
  cv = () => "Vous êtes déjà dans une alliance",
  uv = () => "Sei già in un'alleanza",
  lv = () => "すでにアライアンスに所属しています。",
  dv = () => "Jesteś już w sojuszu",
  _v = () => "Вы уже состоите в альянсе",
  fv = () => "Ви вже перебуваєте в альянсі",
  pv = () => "Bạn đã ở trong một liên minh",
  mv = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? rv() : e === "pt" ? ov() : e === "ch" ? av() : e === "de" ? iv() : e === "es" ? sv() : e === "fr" ? cv() : e === "it" ? uv() : e === "jp" ? lv() : e === "pl" ? dv() : e === "ru" ? _v() : e === "uk" ? fv() : pv()
  },
  hv = () => "You are not allowed to do this",
  gv = () => "Você não tem permissão para fazer isso",
  yv = () => "你无权执行此操作",
  wv = () => "Du bist dazu nicht berechtigt",
  bv = () => "No tienes permiso para hacer esto",
  vv = () => "Vous n’êtes pas autorisé à faire cela",
  Ev = () => "Non hai il permesso di farlo",
  Tv = () => "この操作を行う権限がありません。",
  Sv = () => "Nie masz uprawnień, aby to zrobić",
  Av = () => "У вас нет прав для этого действия",
  Ov = () => "Ви не маєте права це робити",
  Rv = () => "Bạn không có quyền làm việc này",
  Ye = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? hv() : e === "pt" ? gv() : e === "ch" ? yv() : e === "de" ? wv() : e === "es" ? bv() : e === "fr" ? vv() : e === "it" ? Ev() : e === "jp" ? Tv() : e === "pl" ? Sv() : e === "ru" ? Av() : e === "uk" ? Ov() : Rv()
  },
  Dv = () => "You do not have enough Droplets to buy this item.",
  Iv = () => "Você não tem Droplets suficientes para comprar este item.",
  Nv = () => "你的 Droplets 不足，无法购买此物品。",
  Cv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  kv = () => "No tienes suficientes Droplets para comprar este ítem.",
  xv = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Pv = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Lv = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Mv = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Bv = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Hv = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Uv = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  xr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Dv() : e === "pt" ? Iv() : e === "ch" ? Nv() : e === "de" ? Cv() : e === "es" ? kv() : e === "fr" ? xv() : e === "it" ? Pv() : e === "jp" ? Lv() : e === "pl" ? Mv() : e === "ru" ? Bv() : e === "uk" ? Hv() : Uv()
  },
  Fv = () => "You need to be logged in to paint",
  jv = () => "Você precisa estar conectado para pintar",
  Gv = () => "你需要登录才能进行绘制",
  Wv = () => "Du musst eingeloggt sein, um zu malen",
  Vv = () => "Debes iniciar sesión para pintar",
  zv = () => "Vous devez être connecté pour peindre",
  $v = () => "Devi avere effettuato l'accesso per dipingere",
  qv = () => "ペイントするにはログインが必要です。",
  Kv = () => "Musisz być zalogowany, aby malować",
  Xv = () => "Чтобы рисовать, нужно войти в аккаунт",
  Yv = () => "Щоб малювати, необхідно увійти в акаунт",
  Jv = () => "Bạn cần đăng nhập để tô",
  Pr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Fv() : e === "pt" ? jv() : e === "ch" ? Gv() : e === "de" ? Wv() : e === "es" ? Vv() : e === "fr" ? zv() : e === "it" ? $v() : e === "jp" ? qv() : e === "pl" ? Kv() : e === "ru" ? Xv() : e === "uk" ? Yv() : Jv()
  },
  Qv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Zv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  e0 = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  t0 = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  n0 = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  r0 = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  o0 = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  a0 = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  i0 = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  s0 = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  c0 = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  u0 = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  l0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Qv() : e === "pt" ? Zv() : e === "ch" ? e0() : e === "de" ? t0() : e === "es" ? n0() : e === "fr" ? r0() : e === "it" ? o0() : e === "jp" ? a0() : e === "pl" ? i0() : e === "ru" ? s0() : e === "uk" ? c0() : u0()
  },
  d0 = t => `Your account has been suspended out until ${t.until}`,
  _0 = t => `A sua conta está suspensa até ${t.until}`,
  f0 = t => `你的账号已被暂停至 ${t.until}`,
  p0 = t => `Dein Konto ist gesperrt bis ${t.until}`,
  m0 = t => `Tu cuenta ha sido suspendida hasta ${t.until}`,
  h0 = t => `Votre compte est suspendu jusqu’au ${t.until}`,
  g0 = t => `Il tuo account è sospeso fino al ${t.until}`,
  y0 = t => `あなたのアカウントは${t.until}まで一時停止されています。`,
  w0 = t => `Twoje konto zostało zawieszone do ${t.until}`,
  b0 = t => `Ваш аккаунт заблокирован до ${t.until}`,
  v0 = t => `Ваш акаунт призупинено до ${t.until}`,
  E0 = t => `Tài khoản của bạn đã bị đình chỉ đến ${t.until}`,
  Lr = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? d0(t) : e === "pt" ? _0(t) : e === "ch" ? f0(t) : e === "de" ? p0(t) : e === "es" ? m0(t) : e === "fr" ? h0(t) : e === "it" ? g0(t) : e === "jp" ? y0(t) : e === "pl" ? w0(t) : e === "ru" ? b0(t) : e === "uk" ? v0(t) : E0(t)
  },
  T0 = () => "A correction is already pending for this ticket.",
  S0 = () => "Já existe uma correção pendente para este ticket.",
  A0 = () => "此工单已存在待审核的更正请求。",
  O0 = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  R0 = () => "Ya hay una corrección pendiente para este ticket.",
  D0 = () => "Une correction est déjà en attente pour ce ticket.",
  I0 = () => "Una correzione è già in sospeso per questo ticket.",
  N0 = () => "このチケットには未処理の修正があります。",
  C0 = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  k0 = () => "Для этого тикета уже есть запрос на исправление.",
  x0 = () => "Для цього тікета вже є запит на перевірці.",
  P0 = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  L0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? T0() : e === "pt" ? S0() : e === "ch" ? A0() : e === "de" ? O0() : e === "es" ? R0() : e === "fr" ? D0() : e === "it" ? I0() : e === "jp" ? N0() : e === "pl" ? C0() : e === "ru" ? k0() : e === "uk" ? x0() : P0()
  },
  M0 = () => "You cannot review your own correction request.",
  B0 = () => "Você não pode revisar sua própria solicitação de correção.",
  H0 = () => "不能审核自己提交的更正请求。",
  U0 = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  F0 = () => "No puedes revisar tu propia solicitud de corrección.",
  j0 = () => "Tu ne peux pas examiner ta propre demande de correction.",
  G0 = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  W0 = () => "自分のリクエストはレビューできません。",
  V0 = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  z0 = () => "Нельзя рассматривать собственный запрос.",
  $0 = () => "Не можна перевіряти власний запит.",
  q0 = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  K0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? M0() : e === "pt" ? B0() : e === "ch" ? H0() : e === "de" ? U0() : e === "es" ? F0() : e === "fr" ? j0() : e === "it" ? G0() : e === "jp" ? W0() : e === "pl" ? V0() : e === "ru" ? z0() : e === "uk" ? $0() : q0()
  },
  X0 = () => "This correction has already been reviewed.",
  Y0 = () => "Esta correção já foi revisada.",
  J0 = () => "此请求已被审核。",
  Q0 = () => "Diese Korrektur wurde bereits geprüft.",
  Z0 = () => "Esta corrección ya ha sido revisada.",
  eE = () => "Cette correction a déjà été examinée.",
  tE = () => "Questa correzione è già stata revisionata.",
  nE = () => "このリクエストはすでにレビュー済みです。",
  rE = () => "Ta prośba została już rozpatrzona.",
  oE = () => "Этот запрос уже рассмотрен.",
  aE = () => "Цей запит вже перевірено.",
  iE = () => "Yêu cầu này đã được duyệt.",
  sE = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? X0() : e === "pt" ? Y0() : e === "ch" ? J0() : e === "de" ? Q0() : e === "es" ? Z0() : e === "fr" ? eE() : e === "it" ? tE() : e === "jp" ? nE() : e === "pl" ? rE() : e === "ru" ? oE() : e === "uk" ? aE() : iE()
  },
  Ge = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function aT(t) {
  const n = Math.floor(t / Ge.hour);
  t -= n * Ge.hour;
  const e = Math.floor(t / Ge.minute);
  t -= e * Ge.minute;
  const o = Math.floor(t / Ge.second).toString().padStart(2, "0");
  return n > 0 ? `${n}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function iT(t) {
  const n = t.getFullYear(),
    e = String(t.getMonth() + 1).padStart(2, "0"),
    r = String(t.getDate()).padStart(2, "0"),
    o = String(t.getHours()).padStart(2, "0"),
    a = String(t.getMinutes()).padStart(2, "0"),
    i = String(t.getSeconds()).padStart(2, "0");
  return `${n}-${e}-${r} ${o}:${a}:${i}`
}
const sT = {
    griefing: pf(),
    "multi-accounting": og(),
    "hate-speech": Ff(),
    bot: Zc(),
    doxxing: gd(),
    "inappropriate-content": _p(),
    other: Au()
  },
  cT = {
    doxxing: Nd(),
    "hate-speech": Zf(),
    griefing: Rf(),
    "multi-accounting": gg(),
    bot: _u(),
    "inappropriate-content": Ap(),
    other: Hu()
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
  Mr = {
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
  cE = 365 * Ge.day;

function mo(t) {
  if (!t) return null;
  const e = (t instanceof Date ? t : new Date(t)).getTime();
  return Number.isFinite(e) ? e : null
}

function dT(t, n = Date.now()) {
  const e = mo(t);
  return e === null ? !1 : e - n >= cE
}

function _T(t, n = Date.now()) {
  const e = mo(t);
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
const uE = [{
    tileSize: 1e3,
    zoom: 11
  }],
  lE = 4,
  dE = 6e3,
  _E = [{
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
  fE = {
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
  pE = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  mE = {
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
  hE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  nt = {
    seasons: uE,
    regionSize: lE,
    refreshIntervalMs: dE,
    colors: _E,
    products: fE,
    countries: pE,
    permissions: mE,
    settings: hE
  },
  Ln = nt,
  gE = nt.seasons,
  ho = nt.seasons.length - 1,
  fT = nt.seasons[ho].zoom,
  pT = nt.seasons[ho].tileSize,
  mT = nt.permissions,
  yE = nt.settings;

function hT(t) {
  return Ln.countries[t - 1]
}
class b extends Error {
  constructor(n, e) {
    super(n), this.message = n, this.status = e
  }
}

function Br(t, n) {
  const e = {};
  for (const r of t) {
    const o = n(r);
    let a = e[o];
    a ? a.push(r) : e[o] = [r]
  }
  return e
}

function gT(t, n) {
  const e = {};
  for (const r of t) {
    const o = n(r);
    e[o] = r
  }
  return e
}
const wE = 30 * Ge.minute;
var Lt, Mt;
class bE {
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
    const e = Br(n, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
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
      if (i.status === l.UNAUTHORIZED) throw new Error(Pr());
      if (i.status === l.FORBIDDEN) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(Rr());
        const s = await i.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const c = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(Lr({
            until: c.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(Nr());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(Ir());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(Ar());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await Tr(s.tier)) return this.paint(n);
            throw new Error(An())
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
      throw a === "timelapse_too_many_events" ? new b(Yw(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
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
    const a = Br(n, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
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
      if (c.status === l.UNAUTHORIZED) throw new Error(Pr());
      if (c.status === l.FORBIDDEN) {
        if (c.headers.get("cf-mitigated") === "challenge") throw new Error(Rr());
        const _ = await c.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const u = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(Lr({
            until: u.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(Nr());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(Ir());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(Ar());
        st.refresh()
      } else throw new Error(m())
    }
  }
  async adminAutoPainterPaint(n, e, r) {
    const o = vE(n),
      a = await EE(o),
      i = new FormData;
    i.append("fingerprint", e), i.append("season", o.season.toString()), i.append("px0", o.offsetX.toString()), i.append("py0", o.offsetY.toString()), i.append("width", o.width.toString()), i.append("height", o.height.toString()), i.append("pixels", n.length.toString()), i.append("bitmap", a, "auto-painter.png"), i.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: i,
      credentials: "include"
    });
    if (s.status === l.FORBIDDEN) {
      const c = await s.json().catch(() => null);
      if (typeof(c == null ? void 0 : c.charges) == "number") throw new Error(Dy({
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
      throw new Error(D_({
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
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(tc());
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
    if (e.status === l.BAD_REQUEST) throw new Error(Km());
    if (e.status === l.CONFLICT) throw new Error(Zy());
    if (e.status === l.FORBIDDEN) throw new Error(ny());
    if (e.status === l.TOO_MANY_REQUESTS) throw new Error(Cr());
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(_w());
    if (e.status === l.LOCKED) throw new Error(y1());
    if (e.status === l.UNPROCESSABLE_ENTITY) throw new Error(sh());
    if (e.status === l.NOT_ACCEPTABLE) throw new Error(C1());
    if (e.status === l.PRECONDITION_FAILED) throw new Error($l());
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
        "x-fp": await Rn()
      }
    });
    if (n.type === "otp") {
      if (r.status === l.GONE) throw new Error(ef());
      if (r.status === l.BAD_REQUEST) throw new Error(lm());
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(Cr());
      if (r.status !== l.OK) throw new Error(m())
    } else {
      if (r.status === l.BAD_REQUEST) throw new Error(Jp());
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
      if (o === "invalid_name") throw new Error(Dr());
      if (o === "invalid_discord") throw new Error(Tm());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const a = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(Ng({
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
    if (e.status === l.BAD_REQUEST) throw new Error(qb());
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
    if (e.status === l.FORBIDDEN) throw new Error(my());
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
    if (r.status === l.BAD_REQUEST) throw new Error(zh());
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
    Date.now() - this.lastHotspotRequestAt < wE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== l.OK) throw e.status === l.NOT_FOUND ? new Error(Or()) : e.status === l.FORBIDDEN ? new Error(xr()) : e.status === l.CONFLICT ? new Error(kr()) : new Error(m())
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
      throw r.error === "max_characters" ? new Error(Rc()) : r.error === "name_taken" ? new Error(pc()) : r.error == "empty_name" ? new Error(Fc()) : new Error(m())
    } else throw e.status === l.FORBIDDEN ? new Error(mv()) : new Error(m())
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
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : e.status === l.BAD_REQUEST ? new Error(j_()) : new Error(m())
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
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(bh()) : new Error(m())
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
    for (const r of e.tickets) r.reports.sort((o, a) => Mr[o.reason] - Mr[a.reason]);
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
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new b(L0(), l.CONFLICT) : new b(m(), l.CONFLICT)
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
    if (o.status === l.FORBIDDEN) throw new b(K0(), l.FORBIDDEN);
    if (o.status === l.CONFLICT) throw new b(sE(), l.CONFLICT);
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
      throw console.error("Fetch error:", s), this.online = !1, new Error(ul(), {
        cause: s
      })
    }
    if (r.status === l.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Pb());
    const o = ((i = r.headers.get("cf-mitigated")) == null ? void 0 : i.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (ht.setCfLikelyAutomated(!0), !await fo()) throw new Error(An());
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(l0());
      if (r.status === l.REQUEST_TIMEOUT) throw new Error(Bw());
      if (r.status === l.SERVICE_UNAVAILABLE) throw new Error(ub())
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
      throw i === "invalid_name" ? new b(Dr(), l.BAD_REQUEST) : new b(typeof i == "string" && i ? i : m(), l.BAD_REQUEST)
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
      throw a === "email_required" || a === "invalid_email" ? new b(m_(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
    }
    if (r.status === l.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const i = new b(typeof(o == null ? void 0 : o.userId) == "number" ? n_({
          userId: o.userId
        }) : Wd(), l.CONFLICT);
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
        if (await Tr(a.tier)) return this.submitBanAppeal(n);
        throw new b(An(), o.status)
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
        "x-fp": await Rn()
      }
    });
    if (!r.ok) throw r.status === 500 ? new b(m(), r.status) : new b(Hp(), r.status);
    return r.json()
  }
  validWaybackInput(n) {
    const e = Number.isFinite(n.timestamp) && Number.isInteger(n.timestamp) && n.timestamp >= 0 && n.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(n.season) && Number.isInteger(n.season) && n.season >= 0 && n.season < gE.length,
      o = Number.isFinite(n.limit) && Number.isInteger(n.limit) && n.limit > 0 && n.limit <= yE.tools.wayback.limit,
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
    if (e.status === l.NOT_FOUND) throw new Error(Or());
    if (e.status === l.FORBIDDEN) throw new Error(xr());
    if (e.status === l.CONFLICT) throw new Error(kr());
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

function vE(t) {
  var f, d;
  if (!t.length) throw new Error("Auto painter request does not contain any pixels.");
  const n = t[0].season;
  for (const g of t)
    if (g.season !== n) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = Ln.seasons) == null ? void 0 : f[n];
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
    const C = (d = Ln.colors) == null ? void 0 : d[y];
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
async function EE(t) {
  const n = TE(t.width, t.height),
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

function TE(t, n) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(t, n);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = t, e.height = n, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let Ve = new bE(Hn);
typeof window < "u" && Ao(() => {
  let t = Ve.online;
  Oo(() => {
    const n = Ve.online;
    n && !t && window.dispatchEvent(new CustomEvent("wplace:online")), t = n
  })
});
const yT = t => new URL(t, Hn).toString();

function go(t, n) {
  if (!(t != null && t.length)) return !1;
  for (const e of t)
    if (e === n) return !0;
  return !1
}

function SE(t, n) {
  for (const e of n)
    if (go(t, e)) return !0;
  return !1
}

function wT(...t) {
  return t.filter(Boolean).join(" ")
}
const AE = typeof document < "u";
let Hr = 0;
var Bt, Ht, Ut;
class OE {
  constructor() {
    Z(this, Bt, fe(an([])));
    Z(this, Ht, fe(an([])));
    Z(this, Ut, n => {
      const e = this.toasts.findIndex(r => r.id === n);
      return e === -1 ? null : e
    });
    $(this, "addToast", n => {
      AE && this.toasts.unshift(n)
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
      } = n, o = typeof(n == null ? void 0 : n.id) == "number" || n.id && ((s = n.id) == null ? void 0 : s.length) > 0 ? n.id : Hr++, a = n.dismissable === void 0 ? !0 : n.dismissable, i = n.type === void 0 ? "default" : n.type;
      return nr(() => {
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
    $(this, "dismiss", n => (nr(() => {
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
    $(this, "custom", (n, e) => {
      const r = (e == null ? void 0 : e.id) || Hr++;
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

function RE(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const De = new OE;

function DE(t, n) {
  return De.create({
    message: t,
    ...n
  })
}
var _n;
class bT {
  constructor() {
    Z(this, _n, pt(() => De.toasts.filter(n => !n.dismiss)))
  }
  get toasts() {
    return re(B(this, _n))
  }
}
_n = new WeakMap;
const IE = DE,
  NE = Object.assign(IE, {
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
class CE {
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
      const e = n.count + Math.max((lo.now - this.lastFetch) / n.cooldownMs, 0);
      return Math.min(n.max, e)
    }));
    Z(this, zt, pt(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    Z(this, $t, pt(() => {
      var n;
      return new ni(zr(((n = this.data) == null ? void 0 : n.flagsBitmap) ?? "AA=="))
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
      }), (e = this.data) != null && e.id && (na("userId", {
        id: this.data.id
      }), ht.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), NE.warning(Wg(), {
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
    return go((e = this.data) == null ? void 0 : e.permissions, n)
  }
  hasAnyPermission(n) {
    var e;
    return SE((e = this.data) == null ? void 0 : e.permissions, n)
  }
}
Ft = new WeakMap, jt = new WeakMap, Gt = new WeakMap, Wt = new WeakMap, Vt = new WeakMap, zt = new WeakMap, $t = new WeakMap, qt = new WeakMap;
const st = new CE;
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
const yo = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && yo.decode();
let mt = null;

function nn() {
  return (mt === null || mt.byteLength === 0) && (mt = new Uint8Array(K.memory.buffer)), mt
}

function rn(t, n) {
  return t = t >>> 0, yo.decode(nn().subarray(t, t + n))
}

function kE(t) {
  t < 132 || (Me[t] = bt, bt = t)
}

function Ur(t) {
  const n = G(t);
  return kE(t), n
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
  xE = typeof on.encodeInto == "function" ? function(t, n) {
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
      c = xE(t, s);
    i += c.written, o = e(o, r, i, 1) >>> 0
  }
  return tt = i, o
}

function PE(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_fingerprint_v2(n, e)
}

function LE(t) {
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

function ME(t) {
  K.set_automated_browser(t)
}

function On(t) {
  K.set_user_id(t)
}

function BE(t) {
  K.set_automated_clicks(t)
}

function HE(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_detected_bot(n, e)
}

function UE(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.request_url(n, e)
}

function FE(t) {
  K.set_cf_likely_automated(t)
}

function jE(t) {
  const n = Kt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_fingerprint(n, e)
}
async function GE(t, n) {
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

function WE() {
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
      G(n).randomFillSync(Ur(e))
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
    Ur(n)
  }, t.wbg.__wbindgen_string_new = function(n, e) {
    const r = rn(n, e);
    return te(r)
  }, t.wbg.__wbindgen_throw = function(n, e) {
    throw new Error(rn(n, e))
  }, t
}

function VE(t, n) {
  return K = t.exports, wo.__wbindgen_wasm_module = n, Qe = null, mt = null, K
}
async function wo(t) {
  if (K !== void 0) return K;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? {
    module_or_path: t
  } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const n = WE();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const {
    instance: e,
    module: r
  } = await GE(await t, n);
  return VE(e, r)
}
class zE {
  constructor() {
    $(this, "interval");
    $(this, "storagesEmpty", !1);
    $(this, "storages", [new dn, new Mn, new Bn, new qE]);
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
        await wo(ra), (n = st.data) != null && n.id && On(st.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: $E((r, o) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && UE(a), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, ta(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(n) {
    await this.loadPawtect(), On(n)
  }
  async setCfLikelyAutomated(n) {
    await this.loadPawtect(), FE(n)
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
    if (!await this.loadPawtect()) throw new Error(V1());
    const r = navigator.webdriver,
      [o, a, i] = await Promise.all([Rn(), ks(), ei().catch(s => (console.error(s), {
        bot: !1
      }))]);
    return On(st.data.id), jE(o), PE(a), ME(r), BE(lo.automatedClicks), i.bot && HE(i.botKind ?? "unknown"), LE(n)
  }
}

function $E(t) {
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
let Mn = je;
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
let Bn = Ze;
class qE {
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
const ht = new zE;
export {
  gT as $, ks as A, yE as B, ho as C, m_ as D, Tr as E, An as F, QE as G, Ap as H, Zf as I, Nd as J, _u as K, gg as L, Rf as M, ZE as N, eT as O, pT as P, hT as Q, iT as R, mT as S, Ge as T, V1 as U, qb as V, yT as W, dT as X, cT as Y, _T as Z, lT as _, Ve as a, fT as a0, Hp as a1, Ln as b, m as c, sT as d, gd as e, Zc as f, pf as g, Ff as h, _p as i, lo as j, K0 as k, De as l, og as m, wT as n, bT as o, aT as p, oT as q, Ae as r, uT as s, NE as t, st as u, nT as v, tT as w, rT as x, ht as y, ti as z
};