var vr = Object.defineProperty;
var $t = n => {
  throw TypeError(n)
};
var br = (n, t, e) => t in n ? vr(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : n[t] = e;
var F = (n, t, e) => br(n, typeof t != "symbol" ? t + "" : t, e),
  Er = (n, t, e) => t.has(n) || $t("Cannot " + e);
var v = (n, t, e) => (Er(n, t, "read from private field"), e ? e.call(n) : t.get(n)),
  D = (n, t, e) => t.has(n) ? $t("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
import {
  e as B,
  i as L,
  h as P,
  g as ft,
  bM as Tr,
  q as Sr,
  A as Zt,
  u as Se
} from "./C_-299ry.js";
import {
  g as p
} from "./BhCkpOlh.js";
const Ee = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  ie = globalThis,
  ke = "10.40.0";

function Mt() {
  return Pt(ie), ie
}

function Pt(n) {
  const t = n.__SENTRY__ = n.__SENTRY__ || {};
  return t.version = t.version || ke, t[ke] = t[ke] || {}
}

function Ut(n, t, e = ie) {
  const r = e.__SENTRY__ = e.__SENTRY__ || {},
    a = r[ke] = r[ke] || {};
  return a[n] || (a[n] = t())
}
const Or = "Sentry Logger ",
  Jt = {};

function Ir(n) {
  if (!("console" in ie)) return n();
  const t = ie.console,
    e = {},
    r = Object.keys(Jt);
  r.forEach(a => {
    const i = Jt[a];
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

function Ar() {
  jt().enabled = !0
}

function kr() {
  jt().enabled = !1
}

function Fn() {
  return jt().enabled
}

function Rr(...n) {
  Ct("log", ...n)
}

function Nr(...n) {
  Ct("warn", ...n)
}

function xr(...n) {
  Ct("error", ...n)
}

function Ct(n, ...t) {
  Ee && Fn() && Ir(() => {
    ie.console[n](`${Or}[${n}]:`, ...t)
  })
}

function jt() {
  return Ee ? Ut("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const lt = {
    enable: Ar,
    disable: kr,
    isEnabled: Fn,
    log: Rr,
    warn: Nr,
    error: xr
  },
  Dr = Object.prototype.toString;

function Lr(n, t) {
  return Dr.call(n) === `[object ${t}]`
}

function Mr(n) {
  return Lr(n, "Object")
}

function Pr(n) {
  return !!(n != null && n.then && typeof n.then == "function")
}

function Ur(n, t, e) {
  try {
    Object.defineProperty(n, t, {
      value: e,
      writable: !0,
      configurable: !0
    })
  } catch {
    Ee && lt.log(`Failed to add non-enumerable property "${t}" to object`, n)
  }
}
let ge;

function vt(n) {
  if (ge !== void 0) return ge ? ge(n) : n();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    e = ie;
  return t in e && typeof e[t] == "function" ? (ge = e[t], ge(n)) : (ge = null, n())
}

function kt() {
  return vt(() => Math.random())
}

function Cr() {
  return vt(() => Date.now())
}

function jr(n, t = 0) {
  return typeof n != "string" || t === 0 || n.length <= t ? n : `${n.slice(0,t)}...`
}

function Fr() {
  const n = ie;
  return n.crypto || n.msCrypto
}
let Et;

function Br() {
  return kt() * 16
}

function Re(n = Fr()) {
  try {
    if (n != null && n.randomUUID) return vt(() => n.randomUUID()).replace(/-/g, "")
  } catch {}
  return Et || (Et = "10000000100040008000" + 1e11), Et.replace(/[018]/g, t => (t ^ (Br() & 15) >> t / 4).toString(16))
}
const Bn = 1e3;

function zn() {
  return Cr() / Bn
}

function zr() {
  const {
    performance: n
  } = ie;
  if (!(n != null && n.now) || !n.timeOrigin) return zn;
  const t = n.timeOrigin;
  return () => (t + vt(() => n.now())) / Bn
}
let Xt;

function Vr() {
  return (Xt ?? (Xt = zr()))()
}

function Gr(n, t = {}) {
  if (t.user && (!n.ipAddress && t.user.ip_address && (n.ipAddress = t.user.ip_address), !n.did && !t.did && (n.did = t.user.id || t.user.email || t.user.username)), n.timestamp = t.timestamp || Vr(), t.abnormal_mechanism && (n.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (n.ignoreDuration = t.ignoreDuration), t.sid && (n.sid = t.sid.length === 32 ? t.sid : Re()), t.init !== void 0 && (n.init = t.init), !n.did && t.did && (n.did = `${t.did}`), typeof t.started == "number" && (n.started = t.started), n.ignoreDuration) n.duration = void 0;
  else if (typeof t.duration == "number") n.duration = t.duration;
  else {
    const e = n.timestamp - n.started;
    n.duration = e >= 0 ? e : 0
  }
  t.release && (n.release = t.release), t.environment && (n.environment = t.environment), !n.ipAddress && t.ipAddress && (n.ipAddress = t.ipAddress), !n.userAgent && t.userAgent && (n.userAgent = t.userAgent), typeof t.errors == "number" && (n.errors = t.errors), t.status && (n.status = t.status)
}

function Vn(n, t, e = 2) {
  if (!t || typeof t != "object" || e <= 0) return t;
  if (n && Object.keys(t).length === 0) return n;
  const r = {
    ...n
  };
  for (const a in t) Object.prototype.hasOwnProperty.call(t, a) && (r[a] = Vn(r[a], t[a], e - 1));
  return r
}

function Qt() {
  return Re()
}
const Rt = "_sentrySpan";

function en(n, t) {
  t ? Ur(n, Rt, t) : delete n[Rt]
}

function tn(n) {
  return n[Rt]
}
const Wr = 100;
class fe {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: Qt(),
      sampleRand: kt()
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
    }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, en(t, tn(this)), t
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
    }, this._session && Gr(this._session, {
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
      r = e instanceof fe ? e.getScopeData() : Mr(e) ? t : void 0,
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
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, en(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: Qt(),
      sampleRand: kt()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(t, e) {
    var i;
    const r = typeof e == "number" ? e : Wr;
    if (r <= 0) return this;
    const a = {
      timestamp: zn(),
      ...t,
      message: t.message ? jr(t.message, 2048) : t.message
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
      span: tn(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Vn(this._sdkProcessingMetadata, t, 2), this
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, e) {
    const r = (e == null ? void 0 : e.event_id) || Re();
    if (!this._client) return Ee && lt.warn("No client configured on scope - will not capture exception!"), r;
    const a = new Error("Sentry syntheticException");
    return this._client.captureException(t, {
      originalException: t,
      syntheticException: a,
      ...e,
      event_id: r
    }, this), r
  }
  captureMessage(t, e, r) {
    const a = (r == null ? void 0 : r.event_id) || Re();
    if (!this._client) return Ee && lt.warn("No client configured on scope - will not capture message!"), a;
    const i = (r == null ? void 0 : r.syntheticException) ?? new Error(t);
    return this._client.captureMessage(t, e, {
      originalException: t,
      syntheticException: i,
      ...r,
      event_id: a
    }, this), a
  }
  captureEvent(t, e) {
    const r = t.event_id || (e == null ? void 0 : e.event_id) || Re();
    return this._client ? (this._client.captureEvent(t, {
      ...e,
      event_id: r
    }, this), r) : (Ee && lt.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
      t(this)
    }), this._notifyingListeners = !1)
  }
}

function qr() {
  return Ut("defaultCurrentScope", () => new fe)
}

function Kr() {
  return Ut("defaultIsolationScope", () => new fe)
}
class Hr {
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
    return Pr(r) ? r.then(a => (this._popScope(), a), a => {
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

function Te() {
  const n = Mt(),
    t = Pt(n);
  return t.stack = t.stack || new Hr(qr(), Kr())
}

function Yr(n) {
  return Te().withScope(n)
}

function $r(n, t) {
  const e = Te();
  return e.withScope(() => (e.getStackTop().scope = n, t(n)))
}

function nn(n) {
  return Te().withScope(() => n(Te().getIsolationScope()))
}

function Zr() {
  return {
    withIsolationScope: nn,
    withScope: Yr,
    withSetScope: $r,
    withSetIsolationScope: (n, t) => nn(t),
    getCurrentScope: () => Te().getScope(),
    getIsolationScope: () => Te().getIsolationScope()
  }
}

function Gn(n) {
  const t = Pt(n);
  return t.acs ? t.acs : Zr()
}

function Jr() {
  const n = Mt();
  return Gn(n).getCurrentScope()
}

function Xr() {
  const n = Mt();
  return Gn(n).getIsolationScope()
}

function Qr(n, t) {
  return Jr().captureException(n, void 0)
}

function ea(n, t) {
  Xr().setContext(n, t)
}
const p0 = "https://maps.wplace.live",
  g0 = "8d582454-e5ec-4314-b1c2-89e460ac1d28",
  ta = "true",
  w0 = "0x4AAAAAABpHqZ-6i7uL0nmG",
  y0 = "https://backend.wplace.live/files",
  Ft = "https://backend.wplace.live",
  rn = "theme";
var Me, Pe, Ue, Ce, je, Fe, Be, ze, Ve, Ge;
class na {
  constructor() {
    D(this, Me, B(!1));
    D(this, Pe, B(!1));
    D(this, Ue, B(0));
    D(this, Ce, B(!1));
    D(this, je, B(ft(ra())));
    D(this, Fe, B(null));
    D(this, Be, B(!1));
    D(this, ze, B("custom-winter"));
    D(this, Ve, B(ft(Date.now())));
    D(this, Ge, B(void 0));
    setInterval(() => {
      P(v(this, Ve), Date.now(), !0)
    }, 500), this.theme = localStorage.getItem(rn), this.theme !== "dark" && this.theme !== "custom-winter" && (this.theme = "custom-winter")
  }
  get dropletsDialogOpen() {
    return L(v(this, Me))
  }
  set dropletsDialogOpen(t) {
    P(v(this, Me), t, !0)
  }
  get storeDialogOpen() {
    return L(v(this, Pe))
  }
  set storeDialogOpen(t) {
    P(v(this, Pe), t, !0)
  }
  get storeTabIndex() {
    return L(v(this, Ue))
  }
  set storeTabIndex(t) {
    P(v(this, Ue), t, !0)
  }
  get muted() {
    return L(v(this, Ce))
  }
  set muted(t) {
    P(v(this, Ce), t, !0)
  }
  get language() {
    return L(v(this, je))
  }
  set language(t) {
    P(v(this, je), t, !0)
  }
  get map() {
    return L(v(this, Fe))
  }
  set map(t) {
    P(v(this, Fe), t)
  }
  get automatedClicks() {
    return L(v(this, Be))
  }
  set automatedClicks(t) {
    P(v(this, Be), t, !0)
  }
  get theme() {
    return L(v(this, ze))
  }
  set theme(t) {
    P(v(this, ze), t, !0), localStorage.setItem(rn, t), document.documentElement.setAttribute("data-theme", t)
  }
  get now() {
    return L(v(this, Ve))
  }
  get captcha() {
    return aa ? L(v(this, Ge)) : {
      token: "turnstile-disabled",
      time: Date.now()
    }
  }
  set captcha(t) {
    P(v(this, Ge), t, !0)
  }
}
Me = new WeakMap, Pe = new WeakMap, Ue = new WeakMap, Ce = new WeakMap, je = new WeakMap, Fe = new WeakMap, Be = new WeakMap, ze = new WeakMap, Ve = new WeakMap, Ge = new WeakMap;
const Bt = new na;

function ra() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(t => t.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const aa = ta.toLowerCase() !== "false",
  ia = "" + new URL("../assets/pawtect_wasm_bg.CjFSOEZJ.wasm", import.meta.url).href;
var Nt = function() {
  return Nt = Object.assign || function(t) {
    for (var e, r = 1, a = arguments.length; r < a; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
    }
    return t
  }, Nt.apply(this, arguments)
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

function Wn(n, t, e) {
  if (e || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return n.concat(i || Array.prototype.slice.call(t))
}
var qn = "4.6.2";

function ht(n, t) {
  return new Promise(function(e) {
    return setTimeout(e, n, t)
  })
}

function oa() {
  return new Promise(function(n) {
    var t = new MessageChannel;
    t.port1.onmessage = function() {
      return n()
    }, t.port2.postMessage(null)
  })
}

function sa(n, t) {
  t === void 0 && (t = 1 / 0);
  var e = window.requestIdleCallback;
  return e ? new Promise(function(r) {
    return e.call(window, function() {
      return r()
    }, {
      timeout: t
    })
  }) : ht(Math.min(n, t))
}

function Kn(n) {
  return !!n && typeof n.then == "function"
}

function an(n, t) {
  try {
    var e = n();
    Kn(e) ? e.then(function(r) {
      return t(!0, r)
    }, function(r) {
      return t(!1, r)
    }) : t(!0, e)
  } catch (r) {
    t(!1, r)
  }
}

function on(n, t, e) {
  return e === void 0 && (e = 16), Q(this, void 0, void 0, function() {
    var r, a, i, o;
    return ee(this, function(s) {
      switch (s.label) {
        case 0:
          r = Array(n.length), a = Date.now(), i = 0, s.label = 1;
        case 1:
          return i < n.length ? (r[i] = t(n[i], i), o = Date.now(), o >= a + e ? (a = o, [4, oa()]) : [3, 3]) : [3, 4];
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

function De(n) {
  return n.then(void 0, function() {}), n
}

function ca(n, t) {
  for (var e = 0, r = n.length; e < r; ++e)
    if (n[e] === t) return !0;
  return !1
}

function ua(n, t) {
  return !ca(n, t)
}

function zt(n) {
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

function Hn(n, t) {
  if (t === void 0 && (t = 1), Math.abs(t) >= 1) return Math.round(n / t) * t;
  var e = 1 / t;
  return Math.round(n * e) / e
}

function la(n) {
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

function da(n) {
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

function M(n, t) {
  n[0] ^= t[0], n[1] ^= t[1]
}
var _a = [4283543511, 3981806797],
  fa = [3301882366, 444984403];

function sn(n) {
  var t = [0, n[0] >>> 1];
  M(n, t), Y(n, _a), t[1] = n[0] >>> 1, M(n, t), Y(n, fa), t[1] = n[0] >>> 1, M(n, t)
}
var ct = [2277735313, 289559509],
  ut = [1291169091, 658871167],
  cn = [0, 5],
  ha = [0, 1390208809],
  ma = [0, 944331445];

function pa(n, t) {
  var e = da(n);
  t = t || 0;
  var r = [0, e.length],
    a = r[1] % 16,
    i = r[1] - a,
    o = [0, t],
    s = [0, t],
    l = [0, 0],
    u = [0, 0],
    _;
  for (_ = 0; _ < i; _ = _ + 16) l[0] = e[_ + 4] | e[_ + 5] << 8 | e[_ + 6] << 16 | e[_ + 7] << 24, l[1] = e[_] | e[_ + 1] << 8 | e[_ + 2] << 16 | e[_ + 3] << 24, u[0] = e[_ + 12] | e[_ + 13] << 8 | e[_ + 14] << 16 | e[_ + 15] << 24, u[1] = e[_ + 8] | e[_ + 9] << 8 | e[_ + 10] << 16 | e[_ + 11] << 24, Y(l, ct), we(l, 31), Y(l, ut), M(o, l), we(o, 27), oe(o, s), Y(o, cn), oe(o, ha), Y(u, ut), we(u, 33), Y(u, ct), M(s, u), we(s, 31), oe(s, o), Y(s, cn), oe(s, ma);
  l[0] = 0, l[1] = 0, u[0] = 0, u[1] = 0;
  var d = [0, 0];
  switch (a) {
    case 15:
      d[1] = e[_ + 14], K(d, 48), M(u, d);
    case 14:
      d[1] = e[_ + 13], K(d, 40), M(u, d);
    case 13:
      d[1] = e[_ + 12], K(d, 32), M(u, d);
    case 12:
      d[1] = e[_ + 11], K(d, 24), M(u, d);
    case 11:
      d[1] = e[_ + 10], K(d, 16), M(u, d);
    case 10:
      d[1] = e[_ + 9], K(d, 8), M(u, d);
    case 9:
      d[1] = e[_ + 8], M(u, d), Y(u, ut), we(u, 33), Y(u, ct), M(s, u);
    case 8:
      d[1] = e[_ + 7], K(d, 56), M(l, d);
    case 7:
      d[1] = e[_ + 6], K(d, 48), M(l, d);
    case 6:
      d[1] = e[_ + 5], K(d, 40), M(l, d);
    case 5:
      d[1] = e[_ + 4], K(d, 32), M(l, d);
    case 4:
      d[1] = e[_ + 3], K(d, 24), M(l, d);
    case 3:
      d[1] = e[_ + 2], K(d, 16), M(l, d);
    case 2:
      d[1] = e[_ + 1], K(d, 8), M(l, d);
    case 1:
      d[1] = e[_], M(l, d), Y(l, ct), we(l, 31), Y(l, ut), M(o, l)
  }
  return M(o, r), M(s, r), oe(o, s), oe(s, o), sn(o), sn(s), oe(o, s), oe(s, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
}

function ga(n) {
  var t;
  return Nt({
    name: n.name,
    message: n.message,
    stack: (t = n.stack) === null || t === void 0 ? void 0 : t.split(`
`)
  }, n)
}

function wa(n) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
}

function ya(n) {
  return typeof n != "function"
}

function va(n, t) {
  var e = De(new Promise(function(r) {
    var a = Date.now();
    an(n.bind(null, t), function() {
      for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
      var s = Date.now() - a;
      if (!i[0]) return r(function() {
        return {
          error: i[1],
          duration: s
        }
      });
      var l = i[1];
      if (ya(l)) return r(function() {
        return {
          value: l,
          duration: s
        }
      });
      r(function() {
        return new Promise(function(u) {
          var _ = Date.now();
          an(l, function() {
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

function ba(n, t, e, r) {
  var a = Object.keys(n).filter(function(o) {
      return ua(e, o)
    }),
    i = De(on(a, function(o) {
      return va(n[o], t)
    }, r));
  return function() {
    return Q(this, void 0, void 0, function() {
      var s, l, u, _, d;
      return ee(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, i];
          case 1:
            return s = m.sent(), [4, on(s, function(g) {
              return De(g())
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

function Yn() {
  var n = window,
    t = navigator;
  return q(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
}

function Ea() {
  var n = window,
    t = navigator;
  return q(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !Yn()
}

function it() {
  var n = window,
    t = navigator;
  return q(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, (t.vendor || "").indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
}

function X() {
  var n = window,
    t = navigator;
  return q(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, t.vendor.indexOf("Apple") === 0, "RGBColor" in n, "WebKitMediaKeys" in n]) >= 4
}

function Vt() {
  var n = window,
    t = n.HTMLElement,
    e = n.Document;
  return q(["safari" in n, !("ongestureend" in n), !("TouchEvent" in n), !("orientation" in n), t && !("autocapitalize" in t.prototype), e && "pointerLockElement" in e.prototype]) >= 4
}

function ot() {
  var n = window;
  return wa(n.print) && String(n.browser) === "[object WebPageNamespace]"
}

function $n() {
  var n, t, e = window;
  return q(["buildID" in navigator, "MozAppearance" in ((t = (n = document.documentElement) === null || n === void 0 ? void 0 : n.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange" in e, "mozInnerScreenX" in e, "CSSMozDocumentRule" in e, "CanvasCaptureMediaStream" in e]) >= 4
}

function Ta() {
  var n = window;
  return q([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3
}

function Sa() {
  var n = window,
    t = n.URLPattern;
  return q(["union" in Set.prototype, "Iterator" in n, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
}

function Oa() {
  var n = window;
  return q(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
}

function st() {
  var n = window,
    t = navigator,
    e = n.CSS,
    r = n.HTMLButtonElement;
  return q([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, e.supports("font-size-adjust: ex-height 0.5"), e.supports("text-transform: full-width")]) >= 4
}

function Ia() {
  if (navigator.platform === "iPad") return !0;
  var n = screen,
    t = n.width / n.height;
  return q(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}

function Aa() {
  var n = document;
  return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
}

function ka() {
  var n = document;
  return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
}

function Gt() {
  var n = it(),
    t = $n(),
    e = window,
    r = navigator,
    a = "connection";
  return n ? q([!("SharedWorker" in e), r[a] && "ontypechange" in r[a], !("sinkId" in new Audio)]) >= 2 : t ? q(["onorientationchange" in e, "orientation" in e, /android/i.test(r.appVersion)]) >= 2 : !1
}

function Ra() {
  var n = navigator,
    t = window,
    e = Audio.prototype,
    r = t.visualViewport;
  return q(["srLatency" in e, "srChannelCount" in e, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
}

function Na() {
  return La() ? -4 : xa()
}

function xa() {
  var n = window,
    t = n.OfflineAudioContext || n.webkitOfflineAudioContext;
  if (!t) return -2;
  if (Da()) return -1;
  var e = 4500,
    r = 5e3,
    a = new t(1, r, 44100),
    i = a.createOscillator();
  i.type = "triangle", i.frequency.value = 1e4;
  var o = a.createDynamicsCompressor();
  o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, i.connect(o), o.connect(a.destination), i.start(0);
  var s = Ma(a),
    l = s[0],
    u = s[1],
    _ = De(l.then(function(d) {
      return Pa(d.getChannelData(0).subarray(e))
    }, function(d) {
      if (d.name === "timeout" || d.name === "suspended") return -3;
      throw d
    }));
  return function() {
    return u(), _
  }
}

function Da() {
  return X() && !Vt() && !Oa()
}

function La() {
  return X() && st() && ot() || it() && Ra() && Sa()
}

function Ma(n) {
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
            return l(un("timeout"))
          }, Math.min(r, d + a - Date.now()))
        },
        g = function() {
          try {
            var E = n.startRendering();
            switch (Kn(E) && De(E), n.state) {
              case "running":
                d = Date.now(), u && m();
                break;
              case "suspended":
                document.hidden || _++, u && _ >= t ? l(un("suspended")) : setTimeout(g, e);
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

function Pa(n) {
  for (var t = 0, e = 0; e < n.length; ++e) t += Math.abs(n[e]);
  return t
}

function un(n) {
  var t = new Error(n);
  return t.name = n, t
}

function Zn(n, t, e) {
  var r, a, i;
  return e === void 0 && (e = 50), Q(this, void 0, void 0, function() {
    var o, s;
    return ee(this, function(l) {
      switch (l.label) {
        case 0:
          o = document, l.label = 1;
        case 1:
          return o.body ? [3, 3] : [4, ht(e)];
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
          return !((a = (r = s.contentWindow) === null || r === void 0 ? void 0 : r.document) === null || a === void 0) && a.body ? [3, 8] : [4, ht(e)];
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

function Ua(n) {
  for (var t = la(n), e = t[0], r = t[1], a = document.createElement(e ?? "div"), i = 0, o = Object.keys(r); i < o.length; i++) {
    var s = o[i],
      l = r[s].join(" ");
    s === "style" ? Ca(a.style, l) : a.setAttribute(s, l)
  }
  return a
}

function Ca(n, t) {
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

function ja() {
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
var Fa = "mmMwWLliI0O&1",
  Ba = "48px",
  ye = ["monospace", "sans-serif", "serif"],
  ln = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function za() {
  var n = this;
  return Zn(function(t, e) {
    var r = e.document;
    return Q(n, void 0, void 0, function() {
      var a, i, o, s, l, u, _, d, m, g, E, w;
      return ee(this, function(T) {
        for (a = r.body, a.style.fontSize = Ba, i = r.createElement("div"), i.style.setProperty("visibility", "hidden", "important"), o = {}, s = {}, l = function(O) {
            var N = r.createElement("span"),
              C = N.style;
            return C.position = "absolute", C.top = "0", C.left = "0", C.fontFamily = O, N.textContent = Fa, i.appendChild(N), N
          }, u = function(O, N) {
            return l("'".concat(O, "',").concat(N))
          }, _ = function() {
            return ye.map(l)
          }, d = function() {
            for (var O = {}, N = function(y) {
                O[y] = ye.map(function(S) {
                  return u(y, S)
                })
              }, C = 0, j = ln; C < j.length; C++) {
              var H = j[C];
              N(H)
            }
            return O
          }, m = function(O) {
            return ye.some(function(N, C) {
              return O[C].offsetWidth !== o[N] || O[C].offsetHeight !== s[N]
            })
          }, g = _(), E = d(), a.appendChild(i), w = 0; w < ye.length; w++) o[ye[w]] = g[w].offsetWidth, s[ye[w]] = g[w].offsetHeight;
        return [2, ln.filter(function(O) {
          return m(E[O])
        })]
      })
    })
  })
}

function Va() {
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

function Ga() {
  return Wa(Ja())
}

function Wa(n) {
  var t, e = !1,
    r, a, i = qa(),
    o = i[0],
    s = i[1];
  return Ka(o, s) ? (e = Ha(s), n ? r = a = "skipped" : (t = Ya(o, s), r = t[0], a = t[1])) : r = a = "unsupported", {
    winding: e,
    geometry: r,
    text: a
  }
}

function qa() {
  var n = document.createElement("canvas");
  return n.width = 1, n.height = 1, [n, n.getContext("2d")]
}

function Ka(n, t) {
  return !!(t && n.toDataURL)
}

function Ha(n) {
  return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
}

function Ya(n, t) {
  $a(n, t);
  var e = Tt(n),
    r = Tt(n);
  if (e !== r) return ["unstable", "unstable"];
  Za(n, t);
  var a = Tt(n);
  return [a, e]
}

function $a(n, t) {
  n.width = 240, n.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
  var e = "Cwm fjordbank gly ".concat("😃");
  t.fillText(e, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(e, 4, 45)
}

function Za(n, t) {
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

function Tt(n) {
  return n.toDataURL()
}

function Ja() {
  return X() && st() && ot()
}

function Xa() {
  var n = navigator,
    t = 0,
    e;
  n.maxTouchPoints !== void 0 ? t = zt(n.maxTouchPoints) : n.msMaxTouchPoints !== void 0 && (t = n.msMaxTouchPoints);
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

function Qa() {
  return navigator.oscpu
}

function ei() {
  var n = navigator,
    t = [],
    e = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
  if (e !== void 0 && t.push([e]), Array.isArray(n.languages)) it() && Ta() || t.push(n.languages);
  else if (typeof n.languages == "string") {
    var r = n.languages;
    r && t.push(r.split(","))
  }
  return t
}

function ti() {
  return window.screen.colorDepth
}

function ni() {
  return re(J(navigator.deviceMemory), void 0)
}

function ri() {
  if (!(X() && st() && ot())) return ai()
}

function ai() {
  var n = screen,
    t = function(r) {
      return re(zt(r), null)
    },
    e = [t(n.width), t(n.height)];
  return e.sort().reverse(), e
}
var ii = 2500,
  oi = 10,
  dt, St;

function si() {
  if (St === void 0) {
    var n = function() {
      var t = xt();
      Dt(t) ? St = setTimeout(n, ii) : (dt = t, St = void 0)
    };
    n()
  }
}

function ci() {
  var n = this;
  return si(),
    function() {
      return Q(n, void 0, void 0, function() {
        var t;
        return ee(this, function(e) {
          switch (e.label) {
            case 0:
              return t = xt(), Dt(t) ? dt ? [2, Wn([], dt, !0)] : Aa() ? [4, ka()] : [3, 2] : [3, 2];
            case 1:
              e.sent(), t = xt(), e.label = 2;
            case 2:
              return Dt(t) || (dt = t), [2, t]
          }
        })
      })
    }
}

function ui() {
  var n = this;
  if (X() && st() && ot()) return function() {
    return Promise.resolve(void 0)
  };
  var t = ci();
  return function() {
    return Q(n, void 0, void 0, function() {
      var e, r;
      return ee(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, t()];
          case 1:
            return e = a.sent(), r = function(i) {
              return i === null ? null : Hn(i, oi)
            }, [2, [r(e[0]), r(e[1]), r(e[2]), r(e[3])]]
        }
      })
    })
  }
}

function xt() {
  var n = screen;
  return [re(J(n.availTop), null), re(J(n.width) - J(n.availWidth) - re(J(n.availLeft), 0), null), re(J(n.height) - J(n.availHeight) - re(J(n.availTop), 0), null), re(J(n.availLeft), null)]
}

function Dt(n) {
  for (var t = 0; t < 4; ++t)
    if (n[t]) return !1;
  return !0
}

function li() {
  return re(zt(navigator.hardwareConcurrency), void 0)
}

function di() {
  var n, t = (n = window.Intl) === null || n === void 0 ? void 0 : n.DateTimeFormat;
  if (t) {
    var e = new t().resolvedOptions().timeZone;
    if (e) return e
  }
  var r = -_i();
  return "UTC".concat(r >= 0 ? "+" : "").concat(r)
}

function _i() {
  var n = new Date().getFullYear();
  return Math.max(J(new Date(n, 0, 1).getTimezoneOffset()), J(new Date(n, 6, 1).getTimezoneOffset()))
}

function fi() {
  try {
    return !!window.sessionStorage
  } catch {
    return !0
  }
}

function hi() {
  try {
    return !!window.localStorage
  } catch {
    return !0
  }
}

function mi() {
  if (!(Yn() || Ea())) try {
    return !!window.indexedDB
  } catch {
    return !0
  }
}

function pi() {
  return !!window.openDatabase
}

function gi() {
  return navigator.cpuClass
}

function wi() {
  var n = navigator.platform;
  return n === "MacIntel" && X() && !Vt() ? Ia() ? "iPad" : "iPhone" : n
}

function yi() {
  return navigator.vendor || ""
}

function vi() {
  for (var n = [], t = 0, e = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < e.length; t++) {
    var r = e[t],
      a = window[r];
    a && typeof a == "object" && n.push(r)
  }
  return n.sort()
}

function bi() {
  var n = document;
  try {
    n.cookie = "cookietest=1; SameSite=Strict;";
    var t = n.cookie.indexOf("cookietest=") !== -1;
    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
  } catch {
    return !1
  }
}

function Ei() {
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

function Ti(n) {
  var t = n === void 0 ? {} : n,
    e = t.debug;
  return Q(this, void 0, void 0, function() {
    var r, a, i, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          return Si() ? (r = Ei(), a = Object.keys(r), i = (l = []).concat.apply(l, a.map(function(_) {
            return r[_]
          })), [4, Oi(i)]) : [2, void 0];
        case 1:
          return o = u.sent(), e && Ii(r, o), s = a.filter(function(_) {
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

function Si() {
  return X() || Gt()
}

function Oi(n) {
  var t;
  return Q(this, void 0, void 0, function() {
    var e, r, a, i, l, o, s, l;
    return ee(this, function(u) {
      switch (u.label) {
        case 0:
          for (e = document, r = e.createElement("div"), a = new Array(n.length), i = {}, dn(r), l = 0; l < n.length; ++l) o = Ua(n[l]), o.tagName === "DIALOG" && o.show(), s = e.createElement("div"), dn(s), s.appendChild(o), r.appendChild(s), a[l] = o;
          u.label = 1;
        case 1:
          return e.body ? [3, 3] : [4, ht(50)];
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

function dn(n) {
  n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
}

function Ii(n, t) {
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

function Ai() {
  for (var n = 0, t = ["rec2020", "p3", "srgb"]; n < t.length; n++) {
    var e = t[n];
    if (matchMedia("(color-gamut: ".concat(e, ")")).matches) return e
  }
}

function ki() {
  if (_n("inverted")) return !0;
  if (_n("none")) return !1
}

function _n(n) {
  return matchMedia("(inverted-colors: ".concat(n, ")")).matches
}

function Ri() {
  if (fn("active")) return !0;
  if (fn("none")) return !1
}

function fn(n) {
  return matchMedia("(forced-colors: ".concat(n, ")")).matches
}
var Ni = 100;

function xi() {
  if (matchMedia("(min-monochrome: 0)").matches) {
    for (var n = 0; n <= Ni; ++n)
      if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
    throw new Error("Too high value")
  }
}

function Di() {
  if (ve("no-preference")) return 0;
  if (ve("high") || ve("more")) return 1;
  if (ve("low") || ve("less")) return -1;
  if (ve("forced")) return 10
}

function ve(n) {
  return matchMedia("(prefers-contrast: ".concat(n, ")")).matches
}

function Li() {
  if (hn("reduce")) return !0;
  if (hn("no-preference")) return !1
}

function hn(n) {
  return matchMedia("(prefers-reduced-motion: ".concat(n, ")")).matches
}

function Mi() {
  if (mn("reduce")) return !0;
  if (mn("no-preference")) return !1
}

function mn(n) {
  return matchMedia("(prefers-reduced-transparency: ".concat(n, ")")).matches
}

function Pi() {
  if (pn("high")) return !0;
  if (pn("standard")) return !1
}

function pn(n) {
  return matchMedia("(dynamic-range: ".concat(n, ")")).matches
}
var A = Math,
  W = function() {
    return 0
  };

function Ui() {
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
    w = function(b) {
      return A.pow(A.PI, b)
    },
    T = function(b) {
      return A.log(b + A.sqrt(b * b - 1))
    },
    O = function(b) {
      return A.log(b + A.sqrt(b * b + 1))
    },
    N = function(b) {
      return A.log((1 + b) / (1 - b)) / 2
    },
    C = function(b) {
      return A.exp(b) - 1 / A.exp(b) / 2
    },
    j = function(b) {
      return (A.exp(b) + 1 / A.exp(b)) / 2
    },
    H = function(b) {
      return A.exp(b) - 1
    },
    y = function(b) {
      return (A.exp(2 * b) - 1) / (A.exp(2 * b) + 1)
    },
    S = function(b) {
      return A.log(1 + b)
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
var Ci = "mmMwWLliI0fiflO&1",
  Ot = {
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

function ji() {
  return Fi(function(n, t) {
    for (var e = {}, r = {}, a = 0, i = Object.keys(Ot); a < i.length; a++) {
      var o = i[a],
        s = Ot[o],
        l = s[0],
        u = l === void 0 ? {} : l,
        _ = s[1],
        d = _ === void 0 ? Ci : _,
        m = n.createElement("span");
      m.textContent = d, m.style.whiteSpace = "nowrap";
      for (var g = 0, E = Object.keys(u); g < E.length; g++) {
        var w = E[g],
          T = u[w];
        T !== void 0 && (m.style[w] = T)
      }
      e[o] = m, t.append(n.createElement("br"), m)
    }
    for (var O = 0, N = Object.keys(Ot); O < N.length; O++) {
      var o = N[O];
      r[o] = e[o].getBoundingClientRect().width
    }
    return r
  })
}

function Fi(n, t) {
  return t === void 0 && (t = 4e3), Zn(function(e, r) {
    var a = r.document,
      i = a.body,
      o = i.style;
    o.width = "".concat(t, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", it() ? i.style.zoom = "".concat(1 / r.devicePixelRatio) : X() && (i.style.zoom = "reset");
    var s = a.createElement("div");
    return s.textContent = Wn([], Array(t / 20 << 0), !0).map(function() {
      return "word"
    }).join(" "), i.appendChild(s), n(a, i)
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}

function Bi() {
  return navigator.pdfViewerEnabled
}

function zi() {
  var n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return n[0] = 1 / 0, n[0] = n[0] - n[0], t[3]
}

function Vi() {
  var n = window.ApplePaySession;
  if (typeof(n == null ? void 0 : n.canMakePayments) != "function") return -1;
  if (Gi()) return -3;
  try {
    return n.canMakePayments() ? 1 : 0
  } catch (t) {
    return Wi(t)
  }
}
var Gi = ja;

function Wi(n) {
  if (n instanceof Error && n.name === "InvalidAccessError" && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
  throw n
}

function qi() {
  var n, t = document.createElement("a"),
    e = (n = t.attributionSourceId) !== null && n !== void 0 ? n : t.attributionsourceid;
  return e === void 0 ? void 0 : String(e)
}
var Jn = -1,
  Xn = -2,
  Ki = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
  Hi = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
  Yi = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
  $i = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
  Qn = "WEBGL_debug_renderer_info",
  Zi = "WEBGL_polygon_mode";

function Ji(n) {
  var t, e, r, a, i, o, s = n.cache,
    l = er(s);
  if (!l) return Jn;
  if (!nr(l)) return Xn;
  var u = tr() ? null : l.getExtension(Qn);
  return {
    version: ((t = l.getParameter(l.VERSION)) === null || t === void 0 ? void 0 : t.toString()) || "",
    vendor: ((e = l.getParameter(l.VENDOR)) === null || e === void 0 ? void 0 : e.toString()) || "",
    vendorUnmasked: u ? (r = l.getParameter(u.UNMASKED_VENDOR_WEBGL)) === null || r === void 0 ? void 0 : r.toString() : "",
    renderer: ((a = l.getParameter(l.RENDERER)) === null || a === void 0 ? void 0 : a.toString()) || "",
    rendererUnmasked: u ? (i = l.getParameter(u.UNMASKED_RENDERER_WEBGL)) === null || i === void 0 ? void 0 : i.toString() : "",
    shadingLanguageVersion: ((o = l.getParameter(l.SHADING_LANGUAGE_VERSION)) === null || o === void 0 ? void 0 : o.toString()) || ""
  }
}

function Xi(n) {
  var t = n.cache,
    e = er(t);
  if (!e) return Jn;
  if (!nr(e)) return Xn;
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
  for (var g = gn(e), E = 0, w = g; E < w.length; E++) {
    var T = w[E],
      O = e[T];
    s.push("".concat(T, "=").concat(O).concat(Ki.has(O) ? "=".concat(e.getParameter(O)) : ""))
  }
  if (r)
    for (var N = 0, C = r; N < C.length; N++) {
      var j = C[N];
      if (!(j === Qn && tr() || j === Zi && to())) {
        var H = e.getExtension(j);
        if (!H) {
          i.push(j);
          continue
        }
        for (var y = 0, S = gn(H); y < S.length; y++) {
          var T = S[y],
            O = H[T];
          l.push("".concat(T, "=").concat(O).concat(Hi.has(O) ? "=".concat(e.getParameter(O)) : ""))
        }
      }
    }
  for (var b = 0, Z = Yi; b < Z.length; b++)
    for (var G = Z[b], V = 0, te = $i; V < te.length; V++) {
      var pe = te[V],
        bt = Qi(e, G, pe);
      u.push("".concat(G, ".").concat(pe, "=").concat(bt.join(",")))
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

function er(n) {
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

function Qi(n, t, e) {
  var r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function gn(n) {
  var t = Object.keys(n.__proto__);
  return t.filter(eo)
}

function eo(n) {
  return typeof n == "string" && !n.match(/[^A-Z0-9_x]/)
}

function tr() {
  return $n()
}

function to() {
  return it() || X()
}

function nr(n) {
  return typeof n.getParameter == "function"
}

function no() {
  var n = Gt() || X();
  if (!n) return -2;
  if (!window.AudioContext) return -1;
  var t = new AudioContext().baseLatency;
  return t == null ? -1 : isFinite(t) ? t : -3
}

function ro() {
  if (!window.Intl) return -1;
  var n = window.Intl.DateTimeFormat;
  if (!n) return -2;
  var t = n().resolvedOptions().locale;
  return !t && t !== "" ? -3 : t
}
var ao = {
  fonts: za,
  domBlockers: Ti,
  fontPreferences: ji,
  audio: Na,
  screenFrame: ui,
  canvas: Ga,
  osCpu: Qa,
  languages: ei,
  colorDepth: ti,
  deviceMemory: ni,
  screenResolution: ri,
  hardwareConcurrency: li,
  timezone: di,
  sessionStorage: fi,
  localStorage: hi,
  indexedDB: mi,
  openDatabase: pi,
  cpuClass: gi,
  platform: wi,
  plugins: Va,
  touchSupport: Xa,
  vendor: yi,
  vendorFlavors: vi,
  cookiesEnabled: bi,
  colorGamut: Ai,
  invertedColors: ki,
  forcedColors: Ri,
  monochrome: xi,
  contrast: Di,
  reducedMotion: Li,
  reducedTransparency: Mi,
  hdr: Pi,
  math: Ui,
  pdfViewerEnabled: Bi,
  architecture: zi,
  applePay: Vi,
  privateClickMeasurement: qi,
  audioBaseLatency: no,
  dateTimeLocale: ro,
  webGlBasics: Ji,
  webGlExtensions: Xi
};

function io(n) {
  return ba(ao, n, [])
}
var oo = "$ if upgrade to Pro: https://fpjs.dev/pro";

function so(n) {
  var t = co(n),
    e = uo(t);
  return {
    score: t,
    comment: oo.replace(/\$/g, "".concat(e))
  }
}

function co(n) {
  if (Gt()) return .4;
  if (X()) return Vt() && !(st() && ot()) ? .5 : .3;
  var t = "value" in n.platform ? n.platform.value : "";
  return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}

function uo(n) {
  return Hn(.99 + .01 * n, 1e-4)
}

function lo(n) {
  for (var t = "", e = 0, r = Object.keys(n).sort(); e < r.length; e++) {
    var a = r[e],
      i = n[a],
      o = "error" in i ? "error" : JSON.stringify(i.value);
    t += "".concat(t ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
  }
  return t
}

function rr(n) {
  return JSON.stringify(n, function(t, e) {
    return e instanceof Error ? ga(e) : e
  }, 2)
}

function ar(n) {
  return pa(lo(n))
}

function _o(n) {
  var t, e = so(n);
  return {
    get visitorId() {
      return t === void 0 && (t = ar(this.components)), t
    },
    set visitorId(r) {
      t = r
    },
    confidence: e,
    components: n,
    version: qn
  }
}

function fo(n) {
  return n === void 0 && (n = 50), sa(n, n * 2)
}

function ho(n, t) {
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
              return i = s.sent(), o = _o(i), (t || r != null && r.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(a - e, `
visitorId: `).concat(o.visitorId, `
components: `).concat(rr(i), "\n```")), [2, o]
          }
        })
      })
    }
  }
}

function mo() {
  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
    var n = new XMLHttpRequest;
    n.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(qn, "/npm-monitoring"), !0), n.send()
  } catch (t) {
    console.error(t)
  }
}

function po(n) {
  var t;
  return n === void 0 && (n = {}), Q(this, void 0, void 0, function() {
    var e, r, a;
    return ee(this, function(i) {
      switch (i.label) {
        case 0:
          return (!((t = n.monitoring) !== null && t !== void 0) || t) && mo(), e = n.delayFallback, r = n.debug, [4, fo(e)];
        case 1:
          return i.sent(), a = io({
            cache: {},
            debug: r
          }), [2, ho(a, r)]
      }
    })
  })
}
var ir = {
  load: po,
  hashComponents: ar,
  componentsToDebugString: rr
};
let It = null,
  mt;
async function go() {
  return It || (It = ir.load()), It
}
async function pt() {
  return mt || wo().then(n => n.visitorId)
}
async function wo() {
  const t = await (await go()).get(),
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
  return mt = ir.hashComponents({
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
    visitorId: mt,
    components: o
  }
}
const yo = () => "Your account has been suspended for breaking the rules",
  vo = () => "Sua conta foi suspensa por quebrar as regras",
  bo = () => "您的账号因违反规则已被暂停",
  Eo = () => "Dein Konto wurde wegen Regelverstößen gesperrt",
  To = () => "Tu cuenta ha sido suspendida por infringir las regras",
  So = () => "Votre compte a été suspendu pour avoir enfreint les règles",
  Oo = () => "Il tuo account è stato sospeso per aver infranto le regole",
  Io = () => "ルール違反により、あなたのアカウントは一時停止されています。",
  Ao = () => "Twoje konto zostało zawieszone za łamanie zasad",
  ko = () => "Ваш аккаунт был временно заблокирован за нарушение правил",
  Ro = () => "Ваш обліковий запис було призупинено за порушення правил",
  No = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật",
  xo = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? yo() : e === "pt" ? vo() : e === "ch" ? bo() : e === "de" ? Eo() : e === "es" ? To() : e === "fr" ? So() : e === "it" ? Oo() : e === "jp" ? Io() : e === "pl" ? Ao() : e === "ru" ? ko() : e === "uk" ? Ro() : No()
  },
  Do = () => "Alliance name already taken",
  Lo = () => "Já possui uma aliança com esse nome",
  Mo = () => "该联盟名称已被占用",
  Po = () => "Der Allianzname ist bereits vergeben",
  Uo = () => "Ese nombre de alianza ya está en uso",
  Co = () => "Ce nom d’alliance est déjà pris",
  jo = () => "Esiste già un'alleanza con questo nome",
  Fo = () => "このアライアンス名は既に使用されています。",
  Bo = () => "Nazwa sojuszu jest już zajęta",
  zo = () => "Такое название альянса уже используется",
  Vo = () => "Назва альянсу вже зайнята",
  Go = () => "Tên liên minh đã được sử dụng",
  Wo = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Do() : e === "pt" ? Lo() : e === "ch" ? Mo() : e === "de" ? Po() : e === "es" ? Uo() : e === "fr" ? Co() : e === "it" ? jo() : e === "jp" ? Fo() : e === "pl" ? Bo() : e === "ru" ? zo() : e === "uk" ? Vo() : Go()
  },
  qo = () => "Alliance name exceeded the maximum number of characters",
  Ko = () => "O nome da aliança excedeu o número máximo de caracteres",
  Ho = () => "联盟名称超过最大字符数限制",
  Yo = () => "Der Allianzname überschreitet die maximale Zeichenanzahl",
  $o = () => "El nombre de la alianza superó el número máximo de caracteres",
  Zo = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères",
  Jo = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri",
  Xo = () => "アライアンス名が最大文字数を超えています。",
  Qo = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków",
  es = () => "Название альянса превышает максимальную длину",
  ts = () => "Назва альянсу перевищує максимально допустиму кількість символів",
  ns = () => "Tên liên minh vượt quá số ký tự cho phép",
  rs = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? qo() : e === "pt" ? Ko() : e === "ch" ? Ho() : e === "de" ? Yo() : e === "es" ? $o() : e === "fr" ? Zo() : e === "it" ? Jo() : e === "jp" ? Xo() : e === "pl" ? Qo() : e === "ru" ? es() : e === "uk" ? ts() : ns()
  },
  as = () => "Alliance with empty name",
  is = () => "Aliança com nome vazio",
  os = () => "名称为空的联盟",
  ss = () => "Allianz mit leerem Namen",
  cs = () => "Alianza con nombre vacío",
  us = () => "Alliance avec nom vide",
  ls = () => "Alleanza con nome vuoto",
  ds = () => "名前が空のアライアンスです。",
  _s = () => "Sojusz z pustą nazwą",
  fs = () => "Альянс с пустым названием",
  hs = () => "Альянс із порожньою назвою",
  ms = () => "Liên minh không có tên",
  ps = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? as() : e === "pt" ? is() : e === "ch" ? os() : e === "de" ? ss() : e === "es" ? cs() : e === "fr" ? us() : e === "it" ? ls() : e === "jp" ? ds() : e === "pl" ? _s() : e === "ru" ? fs() : e === "uk" ? hs() : ms()
  },
  gs = () => "Botting",
  ws = () => "Uso de bots",
  ys = () => "脚本",
  vs = () => "Bot-Nutzung",
  bs = () => "Botting",
  Es = () => "Bots",
  Ts = () => "Uso di bot",
  Ss = () => "ボット使用",
  Os = () => "Botting",
  Is = () => "Боттинг",
  As = () => "Боти",
  ks = () => "Botting",
  Rs = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? gs() : e === "pt" ? ws() : e === "ch" ? ys() : e === "de" ? vs() : e === "es" ? bs() : e === "fr" ? Es() : e === "it" ? Ts() : e === "jp" ? Ss() : e === "pl" ? Os() : e === "ru" ? Is() : e === "uk" ? As() : ks()
  },
  Ns = () => "Use of software to completely automate painting",
  xs = () => "Uso de software para pintar de forma completamente automatizada ",
  Ds = () => "使用软件完全自动化绘制",
  Ls = () => "Verwendung von Software, um das Malen vollständig zu automatisieren",
  Ms = () => "Uso de software para automatizar completamente la pintura",
  Ps = () => "Utilisation de logiciels pour automatiser complètement la peinture",
  Us = () => "Uso di software per dipingere in modo completamente automatizzato",
  Cs = () => "ペイントを完全に自動化するソフトウェアの使用",
  js = () => "Używanie oprogramowania do całkowicie zautomatyzowanego malowania",
  Fs = () => "Использование программ для полной автоматизации рисования",
  Bs = () => "Використання програм, які повністю автоматизують малювання",
  zs = () => "Sử dụng phần mềm để tự động hóa hoàn toàn việc tô pixel",
  Vs = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ns() : e === "pt" ? xs() : e === "ch" ? Ds() : e === "de" ? Ls() : e === "es" ? Ms() : e === "fr" ? Ps() : e === "it" ? Us() : e === "jp" ? Cs() : e === "pl" ? js() : e === "ru" ? Fs() : e === "uk" ? Bs() : zs()
  },
  Gs = () => "Breaking the rules",
  Ws = () => "Quebrar as regras",
  qs = () => "违反规则",
  Ks = () => "Regeln brechen",
  Hs = () => "Romper las reglas",
  Ys = () => "Violation des règles",
  $s = () => "Violazione delle regole",
  Zs = () => "ルール違反",
  Js = () => "Łamanie zasad",
  Xs = () => "Нарушение правил",
  Qs = () => "Порушення правил",
  ec = () => "Vi phạm luật",
  tc = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Gs() : e === "pt" ? Ws() : e === "ch" ? qs() : e === "de" ? Ks() : e === "es" ? Hs() : e === "fr" ? Ys() : e === "it" ? $s() : e === "jp" ? Zs() : e === "pl" ? Js() : e === "ru" ? Xs() : e === "uk" ? Qs() : ec()
  },
  nc = () => "You have broken one of Wplace's rules",
  rc = () => "Você quebrou uma das regras do Wplace",
  ac = () => "你违反了 Wplace 的一项规则",
  ic = () => "Du hast gegen eine der Wplace-Regeln verstoßen",
  oc = () => "Has infringido una de las reglas de Wplace",
  sc = () => "Vous avez enfreint l’une des règles de Wplace",
  cc = () => "Hai infranto una delle regole di Wplace",
  uc = () => "Wplaceのルールのいずれかに違反しました。",
  lc = () => "Złamałeś jedną z zasad Wplace",
  dc = () => "Вы нарушили одно из правил Wplace",
  _c = () => "Ви порушили одне з правил Wplace",
  fc = () => "Bạn đã vi phạm một trong các luật của Wplace",
  hc = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? nc() : e === "pt" ? rc() : e === "ch" ? ac() : e === "de" ? ic() : e === "es" ? oc() : e === "fr" ? sc() : e === "it" ? cc() : e === "jp" ? uc() : e === "pl" ? lc() : e === "ru" ? dc() : e === "uk" ? _c() : fc()
  },
  mc = () => "You cannot paint over event pixels",
  pc = () => "Você não pode pintar sobre pixels de eventos",
  gc = () => "你不能覆盖活动像素",
  wc = () => "Du kannst nicht über Event-Pixel malen",
  yc = () => "No puedes pintar sobre píxeles de evento",
  vc = () => "Vous ne pouvez pas peindre sur des pixels d’événement",
  bc = () => "Non puoi dipingere sopra i pixel dell'evento",
  Ec = () => "イベント用のピクセルの上には塗れません。",
  Tc = () => "Nie możesz malować po pikselach wydarzenia",
  Sc = () => "Вы не можете рисовать по пикселям события",
  Oc = () => "Ви не можете малювати поверх пікселів події",
  Ic = () => "Bạn không thể tô lên pixel sự kiện",
  wn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? mc() : e === "pt" ? pc() : e === "ch" ? gc() : e === "de" ? wc() : e === "es" ? yc() : e === "fr" ? vc() : e === "it" ? bc() : e === "jp" ? Ec() : e === "pl" ? Tc() : e === "ru" ? Sc() : e === "uk" ? Oc() : Ic()
  },
  Ac = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  kc = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Rc = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。",
  Nc = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.",
  xc = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.",
  Dc = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.",
  Lc = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.",
  Mc = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。",
  Pc = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.",
  Uc = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.",
  Cc = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.",
  jc = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau",
  Fc = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ac() : e === "pt" ? kc() : e === "ch" ? Rc() : e === "de" ? Nc() : e === "es" ? xc() : e === "fr" ? Dc() : e === "it" ? Lc() : e === "jp" ? Mc() : e === "pl" ? Pc() : e === "ru" ? Uc() : e === "uk" ? Cc() : jc()
  },
  Bc = () => "Challenge verification not completed",
  zc = () => "Verificação do desafio não concluída",
  Vc = () => "挑战验证未完成",
  Gc = () => "Herausforderungsverifizierung nicht abgeschlossen",
  Wc = () => "Verificación del desafío no completada",
  qc = () => "Vérification du défi non terminée",
  Kc = () => "Verifica della sfida non completata",
  Hc = () => "チャレンジ検証が完了していません",
  Yc = () => "Weryfikacja wyzwania niezakończona",
  $c = () => "Верификация вызова не завершена",
  Zc = () => "Перевірку виклику не завершено",
  Jc = () => "Xác minh thử thách chưa hoàn thành",
  yn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Bc() : e === "pt" ? zc() : e === "ch" ? Vc() : e === "de" ? Gc() : e === "es" ? Wc() : e === "fr" ? qc() : e === "it" ? Kc() : e === "jp" ? Hc() : e === "pl" ? Yc() : e === "ru" ? $c() : e === "uk" ? Zc() : Jc()
  },
  Xc = () => "Couldn't complete the purchase. This item does not exist.",
  Qc = () => "Não foi possível concluir a compra. Este item não existe.",
  eu = () => "无法完成购买。该物品不存在。",
  tu = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.",
  nu = () => "No se pudo completar la compra. Este ítem no existe.",
  ru = () => "Achat impossible. Cet objet n’existe pas.",
  au = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.",
  iu = () => "購入を完了できませんでした。このアイテムは存在しません。",
  ou = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.",
  su = () => "Не удалось завершить покупку. Этот предмет не существует.",
  cu = () => "Не вдалося завершити покупку. Цей предмет не існує.",
  uu = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.",
  vn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Xc() : e === "pt" ? Qc() : e === "ch" ? eu() : e === "de" ? tu() : e === "es" ? nu() : e === "fr" ? ru() : e === "it" ? au() : e === "jp" ? iu() : e === "pl" ? ou() : e === "ru" ? su() : e === "uk" ? cu() : uu()
  },
  lu = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  du = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  _u = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。",
  fu = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.",
  hu = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.",
  mu = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.",
  pu = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.",
  gu = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。",
  wu = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.",
  yu = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.",
  vu = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.",
  bu = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.",
  bn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? lu() : e === "pt" ? du() : e === "ch" ? _u() : e === "de" ? fu() : e === "es" ? hu() : e === "fr" ? mu() : e === "it" ? pu() : e === "jp" ? gu() : e === "pl" ? wu() : e === "ru" ? yu() : e === "uk" ? vu() : bu()
  },
  Eu = () => "Doxxing",
  Tu = () => "Doxxing",
  Su = () => "人肉搜索",
  Ou = () => "Doxxing",
  Iu = () => "Doxxing",
  Au = () => "Doxxing",
  ku = () => "Doxxing",
  Ru = () => "ドックス（Doxxing）",
  Nu = () => "Doxxing",
  xu = () => "Докcинг",
  Du = () => "Докcинг",
  Lu = () => "Doxxing",
  Mu = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Eu() : e === "pt" ? Tu() : e === "ch" ? Su() : e === "de" ? Ou() : e === "es" ? Iu() : e === "fr" ? Au() : e === "it" ? ku() : e === "jp" ? Ru() : e === "pl" ? Nu() : e === "ru" ? xu() : e === "uk" ? Du() : Lu()
  },
  Pu = () => "Released other's personal information without their consent",
  Uu = () => "Vazar informações pessoais de terceiros sem consentimento",
  Cu = () => "在未获同意的情况下公开他人个人信息",
  ju = () => "Persönliche Daten anderer ohne deren Zustimmung veröffentlicht",
  Fu = () => "Divulgó información personal de otra persona sin su consentimiento",
  Bu = () => "Diffusion des informations personnelles de quelqu’un sans son consentement",
  zu = () => "Diffusione di informazioni personali di terzi senza consenso",
  Vu = () => "他人の個人情報を同意なく公開した。",
  Gu = () => "Udostępnianie cudzych danych osobowych bez ich zgody",
  Wu = () => "Публикация личной информации других людей без их согласия",
  qu = () => "Розповсюдження особистої інформації інших людей без їхньої згоди",
  Ku = () => "Công khai thông tin cá nhân của người khác mà không có sự cho phép",
  Hu = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Pu() : e === "pt" ? Uu() : e === "ch" ? Cu() : e === "de" ? ju() : e === "es" ? Fu() : e === "fr" ? Bu() : e === "it" ? zu() : e === "jp" ? Vu() : e === "pl" ? Gu() : e === "ru" ? Wu() : e === "uk" ? qu() : Ku()
  },
  Yu = () => "This email is already in use.",
  $u = () => "Este e-mail já está em uso.",
  Zu = () => "This email is already in use.",
  Ju = () => "This email is already in use.",
  Xu = () => "Este correo electrónico ya está en uso.",
  Qu = () => "This email is already in use.",
  el = () => "Questa email è già in uso.",
  tl = () => "This email is already in use.",
  nl = () => "This email is already in use.",
  rl = () => "This email is already in use.",
  al = () => "This email is already in use.",
  il = () => "This email is already in use.",
  ol = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Yu() : e === "pt" ? $u() : e === "ch" ? Zu() : e === "de" ? Ju() : e === "es" ? Xu() : e === "fr" ? Qu() : e === "it" ? el() : e === "jp" ? tl() : e === "pl" ? nl() : e === "ru" ? rl() : e === "uk" ? al() : il()
  },
  sl = n => `This email is already in use by user #${n.userId}.`,
  cl = n => `Este e-mail já está em uso pelo usuário #${n.userId}.`,
  ul = n => `This email is already in use by user #${n.userId}.`,
  ll = n => `This email is already in use by user #${n.userId}.`,
  dl = n => `Este correo electrónico ya está en uso por el usuario #${n.userId}.`,
  _l = n => `This email is already in use by user #${n.userId}.`,
  fl = n => `Questa email è già in uso dall'utente #${n.userId}.`,
  hl = n => `This email is already in use by user #${n.userId}.`,
  ml = n => `This email is already in use by user #${n.userId}.`,
  pl = n => `This email is already in use by user #${n.userId}.`,
  gl = n => `This email is already in use by user #${n.userId}.`,
  wl = n => `This email is already in use by user #${n.userId}.`,
  yl = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? sl(n) : e === "pt" ? cl(n) : e === "ch" ? ul(n) : e === "de" ? ll(n) : e === "es" ? dl(n) : e === "fr" ? _l(n) : e === "it" ? fl(n) : e === "jp" ? hl(n) : e === "pl" ? ml(n) : e === "ru" ? pl(n) : e === "uk" ? gl(n) : wl(n)
  },
  vl = () => "Enter a valid email address.",
  bl = () => "Informe um endereço de e-mail válido.",
  El = () => "Enter a valid email address.",
  Tl = () => "Enter a valid email address.",
  Sl = () => "Introduce una dirección de correo electrónico válida.",
  Ol = () => "Enter a valid email address.",
  Il = () => "Inserisci un indirizzo email valido.",
  Al = () => "Enter a valid email address.",
  kl = () => "Enter a valid email address.",
  Rl = () => "Enter a valid email address.",
  Nl = () => "Enter a valid email address.",
  xl = () => "Enter a valid email address.",
  Dl = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? vl() : e === "pt" ? bl() : e === "ch" ? El() : e === "de" ? Tl() : e === "es" ? Sl() : e === "fr" ? Ol() : e === "it" ? Il() : e === "jp" ? Al() : e === "pl" ? kl() : e === "ru" ? Rl() : e === "uk" ? Nl() : xl()
  },
  Ll = n => `Error while painting: ${n.err}`,
  Ml = n => `Erro enquanto pinta: ${n.err}`,
  Pl = n => `绘制时出错：${n.err}`,
  Ul = n => `Fehler beim Malen: ${n.err}`,
  Cl = n => `Error al pintar: ${n.err}`,
  jl = n => `Erreur lors de la peinture : ${n.err}`,
  Fl = n => `Errore durante la pittura: ${n.err}`,
  Bl = n => `ペイント中にエラーが発生しました: ${n.err}`,
  zl = n => `Błąd podczas malowania: ${n.err}`,
  Vl = n => `Ошибка при рисовании: ${n.err}`,
  Gl = n => `Помилка під час малювання: ${n.err}`,
  Wl = n => `Lỗi khi tô: ${n.err}`,
  ql = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ll(n) : e === "pt" ? Ml(n) : e === "ch" ? Pl(n) : e === "de" ? Ul(n) : e === "es" ? Cl(n) : e === "fr" ? jl(n) : e === "it" ? Fl(n) : e === "jp" ? Bl(n) : e === "pl" ? zl(n) : e === "ru" ? Vl(n) : e === "uk" ? Gl(n) : Wl(n)
  },
  Kl = () => "Exceeded maximum number of characters",
  Hl = () => "Excedeu o número máximo de caracteres permitidos",
  Yl = () => "超出最大字符数",
  $l = () => "Maximale Zeichenanzahl überschritten",
  Zl = () => "Se excedió el número máximo de caracteres",
  Jl = () => "Nombre maximal de caractères dépassé",
  Xl = () => "Numero massimo di caratteri superato",
  Ql = () => "最大文字数を超過しました",
  ed = () => "Przekroczono maksymalną liczbę znaków",
  td = () => "Превышено максимальное количество символов",
  nd = () => "Перевищено максимальну кількість символів",
  rd = () => "Đã vượt quá số ký tự tối đa",
  ad = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Kl() : e === "pt" ? Hl() : e === "ch" ? Yl() : e === "de" ? $l() : e === "es" ? Zl() : e === "fr" ? Jl() : e === "it" ? Xl() : e === "jp" ? Ql() : e === "pl" ? ed() : e === "ru" ? td() : e === "uk" ? nd() : rd()
  },
  id = () => "Verification code expired. Please request a new one.",
  od = () => "Código de verificação expirado. Por favor, solicite um novo.",
  sd = () => "验证码已过期，请重新获取。",
  cd = () => "Bestätigungscode abgelaufen. Bitte fordern Sie einen neuen an.",
  ud = () => "Código de verificación expirado. Por favor, solicita uno nuevo.",
  ld = () => "Code de vérification expiré. Veuillez en demander un nouveau.",
  dd = () => "Codice di verifica scaduto. Per favore, richiedine uno nuovo.",
  _d = () => "確認コードの有効期限が切れました。新しいコードをリクエストしてください。",
  fd = () => "Kod weryfikacyjny wygasł. Poproś o nowy.",
  hd = () => "Код подтверждения истёк. Пожалуйста, запросите новый.",
  md = () => "Код підтвердження закінчився. Будь ласка, запросіть новий.",
  pd = () => "Mã xác minh đã hết hạn. Vui lòng yêu cầu mã mới.",
  gd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? id() : e === "pt" ? od() : e === "ch" ? sd() : e === "de" ? cd() : e === "es" ? ud() : e === "fr" ? ld() : e === "it" ? dd() : e === "jp" ? _d() : e === "pl" ? fd() : e === "ru" ? hd() : e === "uk" ? md() : pd()
  },
  wd = () => "Griefing",
  yd = () => "Griefing",
  vd = () => "破坏行为",
  bd = () => "Griefing",
  Ed = () => "Griefing",
  Td = () => "Griefing",
  Sd = () => "Griefing",
  Od = () => "グリーフィング",
  Id = () => "Griefing",
  Ad = () => "Гриферство",
  kd = () => "Гріфінг",
  Rd = () => "Griefing",
  Nd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? wd() : e === "pt" ? yd() : e === "ch" ? vd() : e === "de" ? bd() : e === "es" ? Ed() : e === "fr" ? Td() : e === "it" ? Sd() : e === "jp" ? Od() : e === "pl" ? Id() : e === "ru" ? Ad() : e === "uk" ? kd() : Rd()
  },
  xd = () => "Messed up with other's artworks",
  Dd = () => "Estragou os desenhos dos outros",
  Ld = () => "破坏了他人的作品",
  Md = () => "Kunstwerke anderer beschädigt",
  Pd = () => "Arruinó las obras de arte de otros",
  Ud = () => "A abîmé les œuvres des autres",
  Cd = () => "Ha rovinato i disegni degli altri",
  jd = () => "他人の作品を荒らした",
  Fd = () => "Zniszczył prace innych",
  Bd = () => "Испортил чужие рисунки",
  zd = () => "Зіпсував роботи інших",
  Vd = () => "Phá hỏng tranh của người khác",
  Gd = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? xd() : e === "pt" ? Dd() : e === "ch" ? Ld() : e === "de" ? Md() : e === "es" ? Pd() : e === "fr" ? Ud() : e === "it" ? Cd() : e === "jp" ? jd() : e === "pl" ? Fd() : e === "ru" ? Bd() : e === "uk" ? zd() : Vd()
  },
  Wd = () => "Hate speech",
  qd = () => "Discurso de Ódio",
  Kd = () => "仇恨言论",
  Hd = () => "Hassrede",
  Yd = () => "Discurso de odio",
  $d = () => "Discours haineux",
  Zd = () => "Discorso d'odio",
  Jd = () => "ヘイトスピーチ",
  Xd = () => "Mowa nienawiści",
  Qd = () => "Речь ненависти",
  e_ = () => "Мова ворожнечі",
  t_ = () => "Ngôn từ thù hằn",
  n_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Wd() : e === "pt" ? qd() : e === "ch" ? Kd() : e === "de" ? Hd() : e === "es" ? Yd() : e === "fr" ? $d() : e === "it" ? Zd() : e === "jp" ? Jd() : e === "pl" ? Xd() : e === "ru" ? Qd() : e === "uk" ? e_() : t_()
  },
  r_ = () => "Racism, homophobia, hate groups, ...",
  a_ = () => "Racismo, homofobia, grupos de ódio, ...",
  i_ = () => "种族主义、恐同、仇恨团体等",
  o_ = () => "Rassismus, Homophobie, Hassgruppen, ...",
  s_ = () => "Racismo, homofobia, grupos de odio, ...",
  c_ = () => "Racisme, homophobie, groupes haineux, ...",
  u_ = () => "Razzismo, omofobia, gruppi d'odio, ...",
  l_ = () => "人種差別、同性愛差別、ヘイト団体など。",
  d_ = () => "Rasizm, homofobia, grupy nienawiści, ...",
  __ = () => "Расизм, гомофобия, группы ненависти и т.п.",
  f_ = () => "Расизм, гомофобія, групи ненависті, ...",
  h_ = () => "Phân biệt chủng tộc, kỳ thị LGBT, nhóm thù hận, ...",
  m_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? r_() : e === "pt" ? a_() : e === "ch" ? i_() : e === "de" ? o_() : e === "es" ? s_() : e === "fr" ? c_() : e === "it" ? u_() : e === "jp" ? l_() : e === "pl" ? d_() : e === "ru" ? __() : e === "uk" ? f_() : h_()
  },
  p_ = () => "Inappropriate content",
  g_ = () => "Conteúdo inapropriado",
  w_ = () => "不当内容",
  y_ = () => "Unangemessene Inhalte",
  v_ = () => "Contenido inapropiado",
  b_ = () => "Contenu inapproprié",
  E_ = () => "Contenuto inappropriato",
  T_ = () => "不適切なコンテンツ",
  S_ = () => "Nieodpowiednie treści",
  O_ = () => "Неприемлемый контент",
  I_ = () => "Неприйнятний вміст",
  A_ = () => "Nội dung không phù hợp",
  k_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? p_() : e === "pt" ? g_() : e === "ch" ? w_() : e === "de" ? y_() : e === "es" ? v_() : e === "fr" ? b_() : e === "it" ? E_() : e === "jp" ? T_() : e === "pl" ? S_() : e === "ru" ? O_() : e === "uk" ? I_() : A_()
  },
  R_ = () => "Explicit, hateful, or illegal content",
  N_ = () => "Conteúdo explícito, de ódio ou ilegal",
  x_ = () => "露骨、仇恨或非法内容",
  D_ = () => "Expliziter, hasserfüllter oder illegaler Inhalt",
  L_ = () => "Contenido explícito, de odio o ilegal",
  M_ = () => "Contenu explicite, haineux ou illégal",
  P_ = () => "Contenuto esplicito, d'odio o illegale",
  U_ = () => "露骨、差別的、または違法なコンテンツ",
  C_ = () => "Treści o charakterze jawnie seksualnym, nawołujące do nienawiści lub nielegalne",
  j_ = () => "Откровенный, разжигающий ненависть или незаконный контент",
  F_ = () => "Відвертий, ворожий або незаконний вміст",
  B_ = () => "Nội dung phản cảm, thù ghét hoặc bất hợp pháp",
  z_ = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? R_() : e === "pt" ? N_() : e === "ch" ? x_() : e === "de" ? D_() : e === "es" ? L_() : e === "fr" ? M_() : e === "it" ? P_() : e === "jp" ? U_() : e === "pl" ? C_() : e === "ru" ? j_() : e === "uk" ? F_() : B_()
  },
  V_ = () => "Invalid captcha. Please try again.",
  G_ = () => "Captcha inválido. Por favor, tente novamente.",
  W_ = () => "验证码无效，请重试。",
  q_ = () => "Ungültiges Captcha. Bitte versuche es erneut.",
  K_ = () => "Captcha inválido. Por favor, inténtelo de nuevo.",
  H_ = () => "Captcha invalide. Veuillez réessayer.",
  Y_ = () => "Captcha non valido. Riprova.",
  $_ = () => "キャプチャが無効です。もう一度お試しください。",
  Z_ = () => "Nieprawidłowa captcha. Spróbuj ponownie.",
  J_ = () => "Неверная капча. Пожалуйста, попробуйте снова.",
  X_ = () => "Неправильна капча. Будь ласка, спробуйте ще раз.",
  Q_ = () => "Captcha không hợp lệ. Vui lòng thử lại.",
  ef = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? V_() : e === "pt" ? G_() : e === "ch" ? W_() : e === "de" ? q_() : e === "es" ? K_() : e === "fr" ? H_() : e === "it" ? Y_() : e === "jp" ? $_() : e === "pl" ? Z_() : e === "ru" ? J_() : e === "uk" ? X_() : Q_()
  },
  tf = () => "Invalid challenge response",
  nf = () => "Resposta de desafio inválida",
  rf = () => "质询响应无效",
  af = () => "Ungültige Challenge-Antwort",
  of = () => "Respuesta de desafío inválida",
  sf = () => "Réponse au défi invalide",
  cf = () => "Risposta alla sfida non valida",
  uf = () => "無効なチャレンジ応答",
  lf = () => "Nieprawidłowa odpowiedź na wyzwanie",
  df = () => "Неверный ответ на вызов",
  _f = () => "Недійсна відповідь на виклик",
  ff = () => "Phản hồi thử thách không hợp lệ",
  hf = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? tf() : e === "pt" ? nf() : e === "ch" ? rf() : e === "de" ? af() : e === "es" ? of() : e === "fr" ? sf() : e === "it" ? cf() : e === "jp" ? uf() : e === "pl" ? lf() : e === "ru" ? df() : e === "uk" ? _f() : ff()
  },
  mf = () => "Invalid code",
  pf = () => "Código inválido",
  gf = () => "验证码无效",
  wf = () => "Ungültiger Code",
  yf = () => "Código inválido",
  vf = () => "Code invalide",
  bf = () => "Codice non valido",
  Ef = () => "無効なコードです。",
  Tf = () => "Nieprawidłowy kod",
  Sf = () => "Неверный код",
  Of = () => "Невірний код",
  If = () => "Mã không hợp lệ",
  Af = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? mf() : e === "pt" ? pf() : e === "ch" ? gf() : e === "de" ? wf() : e === "es" ? yf() : e === "fr" ? vf() : e === "it" ? bf() : e === "jp" ? Ef() : e === "pl" ? Tf() : e === "ru" ? Sf() : e === "uk" ? Of() : If()
  },
  kf = () => "Invalid discord.",
  Rf = () => "Discord inválido.",
  Nf = () => "无效的 Discord。",
  xf = () => "Ungültiger Discord.",
  Df = () => "Discord inválido.",
  Lf = () => "Discord invalide.",
  Mf = () => "Discord non valido.",
  Pf = () => "無効なDiscordアカウントです。",
  Uf = () => "Nieprawidłowy Discord.",
  Cf = () => "Неверный Discord.",
  jf = () => "Некоректний Discord.",
  Ff = () => "Discord không hợp lệ.",
  Bf = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? kf() : e === "pt" ? Rf() : e === "ch" ? Nf() : e === "de" ? xf() : e === "es" ? Df() : e === "fr" ? Lf() : e === "it" ? Mf() : e === "jp" ? Pf() : e === "pl" ? Uf() : e === "ru" ? Cf() : e === "uk" ? jf() : Ff()
  },
  zf = () => "The name contains disallowed characters or words. Please choose a different name.",
  Vf = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.",
  Gf = () => "名称包含禁止的字符或词语，请选择其他名称。",
  Wf = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.",
  qf = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.",
  Kf = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.",
  Hf = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.",
  Yf = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。",
  $f = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.",
  Zf = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.",
  Jf = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.",
  Xf = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.",
  En = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? zf() : e === "pt" ? Vf() : e === "ch" ? Gf() : e === "de" ? Wf() : e === "es" ? qf() : e === "fr" ? Kf() : e === "it" ? Hf() : e === "jp" ? Yf() : e === "pl" ? $f() : e === "ru" ? Zf() : e === "uk" ? Jf() : Xf()
  },
  Qf = () => "Invalid phone number",
  eh = () => "Número de telefone inválido",
  th = () => "无效的电话号码",
  nh = () => "Ungültige Telefonnummer",
  rh = () => "Número de teléfono inválido",
  ah = () => "Numéro de téléphone invalide",
  ih = () => "Numero di telefono non valido",
  oh = () => "無効な電話番号です。",
  sh = () => "Nieprawidłowy numer telefonu",
  ch = () => "Неверный номер телефона",
  uh = () => "Некоректний номер телефону",
  lh = () => "Số điện thoại không hợp lệ",
  dh = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Qf() : e === "pt" ? eh() : e === "ch" ? th() : e === "de" ? nh() : e === "es" ? rh() : e === "fr" ? ah() : e === "it" ? ih() : e === "jp" ? oh() : e === "pl" ? sh() : e === "ru" ? ch() : e === "uk" ? uh() : lh()
  },
  _h = () => "This phone number appears to be a landline. Please use a mobile number that can receive SMS.",
  fh = () => "Este número de telefone parece ser fixo. Por favor, use um número de celular que possa receber SMS.",
  hh = () => "此电话号码似乎是固定电话。请使用可以接收短信的手机号码。",
  mh = () => "Diese Telefonnummer scheint ein Festnetzanschluss zu sein. Bitte verwende eine Mobilnummer, die SMS empfangen kann.",
  ph = () => "Este número de teléfono parece ser fijo. Por favor, usa un número de celular que pueda recibir SMS.",
  gh = () => "Ce numéro de téléphone semble être un fixe. Veuillez utiliser un numéro de mobile pouvant recevoir des SMS.",
  wh = () => "Questo numero di telefono sembra essere un fisso. Utilizza un numero di cellulare che possa ricevere SMS.",
  yh = () => "この電話番号は固定電話のようです。SMSを受信できる携帯電話番号をご使用ください。",
  vh = () => "Ten numer telefonu wydaje się być stacjonarny. Użyj numeru komórkowego, który może odbierać SMS-y.",
  bh = () => "Этот номер телефона является стационарным. Пожалуйста, используйте мобильный номер, который может принимать SMS.",
  Eh = () => "Цей номер телефону є стаціонарним. Будь ласка, використовуйте мобільний номер, який може отримувати SMS.",
  Th = () => "Số điện thoại này có vẻ là số cố định. Vui lòng sử dụng số di động có thể nhận SMS.",
  Sh = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? _h() : e === "pt" ? fh() : e === "ch" ? hh() : e === "de" ? mh() : e === "es" ? ph() : e === "fr" ? gh() : e === "it" ? wh() : e === "jp" ? yh() : e === "pl" ? vh() : e === "ru" ? bh() : e === "uk" ? Eh() : Th()
  },
  Oh = () => "The new leader must be a member of the alliance",
  Ih = () => "O novo líder deve ser um membro da aliança",
  Ah = () => "新盟主必须是联盟成员",
  kh = () => "Der neue Anführer muss Mitglied der Allianz sein",
  Rh = () => "El nuevo líder debe ser miembro de la alianza",
  Nh = () => "Le nouveau chef doit être membre de l’alliance",
  xh = () => "Il nuovo leader deve essere un membro dell'alleanza",
  Dh = () => "新しいリーダーはアライアンスのメンバーである必要があります。",
  Lh = () => "Nowy lider musi być członkiem sojuszu",
  Mh = () => "Новый лидер должен быть участником альянса",
  Ph = () => "Новий лідер має бути учасником альянсу",
  Uh = () => "Thủ lĩnh mới phải là thành viên của liên minh",
  Ch = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Oh() : e === "pt" ? Ih() : e === "ch" ? Ah() : e === "de" ? kh() : e === "es" ? Rh() : e === "fr" ? Nh() : e === "it" ? xh() : e === "jp" ? Dh() : e === "pl" ? Lh() : e === "ru" ? Mh() : e === "uk" ? Ph() : Uh()
  },
  jh = () => "Leaderboard is temporarily disabled",
  Fh = () => "O ranking está temporariamente desativado",
  Bh = () => "排行榜已暂时停用",
  zh = () => "Die Bestenliste ist vorübergehend deaktiviert",
  Vh = () => "La clasificación está deshabilitada temporalmente",
  Gh = () => "Le classement est temporairement désactivé",
  Wh = () => "La classifica è temporaneamente disattivata",
  qh = () => "ランキングは一時的に無効になっています。",
  Kh = () => "Ranking jest tymczasowo wyłączony",
  Hh = () => "Таблица лидеров временно отключена",
  Yh = () => "Таблиця лідерів тимчасово вимкнена",
  $h = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa",
  ue = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? jh() : e === "pt" ? Fh() : e === "ch" ? Bh() : e === "de" ? zh() : e === "es" ? Vh() : e === "fr" ? Gh() : e === "it" ? Wh() : e === "jp" ? qh() : e === "pl" ? Kh() : e === "ru" ? Hh() : e === "uk" ? Yh() : $h()
  },
  Zh = () => "Location name is too big (max. 128 characters)",
  Jh = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Xh = () => "位置名称过长（最大 128 个字符）",
  Qh = () => "Ortsname ist zu lang (max. 128 Zeichen)",
  em = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)",
  tm = () => "Le nom de l’emplacement est trop long (max. 128 caractères)",
  nm = () => "Il nome della località è troppo lungo (max. 128 caratteri)",
  rm = () => "場所の名前が長すぎます（最大128文字）。",
  am = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)",
  im = () => "Название локации слишком длинное (макс. 128 символов)",
  om = () => "Назва локації надто довга (макс. 128 символів)",
  sm = () => "Tên vị trí quá dài (tối đa 128 ký tự)",
  cm = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Zh() : e === "pt" ? Jh() : e === "ch" ? Xh() : e === "de" ? Qh() : e === "es" ? em() : e === "fr" ? tm() : e === "it" ? nm() : e === "jp" ? rm() : e === "pl" ? am() : e === "ru" ? im() : e === "uk" ? om() : sm()
  },
  um = () => "Multi-accounting",
  lm = () => "Múltiplas contas",
  dm = () => "多账号",
  _m = () => "Multi-Accounting",
  fm = () => "Multi-cuentas",
  hm = () => "Multi-comptes",
  mm = () => "Multi-account",
  pm = () => "複数アカウント使用",
  gm = () => "Multi-konta",
  wm = () => "Мультиаккаунт",
  ym = () => "Мультиакаунтинг",
  vm = () => "Nhiều tài khoản",
  bm = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? um() : e === "pt" ? lm() : e === "ch" ? dm() : e === "de" ? _m() : e === "es" ? fm() : e === "fr" ? hm() : e === "it" ? mm() : e === "jp" ? pm() : e === "pl" ? gm() : e === "ru" ? wm() : e === "uk" ? ym() : vm()
  },
  Em = () => "Use more than one account to paint pixels",
  Tm = () => "Usar mais de uma conta para pintar",
  Sm = () => "使用多个账号绘制像素",
  Om = () => "Mehr als ein Konto zum Malen verwenden",
  Im = () => "Uso de más de una cuenta para pintar píxeles",
  Am = () => "Utiliser plus d’un compte pour peindre",
  km = () => "Usare più di un account per dipingere",
  Rm = () => "複数のアカウントを使ってピクセルを塗った。",
  Nm = () => "Używanie więcej niż jednego konta do malowania pikseli",
  xm = () => "Использование более одного аккаунта для рисования",
  Dm = () => "Використання більше ніж одного акаунта для малювання",
  Lm = () => "Sử dụng nhiều hơn một tài khoản để tô pixel",
  Mm = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Em() : e === "pt" ? Tm() : e === "ch" ? Sm() : e === "de" ? Om() : e === "es" ? Im() : e === "fr" ? Am() : e === "it" ? km() : e === "jp" ? Rm() : e === "pl" ? Nm() : e === "ru" ? xm() : e === "uk" ? Dm() : Lm()
  },
  Pm = n => `You can change your name again in ${n.days} days`,
  Um = n => `Você pode alterar seu nome novamente em ${n.days} dias.`,
  Cm = n => `你可以在 ${n.days} 天后再次修改名称`,
  jm = n => `Du kannst deinen Namen in ${n.days} Tagen erneut ändern`,
  Fm = n => `Podrás cambiar tu nombre de nuevo en ${n.days} días`,
  Bm = n => `Vous pourrez changer votre nom à nouveau dans ${n.days} jours`,
  zm = n => `Potrai cambiare di nuovo il tuo nome tra ${n.days} giorni.`,
  Vm = n => `${n.days}日後に再び名前を変更できます。`,
  Gm = n => `Następną zmianę nazwy możesz wykonać za ${n.days} dni`,
  Wm = n => `Вы сможете изменить имя снова через ${n.days} дн.`,
  qm = n => `Ви зможете змінити імʼя знову через ${n.days} днів`,
  Km = n => `Bạn có thể đổi tên lại sau ${n.days} ngày`,
  Hm = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Pm(n) : e === "pt" ? Um(n) : e === "ch" ? Cm(n) : e === "de" ? jm(n) : e === "es" ? Fm(n) : e === "fr" ? Bm(n) : e === "it" ? zm(n) : e === "jp" ? Vm(n) : e === "pl" ? Gm(n) : e === "ru" ? Wm(n) : e === "uk" ? qm(n) : Km(n)
  },
  Ym = () => "No internet access or the servers are offline. Try again later.",
  $m = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  Zm = () => "没有网络连接或服务器已离线。请稍后重试。",
  Jm = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.",
  Xm = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.",
  Qm = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.",
  ep = () => "Nessun accesso a internet o server offline. Riprova più tardi.",
  tp = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。",
  np = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.",
  rp = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.",
  ap = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.",
  ip = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.",
  op = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ym() : e === "pt" ? $m() : e === "ch" ? Zm() : e === "de" ? Jm() : e === "es" ? Xm() : e === "fr" ? Qm() : e === "it" ? ep() : e === "jp" ? tp() : e === "pl" ? np() : e === "ru" ? rp() : e === "uk" ? ap() : ip()
  },
  sp = () => "You are not allowed to verify a phone number. Try refreshing the page",
  cp = () => "Você não está autorizado a verificar um número de telefone. Tente atualizar a página.",
  up = () => "您无权验证电话号码。请尝试刷新页面。",
  lp = () => "Sie dürfen keine Telefonnummer verifizieren. Versuchen Sie, die Seite zu aktualisieren.",
  dp = () => "No tienes permiso para verificar un número de teléfono. Prueba a recargar la página.",
  _p = () => "Vous n'êtes pas autorisé à vérifier un numéro de téléphone. Essayez d'actualiser la page.",
  fp = () => "Non ti è consentito verificare un numero di telefono. Prova ad aggiornare la pagina.",
  hp = () => "電話番号の認証は許可されていません。ページを更新してみてください。",
  mp = () => "Nie możesz zweryfikować numeru telefonu. Spróbuj odświeżyć stronę.",
  pp = () => "Вам не разрешено подтверждать номер телефона. Попробуйте обновить страницу.",
  gp = () => "Вам не дозволено перевіряти номер телефону. Спробуйте оновити сторінку.",
  wp = () => "Bạn không được phép xác minh số điện thoại. Vui lòng thử tải lại trang.",
  yp = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? sp() : e === "pt" ? cp() : e === "ch" ? up() : e === "de" ? lp() : e === "es" ? dp() : e === "fr" ? _p() : e === "it" ? fp() : e === "jp" ? hp() : e === "pl" ? mp() : e === "ru" ? pp() : e === "uk" ? gp() : wp()
  },
  vp = () => "Operation not allowed. Maybe you have too many favorite locations.",
  bp = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ep = () => "操作不被允许。你的收藏位置可能过多。",
  Tp = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.",
  Sp = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.",
  Op = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.",
  Ip = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.",
  Ap = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。",
  kp = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.",
  Rp = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.",
  Np = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.",
  xp = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.",
  Dp = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? vp() : e === "pt" ? bp() : e === "ch" ? Ep() : e === "de" ? Tp() : e === "es" ? Sp() : e === "fr" ? Op() : e === "it" ? Ip() : e === "jp" ? Ap() : e === "pl" ? kp() : e === "ru" ? Rp() : e === "uk" ? Np() : xp()
  },
  Lp = () => "You are trying to paint with a color you do not own",
  Mp = () => "Você está tentando pintar com uma cor que não possui",
  Pp = () => "你正在尝试使用尚未拥有的颜色进行绘制",
  Up = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt",
  Cp = () => "Estás intentando pintar con un color que no posees",
  jp = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas",
  Fp = () => "Stai cercando di dipingere con un colore che non possiedi",
  Bp = () => "所持していない色で塗ろうとしています。",
  zp = () => "Próbujesz malować kolorem, którego nie posiadasz",
  Vp = () => "Вы пытаетесь рисовать цветом, которого у вас нет",
  Gp = () => "Ви намагаєтеся малювати кольором, якого не маєте",
  Wp = () => "Bạn đang cố tô bằng một màu bạn không sở hữu",
  Tn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Lp() : e === "pt" ? Mp() : e === "ch" ? Pp() : e === "de" ? Up() : e === "es" ? Cp() : e === "fr" ? jp() : e === "it" ? Fp() : e === "jp" ? Bp() : e === "pl" ? zp() : e === "ru" ? Vp() : e === "uk" ? Gp() : Wp()
  },
  qp = () => "Phone already used",
  Kp = () => "Telefone já usado",
  Hp = () => "电话号码已被使用",
  Yp = () => "Telefonnummer bereits verwendet",
  $p = () => "Teléfono ya utilizado",
  Zp = () => "Téléphone déjà utilisé",
  Jp = () => "Telefono già utilizzato",
  Xp = () => "この電話番号は既に使用されています。",
  Qp = () => "Numer telefonu jest już używany",
  eg = () => "Телефон уже используется",
  tg = () => "Номер телефону вже використовується",
  ng = () => "Số điện thoại đã được sử dụng",
  rg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? qp() : e === "pt" ? Kp() : e === "ch" ? Hp() : e === "de" ? Yp() : e === "es" ? $p() : e === "fr" ? Zp() : e === "it" ? Jp() : e === "jp" ? Xp() : e === "pl" ? Qp() : e === "ru" ? eg() : e === "uk" ? tg() : ng()
  },
  ag = () => "This phone number's region is not supported",
  ig = () => "A região deste número de telefone não é suportada",
  og = () => "此电话号码的地区不受支持",
  sg = () => "Die Region dieser Telefonnummer wird nicht unterstützt",
  cg = () => "La región de este número de teléfono no es compatible",
  ug = () => "La région de ce numéro de téléphone n'est pas prise en charge",
  lg = () => "La regione di questo numero di telefono non è supportata",
  dg = () => "この電話番号の地域はサポートされていません",
  _g = () => "Region tego numeru telefonu nie jest obsługiwany",
  fg = () => "Регион этого номера телефона не поддерживается",
  hg = () => "Регіон цього номера телефону не підтримується",
  mg = () => "Vùng của số điện thoại này không được hỗ trợ",
  pg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ag() : e === "pt" ? ig() : e === "ch" ? og() : e === "de" ? sg() : e === "es" ? cg() : e === "fr" ? ug() : e === "it" ? lg() : e === "jp" ? dg() : e === "pl" ? _g() : e === "ru" ? fg() : e === "uk" ? hg() : mg()
  },
  gg = () => "Refresh your page to get the latest update",
  wg = () => "Recarregue sua página para obter as últimas atualizações",
  yg = () => "刷新页面以获取最新更新",
  vg = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten",
  bg = () => "Actualiza la página para obtener la última versión",
  Eg = () => "Actualisez la page pour obtenir les dernières mises à jour",
  Tg = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti",
  Sg = () => "最新の状態にするにはページを再読み込みしてください。",
  Og = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację",
  Ig = () => "Обновите страницу, чтобы получить последние изменения",
  Ag = () => "Оновіть сторінку, щоб отримати останні оновлення",
  kg = () => "Hãy làm mới trang để nhận được cập nhật mới nhất",
  Sn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? gg() : e === "pt" ? wg() : e === "ch" ? yg() : e === "de" ? vg() : e === "es" ? bg() : e === "fr" ? Eg() : e === "it" ? Tg() : e === "jp" ? Sg() : e === "pl" ? Og() : e === "ru" ? Ig() : e === "uk" ? Ag() : kg()
  },
  Rg = () => "The request timed out. Please try again.",
  Ng = () => "A solicitação expirou. Por favor, tente novamente.",
  xg = () => "请求超时。请重试。",
  Dg = () => "Die Anfrage hat ein Zeitlimit überschritten. Bitte versuchen Sie es erneut.",
  Lg = () => "La solicitud agotó el tiempo de espera. Por favor, inténtelo de nuevo.",
  Mg = () => "La requête a expiré. Veuillez réessayer.",
  Pg = () => "La richiesta è scaduta. Riprova.",
  Ug = () => "リクエストがタイムアウトしました。もう一度お試しください。",
  Cg = () => "Żądanie przekroczyło limit czasu. Proszę spróbować ponownie.",
  jg = () => "Время ожидания запроса истекло. Пожалуйста, попробуйте снова.",
  Fg = () => "Час очікування запиту вичерпано. Будь ласка, спробуйте ще раз.",
  Bg = () => "Yêu cầu đã hết thời gian. Vui lòng thử lại.",
  zg = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Rg() : e === "pt" ? Ng() : e === "ch" ? xg() : e === "de" ? Dg() : e === "es" ? Lg() : e === "fr" ? Mg() : e === "it" ? Pg() : e === "jp" ? Ug() : e === "pl" ? Cg() : e === "ru" ? jg() : e === "uk" ? Fg() : Bg()
  },
  Vg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Gg = () => "A área selecionada tem histórico demais para exportar um timelapse. Tente uma área menor.",
  Wg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  qg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Kg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Hg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Yg = () => "L'area selezionata ha troppa cronologia per esportare un timelapse. Prova con un'area più piccola.",
  $g = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Zg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Jg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Xg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  Qg = () => "Selected area has too much history to export a timelapse. Try a smaller area.",
  ew = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Vg() : e === "pt" ? Gg() : e === "ch" ? Wg() : e === "de" ? qg() : e === "es" ? Kg() : e === "fr" ? Hg() : e === "it" ? Yg() : e === "jp" ? $g() : e === "pl" ? Zg() : e === "ru" ? Jg() : e === "uk" ? Xg() : Qg()
  },
  tw = () => "The service is currently unavailable. Please try again later.",
  nw = () => "O serviço está indisponível no momento. Por favor, tente novamente mais tarde.",
  rw = () => "服务当前不可用。请稍后再试。",
  aw = () => "Der Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
  iw = () => "El servicio no está disponible actualmente. Por favor, inténtelo de nuevo más tarde.",
  ow = () => "Le service est actuellement indisponible. Veuillez réessayer plus tard.",
  sw = () => "Il servizio non è attualmente disponibile. Riprova più tardi.",
  cw = () => "現在、サービスはご利用いただけません。後でもう一度お試しください。",
  uw = () => "Usługa jest obecnie niedostępna. Proszę spróbować ponownie później.",
  lw = () => "Сервис в настоящее время недоступен. Пожалуйста, попробуйте позже.",
  dw = () => "Сервіс наразі недоступний. Будь ласка, спробуйте пізніше.",
  _w = () => "Dịch vụ hiện không khả dụng. Vui lòng thử lại sau.",
  fw = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? tw() : e === "pt" ? nw() : e === "ch" ? rw() : e === "de" ? aw() : e === "es" ? iw() : e === "fr" ? ow() : e === "it" ? sw() : e === "jp" ? cw() : e === "pl" ? uw() : e === "ru" ? lw() : e === "uk" ? dw() : _w()
  },
  hw = () => "Too many attempts. Please try again later",
  mw = () => "Muitas tentativas. Por favor, tente novamente mais tarde.",
  pw = () => "尝试次数过多，请稍后再试",
  gw = () => "Zu viele Versuche. Bitte versuchen Sie es später erneut",
  ww = () => "Demasiados intentos. Por favor, inténtalo de nuevo más tarde",
  yw = () => "Trop de tentatives. Veuillez réessayer plus tard",
  vw = () => "Troppi tentativi. Riprova più tardi.",
  bw = () => "試行回数が多すぎます。後で再度お試しください。",
  Ew = () => "Zbyt wiele prób. Proszę spróbować ponownie później",
  Tw = () => "Слишком много попыток. Пожалуйста, попробуйте позже",
  Sw = () => "Забагато спроб. Будь ласка, спробуйте пізніше",
  Ow = () => "Quá nhiều lần thử. Vui lòng thử lại sau.",
  On = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? hw() : e === "pt" ? mw() : e === "ch" ? pw() : e === "de" ? gw() : e === "es" ? ww() : e === "fr" ? yw() : e === "it" ? vw() : e === "jp" ? bw() : e === "pl" ? Ew() : e === "ru" ? Tw() : e === "uk" ? Sw() : Ow()
  },
  Iw = () => "The typed username does not match your current username.",
  Aw = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.",
  kw = () => "输入的用户名与当前用户名不匹配。",
  Rw = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.",
  Nw = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.",
  xw = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.",
  Dw = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.",
  Lw = () => "入力されたユーザー名が、現在のユーザー名と一致しません。",
  Mw = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.",
  Pw = () => "Введённое имя пользователя не совпадает с текущим.",
  Uw = () => "Введене імʼя користувача не збігається з поточним.",
  Cw = () => "Tên người dùng nhập vào không trùng với tên hiện tại.",
  jw = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Iw() : e === "pt" ? Aw() : e === "ch" ? kw() : e === "de" ? Rw() : e === "es" ? Nw() : e === "fr" ? xw() : e === "it" ? Dw() : e === "jp" ? Lw() : e === "pl" ? Mw() : e === "ru" ? Pw() : e === "uk" ? Uw() : Cw()
  },
  Fw = () => "Unexpected server error. Try again later.",
  Bw = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  zw = () => "服务器出现意外错误。请稍后再试。",
  Vw = () => "Unerwarteter Serverfehler. Versuche es später erneut.",
  Gw = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.",
  Ww = () => "Erreur serveur inattendue. Réessayez plus tard.",
  qw = () => "Errore imprevisto del server. Riprova più tardi.",
  Kw = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。",
  Hw = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.",
  Yw = () => "Непредвиденная ошибка сервера. Попробуйте позже.",
  $w = () => "Неочікувана помилка сервера. Спробуйте пізніше.",
  Zw = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.",
  f = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Fw() : e === "pt" ? Bw() : e === "ch" ? zw() : e === "de" ? Vw() : e === "es" ? Gw() : e === "fr" ? Ww() : e === "it" ? qw() : e === "jp" ? Kw() : e === "pl" ? Hw() : e === "ru" ? Yw() : e === "uk" ? $w() : Zw()
  },
  Jw = () => "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610",
  Xw = () => "O número de telefone foi desinscrito das notificações por SMS. Verifique o link para mais informações: https://www.twilio.com/docs/api/errors/21610",
  Qw = () => "电话号码已退订短信通知。请查看链接获取更多信息：https://www.twilio.com/docs/api/errors/21610",
  ey = () => "Die Telefonnummer wurde von SMS-Benachrichtigungen abgemeldet. Weitere Informationen finden Sie unter: https://www.twilio.com/docs/api/errors/21610",
  ty = () => "El número de teléfono ha sido dado de baja de las notificaciones por SMS. Consulta el enlace para más información: https://www.twilio.com/docs/api/errors/21610",
  ny = () => "Le numéro de téléphone est désabonné des notifications par SMS. Consultez le lien pour plus d'informations : https://www.twilio.com/docs/api/errors/21610",
  ry = () => "Il numero di telefono è stato disiscritto dalle notifiche SMS. Per maggiori informazioni, consulta il link: https://www.twilio.com/docs/api/errors/21610",
  ay = () => "この電話番号はSMS通知から登録解除されました。詳細については、以下のリンクをご確認ください: https://www.twilio.com/docs/api/errors/21610",
  iy = () => "Numer telefonu został wypisany z powiadomień SMS. Sprawdź link, aby uzyskać więcej informacji: https://www.twilio.com/docs/api/errors/21610",
  oy = () => "Номер телефона отписан от SMS-уведомлений. Дополнительную информацию смотрите по ссылке: https://www.twilio.com/docs/api/errors/21610",
  sy = () => "Номер телефону відключено від SMS-сповіщень. Перегляньте посилання для отримання додаткової інформації: https://www.twilio.com/docs/api/errors/21610",
  cy = () => "Số điện thoại này đã hủy đăng ký nhận thông báo SMS. Kiểm tra liên kết để biết thêm thông tin: https://www.twilio.com/docs/api/errors/21610",
  uy = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Jw() : e === "pt" ? Xw() : e === "ch" ? Qw() : e === "de" ? ey() : e === "es" ? ty() : e === "fr" ? ny() : e === "it" ? ry() : e === "jp" ? ay() : e === "pl" ? iy() : e === "ru" ? oy() : e === "uk" ? sy() : cy()
  },
  ly = () => "Failed to load WebAssembly module. Try to use another browser.",
  dy = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.",
  _y = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。",
  fy = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.",
  hy = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.",
  my = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.",
  py = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.",
  gy = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。",
  wy = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.",
  yy = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.",
  vy = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.",
  by = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.",
  Ey = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ly() : e === "pt" ? dy() : e === "ch" ? _y() : e === "de" ? fy() : e === "es" ? hy() : e === "fr" ? my() : e === "it" ? py() : e === "jp" ? gy() : e === "pl" ? wy() : e === "ru" ? yy() : e === "uk" ? vy() : by()
  },
  Ty = () => "You already have this item. Please refresh the page.",
  Sy = () => "Você já possui este item. Atualize a página.",
  Oy = () => "你已经拥有此物品。请刷新页面。",
  Iy = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.",
  Ay = () => "Ya tienes este ítem. Actualiza la página.",
  ky = () => "Vous possédez déjà cet objet. Actualisez la page.",
  Ry = () => "Possiedi già questo oggetto. Aggiorna la pagina.",
  Ny = () => "このアイテムはすでに所持しています。ページを更新してください。",
  xy = () => "Masz już ten przedmiot. Odśwież stronę.",
  Dy = () => "У вас уже есть этот предмет. Обновите страницу.",
  Ly = () => "У вас уже є цей предмет. Оновіть сторінку.",
  My = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.",
  In = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Ty() : e === "pt" ? Sy() : e === "ch" ? Oy() : e === "de" ? Iy() : e === "es" ? Ay() : e === "fr" ? ky() : e === "it" ? Ry() : e === "jp" ? Ny() : e === "pl" ? xy() : e === "ru" ? Dy() : e === "uk" ? Ly() : My()
  },
  Py = () => "You are already in an alliance",
  Uy = () => "Você já está em uma aliança",
  Cy = () => "你已经在一个联盟中",
  jy = () => "Du bist bereits in einer Allianz",
  Fy = () => "Ya estás en una alianza",
  By = () => "Vous êtes déjà dans une alliance",
  zy = () => "Sei già in un'alleanza",
  Vy = () => "すでにアライアンスに所属しています。",
  Gy = () => "Jesteś już w sojuszu",
  Wy = () => "Вы уже состоите в альянсе",
  qy = () => "Ви вже перебуваєте в альянсі",
  Ky = () => "Bạn đã ở trong một liên minh",
  Hy = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Py() : e === "pt" ? Uy() : e === "ch" ? Cy() : e === "de" ? jy() : e === "es" ? Fy() : e === "fr" ? By() : e === "it" ? zy() : e === "jp" ? Vy() : e === "pl" ? Gy() : e === "ru" ? Wy() : e === "uk" ? qy() : Ky()
  },
  Yy = () => "You are not allowed to do this",
  $y = () => "Você não tem permissão para fazer isso",
  Zy = () => "你无权执行此操作",
  Jy = () => "Du bist dazu nicht berechtigt",
  Xy = () => "No tienes permiso para hacer esto",
  Qy = () => "Vous n’êtes pas autorisé à faire cela",
  ev = () => "Non hai il permesso di farlo",
  tv = () => "この操作を行う権限がありません。",
  nv = () => "Nie masz uprawnień, aby to zrobić",
  rv = () => "У вас нет прав для этого действия",
  av = () => "Ви не маєте права це робити",
  iv = () => "Bạn không có quyền làm việc này",
  le = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Yy() : e === "pt" ? $y() : e === "ch" ? Zy() : e === "de" ? Jy() : e === "es" ? Xy() : e === "fr" ? Qy() : e === "it" ? ev() : e === "jp" ? tv() : e === "pl" ? nv() : e === "ru" ? rv() : e === "uk" ? av() : iv()
  },
  ov = () => "You do not have enough Droplets to buy this item.",
  sv = () => "Você não tem gotas suficientes para comprar este item.",
  cv = () => "你的水滴不足，无法购买此物品。",
  uv = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.",
  lv = () => "No tienes suficientes gotas para comprar este ítem.",
  dv = () => "Vous n’avez pas assez de droplets pour acheter cet objet.",
  _v = () => "Non hai abbastanza gocce per acquistare questo oggetto.",
  fv = () => "このアイテムを購入するのに十分なドロップレットがありません。",
  hv = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.",
  mv = () => "У вас недостаточно droplets для покупки этого предмета.",
  pv = () => "У вас недостатньо дроплетів, щоб купити цей предмет.",
  gv = () => "Bạn không có đủ droplets để mua vật phẩm này.",
  An = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? ov() : e === "pt" ? sv() : e === "ch" ? cv() : e === "de" ? uv() : e === "es" ? lv() : e === "fr" ? dv() : e === "it" ? _v() : e === "jp" ? fv() : e === "pl" ? hv() : e === "ru" ? mv() : e === "uk" ? pv() : gv()
  },
  wv = () => "You need to be logged in to paint",
  yv = () => "Você precisa estar conectado para pintar",
  vv = () => "你需要登录才能进行绘制",
  bv = () => "Du musst eingeloggt sein, um zu malen",
  Ev = () => "Debes iniciar sesión para pintar",
  Tv = () => "Vous devez être connecté pour peindre",
  Sv = () => "Devi avere effettuato l'accesso per dipingere",
  Ov = () => "ペイントするにはログインが必要です。",
  Iv = () => "Musisz być zalogowany, aby malować",
  Av = () => "Чтобы рисовать, нужно войти в аккаунт",
  kv = () => "Щоб малювати, необхідно увійти в акаунт",
  Rv = () => "Bạn cần đăng nhập để tô",
  kn = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? wv() : e === "pt" ? yv() : e === "ch" ? vv() : e === "de" ? bv() : e === "es" ? Ev() : e === "fr" ? Tv() : e === "it" ? Sv() : e === "jp" ? Ov() : e === "pl" ? Iv() : e === "ru" ? Av() : e === "uk" ? kv() : Rv()
  },
  Nv = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  xv = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  Dv = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。",
  Lv = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.",
  Mv = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.",
  Pv = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.",
  Uv = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.",
  Cv = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。",
  jv = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.",
  Fv = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.",
  Bv = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.",
  zv = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.",
  Vv = (n = {}, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Nv() : e === "pt" ? xv() : e === "ch" ? Dv() : e === "de" ? Lv() : e === "es" ? Mv() : e === "fr" ? Pv() : e === "it" ? Uv() : e === "jp" ? Cv() : e === "pl" ? jv() : e === "ru" ? Fv() : e === "uk" ? Bv() : zv()
  },
  Gv = n => `Your account has been suspended out until ${n.until}`,
  Wv = n => `A sua conta está suspensa até ${n.until}`,
  qv = n => `你的账号已被暂停至 ${n.until}`,
  Kv = n => `Dein Konto ist gesperrt bis ${n.until}`,
  Hv = n => `Tu cuenta ha sido suspendida hasta ${n.until}`,
  Yv = n => `Votre compte est suspendu jusqu’au ${n.until}`,
  $v = n => `Il tuo account è sospeso fino al ${n.until}`,
  Zv = n => `あなたのアカウントは${n.until}まで一時停止されています。`,
  Jv = n => `Twoje konto zostało zawieszone do ${n.until}`,
  Xv = n => `Ваш аккаунт заблокирован до ${n.until}`,
  Qv = n => `Ваш акаунт призупинено до ${n.until}`,
  eb = n => `Tài khoản của bạn đã bị đình chỉ đến ${n.until}`,
  Rn = (n, t = {}) => {
    const e = t.locale ?? p();
    return e === "en" ? Gv(n) : e === "pt" ? Wv(n) : e === "ch" ? qv(n) : e === "de" ? Kv(n) : e === "es" ? Hv(n) : e === "fr" ? Yv(n) : e === "it" ? $v(n) : e === "jp" ? Zv(n) : e === "pl" ? Jv(n) : e === "ru" ? Xv(n) : e === "uk" ? Qv(n) : eb(n)
  };
let R;
const ae = new Array(128).fill(void 0);
ae.push(void 0, null, !0, !1);

function I(n) {
  return ae[n]
}
const or = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && or.decode();
let Oe = null;

function Ne() {
  return (Oe === null || Oe.byteLength === 0) && (Oe = new Uint8Array(R.memory.buffer)), Oe
}

function Ie(n, t) {
  return n = n >>> 0, or.decode(Ne().subarray(n, n + t))
}
let xe = ae.length;

function x(n) {
  xe === ae.length && ae.push(ae.length + 1);
  const t = xe;
  return xe = ae[t], ae[t] = n, t
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

function tb(n) {
  n < 132 || (ae[n] = xe, xe = n)
}

function Nn(n) {
  const t = I(n);
  return tb(n), t
}
const xn = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  R.__wbindgen_export_1.get(n.dtor)(n.a, n.b)
});

function nb(n, t, e, r) {
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
        --a.cnt === 0 ? (R.__wbindgen_export_1.get(a.dtor)(s, a.b), xn.unregister(a)) : a.a = s
      }
    };
  return i.original = a, xn.register(i, a, a), i
}
let _e = null;

function gt() {
  return (_e === null || _e.buffer.detached === !0 || _e.buffer.detached === void 0 && _e.buffer !== R.memory.buffer) && (_e = new DataView(R.memory.buffer)), _e
}
let he = 0;
const _t = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  rb = typeof _t.encodeInto == "function" ? function(n, t) {
    return _t.encodeInto(n, t)
  } : function(n, t) {
    const e = _t.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Wt(n, t, e) {
  if (e === void 0) {
    const s = _t.encode(n),
      l = t(s.length, 1) >>> 0;
    return Ne().subarray(l, l + s.length).set(s), he = s.length, l
  }
  let r = n.length,
    a = t(r, 1) >>> 0;
  const i = Ne();
  let o = 0;
  for (; o < r; o++) {
    const s = n.charCodeAt(o);
    if (s > 127) break;
    i[a + o] = s
  }
  if (o !== r) {
    o !== 0 && (n = n.slice(o)), a = e(a, r, r = o + n.length * 3, 1) >>> 0;
    const s = Ne().subarray(a + o, a + r),
      l = rb(n, s);
    o += l.written, a = e(a, r, o, 1) >>> 0
  }
  return he = o, a
}

function ab(n) {
  const t = Wt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = he;
  R.set_fingerprint(t, e)
}

function ib(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return Ne().set(n, e / 1), he = n.length, e
}

function ob(n) {
  const t = ib(n, R.__wbindgen_export_2),
    e = he;
  R.set_telemetry(t, e)
}

function qt(n) {
  R.set_user_id(n)
}

function sb(n) {
  R.set_automated_browser(n)
}

function cb(n) {
  let t, e;
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16),
      o = Wt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
      s = he;
    R.get_pawtected_endpoint_payload(i, o, s);
    var r = gt().getInt32(i + 0, !0),
      a = gt().getInt32(i + 4, !0);
    return t = r, e = a, Ie(r, a)
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export_4(t, e, 1)
  }
}

function ub(n) {
  const t = Wt(n, R.__wbindgen_export_2, R.__wbindgen_export_3),
    e = he;
  R.request_url(t, e)
}

function lb(n) {
  R.set_automated_clicks(n)
}

function db() {
  R.init_listeners()
}

function _b(n, t, e) {
  R.__wbindgen_export_5(n, t, x(e))
}
async function fb(n, t) {
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

function hb() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_addEventListener_90e553fdce254421 = function() {
    return ne(function(t, e, r, a) {
      I(t).addEventListener(Ie(e, r), I(a))
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
    const r = new Function(Ie(t, e));
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
      I(t).randomFillSync(Nn(e))
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
    const a = nb(t, e, 3, _b);
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
    gt().setFloat64(t + 8, de(a) ? 0 : a, !0), gt().setInt32(t + 0, !de(a), !0)
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = I(t);
    return x(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    Nn(t)
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = Ie(t, e);
    return x(r)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(Ie(t, e))
  }, n
}

function mb(n, t) {
  return R = n.exports, sr.__wbindgen_wasm_module = t, _e = null, Oe = null, R
}
async function sr(n) {
  if (R !== void 0) return R;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("pawtect_wasm_bg.wasm", import.meta.url));
  const t = hb();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await fb(await n, t);
  return mb(e, r)
}
const pb = `
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
async function gb() {
  try {
    const n = await fetch(`${Ft}/anticheat/pow/challenge`, {
      credentials: "include"
    });
    if (!n.ok) return null;
    const t = await n.json(),
      e = await wb(t.prefix, t.difficulty);
    return e ? {
      ...t,
      nonce: e
    } : null
  } catch {
    return null
  }
}
async function wb(n, t) {
  return new Promise(e => {
    const r = new Blob([pb], {
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
const Kt = 3;
var We, qe;
class yb {
  constructor() {
    D(this, We, B(null));
    D(this, qe, B(0))
  }
  get current() {
    return L(v(this, We))
  }
  set current(t) {
    P(v(this, We), t, !0)
  }
  get errorCount() {
    return L(v(this, qe))
  }
  set errorCount(t) {
    P(v(this, qe), t, !0)
  }
}
We = new WeakMap, qe = new WeakMap;
const z = new yb;
async function Dn(n) {
  return n === 1 ? vb() : n === 2 || n === 3 ? Eb(n) : n === 4 ? bb() : !1
}
async function vb() {
  for (let n = 0; n < Kt; n++) try {
    const t = await gb();
    if (!t) continue;
    return await ce.verifyChallenge({
      type: "pow",
      challengeId: t.challengeId,
      nonce: t.nonce
    }), !0
  } catch {}
  return !1
}

function bb() {
  return new Promise(n => {
    z.errorCount = 0, z.current = {
      tier: 4,
      resolve: n
    }
  })
}

function Eb(n) {
  return new Promise(t => {
    z.errorCount = 0, z.current = {
      tier: n,
      resolve: t
    }
  })
}

function v0(n) {
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
    z.errorCount += 1, z.errorCount >= Kt && (t.resolve(!1), z.current = null)
  })
}

function b0() {
  const n = z.current;
  n && (z.errorCount += 1, z.errorCount >= Kt && (n.resolve(!1), z.current = null))
}

function E0() {
  const n = z.current;
  !n || n.tier !== 4 || (n.resolve(!0), z.current = null)
}

function T0() {
  z.current && (z.current.resolve(!1), z.current = null)
}
var c = (n => (n[n.CONTINUE = 100] = "CONTINUE", n[n.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", n[n.PROCESSING = 102] = "PROCESSING", n[n.EARLY_HINTS = 103] = "EARLY_HINTS", n[n.OK = 200] = "OK", n[n.CREATED = 201] = "CREATED", n[n.ACCEPTED = 202] = "ACCEPTED", n[n.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", n[n.NO_CONTENT = 204] = "NO_CONTENT", n[n.RESET_CONTENT = 205] = "RESET_CONTENT", n[n.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", n[n.MULTI_STATUS = 207] = "MULTI_STATUS", n[n.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", n[n.IM_USED = 226] = "IM_USED", n[n.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", n[n.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", n[n.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", n[n.FOUND = 302] = "FOUND", n[n.SEE_OTHER = 303] = "SEE_OTHER", n[n.NOT_MODIFIED = 304] = "NOT_MODIFIED", n[n.USE_PROXY = 305] = "USE_PROXY", n[n.SWITCH_PROXY = 306] = "SWITCH_PROXY", n[n.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", n[n.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", n[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.UNAUTHORIZED = 401] = "UNAUTHORIZED", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.NOT_FOUND = 404] = "NOT_FOUND", n[n.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", n[n.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", n[n.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", n[n.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", n[n.CONFLICT = 409] = "CONFLICT", n[n.GONE = 410] = "GONE", n[n.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", n[n.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", n[n.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", n[n.CONTENT_TOO_LARGE = 413] = "CONTENT_TOO_LARGE", n[n.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", n[n.URI_TOO_LONG = 414] = "URI_TOO_LONG", n[n.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", n[n.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", n[n.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", n[n.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", n[n.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", n[n.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", n[n.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", n[n.UNPROCESSABLE_CONTENT = 422] = "UNPROCESSABLE_CONTENT", n[n.LOCKED = 423] = "LOCKED", n[n.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", n[n.TOO_EARLY = 425] = "TOO_EARLY", n[n.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", n[n.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", n[n.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", n[n.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", n[n.BAD_GATEWAY = 502] = "BAD_GATEWAY", n[n.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", n[n.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", n[n.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", n[n.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", n[n.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", n[n.LOOP_DETECTED = 508] = "LOOP_DETECTED", n[n.NOT_EXTENDED = 510] = "NOT_EXTENDED", n[n.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", n[n.AWS_ELB_000 = 0] = "AWS_ELB_000", n[n.THIS_IS_FINE = 218] = "THIS_IS_FINE", n[n.PAGE_EXPIRED = 419] = "PAGE_EXPIRED", n[n.METHOD_FAILURE = 420] = "METHOD_FAILURE", n[n.ENHANCE_YOUR_CALM = 420] = "ENHANCE_YOUR_CALM", n[n.REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY = 430] = "REQUEST_HEADER_FIELDS_TOO_LARGE_SHOPIFY", n[n.SHOPIFY_SECURITY_REJECTION = 430] = "SHOPIFY_SECURITY_REJECTION", n[n.LOGIN_TIME_OUT = 440] = "LOGIN_TIME_OUT", n[n.NO_RESPONSE = 444] = "NO_RESPONSE", n[n.RETRY_WITH = 449] = "RETRY_WITH", n[n.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450] = "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS", n[n.REDIRECT_IIS = 451] = "REDIRECT_IIS", n[n.CLIENT_CLOSED_CONNECTION_AWS_ELB = 460] = "CLIENT_CLOSED_CONNECTION_AWS_ELB", n[n.X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB = 463] = "X_FORWARDED_FOR_TOO_MANY_IP_ADDRESSES_AWS_ELB", n[n.INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB = 464] = "INCOMPATIBLE_PROTOCOL_VERSIONS_AWS_ELB", n[n.REQUEST_HEADER_TOO_LARGE = 494] = "REQUEST_HEADER_TOO_LARGE", n[n.SSL_CERTIFICATE_ERROR = 495] = "SSL_CERTIFICATE_ERROR", n[n.SSL_CERTIFICATE_REQUIRED = 496] = "SSL_CERTIFICATE_REQUIRED", n[n.HTTP_REQUEST_SENT_TO_HTTPS_PORT = 497] = "HTTP_REQUEST_SENT_TO_HTTPS_PORT", n[n.INVALID_TOKEN = 498] = "INVALID_TOKEN", n[n.CLIENT_CLOSED_REQUEST = 499] = "CLIENT_CLOSED_REQUEST", n[n.TOKEN_REQUIRED = 499] = "TOKEN_REQUIRED", n[n.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", n[n.RESOURCE_LIMIT_IS_REACHED = 508] = "RESOURCE_LIMIT_IS_REACHED", n[n.WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR = 520] = "WEB_SERVER_RETURNED_AN_UNKNOWN_ERROR", n[n.WEB_SERVER_IS_DOWN = 521] = "WEB_SERVER_IS_DOWN", n[n.CONNECTION_TIMED_OUT = 522] = "CONNECTION_TIMED_OUT", n[n.ORIGIN_IS_UNREACHABLE = 523] = "ORIGIN_IS_UNREACHABLE", n[n.A_TIMEOUT_OCCURRED = 524] = "A_TIMEOUT_OCCURRED", n[n.SSL_HANDSHAKE_FAILED = 525] = "SSL_HANDSHAKE_FAILED", n[n.INVALID_SSL_CERTIFICATE = 526] = "INVALID_SSL_CERTIFICATE", n[n.RAILGUN_ERROR = 527] = "RAILGUN_ERROR", n[n.SITE_IS_OVERLOADED = 529] = "SITE_IS_OVERLOADED", n[n.ORIGIN_UNAVAILABLE = 530] = "ORIGIN_UNAVAILABLE", n[n.ORIGIN_DNS_ERROR = 530] = "ORIGIN_DNS_ERROR", n[n.SITE_IS_FROZEN = 530] = "SITE_IS_FROZEN", n[n.TEMPORARILY_DISABLED = 540] = "TEMPORARILY_DISABLED", n[n.UNAUTHORIZED_AWS_ELB = 561] = "UNAUTHORIZED_AWS_ELB", n[n.NETWORK_READ_TIMEOUT_ERROR = 598] = "NETWORK_READ_TIMEOUT_ERROR", n[n.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "NETWORK_CONNECT_TIMEOUT_ERROR", n[n.UNEXPECTED_TOKEN = 783] = "UNEXPECTED_TOKEN", n[n.REQUEST_DENIED = 999] = "REQUEST_DENIED", n))(c || {});
const be = {
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3,
  millisecond: 1
};

function S0(n) {
  const t = Math.floor(n / be.hour);
  n -= t * be.hour;
  const e = Math.floor(n / be.minute);
  n -= e * be.minute;
  const a = Math.floor(n / be.second).toString().padStart(2, "0");
  return t > 0 ? `${t}:${e.toString().padStart(2,"0")}:${a}` : `${e}:${a}`
}

function O0(n) {
  const t = n.getFullYear(),
    e = String(n.getMonth() + 1).padStart(2, "0"),
    r = String(n.getDate()).padStart(2, "0"),
    a = String(n.getHours()).padStart(2, "0"),
    i = String(n.getMinutes()).padStart(2, "0"),
    o = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${e}-${r} ${a}:${i}:${o}`
}
const I0 = {
    griefing: Nd(),
    "multi-accounting": bm(),
    "hate-speech": n_(),
    bot: Rs(),
    doxxing: Mu(),
    "inappropriate-content": k_(),
    other: tc()
  },
  A0 = {
    doxxing: Hu(),
    "hate-speech": m_(),
    griefing: Gd(),
    "multi-accounting": Mm(),
    bot: Vs(),
    "inappropriate-content": z_(),
    other: hc()
  },
  k0 = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-400",
    "inappropriate-content": "text-amber-500",
    "multi-accounting": "text-amber-300",
    bot: "text-amber-600",
    griefing: "text-amber-200",
    other: "text-cyan-600"
  },
  Ln = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    other: 5,
    griefing: 6
  },
  R0 = {
    griefing: "topic-2",
    "inappropriate-content": "topic-1",
    bot: "topic-3",
    "multi-accounting": "topic-3",
    "hate-speech": "topic-1",
    doxxing: "topic-1",
    other: ""
  },
  Tb = 365 * be.day;

function cr(n) {
  if (!n) return null;
  const e = (n instanceof Date ? n : new Date(n)).getTime();
  return Number.isFinite(e) ? e : null
}

function N0(n, t = Date.now()) {
  const e = cr(n);
  return e === null ? !1 : e - t >= Tb
}

function x0(n, t = Date.now()) {
  const e = cr(n);
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
const Sb = 60,
  Ob = 100,
  Ib = 50,
  Ab = 2e3;
class ur {
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

function kb() {
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
const lr = new ur(Ob),
  dr = new ur(Ib);
let U = kb(),
  wt = null,
  Mn = !1,
  k = null,
  _r = 0;

function D0() {
  Mn || typeof window > "u" || (Mn = !0, U.focusStartMs = performance.now(), U.windowStartMs = Date.now(), document.readyState === "complete" ? k = Un() : window.addEventListener("load", () => {
    k = Un()
  }, {
    once: !0
  }), window.addEventListener("pointermove", n => {
    const t = performance.now();
    t - U.lastMouseSampleMs < Sb || (U.lastMouseSampleMs = t, lr.push({
      x: n.clientX,
      y: n.clientY,
      t
    }))
  }, {
    passive: !0
  }), window.addEventListener("pointerdown", n => {
    dr.push(performance.now()), U.lastClickX = n.clientX, U.lastClickY = n.clientY
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
  }), jb())
}

function Rb() {
  wt = Nb();
  try {
    const n = wt,
      t = new Uint8Array(40),
      e = new DataView(t.buffer);
    e.setUint8(0, 1);
    let r = 0;
    n.isLinearMovement && (r |= 1), n.isConstantInterval && (r |= 2), n.hasZeroJitter && (r |= 4), k != null && k.hts && (r |= 8), navigator.webdriver && (r |= 16), Bt.automatedClicks && (r |= 32), k != null && k.cdp && (r |= 64), k != null && k.odz && (r |= 128), e.setUint8(1, r), e.setUint8(2, Math.min(255, n.clickCount)), e.setUint16(3, Math.min(65535, Math.round(n.mouseSpeedAvg * 100))), e.setUint8(5, Math.min(255, n.microMovementCount)), e.setUint8(6, Math.min(255, Math.round(n.mouseSpeedStddev * 100))), e.setUint8(7, Math.min(255, n.movementSegments)), e.setUint8(8, Math.min(255, Math.round(n.avgSegmentCurvature * 255))), e.setUint16(9, Math.min(65535, Math.max(0, U.lastClickX))), e.setUint16(11, Math.min(65535, Math.max(0, U.lastClickY))), e.setUint8(13, Math.min(255, k ? k.lc : 0)), e.setUint8(14, Math.min(255, k ? k.pc : 0)), e.setUint8(15, Math.min(255, k ? k.mtp : 0)), e.setUint16(16, Math.min(65535, Math.round(n.idleMs))), e.setUint16(18, Math.min(65535, Math.round(n.focusMs))), e.setUint16(20, Math.min(65535, Math.round(n.mouseAccelAvg * 100))), e.setUint16(22, Math.min(65535, Math.round(n.mouseAccelStddev * 100))), e.setUint16(24, Math.min(65535, Math.round(n.angularVelocityStddev * 1e4))), e.setInt16(26, Math.max(-32768, Math.min(32767, Math.round(n.velocityProfileSkew * 1e3)))), e.setUint16(28, Math.min(65535, Math.round(n.preClickPauseAvg))), e.setUint16(30, Math.min(65535, k ? k.sw : 0)), e.setUint16(32, Math.min(65535, k ? k.sh : 0)), e.setUint8(34, k ? k.fb & 255 : 0), e.setUint8(35, Math.min(255, k ? k.ptc : 0)), e.setUint8(36, k ? k.adf & 255 : 0);
    let a = 0;
    return k != null && k.cdr && (a |= 1), e.setUint8(37, a), e.setUint16(38, Math.min(65535, Math.round(_r * 100))), btoa(String.fromCharCode(...t))
  } catch {
    return ""
  }
}

function Nb() {
  const n = Date.now(),
    t = U.windowStartMs,
    e = performance.now(),
    r = lr.drain(),
    a = dr.drain(),
    i = Ub(U, e);
  U.totalIdleMs = 0, U.totalFocusMs = 0, U.focusStartMs = e, U.windowStartMs = n;
  const o = Db(r),
    s = Lb(a),
    l = Pb(a, r),
    u = o.straightnessAvg > .95 && r.length > 10,
    _ = o.jitterAvg < .01 && r.length > 10,
    d = s.stddev / Math.max(1, s.avg) < .05 && a.length >= 5;
  return wt = {
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
  }, wt
}
const xb = {
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

function Db(n) {
  if (n.length < 3) return xb;
  const t = [],
    e = [],
    r = [];
  let a = 0,
    i = 0,
    o = 0;
  const s = [];
  for (let y = 1; y < n.length; y++) {
    const S = n[y].x - n[y - 1].x,
      b = n[y].y - n[y - 1].y,
      Z = Math.max(1, n[y].t - n[y - 1].t),
      G = Math.sqrt(S * S + b * b),
      V = G / Z;
    if (t.push(V), G < 3 && G > 0 && a++, Z > Ab) {
      if (y - i > 2) {
        o++;
        const te = Pn(n.slice(i, y));
        te >= 0 && s.push(te)
      }
      i = y
    }
    if (y >= 2) {
      const te = n[y - 1].x - n[y - 2].x,
        pe = n[y - 1].y - n[y - 2].y,
        bt = S * te + b * pe,
        Ht = Math.sqrt(S * S + b * b),
        Yt = Math.sqrt(te * te + pe * pe);
      Ht > 0 && Yt > 0 && e.push(1 - Math.abs(bt / (Ht * Yt)));
      const yr = t[t.length - 2] || 0;
      r.push(Math.abs(V - yr))
    }
  }
  if (n.length - i > 2) {
    o++;
    const y = Pn(n.slice(i));
    y >= 0 && s.push(y)
  }
  const l = t.reduce((y, S) => y + S, 0) / t.length,
    u = e.length > 0 ? e.reduce((y, S) => y + S, 0) / e.length : 0,
    _ = t.reduce((y, S) => y + Math.pow(S - l, 2), 0) / t.length,
    d = Math.sqrt(_);
  let m = 0,
    g = 0;
  if (r.length > 0) {
    m = r.reduce((S, b) => S + b, 0) / r.length;
    const y = r.reduce((S, b) => S + Math.pow(b - m, 2), 0) / r.length;
    g = Math.sqrt(y)
  }
  const E = n[0],
    w = n[n.length - 1],
    T = Math.sqrt(Math.pow(w.x - E.x, 2) + Math.pow(w.y - E.y, 2));
  let O = 0;
  for (let y = 1; y < n.length; y++) {
    const S = n[y].x - n[y - 1].x,
      b = n[y].y - n[y - 1].y;
    O += Math.sqrt(S * S + b * b)
  }
  const N = O > 0 ? T / O : 0,
    C = s.length > 0 ? s.reduce((y, S) => y + S, 0) / s.length : 0;
  let j = 0;
  t.length >= 5 && d > .001 && (j = t.reduce((S, b) => S + Math.pow(b - l, 3), 0) / t.length / Math.pow(d, 3));
  let H = 0;
  if (n.length >= 4) {
    const y = [];
    for (let S = 1; S < n.length; S++) {
      const b = n[S].x - n[S - 1].x,
        Z = n[S].y - n[S - 1].y;
      Math.sqrt(b * b + Z * Z) > .5 && y.push(Math.atan2(Z, b))
    }
    if (y.length >= 3) {
      const S = [];
      for (let G = 1; G < y.length; G++) {
        let V = y[G] - y[G - 1];
        for (; V > Math.PI;) V -= 2 * Math.PI;
        for (; V < -Math.PI;) V += 2 * Math.PI;
        S.push(V)
      }
      const b = S.reduce((G, V) => G + V, 0) / S.length,
        Z = S.reduce((G, V) => G + Math.pow(V - b, 2), 0) / S.length;
      H = Math.sqrt(Z)
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

function Lb(n) {
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

function Mb(n, t) {
  let e = 0,
    r = n.length - 1,
    a = -1;
  for (; e <= r;) {
    const i = e + r >>> 1;
    n[i].t <= t ? (a = i, e = i + 1) : r = i - 1
  }
  return a
}

function Pb(n, t) {
  if (n.length === 0 || t.length < 2) return 0;
  let e = 0,
    r = 0;
  for (const a of n) {
    const i = Mb(t, a);
    i >= 0 && (e += a - t[i].t, r++)
  }
  return r > 0 ? e / r : 0
}

function Ub(n, t) {
  const e = Math.round(n.totalIdleMs + (n.idleStartMs > 0 ? t - n.idleStartMs : 0)),
    r = Math.round(n.totalFocusMs + (n.idleStartMs === 0 ? t - n.focusStartMs : 0));
  return {
    idleMs: e,
    focusMs: r
  }
}

function Pn(n) {
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

function Cb() {
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

function Un() {
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
    E = Cb();
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

function jb() {
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
      _r = a.reduce((o, s) => o + Math.abs(s - i), 0) / a.length
    }
  }
  requestAnimationFrame(e)
}

function se(n) {
  return Math.round(n * 1e3) / 1e3
}
const Fb = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Bb = 4,
  zb = 6e3,
  Vb = [{
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
  Gb = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Wb = {
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
  qb = {
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
  Kb = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  Hb = {
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
  Yb = {
    tools: {
      wayback: {
        limit: 500
      }
    }
  },
  me = {
    seasons: Fb,
    regionSize: Bb,
    refreshIntervalMs: zb,
    colors: Vb,
    errors: Gb,
    items: Wb,
    products: qb,
    countries: Kb,
    permissions: Hb,
    settings: Yb
  },
  Lt = me,
  $b = me.seasons,
  fr = me.seasons.length - 1,
  L0 = me.seasons[fr].zoom,
  M0 = me.seasons[fr].tileSize,
  P0 = me.permissions,
  Zb = me.settings;

function U0(n) {
  return Lt.countries[n - 1]
}
class h extends Error {
  constructor(t, e) {
    super(t), this.message = t, this.status = e
  }
}

function Cn(n, t) {
  const e = {};
  for (const r of n) {
    const a = t(r);
    let i = e[a];
    i ? i.push(r) : e[a] = [r]
  }
  return e
}

function C0(n, t) {
  const e = {};
  for (const r of n) {
    const a = t(r);
    e[a] = r
  }
  return e
}
var Ke, He;
class Jb {
  constructor(t) {
    D(this, Ke, B(!0));
    D(this, He, B(null));
    this.url = t
  }
  get online() {
    return L(v(this, Ke))
  }
  set online(t) {
    P(v(this, Ke), t, !0)
  }
  get serverTimeOffsetMs() {
    return L(v(this, He))
  }
  set serverTimeOffsetMs(t) {
    P(v(this, He), t, !0)
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
    const e = Cn(t, s => `t=(${s.tile[0]},${s.tile[1]}),s=${s.season}`),
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
      i = await At(a),
      o = await this.request("/paint", {
        method: "POST",
        body: a,
        headers: i,
        credentials: "include"
      });
    if (o.status !== c.OK) {
      if (o.status === c.UNAUTHORIZED) throw new Error(kn());
      if (o.status === c.FORBIDDEN) {
        if (o.headers.get("cf-mitigated") === "challenge") throw new Error(bn());
        const s = await o.json();
        if ((s == null ? void 0 : s.error) === "timeout") {
          const l = new Date(Date.now() + ((s == null ? void 0 : s.durationMs) ?? 0));
          throw new Error(Rn({
            until: l.toLocaleString()
          }))
        }
        if ((s == null ? void 0 : s.error) === "refresh") throw new Error(Sn());
        if ((s == null ? void 0 : s.error) === "color-not-owned") throw new Error(Tn());
        if ((s == null ? void 0 : s.error) === "event-pixel-present") throw new Error(wn());
        if ((s == null ? void 0 : s.error) === "challenge-required")
          if (s.tier) {
            if (await Dn(s.tier)) return this.paint(t);
            throw new Error(yn())
          } else console.error("Challenge required but no tier provided", s);
        Le.refresh()
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
      throw i === "timelapse_too_many_events" ? new h(ew(), c.BAD_REQUEST) : new h(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
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
    const i = Cn(t, l => `t=(${l.tile[0]},${l.tile[1]}),s=${l.season}`),
      s = (await Promise.all(Object.values(i).map(async l => {
        const [u, _] = l[0].tile, d = l[0].season, m = {
          colors: l.map(T => T.colorIdx),
          coords: l.flatMap(T => T.pixel),
          csid: r
        }, g = JSON.stringify(m), E = e(d, u, _), w = await At(g);
        return this.request(E, {
          method: "POST",
          body: g,
          headers: w,
          credentials: "include"
        })
      }))).filter(l => l.status !== c.OK);
    if (s.length) {
      const l = s[0];
      if (l.status === c.UNAUTHORIZED) throw new Error(kn());
      if (l.status === c.FORBIDDEN) {
        if (l.headers.get("cf-mitigated") === "challenge") throw new Error(bn());
        const u = await l.json();
        if ((u == null ? void 0 : u.error) === "timeout") {
          const _ = new Date(Date.now() + ((u == null ? void 0 : u.durationMs) ?? 0));
          throw new Error(Rn({
            until: _.toLocaleString()
          }))
        }
        if ((u == null ? void 0 : u.error) === "refresh") throw new Error(Sn());
        if ((u == null ? void 0 : u.error) === "color-not-owned") throw new Error(Tn());
        if ((u == null ? void 0 : u.error) === "event-pixel-present") throw new Error(wn());
        Le.refresh()
      } else throw new Error(f())
    }
  }
  async adminAutoPainterPaint(t, e, r) {
    const a = Xb(t),
      i = await Qb(a),
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
      throw new Error(ql({
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
    if (e.status === c.BAD_REQUEST) throw new Error(dh());
    if (e.status === c.CONFLICT) throw new Error(rg());
    if (e.status === c.FORBIDDEN) throw new Error(yp());
    if (e.status === c.TOO_MANY_REQUESTS) throw new Error(On());
    if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(pg());
    if (e.status === c.LOCKED) throw new Error(uy());
    if (e.status === c.UNPROCESSABLE_ENTITY) throw new Error(Sh());
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
        "x-fp": await pt()
      }
    });
    if (t.type === "otp") {
      if (r.status === c.GONE) throw new Error(gd());
      if (r.status === c.BAD_REQUEST) throw new Error(Af());
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(On());
      if (r.status !== c.OK) throw new Error(f())
    } else {
      if (r.status === c.BAD_REQUEST) throw new Error(hf());
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
      if (a === "invalid_name") throw new Error(En());
      if (a === "invalid_discord") throw new Error(Bf());
      if (typeof a == "string" && a.startsWith("name_change_cooldown:")) {
        const i = parseInt(a.split(":")[1] ?? "0", 10);
        throw new Error(Hm({
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
    if (e.status === c.BAD_REQUEST) throw new Error(jw());
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
    if (e.status === c.FORBIDDEN) throw new Error(Dp());
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
    if (r.status === c.BAD_REQUEST) throw new Error(cm());
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
    if (e.status !== c.OK) throw e.status === c.NOT_FOUND ? new Error(vn()) : e.status === c.FORBIDDEN ? new Error(An()) : e.status === c.CONFLICT ? new Error(In()) : new Error(f())
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
      throw r.error === "max_characters" ? new Error(rs()) : r.error === "name_taken" ? new Error(Wo()) : r.error == "empty_name" ? new Error(ps()) : new Error(f())
    } else throw e.status === c.FORBIDDEN ? new Error(Hy()) : new Error(f())
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
    if (e.status !== c.OK) throw e.status === c.FORBIDDEN ? new Error(le()) : e.status === c.BAD_REQUEST ? new Error(ad()) : new Error(f())
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
      throw (a == null ? void 0 : a.error) === "user_not_in_alliance" ? new Error(Ch()) : new Error(f())
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
      if (e.status === c.UNAVAILABLE_FOR_LEGAL_REASONS) throw new Error(xo());
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
    for (const r of e.tickets) r.reports.sort((a, i) => Ln[a.reason] - Ln[i.reason]);
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
      throw console.error("Fetch error:", i), this.online = !1, new Error(Fc(), {
        cause: i
      })
    }
    if ((e == null ? void 0 : e.throwOnStatus) ?? !0) {
      if (r.status === c.TOO_MANY_REQUESTS) throw new Error(Vv());
      if (r.status === c.REQUEST_TIMEOUT) throw new Error(zg());
      if (r.status === c.SERVICE_UNAVAILABLE) throw new Error(fw())
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
      throw o === "invalid_name" ? new h(En(), c.BAD_REQUEST) : new h(typeof o == "string" && o ? o : f(), c.BAD_REQUEST)
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
      throw i === "email_required" || i === "invalid_email" ? new h(Dl(), c.BAD_REQUEST) : new h(typeof i == "string" && i ? i : f(), c.BAD_REQUEST)
    }
    if (r.status === c.CONFLICT) {
      const a = await r.json();
      if (((a == null ? void 0 : a.error) ?? "") === "email_already_in_use") {
        const o = new h(typeof(a == null ? void 0 : a.userId) == "number" ? yl({
          userId: a.userId
        }) : ol(), c.CONFLICT);
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
      r = await At(e),
      a = await this.request("/report/appeal", {
        method: "POST",
        credentials: "include",
        body: e,
        headers: r
      });
    if (a.status === c.FORBIDDEN) {
      const i = await a.json();
      if ((i == null ? void 0 : i.error) === "challenge-required" && i.tier) {
        if (await Dn(i.tier)) return this.submitBanAppeal(t);
        throw new h(yn(), a.status)
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
    const r = await pt(),
      a = await this.request("/anticheat/captcha/session", {
        method: "POST",
        credentials: e,
        body: JSON.stringify(t),
        headers: {
          "x-fp": r
        }
      });
    if (!a.ok) throw a.status === 500 ? new h(f(), a.status) : new h(ef(), a.status);
    return a.json()
  }
  validWaybackInput(t) {
    const e = Number.isFinite(t.timestamp) && Number.isInteger(t.timestamp) && t.timestamp >= 0 && t.timestamp <= this.getEstimatedServerNowMs(),
      r = Number.isFinite(t.season) && Number.isInteger(t.season) && t.season >= 0 && t.season < $b.length,
      a = Number.isFinite(t.limit) && Number.isInteger(t.limit) && t.limit > 0 && t.limit <= Zb.tools.wayback.limit,
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
    if (e.status === c.NOT_FOUND) throw new Error(vn());
    if (e.status === c.FORBIDDEN) throw new Error(An());
    if (e.status === c.CONFLICT) throw new Error(In());
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
Ke = new WeakMap, He = new WeakMap;

function Xb(n) {
  var m, g;
  if (!n.length) throw new Error("Auto painter request does not contain any pixels.");
  const t = n[0].season;
  for (const E of n)
    if (E.season !== t) throw new Error("Auto painter requests cannot mix seasons.");
  const e = (m = Lt.seasons) == null ? void 0 : m[t];
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
    const O = (g = Lt.colors) == null ? void 0 : g[T];
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
async function Qb(n) {
  const t = e0(n.width, n.height),
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

function e0(n, t) {
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, t);
  if (typeof document < "u") {
    const e = document.createElement("canvas");
    return e.width = n, e.height = t, e
  }
  throw new Error("Canvas API is not available in the current environment.")
}
let ce = new Jb(Ft);
typeof window < "u" && Tr(() => {
  let n = ce.online;
  Sr(() => {
    const t = ce.online;
    t && !n && window.dispatchEvent(new CustomEvent("wplace:online")), n = t
  })
});
async function At(n) {
  const t = await pt(),
    e = Rb();
  return {
    "x-pawtect-token": await _0(n, e),
    "x-t": e,
    "x-fp": t
  }
}
const j0 = n => new URL(n, Ft).toString();

function hr(n, t) {
  if (!(n != null && n.length)) return !1;
  for (const e of n)
    if (e === t) return !0;
  return !1
}

function t0(n, t) {
  for (const e of t)
    if (hr(n, e)) return !0;
  return !1
}

function mr(n) {
  const t = atob(n),
    e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e
}

function n0(n) {
  if (typeof Buffer < "u") return Buffer.from(n).toString("base64");
  let t = "";
  for (let e = 0; e < n.length; e++) t += String.fromCharCode(n[e]);
  return btoa(t)
}
class r0 {
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

function F0(n) {
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

function B0(n) {
  if (typeof FileReader > "u") {
    const t = n.type || "application/octet-stream";
    return n.arrayBuffer().then(e => `data:${t};base64,${n0(new Uint8Array(e))}`)
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

function z0(n) {
  if (!n.startsWith("data:")) throw new Error("Could not parse data URL");
  const t = n.indexOf(",");
  if (t === -1) throw new Error("Could not parse data URL");
  const e = n.slice(5, t),
    r = n.slice(t + 1),
    a = e.indexOf(";base64"),
    i = (a === -1 ? e : e.slice(0, a)) || "text/plain";
  if (a !== -1) {
    const o = mr(r),
      s = new Uint8Array(o.byteLength);
    return s.set(o), new Blob([s], {
      type: i
    })
  }
  return new Blob([decodeURIComponent(r)], {
    type: i
  })
}

function V0(...n) {
  return n.filter(Boolean).join(" ")
}
const a0 = typeof document < "u";
let jn = 0;
var Ye, $e, Ze;
class i0 {
  constructor() {
    D(this, Ye, B(ft([])));
    D(this, $e, B(ft([])));
    D(this, Ze, t => {
      const e = this.toasts.findIndex(r => r.id === t);
      return e === -1 ? null : e
    });
    F(this, "addToast", t => {
      a0 && this.toasts.unshift(t)
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
      } = t, a = typeof(t == null ? void 0 : t.id) == "number" || t.id && ((s = t.id) == null ? void 0 : s.length) > 0 ? t.id : jn++, i = t.dismissable === void 0 ? !0 : t.dismissable, o = t.type === void 0 ? "default" : t.type;
      return Zt(() => {
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
    F(this, "dismiss", t => (Zt(() => {
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
      const e = v(this, Ze).call(this, t);
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
          const s = o0(o);
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
      const r = (e == null ? void 0 : e.id) || jn++;
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
      const e = v(this, Ze).call(this, t.toastId);
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
    return L(v(this, Ye))
  }
  set toasts(t) {
    P(v(this, Ye), t, !0)
  }
  get heights() {
    return L(v(this, $e))
  }
  set heights(t) {
    P(v(this, $e), t, !0)
  }
}
Ye = new WeakMap, $e = new WeakMap, Ze = new WeakMap;

function o0(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const $ = new i0;

function s0(n, t) {
  return $.create({
    message: n,
    ...t
  })
}
var yt;
class G0 {
  constructor() {
    D(this, yt, Se(() => $.toasts.filter(t => !t.dismiss)))
  }
  get toasts() {
    return L(v(this, yt))
  }
}
yt = new WeakMap;
const c0 = s0,
  u0 = Object.assign(c0, {
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
var Je, Xe, Qe, et, tt, nt, rt, at;
class l0 {
  constructor() {
    F(this, "channel", new BroadcastChannel("user-channel"));
    D(this, Je, B());
    D(this, Xe, B(!0));
    D(this, Qe, B());
    D(this, et, B(Date.now()));
    D(this, tt, Se(() => {
      if (!this.data) return;
      const t = this.data.charges;
      if (t.count > t.max) return t.count;
      const e = t.count + Math.max((Bt.now - this.lastFetch) / t.cooldownMs, 0);
      return Math.min(t.max, e)
    }));
    D(this, nt, Se(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    D(this, rt, Se(() => {
      var t;
      return new r0(mr(((t = this.data) == null ? void 0 : t.flagsBitmap) ?? "AA=="))
    }));
    D(this, at, Se(() => {
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
    return L(v(this, Je))
  }
  set data(t) {
    P(v(this, Je), t, !0)
  }
  get loading() {
    return L(v(this, Xe))
  }
  set loading(t) {
    P(v(this, Xe), t, !0)
  }
  get notificationCount() {
    return L(v(this, Qe))
  }
  set notificationCount(t) {
    P(v(this, Qe), t, !0)
  }
  get lastFetch() {
    return L(v(this, et))
  }
  set lastFetch(t) {
    P(v(this, et), t)
  }
  get charges() {
    return L(v(this, tt))
  }
  set charges(t) {
    P(v(this, tt), t)
  }
  get cooldown() {
    return L(v(this, nt))
  }
  set cooldown(t) {
    P(v(this, nt), t)
  }
  get flagsBitmap() {
    return L(v(this, rt))
  }
  set flagsBitmap(t) {
    P(v(this, rt), t)
  }
  get timeoutUntil() {
    return L(v(this, at))
  }
  set timeoutUntil(t) {
    P(v(this, at), t)
  }
  async refresh() {
    var t, e;
    try {
      return this.loading = !0, this.data = await ce.me(), this.lastFetch = Date.now(), (t = this.channel) == null || t.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      })), this.data && this.notificationCount === void 0 && ce.getNotificationCount().then(r => {
        this.notificationCount = r
      }), (e = this.data) != null && e.id && (ea("userId", {
        id: this.data.id
      }), d0(this.data.id)), !!this.data
    } catch (r) {
      return console.error(r), u0.warning(op(), {
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
    return hr((e = this.data) == null ? void 0 : e.permissions, t)
  }
  hasAnyPermission(t) {
    var e;
    return t0((e = this.data) == null ? void 0 : e.permissions, t)
  }
}
Je = new WeakMap, Xe = new WeakMap, Qe = new WeakMap, et = new WeakMap, tt = new WeakMap, nt = new WeakMap, rt = new WeakMap, at = new WeakMap;
const Le = new l0;
let pr, Ae;
async function gr() {
  return Ae || (Ae = (async () => {
    var n;
    try {
      await sr(ia), (n = Le.data) != null && n.id && qt(Le.data.id), db();
      const t = fetch;
      return Object.assign(window, {
        fetch: wr((e, r) => {
          let a = null;
          return e instanceof Request ? a = e.url : e instanceof URL ? a = e.href : typeof e == "string" && (a = e), a !== null && !a.startsWith("/") && ub(a), t.call(window, e, r)
        })
      }), !0
    } catch (t) {
      return console.error("Error loading Pawtect WASM:", t), pr = t, Qr(t), Ae = void 0, !1
    }
  })()), Ae
}
async function d0(n) {
  await gr(), qt(n)
}

function W0() {
  return Ae ?? Promise.resolve(!1)
}

function q0() {
  return pr
}
async function _0(n, t) {
  if (!await gr()) throw new Error(Ey());
  const r = navigator.webdriver,
    a = await pt();
  qt(Le.data.id), ab(a), sb(r), lb(Bt.automatedClicks);
  const i = Uint8Array.from(atob(t), o => o.charCodeAt(0));
  return ob(i), cb(n)
}

function wr(n) {
  return n.bind().bind()
}

function K0(n, t, e) {
  const r = {
    [n.name](...a) {
      return e(...a), t(...a)
    }
  } [n.name];
  return wr(r)
}
export {
  Ey as $, aa as A, Hu as B, fr as C, Vs as D, Mm as E, Gd as F, $ as G, V0 as H, G0 as I, S0 as J, T0 as K, z as L, b0 as M, v0 as N, E0 as O, M0 as P, g0 as Q, D0 as R, P0 as S, be as T, gr as U, K0 as V, B0 as W, z0 as X, U0 as Y, O0 as Z, W0 as _, ce as a, q0 as a0, jw as a1, j0 as a2, N0 as a3, A0 as a4, x0 as a5, R0 as a6, C0 as a7, L0 as a8, p0 as a9, yp as aA, Dp as aB, Tn as aC, rg as aD, pg as aE, Sn as aF, zg as aG, ew as aH, fw as aI, On as aJ, uy as aK, In as aL, Hy as aM, le as aN, An as aO, kn as aP, Vv as aQ, Rn as aR, xo as aa, Wo as ab, rs as ac, ps as ad, tc as ae, hc as af, wn as ag, Fc as ah, vn as ai, bn as aj, ol as ak, yl as al, ql as am, ad as an, gd as ao, hf as ap, Af as aq, Bf as ar, En as as, dh as at, Sh as au, Ch as av, ue as aw, cm as ax, Hm as ay, op as az, I0 as b, Rs as c, Mu as d, f as e, Lt as f, Nd as g, n_ as h, k_ as i, y0 as j, Bt as k, Ft as l, bm as m, Dl as n, pt as o, ef as p, w0 as q, At as r, k0 as s, u0 as t, Le as u, Dn as v, yn as w, F0 as x, z_ as y, m_ as z
};