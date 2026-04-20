var wr = Object.defineProperty;
var Ht = n => {
  throw TypeError(n)
};
var yr = (n, t, e) => t in n ? wr(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var F = (n, t, e) => yr(n, typeof t != "symbol" ? t + "" : t, e),
  vr = (n, t, e) => t.has(n) || Ht("Cannot " + e);
var b = (n, t, e) => (vr(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  D = (n, t, e) => t.has(n) ? Ht("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  e as B,
  i as M,
  h as P,
  g as dt,
  x as Yt,
  u as Te
} from "./B66BVdRM.js";
import {
  g as p
} from "./BhCkpOlh.js";
const ve = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  ae = globalThis,
  Ae = "10.40.0";

function Dt() {
  return Lt(ae), ae
}

function Lt(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || Ae, t[Ae] = t[Ae] || {}
}

function Mt(n, t, e = ae) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    i = r[Ae] = r[Ae] || {};
  return i[n] || (i[n] = t())
}
const br = "Sentry Logger ",
  Zt = {};

function Er(n) {
  if (!("console" in ae)) return n();
  const t = ae.console,
    e = {},
    r = Object.keys(Zt);
  r.forEach(i => {
    const a = Zt[i];
    e[i] = t[i], t[i] = a
  });
  try {
    return n()
  } finally {
    r.forEach(i => {
      t[i] = e[i]
    })
  }
}

function Tr() {
  Ut().enabled = !0
}

function Sr() {
  Ut().enabled = !1
}

function Cn() {
  return Ut().enabled
}

function Or(...n) {
  Pt("log", ...n)
}

function Ir(...n) {
  Pt("warn", ...n)
}

function Ar(...n) {
  Pt("error", ...n)
}

function Pt(n, ...t) {
  ve && Cn() && Er(() => {
    ae.console[n](`${br}[${n}]:`, ...t)
  })
}

function Ut() {
  return ve ? Mt("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const ct = {
    enable: Tr,
    disable: Sr,
    isEnabled: Cn,
    log: Or,
    warn: Ir,
    error: Ar
  },
  kr = Object.prototype.toString;

function Rr(n, t) {
  return kr.call(n) === `[object ${t}]`
}

function Nr(n) {
  return Rr(n, "Object")
}

function xr(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Dr(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    ve && ct.log(`Failed to add non-enumerable property "${t}" to object`, n)
  }
}
let pe;

function wt(n) {
  if (pe !== void 0) return pe ? pe(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = ae;
  return t in e && typeof e[t] == "function" ? (pe = e[t], pe(n)) : (pe = null, n())
}

function It() {
  return wt(() => Math.random())
}

function Lr() {
  return wt(() => Date.now())
}

function Mr(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function Pr() {
  const n = ae;
  return n.crypto || n.msCrypto
}
let vt;

function Ur() {
  return It() * 16
}

function ke(n = Pr()) {
  try {
    if (n != null && n.randomUUID) return wt(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return vt || (vt = "10000000100040008000" + 1e11), vt.replace(/[018]/g, t => (t ^ (Ur() & 15) >> t / 4).toString(16))
}
const jn = 1e3;

function Fn() {
  return Lr() / jn
}

function Cr() {
  const {
    performance: n
  } = ae;
  if (!(n != null && n.now) || !n.timeOrigin) return Fn;
  const t = n.timeOrigin;
  return () => (t + wt(() => n.now())) / jn
}
let $t;

function jr() {
  return ($t ?? ($t = Cr()))()
}

function Fr(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || jr(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : ke()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function Bn(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = Bn(r[i], t[i], e - 1));
  return r
}

function Jt() {
  return ke()
}
const At = "_sentrySpan";

function Xt(n, t) {
  t ? Dr(n, At, t) : delete n[At]
}

function Qt(n) {
  return n[At]
}
const Br = 100;
class _e {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: Jt(),
      sampleRand: It()
    }
  }
  clone() {
    const t = new _e;
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, Xt(t, Qt(this)), t
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
    }, this._session && Fr(this._session, {
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
      r = e instanceof _e ? e.getScopeData() : Nr(e) ? t : void 0,
      {
        tags: i,
        attributes: a,
        extra: o,
        user: s,
        contexts: l,
        level: u,
        fingerprint: _ = [],
        propagationContext: d,
        conversationId: m
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...i
    }, this._attributes = {
      ...this._attributes,
      ...a
    }, this._extra = {
      ...this._extra,
      ...o
    }, this._contexts = {
      ...this._contexts,
      ...l
    }, s && Object.keys(s).length && (this._user = s), u && (this._level = u), _.length && (this._fingerprint = _), d && (this._propagationContext = d), m && (this._conversationId = m), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Xt(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: Jt(),
      sampleRand: It()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var a;
    const r = typeof e == "number" ? e : Br;
    if (r <= 0) return this;
    const i = {
      timestamp: Fn(),
      ...t,
      message: t.message ? Mr(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(i), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (a = this._client) == null || a.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
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
      span: Qt(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Bn(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || ke();
    if (!this._client) return ve && ct.warn("No client configured on scope - will not capture exception!"), r;
    const i = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: i,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const i = (r == null ? void 0 : r.event_id) || ke();
    if (!this._client) return ve && ct.warn("No client configured on scope - will not capture message!"), i;
    const a = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: a,
      ...r,
      event_id: i
    }, this), i
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || ke();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (ve && ct.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function zr() {
  return Mt("defaultCurrentScope", () => new _e)
}

function Vr() {
  return Mt("defaultIsolationScope", () => new _e)
}
class Gr {
  constructor(t, e) {
    let r;
    t ? r = t : r = new _e;
    let i;
    e ? i = e : i = new _e, this._stack = [{
      scope: r
    }], this._isolationScope = i
  }
  withScope(t) {
    const e = this._pushScope();
    let r;
    try {
      r = t(e)
    } catch (i) {
      throw this._popScope(), i
    }
    return xr(r) ? r.then(i => (this._popScope(), i), i => {
      throw this._popScope(), i
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

function Ee() {
  const n = Dt(),
    t = Lt(n);
  return t.stack = t.stack || new Gr(zr(), Vr())
}

function Wr(n) {
  return Ee().withScope(n)
}

function qr(n, t) {
  const e = Ee();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function en(n) {
  return Ee().withScope(() => n(Ee().getIsolationScope()))
}

function Kr() {
  return {
    withIsolationScope: en,
    withScope: Wr,
    withSetScope: qr,
    withSetIsolationScope: (n, t) => en(t),
    getCurrentScope: () => Ee().getScope(),
    getIsolationScope: () => Ee().getIsolationScope()
  }
}

function zn(n) {
  const t = Lt(n);
  return t.acs ? t.acs : Kr()
}

function Hr() {
  const n = Dt();
  return zn(n).getCurrentScope()
}

function Yr() {
  const n = Dt();
  return zn(n).getIsolationScope()
}

function Zr(n, t) {
  return Hr().captureException(n, void 0)
}

function $r(n, t) {
  Yr().setContext(n, t)
}
const Qb = "https://maps.wplace.live",
  e0 = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Jr = "true",
  t0 = "0x4AAAAAABpHqZ-6i7uL0nmG",
  n0 = "https://backend.wplace.live/files",
  Ct = "https://backend.wplace.live",
  tn = "theme";
var Le, Me, Pe, Ue, Ce, je, Fe, Be, ze;
class Xr {
  constructor() {
    D(this, Le, B(!1));
    D(this, Me, B(!1));
    D(this, Pe, B(0));
    D(this, Ue, B(!1));
    D(this, Ce, B(dt(Qr())));
    D(this, je, B(!1));
    D(this, Fe, B("custom-winter"));
    D(this, Be, B(dt(Date.now())));
    D(this, ze, B(void 0));
    setInterval(() => {
      P(b(this, Be), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(tn), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return M(b(this, Le))
  }
  set dropletsDialogOpen(t) {
    P(b(this, Le), t, !0)
  }
  get storeDialogOpen() {
    return M(b(this, Me))
  }
  set storeDialogOpen(t) {
    P(b(this, Me), t, !0)
  }
  get storeTabIndex() {
    return M(b(this, Pe))
  }
  set storeTabIndex(t) {
    P(b(this, Pe), t, !0)
  }
  get muted() {
    return M(b(this, Ue))
  }
  set muted(t) {
    P(b(this, Ue), t, !0)
  }
  get language() {
    return M(b(this, Ce))
  }
  set language(t) {
    P(b(this, Ce), t, !0)
  }
  get automatedClicks() {
    return M(b(this, je))
  }
  set automatedClicks(t) {
    P(b(this, je), t, !0)
  }
  get theme() {
    return M(b(this, Fe))
  }
  set theme(t) {
    P(b(this, Fe), t, !0), localStorage.setItem(tn, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return M(b(this, Be))
  }
  get captcha() {
    return ei ? M(b(this, ze)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    P(b(this, ze), t, !0)
  }
}
Le = new WeakMap, Me = new WeakMap, Pe = new WeakMap, Ue = new WeakMap, Ce = new WeakMap, je = new WeakMap, Fe = new WeakMap, Be = new WeakMap, ze = new WeakMap;
const jt = new Xr;

function Qr() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const ei = Jr.toLowerCase() !== "false",
  ti = "" + new URL("../assets/pawtect_wasm_bg.9gmZk8aU.wasm", import.meta.url).href;
var kt = function() {
  return kt = Object.assign || function(t) {
    for (var e, r = 1, i = arguments.length; r < i; r++) {
      e = arguments[r];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
    }
    return t
  }, kt.apply(this, arguments)
};

function Q(n, t, e, r) {
  function i(a) {
    return a instanceof e ? a : new e(function(o) {
      o(a)
    })
  }
  return new(e || (e = Promise))(function(a, o) {
    function s(_) {
      try {
        u(r.next(_))
      } catch (d) {
        o(d)
      }
    }

    function l(_) {
      try {
        u(r.throw(_))
      } catch (d) {
        o(d)
      }
    }

    function u(_) {
      _.done ? a(_.value) : i(_.value).then(s, l)
    }
    u((r = r.apply(n, t || [])).next())
  })
}

function ee(n, t) {
  var e = {
      label: 0,
      sent: function() {
        if (a[0] & 1) throw a[1];
        return a[1]
      },
      trys: [],
      ops: []
    },
    r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this
  }), o;

  function s(u) {
    return function(_) {
      return l([u, _])
    }
  }

  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (e = 0)), e;) try {
      if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return e.label++, {
            value: u[1],
            done: !1
          };
        case 5:
          e.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            e = 0;
            continue
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            e.label = u[1];
            break
          }
          if (u[0] === 6 && e.label < a[1]) {
            e.label = a[1], a = u;
            break
          }
          if (a && e.label < a[2]) {
            e.label = a[2], e.ops.push(u);
            break
          }
          a[2] && e.ops.pop(), e.trys.pop();
          continue
      }
      u = t.call(n, e)
    } catch (_) {
      u = [6, _], i = 0
    } finally {
      r = a = 0
    }
    if (u[0] & 5) throw u[1];
    return {
      value: u[0] ? u[1] : void 0,
      done: !0
    }
  }
}

function Vn(n, t, e) {
  if (e || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)(a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return n.concat(a || Array.prototype.slice.call(t))
}
var Gn = "4.6.2";

function _t(n, t) {
  return new Promise(function(e) {
    return setTimeout(e, n, t)
  })
}

function ni() {
  return new Promise(function(n) {
    var t = new MessageChannel;
    t.port1.onmessage = function() {
      return n()
    }, t.port2.postMessage(null)
  })
}

function ri(n, t) {
  t === void 0 && (t = 1 / 0);
  var e = window.requestIdleCallback;
  return e ? new Promise(function(r) {
    return e.call(window, function() {
      return r()
    }, {
      timeout: t
    })
  }) : _t(Math.min(n, t))
}

function Wn(n) {
  return !!n && typeof n.then == "function"
}

function nn(n, t) {
  try {
    var e = n();
    Wn(e) ? e.then(function(r) {
      return t(!0, r)
    }, function(r) {
      return t(!1, r)
    }) : t(!0, e)
  } catch (r) {
    t(!1, r)
  }
}

function rn(n, t, e) {
  return e === void 0 && (e = 16), Q(this, void 0, void 0, function() {
    var r, i, a, o;
    return ee(this, function(s) {
      switch (s.label) {
        case 0:
          r = Array(n.length), i = Date.now(), a = 0, s.label = 1;
        case 1:
          return a < n.length ? (r[a] = t(n[a], a), o = Date.now(), o >= i + e ? (i = o, [4, ni()]) : [3, 3]) : [3, 4];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return ++a, [3, 1];
        case 4:
          return [2, r]
      }
    })
  })
}

function xe(n) {
  return n.then(void 0, function() {}), n
}

function ii(n, t) {
  for (var e = 0, r = n.length; e < r; ++e)
    if (n[e] === t) return !0;
  return !1
}

function ai(n, t) {
  return !ii(n, t)
}

function Ft(n) {
  return parseInt(n)
}

function J(n) {
  return parseFloat(n)
}

function re(n, t) {
  return typeof n == "number" && isNaN(n) ? t : n
}

function q(n) {
  return n.reduce(function(t, e) {
    return t + (e ? 1 : 0)
  }, 0)
}

function qn(n, t) {
  if (t === void 0 && (t = 1), Math.abs(t) >= 1) return Math.round(n / t) * t;
  var e = 1 / t;
  return Math.round(n * e) / e
}

function oi(n) {
  for (var t, e, r = "Unexpected syntax '".concat(n, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(n), a = i[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, l = function(m, g) {
      o[m] = o[m] || [], o[m].push(g)
    };;) {
    var u = s.exec(i[2]);
    if (!u) break;
    var _ = u[0];
    switch (_[0]) {
      case ".":
        l("class", _.slice(1));
        break;
      case "#":
        l("id", _.slice(1));
        break;
      case "[": {
        var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(_);
        if (d) l(d[1], (e = (t = d[4]) !== null && t !== void 0 ? t : d[5]) !== null && e !== void 0 ? e : "");
        else throw new Error(r);
        break
      }
      default:
        throw new Error(r)
    }
  }
  return [a, o]
}

function si(n) {
  for (var t = new Uint8Array(n.length), e = 0; e < n.length; e++) {
    var r = n.charCodeAt(e);
    if (r > 127) return new TextEncoder().encode(n);
    t[e] = r
  }
  return t
}

function oe(n, t) {
  var e = n[0] >>> 16,
    r = n[0] & 65535,
    i = n[1] >>> 16,
    a = n[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    l = t[1] >>> 16,
    u = t[1] & 65535,
    _ = 0,
    d = 0,
    m = 0,
    g = 0;
  g += a + u, m += g >>> 16, g &= 65535, m += i + l, d += m >>> 16, m &= 65535, d += r + s, _ += d >>> 16, d &= 65535, _ += e + o, _ &= 65535, n[0] = _ << 16 | d, n[1] = m << 16 | g
}

function Y(n, t) {
  var e = n[0] >>> 16,
    r = n[0] & 65535,
    i = n[1] >>> 16,
    a = n[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    l = t[1] >>> 16,
    u = t[1] & 65535,
    _ = 0,
    d = 0,
    m = 0,
    g = 0;
  g += a * u, m += g >>> 16, g &= 65535, m += i * u, d += m >>> 16, m &= 65535, m += a * l, d += m >>> 16, m &= 65535, d += r * u, _ += d >>> 16, d &= 65535, d += i * l, _ += d >>> 16, d &= 65535, d += a * s, _ += d >>> 16, d &= 65535, _ += e * u + r * l + i * s + a * o, _ &= 65535, n[0] = _ << 16 | d, n[1] = m << 16 | g
}

function ge(n, t) {
  var e = n[0];
  t %= 64, t === 32 ? (n[0] = n[1], n[1] = e) : t < 32 ? (n[0] = e << t | n[1] >>> 32 - t, n[1] = n[1] << t | e >>> 32 - t) : (t -= 32, n[0] = n[1] << t | e >>> 32 - t, n[1] = e << t | n[1] >>> 32 - t)
}

function K(n, t) {
  t %= 64, t !== 0 && (t < 32 ? (n[0] = n[1] >>> 32 - t, n[1] = n[1] << t) : (n[0] = n[1] << t - 32, n[1] = 0))
}

function L(n, t) {
  n[0] ^= t[0], n[1] ^= t[1]
}
var ci = [4283543511, 3981806797],
  ui = [3301882366, 444984403];

function an(n) {
  var t = [0, n[0] >>> 1];
  L(n, t), Y(n, ci), t[1] = n[0] >>> 1, L(n, t), Y(n, ui), t[1] = n[0] >>> 1, L(n, t)
}
var ot = [2277735313, 289559509],
  st = [1291169091, 658871167],
  on = [0, 5],
  li = [0, 1390208809],
  di = [0, 944331445];

function _i(n, t) {
  var e = si(n);
  t = t || 0;
  var r = [0, e.length],
    i = r[1] % 16,
    a = r[1] - i,
    o = [0, t],
    s = [0, t],
    l = [0, 0],
    u = [0, 0],
    _;
  for (_ = 0; _ < a; _ = _ + 16) l[0] = e[_ + 4] | e[_ + 5] << 8 | e[_ + 6] << 16 | e[_ + 7] << 24, l[1] = e[_] | e[_ + 1] << 8 | e[_ + 2] << 16 | e[_ + 3] << 24, u[0] = e[_ + 12] | e[_ + 13] << 8 | e[_ + 14] << 16 | e[_ + 15] << 24, u[1] = e[_ + 8] | e[_ + 9] << 8 | e[_ + 10] << 16 | e[_ + 11] << 24, Y(l, ot), ge(l, 31), Y(l, st), L(o, l), ge(o, 27), oe(o, s), Y(o, on), oe(o, li), Y(u, st), ge(u, 33), Y(u, ot), L(s, u), ge(s, 31), oe(s, o), Y(s, on), oe(s, di);
  l[0] = 0, l[1] = 0, u[0] = 0, u[1] = 0;
  var d = [0, 0];
  switch (i) {
    case 15:
      d[1] = e[_ + 14], K(d, 48), L(u, d);
    case 14:
      d[1] = e[_ + 13], K(d, 40), L(u, d);
    case 13:
      d[1] = e[_ + 12], K(d, 32), L(u, d);
    case 12:
      d[1] = e[_ + 11], K(d, 24), L(u, d);
    case 11:
      d[1] = e[_ + 10], K(d, 16), L(u, d);
    case 10:
      d[1] = e[_ + 9], K(d, 8), L(u, d);
    case 9:
      d[1] = e[_ + 8], L(u, d), Y(u, st), ge(u, 33), Y(u, ot), L(s, u);
    case 8:
      d[1] = e[_ + 7], K(d, 56), L(l, d);
    case 7:
      d[1] = e[_ + 6], K(d, 48), L(l, d);
    case 6:
      d[1] = e[_ + 5], K(d, 40), L(l, d);
    case 5:
      d[1] = e[_ + 4], K(d, 32), L(l, d);
    case 4:
      d[1] = e[_ + 3], K(d, 24), L(l, d);
    case 3:
      d[1] = e[_ + 2], K(d, 16), L(l, d);
    case 2:
      d[1] = e[_ + 1], K(d, 8), L(l, d);
    case 1:
      d[1] = e[_], L(l, d), Y(l, ot), ge(l, 31), Y(l, st), L(o, l)
  }
  return L(o, r), L(s, r), oe(o, s), oe(s, o), an(o), an(s), oe(o, s), oe(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function fi(n) {
  var t;
  return kt({
    name: n.name,
    message: n.message,
    stack: (t = n.stack) === null || t === void 0 ? void 0 : t.split(`
`)
  }, n)
}

function hi(n) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
}

function mi(n) {
  return typeof n != "function"
}

function pi(n, t) {
  var e = xe(new Promise(function(r) {
    var i = Date.now();
    nn(n.bind(null, t), function() {
      for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
      var s = Date.now() - i;
      if (!a[0]) return r(function() {
        return {
          error: a[1],
          duration: s
        }
      });
      var l = a[1];
      if (mi(l)) return r(function() {
        return {
          value: l,
          duration: s
        }
      });
      r(function() {
        return new Promise(function(u) {
          var _ = Date.now();
          nn(l, function() {
            for (var d = [], m = 0; m < arguments.length; m++) d[m] = arguments[m];
            var g = s + Date.now() - _;
            if (!d[0]) return u({
              error: d[1],
              duration: g
            });
            u({
              value: d[1],
              duration: g
            })
          })
        })
      })
    })
  }));
  return function() {
    return e.then(function(i) {
      return i()
    })
  }
}

function gi(n, t, e, r) {
  var i = Object.keys(n).filter(function(o) {
      return ai(e, o)
    }),
    a = xe(rn(i, function(o) {
      return pi(n[o], t)
    }, r));
  return function() {
    return Q(this, void 0, void 0, function() {
      var s, l, u, _, d;
      return ee(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, a];
          case 1:
            return s = m.sent(), [4, rn(s, function(g) {
              return xe(g())
            }, r)];
          case 2:
            return l = m.sent(), [4, Promise.all(l)];
          case 3:
            for (u = m.sent(), _ = {}, d = 0; d < i.length; ++d) _[i[d]] = u[d];
            return [2, _]
        }
      })
    })
  }
}

function Kn() {
  var n = window,
    t = navigator;
  return q(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function wi() {
  var n = window,
    t = navigator;
  return q(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !Kn()
}

function rt() {
  var n = window,
    t = navigator;
  return q(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
}

function X() {
  var n = window,
    t = navigator;
  return q(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, t.vendor.indexOf("Apple") === 0, "RGBColor" in n, "WebKitMediaKeys" in n]) >= 4
}

function Bt() {
  var n = window,
    t = n.HTMLElement,
    e = n.Document;
  return q(["safari" in n, !("ongestureend" in n), !("TouchEvent" in n), !("orientation" in n), t && !("autocapitalize" in t.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function it() {
  var n = window;
  return hi(n.print) && String(n.browser) === "[object WebPageNamespace]"
}

function Hn() {
  var n, t, e = window;
  return q(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function yi() {
  var n = window;
  return q([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function vi() {
  var n = window,
    t = n.URLPattern;
  return q(["union" in Set.prototype, "Iterator" in n, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function bi() {
  var n = window;
  return q(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
}

function at() {
  var n = window,
    t = navigator,
    e = n.CSS,
    r = n.HTMLButtonElement;
  return q([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function Ei() {
  if (navigator.platform === "iPad") return !0;
  var n = screen,
    t = n.width / n.height;
  return q(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Ti() {
  var n = document;
  return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
}

function Si() {
  var n = document;
  return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
}

function zt() {
  var n = rt(),
    t = Hn(),
    e = window,
    r = navigator,
    i = "connection";
  return n ? q([!("SharedWorker" in e), r[i] && "ontypechange" in r[i], !("sinkId" in new Audio)]) >= 2 : t ? q(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Oi() {
  var n = navigator,
    t = window,
    e = Audio.prototype,
    r = t.visualViewport;
  return q(["srLatency" in e, "srChannelCount" in e, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function Ii() {
  return Ri() ? -4 : Ai()
}

function Ai() {
  var n = window,
    t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
  if (!t) return -2;
  if (ki()) return -1;
  var e = 4500,
    r = 5e3,
    i = new t(1, r, 44100),
    a = i.createOscillator();
  a.type = "triangle", a.frequency.value = 1e4;
  var o = i.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, a.connect(o), o.connect(i.destination), a.start(0);
  var s = Ni(i),
    l = s[0],
    u = s[1],
    _ = xe(l.then(function(d) {
      return xi(d.getChannelData(0).subarray(e))
    }, function(d) {
      if (d.name === "timeout" || d.name === "suspended") return -3;
      throw d
    }));
  return function() {
    return u(), _
  }
}

function ki() {
  return X() && !Bt() && !bi()
}

function Ri() {
  return X() && at() && it() || rt() && Oi() && vi()
}

function Ni(n) {
  var t = 3,
    e = 500,
    r = 500,
    i = 5e3,
    a = function() {},
    o = new Promise(function(s, l) {
      var u = !1,
        _ = 0,
        d = 0;
      n.oncomplete = function(E) {
        return s(E.renderedBuffer)
      };
      var m = function() {
          setTimeout(function() {
            return l(sn("timeout"))
          }, Math.min(r, d + i - Date.now()))
        },
        g = function() {
          try {
            var E = n.startRendering();
            switch (Wn(E) && xe(E), n.state) {
              case "running":
                d = Date.now(), u && m();
                break;
              case "suspended":
                document.hidden || _++, u && _ >= t ? l(sn("suspended")) : setTimeout(g, e);
                break
            }
          } catch (w) {
            l(w)
          }
        };
      g(), a = function() {
        u || (u = !0, d > 0 && m())
      }
    });
  return [o, a]
}

function xi(n) {
  for (var t = 0, e = 0; e < n.length; ++e) t += Math.abs(n[e]);
  return t
}

function sn(n) {
  var t = new Error(n);
  return t.name = n, t
}

function Yn(n, t, e) {
  var r, i, a;
  return e === void 0 && (e = 50), Q(this, void 0, void 0, function() {
    var o, s;
    return ee(this, function(l) {
      switch (l.label) {
        case 0:
          o = document, l.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, _t(e)];
        case 2:
          return l.sent(), [3, 1];
        case 3:
          s = o.createElement("iframe"), l.label = 4;
        case 4:
          return l.trys.push([4, , 10, 11]), [4, new Promise(function(u, _) {
            var d = !1,
              m = function() {
                d = !0, u()
              },
              g = function(T) {
                d = !0, _(T)
              };
            s.onload = m, s.onerror = g;
            var E = s.style;
            E.setProperty("display", "block", "important"), E.position = "absolute", E.top = "0", E.left = "0", E.visibility = "hidden", t && "srcdoc" in s ? s.srcdoc = t : s.src = "about:blank", o.body.appendChild(s);
            var w = function() {
              var T, O;
              d || (((O = (T = s.contentWindow) === null || T === void 0 ? void 0 : T.document) === null || O === void 0 ? void 0 : O.readyState) === "complete" ? m() : setTimeout(w, 10))
            };
            w()
          })];
        case 5:
          l.sent(), l.label = 6;
        case 6:
          return !((i = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || i === void 0) && i.body ? [3, 8] : [4, _t(e)];
        case 7:
          return l.sent(), [3, 6];
        case 8:
          return [4, n(s, s.contentWindow)];
        case 9:
          return [2, l.sent()];
        case 10:
          return (a = s.parentNode) === null || a === void 0 || a.removeChild(s), [7];
        case 11:
          return [2]
      }
    })
  })
}

function Di(n) {
  for (var t = oi(n), e = t[0], r = t[1], i = document.createElement(e ?? "div"), a = 0, o = Object.keys(r); a < o.length; a++) {
    var s = o[a],
      l = r[s].join(" ");
    s === "style" ? Li(i.style, l) : i.setAttribute(s, l)
  }
  return i
}

function Li(n, t) {
  for (var e = 0, r = t.split(";"); e < r.length; e++) {
    var i = r[e],
      a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
    if (a) {
      var o = a[1],
        s = a[2],
        l = a[4];
      n.setProperty(o, s, l || "")
    }
  }
}

function Mi() {
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
var Pi = "mmMwWLliI0O&1",
  Ui = "48px",
  we = ["monospace", "sans-serif", "serif"],
  cn = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Ci() {
  var n = this;
  return Yn(function(t, e) {
    var r = e.document;
    return Q(n, void 0, void 0, function() {
      var i, a, o, s, l, u, _, d, m, g, E, w;
      return ee(this, function(T) {
        for (i = r.body, i.style.fontSize = Ui, a = r.createElement("div"), a.style.setProperty("visibility", "hidden", "important"), o = {}, s = {}, l = function(O) {
            var N = r.createElement("span"),
              C = N.style;
            return C.position = "absolute", C.top = "0", C.left = "0", C.fontFamily = O, N.textContent = Pi, a.appendChild(N), N
          }, u = function(O, N) {
            return l("'".concat(O, "',").concat(N))
          }, _ = function() {
            return we.map(l)
          }, d = function() {
            for (var O = {}, N = function(y) {
                O[y] = we.map(function(S) {
                  return u(y, S)
                })
              }, C = 0, j = cn; C < j.length; C++) {
              var H = j[C];
              N(H)
            }
            return O
          }, m = function(O) {
            return we.some(function(N, C) {
              return O[C].offsetWidth !== o[N] || O[C].offsetHeight !== s[N]
            })
          }, g = _(), E = d(), i.appendChild(a), w = 0; w < we.length; w++) o[we[w]] = g[w].offsetWidth, s[we[w]] = g[w].offsetHeight;
        return [2, cn.filter(function(O) {
          return m(E[O])
        })]
      })
    })
  })
}

function ji() {
  var n = navigator.plugins;
  if (n) {
    for (var t = [], e = 0; e < n.length; ++e) {
      var r = n[e];
      if (r) {
        for (var i = [], a = 0; a < r.length; ++a) {
          var o = r[a];
          i.push({
            type: o.type,
            suffixes: o.suffixes
          })
        }
        t.push({
          name: r.name,
          description: r.description,
          mimeTypes: i
        })
      }
    }
    return t
  }
}

function Fi() {
  return Bi(Hi())
}

function Bi(n) {
  var t, e = !1,
    r, i, a = zi(),
    o = a[0],
    s = a[1];
  return Vi(o, s) ? (e = Gi(s), n ? r = i = "skipped" : (t = Wi(o, s), r = t[0], i = t[1])) : r = i = "unsupported", {
    winding: e,
    geometry: r,
    text: i
  }
}

function zi() {
  var n = document.createElement("canvas");
  return n.width = 1, n.height = 1, [n, n.getContext("2d")]
}

function Vi(n, t) {
  return !!(t && n.toDataURL)
}

function Gi(n) {
  return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
}

function Wi(n, t) {
  qi(n, t);
  var e = bt(n),
    r = bt(n);
  if (e !== r) return ["unstable", "unstable"];
  Ki(n, t);
  var i = bt(n);
  return [i, e]
}

function qi(n, t) {
  n.width = 240, n.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var e = "Cwm fjordbank gly ".concat("😃");
  t.fillText(e, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(e, 4, 45)
}

function Ki(n, t) {
  n.width = 122, n.height = 110, t.globalCompositeOperation = "multiply";
  for (var e = 0, r = [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]; e < r.length; e++) {
    var i = r[e],
      a = i[0],
      o = i[1],
      s = i[2];
    t.fillStyle = a, t.beginPath(), t.arc(o, s, 40, 0, Math.PI * 2, !0), t.closePath(), t.fill()
  }
  t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, Math.PI * 2, !0), t.arc(60, 60, 20, 0, Math.PI * 2, !0), t.fill("evenodd")
}

function bt(n) {
  return n.toDataURL()
}

function Hi() {
  return X() && at() && it()
}

function Yi() {
  var n = navigator,
    t = 0,
    e;
  n.maxTouchPoints !== void 0 ? t = Ft(n.maxTouchPoints) : n.msMaxTouchPoints !== void 0 && (t = n.msMaxTouchPoints);
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

function Zi() {
  return navigator.oscpu
}

function $i() {
  var n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) rt() && yi() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    var r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Ji() {
  return window.screen.colorDepth
}

function Xi() {
  return re(J(navigator.deviceMemory), void 0)
}

function Qi() {
  if (!(X() && at() && it())) return ea()
}

function ea() {
  var n = screen,
    t = function(r) {
      return re(Ft(r), null)
    },
    e = [t(n.width), t(n.height)];
  return e.sort().reverse(), e
}
var ta = 2500,
  na = 10,
  ut, Et;

function ra() {
  if (Et === void 0) {
    var n = function() {
      var t = Rt();
      Nt(t) ? Et = setTimeout(n, ta) : (ut = t, Et = void 0)
    };
    n()
  }
}

function ia() {
  var n = this;
  return ra(),
    function() {
      return Q(n, void 0, void 0, function() {
        var t;
        return ee(this, function(e) {
          switch (e.label) {
            case 0:
              return t = Rt(), Nt(t) ? ut ? [2, Vn([], ut, !0)] : Ti() ? [4, Si()] : [3, 2] : [3, 2];
            case 1:
              e.sent(), t = Rt(), e.label = 2;
            case 2:
              return Nt(t) || (ut = t), [2, t]
          }
        })
      })
    }
}

function aa() {
  var n = this;
  if (X() && at() && it()) return function() {
    return Promise.resolve(void 0)
  };
  var t = ia();
  return function() {
    return Q(n, void 0, void 0, function() {
      var e, r;
      return ee(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, t()];
          case 1:
            return e = i.sent(), r = function(a) {
              return a === null ? null : qn(a, na)
            }, [2, [r(e[0]), r(e[1]), r(e[2]), r(e[3])]]
        }
      })
    })
  }
}

function Rt() {
  var n = screen;
  return [re(J(n.availTop), null), re(J(n.width) - J(n.availWidth) - re(J(n.availLeft), 0), null), re(J(n.height) - J(n.availHeight) - re(J(n.availTop), 0), null), re(J(n.availLeft), null)]
}

function Nt(n) {
  for (var t = 0; t < 4; ++t)
    if (n[t]) return !1;
  return !0
}

function oa() {
  return re(Ft(navigator.hardwareConcurrency), void 0)
}

function sa() {
  var n, t = (n = window.Intl) === null || n === void 0 ? void 0 : n.DateTimeFormat;
  if (t) {
    var e = new t().resolvedOptions().timeZone;
    if (e) return e
  }
  var r = -ca();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r)
}

function ca() {
  var n = new Date().getFullYear();
  return Math.max(J(new Date(n, 0, 1).getTimezoneOffset()), J(new Date(n, 6, 1).getTimezoneOffset()))
}

function ua() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function la() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function da() {
  if (!(Kn() || wi())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function _a() {
  return !!window.openDatabase
}

function fa() {
  return navigator.cpuClass
}

function ha() {
  var n = navigator.platform;
  return n === "MacIntel" && X() && !Bt() ? Ei() ? "iPad" : "iPhone" : n
}

function ma() {
  return navigator.vendor || ""
}

function pa() {
  for (var n = [], t = 0, e = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < e.length; t++) {
    var r = e[t],
      i = window[r];
    i && typeof i == "object" && n.push(r)
  }
  return n.sort()
}

function ga() {
  var n = document;
  try {
    n.cookie = "cookietest=1; SameSite=Strict;";
    var t = n.cookie.indexOf("cookietest=") !== -1;
    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function wa() {
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

function ya(n) {
  var t = n === void 0 ? {} : n,
    e = t.debug;
  return Q(this, void 0, void 0, function() {
    var r, i, a, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          return va() ? (r = wa(), i = Object.keys(r), a = (l = []).concat.apply(l, i.map(function(_) {
            return r[_]
          })), [4, ba(a)]) : [2, void 0];
        case 1:
          return o = u.sent(), e && Ea(r, o), s = i.filter(function(_) {
            var d = r[_],
              m = q(d.map(function(g) {
                return o[g]
              }));
            return m > d.length * .6
          }), s.sort(), [2, s]
      }
    })
  })
}

function va() {
  return X() || zt()
}

function ba(n) {
  var t;
  return Q(this, void 0, void 0, function() {
    var e, r, i, a, l, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          for (e = document, r = e.createElement("div"), i = new Array(n.length), a = {}, un(r), l = 0; l < n.length; ++l) o = Di(n[l]), o.tagName === "DIALOG" && o.show(), s = e.createElement("div"), un(s), s.appendChild(o), r.appendChild(s), i[l] = o;
          u.label = 1;
        case 1:
          return e.body ? [3, 3] : [4, _t(50)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          e.body.appendChild(r);
          try {
            for (l = 0; l < n.length; ++l) i[l].offsetParent || (a[n[l]] = !0)
          } finally {
            (t = r.parentNode) === null || t === void 0 || t.removeChild(r)
          }
          return [2, a]
      }
    })
  })
}

function un(n) {
  n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
}

function Ea(n, t) {
  for (var e = "DOM blockers debug:\n```", r = 0, i = Object.keys(n); r < i.length; r++) {
    var a = i[r];
    e += `
`.concat(a, ":");
    for (var o = 0, s = n[a]; o < s.length; o++) {
      var l = s[o];
      e += `
  `.concat(t[l] ? "🚫" : "➡️", " ").concat(l)
    }
  }
  console.log("".concat(e, "\n```"))
}

function Ta() {
  for (var n = 0, t = ["rec2020", "p3", "srgb"]; n < t.length; n++) {
    var e = t[n];
    if (matchMedia("(color-gamut: ".concat(e, ")")).matches) return e
  }
}

function Sa() {
  if (ln("inverted")) return !0;
  if (ln("none")) return !1
}

function ln(n) {
  return matchMedia("(inverted-colors: ".concat(n, ")")).matches
}

function Oa() {
  if (dn("active")) return !0;
  if (dn("none")) return !1
}

function dn(n) {
  return matchMedia("(forced-colors: ".concat(n, ")")).matches
}
var Ia = 100;

function Aa() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var n = 0; n <= Ia; ++n)
      if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
    throw new Error("Too high value")
  }
}

function ka() {
  if (ye("no-preference")) return 0;
  if (ye("high") || ye("more")) return 1;
  if (ye("low") || ye("less")) return -1;
  if (ye("forced")) return 10
}

function ye(n) {
  return matchMedia("(prefers-contrast: ".concat(n, ")")).matches
}

function Ra() {
  if (_n("reduce")) return !0;
  if (_n("no-preference")) return !1
}

function _n(n) {
  return matchMedia("(prefers-reduced-motion: ".concat(n, ")")).matches
}

function Na() {
  if (fn("reduce")) return !0;
  if (fn("no-preference")) return !1
}

function fn(n) {
  return matchMedia("(prefers-reduced-transparency: ".concat(n, ")")).matches
}

function xa() {
  if (hn("high")) return !0;
  if (hn("standard")) return !1
}

function hn(n) {
  return matchMedia("(dynamic-range: ".concat(n, ")")).matches
}
var A = Math,
  W = function() {
    return 0
  };

function Da() {
  var n = A.acos || W,
    t = A.acosh || W,
    e = A.asin || W,
    r = A.asinh || W,
    i = A.atanh || W,
    a = A.atan || W,
    o = A.sin || W,
    s = A.sinh || W,
    l = A.cos || W,
    u = A.cosh || W,
    _ = A.tan || W,
    d = A.tanh || W,
    m = A.exp || W,
    g = A.expm1 || W,
    E = A.log1p || W,
    w = function(v) {
      return A.pow(A.PI, v)
    },
    T = function(v) {
      return A.log(v + A.sqrt(v * v - 1))
    },
    O = function(v) {
      return A.log(v + A.sqrt(v * v + 1))
    },
    N = function(v) {
      return A.log((1 + v) / (1 - v)) / 2
    },
    C = function(v) {
      return A.exp(v) - 1 / A.exp(v) / 2
    },
    j = function(v) {
      return (A.exp(v) + 1 / A.exp(v)) / 2
    },
    H = function(v) {
      return A.exp(v) - 1
    },
    y = function(v) {
      return (A.exp(2 * v) - 1) / (A.exp(2 * v) + 1)
    },
    S = function(v) {
      return A.log(1 + v)
    };
  return {
    acos: n(.12312423423423424),
    acosh: t(1e308),
    acoshPf: T(1e154),
    asin: e(.12312423423423424),
    asinh: r(1),
    asinhPf: O(1),
    atanh: i(.5),
    atanhPf: N(.5),
    atan: a(.5),
    sin: o(-1e300),
    sinh: s(1),
    sinhPf: C(1),
    cos: l(10.000000000123),
    cosh: u(1),
    coshPf: j(1),
    tan: _(-1e300),
    tanh: d(1),
    tanhPf: y(1),
    exp: m(1),
    expm1: g(1),
    expm1Pf: H(1),
    log1p: E(10),
    log1pPf: S(10),
    powPI: w(-100)
  }
}
var La = "mmMwWLliI0fiflO&1",
  Tt = {
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

function Ma() {
  return Pa(function(n, t) {
    for (var e = {}, r = {}, i = 0, a = Object.keys(Tt); i < a.length; i++) {
      var o = a[i],
        s = Tt[o],
        l = s[0],
        u = l === void 0 ? {} : l,
        _ = s[1],
        d = _ === void 0 ? La : _,
        m = n.createElement("span");
      m.textContent = d, m.style.whiteSpace = "nowrap";
      for (var g = 0, E = Object.keys(u); g < E.length; g++) {
        var w = E[g],
          T = u[w];
        T !== void 0 && (m.style[w] = T)
      }
      e[o] = m, t.append(n.createElement("br"), m)
    }
    for (var O = 0, N = Object.keys(Tt); O < N.length; O++) {
      var o = N[O];
      r[o] = e[o].getBoundingClientRect().width
    }
    return r
  })
}

function Pa(n, t) {
  return t === void 0 && (t = 4e3), Yn(function(e, r) {
    var i = r.document,
      a = i.body,
      o = a.style;
    o.width = "".concat(t, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", rt() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : X() && (a.style.zoom = "reset");
    var s = i.createElement("div");
    return s.textContent = Vn([], Array(t / 20 << 0), !0).map(function() {
      return "word"
    }).join(" "), a.appendChild(s), n(i, a)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Ua() {
  return navigator.pdfViewerEnabled
}

function Ca() {
  var n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
}

function ja() {
  var n = window.ApplePaySession;
  if (typeof(n == null ? void 0 : n.canMakePayments) != "function") return -1;
  if (Fa()) return -3;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (t) {
    return Ba(t)
  }
}
var Fa = Mi;

function Ba(n) {
  if (n instanceof Error && n.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
  throw n
}

function za() {
  var n, t = document.createElement("a"),
    e = (n = t.attributionSourceId) !== null && n !== void 0 ? n : t.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
var Zn = -1,
  $n = -2,
  Va = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Ga = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Wa = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  qa = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  Jn = "WEBGL_debug_renderer_info",
  Ka = "WEBGL_polygon_mode";

function Ha(n) {
  var t, e, r, i, a, o, s = n.cache,
    l = Xn(s);
  if (!l) return Zn;
  if (!er(l)) return $n;
  var u = Qn() ? null : l.getExtension(Jn);
  return {
    version: ((t = l.getParameter(l.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((e = l.getParameter(l.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = l.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((i = l.getParameter(l.RENDERER)) === null || i === void 0 ? void 0 : i.toString()) || "",
    rendererUnmasked: u ? (a = l.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || a === void 0 ? void 0 : a.toString() : "",
    shadingLanguageVersion: ((o = l.getParameter(l.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  }
}

function Ya(n) {
  var t = n.cache,
    e = Xn(t);
  if (!e) return Zn;
  if (!er(e)) return $n;
  var r = e.getSupportedExtensions(),
    i = e.getContextAttributes(),
    a = [],
    o = [],
    s = [],
    l = [],
    u = [];
  if (i)
    for (var _ = 0, d = Object.keys(i); _ < d.length; _++) {
      var m = d[_];
      o.push("".concat(m, "=").concat(i[m]))
    }
  for (var g = mn(e), E = 0, w = g; E < w.length; E++) {
    var T = w[E],
      O = e[T];
    s.push("".concat(T, "=").concat(O).concat(Va.has(O) ? "=".concat(e.getParameter(O)) : ""))
  }
  if (r)
    for (var N = 0, C = r; N < C.length; N++) {
      var j = C[N];
      if (!(j === Jn && Qn() || j === Ka && Ja())) {
        var H = e.getExtension(j);
        if (!H) {
          a.push(j);
          continue
        }
        for (var y = 0, S = mn(H); y < S.length; y++) {
          var T = S[y],
            O = H[T];
          l.push("".concat(T, "=").concat(O).concat(Ga.has(O) ? "=".concat(e.getParameter(O)) : ""))
        }
      }
    }
  for (var v = 0, $ = Wa; v < $.length; v++)
    for (var G = $[v], V = 0, te = qa; V < te.length; V++) {
      var me = te[V],
        yt = Za(e, G, me);
      u.push("".concat(G, ".").concat(me, "=").concat(yt.join(",")))
    }
  return l.sort(), s.sort(), {
    contextAttributes: o,
    parameters: s,
    shaderPrecisions: u,
    extensions: r,
    extensionParameters: l,
    unsupportedExtensions: a
  }
}

function Xn(n) {
  if (n.webgl) return n.webgl.context;
  var t = document.createElement("canvas"),
    e;
  t.addEventListener("webglCreateContextError", function() {
    return e = void 0
  });
  for (var r = 0, i = ["webgl", "experimental-webgl"]; r < i.length; r++) {
    var a = i[r];
    try {
      e = t.getContext(a)
    } catch {}
    if (e) break
  }
  return n.webgl = {
    context: e
  }, e
}

function Za(n, t, e) {
  var r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function mn(n) {
  var t = Object.keys(n.__proto__);
  return t.filter($a)
}

function $a(n) {
  return typeof n == "string" && !n.match(/[^A-Z0-9_x]/)
}

function Qn() {
  return Hn()
}

function Ja() {
  return rt() || X()
}

function er(n) {
  return typeof n.getParameter == "function"
}

function Xa() {
  var n = zt() || X();
  if (!n) return -2;
  if (!window.AudioContext) return -1;
  var t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function Qa() {
  if (!window.Intl) return -1;
  var n = window.Intl.DateTimeFormat;
  if (!n) return -2;
  var t = n().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}
var eo = {
  fonts: Ci,
  domBlockers: ya,
  fontPreferences: Ma,
  audio: Ii,
  screenFrame: aa,
  canvas: Fi,
  osCpu: Zi,
  languages: $i,
  colorDepth: Ji,
  deviceMemory: Xi,
  screenResolution: Qi,
  hardwareConcurrency: oa,
  timezone: sa,
  sessionStorage: ua,
  localStorage: la,
  indexedDB: da,
  openDatabase: _a,
  cpuClass: fa,
  platform: ha,
  plugins: ji,
  touchSupport: Yi,
  vendor: ma,
  vendorFlavors: pa,
  cookiesEnabled: ga,
  colorGamut: Ta,
  invertedColors: Sa,
  forcedColors: Oa,
  monochrome: Aa,
  contrast: ka,
  reducedMotion: Ra,
  reducedTransparency: Na,
  hdr: xa,
  math: Da,
  pdfViewerEnabled: Ua,
  architecture: Ca,
  applePay: ja,
  privateClickMeasurement: za,
  audioBaseLatency: Xa,
  dateTimeLocale: Qa,
  webGlBasics: Ha,
  webGlExtensions: Ya
};

function to(n) {
  return gi(eo, n, [])
}
var no = "$ if upgrade to Pro: https://fpjs.dev/pro";

function ro(n) {
  var t = io(n),
    e = ao(t);
  return {
    score: t,
    comment: no.replace(/\$/g, "".concat(e))
  }
}

function io(n) {
  if (zt()) return .4;
  if (X()) return Bt() && !(at() && it()) ? .5 : .3;
  var t = "value" in n.platform ? n.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function ao(n) {
  return qn(.99 + .01 * n, 1e-4)
}

function oo(n) {
  for (var t = "", e = 0, r = Object.keys(n).sort(); e < r.length; e++) {
    var i = r[e],
      a = n[i],
      o = "error" in a ? "error" : JSON.stringify(a.value);
    t += "".concat(t ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
  }
  return t
}

function tr(n) {
  return JSON.stringify(n, function(t, e) {
    return e instanceof Error ? fi(e) : e
  }, 2)
}

function nr(n) {
  return _i(oo(n))
}

function so(n) {
  var t, e = ro(n);
  return {
    get visitorId() {
      return t === void 0 && (t = nr(this.components)), t
    },
    set visitorId(r) {
      t = r
    },
    confidence: e,
    components: n,
    version: Gn
  }
}

function co(n) {
  return n === void 0 && (n = 50), ri(n, n * 2)
}

function uo(n, t) {
  var e = Date.now();
  return {
    get: function(r) {
      return Q(this, void 0, void 0, function() {
        var i, a, o;
        return ee(this, function(s) {
          switch (s.label) {
            case 0:
              return i = Date.now(), [4, n()];
            case 1:
              return a = s.sent(), o = so(a), (t || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(i - e, `
visitorId: `).concat(o.visitorId, `
components: `).concat(tr(a), "\n```")), [2, o]
          }
        })
      })
    }
  }
}

function lo() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    var n = new XMLHttpRequest;
    n.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(Gn, "/npm-monitoring"), !0), n.send()
  } catch (t) {
    console.error(t)
  }
}

function _o(n) {
  var t;
  return n === void 0 && (n = {}), Q(this, void 0, void 0, function() {
    var e, r, i;
    return ee(this, function(a) {
      switch (a.label) {
        case 0:
          return (!((t = n.monitoring) !== null && t !== void 0) || t) && lo(), e = n.delayFallback, r = n.debug, [4, co(e)];
        case 1:
          return a.sent(), i = to({
            cache: {},
            debug: r
          }), [2, uo(i, r)]
      }
    })
  })
}
var rr = {
  load: _o,
  hashComponents: nr,
  componentsToDebugString: tr
};
let St = null,
  ft;
async function fo() {
  return St || (St = rr.load()), St
}
async function ht() {
  return ft || ho().then(n => n.visitorId)
}
async function ho() {
  const t = await (await fo()).get(),
    {
      languages: e,
      fontPreferences: r,
      dateTimeLocale: i,
      canvas: a,
      ...o
    } = t.components,
    s = navigator.userAgent,
    l = navigator.deviceMemory || 0,
    u = navigator.userAgent.toLowerCase(),
    _ = u.includes("chrome"),
    d = u.includes("iphone"),
    m = u.includes("macintosh"),
    g = d || m;
  return ft = rr.hashComponents({
    ..._ ? {
      canvas: a,
      dateTimeLocale: i,
      languages: e
    } : {},
    ...g ? {
      canvas: a,
      languages: e,
      fontPreferences: r,
      dateTimeLocale: i
    } : {},
    languages: {
      value: [s, l],
      duration: 0
    },
    ...o
  }), {
    visitorId: ft,
    components: o
  }
}
const mo = () => "Your account has been suspended for breaking the rules",
  po = () => "Sua conta foi suspensa por quebrar as regras",
  go = () => "您的账号因违反规则已被暂停",
  wo = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  yo = () => "Tu cuenta ha sido suspendida por infringir las regras",
  vo = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  bo = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Eo = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  To = () => "Twoje konto zostało zawieszone za łamanie zasad",
  So = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Oo = () => "Ваш обліковий запис було призупинено за порушення правил",
  Io = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Ao = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? mo() : e === "pt" ? po() : e === "ch" ? go() : e === "de" ? wo() : e === "es" ? yo() : e === "fr" ? vo() : e === "it" ? bo() : e === "jp" ? Eo() : e === "pl" ? To() : e === "ru" ? So() : e === "uk" ? Oo() : Io()
  },
  ko = () => "Alliance name already taken",
  Ro = () => "Já possui uma aliança com esse nome",
  No = () => "该联盟名称已被占用",
  xo = () => "Der Allianzname ist bereits vergeben",
  Do = () => "Ese nombre de alianza ya está en uso",
  Lo = () => "Ce nom d’alliance est déjà pris",
  Mo = () => "Esiste già un'alleanza con questo nome",
  Po = () => "このアライアンス名は既に使用されています。",
  Uo = () => "Nazwa sojuszu jest już zajęta",
  Co = () => "Такое название альянса уже используется",
  jo = () => "Назва альянсу вже зайнята",
  Fo = () => "Tên liên minh đã được sử dụng",
  Bo = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ko() : e === "pt" ? Ro() : e === "ch" ? No() : e === "de" ? xo() : e === "es" ? Do() : e === "fr" ? Lo() : e === "it" ? Mo() : e === "jp" ? Po() : e === "pl" ? Uo() : e === "ru" ? Co() : e === "uk" ? jo() : Fo()
  },
  zo = () => "Alliance name exceeded the maximum number of characters",
  Vo = () => "O nome da aliança excedeu o número máximo de caracteres",
  Go = () => "联盟名称超过最大字符数限制",
  Wo = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  qo = () => "El nombre de la alianza superó el número máximo de caracteres",
  Ko = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Ho = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Yo = () => "アライアンス名が最大文字数を超えています。",
  Zo = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  $o = () => "Название альянса превышает максимальную длину",
  Jo = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  Xo = () => "Tên liên minh vượt quá số ký tự cho phép",
  Qo = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? zo() : e === "pt" ? Vo() : e === "ch" ? Go() : e === "de" ? Wo() : e === "es" ? qo() : e === "fr" ? Ko() : e === "it" ? Ho() : e === "jp" ? Yo() : e === "pl" ? Zo() : e === "ru" ? $o() : e === "uk" ? Jo() : Xo()
  },
  es = () => "Alliance with empty name",
  ts = () => "Aliança com nome vazio",
  ns = () => "名称为空的联盟",
  rs = () => "Allianz mit leerem Namen",
  is = () => "Alianza con nombre vacío",
  as = () => "Alliance avec nom vide",
  os = () => "Alleanza con nome vuoto",
  ss = () => "名前が空のアライアンスです。",
  cs = () => "Sojusz z pustą nazwą",
  us = () => "Альянс с пустым названием",
  ls = () => "Альянс із порожньою назвою",
  ds = () => "Liên minh không có tên",
  _s = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? es() : e === "pt" ? ts() : e === "ch" ? ns() : e === "de" ? rs() : e === "es" ? is() : e === "fr" ? as() : e === "it" ? os() : e === "jp" ? ss() : e === "pl" ? cs() : e === "ru" ? us() : e === "uk" ? ls() : ds()
  },
  fs = () => "Botting",
  hs = () => "Uso de bots",
  ms = () => "脚本",
  ps = () => "Bot-Nutzung",
  gs = () => "Botting",
  ws = () => "Bots",
  ys = () => "Uso di bot",
  vs = () => "ボット使用",
  bs = () => "Botting",
  Es = () => "Боттинг",
  Ts = () => "Боти",
  Ss = () => "Botting",
  Os = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? fs() : e === "pt" ? hs() : e === "ch" ? ms() : e === "de" ? ps() : e === "es" ? gs() : e === "fr" ? ws() : e === "it" ? ys() : e === "jp" ? vs() : e === "pl" ? bs() : e === "ru" ? Es() : e === "uk" ? Ts() : Ss()
  },
  Is = () => "Use of software to completely automate painting",
  As = () => "Uso de software para pintar de forma completamente automatizada ",
  ks = () => "使用软件完全自动化绘制",
  Rs = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ns = () => "Uso de software para automatizar completamente la pintura",
  xs = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Ds = () => "Uso di software per dipingere in modo completamente automatizzato",
  Ls = () => "ペイントを完全に自動化するソフトウェアの使用",
  Ms = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Ps = () => "Использование программ для полной автоматизации рисования",
  Us = () => "Використання програм, які повністю автоматизують малювання",
  Cs = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  js = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Is() : e === "pt" ? As() : e === "ch" ? ks() : e === "de" ? Rs() : e === "es" ? Ns() : e === "fr" ? xs() : e === "it" ? Ds() : e === "jp" ? Ls() : e === "pl" ? Ms() : e === "ru" ? Ps() : e === "uk" ? Us() : Cs()
  },
  Fs = () => "Breaking the rules",
  Bs = () => "Quebrar as regras",
  zs = () => "违反规则",
  Vs = () => "Regeln brechen",
  Gs = () => "Romper las reglas",
  Ws = () => "Violation des règles",
  qs = () => "Violazione delle regole",
  Ks = () => "ルール違反",
  Hs = () => "Łamanie zasad",
  Ys = () => "Нарушение правил",
  Zs = () => "Порушення правил",
  $s = () => "Vi phạm luật",
  Js = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Fs() : e === "pt" ? Bs() : e === "ch" ? zs() : e === "de" ? Vs() : e === "es" ? Gs() : e === "fr" ? Ws() : e === "it" ? qs() : e === "jp" ? Ks() : e === "pl" ? Hs() : e === "ru" ? Ys() : e === "uk" ? Zs() : $s()
  },
  Xs = () => "You have broken one of Wplace's rules",
  Qs = () => "Você quebrou uma das regras do Wplace",
  ec = () => "你违反了 Wplace 的一项规则",
  tc = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  nc = () => "Has infringido una de las reglas de Wplace",
  rc = () => "Vous avez enfreint l’une des règles de Wplace",
  ic = () => "Hai infranto una delle regole di Wplace",
  ac = () => "Wplaceのルールのいずれかに違反しました。",
  oc = () => "Złamałeś jedną z zasad Wplace",
  sc = () => "Вы нарушили одно из правил Wplace",
  cc = () => "Ви порушили одне з правил Wplace",
  uc = () => "Bạn đã vi phạm một trong các luật của Wplace",
  lc = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Xs() : e === "pt" ? Qs() : e === "ch" ? ec() : e === "de" ? tc() : e === "es" ? nc() : e === "fr" ? rc() : e === "it" ? ic() : e === "jp" ? ac() : e === "pl" ? oc() : e === "ru" ? sc() : e === "uk" ? cc() : uc()
  },
  dc = () => "You cannot paint over event pixels",
  _c = () => "Você não pode pintar sobre pixels de eventos",
  fc = () => "你不能覆盖活动像素",
  hc = () => "Du kannst nicht über Event-Pixel malen",
  mc = () => "No puedes pintar sobre píxeles de evento",
  pc = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  gc = () => "Non puoi dipingere sopra i pixel dell'evento",
  wc = () => "イベント用のピクセルの上には塗れません。",
  yc = () => "Nie możesz malować po pikselach wydarzenia",
  vc = () => "Вы не можете рисовать по пикселям события",
  bc = () => "Ви не можете малювати поверх пікселів події",
  Ec = () => "Bạn không thể tô lên pixel sự kiện",
  pn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? dc() : e === "pt" ? _c() : e === "ch" ? fc() : e === "de" ? hc() : e === "es" ? mc() : e === "fr" ? pc() : e === "it" ? gc() : e === "jp" ? wc() : e === "pl" ? yc() : e === "ru" ? vc() : e === "uk" ? bc() : Ec()
  },
  Tc = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Sc = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Oc = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Ic = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Ac = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  kc = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Rc = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Nc = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  xc = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Dc = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Lc = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Mc = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Pc = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Tc() : e === "pt" ? Sc() : e === "ch" ? Oc() : e === "de" ? Ic() : e === "es" ? Ac() : e === "fr" ? kc() : e === "it" ? Rc() : e === "jp" ? Nc() : e === "pl" ? xc() : e === "ru" ? Dc() : e === "uk" ? Lc() : Mc()
  },
  Uc = () => "Challenge verification not completed",
  Cc = () => "Verificação do desafio não concluída",
  jc = () => "挑战验证未完成",
  Fc = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Bc = () => "Verificación del desafío no completada",
  zc = () => "Vérification du défi non terminée",
  Vc = () => "Verifica della sfida non completata",
  Gc = () => "チャレンジ検証が完了していません",
  Wc = () => "Weryfikacja wyzwania niezakończona",
  qc = () => "Верификация вызова не завершена",
  Kc = () => "Перевірку виклику не завершено",
  Hc = () => "Xác minh thử thách chưa hoàn thành",
  gn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Uc() : e === "pt" ? Cc() : e === "ch" ? jc() : e === "de" ? Fc() : e === "es" ? Bc() : e === "fr" ? zc() : e === "it" ? Vc() : e === "jp" ? Gc() : e === "pl" ? Wc() : e === "ru" ? qc() : e === "uk" ? Kc() : Hc()
  },
  Yc = () => "Couldn't complete the purchase. This item does not exist.",
  Zc = () => "Não foi possível concluir a compra. Este item não existe.",
  $c = () => "无法完成购买。该物品不存在。",
  Jc = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  Xc = () => "No se pudo completar la compra. Este ítem no existe.",
  Qc = () => "Achat impossible. Cet objet n’existe pas.",
  eu = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  tu = () => "購入を完了できませんでした。このアイテムは存在しません。",
  nu = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  ru = () => "Не удалось завершить покупку. Этот предмет не существует.",
  iu = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  au = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  wn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Yc() : e === "pt" ? Zc() : e === "ch" ? $c() : e === "de" ? Jc() : e === "es" ? Xc() : e === "fr" ? Qc() : e === "it" ? eu() : e === "jp" ? tu() : e === "pl" ? nu() : e === "ru" ? ru() : e === "uk" ? iu() : au()
  },
  ou = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  su = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  cu = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  uu = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  lu = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  du = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  _u = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  fu = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  hu = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  mu = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  pu = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  gu = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  yn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ou() : e === "pt" ? su() : e === "ch" ? cu() : e === "de" ? uu() : e === "es" ? lu() : e === "fr" ? du() : e === "it" ? _u() : e === "jp" ? fu() : e === "pl" ? hu() : e === "ru" ? mu() : e === "uk" ? pu() : gu()
  },
  wu = () => "Doxxing",
  yu = () => "Doxxing",
  vu = () => "人肉搜索",
  bu = () => "Doxxing",
  Eu = () => "Doxxing",
  Tu = () => "Doxxing",
  Su = () => "Doxxing",
  Ou = () => "ドックス（Doxxing）",
  Iu = () => "Doxxing",
  Au = () => "Докcинг",
  ku = () => "Докcинг",
  Ru = () => "Doxxing",
  Nu = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? wu() : e === "pt" ? yu() : e === "ch" ? vu() : e === "de" ? bu() : e === "es" ? Eu() : e === "fr" ? Tu() : e === "it" ? Su() : e === "jp" ? Ou() : e === "pl" ? Iu() : e === "ru" ? Au() : e === "uk" ? ku() : Ru()
  },
  xu = () => "Released other's personal information without their consent",
  Du = () => "Vazar informações pessoais de terceiros sem consentimento",
  Lu = () => "在未获同意的情况下公开他人个人信息",
  Mu = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Pu = () => "Divulgó información personal de otra persona sin su consentimiento",
  Uu = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Cu = () => "Diffusione di informazioni personali di terzi senza consenso",
  ju = () => "他人の個人情報を同意なく公開した。",
  Fu = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Bu = () => "Публикация личной информации других людей без их согласия",
  zu = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Vu = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Gu = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? xu() : e === "pt" ? Du() : e === "ch" ? Lu() : e === "de" ? Mu() : e === "es" ? Pu() : e === "fr" ? Uu() : e === "it" ? Cu() : e === "jp" ? ju() : e === "pl" ? Fu() : e === "ru" ? Bu() : e === "uk" ? zu() : Vu()
  },
  Wu = () => "This email is already in use.",
  qu = () => "Este e-mail já está em uso.",
  Ku = () => "This email is already in use.",
  Hu = () => "This email is already in use.",
  Yu = () => "Este correo electrónico ya está en uso.",
  Zu = () => "This email is already in use.",
  $u = () => "Questa email è già in uso.",
  Ju = () => "This email is already in use.",
  Xu = () => "This email is already in use.",
  Qu = () => "This email is already in use.",
  el = () => "This email is already in use.",
  tl = () => "This email is already in use.",
  nl = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Wu() : e === "pt" ? qu() : e === "ch" ? Ku() : e === "de" ? Hu() : e === "es" ? Yu() : e === "fr" ? Zu() : e === "it" ? $u() : e === "jp" ? Ju() : e === "pl" ? Xu() : e === "ru" ? Qu() : e === "uk" ? el() : tl()
  },
  rl = n => `This email is already in use by user #${n.userId}.`,
  il = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  al = n => `This email is already in use by user #${n.userId}.`,
  ol = n => `This email is already in use by user #${n.userId}.`,
  sl = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  cl = n => `This email is already in use by user #${n.userId}.`,
  ul = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  ll = n => `This email is already in use by user #${n.userId}.`,
  dl = n => `This email is already in use by user #${n.userId}.`,
  _l = n => `This email is already in use by user #${n.userId}.`,
  fl = n => `This email is already in use by user #${n.userId}.`,
  hl = n => `This email is already in use by user #${n.userId}.`,
  ml = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? rl(n) : e === "pt" ? il(n) : e === "ch" ? al(n) : e === "de" ? ol(n) : e === "es" ? sl(n) : e === "fr" ? cl(n) : e === "it" ? ul(n) : e === "jp" ? ll(n) : e === "pl" ? dl(n) : e === "ru" ? _l(n) : e === "uk" ? fl(n) : hl(n)
  },
  pl = () => "Enter a valid email address.",
  gl = () => "Informe um endereço de e-mail válido.",
  wl = () => "Enter a valid email address.",
  yl = () => "Enter a valid email address.",
  vl = () => "Introduce una dirección de correo electrónico válida.",
  bl = () => "Enter a valid email address.",
  El = () => "Inserisci un indirizzo email valido.",
  Tl = () => "Enter a valid email address.",
  Sl = () => "Enter a valid email address.",
  Ol = () => "Enter a valid email address.",
  Il = () => "Enter a valid email address.",
  Al = () => "Enter a valid email address.",
  kl = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? pl() : e === "pt" ? gl() : e === "ch" ? wl() : e === "de" ? yl() : e === "es" ? vl() : e === "fr" ? bl() : e === "it" ? El() : e === "jp" ? Tl() : e === "pl" ? Sl() : e === "ru" ? Ol() : e === "uk" ? Il() : Al()
  },
  Rl = n => `Error while painting: ${n.err}`,
  Nl = n => `Erro enquanto pinta: ${n.err}`,
  xl = n => `绘制时出错：${n.err}`,
  Dl = n => `Fehler beim Malen: ${n.err}`,
  Ll = n => `Error al pintar: ${n.err}`,
  Ml = n => `Erreur lors de la peinture : ${n.err}`,
  Pl = n => `Errore durante la pittura: ${n.err}`,
  Ul = n => `ペイント中にエラーが発生しました: ${n.err}`,
  Cl = n => `Błąd podczas malowania: ${n.err}`,
  jl = n => `Ошибка при рисовании: ${n.err}`,
  Fl = n => `Помилка під час малювання: ${n.err}`,
  Bl = n => `Lỗi khi tô: ${n.err}`,
  zl = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Rl(n) : e === "pt" ? Nl(n) : e === "ch" ? xl(n) : e === "de" ? Dl(n) : e === "es" ? Ll(n) : e === "fr" ? Ml(n) : e === "it" ? Pl(n) : e === "jp" ? Ul(n) : e === "pl" ? Cl(n) : e === "ru" ? jl(n) : e === "uk" ? Fl(n) : Bl(n)
  },
  Vl = () => "Exceeded maximum number of characters",
  Gl = () => "Excedeu o número máximo de caracteres permitidos",
  Wl = () => "超出最大字符数",
  ql = () => "Maximale Zeichenanzahl überschritten",
  Kl = () => "Se excedió el número máximo de caracteres",
  Hl = () => "Nombre maximal de caractères dépassé",
  Yl = () => "Numero massimo di caratteri superato",
  Zl = () => "最大文字数を超過しました",
  $l = () => "Przekroczono maksymalną liczbę znaków",
  Jl = () => "Превышено максимальное количество символов",
  Xl = () => "Перевищено максимальну кількість символів",
  Ql = () => "Đã vượt quá số ký tự tối đa",
  ed = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Vl() : e === "pt" ? Gl() : e === "ch" ? Wl() : e === "de" ? ql() : e === "es" ? Kl() : e === "fr" ? Hl() : e === "it" ? Yl() : e === "jp" ? Zl() : e === "pl" ? $l() : e === "ru" ? Jl() : e === "uk" ? Xl() : Ql()
  },
  td = () => "Verification code expired. Please request a new one.",
  nd = () => "Código de verificação expirado. Por favor, solicite um novo.",
  rd = () => "验证码已过期，请重新获取。",
  id = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  ad = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  od = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  sd = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  cd = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  ud = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  ld = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  dd = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  _d = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  fd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? td() : e === "pt" ? nd() : e === "ch" ? rd() : e === "de" ? id() : e === "es" ? ad() : e === "fr" ? od() : e === "it" ? sd() : e === "jp" ? cd() : e === "pl" ? ud() : e === "ru" ? ld() : e === "uk" ? dd() : _d()
  },
  hd = () => "Griefing",
  md = () => "Griefing",
  pd = () => "破坏行为",
  gd = () => "Griefing",
  wd = () => "Griefing",
  yd = () => "Griefing",
  vd = () => "Griefing",
  bd = () => "グリーフィング",
  Ed = () => "Griefing",
  Td = () => "Гриферство",
  Sd = () => "Гріфінг",
  Od = () => "Griefing",
  Id = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? hd() : e === "pt" ? md() : e === "ch" ? pd() : e === "de" ? gd() : e === "es" ? wd() : e === "fr" ? yd() : e === "it" ? vd() : e === "jp" ? bd() : e === "pl" ? Ed() : e === "ru" ? Td() : e === "uk" ? Sd() : Od()
  },
  Ad = () => "Messed up with other's artworks",
  kd = () => "Estragou os desenhos dos outros",
  Rd = () => "破坏了他人的作品",
  Nd = () => "Kunstwerke anderer beschädigt",
  xd = () => "Arruinó las obras de arte de otros",
  Dd = () => "A abîmé les œuvres des autres",
  Ld = () => "Ha rovinato i disegni degli altri",
  Md = () => "他人の作品を荒らした",
  Pd = () => "Zniszczył prace innych",
  Ud = () => "Испортил чужие рисунки",
  Cd = () => "Зіпсував роботи інших",
  jd = () => "Phá hỏng tranh của người khác",
  Fd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ad() : e === "pt" ? kd() : e === "ch" ? Rd() : e === "de" ? Nd() : e === "es" ? xd() : e === "fr" ? Dd() : e === "it" ? Ld() : e === "jp" ? Md() : e === "pl" ? Pd() : e === "ru" ? Ud() : e === "uk" ? Cd() : jd()
  },
  Bd = () => "Hate speech",
  zd = () => "Discurso de Ódio",
  Vd = () => "仇恨言论",
  Gd = () => "Hassrede",
  Wd = () => "Discurso de odio",
  qd = () => "Discours haineux",
  Kd = () => "Discorso d'odio",
  Hd = () => "ヘイトスピーチ",
  Yd = () => "Mowa nienawiści",
  Zd = () => "Речь ненависти",
  $d = () => "Мова ворожнечі",
  Jd = () => "Ngôn từ thù hằn",
  Xd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Bd() : e === "pt" ? zd() : e === "ch" ? Vd() : e === "de" ? Gd() : e === "es" ? Wd() : e === "fr" ? qd() : e === "it" ? Kd() : e === "jp" ? Hd() : e === "pl" ? Yd() : e === "ru" ? Zd() : e === "uk" ? $d() : Jd()
  },
  Qd = () => "Racism, homophobia, hate groups, ...",
  e_ = () => "Racismo, homofobia, grupos de ódio, ...",
  t_ = () => "种族主义、恐同、仇恨团体等",
  n_ = () => "Rassismus, Homophobie, Hassgruppen, ...",
  r_ = () => "Racismo, homofobia, grupos de odio, ...",
  i_ = () => "Racisme, homophobie, groupes haineux, ...",
  a_ = () => "Razzismo, omofobia, gruppi d'odio, ...",
  o_ = () => "人種差別、同性愛差別、ヘイト団体など。",
  s_ = () => "Rasizm, homofobia, grupy nienawiści, ...",
  c_ = () => "Расизм, гомофобия, группы ненависти и т.п.",
  u_ = () => "Расизм, гомофобія, групи ненависті, ...",
  l_ = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  d_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Qd() : e === "pt" ? e_() : e === "ch" ? t_() : e === "de" ? n_() : e === "es" ? r_() : e === "fr" ? i_() : e === "it" ? a_() : e === "jp" ? o_() : e === "pl" ? s_() : e === "ru" ? c_() : e === "uk" ? u_() : l_()
  },
  __ = () => "Inappropriate content",
  f_ = () => "Conteúdo inapropriado",
  h_ = () => "不当内容",
  m_ = () => "Unangemessene Inhalte",
  p_ = () => "Contenido inapropiado",
  g_ = () => "Contenu inapproprié",
  w_ = () => "Contenuto inappropriato",
  y_ = () => "不適切なコンテンツ",
  v_ = () => "Nieodpowiednie treści",
  b_ = () => "Неприемлемый контент",
  E_ = () => "Неприйнятний вміст",
  T_ = () => "Nội dung không phù hợp",
  S_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? __() : e === "pt" ? f_() : e === "ch" ? h_() : e === "de" ? m_() : e === "es" ? p_() : e === "fr" ? g_() : e === "it" ? w_() : e === "jp" ? y_() : e === "pl" ? v_() : e === "ru" ? b_() : e === "uk" ? E_() : T_()
  },
  O_ = () => "+18, inappropriate link, highly suggestive content, ...",
  I_ = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  A_ = () => "+18、违规链接、高度暗示性内容等",
  k_ = () => "+18, unangemessene Links, stark anzügliche Inhalte, ...",
  R_ = () => "+18, enlace inapropiado, contenido muy sugerente, ...",
  N_ = () => "+18, lien inapproprié, contenu très suggestif, ...",
  x_ = () => "+18, link inappropriati, contenuto altamente esplicito, ...",
  D_ = () => "18禁コンテンツ、不適切なリンク、過度に性的な内容など。",
  L_ = () => "+18, nieodpowiedni link, mocno sugestywne treści, ...",
  M_ = () => "+18, неприемлемые ссылки, крайне откровенный контент и т.п.",
  P_ = () => "+18, неприйнятні посилання, дуже відвертий контент, ...",
  U_ = () => "+18, liên kết không phù hợp, nội dung khiêu gợi mạnh, ...",
  C_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? O_() : e === "pt" ? I_() : e === "ch" ? A_() : e === "de" ? k_() : e === "es" ? R_() : e === "fr" ? N_() : e === "it" ? x_() : e === "jp" ? D_() : e === "pl" ? L_() : e === "ru" ? M_() : e === "uk" ? P_() : U_()
  },
  j_ = () => "Invalid captcha",
  F_ = () => "Captcha inválido",
  B_ = () => "验证码无效",
  z_ = () => "Ungültiges Captcha",
  V_ = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  G_ = () => "Captcha invalide",
  W_ = () => "Captcha non valido. Riprova.",
  q_ = () => "キャプチャが無効です。",
  K_ = () => "Nieprawidłowy captcha",
  H_ = () => "Неверная капча",
  Y_ = () => "Неправильна капча",
  Z_ = () => "Captcha không hợp lệ",
  $_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? j_() : e === "pt" ? F_() : e === "ch" ? B_() : e === "de" ? z_() : e === "es" ? V_() : e === "fr" ? G_() : e === "it" ? W_() : e === "jp" ? q_() : e === "pl" ? K_() : e === "ru" ? H_() : e === "uk" ? Y_() : Z_()
  },
  J_ = () => "Invalid challenge response",
  X_ = () => "Resposta de desafio inválida",
  Q_ = () => "质询响应无效",
  ef = () => "Ungültige Challenge-Antwort",
  tf = () => "Respuesta de desafío inválida",
  nf = () => "Réponse au défi invalide",
  rf = () => "Risposta alla sfida non valida",
  af = () => "無効なチャレンジ応答",
  of = () => "Nieprawidłowa odpowiedź na wyzwanie",
  sf = () => "Неверный ответ на вызов",
  cf = () => "Недійсна відповідь на виклик",
  uf = () => "Phản hồi thử thách không hợp lệ",
  lf = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? J_() : e === "pt" ? X_() : e === "ch" ? Q_() : e === "de" ? ef() : e === "es" ? tf() : e === "fr" ? nf() : e === "it" ? rf() : e === "jp" ? af() : e === "pl" ? of() : e === "ru" ? sf() : e === "uk" ? cf() : uf()
  },
  df = () => "Invalid code",
  _f = () => "Código inválido",
  ff = () => "验证码无效",
  hf = () => "Ungültiger Code",
  mf = () => "Código inválido",
  pf = () => "Code invalide",
  gf = () => "Codice non valido",
  wf = () => "無効なコードです。",
  yf = () => "Nieprawidłowy kod",
  vf = () => "Неверный код",
  bf = () => "Невірний код",
  Ef = () => "Mã không hợp lệ",
  Tf = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? df() : e === "pt" ? _f() : e === "ch" ? ff() : e === "de" ? hf() : e === "es" ? mf() : e === "fr" ? pf() : e === "it" ? gf() : e === "jp" ? wf() : e === "pl" ? yf() : e === "ru" ? vf() : e === "uk" ? bf() : Ef()
  },
  Sf = () => "Invalid discord.",
  Of = () => "Discord inválido.",
  If = () => "无效的 Discord。",
  Af = () => "Ungültiger Discord.",
  kf = () => "Discord inválido.",
  Rf = () => "Discord invalide.",
  Nf = () => "Discord non valido.",
  xf = () => "無効なDiscordアカウントです。",
  Df = () => "Nieprawidłowy Discord.",
  Lf = () => "Неверный Discord.",
  Mf = () => "Некоректний Discord.",
  Pf = () => "Discord không hợp lệ.",
  Uf = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Sf() : e === "pt" ? Of() : e === "ch" ? If() : e === "de" ? Af() : e === "es" ? kf() : e === "fr" ? Rf() : e === "it" ? Nf() : e === "jp" ? xf() : e === "pl" ? Df() : e === "ru" ? Lf() : e === "uk" ? Mf() : Pf()
  },
  Cf = () => "The name contains disallowed characters or words. Please choose a different name.",
  jf = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Ff = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Bf = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  zf = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Vf = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Gf = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Wf = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  qf = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Kf = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Hf = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Yf = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  vn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Cf() : e === "pt" ? jf() : e === "ch" ? Ff() : e === "de" ? Bf() : e === "es" ? zf() : e === "fr" ? Vf() : e === "it" ? Gf() : e === "jp" ? Wf() : e === "pl" ? qf() : e === "ru" ? Kf() : e === "uk" ? Hf() : Yf()
  },
  Zf = () => "Invalid phone number",
  $f = () => "Número de telefone inválido",
  Jf = () => "无效的电话号码",
  Xf = () => "Ungültige Telefonnummer",
  Qf = () => "Número de teléfono inválido",
  eh = () => "Numéro de téléphone invalide",
  th = () => "Numero di telefono non valido",
  nh = () => "無効な電話番号です。",
  rh = () => "Nieprawidłowy numer telefonu",
  ih = () => "Неверный номер телефона",
  ah = () => "Некоректний номер телефону",
  oh = () => "Số điện thoại không hợp lệ",
  sh = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Zf() : e === "pt" ? $f() : e === "ch" ? Jf() : e === "de" ? Xf() : e === "es" ? Qf() : e === "fr" ? eh() : e === "it" ? th() : e === "jp" ? nh() : e === "pl" ? rh() : e === "ru" ? ih() : e === "uk" ? ah() : oh()
  },
  ch = () => "This phone number appears to be a landline. Please use a mobile number that can receive SMS.",
  uh = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  lh = () => "此电话号码似乎是固定电话。请使用可以接收短信的手机号码。",
  dh = () => "Diese Telefonnummer scheint ein Festnetzanschluss zu sein. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  _h = () => "Este número de teléfono parece ser fijo. Por favor, usa un número de celular que pueda recibir SMS.",
  fh = () => "Ce numéro de téléphone semble être un fixe. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  hh = () => "Questo numero di telefono sembra essere un fisso. Utilizza un numero di cellulare che possa ricevere SMS.",
  mh = () => "この電話番号は固定電話のようです。SMSを受信できる携帯電話番号をご使用ください。",
  ph = () => "Ten numer telefonu wydaje się być stacjonarny. Użyj numeru komórkowego, który może odbierać SMS-y.",
  gh = () => "Этот номер телефона является стационарным. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  wh = () => "Цей номер телефону є стаціонарним. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  yh = () => "Số điện thoại này có vẻ là số cố định. Vui lòng sử dụng số di động có thể nhận SMS.",
  vh = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ch() : e === "pt" ? uh() : e === "ch" ? lh() : e === "de" ? dh() : e === "es" ? _h() : e === "fr" ? fh() : e === "it" ? hh() : e === "jp" ? mh() : e === "pl" ? ph() : e === "ru" ? gh() : e === "uk" ? wh() : yh()
  },
  bh = () => "The new leader must be a member of the alliance",
  Eh = () => "O novo líder deve ser um membro da aliança",
  Th = () => "新盟主必须是联盟成员",
  Sh = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Oh = () => "El nuevo líder debe ser miembro de la alianza",
  Ih = () => "Le nouveau chef doit être membre de l’alliance",
  Ah = () => "Il nuovo leader deve essere un membro dell'alleanza",
  kh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Rh = () => "Nowy lider musi być członkiem sojuszu",
  Nh = () => "Новый лидер должен быть участником альянса",
  xh = () => "Новий лідер має бути учасником альянсу",
  Dh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Lh = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? bh() : e === "pt" ? Eh() : e === "ch" ? Th() : e === "de" ? Sh() : e === "es" ? Oh() : e === "fr" ? Ih() : e === "it" ? Ah() : e === "jp" ? kh() : e === "pl" ? Rh() : e === "ru" ? Nh() : e === "uk" ? xh() : Dh()
  },
  Mh = () => "Leaderboard is temporarily disabled",
  Ph = () => "O ranking está temporariamente desativado",
  Uh = () => "排行榜已暂时停用",
  Ch = () => "Die Bestenliste ist vorübergehend deaktiviert",
  jh = () => "La clasificación está deshabilitada temporalmente",
  Fh = () => "Le classement est temporairement désactivé",
  Bh = () => "La classifica è temporaneamente disattivata",
  zh = () => "ランキングは一時的に無効になっています。",
  Vh = () => "Ranking jest tymczasowo wyłączony",
  Gh = () => "Таблица лидеров временно отключена",
  Wh = () => "Таблиця лідерів тимчасово вимкнена",
  qh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  ce = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Mh() : e === "pt" ? Ph() : e === "ch" ? Uh() : e === "de" ? Ch() : e === "es" ? jh() : e === "fr" ? Fh() : e === "it" ? Bh() : e === "jp" ? zh() : e === "pl" ? Vh() : e === "ru" ? Gh() : e === "uk" ? Wh() : qh()
  },
  Kh = () => "Location name is too big (max. 128 characters)",
  Hh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Yh = () => "位置名称过长（最大 128 个字符）",
  Zh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  $h = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Jh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  Xh = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  Qh = () => "場所の名前が長すぎます（最大128文字）。",
  em = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  tm = () => "Название локации слишком длинное (макс. 128 символов)",
  nm = () => "Назва локації надто довга (макс. 128 символів)",
  rm = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  im = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Kh() : e === "pt" ? Hh() : e === "ch" ? Yh() : e === "de" ? Zh() : e === "es" ? $h() : e === "fr" ? Jh() : e === "it" ? Xh() : e === "jp" ? Qh() : e === "pl" ? em() : e === "ru" ? tm() : e === "uk" ? nm() : rm()
  },
  am = () => "Multi-accounting",
  om = () => "Múltiplas contas",
  sm = () => "多账号",
  cm = () => "Multi-Accounting",
  um = () => "Multi-cuentas",
  lm = () => "Multi-comptes",
  dm = () => "Multi-account",
  _m = () => "複数アカウント使用",
  fm = () => "Multi-konta",
  hm = () => "Мультиаккаунт",
  mm = () => "Мультиакаунтинг",
  pm = () => "Nhiều tài khoản",
  gm = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? am() : e === "pt" ? om() : e === "ch" ? sm() : e === "de" ? cm() : e === "es" ? um() : e === "fr" ? lm() : e === "it" ? dm() : e === "jp" ? _m() : e === "pl" ? fm() : e === "ru" ? hm() : e === "uk" ? mm() : pm()
  },
  wm = () => "Use more than one account to paint pixels",
  ym = () => "Usar mais de uma conta para pintar",
  vm = () => "使用多个账号绘制像素",
  bm = () => "Mehr als ein Konto zum Malen verwenden",
  Em = () => "Uso de más de una cuenta para pintar píxeles",
  Tm = () => "Utiliser plus d’un compte pour peindre",
  Sm = () => "Usare più di un account per dipingere",
  Om = () => "複数のアカウントを使ってピクセルを塗った。",
  Im = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Am = () => "Использование более одного аккаунта для рисования",
  km = () => "Використання більше ніж одного акаунта для малювання",
  Rm = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Nm = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? wm() : e === "pt" ? ym() : e === "ch" ? vm() : e === "de" ? bm() : e === "es" ? Em() : e === "fr" ? Tm() : e === "it" ? Sm() : e === "jp" ? Om() : e === "pl" ? Im() : e === "ru" ? Am() : e === "uk" ? km() : Rm()
  },
  xm = n => `You can change your name again in ${n.days} days`,
  Dm = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  Lm = n => `你可以在 ${n.days} 天后再次修改名称`,
  Mm = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  Pm = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  Um = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  Cm = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  jm = n => `${n.days}日後に再び名前を変更できます。`,
  Fm = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  Bm = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  zm = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Vm = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Gm = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? xm(n) : e === "pt" ? Dm(n) : e === "ch" ? Lm(n) : e === "de" ? Mm(n) : e === "es" ? Pm(n) : e === "fr" ? Um(n) : e === "it" ? Cm(n) : e === "jp" ? jm(n) : e === "pl" ? Fm(n) : e === "ru" ? Bm(n) : e === "uk" ? zm(n) : Vm(n)
  },
  Wm = () => "No internet access or the servers are offline. Try again later.",
  qm = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Km = () => "没有网络连接或服务器已离线。请稍后重试。",
  Hm = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Ym = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Zm = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  $m = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Jm = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  Xm = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  Qm = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  ep = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  tp = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  np = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Wm() : e === "pt" ? qm() : e === "ch" ? Km() : e === "de" ? Hm() : e === "es" ? Ym() : e === "fr" ? Zm() : e === "it" ? $m() : e === "jp" ? Jm() : e === "pl" ? Xm() : e === "ru" ? Qm() : e === "uk" ? ep() : tp()
  },
  rp = () => "You are not allowed to verify a phone number. Try refreshing the page",
  ip = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  ap = () => "您无权验证电话号码。请尝试刷新页面。",
  op = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  sp = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  cp = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  up = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  lp = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  dp = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  _p = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  fp = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  hp = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  mp = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? rp() : e === "pt" ? ip() : e === "ch" ? ap() : e === "de" ? op() : e === "es" ? sp() : e === "fr" ? cp() : e === "it" ? up() : e === "jp" ? lp() : e === "pl" ? dp() : e === "ru" ? _p() : e === "uk" ? fp() : hp()
  },
  pp = () => "Operation not allowed. Maybe you have too many favorite locations.",
  gp = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  wp = () => "操作不被允许。你的收藏位置可能过多。",
  yp = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  vp = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  bp = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Ep = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Tp = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Sp = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Op = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Ip = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Ap = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  kp = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? pp() : e === "pt" ? gp() : e === "ch" ? wp() : e === "de" ? yp() : e === "es" ? vp() : e === "fr" ? bp() : e === "it" ? Ep() : e === "jp" ? Tp() : e === "pl" ? Sp() : e === "ru" ? Op() : e === "uk" ? Ip() : Ap()
  },
  Rp = () => "You are trying to paint with a color you do not own",
  Np = () => "Você está tentando pintar com uma cor que não possui",
  xp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Dp = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Lp = () => "Estás intentando pintar con un color que no posees",
  Mp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Pp = () => "Stai cercando di dipingere con un colore che non possiedi",
  Up = () => "所持していない色で塗ろうとしています。",
  Cp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  jp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Fp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Bp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  bn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Rp() : e === "pt" ? Np() : e === "ch" ? xp() : e === "de" ? Dp() : e === "es" ? Lp() : e === "fr" ? Mp() : e === "it" ? Pp() : e === "jp" ? Up() : e === "pl" ? Cp() : e === "ru" ? jp() : e === "uk" ? Fp() : Bp()
  },
  zp = () => "Phone already used",
  Vp = () => "Telefone já usado",
  Gp = () => "电话号码已被使用",
  Wp = () => "Telefonnummer bereits verwendet",
  qp = () => "Teléfono ya utilizado",
  Kp = () => "Téléphone déjà utilisé",
  Hp = () => "Telefono già utilizzato",
  Yp = () => "この電話番号は既に使用されています。",
  Zp = () => "Numer telefonu jest już używany",
  $p = () => "Телефон уже используется",
  Jp = () => "Номер телефону вже використовується",
  Xp = () => "Số điện thoại đã được sử dụng",
  Qp = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? zp() : e === "pt" ? Vp() : e === "ch" ? Gp() : e === "de" ? Wp() : e === "es" ? qp() : e === "fr" ? Kp() : e === "it" ? Hp() : e === "jp" ? Yp() : e === "pl" ? Zp() : e === "ru" ? $p() : e === "uk" ? Jp() : Xp()
  },
  eg = () => "This phone number's region is not supported",
  tg = () => "A região deste número de telefone não é suportada",
  ng = () => "此电话号码的地区不受支持",
  rg = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  ig = () => "La región de este número de teléfono no es compatible",
  ag = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  og = () => "La regione di questo numero di telefono non è supportata",
  sg = () => "この電話番号の地域はサポートされていません",
  cg = () => "Region tego numeru telefonu nie jest obsługiwany",
  ug = () => "Регион этого номера телефона не поддерживается",
  lg = () => "Регіон цього номера телефону не підтримується",
  dg = () => "Vùng của số điện thoại này không được hỗ trợ",
  _g = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? eg() : e === "pt" ? tg() : e === "ch" ? ng() : e === "de" ? rg() : e === "es" ? ig() : e === "fr" ? ag() : e === "it" ? og() : e === "jp" ? sg() : e === "pl" ? cg() : e === "ru" ? ug() : e === "uk" ? lg() : dg()
  },
  fg = () => "Refresh your page to get the latest update",
  hg = () => "Recarregue sua página para obter as últimas atualizações",
  mg = () => "刷新页面以获取最新更新",
  pg = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  gg = () => "Actualiza la página para obtener la última versión",
  wg = () => "Actualisez la page pour obtenir les dernières mises à jour",
  yg = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  vg = () => "最新の状態にするにはページを再読み込みしてください。",
  bg = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Eg = () => "Обновите страницу, чтобы получить последние изменения",
  Tg = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Sg = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  En = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? fg() : e === "pt" ? hg() : e === "ch" ? mg() : e === "de" ? pg() : e === "es" ? gg() : e === "fr" ? wg() : e === "it" ? yg() : e === "jp" ? vg() : e === "pl" ? bg() : e === "ru" ? Eg() : e === "uk" ? Tg() : Sg()
  },
  Og = () => "The request timed out. Please try again.",
  Ig = () => "A solicitação expirou. Por favor, tente novamente.",
  Ag = () => "请求超时。请重试。",
  kg = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Rg = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Ng = () => "La requête a expiré. Veuillez réessayer.",
  xg = () => "La richiesta è scaduta. Riprova.",
  Dg = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Lg = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Mg = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Pg = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Ug = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Cg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Og() : e === "pt" ? Ig() : e === "ch" ? Ag() : e === "de" ? kg() : e === "es" ? Rg() : e === "fr" ? Ng() : e === "it" ? xg() : e === "jp" ? Dg() : e === "pl" ? Lg() : e === "ru" ? Mg() : e === "uk" ? Pg() : Ug()
  },
  jg = () => "The service is currently unavailable. Please try again later.",
  Fg = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  Bg = () => "服务当前不可用。请稍后再试。",
  zg = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  Vg = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  Gg = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  Wg = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  qg = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  Kg = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  Hg = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  Yg = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  Zg = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  $g = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? jg() : e === "pt" ? Fg() : e === "ch" ? Bg() : e === "de" ? zg() : e === "es" ? Vg() : e === "fr" ? Gg() : e === "it" ? Wg() : e === "jp" ? qg() : e === "pl" ? Kg() : e === "ru" ? Hg() : e === "uk" ? Yg() : Zg()
  },
  Jg = () => "Too many attempts. Please try again later",
  Xg = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  Qg = () => "尝试次数过多，请稍后再试",
  ew = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  tw = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  nw = () => "Trop de tentatives. Veuillez réessayer plus tard",
  rw = () => "Troppi tentativi. Riprova più tardi.",
  iw = () => "試行回数が多すぎます。後で再度お試しください。",
  aw = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  ow = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  sw = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  cw = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Tn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Jg() : e === "pt" ? Xg() : e === "ch" ? Qg() : e === "de" ? ew() : e === "es" ? tw() : e === "fr" ? nw() : e === "it" ? rw() : e === "jp" ? iw() : e === "pl" ? aw() : e === "ru" ? ow() : e === "uk" ? sw() : cw()
  },
  uw = () => "The typed username does not match your current username.",
  lw = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  dw = () => "输入的用户名与当前用户名不匹配。",
  _w = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  fw = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  hw = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  mw = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  pw = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  gw = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  ww = () => "Введённое имя пользователя не совпадает с текущим.",
  yw = () => "Введене імʼя користувача не збігається з поточним.",
  vw = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  bw = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? uw() : e === "pt" ? lw() : e === "ch" ? dw() : e === "de" ? _w() : e === "es" ? fw() : e === "fr" ? hw() : e === "it" ? mw() : e === "jp" ? pw() : e === "pl" ? gw() : e === "ru" ? ww() : e === "uk" ? yw() : vw()
  },
  Ew = () => "Unexpected server error. Try again later.",
  Tw = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Sw = () => "服务器出现意外错误。请稍后再试。",
  Ow = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Iw = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Aw = () => "Erreur serveur inattendue. Réessayez plus tard.",
  kw = () => "Errore imprevisto del server. Riprova più tardi.",
  Rw = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Nw = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  xw = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Dw = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Lw = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  f = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ew() : e === "pt" ? Tw() : e === "ch" ? Sw() : e === "de" ? Ow() : e === "es" ? Iw() : e === "fr" ? Aw() : e === "it" ? kw() : e === "jp" ? Rw() : e === "pl" ? Nw() : e === "ru" ? xw() : e === "uk" ? Dw() : Lw()
  },
  Mw = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Pw = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Uw = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Cw = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  jw = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  Fw = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  Bw = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  zw = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  Vw = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  Gw = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  Ww = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  qw = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  Kw = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Mw() : e === "pt" ? Pw() : e === "ch" ? Uw() : e === "de" ? Cw() : e === "es" ? jw() : e === "fr" ? Fw() : e === "it" ? Bw() : e === "jp" ? zw() : e === "pl" ? Vw() : e === "ru" ? Gw() : e === "uk" ? Ww() : qw()
  },
  Hw = () => "Failed to load WebAssembly module. Try to use another browser.",
  Yw = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  Zw = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  $w = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  Jw = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  Xw = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  Qw = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  ey = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  ty = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  ny = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  ry = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  iy = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  ay = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Hw() : e === "pt" ? Yw() : e === "ch" ? Zw() : e === "de" ? $w() : e === "es" ? Jw() : e === "fr" ? Xw() : e === "it" ? Qw() : e === "jp" ? ey() : e === "pl" ? ty() : e === "ru" ? ny() : e === "uk" ? ry() : iy()
  },
  oy = () => "You already have this item. Please refresh the page.",
  sy = () => "Você já possui este item. Atualize a página.",
  cy = () => "你已经拥有此物品。请刷新页面。",
  uy = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  ly = () => "Ya tienes este ítem. Actualiza la página.",
  dy = () => "Vous possédez déjà cet objet. Actualisez la page.",
  _y = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  fy = () => "このアイテムはすでに所持しています。ページを更新してください。",
  hy = () => "Masz już ten przedmiot. Odśwież stronę.",
  my = () => "У вас уже есть этот предмет. Обновите страницу.",
  py = () => "У вас уже є цей предмет. Оновіть сторінку.",
  gy = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Sn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? oy() : e === "pt" ? sy() : e === "ch" ? cy() : e === "de" ? uy() : e === "es" ? ly() : e === "fr" ? dy() : e === "it" ? _y() : e === "jp" ? fy() : e === "pl" ? hy() : e === "ru" ? my() : e === "uk" ? py() : gy()
  },
  wy = () => "You are already in an alliance",
  yy = () => "Você já está em uma aliança",
  vy = () => "你已经在一个联盟中",
  by = () => "Du bist bereits in einer Allianz",
  Ey = () => "Ya estás en una alianza",
  Ty = () => "Vous êtes déjà dans une alliance",
  Sy = () => "Sei già in un'alleanza",
  Oy = () => "すでにアライアンスに所属しています。",
  Iy = () => "Jesteś już w sojuszu",
  Ay = () => "Вы уже состоите в альянсе",
  ky = () => "Ви вже перебуваєте в альянсі",
  Ry = () => "Bạn đã ở trong một liên minh",
  Ny = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? wy() : e === "pt" ? yy() : e === "ch" ? vy() : e === "de" ? by() : e === "es" ? Ey() : e === "fr" ? Ty() : e === "it" ? Sy() : e === "jp" ? Oy() : e === "pl" ? Iy() : e === "ru" ? Ay() : e === "uk" ? ky() : Ry()
  },
  xy = () => "You are not allowed to do this",
  Dy = () => "Você não tem permissão para fazer isso",
  Ly = () => "你无权执行此操作",
  My = () => "Du bist dazu nicht berechtigt",
  Py = () => "No tienes permiso para hacer esto",
  Uy = () => "Vous n’êtes pas autorisé à faire cela",
  Cy = () => "Non hai il permesso di farlo",
  jy = () => "この操作を行う権限がありません。",
  Fy = () => "Nie masz uprawnień, aby to zrobić",
  By = () => "У вас нет прав для этого действия",
  zy = () => "Ви не маєте права це робити",
  Vy = () => "Bạn không có quyền làm việc này",
  ue = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? xy() : e === "pt" ? Dy() : e === "ch" ? Ly() : e === "de" ? My() : e === "es" ? Py() : e === "fr" ? Uy() : e === "it" ? Cy() : e === "jp" ? jy() : e === "pl" ? Fy() : e === "ru" ? By() : e === "uk" ? zy() : Vy()
  },
  Gy = () => "You do not have enough Droplets to buy this item.",
  Wy = () => "Você não tem gotas suficientes para comprar este item.",
  qy = () => "你的水滴不足，无法购买此物品。",
  Ky = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  Hy = () => "No tienes suficientes gotas para comprar este ítem.",
  Yy = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  Zy = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  $y = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  Jy = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  Xy = () => "У вас недостаточно droplets для покупки этого предмета.",
  Qy = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  ev = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  On = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Gy() : e === "pt" ? Wy() : e === "ch" ? qy() : e === "de" ? Ky() : e === "es" ? Hy() : e === "fr" ? Yy() : e === "it" ? Zy() : e === "jp" ? $y() : e === "pl" ? Jy() : e === "ru" ? Xy() : e === "uk" ? Qy() : ev()
  },
  tv = () => "You need to be logged in to paint",
  nv = () => "Você precisa estar conectado para pintar",
  rv = () => "你需要登录才能进行绘制",
  iv = () => "Du musst eingeloggt sein, um zu malen",
  av = () => "Debes iniciar sesión para pintar",
  ov = () => "Vous devez être connecté pour peindre",
  sv = () => "Devi avere effettuato l'accesso per dipingere",
  cv = () => "ペイントするにはログインが必要です。",
  uv = () => "Musisz być zalogowany, aby malować",
  lv = () => "Чтобы рисовать, нужно войти в аккаунт",
  dv = () => "Щоб малювати, необхідно увійти в акаунт",
  _v = () => "Bạn cần đăng nhập để tô",
  In = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? tv() : e === "pt" ? nv() : e === "ch" ? rv() : e === "de" ? iv() : e === "es" ? av() : e === "fr" ? ov() : e === "it" ? sv() : e === "jp" ? cv() : e === "pl" ? uv() : e === "ru" ? lv() : e === "uk" ? dv() : _v()
  },
  fv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  hv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  mv = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  pv = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  gv = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  wv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  yv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  vv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  bv = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Ev = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Tv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Sv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Ov = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? fv() : e === "pt" ? hv() : e === "ch" ? mv() : e === "de" ? pv() : e === "es" ? gv() : e === "fr" ? wv() : e === "it" ? yv() : e === "jp" ? vv() : e === "pl" ? bv() : e === "ru" ? Ev() : e === "uk" ? Tv() : Sv()
  },
  Iv = n => `Your account has been suspended out until ${n.until}`,
  Av = n => `A sua conta está suspensa até ${n.until}`,
  kv = n => `你的账号已被暂停至 ${n.until}`,
  Rv = n => `Dein Konto ist gesperrt bis ${n.until}`,
  Nv = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  xv = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  Dv = n => `Il tuo account è sospeso fino al ${n.until}`,
  Lv = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  Mv = n => `Twoje konto zostało zawieszone do ${n.until}`,
  Pv = n => `Ваш аккаунт заблокирован до ${n.until}`,
  Uv = n => `Ваш акаунт призупинено до ${n.until}`,
  Cv = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  An = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Iv(n) : e === "pt" ? Av(n) : e === "ch" ? kv(n) : e === "de" ? Rv(n) : e === "es" ? Nv(n) : e === "fr" ? xv(n) : e === "it" ? Dv(n) : e === "jp" ? Lv(n) : e === "pl" ? Mv(n) : e === "ru" ? Pv(n) : e === "uk" ? Uv(n) : Cv(n)
  };
let R;
const ie = new Array(128).fill(void 0);
ie.push(void 0, null, !0, !1);

function I(n) {
  return ie[n]
}
const ir = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && ir.decode();
let Se = null;

function Re() {
  return (Se === null || Se.byteLength === 0) && (Se = new Uint8Array(R.memory.buffer)), Se
}

function Oe(n, t) {
  return n = n >>> 0, ir.decode(Re().subarray(n, n + t))
}
let Ne = ie.length;

function x(n) {
  Ne === ie.length && ie.push(ie.length + 1);
  const t = Ne;
  return Ne = ie[t], ie[t] = n, t
}

function ne(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    R.__wbindgen_export_0(x(e))
  }
}

function le(n) {
  return n == null
}

function jv(n) {
  n < 132 || (ie[n] = Ne, Ne = n)
}

function kn(n) {
  const t = I(n);
  return jv(n), t
}
const Rn = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  R.__wbindgen_export_1.get(n.dtor)(n.a, n.b)
});

function Fv(n, t, e, r) {
  const i = {
      a: n,
      b: t,
      cnt: 1,
      dtor: e
    },
    a = (...o) => {
      i.cnt++;
      const s = i.a;
      i.a = 0;
      try {
        return r(s, i.b, ...o)
      } finally {
        --i.cnt === 0 ? (R.__wbindgen_export_1.get(i.dtor)(s, i.b), Rn.unregister(i)) : i.a = s
      }
    };
  return a.original = i, Rn.register(a, i, i), a
}
let de = null;

function mt() {
  return (de === null || de.buffer.detached === !0 || de.buffer.detached === void 0 && de.buffer !== R.memory.buffer) && (de = new DataView(R.memory.buffer)), de
}
let fe = 0;
const lt = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Bv = typeof lt.encodeInto == "function" ? function(n, t) {
    return lt.encodeInto(n, t)
  } : function(n, t) {
    const e = lt.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Vt(n, t, e) {
  if (e === void 0) {
    const s = lt.encode(n),
      l = t(s.length, 1) >>> 0;
    return Re().subarray(l, l + s.length).set(s), fe = s.length, l
  }
  let r = n.length,
    i = t(r, 1) >>> 0;
  const a = Re();
  let o = 0;
  for (; o < r; o++) {
    const s = n.charCodeAt(o);
    if (s > 127) break;
    a[i + o] = s
  }
  if (o !== r) {
    o !== 0 && (n = n.slice(o)), i = e(i, r, r = o + n.length * 3, 1) >>> 0;
    const s = Re().subarray(i + o, i + r),
      l = Bv(n, s);
    o += l.written, i = e(i, r, o, 1) >>> 0
  }
  return fe = o, i
}

function zv(n) {
  const t = Vt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = fe;
  R.set_fingerprint(t, e)
}

function Vv(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return Re().set(n, e / 1), fe = n.length, e
}

function Gv(n) {
  const t = Vv(n, R.__wbindgen_export_2),
    e = fe;
  R.set_telemetry(t, e)
}

function Gt(n) {
  R.set_user_id(n)
}

function Wv(n) {
  R.set_automated_browser(n)
}

function qv(n) {
  let t, e;
  try {
    const a = R.__wbindgen_add_to_stack_pointer(-16),
      o = Vt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
      s = fe;
    R.get_pawtected_endpoint_payload(a, o, s);
    var r = mt().getInt32(a + 0, !0),
      i = mt().getInt32(a + 4, !0);
    return t = r, e = i, Oe(r, i)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export_4(t, e, 1)
  }
}

function Kv(n) {
  const t = Vt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = fe;
  R.request_url(t, e)
}

function Hv(n) {
  R.set_automated_clicks(n)
}

function Yv() {
  R.init_listeners()
}

function Zv(n, t, e) {
  R.__wbindgen_export_5(n, t, x(e))
}
async function $v(n, t) {
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

function Jv() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_addEventListener_90e553fdce254421 = function() {
    return ne(function(t, e, r, i) {
      I(t).addEventListener(Oe(e, r), I(i))
    }, arguments)
  }, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    const e = I(t).buffer;
    return x(e)
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return ne(function(t, e) {
      const r = I(t).call(I(e));
      return x(r)
    }, arguments)
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return ne(function(t, e, r) {
      const i = I(t).call(I(e), I(r));
      return x(i)
    }, arguments)
  }, n.wbg.__wbg_clientX_5eb380a5f1fec6fd = function(t) {
    return I(t).clientX
  }, n.wbg.__wbg_clientY_d8b9c7f0c4e2e677 = function(t) {
    return I(t).clientY
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    const e = I(t).crypto;
    return x(e)
  }, n.wbg.__wbg_document_d249400bd7bd996d = function(t) {
    const e = I(t).document;
    return le(e) ? 0 : x(e)
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return ne(function(t, e) {
      I(t).getRandomValues(I(e))
    }, arguments)
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return ne(function(t, e) {
      const r = Reflect.get(I(t), I(e));
      return x(r)
    }, arguments)
  }, n.wbg.__wbg_hasFocus_21add8cd20546ed0 = function() {
    return ne(function(t) {
      return I(t).hasFocus()
    }, arguments)
  }, n.wbg.__wbg_innerWidth_7e0498dbd876d498 = function() {
    return ne(function(t) {
      const e = I(t).innerWidth;
      return x(e)
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
    return x(e)
  }, n.wbg.__wbg_navigator_1577371c070c8947 = function(t) {
    const e = I(t).navigator;
    return x(e)
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    const e = new Uint8Array(I(t));
    return x(e)
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    const r = new Function(Oe(t, e));
    return x(r)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, r) {
    const i = new Uint8Array(I(t), e >>> 0, r >>> 0);
    return x(i)
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return x(e)
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    const e = I(t).node;
    return x(e)
  }, n.wbg.__wbg_now_807e54c39636c349 = function() {
    return Date.now()
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    const e = I(t).process;
    return x(e)
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return ne(function(t, e) {
      I(t).randomFillSync(kn(e))
    }, arguments)
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return ne(function() {
      const t = module.require;
      return x(t)
    }, arguments)
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, r) {
    I(t).set(I(e), r >>> 0)
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return le(t) ? 0 : x(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return le(t) ? 0 : x(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return le(t) ? 0 : x(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return le(t) ? 0 : x(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const i = I(t).subarray(e >>> 0, r >>> 0);
    return x(i)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = I(t).versions;
    return x(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = I(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_closure_wrapper58 = function(t, e, r) {
    const i = Fv(t, e, 3, Zv);
    return x(i)
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
    const t = R.memory;
    return x(t)
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = I(e),
      i = typeof r == "number" ? r : void 0;
    mt().setFloat64(t + 8, le(i) ? 0 : i, !0), mt().setInt32(t + 0, !le(i), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = I(t);
    return x(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    kn(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = Oe(t, e);
    return x(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Oe(t, e))
  }, n
}

function Xv(n, t) {
  return R = n.exports, ar.__wbindgen_wasm_module = t, de = null, Se = null, R
}
async function ar(n) {
  if (R !== void 0) return R;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = Jv();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await $v(await n, t);
  return Xv(e, r)
}
const Qv = `
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
async function eb() {
  try {
    const n = await fetch(`${Ct}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await tb(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function tb(n, t) {
  return new Promise(e => {
    const r = new Blob([Qv], {
        type: "application/javascript"
      }),
      i = URL.createObjectURL(r),
      a = new Worker(i),
      o = setTimeout(() => {
        a.terminate(), URL.revokeObjectURL(i), e(null)
      }, 12e4);
    a.onmessage = s => {
      clearTimeout(o), a.terminate(), URL.revokeObjectURL(i), s.data.error ? e(null) : e(s.data.nonce)
    }, a.onerror = () => {
      clearTimeout(o), a.terminate(), URL.revokeObjectURL(i), e(null)
    }, a.postMessage({
      prefix: n,
      difficulty: t
    })
  })
}
const Wt = 3;
var Ve, Ge;
class nb {
  constructor() {
    D(this, Ve, B(null));
    D(this, Ge, B(0))
  }
  get current() {
    return M(b(this, Ve))
  }
  set current(t) {
    P(b(this, Ve), t, !0)
  }
  get errorCount() {
    return M(b(this, Ge))
  }
  set errorCount(t) {
    P(b(this, Ge), t, !0)
  }
}
Ve = new WeakMap, Ge = new WeakMap;
const z = new nb;
async function Nn(n) {
  return n === 1 ? rb() : n === 2 || n === 3 ? ab(n) : n === 4 ? ib() : !1
}
async function rb() {
  for (let n = 0; n < Wt; n++) try {
    const t = await eb();
    if (!t) continue;
    return await be.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}

function ib() {
  return new Promise(n => {
    z.errorCount = 0, z.current = {
      tier: 4,
      resolve: n
    }
  })
}

function ab(n) {
  return new Promise(t => {
    z.errorCount = 0, z.current = {
      tier: n,
      resolve: t
    }
  })
}

function r0(n) {
  const t = z.current;
  if (!t) return;
  const e = t.tier === 2 ? "turnstile" : "hcaptcha";
  return be.postCaptchaSession({
    provider: e,
    token: n
  }).then(r => be.verifyChallenge({
    type: "captcha",
    sessionId: r.sessionId
  })).then(() => {
    t.resolve(!0), z.current = null
  }).catch(() => {
    z.errorCount += 1, z.errorCount >= Wt && (t.resolve(!1), z.current = null)
  })
}

function i0() {
  const n = z.current;
  n && (z.errorCount += 1, z.errorCount >= Wt && (n.resolve(!1), z.current = null))
}

function a0() {
  const n = z.current;
  !n || n.tier !== 4 || (n.resolve(!0), z.current = null)
}

function o0() {
  z.current && (z.current.resolve(!1), z.current = null)
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const s0 = {
    griefing: Id(),
    "multi-accounting": gm(),
    "hate-speech": Xd(),
    bot: Os(),
    doxxing: Nu(),
    "inappropriate-content": S_(),
    other: Js()
  },
  c0 = {
    doxxing: Gu(),
    "hate-speech": d_(),
    griefing: Fd(),
    "multi-accounting": Nm(),
    bot: js(),
    "inappropriate-content": C_(),
    other: lc()
  },
  u0 = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  xn = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  l0 = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  ob = 365 * 24 * 60 * 60 * 1e3;

function or(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function d0(n, t = Date.now()) {
  const e = or(n);
  return e === null ? !1 : e - t >= ob
}

function _0(n, t = Date.now()) {
  const e = or(n);
  if (e === null || e <= t) return {
    days: 0,
    hours: 0,
    minutes: 0
  };
  const r = Math.max(0, Math.ceil((e - t) / 6e4)),
    i = Math.floor(r / 1440),
    a = Math.floor(r % 1440 / 60),
    o = r % 60;
  return {
    days: i,
    hours: a,
    minutes: o
  }
}
const sb = 60,
  cb = 100,
  ub = 50,
  lb = 2e3;
class sr {
  constructor(t) {
    F(this, "items", []);
    F(this, "writeIdx", 0);
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

function db() {
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
const cr = new sr(cb),
  ur = new sr(ub);
let U = db(),
  pt = null,
  Dn = !1,
  k = null,
  lr = 0;

function f0() {
  Dn || typeof window > "u" || (Dn = !0, U.focusStartMs = performance.now(), U.windowStartMs = Date.now(), document.readyState === "complete" ? k = Mn() : window.addEventListener("load", () => {
    k = Mn()
  }, {
    once: !0
  }), window.addEventListener("pointermove", n => {
    const t = performance.now();
    t - U.lastMouseSampleMs < sb || (U.lastMouseSampleMs = t, cr.push({
      x: n.clientX,
      y: n.clientY,
      t
    }))
  }, {
    passive: !0
  }), window.addEventListener("pointerdown", n => {
    ur.push(performance.now()), U.lastClickX = n.clientX, U.lastClickY = n.clientY
  }, {
    passive: !0
  }), window.addEventListener("blur", () => {
    U.totalFocusMs += performance.now() - U.focusStartMs, U.idleStartMs = performance.now()
  }, {
    passive: !0
  }), window.addEventListener("focus", () => {
    U.idleStartMs > 0 && (U.totalIdleMs += performance.now() - U.idleStartMs, U.idleStartMs = 0), U.focusStartMs = performance.now()
  }, {
    passive: !0
  }), bb())
}

function _b() {
  pt = fb();
  try {
    const n = pt,
      t = new Uint8Array(40),
      e = new DataView(t.buffer);
    e.setUint8(0, 1);
    let r = 0;
    n.isLinearMovement && (r |= 1), n.isConstantInterval && (r |= 2), n.hasZeroJitter && (r |= 4), k != null && k.hts && (r |= 8), navigator.webdriver && (r |= 16), jt.automatedClicks && (r |= 32), k != null && k.cdp && (r |= 64), k != null && k.odz && (r |= 128), e.setUint8(1, r), e.setUint8(2, Math.min(255, n.clickCount)), e.setUint16(3, Math.min(65535, Math.round(n.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, n.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(n.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, n.movementSegments)), e.setUint8(8, Math.min(255, Math.round(n.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, U.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, U.lastClickY))), e.setUint8(13, Math.min(255, k ? k.lc : 0)), e.setUint8(14, Math.min(255, k ? k.pc : 0)), e.setUint8(15, Math.min(255, k ? k.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(n.idleMs))), e.setUint16(18, Math.min(65535, Math.round(n.focusMs))), e.setUint16(20, Math.min(65535, Math.round(n.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(n.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(n.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(n.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(n.preClickPauseAvg))), e.setUint16(30, Math.min(65535, k ? k.sw : 0)), e.setUint16(32, Math.min(65535, k ? k.sh : 0)), e.setUint8(34, k ? k.fb & 255 : 0), e.setUint8(35, Math.min(255, k ? k.ptc : 0)), e.setUint8(36, k ? k.adf & 255 : 0);
    let i = 0;
    return k != null && k.cdr && (i |= 1), e.setUint8(37, i), e.setUint16(38, Math.min(65535, Math.round(lr * 100))), btoa(String.fromCharCode(...t))
  } catch {
    return ""
  }
}

function fb() {
  const n = Date.now(),
    t = U.windowStartMs,
    e = performance.now(),
    r = cr.drain(),
    i = ur.drain(),
    a = yb(U, e);
  U.totalIdleMs = 0, U.totalFocusMs = 0, U.focusStartMs = e, U.windowStartMs = n;
  const o = mb(r),
    s = pb(i),
    l = wb(i, r),
    u = o.straightnessAvg > .95 && r.length > 10,
    _ = o.jitterAvg < .01 && r.length > 10,
    d = s.stddev / Math.max(1, s.avg) < .05 && i.length >= 5;
  return pt = {
    windowStart: t,
    windowEnd: n,
    mouseSpeedAvg: se(o.speedAvg),
    mouseSpeedStddev: se(o.speedStddev),
    mouseAccelAvg: se(o.accelAvg),
    mouseAccelStddev: se(o.accelStddev),
    microMovementCount: o.microMovementCount,
    movementSegments: o.movementSegments,
    avgSegmentCurvature: se(o.avgSegmentCurvature),
    velocityProfileSkew: se(o.velocityProfileSkew),
    angularVelocityStddev: se(o.angularVelocityStddev),
    clickCount: i.length,
    preClickPauseAvg: se(l),
    idleMs: a.idleMs,
    focusMs: a.focusMs,
    isLinearMovement: u,
    isConstantInterval: d,
    hasZeroJitter: _
  }, pt
}
const hb = {
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

function mb(n) {
  if (n.length < 3) return hb;
  const t = [],
    e = [],
    r = [];
  let i = 0,
    a = 0,
    o = 0;
  const s = [];
  for (let y = 1; y < n.length; y++) {
    const S = n[y].x - n[y - 1].x,
      v = n[y].y - n[y - 1].y,
      $ = Math.max(1, n[y].t - n[y - 1].t),
      G = Math.sqrt(S * S + v * v),
      V = G / $;
    if (t.push(V), G < 3 && G > 0 && i++, $ > lb) {
      if (y - a > 2) {
        o++;
        const te = Ln(n.slice(a, y));
        te >= 0 && s.push(te)
      }
      a = y
    }
    if (y >= 2) {
      const te = n[y - 1].x - n[y - 2].x,
        me = n[y - 1].y - n[y - 2].y,
        yt = S * te + v * me,
        qt = Math.sqrt(S * S + v * v),
        Kt = Math.sqrt(te * te + me * me);
      qt > 0 && Kt > 0 && e.push(1 - Math.abs(yt / (qt * Kt)));
      const gr = t[t.length - 2] || 0;
      r.push(Math.abs(V - gr))
    }
  }
  if (n.length - a > 2) {
    o++;
    const y = Ln(n.slice(a));
    y >= 0 && s.push(y)
  }
  const l = t.reduce((y, S) => y + S, 0) / t.length,
    u = e.length > 0 ? e.reduce((y, S) => y + S, 0) / e.length : 0,
    _ = t.reduce((y, S) => y + Math.pow(S - l, 2), 0) / t.length,
    d = Math.sqrt(_);
  let m = 0,
    g = 0;
  if (r.length > 0) {
    m = r.reduce((S, v) => S + v, 0) / r.length;
    const y = r.reduce((S, v) => S + Math.pow(v - m, 2), 0) / r.length;
    g = Math.sqrt(y)
  }
  const E = n[0],
    w = n[n.length - 1],
    T = Math.sqrt(Math.pow(w.x - E.x, 2) + Math.pow(w.y - E.y, 2));
  let O = 0;
  for (let y = 1; y < n.length; y++) {
    const S = n[y].x - n[y - 1].x,
      v = n[y].y - n[y - 1].y;
    O += Math.sqrt(S * S + v * v)
  }
  const N = O > 0 ? T / O : 0,
    C = s.length > 0 ? s.reduce((y, S) => y + S, 0) / s.length : 0;
  let j = 0;
  t.length >= 5 && d > .001 && (j = t.reduce((S, v) => S + Math.pow(v - l, 3), 0) / t.length / Math.pow(d, 3));
  let H = 0;
  if (n.length >= 4) {
    const y = [];
    for (let S = 1; S < n.length; S++) {
      const v = n[S].x - n[S - 1].x,
        $ = n[S].y - n[S - 1].y;
      Math.sqrt(v * v + $ * $) > .5 && y.push(Math.atan2($, v))
    }
    if (y.length >= 3) {
      const S = [];
      for (let G = 1; G < y.length; G++) {
        let V = y[G] - y[G - 1];
        for (; V > Math.PI;) V -= 2 * Math.PI;
        for (; V < -Math.PI;) V += 2 * Math.PI;
        S.push(V)
      }
      const v = S.reduce((G, V) => G + V, 0) / S.length,
        $ = S.reduce((G, V) => G + Math.pow(V - v, 2), 0) / S.length;
      H = Math.sqrt($)
    }
  }
  return {
    speedAvg: l,
    speedStddev: d,
    jitterAvg: u,
    straightnessAvg: N,
    accelAvg: m,
    accelStddev: g,
    microMovementCount: i,
    movementSegments: o,
    avgSegmentCurvature: C,
    velocityProfileSkew: j,
    angularVelocityStddev: H,
    speeds: t
  }
}

function pb(n) {
  if (n.length < 2) return {
    avg: 0,
    stddev: 0
  };
  const t = [];
  for (let i = 1; i < n.length; i++) t.push(n[i] - n[i - 1]);
  const e = t.reduce((i, a) => i + a, 0) / t.length,
    r = t.reduce((i, a) => i + Math.pow(a - e, 2), 0) / t.length;
  return {
    avg: e,
    stddev: Math.sqrt(r)
  }
}

function gb(n, t) {
  let e = 0,
    r = n.length - 1,
    i = -1;
  for (; e <= r;) {
    const a = e + r >>> 1;
    n[a].t <= t ? (i = a, e = a + 1) : r = a - 1
  }
  return i
}

function wb(n, t) {
  if (n.length === 0 || t.length < 2) return 0;
  let e = 0,
    r = 0;
  for (const i of n) {
    const a = gb(t, i);
    a >= 0 && (e += i - t[a].t, r++)
  }
  return r > 0 ? e / r : 0
}

function yb(n, t) {
  const e = Math.round(n.totalIdleMs + (n.idleStartMs > 0 ? t - n.idleStartMs : 0)),
    r = Math.round(n.totalFocusMs + (n.idleStartMs === 0 ? t - n.focusStartMs : 0));
  return {
    idleMs: e,
    focusMs: r
  }
}

function Ln(n) {
  if (n.length < 3) return -1;
  const t = n[0],
    e = n[n.length - 1];
  if (Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) < 5) return -1;
  let i = 0,
    a = 0;
  for (let o = 1; o < n.length; o++) {
    const s = n[o].x - n[o - 1].x,
      l = n[o].y - n[o - 1].y;
    if (i += Math.sqrt(s * s + l * l), o >= 2) {
      const u = n[o - 1].x - n[o - 2].x,
        _ = n[o - 1].y - n[o - 2].y,
        d = u * l - _ * s,
        m = u * s + _ * l;
      a += Math.abs(Math.atan2(d, m))
    }
  }
  return i > 0 ? a / i : 0
}

function vb() {
  var r;
  let n = 0;
  const t = navigator,
    e = ["hardwareConcurrency", "deviceMemory", "platform", "vendor", "maxTouchPoints", "languages", "plugins", "userAgent"];
  try {
    for (const i of e)
      if (Object.getOwnPropertyDescriptor(navigator, i) !== void 0) {
        n |= 1;
        break
      }
  } catch {}
  try {
    const i = document.createElement("iframe");
    i.style.display = "none", document.body.appendChild(i);
    const a = i.contentWindow;
    if (a) {
      const o = a.Function.prototype.toString,
        s = ["hardwareConcurrency", "platform", "languages"];
      for (const l of s) {
        const u = Object.getOwnPropertyDescriptor(Navigator.prototype, l);
        if (u && typeof u.get == "function") {
          const _ = Function.prototype.toString.call(u.get),
            d = o.call(u.get);
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
    i.remove()
  } catch {}
  try {
    const i = navigator.userAgent,
      a = navigator.platform;
    if (i && a) {
      const o = /Windows/.test(i),
        s = /Macintosh|Mac OS X/.test(i),
        l = /Linux/.test(i) && !/Android/.test(i),
        u = /Android/.test(i),
        _ = /iPhone|iPad|iPod/.test(i),
        d = /^Win/.test(a),
        m = /^Mac/.test(a),
        g = /^Linux/.test(a),
        E = /^(iPhone|iPad|iPod)/.test(a);
      if ((o && !d || s && !m || l && !g || u && !g || _ && !E) && (n |= 4), t.userAgentData && t.userAgentData.platform) {
        const w = t.userAgentData.platform;
        (o && w !== "Windows" || s && w !== "macOS" || l && w !== "Linux" || u && w !== "Android") && (n |= 4)
      }
    }
  } catch {}
  try {
    const a = document.createElement("canvas").getContext("webgl");
    if (a) {
      const o = a.getExtension("WEBGL_debug_renderer_info");
      if (o) {
        const s = (a.getParameter(o.UNMASKED_RENDERER_WEBGL) || "").toLowerCase(),
          l = (a.getParameter(o.UNMASKED_VENDOR_WEBGL) || "").toLowerCase(),
          u = navigator.userAgent,
          _ = /Windows/.test(u),
          d = /Macintosh|Mac OS X/.test(u);
        (s.includes("apple") || l.includes("apple")) && _ && (n |= 8), s.includes("angle") && d && !s.includes("metal") && (n |= 8), (s.includes("d3d11") || s.includes("direct3d")) && d && (n |= 8)
      }(r = a.getExtension("WEBGL_lose_context")) == null || r.loseContext()
    }
  } catch {}
  try {
    (screen.availWidth > screen.width || screen.availHeight > screen.height) && (n |= 16), screen.pixelDepth !== screen.colorDepth && (n |= 16)
  } catch {}
  try {
    const i = navigator.userAgent;
    if (/Chrome\//.test(i) && !/Edg\//.test(i)) {
      const a = window.chrome;
      a && typeof a.csi != "function" && (n |= 64)
    }
  } catch {}
  try {
    const i = ["hardwareConcurrency", "platform", "maxTouchPoints", "deviceMemory"];
    for (const a of i) {
      const o = Object.getOwnPropertyDescriptor(navigator, a);
      if (o && "value" in o) {
        n |= 128;
        break
      }
    }
  } catch {}
  return n
}

function Mn() {
  const n = navigator,
    t = n.plugins ? n.plugins.length : 0,
    e = "ontouchstart" in window || n.maxTouchPoints > 0,
    r = n.maxTouchPoints || 0;
  let i = 0;
  typeof SharedArrayBuffer < "u" && (i |= 1), typeof Intl.Segmenter < "u" && (i |= 2), typeof CSS.highlights < "u" && (i |= 4), n.userAgentData && (i |= 8), window.chrome && (i |= 16), typeof window.InstallTrigger < "u" && (i |= 32), typeof window.WebKitMutationObserver < "u" && (i |= 64), typeof window.MSStream < "u" && (i |= 128);
  let a = 0;
  const o = ["webdriver", "languages", "plugins", "hardwareConcurrency", "platform", "userAgent", "vendor", "maxTouchPoints", "deviceMemory", "cookieEnabled", "pdfViewerEnabled", "connection"],
    s = ["width", "height", "colorDepth", "pixelDepth", "availWidth", "availHeight"],
    l = Function.prototype.toString;
  for (const w of o) try {
    const T = Object.getOwnPropertyDescriptor(Navigator.prototype, w);
    T && typeof T.get == "function" && l.call(T.get).includes("native code") === !1 && a++
  } catch {}
  for (const w of s) try {
    const T = Object.getOwnPropertyDescriptor(Screen.prototype, w);
    T && typeof T.get == "function" && l.call(T.get).includes("native code") === !1 && a++
  } catch {}
  let u = "",
    _ = !0;
  try {
    const w = document.createElement("canvas");
    w.width = 64, w.height = 16;
    const T = w.getContext("2d");
    if (T) {
      T.textBaseline = "top", T.font = "14px Arial", T.fillText("wplace🐾", 2, 2);
      const O = w.toDataURL();
      let N = 0;
      for (let j = 0; j < O.length; j++) N = (N << 5) - N + O.charCodeAt(j) | 0;
      u = (N >>> 0).toString(16).padStart(8, "0"), T.clearRect(0, 0, 64, 16), T.fillText("wplace🐾", 2, 2);
      const C = w.toDataURL();
      _ = O === C
    }
  } catch {}
  let d = !1;
  try {
    const w = new Error;
    Object.defineProperty(w, "stack", {
      get() {
        return d = !0, ""
      }
    }), console.debug(w)
  } catch {}
  const m = n.languages ? n.languages.length : 0,
    g = window.outerWidth === 0 || window.outerHeight === 0,
    E = vb();
  return {
    pc: t,
    sw: screen.width,
    sh: screen.height,
    hts: e,
    mtp: r,
    fb: i,
    ptc: a,
    ch: u,
    cdp: d,
    lc: m,
    odz: g,
    cdr: _,
    adf: E
  }
}

function bb() {
  const n = [];

  function e(r) {
    if (n.push(r), n.length < 30) requestAnimationFrame(e);
    else {
      const i = [];
      for (let o = 1; o < n.length; o++) {
        const s = n[o] - n[o - 1];
        s < 100 && i.push(s)
      }
      if (i.length < 5) return;
      i.sort((o, s) => o - s);
      const a = i[Math.floor(i.length / 2)];
      lr = i.reduce((o, s) => o + Math.abs(s - a), 0) / i.length
    }
  }
  requestAnimationFrame(e)
}

function se(n) {
  return Math.round(n * 1e3) / 1e3
}
const Eb = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Tb = 4,
  Sb = 6e3,
  Ob = [{
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
  Ib = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Ab = {
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
  kb = {
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
  Rb = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  Nb = {
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
        reverse: "staff.tools.select_area.reverse"
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
  xb = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  he = {
    seasons: Eb,
    regionSize: Tb,
    refreshIntervalMs: Sb,
    colors: Ob,
    errors: Ib,
    items: Ab,
    products: kb,
    countries: Rb,
    permissions: Nb,
    settings: xb
  },
  xt = he,
  Db = he.seasons,
  dr = he.seasons.length - 1,
  h0 = he.seasons[dr].zoom,
  m0 = he.seasons[dr].tileSize,
  p0 = he.permissions,
  Lb = he.settings;

function g0(n) {
  return xt.countries[n - 1]
}
class h extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Pn(n, t) {
  const e = {};
  for (const r of n) {
    const i = t(r);
    let a = e[i];
    a ? a.push(r) : e[i] = [r]
  }
  return e
}

function w0(n, t) {
  const e = {};
  for (const r of n) {
    const i = t(r);
    e[i] = r
  }
  return e
}
var We, qe;
class Mb {
  constructor(t) {
    D(this, We, B(!0));
    D(this, qe, B(null));
    this.url = t
  }
  get online() {
    return M(b(this, We))
  }
  set online(t) {
    P(b(this, We), t, !0)
  }
  get serverTimeOffsetMs() {
    return M(b(this, qe))
  }
  set serverTimeOffsetMs(t) {
    P(b(this, qe), t, !0)
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
    const e = Pn(t, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
      r = {
        season: t[0].season,
        tiles: Object.values(e).map(s => ({
          x: s[0].tile[0],
          y: s[0].tile[1],
          pixels: {
            x: s.map(l => l.pixel[0]),
            y: s.map(l => l.pixel[1]),
            colors: s.map(l => l.colorIdx)
          }
        }))
      },
      i = JSON.stringify(r),
      a = await Ot(i),
      o = await this.request("/paint", {
        method: "POST",
        body: i,
        headers: a,
        credentials: "include"
      });
    if (o.status !== c.OK) {
      if (o.status === c.UNAUTHORIZED) throw new Error(In());
      if (o.status === c.FORBIDDEN) {
        if (o.headers.get("cf-mitigated") === "challenge") throw new Error(yn());
        const s = await o.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const l = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(An({
            until: l.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(En());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(bn());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(pn());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await Nn(s.tier)) return this.paint(t);
            throw new Error(gn())
          } else console.error("Challenge required but no tier provided", s);
        De.refresh()
      } else throw new Error(f())
    }
  }
  async selectAreaClear(t, e) {
    return this.sendPaintRequests(t, (r, i, a) => `/staff/tools/select-area/clear/s${r}/pixel/${i}/${a}`, e)
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
      beforeDepth: i,
      beforeTimestamp: a
    } = e, o = await this.request("/staff/tools/select-area/reverse/timestamps", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        beforeDepth: i,
        beforeTimestamp: a
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
      snapshotDepth: i,
      timestamp: a
    } = e, o = await this.request("/staff/tools/select-area/reverse/preview", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: i,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new h(f(), o.status);
    return o.json()
  }
  async applyReverse(t, e) {
    const {
      mode: r = "depth",
      snapshotDepth: i,
      timestamp: a
    } = e, o = await this.request("/staff/tools/select-area/reverse/apply", {
      method: "POST",
      body: JSON.stringify({
        sessionId: t,
        mode: r,
        snapshotDepth: i,
        timestamp: a
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (o.status !== c.OK) throw new h(f(), o.status);
    return o.json()
  }
  async sendPaintRequests(t, e, r, i) {
    const a = Pn(t, l => `t=(${l.tile[0]},${l.tile[1]}),s=${l.season}`),
      s = (await Promise.all(Object.values(a).map(async l => {
        const [u, _] = l[0].tile, d = l[0].season, m = {
          colors: l.map(T => T.colorIdx),
          coords: l.flatMap(T => T.pixel),
          csid: r
        }, g = JSON.stringify(m), E = e(d, u, _), w = await Ot(g);
        return this.request(E, {
          method: "POST",
          body: g,
          headers: w,
          credentials: "include"
        })
      }))).filter(l => l.status !== c.OK);
    if (s.length) {
      const l = s[0];
      if (l.status === c.UNAUTHORIZED) throw new Error(In());
      if (l.status === c.FORBIDDEN) {
        if (l.headers.get("cf-mitigated") === "challenge") throw new Error(yn());
        const u = await l.json();
        if ((u == null ? void 0 : u.error) === "timeout") {
          const _ = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
          throw new Error(An({
            until: _.toLocaleString()
          }))
        }
        if ((u == null ? void 0 : u.error) === "refresh") throw new Error(En());
        if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(bn());
        if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(pn());
        De.refresh()
      } else throw new Error(f())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const i = Pb(t),
      a = await Ub(i),
      o = new FormData;
    o.append("fingerprint", e), o.append("season", i.season.toString()), o.append("px0", i.offsetX.toString()), o.append("py0", i.offsetY.toString()), o.append("width", i.width.toString()), o.append("height", i.height.toString()), o.append("pixels", t.length.toString()), o.append("bitmap", a, "auto-painter.png"), o.append("userId", r.toString());
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
    pixel: [i, a]
  }) {
    const o = new URLSearchParams;
    o.set("x", String(i)), o.set("y", String(a));
    const s = await this.request(`/s${t}/pixel/${e}/${r}?${o.toString()}`, {
      credentials: "include"
    });
    if (s.status !== c.OK) {
      const l = await s.text();
      throw new Error(zl({
        err: l
      }))
    }
    return s.json()
  }
  async getPixelAreaInfo({
    season: t,
    tile: [e, r],
    p0: [i, a],
    p1: [o, s]
  }) {
    const l = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${i}&y0=${a}&x1=${o}&y1=${s}`, {
      credentials: "include"
    });
    if (l.status !== c.OK) {
      const E = await l.text();
      throw console.error("Error while fetching pixel area info", E), new Error(f())
    }
    const u = await l.arrayBuffer(),
      _ = new DataView(u),
      d = Math.floor(u.byteLength / 5),
      m = new Uint32Array(d),
      g = new Uint8Array(d);
    for (let E = 0; E < d; E++) {
      const w = E * 5;
      m[E] = _.getUint32(w, !0), g[E] = _.getUint8(w + 4)
    }
    return {
      paintedBy: m,
      colors: g
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
    if (e.status === c.BAD_REQUEST) throw new Error(sh());
    if (e.status === c.CONFLICT) throw new Error(Qp());
    if (e.status === c.FORBIDDEN) throw new Error(mp());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(Tn());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(_g());
    if (e.status === c.LOCKED) throw new Error(Kw());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(vh());
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
        "x-fp": await ht()
      }
    });
    if (t.type === "otp") {
      if (r.status === c.GONE) throw new Error(fd());
      if (r.status === c.BAD_REQUEST) throw new Error(Tf());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Tn());
      if (r.status !== c.OK) throw new Error(f())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(lf());
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
        i = (r == null ? void 0 : r.error) ?? "";
      if (i === "invalid_name") throw new Error(vn());
      if (i === "invalid_discord") throw new Error(Uf());
      if (typeof i == "string" && i.startsWith("name_change_cooldown:")) {
        const a = parseInt(i.split(":")[1] ?? "0", 10);
        throw new Error(Gm({
          days: a
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
    if (e.status === c.BAD_REQUEST) throw new Error(bw());
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
    if (e.status === c.FORBIDDEN) throw new Error(kp());
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
    if (r.status === c.BAD_REQUEST) throw new Error(im());
    if (r.status !== c.OK) throw new Error(f())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== c.OK) throw new Error(ce());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== c.OK) throw new Error(ce());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(ce())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(ce())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(ce())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(ce())
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(wn()) : e.status === c.FORBIDDEN ? new Error(On()) : e.status === c.CONFLICT ? new Error(Sn()) : new Error(f())
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
      throw r.error === "max_characters" ? new Error(Qo()) : r.error === "name_taken" ? new Error(Bo()) : r.error == "empty_name" ? new Error(_s()) : new Error(f())
    } else throw e.status === c.FORBIDDEN ? new Error(Ny()) : new Error(f())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ue()) : e.status === c.BAD_REQUEST ? new Error(ed()) : new Error(f())
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
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(ue()) : new Error(f())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(ue()) : new Error(ce())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    throw t.status === c.FORBIDDEN ? new Error(ue()) : new Error(f())
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
    const i = await r.json();
    return (Array.isArray(i) ? i : []).map(a => ({
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
    if (e.status !== c.OK) throw new h(f(), e.status);
    const r = await e.json(),
      i = Array.isArray(r == null ? void 0 : r.members) ? r.members : [];
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
      membersCount: Number((r == null ? void 0 : r.membersCount) ?? i.length),
      members: i.map(a => ({
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
      i = await this.request(`/staff/dashboard/alliances/${t}/members?${r.toString()}`, {
        method: "GET",
        credentials: "include"
      });
    if (i.status === c.NOT_FOUND) return {
      members: [],
      total: 0
    };
    if (i.status !== c.OK) throw new h(f(), i.status);
    const a = await i.json(),
      o = Array.isArray(a == null ? void 0 : a.members) ? a.members : [];
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
    if (r.status === c.BAD_REQUEST) {
      const i = await r.json().catch(() => ({}));
      throw new Error((i == null ? void 0 : i.error) ?? f())
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
      const i = await r.json();
      throw (i == null ? void 0 : i.error) === "user_not_in_alliance" ? new Error(Lh()) : new Error(f())
    } else if (r.status !== c.OK) throw new h(f(), r.status)
  }
  async banAllAllianceMembers(t, e, r) {
    const i = await this.request(`/staff/dashboard/alliances/${t}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: e,
        notes: r
      })
    });
    if (i.status !== c.OK) throw new h(f(), i.status)
  }
  async setAllianceMemberRole(t, e, r) {
    const i = await this.request(`/staff/dashboard/alliances/${t}/members/${e}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: r
      })
    });
    if (i.status !== c.OK) throw new h(f(), i.status)
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ue()) : new Error(f())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ue()) : new Error(f())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(ue()) : new Error(f())
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
      const i = await e.json();
      throw new Error(i == null ? void 0 : i.error)
    } else {
      if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Ao());
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
    for (const r of e.tickets) r.reports.sort((i, a) => xn[i.reason] - xn[a.reason]);
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
  async setTicketStatus(t, e, r, i) {
    const a = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: t,
        status: e,
        selectedReportId: r,
        assignedReason: i
      })
    });
    if (a.status !== c.OK && a.status !== c.BAD_REQUEST) throw new h(f(), a.status)
  }
  async request(t, e) {
    let r;
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (a) {
      throw console.error("Fetch error:", a), this.online = !1, new Error(Pc(), {
        cause: a
      })
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Ov());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(Cg());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error($g())
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
    const i = await r.json();
    return {
      items: i.items ?? [],
      globals: i.globals
    }
  }
  async getClosedTicketsByMod(t, e) {
    const r = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(t)}&end=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
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
    if (r.status !== c.OK) throw new h(f(), r.status);
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
      i = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t
        })
      });
    if (i.status !== c.OK) throw new h(f(), i.status)
  }
  async getUserNotes(t, e) {
    const r = e == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      i = await this.request(r, {
        method: "GET",
        credentials: "include"
      });
    if (i.status !== c.OK) throw new h(f(), i.status);
    return i.json()
  }
  async addUserNote(t, e, r) {
    const i = r == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(t)}` : `/staff/appeals/notes?userId=${encodeURIComponent(t)}`,
      a = await this.request(i, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          userId: t,
          note: e
        })
      });
    if (a.status !== c.OK) throw new h(f(), a.status)
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
    const i = await r.json();
    return Array.isArray(i == null ? void 0 : i.permissions) ? i.permissions : []
  }
  async getUserPurchases(t) {
    const e = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== c.OK) throw new h(f(), e.status);
    const r = await e.json();
    return (Array.isArray(r == null ? void 0 : r.purchases) ? r.purchases : []).map(a => {
      const o = a.is_dollar ?? a.isDollar ?? a.currency ?? a.Currency ?? 0;
      let s;
      if (typeof o == "string") {
        const d = o.toLowerCase();
        s = d === "usd" || d === "dollar" || d === "true"
      } else typeof o == "number" ? s = o !== 0 : s = !!o;
      const l = typeof a.createdAt == "string" ? a.createdAt : a.CreatedAt ? new Date(a.CreatedAt).toISOString() : "",
        u = a.product_variant ?? a.productVariant,
        _ = u == null || u === "" ? null : Number(u);
      return {
        product_name: String(a.productName ?? a.product_name ?? ""),
        amount: Number(a.amount ?? 0),
        price: Number(a.price ?? 0),
        is_dollar: s,
        created_at: l,
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
    const i = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: t,
        newName: e,
        oldName: r
      })
    });
    if (i.status === c.BAD_REQUEST) {
      const a = await i.json(),
        o = (a == null ? void 0 : a.error) ?? "";
      throw o === "invalid_name" ? new h(vn(), c.BAD_REQUEST) : new h(typeof o == "string" && o ? o : f(), c.BAD_REQUEST)
    }
    if (i.status !== c.OK) throw new h(f(), i.status)
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
      const i = await r.json(),
        a = (i == null ? void 0 : i.error) ?? "";
      throw a === "email_required" || a === "invalid_email" ? new h(kl(), c.BAD_REQUEST) : new h(typeof a == "string" && a ? a : f(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const i = await r.json();
      if (((i == null ? void 0 : i.error) ?? "") === "email_already_in_use") {
        const o = new h(typeof(i == null ? void 0 : i.userId) == "number" ? ml({
          userId: i.userId
        }) : nl(), c.CONFLICT);
        throw typeof(i == null ? void 0 : i.userId) == "number" && (o.userId = i.userId), o
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
    const i = e === "appeals" ? `/staff/appeals/tickets?${r.toString()}` : `/staff/dashboard/users/tickets?${r.toString()}`,
      a = await this.request(i, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== c.OK) throw new h(f(), a.status);
    const o = await a.json(),
      s = Array.isArray(o == null ? void 0 : o.tickets) ? o.tickets : [];
    return s.sort((l, u) => new Date(u.createdAt).getTime() - new Date(l.createdAt).getTime()), s
  }
  async getUserAppeals(t) {
    const e = new URLSearchParams;
    e.set("userId", String(t.userId)), e.set("kind", t.kind), t.page !== void 0 && e.set("page", String(t.page)), t.pageSize !== void 0 && e.set("pageSize", String(t.pageSize));
    const r = await this.request(`/staff/dashboard/users/appeals?${e.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (r.status !== c.OK) throw new h(f(), r.status);
    const i = await r.json();
    return Array.isArray(i == null ? void 0 : i.appeals) ? i.appeals : []
  }
  async getModerationTranslate(t, e) {
    const r = e == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate",
      i = await this.request(r, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          text: t
        })
      });
    if (i.status !== c.OK) throw new h(f(), i.status);
    const a = await i.json();
    return a == null ? void 0 : a.translation
  }
  mapTicketsToReportRows(t, e) {
    var i, a, o, s, l;
    const r = [];
    for (const u of t) {
      const _ = u.status ?? "open";
      if (e === "received") {
        for (const d of u.reports) r.push({
          id: String(d.id),
          ticketId: String(u.id),
          createdAt: d.createdAt ?? u.createdAt,
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
        for (const d of u.reports) r.push({
          id: String(d.id),
          ticketId: String(u.id),
          createdAt: d.createdAt ?? u.createdAt,
          toUser: {
            id: Number(u.reportedUser.id),
            name: String(u.reportedUser.name),
            picture: u.reportedUser.picture ?? null
          },
          reason: String(d.reason),
          status: _
        });
        continue
      }
      r.push({
        id: String(u.id),
        ticketId: String(u.id),
        createdAt: u.createdAt,
        handledBy: u.status && u.status !== "open" ? {
          id: ((i = u.handledBy) == null ? void 0 : i.id) ?? 0,
          name: ((a = u.handledBy) == null ? void 0 : a.name) ?? "Moderator",
          picture: ((o = u.handledBy) == null ? void 0 : o.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((l = (s = u.reports) == null ? void 0 : s[0]) == null ? void 0 : l.reason) ?? "other"),
        status: _
      })
    }
    return r.sort((u, _) => new Date(_.createdAt).getTime() - new Date(u.createdAt).getTime()), r
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
    const i = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (i.status !== c.OK) throw new h(f(), i.status)
  }
  async timeoutUsers(t, e, r) {
    const i = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        reason: e,
        notes: r
      })
    });
    if (i.status !== c.OK) throw new h(f(), i.status)
  }
  async incrementUsersDroplets(t, e, r) {
    const i = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: t,
        delta: e,
        notes: r
      })
    });
    if (i.status !== c.OK) throw new h(f(), i.status)
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
    let i;
    switch (e) {
      case "dashboard":
        i = `/staff/dashboard/users/${r}`;
        break;
      case "select-area":
        i = `/staff/tools/select-area/${r}`;
        break;
      case "select-pixel":
      default:
        i = `/staff/tools/select-pixel/${r}`;
        break
    }
    if ((await this.request(i, {
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
      r = await Ot(e),
      i = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (i.status === c.FORBIDDEN) {
      const a = await i.json();
      if ((a == null ? void 0 : a.error) === "challenge-required" && a.tier) {
        if (await Nn(a.tier)) return this.submitBanAppeal(t);
        throw new h(gn(), i.status)
      }
    }
    if (i.status !== c.OK && i.status !== c.ALREADY_REPORTED) throw new h(f(), i.status);
    return i.status
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
      i = await this.request(r, {
        credentials: "include"
      });
    if (i.status !== c.OK) throw new h(f(), i.status);
    return i.json()
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
  async postCaptchaSession(t) {
    const e = await ht(),
      r = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(t),
        headers: {
          "x-fp": e
        }
      });
    if (!r.ok) throw r.status === 500 ? new h(f(), r.status) : new h($_(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < Db.length,
      i = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Lb.tools.wayback.limit,
      a = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      o = t.cursorTs !== void 0,
      s = t.cursorUserId !== void 0,
      l = t.cursorAllianceId !== void 0,
      u = t.cursorPixelsCount !== void 0,
      _ = o || s || l || u,
      d = o && s && l && u;
    let m = !0;
    return _ && (m = d && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !i || !a || !e || !m)
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
      i = e.toString(),
      a = await this.request(i.length > 0 ? `${r}?${i}` : r, {
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
    if (t.status !== c.OK) throw new h(f(), t.status);
    return t.json()
  }
  async postBuyUserFrame(t) {
    const e = await this.request(`/store/frames/buy/${t}`, {
      method: "POST",
      credentials: "include"
    });
    if (e.status === c.NOT_FOUND) throw new Error(wn());
    if (e.status === c.FORBIDDEN) throw new Error(On());
    if (e.status === c.CONFLICT) throw new Error(Sn());
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
We = new WeakMap, qe = new WeakMap;

function Pb(n) {
  var m, g;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const E of n)
    if (E.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (m = xt.seasons) == null ? void 0 : m[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let i = Number.POSITIVE_INFINITY,
    a = Number.POSITIVE_INFINITY,
    o = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const l = n.map(E => {
      const w = Math.round(E.tile[0] * r + E.pixel[0]),
        T = Math.round(E.tile[1] * r + E.pixel[1]);
      return w < i && (i = w), T < a && (a = T), w > o && (o = w), T > s && (s = T), {
        x: w,
        y: T,
        colorIdx: E.colorIdx
      }
    }),
    u = o - i + 1,
    _ = s - a + 1;
  if (!Number.isFinite(u) || !Number.isFinite(_) || u <= 0 || _ <= 0) throw new Error("Failed to compute image bounds for auto painter payload.");
  const d = new Uint8ClampedArray(u * _ * 4);
  for (const {
      x: E,
      y: w,
      colorIdx: T
    }
    of l) {
    const O = (g = xt.colors) == null ? void 0 : g[T];
    if (!O) throw new Error(`Unknown palette color index: ${T}`);
    const N = E - i,
      j = ((w - a) * u + N) * 4,
      [H, y, S] = O.rgb;
    d[j] = H, d[j + 1] = y, d[j + 2] = S, d[j + 3] = T === 0 ? 1 : 255
  }
  return {
    data: d,
    width: u,
    height: _,
    offsetX: i,
    offsetY: a,
    season: t
  }
}
async function Ub(n) {
  const t = Cb(n.width, n.height),
    e = t.getContext("2d");
  if (!e) throw new Error("Canvas API is not available to encode auto painter bitmap.");
  const r = e.createImageData(n.width, n.height);
  return r.data.set(n.data), e.putImageData(r, 0, 0), "convertToBlob" in t ? t.convertToBlob({
    type: "image/png"
  }) : new Promise((i, a) => {
    t.toBlob(o => {
      if (!o) {
        a(new Error("Failed to encode auto painter bitmap."));
        return
      }
      i(o)
    }, "image/png")
  })
}

function Cb(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let be = new Mb(Ct);
async function Ot(n) {
  const t = await ht(),
    e = _b();
  return {
    "x-pawtect-token": await Zb(n, e),
    "x-t": e,
    "x-fp": t
  }
}
const y0 = n => new URL(n, Ct).toString();

function _r(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function jb(n, t) {
  for (const e of t)
    if (_r(n, e)) return !0;
  return !1
}

function fr(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function Fb(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class Bb {
  constructor(t) {
    F(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      i = t % 8;
    if (r >= this.bytes.length) {
      const o = new Uint8Array(r + 1),
        s = o.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) o[l + s] = this.bytes[l];
      this.bytes = o
    }
    const a = this.bytes.length - 1 - r;
    e ? this.bytes[a] = this.bytes[a] | 1 << i : this.bytes[a] = this.bytes[a] & ~(1 << i)
  }
  get(t) {
    const e = Math.floor(t / 8),
      r = t % 8,
      i = this.bytes.length;
    return e > i ? !1 : (this.bytes[i - 1 - e] & 1 << r) !== 0
  }
}

function v0(n) {
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onload = () => {
      const i = r.result;
      if (!i || typeof i != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(i.substring(i.indexOf(",") + 1))
    }, r.readAsDataURL(n)
  })
}

function b0(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${Fb(new Uint8Array(e))}`)
  }
  return new Promise((t, e) => {
    const r = new FileReader;
    r.onloadend = () => {
      const i = r.result;
      if (typeof i != "string") {
        e(new Error("Could not read blob as data URL"));
        return
      }
      t(i)
    }, r.onerror = e, r.readAsDataURL(n)
  })
}

function E0(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    i = e.indexOf(";base64"),
    a = (i === -1 ? e : e.slice(0, i)) || "text/plain";
  if (i !== -1) {
    const o = fr(r),
      s = new Uint8Array(o.byteLength);
    return s.set(o), new Blob([s], {
      type: a
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: a
  })
}

function T0(...n) {
  return n.filter(Boolean).join(" ")
}
const zb = typeof document < "u";
let Un = 0;
var Ke, He, Ye;
class Vb {
  constructor() {
    D(this, Ke, B(dt([])));
    D(this, He, B(dt([])));
    D(this, Ye, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    F(this, "addToast", t => {
      zb && this.toasts.unshift(t)
    });
    F(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: i
    }) => {
      const a = this.toasts.findIndex(s => s.id === t),
        o = this.toasts[a];
      this.toasts[a] = {
        ...o,
        ...e,
        id: t,
        title: i,
        type: r,
        updated: !0
      }
    });
    F(this, "create", t => {
      var s;
      const {
        message: e,
        ...r
      } = t, i = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : Un++, a = t.dismissable === void 0 ? !0 : t.dismissable, o = t.type === void 0 ? "default" : t.type;
      return Yt(() => {
        this.toasts.find(u => u.id === i) ? this.updateToast({
          id: i,
          data: t,
          type: o,
          message: e,
          dismissable: a
        }) : this.addToast({
          ...r,
          id: i,
          title: e,
          dismissable: a,
          type: o
        })
      }), i
    });
    F(this, "dismiss", t => (Yt(() => {
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
    F(this, "remove", t => {
      if (t === void 0) {
        this.toasts = [];
        return
      }
      const e = b(this, Ye).call(this, t);
      if (e !== null) return this.toasts.splice(e, 1), t
    });
    F(this, "message", (t, e) => this.create({
      ...e,
      type: "default",
      message: t
    }));
    F(this, "error", (t, e) => this.create({
      ...e,
      type: "error",
      message: t
    }));
    F(this, "success", (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    }));
    F(this, "info", (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    }));
    F(this, "warning", (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    }));
    F(this, "loading", (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    }));
    F(this, "promise", (t, e) => {
      if (!e) return;
      let r;
      e.loading !== void 0 && (r = this.create({
        ...e,
        promise: t,
        type: "loading",
        message: typeof e.loading == "string" ? e.loading : e.loading()
      }));
      const i = t instanceof Promise ? t : t();
      let a = r !== void 0;
      return i.then(o => {
        if (typeof o == "object" && o && "ok" in o && typeof o.ok == "boolean" && !o.ok) {
          a = !1;
          const s = Gb(o);
          this.create({
            id: r,
            type: "error",
            message: s
          })
        } else if (e.success !== void 0) {
          a = !1;
          const s = typeof e.success == "function" ? e.success(o) : e.success;
          this.create({
            id: r,
            type: "success",
            message: s
          })
        }
      }).catch(o => {
        if (e.error !== void 0) {
          a = !1;
          const s = typeof e.error == "function" ? e.error(o) : e.error;
          this.create({
            id: r,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var o;
        a && (this.dismiss(r), r = void 0), (o = e.finally) == null || o.call(e)
      }), r
    });
    F(this, "custom", (t, e) => {
      const r = (e == null ? void 0 : e.id) || Un++;
      return this.create({
        component: t,
        id: r,
        ...e
      }), r
    });
    F(this, "removeHeight", t => {
      this.heights = this.heights.filter(e => e.toastId !== t)
    });
    F(this, "setHeight", t => {
      const e = b(this, Ye).call(this, t.toastId);
      if (e === null) {
        this.heights.push(t);
        return
      }
      this.heights[e] = t
    });
    F(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return M(b(this, Ke))
  }
  set toasts(t) {
    P(b(this, Ke), t, !0)
  }
  get heights() {
    return M(b(this, He))
  }
  set heights(t) {
    P(b(this, He), t, !0)
  }
}
Ke = new WeakMap, He = new WeakMap, Ye = new WeakMap;

function Gb(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const Z = new Vb;

function Wb(n, t) {
  return Z.create({
    message: n,
    ...t
  })
}
var gt;
class S0 {
  constructor() {
    D(this, gt, Te(() => Z.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return M(b(this, gt))
  }
}
gt = new WeakMap;
const qb = Wb,
  Kb = Object.assign(qb, {
    success: Z.success,
    info: Z.info,
    warning: Z.warning,
    error: Z.error,
    custom: Z.custom,
    message: Z.message,
    promise: Z.promise,
    dismiss: Z.dismiss,
    loading: Z.loading,
    getActiveToasts: () => Z.toasts.filter(n => !n.dismiss)
  });
var Ze, $e, Je, Xe, Qe, et, tt, nt;
class Hb {
  constructor() {
    F(this, "channel", new BroadcastChannel("user-channel"));
    D(this, Ze, B());
    D(this, $e, B(!0));
    D(this, Je, B());
    D(this, Xe, B(Date.now()));
    D(this, Qe, Te(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((jt.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    D(this, et, Te(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    D(this, tt, Te(() => {
      var t;
      return new Bb(fr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    D(this, nt, Te(() => {
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
    return M(b(this, Ze))
  }
  set data(t) {
    P(b(this, Ze), t, !0)
  }
  get loading() {
    return M(b(this, $e))
  }
  set loading(t) {
    P(b(this, $e), t, !0)
  }
  get notificationCount() {
    return M(b(this, Je))
  }
  set notificationCount(t) {
    P(b(this, Je), t, !0)
  }
  get lastFetch() {
    return M(b(this, Xe))
  }
  set lastFetch(t) {
    P(b(this, Xe), t)
  }
  get charges() {
    return M(b(this, Qe))
  }
  set charges(t) {
    P(b(this, Qe), t)
  }
  get cooldown() {
    return M(b(this, et))
  }
  set cooldown(t) {
    P(b(this, et), t)
  }
  get flagsBitmap() {
    return M(b(this, tt))
  }
  set flagsBitmap(t) {
    P(b(this, tt), t)
  }
  get timeoutUntil() {
    return M(b(this, nt))
  }
  set timeoutUntil(t) {
    P(b(this, nt), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await be.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && be.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && ($r("userId", {
        id: this.data.id
      }), Yb(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), Kb.warning(np(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await be.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(t) {
    var r;
    return t < 32 ? !0 : ((((r = this.data) == null ? void 0 : r.extraColorsBitmap) ?? 0) & 1 << t - 32) !== 0
  }
  hasPermission(t) {
    var e;
    return _r((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return jb((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ze = new WeakMap, $e = new WeakMap, Je = new WeakMap, Xe = new WeakMap, Qe = new WeakMap, et = new WeakMap, tt = new WeakMap, nt = new WeakMap;
const De = new Hb;
let hr, Ie;
async function mr() {
  return Ie || (Ie = (async () => {
    var n;
    try {
      await ar(ti), (n = De.data) != null && n.id && Gt(De.data.id), Yv();
      const t = fetch;
      return Object.assign(window, {
        fetch: pr((e, r) => {
          let i = null;
          return e instanceof Request ? i = e.url : i = e, i.startsWith("/") || Kv(i), t.call(window, e, r)
        })
      }), !0
    } catch (t) {
      return console.error("Error loading Pawtect WASM:", t), hr = t, Zr(t), Ie = void 0, !1
    }
  })()), Ie
}
async function Yb(n) {
  await mr(), Gt(n)
}

function O0() {
  return Ie ?? Promise.resolve(!1)
}

function I0() {
  return hr
}
async function Zb(n, t) {
  if (!await mr()) throw new Error(ay());
  const r = navigator.webdriver,
    i = await ht();
  Gt(De.data.id), zv(i), Wv(r), Hv(jt.automatedClicks);
  const a = Uint8Array.from(atob(t), o => o.charCodeAt(0));
  return Gv(a), qv(n)
}

function pr(n) {
  return n.bind().bind()
}

function A0(n, t, e) {
  const r = {
    [n.name](...i) {
      return e(...i), t(...i)
    }
  } [n.name];
  return pr(r)
}
export {
  y0 as $, ei as A, Gu as B, dr as C, js as D, Nm as E, Fd as F, Z as G, T0 as H, S0 as I, o0 as J, z as K, i0 as L, r0 as M, a0 as N, e0 as O, Ct as P, f0 as Q, mr as R, p0 as S, A0 as T, b0 as U, E0 as V, g0 as W, O0 as X, ay as Y, I0 as Z, bw as _, be as a, d0 as a0, c0 as a1, _0 as a2, l0 as a3, w0 as a4, h0 as a5, Qb as a6, Ao as a7, Bo as a8, Qo as a9, Qp as aA, _g as aB, En as aC, Cg as aD, $g as aE, Tn as aF, Kw as aG, Sn as aH, Ny as aI, ue as aJ, On as aK, In as aL, Ov as aM, An as aN, _s as aa, Js as ab, lc as ac, pn as ad, Pc as ae, wn as af, yn as ag, nl as ah, ml as ai, zl as aj, ed as ak, fd as al, lf as am, Tf as an, Uf as ao, vn as ap, sh as aq, vh as ar, Lh as as, ce as at, im as au, Gm as av, np as aw, mp as ax, kp as ay, bn as az, s0 as b, Os as c, Nu as d, f as e, xt as f, Id as g, Xd as h, S_ as i, jt as j, m0 as k, n0 as l, gm as m, kl as n, ht as o, $_ as p, t0 as q, Ot as r, u0 as s, Kb as t, De as u, Nn as v, gn as w, v0 as x, C_ as y, d_ as z
};