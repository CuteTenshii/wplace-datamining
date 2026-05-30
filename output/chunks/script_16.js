var wa = Object.defineProperty;
var er = t => {
  throw TypeError(t)
};
var ba = (t, n, e) => n in t ? wa(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : t[n] = e;
var q = (t, n, e) => ba(t, typeof n != "symbol" ? n + "" : n, e),
  va = (t, n, e) => n.has(t) || er("Cannot " + e);
var x = (t, n, e) => (va(t, n, "read from private field"), e ? e.call(t) : n.get(t)),
  J = (t, n, e) => n.has(t) ? er("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
import {
  f as Ea,
  h as Aa,
  P as Hn,
  g as On
} from "./DqVoli-1.js";
import {
  e as me,
  i as Q,
  h as ne,
  g as an,
  bM as Na,
  I as Ta,
  L as tr,
  u as pt
} from "./Dbe4PVAU.js";
import {
  g as I
} from "./BhCkpOlh.js";
const Sa = !0,
  Oa = Sa,
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
const Ra = "Sentry Logger ",
  nr = {};

function Ia(t) {
  if (!("console" in Fe)) return t();
  const n = Fe.console,
    e = {},
    r = Object.keys(nr);
  r.forEach(a => {
    const o = nr[a];
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

function Da() {
  Vn().enabled = !0
}

function ka() {
  Vn().enabled = !1
}

function Ur() {
  return Vn().enabled
}

function Ma(...t) {
  Gn("log", ...t)
}

function La(...t) {
  Gn("warn", ...t)
}

function Ca(...t) {
  Gn("error", ...t)
}

function Gn(t, ...n) {
  lt && Ur() && Ia(() => {
    Fe.console[t](`${Ra}[${t}]:`, ...n)
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
    enable: Da,
    disable: ka,
    isEnabled: Ur,
    log: Ma,
    warn: La,
    error: Ca
  },
  Pa = Object.prototype.toString;

function xa(t, n) {
  return Pa.call(t) === `[object ${n}]`
}

function Ba(t) {
  return xa(t, "Object")
}

function Ha(t) {
  return !!(t != null && t.then && typeof t.then == "function")
}

function Fa(t, n, e) {
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

function Ua() {
  return _n(() => Date.now())
}

function ja(t, n = 0) {
  return typeof t != "string" || n === 0 || t.length <= n ? t : `${t.slice(0,n)}...`
}

function Ga() {
  const t = Fe;
  return t.crypto || t.msCrypto
}
let yn;

function Va() {
  return Rn() * 16
}

function bt(t = Ga()) {
  try {
    if (t != null && t.randomUUID) return _n(() => t.randomUUID()).replace(/-/g, "")
  } catch {}
  return yn || (yn = "10000000100040008000" + 1e11), yn.replace(/[018]/g, n => (n ^ (Va() & 15) >> n / 4).toString(16))
}
const jr = 1e3;

function Gr() {
  return Ua() / jr
}

function Wa() {
  const {
    performance: t
  } = Fe;
  if (!(t != null && t.now) || !t.timeOrigin) return Gr;
  const n = t.timeOrigin;
  return () => (n + _n(() => t.now())) / jr
}
let rr;

function za() {
  return (rr ?? (rr = Wa()))()
}

function $a(t, n = {}) {
  if (n.user && (!t.ipAddress && n.user.ip_address && (t.ipAddress = n.user.ip_address), !t.did && !n.did && (t.did = n.user.id || n.user.email || n.user.username)), t.timestamp = n.timestamp || za(), n.abnormal_mechanism && (t.abnormal_mechanism = n.abnormal_mechanism), n.ignoreDuration && (t.ignoreDuration = n.ignoreDuration), n.sid && (t.sid = n.sid.length === 32 ? n.sid : bt()), n.init !== void 0 && (t.init = n.init), !t.did && n.did && (t.did = `${n.did}`), typeof n.started == "number" && (t.started = n.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof n.duration == "number") t.duration = n.duration;
  else {
    const e = t.timestamp - t.started;
    t.duration = e >= 0 ? e : 0
  }
  n.release && (t.release = n.release), n.environment && (t.environment = n.environment), !t.ipAddress && n.ipAddress && (t.ipAddress = n.ipAddress), !t.userAgent && n.userAgent && (t.userAgent = n.userAgent), typeof n.errors == "number" && (t.errors = n.errors), n.status && (t.status = n.status)
}

function Vr(t, n, e = 2) {
  if (!n || typeof n != "object" || e <= 0) return n;
  if (t && Object.keys(n).length === 0) return t;
  const r = {
    ...t
  };
  for (const a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = Vr(r[a], n[a], e - 1));
  return r
}

function ar() {
  return bt()
}
const In = "_sentrySpan";

function or(t, n) {
  n ? Fa(t, In, n) : delete t[In]
}

function ir(t) {
  return t[In]
}
const qa = 100;
class et {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: ar(),
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
    }, n._client = this._client, n._lastEventId = this._lastEventId, n._conversationId = this._conversationId, or(n, ir(this)), n
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
    }, this._session && $a(this._session, {
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
      r = e instanceof et ? e.getScopeData() : Ba(e) ? n : void 0,
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
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, or(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: ar(),
      sampleRand: Rn()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(n, e) {
    var o;
    const r = typeof e == "number" ? e : qa;
    if (r <= 0) return this;
    const a = {
      timestamp: Gr(),
      ...n,
      message: n.message ? ja(n.message, 2048) : n.message
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
      span: ir(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(n) {
    return this._sdkProcessingMetadata = Vr(this._sdkProcessingMetadata, n, 2), this
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

function Ka() {
  return jn("defaultCurrentScope", () => new et)
}

function Xa() {
  return jn("defaultIsolationScope", () => new et)
}
class Ya {
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
    return Ha(r) ? r.then(a => (this._popScope(), a), a => {
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
  return n.stack = n.stack || new Ya(Ka(), Xa())
}

function Ja(t) {
  return ft().withScope(t)
}

function Za(t, n) {
  const e = ft();
  return e.withScope(() => (e.getStackTop().scope = t, n(t)))
}

function sr(t) {
  return ft().withScope(() => t(ft().getIsolationScope()))
}

function Qa() {
  return {
    withIsolationScope: sr,
    withScope: Ja,
    withSetScope: Za,
    withSetIsolationScope: (t, n) => sr(n),
    getCurrentScope: () => ft().getScope(),
    getIsolationScope: () => ft().getIsolationScope()
  }
}

function Wr(t) {
  const n = Un(t);
  return n.acs ? n.acs : Qa()
}

function eo() {
  const t = Fn();
  return Wr(t).getCurrentScope()
}

function to() {
  const t = Fn();
  return Wr(t).getIsolationScope()
}

function no(t, n) {
  return eo().captureException(t, void 0)
}

function ro(t, n) {
  to().setContext(t, n)
}
const ao = "" + new URL("../assets/pawtect_wasm_bg.Ckfht_86.wasm", import.meta.url).href;
var oo = "2.0.0";
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

function io(t, n) {
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
async function so(t) {
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
      o instanceof Y ? n[r] = {
        state: o.state,
        error: `${o.name}: ${o.message}`
      } : n[r] = {
        state: -3,
        error: o instanceof Error ? `${o.name}: ${o.message}` : String(o)
      }
    }
  })), n
}

function co({
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

function uo(t, n) {
  if ("find" in t) return t.find(n);
  for (let e = 0; e < t.length; e++)
    if (n(t[e], e, t)) return t[e]
}

function cr(t) {
  return Object.getOwnPropertyNames(t)
}

function Dn(t, ...n) {
  for (const e of n)
    if (typeof e == "string") {
      if (Qt(t, e)) return !0
    } else if (uo(t, a => e.test(a)) != null) return !0;
  return !1
}

function dt(t) {
  return t.reduce((n, e) => n + (e ? 1 : 0), 0)
}

function lo({
  documentElementKeys: t
}) {
  if (t.state !== 0) return !1;
  if (Dn(t.value, "selenium", "webdriver", "driver")) return V.Selenium
}

function _o({
  errorTrace: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return V.PhantomJS
}

function fo({
  evalLength: t,
  browserKind: n,
  browserEngineKind: e
}) {
  if (t.state !== 0 || n.state !== 0 || e.state !== 0) return;
  const r = t.value;
  return e.value === "unknown" ? !1 : r === 37 && !Qt(["webkit", "gecko"], e.value) || r === 39 && !Qt(["internet_explorer"], n.value) || r === 33 && !Qt(["chromium"], e.value)
}

function mo({
  functionBind: t
}) {
  if (t.state === -2) return V.PhantomJS
}

function po({
  languages: t
}) {
  if (t.state === 0 && t.value.length === 0) return V.HeadlessChrome
}

function ho({
  mimeTypesConsistent: t
}) {
  if (t.state === 0 && !t.value) return V.Unknown
}

function go({
  notificationPermissions: t,
  browserKind: n
}) {
  if (n.state !== 0 || n.value !== "chrome") return !1;
  if (t.state === 0 && t.value) return V.HeadlessChrome
}

function yo({
  pluginsArray: t
}) {
  if (t.state === 0 && !t.value) return V.HeadlessChrome
}

function wo({
  pluginsLength: t,
  android: n,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(t.state !== 0 || n.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || n.value || r.value !== "chromium") && t.value === 0) return V.HeadlessChrome
}

function bo({
  process: t
}) {
  var n;
  if (t.state !== 0) return !1;
  if (t.value.type === "renderer" || ((n = t.value.versions) === null || n === void 0 ? void 0 : n.electron) != null) return V.Electron
}

function vo({
  productSub: t,
  browserKind: n
}) {
  if (t.state !== 0 || n.state !== 0) return !1;
  if ((n.value === "chrome" || n.value === "safari" || n.value === "opera" || n.value === "wechat") && t.value !== "20030107") return V.Unknown
}

function Eo({
  userAgent: t
}) {
  if (t.state !== 0) return !1;
  if (/PhantomJS/i.test(t.value)) return V.PhantomJS;
  if (/Headless/i.test(t.value)) return V.HeadlessChrome;
  if (/Electron/i.test(t.value)) return V.Electron;
  if (/slimerjs/i.test(t.value)) return V.SlimerJS
}

function Ao({
  webDriver: t
}) {
  if (t.state === 0 && t.value) return V.HeadlessChrome
}

function No({
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

function To({
  windowExternal: t
}) {
  if (t.state !== 0) return !1;
  if (/Sequentum/i.test(t.value)) return V.Sequentum
}

function So({
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

function Oo({
  distinctiveProps: t
}) {
  if (t.state !== 0) return !1;
  const n = t.value;
  let e;
  for (e in n)
    if (n[e]) return e
}
const Ro = {
  detectAppVersion: co,
  detectDocumentAttributes: lo,
  detectErrorTrace: _o,
  detectEvalLengthInconsistency: fo,
  detectFunctionBind: mo,
  detectLanguagesLengthInconsistency: po,
  detectNotificationPermissions: go,
  detectPluginsArray: yo,
  detectPluginsLengthInconsistency: wo,
  detectProcess: bo,
  detectUserAgent: Eo,
  detectWebDriver: Ao,
  detectWebGL: No,
  detectWindowExternal: To,
  detectWindowSize: So,
  detectMimeTypesConsistent: ho,
  detectProductSub: vo,
  detectDistinctiveProperties: Oo
};

function Io() {
  const t = navigator.appVersion;
  if (t == null) throw new Y(-1, "navigator.appVersion is undefined");
  return t
}

function Do() {
  if (document.documentElement === void 0) throw new Y(-1, "document.documentElement is undefined");
  const {
    documentElement: t
  } = document;
  if (typeof t.getAttributeNames != "function") throw new Y(-2, "document.documentElement.getAttributeNames is not a function");
  return t.getAttributeNames()
}

function ko() {
  try {
    null[0]()
  } catch (t) {
    if (t instanceof Error && t.stack != null) return t.stack.toString()
  }
  throw new Y(-3, "errorTrace signal unexpected behaviour")
}

function Mo() {
  return eval.toString().length
}

function Lo() {
  if (Function.prototype.bind === void 0) throw new Y(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function Wn() {
  var t, n;
  const e = window,
    r = navigator;
  return dt(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : dt(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : dt(["buildID" in navigator, "MozAppearance" in ((n = (t = document.documentElement) === null || t === void 0 ? void 0 : t.style) !== null && n !== void 0 ? n : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Co() {
  var t;
  const n = (t = navigator.userAgent) === null || t === void 0 ? void 0 : t.toLowerCase();
  return Pe(n, "edg/") ? "edge" : Pe(n, "trident") || Pe(n, "msie") ? "internet_explorer" : Pe(n, "wechat") ? "wechat" : Pe(n, "firefox") ? "firefox" : Pe(n, "opera") || Pe(n, "opr") ? "opera" : Pe(n, "chrome") ? "chrome" : Pe(n, "safari") ? "safari" : "unknown"
}

function Po() {
  const t = Wn(),
    n = t === "chromium",
    e = t === "gecko",
    r = window,
    a = navigator,
    o = "connection";
  return n ? dt([!("SharedWorker" in r), a[o] && "ontypechange" in a[o], !("sinkId" in new Audio)]) >= 2 : e ? dt(["onorientationchange" in r, "orientation" in r, /android/i.test(a.appVersion)]) >= 2 : !1
}

function xo() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Bo() {
  const t = window;
  return dt([!("MediaSettingsRange" in t), "RTCEncodedAudioFrame" in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3
}

function Ho() {
  const t = navigator,
    n = [],
    e = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
  if (e !== void 0 && n.push([e]), Array.isArray(t.languages)) Wn() === "chromium" && Bo() || n.push(t.languages);
  else if (typeof t.languages == "string") {
    const r = t.languages;
    r && n.push(r.split(","))
  }
  return n
}

function Fo() {
  if (navigator.mimeTypes === void 0) throw new Y(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: t
  } = navigator;
  let n = Object.getPrototypeOf(t) === MimeTypeArray.prototype;
  for (let e = 0; e < t.length; e++) n && (n = Object.getPrototypeOf(t[e]) === MimeType.prototype);
  return n
}
async function Uo() {
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

function jo() {
  if (navigator.plugins === void 0) throw new Y(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new Y(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function Go() {
  if (navigator.plugins === void 0) throw new Y(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new Y(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function Vo() {
  const {
    process: t
  } = window, n = "window.process is";
  if (t === void 0) throw new Y(-1, `${n} undefined`);
  if (t && typeof t != "object") throw new Y(-3, `${n} not an object`);
  return t
}

function Wo() {
  const {
    productSub: t
  } = navigator;
  if (t === void 0) throw new Y(-1, "navigator.productSub is undefined");
  return t
}

function zo() {
  if (navigator.connection === void 0) throw new Y(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new Y(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function $o() {
  return navigator.userAgent
}

function qo() {
  if (navigator.webdriver == null) throw new Y(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function Ko() {
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

function Xo() {
  if (window.external === void 0) throw new Y(-1, "window.external is undefined");
  const {
    external: t
  } = window;
  if (typeof t.toString != "function") throw new Y(-2, "window.external.toString is not a function");
  return t.toString()
}

function Yo() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function Jo() {
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
    r = cr(window);
  let a = [];
  window.document !== void 0 && (a = cr(window.document));
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
const Zo = {
  android: Po,
  browserKind: Co,
  browserEngineKind: Wn,
  documentFocus: xo,
  userAgent: $o,
  appVersion: Io,
  rtt: zo,
  windowSize: Yo,
  pluginsLength: Go,
  pluginsArray: jo,
  errorTrace: ko,
  productSub: Wo,
  windowExternal: Xo,
  mimeTypesConsistent: Fo,
  evalLength: Mo,
  webGL: Ko,
  webDriver: qo,
  languages: Ho,
  notificationPermissions: Uo,
  documentElementKeys: Do,
  functionBind: Lo,
  process: Vo,
  distinctiveProps: Jo
};
class Qo {
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
    const [n, e] = io(this.components, Ro);
    return this.detections = n, e
  }
  async collect() {
    return this.components = await so(Zo), this.components
  }
}

function ei() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const t = new XMLHttpRequest;
    t.open("get", `https://m1.openfpcdn.io/botd/v${oo}/npm-monitoring`, !0), t.send()
  } catch (t) {
    console.error(t)
  }
}
async function ti({
  monitoring: t = !0
} = {}) {
  t && ei();
  const n = new Qo;
  return await n.collect(), n
}
let wn = null;
async function ni() {
  return (await ri()).detect()
}

function ri() {
  return wn || (wn = ti({
    monitoring: !1
  })), wn
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
class ai {
  constructor(n) {
    q(this, "bytes");
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

function n2(t) {
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

function r2(t) {
  if (typeof FileReader > "u") {
    const n = t.type || "application/octet-stream";
    return t.arrayBuffer().then(e => `data:${n};base64,${$r(new Uint8Array(e))}`)
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

function a2(t) {
  if (!t.startsWith("data:")) throw new Error("Could not parse data URL");
  const n = t.indexOf(",");
  if (n === -1) throw new Error("Could not parse data URL");
  const e = t.slice(5, n),
    r = t.slice(n + 1),
    a = e.indexOf(";base64"),
    o = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const s = zr(r),
      i = new Uint8Array(s.byteLength);
    return i.set(s), new Blob([i], {
      type: o
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: o
  })
}
async function ur(t, n = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(t)),
    r = await crypto.subtle.digest(n, e);
  return Array.from(new Uint8Array(r)).map(o => o.toString(16).padStart(2, "0")).join("")
}
async function T(t, n = "SHA-256") {
  const e = new TextEncoder().encode(JSON.stringify(t)),
    r = await crypto.subtle.digest(n, e);
  return $r(new Uint8Array(r))
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
  qr = oi(),
  {
    captureError: X
  } = qr,
  M = (t, n = "") => {
    try {
      return t()
    } catch (e) {
      return n ? X(e, n) : X(e)
    }
  },
  be = t => {
    try {
      return t()
    } catch {
      return
    }
  },
  ii = () => ({
    data: qr.getErrors()
  });
var Ie = (t => (t.WINDOWS = "Windows", t.LINUX = "Linux", t.APPLE = "Apple", t.OTHER = "Other", t))(Ie || {});
const Kr = !globalThis.document && globalThis.WorkerGlobalScope;

function si() {
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (n) {
    return (n instanceof Error ? n.message : String(n)).length + (t + "").split(t.name).join("").length
  }
}
const fn = si(),
  le = fn == 80,
  At = fn == 58,
  tt = fn == 77,
  lr = {
    80: "V8",
    58: "SpiderMonkey",
    77: "JavaScriptCore"
  } [fn] || null,
  Xr = le && "flat" in Array.prototype && !("ReportingObserver" in globalThis);

function Yr() {
  return "brave" in navigator && Object.getPrototypeOf(navigator.brave).constructor.name == "Brave" && navigator.brave.isBrave.toString() == "function isBrave() { [native code] }"
}

function ci() {
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

function Jr(t, n) {
  const e = /win(dows|16|32|64|95|98|nt)|wow64/ig.test(t) ? Ie.WINDOWS : /android|linux|cros/ig.test(t) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(t) ? Ie.APPLE : Ie.OTHER;
  if (!n) return [e];
  const r = /win/ig.test(n) ? Ie.WINDOWS : /android|arm|linux/ig.test(n) ? Ie.LINUX : /(i(os|p(ad|hone|od)))|mac/ig.test(n) ? Ie.APPLE : Ie.OTHER;
  return [e, r]
}
const {
  userAgent: ui,
  platform: li
} = globalThis.navigator || {}, [on, dr] = Jr(ui, li), Zr = ({
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
}, Qr = ({
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
    L = /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i,
    v = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
    N = /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
    A = (D, S) => D.filter(w => S.test(w)).length;
  if (t = t.trim().replace(/\s{2,}/, " ").replace(e, ""), r.test(t)) {
    const D = t.match(r);
    if (!D) return "unknown";
    const w = D[0].slice(1, -1).replace(/,/g, ";").split(";").map(O => O.trim());
    if (A(w, a)) return w.map(O => i.test(O) ? i.exec(O)[0].replace("-", " ") : O).filter(O => !o.test(O)).join(" ").replace(n ? s : "", "").trim().replace(/\s{2,}/, " ");
    if (A(w, c)) return w.filter(O => !l.test(O)).join(" ").replace(/\sNT (\d+\.\d+)/, (O, E) => E == "10.0" ? " 10" : E == "6.3" ? " 8.1" : E == "6.2" ? " 8" : E == "6.1" ? " 7" : E == "6.0" ? " Vista" : E == "5.2" ? " XP Pro" : E == "5.1" ? " XP" : E == "5.0" ? " 2000" : E == "4.0" ? O : " " + E).replace(u, "(64-bit)").trim().replace(/\s{2,}/, " ");
    if (A(w, m)) return w.filter(O => !f.test(O)).join(" ").replace(n ? d : "", "").trim().replace(/\s{2,}/, " ");
    if (A(w, h)) return w.filter(O => !g.test(O)).join(" ").trim().replace(/\s{2,}/, " ");
    if (A(w, y)) return w.map(O => {
      if (v.test(O)) {
        const E = v.exec(O)[0],
          k = {
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
          P = /^10/.test(B) ? B : (/^\d{2,}/.exec(B) || [])[0],
          R = P ? k[P] : void 0;
        return R ? `macOS ${R}` : E
      }
      return O
    }).filter(O => !L.test(O)).join(" ").replace(/\slike mac.+/ig, "").trim().replace(/\s{2,}/, " ");
    {
      const O = w.filter(E => N.test(E));
      return O.length ? O.join(" ").trim().replace(/\s{2,}/, " ") : w.join(" ")
    }
  } else return "unknown"
}, ea = t => {
  const e = (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(t) || [])[1];
  return le && !!e
}, ie = (t = 0) => new Promise(n => setTimeout(n, t)), ta = [
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

function di(t) {
  var r;
  if (!t) return null;
  const n = /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i;
  return /radeon/i.test(t) ? "AMD" : /geforce/i.test(t) ? "NVIDIA" : (((r = n.exec(t)) == null ? void 0 : r[0]) || "other").toLocaleUpperCase()
}
const He = {},
  De = {
    AUDIO: !1,
    CANVAS: !1,
    FONTS: !1,
    SCREEN: !1,
    TIME_ZONE: !1,
    WEBGL: !1
  };
try {
  Oa && speechSynthesis.getVoices()
} catch {}

function _i() {
  const t = {};
  return {
    getRecords: () => t,
    documentLie: (n, e) => {
      const r = e instanceof Array;
      return t[n] ? r ? t[n] = [...t[n], ...e] : t[n].push(e) : r ? t[n] = e : t[n] = [e]
    }
  }
}
const na = _i(),
  {
    documentLie: re
  } = na,
  ra = `
	height: 100vh;
	width: 100vw;
	position: absolute;
	left:-10000px;
	visibility: hidden;
`;

function mn() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}

function fi(t) {
  try {
    if (!le) return t;
    const n = t.document.createElement("div");
    n.setAttribute("id", mn()), n.setAttribute("style", ra), n.innerHTML = "<div><iframe></iframe></div>", t.document.body.appendChild(n);
    const e = [...[...n.childNodes][0].childNodes][0];
    if (!e) return null;
    const {
      contentWindow: r
    } = e || {};
    if (!r) return null;
    const a = r.document.createElement("div");
    return a.innerHTML = "<div><iframe></iframe></div>", r.document.body.appendChild(a), [...[...a.childNodes][0].childNodes][0].contentWindow
  } catch (n) {
    return X(n, "client blocked behemoth iframe"), t
  }
}
const _r = mn(),
  mt = "Reflect" in globalThis;

function mi(t) {
  return t.constructor.name == "TypeError"
}

function ge({
  spawnErr: t,
  withStack: n,
  final: e
}) {
  try {
    throw t(), Error()
  } catch (r) {
    return mi(r) ? n ? n(r) : !1 : !0
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

function it(t, n, e = 1) {
  const r = t;
  return e === 0 ? n.test(r.message) : n.test(r.stack.split(`
`)[e])
}
const hi = /at Function\.toString /,
  gi = /at Object\.toString/,
  yi = /at (Function\.)?\[Symbol.hasInstance\]/,
  wi = /at (Proxy\.)?\[Symbol.hasInstance\]/,
  mr = /strict mode/;

function pr({
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
    "failed illegal error": !!r && ge({
      spawnErr: () => {
        r.prototype[o]
      }
    }),
    "failed undefined properties": !!r && !!s && /^(screen|navigator)$/i.test(s) && !!(Object.getOwnPropertyDescriptor(c[s.toLowerCase()], o) || mt && Reflect.getOwnPropertyDescriptor(c[s.toLowerCase()], o)),
    "failed call interface error": ge({
      spawnErr: () => {
        new n, n.call(e)
      }
    }),
    "failed apply interface error": ge({
      spawnErr: () => {
        new n, n.apply(e)
      }
    }),
    "failed new instance error": ge({
      spawnErr: () => {
        new n
      }
    }),
    "failed class extends error": !tt && ge({
      spawnErr: () => {
        class f extends n {}
      }
    }),
    "failed null conversion error": ge({
      spawnErr: () => {
        Object.setPrototypeOf(n, null).toString()
      },
      final: () => {
        Object.setPrototypeOf(n, i)
      }
    }),
    "failed toString": !fr(o)[t.Function.prototype.toString.call(n)] || !fr("toString")[t.Function.prototype.toString.call(n.toString)],
    'failed "prototype" in function': "prototype" in n,
    "failed descriptor": !!(Object.getOwnPropertyDescriptor(n, "arguments") || Reflect.getOwnPropertyDescriptor(n, "arguments") || Object.getOwnPropertyDescriptor(n, "caller") || Reflect.getOwnPropertyDescriptor(n, "caller") || Object.getOwnPropertyDescriptor(n, "prototype") || Reflect.getOwnPropertyDescriptor(n, "prototype") || Object.getOwnPropertyDescriptor(n, "toString") || Reflect.getOwnPropertyDescriptor(n, "toString")),
    "failed own property": !!(n.hasOwnProperty("arguments") || n.hasOwnProperty("caller") || n.hasOwnProperty("prototype") || n.hasOwnProperty("toString")),
    "failed descriptor keys": Object.keys(Object.getOwnPropertyDescriptors(n)).sort().toString() != "length,name",
    "failed own property names": Object.getOwnPropertyNames(n).sort().toString() != "length,name",
    "failed own keys names": mt && Reflect.ownKeys(n).sort().toString() != "length,name",
    "failed object toString error": ge({
      spawnErr: () => {
        Object.create(n).toString()
      },
      withStack: f => le && !it(f, hi)
    }) || ge({
      spawnErr: () => {
        Object.create(new Proxy(n, {})).toString()
      },
      withStack: f => le && !it(f, gi)
    }),
    "failed at incompatible proxy error": ge({
      spawnErr: () => {
        n.arguments, n.caller
      },
      withStack: f => At && !it(f, mr, 0)
    }),
    "failed at toString incompatible proxy error": ge({
      spawnErr: () => {
        n.toString.arguments, n.toString.caller
      },
      withStack: f => At && !it(f, mr, 0)
    }),
    "failed at too much recursion error": ge({
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
      "failed at too much recursion __proto__ error": !ge({
        spawnErr: () => {
          n.__proto__ = proxy, n++
        },
        final: () => {
          Object.setPrototypeOf(n, i)
        }
      }),
      "failed at chain cycle error": !ge({
        spawnErr: () => {
          Object.setPrototypeOf(f, Object.create(f)).toString()
        },
        final: () => {
          Object.setPrototypeOf(f, i)
        }
      }),
      "failed at chain cycle __proto__ error": !ge({
        spawnErr: () => {
          d.__proto__ = d, d++
        },
        final: () => {
          Object.setPrototypeOf(d, i)
        }
      }),
      "failed at reflect set proto": mt && ge({
        spawnErr: () => {
          throw Reflect.setPrototypeOf(n, Object.create(n)), _r in n, new TypeError
        },
        final: () => {
          Object.setPrototypeOf(n, i)
        }
      }),
      "failed at reflect set proto proxy": mt && !ge({
        spawnErr: () => {
          Reflect.setPrototypeOf(h, Object.create(h)), _r in h
        },
        final: () => {
          Object.setPrototypeOf(h, i)
        }
      }),
      "failed at instanceof check error": le && (ge({
        spawnErr: () => {
          n instanceof n
        },
        withStack: g => !it(g, yi)
      }) || ge({
        spawnErr: () => {
          const g = new Proxy(n, {});
          g instanceof g
        },
        withStack: g => !it(g, wi)
      })),
      "failed at define properties": le && mt && pi(() => {
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

function bi(t) {
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
              if (y = pr({
                  scope: t,
                  apiFunction: g[u],
                  proto: g,
                  obj: null,
                  lieProps: e
                }), y.lied) {
                re(d, y.lieTypes), e[d] = y.lieTypes;
                return
              }
              return
            }
            if (u != "name" && u != "length" && u[0] !== u[0].toUpperCase()) {
              const A = ["failed descriptor.value undefined"];
              re(d, A), e[d] = A;
              return
            }
          } catch {}
          const v = Object.getOwnPropertyDescriptor(g, u).get;
          if (y = pr({
              scope: t,
              apiFunction: v,
              proto: g,
              obj: c,
              lieProps: e
            }), y.lied) {
            re(d, y.lieTypes), e[d] = y.lieTypes;
            return
          }
          return
        } catch {
          const y = "failed prototype test execution";
          re(d, y), e[d] = [y];
          return
        }
      })
    }
  }
}

function vi() {
  const t = globalThis;
  if (Kr) return {
    iframeWindow: t,
    div: void 0
  };
  try {
    const n = t.length,
      e = new DocumentFragment,
      r = document.createElement("div"),
      a = mn();
    r.setAttribute("id", a), e.appendChild(r), r.innerHTML = `<div style="${ra}"><iframe></iframe></div>`, document.body.appendChild(e);
    const o = t[n];
    return {
      iframeWindow: fi(o) || t,
      div: r
    }
  } catch (n) {
    return X(n, "client blocked phantom iframe"), {
      iframeWindow: t,
      div: void 0
    }
  }
}

function Ei(t) {
  const n = bi(t),
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
const Ai = t => t && t.filter(n => !/object toString|toString incompatible proxy/.test(n)).length;
let sn, ct, aa = {},
  oa = {},
  hr = !1;

function pn() {
  if (hr) return;
  hr = !0;
  try {
    speechSynthesis.getVoices()
  } catch {}
  const {
    iframeWindow: t,
    div: n
  } = vi() || {};
  sn = t, ct = n;
  const {
    lieDetector: e,
    lieDetail: r
  } = Ei(sn);
  if (!Kr) {
    const a = e.getProps();
    aa = Object.keys(a).reduce((o, s) => (o[s] = Ai(a[s]), o), {}), oa = JSON.parse(JSON.stringify(r))
  }
}

function hn() {
  return pn(), sn
}

function ia() {
  return pn(), ct
}

function Ni() {
  ct == null || ct.remove(), ct = void 0, sn = void 0
}

function Le() {
  return pn(), aa
}

function Ti() {
  return pn(), oa
}
const Si = () => {
    const t = na.getRecords(),
      n = Object.keys(t).reduce((e, r) => (e += t[r].length, e), 0);
    return {
      data: t,
      totalLies: n
    }
  },
  Oi = t => typeof t == "function",
  Ri = /[cC]f|[jJ][bcdfghlmprsty]|[qQ][bcdfghjklmnpsty]|[vV][bfhjkmpt]|[xX][dkrz]|[yY]y|[zZ][fr]|[cCxXzZ]j|[bBfFgGjJkKpPvVqQtTwWyYzZ]q|[cCfFgGjJpPqQwW]v|[jJqQvV]w|[bBcCdDfFgGhHjJkKmMpPqQsSvVwWxXzZ]x|[bBfFhHjJkKmMpPqQ]z/g,
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
        Ri.test(g) && a.push(g)
      }
    });
    const c = [...!n && a.length < 3 ? [] : a, ...!n && e.length < 4 ? [] : e],
      l = ["bz", "cf", "fx", "mx", "vb", "xd", "gx", "PCIe", "vm", "NVIDIAGa"];
    return c.filter(u => !l.includes(u))
  };

function sa(t) {
  if (t) return ("" + t).replace(/ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/ig, "").replace(/(\s(ti|\d{1,2}GB|super)$)/ig, "").replace(/\s{2,}/g, " ").trim().replace(/((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i, (...n) => `${n[1]}${n[6][0]}${n[6].slice(1).replace(/\d/g,"0")}s`)
}
const Ii = t => {
    const e = [...["AMD", "ANGLE", "ASUS", "ATI", "ATI Radeon", "ATI Technologies Inc", "Adreno", "Android Emulator", "Apple", "Apple GPU", "Apple M1", "Chipset", "D3D11", "Direct3D", "Express Chipset", "GeForce", "Generation", "Generic Renderer", "Google", "Google SwiftShader", "Graphics", "Graphics Media Accelerator", "HD Graphics Family", "Intel", "Intel(R) HD Graphics", "Intel(R) UHD Graphics", "Iris", "KBL Graphics", "Mali", "Mesa", "Mesa DRI", "Metal", "Microsoft", "Microsoft Basic Render Driver", "Microsoft Corporation", "NVIDIA", "NVIDIA Corporation", "NVIDIAGameReadyD3D", "OpenGL", "OpenGL Engine", "Open Source Technology Center", "Parallels", "Parallels Display Adapter", "PCIe", "Plus Graphics", "PowerVR", "Pro Graphics", "Quadro", "Radeon", "Radeon Pro", "Radeon Pro Vega", "Samsung", "SSE2", "VMware", "VMware SVGA 3D", "Vega", "VirtualBox", "VirtualBox Graphics Adapter", "Vulkan", "Xe Graphics", "llvmpipe"]].filter(r => ("" + t).includes(r));
    return [...new Set(e)].sort().join(", ")
  },
  ca = t => {
    if (!t) return;
    const n = Ii(t),
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
  Di = () => {
    const t = [];
    return {
      getBin: () => t,
      sendToTrash: (n, e, r = void 0) => {
        const o = Oi(e) ? "proxy behavior detected" : e;
        return t.push({
          name: n,
          value: o
        }), r
      }
    }
  },
  ua = Di(),
  {
    sendToTrash: ue
  } = ua,
  ki = () => ({
    trashBin: ua.getBin()
  });

function Mi(t) {
  return new Worker("" + new URL("../workers/dedicated.worker-Vght-x2M.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}

function Li(t) {
  return new SharedWorker("" + new URL("../workers/shared.worker-dQuJ5wlF.js", import.meta.url).href, {
    name: t == null ? void 0 : t.name
  })
}
async function Ci() {
  try {
    await ie();
    const t = H => {
        try {
          return H()
        } catch {
          return
        }
      },
      n = (H, P) => !!H && H.__proto__.constructor.name == P,
      e = () => new Promise(H => {
        const P = t(() => new Mi);
        if (!n(P, "Worker")) return P == null || P.terminate(), H(null);
        const R = setTimeout(() => {
          P.terminate(), H(null)
        }, 3e3);
        P.onerror = () => {
          clearTimeout(R), P.terminate(), H(null)
        }, P.onmessage = ae => {
          clearTimeout(R), P.terminate(), H(ae.data)
        }
      }),
      r = () => new Promise(H => {
        const P = t(() => new Li);
        if (!n(P, "SharedWorker")) return P == null || P.port.close(), H(null);
        const R = setTimeout(() => {
          P.port.close(), H(null)
        }, 3e3);
        P.port.start(), P.port.onmessage = ae => {
          clearTimeout(R), P.port.close(), H(ae.data)
        }
      }),
      a = H => (X(H), null),
      [o, s] = await Promise.all([r().catch(a), e().catch(a)]),
      i = o != null && o.userAgent ? o : s;
    if (!i || !i.userAgent) return;
    i.system = kn(i.userAgent), i.device = Qr({
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
    if (m != navigator.platform && re("Navigator.platform", h), l != navigator.userAgent && re("Navigator.userAgent", h), d && d != navigator.hardwareConcurrency && re("Navigator.hardwareConcurrency", h), f && f != navigator.deviceMemory && re("Navigator.deviceMemory", h), i.lies.proto) {
      const {
        proto: H
      } = i.lies;
      Object.keys(H).forEach(R => {
        const ae = `WorkerGlobalScope.${R}`;
        H[R].forEach(ye => {
          re(ae, ye)
        })
      })
    }
    const [g, y] = Jr(l, m);
    g != y && (i.lied = !0, i.lies.os = `${y} platform and ${g} user agent do not match`, re("WorkerGlobalScope", i.lies.os));
    const L = Zr({
        ua: l,
        os: c,
        isBrave: !1
      }),
      v = /safari/i.test(L) || /iphone|ipad/i.test(l) ? "JavaScriptCore" : /firefox/i.test(l) ? "SpiderMonkey" : /chrome/i.test(l) ? "V8" : void 0;
    v != lr && (i.lied = !0, i.lies.engine = `${lr} JS runtime and ${v} user agent do not match`, re("WorkerGlobalScope", i.lies.engine));
    const N = H => (/\d+/.exec(H) || [])[0],
      A = N(L),
      D = N(u ? u.uaFullVersion ?? "" : ""),
      S = D && A,
      w = D == A;
    S && !w && (i.lied = !0, i.lies.version = `userAgentData version ${D} and user agent version ${A} do not match`, re("WorkerGlobalScope", i.lies.version));
    const O = le && CSS.supports("accent-color: initial");
    ((H, P) => {
      if (!/windows|mac/i.test(H) || !(P != null && P.platformVersion)) return !1;
      if (P.platform == "macOS") return O ? /_/.test(P.platformVersion) : !1;
      const R = (/windows ([\d|\.]+)/i.exec(H) || [])[1],
        ae = +R == 10,
        {
          platformVersion: Ae
        } = P,
        Ne = {
          "6.1": "7",
          "6.2": "8",
          "6.3": "8.1",
          "10.0": "10"
        } [Ae];
      if (!O && Ne) return Ne != R;
      const ve = Ae.split(".");
      if (ve.length != 3) return !0;
      const we = +ve[0] > 0;
      return we && !ae || !we && ae
    })(i.device, u) && (i.lied = !0, i.lies.platformVersion = "platform version is fake", re("WorkerGlobalScope", i.lies.platformVersion)), i.userAgentVersion = A, i.userAgentDataVersion = D, i.userAgentEngine = v;
    const B = {
      ...ca(i.webglRenderer) || {},
      compressedGPU: sa(i.webglRenderer)
    };
    return {
      ...i,
      gpu: B,
      uaPostReduction: ea(i.userAgent)
    }
  } catch (t) {
    X(t, "workers failed or blocked by client");
    return
  }
}
const gr = Math.random();
async function Pi() {
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
async function xi() {
  var e, r, a;
  const t = [],
    n = o => {
      var s;
      try {
        (s = o == null ? void 0 : o.close) == null || s.call(o)
      } catch {}
    };
  try {
    await ie();
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
      re("AnalyserNode.getFloatFrequencyData", U)
    }
    const L = {
        "AnalyserNode.channelCount": M(() => m.channelCount),
        "AnalyserNode.channelCountMode": M(() => m.channelCountMode),
        "AnalyserNode.channelInterpretation": M(() => m.channelInterpretation),
        "AnalyserNode.context.sampleRate": M(() => m.context.sampleRate),
        "AnalyserNode.fftSize": M(() => m.fftSize),
        "AnalyserNode.frequencyBinCount": M(() => m.frequencyBinCount),
        "AnalyserNode.maxDecibels": M(() => m.maxDecibels),
        "AnalyserNode.minDecibels": M(() => m.minDecibels),
        "AnalyserNode.numberOfInputs": M(() => m.numberOfInputs),
        "AnalyserNode.numberOfOutputs": M(() => m.numberOfOutputs),
        "AnalyserNode.smoothingTimeConstant": M(() => m.smoothingTimeConstant),
        "AnalyserNode.context.listener.forwardX.maxValue": M(() => be(() => m.context.listener.forwardX.maxValue)),
        "BiquadFilterNode.gain.maxValue": M(() => h.gain.maxValue),
        "BiquadFilterNode.frequency.defaultValue": M(() => h.frequency.defaultValue),
        "BiquadFilterNode.frequency.maxValue": M(() => h.frequency.maxValue),
        "DynamicsCompressorNode.attack.defaultValue": M(() => d.attack.defaultValue),
        "DynamicsCompressorNode.knee.defaultValue": M(() => d.knee.defaultValue),
        "DynamicsCompressorNode.knee.maxValue": M(() => d.knee.maxValue),
        "DynamicsCompressorNode.ratio.defaultValue": M(() => d.ratio.defaultValue),
        "DynamicsCompressorNode.ratio.maxValue": M(() => d.ratio.maxValue),
        "DynamicsCompressorNode.release.defaultValue": M(() => d.release.defaultValue),
        "DynamicsCompressorNode.release.maxValue": M(() => d.release.maxValue),
        "DynamicsCompressorNode.threshold.defaultValue": M(() => d.threshold.defaultValue),
        "DynamicsCompressorNode.threshold.minValue": M(() => d.threshold.minValue),
        "OscillatorNode.detune.maxValue": M(() => f.detune.maxValue),
        "OscillatorNode.detune.minValue": M(() => f.detune.minValue),
        "OscillatorNode.frequency.defaultValue": M(() => f.frequency.defaultValue),
        "OscillatorNode.frequency.maxValue": M(() => f.frequency.maxValue),
        "OscillatorNode.frequency.minValue": M(() => f.frequency.minValue)
      },
      v = U => new Promise(j => {
        const z = U.createAnalyser(),
          te = U.createOscillator(),
          de = U.createDynamicsCompressor();
        try {
          te.type = "triangle", te.frequency.value = 1e4, de.threshold.value = -50, de.knee.value = 40, de.attack.value = 0
        } catch {}
        return te.connect(de), de.connect(z), de.connect(U.destination), te.start(0), U.startRendering(), U.addEventListener("complete", _e => {
          var Ue;
          try {
            de.disconnect(), te.disconnect();
            const Ce = new Float32Array(z.frequencyBinCount);
            (Ue = z.getFloatFrequencyData) == null || Ue.call(z, Ce);
            const $e = new Float32Array(z.fftSize);
            return "getFloatTimeDomainData" in z && z.getFloatTimeDomainData($e), j({
              floatFrequencyData: Ce,
              floatTimeDomainData: $e,
              buffer: _e.renderedBuffer,
              compressorGainReduction: de.reduction.value || de.reduction
            })
          } catch {
            return j(null)
          }
        })
      });
    await ie();
    const [N, A] = await Promise.all([v(u), Pi().catch(() => !1)]), {
      floatFrequencyData: D,
      floatTimeDomainData: S,
      buffer: w,
      compressorGainReduction: O
    } = N || {};
    await ie();
    const E = (U, j, z) => {
        const te = Math.min(z, U.length),
          de = [];
        for (let _e = j; _e < te; _e++) de.push(U[_e]);
        return de
      },
      k = U => {
        if (!U) return 0;
        let j = 0;
        for (let z = 0; z < U.length; z++) j += Math.abs(U[z]);
        return j
      },
      B = k(D),
      H = k(S),
      P = new Float32Array(l);
    let R = new Float32Array;
    w && ((r = w.copyFromChannel) == null || r.call(w, P, 0), R = ((a = w.getChannelData) == null ? void 0 : a.call(w, 0)) || []);
    const ae = E(P, 4500, 4600),
      Ae = E(R, 4500, 4600),
      ye = k(E(R, 4500, l));
    A && (c = !0, re("AudioBuffer", "audio is fake"));
    const Ne = "" + Ae == "" + ae,
      ve = "copyFromChannel" in AudioBuffer.prototype;
    ve && !Ne && (c = !0, re("AudioBuffer", "getChannelData and copyFromChannel samples mismatch"));
    const we = new Set(R).size;
    if (we == l) {
      const U = `${we} unique samples of ${l} is too high`;
      ue("AudioBuffer", U)
    }
    const ke = (U, j) => Math.floor(Math.random() * (j - U + 1)) + U,
      Se = (U, j, z) => {
        const {
          length: te
        } = j, de = 20, _e = ke(275, te - (de + 1)), Ue = _e + de / 2, Ce = _e + de;
        j.getChannelData(0)[_e] = U, j.getChannelData(0)[Ue] = U, j.getChannelData(0)[Ce] = U, j.copyFromChannel(z, 0);
        const $e = [j.getChannelData(0)[_e] === 0 ? Math.random() : 0, j.getChannelData(0)[Ue] === 0 ? Math.random() : 0, j.getChannelData(0)[Ce] === 0 ? Math.random() : 0];
        return [...new Set([...j.getChannelData(0), ...z, ...$e])].filter(Yt => Yt !== 0)
      },
      at = (U, j, z) => {
        j.copyToChannel(z.map(() => U), 0);
        const te = j.getChannelData(0)[0];
        return [...j.getChannelData(0)].map(_e => _e !== te || !_e ? Math.random() : _e).filter(_e => _e !== te)
      };
    let G = (() => {
      try {
        const j = [...new Set([...Se(gr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3)), ...at(gr, new AudioBuffer({
          length: 2e3,
          sampleRate: 44100
        }), new Float32Array(2e3))])];
        return +(j.length !== 1 && j.reduce((z, te) => z += +te, 0))
      } catch {
        return 0
      }
    })();
    if (!G) {
      const U = Math.min(100, R.length),
        j = new Set;
      for (let z = 0; z < U; z++) {
        const te = R[z];
        j.has(te) || (j.add(te), G += te)
      }
    }
    const se = {
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
    G && (c = !0, re("AudioBuffer", "sample noise detected"));
    const ee = "" + [O, B, H],
      oe = se[ee];
    return oe && !oe.includes(ye) && (De.AUDIO = !0, ue("AudioBuffer", "suspicious frequency data")), {
      totalUniqueSamples: we,
      compressorGainReduction: O,
      floatFrequencyDataSum: B,
      floatTimeDomainDataSum: H,
      sampleSum: ye,
      binsSample: Ae,
      copySample: ve ? ae : [void 0],
      values: L,
      noise: G,
      baseLatency: Bi(),
      lied: c
    }
  } catch (o) {
    X(o, "OfflineAudioContext failed or blocked by client");
    return
  } finally {
    t.forEach(n)
  }
}

function Bi() {
  var t;
  try {
    const n = window.AudioContext ?? window.webkitAudioContext;
    if (!n) return -2;
    const e = new n,
      r = e.baseLatency;
    return (t = e.close) == null || t.call(e), typeof r == "number" ? r : -1
  } catch (n) {
    return X(n), -1
  }
}

function vt(t) {
  t && (t.width = 0, t.height = 0, t.remove())
}
const Hi = () => {
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
          const D = ~~(Math.random() * 256),
            S = ~~(Math.random() * 256),
            w = ~~(Math.random() * 256);
          m[d] = D, m[d + 1] = S, m[d + 2] = w, m[d + 3] = 255, d += 4, l.fillStyle = `rgba(${D}, ${S}, ${w}, 255)`, l.fillRect(N, A, 1, 1)
        }
      d = 0;
      for (let N = 0; N < 8; N++)
        for (let A = 0; A < 8; A++) {
          const D = l.getImageData(N, A, 1, 1).data,
            S = D[0],
            w = D[1],
            O = D[2],
            E = D[3];
          u.fillStyle = `rgba(${S}, ${w}, ${O}, ${E})`, u.fillRect(N, A, 1, 1);
          const k = u.getImageData(N, A, 1, 1).data,
            B = k[0],
            H = k[1],
            P = k[2],
            R = k[3];
          f[d] = S, f[d + 1] = w, f[d + 2] = O, f[d + 3] = E, d += 4, c.fillStyle = `rgba(${S!==B?B:255}, ${w!==H?H:255}, ${O!==P?P:255}, ${E!==R?R:1})`, c.fillRect(N * 5, A * 5, 5, 5)
        }
      const h = [],
        g = new Set;
      for (let N = 0; N < 64; N++) {
        const A = N * 4,
          D = m[A] !== f[A],
          S = m[A + 1] !== f[A + 1],
          w = m[A + 2] !== f[A + 2],
          O = m[A + 3] !== f[A + 3];
        if (D || S || w || O) {
          const E = (D ? "r" : "") + (S ? "g" : "") + (w ? "b" : "") + (O ? "a" : "");
          g.add(E), h.push([N, E])
        }
      }
      const y = o.toDataURL(),
        L = g.size ? [...g].sort().join(", ") : void 0,
        v = h.length || void 0;
      return {
        rgba: L,
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
        seed: S,
        offset: w,
        multiplier: O
      }) => {
        let E = Number(S) % Number(w);
        return {
          getNextSeed: () => (E = Number(O) * E % Number(w), E)
        }
      })({
        seed: i,
        offset: c,
        multiplier: l
      }),
      {
        getNextSeed: f
      } = m,
      d = (S, w, O, E) => {
        const k = (S - 1) / w * (O || 1) || 0;
        return E ? k : Math.floor(k)
      },
      h = (S, w, O, E, k) => {
        const {
          width: B,
          height: H
        } = O, P = S.createRadialGradient(d(k(), w, B), d(k(), w, H), d(k(), w, B), d(k(), w, B), d(k(), w, H), d(k(), w, B));
        P.addColorStop(0, E[d(k(), w, E.length)]), P.addColorStop(1, E[d(k(), w, E.length)]), S.fillStyle = P
      },
      g = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      y = (S, w, O, E) => {
        const {
          width: k,
          height: B
        } = O, H = 2.99;
        S.font = `${B/H}px ${r.replace(/!important/gm,"")}`, S.strokeText("👾A", d(E(), w, k), d(E(), w, B), d(E(), w, k))
      },
      L = (S, w, O, E) => {
        const {
          width: k,
          height: B
        } = O;
        S.beginPath(), S.arc(d(E(), w, k), d(E(), w, B), d(E(), w, Math.min(k, B)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), S.stroke()
      },
      v = (S, w, O, E) => {
        const {
          width: k,
          height: B
        } = O;
        S.beginPath(), S.moveTo(d(E(), w, k), d(E(), w, B)), S.bezierCurveTo(d(E(), w, k), d(E(), w, B), d(E(), w, k), d(E(), w, B), d(E(), w, k), d(E(), w, B)), S.stroke()
      },
      N = (S, w, O, E) => {
        const {
          width: k,
          height: B
        } = O;
        S.beginPath(), S.moveTo(d(E(), w, k), d(E(), w, B)), S.quadraticCurveTo(d(E(), w, k), d(E(), w, B), d(E(), w, k), d(E(), w, B)), S.stroke()
      },
      A = (S, w, O, E) => {
        if (!("ellipse" in S)) return;
        const {
          width: k,
          height: B
        } = O;
        S.beginPath(), S.ellipse(d(E(), w, k), d(E(), w, B), d(E(), w, Math.floor(k / 2)), d(E(), w, Math.floor(B / 2)), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0), d(E(), w, 2 * Math.PI, !0)), S.stroke()
      },
      D = [L, v, N];
    tt || D.push(A), e && D.push(y), [...Array(o)].forEach(S => {
      h(n, c, a, g, f), n.shadowBlur = d(f(), c, s, !0), n.shadowColor = g[d(f(), c, g.length)];
      const w = D[d(f(), c, D.length)];
      w(n, c, a, f), n.fill()
    })
  };
async function Fi() {
  let t, n;
  try {
    await ie();
    const e = Le(),
      r = hn(),
      a = e["HTMLCanvasElement.toDataURL"],
      o = e["HTMLCanvasElement.getContext"],
      s = e["CanvasRenderingContext2D.fillText"] || e["CanvasRenderingContext2D.font"] || e["CanvasRenderingContext2D.getImageData"] || e["CanvasRenderingContext2D.strokeText"],
      i = e["String.fromCodePoint"];
    let c = e["CanvasRenderingContext2D.measureText"] || e["TextMetrics.actualBoundingBoxAscent"] || e["TextMetrics.actualBoundingBoxDescent"] || e["TextMetrics.actualBoundingBoxLeft"] || e["TextMetrics.actualBoundingBoxRight"] || e["TextMetrics.fontBoundingBoxAscent"] || e["TextMetrics.fontBoundingBoxDescent"] || e["TextMetrics.width"],
      l = a || o || s || c || i || !1,
      u = window;
    !Xr && r && (u = r);
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
    await ie();
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
    await ie();
    const y = Hi();
    await ie();
    const L = Mn.replace(/!important/gm, "");
    f.font = `10px ${L}`;
    const v = new Set,
      N = ta.reduce((P, R) => {
        const {
          actualBoundingBoxAscent: ae,
          actualBoundingBoxDescent: Ae,
          actualBoundingBoxLeft: ye,
          actualBoundingBoxRight: Ne,
          fontBoundingBoxAscent: ve,
          fontBoundingBoxDescent: we,
          width: ke
        } = f.measureText(R) || {}, Se = [ae, Ae, ye, Ne, ve, we, ke].join(",");
        return v.has(Se) || (v.add(Se), P.add(R)), P
      }, new Set),
      A = 1e-5 * [...v].map(P => P.split(",").reduce((R, ae) => R += +ae || 0, 0)).reduce((P, R) => P += R, 0),
      D = 75;
    await ie(), bn({
      canvas: t,
      context: f,
      area: {
        width: D,
        height: D
      }
    });
    const S = t.toDataURL();
    await ie(), bn({
      canvas: n,
      context: d,
      area: {
        width: D,
        height: D
      }
    });
    const w = n.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `50px ${L}`, f.fillText("A", 7, 37);
    const O = t.toDataURL();
    f.restore(), f.clearRect(0, 0, t.width, t.height), t.width = 50, t.height = 50, f.font = `35px ${L}`, f.fillText("👾", 0, 37);
    const E = t.toDataURL();
    f.clearRect(0, 0, t.width, t.height), (y && y.pixels || Math.max(...f.getImageData(0, 0, 8, 8).data)) && (l = !0, re("CanvasRenderingContext2D.getImageData", "pixel data modified")), t.width = 2, t.height = 2, f.fillStyle = "#000", f.fillRect(0, 0, t.width, t.height), f.fillStyle = "#fff", f.fillRect(2, 2, 1, 1), f.beginPath(), f.arc(0, 0, 2, 0, 1, !0), f.closePath(), f.fill();
    const k = f.getImageData(0, 0, 2, 2).data.join(""),
      B = {
        BLINK: ["255255255255178178178255246246246255555555255", "255255255255192192192255240240240255484848255", "255255255255177177177255246246246255535353255", "255255255255128128128255191191191255646464255", "255255255255178178178255247247247255565656255", "255255255255174174174255242242242255474747255", "255255255255229229229255127127127255686868255", "255255255255192192192255244244244255535353255"],
        GECKO: ["255255255255191191191255207207207255646464255", "255255255255192192192255240240240255484848255", "255255255255191191191255239239239255646464255", "255255255255191191191255223223223255606060255", "255255255255171171171255223223223255606060255", "255255255255188188188255245245245255525252255"],
        WEBKIT: ["255255255255185185185255233233233255474747255", "255255255255185185185255229229229255474747255", "255255255255185185185255218218218255474747255", "255255255255192192192255240240240255484848255", "255255255255178178178255247247247255565656255", "255255255255178178178255247247247255565656255", "255255255255192192192255240240240255484848255", "255255255255186186186255218218218255464646255"]
      };
    He.imageDataLowEntropy = k, (le && !B.BLINK.includes(k) || At && !B.GECKO.includes(k) || tt && !B.WEBKIT.includes(k)) && (De.CANVAS = !0), De.CANVAS && ue("CanvasRenderingContext2D.getImageData", "suspicious pixel data");
    const H = P => {
      const R = Se => Se % 1 !== 0,
        {
          actualBoundingBoxAscent: ae,
          actualBoundingBoxDescent: Ae,
          actualBoundingBoxLeft: ye,
          actualBoundingBoxRight: Ne,
          fontBoundingBoxAscent: ve,
          fontBoundingBoxDescent: we
        } = P.measureText("") || {};
      return [ae, Ae, ye, Ne, ve, we].find(Se => R(Se || 0))
    };
    return await ie(), H(f) && (c = !0, l = !0, re("CanvasRenderingContext2D.measureText", "metric noise detected")), {
      dataURI: g,
      paintURI: S,
      paintCpuURI: w,
      textURI: O,
      emojiURI: E,
      mods: y,
      textMetricsSystemSum: A,
      liedTextMetrics: c,
      emojiSet: [...N],
      lied: l
    }
  } catch (e) {
    X(e);
    return
  } finally {
    vt(t), vt(n)
  }
}

function Ui() {
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
          const L = !isNaN(+y),
            v = a[y],
            N = c.test(y),
            A = c.test(v);
          if (L && !A) return i.push(v);
          if (!L && !N) return i.push(y)
        });
        const l = {},
          u = y => y.charAt(0).toUpperCase() + y.slice(1),
          m = y => y.charAt(0).toLowerCase() + y.slice(1),
          f = y => y.slice(1),
          d = /[A-Z]/g;
        i.forEach(y => {
          if (l[y]) return;
          const L = y.indexOf("-") > -1,
            v = d.test(y),
            N = y.charAt(0),
            A = L && N == "-",
            D = v && N == N.toUpperCase();
          if (y = A ? f(y) : D ? m(y) : y, L) {
            const S = y.split("-").map((w, O) => O == 0 ? w : u(w)).join("");
            S in a ? l[S] = !0 : u(S) in a && (l[u(S)] = !0)
          } else if (v) {
            const S = y.replace(d, w => "-" + w.toLowerCase());
            S in a ? l[S] = !0 : `-${S}` in a && (l[`-${S}`] = !0)
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
        X(a);
        return
      }
    };
  try {
    const e = t("getComputedStyle", {
        require: [X]
      }),
      r = n(ia());
    return {
      computedStyle: e,
      system: r
    }
  } catch (e) {
    X(e);
    return
  }
}

function ji() {
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
    (screen.width !== s || s > 800 && u) && (De.IFRAME_SCREEN = !0);
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
      L = r({
        body: o,
        width: s,
        height: c
      });
    return {
      mediaCSS: y,
      matchMediaCSS: h,
      screenQuery: L
    }
  } catch (a) {
    X(a);
    return
  }
}

function Gi() {
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
async function Vi() {
  try {
    if (!Wi()) return;
    const t = Gi(),
      n = Object.keys(t),
      e = [].concat(...n.map(o => t[o])),
      r = await zi(e),
      a = n.filter(o => {
        const s = t[o];
        return ht(s.map(c => r[c])) > s.length * .6
      });
    return a.sort(), a
  } catch (t) {
    X(t);
    return
  }
}

function Wi() {
  return tt || qi()
}
async function zi(t) {
  var o;
  const n = document,
    e = n.createElement("div"),
    r = new Array(t.length),
    a = {};
  yr(e);
  for (let s = 0; s < t.length; ++s) {
    const i = Ki(t[s]);
    i.tagName === "DIALOG" && i.show();
    const c = n.createElement("div");
    yr(c), c.appendChild(i), e.appendChild(c), r[s] = i
  }
  for (; !n.body;) await $i(50);
  n.body.appendChild(e);
  try {
    for (let s = 0; s < t.length; ++s) r[s].offsetParent || (a[t[s]] = !0)
  } finally {
    (o = e.parentNode) == null || o.removeChild(e)
  }
  return a
}

function yr(t) {
  t.style.setProperty("visibility", "hidden", "important"), t.style.setProperty("display", "block", "important")
}

function ht(t) {
  return t.reduce((n, e) => n + (e ? 1 : 0), 0)
}

function $i(t) {
  return new Promise(n => setTimeout(n, t))
}

function qi() {
  var a, o;
  const t = window,
    n = navigator;
  if (ht(["userAgentData" in n, "chrome" in t, "CSS" in t && "supports" in t.CSS, "PerformanceLongTaskTiming" in t]) >= 3) {
    const s = (a = n.connection) == null ? void 0 : a.rtt;
    return ht([!("SharedWorker" in t), typeof s == "number" && s > 0 && s % 50 === 0]) >= 2
  }
  return ht(["buildID" in n, "MozAppearance" in (((o = document.documentElement) == null ? void 0 : o.style) ?? {}), "MediaRecorderErrorEvent" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4 ? ht(["onorientationchange" in t, "orientation" in t, /android/i.test(n.appVersion)]) >= 2 : !1
}

function Ki(t) {
  const [n, e] = Xi(t), r = document.createElement(n ?? "div");
  for (const a of Object.keys(e)) {
    const o = e[a].join(" ");
    a === "class" ? r.className = o : r.setAttribute(a, o)
  }
  return r
}

function Xi(t) {
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

function Yi(t) {
  const n = [],
    e = t.length;
  for (let r = 0; r < e; r++) try {
    t[r]()
  } catch (a) {
    n.push(a.message)
  }
  return n
}

function Ji() {
  try {
    return {
      errors: Yi([() => new Function('alert(")')(), () => new Function("const foo;foo.bar")(), () => new Function("null.bar")(), () => new Function("abc.xyz = 123")(), () => new Function("const foo;foo.bar")(), () => new Function("(1).toString(1000)")(), () => new Function("[...undefined].length")(), () => new Function("var x = new Array(-1)")(), () => new Function("const a=1; const a=2;")()])
    }
  } catch (t) {
    X(t);
    return
  }
}

function Zi(t, n) {
  if (!t || !n || !n.length) return !1;
  const e = n.reduce((s, i) => (s[i] = !0, s), {}),
    r = "Cambria Math" in e || "Nirmala UI" in e || "Leelawadee UI" in e || "HoloLens MDL2 Assets" in e || "Segoe Fluent Icons" in e,
    a = "Helvetica Neue" in e || "Luminari" in e || "PingFang HK Light" in e || "InaiMathi Bold" in e || "Galvji" in e || "Chakra Petch" in e,
    o = "Arimo" in e || "MONO" in e || "Ubuntu" in e || "Noto Color Emoji" in e || "Dancing Script" in e || "Droid Sans Mono" in e;
  return r && t != Ie.WINDOWS || a && t != Ie.APPLE ? !0 : !!(o && t != Ie.LINUX)
}

function Qi(t, n, e) {
  var r;
  return t ? ((r = t.parentNode) == null || r.replaceChild(n, t), !0) : null
}

function es(t, ...n) {
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
  Cn = {
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
  ts = Object.keys(Cn).map(t => Cn[t]).flat(),
  ns = Object.keys(Ln).map(t => Ln[t]).flat(),
  rs = Object.keys(cn).map(t => cn[t]).flat(),
  as = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  os = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  is = [...ts, ...ns, ...as, ...os, ...rs].sort();
async function ss() {
  const t = ({
      doc: a,
      id: o,
      emojis: s
    }) => {
      try {
        Qi(a.getElementById(o), es`
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
              L = s[g],
              {
                height: v,
                width: N
              } = i(y),
              A = `${N},${v}`;
            return c.has(A) || (c.add(A), d.add(L)), d
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
        fontMap: Cn
      })
    }, r = a => Object.keys(cn).reduce((s, i) => {
      const c = cn[i];
      return c.filter(u => a.includes(u)).length == c.length ? [...s, i] : s
    }, []);
  try {
    await ie();
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
      emojis: ta
    }) || {}, f = await n(is), d = e(f), h = r(f), g = o["FontFace.load"] || o["FontFace.family"] || o["FontFace.status"] || o["String.fromCodePoint"] || o["CSSStyleDeclaration.setProperty"] || o["CSS2Properties.setProperty"] || !1;
    return Zi(on, f) && (De.FONTS = !0, He.FontOsIsBad = !0, ue("platform", `${on} system and fonts are uncommon`)), {
      fontFaceLoadFonts: f,
      platformVersion: d,
      apps: h,
      emojiSet: l,
      pixelSizeSystemSum: u,
      lied: g
    }
  } catch (a) {
    X(a);
    return
  }
}
const $ = t => {
    const n = `${JSON.stringify(t)}`;
    return ("0000000" + (n.split("").reduce((r, a, o) => Math.imul(31, r) + n.charCodeAt(o) | 0, 2166136261) >>> 0).toString(16)).substr(-8)
  },
  cs = String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7);
var he = (t => (t.WINDOWS = "Windows", t.MAC = "Mac", t.LINUX = "Linux", t.ANDROID = "Android", t.CHROME_OS = "Chrome OS", t))(he || {});
const us = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"];

function ls() {
  var O;
  if (!le) return [];
  const t = "getVideoPlaybackQuality" in HTMLVideoElement.prototype,
    n = CSS.supports("color-scheme: initial"),
    e = CSS.supports("appearance: initial"),
    r = "DisplayNames" in Intl,
    a = CSS.supports("aspect-ratio: initial"),
    o = CSS.supports("border-end-end-radius: initial"),
    s = "randomUUID" in Crypto.prototype,
    i = "BarcodeDetector" in window,
    c = "downlinkMax" in (((O = window.NetworkInformation) == null ? void 0 : O.prototype) || {}),
    l = "ContentIndex" in window,
    u = "ContactsManager" in window,
    m = "EyeDropper" in window,
    f = "FileSystemWritableFileStream" in window,
    d = "HID" in window && "HIDDevice" in window,
    h = "SerialPort" in window && "Serial" in window,
    g = "SharedWorker" in window,
    y = "ontouchstart" in Window && "TouchEvent" in window,
    L = "setAppBadge" in Navigator.prototype,
    v = (E, k) => E ? [k] : [],
    N = {
      [he.ANDROID]: [...v(a, i), ...v(e, l), ...v(t, u), c, ...v(s, !m), ...v(r, !f), ...v(o, !d), ...v(o, !h), !g, y, ...v(n, !L)],
      [he.CHROME_OS]: [...v(a, i), ...v(e, !l), ...v(t, !u), c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, y || !y, ...v(n, !L)],
      [he.WINDOWS]: [...v(a, !i), ...v(e, !l), ...v(t, !u), !c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, y || !y, ...v(n, L)],
      [he.MAC]: [...v(a, i), ...v(e, !l), ...v(t, !u), !c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, !y, ...v(n, L)],
      [he.LINUX]: [...v(a, !i), ...v(e, !l), ...v(t, !u), !c, ...v(s, m), ...v(r, f), ...v(o, d), ...v(o, h), g, !y || !y, ...v(n, !L)]
    },
    A = {
      noContentIndex: e && !l,
      noContactsManager: t && !u,
      noDownlinkMax: !c
    },
    D = Object.keys(N).reduce((E, k) => {
      const B = N[k],
        H = +(B.filter(P => P).length / B.length).toFixed(2);
      return E[k] = H, E
    }, {}),
    S = Object.keys(D).reduce((E, k) => D[E] > D[k] ? E : k),
    w = D[S];
  return [D, w, A]
}
const wr = {
  "-apple-system": he.MAC,
  "Segoe UI": he.WINDOWS,
  Tahoma: he.WINDOWS,
  "Yu Gothic UI": he.WINDOWS,
  "Microsoft JhengHei UI": he.WINDOWS,
  "Microsoft YaHei UI": he.WINDOWS,
  "Meiryo UI": he.WINDOWS,
  Cantarell: he.LINUX,
  Ubuntu: he.LINUX,
  Sans: he.LINUX,
  "sans-serif": he.LINUX,
  "Fira Sans": he.LINUX,
  Roboto: he.ANDROID
};

function ds() {
  const {
    body: t
  } = document, n = document.createElement("div");
  t.appendChild(n);
  try {
    const e = String([...us.reduce((a, o) => (n.setAttribute("style", `font: ${o} !important`), a.add(getComputedStyle(n).fontFamily)), new Set)]),
      r = wr[e];
    return wr[e] ? `${e}:${r}` : e
  } catch {
    return ""
  } finally {
    t.removeChild(n)
  }
}
async function _s({
  webgl: t
}) {
  var n, e;
  try {
    await ie();
    const r = Le(),
      a = ia(),
      o = Object.keys({
        ...navigator.mimeTypes
      }),
      s = ds(),
      [i, c, l] = ls(),
      u = {
        chromium: le,
        likeHeadless: {
          noChrome: le && !("chrome" in window),
          hasPermissionsBug: le && "permissions" in navigator && await (async () => (await navigator.permissions.query({
            name: "notifications"
          })).state == "prompt" && "Notification" in window && Notification.permission === "denied")(),
          noPlugins: le && navigator.plugins.length === 0,
          noMimeTypes: le && o.length === 0,
          notificationIsDenied: le && "Notification" in window && Notification.permission == "denied",
          hasKnownBgColor: le && (() => {
            let A = a;
            if (a || (A = document.createElement("div"), document.body.appendChild(A)), !A) return !1;
            A.setAttribute("style", "background-color: ActiveText");
            const {
              backgroundColor: D
            } = getComputedStyle(A) || {};
            return a || document.body.removeChild(A), D === "rgb(255, 0, 0)"
          })(),
          prefersLightColor: !!((n = matchMedia("(prefers-color-scheme: light)")) != null && n.matches),
          uaDataIsBlank: "userAgentData" in navigator && (((e = navigator.userAgentData) == null ? void 0 : e.platform) === "" || await navigator.userAgentData.getHighEntropyValues(["platform"]).platform === ""),
          pdfIsDisabled: "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !1,
          noTaskbar: screen.height === screen.availHeight && screen.width === screen.availWidth,
          hasVvpScreenRes: innerWidth === screen.width && outerHeight === screen.height || "visualViewport" in window && visualViewport !== null && visualViewport.width === screen.width && visualViewport.height === screen.height,
          hasSwiftShader: /SwiftShader/.test(""),
          noWebShare: le && CSS.supports("accent-color: initial") && (!("share" in navigator) || !("canShare" in navigator)),
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
              return A.srcdoc = cs, !!A.contentWindow
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
            } catch (D) {
              return ((A = D == null ? void 0 : D.constructor) == null ? void 0 : A.name) != "TypeError"
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
      L = +(h.filter(A => m[A]).length / h.length * 100).toFixed(0),
      v = +(g.filter(A => f[A]).length / g.length * 100).toFixed(0),
      N = +(y.filter(A => d[A]).length / y.length * 100).toFixed(0);
    return {
      ...u,
      likeHeadlessRating: L,
      headlessRating: v,
      stealthRating: N,
      systemFonts: s,
      platformEstimate: [i, c]
    }
  } catch (r) {
    X(r);
    return
  }
}
async function fs() {
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
    await ie();
    const n = Le(),
      e = n["Intl.Collator.resolvedOptions"] || n["Intl.DateTimeFormat.resolvedOptions"] || n["Intl.DisplayNames.resolvedOptions"] || n["Intl.ListFormat.resolvedOptions"] || n["Intl.NumberFormat.resolvedOptions"] || n["Intl.PluralRules.resolvedOptions"] || n["Intl.RelativeTimeFormat.resolvedOptions"] || !1,
      r = be(() => new Intl.DateTimeFormat(void 0, {
        month: "long",
        timeZoneName: "long"
      }).format(9636444e5)),
      a = be(() => new Intl.DisplayNames(void 0, {
        type: "language"
      }).of("en-US")),
      o = be(() => new Intl.ListFormat(void 0, {
        style: "long",
        type: "disjunction"
      }).format(["0", "1"])),
      s = be(() => new Intl.NumberFormat(void 0, {
        notation: "compact",
        compactDisplay: "long"
      }).format(21e6)),
      i = be(() => new Intl.PluralRules().select(1)),
      c = be(() => new Intl.RelativeTimeFormat(void 0, {
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
    X(n);
    return
  }
}

function ms() {
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
      (isNaN(u) && isNaN(m) ? !0 : u == m) || (e = !0, re(`Math.${i}`, "expected x and got y"))
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
      s[i[2]] = M(() => {
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
    X(t);
    return
  }
}
const ps = () => ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"].sort();
async function hs() {
  const t = () => {
    try {
      const n = ps(),
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
    X(n);
    return
  }
}
async function gs(t) {
  try {
    await ie();
    const n = Le();
    let e = n["Navigator.appVersion"] || n["Navigator.deviceMemory"] || n["Navigator.doNotTrack"] || n["Navigator.hardwareConcurrency"] || n["Navigator.language"] || n["Navigator.languages"] || n["Navigator.maxTouchPoints"] || n["Navigator.oscpu"] || n["Navigator.platform"] || n["Navigator.userAgent"] || n["Navigator.vendor"] || n["Navigator.plugins"] || n["Navigator.mimeTypes"] || !1;
    const r = "chrome" in window ? navigator.userAgent.includes(navigator.appVersion) : !0,
      a = M(async () => {
        const u = be(() => navigator.userAgent),
          m = kn(u),
          f = await Yr();
        return Zr({
          ua: u,
          os: m,
          isBrave: f
        })
      }),
      o = {
        platform: M(() => {
          const {
            platform: u
          } = navigator, m = ["win", "linux", "mac", "arm", "pike", "linux", "iphone", "ipad", "ipod", "android", "x11"], f = typeof u == "string" ? u.toLowerCase() : "";
          return !!f && m.some(h => f.includes(h)) || ue("platform", `${u} is unusual`), on !== dr && (e = !0, re("Navigator.platform", `${dr} platform and ${on} user agent do not match`)), t && u != t.platform && (e = !0), u
        }),
        system: M(() => kn(navigator.userAgent), "userAgent system failed"),
        device: M(() => Qr({
          userAgent: navigator.userAgent
        }), "userAgent device failed"),
        userAgent: M(() => {
          const {
            userAgent: u
          } = navigator;
          return r || ue("userAgent", `${u} does not match appVersion`), /\s{2,}|^\s|\s$/g.test(u) && ue("userAgent", "extra spaces detected"), en(u).length && ue("userAgent is gibberish", u), t && u != t.userAgent && (e = !0), u.trim().replace(/\s{2,}/, " ")
        }, "userAgent failed"),
        uaPostReduction: ea((navigator || {}).userAgent),
        appVersion: M(() => {
          const {
            appVersion: u
          } = navigator;
          return r || ue("appVersion", `${u} does not match userAgent`), "appVersion" in navigator && !u && ue("appVersion", "Living Standard property returned falsy value"), /\s{2,}|^\s|\s$/g.test(u) && ue("appVersion", "extra spaces detected"), u.trim().replace(/\s{2,}/, " ")
        }, "appVersion failed"),
        deviceMemory: M(() => {
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
          })[String(u)] || ue("deviceMemory", `${u} is not a valid value [0.25, 0.5, 1, 2, 4, 8, 16, 32]`);
          const f = ((h = performance == null ? void 0 : performance.memory) == null ? void 0 : h.jsHeapSizeLimit) || null,
            d = f ? +(f / 1073741824).toFixed(1) : 0;
          return d > u && ue("deviceMemory", `available memory ${d}GB is greater than device memory ${u}GB`), t && u !== t.deviceMemory && (e = !0), u
        }, "deviceMemory failed"),
        doNotTrack: M(() => {
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
        globalPrivacyControl: M(() => {
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
        hardwareConcurrency: M(() => {
          if (!("hardwareConcurrency" in navigator)) return;
          const {
            hardwareConcurrency: u
          } = navigator;
          return t && u !== t.hardwareConcurrency && (e = !0), u
        }, "hardwareConcurrency failed"),
        language: M(() => {
          const {
            language: u,
            languages: m
          } = navigator;
          if (u && m) {
            const f = (/^.{0,2}/g.exec(u) ?? [""])[0];
            if ((/^.{0,2}/g.exec(m[0]) ?? [""])[0] != f && ue("language/languages", `${[u,m].join(" ")} mismatch`), t) {
              u != t.language && (e = !0, re("Navigator.language", `${u} does not match worker scope`));
              const h = m.join(",");
              h !== t.languages.join(",") && (e = !0, re("Navigator.languages", `${h} does not match worker scope`))
            }
            return `${m.join(", ")} (${u})`
          }
          return `${u} ${m}`
        }, "language(s) failed"),
        maxTouchPoints: M(() => "maxTouchPoints" in navigator ? navigator.maxTouchPoints : null, "maxTouchPoints failed"),
        vendor: M(() => navigator.vendor, "vendor failed"),
        mimeTypes: M(() => {
          const {
            mimeTypes: u
          } = navigator;
          return u ? [...u].map(m => m.type) : []
        }, "mimeTypes failed"),
        oscpu: M(() => navigator.oscpu, "oscpu failed"),
        plugins: M(() => {
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
            g.length && ue("plugin name is gibberish", d), y.length && ue("plugin description is gibberish", h)
          }), m
        }, "plugins failed"),
        properties: M(() => Object.keys(Object.getPrototypeOf(navigator)), "navigator keys failed"),
        applePay: ys(),
        privateClickMeasurement: ws(),
        pdfViewerEnabled: bs()
      },
      s = () => M(() => {
        const u = navigator;
        if (!(!u.userAgentData || !u.userAgentData.getHighEntropyValues)) return u.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "model", "uaFullVersion"]).then(m => {
          const {
            brands: f,
            mobile: d
          } = u.userAgentData || {}, h = (L, v = !1) => L.filter(N => !/Not/.test(N.brand)).map(N => `${N.brand}${v?` ${N.version}`:""}`), g = L => L.length > 1 ? L.filter(v => !/Chromium/.test(v)) : L;
          return m.brands || (m.brands = f), m.brandsVersion = h(m.brands ?? [], !0), m.brands = h(m.brands ?? []), m.brandsVersion = g(m.brandsVersion ?? []), m.brands = g(m.brands ?? []), m.mobile || (m.mobile = d), Object.keys(m).sort().reduce((L, v) => (L[v] = m[v], L), {})
        })
      }, "userAgentData failed"),
      i = () => M(() => {
        const u = navigator;
        if (!(!("bluetooth" in navigator) || !u.bluetooth || !u.bluetooth.getAvailability)) return u.bluetooth.getAvailability()
      }, "bluetoothAvailability failed"),
      c = () => M(() => {
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
      l = () => M(() => {
        const u = navigator.gpu;
        if (u) return u.requestAdapter().then(m => {
          if (!m) return;
          const {
            limits: f,
            features: d
          } = m, h = y => {
            const {
              architecture: L,
              description: v,
              device: N,
              vendor: A
            } = y, D = [A, L, v, N], S = [...(d == null ? void 0 : d.values()) ?? []], w = (O => {
              const E = {};
              for (const k in O) E[k] = O[k];
              return E
            })(f);
            return He.webGpuAdapter = D, He.webGpuFeatures = S, He.webGpuLimits = $(w), {
              adapterInfo: D,
              limits: w
            }
          }, {
            info: g
          } = m;
          return g ? h(g) : m.requestAdapterInfo ? m.requestAdapterInfo().then(h) : void 0
        })
      }, "webgpu failed");
    return await ie(), Promise.all([a, s(), i(), c(), l()]).then(([u, m, f, d, h]) => ({
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
    X(n, "Navigator failed or blocked by client");
    return
  }
}

function ys() {
  const n = window.ApplePaySession;
  if (typeof n != "function" || typeof n.canMakePayments != "function") return -1;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (e) {
    const r = (e == null ? void 0 : e.message) ?? "";
    return r.includes("disabled in this insecure context") ? 2 : r.includes("Trying to start an Apple Pay session") ? 0 : -1
  }
}

function ws() {
  const t = document.createElement("a");
  try {
    const n = t.attributionSourceId ?? t.attributionsourceid;
    return n == null ? void 0 : String(n)
  } catch (n) {
    X(n);
    return
  } finally {
    t.remove()
  }
}

function bs() {
  try {
    const t = navigator.pdfViewerEnabled;
    return typeof t == "boolean" ? t : void 0
  } catch (t) {
    X(t);
    return
  }
}
const fe = "c767712b",
  vs = {
    noscript: {
      contentDocumentHash: ["0b637a33", "37e2f32e", "318390d1"],
      contentWindowHash: ["0b637a33", "37e2f32e", "318390d1"],
      getContextHash: ["0b637a33", "081d6d1b", fe]
    },
    trace: {
      contentDocumentHash: ["ca9d9c2f"],
      contentWindowHash: ["ca9d9c2f"],
      createElementHash: ["77dea834"],
      getElementByIdHash: ["77dea834"],
      getImageDataHash: ["77dea834"],
      toBlobHash: ["77dea834", fe],
      toDataURLHash: ["77dea834", fe]
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
      getImageDataHash: ["98ec858e", "a2971888", "dbbaf31f", fe],
      toBlobHash: ["9f1c3dfe", "a2971888", "dbbaf31f", fe],
      toDataURLHash: ["98ec858e", "a2971888", "dbbaf31f", fe]
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
      toDataURLHash: ["fd00bf5d", "8ee7df22", fe],
      toBlobHash: ["fd00bf5d", "8ee7df22", fe],
      getImageDataHash: ["fd00bf5d", "8ee7df22", fe],
      getByteFrequencyDataHash: ["fd00bf5d", "8ee7df22", fe],
      getByteTimeDomainDataHash: ["fd00bf5d", "8ee7df22", fe],
      getFloatFrequencyDataHash: ["fd00bf5d", "8ee7df22", fe],
      getFloatTimeDomainDataHash: ["fd00bf5d", "8ee7df22", fe],
      copyFromChannelHash: ["fd00bf5d", "8ee7df22", fe],
      getChannelDataHash: ["fd00bf5d", "8ee7df22", fe],
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
      getContextHash: ["55e9b959", fe],
      toDataURLHash: ["55e9b959", fe],
      toBlobHash: ["55e9b959", fe],
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
    duckduckgo: Ee,
    privacybadger: br,
    privacypossum: En,
    jshelter: Me,
    puppeteerExtra: pe,
    fakeBrowser: Oe
  } = vs;

function Es(t, n) {
  if (n) {
    if (n >= 7 && qe.contentDocumentHash.includes(t.contentDocumentHash) && qe.contentWindowHash.includes(t.contentWindowHash) && qe.createElementHash.includes(t.createElementHash) && qe.getElementByIdHash.includes(t.getElementByIdHash) && qe.toDataURLHash.includes(t.toDataURLHash) && qe.toBlobHash.includes(t.toBlobHash) && qe.getImageDataHash.includes(t.getImageDataHash)) return "Trace";
    if (n >= 7 && Ke.contentDocumentHash.includes(t.contentDocumentHash) && Ke.contentWindowHash.includes(t.contentWindowHash) && Ke.createElementHash.includes(t.createElementHash) && Ke.getElementByIdHash.includes(t.getElementByIdHash) && Ke.toDataURLHash.includes(t.toDataURLHash) && Ke.toBlobHash.includes(t.toBlobHash) && Ke.getImageDataHash.includes(t.getImageDataHash)) return "CyDec";
    if (n >= 6 && st.contentDocumentHash.includes(t.contentDocumentHash) && st.contentWindowHash.includes(t.contentWindowHash) && st.appendHash.includes(t.appendHash) && st.toDataURLHash.includes(t.toDataURLHash) && st.toBlobHash.includes(t.toBlobHash) && st.getImageDataHash.includes(t.getImageDataHash)) return "CanvasBlocker";
    if (n >= 9 && xe.appendHash.includes(t.appendHash) && xe.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && xe.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && xe.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && xe.prependHash.includes(t.prependHash) && xe.replaceWithHash.includes(t.replaceWithHash) && xe.appendChildHash.includes(t.appendChildHash) && xe.insertBeforeHash.includes(t.insertBeforeHash) && xe.replaceChildHash.includes(t.replaceChildHash)) return "Chameleon";
    if (n >= 7 && Ee.toDataURLHash.includes(t.toDataURLHash) && Ee.toBlobHash.includes(t.toBlobHash) && Ee.getImageDataHash.includes(t.getImageDataHash) && Ee.getByteFrequencyDataHash.includes(t.getByteFrequencyDataHash) && Ee.getByteTimeDomainDataHash.includes(t.getByteTimeDomainDataHash) && Ee.getFloatFrequencyDataHash.includes(t.getFloatFrequencyDataHash) && Ee.getFloatTimeDomainDataHash.includes(t.getFloatTimeDomainDataHash) && Ee.copyFromChannelHash.includes(t.copyFromChannelHash) && Ee.getChannelDataHash.includes(t.getChannelDataHash) && Ee.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Ee.availHeightHash.includes(t.availHeightHash) && Ee.availLeftHash.includes(t.availLeftHash) && Ee.availTopHash.includes(t.availTopHash) && Ee.availWidthHash.includes(t.availWidthHash) && Ee.colorDepthHash.includes(t.colorDepthHash) && Ee.pixelDepthHash.includes(t.pixelDepthHash)) return "DuckDuckGo";
    if (n >= 2 && br.getImageDataHash.includes(t.getImageDataHash) && br.toDataURLHash.includes(t.toDataURLHash)) return "Privacy Badger";
    if (n >= 3 && En.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && En.availWidthHash.includes(t.availWidthHash) && En.colorDepthHash.includes(t.colorDepthHash)) return "Privacy Possum";
    if (n >= 2 && vn.contentDocumentHash.includes(t.contentDocumentHash) && vn.contentWindowHash.includes(t.contentDocumentHash) && vn.getContextHash.includes(t.getContextHash) && t.hardwareConcurrencyHash == fe) return "NoScript";
    if (n >= 14 && Me.contentDocumentHash.includes(t.contentDocumentHash) && Me.contentWindowHash.includes(t.contentDocumentHash) && Me.appendHash.includes(t.appendHash) && Me.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && Me.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && Me.prependHash.includes(t.prependHash) && Me.replaceWithHash.includes(t.replaceWithHash) && Me.appendChildHash.includes(t.appendChildHash) && Me.insertBeforeHash.includes(t.insertBeforeHash) && Me.replaceChildHash.includes(t.replaceChildHash) && Me.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "JShelter";
    if (n >= 13 && pe.contentDocumentHash.includes(t.contentDocumentHash) && pe.contentWindowHash.includes(t.contentWindowHash) && pe.createElementHash.includes(t.createElementHash) && pe.getElementByIdHash.includes(t.getElementByIdHash) && pe.appendHash.includes(t.appendHash) && pe.insertAdjacentElementHash.includes(t.insertAdjacentElementHash) && pe.insertAdjacentHTMLHash.includes(t.insertAdjacentHTMLHash) && pe.insertAdjacentTextHash.includes(t.insertAdjacentTextHash) && pe.prependHash.includes(t.prependHash) && pe.replaceWithHash.includes(t.replaceWithHash) && pe.appendChildHash.includes(t.appendChildHash) && pe.insertBeforeHash.includes(t.insertBeforeHash) && pe.contentDocumentHash.includes(t.contentDocumentHash) && pe.replaceChildHash.includes(t.replaceChildHash) && pe.getContextHash.includes(t.getContextHash) && pe.toDataURLHash.includes(t.toDataURLHash) && pe.toBlobHash.includes(t.toBlobHash) && pe.getImageDataHash.includes(t.getImageDataHash) && pe.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash)) return "puppeteer-extra";
    if (n >= 12 && Oe.appendChildHash.includes(t.appendChildHash) && Oe.getContextHash.includes(t.getContextHash) && Oe.toDataURLHash.includes(t.toDataURLHash) && Oe.toBlobHash.includes(t.toBlobHash) && Oe.getImageDataHash.includes(t.getImageDataHash) && Oe.hardwareConcurrencyHash.includes(t.hardwareConcurrencyHash) && Oe.availHeightHash.includes(t.availHeightHash) && Oe.availLeftHash.includes(t.availLeftHash) && Oe.availTopHash.includes(t.availTopHash) && Oe.availWidthHash.includes(t.availWidthHash) && Oe.colorDepthHash.includes(t.colorDepthHash) && Oe.pixelDepthHash.includes(t.pixelDepthHash)) return "FakeBrowser"
  }
}
async function As() {
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
async function Ns() {
  try {
    await ie();
    const t = Ti(),
      n = {
        privacy: void 0,
        security: void 0,
        mode: void 0,
        extension: void 0,
        engine: le ? "Blink" : At ? "Gecko" : ""
      },
      [e, r] = await Promise.all([Yr(), le ? void 0 : As()]);
    if (e) {
      const c = ci();
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
    await ie();
    const s = {
        contentDocumentHash: $(t["HTMLIFrameElement.contentDocument"]),
        contentWindowHash: $(t["HTMLIFrameElement.contentWindow"]),
        createElementHash: $(t["Document.createElement"]),
        getElementByIdHash: $(t["Document.getElementById"]),
        appendHash: $(t["Element.append"]),
        insertAdjacentElementHash: $(t["Element.insertAdjacentElement"]),
        insertAdjacentHTMLHash: $(t["Element.insertAdjacentHTML"]),
        insertAdjacentTextHash: $(t["Element.insertAdjacentText"]),
        prependHash: $(t["Element.prepend"]),
        replaceWithHash: $(t["Element.replaceWith"]),
        appendChildHash: $(t["Node.appendChild"]),
        insertBeforeHash: $(t["Node.insertBefore"]),
        replaceChildHash: $(t["Node.replaceChild"]),
        getContextHash: $(t["HTMLCanvasElement.getContext"]),
        toDataURLHash: $(t["HTMLCanvasElement.toDataURL"]),
        toBlobHash: $(t["HTMLCanvasElement.toBlob"]),
        getImageDataHash: $(t["CanvasRenderingContext2D.getImageData"]),
        getByteFrequencyDataHash: $(t["AnalyserNode.getByteFrequencyData"]),
        getByteTimeDomainDataHash: $(t["AnalyserNode.getByteTimeDomainData"]),
        getFloatFrequencyDataHash: $(t["AnalyserNode.getFloatFrequencyData"]),
        getFloatTimeDomainDataHash: $(t["AnalyserNode.getFloatTimeDomainData"]),
        copyFromChannelHash: $(t["AudioBuffer.copyFromChannel"]),
        getChannelDataHash: $(t["AudioBuffer.getChannelData"]),
        hardwareConcurrencyHash: $(t["Navigator.hardwareConcurrency"]),
        availHeightHash: $(t["Screen.availHeight"]),
        availLeftHash: $(t["Screen.availLeft"]),
        availTopHash: $(t["Screen.availTop"]),
        availWidthHash: $(t["Screen.availWidth"]),
        colorDepthHash: $(t["Screen.colorDepth"]),
        pixelDepthHash: $(t["Screen.pixelDepth"])
      },
      i = {};
    for (const [c, l] of Object.entries(s)) l !== fe && (i[c.slice(0, -4)] = l);
    return n.extensionHashPattern = i, n.extension = Es(s, o), n
  } catch (t) {
    X(t);
    return
  }
}

function Ts() {
  try {
    return "ontouchstart" in window && !!document.createEvent("TouchEvent")
  } catch {
    return !1
  }
}
async function Ss() {
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
    !tt && m && (n = !0, re("Window.devicePixelRatio", "lied dpr"));
    const f = !(r - o || a - s);
    return r > 800 && f && (De.SCREEN = !0), {
      width: r,
      height: a,
      availWidth: o,
      availHeight: s,
      colorDepth: i,
      pixelDepth: c,
      touch: Ts(),
      lied: n
    }
  } catch (t) {
    X(t);
    return
  }
}
async function Os() {
  return await new Promise(t => setTimeout(() => t(void 0), 50)), new Promise(async t => {
    try {
      await ie();
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
              lang: D
            } = N;
            m.has(D) || (m.add(D), u.push(D)), N.default && N.localService && (d = N, h++)
          }
          if (le && !f) return;
          r();
          let g = "",
            y = "";
          h === 1 && d && (g = d.name, y = (d.lang || "").replace(/_/, "-"));
          const {
            locale: L
          } = Intl.DateTimeFormat().resolvedOptions();
          return y && y.split("-")[0] !== L.split("-")[0] && (He.voiceLangMismatch = !0, De.TIME_ZONE = !0), t({
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
      return X(n), t(null)
    }
  })
}

function Rs() {
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
      return m.length == 1 && m[0] == i ? i : $(m)
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
    X(s);
    return
  }
}
const Is = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  Ds = {
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
  ks = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]),
  Ms = new Set(["ALIASED_LINE_WIDTH_RANGE", "SHADING_LANGUAGE_VERSION", "VERSION"]),
  vr = t => {
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
async function Ls() {
  var a;
  let t, n, e, r;
  try {
    await ie();
    const o = Le(),
      s = hn(),
      i = o["HTMLCanvasElement.toDataURL"],
      c = o["HTMLCanvasElement.getContext"],
      l = o["WebGLRenderingContext.getParameter"] || o["WebGL2RenderingContext.getParameter"] || o["WebGLRenderingContext.getExtension"] || o["WebGL2RenderingContext.getExtension"],
      u = i || c || l || o["WebGLRenderingContext.getSupportedExtensions"] || o["WebGL2RenderingContext.getSupportedExtensions"] || !1;
    let m = window;
    !Xr && s && (m = s);
    const f = m.document;
    "OffscreenCanvas" in window ? (t = new m.OffscreenCanvas(256, 256), n = new m.OffscreenCanvas(256, 256)) : (t = f.createElement("canvas"), n = f.createElement("canvas"));
    const d = Nn(t, "webgl"),
      h = Nn(n, "webgl2");
    if (e = d, r = h, !d) return;
    const g = (C, F) => {
        if (!C) return;
        const G = M(() => C.getShaderPrecisionFormat(C[F], C.LOW_FLOAT)),
          se = M(() => C.getShaderPrecisionFormat(C[F], C.MEDIUM_FLOAT)),
          ee = M(() => C.getShaderPrecisionFormat(C[F], C.HIGH_FLOAT)),
          oe = M(() => C.getShaderPrecisionFormat(C[F], C.HIGH_INT));
        return {
          LOW_FLOAT: G,
          MEDIUM_FLOAT: se,
          HIGH_FLOAT: ee,
          HIGH_INT: oe
        }
      },
      y = (C, F) => {
        const G = {};
        if (!F) return G;
        for (const se in F) {
          const ee = F[se];
          G[C + "." + se + ".precision"] = ee ? M(() => ee.precision) : void 0, G[C + "." + se + ".rangeMax"] = ee ? M(() => ee.rangeMax) : void 0, G[C + "." + se + ".rangeMin"] = ee ? M(() => ee.rangeMin) : void 0
        }
        return G
      },
      L = C => {
        const F = {};
        if (!C) return F;
        const G = C;
        for (const se of Is) {
          const ee = G[se];
          if (ee === void 0) continue;
          const oe = C.getParameter(ee);
          oe && ArrayBuffer.isView(oe) ? F[se] = Array.from(oe) : F[se] = oe
        }
        return F
      },
      v = C => {
        if (!C) return [];
        const F = M(() => C.getContextAttributes());
        return F ? Object.keys(F).sort().map(G => `${G}=${F[G]}`) : []
      },
      N = C => {
        if (!C) return [];
        const F = [];
        for (const [G, se] of Object.entries(Ds)) {
          const ee = M(() => C.getExtension(G));
          if (ee)
            for (const oe of se) {
              const U = ee[oe];
              if (typeof U != "number") continue;
              if (!ks.has(oe)) {
                F.push(`${oe}=${U}`);
                continue
              }
              const j = M(() => C.getParameter(U));
              j == null ? F.push(`${oe}=${U}`) : typeof j == "object" && "length" in j ? F.push(`${oe}=${U}=${Array.from(j).join(",")}`) : F.push(`${oe}=${U}=${j}`)
            }
        }
        return F.sort()
      },
      A = C => {
        const F = C ? C.getExtension("WEBGL_debug_renderer_info") : null;
        return !F || !C ? {} : {
          UNMASKED_VENDOR_WEBGL: C.getParameter(F.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: C.getParameter(F.UNMASKED_RENDERER_WEBGL)
        }
      },
      D = C => {
        if (!C) return [];
        const F = M(() => C.getSupportedExtensions());
        return F || []
      },
      S = (C, F) => {
        if (!C) return {
          dataURI: void 0,
          pixels: void 0
        };
        try {
          vr(C);
          const {
            drawingBufferWidth: G,
            drawingBufferHeight: se
          } = C;
          let ee = "";
          if (C.canvas.constructor.name === "OffscreenCanvas") {
            const z = document.createElement("canvas"),
              te = Nn(z, F);
            try {
              vr(te), ee = z.toDataURL()
            } finally {
              An(z, te)
            }
          } else ee = C.canvas.toDataURL();
          const oe = G / 15,
            U = se / 6,
            j = new Uint8Array(oe * U * 4);
          try {
            C.readPixels(0, 0, oe, U, C.RGBA, C.UNSIGNED_BYTE, j)
          } catch {
            return {
              dataURI: ee,
              pixels: void 0
            }
          }
          return {
            dataURI: ee,
            pixels: Array.from(j)
          }
        } catch (G) {
          X(G);
          return
        }
      };
    await ie();
    const w = {
        ...L(d),
        ...A(d)
      },
      O = {
        ...L(h),
        ...A(h)
      },
      E = [];
    for (const C in O) {
      const F = w[C];
      !F || Ms.has(C) || "" + F != "" + O[C] && E.push(C)
    }
    E.length && ue("webgl/webgl2 mirrored params mismatch", E.toString()), await ie();
    const {
      dataURI: k,
      pixels: B
    } = S(d, "webgl") || {}, {
      dataURI: H,
      pixels: P
    } = S(h, "webgl2") || {}, R = {
      extensions: [...D(d), ...D(h)],
      contextAttributes: v(d),
      contextAttributes2: v(h),
      extensionParameters: N(d),
      extensionParameters2: N(h),
      pixels: B,
      pixels2: P,
      dataURI: k,
      dataURI2: H,
      parameters: {
        ...w,
        ...O,
        ...y("VERTEX_SHADER", g(d, "VERTEX_SHADER")),
        ...y("FRAGMENT_SHADER", g(d, "FRAGMENT_SHADER"))
      },
      parameterOrExtensionLie: l,
      lied: u
    }, ae = ["00b72507", "00c1b42d", "00fe1ec9", "02b3eea3", "0461d3de", "0463627d", "057857ac", "0586e20b", "0639a81a", "087d5759", "08847ba5", "0b2d4333", "0cdb985d", "0e058699", "0eb2fc19", "0f39d057", "0f840379", "0fc123c7", "101e0582", "12e92e62", "12f8ac14", "1453d59a", "149a1efa", "166dc7c8", "16c481a6", "171831c5", "177cc258", "18579e83", "19594666", "1b251fd7", "1bfd326c", "1e8a9a79", "1ff7c7e7", "2048bc5a", "2259b706", "22d0f2cf", "230d6a0d", "23d1ce20", "2402c3d2", "24306836", "258789d0", "25a760b8", "25f9385d", "27938830", "27db292c", "2b80fd96", "2bb488da", "2c04c2eb", "2d15287f", "2f014c41", "2f582ed9", "300ee927", "33bc5492", "34270469", "3660b71f", "3740c4c7", "3999a5e1", "39ead506", "3a91d0d6", "3b724916", "3bf321b8", "3c546144", "3f9ef44c", "3fea1100", "3ff82303", "4027d193", "402e1064", "4065cd69", "43038e3d", "4503e771", "461f97e1", "464d51ac", "467b99a5", "482c81b2", "48af038f", "4962ada1", "49bf7358", "4c9e8f5d", "502c402c", "508d1625", "52e348ba", "534002ab", "5582debe", "55d3aa56", "55e821f7", "581f3282", "5831d5fd", "58871380", "58fdc720", "5a5658f1", "5a90a5f8", "5aea1af1", "5b6a17aa", "5bef9a39", "5ca55292", "5d786cef", "5ddb9237", "5ee41456", "61178f2a", "61ca8e23", "61d9464e", "61eecaae", "623c3bfd", "6248d9e3", "6294d84e", "62bf7ef1", "6346cf49", "6357365c", "66628310", "668f0f93", "66d992e8", "67995996", "6843ebbf", "6864dcb0", "6951838b", "696e1548", "698c5c2e", "6a75ae3b", "6aa1ff7e", "6b07d4f8", "6b290cd4", "6c168801", "6dfae3cb", "6e806ffc", "6edf1720", "6f81cbe7", "70859bdb", "70a095b1", "7238c5dd", "7360ebd1", "741688e4", "74daf866", "78640859", "79284c47", "794f8929", "795e5c95", "79a57aa9", "7aa13573", "7b2e5242", "7b811cdd", "7ec0ea6b", "801d73af", "802e2547", "81b9cd29", "8219e1a4", "82a9a2f1", "8428fc8e", "849ccb64", "8541aa4c", "85479b99", "8bd0b91b", "8d371161", "903c8847", "917871e7", "98aeaba9", "99b1a1c6", "99ef2c3b", "9b67b7dc", "9c6df98c", "9c814c1b", "9e2b5e94", "9fd76352", "a1c808d5", "a22788f8", "a2383001", "a26e9aa9", "a397a568", "a3f9ee34", "a4b988da", "a4d34176", "a581f55e", "a5a477ae", "a9640880", "a97d3858", "aa73f3a4", "ab40bece", "ac4d4ba8", "ad01a422", "ade75c4f", "ae2c4777", "afa583bc", "b10c2a85", "b224cc7c", "b2d6fc98", "b362c2f5", "b467620a", "b4d40dcc", "b504662d", "b50edd99", "b5494027", "b62321c3", "b8961d15", "b8ea6e7f", "bb77a469", "bc0f9686", "bcf7315f", "be2dfaea", "beffda26", "bf06317e", "bf610cdb", "bfe1c212", "c00582e9", "c026469d", "c04889b1", "c04b0635", "c04e374a", "c05f7596", "c07307c6", "c092fdf8", "c25dd065", "c2bce496", "c5e9a883", "c79634c2", "c7e37ca0", "c93b5366", "c9bc4ffd", "cba1878b", "cbeade8c", "ce2e3d16", "cefb72ca", "cf9643e6", "cfd20274", "d05a66eb", "d09c1c07", "d1e76c89", "d2172943", "d2dc2474", "d498797d", "d6bf35ad", "d734ea08", "d860ff42", "d8bd9e5a", "d913dafa", "d970d345", "dbdbe7a4", "dc271c35", "dcd9a29e", "dd67b076", "de793ead", "ded74044", "df9daeb6", "e10339b3", "e142d1f9", "e155c47e", "e15afab0", "e16bb1bb", "e316e4c0", "e3eff92a", "e4569a5b", "e574bef6", "e5962ba3", "e6464c9f", "e68b5c4e", "e796b84e", "e8694547", "e965d180", "e965d541", "e9bdc904", "e9dbb8d5", "ea54d525", "ea59b343", "ea7f90ea", "ea8f5ad0", "eaa13804", "eb799d34", "ec050bb6", "ec928655", "eed2e5e1", "ef8f5db1", "f0d5a3c7", "f1077334", "f221fef5", "f2293447", "f33d918e", "f3c6ea11", "f51056a1", "f51cab9a", "f573bb34", "f5d19934", "f7451c92", "f8e65486", "f9714b3d", "fa994f33", "fafa14c0", "fc37fe1f", "fca66520", "fe0997b6"], Ae = [-1056897629, -1056946782, -1073719331, -1147160399, -1147160553, -1147168724, -1147419751, -1147419753, -1147419775, -1147427826, -1147451883, -1147451901, -1147464169, -1147464177, -1147488144, -1147602934, -1147643759, -1147643872, -1147765274, -1148326739, -1148335070, -1148572354, -1148678631, -1148680509, -1148713259, -1164279890, -1164800191, -1164800478, -1332029332, -133757475, -1342154787, -134823971, -16746546, -1878102921, -1878111124, -1962893370, -1962919974, -1962928178, -2130164162, -2130164382, -2130164388, -2130164546, -2130172573, -2130659912, -2145933648, -2145941977, -2145958228, -2145966414, -2145966441, -2145966529, -2145966535, -2145966545, -2145970658, -2145974343, -2145974380, -2145974489, -2145974596, -2145974598, -2145974612, -2145974637, -2145974657, -2145974729, -2146187766, -2146232338, -2146232480, -2146232503, -2146232590, -2146232723, -2146232724, -2146236588, -2146236703, -2146237020, -2146251619, -2146251641, -2146251681, -2146253671, -2146253693, -2146277218, -2146286438, -2146286463, -2146286583, -2146319268, -2146376065, -2146379955, -2146384003, -2146384011, -2146384027, -2146384034, -2146384120, -2146384281, -2146398568, -2146400384, -2146400556, -2146400620, -2146401928, -2146417027, -2146526795, -2146526934, -2147125544, -2147128275, -2147133747, -2147133749, -2147133760, -2147134974, -2147136328, -2147142429, -2147287810, -2147287811, -2147287820, -2147287834, -2147287835, -2147287854, -2147291718, -2147291820, -2147293058, -2147295768, -2147295822, -2147295823, -2147295849, -2147295857, -2147300019, -2147304193, -2147304219, -2147306321, -2147316382, -2147316383, -2147333118, -2147336998, -2147337003, -2147337012, -2147337022, -2147344686, -2147346747, -2147361652, -2147361731, -2147361769, -2147361774, -2147361775, -2147361778, -2147361792, -2147362760, -2147365698, -2147365730, -2147365759, -2147365760, -2147365827, -2147365863, -2147373914, -2147373984, -2147374032, -2147374080, -2147378041, -2147378146, -2147382130, -2147382221, -2147382251, -2147382270, -2147382272, -2147383246, -2147385825, -2147385849, -2147386292, -2147386326, -2147387335, -2147387364, -2147389930, -2147389937, -2147389951, -2147390461, -2147394188, -2147394251, -2147394484, -2147400057, -2147406798, -2147407643, -2147407821, -2147410938, -2147410941, -2147414733, -2147414956, -2147414987, -2147415037, -2147429201, -2147429223, -2147439020, -2147440422, -2147447111, -2147447122, -2147447126, -2147447137, -2147447149, -2147447157, -2147447161, -2147447163, -2147447873, -2147447892, -2147447896, -2147447928, -2147448592, -2147453701, -2147453767, -2147453768, -2147459031, -2147461169, -2147466956, -2147466972, -2147467172, -2147470173, -2147475351, -2147475352, -638494755, -671082546, -677558160, -999987216, 1099536, 1099644, 1147714426, 1197075, 1229835, 1508998, 1509050, 1610618841, 184555483, 2146590728, 2147305224, 2147361749, 2147440438, 2147475085, 2147479181, 21667, 349912, 351513, 83625, 998804992, 998911268, 999148597, 999156922];
    let ye;
    if (R.parameters) {
      const C = new Set;
      for (const F in R.parameters) {
        const G = R.parameters[F];
        if (!(!G || typeof G == "string"))
          if (Array.isArray(G))
            for (const se of G) C.add(Number(se));
          else C.add(Number(G))
      }
      ye = [...C].sort((F, G) => F - G)
    }
    const Ne = di((a = R.parameters) == null ? void 0 : a.UNMASKED_RENDERER_WEBGL),
      ve = "" + ye,
      we = !Ne || !ve ? void 0 : $([Ne, ve]),
      ke = ye ? ye.reduce((C, F, G) => C ^ +F + G, 0) : void 0;
    He.webglParams = ve, He.webglBrandCapabilities = we, He.webglCapabilities = ke;
    const Se = we && !ae.includes(we),
      at = ke && !Ae.includes(ke);
    return Se && (De.WEBGL = !0, ue("WebGLRenderingContext.getParameter", "suspicious gpu")), at && (De.WEBGL = !0, ue("WebGLRenderingContext.getParameter", "suspicious capabilities")), {
      ...R,
      gpu: {
        ...ca((R.parameters || {}).UNMASKED_RENDERER_WEBGL) || {},
        compressedGPU: sa((R.parameters || {}).UNMASKED_RENDERER_WEBGL)
      }
    }
  } catch (o) {
    X(o);
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
async function Cs() {
  var n, e, r, a, o, s, i, c, l, u, m, f, d, h, g, y, L, v, N, A, D, S, w, O, E, k, B, H, P;
  const t = await Ps();
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
      device: t.workerScope.device,
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
      availWidth: t.screen.availWidth,
      availHeight: t.screen.availHeight,
      pixelDepth: t.screen.pixelDepth,
      colorDepth: t.screen.colorDepth,
      lied: t.screen.lied
    },
    media: t.media,
    canvas2d: (l = t.canvas2d) != null && l.lied ? void 0 : t.canvas2d,
    canvasWebgl: t.canvasWebgl,
    cssMedia: t.cssMedia ? {
      reducedMotion: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["prefers-reduced-motion"]
      }),
      colorScheme: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["prefers-color-scheme"]
      }),
      monochrome: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS.monochrome
      }),
      invertedColors: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["inverted-colors"]
      }),
      forcedColors: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["forced-colors"]
      }),
      colorGamut: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["color-gamut"]
      }),
      hdr: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["dynamic-range"]
      }),
      contrast: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["prefers-contrast"]
      }),
      reducedTransparency: be(() => {
        var R;
        return (R = t.cssMedia) == null ? void 0 : R.mediaCSS["prefers-reduced-transparency"]
      })
    } : void 0,
    css: t.css ? (m = (u = t.css) == null ? void 0 : u.system) == null ? void 0 : m.fonts : void 0,
    timezone: !t.timezone || t.timezone.lied || De.TIME_ZONE ? void 0 : {
      locationMeasured: t.timezone.locationMeasured,
      lied: t.timezone.lied
    },
    offlineAudioContext: (f = t.offlineAudioContext) != null && f.lied ? void 0 : {
      baseLatency: (d = t.offlineAudioContext) == null ? void 0 : d.baseLatency,
      binsSample: (h = t.offlineAudioContext) == null ? void 0 : h.binsSample,
      compressorGainReduction: (g = t.offlineAudioContext) == null ? void 0 : g.compressorGainReduction,
      copySample: (y = t.offlineAudioContext) == null ? void 0 : y.copySample,
      floatFrequencyDataSum: (L = t.offlineAudioContext) == null ? void 0 : L.floatFrequencyDataSum,
      floatTimeDomainDataSum: (v = t.offlineAudioContext) == null ? void 0 : v.floatTimeDomainDataSum,
      lied: (N = t.offlineAudioContext) == null ? void 0 : N.lied,
      noise: (A = t.offlineAudioContext) == null ? void 0 : A.noise,
      totalUniqueSamples: (D = t.offlineAudioContext) == null ? void 0 : D.totalUniqueSamples,
      values: (S = t.offlineAudioContext) == null ? void 0 : S.values
    },
    domBlockers: t.domBlockers,
    fonts: t.fonts ? t.fonts.fontFaceLoadFonts : void 0,
    intl: !t.intl || t.intl.lied ? void 0 : {
      dateTimeFormat: (w = t.intl) == null ? void 0 : w.dateTimeFormat,
      lied: (O = t.intl) == null ? void 0 : O.lied,
      listFormat: (E = t.intl) == null ? void 0 : E.listFormat,
      locale: (k = t.intl) == null ? void 0 : k.locale,
      numberFormat: (B = t.intl) == null ? void 0 : B.numberFormat,
      pluralRules: (H = t.intl) == null ? void 0 : H.pluralRules,
      relativeTimeFormat: (P = t.intl) == null ? void 0 : P.relativeTimeFormat
    },
    maths: !t.maths || t.maths.lied ? void 0 : t.maths,
    voices: !t.voices || t.voices.lied ? void 0 : t.voices,
    resistance: t.resistance
  }
}
async function Ps() {
  try {
    const [t, n, e, r, a, o, s, i, c, l, u, m, f, d, h, g] = await Promise.all([ce("voices", Os()), ce("offlineAudioContext", xi()), ce("canvasWebgl", Ls()), ce("canvas2d", Fi()), ce("css", Promise.resolve(Ui())), ce("cssMedia", Promise.resolve(ji())), ce("screen", Ss()), ce("maths", Promise.resolve(ms())), ce("consoleErrors", Promise.resolve(Ji())), ce("timezone", Promise.resolve(Rs())), ce("fonts", ss()), ce("media", hs()), ce("resistance", Ns()), ce("intl", fs()), ce("workerScope", Ci()), ce("domBlockers", Vi())]), [y, L, v, N, A] = await Promise.all([ce("navigator", gs(h)), ce("headless", _s({
      webgl: e
    })), ce("lies", Promise.resolve(Si())), ce("trash", Promise.resolve(ki())), ce("capturedErrors", Promise.resolve(ii()))]), [D, S] = await Promise.all([ur((e == null ? void 0 : e.pixels) ?? []), ur((e == null ? void 0 : e.pixels2) ?? [])]);
    return {
      navigator: y,
      headless: L,
      cssMedia: o,
      css: a,
      screen: s,
      voices: t,
      media: m,
      canvas2d: r,
      canvasWebgl: {
        ...e,
        pixels: D,
        pixels2: S
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
    Ni()
  }
}

function ce(t, n) {
  return n.catch(() => {})
}
let Jt;
async function xs() {
  if (Jt) try {
    return await Jt
  } catch {}
  return Jt = (async () => {
    var a, o, s, i, c, l, u, m, f, d, h, g, y, L, v, N, A, D, S, w, O, E, k, B, H, P, R, ae, Ae, ye, Ne, ve, we, ke, Se, at, C, F, G, se, ee, oe, U, j, z, te, de, _e, Ue, Ce, $e, Yt, zn, $n, qn, Kn, Xn, Yn, Jn, Zn, Qn;
    const t = await Cs();
    switch ((a = t.navigator) != null && a.lied && t.screen && (t.screen.width = 0, t.screen.height = 0), Ea({
        userAgent: (o = t.workerScope) == null ? void 0 : o.userAgent
      })) {
      case "Firefox":
        delete t.intl, t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI, delete t.canvas2d.paintCpuURI, delete t.canvas2d.mods), t.canvasWebgl && (delete t.canvasWebgl.dataURI, delete t.canvasWebgl.dataURI2);
        break;
      case "Brave":
        t.navigator && (delete t.navigator.deviceMemory, delete t.navigator.hardwareConcurrency), t.workerScope && (delete t.workerScope.deviceMemory, delete t.workerScope.hardwareConcurrency), t.canvas2d && (delete t.canvas2d.dataURI, delete t.canvas2d.paintURI, delete t.canvas2d.emojiURI, delete t.canvas2d.textURI, delete t.canvas2d.paintCpuURI, delete t.canvas2d.mods), t.canvasWebgl && (delete t.canvasWebgl.dataURI, delete t.canvasWebgl.dataURI2, delete t.canvasWebgl.parameters), t.offlineAudioContext && (delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.floatTimeDomainDataSum, delete t.offlineAudioContext.sampleSum, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.noise), t.cssMedia && delete t.cssMedia.colorScheme;
      case "Safari":
        t.canvas2d && delete t.canvas2d.mods, t.offlineAudioContext && (delete t.offlineAudioContext.baseLatency, delete t.offlineAudioContext.binsSample, delete t.offlineAudioContext.copySample, delete t.offlineAudioContext.floatFrequencyDataSum, delete t.offlineAudioContext.totalUniqueSamples, delete t.offlineAudioContext.noise)
    }
    t.navigator && delete t.navigator.lied;
    const e = await Promise.all([T(t.navigator), T(t.workerScope), T(t.screen), T(t.media), "a0", T(t.canvas2d), T(t.canvasWebgl), T(t.cssMedia), T(t.css), T(t.voices), T(t.timezone), T(t.offlineAudioContext), T(t.fonts), T(t.intl), T(t.maths), T(t.domBlockers)]),
      r = await Promise.all([T((s = t.canvas2d) == null ? void 0 : s.dataURI), T((i = t.canvas2d) == null ? void 0 : i.emojiSet), T((c = t.canvas2d) == null ? void 0 : c.emojiURI), T((l = t.canvas2d) == null ? void 0 : l.lied), T((u = t.canvas2d) == null ? void 0 : u.liedTextMetrics), T((m = t.canvas2d) == null ? void 0 : m.mods), T((f = t.canvas2d) == null ? void 0 : f.paintCpuURI), T((d = t.canvas2d) == null ? void 0 : d.paintURI), T((h = t.canvas2d) == null ? void 0 : h.textMetricsSystemSum), T((g = t.canvas2d) == null ? void 0 : g.textURI), "|", T((y = t.offlineAudioContext) == null ? void 0 : y.baseLatency), T((L = t.offlineAudioContext) == null ? void 0 : L.binsSample), T((v = t.offlineAudioContext) == null ? void 0 : v.compressorGainReduction), T((N = t.offlineAudioContext) == null ? void 0 : N.copySample), T((A = t.offlineAudioContext) == null ? void 0 : A.floatFrequencyDataSum), T((D = t.offlineAudioContext) == null ? void 0 : D.floatTimeDomainDataSum), T((S = t.offlineAudioContext) == null ? void 0 : S.lied), T((w = t.offlineAudioContext) == null ? void 0 : w.noise), T((O = t.offlineAudioContext) == null ? void 0 : O.totalUniqueSamples), T((E = t.offlineAudioContext) == null ? void 0 : E.values), "|", T(t.intl), T(t.domBlockers), "|", T((k = t.intl) == null ? void 0 : k.dateTimeFormat), T((B = t.intl) == null ? void 0 : B.lied), T((H = t.intl) == null ? void 0 : H.listFormat), T((P = t.intl) == null ? void 0 : P.locale), T((R = t.intl) == null ? void 0 : R.numberFormat), T((ae = t.intl) == null ? void 0 : ae.pluralRules), T((Ae = t.intl) == null ? void 0 : Ae.relativeTimeFormat), "|", T((ye = t.voices) == null ? void 0 : ye.defaultVoiceLang), T((Ne = t.voices) == null ? void 0 : Ne.defaultVoiceName), T((ve = t.voices) == null ? void 0 : ve.languages), T((we = t.voices) == null ? void 0 : we.lied), T((ke = t.voices) == null ? void 0 : ke.local), T((Se = t.voices) == null ? void 0 : Se.remote), "|", T((at = t.navigator) == null ? void 0 : at.lied), T((C = t.navigator) == null ? void 0 : C.applePay), T((F = t.navigator) == null ? void 0 : F.bluetoothAvailability), T((G = t.navigator) == null ? void 0 : G.deviceMemory), T((se = t.navigator) == null ? void 0 : se.hardwareConcurrency), T((ee = t.navigator) == null ? void 0 : ee.oscpu), T((oe = t.navigator) == null ? void 0 : oe.pdfViewerEnabled), T((U = t.navigator) == null ? void 0 : U.platform), T((j = t.navigator) == null ? void 0 : j.privateClickMeasurement), T((z = t.navigator) == null ? void 0 : z.vendor), "|", T((te = t.workerScope) == null ? void 0 : te.device), T((de = t.workerScope) == null ? void 0 : de.deviceMemory), T((_e = t.workerScope) == null ? void 0 : _e.hardwareConcurrency), T((Ue = t.workerScope) == null ? void 0 : Ue.platform), T((Ce = t.workerScope) == null ? void 0 : Ce.system), T(($e = t.workerScope) == null ? void 0 : $e.userAgent), T((Yt = t.workerScope) == null ? void 0 : Yt.userAgentData), "|", T((zn = t.cssMedia) == null ? void 0 : zn.colorGamut), T(($n = t.cssMedia) == null ? void 0 : $n.colorScheme), T((qn = t.cssMedia) == null ? void 0 : qn.contrast), T((Kn = t.cssMedia) == null ? void 0 : Kn.forcedColors), T((Xn = t.cssMedia) == null ? void 0 : Xn.hdr), T((Yn = t.cssMedia) == null ? void 0 : Yn.invertedColors), T((Jn = t.cssMedia) == null ? void 0 : Jn.monochrome), T((Zn = t.cssMedia) == null ? void 0 : Zn.reducedMotion), T((Qn = t.cssMedia) == null ? void 0 : Qn.reducedTransparency)]);
    return e.map(gn => gn.slice(0, 2)).join("").padEnd(32, "0").slice(0, 32) + "|" + r.map(gn => gn[0]).join("")
  })(), Jt
}
const Er = "theme";
var Nt, Tt, St, Ot, Rt, It, Dt, kt, Mt, Lt;
class Bs {
  constructor() {
    J(this, Nt, me(!1));
    J(this, Tt, me(!1));
    J(this, St, me(0));
    J(this, Ot, me(!1));
    J(this, Rt, me(an(Hs())));
    J(this, It, me(null));
    J(this, Dt, me(!1));
    J(this, kt, me("custom-winter"));
    J(this, Mt, me(an(Date.now())));
    J(this, Lt, me(void 0));
    setInterval(() => {
      ne(x(this, Mt), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Er), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return Q(x(this, Nt))
  }
  set dropletsDialogOpen(n) {
    ne(x(this, Nt), n, !0)
  }
  get storeDialogOpen() {
    return Q(x(this, Tt))
  }
  set storeDialogOpen(n) {
    ne(x(this, Tt), n, !0)
  }
  get storeTabIndex() {
    return Q(x(this, St))
  }
  set storeTabIndex(n) {
    ne(x(this, St), n, !0)
  }
  get muted() {
    return Q(x(this, Ot))
  }
  set muted(n) {
    ne(x(this, Ot), n, !0)
  }
  get language() {
    return Q(x(this, Rt))
  }
  set language(n) {
    ne(x(this, Rt), n, !0)
  }
  get map() {
    return Q(x(this, It))
  }
  set map(n) {
    ne(x(this, It), n)
  }
  get automatedClicks() {
    return Q(x(this, Dt))
  }
  set automatedClicks(n) {
    ne(x(this, Dt), n, !0)
  }
  get theme() {
    return Q(x(this, kt))
  }
  set theme(n) {
    ne(x(this, kt), n, !0), localStorage.setItem(Er, n), document.documentElement.setAttribute("data-theme", n)
  }
  get now() {
    return Q(x(this, Mt))
  }
  get captcha() {
    return Fs ? Q(x(this, Lt)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(n) {
    ne(x(this, Lt), n, !0)
  }
}
Nt = new WeakMap, Tt = new WeakMap, St = new WeakMap, Ot = new WeakMap, Rt = new WeakMap, It = new WeakMap, Dt = new WeakMap, kt = new WeakMap, Mt = new WeakMap, Lt = new WeakMap;
const la = new Bs;

function Hs() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(n => n.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Fs = Aa.toLowerCase() !== "false",
  Us = `
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
async function js() {
  try {
    const t = await fetch(`${Hn}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!t.ok) return null;
    const n = await t.json(),
      e = await Gs(n.prefix, n.difficulty);
    return e ? {
      ...n,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Gs(t, n) {
  return new Promise(e => {
    const r = new Blob([Us], {
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
const da = 3;
var Ct, Pt;
class Vs {
  constructor() {
    J(this, Ct, me(null));
    J(this, Pt, me(0))
  }
  get current() {
    return Q(x(this, Ct))
  }
  set current(n) {
    ne(x(this, Ct), n, !0)
  }
  get errorCount() {
    return Q(x(this, Pt))
  }
  set errorCount(n) {
    ne(x(this, Pt), n, !0)
  }
}
Ct = new WeakMap, Pt = new WeakMap;
const Te = new Vs;
async function Ar(t) {
  if (t === 1) return Ws();
  if (t === 2) {
    const n = await _a();
    return n ? Nr("turnstile", n) : !1
  }
  if (t === 3) {
    const n = await zs();
    return n ? Nr("hcaptcha", n) : !1
  }
  return t === 4 ? $s() : !1
}
async function Ws() {
  for (let t = 0; t < da; t++) try {
    const n = await js();
    if (!n) continue;
    return await ze.verifyChallenge({
      type: "pow",
      challengeId: n.challengeId,
      nonce: n.nonce
    }), !0
  } catch {}
  return !1
}
async function Nr(t, n) {
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

function _a() {
  return fa(2)
}

function zs() {
  return fa(3)
}

function fa(t) {
  const n = _t[t];
  if (n) return n;
  const e = new Promise(r => {
    Te.errorCount = 0, Te.current = {
      tier: t,
      resolve: a => {
        delete _t[t], r(a)
      }
    }
  });
  return _t[t] = e, e
}

function $s() {
  const t = _t[4];
  if (t) return t;
  const n = new Promise(e => {
    Te.errorCount = 0, Te.current = {
      tier: 4,
      resolve: r => {
        delete _t[4], e(r)
      }
    }
  });
  return _t[4] = n, n
}

function o2(t) {
  const n = Te.current;
  !n || n.tier === 4 || (n.resolve(t), Te.current = null)
}

function i2() {
  const t = Te.current;
  !t || t.tier === 4 || (Te.errorCount += 1, Te.errorCount >= da && (t.resolve(void 0), Te.current = null))
}

function s2() {
  const t = Te.current;
  !t || t.tier !== 4 || (t.resolve(!0), Te.current = null)
}

function c2() {
  const t = Te.current;
  t && (t.tier === 4 ? t.resolve(!1) : t.resolve(void 0), Te.current = null)
}
var _ = (t => (t[t.CONTINUE = 100] = "CONTINUE", t[t.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", t[t.PROCESSING = 102] = "PROCESSING", t[t.EARLY_HINTS = 103] = "EARLY_HINTS", t[t.OK = 200] = "OK", t[t.CREATED = 201] = "CREATED", t[t.ACCEPTED = 202] = "ACCEPTED", t[t.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", t[t.NO_CONTENT = 204] = "NO_CONTENT", t[t.RESET_CONTENT = 205] = "RESET_CONTENT", t[t.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", t[t.MULTI_STATUS = 207] = "MULTI_STATUS", t[t.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", t[t.IM_USED = 226] = "IM_USED", t[t.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", t[t.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", t[t.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", t[t.FOUND = 302] = "FOUND", t[t.SEE_OTHER = 303] = "SEE_OTHER", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.USE_PROXY = 305] = "USE_PROXY", t[t.SWITCH_PROXY = 306] = "SWITCH_PROXY", t[t.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", t[t.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", t[t.BAD_REQUEST = 400] = "BAD_REQUEST", t[t.UNAUTHORIZED = 401] = "UNAUTHORIZED", t[t.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", t[t.FORBIDDEN = 403] = "FORBIDDEN", t[t.NOT_FOUND = 404] = "NOT_FOUND", t[t.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", t[t.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", t[t.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", t[t.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", t[t.CONFLICT = 409] = "CONFLICT", t[t.GONE = 410] = "GONE", t[t.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", t[t.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", t[t.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", t[t.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", t[t.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", t[t.URI_TOO_LONG = 414] = "URI_TOO_LONG", t[t.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", t[t.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", t[t.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", t[t.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", t[t.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", t[t.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", t[t.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", t[t.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t[t.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", t[t.LOCKED = 423] = "LOCKED", t[t.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", t[t.TOO_EARLY = 425] = "TOO_EARLY", t[t.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", t[t.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", t[t.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", t[t.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", t[t.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", t[t.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", t[t.BAD_GATEWAY = 502] = "BAD_GATEWAY", t[t.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", t[t.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", t[t.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", t[t.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", t[t.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", t[t.LOOP_DETECTED = 508] = "LOOP_DETECTED", t[t.NOT_EXTENDED = 510] = "NOT_EXTENDED", t[t.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", t[t.AWS_ELB_000 = 0] = "AWS_ELB_000", t[t.THIS_IS_FINE = 218] = "THIS_IS_FINE", t[t.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", t[t.METHOD_FAILURE = 420] = "METHOD_FAILURE", t[t.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", t[t.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", t[t.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", t[t.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", t[t.NO_RESPONSE = 444] = "NO_RESPONSE", t[t.RETRY_WITH = 449] = "RETRY_WITH", t[t.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", t[t.REDIRECT_IIS = 451] = "REDIRECT_IIS", t[t.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", t[t.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", t[t.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", t[t.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", t[t.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", t[t.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", t[t.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", t[t.INVALID_TOKEN = 498] = "INVALID_TOKEN", t[t.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", t[t.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", t[t.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", t[t.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", t[t.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", t[t.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", t[t.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", t[t.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", t[t.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", t[t.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", t[t.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", t[t.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", t[t.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", t[t.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", t[t.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", t[t.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", t[t.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", t[t.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", t[t.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", t[t.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", t[t.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", t[t.REQUEST_DENIED = 999] = "REQUEST_DENIED", t))(_ || {});
const qs = () => "Your account has been suspended for breaking the rules",
  Ks = () => "Sua conta foi suspensa por quebrar as regras",
  Xs = () => "您的账号因违反规则已被暂停",
  Ys = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  Js = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Zs = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Qs = () => "Il tuo account è stato sospeso per aver infranto le regole",
  ec = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  tc = () => "Twoje konto zostało zawieszone za łamanie zasad",
  nc = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  rc = () => "Ваш обліковий запис було призупинено за порушення правил",
  ac = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  oc = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? qs() : e === "pt" ? Ks() : e === "ch" ? Xs() : e === "de" ? Ys() : e === "es" ? Js() : e === "fr" ? Zs() : e === "it" ? Qs() : e === "jp" ? ec() : e === "pl" ? tc() : e === "ru" ? nc() : e === "uk" ? rc() : ac()
  },
  ic = () => "Alliance name already taken",
  sc = () => "Já possui uma aliança com esse nome",
  cc = () => "该联盟名称已被占用",
  uc = () => "Der Allianzname ist bereits vergeben",
  lc = () => "Ese nombre de alianza ya está en uso",
  dc = () => "Ce nom d’alliance est déjà pris",
  _c = () => "Esiste già un'alleanza con questo nome",
  fc = () => "このアライアンス名は既に使用されています。",
  mc = () => "Nazwa sojuszu jest już zajęta",
  pc = () => "Такое название альянса уже используется",
  hc = () => "Назва альянсу вже зайнята",
  gc = () => "Tên liên minh đã được sử dụng",
  yc = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? ic() : e === "pt" ? sc() : e === "ch" ? cc() : e === "de" ? uc() : e === "es" ? lc() : e === "fr" ? dc() : e === "it" ? _c() : e === "jp" ? fc() : e === "pl" ? mc() : e === "ru" ? pc() : e === "uk" ? hc() : gc()
  },
  wc = () => "Alliance name exceeded the maximum number of characters",
  bc = () => "O nome da aliança excedeu o número máximo de caracteres",
  vc = () => "联盟名称超过最大字符数限制",
  Ec = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Ac = () => "El nombre de la alianza superó el número máximo de caracteres",
  Nc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Tc = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Sc = () => "アライアンス名が最大文字数を超えています。",
  Oc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Rc = () => "Название альянса превышает максимальную длину",
  Ic = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Dc = () => "Tên liên minh vượt quá số ký tự cho phép",
  kc = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? wc() : e === "pt" ? bc() : e === "ch" ? vc() : e === "de" ? Ec() : e === "es" ? Ac() : e === "fr" ? Nc() : e === "it" ? Tc() : e === "jp" ? Sc() : e === "pl" ? Oc() : e === "ru" ? Rc() : e === "uk" ? Ic() : Dc()
  },
  Mc = () => "Alliance with empty name",
  Lc = () => "Aliança com nome vazio",
  Cc = () => "名称为空的联盟",
  Pc = () => "Allianz mit leerem Namen",
  xc = () => "Alianza con nombre vacío",
  Bc = () => "Alliance avec nom vide",
  Hc = () => "Alleanza con nome vuoto",
  Fc = () => "名前が空のアライアンスです。",
  Uc = () => "Sojusz z pustą nazwą",
  jc = () => "Альянс с пустым названием",
  Gc = () => "Альянс із порожньою назвою",
  Vc = () => "Liên minh không có tên",
  Wc = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Mc() : e === "pt" ? Lc() : e === "ch" ? Cc() : e === "de" ? Pc() : e === "es" ? xc() : e === "fr" ? Bc() : e === "it" ? Hc() : e === "jp" ? Fc() : e === "pl" ? Uc() : e === "ru" ? jc() : e === "uk" ? Gc() : Vc()
  },
  zc = () => "Botting",
  $c = () => "Uso de bots",
  qc = () => "脚本",
  Kc = () => "Bot-Nutzung",
  Xc = () => "Botting",
  Yc = () => "Bots",
  Jc = () => "Uso di bot",
  Zc = () => "ボット使用",
  Qc = () => "Botting",
  eu = () => "Боттинг",
  tu = () => "Боти",
  nu = () => "Botting",
  ru = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? zc() : e === "pt" ? $c() : e === "ch" ? qc() : e === "de" ? Kc() : e === "es" ? Xc() : e === "fr" ? Yc() : e === "it" ? Jc() : e === "jp" ? Zc() : e === "pl" ? Qc() : e === "ru" ? eu() : e === "uk" ? tu() : nu()
  },
  au = () => "Use of software to completely automate painting",
  ou = () => "Uso de software para pintar de forma completamente automatizada ",
  iu = () => "使用软件完全自动化绘制",
  su = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  cu = () => "Uso de software para automatizar completamente la pintura",
  uu = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  lu = () => "Uso di software per dipingere in modo completamente automatizzato",
  du = () => "ペイントを完全に自動化するソフトウェアの使用",
  _u = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  fu = () => "Использование программ для полной автоматизации рисования",
  mu = () => "Використання програм, які повністю автоматизують малювання",
  pu = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  hu = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? au() : e === "pt" ? ou() : e === "ch" ? iu() : e === "de" ? su() : e === "es" ? cu() : e === "fr" ? uu() : e === "it" ? lu() : e === "jp" ? du() : e === "pl" ? _u() : e === "ru" ? fu() : e === "uk" ? mu() : pu()
  },
  gu = () => "Breaking the rules",
  yu = () => "Quebrar as regras",
  wu = () => "违反规则",
  bu = () => "Regeln brechen",
  vu = () => "Romper las reglas",
  Eu = () => "Violation des règles",
  Au = () => "Violazione delle regole",
  Nu = () => "ルール違反",
  Tu = () => "Łamanie zasad",
  Su = () => "Нарушение правил",
  Ou = () => "Порушення правил",
  Ru = () => "Vi phạm luật",
  Iu = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? gu() : e === "pt" ? yu() : e === "ch" ? wu() : e === "de" ? bu() : e === "es" ? vu() : e === "fr" ? Eu() : e === "it" ? Au() : e === "jp" ? Nu() : e === "pl" ? Tu() : e === "ru" ? Su() : e === "uk" ? Ou() : Ru()
  },
  Du = () => "You have broken one of Wplace's rules",
  ku = () => "Você quebrou uma das regras do Wplace",
  Mu = () => "你违反了 Wplace 的一项规则",
  Lu = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Cu = () => "Has infringido una de las reglas de Wplace",
  Pu = () => "Vous avez enfreint l’une des règles de Wplace",
  xu = () => "Hai infranto una delle regole di Wplace",
  Bu = () => "Wplaceのルールのいずれかに違反しました。",
  Hu = () => "Złamałeś jedną z zasad Wplace",
  Fu = () => "Вы нарушили одно из правил Wplace",
  Uu = () => "Ви порушили одне з правил Wplace",
  ju = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Gu = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Du() : e === "pt" ? ku() : e === "ch" ? Mu() : e === "de" ? Lu() : e === "es" ? Cu() : e === "fr" ? Pu() : e === "it" ? xu() : e === "jp" ? Bu() : e === "pl" ? Hu() : e === "ru" ? Fu() : e === "uk" ? Uu() : ju()
  },
  Vu = () => "You cannot paint over event pixels",
  Wu = () => "Você não pode pintar sobre pixels de eventos",
  zu = () => "你不能覆盖活动像素",
  $u = () => "Du kannst nicht über Event-Pixel malen",
  qu = () => "No puedes pintar sobre píxeles de evento",
  Ku = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Xu = () => "Non puoi dipingere sopra i pixel dell'evento",
  Yu = () => "イベント用のピクセルの上には塗れません。",
  Ju = () => "Nie możesz malować po pikselach wydarzenia",
  Zu = () => "Вы не можете рисовать по пикселям события",
  Qu = () => "Ви не можете малювати поверх пікселів події",
  el = () => "Bạn không thể tô lên pixel sự kiện",
  Tr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Vu() : e === "pt" ? Wu() : e === "ch" ? zu() : e === "de" ? $u() : e === "es" ? qu() : e === "fr" ? Ku() : e === "it" ? Xu() : e === "jp" ? Yu() : e === "pl" ? Ju() : e === "ru" ? Zu() : e === "uk" ? Qu() : el()
  },
  tl = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  nl = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  rl = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  al = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  ol = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  il = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  sl = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  cl = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  ul = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  ll = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  dl = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  _l = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  fl = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? tl() : e === "pt" ? nl() : e === "ch" ? rl() : e === "de" ? al() : e === "es" ? ol() : e === "fr" ? il() : e === "it" ? sl() : e === "jp" ? cl() : e === "pl" ? ul() : e === "ru" ? ll() : e === "uk" ? dl() : _l()
  },
  ml = () => "Challenge verification not completed",
  pl = () => "Verificação do desafio não concluída",
  hl = () => "挑战验证未完成",
  gl = () => "Herausforderungsverifizierung nicht abgeschlossen",
  yl = () => "Verificación del desafío no completada",
  wl = () => "Vérification du défi non terminée",
  bl = () => "Verifica della sfida non completata",
  vl = () => "チャレンジ検証が完了していません",
  El = () => "Weryfikacja wyzwania niezakończona",
  Al = () => "Верификация вызова не завершена",
  Nl = () => "Перевірку виклику не завершено",
  Tl = () => "Xác minh thử thách chưa hoàn thành",
  Tn = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? ml() : e === "pt" ? pl() : e === "ch" ? hl() : e === "de" ? gl() : e === "es" ? yl() : e === "fr" ? wl() : e === "it" ? bl() : e === "jp" ? vl() : e === "pl" ? El() : e === "ru" ? Al() : e === "uk" ? Nl() : Tl()
  },
  Sl = () => "Couldn't complete the purchase. This item does not exist.",
  Ol = () => "Não foi possível concluir a compra. Este item não existe.",
  Rl = () => "无法完成购买。该物品不存在。",
  Il = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Dl = () => "No se pudo completar la compra. Este ítem no existe.",
  kl = () => "Achat impossible. Cet objet n’existe pas.",
  Ml = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Ll = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Cl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Pl = () => "Не удалось завершить покупку. Этот предмет не существует.",
  xl = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Bl = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Sr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Sl() : e === "pt" ? Ol() : e === "ch" ? Rl() : e === "de" ? Il() : e === "es" ? Dl() : e === "fr" ? kl() : e === "it" ? Ml() : e === "jp" ? Ll() : e === "pl" ? Cl() : e === "ru" ? Pl() : e === "uk" ? xl() : Bl()
  },
  Hl = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  Fl = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  Ul = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  jl = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Gl = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Vl = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Wl = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  zl = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  $l = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  ql = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Kl = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Xl = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Yl = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Hl() : e === "pt" ? Fl() : e === "ch" ? Ul() : e === "de" ? jl() : e === "es" ? Gl() : e === "fr" ? Vl() : e === "it" ? Wl() : e === "jp" ? zl() : e === "pl" ? $l() : e === "ru" ? ql() : e === "uk" ? Kl() : Xl()
  },
  Jl = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Zl = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Ql = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  ed = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  td = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  nd = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  rd = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  ad = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  od = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  id = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  sd = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  cd = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Or = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Jl() : e === "pt" ? Zl() : e === "ch" ? Ql() : e === "de" ? ed() : e === "es" ? td() : e === "fr" ? nd() : e === "it" ? rd() : e === "jp" ? ad() : e === "pl" ? od() : e === "ru" ? id() : e === "uk" ? sd() : cd()
  },
  ud = () => "Doxxing",
  ld = () => "Doxxing",
  dd = () => "人肉搜索",
  _d = () => "Doxxing",
  fd = () => "Doxxing",
  md = () => "Doxxing",
  pd = () => "Doxxing",
  hd = () => "ドックス（Doxxing）",
  gd = () => "Doxxing",
  yd = () => "Докcинг",
  wd = () => "Докcинг",
  bd = () => "Doxxing",
  vd = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? ud() : e === "pt" ? ld() : e === "ch" ? dd() : e === "de" ? _d() : e === "es" ? fd() : e === "fr" ? md() : e === "it" ? pd() : e === "jp" ? hd() : e === "pl" ? gd() : e === "ru" ? yd() : e === "uk" ? wd() : bd()
  },
  Ed = () => "Released other's personal information without their consent",
  Ad = () => "Vazar informações pessoais de terceiros sem consentimento",
  Nd = () => "在未获同意的情况下公开他人个人信息",
  Td = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Sd = () => "Divulgó información personal de otra persona sin su consentimiento",
  Od = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Rd = () => "Diffusione di informazioni personali di terzi senza consenso",
  Id = () => "他人の個人情報を同意なく公開した。",
  Dd = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  kd = () => "Публикация личной информации других людей без их согласия",
  Md = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Ld = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Cd = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Ed() : e === "pt" ? Ad() : e === "ch" ? Nd() : e === "de" ? Td() : e === "es" ? Sd() : e === "fr" ? Od() : e === "it" ? Rd() : e === "jp" ? Id() : e === "pl" ? Dd() : e === "ru" ? kd() : e === "uk" ? Md() : Ld()
  },
  Pd = () => "This email is already in use.",
  xd = () => "Este e-mail já está em uso.",
  Bd = () => "This email is already in use.",
  Hd = () => "This email is already in use.",
  Fd = () => "Este correo electrónico ya está en uso.",
  Ud = () => "This email is already in use.",
  jd = () => "Questa email è già in uso.",
  Gd = () => "This email is already in use.",
  Vd = () => "This email is already in use.",
  Wd = () => "This email is already in use.",
  zd = () => "This email is already in use.",
  $d = () => "This email is already in use.",
  qd = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Pd() : e === "pt" ? xd() : e === "ch" ? Bd() : e === "de" ? Hd() : e === "es" ? Fd() : e === "fr" ? Ud() : e === "it" ? jd() : e === "jp" ? Gd() : e === "pl" ? Vd() : e === "ru" ? Wd() : e === "uk" ? zd() : $d()
  },
  Kd = t => `This email is already in use by user #${t.userId}.`,
  Xd = t => `Este e-mail já está em uso pelo usuário #${t.userId}.`,
  Yd = t => `This email is already in use by user #${t.userId}.`,
  Jd = t => `This email is already in use by user #${t.userId}.`,
  Zd = t => `Este correo electrónico ya está en uso por el usuario #${t.userId}.`,
  Qd = t => `This email is already in use by user #${t.userId}.`,
  e_ = t => `Questa email è già in uso dall'utente #${t.userId}.`,
  t_ = t => `This email is already in use by user #${t.userId}.`,
  n_ = t => `This email is already in use by user #${t.userId}.`,
  r_ = t => `This email is already in use by user #${t.userId}.`,
  a_ = t => `This email is already in use by user #${t.userId}.`,
  o_ = t => `This email is already in use by user #${t.userId}.`,
  i_ = (t, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Kd(t) : e === "pt" ? Xd(t) : e === "ch" ? Yd(t) : e === "de" ? Jd(t) : e === "es" ? Zd(t) : e === "fr" ? Qd(t) : e === "it" ? e_(t) : e === "jp" ? t_(t) : e === "pl" ? n_(t) : e === "ru" ? r_(t) : e === "uk" ? a_(t) : o_(t)
  },
  s_ = () => "Enter a valid email address.",
  c_ = () => "Informe um endereço de e-mail válido.",
  u_ = () => "Enter a valid email address.",
  l_ = () => "Enter a valid email address.",
  d_ = () => "Introduce una dirección de correo electrónico válida.",
  __ = () => "Enter a valid email address.",
  f_ = () => "Inserisci un indirizzo email valido.",
  m_ = () => "Enter a valid email address.",
  p_ = () => "Enter a valid email address.",
  h_ = () => "Enter a valid email address.",
  g_ = () => "Enter a valid email address.",
  y_ = () => "Enter a valid email address.",
  w_ = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? s_() : e === "pt" ? c_() : e === "ch" ? u_() : e === "de" ? l_() : e === "es" ? d_() : e === "fr" ? __() : e === "it" ? f_() : e === "jp" ? m_() : e === "pl" ? p_() : e === "ru" ? h_() : e === "uk" ? g_() : y_()
  },
  b_ = t => `Error while painting: ${t.err}`,
  v_ = t => `Erro enquanto pinta: ${t.err}`,
  E_ = t => `绘制时出错：${t.err}`,
  A_ = t => `Fehler beim Malen: ${t.err}`,
  N_ = t => `Error al pintar: ${t.err}`,
  T_ = t => `Erreur lors de la peinture : ${t.err}`,
  S_ = t => `Errore durante la pittura: ${t.err}`,
  O_ = t => `ペイント中にエラーが発生しました: ${t.err}`,
  R_ = t => `Błąd podczas malowania: ${t.err}`,
  I_ = t => `Ошибка при рисовании: ${t.err}`,
  D_ = t => `Помилка під час малювання: ${t.err}`,
  k_ = t => `Lỗi khi tô: ${t.err}`,
  M_ = (t, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? b_(t) : e === "pt" ? v_(t) : e === "ch" ? E_(t) : e === "de" ? A_(t) : e === "es" ? N_(t) : e === "fr" ? T_(t) : e === "it" ? S_(t) : e === "jp" ? O_(t) : e === "pl" ? R_(t) : e === "ru" ? I_(t) : e === "uk" ? D_(t) : k_(t)
  },
  L_ = () => "Exceeded maximum number of characters",
  C_ = () => "Excedeu o número máximo de caracteres permitidos",
  P_ = () => "超出最大字符数",
  x_ = () => "Maximale Zeichenanzahl überschritten",
  B_ = () => "Se excedió el número máximo de caracteres",
  H_ = () => "Nombre maximal de caractères dépassé",
  F_ = () => "Numero massimo di caratteri superato",
  U_ = () => "最大文字数を超過しました",
  j_ = () => "Przekroczono maksymalną liczbę znaków",
  G_ = () => "Превышено максимальное количество символов",
  V_ = () => "Перевищено максимальну кількість символів",
  W_ = () => "Đã vượt quá số ký tự tối đa",
  z_ = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? L_() : e === "pt" ? C_() : e === "ch" ? P_() : e === "de" ? x_() : e === "es" ? B_() : e === "fr" ? H_() : e === "it" ? F_() : e === "jp" ? U_() : e === "pl" ? j_() : e === "ru" ? G_() : e === "uk" ? V_() : W_()
  },
  $_ = () => "Verification code expired. Please request a new one.",
  q_ = () => "Código de verificação expirado. Por favor, solicite um novo.",
  K_ = () => "验证码已过期，请重新获取。",
  X_ = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  Y_ = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  J_ = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  Z_ = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  Q_ = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  ef = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  tf = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  nf = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  rf = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  af = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? $_() : e === "pt" ? q_() : e === "ch" ? K_() : e === "de" ? X_() : e === "es" ? Y_() : e === "fr" ? J_() : e === "it" ? Z_() : e === "jp" ? Q_() : e === "pl" ? ef() : e === "ru" ? tf() : e === "uk" ? nf() : rf()
  },
  of = () => "Griefing",
  sf = () => "Griefing",
  cf = () => "破坏行为",
  uf = () => "Griefing",
  lf = () => "Griefing",
  df = () => "Griefing",
  _f = () => "Griefing",
  ff = () => "グリーフィング",
  mf = () => "Griefing",
  pf = () => "Гриферство",
  hf = () => "Гріфінг",
  gf = () => "Griefing",
  yf = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? of() : e === "pt" ? sf() : e === "ch" ? cf() : e === "de" ? uf() : e === "es" ? lf() : e === "fr" ? df() : e === "it" ? _f() : e === "jp" ? ff() : e === "pl" ? mf() : e === "ru" ? pf() : e === "uk" ? hf() : gf()
  },
  wf = () => "Messed up with other's artworks",
  bf = () => "Estragou os desenhos dos outros",
  vf = () => "破坏了他人的作品",
  Ef = () => "Kunstwerke anderer beschädigt",
  Af = () => "Arruinó las obras de arte de otros",
  Nf = () => "A abîmé les œuvres des autres",
  Tf = () => "Ha rovinato i disegni degli altri",
  Sf = () => "他人の作品を荒らした",
  Of = () => "Zniszczył prace innych",
  Rf = () => "Испортил чужие рисунки",
  If = () => "Зіпсував роботи інших",
  Df = () => "Phá hỏng tranh của người khác",
  kf = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? wf() : e === "pt" ? bf() : e === "ch" ? vf() : e === "de" ? Ef() : e === "es" ? Af() : e === "fr" ? Nf() : e === "it" ? Tf() : e === "jp" ? Sf() : e === "pl" ? Of() : e === "ru" ? Rf() : e === "uk" ? If() : Df()
  },
  Mf = () => "Hate speech",
  Lf = () => "Discurso de Ódio",
  Cf = () => "仇恨言论",
  Pf = () => "Hassrede",
  xf = () => "Discurso de odio",
  Bf = () => "Discours haineux",
  Hf = () => "Discorso d'odio",
  Ff = () => "ヘイトスピーチ",
  Uf = () => "Mowa nienawiści",
  jf = () => "Речь ненависти",
  Gf = () => "Мова ворожнечі",
  Vf = () => "Ngôn từ thù hằn",
  Wf = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Mf() : e === "pt" ? Lf() : e === "ch" ? Cf() : e === "de" ? Pf() : e === "es" ? xf() : e === "fr" ? Bf() : e === "it" ? Hf() : e === "jp" ? Ff() : e === "pl" ? Uf() : e === "ru" ? jf() : e === "uk" ? Gf() : Vf()
  },
  zf = () => "Racism, homophobia, hate groups, ...",
  $f = () => "Racismo, homofobia, grupos de ódio, ...",
  qf = () => "种族主义、恐同、仇恨团体等",
  Kf = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Xf = () => "Racismo, homofobia, grupos de odio, ...",
  Yf = () => "Racisme, homophobie, groupes haineux, ...",
  Jf = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Zf = () => "人種差別、同性愛差別、ヘイト団体など。",
  Qf = () => "Rasizm, homofobia, grupy nienawiści, ...",
  em = () => "Расизм, гомофобия, группы ненависти и т.п.",
  tm = () => "Расизм, гомофобія, групи ненависті, ...",
  nm = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  rm = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? zf() : e === "pt" ? $f() : e === "ch" ? qf() : e === "de" ? Kf() : e === "es" ? Xf() : e === "fr" ? Yf() : e === "it" ? Jf() : e === "jp" ? Zf() : e === "pl" ? Qf() : e === "ru" ? em() : e === "uk" ? tm() : nm()
  },
  am = () => "Inappropriate content",
  om = () => "Conteúdo inapropriado",
  im = () => "不当内容",
  sm = () => "Unangemessene Inhalte",
  cm = () => "Contenido inapropiado",
  um = () => "Contenu inapproprié",
  lm = () => "Contenuto inappropriato",
  dm = () => "不適切なコンテンツ",
  _m = () => "Nieodpowiednie treści",
  fm = () => "Неприемлемый контент",
  mm = () => "Неприйнятний вміст",
  pm = () => "Nội dung không phù hợp",
  hm = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? am() : e === "pt" ? om() : e === "ch" ? im() : e === "de" ? sm() : e === "es" ? cm() : e === "fr" ? um() : e === "it" ? lm() : e === "jp" ? dm() : e === "pl" ? _m() : e === "ru" ? fm() : e === "uk" ? mm() : pm()
  },
  gm = () => "Explicit, hateful, or illegal content",
  ym = () => "Conteúdo explícito, de ódio ou ilegal",
  wm = () => "露骨、仇恨或非法内容",
  bm = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  vm = () => "Contenido explícito, de odio o ilegal",
  Em = () => "Contenu explicite, haineux ou illégal",
  Am = () => "Contenuto esplicito, d'odio o illegale",
  Nm = () => "露骨、差別的、または違法なコンテンツ",
  Tm = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  Sm = () => "Откровенный, разжигающий ненависть или незаконный контент",
  Om = () => "Відвертий, ворожий або незаконний вміст",
  Rm = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  Im = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? gm() : e === "pt" ? ym() : e === "ch" ? wm() : e === "de" ? bm() : e === "es" ? vm() : e === "fr" ? Em() : e === "it" ? Am() : e === "jp" ? Nm() : e === "pl" ? Tm() : e === "ru" ? Sm() : e === "uk" ? Om() : Rm()
  },
  Dm = () => "Invalid captcha. Please try again.",
  km = () => "Captcha inválido. Por favor, tente novamente.",
  Mm = () => "验证码无效，请重试。",
  Lm = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  Cm = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Pm = () => "Captcha invalide. Veuillez réessayer.",
  xm = () => "Captcha non valido. Riprova.",
  Bm = () => "キャプチャが無効です。もう一度お試しください。",
  Hm = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Fm = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Um = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  jm = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Gm = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Dm() : e === "pt" ? km() : e === "ch" ? Mm() : e === "de" ? Lm() : e === "es" ? Cm() : e === "fr" ? Pm() : e === "it" ? xm() : e === "jp" ? Bm() : e === "pl" ? Hm() : e === "ru" ? Fm() : e === "uk" ? Um() : jm()
  },
  Vm = () => "Invalid challenge response",
  Wm = () => "Resposta de desafio inválida",
  zm = () => "质询响应无效",
  $m = () => "Ungültige Challenge-Antwort",
  qm = () => "Respuesta de desafío inválida",
  Km = () => "Réponse au défi invalide",
  Xm = () => "Risposta alla sfida non valida",
  Ym = () => "無効なチャレンジ応答",
  Jm = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Zm = () => "Неверный ответ на вызов",
  Qm = () => "Недійсна відповідь на виклик",
  ep = () => "Phản hồi thử thách không hợp lệ",
  tp = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Vm() : e === "pt" ? Wm() : e === "ch" ? zm() : e === "de" ? $m() : e === "es" ? qm() : e === "fr" ? Km() : e === "it" ? Xm() : e === "jp" ? Ym() : e === "pl" ? Jm() : e === "ru" ? Zm() : e === "uk" ? Qm() : ep()
  },
  np = () => "The verification code is incorrect. Please check it and try again.",
  rp = () => "Código inválido",
  ap = () => "验证码不正确。请检查后重试。",
  op = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  ip = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  sp = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  cp = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  up = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  lp = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  dp = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  _p = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  fp = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  mp = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? np() : e === "pt" ? rp() : e === "ch" ? ap() : e === "de" ? op() : e === "es" ? ip() : e === "fr" ? sp() : e === "it" ? cp() : e === "jp" ? up() : e === "pl" ? lp() : e === "ru" ? dp() : e === "uk" ? _p() : fp()
  },
  pp = () => "Invalid discord.",
  hp = () => "Discord inválido.",
  gp = () => "无效的 Discord。",
  yp = () => "Ungültiger Discord.",
  wp = () => "Discord inválido.",
  bp = () => "Discord invalide.",
  vp = () => "Discord non valido.",
  Ep = () => "無効なDiscordアカウントです。",
  Ap = () => "Nieprawidłowy Discord.",
  Np = () => "Неверный Discord.",
  Tp = () => "Некоректний Discord.",
  Sp = () => "Discord không hợp lệ.",
  Op = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? pp() : e === "pt" ? hp() : e === "ch" ? gp() : e === "de" ? yp() : e === "es" ? wp() : e === "fr" ? bp() : e === "it" ? vp() : e === "jp" ? Ep() : e === "pl" ? Ap() : e === "ru" ? Np() : e === "uk" ? Tp() : Sp()
  },
  Rp = () => "The name contains disallowed characters or words. Please choose a different name.",
  Ip = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Dp = () => "名称包含禁止的字符或词语，请选择其他名称。",
  kp = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Mp = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Lp = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Cp = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Pp = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  xp = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Bp = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Hp = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Fp = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Rr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Rp() : e === "pt" ? Ip() : e === "ch" ? Dp() : e === "de" ? kp() : e === "es" ? Mp() : e === "fr" ? Lp() : e === "it" ? Cp() : e === "jp" ? Pp() : e === "pl" ? xp() : e === "ru" ? Bp() : e === "uk" ? Hp() : Fp()
  },
  Up = () => "Please enter a valid phone number with country code.",
  jp = () => "Insira um número de telefone válido com código do país.",
  Gp = () => "请输入带国家代码的有效电话号码。",
  Vp = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Wp = () => "Introduce un número de teléfono válido con código de país.",
  zp = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  $p = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  qp = () => "国番号付きの有効な電話番号を入力してください。",
  Kp = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Xp = () => "Введите действительный номер телефона с кодом страны.",
  Yp = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  Jp = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Zp = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Up() : e === "pt" ? jp() : e === "ch" ? Gp() : e === "de" ? Vp() : e === "es" ? Wp() : e === "fr" ? zp() : e === "it" ? $p() : e === "jp" ? qp() : e === "pl" ? Kp() : e === "ru" ? Xp() : e === "uk" ? Yp() : Jp()
  },
  Qp = () => "Phone number not supported. Please try another number.",
  eh = () => "Número de telefone não suportado. Por favor, tente outro número.",
  th = () => "不支持此电话号码。请尝试其他号码。",
  nh = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  rh = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  ah = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  oh = () => "Numero di telefono non supportato. Prova con un altro numero.",
  ih = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  sh = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  ch = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  uh = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  lh = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  dh = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Qp() : e === "pt" ? eh() : e === "ch" ? th() : e === "de" ? nh() : e === "es" ? rh() : e === "fr" ? ah() : e === "it" ? oh() : e === "jp" ? ih() : e === "pl" ? sh() : e === "ru" ? ch() : e === "uk" ? uh() : lh()
  },
  _h = () => "The new leader must be a member of the alliance",
  fh = () => "O novo líder deve ser um membro da aliança",
  mh = () => "新盟主必须是联盟成员",
  ph = () => "Der neue Anführer muss Mitglied der Allianz sein",
  hh = () => "El nuevo líder debe ser miembro de la alianza",
  gh = () => "Le nouveau chef doit être membre de l’alliance",
  yh = () => "Il nuovo leader deve essere un membro dell'alleanza",
  wh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  bh = () => "Nowy lider musi być członkiem sojuszu",
  vh = () => "Новый лидер должен быть участником альянса",
  Eh = () => "Новий лідер має бути учасником альянсу",
  Ah = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Nh = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? _h() : e === "pt" ? fh() : e === "ch" ? mh() : e === "de" ? ph() : e === "es" ? hh() : e === "fr" ? gh() : e === "it" ? yh() : e === "jp" ? wh() : e === "pl" ? bh() : e === "ru" ? vh() : e === "uk" ? Eh() : Ah()
  },
  Th = () => "Leaderboard is temporarily disabled",
  Sh = () => "O ranking está temporariamente desativado",
  Oh = () => "排行榜已暂时停用",
  Rh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Ih = () => "La clasificación está deshabilitada temporalmente",
  Dh = () => "Le classement est temporairement désactivé",
  kh = () => "La classifica è temporaneamente disattivata",
  Mh = () => "ランキングは一時的に無効になっています。",
  Lh = () => "Ranking jest tymczasowo wyłączony",
  Ch = () => "Таблица лидеров временно отключена",
  Ph = () => "Таблиця лідерів тимчасово вимкнена",
  xh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  Xe = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Th() : e === "pt" ? Sh() : e === "ch" ? Oh() : e === "de" ? Rh() : e === "es" ? Ih() : e === "fr" ? Dh() : e === "it" ? kh() : e === "jp" ? Mh() : e === "pl" ? Lh() : e === "ru" ? Ch() : e === "uk" ? Ph() : xh()
  },
  Bh = () => "Location name is too big (max. 128 characters)",
  Hh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Fh = () => "位置名称过长（最大 128 个字符）",
  Uh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  jh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Gh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Vh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Wh = () => "場所の名前が長すぎます（最大128文字）。",
  zh = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  $h = () => "Название локации слишком длинное (макс. 128 символов)",
  qh = () => "Назва локації надто довга (макс. 128 символів)",
  Kh = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Xh = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Bh() : e === "pt" ? Hh() : e === "ch" ? Fh() : e === "de" ? Uh() : e === "es" ? jh() : e === "fr" ? Gh() : e === "it" ? Vh() : e === "jp" ? Wh() : e === "pl" ? zh() : e === "ru" ? $h() : e === "uk" ? qh() : Kh()
  },
  Yh = () => "Multi-accounting",
  Jh = () => "Múltiplas contas",
  Zh = () => "多账号",
  Qh = () => "Multi-Accounting",
  eg = () => "Multi-cuentas",
  tg = () => "Multi-comptes",
  ng = () => "Multi-account",
  rg = () => "複数アカウント使用",
  ag = () => "Multi-konta",
  og = () => "Мультиаккаунт",
  ig = () => "Мультиакаунтинг",
  sg = () => "Nhiều tài khoản",
  cg = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Yh() : e === "pt" ? Jh() : e === "ch" ? Zh() : e === "de" ? Qh() : e === "es" ? eg() : e === "fr" ? tg() : e === "it" ? ng() : e === "jp" ? rg() : e === "pl" ? ag() : e === "ru" ? og() : e === "uk" ? ig() : sg()
  },
  ug = () => "Use more than one account to paint pixels",
  lg = () => "Usar mais de uma conta para pintar",
  dg = () => "使用多个账号绘制像素",
  _g = () => "Mehr als ein Konto zum Malen verwenden",
  fg = () => "Uso de más de una cuenta para pintar píxeles",
  mg = () => "Utiliser plus d’un compte pour peindre",
  pg = () => "Usare più di un account per dipingere",
  hg = () => "複数のアカウントを使ってピクセルを塗った。",
  gg = () => "Używanie więcej niż jednego konta do malowania pikseli",
  yg = () => "Использование более одного аккаунта для рисования",
  wg = () => "Використання більше ніж одного акаунта для малювання",
  bg = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  vg = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? ug() : e === "pt" ? lg() : e === "ch" ? dg() : e === "de" ? _g() : e === "es" ? fg() : e === "fr" ? mg() : e === "it" ? pg() : e === "jp" ? hg() : e === "pl" ? gg() : e === "ru" ? yg() : e === "uk" ? wg() : bg()
  },
  Eg = t => `You can change your name again in ${t.days} days`,
  Ag = t => `Você pode alterar seu nome novamente em ${t.days} dias.`,
  Ng = t => `你可以在 ${t.days} 天后再次修改名称`,
  Tg = t => `Du kannst deinen Namen in ${t.days} Tagen erneut ändern`,
  Sg = t => `Podrás cambiar tu nombre de nuevo en ${t.days} días`,
  Og = t => `Vous pourrez changer votre nom à nouveau dans ${t.days} jours`,
  Rg = t => `Potrai cambiare di nuovo il tuo nome tra ${t.days} giorni.`,
  Ig = t => `${t.days}日後に再び名前を変更できます。`,
  Dg = t => `Następną zmianę nazwy możesz wykonać za ${t.days} dni`,
  kg = t => `Вы сможете изменить имя снова через ${t.days} дн.`,
  Mg = t => `Ви зможете змінити імʼя знову через ${t.days} днів`,
  Lg = t => `Bạn có thể đổi tên lại sau ${t.days} ngày`,
  Cg = (t, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Eg(t) : e === "pt" ? Ag(t) : e === "ch" ? Ng(t) : e === "de" ? Tg(t) : e === "es" ? Sg(t) : e === "fr" ? Og(t) : e === "it" ? Rg(t) : e === "jp" ? Ig(t) : e === "pl" ? Dg(t) : e === "ru" ? kg(t) : e === "uk" ? Mg(t) : Lg(t)
  },
  Pg = () => "No internet access or the servers are offline. Try again later.",
  xg = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Bg = () => "没有网络连接或服务器已离线。请稍后重试。",
  Hg = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Fg = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Ug = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  jg = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Gg = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Vg = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Wg = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  zg = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  $g = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  qg = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Pg() : e === "pt" ? xg() : e === "ch" ? Bg() : e === "de" ? Hg() : e === "es" ? Fg() : e === "fr" ? Ug() : e === "it" ? jg() : e === "jp" ? Gg() : e === "pl" ? Vg() : e === "ru" ? Wg() : e === "uk" ? zg() : $g()
  },
  Kg = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Xg = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  Yg = () => "您无权验证电话号码。请尝试刷新页面。",
  Jg = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Zg = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  Qg = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  e1 = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  t1 = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  n1 = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  r1 = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  a1 = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  o1 = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  i1 = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Kg() : e === "pt" ? Xg() : e === "ch" ? Yg() : e === "de" ? Jg() : e === "es" ? Zg() : e === "fr" ? Qg() : e === "it" ? e1() : e === "jp" ? t1() : e === "pl" ? n1() : e === "ru" ? r1() : e === "uk" ? a1() : o1()
  },
  s1 = () => "Operation not allowed. Maybe you have too many favorite locations.",
  c1 = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  u1 = () => "操作不被允许。你的收藏位置可能过多。",
  l1 = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  d1 = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  _1 = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  f1 = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  m1 = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  p1 = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  h1 = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  g1 = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  y1 = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  w1 = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? s1() : e === "pt" ? c1() : e === "ch" ? u1() : e === "de" ? l1() : e === "es" ? d1() : e === "fr" ? _1() : e === "it" ? f1() : e === "jp" ? m1() : e === "pl" ? p1() : e === "ru" ? h1() : e === "uk" ? g1() : y1()
  },
  b1 = t => `Not enough charges: you have ${t.charges} but this overlay needs ${t.pixels}.`,
  v1 = t => `Cargas insuficientes: você tem ${t.charges}, mas esta sobreposição precisa de ${t.pixels}.`,
  E1 = t => `充能不足：你有 ${t.charges}，但此叠加层需要 ${t.pixels}。`,
  A1 = t => `Nicht genügend Ladungen: Du hast ${t.charges}, aber dieses Overlay benötigt ${t.pixels}.`,
  N1 = t => `Cargas insuficientes: tienes ${t.charges} pero esta superposición necesita ${t.pixels}.`,
  T1 = t => `Charges insuffisantes : vous avez ${t.charges} mais ce calque nécessite ${t.pixels}.`,
  S1 = t => `Cariche insufficienti: ne hai ${t.charges} ma questo overlay ne richiede ${t.pixels}.`,
  O1 = t => `チャージが足りません：現在 ${t.charges} ですが、このオーバーレイには ${t.pixels} 必要です。`,
  R1 = t => `Za mało ładunków: masz ${t.charges}, ale ta nakładka wymaga ${t.pixels}.`,
  I1 = t => `Недостаточно зарядов: у вас ${t.charges}, но для этого слоя нужно ${t.pixels}.`,
  D1 = t => `Недостатньо зарядів: у вас ${t.charges}, але для цього шару потрібно ${t.pixels}.`,
  k1 = t => `Không đủ lượt sơn: bạn có ${t.charges} nhưng lớp phủ này cần ${t.pixels}.`,
  M1 = (t, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? b1(t) : e === "pt" ? v1(t) : e === "ch" ? E1(t) : e === "de" ? A1(t) : e === "es" ? N1(t) : e === "fr" ? T1(t) : e === "it" ? S1(t) : e === "jp" ? O1(t) : e === "pl" ? R1(t) : e === "ru" ? I1(t) : e === "uk" ? D1(t) : k1(t)
  },
  L1 = () => "You are trying to paint with a color you do not own",
  C1 = () => "Você está tentando pintar com uma cor que não possui",
  P1 = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  x1 = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  B1 = () => "Estás intentando pintar con un color que no posees",
  H1 = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  F1 = () => "Stai cercando di dipingere con un colore che non possiedi",
  U1 = () => "所持していない色で塗ろうとしています。",
  j1 = () => "Próbujesz malować kolorem, którego nie posiadasz",
  G1 = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  V1 = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  W1 = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Ir = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? L1() : e === "pt" ? C1() : e === "ch" ? P1() : e === "de" ? x1() : e === "es" ? B1() : e === "fr" ? H1() : e === "it" ? F1() : e === "jp" ? U1() : e === "pl" ? j1() : e === "ru" ? G1() : e === "uk" ? V1() : W1()
  },
  z1 = () => "Phone already used",
  $1 = () => "Telefone já usado",
  q1 = () => "电话号码已被使用",
  K1 = () => "Telefonnummer bereits verwendet",
  X1 = () => "Teléfono ya utilizado",
  Y1 = () => "Téléphone déjà utilisé",
  J1 = () => "Telefono già utilizzato",
  Z1 = () => "この電話番号は既に使用されています。",
  Q1 = () => "Numer telefonu jest już używany",
  e0 = () => "Телефон уже используется",
  t0 = () => "Номер телефону вже використовується",
  n0 = () => "Số điện thoại đã được sử dụng",
  r0 = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? z1() : e === "pt" ? $1() : e === "ch" ? q1() : e === "de" ? K1() : e === "es" ? X1() : e === "fr" ? Y1() : e === "it" ? J1() : e === "jp" ? Z1() : e === "pl" ? Q1() : e === "ru" ? e0() : e === "uk" ? t0() : n0()
  },
  a0 = () => "This phone number's region is not supported",
  o0 = () => "A região deste número de telefone não é suportada",
  i0 = () => "此电话号码的地区不受支持",
  s0 = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  c0 = () => "La región de este número de teléfono no es compatible",
  u0 = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  l0 = () => "La regione di questo numero di telefono non è supportata",
  d0 = () => "この電話番号の地域はサポートされていません",
  _0 = () => "Region tego numeru telefonu nie jest obsługiwany",
  f0 = () => "Регион этого номера телефона не поддерживается",
  m0 = () => "Регіон цього номера телефону не підтримується",
  p0 = () => "Vùng của số điện thoại này không được hỗ trợ",
  h0 = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? a0() : e === "pt" ? o0() : e === "ch" ? i0() : e === "de" ? s0() : e === "es" ? c0() : e === "fr" ? u0() : e === "it" ? l0() : e === "jp" ? d0() : e === "pl" ? _0() : e === "ru" ? f0() : e === "uk" ? m0() : p0()
  },
  g0 = () => "Refresh your page to get the latest update",
  y0 = () => "Recarregue sua página para obter as últimas atualizações",
  w0 = () => "刷新页面以获取最新更新",
  b0 = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  v0 = () => "Actualiza la página para obtener la última versión",
  E0 = () => "Actualisez la page pour obtenir les dernières mises à jour",
  A0 = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  N0 = () => "最新の状態にするにはページを再読み込みしてください。",
  T0 = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  S0 = () => "Обновите страницу, чтобы получить последние изменения",
  O0 = () => "Оновіть сторінку, щоб отримати останні оновлення",
  R0 = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Dr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? g0() : e === "pt" ? y0() : e === "ch" ? w0() : e === "de" ? b0() : e === "es" ? v0() : e === "fr" ? E0() : e === "it" ? A0() : e === "jp" ? N0() : e === "pl" ? T0() : e === "ru" ? S0() : e === "uk" ? O0() : R0()
  },
  I0 = () => "The request timed out. Please try again.",
  D0 = () => "A solicitação expirou. Por favor, tente novamente.",
  k0 = () => "请求超时。请重试。",
  M0 = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  L0 = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  C0 = () => "La requête a expiré. Veuillez réessayer.",
  P0 = () => "La richiesta è scaduta. Riprova.",
  x0 = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  B0 = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  H0 = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  F0 = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  U0 = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  j0 = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? I0() : e === "pt" ? D0() : e === "ch" ? k0() : e === "de" ? M0() : e === "es" ? L0() : e === "fr" ? C0() : e === "it" ? P0() : e === "jp" ? x0() : e === "pl" ? B0() : e === "ru" ? H0() : e === "uk" ? F0() : U0()
  },
  G0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  V0 = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  W0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  z0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  q0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  K0 = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  X0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Y0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  J0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Z0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Q0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ey = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? G0() : e === "pt" ? V0() : e === "ch" ? W0() : e === "de" ? z0() : e === "es" ? $0() : e === "fr" ? q0() : e === "it" ? K0() : e === "jp" ? X0() : e === "pl" ? Y0() : e === "ru" ? J0() : e === "uk" ? Z0() : Q0()
  },
  ty = () => "The service is currently unavailable. Please try again later.",
  ny = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  ry = () => "服务当前不可用。请稍后再试。",
  ay = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  oy = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  iy = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  sy = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  cy = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  uy = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  ly = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  dy = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  _y = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  fy = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? ty() : e === "pt" ? ny() : e === "ch" ? ry() : e === "de" ? ay() : e === "es" ? oy() : e === "fr" ? iy() : e === "it" ? sy() : e === "jp" ? cy() : e === "pl" ? uy() : e === "ru" ? ly() : e === "uk" ? dy() : _y()
  },
  my = () => "Too many attempts. Please try again later",
  py = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  hy = () => "尝试次数过多，请稍后再试",
  gy = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  yy = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  wy = () => "Trop de tentatives. Veuillez réessayer plus tard",
  by = () => "Troppi tentativi. Riprova più tardi.",
  vy = () => "試行回数が多すぎます。後で再度お試しください。",
  Ey = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Ay = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Ny = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  Ty = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  kr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? my() : e === "pt" ? py() : e === "ch" ? hy() : e === "de" ? gy() : e === "es" ? yy() : e === "fr" ? wy() : e === "it" ? by() : e === "jp" ? vy() : e === "pl" ? Ey() : e === "ru" ? Ay() : e === "uk" ? Ny() : Ty()
  },
  Sy = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Oy = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Ry = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Iy = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Dy = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  ky = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  My = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Ly = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  Cy = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  Py = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  xy = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  By = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  Hy = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Sy() : e === "pt" ? Oy() : e === "ch" ? Ry() : e === "de" ? Iy() : e === "es" ? Dy() : e === "fr" ? ky() : e === "it" ? My() : e === "jp" ? Ly() : e === "pl" ? Cy() : e === "ru" ? Py() : e === "uk" ? xy() : By()
  },
  Fy = () => "The typed username does not match your current username.",
  Uy = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  jy = () => "输入的用户名与当前用户名不匹配。",
  Gy = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Vy = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Wy = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  zy = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  $y = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  qy = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Ky = () => "Введённое имя пользователя не совпадает с текущим.",
  Xy = () => "Введене імʼя користувача не збігається з поточним.",
  Yy = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Jy = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Fy() : e === "pt" ? Uy() : e === "ch" ? jy() : e === "de" ? Gy() : e === "es" ? Vy() : e === "fr" ? Wy() : e === "it" ? zy() : e === "jp" ? $y() : e === "pl" ? qy() : e === "ru" ? Ky() : e === "uk" ? Xy() : Yy()
  },
  Zy = () => "Unexpected server error. Try again later.",
  Qy = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  ew = () => "服务器出现意外错误。请稍后再试。",
  tw = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  nw = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  rw = () => "Erreur serveur inattendue. Réessayez plus tard.",
  aw = () => "Errore imprevisto del server. Riprova più tardi.",
  ow = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  iw = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  sw = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  cw = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  uw = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  p = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Zy() : e === "pt" ? Qy() : e === "ch" ? ew() : e === "de" ? tw() : e === "es" ? nw() : e === "fr" ? rw() : e === "it" ? aw() : e === "jp" ? ow() : e === "pl" ? iw() : e === "ru" ? sw() : e === "uk" ? cw() : uw()
  },
  lw = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  dw = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  _w = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  fw = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  mw = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  pw = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  hw = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  gw = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  yw = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  ww = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  bw = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  vw = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Ew = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? lw() : e === "pt" ? dw() : e === "ch" ? _w() : e === "de" ? fw() : e === "es" ? mw() : e === "fr" ? pw() : e === "it" ? hw() : e === "jp" ? gw() : e === "pl" ? yw() : e === "ru" ? ww() : e === "uk" ? bw() : vw()
  },
  Aw = () => "VPN or proxy detected. Please disable your VPN and try again.",
  Nw = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  Tw = () => "检测到VPN或代理。请关闭VPN后重试。",
  Sw = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  Ow = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  Rw = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  Iw = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  Dw = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  kw = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Mw = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  Lw = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  Cw = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  Pw = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Aw() : e === "pt" ? Nw() : e === "ch" ? Tw() : e === "de" ? Sw() : e === "es" ? Ow() : e === "fr" ? Rw() : e === "it" ? Iw() : e === "jp" ? Dw() : e === "pl" ? kw() : e === "ru" ? Mw() : e === "uk" ? Lw() : Cw()
  },
  xw = () => "Failed to load WebAssembly module. Try to use another browser.",
  Bw = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Hw = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  Fw = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Uw = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  jw = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Gw = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Vw = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Ww = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  zw = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  $w = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  qw = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Kw = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? xw() : e === "pt" ? Bw() : e === "ch" ? Hw() : e === "de" ? Fw() : e === "es" ? Uw() : e === "fr" ? jw() : e === "it" ? Gw() : e === "jp" ? Vw() : e === "pl" ? Ww() : e === "ru" ? zw() : e === "uk" ? $w() : qw()
  },
  Xw = () => "You already have this item. Please refresh the page.",
  Yw = () => "Você já possui este item. Atualize a página.",
  Jw = () => "你已经拥有此物品。请刷新页面。",
  Zw = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Qw = () => "Ya tienes este ítem. Actualiza la página.",
  eb = () => "Vous possédez déjà cet objet. Actualisez la page.",
  tb = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  nb = () => "このアイテムはすでに所持しています。ページを更新してください。",
  rb = () => "Masz już ten przedmiot. Odśwież stronę.",
  ab = () => "У вас уже есть этот предмет. Обновите страницу.",
  ob = () => "У вас уже є цей предмет. Оновіть сторінку.",
  ib = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Mr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Xw() : e === "pt" ? Yw() : e === "ch" ? Jw() : e === "de" ? Zw() : e === "es" ? Qw() : e === "fr" ? eb() : e === "it" ? tb() : e === "jp" ? nb() : e === "pl" ? rb() : e === "ru" ? ab() : e === "uk" ? ob() : ib()
  },
  sb = () => "You are already in an alliance",
  cb = () => "Você já está em uma aliança",
  ub = () => "你已经在一个联盟中",
  lb = () => "Du bist bereits in einer Allianz",
  db = () => "Ya estás en una alianza",
  _b = () => "Vous êtes déjà dans une alliance",
  fb = () => "Sei già in un'alleanza",
  mb = () => "すでにアライアンスに所属しています。",
  pb = () => "Jesteś już w sojuszu",
  hb = () => "Вы уже состоите в альянсе",
  gb = () => "Ви вже перебуваєте в альянсі",
  yb = () => "Bạn đã ở trong một liên minh",
  wb = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? sb() : e === "pt" ? cb() : e === "ch" ? ub() : e === "de" ? lb() : e === "es" ? db() : e === "fr" ? _b() : e === "it" ? fb() : e === "jp" ? mb() : e === "pl" ? pb() : e === "ru" ? hb() : e === "uk" ? gb() : yb()
  },
  bb = () => "You are not allowed to do this",
  vb = () => "Você não tem permissão para fazer isso",
  Eb = () => "你无权执行此操作",
  Ab = () => "Du bist dazu nicht berechtigt",
  Nb = () => "No tienes permiso para hacer esto",
  Tb = () => "Vous n’êtes pas autorisé à faire cela",
  Sb = () => "Non hai il permesso di farlo",
  Ob = () => "この操作を行う権限がありません。",
  Rb = () => "Nie masz uprawnień, aby to zrobić",
  Ib = () => "У вас нет прав для этого действия",
  Db = () => "Ви не маєте права це робити",
  kb = () => "Bạn không có quyền làm việc này",
  Ye = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? bb() : e === "pt" ? vb() : e === "ch" ? Eb() : e === "de" ? Ab() : e === "es" ? Nb() : e === "fr" ? Tb() : e === "it" ? Sb() : e === "jp" ? Ob() : e === "pl" ? Rb() : e === "ru" ? Ib() : e === "uk" ? Db() : kb()
  },
  Mb = () => "You do not have enough Droplets to buy this item.",
  Lb = () => "Você não tem Droplets suficientes para comprar este item.",
  Cb = () => "你的 Droplets 不足，无法购买此物品。",
  Pb = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  xb = () => "No tienes suficientes Droplets para comprar este ítem.",
  Bb = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Hb = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  Fb = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Ub = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  jb = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Gb = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Vb = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Lr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Mb() : e === "pt" ? Lb() : e === "ch" ? Cb() : e === "de" ? Pb() : e === "es" ? xb() : e === "fr" ? Bb() : e === "it" ? Hb() : e === "jp" ? Fb() : e === "pl" ? Ub() : e === "ru" ? jb() : e === "uk" ? Gb() : Vb()
  },
  Wb = () => "You need to be logged in to paint",
  zb = () => "Você precisa estar conectado para pintar",
  $b = () => "你需要登录才能进行绘制",
  qb = () => "Du musst eingeloggt sein, um zu malen",
  Kb = () => "Debes iniciar sesión para pintar",
  Xb = () => "Vous devez être connecté pour peindre",
  Yb = () => "Devi avere effettuato l'accesso per dipingere",
  Jb = () => "ペイントするにはログインが必要です。",
  Zb = () => "Musisz być zalogowany, aby malować",
  Qb = () => "Чтобы рисовать, нужно войти в аккаунт",
  ev = () => "Щоб малювати, необхідно увійти в акаунт",
  tv = () => "Bạn cần đăng nhập để tô",
  Cr = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Wb() : e === "pt" ? zb() : e === "ch" ? $b() : e === "de" ? qb() : e === "es" ? Kb() : e === "fr" ? Xb() : e === "it" ? Yb() : e === "jp" ? Jb() : e === "pl" ? Zb() : e === "ru" ? Qb() : e === "uk" ? ev() : tv()
  },
  nv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  rv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  av = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  ov = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  iv = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  sv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  cv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  uv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  lv = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  dv = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  _v = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  fv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  mv = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? nv() : e === "pt" ? rv() : e === "ch" ? av() : e === "de" ? ov() : e === "es" ? iv() : e === "fr" ? sv() : e === "it" ? cv() : e === "jp" ? uv() : e === "pl" ? lv() : e === "ru" ? dv() : e === "uk" ? _v() : fv()
  },
  pv = t => `Your account has been suspended out until ${t.until}`,
  hv = t => `A sua conta está suspensa até ${t.until}`,
  gv = t => `你的账号已被暂停至 ${t.until}`,
  yv = t => `Dein Konto ist gesperrt bis ${t.until}`,
  wv = t => `Tu cuenta ha sido suspendida hasta ${t.until}`,
  bv = t => `Votre compte est suspendu jusqu’au ${t.until}`,
  vv = t => `Il tuo account è sospeso fino al ${t.until}`,
  Ev = t => `あなたのアカウントは${t.until}まで一時停止されています。`,
  Av = t => `Twoje konto zostało zawieszone do ${t.until}`,
  Nv = t => `Ваш аккаунт заблокирован до ${t.until}`,
  Tv = t => `Ваш акаунт призупинено до ${t.until}`,
  Sv = t => `Tài khoản của bạn đã bị đình chỉ đến ${t.until}`,
  Pr = (t, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? pv(t) : e === "pt" ? hv(t) : e === "ch" ? gv(t) : e === "de" ? yv(t) : e === "es" ? wv(t) : e === "fr" ? bv(t) : e === "it" ? vv(t) : e === "jp" ? Ev(t) : e === "pl" ? Av(t) : e === "ru" ? Nv(t) : e === "uk" ? Tv(t) : Sv(t)
  },
  Ov = () => "A correction is already pending for this ticket.",
  Rv = () => "Já existe uma correção pendente para este ticket.",
  Iv = () => "此工单已存在待审核的更正请求。",
  Dv = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  kv = () => "Ya hay una corrección pendiente para este ticket.",
  Mv = () => "Une correction est déjà en attente pour ce ticket.",
  Lv = () => "Una correzione è già in sospeso per questo ticket.",
  Cv = () => "このチケットには未処理の修正があります。",
  Pv = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  xv = () => "Для этого тикета уже есть запрос на исправление.",
  Bv = () => "Для цього тікета вже є запит на перевірці.",
  Hv = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  Fv = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Ov() : e === "pt" ? Rv() : e === "ch" ? Iv() : e === "de" ? Dv() : e === "es" ? kv() : e === "fr" ? Mv() : e === "it" ? Lv() : e === "jp" ? Cv() : e === "pl" ? Pv() : e === "ru" ? xv() : e === "uk" ? Bv() : Hv()
  },
  Uv = () => "You cannot review your own correction request.",
  jv = () => "Você não pode revisar sua própria solicitação de correção.",
  Gv = () => "不能审核自己提交的更正请求。",
  Vv = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  Wv = () => "No puedes revisar tu propia solicitud de corrección.",
  zv = () => "Tu ne peux pas examiner ta propre demande de correction.",
  $v = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  qv = () => "自分のリクエストはレビューできません。",
  Kv = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  Xv = () => "Нельзя рассматривать собственный запрос.",
  Yv = () => "Не можна перевіряти власний запит.",
  Jv = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  Zv = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Uv() : e === "pt" ? jv() : e === "ch" ? Gv() : e === "de" ? Vv() : e === "es" ? Wv() : e === "fr" ? zv() : e === "it" ? $v() : e === "jp" ? qv() : e === "pl" ? Kv() : e === "ru" ? Xv() : e === "uk" ? Yv() : Jv()
  },
  Qv = () => "This correction has already been reviewed.",
  eE = () => "Esta correção já foi revisada.",
  tE = () => "此请求已被审核。",
  nE = () => "Diese Korrektur wurde bereits geprüft.",
  rE = () => "Esta corrección ya ha sido revisada.",
  aE = () => "Cette correction a déjà été examinée.",
  oE = () => "Questa correzione è già stata revisionata.",
  iE = () => "このリクエストはすでにレビュー済みです。",
  sE = () => "Ta prośba została już rozpatrzona.",
  cE = () => "Этот запрос уже рассмотрен.",
  uE = () => "Цей запит вже перевірено.",
  lE = () => "Yêu cầu này đã được duyệt.",
  dE = (t = {}, n = {}) => {
    const e = n.locale ?? I();
    return e === "en" ? Qv() : e === "pt" ? eE() : e === "ch" ? tE() : e === "de" ? nE() : e === "es" ? rE() : e === "fr" ? aE() : e === "it" ? oE() : e === "jp" ? iE() : e === "pl" ? sE() : e === "ru" ? cE() : e === "uk" ? uE() : lE()
  },
  We = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function u2(t) {
  const n = Math.floor(t / We.hour);
  t -= n * We.hour;
  const e = Math.floor(t / We.minute);
  t -= e * We.minute;
  const a = Math.floor(t / We.second).toString().padStart(2, "0");
  return n > 0 ? `${n}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function l2(t) {
  const n = t.getFullYear(),
    e = String(t.getMonth() + 1).padStart(2, "0"),
    r = String(t.getDate()).padStart(2, "0"),
    a = String(t.getHours()).padStart(2, "0"),
    o = String(t.getMinutes()).padStart(2, "0"),
    s = String(t.getSeconds()).padStart(2, "0");
  return `${n}-${e}-${r} ${a}:${o}:${s}`
}
const d2 = {
    griefing: yf(),
    "multi-accounting": cg(),
    "hate-speech": Wf(),
    bot: ru(),
    doxxing: vd(),
    "inappropriate-content": hm(),
    other: Iu()
  },
  _2 = {
    doxxing: Cd(),
    "hate-speech": rm(),
    griefing: kf(),
    "multi-accounting": vg(),
    bot: hu(),
    "inappropriate-content": Im(),
    other: Gu()
  },
  f2 = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  xr = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  m2 = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  _E = 365 * We.day;

function ma(t) {
  if (!t) return null;
  const e = (t instanceof Date ? t : new Date(t)).getTime();
  return Number.isFinite(e) ? e : null
}

function p2(t, n = Date.now()) {
  const e = ma(t);
  return e === null ? !1 : e - n >= _E
}

function h2(t, n = Date.now()) {
  const e = ma(t);
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
const fE = [{
    tileSize: 1e3,
    zoom: 11
  }],
  mE = 4,
  pE = 6e3,
  hE = [{
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
  gE = {
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
  yE = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  wE = {
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
        setDroplets: "staff.dashboard.users.set_droplets"
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
  bE = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  rt = {
    seasons: fE,
    regionSize: mE,
    refreshIntervalMs: pE,
    colors: hE,
    products: gE,
    countries: yE,
    permissions: wE,
    settings: bE
  },
  Pn = rt,
  vE = rt.seasons,
  pa = rt.seasons.length - 1,
  g2 = rt.seasons[pa].zoom,
  y2 = rt.seasons[pa].tileSize,
  w2 = rt.permissions,
  EE = rt.settings;

function b2(t) {
  return Pn.countries[t - 1]
}
class b extends Error {
  constructor(n, e) {
    super(n), this.message = n, this.status = e
  }
}

function Br(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    let o = e[a];
    o ? o.push(r) : e[a] = [r]
  }
  return e
}

function v2(t, n) {
  const e = {};
  for (const r of t) {
    const a = n(r);
    e[a] = r
  }
  return e
}
const AE = 30 * We.minute;
var xt, Bt;
class NE {
  constructor(n) {
    J(this, xt, me(!0));
    J(this, Bt, me(null));
    q(this, "lastHotspotRequestAt", 0);
    this.url = n
  }
  get online() {
    return Q(x(this, xt))
  }
  set online(n) {
    ne(x(this, xt), n, !0)
  }
  get serverTimeOffsetMs() {
    return Q(x(this, Bt))
  }
  set serverTimeOffsetMs(n) {
    ne(x(this, Bt), n, !0)
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
    const e = Br(n, i => `t=(${i.tile[0]},${i.tile[1]}),s=${i.season}`),
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
      if (s.status === _.UNAUTHORIZED) throw new Error(Cr());
      if (s.status === _.FORBIDDEN) {
        if (s.headers.get("cf-mitigated") === "challenge") throw new Error(Or());
        const i = await s.json();
        if ((i == null ? void 0 : i.error) === "timeout") {
          const c = new Date(Date.now() + ((i == null ? void 0 : i.durationMs) ?? 0));
          throw new Error(Pr({
            until: c.toLocaleString()
          }))
        }
        if ((i == null ? void 0 : i.error) === "refresh") throw new Error(Dr());
        if ((i == null ? void 0 : i.error) === "color-not-owned") throw new Error(Ir());
        if ((i == null ? void 0 : i.error) === "event-pixel-present") throw new Error(Tr());
        if ((i == null ? void 0 : i.error) === "challenge-required")
          if (i.tier) {
            if (await Ar(i.tier)) return this.paint(n);
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
      throw o === "timelapse_too_many_events" ? new b(ey(), _.BAD_REQUEST) : new b(typeof o == "string" && o ? o : p(), _.BAD_REQUEST)
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
    const o = Br(n, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
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
      if (c.status === _.UNAUTHORIZED) throw new Error(Cr());
      if (c.status === _.FORBIDDEN) {
        if (c.headers.get("cf-mitigated") === "challenge") throw new Error(Or());
        const l = await c.json();
        if ((l == null ? void 0 : l.error) === "timeout") {
          const u = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(Pr({
            until: u.toLocaleString()
          }))
        }
        if ((l == null ? void 0 : l.error) === "refresh") throw new Error(Dr());
        if ((l == null ? void 0 : l.error) === "color-not-owned") throw new Error(Ir());
        if ((l == null ? void 0 : l.error) === "event-pixel-present") throw new Error(Tr());
        ut.refresh()
      } else throw new Error(p())
    }
  }
  async adminAutoPainterPaint(n, e, r) {
    const a = TE(n),
      o = await SE(a),
      s = new FormData;
    s.append("fingerprint", e), s.append("season", a.season.toString()), s.append("px0", a.offsetX.toString()), s.append("py0", a.offsetY.toString()), s.append("width", a.width.toString()), s.append("height", a.height.toString()), s.append("pixels", n.length.toString()), s.append("bitmap", o, "auto-painter.png"), s.append("userId", r.toString());
    const i = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: s,
      credentials: "include"
    });
    if (i.status === _.FORBIDDEN) {
      const c = await i.json().catch(() => null);
      if (typeof(c == null ? void 0 : c.charges) == "number") throw new Error(M1({
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
      throw new Error(M_({
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
    if (e.status === _.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(oc());
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
  async sendOtp(n, e = !1) {
    const r = await this.request("/anticheat/otp/send", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: n,
        ignoreWhatsapp: e
      }),
      throwOnStatus: !1
    });
    if (r.status === _.BAD_REQUEST) throw new Error(Zp());
    if (r.status === _.CONFLICT) throw new Error(r0());
    if (r.status === _.FORBIDDEN) throw new Error(i1());
    if (r.status === _.TOO_MANY_REQUESTS) throw new Error(kr());
    if (r.status === _.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(h0());
    if (r.status === _.LOCKED) throw new Error(Ew());
    if (r.status === _.UNPROCESSABLE_ENTITY) throw new Error(dh());
    if (r.status === _.NOT_ACCEPTABLE) throw new Error(Pw());
    if (r.status === _.PRECONDITION_FAILED) throw new Error(Yl());
    if (r.status !== _.OK) throw new Error(p());
    return await r.json()
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
      if (r.status === _.GONE) throw new Error(af());
      if (r.status === _.BAD_REQUEST) throw new Error(mp());
      if (r.status === _.TOO_MANY_REQUESTS) throw new Error(kr());
      if (r.status !== _.OK) throw new Error(p())
    } else {
      if (r.status === _.BAD_REQUEST) throw new Error(tp());
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
      if (a === "invalid_name") throw new Error(Rr());
      if (a === "invalid_discord") throw new Error(Op());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const o = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(Cg({
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
    if (e.status === _.BAD_REQUEST) throw new Error(Jy());
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
    if (e.status === _.FORBIDDEN) throw new Error(w1());
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
    if (r.status === _.BAD_REQUEST) throw new Error(Xh());
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
    Date.now() - this.lastHotspotRequestAt < AE || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== _.OK) throw e.status === _.NOT_FOUND ? new Error(Sr()) : e.status === _.FORBIDDEN ? new Error(Lr()) : e.status === _.CONFLICT ? new Error(Mr()) : new Error(p())
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
      throw r.error === "max_characters" ? new Error(kc()) : r.error === "name_taken" ? new Error(yc()) : r.error == "empty_name" ? new Error(Wc()) : new Error(p())
    } else throw e.status === _.FORBIDDEN ? new Error(wb()) : new Error(p())
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
    if (e.status !== _.OK) throw e.status === _.FORBIDDEN ? new Error(Ye()) : e.status === _.BAD_REQUEST ? new Error(z_()) : new Error(p())
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
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Nh()) : new Error(p())
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
    for (const r of e.tickets) r.reports.sort((a, o) => xr[a.reason] - xr[o.reason]);
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
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new b(Fv(), _.CONFLICT) : new b(p(), _.CONFLICT)
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
    if (a.status === _.FORBIDDEN) throw new b(Zv(), _.FORBIDDEN);
    if (a.status === _.CONFLICT) throw new b(dE(), _.CONFLICT);
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
      throw console.error("Fetch error:", i), this.online = !1, new Error(fl(), {
        cause: i
      })
    }
    if (r.status === _.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(Hy());
    const a = ((s = r.headers.get("cf-mitigated")) == null ? void 0 : s.toLowerCase()) === "challenge";
    if (r.status === 403 && a) {
      if (yt.setCfLikelyAutomated(!0), !await _a()) throw new Error(Tn());
      r = await fetch(`${this.url}${n}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === _.TOO_MANY_REQUESTS) throw new Error(mv());
      if (r.status === _.REQUEST_TIMEOUT) throw new Error(j0());
      if (r.status === _.SERVICE_UNAVAILABLE) throw new Error(fy())
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
      throw s === "invalid_name" ? new b(Rr(), _.BAD_REQUEST) : new b(typeof s == "string" && s ? s : p(), _.BAD_REQUEST)
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
      throw o === "email_required" || o === "invalid_email" ? new b(w_(), _.BAD_REQUEST) : new b(typeof o == "string" && o ? o : p(), _.BAD_REQUEST)
    }
    if (r.status === _.CONFLICT) {
      const a = await r.json();
      if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
        const s = new b(typeof(a == null ? void 0 : a.userId) == "number" ? i_({
          userId: a.userId
        }) : qd(), _.CONFLICT);
        throw typeof(a == null ? void 0 : a.userId) == "number" && (s.userId = a.userId), s
      }
      throw new b(p(), _.CONFLICT)
    }
    if (r.status === _.NOT_FOUND) throw new b("User not found.", _.NOT_FOUND);
    if (r.status !== _.OK) throw new b(p(), r.status)
  }
  async getUserTickets(n, e) {
    if (e === "appeals" && (n.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(n.userId)), r.set("kind", String(n.kind)), r.set("page", String(n.page ?? 0)), r.set("pageSize", String(n.pageSize ?? 20)), e === "appeals" && r.set("appealId", String(n.appealId));
    const a = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      o = await this.request(a, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== _.OK) throw new b(p(), o.status);
    const s = await o.json(),
      i = Array.isArray(s == null ? void 0 : s.tickets) ? s.tickets : [];
    return i.sort((c, l) => new Date(l.createdAt).getTime() - new Date(c.createdAt).getTime()), i
  }
  async getUserAppeals(n) {
    const e = new URLSearchParams;
    e.set("userId", String(n.userId)), e.set("kind", n.kind), n.page !== void 0 && e.set("page", String(n.page)), n.pageSize !== void 0 && e.set("pageSize", String(n.pageSize));
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
        if (await Ar(o.tier)) return this.submitBanAppeal(n);
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
    if (!r.ok) throw r.status === 500 ? new b(p(), r.status) : new b(Gm(), r.status);
    return r.json()
  }
  validWaybackInput(n) {
    const e = Number.isFinite(n.timestamp) && Number.isInteger(n.timestamp) && n.timestamp >= 0 && n.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(n.season) && Number.isInteger(n.season) && n.season >= 0 && n.season < vE.length,
      a = Number.isFinite(n.limit) && Number.isInteger(n.limit) && n.limit > 0 && n.limit <= EE.tools.wayback.limit,
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
    if (e.status === _.NOT_FOUND) throw new Error(Sr());
    if (e.status === _.FORBIDDEN) throw new Error(Lr());
    if (e.status === _.CONFLICT) throw new Error(Mr());
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

function TE(t) {
  var f, d;
  if (!t.length) throw new Error("Auto painter request does not contain any pixels.");
  const n = t[0].season;
  for (const h of t)
    if (h.season !== n) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (f = Pn.seasons) == null ? void 0 : f[n];
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
    const L = (d = Pn.colors) == null ? void 0 : d[y];
    if (!L) throw new Error(`Unknown palette color index: ${y}`);
    const v = h - a,
      A = ((g - o) * l + v) * 4,
      [D, S, w] = L.rgb;
    m[A] = D, m[A + 1] = S, m[A + 2] = w, m[A + 3] = y === 0 ? 1 : 255
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
async function SE(t) {
  const n = OE(t.width, t.height),
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

function OE(t, n) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(t, n);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = t, e.height = n, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ze = new NE(Hn);
typeof window < "u" && Na(() => {
  let t = ze.online;
  Ta(() => {
    const n = ze.online;
    n && !t && window.dispatchEvent(new CustomEvent("wplace:online")), t = n
  })
});
const E2 = t => new URL(t, Hn).toString();

function ha(t, n) {
  if (!(t != null && t.length)) return !1;
  for (const e of t)
    if (e === n) return !0;
  return !1
}

function RE(t, n) {
  for (const e of n)
    if (ha(t, e)) return !0;
  return !1
}

function A2(...t) {
  return t.filter(Boolean).join(" ")
}
const IE = typeof document < "u";
let Hr = 0;
var Ht, Ft, Ut;
class DE {
  constructor() {
    J(this, Ht, me(an([])));
    J(this, Ft, me(an([])));
    J(this, Ut, n => {
      const e = this.toasts.findIndex(r => r.id === n);
      return e === -1 ? null : e
    });
    q(this, "addToast", n => {
      IE && this.toasts.unshift(n)
    });
    q(this, "updateToast", ({
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
    q(this, "create", n => {
      var i;
      const {
        message: e,
        ...r
      } = n, a = typeof(n == null ? void 0 : n.id) == "number" || n.id && ((i = n.id) == null ? void 0 : i.length) > 0 ? n.id : Hr++, o = n.dismissable === void 0 ? !0 : n.dismissable, s = n.type === void 0 ? "default" : n.type;
      return tr(() => {
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
    q(this, "dismiss", n => (tr(() => {
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
      const e = x(this, Ut).call(this, n);
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
      const a = n instanceof Promise ? n : n();
      let o = r !== void 0;
      return a.then(s => {
        if (typeof s == "object" && s && "ok" in s && typeof s.ok == "boolean" && !s.ok) {
          o = !1;
          const i = kE(s);
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
    q(this, "custom", (n, e) => {
      const r = (e == null ? void 0 : e.id) || Hr++;
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
      const e = x(this, Ut).call(this, n.toastId);
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
    return Q(x(this, Ht))
  }
  set toasts(n) {
    ne(x(this, Ht), n, !0)
  }
  get heights() {
    return Q(x(this, Ft))
  }
  set heights(n) {
    ne(x(this, Ft), n, !0)
  }
}
Ht = new WeakMap, Ft = new WeakMap, Ut = new WeakMap;

function kE(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const Re = new DE;

function ME(t, n) {
  return Re.create({
    message: t,
    ...n
  })
}
var dn;
class N2 {
  constructor() {
    J(this, dn, pt(() => Re.toasts.filter(n => !n.dismiss)))
  }
  get toasts() {
    return Q(x(this, dn))
  }
}
dn = new WeakMap;
const LE = ME,
  CE = Object.assign(LE, {
    success: Re.success,
    info: Re.info,
    warning: Re.warning,
    error: Re.error,
    custom: Re.custom,
    message: Re.message,
    promise: Re.promise,
    dismiss: Re.dismiss,
    loading: Re.loading,
    getActiveToasts: () => Re.toasts.filter(t => !t.dismiss)
  });
var jt, Gt, Vt, Wt, zt, $t, qt, Kt;
class PE {
  constructor() {
    q(this, "channel", new BroadcastChannel("user-channel"));
    J(this, jt, me());
    J(this, Gt, me(!0));
    J(this, Vt, me());
    J(this, Wt, me(Date.now()));
    J(this, zt, pt(() => {
      if (!this.data) return;
      const n = this.data.charges;
      if (n.count > n.max) return n.count;
      const e = n.count + Math.max((la.now - this.lastFetch) / n.cooldownMs, 0);
      return Math.min(n.max, e)
    }));
    J(this, $t, pt(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    J(this, qt, pt(() => {
      var n;
      return new ai(zr(((n = this.data) == null ? void 0 : n.flagsBitmap) ?? "AA=="))
    }));
    J(this, Kt, pt(() => {
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
    return Q(x(this, jt))
  }
  set data(n) {
    ne(x(this, jt), n, !0)
  }
  get loading() {
    return Q(x(this, Gt))
  }
  set loading(n) {
    ne(x(this, Gt), n, !0)
  }
  get notificationCount() {
    return Q(x(this, Vt))
  }
  set notificationCount(n) {
    ne(x(this, Vt), n, !0)
  }
  get lastFetch() {
    return Q(x(this, Wt))
  }
  set lastFetch(n) {
    ne(x(this, Wt), n)
  }
  get charges() {
    return Q(x(this, zt))
  }
  set charges(n) {
    ne(x(this, zt), n)
  }
  get cooldown() {
    return Q(x(this, $t))
  }
  set cooldown(n) {
    ne(x(this, $t), n)
  }
  get flagsBitmap() {
    return Q(x(this, qt))
  }
  set flagsBitmap(n) {
    ne(x(this, qt), n)
  }
  get timeoutUntil() {
    return Q(x(this, Kt))
  }
  set timeoutUntil(n) {
    ne(x(this, Kt), n)
  }
  async refresh() {
    var n, e;
    try {
      return this.loading = !0, this.data = await ze.me(), this.lastFetch = Date.now(), (n = this.channel) == null || n.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ze.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (ro("userId", {
        id: this.data.id
      }), yt.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), CE.warning(qg(), {
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
    return ha((e = this.data) == null ? void 0 : e.permissions, n)
  }
  hasAnyPermission(n) {
    var e;
    return RE((e = this.data) == null ? void 0 : e.permissions, n)
  }
}
jt = new WeakMap, Gt = new WeakMap, Vt = new WeakMap, Wt = new WeakMap, zt = new WeakMap, $t = new WeakMap, qt = new WeakMap, Kt = new WeakMap;
const ut = new PE;
let K;
const Be = new Array(128).fill(void 0);
Be.push(void 0, null, !0, !1);

function W(t) {
  return Be[t]
}
let Et = Be.length;

function Z(t) {
  Et === Be.length && Be.push(Be.length + 1);
  const n = Et;
  return Et = Be[n], Be[n] = t, n
}

function je(t, n) {
  try {
    return t.apply(this, n)
  } catch (e) {
    K.__wbindgen_export_0(Z(e))
  }
}

function Je(t) {
  return t == null
}
const ga = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && ga.decode();
let gt = null;

function tn() {
  return (gt === null || gt.byteLength === 0) && (gt = new Uint8Array(K.memory.buffer)), gt
}

function nn(t, n) {
  return t = t >>> 0, ga.decode(tn().subarray(t, t + n))
}

function xE(t) {
  t < 132 || (Be[t] = Et, Et = t)
}

function Fr(t) {
  const n = W(t);
  return xE(t), n
}
let Ze = null;

function un() {
  return (Ze === null || Ze.buffer.detached === !0 || Ze.buffer.detached === void 0 && Ze.buffer !== K.memory.buffer) && (Ze = new DataView(K.memory.buffer)), Ze
}
let nt = 0;
const rn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  BE = typeof rn.encodeInto == "function" ? function(t, n) {
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
      c = BE(t, i);
    s += c.written, a = e(a, r, s, 1) >>> 0
  }
  return nt = s, a
}

function HE(t) {
  const n = Xt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = nt;
  K.set_fingerprint_v2(n, e)
}

function FE(t) {
  let n, e;
  try {
    const o = K.__wbindgen_add_to_stack_pointer(-16),
      s = Xt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
      i = nt;
    K.get_pawtected_endpoint_payload(o, s, i);
    var r = un().getInt32(o + 0, !0),
      a = un().getInt32(o + 4, !0);
    return n = r, e = a, nn(r, a)
  } finally {
    K.__wbindgen_add_to_stack_pointer(16), K.__wbindgen_export_3(n, e, 1)
  }
}

function UE(t) {
  K.set_automated_browser(t)
}

function Sn(t) {
  K.set_user_id(t)
}

function jE(t) {
  K.set_automated_clicks(t)
}

function GE(t) {
  const n = Xt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = nt;
  K.set_detected_bot(n, e)
}

function VE(t) {
  const n = Xt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = nt;
  K.request_url(n, e)
}

function WE(t) {
  K.set_cf_likely_automated(t)
}

function zE(t) {
  const n = Xt(t, K.__wbindgen_export_1, K.__wbindgen_export_2),
    e = nt;
  K.set_fingerprint(n, e)
}
async function $E(t, n) {
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

function qE() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_buffer_609cc3eee51ed158 = function(n) {
    const e = W(n).buffer;
    return Z(e)
  }, t.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return je(function(n, e) {
      const r = W(n).call(W(e));
      return Z(r)
    }, arguments)
  }, t.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return je(function(n, e, r) {
      const a = W(n).call(W(e), W(r));
      return Z(a)
    }, arguments)
  }, t.wbg.__wbg_crypto_574e78ad8b13b65f = function(n) {
    const e = W(n).crypto;
    return Z(e)
  }, t.wbg.__wbg_document_d249400bd7bd996d = function(n) {
    const e = W(n).document;
    return Je(e) ? 0 : Z(e)
  }, t.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return je(function(n, e) {
      W(n).getRandomValues(W(e))
    }, arguments)
  }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return je(function(n, e) {
      const r = Reflect.get(W(n), W(e));
      return Z(r)
    }, arguments)
  }, t.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return je(function(n) {
      return W(n).hasFocus()
    }, arguments)
  }, t.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return je(function(n) {
      const e = W(n).innerWidth;
      return Z(e)
    }, arguments)
  }, t.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(n) {
    let e;
    try {
      e = W(n) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, t.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(n) {
    const e = W(n).msCrypto;
    return Z(e)
  }, t.wbg.__wbg_navigator_1577371c070c8947 = function(n) {
    const e = W(n).navigator;
    return Z(e)
  }, t.wbg.__wbg_new_a12002a7f91c75be = function(n) {
    const e = new Uint8Array(W(n));
    return Z(e)
  }, t.wbg.__wbg_newnoargs_105ed471475aaf50 = function(n, e) {
    const r = new Function(nn(n, e));
    return Z(r)
  }, t.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(n, e, r) {
    const a = new Uint8Array(W(n), e >>> 0, r >>> 0);
    return Z(a)
  }, t.wbg.__wbg_newwithlength_a381634e90c276d4 = function(n) {
    const e = new Uint8Array(n >>> 0);
    return Z(e)
  }, t.wbg.__wbg_node_905d3e251edff8a2 = function(n) {
    const e = W(n).node;
    return Z(e)
  }, t.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, t.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(n) {
    const e = W(n).process;
    return Z(e)
  }, t.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return je(function(n, e) {
      W(n).randomFillSync(Fr(e))
    }, arguments)
  }, t.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return je(function() {
      const n = module.require;
      return Z(n)
    }, arguments)
  }, t.wbg.__wbg_set_65595bdd868b3009 = function(n, e, r) {
    W(n).set(W(e), r >>> 0)
  }, t.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const n = typeof global > "u" ? null : global;
    return Je(n) ? 0 : Z(n)
  }, t.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const n = typeof globalThis > "u" ? null : globalThis;
    return Je(n) ? 0 : Z(n)
  }, t.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const n = typeof self > "u" ? null : self;
    return Je(n) ? 0 : Z(n)
  }, t.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const n = typeof window > "u" ? null : window;
    return Je(n) ? 0 : Z(n)
  }, t.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(n, e, r) {
    const a = W(n).subarray(e >>> 0, r >>> 0);
    return Z(a)
  }, t.wbg.__wbg_versions_c01dfd4722a88165 = function(n) {
    const e = W(n).versions;
    return Z(e)
  }, t.wbg.__wbindgen_boolean_get = function(n) {
    const e = W(n);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, t.wbg.__wbindgen_is_function = function(n) {
    return typeof W(n) == "function"
  }, t.wbg.__wbindgen_is_null = function(n) {
    return W(n) === null
  }, t.wbg.__wbindgen_is_object = function(n) {
    const e = W(n);
    return typeof e == "object" && e !== null
  }, t.wbg.__wbindgen_is_string = function(n) {
    return typeof W(n) == "string"
  }, t.wbg.__wbindgen_is_undefined = function(n) {
    return W(n) === void 0
  }, t.wbg.__wbindgen_memory = function() {
    const n = K.memory;
    return Z(n)
  }, t.wbg.__wbindgen_number_get = function(n, e) {
    const r = W(e),
      a = typeof r == "number" ? r : void 0;
    un().setFloat64(n + 8, Je(a) ? 0 : a, !0), un().setInt32(n + 0, !Je(a), !0)
  }, t.wbg.__wbindgen_object_clone_ref = function(n) {
    const e = W(n);
    return Z(e)
  }, t.wbg.__wbindgen_object_drop_ref = function(n) {
    Fr(n)
  }, t.wbg.__wbindgen_string_new = function(n, e) {
    const r = nn(n, e);
    return Z(r)
  }, t.wbg.__wbindgen_throw = function(n, e) {
    throw new Error(nn(n, e))
  }, t
}

function KE(t, n) {
  return K = t.exports, ya.__wbindgen_wasm_module = n, Ze = null, gt = null, K
}
async function ya(t) {
  if (K !== void 0) return K;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? {
    module_or_path: t
  } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const n = qE();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const {
    instance: e,
    module: r
  } = await $E(await t, n);
  return KE(e, r)
}
class XE {
  constructor() {
    q(this, "interval");
    q(this, "storagesEmpty", !1);
    q(this, "storages", [new ln, new xn, new Bn, new JE]);
    q(this, "pawtectLoaded");
    q(this, "pawtectError")
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
        await ya(ao), (n = ut.data) != null && n.id && Sn(ut.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: YE((r, a) => {
            let o = null;
            return r instanceof Request ? o = r.url : r instanceof URL ? o = r.href : typeof r == "string" && (o = r), o !== null && !o.startsWith("/") && VE(o), e.call(window, r, a)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, no(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(n) {
    await this.loadPawtect(), Sn(n)
  }
  async setCfLikelyAutomated(n) {
    await this.loadPawtect(), WE(n)
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
    if (!await this.loadPawtect()) throw new Error(Kw());
    const r = navigator.webdriver,
      [a, o, s] = await Promise.all([On(), xs(), ni().catch(i => (console.error(i), {
        bot: !1
      }))]);
    return Sn(ut.data.id), zE(a), HE(o), UE(r), jE(la.automatedClicks), s.bot && GE(s.botKind ?? "unknown"), FE(n)
  }
}

function YE(t) {
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
q(Ge, "KEY", "ui_layout_v3"), q(Ge, "XOR_KEY", "wplace-prefs");
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
q(Ve, "KEY", "nav.cursor"), q(Ve, "SHIFT", 13);
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
q(Qe, "KEY", "_pf_uid"), q(Qe, "MAX_AGE", 3600 * 24 * 365);
let Bn = Qe;
class JE {
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
const yt = new XE;
export {
  m2 as $, xs as A, w_ as B, EE as C, pa as D, Ar as E, Tn as F, n2 as G, Im as H, rm as I, Cd as J, hu as K, vg as L, kf as M, r2 as N, a2 as O, y2 as P, b2 as Q, l2 as R, w2 as S, We as T, Kw as U, Jy as V, Oa as W, E2 as X, p2 as Y, _2 as Z, h2 as _, ze as a, v2 as a0, g2 as a1, Gm as a2, Pn as b, p as c, d2 as d, vd as e, ru as f, yf as g, Wf as h, hm as i, la as j, Zv as k, Re as l, cg as m, A2 as n, N2 as o, u2 as p, c2 as q, Te as r, f2 as s, CE as t, ut as u, i2 as v, o2 as w, s2 as x, yt as y, ri as z
};