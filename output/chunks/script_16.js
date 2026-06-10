var co = Object.defineProperty;
var jn = n => {
  throw TypeError(n)
};
var uo = (n, t, e) => t in n ? co(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var G = (n, t, e) => uo(n, typeof t != "symbol" ? t + "" : t, e),
  lo = (n, t, e) => t.has(n) || jn("Cannot " + e);
var x = (n, t, e) => (lo(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  Y = (n, t, e) => t.has(n) ? jn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  f as _o,
  h as fo,
  P as Pn,
  g as En
} from "./BhCN-OTB.js";
import {
  e as ce,
  i as ee,
  h as ne,
  g as tn,
  bM as po,
  I as mo,
  L as Gn,
  u as _t
} from "./Dbe4PVAU.js";
import {
  g as O
} from "./BhCkpOlh.js";
const it = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Le = globalThis,
  mt = "10.40.0";

function xn() {
  return Ln(Le), Le
}

function Ln(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || mt, t[mt] = t[mt] || {}
}

function Mn(n, t, e = Le) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    o = r[mt] = r[mt] || {};
  return o[n] || (o[n] = t())
}
const ho = "Sentry Logger ",
  Wn = {};

function go(n) {
  if (!("console" in Le)) return n();
  const t = Le.console,
    e = {},
    r = Object.keys(Wn);
  r.forEach(o => {
    const a = Wn[o];
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

function wo() {
  Hn().enabled = !0
}

function yo() {
  Hn().enabled = !1
}

function Or() {
  return Hn().enabled
}

function bo(...n) {
  Bn("log", ...n)
}

function vo(...n) {
  Bn("warn", ...n)
}

function Eo(...n) {
  Bn("error", ...n)
}

function Bn(n, ...t) {
  it && Or() && go(() => {
    Le.console[n](`${ho}[${n}]:`, ...t)
  })
}

function Hn() {
  return it ? Mn("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Xt = {
    enable: wo,
    disable: yo,
    isEnabled: Or,
    log: bo,
    warn: vo,
    error: Eo
  },
  To = Object.prototype.toString;

function So(n, t) {
  return To.call(n) === `[object ${t}]`
}

function Ao(n) {
  return So(n, "Object")
}

function Oo(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Ro(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    it && Xt.log(`Failed to add non-enumerable property "${t}" to object`, n)
  }
}
let tt;

function un(n) {
  if (tt !== void 0) return tt ? tt(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = Le;
  return t in e && typeof e[t] == "function" ? (tt = e[t], tt(n)) : (tt = null, n())
}

function Tn() {
  return un(() => Math.random())
}

function Do() {
  return un(() => Date.now())
}

function Io(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function No() {
  const n = Le;
  return n.crypto || n.msCrypto
}
let pn;

function Co() {
  return Tn() * 16
}

function ht(n = No()) {
  try {
    if (n != null && n.randomUUID) return un(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return pn || (pn = "10000000100040008000" + 1e11), pn.replace(/[018]/g, t => (t ^ (Co() & 15) >> t / 4).toString(16))
}
const Rr = 1e3;

function Dr() {
  return Do() / Rr
}

function ko() {
  const {
    performance: n
  } = Le;
  if (!(n != null && n.now) || !n.timeOrigin) return Dr;
  const t = n.timeOrigin;
  return () => (t + un(() => n.now())) / Rr
}
let Vn;

function Po() {
  return (Vn ?? (Vn = ko()))()
}

function xo(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Po(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : ht()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function Ir(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = Ir(r[o], t[o], e - 1));
  return r
}

function zn() {
  return ht()
}
const Sn = "_sentrySpan";

function $n(n, t) {
  t ? Ro(n, Sn, t) : delete n[Sn]
}

function qn(n) {
  return n[Sn]
}
const Lo = 100;
class Je {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: zn(),
      sampleRand: Tn()
    }
  }
  clone() {
    const t = new Je;
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, $n(t, qn(this)), t
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
    }, this._session && xo(this._session, {
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
      r = e instanceof Je ? e.getScopeData() : Ao(e) ? t : void 0,
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
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, $n(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: zn(),
      sampleRand: Tn()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var a;
    const r = typeof e == "number" ? e : Lo;
    if (r <= 0) return this;
    const o = {
      timestamp: Dr(),
      ...t,
      message: t.message ? Io(t.message, 2048) : t.message
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
      span: qn(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Ir(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || ht();
    if (!this._client) return it && Xt.warn("No client configured on scope - will not capture exception!"), r;
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
    if (!this._client) return it && Xt.warn("No client configured on scope - will not capture message!"), o;
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
    }, this), r) : (it && Xt.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function Mo() {
  return Mn("defaultCurrentScope", () => new Je)
}

function Bo() {
  return Mn("defaultIsolationScope", () => new Je)
}
class Ho {
  constructor(t, e) {
    let r;
    t ? r = t : r = new Je;
    let o;
    e ? o = e : o = new Je, this._stack = [{
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
    return Oo(r) ? r.then(o => (this._popScope(), o), o => {
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

function ut() {
  const n = xn(),
    t = Ln(n);
  return t.stack = t.stack || new Ho(Mo(), Bo())
}

function Uo(n) {
  return ut().withScope(n)
}

function Fo(n, t) {
  const e = ut();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function Kn(n) {
  return ut().withScope(() => n(ut().getIsolationScope()))
}

function jo() {
  return {
    withIsolationScope: Kn,
    withScope: Uo,
    withSetScope: Fo,
    withSetIsolationScope: (n, t) => Kn(t),
    getCurrentScope: () => ut().getScope(),
    getIsolationScope: () => ut().getIsolationScope()
  }
}

function Nr(n) {
  const t = Ln(n);
  return t.acs ? t.acs : jo()
}

function Go() {
  const n = xn();
  return Nr(n).getCurrentScope()
}

function Wo() {
  const n = xn();
  return Nr(n).getIsolationScope()
}

function Vo(n, t) {
  return Go().captureException(n, void 0)
}

function zo(n, t) {
  Wo().setContext(n, t)
}
const $o = "" + new URL("../assets/pawtect_wasm_bg.CyqdkIlW.wasm", import.meta.url).href;
var qo = "2.0.0";
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
class X extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, X.prototype)
  }
}

function Ko(n, t) {
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
async function Xo(n) {
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
      a instanceof X ? t[r] = {
        state: a.state,
        error: `${a.name}: ${a.message}`
      } : t[r] = {
        state: -3,
        error: a instanceof Error ? `${a.name}: ${a.message}` : String(a)
      }
    }
  })), t
}

function Yo({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return U.HeadlessChrome;
  if (/electron/i.test(n.value)) return U.Electron;
  if (/slimerjs/i.test(n.value)) return U.SlimerJS
}

function Yt(n, t) {
  return n.indexOf(t) !== -1
}

function ke(n, t) {
  return n.indexOf(t) !== -1
}

function Jo(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function Xn(n) {
  return Object.getOwnPropertyNames(n)
}

function An(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (Yt(n, e)) return !0
    } else if (Jo(n, o => e.test(o)) != null) return !0;
  return !1
}

function st(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function Qo({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (An(n.value, "selenium", "webdriver", "driver")) return U.Selenium
}

function Zo({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return U.PhantomJS
}

function ea({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !Yt(["webkit", "gecko"], e.value) || r === 39 && !Yt(["internet_explorer"], t.value) || r === 33 && !Yt(["chromium"], e.value)
}

function ta({
  functionBind: n
}) {
  if (n.state === -2) return U.PhantomJS
}

function na({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return U.HeadlessChrome
}

function ra({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return U.Unknown
}

function oa({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return U.HeadlessChrome
}

function aa({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return U.HeadlessChrome
}

function ia({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return U.HeadlessChrome
}

function sa({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return U.Electron
}

function ca({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return U.Unknown
}

function ua({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return U.PhantomJS;
  if (/Headless/i.test(n.value)) return U.HeadlessChrome;
  if (/Electron/i.test(n.value)) return U.Electron;
  if (/slimerjs/i.test(n.value)) return U.SlimerJS
}

function la({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return U.HeadlessChrome
}

function da({
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

function _a({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return U.Sequentum
}

function fa({
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

function pa({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const ma = {
  detectAppVersion: Yo,
  detectDocumentAttributes: Qo,
  detectErrorTrace: Zo,
  detectEvalLengthInconsistency: ea,
  detectFunctionBind: ta,
  detectLanguagesLengthInconsistency: na,
  detectNotificationPermissions: oa,
  detectPluginsArray: aa,
  detectPluginsLengthInconsistency: ia,
  detectProcess: sa,
  detectUserAgent: ua,
  detectWebDriver: la,
  detectWebGL: da,
  detectWindowExternal: _a,
  detectWindowSize: fa,
  detectMimeTypesConsistent: ra,
  detectProductSub: ca,
  detectDistinctiveProperties: pa
};

function ha() {
  const n = navigator.appVersion;
  if (n == null) throw new X(-1, "navigator.appVersion is undefined");
  return n
}

function ga() {
  if (document.documentElement === void 0) throw new X(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new X(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function wa() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new X(-3, "errorTrace signal unexpected behaviour")
}

function ya() {
  return eval.toString().length
}

function ba() {
  if (Function.prototype.bind === void 0) throw new X(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Un() {
  var n, t;
  const e = window,
    r = navigator;
  return st(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : st(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : st(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function va() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return ke(t, "edg/") ? "edge" : ke(t, "trident") || ke(t, "msie") ? "internet_explorer" : ke(t, "wechat") ? "wechat" : ke(t, "firefox") ? "firefox" : ke(t, "opera") || ke(t, "opr") ? "opera" : ke(t, "chrome") ? "chrome" : ke(t, "safari") ? "safari" : "unknown"
}

function Ea() {
  const n = Un(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    o = navigator,
    a = "connection";
  return t ? st([!("SharedWorker" in r), o[a] && "ontypechange" in o[a], !("sinkId" in new Audio)]) >= 2 : e ? st(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function Ta() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Sa() {
  const n = window;
  return st([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Aa() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) Un() === "chromium" && Sa() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Oa() {
  if (navigator.mimeTypes === void 0) throw new X(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function Ra() {
  if (window.Notification === void 0) throw new X(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new X(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new X(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new X(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Da() {
  if (navigator.plugins === void 0) throw new X(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new X(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Ia() {
  if (navigator.plugins === void 0) throw new X(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new X(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Na() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new X(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new X(-3, `${t} not an object`);
  return n
}

function Ca() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new X(-1, "navigator.productSub is undefined");
  return n
}

function ka() {
  if (navigator.connection === void 0) throw new X(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new X(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Pa() {
  return navigator.userAgent
}

function xa() {
  if (navigator.webdriver == null) throw new X(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function La() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new X(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new X(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new X(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function Ma() {
  if (window.external === void 0) throw new X(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new X(-2, "window.external.toString is not a function");
  return n.toString()
}

function Ba() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Ha() {
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
    r = Xn(window);
  let o = [];
  window.document !== void 0 && (o = Xn(window.document));
  for (t in n) {
    const a = n[t];
    if (a !== void 0) {
      const i = a.window === void 0 ? !1 : An(r, ...a.window),
        s = a.document === void 0 || !o.length ? !1 : An(o, ...a.document);
      e[t] = i || s
    }
  }
  return e
}
const Ua = {
  android: Ea,
  browserKind: va,
  browserEngineKind: Un,
  documentFocus: Ta,
  userAgent: Pa,
  appVersion: ha,
  rtt: ka,
  windowSize: Ba,
  pluginsLength: Ia,
  pluginsArray: Da,
  errorTrace: wa,
  productSub: Ca,
  windowExternal: Ma,
  mimeTypesConsistent: Oa,
  evalLength: ya,
  webGL: La,
  webDriver: xa,
  languages: Aa,
  notificationPermissions: Ra,
  documentElementKeys: ga,
  functionBind: ba,
  process: Na,
  distinctiveProps: Ha
};
class Fa {
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
    const [t, e] = Ko(this.components, ma);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await Xo(Ua), this.components
  }
}

function ja() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${qo}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Ga({
  monitoring: n = !0
} = {}) {
  n && ja();
  const t = new Fa;
  return await t.collect(), t
}
let mn = null;
async function Wa() {
  return await Va() ? {
    bot: !1
  } : (await za()).detect()
}
async function Va() {
  var e;
  const n = navigator;
  if (!((e = n.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function za() {
  return mn || (mn = Ga({
    monitoring: !1
  })), mn
}

function Cr(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function kr(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class $a {
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

function GE(n) {
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

function WE(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${kr(new Uint8Array(e))}`)
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

function VE(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    o = e.indexOf(";base64"),
    a = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const i = Cr(r),
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
  return kr(new Uint8Array(r))
}
const q = Math,
  ve = () => 0;

function qa() {
  const n = q.acos || ve,
    t = q.acosh || ve,
    e = q.asin || ve,
    r = q.asinh || ve,
    o = q.atanh || ve,
    a = q.atan || ve,
    i = q.sin || ve,
    s = q.sinh || ve,
    u = q.cos || ve,
    _ = q.cosh || ve,
    l = q.tan || ve,
    p = q.tanh || ve,
    f = q.exp || ve,
    d = q.expm1 || ve,
    g = q.log1p || ve,
    h = v => q.pow(q.PI, v),
    w = v => q.log(v + q.sqrt(v * v - 1)),
    C = v => q.log(v + q.sqrt(v * v + 1)),
    T = v => q.log((1 + v) / (1 - v)) / 2,
    R = v => q.exp(v) - 1 / q.exp(v) / 2,
    S = v => (q.exp(v) + 1 / q.exp(v)) / 2,
    N = v => q.exp(v) - 1,
    A = v => (q.exp(2 * v) - 1) / (q.exp(2 * v) + 1),
    y = v => q.log(1 + v);
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: w(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: C(1),
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
    tanhPf: A(1),
    exp: f(1),
    expm1: d(1),
    expm1Pf: N(1),
    log1p: g(10),
    log1pPf: y(10),
    powPI: h(-100)
  }
}
const Ka = () => {
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
  Pr = Ka(),
  {
    captureError: re
  } = Pr,
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
  Xa = () => ({
    data: Pr.getErrors()
  });
var Oe = (n => (n.WINDOWS = "Windows", n.LINUX = "Linux", n.APPLE = "Apple", n.OTHER = "Other", n))(Oe || {});
const xr = !globalThis.document && globalThis.WorkerGlobalScope;

function Ya() {
  const n = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (t) {
    return (t instanceof Error ? t.message : String(t)).length + (n + "").split(n.name).join("").length
  }
}
const ln = Ya(),
  ue = ln == 80,
  yt = ln == 58,
  bt = ln == 77,
  Yn = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [ln] || null,
  Lr = ue && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function Mr() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function Ja() {
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
const On = n => /windows phone/ig.test(n) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/ig.test(n) ? "Windows" : /android/ig.test(n) ? "Android" : /cros/ig.test(n) ? "Chrome OS" : /linux/ig.test(n) ? "Linux" : /ipad/ig.test(n) ? "iPad" : /iphone/ig.test(n) ? "iPhone" : /ipod/ig.test(n) ? "iPod" : /ios/ig.test(n) ? "iOS" : /mac/ig.test(n) ? "Mac" : "Other";

function Br(n, t) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(n) ? Oe.WINDOWS : /android|linux|cros/ig.test(n) ? Oe.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? Oe.APPLE : Oe.OTHER;
  if (!t) return [e];
  const r = /win/ig.test(t) ? Oe.WINDOWS : /android|arm|linux/ig.test(t) ? Oe.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? Oe.APPLE : Oe.OTHER;
  return [e, r]
}
const {
  userAgent: Qa,
  platform: Za
} = globalThis.navigator || {}, [nn, Jn] = Br(Qa, Za), Hr = ({
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
}, Ur = ({
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
    C = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i,
    T = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
    R = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
    S = (N, A) => N.filter(y => A.test(y)).length;
  if (n = n.trim().replace(/\s{2,}/, " ").replace(e, ""), r.test(n)) {
    const N = n.match(r);
    if (!N) return "unknown";
    const y = N[0].slice(1, -1).replace(/,/g, ";").split(";").map(v => v.trim());
    if (S(y, o)) return y.map(v => s.test(v) ? s.exec(v)[0].replace("-", " ") : v).filter(v => !a.test(v)).join(" ").replace(t ? i : "", "").trim().replace(/\s{2,}/, " ");
    if (S(y, u)) return y.filter(v => !_.test(v)).join(" ").replace(/\sNT (\d+\.\d+)/, (v, E) => E == "10.0" ? " 10" : E == "6.3" ? " 8.1" : E == "6.2" ? " 8" : E == "6.1" ? " 7" : E == "6.0" ? " Vista" : E == "5.2" ? " XP Pro" : E == "5.1" ? " XP" : E == "5.0" ? " 2000" : E == "4.0" ? v : " " + E).replace(l, "(64-bit)").trim().replace(/\s{2,}/, " ");
    if (S(y, p)) return y.filter(v => !f.test(v)).join(" ").replace(t ? d : "", "").trim().replace(/\s{2,}/, " ");
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
          B = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(E) || [])[0] || "").replace(/\./g, "_"),
          L = /^10/.test(B) ? B : (/^\d{2,}/.exec(B) || [])[0],
          H = L ? D[L] : void 0;
        return H ? `macOS ${H}` : E
      }
      return v
    }).filter(v => !C.test(v)).join(" ").replace(/\slike mac.+/ig, "").trim().replace(/\s{2,}/, " ");
    {
      const v = y.filter(E => R.test(E));
      return v.length ? v.join(" ").trim().replace(/\s{2,}/, " ") : y.join(" ")
    }
  } else return "unknown"
}, Fr = n => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(n) || [])[1];
  return ue && !!e
}, ie = (n = 0) => new Promise(t => setTimeout(t, n)), jr = [
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
].map(n => String.fromCodePoint(...n)), Rn = `
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

function ei(n) {
  var r;
  if (!n) return null;
  const t = /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i;
  return /radeon/i.test(n) ? "AMD" : /geforce/i.test(n) ? "NVIDIA" : (((r = t.exec(n)) == null ? void 0 : r[0]) || "other").toLocaleUpperCase()
}
const Fe = {},
  Ce = {
    AUDIO: !1,
    CANVAS: !1,
    FONTS: !1,
    SCREEN: !1,
    TIME_ZONE: !1,
    WEBGL: !1
  };

function ti() {
  const n = {};
  return {
    getRecords: () => n,
    documentLie: (t, e) => {
      const r = e instanceof Array;
      return n[t] ? r ? n[t] = [...n[t], ...e] : n[t].push(e) : r ? n[t] = e : n[t] = [e]
    }
  }
}
const Gr = ti(),
  {
    documentLie: Z
  } = Gr,
  Wr = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function dn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function ni(n) {
  try {
    if (!ue) return n;
    const t = n.document.createElement("div");
    t.setAttribute("id", dn()), t.setAttribute("style", Wr), t.innerHTML = "<div><iframe></iframe></div>", n.document.body.appendChild(t);
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
const Qn = dn(),
  dt = "Reflect" in globalThis;

function ri(n) {
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
    return ri(r) ? t ? t(r) : !1 : !0
  } finally {
    e && e()
  }
}

function oi(n) {
  try {
    return n(), !1
  } catch {
    return !0
  }
}

function Zn(n) {
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
const ai = /at Function\.toString /,
  ii = /at Object\.toString/,
  si = /at (Function\.)?\[Symbol.hasInstance\]/,
  ci = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  er = /strict mode/;

function tr({
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
    "failed toString": !Zn(a)[n.Function.prototype.toString.call(t)] || !Zn("toString")[n.Function.prototype.toString.call(t.toString)],
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
      withStack: f => ue && !nt(f, ai)
    }) || pe({
      spawnErr: () => {
        Object.create(new Proxy(t, {})).toString()
      },
      withStack: f => ue && !nt(f, ii)
    }),
    "failed at incompatible proxy error": pe({
      spawnErr: () => {
        t.arguments, t.caller
      },
      withStack: f => yt && !nt(f, er, 0)
    }),
    "failed at toString incompatible proxy error": pe({
      spawnErr: () => {
        t.toString.arguments, t.toString.caller
      },
      withStack: f => yt && !nt(f, er, 0)
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
          throw Reflect.setPrototypeOf(t, Object.create(t)), Qn in t, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(t, s)
        }
      }),
      "failed at reflect set proto proxy": dt && !pe({
        spawnErr: () => {
          Reflect.setPrototypeOf(g, Object.create(g)), Qn in g
        },
        final: () => {
          Object.setPrototypeOf(g, s)
        }
      }),
      "failed at instanceof check error": ue && (pe({
        spawnErr: () => {
          t instanceof t
        },
        withStack: h => !nt(h, si)
      }) || pe({
        spawnErr: () => {
          const h = new Proxy(t, {});
          h instanceof h
        },
        withStack: h => !nt(h, ci)
      })),
      "failed at define properties": ue && dt && oi(() => {
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

function ui(n) {
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
              if (w = tr({
                  scope: n,
                  apiFunction: h[l],
                  proto: h,
                  obj: null,
                  lieProps: e
                }), w.lied) {
                Z(d, w.lieTypes), e[d] = w.lieTypes;
                return
              }
              return
            }
            if (l != "name" && l != "length" && l[0] !== l[0].toUpperCase()) {
              const S = ["failed descriptor.value undefined"];
              Z(d, S), e[d] = S;
              return
            }
          } catch {}
          const T = Object.getOwnPropertyDescriptor(h, l).get;
          if (w = tr({
              scope: n,
              apiFunction: T,
              proto: h,
              obj: u,
              lieProps: e
            }), w.lied) {
            Z(d, w.lieTypes), e[d] = w.lieTypes;
            return
          }
          return
        } catch {
          const w = "failed prototype test execution";
          Z(d, w), e[d] = [w];
          return
        }
      })
    }
  }
}

function li() {
  const n = globalThis;
  if (xr) return {
    iframeWindow: n,
    div: void 0
  };
  try {
    const t = n.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      o = dn();
    r.setAttribute("id", o), e.appendChild(r), r.innerHTML = `<div style="${Wr}"><iframe></iframe></div>`, document.body.appendChild(e);
    const a = n[t];
    return {
      iframeWindow: ni(a) || n,
      div: r
    }
  } catch (t) {
    return re(t, "client blocked phantom iframe"), {
      iframeWindow: n,
      div: void 0
    }
  }
}

function di(n) {
  const t = ui(n),
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
const _i = n => n && n.filter(t => !/object toString|toString incompatible proxy/.test(t)).length;
let rn, ot, Vr = {},
  zr = {},
  nr = !1;

function _n() {
  if (nr) return;
  nr = !0;
  const {
    iframeWindow: n,
    div: t
  } = li() || {};
  rn = n, ot = t;
  const {
    lieDetector: e,
    lieDetail: r
  } = di(rn);
  if (!xr) {
    const o = e.getProps();
    Vr = Object.keys(o).reduce((a, i) => (a[i] = _i(o[i]), a), {}), zr = JSON.parse(JSON.stringify(r))
  }
}

function fn() {
  return _n(), rn
}

function $r() {
  return _n(), ot
}

function fi() {
  ot == null || ot.remove(), ot = void 0, rn = void 0
}

function Ge() {
  return _n(), Vr
}

function pi() {
  return _n(), zr
}
const mi = () => {
    const n = Gr.getRecords(),
      t = Object.keys(n).reduce((e, r) => (e += n[r].length, e), 0);
    return {
      data: n,
      totalLies: t
    }
  },
  hi = n => typeof n == "function",
  gi = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
  Jt = (n, {
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
        gi.test(h) && o.push(h)
      }
    });
    const u = [...!t && o.length < 3 ? [] : o, ...!t && e.length < 4 ? [] : e],
      _ = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return u.filter(l => !_.includes(l))
  };

function qr(n) {
  if (n) return ("" + n).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...t) => `${t[1]}${t[6][0]}${t[6].slice(1).replace(/\d/g,"0")}s`)
}
const wi = n => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + n).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  Kr = n => {
    if (!n) return;
    const t = wi(n),
      e = t.length,
      r = /\s{2,}|^\s|\s$/.test(n),
      o = /^ANGLE/.test(n) && !(/^ANGLE \((.+)\)/.exec(n) || [])[1],
      a = Jt(n, {
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
  yi = () => {
    const n = [];
    return {
      getBin: () => n,
      sendToTrash: (t, e, r = void 0) => {
        const a = hi(e) ? "proxy behavior detected" : e;
        return n.push({
          name: t,
          value: a
        }), r
      }
    }
  },
  Xr = yi(),
  {
    sendToTrash: ae
  } = Xr,
  bi = () => ({
    trashBin: Xr.getBin()
  });
async function vi() {
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

function Ei() {
  const n = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"],
    t = new Set;
  for (const e of n) try {
    const r = Intl[e];
    if (!r) continue;
    t.add(new r().resolvedOptions().locale)
  } catch {}
  return [...t].join(",")
}

function Ti(n) {
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

function Si() {
  try {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone ?? ""
  } catch {
    return ""
  }
}

function Ai() {
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
async function Oi(n) {
  const [t, e] = await Promise.all([vi(), Promise.resolve(Ai())]), r = navigator.deviceMemory, o = navigator.language, a = Ei(), {
    systemCurrencyLocale: i,
    engineCurrencyLocale: s
  } = Ti(o);
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
    timezoneLocation: Si(),
    webglRenderer: e.renderer,
    webglVendor: e.vendor,
    lies: {
      proto: {}
    }
  }
}

function Ri(n) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: n == null ? void 0 : n.name
  })
}

function Di(n) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: n == null ? void 0 : n.name
  })
}
async function Ii() {
  try {
    await ie();
    const n = P => {
        try {
          return P()
        } catch {
          return
        }
      },
      t = () => new Promise(P => {
        const L = n(() => new Ri);
        if (!L) return P(null);
        const H = setTimeout(() => {
          L.terminate(), P(null)
        }, 3e3);
        L.onerror = () => {
          clearTimeout(H), L.terminate(), P(null)
        }, L.onmessage = te => {
          clearTimeout(H), L.terminate(), P(te.data)
        }
      }),
      e = () => new Promise(P => {
        const L = n(() => new Di);
        if (!L) return P(null);
        const H = setTimeout(() => {
          L.port.close(), P(null)
        }, 3e3);
        L.port.start(), L.port.onmessage = te => {
          clearTimeout(H), L.port.close(), P(te.data)
        }
      }),
      r = P => (re(P), null),
      [o, a] = await Promise.all([e().catch(r), t().catch(r)]);
    let i = null,
      s = !1;
    if (a != null && a.userAgent ? i = a : (s = !0, i = await Oi("dedicated").catch(r) ?? null), !i || !i.userAgent) return;
    if (s && (i.lied = !0, i.lies.workerUnavailable = "dedicated worker did not respond; collected from main thread", Z("WorkerGlobalScope", i.lies.workerUnavailable)), o != null && o.userAgent && !s) {
      const P = [];
      o.userAgent !== i.userAgent && P.push("userAgent"), o.platform !== i.platform && P.push("platform"), o.hardwareConcurrency !== i.hardwareConcurrency && P.push("hardwareConcurrency"), o.deviceMemory !== i.deviceMemory && P.push("deviceMemory"), o.timezoneLocation !== i.timezoneLocation && P.push("timezoneLocation"), P.length && (i.lied = !0, i.lies.workerMismatch = `dedicated and shared worker disagree on: ${P.join(", ")}`, Z("WorkerGlobalScope", i.lies.workerMismatch))
    }
    i.system = On(i.userAgent), i.device = Ur({
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
    if (p != navigator.platform && Z("Navigator.platform", g), _ != navigator.userAgent && Z("Navigator.userAgent", g), d && d != navigator.hardwareConcurrency && Z("Navigator.hardwareConcurrency", g), f && f != navigator.deviceMemory && Z("Navigator.deviceMemory", g), i.lies.proto) {
      const {
        proto: P
      } = i.lies;
      Object.keys(P).forEach(H => {
        const te = `WorkerGlobalScope.${H}`;
        P[H].forEach(F => {
          Z(te, F)
        })
      })
    }
    const [h, w] = Br(_, p);
    h != w && (i.lied = !0, i.lies.os = `${w} platform and ${h} user agent do not match`, Z("WorkerGlobalScope", i.lies.os));
    const C = Hr({
        ua: _,
        os: u,
        isBrave: !1
      }),
      T = /safari/i.test(C) || /iphone|ipad/i.test(_) ? "JavaScriptCore" : /firefox/i.test(_) ? "SpiderMonkey" : /chrome/i.test(_) ? "V8" : void 0;
    T != Yn && (i.lied = !0, i.lies.engine = `${Yn} JS runtime and ${T} user agent do not match`, Z("WorkerGlobalScope", i.lies.engine));
    const R = P => (/\d+/.exec(P) || [])[0],
      S = R(C),
      N = R(l ? l.uaFullVersion ?? "" : ""),
      A = N && S,
      y = N == S;
    A && !y && (i.lied = !0, i.lies.version = `userAgentData version ${N} and user agent version ${S} do not match`, Z("WorkerGlobalScope", i.lies.version));
    const v = ue && CSS.supports("accent-color: initial");
    ((P, L) => {
      if (!/windows|mac/i.test(P) || !(L != null && L.platformVersion)) return !1;
      if (L.platform == "macOS") return v ? /_/.test(L.platformVersion) : !1;
      const H = (/windows ([\d|\.]+)/i.exec(P) || [])[1],
        te = +H == 10,
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
      const k = me.split(".");
      if (k.length != 3) return !0;
      const M = +k[0] > 0;
      return M && !te || !M && te
    })(i.device, l) && (i.lied = !0, i.lies.platformVersion = "platform version is fake", Z("WorkerGlobalScope", i.lies.platformVersion)), i.userAgentVersion = S, i.userAgentDataVersion = N, i.userAgentEngine = T;
    const B = {
      ...Kr(i.webglRenderer) || {},
      compressedGPU: qr(i.webglRenderer)
    };
    return {
      ...i,
      gpu: B,
      uaPostReduction: Fr(i.userAgent)
    }
  } catch (n) {
    re(n, "workers failed or blocked by client");
    return
  }
}
const rr = Math.random();
async function Ni() {
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
async function Ci() {
  var e, r, o;
  const n = [],
    t = a => {
      var i;
      try {
        (i = a == null ? void 0 : a.close) == null || i.call(a)
      } catch {}
    };
  try {
    await ie();
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
      Z("AnalyserNode.getFloatFrequencyData", V)
    }
    const C = {
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
      T = V => new Promise($ => {
        const Q = V.createAnalyser(),
          fe = V.createOscillator(),
          he = V.createDynamicsCompressor();
        try {
          fe.type = "triangle", fe.frequency.value = 1e4, he.threshold.value = -50, he.knee.value = 40, he.attack.value = 0
        } catch {}
        return fe.connect(he), he.connect(Q), he.connect(V.destination), fe.start(0), V.startRendering(), V.addEventListener("complete", ge => {
          var lt;
          try {
            he.disconnect(), fe.disconnect();
            const et = new Float32Array(Q.frequencyBinCount);
            (lt = Q.getFloatFrequencyData) == null || lt.call(Q, et);
            const qt = new Float32Array(Q.fftSize);
            return "getFloatTimeDomainData" in Q && Q.getFloatTimeDomainData(qt), $({
              floatFrequencyData: et,
              floatTimeDomainData: qt,
              buffer: ge.renderedBuffer,
              compressorGainReduction: he.reduction.value || he.reduction
            })
          } catch {
            return $(null)
          }
        })
      });
    await ie();
    const [R, S] = await Promise.all([T(l), Ni().catch(() => !1)]), {
      floatFrequencyData: N,
      floatTimeDomainData: A,
      buffer: y,
      compressorGainReduction: v
    } = R || {};
    await ie();
    const E = (V, $, Q) => {
        const fe = Math.min(Q, V.length),
          he = [];
        for (let ge = $; ge < fe; ge++) he.push(V[ge]);
        return he
      },
      D = V => {
        if (!V) return 0;
        let $ = 0;
        for (let Q = 0; Q < V.length; Q++) $ += Math.abs(V[Q]);
        return $
      },
      B = D(N),
      P = D(A),
      L = new Float32Array(_);
    let H = new Float32Array;
    y && ((r = y.copyFromChannel) == null || r.call(y, L, 0), H = ((o = y.getChannelData) == null ? void 0 : o.call(y, 0)) || []);
    const te = E(L, 4500, 4600),
      me = E(H, 4500, 4600),
      F = D(E(H, 4500, _));
    S && (u = !0, Z("AudioBuffer", "audio is fake"));
    const Ne = "" + me == "" + te,
      k = "copyFromChannel" in AudioBuffer.prototype;
    k && !Ne && (u = !0, Z("AudioBuffer", "getChannelData and copyFromChannel samples mismatch"));
    const M = new Set(H).size;
    if (M == _) {
      const V = `${M} unique samples of ${_} is too high`;
      ae("AudioBuffer", V)
    }
    const K = (V, $) => Math.floor(Math.random() * ($ - V + 1)) + V,
      oe = (V, $, Q) => {
        const {
          length: fe
        } = $, he = 20, ge = K(275, fe - (he + 1)), lt = ge + he / 2, et = ge + he;
        $.getChannelData(0)[ge] = V, $.getChannelData(0)[lt] = V, $.getChannelData(0)[et] = V, $.copyFromChannel(Q, 0);
        const qt = [$.getChannelData(0)[ge] === 0 ? Math.random() : 0, $.getChannelData(0)[lt] === 0 ? Math.random() : 0, $.getChannelData(0)[et] === 0 ? Math.random() : 0];
        return [...new Set([...$.getChannelData(0), ...Q, ...qt])].filter(so => so !== 0)
      },
      we = (V, $, Q) => {
        $.copyToChannel(Q.map(() => V), 0);
        const fe = $.getChannelData(0)[0];
        return [...$.getChannelData(0)].map(ge => ge !== fe || !ge ? Math.random() : ge).filter(ge => ge !== fe)
      };
    let Re = (() => {
      try {
        const $ = [...new Set([...oe(rr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...we(rr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3))])];
        return +($.length !== 1 && $.reduce((Q, fe) => Q += +fe, 0))
      } catch {
        return 0
      }
    })();
    if (!Re) {
      const V = Math.min(100, H.length),
        $ = new Set;
      for (let Q = 0; Q < V; Q++) {
        const fe = H[Q];
        $.has(fe) || ($.add(fe), Re += fe)
      }
    }
    const ao = {
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
    Re && (u = !0, Z("AudioBuffer", "sample noise detected"));
    const io = "" + [v, B, P],
      Fn = ao[io];
    return Fn && !Fn.includes(F) && (Ce.AUDIO = !0, ae("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: M,
      compressorGainReduction: v,
      floatFrequencyDataSum: B,
      floatTimeDomainDataSum: P,
      sampleSum: F,
      binsSample: me,
      copySample: k ? te : [void 0],
      values: C,
      noise: Re,
      baseLatency: ki(),
      lied: u
    }
  } catch (a) {
    re(a, "OfflineAudioContext failed or blocked by client");
    return
  } finally {
    n.forEach(t)
  }
}

function ki() {
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
const Pi = () => {
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
            A = ~~(Math.random() * 256),
            y = ~~(Math.random() * 256);
          p[d] = N, p[d + 1] = A, p[d + 2] = y, p[d + 3] = 255, d += 4, _.fillStyle = `rgba(${N}, ${A}, ${y}, 255)`, _.fillRect(R, S, 1, 1)
        }
      d = 0;
      for (let R = 0; R < 8; R++)
        for (let S = 0; S < 8; S++) {
          const N = _.getImageData(R, S, 1, 1).data,
            A = N[0],
            y = N[1],
            v = N[2],
            E = N[3];
          l.fillStyle = `rgba(${A}, ${y}, ${v}, ${E})`, l.fillRect(R, S, 1, 1);
          const D = l.getImageData(R, S, 1, 1).data,
            B = D[0],
            P = D[1],
            L = D[2],
            H = D[3];
          f[d] = A, f[d + 1] = y, f[d + 2] = v, f[d + 3] = E, d += 4, u.fillStyle = `rgba(${A!==B?B:255}, ${y!==P?P:255}, ${v!==L?L:255}, ${E!==H?H:1})`, u.fillRect(R * 5, S * 5, 5, 5)
        }
      const g = [],
        h = new Set;
      for (let R = 0; R < 64; R++) {
        const S = R * 4,
          N = p[S] !== f[S],
          A = p[S + 1] !== f[S + 1],
          y = p[S + 2] !== f[S + 2],
          v = p[S + 3] !== f[S + 3];
        if (N || A || y || v) {
          const E = (N ? "r" : "") + (A ? "g" : "") + (y ? "b" : "") + (v ? "a" : "");
          h.add(E), g.push([R, E])
        }
      }
      const w = a.toDataURL(),
        C = h.size ? [...h].sort().join(", ") : void 0,
        T = g.length || void 0;
      return {
        rgba: C,
        pixels: T,
        pixelImage: w
      }
    } catch {
      return
    } finally {
      gt(a), gt(i), gt(s)
    }
  },
  hn = ({
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
        multiplier: _
      }),
      {
        getNextSeed: f
      } = p,
      d = (A, y, v, E) => {
        const D = (A - 1) / y * (v || 1) || 0;
        return E ? D : Math.floor(D)
      },
      g = (A, y, v, E, D) => {
        const {
          width: B,
          height: P
        } = v, L = A.createRadialGradient(d(D(), y, B), d(D(), y, P), d(D(), y, B), d(D(), y, B), d(D(), y, P), d(D(), y, B));
        L.addColorStop(0, E[d(D(), y, E.length)]), L.addColorStop(1, E[d(D(), y, E.length)]), A.fillStyle = L
      },
      h = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      w = (A, y, v, E) => {
        const {
          width: D,
          height: B
        } = v, P = 2.99;
        A.font = `${B/P}px ${r.replace(/!important/gm,"")}`, A.strokeText("👾A", d(E(), y, D), d(E(), y, B), d(E(), y, D))
      },
      C = (A, y, v, E) => {
        const {
          width: D,
          height: B
        } = v;
        A.beginPath(), A.arc(d(E(), y, D), d(E(), y, B), d(E(), y, Math.min(D, B)), d(E(), y, 2 * Math.PI, !0), d(E(), y, 2 * Math.PI, !0)), A.stroke()
      },
      T = (A, y, v, E) => {
        const {
          width: D,
          height: B
        } = v;
        A.beginPath(), A.moveTo(d(E(), y, D), d(E(), y, B)), A.bezierCurveTo(d(E(), y, D), d(E(), y, B), d(E(), y, D), d(E(), y, B), d(E(), y, D), d(E(), y, B)), A.stroke()
      },
      R = (A, y, v, E) => {
        const {
          width: D,
          height: B
        } = v;
        A.beginPath(), A.moveTo(d(E(), y, D), d(E(), y, B)), A.quadraticCurveTo(d(E(), y, D), d(E(), y, B), d(E(), y, D), d(E(), y, B)), A.stroke()
      },
      S = (A, y, v, E) => {
        if (!("ellipse" in A)) return;
        const {
          width: D,
          height: B
        } = v;
        A.beginPath(), A.ellipse(d(E(), y, D), d(E(), y, B), d(E(), y, Math.floor(D / 2)), d(E(), y, Math.floor(B / 2)), d(E(), y, 2 * Math.PI, !0), d(E(), y, 2 * Math.PI, !0), d(E(), y, 2 * Math.PI, !0)), A.stroke()
      },
      N = [C, T, R];
    bt || N.push(S), e && N.push(w), [...Array(a)].forEach(A => {
      g(t, u, o, h, f), t.shadowBlur = d(f(), u, i, !0), t.shadowColor = h[d(f(), u, h.length)];
      const y = N[d(f(), u, N.length)];
      y(t, u, o, f), t.fill()
    })
  };
async function xi() {
  let n, t;
  try {
    await ie();
    const e = Ge(),
      r = fn(),
      o = e["HTMLCanvasElement.toDataURL"],
      a = e["HTMLCanvasElement.getContext"],
      i = e["CanvasRenderingContext2D.fillText"] || e["CanvasRenderingContext2D.font"] || e["CanvasRenderingContext2D.getImageData"] || e["CanvasRenderingContext2D.strokeText"],
      s = e["String.fromCodePoint"];
    let u = e["CanvasRenderingContext2D.measureText"] || e["TextMetrics.actualBoundingBoxAscent"] || e["TextMetrics.actualBoundingBoxDescent"] || e["TextMetrics.actualBoundingBoxLeft"] || e["TextMetrics.actualBoundingBoxRight"] || e["TextMetrics.fontBoundingBoxAscent"] || e["TextMetrics.fontBoundingBoxDescent"] || e["TextMetrics.width"],
      _ = o || a || i || u || s || !1,
      l = window;
    !Lr && r && (l = r);
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
    await ie();
    const g = bt ? 50 : 75;
    hn({
      canvas: n,
      context: f,
      strokeText: !0,
      cssFontFamily: Rn,
      area: {
        width: g,
        height: g
      },
      rounds: 10
    });
    const h = n.toDataURL();
    await ie();
    const w = Pi();
    await ie();
    const C = Rn.replace(/!important/gm, "");
    f.font = `10px ${C}`;
    const T = new Set,
      R = jr.reduce((L, H) => {
        const {
          actualBoundingBoxAscent: te,
          actualBoundingBoxDescent: me,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Ne,
          fontBoundingBoxAscent: k,
          fontBoundingBoxDescent: M,
          width: K
        } = f.measureText(H) || {}, oe = [te, me, F, Ne, k, M, K].join(",");
        return T.has(oe) || (T.add(oe), L.add(H)), L
      }, new Set),
      S = 1e-5 * [...T].map(L => L.split(",").reduce((H, te) => H += +te || 0, 0)).reduce((L, H) => L += H, 0),
      N = 75;
    await ie(), hn({
      canvas: n,
      context: f,
      area: {
        width: N,
        height: N
      }
    });
    const A = n.toDataURL();
    await ie(), hn({
      canvas: t,
      context: d,
      area: {
        width: N,
        height: N
      }
    });
    const y = t.toDataURL();
    f.restore(), f.clearRect(0, 0, n.width, n.height), n.width = 50, n.height = 50, f.font = `50px ${C}`, f.fillText("A", 7, 37);
    const v = n.toDataURL();
    f.restore(), f.clearRect(0, 0, n.width, n.height), n.width = 50, n.height = 50, f.font = `35px ${C}`, f.fillText("👾", 0, 37);
    const E = n.toDataURL();
    f.clearRect(0, 0, n.width, n.height), (w && w.pixels || Math.max(...f.getImageData(0, 0, 8, 8).data)) && (_ = !0, Z("CanvasRenderingContext2D.getImageData", "pixel data modified")), n.width = 2, n.height = 2, f.fillStyle = "#000", f.fillRect(0, 0, n.width, n.height), f.fillStyle = "#fff", f.fillRect(2, 2, 1, 1), f.beginPath(), f.arc(0, 0, 2, 0, 1, !0), f.closePath(), f.fill();
    const D = f.getImageData(0, 0, 2, 2).data.join(""),
      B = {
        BLINK: ["255255255255178178178255246246246255555555255", "255255255255192192192255240240240255484848255", "255255255255177177177255246246246255535353255", "255255255255128128128255191191191255646464255", "255255255255178178178255247247247255565656255", "255255255255174174174255242242242255474747255", "255255255255229229229255127127127255686868255", "255255255255192192192255244244244255535353255"],
        GECKO: ["255255255255191191191255207207207255646464255", "255255255255192192192255240240240255484848255", "255255255255191191191255239239239255646464255", "255255255255191191191255223223223255606060255", "255255255255171171171255223223223255606060255", "255255255255188188188255245245245255525252255"],
        WEBKIT: ["255255255255185185185255233233233255474747255", "255255255255185185185255229229229255474747255", "255255255255185185185255218218218255474747255", "255255255255192192192255240240240255484848255", "255255255255178178178255247247247255565656255", "255255255255178178178255247247247255565656255", "255255255255192192192255240240240255484848255", "255255255255186186186255218218218255464646255"]
      };
    Fe.imageDataLowEntropy = D, (ue && !B.BLINK.includes(D) || yt && !B.GECKO.includes(D) || bt && !B.WEBKIT.includes(D)) && (Ce.CANVAS = !0), Ce.CANVAS && ae("CanvasRenderingContext2D.getImageData", "suspicious pixel data");
    const P = L => {
      const H = oe => oe % 1 !== 0,
        {
          actualBoundingBoxAscent: te,
          actualBoundingBoxDescent: me,
          actualBoundingBoxLeft: F,
          actualBoundingBoxRight: Ne,
          fontBoundingBoxAscent: k,
          fontBoundingBoxDescent: M
        } = L.measureText("") || {};
      return [te, me, F, Ne, k, M].find(oe => H(oe || 0))
    };
    return await ie(), P(f) && (u = !0, _ = !0, Z("CanvasRenderingContext2D.measureText", "metric noise detected")), {
      dataURI: h,
      paintURI: A,
      paintCpuURI: y,
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

function Li() {
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
          const C = !isNaN(+w),
            T = o[w],
            R = u.test(w),
            S = u.test(T);
          if (C && !S) return s.push(T);
          if (!C && !R) return s.push(w)
        });
        const _ = {},
          l = w => w.charAt(0).toUpperCase() + w.slice(1),
          p = w => w.charAt(0).toLowerCase() + w.slice(1),
          f = w => w.slice(1),
          d = /[A-Z]/g;
        s.forEach(w => {
          if (_[w]) return;
          const C = w.indexOf("-") > -1,
            T = d.test(w),
            R = w.charAt(0),
            S = C && R == "-",
            N = T && R == R.toUpperCase();
          if (w = S ? f(w) : N ? p(w) : w, C) {
            const A = w.split("-").map((y, v) => v == 0 ? y : l(y)).join("");
            A in o ? _[A] = !0 : l(A) in o && (_[l(A)] = !0)
          } else if (T) {
            const A = w.replace(d, y => "-" + y.toLowerCase());
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
      r = t($r());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    re(e);
    return
  }
}

function Mi() {
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
    const o = fn().window,
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
    (screen.width !== i || i > 800 && l) && (Ce.IFRAME_SCREEN = !0);
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
      C = r({
        body: a,
        width: i,
        height: u
      });
    return {
      mediaCSS: w,
      matchMediaCSS: g,
      screenQuery: C
    }
  } catch (o) {
    re(o);
    return
  }
}

function Bi(n) {
  const t = [],
    e = n.length;
  for (let r = 0; r < e; r++) try {
    n[r]()
  } catch (o) {
    t.push(o.message)
  }
  return t
}

function Hi() {
  try {
    return {
      errors: Bi([() => new Function('alert(")')(), () => new Function("const foo;foo.bar")(), () => new Function("null.bar")(), () => new Function("abc.xyz = 123")(), () => new Function("const foo;foo.bar")(), () => new Function("(1).toString(1000)")(), () => new Function("[...undefined].length")(), () => new Function("var x = new Array(-1)")(), () => new Function("const a=1; const a=2;")()])
    }
  } catch (n) {
    re(n);
    return
  }
}

function Ui(n, t) {
  if (!n || !t || !t.length) return !1;
  const e = t.reduce((i, s) => (i[s] = !0, i), {}),
    r = "Cambria Math" in e || "Nirmala UI" in e || "Leelawadee UI" in e || "HoloLens MDL2 Assets" in e || "Segoe Fluent Icons" in e,
    o = "Helvetica Neue" in e || "Luminari" in e || "PingFang HK Light" in e || "InaiMathi Bold" in e || "Galvji" in e || "Chakra Petch" in e,
    a = "Arimo" in e || "MONO" in e || "Ubuntu" in e || "Noto Color Emoji" in e || "Dancing Script" in e || "Droid Sans Mono" in e;
  return r && n != Oe.WINDOWS || o && n != Oe.APPLE ? !0 : !!(a && n != Oe.LINUX)
}

function Fi(n, t, e) {
  var r;
  return n ? ((r = n.parentNode) == null || r.replaceChild(t, n), !0) : null
}

function ji(n, ...t) {
  const e = document.createElement("template");
  return e.innerHTML = n.map((r, o) => `${r}${t[o]||""}`).join(""), document.importNode(e.content, !0)
}
const Dn = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  In = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  on = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  Gi = Object.keys(In).map(n => In[n]).flat(),
  Wi = Object.keys(Dn).map(n => Dn[n]).flat(),
  Vi = Object.keys(on).map(n => on[n]).flat(),
  zi = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  $i = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  qi = [...Gi, ...Wi, ...zi, ...$i, ...Vi].sort();
async function Ki() {
  const n = ({
      doc: o,
      id: a,
      emojis: i
    }) => {
      try {
        Fi(o.getElementById(a), ji`
				<div id="pixel-emoji-container">
				<style>
					.pixel-emoji {
						font-family: ${Rn};
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
              C = i[h],
              {
                height: T,
                width: R
              } = s(w),
              S = `${R},${T}`;
            return u.has(S) || (u.add(S), d.add(C)), d
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
        document.fonts.check(`0px "${dn()}"`) || (a = o.reduce((_, l) => (document.fonts.check(`0px "${l}"`) && _.push(l), _), []));
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
        fontMap: Dn
      }) || i({
        fonts: o,
        fontMap: In
      })
    }, r = o => Object.keys(on).reduce((i, s) => {
      const u = on[s];
      return u.filter(l => o.includes(l)).length == u.length ? [...i, s] : i
    }, []);
  try {
    await ie();
    const o = fn(),
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
      emojis: jr
    }) || {}, f = await t(qi), d = e(f), g = r(f), h = a["FontFace.load"] || a["FontFace.family"] || a["FontFace.status"] || a["String.fromCodePoint"] || a["CSSStyleDeclaration.setProperty"] || a["CSS2Properties.setProperty"] || !1;
    return Ui(nn, f) && (Ce.FONTS = !0, Fe.FontOsIsBad = !0, ae("platform", `${nn} system and fonts are uncommon`)), {
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
  Xi = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var _e = (n => (n.WINDOWS = "Windows", n.MAC = "Mac", n.LINUX = "Linux", n.ANDROID = "Android", n.CHROME_OS = "Chrome OS", n))(_e || {});
const Yi = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function Ji() {
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
    C = "setAppBadge" in Navigator.prototype,
    T = (E, D) => E ? [D] : [],
    R = {
      [_e.ANDROID]: [...T(o, s), ...T(e, _), ...T(n, l), u, ...T(i, !p), ...T(r, !f), ...T(a, !d), ...T(a, !g), !h, w, ...T(t, !C)],
      [_e.CHROME_OS]: [...T(o, s), ...T(e, !_), ...T(n, !l), u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, w || !w, ...T(t, !C)],
      [_e.WINDOWS]: [...T(o, !s), ...T(e, !_), ...T(n, !l), !u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, w || !w, ...T(t, C)],
      [_e.MAC]: [...T(o, s), ...T(e, !_), ...T(n, !l), !u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, !w, ...T(t, C)],
      [_e.LINUX]: [...T(o, !s), ...T(e, !_), ...T(n, !l), !u, ...T(i, p), ...T(r, f), ...T(a, d), ...T(a, g), h, !w || !w, ...T(t, !C)]
    },
    S = {
      noContentIndex: e && !_,
      noContactsManager: n && !l,
      noDownlinkMax: !u
    },
    N = Object.keys(R).reduce((E, D) => {
      const B = R[D],
        P = +(B.filter(L => L).length / B.length).toFixed(2);
      return E[D] = P, E
    }, {}),
    A = Object.keys(N).reduce((E, D) => N[E] > N[D] ? E : D),
    y = N[A];
  return [N, y, S]
}
const or = {
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

function Qi() {
  const {
    body: n
  } = document, t = document.createElement("div");
  n.appendChild(t);
  try {
    const e = String([...Yi.reduce((o, a) => (t.setAttribute("style", `font: ${a} !important`), o.add(getComputedStyle(t).fontFamily)), new Set)]),
      r = or[e];
    return or[e] ? `${e}:${r}` : e
  } catch {
    return ""
  } finally {
    n.removeChild(t)
  }
}
async function Zi({
  webgl: n
}) {
  var t, e;
  try {
    await ie();
    const r = Ge(),
      o = $r(),
      a = Object.keys({
        ...navigator.mimeTypes
      }),
      i = Qi(),
      [s, u, _] = Ji(),
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
              return S.srcdoc = Xi, !!S.contentWindow
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
      C = +(g.filter(S => p[S]).length / g.length * 100).toFixed(0),
      T = +(h.filter(S => f[S]).length / h.length * 100).toFixed(0),
      R = +(w.filter(S => d[S]).length / w.length * 100).toFixed(0);
    return {
      ...l,
      likeHeadlessRating: C,
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
async function es() {
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
    await ie();
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
const ts = () => ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"].sort();
async function ns() {
  const n = () => {
    try {
      const t = ts(),
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
async function rs(n) {
  try {
    await ie();
    const t = Ge();
    let e = t["Navigator.appVersion"] || t["Navigator.deviceMemory"] || t["Navigator.doNotTrack"] || t["Navigator.hardwareConcurrency"] || t["Navigator.language"] || t["Navigator.languages"] || t["Navigator.maxTouchPoints"] || t["Navigator.oscpu"] || t["Navigator.platform"] || t["Navigator.userAgent"] || t["Navigator.vendor"] || t["Navigator.plugins"] || t["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      o = I(async () => {
        const l = be(() => navigator.userAgent),
          p = On(l),
          f = await Mr();
        return Hr({
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
          return !!f && p.some(g => f.includes(g)) || ae("platform", `${l} is unusual`), nn !== Jn && (e = !0, Z("Navigator.platform", `${Jn} platform and ${nn} user agent do not match`)), n && l != n.platform && (e = !0), l
        }),
        system: I(() => On(navigator.userAgent), "userAgent system failed"),
        device: I(() => Ur({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: I(() => {
          const {
            userAgent: l
          } = navigator;
          return r || ae("userAgent", `${l} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(l) && ae("userAgent", "extra spaces detected"), Jt(l).length && ae("userAgent is gibberish", l), n && l != n.userAgent && (e = !0), l.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: Fr((navigator || {}).userAgent),
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
              l != n.language && (e = !0, Z("Navigator.language", `${l} does not match worker scope`));
              const g = p.join(",");
              g !== n.languages.join(",") && (e = !0, Z("Navigator.languages", `${g} does not match worker scope`))
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
            } = f, h = Jt(d), w = Jt(g);
            h.length && ae("plugin name is gibberish", d), w.length && ae("plugin description is gibberish", g)
          }), p
        }, "plugins failed"),
        properties: I(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: os(),
        privateClickMeasurement: as(),
        pdfViewerEnabled: is()
      },
      i = () => I(() => {
        const l = navigator;
        if (!(!l.userAgentData || !l.userAgentData.getHighEntropyValues)) return l.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(p => {
          const {
            brands: f,
            mobile: d
          } = l.userAgentData || {}, g = (C, T = !1) => C.filter(R => !/Not/.test(R.brand)).map(R => `${R.brand}${T?` ${R.version}`:""}`), h = C => C.length > 1 ? C.filter(T => !/Chromium/.test(T)) : C;
          return p.brands || (p.brands = f), p.brandsVersion = g(p.brands ?? [], !0), p.brands = g(p.brands ?? []), p.brandsVersion = h(p.brandsVersion ?? []), p.brands = h(p.brands ?? []), p.mobile || (p.mobile = d), Object.keys(p).sort().reduce((C, T) => (C[T] = p[T], C), {})
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
              architecture: C,
              description: T,
              device: R,
              vendor: S
            } = w, N = [S, C, T, R], A = [...(d == null ? void 0 : d.values()) ?? []], y = (v => {
              const E = {};
              for (const D in v) E[D] = v[D];
              return E
            })(f);
            return Fe.webGpuAdapter = N, Fe.webGpuFeatures = A, Fe.webGpuLimits = W(y), {
              adapterInfo: N,
              limits: y
            }
          }, {
            info: h
          } = p;
          return h ? g(h) : p.requestAdapterInfo ? p.requestAdapterInfo().then(g) : void 0
        })
      }, "webgpu failed");
    return await ie(), Promise.all([o, i(), s(), u(), _()]).then(([l, p, f, d, g]) => ({
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

function os() {
  const t = window.ApplePaySession;
  if (typeof t != "function" || typeof t.canMakePayments != "function") return -1;
  try {
    return t.canMakePayments() ? 1 : 0
  } catch (e) {
    const r = (e == null ? void 0 : e.message) ?? "";
    return r.includes("disabled in this insecure context") ? 2 : r.includes("Trying to start an Apple Pay session") ? 0 : -1
  }
}

function as() {
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

function is() {
  try {
    const n = navigator.pdfViewerEnabled;
    return typeof n == "boolean" ? n : void 0
  } catch (n) {
    re(n);
    return
  }
}
const se = "c767712b",
  ss = {
    noscript: {
      contentDocumentHash: ["0b637a33", "37e2f32e", "318390d1"],
      contentWindowHash: ["0b637a33", "37e2f32e", "318390d1"],
      getContextHash: ["0b637a33", "081d6d1b", se]
    },
    trace: {
      contentDocumentHash: ["ca9d9c2f"],
      contentWindowHash: ["ca9d9c2f"],
      createElementHash: ["77dea834"],
      getElementByIdHash: ["77dea834"],
      getImageDataHash: ["77dea834"],
      toBlobHash: ["77dea834", se],
      toDataURLHash: ["77dea834", se]
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
      getImageDataHash: ["98ec858e", "a2971888", "dbbaf31f", se],
      toBlobHash: ["9f1c3dfe", "a2971888", "dbbaf31f", se],
      toDataURLHash: ["98ec858e", "a2971888", "dbbaf31f", se]
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
      toDataURLHash: ["fd00bf5d", "8ee7df22", se],
      toBlobHash: ["fd00bf5d", "8ee7df22", se],
      getImageDataHash: ["fd00bf5d", "8ee7df22", se],
      getByteFrequencyDataHash: ["fd00bf5d", "8ee7df22", se],
      getByteTimeDomainDataHash: ["fd00bf5d", "8ee7df22", se],
      getFloatFrequencyDataHash: ["fd00bf5d", "8ee7df22", se],
      getFloatTimeDomainDataHash: ["fd00bf5d", "8ee7df22", se],
      copyFromChannelHash: ["fd00bf5d", "8ee7df22", se],
      getChannelDataHash: ["fd00bf5d", "8ee7df22", se],
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
      getContextHash: ["55e9b959", se],
      toDataURLHash: ["55e9b959", se],
      toBlobHash: ["55e9b959", se],
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
    noscript: gn,
    trace: Ve,
    cydec: ze,
    canvasblocker: rt,
    chameleon: Pe,
    duckduckgo: ye,
    privacybadger: ar,
    privacypossum: wn,
    jshelter: Ie,
    puppeteerExtra: le,
    fakeBrowser: Se
  } = ss;

function cs(n, t) {
  if (t) {
    if (t >= 7 && Ve.contentDocumentHash.includes(n.contentDocumentHash) && Ve.contentWindowHash.includes(n.contentWindowHash) && Ve.createElementHash.includes(n.createElementHash) && Ve.getElementByIdHash.includes(n.getElementByIdHash) && Ve.toDataURLHash.includes(n.toDataURLHash) && Ve.toBlobHash.includes(n.toBlobHash) && Ve.getImageDataHash.includes(n.getImageDataHash)) return "Trace";
    if (t >= 7 && ze.contentDocumentHash.includes(n.contentDocumentHash) && ze.contentWindowHash.includes(n.contentWindowHash) && ze.createElementHash.includes(n.createElementHash) && ze.getElementByIdHash.includes(n.getElementByIdHash) && ze.toDataURLHash.includes(n.toDataURLHash) && ze.toBlobHash.includes(n.toBlobHash) && ze.getImageDataHash.includes(n.getImageDataHash)) return "CyDec";
    if (t >= 6 && rt.contentDocumentHash.includes(n.contentDocumentHash) && rt.contentWindowHash.includes(n.contentWindowHash) && rt.appendHash.includes(n.appendHash) && rt.toDataURLHash.includes(n.toDataURLHash) && rt.toBlobHash.includes(n.toBlobHash) && rt.getImageDataHash.includes(n.getImageDataHash)) return "CanvasBlocker";
    if (t >= 9 && Pe.appendHash.includes(n.appendHash) && Pe.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && Pe.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && Pe.insertAdjacentTextHash.includes(n.insertAdjacentTextHash) && Pe.prependHash.includes(n.prependHash) && Pe.replaceWithHash.includes(n.replaceWithHash) && Pe.appendChildHash.includes(n.appendChildHash) && Pe.insertBeforeHash.includes(n.insertBeforeHash) && Pe.replaceChildHash.includes(n.replaceChildHash)) return "Chameleon";
    if (t >= 7 && ye.toDataURLHash.includes(n.toDataURLHash) && ye.toBlobHash.includes(n.toBlobHash) && ye.getImageDataHash.includes(n.getImageDataHash) && ye.getByteFrequencyDataHash.includes(n.getByteFrequencyDataHash) && ye.getByteTimeDomainDataHash.includes(n.getByteTimeDomainDataHash) && ye.getFloatFrequencyDataHash.includes(n.getFloatFrequencyDataHash) && ye.getFloatTimeDomainDataHash.includes(n.getFloatTimeDomainDataHash) && ye.copyFromChannelHash.includes(n.copyFromChannelHash) && ye.getChannelDataHash.includes(n.getChannelDataHash) && ye.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && ye.availHeightHash.includes(n.availHeightHash) && ye.availLeftHash.includes(n.availLeftHash) && ye.availTopHash.includes(n.availTopHash) && ye.availWidthHash.includes(n.availWidthHash) && ye.colorDepthHash.includes(n.colorDepthHash) && ye.pixelDepthHash.includes(n.pixelDepthHash)) return "DuckDuckGo";
    if (t >= 2 && ar.getImageDataHash.includes(n.getImageDataHash) && ar.toDataURLHash.includes(n.toDataURLHash)) return "Privacy Badger";
    if (t >= 3 && wn.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && wn.availWidthHash.includes(n.availWidthHash) && wn.colorDepthHash.includes(n.colorDepthHash)) return "Privacy Possum";
    if (t >= 2 && gn.contentDocumentHash.includes(n.contentDocumentHash) && gn.contentWindowHash.includes(n.contentDocumentHash) && gn.getContextHash.includes(n.getContextHash) && n.hardwareConcurrencyHash == se) return "NoScript";
    if (t >= 14 && Ie.contentDocumentHash.includes(n.contentDocumentHash) && Ie.contentWindowHash.includes(n.contentDocumentHash) && Ie.appendHash.includes(n.appendHash) && Ie.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && Ie.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && Ie.prependHash.includes(n.prependHash) && Ie.replaceWithHash.includes(n.replaceWithHash) && Ie.appendChildHash.includes(n.appendChildHash) && Ie.insertBeforeHash.includes(n.insertBeforeHash) && Ie.replaceChildHash.includes(n.replaceChildHash) && Ie.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash)) return "JShelter";
    if (t >= 13 && le.contentDocumentHash.includes(n.contentDocumentHash) && le.contentWindowHash.includes(n.contentWindowHash) && le.createElementHash.includes(n.createElementHash) && le.getElementByIdHash.includes(n.getElementByIdHash) && le.appendHash.includes(n.appendHash) && le.insertAdjacentElementHash.includes(n.insertAdjacentElementHash) && le.insertAdjacentHTMLHash.includes(n.insertAdjacentHTMLHash) && le.insertAdjacentTextHash.includes(n.insertAdjacentTextHash) && le.prependHash.includes(n.prependHash) && le.replaceWithHash.includes(n.replaceWithHash) && le.appendChildHash.includes(n.appendChildHash) && le.insertBeforeHash.includes(n.insertBeforeHash) && le.contentDocumentHash.includes(n.contentDocumentHash) && le.replaceChildHash.includes(n.replaceChildHash) && le.getContextHash.includes(n.getContextHash) && le.toDataURLHash.includes(n.toDataURLHash) && le.toBlobHash.includes(n.toBlobHash) && le.getImageDataHash.includes(n.getImageDataHash) && le.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash)) return "puppeteer-extra";
    if (t >= 12 && Se.appendChildHash.includes(n.appendChildHash) && Se.getContextHash.includes(n.getContextHash) && Se.toDataURLHash.includes(n.toDataURLHash) && Se.toBlobHash.includes(n.toBlobHash) && Se.getImageDataHash.includes(n.getImageDataHash) && Se.hardwareConcurrencyHash.includes(n.hardwareConcurrencyHash) && Se.availHeightHash.includes(n.availHeightHash) && Se.availLeftHash.includes(n.availLeftHash) && Se.availTopHash.includes(n.availTopHash) && Se.availWidthHash.includes(n.availWidthHash) && Se.colorDepthHash.includes(n.colorDepthHash) && Se.pixelDepthHash.includes(n.pixelDepthHash)) return "FakeBrowser"
  }
}
async function us() {
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
async function ls() {
  try {
    await ie();
    const n = pi(),
      t = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: ue ? "Blink" : yt ? "Gecko" : ""
      },
      [e, r] = await Promise.all([Mr(), ue ? void 0 : us()]);
    if (e) {
      const u = Ja();
      t.privacy = "Brave", t.security = {
        FileSystemWritableFileStream: "FileSystemWritableFileStream" in window,
        Serial: "Serial" in window,
        ReportingObserver: "ReportingObserver" in window
      }, t.mode = u.allow ? "allow" : u.standard ? "standard" : u.strict ? "strict" : ""
    }
    const {
      protection: o
    } = r || {};
    if (yt && o) {
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
    await ie();
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
    for (const [u, _] of Object.entries(i)) _ !== se && (s[u.slice(0, -4)] = _);
    return t.extensionHashPattern = s, t.extension = cs(i, a), t
  } catch (n) {
    re(n);
    return
  }
}

function ds() {
  try {
    return "ontouchstart" in window && !!document.createEvent("TouchEvent")
  } catch {
    return !1
  }
}
let yn;
async function _s() {
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
    r = Number(r), o = Number(o), a = Number(a), i = Number(i), s = Number(s), u = Number(u), yn ? {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i
    } = yn : yn = {
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
    !bt && p && (t = !0, Z("Window.devicePixelRatio", "lied dpr"));
    const f = !(r - a || o - i);
    return r > 800 && f && (Ce.SCREEN = !0), {
      width: r,
      height: o,
      availWidth: a,
      availHeight: i,
      colorDepth: s,
      pixelDepth: u,
      touch: ds(),
      lied: t
    }
  } catch (n) {
    re(n);
    return
  }
}

function fs() {
  var e;
  const n = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (n) {
    const r = new n().resolvedOptions().timeZone;
    if (r) return r
  }
  const t = -ps();
  return `UTC${t>=0?"+":""}${t}`
}

function ps() {
  const n = new Date().getFullYear();
  return Math.max(new Date(n, 0, 1).getTimezoneOffset(), new Date(n, 6, 1).getTimezoneOffset())
}
const ms = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  hs = {
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
  gs = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  ws = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]);
async function ys() {
  var o;
  let n, t, e, r;
  try {
    await ie();
    const a = Ge(),
      i = fn(),
      s = a["HTMLCanvasElement.toDataURL"],
      u = a["HTMLCanvasElement.getContext"],
      _ = a["WebGLRenderingContext.getParameter"] || a["WebGL2RenderingContext.getParameter"] || a["WebGLRenderingContext.getExtension"] || a["WebGL2RenderingContext.getExtension"],
      l = s || u || _ || a["WebGLRenderingContext.getSupportedExtensions"] || a["WebGL2RenderingContext.getSupportedExtensions"] || !1;
    let p = window;
    !Lr && i && (p = i);
    const f = p.document;
    "OffscreenCanvas" in window ? (n = new p.OffscreenCanvas(256, 256), t = new p.OffscreenCanvas(256, 256)) : (n = f.createElement("canvas"), t = f.createElement("canvas"));
    const d = sr(n, "webgl"),
      g = sr(t, "webgl2");
    if (e = d, r = g, !d) return;
    const h = (k, M) => {
        if (!k) return;
        const K = I(() => k.getShaderPrecisionFormat(k[M], k.LOW_FLOAT)),
          oe = I(() => k.getShaderPrecisionFormat(k[M], k.MEDIUM_FLOAT)),
          we = I(() => k.getShaderPrecisionFormat(k[M], k.HIGH_FLOAT)),
          Ee = I(() => k.getShaderPrecisionFormat(k[M], k.HIGH_INT));
        return {
          LOW_FLOAT: K,
          MEDIUM_FLOAT: oe,
          HIGH_FLOAT: we,
          HIGH_INT: Ee
        }
      },
      w = (k, M) => {
        const K = {};
        if (!M) return K;
        for (const oe in M) {
          const we = M[oe];
          K[k + "." + oe + ".precision"] = we ? I(() => we.precision) : void 0, K[k + "." + oe + ".rangeMax"] = we ? I(() => we.rangeMax) : void 0, K[k + "." + oe + ".rangeMin"] = we ? I(() => we.rangeMin) : void 0
        }
        return K
      },
      C = k => {
        const M = {};
        if (!k) return M;
        const K = k;
        for (const oe of ms) {
          const we = K[oe];
          if (we === void 0) continue;
          const Ee = k.getParameter(we);
          Ee && ArrayBuffer.isView(Ee) ? M[oe] = Array.from(Ee) : M[oe] = Ee
        }
        return M
      },
      T = k => {
        if (!k) return [];
        const M = I(() => k.getContextAttributes());
        return M ? Object.keys(M).sort().map(K => `${K}=${M[K]}`) : []
      },
      R = k => {
        if (!k) return [];
        const M = [];
        for (const [K, oe] of Object.entries(hs)) {
          const we = I(() => k.getExtension(K));
          if (we)
            for (const Ee of oe) {
              const We = we[Ee];
              if (typeof We != "number") continue;
              if (!gs.has(Ee)) {
                M.push(`${Ee}=${We}`);
                continue
              }
              const Re = I(() => k.getParameter(We));
              Re == null ? M.push(`${Ee}=${We}`) : typeof Re == "object" && "length" in Re ? M.push(`${Ee}=${We}=${Array.from(Re).join(",")}`) : M.push(`${Ee}=${We}=${Re}`)
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
        const M = I(() => k.getSupportedExtensions());
        return M || []
      };
    await ie();
    const A = {
        ...C(d),
        ...S(d)
      },
      y = {
        ...C(g),
        ...S(g)
      },
      v = [];
    for (const k in y) {
      const M = A[k];
      !M || ws.has(k) || "" + M != "" + y[k] && v.push(k)
    }
    v.length && ae("webgl/webgl2 mirrored params mismatch", v.toString()), await ie();
    const E = {
        extensions: [...N(d), ...N(g)],
        contextAttributes: T(d),
        contextAttributes2: T(g),
        extensionParameters: R(d),
        extensionParameters2: R(g),
        parameters: {
          ...A,
          ...y,
          ...w("VERTEX_SHADER", h(d, "VERTEX_SHADER")),
          ...w("FRAGMENT_SHADER", h(d, "FRAGMENT_SHADER"))
        },
        parameterOrExtensionLie: _,
        lied: l
      },
      D = ["00b72507", "00c1b42d", "00fe1ec9", "02b3eea3", "0461d3de", "0463627d", "057857ac", "0586e20b", "0639a81a", "087d5759", "08847ba5", "0b2d4333", "0cdb985d", "0e058699", "0eb2fc19", "0f39d057", "0f840379", "0fc123c7", "101e0582", "12e92e62", "12f8ac14", "1453d59a", "149a1efa", "166dc7c8", "16c481a6", "171831c5", "177cc258", "18579e83", "19594666", "1b251fd7", "1bfd326c", "1e8a9a79", "1ff7c7e7", "2048bc5a", "2259b706", "22d0f2cf", "230d6a0d", "23d1ce20", "2402c3d2", "24306836", "258789d0", "25a760b8", "25f9385d", "27938830", "27db292c", "2b80fd96", "2bb488da", "2c04c2eb", "2d15287f", "2f014c41", "2f582ed9", "300ee927", "33bc5492", "34270469", "3660b71f", "3740c4c7", "3999a5e1", "39ead506", "3a91d0d6", "3b724916", "3bf321b8", "3c546144", "3f9ef44c", "3fea1100", "3ff82303", "4027d193", "402e1064", "4065cd69", "43038e3d", "4503e771", "461f97e1", "464d51ac", "467b99a5", "482c81b2", "48af038f", "4962ada1", "49bf7358", "4c9e8f5d", "502c402c", "508d1625", "52e348ba", "534002ab", "5582debe", "55d3aa56", "55e821f7", "581f3282", "5831d5fd", "58871380", "58fdc720", "5a5658f1", "5a90a5f8", "5aea1af1", "5b6a17aa", "5bef9a39", "5ca55292", "5d786cef", "5ddb9237", "5ee41456", "61178f2a", "61ca8e23", "61d9464e", "61eecaae", "623c3bfd", "6248d9e3", "6294d84e", "62bf7ef1", "6346cf49", "6357365c", "66628310", "668f0f93", "66d992e8", "67995996", "6843ebbf", "6864dcb0", "6951838b", "696e1548", "698c5c2e", "6a75ae3b", "6aa1ff7e", "6b07d4f8", "6b290cd4", "6c168801", "6dfae3cb", "6e806ffc", "6edf1720", "6f81cbe7", "70859bdb", "70a095b1", "7238c5dd", "7360ebd1", "741688e4", "74daf866", "78640859", "79284c47", "794f8929", "795e5c95", "79a57aa9", "7aa13573", "7b2e5242", "7b811cdd", "7ec0ea6b", "801d73af", "802e2547", "81b9cd29", "8219e1a4", "82a9a2f1", "8428fc8e", "849ccb64", "8541aa4c", "85479b99", "8bd0b91b", "8d371161", "903c8847", "917871e7", "98aeaba9", "99b1a1c6", "99ef2c3b", "9b67b7dc", "9c6df98c", "9c814c1b", "9e2b5e94", "9fd76352", "a1c808d5", "a22788f8", "a2383001", "a26e9aa9", "a397a568", "a3f9ee34", "a4b988da", "a4d34176", "a581f55e", "a5a477ae", "a9640880", "a97d3858", "aa73f3a4", "ab40bece", "ac4d4ba8", "ad01a422", "ade75c4f", "ae2c4777", "afa583bc", "b10c2a85", "b224cc7c", "b2d6fc98", "b362c2f5", "b467620a", "b4d40dcc", "b504662d", "b50edd99", "b5494027", "b62321c3", "b8961d15", "b8ea6e7f", "bb77a469", "bc0f9686", "bcf7315f", "be2dfaea", "beffda26", "bf06317e", "bf610cdb", "bfe1c212", "c00582e9", "c026469d", "c04889b1", "c04b0635", "c04e374a", "c05f7596", "c07307c6", "c092fdf8", "c25dd065", "c2bce496", "c5e9a883", "c79634c2", "c7e37ca0", "c93b5366", "c9bc4ffd", "cba1878b", "cbeade8c", "ce2e3d16", "cefb72ca", "cf9643e6", "cfd20274", "d05a66eb", "d09c1c07", "d1e76c89", "d2172943", "d2dc2474", "d498797d", "d6bf35ad", "d734ea08", "d860ff42", "d8bd9e5a", "d913dafa", "d970d345", "dbdbe7a4", "dc271c35", "dcd9a29e", "dd67b076", "de793ead", "ded74044", "df9daeb6", "e10339b3", "e142d1f9", "e155c47e", "e15afab0", "e16bb1bb", "e316e4c0", "e3eff92a", "e4569a5b", "e574bef6", "e5962ba3", "e6464c9f", "e68b5c4e", "e796b84e", "e8694547", "e965d180", "e965d541", "e9bdc904", "e9dbb8d5", "ea54d525", "ea59b343", "ea7f90ea", "ea8f5ad0", "eaa13804", "eb799d34", "ec050bb6", "ec928655", "eed2e5e1", "ef8f5db1", "f0d5a3c7", "f1077334", "f221fef5", "f2293447", "f33d918e", "f3c6ea11", "f51056a1", "f51cab9a", "f573bb34", "f5d19934", "f7451c92", "f8e65486", "f9714b3d", "fa994f33", "fafa14c0", "fc37fe1f", "fca66520", "fe0997b6"],
      B = [-1056897629, -1056946782, -1073719331, -1147160399, -1147160553, -1147168724, -1147419751, -1147419753, -1147419775, -1147427826, -1147451883, -1147451901, -1147464169, -1147464177, -1147488144, -1147602934, -1147643759, -1147643872, -1147765274, -1148326739, -1148335070, -1148572354, -1148678631, -1148680509, -1148713259, -1164279890, -1164800191, -1164800478, -1332029332, -133757475, -1342154787, -134823971, -16746546, -1878102921, -1878111124, -1962893370, -1962919974, -1962928178, -2130164162, -2130164382, -2130164388, -2130164546, -2130172573, -2130659912, -2145933648, -2145941977, -2145958228, -2145966414, -2145966441, -2145966529, -2145966535, -2145966545, -2145970658, -2145974343, -2145974380, -2145974489, -2145974596, -2145974598, -2145974612, -2145974637, -2145974657, -2145974729, -2146187766, -2146232338, -2146232480, -2146232503, -2146232590, -2146232723, -2146232724, -2146236588, -2146236703, -2146237020, -2146251619, -2146251641, -2146251681, -2146253671, -2146253693, -2146277218, -2146286438, -2146286463, -2146286583, -2146319268, -2146376065, -2146379955, -2146384003, -2146384011, -2146384027, -2146384034, -2146384120, -2146384281, -2146398568, -2146400384, -2146400556, -2146400620, -2146401928, -2146417027, -2146526795, -2146526934, -2147125544, -2147128275, -2147133747, -2147133749, -2147133760, -2147134974, -2147136328, -2147142429, -2147287810, -2147287811, -2147287820, -2147287834, -2147287835, -2147287854, -2147291718, -2147291820, -2147293058, -2147295768, -2147295822, -2147295823, -2147295849, -2147295857, -2147300019, -2147304193, -2147304219, -2147306321, -2147316382, -2147316383, -2147333118, -2147336998, -2147337003, -2147337012, -2147337022, -2147344686, -2147346747, -2147361652, -2147361731, -2147361769, -2147361774, -2147361775, -2147361778, -2147361792, -2147362760, -2147365698, -2147365730, -2147365759, -2147365760, -2147365827, -2147365863, -2147373914, -2147373984, -2147374032, -2147374080, -2147378041, -2147378146, -2147382130, -2147382221, -2147382251, -2147382270, -2147382272, -2147383246, -2147385825, -2147385849, -2147386292, -2147386326, -2147387335, -2147387364, -2147389930, -2147389937, -2147389951, -2147390461, -2147394188, -2147394251, -2147394484, -2147400057, -2147406798, -2147407643, -2147407821, -2147410938, -2147410941, -2147414733, -2147414956, -2147414987, -2147415037, -2147429201, -2147429223, -2147439020, -2147440422, -2147447111, -2147447122, -2147447126, -2147447137, -2147447149, -2147447157, -2147447161, -2147447163, -2147447873, -2147447892, -2147447896, -2147447928, -2147448592, -2147453701, -2147453767, -2147453768, -2147459031, -2147461169, -2147466956, -2147466972, -2147467172, -2147470173, -2147475351, -2147475352, -638494755, -671082546, -677558160, -999987216, 1099536, 1099644, 1147714426, 1197075, 1229835, 1508998, 1509050, 1610618841, 184555483, 2146590728, 2147305224, 2147361749, 2147440438, 2147475085, 2147479181, 21667, 349912, 351513, 83625, 998804992, 998911268, 999148597, 999156922];
    let P;
    if (E.parameters) {
      const k = new Set;
      for (const M in E.parameters) {
        const K = E.parameters[M];
        if (!(!K || typeof K == "string"))
          if (Array.isArray(K))
            for (const oe of K) k.add(Number(oe));
          else k.add(Number(K))
      }
      P = [...k].sort((M, K) => M - K)
    }
    const L = ei((o = E.parameters) == null ? void 0 : o.UNMASKED_RENDERER_WEBGL),
      H = "" + P,
      te = !L || !H ? void 0 : W([L, H]),
      me = P ? P.reduce((k, M, K) => k ^ +M + K, 0) : void 0;
    Fe.webglParams = H, Fe.webglBrandCapabilities = te, Fe.webglCapabilities = me;
    const F = te && !D.includes(te),
      Ne = me && !B.includes(me);
    return F && (Ce.WEBGL = !0, ae("WebGLRenderingContext.getParameter", "suspicious gpu")), Ne && (Ce.WEBGL = !0, ae("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...E,
      gpu: {
        ...Kr((E.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: qr((E.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (a) {
    re(a);
    return
  } finally {
    ir(n, e), ir(t, r)
  }
}

function ir(n, t) {
  var e;
  if (n) {
    try {
      (e = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    n.width = 0, n.height = 0, n instanceof HTMLCanvasElement && n.remove()
  }
}

function sr(n, t) {
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
async function bs() {
  var t, e, r, o, a, i, s, u, _, l, p, f, d, g, h, w, C, T, R, S, N, A, y, v, E, D, B, P, L, H, te, me;
  const n = await vs();
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
    offlineAudioContext: (C = n.offlineAudioContext) != null && C.lied ? void 0 : {
      binsSample: (T = n.offlineAudioContext) == null ? void 0 : T.binsSample,
      compressorGainReduction: (R = n.offlineAudioContext) == null ? void 0 : R.compressorGainReduction,
      copySample: (S = n.offlineAudioContext) == null ? void 0 : S.copySample,
      floatFrequencyDataSum: (N = n.offlineAudioContext) == null ? void 0 : N.floatFrequencyDataSum,
      floatTimeDomainDataSum: (A = n.offlineAudioContext) == null ? void 0 : A.floatTimeDomainDataSum,
      lied: (y = n.offlineAudioContext) == null ? void 0 : y.lied,
      noise: (v = n.offlineAudioContext) == null ? void 0 : v.noise,
      totalUniqueSamples: (E = n.offlineAudioContext) == null ? void 0 : E.totalUniqueSamples,
      values: (D = n.offlineAudioContext) == null ? void 0 : D.values
    },
    fonts: n.fonts ? n.fonts.fontFaceLoadFonts : void 0,
    intl: !n.intl || n.intl.lied ? void 0 : {
      lied: (B = n.intl) == null ? void 0 : B.lied,
      listFormat: (P = n.intl) == null ? void 0 : P.listFormat,
      locale: (L = n.intl) == null ? void 0 : L.locale,
      numberFormat: (H = n.intl) == null ? void 0 : H.numberFormat,
      pluralRules: (te = n.intl) == null ? void 0 : te.pluralRules,
      relativeTimeFormat: (me = n.intl) == null ? void 0 : me.relativeTimeFormat
    },
    resistance: n.resistance,
    math: n.math
  }
}
async function vs() {
  try {
    const [n, t, e, r, o, a, i, s, u, _, l, p, f, d] = await Promise.all([de("offlineAudioContext", Ci()), de("canvasWebgl", ys()), de("canvas2d", xi()), de("css", Promise.resolve(Li())), de("cssMedia", Promise.resolve(Mi())), de("screen", _s()), de("consoleErrors", Promise.resolve(Hi())), de("timezone", Promise.resolve(fs())), de("fonts", Ki()), de("media", ns()), de("resistance", ls()), de("intl", es()), de("workerScope", Ii()), de("maths", Promise.resolve(qa()))]), [g, h, w, C, T] = await Promise.all([de("navigator", rs(f)), de("headless", Zi({
      webgl: t
    })), de("lies", Promise.resolve(mi())), de("trash", Promise.resolve(bi())), de("capturedErrors", Promise.resolve(Xa()))]);
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
      trash: C,
      capturedErrors: T,
      resistance: l,
      intl: p,
      workerScope: f,
      math: d
    }
  } finally {
    fi()
  }
}

function de(n, t) {
  return t.catch(() => {})
}
let Kt;
async function Es() {
  if (Kt) try {
    return await Kt
  } catch {}
  return Kt = (async () => {
    var _, l, p;
    const n = await bs();
    (_ = n.navigator) != null && _.lied && n.screen && (n.screen.minDim = 0, n.screen.maxDim = 0);
    const t = _o({
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
  })(), Kt
}
const cr = "theme";
var vt, Et, Tt, St, At, Ot, Rt, Dt, It, Nt;
class Ts {
  constructor() {
    Y(this, vt, ce(!1));
    Y(this, Et, ce(!1));
    Y(this, Tt, ce(0));
    Y(this, St, ce(!1));
    Y(this, At, ce(tn(Ss())));
    Y(this, Ot, ce(null));
    Y(this, Rt, ce(!1));
    Y(this, Dt, ce("custom-winter"));
    Y(this, It, ce(tn(Date.now())));
    Y(this, Nt, ce(void 0));
    setInterval(() => {
      ne(x(this, It), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(cr), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return ee(x(this, vt))
  }
  set dropletsDialogOpen(t) {
    ne(x(this, vt), t, !0)
  }
  get storeDialogOpen() {
    return ee(x(this, Et))
  }
  set storeDialogOpen(t) {
    ne(x(this, Et), t, !0)
  }
  get storeTabIndex() {
    return ee(x(this, Tt))
  }
  set storeTabIndex(t) {
    ne(x(this, Tt), t, !0)
  }
  get muted() {
    return ee(x(this, St))
  }
  set muted(t) {
    ne(x(this, St), t, !0)
  }
  get language() {
    return ee(x(this, At))
  }
  set language(t) {
    ne(x(this, At), t, !0)
  }
  get map() {
    return ee(x(this, Ot))
  }
  set map(t) {
    ne(x(this, Ot), t)
  }
  get automatedClicks() {
    return ee(x(this, Rt))
  }
  set automatedClicks(t) {
    ne(x(this, Rt), t, !0)
  }
  get theme() {
    return ee(x(this, Dt))
  }
  set theme(t) {
    ne(x(this, Dt), t, !0), localStorage.setItem(cr, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return ee(x(this, It))
  }
  get captcha() {
    return As ? ee(x(this, Nt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    ne(x(this, Nt), t, !0)
  }
}
vt = new WeakMap, Et = new WeakMap, Tt = new WeakMap, St = new WeakMap, At = new WeakMap, Ot = new WeakMap, Rt = new WeakMap, Dt = new WeakMap, It = new WeakMap, Nt = new WeakMap;
const Yr = new Ts;

function Ss() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const As = fo.toLowerCase() !== "false",
  Os = `
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
async function Rs() {
  try {
    const n = await fetch(`${Pn}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await Ds(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Ds(n, t) {
  return new Promise(e => {
    const r = new Blob([Os], {
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
const Jr = 3;
var Ct, kt;
class Is {
  constructor() {
    Y(this, Ct, ce(null));
    Y(this, kt, ce(0))
  }
  get current() {
    return ee(x(this, Ct))
  }
  set current(t) {
    ne(x(this, Ct), t, !0)
  }
  get errorCount() {
    return ee(x(this, kt))
  }
  set errorCount(t) {
    ne(x(this, kt), t, !0)
  }
}
Ct = new WeakMap, kt = new WeakMap;
const Te = new Is;
async function ur(n) {
  if (n === 1) return Ns();
  if (n === 2) {
    const t = await Qr();
    return t ? lr("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await Cs();
    return t ? lr("hcaptcha", t) : !1
  }
  return n === 4 ? ks() : !1
}
async function Ns() {
  for (let n = 0; n < Jr; n++) try {
    const t = await Rs();
    if (!t) continue;
    return await je.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function lr(n, t) {
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

function Qr() {
  return Zr(2)
}

function Cs() {
  return Zr(3)
}

function Zr(n) {
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

function ks() {
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

function zE(n) {
  const t = Te.current;
  !t || t.tier === 4 || (t.resolve(n), Te.current = null)
}

function $E() {
  const n = Te.current;
  !n || n.tier === 4 || (Te.errorCount += 1, Te.errorCount >= Jr && (n.resolve(void 0), Te.current = null))
}

function qE() {
  const n = Te.current;
  !n || n.tier !== 4 || (n.resolve(!0), Te.current = null)
}

function KE() {
  const n = Te.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), Te.current = null)
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const Ps = () => "Your account has been suspended for breaking the rules",
  xs = () => "Sua conta foi suspensa por quebrar as regras",
  Ls = () => "您的账号因违反规则已被暂停",
  Ms = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Bs = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Hs = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Us = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Fs = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  js = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Gs = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ws = () => "Ваш обліковий запис було призупинено за порушення правил",
  Vs = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  zs = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ps() : e === "pt" ? xs() : e === "ch" ? Ls() : e === "de" ? Ms() : e === "es" ? Bs() : e === "fr" ? Hs() : e === "it" ? Us() : e === "jp" ? Fs() : e === "pl" ? js() : e === "ru" ? Gs() : e === "uk" ? Ws() : Vs()
  },
  $s = () => "Alliance name already taken",
  qs = () => "Já possui uma aliança com esse nome",
  Ks = () => "该联盟名称已被占用",
  Xs = () => "Der Allianzname ist bereits vergeben",
  Ys = () => "Ese nombre de alianza ya está en uso",
  Js = () => "Ce nom d’alliance est déjà pris",
  Qs = () => "Esiste già un'alleanza con questo nome",
  Zs = () => "このアライアンス名は既に使用されています。",
  ec = () => "Nazwa sojuszu jest już zajęta",
  tc = () => "Такое название альянса уже используется",
  nc = () => "Назва альянсу вже зайнята",
  rc = () => "Tên liên minh đã được sử dụng",
  oc = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? $s() : e === "pt" ? qs() : e === "ch" ? Ks() : e === "de" ? Xs() : e === "es" ? Ys() : e === "fr" ? Js() : e === "it" ? Qs() : e === "jp" ? Zs() : e === "pl" ? ec() : e === "ru" ? tc() : e === "uk" ? nc() : rc()
  },
  ac = () => "Alliance name exceeded the maximum number of characters",
  ic = () => "O nome da aliança excedeu o número máximo de caracteres",
  sc = () => "联盟名称超过最大字符数限制",
  cc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  uc = () => "El nombre de la alianza superó el número máximo de caracteres",
  lc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  dc = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  _c = () => "アライアンス名が最大文字数を超えています。",
  fc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  pc = () => "Название альянса превышает максимальную длину",
  mc = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  hc = () => "Tên liên minh vượt quá số ký tự cho phép",
  gc = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ac() : e === "pt" ? ic() : e === "ch" ? sc() : e === "de" ? cc() : e === "es" ? uc() : e === "fr" ? lc() : e === "it" ? dc() : e === "jp" ? _c() : e === "pl" ? fc() : e === "ru" ? pc() : e === "uk" ? mc() : hc()
  },
  wc = () => "Alliance with empty name",
  yc = () => "Aliança com nome vazio",
  bc = () => "名称为空的联盟",
  vc = () => "Allianz mit leerem Namen",
  Ec = () => "Alianza con nombre vacío",
  Tc = () => "Alliance avec nom vide",
  Sc = () => "Alleanza con nome vuoto",
  Ac = () => "名前が空のアライアンスです。",
  Oc = () => "Sojusz z pustą nazwą",
  Rc = () => "Альянс с пустым названием",
  Dc = () => "Альянс із порожньою назвою",
  Ic = () => "Liên minh không có tên",
  Nc = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? wc() : e === "pt" ? yc() : e === "ch" ? bc() : e === "de" ? vc() : e === "es" ? Ec() : e === "fr" ? Tc() : e === "it" ? Sc() : e === "jp" ? Ac() : e === "pl" ? Oc() : e === "ru" ? Rc() : e === "uk" ? Dc() : Ic()
  },
  Cc = () => "Botting",
  kc = () => "Uso de bots",
  Pc = () => "脚本",
  xc = () => "Bot-Nutzung",
  Lc = () => "Botting",
  Mc = () => "Bots",
  Bc = () => "Uso di bot",
  Hc = () => "ボット使用",
  Uc = () => "Botting",
  Fc = () => "Боттинг",
  jc = () => "Боти",
  Gc = () => "Botting",
  Wc = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Cc() : e === "pt" ? kc() : e === "ch" ? Pc() : e === "de" ? xc() : e === "es" ? Lc() : e === "fr" ? Mc() : e === "it" ? Bc() : e === "jp" ? Hc() : e === "pl" ? Uc() : e === "ru" ? Fc() : e === "uk" ? jc() : Gc()
  },
  Vc = () => "Use of software to completely automate painting",
  zc = () => "Uso de software para pintar de forma completamente automatizada ",
  $c = () => "使用软件完全自动化绘制",
  qc = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Kc = () => "Uso de software para automatizar completamente la pintura",
  Xc = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Yc = () => "Uso di software per dipingere in modo completamente automatizzato",
  Jc = () => "ペイントを完全に自動化するソフトウェアの使用",
  Qc = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Zc = () => "Использование программ для полной автоматизации рисования",
  eu = () => "Використання програм, які повністю автоматизують малювання",
  tu = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  nu = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Vc() : e === "pt" ? zc() : e === "ch" ? $c() : e === "de" ? qc() : e === "es" ? Kc() : e === "fr" ? Xc() : e === "it" ? Yc() : e === "jp" ? Jc() : e === "pl" ? Qc() : e === "ru" ? Zc() : e === "uk" ? eu() : tu()
  },
  ru = () => "Breaking the rules",
  ou = () => "Quebrar as regras",
  au = () => "违反规则",
  iu = () => "Regeln brechen",
  su = () => "Romper las reglas",
  cu = () => "Violation des règles",
  uu = () => "Violazione delle regole",
  lu = () => "ルール違反",
  du = () => "Łamanie zasad",
  _u = () => "Нарушение правил",
  fu = () => "Порушення правил",
  pu = () => "Vi phạm luật",
  mu = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ru() : e === "pt" ? ou() : e === "ch" ? au() : e === "de" ? iu() : e === "es" ? su() : e === "fr" ? cu() : e === "it" ? uu() : e === "jp" ? lu() : e === "pl" ? du() : e === "ru" ? _u() : e === "uk" ? fu() : pu()
  },
  hu = () => "You have broken one of Wplace's rules",
  gu = () => "Você quebrou uma das regras do Wplace",
  wu = () => "你违反了 Wplace 的一项规则",
  yu = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  bu = () => "Has infringido una de las reglas de Wplace",
  vu = () => "Vous avez enfreint l’une des règles de Wplace",
  Eu = () => "Hai infranto una delle regole di Wplace",
  Tu = () => "Wplaceのルールのいずれかに違反しました。",
  Su = () => "Złamałeś jedną z zasad Wplace",
  Au = () => "Вы нарушили одно из правил Wplace",
  Ou = () => "Ви порушили одне з правил Wplace",
  Ru = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Du = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? hu() : e === "pt" ? gu() : e === "ch" ? wu() : e === "de" ? yu() : e === "es" ? bu() : e === "fr" ? vu() : e === "it" ? Eu() : e === "jp" ? Tu() : e === "pl" ? Su() : e === "ru" ? Au() : e === "uk" ? Ou() : Ru()
  },
  Iu = () => "You cannot paint over event pixels",
  Nu = () => "Você não pode pintar sobre pixels de eventos",
  Cu = () => "你不能覆盖活动像素",
  ku = () => "Du kannst nicht über Event-Pixel malen",
  Pu = () => "No puedes pintar sobre píxeles de evento",
  xu = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Lu = () => "Non puoi dipingere sopra i pixel dell'evento",
  Mu = () => "イベント用のピクセルの上には塗れません。",
  Bu = () => "Nie możesz malować po pikselach wydarzenia",
  Hu = () => "Вы не можете рисовать по пикселям события",
  Uu = () => "Ви не можете малювати поверх пікселів події",
  Fu = () => "Bạn không thể tô lên pixel sự kiện",
  dr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Iu() : e === "pt" ? Nu() : e === "ch" ? Cu() : e === "de" ? ku() : e === "es" ? Pu() : e === "fr" ? xu() : e === "it" ? Lu() : e === "jp" ? Mu() : e === "pl" ? Bu() : e === "ru" ? Hu() : e === "uk" ? Uu() : Fu()
  },
  ju = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Gu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Wu = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Vu = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  zu = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  $u = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  qu = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Ku = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Xu = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Yu = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Ju = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Qu = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Zu = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ju() : e === "pt" ? Gu() : e === "ch" ? Wu() : e === "de" ? Vu() : e === "es" ? zu() : e === "fr" ? $u() : e === "it" ? qu() : e === "jp" ? Ku() : e === "pl" ? Xu() : e === "ru" ? Yu() : e === "uk" ? Ju() : Qu()
  },
  el = () => "Challenge verification not completed",
  tl = () => "Verificação do desafio não concluída",
  nl = () => "挑战验证未完成",
  rl = () => "Herausforderungsverifizierung nicht abgeschlossen",
  ol = () => "Verificación del desafío no completada",
  al = () => "Vérification du défi non terminée",
  il = () => "Verifica della sfida non completata",
  sl = () => "チャレンジ検証が完了していません",
  cl = () => "Weryfikacja wyzwania niezakończona",
  ul = () => "Верификация вызова не завершена",
  ll = () => "Перевірку виклику не завершено",
  dl = () => "Xác minh thử thách chưa hoàn thành",
  bn = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? el() : e === "pt" ? tl() : e === "ch" ? nl() : e === "de" ? rl() : e === "es" ? ol() : e === "fr" ? al() : e === "it" ? il() : e === "jp" ? sl() : e === "pl" ? cl() : e === "ru" ? ul() : e === "uk" ? ll() : dl()
  },
  _l = () => "Couldn't complete the purchase. This item does not exist.",
  fl = () => "Não foi possível concluir a compra. Este item não existe.",
  pl = () => "无法完成购买。该物品不存在。",
  ml = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  hl = () => "No se pudo completar la compra. Este ítem no existe.",
  gl = () => "Achat impossible. Cet objet n’existe pas.",
  wl = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  yl = () => "購入を完了できませんでした。このアイテムは存在しません。",
  bl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  vl = () => "Не удалось завершить покупку. Этот предмет не существует.",
  El = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Tl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  _r = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? _l() : e === "pt" ? fl() : e === "ch" ? pl() : e === "de" ? ml() : e === "es" ? hl() : e === "fr" ? gl() : e === "it" ? wl() : e === "jp" ? yl() : e === "pl" ? bl() : e === "ru" ? vl() : e === "uk" ? El() : Tl()
  },
  Sl = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Al = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Ol = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Rl = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Dl = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Il = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Nl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Cl = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  kl = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  Pl = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  xl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Ll = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Ml = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Sl() : e === "pt" ? Al() : e === "ch" ? Ol() : e === "de" ? Rl() : e === "es" ? Dl() : e === "fr" ? Il() : e === "it" ? Nl() : e === "jp" ? Cl() : e === "pl" ? kl() : e === "ru" ? Pl() : e === "uk" ? xl() : Ll()
  },
  Bl = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Hl = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Ul = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Fl = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  jl = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Gl = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Wl = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Vl = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  zl = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  $l = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  ql = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Kl = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  fr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Bl() : e === "pt" ? Hl() : e === "ch" ? Ul() : e === "de" ? Fl() : e === "es" ? jl() : e === "fr" ? Gl() : e === "it" ? Wl() : e === "jp" ? Vl() : e === "pl" ? zl() : e === "ru" ? $l() : e === "uk" ? ql() : Kl()
  },
  Xl = () => "Doxxing",
  Yl = () => "Doxxing",
  Jl = () => "人肉搜索",
  Ql = () => "Doxxing",
  Zl = () => "Doxxing",
  ed = () => "Doxxing",
  td = () => "Doxxing",
  nd = () => "ドックス（Doxxing）",
  rd = () => "Doxxing",
  od = () => "Докcинг",
  ad = () => "Докcинг",
  id = () => "Doxxing",
  sd = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Xl() : e === "pt" ? Yl() : e === "ch" ? Jl() : e === "de" ? Ql() : e === "es" ? Zl() : e === "fr" ? ed() : e === "it" ? td() : e === "jp" ? nd() : e === "pl" ? rd() : e === "ru" ? od() : e === "uk" ? ad() : id()
  },
  cd = () => "Released other's personal information without their consent",
  ud = () => "Vazar informações pessoais de terceiros sem consentimento",
  ld = () => "在未获同意的情况下公开他人个人信息",
  dd = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  _d = () => "Divulgó información personal de otra persona sin su consentimiento",
  fd = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  pd = () => "Diffusione di informazioni personali di terzi senza consenso",
  md = () => "他人の個人情報を同意なく公開した。",
  hd = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  gd = () => "Публикация личной информации других людей без их согласия",
  wd = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  yd = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  bd = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? cd() : e === "pt" ? ud() : e === "ch" ? ld() : e === "de" ? dd() : e === "es" ? _d() : e === "fr" ? fd() : e === "it" ? pd() : e === "jp" ? md() : e === "pl" ? hd() : e === "ru" ? gd() : e === "uk" ? wd() : yd()
  },
  vd = () => "This email is already in use.",
  Ed = () => "Este e-mail já está em uso.",
  Td = () => "This email is already in use.",
  Sd = () => "This email is already in use.",
  Ad = () => "Este correo electrónico ya está en uso.",
  Od = () => "This email is already in use.",
  Rd = () => "Questa email è già in uso.",
  Dd = () => "This email is already in use.",
  Id = () => "This email is already in use.",
  Nd = () => "This email is already in use.",
  Cd = () => "This email is already in use.",
  kd = () => "This email is already in use.",
  Pd = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? vd() : e === "pt" ? Ed() : e === "ch" ? Td() : e === "de" ? Sd() : e === "es" ? Ad() : e === "fr" ? Od() : e === "it" ? Rd() : e === "jp" ? Dd() : e === "pl" ? Id() : e === "ru" ? Nd() : e === "uk" ? Cd() : kd()
  },
  xd = n => `This email is already in use by user #${n.userId}.`,
  Ld = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  Md = n => `This email is already in use by user #${n.userId}.`,
  Bd = n => `This email is already in use by user #${n.userId}.`,
  Hd = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  Ud = n => `This email is already in use by user #${n.userId}.`,
  Fd = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  jd = n => `This email is already in use by user #${n.userId}.`,
  Gd = n => `This email is already in use by user #${n.userId}.`,
  Wd = n => `This email is already in use by user #${n.userId}.`,
  Vd = n => `This email is already in use by user #${n.userId}.`,
  zd = n => `This email is already in use by user #${n.userId}.`,
  $d = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? xd(n) : e === "pt" ? Ld(n) : e === "ch" ? Md(n) : e === "de" ? Bd(n) : e === "es" ? Hd(n) : e === "fr" ? Ud(n) : e === "it" ? Fd(n) : e === "jp" ? jd(n) : e === "pl" ? Gd(n) : e === "ru" ? Wd(n) : e === "uk" ? Vd(n) : zd(n)
  },
  qd = () => "Enter a valid email address.",
  Kd = () => "Informe um endereço de e-mail válido.",
  Xd = () => "Enter a valid email address.",
  Yd = () => "Enter a valid email address.",
  Jd = () => "Introduce una dirección de correo electrónico válida.",
  Qd = () => "Enter a valid email address.",
  Zd = () => "Inserisci un indirizzo email valido.",
  e_ = () => "Enter a valid email address.",
  t_ = () => "Enter a valid email address.",
  n_ = () => "Enter a valid email address.",
  r_ = () => "Enter a valid email address.",
  o_ = () => "Enter a valid email address.",
  a_ = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? qd() : e === "pt" ? Kd() : e === "ch" ? Xd() : e === "de" ? Yd() : e === "es" ? Jd() : e === "fr" ? Qd() : e === "it" ? Zd() : e === "jp" ? e_() : e === "pl" ? t_() : e === "ru" ? n_() : e === "uk" ? r_() : o_()
  },
  i_ = n => `Error while painting: ${n.err}`,
  s_ = n => `Erro enquanto pinta: ${n.err}`,
  c_ = n => `绘制时出错：${n.err}`,
  u_ = n => `Fehler beim Malen: ${n.err}`,
  l_ = n => `Error al pintar: ${n.err}`,
  d_ = n => `Erreur lors de la peinture : ${n.err}`,
  __ = n => `Errore durante la pittura: ${n.err}`,
  f_ = n => `ペイント中にエラーが発生しました: ${n.err}`,
  p_ = n => `Błąd podczas malowania: ${n.err}`,
  m_ = n => `Ошибка при рисовании: ${n.err}`,
  h_ = n => `Помилка під час малювання: ${n.err}`,
  g_ = n => `Lỗi khi tô: ${n.err}`,
  w_ = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? i_(n) : e === "pt" ? s_(n) : e === "ch" ? c_(n) : e === "de" ? u_(n) : e === "es" ? l_(n) : e === "fr" ? d_(n) : e === "it" ? __(n) : e === "jp" ? f_(n) : e === "pl" ? p_(n) : e === "ru" ? m_(n) : e === "uk" ? h_(n) : g_(n)
  },
  y_ = () => "Exceeded maximum number of characters",
  b_ = () => "Excedeu o número máximo de caracteres permitidos",
  v_ = () => "超出最大字符数",
  E_ = () => "Maximale Zeichenanzahl überschritten",
  T_ = () => "Se excedió el número máximo de caracteres",
  S_ = () => "Nombre maximal de caractères dépassé",
  A_ = () => "Numero massimo di caratteri superato",
  O_ = () => "最大文字数を超過しました",
  R_ = () => "Przekroczono maksymalną liczbę znaków",
  D_ = () => "Превышено максимальное количество символов",
  I_ = () => "Перевищено максимальну кількість символів",
  N_ = () => "Đã vượt quá số ký tự tối đa",
  C_ = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? y_() : e === "pt" ? b_() : e === "ch" ? v_() : e === "de" ? E_() : e === "es" ? T_() : e === "fr" ? S_() : e === "it" ? A_() : e === "jp" ? O_() : e === "pl" ? R_() : e === "ru" ? D_() : e === "uk" ? I_() : N_()
  },
  k_ = () => "Verification code expired. Please request a new one.",
  P_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  x_ = () => "验证码已过期，请重新获取。",
  L_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  M_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  B_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  H_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  U_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  F_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  j_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  G_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  W_ = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  V_ = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? k_() : e === "pt" ? P_() : e === "ch" ? x_() : e === "de" ? L_() : e === "es" ? M_() : e === "fr" ? B_() : e === "it" ? H_() : e === "jp" ? U_() : e === "pl" ? F_() : e === "ru" ? j_() : e === "uk" ? G_() : W_()
  },
  z_ = () => "Griefing",
  $_ = () => "Griefing",
  q_ = () => "破坏行为",
  K_ = () => "Griefing",
  X_ = () => "Griefing",
  Y_ = () => "Griefing",
  J_ = () => "Griefing",
  Q_ = () => "グリーフィング",
  Z_ = () => "Griefing",
  ef = () => "Гриферство",
  tf = () => "Гріфінг",
  nf = () => "Griefing",
  rf = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? z_() : e === "pt" ? $_() : e === "ch" ? q_() : e === "de" ? K_() : e === "es" ? X_() : e === "fr" ? Y_() : e === "it" ? J_() : e === "jp" ? Q_() : e === "pl" ? Z_() : e === "ru" ? ef() : e === "uk" ? tf() : nf()
  },
  of = () => "Messed up with other's artworks",
  af = () => "Estragou os desenhos dos outros",
  sf = () => "破坏了他人的作品",
  cf = () => "Kunstwerke anderer beschädigt",
  uf = () => "Arruinó las obras de arte de otros",
  lf = () => "A abîmé les œuvres des autres",
  df = () => "Ha rovinato i disegni degli altri",
  _f = () => "他人の作品を荒らした",
  ff = () => "Zniszczył prace innych",
  pf = () => "Испортил чужие рисунки",
  mf = () => "Зіпсував роботи інших",
  hf = () => "Phá hỏng tranh của người khác",
  gf = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? of() : e === "pt" ? af() : e === "ch" ? sf() : e === "de" ? cf() : e === "es" ? uf() : e === "fr" ? lf() : e === "it" ? df() : e === "jp" ? _f() : e === "pl" ? ff() : e === "ru" ? pf() : e === "uk" ? mf() : hf()
  },
  wf = () => "Hate speech",
  yf = () => "Discurso de Ódio",
  bf = () => "仇恨言论",
  vf = () => "Hassrede",
  Ef = () => "Discurso de odio",
  Tf = () => "Discours haineux",
  Sf = () => "Discorso d'odio",
  Af = () => "ヘイトスピーチ",
  Of = () => "Mowa nienawiści",
  Rf = () => "Речь ненависти",
  Df = () => "Мова ворожнечі",
  If = () => "Ngôn từ thù hằn",
  Nf = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? wf() : e === "pt" ? yf() : e === "ch" ? bf() : e === "de" ? vf() : e === "es" ? Ef() : e === "fr" ? Tf() : e === "it" ? Sf() : e === "jp" ? Af() : e === "pl" ? Of() : e === "ru" ? Rf() : e === "uk" ? Df() : If()
  },
  Cf = () => "Racism, homophobia, hate groups, ...",
  kf = () => "Racismo, homofobia, grupos de ódio, ...",
  Pf = () => "种族主义、恐同、仇恨团体等",
  xf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Lf = () => "Racismo, homofobia, grupos de odio, ...",
  Mf = () => "Racisme, homophobie, groupes haineux, ...",
  Bf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Hf = () => "人種差別、同性愛差別、ヘイト団体など。",
  Uf = () => "Rasizm, homofobia, grupy nienawiści, ...",
  Ff = () => "Расизм, гомофобия, группы ненависти и т.п.",
  jf = () => "Расизм, гомофобія, групи ненависті, ...",
  Gf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Wf = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Cf() : e === "pt" ? kf() : e === "ch" ? Pf() : e === "de" ? xf() : e === "es" ? Lf() : e === "fr" ? Mf() : e === "it" ? Bf() : e === "jp" ? Hf() : e === "pl" ? Uf() : e === "ru" ? Ff() : e === "uk" ? jf() : Gf()
  },
  Vf = () => "Inappropriate content",
  zf = () => "Conteúdo inapropriado",
  $f = () => "不当内容",
  qf = () => "Unangemessene Inhalte",
  Kf = () => "Contenido inapropiado",
  Xf = () => "Contenu inapproprié",
  Yf = () => "Contenuto inappropriato",
  Jf = () => "不適切なコンテンツ",
  Qf = () => "Nieodpowiednie treści",
  Zf = () => "Неприемлемый контент",
  ep = () => "Неприйнятний вміст",
  tp = () => "Nội dung không phù hợp",
  np = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Vf() : e === "pt" ? zf() : e === "ch" ? $f() : e === "de" ? qf() : e === "es" ? Kf() : e === "fr" ? Xf() : e === "it" ? Yf() : e === "jp" ? Jf() : e === "pl" ? Qf() : e === "ru" ? Zf() : e === "uk" ? ep() : tp()
  },
  rp = () => "Explicit, hateful, or illegal content",
  op = () => "Conteúdo explícito, de ódio ou ilegal",
  ap = () => "露骨、仇恨或非法内容",
  ip = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  sp = () => "Contenido explícito, de odio o ilegal",
  cp = () => "Contenu explicite, haineux ou illégal",
  up = () => "Contenuto esplicito, d'odio o illegale",
  lp = () => "露骨、差別的、または違法なコンテンツ",
  dp = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  _p = () => "Откровенный, разжигающий ненависть или незаконный контент",
  fp = () => "Відвертий, ворожий або незаконний вміст",
  pp = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  mp = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? rp() : e === "pt" ? op() : e === "ch" ? ap() : e === "de" ? ip() : e === "es" ? sp() : e === "fr" ? cp() : e === "it" ? up() : e === "jp" ? lp() : e === "pl" ? dp() : e === "ru" ? _p() : e === "uk" ? fp() : pp()
  },
  hp = () => "Invalid captcha. Please try again.",
  gp = () => "Captcha inválido. Por favor, tente novamente.",
  wp = () => "验证码无效，请重试。",
  yp = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  bp = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  vp = () => "Captcha invalide. Veuillez réessayer.",
  Ep = () => "Captcha non valido. Riprova.",
  Tp = () => "キャプチャが無効です。もう一度お試しください。",
  Sp = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Ap = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Op = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Rp = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Dp = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? hp() : e === "pt" ? gp() : e === "ch" ? wp() : e === "de" ? yp() : e === "es" ? bp() : e === "fr" ? vp() : e === "it" ? Ep() : e === "jp" ? Tp() : e === "pl" ? Sp() : e === "ru" ? Ap() : e === "uk" ? Op() : Rp()
  },
  Ip = () => "Invalid challenge response",
  Np = () => "Resposta de desafio inválida",
  Cp = () => "质询响应无效",
  kp = () => "Ungültige Challenge-Antwort",
  Pp = () => "Respuesta de desafío inválida",
  xp = () => "Réponse au défi invalide",
  Lp = () => "Risposta alla sfida non valida",
  Mp = () => "無効なチャレンジ応答",
  Bp = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Hp = () => "Неверный ответ на вызов",
  Up = () => "Недійсна відповідь на виклик",
  Fp = () => "Phản hồi thử thách không hợp lệ",
  jp = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ip() : e === "pt" ? Np() : e === "ch" ? Cp() : e === "de" ? kp() : e === "es" ? Pp() : e === "fr" ? xp() : e === "it" ? Lp() : e === "jp" ? Mp() : e === "pl" ? Bp() : e === "ru" ? Hp() : e === "uk" ? Up() : Fp()
  },
  Gp = () => "The verification code is incorrect. Please check it and try again.",
  Wp = () => "Código inválido",
  Vp = () => "验证码不正确。请检查后重试。",
  zp = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  $p = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  qp = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  Kp = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  Xp = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Yp = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  Jp = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  Qp = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  Zp = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  em = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Gp() : e === "pt" ? Wp() : e === "ch" ? Vp() : e === "de" ? zp() : e === "es" ? $p() : e === "fr" ? qp() : e === "it" ? Kp() : e === "jp" ? Xp() : e === "pl" ? Yp() : e === "ru" ? Jp() : e === "uk" ? Qp() : Zp()
  },
  tm = () => "Invalid discord.",
  nm = () => "Discord inválido.",
  rm = () => "无效的 Discord。",
  om = () => "Ungültiger Discord.",
  am = () => "Discord inválido.",
  im = () => "Discord invalide.",
  sm = () => "Discord non valido.",
  cm = () => "無効なDiscordアカウントです。",
  um = () => "Nieprawidłowy Discord.",
  lm = () => "Неверный Discord.",
  dm = () => "Некоректний Discord.",
  _m = () => "Discord không hợp lệ.",
  fm = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? tm() : e === "pt" ? nm() : e === "ch" ? rm() : e === "de" ? om() : e === "es" ? am() : e === "fr" ? im() : e === "it" ? sm() : e === "jp" ? cm() : e === "pl" ? um() : e === "ru" ? lm() : e === "uk" ? dm() : _m()
  },
  pm = () => "The name contains disallowed characters or words. Please choose a different name.",
  mm = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  hm = () => "名称包含禁止的字符或词语，请选择其他名称。",
  gm = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  wm = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  ym = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  bm = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  vm = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Em = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Tm = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Sm = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Am = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  pr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? pm() : e === "pt" ? mm() : e === "ch" ? hm() : e === "de" ? gm() : e === "es" ? wm() : e === "fr" ? ym() : e === "it" ? bm() : e === "jp" ? vm() : e === "pl" ? Em() : e === "ru" ? Tm() : e === "uk" ? Sm() : Am()
  },
  Om = () => "Please enter a valid phone number with country code.",
  Rm = () => "Insira um número de telefone válido com código do país.",
  Dm = () => "请输入带国家代码的有效电话号码。",
  Im = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Nm = () => "Introduce un número de teléfono válido con código de país.",
  Cm = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  km = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Pm = () => "国番号付きの有効な電話番号を入力してください。",
  xm = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Lm = () => "Введите действительный номер телефона с кодом страны.",
  Mm = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Bm = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Hm = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Om() : e === "pt" ? Rm() : e === "ch" ? Dm() : e === "de" ? Im() : e === "es" ? Nm() : e === "fr" ? Cm() : e === "it" ? km() : e === "jp" ? Pm() : e === "pl" ? xm() : e === "ru" ? Lm() : e === "uk" ? Mm() : Bm()
  },
  Um = () => "Phone number not supported. Please try another number.",
  Fm = () => "Número de telefone não suportado. Por favor, tente outro número.",
  jm = () => "不支持此电话号码。请尝试其他号码。",
  Gm = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  Wm = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  Vm = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  zm = () => "Numero di telefono non supportato. Prova con un altro numero.",
  $m = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  qm = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  Km = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  Xm = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  Ym = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  Jm = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Um() : e === "pt" ? Fm() : e === "ch" ? jm() : e === "de" ? Gm() : e === "es" ? Wm() : e === "fr" ? Vm() : e === "it" ? zm() : e === "jp" ? $m() : e === "pl" ? qm() : e === "ru" ? Km() : e === "uk" ? Xm() : Ym()
  },
  Qm = () => "The new leader must be a member of the alliance",
  Zm = () => "O novo líder deve ser um membro da aliança",
  eh = () => "新盟主必须是联盟成员",
  th = () => "Der neue Anführer muss Mitglied der Allianz sein",
  nh = () => "El nuevo líder debe ser miembro de la alianza",
  rh = () => "Le nouveau chef doit être membre de l’alliance",
  oh = () => "Il nuovo leader deve essere un membro dell'alleanza",
  ah = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  ih = () => "Nowy lider musi być członkiem sojuszu",
  sh = () => "Новый лидер должен быть участником альянса",
  ch = () => "Новий лідер має бути учасником альянсу",
  uh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  lh = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Qm() : e === "pt" ? Zm() : e === "ch" ? eh() : e === "de" ? th() : e === "es" ? nh() : e === "fr" ? rh() : e === "it" ? oh() : e === "jp" ? ah() : e === "pl" ? ih() : e === "ru" ? sh() : e === "uk" ? ch() : uh()
  },
  dh = () => "Leaderboard is temporarily disabled",
  _h = () => "O ranking está temporariamente desativado",
  fh = () => "排行榜已暂时停用",
  ph = () => "Die Bestenliste ist vorübergehend deaktiviert",
  mh = () => "La clasificación está deshabilitada temporalmente",
  hh = () => "Le classement est temporairement désactivé",
  gh = () => "La classifica è temporaneamente disattivata",
  wh = () => "ランキングは一時的に無効になっています。",
  yh = () => "Ranking jest tymczasowo wyłączony",
  bh = () => "Таблица лидеров временно отключена",
  vh = () => "Таблиця лідерів тимчасово вимкнена",
  Eh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  $e = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? dh() : e === "pt" ? _h() : e === "ch" ? fh() : e === "de" ? ph() : e === "es" ? mh() : e === "fr" ? hh() : e === "it" ? gh() : e === "jp" ? wh() : e === "pl" ? yh() : e === "ru" ? bh() : e === "uk" ? vh() : Eh()
  },
  Th = () => "Location name is too big (max. 128 characters)",
  Sh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Ah = () => "位置名称过长（最大 128 个字符）",
  Oh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Rh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Dh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Ih = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Nh = () => "場所の名前が長すぎます（最大128文字）。",
  Ch = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  kh = () => "Название локации слишком длинное (макс. 128 символов)",
  Ph = () => "Назва локації надто довга (макс. 128 символів)",
  xh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Lh = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Th() : e === "pt" ? Sh() : e === "ch" ? Ah() : e === "de" ? Oh() : e === "es" ? Rh() : e === "fr" ? Dh() : e === "it" ? Ih() : e === "jp" ? Nh() : e === "pl" ? Ch() : e === "ru" ? kh() : e === "uk" ? Ph() : xh()
  },
  Mh = () => "Multi-accounting",
  Bh = () => "Múltiplas contas",
  Hh = () => "多账号",
  Uh = () => "Multi-Accounting",
  Fh = () => "Multi-cuentas",
  jh = () => "Multi-comptes",
  Gh = () => "Multi-account",
  Wh = () => "複数アカウント使用",
  Vh = () => "Multi-konta",
  zh = () => "Мультиаккаунт",
  $h = () => "Мультиакаунтинг",
  qh = () => "Nhiều tài khoản",
  Kh = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Mh() : e === "pt" ? Bh() : e === "ch" ? Hh() : e === "de" ? Uh() : e === "es" ? Fh() : e === "fr" ? jh() : e === "it" ? Gh() : e === "jp" ? Wh() : e === "pl" ? Vh() : e === "ru" ? zh() : e === "uk" ? $h() : qh()
  },
  Xh = () => "Use more than one account to paint pixels",
  Yh = () => "Usar mais de uma conta para pintar",
  Jh = () => "使用多个账号绘制像素",
  Qh = () => "Mehr als ein Konto zum Malen verwenden",
  Zh = () => "Uso de más de una cuenta para pintar píxeles",
  eg = () => "Utiliser plus d’un compte pour peindre",
  tg = () => "Usare più di un account per dipingere",
  ng = () => "複数のアカウントを使ってピクセルを塗った。",
  rg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  og = () => "Использование более одного аккаунта для рисования",
  ag = () => "Використання більше ніж одного акаунта для малювання",
  ig = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  sg = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Xh() : e === "pt" ? Yh() : e === "ch" ? Jh() : e === "de" ? Qh() : e === "es" ? Zh() : e === "fr" ? eg() : e === "it" ? tg() : e === "jp" ? ng() : e === "pl" ? rg() : e === "ru" ? og() : e === "uk" ? ag() : ig()
  },
  cg = n => `You can change your name again in ${n.days} days`,
  ug = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  lg = n => `你可以在 ${n.days} 天后再次修改名称`,
  dg = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  _g = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  fg = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  pg = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  mg = n => `${n.days}日後に再び名前を変更できます。`,
  hg = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  gg = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  wg = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  yg = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  bg = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? cg(n) : e === "pt" ? ug(n) : e === "ch" ? lg(n) : e === "de" ? dg(n) : e === "es" ? _g(n) : e === "fr" ? fg(n) : e === "it" ? pg(n) : e === "jp" ? mg(n) : e === "pl" ? hg(n) : e === "ru" ? gg(n) : e === "uk" ? wg(n) : yg(n)
  },
  vg = () => "No internet access or the servers are offline. Try again later.",
  Eg = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Tg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Sg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Ag = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Og = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Rg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Dg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Ig = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Ng = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Cg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  kg = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Pg = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? vg() : e === "pt" ? Eg() : e === "ch" ? Tg() : e === "de" ? Sg() : e === "es" ? Ag() : e === "fr" ? Og() : e === "it" ? Rg() : e === "jp" ? Dg() : e === "pl" ? Ig() : e === "ru" ? Ng() : e === "uk" ? Cg() : kg()
  },
  xg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Lg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Mg = () => "您无权验证电话号码。请尝试刷新页面。",
  Bg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Hg = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  Ug = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Fg = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  jg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Gg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Wg = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  Vg = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  zg = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  $g = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? xg() : e === "pt" ? Lg() : e === "ch" ? Mg() : e === "de" ? Bg() : e === "es" ? Hg() : e === "fr" ? Ug() : e === "it" ? Fg() : e === "jp" ? jg() : e === "pl" ? Gg() : e === "ru" ? Wg() : e === "uk" ? Vg() : zg()
  },
  qg = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Kg = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Xg = () => "操作不被允许。你的收藏位置可能过多。",
  Yg = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Jg = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Qg = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Zg = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  ew = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  tw = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  nw = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  rw = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  ow = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  aw = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? qg() : e === "pt" ? Kg() : e === "ch" ? Xg() : e === "de" ? Yg() : e === "es" ? Jg() : e === "fr" ? Qg() : e === "it" ? Zg() : e === "jp" ? ew() : e === "pl" ? tw() : e === "ru" ? nw() : e === "uk" ? rw() : ow()
  },
  iw = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  sw = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  cw = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  uw = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  lw = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  dw = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  _w = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  fw = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  pw = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  mw = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  hw = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  gw = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  ww = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? iw(n) : e === "pt" ? sw(n) : e === "ch" ? cw(n) : e === "de" ? uw(n) : e === "es" ? lw(n) : e === "fr" ? dw(n) : e === "it" ? _w(n) : e === "jp" ? fw(n) : e === "pl" ? pw(n) : e === "ru" ? mw(n) : e === "uk" ? hw(n) : gw(n)
  },
  yw = () => "You are trying to paint with a color you do not own",
  bw = () => "Você está tentando pintar com uma cor que não possui",
  vw = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Ew = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Tw = () => "Estás intentando pintar con un color que no posees",
  Sw = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Aw = () => "Stai cercando di dipingere con un colore che non possiedi",
  Ow = () => "所持していない色で塗ろうとしています。",
  Rw = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Dw = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Iw = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Nw = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  mr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? yw() : e === "pt" ? bw() : e === "ch" ? vw() : e === "de" ? Ew() : e === "es" ? Tw() : e === "fr" ? Sw() : e === "it" ? Aw() : e === "jp" ? Ow() : e === "pl" ? Rw() : e === "ru" ? Dw() : e === "uk" ? Iw() : Nw()
  },
  Cw = () => "Phone already used",
  kw = () => "Telefone já usado",
  Pw = () => "电话号码已被使用",
  xw = () => "Telefonnummer bereits verwendet",
  Lw = () => "Teléfono ya utilizado",
  Mw = () => "Téléphone déjà utilisé",
  Bw = () => "Telefono già utilizzato",
  Hw = () => "この電話番号は既に使用されています。",
  Uw = () => "Numer telefonu jest już używany",
  Fw = () => "Телефон уже используется",
  jw = () => "Номер телефону вже використовується",
  Gw = () => "Số điện thoại đã được sử dụng",
  Ww = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Cw() : e === "pt" ? kw() : e === "ch" ? Pw() : e === "de" ? xw() : e === "es" ? Lw() : e === "fr" ? Mw() : e === "it" ? Bw() : e === "jp" ? Hw() : e === "pl" ? Uw() : e === "ru" ? Fw() : e === "uk" ? jw() : Gw()
  },
  Vw = () => "This phone number's region is not supported",
  zw = () => "A região deste número de telefone não é suportada",
  $w = () => "此电话号码的地区不受支持",
  qw = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  Kw = () => "La región de este número de teléfono no es compatible",
  Xw = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Yw = () => "La regione di questo numero di telefono non è supportata",
  Jw = () => "この電話番号の地域はサポートされていません",
  Qw = () => "Region tego numeru telefonu nie jest obsługiwany",
  Zw = () => "Регион этого номера телефона не поддерживается",
  ey = () => "Регіон цього номера телефону не підтримується",
  ty = () => "Vùng của số điện thoại này không được hỗ trợ",
  ny = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Vw() : e === "pt" ? zw() : e === "ch" ? $w() : e === "de" ? qw() : e === "es" ? Kw() : e === "fr" ? Xw() : e === "it" ? Yw() : e === "jp" ? Jw() : e === "pl" ? Qw() : e === "ru" ? Zw() : e === "uk" ? ey() : ty()
  },
  ry = () => "Refresh your page to get the latest update",
  oy = () => "Recarregue sua página para obter as últimas atualizações",
  ay = () => "刷新页面以获取最新更新",
  iy = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  sy = () => "Actualiza la página para obtener la última versión",
  cy = () => "Actualisez la page pour obtenir les dernières mises à jour",
  uy = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  ly = () => "最新の状態にするにはページを再読み込みしてください。",
  dy = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  _y = () => "Обновите страницу, чтобы получить последние изменения",
  fy = () => "Оновіть сторінку, щоб отримати останні оновлення",
  py = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  hr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? ry() : e === "pt" ? oy() : e === "ch" ? ay() : e === "de" ? iy() : e === "es" ? sy() : e === "fr" ? cy() : e === "it" ? uy() : e === "jp" ? ly() : e === "pl" ? dy() : e === "ru" ? _y() : e === "uk" ? fy() : py()
  },
  my = () => "The request timed out. Please try again.",
  hy = () => "A solicitação expirou. Por favor, tente novamente.",
  gy = () => "请求超时。请重试。",
  wy = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  yy = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  by = () => "La requête a expiré. Veuillez réessayer.",
  vy = () => "La richiesta è scaduta. Riprova.",
  Ey = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Ty = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Sy = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Ay = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Oy = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Ry = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? my() : e === "pt" ? hy() : e === "ch" ? gy() : e === "de" ? wy() : e === "es" ? yy() : e === "fr" ? by() : e === "it" ? vy() : e === "jp" ? Ey() : e === "pl" ? Ty() : e === "ru" ? Sy() : e === "uk" ? Ay() : Oy()
  },
  Dy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Iy = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Ny = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Cy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ky = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Py = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  xy = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Ly = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  My = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  By = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Hy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Uy = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Fy = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Dy() : e === "pt" ? Iy() : e === "ch" ? Ny() : e === "de" ? Cy() : e === "es" ? ky() : e === "fr" ? Py() : e === "it" ? xy() : e === "jp" ? Ly() : e === "pl" ? My() : e === "ru" ? By() : e === "uk" ? Hy() : Uy()
  },
  jy = () => "The service is currently unavailable. Please try again later.",
  Gy = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Wy = () => "服务当前不可用。请稍后再试。",
  Vy = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  zy = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  $y = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  qy = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Ky = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Xy = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Yy = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Jy = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Qy = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Zy = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? jy() : e === "pt" ? Gy() : e === "ch" ? Wy() : e === "de" ? Vy() : e === "es" ? zy() : e === "fr" ? $y() : e === "it" ? qy() : e === "jp" ? Ky() : e === "pl" ? Xy() : e === "ru" ? Yy() : e === "uk" ? Jy() : Qy()
  },
  eb = () => "Too many attempts. Please try again later",
  tb = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  nb = () => "尝试次数过多，请稍后再试",
  rb = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  ob = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  ab = () => "Trop de tentatives. Veuillez réessayer plus tard",
  ib = () => "Troppi tentativi. Riprova più tardi.",
  sb = () => "試行回数が多すぎます。後で再度お試しください。",
  cb = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  ub = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  lb = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  db = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  gr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? eb() : e === "pt" ? tb() : e === "ch" ? nb() : e === "de" ? rb() : e === "es" ? ob() : e === "fr" ? ab() : e === "it" ? ib() : e === "jp" ? sb() : e === "pl" ? cb() : e === "ru" ? ub() : e === "uk" ? lb() : db()
  },
  _b = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  fb = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  pb = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  mb = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  hb = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  gb = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  wb = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  yb = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  bb = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  vb = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Eb = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Tb = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Sb = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? _b() : e === "pt" ? fb() : e === "ch" ? pb() : e === "de" ? mb() : e === "es" ? hb() : e === "fr" ? gb() : e === "it" ? wb() : e === "jp" ? yb() : e === "pl" ? bb() : e === "ru" ? vb() : e === "uk" ? Eb() : Tb()
  },
  Ab = () => "The typed username does not match your current username.",
  Ob = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Rb = () => "输入的用户名与当前用户名不匹配。",
  Db = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Ib = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Nb = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Cb = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  kb = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Pb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  xb = () => "Введённое имя пользователя не совпадает с текущим.",
  Lb = () => "Введене імʼя користувача не збігається з поточним.",
  Mb = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Bb = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ab() : e === "pt" ? Ob() : e === "ch" ? Rb() : e === "de" ? Db() : e === "es" ? Ib() : e === "fr" ? Nb() : e === "it" ? Cb() : e === "jp" ? kb() : e === "pl" ? Pb() : e === "ru" ? xb() : e === "uk" ? Lb() : Mb()
  },
  Hb = () => "Unexpected server error. Try again later.",
  Ub = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Fb = () => "服务器出现意外错误。请稍后再试。",
  jb = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Gb = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Wb = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Vb = () => "Errore imprevisto del server. Riprova più tardi.",
  zb = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  $b = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  qb = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Kb = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Xb = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  m = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Hb() : e === "pt" ? Ub() : e === "ch" ? Fb() : e === "de" ? jb() : e === "es" ? Gb() : e === "fr" ? Wb() : e === "it" ? Vb() : e === "jp" ? zb() : e === "pl" ? $b() : e === "ru" ? qb() : e === "uk" ? Kb() : Xb()
  },
  Yb = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Jb = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Qb = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Zb = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  e1 = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  t1 = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  n1 = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  r1 = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  o1 = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  a1 = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  i1 = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  s1 = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  c1 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Yb() : e === "pt" ? Jb() : e === "ch" ? Qb() : e === "de" ? Zb() : e === "es" ? e1() : e === "fr" ? t1() : e === "it" ? n1() : e === "jp" ? r1() : e === "pl" ? o1() : e === "ru" ? a1() : e === "uk" ? i1() : s1()
  },
  u1 = () => "VPN or proxy detected. Please disable your VPN and try again.",
  l1 = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  d1 = () => "检测到VPN或代理。请关闭VPN后重试。",
  _1 = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  f1 = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  p1 = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  m1 = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  h1 = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  g1 = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  w1 = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  y1 = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  b1 = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  v1 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? u1() : e === "pt" ? l1() : e === "ch" ? d1() : e === "de" ? _1() : e === "es" ? f1() : e === "fr" ? p1() : e === "it" ? m1() : e === "jp" ? h1() : e === "pl" ? g1() : e === "ru" ? w1() : e === "uk" ? y1() : b1()
  },
  E1 = () => "Failed to load WebAssembly module. Try to use another browser.",
  T1 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  S1 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  A1 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  O1 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  R1 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  D1 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  I1 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  N1 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  C1 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  k1 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  P1 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  x1 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? E1() : e === "pt" ? T1() : e === "ch" ? S1() : e === "de" ? A1() : e === "es" ? O1() : e === "fr" ? R1() : e === "it" ? D1() : e === "jp" ? I1() : e === "pl" ? N1() : e === "ru" ? C1() : e === "uk" ? k1() : P1()
  },
  L1 = () => "You already have this item. Please refresh the page.",
  M1 = () => "Você já possui este item. Atualize a página.",
  B1 = () => "你已经拥有此物品。请刷新页面。",
  H1 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  U1 = () => "Ya tienes este ítem. Actualiza la página.",
  F1 = () => "Vous possédez déjà cet objet. Actualisez la page.",
  j1 = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  G1 = () => "このアイテムはすでに所持しています。ページを更新してください。",
  W1 = () => "Masz już ten przedmiot. Odśwież stronę.",
  V1 = () => "У вас уже есть этот предмет. Обновите страницу.",
  z1 = () => "У вас уже є цей предмет. Оновіть сторінку.",
  $1 = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  wr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? L1() : e === "pt" ? M1() : e === "ch" ? B1() : e === "de" ? H1() : e === "es" ? U1() : e === "fr" ? F1() : e === "it" ? j1() : e === "jp" ? G1() : e === "pl" ? W1() : e === "ru" ? V1() : e === "uk" ? z1() : $1()
  },
  q1 = () => "You are already in an alliance",
  K1 = () => "Você já está em uma aliança",
  X1 = () => "你已经在一个联盟中",
  Y1 = () => "Du bist bereits in einer Allianz",
  J1 = () => "Ya estás en una alianza",
  Q1 = () => "Vous êtes déjà dans une alliance",
  Z1 = () => "Sei già in un'alleanza",
  e0 = () => "すでにアライアンスに所属しています。",
  t0 = () => "Jesteś już w sojuszu",
  n0 = () => "Вы уже состоите в альянсе",
  r0 = () => "Ви вже перебуваєте в альянсі",
  o0 = () => "Bạn đã ở trong một liên minh",
  a0 = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? q1() : e === "pt" ? K1() : e === "ch" ? X1() : e === "de" ? Y1() : e === "es" ? J1() : e === "fr" ? Q1() : e === "it" ? Z1() : e === "jp" ? e0() : e === "pl" ? t0() : e === "ru" ? n0() : e === "uk" ? r0() : o0()
  },
  i0 = () => "You are not allowed to do this",
  s0 = () => "Você não tem permissão para fazer isso",
  c0 = () => "你无权执行此操作",
  u0 = () => "Du bist dazu nicht berechtigt",
  l0 = () => "No tienes permiso para hacer esto",
  d0 = () => "Vous n’êtes pas autorisé à faire cela",
  _0 = () => "Non hai il permesso di farlo",
  f0 = () => "この操作を行う権限がありません。",
  p0 = () => "Nie masz uprawnień, aby to zrobić",
  m0 = () => "У вас нет прав для этого действия",
  h0 = () => "Ви не маєте права це робити",
  g0 = () => "Bạn không có quyền làm việc này",
  qe = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? i0() : e === "pt" ? s0() : e === "ch" ? c0() : e === "de" ? u0() : e === "es" ? l0() : e === "fr" ? d0() : e === "it" ? _0() : e === "jp" ? f0() : e === "pl" ? p0() : e === "ru" ? m0() : e === "uk" ? h0() : g0()
  },
  w0 = () => "You do not have enough Droplets to buy this item.",
  y0 = () => "Você não tem Droplets suficientes para comprar este item.",
  b0 = () => "你的 Droplets 不足，无法购买此物品。",
  v0 = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  E0 = () => "No tienes suficientes Droplets para comprar este ítem.",
  T0 = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  S0 = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  A0 = () => "このアイテムを購入するのに十分なDropletsがありません。",
  O0 = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  R0 = () => "У вас недостаточно Droplets для покупки этого предмета.",
  D0 = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  I0 = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  yr = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? w0() : e === "pt" ? y0() : e === "ch" ? b0() : e === "de" ? v0() : e === "es" ? E0() : e === "fr" ? T0() : e === "it" ? S0() : e === "jp" ? A0() : e === "pl" ? O0() : e === "ru" ? R0() : e === "uk" ? D0() : I0()
  },
  N0 = () => "You need to be logged in to paint",
  C0 = () => "Você precisa estar conectado para pintar",
  k0 = () => "你需要登录才能进行绘制",
  P0 = () => "Du musst eingeloggt sein, um zu malen",
  x0 = () => "Debes iniciar sesión para pintar",
  L0 = () => "Vous devez être connecté pour peindre",
  M0 = () => "Devi avere effettuato l'accesso per dipingere",
  B0 = () => "ペイントするにはログインが必要です。",
  H0 = () => "Musisz być zalogowany, aby malować",
  U0 = () => "Чтобы рисовать, нужно войти в аккаунт",
  F0 = () => "Щоб малювати, необхідно увійти в акаунт",
  j0 = () => "Bạn cần đăng nhập để tô",
  br = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? N0() : e === "pt" ? C0() : e === "ch" ? k0() : e === "de" ? P0() : e === "es" ? x0() : e === "fr" ? L0() : e === "it" ? M0() : e === "jp" ? B0() : e === "pl" ? H0() : e === "ru" ? U0() : e === "uk" ? F0() : j0()
  },
  G0 = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  W0 = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  V0 = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  z0 = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  $0 = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  q0 = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  K0 = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  X0 = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Y0 = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  J0 = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Q0 = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Z0 = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  ev = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? G0() : e === "pt" ? W0() : e === "ch" ? V0() : e === "de" ? z0() : e === "es" ? $0() : e === "fr" ? q0() : e === "it" ? K0() : e === "jp" ? X0() : e === "pl" ? Y0() : e === "ru" ? J0() : e === "uk" ? Q0() : Z0()
  },
  tv = n => `Your account has been suspended out until ${n.until}`,
  nv = n => `A sua conta está suspensa até ${n.until}`,
  rv = n => `你的账号已被暂停至 ${n.until}`,
  ov = n => `Dein Konto ist gesperrt bis ${n.until}`,
  av = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  iv = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  sv = n => `Il tuo account è sospeso fino al ${n.until}`,
  cv = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  uv = n => `Twoje konto zostało zawieszone do ${n.until}`,
  lv = n => `Ваш аккаунт заблокирован до ${n.until}`,
  dv = n => `Ваш акаунт призупинено до ${n.until}`,
  _v = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  vr = (n, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? tv(n) : e === "pt" ? nv(n) : e === "ch" ? rv(n) : e === "de" ? ov(n) : e === "es" ? av(n) : e === "fr" ? iv(n) : e === "it" ? sv(n) : e === "jp" ? cv(n) : e === "pl" ? uv(n) : e === "ru" ? lv(n) : e === "uk" ? dv(n) : _v(n)
  },
  fv = () => "A correction is already pending for this ticket.",
  pv = () => "Já existe uma correção pendente para este ticket.",
  mv = () => "此工单已存在待审核的更正请求。",
  hv = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  gv = () => "Ya hay una corrección pendiente para este ticket.",
  wv = () => "Une correction est déjà en attente pour ce ticket.",
  yv = () => "Una correzione è già in sospeso per questo ticket.",
  bv = () => "このチケットには未処理の修正があります。",
  vv = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Ev = () => "Для этого тикета уже есть запрос на исправление.",
  Tv = () => "Для цього тікета вже є запит на перевірці.",
  Sv = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Av = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? fv() : e === "pt" ? pv() : e === "ch" ? mv() : e === "de" ? hv() : e === "es" ? gv() : e === "fr" ? wv() : e === "it" ? yv() : e === "jp" ? bv() : e === "pl" ? vv() : e === "ru" ? Ev() : e === "uk" ? Tv() : Sv()
  },
  Ov = () => "You cannot review your own correction request.",
  Rv = () => "Você não pode revisar sua própria solicitação de correção.",
  Dv = () => "不能审核自己提交的更正请求。",
  Iv = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Nv = () => "No puedes revisar tu propia solicitud de corrección.",
  Cv = () => "Tu ne peux pas examiner ta propre demande de correction.",
  kv = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  Pv = () => "自分のリクエストはレビューできません。",
  xv = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Lv = () => "Нельзя рассматривать собственный запрос.",
  Mv = () => "Не можна перевіряти власний запит.",
  Bv = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  Hv = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Ov() : e === "pt" ? Rv() : e === "ch" ? Dv() : e === "de" ? Iv() : e === "es" ? Nv() : e === "fr" ? Cv() : e === "it" ? kv() : e === "jp" ? Pv() : e === "pl" ? xv() : e === "ru" ? Lv() : e === "uk" ? Mv() : Bv()
  },
  Uv = () => "This correction has already been reviewed.",
  Fv = () => "Esta correção já foi revisada.",
  jv = () => "此请求已被审核。",
  Gv = () => "Diese Korrektur wurde bereits geprüft.",
  Wv = () => "Esta corrección ya ha sido revisada.",
  Vv = () => "Cette correction a déjà été examinée.",
  zv = () => "Questa correzione è già stata revisionata.",
  $v = () => "このリクエストはすでにレビュー済みです。",
  qv = () => "Ta prośba została już rozpatrzona.",
  Kv = () => "Этот запрос уже рассмотрен.",
  Xv = () => "Цей запит вже перевірено.",
  Yv = () => "Yêu cầu này đã được duyệt.",
  Jv = (n = {}, t = {}) => {
    const e = t.locale ?? O();
    return e === "en" ? Uv() : e === "pt" ? Fv() : e === "ch" ? jv() : e === "de" ? Gv() : e === "es" ? Wv() : e === "fr" ? Vv() : e === "it" ? zv() : e === "jp" ? $v() : e === "pl" ? qv() : e === "ru" ? Kv() : e === "uk" ? Xv() : Yv()
  },
  Ue = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function XE(n) {
  const t = Math.floor(n / Ue.hour);
  n -= t * Ue.hour;
  const e = Math.floor(n / Ue.minute);
  n -= e * Ue.minute;
  const o = Math.floor(n / Ue.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function YE(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    o = String(n.getHours()).padStart(2, "0"),
    a = String(n.getMinutes()).padStart(2, "0"),
    i = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${o}:${a}:${i}`
}
const JE = {
    griefing: rf(),
    "multi-accounting": Kh(),
    "hate-speech": Nf(),
    bot: Wc(),
    doxxing: sd(),
    "inappropriate-content": np(),
    other: mu()
  },
  QE = {
    doxxing: bd(),
    "hate-speech": Wf(),
    griefing: gf(),
    "multi-accounting": sg(),
    bot: nu(),
    "inappropriate-content": mp(),
    other: Du()
  },
  ZE = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Er = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  eT = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  Qv = 365 * Ue.day;

function eo(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function tT(n, t = Date.now()) {
  const e = eo(n);
  return e === null ? !1 : e - t >= Qv
}

function nT(n, t = Date.now()) {
  const e = eo(n);
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
const Zv = [{
    tileSize: 1e3,
    zoom: 11
  }],
  eE = 4,
  tE = 6e3,
  nE = [{
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
  rE = {
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
  oE = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  aE = {
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
  iE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  Ze = {
    seasons: Zv,
    regionSize: eE,
    refreshIntervalMs: tE,
    colors: nE,
    products: rE,
    countries: oE,
    permissions: aE,
    settings: iE
  },
  Nn = Ze,
  sE = Ze.seasons,
  to = Ze.seasons.length - 1,
  rT = Ze.seasons[to].zoom,
  oT = Ze.seasons[to].tileSize,
  aT = Ze.permissions,
  cE = Ze.settings;

function iT(n) {
  return Nn.countries[n - 1]
}
class b extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Tr(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    let a = e[o];
    a ? a.push(r) : e[o] = [r]
  }
  return e
}

function sT(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    e[o] = r
  }
  return e
}
const uE = 30 * Ue.minute;
var Pt, xt;
class lE {
  constructor(t) {
    Y(this, Pt, ce(!0));
    Y(this, xt, ce(null));
    G(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return ee(x(this, Pt))
  }
  set online(t) {
    ne(x(this, Pt), t, !0)
  }
  get serverTimeOffsetMs() {
    return ee(x(this, xt))
  }
  set serverTimeOffsetMs(t) {
    ne(x(this, xt), t, !0)
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
    const e = Tr(t, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
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
      if (i.status === c.UNAUTHORIZED) throw new Error(br());
      if (i.status === c.FORBIDDEN) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(fr());
        const s = await i.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const u = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(vr({
            until: u.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(hr());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(mr());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(dr());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await ur(s.tier)) return this.paint(t);
            throw new Error(bn())
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
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (i.status !== c.OK) throw new b(m(), i.status);
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
    if (i.status !== c.OK) throw new b(m(), i.status);
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
      throw a === "timelapse_too_many_events" ? new b(Fy(), c.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), c.BAD_REQUEST)
    }
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (i.status !== c.OK) throw new b(m(), i.status);
    return i.json()
  }
  async sendPaintRequests(t, e, r, o) {
    const a = Tr(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
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
      if (u.status === c.UNAUTHORIZED) throw new Error(br());
      if (u.status === c.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(fr());
        const _ = await u.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const l = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(vr({
            until: l.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(hr());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(mr());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(dr());
        at.refresh()
      } else throw new Error(m())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const o = dE(t),
      a = await _E(o),
      i = new FormData;
    i.append("fingerprint", e), i.append("season", o.season.toString()), i.append("px0", o.offsetX.toString()), i.append("py0", o.offsetY.toString()), i.append("width", o.width.toString()), i.append("height", o.height.toString()), i.append("pixels", t.length.toString()), i.append("bitmap", a, "auto-painter.png"), i.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: i,
      credentials: "include"
    });
    if (s.status === c.FORBIDDEN) {
      const u = await s.json().catch(() => null);
      if (typeof(u == null ? void 0 : u.charges) == "number") throw new Error(ww({
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
      throw new Error(w_({
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
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(zs());
    if (e.status !== c.OK) throw new Error(await e.text());
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
    if (e.status === c.BAD_REQUEST) throw new Error(Hm());
    if (e.status === c.CONFLICT) throw new Error(Ww());
    if (e.status === c.FORBIDDEN) throw new Error($g());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(gr());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(ny());
    if (e.status === c.LOCKED) throw new Error(c1());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(Jm());
    if (e.status === c.NOT_ACCEPTABLE) throw new Error(v1());
    if (e.status === c.PRECONDITION_FAILED) throw new Error(Ml());
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
        "x-fp": await En()
      }
    });
    if (t.type === "otp") {
      if (r.status === c.GONE) throw new Error(V_());
      if (r.status === c.BAD_REQUEST) throw new Error(em());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(gr());
      if (r.status !== c.OK) throw new Error(m())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(jp());
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
      if (o === "invalid_name") throw new Error(pr());
      if (o === "invalid_discord") throw new Error(fm());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const a = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(bg({
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
    if (e.status === c.BAD_REQUEST) throw new Error(Bb());
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
    if (e.status === c.FORBIDDEN) throw new Error(aw());
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
    if (r.status === c.BAD_REQUEST) throw new Error(Lh());
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
    Date.now() - this.lastHotspotRequestAt < uE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(_r()) : e.status === c.FORBIDDEN ? new Error(yr()) : e.status === c.CONFLICT ? new Error(wr()) : new Error(m())
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
      throw r.error === "max_characters" ? new Error(gc()) : r.error === "name_taken" ? new Error(oc()) : r.error == "empty_name" ? new Error(Nc()) : new Error(m())
    } else throw e.status === c.FORBIDDEN ? new Error(a0()) : new Error(m())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(qe()) : e.status === c.BAD_REQUEST ? new Error(C_()) : new Error(m())
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
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(qe()) : new Error(m())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(qe()) : new Error($e())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    throw t.status === c.FORBIDDEN ? new Error(qe()) : new Error(m())
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
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (o.status !== c.OK) throw new b(m(), o.status);
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
    } else if (r.status !== c.OK) throw new b(m(), r.status)
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
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(lh()) : new Error(m())
    } else if (r.status !== c.OK) throw new b(m(), r.status)
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
    if (o.status !== c.OK) throw new b(m(), o.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== c.OK) throw new b(m(), o.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new b(m(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(qe()) : new Error(m())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(qe()) : new Error(m())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(qe()) : new Error(m())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((o, a) => Er[o.reason] - Er[a.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
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
    if (t.status !== c.OK) throw new b(m(), t.status);
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
    if (a.status !== c.OK && a.status !== c.BAD_REQUEST) throw new b(m(), a.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status);
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
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new b(Av(), c.CONFLICT) : new b(m(), c.CONFLICT)
    }
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (o.status !== c.OK) throw new b(m(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (o.status === c.FORBIDDEN) throw new b(Hv(), c.FORBIDDEN);
    if (o.status === c.CONFLICT) throw new b(Jv(), c.CONFLICT);
    if (o.status !== c.OK) throw new b(m(), o.status)
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
      throw console.error("Fetch error:", s), this.online = !1, new Error(Zu(), {
        cause: s
      })
    }
    if (r.status === c.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Sb());
    const o = ((i = r.headers.get("cf-mitigated")) == null ? void 0 : i.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (pt.setCfLikelyAutomated(!0), !await Qr()) throw new Error(bn());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(ev());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(Ry());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(Zy())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (e.status !== c.OK) throw new b(m(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new b(m(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (o.status !== c.OK) throw new b(m(), o.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== c.OK) throw new b(m(), o.status);
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
    if (a.status !== c.OK) throw new b(m(), a.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status)
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
      throw i === "invalid_name" ? new b(pr(), c.BAD_REQUEST) : new b(typeof i == "string" && i ? i : m(), c.BAD_REQUEST)
    }
    if (o.status !== c.OK) throw new b(m(), o.status)
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
      throw a === "email_required" || a === "invalid_email" ? new b(a_(), c.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const i = new b(typeof(o == null ? void 0 : o.userId) == "number" ? $d({
          userId: o.userId
        }) : Pd(), c.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (i.userId = o.userId), i
      }
      throw new b(m(), c.CONFLICT)
    }
    if (r.status === c.NOT_FOUND) throw new b("User not found.", c.NOT_FOUND);
    if (r.status !== c.OK) throw new b(m(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status);
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
    if (e.status !== c.OK) throw new b(m(), e.status)
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
    if (a.status !== c.OK) throw new b(m(), a.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (o.status !== c.OK) throw new b(m(), o.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.NO_CONTENT) throw new b(m(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
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
    if (o.status !== c.OK) throw new b(m(), o.status)
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
    if (o.status !== c.OK) throw new b(m(), o.status)
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
    if (o.status !== c.OK) throw new b(m(), o.status)
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
    if (r.status !== c.OK) throw new b(m(), r.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (e.status !== c.OK) throw new b(m(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== c.OK) throw new b(m(), e.status);
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
        if (await ur(a.tier)) return this.submitBanAppeal(t);
        throw new b(bn(), o.status)
      }
    }
    if (o.status !== c.OK && o.status !== c.ALREADY_REPORTED) throw new b(m(), o.status);
    return o.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
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
    if (t.status !== c.OK) throw new b(m(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
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
    if (o.status !== c.OK) throw new b(m(), o.status);
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
    if (e.status !== c.OK) throw new b(m(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new b(m(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new b(m(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== c.OK) throw new b(m(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await En()
      }
    });
    if (!r.ok) throw r.status === 500 ? new b(m(), r.status) : new b(Dp(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < sE.length,
      o = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= cE.tools.wayback.limit,
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
    if (t.status !== c.OK) throw new b(m(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) throw new Error(_r());
    if (e.status === c.FORBIDDEN) throw new Error(yr());
    if (e.status === c.CONFLICT) throw new Error(wr());
    if (e.status !== c.OK) throw new Error(m())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new b(m(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
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
    if (r.status !== c.OK) throw new b(m(), r.status);
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
    if (r.status !== c.OK) throw new b(m(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new b(m(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
}
Pt = new WeakMap, xt = new WeakMap;

function dE(n) {
  var f, d;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const g of n)
    if (g.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = Nn.seasons) == null ? void 0 : f[t];
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
    const C = (d = Nn.colors) == null ? void 0 : d[w];
    if (!C) throw new Error(`Unknown palette color index: ${w}`);
    const T = g - o,
      S = ((h - a) * _ + T) * 4,
      [N, A, y] = C.rgb;
    p[S] = N, p[S + 1] = A, p[S + 2] = y, p[S + 3] = w === 0 ? 1 : 255
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
async function _E(n) {
  const t = fE(n.width, n.height),
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

function fE(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let je = new lE(Pn);
typeof window < "u" && po(() => {
  let n = je.online;
  mo(() => {
    const t = je.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const cT = n => new URL(n, Pn).toString();

function no(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function pE(n, t) {
  for (const e of t)
    if (no(n, e)) return !0;
  return !1
}

function uT(...n) {
  return n.filter(Boolean).join(" ")
}
const mE = typeof document < "u";
let Sr = 0;
var Lt, Mt, Bt;
class hE {
  constructor() {
    Y(this, Lt, ce(tn([])));
    Y(this, Mt, ce(tn([])));
    Y(this, Bt, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    G(this, "addToast", t => {
      mE && this.toasts.unshift(t)
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
      } = t, o = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : Sr++, a = t.dismissable === void 0 ? !0 : t.dismissable, i = t.type === void 0 ? "default" : t.type;
      return Gn(() => {
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
    G(this, "dismiss", t => (Gn(() => {
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
      const e = x(this, Bt).call(this, t);
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
          const s = gE(i);
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
      const r = (e == null ? void 0 : e.id) || Sr++;
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
      const e = x(this, Bt).call(this, t.toastId);
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
    return ee(x(this, Lt))
  }
  set toasts(t) {
    ne(x(this, Lt), t, !0)
  }
  get heights() {
    return ee(x(this, Mt))
  }
  set heights(t) {
    ne(x(this, Mt), t, !0)
  }
}
Lt = new WeakMap, Mt = new WeakMap, Bt = new WeakMap;

function gE(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const Ae = new hE;

function wE(n, t) {
  return Ae.create({
    message: n,
    ...t
  })
}
var cn;
class lT {
  constructor() {
    Y(this, cn, _t(() => Ae.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return ee(x(this, cn))
  }
}
cn = new WeakMap;
const yE = wE,
  bE = Object.assign(yE, {
    success: Ae.success,
    info: Ae.info,
    warning: Ae.warning,
    error: Ae.error,
    custom: Ae.custom,
    message: Ae.message,
    promise: Ae.promise,
    dismiss: Ae.dismiss,
    loading: Ae.loading,
    getActiveToasts: () => Ae.toasts.filter(n => !n.dismiss)
  });
var Ht, Ut, Ft, jt, Gt, Wt, Vt, zt;
class vE {
  constructor() {
    G(this, "channel", new BroadcastChannel("user-channel"));
    Y(this, Ht, ce());
    Y(this, Ut, ce(!0));
    Y(this, Ft, ce());
    Y(this, jt, ce(Date.now()));
    Y(this, Gt, _t(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Yr.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    Y(this, Wt, _t(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    Y(this, Vt, _t(() => {
      var t;
      return new $a(Cr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    Y(this, zt, _t(() => {
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
    return ee(x(this, Ht))
  }
  set data(t) {
    ne(x(this, Ht), t, !0)
  }
  get loading() {
    return ee(x(this, Ut))
  }
  set loading(t) {
    ne(x(this, Ut), t, !0)
  }
  get notificationCount() {
    return ee(x(this, Ft))
  }
  set notificationCount(t) {
    ne(x(this, Ft), t, !0)
  }
  get lastFetch() {
    return ee(x(this, jt))
  }
  set lastFetch(t) {
    ne(x(this, jt), t)
  }
  get charges() {
    return ee(x(this, Gt))
  }
  set charges(t) {
    ne(x(this, Gt), t)
  }
  get cooldown() {
    return ee(x(this, Wt))
  }
  set cooldown(t) {
    ne(x(this, Wt), t)
  }
  get flagsBitmap() {
    return ee(x(this, Vt))
  }
  set flagsBitmap(t) {
    ne(x(this, Vt), t)
  }
  get timeoutUntil() {
    return ee(x(this, zt))
  }
  set timeoutUntil(t) {
    ne(x(this, zt), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await je.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && je.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (zo("userId", {
        id: this.data.id
      }), pt.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), bE.warning(Pg(), {
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
    return no((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return pE((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ht = new WeakMap, Ut = new WeakMap, Ft = new WeakMap, jt = new WeakMap, Gt = new WeakMap, Wt = new WeakMap, Vt = new WeakMap, zt = new WeakMap;
const at = new vE;
let z;
const xe = new Array(128).fill(void 0);
xe.push(void 0, null, !0, !1);

function j(n) {
  return xe[n]
}
let wt = xe.length;

function J(n) {
  wt === xe.length && xe.push(xe.length + 1);
  const t = wt;
  return wt = xe[t], xe[t] = n, t
}

function Me(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    z.__wbindgen_export_0(J(e))
  }
}

function Ke(n) {
  return n == null
}
const ro = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && ro.decode();
let ft = null;

function Qt() {
  return (ft === null || ft.byteLength === 0) && (ft = new Uint8Array(z.memory.buffer)), ft
}

function Zt(n, t) {
  return n = n >>> 0, ro.decode(Qt().subarray(n, n + t))
}

function EE(n) {
  n < 132 || (xe[n] = wt, wt = n)
}

function Ar(n) {
  const t = j(n);
  return EE(n), t
}
let Xe = null;

function an() {
  return (Xe === null || Xe.buffer.detached === !0 || Xe.buffer.detached === void 0 && Xe.buffer !== z.memory.buffer) && (Xe = new DataView(z.memory.buffer)), Xe
}
let Qe = 0;
const en = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  TE = typeof en.encodeInto == "function" ? function(n, t) {
    return en.encodeInto(n, t)
  } : function(n, t) {
    const e = en.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function $t(n, t, e) {
  if (e === void 0) {
    const s = en.encode(n),
      u = t(s.length, 1) >>> 0;
    return Qt().subarray(u, u + s.length).set(s), Qe = s.length, u
  }
  let r = n.length,
    o = t(r, 1) >>> 0;
  const a = Qt();
  let i = 0;
  for (; i < r; i++) {
    const s = n.charCodeAt(i);
    if (s > 127) break;
    a[o + i] = s
  }
  if (i !== r) {
    i !== 0 && (n = n.slice(i)), o = e(o, r, r = i + n.length * 3, 1) >>> 0;
    const s = Qt().subarray(o + i, o + r),
      u = TE(n, s);
    i += u.written, o = e(o, r, i, 1) >>> 0
  }
  return Qe = i, o
}

function SE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Qe;
  z.set_fingerprint_v2(t, e)
}

function AE(n) {
  let t, e;
  try {
    const a = z.__wbindgen_add_to_stack_pointer(-16),
      i = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
      s = Qe;
    z.get_pawtected_endpoint_payload(a, i, s);
    var r = an().getInt32(a + 0, !0),
      o = an().getInt32(a + 4, !0);
    return t = r, e = o, Zt(r, o)
  } finally {
    z.__wbindgen_add_to_stack_pointer(16), z.__wbindgen_export_3(t, e, 1)
  }
}

function OE(n) {
  z.set_automated_browser(n)
}

function vn(n) {
  z.set_user_id(n)
}

function RE(n) {
  z.set_automated_clicks(n)
}

function DE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Qe;
  z.set_detected_bot(t, e)
}

function IE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Qe;
  z.request_url(t, e)
}

function NE(n) {
  z.set_cf_likely_automated(n)
}

function CE(n) {
  const t = $t(n, z.__wbindgen_export_1, z.__wbindgen_export_2),
    e = Qe;
  z.set_fingerprint(t, e)
}
async function kE(n, t) {
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

function PE() {
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
    return Ke(e) ? 0 : J(e)
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
    const r = new Function(Zt(t, e));
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
      j(t).randomFillSync(Ar(e))
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
    return Ke(t) ? 0 : J(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return Ke(t) ? 0 : J(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return Ke(t) ? 0 : J(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return Ke(t) ? 0 : J(t)
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
    an().setFloat64(t + 8, Ke(o) ? 0 : o, !0), an().setInt32(t + 0, !Ke(o), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = j(t);
    return J(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Ar(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = Zt(t, e);
    return J(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Zt(t, e))
  }, n
}

function xE(n, t) {
  return z = n.exports, oo.__wbindgen_wasm_module = t, Xe = null, ft = null, z
}
async function oo(n) {
  if (z !== void 0) return z;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = PE();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await kE(await n, t);
  return xE(e, r)
}
class LE {
  constructor() {
    G(this, "interval");
    G(this, "storagesEmpty", !1);
    G(this, "storages", [new sn, new Cn, new kn, new BE]);
    G(this, "pawtectLoaded");
    G(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!at.data || this.storagesEmpty || localStorage.getItem(sn.KEY))) {
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
        await oo($o), (t = at.data) != null && t.id && vn(at.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: ME((r, o) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && IE(a), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Vo(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), vn(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), NE(t)
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
    if (!await this.loadPawtect()) throw new Error(x1());
    const r = navigator.webdriver,
      [o, a, i] = await Promise.all([En(), Es(), Wa().catch(s => (console.error(s), {
        bot: !1
      }))]);
    return vn(at.data.id), CE(o), SE(a), OE(r), RE(Yr.automatedClicks), i.bot && DE(i.botKind ?? "unknown"), AE(t)
  }
}

function ME(n) {
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
let sn = Be;
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
let Cn = He;
const Ye = class Ye {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + Ye.KEY + "=([^;]*)"));
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
    document.cookie = `${Ye.KEY}=${encodeURIComponent(e)};path=/;max-age=${Ye.MAX_AGE};SameSite=Lax`
  }
};
G(Ye, "KEY", "_pf_uid"), G(Ye, "MAX_AGE", 3600 * 24 * 365);
let kn = Ye;
class BE {
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
const pt = new LE;
export {
  sT as $, Es as A, cE as B, to as C, a_ as D, ur as E, bn as F, GE as G, mp as H, Wf as I, bd as J, nu as K, sg as L, gf as M, WE as N, VE as O, oT as P, iT as Q, YE as R, aT as S, Ue as T, x1 as U, Bb as V, cT as W, tT as X, QE as Y, nT as Z, eT as _, je as a, rT as a0, Dp as a1, Nn as b, m as c, JE as d, sd as e, Wc as f, rf as g, Nf as h, np as i, Yr as j, Hv as k, Ae as l, Kh as m, uT as n, lT as o, XE as p, KE as q, Te as r, ZE as s, bE as t, at as u, $E as v, zE as w, qE as x, pt as y, za as z
};