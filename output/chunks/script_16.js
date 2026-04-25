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
  bL as br,
  q as Er,
  x as Yt,
  u as Te
} from "./C21-Odj5.js";
import {
  g as p
} from "./BhCkpOlh.js";
const be = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  ie = globalThis,
  Ae = "10.40.0";

function Dt() {
  return Lt(ie), ie
}

function Lt(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || Ae, t[Ae] = t[Ae] || {}
}

function Mt(n, t, e = ie) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    a = r[Ae] = r[Ae] || {};
  return a[n] || (a[n] = t())
}
const Tr = "Sentry Logger ",
  Zt = {};

function Sr(n) {
  if (!("console" in ie)) return n();
  const t = ie.console,
    e = {},
    r = Object.keys(Zt);
  r.forEach(a => {
    const i = Zt[a];
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

function Or() {
  Ut().enabled = !0
}

function Ir() {
  Ut().enabled = !1
}

function Cn() {
  return Ut().enabled
}

function Ar(...n) {
  Pt("log", ...n)
}

function kr(...n) {
  Pt("warn", ...n)
}

function Rr(...n) {
  Pt("error", ...n)
}

function Pt(n, ...t) {
  be && Cn() && Sr(() => {
    ie.console[n](`${Tr}[${n}]:`, ...t)
  })
}

function Ut() {
  return be ? Mt("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const ct = {
    enable: Or,
    disable: Ir,
    isEnabled: Cn,
    log: Ar,
    warn: kr,
    error: Rr
  },
  Nr = Object.prototype.toString;

function xr(n, t) {
  return Nr.call(n) === `[object ${t}]`
}

function Dr(n) {
  return xr(n, "Object")
}

function Lr(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Mr(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    be && ct.log(`Failed to add non-enumerable property "${t}" to object`, n)
  }
}
let ge;

function wt(n) {
  if (ge !== void 0) return ge ? ge(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = ie;
  return t in e && typeof e[t] == "function" ? (ge = e[t], ge(n)) : (ge = null, n())
}

function It() {
  return wt(() => Math.random())
}

function Pr() {
  return wt(() => Date.now())
}

function Ur(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function Cr() {
  const n = ie;
  return n.crypto || n.msCrypto
}
let vt;

function jr() {
  return It() * 16
}

function ke(n = Cr()) {
  try {
    if (n != null && n.randomUUID) return wt(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return vt || (vt = "10000000100040008000" + 1e11), vt.replace(/[018]/g, t => (t ^ (jr() & 15) >> t / 4).toString(16))
}
const jn = 1e3;

function Fn() {
  return Pr() / jn
}

function Fr() {
  const {
    performance: n
  } = ie;
  if (!(n != null && n.now) || !n.timeOrigin) return Fn;
  const t = n.timeOrigin;
  return () => (t + wt(() => n.now())) / jn
}
let $t;

function Br() {
  return ($t ?? ($t = Fr()))()
}

function zr(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Br(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : ke()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
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
  for (const a in t) Object.prototype.hasOwnProperty.call(t, a) && (r[a] = Bn(r[a], t[a], e - 1));
  return r
}

function Jt() {
  return ke()
}
const At = "_sentrySpan";

function Xt(n, t) {
  t ? Mr(n, At, t) : delete n[At]
}

function Qt(n) {
  return n[At]
}
const Vr = 100;
class fe {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: Jt(),
      sampleRand: It()
    }
  }
  clone() {
    const t = new fe;
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
    }, this._session && zr(this._session, {
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
      r = e instanceof fe ? e.getScopeData() : Dr(e) ? t : void 0,
      {
        tags: a,
        attributes: i,
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
      ...a
    }, this._attributes = {
      ...this._attributes,
      ...i
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
    var i;
    const r = typeof e == "number" ? e : Vr;
    if (r <= 0) return this;
    const a = {
      timestamp: Fn(),
      ...t,
      message: t.message ? Ur(t.message, 2048) : t.message
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
    if (!this._client) return be && ct.warn("No client configured on scope - will not capture exception!"), r;
    const a = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: a,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const a = (r == null ? void 0 : r.event_id) || ke();
    if (!this._client) return be && ct.warn("No client configured on scope - will not capture message!"), a;
    const i = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: i,
      ...r,
      event_id: a
    }, this), a
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || ke();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (be && ct.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function Gr() {
  return Mt("defaultCurrentScope", () => new fe)
}

function Wr() {
  return Mt("defaultIsolationScope", () => new fe)
}
class qr {
  constructor(t, e) {
    let r;
    t ? r = t : r = new fe;
    let a;
    e ? a = e : a = new fe, this._stack = [{
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
    return Lr(r) ? r.then(a => (this._popScope(), a), a => {
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

function Ee() {
  const n = Dt(),
    t = Lt(n);
  return t.stack = t.stack || new qr(Gr(), Wr())
}

function Kr(n) {
  return Ee().withScope(n)
}

function Hr(n, t) {
  const e = Ee();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function en(n) {
  return Ee().withScope(() => n(Ee().getIsolationScope()))
}

function Yr() {
  return {
    withIsolationScope: en,
    withScope: Kr,
    withSetScope: Hr,
    withSetIsolationScope: (n, t) => en(t),
    getCurrentScope: () => Ee().getScope(),
    getIsolationScope: () => Ee().getIsolationScope()
  }
}

function zn(n) {
  const t = Lt(n);
  return t.acs ? t.acs : Yr()
}

function Zr() {
  const n = Dt();
  return zn(n).getCurrentScope()
}

function $r() {
  const n = Dt();
  return zn(n).getIsolationScope()
}

function Jr(n, t) {
  return Zr().captureException(n, void 0)
}

function Xr(n, t) {
  $r().setContext(n, t)
}
const h0 = "https://maps.wplace.live",
  m0 = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  Qr = "true",
  p0 = "0x4AAAAAABpHqZ-6i7uL0nmG",
  g0 = "https://backend.wplace.live/files",
  Ct = "https://backend.wplace.live",
  tn = "theme";
var Le, Me, Pe, Ue, Ce, je, Fe, Be, ze;
class ea {
  constructor() {
    D(this, Le, B(!1));
    D(this, Me, B(!1));
    D(this, Pe, B(0));
    D(this, Ue, B(!1));
    D(this, Ce, B(dt(ta())));
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
    return na ? M(b(this, ze)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    P(b(this, ze), t, !0)
  }
}
Le = new WeakMap, Me = new WeakMap, Pe = new WeakMap, Ue = new WeakMap, Ce = new WeakMap, je = new WeakMap, Fe = new WeakMap, Be = new WeakMap, ze = new WeakMap;
const jt = new ea;

function ta() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const na = Qr.toLowerCase() !== "false",
  ra = "" + new URL("../assets/pawtect_wasm_bg.CjFSOEZJ.wasm", import.meta.url).href;
var kt = function() {
  return kt = Object.assign || function(t) {
    for (var e, r = 1, a = arguments.length; r < a; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
    }
    return t
  }, kt.apply(this, arguments)
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
      _.done ? i(_.value) : a(_.value).then(s, l)
    }
    u((r = r.apply(n, t || [])).next())
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

  function s(u) {
    return function(_) {
      return l([u, _])
    }
  }

  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (e = 0)), e;) try {
      if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done) return i;
      switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return e.label++, {
            value: u[1],
            done: !1
          };
        case 5:
          e.label++, a = u[1], u = [0];
          continue;
        case 7:
          u = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            e = 0;
            continue
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            e.label = u[1];
            break
          }
          if (u[0] === 6 && e.label < i[1]) {
            e.label = i[1], i = u;
            break
          }
          if (i && e.label < i[2]) {
            e.label = i[2], e.ops.push(u);
            break
          }
          i[2] && e.ops.pop(), e.trys.pop();
          continue
      }
      u = t.call(n, e)
    } catch (_) {
      u = [6, _], a = 0
    } finally {
      r = i = 0
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
    for (var r = 0, a = t.length, i; r < a; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return n.concat(i || Array.prototype.slice.call(t))
}
var Gn = "4.6.2";

function _t(n, t) {
  return new Promise(function(e) {
    return setTimeout(e, n, t)
  })
}

function aa() {
  return new Promise(function(n) {
    var t = new MessageChannel;
    t.port1.onmessage = function() {
      return n()
    }, t.port2.postMessage(null)
  })
}

function ia(n, t) {
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
    var r, a, i, o;
    return ee(this, function(s) {
      switch (s.label) {
        case 0:
          r = Array(n.length), a = Date.now(), i = 0, s.label = 1;
        case 1:
          return i < n.length ? (r[i] = t(n[i], i), o = Date.now(), o >= a + e ? (a = o, [4, aa()]) : [3, 3]) : [3, 4];
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

function xe(n) {
  return n.then(void 0, function() {}), n
}

function oa(n, t) {
  for (var e = 0, r = n.length; e < r; ++e)
    if (n[e] === t) return !0;
  return !1
}

function sa(n, t) {
  return !oa(n, t)
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

function ca(n) {
  for (var t, e, r = "Unexpected syntax '".concat(n, "'"), a = /^\s*([a-z-]*)(.*)$/i.exec(n), i = a[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, l = function(m, g) {
      o[m] = o[m] || [], o[m].push(g)
    };;) {
    var u = s.exec(a[2]);
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
  return [i, o]
}

function ua(n) {
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
    a = n[1] >>> 16,
    i = n[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    l = t[1] >>> 16,
    u = t[1] & 65535,
    _ = 0,
    d = 0,
    m = 0,
    g = 0;
  g += i + u, m += g >>> 16, g &= 65535, m += a + l, d += m >>> 16, m &= 65535, d += r + s, _ += d >>> 16, d &= 65535, _ += e + o, _ &= 65535, n[0] = _ << 16 | d, n[1] = m << 16 | g
}

function Y(n, t) {
  var e = n[0] >>> 16,
    r = n[0] & 65535,
    a = n[1] >>> 16,
    i = n[1] & 65535,
    o = t[0] >>> 16,
    s = t[0] & 65535,
    l = t[1] >>> 16,
    u = t[1] & 65535,
    _ = 0,
    d = 0,
    m = 0,
    g = 0;
  g += i * u, m += g >>> 16, g &= 65535, m += a * u, d += m >>> 16, m &= 65535, m += i * l, d += m >>> 16, m &= 65535, d += r * u, _ += d >>> 16, d &= 65535, d += a * l, _ += d >>> 16, d &= 65535, d += i * s, _ += d >>> 16, d &= 65535, _ += e * u + r * l + a * s + i * o, _ &= 65535, n[0] = _ << 16 | d, n[1] = m << 16 | g
}

function we(n, t) {
  var e = n[0];
  t %= 64, t === 32 ? (n[0] = n[1], n[1] = e) : t < 32 ? (n[0] = e << t | n[1] >>> 32 - t, n[1] = n[1] << t | e >>> 32 - t) : (t -= 32, n[0] = n[1] << t | e >>> 32 - t, n[1] = e << t | n[1] >>> 32 - t)
}

function K(n, t) {
  t %= 64, t !== 0 && (t < 32 ? (n[0] = n[1] >>> 32 - t, n[1] = n[1] << t) : (n[0] = n[1] << t - 32, n[1] = 0))
}

function L(n, t) {
  n[0] ^= t[0], n[1] ^= t[1]
}
var la = [4283543511, 3981806797],
  da = [3301882366, 444984403];

function an(n) {
  var t = [0, n[0] >>> 1];
  L(n, t), Y(n, la), t[1] = n[0] >>> 1, L(n, t), Y(n, da), t[1] = n[0] >>> 1, L(n, t)
}
var ot = [2277735313, 289559509],
  st = [1291169091, 658871167],
  on = [0, 5],
  _a = [0, 1390208809],
  fa = [0, 944331445];

function ha(n, t) {
  var e = ua(n);
  t = t || 0;
  var r = [0, e.length],
    a = r[1] % 16,
    i = r[1] - a,
    o = [0, t],
    s = [0, t],
    l = [0, 0],
    u = [0, 0],
    _;
  for (_ = 0; _ < i; _ = _ + 16) l[0] = e[_ + 4] | e[_ + 5] << 8 | e[_ + 6] << 16 | e[_ + 7] << 24, l[1] = e[_] | e[_ + 1] << 8 | e[_ + 2] << 16 | e[_ + 3] << 24, u[0] = e[_ + 12] | e[_ + 13] << 8 | e[_ + 14] << 16 | e[_ + 15] << 24, u[1] = e[_ + 8] | e[_ + 9] << 8 | e[_ + 10] << 16 | e[_ + 11] << 24, Y(l, ot), we(l, 31), Y(l, st), L(o, l), we(o, 27), oe(o, s), Y(o, on), oe(o, _a), Y(u, st), we(u, 33), Y(u, ot), L(s, u), we(s, 31), oe(s, o), Y(s, on), oe(s, fa);
  l[0] = 0, l[1] = 0, u[0] = 0, u[1] = 0;
  var d = [0, 0];
  switch (a) {
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
      d[1] = e[_ + 8], L(u, d), Y(u, st), we(u, 33), Y(u, ot), L(s, u);
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
      d[1] = e[_], L(l, d), Y(l, ot), we(l, 31), Y(l, st), L(o, l)
  }
  return L(o, r), L(s, r), oe(o, s), oe(s, o), an(o), an(s), oe(o, s), oe(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function ma(n) {
  var t;
  return kt({
    name: n.name,
    message: n.message,
    stack: (t = n.stack) === null || t === void 0 ? void 0 : t.split(`
`)
  }, n)
}

function pa(n) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
}

function ga(n) {
  return typeof n != "function"
}

function wa(n, t) {
  var e = xe(new Promise(function(r) {
    var a = Date.now();
    nn(n.bind(null, t), function() {
      for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
      var s = Date.now() - a;
      if (!i[0]) return r(function() {
        return {
          error: i[1],
          duration: s
        }
      });
      var l = i[1];
      if (ga(l)) return r(function() {
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
    return e.then(function(a) {
      return a()
    })
  }
}

function ya(n, t, e, r) {
  var a = Object.keys(n).filter(function(o) {
      return sa(e, o)
    }),
    i = xe(rn(a, function(o) {
      return wa(n[o], t)
    }, r));
  return function() {
    return Q(this, void 0, void 0, function() {
      var s, l, u, _, d;
      return ee(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, i];
          case 1:
            return s = m.sent(), [4, rn(s, function(g) {
              return xe(g())
            }, r)];
          case 2:
            return l = m.sent(), [4, Promise.all(l)];
          case 3:
            for (u = m.sent(), _ = {}, d = 0; d < a.length; ++d) _[a[d]] = u[d];
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

function va() {
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

function at() {
  var n = window;
  return pa(n.print) && String(n.browser) === "[object WebPageNamespace]"
}

function Hn() {
  var n, t, e = window;
  return q(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function ba() {
  var n = window;
  return q([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Ea() {
  var n = window,
    t = n.URLPattern;
  return q(["union" in Set.prototype, "Iterator" in n, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function Ta() {
  var n = window;
  return q(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
}

function it() {
  var n = window,
    t = navigator,
    e = n.CSS,
    r = n.HTMLButtonElement;
  return q([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function Sa() {
  if (navigator.platform === "iPad") return !0;
  var n = screen,
    t = n.width / n.height;
  return q(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Oa() {
  var n = document;
  return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
}

function Ia() {
  var n = document;
  return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
}

function zt() {
  var n = rt(),
    t = Hn(),
    e = window,
    r = navigator,
    a = "connection";
  return n ? q([!("SharedWorker" in e), r[a] && "ontypechange" in r[a], !("sinkId" in new Audio)]) >= 2 : t ? q(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Aa() {
  var n = navigator,
    t = window,
    e = Audio.prototype,
    r = t.visualViewport;
  return q(["srLatency" in e, "srChannelCount" in e, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function ka() {
  return xa() ? -4 : Ra()
}

function Ra() {
  var n = window,
    t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
  if (!t) return -2;
  if (Na()) return -1;
  var e = 4500,
    r = 5e3,
    a = new t(1, r, 44100),
    i = a.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  var o = a.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, i.connect(o), o.connect(a.destination), i.start(0);
  var s = Da(a),
    l = s[0],
    u = s[1],
    _ = xe(l.then(function(d) {
      return La(d.getChannelData(0).subarray(e))
    }, function(d) {
      if (d.name === "timeout" || d.name === "suspended") return -3;
      throw d
    }));
  return function() {
    return u(), _
  }
}

function Na() {
  return X() && !Bt() && !Ta()
}

function xa() {
  return X() && it() && at() || rt() && Aa() && Ea()
}

function Da(n) {
  var t = 3,
    e = 500,
    r = 500,
    a = 5e3,
    i = function() {},
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
          }, Math.min(r, d + a - Date.now()))
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
      g(), i = function() {
        u || (u = !0, d > 0 && m())
      }
    });
  return [o, i]
}

function La(n) {
  for (var t = 0, e = 0; e < n.length; ++e) t += Math.abs(n[e]);
  return t
}

function sn(n) {
  var t = new Error(n);
  return t.name = n, t
}

function Yn(n, t, e) {
  var r, a, i;
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
          return !((a = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || a === void 0) && a.body ? [3, 8] : [4, _t(e)];
        case 7:
          return l.sent(), [3, 6];
        case 8:
          return [4, n(s, s.contentWindow)];
        case 9:
          return [2, l.sent()];
        case 10:
          return (i = s.parentNode) === null || i === void 0 || i.removeChild(s), [7];
        case 11:
          return [2]
      }
    })
  })
}

function Ma(n) {
  for (var t = ca(n), e = t[0], r = t[1], a = document.createElement(e ?? "div"), i = 0, o = Object.keys(r); i < o.length; i++) {
    var s = o[i],
      l = r[s].join(" ");
    s === "style" ? Pa(a.style, l) : a.setAttribute(s, l)
  }
  return a
}

function Pa(n, t) {
  for (var e = 0, r = t.split(";"); e < r.length; e++) {
    var a = r[e],
      i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
    if (i) {
      var o = i[1],
        s = i[2],
        l = i[4];
      n.setProperty(o, s, l || "")
    }
  }
}

function Ua() {
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
var Ca = "mmMwWLliI0O&1",
  ja = "48px",
  ye = ["monospace", "sans-serif", "serif"],
  cn = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function Fa() {
  var n = this;
  return Yn(function(t, e) {
    var r = e.document;
    return Q(n, void 0, void 0, function() {
      var a, i, o, s, l, u, _, d, m, g, E, w;
      return ee(this, function(T) {
        for (a = r.body, a.style.fontSize = ja, i = r.createElement("div"), i.style.setProperty("visibility", "hidden", "important"), o = {}, s = {}, l = function(O) {
            var N = r.createElement("span"),
              C = N.style;
            return C.position = "absolute", C.top = "0", C.left = "0", C.fontFamily = O, N.textContent = Ca, i.appendChild(N), N
          }, u = function(O, N) {
            return l("'".concat(O, "',").concat(N))
          }, _ = function() {
            return ye.map(l)
          }, d = function() {
            for (var O = {}, N = function(y) {
                O[y] = ye.map(function(S) {
                  return u(y, S)
                })
              }, C = 0, j = cn; C < j.length; C++) {
              var H = j[C];
              N(H)
            }
            return O
          }, m = function(O) {
            return ye.some(function(N, C) {
              return O[C].offsetWidth !== o[N] || O[C].offsetHeight !== s[N]
            })
          }, g = _(), E = d(), a.appendChild(i), w = 0; w < ye.length; w++) o[ye[w]] = g[w].offsetWidth, s[ye[w]] = g[w].offsetHeight;
        return [2, cn.filter(function(O) {
          return m(E[O])
        })]
      })
    })
  })
}

function Ba() {
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

function za() {
  return Va(Za())
}

function Va(n) {
  var t, e = !1,
    r, a, i = Ga(),
    o = i[0],
    s = i[1];
  return Wa(o, s) ? (e = qa(s), n ? r = a = "skipped" : (t = Ka(o, s), r = t[0], a = t[1])) : r = a = "unsupported", {
    winding: e,
    geometry: r,
    text: a
  }
}

function Ga() {
  var n = document.createElement("canvas");
  return n.width = 1, n.height = 1, [n, n.getContext("2d")]
}

function Wa(n, t) {
  return !!(t && n.toDataURL)
}

function qa(n) {
  return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
}

function Ka(n, t) {
  Ha(n, t);
  var e = bt(n),
    r = bt(n);
  if (e !== r) return ["unstable", "unstable"];
  Ya(n, t);
  var a = bt(n);
  return [a, e]
}

function Ha(n, t) {
  n.width = 240, n.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var e = "Cwm fjordbank gly ".concat("😃");
  t.fillText(e, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(e, 4, 45)
}

function Ya(n, t) {
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

function bt(n) {
  return n.toDataURL()
}

function Za() {
  return X() && it() && at()
}

function $a() {
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

function Ja() {
  return navigator.oscpu
}

function Xa() {
  var n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) rt() && ba() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    var r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function Qa() {
  return window.screen.colorDepth
}

function ei() {
  return re(J(navigator.deviceMemory), void 0)
}

function ti() {
  if (!(X() && it() && at())) return ni()
}

function ni() {
  var n = screen,
    t = function(r) {
      return re(Ft(r), null)
    },
    e = [t(n.width), t(n.height)];
  return e.sort().reverse(), e
}
var ri = 2500,
  ai = 10,
  ut, Et;

function ii() {
  if (Et === void 0) {
    var n = function() {
      var t = Rt();
      Nt(t) ? Et = setTimeout(n, ri) : (ut = t, Et = void 0)
    };
    n()
  }
}

function oi() {
  var n = this;
  return ii(),
    function() {
      return Q(n, void 0, void 0, function() {
        var t;
        return ee(this, function(e) {
          switch (e.label) {
            case 0:
              return t = Rt(), Nt(t) ? ut ? [2, Vn([], ut, !0)] : Oa() ? [4, Ia()] : [3, 2] : [3, 2];
            case 1:
              e.sent(), t = Rt(), e.label = 2;
            case 2:
              return Nt(t) || (ut = t), [2, t]
          }
        })
      })
    }
}

function si() {
  var n = this;
  if (X() && it() && at()) return function() {
    return Promise.resolve(void 0)
  };
  var t = oi();
  return function() {
    return Q(n, void 0, void 0, function() {
      var e, r;
      return ee(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, t()];
          case 1:
            return e = a.sent(), r = function(i) {
              return i === null ? null : qn(i, ai)
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

function ci() {
  return re(Ft(navigator.hardwareConcurrency), void 0)
}

function ui() {
  var n, t = (n = window.Intl) === null || n === void 0 ? void 0 : n.DateTimeFormat;
  if (t) {
    var e = new t().resolvedOptions().timeZone;
    if (e) return e
  }
  var r = -li();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r)
}

function li() {
  var n = new Date().getFullYear();
  return Math.max(J(new Date(n, 0, 1).getTimezoneOffset()), J(new Date(n, 6, 1).getTimezoneOffset()))
}

function di() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function _i() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function fi() {
  if (!(Kn() || va())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function hi() {
  return !!window.openDatabase
}

function mi() {
  return navigator.cpuClass
}

function pi() {
  var n = navigator.platform;
  return n === "MacIntel" && X() && !Bt() ? Sa() ? "iPad" : "iPhone" : n
}

function gi() {
  return navigator.vendor || ""
}

function wi() {
  for (var n = [], t = 0, e = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < e.length; t++) {
    var r = e[t],
      a = window[r];
    a && typeof a == "object" && n.push(r)
  }
  return n.sort()
}

function yi() {
  var n = document;
  try {
    n.cookie = "cookietest=1; SameSite=Strict;";
    var t = n.cookie.indexOf("cookietest=") !== -1;
    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function vi() {
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

function bi(n) {
  var t = n === void 0 ? {} : n,
    e = t.debug;
  return Q(this, void 0, void 0, function() {
    var r, a, i, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          return Ei() ? (r = vi(), a = Object.keys(r), i = (l = []).concat.apply(l, a.map(function(_) {
            return r[_]
          })), [4, Ti(i)]) : [2, void 0];
        case 1:
          return o = u.sent(), e && Si(r, o), s = a.filter(function(_) {
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

function Ei() {
  return X() || zt()
}

function Ti(n) {
  var t;
  return Q(this, void 0, void 0, function() {
    var e, r, a, i, l, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          for (e = document, r = e.createElement("div"), a = new Array(n.length), i = {}, un(r), l = 0; l < n.length; ++l) o = Ma(n[l]), o.tagName === "DIALOG" && o.show(), s = e.createElement("div"), un(s), s.appendChild(o), r.appendChild(s), a[l] = o;
          u.label = 1;
        case 1:
          return e.body ? [3, 3] : [4, _t(50)];
        case 2:
          return u.sent(), [3, 1];
        case 3:
          e.body.appendChild(r);
          try {
            for (l = 0; l < n.length; ++l) a[l].offsetParent || (i[n[l]] = !0)
          } finally {
            (t = r.parentNode) === null || t === void 0 || t.removeChild(r)
          }
          return [2, i]
      }
    })
  })
}

function un(n) {
  n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
}

function Si(n, t) {
  for (var e = "DOM blockers debug:\n```", r = 0, a = Object.keys(n); r < a.length; r++) {
    var i = a[r];
    e += `
`.concat(i, ":");
    for (var o = 0, s = n[i]; o < s.length; o++) {
      var l = s[o];
      e += `
  `.concat(t[l] ? "🚫" : "➡️", " ").concat(l)
    }
  }
  console.log("".concat(e, "\n```"))
}

function Oi() {
  for (var n = 0, t = ["rec2020", "p3", "srgb"]; n < t.length; n++) {
    var e = t[n];
    if (matchMedia("(color-gamut: ".concat(e, ")")).matches) return e
  }
}

function Ii() {
  if (ln("inverted")) return !0;
  if (ln("none")) return !1
}

function ln(n) {
  return matchMedia("(inverted-colors: ".concat(n, ")")).matches
}

function Ai() {
  if (dn("active")) return !0;
  if (dn("none")) return !1
}

function dn(n) {
  return matchMedia("(forced-colors: ".concat(n, ")")).matches
}
var ki = 100;

function Ri() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var n = 0; n <= ki; ++n)
      if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
    throw new Error("Too high value")
  }
}

function Ni() {
  if (ve("no-preference")) return 0;
  if (ve("high") || ve("more")) return 1;
  if (ve("low") || ve("less")) return -1;
  if (ve("forced")) return 10
}

function ve(n) {
  return matchMedia("(prefers-contrast: ".concat(n, ")")).matches
}

function xi() {
  if (_n("reduce")) return !0;
  if (_n("no-preference")) return !1
}

function _n(n) {
  return matchMedia("(prefers-reduced-motion: ".concat(n, ")")).matches
}

function Di() {
  if (fn("reduce")) return !0;
  if (fn("no-preference")) return !1
}

function fn(n) {
  return matchMedia("(prefers-reduced-transparency: ".concat(n, ")")).matches
}

function Li() {
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

function Mi() {
  var n = A.acos || W,
    t = A.acosh || W,
    e = A.asin || W,
    r = A.asinh || W,
    a = A.atanh || W,
    i = A.atan || W,
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
    atanh: a(.5),
    atanhPf: N(.5),
    atan: i(.5),
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
var Pi = "mmMwWLliI0fiflO&1",
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

function Ui() {
  return Ci(function(n, t) {
    for (var e = {}, r = {}, a = 0, i = Object.keys(Tt); a < i.length; a++) {
      var o = i[a],
        s = Tt[o],
        l = s[0],
        u = l === void 0 ? {} : l,
        _ = s[1],
        d = _ === void 0 ? Pi : _,
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

function Ci(n, t) {
  return t === void 0 && (t = 4e3), Yn(function(e, r) {
    var a = r.document,
      i = a.body,
      o = i.style;
    o.width = "".concat(t, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", rt() ? i.style.zoom = "".concat(1 / r.devicePixelRatio) : X() && (i.style.zoom = "reset");
    var s = a.createElement("div");
    return s.textContent = Vn([], Array(t / 20 << 0), !0).map(function() {
      return "word"
    }).join(" "), i.appendChild(s), n(a, i)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function ji() {
  return navigator.pdfViewerEnabled
}

function Fi() {
  var n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
}

function Bi() {
  var n = window.ApplePaySession;
  if (typeof(n == null ? void 0 : n.canMakePayments) != "function") return -1;
  if (zi()) return -3;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (t) {
    return Vi(t)
  }
}
var zi = Ua;

function Vi(n) {
  if (n instanceof Error && n.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
  throw n
}

function Gi() {
  var n, t = document.createElement("a"),
    e = (n = t.attributionSourceId) !== null && n !== void 0 ? n : t.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
var Zn = -1,
  $n = -2,
  Wi = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  qi = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Ki = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  Hi = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  Jn = "WEBGL_debug_renderer_info",
  Yi = "WEBGL_polygon_mode";

function Zi(n) {
  var t, e, r, a, i, o, s = n.cache,
    l = Xn(s);
  if (!l) return Zn;
  if (!er(l)) return $n;
  var u = Qn() ? null : l.getExtension(Jn);
  return {
    version: ((t = l.getParameter(l.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((e = l.getParameter(l.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = l.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((a = l.getParameter(l.RENDERER)) === null || a === void 0 ? void 0 : a.toString()) || "",
    rendererUnmasked: u ? (i = l.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((o = l.getParameter(l.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  }
}

function $i(n) {
  var t = n.cache,
    e = Xn(t);
  if (!e) return Zn;
  if (!er(e)) return $n;
  var r = e.getSupportedExtensions(),
    a = e.getContextAttributes(),
    i = [],
    o = [],
    s = [],
    l = [],
    u = [];
  if (a)
    for (var _ = 0, d = Object.keys(a); _ < d.length; _++) {
      var m = d[_];
      o.push("".concat(m, "=").concat(a[m]))
    }
  for (var g = mn(e), E = 0, w = g; E < w.length; E++) {
    var T = w[E],
      O = e[T];
    s.push("".concat(T, "=").concat(O).concat(Wi.has(O) ? "=".concat(e.getParameter(O)) : ""))
  }
  if (r)
    for (var N = 0, C = r; N < C.length; N++) {
      var j = C[N];
      if (!(j === Jn && Qn() || j === Yi && Qi())) {
        var H = e.getExtension(j);
        if (!H) {
          i.push(j);
          continue
        }
        for (var y = 0, S = mn(H); y < S.length; y++) {
          var T = S[y],
            O = H[T];
          l.push("".concat(T, "=").concat(O).concat(qi.has(O) ? "=".concat(e.getParameter(O)) : ""))
        }
      }
    }
  for (var v = 0, $ = Ki; v < $.length; v++)
    for (var G = $[v], V = 0, te = Hi; V < te.length; V++) {
      var pe = te[V],
        yt = Ji(e, G, pe);
      u.push("".concat(G, ".").concat(pe, "=").concat(yt.join(",")))
    }
  return l.sort(), s.sort(), {
    contextAttributes: o,
    parameters: s,
    shaderPrecisions: u,
    extensions: r,
    extensionParameters: l,
    unsupportedExtensions: i
  }
}

function Xn(n) {
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

function Ji(n, t, e) {
  var r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function mn(n) {
  var t = Object.keys(n.__proto__);
  return t.filter(Xi)
}

function Xi(n) {
  return typeof n == "string" && !n.match(/[^A-Z0-9_x]/)
}

function Qn() {
  return Hn()
}

function Qi() {
  return rt() || X()
}

function er(n) {
  return typeof n.getParameter == "function"
}

function eo() {
  var n = zt() || X();
  if (!n) return -2;
  if (!window.AudioContext) return -1;
  var t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function to() {
  if (!window.Intl) return -1;
  var n = window.Intl.DateTimeFormat;
  if (!n) return -2;
  var t = n().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}
var no = {
  fonts: Fa,
  domBlockers: bi,
  fontPreferences: Ui,
  audio: ka,
  screenFrame: si,
  canvas: za,
  osCpu: Ja,
  languages: Xa,
  colorDepth: Qa,
  deviceMemory: ei,
  screenResolution: ti,
  hardwareConcurrency: ci,
  timezone: ui,
  sessionStorage: di,
  localStorage: _i,
  indexedDB: fi,
  openDatabase: hi,
  cpuClass: mi,
  platform: pi,
  plugins: Ba,
  touchSupport: $a,
  vendor: gi,
  vendorFlavors: wi,
  cookiesEnabled: yi,
  colorGamut: Oi,
  invertedColors: Ii,
  forcedColors: Ai,
  monochrome: Ri,
  contrast: Ni,
  reducedMotion: xi,
  reducedTransparency: Di,
  hdr: Li,
  math: Mi,
  pdfViewerEnabled: ji,
  architecture: Fi,
  applePay: Bi,
  privateClickMeasurement: Gi,
  audioBaseLatency: eo,
  dateTimeLocale: to,
  webGlBasics: Zi,
  webGlExtensions: $i
};

function ro(n) {
  return ya(no, n, [])
}
var ao = "$ if upgrade to Pro: https://fpjs.dev/pro";

function io(n) {
  var t = oo(n),
    e = so(t);
  return {
    score: t,
    comment: ao.replace(/\$/g, "".concat(e))
  }
}

function oo(n) {
  if (zt()) return .4;
  if (X()) return Bt() && !(it() && at()) ? .5 : .3;
  var t = "value" in n.platform ? n.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function so(n) {
  return qn(.99 + .01 * n, 1e-4)
}

function co(n) {
  for (var t = "", e = 0, r = Object.keys(n).sort(); e < r.length; e++) {
    var a = r[e],
      i = n[a],
      o = "error" in i ? "error" : JSON.stringify(i.value);
    t += "".concat(t ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
  }
  return t
}

function tr(n) {
  return JSON.stringify(n, function(t, e) {
    return e instanceof Error ? ma(e) : e
  }, 2)
}

function nr(n) {
  return ha(co(n))
}

function uo(n) {
  var t, e = io(n);
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

function lo(n) {
  return n === void 0 && (n = 50), ia(n, n * 2)
}

function _o(n, t) {
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
              return i = s.sent(), o = uo(i), (t || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(a - e, `
visitorId: `).concat(o.visitorId, `
components: `).concat(tr(i), "\n```")), [2, o]
          }
        })
      })
    }
  }
}

function fo() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    var n = new XMLHttpRequest;
    n.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(Gn, "/npm-monitoring"), !0), n.send()
  } catch (t) {
    console.error(t)
  }
}

function ho(n) {
  var t;
  return n === void 0 && (n = {}), Q(this, void 0, void 0, function() {
    var e, r, a;
    return ee(this, function(i) {
      switch (i.label) {
        case 0:
          return (!((t = n.monitoring) !== null && t !== void 0) || t) && fo(), e = n.delayFallback, r = n.debug, [4, lo(e)];
        case 1:
          return i.sent(), a = ro({
            cache: {},
            debug: r
          }), [2, _o(a, r)]
      }
    })
  })
}
var rr = {
  load: ho,
  hashComponents: nr,
  componentsToDebugString: tr
};
let St = null,
  ft;
async function mo() {
  return St || (St = rr.load()), St
}
async function ht() {
  return ft || po().then(n => n.visitorId)
}
async function po() {
  const t = await (await mo()).get(),
    {
      languages: e,
      fontPreferences: r,
      dateTimeLocale: a,
      canvas: i,
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
      canvas: i,
      dateTimeLocale: a,
      languages: e
    } : {},
    ...g ? {
      canvas: i,
      languages: e,
      fontPreferences: r,
      dateTimeLocale: a
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
const go = () => "Your account has been suspended for breaking the rules",
  wo = () => "Sua conta foi suspensa por quebrar as regras",
  yo = () => "您的账号因违反规则已被暂停",
  vo = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  bo = () => "Tu cuenta ha sido suspendida por infringir las regras",
  Eo = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  To = () => "Il tuo account è stato sospeso per aver infranto le regole",
  So = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Oo = () => "Twoje konto zostało zawieszone za łamanie zasad",
  Io = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ao = () => "Ваш обліковий запис було призупинено за порушення правил",
  ko = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  Ro = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? go() : e === "pt" ? wo() : e === "ch" ? yo() : e === "de" ? vo() : e === "es" ? bo() : e === "fr" ? Eo() : e === "it" ? To() : e === "jp" ? So() : e === "pl" ? Oo() : e === "ru" ? Io() : e === "uk" ? Ao() : ko()
  },
  No = () => "Alliance name already taken",
  xo = () => "Já possui uma aliança com esse nome",
  Do = () => "该联盟名称已被占用",
  Lo = () => "Der Allianzname ist bereits vergeben",
  Mo = () => "Ese nombre de alianza ya está en uso",
  Po = () => "Ce nom d’alliance est déjà pris",
  Uo = () => "Esiste già un'alleanza con questo nome",
  Co = () => "このアライアンス名は既に使用されています。",
  jo = () => "Nazwa sojuszu jest już zajęta",
  Fo = () => "Такое название альянса уже используется",
  Bo = () => "Назва альянсу вже зайнята",
  zo = () => "Tên liên minh đã được sử dụng",
  Vo = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? No() : e === "pt" ? xo() : e === "ch" ? Do() : e === "de" ? Lo() : e === "es" ? Mo() : e === "fr" ? Po() : e === "it" ? Uo() : e === "jp" ? Co() : e === "pl" ? jo() : e === "ru" ? Fo() : e === "uk" ? Bo() : zo()
  },
  Go = () => "Alliance name exceeded the maximum number of characters",
  Wo = () => "O nome da aliança excedeu o número máximo de caracteres",
  qo = () => "联盟名称超过最大字符数限制",
  Ko = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  Ho = () => "El nombre de la alianza superó el número máximo de caracteres",
  Yo = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Zo = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  $o = () => "アライアンス名が最大文字数を超えています。",
  Jo = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  Xo = () => "Название альянса превышает максимальную длину",
  Qo = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  es = () => "Tên liên minh vượt quá số ký tự cho phép",
  ts = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Go() : e === "pt" ? Wo() : e === "ch" ? qo() : e === "de" ? Ko() : e === "es" ? Ho() : e === "fr" ? Yo() : e === "it" ? Zo() : e === "jp" ? $o() : e === "pl" ? Jo() : e === "ru" ? Xo() : e === "uk" ? Qo() : es()
  },
  ns = () => "Alliance with empty name",
  rs = () => "Aliança com nome vazio",
  as = () => "名称为空的联盟",
  is = () => "Allianz mit leerem Namen",
  os = () => "Alianza con nombre vacío",
  ss = () => "Alliance avec nom vide",
  cs = () => "Alleanza con nome vuoto",
  us = () => "名前が空のアライアンスです。",
  ls = () => "Sojusz z pustą nazwą",
  ds = () => "Альянс с пустым названием",
  _s = () => "Альянс із порожньою назвою",
  fs = () => "Liên minh không có tên",
  hs = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ns() : e === "pt" ? rs() : e === "ch" ? as() : e === "de" ? is() : e === "es" ? os() : e === "fr" ? ss() : e === "it" ? cs() : e === "jp" ? us() : e === "pl" ? ls() : e === "ru" ? ds() : e === "uk" ? _s() : fs()
  },
  ms = () => "Botting",
  ps = () => "Uso de bots",
  gs = () => "脚本",
  ws = () => "Bot-Nutzung",
  ys = () => "Botting",
  vs = () => "Bots",
  bs = () => "Uso di bot",
  Es = () => "ボット使用",
  Ts = () => "Botting",
  Ss = () => "Боттинг",
  Os = () => "Боти",
  Is = () => "Botting",
  As = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ms() : e === "pt" ? ps() : e === "ch" ? gs() : e === "de" ? ws() : e === "es" ? ys() : e === "fr" ? vs() : e === "it" ? bs() : e === "jp" ? Es() : e === "pl" ? Ts() : e === "ru" ? Ss() : e === "uk" ? Os() : Is()
  },
  ks = () => "Use of software to completely automate painting",
  Rs = () => "Uso de software para pintar de forma completamente automatizada ",
  Ns = () => "使用软件完全自动化绘制",
  xs = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ds = () => "Uso de software para automatizar completamente la pintura",
  Ls = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Ms = () => "Uso di software per dipingere in modo completamente automatizzato",
  Ps = () => "ペイントを完全に自動化するソフトウェアの使用",
  Us = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Cs = () => "Использование программ для полной автоматизации рисования",
  js = () => "Використання програм, які повністю автоматизують малювання",
  Fs = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Bs = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ks() : e === "pt" ? Rs() : e === "ch" ? Ns() : e === "de" ? xs() : e === "es" ? Ds() : e === "fr" ? Ls() : e === "it" ? Ms() : e === "jp" ? Ps() : e === "pl" ? Us() : e === "ru" ? Cs() : e === "uk" ? js() : Fs()
  },
  zs = () => "Breaking the rules",
  Vs = () => "Quebrar as regras",
  Gs = () => "违反规则",
  Ws = () => "Regeln brechen",
  qs = () => "Romper las reglas",
  Ks = () => "Violation des règles",
  Hs = () => "Violazione delle regole",
  Ys = () => "ルール違反",
  Zs = () => "Łamanie zasad",
  $s = () => "Нарушение правил",
  Js = () => "Порушення правил",
  Xs = () => "Vi phạm luật",
  Qs = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? zs() : e === "pt" ? Vs() : e === "ch" ? Gs() : e === "de" ? Ws() : e === "es" ? qs() : e === "fr" ? Ks() : e === "it" ? Hs() : e === "jp" ? Ys() : e === "pl" ? Zs() : e === "ru" ? $s() : e === "uk" ? Js() : Xs()
  },
  ec = () => "You have broken one of Wplace's rules",
  tc = () => "Você quebrou uma das regras do Wplace",
  nc = () => "你违反了 Wplace 的一项规则",
  rc = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  ac = () => "Has infringido una de las reglas de Wplace",
  ic = () => "Vous avez enfreint l’une des règles de Wplace",
  oc = () => "Hai infranto una delle regole di Wplace",
  sc = () => "Wplaceのルールのいずれかに違反しました。",
  cc = () => "Złamałeś jedną z zasad Wplace",
  uc = () => "Вы нарушили одно из правил Wplace",
  lc = () => "Ви порушили одне з правил Wplace",
  dc = () => "Bạn đã vi phạm một trong các luật của Wplace",
  _c = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ec() : e === "pt" ? tc() : e === "ch" ? nc() : e === "de" ? rc() : e === "es" ? ac() : e === "fr" ? ic() : e === "it" ? oc() : e === "jp" ? sc() : e === "pl" ? cc() : e === "ru" ? uc() : e === "uk" ? lc() : dc()
  },
  fc = () => "You cannot paint over event pixels",
  hc = () => "Você não pode pintar sobre pixels de eventos",
  mc = () => "你不能覆盖活动像素",
  pc = () => "Du kannst nicht über Event-Pixel malen",
  gc = () => "No puedes pintar sobre píxeles de evento",
  wc = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  yc = () => "Non puoi dipingere sopra i pixel dell'evento",
  vc = () => "イベント用のピクセルの上には塗れません。",
  bc = () => "Nie możesz malować po pikselach wydarzenia",
  Ec = () => "Вы не можете рисовать по пикселям события",
  Tc = () => "Ви не можете малювати поверх пікселів події",
  Sc = () => "Bạn không thể tô lên pixel sự kiện",
  pn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? fc() : e === "pt" ? hc() : e === "ch" ? mc() : e === "de" ? pc() : e === "es" ? gc() : e === "fr" ? wc() : e === "it" ? yc() : e === "jp" ? vc() : e === "pl" ? bc() : e === "ru" ? Ec() : e === "uk" ? Tc() : Sc()
  },
  Oc = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Ic = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Ac = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  kc = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  Rc = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Nc = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  xc = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Dc = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Lc = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Mc = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Pc = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  Uc = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Cc = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Oc() : e === "pt" ? Ic() : e === "ch" ? Ac() : e === "de" ? kc() : e === "es" ? Rc() : e === "fr" ? Nc() : e === "it" ? xc() : e === "jp" ? Dc() : e === "pl" ? Lc() : e === "ru" ? Mc() : e === "uk" ? Pc() : Uc()
  },
  jc = () => "Challenge verification not completed",
  Fc = () => "Verificação do desafio não concluída",
  Bc = () => "挑战验证未完成",
  zc = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Vc = () => "Verificación del desafío no completada",
  Gc = () => "Vérification du défi non terminée",
  Wc = () => "Verifica della sfida non completata",
  qc = () => "チャレンジ検証が完了していません",
  Kc = () => "Weryfikacja wyzwania niezakończona",
  Hc = () => "Верификация вызова не завершена",
  Yc = () => "Перевірку виклику не завершено",
  Zc = () => "Xác minh thử thách chưa hoàn thành",
  gn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? jc() : e === "pt" ? Fc() : e === "ch" ? Bc() : e === "de" ? zc() : e === "es" ? Vc() : e === "fr" ? Gc() : e === "it" ? Wc() : e === "jp" ? qc() : e === "pl" ? Kc() : e === "ru" ? Hc() : e === "uk" ? Yc() : Zc()
  },
  $c = () => "Couldn't complete the purchase. This item does not exist.",
  Jc = () => "Não foi possível concluir a compra. Este item não existe.",
  Xc = () => "无法完成购买。该物品不存在。",
  Qc = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  eu = () => "No se pudo completar la compra. Este ítem no existe.",
  tu = () => "Achat impossible. Cet objet n’existe pas.",
  nu = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  ru = () => "購入を完了できませんでした。このアイテムは存在しません。",
  au = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  iu = () => "Не удалось завершить покупку. Этот предмет не существует.",
  ou = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  su = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  wn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? $c() : e === "pt" ? Jc() : e === "ch" ? Xc() : e === "de" ? Qc() : e === "es" ? eu() : e === "fr" ? tu() : e === "it" ? nu() : e === "jp" ? ru() : e === "pl" ? au() : e === "ru" ? iu() : e === "uk" ? ou() : su()
  },
  cu = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  uu = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  lu = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  du = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  _u = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  fu = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  hu = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  mu = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  pu = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  gu = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  wu = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  yu = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  yn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? cu() : e === "pt" ? uu() : e === "ch" ? lu() : e === "de" ? du() : e === "es" ? _u() : e === "fr" ? fu() : e === "it" ? hu() : e === "jp" ? mu() : e === "pl" ? pu() : e === "ru" ? gu() : e === "uk" ? wu() : yu()
  },
  vu = () => "Doxxing",
  bu = () => "Doxxing",
  Eu = () => "人肉搜索",
  Tu = () => "Doxxing",
  Su = () => "Doxxing",
  Ou = () => "Doxxing",
  Iu = () => "Doxxing",
  Au = () => "ドックス（Doxxing）",
  ku = () => "Doxxing",
  Ru = () => "Докcинг",
  Nu = () => "Докcинг",
  xu = () => "Doxxing",
  Du = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? vu() : e === "pt" ? bu() : e === "ch" ? Eu() : e === "de" ? Tu() : e === "es" ? Su() : e === "fr" ? Ou() : e === "it" ? Iu() : e === "jp" ? Au() : e === "pl" ? ku() : e === "ru" ? Ru() : e === "uk" ? Nu() : xu()
  },
  Lu = () => "Released other's personal information without their consent",
  Mu = () => "Vazar informações pessoais de terceiros sem consentimento",
  Pu = () => "在未获同意的情况下公开他人个人信息",
  Uu = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Cu = () => "Divulgó información personal de otra persona sin su consentimiento",
  ju = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  Fu = () => "Diffusione di informazioni personali di terzi senza consenso",
  Bu = () => "他人の個人情報を同意なく公開した。",
  zu = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Vu = () => "Публикация личной информации других людей без их согласия",
  Gu = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Wu = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  qu = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Lu() : e === "pt" ? Mu() : e === "ch" ? Pu() : e === "de" ? Uu() : e === "es" ? Cu() : e === "fr" ? ju() : e === "it" ? Fu() : e === "jp" ? Bu() : e === "pl" ? zu() : e === "ru" ? Vu() : e === "uk" ? Gu() : Wu()
  },
  Ku = () => "This email is already in use.",
  Hu = () => "Este e-mail já está em uso.",
  Yu = () => "This email is already in use.",
  Zu = () => "This email is already in use.",
  $u = () => "Este correo electrónico ya está en uso.",
  Ju = () => "This email is already in use.",
  Xu = () => "Questa email è già in uso.",
  Qu = () => "This email is already in use.",
  el = () => "This email is already in use.",
  tl = () => "This email is already in use.",
  nl = () => "This email is already in use.",
  rl = () => "This email is already in use.",
  al = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ku() : e === "pt" ? Hu() : e === "ch" ? Yu() : e === "de" ? Zu() : e === "es" ? $u() : e === "fr" ? Ju() : e === "it" ? Xu() : e === "jp" ? Qu() : e === "pl" ? el() : e === "ru" ? tl() : e === "uk" ? nl() : rl()
  },
  il = n => `This email is already in use by user #${n.userId}.`,
  ol = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  sl = n => `This email is already in use by user #${n.userId}.`,
  cl = n => `This email is already in use by user #${n.userId}.`,
  ul = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  ll = n => `This email is already in use by user #${n.userId}.`,
  dl = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  _l = n => `This email is already in use by user #${n.userId}.`,
  fl = n => `This email is already in use by user #${n.userId}.`,
  hl = n => `This email is already in use by user #${n.userId}.`,
  ml = n => `This email is already in use by user #${n.userId}.`,
  pl = n => `This email is already in use by user #${n.userId}.`,
  gl = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? il(n) : e === "pt" ? ol(n) : e === "ch" ? sl(n) : e === "de" ? cl(n) : e === "es" ? ul(n) : e === "fr" ? ll(n) : e === "it" ? dl(n) : e === "jp" ? _l(n) : e === "pl" ? fl(n) : e === "ru" ? hl(n) : e === "uk" ? ml(n) : pl(n)
  },
  wl = () => "Enter a valid email address.",
  yl = () => "Informe um endereço de e-mail válido.",
  vl = () => "Enter a valid email address.",
  bl = () => "Enter a valid email address.",
  El = () => "Introduce una dirección de correo electrónico válida.",
  Tl = () => "Enter a valid email address.",
  Sl = () => "Inserisci un indirizzo email valido.",
  Ol = () => "Enter a valid email address.",
  Il = () => "Enter a valid email address.",
  Al = () => "Enter a valid email address.",
  kl = () => "Enter a valid email address.",
  Rl = () => "Enter a valid email address.",
  Nl = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? wl() : e === "pt" ? yl() : e === "ch" ? vl() : e === "de" ? bl() : e === "es" ? El() : e === "fr" ? Tl() : e === "it" ? Sl() : e === "jp" ? Ol() : e === "pl" ? Il() : e === "ru" ? Al() : e === "uk" ? kl() : Rl()
  },
  xl = n => `Error while painting: ${n.err}`,
  Dl = n => `Erro enquanto pinta: ${n.err}`,
  Ll = n => `绘制时出错：${n.err}`,
  Ml = n => `Fehler beim Malen: ${n.err}`,
  Pl = n => `Error al pintar: ${n.err}`,
  Ul = n => `Erreur lors de la peinture : ${n.err}`,
  Cl = n => `Errore durante la pittura: ${n.err}`,
  jl = n => `ペイント中にエラーが発生しました: ${n.err}`,
  Fl = n => `Błąd podczas malowania: ${n.err}`,
  Bl = n => `Ошибка при рисовании: ${n.err}`,
  zl = n => `Помилка під час малювання: ${n.err}`,
  Vl = n => `Lỗi khi tô: ${n.err}`,
  Gl = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? xl(n) : e === "pt" ? Dl(n) : e === "ch" ? Ll(n) : e === "de" ? Ml(n) : e === "es" ? Pl(n) : e === "fr" ? Ul(n) : e === "it" ? Cl(n) : e === "jp" ? jl(n) : e === "pl" ? Fl(n) : e === "ru" ? Bl(n) : e === "uk" ? zl(n) : Vl(n)
  },
  Wl = () => "Exceeded maximum number of characters",
  ql = () => "Excedeu o número máximo de caracteres permitidos",
  Kl = () => "超出最大字符数",
  Hl = () => "Maximale Zeichenanzahl überschritten",
  Yl = () => "Se excedió el número máximo de caracteres",
  Zl = () => "Nombre maximal de caractères dépassé",
  $l = () => "Numero massimo di caratteri superato",
  Jl = () => "最大文字数を超過しました",
  Xl = () => "Przekroczono maksymalną liczbę znaków",
  Ql = () => "Превышено максимальное количество символов",
  ed = () => "Перевищено максимальну кількість символів",
  td = () => "Đã vượt quá số ký tự tối đa",
  nd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Wl() : e === "pt" ? ql() : e === "ch" ? Kl() : e === "de" ? Hl() : e === "es" ? Yl() : e === "fr" ? Zl() : e === "it" ? $l() : e === "jp" ? Jl() : e === "pl" ? Xl() : e === "ru" ? Ql() : e === "uk" ? ed() : td()
  },
  rd = () => "Verification code expired. Please request a new one.",
  ad = () => "Código de verificação expirado. Por favor, solicite um novo.",
  id = () => "验证码已过期，请重新获取。",
  od = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  sd = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  cd = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  ud = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  ld = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  dd = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  _d = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  fd = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  hd = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  md = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? rd() : e === "pt" ? ad() : e === "ch" ? id() : e === "de" ? od() : e === "es" ? sd() : e === "fr" ? cd() : e === "it" ? ud() : e === "jp" ? ld() : e === "pl" ? dd() : e === "ru" ? _d() : e === "uk" ? fd() : hd()
  },
  pd = () => "Griefing",
  gd = () => "Griefing",
  wd = () => "破坏行为",
  yd = () => "Griefing",
  vd = () => "Griefing",
  bd = () => "Griefing",
  Ed = () => "Griefing",
  Td = () => "グリーフィング",
  Sd = () => "Griefing",
  Od = () => "Гриферство",
  Id = () => "Гріфінг",
  Ad = () => "Griefing",
  kd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? pd() : e === "pt" ? gd() : e === "ch" ? wd() : e === "de" ? yd() : e === "es" ? vd() : e === "fr" ? bd() : e === "it" ? Ed() : e === "jp" ? Td() : e === "pl" ? Sd() : e === "ru" ? Od() : e === "uk" ? Id() : Ad()
  },
  Rd = () => "Messed up with other's artworks",
  Nd = () => "Estragou os desenhos dos outros",
  xd = () => "破坏了他人的作品",
  Dd = () => "Kunstwerke anderer beschädigt",
  Ld = () => "Arruinó las obras de arte de otros",
  Md = () => "A abîmé les œuvres des autres",
  Pd = () => "Ha rovinato i disegni degli altri",
  Ud = () => "他人の作品を荒らした",
  Cd = () => "Zniszczył prace innych",
  jd = () => "Испортил чужие рисунки",
  Fd = () => "Зіпсував роботи інших",
  Bd = () => "Phá hỏng tranh của người khác",
  zd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Rd() : e === "pt" ? Nd() : e === "ch" ? xd() : e === "de" ? Dd() : e === "es" ? Ld() : e === "fr" ? Md() : e === "it" ? Pd() : e === "jp" ? Ud() : e === "pl" ? Cd() : e === "ru" ? jd() : e === "uk" ? Fd() : Bd()
  },
  Vd = () => "Hate speech",
  Gd = () => "Discurso de Ódio",
  Wd = () => "仇恨言论",
  qd = () => "Hassrede",
  Kd = () => "Discurso de odio",
  Hd = () => "Discours haineux",
  Yd = () => "Discorso d'odio",
  Zd = () => "ヘイトスピーチ",
  $d = () => "Mowa nienawiści",
  Jd = () => "Речь ненависти",
  Xd = () => "Мова ворожнечі",
  Qd = () => "Ngôn từ thù hằn",
  e_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Vd() : e === "pt" ? Gd() : e === "ch" ? Wd() : e === "de" ? qd() : e === "es" ? Kd() : e === "fr" ? Hd() : e === "it" ? Yd() : e === "jp" ? Zd() : e === "pl" ? $d() : e === "ru" ? Jd() : e === "uk" ? Xd() : Qd()
  },
  t_ = () => "Racism, homophobia, hate groups, ...",
  n_ = () => "Racismo, homofobia, grupos de ódio, ...",
  r_ = () => "种族主义、恐同、仇恨团体等",
  a_ = () => "Rassismus, Homophobie, Hassgruppen, ...",
  i_ = () => "Racismo, homofobia, grupos de odio, ...",
  o_ = () => "Racisme, homophobie, groupes haineux, ...",
  s_ = () => "Razzismo, omofobia, gruppi d'odio, ...",
  c_ = () => "人種差別、同性愛差別、ヘイト団体など。",
  u_ = () => "Rasizm, homofobia, grupy nienawiści, ...",
  l_ = () => "Расизм, гомофобия, группы ненависти и т.п.",
  d_ = () => "Расизм, гомофобія, групи ненависті, ...",
  __ = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  f_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? t_() : e === "pt" ? n_() : e === "ch" ? r_() : e === "de" ? a_() : e === "es" ? i_() : e === "fr" ? o_() : e === "it" ? s_() : e === "jp" ? c_() : e === "pl" ? u_() : e === "ru" ? l_() : e === "uk" ? d_() : __()
  },
  h_ = () => "Inappropriate content",
  m_ = () => "Conteúdo inapropriado",
  p_ = () => "不当内容",
  g_ = () => "Unangemessene Inhalte",
  w_ = () => "Contenido inapropiado",
  y_ = () => "Contenu inapproprié",
  v_ = () => "Contenuto inappropriato",
  b_ = () => "不適切なコンテンツ",
  E_ = () => "Nieodpowiednie treści",
  T_ = () => "Неприемлемый контент",
  S_ = () => "Неприйнятний вміст",
  O_ = () => "Nội dung không phù hợp",
  I_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? h_() : e === "pt" ? m_() : e === "ch" ? p_() : e === "de" ? g_() : e === "es" ? w_() : e === "fr" ? y_() : e === "it" ? v_() : e === "jp" ? b_() : e === "pl" ? E_() : e === "ru" ? T_() : e === "uk" ? S_() : O_()
  },
  A_ = () => "Explicit, hateful, or illegal content",
  k_ = () => "Conteúdo explícito, de ódio ou ilegal",
  R_ = () => "露骨、仇恨或非法内容",
  N_ = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  x_ = () => "Contenido explícito, de odio o ilegal",
  D_ = () => "Contenu explicite, haineux ou illégal",
  L_ = () => "Contenuto esplicito, d'odio o illegale",
  M_ = () => "露骨、差別的、または違法なコンテンツ",
  P_ = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  U_ = () => "Откровенный, разжигающий ненависть или незаконный контент",
  C_ = () => "Відвертий, ворожий або незаконний вміст",
  j_ = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  F_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? A_() : e === "pt" ? k_() : e === "ch" ? R_() : e === "de" ? N_() : e === "es" ? x_() : e === "fr" ? D_() : e === "it" ? L_() : e === "jp" ? M_() : e === "pl" ? P_() : e === "ru" ? U_() : e === "uk" ? C_() : j_()
  },
  B_ = () => "Invalid captcha",
  z_ = () => "Captcha inválido",
  V_ = () => "验证码无效",
  G_ = () => "Ungültiges Captcha",
  W_ = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  q_ = () => "Captcha invalide",
  K_ = () => "Captcha non valido. Riprova.",
  H_ = () => "キャプチャが無効です。",
  Y_ = () => "Nieprawidłowy captcha",
  Z_ = () => "Неверная капча",
  $_ = () => "Неправильна капча",
  J_ = () => "Captcha không hợp lệ",
  X_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? B_() : e === "pt" ? z_() : e === "ch" ? V_() : e === "de" ? G_() : e === "es" ? W_() : e === "fr" ? q_() : e === "it" ? K_() : e === "jp" ? H_() : e === "pl" ? Y_() : e === "ru" ? Z_() : e === "uk" ? $_() : J_()
  },
  Q_ = () => "Invalid challenge response",
  ef = () => "Resposta de desafio inválida",
  tf = () => "质询响应无效",
  nf = () => "Ungültige Challenge-Antwort",
  rf = () => "Respuesta de desafío inválida",
  af = () => "Réponse au défi invalide",
  of = () => "Risposta alla sfida non valida",
  sf = () => "無効なチャレンジ応答",
  cf = () => "Nieprawidłowa odpowiedź na wyzwanie",
  uf = () => "Неверный ответ на вызов",
  lf = () => "Недійсна відповідь на виклик",
  df = () => "Phản hồi thử thách không hợp lệ",
  _f = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Q_() : e === "pt" ? ef() : e === "ch" ? tf() : e === "de" ? nf() : e === "es" ? rf() : e === "fr" ? af() : e === "it" ? of() : e === "jp" ? sf() : e === "pl" ? cf() : e === "ru" ? uf() : e === "uk" ? lf() : df()
  },
  ff = () => "Invalid code",
  hf = () => "Código inválido",
  mf = () => "验证码无效",
  pf = () => "Ungültiger Code",
  gf = () => "Código inválido",
  wf = () => "Code invalide",
  yf = () => "Codice non valido",
  vf = () => "無効なコードです。",
  bf = () => "Nieprawidłowy kod",
  Ef = () => "Неверный код",
  Tf = () => "Невірний код",
  Sf = () => "Mã không hợp lệ",
  Of = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ff() : e === "pt" ? hf() : e === "ch" ? mf() : e === "de" ? pf() : e === "es" ? gf() : e === "fr" ? wf() : e === "it" ? yf() : e === "jp" ? vf() : e === "pl" ? bf() : e === "ru" ? Ef() : e === "uk" ? Tf() : Sf()
  },
  If = () => "Invalid discord.",
  Af = () => "Discord inválido.",
  kf = () => "无效的 Discord。",
  Rf = () => "Ungültiger Discord.",
  Nf = () => "Discord inválido.",
  xf = () => "Discord invalide.",
  Df = () => "Discord non valido.",
  Lf = () => "無効なDiscordアカウントです。",
  Mf = () => "Nieprawidłowy Discord.",
  Pf = () => "Неверный Discord.",
  Uf = () => "Некоректний Discord.",
  Cf = () => "Discord không hợp lệ.",
  jf = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? If() : e === "pt" ? Af() : e === "ch" ? kf() : e === "de" ? Rf() : e === "es" ? Nf() : e === "fr" ? xf() : e === "it" ? Df() : e === "jp" ? Lf() : e === "pl" ? Mf() : e === "ru" ? Pf() : e === "uk" ? Uf() : Cf()
  },
  Ff = () => "The name contains disallowed characters or words. Please choose a different name.",
  Bf = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  zf = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Vf = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  Gf = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Wf = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  qf = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Kf = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  Hf = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Yf = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Zf = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  $f = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  vn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ff() : e === "pt" ? Bf() : e === "ch" ? zf() : e === "de" ? Vf() : e === "es" ? Gf() : e === "fr" ? Wf() : e === "it" ? qf() : e === "jp" ? Kf() : e === "pl" ? Hf() : e === "ru" ? Yf() : e === "uk" ? Zf() : $f()
  },
  Jf = () => "Invalid phone number",
  Xf = () => "Número de telefone inválido",
  Qf = () => "无效的电话号码",
  eh = () => "Ungültige Telefonnummer",
  th = () => "Número de teléfono inválido",
  nh = () => "Numéro de téléphone invalide",
  rh = () => "Numero di telefono non valido",
  ah = () => "無効な電話番号です。",
  ih = () => "Nieprawidłowy numer telefonu",
  oh = () => "Неверный номер телефона",
  sh = () => "Некоректний номер телефону",
  ch = () => "Số điện thoại không hợp lệ",
  uh = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Jf() : e === "pt" ? Xf() : e === "ch" ? Qf() : e === "de" ? eh() : e === "es" ? th() : e === "fr" ? nh() : e === "it" ? rh() : e === "jp" ? ah() : e === "pl" ? ih() : e === "ru" ? oh() : e === "uk" ? sh() : ch()
  },
  lh = () => "This phone number appears to be a landline. Please use a mobile number that can receive SMS.",
  dh = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  _h = () => "此电话号码似乎是固定电话。请使用可以接收短信的手机号码。",
  fh = () => "Diese Telefonnummer scheint ein Festnetzanschluss zu sein. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  hh = () => "Este número de teléfono parece ser fijo. Por favor, usa un número de celular que pueda recibir SMS.",
  mh = () => "Ce numéro de téléphone semble être un fixe. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  ph = () => "Questo numero di telefono sembra essere un fisso. Utilizza un numero di cellulare che possa ricevere SMS.",
  gh = () => "この電話番号は固定電話のようです。SMSを受信できる携帯電話番号をご使用ください。",
  wh = () => "Ten numer telefonu wydaje się być stacjonarny. Użyj numeru komórkowego, który może odbierać SMS-y.",
  yh = () => "Этот номер телефона является стационарным. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  vh = () => "Цей номер телефону є стаціонарним. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  bh = () => "Số điện thoại này có vẻ là số cố định. Vui lòng sử dụng số di động có thể nhận SMS.",
  Eh = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? lh() : e === "pt" ? dh() : e === "ch" ? _h() : e === "de" ? fh() : e === "es" ? hh() : e === "fr" ? mh() : e === "it" ? ph() : e === "jp" ? gh() : e === "pl" ? wh() : e === "ru" ? yh() : e === "uk" ? vh() : bh()
  },
  Th = () => "The new leader must be a member of the alliance",
  Sh = () => "O novo líder deve ser um membro da aliança",
  Oh = () => "新盟主必须是联盟成员",
  Ih = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Ah = () => "El nuevo líder debe ser miembro de la alianza",
  kh = () => "Le nouveau chef doit être membre de l’alliance",
  Rh = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Nh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  xh = () => "Nowy lider musi być członkiem sojuszu",
  Dh = () => "Новый лидер должен быть участником альянса",
  Lh = () => "Новий лідер має бути учасником альянсу",
  Mh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Ph = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Th() : e === "pt" ? Sh() : e === "ch" ? Oh() : e === "de" ? Ih() : e === "es" ? Ah() : e === "fr" ? kh() : e === "it" ? Rh() : e === "jp" ? Nh() : e === "pl" ? xh() : e === "ru" ? Dh() : e === "uk" ? Lh() : Mh()
  },
  Uh = () => "Leaderboard is temporarily disabled",
  Ch = () => "O ranking está temporariamente desativado",
  jh = () => "排行榜已暂时停用",
  Fh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Bh = () => "La clasificación está deshabilitada temporalmente",
  zh = () => "Le classement est temporairement désactivé",
  Vh = () => "La classifica è temporaneamente disattivata",
  Gh = () => "ランキングは一時的に無効になっています。",
  Wh = () => "Ranking jest tymczasowo wyłączony",
  qh = () => "Таблица лидеров временно отключена",
  Kh = () => "Таблиця лідерів тимчасово вимкнена",
  Hh = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  ue = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Uh() : e === "pt" ? Ch() : e === "ch" ? jh() : e === "de" ? Fh() : e === "es" ? Bh() : e === "fr" ? zh() : e === "it" ? Vh() : e === "jp" ? Gh() : e === "pl" ? Wh() : e === "ru" ? qh() : e === "uk" ? Kh() : Hh()
  },
  Yh = () => "Location name is too big (max. 128 characters)",
  Zh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  $h = () => "位置名称过长（最大 128 个字符）",
  Jh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  Xh = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  Qh = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  em = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  tm = () => "場所の名前が長すぎます（最大128文字）。",
  nm = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  rm = () => "Название локации слишком длинное (макс. 128 символов)",
  am = () => "Назва локації надто довга (макс. 128 символів)",
  im = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  om = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Yh() : e === "pt" ? Zh() : e === "ch" ? $h() : e === "de" ? Jh() : e === "es" ? Xh() : e === "fr" ? Qh() : e === "it" ? em() : e === "jp" ? tm() : e === "pl" ? nm() : e === "ru" ? rm() : e === "uk" ? am() : im()
  },
  sm = () => "Multi-accounting",
  cm = () => "Múltiplas contas",
  um = () => "多账号",
  lm = () => "Multi-Accounting",
  dm = () => "Multi-cuentas",
  _m = () => "Multi-comptes",
  fm = () => "Multi-account",
  hm = () => "複数アカウント使用",
  mm = () => "Multi-konta",
  pm = () => "Мультиаккаунт",
  gm = () => "Мультиакаунтинг",
  wm = () => "Nhiều tài khoản",
  ym = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? sm() : e === "pt" ? cm() : e === "ch" ? um() : e === "de" ? lm() : e === "es" ? dm() : e === "fr" ? _m() : e === "it" ? fm() : e === "jp" ? hm() : e === "pl" ? mm() : e === "ru" ? pm() : e === "uk" ? gm() : wm()
  },
  vm = () => "Use more than one account to paint pixels",
  bm = () => "Usar mais de uma conta para pintar",
  Em = () => "使用多个账号绘制像素",
  Tm = () => "Mehr als ein Konto zum Malen verwenden",
  Sm = () => "Uso de más de una cuenta para pintar píxeles",
  Om = () => "Utiliser plus d’un compte pour peindre",
  Im = () => "Usare più di un account per dipingere",
  Am = () => "複数のアカウントを使ってピクセルを塗った。",
  km = () => "Używanie więcej niż jednego konta do malowania pikseli",
  Rm = () => "Использование более одного аккаунта для рисования",
  Nm = () => "Використання більше ніж одного акаунта для малювання",
  xm = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Dm = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? vm() : e === "pt" ? bm() : e === "ch" ? Em() : e === "de" ? Tm() : e === "es" ? Sm() : e === "fr" ? Om() : e === "it" ? Im() : e === "jp" ? Am() : e === "pl" ? km() : e === "ru" ? Rm() : e === "uk" ? Nm() : xm()
  },
  Lm = n => `You can change your name again in ${n.days} days`,
  Mm = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  Pm = n => `你可以在 ${n.days} 天后再次修改名称`,
  Um = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  Cm = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  jm = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  Fm = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  Bm = n => `${n.days}日後に再び名前を変更できます。`,
  zm = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  Vm = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  Gm = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Wm = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  qm = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Lm(n) : e === "pt" ? Mm(n) : e === "ch" ? Pm(n) : e === "de" ? Um(n) : e === "es" ? Cm(n) : e === "fr" ? jm(n) : e === "it" ? Fm(n) : e === "jp" ? Bm(n) : e === "pl" ? zm(n) : e === "ru" ? Vm(n) : e === "uk" ? Gm(n) : Wm(n)
  },
  Km = () => "No internet access or the servers are offline. Try again later.",
  Hm = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Ym = () => "没有网络连接或服务器已离线。请稍后重试。",
  Zm = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  $m = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Jm = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  Xm = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  Qm = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  ep = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  tp = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  np = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  rp = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  ap = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Km() : e === "pt" ? Hm() : e === "ch" ? Ym() : e === "de" ? Zm() : e === "es" ? $m() : e === "fr" ? Jm() : e === "it" ? Xm() : e === "jp" ? Qm() : e === "pl" ? ep() : e === "ru" ? tp() : e === "uk" ? np() : rp()
  },
  ip = () => "You are not allowed to verify a phone number. Try refreshing the page",
  op = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  sp = () => "您无权验证电话号码。请尝试刷新页面。",
  cp = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  up = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  lp = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  dp = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  _p = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  fp = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  hp = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  mp = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  pp = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  gp = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ip() : e === "pt" ? op() : e === "ch" ? sp() : e === "de" ? cp() : e === "es" ? up() : e === "fr" ? lp() : e === "it" ? dp() : e === "jp" ? _p() : e === "pl" ? fp() : e === "ru" ? hp() : e === "uk" ? mp() : pp()
  },
  wp = () => "Operation not allowed. Maybe you have too many favorite locations.",
  yp = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  vp = () => "操作不被允许。你的收藏位置可能过多。",
  bp = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Ep = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Tp = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Sp = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Op = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  Ip = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Ap = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  kp = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  Rp = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Np = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? wp() : e === "pt" ? yp() : e === "ch" ? vp() : e === "de" ? bp() : e === "es" ? Ep() : e === "fr" ? Tp() : e === "it" ? Sp() : e === "jp" ? Op() : e === "pl" ? Ip() : e === "ru" ? Ap() : e === "uk" ? kp() : Rp()
  },
  xp = () => "You are trying to paint with a color you do not own",
  Dp = () => "Você está tentando pintar com uma cor que não possui",
  Lp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Mp = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Pp = () => "Estás intentando pintar con un color que no posees",
  Up = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Cp = () => "Stai cercando di dipingere con un colore che non possiedi",
  jp = () => "所持していない色で塗ろうとしています。",
  Fp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Bp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  zp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Vp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  bn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? xp() : e === "pt" ? Dp() : e === "ch" ? Lp() : e === "de" ? Mp() : e === "es" ? Pp() : e === "fr" ? Up() : e === "it" ? Cp() : e === "jp" ? jp() : e === "pl" ? Fp() : e === "ru" ? Bp() : e === "uk" ? zp() : Vp()
  },
  Gp = () => "Phone already used",
  Wp = () => "Telefone já usado",
  qp = () => "电话号码已被使用",
  Kp = () => "Telefonnummer bereits verwendet",
  Hp = () => "Teléfono ya utilizado",
  Yp = () => "Téléphone déjà utilisé",
  Zp = () => "Telefono già utilizzato",
  $p = () => "この電話番号は既に使用されています。",
  Jp = () => "Numer telefonu jest już używany",
  Xp = () => "Телефон уже используется",
  Qp = () => "Номер телефону вже використовується",
  eg = () => "Số điện thoại đã được sử dụng",
  tg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Gp() : e === "pt" ? Wp() : e === "ch" ? qp() : e === "de" ? Kp() : e === "es" ? Hp() : e === "fr" ? Yp() : e === "it" ? Zp() : e === "jp" ? $p() : e === "pl" ? Jp() : e === "ru" ? Xp() : e === "uk" ? Qp() : eg()
  },
  ng = () => "This phone number's region is not supported",
  rg = () => "A região deste número de telefone não é suportada",
  ag = () => "此电话号码的地区不受支持",
  ig = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  og = () => "La región de este número de teléfono no es compatible",
  sg = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  cg = () => "La regione di questo numero di telefono non è supportata",
  ug = () => "この電話番号の地域はサポートされていません",
  lg = () => "Region tego numeru telefonu nie jest obsługiwany",
  dg = () => "Регион этого номера телефона не поддерживается",
  _g = () => "Регіон цього номера телефону не підтримується",
  fg = () => "Vùng của số điện thoại này không được hỗ trợ",
  hg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ng() : e === "pt" ? rg() : e === "ch" ? ag() : e === "de" ? ig() : e === "es" ? og() : e === "fr" ? sg() : e === "it" ? cg() : e === "jp" ? ug() : e === "pl" ? lg() : e === "ru" ? dg() : e === "uk" ? _g() : fg()
  },
  mg = () => "Refresh your page to get the latest update",
  pg = () => "Recarregue sua página para obter as últimas atualizações",
  gg = () => "刷新页面以获取最新更新",
  wg = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  yg = () => "Actualiza la página para obtener la última versión",
  vg = () => "Actualisez la page pour obtenir les dernières mises à jour",
  bg = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Eg = () => "最新の状態にするにはページを再読み込みしてください。",
  Tg = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Sg = () => "Обновите страницу, чтобы получить последние изменения",
  Og = () => "Оновіть сторінку, щоб отримати останні оновлення",
  Ig = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  En = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? mg() : e === "pt" ? pg() : e === "ch" ? gg() : e === "de" ? wg() : e === "es" ? yg() : e === "fr" ? vg() : e === "it" ? bg() : e === "jp" ? Eg() : e === "pl" ? Tg() : e === "ru" ? Sg() : e === "uk" ? Og() : Ig()
  },
  Ag = () => "The request timed out. Please try again.",
  kg = () => "A solicitação expirou. Por favor, tente novamente.",
  Rg = () => "请求超时。请重试。",
  Ng = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  xg = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Dg = () => "La requête a expiré. Veuillez réessayer.",
  Lg = () => "La richiesta è scaduta. Riprova.",
  Mg = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Pg = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  Ug = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Cg = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  jg = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  Fg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ag() : e === "pt" ? kg() : e === "ch" ? Rg() : e === "de" ? Ng() : e === "es" ? xg() : e === "fr" ? Dg() : e === "it" ? Lg() : e === "jp" ? Mg() : e === "pl" ? Pg() : e === "ru" ? Ug() : e === "uk" ? Cg() : jg()
  },
  Bg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  zg = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Vg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Gg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Wg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  qg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Kg = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  Hg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Yg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Zg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  $g = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Jg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Xg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Bg() : e === "pt" ? zg() : e === "ch" ? Vg() : e === "de" ? Gg() : e === "es" ? Wg() : e === "fr" ? qg() : e === "it" ? Kg() : e === "jp" ? Hg() : e === "pl" ? Yg() : e === "ru" ? Zg() : e === "uk" ? $g() : Jg()
  },
  Qg = () => "The service is currently unavailable. Please try again later.",
  ew = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  tw = () => "服务当前不可用。请稍后再试。",
  nw = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  rw = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  aw = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  iw = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  ow = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  sw = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  cw = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  uw = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  lw = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  dw = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Qg() : e === "pt" ? ew() : e === "ch" ? tw() : e === "de" ? nw() : e === "es" ? rw() : e === "fr" ? aw() : e === "it" ? iw() : e === "jp" ? ow() : e === "pl" ? sw() : e === "ru" ? cw() : e === "uk" ? uw() : lw()
  },
  _w = () => "Too many attempts. Please try again later",
  fw = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  hw = () => "尝试次数过多，请稍后再试",
  mw = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  pw = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  gw = () => "Trop de tentatives. Veuillez réessayer plus tard",
  ww = () => "Troppi tentativi. Riprova più tardi.",
  yw = () => "試行回数が多すぎます。後で再度お試しください。",
  vw = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  bw = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Ew = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  Tw = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  Tn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? _w() : e === "pt" ? fw() : e === "ch" ? hw() : e === "de" ? mw() : e === "es" ? pw() : e === "fr" ? gw() : e === "it" ? ww() : e === "jp" ? yw() : e === "pl" ? vw() : e === "ru" ? bw() : e === "uk" ? Ew() : Tw()
  },
  Sw = () => "The typed username does not match your current username.",
  Ow = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  Iw = () => "输入的用户名与当前用户名不匹配。",
  Aw = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  kw = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  Rw = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Nw = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  xw = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Dw = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Lw = () => "Введённое имя пользователя не совпадает с текущим.",
  Mw = () => "Введене імʼя користувача не збігається з поточним.",
  Pw = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  Uw = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Sw() : e === "pt" ? Ow() : e === "ch" ? Iw() : e === "de" ? Aw() : e === "es" ? kw() : e === "fr" ? Rw() : e === "it" ? Nw() : e === "jp" ? xw() : e === "pl" ? Dw() : e === "ru" ? Lw() : e === "uk" ? Mw() : Pw()
  },
  Cw = () => "Unexpected server error. Try again later.",
  jw = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  Fw = () => "服务器出现意外错误。请稍后再试。",
  Bw = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  zw = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Vw = () => "Erreur serveur inattendue. Réessayez plus tard.",
  Gw = () => "Errore imprevisto del server. Riprova più tardi.",
  Ww = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  qw = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Kw = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  Hw = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Yw = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  f = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Cw() : e === "pt" ? jw() : e === "ch" ? Fw() : e === "de" ? Bw() : e === "es" ? zw() : e === "fr" ? Vw() : e === "it" ? Gw() : e === "jp" ? Ww() : e === "pl" ? qw() : e === "ru" ? Kw() : e === "uk" ? Hw() : Yw()
  },
  Zw = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  $w = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Jw = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  Xw = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  Qw = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  ey = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  ty = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  ny = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  ry = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  ay = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  iy = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  oy = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  sy = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Zw() : e === "pt" ? $w() : e === "ch" ? Jw() : e === "de" ? Xw() : e === "es" ? Qw() : e === "fr" ? ey() : e === "it" ? ty() : e === "jp" ? ny() : e === "pl" ? ry() : e === "ru" ? ay() : e === "uk" ? iy() : oy()
  },
  cy = () => "Failed to load WebAssembly module. Try to use another browser.",
  uy = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  ly = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  dy = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  _y = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  fy = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  hy = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  my = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  py = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  gy = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  wy = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  yy = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  vy = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? cy() : e === "pt" ? uy() : e === "ch" ? ly() : e === "de" ? dy() : e === "es" ? _y() : e === "fr" ? fy() : e === "it" ? hy() : e === "jp" ? my() : e === "pl" ? py() : e === "ru" ? gy() : e === "uk" ? wy() : yy()
  },
  by = () => "You already have this item. Please refresh the page.",
  Ey = () => "Você já possui este item. Atualize a página.",
  Ty = () => "你已经拥有此物品。请刷新页面。",
  Sy = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Oy = () => "Ya tienes este ítem. Actualiza la página.",
  Iy = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Ay = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  ky = () => "このアイテムはすでに所持しています。ページを更新してください。",
  Ry = () => "Masz już ten przedmiot. Odśwież stronę.",
  Ny = () => "У вас уже есть этот предмет. Обновите страницу.",
  xy = () => "У вас уже є цей предмет. Оновіть сторінку.",
  Dy = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  Sn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? by() : e === "pt" ? Ey() : e === "ch" ? Ty() : e === "de" ? Sy() : e === "es" ? Oy() : e === "fr" ? Iy() : e === "it" ? Ay() : e === "jp" ? ky() : e === "pl" ? Ry() : e === "ru" ? Ny() : e === "uk" ? xy() : Dy()
  },
  Ly = () => "You are already in an alliance",
  My = () => "Você já está em uma aliança",
  Py = () => "你已经在一个联盟中",
  Uy = () => "Du bist bereits in einer Allianz",
  Cy = () => "Ya estás en una alianza",
  jy = () => "Vous êtes déjà dans une alliance",
  Fy = () => "Sei già in un'alleanza",
  By = () => "すでにアライアンスに所属しています。",
  zy = () => "Jesteś już w sojuszu",
  Vy = () => "Вы уже состоите в альянсе",
  Gy = () => "Ви вже перебуваєте в альянсі",
  Wy = () => "Bạn đã ở trong một liên minh",
  qy = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ly() : e === "pt" ? My() : e === "ch" ? Py() : e === "de" ? Uy() : e === "es" ? Cy() : e === "fr" ? jy() : e === "it" ? Fy() : e === "jp" ? By() : e === "pl" ? zy() : e === "ru" ? Vy() : e === "uk" ? Gy() : Wy()
  },
  Ky = () => "You are not allowed to do this",
  Hy = () => "Você não tem permissão para fazer isso",
  Yy = () => "你无权执行此操作",
  Zy = () => "Du bist dazu nicht berechtigt",
  $y = () => "No tienes permiso para hacer esto",
  Jy = () => "Vous n’êtes pas autorisé à faire cela",
  Xy = () => "Non hai il permesso di farlo",
  Qy = () => "この操作を行う権限がありません。",
  ev = () => "Nie masz uprawnień, aby to zrobić",
  tv = () => "У вас нет прав для этого действия",
  nv = () => "Ви не маєте права це робити",
  rv = () => "Bạn không có quyền làm việc này",
  le = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ky() : e === "pt" ? Hy() : e === "ch" ? Yy() : e === "de" ? Zy() : e === "es" ? $y() : e === "fr" ? Jy() : e === "it" ? Xy() : e === "jp" ? Qy() : e === "pl" ? ev() : e === "ru" ? tv() : e === "uk" ? nv() : rv()
  },
  av = () => "You do not have enough Droplets to buy this item.",
  iv = () => "Você não tem gotas suficientes para comprar este item.",
  ov = () => "你的水滴不足，无法购买此物品。",
  sv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  cv = () => "No tienes suficientes gotas para comprar este ítem.",
  uv = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  lv = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  dv = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  _v = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  fv = () => "У вас недостаточно droplets для покупки этого предмета.",
  hv = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  mv = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  On = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? av() : e === "pt" ? iv() : e === "ch" ? ov() : e === "de" ? sv() : e === "es" ? cv() : e === "fr" ? uv() : e === "it" ? lv() : e === "jp" ? dv() : e === "pl" ? _v() : e === "ru" ? fv() : e === "uk" ? hv() : mv()
  },
  pv = () => "You need to be logged in to paint",
  gv = () => "Você precisa estar conectado para pintar",
  wv = () => "你需要登录才能进行绘制",
  yv = () => "Du musst eingeloggt sein, um zu malen",
  vv = () => "Debes iniciar sesión para pintar",
  bv = () => "Vous devez être connecté pour peindre",
  Ev = () => "Devi avere effettuato l'accesso per dipingere",
  Tv = () => "ペイントするにはログインが必要です。",
  Sv = () => "Musisz być zalogowany, aby malować",
  Ov = () => "Чтобы рисовать, нужно войти в аккаунт",
  Iv = () => "Щоб малювати, необхідно увійти в акаунт",
  Av = () => "Bạn cần đăng nhập để tô",
  In = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? pv() : e === "pt" ? gv() : e === "ch" ? wv() : e === "de" ? yv() : e === "es" ? vv() : e === "fr" ? bv() : e === "it" ? Ev() : e === "jp" ? Tv() : e === "pl" ? Sv() : e === "ru" ? Ov() : e === "uk" ? Iv() : Av()
  },
  kv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Rv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Nv = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  xv = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Dv = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Lv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Mv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Pv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  Uv = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Cv = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  jv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  Fv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Bv = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? kv() : e === "pt" ? Rv() : e === "ch" ? Nv() : e === "de" ? xv() : e === "es" ? Dv() : e === "fr" ? Lv() : e === "it" ? Mv() : e === "jp" ? Pv() : e === "pl" ? Uv() : e === "ru" ? Cv() : e === "uk" ? jv() : Fv()
  },
  zv = n => `Your account has been suspended out until ${n.until}`,
  Vv = n => `A sua conta está suspensa até ${n.until}`,
  Gv = n => `你的账号已被暂停至 ${n.until}`,
  Wv = n => `Dein Konto ist gesperrt bis ${n.until}`,
  qv = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  Kv = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  Hv = n => `Il tuo account è sospeso fino al ${n.until}`,
  Yv = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  Zv = n => `Twoje konto zostało zawieszone do ${n.until}`,
  $v = n => `Ваш аккаунт заблокирован до ${n.until}`,
  Jv = n => `Ваш акаунт призупинено до ${n.until}`,
  Xv = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  An = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? zv(n) : e === "pt" ? Vv(n) : e === "ch" ? Gv(n) : e === "de" ? Wv(n) : e === "es" ? qv(n) : e === "fr" ? Kv(n) : e === "it" ? Hv(n) : e === "jp" ? Yv(n) : e === "pl" ? Zv(n) : e === "ru" ? $v(n) : e === "uk" ? Jv(n) : Xv(n)
  };
let R;
const ae = new Array(128).fill(void 0);
ae.push(void 0, null, !0, !1);

function I(n) {
  return ae[n]
}
const ar = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && ar.decode();
let Se = null;

function Re() {
  return (Se === null || Se.byteLength === 0) && (Se = new Uint8Array(R.memory.buffer)), Se
}

function Oe(n, t) {
  return n = n >>> 0, ar.decode(Re().subarray(n, n + t))
}
let Ne = ae.length;

function x(n) {
  Ne === ae.length && ae.push(ae.length + 1);
  const t = Ne;
  return Ne = ae[t], ae[t] = n, t
}

function ne(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    R.__wbindgen_export_0(x(e))
  }
}

function de(n) {
  return n == null
}

function Qv(n) {
  n < 132 || (ae[n] = Ne, Ne = n)
}

function kn(n) {
  const t = I(n);
  return Qv(n), t
}
const Rn = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  R.__wbindgen_export_1.get(n.dtor)(n.a, n.b)
});

function eb(n, t, e, r) {
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
        --a.cnt === 0 ? (R.__wbindgen_export_1.get(a.dtor)(s, a.b), Rn.unregister(a)) : a.a = s
      }
    };
  return i.original = a, Rn.register(i, a, a), i
}
let _e = null;

function mt() {
  return (_e === null || _e.buffer.detached === !0 || _e.buffer.detached === void 0 && _e.buffer !== R.memory.buffer) && (_e = new DataView(R.memory.buffer)), _e
}
let he = 0;
const lt = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  tb = typeof lt.encodeInto == "function" ? function(n, t) {
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
    return Re().subarray(l, l + s.length).set(s), he = s.length, l
  }
  let r = n.length,
    a = t(r, 1) >>> 0;
  const i = Re();
  let o = 0;
  for (; o < r; o++) {
    const s = n.charCodeAt(o);
    if (s > 127) break;
    i[a + o] = s
  }
  if (o !== r) {
    o !== 0 && (n = n.slice(o)), a = e(a, r, r = o + n.length * 3, 1) >>> 0;
    const s = Re().subarray(a + o, a + r),
      l = tb(n, s);
    o += l.written, a = e(a, r, o, 1) >>> 0
  }
  return he = o, a
}

function nb(n) {
  const t = Vt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = he;
  R.set_fingerprint(t, e)
}

function rb(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return Re().set(n, e / 1), he = n.length, e
}

function ab(n) {
  const t = rb(n, R.__wbindgen_export_2),
    e = he;
  R.set_telemetry(t, e)
}

function Gt(n) {
  R.set_user_id(n)
}

function ib(n) {
  R.set_automated_browser(n)
}

function ob(n) {
  let t, e;
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16),
      o = Vt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
      s = he;
    R.get_pawtected_endpoint_payload(i, o, s);
    var r = mt().getInt32(i + 0, !0),
      a = mt().getInt32(i + 4, !0);
    return t = r, e = a, Oe(r, a)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export_4(t, e, 1)
  }
}

function sb(n) {
  const t = Vt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = he;
  R.request_url(t, e)
}

function cb(n) {
  R.set_automated_clicks(n)
}

function ub() {
  R.init_listeners()
}

function lb(n, t, e) {
  R.__wbindgen_export_5(n, t, x(e))
}
async function db(n, t) {
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

function _b() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_addEventListener_90e553fdce254421 = function() {
    return ne(function(t, e, r, a) {
      I(t).addEventListener(Oe(e, r), I(a))
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
      const a = I(t).call(I(e), I(r));
      return x(a)
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
    return de(e) ? 0 : x(e)
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
    const a = new Uint8Array(I(t), e >>> 0, r >>> 0);
    return x(a)
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
    return de(t) ? 0 : x(t)
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return de(t) ? 0 : x(t)
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return de(t) ? 0 : x(t)
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return de(t) ? 0 : x(t)
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, r) {
    const a = I(t).subarray(e >>> 0, r >>> 0);
    return x(a)
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    const e = I(t).versions;
    return x(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = I(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbindgen_closure_wrapper58 = function(t, e, r) {
    const a = eb(t, e, 3, lb);
    return x(a)
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
      a = typeof r == "number" ? r : void 0;
    mt().setFloat64(t + 8, de(a) ? 0 : a, !0), mt().setInt32(t + 0, !de(a), !0)
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

function fb(n, t) {
  return R = n.exports, ir.__wbindgen_wasm_module = t, _e = null, Se = null, R
}
async function ir(n) {
  if (R !== void 0) return R;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = _b();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await db(await n, t);
  return fb(e, r)
}
const hb = `
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
async function mb() {
  try {
    const n = await fetch(`${Ct}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await pb(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function pb(n, t) {
  return new Promise(e => {
    const r = new Blob([hb], {
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
const Wt = 3;
var Ve, Ge;
class gb {
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
const z = new gb;
async function Nn(n) {
  return n === 1 ? wb() : n === 2 || n === 3 ? vb(n) : n === 4 ? yb() : !1
}
async function wb() {
  for (let n = 0; n < Wt; n++) try {
    const t = await mb();
    if (!t) continue;
    return await ce.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}

function yb() {
  return new Promise(n => {
    z.errorCount = 0, z.current = {
      tier: 4,
      resolve: n
    }
  })
}

function vb(n) {
  return new Promise(t => {
    z.errorCount = 0, z.current = {
      tier: n,
      resolve: t
    }
  })
}

function w0(n) {
  const t = z.current;
  if (!t) return;
  const e = t.tier === 2 ? "turnstile" : "hcaptcha";
  return ce.postCaptchaSession({
    provider: e,
    token: n
  }).then(r => ce.verifyChallenge({
    type: "captcha",
    sessionId: r.sessionId
  })).then(() => {
    t.resolve(!0), z.current = null
  }).catch(() => {
    z.errorCount += 1, z.errorCount >= Wt && (t.resolve(!1), z.current = null)
  })
}

function y0() {
  const n = z.current;
  n && (z.errorCount += 1, z.errorCount >= Wt && (n.resolve(!1), z.current = null))
}

function v0() {
  const n = z.current;
  !n || n.tier !== 4 || (n.resolve(!0), z.current = null)
}

function b0() {
  z.current && (z.current.resolve(!1), z.current = null)
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const E0 = {
    griefing: kd(),
    "multi-accounting": ym(),
    "hate-speech": e_(),
    bot: As(),
    doxxing: Du(),
    "inappropriate-content": I_(),
    other: Qs()
  },
  T0 = {
    doxxing: qu(),
    "hate-speech": f_(),
    griefing: zd(),
    "multi-accounting": Dm(),
    bot: Bs(),
    "inappropriate-content": F_(),
    other: _c()
  },
  S0 = {
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
  O0 = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  bb = 365 * 24 * 60 * 60 * 1e3;

function or(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function I0(n, t = Date.now()) {
  const e = or(n);
  return e === null ? !1 : e - t >= bb
}

function A0(n, t = Date.now()) {
  const e = or(n);
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
const Eb = 60,
  Tb = 100,
  Sb = 50,
  Ob = 2e3;
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

function Ib() {
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
const cr = new sr(Tb),
  ur = new sr(Sb);
let U = Ib(),
  pt = null,
  Dn = !1,
  k = null,
  lr = 0;

function k0() {
  Dn || typeof window > "u" || (Dn = !0, U.focusStartMs = performance.now(), U.windowStartMs = Date.now(), document.readyState === "complete" ? k = Mn() : window.addEventListener("load", () => {
    k = Mn()
  }, {
    once: !0
  }), window.addEventListener("pointermove", n => {
    const t = performance.now();
    t - U.lastMouseSampleMs < Eb || (U.lastMouseSampleMs = t, cr.push({
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
  }), Ub())
}

function Ab() {
  pt = kb();
  try {
    const n = pt,
      t = new Uint8Array(40),
      e = new DataView(t.buffer);
    e.setUint8(0, 1);
    let r = 0;
    n.isLinearMovement && (r |= 1), n.isConstantInterval && (r |= 2), n.hasZeroJitter && (r |= 4), k != null && k.hts && (r |= 8), navigator.webdriver && (r |= 16), jt.automatedClicks && (r |= 32), k != null && k.cdp && (r |= 64), k != null && k.odz && (r |= 128), e.setUint8(1, r), e.setUint8(2, Math.min(255, n.clickCount)), e.setUint16(3, Math.min(65535, Math.round(n.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, n.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(n.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, n.movementSegments)), e.setUint8(8, Math.min(255, Math.round(n.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, U.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, U.lastClickY))), e.setUint8(13, Math.min(255, k ? k.lc : 0)), e.setUint8(14, Math.min(255, k ? k.pc : 0)), e.setUint8(15, Math.min(255, k ? k.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(n.idleMs))), e.setUint16(18, Math.min(65535, Math.round(n.focusMs))), e.setUint16(20, Math.min(65535, Math.round(n.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(n.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(n.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(n.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(n.preClickPauseAvg))), e.setUint16(30, Math.min(65535, k ? k.sw : 0)), e.setUint16(32, Math.min(65535, k ? k.sh : 0)), e.setUint8(34, k ? k.fb & 255 : 0), e.setUint8(35, Math.min(255, k ? k.ptc : 0)), e.setUint8(36, k ? k.adf & 255 : 0);
    let a = 0;
    return k != null && k.cdr && (a |= 1), e.setUint8(37, a), e.setUint16(38, Math.min(65535, Math.round(lr * 100))), btoa(String.fromCharCode(...t))
  } catch {
    return ""
  }
}

function kb() {
  const n = Date.now(),
    t = U.windowStartMs,
    e = performance.now(),
    r = cr.drain(),
    a = ur.drain(),
    i = Mb(U, e);
  U.totalIdleMs = 0, U.totalFocusMs = 0, U.focusStartMs = e, U.windowStartMs = n;
  const o = Nb(r),
    s = xb(a),
    l = Lb(a, r),
    u = o.straightnessAvg > .95 && r.length > 10,
    _ = o.jitterAvg < .01 && r.length > 10,
    d = s.stddev / Math.max(1, s.avg) < .05 && a.length >= 5;
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
    clickCount: a.length,
    preClickPauseAvg: se(l),
    idleMs: i.idleMs,
    focusMs: i.focusMs,
    isLinearMovement: u,
    isConstantInterval: d,
    hasZeroJitter: _
  }, pt
}
const Rb = {
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

function Nb(n) {
  if (n.length < 3) return Rb;
  const t = [],
    e = [],
    r = [];
  let a = 0,
    i = 0,
    o = 0;
  const s = [];
  for (let y = 1; y < n.length; y++) {
    const S = n[y].x - n[y - 1].x,
      v = n[y].y - n[y - 1].y,
      $ = Math.max(1, n[y].t - n[y - 1].t),
      G = Math.sqrt(S * S + v * v),
      V = G / $;
    if (t.push(V), G < 3 && G > 0 && a++, $ > Ob) {
      if (y - i > 2) {
        o++;
        const te = Ln(n.slice(i, y));
        te >= 0 && s.push(te)
      }
      i = y
    }
    if (y >= 2) {
      const te = n[y - 1].x - n[y - 2].x,
        pe = n[y - 1].y - n[y - 2].y,
        yt = S * te + v * pe,
        qt = Math.sqrt(S * S + v * v),
        Kt = Math.sqrt(te * te + pe * pe);
      qt > 0 && Kt > 0 && e.push(1 - Math.abs(yt / (qt * Kt)));
      const gr = t[t.length - 2] || 0;
      r.push(Math.abs(V - gr))
    }
  }
  if (n.length - i > 2) {
    o++;
    const y = Ln(n.slice(i));
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
    microMovementCount: a,
    movementSegments: o,
    avgSegmentCurvature: C,
    velocityProfileSkew: j,
    angularVelocityStddev: H,
    speeds: t
  }
}

function xb(n) {
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

function Db(n, t) {
  let e = 0,
    r = n.length - 1,
    a = -1;
  for (; e <= r;) {
    const i = e + r >>> 1;
    n[i].t <= t ? (a = i, e = i + 1) : r = i - 1
  }
  return a
}

function Lb(n, t) {
  if (n.length === 0 || t.length < 2) return 0;
  let e = 0,
    r = 0;
  for (const a of n) {
    const i = Db(t, a);
    i >= 0 && (e += a - t[i].t, r++)
  }
  return r > 0 ? e / r : 0
}

function Mb(n, t) {
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
  let a = 0,
    i = 0;
  for (let o = 1; o < n.length; o++) {
    const s = n[o].x - n[o - 1].x,
      l = n[o].y - n[o - 1].y;
    if (a += Math.sqrt(s * s + l * l), o >= 2) {
      const u = n[o - 1].x - n[o - 2].x,
        _ = n[o - 1].y - n[o - 2].y,
        d = u * l - _ * s,
        m = u * s + _ * l;
      i += Math.abs(Math.atan2(d, m))
    }
  }
  return a > 0 ? i / a : 0
}

function Pb() {
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
    a.remove()
  } catch {}
  try {
    const a = navigator.userAgent,
      i = navigator.platform;
    if (a && i) {
      const o = /Windows/.test(a),
        s = /Macintosh|Mac OS X/.test(a),
        l = /Linux/.test(a) && !/Android/.test(a),
        u = /Android/.test(a),
        _ = /iPhone|iPad|iPod/.test(a),
        d = /^Win/.test(i),
        m = /^Mac/.test(i),
        g = /^Linux/.test(i),
        E = /^(iPhone|iPad|iPod)/.test(i);
      if ((o && !d || s && !m || l && !g || u && !g || _ && !E) && (n |= 4), t.userAgentData && t.userAgentData.platform) {
        const w = t.userAgentData.platform;
        (o && w !== "Windows" || s && w !== "macOS" || l && w !== "Linux" || u && w !== "Android") && (n |= 4)
      }
    }
  } catch {}
  try {
    const i = document.createElement("canvas").getContext("webgl");
    if (i) {
      const o = i.getExtension("WEBGL_debug_renderer_info");
      if (o) {
        const s = (i.getParameter(o.UNMASKED_RENDERER_WEBGL) || "").toLowerCase(),
          l = (i.getParameter(o.UNMASKED_VENDOR_WEBGL) || "").toLowerCase(),
          u = navigator.userAgent,
          _ = /Windows/.test(u),
          d = /Macintosh|Mac OS X/.test(u);
        (s.includes("apple") || l.includes("apple")) && _ && (n |= 8), s.includes("angle") && d && !s.includes("metal") && (n |= 8), (s.includes("d3d11") || s.includes("direct3d")) && d && (n |= 8)
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

function Mn() {
  const n = navigator,
    t = n.plugins ? n.plugins.length : 0,
    e = "ontouchstart" in window || n.maxTouchPoints > 0,
    r = n.maxTouchPoints || 0;
  let a = 0;
  typeof SharedArrayBuffer < "u" && (a |= 1), typeof Intl.Segmenter < "u" && (a |= 2), typeof CSS.highlights < "u" && (a |= 4), n.userAgentData && (a |= 8), window.chrome && (a |= 16), typeof window.InstallTrigger < "u" && (a |= 32), typeof window.WebKitMutationObserver < "u" && (a |= 64), typeof window.MSStream < "u" && (a |= 128);
  let i = 0;
  const o = ["webdriver", "languages", "plugins", "hardwareConcurrency", "platform", "userAgent", "vendor", "maxTouchPoints", "deviceMemory", "cookieEnabled", "pdfViewerEnabled", "connection"],
    s = ["width", "height", "colorDepth", "pixelDepth", "availWidth", "availHeight"],
    l = Function.prototype.toString;
  for (const w of o) try {
    const T = Object.getOwnPropertyDescriptor(Navigator.prototype, w);
    T && typeof T.get == "function" && l.call(T.get).includes("native code") === !1 && i++
  } catch {}
  for (const w of s) try {
    const T = Object.getOwnPropertyDescriptor(Screen.prototype, w);
    T && typeof T.get == "function" && l.call(T.get).includes("native code") === !1 && i++
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
    E = Pb();
  return {
    pc: t,
    sw: screen.width,
    sh: screen.height,
    hts: e,
    mtp: r,
    fb: a,
    ptc: i,
    ch: u,
    cdp: d,
    lc: m,
    odz: g,
    cdr: _,
    adf: E
  }
}

function Ub() {
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
      lr = a.reduce((o, s) => o + Math.abs(s - i), 0) / a.length
    }
  }
  requestAnimationFrame(e)
}

function se(n) {
  return Math.round(n * 1e3) / 1e3
}
const Cb = [{
    tileSize: 1e3,
    zoom: 11
  }],
  jb = 4,
  Fb = 6e3,
  Bb = [{
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
  zb = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Vb = {
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
  Gb = {
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
  Wb = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  qb = {
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
  Kb = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  me = {
    seasons: Cb,
    regionSize: jb,
    refreshIntervalMs: Fb,
    colors: Bb,
    errors: zb,
    items: Vb,
    products: Gb,
    countries: Wb,
    permissions: qb,
    settings: Kb
  },
  xt = me,
  Hb = me.seasons,
  dr = me.seasons.length - 1,
  R0 = me.seasons[dr].zoom,
  N0 = me.seasons[dr].tileSize,
  x0 = me.permissions,
  Yb = me.settings;

function D0(n) {
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
    const a = t(r);
    let i = e[a];
    i ? i.push(r) : e[a] = [r]
  }
  return e
}

function L0(n, t) {
  const e = {};
  for (const r of n) {
    const a = t(r);
    e[a] = r
  }
  return e
}
var We, qe;
class Zb {
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
      a = JSON.stringify(r),
      i = await Ot(a),
      o = await this.request("/paint", {
        method: "POST",
        body: a,
        headers: i,
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
      throw i === "timelapse_too_many_events" ? new h(Xg(), c.BAD_REQUEST) : new h(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
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
    const i = Pn(t, l => `t=(${l.tile[0]},${l.tile[1]}),s=${l.season}`),
      s = (await Promise.all(Object.values(i).map(async l => {
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
    const a = $b(t),
      i = await Jb(a),
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
      const l = await s.text();
      throw new Error(Gl({
        err: l
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
    const l = await this.request(`/staff/tools/select-area/s${t}/${e}/${r}?x0=${a}&y0=${i}&x1=${o}&y1=${s}`, {
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
    if (e.status === c.BAD_REQUEST) throw new Error(uh());
    if (e.status === c.CONFLICT) throw new Error(tg());
    if (e.status === c.FORBIDDEN) throw new Error(gp());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(Tn());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(hg());
    if (e.status === c.LOCKED) throw new Error(sy());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(Eh());
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
      if (r.status === c.GONE) throw new Error(md());
      if (r.status === c.BAD_REQUEST) throw new Error(Of());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Tn());
      if (r.status !== c.OK) throw new Error(f())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(_f());
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
      if (a === "invalid_name") throw new Error(vn());
      if (a === "invalid_discord") throw new Error(jf());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const i = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(qm({
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
    if (e.status === c.BAD_REQUEST) throw new Error(Uw());
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
    if (e.status === c.FORBIDDEN) throw new Error(Np());
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
    if (r.status === c.BAD_REQUEST) throw new Error(om());
    if (r.status !== c.OK) throw new Error(f())
  }
  async leaderboardPlayers(t) {
    const e = await this.request(`/leaderboard/player/${t}`);
    if (e.status !== c.OK) throw new Error(ue());
    return e.json()
  }
  async leaderboardAlliances(t) {
    const e = await this.request(`/leaderboard/alliance/${t}`);
    if (e.status !== c.OK) throw new Error(ue());
    return e.json()
  }
  async leaderboardRegions(t, e = 0) {
    const r = await this.request(`/leaderboard/region/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(ue())
  }
  async leaderboardRegionPlayers(t, e) {
    const r = await this.request(`/leaderboard/region/players/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(ue())
  }
  async leaderboardRegionAlliances(t, e) {
    const r = await this.request(`/leaderboard/region/alliances/${t}/${e}`);
    if (r.status === c.OK) return r.json();
    throw new Error(ue())
  }
  async leaderboardCountries(t) {
    const e = await this.request(`/leaderboard/country/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw new Error(ue())
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
      throw r.error === "max_characters" ? new Error(ts()) : r.error === "name_taken" ? new Error(Vo()) : r.error == "empty_name" ? new Error(hs()) : new Error(f())
    } else throw e.status === c.FORBIDDEN ? new Error(qy()) : new Error(f())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(le()) : e.status === c.BAD_REQUEST ? new Error(nd()) : new Error(f())
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
    if (r.status !== c.OK) throw r.status === c.FORBIDDEN ? new Error(le()) : new Error(f())
  }
  async allianceLeaderboard(t) {
    const e = await this.request(`/alliance/leaderboard/${t}`, {
      credentials: "include"
    });
    if (e.status === c.OK) return e.json();
    throw e.status === c.FORBIDDEN ? new Error(le()) : new Error(ue())
  }
  async getAllianceInvites() {
    const t = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (t.status === c.OK) return t.json();
    throw t.status === c.FORBIDDEN ? new Error(le()) : new Error(f())
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
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Ph()) : new Error(f())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(le()) : new Error(f())
  }
  async banAllianceUser(t) {
    const e = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: t
      }),
      method: "POST",
      credentials: "include"
    });
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(le()) : new Error(f())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(le()) : new Error(f())
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
      if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(Ro());
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
    for (const r of e.tickets) r.reports.sort((a, i) => xn[a.reason] - xn[i.reason]);
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
    let r;
    try {
      r = await fetch(`${this.url}${t}`, e), this.online = !0, this.updateServerTimeEstimate(r)
    } catch (i) {
      throw console.error("Fetch error:", i), this.online = !1, new Error(Cc(), {
        cause: i
      })
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Bv());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(Fg());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(dw())
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
      const l = typeof i.createdAt == "string" ? i.createdAt : i.CreatedAt ? new Date(i.CreatedAt).toISOString() : "",
        u = i.product_variant ?? i.productVariant,
        _ = u == null || u === "" ? null : Number(u);
      return {
        product_name: String(i.productName ?? i.product_name ?? ""),
        amount: Number(i.amount ?? 0),
        price: Number(i.price ?? 0),
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
      throw o === "invalid_name" ? new h(vn(), c.BAD_REQUEST) : new h(typeof o == "string" && o ? o : f(), c.BAD_REQUEST)
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
      throw i === "email_required" || i === "invalid_email" ? new h(Nl(), c.BAD_REQUEST) : new h(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const a = await r.json();
      if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
        const o = new h(typeof(a == null ? void 0 : a.userId) == "number" ? gl({
          userId: a.userId
        }) : al(), c.CONFLICT);
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
    var a, i, o, s, l;
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
          id: ((a = u.handledBy) == null ? void 0 : a.id) ?? 0,
          name: ((i = u.handledBy) == null ? void 0 : i.name) ?? "Moderator",
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
      r = await Ot(e),
      a = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (a.status === c.FORBIDDEN) {
      const i = await a.json();
      if ((i == null ? void 0 : i.error) === "challenge-required" && i.tier) {
        if (await Nn(i.tier)) return this.submitBanAppeal(t);
        throw new h(gn(), a.status)
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
    if (!r.ok) throw r.status === 500 ? new h(f(), r.status) : new h(X_(), r.status);
    return r.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < Hb.length,
      a = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Yb.tools.wayback.limit,
      i = Number.isFinite(t.tileX) && Number.isFinite(t.tileY) && Number.isInteger(t.tileX) && Number.isInteger(t.tileY) && t.tileX >= 0 && t.tileY >= 0,
      o = t.cursorTs !== void 0,
      s = t.cursorUserId !== void 0,
      l = t.cursorAllianceId !== void 0,
      u = t.cursorPixelsCount !== void 0,
      _ = o || s || l || u,
      d = o && s && l && u;
    let m = !0;
    return _ && (m = d && Number.isFinite(t.cursorTs) && Number.isInteger(t.cursorTs) && t.cursorTs >= 0 && t.cursorTs <= t.timestamp && Number.isFinite(t.cursorUserId) && Number.isInteger(t.cursorUserId) && t.cursorUserId >= 0 && Number.isFinite(t.cursorAllianceId) && Number.isInteger(t.cursorAllianceId) && t.cursorAllianceId >= 0 && Number.isFinite(t.cursorPixelsCount) && Number.isInteger(t.cursorPixelsCount) && t.cursorPixelsCount >= 0), !(!r || !a || !i || !e || !m)
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

function $b(n) {
  var m, g;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const E of n)
    if (E.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (m = xt.seasons) == null ? void 0 : m[t];
  if (!e) throw new Error("Invalid season selected for auto painter request.");
  const r = e.tileSize;
  let a = Number.POSITIVE_INFINITY,
    i = Number.POSITIVE_INFINITY,
    o = Number.NEGATIVE_INFINITY,
    s = Number.NEGATIVE_INFINITY;
  const l = n.map(E => {
      const w = Math.round(E.tile[0] * r + E.pixel[0]),
        T = Math.round(E.tile[1] * r + E.pixel[1]);
      return w < a && (a = w), T < i && (i = T), w > o && (o = w), T > s && (s = T), {
        x: w,
        y: T,
        colorIdx: E.colorIdx
      }
    }),
    u = o - a + 1,
    _ = s - i + 1;
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
    const N = E - a,
      j = ((w - i) * u + N) * 4,
      [H, y, S] = O.rgb;
    d[j] = H, d[j + 1] = y, d[j + 2] = S, d[j + 3] = T === 0 ? 1 : 255
  }
  return {
    data: d,
    width: u,
    height: _,
    offsetX: a,
    offsetY: i,
    season: t
  }
}
async function Jb(n) {
  const t = Xb(n.width, n.height),
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

function Xb(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ce = new Zb(Ct);
typeof window < "u" && br(() => {
  let n = ce.online;
  Er(() => {
    const t = ce.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
async function Ot(n) {
  const t = await ht(),
    e = Ab();
  return {
    "x-pawtect-token": await l0(n, e),
    "x-t": e,
    "x-fp": t
  }
}
const M0 = n => new URL(n, Ct).toString();

function _r(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function Qb(n, t) {
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

function e0(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class t0 {
  constructor(t) {
    F(this, "bytes");
    this.bytes = t ?? new Uint8Array
  }
  set(t, e) {
    const r = Math.floor(t / 8),
      a = t % 8;
    if (r >= this.bytes.length) {
      const o = new Uint8Array(r + 1),
        s = o.length - this.bytes.length;
      for (let l = 0; l < this.bytes.length; l++) o[l + s] = this.bytes[l];
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

function P0(n) {
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

function U0(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${e0(new Uint8Array(e))}`)
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

function C0(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    a = e.indexOf(";base64"),
    i = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const o = fr(r),
      s = new Uint8Array(o.byteLength);
    return s.set(o), new Blob([s], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function j0(...n) {
  return n.filter(Boolean).join(" ")
}
const n0 = typeof document < "u";
let Un = 0;
var Ke, He, Ye;
class r0 {
  constructor() {
    D(this, Ke, B(dt([])));
    D(this, He, B(dt([])));
    D(this, Ye, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    F(this, "addToast", t => {
      n0 && this.toasts.unshift(t)
    });
    F(this, "updateToast", ({
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
    F(this, "create", t => {
      var s;
      const {
        message: e,
        ...r
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : Un++, i = t.dismissable === void 0 ? !0 : t.dismissable, o = t.type === void 0 ? "default" : t.type;
      return Yt(() => {
        this.toasts.find(u => u.id === a) ? this.updateToast({
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
      const a = t instanceof Promise ? t : t();
      let i = r !== void 0;
      return a.then(o => {
        if (typeof o == "object" && o && "ok" in o && typeof o.ok == "boolean" && !o.ok) {
          i = !1;
          const s = a0(o);
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

function a0(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const Z = new r0;

function i0(n, t) {
  return Z.create({
    message: n,
    ...t
  })
}
var gt;
class F0 {
  constructor() {
    D(this, gt, Te(() => Z.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return M(b(this, gt))
  }
}
gt = new WeakMap;
const o0 = i0,
  s0 = Object.assign(o0, {
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
class c0 {
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
      return new t0(fr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
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
      return this.loading = !0, this.data = await ce.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ce.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (Xr("userId", {
        id: this.data.id
      }), u0(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), s0.warning(ap(), {
        duration: 1e4
      }), !1
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    var t;
    await ce.logout(), (t = this.channel) == null || t.postMessage(JSON.stringify({
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
    return Qb((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Ze = new WeakMap, $e = new WeakMap, Je = new WeakMap, Xe = new WeakMap, Qe = new WeakMap, et = new WeakMap, tt = new WeakMap, nt = new WeakMap;
const De = new c0;
let hr, Ie;
async function mr() {
  return Ie || (Ie = (async () => {
    var n;
    try {
      await ir(ra), (n = De.data) != null && n.id && Gt(De.data.id), ub();
      const t = fetch;
      return Object.assign(window, {
        fetch: pr((e, r) => {
          let a = null;
          return e instanceof Request ? a = e.url : e instanceof URL ? a = e.href : typeof e == "string" && (a = e), a !== null && !a.startsWith("/") && sb(a), t.call(window, e, r)
        })
      }), !0
    } catch (t) {
      return console.error("Error loading Pawtect WASM:", t), hr = t, Jr(t), Ie = void 0, !1
    }
  })()), Ie
}
async function u0(n) {
  await mr(), Gt(n)
}

function B0() {
  return Ie ?? Promise.resolve(!1)
}

function z0() {
  return hr
}
async function l0(n, t) {
  if (!await mr()) throw new Error(vy());
  const r = navigator.webdriver,
    a = await ht();
  Gt(De.data.id), nb(a), ib(r), cb(jt.automatedClicks);
  const i = Uint8Array.from(atob(t), o => o.charCodeAt(0));
  return ab(i), ob(n)
}

function pr(n) {
  return n.bind().bind()
}

function V0(n, t, e) {
  const r = {
    [n.name](...a) {
      return e(...a), t(...a)
    }
  } [n.name];
  return pr(r)
}
export {
  M0 as $, na as A, qu as B, dr as C, Bs as D, Dm as E, zd as F, Z as G, j0 as H, F0 as I, b0 as J, z as K, y0 as L, w0 as M, v0 as N, m0 as O, Ct as P, k0 as Q, mr as R, x0 as S, V0 as T, U0 as U, C0 as V, D0 as W, B0 as X, vy as Y, z0 as Z, Uw as _, ce as a, I0 as a0, T0 as a1, A0 as a2, O0 as a3, L0 as a4, R0 as a5, h0 as a6, Ro as a7, Vo as a8, ts as a9, tg as aA, hg as aB, En as aC, Fg as aD, Xg as aE, dw as aF, Tn as aG, sy as aH, Sn as aI, qy as aJ, le as aK, On as aL, In as aM, Bv as aN, An as aO, hs as aa, Qs as ab, _c as ac, pn as ad, Cc as ae, wn as af, yn as ag, al as ah, gl as ai, Gl as aj, nd as ak, md as al, _f as am, Of as an, jf as ao, vn as ap, uh as aq, Eh as ar, Ph as as, ue as at, om as au, qm as av, ap as aw, gp as ax, Np as ay, bn as az, E0 as b, As as c, Du as d, f as e, xt as f, kd as g, e_ as h, I_ as i, jt as j, N0 as k, g0 as l, ym as m, Nl as n, ht as o, X_ as p, p0 as q, Ot as r, S0 as s, s0 as t, De as u, Nn as v, gn as w, P0 as x, F_ as y, f_ as z
};