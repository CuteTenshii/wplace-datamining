var Ao = Object.defineProperty;
var ir = t => {
  throw TypeError(t)
};
var Oo = (t, n, e) => n in t ? Ao(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[n] = e;
var q = (t, n, e) => Oo(t, typeof n != "symbol" ? n + "" : n, e),
  Ro = (t, n, e) => n.has(t) || ir("Cannot " + e);
var L = (t, n, e) => (Ro(t, n, "read from private field"), e ? e.call(t) : n.get(t)),
  J = (t, n, e) => n.has(t) ? ir("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
import {
  f as Do,
  h as Io,
  P as Bn,
  g as On
} from "./yew7vgrr.js";
import {
  e as me,
  i as te,
  h as oe,
  g as rn,
  bM as No,
  I as Co,
  L as sr,
  u as mt
} from "./Dbe4PVAU.js";
import {
  g as D
} from "./BhCkpOlh.js";
const ko = !0,
  xo = ko,
  ut = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Ue = globalThis,
  yt = "10.40.0";

function Un() {
  return Hn(Ue), Ue
}

function Hn(t) {
  const n = t.__SENTRY__ = t.__SENTRY__ || {};
  return n.version = n.version || yt, n[yt] = n[yt] || {}
}

function Fn(t, n, e = Ue) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    o = r[yt] = r[yt] || {};
  return o[t] || (o[t] = n())
}
const Po = "Sentry Logger ",
  cr = {};

function Lo(t) {
  if (!("console" in Ue)) return t();
  const n = Ue.console,
    e = {},
    r = Object.keys(cr);
  r.forEach(o => {
    const a = cr[o];
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

function Mo() {
  Gn().enabled = !0
}

function Bo() {
  Gn().enabled = !1
}

function zr() {
  return Gn().enabled
}

function Uo(...t) {
  jn("log", ...t)
}

function Ho(...t) {
  jn("warn", ...t)
}

function Fo(...t) {
  jn("error", ...t)
}

function jn(t, ...n) {
  ut && zr() && Lo(() => {
    Ue.console[t](`${Po}[${t}]:`, ...n)
  })
}

function Gn() {
  return ut ? Fn("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Jt = {
    enable: Mo,
    disable: Bo,
    isEnabled: zr,
    log: Uo,
    warn: Ho,
    error: Fo
  },
  jo = Object.prototype.toString;

function Go(t, n) {
  return jo.call(t) === `[object ${n}]`
}

function Wo(t) {
  return Go(t, "Object")
}

function Vo(t) {
  return !!(t != null && t.then && typeof t.then == "function")
}

function zo(t, n, e) {
  try {
    Object.defineProperty(t, n, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    ut && Jt.log(`Failed to add non-enumerable property "${n}" to object`, t)
  }
}
let ot;

function dn(t) {
  if (ot !== void 0) return ot ? ot(t) : t();
  const n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = Ue;
  return n in e && typeof e[n] == "function" ? (ot = e[n], ot(t)) : (ot = null, t())
}

function Rn() {
  return dn(() => Math.random())
}

function $o() {
  return dn(() => Date.now())
}

function qo(t, n = 0) {
  return typeof t != "string" || n === 0 || t.length <= n ? t : `${t.slice(0,n)}...`
}

function Ko() {
  const t = Ue;
  return t.crypto || t.msCrypto
}
let gn;

function Xo() {
  return Rn() * 16
}

function wt(t = Ko()) {
  try {
    if (t != null && t.randomUUID) return dn(() => t.randomUUID()).replace(/-/g, "")
  } catch {}
  return gn || (gn = "10000000100040008000" + 1e11), gn.replace(/[018]/g, n => (n ^ (Xo() & 15) >> n / 4).toString(16))
}
const $r = 1e3;

function qr() {
  return $o() / $r
}

function Yo() {
  const {
    performance: t
  } = Ue;
  if (!(t != null && t.now) || !t.timeOrigin) return qr;
  const n = t.timeOrigin;
  return () => (n + dn(() => t.now())) / $r
}
let ur;

function Jo() {
  return (ur ?? (ur = Yo()))()
}

function Qo(t, n = {}) {
  if (n.user && (!t.ipAddress && n.user.ip_address && (t.ipAddress = n.user.ip_address), !t.did && !n.did && (t.did = n.user.id || n.user.email || n.user.username)), t.timestamp = n.timestamp || Jo(), n.abnormal_mechanism && (t.abnormal_mechanism = n.abnormal_mechanism), n.ignoreDuration && (t.ignoreDuration = n.ignoreDuration), n.sid && (t.sid = n.sid.length === 32 ? n.sid : wt()), n.init !== void 0 && (t.init = n.init), !t.did && n.did && (t.did = `${n.did}`), typeof n.started == "number" && (t.started = n.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof n.duration == "number") t.duration = n.duration;
  else {
    const e = t.timestamp - t.started;
    t.duration = e >= 0 ? e : 0
  }
  n.release && (t.release = n.release), n.environment && (t.environment = n.environment), !t.ipAddress && n.ipAddress && (t.ipAddress = n.ipAddress), !t.userAgent && n.userAgent && (t.userAgent = n.userAgent), typeof n.errors == "number" && (t.errors = n.errors), n.status && (t.status = n.status)
}

function Kr(t, n, e = 2) {
  if (!n || typeof n != "object" || e <= 0) return n;
  if (t && Object.keys(n).length === 0) return t;
  const r = {
    ...t
  };
  for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = Kr(r[o], n[o], e - 1));
  return r
}

function lr() {
  return wt()
}
const Dn = "_sentrySpan";

function dr(t, n) {
  n ? zo(t, Dn, n) : delete t[Dn]
}

function _r(t) {
  return t[Dn]
}
const Zo = 100;
class et {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: lr(),
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
    }, n._client = this._client, n._lastEventId = this._lastEventId, n._conversationId = this._conversationId, dr(n, _r(this)), n
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
    }, this._session && Qo(this._session, {
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
      r = e instanceof et ? e.getScopeData() : Wo(e) ? n : void 0,
      {
        tags: o,
        attributes: a,
        extra: s,
        user: i,
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
      ...s
    }, this._contexts = {
      ...this._contexts,
      ...c
    }, i && Object.keys(i).length && (this._user = i), _ && (this._level = _), u.length && (this._fingerprint = u), p && (this._propagationContext = p), f && (this._conversationId = f), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, dr(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: lr(),
      sampleRand: Rn()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(n, e) {
    var a;
    const r = typeof e == "number" ? e : Zo;
    if (r <= 0) return this;
    const o = {
      timestamp: qr(),
      ...n,
      message: n.message ? qo(n.message, 2048) : n.message
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
      span: _r(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(n) {
    return this._sdkProcessingMetadata = Kr(this._sdkProcessingMetadata, n, 2), this
  }
  setPropagationContext(n) {
    return this._propagationContext = n, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(n, e) {
    const r = (e == null ? void 0 : e.event_id) || wt();
    if (!this._client) return ut && Jt.warn("No client configured on scope - will not capture exception!"), r;
    const o = new Error("Sentry syntheticException");
    return this._client.captureException(n, {
      originalException: n,
      syntheticException: o,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(n, e, r) {
    const o = (r == null ? void 0 : r.event_id) || wt();
    if (!this._client) return ut && Jt.warn("No client configured on scope - will not capture message!"), o;
    const a = (r == null ? void 0 : r.syntheticException) ?? new Error(n);
    return this._client.captureMessage(n, e, {
      originalException: n,
      syntheticException: a,
      ...r,
      event_id: o
    }, this), o
  }
  captureEvent(n, e) {
    const r = n.event_id || (e == null ? void 0 : e.event_id) || wt();
    return this._client ? (this._client.captureEvent(n, {
      ...e,
      event_id: r
    }, this), r) : (ut && Jt.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(n => {
      n(this)
    }), this._notifyingListeners = !1)
  }
}

function ea() {
  return Fn("defaultCurrentScope", () => new et)
}

function ta() {
  return Fn("defaultIsolationScope", () => new et)
}
class na {
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
    return Vo(r) ? r.then(o => (this._popScope(), o), o => {
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

function _t() {
  const t = Un(),
    n = Hn(t);
  return n.stack = n.stack || new na(ea(), ta())
}

function ra(t) {
  return _t().withScope(t)
}

function oa(t, n) {
  const e = _t();
  return e.withScope(() => (e.getStackTop().scope = t, n(t)))
}

function fr(t) {
  return _t().withScope(() => t(_t().getIsolationScope()))
}

function aa() {
  return {
    withIsolationScope: fr,
    withScope: ra,
    withSetScope: oa,
    withSetIsolationScope: (t, n) => fr(n),
    getCurrentScope: () => _t().getScope(),
    getIsolationScope: () => _t().getIsolationScope()
  }
}

function Xr(t) {
  const n = Hn(t);
  return n.acs ? n.acs : aa()
}

function ia() {
  const t = Un();
  return Xr(t).getCurrentScope()
}

function sa() {
  const t = Un();
  return Xr(t).getIsolationScope()
}

function ca(t, n) {
  return ia().captureException(t, void 0)
}

function ua(t, n) {
  sa().setContext(t, n)
}
const la = "" + new URL("../assets/pawtect_wasm_bg.Ckfht_86.wasm", import.meta.url).href;
var da = "2.0.0";
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
class Y extends Error {
  constructor(n, e) {
    super(e), this.state = n, this.name = "BotdError", Object.setPrototypeOf(this, Y.prototype)
  }
}

function _a(t, n) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const o in n) {
    const a = n[o],
      s = a(t);
    let i = {
      bot: !1
    };
    typeof s == "string" ? i = {
      bot: !0,
      botKind: s
    } : s && (i = {
      bot: !0,
      botKind: V.Unknown
    }), e[o] = i, i.bot && (r = i)
  }
  return [e, r]
}
async function fa(t) {
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
      a instanceof Y ? n[r] = {
        state: a.state,
        error: `${a.name}: ${a.message}`
      } : n[r] = {
        state: -3,
        error: a instanceof Error ? `${a.name}: ${a.message}` : String(a)
      }
    }
  })), n
}

function pa({
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

function Pe(t, n) {
  return t.indexOf(n) !== -1
}

function ma(t, n) {
  if ("find" in t) return t.find(n);
  for (let e = 0; e < t.length; e++)
    if (n(t[e], e, t)) return t[e]
}

function pr(t) {
  return Object.getOwnPropertyNames(t)
}

function In(t, ...n) {
  for (const e of n)
    if (typeof e == "string") {
      if (Qt(t, e)) return !0
    } else if (ma(t, o => e.test(o)) != null) return !0;
  return !1
}

function lt(t) {
  return t.reduce((n, e) => n + (e ? 1 : 0), 0)
}

function ha({
  documentElementKeys: t
}) {
  if (t.state !== 0) return !1;
  if (In(t.value, "selenium", "webdriver", "driver")) return V.Selenium
}

function ga({
  errorTrace: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return V.PhantomJS
}

function ya({
  evalLength: t,
  browserKind: n,
  browserEngineKind: e
}) {
  if (t.state !== 0 || n.state !== 0 || e.state !== 0) return;
  const r = t.value;
  return e.value === "unknown" ? !1 : r === 37 && !Qt(["webkit", "gecko"], e.value) || r === 39 && !Qt(["internet_explorer"], n.value) || r === 33 && !Qt(["chromium"], e.value)
}

function wa({
  functionBind: t
}) {
  if (t.state === -2) return V.PhantomJS
}

function ba({
  languages: t
}) {
  if (t.state === 0 && t.value.length === 0) return V.HeadlessChrome
}

function va({
  mimeTypesConsistent: t
}) {
  if (t.state === 0 && !t.value) return V.Unknown
}

function Ea({
  notificationPermissions: t,
  browserKind: n
}) {
  if (n.state !== 0 || n.value !== "chrome") return !1;
  if (t.state === 0 && t.value) return V.HeadlessChrome
}

function Ta({
  pluginsArray: t
}) {
  if (t.state === 0 && !t.value) return V.HeadlessChrome
}

function Sa({
  pluginsLength: t,
  android: n,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(t.state !== 0 || n.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || n.value || r.value !== "chromium") && t.value === 0) return V.HeadlessChrome
}

function Aa({
  process: t
}) {
  var n;
  if (t.state !== 0) return !1;
  if (t.value.type === "renderer" || ((n = t.value.versions) === null || n === void 0 ? void 0 : n.electron) != null) return V.Electron
}

function Oa({
  productSub: t,
  browserKind: n
}) {
  if (t.state !== 0 || n.state !== 0) return !1;
  if ((n.value === "chrome" || n.value === "safari" || n.value === "opera" || n.value === "wechat") && t.value !== "20030107") return V.Unknown
}

function Ra({
  userAgent: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return V.PhantomJS;
  if (/Headless/i.test(t.value)) return V.HeadlessChrome;
  if (/Electron/i.test(t.value)) return V.Electron;
  if (/slimerjs/i.test(t.value)) return V.SlimerJS
}

function Da({
  webDriver: t
}) {
  if (t.state === 0 && t.value) return V.HeadlessChrome
}

function Ia({
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

function Na({
  windowExternal: t
}) {
  if (t.state !== 0) return !1;
  if (/Sequentum/i.test(t.value)) return V.Sequentum
}

function Ca({
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

function ka({
  distinctiveProps: t
}) {
  if (t.state !== 0) return !1;
  const n = t.value;
  let e;
  for (e in n)
    if (n[e]) return e
}
const xa = {
  detectAppVersion: pa,
  detectDocumentAttributes: ha,
  detectErrorTrace: ga,
  detectEvalLengthInconsistency: ya,
  detectFunctionBind: wa,
  detectLanguagesLengthInconsistency: ba,
  detectNotificationPermissions: Ea,
  detectPluginsArray: Ta,
  detectPluginsLengthInconsistency: Sa,
  detectProcess: Aa,
  detectUserAgent: Ra,
  detectWebDriver: Da,
  detectWebGL: Ia,
  detectWindowExternal: Na,
  detectWindowSize: Ca,
  detectMimeTypesConsistent: va,
  detectProductSub: Oa,
  detectDistinctiveProperties: ka
};

function Pa() {
  const t = navigator.appVersion;
  if (t == null) throw new Y(-1, "navigator.appVersion is undefined");
  return t
}

function La() {
  if (document.documentElement === void 0) throw new Y(-1, "document.documentElement is undefined");
  const {
    documentElement: t
  } = document;
  if (typeof t.getAttributeNames != "function") throw new Y(-2, "document.documentElement.getAttributeNames is not a function");
  return t.getAttributeNames()
}

function Ma() {
  try {
    null[0]()
  } catch (t) {
    if (t instanceof Error && t.stack != null) return t.stack.toString()
  }
  throw new Y(-3, "errorTrace signal unexpected behaviour")
}

function Ba() {
  return eval.toString().length
}

function Ua() {
  if (Function.prototype.bind === void 0) throw new Y(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Wn() {
  var t, n;
  const e = window,
    r = navigator;
  return lt(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : lt(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : lt(["buildID" in navigator, "MozAppearance" in ((n = (t = document.documentElement) === null || t === void 0 ? void 0 : t.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Ha() {
  var t;
  const n = (t = navigator.userAgent) === null || t === void 0 ? void 0 : t.toLowerCase();
  return Pe(n, "edg/") ? "edge" : Pe(n, "trident") || Pe(n, "msie") ? "internet_explorer" : Pe(n, "wechat") ? "wechat" : Pe(n, "firefox") ? "firefox" : Pe(n, "opera") || Pe(n, "opr") ? "opera" : Pe(n, "chrome") ? "chrome" : Pe(n, "safari") ? "safari" : "unknown"
}

function Fa() {
  const t = Wn(),
    n = t === "chromium",
    e = t === "gecko",
    r = window,
    o = navigator,
    a = "connection";
  return n ? lt([!("SharedWorker" in r), o[a] && "ontypechange" in o[a], !("sinkId" in new Audio)]) >= 2 : e ? lt(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function ja() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Ga() {
  const t = window;
  return lt([!("MediaSettingsRange" in t), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3
}

function Wa() {
  const t = navigator,
    n = [],
    e = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
  if (e !== void 0 && n.push([e]), Array.isArray(t.languages)) Wn() === "chromium" && Ga() || n.push(t.languages);
  else if (typeof t.languages == "string") {
    const r = t.languages;
    r && n.push(r.split(","))
  }
  return n
}

function Va() {
  if (navigator.mimeTypes === void 0) throw new Y(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: t
  } = navigator;
  let n = Object.getPrototypeOf(t) === MimeTypeArray.prototype;
  for (let e = 0; e < t.length; e++) n && (n = Object.getPrototypeOf(t[e]) === MimeType.prototype);
  return n
}
async function za() {
  if (window.Notification === void 0) throw new Y(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new Y(-1, "navigator.permissions is undefined");
  const {
    permissions: t
  } = navigator;
  if (typeof t.query != "function") throw new Y(-2, "navigator.permissions.query is not a function");
  try {
    const n = await t.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && n.state === "prompt"
  } catch {
    throw new Y(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function $a() {
  if (navigator.plugins === void 0) throw new Y(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new Y(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function qa() {
  if (navigator.plugins === void 0) throw new Y(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new Y(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Ka() {
  const {
    process: t
  } = window, n = "window.process is";
  if (t === void 0) throw new Y(-1, `${n} undefined`);
  if (t && typeof t != "object") throw new Y(-3, `${n} not an object`);
  return t
}

function Xa() {
  const {
    productSub: t
  } = navigator;
  if (t === void 0) throw new Y(-1, "navigator.productSub is undefined");
  return t
}

function Ya() {
  if (navigator.connection === void 0) throw new Y(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new Y(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function Ja() {
  return navigator.userAgent
}

function Qa() {
  if (navigator.webdriver == null) throw new Y(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Za() {
  const t = document.createElement("canvas");
  if (typeof t.getContext != "function") throw new Y(-2, "HTMLCanvasElement.getContext is not a function");
  const n = t.getContext("webgl");
  if (n === null) throw new Y(-4, "WebGLRenderingContext is null");
  if (typeof n.getParameter != "function") throw new Y(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = n.getParameter(n.VENDOR),
    r = n.getParameter(n.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function ei() {
  if (window.external === void 0) throw new Y(-1, "window.external is undefined");
  const {
    external: t
  } = window;
  if (typeof t.toString != "function") throw new Y(-2, "window.external.toString is not a function");
  return t.toString()
}

function ti() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function ni() {
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
    r = pr(window);
  let o = [];
  window.document !== void 0 && (o = pr(window.document));
  for (n in t) {
    const a = t[n];
    if (a !== void 0) {
      const s = a.window === void 0 ? !1 : In(r, ...a.window),
        i = a.document === void 0 || !o.length ? !1 : In(o, ...a.document);
      e[n] = s || i
    }
  }
  return e
}
const ri = {
  android: Fa,
  browserKind: Ha,
  browserEngineKind: Wn,
  documentFocus: ja,
  userAgent: Ja,
  appVersion: Pa,
  rtt: Ya,
  windowSize: ti,
  pluginsLength: qa,
  pluginsArray: $a,
  errorTrace: Ma,
  productSub: Xa,
  windowExternal: ei,
  mimeTypesConsistent: Va,
  evalLength: Ba,
  webGL: Za,
  webDriver: Qa,
  languages: Wa,
  notificationPermissions: za,
  documentElementKeys: La,
  functionBind: Ua,
  process: Ka,
  distinctiveProps: ni
};
class oi {
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
    const [n, e] = _a(this.components, xa);
    return this.detections = n, e
  }
  async collect() {
    return this.components = await fa(ri), this.components
  }
}

function ai() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const t = new XMLHttpRequest;
    t.open("get", `https://m1.openfpcdn.io/botd/v${da}/npm-monitoring`, !0), t.send()
  } catch (t) {
    console.error(t)
  }
}
async function ii({
  monitoring: t = !0
} = {}) {
  t && ai();
  const n = new oi;
  return await n.collect(), n
}
let yn = null;
async function si() {
  return (await ci()).detect()
}

function ci() {
  return yn || (yn = ii({
    monitoring: !1
  })), yn
}

function Yr(t) {
  const n = atob(t),
    e = new Uint8Array(n.length);
  for (let r = 0; r < n.length; r++) e[r] = n.charCodeAt(r);
  return e
}

function Jr(t) {
  if (typeof Buffer < "u") return Buffer.from(t).toString("base64");
  let n = "";
  for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
  return btoa(n)
}
class ui {
  constructor(n) {
    q(this, "bytes");
    this.bytes = n ?? new Uint8Array
  }
  set(n, e) {
    const r = Math.floor(n / 8),
      o = n % 8;
    if (r >= this.bytes.length) {
      const s = new Uint8Array(r + 1),
        i = s.length - this.bytes.length;
      for (let c = 0; c < this.bytes.length; c++) s[c + i] = this.bytes[c];
      this.bytes = s
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

function ZE(t) {
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

function eT(t) {
  if (typeof FileReader > "u") {
    const n = t.type || "application/octet-stream";
    return t.arrayBuffer().then(e => `data:${n};base64,${Jr(new Uint8Array(e))}`)
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

function tT(t) {
  if (!t.startsWith("data:")) throw new Error("Could not parse data URL");
  const n = t.indexOf(",");
  if (n === -1) throw new Error("Could not parse data URL");
  const e = t.slice(5, n),
    r = t.slice(n + 1),
    o = e.indexOf(";base64"),
    a = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const s = Yr(r),
      i = new Uint8Array(s.byteLength);
    return i.set(s), new Blob([i], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}
async function mr(t, n = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(t)),
    r = await crypto.subtle.digest(n, e);
  return Array.from(new Uint8Array(r)).map(a => a.toString(16).padStart(2, "0")).join("")
}
async function S(t, n = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(t)),
    r = await crypto.subtle.digest(n, e);
  return Jr(new Uint8Array(r))
}
const li = () => {
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
          s = typeof a.name == "string" ? a.name : "",
          i = typeof a.message == "string" ? a.message : "",
          c = o(i) ? e ? `${i} [${e}]` : i : void 0,
          _ = r[s] ? s : void 0;
        t.push({
          trustedName: _,
          trustedMessage: c
        })
      }
    }
  },
  Qr = li(),
  {
    captureError: Z
  } = Qr,
  x = (t, n = "") => {
    try {
      return t()
    } catch (e) {
      return n ? Z(e, n) : Z(e)
    }
  },
  Se = t => {
    try {
      return t()
    } catch {
      return
    }
  },
  di = () => ({
    data: Qr.getErrors()
  });
var Ie = (t => (t.WINDOWS = "Windows", t.LINUX = "Linux", t.APPLE = "Apple", t.OTHER = "Other", t))(Ie || {});
const Zr = !globalThis.document && globalThis.WorkerGlobalScope;

function _i() {
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    return (n instanceof Error ? n.message : String(n)).length + (t + "").split(t.name).join("").length
  }
}
const _n = _i(),
  le = _n == 80,
  Et = _n == 58,
  ft = _n == 77,
  hr = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [_n] || null,
  eo = le && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function to() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function fi() {
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
        const s = new OfflineAudioContext(1, 1, 44100).createAnalyser(),
          i = new Float32Array(s.frequencyBinCount);
        return s.getFloatFrequencyData(i), new Set(i).size > 1
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

function no(t, n) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? Ie.WINDOWS : /android|linux|cros/ig.test(t) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? Ie.APPLE : Ie.OTHER;
  if (!n) return [e];
  const r = /win/ig.test(n) ? Ie.WINDOWS : /android|arm|linux/ig.test(n) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? Ie.APPLE : Ie.OTHER;
  return [e, r]
}
const {
  userAgent: pi,
  platform: mi
} = globalThis.navigator || {}, [on, gr] = no(pi, mi), ro = ({
  ua: t,
  os: n,
  isBrave: e
}) => {
  const r = /ipad|iphone|ipod|ios|mac/ig.test(n),
    o = /OPR\//g.test(t),
    a = /Vivaldi/g.test(t),
    s = /DuckDuckGo/g.test(t),
    i = /YaBrowser/g.test(t),
    c = t.match(/(palemoon)\/(\d+)./i),
    _ = t.match(/(edgios|edg|edge|edga)\/(\d+)./i),
    u = _ && /edgios/i.test(_[1]),
    p = t.match(/(crios|chrome)\/(\d+)./i),
    f = t.match(/(fxios|firefox)\/(\d+)./i),
    g = /AppleWebKit/g.test(t) && /Safari/g.test(t) && !f && !p && !_ && t.match(/(version)\/(\d+)\.(\d|\.)+\s(mobile|safari)/i);
  if (p) {
    const h = p[1],
      y = p[2];
    return `${h} ${y}${o?" Opera":a?" Vivaldi":s?" DuckDuckGo":i?" Yandex":_?" Edge":e?" Brave":""}`
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
}, oo = ({
  userAgent: t,
  excludeBuild: n = !0
}) => {
  if (!t) return "unknown";
  const e = /\((khtml|unlike|vizio|like gec|internal dummy|org\.eclipse|openssl|ipv6|via translate|safari|cardamon).+|xt\d+\)/ig,
    r = /\((.+)\)/,
    o = /((android).+)/i,
    a = /^(linux|[a-z]|wv|mobile|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|windows|(rv:|trident|webview|iemobile).+/i,
    s = /build\/.+\s|\sbuild\/.+/i,
    i = /android( |-)\d+/i,
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
    v = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
    A = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
    T = (N, O) => N.filter(w => O.test(w)).length;
  if (t = t.trim().replace(/\s{2,}/, " ").replace(e, ""), r.test(t)) {
    const N = t.match(r);
    if (!N) return "unknown";
    const w = N[0].slice(1, -1).replace(/,/g, ";").split(";").map(R => R.trim());
    if (T(w, o)) return w.map(R => i.test(R) ? i.exec(R)[0].replace("-", " ") : R).filter(R => !a.test(R)).join(" ").replace(n ? s : "", "").trim().replace(/\s{2,}/, " ");
    if (T(w, c)) return w.filter(R => !_.test(R)).join(" ").replace(/\sNT (\d+\.\d+)/, (R, E) => E == "10.0" ? " 10" : E == "6.3" ? " 8.1" : E == "6.2" ? " 8" : E == "6.1" ? " 7" : E == "6.0" ? " Vista" : E == "5.2" ? " XP Pro" : E == "5.1" ? " XP" : E == "5.0" ? " 2000" : E == "4.0" ? R : " " + E).replace(u, "(64-bit)").trim().replace(/\s{2,}/, " ");
    if (T(w, p)) return w.filter(R => !f.test(R)).join(" ").replace(n ? d : "", "").trim().replace(/\s{2,}/, " ");
    if (T(w, g)) return w.filter(R => !h.test(R)).join(" ").trim().replace(/\s{2,}/, " ");
    if (T(w, y)) return w.map(R => {
      if (v.test(R)) {
        const E = v.exec(R)[0],
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
          M = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(E) || [])[0] || "").replace(/\./g, "_"),
          P = /^10/.test(M) ? M : (/^\d{2,}/.exec(M) || [])[0],
          U = P ? I[P] : void 0;
        return U ? `macOS ${U}` : E
      }
      return R
    }).filter(R => !C.test(R)).join(" ").replace(/\slike mac.+/ig, "").trim().replace(/\s{2,}/, " ");
    {
      const R = w.filter(E => A.test(E));
      return R.length ? R.join(" ").trim().replace(/\s{2,}/, " ") : w.join(" ")
    }
  } else return "unknown"
}, ao = t => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(t) || [])[1];
  return le && !!e
}, se = (t = 0) => new Promise(n => setTimeout(n, t)), io = [
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

function hi(t) {
  var r;
  if (!t) return null;
  const n = /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i;
  return /radeon/i.test(t) ? "AMD" : /geforce/i.test(t) ? "NVIDIA" : (((r = n.exec(t)) == null ? void 0 : r[0]) || "other").toLocaleUpperCase()
}
const Be = {},
  ke = {
    AUDIO: !1,
    CANVAS: !1,
    FONTS: !1,
    SCREEN: !1,
    TIME_ZONE: !1,
    WEBGL: !1
  };
try {
  xo && speechSynthesis.getVoices()
} catch {}

function gi() {
  const t = {};
  return {
    getRecords: () => t,
    documentLie: (n, e) => {
      const r = e instanceof Array;
      return t[n] ? r ? t[n] = [...t[n], ...e] : t[n].push(e) : r ? t[n] = e : t[n] = [e]
    }
  }
}
const so = gi(),
  {
    documentLie: ae
  } = so,
  co = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function fn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function yi(t) {
  try {
    if (!le) return t;
    const n = t.document.createElement("div");
    n.setAttribute("id", fn()), n.setAttribute("style", co), n.innerHTML = "<div><iframe></iframe></div>", t.document.body.appendChild(n);
    const e = [...[...n.childNodes][0].childNodes][0];
    if (!e) return null;
    const {
      contentWindow: r
    } = e || {};
    if (!r) return null;
    const o = r.document.createElement("div");
    return o.innerHTML = "<div><iframe></iframe></div>", r.document.body.appendChild(o), [...[...o.childNodes][0].childNodes][0].contentWindow
  } catch (n) {
    return Z(n, "client blocked behemoth iframe"), t
  }
}
const yr = fn(),
  pt = "Reflect" in globalThis;

function wi(t) {
  return t.constructor.name == "TypeError"
}

function be({
  spawnErr: t,
  withStack: n,
  final: e
}) {
  try {
    throw t(), Error()
  } catch (r) {
    return wi(r) ? n ? n(r) : !1 : !0
  } finally {
    e && e()
  }
}

function bi(t) {
  try {
    return t(), !1
  } catch {
    return !0
  }
}

function wr(t) {
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

function at(t, n, e = 1) {
  const r = t;
  return e === 0 ? n.test(r.message) : n.test(r.stack.split(`
`)[e])
}
const vi = /at Function\.toString /,
  Ei = /at Object\.toString/,
  Ti = /at (Function\.)?\[Symbol.hasInstance\]/,
  Si = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  br = /strict mode/;

function vr({
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
    s = r == null ? void 0 : r.name,
    i = Object.getPrototypeOf(n),
    c = self;
  let _ = {
    "failed illegal error": !!r && be({
      spawnErr: () => {
        r.prototype[a]
      }
    }),
    "failed undefined properties": !!r && !!s && /^(screen|navigator)$/i.test(s) && !!(Object.getOwnPropertyDescriptor(c[s.toLowerCase()], a) || pt && Reflect.getOwnPropertyDescriptor(c[s.toLowerCase()], a)),
    "failed call interface error": be({
      spawnErr: () => {
        new n, n.call(e)
      }
    }),
    "failed apply interface error": be({
      spawnErr: () => {
        new n, n.apply(e)
      }
    }),
    "failed new instance error": be({
      spawnErr: () => {
        new n
      }
    }),
    "failed class extends error": !ft && be({
      spawnErr: () => {
        class f extends n {}
      }
    }),
    "failed null conversion error": be({
      spawnErr: () => {
        Object.setPrototypeOf(n, null).toString()
      },
      final: () => {
        Object.setPrototypeOf(n, i)
      }
    }),
    "failed toString": !wr(a)[t.Function.prototype.toString.call(n)] || !wr("toString")[t.Function.prototype.toString.call(n.toString)],
    'failed "prototype" in function': "prototype" in n,
    "failed descriptor": !!(Object.getOwnPropertyDescriptor(n, "arguments") || Reflect.getOwnPropertyDescriptor(n, "arguments") || Object.getOwnPropertyDescriptor(n, "caller") || Reflect.getOwnPropertyDescriptor(n, "caller") || Object.getOwnPropertyDescriptor(n, "prototype") || Reflect.getOwnPropertyDescriptor(n, "prototype") || Object.getOwnPropertyDescriptor(n, "toString") || Reflect.getOwnPropertyDescriptor(n, "toString")),
    "failed own property": !!(n.hasOwnProperty("arguments") || n.hasOwnProperty("caller") || n.hasOwnProperty("prototype") || n.hasOwnProperty("toString")),
    "failed descriptor keys": Object.keys(Object.getOwnPropertyDescriptors(n)).sort().toString() != "length,name",
    "failed own property names": Object.getOwnPropertyNames(n).sort().toString() != "length,name",
    "failed own keys names": pt && Reflect.ownKeys(n).sort().toString() != "length,name",
    "failed object toString error": be({
      spawnErr: () => {
        Object.create(n).toString()
      },
      withStack: f => le && !at(f, vi)
    }) || be({
      spawnErr: () => {
        Object.create(new Proxy(n, {})).toString()
      },
      withStack: f => le && !at(f, Ei)
    }),
    "failed at incompatible proxy error": be({
      spawnErr: () => {
        n.arguments, n.caller
      },
      withStack: f => Et && !at(f, br, 0)
    }),
    "failed at toString incompatible proxy error": be({
      spawnErr: () => {
        n.toString.arguments, n.toString.caller
      },
      withStack: f => Et && !at(f, br, 0)
    }),
    "failed at too much recursion error": be({
      spawnErr: () => {
        Object.setPrototypeOf(n, Object.create(n)).toString()
      },
      final: () => {
        Object.setPrototypeOf(n, i)
      }
    })
  };
  if (a == "toString" || !!o["Function.toString"] || !!o["Permissions.query"]) {
    const f = new Proxy(n, {});
    let d = new Proxy(n, {});
    const g = new Proxy(n, {});
    _ = {
      ..._,
      "failed at too much recursion __proto__ error": !be({
        spawnErr: () => {
          n.__proto__ = proxy, n++
        },
        final: () => {
          Object.setPrototypeOf(n, i)
        }
      }),
      "failed at chain cycle error": !be({
        spawnErr: () => {
          Object.setPrototypeOf(f, Object.create(f)).toString()
        },
        final: () => {
          Object.setPrototypeOf(f, i)
        }
      }),
      "failed at chain cycle __proto__ error": !be({
        spawnErr: () => {
          d.__proto__ = d, d++
        },
        final: () => {
          Object.setPrototypeOf(d, i)
        }
      }),
      "failed at reflect set proto": pt && be({
        spawnErr: () => {
          throw Reflect.setPrototypeOf(n, Object.create(n)), yr in n, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(n, i)
        }
      }),
      "failed at reflect set proto proxy": pt && !be({
        spawnErr: () => {
          Reflect.setPrototypeOf(g, Object.create(g)), yr in g
        },
        final: () => {
          Object.setPrototypeOf(g, i)
        }
      }),
      "failed at instanceof check error": le && (be({
        spawnErr: () => {
          n instanceof n
        },
        withStack: h => !at(h, Ti)
      }) || be({
        spawnErr: () => {
          const h = new Proxy(n, {});
          h instanceof h
        },
        withStack: h => !at(h, Si)
      })),
      "failed at define properties": le && pt && bi(() => {
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

function Ai(t) {
  const n = o => typeof o < "u" && !!o,
    e = {},
    r = [];
  return {
    getProps: () => e,
    getPropsSearched: () => r,
    searchLies: (o, a) => {
      const {
        target: s,
        ignore: i
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
        if (u == "constructor" || !!s && !new Set(s).has(u) || !!i && new Set(i).has(u)) return;
        const f = /\s(.+)\]/,
          d = `${c.name?c.name:f.test(c)?(g=f.exec(c))==null?void 0:g[1]:void 0}.${u}`;
        r.push(d);
        try {
          const h = c.prototype ? c.prototype : c;
          let y;
          try {
            if (typeof h[u] == "function") {
              if (y = vr({
                  scope: t,
                  apiFunction: h[u],
                  proto: h,
                  obj: null,
                  lieProps: e
                }), y.lied) {
                ae(d, y.lieTypes), e[d] = y.lieTypes;
                return
              }
              return
            }
            if (u != "name" && u != "length" && u[0] !== u[0].toUpperCase()) {
              const T = ["failed descriptor.value undefined"];
              ae(d, T), e[d] = T;
              return
            }
          } catch {}
          const v = Object.getOwnPropertyDescriptor(h, u).get;
          if (y = vr({
              scope: t,
              apiFunction: v,
              proto: h,
              obj: c,
              lieProps: e
            }), y.lied) {
            ae(d, y.lieTypes), e[d] = y.lieTypes;
            return
          }
          return
        } catch {
          const y = "failed prototype test execution";
          ae(d, y), e[d] = [y];
          return
        }
      })
    }
  }
}

function Oi() {
  const t = globalThis;
  if (Zr) return {
    iframeWindow: t,
    div: void 0
  };
  try {
    const n = t.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      o = fn();
    r.setAttribute("id", o), e.appendChild(r), r.innerHTML = `<div style="${co}"><iframe></iframe></div>`, document.body.appendChild(e);
    const a = t[n];
    return {
      iframeWindow: yi(a) || t,
      div: r
    }
  } catch (n) {
    return Z(n, "client blocked phantom iframe"), {
      iframeWindow: t,
      div: void 0
    }
  }
}

function Ri(t) {
  const n = Ai(t),
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
    o = n.getPropsSearched();
  return {
    lieDetector: n,
    lieList: Object.keys(r).sort(),
    lieDetail: r,
    lieCount: Object.keys(r).reduce((a, s) => a + r[s].length, 0),
    propsSearched: o
  }
}
const Di = t => t && t.filter(n => !/object toString|toString incompatible proxy/.test(n)).length;
let an, st, uo = {},
  lo = {},
  Er = !1;

function pn() {
  if (Er) return;
  Er = !0;
  try {
    speechSynthesis.getVoices()
  } catch {}
  const {
    iframeWindow: t,
    div: n
  } = Oi() || {};
  an = t, st = n;
  const {
    lieDetector: e,
    lieDetail: r
  } = Ri(an);
  if (!Zr) {
    const o = e.getProps();
    uo = Object.keys(o).reduce((a, s) => (a[s] = Di(o[s]), a), {}), lo = JSON.parse(JSON.stringify(r))
  }
}

function mn() {
  return pn(), an
}

function _o() {
  return pn(), st
}

function Ii() {
  st == null || st.remove(), st = void 0, an = void 0
}

function He() {
  return pn(), uo
}

function Ni() {
  return pn(), lo
}
const Ci = () => {
    const t = so.getRecords(),
      n = Object.keys(t).reduce((e, r) => (e += t[r].length, e), 0);
    return {
      data: t,
      totalLies: n
    }
  },
  ki = t => typeof t == "function",
  xi = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
  Zt = (t, {
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
      s = a.length,
      i = [...a];
    i.forEach((u, p) => {
      const f = p + 1,
        d = i[f];
      if (d !== "_" && u !== "_" && f !== s) {
        const h = u + d;
        xi.test(h) && o.push(h)
      }
    });
    const c = [...!n && o.length < 3 ? [] : o, ...!n && e.length < 4 ? [] : e],
      _ = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return c.filter(u => !_.includes(u))
  };

function fo(t) {
  if (t) return ("" + t).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...n) => `${n[1]}${n[6][0]}${n[6].slice(1).replace(/\d/g,"0")}s`)
}
const Pi = t => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + t).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  po = t => {
    if (!t) return;
    const n = Pi(t),
      e = n.length,
      r = /\s{2,}|^\s|\s$/.test(t),
      o = /^ANGLE/.test(t) && !(/^ANGLE \((.+)\)/.exec(t) || [])[1],
      a = Zt(t, {
        strict: !0
      }).join(", "),
      s = e && !r && !o,
      i = s && !a.length ? "high" : s && a.length ? "moderate" : "low",
      c = i == "high" ? "A" : i == "moderate" ? "C" : "F",
      _ = new Set([r ? "found extra spaces" : void 0, o ? "broken angle structure" : void 0]);
    return _.delete(void 0), {
      parts: n,
      warnings: [..._],
      gibbers: a,
      confidence: i,
      grade: c
    }
  },
  Li = () => {
    const t = [];
    return {
      getBin: () => t,
      sendToTrash: (n, e, r = void 0) => {
        const a = ki(e) ? "proxy behavior detected" : e;
        return t.push({
          name: n,
          value: a
        }), r
      }
    }
  },
  mo = Li(),
  {
    sendToTrash: ue
  } = mo,
  Mi = () => ({
    trashBin: mo.getBin()
  });

function Bi(t) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}

function Ui(t) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}
async function Hi() {
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
        const P = t(() => new Bi);
        if (!n(P, "Worker")) return P == null || P.terminate(), B(null);
        const U = setTimeout(() => {
          P.terminate(), B(null)
        }, 3e3);
        P.onerror = () => {
          clearTimeout(U), P.terminate(), B(null)
        }, P.onmessage = ee => {
          clearTimeout(U), P.terminate(), B(ee.data)
        }
      }),
      r = () => new Promise(B => {
        const P = t(() => new Ui);
        if (!n(P, "SharedWorker")) return P == null || P.port.close(), B(null);
        const U = setTimeout(() => {
          P.port.close(), B(null)
        }, 3e3);
        P.port.start(), P.port.onmessage = ee => {
          clearTimeout(U), P.port.close(), B(ee.data)
        }
      }),
      o = B => (Z(B), null),
      [a, s] = await Promise.all([r().catch(o), e().catch(o)]),
      i = a != null && a.userAgent ? a : s;
    if (!i || !i.userAgent) return;
    i.system = Nn(i.userAgent), i.device = oo({
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
    if (p != navigator.platform && ae("Navigator.platform", g), _ != navigator.userAgent && ae("Navigator.userAgent", g), d && d != navigator.hardwareConcurrency && ae("Navigator.hardwareConcurrency", g), f && f != navigator.deviceMemory && ae("Navigator.deviceMemory", g), i.lies.proto) {
      const {
        proto: B
      } = i.lies;
      Object.keys(B).forEach(U => {
        const ee = `WorkerGlobalScope.${U}`;
        B[U].forEach(de => {
          ae(ee, de)
        })
      })
    }
    const [h, y] = no(_, p);
    h != y && (i.lied = !0, i.lies.os = `${y} platform and ${h} user agent do not match`, ae("WorkerGlobalScope", i.lies.os));
    const C = ro({
        ua: _,
        os: c,
        isBrave: !1
      }),
      v = /safari/i.test(C) || /iphone|ipad/i.test(_) ? "JavaScriptCore" : /firefox/i.test(_) ? "SpiderMonkey" : /chrome/i.test(_) ? "V8" : void 0;
    v != hr && (i.lied = !0, i.lies.engine = `${hr} JS runtime and ${v} user agent do not match`, ae("WorkerGlobalScope", i.lies.engine));
    const A = B => (/\d+/.exec(B) || [])[0],
      T = A(C),
      N = A(u ? u.uaFullVersion ?? "" : ""),
      O = N && T,
      w = N == T;
    O && !w && (i.lied = !0, i.lies.version = `userAgentData version ${N} and user agent version ${T} do not match`, ae("WorkerGlobalScope", i.lies.version));
    const R = le && CSS.supports("accent-color: initial");
    ((B, P) => {
      if (!/windows|mac/i.test(B) || !(P != null && P.platformVersion)) return !1;
      if (P.platform == "macOS") return R ? /_/.test(P.platformVersion) : !1;
      const U = (/windows ([\d|\.]+)/i.exec(B) || [])[1],
        ee = +U == 10,
        {
          platformVersion: we
        } = P,
        G = {
          "6.1": "7",
          "6.2": "8",
          "6.3": "8.1",
          "10.0": "10"
        } [we];
      if (!R && G) return G != U;
      const Ee = we.split(".");
      if (Ee.length != 3) return !0;
      const ve = +Ee[0] > 0;
      return ve && !ee || !ve && ee
    })(i.device, u) && (i.lied = !0, i.lies.platformVersion = "platform version is fake", ae("WorkerGlobalScope", i.lies.platformVersion)), i.userAgentVersion = T, i.userAgentDataVersion = N, i.userAgentEngine = v;
    const M = {
      ...po(i.webglRenderer) || {},
      compressedGPU: fo(i.webglRenderer)
    };
    return {
      ...i,
      gpu: M,
      uaPostReduction: ao(i.userAgent)
    }
  } catch (t) {
    Z(t, "workers failed or blocked by client");
    return
  }
}
const Tr = Math.random();
async function Fi() {
  const t = new OfflineAudioContext(1, 100, 44100),
    n = t.createOscillator();
  return n.frequency.value = 0, n.start(0), t.startRendering(), new Promise(e => {
    t.oncomplete = r => {
      var a, s;
      const o = (s = (a = r.renderedBuffer).getChannelData) == null ? void 0 : s.call(a, 0);
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
      var s;
      try {
        (s = a == null ? void 0 : a.close) == null || s.call(a)
      } catch {}
    };
  try {
    await se();
    try {
      window.OfflineAudioContext = OfflineAudioContext || webkitOfflineAudioContext
    } catch {}
    if (!window.OfflineAudioContext) return;
    const a = He(),
      s = a["AudioBuffer.getChannelData"],
      i = a["AudioBuffer.copyFromChannel"];
    let c = s || i || !1;
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
      const F = `expected -Infinity (silence) and got ${y} frequencies`;
      ae("AnalyserNode.getFloatFrequencyData", F)
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
        "AnalyserNode.context.listener.forwardX.maxValue": x(() => Se(() => p.context.listener.forwardX.maxValue)),
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
      v = F => new Promise(j => {
        const $ = F.createAnalyser(),
          re = F.createOscillator(),
          _e = F.createDynamicsCompressor();
        try {
          re.type = "triangle", re.frequency.value = 1e4, _e.threshold.value = -50, _e.knee.value = 40, _e.attack.value = 0
        } catch {}
        return re.connect(_e), _e.connect($), _e.connect(F.destination), re.start(0), F.startRendering(), F.addEventListener("complete", fe => {
          var Fe;
          try {
            _e.disconnect(), re.disconnect();
            const xe = new Float32Array($.frequencyBinCount);
            (Fe = $.getFloatFrequencyData) == null || Fe.call($, xe);
            const $e = new Float32Array($.fftSize);
            return "getFloatTimeDomainData" in $ && $.getFloatTimeDomainData($e), j({
              floatFrequencyData: xe,
              floatTimeDomainData: $e,
              buffer: fe.renderedBuffer,
              compressorGainReduction: _e.reduction.value || _e.reduction
            })
          } catch {
            return j(null)
          }
        })
      });
    await se();
    const [A, T] = await Promise.all([v(u), Fi().catch(() => !1)]), {
      floatFrequencyData: N,
      floatTimeDomainData: O,
      buffer: w,
      compressorGainReduction: R
    } = A || {};
    await se();
    const E = (F, j, $) => {
        const re = Math.min($, F.length),
          _e = [];
        for (let fe = j; fe < re; fe++) _e.push(F[fe]);
        return _e
      },
      I = F => {
        if (!F) return 0;
        let j = 0;
        for (let $ = 0; $ < F.length; $++) j += Math.abs(F[$]);
        return j
      },
      M = I(N),
      B = I(O),
      P = new Float32Array(_);
    let U = new Float32Array;
    w && ((r = w.copyFromChannel) == null || r.call(w, P, 0), U = ((o = w.getChannelData) == null ? void 0 : o.call(w, 0)) || []);
    const ee = E(P, 4500, 4600),
      we = E(U, 4500, 4600),
      de = I(E(U, 4500, _));
    T && (c = !0, ae("AudioBuffer", "audio is fake"));
    const G = "" + we == "" + ee,
      Ee = "copyFromChannel" in AudioBuffer.prototype;
    Ee && !G && (c = !0, ae("AudioBuffer", "getChannelData and copyFromChannel samples mismatch"));
    const ve = new Set(U).size;
    if (ve == _) {
      const F = `${ve} unique samples of ${_} is too high`;
      ue("AudioBuffer", F)
    }
    const Ne = (F, j) => Math.floor(Math.random() * (j - F + 1)) + F,
      Oe = (F, j, $) => {
        const {
          length: re
        } = j, _e = 20, fe = Ne(275, re - (_e + 1)), Fe = fe + _e / 2, xe = fe + _e;
        j.getChannelData(0)[fe] = F, j.getChannelData(0)[Fe] = F, j.getChannelData(0)[xe] = F, j.copyFromChannel($, 0);
        const $e = [j.getChannelData(0)[fe] === 0 ? Math.random() : 0, j.getChannelData(0)[Fe] === 0 ? Math.random() : 0, j.getChannelData(0)[xe] === 0 ? Math.random() : 0];
        return [...new Set([...j.getChannelData(0), ...$, ...$e])].filter(Xt => Xt !== 0)
      },
      rt = (F, j, $) => {
        j.copyToChannel($.map(() => F), 0);
        const re = j.getChannelData(0)[0];
        return [...j.getChannelData(0)].map(fe => fe !== re || !fe ? Math.random() : fe).filter(fe => fe !== re)
      };
    let W = (() => {
      try {
        const j = [...new Set([...Oe(Tr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...rt(Tr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3))])];
        return +(j.length !== 1 && j.reduce(($, re) => $ += +re, 0))
      } catch {
        return 0
      }
    })();
    if (!W) {
      const F = Math.min(100, U.length),
        j = new Set;
      for (let $ = 0; $ < F; $++) {
        const re = U[$];
        j.has(re) || (j.add(re), W += re)
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
    W && (c = !0, ae("AudioBuffer", "sample noise detected"));
    const ne = "" + [R, M, B],
      ie = ce[ne];
    return ie && !ie.includes(de) && (ke.AUDIO = !0, ue("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: ve,
      compressorGainReduction: R,
      floatFrequencyDataSum: M,
      floatTimeDomainDataSum: B,
      sampleSum: de,
      binsSample: we,
      copySample: Ee ? ee : [void 0],
      values: C,
      noise: W,
      baseLatency: Gi(),
      lied: c
    }
  } catch (a) {
    Z(a, "OfflineAudioContext failed or blocked by client");
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
    return Z(n), -1
  }
}

function bt(t) {
  t && (t.width = 0, t.height = 0, t.remove())
}
const Wi = () => {
    const o = {
        willReadFrequently: !0,
        desynchronized: !0
      },
      a = document.createElement("canvas"),
      s = document.createElement("canvas"),
      i = document.createElement("canvas");
    try {
      const c = a.getContext("2d", o),
        _ = s.getContext("2d", o),
        u = i.getContext("2d", o);
      if (!c || !_ || !u) throw new Error("canvas context blocked");
      a.width = 40, a.height = 40, s.width = 8, s.height = 8, i.width = 8, i.height = 8;
      const p = new Uint8Array(256),
        f = new Uint8Array(256);
      let d = 0;
      for (let A = 0; A < 8; A++)
        for (let T = 0; T < 8; T++) {
          const N = ~~(Math.random() * 256),
            O = ~~(Math.random() * 256),
            w = ~~(Math.random() * 256);
          p[d] = N, p[d + 1] = O, p[d + 2] = w, p[d + 3] = 255, d += 4, _.fillStyle = `rgba(${N}, ${O}, ${w}, 255)`, _.fillRect(A, T, 1, 1)
        }
      d = 0;
      for (let A = 0; A < 8; A++)
        for (let T = 0; T < 8; T++) {
          const N = _.getImageData(A, T, 1, 1).data,
            O = N[0],
            w = N[1],
            R = N[2],
            E = N[3];
          u.fillStyle = `rgba(${O}, ${w}, ${R}, ${E})`, u.fillRect(A, T, 1, 1);
          const I = u.getImageData(A, T, 1, 1).data,
            M = I[0],
            B = I[1],
            P = I[2],
            U = I[3];
          f[d] = O, f[d + 1] = w, f[d + 2] = R, f[d + 3] = E, d += 4, c.fillStyle = `rgba(${O!==M?M:255}, ${w!==B?B:255}, ${R!==P?P:255}, ${E!==U?U:1})`, c.fillRect(A * 5, T * 5, 5, 5)
        }
      const g = [],
        h = new Set;
      for (let A = 0; A < 64; A++) {
        const T = A * 4,
          N = p[T] !== f[T],
          O = p[T + 1] !== f[T + 1],
          w = p[T + 2] !== f[T + 2],
          R = p[T + 3] !== f[T + 3];
        if (N || O || w || R) {
          const E = (N ? "r" : "") + (O ? "g" : "") + (w ? "b" : "") + (R ? "a" : "");
          h.add(E), g.push([A, E])
        }
      }
      const y = a.toDataURL(),
        C = h.size ? [...h].sort().join(", ") : void 0,
        v = g.length || void 0;
      return {
        rgba: C,
        pixels: v,
        pixelImage: y
      }
    } catch {
      return
    } finally {
      bt(a), bt(s), bt(i)
    }
  },
  wn = ({
    canvas: t,
    context: n,
    strokeText: e = !1,
    cssFontFamily: r = "",
    area: o = {
      width: 50,
      height: 50
    },
    rounds: a = 10,
    maxShadowBlur: s = 50,
    seed: i = 500,
    offset: c = 2001000001,
    multiplier: _ = 15e3
  }) => {
    if (!n) return;
    n.clearRect(0, 0, t.width, t.height), t.width = o.width, t.height = o.height, t.style && (t.style.display = "none");
    const p = (({
        seed: O,
        offset: w,
        multiplier: R
      }) => {
        let E = Number(O) % Number(w);
        return {
          getNextSeed: () => (E = Number(R) * E % Number(w), E)
        }
      })({
        seed: i,
        offset: c,
        multiplier: _
      }),
      {
        getNextSeed: f
      } = p,
      d = (O, w, R, E) => {
        const I = (O - 1) / w * (R || 1) || 0;
        return E ? I : Math.floor(I)
      },
      g = (O, w, R, E, I) => {
        const {
          width: M,
          height: B
        } = R, P = O.createRadialGradient(d(I(), w, M), d(I(), w, B), d(I(), w, M), d(I(), w, M), d(I(), w, B), d(I(), w, M));
        P.addColorStop(0, E[d(I(), w, E.length)]), P.addColorStop(1, E[d(I(), w, E.length)]), O.fillStyle = P
      },
      h = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      y = (O, w, R, E) => {
        const {
          width: I,
          height: M
        } = R, B = 2.99;
        O.font = `${M/B}px ${r.replace(/!important/gm,"")}`, O.strokeText("👾A", d(E(), w, I), d(E(), w, M), d(E(), w, I))
      },
      C = (O, w, R, E) => {
        const {
          width: I,
          height: M
        } = R;
        O.beginPath(), O.arc(d(E(), w, I), d(E(), w, M), d(E(), w, Math.min(I, M)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), O.stroke()
      },
      v = (O, w, R, E) => {
        const {
          width: I,
          height: M
        } = R;
        O.beginPath(), O.moveTo(d(E(), w, I), d(E(), w, M)), O.bezierCurveTo(d(E(), w, I), d(E(), w, M), d(E(), w, I), d(E(), w, M), d(E(), w, I), d(E(), w, M)), O.stroke()
      },
      A = (O, w, R, E) => {
        const {
          width: I,
          height: M
        } = R;
        O.beginPath(), O.moveTo(d(E(), w, I), d(E(), w, M)), O.quadraticCurveTo(d(E(), w, I), d(E(), w, M), d(E(), w, I), d(E(), w, M)), O.stroke()
      },
      T = (O, w, R, E) => {
        if (!("ellipse" in O)) return;
        const {
          width: I,
          height: M
        } = R;
        O.beginPath(), O.ellipse(d(E(), w, I), d(E(), w, M), d(E(), w, Math.floor(I / 2)), d(E(), w, Math.floor(M / 2)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), O.stroke()
      },
      N = [C, v, A];
    ft || N.push(T), e && N.push(y), [...Array(a)].forEach(O => {
      g(n, c, o, h, f), n.shadowBlur = d(f(), c, s, !0), n.shadowColor = h[d(f(), c, h.length)];
      const w = N[d(f(), c, N.length)];
      w(n, c, o, f), n.fill()
    })
  };
async function Vi() {
  let t, n;
  try {
    await se();
    const e = He(),
      r = mn(),
      o = e["HTMLCanvasElement.toDataURL"],
      a = e["HTMLCanvasElement.getContext"],
      s = e["CanvasRenderingContext2D.fillText"] || e["CanvasRenderingContext2D.font"] || e["CanvasRenderingContext2D.getImageData"] || e["CanvasRenderingContext2D.strokeText"],
      i = e["String.fromCodePoint"];
    let c = e["CanvasRenderingContext2D.measureText"] || e["TextMetrics.actualBoundingBoxAscent"] || e["TextMetrics.actualBoundingBoxDescent"] || e["TextMetrics.actualBoundingBoxLeft"] || e["TextMetrics.actualBoundingBoxRight"] || e["TextMetrics.fontBoundingBoxAscent"] || e["TextMetrics.fontBoundingBoxDescent"] || e["TextMetrics.width"],
      _ = o || a || s || c || i || !1,
      u = window;
    !eo && r && (u = r);
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
    await se();
    const g = ft ? 50 : 75;
    wn({
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
    await se();
    const y = Wi();
    await se();
    const C = Cn.replace(/!important/gm, "");
    f.font = `10px ${C}`;
    const v = new Set,
      A = io.reduce((P, U) => {
        const {
          actualBoundingBoxAscent: ee,
          actualBoundingBoxDescent: we,
          actualBoundingBoxLeft: de,
          actualBoundingBoxRight: G,
          fontBoundingBoxAscent: Ee,
          fontBoundingBoxDescent: ve,
          width: Ne
        } = f.measureText(U) || {}, Oe = [ee, we, de, G, Ee, ve, Ne].join(",");
        return v.has(Oe) || (v.add(Oe), P.add(U)), P
      }, new Set),
      T = 1e-5 * [...v].map(P => P.split(",").reduce((U, ee) => U += +ee || 0, 0)).reduce((P, U) => P += U, 0),
      N = 75;
    await se(), wn({
      canvas: t,
      context: f,
      area: {
        width: N,
        height: N
      }
    });
    const O = t.toDataURL();
    await se(), wn({
      canvas: n,
      context: d,
      area: {
        width: N,
        height: N
      }
    });
    const w = n.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `50px ${C}`, f.fillText("A", 7, 37);
    const R = t.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `35px ${C}`, f.fillText("👾", 0, 37);
    const E = t.toDataURL();
    f.clearRect(0, 0, t.width, t.height), (y && y.pixels || Math.max(...f.getImageData(0, 0, 8, 8).data)) && (_ = !0, ae("CanvasRenderingContext2D.getImageData", "pixel data modified")), t.width = 2, t.height = 2, f.fillStyle = "#000", f.fillRect(0, 0, t.width, t.height), f.fillStyle = "#fff", f.fillRect(2, 2, 1, 1), f.beginPath(), f.arc(0, 0, 2, 0, 1, !0), f.closePath(), f.fill();
    const I = f.getImageData(0, 0, 2, 2).data.join(""),
      M = {
        BLINK: ["255255255255178178178255246246246255555555255", "255255255255192192192255240240240255484848255", "255255255255177177177255246246246255535353255", "255255255255128128128255191191191255646464255", "255255255255178178178255247247247255565656255", "255255255255174174174255242242242255474747255", "255255255255229229229255127127127255686868255", "255255255255192192192255244244244255535353255"],
        GECKO: ["255255255255191191191255207207207255646464255", "255255255255192192192255240240240255484848255", "255255255255191191191255239239239255646464255", "255255255255191191191255223223223255606060255", "255255255255171171171255223223223255606060255", "255255255255188188188255245245245255525252255"],
        WEBKIT: ["255255255255185185185255233233233255474747255", "255255255255185185185255229229229255474747255", "255255255255185185185255218218218255474747255", "255255255255192192192255240240240255484848255", "255255255255178178178255247247247255565656255", "255255255255178178178255247247247255565656255", "255255255255192192192255240240240255484848255", "255255255255186186186255218218218255464646255"]
      };
    Be.imageDataLowEntropy = I, (le && !M.BLINK.includes(I) || Et && !M.GECKO.includes(I) || ft && !M.WEBKIT.includes(I)) && (ke.CANVAS = !0), ke.CANVAS && ue("CanvasRenderingContext2D.getImageData", "suspicious pixel data");
    const B = P => {
      const U = Oe => Oe % 1 !== 0,
        {
          actualBoundingBoxAscent: ee,
          actualBoundingBoxDescent: we,
          actualBoundingBoxLeft: de,
          actualBoundingBoxRight: G,
          fontBoundingBoxAscent: Ee,
          fontBoundingBoxDescent: ve
        } = P.measureText("") || {};
      return [ee, we, de, G, Ee, ve].find(Oe => U(Oe || 0))
    };
    return await se(), B(f) && (c = !0, _ = !0, ae("CanvasRenderingContext2D.measureText", "metric noise detected")), {
      dataURI: h,
      paintURI: O,
      paintCpuURI: w,
      textURI: R,
      emojiURI: E,
      mods: y,
      textMetricsSystemSum: T,
      liedTextMetrics: c,
      emojiSet: [...A],
      lied: _
    }
  } catch (e) {
    Z(e);
    return
  } finally {
    bt(t), bt(n)
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
          s = Object.getOwnPropertyNames(a),
          i = [],
          c = /^--.*$/;
        Object.keys(o).forEach(y => {
          const C = !isNaN(+y),
            v = o[y],
            A = c.test(y),
            T = c.test(v);
          if (C && !T) return i.push(v);
          if (!C && !A) return i.push(y)
        });
        const _ = {},
          u = y => y.charAt(0).toUpperCase() + y.slice(1),
          p = y => y.charAt(0).toLowerCase() + y.slice(1),
          f = y => y.slice(1),
          d = /[A-Z]/g;
        i.forEach(y => {
          if (_[y]) return;
          const C = y.indexOf("-") > -1,
            v = d.test(y),
            A = y.charAt(0),
            T = C && A == "-",
            N = v && A == A.toUpperCase();
          if (y = T ? f(y) : N ? p(y) : y, C) {
            const O = y.split("-").map((w, R) => R == 0 ? w : u(w)).join("");
            O in o ? _[O] = !0 : u(O) in o && (_[u(O)] = !0)
          } else if (v) {
            const O = y.replace(d, w => "-" + w.toLowerCase());
            O in o ? _[O] = !0 : `-${O}` in o && (_[`-${O}`] = !0)
          }
        });
        const g = [...new Set([...s, ...i, ...Object.keys(_)])],
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
          s = i => ({
            colors: o.map(c => (i.setAttribute("style", `background-color: ${c} !important`), {
              [c]: getComputedStyle(i).backgroundColor
            })),
            fonts: a.map(c => {
              i.setAttribute("style", `font: ${c} !important`);
              const _ = getComputedStyle(i);
              return {
                [c]: `${_.fontSize} ${_.fontFamily}`
              }
            })
          });
        if (!e) {
          e = document.createElement("div"), document.body.append(e);
          const i = s(e);
          return (r = e.parentNode) == null || r.removeChild(e), i
        }
        return s(e)
      } catch (o) {
        Z(o);
        return
      }
    };
  try {
    const e = t("getComputedStyle", {
        require: [Z]
      }),
      r = n(_o());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    Z(e);
    return
  }
}

function $i() {
  const t = (o, a) => a == 0 ? o : t(a, o % a),
    n = (o, a) => {
      const s = t(o, a);
      return `${o/s}/${a/s}`
    },
    e = ({
      body: o,
      type: a,
      rangeStart: s,
      rangeLen: i
    }) => {
      const c = [...Array(i)].map((u, p) => (p += s, `@media(device-${a}:${p}px){body{--device-${a}:${p};}}`)).join("");
      return o.innerHTML = `<style>${c}</style>`, getComputedStyle(o).getPropertyValue(`--device-${a}`).trim()
    },
    r = ({
      body: o,
      width: a,
      height: s
    }) => {
      let i = e({
          body: o,
          type: "width",
          rangeStart: a,
          rangeLen: 1
        }),
        c = e({
          body: o,
          type: "height",
          rangeStart: s,
          rangeLen: 1
        });
      if (i && c) return {
        width: a,
        height: s
      };
      const _ = 1e3;
      return [...Array(10)].find((u, p) => (i || (i = e({
        body: o,
        type: "width",
        rangeStart: p * _,
        rangeLen: _
      })), c || (c = e({
        body: o,
        type: "height",
        rangeStart: p * _,
        rangeLen: _
      })), !!(i && c))), {
        width: +i,
        height: +c
      }
    };
  try {
    const o = mn().window,
      {
        body: a
      } = o.document,
      {
        width: s,
        availWidth: i,
        height: c,
        availHeight: _
      } = o.screen,
      u = !(s - i || c - _);
    (screen.width !== s || s > 800 && u) && (ke.IFRAME_SCREEN = !0);
    const p = n(s, c),
      f = v => {
        var A;
        return !!((A = o.matchMedia(v)) != null && A.matches)
      },
      d = v => {
        var A;
        return !!((A = matchMedia(v)) != null && A.matches)
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
        "device-screen": f(`(device-width: ${s}px) and (device-height: ${c}px)`) ? `${s} x ${c}` : void 0,
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
        width: s,
        height: c
      });
    return {
      mediaCSS: y,
      matchMediaCSS: g,
      screenQuery: C
    }
  } catch (o) {
    Z(o);
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
    Z(t);
    return
  }
}

function Xi(t, n) {
  if (!t || !n || !n.length) return !1;
  const e = n.reduce((s, i) => (s[i] = !0, s), {}),
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
const kn = {
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
  sn = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  Qi = Object.keys(xn).map(t => xn[t]).flat(),
  Zi = Object.keys(kn).map(t => kn[t]).flat(),
  es = Object.keys(sn).map(t => sn[t]).flat(),
  ts = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  ns = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  rs = [...Qi, ...Zi, ...ts, ...ns, ...es].sort();
async function os() {
  const t = ({
      doc: o,
      id: a,
      emojis: s
    }) => {
      try {
        Yi(o.getElementById(a), Ji`
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
					${s.map(d=>`<div class="pixel-emoji">${d}</div>`).join("")}
				</div>
			`);
        const i = d => ({
            width: d.inlineSize,
            height: d.blockSize
          }),
          c = new Set,
          u = [...o.getElementsByClassName("pixel-emoji")].reduce((d, g, h) => {
            const y = getComputedStyle(g),
              C = s[h],
              {
                height: v,
                width: A
              } = i(y),
              T = `${A},${v}`;
            return c.has(T) || (c.add(T), d.add(C)), d
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
        document.fonts.check(`0px "${fn()}"`) || (a = o.reduce((_, u) => (document.fonts.check(`0px "${u}"`) && _.push(u), _), []));
        const s = o.map(_ => new FontFace(_, `local("${_}")`)),
          c = (await Promise.allSettled(s.map(_ => _.load()))).reduce((_, u) => (u.status == "fulfilled" && _.push(u.value.family), _), []);
        return [...new Set([...a, ...c])].sort()
      } catch {
        return []
      }
    }, e = o => {
      const a = ({
          fonts: i,
          fontMap: c
        }) => {
          const _ = {
              11: c[11].find(d => i.includes(d)),
              10: c[10].find(d => i.includes(d)),
              "8.1": c["8.1"].find(d => i.includes(d)),
              8: c[8].find(d => i.includes(d)),
              7: c[7].filter(d => i.includes(d)).length == c[7].length
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
        s = ({
          fonts: i,
          fontMap: c
        }) => {
          const _ = {
              13: c[13].find(d => i.includes(d)),
              12: c[12].find(d => i.includes(d)),
              "10.15-11": c["10.15-11"].find(d => i.includes(d)),
              "10.13-10.14": c["10.13-10.14"].find(d => i.includes(d)),
              "10.12": c["10.12"].find(d => i.includes(d)),
              "10.11": c["10.11"].find(d => i.includes(d)),
              "10.10": c["10.10"].find(d => i.includes(d)),
              "10.9": c["10.9"].filter(d => i.includes(d)).length == c["10.9"].length
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
      }) || s({
        fonts: o,
        fontMap: xn
      })
    }, r = o => Object.keys(sn).reduce((s, i) => {
      const c = sn[i];
      return c.filter(u => o.includes(u)).length == c.length ? [...s, i] : s
    }, []);
  try {
    await se();
    const o = mn(),
      a = He(),
      s = o && o.document && o.document.body ? o.document : document,
      i = "font-fingerprint",
      c = s.createElement("div");
    c.setAttribute("id", i), s.body.appendChild(c);
    const {
      emojiSet: _,
      pixelSizeSystemSum: u
    } = t({
      doc: s,
      id: i,
      emojis: io
    }) || {}, f = await n(rs), d = e(f), g = r(f), h = a["FontFace.load"] || a["FontFace.family"] || a["FontFace.status"] || a["String.fromCodePoint"] || a["CSSStyleDeclaration.setProperty"] || a["CSS2Properties.setProperty"] || !1;
    return Xi(on, f) && (ke.FONTS = !0, Be.FontOsIsBad = !0, ue("platform", `${on} system and fonts are uncommon`)), {
      fontFaceLoadFonts: f,
      platformVersion: d,
      apps: g,
      emojiSet: _,
      pixelSizeSystemSum: u,
      lied: h
    }
  } catch (o) {
    Z(o);
    return
  }
}
const K = t => {
    const n = `${JSON.stringify(t)}`;
    return ("0000000" + (n.split("").reduce((r, o, a) => Math.imul(31, r) + n.charCodeAt(a) | 0, 2166136261) >>> 0).toString(16)).substr(-8)
  },
  as = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var ye = (t => (t.WINDOWS = "Windows", t.MAC = "Mac", t.LINUX = "Linux", t.ANDROID = "Android", t.CHROME_OS = "Chrome OS", t))(ye || {});
const is = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function ss() {
  var R;
  if (!le) return [];
  const t = "getVideoPlaybackQuality" in HTMLVideoElement.prototype,
    n = CSS.supports("color-scheme: initial"),
    e = CSS.supports("appearance: initial"),
    r = "DisplayNames" in Intl,
    o = CSS.supports("aspect-ratio: initial"),
    a = CSS.supports("border-end-end-radius: initial"),
    s = "randomUUID" in Crypto.prototype,
    i = "BarcodeDetector" in window,
    c = "downlinkMax" in (((R = window.NetworkInformation) == null ? void 0 : R.prototype) || {}),
    _ = "ContentIndex" in window,
    u = "ContactsManager" in window,
    p = "EyeDropper" in window,
    f = "FileSystemWritableFileStream" in window,
    d = "HID" in window && "HIDDevice" in window,
    g = "SerialPort" in window && "Serial" in window,
    h = "SharedWorker" in window,
    y = "ontouchstart" in Window && "TouchEvent" in window,
    C = "setAppBadge" in Navigator.prototype,
    v = (E, I) => E ? [I] : [],
    A = {
      [ye.ANDROID]: [...v(o, i), ...v(e, _), ...v(t, u), c, ...v(s, !p), ...v(r, !f), ...v(a, !d), ...v(a, !g), !h, y, ...v(n, !C)],
      [ye.CHROME_OS]: [...v(o, i), ...v(e, !_), ...v(t, !u), c, ...v(s, p), ...v(r, f), ...v(a, d), ...v(a, g), h, y || !y, ...v(n, !C)],
      [ye.WINDOWS]: [...v(o, !i), ...v(e, !_), ...v(t, !u), !c, ...v(s, p), ...v(r, f), ...v(a, d), ...v(a, g), h, y || !y, ...v(n, C)],
      [ye.MAC]: [...v(o, i), ...v(e, !_), ...v(t, !u), !c, ...v(s, p), ...v(r, f), ...v(a, d), ...v(a, g), h, !y, ...v(n, C)],
      [ye.LINUX]: [...v(o, !i), ...v(e, !_), ...v(t, !u), !c, ...v(s, p), ...v(r, f), ...v(a, d), ...v(a, g), h, !y || !y, ...v(n, !C)]
    },
    T = {
      noContentIndex: e && !_,
      noContactsManager: t && !u,
      noDownlinkMax: !c
    },
    N = Object.keys(A).reduce((E, I) => {
      const M = A[I],
        B = +(M.filter(P => P).length / M.length).toFixed(2);
      return E[I] = B, E
    }, {}),
    O = Object.keys(N).reduce((E, I) => N[E] > N[I] ? E : I),
    w = N[O];
  return [N, w, T]
}
const Sr = {
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
      r = Sr[e];
    return Sr[e] ? `${e}:${r}` : e
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
    await se();
    const r = He(),
      o = _o(),
      a = Object.keys({
        ...navigator.mimeTypes
      }),
      s = cs(),
      [i, c, _] = ss(),
      u = {
        chromium: le,
        likeHeadless: {
          noChrome: le && !("chrome" in window),
          hasPermissionsBug: le && "permissions" in navigator && await (async () => (await navigator.permissions.query({
            name: "notifications"
          })).state == "prompt" && "Notification" in window && Notification.permission === "denied")(),
          noPlugins: le && navigator.plugins.length === 0,
          noMimeTypes: le && a.length === 0,
          notificationIsDenied: le && "Notification" in window && Notification.permission == "denied",
          hasKnownBgColor: le && (() => {
            let T = o;
            if (o || (T = document.createElement("div"), document.body.appendChild(T)), !T) return !1;
            T.setAttribute("style", "background-color: ActiveText");
            const {
              backgroundColor: N
            } = getComputedStyle(T) || {};
            return o || document.body.removeChild(T), N === "rgb(255, 0, 0)"
          })(),
          prefersLightColor: !!((n = matchMedia("(prefers-color-scheme: light)")) != null && n.matches),
          uaDataIsBlank: "userAgentData" in navigator && (((e = navigator.userAgentData) == null ? void 0 : e.platform) === "" || await navigator.userAgentData.getHighEntropyValues(["platform"]).platform === ""),
          pdfIsDisabled: "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !1,
          noTaskbar: screen.height === screen.availHeight && screen.width === screen.availWidth,
          hasVvpScreenRes: innerWidth === screen.width && outerHeight === screen.height || "visualViewport" in window && visualViewport !== null && visualViewport.width === screen.width && visualViewport.height === screen.height,
          hasSwiftShader: /SwiftShader/.test(""),
          noWebShare: le && CSS.supports("accent-color: initial") && (!("share" in navigator) || !("canShare" in navigator)),
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
              const T = document.createElement("iframe");
              return T.srcdoc = as, !!T.contentWindow
            } catch {
              return !0
            }
          })(),
          hasHighChromeIndex: (() => {
            const T = "chrome";
            return Object.keys(window).slice(-50).includes(T) && Object.getOwnPropertyNames(window).slice(-50).includes(T)
          })(),
          hasBadChromeRuntime: (() => {
            var T;
            if (!("chrome" in window && "runtime" in chrome)) return !1;
            try {
              return "prototype" in chrome.runtime.sendMessage || "prototype" in chrome.runtime.connect || (new chrome.runtime.sendMessage, new chrome.runtime.connect), !0
            } catch (N) {
              return ((T = N == null ? void 0 : N.constructor) == null ? void 0 : T.name) != "TypeError"
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
      C = +(g.filter(T => p[T]).length / g.length * 100).toFixed(0),
      v = +(h.filter(T => f[T]).length / h.length * 100).toFixed(0),
      A = +(y.filter(T => d[T]).length / y.length * 100).toFixed(0);
    return {
      ...u,
      likeHeadlessRating: C,
      headlessRating: v,
      stealthRating: A,
      systemFonts: s,
      platformEstimate: [i, c]
    }
  } catch (r) {
    Z(r);
    return
  }
}
async function ls() {
  const t = n => {
    const r = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"].reduce((o, a) => {
      try {
        const s = new n[a];
        if (!s) return o;
        const {
          locale: i
        } = s.resolvedOptions() || {};
        return [...o, i]
      } catch {
        return o
      }
    }, []);
    return [...new Set(r)]
  };
  try {
    await se();
    const n = He(),
      e = n["Intl.Collator.resolvedOptions"] || n["Intl.DateTimeFormat.resolvedOptions"] || n["Intl.DisplayNames.resolvedOptions"] || n["Intl.ListFormat.resolvedOptions"] || n["Intl.NumberFormat.resolvedOptions"] || n["Intl.PluralRules.resolvedOptions"] || n["Intl.RelativeTimeFormat.resolvedOptions"] || !1,
      r = Se(() => new Intl.DateTimeFormat(void 0, {
        month: "long",
        timeZoneName: "long"
      }).format(9636444e5)),
      o = Se(() => new Intl.DisplayNames(void 0, {
        type: "language"
      }).of("en-US")),
      a = Se(() => new Intl.ListFormat(void 0, {
        style: "long",
        type: "disjunction"
      }).format(["0", "1"])),
      s = Se(() => new Intl.NumberFormat(void 0, {
        notation: "compact",
        compactDisplay: "long"
      }).format(21e6)),
      i = Se(() => new Intl.PluralRules().select(1)),
      c = Se(() => new Intl.RelativeTimeFormat(void 0, {
        localeMatcher: "best fit",
        numeric: "auto",
        style: "long"
      }).format(1, "year")),
      _ = t(Intl);
    return {
      dateTimeFormat: r,
      displayNames: o,
      listFormat: a,
      numberFormat: s,
      pluralRules: i,
      relativeTimeFormat: c,
      locale: "" + _,
      lied: e
    }
  } catch (n) {
    Z(n);
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
      return n.reduce((s, i) => {
        const c = {
          mimeType: i,
          audioPlayType: r.canPlayType(i),
          videoPlayType: e.canPlayType(i),
          mediaSource: MediaSource.isTypeSupported(i),
          mediaRecorder: o ? MediaRecorder.isTypeSupported(i) : !1
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
    Z(n);
    return
  }
}
async function fs(t) {
  try {
    await se();
    const n = He();
    let e = n["Navigator.appVersion"] || n["Navigator.deviceMemory"] || n["Navigator.doNotTrack"] || n["Navigator.hardwareConcurrency"] || n["Navigator.language"] || n["Navigator.languages"] || n["Navigator.maxTouchPoints"] || n["Navigator.oscpu"] || n["Navigator.platform"] || n["Navigator.userAgent"] || n["Navigator.vendor"] || n["Navigator.plugins"] || n["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      o = x(async () => {
        const u = Se(() => navigator.userAgent),
          p = Nn(u),
          f = await to();
        return ro({
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
          return !!f && p.some(g => f.includes(g)) || ue("platform", `${u} is unusual`), on !== gr && (e = !0, ae("Navigator.platform", `${gr} platform and ${on} user agent do not match`)), t && u != t.platform && (e = !0), u
        }),
        system: x(() => Nn(navigator.userAgent), "userAgent system failed"),
        device: x(() => oo({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: x(() => {
          const {
            userAgent: u
          } = navigator;
          return r || ue("userAgent", `${u} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(u) && ue("userAgent", "extra spaces detected"), Zt(u).length && ue("userAgent is gibberish", u), t && u != t.userAgent && (e = !0), u.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: ao((navigator || {}).userAgent),
        appVersion: x(() => {
          const {
            appVersion: u
          } = navigator;
          return r || ue("appVersion", `${u} does not match userAgent`), "appVersion" in navigator && !u && ue("appVersion", "Living Standard property returned falsy value"), /\s{2,}|^\s|\s$/g.test(u) && ue("appVersion", "extra spaces detected"), u.trim().replace(/\s{2,}/, " ")
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
          })[String(u)] || ue("deviceMemory", `${u} is not a valid value [0.25, 0.5, 1, 2, 4, 8, 16, 32]`);
          const f = ((g = performance == null ? void 0 : performance.memory) == null ? void 0 : g.jsHeapSizeLimit) || null,
            d = f ? +(f / 1073741824).toFixed(1) : 0;
          return d > u && ue("deviceMemory", `available memory ${d}GB is greater than device memory ${u}GB`), t && u !== t.deviceMemory && (e = !0), u
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
          } [String(u)] || ue("doNotTrack - unusual result", u), u
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
          } [String(u)] || ue("globalPrivacyControl - unusual result", u), u
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
            if ((/^.{0,2}/g.exec(p[0]) ?? [""])[0] != f && ue("language/languages", `${[u,p].join(" ")} mismatch`), t) {
              u != t.language && (e = !0, ae("Navigator.language", `${u} does not match worker scope`));
              const g = p.join(",");
              g !== t.languages.join(",") && (e = !0, ae("Navigator.languages", `${g} does not match worker scope`))
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
            } = f, h = Zt(d), y = Zt(g);
            h.length && ue("plugin name is gibberish", d), y.length && ue("plugin description is gibberish", g)
          }), p
        }, "plugins failed"),
        properties: x(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: ps(),
        privateClickMeasurement: ms(),
        pdfViewerEnabled: hs()
      },
      s = () => x(() => {
        const u = navigator;
        if (!(!u.userAgentData || !u.userAgentData.getHighEntropyValues)) return u.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(p => {
          const {
            brands: f,
            mobile: d
          } = u.userAgentData || {}, g = (C, v = !1) => C.filter(A => !/Not/.test(A.brand)).map(A => `${A.brand}${v?` ${A.version}`:""}`), h = C => C.length > 1 ? C.filter(v => !/Chromium/.test(v)) : C;
          return p.brands || (p.brands = f), p.brandsVersion = g(p.brands ?? [], !0), p.brands = g(p.brands ?? []), p.brandsVersion = h(p.brandsVersion ?? []), p.brands = h(p.brands ?? []), p.mobile || (p.mobile = d), Object.keys(p).sort().reduce((C, v) => (C[v] = p[v], C), {})
        })
      }, "userAgentData failed"),
      i = () => x(() => {
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
              description: v,
              device: A,
              vendor: T
            } = y, N = [T, C, v, A], O = [...(d == null ? void 0 : d.values()) ?? []], w = (R => {
              const E = {};
              for (const I in R) E[I] = R[I];
              return E
            })(f);
            return Be.webGpuAdapter = N, Be.webGpuFeatures = O, Be.webGpuLimits = K(w), {
              adapterInfo: N,
              limits: w
            }
          }, {
            info: h
          } = p;
          return h ? g(h) : p.requestAdapterInfo ? p.requestAdapterInfo().then(g) : void 0
        })
      }, "webgpu failed");
    return await se(), Promise.all([o, s(), i(), c(), _()]).then(([u, p, f, d, g]) => ({
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
    Z(n, "Navigator failed or blocked by client");
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
    Z(n);
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
    Z(t);
    return
  }
}
const pe = "c767712b",
  gs = {
    noscript: {
      contentDocumentHash: ["0b637a33", "37e2f32e", "318390d1"],
      contentWindowHash: ["0b637a33", "37e2f32e", "318390d1"],
      getContextHash: ["0b637a33", "081d6d1b", pe]
    },
    trace: {
      contentDocumentHash: ["ca9d9c2f"],
      contentWindowHash: ["ca9d9c2f"],
      createElementHash: ["77dea834"],
      getElementByIdHash: ["77dea834"],
      getImageDataHash: ["77dea834"],
      toBlobHash: ["77dea834", pe],
      toDataURLHash: ["77dea834", pe]
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
      getImageDataHash: ["98ec858e", "a2971888", "dbbaf31f", pe],
      toBlobHash: ["9f1c3dfe", "a2971888", "dbbaf31f", pe],
      toDataURLHash: ["98ec858e", "a2971888", "dbbaf31f", pe]
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
      toDataURLHash: ["fd00bf5d", "8ee7df22", pe],
      toBlobHash: ["fd00bf5d", "8ee7df22", pe],
      getImageDataHash: ["fd00bf5d", "8ee7df22", pe],
      getByteFrequencyDataHash: ["fd00bf5d", "8ee7df22", pe],
      getByteTimeDomainDataHash: ["fd00bf5d", "8ee7df22", pe],
      getFloatFrequencyDataHash: ["fd00bf5d", "8ee7df22", pe],
      getFloatTimeDomainDataHash: ["fd00bf5d", "8ee7df22", pe],
      copyFromChannelHash: ["fd00bf5d", "8ee7df22", pe],
      getChannelDataHash: ["fd00bf5d", "8ee7df22", pe],
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
      getContextHash: ["55e9b959", pe],
      toDataURLHash: ["55e9b959", pe],
      toBlobHash: ["55e9b959", pe],
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
    noscript: bn,
    trace: qe,
    cydec: Ke,
    canvasblocker: it,
    chameleon: Le,
    duckduckgo: Te,
    privacybadger: Ar,
    privacypossum: vn,
    jshelter: Ce,
    puppeteerExtra: he,
    fakeBrowser: Re
  } = gs;

function ys(t, n) {
  if (n) {
    if (n >= 7 && qe.contentDocumentHash.includes(t.contentDocumentHash) && qe.contentWindowHash.includes(t.contentWindowHash) && qe.createElementHash.includes(t.createElementHash) && qe.getElementByIdHash.includes(t.getElementByIdHash) && qe.toDataURLHash.includes(t.toDataURLHash) && qe.toBlobHash.includes(t.toBlobHash) && qe.getImageDataHash.includes(t.getImageDataHash)) return "Trace";
    if (n >= 7 && Ke.contentDocumentHash.includes(t.contentDocumentHash) && Ke.contentWindowHash.includes(t.contentWindowHash) && Ke.createElementHash.includes(t.createElementHash) && Ke.getElementByIdHash.includes(t.getElementByIdHash) && Ke.toDataURLHash.includes(t.toDataURLHash) && Ke.toBlobHash.includes(t.toBlobHash) && Ke.getImageDataHash.includes(t.getImageDataHash)) return "CyDec";
    if (n >= 6 && it.contentDocumentHash.includes(t.contentDocumentHash) && it.contentWindowHash.includes(t.contentWindowHash) && it.appendHash.includes(t.appendHash) && it.toDataURLHash.includes(t.toDataURLHash) && it.toBlobHash.includes(t.toBlobHash) && it.getImageDataHash.includes(t.getImageDataHash)) return "CanvasBlocker";
    if (n >= 9 && Le.appendHash.includes(t.appendHash) && Le.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Le.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Le.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && Le.prependHash.includes(t.prependHash) && Le.replaceWithHash.includes(t.replaceWithHash) && Le.appendChildHash.includes(t.appendChildHash) && Le.insertBeforeHash.includes(t.insertBeforeHash) && Le.replaceChildHash.includes(t.replaceChildHash)) return "Chameleon";
    if (n >= 7 && Te.toDataURLHash.includes(t.toDataURLHash) && Te.toBlobHash.includes(t.toBlobHash) && Te.getImageDataHash.includes(t.getImageDataHash) && Te.getByteFrequencyDataHash.includes(t.getByteFrequencyDataHash) && Te.getByteTimeDomainDataHash.includes(t.getByteTimeDomainDataHash) && Te.getFloatFrequencyDataHash.includes(t.getFloatFrequencyDataHash) && Te.getFloatTimeDomainDataHash.includes(t.getFloatTimeDomainDataHash) && Te.copyFromChannelHash.includes(t.copyFromChannelHash) && Te.getChannelDataHash.includes(t.getChannelDataHash) && Te.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Te.availHeightHash.includes(t.availHeightHash) && Te.availLeftHash.includes(t.availLeftHash) && Te.availTopHash.includes(t.availTopHash) && Te.availWidthHash.includes(t.availWidthHash) && Te.colorDepthHash.includes(t.colorDepthHash) && Te.pixelDepthHash.includes(t.pixelDepthHash)) return "DuckDuckGo";
    if (n >= 2 && Ar.getImageDataHash.includes(t.getImageDataHash) && Ar.toDataURLHash.includes(t.toDataURLHash)) return "Privacy Badger";
    if (n >= 3 && vn.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && vn.availWidthHash.includes(t.availWidthHash) && vn.colorDepthHash.includes(t.colorDepthHash)) return "Privacy Possum";
    if (n >= 2 && bn.contentDocumentHash.includes(t.contentDocumentHash) && bn.contentWindowHash.includes(t.contentDocumentHash) && bn.getContextHash.includes(t.getContextHash) && t.hardwareConcurrencyHash == pe) return "NoScript";
    if (n >= 14 && Ce.contentDocumentHash.includes(t.contentDocumentHash) && Ce.contentWindowHash.includes(t.contentDocumentHash) && Ce.appendHash.includes(t.appendHash) && Ce.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Ce.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Ce.prependHash.includes(t.prependHash) && Ce.replaceWithHash.includes(t.replaceWithHash) && Ce.appendChildHash.includes(t.appendChildHash) && Ce.insertBeforeHash.includes(t.insertBeforeHash) && Ce.replaceChildHash.includes(t.replaceChildHash) && Ce.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "JShelter";
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
    s = a[0].slice(-1),
    i = a.every(_ => _.slice(-1) === s),
    c = a[0].length;
  return {
    protection: i,
    delays: o.map((_, u) => a[u].length > c ? a[u].slice(-c) : _),
    precision: i ? Math.min(...a.map(_ => _.length)) : void 0,
    precisionValue: i ? s : void 0
  }
}
async function bs() {
  try {
    await se();
    const t = Ni(),
      n = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: le ? "Blink" : Et ? "Gecko" : ""
      },
      [e, r] = await Promise.all([to(), le ? void 0 : ws()]);
    if (e) {
      const c = fi();
      n.privacy = "Brave", n.security = {
        FileSystemWritableFileStream: "FileSystemWritableFileStream" in window,
        Serial: "Serial" in window,
        ReportingObserver: "ReportingObserver" in window
      }, n.mode = c.allow ? "allow" : c.standard ? "standard" : c.strict ? "strict" : ""
    }
    const {
      protection: o
    } = r || {};
    if (Et && o) {
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
    await se();
    const s = {
        contentDocumentHash: K(t["HTMLIFrameElement.contentDocument"]),
        contentWindowHash: K(t["HTMLIFrameElement.contentWindow"]),
        createElementHash: K(t["Document.createElement"]),
        getElementByIdHash: K(t["Document.getElementById"]),
        appendHash: K(t["Element.append"]),
        insertAdjacentElementHash: K(t["Element.insertAdjacentElement"]),
        insertAdjacentHTMLHash: K(t["Element.insertAdjacentHTML"]),
        insertAdjacentTextHash: K(t["Element.insertAdjacentText"]),
        prependHash: K(t["Element.prepend"]),
        replaceWithHash: K(t["Element.replaceWith"]),
        appendChildHash: K(t["Node.appendChild"]),
        insertBeforeHash: K(t["Node.insertBefore"]),
        replaceChildHash: K(t["Node.replaceChild"]),
        getContextHash: K(t["HTMLCanvasElement.getContext"]),
        toDataURLHash: K(t["HTMLCanvasElement.toDataURL"]),
        toBlobHash: K(t["HTMLCanvasElement.toBlob"]),
        getImageDataHash: K(t["CanvasRenderingContext2D.getImageData"]),
        getByteFrequencyDataHash: K(t["AnalyserNode.getByteFrequencyData"]),
        getByteTimeDomainDataHash: K(t["AnalyserNode.getByteTimeDomainData"]),
        getFloatFrequencyDataHash: K(t["AnalyserNode.getFloatFrequencyData"]),
        getFloatTimeDomainDataHash: K(t["AnalyserNode.getFloatTimeDomainData"]),
        copyFromChannelHash: K(t["AudioBuffer.copyFromChannel"]),
        getChannelDataHash: K(t["AudioBuffer.getChannelData"]),
        hardwareConcurrencyHash: K(t["Navigator.hardwareConcurrency"]),
        availHeightHash: K(t["Screen.availHeight"]),
        availLeftHash: K(t["Screen.availLeft"]),
        availTopHash: K(t["Screen.availTop"]),
        availWidthHash: K(t["Screen.availWidth"]),
        colorDepthHash: K(t["Screen.colorDepth"]),
        pixelDepthHash: K(t["Screen.pixelDepth"])
      },
      i = {};
    for (const [c, _] of Object.entries(s)) _ !== pe && (i[c.slice(0, -4)] = _);
    return n.extensionHashPattern = i, n.extension = ys(s, a), n
  } catch (t) {
    Z(t);
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
async function Es() {
  try {
    const t = He();
    let n = !!t["Screen.width"] || !!t["Screen.height"] || !!t["Screen.availWidth"] || !!t["Screen.availHeight"] || !!t["Screen.colorDepth"] || !!t["Screen.pixelDepth"] || !1;
    const e = window.screen || {},
      {
        width: r,
        height: o,
        availWidth: a,
        availHeight: s,
        colorDepth: i,
        pixelDepth: c
      } = e,
      _ = g => {
        var h;
        return !!((h = matchMedia(g)) != null && h.matches)
      },
      u = window.devicePixelRatio || 0,
      p = !_(`(resolution: ${u}dppx)`);
    !ft && p && (n = !0, ae("Window.devicePixelRatio", "lied dpr"));
    const f = !(r - a || o - s);
    return r > 800 && f && (ke.SCREEN = !0), {
      width: r,
      height: o,
      availWidth: a,
      availHeight: s,
      colorDepth: i,
      pixelDepth: c,
      touch: vs(),
      lied: n
    }
  } catch (t) {
    Z(t);
    return
  }
}
async function Ts() {
  return await new Promise(t => setTimeout(() => t(void 0), 50)), new Promise(async t => {
    try {
      await se();
      const n = "speechSynthesis" in window;
      if (n && speechSynthesis.getVoices(), !n) return t(null);
      const e = !!He()["SpeechSynthesis.getVoices"],
        r = () => {
          clearTimeout(o), speechSynthesis.removeEventListener ? speechSynthesis.removeEventListener("voiceschanged", a) : speechSynthesis.onvoiceschanged === a && (speechSynthesis.onvoiceschanged = null)
        },
        o = setTimeout(() => {
          r(), t(null)
        }, 300),
        a = () => {
          const s = speechSynthesis.getVoices();
          if (!s || !s.length) return;
          const i = new Set,
            c = [],
            _ = [],
            u = [],
            p = new Set;
          let f = !1,
            d = null,
            g = 0;
          for (let v = 0; v < s.length; v++) {
            const A = s[v];
            A.localService && (f = !0);
            const {
              voiceURI: T
            } = A;
            if (i.has(T)) continue;
            i.add(T), A.localService ? c.push(A.name) : _.push(A.name);
            const {
              lang: N
            } = A;
            p.has(N) || (p.add(N), u.push(N)), A.default && A.localService && (d = A, g++)
          }
          if (le && !f) return;
          r();
          let h = "",
            y = "";
          g === 1 && d && (h = d.name, y = (d.lang || "").replace(/_/, "-"));
          const {
            locale: C
          } = Intl.DateTimeFormat().resolvedOptions();
          return y && y.split("-")[0] !== C.split("-")[0] && (Be.voiceLangMismatch = !0, ke.TIME_ZONE = !0), t({
            local: c,
            remote: _,
            languages: u,
            defaultVoiceName: h,
            defaultVoiceLang: y,
            lied: e
          })
        };
      if (a(), speechSynthesis.addEventListener) return speechSynthesis.addEventListener("voiceschanged", a);
      speechSynthesis.onvoiceschanged = a
    } catch (n) {
      return Z(n), t(null)
    }
  })
}

function Ss() {
  var e;
  const t = (e = window.Intl) == null ? void 0 : e.DateTimeFormat;
  if (t) {
    const r = new t().resolvedOptions().timeZone;
    if (r) return r
  }
  const n = -As();
  return `UTC${n>=0?"+":""}${n}`
}

function As() {
  const t = new Date().getFullYear();
  return Math.max(new Date(t, 0, 1).getTimezoneOffset(), new Date(t, 6, 1).getTimezoneOffset())
}
const Os = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  Rs = {
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
  Ds = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  Is = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]),
  Or = t => {
    const n = "BigInt64Array" in window && ft && !/(Cr|Fx)iOS/.test(navigator.userAgent);
    if (!t || n) return;
    t.clear(t.COLOR_BUFFER_BIT);
    const e = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, e);
    const r = new Float32Array([-.9, -.7, 0, .8, -.7, 0, 0, .5, 0]);
    t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW);
    const o = t.createProgram(),
      a = t.createShader(t.VERTEX_SHADER);
    t.shaderSource(a, `
			attribute vec2 attrVertex;
			varying vec2 varyinTexCoordinate;
			uniform vec2 uniformOffset;
			void main(){
				varyinTexCoordinate = attrVertex + uniformOffset;
				gl_Position = vec4(attrVertex, 0, 1);
			}
		`), t.compileShader(a), t.attachShader(o, a);
    const s = t.createShader(t.FRAGMENT_SHADER);
    t.shaderSource(s, `
			precision mediump float;
			varying vec2 varyinTexCoordinate;
			void main() {
				gl_FragColor = vec4(varyinTexCoordinate, 1, 1);
			}
		`), t.compileShader(s), t.attachShader(o, s);
    const i = 3;
    return t.linkProgram(o), t.useProgram(o), o.vertexPosAttrib = t.getAttribLocation(o, "attrVertex"), o.offsetUniform = t.getUniformLocation(o, "uniformOffset"), t.enableVertexAttribArray(o.vertexPosArray), t.vertexAttribPointer(o.vertexPosAttrib, i, t.FLOAT, !1, 0, 0), t.uniform2f(o.offsetUniform, 1, 1), t.drawArrays(t.LINE_LOOP, 0, 3), t
  };
async function Ns() {
  var o;
  let t, n, e, r;
  try {
    await se();
    const a = He(),
      s = mn(),
      i = a["HTMLCanvasElement.toDataURL"],
      c = a["HTMLCanvasElement.getContext"],
      _ = a["WebGLRenderingContext.getParameter"] || a["WebGL2RenderingContext.getParameter"] || a["WebGLRenderingContext.getExtension"] || a["WebGL2RenderingContext.getExtension"],
      u = i || c || _ || a["WebGLRenderingContext.getSupportedExtensions"] || a["WebGL2RenderingContext.getSupportedExtensions"] || !1;
    let p = window;
    !eo && s && (p = s);
    const f = p.document;
    "OffscreenCanvas" in window ? (t = new p.OffscreenCanvas(256, 256), n = new p.OffscreenCanvas(256, 256)) : (t = f.createElement("canvas"), n = f.createElement("canvas"));
    const d = Tn(t, "webgl"),
      g = Tn(n, "webgl2");
    if (e = d, r = g, !d) return;
    const h = (k, H) => {
        if (!k) return;
        const W = x(() => k.getShaderPrecisionFormat(k[H], k.LOW_FLOAT)),
          ce = x(() => k.getShaderPrecisionFormat(k[H], k.MEDIUM_FLOAT)),
          ne = x(() => k.getShaderPrecisionFormat(k[H], k.HIGH_FLOAT)),
          ie = x(() => k.getShaderPrecisionFormat(k[H], k.HIGH_INT));
        return {
          LOW_FLOAT: W,
          MEDIUM_FLOAT: ce,
          HIGH_FLOAT: ne,
          HIGH_INT: ie
        }
      },
      y = (k, H) => {
        const W = {};
        if (!H) return W;
        for (const ce in H) {
          const ne = H[ce];
          W[k + "." + ce + ".precision"] = ne ? x(() => ne.precision) : void 0, W[k + "." + ce + ".rangeMax"] = ne ? x(() => ne.rangeMax) : void 0, W[k + "." + ce + ".rangeMin"] = ne ? x(() => ne.rangeMin) : void 0
        }
        return W
      },
      C = k => {
        const H = {};
        if (!k) return H;
        const W = k;
        for (const ce of Os) {
          const ne = W[ce];
          if (ne === void 0) continue;
          const ie = k.getParameter(ne);
          ie && ArrayBuffer.isView(ie) ? H[ce] = Array.from(ie) : H[ce] = ie
        }
        return H
      },
      v = k => {
        if (!k) return [];
        const H = x(() => k.getContextAttributes());
        return H ? Object.keys(H).sort().map(W => `${W}=${H[W]}`) : []
      },
      A = k => {
        if (!k) return [];
        const H = [];
        for (const [W, ce] of Object.entries(Rs)) {
          const ne = x(() => k.getExtension(W));
          if (ne)
            for (const ie of ce) {
              const F = ne[ie];
              if (typeof F != "number") continue;
              if (!Ds.has(ie)) {
                H.push(`${ie}=${F}`);
                continue
              }
              const j = x(() => k.getParameter(F));
              j == null ? H.push(`${ie}=${F}`) : typeof j == "object" && "length" in j ? H.push(`${ie}=${F}=${Array.from(j).join(",")}`) : H.push(`${ie}=${F}=${j}`)
            }
        }
        return H.sort()
      },
      T = k => {
        const H = k ? k.getExtension("WEBGL_debug_renderer_info") : null;
        return !H || !k ? {} : {
          UNMASKED_VENDOR_WEBGL: k.getParameter(H.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: k.getParameter(H.UNMASKED_RENDERER_WEBGL)
        }
      },
      N = k => {
        if (!k) return [];
        const H = x(() => k.getSupportedExtensions());
        return H || []
      },
      O = (k, H) => {
        if (!k) return {
          dataURI: void 0,
          pixels: void 0
        };
        try {
          Or(k);
          const {
            drawingBufferWidth: W,
            drawingBufferHeight: ce
          } = k;
          let ne = "";
          if (k.canvas.constructor.name === "OffscreenCanvas") {
            const $ = document.createElement("canvas"),
              re = Tn($, H);
            try {
              Or(re), ne = $.toDataURL()
            } finally {
              En($, re)
            }
          } else ne = k.canvas.toDataURL();
          const ie = W / 15,
            F = ce / 6,
            j = new Uint8Array(ie * F * 4);
          try {
            k.readPixels(0, 0, ie, F, k.RGBA, k.UNSIGNED_BYTE, j)
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
        } catch (W) {
          Z(W);
          return
        }
      };
    await se();
    const w = {
        ...C(d),
        ...T(d)
      },
      R = {
        ...C(g),
        ...T(g)
      },
      E = [];
    for (const k in R) {
      const H = w[k];
      !H || Is.has(k) || "" + H != "" + R[k] && E.push(k)
    }
    E.length && ue("webgl/webgl2 mirrored params mismatch", E.toString()), await se();
    const {
      dataURI: I,
      pixels: M
    } = O(d, "webgl") || {}, {
      dataURI: B,
      pixels: P
    } = O(g, "webgl2") || {}, U = {
      extensions: [...N(d), ...N(g)],
      contextAttributes: v(d),
      contextAttributes2: v(g),
      extensionParameters: A(d),
      extensionParameters2: A(g),
      pixels: M,
      pixels2: P,
      dataURI: I,
      dataURI2: B,
      parameters: {
        ...w,
        ...R,
        ...y("VERTEX_SHADER", h(d, "VERTEX_SHADER")),
        ...y("FRAGMENT_SHADER", h(d, "FRAGMENT_SHADER"))
      },
      parameterOrExtensionLie: _,
      lied: u
    }, ee = ["00b72507", "00c1b42d", "00fe1ec9", "02b3eea3", "0461d3de", "0463627d", "057857ac", "0586e20b", "0639a81a", "087d5759", "08847ba5", "0b2d4333", "0cdb985d", "0e058699", "0eb2fc19", "0f39d057", "0f840379", "0fc123c7", "101e0582", "12e92e62", "12f8ac14", "1453d59a", "149a1efa", "166dc7c8", "16c481a6", "171831c5", "177cc258", "18579e83", "19594666", "1b251fd7", "1bfd326c", "1e8a9a79", "1ff7c7e7", "2048bc5a", "2259b706", "22d0f2cf", "230d6a0d", "23d1ce20", "2402c3d2", "24306836", "258789d0", "25a760b8", "25f9385d", "27938830", "27db292c", "2b80fd96", "2bb488da", "2c04c2eb", "2d15287f", "2f014c41", "2f582ed9", "300ee927", "33bc5492", "34270469", "3660b71f", "3740c4c7", "3999a5e1", "39ead506", "3a91d0d6", "3b724916", "3bf321b8", "3c546144", "3f9ef44c", "3fea1100", "3ff82303", "4027d193", "402e1064", "4065cd69", "43038e3d", "4503e771", "461f97e1", "464d51ac", "467b99a5", "482c81b2", "48af038f", "4962ada1", "49bf7358", "4c9e8f5d", "502c402c", "508d1625", "52e348ba", "534002ab", "5582debe", "55d3aa56", "55e821f7", "581f3282", "5831d5fd", "58871380", "58fdc720", "5a5658f1", "5a90a5f8", "5aea1af1", "5b6a17aa", "5bef9a39", "5ca55292", "5d786cef", "5ddb9237", "5ee41456", "61178f2a", "61ca8e23", "61d9464e", "61eecaae", "623c3bfd", "6248d9e3", "6294d84e", "62bf7ef1", "6346cf49", "6357365c", "66628310", "668f0f93", "66d992e8", "67995996", "6843ebbf", "6864dcb0", "6951838b", "696e1548", "698c5c2e", "6a75ae3b", "6aa1ff7e", "6b07d4f8", "6b290cd4", "6c168801", "6dfae3cb", "6e806ffc", "6edf1720", "6f81cbe7", "70859bdb", "70a095b1", "7238c5dd", "7360ebd1", "741688e4", "74daf866", "78640859", "79284c47", "794f8929", "795e5c95", "79a57aa9", "7aa13573", "7b2e5242", "7b811cdd", "7ec0ea6b", "801d73af", "802e2547", "81b9cd29", "8219e1a4", "82a9a2f1", "8428fc8e", "849ccb64", "8541aa4c", "85479b99", "8bd0b91b", "8d371161", "903c8847", "917871e7", "98aeaba9", "99b1a1c6", "99ef2c3b", "9b67b7dc", "9c6df98c", "9c814c1b", "9e2b5e94", "9fd76352", "a1c808d5", "a22788f8", "a2383001", "a26e9aa9", "a397a568", "a3f9ee34", "a4b988da", "a4d34176", "a581f55e", "a5a477ae", "a9640880", "a97d3858", "aa73f3a4", "ab40bece", "ac4d4ba8", "ad01a422", "ade75c4f", "ae2c4777", "afa583bc", "b10c2a85", "b224cc7c", "b2d6fc98", "b362c2f5", "b467620a", "b4d40dcc", "b504662d", "b50edd99", "b5494027", "b62321c3", "b8961d15", "b8ea6e7f", "bb77a469", "bc0f9686", "bcf7315f", "be2dfaea", "beffda26", "bf06317e", "bf610cdb", "bfe1c212", "c00582e9", "c026469d", "c04889b1", "c04b0635", "c04e374a", "c05f7596", "c07307c6", "c092fdf8", "c25dd065", "c2bce496", "c5e9a883", "c79634c2", "c7e37ca0", "c93b5366", "c9bc4ffd", "cba1878b", "cbeade8c", "ce2e3d16", "cefb72ca", "cf9643e6", "cfd20274", "d05a66eb", "d09c1c07", "d1e76c89", "d2172943", "d2dc2474", "d498797d", "d6bf35ad", "d734ea08", "d860ff42", "d8bd9e5a", "d913dafa", "d970d345", "dbdbe7a4", "dc271c35", "dcd9a29e", "dd67b076", "de793ead", "ded74044", "df9daeb6", "e10339b3", "e142d1f9", "e155c47e", "e15afab0", "e16bb1bb", "e316e4c0", "e3eff92a", "e4569a5b", "e574bef6", "e5962ba3", "e6464c9f", "e68b5c4e", "e796b84e", "e8694547", "e965d180", "e965d541", "e9bdc904", "e9dbb8d5", "ea54d525", "ea59b343", "ea7f90ea", "ea8f5ad0", "eaa13804", "eb799d34", "ec050bb6", "ec928655", "eed2e5e1", "ef8f5db1", "f0d5a3c7", "f1077334", "f221fef5", "f2293447", "f33d918e", "f3c6ea11", "f51056a1", "f51cab9a", "f573bb34", "f5d19934", "f7451c92", "f8e65486", "f9714b3d", "fa994f33", "fafa14c0", "fc37fe1f", "fca66520", "fe0997b6"], we = [-1056897629, -1056946782, -1073719331, -1147160399, -1147160553, -1147168724, -1147419751, -1147419753, -1147419775, -1147427826, -1147451883, -1147451901, -1147464169, -1147464177, -1147488144, -1147602934, -1147643759, -1147643872, -1147765274, -1148326739, -1148335070, -1148572354, -1148678631, -1148680509, -1148713259, -1164279890, -1164800191, -1164800478, -1332029332, -133757475, -1342154787, -134823971, -16746546, -1878102921, -1878111124, -1962893370, -1962919974, -1962928178, -2130164162, -2130164382, -2130164388, -2130164546, -2130172573, -2130659912, -2145933648, -2145941977, -2145958228, -2145966414, -2145966441, -2145966529, -2145966535, -2145966545, -2145970658, -2145974343, -2145974380, -2145974489, -2145974596, -2145974598, -2145974612, -2145974637, -2145974657, -2145974729, -2146187766, -2146232338, -2146232480, -2146232503, -2146232590, -2146232723, -2146232724, -2146236588, -2146236703, -2146237020, -2146251619, -2146251641, -2146251681, -2146253671, -2146253693, -2146277218, -2146286438, -2146286463, -2146286583, -2146319268, -2146376065, -2146379955, -2146384003, -2146384011, -2146384027, -2146384034, -2146384120, -2146384281, -2146398568, -2146400384, -2146400556, -2146400620, -2146401928, -2146417027, -2146526795, -2146526934, -2147125544, -2147128275, -2147133747, -2147133749, -2147133760, -2147134974, -2147136328, -2147142429, -2147287810, -2147287811, -2147287820, -2147287834, -2147287835, -2147287854, -2147291718, -2147291820, -2147293058, -2147295768, -2147295822, -2147295823, -2147295849, -2147295857, -2147300019, -2147304193, -2147304219, -2147306321, -2147316382, -2147316383, -2147333118, -2147336998, -2147337003, -2147337012, -2147337022, -2147344686, -2147346747, -2147361652, -2147361731, -2147361769, -2147361774, -2147361775, -2147361778, -2147361792, -2147362760, -2147365698, -2147365730, -2147365759, -2147365760, -2147365827, -2147365863, -2147373914, -2147373984, -2147374032, -2147374080, -2147378041, -2147378146, -2147382130, -2147382221, -2147382251, -2147382270, -2147382272, -2147383246, -2147385825, -2147385849, -2147386292, -2147386326, -2147387335, -2147387364, -2147389930, -2147389937, -2147389951, -2147390461, -2147394188, -2147394251, -2147394484, -2147400057, -2147406798, -2147407643, -2147407821, -2147410938, -2147410941, -2147414733, -2147414956, -2147414987, -2147415037, -2147429201, -2147429223, -2147439020, -2147440422, -2147447111, -2147447122, -2147447126, -2147447137, -2147447149, -2147447157, -2147447161, -2147447163, -2147447873, -2147447892, -2147447896, -2147447928, -2147448592, -2147453701, -2147453767, -2147453768, -2147459031, -2147461169, -2147466956, -2147466972, -2147467172, -2147470173, -2147475351, -2147475352, -638494755, -671082546, -677558160, -999987216, 1099536, 1099644, 1147714426, 1197075, 1229835, 1508998, 1509050, 1610618841, 184555483, 2146590728, 2147305224, 2147361749, 2147440438, 2147475085, 2147479181, 21667, 349912, 351513, 83625, 998804992, 998911268, 999148597, 999156922];
    let de;
    if (U.parameters) {
      const k = new Set;
      for (const H in U.parameters) {
        const W = U.parameters[H];
        if (!(!W || typeof W == "string"))
          if (Array.isArray(W))
            for (const ce of W) k.add(Number(ce));
          else k.add(Number(W))
      }
      de = [...k].sort((H, W) => H - W)
    }
    const G = hi((o = U.parameters) == null ? void 0 : o.UNMASKED_RENDERER_WEBGL),
      Ee = "" + de,
      ve = !G || !Ee ? void 0 : K([G, Ee]),
      Ne = de ? de.reduce((k, H, W) => k ^ +H + W, 0) : void 0;
    Be.webglParams = Ee, Be.webglBrandCapabilities = ve, Be.webglCapabilities = Ne;
    const Oe = ve && !ee.includes(ve),
      rt = Ne && !we.includes(Ne);
    return Oe && (ke.WEBGL = !0, ue("WebGLRenderingContext.getParameter", "suspicious gpu")), rt && (ke.WEBGL = !0, ue("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...U,
      gpu: {
        ...po((U.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: fo((U.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (a) {
    Z(a);
    return
  } finally {
    En(t, e), En(n, r)
  }
}

function En(t, n) {
  var e;
  if (t) {
    try {
      (e = n == null ? void 0 : n.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    t.width = 0, t.height = 0, t instanceof HTMLCanvasElement && t.remove()
  }
}

function Tn(t, n) {
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
async function Cs() {
  var n, e, r, o, a, s, i, c, _, u, p, f, d, g, h, y, C, v, A, T, N, O, w, R, E, I, M, B, P, U, ee, we, de;
  const t = await ks();
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
        platformVersion: (s = t.workerScope.userAgentData) == null ? void 0 : s.platformVersion
      }
    } : void 0,
    screen: t.screen ? {
      height: t.screen.height,
      width: t.screen.width,
      pixelDepth: t.screen.pixelDepth,
      colorDepth: t.screen.colorDepth
    } : void 0,
    media: t.media,
    canvas2d: {
      ...(i = t.canvas2d) != null && i.lied ? {} : {
        dataURI: (c = t.canvas2d) == null ? void 0 : c.lied,
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
      reducedMotion: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS["prefers-reduced-motion"]
      }),
      monochrome: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS.monochrome
      }),
      invertedColors: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS["inverted-colors"]
      }),
      forcedColors: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS["forced-colors"]
      }),
      colorGamut: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS["color-gamut"]
      }),
      hdr: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS["dynamic-range"]
      }),
      contrast: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS["prefers-contrast"]
      }),
      reducedTransparency: Se(() => {
        var G;
        return (G = t.cssMedia) == null ? void 0 : G.mediaCSS["prefers-reduced-transparency"]
      })
    } : void 0,
    css: t.css ? (y = (h = t.css) == null ? void 0 : h.system) == null ? void 0 : y.fonts : void 0,
    timezone: t.timezone,
    offlineAudioContext: (C = t.offlineAudioContext) != null && C.lied ? void 0 : {
      binsSample: (v = t.offlineAudioContext) == null ? void 0 : v.binsSample,
      compressorGainReduction: (A = t.offlineAudioContext) == null ? void 0 : A.compressorGainReduction,
      copySample: (T = t.offlineAudioContext) == null ? void 0 : T.copySample,
      floatFrequencyDataSum: (N = t.offlineAudioContext) == null ? void 0 : N.floatFrequencyDataSum,
      floatTimeDomainDataSum: (O = t.offlineAudioContext) == null ? void 0 : O.floatTimeDomainDataSum,
      lied: (w = t.offlineAudioContext) == null ? void 0 : w.lied,
      noise: (R = t.offlineAudioContext) == null ? void 0 : R.noise,
      totalUniqueSamples: (E = t.offlineAudioContext) == null ? void 0 : E.totalUniqueSamples,
      values: (I = t.offlineAudioContext) == null ? void 0 : I.values
    },
    fonts: t.fonts ? t.fonts.fontFaceLoadFonts : void 0,
    intl: !t.intl || t.intl.lied ? void 0 : {
      dateTimeFormat: (M = t.intl) == null ? void 0 : M.dateTimeFormat,
      lied: (B = t.intl) == null ? void 0 : B.lied,
      listFormat: (P = t.intl) == null ? void 0 : P.listFormat,
      locale: (U = t.intl) == null ? void 0 : U.locale,
      numberFormat: (ee = t.intl) == null ? void 0 : ee.numberFormat,
      pluralRules: (we = t.intl) == null ? void 0 : we.pluralRules,
      relativeTimeFormat: (de = t.intl) == null ? void 0 : de.relativeTimeFormat
    },
    voices: t.voices ? {
      local: t.voices.local,
      defaultVoiceName: t.voices.defaultVoiceName,
      defaultVoiceLang: t.voices.defaultVoiceLang
    } : void 0,
    resistance: t.resistance
  }
}
async function ks() {
  try {
    const [t, n, e, r, o, a, s, i, c, _, u, p, f, d] = await Promise.all([ge("voices", Ts()), ge("offlineAudioContext", ji()), ge("canvasWebgl", Ns()), ge("canvas2d", Vi()), ge("css", Promise.resolve(zi())), ge("cssMedia", Promise.resolve($i())), ge("screen", Es()), ge("consoleErrors", Promise.resolve(Ki())), ge("timezone", Promise.resolve(Ss())), ge("fonts", os()), ge("media", _s()), ge("resistance", bs()), ge("intl", ls()), ge("workerScope", Hi())]), [g, h, y, C, v] = await Promise.all([ge("navigator", fs(d)), ge("headless", us({
      webgl: e
    })), ge("lies", Promise.resolve(Ci())), ge("trash", Promise.resolve(Mi())), ge("capturedErrors", Promise.resolve(di()))]), [A, T] = await Promise.all([mr((e == null ? void 0 : e.pixels) ?? []), mr((e == null ? void 0 : e.pixels2) ?? [])]);
    return {
      navigator: g,
      headless: h,
      cssMedia: a,
      css: o,
      screen: s,
      voices: t,
      media: u,
      canvas2d: r,
      canvasWebgl: {
        ...e,
        pixels: A,
        pixels2: T
      },
      consoleErrors: i,
      timezone: c,
      offlineAudioContext: n,
      fonts: _,
      lies: y,
      trash: C,
      capturedErrors: v,
      resistance: p,
      intl: f,
      workerScope: d
    }
  } finally {
    Ii()
  }
}

function ge(t, n) {
  return n.catch(() => {})
}
let Yt;
async function xs() {
  if (Yt) try {
    return await Yt
  } catch {}
  return Yt = (async () => {
    var a, s, i, c, _, u, p, f, d, g, h, y, C, v, A, T, N, O, w, R, E, I, M, B, P, U, ee, we, de, G, Ee, ve, Ne, Oe, rt, k, H, W, ce, ne, ie, F, j, $, re, _e, fe, Fe, xe, $e, Xt, Vn, zn, $n, qn, Kn, Xn, Yn, Jn, Qn, Zn, er, tr, nr, rr, or, ar;
    const t = await Cs();
    switch ((a = t.navigator) != null && a.lied && t.screen && (t.screen.width = 0, t.screen.height = 0), Do({
        userAgent: (s = t.workerScope) == null ? void 0 : s.userAgent
      })) {
      case "Firefox":
        delete t.intl, t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI), t.canvasWebgl && (delete t.canvasWebgl.dataURI, delete t.canvasWebgl.dataURI2);
        break;
      case "Brave":
        t.navigator && (delete t.navigator.deviceMemory, delete t.navigator.hardwareConcurrency), t.workerScope && (delete t.workerScope.deviceMemory, delete t.workerScope.hardwareConcurrency), t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI), t.canvasWebgl && (delete t.canvasWebgl.dataURI, delete t.canvasWebgl.dataURI2, delete t.canvasWebgl.parameters), t.offlineAudioContext && (delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.floatTimeDomainDataSum, delete t.offlineAudioContext.sampleSum, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.noise), t.fonts && delete t.fonts;
      case "Safari":
        t.canvas2d && delete t.canvas2d.mods, t.offlineAudioContext && (delete t.offlineAudioContext.baseLatency, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.totalUniqueSamples, delete t.offlineAudioContext.noise)
    }
    const e = (i = t.navigator) == null ? void 0 : i.lied;
    t.navigator && delete t.navigator.lied, t.workerScope && delete t.workerScope.userAgent;
    const r = await Promise.all([S(t.navigator), S(t.workerScope), S(t.screen), S(t.media), "a0", S(t.canvas2d), S(t.canvasWebgl), S(t.cssMedia), S(t.css), S(t.voices), S(t.timezone), S(t.offlineAudioContext), S(t.fonts), S(t.intl), "KZ", "wF"]),
      o = await Promise.all([S((c = t.canvas2d) == null ? void 0 : c.dataURI), S((_ = t.canvas2d) == null ? void 0 : _.emojiSet), S((u = t.canvas2d) == null ? void 0 : u.emojiURI), S((p = t.canvas2d) == null ? void 0 : p.paintURI), S((f = t.canvas2d) == null ? void 0 : f.textMetricsSystemSum), S((d = t.canvas2d) == null ? void 0 : d.textURI), "|", S((g = t.offlineAudioContext) == null ? void 0 : g.binsSample), S((h = t.offlineAudioContext) == null ? void 0 : h.compressorGainReduction), S((y = t.offlineAudioContext) == null ? void 0 : y.copySample), S((C = t.offlineAudioContext) == null ? void 0 : C.floatFrequencyDataSum), S((v = t.offlineAudioContext) == null ? void 0 : v.floatTimeDomainDataSum), S((A = t.offlineAudioContext) == null ? void 0 : A.lied), S((T = t.offlineAudioContext) == null ? void 0 : T.noise), S((N = t.offlineAudioContext) == null ? void 0 : N.totalUniqueSamples), S((O = t.offlineAudioContext) == null ? void 0 : O.values), "|", S(t.intl), "|", S((w = t.intl) == null ? void 0 : w.dateTimeFormat), S((R = t.intl) == null ? void 0 : R.lied), S((E = t.intl) == null ? void 0 : E.listFormat), S((I = t.intl) == null ? void 0 : I.locale), S((M = t.intl) == null ? void 0 : M.numberFormat), S((B = t.intl) == null ? void 0 : B.pluralRules), S((P = t.intl) == null ? void 0 : P.relativeTimeFormat), "|", S((U = t.voices) == null ? void 0 : U.defaultVoiceLang), S((ee = t.voices) == null ? void 0 : ee.defaultVoiceName), S((we = t.voices) == null ? void 0 : we.local), "|", S(e), S((de = t.navigator) == null ? void 0 : de.applePay), S((G = t.navigator) == null ? void 0 : G.bluetoothAvailability), S((Ee = t.navigator) == null ? void 0 : Ee.deviceMemory), S((ve = t.navigator) == null ? void 0 : ve.hardwareConcurrency), S((Ne = t.navigator) == null ? void 0 : Ne.oscpu), S((Oe = t.navigator) == null ? void 0 : Oe.pdfViewerEnabled), S((rt = t.navigator) == null ? void 0 : rt.platform), S((k = t.navigator) == null ? void 0 : k.privateClickMeasurement), S((H = t.navigator) == null ? void 0 : H.vendor), "|", S((W = t.workerScope) == null ? void 0 : W.deviceMemory), S((ce = t.workerScope) == null ? void 0 : ce.hardwareConcurrency), S((ne = t.workerScope) == null ? void 0 : ne.platform), S((ie = t.workerScope) == null ? void 0 : ie.system), S((F = t.workerScope) == null ? void 0 : F.userAgentData), "|", S((j = t.cssMedia) == null ? void 0 : j.colorGamut), S(($ = t.cssMedia) == null ? void 0 : $.contrast), S((re = t.cssMedia) == null ? void 0 : re.forcedColors), S((_e = t.cssMedia) == null ? void 0 : _e.hdr), S((fe = t.cssMedia) == null ? void 0 : fe.invertedColors), S((Fe = t.cssMedia) == null ? void 0 : Fe.monochrome), S((xe = t.cssMedia) == null ? void 0 : xe.reducedMotion), S(($e = t.cssMedia) == null ? void 0 : $e.reducedTransparency), "|", S((Xt = t.canvasWebgl) == null ? void 0 : Xt.contextAttributes2), S((Vn = t.canvasWebgl) == null ? void 0 : Vn.contextAttributes), S((zn = t.canvasWebgl) == null ? void 0 : zn.dataURI2), S(($n = t.canvasWebgl) == null ? void 0 : $n.dataURI), S((qn = t.canvasWebgl) == null ? void 0 : qn.extensionParameters2), S((Kn = t.canvasWebgl) == null ? void 0 : Kn.extensionParameters), S((Xn = t.canvasWebgl) == null ? void 0 : Xn.extensions), S((Yn = t.canvasWebgl) == null ? void 0 : Yn.gpu), S((Jn = t.canvasWebgl) == null ? void 0 : Jn.lied), S((Qn = t.canvasWebgl) == null ? void 0 : Qn.parameterOrExtensionLie), S((Zn = t.canvasWebgl) == null ? void 0 : Zn.parameters), S((er = t.canvasWebgl) == null ? void 0 : er.pixels), S((tr = t.canvasWebgl) == null ? void 0 : tr.pixels2), "|", S((nr = t.screen) == null ? void 0 : nr.colorDepth), S((rr = t.screen) == null ? void 0 : rr.height), S((or = t.screen) == null ? void 0 : or.pixelDepth), S((ar = t.screen) == null ? void 0 : ar.width)]);
    return r.map(hn => hn.slice(0, 2)).join("").padEnd(32, "0").slice(0, 32) + "|" + o.map(hn => hn[0]).join("")
  })(), Yt
}
const Rr = "theme";
var Tt, St, At, Ot, Rt, Dt, It, Nt, Ct, kt;
class Ps {
  constructor() {
    J(this, Tt, me(!1));
    J(this, St, me(!1));
    J(this, At, me(0));
    J(this, Ot, me(!1));
    J(this, Rt, me(rn(Ls())));
    J(this, Dt, me(null));
    J(this, It, me(!1));
    J(this, Nt, me("custom-winter"));
    J(this, Ct, me(rn(Date.now())));
    J(this, kt, me(void 0));
    setInterval(() => {
      oe(L(this, Ct), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Rr), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return te(L(this, Tt))
  }
  set dropletsDialogOpen(n) {
    oe(L(this, Tt), n, !0)
  }
  get storeDialogOpen() {
    return te(L(this, St))
  }
  set storeDialogOpen(n) {
    oe(L(this, St), n, !0)
  }
  get storeTabIndex() {
    return te(L(this, At))
  }
  set storeTabIndex(n) {
    oe(L(this, At), n, !0)
  }
  get muted() {
    return te(L(this, Ot))
  }
  set muted(n) {
    oe(L(this, Ot), n, !0)
  }
  get language() {
    return te(L(this, Rt))
  }
  set language(n) {
    oe(L(this, Rt), n, !0)
  }
  get map() {
    return te(L(this, Dt))
  }
  set map(n) {
    oe(L(this, Dt), n)
  }
  get automatedClicks() {
    return te(L(this, It))
  }
  set automatedClicks(n) {
    oe(L(this, It), n, !0)
  }
  get theme() {
    return te(L(this, Nt))
  }
  set theme(n) {
    oe(L(this, Nt), n, !0), localStorage.setItem(Rr, n), document.documentElement.setAttribute("data-theme", n)
  }
  get now() {
    return te(L(this, Ct))
  }
  get captcha() {
    return Ms ? te(L(this, kt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(n) {
    oe(L(this, kt), n, !0)
  }
}
Tt = new WeakMap, St = new WeakMap, At = new WeakMap, Ot = new WeakMap, Rt = new WeakMap, Dt = new WeakMap, It = new WeakMap, Nt = new WeakMap, Ct = new WeakMap, kt = new WeakMap;
const ho = new Ps;

function Ls() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(n => n.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Ms = Io.toLowerCase() !== "false",
  Bs = `
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
async function Us() {
  try {
    const t = await fetch(`${Bn}/anticheat/pow/challenge`, {
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
    const r = new Blob([Bs], {
        type: "application/javascript"
      }),
      o = URL.createObjectURL(r),
      a = new Worker(o),
      s = setTimeout(() => {
        a.terminate(), URL.revokeObjectURL(o), e(null)
      }, 12e4);
    a.onmessage = i => {
      clearTimeout(s), a.terminate(), URL.revokeObjectURL(o), i.data.error ? e(null) : e(i.data.nonce)
    }, a.onerror = () => {
      clearTimeout(s), a.terminate(), URL.revokeObjectURL(o), e(null)
    }, a.postMessage({
      prefix: t,
      difficulty: n
    })
  })
}
const go = 3;
var xt, Pt;
class Fs {
  constructor() {
    J(this, xt, me(null));
    J(this, Pt, me(0))
  }
  get current() {
    return te(L(this, xt))
  }
  set current(n) {
    oe(L(this, xt), n, !0)
  }
  get errorCount() {
    return te(L(this, Pt))
  }
  set errorCount(n) {
    oe(L(this, Pt), n, !0)
  }
}
xt = new WeakMap, Pt = new WeakMap;
const Ae = new Fs;
async function Dr(t) {
  if (t === 1) return js();
  if (t === 2) {
    const n = await yo();
    return n ? Ir("turnstile", n) : !1
  }
  if (t === 3) {
    const n = await Gs();
    return n ? Ir("hcaptcha", n) : !1
  }
  return t === 4 ? Ws() : !1
}
async function js() {
  for (let t = 0; t < go; t++) try {
    const n = await Us();
    if (!n) continue;
    return await ze.verifyChallenge({
      type: "pow",
      challengeId: n.challengeId,
      nonce: n.nonce
    }), !0
  } catch {}
  return !1
}
async function Ir(t, n) {
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
const dt = {};

function yo() {
  return wo(2)
}

function Gs() {
  return wo(3)
}

function wo(t) {
  const n = dt[t];
  if (n) return n;
  const e = new Promise(r => {
    Ae.errorCount = 0, Ae.current = {
      tier: t,
      resolve: o => {
        delete dt[t], r(o)
      }
    }
  });
  return dt[t] = e, e
}

function Ws() {
  const t = dt[4];
  if (t) return t;
  const n = new Promise(e => {
    Ae.errorCount = 0, Ae.current = {
      tier: 4,
      resolve: r => {
        delete dt[4], e(r)
      }
    }
  });
  return dt[4] = n, n
}

function nT(t) {
  const n = Ae.current;
  !n || n.tier === 4 || (n.resolve(t), Ae.current = null)
}

function rT() {
  const t = Ae.current;
  !t || t.tier === 4 || (Ae.errorCount += 1, Ae.errorCount >= go && (t.resolve(void 0), Ae.current = null))
}

function oT() {
  const t = Ae.current;
  !t || t.tier !== 4 || (t.resolve(!0), Ae.current = null)
}

function aT() {
  const t = Ae.current;
  t && (t.tier === 4 ? t.resolve(!1) : t.resolve(void 0), Ae.current = null)
}
var l = (t => (t[t.CONTINUE = 100] = "CONTINUE", t[t.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", t[t.PROCESSING = 102] = "PROCESSING", t[t.EARLY_HINTS = 103] = "EARLY_HINTS", t[t.OK = 200] = "OK", t[t.CREATED = 201] = "CREATED", t[t.ACCEPTED = 202] = "ACCEPTED", t[t.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", t[t.NO_CONTENT = 204] = "NO_CONTENT", t[t.RESET_CONTENT = 205] = "RESET_CONTENT", t[t.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", t[t.MULTI_STATUS = 207] = "MULTI_STATUS", t[t.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", t[t.IM_USED = 226] = "IM_USED", t[t.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", t[t.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", t[t.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", t[t.FOUND = 302] = "FOUND", t[t.SEE_OTHER = 303] = "SEE_OTHER", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.USE_PROXY = 305] = "USE_PROXY", t[t.SWITCH_PROXY = 306] = "SWITCH_PROXY", t[t.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", t[t.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZED = 401] = "UNAUTHORIZED", t[t.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", t[t.FORBIDDEN = 403] = "FORBIDDEN", t[t.NOT_FOUND = 404] = "NOT_FOUND", t[t.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", t[t.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", t[t.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", t[t.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", t[t.CONFLICT = 409] = "CONFLICT", t[t.GONE = 410] = "GONE", t[t.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", t[t.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", t[t.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", t[t.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", t[t.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", t[t.URI_TOO_LONG = 414] = "URI_TOO_LONG", t[t.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", t[t.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", t[t.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", t[t.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", t[t.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", t[t.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", t[t.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", t[t.LOCKED = 423] = "LOCKED", t[t.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", t[t.TOO_EARLY = 425] = "TOO_EARLY", t[t.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", t[t.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", t[t.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", t[t.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", t[t.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", t[t.BAD_GATEWAY = 502] = "BAD_GATEWAY", t[t.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", t[t.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", t[t.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", t[t.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", t[t.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", t[t.LOOP_DETECTED = 508] = "LOOP_DETECTED", t[t.NOT_EXTENDED = 510] = "NOT_EXTENDED", t[t.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", t[t.AWS_ELB_000 = 0] = "AWS_ELB_000", t[t.THIS_IS_FINE = 218] = "THIS_IS_FINE", t[t.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", t[t.METHOD_FAILURE = 420] = "METHOD_FAILURE", t[t.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", t[t.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", t[t.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", t[t.NO_RESPONSE = 444] = "NO_RESPONSE", t[t.RETRY_WITH = 449] = "RETRY_WITH", t[t.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", t[t.REDIRECT_IIS = 451] = "REDIRECT_IIS", t[t.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", t[t.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", t[t.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", t[t.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", t[t.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", t[t.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", t[t.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", t[t.INVALID_TOKEN = 498] = "INVALID_TOKEN", t[t.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", t[t.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", t[t.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", t[t.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", t[t.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", t[t.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", t[t.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", t[t.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", t[t.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", t[t.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", t[t.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", t[t.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", t[t.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", t[t.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", t[t.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", t[t.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", t[t.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", t[t.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", t[t.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", t[t.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", t[t.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", t[t.REQUEST_DENIED = 999] = "REQUEST_DENIED", t))(l || {});
const Vs = () => "Your account has been suspended for breaking the rules",
  zs = () => "Sua conta foi suspensa por quebrar as regras",
  $s = () => "您的账号因违反规则已被暂停",
  qs = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Ks = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Xs = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Ys = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Js = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Qs = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Zs = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  ec = () => "Ваш обліковий запис було призупинено за порушення правил",
  tc = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  nc = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Vs() : e === "pt" ? zs() : e === "ch" ? $s() : e === "de" ? qs() : e === "es" ? Ks() : e === "fr" ? Xs() : e === "it" ? Ys() : e === "jp" ? Js() : e === "pl" ? Qs() : e === "ru" ? Zs() : e === "uk" ? ec() : tc()
  },
  rc = () => "Alliance name already taken",
  oc = () => "Já possui uma aliança com esse nome",
  ac = () => "该联盟名称已被占用",
  ic = () => "Der Allianzname ist bereits vergeben",
  sc = () => "Ese nombre de alianza ya está en uso",
  cc = () => "Ce nom d’alliance est déjà pris",
  uc = () => "Esiste già un'alleanza con questo nome",
  lc = () => "このアライアンス名は既に使用されています。",
  dc = () => "Nazwa sojuszu jest już zajęta",
  _c = () => "Такое название альянса уже используется",
  fc = () => "Назва альянсу вже зайнята",
  pc = () => "Tên liên minh đã được sử dụng",
  mc = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? rc() : e === "pt" ? oc() : e === "ch" ? ac() : e === "de" ? ic() : e === "es" ? sc() : e === "fr" ? cc() : e === "it" ? uc() : e === "jp" ? lc() : e === "pl" ? dc() : e === "ru" ? _c() : e === "uk" ? fc() : pc()
  },
  hc = () => "Alliance name exceeded the maximum number of characters",
  gc = () => "O nome da aliança excedeu o número máximo de caracteres",
  yc = () => "联盟名称超过最大字符数限制",
  wc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  bc = () => "El nombre de la alianza superó el número máximo de caracteres",
  vc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Ec = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Tc = () => "アライアンス名が最大文字数を超えています。",
  Sc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Ac = () => "Название альянса превышает максимальную длину",
  Oc = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Rc = () => "Tên liên minh vượt quá số ký tự cho phép",
  Dc = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? hc() : e === "pt" ? gc() : e === "ch" ? yc() : e === "de" ? wc() : e === "es" ? bc() : e === "fr" ? vc() : e === "it" ? Ec() : e === "jp" ? Tc() : e === "pl" ? Sc() : e === "ru" ? Ac() : e === "uk" ? Oc() : Rc()
  },
  Ic = () => "Alliance with empty name",
  Nc = () => "Aliança com nome vazio",
  Cc = () => "名称为空的联盟",
  kc = () => "Allianz mit leerem Namen",
  xc = () => "Alianza con nombre vacío",
  Pc = () => "Alliance avec nom vide",
  Lc = () => "Alleanza con nome vuoto",
  Mc = () => "名前が空のアライアンスです。",
  Bc = () => "Sojusz z pustą nazwą",
  Uc = () => "Альянс с пустым названием",
  Hc = () => "Альянс із порожньою назвою",
  Fc = () => "Liên minh không có tên",
  jc = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Ic() : e === "pt" ? Nc() : e === "ch" ? Cc() : e === "de" ? kc() : e === "es" ? xc() : e === "fr" ? Pc() : e === "it" ? Lc() : e === "jp" ? Mc() : e === "pl" ? Bc() : e === "ru" ? Uc() : e === "uk" ? Hc() : Fc()
  },
  Gc = () => "Botting",
  Wc = () => "Uso de bots",
  Vc = () => "脚本",
  zc = () => "Bot-Nutzung",
  $c = () => "Botting",
  qc = () => "Bots",
  Kc = () => "Uso di bot",
  Xc = () => "ボット使用",
  Yc = () => "Botting",
  Jc = () => "Боттинг",
  Qc = () => "Боти",
  Zc = () => "Botting",
  eu = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Gc() : e === "pt" ? Wc() : e === "ch" ? Vc() : e === "de" ? zc() : e === "es" ? $c() : e === "fr" ? qc() : e === "it" ? Kc() : e === "jp" ? Xc() : e === "pl" ? Yc() : e === "ru" ? Jc() : e === "uk" ? Qc() : Zc()
  },
  tu = () => "Use of software to completely automate painting",
  nu = () => "Uso de software para pintar de forma completamente automatizada ",
  ru = () => "使用软件完全自动化绘制",
  ou = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  au = () => "Uso de software para automatizar completamente la pintura",
  iu = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  su = () => "Uso di software per dipingere in modo completamente automatizzato",
  cu = () => "ペイントを完全に自動化するソフトウェアの使用",
  uu = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  lu = () => "Использование программ для полной автоматизации рисования",
  du = () => "Використання програм, які повністю автоматизують малювання",
  _u = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  fu = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? tu() : e === "pt" ? nu() : e === "ch" ? ru() : e === "de" ? ou() : e === "es" ? au() : e === "fr" ? iu() : e === "it" ? su() : e === "jp" ? cu() : e === "pl" ? uu() : e === "ru" ? lu() : e === "uk" ? du() : _u()
  },
  pu = () => "Breaking the rules",
  mu = () => "Quebrar as regras",
  hu = () => "违反规则",
  gu = () => "Regeln brechen",
  yu = () => "Romper las reglas",
  wu = () => "Violation des règles",
  bu = () => "Violazione delle regole",
  vu = () => "ルール違反",
  Eu = () => "Łamanie zasad",
  Tu = () => "Нарушение правил",
  Su = () => "Порушення правил",
  Au = () => "Vi phạm luật",
  Ou = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? pu() : e === "pt" ? mu() : e === "ch" ? hu() : e === "de" ? gu() : e === "es" ? yu() : e === "fr" ? wu() : e === "it" ? bu() : e === "jp" ? vu() : e === "pl" ? Eu() : e === "ru" ? Tu() : e === "uk" ? Su() : Au()
  },
  Ru = () => "You have broken one of Wplace's rules",
  Du = () => "Você quebrou uma das regras do Wplace",
  Iu = () => "你违反了 Wplace 的一项规则",
  Nu = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Cu = () => "Has infringido una de las reglas de Wplace",
  ku = () => "Vous avez enfreint l’une des règles de Wplace",
  xu = () => "Hai infranto una delle regole di Wplace",
  Pu = () => "Wplaceのルールのいずれかに違反しました。",
  Lu = () => "Złamałeś jedną z zasad Wplace",
  Mu = () => "Вы нарушили одно из правил Wplace",
  Bu = () => "Ви порушили одне з правил Wplace",
  Uu = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Hu = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Ru() : e === "pt" ? Du() : e === "ch" ? Iu() : e === "de" ? Nu() : e === "es" ? Cu() : e === "fr" ? ku() : e === "it" ? xu() : e === "jp" ? Pu() : e === "pl" ? Lu() : e === "ru" ? Mu() : e === "uk" ? Bu() : Uu()
  },
  Fu = () => "You cannot paint over event pixels",
  ju = () => "Você não pode pintar sobre pixels de eventos",
  Gu = () => "你不能覆盖活动像素",
  Wu = () => "Du kannst nicht über Event-Pixel malen",
  Vu = () => "No puedes pintar sobre píxeles de evento",
  zu = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  $u = () => "Non puoi dipingere sopra i pixel dell'evento",
  qu = () => "イベント用のピクセルの上には塗れません。",
  Ku = () => "Nie możesz malować po pikselach wydarzenia",
  Xu = () => "Вы не можете рисовать по пикселям события",
  Yu = () => "Ви не можете малювати поверх пікселів події",
  Ju = () => "Bạn không thể tô lên pixel sự kiện",
  Nr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Fu() : e === "pt" ? ju() : e === "ch" ? Gu() : e === "de" ? Wu() : e === "es" ? Vu() : e === "fr" ? zu() : e === "it" ? $u() : e === "jp" ? qu() : e === "pl" ? Ku() : e === "ru" ? Xu() : e === "uk" ? Yu() : Ju()
  },
  Qu = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Zu = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  el = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  tl = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  nl = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  rl = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  ol = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  al = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  il = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  sl = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  cl = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  ul = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  ll = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Qu() : e === "pt" ? Zu() : e === "ch" ? el() : e === "de" ? tl() : e === "es" ? nl() : e === "fr" ? rl() : e === "it" ? ol() : e === "jp" ? al() : e === "pl" ? il() : e === "ru" ? sl() : e === "uk" ? cl() : ul()
  },
  dl = () => "Challenge verification not completed",
  _l = () => "Verificação do desafio não concluída",
  fl = () => "挑战验证未完成",
  pl = () => "Herausforderungsverifizierung nicht abgeschlossen",
  ml = () => "Verificación del desafío no completada",
  hl = () => "Vérification du défi non terminée",
  gl = () => "Verifica della sfida non completata",
  yl = () => "チャレンジ検証が完了していません",
  wl = () => "Weryfikacja wyzwania niezakończona",
  bl = () => "Верификация вызова не завершена",
  vl = () => "Перевірку виклику не завершено",
  El = () => "Xác minh thử thách chưa hoàn thành",
  Sn = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? dl() : e === "pt" ? _l() : e === "ch" ? fl() : e === "de" ? pl() : e === "es" ? ml() : e === "fr" ? hl() : e === "it" ? gl() : e === "jp" ? yl() : e === "pl" ? wl() : e === "ru" ? bl() : e === "uk" ? vl() : El()
  },
  Tl = () => "Couldn't complete the purchase. This item does not exist.",
  Sl = () => "Não foi possível concluir a compra. Este item não existe.",
  Al = () => "无法完成购买。该物品不存在。",
  Ol = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Rl = () => "No se pudo completar la compra. Este ítem no existe.",
  Dl = () => "Achat impossible. Cet objet n’existe pas.",
  Il = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Nl = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Cl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  kl = () => "Не удалось завершить покупку. Этот предмет не существует.",
  xl = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Pl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Cr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Tl() : e === "pt" ? Sl() : e === "ch" ? Al() : e === "de" ? Ol() : e === "es" ? Rl() : e === "fr" ? Dl() : e === "it" ? Il() : e === "jp" ? Nl() : e === "pl" ? Cl() : e === "ru" ? kl() : e === "uk" ? xl() : Pl()
  },
  Ll = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Ml = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Bl = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Ul = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Hl = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Fl = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  jl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Gl = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Wl = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  Vl = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  zl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  $l = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  ql = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Ll() : e === "pt" ? Ml() : e === "ch" ? Bl() : e === "de" ? Ul() : e === "es" ? Hl() : e === "fr" ? Fl() : e === "it" ? jl() : e === "jp" ? Gl() : e === "pl" ? Wl() : e === "ru" ? Vl() : e === "uk" ? zl() : $l()
  },
  Kl = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Xl = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Yl = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Jl = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Ql = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Zl = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  ed = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  td = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  nd = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  rd = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  od = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  ad = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  kr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Kl() : e === "pt" ? Xl() : e === "ch" ? Yl() : e === "de" ? Jl() : e === "es" ? Ql() : e === "fr" ? Zl() : e === "it" ? ed() : e === "jp" ? td() : e === "pl" ? nd() : e === "ru" ? rd() : e === "uk" ? od() : ad()
  },
  id = () => "Doxxing",
  sd = () => "Doxxing",
  cd = () => "人肉搜索",
  ud = () => "Doxxing",
  ld = () => "Doxxing",
  dd = () => "Doxxing",
  _d = () => "Doxxing",
  fd = () => "ドックス（Doxxing）",
  pd = () => "Doxxing",
  md = () => "Докcинг",
  hd = () => "Докcинг",
  gd = () => "Doxxing",
  yd = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? id() : e === "pt" ? sd() : e === "ch" ? cd() : e === "de" ? ud() : e === "es" ? ld() : e === "fr" ? dd() : e === "it" ? _d() : e === "jp" ? fd() : e === "pl" ? pd() : e === "ru" ? md() : e === "uk" ? hd() : gd()
  },
  wd = () => "Released other's personal information without their consent",
  bd = () => "Vazar informações pessoais de terceiros sem consentimento",
  vd = () => "在未获同意的情况下公开他人个人信息",
  Ed = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Td = () => "Divulgó información personal de otra persona sin su consentimiento",
  Sd = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Ad = () => "Diffusione di informazioni personali di terzi senza consenso",
  Od = () => "他人の個人情報を同意なく公開した。",
  Rd = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Dd = () => "Публикация личной информации других людей без их согласия",
  Id = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Nd = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Cd = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? wd() : e === "pt" ? bd() : e === "ch" ? vd() : e === "de" ? Ed() : e === "es" ? Td() : e === "fr" ? Sd() : e === "it" ? Ad() : e === "jp" ? Od() : e === "pl" ? Rd() : e === "ru" ? Dd() : e === "uk" ? Id() : Nd()
  },
  kd = () => "This email is already in use.",
  xd = () => "Este e-mail já está em uso.",
  Pd = () => "This email is already in use.",
  Ld = () => "This email is already in use.",
  Md = () => "Este correo electrónico ya está en uso.",
  Bd = () => "This email is already in use.",
  Ud = () => "Questa email è già in uso.",
  Hd = () => "This email is already in use.",
  Fd = () => "This email is already in use.",
  jd = () => "This email is already in use.",
  Gd = () => "This email is already in use.",
  Wd = () => "This email is already in use.",
  Vd = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? kd() : e === "pt" ? xd() : e === "ch" ? Pd() : e === "de" ? Ld() : e === "es" ? Md() : e === "fr" ? Bd() : e === "it" ? Ud() : e === "jp" ? Hd() : e === "pl" ? Fd() : e === "ru" ? jd() : e === "uk" ? Gd() : Wd()
  },
  zd = t => `This email is already in use by user #${t.userId}.`,
  $d = t => `Este e-mail já está em uso pelo usuário #${t.userId}.`,
  qd = t => `This email is already in use by user #${t.userId}.`,
  Kd = t => `This email is already in use by user #${t.userId}.`,
  Xd = t => `Este correo electrónico ya está en uso por el usuario #${t.userId}.`,
  Yd = t => `This email is already in use by user #${t.userId}.`,
  Jd = t => `Questa email è già in uso dall'utente #${t.userId}.`,
  Qd = t => `This email is already in use by user #${t.userId}.`,
  Zd = t => `This email is already in use by user #${t.userId}.`,
  e_ = t => `This email is already in use by user #${t.userId}.`,
  t_ = t => `This email is already in use by user #${t.userId}.`,
  n_ = t => `This email is already in use by user #${t.userId}.`,
  r_ = (t, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? zd(t) : e === "pt" ? $d(t) : e === "ch" ? qd(t) : e === "de" ? Kd(t) : e === "es" ? Xd(t) : e === "fr" ? Yd(t) : e === "it" ? Jd(t) : e === "jp" ? Qd(t) : e === "pl" ? Zd(t) : e === "ru" ? e_(t) : e === "uk" ? t_(t) : n_(t)
  },
  o_ = () => "Enter a valid email address.",
  a_ = () => "Informe um endereço de e-mail válido.",
  i_ = () => "Enter a valid email address.",
  s_ = () => "Enter a valid email address.",
  c_ = () => "Introduce una dirección de correo electrónico válida.",
  u_ = () => "Enter a valid email address.",
  l_ = () => "Inserisci un indirizzo email valido.",
  d_ = () => "Enter a valid email address.",
  __ = () => "Enter a valid email address.",
  f_ = () => "Enter a valid email address.",
  p_ = () => "Enter a valid email address.",
  m_ = () => "Enter a valid email address.",
  h_ = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? o_() : e === "pt" ? a_() : e === "ch" ? i_() : e === "de" ? s_() : e === "es" ? c_() : e === "fr" ? u_() : e === "it" ? l_() : e === "jp" ? d_() : e === "pl" ? __() : e === "ru" ? f_() : e === "uk" ? p_() : m_()
  },
  g_ = t => `Error while painting: ${t.err}`,
  y_ = t => `Erro enquanto pinta: ${t.err}`,
  w_ = t => `绘制时出错：${t.err}`,
  b_ = t => `Fehler beim Malen: ${t.err}`,
  v_ = t => `Error al pintar: ${t.err}`,
  E_ = t => `Erreur lors de la peinture : ${t.err}`,
  T_ = t => `Errore durante la pittura: ${t.err}`,
  S_ = t => `ペイント中にエラーが発生しました: ${t.err}`,
  A_ = t => `Błąd podczas malowania: ${t.err}`,
  O_ = t => `Ошибка при рисовании: ${t.err}`,
  R_ = t => `Помилка під час малювання: ${t.err}`,
  D_ = t => `Lỗi khi tô: ${t.err}`,
  I_ = (t, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? g_(t) : e === "pt" ? y_(t) : e === "ch" ? w_(t) : e === "de" ? b_(t) : e === "es" ? v_(t) : e === "fr" ? E_(t) : e === "it" ? T_(t) : e === "jp" ? S_(t) : e === "pl" ? A_(t) : e === "ru" ? O_(t) : e === "uk" ? R_(t) : D_(t)
  },
  N_ = () => "Exceeded maximum number of characters",
  C_ = () => "Excedeu o número máximo de caracteres permitidos",
  k_ = () => "超出最大字符数",
  x_ = () => "Maximale Zeichenanzahl überschritten",
  P_ = () => "Se excedió el número máximo de caracteres",
  L_ = () => "Nombre maximal de caractères dépassé",
  M_ = () => "Numero massimo di caratteri superato",
  B_ = () => "最大文字数を超過しました",
  U_ = () => "Przekroczono maksymalną liczbę znaków",
  H_ = () => "Превышено максимальное количество символов",
  F_ = () => "Перевищено максимальну кількість символів",
  j_ = () => "Đã vượt quá số ký tự tối đa",
  G_ = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? N_() : e === "pt" ? C_() : e === "ch" ? k_() : e === "de" ? x_() : e === "es" ? P_() : e === "fr" ? L_() : e === "it" ? M_() : e === "jp" ? B_() : e === "pl" ? U_() : e === "ru" ? H_() : e === "uk" ? F_() : j_()
  },
  W_ = () => "Verification code expired. Please request a new one.",
  V_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  z_ = () => "验证码已过期，请重新获取。",
  $_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  q_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  K_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  X_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  Y_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  J_ = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  Q_ = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Z_ = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  ef = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  tf = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? W_() : e === "pt" ? V_() : e === "ch" ? z_() : e === "de" ? $_() : e === "es" ? q_() : e === "fr" ? K_() : e === "it" ? X_() : e === "jp" ? Y_() : e === "pl" ? J_() : e === "ru" ? Q_() : e === "uk" ? Z_() : ef()
  },
  nf = () => "Griefing",
  rf = () => "Griefing",
  of = () => "破坏行为",
  af = () => "Griefing",
  sf = () => "Griefing",
  cf = () => "Griefing",
  uf = () => "Griefing",
  lf = () => "グリーフィング",
  df = () => "Griefing",
  _f = () => "Гриферство",
  ff = () => "Гріфінг",
  pf = () => "Griefing",
  mf = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? nf() : e === "pt" ? rf() : e === "ch" ? of() : e === "de" ? af() : e === "es" ? sf() : e === "fr" ? cf() : e === "it" ? uf() : e === "jp" ? lf() : e === "pl" ? df() : e === "ru" ? _f() : e === "uk" ? ff() : pf()
  },
  hf = () => "Messed up with other's artworks",
  gf = () => "Estragou os desenhos dos outros",
  yf = () => "破坏了他人的作品",
  wf = () => "Kunstwerke anderer beschädigt",
  bf = () => "Arruinó las obras de arte de otros",
  vf = () => "A abîmé les œuvres des autres",
  Ef = () => "Ha rovinato i disegni degli altri",
  Tf = () => "他人の作品を荒らした",
  Sf = () => "Zniszczył prace innych",
  Af = () => "Испортил чужие рисунки",
  Of = () => "Зіпсував роботи інших",
  Rf = () => "Phá hỏng tranh của người khác",
  Df = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? hf() : e === "pt" ? gf() : e === "ch" ? yf() : e === "de" ? wf() : e === "es" ? bf() : e === "fr" ? vf() : e === "it" ? Ef() : e === "jp" ? Tf() : e === "pl" ? Sf() : e === "ru" ? Af() : e === "uk" ? Of() : Rf()
  },
  If = () => "Hate speech",
  Nf = () => "Discurso de Ódio",
  Cf = () => "仇恨言论",
  kf = () => "Hassrede",
  xf = () => "Discurso de odio",
  Pf = () => "Discours haineux",
  Lf = () => "Discorso d'odio",
  Mf = () => "ヘイトスピーチ",
  Bf = () => "Mowa nienawiści",
  Uf = () => "Речь ненависти",
  Hf = () => "Мова ворожнечі",
  Ff = () => "Ngôn từ thù hằn",
  jf = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? If() : e === "pt" ? Nf() : e === "ch" ? Cf() : e === "de" ? kf() : e === "es" ? xf() : e === "fr" ? Pf() : e === "it" ? Lf() : e === "jp" ? Mf() : e === "pl" ? Bf() : e === "ru" ? Uf() : e === "uk" ? Hf() : Ff()
  },
  Gf = () => "Racism, homophobia, hate groups, ...",
  Wf = () => "Racismo, homofobia, grupos de ódio, ...",
  Vf = () => "种族主义、恐同、仇恨团体等",
  zf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  $f = () => "Racismo, homofobia, grupos de odio, ...",
  qf = () => "Racisme, homophobie, groupes haineux, ...",
  Kf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Xf = () => "人種差別、同性愛差別、ヘイト団体など。",
  Yf = () => "Rasizm, homofobia, grupy nienawiści, ...",
  Jf = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Qf = () => "Расизм, гомофобія, групи ненависті, ...",
  Zf = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  ep = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Gf() : e === "pt" ? Wf() : e === "ch" ? Vf() : e === "de" ? zf() : e === "es" ? $f() : e === "fr" ? qf() : e === "it" ? Kf() : e === "jp" ? Xf() : e === "pl" ? Yf() : e === "ru" ? Jf() : e === "uk" ? Qf() : Zf()
  },
  tp = () => "Inappropriate content",
  np = () => "Conteúdo inapropriado",
  rp = () => "不当内容",
  op = () => "Unangemessene Inhalte",
  ap = () => "Contenido inapropiado",
  ip = () => "Contenu inapproprié",
  sp = () => "Contenuto inappropriato",
  cp = () => "不適切なコンテンツ",
  up = () => "Nieodpowiednie treści",
  lp = () => "Неприемлемый контент",
  dp = () => "Неприйнятний вміст",
  _p = () => "Nội dung không phù hợp",
  fp = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? tp() : e === "pt" ? np() : e === "ch" ? rp() : e === "de" ? op() : e === "es" ? ap() : e === "fr" ? ip() : e === "it" ? sp() : e === "jp" ? cp() : e === "pl" ? up() : e === "ru" ? lp() : e === "uk" ? dp() : _p()
  },
  pp = () => "Explicit, hateful, or illegal content",
  mp = () => "Conteúdo explícito, de ódio ou ilegal",
  hp = () => "露骨、仇恨或非法内容",
  gp = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  yp = () => "Contenido explícito, de odio o ilegal",
  wp = () => "Contenu explicite, haineux ou illégal",
  bp = () => "Contenuto esplicito, d'odio o illegale",
  vp = () => "露骨、差別的、または違法なコンテンツ",
  Ep = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  Tp = () => "Откровенный, разжигающий ненависть или незаконный контент",
  Sp = () => "Відвертий, ворожий або незаконний вміст",
  Ap = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Op = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? pp() : e === "pt" ? mp() : e === "ch" ? hp() : e === "de" ? gp() : e === "es" ? yp() : e === "fr" ? wp() : e === "it" ? bp() : e === "jp" ? vp() : e === "pl" ? Ep() : e === "ru" ? Tp() : e === "uk" ? Sp() : Ap()
  },
  Rp = () => "Invalid captcha. Please try again.",
  Dp = () => "Captcha inválido. Por favor, tente novamente.",
  Ip = () => "验证码无效，请重试。",
  Np = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Cp = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  kp = () => "Captcha invalide. Veuillez réessayer.",
  xp = () => "Captcha non valido. Riprova.",
  Pp = () => "キャプチャが無効です。もう一度お試しください。",
  Lp = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Mp = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Bp = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Up = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Hp = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Rp() : e === "pt" ? Dp() : e === "ch" ? Ip() : e === "de" ? Np() : e === "es" ? Cp() : e === "fr" ? kp() : e === "it" ? xp() : e === "jp" ? Pp() : e === "pl" ? Lp() : e === "ru" ? Mp() : e === "uk" ? Bp() : Up()
  },
  Fp = () => "Invalid challenge response",
  jp = () => "Resposta de desafio inválida",
  Gp = () => "质询响应无效",
  Wp = () => "Ungültige Challenge-Antwort",
  Vp = () => "Respuesta de desafío inválida",
  zp = () => "Réponse au défi invalide",
  $p = () => "Risposta alla sfida non valida",
  qp = () => "無効なチャレンジ応答",
  Kp = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Xp = () => "Неверный ответ на вызов",
  Yp = () => "Недійсна відповідь на виклик",
  Jp = () => "Phản hồi thử thách không hợp lệ",
  Qp = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Fp() : e === "pt" ? jp() : e === "ch" ? Gp() : e === "de" ? Wp() : e === "es" ? Vp() : e === "fr" ? zp() : e === "it" ? $p() : e === "jp" ? qp() : e === "pl" ? Kp() : e === "ru" ? Xp() : e === "uk" ? Yp() : Jp()
  },
  Zp = () => "The verification code is incorrect. Please check it and try again.",
  em = () => "Código inválido",
  tm = () => "验证码不正确。请检查后重试。",
  nm = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  rm = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  om = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  am = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  im = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  sm = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  cm = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  um = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  lm = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  dm = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Zp() : e === "pt" ? em() : e === "ch" ? tm() : e === "de" ? nm() : e === "es" ? rm() : e === "fr" ? om() : e === "it" ? am() : e === "jp" ? im() : e === "pl" ? sm() : e === "ru" ? cm() : e === "uk" ? um() : lm()
  },
  _m = () => "Invalid discord.",
  fm = () => "Discord inválido.",
  pm = () => "无效的 Discord。",
  mm = () => "Ungültiger Discord.",
  hm = () => "Discord inválido.",
  gm = () => "Discord invalide.",
  ym = () => "Discord non valido.",
  wm = () => "無効なDiscordアカウントです。",
  bm = () => "Nieprawidłowy Discord.",
  vm = () => "Неверный Discord.",
  Em = () => "Некоректний Discord.",
  Tm = () => "Discord không hợp lệ.",
  Sm = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? _m() : e === "pt" ? fm() : e === "ch" ? pm() : e === "de" ? mm() : e === "es" ? hm() : e === "fr" ? gm() : e === "it" ? ym() : e === "jp" ? wm() : e === "pl" ? bm() : e === "ru" ? vm() : e === "uk" ? Em() : Tm()
  },
  Am = () => "The name contains disallowed characters or words. Please choose a different name.",
  Om = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Rm = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Dm = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Im = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Nm = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Cm = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  km = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  xm = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Pm = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Lm = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Mm = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  xr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Am() : e === "pt" ? Om() : e === "ch" ? Rm() : e === "de" ? Dm() : e === "es" ? Im() : e === "fr" ? Nm() : e === "it" ? Cm() : e === "jp" ? km() : e === "pl" ? xm() : e === "ru" ? Pm() : e === "uk" ? Lm() : Mm()
  },
  Bm = () => "Please enter a valid phone number with country code.",
  Um = () => "Insira um número de telefone válido com código do país.",
  Hm = () => "请输入带国家代码的有效电话号码。",
  Fm = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  jm = () => "Introduce un número de teléfono válido con código de país.",
  Gm = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Wm = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Vm = () => "国番号付きの有効な電話番号を入力してください。",
  zm = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  $m = () => "Введите действительный номер телефона с кодом страны.",
  qm = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Km = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Xm = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Bm() : e === "pt" ? Um() : e === "ch" ? Hm() : e === "de" ? Fm() : e === "es" ? jm() : e === "fr" ? Gm() : e === "it" ? Wm() : e === "jp" ? Vm() : e === "pl" ? zm() : e === "ru" ? $m() : e === "uk" ? qm() : Km()
  },
  Ym = () => "Phone number not supported. Please try another number.",
  Jm = () => "Número de telefone não suportado. Por favor, tente outro número.",
  Qm = () => "不支持此电话号码。请尝试其他号码。",
  Zm = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  eh = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  th = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  nh = () => "Numero di telefono non supportato. Prova con un altro numero.",
  rh = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  oh = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  ah = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  ih = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  sh = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  ch = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Ym() : e === "pt" ? Jm() : e === "ch" ? Qm() : e === "de" ? Zm() : e === "es" ? eh() : e === "fr" ? th() : e === "it" ? nh() : e === "jp" ? rh() : e === "pl" ? oh() : e === "ru" ? ah() : e === "uk" ? ih() : sh()
  },
  uh = () => "The new leader must be a member of the alliance",
  lh = () => "O novo líder deve ser um membro da aliança",
  dh = () => "新盟主必须是联盟成员",
  _h = () => "Der neue Anführer muss Mitglied der Allianz sein",
  fh = () => "El nuevo líder debe ser miembro de la alianza",
  ph = () => "Le nouveau chef doit être membre de l’alliance",
  mh = () => "Il nuovo leader deve essere un membro dell'alleanza",
  hh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  gh = () => "Nowy lider musi być członkiem sojuszu",
  yh = () => "Новый лидер должен быть участником альянса",
  wh = () => "Новий лідер має бути учасником альянсу",
  bh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  vh = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? uh() : e === "pt" ? lh() : e === "ch" ? dh() : e === "de" ? _h() : e === "es" ? fh() : e === "fr" ? ph() : e === "it" ? mh() : e === "jp" ? hh() : e === "pl" ? gh() : e === "ru" ? yh() : e === "uk" ? wh() : bh()
  },
  Eh = () => "Leaderboard is temporarily disabled",
  Th = () => "O ranking está temporariamente desativado",
  Sh = () => "排行榜已暂时停用",
  Ah = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Oh = () => "La clasificación está deshabilitada temporalmente",
  Rh = () => "Le classement est temporairement désactivé",
  Dh = () => "La classifica è temporaneamente disattivata",
  Ih = () => "ランキングは一時的に無効になっています。",
  Nh = () => "Ranking jest tymczasowo wyłączony",
  Ch = () => "Таблица лидеров временно отключена",
  kh = () => "Таблиця лідерів тимчасово вимкнена",
  xh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  Xe = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Eh() : e === "pt" ? Th() : e === "ch" ? Sh() : e === "de" ? Ah() : e === "es" ? Oh() : e === "fr" ? Rh() : e === "it" ? Dh() : e === "jp" ? Ih() : e === "pl" ? Nh() : e === "ru" ? Ch() : e === "uk" ? kh() : xh()
  },
  Ph = () => "Location name is too big (max. 128 characters)",
  Lh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Mh = () => "位置名称过长（最大 128 个字符）",
  Bh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Uh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Hh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Fh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  jh = () => "場所の名前が長すぎます（最大128文字）。",
  Gh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Wh = () => "Название локации слишком длинное (макс. 128 символов)",
  Vh = () => "Назва локації надто довга (макс. 128 символів)",
  zh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  $h = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Ph() : e === "pt" ? Lh() : e === "ch" ? Mh() : e === "de" ? Bh() : e === "es" ? Uh() : e === "fr" ? Hh() : e === "it" ? Fh() : e === "jp" ? jh() : e === "pl" ? Gh() : e === "ru" ? Wh() : e === "uk" ? Vh() : zh()
  },
  qh = () => "Multi-accounting",
  Kh = () => "Múltiplas contas",
  Xh = () => "多账号",
  Yh = () => "Multi-Accounting",
  Jh = () => "Multi-cuentas",
  Qh = () => "Multi-comptes",
  Zh = () => "Multi-account",
  eg = () => "複数アカウント使用",
  tg = () => "Multi-konta",
  ng = () => "Мультиаккаунт",
  rg = () => "Мультиакаунтинг",
  og = () => "Nhiều tài khoản",
  ag = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? qh() : e === "pt" ? Kh() : e === "ch" ? Xh() : e === "de" ? Yh() : e === "es" ? Jh() : e === "fr" ? Qh() : e === "it" ? Zh() : e === "jp" ? eg() : e === "pl" ? tg() : e === "ru" ? ng() : e === "uk" ? rg() : og()
  },
  ig = () => "Use more than one account to paint pixels",
  sg = () => "Usar mais de uma conta para pintar",
  cg = () => "使用多个账号绘制像素",
  ug = () => "Mehr als ein Konto zum Malen verwenden",
  lg = () => "Uso de más de una cuenta para pintar píxeles",
  dg = () => "Utiliser plus d’un compte pour peindre",
  _g = () => "Usare più di un account per dipingere",
  fg = () => "複数のアカウントを使ってピクセルを塗った。",
  pg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  mg = () => "Использование более одного аккаунта для рисования",
  hg = () => "Використання більше ніж одного акаунта для малювання",
  gg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  yg = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? ig() : e === "pt" ? sg() : e === "ch" ? cg() : e === "de" ? ug() : e === "es" ? lg() : e === "fr" ? dg() : e === "it" ? _g() : e === "jp" ? fg() : e === "pl" ? pg() : e === "ru" ? mg() : e === "uk" ? hg() : gg()
  },
  wg = t => `You can change your name again in ${t.days} days`,
  bg = t => `Você pode alterar seu nome novamente em ${t.days} dias.`,
  vg = t => `你可以在 ${t.days} 天后再次修改名称`,
  Eg = t => `Du kannst deinen Namen in ${t.days} Tagen erneut ändern`,
  Tg = t => `Podrás cambiar tu nombre de nuevo en ${t.days} días`,
  Sg = t => `Vous pourrez changer votre nom à nouveau dans ${t.days} jours`,
  Ag = t => `Potrai cambiare di nuovo il tuo nome tra ${t.days} giorni.`,
  Og = t => `${t.days}日後に再び名前を変更できます。`,
  Rg = t => `Następną zmianę nazwy możesz wykonać za ${t.days} dni`,
  Dg = t => `Вы сможете изменить имя снова через ${t.days} дн.`,
  Ig = t => `Ви зможете змінити імʼя знову через ${t.days} днів`,
  Ng = t => `Bạn có thể đổi tên lại sau ${t.days} ngày`,
  Cg = (t, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? wg(t) : e === "pt" ? bg(t) : e === "ch" ? vg(t) : e === "de" ? Eg(t) : e === "es" ? Tg(t) : e === "fr" ? Sg(t) : e === "it" ? Ag(t) : e === "jp" ? Og(t) : e === "pl" ? Rg(t) : e === "ru" ? Dg(t) : e === "uk" ? Ig(t) : Ng(t)
  },
  kg = () => "No internet access or the servers are offline. Try again later.",
  xg = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Pg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Lg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Mg = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Bg = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Ug = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Hg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Fg = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  jg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Gg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Wg = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Vg = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? kg() : e === "pt" ? xg() : e === "ch" ? Pg() : e === "de" ? Lg() : e === "es" ? Mg() : e === "fr" ? Bg() : e === "it" ? Ug() : e === "jp" ? Hg() : e === "pl" ? Fg() : e === "ru" ? jg() : e === "uk" ? Gg() : Wg()
  },
  zg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  $g = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  qg = () => "您无权验证电话号码。请尝试刷新页面。",
  Kg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Xg = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  Yg = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Jg = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Qg = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Zg = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  ey = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  ty = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  ny = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  ry = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? zg() : e === "pt" ? $g() : e === "ch" ? qg() : e === "de" ? Kg() : e === "es" ? Xg() : e === "fr" ? Yg() : e === "it" ? Jg() : e === "jp" ? Qg() : e === "pl" ? Zg() : e === "ru" ? ey() : e === "uk" ? ty() : ny()
  },
  oy = () => "Operation not allowed. Maybe you have too many favorite locations.",
  ay = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  iy = () => "操作不被允许。你的收藏位置可能过多。",
  sy = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  cy = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  uy = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  ly = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  dy = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  _y = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  fy = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  py = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  my = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  hy = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? oy() : e === "pt" ? ay() : e === "ch" ? iy() : e === "de" ? sy() : e === "es" ? cy() : e === "fr" ? uy() : e === "it" ? ly() : e === "jp" ? dy() : e === "pl" ? _y() : e === "ru" ? fy() : e === "uk" ? py() : my()
  },
  gy = t => `Not enough charges: you have ${t.charges} but this overlay needs ${t.pixels}.`,
  yy = t => `Cargas insuficientes: você tem ${t.charges}, mas esta sobreposição precisa de ${t.pixels}.`,
  wy = t => `充能不足：你有 ${t.charges}，但此叠加层需要 ${t.pixels}。`,
  by = t => `Nicht genügend Ladungen: Du hast ${t.charges}, aber dieses Overlay benötigt ${t.pixels}.`,
  vy = t => `Cargas insuficientes: tienes ${t.charges} pero esta superposición necesita ${t.pixels}.`,
  Ey = t => `Charges insuffisantes : vous avez ${t.charges} mais ce calque nécessite ${t.pixels}.`,
  Ty = t => `Cariche insufficienti: ne hai ${t.charges} ma questo overlay ne richiede ${t.pixels}.`,
  Sy = t => `チャージが足りません：現在 ${t.charges} ですが、このオーバーレイには ${t.pixels} 必要です。`,
  Ay = t => `Za mało ładunków: masz ${t.charges}, ale ta nakładka wymaga ${t.pixels}.`,
  Oy = t => `Недостаточно зарядов: у вас ${t.charges}, но для этого слоя нужно ${t.pixels}.`,
  Ry = t => `Недостатньо зарядів: у вас ${t.charges}, але для цього шару потрібно ${t.pixels}.`,
  Dy = t => `Không đủ lượt sơn: bạn có ${t.charges} nhưng lớp phủ này cần ${t.pixels}.`,
  Iy = (t, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? gy(t) : e === "pt" ? yy(t) : e === "ch" ? wy(t) : e === "de" ? by(t) : e === "es" ? vy(t) : e === "fr" ? Ey(t) : e === "it" ? Ty(t) : e === "jp" ? Sy(t) : e === "pl" ? Ay(t) : e === "ru" ? Oy(t) : e === "uk" ? Ry(t) : Dy(t)
  },
  Ny = () => "You are trying to paint with a color you do not own",
  Cy = () => "Você está tentando pintar com uma cor que não possui",
  ky = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  xy = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Py = () => "Estás intentando pintar con un color que no posees",
  Ly = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  My = () => "Stai cercando di dipingere con un colore che non possiedi",
  By = () => "所持していない色で塗ろうとしています。",
  Uy = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Hy = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Fy = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  jy = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Pr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Ny() : e === "pt" ? Cy() : e === "ch" ? ky() : e === "de" ? xy() : e === "es" ? Py() : e === "fr" ? Ly() : e === "it" ? My() : e === "jp" ? By() : e === "pl" ? Uy() : e === "ru" ? Hy() : e === "uk" ? Fy() : jy()
  },
  Gy = () => "Phone already used",
  Wy = () => "Telefone já usado",
  Vy = () => "电话号码已被使用",
  zy = () => "Telefonnummer bereits verwendet",
  $y = () => "Teléfono ya utilizado",
  qy = () => "Téléphone déjà utilisé",
  Ky = () => "Telefono già utilizzato",
  Xy = () => "この電話番号は既に使用されています。",
  Yy = () => "Numer telefonu jest już używany",
  Jy = () => "Телефон уже используется",
  Qy = () => "Номер телефону вже використовується",
  Zy = () => "Số điện thoại đã được sử dụng",
  ew = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Gy() : e === "pt" ? Wy() : e === "ch" ? Vy() : e === "de" ? zy() : e === "es" ? $y() : e === "fr" ? qy() : e === "it" ? Ky() : e === "jp" ? Xy() : e === "pl" ? Yy() : e === "ru" ? Jy() : e === "uk" ? Qy() : Zy()
  },
  tw = () => "This phone number's region is not supported",
  nw = () => "A região deste número de telefone não é suportada",
  rw = () => "此电话号码的地区不受支持",
  ow = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  aw = () => "La región de este número de teléfono no es compatible",
  iw = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  sw = () => "La regione di questo numero di telefono non è supportata",
  cw = () => "この電話番号の地域はサポートされていません",
  uw = () => "Region tego numeru telefonu nie jest obsługiwany",
  lw = () => "Регион этого номера телефона не поддерживается",
  dw = () => "Регіон цього номера телефону не підтримується",
  _w = () => "Vùng của số điện thoại này không được hỗ trợ",
  fw = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? tw() : e === "pt" ? nw() : e === "ch" ? rw() : e === "de" ? ow() : e === "es" ? aw() : e === "fr" ? iw() : e === "it" ? sw() : e === "jp" ? cw() : e === "pl" ? uw() : e === "ru" ? lw() : e === "uk" ? dw() : _w()
  },
  pw = () => "Refresh your page to get the latest update",
  mw = () => "Recarregue sua página para obter as últimas atualizações",
  hw = () => "刷新页面以获取最新更新",
  gw = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  yw = () => "Actualiza la página para obtener la última versión",
  ww = () => "Actualisez la page pour obtenir les dernières mises à jour",
  bw = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  vw = () => "最新の状態にするにはページを再読み込みしてください。",
  Ew = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Tw = () => "Обновите страницу, чтобы получить последние изменения",
  Sw = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Aw = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Lr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? pw() : e === "pt" ? mw() : e === "ch" ? hw() : e === "de" ? gw() : e === "es" ? yw() : e === "fr" ? ww() : e === "it" ? bw() : e === "jp" ? vw() : e === "pl" ? Ew() : e === "ru" ? Tw() : e === "uk" ? Sw() : Aw()
  },
  Ow = () => "The request timed out. Please try again.",
  Rw = () => "A solicitação expirou. Por favor, tente novamente.",
  Dw = () => "请求超时。请重试。",
  Iw = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Nw = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Cw = () => "La requête a expiré. Veuillez réessayer.",
  kw = () => "La richiesta è scaduta. Riprova.",
  xw = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Pw = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Lw = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Mw = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Bw = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Uw = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Ow() : e === "pt" ? Rw() : e === "ch" ? Dw() : e === "de" ? Iw() : e === "es" ? Nw() : e === "fr" ? Cw() : e === "it" ? kw() : e === "jp" ? xw() : e === "pl" ? Pw() : e === "ru" ? Lw() : e === "uk" ? Mw() : Bw()
  },
  Hw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Fw = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  jw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Gw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ww = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Vw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zw = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  $w = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  qw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Kw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Xw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Yw = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Jw = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Hw() : e === "pt" ? Fw() : e === "ch" ? jw() : e === "de" ? Gw() : e === "es" ? Ww() : e === "fr" ? Vw() : e === "it" ? zw() : e === "jp" ? $w() : e === "pl" ? qw() : e === "ru" ? Kw() : e === "uk" ? Xw() : Yw()
  },
  Qw = () => "The service is currently unavailable. Please try again later.",
  Zw = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  eb = () => "服务当前不可用。请稍后再试。",
  tb = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  nb = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  rb = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  ob = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  ab = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  ib = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  sb = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  cb = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  ub = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  lb = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Qw() : e === "pt" ? Zw() : e === "ch" ? eb() : e === "de" ? tb() : e === "es" ? nb() : e === "fr" ? rb() : e === "it" ? ob() : e === "jp" ? ab() : e === "pl" ? ib() : e === "ru" ? sb() : e === "uk" ? cb() : ub()
  },
  db = () => "Too many attempts. Please try again later",
  _b = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  fb = () => "尝试次数过多，请稍后再试",
  pb = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  mb = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  hb = () => "Trop de tentatives. Veuillez réessayer plus tard",
  gb = () => "Troppi tentativi. Riprova più tardi.",
  yb = () => "試行回数が多すぎます。後で再度お試しください。",
  wb = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  bb = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  vb = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  Eb = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Mr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? db() : e === "pt" ? _b() : e === "ch" ? fb() : e === "de" ? pb() : e === "es" ? mb() : e === "fr" ? hb() : e === "it" ? gb() : e === "jp" ? yb() : e === "pl" ? wb() : e === "ru" ? bb() : e === "uk" ? vb() : Eb()
  },
  Tb = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Sb = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Ab = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Ob = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Rb = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Db = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Ib = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Nb = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Cb = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  kb = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  xb = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  Pb = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Lb = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Tb() : e === "pt" ? Sb() : e === "ch" ? Ab() : e === "de" ? Ob() : e === "es" ? Rb() : e === "fr" ? Db() : e === "it" ? Ib() : e === "jp" ? Nb() : e === "pl" ? Cb() : e === "ru" ? kb() : e === "uk" ? xb() : Pb()
  },
  Mb = () => "The typed username does not match your current username.",
  Bb = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Ub = () => "输入的用户名与当前用户名不匹配。",
  Hb = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Fb = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  jb = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Gb = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Wb = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Vb = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  zb = () => "Введённое имя пользователя не совпадает с текущим.",
  $b = () => "Введене імʼя користувача не збігається з поточним.",
  qb = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Kb = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Mb() : e === "pt" ? Bb() : e === "ch" ? Ub() : e === "de" ? Hb() : e === "es" ? Fb() : e === "fr" ? jb() : e === "it" ? Gb() : e === "jp" ? Wb() : e === "pl" ? Vb() : e === "ru" ? zb() : e === "uk" ? $b() : qb()
  },
  Xb = () => "Unexpected server error. Try again later.",
  Yb = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Jb = () => "服务器出现意外错误。请稍后再试。",
  Qb = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Zb = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  e1 = () => "Erreur serveur inattendue. Réessayez plus tard.",
  t1 = () => "Errore imprevisto del server. Riprova più tardi.",
  n1 = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  r1 = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  o1 = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  a1 = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  i1 = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  m = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Xb() : e === "pt" ? Yb() : e === "ch" ? Jb() : e === "de" ? Qb() : e === "es" ? Zb() : e === "fr" ? e1() : e === "it" ? t1() : e === "jp" ? n1() : e === "pl" ? r1() : e === "ru" ? o1() : e === "uk" ? a1() : i1()
  },
  s1 = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  c1 = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  u1 = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  l1 = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  d1 = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  _1 = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  f1 = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  p1 = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  m1 = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  h1 = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  g1 = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  y1 = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  w1 = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? s1() : e === "pt" ? c1() : e === "ch" ? u1() : e === "de" ? l1() : e === "es" ? d1() : e === "fr" ? _1() : e === "it" ? f1() : e === "jp" ? p1() : e === "pl" ? m1() : e === "ru" ? h1() : e === "uk" ? g1() : y1()
  },
  b1 = () => "VPN or proxy detected. Please disable your VPN and try again.",
  v1 = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  E1 = () => "检测到VPN或代理。请关闭VPN后重试。",
  T1 = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  S1 = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  A1 = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  O1 = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  R1 = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  D1 = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  I1 = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  N1 = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  C1 = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  k1 = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? b1() : e === "pt" ? v1() : e === "ch" ? E1() : e === "de" ? T1() : e === "es" ? S1() : e === "fr" ? A1() : e === "it" ? O1() : e === "jp" ? R1() : e === "pl" ? D1() : e === "ru" ? I1() : e === "uk" ? N1() : C1()
  },
  x1 = () => "Failed to load WebAssembly module. Try to use another browser.",
  P1 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  L1 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  M1 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  B1 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  U1 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  H1 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  F1 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  j1 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  G1 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  W1 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  V1 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  z1 = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? x1() : e === "pt" ? P1() : e === "ch" ? L1() : e === "de" ? M1() : e === "es" ? B1() : e === "fr" ? U1() : e === "it" ? H1() : e === "jp" ? F1() : e === "pl" ? j1() : e === "ru" ? G1() : e === "uk" ? W1() : V1()
  },
  $1 = () => "You already have this item. Please refresh the page.",
  q1 = () => "Você já possui este item. Atualize a página.",
  K1 = () => "你已经拥有此物品。请刷新页面。",
  X1 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Y1 = () => "Ya tienes este ítem. Actualiza la página.",
  J1 = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Q1 = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Z1 = () => "このアイテムはすでに所持しています。ページを更新してください。",
  ev = () => "Masz już ten przedmiot. Odśwież stronę.",
  tv = () => "У вас уже есть этот предмет. Обновите страницу.",
  nv = () => "У вас уже є цей предмет. Оновіть сторінку.",
  rv = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Br = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? $1() : e === "pt" ? q1() : e === "ch" ? K1() : e === "de" ? X1() : e === "es" ? Y1() : e === "fr" ? J1() : e === "it" ? Q1() : e === "jp" ? Z1() : e === "pl" ? ev() : e === "ru" ? tv() : e === "uk" ? nv() : rv()
  },
  ov = () => "You are already in an alliance",
  av = () => "Você já está em uma aliança",
  iv = () => "你已经在一个联盟中",
  sv = () => "Du bist bereits in einer Allianz",
  cv = () => "Ya estás en una alianza",
  uv = () => "Vous êtes déjà dans une alliance",
  lv = () => "Sei già in un'alleanza",
  dv = () => "すでにアライアンスに所属しています。",
  _v = () => "Jesteś już w sojuszu",
  fv = () => "Вы уже состоите в альянсе",
  pv = () => "Ви вже перебуваєте в альянсі",
  mv = () => "Bạn đã ở trong một liên minh",
  hv = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? ov() : e === "pt" ? av() : e === "ch" ? iv() : e === "de" ? sv() : e === "es" ? cv() : e === "fr" ? uv() : e === "it" ? lv() : e === "jp" ? dv() : e === "pl" ? _v() : e === "ru" ? fv() : e === "uk" ? pv() : mv()
  },
  gv = () => "You are not allowed to do this",
  yv = () => "Você não tem permissão para fazer isso",
  wv = () => "你无权执行此操作",
  bv = () => "Du bist dazu nicht berechtigt",
  vv = () => "No tienes permiso para hacer esto",
  Ev = () => "Vous n’êtes pas autorisé à faire cela",
  Tv = () => "Non hai il permesso di farlo",
  Sv = () => "この操作を行う権限がありません。",
  Av = () => "Nie masz uprawnień, aby to zrobić",
  Ov = () => "У вас нет прав для этого действия",
  Rv = () => "Ви не маєте права це робити",
  Dv = () => "Bạn không có quyền làm việc này",
  Ye = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? gv() : e === "pt" ? yv() : e === "ch" ? wv() : e === "de" ? bv() : e === "es" ? vv() : e === "fr" ? Ev() : e === "it" ? Tv() : e === "jp" ? Sv() : e === "pl" ? Av() : e === "ru" ? Ov() : e === "uk" ? Rv() : Dv()
  },
  Iv = () => "You do not have enough Droplets to buy this item.",
  Nv = () => "Você não tem Droplets suficientes para comprar este item.",
  Cv = () => "你的 Droplets 不足，无法购买此物品。",
  kv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  xv = () => "No tienes suficientes Droplets para comprar este ítem.",
  Pv = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Lv = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Mv = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Bv = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Uv = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Hv = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Fv = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Ur = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Iv() : e === "pt" ? Nv() : e === "ch" ? Cv() : e === "de" ? kv() : e === "es" ? xv() : e === "fr" ? Pv() : e === "it" ? Lv() : e === "jp" ? Mv() : e === "pl" ? Bv() : e === "ru" ? Uv() : e === "uk" ? Hv() : Fv()
  },
  jv = () => "You need to be logged in to paint",
  Gv = () => "Você precisa estar conectado para pintar",
  Wv = () => "你需要登录才能进行绘制",
  Vv = () => "Du musst eingeloggt sein, um zu malen",
  zv = () => "Debes iniciar sesión para pintar",
  $v = () => "Vous devez être connecté pour peindre",
  qv = () => "Devi avere effettuato l'accesso per dipingere",
  Kv = () => "ペイントするにはログインが必要です。",
  Xv = () => "Musisz być zalogowany, aby malować",
  Yv = () => "Чтобы рисовать, нужно войти в аккаунт",
  Jv = () => "Щоб малювати, необхідно увійти в акаунт",
  Qv = () => "Bạn cần đăng nhập để tô",
  Hr = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? jv() : e === "pt" ? Gv() : e === "ch" ? Wv() : e === "de" ? Vv() : e === "es" ? zv() : e === "fr" ? $v() : e === "it" ? qv() : e === "jp" ? Kv() : e === "pl" ? Xv() : e === "ru" ? Yv() : e === "uk" ? Jv() : Qv()
  },
  Zv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  e0 = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  t0 = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  n0 = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  r0 = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  o0 = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  a0 = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  i0 = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  s0 = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  c0 = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  u0 = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  l0 = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  d0 = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Zv() : e === "pt" ? e0() : e === "ch" ? t0() : e === "de" ? n0() : e === "es" ? r0() : e === "fr" ? o0() : e === "it" ? a0() : e === "jp" ? i0() : e === "pl" ? s0() : e === "ru" ? c0() : e === "uk" ? u0() : l0()
  },
  _0 = t => `Your account has been suspended out until ${t.until}`,
  f0 = t => `A sua conta está suspensa até ${t.until}`,
  p0 = t => `你的账号已被暂停至 ${t.until}`,
  m0 = t => `Dein Konto ist gesperrt bis ${t.until}`,
  h0 = t => `Tu cuenta ha sido suspendida hasta ${t.until}`,
  g0 = t => `Votre compte est suspendu jusqu’au ${t.until}`,
  y0 = t => `Il tuo account è sospeso fino al ${t.until}`,
  w0 = t => `あなたのアカウントは${t.until}まで一時停止されています。`,
  b0 = t => `Twoje konto zostało zawieszone do ${t.until}`,
  v0 = t => `Ваш аккаунт заблокирован до ${t.until}`,
  E0 = t => `Ваш акаунт призупинено до ${t.until}`,
  T0 = t => `Tài khoản của bạn đã bị đình chỉ đến ${t.until}`,
  Fr = (t, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? _0(t) : e === "pt" ? f0(t) : e === "ch" ? p0(t) : e === "de" ? m0(t) : e === "es" ? h0(t) : e === "fr" ? g0(t) : e === "it" ? y0(t) : e === "jp" ? w0(t) : e === "pl" ? b0(t) : e === "ru" ? v0(t) : e === "uk" ? E0(t) : T0(t)
  },
  S0 = () => "A correction is already pending for this ticket.",
  A0 = () => "Já existe uma correção pendente para este ticket.",
  O0 = () => "此工单已存在待审核的更正请求。",
  R0 = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  D0 = () => "Ya hay una corrección pendiente para este ticket.",
  I0 = () => "Une correction est déjà en attente pour ce ticket.",
  N0 = () => "Una correzione è già in sospeso per questo ticket.",
  C0 = () => "このチケットには未処理の修正があります。",
  k0 = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  x0 = () => "Для этого тикета уже есть запрос на исправление.",
  P0 = () => "Для цього тікета вже є запит на перевірці.",
  L0 = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  M0 = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? S0() : e === "pt" ? A0() : e === "ch" ? O0() : e === "de" ? R0() : e === "es" ? D0() : e === "fr" ? I0() : e === "it" ? N0() : e === "jp" ? C0() : e === "pl" ? k0() : e === "ru" ? x0() : e === "uk" ? P0() : L0()
  },
  B0 = () => "You cannot review your own correction request.",
  U0 = () => "Você não pode revisar sua própria solicitação de correção.",
  H0 = () => "不能审核自己提交的更正请求。",
  F0 = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  j0 = () => "No puedes revisar tu propia solicitud de corrección.",
  G0 = () => "Tu ne peux pas examiner ta propre demande de correction.",
  W0 = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  V0 = () => "自分のリクエストはレビューできません。",
  z0 = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  $0 = () => "Нельзя рассматривать собственный запрос.",
  q0 = () => "Не можна перевіряти власний запит.",
  K0 = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  X0 = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? B0() : e === "pt" ? U0() : e === "ch" ? H0() : e === "de" ? F0() : e === "es" ? j0() : e === "fr" ? G0() : e === "it" ? W0() : e === "jp" ? V0() : e === "pl" ? z0() : e === "ru" ? $0() : e === "uk" ? q0() : K0()
  },
  Y0 = () => "This correction has already been reviewed.",
  J0 = () => "Esta correção já foi revisada.",
  Q0 = () => "此请求已被审核。",
  Z0 = () => "Diese Korrektur wurde bereits geprüft.",
  eE = () => "Esta corrección ya ha sido revisada.",
  tE = () => "Cette correction a déjà été examinée.",
  nE = () => "Questa correzione è già stata revisionata.",
  rE = () => "このリクエストはすでにレビュー済みです。",
  oE = () => "Ta prośba została już rozpatrzona.",
  aE = () => "Этот запрос уже рассмотрен.",
  iE = () => "Цей запит вже перевірено.",
  sE = () => "Yêu cầu này đã được duyệt.",
  cE = (t = {}, n = {}) => {
    const e = n.locale ?? D();
    return e === "en" ? Y0() : e === "pt" ? J0() : e === "ch" ? Q0() : e === "de" ? Z0() : e === "es" ? eE() : e === "fr" ? tE() : e === "it" ? nE() : e === "jp" ? rE() : e === "pl" ? oE() : e === "ru" ? aE() : e === "uk" ? iE() : sE()
  },
  Ve = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function iT(t) {
  const n = Math.floor(t / Ve.hour);
  t -= n * Ve.hour;
  const e = Math.floor(t / Ve.minute);
  t -= e * Ve.minute;
  const o = Math.floor(t / Ve.second).toString().padStart(2, "0");
  return n > 0 ? `${n}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function sT(t) {
  const n = t.getFullYear(),
    e = String(t.getMonth() + 1).padStart(2, "0"),
    r = String(t.getDate()).padStart(2, "0"),
    o = String(t.getHours()).padStart(2, "0"),
    a = String(t.getMinutes()).padStart(2, "0"),
    s = String(t.getSeconds()).padStart(2, "0");
  return `${n}-${e}-${r} ${o}:${a}:${s}`
}
const cT = {
    griefing: mf(),
    "multi-accounting": ag(),
    "hate-speech": jf(),
    bot: eu(),
    doxxing: yd(),
    "inappropriate-content": fp(),
    other: Ou()
  },
  uT = {
    doxxing: Cd(),
    "hate-speech": ep(),
    griefing: Df(),
    "multi-accounting": yg(),
    bot: fu(),
    "inappropriate-content": Op(),
    other: Hu()
  },
  lT = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  jr = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  dT = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  uE = 365 * Ve.day;

function bo(t) {
  if (!t) return null;
  const e = (t instanceof Date ? t : new Date(t)).getTime();
  return Number.isFinite(e) ? e : null
}

function _T(t, n = Date.now()) {
  const e = bo(t);
  return e === null ? !1 : e - n >= uE
}

function fT(t, n = Date.now()) {
  const e = bo(t);
  if (e === null || e <= n) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - n) / 6e4)),
    o = Math.floor(r / 1440),
    a = Math.floor(r % 1440 / 60),
    s = r % 60;
  return {
    days: o,
    hours: a,
    minutes: s
  }
}
const lE = [{
    tileSize: 1e3,
    zoom: 11
  }],
  dE = 4,
  _E = 6e3,
  fE = [{
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
  pE = {
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
  mE = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  hE = {
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
  gE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  nt = {
    seasons: lE,
    regionSize: dE,
    refreshIntervalMs: _E,
    colors: fE,
    products: pE,
    countries: mE,
    permissions: hE,
    settings: gE
  },
  Pn = nt,
  yE = nt.seasons,
  vo = nt.seasons.length - 1,
  pT = nt.seasons[vo].zoom,
  mT = nt.seasons[vo].tileSize,
  hT = nt.permissions,
  wE = nt.settings;

function gT(t) {
  return Pn.countries[t - 1]
}
class b extends Error {
  constructor(n, e) {
    super(n), this.message = n, this.status = e
  }
}

function Gr(t, n) {
  const e = {};
  for (const r of t) {
    const o = n(r);
    let a = e[o];
    a ? a.push(r) : e[o] = [r]
  }
  return e
}

function yT(t, n) {
  const e = {};
  for (const r of t) {
    const o = n(r);
    e[o] = r
  }
  return e
}
const bE = 30 * Ve.minute;
var Lt, Mt;
class vE {
  constructor(n) {
    J(this, Lt, me(!0));
    J(this, Mt, me(null));
    q(this, "lastHotspotRequestAt", 0);
    this.url = n
  }
  get online() {
    return te(L(this, Lt))
  }
  set online(n) {
    oe(L(this, Lt), n, !0)
  }
  get serverTimeOffsetMs() {
    return te(L(this, Mt))
  }
  set serverTimeOffsetMs(n) {
    oe(L(this, Mt), n, !0)
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
    const e = Gr(n, i => `t=(${i.tile[0]},${i.tile[1]}),s=${i.season}`),
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
      o = JSON.stringify(r),
      a = await gt.getHeaders(o),
      s = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: a,
        credentials: "include"
      });
    if (s.status !== l.OK) {
      if (s.status === l.UNAUTHORIZED) throw new Error(Hr());
      if (s.status === l.FORBIDDEN) {
        if (s.headers.get("cf-mitigated") === "challenge") throw new Error(kr());
        const i = await s.json();
        if ((i == null ? void 0 : i.error) === "timeout") {
          const c = new Date(Date.now() + ((i == null ? void 0 : i.durationMs) ?? 0));
          throw new Error(Fr({
            until: c.toLocaleString()
          }))
        }
        if ((i == null ? void 0 : i.error) === "refresh") throw new Error(Lr());
        if ((i == null ? void 0 : i.error) === "color-not-owned") throw new Error(Pr());
        if ((i == null ? void 0 : i.error) === "event-pixel-present") throw new Error(Nr());
        if ((i == null ? void 0 : i.error) === "challenge-required")
          if (i.tier) {
            if (await Dr(i.tier)) return this.paint(n);
            throw new Error(Sn())
          } else console.error("Challenge required but no tier provided", i);
        ct.refresh()
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
    } = e, s = await this.request("/staff/tools/select-area/reverse/timestamps", {
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
    if (s.status !== l.OK) throw new b(m(), s.status);
    return s.json()
  }
  async getReversePreview(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, s = await this.request("/staff/tools/select-area/reverse/preview", {
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
    if (s.status !== l.OK) throw new b(m(), s.status);
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
    if (r.status === l.BAD_REQUEST) {
      const o = await r.json(),
        a = (o == null ? void 0 : o.error) ?? "";
      throw a === "timelapse_too_many_events" ? new b(Jw(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
    }
    if (r.status !== l.OK) throw new b(m(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(n, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: a
    } = e, s = await this.request("/staff/tools/select-area/reverse/apply", {
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
    if (s.status !== l.OK) throw new b(m(), s.status);
    return s.json()
  }
  async sendPaintRequests(n, e, r, o) {
    const a = Gr(n, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
      i = (await Promise.all(Object.values(a).map(async c => {
        const [_, u] = c[0].tile, p = c[0].season, f = {
          colors: c.map(y => y.colorIdx),
          coords: c.flatMap(y => y.pixel),
          csid: r
        }, d = JSON.stringify(f), g = e(p, _, u), h = await gt.getHeaders(d);
        return this.request(g, {
          method: "POST",
          body: d,
          headers: h,
          credentials: "include"
        })
      }))).filter(c => c.status !== l.OK);
    if (i.length) {
      const c = i[0];
      if (c.status === l.UNAUTHORIZED) throw new Error(Hr());
      if (c.status === l.FORBIDDEN) {
        if (c.headers.get("cf-mitigated") === "challenge") throw new Error(kr());
        const _ = await c.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const u = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(Fr({
            until: u.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(Lr());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(Pr());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(Nr());
        ct.refresh()
      } else throw new Error(m())
    }
  }
  async adminAutoPainterPaint(n, e, r) {
    const o = EE(n),
      a = await TE(o),
      s = new FormData;
    s.append("fingerprint", e), s.append("season", o.season.toString()), s.append("px0", o.offsetX.toString()), s.append("py0", o.offsetY.toString()), s.append("width", o.width.toString()), s.append("height", o.height.toString()), s.append("pixels", n.length.toString()), s.append("bitmap", a, "auto-painter.png"), s.append("userId", r.toString());
    const i = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: s,
      credentials: "include"
    });
    if (i.status === l.FORBIDDEN) {
      const c = await i.json().catch(() => null);
      if (typeof(c == null ? void 0 : c.charges) == "number") throw new Error(Iy({
        charges: Math.floor(c.charges),
        pixels: n.length
      }));
      const _ = typeof(c == null ? void 0 : c.error) == "string" ? c.error.trim() : "";
      throw _ && _ !== "Forbidden" ? new Error(_) : new Error("Auto painter is restricted to administrators.")
    }
    if (i.status !== l.OK) throw new Error(m());
    return i.json()
  }
  async getPixelInfo({
    season: n,
    tile: [e, r],
    pixel: [o, a]
  }) {
    const s = new URLSearchParams;
    s.set("x", String(o)), s.set("y", String(a));
    const i = await this.request(`/s${n}/pixel/${e}/${r}?${s.toString()}`, {
      credentials: "include"
    });
    if (i.status !== l.OK) {
      const c = await i.text();
      throw new Error(I_({
        err: c
      }))
    }
    return i.json()
  }
  async getPixelAreaInfo({
    season: n,
    tile: [e, r],
    p0: [o, a],
    p1: [s, i]
  }) {
    const c = await this.request(`/staff/tools/select-area/s${n}/${e}/${r}?x0=${o}&y0=${a}&x1=${s}&y1=${i}`, {
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
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(nc());
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
    if (e.status === l.BAD_REQUEST) throw new Error(Xm());
    if (e.status === l.CONFLICT) throw new Error(ew());
    if (e.status === l.FORBIDDEN) throw new Error(ry());
    if (e.status === l.TOO_MANY_REQUESTS) throw new Error(Mr());
    if (e.status === l.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(fw());
    if (e.status === l.LOCKED) throw new Error(w1());
    if (e.status === l.UNPROCESSABLE_ENTITY) throw new Error(ch());
    if (e.status === l.NOT_ACCEPTABLE) throw new Error(k1());
    if (e.status === l.PRECONDITION_FAILED) throw new Error(ql());
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
      if (r.status === l.GONE) throw new Error(tf());
      if (r.status === l.BAD_REQUEST) throw new Error(dm());
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(Mr());
      if (r.status !== l.OK) throw new Error(m())
    } else {
      if (r.status === l.BAD_REQUEST) throw new Error(Qp());
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
      if (o === "invalid_name") throw new Error(xr());
      if (o === "invalid_discord") throw new Error(Sm());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const a = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(Cg({
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
    if (e.status === l.BAD_REQUEST) throw new Error(Kb());
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
    if (e.status === l.FORBIDDEN) throw new Error(hy());
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
    if (r.status === l.BAD_REQUEST) throw new Error($h());
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
    Date.now() - this.lastHotspotRequestAt < bE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== l.OK) throw e.status === l.NOT_FOUND ? new Error(Cr()) : e.status === l.FORBIDDEN ? new Error(Ur()) : e.status === l.CONFLICT ? new Error(Br()) : new Error(m())
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
      throw r.error === "max_characters" ? new Error(Dc()) : r.error === "name_taken" ? new Error(mc()) : r.error == "empty_name" ? new Error(jc()) : new Error(m())
    } else throw e.status === l.FORBIDDEN ? new Error(hv()) : new Error(m())
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
    if (e.status !== l.OK) throw e.status === l.FORBIDDEN ? new Error(Ye()) : e.status === l.BAD_REQUEST ? new Error(G_()) : new Error(m())
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
      s = Array.isArray(a == null ? void 0 : a.members) ? a.members : [];
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
      total: Number((a == null ? void 0 : a.total) ?? s.length)
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
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(vh()) : new Error(m())
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
    for (const r of e.tickets) r.reports.sort((o, a) => jr[o.reason] - jr[a.reason]);
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
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new b(M0(), l.CONFLICT) : new b(m(), l.CONFLICT)
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
    if (o.status === l.FORBIDDEN) throw new b(X0(), l.FORBIDDEN);
    if (o.status === l.CONFLICT) throw new b(cE(), l.CONFLICT);
    if (o.status !== l.OK) throw new b(m(), o.status)
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
      throw console.error("Fetch error:", i), this.online = !1, new Error(ll(), {
        cause: i
      })
    }
    if (r.status === l.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Lb());
    const o = ((s = r.headers.get("cf-mitigated")) == null ? void 0 : s.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (gt.setCfLikelyAutomated(!0), !await yo()) throw new Error(Sn());
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === l.TOO_MANY_REQUESTS) throw new Error(d0());
      if (r.status === l.REQUEST_TIMEOUT) throw new Error(Uw());
      if (r.status === l.SERVICE_UNAVAILABLE) throw new Error(lb())
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
      const s = a.is_dollar ?? a.isDollar ?? a.currency ?? a.Currency ?? 0;
      let i;
      if (typeof s == "string") {
        const p = s.toLowerCase();
        i = p === "usd" || p === "dollar" || p === "true"
      } else typeof s == "number" ? i = s !== 0 : i = !!s;
      const c = typeof a.createdAt == "string" ? a.createdAt : a.CreatedAt ? new Date(a.CreatedAt).toISOString() : "",
        _ = a.product_variant ?? a.productVariant,
        u = _ == null || _ === "" ? null : Number(_);
      return {
        product_name: String(a.productName ?? a.product_name ?? ""),
        amount: Number(a.amount ?? 0),
        price: Number(a.price ?? 0),
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
        s = (a == null ? void 0 : a.error) ?? "";
      throw s === "invalid_name" ? new b(xr(), l.BAD_REQUEST) : new b(typeof s == "string" && s ? s : m(), l.BAD_REQUEST)
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
      throw a === "email_required" || a === "invalid_email" ? new b(h_(), l.BAD_REQUEST) : new b(typeof a == "string" && a ? a : m(), l.BAD_REQUEST)
    }
    if (r.status === l.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const s = new b(typeof(o == null ? void 0 : o.userId) == "number" ? r_({
          userId: o.userId
        }) : Vd(), l.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (s.userId = o.userId), s
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
    const s = await a.json();
    return Array.isArray(s == null ? void 0 : s.tickets) ? s.tickets : []
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
    var o, a, s, i, c;
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
          picture: ((s = _.handledBy) == null ? void 0 : s.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((c = (i = _.reports) == null ? void 0 : i[0]) == null ? void 0 : c.reason) ?? "other"),
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
        if (await Dr(a.tier)) return this.submitBanAppeal(n);
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
    if (!r.ok) throw r.status === 500 ? new b(m(), r.status) : new b(Hp(), r.status);
    return r.json()
  }
  validWaybackInput(n) {
    const e = Number.isFinite(n.timestamp) && Number.isInteger(n.timestamp) && n.timestamp >= 0 && n.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(n.season) && Number.isInteger(n.season) && n.season >= 0 && n.season < yE.length,
      o = Number.isFinite(n.limit) && Number.isInteger(n.limit) && n.limit > 0 && n.limit <= wE.tools.wayback.limit,
      a = Number.isFinite(n.tileX) && Number.isFinite(n.tileY) && Number.isInteger(n.tileX) && Number.isInteger(n.tileY) && n.tileX >= 0 && n.tileY >= 0,
      s = n.cursorTs !== void 0,
      i = n.cursorUserId !== void 0,
      c = n.cursorAllianceId !== void 0,
      _ = n.cursorPixelsCount !== void 0,
      u = s || i || c || _,
      p = s && i && c && _;
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
    if (e.status === l.NOT_FOUND) throw new Error(Cr());
    if (e.status === l.FORBIDDEN) throw new Error(Ur());
    if (e.status === l.CONFLICT) throw new Error(Br());
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

function EE(t) {
  var f, d;
  if (!t.length) throw new Error("Auto painter request does not contain any pixels.");
  const n = t[0].season;
  for (const g of t)
    if (g.season !== n) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = Pn.seasons) == null ? void 0 : f[n];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let o = Number.POSITIVE_INFINITY,
    a = Number.POSITIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY;
  const c = t.map(g => {
      const h = Math.round(g.tile[0] * r + g.pixel[0]),
        y = Math.round(g.tile[1] * r + g.pixel[1]);
      return h < o && (o = h), y < a && (a = y), h > s && (s = h), y > i && (i = y), {
        x: h,
        y,
        colorIdx: g.colorIdx
      }
    }),
    _ = s - o + 1,
    u = i - a + 1;
  if (!Number.isFinite(_) || !Number.isFinite(u) || _ <= 0 || u <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const p = new Uint8ClampedArray(_ * u * 4);
  for (const {
      x: g,
      y: h,
      colorIdx: y
    }
    of c) {
    const C = (d = Pn.colors) == null ? void 0 : d[y];
    if (!C) throw new Error(`Unknown palette color index: ${y}`);
    const v = g - o,
      T = ((h - a) * _ + v) * 4,
      [N, O, w] = C.rgb;
    p[T] = N, p[T + 1] = O, p[T + 2] = w, p[T + 3] = y === 0 ? 1 : 255
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
async function TE(t) {
  const n = SE(t.width, t.height),
    e = n.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(t.width, t.height);
  return r.data.set(t.data), e.putImageData(r, 0, 0), "convertToBlob" in n ? n.convertToBlob({
    type: "image/png"
  }) : new Promise((o, a) => {
    n.toBlob(s => {
      if (!s) {
        a(new Error("Failed to encode auto painter bitmap."));
        return
      }
      o(s)
    }, "image/png")
  })
}

function SE(t, n) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(t, n);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = t, e.height = n, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ze = new vE(Bn);
typeof window < "u" && No(() => {
  let t = ze.online;
  Co(() => {
    const n = ze.online;
    n && !t && window.dispatchEvent(new CustomEvent("wplace:online")), t = n
  })
});
const wT = t => new URL(t, Bn).toString();

function Eo(t, n) {
  if (!(t != null && t.length)) return !1;
  for (const e of t)
    if (e === n) return !0;
  return !1
}

function AE(t, n) {
  for (const e of n)
    if (Eo(t, e)) return !0;
  return !1
}

function bT(...t) {
  return t.filter(Boolean).join(" ")
}
const OE = typeof document < "u";
let Wr = 0;
var Bt, Ut, Ht;
class RE {
  constructor() {
    J(this, Bt, me(rn([])));
    J(this, Ut, me(rn([])));
    J(this, Ht, n => {
      const e = this.toasts.findIndex(r => r.id === n);
      return e === -1 ? null : e
    });
    q(this, "addToast", n => {
      OE && this.toasts.unshift(n)
    });
    q(this, "updateToast", ({
      id: n,
      data: e,
      type: r,
      message: o
    }) => {
      const a = this.toasts.findIndex(i => i.id === n),
        s = this.toasts[a];
      this.toasts[a] = {
        ...s,
        ...e,
        id: n,
        title: o,
        type: r,
        updated: !0
      }
    });
    q(this, "create", n => {
      var i;
      const {
        message: e,
        ...r
      } = n, o = typeof(n == null ? void 0 : n.id) == "number" || n.id && ((i = n.id) == null ? void 0 : i.length) > 0 ? n.id : Wr++, a = n.dismissable === void 0 ? !0 : n.dismissable, s = n.type === void 0 ? "default" : n.type;
      return sr(() => {
        this.toasts.find(_ => _.id === o) ? this.updateToast({
          id: o,
          data: n,
          type: s,
          message: e,
          dismissable: a
        }) : this.addToast({
          ...r,
          id: o,
          title: e,
          dismissable: a,
          type: s
        })
      }), o
    });
    q(this, "dismiss", n => (sr(() => {
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
    q(this, "remove", n => {
      if (n === void 0) {
        this.toasts = [];
        return
      }
      const e = L(this, Ht).call(this, n);
      if (e !== null) return this.toasts.splice(e, 1), n
    });
    q(this, "message", (n, e) => this.create({
      ...e,
      type: "default",
      message: n
    }));
    q(this, "error", (n, e) => this.create({
      ...e,
      type: "error",
      message: n
    }));
    q(this, "success", (n, e) => this.create({
      ...e,
      type: "success",
      message: n
    }));
    q(this, "info", (n, e) => this.create({
      ...e,
      type: "info",
      message: n
    }));
    q(this, "warning", (n, e) => this.create({
      ...e,
      type: "warning",
      message: n
    }));
    q(this, "loading", (n, e) => this.create({
      ...e,
      type: "loading",
      message: n
    }));
    q(this, "promise", (n, e) => {
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
      return o.then(s => {
        if (typeof s == "object" && s && "ok" in s && typeof s.ok == "boolean" && !s.ok) {
          a = !1;
          const i = DE(s);
          this.create({
            id: r,
            type: "error",
            message: i
          })
        } else if (e.success !== void 0) {
          a = !1;
          const i = typeof e.success == "function" ? e.success(s) : e.success;
          this.create({
            id: r,
            type: "success",
            message: i
          })
        }
      }).catch(s => {
        if (e.error !== void 0) {
          a = !1;
          const i = typeof e.error == "function" ? e.error(s) : e.error;
          this.create({
            id: r,
            type: "error",
            message: i
          })
        }
      }).finally(() => {
        var s;
        a && (this.dismiss(r), r = void 0), (s = e.finally) == null || s.call(e)
      }), r
    });
    q(this, "custom", (n, e) => {
      const r = (e == null ? void 0 : e.id) || Wr++;
      return this.create({
        component: n,
        id: r,
        ...e
      }), r
    });
    q(this, "removeHeight", n => {
      this.heights = this.heights.filter(e => e.toastId !== n)
    });
    q(this, "setHeight", n => {
      const e = L(this, Ht).call(this, n.toastId);
      if (e === null) {
        this.heights.push(n);
        return
      }
      this.heights[e] = n
    });
    q(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return te(L(this, Bt))
  }
  set toasts(n) {
    oe(L(this, Bt), n, !0)
  }
  get heights() {
    return te(L(this, Ut))
  }
  set heights(n) {
    oe(L(this, Ut), n, !0)
  }
}
Bt = new WeakMap, Ut = new WeakMap, Ht = new WeakMap;

function DE(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const De = new RE;

function IE(t, n) {
  return De.create({
    message: t,
    ...n
  })
}
var ln;
class vT {
  constructor() {
    J(this, ln, mt(() => De.toasts.filter(n => !n.dismiss)))
  }
  get toasts() {
    return te(L(this, ln))
  }
}
ln = new WeakMap;
const NE = IE,
  CE = Object.assign(NE, {
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
class kE {
  constructor() {
    q(this, "channel", new BroadcastChannel("user-channel"));
    J(this, Ft, me());
    J(this, jt, me(!0));
    J(this, Gt, me());
    J(this, Wt, me(Date.now()));
    J(this, Vt, mt(() => {
      if (!this.data) return;
      const n = this.data.charges;
      if (n.count > n.max) return n.count;
      const e = n.count + Math.max((ho.now - this.lastFetch) / n.cooldownMs, 0);
      return Math.min(n.max, e)
    }));
    J(this, zt, mt(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    J(this, $t, mt(() => {
      var n;
      return new ui(Yr(((n = this.data) == null ? void 0 : n.flagsBitmap) ?? "AA=="))
    }));
    J(this, qt, mt(() => {
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
    return te(L(this, Ft))
  }
  set data(n) {
    oe(L(this, Ft), n, !0)
  }
  get loading() {
    return te(L(this, jt))
  }
  set loading(n) {
    oe(L(this, jt), n, !0)
  }
  get notificationCount() {
    return te(L(this, Gt))
  }
  set notificationCount(n) {
    oe(L(this, Gt), n, !0)
  }
  get lastFetch() {
    return te(L(this, Wt))
  }
  set lastFetch(n) {
    oe(L(this, Wt), n)
  }
  get charges() {
    return te(L(this, Vt))
  }
  set charges(n) {
    oe(L(this, Vt), n)
  }
  get cooldown() {
    return te(L(this, zt))
  }
  set cooldown(n) {
    oe(L(this, zt), n)
  }
  get flagsBitmap() {
    return te(L(this, $t))
  }
  set flagsBitmap(n) {
    oe(L(this, $t), n)
  }
  get timeoutUntil() {
    return te(L(this, qt))
  }
  set timeoutUntil(n) {
    oe(L(this, qt), n)
  }
  async refresh() {
    var n, e;
    try {
      return this.loading = !0, this.data = await ze.me(), this.lastFetch = Date.now(), (n = this.channel) == null || n.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ze.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (ua("userId", {
        id: this.data.id
      }), gt.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), CE.warning(Vg(), {
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
    return Eo((e = this.data) == null ? void 0 : e.permissions, n)
  }
  hasAnyPermission(n) {
    var e;
    return AE((e = this.data) == null ? void 0 : e.permissions, n)
  }
}
Ft = new WeakMap, jt = new WeakMap, Gt = new WeakMap, Wt = new WeakMap, Vt = new WeakMap, zt = new WeakMap, $t = new WeakMap, qt = new WeakMap;
const ct = new kE;
let X;
const Me = new Array(128).fill(void 0);
Me.push(void 0, null, !0, !1);

function z(t) {
  return Me[t]
}
let vt = Me.length;

function Q(t) {
  vt === Me.length && Me.push(Me.length + 1);
  const n = vt;
  return vt = Me[n], Me[n] = t, n
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
const To = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && To.decode();
let ht = null;

function en() {
  return (ht === null || ht.byteLength === 0) && (ht = new Uint8Array(X.memory.buffer)), ht
}

function tn(t, n) {
  return t = t >>> 0, To.decode(en().subarray(t, t + n))
}

function xE(t) {
  t < 132 || (Me[t] = vt, vt = t)
}

function Vr(t) {
  const n = z(t);
  return xE(t), n
}
let Qe = null;

function cn() {
  return (Qe === null || Qe.buffer.detached === !0 || Qe.buffer.detached === void 0 && Qe.buffer !== X.memory.buffer) && (Qe = new DataView(X.memory.buffer)), Qe
}
let tt = 0;
const nn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  PE = typeof nn.encodeInto == "function" ? function(t, n) {
    return nn.encodeInto(t, n)
  } : function(t, n) {
    const e = nn.encode(t);
    return n.set(e), {
      read: t.length,
      written: e.length
    }
  };

function Kt(t, n, e) {
  if (e === void 0) {
    const i = nn.encode(t),
      c = n(i.length, 1) >>> 0;
    return en().subarray(c, c + i.length).set(i), tt = i.length, c
  }
  let r = t.length,
    o = n(r, 1) >>> 0;
  const a = en();
  let s = 0;
  for (; s < r; s++) {
    const i = t.charCodeAt(s);
    if (i > 127) break;
    a[o + s] = i
  }
  if (s !== r) {
    s !== 0 && (t = t.slice(s)), o = e(o, r, r = s + t.length * 3, 1) >>> 0;
    const i = en().subarray(o + s, o + r),
      c = PE(t, i);
    s += c.written, o = e(o, r, s, 1) >>> 0
  }
  return tt = s, o
}

function LE(t) {
  const n = Kt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = tt;
  X.set_fingerprint_v2(n, e)
}

function ME(t) {
  let n, e;
  try {
    const a = X.__wbindgen_add_to_stack_pointer(-16),
      s = Kt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
      i = tt;
    X.get_pawtected_endpoint_payload(a, s, i);
    var r = cn().getInt32(a + 0, !0),
      o = cn().getInt32(a + 4, !0);
    return n = r, e = o, tn(r, o)
  } finally {
    X.__wbindgen_add_to_stack_pointer(16), X.__wbindgen_export_3(n, e, 1)
  }
}

function BE(t) {
  X.set_automated_browser(t)
}

function An(t) {
  X.set_user_id(t)
}

function UE(t) {
  X.set_automated_clicks(t)
}

function HE(t) {
  const n = Kt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = tt;
  X.set_detected_bot(n, e)
}

function FE(t) {
  const n = Kt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = tt;
  X.request_url(n, e)
}

function jE(t) {
  X.set_cf_likely_automated(t)
}

function GE(t) {
  const n = Kt(t, X.__wbindgen_export_1, X.__wbindgen_export_2),
    e = tt;
  X.set_fingerprint(n, e)
}
async function WE(t, n) {
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

function VE() {
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
      const o = z(n).call(z(e), z(r));
      return Q(o)
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
    const r = new Function(tn(n, e));
    return Q(r)
  }, t.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(n, e, r) {
    const o = new Uint8Array(z(n), e >>> 0, r >>> 0);
    return Q(o)
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
      z(n).randomFillSync(Vr(e))
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
    const o = z(n).subarray(e >>> 0, r >>> 0);
    return Q(o)
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
      o = typeof r == "number" ? r : void 0;
    cn().setFloat64(n + 8, Je(o) ? 0 : o, !0), cn().setInt32(n + 0, !Je(o), !0)
  }, t.wbg.__wbindgen_object_clone_ref = function(n) {
    const e = z(n);
    return Q(e)
  }, t.wbg.__wbindgen_object_drop_ref = function(n) {
    Vr(n)
  }, t.wbg.__wbindgen_string_new = function(n, e) {
    const r = tn(n, e);
    return Q(r)
  }, t.wbg.__wbindgen_throw = function(n, e) {
    throw new Error(tn(n, e))
  }, t
}

function zE(t, n) {
  return X = t.exports, So.__wbindgen_wasm_module = n, Qe = null, ht = null, X
}
async function So(t) {
  if (X !== void 0) return X;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? {
    module_or_path: t
  } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const n = VE();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const {
    instance: e,
    module: r
  } = await WE(await t, n);
  return zE(e, r)
}
class $E {
  constructor() {
    q(this, "interval");
    q(this, "storagesEmpty", !1);
    q(this, "storages", [new un, new Ln, new Mn, new KE]);
    q(this, "pawtectLoaded");
    q(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!ct.data || this.storagesEmpty || localStorage.getItem(un.KEY))) {
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
    const e = Ve.day;
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
        await So(la), (n = ct.data) != null && n.id && An(ct.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: qE((r, o) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && FE(a), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, ca(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(n) {
    await this.loadPawtect(), An(n)
  }
  async setCfLikelyAutomated(n) {
    await this.loadPawtect(), jE(n)
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
    if (!await this.loadPawtect()) throw new Error(z1());
    const r = navigator.webdriver,
      [o, a, s] = await Promise.all([On(), xs(), si().catch(i => (console.error(i), {
        bot: !1
      }))]);
    return An(ct.data.id), GE(o), LE(a), BE(r), UE(ho.automatedClicks), s.bot && HE(s.botKind ?? "unknown"), ME(n)
  }
}

function qE(t) {
  return t.bind().bind()
}
const Ge = class Ge {
  static codec(n) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(n.length);
    for (let o = 0; o < n.length; o++) r[o] = n[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const n = localStorage.getItem(Ge.KEY);
      if (!n) return;
      const e = Uint8Array.from(atob(n), o => o.charCodeAt(0)),
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
q(Ge, "KEY", "ui_layout_v3"), q(Ge, "XOR_KEY", "wplace-prefs");
let un = Ge;
const We = class We {
  get() {
    try {
      const n = sessionStorage.getItem(We.KEY);
      if (!n) return;
      let e = "";
      for (let r = 0; r < n.length; r += 4) {
        const o = parseInt(n.slice(r, r + 4), 16);
        e += String.fromCharCode(o - We.SHIFT & 65535)
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
      const a = o.charCodeAt(0) + We.SHIFT & 65535;
      r += a.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(We.KEY, r)
  }
};
q(We, "KEY", "nav.cursor"), q(We, "SHIFT", 13);
let Ln = We;
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
q(Ze, "KEY", "_pf_uid"), q(Ze, "MAX_AGE", 3600 * 24 * 365);
let Mn = Ze;
class KE {
  constructor() {
    q(this, "packed")
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
const gt = new $E;
export {
  dT as $, xs as A, wE as B, vo as C, h_ as D, Dr as E, Sn as F, ZE as G, Op as H, ep as I, Cd as J, fu as K, yg as L, Df as M, eT as N, tT as O, mT as P, gT as Q, sT as R, hT as S, Ve as T, z1 as U, Kb as V, xo as W, wT as X, _T as Y, uT as Z, fT as _, ze as a, yT as a0, pT as a1, Hp as a2, Pn as b, m as c, cT as d, yd as e, eu as f, mf as g, jf as h, fp as i, ho as j, X0 as k, De as l, ag as m, bT as n, vT as o, iT as p, aT as q, Ae as r, lT as s, CE as t, ct as u, rT as v, nT as w, oT as x, gt as y, ci as z
};