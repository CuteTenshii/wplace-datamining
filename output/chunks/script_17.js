var mn = Object.defineProperty;
var bt = n => {
  throw TypeError(n)
};
var gn = (n, t, e) => t in n ? mn(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var E = (n, t, e) => gn(n, typeof t != "symbol" ? t + "" : t, e),
  wn = (n, t, e) => t.has(n) || bt("Cannot " + e);
var p = (n, t, e) => (wn(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  I = (n, t, e) => t.has(n) ? bt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  e as P,
  i as N,
  h as k,
  g as He,
  bA as yn,
  m as bn,
  x as Et,
  u as de
} from "./wFsvFKKp.js";
import {
  a as Ye
} from "./BFtxp9dm.js";
import {
  g as f
} from "./BhCkpOlh.js";
const ce = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  K = globalThis,
  he = "10.40.0";

function lt() {
  return dt(K), K
}

function dt(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || he, t[he] = t[he] || {}
}

function _t(n, t, e = K) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    s = r[he] = r[he] || {};
  return s[n] || (s[n] = t())
}
const En = "Sentry Logger ",
  vt = {};

function vn(n) {
  if (!("console" in K)) return n();
  const t = K.console,
    e = {},
    r = Object.keys(vt);
  r.forEach(s => {
    const a = vt[s];
    e[s] = t[s], t[s] = a
  });
  try {
    return n()
  } finally {
    r.forEach(s => {
      t[s] = e[s]
    })
  }
}

function Tn() {
  pt().enabled = !0
}

function On() {
  pt().enabled = !1
}

function Yt() {
  return pt().enabled
}

function Sn(...n) {
  ft("log", ...n)
}

function In(...n) {
  ft("warn", ...n)
}

function An(...n) {
  ft("error", ...n)
}

function ft(n, ...t) {
  ce && Yt() && vn(() => {
    K.console[n](`${En}[${n}]:`, ...t)
  })
}

function pt() {
  return ce ? _t("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const $e = {
    enable: Tn,
    disable: On,
    isEnabled: Yt,
    log: Sn,
    warn: In,
    error: An
  },
  Nn = Object.prototype.toString;

function kn(n, t) {
  return Nn.call(n) === `[object ${t}]`
}

function Rn(n) {
  return kn(n, "Object")
}

function Dn(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function xn(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    ce && $e.log(`Failed to add non-enumerable property "${t}" to object`, n)
  }
}
let ie;

function et(n) {
  if (ie !== void 0) return ie ? ie(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = K;
  return t in e && typeof e[t] == "function" ? (ie = e[t], ie(n)) : (ie = null, n())
}

function at() {
  return et(() => Math.random())
}

function Pn() {
  return et(() => Date.now())
}

function Mn(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function Un() {
  const n = K;
  return n.crypto || n.msCrypto
}
let nt;

function Ln() {
  return at() * 16
}

function me(n = Un()) {
  try {
    if (n != null && n.randomUUID) return et(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return nt || (nt = "10000000100040008000" + 1e11), nt.replace(/[018]/g, t => (t ^ (Ln() & 15) >> t / 4).toString(16))
}
const Qt = 1e3;

function Jt() {
  return Pn() / Qt
}

function jn() {
  const {
    performance: n
  } = K;
  if (!(n != null && n.now) || !n.timeOrigin) return Jt;
  const t = n.timeOrigin;
  return () => (t + et(() => n.now())) / Qt
}
let Tt;

function Bn() {
  return (Tt ?? (Tt = jn()))()
}

function Cn(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Bn(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : me()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function Xt(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = Xt(r[s], t[s], e - 1));
  return r
}

function Ot() {
  return me()
}
const it = "_sentrySpan";

function St(n, t) {
  t ? xn(n, it, t) : delete n[it]
}

function It(n) {
  return n[it]
}
const zn = 100;
class ne {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: Ot(),
      sampleRand: at()
    }
  }
  clone() {
    const t = new ne;
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, St(t, It(this)), t
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
    }, this._session && Cn(this._session, {
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
      r = e instanceof ne ? e.getScopeData() : Rn(e) ? t : void 0,
      {
        tags: s,
        attributes: a,
        extra: o,
        user: c,
        contexts: _,
        level: d,
        fingerprint: g = [],
        propagationContext: h,
        conversationId: R
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...s
    }, this._attributes = {
      ...this._attributes,
      ...a
    }, this._extra = {
      ...this._extra,
      ...o
    }, this._contexts = {
      ...this._contexts,
      ..._
    }, c && Object.keys(c).length && (this._user = c), d && (this._level = d), g.length && (this._fingerprint = g), h && (this._propagationContext = h), R && (this._conversationId = R), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, St(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: Ot(),
      sampleRand: at()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var a;
    const r = typeof e == "number" ? e : zn;
    if (r <= 0) return this;
    const s = {
      timestamp: Jt(),
      ...t,
      message: t.message ? Mn(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(s), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (a = this._client) == null || a.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
      span: It(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Xt(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || me();
    if (!this._client) return ce && $e.warn("No client configured on scope - will not capture exception!"), r;
    const s = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: s,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const s = (r == null ? void 0 : r.event_id) || me();
    if (!this._client) return ce && $e.warn("No client configured on scope - will not capture message!"), s;
    const a = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: a,
      ...r,
      event_id: s
    }, this), s
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || me();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (ce && $e.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function qn() {
  return _t("defaultCurrentScope", () => new ne)
}

function Fn() {
  return _t("defaultIsolationScope", () => new ne)
}
class Kn {
  constructor(t, e) {
    let r;
    t ? r = t : r = new ne;
    let s;
    e ? s = e : s = new ne, this._stack = [{
      scope: r
    }], this._isolationScope = s
  }
  withScope(t) {
    const e = this._pushScope();
    let r;
    try {
      r = t(e)
    } catch (s) {
      throw this._popScope(), s
    }
    return Dn(r) ? r.then(s => (this._popScope(), s), s => {
      throw this._popScope(), s
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

function le() {
  const n = lt(),
    t = dt(n);
  return t.stack = t.stack || new Kn(qn(), Fn())
}

function Vn(n) {
  return le().withScope(n)
}

function Gn(n, t) {
  const e = le();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function At(n) {
  return le().withScope(() => n(le().getIsolationScope()))
}

function $n() {
  return {
    withIsolationScope: At,
    withScope: Vn,
    withSetScope: Gn,
    withSetIsolationScope: (n, t) => At(t),
    getCurrentScope: () => le().getScope(),
    getIsolationScope: () => le().getIsolationScope()
  }
}

function Zt(n) {
  const t = dt(n);
  return t.acs ? t.acs : $n()
}

function Wn() {
  const n = lt();
  return Zt(n).getCurrentScope()
}

function Hn() {
  const n = lt();
  return Zt(n).getIsolationScope()
}

function Yn(n, t) {
  return Wn().captureException(n, void 0)
}

function Qn(n, t) {
  Hn().setContext(n, t)
}
const Ky = "https://maps.wplace.live",
  Vy = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Jn = "true",
  Gy = "0x4AAAAAABpHqZ-6i7uL0nmG",
  $y = "https://backend.wplace.live/files",
  ht = "https://backend.wplace.live",
  Xn = "" + new URL("../assets/pawtect_wasm_bg.YFplO3ET.wasm", import.meta.url).href,
  Nt = "theme";
var ye, be, Ee, ve, Te, Oe, Se, Ie, Ae, Ne;
class Zn {
  constructor() {
    I(this, ye, P(!1));
    I(this, be, P(!1));
    I(this, Ee, P(0));
    I(this, ve, P(!1));
    I(this, Te, P(He(er())));
    I(this, Oe, P(null));
    I(this, Se, P(!1));
    I(this, Ie, P("custom-winter"));
    I(this, Ae, P(He(Date.now())));
    I(this, Ne, P(void 0));
    setInterval(() => {
      k(p(this, Ae), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Nt), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return N(p(this, ye))
  }
  set dropletsDialogOpen(t) {
    k(p(this, ye), t, !0)
  }
  get storeDialogOpen() {
    return N(p(this, be))
  }
  set storeDialogOpen(t) {
    k(p(this, be), t, !0)
  }
  get storeTabIndex() {
    return N(p(this, Ee))
  }
  set storeTabIndex(t) {
    k(p(this, Ee), t, !0)
  }
  get muted() {
    return N(p(this, ve))
  }
  set muted(t) {
    k(p(this, ve), t, !0)
  }
  get language() {
    return N(p(this, Te))
  }
  set language(t) {
    k(p(this, Te), t, !0)
  }
  get map() {
    return N(p(this, Oe))
  }
  set map(t) {
    k(p(this, Oe), t)
  }
  get automatedClicks() {
    return N(p(this, Se))
  }
  set automatedClicks(t) {
    k(p(this, Se), t, !0)
  }
  get theme() {
    return N(p(this, Ie))
  }
  set theme(t) {
    k(p(this, Ie), t, !0), localStorage.setItem(Nt, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return N(p(this, Ae))
  }
  get captcha() {
    return tr ? N(p(this, Ne)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    k(p(this, Ne), t, !0)
  }
}
ye = new WeakMap, be = new WeakMap, Ee = new WeakMap, ve = new WeakMap, Te = new WeakMap, Oe = new WeakMap, Se = new WeakMap, Ie = new WeakMap, Ae = new WeakMap, Ne = new WeakMap;
const mt = new Zn;

function er() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const tr = Jn.toLowerCase() !== "false",
  nr = 60,
  rr = 100,
  sr = 50,
  ar = 2e3;
class en {
  constructor(t) {
    E(this, "items", []);
    E(this, "writeIdx", 0);
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

function ir() {
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
const tn = new en(rr),
  nn = new en(sr);
let D = ir(),
  Qe = null,
  kt = !1,
  O = null,
  rn = 0;

function Wy() {
  kt || typeof window > "u" || (kt = !0, D.focusStartMs = performance.now(), D.windowStartMs = Date.now(), window.addEventListener("pointermove", n => {
    const t = performance.now();
    t - D.lastMouseSampleMs < nr || (D.lastMouseSampleMs = t, tn.push({
      x: n.clientX,
      y: n.clientY,
      t
    }))
  }, {
    passive: !0
  }), window.addEventListener("pointerdown", n => {
    nn.push(performance.now()), D.lastClickX = n.clientX, D.lastClickY = n.clientY
  }, {
    passive: !0
  }), window.addEventListener("blur", () => {
    D.totalFocusMs += performance.now() - D.focusStartMs, D.idleStartMs = performance.now()
  }, {
    passive: !0
  }), window.addEventListener("focus", () => {
    D.idleStartMs > 0 && (D.totalIdleMs += performance.now() - D.idleStartMs, D.idleStartMs = 0), D.focusStartMs = performance.now()
  }, {
    passive: !0
  }), gr())
}

function or() {
  Qe = cr();
  try {
    const n = Qe,
      t = new Uint8Array(40),
      e = new DataView(t.buffer);
    e.setUint8(0, 1);
    let r = 0;
    n.isLinearMovement && (r |= 1), n.isConstantInterval && (r |= 2), n.hasZeroJitter && (r |= 4), O != null && O.hts && (r |= 8), navigator.webdriver && (r |= 16), mt.automatedClicks && (r |= 32), O != null && O.cdp && (r |= 64), O != null && O.odz && (r |= 128), e.setUint8(1, r), e.setUint8(2, Math.min(255, n.clickCount)), e.setUint16(3, Math.min(65535, Math.round(n.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, n.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(n.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, n.movementSegments)), e.setUint8(8, Math.min(255, Math.round(n.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, D.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, D.lastClickY))), e.setUint8(13, Math.min(255, O ? O.lc : 0)), e.setUint8(14, Math.min(255, O ? O.pc : 0)), e.setUint8(15, Math.min(255, O ? O.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(n.idleMs))), e.setUint16(18, Math.min(65535, Math.round(n.focusMs))), e.setUint16(20, Math.min(65535, Math.round(n.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(n.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(n.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(n.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(n.preClickPauseAvg))), e.setUint16(30, Math.min(65535, O ? O.sw : 0)), e.setUint16(32, Math.min(65535, O ? O.sh : 0)), e.setUint8(34, O ? O.fb & 255 : 0), e.setUint8(35, Math.min(255, O ? O.ptc : 0)), e.setUint8(36, O ? O.adf & 255 : 0);
    let s = 0;
    return O != null && O.cdr && (s |= 1), e.setUint8(37, s), e.setUint16(38, Math.min(65535, Math.round(rn * 100))), btoa(String.fromCharCode(...t))
  } catch {
    return ""
  }
}

function cr() {
  O = mr();
  const n = Date.now(),
    t = D.windowStartMs,
    e = performance.now(),
    r = tn.drain(),
    s = nn.drain(),
    a = pr(D, e);
  D.totalIdleMs = 0, D.totalFocusMs = 0, D.focusStartMs = e, D.windowStartMs = n;
  const o = lr(r),
    c = dr(s),
    _ = fr(s, r),
    d = o.straightnessAvg > .95 && r.length > 10,
    g = o.jitterAvg < .01 && r.length > 10,
    h = c.stddev / Math.max(1, c.avg) < .05 && s.length >= 5;
  return Qe = {
    windowStart: t,
    windowEnd: n,
    mouseSpeedAvg: $(o.speedAvg),
    mouseSpeedStddev: $(o.speedStddev),
    mouseAccelAvg: $(o.accelAvg),
    mouseAccelStddev: $(o.accelStddev),
    microMovementCount: o.microMovementCount,
    movementSegments: o.movementSegments,
    avgSegmentCurvature: $(o.avgSegmentCurvature),
    velocityProfileSkew: $(o.velocityProfileSkew),
    angularVelocityStddev: $(o.angularVelocityStddev),
    clickCount: s.length,
    preClickPauseAvg: $(_),
    idleMs: a.idleMs,
    focusMs: a.focusMs,
    isLinearMovement: d,
    isConstantInterval: h,
    hasZeroJitter: g
  }, Qe
}
const ur = {
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

function lr(n) {
  if (n.length < 3) return ur;
  const t = [],
    e = [],
    r = [];
  let s = 0,
    a = 0,
    o = 0;
  const c = [];
  for (let m = 1; m < n.length; m++) {
    const y = n[m].x - n[m - 1].x,
      x = n[m].y - n[m - 1].y,
      G = Math.max(1, n[m].t - n[m - 1].t),
      j = Math.sqrt(y * y + x * x),
      B = j / G;
    if (t.push(B), j < 3 && j > 0 && s++, G > ar) {
      if (m - a > 2) {
        o++;
        const ae = Rt(n.slice(a, m));
        ae >= 0 && c.push(ae)
      }
      a = m
    }
    if (m >= 2) {
      const ae = n[m - 1].x - n[m - 2].x,
        tt = n[m - 1].y - n[m - 2].y,
        pn = y * ae + x * tt,
        wt = Math.sqrt(y * y + x * x),
        yt = Math.sqrt(ae * ae + tt * tt);
      wt > 0 && yt > 0 && e.push(1 - Math.abs(pn / (wt * yt)));
      const hn = t[t.length - 2] || 0;
      r.push(Math.abs(B - hn))
    }
  }
  if (n.length - a > 2) {
    o++;
    const m = Rt(n.slice(a));
    m >= 0 && c.push(m)
  }
  const _ = t.reduce((m, y) => m + y, 0) / t.length,
    d = e.length > 0 ? e.reduce((m, y) => m + y, 0) / e.length : 0,
    g = t.reduce((m, y) => m + Math.pow(y - _, 2), 0) / t.length,
    h = Math.sqrt(g);
  let R = 0,
    M = 0;
  if (r.length > 0) {
    R = r.reduce((y, x) => y + x, 0) / r.length;
    const m = r.reduce((y, x) => y + Math.pow(x - R, 2), 0) / r.length;
    M = Math.sqrt(m)
  }
  const A = n[0],
    b = n[n.length - 1],
    T = Math.sqrt(Math.pow(b.x - A.x, 2) + Math.pow(b.y - A.y, 2));
  let L = 0;
  for (let m = 1; m < n.length; m++) {
    const y = n[m].x - n[m - 1].x,
      x = n[m].y - n[m - 1].y;
    L += Math.sqrt(y * y + x * x)
  }
  const V = L > 0 ? T / L : 0,
    Ve = c.length > 0 ? c.reduce((m, y) => m + y, 0) / c.length : 0;
  let z = 0;
  t.length >= 5 && h > .001 && (z = t.reduce((y, x) => y + Math.pow(x - _, 3), 0) / t.length / Math.pow(h, 3));
  let Ge = 0;
  if (n.length >= 4) {
    const m = [];
    for (let y = 1; y < n.length; y++) {
      const x = n[y].x - n[y - 1].x,
        G = n[y].y - n[y - 1].y;
      Math.sqrt(x * x + G * G) > .5 && m.push(Math.atan2(G, x))
    }
    if (m.length >= 3) {
      const y = [];
      for (let j = 1; j < m.length; j++) {
        let B = m[j] - m[j - 1];
        for (; B > Math.PI;) B -= 2 * Math.PI;
        for (; B < -Math.PI;) B += 2 * Math.PI;
        y.push(B)
      }
      const x = y.reduce((j, B) => j + B, 0) / y.length,
        G = y.reduce((j, B) => j + Math.pow(B - x, 2), 0) / y.length;
      Ge = Math.sqrt(G)
    }
  }
  return {
    speedAvg: _,
    speedStddev: h,
    jitterAvg: d,
    straightnessAvg: V,
    accelAvg: R,
    accelStddev: M,
    microMovementCount: s,
    movementSegments: o,
    avgSegmentCurvature: Ve,
    velocityProfileSkew: z,
    angularVelocityStddev: Ge,
    speeds: t
  }
}

function dr(n) {
  if (n.length < 2) return {
    avg: 0,
    stddev: 0
  };
  const t = [];
  for (let s = 1; s < n.length; s++) t.push(n[s] - n[s - 1]);
  const e = t.reduce((s, a) => s + a, 0) / t.length,
    r = t.reduce((s, a) => s + Math.pow(a - e, 2), 0) / t.length;
  return {
    avg: e,
    stddev: Math.sqrt(r)
  }
}

function _r(n, t) {
  let e = 0,
    r = n.length - 1,
    s = -1;
  for (; e <= r;) {
    const a = e + r >>> 1;
    n[a].t <= t ? (s = a, e = a + 1) : r = a - 1
  }
  return s
}

function fr(n, t) {
  if (n.length === 0 || t.length < 2) return 0;
  let e = 0,
    r = 0;
  for (const s of n) {
    const a = _r(t, s);
    a >= 0 && (e += s - t[a].t, r++)
  }
  return r > 0 ? e / r : 0
}

function pr(n, t) {
  const e = Math.round(n.totalIdleMs + (n.idleStartMs > 0 ? t - n.idleStartMs : 0)),
    r = Math.round(n.totalFocusMs + (n.idleStartMs === 0 ? t - n.focusStartMs : 0));
  return {
    idleMs: e,
    focusMs: r
  }
}

function Rt(n) {
  if (n.length < 3) return -1;
  const t = n[0],
    e = n[n.length - 1];
  if (Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) < 5) return -1;
  let s = 0,
    a = 0;
  for (let o = 1; o < n.length; o++) {
    const c = n[o].x - n[o - 1].x,
      _ = n[o].y - n[o - 1].y;
    if (s += Math.sqrt(c * c + _ * _), o >= 2) {
      const d = n[o - 1].x - n[o - 2].x,
        g = n[o - 1].y - n[o - 2].y,
        h = d * _ - g * c,
        R = d * c + g * _;
      a += Math.abs(Math.atan2(h, R))
    }
  }
  return s > 0 ? a / s : 0
}

function hr() {
  var r;
  let n = 0;
  const t = navigator,
    e = ["hardwareConcurrency", "deviceMemory", "platform", "vendor", "maxTouchPoints", "languages", "plugins", "userAgent"];
  try {
    for (const s of e)
      if (Object.getOwnPropertyDescriptor(navigator, s) !== void 0) {
        n |= 1;
        break
      }
  } catch {}
  try {
    const s = document.createElement("iframe");
    s.style.display = "none", document.body.appendChild(s);
    const a = s.contentWindow;
    if (a) {
      const o = a.Function.prototype.toString,
        c = ["hardwareConcurrency", "platform", "languages"];
      for (const _ of c) {
        const d = Object.getOwnPropertyDescriptor(Navigator.prototype, _);
        if (d && typeof d.get == "function") {
          const g = Function.prototype.toString.call(d.get),
            h = o.call(d.get);
          if (g !== h) {
            n |= 2;
            break
          }
          if (!h.includes("native code")) {
            n |= 2;
            break
          }
        }
      }
    }
    s.remove()
  } catch {}
  try {
    const s = navigator.userAgent,
      a = navigator.platform;
    if (s && a) {
      const o = /Windows/.test(s),
        c = /Macintosh|Mac OS X/.test(s),
        _ = /Linux/.test(s) && !/Android/.test(s),
        d = /Android/.test(s),
        g = /iPhone|iPad|iPod/.test(s),
        h = /^Win/.test(a),
        R = /^Mac/.test(a),
        M = /^Linux/.test(a),
        A = /^(iPhone|iPad|iPod)/.test(a);
      if ((o && !h || c && !R || _ && !M || d && !M || g && !A) && (n |= 4), t.userAgentData && t.userAgentData.platform) {
        const b = t.userAgentData.platform;
        (o && b !== "Windows" || c && b !== "macOS" || _ && b !== "Linux" || d && b !== "Android") && (n |= 4)
      }
    }
  } catch {}
  try {
    const a = document.createElement("canvas").getContext("webgl");
    if (a) {
      const o = a.getExtension("WEBGL_debug_renderer_info");
      if (o) {
        const c = (a.getParameter(o.UNMASKED_RENDERER_WEBGL) || "").toLowerCase(),
          _ = (a.getParameter(o.UNMASKED_VENDOR_WEBGL) || "").toLowerCase(),
          d = navigator.userAgent,
          g = /Windows/.test(d),
          h = /Macintosh|Mac OS X/.test(d);
        (c.includes("apple") || _.includes("apple")) && g && (n |= 8), c.includes("angle") && h && !c.includes("metal") && (n |= 8), (c.includes("d3d11") || c.includes("direct3d")) && h && (n |= 8)
      }(r = a.getExtension("WEBGL_lose_context")) == null || r.loseContext()
    }
  } catch {}
  try {
    (screen.availWidth > screen.width || screen.availHeight > screen.height) && (n |= 16), screen.pixelDepth !== screen.colorDepth && (n |= 16)
  } catch {}
  try {
    const s = navigator.userAgent;
    if (/Chrome\//.test(s) && !/Edg\//.test(s)) {
      const a = window.chrome;
      a && typeof a.csi != "function" && (n |= 64)
    }
  } catch {}
  try {
    const s = ["hardwareConcurrency", "platform", "maxTouchPoints", "deviceMemory"];
    for (const a of s) {
      const o = Object.getOwnPropertyDescriptor(navigator, a);
      if (o && "value" in o) {
        n |= 128;
        break
      }
    }
  } catch {}
  return n
}

function mr() {
  const n = navigator,
    t = n.plugins ? n.plugins.length : 0,
    e = "ontouchstart" in window || n.maxTouchPoints > 0,
    r = n.maxTouchPoints || 0;
  let s = 0;
  typeof SharedArrayBuffer < "u" && (s |= 1), typeof Intl.Segmenter < "u" && (s |= 2), typeof CSS.highlights < "u" && (s |= 4), n.userAgentData && (s |= 8), window.chrome && (s |= 16), typeof window.InstallTrigger < "u" && (s |= 32), typeof window.WebKitMutationObserver < "u" && (s |= 64), typeof window.MSStream < "u" && (s |= 128);
  let a = 0;
  const o = ["webdriver", "languages", "plugins", "hardwareConcurrency", "platform", "userAgent", "vendor", "maxTouchPoints", "deviceMemory", "cookieEnabled", "pdfViewerEnabled", "connection"],
    c = ["width", "height", "colorDepth", "pixelDepth", "availWidth", "availHeight"],
    _ = Function.prototype.toString;
  for (const b of o) try {
    const T = Object.getOwnPropertyDescriptor(Navigator.prototype, b);
    T && typeof T.get == "function" && _.call(T.get).includes("native code") === !1 && a++
  } catch {}
  for (const b of c) try {
    const T = Object.getOwnPropertyDescriptor(Screen.prototype, b);
    T && typeof T.get == "function" && _.call(T.get).includes("native code") === !1 && a++
  } catch {}
  let d = "",
    g = !0;
  try {
    const b = document.createElement("canvas");
    b.width = 64, b.height = 16;
    const T = b.getContext("2d");
    if (T) {
      T.textBaseline = "top", T.font = "14px Arial", T.fillText("wplace🐾", 2, 2);
      const L = b.toDataURL();
      let V = 0;
      for (let z = 0; z < L.length; z++) V = (V << 5) - V + L.charCodeAt(z) | 0;
      d = (V >>> 0).toString(16).padStart(8, "0"), T.clearRect(0, 0, 64, 16), T.fillText("wplace🐾", 2, 2);
      const Ve = b.toDataURL();
      g = L === Ve
    }
  } catch {}
  let h = !1;
  try {
    const b = new Error;
    Object.defineProperty(b, "stack", {
      get() {
        return h = !0, ""
      }
    }), console.debug(b)
  } catch {}
  const R = n.languages ? n.languages.length : 0,
    M = (window.outerWidth === 0 || window.outerHeight === 0) && (window.innerWidth === 0 || window.innerHeight === 0),
    A = hr();
  return {
    pc: t,
    sw: screen.width,
    sh: screen.height,
    hts: e,
    mtp: r,
    fb: s,
    ptc: a,
    ch: d,
    cdp: h,
    lc: R,
    odz: M,
    cdr: g,
    adf: A
  }
}

function gr() {
  const n = [];

  function e(r) {
    if (n.push(r), n.length < 30) requestAnimationFrame(e);
    else {
      const s = [];
      for (let o = 1; o < n.length; o++) {
        const c = n[o] - n[o - 1];
        c < 100 && s.push(c)
      }
      if (s.length < 5) return;
      s.sort((o, c) => o - c);
      const a = s[Math.floor(s.length / 2)];
      rn = s.reduce((o, c) => o + Math.abs(c - a), 0) / s.length
    }
  }
  requestAnimationFrame(e)
}

function $(n) {
  return Math.round(n * 1e3) / 1e3
}
const wr = `
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
async function yr() {
  try {
    const n = await fetch(`${ht}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await br(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function br(n, t) {
  return new Promise(e => {
    const r = new Blob([wr], {
        type: "application/javascript"
      }),
      s = URL.createObjectURL(r),
      a = new Worker(s),
      o = setTimeout(() => {
        a.terminate(), URL.revokeObjectURL(s), e(null)
      }, 12e4);
    a.onmessage = c => {
      clearTimeout(o), a.terminate(), URL.revokeObjectURL(s), c.data.error ? e(null) : e(c.data.nonce)
    }, a.onerror = () => {
      clearTimeout(o), a.terminate(), URL.revokeObjectURL(s), e(null)
    }, a.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const sn = 3;
var ke, Re;
class Er {
  constructor() {
    I(this, ke, P(null));
    I(this, Re, P(0))
  }
  get current() {
    return N(p(this, ke))
  }
  set current(t) {
    k(p(this, ke), t, !0)
  }
  get errorCount() {
    return N(p(this, Re))
  }
  set errorCount(t) {
    k(p(this, Re), t, !0)
  }
}
ke = new WeakMap, Re = new WeakMap;
const U = new Er;
async function Dt(n) {
  if (n === 1) return vr();
  if (n === 2) {
    const t = await an();
    return t ? xt("turnstile", t) : !1
  }
  if (n === 3) {
    const t = await Tr();
    return t ? xt("hcaptcha", t) : !1
  }
  return n === 4 ? Or() : !1
}
async function vr() {
  for (let n = 0; n < sn; n++) try {
    const t = await yr();
    if (!t) continue;
    return await Y.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function xt(n, t) {
  try {
    const e = await Y.postCaptchaSession({
      provider: n,
      token: t
    });
    return await Y.verifyChallenge({
      type: "captcha",
      sessionId: e.sessionId
    }), !0
  } catch {
    return !1
  }
}
const ue = {};

function an() {
  return on(2)
}

function Tr() {
  return on(3)
}

function on(n) {
  const t = ue[n];
  if (t) return t;
  const e = new Promise(r => {
    U.errorCount = 0, U.current = {
      tier: n,
      resolve: s => {
        delete ue[n], r(s)
      }
    }
  });
  return ue[n] = e, e
}

function Or() {
  const n = ue[4];
  if (n) return n;
  const t = new Promise(e => {
    U.errorCount = 0, U.current = {
      tier: 4,
      resolve: r => {
        delete ue[4], e(r)
      }
    }
  });
  return ue[4] = t, t
}

function Hy(n) {
  const t = U.current;
  !t || t.tier === 4 || (t.resolve(n), U.current = null)
}

function Yy() {
  const n = U.current;
  !n || n.tier === 4 || (U.errorCount += 1, U.errorCount >= sn && (n.resolve(void 0), U.current = null))
}

function Qy() {
  const n = U.current;
  !n || n.tier !== 4 || (n.resolve(!0), U.current = null)
}

function Jy() {
  const n = U.current;
  n && (n.tier === 4 ? n.resolve(!1) : n.resolve(void 0), U.current = null)
}
var i = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(i || {});
const Sr = () => "Your account has been suspended for breaking the rules",
  Ir = () => "Sua conta foi suspensa por quebrar as regras",
  Ar = () => "您的账号因违反规则已被暂停",
  Nr = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  kr = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Rr = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Dr = () => "Il tuo account è stato sospeso per aver infranto le regole",
  xr = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Pr = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Mr = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ur = () => "Ваш обліковий запис було призупинено за порушення правил",
  Lr = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  jr = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Sr() : e === "pt" ? Ir() : e === "ch" ? Ar() : e === "de" ? Nr() : e === "es" ? kr() : e === "fr" ? Rr() : e === "it" ? Dr() : e === "jp" ? xr() : e === "pl" ? Pr() : e === "ru" ? Mr() : e === "uk" ? Ur() : Lr()
  },
  Br = () => "Alliance name already taken",
  Cr = () => "Já possui uma aliança com esse nome",
  zr = () => "该联盟名称已被占用",
  qr = () => "Der Allianzname ist bereits vergeben",
  Fr = () => "Ese nombre de alianza ya está en uso",
  Kr = () => "Ce nom d’alliance est déjà pris",
  Vr = () => "Esiste già un'alleanza con questo nome",
  Gr = () => "このアライアンス名は既に使用されています。",
  $r = () => "Nazwa sojuszu jest już zajęta",
  Wr = () => "Такое название альянса уже используется",
  Hr = () => "Назва альянсу вже зайнята",
  Yr = () => "Tên liên minh đã được sử dụng",
  Qr = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Br() : e === "pt" ? Cr() : e === "ch" ? zr() : e === "de" ? qr() : e === "es" ? Fr() : e === "fr" ? Kr() : e === "it" ? Vr() : e === "jp" ? Gr() : e === "pl" ? $r() : e === "ru" ? Wr() : e === "uk" ? Hr() : Yr()
  },
  Jr = () => "Alliance name exceeded the maximum number of characters",
  Xr = () => "O nome da aliança excedeu o número máximo de caracteres",
  Zr = () => "联盟名称超过最大字符数限制",
  es = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  ts = () => "El nombre de la alianza superó el número máximo de caracteres",
  ns = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  rs = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  ss = () => "アライアンス名が最大文字数を超えています。",
  as = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  is = () => "Название альянса превышает максимальную длину",
  os = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  cs = () => "Tên liên minh vượt quá số ký tự cho phép",
  us = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Jr() : e === "pt" ? Xr() : e === "ch" ? Zr() : e === "de" ? es() : e === "es" ? ts() : e === "fr" ? ns() : e === "it" ? rs() : e === "jp" ? ss() : e === "pl" ? as() : e === "ru" ? is() : e === "uk" ? os() : cs()
  },
  ls = () => "Alliance with empty name",
  ds = () => "Aliança com nome vazio",
  _s = () => "名称为空的联盟",
  fs = () => "Allianz mit leerem Namen",
  ps = () => "Alianza con nombre vacío",
  hs = () => "Alliance avec nom vide",
  ms = () => "Alleanza con nome vuoto",
  gs = () => "名前が空のアライアンスです。",
  ws = () => "Sojusz z pustą nazwą",
  ys = () => "Альянс с пустым названием",
  bs = () => "Альянс із порожньою назвою",
  Es = () => "Liên minh không có tên",
  vs = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ls() : e === "pt" ? ds() : e === "ch" ? _s() : e === "de" ? fs() : e === "es" ? ps() : e === "fr" ? hs() : e === "it" ? ms() : e === "jp" ? gs() : e === "pl" ? ws() : e === "ru" ? ys() : e === "uk" ? bs() : Es()
  },
  Ts = () => "Botting",
  Os = () => "Uso de bots",
  Ss = () => "脚本",
  Is = () => "Bot-Nutzung",
  As = () => "Botting",
  Ns = () => "Bots",
  ks = () => "Uso di bot",
  Rs = () => "ボット使用",
  Ds = () => "Botting",
  xs = () => "Боттинг",
  Ps = () => "Боти",
  Ms = () => "Botting",
  Us = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ts() : e === "pt" ? Os() : e === "ch" ? Ss() : e === "de" ? Is() : e === "es" ? As() : e === "fr" ? Ns() : e === "it" ? ks() : e === "jp" ? Rs() : e === "pl" ? Ds() : e === "ru" ? xs() : e === "uk" ? Ps() : Ms()
  },
  Ls = () => "Use of software to completely automate painting",
  js = () => "Uso de software para pintar de forma completamente automatizada ",
  Bs = () => "使用软件完全自动化绘制",
  Cs = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  zs = () => "Uso de software para automatizar completamente la pintura",
  qs = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Fs = () => "Uso di software per dipingere in modo completamente automatizzato",
  Ks = () => "ペイントを完全に自動化するソフトウェアの使用",
  Vs = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Gs = () => "Использование программ для полной автоматизации рисования",
  $s = () => "Використання програм, які повністю автоматизують малювання",
  Ws = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Hs = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ls() : e === "pt" ? js() : e === "ch" ? Bs() : e === "de" ? Cs() : e === "es" ? zs() : e === "fr" ? qs() : e === "it" ? Fs() : e === "jp" ? Ks() : e === "pl" ? Vs() : e === "ru" ? Gs() : e === "uk" ? $s() : Ws()
  },
  Ys = () => "Breaking the rules",
  Qs = () => "Quebrar as regras",
  Js = () => "违反规则",
  Xs = () => "Regeln brechen",
  Zs = () => "Romper las reglas",
  ea = () => "Violation des règles",
  ta = () => "Violazione delle regole",
  na = () => "ルール違反",
  ra = () => "Łamanie zasad",
  sa = () => "Нарушение правил",
  aa = () => "Порушення правил",
  ia = () => "Vi phạm luật",
  oa = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ys() : e === "pt" ? Qs() : e === "ch" ? Js() : e === "de" ? Xs() : e === "es" ? Zs() : e === "fr" ? ea() : e === "it" ? ta() : e === "jp" ? na() : e === "pl" ? ra() : e === "ru" ? sa() : e === "uk" ? aa() : ia()
  },
  ca = () => "You have broken one of Wplace's rules",
  ua = () => "Você quebrou uma das regras do Wplace",
  la = () => "你违反了 Wplace 的一项规则",
  da = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  _a = () => "Has infringido una de las reglas de Wplace",
  fa = () => "Vous avez enfreint l’une des règles de Wplace",
  pa = () => "Hai infranto una delle regole di Wplace",
  ha = () => "Wplaceのルールのいずれかに違反しました。",
  ma = () => "Złamałeś jedną z zasad Wplace",
  ga = () => "Вы нарушили одно из правил Wplace",
  wa = () => "Ви порушили одне з правил Wplace",
  ya = () => "Bạn đã vi phạm một trong các luật của Wplace",
  ba = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ca() : e === "pt" ? ua() : e === "ch" ? la() : e === "de" ? da() : e === "es" ? _a() : e === "fr" ? fa() : e === "it" ? pa() : e === "jp" ? ha() : e === "pl" ? ma() : e === "ru" ? ga() : e === "uk" ? wa() : ya()
  },
  Ea = () => "You cannot paint over event pixels",
  va = () => "Você não pode pintar sobre pixels de eventos",
  Ta = () => "你不能覆盖活动像素",
  Oa = () => "Du kannst nicht über Event-Pixel malen",
  Sa = () => "No puedes pintar sobre píxeles de evento",
  Ia = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  Aa = () => "Non puoi dipingere sopra i pixel dell'evento",
  Na = () => "イベント用のピクセルの上には塗れません。",
  ka = () => "Nie możesz malować po pikselach wydarzenia",
  Ra = () => "Вы не можете рисовать по пикселям события",
  Da = () => "Ви не можете малювати поверх пікселів події",
  xa = () => "Bạn không thể tô lên pixel sự kiện",
  Pt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ea() : e === "pt" ? va() : e === "ch" ? Ta() : e === "de" ? Oa() : e === "es" ? Sa() : e === "fr" ? Ia() : e === "it" ? Aa() : e === "jp" ? Na() : e === "pl" ? ka() : e === "ru" ? Ra() : e === "uk" ? Da() : xa()
  },
  Pa = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Ma = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ua = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  La = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  ja = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Ba = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Ca = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  za = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  qa = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Fa = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Ka = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Va = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Ga = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Pa() : e === "pt" ? Ma() : e === "ch" ? Ua() : e === "de" ? La() : e === "es" ? ja() : e === "fr" ? Ba() : e === "it" ? Ca() : e === "jp" ? za() : e === "pl" ? qa() : e === "ru" ? Fa() : e === "uk" ? Ka() : Va()
  },
  $a = () => "Challenge verification not completed",
  Wa = () => "Verificação do desafio não concluída",
  Ha = () => "挑战验证未完成",
  Ya = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Qa = () => "Verificación del desafío no completada",
  Ja = () => "Vérification du défi non terminée",
  Xa = () => "Verifica della sfida non completata",
  Za = () => "チャレンジ検証が完了していません",
  ei = () => "Weryfikacja wyzwania niezakończona",
  ti = () => "Верификация вызова не завершена",
  ni = () => "Перевірку виклику не завершено",
  ri = () => "Xác minh thử thách chưa hoàn thành",
  rt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? $a() : e === "pt" ? Wa() : e === "ch" ? Ha() : e === "de" ? Ya() : e === "es" ? Qa() : e === "fr" ? Ja() : e === "it" ? Xa() : e === "jp" ? Za() : e === "pl" ? ei() : e === "ru" ? ti() : e === "uk" ? ni() : ri()
  },
  si = () => "Couldn't complete the purchase. This item does not exist.",
  ai = () => "Não foi possível concluir a compra. Este item não existe.",
  ii = () => "无法完成购买。该物品不存在。",
  oi = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  ci = () => "No se pudo completar la compra. Este ítem no existe.",
  ui = () => "Achat impossible. Cet objet n’existe pas.",
  li = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  di = () => "購入を完了できませんでした。このアイテムは存在しません。",
  _i = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  fi = () => "Не удалось завершить покупку. Этот предмет не существует.",
  pi = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  hi = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Mt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? si() : e === "pt" ? ai() : e === "ch" ? ii() : e === "de" ? oi() : e === "es" ? ci() : e === "fr" ? ui() : e === "it" ? li() : e === "jp" ? di() : e === "pl" ? _i() : e === "ru" ? fi() : e === "uk" ? pi() : hi()
  },
  mi = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  gi = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  wi = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  yi = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  bi = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Ei = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  vi = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Ti = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Oi = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  Si = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Ii = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Ai = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  Ni = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? mi() : e === "pt" ? gi() : e === "ch" ? wi() : e === "de" ? yi() : e === "es" ? bi() : e === "fr" ? Ei() : e === "it" ? vi() : e === "jp" ? Ti() : e === "pl" ? Oi() : e === "ru" ? Si() : e === "uk" ? Ii() : Ai()
  },
  ki = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Ri = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  Di = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  xi = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Pi = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  Mi = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Ui = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  Li = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  ji = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Bi = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  Ci = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  zi = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Ut = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ki() : e === "pt" ? Ri() : e === "ch" ? Di() : e === "de" ? xi() : e === "es" ? Pi() : e === "fr" ? Mi() : e === "it" ? Ui() : e === "jp" ? Li() : e === "pl" ? ji() : e === "ru" ? Bi() : e === "uk" ? Ci() : zi()
  },
  qi = () => "Doxxing",
  Fi = () => "Doxxing",
  Ki = () => "人肉搜索",
  Vi = () => "Doxxing",
  Gi = () => "Doxxing",
  $i = () => "Doxxing",
  Wi = () => "Doxxing",
  Hi = () => "ドックス（Doxxing）",
  Yi = () => "Doxxing",
  Qi = () => "Докcинг",
  Ji = () => "Докcинг",
  Xi = () => "Doxxing",
  Zi = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? qi() : e === "pt" ? Fi() : e === "ch" ? Ki() : e === "de" ? Vi() : e === "es" ? Gi() : e === "fr" ? $i() : e === "it" ? Wi() : e === "jp" ? Hi() : e === "pl" ? Yi() : e === "ru" ? Qi() : e === "uk" ? Ji() : Xi()
  },
  eo = () => "Released other's personal information without their consent",
  to = () => "Vazar informações pessoais de terceiros sem consentimento",
  no = () => "在未获同意的情况下公开他人个人信息",
  ro = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  so = () => "Divulgó información personal de otra persona sin su consentimiento",
  ao = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  io = () => "Diffusione di informazioni personali di terzi senza consenso",
  oo = () => "他人の個人情報を同意なく公開した。",
  co = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  uo = () => "Публикация личной информации других людей без их согласия",
  lo = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  _o = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  fo = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? eo() : e === "pt" ? to() : e === "ch" ? no() : e === "de" ? ro() : e === "es" ? so() : e === "fr" ? ao() : e === "it" ? io() : e === "jp" ? oo() : e === "pl" ? co() : e === "ru" ? uo() : e === "uk" ? lo() : _o()
  },
  po = () => "This email is already in use.",
  ho = () => "Este e-mail já está em uso.",
  mo = () => "This email is already in use.",
  go = () => "This email is already in use.",
  wo = () => "Este correo electrónico ya está en uso.",
  yo = () => "This email is already in use.",
  bo = () => "Questa email è già in uso.",
  Eo = () => "This email is already in use.",
  vo = () => "This email is already in use.",
  To = () => "This email is already in use.",
  Oo = () => "This email is already in use.",
  So = () => "This email is already in use.",
  Io = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? po() : e === "pt" ? ho() : e === "ch" ? mo() : e === "de" ? go() : e === "es" ? wo() : e === "fr" ? yo() : e === "it" ? bo() : e === "jp" ? Eo() : e === "pl" ? vo() : e === "ru" ? To() : e === "uk" ? Oo() : So()
  },
  Ao = n => `This email is already in use by user #${n.userId}.`,
  No = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  ko = n => `This email is already in use by user #${n.userId}.`,
  Ro = n => `This email is already in use by user #${n.userId}.`,
  Do = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  xo = n => `This email is already in use by user #${n.userId}.`,
  Po = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  Mo = n => `This email is already in use by user #${n.userId}.`,
  Uo = n => `This email is already in use by user #${n.userId}.`,
  Lo = n => `This email is already in use by user #${n.userId}.`,
  jo = n => `This email is already in use by user #${n.userId}.`,
  Bo = n => `This email is already in use by user #${n.userId}.`,
  Co = (n, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ao(n) : e === "pt" ? No(n) : e === "ch" ? ko(n) : e === "de" ? Ro(n) : e === "es" ? Do(n) : e === "fr" ? xo(n) : e === "it" ? Po(n) : e === "jp" ? Mo(n) : e === "pl" ? Uo(n) : e === "ru" ? Lo(n) : e === "uk" ? jo(n) : Bo(n)
  },
  zo = () => "Enter a valid email address.",
  qo = () => "Informe um endereço de e-mail válido.",
  Fo = () => "Enter a valid email address.",
  Ko = () => "Enter a valid email address.",
  Vo = () => "Introduce una dirección de correo electrónico válida.",
  Go = () => "Enter a valid email address.",
  $o = () => "Inserisci un indirizzo email valido.",
  Wo = () => "Enter a valid email address.",
  Ho = () => "Enter a valid email address.",
  Yo = () => "Enter a valid email address.",
  Qo = () => "Enter a valid email address.",
  Jo = () => "Enter a valid email address.",
  Xo = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? zo() : e === "pt" ? qo() : e === "ch" ? Fo() : e === "de" ? Ko() : e === "es" ? Vo() : e === "fr" ? Go() : e === "it" ? $o() : e === "jp" ? Wo() : e === "pl" ? Ho() : e === "ru" ? Yo() : e === "uk" ? Qo() : Jo()
  },
  Zo = n => `Error while painting: ${n.err}`,
  ec = n => `Erro enquanto pinta: ${n.err}`,
  tc = n => `绘制时出错：${n.err}`,
  nc = n => `Fehler beim Malen: ${n.err}`,
  rc = n => `Error al pintar: ${n.err}`,
  sc = n => `Erreur lors de la peinture : ${n.err}`,
  ac = n => `Errore durante la pittura: ${n.err}`,
  ic = n => `ペイント中にエラーが発生しました: ${n.err}`,
  oc = n => `Błąd podczas malowania: ${n.err}`,
  cc = n => `Ошибка при рисовании: ${n.err}`,
  uc = n => `Помилка під час малювання: ${n.err}`,
  lc = n => `Lỗi khi tô: ${n.err}`,
  dc = (n, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Zo(n) : e === "pt" ? ec(n) : e === "ch" ? tc(n) : e === "de" ? nc(n) : e === "es" ? rc(n) : e === "fr" ? sc(n) : e === "it" ? ac(n) : e === "jp" ? ic(n) : e === "pl" ? oc(n) : e === "ru" ? cc(n) : e === "uk" ? uc(n) : lc(n)
  },
  _c = () => "Exceeded maximum number of characters",
  fc = () => "Excedeu o número máximo de caracteres permitidos",
  pc = () => "超出最大字符数",
  hc = () => "Maximale Zeichenanzahl überschritten",
  mc = () => "Se excedió el número máximo de caracteres",
  gc = () => "Nombre maximal de caractères dépassé",
  wc = () => "Numero massimo di caratteri superato",
  yc = () => "最大文字数を超過しました",
  bc = () => "Przekroczono maksymalną liczbę znaków",
  Ec = () => "Превышено максимальное количество символов",
  vc = () => "Перевищено максимальну кількість символів",
  Tc = () => "Đã vượt quá số ký tự tối đa",
  Oc = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? _c() : e === "pt" ? fc() : e === "ch" ? pc() : e === "de" ? hc() : e === "es" ? mc() : e === "fr" ? gc() : e === "it" ? wc() : e === "jp" ? yc() : e === "pl" ? bc() : e === "ru" ? Ec() : e === "uk" ? vc() : Tc()
  },
  Sc = () => "Verification code expired. Please request a new one.",
  Ic = () => "Código de verificação expirado. Por favor, solicite um novo.",
  Ac = () => "验证码已过期，请重新获取。",
  Nc = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  kc = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  Rc = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  Dc = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  xc = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  Pc = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  Mc = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  Uc = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  Lc = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  jc = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Sc() : e === "pt" ? Ic() : e === "ch" ? Ac() : e === "de" ? Nc() : e === "es" ? kc() : e === "fr" ? Rc() : e === "it" ? Dc() : e === "jp" ? xc() : e === "pl" ? Pc() : e === "ru" ? Mc() : e === "uk" ? Uc() : Lc()
  },
  Bc = () => "Griefing",
  Cc = () => "Griefing",
  zc = () => "破坏行为",
  qc = () => "Griefing",
  Fc = () => "Griefing",
  Kc = () => "Griefing",
  Vc = () => "Griefing",
  Gc = () => "グリーフィング",
  $c = () => "Griefing",
  Wc = () => "Гриферство",
  Hc = () => "Гріфінг",
  Yc = () => "Griefing",
  Qc = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Bc() : e === "pt" ? Cc() : e === "ch" ? zc() : e === "de" ? qc() : e === "es" ? Fc() : e === "fr" ? Kc() : e === "it" ? Vc() : e === "jp" ? Gc() : e === "pl" ? $c() : e === "ru" ? Wc() : e === "uk" ? Hc() : Yc()
  },
  Jc = () => "Messed up with other's artworks",
  Xc = () => "Estragou os desenhos dos outros",
  Zc = () => "破坏了他人的作品",
  eu = () => "Kunstwerke anderer beschädigt",
  tu = () => "Arruinó las obras de arte de otros",
  nu = () => "A abîmé les œuvres des autres",
  ru = () => "Ha rovinato i disegni degli altri",
  su = () => "他人の作品を荒らした",
  au = () => "Zniszczył prace innych",
  iu = () => "Испортил чужие рисунки",
  ou = () => "Зіпсував роботи інших",
  cu = () => "Phá hỏng tranh của người khác",
  uu = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Jc() : e === "pt" ? Xc() : e === "ch" ? Zc() : e === "de" ? eu() : e === "es" ? tu() : e === "fr" ? nu() : e === "it" ? ru() : e === "jp" ? su() : e === "pl" ? au() : e === "ru" ? iu() : e === "uk" ? ou() : cu()
  },
  lu = () => "Hate speech",
  du = () => "Discurso de Ódio",
  _u = () => "仇恨言论",
  fu = () => "Hassrede",
  pu = () => "Discurso de odio",
  hu = () => "Discours haineux",
  mu = () => "Discorso d'odio",
  gu = () => "ヘイトスピーチ",
  wu = () => "Mowa nienawiści",
  yu = () => "Речь ненависти",
  bu = () => "Мова ворожнечі",
  Eu = () => "Ngôn từ thù hằn",
  vu = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? lu() : e === "pt" ? du() : e === "ch" ? _u() : e === "de" ? fu() : e === "es" ? pu() : e === "fr" ? hu() : e === "it" ? mu() : e === "jp" ? gu() : e === "pl" ? wu() : e === "ru" ? yu() : e === "uk" ? bu() : Eu()
  },
  Tu = () => "Racism, homophobia, hate groups, ...",
  Ou = () => "Racismo, homofobia, grupos de ódio, ...",
  Su = () => "种族主义、恐同、仇恨团体等",
  Iu = () => "Rassismus, Homophobie, Hassgruppen, ...",
  Au = () => "Racismo, homofobia, grupos de odio, ...",
  Nu = () => "Racisme, homophobie, groupes haineux, ...",
  ku = () => "Razzismo, omofobia, gruppi d'odio, ...",
  Ru = () => "人種差別、同性愛差別、ヘイト団体など。",
  Du = () => "Rasizm, homofobia, grupy nienawiści, ...",
  xu = () => "Расизм, гомофобия, группы ненависти и т.п.",
  Pu = () => "Расизм, гомофобія, групи ненависті, ...",
  Mu = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  Uu = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Tu() : e === "pt" ? Ou() : e === "ch" ? Su() : e === "de" ? Iu() : e === "es" ? Au() : e === "fr" ? Nu() : e === "it" ? ku() : e === "jp" ? Ru() : e === "pl" ? Du() : e === "ru" ? xu() : e === "uk" ? Pu() : Mu()
  },
  Lu = () => "Inappropriate content",
  ju = () => "Conteúdo inapropriado",
  Bu = () => "不当内容",
  Cu = () => "Unangemessene Inhalte",
  zu = () => "Contenido inapropiado",
  qu = () => "Contenu inapproprié",
  Fu = () => "Contenuto inappropriato",
  Ku = () => "不適切なコンテンツ",
  Vu = () => "Nieodpowiednie treści",
  Gu = () => "Неприемлемый контент",
  $u = () => "Неприйнятний вміст",
  Wu = () => "Nội dung không phù hợp",
  Hu = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Lu() : e === "pt" ? ju() : e === "ch" ? Bu() : e === "de" ? Cu() : e === "es" ? zu() : e === "fr" ? qu() : e === "it" ? Fu() : e === "jp" ? Ku() : e === "pl" ? Vu() : e === "ru" ? Gu() : e === "uk" ? $u() : Wu()
  },
  Yu = () => "Explicit, hateful, or illegal content",
  Qu = () => "Conteúdo explícito, de ódio ou ilegal",
  Ju = () => "露骨、仇恨或非法内容",
  Xu = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  Zu = () => "Contenido explícito, de odio o ilegal",
  el = () => "Contenu explicite, haineux ou illégal",
  tl = () => "Contenuto esplicito, d'odio o illegale",
  nl = () => "露骨、差別的、または違法なコンテンツ",
  rl = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  sl = () => "Откровенный, разжигающий ненависть или незаконный контент",
  al = () => "Відвертий, ворожий або незаконний вміст",
  il = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  ol = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Yu() : e === "pt" ? Qu() : e === "ch" ? Ju() : e === "de" ? Xu() : e === "es" ? Zu() : e === "fr" ? el() : e === "it" ? tl() : e === "jp" ? nl() : e === "pl" ? rl() : e === "ru" ? sl() : e === "uk" ? al() : il()
  },
  cl = () => "Invalid captcha. Please try again.",
  ul = () => "Captcha inválido. Por favor, tente novamente.",
  ll = () => "验证码无效，请重试。",
  dl = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  _l = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  fl = () => "Captcha invalide. Veuillez réessayer.",
  pl = () => "Captcha non valido. Riprova.",
  hl = () => "キャプチャが無効です。もう一度お試しください。",
  ml = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  gl = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  wl = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  yl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  bl = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? cl() : e === "pt" ? ul() : e === "ch" ? ll() : e === "de" ? dl() : e === "es" ? _l() : e === "fr" ? fl() : e === "it" ? pl() : e === "jp" ? hl() : e === "pl" ? ml() : e === "ru" ? gl() : e === "uk" ? wl() : yl()
  },
  El = () => "Invalid challenge response",
  vl = () => "Resposta de desafio inválida",
  Tl = () => "质询响应无效",
  Ol = () => "Ungültige Challenge-Antwort",
  Sl = () => "Respuesta de desafío inválida",
  Il = () => "Réponse au défi invalide",
  Al = () => "Risposta alla sfida non valida",
  Nl = () => "無効なチャレンジ応答",
  kl = () => "Nieprawidłowa odpowiedź na wyzwanie",
  Rl = () => "Неверный ответ на вызов",
  Dl = () => "Недійсна відповідь на виклик",
  xl = () => "Phản hồi thử thách không hợp lệ",
  Pl = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? El() : e === "pt" ? vl() : e === "ch" ? Tl() : e === "de" ? Ol() : e === "es" ? Sl() : e === "fr" ? Il() : e === "it" ? Al() : e === "jp" ? Nl() : e === "pl" ? kl() : e === "ru" ? Rl() : e === "uk" ? Dl() : xl()
  },
  Ml = () => "The verification code is incorrect. Please check it and try again.",
  Ul = () => "Código inválido",
  Ll = () => "验证码不正确。请检查后重试。",
  jl = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  Bl = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  Cl = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  zl = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  ql = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Fl = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  Kl = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  Vl = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  Gl = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  $l = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ml() : e === "pt" ? Ul() : e === "ch" ? Ll() : e === "de" ? jl() : e === "es" ? Bl() : e === "fr" ? Cl() : e === "it" ? zl() : e === "jp" ? ql() : e === "pl" ? Fl() : e === "ru" ? Kl() : e === "uk" ? Vl() : Gl()
  },
  Wl = () => "Invalid discord.",
  Hl = () => "Discord inválido.",
  Yl = () => "无效的 Discord。",
  Ql = () => "Ungültiger Discord.",
  Jl = () => "Discord inválido.",
  Xl = () => "Discord invalide.",
  Zl = () => "Discord non valido.",
  ed = () => "無効なDiscordアカウントです。",
  td = () => "Nieprawidłowy Discord.",
  nd = () => "Неверный Discord.",
  rd = () => "Некоректний Discord.",
  sd = () => "Discord không hợp lệ.",
  ad = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Wl() : e === "pt" ? Hl() : e === "ch" ? Yl() : e === "de" ? Ql() : e === "es" ? Jl() : e === "fr" ? Xl() : e === "it" ? Zl() : e === "jp" ? ed() : e === "pl" ? td() : e === "ru" ? nd() : e === "uk" ? rd() : sd()
  },
  id = () => "The name contains disallowed characters or words. Please choose a different name.",
  od = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  cd = () => "名称包含禁止的字符或词语，请选择其他名称。",
  ud = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  ld = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  dd = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  _d = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  fd = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  pd = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  hd = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  md = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  gd = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Lt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? id() : e === "pt" ? od() : e === "ch" ? cd() : e === "de" ? ud() : e === "es" ? ld() : e === "fr" ? dd() : e === "it" ? _d() : e === "jp" ? fd() : e === "pl" ? pd() : e === "ru" ? hd() : e === "uk" ? md() : gd()
  },
  wd = () => "Please enter a valid phone number with country code.",
  yd = () => "Insira um número de telefone válido com código do país.",
  bd = () => "请输入带国家代码的有效电话号码。",
  Ed = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  vd = () => "Introduce un número de teléfono válido con código de país.",
  Td = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  Od = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  Sd = () => "国番号付きの有効な電話番号を入力してください。",
  Id = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  Ad = () => "Введите действительный номер телефона с кодом страны.",
  Nd = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  kd = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  Rd = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? wd() : e === "pt" ? yd() : e === "ch" ? bd() : e === "de" ? Ed() : e === "es" ? vd() : e === "fr" ? Td() : e === "it" ? Od() : e === "jp" ? Sd() : e === "pl" ? Id() : e === "ru" ? Ad() : e === "uk" ? Nd() : kd()
  },
  Dd = () => "This phone number is not supported. Please use a mobile number that can receive SMS.",
  xd = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  Pd = () => "不支持此电话号码。请使用可以接收短信的手机号码。",
  Md = () => "Diese Telefonnummer wird nicht unterstützt. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  Ud = () => "Este número de teléfono no es compatible. Por favor, usa un número de móvil que pueda recibir SMS.",
  Ld = () => "Ce numéro de téléphone n'est pas pris en charge. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  jd = () => "Questo numero di telefono non è supportato. Utilizza un numero di cellulare che possa ricevere SMS.",
  Bd = () => "この電話番号はサポートされていません。SMSを受信できる携帯電話番号をご使用ください。",
  Cd = () => "Ten numer telefonu nie jest obsługiwany. Użyj numeru komórkowego, który może odbierać SMS-y.",
  zd = () => "Этот номер телефона не поддерживается. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  qd = () => "Цей номер телефону не підтримується. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  Fd = () => "Số điện thoại này không được hỗ trợ. Vui lòng sử dụng số di động có thể nhận SMS.",
  Kd = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Dd() : e === "pt" ? xd() : e === "ch" ? Pd() : e === "de" ? Md() : e === "es" ? Ud() : e === "fr" ? Ld() : e === "it" ? jd() : e === "jp" ? Bd() : e === "pl" ? Cd() : e === "ru" ? zd() : e === "uk" ? qd() : Fd()
  },
  Vd = () => "The new leader must be a member of the alliance",
  Gd = () => "O novo líder deve ser um membro da aliança",
  $d = () => "新盟主必须是联盟成员",
  Wd = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Hd = () => "El nuevo líder debe ser miembro de la alianza",
  Yd = () => "Le nouveau chef doit être membre de l’alliance",
  Qd = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Jd = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Xd = () => "Nowy lider musi być członkiem sojuszu",
  Zd = () => "Новый лидер должен быть участником альянса",
  e_ = () => "Новий лідер має бути учасником альянсу",
  t_ = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  n_ = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Vd() : e === "pt" ? Gd() : e === "ch" ? $d() : e === "de" ? Wd() : e === "es" ? Hd() : e === "fr" ? Yd() : e === "it" ? Qd() : e === "jp" ? Jd() : e === "pl" ? Xd() : e === "ru" ? Zd() : e === "uk" ? e_() : t_()
  },
  r_ = () => "Leaderboard is temporarily disabled",
  s_ = () => "O ranking está temporariamente desativado",
  a_ = () => "排行榜已暂时停用",
  i_ = () => "Die Bestenliste ist vorübergehend deaktiviert",
  o_ = () => "La clasificación está deshabilitada temporalmente",
  c_ = () => "Le classement est temporairement désactivé",
  u_ = () => "La classifica è temporaneamente disattivata",
  l_ = () => "ランキングは一時的に無効になっています。",
  d_ = () => "Ranking jest tymczasowo wyłączony",
  __ = () => "Таблица лидеров временно отключена",
  f_ = () => "Таблиця лідерів тимчасово вимкнена",
  p_ = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  Q = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? r_() : e === "pt" ? s_() : e === "ch" ? a_() : e === "de" ? i_() : e === "es" ? o_() : e === "fr" ? c_() : e === "it" ? u_() : e === "jp" ? l_() : e === "pl" ? d_() : e === "ru" ? __() : e === "uk" ? f_() : p_()
  },
  h_ = () => "Location name is too big (max. 128 characters)",
  m_ = () => "Nome da localização é grande demais (max. 128 caracteres)",
  g_ = () => "位置名称过长（最大 128 个字符）",
  w_ = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  y_ = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  b_ = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  E_ = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  v_ = () => "場所の名前が長すぎます（最大128文字）。",
  T_ = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  O_ = () => "Название локации слишком длинное (макс. 128 символов)",
  S_ = () => "Назва локації надто довга (макс. 128 символів)",
  I_ = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  A_ = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? h_() : e === "pt" ? m_() : e === "ch" ? g_() : e === "de" ? w_() : e === "es" ? y_() : e === "fr" ? b_() : e === "it" ? E_() : e === "jp" ? v_() : e === "pl" ? T_() : e === "ru" ? O_() : e === "uk" ? S_() : I_()
  },
  N_ = () => "Multi-accounting",
  k_ = () => "Múltiplas contas",
  R_ = () => "多账号",
  D_ = () => "Multi-Accounting",
  x_ = () => "Multi-cuentas",
  P_ = () => "Multi-comptes",
  M_ = () => "Multi-account",
  U_ = () => "複数アカウント使用",
  L_ = () => "Multi-konta",
  j_ = () => "Мультиаккаунт",
  B_ = () => "Мультиакаунтинг",
  C_ = () => "Nhiều tài khoản",
  z_ = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? N_() : e === "pt" ? k_() : e === "ch" ? R_() : e === "de" ? D_() : e === "es" ? x_() : e === "fr" ? P_() : e === "it" ? M_() : e === "jp" ? U_() : e === "pl" ? L_() : e === "ru" ? j_() : e === "uk" ? B_() : C_()
  },
  q_ = () => "Use more than one account to paint pixels",
  F_ = () => "Usar mais de uma conta para pintar",
  K_ = () => "使用多个账号绘制像素",
  V_ = () => "Mehr als ein Konto zum Malen verwenden",
  G_ = () => "Uso de más de una cuenta para pintar píxeles",
  $_ = () => "Utiliser plus d’un compte pour peindre",
  W_ = () => "Usare più di un account per dipingere",
  H_ = () => "複数のアカウントを使ってピクセルを塗った。",
  Y_ = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Q_ = () => "Использование более одного аккаунта для рисования",
  J_ = () => "Використання більше ніж одного акаунта для малювання",
  X_ = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Z_ = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? q_() : e === "pt" ? F_() : e === "ch" ? K_() : e === "de" ? V_() : e === "es" ? G_() : e === "fr" ? $_() : e === "it" ? W_() : e === "jp" ? H_() : e === "pl" ? Y_() : e === "ru" ? Q_() : e === "uk" ? J_() : X_()
  },
  ef = n => `You can change your name again in ${n.days} days`,
  tf = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  nf = n => `你可以在 ${n.days} 天后再次修改名称`,
  rf = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  sf = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  af = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  of = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  cf = n => `${n.days}日後に再び名前を変更できます。`,
  uf = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  lf = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  df = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  _f = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  ff = (n, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ef(n) : e === "pt" ? tf(n) : e === "ch" ? nf(n) : e === "de" ? rf(n) : e === "es" ? sf(n) : e === "fr" ? af(n) : e === "it" ? of(n) : e === "jp" ? cf(n) : e === "pl" ? uf(n) : e === "ru" ? lf(n) : e === "uk" ? df(n) : _f(n)
  },
  pf = () => "No internet access or the servers are offline. Try again later.",
  hf = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  mf = () => "没有网络连接或服务器已离线。请稍后重试。",
  gf = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  wf = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  yf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  bf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Ef = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  vf = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Tf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Of = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Sf = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  If = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? pf() : e === "pt" ? hf() : e === "ch" ? mf() : e === "de" ? gf() : e === "es" ? wf() : e === "fr" ? yf() : e === "it" ? bf() : e === "jp" ? Ef() : e === "pl" ? vf() : e === "ru" ? Tf() : e === "uk" ? Of() : Sf()
  },
  Af = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Nf = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  kf = () => "您无权验证电话号码。请尝试刷新页面。",
  Rf = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Df = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  xf = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Pf = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Mf = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Uf = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Lf = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  jf = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  Bf = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  Cf = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Af() : e === "pt" ? Nf() : e === "ch" ? kf() : e === "de" ? Rf() : e === "es" ? Df() : e === "fr" ? xf() : e === "it" ? Pf() : e === "jp" ? Mf() : e === "pl" ? Uf() : e === "ru" ? Lf() : e === "uk" ? jf() : Bf()
  },
  zf = () => "Operation not allowed. Maybe you have too many favorite locations.",
  qf = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ff = () => "操作不被允许。你的收藏位置可能过多。",
  Kf = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Vf = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Gf = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  $f = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Wf = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Hf = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Yf = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Qf = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Jf = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Xf = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? zf() : e === "pt" ? qf() : e === "ch" ? Ff() : e === "de" ? Kf() : e === "es" ? Vf() : e === "fr" ? Gf() : e === "it" ? $f() : e === "jp" ? Wf() : e === "pl" ? Hf() : e === "ru" ? Yf() : e === "uk" ? Qf() : Jf()
  },
  Zf = () => "You are trying to paint with a color you do not own",
  ep = () => "Você está tentando pintar com uma cor que não possui",
  tp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  np = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  rp = () => "Estás intentando pintar con un color que no posees",
  sp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  ap = () => "Stai cercando di dipingere con un colore che non possiedi",
  ip = () => "所持していない色で塗ろうとしています。",
  op = () => "Próbujesz malować kolorem, którego nie posiadasz",
  cp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  up = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  lp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  jt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Zf() : e === "pt" ? ep() : e === "ch" ? tp() : e === "de" ? np() : e === "es" ? rp() : e === "fr" ? sp() : e === "it" ? ap() : e === "jp" ? ip() : e === "pl" ? op() : e === "ru" ? cp() : e === "uk" ? up() : lp()
  },
  dp = () => "Phone already used",
  _p = () => "Telefone já usado",
  fp = () => "电话号码已被使用",
  pp = () => "Telefonnummer bereits verwendet",
  hp = () => "Teléfono ya utilizado",
  mp = () => "Téléphone déjà utilisé",
  gp = () => "Telefono già utilizzato",
  wp = () => "この電話番号は既に使用されています。",
  yp = () => "Numer telefonu jest już używany",
  bp = () => "Телефон уже используется",
  Ep = () => "Номер телефону вже використовується",
  vp = () => "Số điện thoại đã được sử dụng",
  Tp = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? dp() : e === "pt" ? _p() : e === "ch" ? fp() : e === "de" ? pp() : e === "es" ? hp() : e === "fr" ? mp() : e === "it" ? gp() : e === "jp" ? wp() : e === "pl" ? yp() : e === "ru" ? bp() : e === "uk" ? Ep() : vp()
  },
  Op = () => "This phone number's region is not supported",
  Sp = () => "A região deste número de telefone não é suportada",
  Ip = () => "此电话号码的地区不受支持",
  Ap = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  Np = () => "La región de este número de teléfono no es compatible",
  kp = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Rp = () => "La regione di questo numero di telefono non è supportata",
  Dp = () => "この電話番号の地域はサポートされていません",
  xp = () => "Region tego numeru telefonu nie jest obsługiwany",
  Pp = () => "Регион этого номера телефона не поддерживается",
  Mp = () => "Регіон цього номера телефону не підтримується",
  Up = () => "Vùng của số điện thoại này không được hỗ trợ",
  Lp = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Op() : e === "pt" ? Sp() : e === "ch" ? Ip() : e === "de" ? Ap() : e === "es" ? Np() : e === "fr" ? kp() : e === "it" ? Rp() : e === "jp" ? Dp() : e === "pl" ? xp() : e === "ru" ? Pp() : e === "uk" ? Mp() : Up()
  },
  jp = () => "Refresh your page to get the latest update",
  Bp = () => "Recarregue sua página para obter as últimas atualizações",
  Cp = () => "刷新页面以获取最新更新",
  zp = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  qp = () => "Actualiza la página para obtener la última versión",
  Fp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Kp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Vp = () => "最新の状態にするにはページを再読み込みしてください。",
  Gp = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  $p = () => "Обновите страницу, чтобы получить последние изменения",
  Wp = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Hp = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Bt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? jp() : e === "pt" ? Bp() : e === "ch" ? Cp() : e === "de" ? zp() : e === "es" ? qp() : e === "fr" ? Fp() : e === "it" ? Kp() : e === "jp" ? Vp() : e === "pl" ? Gp() : e === "ru" ? $p() : e === "uk" ? Wp() : Hp()
  },
  Yp = () => "The request timed out. Please try again.",
  Qp = () => "A solicitação expirou. Por favor, tente novamente.",
  Jp = () => "请求超时。请重试。",
  Xp = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Zp = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  eh = () => "La requête a expiré. Veuillez réessayer.",
  th = () => "La richiesta è scaduta. Riprova.",
  nh = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  rh = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  sh = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  ah = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  ih = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  oh = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Yp() : e === "pt" ? Qp() : e === "ch" ? Jp() : e === "de" ? Xp() : e === "es" ? Zp() : e === "fr" ? eh() : e === "it" ? th() : e === "jp" ? nh() : e === "pl" ? rh() : e === "ru" ? sh() : e === "uk" ? ah() : ih()
  },
  ch = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  uh = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  lh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  dh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  _h = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  fh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ph = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  hh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  mh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  gh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  wh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  yh = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  bh = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ch() : e === "pt" ? uh() : e === "ch" ? lh() : e === "de" ? dh() : e === "es" ? _h() : e === "fr" ? fh() : e === "it" ? ph() : e === "jp" ? hh() : e === "pl" ? mh() : e === "ru" ? gh() : e === "uk" ? wh() : yh()
  },
  Eh = () => "The service is currently unavailable. Please try again later.",
  vh = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Th = () => "服务当前不可用。请稍后再试。",
  Oh = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Sh = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Ih = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Ah = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  Nh = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  kh = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Rh = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Dh = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  xh = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Ph = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Eh() : e === "pt" ? vh() : e === "ch" ? Th() : e === "de" ? Oh() : e === "es" ? Sh() : e === "fr" ? Ih() : e === "it" ? Ah() : e === "jp" ? Nh() : e === "pl" ? kh() : e === "ru" ? Rh() : e === "uk" ? Dh() : xh()
  },
  Mh = () => "Too many attempts. Please try again later",
  Uh = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Lh = () => "尝试次数过多，请稍后再试",
  jh = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Bh = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  Ch = () => "Trop de tentatives. Veuillez réessayer plus tard",
  zh = () => "Troppi tentativi. Riprova più tardi.",
  qh = () => "試行回数が多すぎます。後で再度お試しください。",
  Fh = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Kh = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Vh = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  Gh = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Ct = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Mh() : e === "pt" ? Uh() : e === "ch" ? Lh() : e === "de" ? jh() : e === "es" ? Bh() : e === "fr" ? Ch() : e === "it" ? zh() : e === "jp" ? qh() : e === "pl" ? Fh() : e === "ru" ? Kh() : e === "uk" ? Vh() : Gh()
  },
  $h = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  Wh = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  Hh = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  Yh = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  Qh = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  Jh = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  Xh = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  Zh = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  em = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  tm = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  nm = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  rm = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  sm = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? $h() : e === "pt" ? Wh() : e === "ch" ? Hh() : e === "de" ? Yh() : e === "es" ? Qh() : e === "fr" ? Jh() : e === "it" ? Xh() : e === "jp" ? Zh() : e === "pl" ? em() : e === "ru" ? tm() : e === "uk" ? nm() : rm()
  },
  am = () => "The typed username does not match your current username.",
  im = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  om = () => "输入的用户名与当前用户名不匹配。",
  cm = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  um = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  lm = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  dm = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  _m = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  fm = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  pm = () => "Введённое имя пользователя не совпадает с текущим.",
  hm = () => "Введене імʼя користувача не збігається з поточним.",
  mm = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  gm = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? am() : e === "pt" ? im() : e === "ch" ? om() : e === "de" ? cm() : e === "es" ? um() : e === "fr" ? lm() : e === "it" ? dm() : e === "jp" ? _m() : e === "pl" ? fm() : e === "ru" ? pm() : e === "uk" ? hm() : mm()
  },
  wm = () => "Unexpected server error. Try again later.",
  ym = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  bm = () => "服务器出现意外错误。请稍后再试。",
  Em = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  vm = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Tm = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Om = () => "Errore imprevisto del server. Riprova più tardi.",
  Sm = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Im = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Am = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Nm = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  km = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  u = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? wm() : e === "pt" ? ym() : e === "ch" ? bm() : e === "de" ? Em() : e === "es" ? vm() : e === "fr" ? Tm() : e === "it" ? Om() : e === "jp" ? Sm() : e === "pl" ? Im() : e === "ru" ? Am() : e === "uk" ? Nm() : km()
  },
  Rm = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Dm = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  xm = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Pm = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Mm = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  Um = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  Lm = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  jm = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Bm = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Cm = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  zm = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  qm = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Fm = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Rm() : e === "pt" ? Dm() : e === "ch" ? xm() : e === "de" ? Pm() : e === "es" ? Mm() : e === "fr" ? Um() : e === "it" ? Lm() : e === "jp" ? jm() : e === "pl" ? Bm() : e === "ru" ? Cm() : e === "uk" ? zm() : qm()
  },
  Km = () => "VPN or proxy detected. Please disable your VPN and try again.",
  Vm = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  Gm = () => "检测到VPN或代理。请关闭VPN后重试。",
  $m = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  Wm = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  Hm = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  Ym = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  Qm = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  Jm = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  Xm = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  Zm = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  eg = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  tg = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Km() : e === "pt" ? Vm() : e === "ch" ? Gm() : e === "de" ? $m() : e === "es" ? Wm() : e === "fr" ? Hm() : e === "it" ? Ym() : e === "jp" ? Qm() : e === "pl" ? Jm() : e === "ru" ? Xm() : e === "uk" ? Zm() : eg()
  },
  ng = () => "Failed to load WebAssembly module. Try to use another browser.",
  rg = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  sg = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  ag = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  ig = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  og = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  cg = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  ug = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  lg = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  dg = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  _g = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  fg = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  pg = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ng() : e === "pt" ? rg() : e === "ch" ? sg() : e === "de" ? ag() : e === "es" ? ig() : e === "fr" ? og() : e === "it" ? cg() : e === "jp" ? ug() : e === "pl" ? lg() : e === "ru" ? dg() : e === "uk" ? _g() : fg()
  },
  hg = () => "You already have this item. Please refresh the page.",
  mg = () => "Você já possui este item. Atualize a página.",
  gg = () => "你已经拥有此物品。请刷新页面。",
  wg = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  yg = () => "Ya tienes este ítem. Actualiza la página.",
  bg = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Eg = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  vg = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Tg = () => "Masz już ten przedmiot. Odśwież stronę.",
  Og = () => "У вас уже есть этот предмет. Обновите страницу.",
  Sg = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Ig = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  zt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? hg() : e === "pt" ? mg() : e === "ch" ? gg() : e === "de" ? wg() : e === "es" ? yg() : e === "fr" ? bg() : e === "it" ? Eg() : e === "jp" ? vg() : e === "pl" ? Tg() : e === "ru" ? Og() : e === "uk" ? Sg() : Ig()
  },
  Ag = () => "You are already in an alliance",
  Ng = () => "Você já está em uma aliança",
  kg = () => "你已经在一个联盟中",
  Rg = () => "Du bist bereits in einer Allianz",
  Dg = () => "Ya estás en una alianza",
  xg = () => "Vous êtes déjà dans une alliance",
  Pg = () => "Sei già in un'alleanza",
  Mg = () => "すでにアライアンスに所属しています。",
  Ug = () => "Jesteś już w sojuszu",
  Lg = () => "Вы уже состоите в альянсе",
  jg = () => "Ви вже перебуваєте в альянсі",
  Bg = () => "Bạn đã ở trong một liên minh",
  Cg = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ag() : e === "pt" ? Ng() : e === "ch" ? kg() : e === "de" ? Rg() : e === "es" ? Dg() : e === "fr" ? xg() : e === "it" ? Pg() : e === "jp" ? Mg() : e === "pl" ? Ug() : e === "ru" ? Lg() : e === "uk" ? jg() : Bg()
  },
  zg = () => "You are not allowed to do this",
  qg = () => "Você não tem permissão para fazer isso",
  Fg = () => "你无权执行此操作",
  Kg = () => "Du bist dazu nicht berechtigt",
  Vg = () => "No tienes permiso para hacer esto",
  Gg = () => "Vous n’êtes pas autorisé à faire cela",
  $g = () => "Non hai il permesso di farlo",
  Wg = () => "この操作を行う権限がありません。",
  Hg = () => "Nie masz uprawnień, aby to zrobić",
  Yg = () => "У вас нет прав для этого действия",
  Qg = () => "Ви не маєте права це робити",
  Jg = () => "Bạn không có quyền làm việc này",
  J = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? zg() : e === "pt" ? qg() : e === "ch" ? Fg() : e === "de" ? Kg() : e === "es" ? Vg() : e === "fr" ? Gg() : e === "it" ? $g() : e === "jp" ? Wg() : e === "pl" ? Hg() : e === "ru" ? Yg() : e === "uk" ? Qg() : Jg()
  },
  Xg = () => "You do not have enough Droplets to buy this item.",
  Zg = () => "Você não tem gotas suficientes para comprar este item.",
  ew = () => "你的水滴不足，无法购买此物品。",
  tw = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  nw = () => "No tienes suficientes gotas para comprar este ítem.",
  rw = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  sw = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  aw = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  iw = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  ow = () => "У вас недостаточно droplets для покупки этого предмета.",
  cw = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  uw = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  qt = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Xg() : e === "pt" ? Zg() : e === "ch" ? ew() : e === "de" ? tw() : e === "es" ? nw() : e === "fr" ? rw() : e === "it" ? sw() : e === "jp" ? aw() : e === "pl" ? iw() : e === "ru" ? ow() : e === "uk" ? cw() : uw()
  },
  lw = () => "You need to be logged in to paint",
  dw = () => "Você precisa estar conectado para pintar",
  _w = () => "你需要登录才能进行绘制",
  fw = () => "Du musst eingeloggt sein, um zu malen",
  pw = () => "Debes iniciar sesión para pintar",
  hw = () => "Vous devez être connecté pour peindre",
  mw = () => "Devi avere effettuato l'accesso per dipingere",
  gw = () => "ペイントするにはログインが必要です。",
  ww = () => "Musisz być zalogowany, aby malować",
  yw = () => "Чтобы рисовать, нужно войти в аккаунт",
  bw = () => "Щоб малювати, необхідно увійти в акаунт",
  Ew = () => "Bạn cần đăng nhập để tô",
  Ft = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? lw() : e === "pt" ? dw() : e === "ch" ? _w() : e === "de" ? fw() : e === "es" ? pw() : e === "fr" ? hw() : e === "it" ? mw() : e === "jp" ? gw() : e === "pl" ? ww() : e === "ru" ? yw() : e === "uk" ? bw() : Ew()
  },
  vw = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Tw = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Ow = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Sw = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Iw = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Aw = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Nw = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  kw = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Rw = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Dw = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  xw = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Pw = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Mw = (n = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? vw() : e === "pt" ? Tw() : e === "ch" ? Ow() : e === "de" ? Sw() : e === "es" ? Iw() : e === "fr" ? Aw() : e === "it" ? Nw() : e === "jp" ? kw() : e === "pl" ? Rw() : e === "ru" ? Dw() : e === "uk" ? xw() : Pw()
  },
  Uw = n => `Your account has been suspended out until ${n.until}`,
  Lw = n => `A sua conta está suspensa até ${n.until}`,
  jw = n => `你的账号已被暂停至 ${n.until}`,
  Bw = n => `Dein Konto ist gesperrt bis ${n.until}`,
  Cw = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  zw = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  qw = n => `Il tuo account è sospeso fino al ${n.until}`,
  Fw = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  Kw = n => `Twoje konto zostało zawieszone do ${n.until}`,
  Vw = n => `Ваш аккаунт заблокирован до ${n.until}`,
  Gw = n => `Ваш акаунт призупинено до ${n.until}`,
  $w = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  Kt = (n, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Uw(n) : e === "pt" ? Lw(n) : e === "ch" ? jw(n) : e === "de" ? Bw(n) : e === "es" ? Cw(n) : e === "fr" ? zw(n) : e === "it" ? qw(n) : e === "jp" ? Fw(n) : e === "pl" ? Kw(n) : e === "ru" ? Vw(n) : e === "uk" ? Gw(n) : $w(n)
  },
  ee = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function Xy(n) {
  const t = Math.floor(n / ee.hour);
  n -= t * ee.hour;
  const e = Math.floor(n / ee.minute);
  n -= e * ee.minute;
  const s = Math.floor(n / ee.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${s}` : `${e}:${s}`
}

function Zy(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    s = String(n.getHours()).padStart(2, "0"),
    a = String(n.getMinutes()).padStart(2, "0"),
    o = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${s}:${a}:${o}`
}
const eb = {
    griefing: Qc(),
    "multi-accounting": z_(),
    "hate-speech": vu(),
    bot: Us(),
    doxxing: Zi(),
    "inappropriate-content": Hu(),
    other: oa()
  },
  tb = {
    doxxing: fo(),
    "hate-speech": Uu(),
    griefing: uu(),
    "multi-accounting": Z_(),
    bot: Hs(),
    "inappropriate-content": ol(),
    other: ba()
  },
  nb = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Vt = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  rb = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  Ww = 365 * ee.day;

function cn(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function sb(n, t = Date.now()) {
  const e = cn(n);
  return e === null ? !1 : e - t >= Ww
}

function ab(n, t = Date.now()) {
  const e = cn(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    s = Math.floor(r / 1440),
    a = Math.floor(r % 1440 / 60),
    o = r % 60;
  return {
    days: s,
    hours: a,
    minutes: o
  }
}
const Hw = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Yw = 4,
  Qw = 6e3,
  Jw = [{
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
  Xw = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Zw = {
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
  ey = {
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
  ty = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  ny = {
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
  ry = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  se = {
    seasons: Hw,
    regionSize: Yw,
    refreshIntervalMs: Qw,
    colors: Jw,
    errors: Xw,
    items: Zw,
    products: ey,
    countries: ty,
    permissions: ny,
    settings: ry
  },
  ot = se,
  sy = se.seasons,
  un = se.seasons.length - 1,
  ib = se.seasons[un].zoom,
  ob = se.seasons[un].tileSize,
  cb = se.permissions,
  ay = se.settings;

function ub(n) {
  return ot.countries[n - 1]
}
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Gt(n, t) {
  const e = {};
  for (const r of n) {
    const s = t(r);
    let a = e[s];
    a ? a.push(r) : e[s] = [r]
  }
  return e
}

function lb(n, t) {
  const e = {};
  for (const r of n) {
    const s = t(r);
    e[s] = r
  }
  return e
}
var De, xe;
class iy {
  constructor(t) {
    I(this, De, P(!0));
    I(this, xe, P(null));
    this.url = t
  }
  get online() {
    return N(p(this, De))
  }
  set online(t) {
    k(p(this, De), t, !0)
  }
  get serverTimeOffsetMs() {
    return N(p(this, xe))
  }
  set serverTimeOffsetMs(t) {
    k(p(this, xe), t, !0)
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
    const e = Gt(t, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
      r = {
        season: t[0].season,
        tiles: Object.values(e).map(c => ({
          x: c[0].tile[0],
          y: c[0].tile[1],
          pixels: {
            x: c.map(_ => _.pixel[0]),
            y: c.map(_ => _.pixel[1]),
            colors: c.map(_ => _.colorIdx)
          }
        }))
      },
      s = JSON.stringify(r),
      a = await pe.getHeaders(s),
      o = await this.request("/paint", {
        method: "POST",
        body: s,
        headers: a,
        credentials: "include"
      });
    if (o.status !== i.OK) {
      if (o.status === i.UNAUTHORIZED) throw new Error(Ft());
      if (o.status === i.FORBIDDEN) {
        if (o.headers.get("cf-mitigated") === "challenge") throw new Error(Ut());
        const c = await o.json();
        if ((c == null ? void 0 : c.error) === "timeout") {
          const _ = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(Kt({
            until: _.toLocaleString()
          }))
        }
        if ((c == null ? void 0 : c.error) === "refresh") throw new Error(Bt());
        if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(jt());
        if ((c == null ? void 0 : c.error) === "event-pixel-present") throw new Error(Pt());
        if ((c == null ? void 0 : c.error) === "challenge-required")
          if (c.tier) {
            if (await Dt(c.tier)) return this.paint(t);
            throw new Error(rt())
          } else console.error("Challenge required but no tier provided", c);
        oe.refresh()
      } else throw new Error(u())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, s, a) => `/staff/tools/select-area/clear/s${r}/pixel/${s}/${a}`, e)
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
    if (e.status !== i.OK) throw new l(u(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: r = "depth",
      beforeDepth: s,
      beforeTimestamp: a
    } = e, o = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: s,
        beforeTimestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== i.OK) throw new l(u(), o.status);
    return o.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: s,
      timestamp: a
    } = e, o = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: s,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== i.OK) throw new l(u(), o.status);
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
    if (r.status === i.BAD_REQUEST) {
      const s = await r.json(),
        a = (s == null ? void 0 : s.error) ?? "";
      throw a === "timelapse_too_many_events" ? new l(bh(), i.BAD_REQUEST) : new l(typeof a == "string" && a ? a : u(), i.BAD_REQUEST)
    }
    if (r.status !== i.OK) throw new l(u(), r.status);
    return r.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: s,
      timestamp: a
    } = e, o = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: s,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== i.OK) throw new l(u(), o.status);
    return o.json()
  }
  async sendPaintRequests(t, e, r, s) {
    const a = Gt(t, _ => `t=(${_.tile[0]},${_.tile[1]}),s=${_.season}`),
      c = (await Promise.all(Object.values(a).map(async _ => {
        const [d, g] = _[0].tile, h = _[0].season, R = {
          colors: _.map(T => T.colorIdx),
          coords: _.flatMap(T => T.pixel),
          csid: r
        }, M = JSON.stringify(R), A = e(h, d, g), b = await pe.getHeaders(M);
        return this.request(A, {
          method: "POST",
          body: M,
          headers: b,
          credentials: "include"
        })
      }))).filter(_ => _.status !== i.OK);
    if (c.length) {
      const _ = c[0];
      if (_.status === i.UNAUTHORIZED) throw new Error(Ft());
      if (_.status === i.FORBIDDEN) {
        if (_.headers.get("cf-mitigated") === "challenge") throw new Error(Ut());
        const d = await _.json();
        if ((d == null ? void 0 : d.error) === "timeout") {
          const g = new Date(Date.now() + ((d == null ? void 0 : d.durationMs) ?? 0));
          throw new Error(Kt({
            until: g.toLocaleString()
          }))
        }
        if ((d == null ? void 0 : d.error) === "refresh") throw new Error(Bt());
        if ((d == null ? void 0 : d.error) === "color-not-owned") throw new Error(jt());
        if ((d == null ? void 0 : d.error) === "event-pixel-present") throw new Error(Pt());
        oe.refresh()
      } else throw new Error(u())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const s = oy(t),
      a = await cy(s),
      o = new FormData;
    o.append("fingerprint", e), o.append("season", s.season.toString()), o.append("px0", s.offsetX.toString()), o.append("py0", s.offsetY.toString()), o.append("width", s.width.toString()), o.append("height", s.height.toString()), o.append("pixels", t.length.toString()), o.append("bitmap", a, "auto-painter.png"), o.append("userId", r.toString());
    const c = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: o,
      credentials: "include"
    });
    if (c.status === i.FORBIDDEN) throw new Error("Auto painter is restricted to administrators.");
    if (c.status !== i.OK) throw new Error(u());
    return c.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, r],
    pixel: [s, a]
  }) {
    const o = new URLSearchParams;
    o.set("x", String(s)), o.set("y", String(a));
    const c = await this.request(`/s${t}/pixel/${e}/${r}?${o.toString()}`, {
      credentials: "include"
    });
    if (c.status !== i.OK) {
      const _ = await c.text();
      throw new Error(dc({
        err: _
      }))
    }
    return c.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [s, a],
    p1: [o, c]
  }) {
    const _ = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${s}&y0=${a}&x1=${o}&y1=${c}`, {
      credentials: "include"
    });
    if (_.status !== i.OK) {
      const A = await _.text();
      throw console.error("Error while fetching pixel area info", A), new Error(u())
    }
    const d = await _.arrayBuffer(),
      g = new DataView(d),
      h = Math.floor(d.byteLength / 5),
      R = new Uint32Array(h),
      M = new Uint8Array(h);
    for (let A = 0; A < h; A++) {
      const b = A * 5;
      R[A] = g.getUint32(b, !0), M[A] = g.getUint8(b + 4)
    }
    return {
      paintedBy: R,
      colors: M
    }
  }
  async me() {
    const t = await this.request("/me", {
      credentials: "include"
    });
    if (t.status === i.OK) return await t.json()
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(await t.text());
    return await t.json()
  }
  async refreshPaymentSession(t) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(t)}`, {
      method: "POST",
      credentials: "include"
    })).status === i.OK
  }
  async getOtpCooldown() {
    const t = await this.request("/anticheat/otp/cooldown", {
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(u());
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
    if (e.status === i.BAD_REQUEST) throw new Error(Rd());
    if (e.status === i.CONFLICT) throw new Error(Tp());
    if (e.status === i.FORBIDDEN) throw new Error(Cf());
    if (e.status === i.TOO_MANY_REQUESTS) throw new Error(Ct());
    if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Lp());
    if (e.status === i.LOCKED) throw new Error(Fm());
    if (e.status === i.UNPROCESSABLE_ENTITY) throw new Error(Kd());
    if (e.status === i.NOT_ACCEPTABLE) throw new Error(tg());
    if (e.status === i.PRECONDITION_FAILED) throw new Error(Ni());
    if (e.status !== i.OK) throw new Error(u());
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
        "x-fp": await Ye()
      }
    });
    if (t.type === "otp") {
      if (r.status === i.GONE) throw new Error(jc());
      if (r.status === i.BAD_REQUEST) throw new Error($l());
      if (r.status === i.TOO_MANY_REQUESTS) throw new Error(Ct());
      if (r.status !== i.OK) throw new Error(u())
    } else {
      if (r.status === i.BAD_REQUEST) throw new Error(Pl());
      if (r.status !== i.OK) throw new Error(u())
    }
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === i.BAD_REQUEST) {
      const r = await e.json(),
        s = (r == null ? void 0 : r.error) ?? "";
      if (s === "invalid_name") throw new Error(Lt());
      if (s === "invalid_discord") throw new Error(ad());
      if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
        const a = parseInt(s.split(":")[1] ?? "0", 10);
        throw new Error(ff({
          days: a
        }))
      }
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== i.OK) throw new Error(u())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === i.BAD_REQUEST) throw new Error(gm());
    if (e.status !== i.OK) throw new Error(u())
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
    if (e.status === i.FORBIDDEN) throw new Error(Xf());
    if (e.status !== i.OK) throw new Error(u())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== i.OK) throw new Error(u())
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
    if (r.status === i.BAD_REQUEST) throw new Error(A_());
    if (r.status !== i.OK) throw new Error(u())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== i.OK) throw new Error(Q());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== i.OK) throw new Error(Q());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === i.OK) return r.json();
    throw new Error(Q())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === i.OK) return r.json();
    throw new Error(Q())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === i.OK) return r.json();
    throw new Error(Q())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw new Error(Q())
  }
  async getMapHotspots() {
    const t = await this.request("/map/hotspots", {
      credentials: "include"
    });
    return t.status !== 200 ? [] : t.json()
  }
  async getRandomTile(t) {
    const e = await this.request(`/s${t}/tile/random`);
    if (e.status !== i.OK) throw new Error(u());
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
    if (e.status !== i.OK) throw e.status === i.NOT_FOUND ? new Error(Mt()) : e.status === i.FORBIDDEN ? new Error(qt()) : e.status === i.CONFLICT ? new Error(zt()) : new Error(u())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === i.OK) return t.json();
    if (t.status === i.NOT_FOUND) return;
    throw new Error(u())
  }
  async createAlliance(t) {
    const e = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: t
      })
    });
    if (e.status === i.OK) return e.json();
    if (e.status === i.BAD_REQUEST) {
      const r = await e.json();
      throw r.error === "max_characters" ? new Error(us()) : r.error === "name_taken" ? new Error(Qr()) : r.error == "empty_name" ? new Error(vs()) : new Error(u())
    } else throw e.status === i.FORBIDDEN ? new Error(Cg()) : new Error(u())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== i.OK) throw new Error(u())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(J()) : e.status === i.BAD_REQUEST ? new Error(Oc()) : new Error(u())
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
    if (r.status !== i.OK) throw r.status === i.FORBIDDEN ? new Error(J()) : new Error(u())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw e.status === i.FORBIDDEN ? new Error(J()) : new Error(Q())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === i.OK) return t.json();
    throw t.status === i.FORBIDDEN ? new Error(J()) : new Error(u())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case i.OK:
        return "success";
      case i.ALREADY_REPORTED:
        return "in-another-alliance";
      case i.UNAUTHORIZED:
        return "not-logged-in";
      case i.FORBIDDEN:
        return "banned";
      case i.BAD_REQUEST:
      case i.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw new Error(u())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === i.OK) return e.json();
    throw new Error(u())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === i.NOT_FOUND) return;
    if (e.status !== i.OK) throw new l(u(), e.status);
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
    if (r.status !== i.OK) throw new l(u(), r.status);
    const s = await r.json();
    return (Array.isArray(s) ? s : []).map(a => ({
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
    if (e.status === i.NOT_FOUND) return null;
    if (e.status !== i.OK) throw new l(u(), e.status);
    const r = await e.json(),
      s = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
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
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? s.length),
      members: s.map(a => ({
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
      s = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (s.status === i.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (s.status !== i.OK) throw new l(u(), s.status);
    const a = await s.json(),
      o = Array.isArray(a == null ? void 0 : a.members) ? a.members : [];
    return {
      members: o.map(c => ({
        id: Number(c == null ? void 0 : c.id),
        name: String((c == null ? void 0 : c.name) ?? `#${c==null?void 0:c.id}`),
        picture: (c == null ? void 0 : c.picture) ?? null,
        pixelsPainted: Number((c == null ? void 0 : c.pixelsPainted) ?? (c == null ? void 0 : c.pixels_painted) ?? 0),
        lastPixelLatitude: (c == null ? void 0 : c.lastPixelLatitude) ?? null,
        lastPixelLongitude: (c == null ? void 0 : c.lastPixelLongitude) ?? null,
        role: (c == null ? void 0 : c.alliance_role) === "admin" || (c == null ? void 0 : c.role) === "admin" ? "admin" : "member"
      })),
      total: Number((a == null ? void 0 : a.total) ?? o.length)
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
    if (r.status === i.BAD_REQUEST) {
      const s = await r.json().catch(() => ({}));
      throw new Error((s == null ? void 0 : s.error) ?? u())
    } else if (r.status !== i.OK) throw new l(u(), r.status)
  }
  async changeAllianceLeader(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (r.status === i.BAD_REQUEST) {
      const s = await r.json();
      throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(n_()) : new Error(u())
    } else if (r.status !== i.OK) throw new l(u(), r.status)
  }
  async banAllAllianceMembers(t, e, r) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (s.status !== i.OK) throw new l(u(), s.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (s.status !== i.OK) throw new l(u(), s.status)
  }
  async removeAllianceMember(t, e) {
    const r = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(J()) : new Error(u())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(J()) : new Error(u())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== i.OK) throw new Error(u())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== i.OK) throw new Error(u());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== i.OK) throw new Error(u())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw e.status === i.FORBIDDEN ? new Error(J()) : new Error(u())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(t) {
    const e = await this.request(`/payment/abacatepay/create/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === i.BAD_REQUEST) {
      const s = await e.json();
      throw new Error(s == null ? void 0 : s.error)
    } else {
      if (e.status === i.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(jr());
      if (e.status !== i.OK) throw new Error(u())
    }
    return await e.json()
  }
  async refreshPixPayment(t) {
    const e = await this.request(`/payment/abacatepay/refresh/pix/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === i.BAD_REQUEST) {
      const r = await e.json();
      throw new Error(r == null ? void 0 : r.error)
    } else if (e.status !== i.OK) throw new Error("Unexpected error on the server. Try again later");
    return e.json()
  }
  async getPixStatus(t) {
    const e = await this.request(`/payment/abacatepay/status/pix/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new Error("Erro inesperado. Tente atualizar a página.");
    return e.json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    const e = await t.json();
    for (const r of e.tickets) r.reports.sort((s, a) => Vt[s.reason] - Vt[a.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
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
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, r, s) {
    const a = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: s
      })
    });
    if (a.status !== i.OK && a.status !== i.BAD_REQUEST) throw new l(u(), a.status)
  }
  async request(t, e) {
    var o;
    let r;
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (c) {
      throw console.error("Fetch error:", c), this.online = !1, new Error(Ga(), {
        cause: c
      })
    }
    if (r.status === i.FORBIDDEN && r.headers.get("x-block-reason") === "tor") throw new Error(sm());
    const s = ((o = r.headers.get("cf-mitigated")) == null ? void 0 : o.toLowerCase()) === "challenge";
    if (r.status === 403 && s) {
      if (pe.setCfLikelyAutomated(!0), !await an()) throw new Error(rt());
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === i.TOO_MANY_REQUESTS) throw new Error(Mw());
      if (r.status === i.REQUEST_TIMEOUT) throw new Error(oh());
      if (r.status === i.SERVICE_UNAVAILABLE) throw new Error(Ph())
    }
    return r
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const r = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status);
    const s = await r.json();
    return {
      items: s.items ?? [],
      globals: s.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status);
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
    if (r.status !== i.OK) throw new l(u(), r.status);
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
    if (e.status !== i.OK) throw new l(u(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.NOT_FOUND) {
      if (e.status !== i.OK) throw new l(u(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.NOT_FOUND) {
      if (e.status !== i.OK) throw new l(u(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const r = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      s = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (s.status !== i.OK) throw new l(u(), s.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      s = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (s.status !== i.OK) throw new l(u(), s.status);
    return s.json()
  }
  async addUserNote(t, e, r) {
    const s = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      a = await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (a.status !== i.OK) throw new l(u(), a.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(u(), e.status);
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
    if (r.status !== i.OK) throw new l(u(), r.status);
    const s = await r.json();
    return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(u(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(a => {
      const o = a.is_dollar ?? a.isDollar ?? a.currency ?? a.Currency ?? 0;
      let c;
      if (typeof o == "string") {
        const h = o.toLowerCase();
        c = h === "usd" || h === "dollar" || h === "true"
      } else typeof o == "number" ? c = o !== 0 : c = !!o;
      const _ = typeof a.createdAt == "string" ? a.createdAt : a.CreatedAt ? new Date(a.CreatedAt).toISOString() : "",
        d = a.product_variant ?? a.productVariant,
        g = d == null || d === "" ? null : Number(d);
      return {
        product_name: String(a.productName ?? a.product_name ?? ""),
        amount: Number(a.amount ?? 0),
        price: Number(a.price ?? 0),
        is_dollar: c,
        created_at: _,
        product_variant: Number.isInteger(g) ? g : null
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
    if (r.status !== i.OK) throw new l(u(), r.status)
  }
  async postAdminRenameUser(t, e, r) {
    const s = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: r
      })
    });
    if (s.status === i.BAD_REQUEST) {
      const a = await s.json(),
        o = (a == null ? void 0 : a.error) ?? "";
      throw o === "invalid_name" ? new l(Lt(), i.BAD_REQUEST) : new l(typeof o == "string" && o ? o : u(), i.BAD_REQUEST)
    }
    if (s.status !== i.OK) throw new l(u(), s.status)
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
    if (r.status === i.BAD_REQUEST) {
      const s = await r.json(),
        a = (s == null ? void 0 : s.error) ?? "";
      throw a === "email_required" || a === "invalid_email" ? new l(Xo(), i.BAD_REQUEST) : new l(typeof a == "string" && a ? a : u(), i.BAD_REQUEST)
    }
    if (r.status === i.CONFLICT) {
      const s = await r.json();
      if (((s == null ? void 0 : s.error) ?? "") === "email_already_in_use") {
        const o = new l(typeof(s == null ? void 0 : s.userId) == "number" ? Co({
          userId: s.userId
        }) : Io(), i.CONFLICT);
        throw typeof(s == null ? void 0 : s.userId) == "number" && (o.userId = s.userId), o
      }
      throw new l(u(), i.CONFLICT)
    }
    if (r.status === i.NOT_FOUND) throw new l("User not found.", i.NOT_FOUND);
    if (r.status !== i.OK) throw new l(u(), r.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const r = new URLSearchParams;
    r.set("userId", String(t.userId)), r.set("kind", String(t.kind)), r.set("page", String(t.page ?? 0)), r.set("pageSize", String(t.pageSize ?? 20)), e === "appeals" && r.set("appealId", String(t.appealId));
    const s = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      a = await this.request(s, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== i.OK) throw new l(u(), a.status);
    const o = await a.json(),
      c = Array.isArray(o == null ? void 0 : o.tickets) ? o.tickets : [];
    return c.sort((_, d) => new Date(d.createdAt).getTime() - new Date(_.createdAt).getTime()), c
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize));
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status);
    const s = await r.json();
    return Array.isArray(s == null ? void 0 : s.appeals) ? s.appeals : []
  }
  async getModerationTranslate(t, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      s = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (s.status !== i.OK) throw new l(u(), s.status);
    const a = await s.json();
    return a == null ? void 0 : a.translation
  }
  mapTicketsToReportRows(t, e) {
    var s, a, o, c, _;
    const r = [];
    for (const d of t) {
      const g = d.status ?? "open";
      if (e === "received") {
        for (const h of d.reports) r.push({
          id: String(h.id),
          ticketId: String(d.id),
          createdAt: h.createdAt ?? d.createdAt,
          byUser: {
            id: Number(h.reportedBy),
            name: String(h.reportedByName ?? h.reportedBy),
            picture: h.reportedByPicture ?? null
          },
          reason: String(h.reason),
          status: g
        });
        continue
      }
      if (e === "sent") {
        for (const h of d.reports) r.push({
          id: String(h.id),
          ticketId: String(d.id),
          createdAt: h.createdAt ?? d.createdAt,
          toUser: {
            id: Number(d.reportedUser.id),
            name: String(d.reportedUser.name),
            picture: d.reportedUser.picture ?? null
          },
          reason: String(h.reason),
          status: g
        });
        continue
      }
      r.push({
        id: String(d.id),
        ticketId: String(d.id),
        createdAt: d.createdAt,
        handledBy: d.status && d.status !== "open" ? {
          id: ((s = d.handledBy) == null ? void 0 : s.id) ?? 0,
          name: ((a = d.handledBy) == null ? void 0 : a.name) ?? "Moderator",
          picture: ((o = d.handledBy) == null ? void 0 : o.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((_ = (c = d.reports) == null ? void 0 : c[0]) == null ? void 0 : _.reason) ?? "other"),
        status: g
      })
    }
    return r.sort((d, g) => new Date(g.createdAt).getTime() - new Date(d.createdAt).getTime()), r
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      r = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (r.status !== i.OK) throw new l(u(), r.status);
    return r.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== i.NO_CONTENT) throw new l(u(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async banUsers(t, e, r) {
    const s = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (s.status !== i.OK) throw new l(u(), s.status)
  }
  async timeoutUsers(t, e, r) {
    const s = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (s.status !== i.OK) throw new l(u(), s.status)
  }
  async incrementUsersDroplets(t, e, r) {
    const s = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: r
      })
    });
    if (s.status !== i.OK) throw new l(u(), s.status)
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
    if (r.status !== i.OK) throw new l(u(), r.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const r = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status);
    return r.json()
  }
  async postUsersSuspend(t, e, r) {
    let s;
    switch (e) {
      case "dashboard":
        s = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        s = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        s = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== i.OK) throw new Error(u())
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== i.OK) throw new l(u(), e.status);
    return e.json()
  }
  async submitBanAppeal(t) {
    const e = JSON.stringify({
        message: t
      }),
      r = await pe.getHeaders(e),
      s = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (s.status === i.FORBIDDEN) {
      const a = await s.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await Dt(a.tier)) return this.submitBanAppeal(t);
        throw new l(rt(), s.status)
      }
    }
    if (s.status !== i.OK && s.status !== i.ALREADY_REPORTED) throw new l(u(), s.status);
    return s.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
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
    if (r.status !== i.OK) throw new l(u(), r.status);
    return await r.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
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
    if (t.status !== i.OK) throw new l(u(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const r = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      s = await this.request(r, {
        credentials: "include"
      });
    if (s.status !== i.OK) throw new l(u(), s.status);
    return s.json()
  }
  async postNotificationMarkRead(t) {
    const e = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: t
      })
    });
    if (e.status !== i.OK) throw new l(u(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status);
    return r.json()
  }
  async getAnticheatSignals(t, e) {
    const r = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status);
    return r.json()
  }
  async getAnticheatUserJourney(t, e, r) {
    const s = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${r}`, {
      method: "GET",
      credentials: "include"
    });
    if (s.status !== i.OK) throw new l(u(), s.status);
    return s.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const r = await Ye(),
      s = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": r
        }
      });
    if (!s.ok) throw s.status === 500 ? new l(u(), s.status) : new l(bl(), s.status);
    return s.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < sy.length,
      s = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= ay.tools.wayback.limit,
      a = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      o = t.cursorTs !== void 0,
      c = t.cursorUserId !== void 0,
      _ = t.cursorAllianceId !== void 0,
      d = t.cursorPixelsCount !== void 0,
      g = o || c || _ || d,
      h = o && c && _ && d;
    let R = !0;
    return g && (R = h && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !s || !a || !e || !R)
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
      s = e.toString(),
      a = await this.request(s.length > 0 ? `${r}?${s}` : r, {
        method: "GET",
        credentials: "include"
      });
    if (a.status === i.FORBIDDEN) throw new Error("Access denied");
    if (a.status !== i.OK) throw new Error("Failed to fetch wayback events");
    return a.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === i.NOT_FOUND) throw new Error(Mt());
    if (e.status === i.FORBIDDEN) throw new Error(qt());
    if (e.status === i.CONFLICT) throw new Error(zt());
    if (e.status !== i.OK) throw new Error(u())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== i.OK) throw new l(u(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const r = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== i.OK) throw new l(u(), r.status);
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
    if (r.status !== i.OK) throw new l(u(), r.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
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
    if (r.status !== i.OK) throw new l(u(), r.status);
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
    if (r.status !== i.OK) throw new l(u(), r.status);
    return r.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== i.OK) throw new l(u(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === i.OK
  }
}
De = new WeakMap, xe = new WeakMap;

function oy(n) {
  var R, M;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const A of n)
    if (A.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (R = ot.seasons) == null ? void 0 : R[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let s = Number.POSITIVE_INFINITY,
    a = Number.POSITIVE_INFINITY,
    o = Number.NEGATIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY;
  const _ = n.map(A => {
      const b = Math.round(A.tile[0] * r + A.pixel[0]),
        T = Math.round(A.tile[1] * r + A.pixel[1]);
      return b < s && (s = b), T < a && (a = T), b > o && (o = b), T > c && (c = T), {
        x: b,
        y: T,
        colorIdx: A.colorIdx
      }
    }),
    d = o - s + 1,
    g = c - a + 1;
  if (!Number.isFinite(d) || !Number.isFinite(g) || d <= 0 || g <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const h = new Uint8ClampedArray(d * g * 4);
  for (const {
      x: A,
      y: b,
      colorIdx: T
    }
    of _) {
    const L = (M = ot.colors) == null ? void 0 : M[T];
    if (!L) throw new Error(`Unknown palette color index: ${T}`);
    const V = A - s,
      z = ((b - a) * d + V) * 4,
      [Ge, m, y] = L.rgb;
    h[z] = Ge, h[z + 1] = m, h[z + 2] = y, h[z + 3] = T === 0 ? 1 : 255
  }
  return {
    data: h,
    width: d,
    height: g,
    offsetX: s,
    offsetY: a,
    season: t
  }
}
async function cy(n) {
  const t = uy(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((s, a) => {
    t.toBlob(o => {
      if (!o) {
        a(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(o)
    }, "image/png")
  })
}

function uy(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let Y = new iy(ht);
typeof window < "u" && yn(() => {
  let n = Y.online;
  bn(() => {
    const t = Y.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
const db = n => new URL(n, ht).toString();

function ln(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function ly(n, t) {
  for (const e of t)
    if (ln(n, e)) return !0;
  return !1
}

function dn(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function dy(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class _y {
  constructor(t) {
    E(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      s = t % 8;
    if (r >= this.bytes.length) {
      const o = new Uint8Array(r + 1),
        c = o.length - this.bytes.length;
      for (let _ = 0; _ < this.bytes.length; _++) o[_ + c] = this.bytes[_];
      this.bytes = o
    }
    const a = this.bytes.length - 1 - r;
    e ? this.bytes[a] = this.bytes[a] | 1 << s : this.bytes[a] = this.bytes[a] & ~(1 << s)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      s = this.bytes.length;
    return e > s ? !1 : (this.bytes[s - 1 - e] & 1 << r) !== 0
  }
}

function _b(n) {
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onload = () => {
      const s = r.result;
      if (!s || typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s.substring(s.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}

function fb(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${dy(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const s = r.result;
      if (typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s)
    }, r.onerror = e, r.readAsDataURL(n)
  })
}

function pb(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    s = e.indexOf(";base64"),
    a = (s === -1 ? e : e.slice(0, s)) || "text/plain";
  if (s !== -1) {
    const o = dn(r),
      c = new Uint8Array(o.byteLength);
    return c.set(o), new Blob([c], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}

function hb(...n) {
  return n.filter(Boolean).join(" ")
}
const fy = typeof document < "u";
let $t = 0;
var Pe, Me, Ue;
class py {
  constructor() {
    I(this, Pe, P(He([])));
    I(this, Me, P(He([])));
    I(this, Ue, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    E(this, "addToast", t => {
      fy && this.toasts.unshift(t)
    });
    E(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: s
    }) => {
      const a = this.toasts.findIndex(c => c.id === t),
        o = this.toasts[a];
      this.toasts[a] = {
        ...o,
        ...e,
        id: t,
        title: s,
        type: r,
        updated: !0
      }
    });
    E(this, "create", t => {
      var c;
      const {
        message: e,
        ...r
      } = t, s = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((c = t.id) == null ? void 0 : c.length) > 0 ? t.id : $t++, a = t.dismissable === void 0 ? !0 : t.dismissable, o = t.type === void 0 ? "default" : t.type;
      return Et(() => {
        this.toasts.find(d => d.id === s) ? this.updateToast({
          id: s,
          data: t,
          type: o,
          message: e,
          dismissable: a
        }) : this.addToast({
          ...r,
          id: s,
          title: e,
          dismissable: a,
          type: o
        })
      }), s
    });
    E(this, "dismiss", t => (Et(() => {
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
    E(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = p(this, Ue).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    E(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    E(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    E(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    E(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    E(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    E(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    E(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const s = t instanceof Promise ? t : t();
      let a = r !== void 0;
      return s.then(o => {
        if (typeof o == "object" && o && "ok" in o && typeof o.ok == "boolean" && !o.ok) {
          a = !1;
          const c = hy(o);
          this.create({
            id: r,
            type: "error",
            message: c
          })
        } else if (e.success !== void 0) {
          a = !1;
          const c = typeof e.success == "function" ? e.success(o) : e.success;
          this.create({
            id: r,
            type: "success",
            message: c
          })
        }
      }).catch(o => {
        if (e.error !== void 0) {
          a = !1;
          const c = typeof e.error == "function" ? e.error(o) : e.error;
          this.create({
            id: r,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var o;
        a && (this.dismiss(r), r = void 0), (o = e.finally) == null || o.call(e)
      }), r
    });
    E(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || $t++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    E(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    E(this, "setHeight", t => {
      const e = p(this, Ue).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    E(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return N(p(this, Pe))
  }
  set toasts(t) {
    k(p(this, Pe), t, !0)
  }
  get heights() {
    return N(p(this, Me))
  }
  set heights(t) {
    k(p(this, Me), t, !0)
  }
}
Pe = new WeakMap, Me = new WeakMap, Ue = new WeakMap;

function hy(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const C = new py;

function my(n, t) {
  return C.create({
    message: n,
    ...t
  })
}
var Ze;
class mb {
  constructor() {
    I(this, Ze, de(() => C.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return N(p(this, Ze))
  }
}
Ze = new WeakMap;
const gy = my,
  wy = Object.assign(gy, {
    success: C.success,
    info: C.info,
    warning: C.warning,
    error: C.error,
    custom: C.custom,
    message: C.message,
    promise: C.promise,
    dismiss: C.dismiss,
    loading: C.loading,
    getActiveToasts: () => C.toasts.filter(n => !n.dismiss)
  });
var Le, je, Be, Ce, ze, qe, Fe, Ke;
class yy {
  constructor() {
    E(this, "channel", new BroadcastChannel("user-channel"));
    I(this, Le, P());
    I(this, je, P(!0));
    I(this, Be, P());
    I(this, Ce, P(Date.now()));
    I(this, ze, de(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((mt.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    I(this, qe, de(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    I(this, Fe, de(() => {
      var t;
      return new _y(dn(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    I(this, Ke, de(() => {
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
    return N(p(this, Le))
  }
  set data(t) {
    k(p(this, Le), t, !0)
  }
  get loading() {
    return N(p(this, je))
  }
  set loading(t) {
    k(p(this, je), t, !0)
  }
  get notificationCount() {
    return N(p(this, Be))
  }
  set notificationCount(t) {
    k(p(this, Be), t, !0)
  }
  get lastFetch() {
    return N(p(this, Ce))
  }
  set lastFetch(t) {
    k(p(this, Ce), t)
  }
  get charges() {
    return N(p(this, ze))
  }
  set charges(t) {
    k(p(this, ze), t)
  }
  get cooldown() {
    return N(p(this, qe))
  }
  set cooldown(t) {
    k(p(this, qe), t)
  }
  get flagsBitmap() {
    return N(p(this, Fe))
  }
  set flagsBitmap(t) {
    k(p(this, Fe), t)
  }
  get timeoutUntil() {
    return N(p(this, Ke))
  }
  set timeoutUntil(t) {
    k(p(this, Ke), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await Y.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && Y.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (Qn("userId", {
        id: this.data.id
      }), pe.setUserId(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), wy.warning(If(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await Y.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return ln((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return ly((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Le = new WeakMap, je = new WeakMap, Be = new WeakMap, Ce = new WeakMap, ze = new WeakMap, qe = new WeakMap, Fe = new WeakMap, Ke = new WeakMap;
const oe = new yy;
let v;
const F = new Array(128).fill(void 0);
F.push(void 0, null, !0, !1);

function w(n) {
  return F[n]
}
const _n = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && _n.decode();
let _e = null;

function ge() {
  return (_e === null || _e.byteLength === 0) && (_e = new Uint8Array(v.memory.buffer)), _e
}

function fe(n, t) {
  return n = n >>> 0, _n.decode(ge().subarray(n, n + t))
}
let we = F.length;

function S(n) {
  we === F.length && F.push(F.length + 1);
  const t = we;
  return we = F[t], F[t] = n, t
}

function q(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    v.__wbindgen_export_0(S(e))
  }
}

function X(n) {
  return n == null
}

function by(n) {
  n < 132 || (F[n] = we, we = n)
}

function Wt(n) {
  const t = w(n);
  return by(n), t
}
const Ht = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  v.__wbindgen_export_1.get(n.dtor)(n.a, n.b)
});

function Ey(n, t, e, r) {
  const s = {
      a: n,
      b: t,
      cnt: 1,
      dtor: e
    },
    a = (...o) => {
      s.cnt++;
      const c = s.a;
      s.a = 0;
      try {
        return r(c, s.b, ...o)
      } finally {
        --s.cnt === 0 ? (v.__wbindgen_export_1.get(s.dtor)(c, s.b), Ht.unregister(s)) : s.a = c
      }
    };
  return a.original = s, Ht.register(a, s, s), a
}
let Z = null;

function Je() {
  return (Z === null || Z.buffer.detached === !0 || Z.buffer.detached === void 0 && Z.buffer !== v.memory.buffer) && (Z = new DataView(v.memory.buffer)), Z
}
let re = 0;
const We = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  vy = typeof We.encodeInto == "function" ? function(n, t) {
    return We.encodeInto(n, t)
  } : function(n, t) {
    const e = We.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function gt(n, t, e) {
  if (e === void 0) {
    const c = We.encode(n),
      _ = t(c.length, 1) >>> 0;
    return ge().subarray(_, _ + c.length).set(c), re = c.length, _
  }
  let r = n.length,
    s = t(r, 1) >>> 0;
  const a = ge();
  let o = 0;
  for (; o < r; o++) {
    const c = n.charCodeAt(o);
    if (c > 127) break;
    a[s + o] = c
  }
  if (o !== r) {
    o !== 0 && (n = n.slice(o)), s = e(s, r, r = o + n.length * 3, 1) >>> 0;
    const c = ge().subarray(s + o, s + r),
      _ = vy(n, c);
    o += _.written, s = e(s, r, o, 1) >>> 0
  }
  return re = o, s
}

function Ty(n) {
  const t = gt(n, v.__wbindgen_export_2, v.__wbindgen_export_3),
    e = re;
  v.set_fingerprint(t, e)
}

function Oy(n) {
  let t, e;
  try {
    const a = v.__wbindgen_add_to_stack_pointer(-16),
      o = gt(n, v.__wbindgen_export_2, v.__wbindgen_export_3),
      c = re;
    v.get_pawtected_endpoint_payload(a, o, c);
    var r = Je().getInt32(a + 0, !0),
      s = Je().getInt32(a + 4, !0);
    return t = r, e = s, fe(r, s)
  } finally {
    v.__wbindgen_add_to_stack_pointer(16), v.__wbindgen_export_4(t, e, 1)
  }
}

function Sy(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return ge().set(n, e / 1), re = n.length, e
}

function Iy(n) {
  const t = Sy(n, v.__wbindgen_export_2),
    e = re;
  v.set_telemetry(t, e)
}

function st(n) {
  v.set_user_id(n)
}

function Ay(n) {
  v.set_automated_browser(n)
}

function Ny(n) {
  v.set_cf_likely_automated(n)
}

function ky(n) {
  const t = gt(n, v.__wbindgen_export_2, v.__wbindgen_export_3),
    e = re;
  v.request_url(t, e)
}

function Ry(n) {
  v.set_automated_clicks(n)
}

function Dy() {
  v.init_listeners()
}

function xy(n, t, e) {
  v.__wbindgen_export_5(n, t, S(e))
}
async function Py(n, t) {
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

function My() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_addEventListener_90e553fdce254421 = function() {
    return q(function(t, e, r, s) {
      w(t).addEventListener(fe(e, r), w(s))
    }, arguments)
  }, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = w(t).buffer;
    return S(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return q(function(t, e) {
      const r = w(t).call(w(e));
      return S(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return q(function(t, e, r) {
      const s = w(t).call(w(e), w(r));
      return S(s)
    }, arguments)
  }, n.wbg.__wbg_clientX_5eb380a5f1fec6fd = function(t) {
    return w(t).clientX
  }, n.wbg.__wbg_clientY_d8b9c7f0c4e2e677 = function(t) {
    return w(t).clientY
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = w(t).crypto;
    return S(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = w(t).document;
    return X(e) ? 0 : S(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return q(function(t, e) {
      w(t).getRandomValues(w(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return q(function(t, e) {
      const r = Reflect.get(w(t), w(e));
      return S(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return q(function(t) {
      return w(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return q(function(t) {
      const e = w(t).innerWidth;
      return S(e)
    }, arguments)
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = w(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = w(t).msCrypto;
    return S(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = w(t).navigator;
    return S(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(w(t));
    return S(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(fe(t, e));
    return S(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const s = new Uint8Array(w(t), e >>> 0, r >>> 0);
    return S(s)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return S(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = w(t).node;
    return S(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = w(t).process;
    return S(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return q(function(t, e) {
      w(t).randomFillSync(Wt(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return q(function() {
      const t = module.require;
      return S(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    w(t).set(w(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return X(t) ? 0 : S(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return X(t) ? 0 : S(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return X(t) ? 0 : S(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return X(t) ? 0 : S(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const s = w(t).subarray(e >>> 0, r >>> 0);
    return S(s)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = w(t).versions;
    return S(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = w(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_closure_wrapper58 = function(t, e, r) {
    const s = Ey(t, e, 3, xy);
    return S(s)
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof w(t) == "function"
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = w(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof w(t) == "string"
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return w(t) === void 0
  }, n.wbg.__wbindgen_memory = function() {
    const t = v.memory;
    return S(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = w(e),
      s = typeof r == "number" ? r : void 0;
    Je().setFloat64(t + 8, X(s) ? 0 : s, !0), Je().setInt32(t + 0, !X(s), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = w(t);
    return S(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Wt(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = fe(t, e);
    return S(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(fe(t, e))
  }, n
}

function Uy(n, t) {
  return v = n.exports, fn.__wbindgen_wasm_module = t, Z = null, _e = null, v
}
async function fn(n) {
  if (v !== void 0) return v;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = My();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await Py(await n, t);
  return Uy(e, r)
}
class Ly {
  constructor() {
    E(this, "interval");
    E(this, "storagesEmpty", !1);
    E(this, "storages", [new Xe, new ct, new ut, new By]);
    E(this, "pawtectLoaded");
    E(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!oe.data || this.storagesEmpty || localStorage.getItem(Xe.KEY))) {
        for (const e of this.storages) {
          const r = e.get();
          if (r) {
            for (const s of this.storages) s.set(r);
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
    const e = ee.day;
    for (const s of this.storages) {
      const a = s.get();
      if (a && !(a.timestamp + e < Date.now()) && a.userId !== t) return !0
    }
    const r = {
      userId: t,
      timestamp: Date.now()
    };
    for (const s of this.storages) s.set(r);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await fn(Xn), (t = oe.data) != null && t.id && st(oe.data.id), Dy();
        const e = fetch;
        return Object.assign(window, {
          fetch: jy((r, s) => {
            let a = null;
            return r instanceof Request ? a = r.url : r instanceof URL ? a = r.href : typeof r == "string" && (a = r), a !== null && !a.startsWith("/") && ky(a), e.call(window, r, s)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Yn(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), st(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), Ny(t)
  }
  isPawtectReady() {
    return this.pawtectLoaded ?? Promise.resolve(!1)
  }
  getPawtectError() {
    return this.pawtectError
  }
  async getHeaders(t) {
    const e = await Ye(),
      r = or();
    return {
      "x-pawtect-token": await this.getPawtectedEndpointPayload(t, r),
      "x-t": r,
      "x-fp": e
    }
  }
  async getPawtectedEndpointPayload(t, e) {
    if (!await this.loadPawtect()) throw new Error(pg());
    const s = navigator.webdriver,
      a = await Ye();
    st(oe.data.id), Ty(a), Ay(s), Ry(mt.automatedClicks);
    const o = Uint8Array.from(atob(e), c => c.charCodeAt(0));
    return Iy(o), Oy(t)
  }
}

function jy(n) {
  return n.bind().bind()
}
const W = class W {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      r = new Uint8Array(t.length);
    for (let s = 0; s < t.length; s++) r[s] = t[s] ^ e[s % e.length];
    return r
  }
  get() {
    try {
      const t = localStorage.getItem(W.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), s => s.charCodeAt(0)),
        r = new TextDecoder().decode(W.codec(e));
      return JSON.parse(r)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      r = W.codec(e);
    localStorage.setItem(W.KEY, btoa(String.fromCharCode(...r)))
  }
};
E(W, "KEY", "ui_layout_v3"), E(W, "XOR_KEY", "wplace-prefs");
let Xe = W;
const H = class H {
  get() {
    try {
      const t = sessionStorage.getItem(H.KEY);
      if (!t) return;
      let e = "";
      for (let r = 0; r < t.length; r += 4) {
        const s = parseInt(t.slice(r, r + 4), 16);
        e += String.fromCharCode(s - H.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let r = "";
    for (const s of e) {
      const a = s.charCodeAt(0) + H.SHIFT & 65535;
      r += a.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(H.KEY, r)
  }
};
E(H, "KEY", "nav.cursor"), E(H, "SHIFT", 13);
let ct = H;
const te = class te {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + te.KEY + "=([^;]*)"));
    if (t) try {
      const [e, r] = decodeURIComponent(t[1]).split("."), s = parseInt(e, 36), a = parseInt(r, 36);
      return !Number.isFinite(s) || !Number.isFinite(a) ? void 0 : {
        userId: s,
        timestamp: a
      }
    } catch {
      return
    }
  }
  set(t) {
    const e = `${t.userId.toString(36)}.${t.timestamp.toString(36)}`;
    document.cookie = `${te.KEY}=${encodeURIComponent(e)};path=/;max-age=${te.MAX_AGE};SameSite=Lax`
  }
};
E(te, "KEY", "_pf_uid"), E(te, "MAX_AGE", 3600 * 24 * 365);
let ut = te;
class By {
  constructor() {
    E(this, "packed")
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
const pe = new Ly;
export {
  $y as $, tr as A, uu as B, C, hb as D, mb as E, Xy as F, Jy as G, U as H, Yy as I, Hy as J, Qy as K, Vy as L, Wy as M, fb as N, pb as O, ht as P, ub as Q, Zy as R, cb as S, ee as T, pg as U, gm as V, db as W, sb as X, tb as Y, ab as Z, rb as _, Y as a, lb as a0, un as a1, ib as a2, ob as a3, Ky as a4, jr as a5, Qr as a6, us as a7, vs as a8, oa as a9, Lp as aA, Bt as aB, oh as aC, bh as aD, Ph as aE, Ct as aF, sm as aG, Fm as aH, tg as aI, zt as aJ, Cg as aK, J as aL, qt as aM, Ft as aN, Mw as aO, Kt as aP, ba as aa, Pt as ab, Ga as ac, Mt as ad, Ni as ae, Ut as af, Io as ag, Co as ah, dc as ai, Oc as aj, jc as ak, Pl as al, $l as am, ad as an, Lt as ao, Rd as ap, Kd as aq, n_ as ar, Q as as, A_ as at, ff as au, If as av, Cf as aw, Xf as ax, jt as ay, Tp as az, eb as b, Us as c, Zi as d, u as e, ot as f, Qc as g, vu as h, Hu as i, mt as j, bl as k, Gy as l, z_ as m, Xo as n, pe as o, rt as p, _b as q, ol as r, nb as s, wy as t, oe as u, Dt as v, Uu as w, fo as x, Hs as y, Z_ as z
};