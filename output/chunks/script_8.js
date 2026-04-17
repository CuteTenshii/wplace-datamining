(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "a2cab93d-b2c8-440f-ab43-f36e7c5bb845", t._sentryDebugIdIdentifier = "sentry-dbid-a2cab93d-b2c8-440f-ab43-f36e7c5bb845")
  } catch {}
})();
const S = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  _ = globalThis,
  w = "10.40.0";

function $() {
  return ct(_), _
}

function ct(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  return e.version = e.version || w, e[w] = e[w] || {}
}

function G(t, e, n = _) {
  const r = n.__SENTRY__ = n.__SENTRY__ || {},
    s = r[w] = r[w] || {};
  return s[t] || (s[t] = e())
}
const Wn = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  ie = "Sentry Logger ",
  gt = {};

function ut(t) {
  if (!("console" in _)) return t();
  const e = _.console,
    n = {},
    r = Object.keys(gt);
  r.forEach(s => {
    const i = gt[s];
    n[s] = e[s], e[s] = i
  });
  try {
    return t()
  } finally {
    r.forEach(s => {
      e[s] = n[s]
    })
  }
}

function oe() {
  dt().enabled = !0
}

function ae() {
  dt().enabled = !1
}

function kt() {
  return dt().enabled
}

function ce(...t) {
  ft("log", ...t)
}

function ue(...t) {
  ft("warn", ...t)
}

function fe(...t) {
  ft("error", ...t)
}

function ft(t, ...e) {
  S && kt() && ut(() => {
    _.console[t](`${ie}[${t}]:`, ...e)
  })
}

function dt() {
  return S ? G("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const m = {
    enable: oe,
    disable: ae,
    isEnabled: kt,
    log: ce,
    warn: ue,
    error: fe
  },
  wt = 50,
  de = "?",
  ht = /\(error: (.*)\)/,
  mt = /captureMessage|captureException/;

function pe(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map(n => n[1]);
  return (n, r = 0, s = 0) => {
    const i = [],
      o = n.split(`
`);
    for (let c = r; c < o.length; c++) {
      let a = o[c];
      a.length > 1024 && (a = a.slice(0, 1024));
      const u = ht.test(a) ? a.replace(ht, "$1") : a;
      if (!u.match(/\S*Error: /)) {
        for (const f of e) {
          const d = f(u);
          if (d) {
            i.push(d);
            break
          }
        }
        if (i.length >= wt + s) break
      }
    }
    return le(i.slice(s))
  }
}

function Xn(t) {
  return Array.isArray(t) ? pe(...t) : t
}

function le(t) {
  if (!t.length) return [];
  const e = Array.from(t);
  return /sentryWrapped/.test(U(e).function || "") && e.pop(), e.reverse(), mt.test(U(e).function || "") && (e.pop(), mt.test(U(e).function || "") && e.pop()), e.slice(0, wt).map(n => ({
    ...n,
    filename: n.filename || U(e).filename,
    function: n.function || de
  }))
}

function U(t) {
  return t[t.length - 1] || {}
}
const Z = "<anonymous>";

function _e(t) {
  try {
    return !t || typeof t != "function" ? Z : t.name || Z
  } catch {
    return Z
  }
}

function Jn(t) {
  const e = t.exception;
  if (e) {
    const n = [];
    try {
      return e.values.forEach(r => {
        r.stacktrace.frames && n.push(...r.stacktrace.frames)
      }), n
    } catch {
      return
    }
  }
}

function Lt(t) {
  return "__v_isVNode" in t && t.__v_isVNode ? "[VueVNode]" : "[VueViewModel]"
}
const Ft = Object.prototype.toString;

function ge(t) {
  switch (Ft.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return v(t, Error)
  }
}

function M(t, e) {
  return Ft.call(t) === `[object ${e}]`
}

function qn(t) {
  return M(t, "ErrorEvent")
}

function Zn(t) {
  return M(t, "DOMError")
}

function Qn(t) {
  return M(t, "DOMException")
}

function B(t) {
  return M(t, "String")
}

function he(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t
}

function tr(t) {
  return t === null || he(t) || typeof t != "object" && typeof t != "function"
}

function $t(t) {
  return M(t, "Object")
}

function me(t) {
  return typeof Event < "u" && v(t, Event)
}

function Se(t) {
  return typeof Element < "u" && v(t, Element)
}

function ye(t) {
  return M(t, "RegExp")
}

function V(t) {
  return !!(t != null && t.then && typeof t.then == "function")
}

function Ee(t) {
  return $t(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}

function v(t, e) {
  try {
    return t instanceof e
  } catch {
    return !1
  }
}

function vt(t) {
  return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue || t.__v_isVNode))
}

function er(t) {
  return typeof Request < "u" && v(t, Request)
}
const pt = _,
  be = 80;

function Te(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let n = t;
    const r = 5,
      s = [];
    let i = 0,
      o = 0;
    const c = " > ",
      a = c.length;
    let u;
    const f = Array.isArray(e) ? e : e.keyAttrs,
      d = !Array.isArray(e) && e.maxStringLength || be;
    for (; n && i++ < r && (u = Ie(n, f), !(u === "html" || i > 1 && o + s.length * a + u.length >= d));) s.push(u), o += u.length, n = n.parentNode;
    return s.reverse().join(c)
  } catch {
    return "<unknown>"
  }
}

function Ie(t, e) {
  const n = t,
    r = [];
  if (!(n != null && n.tagName)) return "";
  if (pt.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement
  }
  r.push(n.tagName.toLowerCase());
  const s = e != null && e.length ? e.filter(o => n.getAttribute(o)).map(o => [o, n.getAttribute(o)]) : null;
  if (s != null && s.length) s.forEach(o => {
    r.push(`[${o[0]}="${o[1]}"]`)
  });
  else {
    n.id && r.push(`#${n.id}`);
    const o = n.className;
    if (o && B(o)) {
      const c = o.split(/\s+/);
      for (const a of c) r.push(`.${a}`)
    }
  }
  const i = ["aria-label", "type", "name", "title", "alt"];
  for (const o of i) {
    const c = n.getAttribute(o);
    c && r.push(`[${o}="${c}"]`)
  }
  return r.join("")
}

function nr() {
  try {
    return pt.document.location.href
  } catch {
    return ""
  }
}

function rr(t) {
  if (!pt.HTMLElement) return null;
  let e = t;
  const n = 5;
  for (let r = 0; r < n; r++) {
    if (!e) return null;
    if (e instanceof HTMLElement) {
      if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
      if (e.dataset.sentryElement) return e.dataset.sentryElement
    }
    e = e.parentNode
  }
  return null
}

function sr(t, e, n) {
  if (!(e in t)) return;
  const r = t[e];
  if (typeof r != "function") return;
  const s = n(r);
  typeof s == "function" && Ae(s, r);
  try {
    t[e] = s
  } catch {
    S && m.log(`Failed to replace method "${e}" in object`, t)
  }
}

function A(t, e, n) {
  try {
    Object.defineProperty(t, e, {
      value: n,
      writable: !0,
      configurable: !0
    })
  } catch {
    S && m.log(`Failed to add non-enumerable property "${e}" to object`, t)
  }
}

function Ae(t, e) {
  try {
    const n = e.prototype || {};
    t.prototype = e.prototype = n, A(t, "__sentry_original__", e)
  } catch {}
}

function ir(t) {
  return t.__sentry_original__
}

function jt(t) {
  if (ge(t)) return {
    message: t.message,
    name: t.name,
    stack: t.stack,
    ...yt(t)
  };
  if (me(t)) {
    const e = {
      type: t.type,
      target: St(t.target),
      currentTarget: St(t.currentTarget),
      ...yt(t)
    };
    return typeof CustomEvent < "u" && v(t, CustomEvent) && (e.detail = t.detail), e
  } else return t
}

function St(t) {
  try {
    return Se(t) ? Te(t) : Object.prototype.toString.call(t)
  } catch {
    return "<unknown>"
  }
}

function yt(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e
  } else return {}
}

function or(t) {
  const e = Object.keys(jt(t));
  return e.sort(), e[0] ? e.join(", ") : "[object has no keys]"
}
let O;

function j(t) {
  if (O !== void 0) return O ? O(t) : t();
  const e = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    n = _;
  return e in n && typeof n[e] == "function" ? (O = n[e], O(t)) : (O = null, t())
}

function N() {
  return j(() => Math.random())
}

function Ut() {
  return j(() => Date.now())
}

function nt(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
}

function ar(t, e) {
  if (!Array.isArray(t)) return "";
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    try {
      vt(s) ? n.push(Lt(s)) : n.push(String(s))
    } catch {
      n.push("[value cannot be serialized]")
    }
  }
  return n.join(e)
}

function Ne(t, e, n = !1) {
  return B(t) ? ye(e) ? e.test(t) : B(e) ? n ? t === e : t.includes(e) : !1 : !1
}

function cr(t, e = [], n = !1) {
  return e.some(r => Ne(t, r, n))
}

function Ce() {
  const t = _;
  return t.crypto || t.msCrypto
}
let Q;

function xe() {
  return N() * 16
}

function I(t = Ce()) {
  try {
    if (t != null && t.randomUUID) return j(() => t.randomUUID()).replace(/-/g, "")
  } catch {}
  return Q || (Q = "10000000100040008000" + 1e11), Q.replace(/[018]/g, e => (e ^ (xe() & 15) >> e / 4).toString(16))
}

function Bt(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) == null ? void 0 : n[0]
}

function ur(t) {
  const {
    message: e,
    event_id: n
  } = t;
  if (e) return e;
  const r = Bt(t);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}

function fr(t, e, n) {
  const r = t.exception = t.exception || {},
    s = r.values = r.values || [],
    i = s[0] = s[0] || {};
  i.value || (i.value = e || ""), i.type || (i.type = "Error")
}

function Re(t, e) {
  const n = Bt(t);
  if (!n) return;
  const r = {
      type: "generic",
      handled: !0
    },
    s = n.mechanism;
  if (n.mechanism = {
      ...r,
      ...s,
      ...e
    }, e && "data" in e) {
    const i = {
      ...s == null ? void 0 : s.data,
      ...e.data
    };
    n.mechanism.data = i
  }
}

function dr(t) {
  if (Oe(t)) return !0;
  try {
    A(t, "__sentry_captured__", !0)
  } catch {}
  return !1
}

function Oe(t) {
  try {
    return t.__sentry_captured__
  } catch {}
}
const Gt = 1e3;

function lt() {
  return Ut() / Gt
}

function De() {
  const {
    performance: t
  } = _;
  if (!(t != null && t.now) || !t.timeOrigin) return lt;
  const e = t.timeOrigin;
  return () => (e + j(() => t.now())) / Gt
}
let Et;

function _t() {
  return (Et ?? (Et = De()))()
}
let tt = null;

function Me() {
  var o;
  const {
    performance: t
  } = _;
  if (!(t != null && t.now)) return;
  const e = 3e5,
    n = j(() => t.now()),
    r = Ut(),
    s = t.timeOrigin;
  if (typeof s == "number" && Math.abs(s + n - r) < e) return s;
  const i = (o = t.timing) == null ? void 0 : o.navigationStart;
  return typeof i == "number" && Math.abs(i + n - r) < e ? i : r - n
}

function pr() {
  return tt === null && (tt = Me()), tt
}

function Pe(t) {
  const e = _t(),
    n = {
      sid: I(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => we(n)
    };
  return t && H(n, t), n
}

function H(t, e = {}) {
  if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || _t(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : I()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0
  }
  e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
}

function ke(t, e) {
  let n = {};
  t.status === "ok" && (n = {
    status: "exited"
  }), H(t, n)
}

function we(t) {
  return {
    sid: `${t.sid}`,
    init: t.init,
    started: new Date(t.started * 1e3).toISOString(),
    timestamp: new Date(t.timestamp * 1e3).toISOString(),
    status: t.status,
    errors: t.errors,
    did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
    duration: t.duration,
    abnormal_mechanism: t.abnormal_mechanism,
    attrs: {
      release: t.release,
      environment: t.environment,
      ip_address: t.ipAddress,
      user_agent: t.userAgent
    }
  }
}

function Y(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) return e;
  if (t && Object.keys(e).length === 0) return t;
  const r = {
    ...t
  };
  for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (r[s] = Y(r[s], e[s], n - 1));
  return r
}

function L() {
  return I()
}

function z() {
  return I().substring(16)
}
const rt = "_sentrySpan";

function bt(t, e) {
  e ? A(t, rt, e) : delete t[rt]
}

function st(t) {
  return t[rt]
}
const Le = 100;
class y {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: L(),
      sampleRand: N()
    }
  }
  clone() {
    const e = new y;
    return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
      ...this._tags
    }, e._attributes = {
      ...this._attributes
    }, e._extra = {
      ...this._extra
    }, e._contexts = {
      ...this._contexts
    }, this._contexts.flags && (e._contexts.flags = {
      values: [...this._contexts.flags.values]
    }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    }, e._propagationContext = {
      ...this._propagationContext
    }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, bt(e, st(this)), e
  }
  setClient(e) {
    this._client = e
  }
  setLastEventId(e) {
    this._lastEventId = e
  }
  getClient() {
    return this._client
  }
  lastEventId() {
    return this._lastEventId
  }
  addScopeListener(e) {
    this._scopeListeners.push(e)
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this
  }
  setUser(e) {
    return this._user = e || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    }, this._session && H(this._session, {
      user: e
    }), this._notifyScopeListeners(), this
  }
  getUser() {
    return this._user
  }
  setConversationId(e) {
    return this._conversationId = e || void 0, this._notifyScopeListeners(), this
  }
  setTags(e) {
    return this._tags = {
      ...this._tags,
      ...e
    }, this._notifyScopeListeners(), this
  }
  setTag(e, n) {
    return this.setTags({
      [e]: n
    })
  }
  setAttributes(e) {
    return this._attributes = {
      ...this._attributes,
      ...e
    }, this._notifyScopeListeners(), this
  }
  setAttribute(e, n) {
    return this.setAttributes({
      [e]: n
    })
  }
  removeAttribute(e) {
    return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
  }
  setExtras(e) {
    return this._extra = {
      ...this._extra,
      ...e
    }, this._notifyScopeListeners(), this
  }
  setExtra(e, n) {
    return this._extra = {
      ...this._extra,
      [e]: n
    }, this._notifyScopeListeners(), this
  }
  setFingerprint(e) {
    return this._fingerprint = e, this._notifyScopeListeners(), this
  }
  setLevel(e) {
    return this._level = e, this._notifyScopeListeners(), this
  }
  setTransactionName(e) {
    return this._transactionName = e, this._notifyScopeListeners(), this
  }
  setContext(e, n) {
    return n === null ? delete this._contexts[e] : this._contexts[e] = n, this._notifyScopeListeners(), this
  }
  setSession(e) {
    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
  }
  getSession() {
    return this._session
  }
  update(e) {
    if (!e) return this;
    const n = typeof e == "function" ? e(this) : e,
      r = n instanceof y ? n.getScopeData() : $t(n) ? e : void 0,
      {
        tags: s,
        attributes: i,
        extra: o,
        user: c,
        contexts: a,
        level: u,
        fingerprint: f = [],
        propagationContext: d,
        conversationId: p
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...s
    }, this._attributes = {
      ...this._attributes,
      ...i
    }, this._extra = {
      ...this._extra,
      ...o
    }, this._contexts = {
      ...this._contexts,
      ...a
    }, c && Object.keys(c).length && (this._user = c), u && (this._level = u), f.length && (this._fingerprint = f), d && (this._propagationContext = d), p && (this._conversationId = p), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, bt(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: L(),
      sampleRand: N()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(e, n) {
    var i;
    const r = typeof n == "number" ? n : Le;
    if (r <= 0) return this;
    const s = {
      timestamp: lt(),
      ...e,
      message: e.message ? nt(e.message, 2048) : e.message
    };
    return this._breadcrumbs.push(s), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), (i = this._client) == null || i.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1]
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this
  }
  addAttachment(e) {
    return this._attachments.push(e), this
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
      span: st(this),
      conversationId: this._conversationId
    }
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = Y(this._sdkProcessingMetadata, e, 2), this
  }
  setPropagationContext(e) {
    return this._propagationContext = e, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(e, n) {
    const r = (n == null ? void 0 : n.event_id) || I();
    if (!this._client) return S && m.warn("No client configured on scope - will not capture exception!"), r;
    const s = new Error("Sentry syntheticException");
    return this._client.captureException(e, {
      originalException: e,
      syntheticException: s,
      ...n,
      event_id: r
    }, this), r
  }
  captureMessage(e, n, r) {
    const s = (r == null ? void 0 : r.event_id) || I();
    if (!this._client) return S && m.warn("No client configured on scope - will not capture message!"), s;
    const i = (r == null ? void 0 : r.syntheticException) ?? new Error(e);
    return this._client.captureMessage(e, n, {
      originalException: e,
      syntheticException: i,
      ...r,
      event_id: s
    }, this), s
  }
  captureEvent(e, n) {
    const r = e.event_id || (n == null ? void 0 : n.event_id) || I();
    return this._client ? (this._client.captureEvent(e, {
      ...n,
      event_id: r
    }, this), r) : (S && m.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
      e(this)
    }), this._notifyingListeners = !1)
  }
}

function Fe() {
  return G("defaultCurrentScope", () => new y)
}

function $e() {
  return G("defaultIsolationScope", () => new y)
}
class ve {
  constructor(e, n) {
    let r;
    e ? r = e : r = new y;
    let s;
    n ? s = n : s = new y, this._stack = [{
      scope: r
    }], this._isolationScope = s
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n)
    } catch (s) {
      throw this._popScope(), s
    }
    return V(r) ? r.then(s => (this._popScope(), s), s => {
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
    const e = this.getScope().clone();
    return this._stack.push({
      client: this.getClient(),
      scope: e
    }), e
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop()
  }
}

function D() {
  const t = $(),
    e = ct(t);
  return e.stack = e.stack || new ve(Fe(), $e())
}

function je(t) {
  return D().withScope(t)
}

function Ue(t, e) {
  const n = D();
  return n.withScope(() => (n.getStackTop().scope = t, e(t)))
}

function Tt(t) {
  return D().withScope(() => t(D().getIsolationScope()))
}

function Be() {
  return {
    withIsolationScope: Tt,
    withScope: je,
    withSetScope: Ue,
    withSetIsolationScope: (t, e) => Tt(e),
    getCurrentScope: () => D().getScope(),
    getIsolationScope: () => D().getIsolationScope()
  }
}

function K(t) {
  const e = ct(t);
  return e.acs ? e.acs : Be()
}

function P() {
  const t = $();
  return K(t).getCurrentScope()
}

function W() {
  const t = $();
  return K(t).getIsolationScope()
}

function Ge() {
  return G("globalScope", () => new y)
}

function lr(...t) {
  const e = $(),
    n = K(e);
  if (t.length === 2) {
    const [r, s] = t;
    return r ? n.withSetScope(r, s) : n.withScope(s)
  }
  return n.withScope(t[0])
}

function X() {
  return P().getClient()
}

function _r(t) {
  const e = t.getPropagationContext(),
    {
      traceId: n,
      parentSpanId: r,
      propagationSpanId: s
    } = e,
    i = {
      trace_id: n,
      span_id: s || z()
    };
  return r && (i.parent_span_id = r), i
}
const Ve = "sentry.source",
  He = "sentry.sample_rate",
  Ye = "sentry.previous_trace_sample_rate",
  ze = "sentry.op",
  Ke = "sentry.origin",
  gr = "sentry.idle_span_finish_reason",
  hr = "sentry.measurement_unit",
  mr = "sentry.measurement_value",
  Sr = "sentry.custom_span_name",
  yr = "sentry.profile_id",
  Er = "sentry.exclusive_time",
  br = "sentry.link.type",
  Tr = "gen_ai.conversation.id",
  We = 0,
  Vt = 1,
  h = 2;

function Xe(t) {
  if (t < 400 && t >= 100) return {
    code: Vt
  };
  if (t >= 400 && t < 500) switch (t) {
    case 401:
      return {
        code: h, message: "unauthenticated"
      };
    case 403:
      return {
        code: h, message: "permission_denied"
      };
    case 404:
      return {
        code: h, message: "not_found"
      };
    case 409:
      return {
        code: h, message: "already_exists"
      };
    case 413:
      return {
        code: h, message: "failed_precondition"
      };
    case 429:
      return {
        code: h, message: "resource_exhausted"
      };
    case 499:
      return {
        code: h, message: "cancelled"
      };
    default:
      return {
        code: h, message: "invalid_argument"
      }
  }
  if (t >= 500 && t < 600) switch (t) {
    case 501:
      return {
        code: h, message: "unimplemented"
      };
    case 503:
      return {
        code: h, message: "unavailable"
      };
    case 504:
      return {
        code: h, message: "deadline_exceeded"
      };
    default:
      return {
        code: h, message: "internal_error"
      }
  }
  return {
    code: h,
    message: "internal_error"
  }
}

function Ir(t, e) {
  t.setAttribute("http.response.status_code", e);
  const n = Xe(e);
  n.message !== "unknown_error" && t.setStatus(n)
}
const Ht = "_sentryScope",
  Yt = "_sentryIsolationScope";

function Je(t) {
  try {
    const e = _.WeakRef;
    if (typeof e == "function") return new e(t)
  } catch {}
  return t
}

function qe(t) {
  if (t) {
    if (typeof t == "object" && "deref" in t && typeof t.deref == "function") try {
      return t.deref()
    } catch {
      return
    }
    return t
  }
}

function Ar(t, e, n) {
  t && (A(t, Yt, Je(n)), A(t, Ht, e))
}

function zt(t) {
  const e = t;
  return {
    scope: e[Ht],
    isolationScope: qe(e[Yt])
  }
}
const Kt = "sentry-",
  Ze = /^sentry-/,
  Qe = 8192;

function Wt(t) {
  const e = tn(t);
  if (!e) return;
  const n = Object.entries(e).reduce((r, [s, i]) => {
    if (s.match(Ze)) {
      const o = s.slice(Kt.length);
      r[o] = i
    }
    return r
  }, {});
  if (Object.keys(n).length > 0) return n
}

function Nr(t) {
  if (!t) return;
  const e = Object.entries(t).reduce((n, [r, s]) => (s && (n[`${Kt}${r}`] = s), n), {});
  return en(e)
}

function tn(t) {
  if (!(!t || !B(t) && !Array.isArray(t))) return Array.isArray(t) ? t.reduce((e, n) => {
    const r = It(n);
    return Object.entries(r).forEach(([s, i]) => {
      e[s] = i
    }), e
  }, {}) : It(t)
}

function It(t) {
  return t.split(",").map(e => {
    const n = e.indexOf("=");
    if (n === -1) return [];
    const r = e.slice(0, n),
      s = e.slice(n + 1);
    return [r, s].map(i => {
      try {
        return decodeURIComponent(i.trim())
      } catch {
        return
      }
    })
  }).reduce((e, [n, r]) => (n && r && (e[n] = r), e), {})
}

function en(t) {
  if (Object.keys(t).length !== 0) return Object.entries(t).reduce((e, [n, r], s) => {
    const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
      o = s === 0 ? i : `${e},${i}`;
    return o.length > Qe ? (S && m.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`), e) : o
  }, "")
}
const nn = /^o(\d+)\./,
  rn = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function sn(t) {
  return t === "http" || t === "https"
}

function Cr(t, e = !1) {
  const {
    host: n,
    path: r,
    pass: s,
    port: i,
    projectId: o,
    protocol: c,
    publicKey: a
  } = t;
  return `${c}://${a}${e&&s?`:${s}`:""}@${n}${i?`:${i}`:""}/${r&&`${r}/`}${o}`
}

function on(t) {
  const e = rn.exec(t);
  if (!e) {
    ut(() => {
      console.error(`Invalid Sentry Dsn: ${t}`)
    });
    return
  }
  const [n, r, s = "", i = "", o = "", c = ""] = e.slice(1);
  let a = "",
    u = c;
  const f = u.split("/");
  if (f.length > 1 && (a = f.slice(0, -1).join("/"), u = f.pop()), u) {
    const d = u.match(/^\d+/);
    d && (u = d[0])
  }
  return Xt({
    host: i,
    pass: s,
    path: a,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r
  })
}

function Xt(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId
  }
}

function an(t) {
  if (!S) return !0;
  const {
    port: e,
    projectId: n,
    protocol: r
  } = t;
  return ["protocol", "publicKey", "host", "projectId"].find(o => t[o] ? !1 : (m.error(`Invalid Sentry Dsn: ${o} missing`), !0)) ? !1 : n.match(/^\d+$/) ? sn(r) ? e && isNaN(parseInt(e, 10)) ? (m.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (m.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (m.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1)
}

function cn(t) {
  const e = t.match(nn);
  return e == null ? void 0 : e[1]
}

function un(t) {
  const e = t.getOptions(),
    {
      host: n
    } = t.getDsn() || {};
  let r;
  return e.orgId ? r = String(e.orgId) : n && (r = cn(n)), r
}

function xr(t) {
  const e = typeof t == "string" ? on(t) : Xt(t);
  if (!(!e || !an(e))) return e
}

function At(t) {
  if (typeof t == "boolean") return Number(t);
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e
}
const fn = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function dn(t) {
  if (!t) return;
  const e = t.match(fn);
  if (!e) return;
  let n;
  return e[3] === "1" ? n = !0 : e[3] === "0" && (n = !1), {
    traceId: e[1],
    parentSampled: n,
    parentSpanId: e[2]
  }
}

function Rr(t, e) {
  const n = dn(t),
    r = Wt(e);
  if (!(n != null && n.traceId)) return {
    traceId: L(),
    sampleRand: N()
  };
  const s = _n(n, r);
  r && (r.sample_rand = s.toString());
  const {
    traceId: i,
    parentSpanId: o,
    parentSampled: c
  } = n;
  return {
    traceId: i,
    parentSpanId: o,
    sampled: c,
    dsc: r || {},
    sampleRand: s
  }
}

function pn(t = L(), e = z(), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
}

function ln(t = L(), e = z(), n) {
  return `00-${t}-${e}-${n?"01":"00"}`
}

function _n(t, e) {
  const n = At(e == null ? void 0 : e.sample_rand);
  if (n !== void 0) return n;
  const r = At(e == null ? void 0 : e.sample_rate);
  return r && (t == null ? void 0 : t.parentSampled) !== void 0 ? t.parentSampled ? N() * r : r + N() * (1 - r) : N()
}
const Or = 0,
  Jt = 1;
let Nt = !1;

function Dr(t) {
  const {
    spanId: e,
    traceId: n
  } = t.spanContext(), {
    data: r,
    op: s,
    parent_span_id: i,
    status: o,
    origin: c,
    links: a
  } = J(t);
  return {
    parent_span_id: i,
    span_id: e,
    trace_id: n,
    data: r,
    op: s,
    status: o,
    origin: c,
    links: a
  }
}

function gn(t) {
  const {
    spanId: e,
    traceId: n,
    isRemote: r
  } = t.spanContext(), s = r ? e : J(t).parent_span_id, i = zt(t).scope, o = r ? (i == null ? void 0 : i.getPropagationContext().propagationSpanId) || z() : e;
  return {
    parent_span_id: s,
    span_id: o,
    trace_id: n
  }
}

function Mr(t) {
  const {
    traceId: e,
    spanId: n
  } = t.spanContext(), r = q(t);
  return pn(e, n, r)
}

function Pr(t) {
  const {
    traceId: e,
    spanId: n
  } = t.spanContext(), r = q(t);
  return ln(e, n, r)
}

function hn(t) {
  if (t && t.length > 0) return t.map(({
    context: {
      spanId: e,
      traceId: n,
      traceFlags: r,
      ...s
    },
    attributes: i
  }) => ({
    span_id: e,
    trace_id: n,
    sampled: r === Jt,
    attributes: i,
    ...s
  }))
}

function Ct(t) {
  return typeof t == "number" ? xt(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? xt(t.getTime()) : _t()
}

function xt(t) {
  return t > 9999999999 ? t / 1e3 : t
}

function J(t) {
  var r;
  if (Sn(t)) return t.getSpanJSON();
  const {
    spanId: e,
    traceId: n
  } = t.spanContext();
  if (mn(t)) {
    const {
      attributes: s,
      startTime: i,
      name: o,
      endTime: c,
      status: a,
      links: u
    } = t, f = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? (r = t.parentSpanContext) == null ? void 0 : r.spanId : void 0;
    return {
      span_id: e,
      trace_id: n,
      data: s,
      description: o,
      parent_span_id: f,
      start_timestamp: Ct(i),
      timestamp: Ct(c) || void 0,
      status: yn(a),
      op: s[ze],
      origin: s[Ke],
      links: hn(u)
    }
  }
  return {
    span_id: e,
    trace_id: n,
    start_timestamp: 0,
    data: {}
  }
}

function mn(t) {
  const e = t;
  return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
}

function Sn(t) {
  return typeof t.getSpanJSON == "function"
}

function q(t) {
  const {
    traceFlags: e
  } = t.spanContext();
  return e === Jt
}

function yn(t) {
  if (!(!t || t.code === We)) return t.code === Vt ? "ok" : t.message || "internal_error"
}
const C = "_sentryChildSpans",
  it = "_sentryRootSpan";

function kr(t, e) {
  const n = t[it] || t;
  A(e, it, n), t[C] ? t[C].add(e) : A(t, C, new Set([e]))
}

function wr(t, e) {
  t[C] && t[C].delete(e)
}

function Lr(t) {
  const e = new Set;

  function n(r) {
    if (!e.has(r) && q(r)) {
      e.add(r);
      const s = r[C] ? Array.from(r[C]) : [];
      for (const i of s) n(i)
    }
  }
  return n(t), Array.from(e)
}

function qt(t) {
  return t[it] || t
}

function Fr() {
  const t = $(),
    e = K(t);
  return e.getActiveSpan ? e.getActiveSpan() : st(P())
}

function $r() {
  Nt || (ut(() => {
    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
  }), Nt = !0)
}

function En(t) {
  var n;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const e = t || ((n = X()) == null ? void 0 : n.getOptions());
  return !!e && (e.tracesSampleRate != null || !!e.tracesSampler)
}
const Zt = "production",
  Qt = "_frozenDsc";

function vr(t, e) {
  A(t, Qt, e)
}

function te(t, e) {
  const n = e.getOptions(),
    {
      publicKey: r
    } = e.getDsn() || {},
    s = {
      environment: n.environment || Zt,
      release: n.release,
      public_key: r,
      trace_id: t,
      org_id: un(e)
    };
  return e.emit("createDsc", s), s
}

function jr(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || te(n.traceId, t)
}

function bn(t) {
  var g;
  const e = X();
  if (!e) return {};
  const n = qt(t),
    r = J(n),
    s = r.data,
    i = n.spanContext().traceState,
    o = (i == null ? void 0 : i.get("sentry.sample_rate")) ?? s[He] ?? s[Ye];

  function c(x) {
    return (typeof o == "number" || typeof o == "string") && (x.sample_rate = `${o}`), x
  }
  const a = n[Qt];
  if (a) return c(a);
  const u = i == null ? void 0 : i.get("sentry.dsc"),
    f = u && Wt(u);
  if (f) return c(f);
  const d = te(t.spanContext().traceId, e),
    p = s[Ve],
    l = r.description;
  return p !== "url" && l && (d.transaction = l), En() && (d.sampled = String(q(n)), d.sample_rand = (i == null ? void 0 : i.get("sentry.sample_rand")) ?? ((g = zt(n).scope) == null ? void 0 : g.getPropagationContext().sampleRand.toString())), c(d), e.emit("createDsc", d, n), d
}

function T(t, e = 100, n = 1 / 0) {
  try {
    return ot("", t, e, n)
  } catch (r) {
    return {
      ERROR: `**non-serializable** (${r})`
    }
  }
}

function Tn(t, e = 3, n = 100 * 1024) {
  const r = T(t, e);
  return Cn(r) > n ? Tn(t, e - 1, n) : r
}

function ot(t, e, n = 1 / 0, r = 1 / 0, s = xn()) {
  const [i, o] = s;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
  const c = In(t, e);
  if (!c.startsWith("[object ")) return c;
  if (e.__sentry_skip_normalization__) return e;
  const a = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
  if (a === 0) return c.replace("object ", "");
  if (i(e)) return "[Circular ~]";
  const u = e;
  if (u && typeof u.toJSON == "function") try {
    const l = u.toJSON();
    return ot("", l, a - 1, r, s)
  } catch {}
  const f = Array.isArray(e) ? [] : {};
  let d = 0;
  const p = jt(e);
  for (const l in p) {
    if (!Object.prototype.hasOwnProperty.call(p, l)) continue;
    if (d >= r) {
      f[l] = "[MaxProperties ~]";
      break
    }
    const g = p[l];
    f[l] = ot(l, g, a - 1, r, s), d++
  }
  return o(e), f
}

function In(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
    if (t === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && e === global) return "[Global]";
    if (typeof window < "u" && e === window) return "[Window]";
    if (typeof document < "u" && e === document) return "[Document]";
    if (vt(e)) return Lt(e);
    if (Ee(e)) return "[SyntheticEvent]";
    if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
    if (typeof e == "function") return `[Function: ${_e(e)}]`;
    if (typeof e == "symbol") return `[${String(e)}]`;
    if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
    const n = An(e);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
  } catch (n) {
    return `**non-serializable** (${n})`
  }
}

function An(t) {
  const e = Object.getPrototypeOf(t);
  return e != null && e.constructor ? e.constructor.name : "null prototype"
}

function Nn(t) {
  return ~-encodeURI(t).split(/%..|./).length
}

function Cn(t) {
  return Nn(JSON.stringify(t))
}

function xn() {
  const t = new WeakSet;

  function e(r) {
    return t.has(r) ? !0 : (t.add(r), !1)
  }

  function n(r) {
    t.delete(r)
  }
  return [e, n]
}
const et = 0,
  Rt = 1,
  Ot = 2;

function ee(t) {
  return new F(e => {
    e(t)
  })
}

function Rn(t) {
  return new F((e, n) => {
    n(t)
  })
}
class F {
  constructor(e) {
    this._state = et, this._handlers = [], this._runExecutor(e)
  }
  then(e, n) {
    return new F((r, s) => {
      this._handlers.push([!1, i => {
        if (!e) r(i);
        else try {
          r(e(i))
        } catch (o) {
          s(o)
        }
      }, i => {
        if (!n) s(i);
        else try {
          r(n(i))
        } catch (o) {
          s(o)
        }
      }]), this._executeHandlers()
    })
  } catch (e) {
    return this.then(n => n, e)
  } finally(e) {
    return new F((n, r) => {
      let s, i;
      return this.then(o => {
        i = !1, s = o, e && e()
      }, o => {
        i = !0, s = o, e && e()
      }).then(() => {
        if (i) {
          r(s);
          return
        }
        n(s)
      })
    })
  }
  _executeHandlers() {
    if (this._state === et) return;
    const e = this._handlers.slice();
    this._handlers = [], e.forEach(n => {
      n[0] || (this._state === Rt && n[1](this._value), this._state === Ot && n[2](this._value), n[0] = !0)
    })
  }
  _runExecutor(e) {
    const n = (i, o) => {
        if (this._state === et) {
          if (V(o)) {
            o.then(r, s);
            return
          }
          this._state = i, this._value = o, this._executeHandlers()
        }
      },
      r = i => {
        n(Rt, i)
      },
      s = i => {
        n(Ot, i)
      };
    try {
      e(r, s)
    } catch (i) {
      s(i)
    }
  }
}

function On(t, e, n, r = 0) {
  try {
    const s = at(e, n, t, r);
    return V(s) ? s : ee(s)
  } catch (s) {
    return Rn(s)
  }
}

function at(t, e, n, r) {
  const s = n[r];
  if (!t || !s) return t;
  const i = s({
    ...t
  }, e);
  return S && i === null && m.log(`Event processor "${s.id||"?"}" dropped event`), V(i) ? i.then(o => at(o, e, n, r + 1)) : at(i, e, n, r + 1)
}
let E, Dt, Mt, b;

function Dn(t) {
  const e = _._sentryDebugIds,
    n = _._debugIds;
  if (!e && !n) return {};
  const r = e ? Object.keys(e) : [],
    s = n ? Object.keys(n) : [];
  if (b && r.length === Dt && s.length === Mt) return b;
  Dt = r.length, Mt = s.length, b = {}, E || (E = {});
  const i = (o, c) => {
    for (const a of o) {
      const u = c[a],
        f = E == null ? void 0 : E[a];
      if (f && b && u) b[f[0]] = u, E && (E[a] = [f[0], u]);
      else if (u) {
        const d = t(a);
        for (let p = d.length - 1; p >= 0; p--) {
          const l = d[p],
            g = l == null ? void 0 : l.filename;
          if (g && b && E) {
            b[g] = u, E[a] = [g, u];
            break
          }
        }
      }
    }
  };
  return e && i(r, e), n && i(s, n), b
}

function Mn(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i
  } = e;
  Pn(t, e), r && Ln(t, r), Fn(t, n), kn(t, s), wn(t, i)
}

function Pt(t, e) {
  const {
    extra: n,
    tags: r,
    attributes: s,
    user: i,
    contexts: o,
    level: c,
    sdkProcessingMetadata: a,
    breadcrumbs: u,
    fingerprint: f,
    eventProcessors: d,
    attachments: p,
    propagationContext: l,
    transactionName: g,
    span: x
  } = e;
  k(t, "extra", n), k(t, "tags", r), k(t, "attributes", s), k(t, "user", i), k(t, "contexts", o), t.sdkProcessingMetadata = Y(t.sdkProcessingMetadata, a, 2), c && (t.level = c), g && (t.transactionName = g), x && (t.span = x), u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]), f.length && (t.fingerprint = [...t.fingerprint, ...f]), d.length && (t.eventProcessors = [...t.eventProcessors, ...d]), p.length && (t.attachments = [...t.attachments, ...p]), t.propagationContext = {
    ...t.propagationContext,
    ...l
  }
}

function k(t, e, n) {
  t[e] = Y(t[e], n, 1)
}

function ne(t, e) {
  const n = Ge().getScopeData();
  return t && Pt(n, t.getScopeData()), e && Pt(n, e.getScopeData()), n
}

function Pn(t, e) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: o,
    transactionName: c
  } = e;
  Object.keys(n).length && (t.extra = {
    ...n,
    ...t.extra
  }), Object.keys(r).length && (t.tags = {
    ...r,
    ...t.tags
  }), Object.keys(s).length && (t.user = {
    ...s,
    ...t.user
  }), Object.keys(i).length && (t.contexts = {
    ...i,
    ...t.contexts
  }), o && (t.level = o), c && t.type !== "transaction" && (t.transaction = c)
}

function kn(t, e) {
  const n = [...t.breadcrumbs || [], ...e];
  t.breadcrumbs = n.length ? n : void 0
}

function wn(t, e) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...e
  }
}

function Ln(t, e) {
  t.contexts = {
    trace: gn(e),
    ...t.contexts
  }, t.sdkProcessingMetadata = {
    dynamicSamplingContext: bn(e),
    ...t.sdkProcessingMetadata
  };
  const n = qt(e),
    r = J(n).description;
  r && !t.transaction && t.type === "transaction" && (t.transaction = r)
}

function Fn(t, e) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint.length || delete t.fingerprint
}

function Ur(t, e, n, r, s, i) {
  const {
    normalizeDepth: o = 3,
    normalizeMaxBreadth: c = 1e3
  } = t, a = {
    ...e,
    event_id: e.event_id || n.event_id || I(),
    timestamp: e.timestamp || lt()
  }, u = n.integrations || t.integrations.map(R => R.name);
  $n(a, t), Un(a, u), s && s.emit("applyFrameMetadata", e), e.type === void 0 && vn(a, t.stackParser);
  const f = Gn(r, n.captureContext);
  n.mechanism && Re(a, n.mechanism);
  const d = s ? s.getEventProcessors() : [],
    p = ne(i, f),
    l = [...n.attachments || [], ...p.attachments];
  l.length && (n.attachments = l), Mn(a, p);
  const g = [...d, ...p.eventProcessors];
  return (n.data && n.data.__sentry__ === !0 ? ee(a) : On(g, a, n)).then(R => (R && jn(R), typeof o == "number" && o > 0 ? Bn(R, o, c) : R))
}

function $n(t, e) {
  var c, a;
  const {
    environment: n,
    release: r,
    dist: s,
    maxValueLength: i
  } = e;
  t.environment = t.environment || n || Zt, !t.release && r && (t.release = r), !t.dist && s && (t.dist = s);
  const o = t.request;
  o != null && o.url && i && (o.url = nt(o.url, i)), i && ((a = (c = t.exception) == null ? void 0 : c.values) == null || a.forEach(u => {
    u.value && (u.value = nt(u.value, i))
  }))
}

function vn(t, e) {
  var r, s;
  const n = Dn(e);
  (s = (r = t.exception) == null ? void 0 : r.values) == null || s.forEach(i => {
    var o, c;
    (c = (o = i.stacktrace) == null ? void 0 : o.frames) == null || c.forEach(a => {
      a.filename && (a.debug_id = n[a.filename])
    })
  })
}

function jn(t) {
  var r, s;
  const e = {};
  if ((s = (r = t.exception) == null ? void 0 : r.values) == null || s.forEach(i => {
      var o, c;
      (c = (o = i.stacktrace) == null ? void 0 : o.frames) == null || c.forEach(a => {
        a.debug_id && (a.abs_path ? e[a.abs_path] = a.debug_id : a.filename && (e[a.filename] = a.debug_id), delete a.debug_id)
      })
    }), Object.keys(e).length === 0) return;
  t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
  const n = t.debug_meta.images;
  Object.entries(e).forEach(([i, o]) => {
    n.push({
      type: "sourcemap",
      code_file: i,
      debug_id: o
    })
  })
}

function Un(t, e) {
  e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}

function Bn(t, e, n) {
  var s, i;
  if (!t) return null;
  const r = {
    ...t,
    ...t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map(o => ({
        ...o,
        ...o.data && {
          data: T(o.data, e, n)
        }
      }))
    },
    ...t.user && {
      user: T(t.user, e, n)
    },
    ...t.contexts && {
      contexts: T(t.contexts, e, n)
    },
    ...t.extra && {
      extra: T(t.extra, e, n)
    }
  };
  return (s = t.contexts) != null && s.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = T(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(o => ({
    ...o,
    ...o.data && {
      data: T(o.data, e, n)
    }
  }))), (i = t.contexts) != null && i.flags && r.contexts && (r.contexts.flags = T(t.contexts.flags, 3, n)), r
}

function Gn(t, e) {
  if (!e) return t;
  const n = t ? t.clone() : new y;
  return n.update(e), n
}

function Vn(t) {
  if (t) return Hn(t) ? {
    captureContext: t
  } : zn(t) ? {
    captureContext: t
  } : t
}

function Hn(t) {
  return t instanceof y || typeof t == "function"
}
const Yn = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

function zn(t) {
  return Object.keys(t).some(e => Yn.includes(e))
}

function Br(t, e) {
  return P().captureException(t, Vn(e))
}

function Gr(t, e) {
  return P().captureEvent(t, e)
}

function Vr(t, e) {
  W().setContext(t, e)
}

function Hr() {
  const t = X();
  return (t == null ? void 0 : t.getOptions().enabled) !== !1 && !!(t != null && t.getTransport())
}

function Yr(t) {
  const e = W(),
    {
      user: n
    } = ne(e, P()),
    {
      userAgent: r
    } = _.navigator || {},
    s = Pe({
      user: n,
      ...r && {
        userAgent: r
      },
      ...t
    }),
    i = e.getSession();
  return (i == null ? void 0 : i.status) === "ok" && H(i, {
    status: "exited"
  }), re(), e.setSession(s), s
}

function re() {
  const t = W(),
    n = P().getSession() || t.getSession();
  n && ke(n), se(), t.setSession()
}

function se() {
  const t = W(),
    e = X(),
    n = t.getSession();
  n && e && e.captureSession(n)
}

function zr(t = !1) {
  if (t) {
    re();
    return
  }
  se()
}
export {
  wr as $, yr as A, yn as B, X as C, S as D, zt as E, P as F, _ as G, Lr as H, Sr as I, Dr as J, V as K, En as L, At as M, lr as N, $ as O, K as P, st as Q, vr as R, h as S, Or as T, W as U, kr as V, Ar as W, He as X, gr as Y, Vt as Z, bt as _, Fr as a, br as a$, G as a0, ee as a1, Rn as a2, Ut as a3, lt as a4, xr as a5, I as a6, dr as a7, H as a8, Zt as a9, Tr as aA, Ir as aB, er as aC, Kt as aD, A as aE, nr as aF, Ae as aG, fr as aH, Re as aI, qn as aJ, Zn as aK, Qn as aL, me as aM, Tn as aN, or as aO, pr as aP, Te as aQ, rr as aR, B as aS, pe as aT, de as aU, ar as aV, Yr as aW, zr as aX, Gr as aY, Xn as aZ, Ye as a_, Ur as aa, _r as ab, jr as ac, N as ad, he as ae, tr as af, Y as ag, $t as ah, ge as ai, ut as aj, w as ak, Hr as al, Mr as am, Nr as an, fn as ao, Pr as ap, pn as aq, ln as ar, ir as as, ur as at, cr as au, v as av, Wn as aw, sr as ax, gt as ay, Jn as az, qt as b, Rr as b0, Br as c, m as d, L as e, z as f, _e as g, ct as h, Ne as i, Cr as j, bn as k, J as l, $r as m, T as n, q as o, hr as p, mr as q, ze as r, Vr as s, _t as t, Ke as u, Jt as v, Ct as w, Ve as x, hn as y, Er as z
};