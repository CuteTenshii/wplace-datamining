var Or = Object.defineProperty;
var tn = n => {
  throw TypeError(n)
};
var Ir = (n, t, e) => t in n ? Or(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var k = (n, t, e) => Ir(n, typeof t != "symbol" ? t + "" : t, e),
  kr = (n, t, e) => t.has(n) || tn("Cannot " + e);
var v = (n, t, e) => (kr(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  P = (n, t, e) => t.has(n) ? tn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  e as F,
  i as L,
  h as U,
  g as gt,
  bM as Ar,
  q as Nr,
  A as nn,
  u as Ne
} from "./BC180BoF.js";
import {
  g as m
} from "./BhCkpOlh.js";
const Ie = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  ie = globalThis,
  Pe = "10.40.0";

function Vt() {
  return Gt(ie), ie
}

function Gt(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || Pe, t[Pe] = t[Pe] || {}
}

function Wt(n, t, e = ie) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    a = r[Pe] = r[Pe] || {};
  return a[n] || (a[n] = t())
}
const Rr = "Sentry Logger ",
  rn = {};

function xr(n) {
  if (!("console" in ie)) return n();
  const t = ie.console,
    e = {},
    r = Object.keys(rn);
  r.forEach(a => {
    const i = rn[a];
    e[a] = t[a], t[a] = i
  });
  try {
    return n()
  } finally {
    r.forEach(a => {
      t[a] = e[a]
    })
  }
}

function Dr() {
  Kt().enabled = !0
}

function Pr() {
  Kt().enabled = !1
}

function Wn() {
  return Kt().enabled
}

function Lr(...n) {
  qt("log", ...n)
}

function Mr(...n) {
  qt("warn", ...n)
}

function Ur(...n) {
  qt("error", ...n)
}

function qt(n, ...t) {
  Ie && Wn() && xr(() => {
    ie.console[n](`${Rr}[${n}]:`, ...t)
  })
}

function Kt() {
  return Ie ? Wt("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const ht = {
    enable: Dr,
    disable: Pr,
    isEnabled: Wn,
    log: Lr,
    warn: Mr,
    error: Ur
  },
  Cr = Object.prototype.toString;

function jr(n, t) {
  return Cr.call(n) === `[object ${t}]`
}

function Br(n) {
  return jr(n, "Object")
}

function Fr(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function zr(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    Ie && ht.log(`Failed to add non-enumerable property "${t}" to object`, n)
  }
}
let be;

function Ot(n) {
  if (be !== void 0) return be ? be(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = ie;
  return t in e && typeof e[t] == "function" ? (be = e[t], be(n)) : (be = null, n())
}

function Lt() {
  return Ot(() => Math.random())
}

function Vr() {
  return Ot(() => Date.now())
}

function Gr(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function Wr() {
  const n = ie;
  return n.crypto || n.msCrypto
}
let kt;

function qr() {
  return Lt() * 16
}

function Le(n = Wr()) {
  try {
    if (n != null && n.randomUUID) return Ot(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return kt || (kt = "10000000100040008000" + 1e11), kt.replace(/[018]/g, t => (t ^ (qr() & 15) >> t / 4).toString(16))
}
const qn = 1e3;

function Kn() {
  return Vr() / qn
}

function Kr() {
  const {
    performance: n
  } = ie;
  if (!(n != null && n.now) || !n.timeOrigin) return Kn;
  const t = n.timeOrigin;
  return () => (t + Ot(() => n.now())) / qn
}
let an;

function Yr() {
  return (an ?? (an = Kr()))()
}

function Hr(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Yr(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : Le()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function Yn(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const a in t) Object.prototype.hasOwnProperty.call(t, a) && (r[a] = Yn(r[a], t[a], e - 1));
  return r
}

function on() {
  return Le()
}
const Mt = "_sentrySpan";

function sn(n, t) {
  t ? zr(n, Mt, t) : delete n[Mt]
}

function cn(n) {
  return n[Mt]
}
const $r = 100;
class ge {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: on(),
      sampleRand: Lt()
    }
  }
  clone() {
    const t = new ge;
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, sn(t, cn(this)), t
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
    }, this._session && Hr(this._session, {
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
      r = e instanceof ge ? e.getScopeData() : Br(e) ? t : void 0,
      {
        tags: a,
        attributes: i,
        extra: o,
        user: s,
        contexts: u,
        level: l,
        fingerprint: _ = [],
        propagationContext: d,
        conversationId: p
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...a
    }, this._attributes = {
      ...this._attributes,
      ...i
    }, this._extra = {
      ...this._extra,
      ...o
    }, this._contexts = {
      ...this._contexts,
      ...u
    }, s && Object.keys(s).length && (this._user = s), l && (this._level = l), _.length && (this._fingerprint = _), d && (this._propagationContext = d), p && (this._conversationId = p), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, sn(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: on(),
      sampleRand: Lt()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var i;
    const r = typeof e == "number" ? e : $r;
    if (r <= 0) return this;
    const a = {
      timestamp: Kn(),
      ...t,
      message: t.message ? Gr(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(a), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (i = this._client) == null || i.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
      span: cn(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Yn(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || Le();
    if (!this._client) return Ie && ht.warn("No client configured on scope - will not capture exception!"), r;
    const a = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: a,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const a = (r == null ? void 0 : r.event_id) || Le();
    if (!this._client) return Ie && ht.warn("No client configured on scope - will not capture message!"), a;
    const i = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: i,
      ...r,
      event_id: a
    }, this), a
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || Le();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (Ie && ht.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function Zr() {
  return Wt("defaultCurrentScope", () => new ge)
}

function Jr() {
  return Wt("defaultIsolationScope", () => new ge)
}
class Xr {
  constructor(t, e) {
    let r;
    t ? r = t : r = new ge;
    let a;
    e ? a = e : a = new ge, this._stack = [{
      scope: r
    }], this._isolationScope = a
  }
  withScope(t) {
    const e = this._pushScope();
    let r;
    try {
      r = t(e)
    } catch (a) {
      throw this._popScope(), a
    }
    return Fr(r) ? r.then(a => (this._popScope(), a), a => {
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
  const n = Vt(),
    t = Gt(n);
  return t.stack = t.stack || new Xr(Zr(), Jr())
}

function Qr(n) {
  return Ae().withScope(n)
}

function ea(n, t) {
  const e = Ae();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function un(n) {
  return Ae().withScope(() => n(Ae().getIsolationScope()))
}

function ta() {
  return {
    withIsolationScope: un,
    withScope: Qr,
    withSetScope: ea,
    withSetIsolationScope: (n, t) => un(t),
    getCurrentScope: () => Ae().getScope(),
    getIsolationScope: () => Ae().getIsolationScope()
  }
}

function Hn(n) {
  const t = Gt(n);
  return t.acs ? t.acs : ta()
}

function na() {
  const n = Vt();
  return Hn(n).getCurrentScope()
}

function ra() {
  const n = Vt();
  return Hn(n).getIsolationScope()
}

function aa(n, t) {
  return na().captureException(n, void 0)
}

function ia(n, t) {
  ra().setContext(n, t)
}
const _E = "https://maps.wplace.live",
  fE = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  oa = "true",
  hE = "0x4AAAAAABpHqZ-6i7uL0nmG",
  pE = "https://backend.wplace.live/files",
  Yt = "https://backend.wplace.live",
  sa = "" + new URL("../assets/pawtect_wasm_bg.YFplO3ET.wasm", import.meta.url).href,
  ln = "theme";
var je, Be, Fe, ze, Ve, Ge, We, qe, Ke, Ye;
class ca {
  constructor() {
    P(this, je, F(!1));
    P(this, Be, F(!1));
    P(this, Fe, F(0));
    P(this, ze, F(!1));
    P(this, Ve, F(gt(ua())));
    P(this, Ge, F(null));
    P(this, We, F(!1));
    P(this, qe, F("custom-winter"));
    P(this, Ke, F(gt(Date.now())));
    P(this, Ye, F(void 0));
    setInterval(() => {
      U(v(this, Ke), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(ln), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return L(v(this, je))
  }
  set dropletsDialogOpen(t) {
    U(v(this, je), t, !0)
  }
  get storeDialogOpen() {
    return L(v(this, Be))
  }
  set storeDialogOpen(t) {
    U(v(this, Be), t, !0)
  }
  get storeTabIndex() {
    return L(v(this, Fe))
  }
  set storeTabIndex(t) {
    U(v(this, Fe), t, !0)
  }
  get muted() {
    return L(v(this, ze))
  }
  set muted(t) {
    U(v(this, ze), t, !0)
  }
  get language() {
    return L(v(this, Ve))
  }
  set language(t) {
    U(v(this, Ve), t, !0)
  }
  get map() {
    return L(v(this, Ge))
  }
  set map(t) {
    U(v(this, Ge), t)
  }
  get automatedClicks() {
    return L(v(this, We))
  }
  set automatedClicks(t) {
    U(v(this, We), t, !0)
  }
  get theme() {
    return L(v(this, qe))
  }
  set theme(t) {
    U(v(this, qe), t, !0), localStorage.setItem(ln, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return L(v(this, Ke))
  }
  get captcha() {
    return la ? L(v(this, Ye)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    U(v(this, Ye), t, !0)
  }
}
je = new WeakMap, Be = new WeakMap, Fe = new WeakMap, ze = new WeakMap, Ve = new WeakMap, Ge = new WeakMap, We = new WeakMap, qe = new WeakMap, Ke = new WeakMap, Ye = new WeakMap;
const Ht = new ca;

function ua() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const la = oa.toLowerCase() !== "false",
  da = 60,
  _a = 100,
  fa = 50,
  ha = 2e3;
class $n {
  constructor(t) {
    k(this, "items", []);
    k(this, "writeIdx", 0);
    this.capacity = t
  }
  push(t) {
    this.items[this.writeIdx % this.capacity] = t, this.writeIdx++
  }
  drain() {
    const t = this.items.slice(0, Math.min(this.writeIdx, this.capacity));
    return this.items = [], this.writeIdx = 0, t
  }
}

function pa() {
  return {
    idleStartMs: 0,
    totalIdleMs: 0,
    focusStartMs: 0,
    totalFocusMs: 0,
    lastMouseSampleMs: 0,
    lastClickX: 0,
    lastClickY: 0,
    windowStartMs: 0
  }
}
const Zn = new $n(_a),
  Jn = new $n(fa);
let C = pa(),
  wt = null,
  dn = !1,
  x = null,
  Xn = 0;

function mE() {
  dn || typeof window > "u" || (dn = !0, C.focusStartMs = performance.now(), C.windowStartMs = Date.now(), window.addEventListener("pointermove", n => {
    const t = performance.now();
    t - C.lastMouseSampleMs < da || (C.lastMouseSampleMs = t, Zn.push({
      x: n.clientX,
      y: n.clientY,
      t
    }))
  }, {
    passive: !0
  }), window.addEventListener("pointerdown", n => {
    Jn.push(performance.now()), C.lastClickX = n.clientX, C.lastClickY = n.clientY
  }, {
    passive: !0
  }), window.addEventListener("blur", () => {
    C.totalFocusMs += performance.now() - C.focusStartMs, C.idleStartMs = performance.now()
  }, {
    passive: !0
  }), window.addEventListener("focus", () => {
    C.idleStartMs > 0 && (C.totalIdleMs += performance.now() - C.idleStartMs, C.idleStartMs = 0), C.focusStartMs = performance.now()
  }, {
    passive: !0
  }), Ia())
}

function ma() {
  wt = ga();
  try {
    const n = wt,
      t = new Uint8Array(40),
      e = new DataView(t.buffer);
    e.setUint8(0, 1);
    let r = 0;
    n.isLinearMovement && (r |= 1), n.isConstantInterval && (r |= 2), n.hasZeroJitter && (r |= 4), x != null && x.hts && (r |= 8), navigator.webdriver && (r |= 16), Ht.automatedClicks && (r |= 32), x != null && x.cdp && (r |= 64), x != null && x.odz && (r |= 128), e.setUint8(1, r), e.setUint8(2, Math.min(255, n.clickCount)), e.setUint16(3, Math.min(65535, Math.round(n.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, n.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(n.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, n.movementSegments)), e.setUint8(8, Math.min(255, Math.round(n.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, C.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, C.lastClickY))), e.setUint8(13, Math.min(255, x ? x.lc : 0)), e.setUint8(14, Math.min(255, x ? x.pc : 0)), e.setUint8(15, Math.min(255, x ? x.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(n.idleMs))), e.setUint16(18, Math.min(65535, Math.round(n.focusMs))), e.setUint16(20, Math.min(65535, Math.round(n.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(n.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(n.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(n.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(n.preClickPauseAvg))), e.setUint16(30, Math.min(65535, x ? x.sw : 0)), e.setUint16(32, Math.min(65535, x ? x.sh : 0)), e.setUint8(34, x ? x.fb & 255 : 0), e.setUint8(35, Math.min(255, x ? x.ptc : 0)), e.setUint8(36, x ? x.adf & 255 : 0);
    let a = 0;
    return x != null && x.cdr && (a |= 1), e.setUint8(37, a), e.setUint16(38, Math.min(65535, Math.round(Xn * 100))), btoa(String.fromCharCode(...t))
  } catch {
    return ""
  }
}

function ga() {
  x = Oa();
  const n = Date.now(),
    t = C.windowStartMs,
    e = performance.now(),
    r = Zn.drain(),
    a = Jn.drain(),
    i = Ta(C, e);
  C.totalIdleMs = 0, C.totalFocusMs = 0, C.focusStartMs = e, C.windowStartMs = n;
  const o = ya(r),
    s = va(a),
    u = Ea(a, r),
    l = o.straightnessAvg > .95 && r.length > 10,
    _ = o.jitterAvg < .01 && r.length > 10,
    d = s.stddev / Math.max(1, s.avg) < .05 && a.length >= 5;
  return wt = {
    windowStart: t,
    windowEnd: n,
    mouseSpeedAvg: oe(o.speedAvg),
    mouseSpeedStddev: oe(o.speedStddev),
    mouseAccelAvg: oe(o.accelAvg),
    mouseAccelStddev: oe(o.accelStddev),
    microMovementCount: o.microMovementCount,
    movementSegments: o.movementSegments,
    avgSegmentCurvature: oe(o.avgSegmentCurvature),
    velocityProfileSkew: oe(o.velocityProfileSkew),
    angularVelocityStddev: oe(o.angularVelocityStddev),
    clickCount: a.length,
    preClickPauseAvg: oe(u),
    idleMs: i.idleMs,
    focusMs: i.focusMs,
    isLinearMovement: l,
    isConstantInterval: d,
    hasZeroJitter: _
  }, wt
}
const wa = {
  speedAvg: 0,
  speedStddev: 0,
  jitterAvg: 0,
  straightnessAvg: 0,
  accelAvg: 0,
  accelStddev: 0,
  microMovementCount: 0,
  movementSegments: 0,
  avgSegmentCurvature: 0,
  velocityProfileSkew: 0,
  angularVelocityStddev: 0,
  speeds: []
};

function ya(n) {
  if (n.length < 3) return wa;
  const t = [],
    e = [],
    r = [];
  let a = 0,
    i = 0,
    o = 0;
  const s = [];
  for (let w = 1; w < n.length; w++) {
    const S = n[w].x - n[w - 1].x,
      E = n[w].y - n[w - 1].y,
      Z = Math.max(1, n[w].t - n[w - 1].t),
      V = Math.sqrt(S * S + E * E),
      z = V / Z;
    if (t.push(z), V < 3 && V > 0 && a++, Z > ha) {
      if (w - i > 2) {
        o++;
        const te = _n(n.slice(i, w));
        te >= 0 && s.push(te)
      }
      i = w
    }
    if (w >= 2) {
      const te = n[w - 1].x - n[w - 2].x,
        ve = n[w - 1].y - n[w - 2].y,
        It = S * te + E * ve,
        Qt = Math.sqrt(S * S + E * E),
        en = Math.sqrt(te * te + ve * ve);
      Qt > 0 && en > 0 && e.push(1 - Math.abs(It / (Qt * en)));
      const Sr = t[t.length - 2] || 0;
      r.push(Math.abs(z - Sr))
    }
  }
  if (n.length - i > 2) {
    o++;
    const w = _n(n.slice(i));
    w >= 0 && s.push(w)
  }
  const u = t.reduce((w, S) => w + S, 0) / t.length,
    l = e.length > 0 ? e.reduce((w, S) => w + S, 0) / e.length : 0,
    _ = t.reduce((w, S) => w + Math.pow(S - u, 2), 0) / t.length,
    d = Math.sqrt(_);
  let p = 0,
    y = 0;
  if (r.length > 0) {
    p = r.reduce((S, E) => S + E, 0) / r.length;
    const w = r.reduce((S, E) => S + Math.pow(E - p, 2), 0) / r.length;
    y = Math.sqrt(w)
  }
  const b = n[0],
    g = n[n.length - 1],
    T = Math.sqrt(Math.pow(g.x - b.x, 2) + Math.pow(g.y - b.y, 2));
  let O = 0;
  for (let w = 1; w < n.length; w++) {
    const S = n[w].x - n[w - 1].x,
      E = n[w].y - n[w - 1].y;
    O += Math.sqrt(S * S + E * E)
  }
  const R = O > 0 ? T / O : 0,
    j = s.length > 0 ? s.reduce((w, S) => w + S, 0) / s.length : 0;
  let B = 0;
  t.length >= 5 && d > .001 && (B = t.reduce((S, E) => S + Math.pow(E - u, 3), 0) / t.length / Math.pow(d, 3));
  let Y = 0;
  if (n.length >= 4) {
    const w = [];
    for (let S = 1; S < n.length; S++) {
      const E = n[S].x - n[S - 1].x,
        Z = n[S].y - n[S - 1].y;
      Math.sqrt(E * E + Z * Z) > .5 && w.push(Math.atan2(Z, E))
    }
    if (w.length >= 3) {
      const S = [];
      for (let V = 1; V < w.length; V++) {
        let z = w[V] - w[V - 1];
        for (; z > Math.PI;) z -= 2 * Math.PI;
        for (; z < -Math.PI;) z += 2 * Math.PI;
        S.push(z)
      }
      const E = S.reduce((V, z) => V + z, 0) / S.length,
        Z = S.reduce((V, z) => V + Math.pow(z - E, 2), 0) / S.length;
      Y = Math.sqrt(Z)
    }
  }
  return {
    speedAvg: u,
    speedStddev: d,
    jitterAvg: l,
    straightnessAvg: R,
    accelAvg: p,
    accelStddev: y,
    microMovementCount: a,
    movementSegments: o,
    avgSegmentCurvature: j,
    velocityProfileSkew: B,
    angularVelocityStddev: Y,
    speeds: t
  }
}

function va(n) {
  if (n.length < 2) return {
    avg: 0,
    stddev: 0
  };
  const t = [];
  for (let a = 1; a < n.length; a++) t.push(n[a] - n[a - 1]);
  const e = t.reduce((a, i) => a + i, 0) / t.length,
    r = t.reduce((a, i) => a + Math.pow(i - e, 2), 0) / t.length;
  return {
    avg: e,
    stddev: Math.sqrt(r)
  }
}

function ba(n, t) {
  let e = 0,
    r = n.length - 1,
    a = -1;
  for (; e <= r;) {
    const i = e + r >>> 1;
    n[i].t <= t ? (a = i, e = i + 1) : r = i - 1
  }
  return a
}

function Ea(n, t) {
  if (n.length === 0 || t.length < 2) return 0;
  let e = 0,
    r = 0;
  for (const a of n) {
    const i = ba(t, a);
    i >= 0 && (e += a - t[i].t, r++)
  }
  return r > 0 ? e / r : 0
}

function Ta(n, t) {
  const e = Math.round(n.totalIdleMs + (n.idleStartMs > 0 ? t - n.idleStartMs : 0)),
    r = Math.round(n.totalFocusMs + (n.idleStartMs === 0 ? t - n.focusStartMs : 0));
  return {
    idleMs: e,
    focusMs: r
  }
}

function _n(n) {
  if (n.length < 3) return -1;
  const t = n[0],
    e = n[n.length - 1];
  if (Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) < 5) return -1;
  let a = 0,
    i = 0;
  for (let o = 1; o < n.length; o++) {
    const s = n[o].x - n[o - 1].x,
      u = n[o].y - n[o - 1].y;
    if (a += Math.sqrt(s * s + u * u), o >= 2) {
      const l = n[o - 1].x - n[o - 2].x,
        _ = n[o - 1].y - n[o - 2].y,
        d = l * u - _ * s,
        p = l * s + _ * u;
      i += Math.abs(Math.atan2(d, p))
    }
  }
  return a > 0 ? i / a : 0
}

function Sa() {
  var r;
  let n = 0;
  const t = navigator,
    e = ["hardwareConcurrency", "deviceMemory", "platform", "vendor", "maxTouchPoints", "languages", "plugins", "userAgent"];
  try {
    for (const a of e)
      if (Object.getOwnPropertyDescriptor(navigator, a) !== void 0) {
        n |= 1;
        break
      }
  } catch {}
  try {
    const a = document.createElement("iframe");
    a.style.display = "none", document.body.appendChild(a);
    const i = a.contentWindow;
    if (i) {
      const o = i.Function.prototype.toString,
        s = ["hardwareConcurrency", "platform", "languages"];
      for (const u of s) {
        const l = Object.getOwnPropertyDescriptor(Navigator.prototype, u);
        if (l && typeof l.get == "function") {
          const _ = Function.prototype.toString.call(l.get),
            d = o.call(l.get);
          if (_ !== d) {
            n |= 2;
            break
          }
          if (!d.includes("native code")) {
            n |= 2;
            break
          }
        }
      }
    }
    a.remove()
  } catch {}
  try {
    const a = navigator.userAgent,
      i = navigator.platform;
    if (a && i) {
      const o = /Windows/.test(a),
        s = /Macintosh|Mac OS X/.test(a),
        u = /Linux/.test(a) && !/Android/.test(a),
        l = /Android/.test(a),
        _ = /iPhone|iPad|iPod/.test(a),
        d = /^Win/.test(i),
        p = /^Mac/.test(i),
        y = /^Linux/.test(i),
        b = /^(iPhone|iPad|iPod)/.test(i);
      if ((o && !d || s && !p || u && !y || l && !y || _ && !b) && (n |= 4), t.userAgentData && t.userAgentData.platform) {
        const g = t.userAgentData.platform;
        (o && g !== "Windows" || s && g !== "macOS" || u && g !== "Linux" || l && g !== "Android") && (n |= 4)
      }
    }
  } catch {}
  try {
    const i = document.createElement("canvas").getContext("webgl");
    if (i) {
      const o = i.getExtension("WEBGL_debug_renderer_info");
      if (o) {
        const s = (i.getParameter(o.UNMASKED_RENDERER_WEBGL) || "").toLowerCase(),
          u = (i.getParameter(o.UNMASKED_VENDOR_WEBGL) || "").toLowerCase(),
          l = navigator.userAgent,
          _ = /Windows/.test(l),
          d = /Macintosh|Mac OS X/.test(l);
        (s.includes("apple") || u.includes("apple")) && _ && (n |= 8), s.includes("angle") && d && !s.includes("metal") && (n |= 8), (s.includes("d3d11") || s.includes("direct3d")) && d && (n |= 8)
      }(r = i.getExtension("WEBGL_lose_context")) == null || r.loseContext()
    }
  } catch {}
  try {
    (screen.availWidth > screen.width || screen.availHeight > screen.height) && (n |= 16), screen.pixelDepth !== screen.colorDepth && (n |= 16)
  } catch {}
  try {
    const a = navigator.userAgent;
    if (/Chrome\//.test(a) && !/Edg\//.test(a)) {
      const i = window.chrome;
      i && typeof i.csi != "function" && (n |= 64)
    }
  } catch {}
  try {
    const a = ["hardwareConcurrency", "platform", "maxTouchPoints", "deviceMemory"];
    for (const i of a) {
      const o = Object.getOwnPropertyDescriptor(navigator, i);
      if (o && "value" in o) {
        n |= 128;
        break
      }
    }
  } catch {}
  return n
}

function Oa() {
  const n = navigator,
    t = n.plugins ? n.plugins.length : 0,
    e = "ontouchstart" in window || n.maxTouchPoints > 0,
    r = n.maxTouchPoints || 0;
  let a = 0;
  typeof SharedArrayBuffer < "u" && (a |= 1), typeof Intl.Segmenter < "u" && (a |= 2), typeof CSS.highlights < "u" && (a |= 4), n.userAgentData && (a |= 8), window.chrome && (a |= 16), typeof window.InstallTrigger < "u" && (a |= 32), typeof window.WebKitMutationObserver < "u" && (a |= 64), typeof window.MSStream < "u" && (a |= 128);
  let i = 0;
  const o = ["webdriver", "languages", "plugins", "hardwareConcurrency", "platform", "userAgent", "vendor", "maxTouchPoints", "deviceMemory", "cookieEnabled", "pdfViewerEnabled", "connection"],
    s = ["width", "height", "colorDepth", "pixelDepth", "availWidth", "availHeight"],
    u = Function.prototype.toString;
  for (const g of o) try {
    const T = Object.getOwnPropertyDescriptor(Navigator.prototype, g);
    T && typeof T.get == "function" && u.call(T.get).includes("native code") === !1 && i++
  } catch {}
  for (const g of s) try {
    const T = Object.getOwnPropertyDescriptor(Screen.prototype, g);
    T && typeof T.get == "function" && u.call(T.get).includes("native code") === !1 && i++
  } catch {}
  let l = "",
    _ = !0;
  try {
    const g = document.createElement("canvas");
    g.width = 64, g.height = 16;
    const T = g.getContext("2d");
    if (T) {
      T.textBaseline = "top", T.font = "14px Arial", T.fillText("wplace🐾", 2, 2);
      const O = g.toDataURL();
      let R = 0;
      for (let B = 0; B < O.length; B++) R = (R << 5) - R + O.charCodeAt(B) | 0;
      l = (R >>> 0).toString(16).padStart(8, "0"), T.clearRect(0, 0, 64, 16), T.fillText("wplace🐾", 2, 2);
      const j = g.toDataURL();
      _ = O === j
    }
  } catch {}
  let d = !1;
  try {
    const g = new Error;
    Object.defineProperty(g, "stack", {
      get() {
        return d = !0, ""
      }
    }), console.debug(g)
  } catch {}
  const p = n.languages ? n.languages.length : 0,
    y = (window.outerWidth === 0 || window.outerHeight === 0) && (window.innerWidth === 0 || window.innerHeight === 0),
    b = Sa();
  return {
    pc: t,
    sw: screen.width,
    sh: screen.height,
    hts: e,
    mtp: r,
    fb: a,
    ptc: i,
    ch: l,
    cdp: d,
    lc: p,
    odz: y,
    cdr: _,
    adf: b
  }
}

function Ia() {
  const n = [];

  function e(r) {
    if (n.push(r), n.length < 30) requestAnimationFrame(e);
    else {
      const a = [];
      for (let o = 1; o < n.length; o++) {
        const s = n[o] - n[o - 1];
        s < 100 && a.push(s)
      }
      if (a.length < 5) return;
      a.sort((o, s) => o - s);
      const i = a[Math.floor(a.length / 2)];
      Xn = a.reduce((o, s) => o + Math.abs(s - i), 0) / a.length
    }
  }
  requestAnimationFrame(e)
}

function oe(n) {
  return Math.round(n * 1e3) / 1e3
}
const ka = `
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
async function Aa() {
  try {
    const n = await fetch(`${Yt}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await Na(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function Na(n, t) {
  return new Promise(e => {
    const r = new Blob([ka], {
        type: "application/javascript"
      }),
      a = URL.createObjectURL(r),
      i = new Worker(a),
      o = setTimeout(() => {
        i.terminate(), URL.revokeObjectURL(a), e(null)
      }, 12e4);
    i.onmessage = s => {
      clearTimeout(o), i.terminate(), URL.revokeObjectURL(a), s.data.error ? e(null) : e(s.data.nonce)
    }, i.onerror = () => {
      clearTimeout(o), i.terminate(), URL.revokeObjectURL(a), e(null)
    }, i.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const Qn = 3;
var He, $e;
class Ra {
  constructor() {
    P(this, He, F(null));
    P(this, $e, F(0))
  }
  get current() {
    return L(v(this, He))
  }
  set current(t) {
    U(v(this, He), t, !0)
  }
  get errorCount() {
    return L(v(this, $e))
  }
  set errorCount(t) {
    U(v(this, $e), t, !0)
  }
}
He = new WeakMap, $e = new WeakMap;
const q = new Ra;
async function fn(n) {
  if (n === 1) return xa();
  if (n === 2) {
    const t = await er();
    return t ? hn("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await Da();
    return t ? hn("hcaptcha", t) : !1
  }
  return n === 4 ? Pa() : !1
}
async function xa() {
  for (let n = 0; n < Qn; n++) try {
    const t = await Aa();
    if (!t) continue;
    return await le.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function hn(n, t) {
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
const ke = {};

function er() {
  return tr(2)
}

function Da() {
  return tr(3)
}

function tr(n) {
  const t = ke[n];
  if (t) return t;
  const e = new Promise(r => {
    q.errorCount = 0, q.current = {
      tier: n,
      resolve: a => {
        delete ke[n], r(a)
      }
    }
  });
  return ke[n] = e, e
}

function Pa() {
  const n = ke[4];
  if (n) return n;
  const t = new Promise(e => {
    q.errorCount = 0, q.current = {
      tier: 4,
      resolve: r => {
        delete ke[4], e(r)
      }
    }
  });
  return ke[4] = t, t
}

function gE(n) {
  const t = q.current;
  !t || t.tier === 4 || (t.resolve(n), q.current = null)
}

function wE() {
  const n = q.current;
  !n || n.tier === 4 || (q.errorCount += 1, q.errorCount >= Qn && (n.resolve(void 0), q.current = null))
}

function yE() {
  const n = q.current;
  !n || n.tier !== 4 || (n.resolve(!0), q.current = null)
}

function vE() {
  const n = q.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), q.current = null)
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const La = () => "Your account has been suspended for breaking the rules",
  Ma = () => "Sua conta foi suspensa por quebrar as regras",
  Ua = () => "您的账号因违反规则已被暂停",
  Ca = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  ja = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Ba = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Fa = () => "Il tuo account è stato sospeso per aver infranto le regole",
  za = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Va = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Ga = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Wa = () => "Ваш обліковий запис було призупинено за порушення правил",
  qa = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Ka = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? La() : e === "pt" ? Ma() : e === "ch" ? Ua() : e === "de" ? Ca() : e === "es" ? ja() : e === "fr" ? Ba() : e === "it" ? Fa() : e === "jp" ? za() : e === "pl" ? Va() : e === "ru" ? Ga() : e === "uk" ? Wa() : qa()
  },
  Ya = () => "Alliance name already taken",
  Ha = () => "Já possui uma aliança com esse nome",
  $a = () => "该联盟名称已被占用",
  Za = () => "Der Allianzname ist bereits vergeben",
  Ja = () => "Ese nombre de alianza ya está en uso",
  Xa = () => "Ce nom d’alliance est déjà pris",
  Qa = () => "Esiste già un'alleanza con questo nome",
  ei = () => "このアライアンス名は既に使用されています。",
  ti = () => "Nazwa sojuszu jest już zajęta",
  ni = () => "Такое название альянса уже используется",
  ri = () => "Назва альянсу вже зайнята",
  ai = () => "Tên liên minh đã được sử dụng",
  ii = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Ya() : e === "pt" ? Ha() : e === "ch" ? $a() : e === "de" ? Za() : e === "es" ? Ja() : e === "fr" ? Xa() : e === "it" ? Qa() : e === "jp" ? ei() : e === "pl" ? ti() : e === "ru" ? ni() : e === "uk" ? ri() : ai()
  },
  oi = () => "Alliance name exceeded the maximum number of characters",
  si = () => "O nome da aliança excedeu o número máximo de caracteres",
  ci = () => "联盟名称超过最大字符数限制",
  ui = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  li = () => "El nombre de la alianza superó el número máximo de caracteres",
  di = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  _i = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  fi = () => "アライアンス名が最大文字数を超えています。",
  hi = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  pi = () => "Название альянса превышает максимальную длину",
  mi = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  gi = () => "Tên liên minh vượt quá số ký tự cho phép",
  wi = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? oi() : e === "pt" ? si() : e === "ch" ? ci() : e === "de" ? ui() : e === "es" ? li() : e === "fr" ? di() : e === "it" ? _i() : e === "jp" ? fi() : e === "pl" ? hi() : e === "ru" ? pi() : e === "uk" ? mi() : gi()
  },
  yi = () => "Alliance with empty name",
  vi = () => "Aliança com nome vazio",
  bi = () => "名称为空的联盟",
  Ei = () => "Allianz mit leerem Namen",
  Ti = () => "Alianza con nombre vacío",
  Si = () => "Alliance avec nom vide",
  Oi = () => "Alleanza con nome vuoto",
  Ii = () => "名前が空のアライアンスです。",
  ki = () => "Sojusz z pustą nazwą",
  Ai = () => "Альянс с пустым названием",
  Ni = () => "Альянс із порожньою назвою",
  Ri = () => "Liên minh không có tên",
  xi = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? yi() : e === "pt" ? vi() : e === "ch" ? bi() : e === "de" ? Ei() : e === "es" ? Ti() : e === "fr" ? Si() : e === "it" ? Oi() : e === "jp" ? Ii() : e === "pl" ? ki() : e === "ru" ? Ai() : e === "uk" ? Ni() : Ri()
  },
  Di = () => "Botting",
  Pi = () => "Uso de bots",
  Li = () => "脚本",
  Mi = () => "Bot-Nutzung",
  Ui = () => "Botting",
  Ci = () => "Bots",
  ji = () => "Uso di bot",
  Bi = () => "ボット使用",
  Fi = () => "Botting",
  zi = () => "Боттинг",
  Vi = () => "Боти",
  Gi = () => "Botting",
  Wi = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Di() : e === "pt" ? Pi() : e === "ch" ? Li() : e === "de" ? Mi() : e === "es" ? Ui() : e === "fr" ? Ci() : e === "it" ? ji() : e === "jp" ? Bi() : e === "pl" ? Fi() : e === "ru" ? zi() : e === "uk" ? Vi() : Gi()
  },
  qi = () => "Use of software to completely automate painting",
  Ki = () => "Uso de software para pintar de forma completamente automatizada ",
  Yi = () => "使用软件完全自动化绘制",
  Hi = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  $i = () => "Uso de software para automatizar completamente la pintura",
  Zi = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Ji = () => "Uso di software per dipingere in modo completamente automatizzato",
  Xi = () => "ペイントを完全に自動化するソフトウェアの使用",
  Qi = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  eo = () => "Использование программ для полной автоматизации рисования",
  to = () => "Використання програм, які повністю автоматизують малювання",
  no = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  ro = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? qi() : e === "pt" ? Ki() : e === "ch" ? Yi() : e === "de" ? Hi() : e === "es" ? $i() : e === "fr" ? Zi() : e === "it" ? Ji() : e === "jp" ? Xi() : e === "pl" ? Qi() : e === "ru" ? eo() : e === "uk" ? to() : no()
  },
  ao = () => "Breaking the rules",
  io = () => "Quebrar as regras",
  oo = () => "违反规则",
  so = () => "Regeln brechen",
  co = () => "Romper las reglas",
  uo = () => "Violation des règles",
  lo = () => "Violazione delle regole",
  _o = () => "ルール違反",
  fo = () => "Łamanie zasad",
  ho = () => "Нарушение правил",
  po = () => "Порушення правил",
  mo = () => "Vi phạm luật",
  go = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? ao() : e === "pt" ? io() : e === "ch" ? oo() : e === "de" ? so() : e === "es" ? co() : e === "fr" ? uo() : e === "it" ? lo() : e === "jp" ? _o() : e === "pl" ? fo() : e === "ru" ? ho() : e === "uk" ? po() : mo()
  },
  wo = () => "You have broken one of Wplace's rules",
  yo = () => "Você quebrou uma das regras do Wplace",
  vo = () => "你违反了 Wplace 的一项规则",
  bo = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  Eo = () => "Has infringido una de las reglas de Wplace",
  To = () => "Vous avez enfreint l’une des règles de Wplace",
  So = () => "Hai infranto una delle regole di Wplace",
  Oo = () => "Wplaceのルールのいずれかに違反しました。",
  Io = () => "Złamałeś jedną z zasad Wplace",
  ko = () => "Вы нарушили одно из правил Wplace",
  Ao = () => "Ви порушили одне з правил Wplace",
  No = () => "Bạn đã vi phạm một trong các luật của Wplace",
  Ro = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? wo() : e === "pt" ? yo() : e === "ch" ? vo() : e === "de" ? bo() : e === "es" ? Eo() : e === "fr" ? To() : e === "it" ? So() : e === "jp" ? Oo() : e === "pl" ? Io() : e === "ru" ? ko() : e === "uk" ? Ao() : No()
  },
  xo = () => "You cannot paint over event pixels",
  Do = () => "Você não pode pintar sobre pixels de eventos",
  Po = () => "你不能覆盖活动像素",
  Lo = () => "Du kannst nicht über Event-Pixel malen",
  Mo = () => "No puedes pintar sobre píxeles de evento",
  Uo = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Co = () => "Non puoi dipingere sopra i pixel dell'evento",
  jo = () => "イベント用のピクセルの上には塗れません。",
  Bo = () => "Nie możesz malować po pikselach wydarzenia",
  Fo = () => "Вы не можете рисовать по пикселям события",
  zo = () => "Ви не можете малювати поверх пікселів події",
  Vo = () => "Bạn không thể tô lên pixel sự kiện",
  pn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? xo() : e === "pt" ? Do() : e === "ch" ? Po() : e === "de" ? Lo() : e === "es" ? Mo() : e === "fr" ? Uo() : e === "it" ? Co() : e === "jp" ? jo() : e === "pl" ? Bo() : e === "ru" ? Fo() : e === "uk" ? zo() : Vo()
  },
  Go = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Wo = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  qo = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Ko = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Yo = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Ho = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  $o = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Zo = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Jo = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Xo = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Qo = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  es = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  ts = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Go() : e === "pt" ? Wo() : e === "ch" ? qo() : e === "de" ? Ko() : e === "es" ? Yo() : e === "fr" ? Ho() : e === "it" ? $o() : e === "jp" ? Zo() : e === "pl" ? Jo() : e === "ru" ? Xo() : e === "uk" ? Qo() : es()
  },
  ns = () => "Challenge verification not completed",
  rs = () => "Verificação do desafio não concluída",
  as = () => "挑战验证未完成",
  is = () => "Herausforderungsverifizierung nicht abgeschlossen",
  os = () => "Verificación del desafío no completada",
  ss = () => "Vérification du défi non terminée",
  cs = () => "Verifica della sfida non completata",
  us = () => "チャレンジ検証が完了していません",
  ls = () => "Weryfikacja wyzwania niezakończona",
  ds = () => "Верификация вызова не завершена",
  _s = () => "Перевірку виклику не завершено",
  fs = () => "Xác minh thử thách chưa hoàn thành",
  At = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? ns() : e === "pt" ? rs() : e === "ch" ? as() : e === "de" ? is() : e === "es" ? os() : e === "fr" ? ss() : e === "it" ? cs() : e === "jp" ? us() : e === "pl" ? ls() : e === "ru" ? ds() : e === "uk" ? _s() : fs()
  },
  hs = () => "Couldn't complete the purchase. This item does not exist.",
  ps = () => "Não foi possível concluir a compra. Este item não existe.",
  ms = () => "无法完成购买。该物品不存在。",
  gs = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  ws = () => "No se pudo completar la compra. Este ítem no existe.",
  ys = () => "Achat impossible. Cet objet n’existe pas.",
  vs = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  bs = () => "購入を完了できませんでした。このアイテムは存在しません。",
  Es = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  Ts = () => "Не удалось завершить покупку. Этот предмет не существует.",
  Ss = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  Os = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  mn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? hs() : e === "pt" ? ps() : e === "ch" ? ms() : e === "de" ? gs() : e === "es" ? ws() : e === "fr" ? ys() : e === "it" ? vs() : e === "jp" ? bs() : e === "pl" ? Es() : e === "ru" ? Ts() : e === "uk" ? Ss() : Os()
  },
  Is = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  ks = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  As = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  Ns = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  Rs = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  xs = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Ds = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Ps = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Ls = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  Ms = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Us = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Cs = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  js = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Is() : e === "pt" ? ks() : e === "ch" ? As() : e === "de" ? Ns() : e === "es" ? Rs() : e === "fr" ? xs() : e === "it" ? Ds() : e === "jp" ? Ps() : e === "pl" ? Ls() : e === "ru" ? Ms() : e === "uk" ? Us() : Cs()
  },
  Bs = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Fs = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  zs = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Vs = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Gs = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Ws = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  qs = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Ks = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ys = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Hs = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  $s = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  Zs = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  gn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Bs() : e === "pt" ? Fs() : e === "ch" ? zs() : e === "de" ? Vs() : e === "es" ? Gs() : e === "fr" ? Ws() : e === "it" ? qs() : e === "jp" ? Ks() : e === "pl" ? Ys() : e === "ru" ? Hs() : e === "uk" ? $s() : Zs()
  },
  Js = () => "Doxxing",
  Xs = () => "Doxxing",
  Qs = () => "人肉搜索",
  ec = () => "Doxxing",
  tc = () => "Doxxing",
  nc = () => "Doxxing",
  rc = () => "Doxxing",
  ac = () => "ドックス（Doxxing）",
  ic = () => "Doxxing",
  oc = () => "Докcинг",
  sc = () => "Докcинг",
  cc = () => "Doxxing",
  uc = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Js() : e === "pt" ? Xs() : e === "ch" ? Qs() : e === "de" ? ec() : e === "es" ? tc() : e === "fr" ? nc() : e === "it" ? rc() : e === "jp" ? ac() : e === "pl" ? ic() : e === "ru" ? oc() : e === "uk" ? sc() : cc()
  },
  lc = () => "Released other's personal information without their consent",
  dc = () => "Vazar informações pessoais de terceiros sem consentimento",
  _c = () => "在未获同意的情况下公开他人个人信息",
  fc = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  hc = () => "Divulgó información personal de otra persona sin su consentimiento",
  pc = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  mc = () => "Diffusione di informazioni personali di terzi senza consenso",
  gc = () => "他人の個人情報を同意なく公開した。",
  wc = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  yc = () => "Публикация личной информации других людей без их согласия",
  vc = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  bc = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Ec = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? lc() : e === "pt" ? dc() : e === "ch" ? _c() : e === "de" ? fc() : e === "es" ? hc() : e === "fr" ? pc() : e === "it" ? mc() : e === "jp" ? gc() : e === "pl" ? wc() : e === "ru" ? yc() : e === "uk" ? vc() : bc()
  },
  Tc = () => "This email is already in use.",
  Sc = () => "Este e-mail já está em uso.",
  Oc = () => "This email is already in use.",
  Ic = () => "This email is already in use.",
  kc = () => "Este correo electrónico ya está en uso.",
  Ac = () => "This email is already in use.",
  Nc = () => "Questa email è già in uso.",
  Rc = () => "This email is already in use.",
  xc = () => "This email is already in use.",
  Dc = () => "This email is already in use.",
  Pc = () => "This email is already in use.",
  Lc = () => "This email is already in use.",
  Mc = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Tc() : e === "pt" ? Sc() : e === "ch" ? Oc() : e === "de" ? Ic() : e === "es" ? kc() : e === "fr" ? Ac() : e === "it" ? Nc() : e === "jp" ? Rc() : e === "pl" ? xc() : e === "ru" ? Dc() : e === "uk" ? Pc() : Lc()
  },
  Uc = n => `This email is already in use by user #${n.userId}.`,
  Cc = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  jc = n => `This email is already in use by user #${n.userId}.`,
  Bc = n => `This email is already in use by user #${n.userId}.`,
  Fc = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  zc = n => `This email is already in use by user #${n.userId}.`,
  Vc = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  Gc = n => `This email is already in use by user #${n.userId}.`,
  Wc = n => `This email is already in use by user #${n.userId}.`,
  qc = n => `This email is already in use by user #${n.userId}.`,
  Kc = n => `This email is already in use by user #${n.userId}.`,
  Yc = n => `This email is already in use by user #${n.userId}.`,
  Hc = (n, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Uc(n) : e === "pt" ? Cc(n) : e === "ch" ? jc(n) : e === "de" ? Bc(n) : e === "es" ? Fc(n) : e === "fr" ? zc(n) : e === "it" ? Vc(n) : e === "jp" ? Gc(n) : e === "pl" ? Wc(n) : e === "ru" ? qc(n) : e === "uk" ? Kc(n) : Yc(n)
  },
  $c = () => "Enter a valid email address.",
  Zc = () => "Informe um endereço de e-mail válido.",
  Jc = () => "Enter a valid email address.",
  Xc = () => "Enter a valid email address.",
  Qc = () => "Introduce una dirección de correo electrónico válida.",
  eu = () => "Enter a valid email address.",
  tu = () => "Inserisci un indirizzo email valido.",
  nu = () => "Enter a valid email address.",
  ru = () => "Enter a valid email address.",
  au = () => "Enter a valid email address.",
  iu = () => "Enter a valid email address.",
  ou = () => "Enter a valid email address.",
  su = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? $c() : e === "pt" ? Zc() : e === "ch" ? Jc() : e === "de" ? Xc() : e === "es" ? Qc() : e === "fr" ? eu() : e === "it" ? tu() : e === "jp" ? nu() : e === "pl" ? ru() : e === "ru" ? au() : e === "uk" ? iu() : ou()
  },
  cu = n => `Error while painting: ${n.err}`,
  uu = n => `Erro enquanto pinta: ${n.err}`,
  lu = n => `绘制时出错：${n.err}`,
  du = n => `Fehler beim Malen: ${n.err}`,
  _u = n => `Error al pintar: ${n.err}`,
  fu = n => `Erreur lors de la peinture : ${n.err}`,
  hu = n => `Errore durante la pittura: ${n.err}`,
  pu = n => `ペイント中にエラーが発生しました: ${n.err}`,
  mu = n => `Błąd podczas malowania: ${n.err}`,
  gu = n => `Ошибка при рисовании: ${n.err}`,
  wu = n => `Помилка під час малювання: ${n.err}`,
  yu = n => `Lỗi khi tô: ${n.err}`,
  vu = (n, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? cu(n) : e === "pt" ? uu(n) : e === "ch" ? lu(n) : e === "de" ? du(n) : e === "es" ? _u(n) : e === "fr" ? fu(n) : e === "it" ? hu(n) : e === "jp" ? pu(n) : e === "pl" ? mu(n) : e === "ru" ? gu(n) : e === "uk" ? wu(n) : yu(n)
  },
  bu = () => "Exceeded maximum number of characters",
  Eu = () => "Excedeu o número máximo de caracteres permitidos",
  Tu = () => "超出最大字符数",
  Su = () => "Maximale Zeichenanzahl überschritten",
  Ou = () => "Se excedió el número máximo de caracteres",
  Iu = () => "Nombre maximal de caractères dépassé",
  ku = () => "Numero massimo di caratteri superato",
  Au = () => "最大文字数を超過しました",
  Nu = () => "Przekroczono maksymalną liczbę znaków",
  Ru = () => "Превышено максимальное количество символов",
  xu = () => "Перевищено максимальну кількість символів",
  Du = () => "Đã vượt quá số ký tự tối đa",
  Pu = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? bu() : e === "pt" ? Eu() : e === "ch" ? Tu() : e === "de" ? Su() : e === "es" ? Ou() : e === "fr" ? Iu() : e === "it" ? ku() : e === "jp" ? Au() : e === "pl" ? Nu() : e === "ru" ? Ru() : e === "uk" ? xu() : Du()
  },
  Lu = () => "Verification code expired. Please request a new one.",
  Mu = () => "Código de verificação expirado. Por favor, solicite um novo.",
  Uu = () => "验证码已过期，请重新获取。",
  Cu = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  ju = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  Bu = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  Fu = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  zu = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  Vu = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  Gu = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Wu = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  qu = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  Ku = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Lu() : e === "pt" ? Mu() : e === "ch" ? Uu() : e === "de" ? Cu() : e === "es" ? ju() : e === "fr" ? Bu() : e === "it" ? Fu() : e === "jp" ? zu() : e === "pl" ? Vu() : e === "ru" ? Gu() : e === "uk" ? Wu() : qu()
  },
  Yu = () => "Griefing",
  Hu = () => "Griefing",
  $u = () => "破坏行为",
  Zu = () => "Griefing",
  Ju = () => "Griefing",
  Xu = () => "Griefing",
  Qu = () => "Griefing",
  el = () => "グリーフィング",
  tl = () => "Griefing",
  nl = () => "Гриферство",
  rl = () => "Гріфінг",
  al = () => "Griefing",
  il = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Yu() : e === "pt" ? Hu() : e === "ch" ? $u() : e === "de" ? Zu() : e === "es" ? Ju() : e === "fr" ? Xu() : e === "it" ? Qu() : e === "jp" ? el() : e === "pl" ? tl() : e === "ru" ? nl() : e === "uk" ? rl() : al()
  },
  ol = () => "Messed up with other's artworks",
  sl = () => "Estragou os desenhos dos outros",
  cl = () => "破坏了他人的作品",
  ul = () => "Kunstwerke anderer beschädigt",
  ll = () => "Arruinó las obras de arte de otros",
  dl = () => "A abîmé les œuvres des autres",
  _l = () => "Ha rovinato i disegni degli altri",
  fl = () => "他人の作品を荒らした",
  hl = () => "Zniszczył prace innych",
  pl = () => "Испортил чужие рисунки",
  ml = () => "Зіпсував роботи інших",
  gl = () => "Phá hỏng tranh của người khác",
  wl = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? ol() : e === "pt" ? sl() : e === "ch" ? cl() : e === "de" ? ul() : e === "es" ? ll() : e === "fr" ? dl() : e === "it" ? _l() : e === "jp" ? fl() : e === "pl" ? hl() : e === "ru" ? pl() : e === "uk" ? ml() : gl()
  },
  yl = () => "Hate speech",
  vl = () => "Discurso de Ódio",
  bl = () => "仇恨言论",
  El = () => "Hassrede",
  Tl = () => "Discurso de odio",
  Sl = () => "Discours haineux",
  Ol = () => "Discorso d'odio",
  Il = () => "ヘイトスピーチ",
  kl = () => "Mowa nienawiści",
  Al = () => "Речь ненависти",
  Nl = () => "Мова ворожнечі",
  Rl = () => "Ngôn từ thù hằn",
  xl = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? yl() : e === "pt" ? vl() : e === "ch" ? bl() : e === "de" ? El() : e === "es" ? Tl() : e === "fr" ? Sl() : e === "it" ? Ol() : e === "jp" ? Il() : e === "pl" ? kl() : e === "ru" ? Al() : e === "uk" ? Nl() : Rl()
  },
  Dl = () => "Racism, homophobia, hate groups, ...",
  Pl = () => "Racismo, homofobia, grupos de ódio, ...",
  Ll = () => "种族主义、恐同、仇恨团体等",
  Ml = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Ul = () => "Racismo, homofobia, grupos de odio, ...",
  Cl = () => "Racisme, homophobie, groupes haineux, ...",
  jl = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Bl = () => "人種差別、同性愛差別、ヘイト団体など。",
  Fl = () => "Rasizm, homofobia, grupy nienawiści, ...",
  zl = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Vl = () => "Расизм, гомофобія, групи ненависті, ...",
  Gl = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Wl = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Dl() : e === "pt" ? Pl() : e === "ch" ? Ll() : e === "de" ? Ml() : e === "es" ? Ul() : e === "fr" ? Cl() : e === "it" ? jl() : e === "jp" ? Bl() : e === "pl" ? Fl() : e === "ru" ? zl() : e === "uk" ? Vl() : Gl()
  },
  ql = () => "Inappropriate content",
  Kl = () => "Conteúdo inapropriado",
  Yl = () => "不当内容",
  Hl = () => "Unangemessene Inhalte",
  $l = () => "Contenido inapropiado",
  Zl = () => "Contenu inapproprié",
  Jl = () => "Contenuto inappropriato",
  Xl = () => "不適切なコンテンツ",
  Ql = () => "Nieodpowiednie treści",
  ed = () => "Неприемлемый контент",
  td = () => "Неприйнятний вміст",
  nd = () => "Nội dung không phù hợp",
  rd = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? ql() : e === "pt" ? Kl() : e === "ch" ? Yl() : e === "de" ? Hl() : e === "es" ? $l() : e === "fr" ? Zl() : e === "it" ? Jl() : e === "jp" ? Xl() : e === "pl" ? Ql() : e === "ru" ? ed() : e === "uk" ? td() : nd()
  },
  ad = () => "Explicit, hateful, or illegal content",
  id = () => "Conteúdo explícito, de ódio ou ilegal",
  od = () => "露骨、仇恨或非法内容",
  sd = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  cd = () => "Contenido explícito, de odio o ilegal",
  ud = () => "Contenu explicite, haineux ou illégal",
  ld = () => "Contenuto esplicito, d'odio o illegale",
  dd = () => "露骨、差別的、または違法なコンテンツ",
  _d = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  fd = () => "Откровенный, разжигающий ненависть или незаконный контент",
  hd = () => "Відвертий, ворожий або незаконний вміст",
  pd = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  md = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? ad() : e === "pt" ? id() : e === "ch" ? od() : e === "de" ? sd() : e === "es" ? cd() : e === "fr" ? ud() : e === "it" ? ld() : e === "jp" ? dd() : e === "pl" ? _d() : e === "ru" ? fd() : e === "uk" ? hd() : pd()
  },
  gd = () => "Invalid captcha. Please try again.",
  wd = () => "Captcha inválido. Por favor, tente novamente.",
  yd = () => "验证码无效，请重试。",
  vd = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  bd = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  Ed = () => "Captcha invalide. Veuillez réessayer.",
  Td = () => "Captcha non valido. Riprova.",
  Sd = () => "キャプチャが無効です。もう一度お試しください。",
  Od = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  Id = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  kd = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Ad = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  Nd = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? gd() : e === "pt" ? wd() : e === "ch" ? yd() : e === "de" ? vd() : e === "es" ? bd() : e === "fr" ? Ed() : e === "it" ? Td() : e === "jp" ? Sd() : e === "pl" ? Od() : e === "ru" ? Id() : e === "uk" ? kd() : Ad()
  },
  Rd = () => "Invalid challenge response",
  xd = () => "Resposta de desafio inválida",
  Dd = () => "质询响应无效",
  Pd = () => "Ungültige Challenge-Antwort",
  Ld = () => "Respuesta de desafío inválida",
  Md = () => "Réponse au défi invalide",
  Ud = () => "Risposta alla sfida non valida",
  Cd = () => "無効なチャレンジ応答",
  jd = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Bd = () => "Неверный ответ на вызов",
  Fd = () => "Недійсна відповідь на виклик",
  zd = () => "Phản hồi thử thách không hợp lệ",
  Vd = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Rd() : e === "pt" ? xd() : e === "ch" ? Dd() : e === "de" ? Pd() : e === "es" ? Ld() : e === "fr" ? Md() : e === "it" ? Ud() : e === "jp" ? Cd() : e === "pl" ? jd() : e === "ru" ? Bd() : e === "uk" ? Fd() : zd()
  },
  Gd = () => "The verification code is incorrect. Please check it and try again.",
  Wd = () => "Código inválido",
  qd = () => "验证码不正确。请检查后重试。",
  Kd = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  Yd = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  Hd = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  $d = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  Zd = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Jd = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  Xd = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  Qd = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  e_ = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  t_ = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Gd() : e === "pt" ? Wd() : e === "ch" ? qd() : e === "de" ? Kd() : e === "es" ? Yd() : e === "fr" ? Hd() : e === "it" ? $d() : e === "jp" ? Zd() : e === "pl" ? Jd() : e === "ru" ? Xd() : e === "uk" ? Qd() : e_()
  },
  n_ = () => "Invalid discord.",
  r_ = () => "Discord inválido.",
  a_ = () => "无效的 Discord。",
  i_ = () => "Ungültiger Discord.",
  o_ = () => "Discord inválido.",
  s_ = () => "Discord invalide.",
  c_ = () => "Discord non valido.",
  u_ = () => "無効なDiscordアカウントです。",
  l_ = () => "Nieprawidłowy Discord.",
  d_ = () => "Неверный Discord.",
  __ = () => "Некоректний Discord.",
  f_ = () => "Discord không hợp lệ.",
  h_ = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? n_() : e === "pt" ? r_() : e === "ch" ? a_() : e === "de" ? i_() : e === "es" ? o_() : e === "fr" ? s_() : e === "it" ? c_() : e === "jp" ? u_() : e === "pl" ? l_() : e === "ru" ? d_() : e === "uk" ? __() : f_()
  },
  p_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  m_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  g_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  w_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  y_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  v_ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  b_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  E_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  T_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  S_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  O_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  I_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  wn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? p_() : e === "pt" ? m_() : e === "ch" ? g_() : e === "de" ? w_() : e === "es" ? y_() : e === "fr" ? v_() : e === "it" ? b_() : e === "jp" ? E_() : e === "pl" ? T_() : e === "ru" ? S_() : e === "uk" ? O_() : I_()
  },
  k_ = () => "Please enter a valid phone number with country code.",
  A_ = () => "Insira um número de telefone válido com código do país.",
  N_ = () => "请输入带国家代码的有效电话号码。",
  R_ = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  x_ = () => "Introduce un número de teléfono válido con código de país.",
  D_ = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  P_ = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  L_ = () => "国番号付きの有効な電話番号を入力してください。",
  M_ = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  U_ = () => "Введите действительный номер телефона с кодом страны.",
  C_ = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  j_ = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  B_ = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? k_() : e === "pt" ? A_() : e === "ch" ? N_() : e === "de" ? R_() : e === "es" ? x_() : e === "fr" ? D_() : e === "it" ? P_() : e === "jp" ? L_() : e === "pl" ? M_() : e === "ru" ? U_() : e === "uk" ? C_() : j_()
  },
  F_ = () => "This phone number is not supported. Please use a mobile number that can receive SMS.",
  z_ = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  V_ = () => "不支持此电话号码。请使用可以接收短信的手机号码。",
  G_ = () => "Diese Telefonnummer wird nicht unterstützt. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  W_ = () => "Este número de teléfono no es compatible. Por favor, usa un número de móvil que pueda recibir SMS.",
  q_ = () => "Ce numéro de téléphone n'est pas pris en charge. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  K_ = () => "Questo numero di telefono non è supportato. Utilizza un numero di cellulare che possa ricevere SMS.",
  Y_ = () => "この電話番号はサポートされていません。SMSを受信できる携帯電話番号をご使用ください。",
  H_ = () => "Ten numer telefonu nie jest obsługiwany. Użyj numeru komórkowego, który może odbierać SMS-y.",
  $_ = () => "Этот номер телефона не поддерживается. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  Z_ = () => "Цей номер телефону не підтримується. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  J_ = () => "Số điện thoại này không được hỗ trợ. Vui lòng sử dụng số di động có thể nhận SMS.",
  X_ = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? F_() : e === "pt" ? z_() : e === "ch" ? V_() : e === "de" ? G_() : e === "es" ? W_() : e === "fr" ? q_() : e === "it" ? K_() : e === "jp" ? Y_() : e === "pl" ? H_() : e === "ru" ? $_() : e === "uk" ? Z_() : J_()
  },
  Q_ = () => "The new leader must be a member of the alliance",
  ef = () => "O novo líder deve ser um membro da aliança",
  tf = () => "新盟主必须是联盟成员",
  nf = () => "Der neue Anführer muss Mitglied der Allianz sein",
  rf = () => "El nuevo líder debe ser miembro de la alianza",
  af = () => "Le nouveau chef doit être membre de l’alliance",
  of = () => "Il nuovo leader deve essere un membro dell'alleanza",
  sf = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  cf = () => "Nowy lider musi być członkiem sojuszu",
  uf = () => "Новый лидер должен быть участником альянса",
  lf = () => "Новий лідер має бути учасником альянсу",
  df = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  _f = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Q_() : e === "pt" ? ef() : e === "ch" ? tf() : e === "de" ? nf() : e === "es" ? rf() : e === "fr" ? af() : e === "it" ? of() : e === "jp" ? sf() : e === "pl" ? cf() : e === "ru" ? uf() : e === "uk" ? lf() : df()
  },
  ff = () => "Leaderboard is temporarily disabled",
  hf = () => "O ranking está temporariamente desativado",
  pf = () => "排行榜已暂时停用",
  mf = () => "Die Bestenliste ist vorübergehend deaktiviert",
  gf = () => "La clasificación está deshabilitada temporalmente",
  wf = () => "Le classement est temporairement désactivé",
  yf = () => "La classifica è temporaneamente disattivata",
  vf = () => "ランキングは一時的に無効になっています。",
  bf = () => "Ranking jest tymczasowo wyłączony",
  Ef = () => "Таблица лидеров временно отключена",
  Tf = () => "Таблиця лідерів тимчасово вимкнена",
  Sf = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  de = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? ff() : e === "pt" ? hf() : e === "ch" ? pf() : e === "de" ? mf() : e === "es" ? gf() : e === "fr" ? wf() : e === "it" ? yf() : e === "jp" ? vf() : e === "pl" ? bf() : e === "ru" ? Ef() : e === "uk" ? Tf() : Sf()
  },
  Of = () => "Location name is too big (max. 128 characters)",
  If = () => "Nome da localização é grande demais (max. 128 caracteres)",
  kf = () => "位置名称过长（最大 128 个字符）",
  Af = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Nf = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Rf = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  xf = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Df = () => "場所の名前が長すぎます（最大128文字）。",
  Pf = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Lf = () => "Название локации слишком длинное (макс. 128 символов)",
  Mf = () => "Назва локації надто довга (макс. 128 символів)",
  Uf = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Cf = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Of() : e === "pt" ? If() : e === "ch" ? kf() : e === "de" ? Af() : e === "es" ? Nf() : e === "fr" ? Rf() : e === "it" ? xf() : e === "jp" ? Df() : e === "pl" ? Pf() : e === "ru" ? Lf() : e === "uk" ? Mf() : Uf()
  },
  jf = () => "Multi-accounting",
  Bf = () => "Múltiplas contas",
  Ff = () => "多账号",
  zf = () => "Multi-Accounting",
  Vf = () => "Multi-cuentas",
  Gf = () => "Multi-comptes",
  Wf = () => "Multi-account",
  qf = () => "複数アカウント使用",
  Kf = () => "Multi-konta",
  Yf = () => "Мультиаккаунт",
  Hf = () => "Мультиакаунтинг",
  $f = () => "Nhiều tài khoản",
  Zf = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? jf() : e === "pt" ? Bf() : e === "ch" ? Ff() : e === "de" ? zf() : e === "es" ? Vf() : e === "fr" ? Gf() : e === "it" ? Wf() : e === "jp" ? qf() : e === "pl" ? Kf() : e === "ru" ? Yf() : e === "uk" ? Hf() : $f()
  },
  Jf = () => "Use more than one account to paint pixels",
  Xf = () => "Usar mais de uma conta para pintar",
  Qf = () => "使用多个账号绘制像素",
  eh = () => "Mehr als ein Konto zum Malen verwenden",
  th = () => "Uso de más de una cuenta para pintar píxeles",
  nh = () => "Utiliser plus d’un compte pour peindre",
  rh = () => "Usare più di un account per dipingere",
  ah = () => "複数のアカウントを使ってピクセルを塗った。",
  ih = () => "Używanie więcej niż jednego konta do malowania pikseli",
  oh = () => "Использование более одного аккаунта для рисования",
  sh = () => "Використання більше ніж одного акаунта для малювання",
  ch = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  uh = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Jf() : e === "pt" ? Xf() : e === "ch" ? Qf() : e === "de" ? eh() : e === "es" ? th() : e === "fr" ? nh() : e === "it" ? rh() : e === "jp" ? ah() : e === "pl" ? ih() : e === "ru" ? oh() : e === "uk" ? sh() : ch()
  },
  lh = n => `You can change your name again in ${n.days} days`,
  dh = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  _h = n => `你可以在 ${n.days} 天后再次修改名称`,
  fh = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  hh = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  ph = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  mh = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  gh = n => `${n.days}日後に再び名前を変更できます。`,
  wh = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  yh = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  vh = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  bh = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Eh = (n, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? lh(n) : e === "pt" ? dh(n) : e === "ch" ? _h(n) : e === "de" ? fh(n) : e === "es" ? hh(n) : e === "fr" ? ph(n) : e === "it" ? mh(n) : e === "jp" ? gh(n) : e === "pl" ? wh(n) : e === "ru" ? yh(n) : e === "uk" ? vh(n) : bh(n)
  },
  Th = () => "No internet access or the servers are offline. Try again later.",
  Sh = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Oh = () => "没有网络连接或服务器已离线。请稍后重试。",
  Ih = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  kh = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Ah = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Nh = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Rh = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  xh = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Dh = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Ph = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Lh = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  Mh = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Th() : e === "pt" ? Sh() : e === "ch" ? Oh() : e === "de" ? Ih() : e === "es" ? kh() : e === "fr" ? Ah() : e === "it" ? Nh() : e === "jp" ? Rh() : e === "pl" ? xh() : e === "ru" ? Dh() : e === "uk" ? Ph() : Lh()
  },
  Uh = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Ch = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  jh = () => "您无权验证电话号码。请尝试刷新页面。",
  Bh = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Fh = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  zh = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Vh = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Gh = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Wh = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  qh = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  Kh = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  Yh = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  Hh = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Uh() : e === "pt" ? Ch() : e === "ch" ? jh() : e === "de" ? Bh() : e === "es" ? Fh() : e === "fr" ? zh() : e === "it" ? Vh() : e === "jp" ? Gh() : e === "pl" ? Wh() : e === "ru" ? qh() : e === "uk" ? Kh() : Yh()
  },
  $h = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Zh = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Jh = () => "操作不被允许。你的收藏位置可能过多。",
  Xh = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Qh = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  ep = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  tp = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  np = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  rp = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  ap = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  ip = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  op = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  sp = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? $h() : e === "pt" ? Zh() : e === "ch" ? Jh() : e === "de" ? Xh() : e === "es" ? Qh() : e === "fr" ? ep() : e === "it" ? tp() : e === "jp" ? np() : e === "pl" ? rp() : e === "ru" ? ap() : e === "uk" ? ip() : op()
  },
  cp = () => "You are trying to paint with a color you do not own",
  up = () => "Você está tentando pintar com uma cor que não possui",
  lp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  dp = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  _p = () => "Estás intentando pintar con un color que no posees",
  fp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  hp = () => "Stai cercando di dipingere con un colore che non possiedi",
  pp = () => "所持していない色で塗ろうとしています。",
  mp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  gp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  wp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  yp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  yn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? cp() : e === "pt" ? up() : e === "ch" ? lp() : e === "de" ? dp() : e === "es" ? _p() : e === "fr" ? fp() : e === "it" ? hp() : e === "jp" ? pp() : e === "pl" ? mp() : e === "ru" ? gp() : e === "uk" ? wp() : yp()
  },
  vp = () => "Phone already used",
  bp = () => "Telefone já usado",
  Ep = () => "电话号码已被使用",
  Tp = () => "Telefonnummer bereits verwendet",
  Sp = () => "Teléfono ya utilizado",
  Op = () => "Téléphone déjà utilisé",
  Ip = () => "Telefono già utilizzato",
  kp = () => "この電話番号は既に使用されています。",
  Ap = () => "Numer telefonu jest już używany",
  Np = () => "Телефон уже используется",
  Rp = () => "Номер телефону вже використовується",
  xp = () => "Số điện thoại đã được sử dụng",
  Dp = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? vp() : e === "pt" ? bp() : e === "ch" ? Ep() : e === "de" ? Tp() : e === "es" ? Sp() : e === "fr" ? Op() : e === "it" ? Ip() : e === "jp" ? kp() : e === "pl" ? Ap() : e === "ru" ? Np() : e === "uk" ? Rp() : xp()
  },
  Pp = () => "This phone number's region is not supported",
  Lp = () => "A região deste número de telefone não é suportada",
  Mp = () => "此电话号码的地区不受支持",
  Up = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  Cp = () => "La región de este número de teléfono no es compatible",
  jp = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Bp = () => "La regione di questo numero di telefono non è supportata",
  Fp = () => "この電話番号の地域はサポートされていません",
  zp = () => "Region tego numeru telefonu nie jest obsługiwany",
  Vp = () => "Регион этого номера телефона не поддерживается",
  Gp = () => "Регіон цього номера телефону не підтримується",
  Wp = () => "Vùng của số điện thoại này không được hỗ trợ",
  qp = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Pp() : e === "pt" ? Lp() : e === "ch" ? Mp() : e === "de" ? Up() : e === "es" ? Cp() : e === "fr" ? jp() : e === "it" ? Bp() : e === "jp" ? Fp() : e === "pl" ? zp() : e === "ru" ? Vp() : e === "uk" ? Gp() : Wp()
  },
  Kp = () => "Refresh your page to get the latest update",
  Yp = () => "Recarregue sua página para obter as últimas atualizações",
  Hp = () => "刷新页面以获取最新更新",
  $p = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  Zp = () => "Actualiza la página para obtener la última versión",
  Jp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Xp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Qp = () => "最新の状態にするにはページを再読み込みしてください。",
  em = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  tm = () => "Обновите страницу, чтобы получить последние изменения",
  nm = () => "Оновіть сторінку, щоб отримати останні оновлення",
  rm = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  vn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Kp() : e === "pt" ? Yp() : e === "ch" ? Hp() : e === "de" ? $p() : e === "es" ? Zp() : e === "fr" ? Jp() : e === "it" ? Xp() : e === "jp" ? Qp() : e === "pl" ? em() : e === "ru" ? tm() : e === "uk" ? nm() : rm()
  },
  am = () => "The request timed out. Please try again.",
  im = () => "A solicitação expirou. Por favor, tente novamente.",
  om = () => "请求超时。请重试。",
  sm = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  cm = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  um = () => "La requête a expiré. Veuillez réessayer.",
  lm = () => "La richiesta è scaduta. Riprova.",
  dm = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  _m = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  fm = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  hm = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  pm = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  mm = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? am() : e === "pt" ? im() : e === "ch" ? om() : e === "de" ? sm() : e === "es" ? cm() : e === "fr" ? um() : e === "it" ? lm() : e === "jp" ? dm() : e === "pl" ? _m() : e === "ru" ? fm() : e === "uk" ? hm() : pm()
  },
  gm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  wm = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  ym = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  vm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  bm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Em = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Tm = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Sm = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Om = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Im = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  km = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Am = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Nm = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? gm() : e === "pt" ? wm() : e === "ch" ? ym() : e === "de" ? vm() : e === "es" ? bm() : e === "fr" ? Em() : e === "it" ? Tm() : e === "jp" ? Sm() : e === "pl" ? Om() : e === "ru" ? Im() : e === "uk" ? km() : Am()
  },
  Rm = () => "The service is currently unavailable. Please try again later.",
  xm = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Dm = () => "服务当前不可用。请稍后再试。",
  Pm = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Lm = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Mm = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Um = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Cm = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  jm = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Bm = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Fm = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  zm = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Vm = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Rm() : e === "pt" ? xm() : e === "ch" ? Dm() : e === "de" ? Pm() : e === "es" ? Lm() : e === "fr" ? Mm() : e === "it" ? Um() : e === "jp" ? Cm() : e === "pl" ? jm() : e === "ru" ? Bm() : e === "uk" ? Fm() : zm()
  },
  Gm = () => "Too many attempts. Please try again later",
  Wm = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  qm = () => "尝试次数过多，请稍后再试",
  Km = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Ym = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  Hm = () => "Trop de tentatives. Veuillez réessayer plus tard",
  $m = () => "Troppi tentativi. Riprova più tardi.",
  Zm = () => "試行回数が多すぎます。後で再度お試しください。",
  Jm = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Xm = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Qm = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  eg = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  bn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Gm() : e === "pt" ? Wm() : e === "ch" ? qm() : e === "de" ? Km() : e === "es" ? Ym() : e === "fr" ? Hm() : e === "it" ? $m() : e === "jp" ? Zm() : e === "pl" ? Jm() : e === "ru" ? Xm() : e === "uk" ? Qm() : eg()
  },
  tg = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  ng = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  rg = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  ag = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  ig = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  og = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  sg = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  cg = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  ug = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  lg = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  dg = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  _g = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  fg = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? tg() : e === "pt" ? ng() : e === "ch" ? rg() : e === "de" ? ag() : e === "es" ? ig() : e === "fr" ? og() : e === "it" ? sg() : e === "jp" ? cg() : e === "pl" ? ug() : e === "ru" ? lg() : e === "uk" ? dg() : _g()
  },
  hg = () => "The typed username does not match your current username.",
  pg = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  mg = () => "输入的用户名与当前用户名不匹配。",
  gg = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  wg = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  yg = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  vg = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  bg = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Eg = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Tg = () => "Введённое имя пользователя не совпадает с текущим.",
  Sg = () => "Введене імʼя користувача не збігається з поточним.",
  Og = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Ig = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? hg() : e === "pt" ? pg() : e === "ch" ? mg() : e === "de" ? gg() : e === "es" ? wg() : e === "fr" ? yg() : e === "it" ? vg() : e === "jp" ? bg() : e === "pl" ? Eg() : e === "ru" ? Tg() : e === "uk" ? Sg() : Og()
  },
  kg = () => "Unexpected server error. Try again later.",
  Ag = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Ng = () => "服务器出现意外错误。请稍后再试。",
  Rg = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  xg = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Dg = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Pg = () => "Errore imprevisto del server. Riprova più tardi.",
  Lg = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Mg = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Ug = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Cg = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  jg = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  f = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? kg() : e === "pt" ? Ag() : e === "ch" ? Ng() : e === "de" ? Rg() : e === "es" ? xg() : e === "fr" ? Dg() : e === "it" ? Pg() : e === "jp" ? Lg() : e === "pl" ? Mg() : e === "ru" ? Ug() : e === "uk" ? Cg() : jg()
  },
  Bg = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Fg = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  zg = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Vg = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Gg = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  Wg = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  qg = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  Kg = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Yg = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Hg = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  $g = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  Zg = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Jg = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Bg() : e === "pt" ? Fg() : e === "ch" ? zg() : e === "de" ? Vg() : e === "es" ? Gg() : e === "fr" ? Wg() : e === "it" ? qg() : e === "jp" ? Kg() : e === "pl" ? Yg() : e === "ru" ? Hg() : e === "uk" ? $g() : Zg()
  },
  Xg = () => "VPN or proxy detected. Please disable your VPN and try again.",
  Qg = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  ew = () => "检测到VPN或代理。请关闭VPN后重试。",
  tw = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  nw = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  rw = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  aw = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  iw = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  ow = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  sw = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  cw = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  uw = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  lw = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Xg() : e === "pt" ? Qg() : e === "ch" ? ew() : e === "de" ? tw() : e === "es" ? nw() : e === "fr" ? rw() : e === "it" ? aw() : e === "jp" ? iw() : e === "pl" ? ow() : e === "ru" ? sw() : e === "uk" ? cw() : uw()
  },
  dw = () => "Failed to load WebAssembly module. Try to use another browser.",
  _w = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  fw = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  hw = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  pw = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  mw = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  gw = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  ww = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  yw = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  vw = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  bw = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Ew = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Tw = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? dw() : e === "pt" ? _w() : e === "ch" ? fw() : e === "de" ? hw() : e === "es" ? pw() : e === "fr" ? mw() : e === "it" ? gw() : e === "jp" ? ww() : e === "pl" ? yw() : e === "ru" ? vw() : e === "uk" ? bw() : Ew()
  },
  Sw = () => "You already have this item. Please refresh the page.",
  Ow = () => "Você já possui este item. Atualize a página.",
  Iw = () => "你已经拥有此物品。请刷新页面。",
  kw = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Aw = () => "Ya tienes este ítem. Actualiza la página.",
  Nw = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Rw = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  xw = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Dw = () => "Masz już ten przedmiot. Odśwież stronę.",
  Pw = () => "У вас уже есть этот предмет. Обновите страницу.",
  Lw = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Mw = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  En = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Sw() : e === "pt" ? Ow() : e === "ch" ? Iw() : e === "de" ? kw() : e === "es" ? Aw() : e === "fr" ? Nw() : e === "it" ? Rw() : e === "jp" ? xw() : e === "pl" ? Dw() : e === "ru" ? Pw() : e === "uk" ? Lw() : Mw()
  },
  Uw = () => "You are already in an alliance",
  Cw = () => "Você já está em uma aliança",
  jw = () => "你已经在一个联盟中",
  Bw = () => "Du bist bereits in einer Allianz",
  Fw = () => "Ya estás en una alianza",
  zw = () => "Vous êtes déjà dans une alliance",
  Vw = () => "Sei già in un'alleanza",
  Gw = () => "すでにアライアンスに所属しています。",
  Ww = () => "Jesteś już w sojuszu",
  qw = () => "Вы уже состоите в альянсе",
  Kw = () => "Ви вже перебуваєте в альянсі",
  Yw = () => "Bạn đã ở trong một liên minh",
  Hw = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Uw() : e === "pt" ? Cw() : e === "ch" ? jw() : e === "de" ? Bw() : e === "es" ? Fw() : e === "fr" ? zw() : e === "it" ? Vw() : e === "jp" ? Gw() : e === "pl" ? Ww() : e === "ru" ? qw() : e === "uk" ? Kw() : Yw()
  },
  $w = () => "You are not allowed to do this",
  Zw = () => "Você não tem permissão para fazer isso",
  Jw = () => "你无权执行此操作",
  Xw = () => "Du bist dazu nicht berechtigt",
  Qw = () => "No tienes permiso para hacer esto",
  ey = () => "Vous n’êtes pas autorisé à faire cela",
  ty = () => "Non hai il permesso di farlo",
  ny = () => "この操作を行う権限がありません。",
  ry = () => "Nie masz uprawnień, aby to zrobić",
  ay = () => "У вас нет прав для этого действия",
  iy = () => "Ви не маєте права це робити",
  oy = () => "Bạn không có quyền làm việc này",
  _e = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? $w() : e === "pt" ? Zw() : e === "ch" ? Jw() : e === "de" ? Xw() : e === "es" ? Qw() : e === "fr" ? ey() : e === "it" ? ty() : e === "jp" ? ny() : e === "pl" ? ry() : e === "ru" ? ay() : e === "uk" ? iy() : oy()
  },
  sy = () => "You do not have enough Droplets to buy this item.",
  cy = () => "Você não tem gotas suficientes para comprar este item.",
  uy = () => "你的水滴不足，无法购买此物品。",
  ly = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  dy = () => "No tienes suficientes gotas para comprar este ítem.",
  _y = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  fy = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  hy = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  py = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  my = () => "У вас недостаточно droplets для покупки этого предмета.",
  gy = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  wy = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  Tn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? sy() : e === "pt" ? cy() : e === "ch" ? uy() : e === "de" ? ly() : e === "es" ? dy() : e === "fr" ? _y() : e === "it" ? fy() : e === "jp" ? hy() : e === "pl" ? py() : e === "ru" ? my() : e === "uk" ? gy() : wy()
  },
  yy = () => "You need to be logged in to paint",
  vy = () => "Você precisa estar conectado para pintar",
  by = () => "你需要登录才能进行绘制",
  Ey = () => "Du musst eingeloggt sein, um zu malen",
  Ty = () => "Debes iniciar sesión para pintar",
  Sy = () => "Vous devez être connecté pour peindre",
  Oy = () => "Devi avere effettuato l'accesso per dipingere",
  Iy = () => "ペイントするにはログインが必要です。",
  ky = () => "Musisz być zalogowany, aby malować",
  Ay = () => "Чтобы рисовать, нужно войти в аккаунт",
  Ny = () => "Щоб малювати, необхідно увійти в акаунт",
  Ry = () => "Bạn cần đăng nhập để tô",
  Sn = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? yy() : e === "pt" ? vy() : e === "ch" ? by() : e === "de" ? Ey() : e === "es" ? Ty() : e === "fr" ? Sy() : e === "it" ? Oy() : e === "jp" ? Iy() : e === "pl" ? ky() : e === "ru" ? Ay() : e === "uk" ? Ny() : Ry()
  },
  xy = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Dy = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Py = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Ly = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  My = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Uy = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Cy = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  jy = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  By = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Fy = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  zy = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Vy = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Gy = (n = {}, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? xy() : e === "pt" ? Dy() : e === "ch" ? Py() : e === "de" ? Ly() : e === "es" ? My() : e === "fr" ? Uy() : e === "it" ? Cy() : e === "jp" ? jy() : e === "pl" ? By() : e === "ru" ? Fy() : e === "uk" ? zy() : Vy()
  },
  Wy = n => `Your account has been suspended out until ${n.until}`,
  qy = n => `A sua conta está suspensa até ${n.until}`,
  Ky = n => `你的账号已被暂停至 ${n.until}`,
  Yy = n => `Dein Konto ist gesperrt bis ${n.until}`,
  Hy = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  $y = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  Zy = n => `Il tuo account è sospeso fino al ${n.until}`,
  Jy = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  Xy = n => `Twoje konto zostało zawieszone do ${n.until}`,
  Qy = n => `Ваш аккаунт заблокирован до ${n.until}`,
  ev = n => `Ваш акаунт призупинено до ${n.until}`,
  tv = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  On = (n, t = {}) => {
    const e = t.locale ?? m();
    return e === "en" ? Wy(n) : e === "pt" ? qy(n) : e === "ch" ? Ky(n) : e === "de" ? Yy(n) : e === "es" ? Hy(n) : e === "fr" ? $y(n) : e === "it" ? Zy(n) : e === "jp" ? Jy(n) : e === "pl" ? Xy(n) : e === "ru" ? Qy(n) : e === "uk" ? ev(n) : tv(n)
  },
  pe = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function bE(n) {
  const t = Math.floor(n / pe.hour);
  n -= t * pe.hour;
  const e = Math.floor(n / pe.minute);
  n -= e * pe.minute;
  const a = Math.floor(n / pe.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function EE(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    a = String(n.getHours()).padStart(2, "0"),
    i = String(n.getMinutes()).padStart(2, "0"),
    o = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${a}:${i}:${o}`
}
const TE = {
    griefing: il(),
    "multi-accounting": Zf(),
    "hate-speech": xl(),
    bot: Wi(),
    doxxing: uc(),
    "inappropriate-content": rd(),
    other: go()
  },
  SE = {
    doxxing: Ec(),
    "hate-speech": Wl(),
    griefing: wl(),
    "multi-accounting": uh(),
    bot: ro(),
    "inappropriate-content": md(),
    other: Ro()
  },
  OE = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  In = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  IE = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  nv = 365 * pe.day;

function nr(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function kE(n, t = Date.now()) {
  const e = nr(n);
  return e === null ? !1 : e - t >= nv
}

function AE(n, t = Date.now()) {
  const e = nr(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    a = Math.floor(r / 1440),
    i = Math.floor(r % 1440 / 60),
    o = r % 60;
  return {
    days: a,
    hours: i,
    minutes: o
  }
}
const rv = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function NE() {
  return av() ? !1 : rv.test(navigator.userAgent)
}

function av() {
  return !!(window != null && window.ReactNativeWebView)
}

function iv() {
  const n = navigator.userAgent,
    t = navigator.vendor ?? "";
  return "brave" in navigator ? "Brave" : /\bEdg(?:e|A|iOS)?\//.test(n) ? "Edge" : /\bOPR\/|\bOpera\//.test(n) ? "Opera" : /\bVivaldi\//.test(n) ? "Vivaldi" : /\bYaBrowser\//.test(n) ? "Yandex" : /\bSamsungBrowser\//.test(n) ? "Samsung Internet" : /\bUCBrowser\/|\bUCWEB\//.test(n) ? "UC Browser" : /\bDuckDuckGo\//.test(n) ? "DuckDuckGo" : getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title") ? "Arc" : /Firefox\/|FxiOS\//.test(n) ? "Firefox" : /Chrome\/|CriOS\//.test(n) && /google/i.test(t) ? "Chrome" : /Safari\//.test(n) && /apple/i.test(t) ? "Safari" : "Unknown"
}
var Ut = function() {
  return Ut = Object.assign || function(t) {
    for (var e, r = 1, a = arguments.length; r < a; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
    }
    return t
  }, Ut.apply(this, arguments)
};

function Q(n, t, e, r) {
  function a(i) {
    return i instanceof e ? i : new e(function(o) {
      o(i)
    })
  }
  return new(e || (e = Promise))(function(i, o) {
    function s(_) {
      try {
        l(r.next(_))
      } catch (d) {
        o(d)
      }
    }

    function u(_) {
      try {
        l(r.throw(_))
      } catch (d) {
        o(d)
      }
    }

    function l(_) {
      _.done ? i(_.value) : a(_.value).then(s, u)
    }
    l((r = r.apply(n, t || [])).next())
  })
}

function ee(n, t) {
  var e = {
      label: 0,
      sent: function() {
        if (i[0] & 1) throw i[1];
        return i[1]
      },
      trys: [],
      ops: []
    },
    r, a, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this
  }), o;

  function s(l) {
    return function(_) {
      return u([l, _])
    }
  }

  function u(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (e = 0)), e;) try {
      if (r = 1, a && (i = l[0] & 2 ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i;
      switch (a = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return e.label++, {
            value: l[1],
            done: !1
          };
        case 5:
          e.label++, a = l[1], l = [0];
          continue;
        case 7:
          l = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            e = 0;
            continue
          }
          if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
            e.label = l[1];
            break
          }
          if (l[0] === 6 && e.label < i[1]) {
            e.label = i[1], i = l;
            break
          }
          if (i && e.label < i[2]) {
            e.label = i[2], e.ops.push(l);
            break
          }
          i[2] && e.ops.pop(), e.trys.pop();
          continue
      }
      l = t.call(n, e)
    } catch (_) {
      l = [6, _], a = 0
    } finally {
      r = i = 0
    }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: !0
    }
  }
}

function rr(n, t, e) {
  if (e || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return n.concat(i || Array.prototype.slice.call(t))
}
var ar = "4.6.2";

function yt(n, t) {
  return new Promise(function(e) {
    return setTimeout(e, n, t)
  })
}

function ov() {
  return new Promise(function(n) {
    var t = new MessageChannel;
    t.port1.onmessage = function() {
      return n()
    }, t.port2.postMessage(null)
  })
}

function sv(n, t) {
  t === void 0 && (t = 1 / 0);
  var e = window.requestIdleCallback;
  return e ? new Promise(function(r) {
    return e.call(window, function() {
      return r()
    }, {
      timeout: t
    })
  }) : yt(Math.min(n, t))
}

function ir(n) {
  return !!n && typeof n.then == "function"
}

function kn(n, t) {
  try {
    var e = n();
    ir(e) ? e.then(function(r) {
      return t(!0, r)
    }, function(r) {
      return t(!1, r)
    }) : t(!0, e)
  } catch (r) {
    t(!1, r)
  }
}

function An(n, t, e) {
  return e === void 0 && (e = 16), Q(this, void 0, void 0, function() {
    var r, a, i, o;
    return ee(this, function(s) {
      switch (s.label) {
        case 0:
          r = Array(n.length), a = Date.now(), i = 0, s.label = 1;
        case 1:
          return i < n.length ? (r[i] = t(n[i], i), o = Date.now(), o >= a + e ? (a = o, [4, ov()]) : [3, 3]) : [3, 4];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return ++i, [3, 1];
        case 4:
          return [2, r]
      }
    })
  })
}

function Ce(n) {
  return n.then(void 0, function() {}), n
}

function cv(n, t) {
  for (var e = 0, r = n.length; e < r; ++e)
    if (n[e] === t) return !0;
  return !1
}

function uv(n, t) {
  return !cv(n, t)
}

function $t(n) {
  return parseInt(n)
}

function J(n) {
  return parseFloat(n)
}

function re(n, t) {
  return typeof n == "number" && isNaN(n) ? t : n
}

function W(n) {
  return n.reduce(function(t, e) {
    return t + (e ? 1 : 0)
  }, 0)
}

function or(n, t) {
  if (t === void 0 && (t = 1), Math.abs(t) >= 1) return Math.round(n / t) * t;
  var e = 1 / t;
  return Math.round(n * e) / e
}

function lv(n) {
  for (var t, e, r = "Unexpected syntax '".concat(n, "'"), a = /^\s*([a-z-]*)(.*)$/i.exec(n), i = a[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, u = function(p, y) {
      o[p] = o[p] || [], o[p].push(y)
    };;) {
    var l = s.exec(a[2]);
    if (!l) break;
    var _ = l[0];
    switch (_[0]) {
      case ".":
        u("class", _.slice(1));
        break;
      case "#":
        u("id", _.slice(1));
        break;
      case "[": {
        var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(_);
        if (d) u(d[1], (e = (t = d[4]) !== null && t !== void 0 ? t : d[5]) !== null && e !== void 0 ? e : "");
        else throw new Error(r);
        break
      }
      default:
        throw new Error(r)
    }
  }
  return [i, o]
}

function dv(n) {
  for (var t = new Uint8Array(n.length), e = 0; e < n.length; e++) {
    var r = n.charCodeAt(e);
    if (r > 127) return new TextEncoder().encode(n);
    t[e] = r
  }
  return t
}

function se(n, t) {
  var e = n[0] >>> 16,
    r = n[0] & 65535,
    a = n[1] >>> 16,
    i = n[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    u = t[1] >>> 16,
    l = t[1] & 65535,
    _ = 0,
    d = 0,
    p = 0,
    y = 0;
  y += i + l, p += y >>> 16, y &= 65535, p += a + u, d += p >>> 16, p &= 65535, d += r + s, _ += d >>> 16, d &= 65535, _ += e + o, _ &= 65535, n[0] = _ << 16 | d, n[1] = p << 16 | y
}

function H(n, t) {
  var e = n[0] >>> 16,
    r = n[0] & 65535,
    a = n[1] >>> 16,
    i = n[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    u = t[1] >>> 16,
    l = t[1] & 65535,
    _ = 0,
    d = 0,
    p = 0,
    y = 0;
  y += i * l, p += y >>> 16, y &= 65535, p += a * l, d += p >>> 16, p &= 65535, p += i * u, d += p >>> 16, p &= 65535, d += r * l, _ += d >>> 16, d &= 65535, d += a * u, _ += d >>> 16, d &= 65535, d += i * s, _ += d >>> 16, d &= 65535, _ += e * l + r * u + a * s + i * o, _ &= 65535, n[0] = _ << 16 | d, n[1] = p << 16 | y
}

function Ee(n, t) {
  var e = n[0];
  t %= 64, t === 32 ? (n[0] = n[1], n[1] = e) : t < 32 ? (n[0] = e << t | n[1] >>> 32 - t, n[1] = n[1] << t | e >>> 32 - t) : (t -= 32, n[0] = n[1] << t | e >>> 32 - t, n[1] = e << t | n[1] >>> 32 - t)
}

function K(n, t) {
  t %= 64, t !== 0 && (t < 32 ? (n[0] = n[1] >>> 32 - t, n[1] = n[1] << t) : (n[0] = n[1] << t - 32, n[1] = 0))
}

function M(n, t) {
  n[0] ^= t[0], n[1] ^= t[1]
}
var _v = [4283543511, 3981806797],
  fv = [3301882366, 444984403];

function Nn(n) {
  var t = [0, n[0] >>> 1];
  M(n, t), H(n, _v), t[1] = n[0] >>> 1, M(n, t), H(n, fv), t[1] = n[0] >>> 1, M(n, t)
}
var _t = [2277735313, 289559509],
  ft = [1291169091, 658871167],
  Rn = [0, 5],
  hv = [0, 1390208809],
  pv = [0, 944331445];

function mv(n, t) {
  var e = dv(n);
  t = t || 0;
  var r = [0, e.length],
    a = r[1] % 16,
    i = r[1] - a,
    o = [0, t],
    s = [0, t],
    u = [0, 0],
    l = [0, 0],
    _;
  for (_ = 0; _ < i; _ = _ + 16) u[0] = e[_ + 4] | e[_ + 5] << 8 | e[_ + 6] << 16 | e[_ + 7] << 24, u[1] = e[_] | e[_ + 1] << 8 | e[_ + 2] << 16 | e[_ + 3] << 24, l[0] = e[_ + 12] | e[_ + 13] << 8 | e[_ + 14] << 16 | e[_ + 15] << 24, l[1] = e[_ + 8] | e[_ + 9] << 8 | e[_ + 10] << 16 | e[_ + 11] << 24, H(u, _t), Ee(u, 31), H(u, ft), M(o, u), Ee(o, 27), se(o, s), H(o, Rn), se(o, hv), H(l, ft), Ee(l, 33), H(l, _t), M(s, l), Ee(s, 31), se(s, o), H(s, Rn), se(s, pv);
  u[0] = 0, u[1] = 0, l[0] = 0, l[1] = 0;
  var d = [0, 0];
  switch (a) {
    case 15:
      d[1] = e[_ + 14], K(d, 48), M(l, d);
    case 14:
      d[1] = e[_ + 13], K(d, 40), M(l, d);
    case 13:
      d[1] = e[_ + 12], K(d, 32), M(l, d);
    case 12:
      d[1] = e[_ + 11], K(d, 24), M(l, d);
    case 11:
      d[1] = e[_ + 10], K(d, 16), M(l, d);
    case 10:
      d[1] = e[_ + 9], K(d, 8), M(l, d);
    case 9:
      d[1] = e[_ + 8], M(l, d), H(l, ft), Ee(l, 33), H(l, _t), M(s, l);
    case 8:
      d[1] = e[_ + 7], K(d, 56), M(u, d);
    case 7:
      d[1] = e[_ + 6], K(d, 48), M(u, d);
    case 6:
      d[1] = e[_ + 5], K(d, 40), M(u, d);
    case 5:
      d[1] = e[_ + 4], K(d, 32), M(u, d);
    case 4:
      d[1] = e[_ + 3], K(d, 24), M(u, d);
    case 3:
      d[1] = e[_ + 2], K(d, 16), M(u, d);
    case 2:
      d[1] = e[_ + 1], K(d, 8), M(u, d);
    case 1:
      d[1] = e[_], M(u, d), H(u, _t), Ee(u, 31), H(u, ft), M(o, u)
  }
  return M(o, r), M(s, r), se(o, s), se(s, o), Nn(o), Nn(s), se(o, s), se(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function gv(n) {
  var t;
  return Ut({
    name: n.name,
    message: n.message,
    stack: (t = n.stack) === null || t === void 0 ? void 0 : t.split(`
`)
  }, n)
}

function wv(n) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
}

function yv(n) {
  return typeof n != "function"
}

function vv(n, t) {
  var e = Ce(new Promise(function(r) {
    var a = Date.now();
    kn(n.bind(null, t), function() {
      for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
      var s = Date.now() - a;
      if (!i[0]) return r(function() {
        return {
          error: i[1],
          duration: s
        }
      });
      var u = i[1];
      if (yv(u)) return r(function() {
        return {
          value: u,
          duration: s
        }
      });
      r(function() {
        return new Promise(function(l) {
          var _ = Date.now();
          kn(u, function() {
            for (var d = [], p = 0; p < arguments.length; p++) d[p] = arguments[p];
            var y = s + Date.now() - _;
            if (!d[0]) return l({
              error: d[1],
              duration: y
            });
            l({
              value: d[1],
              duration: y
            })
          })
        })
      })
    })
  }));
  return function() {
    return e.then(function(a) {
      return a()
    })
  }
}

function bv(n, t, e, r) {
  var a = Object.keys(n).filter(function(o) {
      return uv(e, o)
    }),
    i = Ce(An(a, function(o) {
      return vv(n[o], t)
    }, r));
  return function() {
    return Q(this, void 0, void 0, function() {
      var s, u, l, _, d;
      return ee(this, function(p) {
        switch (p.label) {
          case 0:
            return [4, i];
          case 1:
            return s = p.sent(), [4, An(s, function(y) {
              return Ce(y())
            }, r)];
          case 2:
            return u = p.sent(), [4, Promise.all(u)];
          case 3:
            for (l = p.sent(), _ = {}, d = 0; d < a.length; ++d) _[a[d]] = l[d];
            return [2, _]
        }
      })
    })
  }
}

function sr() {
  var n = window,
    t = navigator;
  return W(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function Ev() {
  var n = window,
    t = navigator;
  return W(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !sr()
}

function ut() {
  var n = window,
    t = navigator;
  return W(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
}

function X() {
  var n = window,
    t = navigator;
  return W(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, t.vendor.indexOf("Apple") === 0, "RGBColor" in n, "WebKitMediaKeys" in n]) >= 4
}

function Zt() {
  var n = window,
    t = n.HTMLElement,
    e = n.Document;
  return W(["safari" in n, !("ongestureend" in n), !("TouchEvent" in n), !("orientation" in n), t && !("autocapitalize" in t.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function lt() {
  var n = window;
  return wv(n.print) && String(n.browser) === "[object WebPageNamespace]"
}

function cr() {
  var n, t, e = window;
  return W(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function Tv() {
  var n = window;
  return W([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Sv() {
  var n = window,
    t = n.URLPattern;
  return W(["union" in Set.prototype, "Iterator" in n, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function Ov() {
  var n = window;
  return W(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
}

function dt() {
  var n = window,
    t = navigator,
    e = n.CSS,
    r = n.HTMLButtonElement;
  return W([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function Iv() {
  if (navigator.platform === "iPad") return !0;
  var n = screen,
    t = n.width / n.height;
  return W(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function kv() {
  var n = document;
  return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
}

function Av() {
  var n = document;
  return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
}

function Jt() {
  var n = ut(),
    t = cr(),
    e = window,
    r = navigator,
    a = "connection";
  return n ? W([!("SharedWorker" in e), r[a] && "ontypechange" in r[a], !("sinkId" in new Audio)]) >= 2 : t ? W(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Nv() {
  var n = navigator,
    t = window,
    e = Audio.prototype,
    r = t.visualViewport;
  return W(["srLatency" in e, "srChannelCount" in e, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function Rv() {
  return Pv() ? -4 : xv()
}

function xv() {
  var n = window,
    t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
  if (!t) return -2;
  if (Dv()) return -1;
  var e = 4500,
    r = 5e3,
    a = new t(1, r, 44100),
    i = a.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  var o = a.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, i.connect(o), o.connect(a.destination), i.start(0);
  var s = Lv(a),
    u = s[0],
    l = s[1],
    _ = Ce(u.then(function(d) {
      return Mv(d.getChannelData(0).subarray(e))
    }, function(d) {
      if (d.name === "timeout" || d.name === "suspended") return -3;
      throw d
    }));
  return function() {
    return l(), _
  }
}

function Dv() {
  return X() && !Zt() && !Ov()
}

function Pv() {
  return X() && dt() && lt() || ut() && Nv() && Sv()
}

function Lv(n) {
  var t = 3,
    e = 500,
    r = 500,
    a = 5e3,
    i = function() {},
    o = new Promise(function(s, u) {
      var l = !1,
        _ = 0,
        d = 0;
      n.oncomplete = function(b) {
        return s(b.renderedBuffer)
      };
      var p = function() {
          setTimeout(function() {
            return u(xn("timeout"))
          }, Math.min(r, d + a - Date.now()))
        },
        y = function() {
          try {
            var b = n.startRendering();
            switch (ir(b) && Ce(b), n.state) {
              case "running":
                d = Date.now(), l && p();
                break;
              case "suspended":
                document.hidden || _++, l && _ >= t ? u(xn("suspended")) : setTimeout(y, e);
                break
            }
          } catch (g) {
            u(g)
          }
        };
      y(), i = function() {
        l || (l = !0, d > 0 && p())
      }
    });
  return [o, i]
}

function Mv(n) {
  for (var t = 0, e = 0; e < n.length; ++e) t += Math.abs(n[e]);
  return t
}

function xn(n) {
  var t = new Error(n);
  return t.name = n, t
}

function ur(n, t, e) {
  var r, a, i;
  return e === void 0 && (e = 50), Q(this, void 0, void 0, function() {
    var o, s;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          o = document, u.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, yt(e)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          s = o.createElement("iframe"), u.label = 4;
        case 4:
          return u.trys.push([4, , 10, 11]), [4, new Promise(function(l, _) {
            var d = !1,
              p = function() {
                d = !0, l()
              },
              y = function(T) {
                d = !0, _(T)
              };
            s.onload = p, s.onerror = y;
            var b = s.style;
            b.setProperty("display", "block", "important"), b.position = "absolute", b.top = "0", b.left = "0", b.visibility = "hidden", t && "srcdoc" in s ? s.srcdoc = t : s.src = "about:blank", o.body.appendChild(s);
            var g = function() {
              var T, O;
              d || (((O = (T = s.contentWindow) === null || T === void 0 ? void 0 : T.document) === null || O === void 0 ? void 0 : O.readyState) === "complete" ? p() : setTimeout(g, 10))
            };
            g()
          })];
        case 5:
          u.sent(), u.label = 6;
        case 6:
          return !((a = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || a === void 0) && a.body ? [3, 8] : [4, yt(e)];
        case 7:
          return u.sent(), [3, 6];
        case 8:
          return [4, n(s, s.contentWindow)];
        case 9:
          return [2, u.sent()];
        case 10:
          return (i = s.parentNode) === null || i === void 0 || i.removeChild(s), [7];
        case 11:
          return [2]
      }
    })
  })
}

function Uv(n) {
  for (var t = lv(n), e = t[0], r = t[1], a = document.createElement(e ?? "div"), i = 0, o = Object.keys(r); i < o.length; i++) {
    var s = o[i],
      u = r[s].join(" ");
    s === "style" ? Cv(a.style, u) : a.setAttribute(s, u)
  }
  return a
}

function Cv(n, t) {
  for (var e = 0, r = t.split(";"); e < r.length; e++) {
    var a = r[e],
      i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
    if (i) {
      var o = i[1],
        s = i[2],
        u = i[4];
      n.setProperty(o, s, u || "")
    }
  }
}

function jv() {
  for (var n = window;;) {
    var t = n.parent;
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
var Bv = "mmMwWLliI0O&1",
  Fv = "48px",
  Te = ["monospace", "sans-serif", "serif"],
  Dn = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function zv() {
  var n = this;
  return ur(function(t, e) {
    var r = e.document;
    return Q(n, void 0, void 0, function() {
      var a, i, o, s, u, l, _, d, p, y, b, g;
      return ee(this, function(T) {
        for (a = r.body, a.style.fontSize = Fv, i = r.createElement("div"), i.style.setProperty("visibility", "hidden", "important"), o = {}, s = {}, u = function(O) {
            var R = r.createElement("span"),
              j = R.style;
            return j.position = "absolute", j.top = "0", j.left = "0", j.fontFamily = O, R.textContent = Bv, i.appendChild(R), R
          }, l = function(O, R) {
            return u("'".concat(O, "',").concat(R))
          }, _ = function() {
            return Te.map(u)
          }, d = function() {
            for (var O = {}, R = function(w) {
                O[w] = Te.map(function(S) {
                  return l(w, S)
                })
              }, j = 0, B = Dn; j < B.length; j++) {
              var Y = B[j];
              R(Y)
            }
            return O
          }, p = function(O) {
            return Te.some(function(R, j) {
              return O[j].offsetWidth !== o[R] || O[j].offsetHeight !== s[R]
            })
          }, y = _(), b = d(), a.appendChild(i), g = 0; g < Te.length; g++) o[Te[g]] = y[g].offsetWidth, s[Te[g]] = y[g].offsetHeight;
        return [2, Dn.filter(function(O) {
          return p(b[O])
        })]
      })
    })
  })
}

function Vv() {
  var n = navigator.plugins;
  if (n) {
    for (var t = [], e = 0; e < n.length; ++e) {
      var r = n[e];
      if (r) {
        for (var a = [], i = 0; i < r.length; ++i) {
          var o = r[i];
          a.push({
            type: o.type,
            suffixes: o.suffixes
          })
        }
        t.push({
          name: r.name,
          description: r.description,
          mimeTypes: a
        })
      }
    }
    return t
  }
}

function Gv() {
  return Wv(Jv())
}

function Wv(n) {
  var t, e = !1,
    r, a, i = qv(),
    o = i[0],
    s = i[1];
  return Kv(o, s) ? (e = Yv(s), n ? r = a = "skipped" : (t = Hv(o, s), r = t[0], a = t[1])) : r = a = "unsupported", {
    winding: e,
    geometry: r,
    text: a
  }
}

function qv() {
  var n = document.createElement("canvas");
  return n.width = 1, n.height = 1, [n, n.getContext("2d")]
}

function Kv(n, t) {
  return !!(t && n.toDataURL)
}

function Yv(n) {
  return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
}

function Hv(n, t) {
  $v(n, t);
  var e = Nt(n),
    r = Nt(n);
  if (e !== r) return ["unstable", "unstable"];
  Zv(n, t);
  var a = Nt(n);
  return [a, e]
}

function $v(n, t) {
  n.width = 240, n.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var e = "Cwm fjordbank gly ".concat("😃");
  t.fillText(e, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(e, 4, 45)
}

function Zv(n, t) {
  n.width = 122, n.height = 110, t.globalCompositeOperation = "multiply";
  for (var e = 0, r = [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]; e < r.length; e++) {
    var a = r[e],
      i = a[0],
      o = a[1],
      s = a[2];
    t.fillStyle = i, t.beginPath(), t.arc(o, s, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill()
  }
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function Nt(n) {
  return n.toDataURL()
}

function Jv() {
  return X() && dt() && lt()
}

function Xv() {
  var n = navigator,
    t = 0,
    e;
  n.maxTouchPoints !== void 0 ? t = $t(n.maxTouchPoints) : n.msMaxTouchPoints !== void 0 && (t = n.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), e = !0
  } catch {
    e = !1
  }
  var r = "ontouchstart" in window;
  return {
    maxTouchPoints: t,
    touchEvent: e,
    touchStart: r
  }
}

function Qv() {
  return navigator.oscpu
}

function eb() {
  var n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) ut() && Tv() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    var r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function tb() {
  return window.screen.colorDepth
}

function nb() {
  return re(J(navigator.deviceMemory), void 0)
}

function rb() {
  if (!(X() && dt() && lt())) return ab()
}

function ab() {
  var n = screen,
    t = function(r) {
      return re($t(r), null)
    },
    e = [t(n.width), t(n.height)];
  return e.sort().reverse(), e
}
var ib = 2500,
  ob = 10,
  pt, Rt;

function sb() {
  if (Rt === void 0) {
    var n = function() {
      var t = Ct();
      jt(t) ? Rt = setTimeout(n, ib) : (pt = t, Rt = void 0)
    };
    n()
  }
}

function cb() {
  var n = this;
  return sb(),
    function() {
      return Q(n, void 0, void 0, function() {
        var t;
        return ee(this, function(e) {
          switch (e.label) {
            case 0:
              return t = Ct(), jt(t) ? pt ? [2, rr([], pt, !0)] : kv() ? [4, Av()] : [3, 2] : [3, 2];
            case 1:
              e.sent(), t = Ct(), e.label = 2;
            case 2:
              return jt(t) || (pt = t), [2, t]
          }
        })
      })
    }
}

function ub() {
  var n = this;
  if (X() && dt() && lt()) return function() {
    return Promise.resolve(void 0)
  };
  var t = cb();
  return function() {
    return Q(n, void 0, void 0, function() {
      var e, r;
      return ee(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, t()];
          case 1:
            return e = a.sent(), r = function(i) {
              return i === null ? null : or(i, ob)
            }, [2, [r(e[0]), r(e[1]), r(e[2]), r(e[3])]]
        }
      })
    })
  }
}

function Ct() {
  var n = screen;
  return [re(J(n.availTop), null), re(J(n.width) - J(n.availWidth) - re(J(n.availLeft), 0), null), re(J(n.height) - J(n.availHeight) - re(J(n.availTop), 0), null), re(J(n.availLeft), null)]
}

function jt(n) {
  for (var t = 0; t < 4; ++t)
    if (n[t]) return !1;
  return !0
}

function lb() {
  return re($t(navigator.hardwareConcurrency), void 0)
}

function db() {
  var n, t = (n = window.Intl) === null || n === void 0 ? void 0 : n.DateTimeFormat;
  if (t) {
    var e = new t().resolvedOptions().timeZone;
    if (e) return e
  }
  var r = -_b();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r)
}

function _b() {
  var n = new Date().getFullYear();
  return Math.max(J(new Date(n, 0, 1).getTimezoneOffset()), J(new Date(n, 6, 1).getTimezoneOffset()))
}

function fb() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function hb() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function pb() {
  if (!(sr() || Ev())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function mb() {
  return !!window.openDatabase
}

function gb() {
  return navigator.cpuClass
}

function wb() {
  var n = navigator.platform;
  return n === "MacIntel" && X() && !Zt() ? Iv() ? "iPad" : "iPhone" : n
}

function yb() {
  return navigator.vendor || ""
}

function vb() {
  for (var n = [], t = 0, e = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < e.length; t++) {
    var r = e[t],
      a = window[r];
    a && typeof a == "object" && n.push(r)
  }
  return n.sort()
}

function bb() {
  var n = document;
  try {
    n.cookie = "cookietest=1; SameSite=Strict;";
    var t = n.cookie.indexOf("cookietest=") !== -1;
    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function Eb() {
  var n = atob;
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

function Tb(n) {
  var t = n === void 0 ? {} : n,
    e = t.debug;
  return Q(this, void 0, void 0, function() {
    var r, a, i, o, s, u;
    return ee(this, function(l) {
      switch (l.label) {
        case 0:
          return Sb() ? (r = Eb(), a = Object.keys(r), i = (u = []).concat.apply(u, a.map(function(_) {
            return r[_]
          })), [4, Ob(i)]) : [2, void 0];
        case 1:
          return o = l.sent(), e && Ib(r, o), s = a.filter(function(_) {
            var d = r[_],
              p = W(d.map(function(y) {
                return o[y]
              }));
            return p > d.length * .6
          }), s.sort(), [2, s]
      }
    })
  })
}

function Sb() {
  return X() || Jt()
}

function Ob(n) {
  var t;
  return Q(this, void 0, void 0, function() {
    var e, r, a, i, u, o, s, u;
    return ee(this, function(l) {
      switch (l.label) {
        case 0:
          for (e = document, r = e.createElement("div"), a = new Array(n.length), i = {}, Pn(r), u = 0; u < n.length; ++u) o = Uv(n[u]), o.tagName === "DIALOG" && o.show(), s = e.createElement("div"), Pn(s), s.appendChild(o), r.appendChild(s), a[u] = o;
          l.label = 1;
        case 1:
          return e.body ? [3, 3] : [4, yt(50)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          e.body.appendChild(r);
          try {
            for (u = 0; u < n.length; ++u) a[u].offsetParent || (i[n[u]] = !0)
          } finally {
            (t = r.parentNode) === null || t === void 0 || t.removeChild(r)
          }
          return [2, i]
      }
    })
  })
}

function Pn(n) {
  n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
}

function Ib(n, t) {
  for (var e = "DOM blockers debug:\n```", r = 0, a = Object.keys(n); r < a.length; r++) {
    var i = a[r];
    e += `
`.concat(i, ":");
    for (var o = 0, s = n[i]; o < s.length; o++) {
      var u = s[o];
      e += `
  `.concat(t[u] ? "🚫" : "➡️", " ").concat(u)
    }
  }
  console.log("".concat(e, "\n```"))
}

function kb() {
  for (var n = 0, t = ["rec2020", "p3", "srgb"]; n < t.length; n++) {
    var e = t[n];
    if (matchMedia("(color-gamut: ".concat(e, ")")).matches) return e
  }
}

function Ab() {
  if (Ln("inverted")) return !0;
  if (Ln("none")) return !1
}

function Ln(n) {
  return matchMedia("(inverted-colors: ".concat(n, ")")).matches
}

function Nb() {
  if (Mn("active")) return !0;
  if (Mn("none")) return !1
}

function Mn(n) {
  return matchMedia("(forced-colors: ".concat(n, ")")).matches
}
var Rb = 100;

function xb() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var n = 0; n <= Rb; ++n)
      if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
    throw new Error("Too high value")
  }
}

function Db() {
  if (Se("no-preference")) return 0;
  if (Se("high") || Se("more")) return 1;
  if (Se("low") || Se("less")) return -1;
  if (Se("forced")) return 10
}

function Se(n) {
  return matchMedia("(prefers-contrast: ".concat(n, ")")).matches
}

function Pb() {
  if (Un("reduce")) return !0;
  if (Un("no-preference")) return !1
}

function Un(n) {
  return matchMedia("(prefers-reduced-motion: ".concat(n, ")")).matches
}

function Lb() {
  if (Cn("reduce")) return !0;
  if (Cn("no-preference")) return !1
}

function Cn(n) {
  return matchMedia("(prefers-reduced-transparency: ".concat(n, ")")).matches
}

function Mb() {
  if (jn("high")) return !0;
  if (jn("standard")) return !1
}

function jn(n) {
  return matchMedia("(dynamic-range: ".concat(n, ")")).matches
}
var N = Math,
  G = function() {
    return 0
  };

function Ub() {
  var n = N.acos || G,
    t = N.acosh || G,
    e = N.asin || G,
    r = N.asinh || G,
    a = N.atanh || G,
    i = N.atan || G,
    o = N.sin || G,
    s = N.sinh || G,
    u = N.cos || G,
    l = N.cosh || G,
    _ = N.tan || G,
    d = N.tanh || G,
    p = N.exp || G,
    y = N.expm1 || G,
    b = N.log1p || G,
    g = function(E) {
      return N.pow(N.PI, E)
    },
    T = function(E) {
      return N.log(E + N.sqrt(E * E - 1))
    },
    O = function(E) {
      return N.log(E + N.sqrt(E * E + 1))
    },
    R = function(E) {
      return N.log((1 + E) / (1 - E)) / 2
    },
    j = function(E) {
      return N.exp(E) - 1 / N.exp(E) / 2
    },
    B = function(E) {
      return (N.exp(E) + 1 / N.exp(E)) / 2
    },
    Y = function(E) {
      return N.exp(E) - 1
    },
    w = function(E) {
      return (N.exp(2 * E) - 1) / (N.exp(2 * E) + 1)
    },
    S = function(E) {
      return N.log(1 + E)
    };
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: T(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: O(1),
    atanh: a(.5),
    atanhPf: R(.5),
    atan: i(.5),
    sin: o(-1e300),
    sinh: s(1),
    sinhPf: j(1),
    cos: u(10.000000000123),
    cosh: l(1),
    coshPf: B(1),
    tan: _(-1e300),
    tanh: d(1),
    tanhPf: w(1),
    exp: p(1),
    expm1: y(1),
    expm1Pf: Y(1),
    log1p: b(10),
    log1pPf: S(10),
    powPI: g(-100)
  }
}
var Cb = "mmMwWLliI0fiflO&1",
  xt = {
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

function jb() {
  return Bb(function(n, t) {
    for (var e = {}, r = {}, a = 0, i = Object.keys(xt); a < i.length; a++) {
      var o = i[a],
        s = xt[o],
        u = s[0],
        l = u === void 0 ? {} : u,
        _ = s[1],
        d = _ === void 0 ? Cb : _,
        p = n.createElement("span");
      p.textContent = d, p.style.whiteSpace = "nowrap";
      for (var y = 0, b = Object.keys(l); y < b.length; y++) {
        var g = b[y],
          T = l[g];
        T !== void 0 && (p.style[g] = T)
      }
      e[o] = p, t.append(n.createElement("br"), p)
    }
    for (var O = 0, R = Object.keys(xt); O < R.length; O++) {
      var o = R[O];
      r[o] = e[o].getBoundingClientRect().width
    }
    return r
  })
}

function Bb(n, t) {
  return t === void 0 && (t = 4e3), ur(function(e, r) {
    var a = r.document,
      i = a.body,
      o = i.style;
    o.width = "".concat(t, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", ut() ? i.style.zoom = "".concat(1 / r.devicePixelRatio) : X() && (i.style.zoom = "reset");
    var s = a.createElement("div");
    return s.textContent = rr([], Array(t / 20 << 0), !0).map(function() {
      return "word"
    }).join(" "), i.appendChild(s), n(a, i)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Fb() {
  return navigator.pdfViewerEnabled
}

function zb() {
  var n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
}

function Vb() {
  var n = window.ApplePaySession;
  if (typeof(n == null ? void 0 : n.canMakePayments) != "function") return -1;
  if (Gb()) return -3;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (t) {
    return Wb(t)
  }
}
var Gb = jv;

function Wb(n) {
  if (n instanceof Error && n.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
  throw n
}

function qb() {
  var n, t = document.createElement("a"),
    e = (n = t.attributionSourceId) !== null && n !== void 0 ? n : t.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
var lr = -1,
  dr = -2,
  Kb = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Yb = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Hb = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  $b = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  _r = "WEBGL_debug_renderer_info",
  Zb = "WEBGL_polygon_mode";

function Jb(n) {
  var t, e, r, a, i, o, s = n.cache,
    u = fr(s);
  if (!u) return lr;
  if (!pr(u)) return dr;
  var l = hr() ? null : u.getExtension(_r);
  return {
    version: ((t = u.getParameter(u.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((e = u.getParameter(u.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: l ? (r = u.getParameter(l.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((a = u.getParameter(u.RENDERER)) === null || a === void 0 ? void 0 : a.toString()) || "",
    rendererUnmasked: l ? (i = u.getParameter(l.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((o = u.getParameter(u.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  }
}

function Xb(n) {
  var t = n.cache,
    e = fr(t);
  if (!e) return lr;
  if (!pr(e)) return dr;
  var r = e.getSupportedExtensions(),
    a = e.getContextAttributes(),
    i = [],
    o = [],
    s = [],
    u = [],
    l = [];
  if (a)
    for (var _ = 0, d = Object.keys(a); _ < d.length; _++) {
      var p = d[_];
      o.push("".concat(p, "=").concat(a[p]))
    }
  for (var y = Bn(e), b = 0, g = y; b < g.length; b++) {
    var T = g[b],
      O = e[T];
    s.push("".concat(T, "=").concat(O).concat(Kb.has(O) ? "=".concat(e.getParameter(O)) : ""))
  }
  if (r)
    for (var R = 0, j = r; R < j.length; R++) {
      var B = j[R];
      if (!(B === _r && hr() || B === Zb && t0())) {
        var Y = e.getExtension(B);
        if (!Y) {
          i.push(B);
          continue
        }
        for (var w = 0, S = Bn(Y); w < S.length; w++) {
          var T = S[w],
            O = Y[T];
          u.push("".concat(T, "=").concat(O).concat(Yb.has(O) ? "=".concat(e.getParameter(O)) : ""))
        }
      }
    }
  for (var E = 0, Z = Hb; E < Z.length; E++)
    for (var V = Z[E], z = 0, te = $b; z < te.length; z++) {
      var ve = te[z],
        It = Qb(e, V, ve);
      l.push("".concat(V, ".").concat(ve, "=").concat(It.join(",")))
    }
  return u.sort(), s.sort(), {
    contextAttributes: o,
    parameters: s,
    shaderPrecisions: l,
    extensions: r,
    extensionParameters: u,
    unsupportedExtensions: i
  }
}

function fr(n) {
  if (n.webgl) return n.webgl.context;
  var t = document.createElement("canvas"),
    e;
  t.addEventListener("webglCreateContextError", function() {
    return e = void 0
  });
  for (var r = 0, a = ["webgl", "experimental-webgl"]; r < a.length; r++) {
    var i = a[r];
    try {
      e = t.getContext(i)
    } catch {}
    if (e) break
  }
  return n.webgl = {
    context: e
  }, e
}

function Qb(n, t, e) {
  var r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function Bn(n) {
  var t = Object.keys(n.__proto__);
  return t.filter(e0)
}

function e0(n) {
  return typeof n == "string" && !n.match(/[^A-Z0-9_x]/)
}

function hr() {
  return cr()
}

function t0() {
  return ut() || X()
}

function pr(n) {
  return typeof n.getParameter == "function"
}

function n0() {
  var n = Jt() || X();
  if (!n) return -2;
  if (!window.AudioContext) return -1;
  var t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function r0() {
  if (!window.Intl) return -1;
  var n = window.Intl.DateTimeFormat;
  if (!n) return -2;
  var t = n().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}
var a0 = {
  fonts: zv,
  domBlockers: Tb,
  fontPreferences: jb,
  audio: Rv,
  screenFrame: ub,
  canvas: Gv,
  osCpu: Qv,
  languages: eb,
  colorDepth: tb,
  deviceMemory: nb,
  screenResolution: rb,
  hardwareConcurrency: lb,
  timezone: db,
  sessionStorage: fb,
  localStorage: hb,
  indexedDB: pb,
  openDatabase: mb,
  cpuClass: gb,
  platform: wb,
  plugins: Vv,
  touchSupport: Xv,
  vendor: yb,
  vendorFlavors: vb,
  cookiesEnabled: bb,
  colorGamut: kb,
  invertedColors: Ab,
  forcedColors: Nb,
  monochrome: xb,
  contrast: Db,
  reducedMotion: Pb,
  reducedTransparency: Lb,
  hdr: Mb,
  math: Ub,
  pdfViewerEnabled: Fb,
  architecture: zb,
  applePay: Vb,
  privateClickMeasurement: qb,
  audioBaseLatency: n0,
  dateTimeLocale: r0,
  webGlBasics: Jb,
  webGlExtensions: Xb
};

function i0(n) {
  return bv(a0, n, [])
}
var o0 = "$ if upgrade to Pro: https://fpjs.dev/pro";

function s0(n) {
  var t = c0(n),
    e = u0(t);
  return {
    score: t,
    comment: o0.replace(/\$/g, "".concat(e))
  }
}

function c0(n) {
  if (Jt()) return .4;
  if (X()) return Zt() && !(dt() && lt()) ? .5 : .3;
  var t = "value" in n.platform ? n.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function u0(n) {
  return or(.99 + .01 * n, 1e-4)
}

function l0(n) {
  for (var t = "", e = 0, r = Object.keys(n).sort(); e < r.length; e++) {
    var a = r[e],
      i = n[a],
      o = "error" in i ? "error" : JSON.stringify(i.value);
    t += "".concat(t ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
  }
  return t
}

function mr(n) {
  return JSON.stringify(n, function(t, e) {
    return e instanceof Error ? gv(e) : e
  }, 2)
}

function gr(n) {
  return mv(l0(n))
}

function d0(n) {
  var t, e = s0(n);
  return {
    get visitorId() {
      return t === void 0 && (t = gr(this.components)), t
    },
    set visitorId(r) {
      t = r
    },
    confidence: e,
    components: n,
    version: ar
  }
}

function _0(n) {
  return n === void 0 && (n = 50), sv(n, n * 2)
}

function f0(n, t) {
  var e = Date.now();
  return {
    get: function(r) {
      return Q(this, void 0, void 0, function() {
        var a, i, o;
        return ee(this, function(s) {
          switch (s.label) {
            case 0:
              return a = Date.now(), [4, n()];
            case 1:
              return i = s.sent(), o = d0(i), (t || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(a - e, `
visitorId: `).concat(o.visitorId, `
components: `).concat(mr(i), "\n```")), [2, o]
          }
        })
      })
    }
  }
}

function h0() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    var n = new XMLHttpRequest;
    n.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(ar, "/npm-monitoring"), !0), n.send()
  } catch (t) {
    console.error(t)
  }
}

function p0(n) {
  var t;
  return n === void 0 && (n = {}), Q(this, void 0, void 0, function() {
    var e, r, a;
    return ee(this, function(i) {
      switch (i.label) {
        case 0:
          return (!((t = n.monitoring) !== null && t !== void 0) || t) && h0(), e = n.delayFallback, r = n.debug, [4, _0(e)];
        case 1:
          return i.sent(), a = i0({
            cache: {},
            debug: r
          }), [2, f0(a, r)]
      }
    })
  })
}
var wr = {
  load: p0,
  hashComponents: gr,
  componentsToDebugString: mr
};
let Dt = null,
  vt;
async function m0() {
  return Dt || (Dt = wr.load()), Dt
}
async function bt() {
  return vt || g0().then(n => n.visitorId)
}
async function g0() {
  const t = await (await m0()).get();
  let e = t.components;
  const r = iv(),
    a = navigator.userAgent.toLowerCase(),
    i = a.includes("iphone"),
    o = a.includes("macintosh");
  if (i || o) e = t.components;
  else if (r === "Chrome") {
    const {
      languages: u,
      fontPreferences: l,
      ..._
    } = t.components;
    e = _
  } else if (r === "Firefox") {
    const {
      fonts: u,
      languages: l,
      dateTimeLocale: _,
      ...d
    } = t.components;
    e = d
  } else if (r === "Brave") {
    const {
      fonts: u,
      audio: l,
      canvas: _,
      hardwareConcurrency: d,
      plugins: p,
      deviceMemory: y,
      ...b
    } = t.components;
    e = b
  } else {
    const {
      languages: u,
      fontPreferences: l,
      ..._
    } = t.components;
    e = _
  }
  return vt = wr.hashComponents(e), {
    visitorId: vt,
    components: e
  }
}
const w0 = [{
    tileSize: 1e3,
    zoom: 11
  }],
  y0 = 4,
  v0 = 6e3,
  b0 = [{
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
  E0 = {
    needsPhoneVerification: "needs_phone_verification"
  },
  T0 = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {},
    FRAME: {},
    "Custom Name Font": {},
    "Custom Name Style": {}
  },
  S0 = {
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
  O0 = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  I0 = {
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
      ignoreAll: "staff.tickets.ignore_all"
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
        reverse: "staff.tools.select_area.reverse",
        timelapse: "staff.tools.select_area.timelapse"
      },
      selectPixel: {
        timeout: "staff.tools.select_pixel.timeout",
        ban: "staff.tools.select_pixel.ban",
        seeRole: "staff.tools.select_pixel.see_role",
        seePunishment: "staff.tools.select_pixel.see_punishment"
      },
      autoPainter: "staff.tools.auto_painter.paint",
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
  k0 = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  ye = {
    seasons: w0,
    regionSize: y0,
    refreshIntervalMs: v0,
    colors: b0,
    errors: E0,
    items: T0,
    products: S0,
    countries: O0,
    permissions: I0,
    settings: k0
  },
  Bt = ye,
  A0 = ye.seasons,
  yr = ye.seasons.length - 1,
  RE = ye.seasons[yr].zoom,
  xE = ye.seasons[yr].tileSize,
  DE = ye.permissions,
  N0 = ye.settings;

function PE(n) {
  return Bt.countries[n - 1]
}
class h extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Fn(n, t) {
  const e = {};
  for (const r of n) {
    const a = t(r);
    let i = e[a];
    i ? i.push(r) : e[a] = [r]
  }
  return e
}

function LE(n, t) {
  const e = {};
  for (const r of n) {
    const a = t(r);
    e[a] = r
  }
  return e
}
var Ze, Je;
class R0 {
  constructor(t) {
    P(this, Ze, F(!0));
    P(this, Je, F(null));
    this.url = t
  }
  get online() {
    return L(v(this, Ze))
  }
  set online(t) {
    U(v(this, Ze), t, !0)
  }
  get serverTimeOffsetMs() {
    return L(v(this, Je))
  }
  set serverTimeOffsetMs(t) {
    U(v(this, Je), t, !0)
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
    const e = Fn(t, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
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
      a = JSON.stringify(r),
      i = await De.getHeaders(a),
      o = await this.request("/paint", {
        method: "POST",
        body: a,
        headers: i,
        credentials: "include"
      });
    if (o.status !== c.OK) {
      if (o.status === c.UNAUTHORIZED) throw new Error(Sn());
      if (o.status === c.FORBIDDEN) {
        if (o.headers.get("cf-mitigated") === "challenge") throw new Error(gn());
        const s = await o.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const u = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(On({
            until: u.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(vn());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(yn());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(pn());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await fn(s.tier)) return this.paint(t);
            throw new Error(At())
          } else console.error("Challenge required but no tier provided", s);
        Oe.refresh()
      } else throw new Error(f())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, a, i) => `/staff/tools/select-area/clear/s${r}/pixel/${a}/${i}`, e)
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
    if (e.status !== c.OK) throw new h(f(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: a,
      beforeTimestamp: i
    } = e, o = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: a,
        beforeTimestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new h(f(), o.status);
    return o.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: a,
      timestamp: i
    } = e, o = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: a,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new h(f(), o.status);
    return o.json()
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
      const a = await r.json(),
        i = (a == null ? void 0 : a.error) ?? "";
      throw i === "timelapse_too_many_events" ? new h(Nm(), c.BAD_REQUEST) : new h(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status !== c.OK) throw new h(f(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: a,
      timestamp: i
    } = e, o = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: a,
        timestamp: i
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new h(f(), o.status);
    return o.json()
  }
  async sendPaintRequests(t, e, r, a) {
    const i = Fn(t, u => `t=(${u.tile[0]},${u.tile[1]}),s=${u.season}`),
      s = (await Promise.all(Object.values(i).map(async u => {
        const [l, _] = u[0].tile, d = u[0].season, p = {
          colors: u.map(T => T.colorIdx),
          coords: u.flatMap(T => T.pixel),
          csid: r
        }, y = JSON.stringify(p), b = e(d, l, _), g = await De.getHeaders(y);
        return this.request(b, {
          method: "POST",
          body: y,
          headers: g,
          credentials: "include"
        })
      }))).filter(u => u.status !== c.OK);
    if (s.length) {
      const u = s[0];
      if (u.status === c.UNAUTHORIZED) throw new Error(Sn());
      if (u.status === c.FORBIDDEN) {
        if (u.headers.get("cf-mitigated") === "challenge") throw new Error(gn());
        const l = await u.json();
        if ((l == null ? void 0 : l.error) === "timeout") {
          const _ = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(On({
            until: _.toLocaleString()
          }))
        }
        if ((l == null ? void 0 : l.error) === "refresh") throw new Error(vn());
        if ((l == null ? void 0 : l.error) === "color-not-owned") throw new Error(yn());
        if ((l == null ? void 0 : l.error) === "event-pixel-present") throw new Error(pn());
        Oe.refresh()
      } else throw new Error(f())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const a = x0(t),
      i = await D0(a),
      o = new FormData;
    o.append("fingerprint", e), o.append("season", a.season.toString()), o.append("px0", a.offsetX.toString()), o.append("py0", a.offsetY.toString()), o.append("width", a.width.toString()), o.append("height", a.height.toString()), o.append("pixels", t.length.toString()), o.append("bitmap", i, "auto-painter.png"), o.append("userId", r.toString());
    const s = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: o,
      credentials: "include"
    });
    if (s.status === c.FORBIDDEN) throw new Error("Auto painter is restricted to administrators.");
    if (s.status !== c.OK) throw new Error(f());
    return s.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [a, i]
  }) {
    const o = new URLSearchParams;
    o.set("x", String(a)), o.set("y", String(i));
    const s = await this.request(`/s${t}/pixel/${e}/${r}?${o.toString()}`, {
      credentials: "include"
    });
    if (s.status !== c.OK) {
      const u = await s.text();
      throw new Error(vu({
        err: u
      }))
    }
    return s.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [a, i],
    p1: [o, s]
  }) {
    const u = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${a}&y0=${i}&x1=${o}&y1=${s}`, {
      credentials: "include"
    });
    if (u.status !== c.OK) {
      const b = await u.text();
      throw console.error("Error while fetching pixel area info", b), new Error(f())
    }
    const l = await u.arrayBuffer(),
      _ = new DataView(l),
      d = Math.floor(l.byteLength / 5),
      p = new Uint32Array(d),
      y = new Uint8Array(d);
    for (let b = 0; b < d; b++) {
      const g = b * 5;
      p[b] = _.getUint32(g, !0), y[b] = _.getUint8(g + 4)
    }
    return {
      paintedBy: p,
      colors: y
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === c.OK) return await t.json()
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(await t.text());
    return await t.json()
  }
  async refreshPaymentSession(t) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(t)}`, {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
  async getOtpCooldown() {
    const t = await this.request("/anticheat/otp/cooldown", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(f());
    return await t.json()
  }
  async sendOtp(t) {
    const e = await this.request("/anticheat/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: t
      }),
      throwOnStatus: !1
    });
    if (e.status === c.BAD_REQUEST) throw new Error(B_());
    if (e.status === c.CONFLICT) throw new Error(Dp());
    if (e.status === c.FORBIDDEN) throw new Error(Hh());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(bn());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(qp());
    if (e.status === c.LOCKED) throw new Error(Jg());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(X_());
    if (e.status === c.NOT_ACCEPTABLE) throw new Error(lw());
    if (e.status === c.PRECONDITION_FAILED) throw new Error(js());
    if (e.status !== c.OK) throw new Error(f());
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
        "x-fp": await bt()
      }
    });
    if (t.type === "otp") {
      if (r.status === c.GONE) throw new Error(Ku());
      if (r.status === c.BAD_REQUEST) throw new Error(t_());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(bn());
      if (r.status !== c.OK) throw new Error(f())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(Vd());
      if (r.status !== c.OK) throw new Error(f())
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
        a = (r == null ? void 0 : r.error) ?? "";
      if (a === "invalid_name") throw new Error(wn());
      if (a === "invalid_discord") throw new Error(h_());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const i = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(Eh({
          days: i
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== c.OK) throw new Error(f())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === c.BAD_REQUEST) throw new Error(Ig());
    if (e.status !== c.OK) throw new Error(f())
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
    if (e.status === c.FORBIDDEN) throw new Error(sp());
    if (e.status !== c.OK) throw new Error(f())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
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
    if (r.status === c.BAD_REQUEST) throw new Error(Cf());
    if (r.status !== c.OK) throw new Error(f())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== c.OK) throw new Error(de());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== c.OK) throw new Error(de());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(de())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(de())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(de())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(de())
  }
  async getMapHotspots() {
    const t = await this.request("/map/hotspots", {
      credentials: "include"
    });
    return t.status !== 200 ? [] : t.json()
  }
  async getRandomTile(t) {
    const e = await this.request(`/s${t}/tile/random`);
    if (e.status !== c.OK) throw new Error(f());
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(mn()) : e.status === c.FORBIDDEN ? new Error(Tn()) : e.status === c.CONFLICT ? new Error(En()) : new Error(f())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    if (t.status === c.NOT_FOUND) return;
    throw new Error(f())
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
      throw r.error === "max_characters" ? new Error(wi()) : r.error === "name_taken" ? new Error(ii()) : r.error == "empty_name" ? new Error(xi()) : new Error(f())
    } else throw e.status === c.FORBIDDEN ? new Error(Hw()) : new Error(f())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(_e()) : e.status === c.BAD_REQUEST ? new Error(Pu()) : new Error(f())
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
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(_e()) : new Error(f())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(_e()) : new Error(de())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    throw t.status === c.FORBIDDEN ? new Error(_e()) : new Error(f())
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
    throw new Error(f())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(f())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) return;
    if (e.status !== c.OK) throw new h(f(), e.status);
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
    if (r.status !== c.OK) throw new h(f(), r.status);
    const a = await r.json();
    return (Array.isArray(a) ? a : []).map(i => ({
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
    if (e.status !== c.OK) throw new h(f(), e.status);
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
      members: a.map(i => ({
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
      a = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === c.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (a.status !== c.OK) throw new h(f(), a.status);
    const i = await a.json(),
      o = Array.isArray(i == null ? void 0 : i.members) ? i.members : [];
    return {
      members: o.map(s => ({
        id: Number(s == null ? void 0 : s.id),
        name: String((s == null ? void 0 : s.name) ?? `#${s==null?void 0:s.id}`),
        picture: (s == null ? void 0 : s.picture) ?? null,
        pixelsPainted: Number((s == null ? void 0 : s.pixelsPainted) ?? (s == null ? void 0 : s.pixels_painted) ?? 0),
        lastPixelLatitude: (s == null ? void 0 : s.lastPixelLatitude) ?? null,
        lastPixelLongitude: (s == null ? void 0 : s.lastPixelLongitude) ?? null,
        role: (s == null ? void 0 : s.alliance_role) === "admin" || (s == null ? void 0 : s.role) === "admin" ? "admin" : "member"
      })),
      total: Number((i == null ? void 0 : i.total) ?? o.length)
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
      const a = await r.json().catch(() => ({}));
      throw new Error((a == null ? void 0 : a.error) ?? f())
    } else if (r.status !== c.OK) throw new h(f(), r.status)
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
      const a = await r.json();
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(_f()) : new Error(f())
    } else if (r.status !== c.OK) throw new h(f(), r.status)
  }
  async banAllAllianceMembers(t, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new h(f(), a.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const a = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (a.status !== c.OK) throw new h(f(), a.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(_e()) : new Error(f())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(_e()) : new Error(f())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== c.OK) throw new Error(f())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new Error(f());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== c.OK) throw new Error(f())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(_e()) : new Error(f())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(t) {
    const e = await this.request(`/payment/abacatepay/create/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.BAD_REQUEST) {
      const a = await e.json();
      throw new Error(a == null ? void 0 : a.error)
    } else {
      if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Ka());
      if (e.status !== c.OK) throw new Error(f())
    }
    return await e.json()
  }
  async refreshPixPayment(t) {
    const e = await this.request(`/payment/abacatepay/refresh/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.BAD_REQUEST) {
      const r = await e.json();
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== c.OK) throw new Error("Unexpected error on the server. Try again later");
    return e.json()
  }
  async getPixStatus(t) {
    const e = await this.request(`/payment/abacatepay/status/pix/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new Error("Erro inesperado. Tente atualizar a página.");
    return e.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((a, i) => In[a.reason] - In[i.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
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
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, a) {
    const i = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: a
      })
    });
    if (i.status !== c.OK && i.status !== c.BAD_REQUEST) throw new h(f(), i.status)
  }
  async request(t, e) {
    var o;
    let r;
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (s) {
      throw console.error("Fetch error:", s), this.online = !1, new Error(ts(), {
        cause: s
      })
    }
    if (r.status === c.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(fg());
    const a = ((o = r.headers.get("cf-mitigated")) == null ? void 0 : o.toLowerCase()) === "challenge";
    if (r.status === 403 && a) {
      if (De.setCfLikelyAutomated(!0), !await er()) throw new Error(At());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Gy());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(mm());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(Vm())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
    const a = await r.json();
    return {
      items: a.items ?? [],
      globals: a.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
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
    if (r.status !== c.OK) throw new h(f(), r.status);
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
    if (e.status !== c.OK) throw new h(f(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new h(f(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.NOT_FOUND) {
      if (e.status !== c.OK) throw new h(f(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (a.status !== c.OK) throw new h(f(), a.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      a = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== c.OK) throw new h(f(), a.status);
    return a.json()
  }
  async addUserNote(t, e, r) {
    const a = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      i = await this.request(a, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (i.status !== c.OK) throw new h(f(), i.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new h(f(), e.status);
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
    if (r.status !== c.OK) throw new h(f(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.permissions) ? a.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new h(f(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(i => {
      const o = i.is_dollar ?? i.isDollar ?? i.currency ?? i.Currency ?? 0;
      let s;
      if (typeof o == "string") {
        const d = o.toLowerCase();
        s = d === "usd" || d === "dollar" || d === "true"
      } else typeof o == "number" ? s = o !== 0 : s = !!o;
      const u = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
        l = i.product_variant ?? i.productVariant,
        _ = l == null || l === "" ? null : Number(l);
      return {
        product_name: String(i.productName ?? i.product_name ?? ""),
        amount: Number(i.amount ?? 0),
        price: Number(i.price ?? 0),
        is_dollar: s,
        created_at: u,
        product_variant: Number.isInteger(_) ? _ : null
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
    if (r.status !== c.OK) throw new h(f(), r.status)
  }
  async postAdminRenameUser(t, e, r) {
    const a = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: r
      })
    });
    if (a.status === c.BAD_REQUEST) {
      const i = await a.json(),
        o = (i == null ? void 0 : i.error) ?? "";
      throw o === "invalid_name" ? new h(wn(), c.BAD_REQUEST) : new h(typeof o == "string" && o ? o : f(), c.BAD_REQUEST)
    }
    if (a.status !== c.OK) throw new h(f(), a.status)
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
      const a = await r.json(),
        i = (a == null ? void 0 : a.error) ?? "";
      throw i === "email_required" || i === "invalid_email" ? new h(su(), c.BAD_REQUEST) : new h(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const a = await r.json();
      if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
        const o = new h(typeof(a == null ? void 0 : a.userId) == "number" ? Hc({
          userId: a.userId
        }) : Mc(), c.CONFLICT);
        throw typeof(a == null ? void 0 : a.userId) == "number" && (o.userId = a.userId), o
      }
      throw new h(f(), c.CONFLICT)
    }
    if (r.status === c.NOT_FOUND) throw new h("User not found.", c.NOT_FOUND);
    if (r.status !== c.OK) throw new h(f(), r.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), e === "appeals" && r.set("appealId", String(t.appealId));
    const a = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      i = await this.request(a, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== c.OK) throw new h(f(), i.status);
    const o = await i.json(),
      s = Array.isArray(o == null ? void 0 : o.tickets) ? o.tickets : [];
    return s.sort((u, l) => new Date(l.createdAt).getTime() - new Date(u.createdAt).getTime()), s
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize));
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
    const a = await r.json();
    return Array.isArray(a == null ? void 0 : a.appeals) ? a.appeals : []
  }
  async getModerationTranslate(t, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      a = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (a.status !== c.OK) throw new h(f(), a.status);
    const i = await a.json();
    return i == null ? void 0 : i.translation
  }
  mapTicketsToReportRows(t, e) {
    var a, i, o, s, u;
    const r = [];
    for (const l of t) {
      const _ = l.status ?? "open";
      if (e === "received") {
        for (const d of l.reports) r.push({
          id: String(d.id),
          ticketId: String(l.id),
          createdAt: d.createdAt ?? l.createdAt,
          byUser: {
            id: Number(d.reportedBy),
            name: String(d.reportedByName ?? d.reportedBy),
            picture: d.reportedByPicture ?? null
          },
          reason: String(d.reason),
          status: _
        });
        continue
      }
      if (e === "sent") {
        for (const d of l.reports) r.push({
          id: String(d.id),
          ticketId: String(l.id),
          createdAt: d.createdAt ?? l.createdAt,
          toUser: {
            id: Number(l.reportedUser.id),
            name: String(l.reportedUser.name),
            picture: l.reportedUser.picture ?? null
          },
          reason: String(d.reason),
          status: _
        });
        continue
      }
      r.push({
        id: String(l.id),
        ticketId: String(l.id),
        createdAt: l.createdAt,
        handledBy: l.status && l.status !== "open" ? {
          id: ((a = l.handledBy) == null ? void 0 : a.id) ?? 0,
          name: ((i = l.handledBy) == null ? void 0 : i.name) ?? "Moderator",
          picture: ((o = l.handledBy) == null ? void 0 : o.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((u = (s = l.reports) == null ? void 0 : s[0]) == null ? void 0 : u.reason) ?? "other"),
        status: _
      })
    }
    return r.sort((l, _) => new Date(_.createdAt).getTime() - new Date(l.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== c.OK) throw new h(f(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.NO_CONTENT) throw new h(f(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async banUsers(t, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new h(f(), a.status)
  }
  async timeoutUsers(t, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new h(f(), a.status)
  }
  async incrementUsersDroplets(t, e, r) {
    const a = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: r
      })
    });
    if (a.status !== c.OK) throw new h(f(), a.status)
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
    if (r.status !== c.OK) throw new h(f(), r.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
    return r.json()
  }
  async postUsersSuspend(t, e, r) {
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
        body: JSON.stringify(t)
      })).status !== c.OK) throw new Error(f())
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== c.OK) throw new h(f(), e.status);
    return e.json()
  }
  async submitBanAppeal(t) {
    const e = JSON.stringify({
        message: t
      }),
      r = await De.getHeaders(e),
      a = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (a.status === c.FORBIDDEN) {
      const i = await a.json();
      if ((i == null ? void 0 : i.error) === "challenge-required" && i.tier) {
        if (await fn(i.tier)) return this.submitBanAppeal(t);
        throw new h(At(), a.status)
      }
    }
    if (a.status !== c.OK && a.status !== c.ALREADY_REPORTED) throw new h(f(), a.status);
    return a.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
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
    if (r.status !== c.OK) throw new h(f(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
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
    if (t.status !== c.OK) throw new h(f(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const r = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      a = await this.request(r, {
        credentials: "include"
      });
    if (a.status !== c.OK) throw new h(f(), a.status);
    return a.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== c.OK) throw new h(f(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const a = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== c.OK) throw new h(f(), a.status);
    return a.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await bt(),
      a = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": r
        }
      });
    if (!a.ok) throw a.status === 500 ? new h(f(), a.status) : new h(Nd(), a.status);
    return a.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < A0.length,
      a = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= N0.tools.wayback.limit,
      i = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      o = t.cursorTs !== void 0,
      s = t.cursorUserId !== void 0,
      u = t.cursorAllianceId !== void 0,
      l = t.cursorPixelsCount !== void 0,
      _ = o || s || u || l,
      d = o && s && u && l;
    let p = !0;
    return _ && (p = d && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !a || !i || !e || !p)
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
      a = e.toString(),
      i = await this.request(a.length > 0 ? `${r}?${a}` : r, {
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
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) throw new Error(mn());
    if (e.status === c.FORBIDDEN) throw new Error(Tn());
    if (e.status === c.CONFLICT) throw new Error(En());
    if (e.status !== c.OK) throw new Error(f())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== c.OK) throw new h(f(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
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
    if (r.status !== c.OK) throw new h(f(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
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
    if (r.status !== c.OK) throw new h(f(), r.status);
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
    if (r.status !== c.OK) throw new h(f(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new h(f(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === c.OK
  }
}
Ze = new WeakMap, Je = new WeakMap;

function x0(n) {
  var p, y;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const b of n)
    if (b.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (p = Bt.seasons) == null ? void 0 : p[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    o = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const u = n.map(b => {
      const g = Math.round(b.tile[0] * r + b.pixel[0]),
        T = Math.round(b.tile[1] * r + b.pixel[1]);
      return g < a && (a = g), T < i && (i = T), g > o && (o = g), T > s && (s = T), {
        x: g,
        y: T,
        colorIdx: b.colorIdx
      }
    }),
    l = o - a + 1,
    _ = s - i + 1;
  if (!Number.isFinite(l) || !Number.isFinite(_) || l <= 0 || _ <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const d = new Uint8ClampedArray(l * _ * 4);
  for (const {
      x: b,
      y: g,
      colorIdx: T
    }
    of u) {
    const O = (y = Bt.colors) == null ? void 0 : y[T];
    if (!O) throw new Error(`Unknown palette color index: ${T}`);
    const R = b - a,
      B = ((g - i) * l + R) * 4,
      [Y, w, S] = O.rgb;
    d[B] = Y, d[B + 1] = w, d[B + 2] = S, d[B + 3] = T === 0 ? 1 : 255
  }
  return {
    data: d,
    width: l,
    height: _,
    offsetX: a,
    offsetY: i,
    season: t
  }
}
async function D0(n) {
  const t = P0(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((a, i) => {
    t.toBlob(o => {
      if (!o) {
        i(new Error("Failed to encode auto painter bitmap."));
        return
      }
      a(o)
    }, "image/png")
  })
}

function P0(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let le = new R0(Yt);
typeof window < "u" && Ar(() => {
  let n = le.online;
  Nr(() => {
    const t = le.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const ME = n => new URL(n, Yt).toString();

function vr(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function L0(n, t) {
  for (const e of t)
    if (vr(n, e)) return !0;
  return !1
}

function br(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function M0(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class U0 {
  constructor(t) {
    k(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      a = t % 8;
    if (r >= this.bytes.length) {
      const o = new Uint8Array(r + 1),
        s = o.length - this.bytes.length;
      for (let u = 0; u < this.bytes.length; u++) o[u + s] = this.bytes[u];
      this.bytes = o
    }
    const i = this.bytes.length - 1 - r;
    e ? this.bytes[i] = this.bytes[i] | 1 << a : this.bytes[i] = this.bytes[i] & ~(1 << a)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      a = this.bytes.length;
    return e > a ? !1 : (this.bytes[a - 1 - e] & 1 << r) !== 0
  }
}

function UE(n) {
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onload = () => {
      const a = r.result;
      if (!a || typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(a.substring(a.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}

function CE(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${M0(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const a = r.result;
      if (typeof a != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(a)
    }, r.onerror = e, r.readAsDataURL(n)
  })
}

function jE(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    a = e.indexOf(";base64"),
    i = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const o = br(r),
      s = new Uint8Array(o.byteLength);
    return s.set(o), new Blob([s], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function BE(...n) {
  return n.filter(Boolean).join(" ")
}
const C0 = typeof document < "u";
let zn = 0;
var Xe, Qe, et;
class j0 {
  constructor() {
    P(this, Xe, F(gt([])));
    P(this, Qe, F(gt([])));
    P(this, et, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    k(this, "addToast", t => {
      C0 && this.toasts.unshift(t)
    });
    k(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: a
    }) => {
      const i = this.toasts.findIndex(s => s.id === t),
        o = this.toasts[i];
      this.toasts[i] = {
        ...o,
        ...e,
        id: t,
        title: a,
        type: r,
        updated: !0
      }
    });
    k(this, "create", t => {
      var s;
      const {
        message: e,
        ...r
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : zn++, i = t.dismissable === void 0 ? !0 : t.dismissable, o = t.type === void 0 ? "default" : t.type;
      return nn(() => {
        this.toasts.find(l => l.id === a) ? this.updateToast({
          id: a,
          data: t,
          type: o,
          message: e,
          dismissable: i
        }) : this.addToast({
          ...r,
          id: a,
          title: e,
          dismissable: i,
          type: o
        })
      }), a
    });
    k(this, "dismiss", t => (nn(() => {
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
    k(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = v(this, et).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    k(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    k(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    k(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    k(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    k(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    k(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    k(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const a = t instanceof Promise ? t : t();
      let i = r !== void 0;
      return a.then(o => {
        if (typeof o == "object" && o && "ok" in o && typeof o.ok == "boolean" && !o.ok) {
          i = !1;
          const s = B0(o);
          this.create({
            id: r,
            type: "error",
            message: s
          })
        } else if (e.success !== void 0) {
          i = !1;
          const s = typeof e.success == "function" ? e.success(o) : e.success;
          this.create({
            id: r,
            type: "success",
            message: s
          })
        }
      }).catch(o => {
        if (e.error !== void 0) {
          i = !1;
          const s = typeof e.error == "function" ? e.error(o) : e.error;
          this.create({
            id: r,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var o;
        i && (this.dismiss(r), r = void 0), (o = e.finally) == null || o.call(e)
      }), r
    });
    k(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || zn++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    k(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    k(this, "setHeight", t => {
      const e = v(this, et).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    k(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return L(v(this, Xe))
  }
  set toasts(t) {
    U(v(this, Xe), t, !0)
  }
  get heights() {
    return L(v(this, Qe))
  }
  set heights(t) {
    U(v(this, Qe), t, !0)
  }
}
Xe = new WeakMap, Qe = new WeakMap, et = new WeakMap;

function B0(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const $ = new j0;

function F0(n, t) {
  return $.create({
    message: n,
    ...t
  })
}
var St;
class FE {
  constructor() {
    P(this, St, Ne(() => $.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return L(v(this, St))
  }
}
St = new WeakMap;
const z0 = F0,
  V0 = Object.assign(z0, {
    success: $.success,
    info: $.info,
    warning: $.warning,
    error: $.error,
    custom: $.custom,
    message: $.message,
    promise: $.promise,
    dismiss: $.dismiss,
    loading: $.loading,
    getActiveToasts: () => $.toasts.filter(n => !n.dismiss)
  });
var tt, nt, rt, at, it, ot, st, ct;
class G0 {
  constructor() {
    k(this, "channel", new BroadcastChannel("user-channel"));
    P(this, tt, F());
    P(this, nt, F(!0));
    P(this, rt, F());
    P(this, at, F(Date.now()));
    P(this, it, Ne(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Ht.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    P(this, ot, Ne(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    P(this, st, Ne(() => {
      var t;
      return new U0(br(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    P(this, ct, Ne(() => {
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
    return L(v(this, tt))
  }
  set data(t) {
    U(v(this, tt), t, !0)
  }
  get loading() {
    return L(v(this, nt))
  }
  set loading(t) {
    U(v(this, nt), t, !0)
  }
  get notificationCount() {
    return L(v(this, rt))
  }
  set notificationCount(t) {
    U(v(this, rt), t, !0)
  }
  get lastFetch() {
    return L(v(this, at))
  }
  set lastFetch(t) {
    U(v(this, at), t)
  }
  get charges() {
    return L(v(this, it))
  }
  set charges(t) {
    U(v(this, it), t)
  }
  get cooldown() {
    return L(v(this, ot))
  }
  set cooldown(t) {
    U(v(this, ot), t)
  }
  get flagsBitmap() {
    return L(v(this, st))
  }
  set flagsBitmap(t) {
    U(v(this, st), t)
  }
  get timeoutUntil() {
    return L(v(this, ct))
  }
  set timeoutUntil(t) {
    U(v(this, ct), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await le.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && le.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (ia("userId", {
        id: this.data.id
      }), De.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), V0.warning(Mh(), {
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
    return vr((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return L0((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
tt = new WeakMap, nt = new WeakMap, rt = new WeakMap, at = new WeakMap, it = new WeakMap, ot = new WeakMap, st = new WeakMap, ct = new WeakMap;
const Oe = new G0;
let A;
const ae = new Array(128).fill(void 0);
ae.push(void 0, null, !0, !1);

function I(n) {
  return ae[n]
}
const Er = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Er.decode();
let Re = null;

function Me() {
  return (Re === null || Re.byteLength === 0) && (Re = new Uint8Array(A.memory.buffer)), Re
}

function xe(n, t) {
  return n = n >>> 0, Er.decode(Me().subarray(n, n + t))
}
let Ue = ae.length;

function D(n) {
  Ue === ae.length && ae.push(ae.length + 1);
  const t = Ue;
  return Ue = ae[t], ae[t] = n, t
}

function ne(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    A.__wbindgen_export_0(D(e))
  }
}

function fe(n) {
  return n == null
}

function W0(n) {
  n < 132 || (ae[n] = Ue, Ue = n)
}

function Vn(n) {
  const t = I(n);
  return W0(n), t
}
const Gn = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  A.__wbindgen_export_1.get(n.dtor)(n.a, n.b)
});

function q0(n, t, e, r) {
  const a = {
      a: n,
      b: t,
      cnt: 1,
      dtor: e
    },
    i = (...o) => {
      a.cnt++;
      const s = a.a;
      a.a = 0;
      try {
        return r(s, a.b, ...o)
      } finally {
        --a.cnt === 0 ? (A.__wbindgen_export_1.get(a.dtor)(s, a.b), Gn.unregister(a)) : a.a = s
      }
    };
  return i.original = a, Gn.register(i, a, a), i
}
let he = null;

function Et() {
  return (he === null || he.buffer.detached === !0 || he.buffer.detached === void 0 && he.buffer !== A.memory.buffer) && (he = new DataView(A.memory.buffer)), he
}
let we = 0;
const mt = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  K0 = typeof mt.encodeInto == "function" ? function(n, t) {
    return mt.encodeInto(n, t)
  } : function(n, t) {
    const e = mt.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Xt(n, t, e) {
  if (e === void 0) {
    const s = mt.encode(n),
      u = t(s.length, 1) >>> 0;
    return Me().subarray(u, u + s.length).set(s), we = s.length, u
  }
  let r = n.length,
    a = t(r, 1) >>> 0;
  const i = Me();
  let o = 0;
  for (; o < r; o++) {
    const s = n.charCodeAt(o);
    if (s > 127) break;
    i[a + o] = s
  }
  if (o !== r) {
    o !== 0 && (n = n.slice(o)), a = e(a, r, r = o + n.length * 3, 1) >>> 0;
    const s = Me().subarray(a + o, a + r),
      u = K0(n, s);
    o += u.written, a = e(a, r, o, 1) >>> 0
  }
  return we = o, a
}

function Y0(n) {
  const t = Xt(n, A.__wbindgen_export_2, A.__wbindgen_export_3),
    e = we;
  A.set_fingerprint(t, e)
}

function H0(n) {
  let t, e;
  try {
    const i = A.__wbindgen_add_to_stack_pointer(-16),
      o = Xt(n, A.__wbindgen_export_2, A.__wbindgen_export_3),
      s = we;
    A.get_pawtected_endpoint_payload(i, o, s);
    var r = Et().getInt32(i + 0, !0),
      a = Et().getInt32(i + 4, !0);
    return t = r, e = a, xe(r, a)
  } finally {
    A.__wbindgen_add_to_stack_pointer(16), A.__wbindgen_export_4(t, e, 1)
  }
}

function $0(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return Me().set(n, e / 1), we = n.length, e
}

function Z0(n) {
  const t = $0(n, A.__wbindgen_export_2),
    e = we;
  A.set_telemetry(t, e)
}

function Pt(n) {
  A.set_user_id(n)
}

function J0(n) {
  A.set_automated_browser(n)
}

function X0(n) {
  A.set_cf_likely_automated(n)
}

function Q0(n) {
  const t = Xt(n, A.__wbindgen_export_2, A.__wbindgen_export_3),
    e = we;
  A.request_url(t, e)
}

function eE(n) {
  A.set_automated_clicks(n)
}

function tE() {
  A.init_listeners()
}

function nE(n, t, e) {
  A.__wbindgen_export_5(n, t, D(e))
}
async function rE(n, t) {
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

function aE() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_addEventListener_90e553fdce254421 = function() {
    return ne(function(t, e, r, a) {
      I(t).addEventListener(xe(e, r), I(a))
    }, arguments)
  }, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = I(t).buffer;
    return D(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return ne(function(t, e) {
      const r = I(t).call(I(e));
      return D(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return ne(function(t, e, r) {
      const a = I(t).call(I(e), I(r));
      return D(a)
    }, arguments)
  }, n.wbg.__wbg_clientX_5eb380a5f1fec6fd = function(t) {
    return I(t).clientX
  }, n.wbg.__wbg_clientY_d8b9c7f0c4e2e677 = function(t) {
    return I(t).clientY
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = I(t).crypto;
    return D(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = I(t).document;
    return fe(e) ? 0 : D(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return ne(function(t, e) {
      I(t).getRandomValues(I(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return ne(function(t, e) {
      const r = Reflect.get(I(t), I(e));
      return D(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return ne(function(t) {
      return I(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return ne(function(t) {
      const e = I(t).innerWidth;
      return D(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = I(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = I(t).msCrypto;
    return D(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = I(t).navigator;
    return D(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(I(t));
    return D(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(xe(t, e));
    return D(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const a = new Uint8Array(I(t), e >>> 0, r >>> 0);
    return D(a)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return D(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = I(t).node;
    return D(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = I(t).process;
    return D(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return ne(function(t, e) {
      I(t).randomFillSync(Vn(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return ne(function() {
      const t = module.require;
      return D(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    I(t).set(I(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return fe(t) ? 0 : D(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return fe(t) ? 0 : D(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return fe(t) ? 0 : D(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return fe(t) ? 0 : D(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const a = I(t).subarray(e >>> 0, r >>> 0);
    return D(a)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = I(t).versions;
    return D(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = I(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_closure_wrapper58 = function(t, e, r) {
    const a = q0(t, e, 3, nE);
    return D(a)
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof I(t) == "function"
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = I(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof I(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return I(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = A.memory;
    return D(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = I(e),
      a = typeof r == "number" ? r : void 0;
    Et().setFloat64(t + 8, fe(a) ? 0 : a, !0), Et().setInt32(t + 0, !fe(a), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = I(t);
    return D(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Vn(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = xe(t, e);
    return D(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(xe(t, e))
  }, n
}

function iE(n, t) {
  return A = n.exports, Tr.__wbindgen_wasm_module = t, he = null, Re = null, A
}
async function Tr(n) {
  if (A !== void 0) return A;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = aE();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await rE(await n, t);
  return iE(e, r)
}
class oE {
  constructor() {
    k(this, "interval");
    k(this, "storagesEmpty", !1);
    k(this, "storages", [new Tt, new Ft, new zt, new cE]);
    k(this, "pawtectLoaded");
    k(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!Oe.data || this.storagesEmpty || localStorage.getItem(Tt.KEY))) {
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
  isMultiAccounting(t) {
    const e = pe.day;
    for (const a of this.storages) {
      const i = a.get();
      if (i && !(i.timestamp + e < Date.now()) && i.userId !== t) return !0
    }
    const r = {
      userId: t,
      timestamp: Date.now()
    };
    for (const a of this.storages) a.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await Tr(sa), (t = Oe.data) != null && t.id && Pt(Oe.data.id), tE();
        const e = fetch;
        return Object.assign(window, {
          fetch: sE((r, a) => {
            let i = null;
            return r instanceof Request ? i = r.url : r instanceof URL ? i = r.href : typeof r == "string" && (i = r), i !== null && !i.startsWith("/") && Q0(i), e.call(window, r, a)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, aa(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), Pt(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), X0(t)
  }
  isPawtectReady() {
    return this.pawtectLoaded ?? Promise.resolve(!1)
  }
  getPawtectError() {
    return this.pawtectError
  }
  async getHeaders(t) {
    const e = await bt(),
      r = ma();
    return {
      "x-pawtect-token": await this.getPawtectedEndpointPayload(t, r),
      "x-t": r,
      "x-fp": e
    }
  }
  async getPawtectedEndpointPayload(t, e) {
    if (!await this.loadPawtect()) throw new Error(Tw());
    const a = navigator.webdriver,
      i = await bt();
    Pt(Oe.data.id), Y0(i), J0(a), eE(Ht.automatedClicks);
    const o = Uint8Array.from(atob(e), s => s.charCodeAt(0));
    return Z0(o), H0(t)
  }
}

function sE(n) {
  return n.bind().bind()
}
const ce = class ce {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let a = 0; a < t.length; a++) r[a] = t[a] ^ e[a % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(ce.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), a => a.charCodeAt(0)),
        r = new TextDecoder().decode(ce.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = ce.codec(e);
    localStorage.setItem(ce.KEY, btoa(String.fromCharCode(...r)))
  }
};
k(ce, "KEY", "ui_layout_v3"), k(ce, "XOR_KEY", "wplace-prefs");
let Tt = ce;
const ue = class ue {
  get() {
    try {
      const t = sessionStorage.getItem(ue.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const a = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(a - ue.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let r = "";
    for (const a of e) {
      const i = a.charCodeAt(0) + ue.SHIFT & 65535;
      r += i.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(ue.KEY, r)
  }
};
k(ue, "KEY", "nav.cursor"), k(ue, "SHIFT", 13);
let Ft = ue;
const me = class me {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + me.KEY + "=([^;]*)"));
    if (t) try {
      const [e, r] = decodeURIComponent(t[1]).split("."), a = parseInt(e, 36), i = parseInt(r, 36);
      return !Number.isFinite(a) || !Number.isFinite(i) ? void 0 : {
        userId: a,
        timestamp: i
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${me.KEY}=${encodeURIComponent(e)};path=/;max-age=${me.MAX_AGE};SameSite=Lax`
  }
};
k(me, "KEY", "_pf_uid"), k(me, "MAX_AGE", 3600 * 24 * 365);
let zt = me;
class cE {
  constructor() {
    k(this, "packed")
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
const De = new oE;
export {
  kE as $, la as A, Ec as B, ro as C, uh as D, wl as E, $ as F, BE as G, FE as H, bE as I, vE as J, q as K, wE as L, gE as M, yE as N, fE as O, Yt as P, mE as Q, CE as R, DE as S, pe as T, jE as U, PE as V, EE as W, iv as X, Tw as Y, Ig as Z, ME as _, le as a, SE as a0, AE as a1, IE as a2, pE as a3, LE as a4, yr as a5, RE as a6, xE as a7, _E as a8, Ka as a9, Hh as aA, sp as aB, yn as aC, Dp as aD, qp as aE, vn as aF, mm as aG, Nm as aH, Vm as aI, bn as aJ, fg as aK, Jg as aL, lw as aM, En as aN, Hw as aO, _e as aP, Tn as aQ, Sn as aR, Gy as aS, On as aT, ii as aa, wi as ab, xi as ac, go as ad, Ro as ae, pn as af, ts as ag, mn as ah, js as ai, gn as aj, Mc as ak, Hc as al, vu as am, Pu as an, Ku as ao, Vd as ap, t_ as aq, h_ as ar, wn as as, B_ as at, X_ as au, _f as av, de as aw, Cf as ax, Eh as ay, Mh as az, TE as b, Wi as c, uc as d, f as e, Bt as f, il as g, xl as h, rd as i, Ht as j, bt as k, av as l, Zf as m, NE as n, Nd as o, hE as p, su as q, De as r, OE as s, V0 as t, Oe as u, fn as v, At as w, UE as x, md as y, Wl as z
};