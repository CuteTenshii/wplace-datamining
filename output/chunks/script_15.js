var Nr = Object.defineProperty;
var on = n => {
  throw TypeError(n)
};
var Lr = (n, t, e) => t in n ? Nr(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var R = (n, t, e) => Lr(n, typeof t != "symbol" ? t + "" : t, e),
  Dr = (n, t, e) => t.has(n) || on("Cannot " + e);
var w = (n, t, e) => (Dr(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  D = (n, t, e) => t.has(n) ? on("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  e as V,
  i as M,
  h as C,
  g as vt,
  bM as Pr,
  y as xr,
  B as an,
  u as Ie
} from "./CxLQz1V2.js";
import {
  g as h
} from "./BhCkpOlh.js";
const Se = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  ee = globalThis,
  De = "10.57.0";

function Xt() {
  return Yt(ee), ee
}

function Yt(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || De, t[De] = t[De] || {}
}

function Jt(n, t, e = ee) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    o = r[De] = r[De] || {};
  return o[n] || (o[n] = t())
}
const zr = "Sentry Logger ",
  sn = {};

function Mr(n) {
  if (!("console" in ee)) return n();
  const t = ee.console,
    e = {},
    r = Object.keys(sn);
  r.forEach(o => {
    const i = sn[o];
    e[o] = t[o], t[o] = i
  });
  try {
    return n()
  } finally {
    r.forEach(o => {
      t[o] = e[o]
    })
  }
}

function Cr() {
  Qt().enabled = !0
}

function jr() {
  Qt().enabled = !1
}

function Qn() {
  return Qt().enabled
}

function Br(...n) {
  Zt("log", ...n)
}

function Fr(...n) {
  Zt("warn", ...n)
}

function Ur(...n) {
  Zt("error", ...n)
}

function Zt(n, ...t) {
  Se && Qn() && Mr(() => {
    ee.console[n](`${zr}[${n}]:`, ...t)
  })
}

function Qt() {
  return Se ? Jt("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const mt = {
    enable: Cr,
    disable: jr,
    isEnabled: Qn,
    log: Br,
    warn: Fr,
    error: Ur
  },
  Gr = Object.prototype.toString;

function qr(n, t) {
  return Gr.call(n) === `[object ${t}]`
}

function Vr(n) {
  return qr(n, "Object")
}

function Wr(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Hr(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    Se && mt.log(`Failed to add non-enumerable property "${String(t)}" to object`, n)
  }
}
let be;

function At(n) {
  if (be !== void 0) return be ? be(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = ee;
  return t in e && typeof e[t] == "function" ? (be = e[t], be(n)) : (be = null, n())
}

function Bt() {
  return At(() => Math.random())
}

function Kr() {
  return At(() => Date.now())
}

function $r(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function Xr() {
  const n = ee;
  return n.crypto || n.msCrypto
}
let Nt;

function Yr() {
  return Bt() * 16
}

function Pe(n = Xr()) {
  try {
    if (n != null && n.randomUUID) return At(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return Nt || (Nt = "10000000100040008000" + 1e11), Nt.replace(/[018]/g, t => (t ^ (Yr() & 15) >> t / 4).toString(16))
}
const er = 1e3;

function tr() {
  return Kr() / er
}

function Jr() {
  const {
    performance: n
  } = ee;
  if (!(n != null && n.now) || !n.timeOrigin) return tr;
  const t = n.timeOrigin;
  return () => (t + At(() => n.now())) / er
}
let cn;

function Zr() {
  return (cn ?? (cn = Jr()))()
}

function Qr(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Zr(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : Pe()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function nr(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = nr(r[o], t[o], e - 1));
  return r
}

function un() {
  return Pe()
}

function eo(n) {
  try {
    const t = ee.WeakRef;
    if (typeof t == "function") return new t(n)
  } catch {}
  return n
}

function to(n) {
  if (n) {
    if (typeof n == "object" && "deref" in n && typeof n.deref == "function") try {
      return n.deref()
    } catch {
      return
    }
    return n
  }
}
const Ft = "_sentrySpan";

function ln(n, t) {
  t ? Hr(n, Ft, eo(t)) : delete n[Ft]
}

function dn(n) {
  return to(n[Ft])
}
const no = 100;
class we {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: un(),
      sampleRand: Bt()
    }
  }
  clone() {
    const t = new we;
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, ln(t, dn(this)), t
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
    }, this._session && Qr(this._session, {
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
      r = e instanceof we ? e.getScopeData() : Vr(e) ? t : void 0,
      {
        tags: o,
        attributes: i,
        extra: a,
        user: s,
        contexts: u,
        level: _,
        fingerprint: f = [],
        propagationContext: l,
        conversationId: b
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...o
    }, this._attributes = {
      ...this._attributes,
      ...i
    }, this._extra = {
      ...this._extra,
      ...a
    }, this._contexts = {
      ...this._contexts,
      ...u
    }, s && Object.keys(s).length && (this._user = s), _ && (this._level = _), f.length && (this._fingerprint = f), l && (this._propagationContext = l), b && (this._conversationId = b), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, ln(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: un(),
      sampleRand: Bt()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var i;
    const r = typeof e == "number" ? e : no;
    if (r <= 0) return this;
    const o = {
      timestamp: tr(),
      ...t,
      message: t.message ? $r(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(o), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (i = this._client) == null || i.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
      span: dn(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = nr(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || Pe();
    if (!this._client) return Se && mt.warn("No client configured on scope - will not capture exception!"), r;
    const o = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: o,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const o = (r == null ? void 0 : r.event_id) || Pe();
    if (!this._client) return Se && mt.warn("No client configured on scope - will not capture message!"), o;
    const i = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: i,
      ...r,
      event_id: o
    }, this), o
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || Pe();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (Se && mt.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function ro() {
  return Jt("defaultCurrentScope", () => new we)
}

function oo() {
  return Jt("defaultIsolationScope", () => new we)
}
const _n = n => n instanceof Promise && !n[rr],
  rr = Symbol("chained PromiseLike"),
  io = (n, t, e) => {
    const r = n.then(o => (t(o), o), o => {
      throw e(o), o
    });
    return _n(r) && _n(n) ? r : ao(n, r)
  },
  ao = (n, t) => {
    if (!t) return n;
    let e = !1;
    for (const r in n) {
      if (r in t) continue;
      e = !0;
      const o = n[r];
      typeof o == "function" ? Object.defineProperty(t, r, {
        value: (...i) => o.apply(n, i),
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[r] = o
    }
    return e && Object.assign(t, {
      [rr]: !0
    }), t
  };
class so {
  constructor(t, e) {
    let r;
    t ? r = t : r = new we;
    let o;
    e ? o = e : o = new we, this._stack = [{
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
    return Wr(r) ? io(r, () => this._popScope(), () => this._popScope()) : (this._popScope(), r)
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

function Ae() {
  const n = Xt(),
    t = Yt(n);
  return t.stack = t.stack || new so(ro(), oo())
}

function co(n) {
  return Ae().withScope(n)
}

function uo(n, t) {
  const e = Ae();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function fn(n) {
  return Ae().withScope(() => n(Ae().getIsolationScope()))
}

function lo() {
  return {
    withIsolationScope: fn,
    withScope: co,
    withSetScope: uo,
    withSetIsolationScope: (n, t) => fn(t),
    getCurrentScope: () => Ae().getScope(),
    getIsolationScope: () => Ae().getIsolationScope()
  }
}

function or(n) {
  const t = Yt(n);
  return t.acs ? t.acs : lo()
}

function _o() {
  const n = Xt();
  return or(n).getCurrentScope()
}

function fo() {
  const n = Xt();
  return or(n).getIsolationScope()
}

function po(n, t) {
  return _o().captureException(n, void 0)
}

function mo(n, t) {
  fo().setContext(n, t)
}
const mR = "https://maps.wplace.live",
  hR = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  gR = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  ho = "true",
  wR = "0x4AAAAAABpHqZ-6i7uL0nmG",
  yR = "https://backend.wplace.live/files",
  en = "https://backend.wplace.live",
  go = "" + new URL("../assets/pawtect_wasm_bg.8VPqYlMZ.wasm", import.meta.url).href;
var wo = "2.0.0";
const O = {
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
class P extends Error {
  constructor(t, e) {
    super(e), this.state = t, this.name = "BotdError", Object.setPrototypeOf(this, P.prototype)
  }
}

function yo(n, t) {
  const e = {};
  let r = {
    bot: !1
  };
  for (const o in t) {
    const i = t[o],
      a = i(n);
    let s = {
      bot: !1
    };
    typeof a == "string" ? s = {
      bot: !0,
      botKind: a
    } : a && (s = {
      bot: !0,
      botKind: O.Unknown
    }), e[o] = s, s.bot && (r = s)
  }
  return [e, r]
}
async function bo(n) {
  const t = {},
    e = Object.keys(n);
  return await Promise.all(e.map(async r => {
    const o = n[r];
    try {
      t[r] = {
        value: await o(),
        state: 0
      }
    } catch (i) {
      i instanceof P ? t[r] = {
        state: i.state,
        error: `${i.name}: ${i.message}`
      } : t[r] = {
        state: -3,
        error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
      }
    }
  })), t
}

function vo({
  appVersion: n
}) {
  if (n.state !== 0) return !1;
  if (/headless/i.test(n.value)) return O.HeadlessChrome;
  if (/electron/i.test(n.value)) return O.Electron;
  if (/slimerjs/i.test(n.value)) return O.SlimerJS
}

function ht(n, t) {
  return n.indexOf(t) !== -1
}

function te(n, t) {
  return n.indexOf(t) !== -1
}

function Eo(n, t) {
  if ("find" in n) return n.find(t);
  for (let e = 0; e < n.length; e++)
    if (t(n[e], e, n)) return n[e]
}

function pn(n) {
  return Object.getOwnPropertyNames(n)
}

function Ut(n, ...t) {
  for (const e of t)
    if (typeof e == "string") {
      if (ht(n, e)) return !0
    } else if (Eo(n, o => e.test(o)) != null) return !0;
  return !1
}

function ke(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function To({
  documentElementKeys: n
}) {
  if (n.state !== 0) return !1;
  if (Ut(n.value, "selenium", "webdriver", "driver")) return O.Selenium
}

function So({
  errorTrace: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return O.PhantomJS
}

function ko({
  evalLength: n,
  browserKind: t,
  browserEngineKind: e
}) {
  if (n.state !== 0 || t.state !== 0 || e.state !== 0) return;
  const r = n.value;
  return e.value === "unknown" ? !1 : r === 37 && !ht(["webkit", "gecko"], e.value) || r === 39 && !ht(["internet_explorer"], t.value) || r === 33 && !ht(["chromium"], e.value)
}

function Oo({
  functionBind: n
}) {
  if (n.state === -2) return O.PhantomJS
}

function Ao({
  languages: n
}) {
  if (n.state === 0 && n.value.length === 0) return O.HeadlessChrome
}

function Ro({
  mimeTypesConsistent: n
}) {
  if (n.state === 0 && !n.value) return O.Unknown
}

function Io({
  notificationPermissions: n,
  browserKind: t
}) {
  if (t.state !== 0 || t.value !== "chrome") return !1;
  if (n.state === 0 && n.value) return O.HeadlessChrome
}

function No({
  pluginsArray: n
}) {
  if (n.state === 0 && !n.value) return O.HeadlessChrome
}

function Lo({
  pluginsLength: n,
  android: t,
  browserKind: e,
  browserEngineKind: r
}) {
  if (!(n.state !== 0 || t.state !== 0 || e.state !== 0 || r.state !== 0) && !(e.value !== "chrome" || t.value || r.value !== "chromium") && n.value === 0) return O.HeadlessChrome
}

function Do({
  process: n
}) {
  var t;
  if (n.state !== 0) return !1;
  if (n.value.type === "renderer" || ((t = n.value.versions) === null || t === void 0 ? void 0 : t.electron) != null) return O.Electron
}

function Po({
  productSub: n,
  browserKind: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  if ((t.value === "chrome" || t.value === "safari" || t.value === "opera" || t.value === "wechat") && n.value !== "20030107") return O.Unknown
}

function xo({
  userAgent: n
}) {
  if (n.state !== 0) return !1;
  if (/PhantomJS/i.test(n.value)) return O.PhantomJS;
  if (/Headless/i.test(n.value)) return O.HeadlessChrome;
  if (/Electron/i.test(n.value)) return O.Electron;
  if (/slimerjs/i.test(n.value)) return O.SlimerJS
}

function zo({
  webDriver: n
}) {
  if (n.state === 0 && n.value) return O.HeadlessChrome
}

function Mo({
  webGL: n
}) {
  if (n.state === 0) {
    const {
      vendor: t,
      renderer: e
    } = n.value;
    if (t == "Brian Paul" && e == "Mesa OffScreen") return O.HeadlessChrome
  }
}

function Co({
  windowExternal: n
}) {
  if (n.state !== 0) return !1;
  if (/Sequentum/i.test(n.value)) return O.Sequentum
}

function jo({
  windowSize: n,
  documentFocus: t
}) {
  if (n.state !== 0 || t.state !== 0) return !1;
  const {
    outerWidth: e,
    outerHeight: r
  } = n.value;
  if (t.value && e === 0 && r === 0) return O.HeadlessChrome
}

function Bo({
  distinctiveProps: n
}) {
  if (n.state !== 0) return !1;
  const t = n.value;
  let e;
  for (e in t)
    if (t[e]) return e
}
const Fo = {
  detectAppVersion: vo,
  detectDocumentAttributes: To,
  detectErrorTrace: So,
  detectEvalLengthInconsistency: ko,
  detectFunctionBind: Oo,
  detectLanguagesLengthInconsistency: Ao,
  detectNotificationPermissions: Io,
  detectPluginsArray: No,
  detectPluginsLengthInconsistency: Lo,
  detectProcess: Do,
  detectUserAgent: xo,
  detectWebDriver: zo,
  detectWebGL: Mo,
  detectWindowExternal: Co,
  detectWindowSize: jo,
  detectMimeTypesConsistent: Ro,
  detectProductSub: Po,
  detectDistinctiveProperties: Bo
};

function Uo() {
  const n = navigator.appVersion;
  if (n == null) throw new P(-1, "navigator.appVersion is undefined");
  return n
}

function Go() {
  if (document.documentElement === void 0) throw new P(-1, "document.documentElement is undefined");
  const {
    documentElement: n
  } = document;
  if (typeof n.getAttributeNames != "function") throw new P(-2, "document.documentElement.getAttributeNames is not a function");
  return n.getAttributeNames()
}

function qo() {
  try {
    null[0]()
  } catch (n) {
    if (n instanceof Error && n.stack != null) return n.stack.toString()
  }
  throw new P(-3, "errorTrace signal unexpected behaviour")
}

function Vo() {
  return eval.toString().length
}

function Wo() {
  if (Function.prototype.bind === void 0) throw new P(-2, "Function.prototype.bind is undefined");
  return Function.prototype.bind.toString()
}

function tn() {
  var n, t;
  const e = window,
    r = navigator;
  return ke(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, r.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 ? "chromium" : ke(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, r.vendor.indexOf("Apple") === 0, "getStorageUpdates" in r, "WebKitMediaKeys" in e]) >= 4 ? "webkit" : ke(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4 ? "gecko" : "unknown"
}

function Ho() {
  var n;
  const t = (n = navigator.userAgent) === null || n === void 0 ? void 0 : n.toLowerCase();
  return te(t, "edg/") ? "edge" : te(t, "trident") || te(t, "msie") ? "internet_explorer" : te(t, "wechat") ? "wechat" : te(t, "firefox") ? "firefox" : te(t, "opera") || te(t, "opr") ? "opera" : te(t, "chrome") ? "chrome" : te(t, "safari") ? "safari" : "unknown"
}

function Ko() {
  const n = tn(),
    t = n === "chromium",
    e = n === "gecko",
    r = window,
    o = navigator,
    i = "connection";
  return t ? ke([!("SharedWorker" in r), o[i] && "ontypechange" in o[i], !("sinkId" in new Audio)]) >= 2 : e ? ke(["onorientationchange" in r, "orientation" in r, /android/i.test(o.appVersion)]) >= 2 : !1
}

function $o() {
  return document.hasFocus === void 0 ? !1 : document.hasFocus()
}

function Xo() {
  const n = window;
  return ke([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Yo() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) tn() === "chromium" && Xo() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Jo() {
  if (navigator.mimeTypes === void 0) throw new P(-1, "navigator.mimeTypes is undefined");
  const {
    mimeTypes: n
  } = navigator;
  let t = Object.getPrototypeOf(n) === MimeTypeArray.prototype;
  for (let e = 0; e < n.length; e++) t && (t = Object.getPrototypeOf(n[e]) === MimeType.prototype);
  return t
}
async function Zo() {
  if (window.Notification === void 0) throw new P(-1, "window.Notification is undefined");
  if (navigator.permissions === void 0) throw new P(-1, "navigator.permissions is undefined");
  const {
    permissions: n
  } = navigator;
  if (typeof n.query != "function") throw new P(-2, "navigator.permissions.query is not a function");
  try {
    const t = await n.query({
      name: "notifications"
    });
    return window.Notification.permission === "denied" && t.state === "prompt"
  } catch {
    throw new P(-3, "notificationPermissions signal unexpected behaviour")
  }
}

function Qo() {
  if (navigator.plugins === void 0) throw new P(-1, "navigator.plugins is undefined");
  if (window.PluginArray === void 0) throw new P(-1, "window.PluginArray is undefined");
  return navigator.plugins instanceof PluginArray
}

function ei() {
  if (navigator.plugins === void 0) throw new P(-1, "navigator.plugins is undefined");
  if (navigator.plugins.length === void 0) throw new P(-3, "navigator.plugins.length is undefined");
  return navigator.plugins.length
}

function ti() {
  const {
    process: n
  } = window, t = "window.process is";
  if (n === void 0) throw new P(-1, `${t} undefined`);
  if (n && typeof n != "object") throw new P(-3, `${t} not an object`);
  return n
}

function ni() {
  const {
    productSub: n
  } = navigator;
  if (n === void 0) throw new P(-1, "navigator.productSub is undefined");
  return n
}

function ri() {
  if (navigator.connection === void 0) throw new P(-1, "navigator.connection is undefined");
  if (navigator.connection.rtt === void 0) throw new P(-1, "navigator.connection.rtt is undefined");
  return navigator.connection.rtt
}

function oi() {
  return navigator.userAgent
}

function ii() {
  if (navigator.webdriver == null) throw new P(-1, "navigator.webdriver is undefined");
  return navigator.webdriver
}

function ai() {
  const n = document.createElement("canvas");
  if (typeof n.getContext != "function") throw new P(-2, "HTMLCanvasElement.getContext is not a function");
  const t = n.getContext("webgl");
  if (t === null) throw new P(-4, "WebGLRenderingContext is null");
  if (typeof t.getParameter != "function") throw new P(-2, "WebGLRenderingContext.getParameter is not a function");
  const e = t.getParameter(t.VENDOR),
    r = t.getParameter(t.RENDERER);
  return {
    vendor: e,
    renderer: r
  }
}

function si() {
  if (window.external === void 0) throw new P(-1, "window.external is undefined");
  const {
    external: n
  } = window;
  if (typeof n.toString != "function") throw new P(-2, "window.external.toString is not a function");
  return n.toString()
}

function ci() {
  return {
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}

function ui() {
  const n = {
    [O.Awesomium]: {
      window: ["awesomium"]
    },
    [O.Cef]: {
      window: ["RunPerfTest"]
    },
    [O.CefSharp]: {
      window: ["CefSharp"]
    },
    [O.CoachJS]: {
      window: ["emit"]
    },
    [O.FMiner]: {
      window: ["fmget_targets"]
    },
    [O.Geb]: {
      window: ["geb"]
    },
    [O.NightmareJS]: {
      window: ["__nightmare", "nightmare"]
    },
    [O.Phantomas]: {
      window: ["__phantomas"]
    },
    [O.PhantomJS]: {
      window: ["callPhantom", "_phantom"]
    },
    [O.Rhino]: {
      window: ["spawn"]
    },
    [O.Selenium]: {
      window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
      document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
    },
    [O.WebDriverIO]: {
      window: ["wdioElectron"]
    },
    [O.WebDriver]: {
      window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
      document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
    },
    [O.HeadlessChrome]: {
      window: ["domAutomation", "domAutomationController"]
    }
  };
  let t;
  const e = {},
    r = pn(window);
  let o = [];
  window.document !== void 0 && (o = pn(window.document));
  for (t in n) {
    const i = n[t];
    if (i !== void 0) {
      const a = i.window === void 0 ? !1 : Ut(r, ...i.window),
        s = i.document === void 0 || !o.length ? !1 : Ut(o, ...i.document);
      e[t] = a || s
    }
  }
  return e
}
const li = {
  android: Ko,
  browserKind: Ho,
  browserEngineKind: tn,
  documentFocus: $o,
  userAgent: oi,
  appVersion: Uo,
  rtt: ri,
  windowSize: ci,
  pluginsLength: ei,
  pluginsArray: Qo,
  errorTrace: qo,
  productSub: ni,
  windowExternal: si,
  mimeTypesConsistent: Jo,
  evalLength: Vo,
  webGL: ai,
  webDriver: ii,
  languages: Yo,
  notificationPermissions: Zo,
  documentElementKeys: Go,
  functionBind: Wo,
  process: ti,
  distinctiveProps: ui
};
class di {
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
    const [t, e] = yo(this.components, Fo);
    return this.detections = t, e
  }
  async collect() {
    return this.components = await bo(li), this.components
  }
}

function _i() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/botd/v${wo}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function fi({
  monitoring: n = !0
} = {}) {
  n && _i();
  const t = new di;
  return await t.collect(), t
}
let Lt = null;
async function pi() {
  return await mi() ? {
    bot: !1
  } : (await hi()).detect()
}
async function mi() {
  var e;
  const n = navigator;
  if (!((e = n.brave) != null && e.isBrave) || !/Android|iPhone|iPad|iPod|Mobile/i.test(n.userAgent)) return !1;
  try {
    return await n.brave.isBrave()
  } catch {
    return !1
  }
}

function hi() {
  return Lt || (Lt = fi({
    monitoring: !1
  })), Lt
}
const gi = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function bR() {
  return wi() ? !1 : gi.test(navigator.userAgent)
}

function wi() {
  return !!(window != null && window.ReactNativeWebView)
}

function yi(n = void 0) {
  const t = (n == null ? void 0 : n.userAgent) ?? navigator.userAgent,
    e = (n == null ? void 0 : n.vendor) ?? navigator.vendor;
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(t) ? "Edge" : /\bOPR\/|\bOpera\//.test(t) ? "Opera" : /\bVivaldi\//.test(t) ? "Vivaldi" : /\bYaBrowser\//.test(t) ? "Yandex" : /\bSamsungBrowser\//.test(t) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(t) ? "UC Browser" : /\bDuckDuckGo\/|\bDdg\//.test(t) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /Chrome\/|CriOS\//.test(t) && /google/i.test(e) ? "Chrome" : /Safari\//.test(t) && /apple/i.test(e) ? "Safari" : "Unknown"
}
let Dt;

function bi() {
  return Dt || (Dt = vi()), Dt
}

function vi() {
  let n = 0;
  const t = [].constructor;
  try {
    (-1).toFixed(-1)
  } catch (e) {
    n = (e instanceof Error ? e.message : String(e)).length + (t + "").split(t.name).join("").length
  }
  switch (n) {
    case 80:
      return "Blink";
    case 58:
      return "Gecko";
    case 77:
      return "WebKit";
    default:
      return "Unknown"
  }
}
async function mn() {
  let n;
  try {
    n = document.createElement("canvas");
    const t = n.getContext("2d", {
      willReadFrequently: !1
    });
    if (!t) throw new Error("canvas context blocked");
    const e = Ti.replace(/!important/gm, ""),
      r = 75;
    Si({
      canvas: n,
      context: t,
      area: {
        width: r,
        height: r
      }
    });
    const o = n.toDataURL();
    n.width = 50, n.height = 50, t.font = `50px ${e}`, t.fillText("A", 7, 37);
    const i = n.toDataURL();
    n.width = 50, n.height = 50, t.font = `35px ${e}`, t.fillText("👾", 0, 37);
    const a = n.toDataURL();
    return {
      paintURI: o,
      textURI: i,
      emojiURI: a
    }
  } catch (t) {
    console.error(t);
    return
  } finally {
    Ei(n)
  }
}

function Ei(n) {
  n && (n.width = 0, n.height = 0, n.remove())
}
const Ti = `
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
`,
  Si = ({
    canvas: n,
    context: t,
    strokeText: e = !1,
    cssFontFamily: r = "",
    area: o = {
      width: 50,
      height: 50
    },
    rounds: i = 10,
    maxShadowBlur: a = 50,
    seed: s = 500,
    offset: u = 2001000001,
    multiplier: _ = 15e3
  }) => {
    if (!t) return;
    t.clearRect(0, 0, n.width, n.height), n.width = o.width, n.height = o.height, n.style && (n.style.display = "none");
    const l = (({
        seed: v,
        offset: g,
        multiplier: U
      }) => {
        let T = Number(v) % Number(g);
        return {
          getNextSeed: () => (T = Number(U) * T % Number(g), T)
        }
      })({
        seed: s,
        offset: u,
        multiplier: _
      }),
      {
        getNextSeed: b
      } = l,
      m = (v, g, U, T) => {
        const N = (v - 1) / g * (U || 1) || 0;
        return T ? N : Math.floor(N)
      },
      y = (v, g, U, T, N) => {
        const {
          width: G,
          height: _t
        } = U, It = v.createRadialGradient(m(N(), g, G), m(N(), g, _t), m(N(), g, G), m(N(), g, G), m(N(), g, _t), m(N(), g, G));
        It.addColorStop(0, T[m(N(), g, T.length)]), It.addColorStop(1, T[m(N(), g, T.length)]), v.fillStyle = It
      },
      S = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
      x = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U, _t = 2.99;
        v.font = `${G/_t}px ${r.replace(/!important/gm,"")}`, v.strokeText("👾A", m(T(), g, N), m(T(), g, G), m(T(), g, N))
      },
      oe = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.arc(m(T(), g, N), m(T(), g, G), m(T(), g, Math.min(N, G)), m(T(), g, 2 * Math.PI, !0), m(T(), g, 2 * Math.PI, !0)), v.stroke()
      },
      E = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.moveTo(m(T(), g, N), m(T(), g, G)), v.bezierCurveTo(m(T(), g, N), m(T(), g, G), m(T(), g, N), m(T(), g, G), m(T(), g, N), m(T(), g, G)), v.stroke()
      },
      k = (v, g, U, T) => {
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.moveTo(m(T(), g, N), m(T(), g, G)), v.quadraticCurveTo(m(T(), g, N), m(T(), g, G), m(T(), g, N), m(T(), g, G)), v.stroke()
      },
      j = (v, g, U, T) => {
        if (!("ellipse" in v)) return;
        const {
          width: N,
          height: G
        } = U;
        v.beginPath(), v.ellipse(m(T(), g, N), m(T(), g, G), m(T(), g, Math.floor(N / 2)), m(T(), g, Math.floor(G / 2)), m(T(), g, 2 * Math.PI, !0), m(T(), g, 2 * Math.PI, !0), m(T(), g, 2 * Math.PI, !0)), v.stroke()
      },
      F = [oe, E, k];
    bi() !== "WebKit" && F.push(j), e && F.push(x), [...Array(i)].forEach(v => {
      y(t, u, o, S, b), t.shadowBlur = m(b(), u, a, !0), t.shadowColor = S[m(b(), u, S.length)];
      const g = F[m(b(), u, F.length)];
      g(t, u, o, b), t.fill()
    })
  },
  hn = {
    7: ["Cambria Math", "Lucida Console"],
    8: ["Aldhabi", "Gadugi", "Myanmar Text", "Nirmala UI"],
    "8.1": ["Leelawadee UI", "Javanese Text", "Segoe UI Emoji"],
    10: ["HoloLens MDL2 Assets", "Segoe MDL2 Assets", "Bahnschrift", "Ink Free"],
    11: ["Segoe Fluent Icons"]
  },
  gn = {
    "10.9": ["Helvetica Neue", "Geneva"],
    "10.10": ["Kohinoor Devanagari Medium", "Luminari"],
    "10.11": ["PingFang HK Light"],
    "10.12": ["American Typewriter Semibold", "Futura Bold", "SignPainter-HouseScript Semibold"],
    "10.13-10.14": ["InaiMathi Bold"],
    "10.15-11": ["Galvji", "MuktaMahee Regular"],
    12: ["Noto Sans Gunjala Gondi Regular", "Noto Sans Masaram Gondi Regular", "Noto Serif Yezidi Regular"],
    13: ["Apple SD Gothic Neo ExtraBold", "STIX Two Math Regular", "STIX Two Text Regular", "Noto Sans Canadian Aboriginal Regular"]
  },
  wn = {
    "Microsoft Outlook": ["MS Outlook"],
    "Adobe Acrobat": ["ZWAdobeF"],
    LibreOffice: ["Amiri", "KACSTOffice", "Liberation Mono", "Source Code Pro"],
    OpenOffice: ["DejaVu Sans", "Gentium Book Basic", "OpenSymbol"]
  },
  ki = Object.keys(gn).map(n => gn[n]).flat(),
  Oi = Object.keys(hn).map(n => hn[n]).flat(),
  Ai = Object.keys(wn).map(n => wn[n]).flat(),
  Ri = ["Arimo", "Chilanka", "Cousine", "Jomolhari", "MONO", "Noto Color Emoji", "Ubuntu"],
  Ii = ["Dancing Script", "Droid Sans Mono", "Roboto"],
  Ni = [...ki, ...Oi, ...Ri, ...Ii, ...Ai].sort();
async function Li() {
  return await (async r => {
    try {
      let o = [];
      document.fonts.check(`0px "${Di()}"`) || (o = r.reduce((u, _) => (document.fonts.check(`0px "${_}"`) && u.push(_), u), []));
      const i = r.map(u => new FontFace(u, `local("${u}")`)),
        s = (await Promise.allSettled(i.map(u => u.load()))).reduce((u, _) => (_.status == "fulfilled" && u.push(_.value.family), u), []);
      return [...new Set([...o, ...s])].sort()
    } catch {
      return []
    }
  })(Ni)
}

function Di() {
  return String.fromCharCode(Math.random() * 26 + 97) + Math.random().toString(36).slice(-7)
}
const Pi = ["ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "SUBPIXEL_BITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "SHADING_LANGUAGE_VERSION", "VENDOR", "RENDERER", "VERSION", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_3D_TEXTURE_SIZE", "MAX_ELEMENTS_VERTICES", "MAX_ELEMENTS_INDICES", "MAX_TEXTURE_LOD_BIAS", "MAX_DRAW_BUFFERS", "MAX_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_UNIFORM_COMPONENTS", "MAX_ARRAY_TEXTURE_LAYERS", "MAX_PROGRAM_TEXEL_OFFSET", "MAX_VARYING_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "MAX_COLOR_ATTACHMENTS", "MAX_SAMPLES", "MAX_VERTEX_UNIFORM_BLOCKS", "MAX_FRAGMENT_UNIFORM_BLOCKS", "MAX_COMBINED_UNIFORM_BLOCKS", "MAX_UNIFORM_BUFFER_BINDINGS", "MAX_UNIFORM_BLOCK_SIZE", "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "MAX_VERTEX_OUTPUT_COMPONENTS", "MAX_FRAGMENT_INPUT_COMPONENTS", "MAX_SERVER_WAIT_TIMEOUT", "MAX_ELEMENT_INDEX", "MAX_CLIENT_WAIT_TIMEOUT_WEBGL"].sort(),
  xi = {
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
  zi = new Set(["CLIP_DEPTH_MODE_EXT", "CLIP_ORIGIN_EXT", "DEPTH_CLAMP_EXT", "GPU_DISJOINT_EXT", "POLYGON_OFFSET_CLAMP_EXT", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "VERTEX_ARRAY_BINDING_OES", "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "MAX_COLOR_ATTACHMENTS_WEBGL", "MAX_DRAW_BUFFERS_WEBGL"]);
async function Mi() {
  let n, t, e, r;
  try {
    let o = window;
    const i = o.document;
    "OffscreenCanvas" in window ? (n = new o.OffscreenCanvas(256, 256), t = new o.OffscreenCanvas(256, 256)) : (n = i.createElement("canvas"), t = i.createElement("canvas"));
    const a = bn(n, "webgl"),
      s = bn(t, "webgl2");
    if (e = a, r = s, !a) return;
    const u = (E, k) => {
        if (!E) return;
        const j = J(() => E.getShaderPrecisionFormat(E[k], E.LOW_FLOAT)),
          F = J(() => E.getShaderPrecisionFormat(E[k], E.MEDIUM_FLOAT)),
          q = J(() => E.getShaderPrecisionFormat(E[k], E.HIGH_FLOAT)),
          v = J(() => E.getShaderPrecisionFormat(E[k], E.HIGH_INT));
        return {
          LOW_FLOAT: j,
          MEDIUM_FLOAT: F,
          HIGH_FLOAT: q,
          HIGH_INT: v
        }
      },
      _ = (E, k) => {
        const j = {};
        if (!k) return j;
        for (const F in k) {
          const q = k[F];
          j[E + "." + F + ".precision"] = q ? J(() => q.precision) : void 0, j[E + "." + F + ".rangeMax"] = q ? J(() => q.rangeMax) : void 0, j[E + "." + F + ".rangeMin"] = q ? J(() => q.rangeMin) : void 0
        }
        return j
      },
      f = E => {
        const k = {};
        if (!E) return k;
        const j = E;
        for (const F of Pi) {
          const q = j[F];
          if (q === void 0) continue;
          const v = E.getParameter(q);
          v && ArrayBuffer.isView(v) ? k[F] = Array.from(v) : k[F] = v
        }
        return k
      },
      l = E => {
        if (!E) return [];
        const k = J(() => E.getContextAttributes());
        return k ? Object.keys(k).sort().map(j => `${j}=${k[j]}`) : []
      },
      b = E => {
        if (!E) return [];
        const k = [];
        for (const [j, F] of Object.entries(xi)) {
          const q = J(() => E.getExtension(j));
          if (q)
            for (const v of F) {
              const g = q[v];
              if (typeof g != "number") continue;
              if (!zi.has(v)) {
                k.push(`${v}=${g}`);
                continue
              }
              const U = J(() => E.getParameter(g));
              U == null ? k.push(`${v}=${g}`) : typeof U == "object" && "length" in U ? k.push(`${v}=${g}=${Array.from(U).join(",")}`) : k.push(`${v}=${g}=${U}`)
            }
        }
        return k.sort()
      },
      m = E => {
        const k = E ? E.getExtension("WEBGL_debug_renderer_info") : null;
        return !k || !E ? {} : {
          UNMASKED_VENDOR_WEBGL: E.getParameter(k.UNMASKED_VENDOR_WEBGL),
          UNMASKED_RENDERER_WEBGL: E.getParameter(k.UNMASKED_RENDERER_WEBGL)
        }
      },
      y = E => {
        if (!E) return [];
        const k = J(() => E.getSupportedExtensions());
        return k || []
      },
      S = {
        ...f(a),
        ...m(a)
      },
      x = {
        ...f(s),
        ...m(s)
      };
    return {
      extensions: [...y(a), ...y(s)],
      contextAttributes: l(a),
      contextAttributes2: l(s),
      extensionParameters: b(a),
      extensionParameters2: b(s),
      parameters: {
        ...S,
        ...x,
        ..._("VERTEX_SHADER", u(a, "VERTEX_SHADER")),
        ..._("FRAGMENT_SHADER", u(a, "FRAGMENT_SHADER"))
      }
    }
  } catch (o) {
    console.log(o);
    return
  } finally {
    yn(n, e), yn(t, r)
  }
}

function J(n) {
  try {
    return n()
  } catch {
    return
  }
}

function yn(n, t) {
  var e;
  if (n) {
    try {
      (e = t == null ? void 0 : t.getExtension("WEBGL_lose_context")) == null || e.loseContext()
    } catch {}
    n.width = 0, n.height = 0, n instanceof HTMLCanvasElement && n.remove()
  }
}

function bn(n, t) {
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
var ir = "5.2.0";

function Et(n, t) {
  return new Promise(e => setTimeout(e, n, t))
}

function Ci() {
  return new Promise(n => {
    const t = new MessageChannel;
    t.port1.onmessage = () => n(), t.port2.postMessage(null)
  })
}

function ji(n, t = 1 / 0) {
  const {
    requestIdleCallback: e
  } = window;
  return e ? new Promise(r => e.call(window, () => r(), {
    timeout: t
  })) : Et(Math.min(n, t))
}

function ar(n) {
  return !!n && typeof n.then == "function"
}

function vn(n, t) {
  try {
    const e = n();
    ar(e) ? e.then(r => t(!0, r), r => t(!1, r)) : t(!0, e)
  } catch (e) {
    t(!1, e)
  }
}
async function En(n, t, e = 16) {
  const r = Array(n.length);
  let o = Date.now();
  for (let i = 0; i < n.length; ++i) {
    r[i] = t(n[i], i);
    const a = Date.now();
    a >= o + e && (o = a, await Ci())
  }
  return r
}

function ze(n) {
  return n.then(void 0, () => {}), n
}

function Bi(n, t) {
  for (let e = 0, r = n.length; e < r; ++e)
    if (n[e] === t) return !0;
  return !1
}

function Fi(n, t) {
  return !Bi(n, t)
}

function nn(n) {
  return parseInt(n)
}

function Z(n) {
  return parseFloat(n)
}

function ne(n, t) {
  return typeof n == "number" && isNaN(n) ? t : n
}

function W(n) {
  return n.reduce((t, e) => t + (e ? 1 : 0), 0)
}

function sr(n, t = 1) {
  if (Math.abs(t) >= 1) return Math.round(n / t) * t;
  {
    const e = 1 / t;
    return Math.round(n * e) / e
  }
}

function Ui(n) {
  var t, e;
  const r = `Unexpected syntax '${n}'`,
    o = /^\s*([a-z-]*)(.*)$/i.exec(n),
    i = o[1] || void 0,
    a = {},
    s = /([.:#][\w-]+|\[.+?\])/gi,
    u = (_, f) => {
      a[_] = a[_] || [], a[_].push(f)
    };
  for (;;) {
    const _ = s.exec(o[2]);
    if (!_) break;
    const f = _[0];
    switch (f[0]) {
      case ".":
        u("class", f.slice(1));
        break;
      case "#":
        u("id", f.slice(1));
        break;
      case "[": {
        const l = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(f);
        if (l) u(l[1], (e = (t = l[4]) !== null && t !== void 0 ? t : l[5]) !== null && e !== void 0 ? e : "");
        else throw new Error(r);
        break
      }
      default:
        throw new Error(r)
    }
  }
  return [i, a]
}

function Gi(n) {
  const t = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e++) {
    const r = n.charCodeAt(e);
    if (r > 127) return new TextEncoder().encode(n);
    t[e] = r
  }
  return t
}

function ie(n, t) {
  const e = n[0] >>> 16,
    r = n[0] & 65535,
    o = n[1] >>> 16,
    i = n[1] & 65535,
    a = t[0] >>> 16,
    s = t[0] & 65535,
    u = t[1] >>> 16,
    _ = t[1] & 65535;
  let f = 0,
    l = 0,
    b = 0,
    m = 0;
  m += i + _, b += m >>> 16, m &= 65535, b += o + u, l += b >>> 16, b &= 65535, l += r + s, f += l >>> 16, l &= 65535, f += e + a, f &= 65535, n[0] = f << 16 | l, n[1] = b << 16 | m
}

function X(n, t) {
  const e = n[0] >>> 16,
    r = n[0] & 65535,
    o = n[1] >>> 16,
    i = n[1] & 65535,
    a = t[0] >>> 16,
    s = t[0] & 65535,
    u = t[1] >>> 16,
    _ = t[1] & 65535;
  let f = 0,
    l = 0,
    b = 0,
    m = 0;
  m += i * _, b += m >>> 16, m &= 65535, b += o * _, l += b >>> 16, b &= 65535, b += i * u, l += b >>> 16, b &= 65535, l += r * _, f += l >>> 16, l &= 65535, l += o * u, f += l >>> 16, l &= 65535, l += i * s, f += l >>> 16, l &= 65535, f += e * _ + r * u + o * s + i * a, f &= 65535, n[0] = f << 16 | l, n[1] = b << 16 | m
}

function ve(n, t) {
  const e = n[0];
  t %= 64, t === 32 ? (n[0] = n[1], n[1] = e) : t < 32 ? (n[0] = e << t | n[1] >>> 32 - t, n[1] = n[1] << t | e >>> 32 - t) : (t -= 32, n[0] = n[1] << t | e >>> 32 - t, n[1] = e << t | n[1] >>> 32 - t)
}

function $(n, t) {
  t %= 64, t !== 0 && (t < 32 ? (n[0] = n[1] >>> 32 - t, n[1] = n[1] << t) : (n[0] = n[1] << t - 32, n[1] = 0))
}

function B(n, t) {
  n[0] ^= t[0], n[1] ^= t[1]
}
const qi = [4283543511, 3981806797],
  Vi = [3301882366, 444984403];

function Tn(n) {
  const t = [0, n[0] >>> 1];
  B(n, t), X(n, qi), t[1] = n[0] >>> 1, B(n, t), X(n, Vi), t[1] = n[0] >>> 1, B(n, t)
}
const ft = [2277735313, 289559509],
  pt = [1291169091, 658871167],
  Sn = [0, 5],
  Wi = [0, 1390208809],
  Hi = [0, 944331445];

function Ki(n, t) {
  const e = Gi(n);
  t = t || 0;
  const r = [0, e.length],
    o = r[1] % 16,
    i = r[1] - o,
    a = [0, t],
    s = [0, t],
    u = [0, 0],
    _ = [0, 0];
  let f;
  for (f = 0; f < i; f = f + 16) u[0] = e[f + 4] | e[f + 5] << 8 | e[f + 6] << 16 | e[f + 7] << 24, u[1] = e[f] | e[f + 1] << 8 | e[f + 2] << 16 | e[f + 3] << 24, _[0] = e[f + 12] | e[f + 13] << 8 | e[f + 14] << 16 | e[f + 15] << 24, _[1] = e[f + 8] | e[f + 9] << 8 | e[f + 10] << 16 | e[f + 11] << 24, X(u, ft), ve(u, 31), X(u, pt), B(a, u), ve(a, 27), ie(a, s), X(a, Sn), ie(a, Wi), X(_, pt), ve(_, 33), X(_, ft), B(s, _), ve(s, 31), ie(s, a), X(s, Sn), ie(s, Hi);
  u[0] = 0, u[1] = 0, _[0] = 0, _[1] = 0;
  const l = [0, 0];
  switch (o) {
    case 15:
      l[1] = e[f + 14], $(l, 48), B(_, l);
    case 14:
      l[1] = e[f + 13], $(l, 40), B(_, l);
    case 13:
      l[1] = e[f + 12], $(l, 32), B(_, l);
    case 12:
      l[1] = e[f + 11], $(l, 24), B(_, l);
    case 11:
      l[1] = e[f + 10], $(l, 16), B(_, l);
    case 10:
      l[1] = e[f + 9], $(l, 8), B(_, l);
    case 9:
      l[1] = e[f + 8], B(_, l), X(_, pt), ve(_, 33), X(_, ft), B(s, _);
    case 8:
      l[1] = e[f + 7], $(l, 56), B(u, l);
    case 7:
      l[1] = e[f + 6], $(l, 48), B(u, l);
    case 6:
      l[1] = e[f + 5], $(l, 40), B(u, l);
    case 5:
      l[1] = e[f + 4], $(l, 32), B(u, l);
    case 4:
      l[1] = e[f + 3], $(l, 24), B(u, l);
    case 3:
      l[1] = e[f + 2], $(l, 16), B(u, l);
    case 2:
      l[1] = e[f + 1], $(l, 8), B(u, l);
    case 1:
      l[1] = e[f], B(u, l), X(u, ft), ve(u, 31), X(u, pt), B(a, u)
  }
  return B(a, r), B(s, r), ie(a, s), ie(s, a), Tn(a), Tn(s), ie(a, s), ie(s, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function $i(n) {
  var t;
  return {
    name: n.name,
    message: n.message,
    stack: (t = n.stack) === null || t === void 0 ? void 0 : t.split(`
`),
    ...n
  }
}

function Xi(n) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
}

function Yi(n) {
  return typeof n != "function"
}

function Ji(n, t) {
  const e = ze(new Promise(r => {
    const o = Date.now();
    vn(n.bind(null, t), (...i) => {
      const a = Date.now() - o;
      if (!i[0]) return r(() => ({
        error: i[1],
        duration: a
      }));
      const s = i[1];
      if (Yi(s)) return r(() => ({
        value: s,
        duration: a
      }));
      r(() => new Promise(u => {
        const _ = Date.now();
        vn(s, (...f) => {
          const l = a + Date.now() - _;
          if (!f[0]) return u({
            error: f[1],
            duration: l
          });
          u({
            value: f[1],
            duration: l
          })
        })
      }))
    })
  }));
  return function() {
    return e.then(o => o())
  }
}

function Zi(n, t, e, r) {
  const o = Object.keys(n).filter(a => Fi(e, a)),
    i = ze(En(o, a => Ji(n[a], t), r));
  return async function() {
    const s = await i,
      u = await En(s, l => ze(l()), r),
      _ = await Promise.all(u),
      f = {};
    for (let l = 0; l < o.length; ++l) f[o[l]] = _[l];
    return f
  }
}

function cr() {
  const n = window,
    t = navigator;
  return W(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function Qi() {
  const n = window,
    t = navigator;
  return W(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !cr()
}

function Re() {
  const n = window,
    t = navigator;
  return W(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
}

function Q() {
  const n = window,
    t = navigator;
  return W(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, t.vendor.indexOf("Apple") === 0, "RGBColor" in n, "WebKitMediaKeys" in n]) >= 4
}

function rn() {
  const n = window,
    {
      HTMLElement: t,
      Document: e
    } = n;
  return W(["safari" in n, !("ongestureend" in n), !("TouchEvent" in n), !("orientation" in n), t && !("autocapitalize" in t.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function ct() {
  const n = window;
  return Xi(n.print) && String(n.browser) === "[object WebPageNamespace]"
}

function ut() {
  var n, t;
  const e = window;
  return W(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function ea() {
  const n = window,
    t = navigator,
    {
      CSS: e
    } = n;
  return W(["userActivation" in t, e.supports("color", "light-dark(#000, #fff)"), e.supports("height", "1lh"), "globalPrivacyControl" in t]) >= 3
}

function ur() {
  const {
    CSS: n
  } = window;
  return W([n.supports("selector(::details-content)"), n.supports("selector(::before::marker)"), n.supports("selector(::after::marker)"), !("locale" in CompositionEvent.prototype)]) >= 3
}

function ta() {
  const n = window;
  return W([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function na() {
  const n = window,
    {
      URLPattern: t
    } = n;
  return W(["union" in Set.prototype, "Iterator" in n, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function ra() {
  const n = window,
    t = document,
    {
      CSS: e,
      Promise: r,
      AudioContext: o
    } = n;
  return W([r && "try" in r, "caretPositionFromPoint" in t, o && "onerror" in o.prototype, e.supports("ruby-align", "space-around")]) >= 3
}

function oa() {
  const n = window;
  return W(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
}

function lt() {
  const n = window,
    t = navigator,
    {
      CSS: e,
      HTMLButtonElement: r
    } = n;
  return W([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function ia() {
  if (navigator.platform === "iPad") return !0;
  const n = screen,
    t = n.width / n.height;
  return W(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function aa() {
  const n = document;
  return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
}

function sa() {
  const n = document;
  return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
}

function Rt() {
  const n = Re(),
    t = ut(),
    e = window,
    r = navigator,
    o = "connection";
  return n ? W([!("SharedWorker" in e), r[o] && "ontypechange" in r[o], !("sinkId" in new Audio)]) >= 2 : t ? W(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function ca() {
  const n = navigator,
    t = window,
    e = Audio.prototype,
    {
      visualViewport: r
    } = t;
  return W(["srLatency" in e, "srChannelCount" in e, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function ua() {
  return _a() ? -4 : la()
}

function la() {
  const n = window,
    t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
  if (!t) return -2;
  if (da()) return -1;
  const e = 4500,
    r = 5e3,
    o = new t(1, r, 44100),
    i = o.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  const a = o.createDynamicsCompressor();
  a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, i.connect(a), a.connect(o.destination), i.start(0);
  const [s, u] = fa(o), _ = ze(s.then(f => pa(f.getChannelData(0).subarray(e)), f => {
    if (f.name === "timeout" || f.name === "suspended") return -3;
    throw f
  }));
  return () => (u(), _)
}

function da() {
  return Q() && !rn() && !oa()
}

function _a() {
  return Q() && lt() && ct() || Re() && ca() && na()
}

function fa(n) {
  let i = () => {};
  return [new Promise((s, u) => {
    let _ = !1,
      f = 0,
      l = 0;
    n.oncomplete = y => s(y.renderedBuffer);
    const b = () => {
        setTimeout(() => u(kn("timeout")), Math.min(500, l + 5e3 - Date.now()))
      },
      m = () => {
        try {
          const y = n.startRendering();
          switch (ar(y) && ze(y), n.state) {
            case "running":
              l = Date.now(), _ && b();
              break;
            case "suspended":
              document.hidden || f++, _ && f >= 3 ? u(kn("suspended")) : setTimeout(m, 500);
              break
          }
        } catch (y) {
          u(y)
        }
      };
    m(), i = () => {
      _ || (_ = !0, l > 0 && b())
    }
  }), i]
}

function pa(n) {
  let t = 0;
  for (let e = 0; e < n.length; ++e) t += Math.abs(n[e]);
  return t
}

function kn(n) {
  const t = new Error(n);
  return t.name = n, t
}
async function lr(n, t, e = 50) {
  var r, o, i;
  const a = document;
  for (; !a.body;) await Et(e);
  const s = a.createElement("iframe");
  try {
    for (await new Promise((u, _) => {
        let f = !1;
        const l = () => {
            f = !0, u()
          },
          b = S => {
            f = !0, _(S)
          };
        s.onload = l, s.onerror = b;
        const {
          style: m
        } = s;
        m.setProperty("display", "block", "important"), m.position = "absolute", m.top = "0", m.left = "0", m.visibility = "hidden", t && "srcdoc" in s ? s.srcdoc = t : s.src = "about:blank", a.body.appendChild(s);
        const y = () => {
          var S, x;
          f || (((x = (S = s.contentWindow) === null || S === void 0 ? void 0 : S.document) === null || x === void 0 ? void 0 : x.readyState) === "complete" ? l() : setTimeout(y, 10))
        };
        y()
      }); !(!((o = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || o === void 0) && o.body);) await Et(e);
    return await n(s, s.contentWindow)
  } finally {
    (i = s.parentNode) === null || i === void 0 || i.removeChild(s)
  }
}

function ma(n) {
  const [t, e] = Ui(n), r = document.createElement(t ?? "div");
  for (const o of Object.keys(e)) {
    const i = e[o].join(" ");
    o === "style" ? ha(r.style, i) : r.setAttribute(o, i)
  }
  return r
}

function ha(n, t) {
  for (const e of t.split(";")) {
    const r = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(e);
    if (r) {
      const [, o, i, , a] = r;
      n.setProperty(o, i, a || "")
    }
  }
}

function ga() {
  let n = window;
  for (;;) {
    const t = n.parent;
    if (!t || t === n) return !1;
    try {
      if (t.location.origin !== n.location.origin) return !0
    } catch (e) {
      if (e instanceof Error && e.name === "SecurityError") return !0;
      throw e
    }
    n = t
  }
}
const wa = "mmMwWLliI0O&1",
  ya = "48px",
  Ee = ["monospace", "sans-serif", "serif"],
  On = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function ba() {
  return lr(async (n, {
    document: t
  }) => {
    const e = t.body;
    e.style.fontSize = ya;
    const r = t.createElement("div");
    r.style.setProperty("visibility", "hidden", "important");
    const o = {},
      i = {},
      a = m => {
        const y = t.createElement("span"),
          {
            style: S
          } = y;
        return S.position = "absolute", S.top = "0", S.left = "0", S.fontFamily = m, y.textContent = wa, r.appendChild(y), y
      },
      s = (m, y) => a(`'${m}',${y}`),
      u = () => Ee.map(a),
      _ = () => {
        const m = {};
        for (const y of On) m[y] = Ee.map(S => s(y, S));
        return m
      },
      f = m => Ee.some((y, S) => m[S].offsetWidth !== o[y] || m[S].offsetHeight !== i[y]),
      l = u(),
      b = _();
    e.appendChild(r);
    for (let m = 0; m < Ee.length; m++) o[Ee[m]] = l[m].offsetWidth, i[Ee[m]] = l[m].offsetHeight;
    return On.filter(m => f(b[m]))
  })
}

function va() {
  const n = navigator.plugins;
  if (!n) return;
  const t = [];
  for (let e = 0; e < n.length; ++e) {
    const r = n[e];
    if (!r) continue;
    const o = [];
    for (let i = 0; i < r.length; ++i) {
      const a = r[i];
      o.push({
        type: a.type,
        suffixes: a.suffixes
      })
    }
    t.push({
      name: r.name,
      description: r.description,
      mimeTypes: o
    })
  }
  return t
}

function Ea() {
  return Ta(Na())
}

function Ta(n) {
  let t = !1,
    e, r;
  const [o, i] = Sa();
  return ka(o, i) ? (t = Oa(i), n ? e = r = "skipped" : [e, r] = Aa(o, i)) : e = r = "unsupported", {
    winding: t,
    geometry: e,
    text: r
  }
}

function Sa() {
  const n = document.createElement("canvas");
  return n.width = 1, n.height = 1, [n, n.getContext("2d")]
}

function ka(n, t) {
  return !!(t && n.toDataURL)
}

function Oa(n) {
  return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
}

function Aa(n, t) {
  Ra(n, t);
  const e = Pt(n),
    r = Pt(n);
  return e !== r ? ["unstable", "unstable"] : (Ia(n, t), [Pt(n), e])
}

function Ra(n, t) {
  n.width = 240, n.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  const e = "Cwm fjordbank gly 😃";
  t.fillText(e, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(e, 4, 45)
}

function Ia(n, t) {
  n.width = 122, n.height = 110, t.globalCompositeOperation = "multiply";
  for (const [e, r, o] of [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]) t.fillStyle = e, t.beginPath(), t.arc(r, o, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill();
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function Pt(n) {
  return n.toDataURL()
}

function Na() {
  const n = Q() && lt() && ct(),
    t = ut() && ea();
  return n || t
}

function La() {
  const n = navigator;
  let t = 0,
    e;
  n.maxTouchPoints !== void 0 ? t = nn(n.maxTouchPoints) : n.msMaxTouchPoints !== void 0 && (t = n.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), e = !0
  } catch {
    e = !1
  }
  const r = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: e,
    touchStart: r
  }
}

function Da() {
  return navigator.oscpu
}

function Pa() {
  const n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) Re() && ta() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    const r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function xa() {
  return window.screen.colorDepth
}

function za() {
  return ne(Z(navigator.deviceMemory), void 0)
}

function Ma() {
  if (!(Q() && lt() && ct())) return Ca()
}

function Ca() {
  const n = screen,
    t = r => ne(nn(r), null),
    e = [t(n.width), t(n.height)];
  return e.sort().reverse(), e
}
const ja = 2500,
  Ba = 10;
let gt, xt;

function Fa() {
  if (xt !== void 0) return;
  const n = () => {
    const t = Gt();
    qt(t) ? xt = setTimeout(n, ja) : (gt = t, xt = void 0)
  };
  n()
}

function Ua() {
  return Fa(), async () => {
    let n = Gt();
    if (qt(n)) {
      if (gt) return [...gt];
      aa() && (await sa(), n = Gt())
    }
    return qt(n) || (gt = n), n
  }
}

function Ga() {
  const n = Q() && lt() && ct(),
    t = ut() && ur();
  if (n || t) return () => Promise.resolve(void 0);
  const e = Ua();
  return async () => {
    const r = await e(),
      o = i => i === null ? null : sr(i, Ba);
    return [o(r[0]), o(r[1]), o(r[2]), o(r[3])]
  }
}

function Gt() {
  const n = screen;
  return [ne(Z(n.availTop), null), ne(Z(n.width) - Z(n.availWidth) - ne(Z(n.availLeft), 0), null), ne(Z(n.height) - Z(n.availHeight) - ne(Z(n.availTop), 0), null), ne(Z(n.availLeft), null)]
}

function qt(n) {
  for (let t = 0; t < 4; ++t)
    if (n[t]) return !1;
  return !0
}

function qa() {
  const n = Va();
  return n !== void 0 && ut() && ur() ? n >= 8 ? 8 : 4 : n
}

function Va() {
  return ne(nn(navigator.hardwareConcurrency), void 0)
}

function Wa() {
  var n;
  const t = (n = window.Intl) === null || n === void 0 ? void 0 : n.DateTimeFormat;
  if (t) {
    const r = new t().resolvedOptions().timeZone;
    if (r) return r
  }
  const e = -Ha();
  return `UTC${e>=0?"+":""}${e}`
}

function Ha() {
  const n = new Date().getFullYear();
  return Math.max(Z(new Date(n, 0, 1).getTimezoneOffset()), Z(new Date(n, 6, 1).getTimezoneOffset()))
}

function Ka() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function $a() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function Xa() {
  if (!(cr() || Qi())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function Ya() {
  return !!window.openDatabase
}

function Ja() {
  return navigator.cpuClass
}

function Za() {
  const {
    platform: n
  } = navigator;
  return n === "MacIntel" && Q() && !rn() ? ia() ? "iPad" : "iPhone" : n
}

function Qa() {
  return navigator.vendor || ""
}

function es() {
  const n = [];
  for (const t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
    const e = window[t];
    e && typeof e == "object" && n.push(t)
  }
  return n.sort()
}

function ts() {
  const n = document;
  try {
    n.cookie = "cookietest=1; SameSite=Strict;";
    const t = n.cookie.indexOf("cookietest=") !== -1;
    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function ns() {
  const n = atob;
  return {
    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', n("I0JveC1CYW5uZXItYWRz")],
    abpvn: [".quangcao", "#mobileCatfish", n("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
    adBlockFinland: [".mainostila", n("LnNwb25zb3JpdA=="), ".ylamainos", n("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", n("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", n("LmhlYWRlci1ibG9ja2VkLWFk"), n("I2FkX2Jsb2NrZXI=")],
    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
    adGuardBase: [".BetterJsPopOverlay", n("I2FkXzMwMFgyNTA="), n("I2Jhbm5lcmZsb2F0MjI="), n("I2NhbXBhaWduLWJhbm5lcg=="), n("I0FkLUNvbnRlbnQ=")],
    adGuardChinese: [n("LlppX2FkX2FfSA=="), n("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", n("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), n("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
    adGuardFrench: ["#pavePub", n("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", n("LmFkc19iYW4=")],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: ["#kauli_yad_1", n("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), n("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), n("LmFkZ29vZ2xl"), n("Ll9faXNib29zdFJldHVybkFk")],
    adGuardMobile: [n("YW1wLWF1dG8tYWRz"), n("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", n("I2FkX2ludmlld19hcmVh")],
    adGuardRussian: [n("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), n("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', n("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
    adGuardSocial: [n("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), n("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
    adGuardTrackingProtection: ["#qoo-counter", n("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), n("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), n("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
    adGuardTurkish: ["#backkapat", n("I3Jla2xhbWk="), n("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), n("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), n("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
    bulgarian: [n("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
    easyList: [".yb-floorad", n("LndpZGdldF9wb19hZHNfd2lkZ2V0"), n("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", n("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
    easyListChina: [n("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), n("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", n("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
    easyListCzechSlovak: ["#onlajny-stickers", n("I3Jla2xhbW5pLWJveA=="), n("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", n("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
    easyListDutch: [n("I2FkdmVydGVudGll"), n("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", n("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
    easyListGermany: ["#SSpotIMPopSlider", n("LnNwb25zb3JsaW5rZ3J1ZW4="), n("I3dlcmJ1bmdza3k="), n("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), n("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
    easyListItaly: [n("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", n("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
    easyListLithuania: [n("LnJla2xhbW9zX3RhcnBhcw=="), n("LnJla2xhbW9zX251b3JvZG9z"), n("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), n("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), n("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
    estonian: [n("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
    frellwitSwedish: [n("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), n("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", n("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
    greekAdBlock: [n("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), n("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), n("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", n("LmFkX19tYWlu"), n("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
    icelandicAbp: [n("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
    latvian: [n("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), n("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
    listKr: [n("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), n("I2xpdmVyZUFkV3JhcHBlcg=="), n("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), n("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
    listeAr: [n("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", n("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), n("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), n("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
    listeFr: [n("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), n("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), n("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
    officialPolish: ["#ceneo-placeholder-ceneo-12", n("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), n("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), n("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), n("ZGl2I3NrYXBpZWNfYWQ=")],
    ro: [n("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), n("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), n("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
    ruAd: [n("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), n("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), n("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
    thaiAds: ["a[href*=macau-uta-popup]", n("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), n("LmFkczMwMHM="), ".bumq", ".img-kosana"],
    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", n("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
  }
}
async function rs({
  debug: n
} = {}) {
  if (!os()) return;
  const t = ns(),
    e = Object.keys(t),
    r = [].concat(...e.map(a => t[a])),
    o = await is(r);
  n && as(t, o);
  const i = e.filter(a => {
    const s = t[a];
    return W(s.map(_ => o[_])) > s.length * .6
  });
  return i.sort(), i
}

function os() {
  return Q() || Rt()
}
async function is(n) {
  var t;
  const e = document,
    r = e.createElement("div"),
    o = new Array(n.length),
    i = {};
  An(r);
  for (let a = 0; a < n.length; ++a) {
    const s = ma(n[a]);
    s.tagName === "DIALOG" && s.show();
    const u = e.createElement("div");
    An(u), u.appendChild(s), r.appendChild(u), o[a] = s
  }
  for (; !e.body;) await Et(50);
  e.body.appendChild(r);
  try {
    for (let a = 0; a < n.length; ++a) o[a].offsetParent || (i[n[a]] = !0)
  } finally {
    (t = r.parentNode) === null || t === void 0 || t.removeChild(r)
  }
  return i
}

function An(n) {
  n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
}

function as(n, t) {
  let e = "DOM blockers debug:\n```";
  for (const r of Object.keys(n)) {
    e += `
${r}:`;
    for (const o of n[r]) e += `
  ${t[o]?"🚫":"➡️"} ${o}`
  }
  console.log(`${e}
\`\`\``)
}

function ss() {
  for (const n of ["rec2020", "p3", "srgb"])
    if (matchMedia(`(color-gamut: ${n})`).matches) return n
}

function cs() {
  if (Rn("inverted")) return !0;
  if (Rn("none")) return !1
}

function Rn(n) {
  return matchMedia(`(inverted-colors: ${n})`).matches
}

function us() {
  if (In("active")) return !0;
  if (In("none")) return !1
}

function In(n) {
  return matchMedia(`(forced-colors: ${n})`).matches
}
const ls = 100;

function ds() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (let n = 0; n <= ls; ++n)
      if (matchMedia(`(max-monochrome: ${n})`).matches) return n;
    throw new Error("Too high value")
  }
}

function _s() {
  if (Te("no-preference")) return 0;
  if (Te("high") || Te("more")) return 1;
  if (Te("low") || Te("less")) return -1;
  if (Te("forced")) return 10
}

function Te(n) {
  return matchMedia(`(prefers-contrast: ${n})`).matches
}

function fs() {
  if (Nn("reduce")) return !0;
  if (Nn("no-preference")) return !1
}

function Nn(n) {
  return matchMedia(`(prefers-reduced-motion: ${n})`).matches
}

function ps() {
  if (Ln("reduce")) return !0;
  if (Ln("no-preference")) return !1
}

function Ln(n) {
  return matchMedia(`(prefers-reduced-transparency: ${n})`).matches
}

function ms() {
  if (Dn("high")) return !0;
  if (Dn("standard")) return !1
}

function Dn(n) {
  return matchMedia(`(dynamic-range: ${n})`).matches
}
const L = Math,
  H = () => 0;

function hs() {
  const n = L.acos || H,
    t = L.acosh || H,
    e = L.asin || H,
    r = L.asinh || H,
    o = L.atanh || H,
    i = L.atan || H,
    a = L.sin || H,
    s = L.sinh || H,
    u = L.cos || H,
    _ = L.cosh || H,
    f = L.tan || H,
    l = L.tanh || H,
    b = L.exp || H,
    m = L.expm1 || H,
    y = L.log1p || H,
    S = g => L.pow(L.PI, g),
    x = g => L.log(g + L.sqrt(g * g - 1)),
    oe = g => L.log(g + L.sqrt(g * g + 1)),
    E = g => L.log((1 + g) / (1 - g)) / 2,
    k = g => L.exp(g) - 1 / L.exp(g) / 2,
    j = g => (L.exp(g) + 1 / L.exp(g)) / 2,
    F = g => L.exp(g) - 1,
    q = g => (L.exp(2 * g) - 1) / (L.exp(2 * g) + 1),
    v = g => L.log(1 + g);
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: x(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: oe(1),
    atanh: o(.5),
    atanhPf: E(.5),
    atan: i(.5),
    sin: a(-1e300),
    sinh: s(1),
    sinhPf: k(1),
    cos: u(10.000000000123),
    cosh: _(1),
    coshPf: j(1),
    tan: f(-1e300),
    tanh: l(1),
    tanhPf: q(1),
    exp: b(1),
    expm1: m(1),
    expm1Pf: F(1),
    log1p: y(10),
    log1pPf: v(10),
    powPI: S(-100)
  }
}
const gs = "mmMwWLliI0fiflO&1",
  zt = {
    default: [],
    apple: [{
      font: "-apple-system-body"
    }],
    serif: [{
      fontFamily: "serif"
    }],
    sans: [{
      fontFamily: "sans-serif"
    }],
    mono: [{
      fontFamily: "monospace"
    }],
    min: [{
      fontSize: "1px"
    }],
    system: [{
      fontFamily: "system-ui"
    }]
  };

function ws() {
  return bs((n, t, e) => {
    const r = {},
      o = {};
    for (const a of Object.keys(zt)) {
      const [s = {}, u = gs] = zt[a], _ = n.createElement("span");
      _.textContent = u, _.style.whiteSpace = "nowrap";
      for (const f of Object.keys(s)) {
        const l = s[f];
        l !== void 0 && (_.style[f] = l)
      }
      r[a] = _, t.append(n.createElement("br"), _)
    }
    const i = Re() && ra();
    for (const a of Object.keys(zt)) {
      const s = r[a].getBoundingClientRect().width;
      o[a] = i ? ys(s * e.devicePixelRatio) : s
    }
    return o
  })
}

function ys(n) {
  const t = Rt() ? 0 : 3,
    e = Math.pow(10, t);
  return Math.floor(n * e) / e
}

function bs(n, t = 4e3) {
  return lr((e, r) => {
    const o = r.document,
      i = o.body,
      a = i.style;
    a.width = `${t}px`, a.webkitTextSizeAdjust = a.textSizeAdjust = "none", Re() ? i.style.zoom = `${1/r.devicePixelRatio}` : Q() && (i.style.zoom = "reset");
    const s = o.createElement("div");
    return s.textContent = [...Array(t / 20 << 0)].map(() => "word").join(" "), i.appendChild(s), n(o, i, r)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function vs() {
  return navigator.pdfViewerEnabled
}

function Es() {
  const n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
}

function Ts() {
  const {
    ApplePaySession: n
  } = window;
  if (typeof(n == null ? void 0 : n.canMakePayments) != "function") return -1;
  if (Ss()) return -3;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (t) {
    return ks(t)
  }
}
const Ss = ga;

function ks(n) {
  if (n instanceof Error && n.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
  throw n
}

function Os() {
  var n;
  const t = document.createElement("a"),
    e = (n = t.attributionSourceId) !== null && n !== void 0 ? n : t.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
const dr = -1,
  _r = -2,
  As = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Rs = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Is = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Ns = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  fr = "WEBGL_debug_renderer_info",
  Ls = "WEBGL_polygon_mode";

function Ds({
  cache: n
}) {
  var t, e, r, o, i, a;
  const s = pr(n);
  if (!s) return dr;
  if (!hr(s)) return _r;
  const u = mr() ? null : s.getExtension(fr);
  return {
    version: ((t = s.getParameter(s.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((e = s.getParameter(s.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = s.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((o = s.getParameter(s.RENDERER)) === null || o === void 0 ? void 0 : o.toString()) || "",
    rendererUnmasked: u ? (i = s.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((a = s.getParameter(s.SHADING_LANGUAGE_VERSION)) === null || a === void 0 ? void 0 : a.toString()) || ""
  }
}

function Ps({
  cache: n
}) {
  const t = pr(n);
  if (!t) return dr;
  if (!hr(t)) return _r;
  const e = t.getSupportedExtensions(),
    r = t.getContextAttributes(),
    o = [],
    i = [],
    a = [],
    s = [],
    u = [];
  if (r)
    for (const f of Object.keys(r)) i.push(`${f}=${r[f]}`);
  const _ = Pn(t);
  for (const f of _) {
    const l = t[f];
    a.push(`${f}=${l}${As.has(l)?`=${t.getParameter(l)}`:""}`)
  }
  if (e)
    for (const f of e) {
      if (f === fr && mr() || f === Ls && Ms()) continue;
      const l = t.getExtension(f);
      if (!l) {
        o.push(f);
        continue
      }
      for (const b of Pn(l)) {
        const m = l[b];
        s.push(`${b}=${m}${Rs.has(m)?`=${t.getParameter(m)}`:""}`)
      }
    }
  for (const f of Is)
    for (const l of Ns) {
      const b = xs(t, f, l);
      u.push(`${f}.${l}=${b.join(",")}`)
    }
  return s.sort(), a.sort(), {
    contextAttributes: i,
    parameters: a,
    shaderPrecisions: u,
    extensions: e,
    extensionParameters: s,
    unsupportedExtensions: o
  }
}

function pr(n) {
  if (n.webgl) return n.webgl.context;
  const t = document.createElement("canvas");
  let e;
  t.addEventListener("webglCreateContextError", () => e = void 0);
  for (const r of ["webgl", "experimental-webgl"]) {
    try {
      e = t.getContext(r)
    } catch {}
    if (e) break
  }
  return n.webgl = {
    context: e
  }, e
}

function xs(n, t, e) {
  const r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function Pn(n) {
  return Object.keys(n.__proto__).filter(zs)
}

function zs(n) {
  return typeof n == "string" && !n.match(/[^A-Z0-9_x]/)
}

function mr() {
  return ut()
}

function Ms() {
  return Re() || Q()
}

function hr(n) {
  return typeof n.getParameter == "function"
}

function Cs() {
  if (!(Rt() || Q())) return -2;
  if (!window.AudioContext) return -1;
  const t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function js() {
  if (!window.Intl) return -1;
  const n = window.Intl.DateTimeFormat;
  if (!n) return -2;
  const t = n().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}

function Bs(n) {
  return /not/i.test(n)
}
async function Fs() {
  const n = navigator.userAgentData;
  if (!n) return;
  const t = n.brands.filter(({
      brand: o
    }) => !Bs(o)).map(({
      brand: o
    }) => o),
    r = {
      brands: t.length > 1 ? t.filter(o => o !== "Chromium") : t,
      mobile: n.mobile,
      platform: n.platform
    };
  if (n.getHighEntropyValues) try {
    const o = await n.getHighEntropyValues(["architecture", "bitness", "model", "platformVersion"]);
    r.architecture = o.architecture, r.bitness = o.bitness, r.model = o.model, r.platformVersion = o.platformVersion
  } catch (o) {
    if (o instanceof DOMException && o.name === "NotAllowedError") r.highEntropyStatus = "not_allowed";
    else throw o
  }
  return r
}
const Us = {
  userAgentData: Fs,
  fonts: ba,
  domBlockers: rs,
  fontPreferences: ws,
  audio: ua,
  screenFrame: Ga,
  canvas: Ea,
  osCpu: Da,
  languages: Pa,
  colorDepth: xa,
  deviceMemory: za,
  screenResolution: Ma,
  hardwareConcurrency: qa,
  timezone: Wa,
  sessionStorage: Ka,
  localStorage: $a,
  indexedDB: Xa,
  openDatabase: Ya,
  cpuClass: Ja,
  platform: Za,
  plugins: va,
  touchSupport: La,
  vendor: Qa,
  vendorFlavors: es,
  cookiesEnabled: ts,
  colorGamut: ss,
  invertedColors: cs,
  forcedColors: us,
  monochrome: ds,
  contrast: _s,
  reducedMotion: fs,
  reducedTransparency: ps,
  hdr: ms,
  math: hs,
  pdfViewerEnabled: vs,
  architecture: Es,
  applePay: Ts,
  privateClickMeasurement: Os,
  audioBaseLatency: Cs,
  dateTimeLocale: js,
  webGlBasics: Ds,
  webGlExtensions: Ps
};

function Gs(n) {
  return Zi(Us, n, [])
}
const qs = "$ if upgrade to Pro: https://fingerprint.com/github/?utm_source=oss&utm_medium=referral&utm_campaign=confidence_score";

function Vs(n) {
  const t = Ws(n),
    e = Hs(t);
  return {
    score: t,
    comment: qs.replace(/\$/g, `${e}`)
  }
}

function Ws(n) {
  if (Rt()) return .4;
  if (Q()) return rn() && !(lt() && ct()) ? .5 : .3;
  const t = "value" in n.platform ? n.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function Hs(n) {
  return sr(.99 + .01 * n, 1e-4)
}

function Ks(n) {
  let t = "";
  for (const e of Object.keys(n).sort()) {
    const r = n[e],
      o = "error" in r ? "error" : JSON.stringify(r.value);
    t += `${t?"|":""}${e.replace(/([:|\\])/g,"\\$1")}:${o}`
  }
  return t
}

function gr(n) {
  return JSON.stringify(n, (t, e) => e instanceof Error ? $i(e) : e, 2)
}

function wr(n) {
  return Ki(Ks(n))
}

function $s(n) {
  let t;
  const e = Vs(n);
  return {
    get visitorId() {
      return t === void 0 && (t = wr(this.components)), t
    },
    set visitorId(r) {
      t = r
    },
    confidence: e,
    components: n,
    version: ir
  }
}

function Xs(n = 50) {
  return ji(n, n * 2)
}

function Ys(n, t) {
  const e = Date.now();
  return {
    async get(r) {
      const o = Date.now(),
        i = await n(),
        a = $s(i);
      return (t || r != null && r.debug) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${a.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${o-e}
visitorId: ${a.visitorId}
components: ${gr(i)}
\`\`\``), a
    }
  }
}

function Js() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    const n = new XMLHttpRequest;
    n.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${ir}/npm-monitoring`, !0), n.send()
  } catch (n) {
    console.error(n)
  }
}
async function Zs(n = {}) {
  const {
    delayFallback: t,
    debug: e,
    monitoring: r = !0
  } = n;
  r && Js(), await Xs(t);
  const o = Gs({
    cache: {},
    debug: e
  });
  return Ys(o, e)
}
var yr = {
  load: Zs,
  hashComponents: wr,
  componentsToDebugString: gr
};
let Mt = null;
async function Qs() {
  return Mt || (Mt = yr.load()), Mt
}
async function Vt() {
  return ec().then(n => n.visitorId)
}
async function ec() {
  var m;
  const t = await (await Qs()).get();
  let e = t.components;
  const r = yi(),
    o = navigator.userAgent.toLowerCase(),
    i = o.includes("iphone"),
    a = o.includes("macintosh"),
    s = i || a,
    u = o.includes("android");
  if (s) e = t.components;
  else if (r === "Chrome") {
    const {
      languages: y,
      ...S
    } = t.components;
    e = S
  } else if (r === "Firefox") {
    const {
      languages: y,
      dateTimeLocale: S,
      ...x
    } = t.components;
    e = x
  } else if (r === "Brave") {
    const {
      fonts: y,
      audio: S,
      canvas: x,
      hardwareConcurrency: oe,
      plugins: E,
      deviceMemory: k,
      languages: j,
      dateTimeLocale: F,
      ...q
    } = t.components;
    e = q
  } else {
    const {
      languages: y,
      ...S
    } = t.components;
    e = S
  }(r === "Safari" || u) && (e = {
    userAgent: {
      value: navigator.userAgent,
      duration: 0
    },
    ...e
  }), r === "Safari" && (e = {
    canvas2d: {
      value: await mn(),
      duration: 0
    },
    canvasWebgl: {
      value: await Mi(),
      duration: 0
    },
    ...e
  }), r === "Firefox" && (e = {
    ...e,
    fonts: {
      value: [(m = e.fonts) == null ? void 0 : m.value, await Li()],
      duration: e.fonts.duration
    }
  }), u && (e = {
    canvas2d: {
      value: await mn(),
      duration: 0
    },
    ...e
  });
  const _ = yr.hashComponents(e),
    f = _.length,
    l = f >> 2 | 2;
  return {
    visitorId: _.slice(0, l) + (f * 5).toString(16) + _.slice(l + (f >> 4)),
    components: e
  }
}
const xn = "theme";
var Me, Ce, je, Be, Fe, Ue, Ge, qe, Ve, We, He;
class tc {
  constructor() {
    D(this, Me, V(!1));
    D(this, Ce, V(!1));
    D(this, je, V(!1));
    D(this, Be, V(0));
    D(this, Fe, V(!1));
    D(this, Ue, V(vt(nc())));
    D(this, Ge, V(null));
    D(this, qe, V(!1));
    D(this, Ve, V("custom-winter"));
    D(this, We, V(vt(Date.now())));
    D(this, He, V(void 0));
    setInterval(() => {
      C(w(this, We), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(xn), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return M(w(this, Me))
  }
  set dropletsDialogOpen(t) {
    C(w(this, Me), t, !0)
  }
  get pendingHistoryDialogOpen() {
    return M(w(this, Ce))
  }
  set pendingHistoryDialogOpen(t) {
    C(w(this, Ce), t, !0)
  }
  get storeDialogOpen() {
    return M(w(this, je))
  }
  set storeDialogOpen(t) {
    C(w(this, je), t, !0)
  }
  get storeTabIndex() {
    return M(w(this, Be))
  }
  set storeTabIndex(t) {
    C(w(this, Be), t, !0)
  }
  get muted() {
    return M(w(this, Fe))
  }
  set muted(t) {
    C(w(this, Fe), t, !0)
  }
  get language() {
    return M(w(this, Ue))
  }
  set language(t) {
    C(w(this, Ue), t, !0)
  }
  get map() {
    return M(w(this, Ge))
  }
  set map(t) {
    C(w(this, Ge), t)
  }
  get automatedClicks() {
    return M(w(this, qe))
  }
  set automatedClicks(t) {
    C(w(this, qe), t, !0)
  }
  get theme() {
    return M(w(this, Ve))
  }
  set theme(t) {
    C(w(this, Ve), t, !0), localStorage.setItem(xn, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return M(w(this, We))
  }
  get captcha() {
    return rc ? M(w(this, He)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    C(w(this, He), t, !0)
  }
}
Me = new WeakMap, Ce = new WeakMap, je = new WeakMap, Be = new WeakMap, Fe = new WeakMap, Ue = new WeakMap, Ge = new WeakMap, qe = new WeakMap, Ve = new WeakMap, We = new WeakMap, He = new WeakMap;
const br = new tc;

function nc() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const rc = ho.toLowerCase() !== "false",
  oc = `
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
async function ic() {
  try {
    const n = await fetch(`${en}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await ac(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function ac(n, t) {
  return new Promise(e => {
    const r = new Blob([oc], {
        type: "application/javascript"
      }),
      o = URL.createObjectURL(r),
      i = new Worker(o),
      a = setTimeout(() => {
        i.terminate(), URL.revokeObjectURL(o), e(null)
      }, 12e4);
    i.onmessage = s => {
      clearTimeout(a), i.terminate(), URL.revokeObjectURL(o), s.data.error ? e(null) : e(s.data.nonce)
    }, i.onerror = () => {
      clearTimeout(a), i.terminate(), URL.revokeObjectURL(o), e(null)
    }, i.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const vr = 3;
var Ke, $e;
class sc {
  constructor() {
    D(this, Ke, V(null));
    D(this, $e, V(0))
  }
  get current() {
    return M(w(this, Ke))
  }
  set current(t) {
    C(w(this, Ke), t, !0)
  }
  get errorCount() {
    return M(w(this, $e))
  }
  set errorCount(t) {
    C(w(this, $e), t, !0)
  }
}
Ke = new WeakMap, $e = new WeakMap;
const K = new sc;
async function zn(n) {
  if (n === 1) return cc();
  if (n === 2) {
    const t = await Er();
    return t ? Mn("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await uc();
    return t ? Mn("hcaptcha", t) : !1
  }
  return n === 4 ? lc() : !1
}
async function cc() {
  for (let n = 0; n < vr; n++) try {
    const t = await ic();
    if (!t) continue;
    return await le.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function Mn(n, t) {
  try {
    const e = await le.postCaptchaSession({
      provider: n,
      token: t
    });
    return await le.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const Oe = {};

function Er() {
  return Tr(2)
}

function uc() {
  return Tr(3)
}

function Tr(n) {
  const t = Oe[n];
  if (t) return t;
  const e = new Promise(r => {
    K.errorCount = 0, K.current = {
      tier: n,
      resolve: o => {
        delete Oe[n], r(o)
      }
    }
  });
  return Oe[n] = e, e
}

function lc() {
  const n = Oe[4];
  if (n) return n;
  const t = new Promise(e => {
    K.errorCount = 0, K.current = {
      tier: 4,
      resolve: r => {
        delete Oe[4], e(r)
      }
    }
  });
  return Oe[4] = t, t
}

function vR(n) {
  const t = K.current;
  !t || t.tier === 4 || (t.resolve(n), K.current = null)
}

function ER() {
  const n = K.current;
  !n || n.tier === 4 || (K.errorCount += 1, K.errorCount >= vr && (n.resolve(void 0), K.current = null))
}

function TR() {
  const n = K.current;
  !n || n.tier !== 4 || (n.resolve(!0), K.current = null)
}

function SR() {
  const n = K.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), K.current = null)
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const dc = () => "Your account has been suspended for breaking the rules",
  _c = () => "Sua conta foi suspensa por quebrar as regras",
  fc = () => "您的账号因违反规则已被暂停",
  pc = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  mc = () => "Tu cuenta ha sido suspendida por infringir las regras",
  hc = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  gc = () => "Il tuo account è stato sospeso per aver infranto le regole",
  wc = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  yc = () => "Twoje konto zostało zawieszone za łamanie zasad",
  bc = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  vc = () => "Ваш обліковий запис було призупинено за порушення правил",
  Ec = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Cn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? dc() : e === "pt" ? _c() : e === "ch" ? fc() : e === "de" ? pc() : e === "es" ? mc() : e === "fr" ? hc() : e === "it" ? gc() : e === "jp" ? wc() : e === "pl" ? yc() : e === "ru" ? bc() : e === "uk" ? vc() : Ec()
  },
  Tc = () => "Alliance name already taken",
  Sc = () => "Já possui uma aliança com esse nome",
  kc = () => "该联盟名称已被占用",
  Oc = () => "Der Allianzname ist bereits vergeben",
  Ac = () => "Ese nombre de alianza ya está en uso",
  Rc = () => "Ce nom d’alliance est déjà pris",
  Ic = () => "Esiste già un'alleanza con questo nome",
  Nc = () => "このアライアンス名は既に使用されています。",
  Lc = () => "Nazwa sojuszu jest już zajęta",
  Dc = () => "Такое название альянса уже используется",
  Pc = () => "Назва альянсу вже зайнята",
  xc = () => "Tên liên minh đã được sử dụng",
  zc = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Tc() : e === "pt" ? Sc() : e === "ch" ? kc() : e === "de" ? Oc() : e === "es" ? Ac() : e === "fr" ? Rc() : e === "it" ? Ic() : e === "jp" ? Nc() : e === "pl" ? Lc() : e === "ru" ? Dc() : e === "uk" ? Pc() : xc()
  },
  Mc = () => "Alliance name exceeded the maximum number of characters",
  Cc = () => "O nome da aliança excedeu o número máximo de caracteres",
  jc = () => "联盟名称超过最大字符数限制",
  Bc = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Fc = () => "El nombre de la alianza superó el número máximo de caracteres",
  Uc = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Gc = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  qc = () => "アライアンス名が最大文字数を超えています。",
  Vc = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Wc = () => "Название альянса превышает максимальную длину",
  Hc = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Kc = () => "Tên liên minh vượt quá số ký tự cho phép",
  $c = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Mc() : e === "pt" ? Cc() : e === "ch" ? jc() : e === "de" ? Bc() : e === "es" ? Fc() : e === "fr" ? Uc() : e === "it" ? Gc() : e === "jp" ? qc() : e === "pl" ? Vc() : e === "ru" ? Wc() : e === "uk" ? Hc() : Kc()
  },
  Xc = () => "Alliance with empty name",
  Yc = () => "Aliança com nome vazio",
  Jc = () => "名称为空的联盟",
  Zc = () => "Allianz mit leerem Namen",
  Qc = () => "Alianza con nombre vacío",
  eu = () => "Alliance avec nom vide",
  tu = () => "Alleanza con nome vuoto",
  nu = () => "名前が空のアライアンスです。",
  ru = () => "Sojusz z pustą nazwą",
  ou = () => "Альянс с пустым названием",
  iu = () => "Альянс із порожньою назвою",
  au = () => "Liên minh không có tên",
  su = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Xc() : e === "pt" ? Yc() : e === "ch" ? Jc() : e === "de" ? Zc() : e === "es" ? Qc() : e === "fr" ? eu() : e === "it" ? tu() : e === "jp" ? nu() : e === "pl" ? ru() : e === "ru" ? ou() : e === "uk" ? iu() : au()
  },
  cu = () => "Botting",
  uu = () => "Uso de bots",
  lu = () => "脚本",
  du = () => "Bot-Nutzung",
  _u = () => "Botting",
  fu = () => "Bots",
  pu = () => "Uso di bot",
  mu = () => "ボット使用",
  hu = () => "Botting",
  gu = () => "Боттинг",
  wu = () => "Боти",
  yu = () => "Botting",
  bu = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? cu() : e === "pt" ? uu() : e === "ch" ? lu() : e === "de" ? du() : e === "es" ? _u() : e === "fr" ? fu() : e === "it" ? pu() : e === "jp" ? mu() : e === "pl" ? hu() : e === "ru" ? gu() : e === "uk" ? wu() : yu()
  },
  vu = () => "Use of software to completely automate painting",
  Eu = () => "Uso de software para pintar de forma completamente automatizada ",
  Tu = () => "使用软件完全自动化绘制",
  Su = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  ku = () => "Uso de software para automatizar completamente la pintura",
  Ou = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Au = () => "Uso di software per dipingere in modo completamente automatizzato",
  Ru = () => "ペイントを完全に自動化するソフトウェアの使用",
  Iu = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Nu = () => "Использование программ для полной автоматизации рисования",
  Lu = () => "Використання програм, які повністю автоматизують малювання",
  Du = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Pu = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? vu() : e === "pt" ? Eu() : e === "ch" ? Tu() : e === "de" ? Su() : e === "es" ? ku() : e === "fr" ? Ou() : e === "it" ? Au() : e === "jp" ? Ru() : e === "pl" ? Iu() : e === "ru" ? Nu() : e === "uk" ? Lu() : Du()
  },
  xu = () => "Breaking the rules",
  zu = () => "Quebrar as regras",
  Mu = () => "违反规则",
  Cu = () => "Regeln brechen",
  ju = () => "Romper las reglas",
  Bu = () => "Violation des règles",
  Fu = () => "Violazione delle regole",
  Uu = () => "ルール違反",
  Gu = () => "Łamanie zasad",
  qu = () => "Нарушение правил",
  Vu = () => "Порушення правил",
  Wu = () => "Vi phạm luật",
  Hu = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? xu() : e === "pt" ? zu() : e === "ch" ? Mu() : e === "de" ? Cu() : e === "es" ? ju() : e === "fr" ? Bu() : e === "it" ? Fu() : e === "jp" ? Uu() : e === "pl" ? Gu() : e === "ru" ? qu() : e === "uk" ? Vu() : Wu()
  },
  Ku = () => "You have broken one of Wplace's rules",
  $u = () => "Você quebrou uma das regras do Wplace",
  Xu = () => "你违反了 Wplace 的一项规则",
  Yu = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Ju = () => "Has infringido una de las reglas de Wplace",
  Zu = () => "Vous avez enfreint l’une des règles de Wplace",
  Qu = () => "Hai infranto una delle regole di Wplace",
  el = () => "Wplaceのルールのいずれかに違反しました。",
  tl = () => "Złamałeś jedną z zasad Wplace",
  nl = () => "Вы нарушили одно из правил Wplace",
  rl = () => "Ви порушили одне з правил Wplace",
  ol = () => "Bạn đã vi phạm một trong các luật của Wplace",
  il = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ku() : e === "pt" ? $u() : e === "ch" ? Xu() : e === "de" ? Yu() : e === "es" ? Ju() : e === "fr" ? Zu() : e === "it" ? Qu() : e === "jp" ? el() : e === "pl" ? tl() : e === "ru" ? nl() : e === "uk" ? rl() : ol()
  },
  al = () => "You cannot paint over event pixels",
  sl = () => "Você não pode pintar sobre pixels de eventos",
  cl = () => "你不能覆盖活动像素",
  ul = () => "Du kannst nicht über Event-Pixel malen",
  ll = () => "No puedes pintar sobre píxeles de evento",
  dl = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  _l = () => "Non puoi dipingere sopra i pixel dell'evento",
  fl = () => "イベント用のピクセルの上には塗れません。",
  pl = () => "Nie możesz malować po pikselach wydarzenia",
  ml = () => "Вы не можете рисовать по пикселям события",
  hl = () => "Ви не можете малювати поверх пікселів події",
  gl = () => "Bạn không thể tô lên pixel sự kiện",
  jn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? al() : e === "pt" ? sl() : e === "ch" ? cl() : e === "de" ? ul() : e === "es" ? ll() : e === "fr" ? dl() : e === "it" ? _l() : e === "jp" ? fl() : e === "pl" ? pl() : e === "ru" ? ml() : e === "uk" ? hl() : gl()
  },
  wl = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  yl = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  bl = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  vl = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  El = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Tl = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Sl = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  kl = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Ol = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Al = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Rl = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Il = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Nl = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? wl() : e === "pt" ? yl() : e === "ch" ? bl() : e === "de" ? vl() : e === "es" ? El() : e === "fr" ? Tl() : e === "it" ? Sl() : e === "jp" ? kl() : e === "pl" ? Ol() : e === "ru" ? Al() : e === "uk" ? Rl() : Il()
  },
  Ll = () => "Challenge verification not completed",
  Dl = () => "Verificação do desafio não concluída",
  Pl = () => "挑战验证未完成",
  xl = () => "Herausforderungsverifizierung nicht abgeschlossen",
  zl = () => "Verificación del desafío no completada",
  Ml = () => "Vérification du défi non terminée",
  Cl = () => "Verifica della sfida non completata",
  jl = () => "チャレンジ検証が完了していません",
  Bl = () => "Weryfikacja wyzwania niezakończona",
  Fl = () => "Верификация вызова не завершена",
  Ul = () => "Перевірку виклику не завершено",
  Gl = () => "Xác minh thử thách chưa hoàn thành",
  Ct = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ll() : e === "pt" ? Dl() : e === "ch" ? Pl() : e === "de" ? xl() : e === "es" ? zl() : e === "fr" ? Ml() : e === "it" ? Cl() : e === "jp" ? jl() : e === "pl" ? Bl() : e === "ru" ? Fl() : e === "uk" ? Ul() : Gl()
  },
  ql = () => "Couldn't complete the purchase. This item does not exist.",
  Vl = () => "Não foi possível concluir a compra. Este item não existe.",
  Wl = () => "无法完成购买。该物品不存在。",
  Hl = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Kl = () => "No se pudo completar la compra. Este ítem no existe.",
  $l = () => "Achat impossible. Cet objet n’existe pas.",
  Xl = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  Yl = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Jl = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Zl = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Ql = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  ed = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Bn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ql() : e === "pt" ? Vl() : e === "ch" ? Wl() : e === "de" ? Hl() : e === "es" ? Kl() : e === "fr" ? $l() : e === "it" ? Xl() : e === "jp" ? Yl() : e === "pl" ? Jl() : e === "ru" ? Zl() : e === "uk" ? Ql() : ed()
  },
  td = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  nd = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  rd = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  od = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  id = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  ad = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  sd = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  cd = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  ud = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  ld = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  dd = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  _d = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  fd = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? td() : e === "pt" ? nd() : e === "ch" ? rd() : e === "de" ? od() : e === "es" ? id() : e === "fr" ? ad() : e === "it" ? sd() : e === "jp" ? cd() : e === "pl" ? ud() : e === "ru" ? ld() : e === "uk" ? dd() : _d()
  },
  pd = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  md = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  hd = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  gd = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  wd = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  yd = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  bd = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  vd = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ed = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Td = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  Sd = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  kd = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Fn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? pd() : e === "pt" ? md() : e === "ch" ? hd() : e === "de" ? gd() : e === "es" ? wd() : e === "fr" ? yd() : e === "it" ? bd() : e === "jp" ? vd() : e === "pl" ? Ed() : e === "ru" ? Td() : e === "uk" ? Sd() : kd()
  },
  Od = () => "Doxxing",
  Ad = () => "Doxxing",
  Rd = () => "人肉搜索",
  Id = () => "Doxxing",
  Nd = () => "Doxxing",
  Ld = () => "Doxxing",
  Dd = () => "Doxxing",
  Pd = () => "ドックス（Doxxing）",
  xd = () => "Doxxing",
  zd = () => "Докcинг",
  Md = () => "Докcинг",
  Cd = () => "Doxxing",
  jd = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Od() : e === "pt" ? Ad() : e === "ch" ? Rd() : e === "de" ? Id() : e === "es" ? Nd() : e === "fr" ? Ld() : e === "it" ? Dd() : e === "jp" ? Pd() : e === "pl" ? xd() : e === "ru" ? zd() : e === "uk" ? Md() : Cd()
  },
  Bd = () => "Released other's personal information without their consent",
  Fd = () => "Vazar informações pessoais de terceiros sem consentimento",
  Ud = () => "在未获同意的情况下公开他人个人信息",
  Gd = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  qd = () => "Divulgó información personal de otra persona sin su consentimiento",
  Vd = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Wd = () => "Diffusione di informazioni personali di terzi senza consenso",
  Hd = () => "他人の個人情報を同意なく公開した。",
  Kd = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  $d = () => "Публикация личной информации других людей без их согласия",
  Xd = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Yd = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Jd = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Bd() : e === "pt" ? Fd() : e === "ch" ? Ud() : e === "de" ? Gd() : e === "es" ? qd() : e === "fr" ? Vd() : e === "it" ? Wd() : e === "jp" ? Hd() : e === "pl" ? Kd() : e === "ru" ? $d() : e === "uk" ? Xd() : Yd()
  },
  Zd = () => "This email is already in use.",
  Qd = () => "Este e-mail já está em uso.",
  e_ = () => "This email is already in use.",
  t_ = () => "This email is already in use.",
  n_ = () => "Este correo electrónico ya está en uso.",
  r_ = () => "This email is already in use.",
  o_ = () => "Questa email è già in uso.",
  i_ = () => "This email is already in use.",
  a_ = () => "This email is already in use.",
  s_ = () => "This email is already in use.",
  c_ = () => "This email is already in use.",
  u_ = () => "This email is already in use.",
  l_ = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Zd() : e === "pt" ? Qd() : e === "ch" ? e_() : e === "de" ? t_() : e === "es" ? n_() : e === "fr" ? r_() : e === "it" ? o_() : e === "jp" ? i_() : e === "pl" ? a_() : e === "ru" ? s_() : e === "uk" ? c_() : u_()
  },
  d_ = n => `This email is already in use by user #${n.userId}.`,
  __ = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  f_ = n => `This email is already in use by user #${n.userId}.`,
  p_ = n => `This email is already in use by user #${n.userId}.`,
  m_ = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  h_ = n => `This email is already in use by user #${n.userId}.`,
  g_ = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  w_ = n => `This email is already in use by user #${n.userId}.`,
  y_ = n => `This email is already in use by user #${n.userId}.`,
  b_ = n => `This email is already in use by user #${n.userId}.`,
  v_ = n => `This email is already in use by user #${n.userId}.`,
  E_ = n => `This email is already in use by user #${n.userId}.`,
  T_ = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? d_(n) : e === "pt" ? __(n) : e === "ch" ? f_(n) : e === "de" ? p_(n) : e === "es" ? m_(n) : e === "fr" ? h_(n) : e === "it" ? g_(n) : e === "jp" ? w_(n) : e === "pl" ? y_(n) : e === "ru" ? b_(n) : e === "uk" ? v_(n) : E_(n)
  },
  S_ = () => "Enter a valid email address.",
  k_ = () => "Informe um endereço de e-mail válido.",
  O_ = () => "Enter a valid email address.",
  A_ = () => "Enter a valid email address.",
  R_ = () => "Introduce una dirección de correo electrónico válida.",
  I_ = () => "Enter a valid email address.",
  N_ = () => "Inserisci un indirizzo email valido.",
  L_ = () => "Enter a valid email address.",
  D_ = () => "Enter a valid email address.",
  P_ = () => "Enter a valid email address.",
  x_ = () => "Enter a valid email address.",
  z_ = () => "Enter a valid email address.",
  M_ = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? S_() : e === "pt" ? k_() : e === "ch" ? O_() : e === "de" ? A_() : e === "es" ? R_() : e === "fr" ? I_() : e === "it" ? N_() : e === "jp" ? L_() : e === "pl" ? D_() : e === "ru" ? P_() : e === "uk" ? x_() : z_()
  },
  C_ = n => `Error while painting: ${n.err}`,
  j_ = n => `Erro enquanto pinta: ${n.err}`,
  B_ = n => `绘制时出错：${n.err}`,
  F_ = n => `Fehler beim Malen: ${n.err}`,
  U_ = n => `Error al pintar: ${n.err}`,
  G_ = n => `Erreur lors de la peinture : ${n.err}`,
  q_ = n => `Errore durante la pittura: ${n.err}`,
  V_ = n => `ペイント中にエラーが発生しました: ${n.err}`,
  W_ = n => `Błąd podczas malowania: ${n.err}`,
  H_ = n => `Ошибка при рисовании: ${n.err}`,
  K_ = n => `Помилка під час малювання: ${n.err}`,
  $_ = n => `Lỗi khi tô: ${n.err}`,
  X_ = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? C_(n) : e === "pt" ? j_(n) : e === "ch" ? B_(n) : e === "de" ? F_(n) : e === "es" ? U_(n) : e === "fr" ? G_(n) : e === "it" ? q_(n) : e === "jp" ? V_(n) : e === "pl" ? W_(n) : e === "ru" ? H_(n) : e === "uk" ? K_(n) : $_(n)
  },
  Y_ = () => "Exceeded maximum number of characters",
  J_ = () => "Excedeu o número máximo de caracteres permitidos",
  Z_ = () => "超出最大字符数",
  Q_ = () => "Maximale Zeichenanzahl überschritten",
  ef = () => "Se excedió el número máximo de caracteres",
  tf = () => "Nombre maximal de caractères dépassé",
  nf = () => "Numero massimo di caratteri superato",
  rf = () => "最大文字数を超過しました",
  of = () => "Przekroczono maksymalną liczbę znaków",
  af = () => "Превышено максимальное количество символов",
  sf = () => "Перевищено максимальну кількість символів",
  cf = () => "Đã vượt quá số ký tự tối đa",
  uf = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Y_() : e === "pt" ? J_() : e === "ch" ? Z_() : e === "de" ? Q_() : e === "es" ? ef() : e === "fr" ? tf() : e === "it" ? nf() : e === "jp" ? rf() : e === "pl" ? of() : e === "ru" ? af() : e === "uk" ? sf() : cf()
  },
  lf = () => "Verification code expired. Please request a new one.",
  df = () => "Código de verificação expirado. Por favor, solicite um novo.",
  _f = () => "验证码已过期，请重新获取。",
  ff = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  pf = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  mf = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  hf = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  gf = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  wf = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  yf = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  bf = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  vf = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  Ef = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? lf() : e === "pt" ? df() : e === "ch" ? _f() : e === "de" ? ff() : e === "es" ? pf() : e === "fr" ? mf() : e === "it" ? hf() : e === "jp" ? gf() : e === "pl" ? wf() : e === "ru" ? yf() : e === "uk" ? bf() : vf()
  },
  Tf = () => "Griefing",
  Sf = () => "Griefing",
  kf = () => "破坏行为",
  Of = () => "Griefing",
  Af = () => "Griefing",
  Rf = () => "Griefing",
  If = () => "Griefing",
  Nf = () => "グリーフィング",
  Lf = () => "Griefing",
  Df = () => "Гриферство",
  Pf = () => "Гріфінг",
  xf = () => "Griefing",
  zf = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Tf() : e === "pt" ? Sf() : e === "ch" ? kf() : e === "de" ? Of() : e === "es" ? Af() : e === "fr" ? Rf() : e === "it" ? If() : e === "jp" ? Nf() : e === "pl" ? Lf() : e === "ru" ? Df() : e === "uk" ? Pf() : xf()
  },
  Mf = () => "Messed up with other's artworks",
  Cf = () => "Estragou os desenhos dos outros",
  jf = () => "破坏了他人的作品",
  Bf = () => "Kunstwerke anderer beschädigt",
  Ff = () => "Arruinó las obras de arte de otros",
  Uf = () => "A abîmé les œuvres des autres",
  Gf = () => "Ha rovinato i disegni degli altri",
  qf = () => "他人の作品を荒らした",
  Vf = () => "Zniszczył prace innych",
  Wf = () => "Испортил чужие рисунки",
  Hf = () => "Зіпсував роботи інших",
  Kf = () => "Phá hỏng tranh của người khác",
  $f = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Mf() : e === "pt" ? Cf() : e === "ch" ? jf() : e === "de" ? Bf() : e === "es" ? Ff() : e === "fr" ? Uf() : e === "it" ? Gf() : e === "jp" ? qf() : e === "pl" ? Vf() : e === "ru" ? Wf() : e === "uk" ? Hf() : Kf()
  },
  Xf = () => "Hate speech",
  Yf = () => "Discurso de Ódio",
  Jf = () => "仇恨言论",
  Zf = () => "Hassrede",
  Qf = () => "Discurso de odio",
  ep = () => "Discours haineux",
  tp = () => "Discorso d'odio",
  np = () => "ヘイトスピーチ",
  rp = () => "Mowa nienawiści",
  op = () => "Речь ненависти",
  ip = () => "Мова ворожнечі",
  ap = () => "Ngôn từ thù hằn",
  sp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Xf() : e === "pt" ? Yf() : e === "ch" ? Jf() : e === "de" ? Zf() : e === "es" ? Qf() : e === "fr" ? ep() : e === "it" ? tp() : e === "jp" ? np() : e === "pl" ? rp() : e === "ru" ? op() : e === "uk" ? ip() : ap()
  },
  cp = () => "Racism, homophobia, hate groups, ...",
  up = () => "Racismo, homofobia, grupos de ódio, ...",
  lp = () => "种族主义、恐同、仇恨团体等",
  dp = () => "Rassismus, Homophobie, Hassgruppen, ...",
  _p = () => "Racismo, homofobia, grupos de odio, ...",
  fp = () => "Racisme, homophobie, groupes haineux, ...",
  pp = () => "Razzismo, omofobia, gruppi d'odio, ...",
  mp = () => "人種差別、同性愛差別、ヘイト団体など。",
  hp = () => "Rasizm, homofobia, grupy nienawiści, ...",
  gp = () => "Расизм, гомофобия, группы ненависти и т.п.",
  wp = () => "Расизм, гомофобія, групи ненависті, ...",
  yp = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  bp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? cp() : e === "pt" ? up() : e === "ch" ? lp() : e === "de" ? dp() : e === "es" ? _p() : e === "fr" ? fp() : e === "it" ? pp() : e === "jp" ? mp() : e === "pl" ? hp() : e === "ru" ? gp() : e === "uk" ? wp() : yp()
  },
  vp = () => `This case has already been reviewed, resolved, or acted on by the moderation team.

The reported incident may have already resulted in a punishment, warning, previous decision, or internal review. Submitting the same case again without new evidence will not usually change the outcome.

If you have new and relevant evidence that was not included before, please submit a new report and clearly explain what new information is being provided.`,
  Ep = () => `Este caso já foi analisado, resolvido ou tratado pela equipe de moderação.

O incidente denunciado pode já ter resultado em uma punição, advertência, decisão anterior ou revisão interna. Enviar o mesmo caso novamente sem novas evidências geralmente não altera o resultado.

Se você tiver evidências novas e relevantes que não foram incluídas antes, envie uma nova denúncia e explique claramente quais novas informações estão sendo fornecidas.`,
  Tp = () => `此案件已由审核团队审查、解决或处理。

被举报的事件可能已经导致了处罚、警告、先前的裁决或内部审查。在没有新证据的情况下重复提交相同的案件通常不会改变结果。

如果您有此前未提供的、相关的新证据，请提交一份新的举报，并清楚说明所提供的新信息是什么。`,
  Sp = () => `Dieser Fall wurde vom Moderationsteam bereits überprüft, gelöst oder bearbeitet.

Der gemeldete Vorfall hat möglicherweise bereits zu einer Strafe, einer Verwarnung, einer früheren Entscheidung oder einer internen Überprüfung geführt. Denselben Fall ohne neue Beweise erneut einzureichen, ändert das Ergebnis in der Regel nicht.

Wenn du neue und relevante Beweise hast, die zuvor nicht enthalten waren, reiche bitte eine neue Meldung ein und erkläre klar, welche neuen Informationen vorliegen.`,
  kp = () => `Este caso ya ha sido revisado, resuelto o gestionado por el equipo de moderación.

El incidente reportado puede haber dado lugar ya a una sanción, una advertencia, una decisión previa o una revisión interna. Enviar el mismo caso de nuevo sin pruebas nuevas no suele cambiar el resultado.

Si tienes pruebas nuevas y relevantes que no se incluyeron antes, envía un nuevo reporte y explica claramente qué información nueva aportas.`,
  Op = () => `Ce cas a déjà été examiné, résolu ou traité par l'équipe de modération.

L'incident signalé a peut-être déjà donné lieu à une sanction, un avertissement, une décision antérieure ou un examen interne. Soumettre à nouveau le même cas sans nouvelles preuves ne change généralement pas le résultat.

Si vous disposez de nouvelles preuves pertinentes qui n'avaient pas été incluses, veuillez soumettre un nouveau signalement et expliquer clairement quelles nouvelles informations vous apportez.`,
  Ap = () => `Questo caso è già stato esaminato, risolto o gestito dal team di moderazione.

L'incidente segnalato potrebbe aver già portato a una punizione, un avviso, una decisione precedente o una revisione interna. Inviare di nuovo lo stesso caso senza nuove prove di solito non cambia l'esito.

Se hai prove nuove e pertinenti non incluse in precedenza, invia una nuova segnalazione e spiega chiaramente quali nuove informazioni stai fornendo.`,
  Rp = () => `このケースはすでにモデレーションチームによって確認・解決・対応されています。

報告された事案は、すでに処分、警告、過去の判断、または内部審査につながっている可能性があります。新たな証拠なしに同じケースを再度提出しても、通常は結果は変わりません。

以前に含まれていなかった新しく関連性のある証拠がある場合は、新しい報告を提出し、どのような新しい情報を提供するのかを明確に説明してください。`,
  Ip = () => `Ta sprawa została już sprawdzona, rozstrzygnięta lub rozpatrzona przez zespół moderacji.

Zgłoszone zdarzenie mogło już skutkować karą, ostrzeżeniem, wcześniejszą decyzją lub wewnętrzną weryfikacją. Ponowne przesłanie tej samej sprawy bez nowych dowodów zwykle nie zmieni wyniku.

Jeśli masz nowe i istotne dowody, które nie zostały wcześniej dołączone, prześlij nowe zgłoszenie i jasno wyjaśnij, jakie nowe informacje przekazujesz.`,
  Np = () => `Этот случай уже был рассмотрен, решён или обработан командой модерации.

Сообщённый инцидент мог уже привести к наказанию, предупреждению, ранее принятому решению или внутренней проверке. Повторная подача того же случая без новых доказательств обычно не меняет результат.

Если у вас есть новые и значимые доказательства, которые ранее не были предоставлены, отправьте новую жалобу и чётко объясните, какая новая информация предоставляется.`,
  Lp = () => `Цю справу вже розглянуто, вирішено або опрацьовано командою модерації.

Повідомлений інцидент, можливо, вже призвів до покарання, попередження, попереднього рішення або внутрішньої перевірки. Повторне надсилання тієї самої справи без нових доказів зазвичай не змінює результату.

Якщо у вас є нові та важливі докази, які не були додані раніше, надішліть нову скаргу та чітко поясніть, яку нову інформацію ви надаєте.`,
  Dp = () => `Trường hợp này đã được đội ngũ kiểm duyệt xem xét, giải quyết hoặc xử lý.

Sự việc bị báo cáo có thể đã dẫn đến một hình phạt, cảnh cáo, quyết định trước đó hoặc một lần xem xét nội bộ. Việc gửi lại cùng một trường hợp mà không có bằng chứng mới thường sẽ không thay đổi kết quả.

Nếu bạn có bằng chứng mới và liên quan mà trước đây chưa được đưa vào, vui lòng gửi một báo cáo mới và giải thích rõ thông tin mới mà bạn cung cấp là gì.`,
  Pp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? vp() : e === "pt" ? Ep() : e === "ch" ? Tp() : e === "de" ? Sp() : e === "es" ? kp() : e === "fr" ? Op() : e === "it" ? Ap() : e === "jp" ? Rp() : e === "pl" ? Ip() : e === "ru" ? Np() : e === "uk" ? Lp() : Dp()
  },
  xp = () => "Already Handled",
  zp = () => "Já tratado",
  Mp = () => "已处理",
  Cp = () => "Bereits bearbeitet",
  jp = () => "Ya gestionado",
  Bp = () => "Déjà traité",
  Fp = () => "Già gestito",
  Up = () => "対応済み",
  Gp = () => "Już rozpatrzone",
  qp = () => "Уже рассмотрено",
  Vp = () => "Вже розглянуто",
  Wp = () => "Đã xử lý",
  Hp = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? xp() : e === "pt" ? zp() : e === "ch" ? Mp() : e === "de" ? Cp() : e === "es" ? jp() : e === "fr" ? Bp() : e === "it" ? Fp() : e === "jp" ? Up() : e === "pl" ? Gp() : e === "ru" ? qp() : e === "uk" ? Vp() : Wp()
  },
  Kp = () => `The reported action was allowed under the event rules or special conditions active at the time.

Some events, areas, game modes, or temporary rules may allow behavior that would normally be restricted elsewhere. Because the action was permitted in that specific context, no moderation action will be taken.

Please make sure to check the current event rules or special-area rules before submitting reports related to event gameplay.`,
  $p = () => `A ação denunciada era permitida pelas regras do evento ou pelas condições especiais ativas no momento.

Alguns eventos, áreas, modos de jogo ou regras temporárias podem permitir comportamentos que normalmente seriam restritos em outros lugares. Como a ação era permitida nesse contexto específico, nenhuma ação de moderação será tomada.

Verifique as regras atuais do evento ou as regras de áreas especiais antes de enviar denúncias relacionadas à jogabilidade do evento.`,
  Xp = () => `被举报的行为在当时生效的活动规则或特殊条件下是被允许的。

某些活动、区域、游戏模式或临时规则可能允许在其他情况下通常会被限制的行为。由于该行为在特定情境下被允许，因此不会采取任何审核措施。

在提交与活动玩法相关的举报之前，请务必查看当前的活动规则或特殊区域规则。`,
  Yp = () => `Die gemeldete Aktion war nach den Event-Regeln oder den zu diesem Zeitpunkt geltenden Sonderbedingungen erlaubt.

Manche Events, Bereiche, Spielmodi oder temporäre Regeln können Verhalten erlauben, das anderswo normalerweise eingeschränkt wäre. Da die Aktion in diesem speziellen Kontext erlaubt war, wird keine Moderationsmaßnahme ergriffen.

Bitte prüfe die aktuellen Event-Regeln oder die Regeln für Sonderbereiche, bevor du Meldungen zum Event-Gameplay einreichst.`,
  Jp = () => `La acción reportada estaba permitida según las reglas del evento o las condiciones especiales activas en ese momento.

Algunos eventos, áreas, modos de juego o reglas temporales pueden permitir comportamientos que normalmente estarían restringidos en otros lugares. Dado que la acción estaba permitida en ese contexto específico, no se tomará ninguna medida de moderación.

Asegúrate de revisar las reglas actuales del evento o las reglas de áreas especiales antes de enviar reportes relacionados con la jugabilidad del evento.`,
  Zp = () => `L'action signalée était autorisée par les règles de l'événement ou par les conditions spéciales en vigueur à ce moment-là.

Certains événements, zones, modes de jeu ou règles temporaires peuvent autoriser des comportements qui seraient normalement restreints ailleurs. Comme l'action était autorisée dans ce contexte précis, aucune mesure de modération ne sera prise.

Veuillez vérifier les règles actuelles de l'événement ou les règles des zones spéciales avant de soumettre des signalements liés au gameplay d'un événement.`,
  Qp = () => `L'azione segnalata era consentita dalle regole dell'evento o dalle condizioni speciali attive in quel momento.

Alcuni eventi, aree, modalità di gioco o regole temporanee possono consentire comportamenti che altrove sarebbero normalmente vietati. Poiché l'azione era consentita in quel contesto specifico, non verrà presa alcuna azione di moderazione.

Assicurati di controllare le regole attuali dell'evento o le regole delle aree speciali prima di inviare segnalazioni relative al gameplay degli eventi.`,
  em = () => `報告された行為は、その時点で有効だったイベントのルールや特別な条件のもとで許可されていました。

一部のイベント、エリア、ゲームモード、または一時的なルールでは、通常なら他の場所で制限される行為が許可される場合があります。その特定の状況では行為が許可されていたため、モデレーションの措置は行われません。

イベントのプレイに関する報告を提出する前に、現在のイベントルールや特別エリアのルールを必ず確認してください。`,
  tm = () => `Zgłoszone działanie było dozwolone zgodnie z zasadami wydarzenia lub specjalnymi warunkami obowiązującymi w tym czasie.

Niektóre wydarzenia, obszary, tryby gry lub zasady tymczasowe mogą zezwalać na zachowania, które gdzie indziej byłyby zwykle ograniczone. Ponieważ działanie było dozwolone w tym konkretnym kontekście, nie zostaną podjęte żadne działania moderacyjne.

Przed wysłaniem zgłoszeń dotyczących rozgrywki podczas wydarzenia sprawdź aktualne zasady wydarzenia lub zasady obszarów specjalnych.`,
  nm = () => `Сообщённое действие было разрешено правилами события или особыми условиями, действовавшими в тот момент.

Некоторые события, зоны, режимы игры или временные правила могут разрешать поведение, которое обычно ограничено в других местах. Поскольку действие было разрешено в этом конкретном контексте, никаких мер модерации приниматься не будет.

Пожалуйста, проверяйте текущие правила события или правила особых зон, прежде чем отправлять жалобы, связанные с игровым процессом события.`,
  rm = () => `Повідомлена дія була дозволена правилами події або особливими умовами, що діяли на той момент.

Деякі події, зони, режими гри або тимчасові правила можуть дозволяти поведінку, яка зазвичай обмежена в інших місцях. Оскільки дія була дозволена в цьому конкретному контексті, жодних заходів модерації вжито не буде.

Будь ласка, перевіряйте чинні правила події або правила особливих зон, перш ніж надсилати скарги, пов'язані з ігровим процесом події.`,
  om = () => `Hành động bị báo cáo được cho phép theo quy tắc sự kiện hoặc các điều kiện đặc biệt đang có hiệu lực vào thời điểm đó.

Một số sự kiện, khu vực, chế độ chơi hoặc quy tắc tạm thời có thể cho phép những hành vi mà ở nơi khác thường bị hạn chế. Vì hành động được cho phép trong bối cảnh cụ thể đó, sẽ không có biện pháp kiểm duyệt nào được áp dụng.

Vui lòng kiểm tra quy tắc sự kiện hiện hành hoặc quy tắc khu vực đặc biệt trước khi gửi báo cáo liên quan đến lối chơi trong sự kiện.`,
  im = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Kp() : e === "pt" ? $p() : e === "ch" ? Xp() : e === "de" ? Yp() : e === "es" ? Jp() : e === "fr" ? Zp() : e === "it" ? Qp() : e === "jp" ? em() : e === "pl" ? tm() : e === "ru" ? nm() : e === "uk" ? rm() : om()
  },
  am = () => "Allowed by Event or Special Rules",
  sm = () => "Permitido por evento ou regras especiais",
  cm = () => "活动或特殊规则允许",
  um = () => "Durch Event oder Sonderregeln erlaubt",
  lm = () => "Permitido por evento o reglas especiales",
  dm = () => "Autorisé par un événement ou des règles spéciales",
  _m = () => "Consentito da evento o regole speciali",
  fm = () => "イベントまたは特別ルールにより許可",
  pm = () => "Dozwolone przez wydarzenie lub zasady specjalne",
  mm = () => "Разрешено событием или особыми правилами",
  hm = () => "Дозволено подією або особливими правилами",
  gm = () => "Được phép theo sự kiện hoặc quy tắc đặc biệt",
  wm = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? am() : e === "pt" ? sm() : e === "ch" ? cm() : e === "de" ? um() : e === "es" ? lm() : e === "fr" ? dm() : e === "it" ? _m() : e === "jp" ? fm() : e === "pl" ? pm() : e === "ru" ? mm() : e === "uk" ? hm() : gm()
  },
  ym = () => `The reported issue appears to have been caused by a glitch, bug, lag, desync, or another technical problem.

Because the evidence suggests that the situation may not have been intentional player misconduct, we cannot treat it as a punishable rule violation.

If the issue continues, please report it as a bug or provide more evidence showing that a player intentionally abused the glitch.`,
  bm = () => `O problema denunciado parece ter sido causado por uma falha, bug, lag, dessincronização ou outro problema técnico.

Como as evidências sugerem que a situação pode não ter sido má conduta intencional de um jogador, não podemos tratá-la como uma violação de regras passível de punição.

Se o problema persistir, denuncie-o como um bug ou forneça mais evidências mostrando que um jogador abusou intencionalmente da falha.`,
  vm = () => `被举报的问题似乎是由故障、漏洞、延迟、不同步或其他技术问题导致的。

由于证据表明该情况可能并非玩家的故意不当行为，我们无法将其视为可处罚的违规行为。

如果问题持续存在，请将其作为漏洞举报，或提供更多证据，证明有玩家故意利用了该故障。`,
  Em = () => `Das gemeldete Problem scheint durch einen Glitch, Bug, Lag, eine Desynchronisation oder ein anderes technisches Problem verursacht worden zu sein.

Da die Beweise darauf hindeuten, dass es sich möglicherweise nicht um vorsätzliches Fehlverhalten eines Spielers handelte, können wir es nicht als strafbaren Regelverstoß behandeln.

Wenn das Problem weiterhin besteht, melde es bitte als Bug oder liefere weitere Beweise, die zeigen, dass ein Spieler den Glitch absichtlich ausgenutzt hat.`,
  Tm = () => `El problema reportado parece haber sido causado por un fallo, un error, lag, desincronización u otro problema técnico.

Dado que las pruebas sugieren que la situación pudo no ser una mala conducta intencional de un jugador, no podemos tratarla como una violación de reglas sancionable.

Si el problema continúa, repórtalo como un error o aporta más pruebas que demuestren que un jugador abusó intencionalmente del fallo.`,
  Sm = () => `Le problème signalé semble avoir été causé par un bug, un glitch, du lag, une désynchronisation ou un autre problème technique.

Comme les preuves suggèrent que la situation n'était peut-être pas une faute intentionnelle d'un joueur, nous ne pouvons pas la traiter comme une infraction passible de sanction.

Si le problème persiste, veuillez le signaler en tant que bug ou fournir davantage de preuves montrant qu'un joueur a intentionnellement abusé du bug.`,
  km = () => `Il problema segnalato sembra essere stato causato da un glitch, un bug, lag, desincronizzazione o un altro problema tecnico.

Poiché le prove suggeriscono che la situazione potrebbe non essere stata una cattiva condotta intenzionale di un giocatore, non possiamo trattarla come una violazione delle regole punibile.

Se il problema persiste, segnalalo come bug o fornisci ulteriori prove che mostrino che un giocatore ha abusato intenzionalmente del glitch.`,
  Om = () => `報告された問題は、不具合、バグ、ラグ、同期ずれ、またはその他の技術的な問題によって引き起こされた可能性があります。

証拠からは、プレイヤーの意図的な不正行為ではなかった可能性が示唆されるため、処罰の対象となるルール違反として扱うことはできません。

問題が続く場合は、バグとして報告するか、プレイヤーが意図的に不具合を悪用したことを示すさらなる証拠を提出してください。`,
  Am = () => `Zgłoszony problem prawdopodobnie został spowodowany usterką, błędem, lagiem, desynchronizacją lub innym problemem technicznym.

Ponieważ dowody sugerują, że sytuacja mogła nie być celowym niewłaściwym zachowaniem gracza, nie możemy potraktować jej jako karalnego naruszenia zasad.

Jeśli problem będzie się powtarzał, zgłoś go jako błąd lub dostarcz więcej dowodów pokazujących, że gracz celowo wykorzystał usterkę.`,
  Rm = () => `Сообщённая проблема, по-видимому, была вызвана сбоем, багом, лагом, рассинхронизацией или другой технической неполадкой.

Поскольку доказательства указывают на то, что ситуация могла не быть умышленным нарушением со стороны игрока, мы не можем рассматривать её как наказуемое нарушение правил.

Если проблема сохраняется, сообщите о ней как об ошибке или предоставьте дополнительные доказательства того, что игрок умышленно воспользовался сбоем.`,
  Im = () => `Повідомлена проблема, схоже, була спричинена збоєм, багом, лагом, розсинхронізацією або іншою технічною несправністю.

Оскільки докази свідчать, що ситуація могла не бути навмисною неправомірною поведінкою гравця, ми не можемо розглядати її як порушення правил, що карається.

Якщо проблема повторюється, повідомте про неї як про помилку або надайте додаткові докази того, що гравець навмисно скористався збоєм.`,
  Nm = () => `Vấn đề bị báo cáo có vẻ do một lỗi kỹ thuật, bug, lag, mất đồng bộ hoặc một sự cố kỹ thuật khác gây ra.

Vì bằng chứng cho thấy tình huống có thể không phải là hành vi sai phạm cố ý của người chơi, chúng tôi không thể xem đó là vi phạm quy tắc có thể bị xử phạt.

Nếu vấn đề vẫn tiếp diễn, vui lòng báo cáo dưới dạng lỗi hoặc cung cấp thêm bằng chứng cho thấy người chơi đã cố ý lợi dụng lỗi đó.`,
  Lm = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ym() : e === "pt" ? bm() : e === "ch" ? vm() : e === "de" ? Em() : e === "es" ? Tm() : e === "fr" ? Sm() : e === "it" ? km() : e === "jp" ? Om() : e === "pl" ? Am() : e === "ru" ? Rm() : e === "uk" ? Im() : Nm()
  },
  Dm = () => "Caused by a Glitch",
  Pm = () => "Causado por uma falha",
  xm = () => "由故障导致",
  zm = () => "Durch einen Glitch verursacht",
  Mm = () => "Causado por un fallo",
  Cm = () => "Causé par un bug",
  jm = () => "Causato da un glitch",
  Bm = () => "不具合が原因",
  Fm = () => "Spowodowane usterką",
  Um = () => "Вызвано сбоем",
  Gm = () => "Спричинено збоєм",
  qm = () => "Do lỗi kỹ thuật gây ra",
  Vm = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Dm() : e === "pt" ? Pm() : e === "ch" ? xm() : e === "de" ? zm() : e === "es" ? Mm() : e === "fr" ? Cm() : e === "it" ? jm() : e === "jp" ? Bm() : e === "pl" ? Fm() : e === "ru" ? Um() : e === "uk" ? Gm() : qm()
  },
  Wm = () => `We could not confirm what happened based on the information provided.

The report may show part of the situation, but it does not include enough context for the moderation team to understand the full incident, verify the sequence of events, or determine whether a rule was broken.

When submitting a report, please include clear evidence, relevant timestamps, location or coordinates when applicable, and enough surrounding context to help us understand what happened before and after the reported action.`,
  Hm = () => `Não foi possível confirmar o que aconteceu com base nas informações fornecidas.

A denúncia pode mostrar parte da situação, mas não inclui contexto suficiente para que a equipe de moderação entenda o incidente completo, verifique a sequência dos eventos ou determine se uma regra foi violada.

Ao enviar uma denúncia, inclua evidências claras, registros de horário relevantes, localização ou coordenadas quando aplicável e contexto suficiente para nos ajudar a entender o que aconteceu antes e depois da ação denunciada.`,
  Km = () => `根据所提供的信息，我们无法确认发生了什么。

该举报可能展示了部分情况，但没有包含足够的背景信息，使审核团队无法了解整个事件、核实事件的先后顺序，或判断是否违反了规则。

提交举报时，请附上清晰的证据、相关的时间戳、适用时的位置或坐标，以及足够的背景信息，帮助我们了解被举报行为前后发生了什么。`,
  $m = () => `Anhand der bereitgestellten Informationen konnten wir nicht bestätigen, was passiert ist.

Die Meldung zeigt möglicherweise einen Teil der Situation, enthält aber nicht genug Kontext, damit das Moderationsteam den gesamten Vorfall verstehen, den Ablauf der Ereignisse überprüfen oder feststellen kann, ob eine Regel verletzt wurde.

Füge beim Einreichen einer Meldung bitte klare Beweise, relevante Zeitstempel, gegebenenfalls Ort oder Koordinaten sowie genügend Kontext hinzu, damit wir verstehen, was vor und nach der gemeldeten Aktion geschah.`,
  Xm = () => `No pudimos confirmar qué ocurrió con la información proporcionada.

El reporte puede mostrar parte de la situación, pero no incluye contexto suficiente para que el equipo de moderación entienda el incidente completo, verifique la secuencia de los hechos o determine si se infringió una regla.

Al enviar un reporte, incluye pruebas claras, marcas de tiempo relevantes, ubicación o coordenadas cuando corresponda y contexto suficiente para ayudarnos a entender qué ocurrió antes y después de la acción reportada.`,
  Ym = () => `Nous n'avons pas pu confirmer ce qui s'est passé sur la base des informations fournies.

Le signalement montre peut-être une partie de la situation, mais il ne fournit pas assez de contexte pour que l'équipe de modération comprenne l'incident dans son ensemble, vérifie le déroulement des événements ou détermine si une règle a été enfreinte.

Lorsque vous soumettez un signalement, veuillez inclure des preuves claires, les horodatages pertinents, l'emplacement ou les coordonnées le cas échéant, et suffisamment de contexte pour nous aider à comprendre ce qui s'est passé avant et après l'action signalée.`,
  Jm = () => `Non siamo riusciti a confermare cosa sia successo in base alle informazioni fornite.

La segnalazione può mostrare parte della situazione, ma non include abbastanza contesto per permettere al team di moderazione di comprendere l'intero incidente, verificare la sequenza degli eventi o stabilire se una regola sia stata violata.

Quando invii una segnalazione, includi prove chiare, marche temporali pertinenti, posizione o coordinate quando applicabile e contesto sufficiente per aiutarci a capire cosa è successo prima e dopo l'azione segnalata.`,
  Zm = () => `提供された情報からは、何が起きたのかを確認できませんでした。

この報告は状況の一部を示しているかもしれませんが、モデレーションチームが事案の全体像を把握し、出来事の流れを確認し、ルール違反があったかどうかを判断するのに十分な背景情報が含まれていません。

報告を提出する際は、明確な証拠、関連するタイムスタンプ、該当する場合は場所や座標、そして報告された行為の前後に何が起きたかを理解するのに十分な背景情報を含めてください。`,
  Qm = () => `Na podstawie podanych informacji nie mogliśmy potwierdzić, co się wydarzyło.

Zgłoszenie może pokazywać część sytuacji, ale nie zawiera wystarczającego kontekstu, aby zespół moderacji mógł zrozumieć całe zdarzenie, zweryfikować przebieg wydarzeń lub ustalić, czy doszło do naruszenia zasad.

Wysyłając zgłoszenie, dołącz wyraźne dowody, odpowiednie znaczniki czasu, lokalizację lub współrzędne, jeśli dotyczy, oraz wystarczający kontekst, który pomoże nam zrozumieć, co wydarzyło się przed zgłoszonym działaniem i po nim.`,
  eh = () => `На основании предоставленной информации мы не смогли подтвердить, что произошло.

Жалоба может показывать часть ситуации, но в ней недостаточно контекста, чтобы команда модерации могла понять инцидент целиком, проверить последовательность событий или определить, было ли нарушено правило.

При отправке жалобы прилагайте чёткие доказательства, соответствующие временные метки, местоположение или координаты, если применимо, и достаточный контекст, чтобы помочь нам понять, что происходило до и после указанного действия.`,
  th = () => `На основі наданої інформації ми не змогли підтвердити, що сталося.

Скарга може показувати частину ситуації, але в ній недостатньо контексту, щоб команда модерації зрозуміла весь інцидент, перевірила послідовність подій або визначила, чи було порушено правило.

Надсилаючи скаргу, додавайте чіткі докази, відповідні позначки часу, місце або координати, якщо це доречно, і достатньо контексту, щоб допомогти нам зрозуміти, що відбувалося до та після зазначеної дії.`,
  nh = () => `Chúng tôi không thể xác nhận điều gì đã xảy ra dựa trên thông tin được cung cấp.

Báo cáo có thể cho thấy một phần tình huống, nhưng không bao gồm đủ bối cảnh để đội ngũ kiểm duyệt hiểu toàn bộ sự việc, xác minh trình tự các sự kiện hoặc xác định liệu có vi phạm quy tắc hay không.

Khi gửi báo cáo, vui lòng kèm theo bằng chứng rõ ràng, dấu thời gian liên quan, vị trí hoặc tọa độ khi cần, và đủ bối cảnh xung quanh để giúp chúng tôi hiểu điều gì đã xảy ra trước và sau hành động bị báo cáo.`,
  rh = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Wm() : e === "pt" ? Hm() : e === "ch" ? Km() : e === "de" ? $m() : e === "es" ? Xm() : e === "fr" ? Ym() : e === "it" ? Jm() : e === "jp" ? Zm() : e === "pl" ? Qm() : e === "ru" ? eh() : e === "uk" ? th() : nh()
  },
  oh = () => "Insufficient Context",
  ih = () => "Contexto insuficiente",
  ah = () => "背景信息不足",
  sh = () => "Unzureichender Kontext",
  ch = () => "Contexto insuficiente",
  uh = () => "Contexte insuffisant",
  lh = () => "Contesto insufficiente",
  dh = () => "情報が不十分",
  _h = () => "Niewystarczający kontekst",
  fh = () => "Недостаточно контекста",
  ph = () => "Недостатньо контексту",
  mh = () => "Không đủ bối cảnh",
  hh = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? oh() : e === "pt" ? ih() : e === "ch" ? ah() : e === "de" ? sh() : e === "es" ? ch() : e === "fr" ? uh() : e === "it" ? lh() : e === "jp" ? dh() : e === "pl" ? _h() : e === "ru" ? fh() : e === "uk" ? ph() : mh()
  },
  gh = () => `The report contains incorrect, incomplete, inaccessible, or unusable information.

This can happen when the evidence does not match the report, the link is broken, or required details are missing.

Please review the information carefully before submitting a report. Make sure to report the correct player, make sure that it is an actual violation, and make sure to submit enough context details to help the moderation team investigate reports properly.`,
  wh = () => `A denúncia contém informações incorretas, incompletas, inacessíveis ou inutilizáveis.

Isso pode acontecer quando as evidências não correspondem à denúncia, o link está quebrado ou detalhes obrigatórios estão faltando.

Revise as informações com atenção antes de enviar uma denúncia. Certifique-se de denunciar o jogador correto, de que se trata de uma violação real e de fornecer detalhes de contexto suficientes para ajudar a equipe de moderação a investigar as denúncias adequadamente.`,
  yh = () => `该举报包含不正确、不完整、无法访问或无法使用的信息。

这可能是因为证据与举报内容不符、链接失效，或缺少必要的细节。

提交举报前，请仔细核对信息。请确保举报的是正确的玩家、确实存在违规行为，并提供足够的背景细节，以帮助审核团队妥善调查举报。`,
  bh = () => `Die Meldung enthält falsche, unvollständige, nicht zugängliche oder unbrauchbare Informationen.

Das kann passieren, wenn die Beweise nicht zur Meldung passen, der Link defekt ist oder erforderliche Angaben fehlen.

Bitte überprüfe die Informationen sorgfältig, bevor du eine Meldung einreichst. Stelle sicher, dass du den richtigen Spieler meldest, dass es sich tatsächlich um einen Verstoß handelt und dass du genügend Kontextdetails angibst, damit das Moderationsteam Meldungen ordnungsgemäß untersuchen kann.`,
  vh = () => `El reporte contiene información incorrecta, incompleta, inaccesible o inservible.

Esto puede ocurrir cuando las pruebas no coinciden con el reporte, el enlace está roto o faltan datos necesarios.

Revisa la información con cuidado antes de enviar un reporte. Asegúrate de reportar al jugador correcto, de que se trata de una infracción real y de aportar suficientes detalles de contexto para ayudar al equipo de moderación a investigar los reportes adecuadamente.`,
  Eh = () => `Le signalement contient des informations incorrectes, incomplètes, inaccessibles ou inutilisables.

Cela peut arriver lorsque les preuves ne correspondent pas au signalement, que le lien est rompu ou que des détails requis sont manquants.

Veuillez vérifier attentivement les informations avant de soumettre un signalement. Assurez-vous de signaler le bon joueur, qu'il s'agit bien d'une véritable infraction et de fournir suffisamment de détails de contexte pour aider l'équipe de modération à enquêter correctement sur les signalements.`,
  Th = () => `La segnalazione contiene informazioni errate, incomplete, inaccessibili o inutilizzabili.

Ciò può accadere quando le prove non corrispondono alla segnalazione, il link è interrotto o mancano dettagli obbligatori.

Controlla attentamente le informazioni prima di inviare una segnalazione. Assicurati di segnalare il giocatore corretto, che si tratti di una violazione reale e di fornire dettagli di contesto sufficienti per aiutare il team di moderazione a investigare correttamente le segnalazioni.`,
  Sh = () => `この報告には、誤った、不完全な、アクセスできない、または使用できない情報が含まれています。

これは、証拠が報告内容と一致しない、リンクが切れている、または必要な詳細が欠けている場合に起こり得ます。

報告を提出する前に、情報を注意深く確認してください。正しいプレイヤーを報告していること、実際に違反であること、そしてモデレーションチームが報告を適切に調査できるよう十分な背景情報を提出していることを確認してください。`,
  kh = () => `Zgłoszenie zawiera nieprawidłowe, niepełne, niedostępne lub nieprzydatne informacje.

Może się to zdarzyć, gdy dowody nie pasują do zgłoszenia, link jest nieaktywny lub brakuje wymaganych szczegółów.

Przed wysłaniem zgłoszenia dokładnie sprawdź informacje. Upewnij się, że zgłaszasz właściwego gracza, że jest to rzeczywiste naruszenie oraz że podajesz wystarczające szczegóły kontekstu, aby pomóc zespołowi moderacji prawidłowo zbadać zgłoszenia.`,
  Oh = () => `Жалоба содержит неверную, неполную, недоступную или непригодную информацию.

Это может произойти, когда доказательства не соответствуют жалобе, ссылка не работает или отсутствуют необходимые сведения.

Внимательно проверьте информацию перед отправкой жалобы. Убедитесь, что вы жалуетесь на нужного игрока, что это действительно нарушение, и что вы предоставили достаточно контекстных деталей, чтобы помочь команде модерации правильно расследовать жалобы.`,
  Ah = () => `Скарга містить неправильну, неповну, недоступну або непридатну інформацію.

Це може статися, коли докази не відповідають скарзі, посилання не працює або відсутні обов'язкові деталі.

Уважно перевірте інформацію перед надсиланням скарги. Переконайтеся, що ви скаржитеся на правильного гравця, що це справді порушення, і що ви надаєте достатньо контекстних деталей, щоб допомогти команді модерації належно розслідувати скарги.`,
  Rh = () => `Báo cáo chứa thông tin không chính xác, không đầy đủ, không truy cập được hoặc không sử dụng được.

Điều này có thể xảy ra khi bằng chứng không khớp với báo cáo, liên kết bị hỏng hoặc thiếu các chi tiết bắt buộc.

Vui lòng xem lại thông tin cẩn thận trước khi gửi báo cáo. Hãy chắc chắn rằng bạn báo cáo đúng người chơi, rằng đó thực sự là một vi phạm, và cung cấp đủ chi tiết bối cảnh để giúp đội ngũ kiểm duyệt điều tra báo cáo một cách hợp lý.`,
  Ih = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? gh() : e === "pt" ? wh() : e === "ch" ? yh() : e === "de" ? bh() : e === "es" ? vh() : e === "fr" ? Eh() : e === "it" ? Th() : e === "jp" ? Sh() : e === "pl" ? kh() : e === "ru" ? Oh() : e === "uk" ? Ah() : Rh()
  },
  Nh = () => "Invalid Information",
  Lh = () => "Informação inválida",
  Dh = () => "信息无效",
  Ph = () => "Ungültige Informationen",
  xh = () => "Información no válida",
  zh = () => "Informations non valides",
  Mh = () => "Informazioni non valide",
  Ch = () => "無効な情報",
  jh = () => "Nieprawidłowe informacje",
  Bh = () => "Недействительная информация",
  Fh = () => "Недійсна інформація",
  Uh = () => "Thông tin không hợp lệ",
  Gh = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Nh() : e === "pt" ? Lh() : e === "ch" ? Dh() : e === "de" ? Ph() : e === "es" ? xh() : e === "fr" ? zh() : e === "it" ? Mh() : e === "jp" ? Ch() : e === "pl" ? jh() : e === "ru" ? Bh() : e === "uk" ? Fh() : Uh()
  },
  qh = () => `The reported behavior does not appear to violate the current rules.

The situation may have been frustrating, unwanted, or disruptive from your perspective, but based on the evidence provided, it does not meet the criteria for a rule violation.

Moderation actions are only taken when a report clearly shows behavior that breaks the rules. If you believe this decision is incorrect, please make sure future reports include enough context explaining why you believe that a rule was violated.`,
  Vh = () => `O comportamento denunciado não parece violar as regras atuais.

A situação pode ter sido frustrante, indesejada ou perturbadora do seu ponto de vista, mas, com base nas evidências fornecidas, ela não atende aos critérios de uma violação de regra.

Ações de moderação só são tomadas quando uma denúncia mostra claramente um comportamento que infringe as regras. Se você acredita que esta decisão está incorreta, certifique-se de que futuras denúncias incluam contexto suficiente explicando por que você acredita que uma regra foi violada.`,
  Wh = () => `被举报的行为似乎并未违反当前规则。

从您的角度看，这种情况可能令人沮丧、不受欢迎或具有干扰性，但根据所提供的证据，它并不符合违规的标准。

只有当举报清楚地显示出违反规则的行为时，才会采取审核措施。如果您认为此决定有误，请确保今后的举报包含足够的背景信息，说明您为何认为某条规则被违反。`,
  Hh = () => `Das gemeldete Verhalten scheint nicht gegen die aktuellen Regeln zu verstoßen.

Die Situation mag aus deiner Sicht frustrierend, unerwünscht oder störend gewesen sein, aber auf Grundlage der vorgelegten Beweise erfüllt sie nicht die Kriterien für einen Regelverstoß.

Moderationsmaßnahmen werden nur ergriffen, wenn eine Meldung eindeutig ein Verhalten zeigt, das gegen die Regeln verstößt. Wenn du der Meinung bist, dass diese Entscheidung falsch ist, achte bitte darauf, dass künftige Meldungen genügend Kontext enthalten und erklären, warum du glaubst, dass eine Regel verletzt wurde.`,
  Kh = () => `El comportamiento reportado no parece infringir las reglas actuales.

La situación pudo haber sido frustrante, no deseada o molesta desde tu punto de vista, pero, según las pruebas aportadas, no cumple los criterios de una infracción de reglas.

Las acciones de moderación solo se toman cuando un reporte muestra claramente un comportamiento que rompe las reglas. Si crees que esta decisión es incorrecta, asegúrate de que los reportes futuros incluyan suficiente contexto que explique por qué consideras que se infringió una regla.`,
  $h = () => `Le comportement signalé ne semble pas enfreindre les règles actuelles.

La situation a peut-être été frustrante, indésirable ou perturbante de votre point de vue, mais d'après les preuves fournies, elle ne remplit pas les critères d'une infraction aux règles.

Des mesures de modération ne sont prises que lorsqu'un signalement montre clairement un comportement qui enfreint les règles. Si vous pensez que cette décision est incorrecte, veillez à ce que vos futurs signalements incluent suffisamment de contexte expliquant pourquoi vous estimez qu'une règle a été enfreinte.`,
  Xh = () => `Il comportamento segnalato non sembra violare le regole attuali.

La situazione potrebbe essere stata frustrante, indesiderata o fastidiosa dal tuo punto di vista, ma in base alle prove fornite non soddisfa i criteri di una violazione delle regole.

Le azioni di moderazione vengono intraprese solo quando una segnalazione mostra chiaramente un comportamento che infrange le regole. Se ritieni che questa decisione sia errata, assicurati che le segnalazioni future includano contesto sufficiente a spiegare perché ritieni che una regola sia stata violata.`,
  Yh = () => `報告された行為は、現在のルールに違反していないようです。

その状況は、あなたの視点ではいら立たしく、望ましくなく、または迷惑なものだったかもしれませんが、提供された証拠に基づくと、ルール違反の基準を満たしていません。

モデレーションの措置は、報告が明確にルールを破る行為を示している場合にのみ行われます。この判断が誤っていると思われる場合は、今後の報告に、なぜルール違反だと考えるのかを説明する十分な背景情報を含めるようにしてください。`,
  Jh = () => `Zgłoszone zachowanie nie wydaje się naruszać obowiązujących zasad.

Sytuacja mogła być z twojej perspektywy frustrująca, niechciana lub uciążliwa, ale na podstawie dostarczonych dowodów nie spełnia kryteriów naruszenia zasad.

Działania moderacyjne są podejmowane tylko wtedy, gdy zgłoszenie wyraźnie pokazuje zachowanie łamiące zasady. Jeśli uważasz, że ta decyzja jest błędna, zadbaj o to, aby przyszłe zgłoszenia zawierały wystarczający kontekst wyjaśniający, dlaczego uważasz, że doszło do naruszenia zasad.`,
  Zh = () => `Указанное поведение, по-видимому, не нарушает действующих правил.

С вашей точки зрения ситуация могла быть неприятной, нежелательной или мешающей, но на основании предоставленных доказательств она не соответствует критериям нарушения правил.

Меры модерации принимаются только тогда, когда жалоба чётко показывает поведение, нарушающее правила. Если вы считаете, что это решение неверно, постарайтесь, чтобы будущие жалобы содержали достаточно контекста, объясняющего, почему вы считаете, что правило было нарушено.`,
  Qh = () => `Зазначена поведінка, схоже, не порушує чинних правил.

З вашого погляду ситуація могла бути неприємною, небажаною або такою, що заважає, але на основі наданих доказів вона не відповідає критеріям порушення правил.

Заходи модерації вживаються лише тоді, коли скарга чітко показує поведінку, що порушує правила. Якщо ви вважаєте, що це рішення неправильне, подбайте, щоб майбутні скарги містили достатньо контексту з поясненням, чому ви вважаєте, що правило було порушено.`,
  eg = () => `Hành vi bị báo cáo dường như không vi phạm các quy tắc hiện hành.

Tình huống có thể gây bực bội, không mong muốn hoặc gây phiền toái từ góc nhìn của bạn, nhưng dựa trên bằng chứng được cung cấp, nó không đáp ứng tiêu chí của một vi phạm quy tắc.

Các biện pháp kiểm duyệt chỉ được áp dụng khi một báo cáo cho thấy rõ hành vi vi phạm quy tắc. Nếu bạn cho rằng quyết định này không đúng, hãy đảm bảo các báo cáo trong tương lai có đủ bối cảnh giải thích vì sao bạn tin rằng một quy tắc đã bị vi phạm.`,
  tg = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? qh() : e === "pt" ? Vh() : e === "ch" ? Wh() : e === "de" ? Hh() : e === "es" ? Kh() : e === "fr" ? $h() : e === "it" ? Xh() : e === "jp" ? Yh() : e === "pl" ? Jh() : e === "ru" ? Zh() : e === "uk" ? Qh() : eg()
  },
  ng = () => "No Rule Violation",
  rg = () => "Nenhuma violação de regra",
  og = () => "未违反规则",
  ig = () => "Kein Regelverstoß",
  ag = () => "Sin infracción de reglas",
  sg = () => "Aucune infraction aux règles",
  cg = () => "Nessuna violazione delle regole",
  ug = () => "ルール違反なし",
  lg = () => "Brak naruszenia zasad",
  dg = () => "Нарушения правил нет",
  _g = () => "Порушення правил немає",
  fg = () => "Không vi phạm quy tắc",
  pg = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ng() : e === "pt" ? rg() : e === "ch" ? og() : e === "de" ? ig() : e === "es" ? ag() : e === "fr" ? sg() : e === "it" ? cg() : e === "jp" ? ug() : e === "pl" ? lg() : e === "ru" ? dg() : e === "uk" ? _g() : fg()
  },
  mg = () => `The report shows behavior that may be questionable, but it is not severe or clear enough to justify a moderation action.

Some situations may be inappropriate, annoying, or borderline, but still not reach the threshold required for a punishment. In these cases, the moderation team may choose not to take formal action unless the behavior continues or becomes more serious.

If this happens again, please submit a new report with additional evidence showing a repeated pattern or a more serious violation.`,
  hg = () => `A denúncia mostra um comportamento que pode ser questionável, mas não é grave nem claro o suficiente para justificar uma ação de moderação.

Algumas situações podem ser inadequadas, irritantes ou limítrofes, mas ainda assim não atingem o limite necessário para uma punição. Nesses casos, a equipe de moderação pode optar por não tomar uma ação formal, a menos que o comportamento continue ou se torne mais grave.

Se isso acontecer novamente, envie uma nova denúncia com evidências adicionais que mostrem um padrão repetido ou uma violação mais grave.`,
  gg = () => `该举报显示的行为可能存在问题，但还不够严重或明确，不足以采取审核措施。

某些情况可能不恰当、令人厌烦或处于灰色地带，但仍未达到处罚所需的门槛。在这种情况下，除非该行为继续发生或变得更加严重，否则审核团队可能选择不采取正式行动。

如果此情况再次发生，请提交一份新的举报，并附上能显示重复行为模式或更严重违规的额外证据。`,
  wg = () => `Die Meldung zeigt ein Verhalten, das fragwürdig sein mag, aber nicht schwerwiegend oder eindeutig genug ist, um eine Moderationsmaßnahme zu rechtfertigen.

Manche Situationen sind vielleicht unangemessen, störend oder grenzwertig, erreichen aber dennoch nicht die für eine Strafe erforderliche Schwelle. In solchen Fällen kann das Moderationsteam entscheiden, keine formelle Maßnahme zu ergreifen, sofern das Verhalten nicht anhält oder schwerwiegender wird.

Wenn dies erneut geschieht, reiche bitte eine neue Meldung mit zusätzlichen Beweisen ein, die ein wiederholtes Muster oder einen schwerwiegenderen Verstoß zeigen.`,
  yg = () => `El reporte muestra un comportamiento que puede ser cuestionable, pero no es lo bastante grave ni claro como para justificar una acción de moderación.

Algunas situaciones pueden ser inapropiadas, molestas o estar en el límite, pero aun así no alcanzan el umbral necesario para una sanción. En estos casos, el equipo de moderación puede optar por no tomar medidas formales a menos que el comportamiento continúe o se agrave.

Si esto vuelve a ocurrir, envía un nuevo reporte con pruebas adicionales que muestren un patrón repetido o una infracción más grave.`,
  bg = () => `Le signalement montre un comportement qui peut être discutable, mais qui n'est pas assez grave ou clair pour justifier une mesure de modération.

Certaines situations peuvent être inappropriées, agaçantes ou limites, sans pour autant atteindre le seuil requis pour une sanction. Dans ces cas, l'équipe de modération peut choisir de ne pas prendre de mesure formelle, sauf si le comportement persiste ou s'aggrave.

Si cela se reproduit, veuillez soumettre un nouveau signalement avec des preuves supplémentaires montrant un schéma répété ou une infraction plus grave.`,
  vg = () => `La segnalazione mostra un comportamento che può essere discutibile, ma non è abbastanza grave o chiaro da giustificare un'azione di moderazione.

Alcune situazioni possono essere inappropriate, fastidiose o al limite, ma non raggiungono comunque la soglia richiesta per una punizione. In questi casi, il team di moderazione può scegliere di non intervenire formalmente, a meno che il comportamento non continui o diventi più grave.

Se dovesse ripetersi, invia una nuova segnalazione con prove aggiuntive che mostrino uno schema ripetuto o una violazione più grave.`,
  Eg = () => `この報告は、問題があるかもしれない行為を示していますが、モデレーションの措置を正当化するほど深刻でも明確でもありません。

一部の状況は不適切だったり、迷惑だったり、際どいものだったりするかもしれませんが、それでも処分に必要な基準には達していません。こうした場合、行為が続いたりより深刻になったりしない限り、モデレーションチームは正式な措置を取らないことを選ぶことがあります。

再び起きた場合は、繰り返しのパターンやより深刻な違反を示す追加の証拠を添えて、新しい報告を提出してください。`,
  Tg = () => `Zgłoszenie pokazuje zachowanie, które może budzić wątpliwości, ale nie jest na tyle poważne ani jednoznaczne, aby uzasadniać działanie moderacyjne.

Niektóre sytuacje mogą być nieodpowiednie, irytujące lub graniczne, a mimo to nie osiągają progu wymaganego do nałożenia kary. W takich przypadkach zespół moderacji może nie podjąć formalnych działań, chyba że zachowanie będzie się powtarzać lub stanie się poważniejsze.

Jeśli sytuacja się powtórzy, prześlij nowe zgłoszenie z dodatkowymi dowodami pokazującymi powtarzający się wzorzec lub poważniejsze naruszenie.`,
  Sg = () => `Жалоба показывает поведение, которое может вызывать сомнения, но оно недостаточно серьёзное или явное, чтобы оправдать меры модерации.

Некоторые ситуации могут быть неуместными, раздражающими или пограничными, но всё же не достигают порога, необходимого для наказания. В таких случаях команда модерации может решить не предпринимать официальных действий, если поведение не продолжится или не станет более серьёзным.

Если это повторится, отправьте новую жалобу с дополнительными доказательствами, показывающими повторяющийся характер или более серьёзное нарушение.`,
  kg = () => `Скарга показує поведінку, яка може викликати сумніви, але вона недостатньо серйозна чи однозначна, щоб виправдати захід модерації.

Деякі ситуації можуть бути недоречними, дратівливими або межовими, але все ж не досягають порогу, потрібного для покарання. У таких випадках команда модерації може вирішити не вживати офіційних заходів, якщо поведінка не повторюватиметься або не стане серйознішою.

Якщо це повториться, надішліть нову скаргу з додатковими доказами, що показують повторюваний характер або серйозніше порушення.`,
  Og = () => `Báo cáo cho thấy hành vi có thể đáng ngờ, nhưng chưa đủ nghiêm trọng hoặc rõ ràng để biện minh cho một biện pháp kiểm duyệt.

Một số tình huống có thể không phù hợp, gây khó chịu hoặc nằm ở ranh giới, nhưng vẫn chưa đạt đến mức cần thiết để xử phạt. Trong những trường hợp này, đội ngũ kiểm duyệt có thể chọn không hành động chính thức trừ khi hành vi tiếp diễn hoặc trở nên nghiêm trọng hơn.

Nếu điều này lại xảy ra, vui lòng gửi một báo cáo mới kèm bằng chứng bổ sung cho thấy một khuôn mẫu lặp lại hoặc một vi phạm nghiêm trọng hơn.`,
  Ag = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? mg() : e === "pt" ? hg() : e === "ch" ? gg() : e === "de" ? wg() : e === "es" ? yg() : e === "fr" ? bg() : e === "it" ? vg() : e === "jp" ? Eg() : e === "pl" ? Tg() : e === "ru" ? Sg() : e === "uk" ? kg() : Og()
  },
  Rg = () => "Not Enough for Punishment",
  Ig = () => "Insuficiente para punição",
  Ng = () => "不足以处罚",
  Lg = () => "Nicht ausreichend für eine Strafe",
  Dg = () => "Insuficiente para una sanción",
  Pg = () => "Insuffisant pour une sanction",
  xg = () => "Insufficiente per una punizione",
  zg = () => "処分には不十分",
  Mg = () => "Niewystarczające do nałożenia kary",
  Cg = () => "Недостаточно для наказания",
  jg = () => "Недостатньо для покарання",
  Bg = () => "Không đủ để xử phạt",
  Fg = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Rg() : e === "pt" ? Ig() : e === "ch" ? Ng() : e === "de" ? Lg() : e === "es" ? Dg() : e === "fr" ? Pg() : e === "it" ? xg() : e === "jp" ? zg() : e === "pl" ? Mg() : e === "ru" ? Cg() : e === "uk" ? jg() : Bg()
  },
  Ug = () => `This report is outside the scope of what the moderation team can act on through the report system.

This may include issues that happened outside the game, personal disputes, support requests, appeals, bug reports, or situations that are not covered by the current moderation rules.

Please use the correct support channel if your issue is related to technical problems, account issues, appeals, or other non-moderation matters.`,
  Gg = () => `Esta denúncia está fora do escopo daquilo que a equipe de moderação pode tratar pelo sistema de denúncias.

Isso pode incluir problemas que aconteceram fora do jogo, disputas pessoais, pedidos de suporte, apelos, relatos de bugs ou situações que não são abrangidas pelas regras de moderação atuais.

Use o canal de suporte correto se o seu problema estiver relacionado a problemas técnicos, questões de conta, apelos ou outros assuntos que não sejam de moderação.`,
  qg = () => `此举报超出了审核团队通过举报系统能够处理的范围。

这可能包括发生在游戏之外的问题、个人纠纷、支持请求、申诉、漏洞报告，或当前审核规则未涵盖的情况。

如果您的问题与技术故障、账户问题、申诉或其他非审核事项有关，请使用正确的支持渠道。`,
  Vg = () => `Diese Meldung liegt außerhalb dessen, was das Moderationsteam über das Meldesystem bearbeiten kann.

Dazu können Probleme gehören, die außerhalb des Spiels aufgetreten sind, persönliche Streitigkeiten, Support-Anfragen, Einsprüche, Fehlerberichte oder Situationen, die nicht von den aktuellen Moderationsregeln abgedeckt sind.

Bitte nutze den richtigen Support-Kanal, wenn dein Anliegen technische Probleme, Kontoangelegenheiten, Einsprüche oder andere nicht zur Moderation gehörende Themen betrifft.`,
  Wg = () => `Este reporte está fuera del alcance de lo que el equipo de moderación puede gestionar a través del sistema de reportes.

Esto puede incluir problemas ocurridos fuera del juego, disputas personales, solicitudes de soporte, apelaciones, reportes de errores o situaciones que no están cubiertas por las reglas de moderación actuales.

Utiliza el canal de soporte correcto si tu problema está relacionado con problemas técnicos, asuntos de cuenta, apelaciones u otros temas ajenos a la moderación.`,
  Hg = () => `Ce signalement dépasse le champ d'action de l'équipe de modération via le système de signalement.

Cela peut inclure des problèmes survenus en dehors du jeu, des différends personnels, des demandes d'assistance, des recours, des rapports de bugs ou des situations qui ne sont pas couvertes par les règles de modération actuelles.

Veuillez utiliser le bon canal d'assistance si votre problème concerne des soucis techniques, des questions de compte, des recours ou d'autres sujets ne relevant pas de la modération.`,
  Kg = () => `Questa segnalazione esula da ciò che il team di moderazione può gestire tramite il sistema di segnalazione.

Può includere problemi avvenuti al di fuori del gioco, dispute personali, richieste di assistenza, ricorsi, segnalazioni di bug o situazioni non coperte dalle attuali regole di moderazione.

Utilizza il canale di assistenza corretto se il tuo problema riguarda questioni tecniche, problemi di account, ricorsi o altre questioni non legate alla moderazione.`,
  $g = () => `この報告は、モデレーションチームが報告システムを通じて対応できる範囲を超えています。

これには、ゲーム外で起きた問題、個人的なトラブル、サポート依頼、異議申し立て、バグ報告、または現在のモデレーションルールでは扱えない状況が含まれる場合があります。

技術的な問題、アカウントの問題、異議申し立て、その他モデレーション以外の事項に関する場合は、適切なサポート窓口をご利用ください。`,
  Xg = () => `To zgłoszenie wykracza poza zakres tego, czym zespół moderacji może się zająć za pośrednictwem systemu zgłoszeń.

Może to obejmować problemy, które miały miejsce poza grą, spory osobiste, prośby o wsparcie, odwołania, zgłoszenia błędów lub sytuacje nieobjęte obecnymi zasadami moderacji.

Skorzystaj z właściwego kanału wsparcia, jeśli twój problem dotyczy kwestii technicznych, spraw związanych z kontem, odwołań lub innych zagadnień niezwiązanych z moderacją.`,
  Yg = () => `Эта жалоба выходит за рамки того, что команда модерации может рассматривать через систему жалоб.

Сюда могут относиться проблемы, возникшие вне игры, личные споры, обращения в поддержку, апелляции, сообщения об ошибках или ситуации, не охваченные действующими правилами модерации.

Пожалуйста, используйте подходящий канал поддержки, если ваш вопрос связан с техническими проблемами, вопросами учётной записи, апелляциями или другими темами, не относящимися к модерации.`,
  Jg = () => `Ця скарга виходить за межі того, що команда модерації може розглядати через систему скарг.

Сюди можуть належати проблеми, що сталися поза грою, особисті суперечки, звернення до підтримки, апеляції, повідомлення про помилки або ситуації, не охоплені чинними правилами модерації.

Будь ласка, скористайтеся відповідним каналом підтримки, якщо ваше питання стосується технічних проблем, питань облікового запису, апеляцій або інших тем, не пов'язаних із модерацією.`,
  Zg = () => `Báo cáo này nằm ngoài phạm vi mà đội ngũ kiểm duyệt có thể xử lý qua hệ thống báo cáo.

Điều này có thể bao gồm các vấn đề xảy ra bên ngoài trò chơi, tranh chấp cá nhân, yêu cầu hỗ trợ, kháng cáo, báo cáo lỗi hoặc các tình huống không thuộc phạm vi các quy tắc kiểm duyệt hiện hành.

Vui lòng sử dụng kênh hỗ trợ phù hợp nếu vấn đề của bạn liên quan đến sự cố kỹ thuật, vấn đề tài khoản, kháng cáo hoặc các vấn đề khác không thuộc về kiểm duyệt.`,
  Qg = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ug() : e === "pt" ? Gg() : e === "ch" ? qg() : e === "de" ? Vg() : e === "es" ? Wg() : e === "fr" ? Hg() : e === "it" ? Kg() : e === "jp" ? $g() : e === "pl" ? Xg() : e === "ru" ? Yg() : e === "uk" ? Jg() : Zg()
  },
  ew = () => "Out of Scope",
  tw = () => "Fora do escopo",
  nw = () => "超出处理范围",
  rw = () => "Außerhalb des Zuständigkeitsbereichs",
  ow = () => "Fuera del alcance",
  iw = () => "Hors du champ d'action",
  aw = () => "Fuori ambito",
  sw = () => "対応範囲外",
  cw = () => "Poza zakresem",
  uw = () => "Вне зоны ответственности",
  lw = () => "Поза межами компетенції",
  dw = () => "Ngoài phạm vi xử lý",
  _w = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ew() : e === "pt" ? tw() : e === "ch" ? nw() : e === "de" ? rw() : e === "es" ? ow() : e === "fr" ? iw() : e === "it" ? aw() : e === "jp" ? sw() : e === "pl" ? cw() : e === "ru" ? uw() : e === "uk" ? lw() : dw()
  },
  fw = () => "Inappropriate content",
  pw = () => "Conteúdo inapropriado",
  mw = () => "不当内容",
  hw = () => "Unangemessene Inhalte",
  gw = () => "Contenido inapropiado",
  ww = () => "Contenu inapproprié",
  yw = () => "Contenuto inappropriato",
  bw = () => "不適切なコンテンツ",
  vw = () => "Nieodpowiednie treści",
  Ew = () => "Неприемлемый контент",
  Tw = () => "Неприйнятний вміст",
  Sw = () => "Nội dung không phù hợp",
  kw = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? fw() : e === "pt" ? pw() : e === "ch" ? mw() : e === "de" ? hw() : e === "es" ? gw() : e === "fr" ? ww() : e === "it" ? yw() : e === "jp" ? bw() : e === "pl" ? vw() : e === "ru" ? Ew() : e === "uk" ? Tw() : Sw()
  },
  Ow = () => "Explicit, hateful, or illegal content",
  Aw = () => "Conteúdo explícito, de ódio ou ilegal",
  Rw = () => "露骨、仇恨或非法内容",
  Iw = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  Nw = () => "Contenido explícito, de odio o ilegal",
  Lw = () => "Contenu explicite, haineux ou illégal",
  Dw = () => "Contenuto esplicito, d'odio o illegale",
  Pw = () => "露骨、差別的、または違法なコンテンツ",
  xw = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  zw = () => "Откровенный, разжигающий ненависть или незаконный контент",
  Mw = () => "Відвертий, ворожий або незаконний вміст",
  Cw = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  jw = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ow() : e === "pt" ? Aw() : e === "ch" ? Rw() : e === "de" ? Iw() : e === "es" ? Nw() : e === "fr" ? Lw() : e === "it" ? Dw() : e === "jp" ? Pw() : e === "pl" ? xw() : e === "ru" ? zw() : e === "uk" ? Mw() : Cw()
  },
  Bw = () => "Invalid captcha. Please try again.",
  Fw = () => "Captcha inválido. Por favor, tente novamente.",
  Uw = () => "验证码无效，请重试。",
  Gw = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  qw = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Vw = () => "Captcha invalide. Veuillez réessayer.",
  Ww = () => "Captcha non valido. Riprova.",
  Hw = () => "キャプチャが無効です。もう一度お試しください。",
  Kw = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  $w = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  Xw = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Yw = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Jw = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Bw() : e === "pt" ? Fw() : e === "ch" ? Uw() : e === "de" ? Gw() : e === "es" ? qw() : e === "fr" ? Vw() : e === "it" ? Ww() : e === "jp" ? Hw() : e === "pl" ? Kw() : e === "ru" ? $w() : e === "uk" ? Xw() : Yw()
  },
  Zw = () => "Invalid challenge response",
  Qw = () => "Resposta de desafio inválida",
  ey = () => "质询响应无效",
  ty = () => "Ungültige Challenge-Antwort",
  ny = () => "Respuesta de desafío inválida",
  ry = () => "Réponse au défi invalide",
  oy = () => "Risposta alla sfida non valida",
  iy = () => "無効なチャレンジ応答",
  ay = () => "Nieprawidłowa odpowiedź na wyzwanie",
  sy = () => "Неверный ответ на вызов",
  cy = () => "Недійсна відповідь на виклик",
  uy = () => "Phản hồi thử thách không hợp lệ",
  ly = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Zw() : e === "pt" ? Qw() : e === "ch" ? ey() : e === "de" ? ty() : e === "es" ? ny() : e === "fr" ? ry() : e === "it" ? oy() : e === "jp" ? iy() : e === "pl" ? ay() : e === "ru" ? sy() : e === "uk" ? cy() : uy()
  },
  dy = () => "The verification code is incorrect. Please check it and try again.",
  _y = () => "Código inválido",
  fy = () => "验证码不正确。请检查后重试。",
  py = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  my = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  hy = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  gy = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  wy = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  yy = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  by = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  vy = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  Ey = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  Ty = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? dy() : e === "pt" ? _y() : e === "ch" ? fy() : e === "de" ? py() : e === "es" ? my() : e === "fr" ? hy() : e === "it" ? gy() : e === "jp" ? wy() : e === "pl" ? yy() : e === "ru" ? by() : e === "uk" ? vy() : Ey()
  },
  Sy = () => "Invalid discord.",
  ky = () => "Discord inválido.",
  Oy = () => "无效的 Discord。",
  Ay = () => "Ungültiger Discord.",
  Ry = () => "Discord inválido.",
  Iy = () => "Discord invalide.",
  Ny = () => "Discord non valido.",
  Ly = () => "無効なDiscordアカウントです。",
  Dy = () => "Nieprawidłowy Discord.",
  Py = () => "Неверный Discord.",
  xy = () => "Некоректний Discord.",
  zy = () => "Discord không hợp lệ.",
  My = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Sy() : e === "pt" ? ky() : e === "ch" ? Oy() : e === "de" ? Ay() : e === "es" ? Ry() : e === "fr" ? Iy() : e === "it" ? Ny() : e === "jp" ? Ly() : e === "pl" ? Dy() : e === "ru" ? Py() : e === "uk" ? xy() : zy()
  },
  Cy = () => "The name contains disallowed characters or words. Please choose a different name.",
  jy = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  By = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Fy = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Uy = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Gy = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  qy = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Vy = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Wy = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Hy = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Ky = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  $y = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Un = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Cy() : e === "pt" ? jy() : e === "ch" ? By() : e === "de" ? Fy() : e === "es" ? Uy() : e === "fr" ? Gy() : e === "it" ? qy() : e === "jp" ? Vy() : e === "pl" ? Wy() : e === "ru" ? Hy() : e === "uk" ? Ky() : $y()
  },
  Xy = () => "Please enter a valid phone number with country code.",
  Yy = () => "Insira um número de telefone válido com código do país.",
  Jy = () => "请输入带国家代码的有效电话号码。",
  Zy = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  Qy = () => "Introduce un número de teléfono válido con código de país.",
  eb = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  tb = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  nb = () => "国番号付きの有効な電話番号を入力してください。",
  rb = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  ob = () => "Введите действительный номер телефона с кодом страны.",
  ib = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  ab = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  sb = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Xy() : e === "pt" ? Yy() : e === "ch" ? Jy() : e === "de" ? Zy() : e === "es" ? Qy() : e === "fr" ? eb() : e === "it" ? tb() : e === "jp" ? nb() : e === "pl" ? rb() : e === "ru" ? ob() : e === "uk" ? ib() : ab()
  },
  cb = () => "Phone number not supported. Please try another number.",
  ub = () => "Número de telefone não suportado. Por favor, tente outro número.",
  lb = () => "不支持此电话号码。请尝试其他号码。",
  db = () => "Telefonnummer nicht unterstützt. Bitte versuche eine andere Nummer.",
  _b = () => "Número de teléfono no compatible. Por favor, prueba con otro número.",
  fb = () => "Numéro de téléphone non pris en charge. Veuillez essayer un autre numéro.",
  pb = () => "Numero di telefono non supportato. Prova con un altro numero.",
  mb = () => "この電話番号はサポートされていません。別の番号をお試しください。",
  hb = () => "Numer telefonu nie jest obsługiwany. Spróbuj innego numeru.",
  gb = () => "Номер телефона не поддерживается. Пожалуйста, попробуйте другой номер.",
  wb = () => "Номер телефону не підтримується. Будь ласка, спробуйте інший номер.",
  yb = () => "Số điện thoại không được hỗ trợ. Vui lòng thử số khác.",
  bb = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? cb() : e === "pt" ? ub() : e === "ch" ? lb() : e === "de" ? db() : e === "es" ? _b() : e === "fr" ? fb() : e === "it" ? pb() : e === "jp" ? mb() : e === "pl" ? hb() : e === "ru" ? gb() : e === "uk" ? wb() : yb()
  },
  vb = () => "The new leader must be a member of the alliance",
  Eb = () => "O novo líder deve ser um membro da aliança",
  Tb = () => "新盟主必须是联盟成员",
  Sb = () => "Der neue Anführer muss Mitglied der Allianz sein",
  kb = () => "El nuevo líder debe ser miembro de la alianza",
  Ob = () => "Le nouveau chef doit être membre de l’alliance",
  Ab = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Rb = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Ib = () => "Nowy lider musi być członkiem sojuszu",
  Nb = () => "Новый лидер должен быть участником альянса",
  Lb = () => "Новий лідер має бути учасником альянсу",
  Db = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Pb = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? vb() : e === "pt" ? Eb() : e === "ch" ? Tb() : e === "de" ? Sb() : e === "es" ? kb() : e === "fr" ? Ob() : e === "it" ? Ab() : e === "jp" ? Rb() : e === "pl" ? Ib() : e === "ru" ? Nb() : e === "uk" ? Lb() : Db()
  },
  xb = () => "Leaderboard is temporarily disabled",
  zb = () => "O ranking está temporariamente desativado",
  Mb = () => "排行榜已暂时停用",
  Cb = () => "Die Bestenliste ist vorübergehend deaktiviert",
  jb = () => "La clasificación está deshabilitada temporalmente",
  Bb = () => "Le classement est temporairement désactivé",
  Fb = () => "La classifica è temporaneamente disattivata",
  Ub = () => "ランキングは一時的に無効になっています。",
  Gb = () => "Ranking jest tymczasowo wyłączony",
  qb = () => "Таблица лидеров временно отключена",
  Vb = () => "Таблиця лідерів тимчасово вимкнена",
  Wb = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  _e = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? xb() : e === "pt" ? zb() : e === "ch" ? Mb() : e === "de" ? Cb() : e === "es" ? jb() : e === "fr" ? Bb() : e === "it" ? Fb() : e === "jp" ? Ub() : e === "pl" ? Gb() : e === "ru" ? qb() : e === "uk" ? Vb() : Wb()
  },
  Hb = () => "Location name is too big (max. 128 characters)",
  Kb = () => "Nome da localização é grande demais (max. 128 caracteres)",
  $b = () => "位置名称过长（最大 128 个字符）",
  Xb = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Yb = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Jb = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Zb = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Qb = () => "場所の名前が長すぎます（最大128文字）。",
  ev = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  tv = () => "Название локации слишком длинное (макс. 128 символов)",
  nv = () => "Назва локації надто довга (макс. 128 символів)",
  rv = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  ov = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Hb() : e === "pt" ? Kb() : e === "ch" ? $b() : e === "de" ? Xb() : e === "es" ? Yb() : e === "fr" ? Jb() : e === "it" ? Zb() : e === "jp" ? Qb() : e === "pl" ? ev() : e === "ru" ? tv() : e === "uk" ? nv() : rv()
  },
  iv = () => "Multi-accounting",
  av = () => "Múltiplas contas",
  sv = () => "多账号",
  cv = () => "Multi-Accounting",
  uv = () => "Multi-cuentas",
  lv = () => "Multi-comptes",
  dv = () => "Multi-account",
  _v = () => "複数アカウント使用",
  fv = () => "Multi-konta",
  pv = () => "Мультиаккаунт",
  mv = () => "Мультиакаунтинг",
  hv = () => "Nhiều tài khoản",
  gv = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? iv() : e === "pt" ? av() : e === "ch" ? sv() : e === "de" ? cv() : e === "es" ? uv() : e === "fr" ? lv() : e === "it" ? dv() : e === "jp" ? _v() : e === "pl" ? fv() : e === "ru" ? pv() : e === "uk" ? mv() : hv()
  },
  wv = () => "Use more than one account to paint pixels",
  yv = () => "Usar mais de uma conta para pintar",
  bv = () => "使用多个账号绘制像素",
  vv = () => "Mehr als ein Konto zum Malen verwenden",
  Ev = () => "Uso de más de una cuenta para pintar píxeles",
  Tv = () => "Utiliser plus d’un compte pour peindre",
  Sv = () => "Usare più di un account per dipingere",
  kv = () => "複数のアカウントを使ってピクセルを塗った。",
  Ov = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Av = () => "Использование более одного аккаунта для рисования",
  Rv = () => "Використання більше ніж одного акаунта для малювання",
  Iv = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Nv = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? wv() : e === "pt" ? yv() : e === "ch" ? bv() : e === "de" ? vv() : e === "es" ? Ev() : e === "fr" ? Tv() : e === "it" ? Sv() : e === "jp" ? kv() : e === "pl" ? Ov() : e === "ru" ? Av() : e === "uk" ? Rv() : Iv()
  },
  Lv = n => `You can change your name again in ${n.days} days`,
  Dv = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  Pv = n => `你可以在 ${n.days} 天后再次修改名称`,
  xv = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  zv = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  Mv = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  Cv = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  jv = n => `${n.days}日後に再び名前を変更できます。`,
  Bv = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  Fv = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Uv = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Gv = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  qv = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Lv(n) : e === "pt" ? Dv(n) : e === "ch" ? Pv(n) : e === "de" ? xv(n) : e === "es" ? zv(n) : e === "fr" ? Mv(n) : e === "it" ? Cv(n) : e === "jp" ? jv(n) : e === "pl" ? Bv(n) : e === "ru" ? Fv(n) : e === "uk" ? Uv(n) : Gv(n)
  },
  Vv = () => "No internet access or the servers are offline. Try again later.",
  Wv = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Hv = () => "没有网络连接或服务器已离线。请稍后重试。",
  Kv = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  $v = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Xv = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Yv = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Jv = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Zv = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Qv = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  eE = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  tE = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  nE = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Vv() : e === "pt" ? Wv() : e === "ch" ? Hv() : e === "de" ? Kv() : e === "es" ? $v() : e === "fr" ? Xv() : e === "it" ? Yv() : e === "jp" ? Jv() : e === "pl" ? Zv() : e === "ru" ? Qv() : e === "uk" ? eE() : tE()
  },
  rE = () => "You are not allowed to verify a phone number. Try refreshing the page",
  oE = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  iE = () => "您无权验证电话号码。请尝试刷新页面。",
  aE = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  sE = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  cE = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  uE = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  lE = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  dE = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  _E = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  fE = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  pE = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  mE = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? rE() : e === "pt" ? oE() : e === "ch" ? iE() : e === "de" ? aE() : e === "es" ? sE() : e === "fr" ? cE() : e === "it" ? uE() : e === "jp" ? lE() : e === "pl" ? dE() : e === "ru" ? _E() : e === "uk" ? fE() : pE()
  },
  hE = () => "Operation not allowed. Maybe you have too many favorite locations.",
  gE = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  wE = () => "操作不被允许。你的收藏位置可能过多。",
  yE = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  bE = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  vE = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  EE = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  TE = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  SE = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  kE = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  OE = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  AE = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  RE = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? hE() : e === "pt" ? gE() : e === "ch" ? wE() : e === "de" ? yE() : e === "es" ? bE() : e === "fr" ? vE() : e === "it" ? EE() : e === "jp" ? TE() : e === "pl" ? SE() : e === "ru" ? kE() : e === "uk" ? OE() : AE()
  },
  IE = n => `Not enough charges: you have ${n.charges} but this overlay needs ${n.pixels}.`,
  NE = n => `Cargas insuficientes: você tem ${n.charges}, mas esta sobreposição precisa de ${n.pixels}.`,
  LE = n => `充能不足：你有 ${n.charges}，但此叠加层需要 ${n.pixels}。`,
  DE = n => `Nicht genügend Ladungen: Du hast ${n.charges}, aber dieses Overlay benötigt ${n.pixels}.`,
  PE = n => `Cargas insuficientes: tienes ${n.charges} pero esta superposición necesita ${n.pixels}.`,
  xE = n => `Charges insuffisantes : vous avez ${n.charges} mais ce calque nécessite ${n.pixels}.`,
  zE = n => `Cariche insufficienti: ne hai ${n.charges} ma questo overlay ne richiede ${n.pixels}.`,
  ME = n => `チャージが足りません：現在 ${n.charges} ですが、このオーバーレイには ${n.pixels} 必要です。`,
  CE = n => `Za mało ładunków: masz ${n.charges}, ale ta nakładka wymaga ${n.pixels}.`,
  jE = n => `Недостаточно зарядов: у вас ${n.charges}, но для этого слоя нужно ${n.pixels}.`,
  BE = n => `Недостатньо зарядів: у вас ${n.charges}, але для цього шару потрібно ${n.pixels}.`,
  FE = n => `Không đủ lượt sơn: bạn có ${n.charges} nhưng lớp phủ này cần ${n.pixels}.`,
  UE = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? IE(n) : e === "pt" ? NE(n) : e === "ch" ? LE(n) : e === "de" ? DE(n) : e === "es" ? PE(n) : e === "fr" ? xE(n) : e === "it" ? zE(n) : e === "jp" ? ME(n) : e === "pl" ? CE(n) : e === "ru" ? jE(n) : e === "uk" ? BE(n) : FE(n)
  },
  GE = () => "You are trying to paint with a color you do not own",
  qE = () => "Você está tentando pintar com uma cor que não possui",
  VE = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  WE = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  HE = () => "Estás intentando pintar con un color que no posees",
  KE = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  $E = () => "Stai cercando di dipingere con un colore che non possiedi",
  XE = () => "所持していない色で塗ろうとしています。",
  YE = () => "Próbujesz malować kolorem, którego nie posiadasz",
  JE = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  ZE = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  QE = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Gn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? GE() : e === "pt" ? qE() : e === "ch" ? VE() : e === "de" ? WE() : e === "es" ? HE() : e === "fr" ? KE() : e === "it" ? $E() : e === "jp" ? XE() : e === "pl" ? YE() : e === "ru" ? JE() : e === "uk" ? ZE() : QE()
  },
  eT = () => "Phone already used",
  tT = () => "Telefone já usado",
  nT = () => "电话号码已被使用",
  rT = () => "Telefonnummer bereits verwendet",
  oT = () => "Teléfono ya utilizado",
  iT = () => "Téléphone déjà utilisé",
  aT = () => "Telefono già utilizzato",
  sT = () => "この電話番号は既に使用されています。",
  cT = () => "Numer telefonu jest już używany",
  uT = () => "Телефон уже используется",
  lT = () => "Номер телефону вже використовується",
  dT = () => "Số điện thoại đã được sử dụng",
  _T = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? eT() : e === "pt" ? tT() : e === "ch" ? nT() : e === "de" ? rT() : e === "es" ? oT() : e === "fr" ? iT() : e === "it" ? aT() : e === "jp" ? sT() : e === "pl" ? cT() : e === "ru" ? uT() : e === "uk" ? lT() : dT()
  },
  fT = () => "This phone number's region is not supported",
  pT = () => "A região deste número de telefone não é suportada",
  mT = () => "此电话号码的地区不受支持",
  hT = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  gT = () => "La región de este número de teléfono no es compatible",
  wT = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  yT = () => "La regione di questo numero di telefono non è supportata",
  bT = () => "この電話番号の地域はサポートされていません",
  vT = () => "Region tego numeru telefonu nie jest obsługiwany",
  ET = () => "Регион этого номера телефона не поддерживается",
  TT = () => "Регіон цього номера телефону не підтримується",
  ST = () => "Vùng của số điện thoại này không được hỗ trợ",
  kT = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? fT() : e === "pt" ? pT() : e === "ch" ? mT() : e === "de" ? hT() : e === "es" ? gT() : e === "fr" ? wT() : e === "it" ? yT() : e === "jp" ? bT() : e === "pl" ? vT() : e === "ru" ? ET() : e === "uk" ? TT() : ST()
  },
  OT = () => "Refresh your page to get the latest update",
  AT = () => "Recarregue sua página para obter as últimas atualizações",
  RT = () => "刷新页面以获取最新更新",
  IT = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  NT = () => "Actualiza la página para obtener la última versión",
  LT = () => "Actualisez la page pour obtenir les dernières mises à jour",
  DT = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  PT = () => "最新の状態にするにはページを再読み込みしてください。",
  xT = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  zT = () => "Обновите страницу, чтобы получить последние изменения",
  MT = () => "Оновіть сторінку, щоб отримати останні оновлення",
  CT = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  qn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? OT() : e === "pt" ? AT() : e === "ch" ? RT() : e === "de" ? IT() : e === "es" ? NT() : e === "fr" ? LT() : e === "it" ? DT() : e === "jp" ? PT() : e === "pl" ? xT() : e === "ru" ? zT() : e === "uk" ? MT() : CT()
  },
  jT = () => "The request timed out. Please try again.",
  BT = () => "A solicitação expirou. Por favor, tente novamente.",
  FT = () => "请求超时。请重试。",
  UT = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  GT = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  qT = () => "La requête a expiré. Veuillez réessayer.",
  VT = () => "La richiesta è scaduta. Riprova.",
  WT = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  HT = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  KT = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  $T = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  XT = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  YT = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? jT() : e === "pt" ? BT() : e === "ch" ? FT() : e === "de" ? UT() : e === "es" ? GT() : e === "fr" ? qT() : e === "it" ? VT() : e === "jp" ? WT() : e === "pl" ? HT() : e === "ru" ? KT() : e === "uk" ? $T() : XT()
  },
  JT = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ZT = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  QT = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  e0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  t0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  n0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  r0 = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  o0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  i0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  a0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  s0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  c0 = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  u0 = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? JT() : e === "pt" ? ZT() : e === "ch" ? QT() : e === "de" ? e0() : e === "es" ? t0() : e === "fr" ? n0() : e === "it" ? r0() : e === "jp" ? o0() : e === "pl" ? i0() : e === "ru" ? a0() : e === "uk" ? s0() : c0()
  },
  l0 = () => "The service is currently unavailable. Please try again later.",
  d0 = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  _0 = () => "服务当前不可用。请稍后再试。",
  f0 = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  p0 = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  m0 = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  h0 = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  g0 = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  w0 = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  y0 = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  b0 = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  v0 = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  E0 = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? l0() : e === "pt" ? d0() : e === "ch" ? _0() : e === "de" ? f0() : e === "es" ? p0() : e === "fr" ? m0() : e === "it" ? h0() : e === "jp" ? g0() : e === "pl" ? w0() : e === "ru" ? y0() : e === "uk" ? b0() : v0()
  },
  T0 = () => "Too many attempts. Please try again later",
  S0 = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  k0 = () => "尝试次数过多，请稍后再试",
  O0 = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  A0 = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  R0 = () => "Trop de tentatives. Veuillez réessayer plus tard",
  I0 = () => "Troppi tentativi. Riprova più tardi.",
  N0 = () => "試行回数が多すぎます。後で再度お試しください。",
  L0 = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  D0 = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  P0 = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  x0 = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Vn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? T0() : e === "pt" ? S0() : e === "ch" ? k0() : e === "de" ? O0() : e === "es" ? A0() : e === "fr" ? R0() : e === "it" ? I0() : e === "jp" ? N0() : e === "pl" ? L0() : e === "ru" ? D0() : e === "uk" ? P0() : x0()
  },
  z0 = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  M0 = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  C0 = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  j0 = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  B0 = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  F0 = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  U0 = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  G0 = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  q0 = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  V0 = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  W0 = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  H0 = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  K0 = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? z0() : e === "pt" ? M0() : e === "ch" ? C0() : e === "de" ? j0() : e === "es" ? B0() : e === "fr" ? F0() : e === "it" ? U0() : e === "jp" ? G0() : e === "pl" ? q0() : e === "ru" ? V0() : e === "uk" ? W0() : H0()
  },
  $0 = () => "The typed username does not match your current username.",
  X0 = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Y0 = () => "输入的用户名与当前用户名不匹配。",
  J0 = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Z0 = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Q0 = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  eS = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  tS = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  nS = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  rS = () => "Введённое имя пользователя не совпадает с текущим.",
  oS = () => "Введене імʼя користувача не збігається з поточним.",
  iS = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  aS = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? $0() : e === "pt" ? X0() : e === "ch" ? Y0() : e === "de" ? J0() : e === "es" ? Z0() : e === "fr" ? Q0() : e === "it" ? eS() : e === "jp" ? tS() : e === "pl" ? nS() : e === "ru" ? rS() : e === "uk" ? oS() : iS()
  },
  sS = () => "Unexpected server error. Try again later.",
  cS = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  uS = () => "服务器出现意外错误。请稍后再试。",
  lS = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  dS = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  _S = () => "Erreur serveur inattendue. Réessayez plus tard.",
  fS = () => "Errore imprevisto del server. Riprova più tardi.",
  pS = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  mS = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  hS = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  gS = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  wS = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  d = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? sS() : e === "pt" ? cS() : e === "ch" ? uS() : e === "de" ? lS() : e === "es" ? dS() : e === "fr" ? _S() : e === "it" ? fS() : e === "jp" ? pS() : e === "pl" ? mS() : e === "ru" ? hS() : e === "uk" ? gS() : wS()
  },
  yS = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  bS = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  vS = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  ES = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  TS = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  SS = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  kS = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  OS = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  AS = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  RS = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  IS = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  NS = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  LS = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? yS() : e === "pt" ? bS() : e === "ch" ? vS() : e === "de" ? ES() : e === "es" ? TS() : e === "fr" ? SS() : e === "it" ? kS() : e === "jp" ? OS() : e === "pl" ? AS() : e === "ru" ? RS() : e === "uk" ? IS() : NS()
  },
  DS = () => "VPN or proxy detected. Please disable your VPN and try again.",
  PS = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  xS = () => "检测到VPN或代理。请关闭VPN后重试。",
  zS = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  MS = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  CS = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  jS = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  BS = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  FS = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  US = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  GS = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  qS = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  VS = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? DS() : e === "pt" ? PS() : e === "ch" ? xS() : e === "de" ? zS() : e === "es" ? MS() : e === "fr" ? CS() : e === "it" ? jS() : e === "jp" ? BS() : e === "pl" ? FS() : e === "ru" ? US() : e === "uk" ? GS() : qS()
  },
  WS = () => "Failed to load WebAssembly module. Try to use another browser.",
  HS = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  KS = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  $S = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  XS = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  YS = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  JS = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  ZS = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  QS = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  ek = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  tk = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  nk = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  rk = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? WS() : e === "pt" ? HS() : e === "ch" ? KS() : e === "de" ? $S() : e === "es" ? XS() : e === "fr" ? YS() : e === "it" ? JS() : e === "jp" ? ZS() : e === "pl" ? QS() : e === "ru" ? ek() : e === "uk" ? tk() : nk()
  },
  ok = () => "You already have this item. Please refresh the page.",
  ik = () => "Você já possui este item. Atualize a página.",
  ak = () => "你已经拥有此物品。请刷新页面。",
  sk = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  ck = () => "Ya tienes este ítem. Actualiza la página.",
  uk = () => "Vous possédez déjà cet objet. Actualisez la page.",
  lk = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  dk = () => "このアイテムはすでに所持しています。ページを更新してください。",
  _k = () => "Masz już ten przedmiot. Odśwież stronę.",
  fk = () => "У вас уже есть этот предмет. Обновите страницу.",
  pk = () => "У вас уже є цей предмет. Оновіть сторінку.",
  mk = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Wn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? ok() : e === "pt" ? ik() : e === "ch" ? ak() : e === "de" ? sk() : e === "es" ? ck() : e === "fr" ? uk() : e === "it" ? lk() : e === "jp" ? dk() : e === "pl" ? _k() : e === "ru" ? fk() : e === "uk" ? pk() : mk()
  },
  hk = () => "You are already in an alliance",
  gk = () => "Você já está em uma aliança",
  wk = () => "你已经在一个联盟中",
  yk = () => "Du bist bereits in einer Allianz",
  bk = () => "Ya estás en una alianza",
  vk = () => "Vous êtes déjà dans une alliance",
  Ek = () => "Sei già in un'alleanza",
  Tk = () => "すでにアライアンスに所属しています。",
  Sk = () => "Jesteś już w sojuszu",
  kk = () => "Вы уже состоите в альянсе",
  Ok = () => "Ви вже перебуваєте в альянсі",
  Ak = () => "Bạn đã ở trong một liên minh",
  Rk = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? hk() : e === "pt" ? gk() : e === "ch" ? wk() : e === "de" ? yk() : e === "es" ? bk() : e === "fr" ? vk() : e === "it" ? Ek() : e === "jp" ? Tk() : e === "pl" ? Sk() : e === "ru" ? kk() : e === "uk" ? Ok() : Ak()
  },
  Ik = () => "You are not allowed to do this",
  Nk = () => "Você não tem permissão para fazer isso",
  Lk = () => "你无权执行此操作",
  Dk = () => "Du bist dazu nicht berechtigt",
  Pk = () => "No tienes permiso para hacer esto",
  xk = () => "Vous n’êtes pas autorisé à faire cela",
  zk = () => "Non hai il permesso di farlo",
  Mk = () => "この操作を行う権限がありません。",
  Ck = () => "Nie masz uprawnień, aby to zrobić",
  jk = () => "У вас нет прав для этого действия",
  Bk = () => "Ви не маєте права це робити",
  Fk = () => "Bạn không có quyền làm việc này",
  fe = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Ik() : e === "pt" ? Nk() : e === "ch" ? Lk() : e === "de" ? Dk() : e === "es" ? Pk() : e === "fr" ? xk() : e === "it" ? zk() : e === "jp" ? Mk() : e === "pl" ? Ck() : e === "ru" ? jk() : e === "uk" ? Bk() : Fk()
  },
  Uk = () => "You do not have enough Droplets to buy this item.",
  Gk = () => "Você não tem Droplets suficientes para comprar este item.",
  qk = () => "你的 Droplets 不足，无法购买此物品。",
  Vk = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Wk = () => "No tienes suficientes Droplets para comprar este ítem.",
  Hk = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  Kk = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  $k = () => "このアイテムを購入するのに十分なDropletsがありません。",
  Xk = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  Yk = () => "У вас недостаточно Droplets для покупки этого предмета.",
  Jk = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Zk = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  Hn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Uk() : e === "pt" ? Gk() : e === "ch" ? qk() : e === "de" ? Vk() : e === "es" ? Wk() : e === "fr" ? Hk() : e === "it" ? Kk() : e === "jp" ? $k() : e === "pl" ? Xk() : e === "ru" ? Yk() : e === "uk" ? Jk() : Zk()
  },
  Qk = () => "You need to be logged in to paint",
  eO = () => "Você precisa estar conectado para pintar",
  tO = () => "你需要登录才能进行绘制",
  nO = () => "Du musst eingeloggt sein, um zu malen",
  rO = () => "Debes iniciar sesión para pintar",
  oO = () => "Vous devez être connecté pour peindre",
  iO = () => "Devi avere effettuato l'accesso per dipingere",
  aO = () => "ペイントするにはログインが必要です。",
  sO = () => "Musisz być zalogowany, aby malować",
  cO = () => "Чтобы рисовать, нужно войти в аккаунт",
  uO = () => "Щоб малювати, необхідно увійти в акаунт",
  lO = () => "Bạn cần đăng nhập để tô",
  Kn = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? Qk() : e === "pt" ? eO() : e === "ch" ? tO() : e === "de" ? nO() : e === "es" ? rO() : e === "fr" ? oO() : e === "it" ? iO() : e === "jp" ? aO() : e === "pl" ? sO() : e === "ru" ? cO() : e === "uk" ? uO() : lO()
  },
  dO = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  _O = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  fO = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  pO = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  mO = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  hO = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  gO = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  wO = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  yO = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  bO = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  vO = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  EO = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  TO = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? dO() : e === "pt" ? _O() : e === "ch" ? fO() : e === "de" ? pO() : e === "es" ? mO() : e === "fr" ? hO() : e === "it" ? gO() : e === "jp" ? wO() : e === "pl" ? yO() : e === "ru" ? bO() : e === "uk" ? vO() : EO()
  },
  SO = n => `Your account has been suspended out until ${n.until}`,
  kO = n => `A sua conta está suspensa até ${n.until}`,
  OO = n => `你的账号已被暂停至 ${n.until}`,
  AO = n => `Dein Konto ist gesperrt bis ${n.until}`,
  RO = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  IO = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  NO = n => `Il tuo account è sospeso fino al ${n.until}`,
  LO = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  DO = n => `Twoje konto zostało zawieszone do ${n.until}`,
  PO = n => `Ваш аккаунт заблокирован до ${n.until}`,
  xO = n => `Ваш акаунт призупинено до ${n.until}`,
  zO = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  $n = (n, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? SO(n) : e === "pt" ? kO(n) : e === "ch" ? OO(n) : e === "de" ? AO(n) : e === "es" ? RO(n) : e === "fr" ? IO(n) : e === "it" ? NO(n) : e === "jp" ? LO(n) : e === "pl" ? DO(n) : e === "ru" ? PO(n) : e === "uk" ? xO(n) : zO(n)
  },
  MO = () => "A correction is already pending for this ticket.",
  CO = () => "Já existe uma correção pendente para este ticket.",
  jO = () => "此工单已存在待审核的更正请求。",
  BO = () => "Für dieses Ticket ist bereits eine Korrektur in Arbeit.",
  FO = () => "Ya hay una corrección pendiente para este ticket.",
  UO = () => "Une correction est déjà en attente pour ce ticket.",
  GO = () => "Una correzione è già in sospeso per questo ticket.",
  qO = () => "このチケットには未処理の修正があります。",
  VO = () => "Dla tego zgłoszenia istnieje już oczekująca prośba o poprawkę.",
  WO = () => "Для этого тикета уже есть запрос на исправление.",
  HO = () => "Для цього тікета вже є запит на перевірці.",
  KO = () => "Đã có yêu cầu sửa đang chờ cho ticket này.",
  $O = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? MO() : e === "pt" ? CO() : e === "ch" ? jO() : e === "de" ? BO() : e === "es" ? FO() : e === "fr" ? UO() : e === "it" ? GO() : e === "jp" ? qO() : e === "pl" ? VO() : e === "ru" ? WO() : e === "uk" ? HO() : KO()
  },
  XO = () => "You cannot review your own correction request.",
  YO = () => "Você não pode revisar sua própria solicitação de correção.",
  JO = () => "不能审核自己提交的更正请求。",
  ZO = () => "Du kannst deine eigene Korrekturanfrage nicht prüfen.",
  QO = () => "No puedes revisar tu propia solicitud de corrección.",
  eA = () => "Tu ne peux pas examiner ta propre demande de correction.",
  tA = () => "Non puoi revisionare la tua stessa richiesta di correzione.",
  nA = () => "自分のリクエストはレビューできません。",
  rA = () => "Nie możesz zweryfikować własnej prośby o poprawkę.",
  oA = () => "Нельзя рассматривать собственный запрос.",
  iA = () => "Не можна перевіряти власний запит.",
  aA = () => "Bạn không thể duyệt yêu cầu của chính mình.",
  sA = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? XO() : e === "pt" ? YO() : e === "ch" ? JO() : e === "de" ? ZO() : e === "es" ? QO() : e === "fr" ? eA() : e === "it" ? tA() : e === "jp" ? nA() : e === "pl" ? rA() : e === "ru" ? oA() : e === "uk" ? iA() : aA()
  },
  cA = () => "This correction has already been reviewed.",
  uA = () => "Esta correção já foi revisada.",
  lA = () => "此请求已被审核。",
  dA = () => "Diese Korrektur wurde bereits geprüft.",
  _A = () => "Esta corrección ya ha sido revisada.",
  fA = () => "Cette correction a déjà été examinée.",
  pA = () => "Questa correzione è già stata revisionata.",
  mA = () => "このリクエストはすでにレビュー済みです。",
  hA = () => "Ta prośba została już rozpatrzona.",
  gA = () => "Этот запрос уже рассмотрен.",
  wA = () => "Цей запит вже перевірено.",
  yA = () => "Yêu cầu này đã được duyệt.",
  bA = (n = {}, t = {}) => {
    const e = t.locale ?? h();
    return e === "en" ? cA() : e === "pt" ? uA() : e === "ch" ? lA() : e === "de" ? dA() : e === "es" ? _A() : e === "fr" ? fA() : e === "it" ? pA() : e === "jp" ? mA() : e === "pl" ? hA() : e === "ru" ? gA() : e === "uk" ? wA() : yA()
  },
  ue = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function kR(n) {
  const t = Math.floor(n / ue.hour);
  n -= t * ue.hour;
  const e = Math.floor(n / ue.minute);
  n -= e * ue.minute;
  const o = Math.floor(n / ue.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${o}` : `${e}:${o}`
}

function OR(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    o = String(n.getHours()).padStart(2, "0"),
    i = String(n.getMinutes()).padStart(2, "0"),
    a = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${o}:${i}:${a}`
}
const AR = {
    griefing: zf(),
    "multi-accounting": gv(),
    "hate-speech": sp(),
    bot: bu(),
    doxxing: jd(),
    "inappropriate-content": kw(),
    other: Hu()
  },
  RR = {
    doxxing: Jd(),
    "hate-speech": bp(),
    griefing: $f(),
    "multi-accounting": Nv(),
    bot: Pu(),
    "inappropriate-content": jw(),
    other: il()
  },
  IR = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Xn = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  NR = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  vA = 365 * ue.day;

function Sr(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function LR(n, t = Date.now()) {
  const e = Sr(n);
  return e === null ? !1 : e - t >= vA
}

function DR(n, t = Date.now()) {
  const e = Sr(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    o = Math.floor(r / 1440),
    i = Math.floor(r % 1440 / 60),
    a = r % 60;
  return {
    days: o,
    hours: i,
    minutes: a
  }
}
const Wt = {
    insufficient_context: hh(),
    no_rule_violation: pg(),
    not_enough_for_punishment: Fg(),
    caused_by_glitch: Vm(),
    out_of_scope: _w(),
    invalid_information: Gh(),
    allowed_by_event: wm(),
    already_handled: Hp()
  },
  PR = {
    insufficient_context: rh(),
    no_rule_violation: tg(),
    not_enough_for_punishment: Ag(),
    caused_by_glitch: Lm(),
    out_of_scope: Qg(),
    invalid_information: Ih(),
    allowed_by_event: im(),
    already_handled: Pp()
  },
  xR = Object.keys(Wt).map(n => ({
    value: n,
    label: Wt[n]
  }));

function zR(n) {
  return n in Wt
}
const EA = [{
    tileSize: 1e3,
    zoom: 11
  }],
  TA = 4,
  SA = 6e3,
  kA = [{
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
  OA = {
    price: {
      googlePlayBilling: 1.2
    }
  },
  AA = {
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
  RA = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  IA = {
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
  NA = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  LA = {
    areaRadius: 250
  },
  de = {
    seasons: EA,
    regionSize: TA,
    refreshIntervalMs: SA,
    colors: kA,
    platforms: OA,
    products: AA,
    countries: RA,
    permissions: IA,
    settings: NA,
    moderation: LA
  },
  Tt = de,
  DA = de.seasons,
  kr = de.seasons.length - 1,
  MR = de.seasons[kr].zoom,
  CR = de.seasons[kr].tileSize,
  jR = de.permissions,
  PA = de.settings,
  BR = de.platforms.price.googlePlayBilling;

function FR(n) {
  return Tt.countries[n - 1]
}

function Ht(n) {
  return Ht.map.get(n)
}(n => {
  n.sharedProducts = Object.entries(Tt.products).map(([t, e]) => ({
    ...e,
    productId: t
  })).filter(t => "lookupKey" in t), n.map = xA(n.sharedProducts, t => t.lookupKey)
})(Ht || (Ht = {}));

function xA(n, t) {
  const e = new Map;
  for (const r in n) {
    const o = Reflect.get(n, r),
      i = t(o, r, n);
    e.set(i, o)
  }
  return e
}
class p extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Yn(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    let i = e[o];
    i ? i.push(r) : e[o] = [r]
  }
  return e
}

function UR(n, t) {
  const e = {};
  for (const r of n) {
    const o = t(r);
    e[o] = r
  }
  return e
}
const zA = 30 * ue.minute;
var Xe, Ye;
class MA {
  constructor(t) {
    D(this, Xe, V(!0));
    D(this, Ye, V(null));
    R(this, "lastHotspotRequestAt", 0);
    this.url = t
  }
  get online() {
    return M(w(this, Xe))
  }
  set online(t) {
    C(w(this, Xe), t, !0)
  }
  get serverTimeOffsetMs() {
    return M(w(this, Ye))
  }
  set serverTimeOffsetMs(t) {
    C(w(this, Ye), t, !0)
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
    const e = Yn(t, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
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
      i = await Le.getHeaders(o),
      a = await this.request("/paint", {
        method: "POST",
        body: o,
        headers: i,
        credentials: "include"
      });
    if (a.status !== c.OK) {
      if (a.status === c.UNAUTHORIZED) throw new Error(Kn());
      if (a.status === c.FORBIDDEN) {
        if (a.headers.get("cf-mitigated") === "challenge") throw new Error(Fn());
        const s = await a.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const u = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error($n({
            until: u.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(qn());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(Gn());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(jn());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await zn(s.tier)) return this.paint(t);
            throw new Error(Ct())
          } else console.error("Challenge required but no tier provided", s);
        he.refresh()
      } else throw new Error(d())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, o, i) => `/staff/tools/select-area/clear/s${r}/pixel/${o}/${i}`, e)
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
    if (e.status !== c.OK) throw new p(d(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: o,
      beforeTimestamp: i
    } = e, a = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: o,
        beforeTimestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (a.status !== c.OK) throw new p(d(), a.status);
    return a.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: i
    } = e, a = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (a.status !== c.OK) throw new p(d(), a.status);
    return a.json()
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
        i = (o == null ? void 0 : o.error) ?? "";
      throw i === "timelapse_too_many_events" ? new p(u0(), c.BAD_REQUEST) : new p(typeof i == "string" && i ? i : d(), c.BAD_REQUEST)
    }
    if (r.status !== c.OK) throw new p(d(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: o,
      timestamp: i
    } = e, a = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: o,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (a.status !== c.OK) throw new p(d(), a.status);
    return a.json()
  }
  async sendPaintRequests(t, e, r, o) {
    const i = Yn(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      s = (await Promise.all(Object.values(i).map(async u => {
        const [_, f] = u[0].tile, l = u[0].season, b = {
          colors: u.map(x => x.colorIdx),
          coords: u.flatMap(x => x.pixel),
          csid: r
        }, m = JSON.stringify(b), y = e(l, _, f), S = await Le.getHeaders(m);
        return this.request(y, {
          method: "POST",
          body: m,
          headers: S,
          credentials: "include"
        })
      }))).filter(u => u.status !== c.OK);
    if (s.length) {
      const u = s[0];
      if (u.status === c.UNAUTHORIZED) throw new Error(Kn());
      if (u.status === c.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(Fn());
        const _ = await u.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const f = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error($n({
            until: f.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(qn());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(Gn());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(jn());
        he.refresh()
      } else throw new Error(d())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const o = CA(t),
      i = await jA(o),
      a = new FormData;
    a.append("fingerprint", e), a.append("season", o.season.toString()), a.append("px0", o.offsetX.toString()), a.append("py0", o.offsetY.toString()), a.append("width", o.width.toString()), a.append("height", o.height.toString()), a.append("pixels", t.length.toString()), a.append("bitmap", i, "auto-painter.png"), a.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: a,
      credentials: "include"
    });
    if (s.status === c.FORBIDDEN) {
      const u = await s.json().catch(() => null);
      if (typeof(u == null ? void 0 : u.charges) == "number") throw new Error(UE({
        charges: Math.floor(u.charges),
        pixels: t.length
      }));
      const _ = typeof(u == null ? void 0 : u.error) == "string" ? u.error.trim() : "";
      throw _ && _ !== "Forbidden" ? new Error(_) : new Error("Auto painter is restricted to administrators.")
    }
    if (s.status !== c.OK) throw new Error(d());
    return s.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [o, i]
  }) {
    const a = new URLSearchParams;
    a.set("x", String(o)), a.set("y", String(i));
    const s = await this.request(`/s${t}/pixel/${e}/${r}?${a.toString()}`, {
      credentials: "include"
    });
    if (s.status !== c.OK) {
      const u = await s.text();
      throw new Error(X_({
        err: u
      }))
    }
    return s.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [o, i],
    p1: [a, s]
  }) {
    const u = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${o}&y0=${i}&x1=${a}&y1=${s}`, {
      credentials: "include"
    });
    if (u.status !== c.OK) {
      const y = await u.text();
      throw console.error("Error while fetching pixel area info", y), new Error(d())
    }
    const _ = await u.arrayBuffer(),
      f = new DataView(_),
      l = Math.floor(_.byteLength / 5),
      b = new Uint32Array(l),
      m = new Uint8Array(l);
    for (let y = 0; y < l; y++) {
      const S = y * 5;
      b[y] = f.getUint32(S, !0), m[y] = f.getUint8(S + 4)
    }
    return {
      paintedBy: b,
      colors: m
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
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Cn());
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
    if (t.status !== c.OK) throw new Error(d());
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
    if (e.status === c.BAD_REQUEST) throw new Error(sb());
    if (e.status === c.CONFLICT) throw new Error(_T());
    if (e.status === c.FORBIDDEN) throw new Error(mE());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(Vn());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(kT());
    if (e.status === c.LOCKED) throw new Error(LS());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(bb());
    if (e.status === c.NOT_ACCEPTABLE) throw new Error(VS());
    if (e.status === c.PRECONDITION_FAILED) throw new Error(fd());
    if (e.status !== c.OK) throw new Error(d());
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
        "x-fp": await Vt()
      }
    });
    if (t.type === "otp") {
      if (r.status === c.GONE) throw new Error(Ef());
      if (r.status === c.BAD_REQUEST) throw new Error(Ty());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Vn());
      if (r.status !== c.OK) throw new Error(d())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(ly());
      if (r.status !== c.OK) throw new Error(d())
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
      if (o === "invalid_name") throw new Error(Un());
      if (o === "invalid_discord") throw new Error(My());
      if (typeof o == "string" && o.startsWith("name_change_cooldown:")) {
        const i = parseInt(o.split(":")[1] ?? "0", 10);
        throw new Error(qv({
          days: i
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== c.OK) throw new Error(d())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === c.BAD_REQUEST) throw new Error(aS());
    if (e.status !== c.OK) throw new Error(d())
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
    if (e.status === c.FORBIDDEN) throw new Error(RE());
    if (e.status !== c.OK) throw new Error(d())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== c.OK) throw new Error(d())
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
    if (r.status === c.BAD_REQUEST) throw new Error(ov());
    if (r.status !== c.OK) throw new Error(d())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== c.OK) throw new Error(_e());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== c.OK) throw new Error(_e());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(_e())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(_e())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(_e())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(_e())
  }
  refreshHotspotsIfStale() {
    Date.now() - this.lastHotspotRequestAt < zA || (this.lastHotspotRequestAt = Date.now(), this.request("/map/hotspots", {
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
    if (e.status !== c.OK) throw new Error(d());
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(Bn()) : e.status === c.FORBIDDEN ? new Error(Hn()) : e.status === c.CONFLICT ? new Error(Wn()) : new Error(d())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    if (t.status === c.NOT_FOUND) return;
    throw new Error(d())
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
      throw r.error === "max_characters" ? new Error($c()) : r.error === "name_taken" ? new Error(zc()) : r.error == "empty_name" ? new Error(su()) : new Error(d())
    } else throw e.status === c.FORBIDDEN ? new Error(Rk()) : new Error(d())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(d())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(fe()) : e.status === c.BAD_REQUEST ? new Error(uf()) : new Error(d())
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
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(fe()) : new Error(d())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(fe()) : new Error(_e())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    throw t.status === c.FORBIDDEN ? new Error(fe()) : new Error(d())
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
    throw new Error(d())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(d())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return;
    if (e.status !== c.OK) throw new p(d(), e.status);
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
    if (r.status !== c.OK) throw new p(d(), r.status);
    const o = await r.json();
    return (Array.isArray(o) ? o : []).map(i => ({
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
    if (e.status === c.NOT_FOUND) return null;
    if (e.status !== c.OK) throw new p(d(), e.status);
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
      members: o.map(i => ({
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
    if (o.status !== c.OK) throw new p(d(), o.status);
    const i = await o.json(),
      a = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
    return {
      members: a.map(s => ({
        id: Number(s == null ? void 0 : s.id),
        name: String((s == null ? void 0 : s.name) ?? `#${s==null?void 0:s.id}`),
        picture: (s == null ? void 0 : s.picture) ?? null,
        pixelsPainted: Number((s == null ? void 0 : s.pixelsPainted) ?? (s == null ? void 0 : s.pixels_painted) ?? 0),
        lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
        lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
        role: (s == null ? void 0 : s.alliance_role) === "admin" || (s == null ? void 0 : s.role) === "admin" ? "admin" : "member"
      })),
      total: Number((i == null ? void 0 : i.total) ?? a.length)
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
      throw new Error((o == null ? void 0 : o.error) ?? d())
    } else if (r.status !== c.OK) throw new p(d(), r.status)
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
      throw (o == null ? void 0 : o.error) === "user_not_in_alliance" ? new Error(Pb()) : new Error(d())
    } else if (r.status !== c.OK) throw new p(d(), r.status)
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
    if (o.status !== c.OK) throw new p(d(), o.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const o = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (o.status !== c.OK) throw new p(d(), o.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(fe()) : new Error(d())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(fe()) : new Error(d())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(d())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(d());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== c.OK) throw new Error(d())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(fe()) : new Error(d())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getPlayAccountId() {
    const t = await this.request("/payment/play/account-id", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(d());
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
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Cn());
    if (e.status !== c.OK) throw new Error(d());
    return e.json()
  }
  async verifyPendingPlayPurchases() {
    const t = await this.request("/payment/play/verify-pending", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(d());
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
    if (e.status !== c.OK) throw new Error(d());
    return e.json()
  }
  async listPlayPurchaseHistory() {
    const t = await this.request("/payment/play/history", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(d());
    return t.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((o, i) => Xn[o.reason] - Xn[i.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
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
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, o, i) {
    const a = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: o,
        ignoreReason: i
      })
    });
    if (a.status !== c.OK && a.status !== c.BAD_REQUEST) throw new p(d(), a.status)
  }
  async getLastResolvedTicket() {
    const t = await this.request("/staff/tickets/reversals/last-resolved", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return (await t.json()).ticket
  }
  async getTicketReversalTicketInfo(t) {
    const e = await this.request(`/staff/tickets/reversals/ticket-info?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
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
      throw (r == null ? void 0 : r.error) === "reversal_already_pending" ? new p($O(), c.CONFLICT) : new p(d(), c.CONFLICT)
    }
    if (e.status !== c.OK) throw new p(d(), e.status);
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
    if (o.status !== c.OK) throw new p(d(), o.status);
    return (await o.json()).reversals ?? []
  }
  async getTicketReversal(t) {
    const e = await this.request(`/staff/tickets/reversals/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
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
    if (o.status === c.FORBIDDEN) throw new p(sA(), c.FORBIDDEN);
    if (o.status === c.CONFLICT) throw new p(bA(), c.CONFLICT);
    if (o.status !== c.OK) throw new p(d(), o.status)
  }
  async request(t, e) {
    var a;
    let r;
    e = {
      credentials: "include",
      ...e
    };
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (s) {
      throw console.error("Fetch error:", s), this.online = !1, new Error(Nl(), {
        cause: s
      })
    }
    if (r.status === c.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(K0());
    const o = ((a = r.headers.get("cf-mitigated")) == null ? void 0 : a.toLowerCase()) === "challenge";
    if (r.status === 403 && o) {
      if (Le.setCfLikelyAutomated(!0), !await Er()) throw new Error(Ct());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(TO());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(YT());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(E0())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status);
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
    if (r.status !== c.OK) throw new p(d(), r.status);
    return (await r.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status);
    return (await r.json()).items.map(i => ({
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
    if (e.status !== c.OK) throw new p(d(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new p(d(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new p(d(), e.status);
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
    if (o.status !== c.OK) throw new p(d(), o.status)
  }
  async getUserPunishments(t) {
    const e = await this.request(`/staff/dashboard/users/punishments?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
    return (await e.json()).punishments ?? []
  }
  async getPunishmentTicket(t) {
    const e = await this.request(`/staff/dashboard/users/punishment-ticket?ticketId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
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
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== c.OK) throw new p(d(), o.status);
    return o.json()
  }
  async addUserNote(t, e, r) {
    const o = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      i = await this.request(o, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (i.status !== c.OK) throw new p(d(), i.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
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
    if (r.status !== c.OK) throw new p(d(), r.status);
    const o = await r.json();
    return Array.isArray(o == null ? void 0 : o.permissions) ? o.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(i => {
      const a = i.is_dollar ?? i.isDollar ?? i.currency ?? i.Currency ?? 0;
      let s;
      if (typeof a == "string") {
        const l = a.toLowerCase();
        s = l === "usd" || l === "dollar" || l === "true"
      } else typeof a == "number" ? s = a !== 0 : s = !!a;
      const u = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
        _ = i.product_variant ?? i.productVariant,
        f = _ == null || _ === "" ? null : Number(_);
      return {
        product_name: String(i.productName ?? i.product_name ?? ""),
        amount: Number(i.amount ?? 0),
        price: Number(i.price ?? 0),
        is_dollar: s,
        created_at: u,
        product_variant: Number.isInteger(f) ? f : null
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
    if (r.status !== c.OK) throw new p(d(), r.status)
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
      const i = await o.json(),
        a = (i == null ? void 0 : i.error) ?? "";
      throw a === "invalid_name" ? new p(Un(), c.BAD_REQUEST) : new p(typeof a == "string" && a ? a : d(), c.BAD_REQUEST)
    }
    if (o.status !== c.OK) throw new p(d(), o.status)
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
        i = (o == null ? void 0 : o.error) ?? "";
      throw i === "email_required" || i === "invalid_email" ? new p(M_(), c.BAD_REQUEST) : new p(typeof i == "string" && i ? i : d(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const o = await r.json();
      if (((o == null ? void 0 : o.error) ?? "") === "email_already_in_use") {
        const a = new p(typeof(o == null ? void 0 : o.userId) == "number" ? T_({
          userId: o.userId
        }) : l_(), c.CONFLICT);
        throw typeof(o == null ? void 0 : o.userId) == "number" && (a.userId = o.userId), a
      }
      throw new p(d(), c.CONFLICT)
    }
    if (r.status === c.NOT_FOUND) throw new p("User not found.", c.NOT_FOUND);
    if (r.status !== c.OK) throw new p(d(), r.status)
  }
  async getAdminUserProfilePictures(t) {
    const e = await this.request(`/staff/dashboard/users/profile-pictures?userId=${t}`, {
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
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
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), t.sortBy && r.set("sortBy", t.sortBy), t.sortDir && r.set("sortDir", t.sortDir), t.status && r.set("status", t.status), e === "appeals" && r.set("appealId", String(t.appealId));
    const o = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      i = await this.request(o, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== c.OK) throw new p(d(), i.status);
    const a = await i.json();
    return Array.isArray(a == null ? void 0 : a.tickets) ? a.tickets : []
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize)), t.sortBy && e.set("sortBy", t.sortBy), t.sortDir && e.set("sortDir", t.sortDir);
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status);
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
    if (o.status !== c.OK) throw new p(d(), o.status);
    const i = await o.json();
    return i == null ? void 0 : i.translation
  }
  mapTicketsToReportRows(t, e) {
    var o, i, a, s, u;
    const r = [];
    for (const _ of t) {
      const f = _.status ?? "open";
      if (e === "received") {
        for (const l of _.reports) r.push({
          id: String(l.id),
          ticketId: String(_.id),
          createdAt: l.createdAt ?? _.createdAt,
          byUser: {
            id: Number(l.reportedBy),
            name: String(l.reportedByName ?? l.reportedBy),
            picture: l.reportedByPicture ?? null
          },
          reason: String(l.reason),
          status: f
        });
        continue
      }
      if (e === "sent") {
        for (const l of _.reports) r.push({
          id: String(l.id),
          ticketId: String(_.id),
          createdAt: l.createdAt ?? _.createdAt,
          toUser: {
            id: Number(_.reportedUser.id),
            name: String(_.reportedUser.name),
            picture: _.reportedUser.picture ?? null
          },
          reason: String(l.reason),
          status: f
        });
        continue
      }
      r.push({
        id: String(_.id),
        ticketId: String(_.id),
        createdAt: _.createdAt,
        handledBy: _.status && _.status !== "open" ? {
          id: ((o = _.handledBy) == null ? void 0 : o.id) ?? 0,
          name: ((i = _.handledBy) == null ? void 0 : i.name) ?? "Moderator",
          picture: ((a = _.handledBy) == null ? void 0 : a.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((u = (s = _.reports) == null ? void 0 : s[0]) == null ? void 0 : u.reason) ?? "other"),
        status: f
      })
    }
    return r.sort((_, f) => new Date(f.createdAt).getTime() - new Date(_.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== c.OK) throw new p(d(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.NO_CONTENT) throw new p(d(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
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
    if (o.status !== c.OK) throw new p(d(), o.status)
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
    if (o.status !== c.OK) throw new p(d(), o.status)
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
    if (o.status !== c.OK) throw new p(d(), o.status)
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
    if (r.status !== c.OK) throw new p(d(), r.status)
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
    if (r.status !== c.OK) throw new p(d(), r.status);
    return await r.json()
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status);
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
      })).status !== c.OK) throw new Error(d())
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
    if (r.status !== c.OK) throw new p(d(), r.status);
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
    if (r.status !== c.OK) throw new p(d(), r.status);
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
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== c.OK) throw new p(d(), e.status);
    return e.json()
  }
  async submitBanAppeal(t, e) {
    const r = JSON.stringify(e ? {
        message: t,
        ticketId: e
      } : {
        message: t
      }),
      o = await Le.getHeaders(r),
      i = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: r,
        headers: o
      });
    if (i.status === c.FORBIDDEN) {
      const a = await i.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await zn(a.tier)) return this.submitBanAppeal(t, e);
        throw new p(Ct(), i.status)
      }
    }
    if (i.status !== c.OK && i.status !== c.ALREADY_REPORTED) throw new p(d(), i.status);
    return i.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
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
    if (r.status !== c.OK) throw new p(d(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    const e = await t.json();
    return !(e != null && e.active) || !Array.isArray(e == null ? void 0 : e.punishments) ? null : {
      punishments: e.punishments.map(o => ({
        kind: (o == null ? void 0 : o.kind) === "ban" ? "ban" : "timeout",
        reason: o == null ? void 0 : o.reason,
        timeoutUntil: typeof(o == null ? void 0 : o.timeoutUntil) == "string" ? o.timeoutUntil : void 0,
        reportedLatitude: typeof(o == null ? void 0 : o.reportedLatitude) == "number" ? o.reportedLatitude : void 0,
        reportedLongitude: typeof(o == null ? void 0 : o.reportedLongitude) == "number" ? o.reportedLongitude : void 0,
        zoom: typeof(o == null ? void 0 : o.zoom) == "number" ? o.zoom : void 0,
        appealSubmitted: (o == null ? void 0 : o.appealSubmitted) === !0,
        ticketId: typeof(o == null ? void 0 : o.ticketId) == "string" ? o.ticketId : void 0
      }))
    }
  }
  async assignAppeals() {
    const t = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
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
    if (o.status !== c.OK) throw new p(d(), o.status);
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
    if (e.status !== c.OK) throw new p(d(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== c.OK) throw new p(d(), o.status);
    return o.json()
  }
  async getAnticheatSignalAnalysis(t, e, r) {
    const o = await this.request(`/staff/dashboard/anticheat/signal/${encodeURIComponent(t)}?from=${encodeURIComponent(e)}&to=${encodeURIComponent(r)}`, {
      method: "GET",
      credentials: "include"
    });
    if (o.status !== c.OK) throw new p(d(), o.status);
    return o.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await this.request("/anticheat/captcha/session", {
      method: "POST",
      credentials: e,
      body: JSON.stringify(t),
      headers: {
        "x-fp": await Vt()
      }
    });
    if (!r.ok) throw r.status === 500 ? new p(d(), r.status) : new p(Jw(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < DA.length,
      o = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= PA.tools.wayback.limit,
      i = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      a = t.cursorTs !== void 0,
      s = t.cursorUserId !== void 0,
      u = t.cursorAllianceId !== void 0,
      _ = t.cursorPixelsCount !== void 0,
      f = a || s || u || _,
      l = a && s && u && _;
    let b = !0;
    return f && (b = l && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !o || !i || !e || !b)
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
      i = await this.request(o.length > 0 ? `${r}?${o}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (i.status === c.FORBIDDEN) throw new Error("Access denied");
    if (i.status !== c.OK) throw new Error("Failed to fetch wayback events");
    return i.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) throw new Error(Bn());
    if (e.status === c.FORBIDDEN) throw new Error(Hn());
    if (e.status === c.CONFLICT) throw new Error(Wn());
    if (e.status !== c.OK) throw new Error(d())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new p(d(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new p(d(), r.status);
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
    if (r.status !== c.OK) throw new p(d(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
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
    if (r.status !== c.OK) throw new p(d(), r.status);
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
    if (r.status !== c.OK) throw new p(d(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new p(d(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
}
Xe = new WeakMap, Ye = new WeakMap;

function CA(n) {
  var b, m;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const y of n)
    if (y.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (b = Tt.seasons) == null ? void 0 : b[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let o = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    a = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const u = n.map(y => {
      const S = Math.round(y.tile[0] * r + y.pixel[0]),
        x = Math.round(y.tile[1] * r + y.pixel[1]);
      return S < o && (o = S), x < i && (i = x), S > a && (a = S), x > s && (s = x), {
        x: S,
        y: x,
        colorIdx: y.colorIdx
      }
    }),
    _ = a - o + 1,
    f = s - i + 1;
  if (!Number.isFinite(_) || !Number.isFinite(f) || _ <= 0 || f <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const l = new Uint8ClampedArray(_ * f * 4);
  for (const {
      x: y,
      y: S,
      colorIdx: x
    }
    of u) {
    const oe = (m = Tt.colors) == null ? void 0 : m[x];
    if (!oe) throw new Error(`Unknown palette color index: ${x}`);
    const E = y - o,
      j = ((S - i) * _ + E) * 4,
      [F, q, v] = oe.rgb;
    l[j] = F, l[j + 1] = q, l[j + 2] = v, l[j + 3] = x === 0 ? 1 : 255
  }
  return {
    data: l,
    width: _,
    height: f,
    offsetX: o,
    offsetY: i,
    season: t
  }
}
async function jA(n) {
  const t = BA(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((o, i) => {
    t.toBlob(a => {
      if (!a) {
        i(new Error("Failed to encode auto painter bitmap."));
        return
      }
      o(a)
    }, "image/png")
  })
}

function BA(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let le = new MA(en);
typeof window < "u" && Pr(() => {
  let n = le.online;
  xr(() => {
    const t = le.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const GR = n => new URL(n, en).toString();

function Or(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function FA(n, t) {
  for (const e of t)
    if (Or(n, e)) return !0;
  return !1
}

function Ar(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function UA(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class GA {
  constructor(t) {
    R(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      o = t % 8;
    if (r >= this.bytes.length) {
      const a = new Uint8Array(r + 1),
        s = a.length - this.bytes.length;
      for (let u = 0; u < this.bytes.length; u++) a[u + s] = this.bytes[u];
      this.bytes = a
    }
    const i = this.bytes.length - 1 - r;
    e ? this.bytes[i] = this.bytes[i] | 1 << o : this.bytes[i] = this.bytes[i] & ~(1 << o)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      o = this.bytes.length;
    return e > o ? !1 : (this.bytes[o - 1 - e] & 1 << r) !== 0
  }
}

function qR(n) {
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

function VR(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${UA(new Uint8Array(e))}`)
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

function WR(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    o = e.indexOf(";base64"),
    i = (o === -1 ? e : e.slice(0, o)) || "text/plain";
  if (o !== -1) {
    const a = Ar(r),
      s = new Uint8Array(a.byteLength);
    return s.set(a), new Blob([s], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function HR(...n) {
  return n.filter(Boolean).join(" ")
}
const qA = typeof document < "u";
let Jn = 0;
var Je, Ze, Qe;
class VA {
  constructor() {
    D(this, Je, V(vt([])));
    D(this, Ze, V(vt([])));
    D(this, Qe, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    R(this, "addToast", t => {
      qA && this.toasts.unshift(t)
    });
    R(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: o
    }) => {
      const i = this.toasts.findIndex(s => s.id === t),
        a = this.toasts[i];
      this.toasts[i] = {
        ...a,
        ...e,
        id: t,
        title: o,
        type: r,
        updated: !0
      }
    });
    R(this, "create", t => {
      var s;
      const {
        message: e,
        ...r
      } = t, o = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : Jn++, i = t.dismissable === void 0 ? !0 : t.dismissable, a = t.type === void 0 ? "default" : t.type;
      return an(() => {
        this.toasts.find(_ => _.id === o) ? this.updateToast({
          id: o,
          data: t,
          type: a,
          message: e,
          dismissable: i
        }) : this.addToast({
          ...r,
          id: o,
          title: e,
          dismissable: i,
          type: a
        })
      }), o
    });
    R(this, "dismiss", t => (an(() => {
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
    R(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = w(this, Qe).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    R(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    R(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    R(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    R(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    R(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    R(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    R(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const o = t instanceof Promise ? t : t();
      let i = r !== void 0;
      return o.then(a => {
        if (typeof a == "object" && a && "ok" in a && typeof a.ok == "boolean" && !a.ok) {
          i = !1;
          const s = WA(a);
          this.create({
            id: r,
            type: "error",
            message: s
          })
        } else if (e.success !== void 0) {
          i = !1;
          const s = typeof e.success == "function" ? e.success(a) : e.success;
          this.create({
            id: r,
            type: "success",
            message: s
          })
        }
      }).catch(a => {
        if (e.error !== void 0) {
          i = !1;
          const s = typeof e.error == "function" ? e.error(a) : e.error;
          this.create({
            id: r,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var a;
        i && (this.dismiss(r), r = void 0), (a = e.finally) == null || a.call(e)
      }), r
    });
    R(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || Jn++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    R(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    R(this, "setHeight", t => {
      const e = w(this, Qe).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    R(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return M(w(this, Je))
  }
  set toasts(t) {
    C(w(this, Je), t, !0)
  }
  get heights() {
    return M(w(this, Ze))
  }
  set heights(t) {
    C(w(this, Ze), t, !0)
  }
}
Je = new WeakMap, Ze = new WeakMap, Qe = new WeakMap;

function WA(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const Y = new VA;

function HA(n, t) {
  return Y.create({
    message: n,
    ...t
  })
}
var Ot;
class KR {
  constructor() {
    D(this, Ot, Ie(() => Y.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return M(w(this, Ot))
  }
}
Ot = new WeakMap;
const KA = HA,
  $A = Object.assign(KA, {
    success: Y.success,
    info: Y.info,
    warning: Y.warning,
    error: Y.error,
    custom: Y.custom,
    message: Y.message,
    promise: Y.promise,
    dismiss: Y.dismiss,
    loading: Y.loading,
    getActiveToasts: () => Y.toasts.filter(n => !n.dismiss)
  });
var et, tt, nt, rt, ot, it, at, st;
class XA {
  constructor() {
    R(this, "channel", new BroadcastChannel("user-channel"));
    D(this, et, V());
    D(this, tt, V(!0));
    D(this, nt, V());
    D(this, rt, V(Date.now()));
    D(this, ot, Ie(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((br.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    D(this, it, Ie(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    D(this, at, Ie(() => {
      var t;
      return new GA(Ar(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    D(this, st, Ie(() => {
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
    return M(w(this, et))
  }
  set data(t) {
    C(w(this, et), t, !0)
  }
  get loading() {
    return M(w(this, tt))
  }
  set loading(t) {
    C(w(this, tt), t, !0)
  }
  get notificationCount() {
    return M(w(this, nt))
  }
  set notificationCount(t) {
    C(w(this, nt), t, !0)
  }
  get lastFetch() {
    return M(w(this, rt))
  }
  set lastFetch(t) {
    C(w(this, rt), t)
  }
  get charges() {
    return M(w(this, ot))
  }
  set charges(t) {
    C(w(this, ot), t)
  }
  get cooldown() {
    return M(w(this, it))
  }
  set cooldown(t) {
    C(w(this, it), t)
  }
  get flagsBitmap() {
    return M(w(this, at))
  }
  set flagsBitmap(t) {
    C(w(this, at), t)
  }
  get timeoutUntil() {
    return M(w(this, st))
  }
  set timeoutUntil(t) {
    C(w(this, st), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await le.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && le.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (mo("userId", {
        id: this.data.id
      }), Le.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), $A.warning(nE(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await le.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return Or((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return FA((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
et = new WeakMap, tt = new WeakMap, nt = new WeakMap, rt = new WeakMap, ot = new WeakMap, it = new WeakMap, at = new WeakMap, st = new WeakMap;
const he = new XA;
let I;
const re = new Array(128).fill(void 0);
re.push(void 0, null, !0, !1);

function A(n) {
  return re[n]
}
let xe = re.length;

function z(n) {
  xe === re.length && re.push(re.length + 1);
  const t = xe;
  return xe = re[t], re[t] = n, t
}

function ae(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    I.__wbindgen_export_0(z(e))
  }
}

function pe(n) {
  return n == null
}
const Rr = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Rr.decode();
let Ne = null;

function wt() {
  return (Ne === null || Ne.byteLength === 0) && (Ne = new Uint8Array(I.memory.buffer)), Ne
}

function yt(n, t) {
  return n = n >>> 0, Rr.decode(wt().subarray(n, n + t))
}

function YA(n) {
  n < 132 || (re[n] = xe, xe = n)
}

function Zn(n) {
  const t = A(n);
  return YA(n), t
}
let me = null;

function St() {
  return (me === null || me.buffer.detached === !0 || me.buffer.detached === void 0 && me.buffer !== I.memory.buffer) && (me = new DataView(I.memory.buffer)), me
}
let ye = 0;
const bt = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  JA = typeof bt.encodeInto == "function" ? function(n, t) {
    return bt.encodeInto(n, t)
  } : function(n, t) {
    const e = bt.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function dt(n, t, e) {
  if (e === void 0) {
    const s = bt.encode(n),
      u = t(s.length, 1) >>> 0;
    return wt().subarray(u, u + s.length).set(s), ye = s.length, u
  }
  let r = n.length,
    o = t(r, 1) >>> 0;
  const i = wt();
  let a = 0;
  for (; a < r; a++) {
    const s = n.charCodeAt(a);
    if (s > 127) break;
    i[o + a] = s
  }
  if (a !== r) {
    a !== 0 && (n = n.slice(a)), o = e(o, r, r = a + n.length * 3, 1) >>> 0;
    const s = wt().subarray(o + a, o + r),
      u = JA(n, s);
    a += u.written, o = e(o, r, a, 1) >>> 0
  }
  return ye = a, o
}

function ZA(n) {
  const t = dt(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ye;
  I.set_discord_id(t, e)
}

function QA(n) {
  const t = dt(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ye;
  I.set_fingerprint(t, e)
}

function eR(n) {
  const t = dt(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ye;
  I.set_detected_bot(t, e)
}

function tR(n) {
  let t, e;
  try {
    const i = I.__wbindgen_add_to_stack_pointer(-16),
      a = dt(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
      s = ye;
    I.get_pawtected_endpoint_payload(i, a, s);
    var r = St().getInt32(i + 0, !0),
      o = St().getInt32(i + 4, !0);
    return t = r, e = o, yt(r, o)
  } finally {
    I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export_3(t, e, 1)
  }
}

function jt(n) {
  I.set_user_id(n)
}

function nR(n) {
  I.set_cf_likely_automated(n)
}

function rR(n) {
  I.set_automated_clicks(n)
}

function oR(n) {
  const t = dt(n, I.__wbindgen_export_1, I.__wbindgen_export_2),
    e = ye;
  I.request_url(t, e)
}

function iR(n) {
  I.set_automated_browser(n)
}
async function aR(n, t) {
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

function sR() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = A(t).buffer;
    return z(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return ae(function(t, e) {
      const r = A(t).call(A(e));
      return z(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return ae(function(t, e, r) {
      const o = A(t).call(A(e), A(r));
      return z(o)
    }, arguments)
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = A(t).crypto;
    return z(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = A(t).document;
    return pe(e) ? 0 : z(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return ae(function(t, e) {
      A(t).getRandomValues(A(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return ae(function(t, e) {
      const r = Reflect.get(A(t), A(e));
      return z(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return ae(function(t) {
      return A(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return ae(function(t) {
      const e = A(t).innerWidth;
      return z(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = A(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = A(t).msCrypto;
    return z(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = A(t).navigator;
    return z(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(A(t));
    return z(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(yt(t, e));
    return z(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const o = new Uint8Array(A(t), e >>> 0, r >>> 0);
    return z(o)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return z(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = A(t).node;
    return z(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = A(t).process;
    return z(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return ae(function(t, e) {
      A(t).randomFillSync(Zn(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return ae(function() {
      const t = module.require;
      return z(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    A(t).set(A(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return pe(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return pe(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return pe(t) ? 0 : z(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return pe(t) ? 0 : z(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const o = A(t).subarray(e >>> 0, r >>> 0);
    return z(o)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = A(t).versions;
    return z(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = A(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof A(t) == "function"
  }, n.wbg.__wbindgen_is_null = function(t) {
    return A(t) === null
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = A(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof A(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return A(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = I.memory;
    return z(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = A(e),
      o = typeof r == "number" ? r : void 0;
    St().setFloat64(t + 8, pe(o) ? 0 : o, !0), St().setInt32(t + 0, !pe(o), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = A(t);
    return z(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Zn(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = yt(t, e);
    return z(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(yt(t, e))
  }, n
}

function cR(n, t) {
  return I = n.exports, Ir.__wbindgen_wasm_module = t, me = null, Ne = null, I
}
async function Ir(n) {
  if (I !== void 0) return I;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = sR();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await aR(await n, t);
  return cR(e, r)
}
class uR {
  constructor() {
    R(this, "interval");
    R(this, "storagesEmpty", !1);
    R(this, "storages", [new kt, new Kt, new $t, new dR]);
    R(this, "pawtectLoaded");
    R(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!he.data || this.storagesEmpty || localStorage.getItem(kt.KEY))) {
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
    const e = ue.day;
    for (const o of this.storages) {
      const i = o.get();
      if (i && !(i.timestamp + e < Date.now()) && i.userId !== t) return !0
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
        await Ir(go), (t = he.data) != null && t.id && jt(he.data.id);
        const e = fetch;
        return Object.assign(window, {
          fetch: lR((r, o) => {
            let i = null;
            return r instanceof Request ? i = r.url : r instanceof URL ? i = r.href : typeof r == "string" && (i = r), i !== null && !i.startsWith("/") && oR(i), e.call(window, r, o)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, po(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), jt(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), nR(t)
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
    if (!await this.loadPawtect()) throw new Error(rk());
    const r = navigator.webdriver,
      [o, i] = await Promise.all([Vt(), pi().catch(a => (console.error(a), {
        bot: !1
      }))]);
    return jt(he.data.id), ZA(he.data.discordId ?? ""), QA(o), iR(r), rR(br.automatedClicks), i.bot && eR(i.botKind ?? "unknown"), tR(t)
  }
}

function lR(n) {
  return n.bind().bind()
}
const se = class se {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) r[o] = t[o] ^ e[o % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(se.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), o => o.charCodeAt(0)),
        r = new TextDecoder().decode(se.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = se.codec(e);
    localStorage.setItem(se.KEY, btoa(String.fromCharCode(...r)))
  }
};
R(se, "KEY", "ui_layout_v3"), R(se, "XOR_KEY", "wplace-prefs");
let kt = se;
const ce = class ce {
  get() {
    try {
      const t = sessionStorage.getItem(ce.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const o = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(o - ce.SHIFT & 65535)
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
      const i = o.charCodeAt(0) + ce.SHIFT & 65535;
      r += i.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(ce.KEY, r)
  }
};
R(ce, "KEY", "nav.cursor"), R(ce, "SHIFT", 13);
let Kt = ce;
const ge = class ge {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + ge.KEY + "=([^;]*)"));
    if (t) try {
      const [e, r] = decodeURIComponent(t[1]).split("."), o = parseInt(e, 36), i = parseInt(r, 36);
      return !Number.isFinite(o) || !Number.isFinite(i) ? void 0 : {
        userId: o,
        timestamp: i
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${ge.KEY}=${encodeURIComponent(e)};path=/;max-age=${ge.MAX_AGE};SameSite=Lax`
  }
};
R(ge, "KEY", "_pf_uid"), R(ge, "MAX_AGE", 3600 * 24 * 365);
let $t = ge;
class dR {
  constructor() {
    R(this, "packed")
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
const Le = new uR;
export {
  bp as $, KR as A, kR as B, SR as C, K as D, ER as E, vR as F, BR as G, TR as H, wR as I, hR as J, Le as K, hi as L, PA as M, kr as N, yR as O, en as P, gR as Q, M_ as R, jR as S, ue as T, Wt as U, zR as V, Er as W, Ct as X, zn as Y, qR as Z, jw as _, le as a, Jd as a0, Pu as a1, Nv as a2, $f as a3, VR as a4, WR as a5, FR as a6, OR as a7, rk as a8, aS as a9, GR as aa, LR as ab, RR as ac, DR as ad, NR as ae, UR as af, mR as ag, Jw as ah, Tt as b, d as c, AR as d, MR as e, CR as f, br as g, jd as h, kw as i, sp as j, bu as k, zf as l, gv as m, Vt as n, wi as o, bR as p, Ht as q, yi as r, IR as s, $A as t, he as u, xR as v, PR as w, sA as x, Y as y, HR as z
};