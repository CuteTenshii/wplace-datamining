var pr = Object.defineProperty;
var bt = r => {
  throw TypeError(r)
};
var mr = (r, t, e) => t in r ? pr(r, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : r[t] = e;
var v = (r, t, e) => mr(r, typeof t != "symbol" ? t + "" : t, e),
  gr = (r, t, e) => t.has(r) || bt("Cannot " + e);
var h = (r, t, e) => (gr(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
  I = (r, t, e) => t.has(r) ? bt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e);
import {
  e as P,
  i as N,
  h as k,
  g as We,
  bA as wr,
  D as yr,
  I as vt,
  u as _e
} from "./5zj5-rPA.js";
import {
  a as Ye
} from "./BFtxp9dm.js";
import {
  g as f
} from "./BhCkpOlh.js";
const ce = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  K = globalThis,
  pe = "10.40.0";

function lt() {
  return _t(K), K
}

function _t(r) {
  const t = r.__SENTRY__ = r.__SENTRY__ || {};
  return t.version = t.version || pe, t[pe] = t[pe] || {}
}

function dt(r, t, e = K) {
  const n = e.__SENTRY__ = e.__SENTRY__ || {},
    s = n[pe] = n[pe] || {};
  return s[r] || (s[r] = t())
}
const br = "Sentry Logger ",
  Et = {};

function vr(r) {
  if (!("console" in K)) return r();
  const t = K.console,
    e = {},
    n = Object.keys(Et);
  n.forEach(s => {
    const o = Et[s];
    e[s] = t[s], t[s] = o
  });
  try {
    return r()
  } finally {
    n.forEach(s => {
      t[s] = e[s]
    })
  }
}

function Er() {
  ht().enabled = !0
}

function Tr() {
  ht().enabled = !1
}

function Yt() {
  return ht().enabled
}

function Or(...r) {
  ft("log", ...r)
}

function Sr(...r) {
  ft("warn", ...r)
}

function Ir(...r) {
  ft("error", ...r)
}

function ft(r, ...t) {
  ce && Yt() && vr(() => {
    K.console[r](`${br}[${r}]:`, ...t)
  })
}

function ht() {
  return ce ? dt("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const Ge = {
    enable: Er,
    disable: Tr,
    isEnabled: Yt,
    log: Or,
    warn: Sr,
    error: Ir
  },
  Ar = Object.prototype.toString;

function Nr(r, t) {
  return Ar.call(r) === `[object ${t}]`
}

function kr(r) {
  return Nr(r, "Object")
}

function Rr(r) {
  return !!(r != null && r.then && typeof r.then == "function")
}

function Dr(r, t, e) {
  try {
    Object.defineProperty(r, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    ce && Ge.log(`Failed to add non-enumerable property "${t}" to object`, r)
  }
}
let ae;

function et(r) {
  if (ae !== void 0) return ae ? ae(r) : r();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = K;
  return t in e && typeof e[t] == "function" ? (ae = e[t], ae(r)) : (ae = null, r())
}

function ot() {
  return et(() => Math.random())
}

function xr() {
  return et(() => Date.now())
}

function Pr(r, t = 0) {
  return typeof r != "string" || t === 0 || r.length <= t ? r : `${r.slice(0,t)}...`
}

function Mr() {
  const r = K;
  return r.crypto || r.msCrypto
}
let rt;

function Lr() {
  return ot() * 16
}

function me(r = Mr()) {
  try {
    if (r != null && r.randomUUID) return et(() => r.randomUUID()).replace(/-/g, "")
  } catch {}
  return rt || (rt = "10000000100040008000" + 1e11), rt.replace(/[018]/g, t => (t ^ (Lr() & 15) >> t / 4).toString(16))
}
const Jt = 1e3;

function Qt() {
  return xr() / Jt
}

function Ur() {
  const {
    performance: r
  } = K;
  if (!(r != null && r.now) || !r.timeOrigin) return Qt;
  const t = r.timeOrigin;
  return () => (t + et(() => r.now())) / Jt
}
let Tt;

function jr() {
  return (Tt ?? (Tt = Ur()))()
}

function Br(r, t = {}) {
  if (t.user && (!r.ipAddress && t.user.ip_address && (r.ipAddress = t.user.ip_address), !r.did && !t.did && (r.did = t.user.id || t.user.email || t.user.username)), r.timestamp = t.timestamp || jr(), t.abnormal_mechanism && (r.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (r.ignoreDuration = t.ignoreDuration), t.sid && (r.sid = t.sid.length === 32 ? t.sid : me()), t.init !== void 0 && (r.init = t.init), !r.did && t.did && (r.did = `${t.did}`), typeof t.started == "number" && (r.started = t.started), r.ignoreDuration) r.duration = void 0;
  else if (typeof t.duration == "number") r.duration = t.duration;
  else {
    const e = r.timestamp - r.started;
    r.duration = e >= 0 ? e : 0
  }
  t.release && (r.release = t.release), t.environment && (r.environment = t.environment), !r.ipAddress && t.ipAddress && (r.ipAddress = t.ipAddress), !r.userAgent && t.userAgent && (r.userAgent = t.userAgent), typeof t.errors == "number" && (r.errors = t.errors), t.status && (r.status = t.status)
}

function Xt(r, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (r && Object.keys(t).length === 0) return r;
  const n = {
    ...r
  };
  for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (n[s] = Xt(n[s], t[s], e - 1));
  return n
}

function Ot() {
  return me()
}
const at = "_sentrySpan";

function St(r, t) {
  t ? Dr(r, at, t) : delete r[at]
}

function It(r) {
  return r[at]
}
const Cr = 100;
class re {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: Ot(),
      sampleRand: ot()
    }
  }
  clone() {
    const t = new re;
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
    }, this._session && Br(this._session, {
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
      n = e instanceof re ? e.getScopeData() : kr(e) ? t : void 0,
      {
        tags: s,
        attributes: o,
        extra: i,
        user: c,
        contexts: d,
        level: _,
        fingerprint: g = [],
        propagationContext: p,
        conversationId: R
      } = n || {};
    return this._tags = {
      ...this._tags,
      ...s
    }, this._attributes = {
      ...this._attributes,
      ...o
    }, this._extra = {
      ...this._extra,
      ...i
    }, this._contexts = {
      ...this._contexts,
      ...d
    }, c && Object.keys(c).length && (this._user = c), _ && (this._level = _), g.length && (this._fingerprint = g), p && (this._propagationContext = p), R && (this._conversationId = R), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, St(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: Ot(),
      sampleRand: ot()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var o;
    const n = typeof e == "number" ? e : Cr;
    if (n <= 0) return this;
    const s = {
      timestamp: Qt(),
      ...t,
      message: t.message ? Pr(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(s), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), (o = this._client) == null || o.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
    const n = (e == null ? void 0 : e.event_id) || me();
    if (!this._client) return ce && Ge.warn("No client configured on scope - will not capture exception!"), n;
    const s = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: s,
      ...e,
      event_id: n
    }, this), n
  }
  captureMessage(t, e, n) {
    const s = (n == null ? void 0 : n.event_id) || me();
    if (!this._client) return ce && Ge.warn("No client configured on scope - will not capture message!"), s;
    const o = (n == null ? void 0 : n.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: o,
      ...n,
      event_id: s
    }, this), s
  }
  captureEvent(t, e) {
    const n = t.event_id || (e == null ? void 0 : e.event_id) || me();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: n
    }, this), n) : (ce && Ge.warn("No client configured on scope - will not capture event!"), n)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function zr() {
  return dt("defaultCurrentScope", () => new re)
}

function qr() {
  return dt("defaultIsolationScope", () => new re)
}
class Fr {
  constructor(t, e) {
    let n;
    t ? n = t : n = new re;
    let s;
    e ? s = e : s = new re, this._stack = [{
      scope: n
    }], this._isolationScope = s
  }
  withScope(t) {
    const e = this._pushScope();
    let n;
    try {
      n = t(e)
    } catch (s) {
      throw this._popScope(), s
    }
    return Rr(n) ? n.then(s => (this._popScope(), s), s => {
      throw this._popScope(), s
    }) : (this._popScope(), n)
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
  const r = lt(),
    t = _t(r);
  return t.stack = t.stack || new Fr(zr(), qr())
}

function Kr(r) {
  return le().withScope(r)
}

function $r(r, t) {
  const e = le();
  return e.withScope(() => (e.getStackTop().scope = r, t(r)))
}

function At(r) {
  return le().withScope(() => r(le().getIsolationScope()))
}

function Vr() {
  return {
    withIsolationScope: At,
    withScope: Kr,
    withSetScope: $r,
    withSetIsolationScope: (r, t) => At(t),
    getCurrentScope: () => le().getScope(),
    getIsolationScope: () => le().getIsolationScope()
  }
}

function Zt(r) {
  const t = _t(r);
  return t.acs ? t.acs : Vr()
}

function Gr() {
  const r = lt();
  return Zt(r).getCurrentScope()
}

function Hr() {
  const r = lt();
  return Zt(r).getIsolationScope()
}

function Wr(r, t) {
  return Gr().captureException(r, void 0)
}

function Yr(r, t) {
  Hr().setContext(r, t)
}
const eb = "https://maps.wplace.live",
  tb = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  rb = "pk_live_51RMHjBAtY4KIdFGnnJ9ZHjvgP68opqg7wlT7fA1HG3p91vfhVQyn6je810y5Cz3ggTycnJtFRkwHsYy1qJEyKRFW00x1i0iWMl",
  Jr = "true",
  nb = "0x4AAAAAABpHqZ-6i7uL0nmG",
  sb = "https://backend.wplace.live/files",
  pt = "https://backend.wplace.live",
  Qr = "" + new URL("../assets/pawtect_wasm_bg.YFplO3ET.wasm", import.meta.url).href,
  Nt = "theme";
var ye, be, ve, Ee, Te, Oe, Se, Ie, Ae, Ne;
class Xr {
  constructor() {
    I(this, ye, P(!1));
    I(this, be, P(!1));
    I(this, ve, P(0));
    I(this, Ee, P(!1));
    I(this, Te, P(We(Zr())));
    I(this, Oe, P(null));
    I(this, Se, P(!1));
    I(this, Ie, P("custom-winter"));
    I(this, Ae, P(We(Date.now())));
    I(this, Ne, P(void 0));
    setInterval(() => {
      k(h(this, Ae), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(Nt), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return N(h(this, ye))
  }
  set dropletsDialogOpen(t) {
    k(h(this, ye), t, !0)
  }
  get storeDialogOpen() {
    return N(h(this, be))
  }
  set storeDialogOpen(t) {
    k(h(this, be), t, !0)
  }
  get storeTabIndex() {
    return N(h(this, ve))
  }
  set storeTabIndex(t) {
    k(h(this, ve), t, !0)
  }
  get muted() {
    return N(h(this, Ee))
  }
  set muted(t) {
    k(h(this, Ee), t, !0)
  }
  get language() {
    return N(h(this, Te))
  }
  set language(t) {
    k(h(this, Te), t, !0)
  }
  get map() {
    return N(h(this, Oe))
  }
  set map(t) {
    k(h(this, Oe), t)
  }
  get automatedClicks() {
    return N(h(this, Se))
  }
  set automatedClicks(t) {
    k(h(this, Se), t, !0)
  }
  get theme() {
    return N(h(this, Ie))
  }
  set theme(t) {
    k(h(this, Ie), t, !0), localStorage.setItem(Nt, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return N(h(this, Ae))
  }
  get captcha() {
    return en ? N(h(this, Ne)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    k(h(this, Ne), t, !0)
  }
}
ye = new WeakMap, be = new WeakMap, ve = new WeakMap, Ee = new WeakMap, Te = new WeakMap, Oe = new WeakMap, Se = new WeakMap, Ie = new WeakMap, Ae = new WeakMap, Ne = new WeakMap;
const mt = new Xr;

function Zr() {
  if (navigator.languages && navigator.languages.length > 0) {
    const r = navigator.languages.find(t => t.length === 2);
    if (r) return r
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const en = Jr.toLowerCase() !== "false",
  tn = 60,
  rn = 100,
  nn = 50,
  sn = 2e3;
class er {
  constructor(t) {
    v(this, "items", []);
    v(this, "writeIdx", 0);
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

function on() {
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
const tr = new er(rn),
  rr = new er(nn);
let D = on(),
  Je = null,
  kt = !1,
  O = null,
  nr = 0;

function ob() {
  kt || typeof window > "u" || (kt = !0, D.focusStartMs = performance.now(), D.windowStartMs = Date.now(), window.addEventListener("pointermove", r => {
    const t = performance.now();
    t - D.lastMouseSampleMs < tn || (D.lastMouseSampleMs = t, tr.push({
      x: r.clientX,
      y: r.clientY,
      t
    }))
  }, {
    passive: !0
  }), window.addEventListener("pointerdown", r => {
    rr.push(performance.now()), D.lastClickX = r.clientX, D.lastClickY = r.clientY
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
  }), gn())
}

function an() {
  Je = cn();
  try {
    const r = Je,
      t = new Uint8Array(40),
      e = new DataView(t.buffer);
    e.setUint8(0, 1);
    let n = 0;
    r.isLinearMovement && (n |= 1), r.isConstantInterval && (n |= 2), r.hasZeroJitter && (n |= 4), O != null && O.hts && (n |= 8), navigator.webdriver && (n |= 16), mt.automatedClicks && (n |= 32), O != null && O.cdp && (n |= 64), O != null && O.odz && (n |= 128), e.setUint8(1, n), e.setUint8(2, Math.min(255, r.clickCount)), e.setUint16(3, Math.min(65535, Math.round(r.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, r.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(r.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, r.movementSegments)), e.setUint8(8, Math.min(255, Math.round(r.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, D.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, D.lastClickY))), e.setUint8(13, Math.min(255, O ? O.lc : 0)), e.setUint8(14, Math.min(255, O ? O.pc : 0)), e.setUint8(15, Math.min(255, O ? O.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(r.idleMs))), e.setUint16(18, Math.min(65535, Math.round(r.focusMs))), e.setUint16(20, Math.min(65535, Math.round(r.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(r.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(r.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(r.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(r.preClickPauseAvg))), e.setUint16(30, Math.min(65535, O ? O.sw : 0)), e.setUint16(32, Math.min(65535, O ? O.sh : 0)), e.setUint8(34, O ? O.fb & 255 : 0), e.setUint8(35, Math.min(255, O ? O.ptc : 0)), e.setUint8(36, O ? O.adf & 255 : 0);
    let s = 0;
    return O != null && O.cdr && (s |= 1), e.setUint8(37, s), e.setUint16(38, Math.min(65535, Math.round(nr * 100))), btoa(String.fromCharCode(...t))
  } catch {
    return ""
  }
}

function cn() {
  O = mn();
  const r = Date.now(),
    t = D.windowStartMs,
    e = performance.now(),
    n = tr.drain(),
    s = rr.drain(),
    o = hn(D, e);
  D.totalIdleMs = 0, D.totalFocusMs = 0, D.focusStartMs = e, D.windowStartMs = r;
  const i = ln(n),
    c = _n(s),
    d = fn(s, n),
    _ = i.straightnessAvg > .95 && n.length > 10,
    g = i.jitterAvg < .01 && n.length > 10,
    p = c.stddev / Math.max(1, c.avg) < .05 && s.length >= 5;
  return Je = {
    windowStart: t,
    windowEnd: r,
    mouseSpeedAvg: G(i.speedAvg),
    mouseSpeedStddev: G(i.speedStddev),
    mouseAccelAvg: G(i.accelAvg),
    mouseAccelStddev: G(i.accelStddev),
    microMovementCount: i.microMovementCount,
    movementSegments: i.movementSegments,
    avgSegmentCurvature: G(i.avgSegmentCurvature),
    velocityProfileSkew: G(i.velocityProfileSkew),
    angularVelocityStddev: G(i.angularVelocityStddev),
    clickCount: s.length,
    preClickPauseAvg: G(d),
    idleMs: o.idleMs,
    focusMs: o.focusMs,
    isLinearMovement: _,
    isConstantInterval: p,
    hasZeroJitter: g
  }, Je
}
const un = {
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

function ln(r) {
  if (r.length < 3) return un;
  const t = [],
    e = [],
    n = [];
  let s = 0,
    o = 0,
    i = 0;
  const c = [];
  for (let m = 1; m < r.length; m++) {
    const y = r[m].x - r[m - 1].x,
      x = r[m].y - r[m - 1].y,
      V = Math.max(1, r[m].t - r[m - 1].t),
      j = Math.sqrt(y * y + x * x),
      B = j / V;
    if (t.push(B), j < 3 && j > 0 && s++, V > sn) {
      if (m - o > 2) {
        i++;
        const oe = Rt(r.slice(o, m));
        oe >= 0 && c.push(oe)
      }
      o = m
    }
    if (m >= 2) {
      const oe = r[m - 1].x - r[m - 2].x,
        tt = r[m - 1].y - r[m - 2].y,
        fr = y * oe + x * tt,
        wt = Math.sqrt(y * y + x * x),
        yt = Math.sqrt(oe * oe + tt * tt);
      wt > 0 && yt > 0 && e.push(1 - Math.abs(fr / (wt * yt)));
      const hr = t[t.length - 2] || 0;
      n.push(Math.abs(B - hr))
    }
  }
  if (r.length - o > 2) {
    i++;
    const m = Rt(r.slice(o));
    m >= 0 && c.push(m)
  }
  const d = t.reduce((m, y) => m + y, 0) / t.length,
    _ = e.length > 0 ? e.reduce((m, y) => m + y, 0) / e.length : 0,
    g = t.reduce((m, y) => m + Math.pow(y - d, 2), 0) / t.length,
    p = Math.sqrt(g);
  let R = 0,
    M = 0;
  if (n.length > 0) {
    R = n.reduce((y, x) => y + x, 0) / n.length;
    const m = n.reduce((y, x) => y + Math.pow(x - R, 2), 0) / n.length;
    M = Math.sqrt(m)
  }
  const A = r[0],
    b = r[r.length - 1],
    T = Math.sqrt(Math.pow(b.x - A.x, 2) + Math.pow(b.y - A.y, 2));
  let U = 0;
  for (let m = 1; m < r.length; m++) {
    const y = r[m].x - r[m - 1].x,
      x = r[m].y - r[m - 1].y;
    U += Math.sqrt(y * y + x * x)
  }
  const $ = U > 0 ? T / U : 0,
    $e = c.length > 0 ? c.reduce((m, y) => m + y, 0) / c.length : 0;
  let z = 0;
  t.length >= 5 && p > .001 && (z = t.reduce((y, x) => y + Math.pow(x - d, 3), 0) / t.length / Math.pow(p, 3));
  let Ve = 0;
  if (r.length >= 4) {
    const m = [];
    for (let y = 1; y < r.length; y++) {
      const x = r[y].x - r[y - 1].x,
        V = r[y].y - r[y - 1].y;
      Math.sqrt(x * x + V * V) > .5 && m.push(Math.atan2(V, x))
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
        V = y.reduce((j, B) => j + Math.pow(B - x, 2), 0) / y.length;
      Ve = Math.sqrt(V)
    }
  }
  return {
    speedAvg: d,
    speedStddev: p,
    jitterAvg: _,
    straightnessAvg: $,
    accelAvg: R,
    accelStddev: M,
    microMovementCount: s,
    movementSegments: i,
    avgSegmentCurvature: $e,
    velocityProfileSkew: z,
    angularVelocityStddev: Ve,
    speeds: t
  }
}

function _n(r) {
  if (r.length < 2) return {
    avg: 0,
    stddev: 0
  };
  const t = [];
  for (let s = 1; s < r.length; s++) t.push(r[s] - r[s - 1]);
  const e = t.reduce((s, o) => s + o, 0) / t.length,
    n = t.reduce((s, o) => s + Math.pow(o - e, 2), 0) / t.length;
  return {
    avg: e,
    stddev: Math.sqrt(n)
  }
}

function dn(r, t) {
  let e = 0,
    n = r.length - 1,
    s = -1;
  for (; e <= n;) {
    const o = e + n >>> 1;
    r[o].t <= t ? (s = o, e = o + 1) : n = o - 1
  }
  return s
}

function fn(r, t) {
  if (r.length === 0 || t.length < 2) return 0;
  let e = 0,
    n = 0;
  for (const s of r) {
    const o = dn(t, s);
    o >= 0 && (e += s - t[o].t, n++)
  }
  return n > 0 ? e / n : 0
}

function hn(r, t) {
  const e = Math.round(r.totalIdleMs + (r.idleStartMs > 0 ? t - r.idleStartMs : 0)),
    n = Math.round(r.totalFocusMs + (r.idleStartMs === 0 ? t - r.focusStartMs : 0));
  return {
    idleMs: e,
    focusMs: n
  }
}

function Rt(r) {
  if (r.length < 3) return -1;
  const t = r[0],
    e = r[r.length - 1];
  if (Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) < 5) return -1;
  let s = 0,
    o = 0;
  for (let i = 1; i < r.length; i++) {
    const c = r[i].x - r[i - 1].x,
      d = r[i].y - r[i - 1].y;
    if (s += Math.sqrt(c * c + d * d), i >= 2) {
      const _ = r[i - 1].x - r[i - 2].x,
        g = r[i - 1].y - r[i - 2].y,
        p = _ * d - g * c,
        R = _ * c + g * d;
      o += Math.abs(Math.atan2(p, R))
    }
  }
  return s > 0 ? o / s : 0
}

function pn() {
  var n;
  let r = 0;
  const t = navigator,
    e = ["hardwareConcurrency", "deviceMemory", "platform", "vendor", "maxTouchPoints", "languages", "plugins", "userAgent"];
  try {
    for (const s of e)
      if (Object.getOwnPropertyDescriptor(navigator, s) !== void 0) {
        r |= 1;
        break
      }
  } catch {}
  try {
    const s = document.createElement("iframe");
    s.style.display = "none", document.body.appendChild(s);
    const o = s.contentWindow;
    if (o) {
      const i = o.Function.prototype.toString,
        c = ["hardwareConcurrency", "platform", "languages"];
      for (const d of c) {
        const _ = Object.getOwnPropertyDescriptor(Navigator.prototype, d);
        if (_ && typeof _.get == "function") {
          const g = Function.prototype.toString.call(_.get),
            p = i.call(_.get);
          if (g !== p) {
            r |= 2;
            break
          }
          if (!p.includes("native code")) {
            r |= 2;
            break
          }
        }
      }
    }
    s.remove()
  } catch {}
  try {
    const s = navigator.userAgent,
      o = navigator.platform;
    if (s && o) {
      const i = /Windows/.test(s),
        c = /Macintosh|Mac OS X/.test(s),
        d = /Linux/.test(s) && !/Android/.test(s),
        _ = /Android/.test(s),
        g = /iPhone|iPad|iPod/.test(s),
        p = /^Win/.test(o),
        R = /^Mac/.test(o),
        M = /^Linux/.test(o),
        A = /^(iPhone|iPad|iPod)/.test(o);
      if ((i && !p || c && !R || d && !M || _ && !M || g && !A) && (r |= 4), t.userAgentData && t.userAgentData.platform) {
        const b = t.userAgentData.platform;
        (i && b !== "Windows" || c && b !== "macOS" || d && b !== "Linux" || _ && b !== "Android") && (r |= 4)
      }
    }
  } catch {}
  try {
    const o = document.createElement("canvas").getContext("webgl");
    if (o) {
      const i = o.getExtension("WEBGL_debug_renderer_info");
      if (i) {
        const c = (o.getParameter(i.UNMASKED_RENDERER_WEBGL) || "").toLowerCase(),
          d = (o.getParameter(i.UNMASKED_VENDOR_WEBGL) || "").toLowerCase(),
          _ = navigator.userAgent,
          g = /Windows/.test(_),
          p = /Macintosh|Mac OS X/.test(_);
        (c.includes("apple") || d.includes("apple")) && g && (r |= 8), c.includes("angle") && p && !c.includes("metal") && (r |= 8), (c.includes("d3d11") || c.includes("direct3d")) && p && (r |= 8)
      }(n = o.getExtension("WEBGL_lose_context")) == null || n.loseContext()
    }
  } catch {}
  try {
    (screen.availWidth > screen.width || screen.availHeight > screen.height) && (r |= 16), screen.pixelDepth !== screen.colorDepth && (r |= 16)
  } catch {}
  try {
    const s = navigator.userAgent;
    if (/Chrome\//.test(s) && !/Edg\//.test(s)) {
      const o = window.chrome;
      o && typeof o.csi != "function" && (r |= 64)
    }
  } catch {}
  try {
    const s = ["hardwareConcurrency", "platform", "maxTouchPoints", "deviceMemory"];
    for (const o of s) {
      const i = Object.getOwnPropertyDescriptor(navigator, o);
      if (i && "value" in i) {
        r |= 128;
        break
      }
    }
  } catch {}
  return r
}

function mn() {
  const r = navigator,
    t = r.plugins ? r.plugins.length : 0,
    e = "ontouchstart" in window || r.maxTouchPoints > 0,
    n = r.maxTouchPoints || 0;
  let s = 0;
  typeof SharedArrayBuffer < "u" && (s |= 1), typeof Intl.Segmenter < "u" && (s |= 2), typeof CSS.highlights < "u" && (s |= 4), r.userAgentData && (s |= 8), window.chrome && (s |= 16), typeof window.InstallTrigger < "u" && (s |= 32), typeof window.WebKitMutationObserver < "u" && (s |= 64), typeof window.MSStream < "u" && (s |= 128);
  let o = 0;
  const i = ["webdriver", "languages", "plugins", "hardwareConcurrency", "platform", "userAgent", "vendor", "maxTouchPoints", "deviceMemory", "cookieEnabled", "pdfViewerEnabled", "connection"],
    c = ["width", "height", "colorDepth", "pixelDepth", "availWidth", "availHeight"],
    d = Function.prototype.toString;
  for (const b of i) try {
    const T = Object.getOwnPropertyDescriptor(Navigator.prototype, b);
    T && typeof T.get == "function" && d.call(T.get).includes("native code") === !1 && o++
  } catch {}
  for (const b of c) try {
    const T = Object.getOwnPropertyDescriptor(Screen.prototype, b);
    T && typeof T.get == "function" && d.call(T.get).includes("native code") === !1 && o++
  } catch {}
  let _ = "",
    g = !0;
  try {
    const b = document.createElement("canvas");
    b.width = 64, b.height = 16;
    const T = b.getContext("2d");
    if (T) {
      T.textBaseline = "top", T.font = "14px Arial", T.fillText("wplace🐾", 2, 2);
      const U = b.toDataURL();
      let $ = 0;
      for (let z = 0; z < U.length; z++) $ = ($ << 5) - $ + U.charCodeAt(z) | 0;
      _ = ($ >>> 0).toString(16).padStart(8, "0"), T.clearRect(0, 0, 64, 16), T.fillText("wplace🐾", 2, 2);
      const $e = b.toDataURL();
      g = U === $e
    }
  } catch {}
  let p = !1;
  try {
    const b = new Error;
    Object.defineProperty(b, "stack", {
      get() {
        return p = !0, ""
      }
    }), console.debug(b)
  } catch {}
  const R = r.languages ? r.languages.length : 0,
    M = (window.outerWidth === 0 || window.outerHeight === 0) && (window.innerWidth === 0 || window.innerHeight === 0),
    A = pn();
  return {
    pc: t,
    sw: screen.width,
    sh: screen.height,
    hts: e,
    mtp: n,
    fb: s,
    ptc: o,
    ch: _,
    cdp: p,
    lc: R,
    odz: M,
    cdr: g,
    adf: A
  }
}

function gn() {
  const r = [];

  function e(n) {
    if (r.push(n), r.length < 30) requestAnimationFrame(e);
    else {
      const s = [];
      for (let i = 1; i < r.length; i++) {
        const c = r[i] - r[i - 1];
        c < 100 && s.push(c)
      }
      if (s.length < 5) return;
      s.sort((i, c) => i - c);
      const o = s[Math.floor(s.length / 2)];
      nr = s.reduce((i, c) => i + Math.abs(c - o), 0) / s.length
    }
  }
  requestAnimationFrame(e)
}

function G(r) {
  return Math.round(r * 1e3) / 1e3
}
const wn = `
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
async function yn() {
  try {
    const r = await fetch(`${pt}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!r.ok) return null;
    const t = await r.json(),
      e = await bn(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function bn(r, t) {
  return new Promise(e => {
    const n = new Blob([wn], {
        type: "application/javascript"
      }),
      s = URL.createObjectURL(n),
      o = new Worker(s),
      i = setTimeout(() => {
        o.terminate(), URL.revokeObjectURL(s), e(null)
      }, 12e4);
    o.onmessage = c => {
      clearTimeout(i), o.terminate(), URL.revokeObjectURL(s), c.data.error ? e(null) : e(c.data.nonce)
    }, o.onerror = () => {
      clearTimeout(i), o.terminate(), URL.revokeObjectURL(s), e(null)
    }, o.postMessage({
      prefix: r,
      difficulty: t
    })
  })
}
const sr = 3;
var ke, Re;
class vn {
  constructor() {
    I(this, ke, P(null));
    I(this, Re, P(0))
  }
  get current() {
    return N(h(this, ke))
  }
  set current(t) {
    k(h(this, ke), t, !0)
  }
  get errorCount() {
    return N(h(this, Re))
  }
  set errorCount(t) {
    k(h(this, Re), t, !0)
  }
}
ke = new WeakMap, Re = new WeakMap;
const L = new vn;
async function Dt(r) {
  if (r === 1) return En();
  if (r === 2) {
    const t = await or();
    return t ? xt("turnstile", t) : !1
  }
  if (r === 3) {
    const t = await Tn();
    return t ? xt("hcaptcha", t) : !1
  }
  return r === 4 ? On() : !1
}
async function En() {
  for (let r = 0; r < sr; r++) try {
    const t = await yn();
    if (!t) continue;
    return await Y.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}
async function xt(r, t) {
  try {
    const e = await Y.postCaptchaSession({
      provider: r,
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

function or() {
  return ar(2)
}

function Tn() {
  return ar(3)
}

function ar(r) {
  const t = ue[r];
  if (t) return t;
  const e = new Promise(n => {
    L.errorCount = 0, L.current = {
      tier: r,
      resolve: s => {
        delete ue[r], n(s)
      }
    }
  });
  return ue[r] = e, e
}

function On() {
  const r = ue[4];
  if (r) return r;
  const t = new Promise(e => {
    L.errorCount = 0, L.current = {
      tier: 4,
      resolve: n => {
        delete ue[4], e(n)
      }
    }
  });
  return ue[4] = t, t
}

function ab(r) {
  const t = L.current;
  !t || t.tier === 4 || (t.resolve(r), L.current = null)
}

function ib() {
  const r = L.current;
  !r || r.tier === 4 || (L.errorCount += 1, L.errorCount >= sr && (r.resolve(void 0), L.current = null))
}

function cb() {
  const r = L.current;
  !r || r.tier !== 4 || (r.resolve(!0), L.current = null)
}

function ub() {
  const r = L.current;
  r && (r.tier === 4 ? r.resolve(!1) : r.resolve(void 0), L.current = null)
}
var a = (r => (r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", r[r.IM_USED = 226] = "IM_USED", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.FOUND = 302] = "FOUND", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.SWITCH_PROXY = 306] = "SWITCH_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.URI_TOO_LONG = 414] = "URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.TOO_EARLY = 425] = "TOO_EARLY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.LOOP_DETECTED = 508] = "LOOP_DETECTED", r[r.NOT_EXTENDED = 510] = "NOT_EXTENDED", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", r[r.AWS_ELB_000 = 0] = "AWS_ELB_000", r[r.THIS_IS_FINE = 218] = "THIS_IS_FINE", r[r.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", r[r.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", r[r.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", r[r.NO_RESPONSE = 444] = "NO_RESPONSE", r[r.RETRY_WITH = 449] = "RETRY_WITH", r[r.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", r[r.REDIRECT_IIS = 451] = "REDIRECT_IIS", r[r.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", r[r.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", r[r.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", r[r.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", r[r.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", r[r.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", r[r.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", r[r.INVALID_TOKEN = 498] = "INVALID_TOKEN", r[r.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", r[r.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", r[r.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", r[r.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", r[r.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", r[r.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", r[r.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", r[r.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", r[r.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", r[r.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", r[r.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", r[r.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", r[r.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", r[r.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", r[r.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", r[r.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", r[r.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", r[r.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", r[r.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", r[r.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", r[r.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", r[r.REQUEST_DENIED = 999] = "REQUEST_DENIED", r))(a || {});
const Sn = () => "Your account has been suspended for breaking the rules",
  In = () => "Sua conta foi suspensa por quebrar as regras",
  An = () => "您的账号因违反规则已被暂停",
  Nn = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  kn = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Rn = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Dn = () => "Il tuo account è stato sospeso per aver infranto le regole",
  xn = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Pn = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Mn = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ln = () => "Ваш обліковий запис було призупинено за порушення правил",
  Un = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  jn = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Sn() : e === "pt" ? In() : e === "ch" ? An() : e === "de" ? Nn() : e === "es" ? kn() : e === "fr" ? Rn() : e === "it" ? Dn() : e === "jp" ? xn() : e === "pl" ? Pn() : e === "ru" ? Mn() : e === "uk" ? Ln() : Un()
  },
  Bn = () => "Alliance name already taken",
  Cn = () => "Já possui uma aliança com esse nome",
  zn = () => "该联盟名称已被占用",
  qn = () => "Der Allianzname ist bereits vergeben",
  Fn = () => "Ese nombre de alianza ya está en uso",
  Kn = () => "Ce nom d’alliance est déjà pris",
  $n = () => "Esiste già un'alleanza con questo nome",
  Vn = () => "このアライアンス名は既に使用されています。",
  Gn = () => "Nazwa sojuszu jest już zajęta",
  Hn = () => "Такое название альянса уже используется",
  Wn = () => "Назва альянсу вже зайнята",
  Yn = () => "Tên liên minh đã được sử dụng",
  Jn = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Bn() : e === "pt" ? Cn() : e === "ch" ? zn() : e === "de" ? qn() : e === "es" ? Fn() : e === "fr" ? Kn() : e === "it" ? $n() : e === "jp" ? Vn() : e === "pl" ? Gn() : e === "ru" ? Hn() : e === "uk" ? Wn() : Yn()
  },
  Qn = () => "Alliance name exceeded the maximum number of characters",
  Xn = () => "O nome da aliança excedeu o número máximo de caracteres",
  Zn = () => "联盟名称超过最大字符数限制",
  es = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  ts = () => "El nombre de la alianza superó el número máximo de caracteres",
  rs = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  ns = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  ss = () => "アライアンス名が最大文字数を超えています。",
  os = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  as = () => "Название альянса превышает максимальную длину",
  is = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  cs = () => "Tên liên minh vượt quá số ký tự cho phép",
  us = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Qn() : e === "pt" ? Xn() : e === "ch" ? Zn() : e === "de" ? es() : e === "es" ? ts() : e === "fr" ? rs() : e === "it" ? ns() : e === "jp" ? ss() : e === "pl" ? os() : e === "ru" ? as() : e === "uk" ? is() : cs()
  },
  ls = () => "Alliance with empty name",
  _s = () => "Aliança com nome vazio",
  ds = () => "名称为空的联盟",
  fs = () => "Allianz mit leerem Namen",
  hs = () => "Alianza con nombre vacío",
  ps = () => "Alliance avec nom vide",
  ms = () => "Alleanza con nome vuoto",
  gs = () => "名前が空のアライアンスです。",
  ws = () => "Sojusz z pustą nazwą",
  ys = () => "Альянс с пустым названием",
  bs = () => "Альянс із порожньою назвою",
  vs = () => "Liên minh không có tên",
  Es = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ls() : e === "pt" ? _s() : e === "ch" ? ds() : e === "de" ? fs() : e === "es" ? hs() : e === "fr" ? ps() : e === "it" ? ms() : e === "jp" ? gs() : e === "pl" ? ws() : e === "ru" ? ys() : e === "uk" ? bs() : vs()
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
  Ls = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ts() : e === "pt" ? Os() : e === "ch" ? Ss() : e === "de" ? Is() : e === "es" ? As() : e === "fr" ? Ns() : e === "it" ? ks() : e === "jp" ? Rs() : e === "pl" ? Ds() : e === "ru" ? xs() : e === "uk" ? Ps() : Ms()
  },
  Us = () => "Use of software to completely automate painting",
  js = () => "Uso de software para pintar de forma completamente automatizada ",
  Bs = () => "使用软件完全自动化绘制",
  Cs = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  zs = () => "Uso de software para automatizar completamente la pintura",
  qs = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Fs = () => "Uso di software per dipingere in modo completamente automatizzato",
  Ks = () => "ペイントを完全に自動化するソフトウェアの使用",
  $s = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Vs = () => "Использование программ для полной автоматизации рисования",
  Gs = () => "Використання програм, які повністю автоматизують малювання",
  Hs = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Ws = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Us() : e === "pt" ? js() : e === "ch" ? Bs() : e === "de" ? Cs() : e === "es" ? zs() : e === "fr" ? qs() : e === "it" ? Fs() : e === "jp" ? Ks() : e === "pl" ? $s() : e === "ru" ? Vs() : e === "uk" ? Gs() : Hs()
  },
  Ys = () => "Breaking the rules",
  Js = () => "Quebrar as regras",
  Qs = () => "违反规则",
  Xs = () => "Regeln brechen",
  Zs = () => "Romper las reglas",
  eo = () => "Violation des règles",
  to = () => "Violazione delle regole",
  ro = () => "ルール違反",
  no = () => "Łamanie zasad",
  so = () => "Нарушение правил",
  oo = () => "Порушення правил",
  ao = () => "Vi phạm luật",
  io = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ys() : e === "pt" ? Js() : e === "ch" ? Qs() : e === "de" ? Xs() : e === "es" ? Zs() : e === "fr" ? eo() : e === "it" ? to() : e === "jp" ? ro() : e === "pl" ? no() : e === "ru" ? so() : e === "uk" ? oo() : ao()
  },
  co = () => "You have broken one of Wplace's rules",
  uo = () => "Você quebrou uma das regras do Wplace",
  lo = () => "你违反了 Wplace 的一项规则",
  _o = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  fo = () => "Has infringido una de las reglas de Wplace",
  ho = () => "Vous avez enfreint l’une des règles de Wplace",
  po = () => "Hai infranto una delle regole di Wplace",
  mo = () => "Wplaceのルールのいずれかに違反しました。",
  go = () => "Złamałeś jedną z zasad Wplace",
  wo = () => "Вы нарушили одно из правил Wplace",
  yo = () => "Ви порушили одне з правил Wplace",
  bo = () => "Bạn đã vi phạm một trong các luật của Wplace",
  vo = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? co() : e === "pt" ? uo() : e === "ch" ? lo() : e === "de" ? _o() : e === "es" ? fo() : e === "fr" ? ho() : e === "it" ? po() : e === "jp" ? mo() : e === "pl" ? go() : e === "ru" ? wo() : e === "uk" ? yo() : bo()
  },
  Eo = () => "You cannot paint over event pixels",
  To = () => "Você não pode pintar sobre pixels de eventos",
  Oo = () => "你不能覆盖活动像素",
  So = () => "Du kannst nicht über Event-Pixel malen",
  Io = () => "No puedes pintar sobre píxeles de evento",
  Ao = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  No = () => "Non puoi dipingere sopra i pixel dell'evento",
  ko = () => "イベント用のピクセルの上には塗れません。",
  Ro = () => "Nie możesz malować po pikselach wydarzenia",
  Do = () => "Вы не можете рисовать по пикселям события",
  xo = () => "Ви не можете малювати поверх пікселів події",
  Po = () => "Bạn không thể tô lên pixel sự kiện",
  Pt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Eo() : e === "pt" ? To() : e === "ch" ? Oo() : e === "de" ? So() : e === "es" ? Io() : e === "fr" ? Ao() : e === "it" ? No() : e === "jp" ? ko() : e === "pl" ? Ro() : e === "ru" ? Do() : e === "uk" ? xo() : Po()
  },
  Mo = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Lo = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Uo = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  jo = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Bo = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Co = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  zo = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  qo = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Fo = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Ko = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  $o = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Vo = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Go = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Mo() : e === "pt" ? Lo() : e === "ch" ? Uo() : e === "de" ? jo() : e === "es" ? Bo() : e === "fr" ? Co() : e === "it" ? zo() : e === "jp" ? qo() : e === "pl" ? Fo() : e === "ru" ? Ko() : e === "uk" ? $o() : Vo()
  },
  Ho = () => "Challenge verification not completed",
  Wo = () => "Verificação do desafio não concluída",
  Yo = () => "挑战验证未完成",
  Jo = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Qo = () => "Verificación del desafío no completada",
  Xo = () => "Vérification du défi non terminée",
  Zo = () => "Verifica della sfida non completata",
  ea = () => "チャレンジ検証が完了していません",
  ta = () => "Weryfikacja wyzwania niezakończona",
  ra = () => "Верификация вызова не завершена",
  na = () => "Перевірку виклику не завершено",
  sa = () => "Xác minh thử thách chưa hoàn thành",
  nt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ho() : e === "pt" ? Wo() : e === "ch" ? Yo() : e === "de" ? Jo() : e === "es" ? Qo() : e === "fr" ? Xo() : e === "it" ? Zo() : e === "jp" ? ea() : e === "pl" ? ta() : e === "ru" ? ra() : e === "uk" ? na() : sa()
  },
  oa = () => "Couldn't complete the purchase. This item does not exist.",
  aa = () => "Não foi possível concluir a compra. Este item não existe.",
  ia = () => "无法完成购买。该物品不存在。",
  ca = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  ua = () => "No se pudo completar la compra. Este ítem no existe.",
  la = () => "Achat impossible. Cet objet n’existe pas.",
  _a = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  da = () => "購入を完了できませんでした。このアイテムは存在しません。",
  fa = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  ha = () => "Не удалось завершить покупку. Этот предмет не существует.",
  pa = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  ma = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  Mt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? oa() : e === "pt" ? aa() : e === "ch" ? ia() : e === "de" ? ca() : e === "es" ? ua() : e === "fr" ? la() : e === "it" ? _a() : e === "jp" ? da() : e === "pl" ? fa() : e === "ru" ? ha() : e === "uk" ? pa() : ma()
  },
  ga = () => "Your phone number's country doesn't match your current location. Please use a local number.",
  wa = () => "O país do seu número de telefone não corresponde à sua localização atual. Por favor, use um número local.",
  ya = () => "您的电话号码所属国家与您当前位置不匹配。请使用本地号码。",
  ba = () => "Das Land deiner Telefonnummer stimmt nicht mit deinem aktuellen Standort überein. Bitte verwende eine lokale Nummer.",
  va = () => "El país de tu número de teléfono no coincide con tu ubicación actual. Por favor, usa un número local.",
  Ea = () => "Le pays de votre numéro de téléphone ne correspond pas à votre localisation actuelle. Veuillez utiliser un numéro local.",
  Ta = () => "Il paese del tuo numero di telefono non corrisponde alla tua posizione attuale. Per favore usa un numero locale.",
  Oa = () => "電話番号の国があなたの現在地と一致しません。現地の番号を使用してください。",
  Sa = () => "Kraj Twojego numeru telefonu nie odpowiada Twojej aktualnej lokalizacji. Użyj lokalnego numeru.",
  Ia = () => "Страна вашего номера телефона не совпадает с вашим текущим местоположением. Пожалуйста, используйте местный номер.",
  Aa = () => "Країна вашого номера телефону не збігається з вашим поточним місцезнаходженням. Будь ласка, використовуйте місцевий номер.",
  Na = () => "Quốc gia của số điện thoại không khớp với vị trí hiện tại của bạn. Vui lòng sử dụng số địa phương.",
  ka = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ga() : e === "pt" ? wa() : e === "ch" ? ya() : e === "de" ? ba() : e === "es" ? va() : e === "fr" ? Ea() : e === "it" ? Ta() : e === "jp" ? Oa() : e === "pl" ? Sa() : e === "ru" ? Ia() : e === "uk" ? Aa() : Na()
  },
  Ra = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  Da = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  xa = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  Pa = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  Ma = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  La = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  Ua = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  ja = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  Ba = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  Ca = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  za = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  qa = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  Lt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ra() : e === "pt" ? Da() : e === "ch" ? xa() : e === "de" ? Pa() : e === "es" ? Ma() : e === "fr" ? La() : e === "it" ? Ua() : e === "jp" ? ja() : e === "pl" ? Ba() : e === "ru" ? Ca() : e === "uk" ? za() : qa()
  },
  Fa = () => "Doxxing",
  Ka = () => "Doxxing",
  $a = () => "人肉搜索",
  Va = () => "Doxxing",
  Ga = () => "Doxxing",
  Ha = () => "Doxxing",
  Wa = () => "Doxxing",
  Ya = () => "ドックス（Doxxing）",
  Ja = () => "Doxxing",
  Qa = () => "Докcинг",
  Xa = () => "Докcинг",
  Za = () => "Doxxing",
  ei = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Fa() : e === "pt" ? Ka() : e === "ch" ? $a() : e === "de" ? Va() : e === "es" ? Ga() : e === "fr" ? Ha() : e === "it" ? Wa() : e === "jp" ? Ya() : e === "pl" ? Ja() : e === "ru" ? Qa() : e === "uk" ? Xa() : Za()
  },
  ti = () => "Released other's personal information without their consent",
  ri = () => "Vazar informações pessoais de terceiros sem consentimento",
  ni = () => "在未获同意的情况下公开他人个人信息",
  si = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  oi = () => "Divulgó información personal de otra persona sin su consentimiento",
  ai = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  ii = () => "Diffusione di informazioni personali di terzi senza consenso",
  ci = () => "他人の個人情報を同意なく公開した。",
  ui = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  li = () => "Публикация личной информации других людей без их согласия",
  _i = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  di = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  fi = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ti() : e === "pt" ? ri() : e === "ch" ? ni() : e === "de" ? si() : e === "es" ? oi() : e === "fr" ? ai() : e === "it" ? ii() : e === "jp" ? ci() : e === "pl" ? ui() : e === "ru" ? li() : e === "uk" ? _i() : di()
  },
  hi = () => "This email is already in use.",
  pi = () => "Este e-mail já está em uso.",
  mi = () => "This email is already in use.",
  gi = () => "This email is already in use.",
  wi = () => "Este correo electrónico ya está en uso.",
  yi = () => "This email is already in use.",
  bi = () => "Questa email è già in uso.",
  vi = () => "This email is already in use.",
  Ei = () => "This email is already in use.",
  Ti = () => "This email is already in use.",
  Oi = () => "This email is already in use.",
  Si = () => "This email is already in use.",
  Ii = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? hi() : e === "pt" ? pi() : e === "ch" ? mi() : e === "de" ? gi() : e === "es" ? wi() : e === "fr" ? yi() : e === "it" ? bi() : e === "jp" ? vi() : e === "pl" ? Ei() : e === "ru" ? Ti() : e === "uk" ? Oi() : Si()
  },
  Ai = r => `This email is already in use by user #${r.userId}.`,
  Ni = r => `Este e-mail já está em uso pelo usuário #${r.userId}.`,
  ki = r => `This email is already in use by user #${r.userId}.`,
  Ri = r => `This email is already in use by user #${r.userId}.`,
  Di = r => `Este correo electrónico ya está en uso por el usuario #${r.userId}.`,
  xi = r => `This email is already in use by user #${r.userId}.`,
  Pi = r => `Questa email è già in uso dall'utente #${r.userId}.`,
  Mi = r => `This email is already in use by user #${r.userId}.`,
  Li = r => `This email is already in use by user #${r.userId}.`,
  Ui = r => `This email is already in use by user #${r.userId}.`,
  ji = r => `This email is already in use by user #${r.userId}.`,
  Bi = r => `This email is already in use by user #${r.userId}.`,
  Ci = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ai(r) : e === "pt" ? Ni(r) : e === "ch" ? ki(r) : e === "de" ? Ri(r) : e === "es" ? Di(r) : e === "fr" ? xi(r) : e === "it" ? Pi(r) : e === "jp" ? Mi(r) : e === "pl" ? Li(r) : e === "ru" ? Ui(r) : e === "uk" ? ji(r) : Bi(r)
  },
  zi = () => "Enter a valid email address.",
  qi = () => "Informe um endereço de e-mail válido.",
  Fi = () => "Enter a valid email address.",
  Ki = () => "Enter a valid email address.",
  $i = () => "Introduce una dirección de correo electrónico válida.",
  Vi = () => "Enter a valid email address.",
  Gi = () => "Inserisci un indirizzo email valido.",
  Hi = () => "Enter a valid email address.",
  Wi = () => "Enter a valid email address.",
  Yi = () => "Enter a valid email address.",
  Ji = () => "Enter a valid email address.",
  Qi = () => "Enter a valid email address.",
  Xi = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? zi() : e === "pt" ? qi() : e === "ch" ? Fi() : e === "de" ? Ki() : e === "es" ? $i() : e === "fr" ? Vi() : e === "it" ? Gi() : e === "jp" ? Hi() : e === "pl" ? Wi() : e === "ru" ? Yi() : e === "uk" ? Ji() : Qi()
  },
  Zi = r => `Error while painting: ${r.err}`,
  ec = r => `Erro enquanto pinta: ${r.err}`,
  tc = r => `绘制时出错：${r.err}`,
  rc = r => `Fehler beim Malen: ${r.err}`,
  nc = r => `Error al pintar: ${r.err}`,
  sc = r => `Erreur lors de la peinture : ${r.err}`,
  oc = r => `Errore durante la pittura: ${r.err}`,
  ac = r => `ペイント中にエラーが発生しました: ${r.err}`,
  ic = r => `Błąd podczas malowania: ${r.err}`,
  cc = r => `Ошибка при рисовании: ${r.err}`,
  uc = r => `Помилка під час малювання: ${r.err}`,
  lc = r => `Lỗi khi tô: ${r.err}`,
  _c = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Zi(r) : e === "pt" ? ec(r) : e === "ch" ? tc(r) : e === "de" ? rc(r) : e === "es" ? nc(r) : e === "fr" ? sc(r) : e === "it" ? oc(r) : e === "jp" ? ac(r) : e === "pl" ? ic(r) : e === "ru" ? cc(r) : e === "uk" ? uc(r) : lc(r)
  },
  dc = () => "Exceeded maximum number of characters",
  fc = () => "Excedeu o número máximo de caracteres permitidos",
  hc = () => "超出最大字符数",
  pc = () => "Maximale Zeichenanzahl überschritten",
  mc = () => "Se excedió el número máximo de caracteres",
  gc = () => "Nombre maximal de caractères dépassé",
  wc = () => "Numero massimo di caratteri superato",
  yc = () => "最大文字数を超過しました",
  bc = () => "Przekroczono maksymalną liczbę znaków",
  vc = () => "Превышено максимальное количество символов",
  Ec = () => "Перевищено максимальну кількість символів",
  Tc = () => "Đã vượt quá số ký tự tối đa",
  Oc = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? dc() : e === "pt" ? fc() : e === "ch" ? hc() : e === "de" ? pc() : e === "es" ? mc() : e === "fr" ? gc() : e === "it" ? wc() : e === "jp" ? yc() : e === "pl" ? bc() : e === "ru" ? vc() : e === "uk" ? Ec() : Tc()
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
  Lc = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  Uc = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  jc = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Sc() : e === "pt" ? Ic() : e === "ch" ? Ac() : e === "de" ? Nc() : e === "es" ? kc() : e === "fr" ? Rc() : e === "it" ? Dc() : e === "jp" ? xc() : e === "pl" ? Pc() : e === "ru" ? Mc() : e === "uk" ? Lc() : Uc()
  },
  Bc = () => "Griefing",
  Cc = () => "Griefing",
  zc = () => "破坏行为",
  qc = () => "Griefing",
  Fc = () => "Griefing",
  Kc = () => "Griefing",
  $c = () => "Griefing",
  Vc = () => "グリーフィング",
  Gc = () => "Griefing",
  Hc = () => "Гриферство",
  Wc = () => "Гріфінг",
  Yc = () => "Griefing",
  Jc = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Bc() : e === "pt" ? Cc() : e === "ch" ? zc() : e === "de" ? qc() : e === "es" ? Fc() : e === "fr" ? Kc() : e === "it" ? $c() : e === "jp" ? Vc() : e === "pl" ? Gc() : e === "ru" ? Hc() : e === "uk" ? Wc() : Yc()
  },
  Qc = () => "Messed up with other's artworks",
  Xc = () => "Estragou os desenhos dos outros",
  Zc = () => "破坏了他人的作品",
  eu = () => "Kunstwerke anderer beschädigt",
  tu = () => "Arruinó las obras de arte de otros",
  ru = () => "A abîmé les œuvres des autres",
  nu = () => "Ha rovinato i disegni degli altri",
  su = () => "他人の作品を荒らした",
  ou = () => "Zniszczył prace innych",
  au = () => "Испортил чужие рисунки",
  iu = () => "Зіпсував роботи інших",
  cu = () => "Phá hỏng tranh của người khác",
  uu = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Qc() : e === "pt" ? Xc() : e === "ch" ? Zc() : e === "de" ? eu() : e === "es" ? tu() : e === "fr" ? ru() : e === "it" ? nu() : e === "jp" ? su() : e === "pl" ? ou() : e === "ru" ? au() : e === "uk" ? iu() : cu()
  },
  lu = () => "Hate speech",
  _u = () => "Discurso de Ódio",
  du = () => "仇恨言论",
  fu = () => "Hassrede",
  hu = () => "Discurso de odio",
  pu = () => "Discours haineux",
  mu = () => "Discorso d'odio",
  gu = () => "ヘイトスピーチ",
  wu = () => "Mowa nienawiści",
  yu = () => "Речь ненависти",
  bu = () => "Мова ворожнечі",
  vu = () => "Ngôn từ thù hằn",
  Eu = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? lu() : e === "pt" ? _u() : e === "ch" ? du() : e === "de" ? fu() : e === "es" ? hu() : e === "fr" ? pu() : e === "it" ? mu() : e === "jp" ? gu() : e === "pl" ? wu() : e === "ru" ? yu() : e === "uk" ? bu() : vu()
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
  Lu = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Tu() : e === "pt" ? Ou() : e === "ch" ? Su() : e === "de" ? Iu() : e === "es" ? Au() : e === "fr" ? Nu() : e === "it" ? ku() : e === "jp" ? Ru() : e === "pl" ? Du() : e === "ru" ? xu() : e === "uk" ? Pu() : Mu()
  },
  Uu = () => "Inappropriate content",
  ju = () => "Conteúdo inapropriado",
  Bu = () => "不当内容",
  Cu = () => "Unangemessene Inhalte",
  zu = () => "Contenido inapropiado",
  qu = () => "Contenu inapproprié",
  Fu = () => "Contenuto inappropriato",
  Ku = () => "不適切なコンテンツ",
  $u = () => "Nieodpowiednie treści",
  Vu = () => "Неприемлемый контент",
  Gu = () => "Неприйнятний вміст",
  Hu = () => "Nội dung không phù hợp",
  Wu = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Uu() : e === "pt" ? ju() : e === "ch" ? Bu() : e === "de" ? Cu() : e === "es" ? zu() : e === "fr" ? qu() : e === "it" ? Fu() : e === "jp" ? Ku() : e === "pl" ? $u() : e === "ru" ? Vu() : e === "uk" ? Gu() : Hu()
  },
  Yu = () => "Explicit, hateful, or illegal content",
  Ju = () => "Conteúdo explícito, de ódio ou ilegal",
  Qu = () => "露骨、仇恨或非法内容",
  Xu = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  Zu = () => "Contenido explícito, de odio o ilegal",
  el = () => "Contenu explicite, haineux ou illégal",
  tl = () => "Contenuto esplicito, d'odio o illegale",
  rl = () => "露骨、差別的、または違法なコンテンツ",
  nl = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  sl = () => "Откровенный, разжигающий ненависть или незаконный контент",
  ol = () => "Відвертий, ворожий або незаконний вміст",
  al = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  il = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Yu() : e === "pt" ? Ju() : e === "ch" ? Qu() : e === "de" ? Xu() : e === "es" ? Zu() : e === "fr" ? el() : e === "it" ? tl() : e === "jp" ? rl() : e === "pl" ? nl() : e === "ru" ? sl() : e === "uk" ? ol() : al()
  },
  cl = () => "Invalid captcha. Please try again.",
  ul = () => "Captcha inválido. Por favor, tente novamente.",
  ll = () => "验证码无效，请重试。",
  _l = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  dl = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  fl = () => "Captcha invalide. Veuillez réessayer.",
  hl = () => "Captcha non valido. Riprova.",
  pl = () => "キャプチャが無効です。もう一度お試しください。",
  ml = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  gl = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  wl = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  yl = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  bl = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? cl() : e === "pt" ? ul() : e === "ch" ? ll() : e === "de" ? _l() : e === "es" ? dl() : e === "fr" ? fl() : e === "it" ? hl() : e === "jp" ? pl() : e === "pl" ? ml() : e === "ru" ? gl() : e === "uk" ? wl() : yl()
  },
  vl = () => "Invalid challenge response",
  El = () => "Resposta de desafio inválida",
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
  Pl = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? vl() : e === "pt" ? El() : e === "ch" ? Tl() : e === "de" ? Ol() : e === "es" ? Sl() : e === "fr" ? Il() : e === "it" ? Al() : e === "jp" ? Nl() : e === "pl" ? kl() : e === "ru" ? Rl() : e === "uk" ? Dl() : xl()
  },
  Ml = () => "The verification code is incorrect. Please check it and try again.",
  Ll = () => "Código inválido",
  Ul = () => "验证码不正确。请检查后重试。",
  jl = () => "Der Bestätigungscode ist nicht korrekt. Bitte überprüfe ihn und versuche es erneut.",
  Bl = () => "El código de verificación es incorrecto. Por favor, revísalo e inténtalo de nuevo.",
  Cl = () => "Le code de vérification est incorrect. Veuillez le vérifier et réessayer.",
  zl = () => "Il codice di verifica non è corretto. Controllalo e riprova.",
  ql = () => "確認コードが正しくありません。コードを確認してもう一度お試しください。",
  Fl = () => "Kod weryfikacyjny jest nieprawidłowy. Sprawdź go i spróbuj ponownie.",
  Kl = () => "Код подтверждения неверный. Пожалуйста, проверьте его и попробуйте снова.",
  $l = () => "Код підтвердження неправильний. Будь ласка, перевірте його та спробуйте ще раз.",
  Vl = () => "Mã xác minh không đúng. Vui lòng kiểm tra lại và thử lại.",
  Gl = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ml() : e === "pt" ? Ll() : e === "ch" ? Ul() : e === "de" ? jl() : e === "es" ? Bl() : e === "fr" ? Cl() : e === "it" ? zl() : e === "jp" ? ql() : e === "pl" ? Fl() : e === "ru" ? Kl() : e === "uk" ? $l() : Vl()
  },
  Hl = () => "Invalid discord.",
  Wl = () => "Discord inválido.",
  Yl = () => "无效的 Discord。",
  Jl = () => "Ungültiger Discord.",
  Ql = () => "Discord inválido.",
  Xl = () => "Discord invalide.",
  Zl = () => "Discord non valido.",
  e_ = () => "無効なDiscordアカウントです。",
  t_ = () => "Nieprawidłowy Discord.",
  r_ = () => "Неверный Discord.",
  n_ = () => "Некоректний Discord.",
  s_ = () => "Discord không hợp lệ.",
  o_ = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Hl() : e === "pt" ? Wl() : e === "ch" ? Yl() : e === "de" ? Jl() : e === "es" ? Ql() : e === "fr" ? Xl() : e === "it" ? Zl() : e === "jp" ? e_() : e === "pl" ? t_() : e === "ru" ? r_() : e === "uk" ? n_() : s_()
  },
  a_ = () => "The name contains disallowed characters or words. Please choose a different name.",
  i_ = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  c_ = () => "名称包含禁止的字符或词语，请选择其他名称。",
  u_ = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  l_ = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  __ = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  d_ = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  f_ = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  h_ = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  p_ = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  m_ = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  g_ = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  Ut = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? a_() : e === "pt" ? i_() : e === "ch" ? c_() : e === "de" ? u_() : e === "es" ? l_() : e === "fr" ? __() : e === "it" ? d_() : e === "jp" ? f_() : e === "pl" ? h_() : e === "ru" ? p_() : e === "uk" ? m_() : g_()
  },
  w_ = () => "Please enter a valid phone number with country code.",
  y_ = () => "Insira um número de telefone válido com código do país.",
  b_ = () => "请输入带国家代码的有效电话号码。",
  v_ = () => "Bitte gib eine gültige Telefonnummer mit Landesvorwahl ein.",
  E_ = () => "Introduce un número de teléfono válido con código de país.",
  T_ = () => "Veuillez saisir un numéro de téléphone valide avec l'indicatif du pays.",
  O_ = () => "Inserisci un numero di telefono valido con il prefisso internazionale.",
  S_ = () => "国番号付きの有効な電話番号を入力してください。",
  I_ = () => "Wprowadź poprawny numer telefonu wraz z kodem kraju.",
  A_ = () => "Введите действительный номер телефона с кодом страны.",
  N_ = () => "Будь ласка, введіть дійсний номер телефону з кодом країни.",
  k_ = () => "Vui lòng nhập số điện thoại hợp lệ kèm mã quốc gia.",
  R_ = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? w_() : e === "pt" ? y_() : e === "ch" ? b_() : e === "de" ? v_() : e === "es" ? E_() : e === "fr" ? T_() : e === "it" ? O_() : e === "jp" ? S_() : e === "pl" ? I_() : e === "ru" ? A_() : e === "uk" ? N_() : k_()
  },
  D_ = () => "This phone number is not supported. Please use a mobile number that can receive SMS.",
  x_ = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  P_ = () => "不支持此电话号码。请使用可以接收短信的手机号码。",
  M_ = () => "Diese Telefonnummer wird nicht unterstützt. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  L_ = () => "Este número de teléfono no es compatible. Por favor, usa un número de móvil que pueda recibir SMS.",
  U_ = () => "Ce numéro de téléphone n'est pas pris en charge. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  j_ = () => "Questo numero di telefono non è supportato. Utilizza un numero di cellulare che possa ricevere SMS.",
  B_ = () => "この電話番号はサポートされていません。SMSを受信できる携帯電話番号をご使用ください。",
  C_ = () => "Ten numer telefonu nie jest obsługiwany. Użyj numeru komórkowego, który może odbierać SMS-y.",
  z_ = () => "Этот номер телефона не поддерживается. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  q_ = () => "Цей номер телефону не підтримується. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  F_ = () => "Số điện thoại này không được hỗ trợ. Vui lòng sử dụng số di động có thể nhận SMS.",
  K_ = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? D_() : e === "pt" ? x_() : e === "ch" ? P_() : e === "de" ? M_() : e === "es" ? L_() : e === "fr" ? U_() : e === "it" ? j_() : e === "jp" ? B_() : e === "pl" ? C_() : e === "ru" ? z_() : e === "uk" ? q_() : F_()
  },
  $_ = () => "The new leader must be a member of the alliance",
  V_ = () => "O novo líder deve ser um membro da aliança",
  G_ = () => "新盟主必须是联盟成员",
  H_ = () => "Der neue Anführer muss Mitglied der Allianz sein",
  W_ = () => "El nuevo líder debe ser miembro de la alianza",
  Y_ = () => "Le nouveau chef doit être membre de l’alliance",
  J_ = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Q_ = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  X_ = () => "Nowy lider musi być członkiem sojuszu",
  Z_ = () => "Новый лидер должен быть участником альянса",
  ed = () => "Новий лідер має бути учасником альянсу",
  td = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  rd = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? $_() : e === "pt" ? V_() : e === "ch" ? G_() : e === "de" ? H_() : e === "es" ? W_() : e === "fr" ? Y_() : e === "it" ? J_() : e === "jp" ? Q_() : e === "pl" ? X_() : e === "ru" ? Z_() : e === "uk" ? ed() : td()
  },
  nd = () => "Leaderboard is temporarily disabled",
  sd = () => "O ranking está temporariamente desativado",
  od = () => "排行榜已暂时停用",
  ad = () => "Die Bestenliste ist vorübergehend deaktiviert",
  id = () => "La clasificación está deshabilitada temporalmente",
  cd = () => "Le classement est temporairement désactivé",
  ud = () => "La classifica è temporaneamente disattivata",
  ld = () => "ランキングは一時的に無効になっています。",
  _d = () => "Ranking jest tymczasowo wyłączony",
  dd = () => "Таблица лидеров временно отключена",
  fd = () => "Таблиця лідерів тимчасово вимкнена",
  hd = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  J = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? nd() : e === "pt" ? sd() : e === "ch" ? od() : e === "de" ? ad() : e === "es" ? id() : e === "fr" ? cd() : e === "it" ? ud() : e === "jp" ? ld() : e === "pl" ? _d() : e === "ru" ? dd() : e === "uk" ? fd() : hd()
  },
  pd = () => "Location name is too big (max. 128 characters)",
  md = () => "Nome da localização é grande demais (max. 128 caracteres)",
  gd = () => "位置名称过长（最大 128 个字符）",
  wd = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  yd = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  bd = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  vd = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Ed = () => "場所の名前が長すぎます（最大128文字）。",
  Td = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  Od = () => "Название локации слишком длинное (макс. 128 символов)",
  Sd = () => "Назва локації надто довга (макс. 128 символів)",
  Id = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  Ad = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? pd() : e === "pt" ? md() : e === "ch" ? gd() : e === "de" ? wd() : e === "es" ? yd() : e === "fr" ? bd() : e === "it" ? vd() : e === "jp" ? Ed() : e === "pl" ? Td() : e === "ru" ? Od() : e === "uk" ? Sd() : Id()
  },
  Nd = () => "Multi-accounting",
  kd = () => "Múltiplas contas",
  Rd = () => "多账号",
  Dd = () => "Multi-Accounting",
  xd = () => "Multi-cuentas",
  Pd = () => "Multi-comptes",
  Md = () => "Multi-account",
  Ld = () => "複数アカウント使用",
  Ud = () => "Multi-konta",
  jd = () => "Мультиаккаунт",
  Bd = () => "Мультиакаунтинг",
  Cd = () => "Nhiều tài khoản",
  zd = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Nd() : e === "pt" ? kd() : e === "ch" ? Rd() : e === "de" ? Dd() : e === "es" ? xd() : e === "fr" ? Pd() : e === "it" ? Md() : e === "jp" ? Ld() : e === "pl" ? Ud() : e === "ru" ? jd() : e === "uk" ? Bd() : Cd()
  },
  qd = () => "Use more than one account to paint pixels",
  Fd = () => "Usar mais de uma conta para pintar",
  Kd = () => "使用多个账号绘制像素",
  $d = () => "Mehr als ein Konto zum Malen verwenden",
  Vd = () => "Uso de más de una cuenta para pintar píxeles",
  Gd = () => "Utiliser plus d’un compte pour peindre",
  Hd = () => "Usare più di un account per dipingere",
  Wd = () => "複数のアカウントを使ってピクセルを塗った。",
  Yd = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Jd = () => "Использование более одного аккаунта для рисования",
  Qd = () => "Використання більше ніж одного акаунта для малювання",
  Xd = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Zd = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? qd() : e === "pt" ? Fd() : e === "ch" ? Kd() : e === "de" ? $d() : e === "es" ? Vd() : e === "fr" ? Gd() : e === "it" ? Hd() : e === "jp" ? Wd() : e === "pl" ? Yd() : e === "ru" ? Jd() : e === "uk" ? Qd() : Xd()
  },
  ef = r => `You can change your name again in ${r.days} days`,
  tf = r => `Você pode alterar seu nome novamente em ${r.days} dias.`,
  rf = r => `你可以在 ${r.days} 天后再次修改名称`,
  nf = r => `Du kannst deinen Namen in ${r.days} Tagen erneut ändern`,
  sf = r => `Podrás cambiar tu nombre de nuevo en ${r.days} días`,
  of = r => `Vous pourrez changer votre nom à nouveau dans ${r.days} jours`,
  af = r => `Potrai cambiare di nuovo il tuo nome tra ${r.days} giorni.`,
  cf = r => `${r.days}日後に再び名前を変更できます。`,
  uf = r => `Następną zmianę nazwy możesz wykonać za ${r.days} dni`,
  lf = r => `Вы сможете изменить имя снова через ${r.days} дн.`,
  _f = r => `Ви зможете змінити імʼя знову через ${r.days} днів`,
  df = r => `Bạn có thể đổi tên lại sau ${r.days} ngày`,
  ff = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ef(r) : e === "pt" ? tf(r) : e === "ch" ? rf(r) : e === "de" ? nf(r) : e === "es" ? sf(r) : e === "fr" ? of(r) : e === "it" ? af(r) : e === "jp" ? cf(r) : e === "pl" ? uf(r) : e === "ru" ? lf(r) : e === "uk" ? _f(r) : df(r)
  },
  hf = () => "No internet access or the servers are offline. Try again later.",
  pf = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  mf = () => "没有网络连接或服务器已离线。请稍后重试。",
  gf = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  wf = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  yf = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  bf = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  vf = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Ef = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Tf = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  Of = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  Sf = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  If = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? hf() : e === "pt" ? pf() : e === "ch" ? mf() : e === "de" ? gf() : e === "es" ? wf() : e === "fr" ? yf() : e === "it" ? bf() : e === "jp" ? vf() : e === "pl" ? Ef() : e === "ru" ? Tf() : e === "uk" ? Of() : Sf()
  },
  Af = () => "You are not allowed to verify a phone number. Try refreshing the page",
  Nf = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  kf = () => "您无权验证电话号码。请尝试刷新页面。",
  Rf = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  Df = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  xf = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  Pf = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  Mf = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  Lf = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  Uf = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  jf = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  Bf = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  Cf = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Af() : e === "pt" ? Nf() : e === "ch" ? kf() : e === "de" ? Rf() : e === "es" ? Df() : e === "fr" ? xf() : e === "it" ? Pf() : e === "jp" ? Mf() : e === "pl" ? Lf() : e === "ru" ? Uf() : e === "uk" ? jf() : Bf()
  },
  zf = () => "Operation not allowed. Maybe you have too many favorite locations.",
  qf = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ff = () => "操作不被允许。你的收藏位置可能过多。",
  Kf = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  $f = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Vf = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Gf = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Hf = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Wf = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Yf = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Jf = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Qf = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Xf = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? zf() : e === "pt" ? qf() : e === "ch" ? Ff() : e === "de" ? Kf() : e === "es" ? $f() : e === "fr" ? Vf() : e === "it" ? Gf() : e === "jp" ? Hf() : e === "pl" ? Wf() : e === "ru" ? Yf() : e === "uk" ? Jf() : Qf()
  },
  Zf = r => `Not enough charges: you have ${r.charges} but this overlay needs ${r.pixels}.`,
  eh = r => `Cargas insuficientes: você tem ${r.charges}, mas esta sobreposição precisa de ${r.pixels}.`,
  th = r => `充能不足：你有 ${r.charges}，但此叠加层需要 ${r.pixels}。`,
  rh = r => `Nicht genügend Ladungen: Du hast ${r.charges}, aber dieses Overlay benötigt ${r.pixels}.`,
  nh = r => `Cargas insuficientes: tienes ${r.charges} pero esta superposición necesita ${r.pixels}.`,
  sh = r => `Charges insuffisantes : vous avez ${r.charges} mais ce calque nécessite ${r.pixels}.`,
  oh = r => `Cariche insufficienti: ne hai ${r.charges} ma questo overlay ne richiede ${r.pixels}.`,
  ah = r => `チャージが足りません：現在 ${r.charges} ですが、このオーバーレイには ${r.pixels} 必要です。`,
  ih = r => `Za mało ładunków: masz ${r.charges}, ale ta nakładka wymaga ${r.pixels}.`,
  ch = r => `Недостаточно зарядов: у вас ${r.charges}, но для этого слоя нужно ${r.pixels}.`,
  uh = r => `Недостатньо зарядів: у вас ${r.charges}, але для цього шару потрібно ${r.pixels}.`,
  lh = r => `Không đủ lượt sơn: bạn có ${r.charges} nhưng lớp phủ này cần ${r.pixels}.`,
  _h = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Zf(r) : e === "pt" ? eh(r) : e === "ch" ? th(r) : e === "de" ? rh(r) : e === "es" ? nh(r) : e === "fr" ? sh(r) : e === "it" ? oh(r) : e === "jp" ? ah(r) : e === "pl" ? ih(r) : e === "ru" ? ch(r) : e === "uk" ? uh(r) : lh(r)
  },
  dh = () => "You are trying to paint with a color you do not own",
  fh = () => "Você está tentando pintar com uma cor que não possui",
  hh = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  ph = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  mh = () => "Estás intentando pintar con un color que no posees",
  gh = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  wh = () => "Stai cercando di dipingere con un colore che non possiedi",
  yh = () => "所持していない色で塗ろうとしています。",
  bh = () => "Próbujesz malować kolorem, którego nie posiadasz",
  vh = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Eh = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Th = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  jt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? dh() : e === "pt" ? fh() : e === "ch" ? hh() : e === "de" ? ph() : e === "es" ? mh() : e === "fr" ? gh() : e === "it" ? wh() : e === "jp" ? yh() : e === "pl" ? bh() : e === "ru" ? vh() : e === "uk" ? Eh() : Th()
  },
  Oh = () => "Phone already used",
  Sh = () => "Telefone já usado",
  Ih = () => "电话号码已被使用",
  Ah = () => "Telefonnummer bereits verwendet",
  Nh = () => "Teléfono ya utilizado",
  kh = () => "Téléphone déjà utilisé",
  Rh = () => "Telefono già utilizzato",
  Dh = () => "この電話番号は既に使用されています。",
  xh = () => "Numer telefonu jest już używany",
  Ph = () => "Телефон уже используется",
  Mh = () => "Номер телефону вже використовується",
  Lh = () => "Số điện thoại đã được sử dụng",
  Uh = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Oh() : e === "pt" ? Sh() : e === "ch" ? Ih() : e === "de" ? Ah() : e === "es" ? Nh() : e === "fr" ? kh() : e === "it" ? Rh() : e === "jp" ? Dh() : e === "pl" ? xh() : e === "ru" ? Ph() : e === "uk" ? Mh() : Lh()
  },
  jh = () => "This phone number's region is not supported",
  Bh = () => "A região deste número de telefone não é suportada",
  Ch = () => "此电话号码的地区不受支持",
  zh = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  qh = () => "La región de este número de teléfono no es compatible",
  Fh = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  Kh = () => "La regione di questo numero di telefono non è supportata",
  $h = () => "この電話番号の地域はサポートされていません",
  Vh = () => "Region tego numeru telefonu nie jest obsługiwany",
  Gh = () => "Регион этого номера телефона не поддерживается",
  Hh = () => "Регіон цього номера телефону не підтримується",
  Wh = () => "Vùng của số điện thoại này không được hỗ trợ",
  Yh = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? jh() : e === "pt" ? Bh() : e === "ch" ? Ch() : e === "de" ? zh() : e === "es" ? qh() : e === "fr" ? Fh() : e === "it" ? Kh() : e === "jp" ? $h() : e === "pl" ? Vh() : e === "ru" ? Gh() : e === "uk" ? Hh() : Wh()
  },
  Jh = () => "Refresh your page to get the latest update",
  Qh = () => "Recarregue sua página para obter as últimas atualizações",
  Xh = () => "刷新页面以获取最新更新",
  Zh = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  ep = () => "Actualiza la página para obtener la última versión",
  tp = () => "Actualisez la page pour obtenir les dernières mises à jour",
  rp = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  np = () => "最新の状態にするにはページを再読み込みしてください。",
  sp = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  op = () => "Обновите страницу, чтобы получить последние изменения",
  ap = () => "Оновіть сторінку, щоб отримати останні оновлення",
  ip = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Bt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Jh() : e === "pt" ? Qh() : e === "ch" ? Xh() : e === "de" ? Zh() : e === "es" ? ep() : e === "fr" ? tp() : e === "it" ? rp() : e === "jp" ? np() : e === "pl" ? sp() : e === "ru" ? op() : e === "uk" ? ap() : ip()
  },
  cp = () => "The request timed out. Please try again.",
  up = () => "A solicitação expirou. Por favor, tente novamente.",
  lp = () => "请求超时。请重试。",
  _p = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  dp = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  fp = () => "La requête a expiré. Veuillez réessayer.",
  hp = () => "La richiesta è scaduta. Riprova.",
  pp = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  mp = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  gp = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  wp = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  yp = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  bp = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? cp() : e === "pt" ? up() : e === "ch" ? lp() : e === "de" ? _p() : e === "es" ? dp() : e === "fr" ? fp() : e === "it" ? hp() : e === "jp" ? pp() : e === "pl" ? mp() : e === "ru" ? gp() : e === "uk" ? wp() : yp()
  },
  vp = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ep = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Tp = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Op = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Sp = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ip = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Ap = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Np = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  kp = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Rp = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Dp = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  xp = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Pp = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? vp() : e === "pt" ? Ep() : e === "ch" ? Tp() : e === "de" ? Op() : e === "es" ? Sp() : e === "fr" ? Ip() : e === "it" ? Ap() : e === "jp" ? Np() : e === "pl" ? kp() : e === "ru" ? Rp() : e === "uk" ? Dp() : xp()
  },
  Mp = () => "The service is currently unavailable. Please try again later.",
  Lp = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Up = () => "服务当前不可用。请稍后再试。",
  jp = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Bp = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Cp = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  zp = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  qp = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Fp = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Kp = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  $p = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Vp = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  Gp = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Mp() : e === "pt" ? Lp() : e === "ch" ? Up() : e === "de" ? jp() : e === "es" ? Bp() : e === "fr" ? Cp() : e === "it" ? zp() : e === "jp" ? qp() : e === "pl" ? Fp() : e === "ru" ? Kp() : e === "uk" ? $p() : Vp()
  },
  Hp = () => "Too many attempts. Please try again later",
  Wp = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Yp = () => "尝试次数过多，请稍后再试",
  Jp = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  Qp = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  Xp = () => "Trop de tentatives. Veuillez réessayer plus tard",
  Zp = () => "Troppi tentativi. Riprova più tardi.",
  em = () => "試行回数が多すぎます。後で再度お試しください。",
  tm = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  rm = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  nm = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  sm = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Ct = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Hp() : e === "pt" ? Wp() : e === "ch" ? Yp() : e === "de" ? Jp() : e === "es" ? Qp() : e === "fr" ? Xp() : e === "it" ? Zp() : e === "jp" ? em() : e === "pl" ? tm() : e === "ru" ? rm() : e === "uk" ? nm() : sm()
  },
  om = () => "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.",
  am = () => "O acesso através do Tor ou redes anônimas não é permitido. Por favor, conecte-se a partir de uma rede comum para continuar.",
  im = () => "不允许通过 Tor 或匿名网络访问。请使用常规网络连接以继续。",
  cm = () => "Der Zugriff über Tor oder anonyme Netzwerke ist nicht erlaubt. Bitte verbinden Sie sich über ein normales Netzwerk, um fortzufahren.",
  um = () => "No se permite el acceso a través de Tor o redes anónimas. Por favor, conéctate desde una red normal para continuar.",
  lm = () => "L'accès via Tor ou des réseaux anonymes n'est pas autorisé. Veuillez vous connecter depuis un réseau normal pour continuer.",
  _m = () => "L'accesso tramite Tor o reti anonime non è consentito. Connettiti da una rete normale per continuare.",
  dm = () => "Torまたは匿名ネットワーク経由でのアクセスは許可されていません。続行するには通常のネットワークから接続してください。",
  fm = () => "Dostęp przez Tor lub sieci anonimowe jest niedozwolony. Aby kontynuować, połącz się ze zwykłej sieci.",
  hm = () => "Доступ через Tor или анонимные сети не разрешён. Пожалуйста, подключитесь из обычной сети, чтобы продолжить.",
  pm = () => "Доступ через Tor або анонімні мережі заборонено. Будь ласка, підключіться зі звичайної мережі, щоб продовжити.",
  mm = () => "Không cho phép truy cập qua Tor hoặc các mạng ẩn danh. Vui lòng kết nối từ mạng thông thường để tiếp tục.",
  gm = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? om() : e === "pt" ? am() : e === "ch" ? im() : e === "de" ? cm() : e === "es" ? um() : e === "fr" ? lm() : e === "it" ? _m() : e === "jp" ? dm() : e === "pl" ? fm() : e === "ru" ? hm() : e === "uk" ? pm() : mm()
  },
  wm = () => "The typed username does not match your current username.",
  ym = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  bm = () => "输入的用户名与当前用户名不匹配。",
  vm = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Em = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Tm = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Om = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Sm = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Im = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Am = () => "Введённое имя пользователя не совпадает с текущим.",
  Nm = () => "Введене імʼя користувача не збігається з поточним.",
  km = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Rm = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? wm() : e === "pt" ? ym() : e === "ch" ? bm() : e === "de" ? vm() : e === "es" ? Em() : e === "fr" ? Tm() : e === "it" ? Om() : e === "jp" ? Sm() : e === "pl" ? Im() : e === "ru" ? Am() : e === "uk" ? Nm() : km()
  },
  Dm = () => "Unexpected server error. Try again later.",
  xm = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Pm = () => "服务器出现意外错误。请稍后再试。",
  Mm = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Lm = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Um = () => "Erreur serveur inattendue. Réessayez plus tard.",
  jm = () => "Errore imprevisto del server. Riprova più tardi.",
  Bm = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Cm = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  zm = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  qm = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Fm = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  u = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Dm() : e === "pt" ? xm() : e === "ch" ? Pm() : e === "de" ? Mm() : e === "es" ? Lm() : e === "fr" ? Um() : e === "it" ? jm() : e === "jp" ? Bm() : e === "pl" ? Cm() : e === "ru" ? zm() : e === "uk" ? qm() : Fm()
  },
  Km = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  $m = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Vm = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Gm = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Hm = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  Wm = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  Ym = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  Jm = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Qm = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Xm = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  Zm = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  eg = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  tg = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Km() : e === "pt" ? $m() : e === "ch" ? Vm() : e === "de" ? Gm() : e === "es" ? Hm() : e === "fr" ? Wm() : e === "it" ? Ym() : e === "jp" ? Jm() : e === "pl" ? Qm() : e === "ru" ? Xm() : e === "uk" ? Zm() : eg()
  },
  rg = () => "VPN or proxy detected. Please disable your VPN and try again.",
  ng = () => "VPN ou proxy detectado. Por favor, desative sua VPN e tente novamente.",
  sg = () => "检测到VPN或代理。请关闭VPN后重试。",
  og = () => "VPN oder Proxy erkannt. Bitte deaktiviere dein VPN und versuche es erneut.",
  ag = () => "VPN o proxy detectado. Por favor, desactiva tu VPN e inténtalo de nuevo.",
  ig = () => "VPN ou proxy détecté. Veuillez désactiver votre VPN et réessayer.",
  cg = () => "VPN o proxy rilevato. Disattiva la tua VPN e riprova.",
  ug = () => "VPNまたはプロキシが検出されました。VPNを無効にしてもう一度お試しください。",
  lg = () => "Wykryto VPN lub proxy. Wyłącz VPN i spróbuj ponownie.",
  _g = () => "Обнаружен VPN или прокси. Пожалуйста, отключите VPN и попробуйте снова.",
  dg = () => "Виявлено VPN або проксі. Будь ласка, вимкніть VPN і спробуйте знову.",
  fg = () => "Phát hiện VPN hoặc proxy. Vui lòng tắt VPN và thử lại.",
  hg = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? rg() : e === "pt" ? ng() : e === "ch" ? sg() : e === "de" ? og() : e === "es" ? ag() : e === "fr" ? ig() : e === "it" ? cg() : e === "jp" ? ug() : e === "pl" ? lg() : e === "ru" ? _g() : e === "uk" ? dg() : fg()
  },
  pg = () => "Failed to load WebAssembly module. Try to use another browser.",
  mg = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  gg = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  wg = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  yg = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  bg = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  vg = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  Eg = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  Tg = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  Og = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  Sg = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  Ig = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Ag = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? pg() : e === "pt" ? mg() : e === "ch" ? gg() : e === "de" ? wg() : e === "es" ? yg() : e === "fr" ? bg() : e === "it" ? vg() : e === "jp" ? Eg() : e === "pl" ? Tg() : e === "ru" ? Og() : e === "uk" ? Sg() : Ig()
  },
  Ng = () => "You already have this item. Please refresh the page.",
  kg = () => "Você já possui este item. Atualize a página.",
  Rg = () => "你已经拥有此物品。请刷新页面。",
  Dg = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  xg = () => "Ya tienes este ítem. Actualiza la página.",
  Pg = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Mg = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Lg = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Ug = () => "Masz już ten przedmiot. Odśwież stronę.",
  jg = () => "У вас уже есть этот предмет. Обновите страницу.",
  Bg = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Cg = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  zt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ng() : e === "pt" ? kg() : e === "ch" ? Rg() : e === "de" ? Dg() : e === "es" ? xg() : e === "fr" ? Pg() : e === "it" ? Mg() : e === "jp" ? Lg() : e === "pl" ? Ug() : e === "ru" ? jg() : e === "uk" ? Bg() : Cg()
  },
  zg = () => "You are already in an alliance",
  qg = () => "Você já está em uma aliança",
  Fg = () => "你已经在一个联盟中",
  Kg = () => "Du bist bereits in einer Allianz",
  $g = () => "Ya estás en una alianza",
  Vg = () => "Vous êtes déjà dans une alliance",
  Gg = () => "Sei già in un'alleanza",
  Hg = () => "すでにアライアンスに所属しています。",
  Wg = () => "Jesteś już w sojuszu",
  Yg = () => "Вы уже состоите в альянсе",
  Jg = () => "Ви вже перебуваєте в альянсі",
  Qg = () => "Bạn đã ở trong một liên minh",
  Xg = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? zg() : e === "pt" ? qg() : e === "ch" ? Fg() : e === "de" ? Kg() : e === "es" ? $g() : e === "fr" ? Vg() : e === "it" ? Gg() : e === "jp" ? Hg() : e === "pl" ? Wg() : e === "ru" ? Yg() : e === "uk" ? Jg() : Qg()
  },
  Zg = () => "You are not allowed to do this",
  ew = () => "Você não tem permissão para fazer isso",
  tw = () => "你无权执行此操作",
  rw = () => "Du bist dazu nicht berechtigt",
  nw = () => "No tienes permiso para hacer esto",
  sw = () => "Vous n’êtes pas autorisé à faire cela",
  ow = () => "Non hai il permesso di farlo",
  aw = () => "この操作を行う権限がありません。",
  iw = () => "Nie masz uprawnień, aby to zrobić",
  cw = () => "У вас нет прав для этого действия",
  uw = () => "Ви не маєте права це робити",
  lw = () => "Bạn không có quyền làm việc này",
  Q = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Zg() : e === "pt" ? ew() : e === "ch" ? tw() : e === "de" ? rw() : e === "es" ? nw() : e === "fr" ? sw() : e === "it" ? ow() : e === "jp" ? aw() : e === "pl" ? iw() : e === "ru" ? cw() : e === "uk" ? uw() : lw()
  },
  _w = () => "You do not have enough Droplets to buy this item.",
  dw = () => "Você não tem Droplets suficientes para comprar este item.",
  fw = () => "你的 Droplets 不足，无法购买此物品。",
  hw = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  pw = () => "No tienes suficientes Droplets para comprar este ítem.",
  mw = () => "Vous n’avez pas assez de Droplets pour acheter cet objet.",
  gw = () => "Non hai abbastanza Droplets per acquistare questo oggetto.",
  ww = () => "このアイテムを購入するのに十分なDropletsがありません。",
  yw = () => "Nie masz wystarczającej liczby Droplets, aby kupić ten przedmiot.",
  bw = () => "У вас недостаточно Droplets для покупки этого предмета.",
  vw = () => "У вас недостатньо Droplets, щоб купити цей предмет.",
  Ew = () => "Bạn không có đủ Droplets để mua vật phẩm này.",
  qt = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? _w() : e === "pt" ? dw() : e === "ch" ? fw() : e === "de" ? hw() : e === "es" ? pw() : e === "fr" ? mw() : e === "it" ? gw() : e === "jp" ? ww() : e === "pl" ? yw() : e === "ru" ? bw() : e === "uk" ? vw() : Ew()
  },
  Tw = () => "You need to be logged in to paint",
  Ow = () => "Você precisa estar conectado para pintar",
  Sw = () => "你需要登录才能进行绘制",
  Iw = () => "Du musst eingeloggt sein, um zu malen",
  Aw = () => "Debes iniciar sesión para pintar",
  Nw = () => "Vous devez être connecté pour peindre",
  kw = () => "Devi avere effettuato l'accesso per dipingere",
  Rw = () => "ペイントするにはログインが必要です。",
  Dw = () => "Musisz być zalogowany, aby malować",
  xw = () => "Чтобы рисовать, нужно войти в аккаунт",
  Pw = () => "Щоб малювати, необхідно увійти в акаунт",
  Mw = () => "Bạn cần đăng nhập để tô",
  Ft = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Tw() : e === "pt" ? Ow() : e === "ch" ? Sw() : e === "de" ? Iw() : e === "es" ? Aw() : e === "fr" ? Nw() : e === "it" ? kw() : e === "jp" ? Rw() : e === "pl" ? Dw() : e === "ru" ? xw() : e === "uk" ? Pw() : Mw()
  },
  Lw = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Uw = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  jw = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Bw = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Cw = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  zw = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  qw = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Fw = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Kw = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  $w = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Vw = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Gw = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Hw = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Lw() : e === "pt" ? Uw() : e === "ch" ? jw() : e === "de" ? Bw() : e === "es" ? Cw() : e === "fr" ? zw() : e === "it" ? qw() : e === "jp" ? Fw() : e === "pl" ? Kw() : e === "ru" ? $w() : e === "uk" ? Vw() : Gw()
  },
  Ww = r => `Your account has been suspended out until ${r.until}`,
  Yw = r => `A sua conta está suspensa até ${r.until}`,
  Jw = r => `你的账号已被暂停至 ${r.until}`,
  Qw = r => `Dein Konto ist gesperrt bis ${r.until}`,
  Xw = r => `Tu cuenta ha sido suspendida hasta ${r.until}`,
  Zw = r => `Votre compte est suspendu jusqu’au ${r.until}`,
  ey = r => `Il tuo account è sospeso fino al ${r.until}`,
  ty = r => `あなたのアカウントは${r.until}まで一時停止されています。`,
  ry = r => `Twoje konto zostało zawieszone do ${r.until}`,
  ny = r => `Ваш аккаунт заблокирован до ${r.until}`,
  sy = r => `Ваш акаунт призупинено до ${r.until}`,
  oy = r => `Tài khoản của bạn đã bị đình chỉ đến ${r.until}`,
  Kt = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Ww(r) : e === "pt" ? Yw(r) : e === "ch" ? Jw(r) : e === "de" ? Qw(r) : e === "es" ? Xw(r) : e === "fr" ? Zw(r) : e === "it" ? ey(r) : e === "jp" ? ty(r) : e === "pl" ? ry(r) : e === "ru" ? ny(r) : e === "uk" ? sy(r) : oy(r)
  },
  ee = {
    day: 1440 * 60 * 1e3,
    hour: 3600 * 1e3,
    minute: 60 * 1e3,
    second: 1e3
  };

function lb(r) {
  const t = Math.floor(r / ee.hour);
  r -= t * ee.hour;
  const e = Math.floor(r / ee.minute);
  r -= e * ee.minute;
  const s = Math.floor(r / ee.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${s}` : `${e}:${s}`
}

function _b(r) {
  const t = r.getFullYear(),
    e = String(r.getMonth() + 1).padStart(2, "0"),
    n = String(r.getDate()).padStart(2, "0"),
    s = String(r.getHours()).padStart(2, "0"),
    o = String(r.getMinutes()).padStart(2, "0"),
    i = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${n} ${s}:${o}:${i}`
}
const db = {
    griefing: Jc(),
    "multi-accounting": zd(),
    "hate-speech": Eu(),
    bot: Ls(),
    doxxing: ei(),
    "inappropriate-content": Wu(),
    other: io()
  },
  fb = {
    doxxing: fi(),
    "hate-speech": Lu(),
    griefing: uu(),
    "multi-accounting": Zd(),
    bot: Ws(),
    "inappropriate-content": il(),
    other: vo()
  },
  hb = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  $t = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  pb = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  ay = 365 * ee.day;

function ir(r) {
  if (!r) return null;
  const e = (r instanceof Date ? r : new Date(r)).getTime();
  return Number.isFinite(e) ? e : null
}

function mb(r, t = Date.now()) {
  const e = ir(r);
  return e === null ? !1 : e - t >= ay
}

function gb(r, t = Date.now()) {
  const e = ir(r);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const n = Math.max(0, Math.ceil((e - t) / 6e4)),
    s = Math.floor(n / 1440),
    o = Math.floor(n % 1440 / 60),
    i = n % 60;
  return {
    days: s,
    hours: o,
    minutes: i
  }
}
const iy = [{
    tileSize: 1e3,
    zoom: 11
  }],
  cy = 4,
  uy = 6e3,
  ly = [{
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
  _y = {
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
  dy = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  fy = {
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
  hy = {
    tools: {
      wayback: {
        limit: 1e4
      }
    }
  },
  se = {
    seasons: iy,
    regionSize: cy,
    refreshIntervalMs: uy,
    colors: ly,
    products: _y,
    countries: dy,
    permissions: fy,
    settings: hy
  },
  it = se,
  py = se.seasons,
  cr = se.seasons.length - 1,
  wb = se.seasons[cr].zoom,
  yb = se.seasons[cr].tileSize,
  bb = se.permissions,
  my = se.settings;

function vb(r) {
  return it.countries[r - 1]
}
class l extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Vt(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    let o = e[s];
    o ? o.push(n) : e[s] = [n]
  }
  return e
}

function Eb(r, t) {
  const e = {};
  for (const n of r) {
    const s = t(n);
    e[s] = n
  }
  return e
}
var De, xe;
class gy {
  constructor(t) {
    I(this, De, P(!0));
    I(this, xe, P(null));
    this.url = t
  }
  get online() {
    return N(h(this, De))
  }
  set online(t) {
    k(h(this, De), t, !0)
  }
  get serverTimeOffsetMs() {
    return N(h(this, xe))
  }
  set serverTimeOffsetMs(t) {
    k(h(this, xe), t, !0)
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
    const n = Math.trunc(this.getEstimatedServerNowMs());
    return e > n ? n : e
  }
  updateServerTimeEstimate(t) {
    const e = t.headers.get("date");
    if (!e) return;
    const n = new Date(e).getTime();
    Number.isFinite(n) && (this.serverTimeOffsetMs = n - Date.now())
  }
  async paint(t) {
    const e = Vt(t, c => `t=(${c.tile[0]},${c.tile[1]}),s=${c.season}`),
      n = {
        season: t[0].season,
        tiles: Object.values(e).map(c => ({
          x: c[0].tile[0],
          y: c[0].tile[1],
          pixels: {
            x: c.map(d => d.pixel[0]),
            y: c.map(d => d.pixel[1]),
            colors: c.map(d => d.colorIdx)
          }
        }))
      },
      s = JSON.stringify(n),
      o = await he.getHeaders(s),
      i = await this.request("/paint", {
        method: "POST",
        body: s,
        headers: o,
        credentials: "include"
      });
    if (i.status !== a.OK) {
      if (i.status === a.UNAUTHORIZED) throw new Error(Ft());
      if (i.status === a.FORBIDDEN) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(Lt());
        const c = await i.json();
        if ((c == null ? void 0 : c.error) === "timeout") {
          const d = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(Kt({
            until: d.toLocaleString()
          }))
        }
        if ((c == null ? void 0 : c.error) === "refresh") throw new Error(Bt());
        if ((c == null ? void 0 : c.error) === "color-not-owned") throw new Error(jt());
        if ((c == null ? void 0 : c.error) === "event-pixel-present") throw new Error(Pt());
        if ((c == null ? void 0 : c.error) === "challenge-required")
          if (c.tier) {
            if (await Dt(c.tier)) return this.paint(t);
            throw new Error(nt())
          } else console.error("Challenge required but no tier provided", c);
        ie.refresh()
      } else throw new Error(u())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (n, s, o) => `/staff/tools/select-area/clear/s${n}/pixel/${s}/${o}`, e)
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
    if (e.status !== a.OK) throw new l(u(), e.status);
    return e.json()
  }
  async getReverseTimestamps(t, e = {}) {
    const {
      mode: n = "depth",
      beforeDepth: s,
      beforeTimestamp: o
    } = e, i = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: n,
        beforeDepth: s,
        beforeTimestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== a.OK) throw new l(u(), i.status);
    return i.json()
  }
  async getReversePreview(t, e) {
    const {
      mode: n = "depth",
      snapshotDepth: s,
      timestamp: o
    } = e, i = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: n,
        snapshotDepth: s,
        timestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== a.OK) throw new l(u(), i.status);
    return i.json()
  }
  async getReverseTimelapse(t, e) {
    const n = await this.request("/staff/tools/select-area/reverse/timelapse", {
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
    if (n.status === a.BAD_REQUEST) {
      const s = await n.json(),
        o = (s == null ? void 0 : s.error) ?? "";
      throw o === "timelapse_too_many_events" ? new l(Pp(), a.BAD_REQUEST) : new l(typeof o == "string" && o ? o : u(), a.BAD_REQUEST)
    }
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.arrayBuffer()
  }
  async applyReverse(t, e) {
    const {
      mode: n = "depth",
      snapshotDepth: s,
      timestamp: o
    } = e, i = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: n,
        snapshotDepth: s,
        timestamp: o
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (i.status !== a.OK) throw new l(u(), i.status);
    return i.json()
  }
  async sendPaintRequests(t, e, n, s) {
    const o = Vt(t, d => `t=(${d.tile[0]},${d.tile[1]}),s=${d.season}`),
      c = (await Promise.all(Object.values(o).map(async d => {
        const [_, g] = d[0].tile, p = d[0].season, R = {
          colors: d.map(T => T.colorIdx),
          coords: d.flatMap(T => T.pixel),
          csid: n
        }, M = JSON.stringify(R), A = e(p, _, g), b = await he.getHeaders(M);
        return this.request(A, {
          method: "POST",
          body: M,
          headers: b,
          credentials: "include"
        })
      }))).filter(d => d.status !== a.OK);
    if (c.length) {
      const d = c[0];
      if (d.status === a.UNAUTHORIZED) throw new Error(Ft());
      if (d.status === a.FORBIDDEN) {
        if (d.headers.get("cf-mitigated") === "challenge") throw new Error(Lt());
        const _ = await d.json();
        if ((_ == null ? void 0 : _.error) === "timeout") {
          const g = new Date(Date.now() + ((_ == null ? void 0 : _.durationMs) ?? 0));
          throw new Error(Kt({
            until: g.toLocaleString()
          }))
        }
        if ((_ == null ? void 0 : _.error) === "refresh") throw new Error(Bt());
        if ((_ == null ? void 0 : _.error) === "color-not-owned") throw new Error(jt());
        if ((_ == null ? void 0 : _.error) === "event-pixel-present") throw new Error(Pt());
        ie.refresh()
      } else throw new Error(u())
    }
  }
  async adminAutoPainterPaint(t, e, n) {
    const s = wy(t),
      o = await yy(s),
      i = new FormData;
    i.append("fingerprint", e), i.append("season", s.season.toString()), i.append("px0", s.offsetX.toString()), i.append("py0", s.offsetY.toString()), i.append("width", s.width.toString()), i.append("height", s.height.toString()), i.append("pixels", t.length.toString()), i.append("bitmap", o, "auto-painter.png"), i.append("userId", n.toString());
    const c = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: i,
      credentials: "include"
    });
    if (c.status === a.FORBIDDEN) {
      const d = await c.json().catch(() => null);
      if (typeof(d == null ? void 0 : d.charges) == "number") throw new Error(_h({
        charges: Math.floor(d.charges),
        pixels: t.length
      }));
      const _ = typeof(d == null ? void 0 : d.error) == "string" ? d.error.trim() : "";
      throw _ && _ !== "Forbidden" ? new Error(_) : new Error("Auto painter is restricted to administrators.")
    }
    if (c.status !== a.OK) throw new Error(u());
    return c.json()
  }
  async getPixelInfo({
    season: t,
    tile: [e, n],
    pixel: [s, o]
  }) {
    const i = new URLSearchParams;
    i.set("x", String(s)), i.set("y", String(o));
    const c = await this.request(`/s${t}/pixel/${e}/${n}?${i.toString()}`, {
      credentials: "include"
    });
    if (c.status !== a.OK) {
      const d = await c.text();
      throw new Error(_c({
        err: d
      }))
    }
    return c.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, n],
    p0: [s, o],
    p1: [i, c]
  }) {
    const d = await this.request(`/staff/tools/select-area/s${t}/${e}/${n}?x0=${s}&y0=${o}&x1=${i}&y1=${c}`, {
      credentials: "include"
    });
    if (d.status !== a.OK) {
      const A = await d.text();
      throw console.error("Error while fetching pixel area info", A), new Error(u())
    }
    const _ = await d.arrayBuffer(),
      g = new DataView(_),
      p = Math.floor(_.byteLength / 5),
      R = new Uint32Array(p),
      M = new Uint8Array(p);
    for (let A = 0; A < p; A++) {
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
    if (t.status === a.OK) return await t.json()
  }
  async meEmail() {
    const t = await this.request("/me/email", {
      credentials: "include"
    });
    if (t.status === a.OK) return (await t.json()).email
  }
  async logout() {
    const t = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(await t.text());
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
    if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(jn());
    if (e.status !== a.OK) throw new Error(await e.text());
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
    if (t.status === a.NOT_FOUND) return null;
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
    if (t.status !== a.OK) throw new Error(u());
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
    if (e.status === a.BAD_REQUEST) throw new Error(R_());
    if (e.status === a.CONFLICT) throw new Error(Uh());
    if (e.status === a.FORBIDDEN) throw new Error(Cf());
    if (e.status === a.TOO_MANY_REQUESTS) throw new Error(Ct());
    if (e.status === a.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Yh());
    if (e.status === a.LOCKED) throw new Error(tg());
    if (e.status === a.UNPROCESSABLE_ENTITY) throw new Error(K_());
    if (e.status === a.NOT_ACCEPTABLE) throw new Error(hg());
    if (e.status === a.PRECONDITION_FAILED) throw new Error(ka());
    if (e.status !== a.OK) throw new Error(u());
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
    const n = await this.request("/anticheat/challenge/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e),
      headers: {
        "x-fp": await Ye()
      }
    });
    if (t.type === "otp") {
      if (n.status === a.GONE) throw new Error(jc());
      if (n.status === a.BAD_REQUEST) throw new Error(Gl());
      if (n.status === a.TOO_MANY_REQUESTS) throw new Error(Ct());
      if (n.status !== a.OK) throw new Error(u())
    } else {
      if (n.status === a.BAD_REQUEST) throw new Error(Pl());
      if (n.status !== a.OK) throw new Error(u())
    }
  }
  async updateMe(t) {
    const e = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status === a.BAD_REQUEST) {
      const n = await e.json(),
        s = (n == null ? void 0 : n.error) ?? "";
      if (s === "invalid_name") throw new Error(Ut());
      if (s === "invalid_discord") throw new Error(o_());
      if (typeof s == "string" && s.startsWith("name_change_cooldown:")) {
        const o = parseInt(s.split(":")[1] ?? "0", 10);
        throw new Error(ff({
          days: o
        }))
      }
      throw new Error(n == null ? void 0 : n.error)
    } else if (e.status !== a.OK) throw new Error(u())
  }
  async deleteMe(t) {
    const e = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: t
      })
    });
    if (e.status === a.BAD_REQUEST) throw new Error(Rm());
    if (e.status !== a.OK) throw new Error(u())
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
    if (e.status === a.FORBIDDEN) throw new Error(Xf());
    if (e.status !== a.OK) throw new Error(u())
  }
  async deleteFavoriteLocation(t) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: t
        }),
        credentials: "include"
      })).status !== a.OK) throw new Error(u())
  }
  async updateFavoriteLocation(t, e) {
    const n = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: t,
        name: e
      }),
      credentials: "include"
    });
    if (n.status === a.BAD_REQUEST) throw new Error(Ad());
    if (n.status !== a.OK) throw new Error(u())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== a.OK) throw new Error(J());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== a.OK) throw new Error(J());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const n = await this.request(`/leaderboard/region/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(J())
  }
  async leaderboardRegionPlayers(t, e) {
    const n = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(J())
  }
  async leaderboardRegionAlliances(t, e) {
    const n = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (n.status === a.OK) return n.json();
    throw new Error(J())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(J())
  }
  async getMapHotspots() {
    const t = await this.request("/map/hotspots", {
      credentials: "include"
    });
    return t.status !== 200 ? [] : t.json()
  }
  async getRandomTile(t) {
    const e = await this.request(`/s${t}/tile/random`);
    if (e.status !== a.OK) throw new Error(u());
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
    if (e.status !== a.OK) throw e.status === a.NOT_FOUND ? new Error(Mt()) : e.status === a.FORBIDDEN ? new Error(qt()) : e.status === a.CONFLICT ? new Error(zt()) : new Error(u())
  }
  async getAlliance() {
    const t = await this.request("/alliance", {
      credentials: "include"
    });
    if (t.status === a.OK) return t.json();
    if (t.status === a.NOT_FOUND) return;
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
    if (e.status === a.OK) return e.json();
    if (e.status === a.BAD_REQUEST) {
      const n = await e.json();
      throw n.error === "max_characters" ? new Error(us()) : n.error === "name_taken" ? new Error(Jn()) : n.error == "empty_name" ? new Error(Es()) : new Error(u())
    } else throw e.status === a.FORBIDDEN ? new Error(Xg()) : new Error(u())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== a.OK) throw new Error(u())
  }
  async updateAllianceDescription(t) {
    const e = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: t
      })
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(Q()) : e.status === a.BAD_REQUEST ? new Error(Oc()) : new Error(u())
  }
  async updateAllianceHeadquarters(t, e) {
    const n = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: t,
        longitude: e
      })
    });
    if (n.status !== a.OK) throw n.status === a.FORBIDDEN ? new Error(Q()) : new Error(u())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw e.status === a.FORBIDDEN ? new Error(Q()) : new Error(J())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === a.OK) return t.json();
    throw t.status === a.FORBIDDEN ? new Error(Q()) : new Error(u())
  }
  async joinAlliance(t) {
    switch ((await this.request(`/alliance/join/${t}`, {
        credentials: "include"
      })).status) {
      case a.OK:
        return "success";
      case a.ALREADY_REPORTED:
        return "in-another-alliance";
      case a.UNAUTHORIZED:
        return "not-logged-in";
      case a.FORBIDDEN:
        return "banned";
      case a.BAD_REQUEST:
      case a.NOT_FOUND:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(t) {
    const e = await this.request(`/alliance/members/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(u())
  }
  async getAllianceBannedMembers(t) {
    const e = await this.request(`/alliance/members/banned/${t}`, {
      credentials: "include"
    });
    if (e.status === a.OK) return e.json();
    throw new Error(u())
  }
  async getAllianceById(t) {
    const e = await this.request(`/staff/dashboard/alliances/${t}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) return;
    if (e.status !== a.OK) throw new l(u(), e.status);
    const n = await e.json();
    return {
      id: Number(n.id),
      name: String(n.name),
      pixelsPainted: Number((n == null ? void 0 : n.pixels_painted) ?? 0)
    }
  }
  async searchAlliance(t) {
    const e = new URLSearchParams({
        q: t
      }),
      n = await this.request(`/staff/dashboard/alliances/search?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== a.OK) throw new l(u(), n.status);
    const s = await n.json();
    return (Array.isArray(s) ? s : []).map(o => ({
      id: Number(o.id),
      name: String(o.name ?? ""),
      pixelsPainted: Number((o == null ? void 0 : o.pixels_painted) ?? 0)
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
    if (e.status === a.NOT_FOUND) return null;
    if (e.status !== a.OK) throw new l(u(), e.status);
    const n = await e.json(),
      s = Array.isArray(n == null ? void 0 : n.members) ? n.members : [];
    return {
      id: Number(n == null ? void 0 : n.id),
      name: String((n == null ? void 0 : n.name) ?? ""),
      description: (n == null ? void 0 : n.description) ?? null,
      ownerId: Number((n == null ? void 0 : n.ownerId) ?? (n == null ? void 0 : n.created_by)),
      ownerName: (n == null ? void 0 : n.ownerName) ?? null,
      hqName: (n == null ? void 0 : n.hqName) ?? null,
      hqLatitude: (n == null ? void 0 : n.hqLatitude) ?? (n == null ? void 0 : n.hq_latitude) ?? null,
      hqLongitude: (n == null ? void 0 : n.hqLongitude) ?? (n == null ? void 0 : n.hq_longitude) ?? null,
      pixelsPainted: Number((n == null ? void 0 : n.pixelsPainted) ?? (n == null ? void 0 : n.pixels_painted) ?? 0),
      membersCount: Number((n == null ? void 0 : n.membersCount) ?? s.length),
      members: s.map(o => ({
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
  async getAdminAllianceMembers(t, e) {
    const n = new URLSearchParams({
        page: String(e.page),
        pageSize: String(e.pageSize)
      }),
      s = await this.request(`/staff/dashboard/alliances/${t}/members?${n.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (s.status === a.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (s.status !== a.OK) throw new l(u(), s.status);
    const o = await s.json(),
      i = Array.isArray(o == null ? void 0 : o.members) ? o.members : [];
    return {
      members: i.map(c => ({
        id: Number(c == null ? void 0 : c.id),
        name: String((c == null ? void 0 : c.name) ?? `#${c==null?void 0:c.id}`),
        picture: (c == null ? void 0 : c.picture) ?? null,
        pixelsPainted: Number((c == null ? void 0 : c.pixelsPainted) ?? (c == null ? void 0 : c.pixels_painted) ?? 0),
        lastPixelLatitude: (c == null ? void 0 : c.lastPixelLatitude) ?? null,
        lastPixelLongitude: (c == null ? void 0 : c.lastPixelLongitude) ?? null,
        role: (c == null ? void 0 : c.alliance_role) === "admin" || (c == null ? void 0 : c.role) === "admin" ? "admin" : "member"
      })),
      total: Number((o == null ? void 0 : o.total) ?? i.length)
    }
  }
  async renameAlliance(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (n.status === a.BAD_REQUEST) {
      const s = await n.json().catch(() => ({}));
      throw new Error((s == null ? void 0 : s.error) ?? u())
    } else if (n.status !== a.OK) throw new l(u(), n.status)
  }
  async changeAllianceLeader(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: e
      })
    });
    if (n.status === a.BAD_REQUEST) {
      const s = await n.json();
      throw (s == null ? void 0 : s.error) === "user_not_in_alliance" ? new Error(rd()) : new Error(u())
    } else if (n.status !== a.OK) throw new l(u(), n.status)
  }
  async banAllAllianceMembers(t, e, n) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new l(u(), s.status)
  }
  async setAllianceMemberRole(t, e, n) {
    const s = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: n
      })
    });
    if (s.status !== a.OK) throw new l(u(), s.status)
  }
  async removeAllianceMember(t, e) {
    const n = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status)
  }
  async giveAllianceAdmin(t) {
    const e = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(Q()) : new Error(u())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(Q()) : new Error(u())
  }
  async equipFlag(t) {
    if ((await this.request(`/flag/equip/${t}`, {
        method: "POST",
        credentials: "include"
      })).status !== a.OK) throw new Error(u())
  }
  async getMyProfilePictures() {
    const t = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new Error(u());
    return t.json()
  }
  async changeProfilePicture(t) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: t
        })
      })).status !== a.OK) throw new Error(u())
  }
  async unbanAllianceUser(t) {
    const e = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw e.status === a.FORBIDDEN ? new Error(Q()) : new Error(u())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async getModeratorTickets() {
    const t = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    const e = await t.json();
    for (const n of e.tickets) n.reports.sort((s, o) => $t[s.reason] - $t[o.reason]);
    return e
  }
  async countMyTicketsClosedToday() {
    const t = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getNonPaidUserOpenTicketsCount() {
    const t = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
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
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async setTicketStatus(t, e, n, s) {
    const o = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: n,
        assignedReason: s
      })
    });
    if (o.status !== a.OK && o.status !== a.BAD_REQUEST) throw new l(u(), o.status)
  }
  async request(t, e) {
    var i;
    let n;
    e = {
      credentials: "include",
      ...e
    };
    try {
      n = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(n)
    } catch (c) {
      throw console.error("Fetch error:", c), this.online = !1, new Error(Go(), {
        cause: c
      })
    }
    if (n.status === a.FORBIDDEN && n.headers.get("x-block-reason") === "tor") throw new Error(gm());
    const s = ((i = n.headers.get("cf-mitigated")) == null ? void 0 : i.toLowerCase()) === "challenge";
    if (n.status === 403 && s) {
      if (he.setCfLikelyAutomated(!0), !await or()) throw new Error(nt());
      n = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(n)
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (n.status === a.TOO_MANY_REQUESTS) throw new Error(Hw());
      if (n.status === a.REQUEST_TIMEOUT) throw new Error(bp());
      if (n.status === a.SERVICE_UNAVAILABLE) throw new Error(Gp())
    }
    return n
  }
  async getOpenTicketsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getOpenReportsSummary() {
    const t = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getBanAppealStats(t, e) {
    const n = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    const s = await n.json();
    return {
      items: s.items ?? [],
      globals: s.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const n = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return (await n.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
    }))
  }
  async getClosedReportsByMod(t, e) {
    const n = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return (await n.json()).items.map(o => ({
      ...o,
      suspensionRate: (o.ban + o.timeout) / o.total
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
    if (e.status !== a.OK) throw new l(u(), e.status);
    return e.json()
  }
  async getUserInfoFull(t) {
    const e = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new l(u(), e.status);
      return e.json()
    }
  }
  async getUserInfoByEmail(t) {
    const e = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.NOT_FOUND) {
      if (e.status !== a.OK) throw new l(u(), e.status);
      return e.json()
    }
  }
  async removePunishment(t, e) {
    const n = e ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout",
      s = await this.request(n, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (s.status !== a.OK) throw new l(u(), s.status)
  }
  async getUserNotes(t, e) {
    const n = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      s = await this.request(n, {
        method: "GET",
        credentials: "include"
      });
    if (s.status !== a.OK) throw new l(u(), s.status);
    return s.json()
  }
  async addUserNote(t, e, n) {
    const s = n == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      o = await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (o.status !== a.OK) throw new l(u(), o.status)
  }
  async getUserPermissions(t) {
    const e = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(u(), e.status);
    return e.json()
  }
  async setUserPermissions(t, e) {
    const n = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        permissions: Array.from(e)
      })
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    const s = await n.json();
    return Array.isArray(s == null ? void 0 : s.permissions) ? s.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(u(), e.status);
    const n = await e.json();
    return (Array.isArray(n == null ? void 0 : n.purchases) ? n.purchases : []).map(o => {
      const i = o.is_dollar ?? o.isDollar ?? o.currency ?? o.Currency ?? 0;
      let c;
      if (typeof i == "string") {
        const p = i.toLowerCase();
        c = p === "usd" || p === "dollar" || p === "true"
      } else typeof i == "number" ? c = i !== 0 : c = !!i;
      const d = typeof o.createdAt == "string" ? o.createdAt : o.CreatedAt ? new Date(o.CreatedAt).toISOString() : "",
        _ = o.product_variant ?? o.productVariant,
        g = _ == null || _ === "" ? null : Number(_);
      return {
        product_name: String(o.productName ?? o.product_name ?? ""),
        amount: Number(o.amount ?? 0),
        price: Number(o.price ?? 0),
        is_dollar: c,
        created_at: d,
        product_variant: Number.isInteger(g) ? g : null
      }
    })
  }
  async postSetUserDroplets(t, e) {
    const n = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        droplets: e
      })
    });
    if (n.status !== a.OK) throw new l(u(), n.status)
  }
  async postAdminRenameUser(t, e, n) {
    const s = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: n
      })
    });
    if (s.status === a.BAD_REQUEST) {
      const o = await s.json(),
        i = (o == null ? void 0 : o.error) ?? "";
      throw i === "invalid_name" ? new l(Ut(), a.BAD_REQUEST) : new l(typeof i == "string" && i ? i : u(), a.BAD_REQUEST)
    }
    if (s.status !== a.OK) throw new l(u(), s.status)
  }
  async postAdminChangeUserEmail(t, e) {
    const n = await this.request("/staff/dashboard/users/email", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        email: e
      })
    });
    if (n.status === a.BAD_REQUEST) {
      const s = await n.json(),
        o = (s == null ? void 0 : s.error) ?? "";
      throw o === "email_required" || o === "invalid_email" ? new l(Xi(), a.BAD_REQUEST) : new l(typeof o == "string" && o ? o : u(), a.BAD_REQUEST)
    }
    if (n.status === a.CONFLICT) {
      const s = await n.json();
      if (((s == null ? void 0 : s.error) ?? "") === "email_already_in_use") {
        const i = new l(typeof(s == null ? void 0 : s.userId) == "number" ? Ci({
          userId: s.userId
        }) : Ii(), a.CONFLICT);
        throw typeof(s == null ? void 0 : s.userId) == "number" && (i.userId = s.userId), i
      }
      throw new l(u(), a.CONFLICT)
    }
    if (n.status === a.NOT_FOUND) throw new l("User not found.", a.NOT_FOUND);
    if (n.status !== a.OK) throw new l(u(), n.status)
  }
  async getUserTickets(t, e) {
    if (e === "appeals" && (t.appealId ?? 0) <= 0) throw new Error("Appeal id is required.");
    const n = new URLSearchParams;
    n.set("userId", String(t.userId)), n.set("kind", String(t.kind)), n.set("page", String(t.page ?? 0)), n.set("pageSize", String(t.pageSize ?? 20)), e === "appeals" && n.set("appealId", String(t.appealId));
    const s = e === "appeals" ? `/staff/appeals/tickets?${n.toString()}` : `/staff/dashboard/users/tickets?${n.toString()}`,
      o = await this.request(s, {
        method: "GET",
        credentials: "include"
      });
    if (o.status !== a.OK) throw new l(u(), o.status);
    const i = await o.json(),
      c = Array.isArray(i == null ? void 0 : i.tickets) ? i.tickets : [];
    return c.sort((d, _) => new Date(_.createdAt).getTime() - new Date(d.createdAt).getTime()), c
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize));
    const n = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    const s = await n.json();
    return Array.isArray(s == null ? void 0 : s.appeals) ? s.appeals : []
  }
  async getModerationTranslate(t, e) {
    const n = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      s = await this.request(n, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (s.status !== a.OK) throw new l(u(), s.status);
    const o = await s.json();
    return o == null ? void 0 : o.translation
  }
  mapTicketsToReportRows(t, e) {
    var s, o, i, c, d;
    const n = [];
    for (const _ of t) {
      const g = _.status ?? "open";
      if (e === "received") {
        for (const p of _.reports) n.push({
          id: String(p.id),
          ticketId: String(_.id),
          createdAt: p.createdAt ?? _.createdAt,
          byUser: {
            id: Number(p.reportedBy),
            name: String(p.reportedByName ?? p.reportedBy),
            picture: p.reportedByPicture ?? null
          },
          reason: String(p.reason),
          status: g
        });
        continue
      }
      if (e === "sent") {
        for (const p of _.reports) n.push({
          id: String(p.id),
          ticketId: String(_.id),
          createdAt: p.createdAt ?? _.createdAt,
          toUser: {
            id: Number(_.reportedUser.id),
            name: String(_.reportedUser.name),
            picture: _.reportedUser.picture ?? null
          },
          reason: String(p.reason),
          status: g
        });
        continue
      }
      n.push({
        id: String(_.id),
        ticketId: String(_.id),
        createdAt: _.createdAt,
        handledBy: _.status && _.status !== "open" ? {
          id: ((s = _.handledBy) == null ? void 0 : s.id) ?? 0,
          name: ((o = _.handledBy) == null ? void 0 : o.name) ?? "Moderator",
          picture: ((i = _.handledBy) == null ? void 0 : i.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((d = (c = _.reports) == null ? void 0 : c[0]) == null ? void 0 : d.reason) ?? "other"),
        status: g
      })
    }
    return n.sort((_, g) => new Date(g.createdAt).getTime() - new Date(_.createdAt).getTime()), n
  }
  async getModeratorClosedTicketStats(t) {
    const e = new URLSearchParams({
        id: String(t)
      }).toString(),
      n = await this.request(`/staff/dashboard/users/tickets/stats?${e}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.json()
  }
  async unlinkDiscord() {
    const t = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.NO_CONTENT) throw new l(u(), t.status)
  }
  async deleteSessions() {
    const t = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status)
  }
  async deleteAllUserSessions(t) {
    const e = await this.request(`/staff/dashboard/users/${t}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async banUsers(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new l(u(), s.status)
  }
  async timeoutUsers(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new l(u(), s.status)
  }
  async incrementUsersDroplets(t, e, n) {
    const s = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: n
      })
    });
    if (s.status !== a.OK) throw new l(u(), s.status)
  }
  async postUnbanUsers(t, e) {
    const n = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (n.status !== a.OK) throw new l(u(), n.status)
  }
  async getAuditLogs(t) {
    const e = new URLSearchParams;
    t.actorUserId !== void 0 && e.set("actorUserId", String(t.actorUserId)), t.targetUserId !== void 0 && e.set("targetUserId", String(t.targetUserId)), t.action && e.set("action", t.action), t.sortKey && e.set("sortKey", t.sortKey), t.sortDir && e.set("sortDir", t.sortDir), e.set("limit", String(t.limit)), e.set("offset", String(t.offset));
    const n = await this.request(`/staff/dashboard/audit-logs/see?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.json()
  }
  async postUsersSuspend(t, e, n) {
    let s;
    switch (e) {
      case "dashboard":
        s = `/staff/dashboard/users/${n}`;
        break;
      case "select-area":
        s = `/staff/tools/select-area/${n}`;
        break;
      case "select-pixel":
      default:
        s = `/staff/tools/select-pixel/${n}`;
        break
    }
    if ((await this.request(s, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t)
      })).status !== a.OK) throw new Error(u())
  }
  async postSelectAreaPhoneVerification(t, e = "") {
    const n = await this.request("/staff/tools/select-area/phone-verification", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        notes: e
      })
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return await n.json()
  }
  async postReportUserName(t) {
    const e = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t
      })
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async postReportAllianceName(t) {
    const e = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: t
      })
    });
    if (e.status !== a.OK) throw new l(u(), e.status);
    return e.json()
  }
  async submitBanAppeal(t) {
    const e = JSON.stringify({
        message: t
      }),
      n = await he.getHeaders(e),
      s = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: n
      });
    if (s.status === a.FORBIDDEN) {
      const o = await s.json();
      if ((o == null ? void 0 : o.error) === "challenge-required" && o.tier) {
        if (await Dt(o.tier)) return this.submitBanAppeal(t);
        throw new l(nt(), s.status)
      }
    }
    if (s.status !== a.OK && s.status !== a.ALREADY_REPORTED) throw new l(u(), s.status);
    return s.status
  }
  async getOpenAppeals() {
    const t = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async postSolveAppeal(t, e) {
    const n = await this.request(`/staff/appeals/${t}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: e
      })
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return await n.json()
  }
  async getUserLastAppeal() {
    const t = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appealDate) ?? null
  }
  async getMySuspensionDetails() {
    const t = await this.request("/me/suspension", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
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
    if (t.status !== a.OK) throw new l(u(), t.status);
    return await t.json()
  }
  async getNotificationCount() {
    const t = await this.request("/notification/count", {
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    const {
      count: e
    } = await t.json();
    return e
  }
  async getNotificationPage(t) {
    const n = `/notification/page${t!==void 0?`?cursor=${encodeURIComponent(t)}`:""}`,
      s = await this.request(n, {
        credentials: "include"
      });
    if (s.status !== a.OK) throw new l(u(), s.status);
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
    if (e.status !== a.OK) throw new l(u(), e.status);
    return e.json()
  }
  async postNotificationMarkReadAll() {
    const t = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async getAnticheatStats(t, e) {
    const n = await this.request(`/staff/dashboard/anticheat/stats?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.json()
  }
  async getAnticheatSignals(t, e) {
    const n = await this.request(`/staff/dashboard/anticheat/signals?from=${t}&to=${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.json()
  }
  async getAnticheatUserJourney(t, e, n) {
    const s = await this.request(`/staff/dashboard/anticheat/user/${t}?from=${e}&to=${n}`, {
      method: "GET",
      credentials: "include"
    });
    if (s.status !== a.OK) throw new l(u(), s.status);
    return s.json()
  }
  async getPendingAppealsCount() {
    const t = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.appeals) ?? 0
  }
  async getUserPixelsPaintedToday() {
    const t = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    const e = await t.json();
    return (e == null ? void 0 : e.paintedToday) ?? 0
  }
  async getUserFrames() {
    const t = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async postEquipUserFrame(t) {
    const e = await this.request(`/me/frames/equip/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async getUserBadges() {
    const t = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async postEquipUserBadge(t) {
    const e = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async postCaptchaSession(t, e = "include") {
    const n = await Ye(),
      s = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": n
        }
      });
    if (!s.ok) throw s.status === 500 ? new l(u(), s.status) : new l(bl(), s.status);
    return s.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      n = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < py.length,
      s = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= my.tools.wayback.limit,
      o = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      i = t.cursorTs !== void 0,
      c = t.cursorUserId !== void 0,
      d = t.cursorAllianceId !== void 0,
      _ = t.cursorPixelsCount !== void 0,
      g = i || c || d || _,
      p = i && c && d && _;
    let R = !0;
    return g && (R = p && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!n || !s || !o || !e || !R)
  }
  getSafeWaybackInput(t) {
    return t.season = Math.trunc(t.season), t.limit = Math.trunc(t.limit), t.timestamp = Math.trunc(t.timestamp), t.tileX = Math.trunc(t.tileX), t.tileY = Math.trunc(t.tileY), t.cursorTs !== void 0 && (t.cursorTs = Math.trunc(t.cursorTs)), t.cursorUserId !== void 0 && (t.cursorUserId = Math.trunc(t.cursorUserId)), t.cursorAllianceId !== void 0 && (t.cursorAllianceId = Math.trunc(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && (t.cursorPixelsCount = Math.trunc(t.cursorPixelsCount)), t
  }
  async getWaybackEvents(t) {
    if (!this.validWaybackInput(t)) throw new Error("Invalid query params");
    t = this.getSafeWaybackInput(t);
    const e = new URLSearchParams;
    t.cursorTs !== void 0 && e.set("cursorTs", String(t.cursorTs)), t.cursorUserId !== void 0 && e.set("cursorUserId", String(t.cursorUserId)), t.cursorAllianceId !== void 0 && e.set("cursorAllianceId", String(t.cursorAllianceId)), t.cursorPixelsCount !== void 0 && e.set("cursorPixelsCount", String(t.cursorPixelsCount));
    const n = `/staff/tools/wayback/s${t.season}/l${t.limit}/x${t.tileX}/y${t.tileY}/t${t.timestamp}`,
      s = e.toString(),
      o = await this.request(s.length > 0 ? `${n}?${s}` : n, {
        method: "GET",
        credentials: "include"
      });
    if (o.status === a.FORBIDDEN) throw new Error("Access denied");
    if (o.status !== a.OK) throw new Error("Failed to fetch wayback events");
    return o.json()
  }
  async getStoreFrames() {
    const t = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === a.NOT_FOUND) throw new Error(Mt());
    if (e.status === a.FORBIDDEN) throw new Error(qt());
    if (e.status === a.CONFLICT) throw new Error(zt());
    if (e.status !== a.OK) throw new Error(u())
  }
  async postEquipCosmetics(t) {
    const e = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async getStoreNameCosmetics() {
    const t = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return await t.json()
  }
  async postBuyCosmetic(t) {
    const e = await this.request(`/store/name/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async getMyNameCosmetics() {
    const t = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== a.OK) throw new l(u(), t.status);
    return await t.json()
  }
  async getTicketsKpi(t) {
    const e = new URLSearchParams;
    e.set("start", t.startIso), e.set("end", t.endIso), t.compare && e.set("compare", "1"), t.userId != null && e.set("userId", String(t.userId)), t.allianceId != null && e.set("allianceId", String(t.allianceId)), t.reason != null && e.set("reason", t.reason), t.punishment != null && e.set("punishment", t.punishment), t.granularity != null && e.set("granularity", t.granularity);
    const n = await this.request(`/staff/dashboard/kpi/tickets?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.json()
  }
  async postCreateFrame(t) {
    const e = new FormData;
    e.append("name", t.name), e.append("image", t.image), e.append("description", t.description), e.append("value", t.value.toString()), e.append("rarity", t.rarity), e.append("purchasable", t.purchasable.toString());
    const n = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (n.status !== a.OK) throw new l(u(), n.status)
  }
  async postCreateFont(t) {
    const e = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async postCreateStyle(t) {
    const e = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(t)
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async getR2Images(t) {
    const e = new URLSearchParams({
        page: String(t.page),
        pageSize: String(t.pageSize)
      }),
      n = await this.request(`/staff/store-manager/images?${e.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.json()
  }
  async postUploadR2Image(t) {
    const e = new FormData;
    t.name && e.append("name", t.name), e.append("image", t.image);
    const n = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: e
    });
    if (n.status !== a.OK) throw new l(u(), n.status);
    return n.json()
  }
  async deleteR2Image(t) {
    const e = await this.request(`/staff/store-manager/images/${t}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (e.status !== a.OK) throw new l(u(), e.status)
  }
  async markRulesAsRead() {
    return (await this.request("/me/rules/read", {
      method: "POST",
      credentials: "include"
    })).status === a.OK
  }
}
De = new WeakMap, xe = new WeakMap;

function wy(r) {
  var R, M;
  if (!r.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = r[0].season;
  for (const A of r)
    if (A.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (R = it.seasons) == null ? void 0 : R[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const n = e.tileSize;
  let s = Number.POSITIVE_INFINITY,
    o = Number.POSITIVE_INFINITY,
    i = Number.NEGATIVE_INFINITY,
    c = Number.NEGATIVE_INFINITY;
  const d = r.map(A => {
      const b = Math.round(A.tile[0] * n + A.pixel[0]),
        T = Math.round(A.tile[1] * n + A.pixel[1]);
      return b < s && (s = b), T < o && (o = T), b > i && (i = b), T > c && (c = T), {
        x: b,
        y: T,
        colorIdx: A.colorIdx
      }
    }),
    _ = i - s + 1,
    g = c - o + 1;
  if (!Number.isFinite(_) || !Number.isFinite(g) || _ <= 0 || g <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const p = new Uint8ClampedArray(_ * g * 4);
  for (const {
      x: A,
      y: b,
      colorIdx: T
    }
    of d) {
    const U = (M = it.colors) == null ? void 0 : M[T];
    if (!U) throw new Error(`Unknown palette color index: ${T}`);
    const $ = A - s,
      z = ((b - o) * _ + $) * 4,
      [Ve, m, y] = U.rgb;
    p[z] = Ve, p[z + 1] = m, p[z + 2] = y, p[z + 3] = T === 0 ? 1 : 255
  }
  return {
    data: p,
    width: _,
    height: g,
    offsetX: s,
    offsetY: o,
    season: t
  }
}
async function yy(r) {
  const t = by(r.width, r.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const n = e.createImageData(r.width, r.height);
  return n.data.set(r.data), e.putImageData(n, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((s, o) => {
    t.toBlob(i => {
      if (!i) {
        o(new Error("Failed to encode auto painter bitmap."));
        return
      }
      s(i)
    }, "image/png")
  })
}

function by(r, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = r, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let Y = new gy(pt);
typeof window < "u" && wr(() => {
  let r = Y.online;
  yr(() => {
    const t = Y.online;
    t && !r && window.dispatchEvent(new CustomEvent("wplace:online")), r = t
  })
});
const Tb = r => new URL(r, pt).toString();

function ur(r, t) {
  if (!(r != null && r.length)) return !1;
  for (const e of r)
    if (e === t) return !0;
  return !1
}

function vy(r, t) {
  for (const e of t)
    if (ur(r, e)) return !0;
  return !1
}

function lr(r) {
  const t = atob(r),
    e = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
  return e
}

function Ey(r) {
  if (typeof Buffer < "u") return Buffer.from(r).toString("base64");
  let t = "";
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t)
}
class Ty {
  constructor(t) {
    v(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const n = Math.floor(t / 8),
      s = t % 8;
    if (n >= this.bytes.length) {
      const i = new Uint8Array(n + 1),
        c = i.length - this.bytes.length;
      for (let d = 0; d < this.bytes.length; d++) i[d + c] = this.bytes[d];
      this.bytes = i
    }
    const o = this.bytes.length - 1 - n;
    e ? this.bytes[o] = this.bytes[o] | 1 << s : this.bytes[o] = this.bytes[o] & ~(1 << s)
  }
  get(t) {
    const e = Math.floor(t / 8),
      n = t % 8,
      s = this.bytes.length;
    return e > s ? !1 : (this.bytes[s - 1 - e] & 1 << n) !== 0
  }
}

function Ob(r) {
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onload = () => {
      const s = n.result;
      if (!s || typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s.substring(s.indexOf(",") + 1))
    }, n.readAsDataURL(r)
  })
}

function Sb(r) {
  if (typeof FileReader > "u") {
    const t = r.type || "application/octet-stream";
    return r.arrayBuffer().then(e => `data:${t};base64,${Ey(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const n = new FileReader;
    n.onloadend = () => {
      const s = n.result;
      if (typeof s != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(s)
    }, n.onerror = e, n.readAsDataURL(r)
  })
}

function Ib(r) {
  if (!r.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = r.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = r.slice(5, t),
    n = r.slice(t + 1),
    s = e.indexOf(";base64"),
    o = (s === -1 ? e : e.slice(0, s)) || "text/plain";
  if (s !== -1) {
    const i = lr(n),
      c = new Uint8Array(i.byteLength);
    return c.set(i), new Blob([c], {
      type: o
    })
  }
  return new Blob([decodeURIComponent(n)], {
    type: o
  })
}

function Ab(...r) {
  return r.filter(Boolean).join(" ")
}
const Oy = typeof document < "u";
let Gt = 0;
var Pe, Me, Le;
class Sy {
  constructor() {
    I(this, Pe, P(We([])));
    I(this, Me, P(We([])));
    I(this, Le, t => {
      const e = this.toasts.findIndex(n => n.id === t);
      return e === -1 ? null : e
    });
    v(this, "addToast", t => {
      Oy && this.toasts.unshift(t)
    });
    v(this, "updateToast", ({
      id: t,
      data: e,
      type: n,
      message: s
    }) => {
      const o = this.toasts.findIndex(c => c.id === t),
        i = this.toasts[o];
      this.toasts[o] = {
        ...i,
        ...e,
        id: t,
        title: s,
        type: n,
        updated: !0
      }
    });
    v(this, "create", t => {
      var c;
      const {
        message: e,
        ...n
      } = t, s = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((c = t.id) == null ? void 0 : c.length) > 0 ? t.id : Gt++, o = t.dismissable === void 0 ? !0 : t.dismissable, i = t.type === void 0 ? "default" : t.type;
      return vt(() => {
        this.toasts.find(_ => _.id === s) ? this.updateToast({
          id: s,
          data: t,
          type: i,
          message: e,
          dismissable: o
        }) : this.addToast({
          ...n,
          id: s,
          title: e,
          dismissable: o,
          type: i
        })
      }), s
    });
    v(this, "dismiss", t => (vt(() => {
      if (t === void 0) {
        this.toasts = this.toasts.map(n => ({
          ...n,
          dismiss: !0
        }));
        return
      }
      const e = this.toasts.findIndex(n => n.id === t);
      this.toasts[e] && (this.toasts[e] = {
        ...this.toasts[e],
        dismiss: !0
      })
    }), t));
    v(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = h(this, Le).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    v(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    v(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    v(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    v(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    v(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    v(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    v(this, "promise", (t, e) => {
      if (!e) return;
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const s = t instanceof Promise ? t : t();
      let o = n !== void 0;
      return s.then(i => {
        if (typeof i == "object" && i && "ok" in i && typeof i.ok == "boolean" && !i.ok) {
          o = !1;
          const c = Iy(i);
          this.create({
            id: n,
            type: "error",
            message: c
          })
        } else if (e.success !== void 0) {
          o = !1;
          const c = typeof e.success == "function" ? e.success(i) : e.success;
          this.create({
            id: n,
            type: "success",
            message: c
          })
        }
      }).catch(i => {
        if (e.error !== void 0) {
          o = !1;
          const c = typeof e.error == "function" ? e.error(i) : e.error;
          this.create({
            id: n,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var i;
        o && (this.dismiss(n), n = void 0), (i = e.finally) == null || i.call(e)
      }), n
    });
    v(this, "custom", (t, e) => {
      const n = (e == null ? void 0 : e.id) || Gt++;
      return this.create({
        component: t,
        id: n,
        ...e
      }), n
    });
    v(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    v(this, "setHeight", t => {
      const e = h(this, Le).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    v(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return N(h(this, Pe))
  }
  set toasts(t) {
    k(h(this, Pe), t, !0)
  }
  get heights() {
    return N(h(this, Me))
  }
  set heights(t) {
    k(h(this, Me), t, !0)
  }
}
Pe = new WeakMap, Me = new WeakMap, Le = new WeakMap;

function Iy(r) {
  return r && typeof r == "object" && "status" in r ? `HTTP error! Status: ${r.status}` : `Error! ${r}`
}
const C = new Sy;

function Ay(r, t) {
  return C.create({
    message: r,
    ...t
  })
}
var Ze;
class Nb {
  constructor() {
    I(this, Ze, _e(() => C.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return N(h(this, Ze))
  }
}
Ze = new WeakMap;
const Ny = Ay,
  ky = Object.assign(Ny, {
    success: C.success,
    info: C.info,
    warning: C.warning,
    error: C.error,
    custom: C.custom,
    message: C.message,
    promise: C.promise,
    dismiss: C.dismiss,
    loading: C.loading,
    getActiveToasts: () => C.toasts.filter(r => !r.dismiss)
  });
var Ue, je, Be, Ce, ze, qe, Fe, Ke;
class Ry {
  constructor() {
    v(this, "channel", new BroadcastChannel("user-channel"));
    I(this, Ue, P());
    I(this, je, P(!0));
    I(this, Be, P());
    I(this, Ce, P(Date.now()));
    I(this, ze, _e(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((mt.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    I(this, qe, _e(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    I(this, Fe, _e(() => {
      var t;
      return new Ty(lr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    I(this, Ke, _e(() => {
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
    return N(h(this, Ue))
  }
  set data(t) {
    k(h(this, Ue), t, !0)
  }
  get loading() {
    return N(h(this, je))
  }
  set loading(t) {
    k(h(this, je), t, !0)
  }
  get notificationCount() {
    return N(h(this, Be))
  }
  set notificationCount(t) {
    k(h(this, Be), t, !0)
  }
  get lastFetch() {
    return N(h(this, Ce))
  }
  set lastFetch(t) {
    k(h(this, Ce), t)
  }
  get charges() {
    return N(h(this, ze))
  }
  set charges(t) {
    k(h(this, ze), t)
  }
  get cooldown() {
    return N(h(this, qe))
  }
  set cooldown(t) {
    k(h(this, qe), t)
  }
  get flagsBitmap() {
    return N(h(this, Fe))
  }
  set flagsBitmap(t) {
    k(h(this, Fe), t)
  }
  get timeoutUntil() {
    return N(h(this, Ke))
  }
  set timeoutUntil(t) {
    k(h(this, Ke), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await Y.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && Y.getNotificationCount().then(n => {
        this.notificationCount = n
      }), (e = this.data) != null && e.id && (Yr("userId", {
        id: this.data.id
      }), he.setUserId(this.data.id)), !!this.data
    } catch (n) {
      return console.error(n), ky.warning(If(), {
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
    var n;
    return t < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return ur((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return vy((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ue = new WeakMap, je = new WeakMap, Be = new WeakMap, Ce = new WeakMap, ze = new WeakMap, qe = new WeakMap, Fe = new WeakMap, Ke = new WeakMap;
const ie = new Ry;
let E;
const F = new Array(128).fill(void 0);
F.push(void 0, null, !0, !1);

function w(r) {
  return F[r]
}
const _r = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && _r.decode();
let de = null;

function ge() {
  return (de === null || de.byteLength === 0) && (de = new Uint8Array(E.memory.buffer)), de
}

function fe(r, t) {
  return r = r >>> 0, _r.decode(ge().subarray(r, r + t))
}
let we = F.length;

function S(r) {
  we === F.length && F.push(F.length + 1);
  const t = we;
  return we = F[t], F[t] = r, t
}

function q(r, t) {
  try {
    return r.apply(this, t)
  } catch (e) {
    E.__wbindgen_export_0(S(e))
  }
}

function X(r) {
  return r == null
}

function Dy(r) {
  r < 132 || (F[r] = we, we = r)
}

function Ht(r) {
  const t = w(r);
  return Dy(r), t
}
const Wt = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(r => {
  E.__wbindgen_export_1.get(r.dtor)(r.a, r.b)
});

function xy(r, t, e, n) {
  const s = {
      a: r,
      b: t,
      cnt: 1,
      dtor: e
    },
    o = (...i) => {
      s.cnt++;
      const c = s.a;
      s.a = 0;
      try {
        return n(c, s.b, ...i)
      } finally {
        --s.cnt === 0 ? (E.__wbindgen_export_1.get(s.dtor)(c, s.b), Wt.unregister(s)) : s.a = c
      }
    };
  return o.original = s, Wt.register(o, s, s), o
}
let Z = null;

function Qe() {
  return (Z === null || Z.buffer.detached === !0 || Z.buffer.detached === void 0 && Z.buffer !== E.memory.buffer) && (Z = new DataView(E.memory.buffer)), Z
}
let ne = 0;
const He = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Py = typeof He.encodeInto == "function" ? function(r, t) {
    return He.encodeInto(r, t)
  } : function(r, t) {
    const e = He.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    }
  };

function gt(r, t, e) {
  if (e === void 0) {
    const c = He.encode(r),
      d = t(c.length, 1) >>> 0;
    return ge().subarray(d, d + c.length).set(c), ne = c.length, d
  }
  let n = r.length,
    s = t(n, 1) >>> 0;
  const o = ge();
  let i = 0;
  for (; i < n; i++) {
    const c = r.charCodeAt(i);
    if (c > 127) break;
    o[s + i] = c
  }
  if (i !== n) {
    i !== 0 && (r = r.slice(i)), s = e(s, n, n = i + r.length * 3, 1) >>> 0;
    const c = ge().subarray(s + i, s + n),
      d = Py(r, c);
    i += d.written, s = e(s, n, i, 1) >>> 0
  }
  return ne = i, s
}

function My(r) {
  const t = gt(r, E.__wbindgen_export_2, E.__wbindgen_export_3),
    e = ne;
  E.set_fingerprint(t, e)
}

function Ly(r) {
  let t, e;
  try {
    const o = E.__wbindgen_add_to_stack_pointer(-16),
      i = gt(r, E.__wbindgen_export_2, E.__wbindgen_export_3),
      c = ne;
    E.get_pawtected_endpoint_payload(o, i, c);
    var n = Qe().getInt32(o + 0, !0),
      s = Qe().getInt32(o + 4, !0);
    return t = n, e = s, fe(n, s)
  } finally {
    E.__wbindgen_add_to_stack_pointer(16), E.__wbindgen_export_4(t, e, 1)
  }
}

function Uy(r, t) {
  const e = t(r.length * 1, 1) >>> 0;
  return ge().set(r, e / 1), ne = r.length, e
}

function jy(r) {
  const t = Uy(r, E.__wbindgen_export_2),
    e = ne;
  E.set_telemetry(t, e)
}

function st(r) {
  E.set_user_id(r)
}

function By(r) {
  E.set_automated_browser(r)
}

function Cy(r) {
  E.set_cf_likely_automated(r)
}

function zy(r) {
  const t = gt(r, E.__wbindgen_export_2, E.__wbindgen_export_3),
    e = ne;
  E.request_url(t, e)
}

function qy(r) {
  E.set_automated_clicks(r)
}

function Fy() {
  E.init_listeners()
}

function Ky(r, t, e) {
  E.__wbindgen_export_5(r, t, S(e))
}
async function $y(r, t) {
  if (typeof Response == "function" && r instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(r, t)
    } catch (n) {
      if (r.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n
    }
    const e = await r.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(r, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: r
    } : e
  }
}

function Vy() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_addEventListener_90e553fdce254421 = function() {
    return q(function(t, e, n, s) {
      w(t).addEventListener(fe(e, n), w(s))
    }, arguments)
  }, r.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = w(t).buffer;
    return S(e)
  }, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return q(function(t, e) {
      const n = w(t).call(w(e));
      return S(n)
    }, arguments)
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return q(function(t, e, n) {
      const s = w(t).call(w(e), w(n));
      return S(s)
    }, arguments)
  }, r.wbg.__wbg_clientX_5eb380a5f1fec6fd = function(t) {
    return w(t).clientX
  }, r.wbg.__wbg_clientY_d8b9c7f0c4e2e677 = function(t) {
    return w(t).clientY
  }, r.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = w(t).crypto;
    return S(e)
  }, r.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = w(t).document;
    return X(e) ? 0 : S(e)
  }, r.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return q(function(t, e) {
      w(t).getRandomValues(w(e))
    }, arguments)
  }, r.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return q(function(t, e) {
      const n = Reflect.get(w(t), w(e));
      return S(n)
    }, arguments)
  }, r.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return q(function(t) {
      return w(t).hasFocus()
    }, arguments)
  }, r.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return q(function(t) {
      const e = w(t).innerWidth;
      return S(e)
    }, arguments)
  }, r.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = w(t) instanceof Window
    } catch {
      e = !1
    }
    return e
  }, r.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    const e = w(t).msCrypto;
    return S(e)
  }, r.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = w(t).navigator;
    return S(e)
  }, r.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(w(t));
    return S(e)
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const n = new Function(fe(t, e));
    return S(n)
  }, r.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, n) {
    const s = new Uint8Array(w(t), e >>> 0, n >>> 0);
    return S(s)
  }, r.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return S(e)
  }, r.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = w(t).node;
    return S(e)
  }, r.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, r.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = w(t).process;
    return S(e)
  }, r.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return q(function(t, e) {
      w(t).randomFillSync(Ht(e))
    }, arguments)
  }, r.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return q(function() {
      const t = module.require;
      return S(t)
    }, arguments)
  }, r.wbg.__wbg_set_65595bdd868b3009 = function(t, e, n) {
    w(t).set(w(e), n >>> 0)
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return X(t) ? 0 : S(t)
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return X(t) ? 0 : S(t)
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return X(t) ? 0 : S(t)
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return X(t) ? 0 : S(t)
  }, r.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, n) {
    const s = w(t).subarray(e >>> 0, n >>> 0);
    return S(s)
  }, r.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = w(t).versions;
    return S(e)
  }, r.wbg.__wbindgen_boolean_get = function(t) {
    const e = w(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, r.wbg.__wbindgen_closure_wrapper58 = function(t, e, n) {
    const s = xy(t, e, 3, Ky);
    return S(s)
  }, r.wbg.__wbindgen_is_function = function(t) {
    return typeof w(t) == "function"
  }, r.wbg.__wbindgen_is_object = function(t) {
    const e = w(t);
    return typeof e == "object" && e !== null
  }, r.wbg.__wbindgen_is_string = function(t) {
    return typeof w(t) == "string"
  }, r.wbg.__wbindgen_is_undefined = function(t) {
    return w(t) === void 0
  }, r.wbg.__wbindgen_memory = function() {
    const t = E.memory;
    return S(t)
  }, r.wbg.__wbindgen_number_get = function(t, e) {
    const n = w(e),
      s = typeof n == "number" ? n : void 0;
    Qe().setFloat64(t + 8, X(s) ? 0 : s, !0), Qe().setInt32(t + 0, !X(s), !0)
  }, r.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = w(t);
    return S(e)
  }, r.wbg.__wbindgen_object_drop_ref = function(t) {
    Ht(t)
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    const n = fe(t, e);
    return S(n)
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(fe(t, e))
  }, r
}

function Gy(r, t) {
  return E = r.exports, dr.__wbindgen_wasm_module = t, Z = null, de = null, E
}
async function dr(r) {
  if (E !== void 0) return E;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? {
    module_or_path: r
  } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = Vy();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const {
    instance: e,
    module: n
  } = await $y(await r, t);
  return Gy(e, n)
}
class Hy {
  constructor() {
    v(this, "interval");
    v(this, "storagesEmpty", !1);
    v(this, "storages", [new Xe, new ct, new ut, new Yy]);
    v(this, "pawtectLoaded");
    v(this, "pawtectError")
  }
  init() {
    this.interval === void 0 && (this.loadPawtect(), this.interval = setInterval(() => {
      if (!(!ie.data || this.storagesEmpty || localStorage.getItem(Xe.KEY))) {
        for (const e of this.storages) {
          const n = e.get();
          if (n) {
            for (const s of this.storages) s.set(n);
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
      const o = s.get();
      if (o && !(o.timestamp + e < Date.now()) && o.userId !== t) return !0
    }
    const n = {
      userId: t,
      timestamp: Date.now()
    };
    for (const s of this.storages) s.set(n);
    return this.storagesEmpty = !1, !1
  }
  loadPawtect() {
    return this.pawtectLoaded || (this.pawtectLoaded = (async () => {
      var t;
      try {
        await dr(Qr), (t = ie.data) != null && t.id && st(ie.data.id), Fy();
        const e = fetch;
        return Object.assign(window, {
          fetch: Wy((n, s) => {
            let o = null;
            return n instanceof Request ? o = n.url : n instanceof URL ? o = n.href : typeof n == "string" && (o = n), o !== null && !o.startsWith("/") && zy(o), e.call(window, n, s)
          })
        }), !0
      } catch (e) {
        return console.error("Error loading Pawtect WASM:", e), this.pawtectError = e, Wr(e), this.pawtectLoaded = void 0, !1
      }
    })()), this.pawtectLoaded
  }
  async setUserId(t) {
    await this.loadPawtect(), st(t)
  }
  async setCfLikelyAutomated(t) {
    await this.loadPawtect(), Cy(t)
  }
  isPawtectReady() {
    return this.pawtectLoaded ?? Promise.resolve(!1)
  }
  getPawtectError() {
    return this.pawtectError
  }
  async getHeaders(t) {
    const e = await Ye(),
      n = an();
    return {
      "x-pawtect-token": await this.getPawtectedEndpointPayload(t, n),
      "x-t": n,
      "x-fp": e
    }
  }
  async getPawtectedEndpointPayload(t, e) {
    if (!await this.loadPawtect()) throw new Error(Ag());
    const s = navigator.webdriver,
      o = await Ye();
    st(ie.data.id), My(o), By(s), qy(mt.automatedClicks);
    const i = Uint8Array.from(atob(e), c => c.charCodeAt(0));
    return jy(i), Ly(t)
  }
}

function Wy(r) {
  return r.bind().bind()
}
const H = class H {
  static codec(t) {
    const e = new TextEncoder().encode(this.XOR_KEY),
      n = new Uint8Array(t.length);
    for (let s = 0; s < t.length; s++) n[s] = t[s] ^ e[s % e.length];
    return n
  }
  get() {
    try {
      const t = localStorage.getItem(H.KEY);
      if (!t) return;
      const e = Uint8Array.from(atob(t), s => s.charCodeAt(0)),
        n = new TextDecoder().decode(H.codec(e));
      return JSON.parse(n)
    } catch {
      return
    }
  }
  set(t) {
    const e = new TextEncoder().encode(JSON.stringify(t)),
      n = H.codec(e);
    localStorage.setItem(H.KEY, btoa(String.fromCharCode(...n)))
  }
};
v(H, "KEY", "ui_layout_v3"), v(H, "XOR_KEY", "wplace-prefs");
let Xe = H;
const W = class W {
  get() {
    try {
      const t = sessionStorage.getItem(W.KEY);
      if (!t) return;
      let e = "";
      for (let n = 0; n < t.length; n += 4) {
        const s = parseInt(t.slice(n, n + 4), 16);
        e += String.fromCharCode(s - W.SHIFT & 65535)
      }
      return JSON.parse(e)
    } catch {
      return
    }
  }
  set(t) {
    const e = JSON.stringify(t);
    let n = "";
    for (const s of e) {
      const o = s.charCodeAt(0) + W.SHIFT & 65535;
      n += o.toString(16).padStart(4, "0")
    }
    sessionStorage.setItem(W.KEY, n)
  }
};
v(W, "KEY", "nav.cursor"), v(W, "SHIFT", 13);
let ct = W;
const te = class te {
  get() {
    const t = document.cookie.match(new RegExp("(?:^|; )" + te.KEY + "=([^;]*)"));
    if (t) try {
      const [e, n] = decodeURIComponent(t[1]).split("."), s = parseInt(e, 36), o = parseInt(n, 36);
      return !Number.isFinite(s) || !Number.isFinite(o) ? void 0 : {
        userId: s,
        timestamp: o
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
v(te, "KEY", "_pf_uid"), v(te, "MAX_AGE", 3600 * 24 * 365);
let ut = te;
class Yy {
  constructor() {
    v(this, "packed")
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
const he = new Hy;
export {
  Tb as $, en as A, tb as B, ob as C, he as D, Xi as E, yb as F, my as G, cr as H, sb as I, Dt as J, nt as K, Ob as L, il as M, Lu as N, fi as O, pt as P, Ws as Q, Zd as R, bb as S, ee as T, uu as U, Sb as V, Ib as W, vb as X, _b as Y, Ag as Z, Rm as _, Y as a, mb as a0, fb as a1, gb as a2, pb as a3, Eb as a4, wb as a5, eb as a6, it as b, u as c, hb as d, ei as e, Ls as f, Jc as g, Eu as h, Wu as i, bl as j, nb as k, mt as l, zd as m, rb as n, C as o, Ab as p, Nb as q, lb as r, db as s, ky as t, ie as u, ub as v, L as w, ib as x, ab as y, cb as z
};