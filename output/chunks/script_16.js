var fa = Object.defineProperty;
var Kn = t => {
  throw TypeError(t)
};
var ma = (t, n, e) => n in t ? fa(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[n] = e;
var K = (t, n, e) => ma(t, typeof n != "symbol" ? n + "" : n, e),
  pa = (t, n, e) => n.has(t) || Kn("Cannot " + e);
var C = (t, n, e) => (pa(t, n, "read from private field"), e ? e.call(t) : n.get(t)),
  Z = (t, n, e) => n.has(t) ? Kn("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
import {
  f as ha,
  h as ga,
  P as Hn,
  g as On
} from "./yew7vgrr.js";
import {
  e as ge,
  i as te,
  h as ae,
  g as an,
  bM as ya,
  I as wa,
  L as Xn,
  u as pt
} from "./Dbe4PVAU.js";
import {
  g as R
} from "./BhCkpOlh.js";
const ba = !0,
  va = ba,
  lt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Fe = globalThis,
  wt = "10.40.0";

function Fn() {
  return Un(Fe), Fe
}

function Un(t) {
  const n = t.__SENTRY__ = t.__SENTRY__ || {};
  return n.version = n.version || wt, n[wt] = n[wt] || {}
}

function jn(t, n, e = Fe) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    a = r[wt] = r[wt] || {};
  return a[t] || (a[t] = n())
}
const Ea = "Sentry Logger ",
  Yn = {};

function Aa(t) {
  if (!("console" in Fe)) return t();
  const n = Fe.console,
    e = {},
    r = Object.keys(Yn);
  r.forEach(a => {
    const o = Yn[a];
    e[a] = n[a], n[a] = o
  });
  try {
    return t()
  } finally {
    r.forEach(a => {
      n[a] = e[a]
    })
  }
}

function Na() {
  Vn().enabled = !0
}

function Ta() {
  Vn().enabled = !1
}

function Pr() {
  return Vn().enabled
}

function Sa(...t) {
  Gn("log", ...t)
}

function Oa(...t) {
  Gn("warn", ...t)
}

function Ra(...t) {
  Gn("error", ...t)
}

function Gn(t, ...n) {
  lt && Pr() && Aa(() => {
    Fe.console[t](`${Ea}[${t}]:`, ...n)
  })
}

function Vn() {
  return lt ? jn("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Zt = {
    enable: Na,
    disable: Ta,
    isEnabled: Pr,
    log: Sa,
    warn: Oa,
    error: Ra
  },
  Ia = Object.prototype.toString;

function Da(t, n) {
  return Ia.call(t) === `[object ${n}]`
}

function ka(t) {
  return Da(t, "Object")
}

function Ma(t) {
  return !!(t != null && t.then && typeof t.then == "function")
}

function La(t, n, e) {
  try {
    Object.defineProperty(t, n, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    lt && Zt.log(`Failed to add non-enumerable property "${n}" to object`, t)
  }
}
let ot;

function _n(t) {
  if (ot !== void 0) return ot ? ot(t) : t();
  const n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = Fe;
  return n in e && typeof e[n] == "function" ? (ot = e[n], ot(t)) : (ot = null, t())
}

function Rn() {
  return _n(() => Math.random())
}

function Pa() {
  return _n(() => Date.now())
}

function Ca(t, n = 0) {
  return typeof t != "string" || n === 0 || t.length <= n ? t : `${t.slice(0,n)}...`
}

function xa() {
  const t = Fe;
  return t.crypto || t.msCrypto
}
let yn;

function Ba() {
  return Rn() * 16
}

function bt(t = xa()) {
  try {
    if (t != null && t.randomUUID) return _n(() => t.randomUUID()).replace(/-/g, "")
  } catch {}
  return yn || (yn = "10000000100040008000" + 1e11), yn.replace(/[018]/g, n => (n ^ (Ba() & 15) >> n / 4).toString(16))
}
const Cr = 1e3;

function xr() {
  return Pa() / Cr
}

function Ha() {
  const {
    performance: t
  } = Fe;
  if (!(t != null && t.now) || !t.timeOrigin) return xr;
  const n = t.timeOrigin;
  return () => (n + _n(() => t.now())) / Cr
}
let Jn;

function Fa() {
  return (Jn ?? (Jn = Ha()))()
}

function Ua(t, n = {}) {
  if (n.user && (!t.ipAddress && n.user.ip_address && (t.ipAddress = n.user.ip_address), !t.did && !n.did && (t.did = n.user.id || n.user.email || n.user.username)), t.timestamp = n.timestamp || Fa(), n.abnormal_mechanism && (t.abnormal_mechanism = n.abnormal_mechanism), n.ignoreDuration && (t.ignoreDuration = n.ignoreDuration), n.sid && (t.sid = n.sid.length === 32 ? n.sid : bt()), n.init !== void 0 && (t.init = n.init), !t.did && n.did && (t.did = `${n.did}`), typeof n.started == "number" && (t.started = n.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof n.duration == "number") t.duration = n.duration;
  else {
    const e = t.timestamp - t.started;
    t.duration = e >= 0 ? e : 0
  }
  n.release && (t.release = n.release), n.environment && (t.environment = n.environment), !t.ipAddress && n.ipAddress && (t.ipAddress = n.ipAddress), !t.userAgent && n.userAgent && (t.userAgent = n.userAgent), typeof n.errors == "number" && (t.errors = n.errors), n.status && (t.status = n.status)
}

function Br(t, n, e = 2) {
  if (!n || typeof n != "object" || e <= 0) return n;
  if (t && Object.keys(n).length === 0) return t;
  const r = {
    ...t
  };
  for (const a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = Br(r[a], n[a], e - 1));
  return r
}

function Zn() {
  return bt()
}
const In = "_sentrySpan";

function Qn(t, n) {
  n ? La(t, In, n) : delete t[In]
}

function er(t) {
  return t[In]
}
const ja = 100;
class et {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: Zn(),
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
    }, n._client = this._client, n._lastEventId = this._lastEventId, n._conversationId = this._conversationId, Qn(n, er(this)), n
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
    }, this._session && Ua(this._session, {
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
      r = e instanceof et ? e.getScopeData() : ka(e) ? n : void 0,
      {
        tags: a,
        attributes: o,
        extra: s,
        user: i,
        contexts: c,
        level: l,
        fingerprint: u = [],
        propagationContext: m,
        conversationId: f
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...a
    }, this._attributes = {
      ...this._attributes,
      ...o
    }, this._extra = {
      ...this._extra,
      ...s
    }, this._contexts = {
      ...this._contexts,
      ...c
    }, i && Object.keys(i).length && (this._user = i), l && (this._level = l), u.length && (this._fingerprint = u), m && (this._propagationContext = m), f && (this._conversationId = f), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Qn(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: Zn(),
      sampleRand: Rn()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(n, e) {
    var o;
    const r = typeof e == "number" ? e : ja;
    if (r <= 0) return this;
    const a = {
      timestamp: xr(),
      ...n,
      message: n.message ? Ca(n.message, 2048) : n.message
    };
    return this._breadcrumbs.push(a), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (o = this._client) == null || o.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
      span: er(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(n) {
    return this._sdkProcessingMetadata = Br(this._sdkProcessingMetadata, n, 2), this
  }
  setPropagationContext(n) {
    return this._propagationContext = n, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(n, e) {
    const r = (e == null ? void 0 : e.event_id) || bt();
    if (!this._client) return lt && Zt.warn("No client configured on scope - will not capture exception!"), r;
    const a = new Error("Sentry syntheticException");
    return this._client.captureException(n, {
      originalException: n,
      syntheticException: a,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(n, e, r) {
    const a = (r == null ? void 0 : r.event_id) || bt();
    if (!this._client) return lt && Zt.warn("No client configured on scope - will not capture message!"), a;
    const o = (r == null ? void 0 : r.syntheticException) ?? new Error(n);
    return this._client.captureMessage(n, e, {
      originalException: n,
      syntheticException: o,
      ...r,
      event_id: a
    }, this), a
  }
  captureEvent(n, e) {
    const r = n.event_id || (e == null ? void 0 : e.event_id) || bt();
    return this._client ? (this._client.captureEvent(n, {
      ...e,
      event_id: r
    }, this), r) : (lt && Zt.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(n => {
      n(this)
    }), this._notifyingListeners = !1)
  }
}

function Ga() {
  return jn("defaultCurrentScope", () => new et)
}

function Va() {
  return jn("defaultIsolationScope", () => new et)
}
class Wa {
  constructor(n, e) {
    let r;
    n ? r = n : r = new et;
    let a;
    e ? a = e : a = new et, this._stack = [{
      scope: r
    }], this._isolationScope = a
  }
  withScope(n) {
    const e = this._pushScope();
    let r;
    try {
      r = n(e)
    } catch (a) {
      throw this._popScope(), a
    }
    return Ma(r) ? r.then(a => (this._popScope(), a), a => {
      throw this._popScope(), a
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

function ft() {
  const t = Fn(),
    n = Un(t);
  return n.stack = n.stack || new Wa(Ga(), Va())
}

function za(t) {
  return ft().withScope(t)
}

function $a(t, n) {
  const e = ft();
  return e.withScope(() => (e.getStackTop().scope = t, n(t)))
}

function tr(t) {
  return ft().withScope(() => t(ft().getIsolationScope()))
}

function qa() {
  return {
    withIsolationScope: tr,
    withScope: za,
    withSetScope: $a,
    withSetIsolationScope: (t, n) => tr(n),
    getCurrentScope: () => ft().getScope(),
    getIsolationScope: () => ft().getIsolationScope()
  }
}

function Hr(t) {
  const n = Un(t);
  return n.acs ? n.acs : qa()
}

function Ka() {
  const t = Fn();
  return Hr(t).getCurrentScope()
}

function Xa() {
  const t = Fn();
  return Hr(t).getIsolationScope()
}

function Ya(t, n) {
  return Ka().captureException(t, void 0)
}

function Ja(t, n) {
  Xa().setContext(t, n)
}
const Za = "" + new URL("../assets/pawtect_wasm_bg.Ckfht_86.wasm", import.meta.url).href;
var Qa = "2.0.0";
const V = {
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

function eo(t, n) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const a in n) {
    const o = n[a],
      s = o(t);
    let i = {
      bot: !1
    };
    typeof s == "string" ? i = {
      bot: !0,
      botKind: s
    } : s && (i = {
      bot: !0,
      botKind: V.Unknown
    }), e[a] = i, i.bot && (r = i)
  }
  return [e, r]
}
async function to(t) {
  const n = {},
    e = Object.keys(t);
  return await Promise.all(e.map(async r => {
    const a = t[r];
    try {
      n[r] = {
        value: await a(),
        state: 0
      }
    } catch (o) {
      o instanceof J ? n[r] = {
        state: o.state,
        error: `${o.name}: ${o.message}`
      } : n[r] = {
        state: -3,
        error: o instanceof Error ? `${o.name}: ${o.message}` : String(o)
      }
    }
  })), n
}

function no({
  appVersion: t
}) {
  if (t.state !== 0) return !1;
  if (/headless/i.test(t.value)) return V.HeadlessChrome;
  if (/electron/i.test(t.value)) return V.Electron;
  if (/slimerjs/i.test(t.value)) return V.SlimerJS
}

function Qt(t, n) {
  return t.indexOf(n) !== -1
}

function Ce(t, n) {
  return t.indexOf(n) !== -1
}

function ro(t, n) {
  if ("find" in t) return t.find(n);
  for (let e = 0; e < t.length; e++)
    if (n(t[e], e, t)) return t[e]
}

function nr(t) {
  return Object.getOwnPropertyNames(t)
}

function Dn(t, ...n) {
  for (const e of n)
    if (typeof e == "string") {
      if (Qt(t, e)) return !0
    } else if (ro(t, a => e.test(a)) != null) return !0;
  return !1
}

function dt(t) {
  return t.reduce((n, e) => n + (e ? 1 : 0), 0)
}

function ao({
  documentElementKeys: t
}) {
  if (t.state !== 0) return !1;
  if (Dn(t.value, "selenium", "webdriver", "driver")) return V.Selenium
}

function oo({
  errorTrace: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return V.PhantomJS
}

function io({
  evalLength: t,
  browserKind: n,
  browserEngineKind: e
}) {
  if (t.state !== 0 || n.state !== 0 || e.state !== 0) return;
  const r = t.value;
  return e.value === "unknown" ? !1 : r === 37 && !Qt(["webkit", "gecko"], e.value) || r === 39 && !Qt(["internet_explorer"], n.value) || r === 33 && !Qt(["chromium"], e.value)
}

function so({
  functionBind: t
}) {
  if (t.state === -2) return V.PhantomJS
}

function co({
  languages: t
}) {
  if (t.state === 0 && t.value.length === 0) return V.HeadlessChrome
}

function uo({
  mimeTypesConsistent: t
}) {
  if (t.state === 0 && !t.value) return V.Unknown
}

function lo({
  notificationPermissions: t,
  browserKind: n
}) {
  if (n.state !== 0 || n.value !== "chrome") return !1;
  if (t.state === 0 && t.value) return V.HeadlessChrome
}

function _o({
  pluginsArray: t
}) {
  if (t.state === 0 && !t.value) return V.HeadlessChrome
}

function fo({
  pluginsLength: t,
  android: n,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(t.state !== 0 || n.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || n.value || r.value !== "chromium") && t.value === 0) return V.HeadlessChrome
}

function mo({
  process: t
}) {
  var n;
  if (t.state !== 0) return !1;
  if (t.value.type === "renderer" || ((n = t.value.versions) === null || n === void 0 ? void 0 : n.electron) != null) return V.Electron
}

function po({
  productSub: t,
  browserKind: n
}) {
  if (t.state !== 0 || n.state !== 0) return !1;
  if ((n.value === "chrome" || n.value === "safari" || n.value === "opera" || n.value === "wechat") && t.value !== "20030107") return V.Unknown
}

function ho({
  userAgent: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return V.PhantomJS;
  if (/Headless/i.test(t.value)) return V.HeadlessChrome;
  if (/Electron/i.test(t.value)) return V.Electron;
  if (/slimerjs/i.test(t.value)) return V.SlimerJS
}

function go({
  webDriver: t
}) {
  if (t.state === 0 && t.value) return V.HeadlessChrome
}

function yo({
  webGL: t
}) {
  if (t.state === 0) {
    const {
      vendor: n,
      renderer: e
    } = t.value;
    if (n == "Brian Paul" && e == "Mesa OffScreen") return V.HeadlessChrome
  }
}

function wo({
  windowExternal: t
}) {
  if (t.state !== 0) return !1;
  if (/Sequentum/i.test(t.value)) return V.Sequentum
}

function bo({
  windowSize: t,
  documentFocus: n
}) {
  if (t.state !== 0 || n.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = t.value;
  if (n.value && e === 0 && r === 0) return V.HeadlessChrome
}

function vo({
  distinctiveProps: t
}) {
  if (t.state !== 0) return !1;
  const n = t.value;
  let e;
  for (e in n)
    if (n[e]) return e
}
const Eo = {
  detectAppVersion: no,
  detectDocumentAttributes: ao,
  detectErrorTrace: oo,
  detectEvalLengthInconsistency: io,
  detectFunctionBind: so,
  detectLanguagesLengthInconsistency: co,
  detectNotificationPermissions: lo,
  detectPluginsArray: _o,
  detectPluginsLengthInconsistency: fo,
  detectProcess: mo,
  detectUserAgent: ho,
  detectWebDriver: go,
  detectWebGL: yo,
  detectWindowExternal: wo,
  detectWindowSize: bo,
  detectMimeTypesConsistent: uo,
  detectProductSub: po,
  detectDistinctiveProperties: vo
};

function Ao() {
  const t = navigator.appVersion;
  if (t == null) throw new J(-1, "navigator.appVersion is undefined");
  return t
}

function No() {
  if (document.documentElement === void 0) throw new J(-1, "document.documentElement is undefined");
  const {
    documentElement: t
  } = document;
  if (typeof t.getAttributeNames != "function") throw new J(-2, "document.documentElement.getAttributeNames is not a function");
  return t.getAttributeNames()
}

function To() {
  try {
    null[0]()
  } catch (t) {
    if (t instanceof Error && t.stack != null) return t.stack.toString()
  }
  throw new J(-3, "errorTrace signal unexpected behaviour")
}

function So() {
  return eval.toString().length
}

function Oo() {
  if (Function.prototype.bind === void 0) throw new J(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Wn() {
  var t, n;
  const e = window,
    r = navigator;
  return dt(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : dt(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : dt(["buildID" in navigator, "MozAppearance" in ((n = (t = document.documentElement) === null || t === void 0 ? void 0 : t.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Ro() {
  var t;
  const n = (t = navigator.userAgent) === null || t === void 0 ? void 0 : t.toLowerCase();
  return Ce(n, "edg/") ? "edge" : Ce(n, "trident") || Ce(n, "msie") ? "internet_explorer" : Ce(n, "wechat") ? "wechat" : Ce(n, "firefox") ? "firefox" : Ce(n, "opera") || Ce(n, "opr") ? "opera" : Ce(n, "chrome") ? "chrome" : Ce(n, "safari") ? "safari" : "unknown"
}

function Io() {
  const t = Wn(),
    n = t === "chromium",
    e = t === "gecko",
    r = window,
    a = navigator,
    o = "connection";
  return n ? dt([!("SharedWorker" in r), a[o] && "ontypechange" in a[o], !("sinkId" in new Audio)]) >= 2 : e ? dt(["onorientationchange" in r, "orientation" in r, /android/i.test(a.appVersion)]) >= 2 : !1
}

function Do() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function ko() {
  const t = window;
  return dt([!("MediaSettingsRange" in t), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3
}

function Mo() {
  const t = navigator,
    n = [],
    e = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
  if (e !== void 0 && n.push([e]), Array.isArray(t.languages)) Wn() === "chromium" && ko() || n.push(t.languages);
  else if (typeof t.languages == "string") {
    const r = t.languages;
    r && n.push(r.split(","))
  }
  return n
}

function Lo() {
  if (navigator.mimeTypes === void 0) throw new J(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: t
  } = navigator;
  let n = Object.getPrototypeOf(t) === MimeTypeArray.prototype;
  for (let e = 0; e < t.length; e++) n && (n = Object.getPrototypeOf(t[e]) === MimeType.prototype);
  return n
}
async function Po() {
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

function Co() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new J(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function xo() {
  if (navigator.plugins === void 0) throw new J(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new J(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Bo() {
  const {
    process: t
  } = window, n = "window.process is";
  if (t === void 0) throw new J(-1, `${n} undefined`);
  if (t && typeof t != "object") throw new J(-3, `${n} not an object`);
  return t
}

function Ho() {
  const {
    productSub: t
  } = navigator;
  if (t === void 0) throw new J(-1, "navigator.productSub is undefined");
  return t
}

function Fo() {
  if (navigator.connection === void 0) throw new J(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new J(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Uo() {
  return navigator.userAgent
}

function jo() {
  if (navigator.webdriver == null) throw new J(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Go() {
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

function Vo() {
  if (window.external === void 0) throw new J(-1, "window.external is undefined");
  const {
    external: t
  } = window;
  if (typeof t.toString != "function") throw new J(-2, "window.external.toString is not a function");
  return t.toString()
}

function Wo() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function zo() {
  const t = {
    [V.Awesomium]: {
      window: ["awesomium"]
    },
    [V.Cef]: {
      window: ["RunPerfTest"]
    },
    [V.CefSharp]: {
      window: ["CefSharp"]
    },
    [V.CoachJS]: {
      window: ["emit"]
    },
    [V.FMiner]: {
      window: ["fmget_targets"]
    },
    [V.Geb]: {
      window: ["geb"]
    },
    [V.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [V.Phantomas]: {
      window: ["__phantomas"]
    },
    [V.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [V.Rhino]: {
      window: ["spawn"]
    },
    [V.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [V.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [V.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [V.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let n;
  const e = {},
    r = nr(window);
  let a = [];
  window.document !== void 0 && (a = nr(window.document));
  for (n in t) {
    const o = t[n];
    if (o !== void 0) {
      const s = o.window === void 0 ? !1 : Dn(r, ...o.window),
        i = o.document === void 0 || !a.length ? !1 : Dn(a, ...o.document);
      e[n] = s || i
    }
  }
  return e
}
const $o = {
  android: Io,
  browserKind: Ro,
  browserEngineKind: Wn,
  documentFocus: Do,
  userAgent: Uo,
  appVersion: Ao,
  rtt: Fo,
  windowSize: Wo,
  pluginsLength: xo,
  pluginsArray: Co,
  errorTrace: To,
  productSub: Ho,
  windowExternal: Vo,
  mimeTypesConsistent: Lo,
  evalLength: So,
  webGL: Go,
  webDriver: jo,
  languages: Mo,
  notificationPermissions: Po,
  documentElementKeys: No,
  functionBind: Oo,
  process: Bo,
  distinctiveProps: zo
};
class qo {
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
    const [n, e] = eo(this.components, Eo);
    return this.detections = n, e
  }
  async collect() {
    return this.components = await to($o), this.components
  }
}

function Ko() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const t = new XMLHttpRequest;
    t.open("get", `https://m1.openfpcdn.io/botd/v${Qa}/npm-monitoring`, !0), t.send()
  } catch (t) {
    console.error(t)
  }
}
async function Xo({
  monitoring: t = !0
} = {}) {
  t && Ko();
  const n = new qo;
  return await n.collect(), n
}
let wn = null;
async function Yo() {
  return (await Jo()).detect()
}

function Jo() {
  return wn || (wn = Xo({
    monitoring: !1
  })), wn
}

function Fr(t) {
  const n = atob(t),
    e = new Uint8Array(n.length);
  for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
  return e
}

function Ur(t) {
  if (typeof Buffer < "u") return Buffer.from(t).toString("base64");
  let n = "";
  for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
  return btoa(n)
}
class Zo {
  constructor(n) {
    K(this, "bytes");
    this.bytes = n ?? new Uint8Array
  }
  set(n, e) {
    const r = Math.floor(n / 8),
      a = n % 8;
    if (r >= this.bytes.length) {
      const s = new Uint8Array(r + 1),
        i = s.length - this.bytes.length;
      for (let c = 0; c < this.bytes.length; c++) s[c + i] = this.bytes[c];
      this.bytes = s
    }
    const o = this.bytes.length - 1 - r;
    e ? this.bytes[o] = this.bytes[o] | 1 << a : this.bytes[o] = this.bytes[o] & ~(1 << a)
  }
  get(n) {
    const e = Math.floor(n / 8),
      r = n % 8,
      a = this.bytes.length;
    return e > a ? !1 : (this.bytes[a - 1 - e] & 1 << r) !== 0
  }
}

function YE(t) {
  return new Promise((n, e) => {
    const r = new FileReader;
    r.onload = () => {
      const a = r.result;
      if (!a || typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      n(a.substring(a.indexOf(",") + 1))
    }, r.readAsDataURL(t)
  })
}

function JE(t) {
  if (typeof FileReader > "u") {
    const n = t.type || "application/octet-stream";
    return t.arrayBuffer().then(e => `data:${n};base64,${Ur(new Uint8Array(e))}`)
  }
  return new Promise((n, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const a = r.result;
      if (typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      n(a)
    }, r.onerror = e, r.readAsDataURL(t)
  })
}

function ZE(t) {
  if (!t.startsWith("data:")) throw new Error("Could not parse data URL");
  const n = t.indexOf(",");
  if (n === -1) throw new Error("Could not parse data URL");
  const e = t.slice(5, n),
    r = t.slice(n + 1),
    a = e.indexOf(";base64"),
    o = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const s = Fr(r),
      i = new Uint8Array(s.byteLength);
    return i.set(s), new Blob([i], {
      type: o
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: o
  })
}
async function rr(t, n = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(t)),
    r = await crypto.subtle.digest(n, e);
  return Array.from(new Uint8Array(r)).map(o => o.toString(16).padStart(2, "0")).join("")
}
async function O(t, n = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(t)),
    r = await crypto.subtle.digest(n, e);
  return Ur(new Uint8Array(r))
}
const Qo = () => {
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
          a = u => /.+(\s).+/g.test(u),
          o = n ?? {},
          s = typeof o.name == "string" ? o.name : "",
          i = typeof o.message == "string" ? o.message : "",
          c = a(i) ? e ? `${i} [${e}]` : i : void 0,
          l = r[s] ? s : void 0;
        t.push({
          trustedName: l,
          trustedMessage: c
        })
      }
    }
  },
  jr = Qo(),
  {
    captureError: Y
  } = jr,
  k = (t, n = "") => {
    try {
      return t()
    } catch (e) {
      return n ? Y(e, n) : Y(e)
    }
  },
  Te = t => {
    try {
      return t()
    } catch {
      return
    }
  },
  ei = () => ({
    data: jr.getErrors()
  });
var De = (t => (t.WINDOWS = "Windows", t.LINUX = "Linux", t.APPLE = "Apple", t.OTHER = "Other", t))(De || {});
const Gr = !globalThis.document && globalThis.WorkerGlobalScope;

function ti() {
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    return (n instanceof Error ? n.message : String(n)).length + (t + "").split(t.name).join("").length
  }
}
const fn = ti(),
  de = fn == 80,
  At = fn == 58,
  tt = fn == 77,
  ar = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [fn] || null,
  Vr = de && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function Wr() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function ni() {
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
        } catch (l) {}
        if (!window.OfflineAudioContext) return !1;
        const s = new OfflineAudioContext(1, 1, 44100).createAnalyser(),
          i = new Float32Array(s.frequencyBinCount);
        return s.getFloatFrequencyData(i), new Set(i).size > 1
      })()) return t.strict = !0, t;
    const e = /(Chrom(e|ium)|Microsoft Edge) PDF (Plugin|Viewer)/,
      r = [...navigator.plugins],
      a = r.filter(o => e.test(o.name)).length == 2;
    return r.length && !a ? (t.standard = !0, t) : (t.allow = !0, t)
  } catch {
    return t.unknown = !0, t
  }
}
const kn = t => /windows phone/ig.test(t) ? "Windows Phone" : /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? "Windows" : /android/ig.test(t) ? "Android" : /cros/ig.test(t) ? "Chrome OS" : /linux/ig.test(t) ? "Linux" : /ipad/ig.test(t) ? "iPad" : /iphone/ig.test(t) ? "iPhone" : /ipod/ig.test(t) ? "iPod" : /ios/ig.test(t) ? "iOS" : /mac/ig.test(t) ? "Mac" : "Other";

function zr(t, n) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? De.WINDOWS : /android|linux|cros/ig.test(t) ? De.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? De.APPLE : De.OTHER;
  if (!n) return [e];
  const r = /win/ig.test(n) ? De.WINDOWS : /android|arm|linux/ig.test(n) ? De.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? De.APPLE : De.OTHER;
  return [e, r]
}
const {
  userAgent: ri,
  platform: ai
} = globalThis.navigator || {}, [on, or] = zr(ri, ai), $r = ({
  ua: t,
  os: n,
  isBrave: e
}) => {
  const r = /ipad|iphone|ipod|ios|mac/ig.test(n),
    a = /OPR\//g.test(t),
    o = /Vivaldi/g.test(t),
    s = /DuckDuckGo/g.test(t),
    i = /YaBrowser/g.test(t),
    c = t.match(/(palemoon)\/(\d+)./i),
    l = t.match(/(edgios|edg|edge|edga)\/(\d+)./i),
    u = l && /edgios/i.test(l[1]),
    m = t.match(/(crios|chrome)\/(\d+)./i),
    f = t.match(/(fxios|firefox)\/(\d+)./i),
    h = /AppleWebKit/g.test(t) && /Safari/g.test(t) && !f && !m && !l && t.match(/(version)\/(\d+)\.(\d|\.)+\s(mobile|safari)/i);
  if (m) {
    const g = m[1],
      y = m[2];
    return `${g} ${y}${a?" Opera":o?" Vivaldi":s?" DuckDuckGo":i?" Yandex":l?" Edge":e?" Brave":""}`
  } else if (u && l) {
    const g = l[1],
      y = l[2];
    return `${g} ${y}`
  } else if (f) {
    const g = c ? c[1] : f[1],
      y = c ? c[2] : f[2];
    return `${g} ${y}`
  } else if (r && h) {
    const g = "Safari",
      y = h[2];
    return `${g} ${y}`
  }
  return "unknown"
}, qr = ({
  userAgent: t,
  excludeBuild: n = !0
}) => {
  if (!t) return "unknown";
  const e = /\((khtml|unlike|vizio|like gec|internal dummy|org\.eclipse|openssl|ipv6|via translate|safari|cardamon).+|xt\d+\)/ig,
    r = /\((.+)\)/,
    a = /((android).+)/i,
    o = /^(linux|[a-z]|wv|mobile|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|windows|(rv:|trident|webview|iemobile).+/i,
    s = /build\/.+\s|\sbuild\/.+/i,
    i = /android( |-)\d+/i,
    c = /((windows).+)/i,
    l = /^(windows|ms(-|)office|microsoft|compatible|[a-z]|x64|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|outlook|ms(-|)office|microsoft|trident|\.net|msie|httrack|media center|infopath|aol|opera|iemobile|webbrowser).+/i,
    u = /w(ow|in)64/i,
    m = /cros/i,
    f = /^([a-z]|x11|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|trident).+/i,
    d = /\d+\.\d+\.\d+/i,
    h = /linux|x11|ubuntu|debian/i,
    g = /^([a-z]|x11|unknown|compatible|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|java|oracle|\+http|http|unknown|mozilla|konqueror|valve).+/i,
    y = /(cpu iphone|cpu os|iphone os|mac os|macos|intel os|ppc mac).+/i,
    M = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i,
    v = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
    N = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
    A = (I, T) => I.filter(w => T.test(w)).length;
  if (t = t.trim().replace(/\s{2,}/, " ").replace(e, ""), r.test(t)) {
    const I = t.match(r);
    if (!I) return "unknown";
    const w = I[0].slice(1, -1).replace(/,/g, ";").split(";").map(S => S.trim());
    if (A(w, a)) return w.map(S => i.test(S) ? i.exec(S)[0].replace("-", " ") : S).filter(S => !o.test(S)).join(" ").replace(n ? s : "", "").trim().replace(/\s{2,}/, " ");
    if (A(w, c)) return w.filter(S => !l.test(S)).join(" ").replace(/\sNT (\d+\.\d+)/, (S, E) => E == "10.0" ? " 10" : E == "6.3" ? " 8.1" : E == "6.2" ? " 8" : E == "6.1" ? " 7" : E == "6.0" ? " Vista" : E == "5.2" ? " XP Pro" : E == "5.1" ? " XP" : E == "5.0" ? " 2000" : E == "4.0" ? S : " " + E).replace(u, "(64-bit)").trim().replace(/\s{2,}/, " ");
    if (A(w, m)) return w.filter(S => !f.test(S)).join(" ").replace(n ? d : "", "").trim().replace(/\s{2,}/, " ");
    if (A(w, h)) return w.filter(S => !g.test(S)).join(" ").trim().replace(/\s{2,}/, " ");
    if (A(w, y)) return w.map(S => {
      if (v.test(S)) {
        const E = v.exec(S)[0],
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
          x = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(E) || [])[0] || "").replace(/\./g, "_"),
          P = /^10/.test(x) ? x : (/^\d{2,}/.exec(x) || [])[0],
          H = P ? D[P] : void 0;
        return H ? `macOS ${H}` : E
      }
      return S
    }).filter(S => !M.test(S)).join(" ").replace(/\slike mac.+/ig, "").trim().replace(/\s{2,}/, " ");
    {
      const S = w.filter(E => N.test(E));
      return S.length ? S.join(" ").trim().replace(/\s{2,}/, " ") : w.join(" ")
    }
  } else return "unknown"
}, Kr = t => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(t) || [])[1];
  return de && !!e
}, se = (t = 0) => new Promise(n => setTimeout(n, t)), Xr = [
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
].map(t => String.fromCodePoint(...t)), Mn = `
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

function oi(t) {
  var r;
  if (!t) return null;
  const n = /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i;
  return /radeon/i.test(t) ? "AMD" : /geforce/i.test(t) ? "NVIDIA" : (((r = n.exec(t)) == null ? void 0 : r[0]) || "other").toLocaleUpperCase()
}
const He = {},
  ke = {
    AUDIO: !1,
    CANVAS: !1,
    FONTS: !1,
    SCREEN: !1,
    TIME_ZONE: !1,
    WEBGL: !1
  };
try {
  va && speechSynthesis.getVoices()
} catch {}

function ii() {
  const t = {};
  return {
    getRecords: () => t,
    documentLie: (n, e) => {
      const r = e instanceof Array;
      return t[n] ? r ? t[n] = [...t[n], ...e] : t[n].push(e) : r ? t[n] = e : t[n] = [e]
    }
  }
}
const Yr = ii(),
  {
    documentLie: oe
  } = Yr,
  Jr = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function mn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function si(t) {
  try {
    if (!de) return t;
    const n = t.document.createElement("div");
    n.setAttribute("id", mn()), n.setAttribute("style", Jr), n.innerHTML = "<div><iframe></iframe></div>", t.document.body.appendChild(n);
    const e = [...[...n.childNodes][0].childNodes][0];
    if (!e) return null;
    const {
      contentWindow: r
    } = e || {};
    if (!r) return null;
    const a = r.document.createElement("div");
    return a.innerHTML = "<div><iframe></iframe></div>", r.document.body.appendChild(a), [...[...a.childNodes][0].childNodes][0].contentWindow
  } catch (n) {
    return Y(n, "client blocked behemoth iframe"), t
  }
}
const ir = mn(),
  mt = "Reflect" in globalThis;

function ci(t) {
  return t.constructor.name == "TypeError"
}

function Ee({
  spawnErr: t,
  withStack: n,
  final: e
}) {
  try {
    throw t(), Error()
  } catch (r) {
    return ci(r) ? n ? n(r) : !1 : !0
  } finally {
    e && e()
  }
}

function ui(t) {
  try {
    return t(), !1
  } catch {
    return !0
  }
}

function sr(t) {
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

function it(t, n, e = 1) {
  const r = t;
  return e === 0 ? n.test(r.message) : n.test(r.stack.split(`
`)[e])
}
const li = /at Function\.toString /,
  di = /at Object\.toString/,
  _i = /at (Function\.)?\[Symbol.hasInstance\]/,
  fi = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  cr = /strict mode/;

function ur({
  scope: t,
  apiFunction: n,
  proto: e,
  obj: r,
  lieProps: a
}) {
  if (typeof n != "function") return {
    lied: 0,
    lieTypes: []
  };
  const o = n.name.replace(/get\s/, ""),
    s = r == null ? void 0 : r.name,
    i = Object.getPrototypeOf(n),
    c = self;
  let l = {
    "failed illegal error": !!r && Ee({
      spawnErr: () => {
        r.prototype[o]
      }
    }),
    "failed undefined properties": !!r && !!s && /^(screen|navigator)$/i.test(s) && !!(Object.getOwnPropertyDescriptor(c[s.toLowerCase()], o) || mt && Reflect.getOwnPropertyDescriptor(c[s.toLowerCase()], o)),
    "failed call interface error": Ee({
      spawnErr: () => {
        new n, n.call(e)
      }
    }),
    "failed apply interface error": Ee({
      spawnErr: () => {
        new n, n.apply(e)
      }
    }),
    "failed new instance error": Ee({
      spawnErr: () => {
        new n
      }
    }),
    "failed class extends error": !tt && Ee({
      spawnErr: () => {
        class f extends n {}
      }
    }),
    "failed null conversion error": Ee({
      spawnErr: () => {
        Object.setPrototypeOf(n, null).toString()
      },
      final: () => {
        Object.setPrototypeOf(n, i)
      }
    }),
    "failed toString": !sr(o)[t.Function.prototype.toString.call(n)] || !sr("toString")[t.Function.prototype.toString.call(n.toString)],
    'failed "prototype" in function': "prototype" in n,
    "failed descriptor": !!(Object.getOwnPropertyDescriptor(n, "arguments") || Reflect.getOwnPropertyDescriptor(n, "arguments") || Object.getOwnPropertyDescriptor(n, "caller") || Reflect.getOwnPropertyDescriptor(n, "caller") || Object.getOwnPropertyDescriptor(n, "prototype") || Reflect.getOwnPropertyDescriptor(n, "prototype") || Object.getOwnPropertyDescriptor(n, "toString") || Reflect.getOwnPropertyDescriptor(n, "toString")),
    "failed own property": !!(n.hasOwnProperty("arguments") || n.hasOwnProperty("caller") || n.hasOwnProperty("prototype") || n.hasOwnProperty("toString")),
    "failed descriptor keys": Object.keys(Object.getOwnPropertyDescriptors(n)).sort().toString() != "length,name",
    "failed own property names": Object.getOwnPropertyNames(n).sort().toString() != "length,name",
    "failed own keys names": mt && Reflect.ownKeys(n).sort().toString() != "length,name",
    "failed object toString error": Ee({
      spawnErr: () => {
        Object.create(n).toString()
      },
      withStack: f => de && !it(f, li)
    }) || Ee({
      spawnErr: () => {
        Object.create(new Proxy(n, {})).toString()
      },
      withStack: f => de && !it(f, di)
    }),
    "failed at incompatible proxy error": Ee({
      spawnErr: () => {
        n.arguments, n.caller
      },
      withStack: f => At && !it(f, cr, 0)
    }),
    "failed at toString incompatible proxy error": Ee({
      spawnErr: () => {
        n.toString.arguments, n.toString.caller
      },
      withStack: f => At && !it(f, cr, 0)
    }),
    "failed at too much recursion error": Ee({
      spawnErr: () => {
        Object.setPrototypeOf(n, Object.create(n)).toString()
      },
      final: () => {
        Object.setPrototypeOf(n, i)
      }
    })
  };
  if (o == "toString" || !!a["Function.toString"] || !!a["Permissions.query"]) {
    const f = new Proxy(n, {});
    let d = new Proxy(n, {});
    const h = new Proxy(n, {});
    l = {
      ...l,
      "failed at too much recursion __proto__ error": !Ee({
        spawnErr: () => {
          n.__proto__ = proxy, n++
        },
        final: () => {
          Object.setPrototypeOf(n, i)
        }
      }),
      "failed at chain cycle error": !Ee({
        spawnErr: () => {
          Object.setPrototypeOf(f, Object.create(f)).toString()
        },
        final: () => {
          Object.setPrototypeOf(f, i)
        }
      }),
      "failed at chain cycle __proto__ error": !Ee({
        spawnErr: () => {
          d.__proto__ = d, d++
        },
        final: () => {
          Object.setPrototypeOf(d, i)
        }
      }),
      "failed at reflect set proto": mt && Ee({
        spawnErr: () => {
          throw Reflect.setPrototypeOf(n, Object.create(n)), ir in n, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(n, i)
        }
      }),
      "failed at reflect set proto proxy": mt && !Ee({
        spawnErr: () => {
          Reflect.setPrototypeOf(h, Object.create(h)), ir in h
        },
        final: () => {
          Object.setPrototypeOf(h, i)
        }
      }),
      "failed at instanceof check error": de && (Ee({
        spawnErr: () => {
          n instanceof n
        },
        withStack: g => !it(g, _i)
      }) || Ee({
        spawnErr: () => {
          const g = new Proxy(n, {});
          g instanceof g
        },
        withStack: g => !it(g, fi)
      })),
      "failed at define properties": de && mt && ui(() => {
        Object.defineProperty(n, "", {
          configurable: !0
        }).toString(), Reflect.deleteProperty(n, "")
      })
    }
  }
  const m = Object.keys(l).filter(f => !!l[f]);
  return {
    lied: m.length,
    lieTypes: m
  }
}

function mi(t) {
  const n = a => typeof a < "u" && !!a,
    e = {},
    r = [];
  return {
    getProps: () => e,
    getPropsSearched: () => r,
    searchLies: (a, o) => {
      const {
        target: s,
        ignore: i
      } = o || {};
      let c;
      try {
        if (c = a(), !n(c)) return
      } catch {
        return
      }
      const l = c.prototype ? c.prototype : c;
      [...new Set([...Object.getOwnPropertyNames(l), ...Object.keys(l)])].sort().forEach(u => {
        var h;
        if (u == "constructor" || !!s && !new Set(s).has(u) || !!i && new Set(i).has(u)) return;
        const f = /\s(.+)\]/,
          d = `${c.name?c.name:f.test(c)?(h=f.exec(c))==null?void 0:h[1]:void 0}.${u}`;
        r.push(d);
        try {
          const g = c.prototype ? c.prototype : c;
          let y;
          try {
            if (typeof g[u] == "function") {
              if (y = ur({
                  scope: t,
                  apiFunction: g[u],
                  proto: g,
                  obj: null,
                  lieProps: e
                }), y.lied) {
                oe(d, y.lieTypes), e[d] = y.lieTypes;
                return
              }
              return
            }
            if (u != "name" && u != "length" && u[0] !== u[0].toUpperCase()) {
              const A = ["failed descriptor.value undefined"];
              oe(d, A), e[d] = A;
              return
            }
          } catch {}
          const v = Object.getOwnPropertyDescriptor(g, u).get;
          if (y = ur({
              scope: t,
              apiFunction: v,
              proto: g,
              obj: c,
              lieProps: e
            }), y.lied) {
            oe(d, y.lieTypes), e[d] = y.lieTypes;
            return
          }
          return
        } catch {
          const y = "failed prototype test execution";
          oe(d, y), e[d] = [y];
          return
        }
      })
    }
  }
}

function pi() {
  const t = globalThis;
  if (Gr) return {
    iframeWindow: t,
    div: void 0
  };
  try {
    const n = t.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      a = mn();
    r.setAttribute("id", a), e.appendChild(r), r.innerHTML = `<div style="${Jr}"><iframe></iframe></div>`, document.body.appendChild(e);
    const o = t[n];
    return {
      iframeWindow: si(o) || t,
      div: r
    }
  } catch (n) {
    return Y(n, "client blocked phantom iframe"), {
      iframeWindow: t,
      div: void 0
    }
  }
}

function hi(t) {
  const n = mi(t),
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
  }), e(() => Screen), e(() => speechSynthesis, {
    target: ["getVoices"]
  }), e(() => String, {
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
    a = n.getPropsSearched();
  return {
    lieDetector: n,
    lieList: Object.keys(r).sort(),
    lieDetail: r,
    lieCount: Object.keys(r).reduce((o, s) => o + r[s].length, 0),
    propsSearched: a
  }
}
const gi = t => t && t.filter(n => !/object toString|toString incompatible proxy/.test(n)).length;
let sn, ct, Zr = {},
  Qr = {},
  lr = !1;

function pn() {
  if (lr) return;
  lr = !0;
  try {
    speechSynthesis.getVoices()
  } catch {}
  const {
    iframeWindow: t,
    div: n
  } = pi() || {};
  sn = t, ct = n;
  const {
    lieDetector: e,
    lieDetail: r
  } = hi(sn);
  if (!Gr) {
    const a = e.getProps();
    Zr = Object.keys(a).reduce((o, s) => (o[s] = gi(a[s]), o), {}), Qr = JSON.parse(JSON.stringify(r))
  }
}

function hn() {
  return pn(), sn
}

function ea() {
  return pn(), ct
}

function yi() {
  ct == null || ct.remove(), ct = void 0, sn = void 0
}

function Le() {
  return pn(), Zr
}

function wi() {
  return pn(), Qr
}
const bi = () => {
    const t = Yr.getRecords(),
      n = Object.keys(t).reduce((e, r) => (e += t[r].length, e), 0);
    return {
      data: t,
      totalLies: n
    }
  },
  vi = t => typeof t == "function",
  Ei = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
  en = (t, {
    strict: n = !1
  } = {}) => {
    if (!t) return [];
    const e = [];
    [/([A-Z]{3,}[a-z])/g, /([a-z][A-Z]{3,})/g, /([a-z][A-Z]{2,}[a-z])/g, /([a-z][\d]{2,}[a-z])/g, /([A-Z][\d]{2,}[a-z])/g, /([a-z][\d]{2,}[A-Z])/g].forEach(u => {
      const m = t.match(u);
      if (m) return e.push(m.join(", "))
    });
    const a = [],
      o = t.replace(/\d|\W|_/g, " ").replace(/\s+/g, " ").trim().split(" ").join("_"),
      s = o.length,
      i = [...o];
    i.forEach((u, m) => {
      const f = m + 1,
        d = i[f];
      if (d !== "_" && u !== "_" && f !== s) {
        const g = u + d;
        Ei.test(g) && a.push(g)
      }
    });
    const c = [...!n && a.length < 3 ? [] : a, ...!n && e.length < 4 ? [] : e],
      l = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return c.filter(u => !l.includes(u))
  };

function ta(t) {
  if (t) return ("" + t).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...n) => `${n[1]}${n[6][0]}${n[6].slice(1).replace(/\d/g,"0")}s`)
}
const Ai = t => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + t).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  na = t => {
    if (!t) return;
    const n = Ai(t),
      e = n.length,
      r = /\s{2,}|^\s|\s$/.test(t),
      a = /^ANGLE/.test(t) && !(/^ANGLE \((.+)\)/.exec(t) || [])[1],
      o = en(t, {
        strict: !0
      }).join(", "),
      s = e && !r && !a,
      i = s && !o.length ? "high" : s && o.length ? "moderate" : "low",
      c = i == "high" ? "A" : i == "moderate" ? "C" : "F",
      l = new Set([r ? "found extra spaces" : void 0, a ? "broken angle structure" : void 0]);
    return l.delete(void 0), {
      parts: n,
      warnings: [...l],
      gibbers: o,
      confidence: i,
      grade: c
    }
  },
  Ni = () => {
    const t = [];
    return {
      getBin: () => t,
      sendToTrash: (n, e, r = void 0) => {
        const o = vi(e) ? "proxy behavior detected" : e;
        return t.push({
          name: n,
          value: o
        }), r
      }
    }
  },
  ra = Ni(),
  {
    sendToTrash: le
  } = ra,
  Ti = () => ({
    trashBin: ra.getBin()
  });

function Si(t) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}

function Oi(t) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}
async function Ri() {
  try {
    await se();
    const t = B => {
        try {
          return B()
        } catch {
          return
        }
      },
      n = (B, P) => !!B && B.__proto__.constructor.name == P,
      e = () => new Promise(B => {
        const P = t(() => new Si);
        if (!n(P, "Worker")) return P == null || P.terminate(), B(null);
        const H = setTimeout(() => {
          P.terminate(), B(null)
        }, 3e3);
        P.onerror = () => {
          clearTimeout(H), P.terminate(), B(null)
        }, P.onmessage = ee => {
          clearTimeout(H), P.terminate(), B(ee.data)
        }
      }),
      r = () => new Promise(B => {
        const P = t(() => new Oi);
        if (!n(P, "SharedWorker")) return P == null || P.port.close(), B(null);
        const H = setTimeout(() => {
          P.port.close(), B(null)
        }, 3e3);
        P.port.start(), P.port.onmessage = ee => {
          clearTimeout(H), P.port.close(), B(ee.data)
        }
      }),
      a = B => (Y(B), null),
      [o, s] = await Promise.all([r().catch(a), e().catch(a)]),
      i = o != null && o.userAgent ? o : s;
    if (!i || !i.userAgent) return;
    i.system = kn(i.userAgent), i.device = qr({
      userAgent: i.userAgent
    });
    const {
      system: c,
      userAgent: l,
      userAgentData: u,
      platform: m,
      deviceMemory: f,
      hardwareConcurrency: d
    } = i, h = "does not match worker scope";
    if (m != navigator.platform && oe("Navigator.platform", h), l != navigator.userAgent && oe("Navigator.userAgent", h), d && d != navigator.hardwareConcurrency && oe("Navigator.hardwareConcurrency", h), f && f != navigator.deviceMemory && oe("Navigator.deviceMemory", h), i.lies.proto) {
      const {
        proto: B
      } = i.lies;
      Object.keys(B).forEach(H => {
        const ee = `WorkerGlobalScope.${H}`;
        B[H].forEach(_e => {
          oe(ee, _e)
        })
      })
    }
    const [g, y] = zr(l, m);
    g != y && (i.lied = !0, i.lies.os = `${y} platform and ${g} user agent do not match`, oe("WorkerGlobalScope", i.lies.os));
    const M = $r({
        ua: l,
        os: c,
        isBrave: !1
      }),
      v = /safari/i.test(M) || /iphone|ipad/i.test(l) ? "JavaScriptCore" : /firefox/i.test(l) ? "SpiderMonkey" : /chrome/i.test(l) ? "V8" : void 0;
    v != ar && (i.lied = !0, i.lies.engine = `${ar} JS runtime and ${v} user agent do not match`, oe("WorkerGlobalScope", i.lies.engine));
    const N = B => (/\d+/.exec(B) || [])[0],
      A = N(M),
      I = N(u ? u.uaFullVersion ?? "" : ""),
      T = I && A,
      w = I == A;
    T && !w && (i.lied = !0, i.lies.version = `userAgentData version ${I} and user agent version ${A} do not match`, oe("WorkerGlobalScope", i.lies.version));
    const S = de && CSS.supports("accent-color: initial");
    ((B, P) => {
      if (!/windows|mac/i.test(B) || !(P != null && P.platformVersion)) return !1;
      if (P.platform == "macOS") return S ? /_/.test(P.platformVersion) : !1;
      const H = (/windows ([\d|\.]+)/i.exec(B) || [])[1],
        ee = +H == 10,
        {
          platformVersion: ve
        } = P,
        Ae = {
          "6.1": "7",
          "6.2": "8",
          "6.3": "8.1",
          "10.0": "10"
        } [ve];
      if (!S && Ae) return Ae != H;
      const ye = ve.split(".");
      if (ye.length != 3) return !0;
      const fe = +ye[0] > 0;
      return fe && !ee || !fe && ee
    })(i.device, u) && (i.lied = !0, i.lies.platformVersion = "platform version is fake", oe("WorkerGlobalScope", i.lies.platformVersion)), i.userAgentVersion = A, i.userAgentDataVersion = I, i.userAgentEngine = v;
    const x = {
      ...na(i.webglRenderer) || {},
      compressedGPU: ta(i.webglRenderer)
    };
    return {
      ...i,
      gpu: x,
      uaPostReduction: Kr(i.userAgent)
    }
  } catch (t) {
    Y(t, "workers failed or blocked by client");
    return
  }
}
const dr = Math.random();
async function Ii() {
  const t = new OfflineAudioContext(1, 100, 44100),
    n = t.createOscillator();
  return n.frequency.value = 0, n.start(0), t.startRendering(), new Promise(e => {
    t.oncomplete = r => {
      var o, s;
      const a = (s = (o = r.renderedBuffer).getChannelData) == null ? void 0 : s.call(o, 0);
      a || e(!1), e("" + [...new Set(a)] != "0")
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
async function Di() {
  var e, r, a;
  const t = [],
    n = o => {
      var s;
      try {
        (s = o == null ? void 0 : o.close) == null || s.call(o)
      } catch {}
    };
  try {
    await se();
    try {
      window.OfflineAudioContext = OfflineAudioContext || webkitOfflineAudioContext
    } catch {}
    if (!window.OfflineAudioContext) return;
    const o = Le(),
      s = o["AudioBuffer.getChannelData"],
      i = o["AudioBuffer.copyFromChannel"];
    let c = s || i || !1;
    const l = 5e3,
      u = new OfflineAudioContext(1, l, 44100);
    t.push(u);
    const m = u.createAnalyser(),
      f = u.createOscillator(),
      d = u.createDynamicsCompressor(),
      h = u.createBiquadFilter(),
      g = new Float32Array(m.frequencyBinCount);
    (e = m.getFloatFrequencyData) == null || e.call(m, g);
    const y = new Set(g).size;
    if (y > 1) {
      c = !0;
      const U = `expected -Infinity (silence) and got ${y} frequencies`;
      oe("AnalyserNode.getFloatFrequencyData", U)
    }
    const M = {
        "AnalyserNode.channelCount": k(() => m.channelCount),
        "AnalyserNode.channelCountMode": k(() => m.channelCountMode),
        "AnalyserNode.channelInterpretation": k(() => m.channelInterpretation),
        "AnalyserNode.context.sampleRate": k(() => m.context.sampleRate),
        "AnalyserNode.fftSize": k(() => m.fftSize),
        "AnalyserNode.frequencyBinCount": k(() => m.frequencyBinCount),
        "AnalyserNode.maxDecibels": k(() => m.maxDecibels),
        "AnalyserNode.minDecibels": k(() => m.minDecibels),
        "AnalyserNode.numberOfInputs": k(() => m.numberOfInputs),
        "AnalyserNode.numberOfOutputs": k(() => m.numberOfOutputs),
        "AnalyserNode.smoothingTimeConstant": k(() => m.smoothingTimeConstant),
        "AnalyserNode.context.listener.forwardX.maxValue": k(() => Te(() => m.context.listener.forwardX.maxValue)),
        "BiquadFilterNode.gain.maxValue": k(() => h.gain.maxValue),
        "BiquadFilterNode.frequency.defaultValue": k(() => h.frequency.defaultValue),
        "BiquadFilterNode.frequency.maxValue": k(() => h.frequency.maxValue),
        "DynamicsCompressorNode.attack.defaultValue": k(() => d.attack.defaultValue),
        "DynamicsCompressorNode.knee.defaultValue": k(() => d.knee.defaultValue),
        "DynamicsCompressorNode.knee.maxValue": k(() => d.knee.maxValue),
        "DynamicsCompressorNode.ratio.defaultValue": k(() => d.ratio.defaultValue),
        "DynamicsCompressorNode.ratio.maxValue": k(() => d.ratio.maxValue),
        "DynamicsCompressorNode.release.defaultValue": k(() => d.release.defaultValue),
        "DynamicsCompressorNode.release.maxValue": k(() => d.release.maxValue),
        "DynamicsCompressorNode.threshold.defaultValue": k(() => d.threshold.defaultValue),
        "DynamicsCompressorNode.threshold.minValue": k(() => d.threshold.minValue),
        "OscillatorNode.detune.maxValue": k(() => f.detune.maxValue),
        "OscillatorNode.detune.minValue": k(() => f.detune.minValue),
        "OscillatorNode.frequency.defaultValue": k(() => f.frequency.defaultValue),
        "OscillatorNode.frequency.maxValue": k(() => f.frequency.maxValue),
        "OscillatorNode.frequency.minValue": k(() => f.frequency.minValue)
      },
      v = U => new Promise(j => {
        const $ = U.createAnalyser(),
          re = U.createOscillator(),
          me = U.createDynamicsCompressor();
        try {
          re.type = "triangle", re.frequency.value = 1e4, me.threshold.value = -50, me.knee.value = 40, me.attack.value = 0
        } catch {}
        return re.connect(me), me.connect($), me.connect(U.destination), re.start(0), U.startRendering(), U.addEventListener("complete", pe => {
          var Ue;
          try {
            me.disconnect(), re.disconnect();
            const Pe = new Float32Array($.frequencyBinCount);
            (Ue = $.getFloatFrequencyData) == null || Ue.call($, Pe);
            const $e = new Float32Array($.fftSize);
            return "getFloatTimeDomainData" in $ && $.getFloatTimeDomainData($e), j({
              floatFrequencyData: Pe,
              floatTimeDomainData: $e,
              buffer: pe.renderedBuffer,
              compressorGainReduction: me.reduction.value || me.reduction
            })
          } catch {
            return j(null)
          }
        })
      });
    await se();
    const [N, A] = await Promise.all([v(u), Ii().catch(() => !1)]), {
      floatFrequencyData: I,
      floatTimeDomainData: T,
      buffer: w,
      compressorGainReduction: S
    } = N || {};
    await se();
    const E = (U, j, $) => {
        const re = Math.min($, U.length),
          me = [];
        for (let pe = j; pe < re; pe++) me.push(U[pe]);
        return me
      },
      D = U => {
        if (!U) return 0;
        let j = 0;
        for (let $ = 0; $ < U.length; $++) j += Math.abs(U[$]);
        return j
      },
      x = D(I),
      B = D(T),
      P = new Float32Array(l);
    let H = new Float32Array;
    w && ((r = w.copyFromChannel) == null || r.call(w, P, 0), H = ((a = w.getChannelData) == null ? void 0 : a.call(w, 0)) || []);
    const ee = E(P, 4500, 4600),
      ve = E(H, 4500, 4600),
      _e = D(E(H, 4500, l));
    A && (c = !0, oe("AudioBuffer", "audio is fake"));
    const Ae = "" + ve == "" + ee,
      ye = "copyFromChannel" in AudioBuffer.prototype;
    ye && !Ae && (c = !0, oe("AudioBuffer", "getChannelData and copyFromChannel samples mismatch"));
    const fe = new Set(H).size;
    if (fe == l) {
      const U = `${fe} unique samples of ${l} is too high`;
      le("AudioBuffer", U)
    }
    const W = (U, j) => Math.floor(Math.random() * (j - U + 1)) + U,
      Oe = (U, j, $) => {
        const {
          length: re
        } = j, me = 20, pe = W(275, re - (me + 1)), Ue = pe + me / 2, Pe = pe + me;
        j.getChannelData(0)[pe] = U, j.getChannelData(0)[Ue] = U, j.getChannelData(0)[Pe] = U, j.copyFromChannel($, 0);
        const $e = [j.getChannelData(0)[pe] === 0 ? Math.random() : 0, j.getChannelData(0)[Ue] === 0 ? Math.random() : 0, j.getChannelData(0)[Pe] === 0 ? Math.random() : 0];
        return [...new Set([...j.getChannelData(0), ...$, ...$e])].filter(Yt => Yt !== 0)
      },
      at = (U, j, $) => {
        j.copyToChannel($.map(() => U), 0);
        const re = j.getChannelData(0)[0];
        return [...j.getChannelData(0)].map(pe => pe !== re || !pe ? Math.random() : pe).filter(pe => pe !== re)
      };
    let G = (() => {
      try {
        const j = [...new Set([...Oe(dr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...at(dr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3))])];
        return +(j.length !== 1 && j.reduce(($, re) => $ += +re, 0))
      } catch {
        return 0
      }
    })();
    if (!G) {
      const U = Math.min(100, H.length),
        j = new Set;
      for (let $ = 0; $ < U; $++) {
        const re = H[$];
        j.has(re) || (j.add(re), G += re)
      }
    }
    const ce = {
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
    G && (c = !0, oe("AudioBuffer", "sample noise detected"));
    const ne = "" + [S, x, B],
      ie = ce[ne];
    return ie && !ie.includes(_e) && (ke.AUDIO = !0, le("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: fe,
      compressorGainReduction: S,
      floatFrequencyDataSum: x,
      floatTimeDomainDataSum: B,
      sampleSum: _e,
      binsSample: ve,
      copySample: ye ? ee : [void 0],
      values: M,
      noise: G,
      baseLatency: ki(),
      lied: c
    }
  } catch (o) {
    Y(o, "OfflineAudioContext failed or blocked by client");
    return
  } finally {
    t.forEach(n)
  }
}

function ki() {
  var t;
  try {
    const n = window.AudioContext ?? window.webkitAudioContext;
    if (!n) return -2;
    const e = new n,
      r = e.baseLatency;
    return (t = e.close) == null || t.call(e), typeof r == "number" ? r : -1
  } catch (n) {
    return Y(n), -1
  }
}

function vt(t) {
  t && (t.width = 0, t.height = 0, t.remove())
}
const Mi = () => {
    const a = {
        willReadFrequently: !0,
        desynchronized: !0
      },
      o = document.createElement("canvas"),
      s = document.createElement("canvas"),
      i = document.createElement("canvas");
    try {
      const c = o.getContext("2d", a),
        l = s.getContext("2d", a),
        u = i.getContext("2d", a);
      if (!c || !l || !u) throw new Error("canvas context blocked");
      o.width = 40, o.height = 40, s.width = 8, s.height = 8, i.width = 8, i.height = 8;
      const m = new Uint8Array(256),
        f = new Uint8Array(256);
      let d = 0;
      for (let N = 0; N < 8; N++)
        for (let A = 0; A < 8; A++) {
          const I = ~~(Math.random() * 256),
            T = ~~(Math.random() * 256),
            w = ~~(Math.random() * 256);
          m[d] = I, m[d + 1] = T, m[d + 2] = w, m[d + 3] = 255, d += 4, l.fillStyle = `rgba(${I}, ${T}, ${w}, 255)`, l.fillRect(N, A, 1, 1)
        }
      d = 0;
      for (let N = 0; N < 8; N++)
        for (let A = 0; A < 8; A++) {
          const I = l.getImageData(N, A, 1, 1).data,
            T = I[0],
            w = I[1],
            S = I[2],
            E = I[3];
          u.fillStyle = `rgba(${T}, ${w}, ${S}, ${E})`, u.fillRect(N, A, 1, 1);
          const D = u.getImageData(N, A, 1, 1).data,
            x = D[0],
            B = D[1],
            P = D[2],
            H = D[3];
          f[d] = T, f[d + 1] = w, f[d + 2] = S, f[d + 3] = E, d += 4, c.fillStyle = `rgba(${T!==x?x:255}, ${w!==B?B:255}, ${S!==P?P:255}, ${E!==H?H:1})`, c.fillRect(N * 5, A * 5, 5, 5)
        }
      const h = [],
        g = new Set;
      for (let N = 0; N < 64; N++) {
        const A = N * 4,
          I = m[A] !== f[A],
          T = m[A + 1] !== f[A + 1],
          w = m[A + 2] !== f[A + 2],
          S = m[A + 3] !== f[A + 3];
        if (I || T || w || S) {
          const E = (I ? "r" : "") + (T ? "g" : "") + (w ? "b" : "") + (S ? "a" : "");
          g.add(E), h.push([N, E])
        }
      }
      const y = o.toDataURL(),
        M = g.size ? [...g].sort().join(", ") : void 0,
        v = h.length || void 0;
      return {
        rgba: M,
        pixels: v,
        pixelImage: y
      }
    } catch {
      return
    } finally {
      vt(o), vt(s), vt(i)
    }
  },
  bn = ({
    canvas: t,
    context: n,
    strokeText: e = !1,
    cssFontFamily: r = "",
    area: a = {
      width: 50,
      height: 50
    },
    rounds: o = 10,
    maxShadowBlur: s = 50,
    seed: i = 500,
    offset: c = 2001000001,
    multiplier: l = 15e3
  }) => {
    if (!n) return;
    n.clearRect(0, 0, t.width, t.height), t.width = a.width, t.height = a.height, t.style && (t.style.display = "none");
    const m = (({
        seed: T,
        offset: w,
        multiplier: S
      }) => {
        let E = Number(T) % Number(w);
        return {
          getNextSeed: () => (E = Number(S) * E % Number(w), E)
        }
      })({
        seed: i,
        offset: c,
        multiplier: l
      }),
      {
        getNextSeed: f
      } = m,
      d = (T, w, S, E) => {
        const D = (T - 1) / w * (S || 1) || 0;
        return E ? D : Math.floor(D)
      },
      h = (T, w, S, E, D) => {
        const {
          width: x,
          height: B
        } = S, P = T.createRadialGradient(d(D(), w, x), d(D(), w, B), d(D(), w, x), d(D(), w, x), d(D(), w, B), d(D(), w, x));
        P.addColorStop(0, E[d(D(), w, E.length)]), P.addColorStop(1, E[d(D(), w, E.length)]), T.fillStyle = P
      },
      g = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      y = (T, w, S, E) => {
        const {
          width: D,
          height: x
        } = S, B = 2.99;
        T.font = `${x/B}px ${r.replace(/!important/gm,"")}`, T.strokeText("👾A", d(E(), w, D), d(E(), w, x), d(E(), w, D))
      },
      M = (T, w, S, E) => {
        const {
          width: D,
          height: x
        } = S;
        T.beginPath(), T.arc(d(E(), w, D), d(E(), w, x), d(E(), w, Math.min(D, x)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), T.stroke()
      },
      v = (T, w, S, E) => {
        const {
          width: D,
          height: x
        } = S;
        T.beginPath(), T.moveTo(d(E(), w, D), d(E(), w, x)), T.bezierCurveTo(d(E(), w, D), d(E(), w, x), d(E(), w, D), d(E(), w, x), d(E(), w, D), d(E(), w, x)), T.stroke()
      },
      N = (T, w, S, E) => {
        const {
          width: D,
          height: x
        } = S;
        T.beginPath(), T.moveTo(d(E(), w, D), d(E(), w, x)), T.quadraticCurveTo(d(E(), w, D), d(E(), w, x), d(E(), w, D), d(E(), w, x)), T.stroke()
      },
      A = (T, w, S, E) => {
        if (!("ellipse" in T)) return;
        const {
          width: D,
          height: x
        } = S;
        T.beginPath(), T.ellipse(d(E(), w, D), d(E(), w, x), d(E(), w, Math.floor(D / 2)), d(E(), w, Math.floor(x / 2)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), T.stroke()
      },
      I = [M, v, N];
    tt || I.push(A), e && I.push(y), [...Array(o)].forEach(T => {
      h(n, c, a, g, f), n.shadowBlur = d(f(), c, s, !0), n.shadowColor = g[d(f(), c, g.length)];
      const w = I[d(f(), c, I.length)];
      w(n, c, a, f), n.fill()
    })
  };
async function Li() {
  let t, n;
  try {
    await se();
    const e = Le(),
      r = hn(),
      a = e["HTMLCanvasElement.toDataURL"],
      o = e["HTMLCanvasElement.getContext"],
      s = e["CanvasRenderingContext2D.fillText"] || e["CanvasRenderingContext2D.font"] || e["CanvasRenderingContext2D.getImageData"] || e["CanvasRenderingContext2D.strokeText"],
      i = e["String.fromCodePoint"];
    let c = e["CanvasRenderingContext2D.measureText"] || e["TextMetrics.actualBoundingBoxAscent"] || e["TextMetrics.actualBoundingBoxDescent"] || e["TextMetrics.actualBoundingBoxLeft"] || e["TextMetrics.actualBoundingBoxRight"] || e["TextMetrics.fontBoundingBoxAscent"] || e["TextMetrics.fontBoundingBoxDescent"] || e["TextMetrics.width"],
      l = a || o || s || c || i || !1,
      u = window;
    !Vr && r && (u = r);
    const m = u.document;
    t = m.createElement("canvas");
    const f = t.getContext("2d", {
      willReadFrequently: !1
    });
    n = m.createElement("canvas");
    const d = n.getContext("2d", {
      desynchronized: !0,
      willReadFrequently: !0
    });
    if (!f) throw new Error("canvas context blocked");
    await se();
    const h = tt ? 50 : 75;
    bn({
      canvas: t,
      context: f,
      strokeText: !0,
      cssFontFamily: Mn,
      area: {
        width: h,
        height: h
      },
      rounds: 10
    });
    const g = t.toDataURL();
    await se();
    const y = Mi();
    await se();
    const M = Mn.replace(/!important/gm, "");
    f.font = `10px ${M}`;
    const v = new Set,
      N = Xr.reduce((P, H) => {
        const {
          actualBoundingBoxAscent: ee,
          actualBoundingBoxDescent: ve,
          actualBoundingBoxLeft: _e,
          actualBoundingBoxRight: Ae,
          fontBoundingBoxAscent: ye,
          fontBoundingBoxDescent: fe,
          width: W
        } = f.measureText(H) || {}, Oe = [ee, ve, _e, Ae, ye, fe, W].join(",");
        return v.has(Oe) || (v.add(Oe), P.add(H)), P
      }, new Set),
      A = 1e-5 * [...v].map(P => P.split(",").reduce((H, ee) => H += +ee || 0, 0)).reduce((P, H) => P += H, 0),
      I = 75;
    await se(), bn({
      canvas: t,
      context: f,
      area: {
        width: I,
        height: I
      }
    });
    const T = t.toDataURL();
    await se(), bn({
      canvas: n,
      context: d,
      area: {
        width: I,
        height: I
      }
    });
    const w = n.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `50px ${M}`, f.fillText("A", 7, 37);
    const S = t.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `35px ${M}`, f.fillText("👾", 0, 37);
    const E = t.toDataURL();
    f.clearRect(0, 0, t.width, t.height), (y && y.pixels || Math.max(...f.getImageData(0, 0, 8, 8).data)) && (l = !0, oe("CanvasRenderingContext2D.getImageData", "pixel data modified")), t.width = 2, t.height = 2, f.fillStyle = "#000", f.fillRect(0, 0, t.width, t.height), f.fillStyle = "#fff", f.fillRect(2, 2, 1, 1), f.beginPath(), f.arc(0, 0, 2, 0, 1, !0), f.closePath(), f.fill();
    const D = f.getImageData(0, 0, 2, 2).data.join(""),
      x = {
        BLINK: ["255255255255178178178255246246246255555555255", "255255255255192192192255240240240255484848255", "255255255255177177177255246246246255535353255", "255255255255128128128255191191191255646464255", "255255255255178178178255247247247255565656255", "255255255255174174174255242242242255474747255", "255255255255229229229255127127127255686868255", "255255255255192192192255244244244255535353255"],
        GECKO: ["255255255255191191191255207207207255646464255", "255255255255192192192255240240240255484848255", "255255255255191191191255239239239255646464255", "255255255255191191191255223223223255606060255", "255255255255171171171255223223223255606060255", "255255255255188188188255245245245255525252255"],
        WEBKIT: ["255255255255185185185255233233233255474747255", "255255255255185185185255229229229255474747255", "255255255255185185185255218218218255474747255", "255255255255192192192255240240240255484848255", "255255255255178178178255247247247255565656255", "255255255255178178178255247247247255565656255", "255255255255192192192255240240240255484848255", "255255255255186186186255218218218255464646255"]
      };
    He.imageDataLowEntropy = D, (de && !x.BLINK.includes(D) || At && !x.GECKO.includes(D) || tt && !x.WEBKIT.includes(D)) && (ke.CANVAS = !0), ke.CANVAS && le("CanvasRenderingContext2D.getImageData", "suspicious pixel data");
    const B = P => {
      const H = Oe => Oe % 1 !== 0,
        {
          actualBoundingBoxAscent: ee,
          actualBoundingBoxDescent: ve,
          actualBoundingBoxLeft: _e,
          actualBoundingBoxRight: Ae,
          fontBoundingBoxAscent: ye,
          fontBoundingBoxDescent: fe
        } = P.measureText("") || {};
      return [ee, ve, _e, Ae, ye, fe].find(Oe => H(Oe || 0))
    };
    return await se(), B(f) && (c = !0, l = !0, oe("CanvasRenderingContext2D.measureText", "metric noise detected")), {
      dataURI: g,
      paintURI: T,
      paintCpuURI: w,
      textURI: S,
      emojiURI: E,
      mods: y,
      textMetricsSystemSum: A,
      liedTextMetrics: c,
      emojiSet: [...N],
      lied: l
    }
  } catch (e) {
    Y(e);
    return
  } finally {
    vt(t), vt(n)
  }
}

function Pi() {
  const t = (e, {
      require: [r]
    }) => {
      try {
        const a = e == "getComputedStyle" ? getComputedStyle(document.body) : e == "HTMLElement.style" ? document.body.style : e == "CSSRuleList.style" ? document.styleSheets[0].cssRules[0].style : void 0;
        if (!a) throw new TypeError("invalid argument string");
        const o = Object.getPrototypeOf(a),
          s = Object.getOwnPropertyNames(o),
          i = [],
          c = /^--.*$/;
        Object.keys(a).forEach(y => {
          const M = !isNaN(+y),
            v = a[y],
            N = c.test(y),
            A = c.test(v);
          if (M && !A) return i.push(v);
          if (!M && !N) return i.push(y)
        });
        const l = {},
          u = y => y.charAt(0).toUpperCase() + y.slice(1),
          m = y => y.charAt(0).toLowerCase() + y.slice(1),
          f = y => y.slice(1),
          d = /[A-Z]/g;
        i.forEach(y => {
          if (l[y]) return;
          const M = y.indexOf("-") > -1,
            v = d.test(y),
            N = y.charAt(0),
            A = M && N == "-",
            I = v && N == N.toUpperCase();
          if (y = A ? f(y) : I ? m(y) : y, M) {
            const T = y.split("-").map((w, S) => S == 0 ? w : u(w)).join("");
            T in a ? l[T] = !0 : u(T) in a && (l[u(T)] = !0)
          } else if (v) {
            const T = y.replace(d, w => "-" + w.toLowerCase());
            T in a ? l[T] = !0 : `-${T}` in a && (l[`-${T}`] = !0)
          }
        });
        const h = [...new Set([...s, ...i, ...Object.keys(l)])],
          g = ("" + o).match(/\[object (.+)\]/)[1];
        return {
          keys: h,
          interfaceName: g
        }
      } catch (a) {
        r(a);
        return
      }
    },
    n = e => {
      var r;
      try {
        const a = ["ActiveBorder", "ActiveCaption", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "VisitedText", "Window", "WindowFrame", "WindowText"],
          o = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
          s = i => ({
            colors: a.map(c => (i.setAttribute("style", `background-color: ${c} !important`), {
              [c]: getComputedStyle(i).backgroundColor
            })),
            fonts: o.map(c => {
              i.setAttribute("style", `font: ${c} !important`);
              const l = getComputedStyle(i);
              return {
                [c]: `${l.fontSize} ${l.fontFamily}`
              }
            })
          });
        if (!e) {
          e = document.createElement("div"), document.body.append(e);
          const i = s(e);
          return (r = e.parentNode) == null || r.removeChild(e), i
        }
        return s(e)
      } catch (a) {
        Y(a);
        return
      }
    };
  try {
    const e = t("getComputedStyle", {
        require: [Y]
      }),
      r = n(ea());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    Y(e);
    return
  }
}

function Ci() {
  const t = (a, o) => o == 0 ? a : t(o, a % o),
    n = (a, o) => {
      const s = t(a, o);
      return `${a/s}/${o/s}`
    },
    e = ({
      body: a,
      type: o,
      rangeStart: s,
      rangeLen: i
    }) => {
      const c = [...Array(i)].map((u, m) => (m += s, `@media(device-${o}:${m}px){body{--device-${o}:${m};}}`)).join("");
      return a.innerHTML = `<style>${c}</style>`, getComputedStyle(a).getPropertyValue(`--device-${o}`).trim()
    },
    r = ({
      body: a,
      width: o,
      height: s
    }) => {
      let i = e({
          body: a,
          type: "width",
          rangeStart: o,
          rangeLen: 1
        }),
        c = e({
          body: a,
          type: "height",
          rangeStart: s,
          rangeLen: 1
        });
      if (i && c) return {
        width: o,
        height: s
      };
      const l = 1e3;
      return [...Array(10)].find((u, m) => (i || (i = e({
        body: a,
        type: "width",
        rangeStart: m * l,
        rangeLen: l
      })), c || (c = e({
        body: a,
        type: "height",
        rangeStart: m * l,
        rangeLen: l
      })), !!(i && c))), {
        width: +i,
        height: +c
      }
    };
  try {
    const a = hn().window,
      {
        body: o
      } = a.document,
      {
        width: s,
        availWidth: i,
        height: c,
        availHeight: l
      } = a.screen,
      u = !(s - i || c - l);
    (screen.width !== s || s > 800 && u) && (ke.IFRAME_SCREEN = !0);
    const m = n(s, c),
      f = v => {
        var N;
        return !!((N = a.matchMedia(v)) != null && N.matches)
      },
      d = v => {
        var N;
        return !!((N = matchMedia(v)) != null && N.matches)
      },
      h = {
        "prefers-reduced-motion": f("(prefers-reduced-motion: no-preference)") ? "no-preference" : f("(prefers-reduced-motion: reduce)") ? "reduce" : void 0,
        "prefers-color-scheme": d("(prefers-color-scheme: light)") ? "light" : d("(prefers-color-scheme: dark)") ? "dark" : void 0,
        monochrome: f("(monochrome)") ? "monochrome" : f("(monochrome: 0)") ? "non-monochrome" : void 0,
        "inverted-colors": f("(inverted-colors: inverted)") ? "inverted" : f("(inverted-colors: none)") ? "none" : void 0,
        "forced-colors": f("(forced-colors: none)") ? "none" : f("(forced-colors: active)") ? "active" : void 0,
        "any-hover": f("(any-hover: hover)") ? "hover" : f("(any-hover: none)") ? "none" : void 0,
        hover: f("(hover: hover)") ? "hover" : f("(hover: none)") ? "none" : void 0,
        "any-pointer": f("(any-pointer: fine)") ? "fine" : f("(any-pointer: coarse)") ? "coarse" : f("(any-pointer: none)") ? "none" : void 0,
        pointer: f("(pointer: fine)") ? "fine" : f("(pointer: coarse)") ? "coarse" : f("(pointer: none)") ? "none" : void 0,
        "device-aspect-ratio": f(`(device-aspect-ratio: ${m})`) ? m : void 0,
        "device-screen": f(`(device-width: ${s}px) and (device-height: ${c}px)`) ? `${s} x ${c}` : void 0,
        "display-mode": f("(display-mode: fullscreen)") ? "fullscreen" : f("(display-mode: standalone)") ? "standalone" : f("(display-mode: minimal-ui)") ? "minimal-ui" : f("(display-mode: browser)") ? "browser" : void 0,
        "color-gamut": f("(color-gamut: rec2020)") ? "rec2020" : f("(color-gamut: p3)") ? "p3" : f("(color-gamut: srgb)") ? "srgb" : void 0,
        orientation: d("(orientation: landscape)") ? "landscape" : d("(orientation: portrait)") ? "portrait" : void 0,
        "dynamic-range": f("(dynamic-range: high)") ? "high" : f("(dynamic-range: standard)") ? "standard" : void 0,
        "prefers-contrast": f("(prefers-contrast: no-preference)") ? "no-preference" : f("(prefers-contrast: more)") ? "more" : f("(prefers-contrast: less)") ? "less" : f("(prefers-contrast: custom)") ? "custom" : void 0,
        "prefers-reduced-transparency": f("(prefers-reduced-transparency: no-preference)") ? "no-preference" : f("(prefers-reduced-transparency: reduce)") ? "reduce" : void 0
      };
    o.innerHTML = `
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
		@media (device-aspect-ratio: ${m}) {body {--device-aspect-ratio: ${m}}}
		@media (device-width: ${s}px) and (device-height: ${c}px) {body {--device-screen: ${s} x ${c}}}
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
    const g = getComputedStyle(o),
      y = {
        "prefers-reduced-motion": g.getPropertyValue("--prefers-reduced-motion").trim() || void 0,
        "prefers-color-scheme": g.getPropertyValue("--prefers-color-scheme").trim() || void 0,
        monochrome: g.getPropertyValue("--monochrome").trim() || void 0,
        "inverted-colors": g.getPropertyValue("--inverted-colors").trim() || void 0,
        "forced-colors": g.getPropertyValue("--forced-colors").trim() || void 0,
        "any-hover": g.getPropertyValue("--any-hover").trim() || void 0,
        hover: g.getPropertyValue("--hover").trim() || void 0,
        "any-pointer": g.getPropertyValue("--any-pointer").trim() || void 0,
        pointer: g.getPropertyValue("--pointer").trim() || void 0,
        "device-aspect-ratio": g.getPropertyValue("--device-aspect-ratio").trim() || void 0,
        "device-screen": g.getPropertyValue("--device-screen").trim() || void 0,
        "display-mode": g.getPropertyValue("--display-mode").trim() || void 0,
        "color-gamut": g.getPropertyValue("--color-gamut").trim() || void 0,
        orientation: g.getPropertyValue("--orientation").trim() || void 0,
        "dynamic-range": g.getPropertyValue("--dynamic-range").trim() || void 0,
        "prefers-contrast": g.getPropertyValue("--prefers-contrast").trim() || void 0,
        "prefers-reduced-transparency": g.getPropertyValue("--prefers-reduced-transparency").trim() || void 0
      },
      M = r({
        body: o,
        width: s,
        height: c
      });
    return {
      mediaCSS: y,
      matchMediaCSS: h,
      screenQuery: M
    }
  } catch (a) {
    Y(a);
    return
  }
}

function xi() {
  const t = atob;
  return {
    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', t("I0JveC1CYW5uZXItYWRz")],
    abpvn: [".quangcao", "#mobileCatfish", t("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [".mainostila", t("LnNwb25zb3JpdA=="), ".ylamainos", t("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", t("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", t("LmhlYWRlci1ibG9ja2VkLWFk"), t("I2FkX2Jsb2NrZXI=")],
    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
    adGuardBase: [".BetterJsPopOverlay", t("I2FkXzMwMFgyNTA="), t("I2Jhbm5lcmZsb2F0MjI="), t("I2NhbXBhaWduLWJhbm5lcg=="), t("I0FkLUNvbnRlbnQ=")],
    adGuardChinese: [t("LlppX2FkX2FfSA=="), t("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", t("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), t("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
    adGuardFrench: ["#pavePub", t("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", t("LmFkc19iYW4=")],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: ["#kauli_yad_1", t("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), t("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), t("LmFkZ29vZ2xl"), t("Ll9faXNib29zdFJldHVybkFk")],
    adGuardMobile: [t("YW1wLWF1dG8tYWRz"), t("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", t("I2FkX2ludmlld19hcmVh")],
    adGuardRussian: [t("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), t("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', t("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
    adGuardSocial: [t("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), t("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: ["#qoo-counter", t("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), t("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), t("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
    adGuardTurkish: ["#backkapat", t("I3Jla2xhbWk="), t("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), t("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), t("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
    bulgarian: [t("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [".yb-floorad", t("LndpZGdldF9wb19hZHNfd2lkZ2V0"), t("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", t("LnNwb25zb3JlZC10ZXh0LWxpbms=")],
    easyListChina: [t("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), t("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", t("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
    easyListCzechSlovak: ["#onlajny-stickers", t("I3Jla2xhbW5pLWJveA=="), t("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", t("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
    easyListDutch: [t("I2FkdmVydGVudGll"), t("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", t("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
    easyListGermany: ["#SSpotIMPopSlider", t("LnNwb25zb3JsaW5rZ3J1ZW4="), t("I3dlcmJ1bmdza3k="), t("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), t("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
    easyListItaly: [t("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", t("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
    easyListLithuania: [t("LnJla2xhbW9zX3RhcnBhcw=="), t("LnJla2xhbW9zX251b3JvZG9z"), t("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), t("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), t("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
    estonian: [t("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [t("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), t("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", t("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
    greekAdBlock: [t("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), t("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), t("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", t("LmFkX19tYWlu"), t("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
    icelandicAbp: [t("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
    listKr: [t("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), t("I2xpdmVyZUFkV3JhcHBlcg=="), t("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), t("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
    listeAr: [t("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", t("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), t("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), t("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
    listeFr: [t("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), t("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), t("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
    officialPolish: ["#ceneo-placeholder-ceneo-12", t("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), t("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), t("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), t("ZGl2I3NrYXBpZWNfYWQ=")],
    ro: [t("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), t("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), t("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
    ruAd: [t("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), t("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), t("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
    thaiAds: ["a[href*=macau-uta-popup]", t("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), t("LmFkczMwMHM="), ".bumq", ".img-kosana"],
    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", t("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
  }
}
async function Bi() {
  try {
    if (!Hi()) return;
    const t = xi(),
      n = Object.keys(t),
      e = [].concat(...n.map(o => t[o])),
      r = await Fi(e),
      a = n.filter(o => {
        const s = t[o];
        return ht(s.map(c => r[c])) > s.length * .6
      });
    return a.sort(), a
  } catch (t) {
    Y(t);
    return
  }
}

function Hi() {
  return tt || ji()
}
async function Fi(t) {
  var o;
  const n = document,
    e = n.createElement("div"),
    r = new Array(t.length),
    a = {};
  _r(e);
  for (let s = 0; s < t.length; ++s) {
    const i = Gi(t[s]);
    i.tagName === "DIALOG" && i.show();
    const c = n.createElement("div");
    _r(c), c.appendChild(i), e.appendChild(c), r[s] = i
  }
  for (; !n.body;) await Ui(50);
  n.body.appendChild(e);
  try {
    for (let s = 0; s < t.length; ++s) r[s].offsetParent || (a[t[s]] = !0)
  } finally {
    (o = e.parentNode) == null || o.removeChild(e)
  }
  return a
}

function _r(t) {
  t.style.setProperty("visibility", "hidden", "important"), t.style.setProperty("display", "block", "important")
}

function ht(t) {
  return t.reduce((n, e) => n + (e ? 1 : 0), 0)
}

function Ui(t) {
  return new Promise(n => setTimeout(n, t))
}

function ji() {
  var a, o;
  const t = window,
    n = navigator;
  if (ht(["userAgentData" in n, "chrome" in t, "CSS" in t && "supports" in t.CSS, "PerformanceLongTaskTiming" in t]) >= 3) {
    const s = (a = n.connection) == null ? void 0 : a.rtt;
    return ht([!("SharedWorker" in t), typeof s == "number" && s > 0 && s % 50 === 0]) >= 2
  }
  return ht(["buildID" in n, "MozAppearance" in (((o = document.documentElement) == null ? void 0 : o.style) ?? {}), "MediaRecorderErrorEvent" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4 ? ht(["onorientationchange" in t, "orientation" in t, /android/i.test(n.appVersion)]) >= 2 : !1
}

function Gi(t) {
  const [n, e] = Vi(t), r = document.createElement(n ?? "div");
  for (const a of Object.keys(e)) {
    const o = e[a].join(" ");
    a === "class" ? r.className = o : r.setAttribute(a, o)
  }
  return r
}

function Vi(t) {
  const n = `Unexpected syntax '${t}'`,
    e = /^\s*([a-z-]*)(.*)$/i.exec(t),
    r = e[1].toLowerCase() || void 0,
    a = {},
    o = /([.:#][\w-]+|\[.+?\])/gi,
    s = (i, c) => {
      a[i] = a[i] || [], a[i].push(c)
    };
  for (;;) {
    const i = o.exec(e[2]);
    if (!i) break;
    const c = i[0];
    if (c[0] === ".") s("class", c.slice(1));
    else if (c[0] === "#") s("id", c.slice(1));
    else if (c[0] === "[") {
      const l = /^\[([\w-]+)([~|^$*]?=)?"?([^"]*?)"?\]$/i.exec(c);
      if (l) s(l[1], l[3] ?? "");
      else throw new Error(n)
    } else throw new Error(n)
  }
  return [r, a]
}

function Wi(t) {
  const n = [],
    e = t.length;
  for (let r = 0; r < e; r++) try {
    t[r]()
  } catch (a) {
    n.push(a.message)
  }
  return n
}

function zi() {
  try {
    return {
      errors: Wi([() => new Function('alert(")')(), () => new Function("const foo;foo.bar")(), () => new Function("null.bar")(), () => new Function("abc.xyz = 123")(), () => new Function("const foo;foo.bar")(), () => new Function("(1).toString(1000)")(), () => new Function("[...undefined].length")(), () => new Function("var x = new Array(-1)")(), () => new Function("const a=1; const a=2;")()])
    }
  } catch (t) {
    Y(t);
    return
  }
}

function $i(t, n) {
  if (!t || !n || !n.length) return !1;
  const e = n.reduce((s, i) => (s[i] = !0, s), {}),
    r = "Cambria Math" in e || "Nirmala UI" in e || "Leelawadee UI" in e || "HoloLens MDL2 Assets" in e || "Segoe Fluent Icons" in e,
    a = "Helvetica Neue" in e || "Luminari" in e || "PingFang HK Light" in e || "InaiMathi Bold" in e || "Galvji" in e || "Chakra Petch" in e,
    o = "Arimo" in e || "MONO" in e || "Ubuntu" in e || "Noto Color Emoji" in e || "Dancing Script" in e || "Droid Sans Mono" in e;
  return r && t != De.WINDOWS || a && t != De.APPLE ? !0 : !!(o && t != De.LINUX)
}

function qi(t, n, e) {
  var r;
  return t ? ((r = t.parentNode) == null || r.replaceChild(n, t), !0) : null
}

function Ki(t, ...n) {
  const e = document.createElement("template");
  return e.innerHTML = t.map((r, a) => `${r}${n[a]||""}`).join(""), document.importNode(e.content, !0)
}
const Ln = {
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
  cn = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  Xi = Object.keys(Pn).map(t => Pn[t]).flat(),
  Yi = Object.keys(Ln).map(t => Ln[t]).flat(),
  Ji = Object.keys(cn).map(t => cn[t]).flat(),
  Zi = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  Qi = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  es = [...Xi, ...Yi, ...Zi, ...Qi, ...Ji].sort();
async function ts() {
  const t = ({
      doc: a,
      id: o,
      emojis: s
    }) => {
      try {
        qi(a.getElementById(o), Ki`
				<div id="pixel-emoji-container">
				<style>
					.pixel-emoji {
						font-family: ${Mn};
						font-size: 200px !important;
						height: auto;
						position: absolute !important;
						transform: scale(1.000999);
					}
					</style>
					${s.map(d=>`<div class="pixel-emoji">${d}</div>`).join("")}
				</div>
			`);
        const i = d => ({
            width: d.inlineSize,
            height: d.blockSize
          }),
          c = new Set,
          u = [...a.getElementsByClassName("pixel-emoji")].reduce((d, h, g) => {
            const y = getComputedStyle(h),
              M = s[g],
              {
                height: v,
                width: N
              } = i(y),
              A = `${N},${v}`;
            return c.has(A) || (c.add(A), d.add(M)), d
          }, new Set),
          m = d => +d.replace("px", ""),
          f = 1e-5 * [...c].map(d => d.split(",").map(h => m(h)).reduce((h, g) => h += +g || 0, 0)).reduce((d, h) => d += h, 0);
        return a.body.removeChild(a.getElementById("pixel-emoji-container")), {
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
    n = async a => {
      try {
        let o = [];
        document.fonts.check(`0px "${mn()}"`) || (o = a.reduce((l, u) => (document.fonts.check(`0px "${u}"`) && l.push(u), l), []));
        const s = a.map(l => new FontFace(l, `local("${l}")`)),
          c = (await Promise.allSettled(s.map(l => l.load()))).reduce((l, u) => (u.status == "fulfilled" && l.push(u.value.family), l), []);
        return [...new Set([...o, ...c])].sort()
      } catch {
        return []
      }
    }, e = a => {
      const o = ({
          fonts: i,
          fontMap: c
        }) => {
          const l = {
              11: c[11].find(d => i.includes(d)),
              10: c[10].find(d => i.includes(d)),
              "8.1": c["8.1"].find(d => i.includes(d)),
              8: c[8].find(d => i.includes(d)),
              7: c[7].filter(d => i.includes(d)).length == c[7].length
            },
            u = "" + Object.keys(l).sort().filter(d => !!l[d]),
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
        s = ({
          fonts: i,
          fontMap: c
        }) => {
          const l = {
              13: c[13].find(d => i.includes(d)),
              12: c[12].find(d => i.includes(d)),
              "10.15-11": c["10.15-11"].find(d => i.includes(d)),
              "10.13-10.14": c["10.13-10.14"].find(d => i.includes(d)),
              "10.12": c["10.12"].find(d => i.includes(d)),
              "10.11": c["10.11"].find(d => i.includes(d)),
              "10.10": c["10.10"].find(d => i.includes(d)),
              "10.9": c["10.9"].filter(d => i.includes(d)).length == c["10.9"].length
            },
            u = "" + Object.keys(l).sort().filter(d => !!l[d]),
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
      return o({
        fonts: a,
        fontMap: Ln
      }) || s({
        fonts: a,
        fontMap: Pn
      })
    }, r = a => Object.keys(cn).reduce((s, i) => {
      const c = cn[i];
      return c.filter(u => a.includes(u)).length == c.length ? [...s, i] : s
    }, []);
  try {
    await se();
    const a = hn(),
      o = Le(),
      s = a && a.document && a.document.body ? a.document : document,
      i = "font-fingerprint",
      c = s.createElement("div");
    c.setAttribute("id", i), s.body.appendChild(c);
    const {
      emojiSet: l,
      pixelSizeSystemSum: u
    } = t({
      doc: s,
      id: i,
      emojis: Xr
    }) || {}, f = await n(es), d = e(f), h = r(f), g = o["FontFace.load"] || o["FontFace.family"] || o["FontFace.status"] || o["String.fromCodePoint"] || o["CSSStyleDeclaration.setProperty"] || o["CSS2Properties.setProperty"] || !1;
    return $i(on, f) && (ke.FONTS = !0, He.FontOsIsBad = !0, le("platform", `${on} system and fonts are uncommon`)), {
      fontFaceLoadFonts: f,
      platformVersion: d,
      apps: h,
      emojiSet: l,
      pixelSizeSystemSum: u,
      lied: g
    }
  } catch (a) {
    Y(a);
    return
  }
}
const q = t => {
    const n = `${JSON.stringify(t)}`;
    return ("0000000" + (n.split("").reduce((r, a, o) => Math.imul(31, r) + n.charCodeAt(o) | 0, 2166136261) >>> 0).toString(16)).substr(-8)
  },
  ns = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var be = (t => (t.WINDOWS = "Windows", t.MAC = "Mac", t.LINUX = "Linux", t.ANDROID = "Android", t.CHROME_OS = "Chrome OS", t))(be || {});
const rs = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function as() {
  var S;
  if (!de) return [];
  const t = "getVideoPlaybackQuality" in HTMLVideoElement.prototype,
    n = CSS.supports("color-scheme: initial"),
    e = CSS.supports("appearance: initial"),
    r = "DisplayNames" in Intl,
    a = CSS.supports("aspect-ratio: initial"),
    o = CSS.supports("border-end-end-radius: initial"),
    s = "randomUUID" in Crypto.prototype,
    i = "BarcodeDetector" in window,
    c = "downlinkMax" in (((S = window.NetworkInformation) == null ? void 0 : S.prototype) || {}),
    l = "ContentIndex" in window,
    u = "ContactsManager" in window,
    m = "EyeDropper" in window,
    f = "FileSystemWritableFileStream" in window,
    d = "HID" in window && "HIDDevice" in window,
    h = "SerialPort" in window && "Serial" in window,
    g = "SharedWorker" in window,
    y = "ontouchstart" in Window && "TouchEvent" in window,
    M = "setAppBadge" in Navigator.prototype,
    v = (E, D) => E ? [D] : [],
    N = {
      [be.ANDROID]: [...v(a, i), ...v(e, l), ...v(t, u), c, ...v(s, !m), ...v(r, !f), ...v(o, !d), ...v(o, !h), !g, y, ...v(n, !M)],
      [be.CHROME_OS]: [...v(a, i), ...v(e, !l), ...v(t, !u), c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, y || !y, ...v(n, !M)],
      [be.WINDOWS]: [...v(a, !i), ...v(e, !l), ...v(t, !u), !c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, y || !y, ...v(n, M)],
      [be.MAC]: [...v(a, i), ...v(e, !l), ...v(t, !u), !c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, !y, ...v(n, M)],
      [be.LINUX]: [...v(a, !i), ...v(e, !l), ...v(t, !u), !c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, !y || !y, ...v(n, !M)]
    },
    A = {
      noContentIndex: e && !l,
      noContactsManager: t && !u,
      noDownlinkMax: !c
    },
    I = Object.keys(N).reduce((E, D) => {
      const x = N[D],
        B = +(x.filter(P => P).length / x.length).toFixed(2);
      return E[D] = B, E
    }, {}),
    T = Object.keys(I).reduce((E, D) => I[E] > I[D] ? E : D),
    w = I[T];
  return [I, w, A]
}
const fr = {
  "-apple-system": be.MAC,
  "Segoe UI": be.WINDOWS,
  Tahoma: be.WINDOWS,
  "Yu Gothic UI": be.WINDOWS,
  "Microsoft JhengHei UI": be.WINDOWS,
  "Microsoft YaHei UI": be.WINDOWS,
  "Meiryo UI": be.WINDOWS,
  Cantarell: be.LINUX,
  Ubuntu: be.LINUX,
  Sans: be.LINUX,
  "sans-serif": be.LINUX,
  "Fira Sans": be.LINUX,
  Roboto: be.ANDROID
};

function os() {
  const {
    body: t
  } = document, n = document.createElement("div");
  t.appendChild(n);
  try {
    const e = String([...rs.reduce((a, o) => (n.setAttribute("style", `font: ${o} !important`), a.add(getComputedStyle(n).fontFamily)), new Set)]),
      r = fr[e];
    return fr[e] ? `${e}:${r}` : e
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
    await se();
    const r = Le(),
      a = ea(),
      o = Object.keys({
        ...navigator.mimeTypes
      }),
      s = os(),
      [i, c, l] = as(),
      u = {
        chromium: de,
        likeHeadless: {
          noChrome: de && !("chrome" in window),
          hasPermissionsBug: de && "permissions" in navigator && await (async () => (await navigator.permissions.query({
            name: "notifications"
          })).state == "prompt" && "Notification" in window && Notification.permission === "denied")(),
          noPlugins: de && navigator.plugins.length === 0,
          noMimeTypes: de && o.length === 0,
          notificationIsDenied: de && "Notification" in window && Notification.permission == "denied",
          hasKnownBgColor: de && (() => {
            let A = a;
            if (a || (A = document.createElement("div"), document.body.appendChild(A)), !A) return !1;
            A.setAttribute("style", "background-color: ActiveText");
            const {
              backgroundColor: I
            } = getComputedStyle(A) || {};
            return a || document.body.removeChild(A), I === "rgb(255, 0, 0)"
          })(),
          prefersLightColor: !!((n = matchMedia("(prefers-color-scheme: light)")) != null && n.matches),
          uaDataIsBlank: "userAgentData" in navigator && (((e = navigator.userAgentData) == null ? void 0 : e.platform) === "" || await navigator.userAgentData.getHighEntropyValues(["platform"]).platform === ""),
          pdfIsDisabled: "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !1,
          noTaskbar: screen.height === screen.availHeight && screen.width === screen.availWidth,
          hasVvpScreenRes: innerWidth === screen.width && outerHeight === screen.height || "visualViewport" in window && visualViewport !== null && visualViewport.width === screen.width && visualViewport.height === screen.height,
          hasSwiftShader: /SwiftShader/.test(""),
          noWebShare: de && CSS.supports("accent-color: initial") && (!("share" in navigator) || !("canShare" in navigator)),
          noContentIndex: !!(l != null && l.noContentIndex),
          noContactsManager: !!(l != null && l.noContactsManager),
          noDownlinkMax: !!(l != null && l.noDownlinkMax)
        },
        headless: {
          webDriverIsOn: CSS.supports("border-end-end-radius: initial") && navigator.webdriver === void 0 || !!navigator.webdriver || !!r["Navigator.webdriver"],
          hasHeadlessUA: /HeadlessChrome/.test(navigator.userAgent) || /HeadlessChrome/.test(navigator.appVersion),
          hasHeadlessWorkerUA: /HeadlessChrome/.test(navigator.userAgent)
        },
        stealth: {
          hasIframeProxy: (() => {
            try {
              const A = document.createElement("iframe");
              return A.srcdoc = ns, !!A.contentWindow
            } catch {
              return !0
            }
          })(),
          hasHighChromeIndex: (() => {
            const A = "chrome";
            return Object.keys(window).slice(-50).includes(A) && Object.getOwnPropertyNames(window).slice(-50).includes(A)
          })(),
          hasBadChromeRuntime: (() => {
            var A;
            if (!("chrome" in window && "runtime" in chrome)) return !1;
            try {
              return "prototype" in chrome.runtime.sendMessage || "prototype" in chrome.runtime.connect || (new chrome.runtime.sendMessage, new chrome.runtime.connect), !0
            } catch (I) {
              return ((A = I == null ? void 0 : I.constructor) == null ? void 0 : A.name) != "TypeError"
            }
          })(),
          hasToStringProxy: !!r["Function.toString"],
          hasBadWebGL: !1
        }
      },
      {
        likeHeadless: m,
        headless: f,
        stealth: d
      } = u,
      h = Object.keys(m),
      g = Object.keys(f),
      y = Object.keys(d),
      M = +(h.filter(A => m[A]).length / h.length * 100).toFixed(0),
      v = +(g.filter(A => f[A]).length / g.length * 100).toFixed(0),
      N = +(y.filter(A => d[A]).length / y.length * 100).toFixed(0);
    return {
      ...u,
      likeHeadlessRating: M,
      headlessRating: v,
      stealthRating: N,
      systemFonts: s,
      platformEstimate: [i, c]
    }
  } catch (r) {
    Y(r);
    return
  }
}
async function ss() {
  const t = n => {
    const r = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"].reduce((a, o) => {
      try {
        const s = new n[o];
        if (!s) return a;
        const {
          locale: i
        } = s.resolvedOptions() || {};
        return [...a, i]
      } catch {
        return a
      }
    }, []);
    return [...new Set(r)]
  };
  try {
    await se();
    const n = Le(),
      e = n["Intl.Collator.resolvedOptions"] || n["Intl.DateTimeFormat.resolvedOptions"] || n["Intl.DisplayNames.resolvedOptions"] || n["Intl.ListFormat.resolvedOptions"] || n["Intl.NumberFormat.resolvedOptions"] || n["Intl.PluralRules.resolvedOptions"] || n["Intl.RelativeTimeFormat.resolvedOptions"] || !1,
      r = Te(() => new Intl.DateTimeFormat(void 0, {
        month: "long",
        timeZoneName: "long"
      }).format(9636444e5)),
      a = Te(() => new Intl.DisplayNames(void 0, {
        type: "language"
      }).of("en-US")),
      o = Te(() => new Intl.ListFormat(void 0, {
        style: "long",
        type: "disjunction"
      }).format(["0", "1"])),
      s = Te(() => new Intl.NumberFormat(void 0, {
        notation: "compact",
        compactDisplay: "long"
      }).format(21e6)),
      i = Te(() => new Intl.PluralRules().select(1)),
      c = Te(() => new Intl.RelativeTimeFormat(void 0, {
        localeMatcher: "best fit",
        numeric: "auto",
        style: "long"
      }).format(1, "year")),
      l = t(Intl);
    return {
      dateTimeFormat: r,
      displayNames: a,
      listFormat: o,
      numberFormat: s,
      pluralRules: i,
      relativeTimeFormat: c,
      locale: "" + l,
      lied: e
    }
  } catch (n) {
    Y(n);
    return
  }
}

function cs() {
  try {
    const t = Le(),
      n = ["acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "cbrt", "cos", "cosh", "expm1", "exp", "hypot", "log", "log1p", "log10", "sin", "sinh", "sqrt", "tan", "tanh", "pow"];
    let e = !1;
    n.forEach(i => {
      t[`Math.${i}`] && (e = !0);
      const c = i == "cos" ? [1e308] : i == "acos" || i == "asin" || i == "atanh" ? [.5] : i == "pow" || i == "atan2" ? [Math.PI, 2] : [Math.PI],
        l = Math[i],
        u = l(...c),
        m = l(...c);
      (isNaN(u) && isNaN(m) ? !0 : u == m) || (e = !0, oe(`Math.${i}`, "expected x and got y"))
    });
    const r = .123,
      a = 5860847362277284e23,
      o = [
        ["acos", [r], `acos(${r})`, 1.4474840516030247, NaN, NaN, 1.4474840516030245],
        ["acos", [Math.SQRT1_2], "acos(Math.SQRT1_2)", .7853981633974483, NaN, NaN, NaN],
        ["acosh", [1e308], "acosh(1e308)", 709.889355822726, NaN, NaN, NaN],
        ["acosh", [Math.PI], "acosh(Math.PI)", 1.811526272460853, NaN, NaN, NaN],
        ["acosh", [Math.SQRT2], "acosh(Math.SQRT2)", .881373587019543, NaN, NaN, .8813735870195432],
        ["asin", [r], `asin(${r})`, .12331227519187199, NaN, NaN, NaN],
        ["asinh", [1e300], "asinh(1e308)", 691.4686750787736, NaN, NaN, NaN],
        ["asinh", [Math.PI], "asinh(Math.PI)", 1.8622957433108482, NaN, NaN, NaN],
        ["atan", [2], "atan(2)", 1.1071487177940904, NaN, NaN, 1.1071487177940906],
        ["atan", [Math.PI], "atan(Math.PI)", 1.2626272556789115, NaN, NaN, NaN],
        ["atanh", [.5], "atanh(0.5)", .5493061443340548, NaN, NaN, .5493061443340549],
        ["atan2", [1e-310, 2], "atan2(1e-310, 2)", 5e-311, NaN, NaN, NaN],
        ["atan2", [Math.PI, 2], "atan2(Math.PI)", 1.0038848218538872, NaN, NaN, NaN],
        ["cbrt", [100], "cbrt(100)", 4.641588833612779, NaN, NaN, NaN],
        ["cbrt", [Math.PI], "cbrt(Math.PI)", 1.4645918875615231, NaN, NaN, 1.4645918875615234],
        ["cos", [r], `cos(${r})`, .9924450321351935, NaN, NaN, NaN],
        ["cos", [Math.PI], "cos(Math.PI)", -1, NaN, NaN, NaN],
        ["cos", [a], `cos(${a})`, -.10868049424995659, NaN, -.9779661551196617, NaN],
        ["cos", [-1e308], "cos(-1e308)", -.8913089376870335, NaN, .99970162388838, NaN],
        ["cos", [13 * Math.E], "cos(13*Math.E)", -.7108118501064331, -.7108118501064332, NaN, NaN],
        ["cos", [57 * Math.E], "cos(57*Math.E)", -.536911695749024, -.5369116957490239, NaN, NaN],
        ["cos", [21 * Math.LN2], "cos(21*Math.LN2)", -.4067775970251724, -.40677759702517235, -.6534063185820197, NaN],
        ["cos", [51 * Math.LN2], "cos(51*Math.LN2)", -.7017203400855446, -.7017203400855445, NaN, NaN],
        ["cos", [21 * Math.LOG2E], "cos(21*Math.LOG2E)", .4362848063618998, .43628480636189976, NaN, NaN],
        ["cos", [25 * Math.SQRT2], "cos(25*Math.SQRT2)", -.6982689820462377, -.6982689820462376, NaN, NaN],
        ["cos", [50 * Math.SQRT1_2], "cos(50*Math.SQRT1_2)", -.6982689820462377, -.6982689820462376, NaN, NaN],
        ["cos", [21 * Math.SQRT1_2], "cos(21*Math.SQRT1_2)", -.6534063185820198, NaN, NaN, NaN],
        ["cos", [17 * Math.LOG10E], "cos(17*Math.LOG10E)", .4537557425982784, .45375574259827833, NaN, NaN],
        ["cos", [2 * Math.LOG10E], "cos(2*Math.LOG10E)", .6459044007438142, NaN, .6459044007438141, NaN],
        ["cosh", [1], "cosh(1)", 1.5430806348152437, NaN, NaN, NaN],
        ["cosh", [Math.PI], "cosh(Math.PI)", 11.591953275521519, NaN, NaN, NaN],
        ["cosh", [492 * Math.LOG2E], "cosh(492*Math.LOG2E)", 9199870313877772e292, 9199870313877774e292, NaN, NaN],
        ["cosh", [502 * Math.SQRT2], "cosh(502*Math.SQRT2)", 10469199669023138e292, 1046919966902314e293, NaN, NaN],
        ["expm1", [1], "expm1(1)", 1.718281828459045, NaN, NaN, 1.7182818284590453],
        ["expm1", [Math.PI], "expm1(Math.PI)", 22.140692632779267, NaN, NaN, NaN],
        ["exp", [r], `exp(${r})`, 1.1308844209474893, NaN, NaN, NaN],
        ["exp", [Math.PI], "exp(Math.PI)", 23.140692632779267, NaN, NaN, NaN],
        ["hypot", [1, 2, 3, 4, 5, 6], "hypot(1, 2, 3, 4, 5, 6)", 9.539392014169456, NaN, NaN, NaN],
        ["hypot", [a, a], `hypot(${a}, ${a})`, 8288489826731116e23, 8288489826731114e23, NaN, NaN],
        ["hypot", [2 * Math.E, -100], "hypot(2*Math.E, -100)", 100.14767208675259, 100.14767208675258, NaN, NaN],
        ["hypot", [6 * Math.PI, -100], "hypot(6*Math.PI, -100)", 101.76102278593319, 101.7610227859332, NaN, NaN],
        ["hypot", [2 * Math.LN2, -100], "hypot(2*Math.LN2, -100)", 100.0096085986525, 100.00960859865252, NaN, NaN],
        ["hypot", [Math.LOG2E, -100], "hypot(Math.LOG2E, -100)", 100.01040630344929, 100.01040630344927, NaN, NaN],
        ["hypot", [Math.SQRT2, -100], "hypot(Math.SQRT2, -100)", 100.00999950004999, 100.00999950005, NaN, NaN],
        ["hypot", [Math.SQRT1_2, -100], "hypot(Math.SQRT1_2, -100)", 100.0024999687508, 100.00249996875078, NaN, NaN],
        ["hypot", [2 * Math.LOG10E, -100], "hypot(2*Math.LOG10E, -100)", 100.00377216279416, 100.00377216279418, NaN, NaN],
        ["log", [r], `log(${r})`, -2.0955709236097197, NaN, NaN, NaN],
        ["log", [Math.PI], "log(Math.PI)", 1.1447298858494002, NaN, NaN, NaN],
        ["log1p", [r], `log1p(${r})`, .11600367575630613, NaN, NaN, NaN],
        ["log1p", [Math.PI], "log1p(Math.PI)", 1.4210804127942926, NaN, NaN, NaN],
        ["log10", [r], `log10(${r})`, -.9100948885606021, NaN, NaN, NaN],
        ["log10", [Math.PI], "log10(Math.PI)", .4971498726941338, .49714987269413385, NaN, NaN],
        ["log10", [Math.E], "log10(Math.E)", .4342944819032518, NaN, NaN, NaN],
        ["log10", [34 * Math.E], "log10(34*Math.E)", 1.9657733989455068, 1.965773398945507, NaN, NaN],
        ["log10", [Math.LN2], "log10(Math.LN2)", -.1591745389548616, NaN, NaN, NaN],
        ["log10", [11 * Math.LN2], "log10(11*Math.LN2)", .8822181462033634, .8822181462033635, NaN, NaN],
        ["log10", [Math.LOG2E], "log10(Math.LOG2E)", .15917453895486158, NaN, NaN, NaN],
        ["log10", [43 * Math.LOG2E], "log10(43*Math.LOG2E)", 1.792642994534448, 1.7926429945344482, NaN, NaN],
        ["log10", [Math.LOG10E], "log10(Math.LOG10E)", -.36221568869946325, NaN, NaN, NaN],
        ["log10", [7 * Math.LOG10E], "log10(7*Math.LOG10E)", .4828823513147936, .48288235131479357, NaN, NaN],
        ["log10", [Math.SQRT1_2], "log10(Math.SQRT1_2)", -.15051499783199057, NaN, NaN, NaN],
        ["log10", [2 * Math.SQRT1_2], "log10(2*Math.SQRT1_2)", .1505149978319906, .15051499783199063, NaN, NaN],
        ["log10", [Math.SQRT2], "log10(Math.SQRT2)", .1505149978319906, .15051499783199063, NaN, NaN],
        ["sin", [a], `sin(${a})`, .994076732536068, NaN, -.20876350121720488, NaN],
        ["sin", [Math.PI], "sin(Math.PI)", 12246467991473532e-32, NaN, 12246063538223773e-32, NaN],
        ["sin", [39 * Math.E], "sin(39*Math.E)", -.7181630308570677, -.7181630308570678, NaN, NaN],
        ["sin", [35 * Math.LN2], "sin(35*Math.LN2)", -.7659964138980511, -.765996413898051, NaN, NaN],
        ["sin", [110 * Math.LOG2E], "sin(110*Math.LOG2E)", .9989410140273756, .9989410140273757, NaN, NaN],
        ["sin", [7 * Math.LOG10E], "sin(7*Math.LOG10E)", .10135692924965616, .10135692924965614, NaN, NaN],
        ["sin", [35 * Math.SQRT1_2], "sin(35*Math.SQRT1_2)", -.3746357547858202, -.37463575478582023, NaN, NaN],
        ["sin", [21 * Math.SQRT2], "sin(21*Math.SQRT2)", -.9892668187780498, -.9892668187780497, NaN, NaN],
        ["sinh", [1], "sinh(1)", 1.1752011936438014, NaN, NaN, NaN],
        ["sinh", [Math.PI], "sinh(Math.PI)", 11.548739357257748, NaN, NaN, 11.548739357257746],
        ["sinh", [Math.E], "sinh(Math.E)", 7.544137102816975, NaN, NaN, NaN],
        ["sinh", [Math.LN2], "sinh(Math.LN2)", .75, NaN, NaN, NaN],
        ["sinh", [Math.LOG2E], "sinh(Math.LOG2E)", 1.9978980091062795, NaN, NaN, NaN],
        ["sinh", [492 * Math.LOG2E], "sinh(492*Math.LOG2E)", 9199870313877772e292, 9199870313877774e292, NaN, NaN],
        ["sinh", [Math.LOG10E], "sinh(Math.LOG10E)", .44807597941469024, NaN, NaN, NaN],
        ["sinh", [Math.SQRT1_2], "sinh(Math.SQRT1_2)", .7675231451261164, NaN, NaN, NaN],
        ["sinh", [Math.SQRT2], "sinh(Math.SQRT2)", 1.935066822174357, NaN, NaN, 1.9350668221743568],
        ["sinh", [502 * Math.SQRT2], "sinh(502*Math.SQRT2)", 10469199669023138e292, 1046919966902314e293, NaN, NaN],
        ["sqrt", [r], `sqrt(${r})`, .3507135583350036, NaN, NaN, NaN],
        ["sqrt", [Math.PI], "sqrt(Math.PI)", 1.7724538509055159, NaN, NaN, NaN],
        ["tan", [-1e308], "tan(-1e308)", .5086861259107568, NaN, NaN, .5086861259107567],
        ["tan", [Math.PI], "tan(Math.PI)", -12246467991473532e-32, NaN, NaN, NaN],
        ["tan", [6 * Math.E], "tan(6*Math.E)", .6866761546452431, .686676154645243, NaN, NaN],
        ["tan", [6 * Math.LN2], "tan(6*Math.LN2)", 1.6182817135715877, 1.618281713571588, NaN, 1.6182817135715875],
        ["tan", [10 * Math.LOG2E], "tan(10*Math.LOG2E)", -3.3537128705376014, -3.353712870537601, NaN, -3.353712870537602],
        ["tan", [17 * Math.SQRT2], "tan(17*Math.SQRT2)", -1.9222955461799982, -1.922295546179998, NaN, NaN],
        ["tan", [34 * Math.SQRT1_2], "tan(34*Math.SQRT1_2)", -1.9222955461799982, -1.922295546179998, NaN, NaN],
        ["tan", [10 * Math.LOG10E], "tan(10*Math.LOG10E)", 2.5824856130712432, 2.5824856130712437, NaN, NaN],
        ["tanh", [r], `tanh(${r})`, .12238344189440875, NaN, NaN, .12238344189440876],
        ["tanh", [Math.PI], "tanh(Math.PI)", .99627207622075, NaN, NaN, NaN],
        ["pow", [r, -100], `pow(${r}, -100)`, 1022089333584519e76, 10220893335845176e75, NaN, NaN],
        ["pow", [Math.PI, -100], "pow(Math.PI, -100)", 19275814160560204e-66, 19275814160560185e-66, NaN, 19275814160560206e-66],
        ["pow", [Math.E, -100], "pow(Math.E, -100)", 37200759760208555e-60, 3720075976020851e-59, NaN, NaN],
        ["pow", [Math.LN2, -100], "pow(Math.LN2, -100)", 8269017203802394, 8269017203802410, NaN, NaN],
        ["pow", [Math.LN10, -100], "pow(Math.LN10, -100)", 6003867926738829e-52, 6003867926738811e-52, NaN, NaN],
        ["pow", [Math.LOG2E, -100], "pow(Math.LOG2E, -100)", 120933355845501e-30, 12093335584550061e-32, NaN, NaN],
        ["pow", [Math.LOG10E, -100], "pow(Math.LOG10E, -100)", 16655929347585958e20, 1665592934758592e21, NaN, 16655929347585955e20],
        ["pow", [Math.SQRT1_2, -100], "pow(Math.SQRT1_2, -100)", 11258999068426162e-1, 11258999068426115e-1, NaN, NaN],
        ["pow", [Math.SQRT2, -100], "pow(Math.SQRT2, -100)", 8881784197001191e-31, 8881784197001154e-31, NaN, NaN],
        ["polyfill", [.002 ** -100], "polyfill pow(2e-3, -100)", 7888609052210102e254, 7888609052210126e254, NaN, NaN]
      ],
      s = {};
    return o.forEach(i => {
      s[i[2]] = k(() => {
        const c = Math[i[0]],
          l = i[0] != "polyfill" ? c(...i[1]) : i[1],
          u = l == i[3],
          m = i[4] ? l == i[4] : !1,
          f = i[5] ? l == i[5] : !1,
          d = i[6] ? l == i[6] : !1;
        return {
          result: l,
          chrome: u,
          firefox: m,
          torBrowser: f,
          safari: d
        }
      })
    }), {
      data: s,
      lied: e
    }
  } catch (t) {
    Y(t);
    return
  }
}
const us = () => ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"].sort();
async function ls() {
  const t = () => {
    try {
      const n = us(),
        e = document.createElement("video"),
        r = new Audio,
        a = "MediaRecorder" in window;
      return n.reduce((s, i) => {
        const c = {
          mimeType: i,
          audioPlayType: r.canPlayType(i),
          videoPlayType: e.canPlayType(i),
          mediaSource: MediaSource.isTypeSupported(i),
          mediaRecorder: a ? MediaRecorder.isTypeSupported(i) : !1
        };
        return !c.audioPlayType && !c.videoPlayType && !c.mediaSource && !c.mediaRecorder || s.push(c), s
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
    Y(n);
    return
  }
}
async function ds(t) {
  try {
    await se();
    const n = Le();
    let e = n["Navigator.appVersion"] || n["Navigator.deviceMemory"] || n["Navigator.doNotTrack"] || n["Navigator.hardwareConcurrency"] || n["Navigator.language"] || n["Navigator.languages"] || n["Navigator.maxTouchPoints"] || n["Navigator.oscpu"] || n["Navigator.platform"] || n["Navigator.userAgent"] || n["Navigator.vendor"] || n["Navigator.plugins"] || n["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      a = k(async () => {
        const u = Te(() => navigator.userAgent),
          m = kn(u),
          f = await Wr();
        return $r({
          ua: u,
          os: m,
          isBrave: f
        })
      }),
      o = {
        platform: k(() => {
          const {
            platform: u
          } = navigator, m = ["win", "linux", "mac", "arm", "pike", "linux", "iphone", "ipad", "ipod", "android", "x11"], f = typeof u == "string" ? u.toLowerCase() : "";
          return !!f && m.some(h => f.includes(h)) || le("platform", `${u} is unusual`), on !== or && (e = !0, oe("Navigator.platform", `${or} platform and ${on} user agent do not match`)), t && u != t.platform && (e = !0), u
        }),
        system: k(() => kn(navigator.userAgent), "userAgent system failed"),
        device: k(() => qr({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: k(() => {
          const {
            userAgent: u
          } = navigator;
          return r || le("userAgent", `${u} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(u) && le("userAgent", "extra spaces detected"), en(u).length && le("userAgent is gibberish", u), t && u != t.userAgent && (e = !0), u.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: Kr((navigator || {}).userAgent),
        appVersion: k(() => {
          const {
            appVersion: u
          } = navigator;
          return r || le("appVersion", `${u} does not match userAgent`), "appVersion" in navigator && !u && le("appVersion", "Living Standard property returned falsy value"), /\s{2,}|^\s|\s$/g.test(u) && le("appVersion", "extra spaces detected"), u.trim().replace(/\s{2,}/, " ")
        }, "appVersion failed"),
        deviceMemory: k(() => {
          var h;
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
          })[String(u)] || le("deviceMemory", `${u} is not a valid value [0.25, 0.5, 1, 2, 4, 8, 16, 32]`);
          const f = ((h = performance == null ? void 0 : performance.memory) == null ? void 0 : h.jsHeapSizeLimit) || null,
            d = f ? +(f / 1073741824).toFixed(1) : 0;
          return d > u && le("deviceMemory", `available memory ${d}GB is greater than device memory ${u}GB`), t && u !== t.deviceMemory && (e = !0), u
        }, "deviceMemory failed"),
        doNotTrack: k(() => {
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
          } [String(u)] || le("doNotTrack - unusual result", u), u
        }, "doNotTrack failed"),
        globalPrivacyControl: k(() => {
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
          } [String(u)] || le("globalPrivacyControl - unusual result", u), u
        }, "globalPrivacyControl failed"),
        hardwareConcurrency: k(() => {
          if (!("hardwareConcurrency" in navigator)) return;
          const {
            hardwareConcurrency: u
          } = navigator;
          return t && u !== t.hardwareConcurrency && (e = !0), u
        }, "hardwareConcurrency failed"),
        language: k(() => {
          const {
            language: u,
            languages: m
          } = navigator;
          if (u && m) {
            const f = (/^.{0,2}/g.exec(u) ?? [""])[0];
            if ((/^.{0,2}/g.exec(m[0]) ?? [""])[0] != f && le("language/languages", `${[u,m].join(" ")} mismatch`), t) {
              u != t.language && (e = !0, oe("Navigator.language", `${u} does not match worker scope`));
              const h = m.join(",");
              h !== t.languages.join(",") && (e = !0, oe("Navigator.languages", `${h} does not match worker scope`))
            }
            return `${m.join(", ")} (${u})`
          }
          return `${u} ${m}`
        }, "language(s) failed"),
        maxTouchPoints: k(() => "maxTouchPoints" in navigator ? navigator.maxTouchPoints : null, "maxTouchPoints failed"),
        vendor: k(() => navigator.vendor, "vendor failed"),
        mimeTypes: k(() => {
          const {
            mimeTypes: u
          } = navigator;
          return u ? [...u].map(m => m.type) : []
        }, "mimeTypes failed"),
        oscpu: k(() => navigator.oscpu, "oscpu failed"),
        plugins: k(() => {
          const {
            plugins: u
          } = navigator;
          if (!(u instanceof PluginArray)) return;
          const m = u ? [...u].map(f => ({
            name: f.name,
            description: f.description,
            filename: f.filename,
            version: f.version
          })) : [];
          return m.length && m.forEach(f => {
            const {
              name: d,
              description: h
            } = f, g = en(d), y = en(h);
            g.length && le("plugin name is gibberish", d), y.length && le("plugin description is gibberish", h)
          }), m
        }, "plugins failed"),
        properties: k(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: _s(),
        privateClickMeasurement: fs(),
        pdfViewerEnabled: ms()
      },
      s = () => k(() => {
        const u = navigator;
        if (!(!u.userAgentData || !u.userAgentData.getHighEntropyValues)) return u.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(m => {
          const {
            brands: f,
            mobile: d
          } = u.userAgentData || {}, h = (M, v = !1) => M.filter(N => !/Not/.test(N.brand)).map(N => `${N.brand}${v?` ${N.version}`:""}`), g = M => M.length > 1 ? M.filter(v => !/Chromium/.test(v)) : M;
          return m.brands || (m.brands = f), m.brandsVersion = h(m.brands ?? [], !0), m.brands = h(m.brands ?? []), m.brandsVersion = g(m.brandsVersion ?? []), m.brands = g(m.brands ?? []), m.mobile || (m.mobile = d), Object.keys(m).sort().reduce((M, v) => (M[v] = m[v], M), {})
        })
      }, "userAgentData failed"),
      i = () => k(() => {
        const u = navigator;
        if (!(!("bluetooth" in navigator) || !u.bluetooth || !u.bluetooth.getAvailability)) return u.bluetooth.getAvailability()
      }, "bluetoothAvailability failed"),
      c = () => k(() => {
        const u = f => navigator.permissions.query({
          name: f
        }).then(d => ({
          name: f,
          state: d.state
        })).catch(() => ({
          name: f,
          state: "unknown"
        }));
        return "permissions" in navigator ? Promise.all([u("accelerometer"), u("ambient-light-sensor"), u("background-fetch"), u("background-sync"), u("bluetooth"), u("camera"), u("clipboard"), u("device-info"), u("display-capture"), u("gamepad"), u("geolocation"), u("gyroscope"), u("magnetometer"), u("microphone"), u("midi"), u("nfc"), u("notifications"), u("persistent-storage"), u("push"), u("screen-wake-lock"), u("speaker"), u("speaker-selection")]).then(f => f.reduce((d, h) => {
          const {
            state: g,
            name: y
          } = h || {};
          return d[g] ? (d[g].push(y), d) : (d[g] = [y], d)
        }, {})).catch(() => {}) : void 0
      }, "permissions failed"),
      l = () => k(() => {
        const u = navigator.gpu;
        if (u) return u.requestAdapter().then(m => {
          if (!m) return;
          const {
            limits: f,
            features: d
          } = m, h = y => {
            const {
              architecture: M,
              description: v,
              device: N,
              vendor: A
            } = y, I = [A, M, v, N], T = [...(d == null ? void 0 : d.values()) ?? []], w = (S => {
              const E = {};
              for (const D in S) E[D] = S[D];
              return E
            })(f);
            return He.webGpuAdapter = I, He.webGpuFeatures = T, He.webGpuLimits = q(w), {
              adapterInfo: I,
              limits: w
            }
          }, {
            info: g
          } = m;
          return g ? h(g) : m.requestAdapterInfo ? m.requestAdapterInfo().then(h) : void 0
        })
      }, "webgpu failed");
    return await se(), Promise.all([a, s(), i(), c(), l()]).then(([u, m, f, d, h]) => ({
      ...o,
      userAgentParsed: u,
      userAgentData: m,
      bluetoothAvailability: f,
      permissions: d,
      webgpu: h,
      lied: e
    })).catch(() => ({
      ...o,
      userAgentParsed: void 0,
      userAgentData: void 0,
      bluetoothAvailability: void 0,
      permissions: void 0,
      webgpu: void 0,
      lied: e
    }))
  } catch (n) {
    Y(n, "Navigator failed or blocked by client");
    return
  }
}

function _s() {
  const n = window.ApplePaySession;
  if (typeof n != "function" || typeof n.canMakePayments != "function") return -1;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (e) {
    const r = (e == null ? void 0 : e.message) ?? "";
    return r.includes("disabled in this insecure context") ? 2 : r.includes("Trying to start an Apple Pay session") ? 0 : -1
  }
}

function fs() {
  const t = document.createElement("a");
  try {
    const n = t.attributionSourceId ?? t.attributionsourceid;
    return n == null ? void 0 : String(n)
  } catch (n) {
    Y(n);
    return
  } finally {
    t.remove()
  }
}

function ms() {
  try {
    const t = navigator.pdfViewerEnabled;
    return typeof t == "boolean" ? t : void 0
  } catch (t) {
    Y(t);
    return
  }
}
const he = "c767712b",
  ps = {
    noscript: {
      contentDocumentHash: ["0b637a33", "37e2f32e", "318390d1"],
      contentWindowHash: ["0b637a33", "37e2f32e", "318390d1"],
      getContextHash: ["0b637a33", "081d6d1b", he]
    },
    trace: {
      contentDocumentHash: ["ca9d9c2f"],
      contentWindowHash: ["ca9d9c2f"],
      createElementHash: ["77dea834"],
      getElementByIdHash: ["77dea834"],
      getImageDataHash: ["77dea834"],
      toBlobHash: ["77dea834", he],
      toDataURLHash: ["77dea834", he]
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
      getImageDataHash: ["98ec858e", "a2971888", "dbbaf31f", he],
      toBlobHash: ["9f1c3dfe", "a2971888", "dbbaf31f", he],
      toDataURLHash: ["98ec858e", "a2971888", "dbbaf31f", he]
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
      toDataURLHash: ["fd00bf5d", "8ee7df22", he],
      toBlobHash: ["fd00bf5d", "8ee7df22", he],
      getImageDataHash: ["fd00bf5d", "8ee7df22", he],
      getByteFrequencyDataHash: ["fd00bf5d", "8ee7df22", he],
      getByteTimeDomainDataHash: ["fd00bf5d", "8ee7df22", he],
      getFloatFrequencyDataHash: ["fd00bf5d", "8ee7df22", he],
      getFloatTimeDomainDataHash: ["fd00bf5d", "8ee7df22", he],
      copyFromChannelHash: ["fd00bf5d", "8ee7df22", he],
      getChannelDataHash: ["fd00bf5d", "8ee7df22", he],
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
      getContextHash: ["55e9b959", he],
      toDataURLHash: ["55e9b959", he],
      toBlobHash: ["55e9b959", he],
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
    noscript: vn,
    trace: qe,
    cydec: Ke,
    canvasblocker: st,
    chameleon: xe,
    duckduckgo: Ne,
    privacybadger: mr,
    privacypossum: En,
    jshelter: Me,
    puppeteerExtra: we,
    fakeBrowser: Re
  } = ps;

function hs(t, n) {
  if (n) {
    if (n >= 7 && qe.contentDocumentHash.includes(t.contentDocumentHash) && qe.contentWindowHash.includes(t.contentWindowHash) && qe.createElementHash.includes(t.createElementHash) && qe.getElementByIdHash.includes(t.getElementByIdHash) && qe.toDataURLHash.includes(t.toDataURLHash) && qe.toBlobHash.includes(t.toBlobHash) && qe.getImageDataHash.includes(t.getImageDataHash)) return "Trace";
    if (n >= 7 && Ke.contentDocumentHash.includes(t.contentDocumentHash) && Ke.contentWindowHash.includes(t.contentWindowHash) && Ke.createElementHash.includes(t.createElementHash) && Ke.getElementByIdHash.includes(t.getElementByIdHash) && Ke.toDataURLHash.includes(t.toDataURLHash) && Ke.toBlobHash.includes(t.toBlobHash) && Ke.getImageDataHash.includes(t.getImageDataHash)) return "CyDec";
    if (n >= 6 && st.contentDocumentHash.includes(t.contentDocumentHash) && st.contentWindowHash.includes(t.contentWindowHash) && st.appendHash.includes(t.appendHash) && st.toDataURLHash.includes(t.toDataURLHash) && st.toBlobHash.includes(t.toBlobHash) && st.getImageDataHash.includes(t.getImageDataHash)) return "CanvasBlocker";
    if (n >= 9 && xe.appendHash.includes(t.appendHash) && xe.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && xe.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && xe.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && xe.prependHash.includes(t.prependHash) && xe.replaceWithHash.includes(t.replaceWithHash) && xe.appendChildHash.includes(t.appendChildHash) && xe.insertBeforeHash.includes(t.insertBeforeHash) && xe.replaceChildHash.includes(t.replaceChildHash)) return "Chameleon";
    if (n >= 7 && Ne.toDataURLHash.includes(t.toDataURLHash) && Ne.toBlobHash.includes(t.toBlobHash) && Ne.getImageDataHash.includes(t.getImageDataHash) && Ne.getByteFrequencyDataHash.includes(t.getByteFrequencyDataHash) && Ne.getByteTimeDomainDataHash.includes(t.getByteTimeDomainDataHash) && Ne.getFloatFrequencyDataHash.includes(t.getFloatFrequencyDataHash) && Ne.getFloatTimeDomainDataHash.includes(t.getFloatTimeDomainDataHash) && Ne.copyFromChannelHash.includes(t.copyFromChannelHash) && Ne.getChannelDataHash.includes(t.getChannelDataHash) && Ne.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Ne.availHeightHash.includes(t.availHeightHash) && Ne.availLeftHash.includes(t.availLeftHash) && Ne.availTopHash.includes(t.availTopHash) && Ne.availWidthHash.includes(t.availWidthHash) && Ne.colorDepthHash.includes(t.colorDepthHash) && Ne.pixelDepthHash.includes(t.pixelDepthHash)) return "DuckDuckGo";
    if (n >= 2 && mr.getImageDataHash.includes(t.getImageDataHash) && mr.toDataURLHash.includes(t.toDataURLHash)) return "Privacy Badger";
    if (n >= 3 && En.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && En.availWidthHash.includes(t.availWidthHash) && En.colorDepthHash.includes(t.colorDepthHash)) return "Privacy Possum";
    if (n >= 2 && vn.contentDocumentHash.includes(t.contentDocumentHash) && vn.contentWindowHash.includes(t.contentDocumentHash) && vn.getContextHash.includes(t.getContextHash) && t.hardwareConcurrencyHash == he) return "NoScript";
    if (n >= 14 && Me.contentDocumentHash.includes(t.contentDocumentHash) && Me.contentWindowHash.includes(t.contentDocumentHash) && Me.appendHash.includes(t.appendHash) && Me.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Me.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Me.prependHash.includes(t.prependHash) && Me.replaceWithHash.includes(t.replaceWithHash) && Me.appendChildHash.includes(t.appendChildHash) && Me.insertBeforeHash.includes(t.insertBeforeHash) && Me.replaceChildHash.includes(t.replaceChildHash) && Me.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "JShelter";
    if (n >= 13 && we.contentDocumentHash.includes(t.contentDocumentHash) && we.contentWindowHash.includes(t.contentWindowHash) && we.createElementHash.includes(t.createElementHash) && we.getElementByIdHash.includes(t.getElementByIdHash) && we.appendHash.includes(t.appendHash) && we.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && we.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && we.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && we.prependHash.includes(t.prependHash) && we.replaceWithHash.includes(t.replaceWithHash) && we.appendChildHash.includes(t.appendChildHash) && we.insertBeforeHash.includes(t.insertBeforeHash) && we.contentDocumentHash.includes(t.contentDocumentHash) && we.replaceChildHash.includes(t.replaceChildHash) && we.getContextHash.includes(t.getContextHash) && we.toDataURLHash.includes(t.toDataURLHash) && we.toBlobHash.includes(t.toBlobHash) && we.getImageDataHash.includes(t.getImageDataHash) && we.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "puppeteer-extra";
    if (n >= 12 && Re.appendChildHash.includes(t.appendChildHash) && Re.getContextHash.includes(t.getContextHash) && Re.toDataURLHash.includes(t.toDataURLHash) && Re.toBlobHash.includes(t.toBlobHash) && Re.getImageDataHash.includes(t.getImageDataHash) && Re.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Re.availHeightHash.includes(t.availHeightHash) && Re.availLeftHash.includes(t.availLeftHash) && Re.availTopHash.includes(t.availTopHash) && Re.availWidthHash.includes(t.availWidthHash) && Re.colorDepthHash.includes(t.colorDepthHash) && Re.pixelDepthHash.includes(t.pixelDepthHash)) return "FakeBrowser"
  }
}
async function gs() {
  const t = +new Date,
    n = +("" + t).slice(-1),
    e = new RegExp(`${n}+$`),
    r = (l, u) => new Promise(m => setTimeout(() => {
      const f = u ? t : +new Date,
        d = e.exec("" + f);
      m(d ? d[0] : f)
    }, l)),
    a = await Promise.all([r(0, !0), r(1, !1), r(2, !1), r(3, !1), r(4, !1), r(5, !1), r(6, !1), r(7, !1), r(8, !1), r(9, !1)]),
    o = a.map(l => "" + l),
    s = o[0].slice(-1),
    i = o.every(l => l.slice(-1) === s),
    c = o[0].length;
  return {
    protection: i,
    delays: a.map((l, u) => o[u].length > c ? o[u].slice(-c) : l),
    precision: i ? Math.min(...o.map(l => l.length)) : void 0,
    precisionValue: i ? s : void 0
  }
}
async function ys() {
  try {
    await se();
    const t = wi(),
      n = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: de ? "Blink" : At ? "Gecko" : ""
      },
      [e, r] = await Promise.all([Wr(), de ? void 0 : gs()]);
    if (e) {
      const c = ni();
      n.privacy = "Brave", n.security = {
        FileSystemWritableFileStream: "FileSystemWritableFileStream" in window,
        Serial: "Serial" in window,
        ReportingObserver: "ReportingObserver" in window
      }, n.mode = c.allow ? "allow" : c.standard ? "standard" : c.strict ? "strict" : ""
    }
    const {
      protection: a
    } = r || {};
    if (At && a) {
      const c = {
          OfflineAudioContext: "OfflineAudioContext" in window,
          WebGL2RenderingContext: "WebGL2RenderingContext" in window,
          WebAssembly: "WebAssembly" in window,
          maxTouchPoints: "maxTouchPoints" in navigator,
          RTCRtpTransceiver: "RTCRtpTransceiver" in window,
          MediaDevices: "MediaDevices" in window,
          Credential: "Credential" in window
        },
        l = Object.keys(c),
        u = new Set(["RTCRtpTransceiver", "MediaDevices", "Credential"]),
        m = l.filter(d => u.has(d) && !c[d]).length == u.size,
        f = !c.WebAssembly;
      n.privacy = m ? "Tor Browser" : "Firefox", n.security = {
        reduceTimerPrecision: !0,
        ...c
      }, n.mode = m ? f ? "safer" : "standard" : "resistFingerprinting"
    }
    const o = Object.keys(t).length;
    await se();
    const s = {
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
      i = {};
    for (const [c, l] of Object.entries(s)) l !== he && (i[c.slice(0, -4)] = l);
    return n.extensionHashPattern = i, n.extension = hs(s, o), n
  } catch (t) {
    Y(t);
    return
  }
}

function ws() {
  try {
    return "ontouchstart" in window && !!document.createEvent("TouchEvent")
  } catch {
    return !1
  }
}
async function bs() {
  try {
    const t = Le();
    let n = !!t["Screen.width"] || !!t["Screen.height"] || !!t["Screen.availWidth"] || !!t["Screen.availHeight"] || !!t["Screen.colorDepth"] || !!t["Screen.pixelDepth"] || !1;
    const e = window.screen || {},
      {
        width: r,
        height: a,
        availWidth: o,
        availHeight: s,
        colorDepth: i,
        pixelDepth: c
      } = e,
      l = h => {
        var g;
        return !!((g = matchMedia(h)) != null && g.matches)
      },
      u = window.devicePixelRatio || 0,
      m = !l(`(resolution: ${u}dppx)`);
    !tt && m && (n = !0, oe("Window.devicePixelRatio", "lied dpr"));
    const f = !(r - o || a - s);
    return r > 800 && f && (ke.SCREEN = !0), {
      width: r,
      height: a,
      availWidth: o,
      availHeight: s,
      colorDepth: i,
      pixelDepth: c,
      touch: ws(),
      lied: n
    }
  } catch (t) {
    Y(t);
    return
  }
}
async function vs() {
  return await new Promise(t => setTimeout(() => t(void 0), 50)), new Promise(async t => {
    try {
      await se();
      const n = "speechSynthesis" in window;
      if (n && speechSynthesis.getVoices(), !n) return t(null);
      const e = !!Le()["SpeechSynthesis.getVoices"],
        r = () => {
          clearTimeout(a), speechSynthesis.removeEventListener ? speechSynthesis.removeEventListener("voiceschanged", o) : speechSynthesis.onvoiceschanged === o && (speechSynthesis.onvoiceschanged = null)
        },
        a = setTimeout(() => {
          r(), t(null)
        }, 300),
        o = () => {
          const s = speechSynthesis.getVoices();
          if (!s || !s.length) return;
          const i = new Set,
            c = [],
            l = [],
            u = [],
            m = new Set;
          let f = !1,
            d = null,
            h = 0;
          for (let v = 0; v < s.length; v++) {
            const N = s[v];
            N.localService && (f = !0);
            const {
              voiceURI: A
            } = N;
            if (i.has(A)) continue;
            i.add(A), N.localService ? c.push(N.name) : l.push(N.name);
            const {
              lang: I
            } = N;
            m.has(I) || (m.add(I), u.push(I)), N.default && N.localService && (d = N, h++)
          }
          if (de && !f) return;
          r();
          let g = "",
            y = "";
          h === 1 && d && (g = d.name, y = (d.lang || "").replace(/_/, "-"));
          const {
            locale: M
          } = Intl.DateTimeFormat().resolvedOptions();
          return y && y.split("-")[0] !== M.split("-")[0] && (He.voiceLangMismatch = !0, ke.TIME_ZONE = !0), t({
            local: c,
            remote: l,
            languages: u,
            defaultVoiceName: g,
            defaultVoiceLang: y,
            lied: e
          })
        };
      if (o(), speechSynthesis.addEventListener) return speechSynthesis.addEventListener("voiceschanged", o);
      speechSynthesis.onvoiceschanged = o
    } catch (n) {
      return Y(n), t(null)
    }
  })
}

function Es() {
  const t = ["UTC", "GMT", "Etc/GMT+0", "Etc/GMT+1", "Etc/GMT+10", "Etc/GMT+11", "Etc/GMT+12", "Etc/GMT+2", "Etc/GMT+3", "Etc/GMT+4", "Etc/GMT+5", "Etc/GMT+6", "Etc/GMT+7", "Etc/GMT+8", "Etc/GMT+9", "Etc/GMT-1", "Etc/GMT-10", "Etc/GMT-11", "Etc/GMT-12", "Etc/GMT-13", "Etc/GMT-14", "Etc/GMT-2", "Etc/GMT-3", "Etc/GMT-4", "Etc/GMT-5", "Etc/GMT-6", "Etc/GMT-7", "Etc/GMT-8", "Etc/GMT-9", "Etc/GMT", "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Calcutta", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"],
    n = () => {
      const [s, i, c] = JSON.stringify(new Date).slice(1, 11).split("-"), l = `${i}/${c}/${s}`, u = `${s}-${i}-${c}`, m = +new Date(l), f = +new Date(u);
      return ~~+((m - f) / 6e4)
    },
    e = ({
      year: s,
      city: i = null
    }) => {
      const c = {
          timeZone: "",
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        l = 6e4;
      let u, m;
      if (i) {
        const h = {
          ...c,
          timeZone: i
        };
        u = new Intl.DateTimeFormat("en", h), m = +new Date(u.format(new Date(`7/1/${s}`)))
      } else m = +new Date(`7/1/${s}`);
      const f = +new Date(`${s}-07-01`);
      return (m - f) / l
    },
    r = (s, i) => {
      const c = s.length,
        l = Math.floor(c / 2),
        [u, m] = [s.slice(0, l), s.slice(l, c)],
        f = i(u);
      return c == 1 || f.length ? f : r(m, i)
    },
    a = ({
      year: s,
      timeZone: i
    }) => {
      const c = e({
          year: s
        }),
        l = e({
          year: s,
          city: i
        }),
        u = d => d.filter(h => c == e({
          year: s,
          city: h
        })),
        m = c == l ? [i] : r(t, u);
      return m.length == 1 && m[0] == i ? i : q(m)
    },
    o = s => {
      try {
        return s.replace(/_/, " ").split("/").join(", ")
      } catch {}
      return s
    };
  try {
    const s = Le(),
      i = s["Date.getTimezoneOffset"] || s["Intl.DateTimeFormat.resolvedOptions"] || s["Intl.RelativeTimeFormat.resolvedOptions"] || !1,
      c = 1113,
      {
        timeZone: l
      } = Intl.DateTimeFormat().resolvedOptions(),
      u = a({
        year: c,
        timeZone: l
      }),
      m = +new Date(new Date(`7/1/${c}`)),
      f = /.*\(|\).*/g;
    return {
      ...{
        zone: ("" + new Date).replace(f, ""),
        location: o(l),
        locationMeasured: o(u),
        locationEpoch: m,
        offset: new Date().getTimezoneOffset(),
        offsetComputed: n(),
        lied: i
      }
    }
  } catch (s) {
    Y(s);
    return
  }
}
const As = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  Ns = {
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
  Ts = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  Ss = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]),
  pr = t => {
    const n = "BigInt64Array" in window && tt && !/(Cr|Fx)iOS/.test(navigator.userAgent);
    if (!t || n) return;
    t.clear(t.COLOR_BUFFER_BIT);
    const e = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, e);
    const r = new Float32Array([-.9, -.7, 0, .8, -.7, 0, 0, .5, 0]);
    t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW);
    const a = t.createProgram(),
      o = t.createShader(t.VERTEX_SHADER);
    t.shaderSource(o, `
			attribute vec2 attrVertex;
			varying vec2 varyinTexCoordinate;
			uniform vec2 uniformOffset;
			void main(){
				varyinTexCoordinate = attrVertex + uniformOffset;
				gl_Position = vec4(attrVertex, 0, 1);
			}
		`), t.compileShader(o), t.attachShader(a, o);
    const s = t.createShader(t.FRAGMENT_SHADER);
    t.shaderSource(s, `
			precision mediump float;
			varying vec2 varyinTexCoordinate;
			void main() {
				gl_FragColor = vec4(varyinTexCoordinate, 1, 1);
			}
		`), t.compileShader(s), t.attachShader(a, s);
    const i = 3;
    return t.linkProgram(a), t.useProgram(a), a.vertexPosAttrib = t.getAttribLocation(a, "attrVertex"), a.offsetUniform = t.getUniformLocation(a, "uniformOffset"), t.enableVertexAttribArray(a.vertexPosArray), t.vertexAttribPointer(a.vertexPosAttrib, i, t.FLOAT, !1, 0, 0), t.uniform2f(a.offsetUniform, 1, 1), t.drawArrays(t.LINE_LOOP, 0, 3), t
  };
async function Os() {
  var a;
  let t, n, e, r;
  try {
    await se();
    const o = Le(),
      s = hn(),
      i = o["HTMLCanvasElement.toDataURL"],
      c = o["HTMLCanvasElement.getContext"],
      l = o["WebGLRenderingContext.getParameter"] || o["WebGL2RenderingContext.getParameter"] || o["WebGLRenderingContext.getExtension"] || o["WebGL2RenderingContext.getExtension"],
      u = i || c || l || o["WebGLRenderingContext.getSupportedExtensions"] || o["WebGL2RenderingContext.getSupportedExtensions"] || !1;
    let m = window;
    !Vr && s && (m = s);
    const f = m.document;
    "OffscreenCanvas" in window ? (t = new m.OffscreenCanvas(256, 256), n = new m.OffscreenCanvas(256, 256)) : (t = f.createElement("canvas"), n = f.createElement("canvas"));
    const d = Nn(t, "webgl"),
      h = Nn(n, "webgl2");
    if (e = d, r = h, !d) return;
    const g = (L, F) => {
        if (!L) return;
        const G = k(() => L.getShaderPrecisionFormat(L[F], L.LOW_FLOAT)),
          ce = k(() => L.getShaderPrecisionFormat(L[F], L.MEDIUM_FLOAT)),
          ne = k(() => L.getShaderPrecisionFormat(L[F], L.HIGH_FLOAT)),
          ie = k(() => L.getShaderPrecisionFormat(L[F], L.HIGH_INT));
        return {
          LOW_FLOAT: G,
          MEDIUM_FLOAT: ce,
          HIGH_FLOAT: ne,
          HIGH_INT: ie
        }
      },
      y = (L, F) => {
        const G = {};
        if (!F) return G;
        for (const ce in F) {
          const ne = F[ce];
          G[L + "." + ce + ".precision"] = ne ? k(() => ne.precision) : void 0, G[L + "." + ce + ".rangeMax"] = ne ? k(() => ne.rangeMax) : void 0, G[L + "." + ce + ".rangeMin"] = ne ? k(() => ne.rangeMin) : void 0
        }
        return G
      },
      M = L => {
        const F = {};
        if (!L) return F;
        const G = L;
        for (const ce of As) {
          const ne = G[ce];
          if (ne === void 0) continue;
          const ie = L.getParameter(ne);
          ie && ArrayBuffer.isView(ie) ? F[ce] = Array.from(ie) : F[ce] = ie
        }
        return F
      },
      v = L => {
        if (!L) return [];
        const F = k(() => L.getContextAttributes());
        return F ? Object.keys(F).sort().map(G => `${G}=${F[G]}`) : []
      },
      N = L => {
        if (!L) return [];
        const F = [];
        for (const [G, ce] of Object.entries(Ns)) {
          const ne = k(() => L.getExtension(G));
          if (ne)
            for (const ie of ce) {
              const U = ne[ie];
              if (typeof U != "number") continue;
              if (!Ts.has(ie)) {
                F.push(`${ie}=${U}`);
                continue
              }
              const j = k(() => L.getParameter(U));
              j == null ? F.push(`${ie}=${U}`) : typeof j == "object" && "length" in j ? F.push(`${ie}=${U}=${Array.from(j).join(",")}`) : F.push(`${ie}=${U}=${j}`)
            }
        }
        return F.sort()
      },
      A = L => {
        const F = L ? L.getExtension("WEBGL_debug_renderer_info") : null;
        return !F || !L ? {} : {
          UNMASKED_VENDOR_WEBGL: L.getParameter(F.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: L.getParameter(F.UNMASKED_RENDERER_WEBGL)
        }
      },
      I = L => {
        if (!L) return [];
        const F = k(() => L.getSupportedExtensions());
        return F || []
      },
      T = (L, F) => {
        if (!L) return {
          dataURI: void 0,
          pixels: void 0
        };
        try {
          pr(L);
          const {
            drawingBufferWidth: G,
            drawingBufferHeight: ce
          } = L;
          let ne = "";
          if (L.canvas.constructor.name === "OffscreenCanvas") {
            const $ = document.createElement("canvas"),
              re = Nn($, F);
            try {
              pr(re), ne = $.toDataURL()
            } finally {
              An($, re)
            }
          } else ne = L.canvas.toDataURL();
          const ie = G / 15,
            U = ce / 6,
            j = new Uint8Array(ie * U * 4);
          try {
            L.readPixels(0, 0, ie, U, L.RGBA, L.UNSIGNED_BYTE, j)
          } catch {
            return {
              dataURI: ne,
              pixels: void 0
            }
          }
          return {
            dataURI: ne,
            pixels: Array.from(j)
          }
        } catch (G) {
          Y(G);
          return
        }
      };
    await se();
    const w = {
        ...M(d),
        ...A(d)
      },
      S = {
        ...M(h),
        ...A(h)
      },
      E = [];
    for (const L in S) {
      const F = w[L];
      !F || Ss.has(L) || "" + F != "" + S[L] && E.push(L)
    }
    E.length && le("webgl/webgl2 mirrored params mismatch", E.toString()), await se();
    const {
      dataURI: D,
      pixels: x
    } = T(d, "webgl") || {}, {
      dataURI: B,
      pixels: P
    } = T(h, "webgl2") || {}, H = {
      extensions: [...I(d), ...I(h)],
      contextAttributes: v(d),
      contextAttributes2: v(h),
      extensionParameters: N(d),
      extensionParameters2: N(h),
      pixels: x,
      pixels2: P,
      dataURI: D,
      dataURI2: B,
      parameters: {
        ...w,
        ...S,
        ...y("VERTEX_SHADER", g(d, "VERTEX_SHADER")),
        ...y("FRAGMENT_SHADER", g(d, "FRAGMENT_SHADER"))
      },
      parameterOrExtensionLie: l,
      lied: u
    }, ee = ["00b72507", "00c1b42d", "00fe1ec9", "02b3eea3", "0461d3de", "0463627d", "057857ac", "0586e20b", "0639a81a", "087d5759", "08847ba5", "0b2d4333", "0cdb985d", "0e058699", "0eb2fc19", "0f39d057", "0f840379", "0fc123c7", "101e0582", "12e92e62", "12f8ac14", "1453d59a", "149a1efa", "166dc7c8", "16c481a6", "171831c5", "177cc258", "18579e83", "19594666", "1b251fd7", "1bfd326c", "1e8a9a79", "1ff7c7e7", "2048bc5a", "2259b706", "22d0f2cf", "230d6a0d", "23d1ce20", "2402c3d2", "24306836", "258789d0", "25a760b8", "25f9385d", "27938830", "27db292c", "2b80fd96", "2bb488da", "2c04c2eb", "2d15287f", "2f014c41", "2f582ed9", "300ee927", "33bc5492", "34270469", "3660b71f", "3740c4c7", "3999a5e1", "39ead506", "3a91d0d6", "3b724916", "3bf321b8", "3c546144", "3f9ef44c", "3fea1100", "3ff82303", "4027d193", "402e1064", "4065cd69", "43038e3d", "4503e771", "461f97e1", "464d51ac", "467b99a5", "482c81b2", "48af038f", "4962ada1", "49bf7358", "4c9e8f5d", "502c402c", "508d1625", "52e348ba", "534002ab", "5582debe", "55d3aa56", "55e821f7", "581f3282", "5831d5fd", "58871380", "58fdc720", "5a5658f1", "5a90a5f8", "5aea1af1", "5b6a17aa", "5bef9a39", "5ca55292", "5d786cef", "5ddb9237", "5ee41456", "61178f2a", "61ca8e23", "61d9464e", "61eecaae", "623c3bfd", "6248d9e3", "6294d84e", "62bf7ef1", "6346cf49", "6357365c", "66628310", "668f0f93", "66d992e8", "67995996", "6843ebbf", "6864dcb0", "6951838b", "696e1548", "698c5c2e", "6a75ae3b", "6aa1ff7e", "6b07d4f8", "6b290cd4", "6c168801", "6dfae3cb", "6e806ffc", "6edf1720", "6f81cbe7", "70859bdb", "70a095b1", "7238c5dd", "7360ebd1", "741688e4", "74daf866", "78640859", "79284c47", "794f8929", "795e5c95", "79a57aa9", "7aa13573", "7b2e5242", "7b811cdd", "7ec0ea6b", "801d73af", "802e2547", "81b9cd29", "8219e1a4", "82a9a2f1", "8428fc8e", "849ccb64", "8541aa4c", "85479b99", "8bd0b91b", "8d371161", "903c8847", "917871e7", "98aeaba9", "99b1a1c6", "99ef2c3b", "9b67b7dc", "9c6df98c", "9c814c1b", "9e2b5e94", "9fd76352", "a1c808d5", "a22788f8", "a2383001", "a26e9aa9", "a397a568", "a3f9ee34", "a4b988da", "a4d34176", "a581f55e", "a5a477ae", "a9640880", "a97d3858", "aa73f3a4", "ab40bece", "ac4d4ba8", "ad01a422", "ade75c4f", "ae2c4777", "afa583bc", "b10c2a85", "b224cc7c", "b2d6fc98", "b362c2f5", "b467620a", "b4d40dcc", "b504662d", "b50edd99", "b5494027", "b62321c3", "b8961d15", "b8ea6e7f", "bb77a469", "bc0f9686", "bcf7315f", "be2dfaea", "beffda26", "bf06317e", "bf610cdb", "bfe1c212", "c00582e9", "c026469d", "c04889b1", "c04b0635", "c04e374a", "c05f7596", "c07307c6", "c092fdf8", "c25dd065", "c2bce496", "c5e9a883", "c79634c2", "c7e37ca0", "c93b5366", "c9bc4ffd", "cba1878b", "cbeade8c", "ce2e3d16", "cefb72ca", "cf9643e6", "cfd20274", "d05a66eb", "d09c1c07", "d1e76c89", "d2172943", "d2dc2474", "d498797d", "d6bf35ad", "d734ea08", "d860ff42", "d8bd9e5a", "d913dafa", "d970d345", "dbdbe7a4", "dc271c35", "dcd9a29e", "dd67b076", "de793ead", "ded74044", "df9daeb6", "e10339b3", "e142d1f9", "e155c47e", "e15afab0", "e16bb1bb", "e316e4c0", "e3eff92a", "e4569a5b", "e574bef6", "e5962ba3", "e6464c9f", "e68b5c4e", "e796b84e", "e8694547", "e965d180", "e965d541", "e9bdc904", "e9dbb8d5", "ea54d525", "ea59b343", "ea7f90ea", "ea8f5ad0", "eaa13804", "eb799d34", "ec050bb6", "ec928655", "eed2e5e1", "ef8f5db1", "f0d5a3c7", "f1077334", "f221fef5", "f2293447", "f33d918e", "f3c6ea11", "f51056a1", "f51cab9a", "f573bb34", "f5d19934", "f7451c92", "f8e65486", "f9714b3d", "fa994f33", "fafa14c0", "fc37fe1f", "fca66520", "fe0997b6"], ve = [-1056897629, -1056946782, -1073719331, -1147160399, -1147160553, -1147168724, -1147419751, -1147419753, -1147419775, -1147427826, -1147451883, -1147451901, -1147464169, -1147464177, -1147488144, -1147602934, -1147643759, -1147643872, -1147765274, -1148326739, -1148335070, -1148572354, -1148678631, -1148680509, -1148713259, -1164279890, -1164800191, -1164800478, -1332029332, -133757475, -1342154787, -134823971, -16746546, -1878102921, -1878111124, -1962893370, -1962919974, -1962928178, -2130164162, -2130164382, -2130164388, -2130164546, -2130172573, -2130659912, -2145933648, -2145941977, -2145958228, -2145966414, -2145966441, -2145966529, -2145966535, -2145966545, -2145970658, -2145974343, -2145974380, -2145974489, -2145974596, -2145974598, -2145974612, -2145974637, -2145974657, -2145974729, -2146187766, -2146232338, -2146232480, -2146232503, -2146232590, -2146232723, -2146232724, -2146236588, -2146236703, -2146237020, -2146251619, -2146251641, -2146251681, -2146253671, -2146253693, -2146277218, -2146286438, -2146286463, -2146286583, -2146319268, -2146376065, -2146379955, -2146384003, -2146384011, -2146384027, -2146384034, -2146384120, -2146384281, -2146398568, -2146400384, -2146400556, -2146400620, -2146401928, -2146417027, -2146526795, -2146526934, -2147125544, -2147128275, -2147133747, -2147133749, -2147133760, -2147134974, -2147136328, -2147142429, -2147287810, -2147287811, -2147287820, -2147287834, -2147287835, -2147287854, -2147291718, -2147291820, -2147293058, -2147295768, -2147295822, -2147295823, -2147295849, -2147295857, -2147300019, -2147304193, -2147304219, -2147306321, -2147316382, -2147316383, -2147333118, -2147336998, -2147337003, -2147337012, -2147337022, -2147344686, -2147346747, -2147361652, -2147361731, -2147361769, -2147361774, -2147361775, -2147361778, -2147361792, -2147362760, -2147365698, -2147365730, -2147365759, -2147365760, -2147365827, -2147365863, -2147373914, -2147373984, -2147374032, -2147374080, -2147378041, -2147378146, -2147382130, -2147382221, -2147382251, -2147382270, -2147382272, -2147383246, -2147385825, -2147385849, -2147386292, -2147386326, -2147387335, -2147387364, -2147389930, -2147389937, -2147389951, -2147390461, -2147394188, -2147394251, -2147394484, -2147400057, -2147406798, -2147407643, -2147407821, -2147410938, -2147410941, -2147414733, -2147414956, -2147414987, -2147415037, -2147429201, -2147429223, -2147439020, -2147440422, -2147447111, -2147447122, -2147447126, -2147447137, -2147447149, -2147447157, -2147447161, -2147447163, -2147447873, -2147447892, -2147447896, -2147447928, -2147448592, -2147453701, -2147453767, -2147453768, -2147459031, -2147461169, -2147466956, -2147466972, -2147467172, -2147470173, -2147475351, -2147475352, -638494755, -671082546, -677558160, -999987216, 1099536, 1099644, 1147714426, 1197075, 1229835, 1508998, 1509050, 1610618841, 184555483, 2146590728, 2147305224, 2147361749, 2147440438, 2147475085, 2147479181, 21667, 349912, 351513, 83625, 998804992, 998911268, 999148597, 999156922];
    let _e;
    if (H.parameters) {
      const L = new Set;
      for (const F in H.parameters) {
        const G = H.parameters[F];
        if (!(!G || typeof G == "string"))
          if (Array.isArray(G))
            for (const ce of G) L.add(Number(ce));
          else L.add(Number(G))
      }
      _e = [...L].sort((F, G) => F - G)
    }
    const Ae = oi((a = H.parameters) == null ? void 0 : a.UNMASKED_RENDERER_WEBGL),
      ye = "" + _e,
      fe = !Ae || !ye ? void 0 : q([Ae, ye]),
      W = _e ? _e.reduce((L, F, G) => L ^ +F + G, 0) : void 0;
    He.webglParams = ye, He.webglBrandCapabilities = fe, He.webglCapabilities = W;
    const Oe = fe && !ee.includes(fe),
      at = W && !ve.includes(W);
    return Oe && (ke.WEBGL = !0, le("WebGLRenderingContext.getParameter", "suspicious gpu")), at && (ke.WEBGL = !0, le("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...H,
      gpu: {
        ...na((H.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: ta((H.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (o) {
    Y(o);
    return
  } finally {
    An(t, e), An(n, r)
  }
}

function An(t, n) {
  var e;
  if (t) {
    try {
      (e = n == null ? void 0 : n.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    t.width = 0, t.height = 0, t instanceof HTMLCanvasElement && t.remove()
  }
}

function Nn(t, n) {
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
  var n, e, r, a, o, s, i, c, l, u, m, f, d, h, g, y, M, v, N, A, I, T, w, S, E, D, x, B, P, H, ee, ve, _e, Ae, ye, fe;
  const t = await Is();
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
    workerScope: !t.workerScope || t.workerScope.lied ? void 0 : {
      deviceMemory: t.workerScope.deviceMemory,
      hardwareConcurrency: t.workerScope.hardwareConcurrency,
      platform: t.workerScope.platform,
      system: t.workerScope.system,
      userAgent: t.workerScope.userAgent,
      userAgentData: {
        architecture: (n = t.workerScope.userAgentData) == null ? void 0 : n.architecture,
        bitness: (e = t.workerScope.userAgentData) == null ? void 0 : e.bitness,
        mobile: (r = t.workerScope.userAgentData) == null ? void 0 : r.mobile,
        model: (a = t.workerScope.userAgentData) == null ? void 0 : a.model,
        platform: (o = t.workerScope.userAgentData) == null ? void 0 : o.platform,
        platformVersion: (s = t.workerScope.userAgentData) == null ? void 0 : s.platformVersion,
        brandsVersion: (i = t.workerScope.userAgentData) == null ? void 0 : i.brandsVersion
      }
    },
    screen: !t.screen || t.screen.lied || (c = t.navigator) != null && c.lied ? void 0 : {
      height: t.screen.height,
      width: t.screen.width,
      pixelDepth: t.screen.pixelDepth,
      colorDepth: t.screen.colorDepth,
      lied: t.screen.lied
    },
    media: t.media,
    canvas2d: {
      ...(l = t.canvas2d) != null && l.lied ? {} : {
        dataURI: (u = t.canvas2d) == null ? void 0 : u.lied,
        paintURI: (m = t.canvas2d) == null ? void 0 : m.paintURI,
        textURI: (f = t.canvas2d) == null ? void 0 : f.textURI,
        emojiURI: (d = t.canvas2d) == null ? void 0 : d.emojiURI
      },
      ...(h = t.canvas2d) != null && h.liedTextMetrics ? {} : {
        textMetricsSystemSum: (g = t.canvas2d) == null ? void 0 : g.textMetricsSystemSum,
        emojiSet: (y = t.canvas2d) == null ? void 0 : y.emojiSet
      }
    },
    canvasWebgl: t.canvasWebgl,
    cssMedia: t.cssMedia ? {
      reducedMotion: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS["prefers-reduced-motion"]
      }),
      monochrome: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS.monochrome
      }),
      invertedColors: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS["inverted-colors"]
      }),
      forcedColors: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS["forced-colors"]
      }),
      colorGamut: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS["color-gamut"]
      }),
      hdr: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS["dynamic-range"]
      }),
      contrast: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS["prefers-contrast"]
      }),
      reducedTransparency: Te(() => {
        var W;
        return (W = t.cssMedia) == null ? void 0 : W.mediaCSS["prefers-reduced-transparency"]
      })
    } : void 0,
    css: t.css ? (v = (M = t.css) == null ? void 0 : M.system) == null ? void 0 : v.fonts : void 0,
    timezone: !t.timezone || t.timezone.lied || ke.TIME_ZONE ? void 0 : {
      locationMeasured: t.timezone.locationMeasured,
      lied: t.timezone.lied
    },
    offlineAudioContext: (N = t.offlineAudioContext) != null && N.lied ? void 0 : {
      baseLatency: (A = t.offlineAudioContext) == null ? void 0 : A.baseLatency,
      binsSample: (I = t.offlineAudioContext) == null ? void 0 : I.binsSample,
      compressorGainReduction: (T = t.offlineAudioContext) == null ? void 0 : T.compressorGainReduction,
      copySample: (w = t.offlineAudioContext) == null ? void 0 : w.copySample,
      floatFrequencyDataSum: (S = t.offlineAudioContext) == null ? void 0 : S.floatFrequencyDataSum,
      floatTimeDomainDataSum: (E = t.offlineAudioContext) == null ? void 0 : E.floatTimeDomainDataSum,
      lied: (D = t.offlineAudioContext) == null ? void 0 : D.lied,
      noise: (x = t.offlineAudioContext) == null ? void 0 : x.noise,
      totalUniqueSamples: (B = t.offlineAudioContext) == null ? void 0 : B.totalUniqueSamples,
      values: (P = t.offlineAudioContext) == null ? void 0 : P.values
    },
    domBlockers: t.domBlockers,
    fonts: t.fonts ? t.fonts.fontFaceLoadFonts : void 0,
    intl: !t.intl || t.intl.lied ? void 0 : {
      dateTimeFormat: (H = t.intl) == null ? void 0 : H.dateTimeFormat,
      lied: (ee = t.intl) == null ? void 0 : ee.lied,
      listFormat: (ve = t.intl) == null ? void 0 : ve.listFormat,
      locale: (_e = t.intl) == null ? void 0 : _e.locale,
      numberFormat: (Ae = t.intl) == null ? void 0 : Ae.numberFormat,
      pluralRules: (ye = t.intl) == null ? void 0 : ye.pluralRules,
      relativeTimeFormat: (fe = t.intl) == null ? void 0 : fe.relativeTimeFormat
    },
    maths: !t.maths || t.maths.lied ? void 0 : t.maths,
    voices: t.voices,
    resistance: t.resistance
  }
}
async function Is() {
  try {
    const [t, n, e, r, a, o, s, i, c, l, u, m, f, d, h, g] = await Promise.all([ue("voices", vs()), ue("offlineAudioContext", Di()), ue("canvasWebgl", Os()), ue("canvas2d", Li()), ue("css", Promise.resolve(Pi())), ue("cssMedia", Promise.resolve(Ci())), ue("screen", bs()), ue("maths", Promise.resolve(cs())), ue("consoleErrors", Promise.resolve(zi())), ue("timezone", Promise.resolve(Es())), ue("fonts", ts()), ue("media", ls()), ue("resistance", ys()), ue("intl", ss()), ue("workerScope", Ri()), ue("domBlockers", Bi())]), [y, M, v, N, A] = await Promise.all([ue("navigator", ds(h)), ue("headless", is({
      webgl: e
    })), ue("lies", Promise.resolve(bi())), ue("trash", Promise.resolve(Ti())), ue("capturedErrors", Promise.resolve(ei()))]), [I, T] = await Promise.all([rr((e == null ? void 0 : e.pixels) ?? []), rr((e == null ? void 0 : e.pixels2) ?? [])]);
    return {
      navigator: y,
      headless: M,
      cssMedia: o,
      css: a,
      screen: s,
      voices: t,
      media: m,
      canvas2d: r,
      canvasWebgl: {
        ...e,
        pixels: I,
        pixels2: T
      },
      maths: i,
      consoleErrors: c,
      timezone: l,
      offlineAudioContext: n,
      fonts: u,
      lies: v,
      trash: N,
      capturedErrors: A,
      resistance: f,
      intl: d,
      workerScope: h,
      domBlockers: g
    }
  } finally {
    yi()
  }
}

function ue(t, n) {
  return n.catch(() => {})
}
let Jt;
async function Ds() {
  if (Jt) try {
    return await Jt
  } catch {}
  return Jt = (async () => {
    var o, s, i, c, l, u, m, f, d, h, g, y, M, v, N, A, I, T, w, S, E, D, x, B, P, H, ee, ve, _e, Ae, ye, fe, W, Oe, at, L, F, G, ce, ne, ie, U, j, $, re, me, pe, Ue, Pe, $e, Yt, zn, $n, qn;
    const t = await Rs();
    switch ((o = t.navigator) != null && o.lied && t.screen && (t.screen.width = 0, t.screen.height = 0), ha({
        userAgent: (s = t.workerScope) == null ? void 0 : s.userAgent
      })) {
      case "Firefox":
        delete t.intl, t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI), t.canvasWebgl && (delete t.canvasWebgl.dataURI, delete t.canvasWebgl.dataURI2);
        break;
      case "Brave":
        t.navigator && (delete t.navigator.deviceMemory, delete t.navigator.hardwareConcurrency), t.workerScope && (delete t.workerScope.deviceMemory, delete t.workerScope.hardwareConcurrency), t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI), t.canvasWebgl && (delete t.canvasWebgl.dataURI, delete t.canvasWebgl.dataURI2, delete t.canvasWebgl.parameters), t.offlineAudioContext && (delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.floatTimeDomainDataSum, delete t.offlineAudioContext.sampleSum, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.noise);
      case "Safari":
        t.canvas2d && delete t.canvas2d.mods, t.offlineAudioContext && (delete t.offlineAudioContext.baseLatency, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.totalUniqueSamples, delete t.offlineAudioContext.noise)
    }
    const e = (i = t.navigator) == null ? void 0 : i.lied;
    t.navigator && delete t.navigator.lied, t.workerScope && delete t.workerScope.userAgent;
    const r = await Promise.all([O(t.navigator), O(t.workerScope), O(t.screen), O(t.media), "a0", O(t.canvas2d), O(t.canvasWebgl), O(t.cssMedia), O(t.css), O(t.voices), O(t.timezone), O(t.offlineAudioContext), O(t.fonts), O(t.intl), O(t.maths), O(t.domBlockers)]),
      a = await Promise.all([O((c = t.canvas2d) == null ? void 0 : c.dataURI), O((l = t.canvas2d) == null ? void 0 : l.emojiSet), O((u = t.canvas2d) == null ? void 0 : u.emojiURI), O((m = t.canvas2d) == null ? void 0 : m.paintURI), O((f = t.canvas2d) == null ? void 0 : f.textMetricsSystemSum), O((d = t.canvas2d) == null ? void 0 : d.textURI), "|", O((h = t.offlineAudioContext) == null ? void 0 : h.baseLatency), O((g = t.offlineAudioContext) == null ? void 0 : g.binsSample), O((y = t.offlineAudioContext) == null ? void 0 : y.compressorGainReduction), O((M = t.offlineAudioContext) == null ? void 0 : M.copySample), O((v = t.offlineAudioContext) == null ? void 0 : v.floatFrequencyDataSum), O((N = t.offlineAudioContext) == null ? void 0 : N.floatTimeDomainDataSum), O((A = t.offlineAudioContext) == null ? void 0 : A.lied), O((I = t.offlineAudioContext) == null ? void 0 : I.noise), O((T = t.offlineAudioContext) == null ? void 0 : T.totalUniqueSamples), O((w = t.offlineAudioContext) == null ? void 0 : w.values), "|", O(t.intl), O(t.domBlockers), "|", O((S = t.intl) == null ? void 0 : S.dateTimeFormat), O((E = t.intl) == null ? void 0 : E.lied), O((D = t.intl) == null ? void 0 : D.listFormat), O((x = t.intl) == null ? void 0 : x.locale), O((B = t.intl) == null ? void 0 : B.numberFormat), O((P = t.intl) == null ? void 0 : P.pluralRules), O((H = t.intl) == null ? void 0 : H.relativeTimeFormat), "|", O((ee = t.voices) == null ? void 0 : ee.defaultVoiceLang), O((ve = t.voices) == null ? void 0 : ve.defaultVoiceName), O((_e = t.voices) == null ? void 0 : _e.languages), O((Ae = t.voices) == null ? void 0 : Ae.lied), O((ye = t.voices) == null ? void 0 : ye.local), O((fe = t.voices) == null ? void 0 : fe.remote), "|", O(e), O((W = t.navigator) == null ? void 0 : W.applePay), O((Oe = t.navigator) == null ? void 0 : Oe.bluetoothAvailability), O((at = t.navigator) == null ? void 0 : at.deviceMemory), O((L = t.navigator) == null ? void 0 : L.hardwareConcurrency), O((F = t.navigator) == null ? void 0 : F.oscpu), O((G = t.navigator) == null ? void 0 : G.pdfViewerEnabled), O((ce = t.navigator) == null ? void 0 : ce.platform), O((ne = t.navigator) == null ? void 0 : ne.privateClickMeasurement), O((ie = t.navigator) == null ? void 0 : ie.vendor), "|", O((U = t.workerScope) == null ? void 0 : U.deviceMemory), O((j = t.workerScope) == null ? void 0 : j.hardwareConcurrency), O(($ = t.workerScope) == null ? void 0 : $.platform), O((re = t.workerScope) == null ? void 0 : re.system), O((me = t.workerScope) == null ? void 0 : me.userAgentData), "|", O((pe = t.cssMedia) == null ? void 0 : pe.colorGamut), O((Ue = t.cssMedia) == null ? void 0 : Ue.contrast), O((Pe = t.cssMedia) == null ? void 0 : Pe.forcedColors), O(($e = t.cssMedia) == null ? void 0 : $e.hdr), O((Yt = t.cssMedia) == null ? void 0 : Yt.invertedColors), O((zn = t.cssMedia) == null ? void 0 : zn.monochrome), O(($n = t.cssMedia) == null ? void 0 : $n.reducedMotion), O((qn = t.cssMedia) == null ? void 0 : qn.reducedTransparency)]);
    return r.map(gn => gn.slice(0, 2)).join("").padEnd(32, "0").slice(0, 32) + "|" + a.map(gn => gn[0]).join("")
  })(), Jt
}
const hr = "theme";
var Nt, Tt, St, Ot, Rt, It, Dt, kt, Mt, Lt;
class ks {
  constructor() {
    Z(this, Nt, ge(!1));
    Z(this, Tt, ge(!1));
    Z(this, St, ge(0));
    Z(this, Ot, ge(!1));
    Z(this, Rt, ge(an(Ms())));
    Z(this, It, ge(null));
    Z(this, Dt, ge(!1));
    Z(this, kt, ge("custom-winter"));
    Z(this, Mt, ge(an(Date.now())));
    Z(this, Lt, ge(void 0));
    setInterval(() => {
      ae(C(this, Mt), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(hr), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return te(C(this, Nt))
  }
  set dropletsDialogOpen(n) {
    ae(C(this, Nt), n, !0)
  }
  get storeDialogOpen() {
    return te(C(this, Tt))
  }
  set storeDialogOpen(n) {
    ae(C(this, Tt), n, !0)
  }
  get storeTabIndex() {
    return te(C(this, St))
  }
  set storeTabIndex(n) {
    ae(C(this, St), n, !0)
  }
  get muted() {
    return te(C(this, Ot))
  }
  set muted(n) {
    ae(C(this, Ot), n, !0)
  }
  get language() {
    return te(C(this, Rt))
  }
  set language(n) {
    ae(C(this, Rt), n, !0)
  }
  get map() {
    return te(C(this, It))
  }
  set map(n) {
    ae(C(this, It), n)
  }
  get automatedClicks() {
    return te(C(this, Dt))
  }
  set automatedClicks(n) {
    ae(C(this, Dt), n, !0)
  }
  get theme() {
    return te(C(this, kt))
  }
  set theme(n) {
    ae(C(this, kt), n, !0), localStorage.setItem(hr, n), document.documentElement.setAttribute("data-theme", n)
  }
  get now() {
    return te(C(this, Mt))
  }
  get captcha() {
    return Ls ? te(C(this, Lt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(n) {
    ae(C(this, Lt), n, !0)
  }
}
Nt = new WeakMap, Tt = new WeakMap, St = new WeakMap, Ot = new WeakMap, Rt = new WeakMap, It = new WeakMap, Dt = new WeakMap, kt = new WeakMap, Mt = new WeakMap, Lt = new WeakMap;
const aa = new ks;

function Ms() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(n => n.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Ls = ga.toLowerCase() !== "false",
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
async function Cs() {
  try {
    const t = await fetch(`${Hn}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!t.ok) return null;
    const n = await t.json(),
      e = await xs(n.prefix, n.difficulty);
    return e ? {
      ...n,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function xs(t, n) {
  return new Promise(e => {
    const r = new Blob([Ps], {
        type: "application/javascript"
      }),
      a = URL.createObjectURL(r),
      o = new Worker(a),
      s = setTimeout(() => {
        o.terminate(), URL.revokeObjectURL(a), e(null)
      }, 12e4);
    o.onmessage = i => {
      clearTimeout(s), o.terminate(), URL.revokeObjectURL(a), i.data.error ? e(null) : e(i.data.nonce)
    }, o.onerror = () => {
      clearTimeout(s), o.terminate(), URL.revokeObjectURL(a), e(null)
    }, o.postMessage({
      prefix: t,
      difficulty: n
    })
  })
}
const oa = 3;
var Pt, Ct;
class Bs {
  constructor() {
    Z(this, Pt, ge(null));
    Z(this, Ct, ge(0))
  }
  get current() {
    return te(C(this, Pt))
  }
  set current(n) {
    ae(C(this, Pt), n, !0)
  }
  get errorCount() {
    return te(C(this, Ct))
  }
  set errorCount(n) {
    ae(C(this, Ct), n, !0)
  }
}
Pt = new WeakMap, Ct = new WeakMap;
const Se = new Bs;
async function gr(t) {
  if (t === 1) return Hs();
  if (t === 2) {
    const n = await ia();
    return n ? yr("turnstile", n) : !1
  }
  if (t === 3) {
    const n = await Fs();
    return n ? yr("hcaptcha", n) : !1
  }
  return t === 4 ? Us() : !1
}
async function Hs() {
  for (let t = 0; t < oa; t++) try {
    const n = await Cs();
    if (!n) continue;
    return await ze.verifyChallenge({
      type: "pow",
      challengeId: n.challengeId,
      nonce: n.nonce
    }), !0
  } catch {}
  return !1
}
async function yr(t, n) {
  try {
    const e = await ze.postCaptchaSession({
      provider: t,
      token: n
    });
    return await ze.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const _t = {};

function ia() {
  return sa(2)
}

function Fs() {
  return sa(3)
}

function sa(t) {
  const n = _t[t];
  if (n) return n;
  const e = new Promise(r => {
    Se.errorCount = 0, Se.current = {
      tier: t,
      resolve: a => {
        delete _t[t], r(a)
      }
    }
  });
  return _t[t] = e, e
}

function Us() {
  const t = _t[4];
  if (t) return t;
  const n = new Promise(e => {
    Se.errorCount = 0, Se.current = {
      tier: 4,
      resolve: r => {
        delete _t[4], e(r)
      }
    }
  });
  return _t[4] = n, n
}

function QE(t) {
  const n = Se.current;
  !n || n.tier === 4 || (n.resolve(t), Se.current = null)
}

function e2() {
  const t = Se.current;
  !t || t.tier === 4 || (Se.errorCount += 1, Se.errorCount >= oa && (t.resolve(void 0), Se.current = null))
}

function t2() {
  const t = Se.current;
  !t || t.tier !== 4 || (t.resolve(!0), Se.current = null)
}

function n2() {
  const t = Se.current;
  t && (t.tier === 4 ? t.resolve(!1) : t.resolve(void 0), Se.current = null)
}
var _ = (t => (t[t.CONTINUE = 100] = "CONTINUE", t[t.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", t[t.PROCESSING = 102] = "PROCESSING", t[t.EARLY_HINTS = 103] = "EARLY_HINTS", t[t.OK = 200] = "OK", t[t.CREATED = 201] = "CREATED", t[t.ACCEPTED = 202] = "ACCEPTED", t[t.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", t[t.NO_CONTENT = 204] = "NO_CONTENT", t[t.RESET_CONTENT = 205] = "RESET_CONTENT", t[t.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", t[t.MULTI_STATUS = 207] = "MULTI_STATUS", t[t.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", t[t.IM_USED = 226] = "IM_USED", t[t.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", t[t.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", t[t.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", t[t.FOUND = 302] = "FOUND", t[t.SEE_OTHER = 303] = "SEE_OTHER", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.USE_PROXY = 305] = "USE_PROXY", t[t.SWITCH_PROXY = 306] = "SWITCH_PROXY", t[t.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", t[t.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZED = 401] = "UNAUTHORIZED", t[t.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", t[t.FORBIDDEN = 403] = "FORBIDDEN", t[t.NOT_FOUND = 404] = "NOT_FOUND", t[t.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", t[t.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", t[t.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", t[t.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", t[t.CONFLICT = 409] = "CONFLICT", t[t.GONE = 410] = "GONE", t[t.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", t[t.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", t[t.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", t[t.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", t[t.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", t[t.URI_TOO_LONG = 414] = "URI_TOO_LONG", t[t.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", t[t.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", t[t.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", t[t.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", t[t.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", t[t.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", t[t.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", t[t.LOCKED = 423] = "LOCKED", t[t.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", t[t.TOO_EARLY = 425] = "TOO_EARLY", t[t.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", t[t.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", t[t.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", t[t.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", t[t.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", t[t.BAD_GATEWAY = 502] = "BAD_GATEWAY", t[t.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", t[t.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", t[t.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", t[t.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", t[t.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", t[t.LOOP_DETECTED = 508] = "LOOP_DETECTED", t[t.NOT_EXTENDED = 510] = "NOT_EXTENDED", t[t.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", t[t.AWS_ELB_000 = 0] = "AWS_ELB_000", t[t.THIS_IS_FINE = 218] = "THIS_IS_FINE", t[t.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", t[t.METHOD_FAILURE = 420] = "METHOD_FAILURE", t[t.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", t[t.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", t[t.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", t[t.NO_RESPONSE = 444] = "NO_RESPONSE", t[t.RETRY_WITH = 449] = "RETRY_WITH", t[t.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", t[t.REDIRECT_IIS = 451] = "REDIRECT_IIS", t[t.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", t[t.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", t[t.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", t[t.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", t[t.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", t[t.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", t[t.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", t[t.INVALID_TOKEN = 498] = "INVALID_TOKEN", t[t.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", t[t.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", t[t.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", t[t.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", t[t.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", t[t.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", t[t.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", t[t.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", t[t.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", t[t.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", t[t.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", t[t.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", t[t.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", t[t.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", t[t.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", t[t.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", t[t.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", t[t.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", t[t.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", t[t.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", t[t.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", t[t.REQUEST_DENIED = 999] = "REQUEST_DENIED", t))(_ || {});
const js = () => "Your account has been suspended for breaking the rules",
  Gs = () => "Sua conta foi suspensa por quebrar as regras",
  Vs = () => "您的账号因违反规则已被暂停",
  Ws = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  zs = () => "Tu cuenta ha sido suspendida por infringir las regras",
  $s = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  qs = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Ks = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Xs = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Ys = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Js = () => "Ваш обліковий запис було призупинено за порушення правил",
  Zs = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Qs = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? js() : e === "pt" ? Gs() : e === "ch" ? Vs() : e === "de" ? Ws() : e === "es" ? zs() : e === "fr" ? $s() : e === "it" ? qs() : e === "jp" ? Ks() : e === "pl" ? Xs() : e === "ru" ? Ys() : e === "uk" ? Js() : Zs()
  },
  ec = () => "Alliance name already taken",
  tc = () => "Já possui uma aliança com esse nome",
  nc = () => "该联盟名称已被占用",
  rc = () => "Der Allianzname ist bereits vergeben",
  ac = () => "Ese nombre de alianza ya está en uso",
  oc = () => "Ce nom d’alliance est déjà pris",
  ic = () => "Esiste già un'alleanza con questo nome",
  sc = () => "このアライアンス名は既に使用されています。",
  cc = () => "Nazwa sojuszu jest już zajęta",
  uc = () => "Такое название альянса уже используется",
  lc = () => "Назва альянсу вже зайнята",
  dc = () => "Tên liên minh đã được sử dụng",
  _c = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ec() : e === "pt" ? tc() : e === "ch" ? nc() : e === "de" ? rc() : e === "es" ? ac() : e === "fr" ? oc() : e === "it" ? ic() : e === "jp" ? sc() : e === "pl" ? cc() : e === "ru" ? uc() : e === "uk" ? lc() : dc()
  },
  fc = () => "Alliance name exceeded the maximum number of characters",
  mc = () => "O nome da aliança excedeu o número máximo de caracteres",
  pc = () => "联盟名称超过最大字符数限制",
  hc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  gc = () => "El nombre de la alianza superó el número máximo de caracteres",
  yc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  wc = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  bc = () => "アライアンス名が最大文字数を超えています。",
  vc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Ec = () => "Название альянса превышает максимальную длину",
  Ac = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Nc = () => "Tên liên minh vượt quá số ký tự cho phép",
  Tc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? fc() : e === "pt" ? mc() : e === "ch" ? pc() : e === "de" ? hc() : e === "es" ? gc() : e === "fr" ? yc() : e === "it" ? wc() : e === "jp" ? bc() : e === "pl" ? vc() : e === "ru" ? Ec() : e === "uk" ? Ac() : Nc()
  },
  Sc = () => "Alliance with empty name",
  Oc = () => "Aliança com nome vazio",
  Rc = () => "名称为空的联盟",
  Ic = () => "Allianz mit leerem Namen",
  Dc = () => "Alianza con nombre vacío",
  kc = () => "Alliance avec nom vide",
  Mc = () => "Alleanza con nome vuoto",
  Lc = () => "名前が空のアライアンスです。",
  Pc = () => "Sojusz z pustą nazwą",
  Cc = () => "Альянс с пустым названием",
  xc = () => "Альянс із порожньою назвою",
  Bc = () => "Liên minh không có tên",
  Hc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Sc() : e === "pt" ? Oc() : e === "ch" ? Rc() : e === "de" ? Ic() : e === "es" ? Dc() : e === "fr" ? kc() : e === "it" ? Mc() : e === "jp" ? Lc() : e === "pl" ? Pc() : e === "ru" ? Cc() : e === "uk" ? xc() : Bc()
  },
  Fc = () => "Botting",
  Uc = () => "Uso de bots",
  jc = () => "脚本",
  Gc = () => "Bot-Nutzung",
  Vc = () => "Botting",
  Wc = () => "Bots",
  zc = () => "Uso di bot",
  $c = () => "ボット使用",
  qc = () => "Botting",
  Kc = () => "Боттинг",
  Xc = () => "Боти",
  Yc = () => "Botting",
  Jc = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Fc() : e === "pt" ? Uc() : e === "ch" ? jc() : e === "de" ? Gc() : e === "es" ? Vc() : e === "fr" ? Wc() : e === "it" ? zc() : e === "jp" ? $c() : e === "pl" ? qc() : e === "ru" ? Kc() : e === "uk" ? Xc() : Yc()
  },
  Zc = () => "Use of software to completely automate painting",
  Qc = () => "Uso de software para pintar de forma completamente automatizada ",
  eu = () => "使用软件完全自动化绘制",
  tu = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  nu = () => "Uso de software para automatizar completamente la pintura",
  ru = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  au = () => "Uso di software per dipingere in modo completamente automatizzato",
  ou = () => "ペイントを完全に自動化するソフトウェアの使用",
  iu = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  su = () => "Использование программ для полной автоматизации рисования",
  cu = () => "Використання програм, які повністю автоматизують малювання",
  uu = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  lu = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Zc() : e === "pt" ? Qc() : e === "ch" ? eu() : e === "de" ? tu() : e === "es" ? nu() : e === "fr" ? ru() : e === "it" ? au() : e === "jp" ? ou() : e === "pl" ? iu() : e === "ru" ? su() : e === "uk" ? cu() : uu()
  },
  du = () => "Breaking the rules",
  _u = () => "Quebrar as regras",
  fu = () => "违反规则",
  mu = () => "Regeln brechen",
  pu = () => "Romper las reglas",
  hu = () => "Violation des règles",
  gu = () => "Violazione delle regole",
  yu = () => "ルール違反",
  wu = () => "Łamanie zasad",
  bu = () => "Нарушение правил",
  vu = () => "Порушення правил",
  Eu = () => "Vi phạm luật",
  Au = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? du() : e === "pt" ? _u() : e === "ch" ? fu() : e === "de" ? mu() : e === "es" ? pu() : e === "fr" ? hu() : e === "it" ? gu() : e === "jp" ? yu() : e === "pl" ? wu() : e === "ru" ? bu() : e === "uk" ? vu() : Eu()
  },
  Nu = () => "You have broken one of Wplace's rules",
  Tu = () => "Você quebrou uma das regras do Wplace",
  Su = () => "你违反了 Wplace 的一项规则",
  Ou = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Ru = () => "Has infringido una de las reglas de Wplace",
  Iu = () => "Vous avez enfreint l’une des règles de Wplace",
  Du = () => "Hai infranto una delle regole di Wplace",
  ku = () => "Wplaceのルールのいずれかに違反しました。",
  Mu = () => "Złamałeś jedną z zasad Wplace",
  Lu = () => "Вы нарушили одно из правил Wplace",
  Pu = () => "Ви порушили одне з правил Wplace",
  Cu = () => "Bạn đã vi phạm một trong các luật của Wplace",
  xu = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Nu() : e === "pt" ? Tu() : e === "ch" ? Su() : e === "de" ? Ou() : e === "es" ? Ru() : e === "fr" ? Iu() : e === "it" ? Du() : e === "jp" ? ku() : e === "pl" ? Mu() : e === "ru" ? Lu() : e === "uk" ? Pu() : Cu()
  },
  Bu = () => "You cannot paint over event pixels",
  Hu = () => "Você não pode pintar sobre pixels de eventos",
  Fu = () => "你不能覆盖活动像素",
  Uu = () => "Du kannst nicht über Event-Pixel malen",
  ju = () => "No puedes pintar sobre píxeles de evento",
  Gu = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Vu = () => "Non puoi dipingere sopra i pixel dell'evento",
  Wu = () => "イベント用のピクセルの上には塗れません。",
  zu = () => "Nie możesz malować po pikselach wydarzenia",
  $u = () => "Вы не можете рисовать по пикселям события",
  qu = () => "Ви не можете малювати поверх пікселів події",
  Ku = () => "Bạn không thể tô lên pixel sự kiện",
  wr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Bu() : e === "pt" ? Hu() : e === "ch" ? Fu() : e === "de" ? Uu() : e === "es" ? ju() : e === "fr" ? Gu() : e === "it" ? Vu() : e === "jp" ? Wu() : e === "pl" ? zu() : e === "ru" ? $u() : e === "uk" ? qu() : Ku()
  },
  Xu = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Yu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ju = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Zu = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Qu = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  el = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  tl = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  nl = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  rl = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  al = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  ol = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  il = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  sl = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Xu() : e === "pt" ? Yu() : e === "ch" ? Ju() : e === "de" ? Zu() : e === "es" ? Qu() : e === "fr" ? el() : e === "it" ? tl() : e === "jp" ? nl() : e === "pl" ? rl() : e === "ru" ? al() : e === "uk" ? ol() : il()
  },
  cl = () => "Challenge verification not completed",
  ul = () => "Verificação do desafio não concluída",
  ll = () => "挑战验证未完成",
  dl = () => "Herausforderungsverifizierung nicht abgeschlossen",
  _l = () => "Verificación del desafío no completada",
  fl = () => "Vérification du défi non terminée",
  ml = () => "Verifica della sfida non completata",
  pl = () => "チャレンジ検証が完了していません",
  hl = () => "Weryfikacja wyzwania niezakończona",
  gl = () => "Верификация вызова не завершена",
  yl = () => "Перевірку виклику не завершено",
  wl = () => "Xác minh thử thách chưa hoàn thành",
  Tn = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? cl() : e === "pt" ? ul() : e === "ch" ? ll() : e === "de" ? dl() : e === "es" ? _l() : e === "fr" ? fl() : e === "it" ? ml() : e === "jp" ? pl() : e === "pl" ? hl() : e === "ru" ? gl() : e === "uk" ? yl() : wl()
  },
  bl = () => "Couldn't complete the purchase. This item does not exist.",
  vl = () => "Não foi possível concluir a compra. Este item não existe.",
  El = () => "无法完成购买。该物品不存在。",
  Al = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Nl = () => "No se pudo completar la compra. Este ítem no existe.",
  Tl = () => "Achat impossible. Cet objet n’existe pas.",
  Sl = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Ol = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Rl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Il = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Dl = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  kl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  br = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? bl() : e === "pt" ? vl() : e === "ch" ? El() : e === "de" ? Al() : e === "es" ? Nl() : e === "fr" ? Tl() : e === "it" ? Sl() : e === "jp" ? Ol() : e === "pl" ? Rl() : e === "ru" ? Il() : e === "uk" ? Dl() : kl()
  },
  Ml = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Ll = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Pl = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Cl = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  xl = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Bl = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Hl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Fl = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Ul = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  jl = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Gl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Vl = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Wl = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ml() : e === "pt" ? Ll() : e === "ch" ? Pl() : e === "de" ? Cl() : e === "es" ? xl() : e === "fr" ? Bl() : e === "it" ? Hl() : e === "jp" ? Fl() : e === "pl" ? Ul() : e === "ru" ? jl() : e === "uk" ? Gl() : Vl()
  },
  zl = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  $l = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  ql = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Kl = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Xl = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Yl = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Jl = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Zl = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ql = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  ed = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  td = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  nd = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  vr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? zl() : e === "pt" ? $l() : e === "ch" ? ql() : e === "de" ? Kl() : e === "es" ? Xl() : e === "fr" ? Yl() : e === "it" ? Jl() : e === "jp" ? Zl() : e === "pl" ? Ql() : e === "ru" ? ed() : e === "uk" ? td() : nd()
  },
  rd = () => "Doxxing",
  ad = () => "Doxxing",
  od = () => "人肉搜索",
  id = () => "Doxxing",
  sd = () => "Doxxing",
  cd = () => "Doxxing",
  ud = () => "Doxxing",
  ld = () => "ドックス（Doxxing）",
  dd = () => "Doxxing",
  _d = () => "Докcинг",
  fd = () => "Докcинг",
  md = () => "Doxxing",
  pd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? rd() : e === "pt" ? ad() : e === "ch" ? od() : e === "de" ? id() : e === "es" ? sd() : e === "fr" ? cd() : e === "it" ? ud() : e === "jp" ? ld() : e === "pl" ? dd() : e === "ru" ? _d() : e === "uk" ? fd() : md()
  },
  hd = () => "Released other's personal information without their consent",
  gd = () => "Vazar informações pessoais de terceiros sem consentimento",
  yd = () => "在未获同意的情况下公开他人个人信息",
  wd = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  bd = () => "Divulgó información personal de otra persona sin su consentimiento",
  vd = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Ed = () => "Diffusione di informazioni personali di terzi senza consenso",
  Ad = () => "他人の個人情報を同意なく公開した。",
  Nd = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Td = () => "Публикация личной информации других людей без их согласия",
  Sd = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Od = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Rd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? hd() : e === "pt" ? gd() : e === "ch" ? yd() : e === "de" ? wd() : e === "es" ? bd() : e === "fr" ? vd() : e === "it" ? Ed() : e === "jp" ? Ad() : e === "pl" ? Nd() : e === "ru" ? Td() : e === "uk" ? Sd() : Od()
  },
  Id = () => "This email is already in use.",
  Dd = () => "Este e-mail já está em uso.",
  kd = () => "This email is already in use.",
  Md = () => "This email is already in use.",
  Ld = () => "Este correo electrónico ya está en uso.",
  Pd = () => "This email is already in use.",
  Cd = () => "Questa email è già in uso.",
  xd = () => "This email is already in use.",
  Bd = () => "This email is already in use.",
  Hd = () => "This email is already in use.",
  Fd = () => "This email is already in use.",
  Ud = () => "This email is already in use.",
  jd = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Id() : e === "pt" ? Dd() : e === "ch" ? kd() : e === "de" ? Md() : e === "es" ? Ld() : e === "fr" ? Pd() : e === "it" ? Cd() : e === "jp" ? xd() : e === "pl" ? Bd() : e === "ru" ? Hd() : e === "uk" ? Fd() : Ud()
  },
  Gd = t => `This email is already in use by user #${t.userId}.`,
  Vd = t => `Este e-mail já está em uso pelo usuário #${t.userId}.`,
  Wd = t => `This email is already in use by user #${t.userId}.`,
  zd = t => `This email is already in use by user #${t.userId}.`,
  $d = t => `Este correo electrónico ya está en uso por el usuario #${t.userId}.`,
  qd = t => `This email is already in use by user #${t.userId}.`,
  Kd = t => `Questa email è già in uso dall'utente #${t.userId}.`,
  Xd = t => `This email is already in use by user #${t.userId}.`,
  Yd = t => `This email is already in use by user #${t.userId}.`,
  Jd = t => `This email is already in use by user #${t.userId}.`,
  Zd = t => `This email is already in use by user #${t.userId}.`,
  Qd = t => `This email is already in use by user #${t.userId}.`,
  e_ = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Gd(t) : e === "pt" ? Vd(t) : e === "ch" ? Wd(t) : e === "de" ? zd(t) : e === "es" ? $d(t) : e === "fr" ? qd(t) : e === "it" ? Kd(t) : e === "jp" ? Xd(t) : e === "pl" ? Yd(t) : e === "ru" ? Jd(t) : e === "uk" ? Zd(t) : Qd(t)
  },
  t_ = () => "Enter a valid email address.",
  n_ = () => "Informe um endereço de e-mail válido.",
  r_ = () => "Enter a valid email address.",
  a_ = () => "Enter a valid email address.",
  o_ = () => "Introduce una dirección de correo electrónico válida.",
  i_ = () => "Enter a valid email address.",
  s_ = () => "Inserisci un indirizzo email valido.",
  c_ = () => "Enter a valid email address.",
  u_ = () => "Enter a valid email address.",
  l_ = () => "Enter a valid email address.",
  d_ = () => "Enter a valid email address.",
  __ = () => "Enter a valid email address.",
  f_ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? t_() : e === "pt" ? n_() : e === "ch" ? r_() : e === "de" ? a_() : e === "es" ? o_() : e === "fr" ? i_() : e === "it" ? s_() : e === "jp" ? c_() : e === "pl" ? u_() : e === "ru" ? l_() : e === "uk" ? d_() : __()
  },
  m_ = t => `Error while painting: ${t.err}`,
  p_ = t => `Erro enquanto pinta: ${t.err}`,
  h_ = t => `绘制时出错：${t.err}`,
  g_ = t => `Fehler beim Malen: ${t.err}`,
  y_ = t => `Error al pintar: ${t.err}`,
  w_ = t => `Erreur lors de la peinture : ${t.err}`,
  b_ = t => `Errore durante la pittura: ${t.err}`,
  v_ = t => `ペイント中にエラーが発生しました: ${t.err}`,
  E_ = t => `Błąd podczas malowania: ${t.err}`,
  A_ = t => `Ошибка при рисовании: ${t.err}`,
  N_ = t => `Помилка під час малювання: ${t.err}`,
  T_ = t => `Lỗi khi tô: ${t.err}`,
  S_ = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? m_(t) : e === "pt" ? p_(t) : e === "ch" ? h_(t) : e === "de" ? g_(t) : e === "es" ? y_(t) : e === "fr" ? w_(t) : e === "it" ? b_(t) : e === "jp" ? v_(t) : e === "pl" ? E_(t) : e === "ru" ? A_(t) : e === "uk" ? N_(t) : T_(t)
  },
  O_ = () => "Exceeded maximum number of characters",
  R_ = () => "Excedeu o número máximo de caracteres permitidos",
  I_ = () => "超出最大字符数",
  D_ = () => "Maximale Zeichenanzahl überschritten",
  k_ = () => "Se excedió el número máximo de caracteres",
  M_ = () => "Nombre maximal de caractères dépassé",
  L_ = () => "Numero massimo di caratteri superato",
  P_ = () => "最大文字数を超過しました",
  C_ = () => "Przekroczono maksymalną liczbę znaków",
  x_ = () => "Превышено максимальное количество символов",
  B_ = () => "Перевищено максимальну кількість символів",
  H_ = () => "Đã vượt quá số ký tự tối đa",
  F_ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? O_() : e === "pt" ? R_() : e === "ch" ? I_() : e === "de" ? D_() : e === "es" ? k_() : e === "fr" ? M_() : e === "it" ? L_() : e === "jp" ? P_() : e === "pl" ? C_() : e === "ru" ? x_() : e === "uk" ? B_() : H_()
  },
  U_ = () => "Verification code expired. Please request a new one.",
  j_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  G_ = () => "验证码已过期，请重新获取。",
  V_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  W_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  z_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  $_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  q_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  K_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  X_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Y_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  J_ = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  Z_ = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? U_() : e === "pt" ? j_() : e === "ch" ? G_() : e === "de" ? V_() : e === "es" ? W_() : e === "fr" ? z_() : e === "it" ? $_() : e === "jp" ? q_() : e === "pl" ? K_() : e === "ru" ? X_() : e === "uk" ? Y_() : J_()
  },
  Q_ = () => "Griefing",
  ef = () => "Griefing",
  tf = () => "破坏行为",
  nf = () => "Griefing",
  rf = () => "Griefing",
  af = () => "Griefing",
  of = () => "Griefing",
  sf = () => "グリーフィング",
  cf = () => "Griefing",
  uf = () => "Гриферство",
  lf = () => "Гріфінг",
  df = () => "Griefing",
  _f = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Q_() : e === "pt" ? ef() : e === "ch" ? tf() : e === "de" ? nf() : e === "es" ? rf() : e === "fr" ? af() : e === "it" ? of() : e === "jp" ? sf() : e === "pl" ? cf() : e === "ru" ? uf() : e === "uk" ? lf() : df()
  },
  ff = () => "Messed up with other's artworks",
  mf = () => "Estragou os desenhos dos outros",
  pf = () => "破坏了他人的作品",
  hf = () => "Kunstwerke anderer beschädigt",
  gf = () => "Arruinó las obras de arte de otros",
  yf = () => "A abîmé les œuvres des autres",
  wf = () => "Ha rovinato i disegni degli altri",
  bf = () => "他人の作品を荒らした",
  vf = () => "Zniszczył prace innych",
  Ef = () => "Испортил чужие рисунки",
  Af = () => "Зіпсував роботи інших",
  Nf = () => "Phá hỏng tranh của người khác",
  Tf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ff() : e === "pt" ? mf() : e === "ch" ? pf() : e === "de" ? hf() : e === "es" ? gf() : e === "fr" ? yf() : e === "it" ? wf() : e === "jp" ? bf() : e === "pl" ? vf() : e === "ru" ? Ef() : e === "uk" ? Af() : Nf()
  },
  Sf = () => "Hate speech",
  Of = () => "Discurso de Ódio",
  Rf = () => "仇恨言论",
  If = () => "Hassrede",
  Df = () => "Discurso de odio",
  kf = () => "Discours haineux",
  Mf = () => "Discorso d'odio",
  Lf = () => "ヘイトスピーチ",
  Pf = () => "Mowa nienawiści",
  Cf = () => "Речь ненависти",
  xf = () => "Мова ворожнечі",
  Bf = () => "Ngôn từ thù hằn",
  Hf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Sf() : e === "pt" ? Of() : e === "ch" ? Rf() : e === "de" ? If() : e === "es" ? Df() : e === "fr" ? kf() : e === "it" ? Mf() : e === "jp" ? Lf() : e === "pl" ? Pf() : e === "ru" ? Cf() : e === "uk" ? xf() : Bf()
  },
  Ff = () => "Racism, homophobia, hate groups, ...",
  Uf = () => "Racismo, homofobia, grupos de ódio, ...",
  jf = () => "种族主义、恐同、仇恨团体等",
  Gf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Vf = () => "Racismo, homofobia, grupos de odio, ...",
  Wf = () => "Racisme, homophobie, groupes haineux, ...",
  zf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  $f = () => "人種差別、同性愛差別、ヘイト団体など。",
  qf = () => "Rasizm, homofobia, grupy nienawiści, ...",
  Kf = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Xf = () => "Расизм, гомофобія, групи ненависті, ...",
  Yf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Jf = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ff() : e === "pt" ? Uf() : e === "ch" ? jf() : e === "de" ? Gf() : e === "es" ? Vf() : e === "fr" ? Wf() : e === "it" ? zf() : e === "jp" ? $f() : e === "pl" ? qf() : e === "ru" ? Kf() : e === "uk" ? Xf() : Yf()
  },
  Zf = () => "Inappropriate content",
  Qf = () => "Conteúdo inapropriado",
  em = () => "不当内容",
  tm = () => "Unangemessene Inhalte",
  nm = () => "Contenido inapropiado",
  rm = () => "Contenu inapproprié",
  am = () => "Contenuto inappropriato",
  om = () => "不適切なコンテンツ",
  im = () => "Nieodpowiednie treści",
  sm = () => "Неприемлемый контент",
  cm = () => "Неприйнятний вміст",
  um = () => "Nội dung không phù hợp",
  lm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Zf() : e === "pt" ? Qf() : e === "ch" ? em() : e === "de" ? tm() : e === "es" ? nm() : e === "fr" ? rm() : e === "it" ? am() : e === "jp" ? om() : e === "pl" ? im() : e === "ru" ? sm() : e === "uk" ? cm() : um()
  },
  dm = () => "Explicit, hateful, or illegal content",
  _m = () => "Conteúdo explícito, de ódio ou ilegal",
  fm = () => "露骨、仇恨或非法内容",
  mm = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  pm = () => "Contenido explícito, de odio o ilegal",
  hm = () => "Contenu explicite, haineux ou illégal",
  gm = () => "Contenuto esplicito, d'odio o illegale",
  ym = () => "露骨、差別的、または違法なコンテンツ",
  wm = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  bm = () => "Откровенный, разжигающий ненависть или незаконный контент",
  vm = () => "Відвертий, ворожий або незаконний вміст",
  Em = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Am = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? dm() : e === "pt" ? _m() : e === "ch" ? fm() : e === "de" ? mm() : e === "es" ? pm() : e === "fr" ? hm() : e === "it" ? gm() : e === "jp" ? ym() : e === "pl" ? wm() : e === "ru" ? bm() : e === "uk" ? vm() : Em()
  },
  Nm = () => "Invalid captcha. Please try again.",
  Tm = () => "Captcha inválido. Por favor, tente novamente.",
  Sm = () => "验证码无效，请重试。",
  Om = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Rm = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Im = () => "Captcha invalide. Veuillez réessayer.",
  Dm = () => "Captcha non valido. Riprova.",
  km = () => "キャプチャが無効です。もう一度お試しください。",
  Mm = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Lm = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Pm = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Cm = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  xm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Nm() : e === "pt" ? Tm() : e === "ch" ? Sm() : e === "de" ? Om() : e === "es" ? Rm() : e === "fr" ? Im() : e === "it" ? Dm() : e === "jp" ? km() : e === "pl" ? Mm() : e === "ru" ? Lm() : e === "uk" ? Pm() : Cm()
  },
  Bm = () => "Invalid challenge response",
  Hm = () => "Resposta de desafio inválida",
  Fm = () => "质询响应无效",
  Um = () => "Ungültige Challenge-Antwort",
  jm = () => "Respuesta de desafío inválida",
  Gm = () => "Réponse au défi invalide",
  Vm = () => "Risposta alla sfida non valida",
  Wm = () => "無効なチャレンジ応答",
  zm = () => "Nieprawidłowa odpowiedź na wyzwanie",
  $m = () => "Неверный ответ на вызов",
  qm = () => "Недійсна відповідь на виклик",
  Km = () => "Phản hồi thử thách không hợp lệ",
  Xm = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Bm() : e === "pt" ? Hm() : e === "ch" ? Fm() : e === "de" ? Um() : e === "es" ? jm() : e === "fr" ? Gm() : e === "it" ? Vm() : e === "jp" ? Wm() : e === "pl" ? zm() : e === "ru" ? $m() : e === "uk" ? qm() : Km()
  },
  Ym = () => "The verification code is incorrect. Please check it and try again.",
  Jm = () => "Código inválido",
  Zm = () => "验证码不正确。请检查后重试。",
  Qm = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  ep = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  tp = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  np = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  rp = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  ap = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  op = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  ip = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  sp = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  cp = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ym() : e === "pt" ? Jm() : e === "ch" ? Zm() : e === "de" ? Qm() : e === "es" ? ep() : e === "fr" ? tp() : e === "it" ? np() : e === "jp" ? rp() : e === "pl" ? ap() : e === "ru" ? op() : e === "uk" ? ip() : sp()
  },
  up = () => "Invalid discord.",
  lp = () => "Discord inválido.",
  dp = () => "无效的 Discord。",
  _p = () => "Ungültiger Discord.",
  fp = () => "Discord inválido.",
  mp = () => "Discord invalide.",
  pp = () => "Discord non valido.",
  hp = () => "無効なDiscordアカウントです。",
  gp = () => "Nieprawidłowy Discord.",
  yp = () => "Неверный Discord.",
  wp = () => "Некоректний Discord.",
  bp = () => "Discord không hợp lệ.",
  vp = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? up() : e === "pt" ? lp() : e === "ch" ? dp() : e === "de" ? _p() : e === "es" ? fp() : e === "fr" ? mp() : e === "it" ? pp() : e === "jp" ? hp() : e === "pl" ? gp() : e === "ru" ? yp() : e === "uk" ? wp() : bp()
  },
  Ep = () => "The name contains disallowed characters or words. Please choose a different name.",
  Ap = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Np = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Tp = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Sp = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Op = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Rp = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Ip = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Dp = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  kp = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Mp = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Lp = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Er = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ep() : e === "pt" ? Ap() : e === "ch" ? Np() : e === "de" ? Tp() : e === "es" ? Sp() : e === "fr" ? Op() : e === "it" ? Rp() : e === "jp" ? Ip() : e === "pl" ? Dp() : e === "ru" ? kp() : e === "uk" ? Mp() : Lp()
  },
  Pp = () => "Please enter a valid phone number with country code.",
  Cp = () => "Insira um número de telefone válido com código do país.",
  xp = () => "请输入带国家代码的有效电话号码。",
  Bp = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Hp = () => "Introduce un número de teléfono válido con código de país.",
  Fp = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Up = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  jp = () => "国番号付きの有効な電話番号を入力してください。",
  Gp = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Vp = () => "Введите действительный номер телефона с кодом страны.",
  Wp = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  zp = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  $p = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Pp() : e === "pt" ? Cp() : e === "ch" ? xp() : e === "de" ? Bp() : e === "es" ? Hp() : e === "fr" ? Fp() : e === "it" ? Up() : e === "jp" ? jp() : e === "pl" ? Gp() : e === "ru" ? Vp() : e === "uk" ? Wp() : zp()
  },
  qp = () => "Phone number not supported. Please try another number.",
  Kp = () => "Número de telefone não suportado. Por favor, tente outro número.",
  Xp = () => "不支持此电话号码。请尝试其他号码。",
  Yp = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  Jp = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  Zp = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  Qp = () => "Numero di telefono non supportato. Prova con un altro numero.",
  eh = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  th = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  nh = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  rh = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  ah = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  oh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? qp() : e === "pt" ? Kp() : e === "ch" ? Xp() : e === "de" ? Yp() : e === "es" ? Jp() : e === "fr" ? Zp() : e === "it" ? Qp() : e === "jp" ? eh() : e === "pl" ? th() : e === "ru" ? nh() : e === "uk" ? rh() : ah()
  },
  ih = () => "The new leader must be a member of the alliance",
  sh = () => "O novo líder deve ser um membro da aliança",
  ch = () => "新盟主必须是联盟成员",
  uh = () => "Der neue Anführer muss Mitglied der Allianz sein",
  lh = () => "El nuevo líder debe ser miembro de la alianza",
  dh = () => "Le nouveau chef doit être membre de l’alliance",
  _h = () => "Il nuovo leader deve essere un membro dell'alleanza",
  fh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  mh = () => "Nowy lider musi być członkiem sojuszu",
  ph = () => "Новый лидер должен быть участником альянса",
  hh = () => "Новий лідер має бути учасником альянсу",
  gh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  yh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? ih() : e === "pt" ? sh() : e === "ch" ? ch() : e === "de" ? uh() : e === "es" ? lh() : e === "fr" ? dh() : e === "it" ? _h() : e === "jp" ? fh() : e === "pl" ? mh() : e === "ru" ? ph() : e === "uk" ? hh() : gh()
  },
  wh = () => "Leaderboard is temporarily disabled",
  bh = () => "O ranking está temporariamente desativado",
  vh = () => "排行榜已暂时停用",
  Eh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Ah = () => "La clasificación está deshabilitada temporalmente",
  Nh = () => "Le classement est temporairement désactivé",
  Th = () => "La classifica è temporaneamente disattivata",
  Sh = () => "ランキングは一時的に無効になっています。",
  Oh = () => "Ranking jest tymczasowo wyłączony",
  Rh = () => "Таблица лидеров временно отключена",
  Ih = () => "Таблиця лідерів тимчасово вимкнена",
  Dh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  Xe = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? wh() : e === "pt" ? bh() : e === "ch" ? vh() : e === "de" ? Eh() : e === "es" ? Ah() : e === "fr" ? Nh() : e === "it" ? Th() : e === "jp" ? Sh() : e === "pl" ? Oh() : e === "ru" ? Rh() : e === "uk" ? Ih() : Dh()
  },
  kh = () => "Location name is too big (max. 128 characters)",
  Mh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Lh = () => "位置名称过长（最大 128 个字符）",
  Ph = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Ch = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  xh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Bh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Hh = () => "場所の名前が長すぎます（最大128文字）。",
  Fh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Uh = () => "Название локации слишком длинное (макс. 128 символов)",
  jh = () => "Назва локації надто довга (макс. 128 символів)",
  Gh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Vh = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? kh() : e === "pt" ? Mh() : e === "ch" ? Lh() : e === "de" ? Ph() : e === "es" ? Ch() : e === "fr" ? xh() : e === "it" ? Bh() : e === "jp" ? Hh() : e === "pl" ? Fh() : e === "ru" ? Uh() : e === "uk" ? jh() : Gh()
  },
  Wh = () => "Multi-accounting",
  zh = () => "Múltiplas contas",
  $h = () => "多账号",
  qh = () => "Multi-Accounting",
  Kh = () => "Multi-cuentas",
  Xh = () => "Multi-comptes",
  Yh = () => "Multi-account",
  Jh = () => "複数アカウント使用",
  Zh = () => "Multi-konta",
  Qh = () => "Мультиаккаунт",
  eg = () => "Мультиакаунтинг",
  tg = () => "Nhiều tài khoản",
  ng = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Wh() : e === "pt" ? zh() : e === "ch" ? $h() : e === "de" ? qh() : e === "es" ? Kh() : e === "fr" ? Xh() : e === "it" ? Yh() : e === "jp" ? Jh() : e === "pl" ? Zh() : e === "ru" ? Qh() : e === "uk" ? eg() : tg()
  },
  rg = () => "Use more than one account to paint pixels",
  ag = () => "Usar mais de uma conta para pintar",
  og = () => "使用多个账号绘制像素",
  ig = () => "Mehr als ein Konto zum Malen verwenden",
  sg = () => "Uso de más de una cuenta para pintar píxeles",
  cg = () => "Utiliser plus d’un compte pour peindre",
  ug = () => "Usare più di un account per dipingere",
  lg = () => "複数のアカウントを使ってピクセルを塗った。",
  dg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  _g = () => "Использование более одного аккаунта для рисования",
  fg = () => "Використання більше ніж одного акаунта для малювання",
  mg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  pg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? rg() : e === "pt" ? ag() : e === "ch" ? og() : e === "de" ? ig() : e === "es" ? sg() : e === "fr" ? cg() : e === "it" ? ug() : e === "jp" ? lg() : e === "pl" ? dg() : e === "ru" ? _g() : e === "uk" ? fg() : mg()
  },
  hg = t => `You can change your name again in ${t.days} days`,
  gg = t => `Você pode alterar seu nome novamente em ${t.days} dias.`,
  yg = t => `你可以在 ${t.days} 天后再次修改名称`,
  wg = t => `Du kannst deinen Namen in ${t.days} Tagen erneut ändern`,
  bg = t => `Podrás cambiar tu nombre de nuevo en ${t.days} días`,
  vg = t => `Vous pourrez changer votre nom à nouveau dans ${t.days} jours`,
  Eg = t => `Potrai cambiare di nuovo il tuo nome tra ${t.days} giorni.`,
  Ag = t => `${t.days}日後に再び名前を変更できます。`,
  Ng = t => `Następną zmianę nazwy możesz wykonać za ${t.days} dni`,
  Tg = t => `Вы сможете изменить имя снова через ${t.days} дн.`,
  Sg = t => `Ви зможете змінити імʼя знову через ${t.days} днів`,
  Og = t => `Bạn có thể đổi tên lại sau ${t.days} ngày`,
  Rg = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? hg(t) : e === "pt" ? gg(t) : e === "ch" ? yg(t) : e === "de" ? wg(t) : e === "es" ? bg(t) : e === "fr" ? vg(t) : e === "it" ? Eg(t) : e === "jp" ? Ag(t) : e === "pl" ? Ng(t) : e === "ru" ? Tg(t) : e === "uk" ? Sg(t) : Og(t)
  },
  Ig = () => "No internet access or the servers are offline. Try again later.",
  Dg = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  kg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Mg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Lg = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Pg = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Cg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  xg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Bg = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Hg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Fg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Ug = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  jg = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ig() : e === "pt" ? Dg() : e === "ch" ? kg() : e === "de" ? Mg() : e === "es" ? Lg() : e === "fr" ? Pg() : e === "it" ? Cg() : e === "jp" ? xg() : e === "pl" ? Bg() : e === "ru" ? Hg() : e === "uk" ? Fg() : Ug()
  },
  Gg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Vg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Wg = () => "您无权验证电话号码。请尝试刷新页面。",
  zg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  $g = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  qg = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Kg = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Xg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Yg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Jg = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  Zg = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  Qg = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  e1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Gg() : e === "pt" ? Vg() : e === "ch" ? Wg() : e === "de" ? zg() : e === "es" ? $g() : e === "fr" ? qg() : e === "it" ? Kg() : e === "jp" ? Xg() : e === "pl" ? Yg() : e === "ru" ? Jg() : e === "uk" ? Zg() : Qg()
  },
  t1 = () => "Operation not allowed. Maybe you have too many favorite locations.",
  n1 = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  r1 = () => "操作不被允许。你的收藏位置可能过多。",
  a1 = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  o1 = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  i1 = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  s1 = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  c1 = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  u1 = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  l1 = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  d1 = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  _1 = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  f1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? t1() : e === "pt" ? n1() : e === "ch" ? r1() : e === "de" ? a1() : e === "es" ? o1() : e === "fr" ? i1() : e === "it" ? s1() : e === "jp" ? c1() : e === "pl" ? u1() : e === "ru" ? l1() : e === "uk" ? d1() : _1()
  },
  m1 = t => `Not enough charges: you have ${t.charges} but this overlay needs ${t.pixels}.`,
  p1 = t => `Cargas insuficientes: você tem ${t.charges}, mas esta sobreposição precisa de ${t.pixels}.`,
  h1 = t => `充能不足：你有 ${t.charges}，但此叠加层需要 ${t.pixels}。`,
  g1 = t => `Nicht genügend Ladungen: Du hast ${t.charges}, aber dieses Overlay benötigt ${t.pixels}.`,
  y1 = t => `Cargas insuficientes: tienes ${t.charges} pero esta superposición necesita ${t.pixels}.`,
  w1 = t => `Charges insuffisantes : vous avez ${t.charges} mais ce calque nécessite ${t.pixels}.`,
  b1 = t => `Cariche insufficienti: ne hai ${t.charges} ma questo overlay ne richiede ${t.pixels}.`,
  v1 = t => `チャージが足りません：現在 ${t.charges} ですが、このオーバーレイには ${t.pixels} 必要です。`,
  E1 = t => `Za mało ładunków: masz ${t.charges}, ale ta nakładka wymaga ${t.pixels}.`,
  A1 = t => `Недостаточно зарядов: у вас ${t.charges}, но для этого слоя нужно ${t.pixels}.`,
  N1 = t => `Недостатньо зарядів: у вас ${t.charges}, але для цього шару потрібно ${t.pixels}.`,
  T1 = t => `Không đủ lượt sơn: bạn có ${t.charges} nhưng lớp phủ này cần ${t.pixels}.`,
  S1 = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? m1(t) : e === "pt" ? p1(t) : e === "ch" ? h1(t) : e === "de" ? g1(t) : e === "es" ? y1(t) : e === "fr" ? w1(t) : e === "it" ? b1(t) : e === "jp" ? v1(t) : e === "pl" ? E1(t) : e === "ru" ? A1(t) : e === "uk" ? N1(t) : T1(t)
  },
  O1 = () => "You are trying to paint with a color you do not own",
  R1 = () => "Você está tentando pintar com uma cor que não possui",
  I1 = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  D1 = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  k1 = () => "Estás intentando pintar con un color que no posees",
  M1 = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  L1 = () => "Stai cercando di dipingere con un colore che non possiedi",
  P1 = () => "所持していない色で塗ろうとしています。",
  C1 = () => "Próbujesz malować kolorem, którego nie posiadasz",
  x1 = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  B1 = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  H1 = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Ar = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? O1() : e === "pt" ? R1() : e === "ch" ? I1() : e === "de" ? D1() : e === "es" ? k1() : e === "fr" ? M1() : e === "it" ? L1() : e === "jp" ? P1() : e === "pl" ? C1() : e === "ru" ? x1() : e === "uk" ? B1() : H1()
  },
  F1 = () => "Phone already used",
  U1 = () => "Telefone já usado",
  j1 = () => "电话号码已被使用",
  G1 = () => "Telefonnummer bereits verwendet",
  V1 = () => "Teléfono ya utilizado",
  W1 = () => "Téléphone déjà utilisé",
  z1 = () => "Telefono già utilizzato",
  $1 = () => "この電話番号は既に使用されています。",
  q1 = () => "Numer telefonu jest już używany",
  K1 = () => "Телефон уже используется",
  X1 = () => "Номер телефону вже використовується",
  Y1 = () => "Số điện thoại đã được sử dụng",
  J1 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? F1() : e === "pt" ? U1() : e === "ch" ? j1() : e === "de" ? G1() : e === "es" ? V1() : e === "fr" ? W1() : e === "it" ? z1() : e === "jp" ? $1() : e === "pl" ? q1() : e === "ru" ? K1() : e === "uk" ? X1() : Y1()
  },
  Z1 = () => "This phone number's region is not supported",
  Q1 = () => "A região deste número de telefone não é suportada",
  e0 = () => "此电话号码的地区不受支持",
  t0 = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  n0 = () => "La región de este número de teléfono no es compatible",
  r0 = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  a0 = () => "La regione di questo numero di telefono non è supportata",
  o0 = () => "この電話番号の地域はサポートされていません",
  i0 = () => "Region tego numeru telefonu nie jest obsługiwany",
  s0 = () => "Регион этого номера телефона не поддерживается",
  c0 = () => "Регіон цього номера телефону не підтримується",
  u0 = () => "Vùng của số điện thoại này không được hỗ trợ",
  l0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Z1() : e === "pt" ? Q1() : e === "ch" ? e0() : e === "de" ? t0() : e === "es" ? n0() : e === "fr" ? r0() : e === "it" ? a0() : e === "jp" ? o0() : e === "pl" ? i0() : e === "ru" ? s0() : e === "uk" ? c0() : u0()
  },
  d0 = () => "Refresh your page to get the latest update",
  _0 = () => "Recarregue sua página para obter as últimas atualizações",
  f0 = () => "刷新页面以获取最新更新",
  m0 = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  p0 = () => "Actualiza la página para obtener la última versión",
  h0 = () => "Actualisez la page pour obtenir les dernières mises à jour",
  g0 = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  y0 = () => "最新の状態にするにはページを再読み込みしてください。",
  w0 = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  b0 = () => "Обновите страницу, чтобы получить последние изменения",
  v0 = () => "Оновіть сторінку, щоб отримати останні оновлення",
  E0 = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Nr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? d0() : e === "pt" ? _0() : e === "ch" ? f0() : e === "de" ? m0() : e === "es" ? p0() : e === "fr" ? h0() : e === "it" ? g0() : e === "jp" ? y0() : e === "pl" ? w0() : e === "ru" ? b0() : e === "uk" ? v0() : E0()
  },
  A0 = () => "The request timed out. Please try again.",
  N0 = () => "A solicitação expirou. Por favor, tente novamente.",
  T0 = () => "请求超时。请重试。",
  S0 = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  O0 = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  R0 = () => "La requête a expiré. Veuillez réessayer.",
  I0 = () => "La richiesta è scaduta. Riprova.",
  D0 = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  k0 = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  M0 = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  L0 = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  P0 = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  C0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? A0() : e === "pt" ? N0() : e === "ch" ? T0() : e === "de" ? S0() : e === "es" ? O0() : e === "fr" ? R0() : e === "it" ? I0() : e === "jp" ? D0() : e === "pl" ? k0() : e === "ru" ? M0() : e === "uk" ? L0() : P0()
  },
  x0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  B0 = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  H0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  F0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  U0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  j0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  G0 = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  V0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  W0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  z0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  q0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  K0 = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? x0() : e === "pt" ? B0() : e === "ch" ? H0() : e === "de" ? F0() : e === "es" ? U0() : e === "fr" ? j0() : e === "it" ? G0() : e === "jp" ? V0() : e === "pl" ? W0() : e === "ru" ? z0() : e === "uk" ? $0() : q0()
  },
  X0 = () => "The service is currently unavailable. Please try again later.",
  Y0 = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  J0 = () => "服务当前不可用。请稍后再试。",
  Z0 = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Q0 = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  ey = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  ty = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  ny = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  ry = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  ay = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  oy = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  iy = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  sy = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? X0() : e === "pt" ? Y0() : e === "ch" ? J0() : e === "de" ? Z0() : e === "es" ? Q0() : e === "fr" ? ey() : e === "it" ? ty() : e === "jp" ? ny() : e === "pl" ? ry() : e === "ru" ? ay() : e === "uk" ? oy() : iy()
  },
  cy = () => "Too many attempts. Please try again later",
  uy = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  ly = () => "尝试次数过多，请稍后再试",
  dy = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  _y = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  fy = () => "Trop de tentatives. Veuillez réessayer plus tard",
  my = () => "Troppi tentativi. Riprova più tardi.",
  py = () => "試行回数が多すぎます。後で再度お試しください。",
  hy = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  gy = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  yy = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  wy = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Tr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? cy() : e === "pt" ? uy() : e === "ch" ? ly() : e === "de" ? dy() : e === "es" ? _y() : e === "fr" ? fy() : e === "it" ? my() : e === "jp" ? py() : e === "pl" ? hy() : e === "ru" ? gy() : e === "uk" ? yy() : wy()
  },
  by = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  vy = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Ey = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Ay = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Ny = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Ty = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Sy = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Oy = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Ry = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Iy = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  Dy = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  ky = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  My = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? by() : e === "pt" ? vy() : e === "ch" ? Ey() : e === "de" ? Ay() : e === "es" ? Ny() : e === "fr" ? Ty() : e === "it" ? Sy() : e === "jp" ? Oy() : e === "pl" ? Ry() : e === "ru" ? Iy() : e === "uk" ? Dy() : ky()
  },
  Ly = () => "The typed username does not match your current username.",
  Py = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Cy = () => "输入的用户名与当前用户名不匹配。",
  xy = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  By = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Hy = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Fy = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Uy = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  jy = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Gy = () => "Введённое имя пользователя не совпадает с текущим.",
  Vy = () => "Введене імʼя користувача не збігається з поточним.",
  Wy = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  zy = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Ly() : e === "pt" ? Py() : e === "ch" ? Cy() : e === "de" ? xy() : e === "es" ? By() : e === "fr" ? Hy() : e === "it" ? Fy() : e === "jp" ? Uy() : e === "pl" ? jy() : e === "ru" ? Gy() : e === "uk" ? Vy() : Wy()
  },
  $y = () => "Unexpected server error. Try again later.",
  qy = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Ky = () => "服务器出现意外错误。请稍后再试。",
  Xy = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Yy = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Jy = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Zy = () => "Errore imprevisto del server. Riprova più tardi.",
  Qy = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  ew = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  tw = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  nw = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  rw = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  p = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? $y() : e === "pt" ? qy() : e === "ch" ? Ky() : e === "de" ? Xy() : e === "es" ? Yy() : e === "fr" ? Jy() : e === "it" ? Zy() : e === "jp" ? Qy() : e === "pl" ? ew() : e === "ru" ? tw() : e === "uk" ? nw() : rw()
  },
  aw = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  ow = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  iw = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  sw = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  cw = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  uw = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  lw = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  dw = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  _w = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  fw = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  mw = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  pw = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  hw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? aw() : e === "pt" ? ow() : e === "ch" ? iw() : e === "de" ? sw() : e === "es" ? cw() : e === "fr" ? uw() : e === "it" ? lw() : e === "jp" ? dw() : e === "pl" ? _w() : e === "ru" ? fw() : e === "uk" ? mw() : pw()
  },
  gw = () => "VPN or proxy detected. Please disable your VPN and try again.",
  yw = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  ww = () => "检测到VPN或代理。请关闭VPN后重试。",
  bw = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  vw = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  Ew = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  Aw = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  Nw = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  Tw = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Sw = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  Ow = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Rw = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Iw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? gw() : e === "pt" ? yw() : e === "ch" ? ww() : e === "de" ? bw() : e === "es" ? vw() : e === "fr" ? Ew() : e === "it" ? Aw() : e === "jp" ? Nw() : e === "pl" ? Tw() : e === "ru" ? Sw() : e === "uk" ? Ow() : Rw()
  },
  Dw = () => "Failed to load WebAssembly module. Try to use another browser.",
  kw = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Mw = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Lw = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Pw = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Cw = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  xw = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Bw = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Hw = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  Fw = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  Uw = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  jw = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Gw = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Dw() : e === "pt" ? kw() : e === "ch" ? Mw() : e === "de" ? Lw() : e === "es" ? Pw() : e === "fr" ? Cw() : e === "it" ? xw() : e === "jp" ? Bw() : e === "pl" ? Hw() : e === "ru" ? Fw() : e === "uk" ? Uw() : jw()
  },
  Vw = () => "You already have this item. Please refresh the page.",
  Ww = () => "Você já possui este item. Atualize a página.",
  zw = () => "你已经拥有此物品。请刷新页面。",
  $w = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  qw = () => "Ya tienes este ítem. Actualiza la página.",
  Kw = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Xw = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Yw = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Jw = () => "Masz już ten przedmiot. Odśwież stronę.",
  Zw = () => "У вас уже есть этот предмет. Обновите страницу.",
  Qw = () => "У вас уже є цей предмет. Оновіть сторінку.",
  eb = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Sr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Vw() : e === "pt" ? Ww() : e === "ch" ? zw() : e === "de" ? $w() : e === "es" ? qw() : e === "fr" ? Kw() : e === "it" ? Xw() : e === "jp" ? Yw() : e === "pl" ? Jw() : e === "ru" ? Zw() : e === "uk" ? Qw() : eb()
  },
  tb = () => "You are already in an alliance",
  nb = () => "Você já está em uma aliança",
  rb = () => "你已经在一个联盟中",
  ab = () => "Du bist bereits in einer Allianz",
  ob = () => "Ya estás en una alianza",
  ib = () => "Vous êtes déjà dans une alliance",
  sb = () => "Sei già in un'alleanza",
  cb = () => "すでにアライアンスに所属しています。",
  ub = () => "Jesteś już w sojuszu",
  lb = () => "Вы уже состоите в альянсе",
  db = () => "Ви вже перебуваєте в альянсі",
  _b = () => "Bạn đã ở trong một liên minh",
  fb = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? tb() : e === "pt" ? nb() : e === "ch" ? rb() : e === "de" ? ab() : e === "es" ? ob() : e === "fr" ? ib() : e === "it" ? sb() : e === "jp" ? cb() : e === "pl" ? ub() : e === "ru" ? lb() : e === "uk" ? db() : _b()
  },
  mb = () => "You are not allowed to do this",
  pb = () => "Você não tem permissão para fazer isso",
  hb = () => "你无权执行此操作",
  gb = () => "Du bist dazu nicht berechtigt",
  yb = () => "No tienes permiso para hacer esto",
  wb = () => "Vous n’êtes pas autorisé à faire cela",
  bb = () => "Non hai il permesso di farlo",
  vb = () => "この操作を行う権限がありません。",
  Eb = () => "Nie masz uprawnień, aby to zrobić",
  Ab = () => "У вас нет прав для этого действия",
  Nb = () => "Ви не маєте права це робити",
  Tb = () => "Bạn không có quyền làm việc này",
  Ye = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? mb() : e === "pt" ? pb() : e === "ch" ? hb() : e === "de" ? gb() : e === "es" ? yb() : e === "fr" ? wb() : e === "it" ? bb() : e === "jp" ? vb() : e === "pl" ? Eb() : e === "ru" ? Ab() : e === "uk" ? Nb() : Tb()
  },
  Sb = () => "You do not have enough Droplets to buy this item.",
  Ob = () => "Você não tem Droplets suficientes para comprar este item.",
  Rb = () => "你的 Droplets 不足，无法购买此物品。",
  Ib = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Db = () => "No tienes suficientes Droplets para comprar este ítem.",
  kb = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Mb = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Lb = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Pb = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Cb = () => "У вас недостаточно Droplets для покупки этого предмета.",
  xb = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Bb = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Or = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Sb() : e === "pt" ? Ob() : e === "ch" ? Rb() : e === "de" ? Ib() : e === "es" ? Db() : e === "fr" ? kb() : e === "it" ? Mb() : e === "jp" ? Lb() : e === "pl" ? Pb() : e === "ru" ? Cb() : e === "uk" ? xb() : Bb()
  },
  Hb = () => "You need to be logged in to paint",
  Fb = () => "Você precisa estar conectado para pintar",
  Ub = () => "你需要登录才能进行绘制",
  jb = () => "Du musst eingeloggt sein, um zu malen",
  Gb = () => "Debes iniciar sesión para pintar",
  Vb = () => "Vous devez être connecté pour peindre",
  Wb = () => "Devi avere effettuato l'accesso per dipingere",
  zb = () => "ペイントするにはログインが必要です。",
  $b = () => "Musisz być zalogowany, aby malować",
  qb = () => "Чтобы рисовать, нужно войти в аккаунт",
  Kb = () => "Щоб малювати, необхідно увійти в акаунт",
  Xb = () => "Bạn cần đăng nhập để tô",
  Rr = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Hb() : e === "pt" ? Fb() : e === "ch" ? Ub() : e === "de" ? jb() : e === "es" ? Gb() : e === "fr" ? Vb() : e === "it" ? Wb() : e === "jp" ? zb() : e === "pl" ? $b() : e === "ru" ? qb() : e === "uk" ? Kb() : Xb()
  },
  Yb = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Jb = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Zb = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Qb = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  ev = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  tv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  nv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  rv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  av = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  ov = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  iv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  sv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  cv = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Yb() : e === "pt" ? Jb() : e === "ch" ? Zb() : e === "de" ? Qb() : e === "es" ? ev() : e === "fr" ? tv() : e === "it" ? nv() : e === "jp" ? rv() : e === "pl" ? av() : e === "ru" ? ov() : e === "uk" ? iv() : sv()
  },
  uv = t => `Your account has been suspended out until ${t.until}`,
  lv = t => `A sua conta está suspensa até ${t.until}`,
  dv = t => `你的账号已被暂停至 ${t.until}`,
  _v = t => `Dein Konto ist gesperrt bis ${t.until}`,
  fv = t => `Tu cuenta ha sido suspendida hasta ${t.until}`,
  mv = t => `Votre compte est suspendu jusqu’au ${t.until}`,
  pv = t => `Il tuo account è sospeso fino al ${t.until}`,
  hv = t => `あなたのアカウントは${t.until}まで一時停止されています。`,
  gv = t => `Twoje konto zostało zawieszone do ${t.until}`,
  yv = t => `Ваш аккаунт заблокирован до ${t.until}`,
  wv = t => `Ваш акаунт призупинено до ${t.until}`,
  bv = t => `Tài khoản của bạn đã bị đình chỉ đến ${t.until}`,
  Ir = (t, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? uv(t) : e === "pt" ? lv(t) : e === "ch" ? dv(t) : e === "de" ? _v(t) : e === "es" ? fv(t) : e === "fr" ? mv(t) : e === "it" ? pv(t) : e === "jp" ? hv(t) : e === "pl" ? gv(t) : e === "ru" ? yv(t) : e === "uk" ? wv(t) : bv(t)
  },
  vv = () => "A correction is already pending for this ticket.",
  Ev = () => "Já existe uma correção pendente para este ticket.",
  Av = () => "此工单已存在待审核的更正请求。",
  Nv = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  Tv = () => "Ya hay una corrección pendiente para este ticket.",
  Sv = () => "Une correction est déjà en attente pour ce ticket.",
  Ov = () => "Una correzione è già in sospeso per questo ticket.",
  Rv = () => "このチケットには未処理の修正があります。",
  Iv = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  Dv = () => "Для этого тикета уже есть запрос на исправление.",
  kv = () => "Для цього тікета вже є запит на перевірці.",
  Mv = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Lv = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? vv() : e === "pt" ? Ev() : e === "ch" ? Av() : e === "de" ? Nv() : e === "es" ? Tv() : e === "fr" ? Sv() : e === "it" ? Ov() : e === "jp" ? Rv() : e === "pl" ? Iv() : e === "ru" ? Dv() : e === "uk" ? kv() : Mv()
  },
  Pv = () => "You cannot review your own correction request.",
  Cv = () => "Você não pode revisar sua própria solicitação de correção.",
  xv = () => "不能审核自己提交的更正请求。",
  Bv = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Hv = () => "No puedes revisar tu propia solicitud de corrección.",
  Fv = () => "Tu ne peux pas examiner ta propre demande de correction.",
  Uv = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  jv = () => "自分のリクエストはレビューできません。",
  Gv = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Vv = () => "Нельзя рассматривать собственный запрос.",
  Wv = () => "Не можна перевіряти власний запит.",
  zv = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  $v = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? Pv() : e === "pt" ? Cv() : e === "ch" ? xv() : e === "de" ? Bv() : e === "es" ? Hv() : e === "fr" ? Fv() : e === "it" ? Uv() : e === "jp" ? jv() : e === "pl" ? Gv() : e === "ru" ? Vv() : e === "uk" ? Wv() : zv()
  },
  qv = () => "This correction has already been reviewed.",
  Kv = () => "Esta correção já foi revisada.",
  Xv = () => "此请求已被审核。",
  Yv = () => "Diese Korrektur wurde bereits geprüft.",
  Jv = () => "Esta corrección ya ha sido revisada.",
  Zv = () => "Cette correction a déjà été examinée.",
  Qv = () => "Questa correzione è già stata revisionata.",
  eE = () => "このリクエストはすでにレビュー済みです。",
  tE = () => "Ta prośba została już rozpatrzona.",
  nE = () => "Этот запрос уже рассмотрен.",
  rE = () => "Цей запит вже перевірено.",
  aE = () => "Yêu cầu này đã được duyệt.",
  oE = (t = {}, n = {}) => {
    const e = n.locale ?? R();
    return e === "en" ? qv() : e === "pt" ? Kv() : e === "ch" ? Xv() : e === "de" ? Yv() : e === "es" ? Jv() : e === "fr" ? Zv() : e === "it" ? Qv() : e === "jp" ? eE() : e === "pl" ? tE() : e === "ru" ? nE() : e === "uk" ? rE() : aE()
  },
  We = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function r2(t) {
  const n = Math.floor(t / We.hour);
  t -= n * We.hour;
  const e = Math.floor(t / We.minute);
  t -= e * We.minute;
  const a = Math.floor(t / We.second).toString().padStart(2, "0");
  return n > 0 ? `${n}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function a2(t) {
  const n = t.getFullYear(),
    e = String(t.getMonth() + 1).padStart(2, "0"),
    r = String(t.getDate()).padStart(2, "0"),
    a = String(t.getHours()).padStart(2, "0"),
    o = String(t.getMinutes()).padStart(2, "0"),
    s = String(t.getSeconds()).padStart(2, "0");
  return `${n}-${e}-${r} ${a}:${o}:${s}`
}
const o2 = {
    griefing: _f(),
    "multi-accounting": ng(),
    "hate-speech": Hf(),
    bot: Jc(),
    doxxing: pd(),
    "inappropriate-content": lm(),
    other: Au()
  },
  i2 = {
    doxxing: Rd(),
    "hate-speech": Jf(),
    griefing: Tf(),
    "multi-accounting": pg(),
    bot: lu(),
    "inappropriate-content": Am(),
    other: xu()
  },
  s2 = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Dr = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  c2 = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  iE = 365 * We.day;

function ca(t) {
  if (!t) return null;
  const e = (t instanceof Date ? t : new Date(t)).getTime();
  return Number.isFinite(e) ? e : null
}

function u2(t, n = Date.now()) {
  const e = ca(t);
  return e === null ? !1 : e - n >= iE
}

function l2(t, n = Date.now()) {
  const e = ca(t);
  if (e === null || e <= n) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - n) / 6e4)),
    a = Math.floor(r / 1440),
    o = Math.floor(r % 1440 / 60),
    s = r % 60;
  return {
    days: a,
    hours: o,
    minutes: s
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
  _E = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  fE = {
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
  mE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  rt = {
    seasons: sE,
    regionSize: cE,
    refreshIntervalMs: uE,
    colors: lE,
    products: dE,
    countries: _E,
    permissions: fE,
    settings: mE
  },
  Cn = rt,
  pE = rt.seasons,
  ua = rt.seasons.length - 1,
  d2 = rt.seasons[ua].zoom,
  _2 = rt.seasons[ua].tileSize,
  f2 = rt.permissions,
  hE = rt.settings;

function m2(t) {
  return Cn.countries[t - 1]
}
class b extends Error {
  constructor(n, e) {
    super(n), this.message = n, this.status = e
  }
}

function kr(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    let o = e[a];
    o ? o.push(r) : e[a] = [r]
  }
  return e
}

function p2(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    e[a] = r
  }
  return e
}
const gE = 30 * We.minute;
var xt, Bt;
class yE {
  constructor(n) {
    Z(this, xt, ge(!0));
    Z(this, Bt, ge(null));
    K(this, "lastHotspotRequestAt", 0);
    this.url = n
  }
  get online() {
    return te(C(this, xt))
  }
  set online(n) {
    ae(C(this, xt), n, !0)
  }
  get serverTimeOffsetMs() {
    return te(C(this, Bt))
  }
  set serverTimeOffsetMs(n) {
    ae(C(this, Bt), n, !0)
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
    const e = kr(n, i => `t=(${i.tile[0]},${i.tile[1]}),s=${i.season}`),
      r = {
        season: n[0].season,
        tiles: Object.values(e).map(i => ({
          x: i[0].tile[0],
          y: i[0].tile[1],
          pixels: {
            x: i.map(c => c.pixel[0]),
            y: i.map(c => c.pixel[1]),
            colors: i.map(c => c.colorIdx)
          }
        }))
      },
      a = JSON.stringify(r),
      o = await yt.getHeaders(a),
      s = await this.request("/paint", {
        method: "POST",
        body: a,
        headers: o,
        credentials: "include"
      });
    if (s.status !== _.OK) {
      if (s.status === _.UNAUTHORIZED) throw new Error(Rr());
      if (s.status === _.FORBIDDEN) {
        if (s.headers.get("cf-mitigated") === "challenge") throw new Error(vr());
        const i = await s.json();
        if ((i == null ? void 0 : i.error) === "timeout") {
          const c = new Date(Date.now() + ((i == null ? void 0 : i.durationMs) ?? 0));
          throw new Error(Ir({
            until: c.toLocaleString()
          }))
        }
        if ((i == null ? void 0 : i.error) === "refresh") throw new Error(Nr());
        if ((i == null ? void 0 : i.error) === "color-not-owned") throw new Error(Ar());
        if ((i == null ? void 0 : i.error) === "event-pixel-present") throw new Error(wr());
        if ((i == null ? void 0 : i.error) === "challenge-required")
          if (i.tier) {
            if (await gr(i.tier)) return this.paint(n);
            throw new Error(Tn())
          } else console.error("Challenge required but no tier provided", i);
        ut.refresh()
      } else throw new Error(p())
    }
  }
  async selectAreaClear(n, e) {
    return this.sendPaintRequests(n, (r, a, o) => `/staff/tools/select-area/clear/s${r}/pixel/${a}/${o}`, e)
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
    if (e.status !== _.OK) throw new b(p(), e.status);
    return e.json()
  }
  async getReverseTimestamps(n, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: a,
      beforeTimestamp: o
    } = e, s = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        beforeDepth: a,
        beforeTimestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (s.status !== _.OK) throw new b(p(), s.status);
    return s.json()
  }
  async getReversePreview(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: a,
      timestamp: o
    } = e, s = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        snapshotDepth: a,
        timestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (s.status !== _.OK) throw new b(p(), s.status);
    return s.json()
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
    if (r.status === _.BAD_REQUEST) {
      const a = await r.json(),
        o = (a == null ? void 0 : a.error) ?? "";
      throw o === "timelapse_too_many_events" ? new b(K0(), _.BAD_REQUEST) : new b(typeof o == "string" && o ? o : p(), _.BAD_REQUEST)
    }
    if (r.status !== _.OK) throw new b(p(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: a,
      timestamp: o
    } = e, s = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: n,
        mode: r,
        snapshotDepth: a,
        timestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (s.status !== _.OK) throw new b(p(), s.status);
    return s.json()
  }
  async sendPaintRequests(n, e, r, a) {
    const o = kr(n, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
      i = (await Promise.all(Object.values(o).map(async c => {
        const [l, u] = c[0].tile, m = c[0].season, f = {
          colors: c.map(y => y.colorIdx),
          coords: c.flatMap(y => y.pixel),
          csid: r
        }, d = JSON.stringify(f), h = e(m, l, u), g = await yt.getHeaders(d);
        return this.request(h, {
          method: "POST",
          body: d,
          headers: g,
          credentials: "include"
        })
      }))).filter(c => c.status !== _.OK);
    if (i.length) {
      const c = i[0];
      if (c.status === _.UNAUTHORIZED) throw new Error(Rr());
      if (c.status === _.FORBIDDEN) {
        if (c.headers.get("cf-mitigated") === "challenge") throw new Error(vr());
        const l = await c.json();
        if ((l == null ? void 0 : l.error) === "timeout") {
          const u = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(Ir({
            until: u.toLocaleString()
          }))
        }
        if ((l == null ? void 0 : l.error) === "refresh") throw new Error(Nr());
        if ((l == null ? void 0 : l.error) === "color-not-owned") throw new Error(Ar());
        if ((l == null ? void 0 : l.error) === "event-pixel-present") throw new Error(wr());
        ut.refresh()
      } else throw new Error(p())
    }
  }
  async adminAutoPainterPaint(n, e, r) {
    const a = wE(n),
      o = await bE(a),
      s = new FormData;
    s.append("fingerprint", e), s.append("season", a.season.toString()), s.append("px0", a.offsetX.toString()), s.append("py0", a.offsetY.toString()), s.append("width", a.width.toString()), s.append("height", a.height.toString()), s.append("pixels", n.length.toString()), s.append("bitmap", o, "auto-painter.png"), s.append("userId", r.toString());
    const i = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: s,
      credentials: "include"
    });
    if (i.status === _.FORBIDDEN) {
      const c = await i.json().catch(() => null);
      if (typeof(c == null ? void 0 : c.charges) == "number") throw new Error(S1({
        charges: Math.floor(c.charges),
        pixels: n.length
      }));
      const l = typeof(c == null ? void 0 : c.error) == "string" ? c.error.trim() : "";
      throw l && l !== "Forbidden" ? new Error(l) : new Error("Auto painter is restricted to administrators.")
    }
    if (i.status !== _.OK) throw new Error(p());
    return i.json()
  }
  async getPixelInfo({
    season: n,
    tile: [e, r],
    pixel: [a, o]
  }) {
    const s = new URLSearchParams;
    s.set("x", String(a)), s.set("y", String(o));
    const i = await this.request(`/s${n}/pixel/${e}/${r}?${s.toString()}`, {
      credentials: "include"
    });
    if (i.status !== _.OK) {
      const c = await i.text();
      throw new Error(S_({
        err: c
      }))
    }
    return i.json()
  }
  async getPixelAreaInfo({
    season: n,
    tile: [e, r],
    p0: [a, o],
    p1: [s, i]
  }) {
    const c = await this.request(`/staff/tools/select-area/s${n}/${e}/${r}?x0=${a}&y0=${o}&x1=${s}&y1=${i}`, {
      credentials: "include"
    });
    if (c.status !== _.OK) {
      const h = await c.text();
      throw console.error("Error while fetching pixel area info", h), new Error(p())
    }
    const l = await c.arrayBuffer(),
      u = new DataView(l),
      m = Math.floor(l.byteLength / 5),
      f = new Uint32Array(m),
      d = new Uint8Array(m);
    for (let h = 0; h < m; h++) {
      const g = h * 5;
      f[h] = u.getUint32(g, !0), d[h] = u.getUint8(g + 4)
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
    if (n.status === _.OK) return await n.json()
  }
  async meEmail() {
    const n = await this.request("/me/email", {
      credentials: "include"
    });
    if (n.status === _.OK) return (await n.json()).email
  }
  async logout() {
    const n = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new Error(await n.text());
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
    if (e.status === _.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Qs());
    if (e.status !== _.OK) throw new Error(await e.text());
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
    if (n.status === _.NOT_FOUND) return null;
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
    if (n.status !== _.OK) throw new Error(p());
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
    if (e.status === _.BAD_REQUEST) throw new Error($p());
    if (e.status === _.CONFLICT) throw new Error(J1());
    if (e.status === _.FORBIDDEN) throw new Error(e1());
    if (e.status === _.TOO_MANY_REQUESTS) throw new Error(Tr());
    if (e.status === _.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(l0());
    if (e.status === _.LOCKED) throw new Error(hw());
    if (e.status === _.UNPROCESSABLE_ENTITY) throw new Error(oh());
    if (e.status === _.NOT_ACCEPTABLE) throw new Error(Iw());
    if (e.status === _.PRECONDITION_FAILED) throw new Error(Wl());
    if (e.status !== _.OK) throw new Error(p());
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
      if (r.status === _.GONE) throw new Error(Z_());
      if (r.status === _.BAD_REQUEST) throw new Error(cp());
      if (r.status === _.TOO_MANY_REQUESTS) throw new Error(Tr());
      if (r.status !== _.OK) throw new Error(p())
    } else {
      if (r.status === _.BAD_REQUEST) throw new Error(Xm());
      if (r.status !== _.OK) throw new Error(p())
    }
  }
  async updateMe(n) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status === _.BAD_REQUEST) {
      const r = await e.json(),
        a = (r == null ? void 0 : r.error) ?? "";
      if (a === "invalid_name") throw new Error(Er());
      if (a === "invalid_discord") throw new Error(vp());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const o = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(Rg({
          days: o
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== _.OK) throw new Error(p())
  }
  async deleteMe(n) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: n
      })
    });
    if (e.status === _.BAD_REQUEST) throw new Error(zy());
    if (e.status !== _.OK) throw new Error(p())
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
    if (e.status === _.FORBIDDEN) throw new Error(f1());
    if (e.status !== _.OK) throw new Error(p())
  }
  async deleteFavoriteLocation(n) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: n
        }),
        credentials: "include"
      })).status !== _.OK) throw new Error(p())
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
    if (r.status === _.BAD_REQUEST) throw new Error(Vh());
    if (r.status !== _.OK) throw new Error(p())
  }
  async leaderboardPlayers(n) {
    const e = await this.request(`/leaderboard/player/${n}`);
    if (e.status !== _.OK) throw new Error(Xe());
    return e.json()
  }
  async leaderboardAlliances(n) {
    const e = await this.request(`/leaderboard/alliance/${n}`);
    if (e.status !== _.OK) throw new Error(Xe());
    return e.json()
  }
  async leaderboardRegions(n, e = 0) {
    const r = await this.request(`/leaderboard/region/${n}/${e}`);
    if (r.status === _.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardRegionPlayers(n, e) {
    const r = await this.request(`/leaderboard/region/players/${n}/${e}`);
    if (r.status === _.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardRegionAlliances(n, e) {
    const r = await this.request(`/leaderboard/region/alliances/${n}/${e}`);
    if (r.status === _.OK) return r.json();
    throw new Error(Xe())
  }
  async leaderboardCountries(n) {
    const e = await this.request(`/leaderboard/country/${n}`, {
      credentials: "include"
    });
    if (e.status === _.OK) return e.json();
    throw new Error(Xe())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < gE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== _.OK) throw new Error(p());
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
    if (e.status !== _.OK) throw e.status === _.NOT_FOUND ? new Error(br()) : e.status === _.FORBIDDEN ? new Error(Or()) : e.status === _.CONFLICT ? new Error(Sr()) : new Error(p())
  }
  async getAlliance() {
    const n = await this.request("/alliance", {
      credentials: "include"
    });
    if (n.status === _.OK) return n.json();
    if (n.status === _.NOT_FOUND) return;
    throw new Error(p())
  }
  async createAlliance(n) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: n
      })
    });
    if (e.status === _.OK) return e.json();
    if (e.status === _.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(Tc()) : r.error === "name_taken" ? new Error(_c()) : r.error == "empty_name" ? new Error(Hc()) : new Error(p())
    } else throw e.status === _.FORBIDDEN ? new Error(fb()) : new Error(p())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== _.OK) throw new Error(p())
  }
  async updateAllianceDescription(n) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: n
      })
    });
    if (e.status !== _.OK) throw e.status === _.FORBIDDEN ? new Error(Ye()) : e.status === _.BAD_REQUEST ? new Error(F_()) : new Error(p())
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
    if (r.status !== _.OK) throw r.status === _.FORBIDDEN ? new Error(Ye()) : new Error(p())
  }
  async allianceLeaderboard(n) {
    const e = await this.request(`/alliance/leaderboard/${n}`, {
      credentials: "include"
    });
    if (e.status === _.OK) return e.json();
    throw e.status === _.FORBIDDEN ? new Error(Ye()) : new Error(Xe())
  }
  async getAllianceInvites() {
    const n = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (n.status === _.OK) return n.json();
    throw n.status === _.FORBIDDEN ? new Error(Ye()) : new Error(p())
  }
  async joinAlliance(n) {
    switch ((await this.request(`/alliance/join/${n}`, {
        credentials: "include"
      })).status) {
      case _.OK:
        return "success";
      case _.ALREADY_REPORTED:
        return "in-another-alliance";
      case _.UNAUTHORIZED:
        return "not-logged-in";
      case _.FORBIDDEN:
        return "banned";
      case _.BAD_REQUEST:
      case _.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(n) {
    const e = await this.request(`/alliance/members/${n}`, {
      credentials: "include"
    });
    if (e.status === _.OK) return e.json();
    throw new Error(p())
  }
  async getAllianceBannedMembers(n) {
    const e = await this.request(`/alliance/members/banned/${n}`, {
      credentials: "include"
    });
    if (e.status === _.OK) return e.json();
    throw new Error(p())
  }
  async getAllianceById(n) {
    const e = await this.request(`/staff/dashboard/alliances/${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === _.NOT_FOUND) return;
    if (e.status !== _.OK) throw new b(p(), e.status);
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
    if (r.status !== _.OK) throw new b(p(), r.status);
    const a = await r.json();
    return (Array.isArray(a) ? a : []).map(o => ({
      id: Number(o.id),
      name: String(o.name ?? ""),
      pixelsPainted: Number((o == null ? void 0 : o.pixels_painted) ?? 0)
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
    if (e.status === _.NOT_FOUND) return null;
    if (e.status !== _.OK) throw new b(p(), e.status);
    const r = await e.json(),
      a = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
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
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? a.length),
      members: a.map(o => ({
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
  async getAdminAllianceMembers(n, e) {
    const r = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      a = await this.request(`/staff/dashboard/alliances/${n}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === _.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (a.status !== _.OK) throw new b(p(), a.status);
    const o = await a.json(),
      s = Array.isArray(o == null ? void 0 : o.members) ? o.members : [];
    return {
      members: s.map(i => ({
        id: Number(i == null ? void 0 : i.id),
        name: String((i == null ? void 0 : i.name) ?? `#${i==null?void 0:i.id}`),
        picture: (i == null ? void 0 : i.picture) ?? null,
        pixelsPainted: Number((i == null ? void 0 : i.pixelsPainted) ?? (i == null ? void 0 : i.pixels_painted) ?? 0),
        lastPixelLatitude: (i == null ? void 0 : i.lastPixelLatitude) ?? null,
        lastPixelLongitude: (i == null ? void 0 : i.lastPixelLongitude) ?? null,
        role: (i == null ? void 0 : i.alliance_role) === "admin" || (i == null ? void 0 : i.role) === "admin" ? "admin" : "member"
      })),
      total: Number((o == null ? void 0 : o.total) ?? s.length)
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
    if (r.status === _.BAD_REQUEST) {
      const a = await r.json().catch(() => ({}));
      throw new Error((a == null ? void 0 : a.error) ?? p())
    } else if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async changeAllianceLeader(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === _.BAD_REQUEST) {
      const a = await r.json();
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(yh()) : new Error(p())
    } else if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async banAllAllianceMembers(n, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${n}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (a.status !== _.OK) throw new b(p(), a.status)
  }
  async setAllianceMemberRole(n, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${n}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (a.status !== _.OK) throw new b(p(), a.status)
  }
  async removeAllianceMember(n, e) {
    const r = await this.request(`/staff/dashboard/alliances/${n}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async giveAllianceAdmin(n) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== _.OK) throw e.status === _.FORBIDDEN ? new Error(Ye()) : new Error(p())
  }
  async banAllianceUser(n) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== _.OK) throw e.status === _.FORBIDDEN ? new Error(Ye()) : new Error(p())
  }
  async equipFlag(n) {
    if ((await this.request(`/flag/equip/${n}`, {
        method: "POST",
        credentials: "include"
      })).status !== _.OK) throw new Error(p())
  }
  async getMyProfilePictures() {
    const n = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (n.status !== _.OK) throw new Error(p());
    return n.json()
  }
  async changeProfilePicture(n) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: n
        })
      })).status !== _.OK) throw new Error(p())
  }
  async unbanAllianceUser(n) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: n
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== _.OK) throw e.status === _.FORBIDDEN ? new Error(Ye()) : new Error(p())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getModeratorTickets() {
    const n = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    const e = await n.json();
    for (const r of e.tickets) r.reports.sort((a, o) => Dr[a.reason] - Dr[o.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const n = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const n = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
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
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async setTicketStatus(n, e, r, a) {
    const o = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: n,
        status: e,
        selectedReportId: r,
        assignedReason: a
      })
    });
    if (o.status !== _.OK && o.status !== _.BAD_REQUEST) throw new b(p(), o.status)
  }
  async getLastResolvedTicket() {
    const n = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return (await n.json()).ticket
  }
  async getTicketReversalTicketInfo(n) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status);
    return (await e.json()).ticket
  }
  async createTicketReversal(n) {
    const e = await this.request("/staff/tickets/reversals", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status === _.CONFLICT) {
      const r = await e.json().catch(() => ({}));
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new b(Lv(), _.CONFLICT) : new b(p(), _.CONFLICT)
    }
    if (e.status !== _.OK) throw new b(p(), e.status);
    return e.json()
  }
  async listTicketReversals(n = {}) {
    const e = new URLSearchParams;
    n.status && e.set("status", n.status), n.page != null && e.set("page", String(n.page)), n.pageSize != null && e.set("pageSize", String(n.pageSize));
    const r = `/staff/tickets/reversals${e.toString()?`?${e.toString()}`:""}`,
      a = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== _.OK) throw new b(p(), a.status);
    return (await a.json()).reversals ?? []
  }
  async getTicketReversal(n) {
    const e = await this.request(`/staff/tickets/reversals/${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status);
    return (await e.json()).reversal
  }
  async reviewTicketReversal(n, e, r) {
    const a = await this.request(`/staff/tickets/reversals/${n}/review`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        decision: e,
        notes: r
      })
    });
    if (a.status === _.FORBIDDEN) throw new b($v(), _.FORBIDDEN);
    if (a.status === _.CONFLICT) throw new b(oE(), _.CONFLICT);
    if (a.status !== _.OK) throw new b(p(), a.status)
  }
  async request(n, e) {
    var s;
    let r;
    e = {
      credentials: "include",
      ...e
    };
    try {
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (i) {
      throw console.error("Fetch error:", i), this.online = !1, new Error(sl(), {
        cause: i
      })
    }
    if (r.status === _.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(My());
    const a = ((s = r.headers.get("cf-mitigated")) == null ? void 0 : s.toLowerCase()) === "challenge";
    if (r.status === 403 && a) {
      if (yt.setCfLikelyAutomated(!0), !await ia()) throw new Error(Tn());
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === _.TOO_MANY_REQUESTS) throw new Error(cv());
      if (r.status === _.REQUEST_TIMEOUT) throw new Error(C0());
      if (r.status === _.SERVICE_UNAVAILABLE) throw new Error(sy())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const n = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async getOpenReportsSummary() {
    const n = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async getBanAppealStats(n, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
    const a = await r.json();
    return {
      items: a.items ?? [],
      globals: a.globals
    }
  }
  async getClosedTicketsByMod(n, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
    return (await r.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
    }))
  }
  async getClosedReportsByMod(n, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(n)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
    return (await r.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
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
    if (e.status !== _.OK) throw new b(p(), e.status);
    return e.json()
  }
  async getUserInfoFull(n) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== _.NOT_FOUND) {
      if (e.status !== _.OK) throw new b(p(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(n) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== _.NOT_FOUND) {
      if (e.status !== _.OK) throw new b(p(), e.status);
      return e.json()
    }
  }
  async removePunishment(n, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: n
        })
      });
    if (a.status !== _.OK) throw new b(p(), a.status)
  }
  async getUserNotes(n, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(n)}` : `/staff/appeals/notes?userId=${encodeURIComponent(n)}`,
      a = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== _.OK) throw new b(p(), a.status);
    return a.json()
  }
  async addUserNote(n, e, r) {
    const a = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(n)}` : `/staff/appeals/notes?userId=${encodeURIComponent(n)}`,
      o = await this.request(a, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: n,
          note: e
        })
      });
    if (o.status !== _.OK) throw new b(p(), o.status)
  }
  async getUserPermissions(n) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status);
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
    if (r.status !== _.OK) throw new b(p(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.permissions) ? a.permissions : []
  }
  async getUserPurchases(n) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(n)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(o => {
      const s = o.is_dollar ?? o.isDollar ?? o.currency ?? o.Currency ?? 0;
      let i;
      if (typeof s == "string") {
        const m = s.toLowerCase();
        i = m === "usd" || m === "dollar" || m === "true"
      } else typeof s == "number" ? i = s !== 0 : i = !!s;
      const c = typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : "",
        l = o.product_variant ?? o.productVariant,
        u = l == null || l === "" ? null : Number(l);
      return {
        product_name: String(o.productName ?? o.product_name ?? ""),
        amount: Number(o.amount ?? 0),
        price: Number(o.price ?? 0),
        is_dollar: i,
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
    if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async postAdminRenameUser(n, e, r) {
    const a = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: n,
        newName: e,
        oldName: r
      })
    });
    if (a.status === _.BAD_REQUEST) {
      const o = await a.json(),
        s = (o == null ? void 0 : o.error) ?? "";
      throw s === "invalid_name" ? new b(Er(), _.BAD_REQUEST) : new b(typeof s == "string" && s ? s : p(), _.BAD_REQUEST)
    }
    if (a.status !== _.OK) throw new b(p(), a.status)
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
    if (r.status === _.BAD_REQUEST) {
      const a = await r.json(),
        o = (a == null ? void 0 : a.error) ?? "";
      throw o === "email_required" || o === "invalid_email" ? new b(f_(), _.BAD_REQUEST) : new b(typeof o == "string" && o ? o : p(), _.BAD_REQUEST)
    }
    if (r.status === _.CONFLICT) {
      const a = await r.json();
      if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
        const s = new b(typeof(a == null ? void 0 : a.userId) == "number" ? e_({
          userId: a.userId
        }) : jd(), _.CONFLICT);
        throw typeof(a == null ? void 0 : a.userId) == "number" && (s.userId = a.userId), s
      }
      throw new b(p(), _.CONFLICT)
    }
    if (r.status === _.NOT_FOUND) throw new b("User not found.", _.NOT_FOUND);
    if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async getAdminUserProfilePictures(n) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${n}`, {
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status);
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
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async getUserTickets(n, e) {
    if (e === "appeals" && (n.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(n.userId)), r.set("kind", String(n.kind)), r.set("page", String(n.page ?? 0)), r.set("pageSize", String(n.pageSize ?? 20)), n.sortBy && r.set("sortBy", n.sortBy), n.sortDir && r.set("sortDir", n.sortDir), n.status && r.set("status", n.status), e === "appeals" && r.set("appealId", String(n.appealId));
    const a = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      o = await this.request(a, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== _.OK) throw new b(p(), o.status);
    const s = await o.json();
    return Array.isArray(s == null ? void 0 : s.tickets) ? s.tickets : []
  }
  async getUserAppeals(n) {
    const e = new URLSearchParams;
    e.set("userId", String(n.userId)), e.set("kind", n.kind), n.page !== void 0 && e.set("page", String(n.page)), n.pageSize !== void 0 && e.set("pageSize", String(n.pageSize)), n.sortBy && e.set("sortBy", n.sortBy), n.sortDir && e.set("sortDir", n.sortDir);
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.appeals) ? a.appeals : []
  }
  async getModerationTranslate(n, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: n
        })
      });
    if (a.status !== _.OK) throw new b(p(), a.status);
    const o = await a.json();
    return o == null ? void 0 : o.translation
  }
  mapTicketsToReportRows(n, e) {
    var a, o, s, i, c;
    const r = [];
    for (const l of n) {
      const u = l.status ?? "open";
      if (e === "received") {
        for (const m of l.reports) r.push({
          id: String(m.id),
          ticketId: String(l.id),
          createdAt: m.createdAt ?? l.createdAt,
          byUser: {
            id: Number(m.reportedBy),
            name: String(m.reportedByName ?? m.reportedBy),
            picture: m.reportedByPicture ?? null
          },
          reason: String(m.reason),
          status: u
        });
        continue
      }
      if (e === "sent") {
        for (const m of l.reports) r.push({
          id: String(m.id),
          ticketId: String(l.id),
          createdAt: m.createdAt ?? l.createdAt,
          toUser: {
            id: Number(l.reportedUser.id),
            name: String(l.reportedUser.name),
            picture: l.reportedUser.picture ?? null
          },
          reason: String(m.reason),
          status: u
        });
        continue
      }
      r.push({
        id: String(l.id),
        ticketId: String(l.id),
        createdAt: l.createdAt,
        handledBy: l.status && l.status !== "open" ? {
          id: ((a = l.handledBy) == null ? void 0 : a.id) ?? 0,
          name: ((o = l.handledBy) == null ? void 0 : o.name) ?? "Moderator",
          picture: ((s = l.handledBy) == null ? void 0 : s.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((c = (i = l.reports) == null ? void 0 : i[0]) == null ? void 0 : c.reason) ?? "other"),
        status: u
      })
    }
    return r.sort((l, u) => new Date(u.createdAt).getTime() - new Date(l.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(n) {
    const e = new URLSearchParams({
        id: String(n)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== _.OK) throw new b(p(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const n = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== _.NO_CONTENT) throw new b(p(), n.status)
  }
  async deleteSessions() {
    const n = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status)
  }
  async deleteAllUserSessions(n) {
    const e = await this.request(`/staff/dashboard/users/${n}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async banUsers(n, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        reason: e,
        notes: r
      })
    });
    if (a.status !== _.OK) throw new b(p(), a.status)
  }
  async timeoutUsers(n, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        reason: e,
        notes: r
      })
    });
    if (a.status !== _.OK) throw new b(p(), a.status)
  }
  async incrementUsersDroplets(n, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: n,
        delta: e,
        notes: r
      })
    });
    if (a.status !== _.OK) throw new b(p(), a.status)
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
    if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async getAuditLogs(n) {
    const e = new URLSearchParams;
    n.actorUserId !== void 0 && e.set("actorUserId", String(n.actorUserId)), n.targetUserId !== void 0 && e.set("targetUserId", String(n.targetUserId)), n.action && e.set("action", n.action), n.sortKey && e.set("sortKey", n.sortKey), n.sortDir && e.set("sortDir", n.sortDir), e.set("limit", String(n.limit)), e.set("offset", String(n.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
    return r.json()
  }
  async postUsersSuspend(n, e, r) {
    let a;
    switch (e) {
      case "dashboard":
        a = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        a = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        a = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(a, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(n)
      })).status !== _.OK) throw new Error(p())
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
    if (r.status !== _.OK) throw new b(p(), r.status);
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
    if (r.status !== _.OK) throw new b(p(), r.status);
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
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async postReportAllianceName(n) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: n
      })
    });
    if (e.status !== _.OK) throw new b(p(), e.status);
    return e.json()
  }
  async submitBanAppeal(n) {
    const e = JSON.stringify({
        message: n
      }),
      r = await yt.getHeaders(e),
      a = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (a.status === _.FORBIDDEN) {
      const o = await a.json();
      if ((o == null ? void 0 : o.error) === "challenge-required" && o.tier) {
        if (await gr(o.tier)) return this.submitBanAppeal(n);
        throw new b(Tn(), a.status)
      }
    }
    if (a.status !== _.OK && a.status !== _.ALREADY_REPORTED) throw new b(p(), a.status);
    return a.status
  }
  async getOpenAppeals() {
    const n = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
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
    if (r.status !== _.OK) throw new b(p(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const n = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const n = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
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
    if (n.status !== _.OK) throw new b(p(), n.status);
    return await n.json()
  }
  async getNotificationCount() {
    const n = await this.request("/notification/count", {
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    const {
      count: e
    } = await n.json();
    return e
  }
  async getNotificationPage(n) {
    const r = `/notification/page${n!==void 0?`?cursor=${encodeURIComponent(n)}`:""}`,
      a = await this.request(r, {
        credentials: "include"
      });
    if (a.status !== _.OK) throw new b(p(), a.status);
    return a.json()
  }
  async postNotificationMarkRead(n) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: n
      })
    });
    if (e.status !== _.OK) throw new b(p(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const n = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async getAnticheatStats(n, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${n}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
    return r.json()
  }
  async getAnticheatSignals(n, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${n}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(n, e, r) {
    const a = await this.request(`/staff/dashboard/anticheat/user/${n}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== _.OK) throw new b(p(), a.status);
    return a.json()
  }
  async getPendingAppealsCount() {
    const n = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const n = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    const e = await n.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const n = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async postEquipUserFrame(n) {
    const e = await this.request(`/me/frames/equip/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async getUserBadges() {
    const n = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async postEquipUserBadge(n) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
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
    if (!r.ok) throw r.status === 500 ? new b(p(), r.status) : new b(xm(), r.status);
    return r.json()
  }
  validWaybackInput(n) {
    const e = Number.isFinite(n.timestamp) && Number.isInteger(n.timestamp) && n.timestamp >= 0 && n.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(n.season) && Number.isInteger(n.season) && n.season >= 0 && n.season < pE.length,
      a = Number.isFinite(n.limit) && Number.isInteger(n.limit) && n.limit > 0 && n.limit <= hE.tools.wayback.limit,
      o = Number.isFinite(n.tileX) && Number.isFinite(n.tileY) && Number.isInteger(n.tileX) && Number.isInteger(n.tileY) && n.tileX >= 0 && n.tileY >= 0,
      s = n.cursorTs !== void 0,
      i = n.cursorUserId !== void 0,
      c = n.cursorAllianceId !== void 0,
      l = n.cursorPixelsCount !== void 0,
      u = s || i || c || l,
      m = s && i && c && l;
    let f = !0;
    return u && (f = m && Number.isFinite(n.cursorTs) && Number.isInteger(n.cursorTs) && n.cursorTs >= 0 && n.cursorTs <= n.timestamp && Number.isFinite(n.cursorUserId) && Number.isInteger(n.cursorUserId) && n.cursorUserId >= 0 && Number.isFinite(n.cursorAllianceId) && Number.isInteger(n.cursorAllianceId) && n.cursorAllianceId >= 0 && Number.isFinite(n.cursorPixelsCount) && Number.isInteger(n.cursorPixelsCount) && n.cursorPixelsCount >= 0), !(!r || !a || !o || !e || !f)
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
      a = e.toString(),
      o = await this.request(a.length > 0 ? `${r}?${a}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status === _.FORBIDDEN) throw new Error("Access denied");
    if (o.status !== _.OK) throw new Error("Failed to fetch wayback events");
    return o.json()
  }
  async getStoreFrames() {
    const n = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return n.json()
  }
  async postBuyUserFrame(n) {
    const e = await this.request(`/store/frames/buy/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === _.NOT_FOUND) throw new Error(br());
    if (e.status === _.FORBIDDEN) throw new Error(Or());
    if (e.status === _.CONFLICT) throw new Error(Sr());
    if (e.status !== _.OK) throw new Error(p())
  }
  async postEquipCosmetics(n) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async getStoreNameCosmetics() {
    const n = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return await n.json()
  }
  async postBuyCosmetic(n) {
    const e = await this.request(`/store/name/buy/${n}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async getMyNameCosmetics() {
    const n = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== _.OK) throw new b(p(), n.status);
    return await n.json()
  }
  async getTicketsKpi(n) {
    const e = new URLSearchParams;
    e.set("start", n.startIso), e.set("end", n.endIso), n.compare && e.set("compare", "1"), n.userId != null && e.set("userId", String(n.userId)), n.allianceId != null && e.set("allianceId", String(n.allianceId)), n.reason != null && e.set("reason", n.reason), n.punishment != null && e.set("punishment", n.punishment), n.granularity != null && e.set("granularity", n.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== _.OK) throw new b(p(), r.status);
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
    if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async postCreateFont(n) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async postCreateStyle(n) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(n)
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
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
    if (r.status !== _.OK) throw new b(p(), r.status);
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
    if (r.status !== _.OK) throw new b(p(), r.status);
    return r.json()
  }
  async deleteR2Image(n) {
    const e = await this.request(`/staff/store-manager/images/${n}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== _.OK) throw new b(p(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === _.OK
  }
}
xt = new WeakMap, Bt = new WeakMap;

function wE(t) {
  var f, d;
  if (!t.length) throw new Error("Auto painter request does not contain any pixels.");
  const n = t[0].season;
  for (const h of t)
    if (h.season !== n) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = Cn.seasons) == null ? void 0 : f[n];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    o = Number.POSITIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY;
  const c = t.map(h => {
      const g = Math.round(h.tile[0] * r + h.pixel[0]),
        y = Math.round(h.tile[1] * r + h.pixel[1]);
      return g < a && (a = g), y < o && (o = y), g > s && (s = g), y > i && (i = y), {
        x: g,
        y,
        colorIdx: h.colorIdx
      }
    }),
    l = s - a + 1,
    u = i - o + 1;
  if (!Number.isFinite(l) || !Number.isFinite(u) || l <= 0 || u <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const m = new Uint8ClampedArray(l * u * 4);
  for (const {
      x: h,
      y: g,
      colorIdx: y
    }
    of c) {
    const M = (d = Cn.colors) == null ? void 0 : d[y];
    if (!M) throw new Error(`Unknown palette color index: ${y}`);
    const v = h - a,
      A = ((g - o) * l + v) * 4,
      [I, T, w] = M.rgb;
    m[A] = I, m[A + 1] = T, m[A + 2] = w, m[A + 3] = y === 0 ? 1 : 255
  }
  return {
    data: m,
    width: l,
    height: u,
    offsetX: a,
    offsetY: o,
    season: n
  }
}
async function bE(t) {
  const n = vE(t.width, t.height),
    e = n.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(t.width, t.height);
  return r.data.set(t.data), e.putImageData(r, 0, 0), "convertToBlob" in n ? n.convertToBlob({
    type: "image/png"
  }) : new Promise((a, o) => {
    n.toBlob(s => {
      if (!s) {
        o(new Error("Failed to encode auto painter bitmap."));
        return
      }
      a(s)
    }, "image/png")
  })
}

function vE(t, n) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(t, n);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = t, e.height = n, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ze = new yE(Hn);
typeof window < "u" && ya(() => {
  let t = ze.online;
  wa(() => {
    const n = ze.online;
    n && !t && window.dispatchEvent(new CustomEvent("wplace:online")), t = n
  })
});
const h2 = t => new URL(t, Hn).toString();

function la(t, n) {
  if (!(t != null && t.length)) return !1;
  for (const e of t)
    if (e === n) return !0;
  return !1
}

function EE(t, n) {
  for (const e of n)
    if (la(t, e)) return !0;
  return !1
}

function g2(...t) {
  return t.filter(Boolean).join(" ")
}
const AE = typeof document < "u";
let Mr = 0;
var Ht, Ft, Ut;
class NE {
  constructor() {
    Z(this, Ht, ge(an([])));
    Z(this, Ft, ge(an([])));
    Z(this, Ut, n => {
      const e = this.toasts.findIndex(r => r.id === n);
      return e === -1 ? null : e
    });
    K(this, "addToast", n => {
      AE && this.toasts.unshift(n)
    });
    K(this, "updateToast", ({
      id: n,
      data: e,
      type: r,
      message: a
    }) => {
      const o = this.toasts.findIndex(i => i.id === n),
        s = this.toasts[o];
      this.toasts[o] = {
        ...s,
        ...e,
        id: n,
        title: a,
        type: r,
        updated: !0
      }
    });
    K(this, "create", n => {
      var i;
      const {
        message: e,
        ...r
      } = n, a = typeof(n == null ? void 0 : n.id) == "number" || n.id && ((i = n.id) == null ? void 0 : i.length) > 0 ? n.id : Mr++, o = n.dismissable === void 0 ? !0 : n.dismissable, s = n.type === void 0 ? "default" : n.type;
      return Xn(() => {
        this.toasts.find(l => l.id === a) ? this.updateToast({
          id: a,
          data: n,
          type: s,
          message: e,
          dismissable: o
        }) : this.addToast({
          ...r,
          id: a,
          title: e,
          dismissable: o,
          type: s
        })
      }), a
    });
    K(this, "dismiss", n => (Xn(() => {
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
    K(this, "remove", n => {
      if (n === void 0) {
        this.toasts = [];
        return
      }
      const e = C(this, Ut).call(this, n);
      if (e !== null) return this.toasts.splice(e, 1), n
    });
    K(this, "message", (n, e) => this.create({
      ...e,
      type: "default",
      message: n
    }));
    K(this, "error", (n, e) => this.create({
      ...e,
      type: "error",
      message: n
    }));
    K(this, "success", (n, e) => this.create({
      ...e,
      type: "success",
      message: n
    }));
    K(this, "info", (n, e) => this.create({
      ...e,
      type: "info",
      message: n
    }));
    K(this, "warning", (n, e) => this.create({
      ...e,
      type: "warning",
      message: n
    }));
    K(this, "loading", (n, e) => this.create({
      ...e,
      type: "loading",
      message: n
    }));
    K(this, "promise", (n, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: n,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const a = n instanceof Promise ? n : n();
      let o = r !== void 0;
      return a.then(s => {
        if (typeof s == "object" && s && "ok" in s && typeof s.ok == "boolean" && !s.ok) {
          o = !1;
          const i = TE(s);
          this.create({
            id: r,
            type: "error",
            message: i
          })
        } else if (e.success !== void 0) {
          o = !1;
          const i = typeof e.success == "function" ? e.success(s) : e.success;
          this.create({
            id: r,
            type: "success",
            message: i
          })
        }
      }).catch(s => {
        if (e.error !== void 0) {
          o = !1;
          const i = typeof e.error == "function" ? e.error(s) : e.error;
          this.create({
            id: r,
            type: "error",
            message: i
          })
        }
      }).finally(() => {
        var s;
        o && (this.dismiss(r), r = void 0), (s = e.finally) == null || s.call(e)
      }), r
    });
    K(this, "custom", (n, e) => {
      const r = (e == null ? void 0 : e.id) || Mr++;
      return this.create({
        component: n,
        id: r,
        ...e
      }), r
    });
    K(this, "removeHeight", n => {
      this.heights = this.heights.filter(e => e.toastId !== n)
    });
    K(this, "setHeight", n => {
      const e = C(this, Ut).call(this, n.toastId);
      if (e === null) {
        this.heights.push(n);
        return
      }
      this.heights[e] = n
    });
    K(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return te(C(this, Ht))
  }
  set toasts(n) {
    ae(C(this, Ht), n, !0)
  }
  get heights() {
    return te(C(this, Ft))
  }
  set heights(n) {
    ae(C(this, Ft), n, !0)
  }
}
Ht = new WeakMap, Ft = new WeakMap, Ut = new WeakMap;

function TE(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const Ie = new NE;

function SE(t, n) {
  return Ie.create({
    message: t,
    ...n
  })
}
var dn;
class y2 {
  constructor() {
    Z(this, dn, pt(() => Ie.toasts.filter(n => !n.dismiss)))
  }
  get toasts() {
    return te(C(this, dn))
  }
}
dn = new WeakMap;
const OE = SE,
  RE = Object.assign(OE, {
    success: Ie.success,
    info: Ie.info,
    warning: Ie.warning,
    error: Ie.error,
    custom: Ie.custom,
    message: Ie.message,
    promise: Ie.promise,
    dismiss: Ie.dismiss,
    loading: Ie.loading,
    getActiveToasts: () => Ie.toasts.filter(t => !t.dismiss)
  });
var jt, Gt, Vt, Wt, zt, $t, qt, Kt;
class IE {
  constructor() {
    K(this, "channel", new BroadcastChannel("user-channel"));
    Z(this, jt, ge());
    Z(this, Gt, ge(!0));
    Z(this, Vt, ge());
    Z(this, Wt, ge(Date.now()));
    Z(this, zt, pt(() => {
      if (!this.data) return;
      const n = this.data.charges;
      if (n.count > n.max) return n.count;
      const e = n.count + Math.max((aa.now - this.lastFetch) / n.cooldownMs, 0);
      return Math.min(n.max, e)
    }));
    Z(this, $t, pt(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    Z(this, qt, pt(() => {
      var n;
      return new Zo(Fr(((n = this.data) == null ? void 0 : n.flagsBitmap) ?? "AA=="))
    }));
    Z(this, Kt, pt(() => {
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
    return te(C(this, jt))
  }
  set data(n) {
    ae(C(this, jt), n, !0)
  }
  get loading() {
    return te(C(this, Gt))
  }
  set loading(n) {
    ae(C(this, Gt), n, !0)
  }
  get notificationCount() {
    return te(C(this, Vt))
  }
  set notificationCount(n) {
    ae(C(this, Vt), n, !0)
  }
  get lastFetch() {
    return te(C(this, Wt))
  }
  set lastFetch(n) {
    ae(C(this, Wt), n)
  }
  get charges() {
    return te(C(this, zt))
  }
  set charges(n) {
    ae(C(this, zt), n)
  }
  get cooldown() {
    return te(C(this, $t))
  }
  set cooldown(n) {
    ae(C(this, $t), n)
  }
  get flagsBitmap() {
    return te(C(this, qt))
  }
  set flagsBitmap(n) {
    ae(C(this, qt), n)
  }
  get timeoutUntil() {
    return te(C(this, Kt))
  }
  set timeoutUntil(n) {
    ae(C(this, Kt), n)
  }
  async refresh() {
    var n, e;
    try {
      return this.loading = !0, this.data = await ze.me(), this.lastFetch = Date.now(), (n = this.channel) == null || n.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ze.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (Ja("userId", {
        id: this.data.id
      }), yt.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), RE.warning(jg(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var n;
    await ze.logout(), (n = this.channel) == null || n.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(n) {
    var r;
    return n < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << n - 32) !== 0
  }
  hasPermission(n) {
    var e;
    return la((e = this.data) == null ? void 0 : e.permissions, n)
  }
  hasAnyPermission(n) {
    var e;
    return EE((e = this.data) == null ? void 0 : e.permissions, n)
  }
}
jt = new WeakMap, Gt = new WeakMap, Vt = new WeakMap, Wt = new WeakMap, zt = new WeakMap, $t = new WeakMap, qt = new WeakMap, Kt = new WeakMap;
const ut = new IE;
let X;
const Be = new Array(128).fill(void 0);
Be.push(void 0, null, !0, !1);

function z(t) {
  return Be[t]
}
let Et = Be.length;

function Q(t) {
  Et === Be.length && Be.push(Be.length + 1);
  const n = Et;
  return Et = Be[n], Be[n] = t, n
}

function je(t, n) {
  try {
    return t.apply(this, n)
  } catch (e) {
    X.__wbindgen_export_0(Q(e))
  }
}

function Je(t) {
  return t == null
}
const da = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && da.decode();
let gt = null;

function tn() {
  return (gt === null || gt.byteLength === 0) && (gt = new Uint8Array(X.memory.buffer)), gt
}

function nn(t, n) {
  return t = t >>> 0, da.decode(tn().subarray(t, t + n))
}

function DE(t) {
  t < 132 || (Be[t] = Et, Et = t)
}

function Lr(t) {
  const n = z(t);
  return DE(t), n
}
let Ze = null;

function un() {
  return (Ze === null || Ze.buffer.detached === !0 || Ze.buffer.detached === void 0 && Ze.buffer !== X.memory.buffer) && (Ze = new DataView(X.memory.buffer)), Ze
}
let nt = 0;
const rn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  kE = typeof rn.encodeInto == "function" ? function(t, n) {
    return rn.encodeInto(t, n)
  } : function(t, n) {
    const e = rn.encode(t);
    return n.set(e), {
      read: t.length,
      written: e.length
    }
  };

function Xt(t, n, e) {
  if (e === void 0) {
    const i = rn.encode(t),
      c = n(i.length, 1) >>> 0;
    return tn().subarray(c, c + i.length).set(i), nt = i.length, c
  }
  let r = t.length,
    a = n(r, 1) >>> 0;
  const o = tn();
  let s = 0;
  for (; s < r; s++) {
    const i = t.charCodeAt(s);
    if (i > 127) break;
    o[a + s] = i
  }
  if (s !== r) {
    s !== 0 && (t = t.slice(s)), a = e(a, r, r = s + t.length * 3, 1) >>> 0;
    const i = tn().subarray(a + s, a + r),
      c = kE(t, i);
    s += c.written, a = e(a, r, s, 1) >>> 0
  }
  return nt = s, a
}

function ME(t) {
  const n = Xt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = nt;
  X.set_fingerprint_v2(n, e)
}

function LE(t) {
  let n, e;
  try {
    const o = X.__wbindgen_add_to_stack_pointer(-16),
      s = Xt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
      i = nt;
    X.get_pawtected_endpoint_payload(o, s, i);
    var r = un().getInt32(o + 0, !0),
      a = un().getInt32(o + 4, !0);
    return n = r, e = a, nn(r, a)
  } finally {
    X.__wbindgen_add_to_stack_pointer(16), X.__wbindgen_export_3(n, e, 1)
  }
}

function PE(t) {
  X.set_automated_browser(t)
}

function Sn(t) {
  X.set_user_id(t)
}

function CE(t) {
  X.set_automated_clicks(t)
}

function xE(t) {
  const n = Xt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = nt;
  X.set_detected_bot(n, e)
}

function BE(t) {
  const n = Xt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = nt;
  X.request_url(n, e)
}

function HE(t) {
  X.set_cf_likely_automated(t)
}

function FE(t) {
  const n = Xt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = nt;
  X.set_fingerprint(n, e)
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

function jE() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_buffer_609cc3eee51ed158 = function(n) {
    const e = z(n).buffer;
    return Q(e)
  }, t.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return je(function(n, e) {
      const r = z(n).call(z(e));
      return Q(r)
    }, arguments)
  }, t.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return je(function(n, e, r) {
      const a = z(n).call(z(e), z(r));
      return Q(a)
    }, arguments)
  }, t.wbg.__wbg_crypto_574e78ad8b13b65f = function(n) {
    const e = z(n).crypto;
    return Q(e)
  }, t.wbg.__wbg_document_d249400bd7bd996d = function(n) {
    const e = z(n).document;
    return Je(e) ? 0 : Q(e)
  }, t.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return je(function(n, e) {
      z(n).getRandomValues(z(e))
    }, arguments)
  }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return je(function(n, e) {
      const r = Reflect.get(z(n), z(e));
      return Q(r)
    }, arguments)
  }, t.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return je(function(n) {
      return z(n).hasFocus()
    }, arguments)
  }, t.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return je(function(n) {
      const e = z(n).innerWidth;
      return Q(e)
    }, arguments)
  }, t.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(n) {
    let e;
    try {
      e = z(n) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, t.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(n) {
    const e = z(n).msCrypto;
    return Q(e)
  }, t.wbg.__wbg_navigator_1577371c070c8947 = function(n) {
    const e = z(n).navigator;
    return Q(e)
  }, t.wbg.__wbg_new_a12002a7f91c75be = function(n) {
    const e = new Uint8Array(z(n));
    return Q(e)
  }, t.wbg.__wbg_newnoargs_105ed471475aaf50 = function(n, e) {
    const r = new Function(nn(n, e));
    return Q(r)
  }, t.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(n, e, r) {
    const a = new Uint8Array(z(n), e >>> 0, r >>> 0);
    return Q(a)
  }, t.wbg.__wbg_newwithlength_a381634e90c276d4 = function(n) {
    const e = new Uint8Array(n >>> 0);
    return Q(e)
  }, t.wbg.__wbg_node_905d3e251edff8a2 = function(n) {
    const e = z(n).node;
    return Q(e)
  }, t.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, t.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(n) {
    const e = z(n).process;
    return Q(e)
  }, t.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return je(function(n, e) {
      z(n).randomFillSync(Lr(e))
    }, arguments)
  }, t.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return je(function() {
      const n = module.require;
      return Q(n)
    }, arguments)
  }, t.wbg.__wbg_set_65595bdd868b3009 = function(n, e, r) {
    z(n).set(z(e), r >>> 0)
  }, t.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const n = typeof global > "u" ? null : global;
    return Je(n) ? 0 : Q(n)
  }, t.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const n = typeof globalThis > "u" ? null : globalThis;
    return Je(n) ? 0 : Q(n)
  }, t.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const n = typeof self > "u" ? null : self;
    return Je(n) ? 0 : Q(n)
  }, t.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const n = typeof window > "u" ? null : window;
    return Je(n) ? 0 : Q(n)
  }, t.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(n, e, r) {
    const a = z(n).subarray(e >>> 0, r >>> 0);
    return Q(a)
  }, t.wbg.__wbg_versions_c01dfd4722a88165 = function(n) {
    const e = z(n).versions;
    return Q(e)
  }, t.wbg.__wbindgen_boolean_get = function(n) {
    const e = z(n);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, t.wbg.__wbindgen_is_function = function(n) {
    return typeof z(n) == "function"
  }, t.wbg.__wbindgen_is_null = function(n) {
    return z(n) === null
  }, t.wbg.__wbindgen_is_object = function(n) {
    const e = z(n);
    return typeof e == "object" && e !== null
  }, t.wbg.__wbindgen_is_string = function(n) {
    return typeof z(n) == "string"
  }, t.wbg.__wbindgen_is_undefined = function(n) {
    return z(n) === void 0
  }, t.wbg.__wbindgen_memory = function() {
    const n = X.memory;
    return Q(n)
  }, t.wbg.__wbindgen_number_get = function(n, e) {
    const r = z(e),
      a = typeof r == "number" ? r : void 0;
    un().setFloat64(n + 8, Je(a) ? 0 : a, !0), un().setInt32(n + 0, !Je(a), !0)
  }, t.wbg.__wbindgen_object_clone_ref = function(n) {
    const e = z(n);
    return Q(e)
  }, t.wbg.__wbindgen_object_drop_ref = function(n) {
    Lr(n)
  }, t.wbg.__wbindgen_string_new = function(n, e) {
    const r = nn(n, e);
    return Q(r)
  }, t.wbg.__wbindgen_throw = function(n, e) {
    throw new Error(nn(n, e))
  }, t
}

function GE(t, n) {
  return X = t.exports, _a.__wbindgen_wasm_module = n, Ze = null, gt = null, X
}
async function _a(t) {
  if (X !== void 0) return X;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? {
    module_or_path: t
  } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const n = jE();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const {
    instance: e,
    module: r
  } = await UE(await t, n);
  return GE(e, r)
}
class VE {
  constructor() {
    K(this, "interval");
    K(this, "storagesEmpty", !1);
    K(this, "storages", [new ln, new xn, new Bn, new zE]);
    K(this, "pawtectLoaded");
    K(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!ut.data || this.storagesEmpty || localStorage.getItem(ln.KEY))) {
        for (const e of this.storages) {
          const r = e.get();
          if (r) {
            for (const a of this.storages) a.set(r);
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
    const e = We.day;
    for (const a of this.storages) {
      const o = a.get();
      if (o && !(o.timestamp + e < Date.now()) && o.userId !== n) return !0
    }
    const r = {
      userId: n,
      timestamp: Date.now()
    };
    for (const a of this.storages) a.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var n;
      try {
        await _a(Za), (n = ut.data) != null && n.id && Sn(ut.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: WE((r, a) => {
            let o = null;
            return r instanceof Request ? o = r.url : r instanceof URL ? o = r.href : typeof r == "string" && (o = r), o !== null && !o.startsWith("/") && BE(o), e.call(window, r, a)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Ya(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(n) {
    await this.loadPawtect(), Sn(n)
  }
  async setCfLikelyAutomated(n) {
    await this.loadPawtect(), HE(n)
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
    if (!await this.loadPawtect()) throw new Error(Gw());
    const r = navigator.webdriver,
      [a, o, s] = await Promise.all([On(), Ds(), Yo().catch(i => (console.error(i), {
        bot: !1
      }))]);
    return Sn(ut.data.id), FE(a), ME(o), PE(r), CE(aa.automatedClicks), s.bot && xE(s.botKind ?? "unknown"), LE(n)
  }
}

function WE(t) {
  return t.bind().bind()
}
const Ge = class Ge {
  static codec(n) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(n.length);
    for (let a = 0; a < n.length; a++) r[a] = n[a] ^ e[a % e.length];
    return r
  }
  get() {
    try {
      const n = localStorage.getItem(Ge.KEY);
      if (!n) return;
      const e = Uint8Array.from(atob(n), a => a.charCodeAt(0)),
        r = new TextDecoder().decode(Ge.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(n) {
    const e = new TextEncoder().encode(JSON.stringify(n)),
      r = Ge.codec(e);
    localStorage.setItem(Ge.KEY, btoa(String.fromCharCode(...r)))
  }
};
K(Ge, "KEY", "ui_layout_v3"), K(Ge, "XOR_KEY", "wplace-prefs");
let ln = Ge;
const Ve = class Ve {
  get() {
    try {
      const n = sessionStorage.getItem(Ve.KEY);
      if (!n) return;
      let e = "";
      for (let r = 0; r < n.length; r += 4) {
        const a = parseInt(n.slice(r, r + 4), 16);
        e += String.fromCharCode(a - Ve.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(n) {
    const e = JSON.stringify(n);
    let r = "";
    for (const a of e) {
      const o = a.charCodeAt(0) + Ve.SHIFT & 65535;
      r += o.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(Ve.KEY, r)
  }
};
K(Ve, "KEY", "nav.cursor"), K(Ve, "SHIFT", 13);
let xn = Ve;
const Qe = class Qe {
  get() {
    const n = document.cookie.match(new RegExp("(?:^|; )" + Qe.KEY + "=([^;]*)"));
    if (n) try {
      const [e, r] = decodeURIComponent(n[1]).split("."), a = parseInt(e, 36), o = parseInt(r, 36);
      return !Number.isFinite(a) || !Number.isFinite(o) ? void 0 : {
        userId: a,
        timestamp: o
      }
    } catch {
      return
    }
  }
  set(n) {
    const e = `${n.userId.toString(36)}.${n.timestamp.toString(36)}`;
    document.cookie = `${Qe.KEY}=${encodeURIComponent(e)};path=/;max-age=${Qe.MAX_AGE};SameSite=Lax`
  }
};
K(Qe, "KEY", "_pf_uid"), K(Qe, "MAX_AGE", 3600 * 24 * 365);
let Bn = Qe;
class zE {
  constructor() {
    K(this, "packed")
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
const yt = new VE;
export {
  c2 as $, Ds as A, hE as B, ua as C, f_ as D, gr as E, Tn as F, YE as G, Am as H, Jf as I, Rd as J, lu as K, pg as L, Tf as M, JE as N, ZE as O, _2 as P, m2 as Q, a2 as R, f2 as S, We as T, Gw as U, zy as V, va as W, h2 as X, u2 as Y, i2 as Z, l2 as _, ze as a, p2 as a0, d2 as a1, xm as a2, Cn as b, p as c, o2 as d, pd as e, Jc as f, _f as g, Hf as h, lm as i, aa as j, $v as k, Ie as l, ng as m, g2 as n, y2 as o, r2 as p, n2 as q, Se as r, s2 as s, RE as t, ut as u, e2 as v, QE as w, t2 as x, yt as y, Jo as z
};