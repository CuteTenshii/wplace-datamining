var uo = Object.defineProperty;
var zn = n => {
  throw TypeError(n)
};
var lo = (n, t, e) => t in n ? uo(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var $ = (n, t, e) => lo(n, typeof t != "symbol" ? t + "" : t, e),
  _o = (n, t, e) => t.has(n) || zn("Cannot " + e);
var M = (n, t, e) => (_o(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  Z = (n, t, e) => t.has(n) ? zn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  f as fo,
  h as po,
  j as mo,
  P as Hn,
  g as Rn
} from "./DhONBh11.js";
import {
  e as fe,
  i as re,
  h as oe,
  g as sn,
  bM as ho,
  I as go,
  L as $n,
  u as mt
} from "./Dbe4PVAU.js";
import {
  g as O
} from "./BhCkpOlh.js";
const ct = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Be = globalThis,
  wt = "10.40.0";

function Un() {
  return Fn(Be), Be
}

function Fn(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || wt, t[wt] = t[wt] || {}
}

function jn(n, t, e = Be) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    o = r[wt] = r[wt] || {};
  return o[n] || (o[n] = t())
}
const wo = "Sentry Logger ",
  qn = {};

function yo(n) {
  if (!("console" in Be)) return n();
  const t = Be.console,
    e = {},
    r = Object.keys(qn);
  r.forEach(o => {
    const a = qn[o];
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

function bo() {
  Wn().enabled = !0
}

function vo() {
  Wn().enabled = !1
}

function Nr() {
  return Wn().enabled
}

function Eo(...n) {
  Gn("log", ...n)
}

function To(...n) {
  Gn("warn", ...n)
}

function So(...n) {
  Gn("error", ...n)
}

function Gn(n, ...t) {
  ct && Nr() && yo(() => {
    Be.console[n](`${wo}[${n}]:`, ...t)
  })
}

function Wn() {
  return ct ? jn("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const en = {
    enable: bo,
    disable: vo,
    isEnabled: Nr,
    log: Eo,
    warn: To,
    error: So
  },
  Ao = Object.prototype.toString;

function Oo(n, t) {
  return Ao.call(n) === `[object ${t}]`
}

function Ro(n) {
  return Oo(n, "Object")
}

function Do(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Io(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    ct && en.log(`Failed to add non-enumerable property "${t}" to object`, n)
  }
}
let rt;

function pn(n) {
  if (rt !== void 0) return rt ? rt(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = Be;
  return t in e && typeof e[t] == "function" ? (rt = e[t], rt(n)) : (rt = null, n())
}

function Dn() {
  return pn(() => Math.random())
}

function No() {
  return pn(() => Date.now())
}

function Co(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function ko() {
  const n = Be;
  return n.crypto || n.msCrypto
}
let yn;

function Po() {
  return Dn() * 16
}

function yt(n = ko()) {
  try {
    if (n != null && n.randomUUID) return pn(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return yn || (yn = "10000000100040008000" + 1e11), yn.replace(/[018]/g, t => (t ^ (Po() & 15) >> t / 4).toString(16))
}
const Cr = 1e3;

function kr() {
  return No() / Cr
}

function xo() {
  const {
    performance: n
  } = Be;
  if (!(n != null && n.now) || !n.timeOrigin) return kr;
  const t = n.timeOrigin;
  return () => (t + pn(() => n.now())) / Cr
}
let Kn;

function Lo() {
  return (Kn ?? (Kn = xo()))()
}

function Mo(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Lo(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : yt()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
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

function Xn() {
  return yt()
}
const In = "_sentrySpan";

function Yn(n, t) {
  t ? Io(n, In, t) : delete n[In]
}

function Jn(n) {
  return n[In]
}
const Bo = 100;
class et {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: Xn(),
      sampleRand: Dn()
    }
  }
  clone() {
    const t = new et;
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, Yn(t, Jn(this)), t
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
    }, this._session && Mo(this._session, {
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
      r = e instanceof et ? e.getScopeData() : Ro(e) ? t : void 0,
      {
        tags: o,
        attributes: a,
        extra: i,
        user: s,
        contexts: u,
        level: c,
        fingerprint: d = [],
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
    }, s && Object.keys(s).length && (this._user = s), c && (this._level = c), d.length && (this._fingerprint = d), p && (this._propagationContext = p), f && (this._conversationId = f), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Yn(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: Xn(),
      sampleRand: Dn()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var a;
    const r = typeof e == "number" ? e : Bo;
    if (r <= 0) return this;
    const o = {
      timestamp: kr(),
      ...t,
      message: t.message ? Co(t.message, 2048) : t.message
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
      span: Jn(this),
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
    const r = (e == null ? void 0 : e.event_id) || yt();
    if (!this._client) return ct && en.warn("No client configured on scope - will not capture exception!"), r;
    const o = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: o,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const o = (r == null ? void 0 : r.event_id) || yt();
    if (!this._client) return ct && en.warn("No client configured on scope - will not capture message!"), o;
    const a = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: a,
      ...r,
      event_id: o
    }, this), o
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || yt();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (ct && en.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function Ho() {
  return jn("defaultCurrentScope", () => new et)
}

function Uo() {
  return jn("defaultIsolationScope", () => new et)
}
class Fo {
  constructor(t, e) {
    let r;
    t ? r = t : r = new et;
    let o;
    e ? o = e : o = new et, this._stack = [{
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
    return Do(r) ? r.then(o => (this._popScope(), o), o => {
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

function dt() {
  const n = Un(),
    t = Fn(n);
  return t.stack = t.stack || new Fo(Ho(), Uo())
}

function jo(n) {
  return dt().withScope(n)
}

function Go(n, t) {
  const e = dt();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function Qn(n) {
  return dt().withScope(() => n(dt().getIsolationScope()))
}

function Wo() {
  return {
    withIsolationScope: Qn,
    withScope: jo,
    withSetScope: Go,
    withSetIsolationScope: (n, t) => Qn(t),
    getCurrentScope: () => dt().getScope(),
    getIsolationScope: () => dt().getIsolationScope()
  }
}

function xr(n) {
  const t = Fn(n);
  return t.acs ? t.acs : Wo()
}

function Vo() {
  const n = Un();
  return xr(n).getCurrentScope()
}

function zo() {
  const n = Un();
  return xr(n).getIsolationScope()
}

function $o(n, t) {
  return Vo().captureException(n, void 0)
}

function qo(n, t) {
  zo().setContext(n, t)
}
const Ko = "" + new URL("../assets/pawtect_wasm_bg.Ckfht_86.wasm", import.meta.url).href;
var Xo = "2.0.0";
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
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, J.prototype)
  }
}

function Yo(n, t) {
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
      botKind: j.Unknown
    }), e[o] = s, s.bot && (r = s)
  }
  return [e, r]
}
async function Jo(n) {
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
      a instanceof J ? t[r] = {
        state: a.state,
        error: `${a.name}: ${a.message}`
      } : t[r] = {
        state: -3,
        error: a instanceof Error ? `${a.name}: ${a.message}` : String(a)
      }
    }
  })), t
}

function Qo({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return j.HeadlessChrome;
  if (/electron/i.test(n.value)) return j.Electron;
  if (/slimerjs/i.test(n.value)) return j.SlimerJS
}

function tn(n, t) {
  return n.indexOf(t) !== -1
}

function xe(n, t) {
  return n.indexOf(t) !== -1
}

function Zo(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function Zn(n) {
  return Object.getOwnPropertyNames(n)
}

function Nn(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (tn(n, e)) return !0
    } else if (Zo(n, o => e.test(o)) != null) return !0;
  return !1
}

function ut(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function ea({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (Nn(n.value, "selenium", "webdriver", "driver")) return j.Selenium
}

function ta({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return j.PhantomJS
}

function na({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !tn(["webkit", "gecko"], e.value) || r === 39 && !tn(["internet_explorer"], t.value) || r === 33 && !tn(["chromium"], e.value)
}

function ra({
  functionBind: n
}) {
  if (n.state === -2) return j.PhantomJS
}

function oa({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return j.HeadlessChrome
}

function aa({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return j.Unknown
}

function ia({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return j.HeadlessChrome
}

function sa({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return j.HeadlessChrome
}

function ca({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return j.HeadlessChrome
}

function ua({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return j.Electron
}

function la({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return j.Unknown
}

function da({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return j.PhantomJS;
  if (/Headless/i.test(n.value)) return j.HeadlessChrome;
  if (/Electron/i.test(n.value)) return j.Electron;
  if (/slimerjs/i.test(n.value)) return j.SlimerJS
}

function _a({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return j.HeadlessChrome
}

function fa({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = n.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return j.HeadlessChrome
  }
}

function pa({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return j.Sequentum
}

function ma({
  windowSize: n,
  documentFocus: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = n.value;
  if (t.value && e === 0 && r === 0) return j.HeadlessChrome
}

function ha({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const ga = {
  detectAppVersion: Qo,
  detectDocumentAttributes: ea,
  detectErrorTrace: ta,
  detectEvalLengthInconsistency: na,
  detectFunctionBind: ra,
  detectLanguagesLengthInconsistency: oa,
  detectNotificationPermissions: ia,
  detectPluginsArray: sa,
  detectPluginsLengthInconsistency: ca,
  detectProcess: ua,
  detectUserAgent: da,
  detectWebDriver: _a,
  detectWebGL: fa,
  detectWindowExternal: pa,
  detectWindowSize: ma,
  detectMimeTypesConsistent: aa,
  detectProductSub: la,
  detectDistinctiveProperties: ha
};

function wa() {
  const n = navigator.appVersion;
  if (n == null) throw new J(-1, "navigator.appVersion is undefined");
  return n
}

function ya() {
  if (document.documentElement === void 0) throw new J(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new J(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function ba() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new J(-3, "errorTrace signal unexpected behaviour")
}

function va() {
  return eval.toString().length
}

function Ea() {
  if (Function.prototype.bind === void 0) throw new J(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Vn() {
  var n, t;
  const e = window,
    r = navigator;
  return ut(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : ut(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : ut(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Ta() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return xe(t, "edg/") ? "edge" : xe(t, "trident") || xe(t, "msie") ? "internet_explorer" : xe(t, "wechat") ? "wechat" : xe(t, "firefox") ? "firefox" : xe(t, "opera") || xe(t, "opr") ? "opera" : xe(t, "chrome") ? "chrome" : xe(t, "safari") ? "safari" : "unknown"
}

function Sa() {
  const n = Vn(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    o = navigator,
    a = "connection";
  return t ? ut([!("SharedWorker" in r), o[a] && "ontypechange" in o[a], !("sinkId" in new Audio)]) >= 2 : e ? ut(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Aa() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Oa() {
  const n = window;
  return ut([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Ra() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) Vn() === "chromium" && Oa() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Da() {
  if (navigator.mimeTypes === void 0) throw new J(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function Ia() {
  if (window.Notification === void 0) throw new J(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new J(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new J(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new J(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Na() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new J(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Ca() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new J(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function ka() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new J(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new J(-3, `${t} not an object`);
  return n
}

function Pa() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new J(-1, "navigator.productSub is undefined");
  return n
}

function xa() {
  if (navigator.connection === void 0) throw new J(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new J(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function La() {
  return navigator.userAgent
}

function Ma() {
  if (navigator.webdriver == null) throw new J(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Ba() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new J(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new J(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new J(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function Ha() {
  if (window.external === void 0) throw new J(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new J(-2, "window.external.toString is not a function");
  return n.toString()
}

function Ua() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Fa() {
  const n = {
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
  let t;
  const e = {},
    r = Zn(window);
  let o = [];
  window.document !== void 0 && (o = Zn(window.document));
  for (t in n) {
    const a = n[t];
    if (a !== void 0) {
      const i = a.window === void 0 ? !1 : Nn(r, ...a.window),
        s = a.document === void 0 || !o.length ? !1 : Nn(o, ...a.document);
      e[t] = i || s
    }
  }
  return e
}
const ja = {
  android: Sa,
  browserKind: Ta,
  browserEngineKind: Vn,
  documentFocus: Aa,
  userAgent: La,
  appVersion: wa,
  rtt: xa,
  windowSize: Ua,
  pluginsLength: Ca,
  pluginsArray: Na,
  errorTrace: ba,
  productSub: Pa,
  windowExternal: Ha,
  mimeTypesConsistent: Da,
  evalLength: va,
  webGL: Ba,
  webDriver: Ma,
  languages: Ra,
  notificationPermissions: Ia,
  documentElementKeys: ya,
  functionBind: Ea,
  process: ka,
  distinctiveProps: Fa
};
class Ga {
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
    const [t, e] = Yo(this.components, ga);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await Jo(ja), this.components
  }
}

function Wa() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${Xo}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Va({
  monitoring: n = !0
} = {}) {
  n && Wa();
  const t = new Ga;
  return await t.collect(), t
}
let bn = null;
async function za() {
  return (await $a()).detect()
}

function $a() {
  return bn || (bn = Va({
    monitoring: !1
  })), bn
}

function Lr(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function Mr(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class qa {
  constructor(t) {
    $(this, "bytes");
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

function WE(n) {
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

function VE(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${Mr(new Uint8Array(e))}`)
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

function zE(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    o = e.indexOf(";base64"),
    a = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const i = Lr(r),
      s = new Uint8Array(i.byteLength);
    return s.set(i), new Blob([s], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}
async function B(n, t = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(n)),
    r = await crypto.subtle.digest(t, e);
  return Mr(new Uint8Array(r))
}
const X = Math,
  Te = () => 0;

function Ka() {
  const n = X.acos || Te,
    t = X.acosh || Te,
    e = X.asin || Te,
    r = X.asinh || Te,
    o = X.atanh || Te,
    a = X.atan || Te,
    i = X.sin || Te,
    s = X.sinh || Te,
    u = X.cos || Te,
    c = X.cosh || Te,
    d = X.tan || Te,
    p = X.tanh || Te,
    f = X.exp || Te,
    _ = X.expm1 || Te,
    g = X.log1p || Te,
    h = v => X.pow(X.PI, v),
    w = v => X.log(v + X.sqrt(v * v - 1)),
    N = v => X.log(v + X.sqrt(v * v + 1)),
    T = v => X.log((1 + v) / (1 - v)) / 2,
    R = v => X.exp(v) - 1 / X.exp(v) / 2,
    S = v => (X.exp(v) + 1 / X.exp(v)) / 2,
    I = v => X.exp(v) - 1,
    A = v => (X.exp(2 * v) - 1) / (X.exp(2 * v) + 1),
    y = v => X.log(1 + v);
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: w(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: N(1),
    atanh: o(.5),
    atanhPf: T(.5),
    atan: a(.5),
    sin: i(-1e300),
    sinh: s(1),
    sinhPf: R(1),
    cos: u(10.000000000123),
    cosh: c(1),
    coshPf: S(1),
    tan: d(-1e300),
    tanh: p(1),
    tanhPf: A(1),
    exp: f(1),
    expm1: _(1),
    expm1Pf: I(1),
    log1p: g(10),
    log1pPf: y(10),
    powPI: h(-100)
  }
}
const Xa = () => {
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
          o = d => /.+(\s).+/g.test(d),
          a = t ?? {},
          i = typeof a.name == "string" ? a.name : "",
          s = typeof a.message == "string" ? a.message : "",
          u = o(s) ? e ? `${s} [${e}]` : s : void 0,
          c = r[i] ? i : void 0;
        n.push({
          trustedName: c,
          trustedMessage: u
        })
      }
    }
  },
  Br = Xa(),
  {
    captureError: ae
  } = Br,
  k = (n, t = "") => {
    try {
      return n()
    } catch (e) {
      return t ? ae(e, t) : ae(e)
    }
  },
  Ee = n => {
    try {
      return n()
    } catch {
      return
    }
  },
  Ya = () => ({
    data: Br.getErrors()
  });
var Ie = (n => (n.WINDOWS = "Windows", n.LINUX = "Linux", n.APPLE = "Apple", n.OTHER = "Other", n))(Ie || {});
const Hr = !globalThis.document && globalThis.WorkerGlobalScope;

function Ja() {
  const n = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (t) {
    return (t instanceof Error ? t.message : String(t)).length + (n + "").split(n.name).join("").length
  }
}
const mn = Ja(),
  pe = mn == 80,
  Et = mn == 58,
  Tt = mn == 77,
  er = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [mn] || null,
  Ur = pe && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function Fr() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function Qa() {
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
        } catch (c) {}
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
const Cn = n => /windows phone/ig.test(n) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/ig.test(n) ? "Windows" : /android/ig.test(n) ? "Android" : /cros/ig.test(n) ? "Chrome OS" : /linux/ig.test(n) ? "Linux" : /ipad/ig.test(n) ? "iPad" : /iphone/ig.test(n) ? "iPhone" : /ipod/ig.test(n) ? "iPod" : /ios/ig.test(n) ? "iOS" : /mac/ig.test(n) ? "Mac" : "Other";

function jr(n, t) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(n) ? Ie.WINDOWS : /android|linux|cros/ig.test(n) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? Ie.APPLE : Ie.OTHER;
  if (!t) return [e];
  const r = /win/ig.test(t) ? Ie.WINDOWS : /android|arm|linux/ig.test(t) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? Ie.APPLE : Ie.OTHER;
  return [e, r]
}
const {
  userAgent: Za,
  platform: ei
} = globalThis.navigator || {}, [cn, tr] = jr(Za, ei), Gr = ({
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
    c = n.match(/(edgios|edg|edge|edga)\/(\d+)./i),
    d = c && /edgios/i.test(c[1]),
    p = n.match(/(crios|chrome)\/(\d+)./i),
    f = n.match(/(fxios|firefox)\/(\d+)./i),
    g = /AppleWebKit/g.test(n) && /Safari/g.test(n) && !f && !p && !c && n.match(/(version)\/(\d+)\.(\d|\.)+\s(mobile|safari)/i);
  if (p) {
    const h = p[1],
      w = p[2];
    return `${h} ${w}${o?" Opera":a?" Vivaldi":i?" DuckDuckGo":s?" Yandex":c?" Edge":e?" Brave":""}`
  } else if (d && c) {
    const h = c[1],
      w = c[2];
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
}, Wr = ({
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
    c = /^(windows|ms(-|)office|microsoft|compatible|[a-z]|x64|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|outlook|ms(-|)office|microsoft|trident|\.net|msie|httrack|media center|infopath|aol|opera|iemobile|webbrowser).+/i,
    d = /w(ow|in)64/i,
    p = /cros/i,
    f = /^([a-z]|x11|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|trident).+/i,
    _ = /\d+\.\d+\.\d+/i,
    g = /linux|x11|ubuntu|debian/i,
    h = /^([a-z]|x11|unknown|compatible|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|java|oracle|\+http|http|unknown|mozilla|konqueror|valve).+/i,
    w = /(cpu iphone|cpu os|iphone os|mac os|macos|intel os|ppc mac).+/i,
    N = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i,
    T = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
    R = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
    S = (I, A) => I.filter(y => A.test(y)).length;
  if (n = n.trim().replace(/\s{2,}/, " ").replace(e, ""), r.test(n)) {
    const I = n.match(r);
    if (!I) return "unknown";
    const y = I[0].slice(1, -1).replace(/,/g, ";").split(";").map(v => v.trim());
    if (S(y, o)) return y.map(v => s.test(v) ? s.exec(v)[0].replace("-", " ") : v).filter(v => !a.test(v)).join(" ").replace(t ? i : "", "").trim().replace(/\s{2,}/, " ");
    if (S(y, u)) return y.filter(v => !c.test(v)).join(" ").replace(/\sNT (\d+\.\d+)/, (v, E) => E == "10.0" ? " 10" : E == "6.3" ? " 8.1" : E == "6.2" ? " 8" : E == "6.1" ? " 7" : E == "6.0" ? " Vista" : E == "5.2" ? " XP Pro" : E == "5.1" ? " XP" : E == "5.0" ? " 2000" : E == "4.0" ? v : " " + E).replace(d, "(64-bit)").trim().replace(/\s{2,}/, " ");
    if (S(y, p)) return y.filter(v => !f.test(v)).join(" ").replace(t ? _ : "", "").trim().replace(/\s{2,}/, " ");
    if (S(y, g)) return y.filter(v => !h.test(v)).join(" ").trim().replace(/\s{2,}/, " ");
    if (S(y, w)) return y.map(v => {
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
          H = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(E) || [])[0] || "").replace(/\./g, "_"),
          x = /^10/.test(H) ? H : (/^\d{2,}/.exec(H) || [])[0],
          U = x ? D[x] : void 0;
        return U ? `macOS ${U}` : E
      }
      return v
    }).filter(v => !N.test(v)).join(" ").replace(/\slike mac.+/ig, "").trim().replace(/\s{2,}/, " ");
    {
      const v = y.filter(E => R.test(E));
      return v.length ? v.join(" ").trim().replace(/\s{2,}/, " ") : y.join(" ")
    }
  } else return "unknown"
}, Vr = n => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(n) || [])[1];
  return pe && !!e
}, ce = (n = 0) => new Promise(t => setTimeout(t, n)), zr = [
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
].map(n => String.fromCodePoint(...n)), kn = `
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

function ti(n) {
  var r;
  if (!n) return null;
  const t = /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i;
  return /radeon/i.test(n) ? "AMD" : /geforce/i.test(n) ? "NVIDIA" : (((r = t.exec(n)) == null ? void 0 : r[0]) || "other").toLocaleUpperCase()
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

function ni() {
  const n = {};
  return {
    getRecords: () => n,
    documentLie: (t, e) => {
      const r = e instanceof Array;
      return n[t] ? r ? n[t] = [...n[t], ...e] : n[t].push(e) : r ? n[t] = e : n[t] = [e]
    }
  }
}
const $r = ni(),
  {
    documentLie: ne
  } = $r,
  qr = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function hn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function ri(n) {
  try {
    if (!pe) return n;
    const t = n.document.createElement("div");
    t.setAttribute("id", hn()), t.setAttribute("style", qr), t.innerHTML = "<div><iframe></iframe></div>", n.document.body.appendChild(t);
    const e = [...[...t.childNodes][0].childNodes][0];
    if (!e) return null;
    const {
      contentWindow: r
    } = e || {};
    if (!r) return null;
    const o = r.document.createElement("div");
    return o.innerHTML = "<div><iframe></iframe></div>", r.document.body.appendChild(o), [...[...o.childNodes][0].childNodes][0].contentWindow
  } catch (t) {
    return ae(t, "client blocked behemoth iframe"), n
  }
}
const nr = hn(),
  pt = "Reflect" in globalThis;

function oi(n) {
  return n.constructor.name == "TypeError"
}

function ye({
  spawnErr: n,
  withStack: t,
  final: e
}) {
  try {
    throw n(), Error()
  } catch (r) {
    return oi(r) ? t ? t(r) : !1 : !0
  } finally {
    e && e()
  }
}

function ai(n) {
  try {
    return n(), !1
  } catch {
    return !0
  }
}

function rr(n) {
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

function ot(n, t, e = 1) {
  const r = n;
  return e === 0 ? t.test(r.message) : t.test(r.stack.split(`
`)[e])
}
const ii = /at Function\.toString /,
  si = /at Object\.toString/,
  ci = /at (Function\.)?\[Symbol.hasInstance\]/,
  ui = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  or = /strict mode/;

function ar({
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
  let c = {
    "failed illegal error": !!r && ye({
      spawnErr: () => {
        r.prototype[a]
      }
    }),
    "failed undefined properties": !!r && !!i && /^(screen|navigator)$/i.test(i) && !!(Object.getOwnPropertyDescriptor(u[i.toLowerCase()], a) || pt && Reflect.getOwnPropertyDescriptor(u[i.toLowerCase()], a)),
    "failed call interface error": ye({
      spawnErr: () => {
        new t, t.call(e)
      }
    }),
    "failed apply interface error": ye({
      spawnErr: () => {
        new t, t.apply(e)
      }
    }),
    "failed new instance error": ye({
      spawnErr: () => {
        new t
      }
    }),
    "failed class extends error": !Tt && ye({
      spawnErr: () => {
        class f extends t {}
      }
    }),
    "failed null conversion error": ye({
      spawnErr: () => {
        Object.setPrototypeOf(t, null).toString()
      },
      final: () => {
        Object.setPrototypeOf(t, s)
      }
    }),
    "failed toString": !rr(a)[n.Function.prototype.toString.call(t)] || !rr("toString")[n.Function.prototype.toString.call(t.toString)],
    'failed "prototype" in function': "prototype" in t,
    "failed descriptor": !!(Object.getOwnPropertyDescriptor(t, "arguments") || Reflect.getOwnPropertyDescriptor(t, "arguments") || Object.getOwnPropertyDescriptor(t, "caller") || Reflect.getOwnPropertyDescriptor(t, "caller") || Object.getOwnPropertyDescriptor(t, "prototype") || Reflect.getOwnPropertyDescriptor(t, "prototype") || Object.getOwnPropertyDescriptor(t, "toString") || Reflect.getOwnPropertyDescriptor(t, "toString")),
    "failed own property": !!(t.hasOwnProperty("arguments") || t.hasOwnProperty("caller") || t.hasOwnProperty("prototype") || t.hasOwnProperty("toString")),
    "failed descriptor keys": Object.keys(Object.getOwnPropertyDescriptors(t)).sort().toString() != "length,name",
    "failed own property names": Object.getOwnPropertyNames(t).sort().toString() != "length,name",
    "failed own keys names": pt && Reflect.ownKeys(t).sort().toString() != "length,name",
    "failed object toString error": ye({
      spawnErr: () => {
        Object.create(t).toString()
      },
      withStack: f => pe && !ot(f, ii)
    }) || ye({
      spawnErr: () => {
        Object.create(new Proxy(t, {})).toString()
      },
      withStack: f => pe && !ot(f, si)
    }),
    "failed at incompatible proxy error": ye({
      spawnErr: () => {
        t.arguments, t.caller
      },
      withStack: f => Et && !ot(f, or, 0)
    }),
    "failed at toString incompatible proxy error": ye({
      spawnErr: () => {
        t.toString.arguments, t.toString.caller
      },
      withStack: f => Et && !ot(f, or, 0)
    }),
    "failed at too much recursion error": ye({
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
    let _ = new Proxy(t, {});
    const g = new Proxy(t, {});
    c = {
      ...c,
      "failed at too much recursion __proto__ error": !ye({
        spawnErr: () => {
          t.__proto__ = proxy, t++
        },
        final: () => {
          Object.setPrototypeOf(t, s)
        }
      }),
      "failed at chain cycle error": !ye({
        spawnErr: () => {
          Object.setPrototypeOf(f, Object.create(f)).toString()
        },
        final: () => {
          Object.setPrototypeOf(f, s)
        }
      }),
      "failed at chain cycle __proto__ error": !ye({
        spawnErr: () => {
          _.__proto__ = _, _++
        },
        final: () => {
          Object.setPrototypeOf(_, s)
        }
      }),
      "failed at reflect set proto": pt && ye({
        spawnErr: () => {
          throw Reflect.setPrototypeOf(t, Object.create(t)), nr in t, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(t, s)
        }
      }),
      "failed at reflect set proto proxy": pt && !ye({
        spawnErr: () => {
          Reflect.setPrototypeOf(g, Object.create(g)), nr in g
        },
        final: () => {
          Object.setPrototypeOf(g, s)
        }
      }),
      "failed at instanceof check error": pe && (ye({
        spawnErr: () => {
          t instanceof t
        },
        withStack: h => !ot(h, ci)
      }) || ye({
        spawnErr: () => {
          const h = new Proxy(t, {});
          h instanceof h
        },
        withStack: h => !ot(h, ui)
      })),
      "failed at define properties": pe && pt && ai(() => {
        Object.defineProperty(t, "", {
          configurable: !0
        }).toString(), Reflect.deleteProperty(t, "")
      })
    }
  }
  const p = Object.keys(c).filter(f => !!c[f]);
  return {
    lied: p.length,
    lieTypes: p
  }
}

function li(n) {
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
      const c = u.prototype ? u.prototype : u;
      [...new Set([...Object.getOwnPropertyNames(c), ...Object.keys(c)])].sort().forEach(d => {
        var g;
        if (d == "constructor" || !!i && !new Set(i).has(d) || !!s && new Set(s).has(d)) return;
        const f = /\s(.+)\]/,
          _ = `${u.name?u.name:f.test(u)?(g=f.exec(u))==null?void 0:g[1]:void 0}.${d}`;
        r.push(_);
        try {
          const h = u.prototype ? u.prototype : u;
          let w;
          try {
            if (typeof h[d] == "function") {
              if (w = ar({
                  scope: n,
                  apiFunction: h[d],
                  proto: h,
                  obj: null,
                  lieProps: e
                }), w.lied) {
                ne(_, w.lieTypes), e[_] = w.lieTypes;
                return
              }
              return
            }
            if (d != "name" && d != "length" && d[0] !== d[0].toUpperCase()) {
              const S = ["failed descriptor.value undefined"];
              ne(_, S), e[_] = S;
              return
            }
          } catch {}
          const T = Object.getOwnPropertyDescriptor(h, d).get;
          if (w = ar({
              scope: n,
              apiFunction: T,
              proto: h,
              obj: u,
              lieProps: e
            }), w.lied) {
            ne(_, w.lieTypes), e[_] = w.lieTypes;
            return
          }
          return
        } catch {
          const w = "failed prototype test execution";
          ne(_, w), e[_] = [w];
          return
        }
      })
    }
  }
}

function di() {
  const n = globalThis;
  if (Hr) return {
    iframeWindow: n,
    div: void 0
  };
  try {
    const t = n.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      o = hn();
    r.setAttribute("id", o), e.appendChild(r), r.innerHTML = `<div style="${qr}"><iframe></iframe></div>`, document.body.appendChild(e);
    const a = n[t];
    return {
      iframeWindow: ri(a) || n,
      div: r
    }
  } catch (t) {
    return ae(t, "client blocked phantom iframe"), {
      iframeWindow: n,
      div: void 0
    }
  }
}

function _i(n) {
  const t = li(n),
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
const fi = n => n && n.filter(t => !/object toString|toString incompatible proxy/.test(t)).length;
let un, it, Kr = {},
  Xr = {},
  ir = !1;

function gn() {
  if (ir) return;
  ir = !0;
  const {
    iframeWindow: n,
    div: t
  } = di() || {};
  un = n, it = t;
  const {
    lieDetector: e,
    lieDetail: r
  } = _i(un);
  if (!Hr) {
    const o = e.getProps();
    Kr = Object.keys(o).reduce((a, i) => (a[i] = fi(o[i]), a), {}), Xr = JSON.parse(JSON.stringify(r))
  }
}

function wn() {
  return gn(), un
}

function Yr() {
  return gn(), it
}

function pi() {
  it == null || it.remove(), it = void 0, un = void 0
}

function ze() {
  return gn(), Kr
}

function mi() {
  return gn(), Xr
}
const hi = () => {
    const n = $r.getRecords(),
      t = Object.keys(n).reduce((e, r) => (e += n[r].length, e), 0);
    return {
      data: n,
      totalLies: t
    }
  },
  gi = n => typeof n == "function",
  wi = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
  nn = (n, {
    strict: t = !1
  } = {}) => {
    if (!n) return [];
    const e = [];
    [/([A-Z]{3,}[a-z])/g, /([a-z][A-Z]{3,})/g, /([a-z][A-Z]{2,}[a-z])/g, /([a-z][\d]{2,}[a-z])/g, /([A-Z][\d]{2,}[a-z])/g, /([a-z][\d]{2,}[A-Z])/g].forEach(d => {
      const p = n.match(d);
      if (p) return e.push(p.join(", "))
    });
    const o = [],
      a = n.replace(/\d|\W|_/g, " ").replace(/\s+/g, " ").trim().split(" ").join("_"),
      i = a.length,
      s = [...a];
    s.forEach((d, p) => {
      const f = p + 1,
        _ = s[f];
      if (_ !== "_" && d !== "_" && f !== i) {
        const h = d + _;
        wi.test(h) && o.push(h)
      }
    });
    const u = [...!t && o.length < 3 ? [] : o, ...!t && e.length < 4 ? [] : e],
      c = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return u.filter(d => !c.includes(d))
  };

function Jr(n) {
  if (n) return ("" + n).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...t) => `${t[1]}${t[6][0]}${t[6].slice(1).replace(/\d/g,"0")}s`)
}
const yi = n => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + n).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  Qr = n => {
    if (!n) return;
    const t = yi(n),
      e = t.length,
      r = /\s{2,}|^\s|\s$/.test(n),
      o = /^ANGLE/.test(n) && !(/^ANGLE \((.+)\)/.exec(n) || [])[1],
      a = nn(n, {
        strict: !0
      }).join(", "),
      i = e && !r && !o,
      s = i && !a.length ? "high" : i && a.length ? "moderate" : "low",
      u = s == "high" ? "A" : s == "moderate" ? "C" : "F",
      c = new Set([r ? "found extra spaces" : void 0, o ? "broken angle structure" : void 0]);
    return c.delete(void 0), {
      parts: t,
      warnings: [...c],
      gibbers: a,
      confidence: s,
      grade: u
    }
  },
  bi = () => {
    const n = [];
    return {
      getBin: () => n,
      sendToTrash: (t, e, r = void 0) => {
        const a = gi(e) ? "proxy behavior detected" : e;
        return n.push({
          name: t,
          value: a
        }), r
      }
    }
  },
  Zr = bi(),
  {
    sendToTrash: se
  } = Zr,
  vi = () => ({
    trashBin: Zr.getBin()
  });
async function Ei() {
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

function Ti() {
  const n = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"],
    t = new Set;
  for (const e of n) try {
    const r = Intl[e];
    if (!r) continue;
    t.add(new r().resolvedOptions().locale)
  } catch {}
  return [...t].join(",")
}

function Si(n) {
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

function Ai() {
  try {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone ?? ""
  } catch {
    return ""
  }
}

function Oi() {
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
async function Ri(n) {
  const [t, e] = await Promise.all([Ei(), Promise.resolve(Oi())]), r = navigator.deviceMemory, o = navigator.language, a = Ti(), {
    systemCurrencyLocale: i,
    engineCurrencyLocale: s
  } = Si(o);
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
    timezoneLocation: Ai(),
    webglRenderer: e.renderer,
    webglVendor: e.vendor,
    lies: {
      proto: {}
    }
  }
}

function Di(n) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: n == null ? void 0 : n.name
  })
}

function Ii(n) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: n == null ? void 0 : n.name
  })
}
async function Ni() {
  try {
    await ce();
    const n = P => {
        try {
          return P()
        } catch {
          return
        }
      },
      t = () => new Promise(P => {
        const x = n(() => new Di);
        if (!x) return P(null);
        const U = setTimeout(() => {
          x.terminate(), P(null)
        }, 3e3);
        x.onerror = () => {
          clearTimeout(U), x.terminate(), P(null)
        }, x.onmessage = Q => {
          clearTimeout(U), x.terminate(), P(Q.data)
        }
      }),
      e = () => new Promise(P => {
        const x = n(() => new Ii);
        if (!x) return P(null);
        const U = setTimeout(() => {
          x.port.close(), P(null)
        }, 3e3);
        x.port.start(), x.port.onmessage = Q => {
          clearTimeout(U), x.port.close(), P(Q.data)
        }
      }),
      r = P => (ae(P), null),
      [o, a] = await Promise.all([e().catch(r), t().catch(r)]);
    let i = null,
      s = !1;
    if (a != null && a.userAgent ? i = a : (s = !0, i = await Ri("dedicated").catch(r) ?? null), !i || !i.userAgent) return;
    if (s && (i.lied = !0, i.lies.workerUnavailable = "dedicated worker did not respond; collected from main thread", ne("WorkerGlobalScope", i.lies.workerUnavailable)), o != null && o.userAgent && !s) {
      const P = [];
      o.userAgent !== i.userAgent && P.push("userAgent"), o.platform !== i.platform && P.push("platform"), o.hardwareConcurrency !== i.hardwareConcurrency && P.push("hardwareConcurrency"), o.deviceMemory !== i.deviceMemory && P.push("deviceMemory"), o.timezoneLocation !== i.timezoneLocation && P.push("timezoneLocation"), P.length && (i.lied = !0, i.lies.workerMismatch = `dedicated and shared worker disagree on: ${P.join(", ")}`, ne("WorkerGlobalScope", i.lies.workerMismatch))
    }
    i.system = Cn(i.userAgent), i.device = Wr({
      userAgent: i.userAgent
    });
    const {
      system: u,
      userAgent: c,
      userAgentData: d,
      platform: p,
      deviceMemory: f,
      hardwareConcurrency: _
    } = i, g = "does not match worker scope";
    if (p != navigator.platform && ne("Navigator.platform", g), c != navigator.userAgent && ne("Navigator.userAgent", g), _ && _ != navigator.hardwareConcurrency && ne("Navigator.hardwareConcurrency", g), f && f != navigator.deviceMemory && ne("Navigator.deviceMemory", g), i.lies.proto) {
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
    const [h, w] = jr(c, p);
    h != w && (i.lied = !0, i.lies.os = `${w} platform and ${h} user agent do not match`, ne("WorkerGlobalScope", i.lies.os));
    const N = Gr({
        ua: c,
        os: u,
        isBrave: !1
      }),
      T = /safari/i.test(N) || /iphone|ipad/i.test(c) ? "JavaScriptCore" : /firefox/i.test(c) ? "SpiderMonkey" : /chrome/i.test(c) ? "V8" : void 0;
    T != er && (i.lied = !0, i.lies.engine = `${er} JS runtime and ${T} user agent do not match`, ne("WorkerGlobalScope", i.lies.engine));
    const R = P => (/\d+/.exec(P) || [])[0],
      S = R(N),
      I = R(d ? d.uaFullVersion ?? "" : ""),
      A = I && S,
      y = I == S;
    A && !y && (i.lied = !0, i.lies.version = `userAgentData version ${I} and user agent version ${S} do not match`, ne("WorkerGlobalScope", i.lies.version));
    const v = pe && CSS.supports("accent-color: initial");
    ((P, x) => {
      if (!/windows|mac/i.test(P) || !(x != null && x.platformVersion)) return !1;
      if (x.platform == "macOS") return v ? /_/.test(x.platformVersion) : !1;
      const U = (/windows ([\d|\.]+)/i.exec(P) || [])[1],
        Q = +U == 10,
        {
          platformVersion: ue
        } = x,
        Oe = {
          "6.1": "7",
          "6.2": "8",
          "6.3": "8.1",
          "10.0": "10"
        } [ue];
      if (!v && Oe) return Oe != U;
      const C = ue.split(".");
      if (C.length != 3) return !0;
      const L = +C[0] > 0;
      return L && !Q || !L && Q
    })(i.device, d) && (i.lied = !0, i.lies.platformVersion = "platform version is fake", ne("WorkerGlobalScope", i.lies.platformVersion)), i.userAgentVersion = S, i.userAgentDataVersion = I, i.userAgentEngine = T;
    const H = {
      ...Qr(i.webglRenderer) || {},
      compressedGPU: Jr(i.webglRenderer)
    };
    return {
      ...i,
      gpu: H,
      uaPostReduction: Vr(i.userAgent)
    }
  } catch (n) {
    ae(n, "workers failed or blocked by client");
    return
  }
}
const sr = Math.random();
async function Ci() {
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
async function ki() {
  var e, r, o;
  const n = [],
    t = a => {
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
    let u = i || s || !1;
    const c = 5e3,
      d = new OfflineAudioContext(1, c, 44100);
    n.push(d);
    const p = d.createAnalyser(),
      f = d.createOscillator(),
      _ = d.createDynamicsCompressor(),
      g = d.createBiquadFilter(),
      h = new Float32Array(p.frequencyBinCount);
    (e = p.getFloatFrequencyData) == null || e.call(p, h);
    const w = new Set(h).size;
    if (w > 1) {
      u = !0;
      const W = `expected -Infinity (silence) and got ${w} frequencies`;
      ne("AnalyserNode.getFloatFrequencyData", W)
    }
    const N = {
        "AnalyserNode.channelCount": k(() => p.channelCount),
        "AnalyserNode.channelCountMode": k(() => p.channelCountMode),
        "AnalyserNode.channelInterpretation": k(() => p.channelInterpretation),
        "AnalyserNode.context.sampleRate": k(() => p.context.sampleRate),
        "AnalyserNode.fftSize": k(() => p.fftSize),
        "AnalyserNode.frequencyBinCount": k(() => p.frequencyBinCount),
        "AnalyserNode.maxDecibels": k(() => p.maxDecibels),
        "AnalyserNode.minDecibels": k(() => p.minDecibels),
        "AnalyserNode.numberOfInputs": k(() => p.numberOfInputs),
        "AnalyserNode.numberOfOutputs": k(() => p.numberOfOutputs),
        "AnalyserNode.smoothingTimeConstant": k(() => p.smoothingTimeConstant),
        "AnalyserNode.context.listener.forwardX.maxValue": k(() => Ee(() => p.context.listener.forwardX.maxValue)),
        "BiquadFilterNode.gain.maxValue": k(() => g.gain.maxValue),
        "BiquadFilterNode.frequency.defaultValue": k(() => g.frequency.defaultValue),
        "BiquadFilterNode.frequency.maxValue": k(() => g.frequency.maxValue),
        "DynamicsCompressorNode.attack.defaultValue": k(() => _.attack.defaultValue),
        "DynamicsCompressorNode.knee.defaultValue": k(() => _.knee.defaultValue),
        "DynamicsCompressorNode.knee.maxValue": k(() => _.knee.maxValue),
        "DynamicsCompressorNode.ratio.defaultValue": k(() => _.ratio.defaultValue),
        "DynamicsCompressorNode.ratio.maxValue": k(() => _.ratio.maxValue),
        "DynamicsCompressorNode.release.defaultValue": k(() => _.release.defaultValue),
        "DynamicsCompressorNode.release.maxValue": k(() => _.release.maxValue),
        "DynamicsCompressorNode.threshold.defaultValue": k(() => _.threshold.defaultValue),
        "DynamicsCompressorNode.threshold.minValue": k(() => _.threshold.minValue),
        "OscillatorNode.detune.maxValue": k(() => f.detune.maxValue),
        "OscillatorNode.detune.minValue": k(() => f.detune.minValue),
        "OscillatorNode.frequency.defaultValue": k(() => f.frequency.defaultValue),
        "OscillatorNode.frequency.maxValue": k(() => f.frequency.maxValue),
        "OscillatorNode.frequency.minValue": k(() => f.frequency.minValue)
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
    const [R, S] = await Promise.all([T(d), Ci().catch(() => !1)]), {
      floatFrequencyData: I,
      floatTimeDomainData: A,
      buffer: y,
      compressorGainReduction: v
    } = R || {};
    await ce();
    const E = (W, V, Y) => {
        const ie = Math.min(Y, W.length),
          le = [];
        for (let de = V; de < ie; de++) le.push(W[de]);
        return le
      },
      D = W => {
        if (!W) return 0;
        let V = 0;
        for (let Y = 0; Y < W.length; Y++) V += Math.abs(W[Y]);
        return V
      },
      H = D(I),
      P = D(A),
      x = new Float32Array(c);
    let U = new Float32Array;
    y && ((r = y.copyFromChannel) == null || r.call(y, x, 0), U = ((o = y.getChannelData) == null ? void 0 : o.call(y, 0)) || []);
    const Q = E(x, 4500, 4600),
      ue = E(U, 4500, 4600),
      F = D(E(U, 4500, c));
    S && (u = !0, ne("AudioBuffer", "audio is fake"));
    const Oe = "" + ue == "" + Q,
      C = "copyFromChannel" in AudioBuffer.prototype;
    C && !Oe && (u = !0, ne("AudioBuffer", "getChannelData and copyFromChannel samples mismatch"));
    const L = new Set(U).size;
    if (L == c) {
      const W = `${L} unique samples of ${c} is too high`;
      se("AudioBuffer", W)
    }
    const z = (W, V) => Math.floor(Math.random() * (V - W + 1)) + W,
      ee = (W, V, Y) => {
        const {
          length: ie
        } = V, le = 20, de = z(275, ie - (le + 1)), He = de + le / 2, Pe = de + le;
        V.getChannelData(0)[de] = W, V.getChannelData(0)[He] = W, V.getChannelData(0)[Pe] = W, V.copyFromChannel(Y, 0);
        const $e = [V.getChannelData(0)[de] === 0 ? Math.random() : 0, V.getChannelData(0)[He] === 0 ? Math.random() : 0, V.getChannelData(0)[Pe] === 0 ? Math.random() : 0];
        return [...new Set([...V.getChannelData(0), ...Y, ...$e])].filter(Qt => Qt !== 0)
      },
      me = (W, V, Y) => {
        V.copyToChannel(Y.map(() => W), 0);
        const ie = V.getChannelData(0)[0];
        return [...V.getChannelData(0)].map(de => de !== ie || !de ? Math.random() : de).filter(de => de !== ie)
      };
    let Se = (() => {
      try {
        const V = [...new Set([...ee(sr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...me(sr, new AudioBuffer({
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
    const Yt = {
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
    Se && (u = !0, ne("AudioBuffer", "sample noise detected"));
    const Jt = "" + [v, H, P],
      _t = Yt[Jt];
    return _t && !_t.includes(F) && (ke.AUDIO = !0, se("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: L,
      compressorGainReduction: v,
      floatFrequencyDataSum: H,
      floatTimeDomainDataSum: P,
      sampleSum: F,
      binsSample: ue,
      copySample: C ? Q : [void 0],
      values: N,
      noise: Se,
      baseLatency: Pi(),
      lied: u
    }
  } catch (a) {
    ae(a, "OfflineAudioContext failed or blocked by client");
    return
  } finally {
    n.forEach(t)
  }
}

function Pi() {
  var n;
  try {
    const t = window.AudioContext ?? window.webkitAudioContext;
    if (!t) return -2;
    const e = new t,
      r = e.baseLatency;
    return (n = e.close) == null || n.call(e), typeof r == "number" ? r : -1
  } catch (t) {
    return ae(t), -1
  }
}

function bt(n) {
  n && (n.width = 0, n.height = 0, n.remove())
}
const xi = () => {
    const o = {
        willReadFrequently: !0,
        desynchronized: !0
      },
      a = document.createElement("canvas"),
      i = document.createElement("canvas"),
      s = document.createElement("canvas");
    try {
      const u = a.getContext("2d", o),
        c = i.getContext("2d", o),
        d = s.getContext("2d", o);
      if (!u || !c || !d) throw new Error("canvas context blocked");
      a.width = 40, a.height = 40, i.width = 8, i.height = 8, s.width = 8, s.height = 8;
      const p = new Uint8Array(256),
        f = new Uint8Array(256);
      let _ = 0;
      for (let R = 0; R < 8; R++)
        for (let S = 0; S < 8; S++) {
          const I = ~~(Math.random() * 256),
            A = ~~(Math.random() * 256),
            y = ~~(Math.random() * 256);
          p[_] = I, p[_ + 1] = A, p[_ + 2] = y, p[_ + 3] = 255, _ += 4, c.fillStyle = `rgba(${I}, ${A}, ${y}, 255)`, c.fillRect(R, S, 1, 1)
        }
      _ = 0;
      for (let R = 0; R < 8; R++)
        for (let S = 0; S < 8; S++) {
          const I = c.getImageData(R, S, 1, 1).data,
            A = I[0],
            y = I[1],
            v = I[2],
            E = I[3];
          d.fillStyle = `rgba(${A}, ${y}, ${v}, ${E})`, d.fillRect(R, S, 1, 1);
          const D = d.getImageData(R, S, 1, 1).data,
            H = D[0],
            P = D[1],
            x = D[2],
            U = D[3];
          f[_] = A, f[_ + 1] = y, f[_ + 2] = v, f[_ + 3] = E, _ += 4, u.fillStyle = `rgba(${A!==H?H:255}, ${y!==P?P:255}, ${v!==x?x:255}, ${E!==U?U:1})`, u.fillRect(R * 5, S * 5, 5, 5)
        }
      const g = [],
        h = new Set;
      for (let R = 0; R < 64; R++) {
        const S = R * 4,
          I = p[S] !== f[S],
          A = p[S + 1] !== f[S + 1],
          y = p[S + 2] !== f[S + 2],
          v = p[S + 3] !== f[S + 3];
        if (I || A || y || v) {
          const E = (I ? "r" : "") + (A ? "g" : "") + (y ? "b" : "") + (v ? "a" : "");
          h.add(E), g.push([R, E])
        }
      }
      const w = a.toDataURL(),
        N = h.size ? [...h].sort().join(", ") : void 0,
        T = g.length || void 0;
      return {
        rgba: N,
        pixels: T,
        pixelImage: w
      }
    } catch {
      return
    } finally {
      bt(a), bt(i), bt(s)
    }
  },
  vn = ({
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
    multiplier: c = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, n.width, n.height), n.width = o.width, n.height = o.height, n.style && (n.style.display = "none");
    const p = (({
        seed: A,
        offset: y,
        multiplier: v
      }) => {
        let E = Number(A) % Number(y);
        return {
          getNextSeed: () => (E = Number(v) * E % Number(y), E)
        }
      })({
        seed: s,
        offset: u,
        multiplier: c
      }),
      {
        getNextSeed: f
      } = p,
      _ = (A, y, v, E) => {
        const D = (A - 1) / y * (v || 1) || 0;
        return E ? D : Math.floor(D)
      },
      g = (A, y, v, E, D) => {
        const {
          width: H,
          height: P
        } = v, x = A.createRadialGradient(_(D(), y, H), _(D(), y, P), _(D(), y, H), _(D(), y, H), _(D(), y, P), _(D(), y, H));
        x.addColorStop(0, E[_(D(), y, E.length)]), x.addColorStop(1, E[_(D(), y, E.length)]), A.fillStyle = x
      },
      h = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      w = (A, y, v, E) => {
        const {
          width: D,
          height: H
        } = v, P = 2.99;
        A.font = `${H/P}px ${r.replace(/!important/gm,"")}`, A.strokeText("👾A", _(E(), y, D), _(E(), y, H), _(E(), y, D))
      },
      N = (A, y, v, E) => {
        const {
          width: D,
          height: H
        } = v;
        A.beginPath(), A.arc(_(E(), y, D), _(E(), y, H), _(E(), y, Math.min(D, H)), _(E(), y, 2 * Math.PI, !0), _(E(), y, 2 * Math.PI, !0)), A.stroke()
      },
      T = (A, y, v, E) => {
        const {
          width: D,
          height: H
        } = v;
        A.beginPath(), A.moveTo(_(E(), y, D), _(E(), y, H)), A.bezierCurveTo(_(E(), y, D), _(E(), y, H), _(E(), y, D), _(E(), y, H), _(E(), y, D), _(E(), y, H)), A.stroke()
      },
      R = (A, y, v, E) => {
        const {
          width: D,
          height: H
        } = v;
        A.beginPath(), A.moveTo(_(E(), y, D), _(E(), y, H)), A.quadraticCurveTo(_(E(), y, D), _(E(), y, H), _(E(), y, D), _(E(), y, H)), A.stroke()
      },
      S = (A, y, v, E) => {
        if (!("ellipse" in A)) return;
        const {
          width: D,
          height: H
        } = v;
        A.beginPath(), A.ellipse(_(E(), y, D), _(E(), y, H), _(E(), y, Math.floor(D / 2)), _(E(), y, Math.floor(H / 2)), _(E(), y, 2 * Math.PI, !0), _(E(), y, 2 * Math.PI, !0), _(E(), y, 2 * Math.PI, !0)), A.stroke()
      },
      I = [N, T, R];
    Tt || I.push(S), e && I.push(w), [...Array(a)].forEach(A => {
      g(t, u, o, h, f), t.shadowBlur = _(f(), u, i, !0), t.shadowColor = h[_(f(), u, h.length)];
      const y = I[_(f(), u, I.length)];
      y(t, u, o, f), t.fill()
    })
  };
async function Li() {
  let n, t;
  try {
    await ce();
    const e = ze(),
      r = wn(),
      o = e["HTMLCanvasElement.toDataURL"],
      a = e["HTMLCanvasElement.getContext"],
      i = e["CanvasRenderingContext2D.fillText"] || e["CanvasRenderingContext2D.font"] || e["CanvasRenderingContext2D.getImageData"] || e["CanvasRenderingContext2D.strokeText"],
      s = e["String.fromCodePoint"];
    let u = e["CanvasRenderingContext2D.measureText"] || e["TextMetrics.actualBoundingBoxAscent"] || e["TextMetrics.actualBoundingBoxDescent"] || e["TextMetrics.actualBoundingBoxLeft"] || e["TextMetrics.actualBoundingBoxRight"] || e["TextMetrics.fontBoundingBoxAscent"] || e["TextMetrics.fontBoundingBoxDescent"] || e["TextMetrics.width"],
      c = o || a || i || u || s || !1,
      d = window;
    !Ur && r && (d = r);
    const p = d.document;
    n = p.createElement("canvas");
    const f = n.getContext("2d", {
      willReadFrequently: !1
    });
    t = p.createElement("canvas");
    const _ = t.getContext("2d", {
      desynchronized: !0,
      willReadFrequently: !0
    });
    if (!f) throw new Error("canvas context blocked");
    await ce();
    const g = Tt ? 50 : 75;
    vn({
      canvas: n,
      context: f,
      strokeText: !0,
      cssFontFamily: kn,
      area: {
        width: g,
        height: g
      },
      rounds: 10
    });
    const h = n.toDataURL();
    await ce();
    const w = xi();
    await ce();
    const N = kn.replace(/!important/gm, "");
    f.font = `10px ${N}`;
    const T = new Set,
      R = zr.reduce((x, U) => {
        const {
          actualBoundingBoxAscent: Q,
          actualBoundingBoxDescent: ue,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Oe,
          fontBoundingBoxAscent: C,
          fontBoundingBoxDescent: L,
          width: z
        } = f.measureText(U) || {}, ee = [Q, ue, F, Oe, C, L, z].join(",");
        return T.has(ee) || (T.add(ee), x.add(U)), x
      }, new Set),
      S = 1e-5 * [...T].map(x => x.split(",").reduce((U, Q) => U += +Q || 0, 0)).reduce((x, U) => x += U, 0),
      I = 75;
    await ce(), vn({
      canvas: n,
      context: f,
      area: {
        width: I,
        height: I
      }
    });
    const A = n.toDataURL();
    await ce(), vn({
      canvas: t,
      context: _,
      area: {
        width: I,
        height: I
      }
    });
    const y = t.toDataURL();
    f.restore(), f.clearRect(0, 0, n.width, n.height), n.width = 50, n.height = 50, f.font = `50px ${N}`, f.fillText("A", 7, 37);
    const v = n.toDataURL();
    f.restore(), f.clearRect(0, 0, n.width, n.height), n.width = 50, n.height = 50, f.font = `35px ${N}`, f.fillText("👾", 0, 37);
    const E = n.toDataURL();
    f.clearRect(0, 0, n.width, n.height), (w && w.pixels || Math.max(...f.getImageData(0, 0, 8, 8).data)) && (c = !0, ne("CanvasRenderingContext2D.getImageData", "pixel data modified")), n.width = 2, n.height = 2, f.fillStyle = "#000", f.fillRect(0, 0, n.width, n.height), f.fillStyle = "#fff", f.fillRect(2, 2, 1, 1), f.beginPath(), f.arc(0, 0, 2, 0, 1, !0), f.closePath(), f.fill();
    const D = f.getImageData(0, 0, 2, 2).data.join(""),
      H = {
        BLINK: ["255255255255178178178255246246246255555555255", "255255255255192192192255240240240255484848255", "255255255255177177177255246246246255535353255", "255255255255128128128255191191191255646464255", "255255255255178178178255247247247255565656255", "255255255255174174174255242242242255474747255", "255255255255229229229255127127127255686868255", "255255255255192192192255244244244255535353255"],
        GECKO: ["255255255255191191191255207207207255646464255", "255255255255192192192255240240240255484848255", "255255255255191191191255239239239255646464255", "255255255255191191191255223223223255606060255", "255255255255171171171255223223223255606060255", "255255255255188188188255245245245255525252255"],
        WEBKIT: ["255255255255185185185255233233233255474747255", "255255255255185185185255229229229255474747255", "255255255255185185185255218218218255474747255", "255255255255192192192255240240240255484848255", "255255255255178178178255247247247255565656255", "255255255255178178178255247247247255565656255", "255255255255192192192255240240240255484848255", "255255255255186186186255218218218255464646255"]
      };
    We.imageDataLowEntropy = D, (pe && !H.BLINK.includes(D) || Et && !H.GECKO.includes(D) || Tt && !H.WEBKIT.includes(D)) && (ke.CANVAS = !0), ke.CANVAS && se("CanvasRenderingContext2D.getImageData", "suspicious pixel data");
    const P = x => {
      const U = ee => ee % 1 !== 0,
        {
          actualBoundingBoxAscent: Q,
          actualBoundingBoxDescent: ue,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Oe,
          fontBoundingBoxAscent: C,
          fontBoundingBoxDescent: L
        } = x.measureText("") || {};
      return [Q, ue, F, Oe, C, L].find(ee => U(ee || 0))
    };
    return await ce(), P(f) && (u = !0, c = !0, ne("CanvasRenderingContext2D.measureText", "metric noise detected")), {
      dataURI: h,
      paintURI: A,
      paintCpuURI: y,
      textURI: v,
      emojiURI: E,
      mods: w,
      textMetricsSystemSum: S,
      liedTextMetrics: u,
      emojiSet: [...R],
      lied: c
    }
  } catch (e) {
    ae(e);
    return
  } finally {
    bt(n), bt(t)
  }
}

function Mi() {
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
          const N = !isNaN(+w),
            T = o[w],
            R = u.test(w),
            S = u.test(T);
          if (N && !S) return s.push(T);
          if (!N && !R) return s.push(w)
        });
        const c = {},
          d = w => w.charAt(0).toUpperCase() + w.slice(1),
          p = w => w.charAt(0).toLowerCase() + w.slice(1),
          f = w => w.slice(1),
          _ = /[A-Z]/g;
        s.forEach(w => {
          if (c[w]) return;
          const N = w.indexOf("-") > -1,
            T = _.test(w),
            R = w.charAt(0),
            S = N && R == "-",
            I = T && R == R.toUpperCase();
          if (w = S ? f(w) : I ? p(w) : w, N) {
            const A = w.split("-").map((y, v) => v == 0 ? y : d(y)).join("");
            A in o ? c[A] = !0 : d(A) in o && (c[d(A)] = !0)
          } else if (T) {
            const A = w.replace(_, y => "-" + y.toLowerCase());
            A in o ? c[A] = !0 : `-${A}` in o && (c[`-${A}`] = !0)
          }
        });
        const g = [...new Set([...i, ...s, ...Object.keys(c)])],
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
              const c = getComputedStyle(s);
              return {
                [u]: `${c.fontSize} ${c.fontFamily}`
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
    const e = n("getComputedStyle", {
        require: [ae]
      }),
      r = t(Yr());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    ae(e);
    return
  }
}

function Bi() {
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
      const u = [...Array(s)].map((d, p) => (p += i, `@media(device-${a}:${p}px){body{--device-${a}:${p};}}`)).join("");
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
      const c = 1e3;
      return [...Array(10)].find((d, p) => (s || (s = e({
        body: o,
        type: "width",
        rangeStart: p * c,
        rangeLen: c
      })), u || (u = e({
        body: o,
        type: "height",
        rangeStart: p * c,
        rangeLen: c
      })), !!(s && u))), {
        width: +s,
        height: +u
      }
    };
  try {
    const o = wn().window,
      {
        body: a
      } = o.document,
      {
        width: i,
        availWidth: s,
        height: u,
        availHeight: c
      } = o.screen,
      d = !(i - s || u - c);
    (screen.width !== i || i > 800 && d) && (ke.IFRAME_SCREEN = !0);
    const p = t(i, u),
      f = T => {
        var R;
        return !!((R = o.matchMedia(T)) != null && R.matches)
      },
      _ = T => {
        var R;
        return !!((R = matchMedia(T)) != null && R.matches)
      },
      g = {
        "prefers-reduced-motion": f("(prefers-reduced-motion: no-preference)") ? "no-preference" : f("(prefers-reduced-motion: reduce)") ? "reduce" : void 0,
        "prefers-color-scheme": _("(prefers-color-scheme: light)") ? "light" : _("(prefers-color-scheme: dark)") ? "dark" : void 0,
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
        orientation: _("(orientation: landscape)") ? "landscape" : _("(orientation: portrait)") ? "portrait" : void 0,
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
      N = r({
        body: a,
        width: i,
        height: u
      });
    return {
      mediaCSS: w,
      matchMediaCSS: g,
      screenQuery: N
    }
  } catch (o) {
    ae(o);
    return
  }
}

function Hi(n) {
  const t = [],
    e = n.length;
  for (let r = 0; r < e; r++) try {
    n[r]()
  } catch (o) {
    t.push(o.message)
  }
  return t
}

function Ui() {
  try {
    return {
      errors: Hi([() => new Function('alert(")')(), () => new Function("const foo;foo.bar")(), () => new Function("null.bar")(), () => new Function("abc.xyz = 123")(), () => new Function("const foo;foo.bar")(), () => new Function("(1).toString(1000)")(), () => new Function("[...undefined].length")(), () => new Function("var x = new Array(-1)")(), () => new Function("const a=1; const a=2;")()])
    }
  } catch (n) {
    ae(n);
    return
  }
}

function Fi(n, t) {
  if (!n || !t || !t.length) return !1;
  const e = t.reduce((i, s) => (i[s] = !0, i), {}),
    r = "Cambria Math" in e || "Nirmala UI" in e || "Leelawadee UI" in e || "HoloLens MDL2 Assets" in e || "Segoe Fluent Icons" in e,
    o = "Helvetica Neue" in e || "Luminari" in e || "PingFang HK Light" in e || "InaiMathi Bold" in e || "Galvji" in e || "Chakra Petch" in e,
    a = "Arimo" in e || "MONO" in e || "Ubuntu" in e || "Noto Color Emoji" in e || "Dancing Script" in e || "Droid Sans Mono" in e;
  return r && n != Ie.WINDOWS || o && n != Ie.APPLE ? !0 : !!(a && n != Ie.LINUX)
}

function ji(n, t, e) {
  var r;
  return n ? ((r = n.parentNode) == null || r.replaceChild(t, n), !0) : null
}

function Gi(n, ...t) {
  const e = document.createElement("template");
  return e.innerHTML = n.map((r, o) => `${r}${t[o]||""}`).join(""), document.importNode(e.content, !0)
}
const Pn = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  xn = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  ln = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  Wi = Object.keys(xn).map(n => xn[n]).flat(),
  Vi = Object.keys(Pn).map(n => Pn[n]).flat(),
  zi = Object.keys(ln).map(n => ln[n]).flat(),
  $i = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  qi = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  Ki = [...Wi, ...Vi, ...$i, ...qi, ...zi].sort();
async function Xi() {
  const n = ({
      doc: o,
      id: a,
      emojis: i
    }) => {
      try {
        ji(o.getElementById(a), Gi`
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
					${i.map(_=>`<div class="pixel-emoji">${_}</div>`).join("")}
				</div>
			`);
        const s = _ => ({
            width: _.inlineSize,
            height: _.blockSize
          }),
          u = new Set,
          d = [...o.getElementsByClassName("pixel-emoji")].reduce((_, g, h) => {
            const w = getComputedStyle(g),
              N = i[h],
              {
                height: T,
                width: R
              } = s(w),
              S = `${R},${T}`;
            return u.has(S) || (u.add(S), _.add(N)), _
          }, new Set),
          p = _ => +_.replace("px", ""),
          f = 1e-5 * [...u].map(_ => _.split(",").map(g => p(g)).reduce((g, h) => g += +h || 0, 0)).reduce((_, g) => _ += g, 0);
        return o.body.removeChild(o.getElementById("pixel-emoji-container")), {
          emojiSet: [...d],
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
        document.fonts.check(`0px "${hn()}"`) || (a = o.reduce((c, d) => (document.fonts.check(`0px "${d}"`) && c.push(d), c), []));
        const i = o.map(c => new FontFace(c, `local("${c}")`)),
          u = (await Promise.allSettled(i.map(c => c.load()))).reduce((c, d) => (d.status == "fulfilled" && c.push(d.value.family), c), []);
        return [...new Set([...a, ...u])].sort()
      } catch {
        return []
      }
    }, e = o => {
      const a = ({
          fonts: s,
          fontMap: u
        }) => {
          const c = {
              11: u[11].find(_ => s.includes(_)),
              10: u[10].find(_ => s.includes(_)),
              "8.1": u["8.1"].find(_ => s.includes(_)),
              8: u[8].find(_ => s.includes(_)),
              7: u[7].filter(_ => s.includes(_)).length == u[7].length
            },
            d = "" + Object.keys(c).sort().filter(_ => !!c[_]),
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
            } [d];
          return f ? `Windows ${f}` : void 0
        },
        i = ({
          fonts: s,
          fontMap: u
        }) => {
          const c = {
              13: u[13].find(_ => s.includes(_)),
              12: u[12].find(_ => s.includes(_)),
              "10.15-11": u["10.15-11"].find(_ => s.includes(_)),
              "10.13-10.14": u["10.13-10.14"].find(_ => s.includes(_)),
              "10.12": u["10.12"].find(_ => s.includes(_)),
              "10.11": u["10.11"].find(_ => s.includes(_)),
              "10.10": u["10.10"].find(_ => s.includes(_)),
              "10.9": u["10.9"].filter(_ => s.includes(_)).length == u["10.9"].length
            },
            d = "" + Object.keys(c).sort().filter(_ => !!c[_]),
            f = {
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9,12,13": "Ventura",
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9,12": "Monterey",
              "10.10,10.11,10.12,10.13-10.14,10.15-11,10.9": "10.15-11",
              "10.10,10.11,10.12,10.13-10.14,10.9": "10.13-10.14",
              "10.10,10.11,10.12,10.9": "Sierra",
              "10.10,10.11,10.9": "El Capitan",
              "10.10,10.9": "Yosemite",
              "10.9": "Mavericks"
            } [d];
          return f ? `macOS ${f}` : void 0
        };
      return a({
        fonts: o,
        fontMap: Pn
      }) || i({
        fonts: o,
        fontMap: xn
      })
    }, r = o => Object.keys(ln).reduce((i, s) => {
      const u = ln[s];
      return u.filter(d => o.includes(d)).length == u.length ? [...i, s] : i
    }, []);
  try {
    await ce();
    const o = wn(),
      a = ze(),
      i = o && o.document && o.document.body ? o.document : document,
      s = "font-fingerprint",
      u = i.createElement("div");
    u.setAttribute("id", s), i.body.appendChild(u);
    const {
      emojiSet: c,
      pixelSizeSystemSum: d
    } = n({
      doc: i,
      id: s,
      emojis: zr
    }) || {}, f = await t(Ki), _ = e(f), g = r(f), h = a["FontFace.load"] || a["FontFace.family"] || a["FontFace.status"] || a["String.fromCodePoint"] || a["CSSStyleDeclaration.setProperty"] || a["CSS2Properties.setProperty"] || !1;
    return Fi(cn, f) && (ke.FONTS = !0, We.FontOsIsBad = !0, se("platform", `${cn} system and fonts are uncommon`)), {
      fontFaceLoadFonts: f,
      platformVersion: _,
      apps: g,
      emojiSet: c,
      pixelSizeSystemSum: d,
      lied: h
    }
  } catch (o) {
    ae(o);
    return
  }
}
const q = n => {
    const t = `${JSON.stringify(n)}`;
    return ("0000000" + (t.split("").reduce((r, o, a) => Math.imul(31, r) + t.charCodeAt(a) | 0, 2166136261) >>> 0).toString(16)).substr(-8)
  },
  Yi = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var we = (n => (n.WINDOWS = "Windows", n.MAC = "Mac", n.LINUX = "Linux", n.ANDROID = "Android", n.CHROME_OS = "Chrome OS", n))(we || {});
const Ji = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function Qi() {
  var v;
  if (!pe) return [];
  const n = "getVideoPlaybackQuality" in HTMLVideoElement.prototype,
    t = CSS.supports("color-scheme: initial"),
    e = CSS.supports("appearance: initial"),
    r = "DisplayNames" in Intl,
    o = CSS.supports("aspect-ratio: initial"),
    a = CSS.supports("border-end-end-radius: initial"),
    i = "randomUUID" in Crypto.prototype,
    s = "BarcodeDetector" in window,
    u = "downlinkMax" in (((v = window.NetworkInformation) == null ? void 0 : v.prototype) || {}),
    c = "ContentIndex" in window,
    d = "ContactsManager" in window,
    p = "EyeDropper" in window,
    f = "FileSystemWritableFileStream" in window,
    _ = "HID" in window && "HIDDevice" in window,
    g = "SerialPort" in window && "Serial" in window,
    h = "SharedWorker" in window,
    w = "ontouchstart" in Window && "TouchEvent" in window,
    N = "setAppBadge" in Navigator.prototype,
    T = (E, D) => E ? [D] : [],
    R = {
      [we.ANDROID]: [...T(o, s), ...T(e, c), ...T(n, d), u, ...T(i, !p), ...T(r, !f), ...T(a, !_), ...T(a, !g), !h, w, ...T(t, !N)],
      [we.CHROME_OS]: [...T(o, s), ...T(e, !c), ...T(n, !d), u, ...T(i, p), ...T(r, f), ...T(a, _), ...T(a, g), h, w || !w, ...T(t, !N)],
      [we.WINDOWS]: [...T(o, !s), ...T(e, !c), ...T(n, !d), !u, ...T(i, p), ...T(r, f), ...T(a, _), ...T(a, g), h, w || !w, ...T(t, N)],
      [we.MAC]: [...T(o, s), ...T(e, !c), ...T(n, !d), !u, ...T(i, p), ...T(r, f), ...T(a, _), ...T(a, g), h, !w, ...T(t, N)],
      [we.LINUX]: [...T(o, !s), ...T(e, !c), ...T(n, !d), !u, ...T(i, p), ...T(r, f), ...T(a, _), ...T(a, g), h, !w || !w, ...T(t, !N)]
    },
    S = {
      noContentIndex: e && !c,
      noContactsManager: n && !d,
      noDownlinkMax: !u
    },
    I = Object.keys(R).reduce((E, D) => {
      const H = R[D],
        P = +(H.filter(x => x).length / H.length).toFixed(2);
      return E[D] = P, E
    }, {}),
    A = Object.keys(I).reduce((E, D) => I[E] > I[D] ? E : D),
    y = I[A];
  return [I, y, S]
}
const cr = {
  "-apple-system": we.MAC,
  "Segoe UI": we.WINDOWS,
  Tahoma: we.WINDOWS,
  "Yu Gothic UI": we.WINDOWS,
  "Microsoft JhengHei UI": we.WINDOWS,
  "Microsoft YaHei UI": we.WINDOWS,
  "Meiryo UI": we.WINDOWS,
  Cantarell: we.LINUX,
  Ubuntu: we.LINUX,
  Sans: we.LINUX,
  "sans-serif": we.LINUX,
  "Fira Sans": we.LINUX,
  Roboto: we.ANDROID
};

function Zi() {
  const {
    body: n
  } = document, t = document.createElement("div");
  n.appendChild(t);
  try {
    const e = String([...Ji.reduce((o, a) => (t.setAttribute("style", `font: ${a} !important`), o.add(getComputedStyle(t).fontFamily)), new Set)]),
      r = cr[e];
    return cr[e] ? `${e}:${r}` : e
  } catch {
    return ""
  } finally {
    n.removeChild(t)
  }
}
async function es({
  webgl: n
}) {
  var t, e;
  try {
    await ce();
    const r = ze(),
      o = Yr(),
      a = Object.keys({
        ...navigator.mimeTypes
      }),
      i = Zi(),
      [s, u, c] = Qi(),
      d = {
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
              backgroundColor: I
            } = getComputedStyle(S) || {};
            return o || document.body.removeChild(S), I === "rgb(255, 0, 0)"
          })(),
          prefersLightColor: !!((t = matchMedia("(prefers-color-scheme: light)")) != null && t.matches),
          uaDataIsBlank: "userAgentData" in navigator && (((e = navigator.userAgentData) == null ? void 0 : e.platform) === "" || await navigator.userAgentData.getHighEntropyValues(["platform"]).platform === ""),
          pdfIsDisabled: "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !1,
          noTaskbar: screen.height === screen.availHeight && screen.width === screen.availWidth,
          hasVvpScreenRes: innerWidth === screen.width && outerHeight === screen.height || "visualViewport" in window && visualViewport !== null && visualViewport.width === screen.width && visualViewport.height === screen.height,
          hasSwiftShader: /SwiftShader/.test(""),
          noWebShare: pe && CSS.supports("accent-color: initial") && (!("share" in navigator) || !("canShare" in navigator)),
          noContentIndex: !!(c != null && c.noContentIndex),
          noContactsManager: !!(c != null && c.noContactsManager),
          noDownlinkMax: !!(c != null && c.noDownlinkMax)
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
              return S.srcdoc = Yi, !!S.contentWindow
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
            } catch (I) {
              return ((S = I == null ? void 0 : I.constructor) == null ? void 0 : S.name) != "TypeError"
            }
          })(),
          hasToStringProxy: !!r["Function.toString"],
          hasBadWebGL: !1
        }
      },
      {
        likeHeadless: p,
        headless: f,
        stealth: _
      } = d,
      g = Object.keys(p),
      h = Object.keys(f),
      w = Object.keys(_),
      N = +(g.filter(S => p[S]).length / g.length * 100).toFixed(0),
      T = +(h.filter(S => f[S]).length / h.length * 100).toFixed(0),
      R = +(w.filter(S => _[S]).length / w.length * 100).toFixed(0);
    return {
      ...d,
      likeHeadlessRating: N,
      headlessRating: T,
      stealthRating: R,
      systemFonts: i,
      platformEstimate: [s, u]
    }
  } catch (r) {
    ae(r);
    return
  }
}
async function ts() {
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
    await ce();
    const t = ze(),
      e = t["Intl.Collator.resolvedOptions"] || t["Intl.DateTimeFormat.resolvedOptions"] || t["Intl.DisplayNames.resolvedOptions"] || t["Intl.ListFormat.resolvedOptions"] || t["Intl.NumberFormat.resolvedOptions"] || t["Intl.PluralRules.resolvedOptions"] || t["Intl.RelativeTimeFormat.resolvedOptions"] || !1,
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
      u = Ee(() => new Intl.RelativeTimeFormat(void 0, {
        localeMatcher: "best fit",
        numeric: "auto",
        style: "long"
      }).format(1, "year")),
      c = n(Intl);
    return {
      dateTimeFormat: r,
      displayNames: o,
      listFormat: a,
      numberFormat: i,
      pluralRules: s,
      relativeTimeFormat: u,
      locale: "" + c,
      lied: e
    }
  } catch (t) {
    ae(t);
    return
  }
}
const ns = () => ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"].sort();
async function rs() {
  const n = () => {
    try {
      const t = ns(),
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
    ae(t);
    return
  }
}
async function os(n) {
  try {
    await ce();
    const t = ze();
    let e = t["Navigator.appVersion"] || t["Navigator.deviceMemory"] || t["Navigator.doNotTrack"] || t["Navigator.hardwareConcurrency"] || t["Navigator.language"] || t["Navigator.languages"] || t["Navigator.maxTouchPoints"] || t["Navigator.oscpu"] || t["Navigator.platform"] || t["Navigator.userAgent"] || t["Navigator.vendor"] || t["Navigator.plugins"] || t["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      o = k(async () => {
        const d = Ee(() => navigator.userAgent),
          p = Cn(d),
          f = await Fr();
        return Gr({
          ua: d,
          os: p,
          isBrave: f
        })
      }),
      a = {
        platform: k(() => {
          const {
            platform: d
          } = navigator, p = ["win", "linux", "mac", "arm", "pike", "linux", "iphone", "ipad", "ipod", "android", "x11"], f = typeof d == "string" ? d.toLowerCase() : "";
          return !!f && p.some(g => f.includes(g)) || se("platform", `${d} is unusual`), cn !== tr && (e = !0, ne("Navigator.platform", `${tr} platform and ${cn} user agent do not match`)), n && d != n.platform && (e = !0), d
        }),
        system: k(() => Cn(navigator.userAgent), "userAgent system failed"),
        device: k(() => Wr({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: k(() => {
          const {
            userAgent: d
          } = navigator;
          return r || se("userAgent", `${d} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(d) && se("userAgent", "extra spaces detected"), nn(d).length && se("userAgent is gibberish", d), n && d != n.userAgent && (e = !0), d.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: Vr((navigator || {}).userAgent),
        appVersion: k(() => {
          const {
            appVersion: d
          } = navigator;
          return r || se("appVersion", `${d} does not match userAgent`), "appVersion" in navigator && !d && se("appVersion", "Living Standard property returned falsy value"), /\s{2,}|^\s|\s$/g.test(d) && se("appVersion", "extra spaces detected"), d.trim().replace(/\s{2,}/, " ")
        }, "appVersion failed"),
        deviceMemory: k(() => {
          var g;
          if (!("deviceMemory" in navigator)) return;
          const {
            deviceMemory: d
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
          })[String(d)] || se("deviceMemory", `${d} is not a valid value [0.25, 0.5, 1, 2, 4, 8, 16, 32]`);
          const f = ((g = performance == null ? void 0 : performance.memory) == null ? void 0 : g.jsHeapSizeLimit) || null,
            _ = f ? +(f / 1073741824).toFixed(1) : 0;
          return _ > d && se("deviceMemory", `available memory ${_}GB is greater than device memory ${d}GB`), n && d !== n.deviceMemory && (e = !0), d
        }, "deviceMemory failed"),
        doNotTrack: k(() => {
          const {
            doNotTrack: d
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
          } [String(d)] || se("doNotTrack - unusual result", d), d
        }, "doNotTrack failed"),
        globalPrivacyControl: k(() => {
          if (!("globalPrivacyControl" in navigator)) return;
          const {
            globalPrivacyControl: d
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
          } [String(d)] || se("globalPrivacyControl - unusual result", d), d
        }, "globalPrivacyControl failed"),
        hardwareConcurrency: k(() => {
          if (!("hardwareConcurrency" in navigator)) return;
          const {
            hardwareConcurrency: d
          } = navigator;
          return n && d !== n.hardwareConcurrency && (e = !0), d
        }, "hardwareConcurrency failed"),
        language: k(() => {
          const {
            language: d,
            languages: p
          } = navigator;
          if (d && p) {
            const f = (/^.{0,2}/g.exec(d) ?? [""])[0];
            if ((/^.{0,2}/g.exec(p[0]) ?? [""])[0] != f && se("language/languages", `${[d,p].join(" ")} mismatch`), n) {
              d != n.language && (e = !0, ne("Navigator.language", `${d} does not match worker scope`));
              const g = p.join(",");
              g !== n.languages.join(",") && (e = !0, ne("Navigator.languages", `${g} does not match worker scope`))
            }
            return `${p.join(", ")} (${d})`
          }
          return `${d} ${p}`
        }, "language(s) failed"),
        maxTouchPoints: k(() => "maxTouchPoints" in navigator ? navigator.maxTouchPoints : null, "maxTouchPoints failed"),
        vendor: k(() => navigator.vendor, "vendor failed"),
        mimeTypes: k(() => {
          const {
            mimeTypes: d
          } = navigator;
          return d ? [...d].map(p => p.type) : []
        }, "mimeTypes failed"),
        oscpu: k(() => navigator.oscpu, "oscpu failed"),
        plugins: k(() => {
          const {
            plugins: d
          } = navigator;
          if (!(d instanceof PluginArray)) return;
          const p = d ? [...d].map(f => ({
            name: f.name,
            description: f.description,
            filename: f.filename,
            version: f.version
          })) : [];
          return p.length && p.forEach(f => {
            const {
              name: _,
              description: g
            } = f, h = nn(_), w = nn(g);
            h.length && se("plugin name is gibberish", _), w.length && se("plugin description is gibberish", g)
          }), p
        }, "plugins failed"),
        properties: k(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: as(),
        privateClickMeasurement: is(),
        pdfViewerEnabled: ss()
      },
      i = () => k(() => {
        const d = navigator;
        if (!(!d.userAgentData || !d.userAgentData.getHighEntropyValues)) return d.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(p => {
          const {
            brands: f,
            mobile: _
          } = d.userAgentData || {}, g = (N, T = !1) => N.filter(R => !/Not/.test(R.brand)).map(R => `${R.brand}${T?` ${R.version}`:""}`), h = N => N.length > 1 ? N.filter(T => !/Chromium/.test(T)) : N;
          return p.brands || (p.brands = f), p.brandsVersion = g(p.brands ?? [], !0), p.brands = g(p.brands ?? []), p.brandsVersion = h(p.brandsVersion ?? []), p.brands = h(p.brands ?? []), p.mobile || (p.mobile = _), Object.keys(p).sort().reduce((N, T) => (N[T] = p[T], N), {})
        })
      }, "userAgentData failed"),
      s = () => k(() => {
        const d = navigator;
        if (!(!("bluetooth" in navigator) || !d.bluetooth || !d.bluetooth.getAvailability)) return d.bluetooth.getAvailability()
      }, "bluetoothAvailability failed"),
      u = () => k(() => {
        const d = f => navigator.permissions.query({
          name: f
        }).then(_ => ({
          name: f,
          state: _.state
        })).catch(() => ({
          name: f,
          state: "unknown"
        }));
        return "permissions" in navigator ? Promise.all([d("accelerometer"), d("ambient-light-sensor"), d("background-fetch"), d("background-sync"), d("bluetooth"), d("camera"), d("clipboard"), d("device-info"), d("display-capture"), d("gamepad"), d("geolocation"), d("gyroscope"), d("magnetometer"), d("microphone"), d("midi"), d("nfc"), d("notifications"), d("persistent-storage"), d("push"), d("screen-wake-lock"), d("speaker"), d("speaker-selection")]).then(f => f.reduce((_, g) => {
          const {
            state: h,
            name: w
          } = g || {};
          return _[h] ? (_[h].push(w), _) : (_[h] = [w], _)
        }, {})).catch(() => {}) : void 0
      }, "permissions failed"),
      c = () => k(() => {
        const d = navigator.gpu;
        if (d) return d.requestAdapter().then(p => {
          if (!p) return;
          const {
            limits: f,
            features: _
          } = p, g = w => {
            const {
              architecture: N,
              description: T,
              device: R,
              vendor: S
            } = w, I = [S, N, T, R], A = [...(_ == null ? void 0 : _.values()) ?? []], y = (v => {
              const E = {};
              for (const D in v) E[D] = v[D];
              return E
            })(f);
            return We.webGpuAdapter = I, We.webGpuFeatures = A, We.webGpuLimits = q(y), {
              adapterInfo: I,
              limits: y
            }
          }, {
            info: h
          } = p;
          return h ? g(h) : p.requestAdapterInfo ? p.requestAdapterInfo().then(g) : void 0
        })
      }, "webgpu failed");
    return await ce(), Promise.all([o, i(), s(), u(), c()]).then(([d, p, f, _, g]) => ({
      ...a,
      userAgentParsed: d,
      userAgentData: p,
      bluetoothAvailability: f,
      permissions: _,
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
    ae(t, "Navigator failed or blocked by client");
    return
  }
}

function as() {
  const t = window.ApplePaySession;
  if (typeof t != "function" || typeof t.canMakePayments != "function") return -1;
  try {
    return t.canMakePayments() ? 1 : 0
  } catch (e) {
    const r = (e == null ? void 0 : e.message) ?? "";
    return r.includes("disabled in this insecure context") ? 2 : r.includes("Trying to start an Apple Pay session") ? 0 : -1
  }
}

function is() {
  const n = document.createElement("a");
  try {
    const t = n.attributionSourceId ?? n.attributionsourceid;
    return t == null ? void 0 : String(t)
  } catch (t) {
    ae(t);
    return
  } finally {
    n.remove()
  }
}

function ss() {
  try {
    const n = navigator.pdfViewerEnabled;
    return typeof n == "boolean" ? n : void 0
  } catch (n) {
    ae(n);
    return
  }
}
const _e = "c767712b",
  cs = {
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
    privacybadger: ur,
    privacypossum: Tn,
    jshelter: Ne,
    puppeteerExtra: he,
    fakeBrowser: Re
  } = cs;

function us(n, t) {
  if (t) {
    if (t >= 7 && qe.contentDocumentHash.includes(n.contentDocumentHash) && qe.contentWindowHash.includes(n.contentWindowHash) && qe.createElementHash.includes(n.createElementHash) && qe.getElementByIdHash.includes(n.getElementByIdHash) && qe.toDataURLHash.includes(n.toDataURLHash) && qe.toBlobHash.includes(n.toBlobHash) && qe.getImageDataHash.includes(n.getImageDataHash)) return "Trace";
    if (t >= 7 && Ke.contentDocumentHash.includes(n.contentDocumentHash) && Ke.contentWindowHash.includes(n.contentWindowHash) && Ke.createElementHash.includes(n.createElementHash) && Ke.getElementByIdHash.includes(n.getElementByIdHash) && Ke.toDataURLHash.includes(n.toDataURLHash) && Ke.toBlobHash.includes(n.toBlobHash) && Ke.getImageDataHash.includes(n.getImageDataHash)) return "CyDec";
    if (t >= 6 && at.contentDocumentHash.includes(n.contentDocumentHash) && at.contentWindowHash.includes(n.contentWindowHash) && at.appendHash.includes(n.appendHash) && at.toDataURLHash.includes(n.toDataURLHash) && at.toBlobHash.includes(n.toBlobHash) && at.getImageDataHash.includes(n.getImageDataHash)) return "CanvasBlocker";
    if (t >= 9 && Le.appendHash.includes(n.appendHash) && Le.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && Le.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && Le.insertAdjacentTextHash.includes(n.insertAdjacentTextHash) && Le.prependHash.includes(n.prependHash) && Le.replaceWithHash.includes(n.replaceWithHash) && Le.appendChildHash.includes(n.appendChildHash) && Le.insertBeforeHash.includes(n.insertBeforeHash) && Le.replaceChildHash.includes(n.replaceChildHash)) return "Chameleon";
    if (t >= 7 && ve.toDataURLHash.includes(n.toDataURLHash) && ve.toBlobHash.includes(n.toBlobHash) && ve.getImageDataHash.includes(n.getImageDataHash) && ve.getByteFrequencyDataHash.includes(n.getByteFrequencyDataHash) && ve.getByteTimeDomainDataHash.includes(n.getByteTimeDomainDataHash) && ve.getFloatFrequencyDataHash.includes(n.getFloatFrequencyDataHash) && ve.getFloatTimeDomainDataHash.includes(n.getFloatTimeDomainDataHash) && ve.copyFromChannelHash.includes(n.copyFromChannelHash) && ve.getChannelDataHash.includes(n.getChannelDataHash) && ve.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && ve.availHeightHash.includes(n.availHeightHash) && ve.availLeftHash.includes(n.availLeftHash) && ve.availTopHash.includes(n.availTopHash) && ve.availWidthHash.includes(n.availWidthHash) && ve.colorDepthHash.includes(n.colorDepthHash) && ve.pixelDepthHash.includes(n.pixelDepthHash)) return "DuckDuckGo";
    if (t >= 2 && ur.getImageDataHash.includes(n.getImageDataHash) && ur.toDataURLHash.includes(n.toDataURLHash)) return "Privacy Badger";
    if (t >= 3 && Tn.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && Tn.availWidthHash.includes(n.availWidthHash) && Tn.colorDepthHash.includes(n.colorDepthHash)) return "Privacy Possum";
    if (t >= 2 && En.contentDocumentHash.includes(n.contentDocumentHash) && En.contentWindowHash.includes(n.contentDocumentHash) && En.getContextHash.includes(n.getContextHash) && n.hardwareConcurrencyHash == _e) return "NoScript";
    if (t >= 14 && Ne.contentDocumentHash.includes(n.contentDocumentHash) && Ne.contentWindowHash.includes(n.contentDocumentHash) && Ne.appendHash.includes(n.appendHash) && Ne.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && Ne.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && Ne.prependHash.includes(n.prependHash) && Ne.replaceWithHash.includes(n.replaceWithHash) && Ne.appendChildHash.includes(n.appendChildHash) && Ne.insertBeforeHash.includes(n.insertBeforeHash) && Ne.replaceChildHash.includes(n.replaceChildHash) && Ne.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash)) return "JShelter";
    if (t >= 13 && he.contentDocumentHash.includes(n.contentDocumentHash) && he.contentWindowHash.includes(n.contentWindowHash) && he.createElementHash.includes(n.createElementHash) && he.getElementByIdHash.includes(n.getElementByIdHash) && he.appendHash.includes(n.appendHash) && he.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && he.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && he.insertAdjacentTextHash.includes(n.insertAdjacentTextHash) && he.prependHash.includes(n.prependHash) && he.replaceWithHash.includes(n.replaceWithHash) && he.appendChildHash.includes(n.appendChildHash) && he.insertBeforeHash.includes(n.insertBeforeHash) && he.contentDocumentHash.includes(n.contentDocumentHash) && he.replaceChildHash.includes(n.replaceChildHash) && he.getContextHash.includes(n.getContextHash) && he.toDataURLHash.includes(n.toDataURLHash) && he.toBlobHash.includes(n.toBlobHash) && he.getImageDataHash.includes(n.getImageDataHash) && he.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash)) return "puppeteer-extra";
    if (t >= 12 && Re.appendChildHash.includes(n.appendChildHash) && Re.getContextHash.includes(n.getContextHash) && Re.toDataURLHash.includes(n.toDataURLHash) && Re.toBlobHash.includes(n.toBlobHash) && Re.getImageDataHash.includes(n.getImageDataHash) && Re.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && Re.availHeightHash.includes(n.availHeightHash) && Re.availLeftHash.includes(n.availLeftHash) && Re.availTopHash.includes(n.availTopHash) && Re.availWidthHash.includes(n.availWidthHash) && Re.colorDepthHash.includes(n.colorDepthHash) && Re.pixelDepthHash.includes(n.pixelDepthHash)) return "FakeBrowser"
  }
}
async function ls() {
  const n = +new Date,
    t = +("" + n).slice(-1),
    e = new RegExp(`${t}+$`),
    r = (c, d) => new Promise(p => setTimeout(() => {
      const f = d ? n : +new Date,
        _ = e.exec("" + f);
      p(_ ? _[0] : f)
    }, c)),
    o = await Promise.all([r(0, !0), r(1, !1), r(2, !1), r(3, !1), r(4, !1), r(5, !1), r(6, !1), r(7, !1), r(8, !1), r(9, !1)]),
    a = o.map(c => "" + c),
    i = a[0].slice(-1),
    s = a.every(c => c.slice(-1) === i),
    u = a[0].length;
  return {
    protection: s,
    delays: o.map((c, d) => a[d].length > u ? a[d].slice(-u) : c),
    precision: s ? Math.min(...a.map(c => c.length)) : void 0,
    precisionValue: s ? i : void 0
  }
}
async function ds() {
  try {
    await ce();
    const n = mi(),
      t = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: pe ? "Blink" : Et ? "Gecko" : ""
      },
      [e, r] = await Promise.all([Fr(), pe ? void 0 : ls()]);
    if (e) {
      const u = Qa();
      t.privacy = "Brave", t.security = {
        FileSystemWritableFileStream: "FileSystemWritableFileStream" in window,
        Serial: "Serial" in window,
        ReportingObserver: "ReportingObserver" in window
      }, t.mode = u.allow ? "allow" : u.standard ? "standard" : u.strict ? "strict" : ""
    }
    const {
      protection: o
    } = r || {};
    if (Et && o) {
      const u = {
          OfflineAudioContext: "OfflineAudioContext" in window,
          WebGL2RenderingContext: "WebGL2RenderingContext" in window,
          WebAssembly: "WebAssembly" in window,
          maxTouchPoints: "maxTouchPoints" in navigator,
          RTCRtpTransceiver: "RTCRtpTransceiver" in window,
          MediaDevices: "MediaDevices" in window,
          Credential: "Credential" in window
        },
        c = Object.keys(u),
        d = new Set(["RTCRtpTransceiver", "MediaDevices", "Credential"]),
        p = c.filter(_ => d.has(_) && !u[_]).length == d.size,
        f = !u.WebAssembly;
      t.privacy = p ? "Tor Browser" : "Firefox", t.security = {
        reduceTimerPrecision: !0,
        ...u
      }, t.mode = p ? f ? "safer" : "standard" : "resistFingerprinting"
    }
    const a = Object.keys(n).length;
    await ce();
    const i = {
        contentDocumentHash: q(n["HTMLIFrameElement.contentDocument"]),
        contentWindowHash: q(n["HTMLIFrameElement.contentWindow"]),
        createElementHash: q(n["Document.createElement"]),
        getElementByIdHash: q(n["Document.getElementById"]),
        appendHash: q(n["Element.append"]),
        insertAdjacentElementHash: q(n["Element.insertAdjacentElement"]),
        insertAdjacentHTMLHash: q(n["Element.insertAdjacentHTML"]),
        insertAdjacentTextHash: q(n["Element.insertAdjacentText"]),
        prependHash: q(n["Element.prepend"]),
        replaceWithHash: q(n["Element.replaceWith"]),
        appendChildHash: q(n["Node.appendChild"]),
        insertBeforeHash: q(n["Node.insertBefore"]),
        replaceChildHash: q(n["Node.replaceChild"]),
        getContextHash: q(n["HTMLCanvasElement.getContext"]),
        toDataURLHash: q(n["HTMLCanvasElement.toDataURL"]),
        toBlobHash: q(n["HTMLCanvasElement.toBlob"]),
        getImageDataHash: q(n["CanvasRenderingContext2D.getImageData"]),
        getByteFrequencyDataHash: q(n["AnalyserNode.getByteFrequencyData"]),
        getByteTimeDomainDataHash: q(n["AnalyserNode.getByteTimeDomainData"]),
        getFloatFrequencyDataHash: q(n["AnalyserNode.getFloatFrequencyData"]),
        getFloatTimeDomainDataHash: q(n["AnalyserNode.getFloatTimeDomainData"]),
        copyFromChannelHash: q(n["AudioBuffer.copyFromChannel"]),
        getChannelDataHash: q(n["AudioBuffer.getChannelData"]),
        hardwareConcurrencyHash: q(n["Navigator.hardwareConcurrency"]),
        availHeightHash: q(n["Screen.availHeight"]),
        availLeftHash: q(n["Screen.availLeft"]),
        availTopHash: q(n["Screen.availTop"]),
        availWidthHash: q(n["Screen.availWidth"]),
        colorDepthHash: q(n["Screen.colorDepth"]),
        pixelDepthHash: q(n["Screen.pixelDepth"])
      },
      s = {};
    for (const [u, c] of Object.entries(i)) c !== _e && (s[u.slice(0, -4)] = c);
    return t.extensionHashPattern = s, t.extension = us(i, a), t
  } catch (n) {
    ae(n);
    return
  }
}

function _s() {
  try {
    return "ontouchstart" in window && !!document.createEvent("TouchEvent")
  } catch {
    return !1
  }
}
let Sn;
async function fs() {
  try {
    const n = ze();
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
    r = Number(r), o = Number(o), a = Number(a), i = Number(i), s = Number(s), u = Number(u), Sn ? {
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
    const c = g => {
        var h;
        return !!((h = matchMedia(g)) != null && h.matches)
      },
      d = window.devicePixelRatio || 0,
      p = !c(`(resolution: ${d}dppx)`);
    !Tt && p && (t = !0, ne("Window.devicePixelRatio", "lied dpr"));
    const f = !(r - a || o - i);
    return r > 800 && f && (ke.SCREEN = !0), {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i,
      colorDepth: s,
      pixelDepth: u,
      touch: _s(),
      lied: t
    }
  } catch (n) {
    ae(n);
    return
  }
}

function ps() {
  var e;
  const n = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (n) {
    const r = new n().resolvedOptions().timeZone;
    if (r) return r
  }
  const t = -ms();
  return `UTC${t>=0?"+":""}${t}`
}

function ms() {
  const n = new Date().getFullYear();
  return Math.max(new Date(n, 0, 1).getTimezoneOffset(), new Date(n, 6, 1).getTimezoneOffset())
}
const hs = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  gs = {
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
  ws = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  ys = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]);
async function bs() {
  var o;
  let n, t, e, r;
  try {
    await ce();
    const a = ze(),
      i = wn(),
      s = a["HTMLCanvasElement.toDataURL"],
      u = a["HTMLCanvasElement.getContext"],
      c = a["WebGLRenderingContext.getParameter"] || a["WebGL2RenderingContext.getParameter"] || a["WebGLRenderingContext.getExtension"] || a["WebGL2RenderingContext.getExtension"],
      d = s || u || c || a["WebGLRenderingContext.getSupportedExtensions"] || a["WebGL2RenderingContext.getSupportedExtensions"] || !1;
    let p = window;
    !Ur && i && (p = i);
    const f = p.document;
    "OffscreenCanvas" in window ? (n = new p.OffscreenCanvas(256, 256), t = new p.OffscreenCanvas(256, 256)) : (n = f.createElement("canvas"), t = f.createElement("canvas"));
    const _ = dr(n, "webgl"),
      g = dr(t, "webgl2");
    if (e = _, r = g, !_) return;
    const h = (C, L) => {
        if (!C) return;
        const z = k(() => C.getShaderPrecisionFormat(C[L], C.LOW_FLOAT)),
          ee = k(() => C.getShaderPrecisionFormat(C[L], C.MEDIUM_FLOAT)),
          me = k(() => C.getShaderPrecisionFormat(C[L], C.HIGH_FLOAT)),
          be = k(() => C.getShaderPrecisionFormat(C[L], C.HIGH_INT));
        return {
          LOW_FLOAT: z,
          MEDIUM_FLOAT: ee,
          HIGH_FLOAT: me,
          HIGH_INT: be
        }
      },
      w = (C, L) => {
        const z = {};
        if (!L) return z;
        for (const ee in L) {
          const me = L[ee];
          z[C + "." + ee + ".precision"] = me ? k(() => me.precision) : void 0, z[C + "." + ee + ".rangeMax"] = me ? k(() => me.rangeMax) : void 0, z[C + "." + ee + ".rangeMin"] = me ? k(() => me.rangeMin) : void 0
        }
        return z
      },
      N = C => {
        const L = {};
        if (!C) return L;
        const z = C;
        for (const ee of hs) {
          const me = z[ee];
          if (me === void 0) continue;
          const be = C.getParameter(me);
          be && ArrayBuffer.isView(be) ? L[ee] = Array.from(be) : L[ee] = be
        }
        return L
      },
      T = C => {
        if (!C) return [];
        const L = k(() => C.getContextAttributes());
        return L ? Object.keys(L).sort().map(z => `${z}=${L[z]}`) : []
      },
      R = C => {
        if (!C) return [];
        const L = [];
        for (const [z, ee] of Object.entries(gs)) {
          const me = k(() => C.getExtension(z));
          if (me)
            for (const be of ee) {
              const Ce = me[be];
              if (typeof Ce != "number") continue;
              if (!ws.has(be)) {
                L.push(`${be}=${Ce}`);
                continue
              }
              const Se = k(() => C.getParameter(Ce));
              Se == null ? L.push(`${be}=${Ce}`) : typeof Se == "object" && "length" in Se ? L.push(`${be}=${Ce}=${Array.from(Se).join(",")}`) : L.push(`${be}=${Ce}=${Se}`)
            }
        }
        return L.sort()
      },
      S = C => {
        const L = C ? C.getExtension("WEBGL_debug_renderer_info") : null;
        return !L || !C ? {} : {
          UNMASKED_VENDOR_WEBGL: C.getParameter(L.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: C.getParameter(L.UNMASKED_RENDERER_WEBGL)
        }
      },
      I = C => {
        if (!C) return [];
        const L = k(() => C.getSupportedExtensions());
        return L || []
      };
    await ce();
    const A = {
        ...N(_),
        ...S(_)
      },
      y = {
        ...N(g),
        ...S(g)
      },
      v = [];
    for (const C in y) {
      const L = A[C];
      !L || ys.has(C) || "" + L != "" + y[C] && v.push(C)
    }
    v.length && se("webgl/webgl2 mirrored params mismatch", v.toString()), await ce();
    const E = {
        extensions: [...I(_), ...I(g)],
        contextAttributes: T(_),
        contextAttributes2: T(g),
        extensionParameters: R(_),
        extensionParameters2: R(g),
        parameters: {
          ...A,
          ...y,
          ...w("VERTEX_SHADER", h(_, "VERTEX_SHADER")),
          ...w("FRAGMENT_SHADER", h(_, "FRAGMENT_SHADER"))
        },
        parameterOrExtensionLie: c,
        lied: d
      },
      D = ["00b72507", "00c1b42d", "00fe1ec9", "02b3eea3", "0461d3de", "0463627d", "057857ac", "0586e20b", "0639a81a", "087d5759", "08847ba5", "0b2d4333", "0cdb985d", "0e058699", "0eb2fc19", "0f39d057", "0f840379", "0fc123c7", "101e0582", "12e92e62", "12f8ac14", "1453d59a", "149a1efa", "166dc7c8", "16c481a6", "171831c5", "177cc258", "18579e83", "19594666", "1b251fd7", "1bfd326c", "1e8a9a79", "1ff7c7e7", "2048bc5a", "2259b706", "22d0f2cf", "230d6a0d", "23d1ce20", "2402c3d2", "24306836", "258789d0", "25a760b8", "25f9385d", "27938830", "27db292c", "2b80fd96", "2bb488da", "2c04c2eb", "2d15287f", "2f014c41", "2f582ed9", "300ee927", "33bc5492", "34270469", "3660b71f", "3740c4c7", "3999a5e1", "39ead506", "3a91d0d6", "3b724916", "3bf321b8", "3c546144", "3f9ef44c", "3fea1100", "3ff82303", "4027d193", "402e1064", "4065cd69", "43038e3d", "4503e771", "461f97e1", "464d51ac", "467b99a5", "482c81b2", "48af038f", "4962ada1", "49bf7358", "4c9e8f5d", "502c402c", "508d1625", "52e348ba", "534002ab", "5582debe", "55d3aa56", "55e821f7", "581f3282", "5831d5fd", "58871380", "58fdc720", "5a5658f1", "5a90a5f8", "5aea1af1", "5b6a17aa", "5bef9a39", "5ca55292", "5d786cef", "5ddb9237", "5ee41456", "61178f2a", "61ca8e23", "61d9464e", "61eecaae", "623c3bfd", "6248d9e3", "6294d84e", "62bf7ef1", "6346cf49", "6357365c", "66628310", "668f0f93", "66d992e8", "67995996", "6843ebbf", "6864dcb0", "6951838b", "696e1548", "698c5c2e", "6a75ae3b", "6aa1ff7e", "6b07d4f8", "6b290cd4", "6c168801", "6dfae3cb", "6e806ffc", "6edf1720", "6f81cbe7", "70859bdb", "70a095b1", "7238c5dd", "7360ebd1", "741688e4", "74daf866", "78640859", "79284c47", "794f8929", "795e5c95", "79a57aa9", "7aa13573", "7b2e5242", "7b811cdd", "7ec0ea6b", "801d73af", "802e2547", "81b9cd29", "8219e1a4", "82a9a2f1", "8428fc8e", "849ccb64", "8541aa4c", "85479b99", "8bd0b91b", "8d371161", "903c8847", "917871e7", "98aeaba9", "99b1a1c6", "99ef2c3b", "9b67b7dc", "9c6df98c", "9c814c1b", "9e2b5e94", "9fd76352", "a1c808d5", "a22788f8", "a2383001", "a26e9aa9", "a397a568", "a3f9ee34", "a4b988da", "a4d34176", "a581f55e", "a5a477ae", "a9640880", "a97d3858", "aa73f3a4", "ab40bece", "ac4d4ba8", "ad01a422", "ade75c4f", "ae2c4777", "afa583bc", "b10c2a85", "b224cc7c", "b2d6fc98", "b362c2f5", "b467620a", "b4d40dcc", "b504662d", "b50edd99", "b5494027", "b62321c3", "b8961d15", "b8ea6e7f", "bb77a469", "bc0f9686", "bcf7315f", "be2dfaea", "beffda26", "bf06317e", "bf610cdb", "bfe1c212", "c00582e9", "c026469d", "c04889b1", "c04b0635", "c04e374a", "c05f7596", "c07307c6", "c092fdf8", "c25dd065", "c2bce496", "c5e9a883", "c79634c2", "c7e37ca0", "c93b5366", "c9bc4ffd", "cba1878b", "cbeade8c", "ce2e3d16", "cefb72ca", "cf9643e6", "cfd20274", "d05a66eb", "d09c1c07", "d1e76c89", "d2172943", "d2dc2474", "d498797d", "d6bf35ad", "d734ea08", "d860ff42", "d8bd9e5a", "d913dafa", "d970d345", "dbdbe7a4", "dc271c35", "dcd9a29e", "dd67b076", "de793ead", "ded74044", "df9daeb6", "e10339b3", "e142d1f9", "e155c47e", "e15afab0", "e16bb1bb", "e316e4c0", "e3eff92a", "e4569a5b", "e574bef6", "e5962ba3", "e6464c9f", "e68b5c4e", "e796b84e", "e8694547", "e965d180", "e965d541", "e9bdc904", "e9dbb8d5", "ea54d525", "ea59b343", "ea7f90ea", "ea8f5ad0", "eaa13804", "eb799d34", "ec050bb6", "ec928655", "eed2e5e1", "ef8f5db1", "f0d5a3c7", "f1077334", "f221fef5", "f2293447", "f33d918e", "f3c6ea11", "f51056a1", "f51cab9a", "f573bb34", "f5d19934", "f7451c92", "f8e65486", "f9714b3d", "fa994f33", "fafa14c0", "fc37fe1f", "fca66520", "fe0997b6"],
      H = [-1056897629, -1056946782, -1073719331, -1147160399, -1147160553, -1147168724, -1147419751, -1147419753, -1147419775, -1147427826, -1147451883, -1147451901, -1147464169, -1147464177, -1147488144, -1147602934, -1147643759, -1147643872, -1147765274, -1148326739, -1148335070, -1148572354, -1148678631, -1148680509, -1148713259, -1164279890, -1164800191, -1164800478, -1332029332, -133757475, -1342154787, -134823971, -16746546, -1878102921, -1878111124, -1962893370, -1962919974, -1962928178, -2130164162, -2130164382, -2130164388, -2130164546, -2130172573, -2130659912, -2145933648, -2145941977, -2145958228, -2145966414, -2145966441, -2145966529, -2145966535, -2145966545, -2145970658, -2145974343, -2145974380, -2145974489, -2145974596, -2145974598, -2145974612, -2145974637, -2145974657, -2145974729, -2146187766, -2146232338, -2146232480, -2146232503, -2146232590, -2146232723, -2146232724, -2146236588, -2146236703, -2146237020, -2146251619, -2146251641, -2146251681, -2146253671, -2146253693, -2146277218, -2146286438, -2146286463, -2146286583, -2146319268, -2146376065, -2146379955, -2146384003, -2146384011, -2146384027, -2146384034, -2146384120, -2146384281, -2146398568, -2146400384, -2146400556, -2146400620, -2146401928, -2146417027, -2146526795, -2146526934, -2147125544, -2147128275, -2147133747, -2147133749, -2147133760, -2147134974, -2147136328, -2147142429, -2147287810, -2147287811, -2147287820, -2147287834, -2147287835, -2147287854, -2147291718, -2147291820, -2147293058, -2147295768, -2147295822, -2147295823, -2147295849, -2147295857, -2147300019, -2147304193, -2147304219, -2147306321, -2147316382, -2147316383, -2147333118, -2147336998, -2147337003, -2147337012, -2147337022, -2147344686, -2147346747, -2147361652, -2147361731, -2147361769, -2147361774, -2147361775, -2147361778, -2147361792, -2147362760, -2147365698, -2147365730, -2147365759, -2147365760, -2147365827, -2147365863, -2147373914, -2147373984, -2147374032, -2147374080, -2147378041, -2147378146, -2147382130, -2147382221, -2147382251, -2147382270, -2147382272, -2147383246, -2147385825, -2147385849, -2147386292, -2147386326, -2147387335, -2147387364, -2147389930, -2147389937, -2147389951, -2147390461, -2147394188, -2147394251, -2147394484, -2147400057, -2147406798, -2147407643, -2147407821, -2147410938, -2147410941, -2147414733, -2147414956, -2147414987, -2147415037, -2147429201, -2147429223, -2147439020, -2147440422, -2147447111, -2147447122, -2147447126, -2147447137, -2147447149, -2147447157, -2147447161, -2147447163, -2147447873, -2147447892, -2147447896, -2147447928, -2147448592, -2147453701, -2147453767, -2147453768, -2147459031, -2147461169, -2147466956, -2147466972, -2147467172, -2147470173, -2147475351, -2147475352, -638494755, -671082546, -677558160, -999987216, 1099536, 1099644, 1147714426, 1197075, 1229835, 1508998, 1509050, 1610618841, 184555483, 2146590728, 2147305224, 2147361749, 2147440438, 2147475085, 2147479181, 21667, 349912, 351513, 83625, 998804992, 998911268, 999148597, 999156922];
    let P;
    if (E.parameters) {
      const C = new Set;
      for (const L in E.parameters) {
        const z = E.parameters[L];
        if (!(!z || typeof z == "string"))
          if (Array.isArray(z))
            for (const ee of z) C.add(Number(ee));
          else C.add(Number(z))
      }
      P = [...C].sort((L, z) => L - z)
    }
    const x = ti((o = E.parameters) == null ? void 0 : o.UNMASKED_RENDERER_WEBGL),
      U = "" + P,
      Q = !x || !U ? void 0 : q([x, U]),
      ue = P ? P.reduce((C, L, z) => C ^ +L + z, 0) : void 0;
    We.webglParams = U, We.webglBrandCapabilities = Q, We.webglCapabilities = ue;
    const F = Q && !D.includes(Q),
      Oe = ue && !H.includes(ue);
    return F && (ke.WEBGL = !0, se("WebGLRenderingContext.getParameter", "suspicious gpu")), Oe && (ke.WEBGL = !0, se("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...E,
      gpu: {
        ...Qr((E.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: Jr((E.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (a) {
    ae(a);
    return
  } finally {
    lr(n, e), lr(t, r)
  }
}

function lr(n, t) {
  var e;
  if (n) {
    try {
      (e = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    n.width = 0, n.height = 0, n instanceof HTMLCanvasElement && n.remove()
  }
}

function dr(n, t) {
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
async function vs() {
  var t, e, r, o, a, i, s, u, c, d, p, f, _, g, h, w, N, T, R, S, I, A, y, v, E, D, H, P, x, U, Q, ue;
  const n = await Es();
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
        paintURI: (c = n.canvas2d) == null ? void 0 : c.paintURI,
        textURI: (d = n.canvas2d) == null ? void 0 : d.textURI,
        emojiURI: (p = n.canvas2d) == null ? void 0 : p.emojiURI
      },
      ...(f = n.canvas2d) != null && f.liedTextMetrics ? {} : {
        textMetricsSystemSum: (_ = n.canvas2d) == null ? void 0 : _.textMetricsSystemSum,
        emojiSet: (g = n.canvas2d) == null ? void 0 : g.emojiSet
      }
    },
    canvasWebgl: n.canvasWebgl,
    cssMedia: n.cssMedia ? {
      reducedMotion: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["prefers-reduced-motion"]
      }),
      monochrome: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS.monochrome
      }),
      invertedColors: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["inverted-colors"]
      }),
      forcedColors: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["forced-colors"]
      }),
      colorGamut: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["color-gamut"]
      }),
      hdr: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["dynamic-range"]
      }),
      contrast: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["prefers-contrast"]
      }),
      reducedTransparency: Ee(() => {
        var F;
        return (F = n.cssMedia) == null ? void 0 : F.mediaCSS["prefers-reduced-transparency"]
      })
    } : void 0,
    css: n.css ? (w = (h = n.css) == null ? void 0 : h.system) == null ? void 0 : w.fonts : void 0,
    timezone: n.timezone,
    offlineAudioContext: (N = n.offlineAudioContext) != null && N.lied ? void 0 : {
      binsSample: (T = n.offlineAudioContext) == null ? void 0 : T.binsSample,
      compressorGainReduction: (R = n.offlineAudioContext) == null ? void 0 : R.compressorGainReduction,
      copySample: (S = n.offlineAudioContext) == null ? void 0 : S.copySample,
      floatFrequencyDataSum: (I = n.offlineAudioContext) == null ? void 0 : I.floatFrequencyDataSum,
      floatTimeDomainDataSum: (A = n.offlineAudioContext) == null ? void 0 : A.floatTimeDomainDataSum,
      lied: (y = n.offlineAudioContext) == null ? void 0 : y.lied,
      noise: (v = n.offlineAudioContext) == null ? void 0 : v.noise,
      totalUniqueSamples: (E = n.offlineAudioContext) == null ? void 0 : E.totalUniqueSamples,
      values: (D = n.offlineAudioContext) == null ? void 0 : D.values
    },
    fonts: n.fonts ? n.fonts.fontFaceLoadFonts : void 0,
    intl: !n.intl || n.intl.lied ? void 0 : {
      lied: (H = n.intl) == null ? void 0 : H.lied,
      listFormat: (P = n.intl) == null ? void 0 : P.listFormat,
      locale: (x = n.intl) == null ? void 0 : x.locale,
      numberFormat: (U = n.intl) == null ? void 0 : U.numberFormat,
      pluralRules: (Q = n.intl) == null ? void 0 : Q.pluralRules,
      relativeTimeFormat: (ue = n.intl) == null ? void 0 : ue.relativeTimeFormat
    },
    resistance: n.resistance,
    math: n.math
  }
}
async function Es() {
  try {
    const [n, t, e, r, o, a, i, s, u, c, d, p, f, _] = await Promise.all([ge("offlineAudioContext", ki()), ge("canvasWebgl", bs()), ge("canvas2d", Li()), ge("css", Promise.resolve(Mi())), ge("cssMedia", Promise.resolve(Bi())), ge("screen", fs()), ge("consoleErrors", Promise.resolve(Ui())), ge("timezone", Promise.resolve(ps())), ge("fonts", Xi()), ge("media", rs()), ge("resistance", ds()), ge("intl", ts()), ge("workerScope", Ni()), ge("maths", Promise.resolve(Ka()))]), [g, h, w, N, T] = await Promise.all([ge("navigator", os(f)), ge("headless", es({
      webgl: t
    })), ge("lies", Promise.resolve(hi())), ge("trash", Promise.resolve(vi())), ge("capturedErrors", Promise.resolve(Ya()))]);
    return {
      navigator: g,
      headless: h,
      cssMedia: o,
      css: r,
      screen: a,
      media: c,
      canvas2d: e,
      canvasWebgl: {
        ...t
      },
      consoleErrors: i,
      timezone: s,
      offlineAudioContext: n,
      fonts: u,
      lies: w,
      trash: N,
      capturedErrors: T,
      resistance: d,
      intl: p,
      workerScope: f,
      math: _
    }
  } finally {
    pi()
  }
}

function ge(n, t) {
  return t.catch(() => {})
}
let Zt;
async function Ts() {
  if (Zt) try {
    return await Zt
  } catch {}
  return Zt = (async () => {
    var f, _, g, h, w, N, T, R, S, I, A, y, v, E, D, H, P, x, U, Q, ue, F, Oe, C, L, z, ee, me, be, Ce, Se, Yt, Jt, _t, W, V, Y, ie, le, de, He, Pe, $e, Qt;
    const n = await vs();
    (f = n.navigator) != null && f.lied && n.screen && (n.screen.minDim = 0, n.screen.maxDim = 0);
    const t = fo({
      userAgent: (_ = n.workerScope) == null ? void 0 : _.userAgent
    });
    switch (/\bCrOS x86_64\b/.test(((g = n.workerScope) == null ? void 0 : g.userAgent) ?? "") && n.canvas2d && (delete n.canvas2d.dataURI, delete n.canvas2d.emojiSet, delete n.canvas2d.textMetricsSystemSum, delete n.canvas2d.textURI), t) {
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
    const r = await Promise.all([B(n.workerScope), B(n.canvas2d), B(n.canvasWebgl), B(n.fonts), B(n.screen), B(n.navigator), "a0", B(n.timezone), B(n.intl), B(n.css), B({
        ...n.cssMedia,
        ...n.offlineAudioContext
      }), B({
        ...n.media,
        ...n.math
      })]),
      o = 32,
      a = Math.floor(o / r.length),
      i = r.map(ft => ft.slice(0, a)).join(""),
      s = o % r.length,
      u = r.slice(0, s).map(ft => ft[a] ?? "0").join(""),
      c = await po(),
      p = (await Promise.all([B((h = c.components.applePay) == null ? void 0 : h.value), B((w = c.components.architecture) == null ? void 0 : w.value), B((N = c.components.audio) == null ? void 0 : N.value), B((T = c.components.audioBaseLatency) == null ? void 0 : T.value), B((R = c.components.canvas) == null ? void 0 : R.value), B((S = c.components.colorDepth) == null ? void 0 : S.value), B((I = c.components.colorGamut) == null ? void 0 : I.value), B((A = c.components.contrast) == null ? void 0 : A.value), B((y = c.components.cookiesEnabled) == null ? void 0 : y.value), B((v = c.components.cpuClass) == null ? void 0 : v.value), B((E = c.components.dateTimeLocale) == null ? void 0 : E.value), B((D = c.components.deviceMemory) == null ? void 0 : D.value), B((H = c.components.domBlockers) == null ? void 0 : H.value), B((P = c.components.fontPreferences) == null ? void 0 : P.value), B((x = c.components.fonts) == null ? void 0 : x.value), B((U = c.components.forcedColors) == null ? void 0 : U.value), B((Q = c.components.hardwareConcurrency) == null ? void 0 : Q.value), B((ue = c.components.hdr) == null ? void 0 : ue.value), B((F = c.components.indexedDB) == null ? void 0 : F.value), B((Oe = c.components.invertedColors) == null ? void 0 : Oe.value), B((C = c.components.languages) == null ? void 0 : C.value), B((L = c.components.localStorage) == null ? void 0 : L.value), B((z = c.components.math) == null ? void 0 : z.value), B((ee = c.components.monochrome) == null ? void 0 : ee.value), B((me = c.components.openDatabase) == null ? void 0 : me.value), B((be = c.components.osCpu) == null ? void 0 : be.value), B((Ce = c.components.pdfViewerEnabled) == null ? void 0 : Ce.value), B((Se = c.components.platform) == null ? void 0 : Se.value), B((Yt = c.components.plugins) == null ? void 0 : Yt.value), B((Jt = c.components.privateClickMeasurement) == null ? void 0 : Jt.value), B((_t = c.components.reducedMotion) == null ? void 0 : _t.value), B((W = c.components.reducedTransparency) == null ? void 0 : W.value), B((V = c.components.screenFrame) == null ? void 0 : V.value), B((Y = c.components.screenResolution) == null ? void 0 : Y.value), B((ie = c.components.sessionStorage) == null ? void 0 : ie.value), B((le = c.components.timezone) == null ? void 0 : le.value), B((de = c.components.touchSupport) == null ? void 0 : de.value), B((He = c.components.vendor) == null ? void 0 : He.value), B((Pe = c.components.vendorFlavors) == null ? void 0 : Pe.value), B(($e = c.components.webGlBasics) == null ? void 0 : $e.value), B((Qt = c.components.webGlExtensions) == null ? void 0 : Qt.value)])).map(ft => ft[0]).join("");
    return i + u + "|" + p
  })(), Zt
}
const _r = "theme";
var St, At, Ot, Rt, Dt, It, Nt, Ct, kt, Pt;
class Ss {
  constructor() {
    Z(this, St, fe(!1));
    Z(this, At, fe(!1));
    Z(this, Ot, fe(0));
    Z(this, Rt, fe(!1));
    Z(this, Dt, fe(sn(As())));
    Z(this, It, fe(null));
    Z(this, Nt, fe(!1));
    Z(this, Ct, fe("custom-winter"));
    Z(this, kt, fe(sn(Date.now())));
    Z(this, Pt, fe(void 0));
    setInterval(() => {
      oe(M(this, kt), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(_r), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return re(M(this, St))
  }
  set dropletsDialogOpen(t) {
    oe(M(this, St), t, !0)
  }
  get storeDialogOpen() {
    return re(M(this, At))
  }
  set storeDialogOpen(t) {
    oe(M(this, At), t, !0)
  }
  get storeTabIndex() {
    return re(M(this, Ot))
  }
  set storeTabIndex(t) {
    oe(M(this, Ot), t, !0)
  }
  get muted() {
    return re(M(this, Rt))
  }
  set muted(t) {
    oe(M(this, Rt), t, !0)
  }
  get language() {
    return re(M(this, Dt))
  }
  set language(t) {
    oe(M(this, Dt), t, !0)
  }
  get map() {
    return re(M(this, It))
  }
  set map(t) {
    oe(M(this, It), t)
  }
  get automatedClicks() {
    return re(M(this, Nt))
  }
  set automatedClicks(t) {
    oe(M(this, Nt), t, !0)
  }
  get theme() {
    return re(M(this, Ct))
  }
  set theme(t) {
    oe(M(this, Ct), t, !0), localStorage.setItem(_r, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return re(M(this, kt))
  }
  get captcha() {
    return Os ? re(M(this, Pt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    oe(M(this, Pt), t, !0)
  }
}
St = new WeakMap, At = new WeakMap, Ot = new WeakMap, Rt = new WeakMap, Dt = new WeakMap, It = new WeakMap, Nt = new WeakMap, Ct = new WeakMap, kt = new WeakMap, Pt = new WeakMap;
const eo = new Ss;

function As() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Os = mo.toLowerCase() !== "false",
  Rs = `
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
async function Ds() {
  try {
    const n = await fetch(`${Hn}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await Is(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Is(n, t) {
  return new Promise(e => {
    const r = new Blob([Rs], {
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
const to = 3;
var xt, Lt;
class Ns {
  constructor() {
    Z(this, xt, fe(null));
    Z(this, Lt, fe(0))
  }
  get current() {
    return re(M(this, xt))
  }
  set current(t) {
    oe(M(this, xt), t, !0)
  }
  get errorCount() {
    return re(M(this, Lt))
  }
  set errorCount(t) {
    oe(M(this, Lt), t, !0)
  }
}
xt = new WeakMap, Lt = new WeakMap;
const Ae = new Ns;
async function fr(n) {
  if (n === 1) return Cs();
  if (n === 2) {
    const t = await no();
    return t ? pr("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await ks();
    return t ? pr("hcaptcha", t) : !1
  }
  return n === 4 ? Ps() : !1
}
async function Cs() {
  for (let n = 0; n < to; n++) try {
    const t = await Ds();
    if (!t) continue;
    return await Ve.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function pr(n, t) {
  try {
    const e = await Ve.postCaptchaSession({
      provider: n,
      token: t
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

function no() {
  return ro(2)
}

function ks() {
  return ro(3)
}

function ro(n) {
  const t = lt[n];
  if (t) return t;
  const e = new Promise(r => {
    Ae.errorCount = 0, Ae.current = {
      tier: n,
      resolve: o => {
        delete lt[n], r(o)
      }
    }
  });
  return lt[n] = e, e
}

function Ps() {
  const n = lt[4];
  if (n) return n;
  const t = new Promise(e => {
    Ae.errorCount = 0, Ae.current = {
      tier: 4,
      resolve: r => {
        delete lt[4], e(r)
      }
    }
  });
  return lt[4] = t, t
}

function $E(n) {
  const t = Ae.current;
  !t || t.tier === 4 || (t.resolve(n), Ae.current = null)
}

function qE() {
  const n = Ae.current;
  !n || n.tier === 4 || (Ae.errorCount += 1, Ae.errorCount >= to && (n.resolve(void 0), Ae.current = null))
}

function KE() {
  const n = Ae.current;
  !n || n.tier !== 4 || (n.resolve(!0), Ae.current = null)
}

function XE() {
  const n = Ae.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), Ae.current = null)
}
var l = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(l || {});
const xs = () => "Your account has been suspended for breaking the rules",
  Ls = () => "Sua conta foi suspensa por quebrar as regras",
  Ms = () => "您的账号因违反规则已被暂停",
  Bs = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Hs = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Us = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Fs = () => "Il tuo account è stato sospeso per aver infranto le regole",
  js = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Gs = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Ws = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Vs = () => "Ваш обліковий запис було призупинено за порушення правил",
  zs = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  $s = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? xs() : e === "pt" ? Ls() : e === "ch" ? Ms() : e === "de" ? Bs() : e === "es" ? Hs() : e === "fr" ? Us() : e === "it" ? Fs() : e === "jp" ? js() : e === "pl" ? Gs() : e === "ru" ? Ws() : e === "uk" ? Vs() : zs()
  },
  qs = () => "Alliance name already taken",
  Ks = () => "Já possui uma aliança com esse nome",
  Xs = () => "该联盟名称已被占用",
  Ys = () => "Der Allianzname ist bereits vergeben",
  Js = () => "Ese nombre de alianza ya está en uso",
  Qs = () => "Ce nom d’alliance est déjà pris",
  Zs = () => "Esiste già un'alleanza con questo nome",
  ec = () => "このアライアンス名は既に使用されています。",
  tc = () => "Nazwa sojuszu jest już zajęta",
  nc = () => "Такое название альянса уже используется",
  rc = () => "Назва альянсу вже зайнята",
  oc = () => "Tên liên minh đã được sử dụng",
  ac = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? qs() : e === "pt" ? Ks() : e === "ch" ? Xs() : e === "de" ? Ys() : e === "es" ? Js() : e === "fr" ? Qs() : e === "it" ? Zs() : e === "jp" ? ec() : e === "pl" ? tc() : e === "ru" ? nc() : e === "uk" ? rc() : oc()
  },
  ic = () => "Alliance name exceeded the maximum number of characters",
  sc = () => "O nome da aliança excedeu o número máximo de caracteres",
  cc = () => "联盟名称超过最大字符数限制",
  uc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  lc = () => "El nombre de la alianza superó el número máximo de caracteres",
  dc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  _c = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  fc = () => "アライアンス名が最大文字数を超えています。",
  pc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  mc = () => "Название альянса превышает максимальную длину",
  hc = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  gc = () => "Tên liên minh vượt quá số ký tự cho phép",
  wc = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ic() : e === "pt" ? sc() : e === "ch" ? cc() : e === "de" ? uc() : e === "es" ? lc() : e === "fr" ? dc() : e === "it" ? _c() : e === "jp" ? fc() : e === "pl" ? pc() : e === "ru" ? mc() : e === "uk" ? hc() : gc()
  },
  yc = () => "Alliance with empty name",
  bc = () => "Aliança com nome vazio",
  vc = () => "名称为空的联盟",
  Ec = () => "Allianz mit leerem Namen",
  Tc = () => "Alianza con nombre vacío",
  Sc = () => "Alliance avec nom vide",
  Ac = () => "Alleanza con nome vuoto",
  Oc = () => "名前が空のアライアンスです。",
  Rc = () => "Sojusz z pustą nazwą",
  Dc = () => "Альянс с пустым названием",
  Ic = () => "Альянс із порожньою назвою",
  Nc = () => "Liên minh không có tên",
  Cc = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? yc() : e === "pt" ? bc() : e === "ch" ? vc() : e === "de" ? Ec() : e === "es" ? Tc() : e === "fr" ? Sc() : e === "it" ? Ac() : e === "jp" ? Oc() : e === "pl" ? Rc() : e === "ru" ? Dc() : e === "uk" ? Ic() : Nc()
  },
  kc = () => "Botting",
  Pc = () => "Uso de bots",
  xc = () => "脚本",
  Lc = () => "Bot-Nutzung",
  Mc = () => "Botting",
  Bc = () => "Bots",
  Hc = () => "Uso di bot",
  Uc = () => "ボット使用",
  Fc = () => "Botting",
  jc = () => "Боттинг",
  Gc = () => "Боти",
  Wc = () => "Botting",
  Vc = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? kc() : e === "pt" ? Pc() : e === "ch" ? xc() : e === "de" ? Lc() : e === "es" ? Mc() : e === "fr" ? Bc() : e === "it" ? Hc() : e === "jp" ? Uc() : e === "pl" ? Fc() : e === "ru" ? jc() : e === "uk" ? Gc() : Wc()
  },
  zc = () => "Use of software to completely automate painting",
  $c = () => "Uso de software para pintar de forma completamente automatizada ",
  qc = () => "使用软件完全自动化绘制",
  Kc = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Xc = () => "Uso de software para automatizar completamente la pintura",
  Yc = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Jc = () => "Uso di software per dipingere in modo completamente automatizzato",
  Qc = () => "ペイントを完全に自動化するソフトウェアの使用",
  Zc = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  eu = () => "Использование программ для полной автоматизации рисования",
  tu = () => "Використання програм, які повністю автоматизують малювання",
  nu = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  ru = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? zc() : e === "pt" ? $c() : e === "ch" ? qc() : e === "de" ? Kc() : e === "es" ? Xc() : e === "fr" ? Yc() : e === "it" ? Jc() : e === "jp" ? Qc() : e === "pl" ? Zc() : e === "ru" ? eu() : e === "uk" ? tu() : nu()
  },
  ou = () => "Breaking the rules",
  au = () => "Quebrar as regras",
  iu = () => "违反规则",
  su = () => "Regeln brechen",
  cu = () => "Romper las reglas",
  uu = () => "Violation des règles",
  lu = () => "Violazione delle regole",
  du = () => "ルール違反",
  _u = () => "Łamanie zasad",
  fu = () => "Нарушение правил",
  pu = () => "Порушення правил",
  mu = () => "Vi phạm luật",
  hu = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ou() : e === "pt" ? au() : e === "ch" ? iu() : e === "de" ? su() : e === "es" ? cu() : e === "fr" ? uu() : e === "it" ? lu() : e === "jp" ? du() : e === "pl" ? _u() : e === "ru" ? fu() : e === "uk" ? pu() : mu()
  },
  gu = () => "You have broken one of Wplace's rules",
  wu = () => "Você quebrou uma das regras do Wplace",
  yu = () => "你违反了 Wplace 的一项规则",
  bu = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  vu = () => "Has infringido una de las reglas de Wplace",
  Eu = () => "Vous avez enfreint l’une des règles de Wplace",
  Tu = () => "Hai infranto una delle regole di Wplace",
  Su = () => "Wplaceのルールのいずれかに違反しました。",
  Au = () => "Złamałeś jedną z zasad Wplace",
  Ou = () => "Вы нарушили одно из правил Wplace",
  Ru = () => "Ви порушили одне з правил Wplace",
  Du = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Iu = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? gu() : e === "pt" ? wu() : e === "ch" ? yu() : e === "de" ? bu() : e === "es" ? vu() : e === "fr" ? Eu() : e === "it" ? Tu() : e === "jp" ? Su() : e === "pl" ? Au() : e === "ru" ? Ou() : e === "uk" ? Ru() : Du()
  },
  Nu = () => "You cannot paint over event pixels",
  Cu = () => "Você não pode pintar sobre pixels de eventos",
  ku = () => "你不能覆盖活动像素",
  Pu = () => "Du kannst nicht über Event-Pixel malen",
  xu = () => "No puedes pintar sobre píxeles de evento",
  Lu = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Mu = () => "Non puoi dipingere sopra i pixel dell'evento",
  Bu = () => "イベント用のピクセルの上には塗れません。",
  Hu = () => "Nie możesz malować po pikselach wydarzenia",
  Uu = () => "Вы не можете рисовать по пикселям события",
  Fu = () => "Ви не можете малювати поверх пікселів події",
  ju = () => "Bạn không thể tô lên pixel sự kiện",
  mr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Nu() : e === "pt" ? Cu() : e === "ch" ? ku() : e === "de" ? Pu() : e === "es" ? xu() : e === "fr" ? Lu() : e === "it" ? Mu() : e === "jp" ? Bu() : e === "pl" ? Hu() : e === "ru" ? Uu() : e === "uk" ? Fu() : ju()
  },
  Gu = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Wu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Vu = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  zu = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  $u = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  qu = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Ku = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Xu = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Yu = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Ju = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Qu = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Zu = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  el = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Gu() : e === "pt" ? Wu() : e === "ch" ? Vu() : e === "de" ? zu() : e === "es" ? $u() : e === "fr" ? qu() : e === "it" ? Ku() : e === "jp" ? Xu() : e === "pl" ? Yu() : e === "ru" ? Ju() : e === "uk" ? Qu() : Zu()
  },
  tl = () => "Challenge verification not completed",
  nl = () => "Verificação do desafio não concluída",
  rl = () => "挑战验证未完成",
  ol = () => "Herausforderungsverifizierung nicht abgeschlossen",
  al = () => "Verificación del desafío no completada",
  il = () => "Vérification du défi non terminée",
  sl = () => "Verifica della sfida non completata",
  cl = () => "チャレンジ検証が完了していません",
  ul = () => "Weryfikacja wyzwania niezakończona",
  ll = () => "Верификация вызова не завершена",
  dl = () => "Перевірку виклику не завершено",
  _l = () => "Xác minh thử thách chưa hoàn thành",
  An = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? tl() : e === "pt" ? nl() : e === "ch" ? rl() : e === "de" ? ol() : e === "es" ? al() : e === "fr" ? il() : e === "it" ? sl() : e === "jp" ? cl() : e === "pl" ? ul() : e === "ru" ? ll() : e === "uk" ? dl() : _l()
  },
  fl = () => "Couldn't complete the purchase. This item does not exist.",
  pl = () => "Não foi possível concluir a compra. Este item não existe.",
  ml = () => "无法完成购买。该物品不存在。",
  hl = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  gl = () => "No se pudo completar la compra. Este ítem no existe.",
  wl = () => "Achat impossible. Cet objet n’existe pas.",
  yl = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  bl = () => "購入を完了できませんでした。このアイテムは存在しません。",
  vl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  El = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Tl = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Sl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  hr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? fl() : e === "pt" ? pl() : e === "ch" ? ml() : e === "de" ? hl() : e === "es" ? gl() : e === "fr" ? wl() : e === "it" ? yl() : e === "jp" ? bl() : e === "pl" ? vl() : e === "ru" ? El() : e === "uk" ? Tl() : Sl()
  },
  Al = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Ol = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Rl = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Dl = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Il = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Nl = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Cl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  kl = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Pl = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  xl = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Ll = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Ml = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Bl = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Al() : e === "pt" ? Ol() : e === "ch" ? Rl() : e === "de" ? Dl() : e === "es" ? Il() : e === "fr" ? Nl() : e === "it" ? Cl() : e === "jp" ? kl() : e === "pl" ? Pl() : e === "ru" ? xl() : e === "uk" ? Ll() : Ml()
  },
  Hl = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Ul = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Fl = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  jl = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Gl = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Wl = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Vl = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  zl = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  $l = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  ql = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  Kl = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Xl = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  gr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Hl() : e === "pt" ? Ul() : e === "ch" ? Fl() : e === "de" ? jl() : e === "es" ? Gl() : e === "fr" ? Wl() : e === "it" ? Vl() : e === "jp" ? zl() : e === "pl" ? $l() : e === "ru" ? ql() : e === "uk" ? Kl() : Xl()
  },
  Yl = () => "Doxxing",
  Jl = () => "Doxxing",
  Ql = () => "人肉搜索",
  Zl = () => "Doxxing",
  ed = () => "Doxxing",
  td = () => "Doxxing",
  nd = () => "Doxxing",
  rd = () => "ドックス（Doxxing）",
  od = () => "Doxxing",
  ad = () => "Докcинг",
  id = () => "Докcинг",
  sd = () => "Doxxing",
  cd = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Yl() : e === "pt" ? Jl() : e === "ch" ? Ql() : e === "de" ? Zl() : e === "es" ? ed() : e === "fr" ? td() : e === "it" ? nd() : e === "jp" ? rd() : e === "pl" ? od() : e === "ru" ? ad() : e === "uk" ? id() : sd()
  },
  ud = () => "Released other's personal information without their consent",
  ld = () => "Vazar informações pessoais de terceiros sem consentimento",
  dd = () => "在未获同意的情况下公开他人个人信息",
  _d = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  fd = () => "Divulgó información personal de otra persona sin su consentimiento",
  pd = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  md = () => "Diffusione di informazioni personali di terzi senza consenso",
  hd = () => "他人の個人情報を同意なく公開した。",
  gd = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  wd = () => "Публикация личной информации других людей без их согласия",
  yd = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  bd = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  vd = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ud() : e === "pt" ? ld() : e === "ch" ? dd() : e === "de" ? _d() : e === "es" ? fd() : e === "fr" ? pd() : e === "it" ? md() : e === "jp" ? hd() : e === "pl" ? gd() : e === "ru" ? wd() : e === "uk" ? yd() : bd()
  },
  Ed = () => "This email is already in use.",
  Td = () => "Este e-mail já está em uso.",
  Sd = () => "This email is already in use.",
  Ad = () => "This email is already in use.",
  Od = () => "Este correo electrónico ya está en uso.",
  Rd = () => "This email is already in use.",
  Dd = () => "Questa email è già in uso.",
  Id = () => "This email is already in use.",
  Nd = () => "This email is already in use.",
  Cd = () => "This email is already in use.",
  kd = () => "This email is already in use.",
  Pd = () => "This email is already in use.",
  xd = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ed() : e === "pt" ? Td() : e === "ch" ? Sd() : e === "de" ? Ad() : e === "es" ? Od() : e === "fr" ? Rd() : e === "it" ? Dd() : e === "jp" ? Id() : e === "pl" ? Nd() : e === "ru" ? Cd() : e === "uk" ? kd() : Pd()
  },
  Ld = n => `This email is already in use by user #${n.userId}.`,
  Md = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  Bd = n => `This email is already in use by user #${n.userId}.`,
  Hd = n => `This email is already in use by user #${n.userId}.`,
  Ud = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  Fd = n => `This email is already in use by user #${n.userId}.`,
  jd = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  Gd = n => `This email is already in use by user #${n.userId}.`,
  Wd = n => `This email is already in use by user #${n.userId}.`,
  Vd = n => `This email is already in use by user #${n.userId}.`,
  zd = n => `This email is already in use by user #${n.userId}.`,
  $d = n => `This email is already in use by user #${n.userId}.`,
  qd = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ld(n) : e === "pt" ? Md(n) : e === "ch" ? Bd(n) : e === "de" ? Hd(n) : e === "es" ? Ud(n) : e === "fr" ? Fd(n) : e === "it" ? jd(n) : e === "jp" ? Gd(n) : e === "pl" ? Wd(n) : e === "ru" ? Vd(n) : e === "uk" ? zd(n) : $d(n)
  },
  Kd = () => "Enter a valid email address.",
  Xd = () => "Informe um endereço de e-mail válido.",
  Yd = () => "Enter a valid email address.",
  Jd = () => "Enter a valid email address.",
  Qd = () => "Introduce una dirección de correo electrónico válida.",
  Zd = () => "Enter a valid email address.",
  e_ = () => "Inserisci un indirizzo email valido.",
  t_ = () => "Enter a valid email address.",
  n_ = () => "Enter a valid email address.",
  r_ = () => "Enter a valid email address.",
  o_ = () => "Enter a valid email address.",
  a_ = () => "Enter a valid email address.",
  i_ = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Kd() : e === "pt" ? Xd() : e === "ch" ? Yd() : e === "de" ? Jd() : e === "es" ? Qd() : e === "fr" ? Zd() : e === "it" ? e_() : e === "jp" ? t_() : e === "pl" ? n_() : e === "ru" ? r_() : e === "uk" ? o_() : a_()
  },
  s_ = n => `Error while painting: ${n.err}`,
  c_ = n => `Erro enquanto pinta: ${n.err}`,
  u_ = n => `绘制时出错：${n.err}`,
  l_ = n => `Fehler beim Malen: ${n.err}`,
  d_ = n => `Error al pintar: ${n.err}`,
  __ = n => `Erreur lors de la peinture : ${n.err}`,
  f_ = n => `Errore durante la pittura: ${n.err}`,
  p_ = n => `ペイント中にエラーが発生しました: ${n.err}`,
  m_ = n => `Błąd podczas malowania: ${n.err}`,
  h_ = n => `Ошибка при рисовании: ${n.err}`,
  g_ = n => `Помилка під час малювання: ${n.err}`,
  w_ = n => `Lỗi khi tô: ${n.err}`,
  y_ = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? s_(n) : e === "pt" ? c_(n) : e === "ch" ? u_(n) : e === "de" ? l_(n) : e === "es" ? d_(n) : e === "fr" ? __(n) : e === "it" ? f_(n) : e === "jp" ? p_(n) : e === "pl" ? m_(n) : e === "ru" ? h_(n) : e === "uk" ? g_(n) : w_(n)
  },
  b_ = () => "Exceeded maximum number of characters",
  v_ = () => "Excedeu o número máximo de caracteres permitidos",
  E_ = () => "超出最大字符数",
  T_ = () => "Maximale Zeichenanzahl überschritten",
  S_ = () => "Se excedió el número máximo de caracteres",
  A_ = () => "Nombre maximal de caractères dépassé",
  O_ = () => "Numero massimo di caratteri superato",
  R_ = () => "最大文字数を超過しました",
  D_ = () => "Przekroczono maksymalną liczbę znaków",
  I_ = () => "Превышено максимальное количество символов",
  N_ = () => "Перевищено максимальну кількість символів",
  C_ = () => "Đã vượt quá số ký tự tối đa",
  k_ = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? b_() : e === "pt" ? v_() : e === "ch" ? E_() : e === "de" ? T_() : e === "es" ? S_() : e === "fr" ? A_() : e === "it" ? O_() : e === "jp" ? R_() : e === "pl" ? D_() : e === "ru" ? I_() : e === "uk" ? N_() : C_()
  },
  P_ = () => "Verification code expired. Please request a new one.",
  x_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  L_ = () => "验证码已过期，请重新获取。",
  M_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  B_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  H_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  U_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  F_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  j_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  G_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  W_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  V_ = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  z_ = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? P_() : e === "pt" ? x_() : e === "ch" ? L_() : e === "de" ? M_() : e === "es" ? B_() : e === "fr" ? H_() : e === "it" ? U_() : e === "jp" ? F_() : e === "pl" ? j_() : e === "ru" ? G_() : e === "uk" ? W_() : V_()
  },
  $_ = () => "Griefing",
  q_ = () => "Griefing",
  K_ = () => "破坏行为",
  X_ = () => "Griefing",
  Y_ = () => "Griefing",
  J_ = () => "Griefing",
  Q_ = () => "Griefing",
  Z_ = () => "グリーフィング",
  ef = () => "Griefing",
  tf = () => "Гриферство",
  nf = () => "Гріфінг",
  rf = () => "Griefing",
  of = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? $_() : e === "pt" ? q_() : e === "ch" ? K_() : e === "de" ? X_() : e === "es" ? Y_() : e === "fr" ? J_() : e === "it" ? Q_() : e === "jp" ? Z_() : e === "pl" ? ef() : e === "ru" ? tf() : e === "uk" ? nf() : rf()
  },
  af = () => "Messed up with other's artworks",
  sf = () => "Estragou os desenhos dos outros",
  cf = () => "破坏了他人的作品",
  uf = () => "Kunstwerke anderer beschädigt",
  lf = () => "Arruinó las obras de arte de otros",
  df = () => "A abîmé les œuvres des autres",
  _f = () => "Ha rovinato i disegni degli altri",
  ff = () => "他人の作品を荒らした",
  pf = () => "Zniszczył prace innych",
  mf = () => "Испортил чужие рисунки",
  hf = () => "Зіпсував роботи інших",
  gf = () => "Phá hỏng tranh của người khác",
  wf = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? af() : e === "pt" ? sf() : e === "ch" ? cf() : e === "de" ? uf() : e === "es" ? lf() : e === "fr" ? df() : e === "it" ? _f() : e === "jp" ? ff() : e === "pl" ? pf() : e === "ru" ? mf() : e === "uk" ? hf() : gf()
  },
  yf = () => "Hate speech",
  bf = () => "Discurso de Ódio",
  vf = () => "仇恨言论",
  Ef = () => "Hassrede",
  Tf = () => "Discurso de odio",
  Sf = () => "Discours haineux",
  Af = () => "Discorso d'odio",
  Of = () => "ヘイトスピーチ",
  Rf = () => "Mowa nienawiści",
  Df = () => "Речь ненависти",
  If = () => "Мова ворожнечі",
  Nf = () => "Ngôn từ thù hằn",
  Cf = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? yf() : e === "pt" ? bf() : e === "ch" ? vf() : e === "de" ? Ef() : e === "es" ? Tf() : e === "fr" ? Sf() : e === "it" ? Af() : e === "jp" ? Of() : e === "pl" ? Rf() : e === "ru" ? Df() : e === "uk" ? If() : Nf()
  },
  kf = () => "Racism, homophobia, hate groups, ...",
  Pf = () => "Racismo, homofobia, grupos de ódio, ...",
  xf = () => "种族主义、恐同、仇恨团体等",
  Lf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Mf = () => "Racismo, homofobia, grupos de odio, ...",
  Bf = () => "Racisme, homophobie, groupes haineux, ...",
  Hf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Uf = () => "人種差別、同性愛差別、ヘイト団体など。",
  Ff = () => "Rasizm, homofobia, grupy nienawiści, ...",
  jf = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Gf = () => "Расизм, гомофобія, групи ненависті, ...",
  Wf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Vf = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? kf() : e === "pt" ? Pf() : e === "ch" ? xf() : e === "de" ? Lf() : e === "es" ? Mf() : e === "fr" ? Bf() : e === "it" ? Hf() : e === "jp" ? Uf() : e === "pl" ? Ff() : e === "ru" ? jf() : e === "uk" ? Gf() : Wf()
  },
  zf = () => "Inappropriate content",
  $f = () => "Conteúdo inapropriado",
  qf = () => "不当内容",
  Kf = () => "Unangemessene Inhalte",
  Xf = () => "Contenido inapropiado",
  Yf = () => "Contenu inapproprié",
  Jf = () => "Contenuto inappropriato",
  Qf = () => "不適切なコンテンツ",
  Zf = () => "Nieodpowiednie treści",
  ep = () => "Неприемлемый контент",
  tp = () => "Неприйнятний вміст",
  np = () => "Nội dung không phù hợp",
  rp = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? zf() : e === "pt" ? $f() : e === "ch" ? qf() : e === "de" ? Kf() : e === "es" ? Xf() : e === "fr" ? Yf() : e === "it" ? Jf() : e === "jp" ? Qf() : e === "pl" ? Zf() : e === "ru" ? ep() : e === "uk" ? tp() : np()
  },
  op = () => "Explicit, hateful, or illegal content",
  ap = () => "Conteúdo explícito, de ódio ou ilegal",
  ip = () => "露骨、仇恨或非法内容",
  sp = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  cp = () => "Contenido explícito, de odio o ilegal",
  up = () => "Contenu explicite, haineux ou illégal",
  lp = () => "Contenuto esplicito, d'odio o illegale",
  dp = () => "露骨、差別的、または違法なコンテンツ",
  _p = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  fp = () => "Откровенный, разжигающий ненависть или незаконный контент",
  pp = () => "Відвертий, ворожий або незаконний вміст",
  mp = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  hp = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? op() : e === "pt" ? ap() : e === "ch" ? ip() : e === "de" ? sp() : e === "es" ? cp() : e === "fr" ? up() : e === "it" ? lp() : e === "jp" ? dp() : e === "pl" ? _p() : e === "ru" ? fp() : e === "uk" ? pp() : mp()
  },
  gp = () => "Invalid captcha. Please try again.",
  wp = () => "Captcha inválido. Por favor, tente novamente.",
  yp = () => "验证码无效，请重试。",
  bp = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  vp = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Ep = () => "Captcha invalide. Veuillez réessayer.",
  Tp = () => "Captcha non valido. Riprova.",
  Sp = () => "キャプチャが無効です。もう一度お試しください。",
  Ap = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Op = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Rp = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Dp = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Ip = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? gp() : e === "pt" ? wp() : e === "ch" ? yp() : e === "de" ? bp() : e === "es" ? vp() : e === "fr" ? Ep() : e === "it" ? Tp() : e === "jp" ? Sp() : e === "pl" ? Ap() : e === "ru" ? Op() : e === "uk" ? Rp() : Dp()
  },
  Np = () => "Invalid challenge response",
  Cp = () => "Resposta de desafio inválida",
  kp = () => "质询响应无效",
  Pp = () => "Ungültige Challenge-Antwort",
  xp = () => "Respuesta de desafío inválida",
  Lp = () => "Réponse au défi invalide",
  Mp = () => "Risposta alla sfida non valida",
  Bp = () => "無効なチャレンジ応答",
  Hp = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Up = () => "Неверный ответ на вызов",
  Fp = () => "Недійсна відповідь на виклик",
  jp = () => "Phản hồi thử thách không hợp lệ",
  Gp = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Np() : e === "pt" ? Cp() : e === "ch" ? kp() : e === "de" ? Pp() : e === "es" ? xp() : e === "fr" ? Lp() : e === "it" ? Mp() : e === "jp" ? Bp() : e === "pl" ? Hp() : e === "ru" ? Up() : e === "uk" ? Fp() : jp()
  },
  Wp = () => "The verification code is incorrect. Please check it and try again.",
  Vp = () => "Código inválido",
  zp = () => "验证码不正确。请检查后重试。",
  $p = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  qp = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  Kp = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  Xp = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  Yp = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Jp = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  Qp = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  Zp = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  em = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  tm = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Wp() : e === "pt" ? Vp() : e === "ch" ? zp() : e === "de" ? $p() : e === "es" ? qp() : e === "fr" ? Kp() : e === "it" ? Xp() : e === "jp" ? Yp() : e === "pl" ? Jp() : e === "ru" ? Qp() : e === "uk" ? Zp() : em()
  },
  nm = () => "Invalid discord.",
  rm = () => "Discord inválido.",
  om = () => "无效的 Discord。",
  am = () => "Ungültiger Discord.",
  im = () => "Discord inválido.",
  sm = () => "Discord invalide.",
  cm = () => "Discord non valido.",
  um = () => "無効なDiscordアカウントです。",
  lm = () => "Nieprawidłowy Discord.",
  dm = () => "Неверный Discord.",
  _m = () => "Некоректний Discord.",
  fm = () => "Discord không hợp lệ.",
  pm = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? nm() : e === "pt" ? rm() : e === "ch" ? om() : e === "de" ? am() : e === "es" ? im() : e === "fr" ? sm() : e === "it" ? cm() : e === "jp" ? um() : e === "pl" ? lm() : e === "ru" ? dm() : e === "uk" ? _m() : fm()
  },
  mm = () => "The name contains disallowed characters or words. Please choose a different name.",
  hm = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  gm = () => "名称包含禁止的字符或词语，请选择其他名称。",
  wm = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  ym = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  bm = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  vm = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Em = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Tm = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Sm = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Am = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Om = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  wr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? mm() : e === "pt" ? hm() : e === "ch" ? gm() : e === "de" ? wm() : e === "es" ? ym() : e === "fr" ? bm() : e === "it" ? vm() : e === "jp" ? Em() : e === "pl" ? Tm() : e === "ru" ? Sm() : e === "uk" ? Am() : Om()
  },
  Rm = () => "Please enter a valid phone number with country code.",
  Dm = () => "Insira um número de telefone válido com código do país.",
  Im = () => "请输入带国家代码的有效电话号码。",
  Nm = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Cm = () => "Introduce un número de teléfono válido con código de país.",
  km = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Pm = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  xm = () => "国番号付きの有効な電話番号を入力してください。",
  Lm = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Mm = () => "Введите действительный номер телефона с кодом страны.",
  Bm = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Hm = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Um = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Rm() : e === "pt" ? Dm() : e === "ch" ? Im() : e === "de" ? Nm() : e === "es" ? Cm() : e === "fr" ? km() : e === "it" ? Pm() : e === "jp" ? xm() : e === "pl" ? Lm() : e === "ru" ? Mm() : e === "uk" ? Bm() : Hm()
  },
  Fm = () => "Phone number not supported. Please try another number.",
  jm = () => "Número de telefone não suportado. Por favor, tente outro número.",
  Gm = () => "不支持此电话号码。请尝试其他号码。",
  Wm = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  Vm = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  zm = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  $m = () => "Numero di telefono non supportato. Prova con un altro numero.",
  qm = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  Km = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  Xm = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  Ym = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  Jm = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  Qm = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Fm() : e === "pt" ? jm() : e === "ch" ? Gm() : e === "de" ? Wm() : e === "es" ? Vm() : e === "fr" ? zm() : e === "it" ? $m() : e === "jp" ? qm() : e === "pl" ? Km() : e === "ru" ? Xm() : e === "uk" ? Ym() : Jm()
  },
  Zm = () => "The new leader must be a member of the alliance",
  eh = () => "O novo líder deve ser um membro da aliança",
  th = () => "新盟主必须是联盟成员",
  nh = () => "Der neue Anführer muss Mitglied der Allianz sein",
  rh = () => "El nuevo líder debe ser miembro de la alianza",
  oh = () => "Le nouveau chef doit être membre de l’alliance",
  ah = () => "Il nuovo leader deve essere un membro dell'alleanza",
  ih = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  sh = () => "Nowy lider musi być członkiem sojuszu",
  ch = () => "Новый лидер должен быть участником альянса",
  uh = () => "Новий лідер має бути учасником альянсу",
  lh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  dh = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Zm() : e === "pt" ? eh() : e === "ch" ? th() : e === "de" ? nh() : e === "es" ? rh() : e === "fr" ? oh() : e === "it" ? ah() : e === "jp" ? ih() : e === "pl" ? sh() : e === "ru" ? ch() : e === "uk" ? uh() : lh()
  },
  _h = () => "Leaderboard is temporarily disabled",
  fh = () => "O ranking está temporariamente desativado",
  ph = () => "排行榜已暂时停用",
  mh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  hh = () => "La clasificación está deshabilitada temporalmente",
  gh = () => "Le classement est temporairement désactivé",
  wh = () => "La classifica è temporaneamente disattivata",
  yh = () => "ランキングは一時的に無効になっています。",
  bh = () => "Ranking jest tymczasowo wyłączony",
  vh = () => "Таблица лидеров временно отключена",
  Eh = () => "Таблиця лідерів тимчасово вимкнена",
  Th = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  Xe = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? _h() : e === "pt" ? fh() : e === "ch" ? ph() : e === "de" ? mh() : e === "es" ? hh() : e === "fr" ? gh() : e === "it" ? wh() : e === "jp" ? yh() : e === "pl" ? bh() : e === "ru" ? vh() : e === "uk" ? Eh() : Th()
  },
  Sh = () => "Location name is too big (max. 128 characters)",
  Ah = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Oh = () => "位置名称过长（最大 128 个字符）",
  Rh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Dh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Ih = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Nh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Ch = () => "場所の名前が長すぎます（最大128文字）。",
  kh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Ph = () => "Название локации слишком длинное (макс. 128 символов)",
  xh = () => "Назва локації надто довга (макс. 128 символів)",
  Lh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Mh = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Sh() : e === "pt" ? Ah() : e === "ch" ? Oh() : e === "de" ? Rh() : e === "es" ? Dh() : e === "fr" ? Ih() : e === "it" ? Nh() : e === "jp" ? Ch() : e === "pl" ? kh() : e === "ru" ? Ph() : e === "uk" ? xh() : Lh()
  },
  Bh = () => "Multi-accounting",
  Hh = () => "Múltiplas contas",
  Uh = () => "多账号",
  Fh = () => "Multi-Accounting",
  jh = () => "Multi-cuentas",
  Gh = () => "Multi-comptes",
  Wh = () => "Multi-account",
  Vh = () => "複数アカウント使用",
  zh = () => "Multi-konta",
  $h = () => "Мультиаккаунт",
  qh = () => "Мультиакаунтинг",
  Kh = () => "Nhiều tài khoản",
  Xh = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Bh() : e === "pt" ? Hh() : e === "ch" ? Uh() : e === "de" ? Fh() : e === "es" ? jh() : e === "fr" ? Gh() : e === "it" ? Wh() : e === "jp" ? Vh() : e === "pl" ? zh() : e === "ru" ? $h() : e === "uk" ? qh() : Kh()
  },
  Yh = () => "Use more than one account to paint pixels",
  Jh = () => "Usar mais de uma conta para pintar",
  Qh = () => "使用多个账号绘制像素",
  Zh = () => "Mehr als ein Konto zum Malen verwenden",
  eg = () => "Uso de más de una cuenta para pintar píxeles",
  tg = () => "Utiliser plus d’un compte pour peindre",
  ng = () => "Usare più di un account per dipingere",
  rg = () => "複数のアカウントを使ってピクセルを塗った。",
  og = () => "Używanie więcej niż jednego konta do malowania pikseli",
  ag = () => "Использование более одного аккаунта для рисования",
  ig = () => "Використання більше ніж одного акаунта для малювання",
  sg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  cg = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Yh() : e === "pt" ? Jh() : e === "ch" ? Qh() : e === "de" ? Zh() : e === "es" ? eg() : e === "fr" ? tg() : e === "it" ? ng() : e === "jp" ? rg() : e === "pl" ? og() : e === "ru" ? ag() : e === "uk" ? ig() : sg()
  },
  ug = n => `You can change your name again in ${n.days} days`,
  lg = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  dg = n => `你可以在 ${n.days} 天后再次修改名称`,
  _g = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  fg = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  pg = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  mg = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  hg = n => `${n.days}日後に再び名前を変更できます。`,
  gg = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  wg = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  yg = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  bg = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  vg = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ug(n) : e === "pt" ? lg(n) : e === "ch" ? dg(n) : e === "de" ? _g(n) : e === "es" ? fg(n) : e === "fr" ? pg(n) : e === "it" ? mg(n) : e === "jp" ? hg(n) : e === "pl" ? gg(n) : e === "ru" ? wg(n) : e === "uk" ? yg(n) : bg(n)
  },
  Eg = () => "No internet access or the servers are offline. Try again later.",
  Tg = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Sg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Ag = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Og = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Rg = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Dg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Ig = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Ng = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Cg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  kg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Pg = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  xg = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Eg() : e === "pt" ? Tg() : e === "ch" ? Sg() : e === "de" ? Ag() : e === "es" ? Og() : e === "fr" ? Rg() : e === "it" ? Dg() : e === "jp" ? Ig() : e === "pl" ? Ng() : e === "ru" ? Cg() : e === "uk" ? kg() : Pg()
  },
  Lg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Mg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Bg = () => "您无权验证电话号码。请尝试刷新页面。",
  Hg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Ug = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  Fg = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  jg = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Gg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Wg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Vg = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  zg = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  $g = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  qg = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Lg() : e === "pt" ? Mg() : e === "ch" ? Bg() : e === "de" ? Hg() : e === "es" ? Ug() : e === "fr" ? Fg() : e === "it" ? jg() : e === "jp" ? Gg() : e === "pl" ? Wg() : e === "ru" ? Vg() : e === "uk" ? zg() : $g()
  },
  Kg = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Xg = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Yg = () => "操作不被允许。你的收藏位置可能过多。",
  Jg = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Qg = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Zg = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  ew = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  tw = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  nw = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  rw = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  ow = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  aw = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  iw = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Kg() : e === "pt" ? Xg() : e === "ch" ? Yg() : e === "de" ? Jg() : e === "es" ? Qg() : e === "fr" ? Zg() : e === "it" ? ew() : e === "jp" ? tw() : e === "pl" ? nw() : e === "ru" ? rw() : e === "uk" ? ow() : aw()
  },
  sw = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  cw = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  uw = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  lw = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  dw = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  _w = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  fw = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  pw = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  mw = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  hw = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  gw = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  ww = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  yw = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? sw(n) : e === "pt" ? cw(n) : e === "ch" ? uw(n) : e === "de" ? lw(n) : e === "es" ? dw(n) : e === "fr" ? _w(n) : e === "it" ? fw(n) : e === "jp" ? pw(n) : e === "pl" ? mw(n) : e === "ru" ? hw(n) : e === "uk" ? gw(n) : ww(n)
  },
  bw = () => "You are trying to paint with a color you do not own",
  vw = () => "Você está tentando pintar com uma cor que não possui",
  Ew = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Tw = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Sw = () => "Estás intentando pintar con un color que no posees",
  Aw = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Ow = () => "Stai cercando di dipingere con un colore che non possiedi",
  Rw = () => "所持していない色で塗ろうとしています。",
  Dw = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Iw = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Nw = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Cw = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  yr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? bw() : e === "pt" ? vw() : e === "ch" ? Ew() : e === "de" ? Tw() : e === "es" ? Sw() : e === "fr" ? Aw() : e === "it" ? Ow() : e === "jp" ? Rw() : e === "pl" ? Dw() : e === "ru" ? Iw() : e === "uk" ? Nw() : Cw()
  },
  kw = () => "Phone already used",
  Pw = () => "Telefone já usado",
  xw = () => "电话号码已被使用",
  Lw = () => "Telefonnummer bereits verwendet",
  Mw = () => "Teléfono ya utilizado",
  Bw = () => "Téléphone déjà utilisé",
  Hw = () => "Telefono già utilizzato",
  Uw = () => "この電話番号は既に使用されています。",
  Fw = () => "Numer telefonu jest już używany",
  jw = () => "Телефон уже используется",
  Gw = () => "Номер телефону вже використовується",
  Ww = () => "Số điện thoại đã được sử dụng",
  Vw = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? kw() : e === "pt" ? Pw() : e === "ch" ? xw() : e === "de" ? Lw() : e === "es" ? Mw() : e === "fr" ? Bw() : e === "it" ? Hw() : e === "jp" ? Uw() : e === "pl" ? Fw() : e === "ru" ? jw() : e === "uk" ? Gw() : Ww()
  },
  zw = () => "This phone number's region is not supported",
  $w = () => "A região deste número de telefone não é suportada",
  qw = () => "此电话号码的地区不受支持",
  Kw = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  Xw = () => "La región de este número de teléfono no es compatible",
  Yw = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Jw = () => "La regione di questo numero di telefono non è supportata",
  Qw = () => "この電話番号の地域はサポートされていません",
  Zw = () => "Region tego numeru telefonu nie jest obsługiwany",
  ey = () => "Регион этого номера телефона не поддерживается",
  ty = () => "Регіон цього номера телефону не підтримується",
  ny = () => "Vùng của số điện thoại này không được hỗ trợ",
  ry = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? zw() : e === "pt" ? $w() : e === "ch" ? qw() : e === "de" ? Kw() : e === "es" ? Xw() : e === "fr" ? Yw() : e === "it" ? Jw() : e === "jp" ? Qw() : e === "pl" ? Zw() : e === "ru" ? ey() : e === "uk" ? ty() : ny()
  },
  oy = () => "Refresh your page to get the latest update",
  ay = () => "Recarregue sua página para obter as últimas atualizações",
  iy = () => "刷新页面以获取最新更新",
  sy = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  cy = () => "Actualiza la página para obtener la última versión",
  uy = () => "Actualisez la page pour obtenir les dernières mises à jour",
  ly = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  dy = () => "最新の状態にするにはページを再読み込みしてください。",
  _y = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  fy = () => "Обновите страницу, чтобы получить последние изменения",
  py = () => "Оновіть сторінку, щоб отримати останні оновлення",
  my = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  br = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? oy() : e === "pt" ? ay() : e === "ch" ? iy() : e === "de" ? sy() : e === "es" ? cy() : e === "fr" ? uy() : e === "it" ? ly() : e === "jp" ? dy() : e === "pl" ? _y() : e === "ru" ? fy() : e === "uk" ? py() : my()
  },
  hy = () => "The request timed out. Please try again.",
  gy = () => "A solicitação expirou. Por favor, tente novamente.",
  wy = () => "请求超时。请重试。",
  yy = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  by = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  vy = () => "La requête a expiré. Veuillez réessayer.",
  Ey = () => "La richiesta è scaduta. Riprova.",
  Ty = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Sy = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Ay = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Oy = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Ry = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Dy = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? hy() : e === "pt" ? gy() : e === "ch" ? wy() : e === "de" ? yy() : e === "es" ? by() : e === "fr" ? vy() : e === "it" ? Ey() : e === "jp" ? Ty() : e === "pl" ? Sy() : e === "ru" ? Ay() : e === "uk" ? Oy() : Ry()
  },
  Iy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ny = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Cy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ky = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Py = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  xy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ly = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  My = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  By = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Hy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Uy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Fy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  jy = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Iy() : e === "pt" ? Ny() : e === "ch" ? Cy() : e === "de" ? ky() : e === "es" ? Py() : e === "fr" ? xy() : e === "it" ? Ly() : e === "jp" ? My() : e === "pl" ? By() : e === "ru" ? Hy() : e === "uk" ? Uy() : Fy()
  },
  Gy = () => "The service is currently unavailable. Please try again later.",
  Wy = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Vy = () => "服务当前不可用。请稍后再试。",
  zy = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  $y = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  qy = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Ky = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Xy = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Yy = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Jy = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Qy = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Zy = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  eb = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Gy() : e === "pt" ? Wy() : e === "ch" ? Vy() : e === "de" ? zy() : e === "es" ? $y() : e === "fr" ? qy() : e === "it" ? Ky() : e === "jp" ? Xy() : e === "pl" ? Yy() : e === "ru" ? Jy() : e === "uk" ? Qy() : Zy()
  },
  tb = () => "Too many attempts. Please try again later",
  nb = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  rb = () => "尝试次数过多，请稍后再试",
  ob = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  ab = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  ib = () => "Trop de tentatives. Veuillez réessayer plus tard",
  sb = () => "Troppi tentativi. Riprova più tardi.",
  cb = () => "試行回数が多すぎます。後で再度お試しください。",
  ub = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  lb = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  db = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  _b = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  vr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? tb() : e === "pt" ? nb() : e === "ch" ? rb() : e === "de" ? ob() : e === "es" ? ab() : e === "fr" ? ib() : e === "it" ? sb() : e === "jp" ? cb() : e === "pl" ? ub() : e === "ru" ? lb() : e === "uk" ? db() : _b()
  },
  fb = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  pb = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  mb = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  hb = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  gb = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  wb = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  yb = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  bb = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  vb = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Eb = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Tb = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Sb = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Ab = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? fb() : e === "pt" ? pb() : e === "ch" ? mb() : e === "de" ? hb() : e === "es" ? gb() : e === "fr" ? wb() : e === "it" ? yb() : e === "jp" ? bb() : e === "pl" ? vb() : e === "ru" ? Eb() : e === "uk" ? Tb() : Sb()
  },
  Ob = () => "The typed username does not match your current username.",
  Rb = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Db = () => "输入的用户名与当前用户名不匹配。",
  Ib = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Nb = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Cb = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  kb = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Pb = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  xb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Lb = () => "Введённое имя пользователя не совпадает с текущим.",
  Mb = () => "Введене імʼя користувача не збігається з поточним.",
  Bb = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Hb = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ob() : e === "pt" ? Rb() : e === "ch" ? Db() : e === "de" ? Ib() : e === "es" ? Nb() : e === "fr" ? Cb() : e === "it" ? kb() : e === "jp" ? Pb() : e === "pl" ? xb() : e === "ru" ? Lb() : e === "uk" ? Mb() : Bb()
  },
  Ub = () => "Unexpected server error. Try again later.",
  Fb = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  jb = () => "服务器出现意外错误。请稍后再试。",
  Gb = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Wb = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Vb = () => "Erreur serveur inattendue. Réessayez plus tard.",
  zb = () => "Errore imprevisto del server. Riprova più tardi.",
  $b = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  qb = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Kb = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Xb = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Yb = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  m = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ub() : e === "pt" ? Fb() : e === "ch" ? jb() : e === "de" ? Gb() : e === "es" ? Wb() : e === "fr" ? Vb() : e === "it" ? zb() : e === "jp" ? $b() : e === "pl" ? qb() : e === "ru" ? Kb() : e === "uk" ? Xb() : Yb()
  },
  Jb = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Qb = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Zb = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  e1 = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  t1 = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  n1 = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  r1 = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  o1 = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  a1 = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  i1 = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  s1 = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  c1 = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  u1 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Jb() : e === "pt" ? Qb() : e === "ch" ? Zb() : e === "de" ? e1() : e === "es" ? t1() : e === "fr" ? n1() : e === "it" ? r1() : e === "jp" ? o1() : e === "pl" ? a1() : e === "ru" ? i1() : e === "uk" ? s1() : c1()
  },
  l1 = () => "VPN or proxy detected. Please disable your VPN and try again.",
  d1 = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  _1 = () => "检测到VPN或代理。请关闭VPN后重试。",
  f1 = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  p1 = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  m1 = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  h1 = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  g1 = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  w1 = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  y1 = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  b1 = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  v1 = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  E1 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? l1() : e === "pt" ? d1() : e === "ch" ? _1() : e === "de" ? f1() : e === "es" ? p1() : e === "fr" ? m1() : e === "it" ? h1() : e === "jp" ? g1() : e === "pl" ? w1() : e === "ru" ? y1() : e === "uk" ? b1() : v1()
  },
  T1 = () => "Failed to load WebAssembly module. Try to use another browser.",
  S1 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  A1 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  O1 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  R1 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  D1 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  I1 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  N1 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  C1 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  k1 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  P1 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  x1 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  L1 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? T1() : e === "pt" ? S1() : e === "ch" ? A1() : e === "de" ? O1() : e === "es" ? R1() : e === "fr" ? D1() : e === "it" ? I1() : e === "jp" ? N1() : e === "pl" ? C1() : e === "ru" ? k1() : e === "uk" ? P1() : x1()
  },
  M1 = () => "You already have this item. Please refresh the page.",
  B1 = () => "Você já possui este item. Atualize a página.",
  H1 = () => "你已经拥有此物品。请刷新页面。",
  U1 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  F1 = () => "Ya tienes este ítem. Actualiza la página.",
  j1 = () => "Vous possédez déjà cet objet. Actualisez la page.",
  G1 = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  W1 = () => "このアイテムはすでに所持しています。ページを更新してください。",
  V1 = () => "Masz już ten przedmiot. Odśwież stronę.",
  z1 = () => "У вас уже есть этот предмет. Обновите страницу.",
  $1 = () => "У вас уже є цей предмет. Оновіть сторінку.",
  q1 = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Er = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? M1() : e === "pt" ? B1() : e === "ch" ? H1() : e === "de" ? U1() : e === "es" ? F1() : e === "fr" ? j1() : e === "it" ? G1() : e === "jp" ? W1() : e === "pl" ? V1() : e === "ru" ? z1() : e === "uk" ? $1() : q1()
  },
  K1 = () => "You are already in an alliance",
  X1 = () => "Você já está em uma aliança",
  Y1 = () => "你已经在一个联盟中",
  J1 = () => "Du bist bereits in einer Allianz",
  Q1 = () => "Ya estás en una alianza",
  Z1 = () => "Vous êtes déjà dans une alliance",
  ev = () => "Sei già in un'alleanza",
  tv = () => "すでにアライアンスに所属しています。",
  nv = () => "Jesteś już w sojuszu",
  rv = () => "Вы уже состоите в альянсе",
  ov = () => "Ви вже перебуваєте в альянсі",
  av = () => "Bạn đã ở trong một liên minh",
  iv = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? K1() : e === "pt" ? X1() : e === "ch" ? Y1() : e === "de" ? J1() : e === "es" ? Q1() : e === "fr" ? Z1() : e === "it" ? ev() : e === "jp" ? tv() : e === "pl" ? nv() : e === "ru" ? rv() : e === "uk" ? ov() : av()
  },
  sv = () => "You are not allowed to do this",
  cv = () => "Você não tem permissão para fazer isso",
  uv = () => "你无权执行此操作",
  lv = () => "Du bist dazu nicht berechtigt",
  dv = () => "No tienes permiso para hacer esto",
  _v = () => "Vous n’êtes pas autorisé à faire cela",
  fv = () => "Non hai il permesso di farlo",
  pv = () => "この操作を行う権限がありません。",
  mv = () => "Nie masz uprawnień, aby to zrobić",
  hv = () => "У вас нет прав для этого действия",
  gv = () => "Ви не маєте права це робити",
  wv = () => "Bạn không có quyền làm việc này",
  Ye = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? sv() : e === "pt" ? cv() : e === "ch" ? uv() : e === "de" ? lv() : e === "es" ? dv() : e === "fr" ? _v() : e === "it" ? fv() : e === "jp" ? pv() : e === "pl" ? mv() : e === "ru" ? hv() : e === "uk" ? gv() : wv()
  },
  yv = () => "You do not have enough Droplets to buy this item.",
  bv = () => "Você não tem Droplets suficientes para comprar este item.",
  vv = () => "你的 Droplets 不足，无法购买此物品。",
  Ev = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Tv = () => "No tienes suficientes Droplets para comprar este ítem.",
  Sv = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Av = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Ov = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Rv = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Dv = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Iv = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Nv = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Tr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? yv() : e === "pt" ? bv() : e === "ch" ? vv() : e === "de" ? Ev() : e === "es" ? Tv() : e === "fr" ? Sv() : e === "it" ? Av() : e === "jp" ? Ov() : e === "pl" ? Rv() : e === "ru" ? Dv() : e === "uk" ? Iv() : Nv()
  },
  Cv = () => "You need to be logged in to paint",
  kv = () => "Você precisa estar conectado para pintar",
  Pv = () => "你需要登录才能进行绘制",
  xv = () => "Du musst eingeloggt sein, um zu malen",
  Lv = () => "Debes iniciar sesión para pintar",
  Mv = () => "Vous devez être connecté pour peindre",
  Bv = () => "Devi avere effettuato l'accesso per dipingere",
  Hv = () => "ペイントするにはログインが必要です。",
  Uv = () => "Musisz być zalogowany, aby malować",
  Fv = () => "Чтобы рисовать, нужно войти в аккаунт",
  jv = () => "Щоб малювати, необхідно увійти в акаунт",
  Gv = () => "Bạn cần đăng nhập để tô",
  Sr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Cv() : e === "pt" ? kv() : e === "ch" ? Pv() : e === "de" ? xv() : e === "es" ? Lv() : e === "fr" ? Mv() : e === "it" ? Bv() : e === "jp" ? Hv() : e === "pl" ? Uv() : e === "ru" ? Fv() : e === "uk" ? jv() : Gv()
  },
  Wv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Vv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  zv = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  $v = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  qv = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Kv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Xv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Yv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Jv = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Qv = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Zv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  e0 = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  t0 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Wv() : e === "pt" ? Vv() : e === "ch" ? zv() : e === "de" ? $v() : e === "es" ? qv() : e === "fr" ? Kv() : e === "it" ? Xv() : e === "jp" ? Yv() : e === "pl" ? Jv() : e === "ru" ? Qv() : e === "uk" ? Zv() : e0()
  },
  n0 = n => `Your account has been suspended out until ${n.until}`,
  r0 = n => `A sua conta está suspensa até ${n.until}`,
  o0 = n => `你的账号已被暂停至 ${n.until}`,
  a0 = n => `Dein Konto ist gesperrt bis ${n.until}`,
  i0 = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  s0 = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  c0 = n => `Il tuo account è sospeso fino al ${n.until}`,
  u0 = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  l0 = n => `Twoje konto zostało zawieszone do ${n.until}`,
  d0 = n => `Ваш аккаунт заблокирован до ${n.until}`,
  _0 = n => `Ваш акаунт призупинено до ${n.until}`,
  f0 = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  Ar = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? n0(n) : e === "pt" ? r0(n) : e === "ch" ? o0(n) : e === "de" ? a0(n) : e === "es" ? i0(n) : e === "fr" ? s0(n) : e === "it" ? c0(n) : e === "jp" ? u0(n) : e === "pl" ? l0(n) : e === "ru" ? d0(n) : e === "uk" ? _0(n) : f0(n)
  },
  p0 = () => "A correction is already pending for this ticket.",
  m0 = () => "Já existe uma correção pendente para este ticket.",
  h0 = () => "此工单已存在待审核的更正请求。",
  g0 = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  w0 = () => "Ya hay una corrección pendiente para este ticket.",
  y0 = () => "Une correction est déjà en attente pour ce ticket.",
  b0 = () => "Una correzione è già in sospeso per questo ticket.",
  v0 = () => "このチケットには未処理の修正があります。",
  E0 = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  T0 = () => "Для этого тикета уже есть запрос на исправление.",
  S0 = () => "Для цього тікета вже є запит на перевірці.",
  A0 = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  O0 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? p0() : e === "pt" ? m0() : e === "ch" ? h0() : e === "de" ? g0() : e === "es" ? w0() : e === "fr" ? y0() : e === "it" ? b0() : e === "jp" ? v0() : e === "pl" ? E0() : e === "ru" ? T0() : e === "uk" ? S0() : A0()
  },
  R0 = () => "You cannot review your own correction request.",
  D0 = () => "Você não pode revisar sua própria solicitação de correção.",
  I0 = () => "不能审核自己提交的更正请求。",
  N0 = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  C0 = () => "No puedes revisar tu propia solicitud de corrección.",
  k0 = () => "Tu ne peux pas examiner ta propre demande de correction.",
  P0 = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  x0 = () => "自分のリクエストはレビューできません。",
  L0 = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  M0 = () => "Нельзя рассматривать собственный запрос.",
  B0 = () => "Не можна перевіряти власний запит.",
  H0 = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  U0 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? R0() : e === "pt" ? D0() : e === "ch" ? I0() : e === "de" ? N0() : e === "es" ? C0() : e === "fr" ? k0() : e === "it" ? P0() : e === "jp" ? x0() : e === "pl" ? L0() : e === "ru" ? M0() : e === "uk" ? B0() : H0()
  },
  F0 = () => "This correction has already been reviewed.",
  j0 = () => "Esta correção já foi revisada.",
  G0 = () => "此请求已被审核。",
  W0 = () => "Diese Korrektur wurde bereits geprüft.",
  V0 = () => "Esta corrección ya ha sido revisada.",
  z0 = () => "Cette correction a déjà été examinée.",
  $0 = () => "Questa correzione è già stata revisionata.",
  q0 = () => "このリクエストはすでにレビュー済みです。",
  K0 = () => "Ta prośba została już rozpatrzona.",
  X0 = () => "Этот запрос уже рассмотрен.",
  Y0 = () => "Цей запит вже перевірено.",
  J0 = () => "Yêu cầu này đã được duyệt.",
  Q0 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? F0() : e === "pt" ? j0() : e === "ch" ? G0() : e === "de" ? W0() : e === "es" ? V0() : e === "fr" ? z0() : e === "it" ? $0() : e === "jp" ? q0() : e === "pl" ? K0() : e === "ru" ? X0() : e === "uk" ? Y0() : J0()
  },
  Ge = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function YE(n) {
  const t = Math.floor(n / Ge.hour);
  n -= t * Ge.hour;
  const e = Math.floor(n / Ge.minute);
  n -= e * Ge.minute;
  const o = Math.floor(n / Ge.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function JE(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    o = String(n.getHours()).padStart(2, "0"),
    a = String(n.getMinutes()).padStart(2, "0"),
    i = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${o}:${a}:${i}`
}
const QE = {
    griefing: of(),
    "multi-accounting": Xh(),
    "hate-speech": Cf(),
    bot: Vc(),
    doxxing: cd(),
    "inappropriate-content": rp(),
    other: hu()
  },
  ZE = {
    doxxing: vd(),
    "hate-speech": Vf(),
    griefing: wf(),
    "multi-accounting": cg(),
    bot: ru(),
    "inappropriate-content": hp(),
    other: Iu()
  },
  eT = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Or = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  tT = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  Z0 = 365 * Ge.day;

function oo(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function nT(n, t = Date.now()) {
  const e = oo(n);
  return e === null ? !1 : e - t >= Z0
}

function rT(n, t = Date.now()) {
  const e = oo(n);
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
const eE = [{
    tileSize: 1e3,
    zoom: 11
  }],
  tE = 4,
  nE = 6e3,
  rE = [{
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
  oE = {
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
  aE = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  iE = {
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
  sE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  nt = {
    seasons: eE,
    regionSize: tE,
    refreshIntervalMs: nE,
    colors: rE,
    products: oE,
    countries: aE,
    permissions: iE,
    settings: sE
  },
  Ln = nt,
  cE = nt.seasons,
  ao = nt.seasons.length - 1,
  oT = nt.seasons[ao].zoom,
  aT = nt.seasons[ao].tileSize,
  iT = nt.permissions,
  uE = nt.settings;

function sT(n) {
  return Ln.countries[n - 1]
}
class b extends Error {
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

function cT(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    e[o] = r
  }
  return e
}
const lE = 30 * Ge.minute;
var Mt, Bt;
class dE {
  constructor(t) {
    Z(this, Mt, fe(!0));
    Z(this, Bt, fe(null));
    $(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return re(M(this, Mt))
  }
  set online(t) {
    oe(M(this, Mt), t, !0)
  }
  get serverTimeOffsetMs() {
    return re(M(this, Bt))
  }
  set serverTimeOffsetMs(t) {
    oe(M(this, Bt), t, !0)
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
      a = await gt.getHeaders(o),
      i = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: a,
        credentials: "include"
      });
    if (i.status !== l.OK) {
      if (i.status === l.UNAUTHORIZED) throw new Error(Sr());
      if (i.status === l.FORBIDDEN) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(gr());
        const s = await i.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const u = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(Ar({
            until: u.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(br());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(yr());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(mr());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await fr(s.tier)) return this.paint(t);
            throw new Error(An())
          } else console.error("Challenge required but no tier provided", s);
        st.refresh()
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
    if (e.status !== l.OK) throw new b(m(), e.status);
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
    if (i.status !== l.OK) throw new b(m(), i.status);
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
    if (i.status !== l.OK) throw new b(m(), i.status);
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
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "timelapse_too_many_events" ? new b(jy(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
    }
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (i.status !== l.OK) throw new b(m(), i.status);
    return i.json()
  }
  async sendPaintRequests(t, e, r, o) {
    const a = Rr(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      s = (await Promise.all(Object.values(a).map(async u => {
        const [c, d] = u[0].tile, p = u[0].season, f = {
          colors: u.map(w => w.colorIdx),
          coords: u.flatMap(w => w.pixel),
          csid: r
        }, _ = JSON.stringify(f), g = e(p, c, d), h = await gt.getHeaders(_);
        return this.request(g, {
          method: "POST",
          body: _,
          headers: h,
          credentials: "include"
        })
      }))).filter(u => u.status !== l.OK);
    if (s.length) {
      const u = s[0];
      if (u.status === l.UNAUTHORIZED) throw new Error(Sr());
      if (u.status === l.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(gr());
        const c = await u.json();
        if ((c == null ? void 0 : c.error) === "timeout") {
          const d = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(Ar({
            until: d.toLocaleString()
          }))
        }
        if ((c == null ? void 0 : c.error) === "refresh") throw new Error(br());
        if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(yr());
        if ((c == null ? void 0 : c.error) === "event-pixel-present") throw new Error(mr());
        st.refresh()
      } else throw new Error(m())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const o = _E(t),
      a = await fE(o),
      i = new FormData;
    i.append("fingerprint", e), i.append("season", o.season.toString()), i.append("px0", o.offsetX.toString()), i.append("py0", o.offsetY.toString()), i.append("width", o.width.toString()), i.append("height", o.height.toString()), i.append("pixels", t.length.toString()), i.append("bitmap", a, "auto-painter.png"), i.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: i,
      credentials: "include"
    });
    if (s.status === l.FORBIDDEN) {
      const u = await s.json().catch(() => null);
      if (typeof(u == null ? void 0 : u.charges) == "number") throw new Error(yw({
        charges: Math.floor(u.charges),
        pixels: t.length
      }));
      const c = typeof(u == null ? void 0 : u.error) == "string" ? u.error.trim() : "";
      throw c && c !== "Forbidden" ? new Error(c) : new Error("Auto painter is restricted to administrators.")
    }
    if (s.status !== l.OK) throw new Error(m());
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
    if (s.status !== l.OK) {
      const u = await s.text();
      throw new Error(y_({
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
    if (u.status !== l.OK) {
      const g = await u.text();
      throw console.error("Error while fetching pixel area info", g), new Error(m())
    }
    const c = await u.arrayBuffer(),
      d = new DataView(c),
      p = Math.floor(c.byteLength / 5),
      f = new Uint32Array(p),
      _ = new Uint8Array(p);
    for (let g = 0; g < p; g++) {
      const h = g * 5;
      f[g] = d.getUint32(h, !0), _[g] = d.getUint8(h + 4)
    }
    return {
      paintedBy: f,
      colors: _
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === l.OK) return await t.json()
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === l.OK) return (await t.json()).email
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new Error(await t.text());
    return await t.json()
  }
  async createEmbeddedCheckout(t) {
    const e = await this.request("/payment/create-checkout-session", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        lookup_key: t
      })
    });
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error($s());
    if (e.status !== l.OK) throw new Error(await e.text());
    return e.json()
  }
  async refreshDropletSession(t) {
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
    if (t.status === l.NOT_FOUND) return null;
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
    if (t.status !== l.OK) throw new Error(m());
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
    if (e.status === l.BAD_REQUEST) throw new Error(Um());
    if (e.status === l.CONFLICT) throw new Error(Vw());
    if (e.status === l.FORBIDDEN) throw new Error(qg());
    if (e.status === l.TOO_MANY_REQUESTS) throw new Error(vr());
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(ry());
    if (e.status === l.LOCKED) throw new Error(u1());
    if (e.status === l.UNPROCESSABLE_ENTITY) throw new Error(Qm());
    if (e.status === l.NOT_ACCEPTABLE) throw new Error(E1());
    if (e.status === l.PRECONDITION_FAILED) throw new Error(Bl());
    if (e.status !== l.OK) throw new Error(m());
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
        "x-fp": await Rn()
      }
    });
    if (t.type === "otp") {
      if (r.status === l.GONE) throw new Error(z_());
      if (r.status === l.BAD_REQUEST) throw new Error(tm());
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(vr());
      if (r.status !== l.OK) throw new Error(m())
    } else {
      if (r.status === l.BAD_REQUEST) throw new Error(Gp());
      if (r.status !== l.OK) throw new Error(m())
    }
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === l.BAD_REQUEST) {
      const r = await e.json(),
        o = (r == null ? void 0 : r.error) ?? "";
      if (o === "invalid_name") throw new Error(wr());
      if (o === "invalid_discord") throw new Error(pm());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const a = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(vg({
          days: a
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== l.OK) throw new Error(m())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === l.BAD_REQUEST) throw new Error(Hb());
    if (e.status !== l.OK) throw new Error(m())
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
    if (e.status === l.FORBIDDEN) throw new Error(iw());
    if (e.status !== l.OK) throw new Error(m())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== l.OK) throw new Error(m())
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
    if (r.status === l.BAD_REQUEST) throw new Error(Mh());
    if (r.status !== l.OK) throw new Error(m())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== l.OK) throw new Error(Xe());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== l.OK) throw new Error(Xe());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === l.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === l.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === l.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw new Error(Xe())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < lE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== l.OK) throw new Error(m());
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
    if (e.status !== l.OK) throw e.status === l.NOT_FOUND ? new Error(hr()) : e.status === l.FORBIDDEN ? new Error(Tr()) : e.status === l.CONFLICT ? new Error(Er()) : new Error(m())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === l.OK) return t.json();
    if (t.status === l.NOT_FOUND) return;
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
    if (e.status === l.OK) return e.json();
    if (e.status === l.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(wc()) : r.error === "name_taken" ? new Error(ac()) : r.error == "empty_name" ? new Error(Cc()) : new Error(m())
    } else throw e.status === l.FORBIDDEN ? new Error(iv()) : new Error(m())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== l.OK) throw new Error(m())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : e.status === l.BAD_REQUEST ? new Error(k_()) : new Error(m())
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
    if (r.status !== l.OK) throw r.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw e.status === l.FORBIDDEN ? new Error(Ye()) : new Error(Xe())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === l.OK) return t.json();
    throw t.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
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
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw new Error(m())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === l.OK) return e.json();
    throw new Error(m())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
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
  async searchAlliance(t) {
    const e = new URLSearchParams({
        q: t
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
  async searchAlliances(t) {
    return this.searchAlliance(t)
  }
  async getAllianceFull(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}/full`, {
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
  async getAdminAllianceMembers(t, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      o = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
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
  async renameAlliance(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
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
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json();
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(dh()) : new Error(m())
    } else if (r.status !== l.OK) throw new b(m(), r.status)
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
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : new Error(m())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== l.OK) throw new Error(m())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== l.OK) throw new Error(m());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== l.OK) throw new Error(m())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
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
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((o, a) => Or[o.reason] - Or[a.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
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
    if (t.status !== l.OK) throw new b(m(), t.status);
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
    if (a.status !== l.OK && a.status !== l.BAD_REQUEST) throw new b(m(), a.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(t) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === l.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new b(O0(), l.CONFLICT) : new b(m(), l.CONFLICT)
    }
    if (e.status !== l.OK) throw new b(m(), e.status);
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
    if (o.status !== l.OK) throw new b(m(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
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
    if (o.status === l.FORBIDDEN) throw new b(U0(), l.FORBIDDEN);
    if (o.status === l.CONFLICT) throw new b(Q0(), l.CONFLICT);
    if (o.status !== l.OK) throw new b(m(), o.status)
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
      throw console.error("Fetch error:", s), this.online = !1, new Error(el(), {
        cause: s
      })
    }
    if (r.status === l.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Ab());
    const o = ((i = r.headers.get("cf-mitigated")) == null ? void 0 : i.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (gt.setCfLikelyAutomated(!0), !await no()) throw new Error(An());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(t0());
      if (r.status === l.REQUEST_TIMEOUT) throw new Error(Dy());
      if (r.status === l.SERVICE_UNAVAILABLE) throw new Error(eb())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
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
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.NOT_FOUND) {
      if (e.status !== l.OK) throw new b(m(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.NOT_FOUND) {
      if (e.status !== l.OK) throw new b(m(), e.status);
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
    if (o.status !== l.OK) throw new b(m(), o.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== l.OK) throw new b(m(), o.status);
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
    if (a.status !== l.OK) throw new b(m(), a.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
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
    if (r.status !== l.OK) throw new b(m(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
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
      const u = typeof a.createdAt == "string" ? a.createdAt : a.CreatedAt ? new Date(a.CreatedAt).toISOString() : "",
        c = a.product_variant ?? a.productVariant,
        d = c == null || c === "" ? null : Number(c);
      return {
        product_name: String(a.productName ?? a.product_name ?? ""),
        amount: Number(a.amount ?? 0),
        price: Number(a.price ?? 0),
        is_dollar: s,
        created_at: u,
        product_variant: Number.isInteger(d) ? d : null
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
    if (r.status !== l.OK) throw new b(m(), r.status)
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
    if (o.status === l.BAD_REQUEST) {
      const a = await o.json(),
        i = (a == null ? void 0 : a.error) ?? "";
      throw i === "invalid_name" ? new b(wr(), l.BAD_REQUEST) : new b(typeof i == "string" && i ? i : m(), l.BAD_REQUEST)
    }
    if (o.status !== l.OK) throw new b(m(), o.status)
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
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "email_required" || a === "invalid_email" ? new b(i_(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
    }
    if (r.status === l.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const i = new b(typeof(o == null ? void 0 : o.userId) == "number" ? qd({
          userId: o.userId
        }) : xd(), l.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (i.userId = o.userId), i
      }
      throw new b(m(), l.CONFLICT)
    }
    if (r.status === l.NOT_FOUND) throw new b("User not found.", l.NOT_FOUND);
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
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
    if (e.status !== l.OK) throw new b(m(), e.status)
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
    if (a.status !== l.OK) throw new b(m(), a.status);
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
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (o.status !== l.OK) throw new b(m(), o.status);
    const a = await o.json();
    return a == null ? void 0 : a.translation
  }
  mapTicketsToReportRows(t, e) {
    var o, a, i, s, u;
    const r = [];
    for (const c of t) {
      const d = c.status ?? "open";
      if (e === "received") {
        for (const p of c.reports) r.push({
          id: String(p.id),
          ticketId: String(c.id),
          createdAt: p.createdAt ?? c.createdAt,
          byUser: {
            id: Number(p.reportedBy),
            name: String(p.reportedByName ?? p.reportedBy),
            picture: p.reportedByPicture ?? null
          },
          reason: String(p.reason),
          status: d
        });
        continue
      }
      if (e === "sent") {
        for (const p of c.reports) r.push({
          id: String(p.id),
          ticketId: String(c.id),
          createdAt: p.createdAt ?? c.createdAt,
          toUser: {
            id: Number(c.reportedUser.id),
            name: String(c.reportedUser.name),
            picture: c.reportedUser.picture ?? null
          },
          reason: String(p.reason),
          status: d
        });
        continue
      }
      r.push({
        id: String(c.id),
        ticketId: String(c.id),
        createdAt: c.createdAt,
        handledBy: c.status && c.status !== "open" ? {
          id: ((o = c.handledBy) == null ? void 0 : o.id) ?? 0,
          name: ((a = c.handledBy) == null ? void 0 : a.name) ?? "Moderator",
          picture: ((i = c.handledBy) == null ? void 0 : i.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((u = (s = c.reports) == null ? void 0 : s[0]) == null ? void 0 : u.reason) ?? "other"),
        status: d
      })
    }
    return r.sort((c, d) => new Date(d.createdAt).getTime() - new Date(c.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== l.NO_CONTENT) throw new b(m(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
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
    if (o.status !== l.OK) throw new b(m(), o.status)
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
    if (o.status !== l.OK) throw new b(m(), o.status)
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
    if (o.status !== l.OK) throw new b(m(), o.status)
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
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
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
      })).status !== l.OK) throw new Error(m())
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
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async submitBanAppeal(t) {
    const e = JSON.stringify({
        message: t
      }),
      r = await gt.getHeaders(e),
      o = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (o.status === l.FORBIDDEN) {
      const a = await o.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await fr(a.tier)) return this.submitBanAppeal(t);
        throw new b(An(), o.status)
      }
    }
    if (o.status !== l.OK && o.status !== l.ALREADY_REPORTED) throw new b(m(), o.status);
    return o.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
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
    if (r.status !== l.OK) throw new b(m(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
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
    if (t.status !== l.OK) throw new b(m(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
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
    if (o.status !== l.OK) throw new b(m(), o.status);
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
    if (e.status !== l.OK) throw new b(m(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== l.OK) throw new b(m(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Rn()
      }
    });
    if (!r.ok) throw r.status === 500 ? new b(m(), r.status) : new b(Ip(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < cE.length,
      o = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= uE.tools.wayback.limit,
      a = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      i = t.cursorTs !== void 0,
      s = t.cursorUserId !== void 0,
      u = t.cursorAllianceId !== void 0,
      c = t.cursorPixelsCount !== void 0,
      d = i || s || u || c,
      p = i && s && u && c;
    let f = !0;
    return d && (f = p && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !o || !a || !e || !f)
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
    if (a.status === l.FORBIDDEN) throw new Error("Access denied");
    if (a.status !== l.OK) throw new Error("Failed to fetch wayback events");
    return a.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === l.NOT_FOUND) throw new Error(hr());
    if (e.status === l.FORBIDDEN) throw new Error(Tr());
    if (e.status === l.CONFLICT) throw new Error(Er());
    if (e.status !== l.OK) throw new Error(m())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== l.OK) throw new b(m(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (r.status !== l.OK) throw new b(m(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== l.OK) throw new b(m(), e.status)
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
    if (r.status !== l.OK) throw new b(m(), r.status);
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
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
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
Mt = new WeakMap, Bt = new WeakMap;

function _E(n) {
  var f, _;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const g of n)
    if (g.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = Ln.seasons) == null ? void 0 : f[t];
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
    c = i - o + 1,
    d = s - a + 1;
  if (!Number.isFinite(c) || !Number.isFinite(d) || c <= 0 || d <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const p = new Uint8ClampedArray(c * d * 4);
  for (const {
      x: g,
      y: h,
      colorIdx: w
    }
    of u) {
    const N = (_ = Ln.colors) == null ? void 0 : _[w];
    if (!N) throw new Error(`Unknown palette color index: ${w}`);
    const T = g - o,
      S = ((h - a) * c + T) * 4,
      [I, A, y] = N.rgb;
    p[S] = I, p[S + 1] = A, p[S + 2] = y, p[S + 3] = w === 0 ? 1 : 255
  }
  return {
    data: p,
    width: c,
    height: d,
    offsetX: o,
    offsetY: a,
    season: t
  }
}
async function fE(n) {
  const t = pE(n.width, n.height),
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

function pE(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let Ve = new dE(Hn);
typeof window < "u" && ho(() => {
  let n = Ve.online;
  go(() => {
    const t = Ve.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const uT = n => new URL(n, Hn).toString();

function io(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function mE(n, t) {
  for (const e of t)
    if (io(n, e)) return !0;
  return !1
}

function lT(...n) {
  return n.filter(Boolean).join(" ")
}
const hE = typeof document < "u";
let Dr = 0;
var Ht, Ut, Ft;
class gE {
  constructor() {
    Z(this, Ht, fe(sn([])));
    Z(this, Ut, fe(sn([])));
    Z(this, Ft, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    $(this, "addToast", t => {
      hE && this.toasts.unshift(t)
    });
    $(this, "updateToast", ({
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
    $(this, "create", t => {
      var s;
      const {
        message: e,
        ...r
      } = t, o = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : Dr++, a = t.dismissable === void 0 ? !0 : t.dismissable, i = t.type === void 0 ? "default" : t.type;
      return $n(() => {
        this.toasts.find(c => c.id === o) ? this.updateToast({
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
    $(this, "dismiss", t => ($n(() => {
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
    $(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = M(this, Ft).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    $(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    $(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    $(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    $(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    $(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    $(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    $(this, "promise", (t, e) => {
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
          const s = wE(i);
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
    $(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || Dr++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    $(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    $(this, "setHeight", t => {
      const e = M(this, Ft).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    $(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return re(M(this, Ht))
  }
  set toasts(t) {
    oe(M(this, Ht), t, !0)
  }
  get heights() {
    return re(M(this, Ut))
  }
  set heights(t) {
    oe(M(this, Ut), t, !0)
  }
}
Ht = new WeakMap, Ut = new WeakMap, Ft = new WeakMap;

function wE(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const De = new gE;

function yE(n, t) {
  return De.create({
    message: n,
    ...t
  })
}
var fn;
class dT {
  constructor() {
    Z(this, fn, mt(() => De.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return re(M(this, fn))
  }
}
fn = new WeakMap;
const bE = yE,
  vE = Object.assign(bE, {
    success: De.success,
    info: De.info,
    warning: De.warning,
    error: De.error,
    custom: De.custom,
    message: De.message,
    promise: De.promise,
    dismiss: De.dismiss,
    loading: De.loading,
    getActiveToasts: () => De.toasts.filter(n => !n.dismiss)
  });
var jt, Gt, Wt, Vt, zt, $t, qt, Kt;
class EE {
  constructor() {
    $(this, "channel", new BroadcastChannel("user-channel"));
    Z(this, jt, fe());
    Z(this, Gt, fe(!0));
    Z(this, Wt, fe());
    Z(this, Vt, fe(Date.now()));
    Z(this, zt, mt(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((eo.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    Z(this, $t, mt(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    Z(this, qt, mt(() => {
      var t;
      return new qa(Lr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    Z(this, Kt, mt(() => {
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
    return re(M(this, jt))
  }
  set data(t) {
    oe(M(this, jt), t, !0)
  }
  get loading() {
    return re(M(this, Gt))
  }
  set loading(t) {
    oe(M(this, Gt), t, !0)
  }
  get notificationCount() {
    return re(M(this, Wt))
  }
  set notificationCount(t) {
    oe(M(this, Wt), t, !0)
  }
  get lastFetch() {
    return re(M(this, Vt))
  }
  set lastFetch(t) {
    oe(M(this, Vt), t)
  }
  get charges() {
    return re(M(this, zt))
  }
  set charges(t) {
    oe(M(this, zt), t)
  }
  get cooldown() {
    return re(M(this, $t))
  }
  set cooldown(t) {
    oe(M(this, $t), t)
  }
  get flagsBitmap() {
    return re(M(this, qt))
  }
  set flagsBitmap(t) {
    oe(M(this, qt), t)
  }
  get timeoutUntil() {
    return re(M(this, Kt))
  }
  set timeoutUntil(t) {
    oe(M(this, Kt), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await Ve.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && Ve.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (qo("userId", {
        id: this.data.id
      }), gt.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), vE.warning(xg(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await Ve.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return io((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return mE((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
jt = new WeakMap, Gt = new WeakMap, Wt = new WeakMap, Vt = new WeakMap, zt = new WeakMap, $t = new WeakMap, qt = new WeakMap, Kt = new WeakMap;
const st = new EE;
let K;
const Me = new Array(128).fill(void 0);
Me.push(void 0, null, !0, !1);

function G(n) {
  return Me[n]
}
let vt = Me.length;

function te(n) {
  vt === Me.length && Me.push(Me.length + 1);
  const t = vt;
  return vt = Me[t], Me[t] = n, t
}

function Ue(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    K.__wbindgen_export_0(te(e))
  }
}

function Je(n) {
  return n == null
}
const so = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && so.decode();
let ht = null;

function rn() {
  return (ht === null || ht.byteLength === 0) && (ht = new Uint8Array(K.memory.buffer)), ht
}

function on(n, t) {
  return n = n >>> 0, so.decode(rn().subarray(n, n + t))
}

function TE(n) {
  n < 132 || (Me[n] = vt, vt = n)
}

function Ir(n) {
  const t = G(n);
  return TE(n), t
}
let Qe = null;

function dn() {
  return (Qe === null || Qe.buffer.detached === !0 || Qe.buffer.detached === void 0 && Qe.buffer !== K.memory.buffer) && (Qe = new DataView(K.memory.buffer)), Qe
}
let tt = 0;
const an = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  SE = typeof an.encodeInto == "function" ? function(n, t) {
    return an.encodeInto(n, t)
  } : function(n, t) {
    const e = an.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Xt(n, t, e) {
  if (e === void 0) {
    const s = an.encode(n),
      u = t(s.length, 1) >>> 0;
    return rn().subarray(u, u + s.length).set(s), tt = s.length, u
  }
  let r = n.length,
    o = t(r, 1) >>> 0;
  const a = rn();
  let i = 0;
  for (; i < r; i++) {
    const s = n.charCodeAt(i);
    if (s > 127) break;
    a[o + i] = s
  }
  if (i !== r) {
    i !== 0 && (n = n.slice(i)), o = e(o, r, r = i + n.length * 3, 1) >>> 0;
    const s = rn().subarray(o + i, o + r),
      u = SE(n, s);
    i += u.written, o = e(o, r, i, 1) >>> 0
  }
  return tt = i, o
}

function AE(n) {
  const t = Xt(n, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_fingerprint_v2(t, e)
}

function OE(n) {
  let t, e;
  try {
    const a = K.__wbindgen_add_to_stack_pointer(-16),
      i = Xt(n, K.__wbindgen_export_1, K.__wbindgen_export_2),
      s = tt;
    K.get_pawtected_endpoint_payload(a, i, s);
    var r = dn().getInt32(a + 0, !0),
      o = dn().getInt32(a + 4, !0);
    return t = r, e = o, on(r, o)
  } finally {
    K.__wbindgen_add_to_stack_pointer(16), K.__wbindgen_export_3(t, e, 1)
  }
}

function RE(n) {
  K.set_automated_browser(n)
}

function On(n) {
  K.set_user_id(n)
}

function DE(n) {
  K.set_automated_clicks(n)
}

function IE(n) {
  const t = Xt(n, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_detected_bot(t, e)
}

function NE(n) {
  const t = Xt(n, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.request_url(t, e)
}

function CE(n) {
  K.set_cf_likely_automated(n)
}

function kE(n) {
  const t = Xt(n, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = tt;
  K.set_fingerprint(t, e)
}
async function PE(n, t) {
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

function xE() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = G(t).buffer;
    return te(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return Ue(function(t, e) {
      const r = G(t).call(G(e));
      return te(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return Ue(function(t, e, r) {
      const o = G(t).call(G(e), G(r));
      return te(o)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = G(t).crypto;
    return te(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = G(t).document;
    return Je(e) ? 0 : te(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return Ue(function(t, e) {
      G(t).getRandomValues(G(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return Ue(function(t, e) {
      const r = Reflect.get(G(t), G(e));
      return te(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return Ue(function(t) {
      return G(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return Ue(function(t) {
      const e = G(t).innerWidth;
      return te(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = G(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = G(t).msCrypto;
    return te(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = G(t).navigator;
    return te(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(G(t));
    return te(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(on(t, e));
    return te(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const o = new Uint8Array(G(t), e >>> 0, r >>> 0);
    return te(o)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return te(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = G(t).node;
    return te(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = G(t).process;
    return te(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return Ue(function(t, e) {
      G(t).randomFillSync(Ir(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return Ue(function() {
      const t = module.require;
      return te(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    G(t).set(G(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return Je(t) ? 0 : te(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return Je(t) ? 0 : te(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return Je(t) ? 0 : te(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return Je(t) ? 0 : te(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const o = G(t).subarray(e >>> 0, r >>> 0);
    return te(o)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = G(t).versions;
    return te(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = G(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof G(t) == "function"
  }, n.wbg.__wbindgen_is_null = function(t) {
    return G(t) === null
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = G(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof G(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return G(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = K.memory;
    return te(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = G(e),
      o = typeof r == "number" ? r : void 0;
    dn().setFloat64(t + 8, Je(o) ? 0 : o, !0), dn().setInt32(t + 0, !Je(o), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = G(t);
    return te(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Ir(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = on(t, e);
    return te(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(on(t, e))
  }, n
}

function LE(n, t) {
  return K = n.exports, co.__wbindgen_wasm_module = t, Qe = null, ht = null, K
}
async function co(n) {
  if (K !== void 0) return K;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = xE();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await PE(await n, t);
  return LE(e, r)
}
class ME {
  constructor() {
    $(this, "interval");
    $(this, "storagesEmpty", !1);
    $(this, "storages", [new _n, new Mn, new Bn, new HE]);
    $(this, "pawtectLoaded");
    $(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!st.data || this.storagesEmpty || localStorage.getItem(_n.KEY))) {
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
    const e = Ge.day;
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
        await co(Ko), (t = st.data) != null && t.id && On(st.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: BE((r, o) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && NE(a), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, $o(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), On(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), CE(t)
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
    if (!await this.loadPawtect()) throw new Error(L1());
    const r = navigator.webdriver,
      [o, a, i] = await Promise.all([Rn(), Ts(), za().catch(s => (console.error(s), {
        bot: !1
      }))]);
    return On(st.data.id), kE(o), AE(a), RE(r), DE(eo.automatedClicks), i.bot && IE(i.botKind ?? "unknown"), OE(t)
  }
}

function BE(n) {
  return n.bind().bind()
}
const Fe = class Fe {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) r[o] = t[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(Fe.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), o => o.charCodeAt(0)),
        r = new TextDecoder().decode(Fe.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = Fe.codec(e);
    localStorage.setItem(Fe.KEY, btoa(String.fromCharCode(...r)))
  }
};
$(Fe, "KEY", "ui_layout_v3"), $(Fe, "XOR_KEY", "wplace-prefs");
let _n = Fe;
const je = class je {
  get() {
    try {
      const t = sessionStorage.getItem(je.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const o = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(o - je.SHIFT & 65535)
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
    const t = document.cookie.match(new RegExp("(?:^|; )" + Ze.KEY + "=([^;]*)"));
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
    document.cookie = `${Ze.KEY}=${encodeURIComponent(e)};path=/;max-age=${Ze.MAX_AGE};SameSite=Lax`
  }
};
$(Ze, "KEY", "_pf_uid"), $(Ze, "MAX_AGE", 3600 * 24 * 365);
let Bn = Ze;
class HE {
  constructor() {
    $(this, "packed")
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
const gt = new ME;
export {
  cT as $, Ts as A, uE as B, ao as C, i_ as D, fr as E, An as F, WE as G, hp as H, Vf as I, vd as J, ru as K, cg as L, wf as M, VE as N, zE as O, aT as P, sT as Q, JE as R, iT as S, Ge as T, L1 as U, Hb as V, uT as W, nT as X, ZE as Y, rT as Z, tT as _, Ve as a, oT as a0, Ip as a1, Ln as b, m as c, QE as d, cd as e, Vc as f, of as g, Cf as h, rp as i, eo as j, U0 as k, De as l, Xh as m, lT as n, dT as o, YE as p, XE as q, Ae as r, eT as s, vE as t, st as u, qE as v, $E as w, KE as x, gt as y, $a as z
};