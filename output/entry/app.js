const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../nodes/0.Uv3Rrzgj.js", "../chunks/J3PNcLdr.js", "../chunks/cvapb1gZ.js", "../chunks/bmnkmA2r.js", "../chunks/BWuhhmqC.js", "../chunks/CtMuQqdq.js", "../chunks/DdpDogEy.js", "../chunks/C9GJVbtK.js", "../chunks/CtkwJLsh.js", "../chunks/C7GLJL49.js", "../chunks/sxstCEXx.js", "../chunks/BgJftI2Q.js", "../chunks/CvpEyhm_.js", "../chunks/J5siIwfK.js", "../chunks/COzo4rLV.js", "../assets/0.Cx5swaz_.css", "../nodes/1.JAmAaEsI.js", "../chunks/CRQ0JBUP.js", "../chunks/V552k_qo.js", "../chunks/DYkl4ZIw.js", "../nodes/2.DQV2e5Vz.js", "../chunks/DI_bapC5.js", "../chunks/BAZAp11s.js", "../chunks/CtYdKvkq.js", "../nodes/3.c5zaCLvA.js", "../nodes/4.QUbfB9nv.js", "../chunks/D0gsIoz5.js", "../chunks/B3GBEcpf.js", "../chunks/D0XPewJS.js", "../chunks/BGPZjYLa.js", "../chunks/B0xqNz8z.js", "../chunks/C4epckTG.js", "../chunks/DjsSVUqw.js", "../chunks/BCHluYq_.js", "../chunks/CCo1RdzQ.js", "../chunks/DIBu_zlc.js", "../assets/ProfileAvatarWithLevel.6dmPRSfx.css", "../chunks/BGvW8Xyy.js", "../assets/LoginForm.CxMG0irz.css", "../chunks/B1byR7oq.js", "../chunks/Dp3ukdSv.js", "../chunks/CLWfuuBg.js", "../chunks/mEBGEz8r.js", "../assets/4.BtKF873c.css", "../nodes/5.DgaxxUVo.js", "../nodes/6.W7Nzhsvh.js", "../nodes/7.wn7N04ib.js", "../chunks/B3opIwTs.js", "../chunks/Byj9AZq-.js", "../chunks/31MmnTzY.js", "../nodes/8.CCOt-8rn.js", "../nodes/9.CA_dqFQ0.js", "../chunks/CdpTyXyc.js", "../nodes/10.D1LFMiKv.js", "../chunks/BlgTWIg-.js", "../chunks/CQPlByxH.js", "../nodes/11.DyYxOX-z.js", "../chunks/DKnuzzPV.js", "../nodes/12.BOcq1c4X.js", "../nodes/13.CuH6TBxa.js", "../nodes/14.BZ3lUTqq.js", "../nodes/15.DcTbIs5Q.js", "../nodes/16.cFJAMbge.js", "../assets/16.BD1hRFPA.css", "../nodes/17.YiUChzzD.js", "../nodes/18.2qcp0iSe.js"]))) => i.map(i => d[i]);
var Dr = t => {
  throw TypeError(t)
};
var Mr = (t, e, n) => e.has(t) || Dr("Cannot " + n);
var q = (t, e, n) => (Mr(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  Rn = (t, e, n) => e.has(t) ? Dr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
  wn = (t, e, n, r) => (Mr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
import {
  _ as M
} from "../chunks/B1byR7oq.js";
import {
  s as yo
} from "../chunks/DYkl4ZIw.js";
import {
  aw as ze,
  aV as Eo,
  g as V,
  aE as bo,
  bp as To,
  a0 as vo,
  p as Io,
  x as Ro,
  y as wo,
  av as An,
  aK as Ao,
  f as $s,
  a as ct,
  s as ko,
  b as tt,
  c as Po,
  ax as ht,
  d as No,
  r as Co,
  u as Mt,
  b3 as Oo,
  t as Lo
} from "../chunks/bmnkmA2r.js";
import {
  h as xo,
  m as Do,
  u as Mo,
  s as Fo
} from "../chunks/BWuhhmqC.js";
import "../chunks/J3PNcLdr.js";
import {
  o as $o
} from "../chunks/cvapb1gZ.js";
import {
  p as ge,
  i as he
} from "../chunks/C7GLJL49.js";
import {
  c as Ft
} from "../chunks/J5siIwfK.js";
import {
  b as $t
} from "../chunks/CvpEyhm_.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "30f09f0230c485b726216ceb4465e7532bc1894f"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "27210d7a-3d7e-4725-a81a-80bab9ed3200", t._sentryDebugIdIdentifier = "sentry-dbid-27210d7a-3d7e-4725-a81a-80bab9ed3200")
  })()
} catch {}

function Ho(t) {
  return class extends Bo {
    constructor(e) {
      super({
        component: t,
        ...e
      })
    }
  }
}
var St, et;
class Bo {
  constructor(e) {
    Rn(this, St);
    Rn(this, et);
    var i;
    var n = new Map,
      r = (o, c) => {
        var a = vo(c, !1, !1);
        return n.set(o, a), a
      };
    const s = new Proxy({
      ...e.props || {},
      $$events: {}
    }, {
      get(o, c) {
        return V(n.get(c) ?? r(c, Reflect.get(o, c)))
      },
      has(o, c) {
        return c === Eo ? !0 : (V(n.get(c) ?? r(c, Reflect.get(o, c))), Reflect.has(o, c))
      },
      set(o, c, a) {
        return ze(n.get(c) ?? r(c, a), a), Reflect.set(o, c, a)
      }
    });
    wn(this, et, (e.hydrate ? xo : Do)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((i = e == null ? void 0 : e.props) != null && i.$$host) || e.sync === !1) && bo(), wn(this, St, s.$$events);
    for (const o of Object.keys(q(this, et))) o === "$set" || o === "$destroy" || o === "$on" || To(this, o, {
      get() {
        return q(this, et)[o]
      },
      set(c) {
        q(this, et)[o] = c
      },
      enumerable: !0
    });
    q(this, et).$set = o => {
      Object.assign(s, o)
    }, q(this, et).$destroy = () => {
      Mo(q(this, et))
    }
  }
  $set(e) {
    q(this, et).$set(e)
  }
  $on(e, n) {
    q(this, St)[e] = q(this, St)[e] || [];
    const r = (...s) => n.call(this, ...s);
    return q(this, St)[e].push(r), () => {
      q(this, St)[e] = q(this, St)[e].filter(s => s !== r)
    }
  }
  $destroy() {
    q(this, et).$destroy()
  }
}
St = new WeakMap, et = new WeakMap;
const _ = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  R = globalThis,
  Bt = "10.11.0";

function zt() {
  return mn(R), R
}

function mn(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  return e.version = e.version || Bt, e[Bt] = e[Bt] || {}
}

function Ie(t, e, n = R) {
  const r = n.__SENTRY__ = n.__SENTRY__ || {},
    s = r[Bt] = r[Bt] || {};
  return s[t] || (s[t] = e())
}
const Uo = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  jo = "Sentry Logger ",
  nn = {};

function Yt(t) {
  if (!("console" in R)) return t();
  const e = R.console,
    n = {},
    r = Object.keys(nn);
  r.forEach(s => {
    const i = nn[s];
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

function qo() {
  fr().enabled = !0
}

function Go() {
  fr().enabled = !1
}

function Hs() {
  return fr().enabled
}

function Vo(...t) {
  dr("log", ...t)
}

function Wo(...t) {
  dr("warn", ...t)
}

function zo(...t) {
  dr("error", ...t)
}

function dr(t, ...e) {
  _ && Hs() && Yt(() => {
    R.console[t](`${jo}[${t}]:`, ...e)
  })
}

function fr() {
  return _ ? Ie("loggerSettings", () => ({
    enabled: !1
  })) : {
    enabled: !1
  }
}
const g = {
    enable: qo,
    disable: Go,
    isEnabled: Hs,
    log: Vo,
    warn: Wo,
    error: zo
  },
  Bs = 50,
  Gt = "?",
  Fr = /\(error: (.*)\)/,
  $r = /captureMessage|captureException/;

function Us(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map(n => n[1]);
  return (n, r = 0, s = 0) => {
    const i = [],
      o = n.split(`
`);
    for (let c = r; c < o.length; c++) {
      let a = o[c];
      a.length > 1024 && (a = a.slice(0, 1024));
      const u = Fr.test(a) ? a.replace(Fr, "$1") : a;
      if (!u.match(/\S*Error: /)) {
        for (const f of e) {
          const d = f(u);
          if (d) {
            i.push(d);
            break
          }
        }
        if (i.length >= Bs + s) break
      }
    }
    return Xo(i.slice(s))
  }
}

function Yo(t) {
  return Array.isArray(t) ? Us(...t) : t
}

function Xo(t) {
  if (!t.length) return [];
  const e = Array.from(t);
  return /sentryWrapped/.test($e(e).function || "") && e.pop(), e.reverse(), $r.test($e(e).function || "") && (e.pop(), $r.test($e(e).function || "") && e.pop()), e.slice(0, Bs).map(n => ({
    ...n,
    filename: n.filename || $e(e).filename,
    function: n.function || Gt
  }))
}

function $e(t) {
  return t[t.length - 1] || {}
}
const kn = "<anonymous>";

function Et(t) {
  try {
    return !t || typeof t != "function" ? kn : t.name || kn
  } catch {
    return kn
  }
}

function Hr(t) {
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
const Ye = {},
  Br = {};

function Ot(t, e) {
  Ye[t] = Ye[t] || [], Ye[t].push(e)
}

function Lt(t, e) {
  if (!Br[t]) {
    Br[t] = !0;
    try {
      e()
    } catch (n) {
      _ && g.error(`Error while instrumenting ${t}`, n)
    }
  }
}

function nt(t, e) {
  const n = t && Ye[t];
  if (n)
    for (const r of n) try {
      r(e)
    } catch (s) {
      _ && g.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Et(r)}
Error:`, s)
    }
}
let Pn = null;

function js(t) {
  const e = "error";
  Ot(e, t), Lt(e, Jo)
}

function Jo() {
  Pn = R.onerror, R.onerror = function(t, e, n, r, s) {
    return nt("error", {
      column: r,
      error: s,
      line: n,
      msg: t,
      url: e
    }), Pn ? Pn.apply(this, arguments) : !1
  }, R.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let Nn = null;

function qs(t) {
  const e = "unhandledrejection";
  Ot(e, t), Lt(e, Ko)
}

function Ko() {
  Nn = R.onunhandledrejection, R.onunhandledrejection = function(t) {
    return nt("unhandledrejection", t), Nn ? Nn.apply(this, arguments) : !0
  }, R.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
const Gs = Object.prototype.toString;

function lr(t) {
  switch (Gs.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return bt(t, Error)
  }
}

function ae(t, e) {
  return Gs.call(t) === `[object ${e}]`
}

function Vs(t) {
  return ae(t, "ErrorEvent")
}

function Ur(t) {
  return ae(t, "DOMError")
}

function Zo(t) {
  return ae(t, "DOMException")
}

function yt(t) {
  return ae(t, "String")
}

function pr(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t
}

function ye(t) {
  return t === null || pr(t) || typeof t != "object" && typeof t != "function"
}

function Ee(t) {
  return ae(t, "Object")
}

function gn(t) {
  return typeof Event < "u" && bt(t, Event)
}

function Qo(t) {
  return typeof Element < "u" && bt(t, Element)
}

function ta(t) {
  return ae(t, "RegExp")
}

function Re(t) {
  return !!(t != null && t.then && typeof t.then == "function")
}

function ea(t) {
  return Ee(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}

function bt(t, e) {
  try {
    return t instanceof e
  } catch {
    return !1
  }
}

function Ws(t) {
  return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
}

function zs(t) {
  return typeof Request < "u" && bt(t, Request)
}
const mr = R,
  na = 80;

function dt(t, e = {}) {
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
      d = !Array.isArray(e) && e.maxStringLength || na;
    for (; n && i++ < r && (u = ra(n, f), !(u === "html" || i > 1 && o + s.length * a + u.length >= d));) s.push(u), o += u.length, n = n.parentNode;
    return s.reverse().join(c)
  } catch {
    return "<unknown>"
  }
}

function ra(t, e) {
  const n = t,
    r = [];
  if (!(n != null && n.tagName)) return "";
  if (mr.HTMLElement && n instanceof HTMLElement && n.dataset) {
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
    if (o && yt(o)) {
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

function we() {
  try {
    return mr.document.location.href
  } catch {
    return ""
  }
}

function Ys(t) {
  if (!mr.HTMLElement) return null;
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

function rn(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
}

function jr(t, e) {
  if (!Array.isArray(t)) return "";
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    try {
      Ws(s) ? n.push("[VueViewModel]") : n.push(String(s))
    } catch {
      n.push("[value cannot be serialized]")
    }
  }
  return n.join(e)
}

function Xe(t, e, n = !1) {
  return yt(t) ? ta(e) ? e.test(t) : yt(e) ? n ? t === e : t.includes(e) : !1 : !1
}

function Rt(t, e = [], n = !1) {
  return e.some(r => Xe(t, r, n))
}

function W(t, e, n) {
  if (!(e in t)) return;
  const r = t[e];
  if (typeof r != "function") return;
  const s = n(r);
  typeof s == "function" && Xs(s, r);
  try {
    t[e] = s
  } catch {
    _ && g.log(`Failed to replace method "${e}" in object`, t)
  }
}

function Y(t, e, n) {
  try {
    Object.defineProperty(t, e, {
      value: n,
      writable: !0,
      configurable: !0
    })
  } catch {
    _ && g.log(`Failed to add non-enumerable property "${e}" to object`, t)
  }
}

function Xs(t, e) {
  try {
    const n = e.prototype || {};
    t.prototype = e.prototype = n, Y(t, "__sentry_original__", e)
  } catch {}
}

function gr(t) {
  return t.__sentry_original__
}

function Js(t) {
  if (lr(t)) return {
    message: t.message,
    name: t.name,
    stack: t.stack,
    ...Gr(t)
  };
  if (gn(t)) {
    const e = {
      type: t.type,
      target: qr(t.target),
      currentTarget: qr(t.currentTarget),
      ...Gr(t)
    };
    return typeof CustomEvent < "u" && bt(t, CustomEvent) && (e.detail = t.detail), e
  } else return t
}

function qr(t) {
  try {
    return Qo(t) ? dt(t) : Object.prototype.toString.call(t)
  } catch {
    return "<unknown>"
  }
}

function Gr(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e
  } else return {}
}

function sa(t, e = 40) {
  const n = Object.keys(Js(t));
  n.sort();
  const r = n[0];
  if (!r) return "[object has no keys]";
  if (r.length >= e) return rn(r, e);
  for (let s = n.length; s > 0; s--) {
    const i = n.slice(0, s).join(", ");
    if (!(i.length > e)) return s === n.length ? i : rn(i, e)
  }
  return ""
}

function ia() {
  const t = R;
  return t.crypto || t.msCrypto
}

function rt(t = ia()) {
  let e = () => Math.random() * 16;
  try {
    if (t != null && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t != null && t.getRandomValues && (e = () => {
      const n = new Uint8Array(1);
      return t.getRandomValues(n), n[0]
    })
  } catch {}
  return ("10000000100040008000" + 1e11).replace(/[018]/g, n => (n ^ (e() & 15) >> n / 4).toString(16))
}

function Ks(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) == null ? void 0 : n[0]
}

function Ht(t) {
  const {
    message: e,
    event_id: n
  } = t;
  if (e) return e;
  const r = Ks(t);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}

function qn(t, e, n) {
  const r = t.exception = t.exception || {},
    s = r.values = r.values || [],
    i = s[0] = s[0] || {};
  i.value || (i.value = e || ""), i.type || (i.type = "Error")
}

function ee(t, e) {
  const n = Ks(t);
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

function Vr(t) {
  if (oa(t)) return !0;
  try {
    Y(t, "__sentry_captured__", !0)
  } catch {}
  return !1
}

function oa(t) {
  try {
    return t.__sentry_captured__
  } catch {}
}
const Zs = 1e3;

function Xt() {
  return Date.now() / Zs
}

function aa() {
  const {
    performance: t
  } = R;
  if (!(t != null && t.now) || !t.timeOrigin) return Xt;
  const e = t.timeOrigin;
  return () => (e + t.now()) / Zs
}
let Wr;

function $() {
  return (Wr ?? (Wr = aa()))()
}
let Cn;

function ca() {
  var f;
  const {
    performance: t
  } = R;
  if (!(t != null && t.now)) return [void 0, "none"];
  const e = 3600 * 1e3,
    n = t.now(),
    r = Date.now(),
    s = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
    i = s < e,
    o = (f = t.timing) == null ? void 0 : f.navigationStart,
    a = typeof o == "number" ? Math.abs(o + n - r) : e,
    u = a < e;
  return i || u ? s <= a ? [t.timeOrigin, "timeOrigin"] : [o, "navigationStart"] : [r, "dateNow"]
}

function X() {
  return Cn || (Cn = ca()), Cn[0]
}

function ua(t) {
  const e = $(),
    n = {
      sid: rt(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => fa(n)
    };
  return t && ne(n, t), n
}

function ne(t, e = {}) {
  if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || $(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : rt()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0
  }
  e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
}

function da(t, e) {
  let n = {};
  t.status === "ok" && (n = {
    status: "exited"
  }), ne(t, n)
}

function fa(t) {
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

function Ae(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) return e;
  if (t && Object.keys(e).length === 0) return t;
  const r = {
    ...t
  };
  for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (r[s] = Ae(r[s], e[s], n - 1));
  return r
}

function wt() {
  return rt()
}

function ke() {
  return rt().substring(16)
}
const Gn = "_sentrySpan";

function re(t, e) {
  e ? Y(t, Gn, e) : delete t[Gn]
}

function sn(t) {
  return t[Gn]
}
const la = 100;
class ft {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: wt(),
      sampleRand: Math.random()
    }
  }
  clone() {
    const e = new ft;
    return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
      ...this._tags
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
    }, e._client = this._client, e._lastEventId = this._lastEventId, re(e, sn(this)), e
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
    }, this._session && ne(this._session, {
      user: e
    }), this._notifyScopeListeners(), this
  }
  getUser() {
    return this._user
  }
  setTags(e) {
    return this._tags = {
      ...this._tags,
      ...e
    }, this._notifyScopeListeners(), this
  }
  setTag(e, n) {
    return this._tags = {
      ...this._tags,
      [e]: n
    }, this._notifyScopeListeners(), this
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
      r = n instanceof ft ? n.getScopeData() : Ee(n) ? e : void 0,
      {
        tags: s,
        extra: i,
        user: o,
        contexts: c,
        level: a,
        fingerprint: u = [],
        propagationContext: f
      } = r || {};
    return this._tags = {
      ...this._tags,
      ...s
    }, this._extra = {
      ...this._extra,
      ...i
    }, this._contexts = {
      ...this._contexts,
      ...c
    }, o && Object.keys(o).length && (this._user = o), a && (this._level = a), u.length && (this._fingerprint = u), f && (this._propagationContext = f), this
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, re(this, void 0), this._attachments = [], this.setPropagationContext({
      traceId: wt(),
      sampleRand: Math.random()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(e, n) {
    var i;
    const r = typeof n == "number" ? n : la;
    if (r <= 0) return this;
    const s = {
      timestamp: Xt(),
      ...e,
      message: e.message ? rn(e.message, 2048) : e.message
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
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: sn(this)
    }
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = Ae(this._sdkProcessingMetadata, e, 2), this
  }
  setPropagationContext(e) {
    return this._propagationContext = e, this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(e, n) {
    const r = (n == null ? void 0 : n.event_id) || rt();
    if (!this._client) return _ && g.warn("No client configured on scope - will not capture exception!"), r;
    const s = new Error("Sentry syntheticException");
    return this._client.captureException(e, {
      originalException: e,
      syntheticException: s,
      ...n,
      event_id: r
    }, this), r
  }
  captureMessage(e, n, r) {
    const s = (r == null ? void 0 : r.event_id) || rt();
    if (!this._client) return _ && g.warn("No client configured on scope - will not capture message!"), s;
    const i = new Error(e);
    return this._client.captureMessage(e, n, {
      originalException: e,
      syntheticException: i,
      ...r,
      event_id: s
    }, this), s
  }
  captureEvent(e, n) {
    const r = (n == null ? void 0 : n.event_id) || rt();
    return this._client ? (this._client.captureEvent(e, {
      ...n,
      event_id: r
    }, this), r) : (_ && g.warn("No client configured on scope - will not capture event!"), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
      e(this)
    }), this._notifyingListeners = !1)
  }
}

function pa() {
  return Ie("defaultCurrentScope", () => new ft)
}

function ma() {
  return Ie("defaultIsolationScope", () => new ft)
}
class ga {
  constructor(e, n) {
    let r;
    e ? r = e : r = new ft;
    let s;
    n ? s = n : s = new ft, this._stack = [{
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
    return Re(r) ? r.then(s => (this._popScope(), s), s => {
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

function se() {
  const t = zt(),
    e = mn(t);
  return e.stack = e.stack || new ga(pa(), ma())
}

function ha(t) {
  return se().withScope(t)
}

function _a(t, e) {
  const n = se();
  return n.withScope(() => (n.getStackTop().scope = t, e(t)))
}

function zr(t) {
  return se().withScope(() => t(se().getIsolationScope()))
}

function Sa() {
  return {
    withIsolationScope: zr,
    withScope: ha,
    withSetScope: _a,
    withSetIsolationScope: (t, e) => zr(e),
    getCurrentScope: () => se().getScope(),
    getIsolationScope: () => se().getIsolationScope()
  }
}

function ce(t) {
  const e = mn(t);
  return e.acs ? e.acs : Sa()
}

function A() {
  const t = zt();
  return ce(t).getCurrentScope()
}

function Jt() {
  const t = zt();
  return ce(t).getIsolationScope()
}

function ya() {
  return Ie("globalScope", () => new ft)
}

function hn(...t) {
  const e = zt(),
    n = ce(e);
  if (t.length === 2) {
    const [r, s] = t;
    return r ? n.withSetScope(r, s) : n.withScope(s)
  }
  return n.withScope(t[0])
}

function k() {
  return A().getClient()
}

function Ea(t) {
  const e = t.getPropagationContext(),
    {
      traceId: n,
      parentSpanId: r,
      propagationSpanId: s
    } = e,
    i = {
      trace_id: n,
      span_id: s || ke()
    };
  return r && (i.parent_span_id = r), i
}
const z = "sentry.source",
  hr = "sentry.sample_rate",
  Qs = "sentry.previous_trace_sample_rate",
  Tt = "sentry.op",
  D = "sentry.origin",
  on = "sentry.idle_span_finish_reason",
  Pe = "sentry.measurement_unit",
  Ne = "sentry.measurement_value",
  Yr = "sentry.custom_span_name",
  _r = "sentry.profile_id",
  ue = "sentry.exclusive_time",
  ba = "sentry.link.type",
  Ta = 0,
  ti = 1,
  F = 2;

function va(t) {
  if (t < 400 && t >= 100) return {
    code: ti
  };
  if (t >= 400 && t < 500) switch (t) {
    case 401:
      return {
        code: F, message: "unauthenticated"
      };
    case 403:
      return {
        code: F, message: "permission_denied"
      };
    case 404:
      return {
        code: F, message: "not_found"
      };
    case 409:
      return {
        code: F, message: "already_exists"
      };
    case 413:
      return {
        code: F, message: "failed_precondition"
      };
    case 429:
      return {
        code: F, message: "resource_exhausted"
      };
    case 499:
      return {
        code: F, message: "cancelled"
      };
    default:
      return {
        code: F, message: "invalid_argument"
      }
  }
  if (t >= 500 && t < 600) switch (t) {
    case 501:
      return {
        code: F, message: "unimplemented"
      };
    case 503:
      return {
        code: F, message: "unavailable"
      };
    case 504:
      return {
        code: F, message: "deadline_exceeded"
      };
    default:
      return {
        code: F, message: "internal_error"
      }
  }
  return {
    code: F,
    message: "unknown_error"
  }
}

function ei(t, e) {
  t.setAttribute("http.response.status_code", e);
  const n = va(e);
  n.message !== "unknown_error" && t.setStatus(n)
}
const ni = "_sentryScope",
  ri = "_sentryIsolationScope";

function Ia(t, e, n) {
  t && (Y(t, ri, n), Y(t, ni, e))
}

function an(t) {
  return {
    scope: t[ni],
    isolationScope: t[ri]
  }
}
const Sr = "sentry-",
  Ra = /^sentry-/,
  wa = 8192;

function si(t) {
  const e = ka(t);
  if (!e) return;
  const n = Object.entries(e).reduce((r, [s, i]) => {
    if (s.match(Ra)) {
      const o = s.slice(Sr.length);
      r[o] = i
    }
    return r
  }, {});
  if (Object.keys(n).length > 0) return n
}

function Aa(t) {
  if (!t) return;
  const e = Object.entries(t).reduce((n, [r, s]) => (s && (n[`${Sr}${r}`] = s), n), {});
  return Pa(e)
}

function ka(t) {
  if (!(!t || !yt(t) && !Array.isArray(t))) return Array.isArray(t) ? t.reduce((e, n) => {
    const r = Xr(n);
    return Object.entries(r).forEach(([s, i]) => {
      e[s] = i
    }), e
  }, {}) : Xr(t)
}

function Xr(t) {
  return t.split(",").map(e => e.split("=").map(n => {
    try {
      return decodeURIComponent(n.trim())
    } catch {
      return
    }
  })).reduce((e, [n, r]) => (n && r && (e[n] = r), e), {})
}

function Pa(t) {
  if (Object.keys(t).length !== 0) return Object.entries(t).reduce((e, [n, r], s) => {
    const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
      o = s === 0 ? i : `${e},${i}`;
    return o.length > wa ? (_ && g.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`), e) : o
  }, "")
}
const Na = /^o(\d+)\./,
  Ca = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function Oa(t) {
  return t === "http" || t === "https"
}

function Ce(t, e = !1) {
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

function La(t) {
  const e = Ca.exec(t);
  if (!e) {
    Yt(() => {
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
  return ii({
    host: i,
    pass: s,
    path: a,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r
  })
}

function ii(t) {
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

function xa(t) {
  if (!_) return !0;
  const {
    port: e,
    projectId: n,
    protocol: r
  } = t;
  return ["protocol", "publicKey", "host", "projectId"].find(o => t[o] ? !1 : (g.error(`Invalid Sentry Dsn: ${o} missing`), !0)) ? !1 : n.match(/^\d+$/) ? Oa(r) ? e && isNaN(parseInt(e, 10)) ? (g.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (g.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (g.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1)
}

function Da(t) {
  const e = t.match(Na);
  return e == null ? void 0 : e[1]
}

function Ma(t) {
  const e = t.getOptions(),
    {
      host: n
    } = t.getDsn() || {};
  let r;
  return e.orgId ? r = String(e.orgId) : n && (r = Da(n)), r
}

function Fa(t) {
  const e = typeof t == "string" ? La(t) : ii(t);
  if (!(!e || !xa(e))) return e
}

function be(t) {
  if (typeof t == "boolean") return Number(t);
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e
}
const oi = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function ai(t) {
  if (!t) return;
  const e = t.match(oi);
  if (!e) return;
  let n;
  return e[3] === "1" ? n = !0 : e[3] === "0" && (n = !1), {
    traceId: e[1],
    parentSampled: n,
    parentSpanId: e[2]
  }
}

function $a(t, e) {
  const n = ai(t),
    r = si(e);
  if (!(n != null && n.traceId)) return {
    traceId: wt(),
    sampleRand: Math.random()
  };
  const s = Ha(n, r);
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

function ci(t = wt(), e = ke(), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
}

function Ha(t, e) {
  const n = be(e == null ? void 0 : e.sample_rand);
  if (n !== void 0) return n;
  const r = be(e == null ? void 0 : e.sample_rate);
  return r && (t == null ? void 0 : t.parentSampled) !== void 0 ? t.parentSampled ? Math.random() * r : r + Math.random() * (1 - r) : Math.random()
}
const ui = 0,
  yr = 1;
let Jr = !1;

function Ba(t) {
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
  } = I(t);
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

function Ua(t) {
  const {
    spanId: e,
    traceId: n,
    isRemote: r
  } = t.spanContext(), s = r ? e : I(t).parent_span_id, i = an(t).scope, o = r ? (i == null ? void 0 : i.getPropagationContext().propagationSpanId) || ke() : e;
  return {
    parent_span_id: s,
    span_id: o,
    trace_id: n
  }
}

function ja(t) {
  const {
    traceId: e,
    spanId: n
  } = t.spanContext(), r = Kt(t);
  return ci(e, n, r)
}

function di(t) {
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
    sampled: r === yr,
    attributes: i,
    ...s
  }))
}

function Ut(t) {
  return typeof t == "number" ? Kr(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? Kr(t.getTime()) : $()
}

function Kr(t) {
  return t > 9999999999 ? t / 1e3 : t
}

function I(t) {
  var r;
  if (Ga(t)) return t.getSpanJSON();
  const {
    spanId: e,
    traceId: n
  } = t.spanContext();
  if (qa(t)) {
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
      start_timestamp: Ut(i),
      timestamp: Ut(c) || void 0,
      status: fi(a),
      op: s[Tt],
      origin: s[D],
      links: di(u)
    }
  }
  return {
    span_id: e,
    trace_id: n,
    start_timestamp: 0,
    data: {}
  }
}

function qa(t) {
  const e = t;
  return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
}

function Ga(t) {
  return typeof t.getSpanJSON == "function"
}

function Kt(t) {
  const {
    traceFlags: e
  } = t.spanContext();
  return e === yr
}

function fi(t) {
  if (!(!t || t.code === Ta)) return t.code === ti ? "ok" : t.message || "unknown_error"
}
const jt = "_sentryChildSpans",
  Vn = "_sentryRootSpan";

function li(t, e) {
  const n = t[Vn] || t;
  Y(e, Vn, n), t[jt] ? t[jt].add(e) : Y(t, jt, new Set([e]))
}

function Va(t, e) {
  t[jt] && t[jt].delete(e)
}

function Je(t) {
  const e = new Set;

  function n(r) {
    if (!e.has(r) && Kt(r)) {
      e.add(r);
      const s = r[jt] ? Array.from(r[jt]) : [];
      for (const i of s) n(i)
    }
  }
  return n(t), Array.from(e)
}

function U(t) {
  return t[Vn] || t
}

function J() {
  const t = zt(),
    e = ce(t);
  return e.getActiveSpan ? e.getActiveSpan() : sn(A())
}

function Wn() {
  Jr || (Yt(() => {
    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")
  }), Jr = !0)
}
let Zr = !1;

function Wa() {
  if (Zr) return;

  function t() {
    const e = J(),
      n = e && U(e);
    if (n) {
      const r = "internal_error";
      _ && g.log(`[Tracing] Root span: ${r} -> Global error occurred`), n.setStatus({
        code: F,
        message: r
      })
    }
  }
  t.tag = "sentry_tracingErrorCallback", Zr = !0, js(t), qs(t)
}

function At(t) {
  var n;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const e = t || ((n = k()) == null ? void 0 : n.getOptions());
  return !!e && (e.tracesSampleRate != null || !!e.tracesSampler)
}
const Er = "production",
  pi = "_frozenDsc";

function Ke(t, e) {
  Y(t, pi, e)
}

function mi(t, e) {
  const n = e.getOptions(),
    {
      publicKey: r
    } = e.getDsn() || {},
    s = {
      environment: n.environment || Er,
      release: n.release,
      public_key: r,
      trace_id: t,
      org_id: Ma(e)
    };
  return e.emit("createDsc", s), s
}

function gi(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || mi(n.traceId, t)
}

function kt(t) {
  var m;
  const e = k();
  if (!e) return {};
  const n = U(t),
    r = I(n),
    s = r.data,
    i = n.spanContext().traceState,
    o = (i == null ? void 0 : i.get("sentry.sample_rate")) ?? s[hr] ?? s[Qs];

  function c(h) {
    return (typeof o == "number" || typeof o == "string") && (h.sample_rate = `${o}`), h
  }
  const a = n[pi];
  if (a) return c(a);
  const u = i == null ? void 0 : i.get("sentry.dsc"),
    f = u && si(u);
  if (f) return c(f);
  const d = mi(t.spanContext().traceId, e),
    p = s[z],
    l = r.description;
  return p !== "url" && l && (d.transaction = l), At() && (d.sampled = String(Kt(n)), d.sample_rand = (i == null ? void 0 : i.get("sentry.sample_rand")) ?? ((m = an(n).scope) == null ? void 0 : m.getPropagationContext().sampleRand.toString())), c(d), e.emit("createDsc", d, n), d
}
class Pt {
  constructor(e = {}) {
    this._traceId = e.traceId || wt(), this._spanId = e.spanId || ke()
  }
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: ui
    }
  }
  end(e) {}
  setAttribute(e, n) {
    return this
  }
  setAttributes(e) {
    return this
  }
  setStatus(e) {
    return this
  }
  updateName(e) {
    return this
  }
  isRecording() {
    return !1
  }
  addEvent(e, n, r) {
    return this
  }
  addLink(e) {
    return this
  }
  addLinks(e) {
    return this
  }
  recordException(e, n) {}
}

function _t(t, e = 100, n = 1 / 0) {
  try {
    return zn("", t, e, n)
  } catch (r) {
    return {
      ERROR: `**non-serializable** (${r})`
    }
  }
}

function hi(t, e = 3, n = 100 * 1024) {
  const r = _t(t, e);
  return Ja(r) > n ? hi(t, e - 1, n) : r
}

function zn(t, e, n = 1 / 0, r = 1 / 0, s = Ka()) {
  const [i, o] = s;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
  const c = za(t, e);
  if (!c.startsWith("[object ")) return c;
  if (e.__sentry_skip_normalization__) return e;
  const a = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
  if (a === 0) return c.replace("object ", "");
  if (i(e)) return "[Circular ~]";
  const u = e;
  if (u && typeof u.toJSON == "function") try {
    const l = u.toJSON();
    return zn("", l, a - 1, r, s)
  } catch {}
  const f = Array.isArray(e) ? [] : {};
  let d = 0;
  const p = Js(e);
  for (const l in p) {
    if (!Object.prototype.hasOwnProperty.call(p, l)) continue;
    if (d >= r) {
      f[l] = "[MaxProperties ~]";
      break
    }
    const m = p[l];
    f[l] = zn(l, m, a - 1, r, s), d++
  }
  return o(e), f
}

function za(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
    if (t === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && e === global) return "[Global]";
    if (typeof window < "u" && e === window) return "[Window]";
    if (typeof document < "u" && e === document) return "[Document]";
    if (Ws(e)) return "[VueViewModel]";
    if (ea(e)) return "[SyntheticEvent]";
    if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
    if (typeof e == "function") return `[Function: ${Et(e)}]`;
    if (typeof e == "symbol") return `[${String(e)}]`;
    if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
    const n = Ya(e);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
  } catch (n) {
    return `**non-serializable** (${n})`
  }
}

function Ya(t) {
  const e = Object.getPrototypeOf(t);
  return e != null && e.constructor ? e.constructor.name : "null prototype"
}

function Xa(t) {
  return ~-encodeURI(t).split(/%..|./).length
}

function Ja(t) {
  return Xa(JSON.stringify(t))
}

function Ka() {
  const t = new WeakSet;

  function e(r) {
    return t.has(r) ? !0 : (t.add(r), !1)
  }

  function n(r) {
    t.delete(r)
  }
  return [e, n]
}

function de(t, e = []) {
  return [t, e]
}

function Za(t, e) {
  const [n, r] = t;
  return [n, [...r, e]]
}

function Qr(t, e) {
  const n = t[1];
  for (const r of n) {
    const s = r[0].type;
    if (e(r, s)) return !0
  }
  return !1
}

function Yn(t) {
  const e = mn(R);
  return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t)
}

function Qa(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);

  function s(i) {
    typeof r == "string" ? r = typeof i == "string" ? r + i : [Yn(r), i] : r.push(typeof i == "string" ? Yn(i) : i)
  }
  for (const i of n) {
    const [o, c] = i;
    if (s(`
${JSON.stringify(o)}
`), typeof c == "string" || c instanceof Uint8Array) s(c);
    else {
      let a;
      try {
        a = JSON.stringify(c)
      } catch {
        a = JSON.stringify(_t(c))
      }
      s(a)
    }
  }
  return typeof r == "string" ? r : tc(r)
}

function tc(t) {
  const e = t.reduce((s, i) => s + i.length, 0),
    n = new Uint8Array(e);
  let r = 0;
  for (const s of t) n.set(s, r), r += s.length;
  return n
}

function ec(t) {
  return [{
    type: "span"
  }, t]
}

function nc(t) {
  const e = typeof t.data == "string" ? Yn(t.data) : t.data;
  return [{
    type: "attachment",
    length: e.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }, e]
}
const rc = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  raw_security: "security",
  log: "log_item"
};

function ts(t) {
  return rc[t]
}

function _i(t) {
  if (!(t != null && t.sdk)) return;
  const {
    name: e,
    version: n
  } = t.sdk;
  return {
    name: e,
    version: n
  }
}

function sc(t, e, n, r) {
  var i;
  const s = (i = t.sdkProcessingMetadata) == null ? void 0 : i.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...e && {
      sdk: e
    },
    ...!!n && r && {
      dsn: Ce(r)
    },
    ...s && {
      trace: s
    }
  }
}

function Xn(t, e) {
  if (!(e != null && e.length) || !t.description) return !1;
  for (const n of e) {
    if (oc(n)) {
      if (Xe(t.description, n)) return !0;
      continue
    }
    if (!n.name && !n.op) continue;
    const r = n.name ? Xe(t.description, n.name) : !0,
      s = n.op ? t.op && Xe(t.op, n.op) : !0;
    if (r && s) return !0
  }
  return !1
}

function ic(t, e) {
  const n = e.parent_span_id,
    r = e.span_id;
  if (n)
    for (const s of t) s.parent_span_id === r && (s.parent_span_id = n)
}

function oc(t) {
  return typeof t == "string" || t instanceof RegExp
}

function ac(t, e) {
  var r, s, i, o;
  if (!e) return t;
  const n = t.sdk || {};
  return t.sdk = {
    ...n,
    name: n.name || e.name,
    version: n.version || e.version,
    integrations: [...((r = t.sdk) == null ? void 0 : r.integrations) || [], ...e.integrations || []],
    packages: [...((s = t.sdk) == null ? void 0 : s.packages) || [], ...e.packages || []],
    settings: (i = t.sdk) != null && i.settings || e.settings ? {
      ...(o = t.sdk) == null ? void 0 : o.settings,
      ...e.settings
    } : void 0
  }, t
}

function cc(t, e, n, r) {
  const s = _i(n),
    i = {
      sent_at: new Date().toISOString(),
      ...s && {
        sdk: s
      },
      ...!!r && e && {
        dsn: Ce(e)
      }
    },
    o = "aggregates" in t ? [{
      type: "sessions"
    }, t] : [{
      type: "session"
    }, t.toJSON()];
  return de(i, [o])
}

function uc(t, e, n, r) {
  const s = _i(n),
    i = t.type && t.type !== "replay_event" ? t.type : "event";
  ac(t, n == null ? void 0 : n.sdk);
  const o = sc(t, s, r, e);
  return delete t.sdkProcessingMetadata, de(o, [
    [{
      type: i
    }, t]
  ])
}

function dc(t, e) {
  function n(l) {
    return !!l.trace_id && !!l.public_key
  }
  const r = kt(t[0]),
    s = e == null ? void 0 : e.getDsn(),
    i = e == null ? void 0 : e.getOptions().tunnel,
    o = {
      sent_at: new Date().toISOString(),
      ...n(r) && {
        trace: r
      },
      ...!!i && s && {
        dsn: Ce(s)
      }
    },
    {
      beforeSendSpan: c,
      ignoreSpans: a
    } = (e == null ? void 0 : e.getOptions()) || {},
    u = a != null && a.length ? t.filter(l => !Xn(I(l), a)) : t,
    f = t.length - u.length;
  f && (e == null || e.recordDroppedEvent("before_send", "span", f));
  const d = c ? l => {
      const m = I(l),
        h = c(m);
      return h || (Wn(), m)
    } : I,
    p = [];
  for (const l of u) {
    const m = d(l);
    m && p.push(ec(m))
  }
  return de(o, p)
}

function fc(t) {
  if (!_) return;
  const {
    description: e = "< unknown name >",
    op: n = "< unknown op >",
    parent_span_id: r
  } = I(t), {
    spanId: s
  } = t.spanContext(), i = Kt(t), o = U(t), c = o === t, a = `[Tracing] Starting ${i?"sampled":"unsampled"} ${c?"root ":""}span`, u = [`op: ${n}`, `name: ${e}`, `ID: ${s}`];
  if (r && u.push(`parent ID: ${r}`), !c) {
    const {
      op: f,
      description: d
    } = I(o);
    u.push(`root ID: ${o.spanContext().spanId}`), f && u.push(`root op: ${f}`), d && u.push(`root description: ${d}`)
  }
  g.log(`${a}
  ${u.join(`
  `)}`)
}

function lc(t) {
  if (!_) return;
  const {
    description: e = "< unknown name >",
    op: n = "< unknown op >"
  } = I(t), {
    spanId: r
  } = t.spanContext(), i = U(t) === t, o = `[Tracing] Finishing "${n}" ${i?"root ":""}span "${e}" with ID ${r}`;
  g.log(o)
}

function pc(t, e, n, r = J()) {
  const s = r && U(r);
  s && (_ && g.log(`[Measurement] Setting measurement on root span: ${t} = ${e} ${n}`), s.addEvent(t, {
    [Ne]: e,
    [Pe]: n
  }))
}

function es(t) {
  if (!t || t.length === 0) return;
  const e = {};
  return t.forEach(n => {
    const r = n.attributes || {},
      s = r[Pe],
      i = r[Ne];
    typeof s == "string" && typeof i == "number" && (e[n.name] = {
      value: i,
      unit: s
    })
  }), e
}
const ns = 1e3;
class _n {
  constructor(e = {}) {
    this._traceId = e.traceId || wt(), this._spanId = e.spanId || ke(), this._startTime = e.startTimestamp || $(), this._links = e.links, this._attributes = {}, this.setAttributes({
      [D]: "manual",
      [Tt]: e.op,
      ...e.attributes
    }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
  }
  addLink(e) {
    return this._links ? this._links.push(e) : this._links = [e], this
  }
  addLinks(e) {
    return this._links ? this._links.push(...e) : this._links = e, this
  }
  recordException(e, n) {}
  spanContext() {
    const {
      _spanId: e,
      _traceId: n,
      _sampled: r
    } = this;
    return {
      spanId: e,
      traceId: n,
      traceFlags: r ? yr : ui
    }
  }
  setAttribute(e, n) {
    return n === void 0 ? delete this._attributes[e] : this._attributes[e] = n, this
  }
  setAttributes(e) {
    return Object.keys(e).forEach(n => this.setAttribute(n, e[n])), this
  }
  updateStartTime(e) {
    this._startTime = Ut(e)
  }
  setStatus(e) {
    return this._status = e, this
  }
  updateName(e) {
    return this._name = e, this.setAttribute(z, "custom"), this
  }
  end(e) {
    this._endTime || (this._endTime = Ut(e), lc(this), this._onSpanEnded())
  }
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[Tt],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: fi(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[D],
      profile_id: this._attributes[_r],
      exclusive_time: this._attributes[ue],
      measurements: es(this._events),
      is_segment: this._isStandaloneSpan && U(this) === this || void 0,
      segment_id: this._isStandaloneSpan ? U(this).spanContext().spanId : void 0,
      links: di(this._links)
    }
  }
  isRecording() {
    return !this._endTime && !!this._sampled
  }
  addEvent(e, n, r) {
    _ && g.log("[Tracing] Adding an event to span:", e);
    const s = rs(n) ? n : r || $(),
      i = rs(n) ? {} : n || {},
      o = {
        name: e,
        time: Ut(s),
        attributes: i
      };
    return this._events.push(o), this
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan
  }
  _onSpanEnded() {
    const e = k();
    if (e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === U(this))) return;
    if (this._isStandaloneSpan) {
      this._sampled ? gc(dc([this], e)) : (_ && g.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
      return
    }
    const r = this._convertSpanToTransaction();
    r && (an(this).scope || A()).captureEvent(r)
  }
  _convertSpanToTransaction() {
    var f;
    if (!ss(I(this))) return;
    this._name || (_ && g.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
    const {
      scope: e,
      isolationScope: n
    } = an(this), r = (f = e == null ? void 0 : e.getScopeData().sdkProcessingMetadata) == null ? void 0 : f.normalizedRequest;
    if (this._sampled !== !0) return;
    const i = Je(this).filter(d => d !== this && !mc(d)).map(d => I(d)).filter(ss),
      o = this._attributes[z];
    delete this._attributes[Yr], i.forEach(d => {
      delete d.data[Yr]
    });
    const c = {
        contexts: {
          trace: Ba(this)
        },
        spans: i.length > ns ? i.sort((d, p) => d.start_timestamp - p.start_timestamp).slice(0, ns) : i,
        start_timestamp: this._startTime,
        timestamp: this._endTime,
        transaction: this._name,
        type: "transaction",
        sdkProcessingMetadata: {
          capturedSpanScope: e,
          capturedSpanIsolationScope: n,
          dynamicSamplingContext: kt(this)
        },
        request: r,
        ...o && {
          transaction_info: {
            source: o
          }
        }
      },
      a = es(this._events);
    return a && Object.keys(a).length && (_ && g.log("[Measurements] Adding measurements to transaction event", JSON.stringify(a, void 0, 2)), c.measurements = a), c
  }
}

function rs(t) {
  return t && typeof t == "number" || t instanceof Date || Array.isArray(t)
}

function ss(t) {
  return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id
}

function mc(t) {
  return t instanceof _n && t.isStandaloneSpan()
}

function gc(t) {
  const e = k();
  if (!e) return;
  const n = t[1];
  if (!n || n.length === 0) {
    e.recordDroppedEvent("before_send", "span");
    return
  }
  e.sendEnvelope(t)
}

function hc(t, e, n = () => {}) {
  let r;
  try {
    r = t()
  } catch (s) {
    throw e(s), n(), s
  }
  return _c(r, e, n)
}

function _c(t, e, n) {
  return Re(t) ? t.then(r => (n(), r), r => {
    throw e(r), n(), r
  }) : (n(), t)
}

function Sc(t, e, n) {
  if (!At(t)) return [!1];
  let r, s;
  typeof t.tracesSampler == "function" ? (s = t.tracesSampler({
    ...e,
    inheritOrSampleWith: c => typeof e.parentSampleRate == "number" ? e.parentSampleRate : typeof e.parentSampled == "boolean" ? Number(e.parentSampled) : c
  }), r = !0) : e.parentSampled !== void 0 ? s = e.parentSampled : typeof t.tracesSampleRate < "u" && (s = t.tracesSampleRate, r = !0);
  const i = be(s);
  if (i === void 0) return _ && g.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`), [!1];
  if (!i) return _ && g.log(`[Tracing] Discarding transaction because ${typeof t.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, i, r];
  const o = n < i;
  return o || _ && g.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), [o, i, r]
}
const Si = "__SENTRY_SUPPRESS_TRACING__";

function yc(t, e) {
  const n = Tr();
  if (n.startSpan) return n.startSpan(t, e);
  const r = Ei(t),
    {
      forceTransaction: s,
      parentSpan: i,
      scope: o
    } = t,
    c = o == null ? void 0 : o.clone();
  return hn(c, () => bc(i)(() => {
    const u = A(),
      f = bi(u, i),
      p = t.onlyIfParent && !f ? new Pt : yi({
        parentSpan: f,
        spanArguments: r,
        forceTransaction: s,
        scope: u
      });
    return re(u, p), hc(() => e(p), () => {
      const {
        status: l
      } = I(p);
      p.isRecording() && (!l || l === "ok") && p.setStatus({
        code: F,
        message: "internal_error"
      })
    }, () => {
      p.end()
    })
  }))
}

function Zt(t) {
  const e = Tr();
  if (e.startInactiveSpan) return e.startInactiveSpan(t);
  const n = Ei(t),
    {
      forceTransaction: r,
      parentSpan: s
    } = t;
  return (t.scope ? o => hn(t.scope, o) : s !== void 0 ? o => br(s, o) : o => o())(() => {
    const o = A(),
      c = bi(o, s);
    return t.onlyIfParent && !c ? new Pt : yi({
      parentSpan: c,
      spanArguments: n,
      forceTransaction: r,
      scope: o
    })
  })
}

function br(t, e) {
  const n = Tr();
  return n.withActiveSpan ? n.withActiveSpan(t, e) : hn(r => (re(r, t || void 0), e(r)))
}

function yi({
  parentSpan: t,
  spanArguments: e,
  forceTransaction: n,
  scope: r
}) {
  if (!At()) {
    const o = new Pt;
    if (n || !t) {
      const c = {
        sampled: "false",
        sample_rate: "0",
        transaction: e.name,
        ...kt(o)
      };
      Ke(o, c)
    }
    return o
  }
  const s = Jt();
  let i;
  if (t && !n) i = Ec(t, r, e), li(t, i);
  else if (t) {
    const o = kt(t),
      {
        traceId: c,
        spanId: a
      } = t.spanContext(),
      u = Kt(t);
    i = is({
      traceId: c,
      parentSpanId: a,
      ...e
    }, r, u), Ke(i, o)
  } else {
    const {
      traceId: o,
      dsc: c,
      parentSpanId: a,
      sampled: u
    } = {
      ...s.getPropagationContext(),
      ...r.getPropagationContext()
    };
    i = is({
      traceId: o,
      parentSpanId: a,
      ...e
    }, r, u), c && Ke(i, c)
  }
  return fc(i), Ia(i, r, s), i
}

function Ei(t) {
  const n = {
    isStandalone: (t.experimental || {}).standalone,
    ...t
  };
  if (t.startTime) {
    const r = {
      ...n
    };
    return r.startTimestamp = Ut(t.startTime), delete r.startTime, r
  }
  return n
}

function Tr() {
  const t = zt();
  return ce(t)
}

function is(t, e, n) {
  var m;
  const r = k(),
    s = (r == null ? void 0 : r.getOptions()) || {},
    {
      name: i = ""
    } = t,
    o = {
      spanAttributes: {
        ...t.attributes
      },
      spanName: i,
      parentSampled: n
    };
  r == null || r.emit("beforeSampling", o, {
    decision: !1
  });
  const c = o.parentSampled ?? n,
    a = o.spanAttributes,
    u = e.getPropagationContext(),
    [f, d, p] = e.getScopeData().sdkProcessingMetadata[Si] ? [!1] : Sc(s, {
      name: i,
      parentSampled: c,
      attributes: a,
      parentSampleRate: be((m = u.dsc) == null ? void 0 : m.sample_rate)
    }, u.sampleRand),
    l = new _n({
      ...t,
      attributes: {
        [z]: "custom",
        [hr]: d !== void 0 && p ? d : void 0,
        ...a
      },
      sampled: f
    });
  return !f && r && (_ && g.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", "transaction")), r && r.emit("spanStart", l), l
}

function Ec(t, e, n) {
  const {
    spanId: r,
    traceId: s
  } = t.spanContext(), i = e.getScopeData().sdkProcessingMetadata[Si] ? !1 : Kt(t), o = i ? new _n({
    ...n,
    parentSpanId: r,
    traceId: s,
    sampled: i
  }) : new Pt({
    traceId: s
  });
  li(t, o);
  const c = k();
  return c && (c.emit("spanStart", o), n.endTimestamp && c.emit("spanEnd", o)), o
}

function bi(t, e) {
  if (e) return e;
  if (e === null) return;
  const n = sn(t);
  if (!n) return;
  const r = k();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? U(n) : n
}

function bc(t) {
  return t !== void 0 ? e => br(t, e) : e => e()
}
const Ze = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
  },
  Tc = "heartbeatFailed",
  vc = "idleTimeout",
  Ic = "finalTimeout",
  Rc = "externalFinish";

function Ti(t, e = {}) {
  const n = new Map;
  let r = !1,
    s, i = Rc,
    o = !e.disableAutoFinish;
  const c = [],
    {
      idleTimeout: a = Ze.idleTimeout,
      finalTimeout: u = Ze.finalTimeout,
      childSpanTimeout: f = Ze.childSpanTimeout,
      beforeSpanEnd: d
    } = e,
    p = k();
  if (!p || !At()) {
    const y = new Pt,
      w = {
        sample_rate: "0",
        sampled: "false",
        ...kt(y)
      };
    return Ke(y, w), y
  }
  const l = A(),
    m = J(),
    h = wc(t);
  h.end = new Proxy(h.end, {
    apply(y, w, xt) {
      if (d && d(h), w instanceof Pt) return;
      const [vt, ...It] = xt, pt = vt || $(), L = Ut(pt), B = Je(h).filter(O => O !== h);
      if (!B.length) return K(L), Reflect.apply(y, w, [L, ...It]);
      const Z = B.map(O => I(O).timestamp).filter(O => !!O),
        T = Z.length ? Math.max(...Z) : void 0,
        C = I(h).start_timestamp,
        v = Math.min(C ? C + u / 1e3 : 1 / 0, Math.max(C || -1 / 0, Math.min(L, T || 1 / 0)));
      return K(v), Reflect.apply(y, w, [v, ...It])
    }
  });

  function b() {
    s && (clearTimeout(s), s = void 0)
  }

  function P(y) {
    b(), s = setTimeout(() => {
      !r && n.size === 0 && o && (i = vc, h.end(y))
    }, a)
  }

  function H(y) {
    s = setTimeout(() => {
      !r && o && (i = Tc, h.end(y))
    }, f)
  }

  function j(y) {
    b(), n.set(y, !0);
    const w = $();
    H(w + f / 1e3)
  }

  function lt(y) {
    if (n.has(y) && n.delete(y), n.size === 0) {
      const w = $();
      P(w + a / 1e3)
    }
  }

  function K(y) {
    r = !0, n.clear(), c.forEach(L => L()), re(l, m);
    const w = I(h),
      {
        start_timestamp: xt
      } = w;
    if (!xt) return;
    w.data[on] || h.setAttribute(on, i), g.log(`[Tracing] Idle span "${w.op}" finished`);
    const It = Je(h).filter(L => L !== h);
    let pt = 0;
    It.forEach(L => {
      L.isRecording() && (L.setStatus({
        code: F,
        message: "cancelled"
      }), L.end(y), _ && g.log("[Tracing] Cancelling span since span ended early", JSON.stringify(L, void 0, 2)));
      const B = I(L),
        {
          timestamp: Z = 0,
          start_timestamp: T = 0
        } = B,
        C = T <= y,
        v = (u + a) / 1e3,
        O = Z - T <= v;
      if (_) {
        const N = JSON.stringify(L, void 0, 2);
        C ? O || g.log("[Tracing] Discarding span since it finished after idle span final timeout", N) : g.log("[Tracing] Discarding span since it happened after idle span was finished", N)
      }(!O || !C) && (Va(h, L), pt++)
    }), pt > 0 && h.setAttribute("sentry.idle_span_discarded_spans", pt)
  }
  return c.push(p.on("spanStart", y => {
    if (r || y === h || I(y).timestamp || y instanceof _n && y.isStandaloneSpan()) return;
    Je(h).includes(y) && j(y.spanContext().spanId)
  })), c.push(p.on("spanEnd", y => {
    r || lt(y.spanContext().spanId)
  })), c.push(p.on("idleSpanEnableAutoFinish", y => {
    y === h && (o = !0, P(), n.size && H())
  })), e.disableAutoFinish || P(), setTimeout(() => {
    r || (h.setStatus({
      code: F,
      message: "deadline_exceeded"
    }), i = Ic, h.end())
  }, u), h
}

function wc(t) {
  const e = Zt(t);
  return re(A(), e), _ && g.log("[Tracing] Started span is an idle span"), e
}
const On = 0,
  os = 1,
  as = 2;

function Vt(t) {
  return new Nt(e => {
    e(t)
  })
}

function cn(t) {
  return new Nt((e, n) => {
    n(t)
  })
}
class Nt {
  constructor(e) {
    this._state = On, this._handlers = [], this._runExecutor(e)
  }
  then(e, n) {
    return new Nt((r, s) => {
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
    return new Nt((n, r) => {
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
    if (this._state === On) return;
    const e = this._handlers.slice();
    this._handlers = [], e.forEach(n => {
      n[0] || (this._state === os && n[1](this._value), this._state === as && n[2](this._value), n[0] = !0)
    })
  }
  _runExecutor(e) {
    const n = (i, o) => {
        if (this._state === On) {
          if (Re(o)) {
            o.then(r, s);
            return
          }
          this._state = i, this._value = o, this._executeHandlers()
        }
      },
      r = i => {
        n(os, i)
      },
      s = i => {
        n(as, i)
      };
    try {
      e(r, s)
    } catch (i) {
      s(i)
    }
  }
}

function Jn(t, e, n, r = 0) {
  return new Nt((s, i) => {
    const o = t[r];
    if (e === null || typeof o != "function") s(e);
    else {
      const c = o({
        ...e
      }, n);
      _ && o.id && c === null && g.log(`Event processor "${o.id}" dropped event`), Re(c) ? c.then(a => Jn(t, a, n, r + 1).then(s)).then(null, i) : Jn(t, c, n, r + 1).then(s).then(null, i)
    }
  })
}

function Ac(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i
  } = e;
  kc(t, e), r && Cc(t, r), Oc(t, n), Pc(t, s), Nc(t, i)
}

function cs(t, e) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: o,
    sdkProcessingMetadata: c,
    breadcrumbs: a,
    fingerprint: u,
    eventProcessors: f,
    attachments: d,
    propagationContext: p,
    transactionName: l,
    span: m
  } = e;
  He(t, "extra", n), He(t, "tags", r), He(t, "user", s), He(t, "contexts", i), t.sdkProcessingMetadata = Ae(t.sdkProcessingMetadata, c, 2), o && (t.level = o), l && (t.transactionName = l), m && (t.span = m), a.length && (t.breadcrumbs = [...t.breadcrumbs, ...a]), u.length && (t.fingerprint = [...t.fingerprint, ...u]), f.length && (t.eventProcessors = [...t.eventProcessors, ...f]), d.length && (t.attachments = [...t.attachments, ...d]), t.propagationContext = {
    ...t.propagationContext,
    ...p
  }
}

function He(t, e, n) {
  t[e] = Ae(t[e], n, 1)
}

function kc(t, e) {
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

function Pc(t, e) {
  const n = [...t.breadcrumbs || [], ...e];
  t.breadcrumbs = n.length ? n : void 0
}

function Nc(t, e) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...e
  }
}

function Cc(t, e) {
  t.contexts = {
    trace: Ua(e),
    ...t.contexts
  }, t.sdkProcessingMetadata = {
    dynamicSamplingContext: kt(e),
    ...t.sdkProcessingMetadata
  };
  const n = U(e),
    r = I(n).description;
  r && !t.transaction && t.type === "transaction" && (t.transaction = r)
}

function Oc(t, e) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint.length || delete t.fingerprint
}
let Be, us, Ue;

function Lc(t) {
  const e = R._sentryDebugIds;
  if (!e) return {};
  const n = Object.keys(e);
  return Ue && n.length === us || (us = n.length, Ue = n.reduce((r, s) => {
    Be || (Be = {});
    const i = Be[s];
    if (i) r[i[0]] = i[1];
    else {
      const o = t(s);
      for (let c = o.length - 1; c >= 0; c--) {
        const a = o[c],
          u = a == null ? void 0 : a.filename,
          f = e[s];
        if (u && f) {
          r[u] = f, Be[s] = [u, f];
          break
        }
      }
    }
    return r
  }, {})), Ue
}

function xc(t, e, n, r, s, i) {
  const {
    normalizeDepth: o = 3,
    normalizeMaxBreadth: c = 1e3
  } = t, a = {
    ...e,
    event_id: e.event_id || n.event_id || rt(),
    timestamp: e.timestamp || Xt()
  }, u = n.integrations || t.integrations.map(b => b.name);
  Dc(a, t), $c(a, u), s && s.emit("applyFrameMetadata", e), e.type === void 0 && Mc(a, t.stackParser);
  const f = Bc(r, n.captureContext);
  n.mechanism && ee(a, n.mechanism);
  const d = s ? s.getEventProcessors() : [],
    p = ya().getScopeData();
  if (i) {
    const b = i.getScopeData();
    cs(p, b)
  }
  if (f) {
    const b = f.getScopeData();
    cs(p, b)
  }
  const l = [...n.attachments || [], ...p.attachments];
  l.length && (n.attachments = l), Ac(a, p);
  const m = [...d, ...p.eventProcessors];
  return Jn(m, a, n).then(b => (b && Fc(b), typeof o == "number" && o > 0 ? Hc(b, o, c) : b))
}

function Dc(t, e) {
  const {
    environment: n,
    release: r,
    dist: s,
    maxValueLength: i = 250
  } = e;
  t.environment = t.environment || n || Er, !t.release && r && (t.release = r), !t.dist && s && (t.dist = s);
  const o = t.request;
  o != null && o.url && (o.url = rn(o.url, i))
}

function Mc(t, e) {
  var r, s;
  const n = Lc(e);
  (s = (r = t.exception) == null ? void 0 : r.values) == null || s.forEach(i => {
    var o, c;
    (c = (o = i.stacktrace) == null ? void 0 : o.frames) == null || c.forEach(a => {
      a.filename && (a.debug_id = n[a.filename])
    })
  })
}

function Fc(t) {
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

function $c(t, e) {
  e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}

function Hc(t, e, n) {
  var s, i;
  if (!t) return null;
  const r = {
    ...t,
    ...t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map(o => ({
        ...o,
        ...o.data && {
          data: _t(o.data, e, n)
        }
      }))
    },
    ...t.user && {
      user: _t(t.user, e, n)
    },
    ...t.contexts && {
      contexts: _t(t.contexts, e, n)
    },
    ...t.extra && {
      extra: _t(t.extra, e, n)
    }
  };
  return (s = t.contexts) != null && s.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = _t(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(o => ({
    ...o,
    ...o.data && {
      data: _t(o.data, e, n)
    }
  }))), (i = t.contexts) != null && i.flags && r.contexts && (r.contexts.flags = _t(t.contexts.flags, 3, n)), r
}

function Bc(t, e) {
  if (!e) return t;
  const n = t ? t.clone() : new ft;
  return n.update(e), n
}

function Uc(t) {
  if (t) return jc(t) ? {
    captureContext: t
  } : Gc(t) ? {
    captureContext: t
  } : t
}

function jc(t) {
  return t instanceof ft || typeof t == "function"
}
const qc = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

function Gc(t) {
  return Object.keys(t).some(e => qc.includes(e))
}

function vi(t, e) {
  return A().captureException(t, Uc(e))
}

function Ii(t, e) {
  return A().captureEvent(t, e)
}

function Vc() {
  const t = k();
  return (t == null ? void 0 : t.getOptions().enabled) !== !1 && !!(t != null && t.getTransport())
}

function ds(t) {
  const e = Jt(),
    n = A(),
    {
      userAgent: r
    } = R.navigator || {},
    s = ua({
      user: n.getUser() || e.getUser(),
      ...r && {
        userAgent: r
      },
      ...t
    }),
    i = e.getSession();
  return (i == null ? void 0 : i.status) === "ok" && ne(i, {
    status: "exited"
  }), Ri(), e.setSession(s), s
}

function Ri() {
  const t = Jt(),
    n = A().getSession() || t.getSession();
  n && da(n), wi(), t.setSession()
}

function wi() {
  const t = Jt(),
    e = k(),
    n = t.getSession();
  n && e && e.captureSession(n)
}

function fs(t = !1) {
  if (t) {
    Ri();
    return
  }
  wi()
}
const Wc = "7";

function zc(t) {
  const e = t.protocol ? `${t.protocol}:` : "",
    n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
}

function Yc(t) {
  return `${zc(t)}${t.projectId}/envelope/`
}

function Xc(t, e) {
  const n = {
    sentry_version: Wc
  };
  return t.publicKey && (n.sentry_key = t.publicKey), e && (n.sentry_client = `${e.name}/${e.version}`), new URLSearchParams(n).toString()
}

function Jc(t, e, n) {
  return e || `${Yc(t)}?${Xc(t,n)}`
}
const ls = [];

function Kc(t) {
  const e = {};
  return t.forEach(n => {
    const {
      name: r
    } = n, s = e[r];
    s && !s.isDefaultInstance && n.isDefaultInstance || (e[r] = n)
  }), Object.values(e)
}

function Zc(t) {
  const e = t.defaultIntegrations || [],
    n = t.integrations;
  e.forEach(s => {
    s.isDefaultInstance = !0
  });
  let r;
  if (Array.isArray(n)) r = [...e, ...n];
  else if (typeof n == "function") {
    const s = n(e);
    r = Array.isArray(s) ? s : [s]
  } else r = e;
  return Kc(r)
}

function Qc(t, e) {
  const n = {};
  return e.forEach(r => {
    r && Ai(t, r, n)
  }), n
}

function ps(t, e) {
  for (const n of e) n != null && n.afterAllSetup && n.afterAllSetup(t)
}

function Ai(t, e, n) {
  if (n[e.name]) {
    _ && g.log(`Integration skipped because it was already installed: ${e.name}`);
    return
  }
  if (n[e.name] = e, ls.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), ls.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
    const r = e.preprocessEvent.bind(e);
    t.on("preprocessEvent", (s, i) => r(s, i, t))
  }
  if (typeof e.processEvent == "function") {
    const r = e.processEvent.bind(e),
      s = Object.assign((i, o) => r(i, o, t), {
        id: e.name
      });
    t.addEventProcessor(s)
  }
  _ && g.log(`Integration installed: ${e.name}`)
}

function tu(t, e, n) {
  const r = [{
    type: "client_report"
  }, {
    timestamp: Xt(),
    discarded_events: t
  }];
  return de(e ? {
    dsn: e
  } : {}, [r])
}

function ki(t) {
  const e = [];
  t.message && e.push(t.message);
  try {
    const n = t.exception.values[t.exception.values.length - 1];
    n != null && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`))
  } catch {}
  return e
}

function eu(t) {
  var a;
  const {
    trace_id: e,
    parent_span_id: n,
    span_id: r,
    status: s,
    origin: i,
    data: o,
    op: c
  } = ((a = t.contexts) == null ? void 0 : a.trace) ?? {};
  return {
    data: o ?? {},
    description: t.transaction,
    op: c,
    parent_span_id: n,
    span_id: r ?? "",
    start_timestamp: t.start_timestamp ?? 0,
    status: s,
    timestamp: t.timestamp,
    trace_id: e ?? "",
    origin: i,
    profile_id: o == null ? void 0 : o[_r],
    exclusive_time: o == null ? void 0 : o[ue],
    measurements: t.measurements,
    is_segment: !0
  }
}

function nu(t) {
  return {
    type: "transaction",
    timestamp: t.timestamp,
    start_timestamp: t.start_timestamp,
    transaction: t.description,
    contexts: {
      trace: {
        trace_id: t.trace_id,
        span_id: t.span_id,
        parent_span_id: t.parent_span_id,
        op: t.op,
        status: t.status,
        origin: t.origin,
        data: {
          ...t.data,
          ...t.profile_id && {
            [_r]: t.profile_id
          },
          ...t.exclusive_time && {
            [ue]: t.exclusive_time
          }
        }
      }
    },
    measurements: t.measurements
  }
}
const ms = "Not capturing exception because it's already been captured.",
  gs = "Discarded session because of missing or non-string release",
  Pi = Symbol.for("SentryInternalError"),
  Ni = Symbol.for("SentryDoNotSendEventError");

function Qe(t) {
  return {
    message: t,
    [Pi]: !0
  }
}

function Ln(t) {
  return {
    message: t,
    [Ni]: !0
  }
}

function hs(t) {
  return !!t && typeof t == "object" && Pi in t
}

function _s(t) {
  return !!t && typeof t == "object" && Ni in t
}
class ru {
  constructor(e) {
    if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = Fa(e.dsn) : _ && g.warn("No DSN provided, client will not send events."), this._dsn) {
      const n = Jc(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: n
      })
    }
  }
  captureException(e, n, r) {
    const s = rt();
    if (Vr(e)) return _ && g.log(ms), s;
    const i = {
      event_id: s,
      ...n
    };
    return this._process(this.eventFromException(e, i).then(o => this._captureEvent(o, i, r))), i.event_id
  }
  captureMessage(e, n, r, s) {
    const i = {
        event_id: rt(),
        ...r
      },
      o = pr(e) ? e : String(e),
      c = ye(e) ? this.eventFromMessage(o, n, i) : this.eventFromException(e, i);
    return this._process(c.then(a => this._captureEvent(a, i, s))), i.event_id
  }
  captureEvent(e, n, r) {
    const s = rt();
    if (n != null && n.originalException && Vr(n.originalException)) return _ && g.log(ms), s;
    const i = {
        event_id: s,
        ...n
      },
      o = e.sdkProcessingMetadata || {},
      c = o.capturedSpanScope,
      a = o.capturedSpanIsolationScope;
    return this._process(this._captureEvent(e, i, c || r, a)), i.event_id
  }
  captureSession(e) {
    this.sendSession(e), ne(e, {
      init: !1
    })
  }
  getDsn() {
    return this._dsn
  }
  getOptions() {
    return this._options
  }
  getSdkMetadata() {
    return this._options._metadata
  }
  getTransport() {
    return this._transport
  }
  flush(e) {
    const n = this._transport;
    return n ? (this.emit("flush"), this._isClientDoneProcessing(e).then(r => n.flush(e).then(s => r && s))) : Vt(!0)
  }
  close(e) {
    return this.flush(e).then(n => (this.getOptions().enabled = !1, this.emit("close"), n))
  }
  getEventProcessors() {
    return this._eventProcessors
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e)
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({
      name: e
    }) => e.startsWith("Spotlight"))) && this._setupIntegrations()
  }
  getIntegrationByName(e) {
    return this._integrations[e]
  }
  addIntegration(e) {
    const n = this._integrations[e.name];
    Ai(this, e, this._integrations), n || ps(this, [e])
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = uc(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const i of n.attachments || []) r = Za(r, nc(i));
    const s = this.sendEnvelope(r);
    s && s.then(i => this.emit("afterSendEvent", e, i), null)
  }
  sendSession(e) {
    const {
      release: n,
      environment: r = Er
    } = this._options;
    if ("aggregates" in e) {
      const i = e.attrs || {};
      if (!i.release && !n) {
        _ && g.warn(gs);
        return
      }
      i.release = i.release || n, i.environment = i.environment || r, e.attrs = i
    } else {
      if (!e.release && !n) {
        _ && g.warn(gs);
        return
      }
      e.release = e.release || n, e.environment = e.environment || r
    }
    this.emit("beforeSendSession", e);
    const s = cc(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(s)
  }
  recordDroppedEvent(e, n, r = 1) {
    if (this._options.sendClientReports) {
      const s = `${e}:${n}`;
      _ && g.log(`Recording outcome: "${s}"${r>1?` (${r} times)`:""}`), this._outcomes[s] = (this._outcomes[s] || 0) + r
    }
  }
  on(e, n) {
    const r = this._hooks[e] = this._hooks[e] || [];
    return r.push(n), () => {
      const s = r.indexOf(n);
      s > -1 && r.splice(s, 1)
    }
  }
  emit(e, ...n) {
    const r = this._hooks[e];
    r && r.forEach(s => s(...n))
  }
  sendEnvelope(e) {
    return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, n => (_ && g.error("Error while sending envelope:", n), n)) : (_ && g.error("Transport disabled"), Vt({}))
  }
  _setupIntegrations() {
    const {
      integrations: e
    } = this._options;
    this._integrations = Qc(this, e), ps(this, e)
  }
  _updateSessionFromEvent(e, n) {
    var a;
    let r = n.level === "fatal",
      s = !1;
    const i = (a = n.exception) == null ? void 0 : a.values;
    if (i) {
      s = !0;
      for (const u of i) {
        const f = u.mechanism;
        if ((f == null ? void 0 : f.handled) === !1) {
          r = !0;
          break
        }
      }
    }
    const o = e.status === "ok";
    (o && e.errors === 0 || o && r) && (ne(e, {
      ...r && {
        status: "crashed"
      },
      errors: e.errors || Number(s || r)
    }), this.captureSession(e))
  }
  _isClientDoneProcessing(e) {
    return new Nt(n => {
      let r = 0;
      const s = 1,
        i = setInterval(() => {
          this._numProcessing == 0 ? (clearInterval(i), n(!0)) : (r += s, e && r >= e && (clearInterval(i), n(!1)))
        }, s)
    })
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0
  }
  _prepareEvent(e, n, r, s) {
    const i = this.getOptions(),
      o = Object.keys(this._integrations);
    return !n.integrations && (o != null && o.length) && (n.integrations = o), this.emit("preprocessEvent", e, n), e.type || s.setLastEventId(e.event_id || n.event_id), xc(i, e, n, r, this, s).then(c => {
      if (c === null) return c;
      this.emit("postprocessEvent", c, n), c.contexts = {
        trace: Ea(r),
        ...c.contexts
      };
      const a = gi(this, r);
      return c.sdkProcessingMetadata = {
        dynamicSamplingContext: a,
        ...c.sdkProcessingMetadata
      }, c
    })
  }
  _captureEvent(e, n = {}, r = A(), s = Jt()) {
    return _ && Kn(e) && g.log(`Captured error event \`${ki(e)[0]||"<unknown>"}\``), this._processEvent(e, n, r, s).then(i => i.event_id, i => {
      _ && (_s(i) ? g.log(i.message) : hs(i) ? g.warn(i.message) : g.warn(i))
    })
  }
  _processEvent(e, n, r, s) {
    const i = this.getOptions(),
      {
        sampleRate: o
      } = i,
      c = Ci(e),
      a = Kn(e),
      u = e.type || "error",
      f = `before send for type \`${u}\``,
      d = typeof o > "u" ? void 0 : be(o);
    if (a && typeof d == "number" && Math.random() > d) return this.recordDroppedEvent("sample_rate", "error"), cn(Ln(`Discarding event because it's not included in the random sample (sampling rate = ${o})`));
    const p = u === "replay_event" ? "replay" : u;
    return this._prepareEvent(e, n, r, s).then(l => {
      if (l === null) throw this.recordDroppedEvent("event_processor", p), Ln("An event processor returned `null`, will not send event.");
      if (n.data && n.data.__sentry__ === !0) return l;
      const h = iu(this, i, l, n);
      return su(h, f)
    }).then(l => {
      var b;
      if (l === null) {
        if (this.recordDroppedEvent("before_send", p), c) {
          const H = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", H)
        }
        throw Ln(`${f} returned \`null\`, will not send event.`)
      }
      const m = r.getSession() || s.getSession();
      if (a && m && this._updateSessionFromEvent(m, l), c) {
        const P = ((b = l.sdkProcessingMetadata) == null ? void 0 : b.spanCountBeforeProcessing) || 0,
          H = l.spans ? l.spans.length : 0,
          j = P - H;
        j > 0 && this.recordDroppedEvent("before_send", "span", j)
      }
      const h = l.transaction_info;
      if (c && h && l.transaction !== e.transaction) {
        const P = "custom";
        l.transaction_info = {
          ...h,
          source: P
        }
      }
      return this.sendEvent(l, n), l
    }).then(null, l => {
      throw _s(l) || hs(l) ? l : (this.captureException(l, {
        mechanism: {
          handled: !1,
          type: "internal"
        },
        data: {
          __sentry__: !0
        },
        originalException: l
      }), Qe(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`))
    })
  }
  _process(e) {
    this._numProcessing++, e.then(n => (this._numProcessing--, n), n => (this._numProcessing--, n))
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return this._outcomes = {}, Object.entries(e).map(([n, r]) => {
      const [s, i] = n.split(":");
      return {
        reason: s,
        category: i,
        quantity: r
      }
    })
  }
  _flushOutcomes() {
    _ && g.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (e.length === 0) {
      _ && g.log("No outcomes to send");
      return
    }
    if (!this._dsn) {
      _ && g.log("No dsn provided, will not send outcomes");
      return
    }
    _ && g.log("Sending outcomes:", e);
    const n = tu(e, this._options.tunnel && Ce(this._dsn));
    this.sendEnvelope(n)
  }
}

function su(t, e) {
  const n = `${e} must return \`null\` or a valid event.`;
  if (Re(t)) return t.then(r => {
    if (!Ee(r) && r !== null) throw Qe(n);
    return r
  }, r => {
    throw Qe(`${e} rejected with ${r}`)
  });
  if (!Ee(t) && t !== null) throw Qe(n);
  return t
}

function iu(t, e, n, r) {
  const {
    beforeSend: s,
    beforeSendTransaction: i,
    beforeSendSpan: o,
    ignoreSpans: c
  } = e;
  let a = n;
  if (Kn(a) && s) return s(a, r);
  if (Ci(a)) {
    if (o || c) {
      const u = eu(a);
      if (c != null && c.length && Xn(u, c)) return null;
      if (o) {
        const f = o(u);
        f ? a = Ae(n, nu(f)) : Wn()
      }
      if (a.spans) {
        const f = [],
          d = a.spans;
        for (const l of d) {
          if (c != null && c.length && Xn(l, c)) {
            ic(d, l);
            continue
          }
          if (o) {
            const m = o(l);
            m ? f.push(m) : (Wn(), f.push(l))
          } else f.push(l)
        }
        const p = a.spans.length - f.length;
        p && t.recordDroppedEvent("before_send", "span", p), a.spans = f
      }
    }
    if (i) {
      if (a.spans) {
        const u = a.spans.length;
        a.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: u
        }
      }
      return i(a, r)
    }
  }
  return a
}

function Kn(t) {
  return t.type === void 0
}

function Ci(t) {
  return t.type === "transaction"
}

function ou(t) {
  return [{
    type: "log",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }]
}

function au(t, e, n, r) {
  const s = {};
  return e != null && e.sdk && (s.sdk = {
    name: e.sdk.name,
    version: e.sdk.version
  }), n && r && (s.dsn = Ce(r)), de(s, [ou(t)])
}

function xn(t, e) {
  const n = cu(t) ?? [];
  if (n.length === 0) return;
  const r = t.getOptions(),
    s = au(n, r._metadata, r.tunnel, t.getDsn());
  Oi().set(t, []), t.emit("flushLogs"), t.sendEnvelope(s)
}

function cu(t) {
  return Oi().get(t)
}

function Oi() {
  return Ie("clientToLogBufferMap", () => new WeakMap)
}

function uu(t, e) {
  e.debug === !0 && (_ ? g.enable() : Yt(() => {
    console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
  })), A().update(e.initialScope);
  const r = new t(e);
  return du(r), r.init(), r
}

function du(t) {
  A().setClient(t)
}
const Li = Symbol.for("SentryBufferFullError");

function fu(t) {
  const e = [];

  function n() {
    return t === void 0 || e.length < t
  }

  function r(o) {
    return e.splice(e.indexOf(o), 1)[0] || Promise.resolve(void 0)
  }

  function s(o) {
    if (!n()) return cn(Li);
    const c = o();
    return e.indexOf(c) === -1 && e.push(c), c.then(() => r(c)).then(null, () => r(c).then(null, () => {})), c
  }

  function i(o) {
    return new Nt((c, a) => {
      let u = e.length;
      if (!u) return c(!0);
      const f = setTimeout(() => {
        o && o > 0 && c(!1)
      }, o);
      e.forEach(d => {
        Vt(d).then(() => {
          --u || (clearTimeout(f), c(!0))
        }, a)
      })
    })
  }
  return {
    $: e,
    add: s,
    drain: i
  }
}
const lu = 60 * 1e3;

function pu(t, e = Date.now()) {
  const n = parseInt(`${t}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const r = Date.parse(`${t}`);
  return isNaN(r) ? lu : r - e
}

function mu(t, e) {
  return t[e] || t.all || 0
}

function gu(t, e, n = Date.now()) {
  return mu(t, e) > n
}

function hu(t, {
  statusCode: e,
  headers: n
}, r = Date.now()) {
  const s = {
      ...t
    },
    i = n == null ? void 0 : n["x-sentry-rate-limits"],
    o = n == null ? void 0 : n["retry-after"];
  if (i)
    for (const c of i.trim().split(",")) {
      const [a, u, , , f] = c.split(":", 5), d = parseInt(a, 10), p = (isNaN(d) ? 60 : d) * 1e3;
      if (!u) s.all = r + p;
      else
        for (const l of u.split(";")) l === "metric_bucket" ? (!f || f.split(";").includes("custom")) && (s[l] = r + p) : s[l] = r + p
    } else o ? s.all = r + pu(o, r) : e === 429 && (s.all = r + 60 * 1e3);
  return s
}
const _u = 64;

function Su(t, e, n = fu(t.bufferSize || _u)) {
  let r = {};
  const s = o => n.drain(o);

  function i(o) {
    const c = [];
    if (Qr(o, (d, p) => {
        const l = ts(p);
        gu(r, l) ? t.recordDroppedEvent("ratelimit_backoff", l) : c.push(d)
      }), c.length === 0) return Vt({});
    const a = de(o[0], c),
      u = d => {
        Qr(a, (p, l) => {
          t.recordDroppedEvent(d, ts(l))
        })
      },
      f = () => e({
        body: Qa(a)
      }).then(d => (d.statusCode !== void 0 && (d.statusCode < 200 || d.statusCode >= 300) && _ && g.warn(`Sentry responded with status code ${d.statusCode} to sent event.`), r = hu(r, d), d), d => {
        throw u("network_error"), _ && g.error("Encountered error running transport request:", d), d
      });
    return n.add(f).then(d => d, d => {
      if (d === Li) return _ && g.error("Skipped sending event because buffer is full."), u("queue_overflow"), Vt({});
      throw d
    })
  }
  return {
    send: i,
    flush: s
  }
}
const yu = "thismessage:/";

function xi(t) {
  return "isRelative" in t
}

function Di(t, e) {
  const n = t.indexOf("://") <= 0 && t.indexOf("//") !== 0,
    r = n ? yu : void 0;
  try {
    if ("canParse" in URL && !URL.canParse(t, r)) return;
    const s = new URL(t, r);
    return n ? {
      isRelative: n,
      pathname: s.pathname,
      search: s.search,
      hash: s.hash
    } : s
  } catch {}
}

function Eu(t) {
  if (xi(t)) return t.pathname;
  const e = new URL(t);
  return e.search = "", e.hash = "", ["80", "443"].includes(e.port) && (e.port = ""), e.password && (e.password = "%filtered%"), e.username && (e.username = "%filtered%"), e.toString()
}

function qt(t) {
  if (!t) return {};
  const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) return {};
  const n = e[6] || "",
    r = e[8] || "";
  return {
    host: e[4],
    path: e[5],
    protocol: e[2],
    search: n,
    hash: r,
    relative: e[5] + n + r
  }
}

function bu(t) {
  return t.split(/[?#]/, 1)[0]
}

function Tu(t) {
  var e;
  "aggregates" in t ? ((e = t.attrs) == null ? void 0 : e.ip_address) === void 0 && (t.attrs = {
    ...t.attrs,
    ip_address: "{{auto}}"
  }) : t.ipAddress === void 0 && (t.ipAddress = "{{auto}}")
}

function vr(t, e, n = [e], r = "npm") {
  const s = t._metadata || {};
  s.sdk || (s.sdk = {
    name: `sentry.javascript.${e}`,
    packages: n.map(i => ({
      name: `${r}:@sentry/${i}`,
      version: Bt
    })),
    version: Bt
  }), t._metadata = s
}

function Mi(t = {}) {
  const e = t.client || k();
  if (!Vc() || !e) return {};
  const n = zt(),
    r = ce(n);
  if (r.getTraceData) return r.getTraceData(t);
  const s = t.scope || A(),
    i = t.span || J(),
    o = i ? ja(i) : vu(s),
    c = i ? kt(i) : gi(e, s),
    a = Aa(c);
  if (!oi.test(o)) return g.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
  const f = {
    "sentry-trace": o,
    baggage: a
  };
  if (t.propagateTraceparent) {
    const d = Iu(o);
    d && (f.traceparent = d)
  }
  return f
}

function vu(t) {
  const {
    traceId: e,
    sampled: n,
    propagationSpanId: r
  } = t.getPropagationContext();
  return ci(e, r, n)
}

function Iu(t) {
  const {
    traceId: e,
    parentSpanId: n,
    parentSampled: r
  } = ai(t) || {};
  if (!(!e || !n)) return `00-${e}-${n}-${r?"01":"00"}`
}
const Ru = 100;

function Wt(t, e) {
  const n = k(),
    r = Jt();
  if (!n) return;
  const {
    beforeBreadcrumb: s = null,
    maxBreadcrumbs: i = Ru
  } = n.getOptions();
  if (i <= 0) return;
  const c = {
      timestamp: Xt(),
      ...t
    },
    a = s ? Yt(() => s(c, e)) : c;
  a !== null && (n.emit && n.emit("beforeAddBreadcrumb", a, e), r.addBreadcrumb(a, i))
}
let Ss;
const wu = "FunctionToString",
  ys = new WeakMap,
  Au = (() => ({
    name: wu,
    setupOnce() {
      Ss = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...t) {
          const e = gr(this),
            n = ys.has(k()) && e !== void 0 ? e : this;
          return Ss.apply(n, t)
        }
      } catch {}
    },
    setup(t) {
      ys.set(t, !0)
    }
  })),
  ku = Au,
  Pu = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/],
  Nu = "EventFilters",
  Cu = (t = {}) => {
    let e;
    return {
      name: Nu,
      setup(n) {
        const r = n.getOptions();
        e = Es(t, r)
      },
      processEvent(n, r, s) {
        if (!e) {
          const i = s.getOptions();
          e = Es(t, i)
        }
        return Lu(n, e) ? null : n
      }
    }
  },
  Ou = ((t = {}) => ({
    ...Cu(t),
    name: "InboundFilters"
  }));

function Es(t = {}, e = {}) {
  return {
    allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
    denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
    ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : Pu],
    ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []]
  }
}

function Lu(t, e) {
  if (t.type) {
    if (t.type === "transaction" && Du(t, e.ignoreTransactions)) return _ && g.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ht(t)}`), !0
  } else {
    if (xu(t, e.ignoreErrors)) return _ && g.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ht(t)}`), !0;
    if (Hu(t)) return _ && g.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Ht(t)}`), !0;
    if (Mu(t, e.denyUrls)) return _ && g.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ht(t)}.
Url: ${un(t)}`), !0;
    if (!Fu(t, e.allowUrls)) return _ && g.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ht(t)}.
Url: ${un(t)}`), !0
  }
  return !1
}

function xu(t, e) {
  return e != null && e.length ? ki(t).some(n => Rt(n, e)) : !1
}

function Du(t, e) {
  if (!(e != null && e.length)) return !1;
  const n = t.transaction;
  return n ? Rt(n, e) : !1
}

function Mu(t, e) {
  if (!(e != null && e.length)) return !1;
  const n = un(t);
  return n ? Rt(n, e) : !1
}

function Fu(t, e) {
  if (!(e != null && e.length)) return !0;
  const n = un(t);
  return n ? Rt(n, e) : !0
}

function $u(t = []) {
  for (let e = t.length - 1; e >= 0; e--) {
    const n = t[e];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null
  }
  return null
}

function un(t) {
  var e, n;
  try {
    const r = [...((e = t.exception) == null ? void 0 : e.values) ?? []].reverse().find(i => {
        var o, c, a;
        return ((o = i.mechanism) == null ? void 0 : o.parent_id) === void 0 && ((a = (c = i.stacktrace) == null ? void 0 : c.frames) == null ? void 0 : a.length)
      }),
      s = (n = r == null ? void 0 : r.stacktrace) == null ? void 0 : n.frames;
    return s ? $u(s) : null
  } catch {
    return _ && g.error(`Cannot extract url for event ${Ht(t)}`), null
  }
}

function Hu(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) != null && n.length ? !t.message && !t.exception.values.some(r => r.stacktrace || r.type && r.type !== "Error" || r.value) : !1
}

function Bu(t, e, n, r, s, i) {
  var c;
  if (!((c = s.exception) != null && c.values) || !i || !bt(i.originalException, Error)) return;
  const o = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
  o && (s.exception.values = Zn(t, e, r, i.originalException, n, s.exception.values, o, 0))
}

function Zn(t, e, n, r, s, i, o, c) {
  if (i.length >= n + 1) return i;
  let a = [...i];
  if (bt(r[s], Error)) {
    bs(o, c);
    const u = t(e, r[s]),
      f = a.length;
    Ts(u, s, f, c), a = Zn(t, e, n, r[s], s, [u, ...a], u, f)
  }
  return Array.isArray(r.errors) && r.errors.forEach((u, f) => {
    if (bt(u, Error)) {
      bs(o, c);
      const d = t(e, u),
        p = a.length;
      Ts(d, `errors[${f}]`, p, c), a = Zn(t, e, n, u, s, [d, ...a], d, p)
    }
  }), a
}

function bs(t, e) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    ...t.type === "AggregateError" && {
      is_exception_group: !0
    },
    exception_id: e
  }
}

function Ts(t, e, n, r) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  }
}

function Uu(t) {
  const e = "console";
  Ot(e, t), Lt(e, ju)
}

function ju() {
  "console" in R && Uo.forEach(function(t) {
    t in R.console && W(R.console, t, function(e) {
      return nn[t] = e,
        function(...n) {
          nt("console", {
            args: n,
            level: t
          });
          const s = nn[t];
          s == null || s.apply(R.console, n)
        }
    })
  })
}

function qu(t) {
  return t === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log"
}
const Gu = "Dedupe",
  Vu = (() => {
    let t;
    return {
      name: Gu,
      processEvent(e) {
        if (e.type) return e;
        try {
          if (zu(e, t)) return _ && g.warn("Event dropped due to being a duplicate of previously captured event."), null
        } catch {}
        return t = e
      }
    }
  }),
  Wu = Vu;

function zu(t, e) {
  return e ? !!(Yu(t, e) || Xu(t, e)) : !1
}

function Yu(t, e) {
  const n = t.message,
    r = e.message;
  return !(!n && !r || n && !r || !n && r || n !== r || !$i(t, e) || !Fi(t, e))
}

function Xu(t, e) {
  const n = vs(e),
    r = vs(t);
  return !(!n || !r || n.type !== r.type || n.value !== r.value || !$i(t, e) || !Fi(t, e))
}

function Fi(t, e) {
  let n = Hr(t),
    r = Hr(e);
  if (!n && !r) return !0;
  if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
  for (let s = 0; s < r.length; s++) {
    const i = r[s],
      o = n[s];
    if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function) return !1
  }
  return !0
}

function $i(t, e) {
  let n = t.fingerprint,
    r = e.fingerprint;
  if (!n && !r) return !0;
  if (n && !r || !n && r) return !1;
  n = n, r = r;
  try {
    return n.join("") === r.join("")
  } catch {
    return !1
  }
}

function vs(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) == null ? void 0 : n[0]
}

function Ju(t, e, n, r, s) {
  if (!t.fetchData) return;
  const {
    method: i,
    url: o
  } = t.fetchData, c = At() && e(o);
  if (t.endTimestamp && c) {
    const l = t.fetchData.__span;
    if (!l) return;
    const m = r[l];
    m && (Zu(m, t), delete r[l]);
    return
  }
  const {
    spanOrigin: a = "auto.http.browser",
    propagateTraceparent: u = !1
  } = typeof s == "object" ? s : {
    spanOrigin: s
  }, f = !!J(), d = c && f ? Zt(td(o, i, a)) : new Pt;
  if (t.fetchData.__span = d.spanContext().spanId, r[d.spanContext().spanId] = d, n(t.fetchData.url)) {
    const l = t.args[0],
      m = t.args[1] || {},
      h = Ku(l, m, At() && f ? d : void 0, u);
    h && (t.args[1] = m, m.headers = h)
  }
  const p = k();
  if (p) {
    const l = {
      input: t.args,
      response: t.response,
      startTimestamp: t.startTimestamp,
      endTimestamp: t.endTimestamp
    };
    p.emit("beforeOutgoingRequestSpan", d, l)
  }
  return d
}

function Ku(t, e, n, r) {
  const s = Mi({
      span: n,
      propagateTraceparent: r
    }),
    i = s["sentry-trace"],
    o = s.baggage,
    c = s.traceparent;
  if (!i) return;
  const a = e.headers || (zs(t) ? t.headers : void 0);
  if (a)
    if (Qu(a)) {
      const u = new Headers(a);
      if (u.get("sentry-trace") || u.set("sentry-trace", i), r && c && !u.get("traceparent") && u.set("traceparent", c), o) {
        const f = u.get("baggage");
        f ? je(f) || u.set("baggage", `${f},${o}`) : u.set("baggage", o)
      }
      return u
    } else if (Array.isArray(a)) {
    const u = [...a];
    a.find(d => d[0] === "sentry-trace") || u.push(["sentry-trace", i]), r && c && !a.find(d => d[0] === "traceparent") && u.push(["traceparent", c]);
    const f = a.find(d => d[0] === "baggage" && je(d[1]));
    return o && !f && u.push(["baggage", o]), u
  } else {
    const u = "sentry-trace" in a ? a["sentry-trace"] : void 0,
      f = "traceparent" in a ? a.traceparent : void 0,
      d = "baggage" in a ? a.baggage : void 0,
      p = d ? Array.isArray(d) ? [...d] : [d] : [],
      l = d && (Array.isArray(d) ? d.find(h => je(h)) : je(d));
    o && !l && p.push(o);
    const m = {
      ...a,
      "sentry-trace": u ?? i,
      baggage: p.length > 0 ? p.join(",") : void 0
    };
    return r && c && !f && (m.traceparent = c), m
  } else return {
    ...s
  }
}

function Zu(t, e) {
  var n, r;
  if (e.response) {
    ei(t, e.response.status);
    const s = (r = (n = e.response) == null ? void 0 : n.headers) == null ? void 0 : r.get("content-length");
    if (s) {
      const i = parseInt(s);
      i > 0 && t.setAttribute("http.response_content_length", i)
    }
  } else e.error && t.setStatus({
    code: F,
    message: "internal_error"
  });
  t.end()
}

function je(t) {
  return t.split(",").some(e => e.trim().startsWith(Sr))
}

function Qu(t) {
  return typeof Headers < "u" && bt(t, Headers)
}

function td(t, e, n) {
  const r = Di(t);
  return {
    name: r ? `${e} ${Eu(r)}` : e,
    attributes: ed(t, r, e, n)
  }
}

function ed(t, e, n, r) {
  const s = {
    url: t,
    type: "fetch",
    "http.method": n,
    [D]: r,
    [Tt]: "http.client"
  };
  return e && (xi(e) || (s["http.url"] = e.href, s["server.address"] = e.host), e.search && (s["http.query"] = e.search), e.hash && (s["http.fragment"] = e.hash)), s
}

function Hi(t) {
  if (t !== void 0) return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0
}
const Te = R;

function nd() {
  return "history" in Te && !!Te.history
}

function rd() {
  if (!("fetch" in Te)) return !1;
  try {
    return new Headers, new Request("http://www.example.com"), new Response, !0
  } catch {
    return !1
  }
}

function Qn(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}

function sd() {
  var n;
  if (typeof EdgeRuntime == "string") return !0;
  if (!rd()) return !1;
  if (Qn(Te.fetch)) return !0;
  let t = !1;
  const e = Te.document;
  if (e && typeof e.createElement == "function") try {
    const r = e.createElement("iframe");
    r.hidden = !0, e.head.appendChild(r), (n = r.contentWindow) != null && n.fetch && (t = Qn(r.contentWindow.fetch)), e.head.removeChild(r)
  } catch (r) {
    _ && g.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
  }
  return t
}

function Bi(t, e) {
  const n = "fetch";
  Ot(n, t), Lt(n, () => Ui(void 0, e))
}

function id(t) {
  const e = "fetch-body-resolved";
  Ot(e, t), Lt(e, () => Ui(ad))
}

function Ui(t, e = !1) {
  e && !sd() || W(R, "fetch", function(n) {
    return function(...r) {
      const s = new Error,
        {
          method: i,
          url: o
        } = cd(r),
        c = {
          args: r,
          fetchData: {
            method: i,
            url: o
          },
          startTimestamp: $() * 1e3,
          virtualError: s,
          headers: ud(r)
        };
      return t || nt("fetch", {
        ...c
      }), n.apply(R, r).then(async a => (t ? t(a) : nt("fetch", {
        ...c,
        endTimestamp: $() * 1e3,
        response: a
      }), a), a => {
        if (nt("fetch", {
            ...c,
            endTimestamp: $() * 1e3,
            error: a
          }), lr(a) && a.stack === void 0 && (a.stack = s.stack, Y(a, "framesToPop", 1)), a instanceof TypeError && (a.message === "Failed to fetch" || a.message === "Load failed" || a.message === "NetworkError when attempting to fetch resource.")) try {
          const u = new URL(c.fetchData.url);
          a.message = `${a.message} (${u.host})`
        } catch {}
        throw a
      })
    }
  })
}
async function od(t, e) {
  if (t != null && t.body) {
    const n = t.body,
      r = n.getReader(),
      s = setTimeout(() => {
        n.cancel().then(null, () => {})
      }, 90 * 1e3);
    let i = !0;
    for (; i;) {
      let o;
      try {
        o = setTimeout(() => {
          n.cancel().then(null, () => {})
        }, 5e3);
        const {
          done: c
        } = await r.read();
        clearTimeout(o), c && (e(), i = !1)
      } catch {
        i = !1
      } finally {
        clearTimeout(o)
      }
    }
    clearTimeout(s), r.releaseLock(), n.cancel().then(null, () => {})
  }
}

function ad(t) {
  let e;
  try {
    e = t.clone()
  } catch {
    return
  }
  od(e, () => {
    nt("fetch-body-resolved", {
      endTimestamp: $() * 1e3,
      response: t
    })
  })
}

function tr(t, e) {
  return !!t && typeof t == "object" && !!t[e]
}

function Is(t) {
  return typeof t == "string" ? t : t ? tr(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}

function cd(t) {
  if (t.length === 0) return {
    method: "GET",
    url: ""
  };
  if (t.length === 2) {
    const [n, r] = t;
    return {
      url: Is(n),
      method: tr(r, "method") ? String(r.method).toUpperCase() : "GET"
    }
  }
  const e = t[0];
  return {
    url: Is(e),
    method: tr(e, "method") ? String(e.method).toUpperCase() : "GET"
  }
}

function ud(t) {
  const [e, n] = t;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) return new Headers(n.headers);
    if (zs(e)) return new Headers(e.headers)
  } catch {}
}

function dd() {
  return "npm"
}
const E = R;
let er = 0;

function ji() {
  return er > 0
}

function fd() {
  er++, setTimeout(() => {
    er--
  })
}

function ie(t, e = {}) {
  function n(s) {
    return typeof s == "function"
  }
  if (!n(t)) return t;
  try {
    const s = t.__sentry_wrapped__;
    if (s) return typeof s == "function" ? s : t;
    if (gr(t)) return t
  } catch {
    return t
  }
  const r = function(...s) {
    try {
      const i = s.map(o => ie(o, e));
      return t.apply(this, i)
    } catch (i) {
      throw fd(), hn(o => {
        o.addEventProcessor(c => (e.mechanism && (qn(c, void 0), ee(c, e.mechanism)), c.extra = {
          ...c.extra,
          arguments: s
        }, c)), vi(i)
      }), i
    }
  };
  try {
    for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s])
  } catch {}
  Xs(r, t), Y(t, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
      get() {
        return t.name
      }
    })
  } catch {}
  return r
}

function Ir() {
  const t = we(),
    {
      referrer: e
    } = E.document || {},
    {
      userAgent: n
    } = E.navigator || {},
    r = {
      ...e && {
        Referer: e
      },
      ...n && {
        "User-Agent": n
      }
    };
  return {
    url: t,
    headers: r
  }
}

function Rr(t, e) {
  const n = wr(t, e),
    r = {
      type: hd(e),
      value: _d(e)
    };
  return n.length && (r.stacktrace = {
    frames: n
  }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
}

function ld(t, e, n, r) {
  const s = k(),
    i = s == null ? void 0 : s.getOptions().normalizeDepth,
    o = Td(e),
    c = {
      __serialized__: hi(e, i)
    };
  if (o) return {
    exception: {
      values: [Rr(t, o)]
    },
    extra: c
  };
  const a = {
    exception: {
      values: [{
        type: gn(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
        value: Ed(e, {
          isUnhandledRejection: r
        })
      }]
    },
    extra: c
  };
  if (n) {
    const u = wr(t, n);
    u.length && (a.exception.values[0].stacktrace = {
      frames: u
    })
  }
  return a
}

function Dn(t, e) {
  return {
    exception: {
      values: [Rr(t, e)]
    }
  }
}

function wr(t, e) {
  const n = e.stacktrace || e.stack || "",
    r = md(e),
    s = gd(e);
  try {
    return t(n, r, s)
  } catch {}
  return []
}
const pd = /Minified React error #\d+;/i;

function md(t) {
  return t && pd.test(t.message) ? 1 : 0
}

function gd(t) {
  return typeof t.framesToPop == "number" ? t.framesToPop : 0
}

function qi(t) {
  return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? t instanceof WebAssembly.Exception : !1
}

function hd(t) {
  const e = t == null ? void 0 : t.name;
  return !e && qi(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e
}

function _d(t) {
  const e = t == null ? void 0 : t.message;
  return qi(t) ? Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : "wasm exception" : e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
}

function Sd(t, e, n, r) {
  const s = (n == null ? void 0 : n.syntheticException) || void 0,
    i = Ar(t, e, s, r);
  return ee(i), i.level = "error", n != null && n.event_id && (i.event_id = n.event_id), Vt(i)
}

function yd(t, e, n = "info", r, s) {
  const i = (r == null ? void 0 : r.syntheticException) || void 0,
    o = nr(t, e, i, s);
  return o.level = n, r != null && r.event_id && (o.event_id = r.event_id), Vt(o)
}

function Ar(t, e, n, r, s) {
  let i;
  if (Vs(e) && e.error) return Dn(t, e.error);
  if (Ur(e) || Zo(e)) {
    const o = e;
    if ("stack" in e) i = Dn(t, e);
    else {
      const c = o.name || (Ur(o) ? "DOMError" : "DOMException"),
        a = o.message ? `${c}: ${o.message}` : c;
      i = nr(t, a, n, r), qn(i, a)
    }
    return "code" in o && (i.tags = {
      ...i.tags,
      "DOMException.code": `${o.code}`
    }), i
  }
  return lr(e) ? Dn(t, e) : Ee(e) || gn(e) ? (i = ld(t, e, n, s), ee(i, {
    synthetic: !0
  }), i) : (i = nr(t, e, n, r), qn(i, `${e}`), ee(i, {
    synthetic: !0
  }), i)
}

function nr(t, e, n, r) {
  const s = {};
  if (r && n) {
    const i = wr(t, n);
    i.length && (s.exception = {
      values: [{
        value: e,
        stacktrace: {
          frames: i
        }
      }]
    }), ee(s, {
      synthetic: !0
    })
  }
  if (pr(e)) {
    const {
      __sentry_template_string__: i,
      __sentry_template_values__: o
    } = e;
    return s.logentry = {
      message: i,
      params: o
    }, s
  }
  return s.message = e, s
}

function Ed(t, {
  isUnhandledRejection: e
}) {
  const n = sa(t),
    r = e ? "promise rejection" : "exception";
  return Vs(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : gn(t) ? `Event \`${bd(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}

function bd(t) {
  try {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : void 0
  } catch {}
}

function Td(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      const n = t[e];
      if (n instanceof Error) return n
    }
}
const vd = 5e3;
class Id extends ru {
  constructor(e) {
    var c;
    const n = Rd(e),
      r = E.SENTRY_SDK_SOURCE || dd();
    vr(n, "browser", ["browser"], r), (c = n._metadata) != null && c.sdk && (n._metadata.sdk.settings = {
      infer_ip: n.sendDefaultPii ? "auto" : "never",
      ...n._metadata.sdk.settings
    }), super(n);
    const {
      sendDefaultPii: s,
      sendClientReports: i,
      enableLogs: o
    } = this._options;
    E.document && (i || o) && E.document.addEventListener("visibilitychange", () => {
      E.document.visibilityState === "hidden" && (i && this._flushOutcomes(), o && xn(this))
    }), o && (this.on("flush", () => {
      xn(this)
    }), this.on("afterCaptureLog", () => {
      this._logFlushIdleTimeout && clearTimeout(this._logFlushIdleTimeout), this._logFlushIdleTimeout = setTimeout(() => {
        xn(this)
      }, vd)
    })), s && this.on("beforeSendSession", Tu)
  }
  eventFromException(e, n) {
    return Sd(this._options.stackParser, e, n, this._options.attachStacktrace)
  }
  eventFromMessage(e, n = "info", r) {
    return yd(this._options.stackParser, e, n, r, this._options.attachStacktrace)
  }
  _prepareEvent(e, n, r, s) {
    return e.platform = e.platform || "javascript", super._prepareEvent(e, n, r, s)
  }
}

function Rd(t) {
  var e;
  return {
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : (e = E.SENTRY_RELEASE) == null ? void 0 : e.id,
    sendClientReports: !0,
    parentSpanIsAlwaysRootSpan: !0,
    ...t
  }
}
const Sn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  S = R,
  wd = (t, e) => t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good",
  Oe = (t, e, n, r) => {
    let s, i;
    return o => {
      e.value >= 0 && (o || r) && (i = e.value - (s ?? 0), (i || s === void 0) && (s = e.value, e.delta = i, e.rating = wd(e.value, n), t(e)))
    }
  },
  Ad = () => `v5-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,
  Le = (t = !0) => {
    var n, r;
    const e = (r = (n = S.performance) == null ? void 0 : n.getEntriesByType) == null ? void 0 : r.call(n, "navigation")[0];
    if (!t || e && e.responseStart > 0 && e.responseStart < performance.now()) return e
  },
  fe = () => {
    const t = Le();
    return (t == null ? void 0 : t.activationStart) ?? 0
  },
  xe = (t, e = -1) => {
    var i, o;
    const n = Le();
    let r = "navigate";
    return n && ((i = S.document) != null && i.prerendering || fe() > 0 ? r = "prerender" : (o = S.document) != null && o.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
      name: t,
      value: e,
      rating: "good",
      delta: 0,
      entries: [],
      id: Ad(),
      navigationType: r
    }
  },
  Mn = new WeakMap;

function kr(t, e) {
  return Mn.get(t) || Mn.set(t, new e), Mn.get(t)
}
class dn {
  constructor() {
    dn.prototype.__init.call(this), dn.prototype.__init2.call(this)
  }
  __init() {
    this._sessionValue = 0
  }
  __init2() {
    this._sessionEntries = []
  }
  _processEntry(e) {
    var s;
    if (e.hadRecentInput) return;
    const n = this._sessionEntries[0],
      r = this._sessionEntries[this._sessionEntries.length - 1];
    this._sessionValue && n && r && e.startTime - r.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), (s = this._onAfterProcessingUnexpectedShift) == null || s.call(this, e)
  }
}
const le = (t, e, n = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(t)) {
        const r = new PerformanceObserver(s => {
          Promise.resolve().then(() => {
            e(s.getEntries())
          })
        });
        return r.observe({
          type: t,
          buffered: !0,
          ...n
        }), r
      }
    } catch {}
  },
  Pr = t => {
    let e = !1;
    return () => {
      e || (t(), e = !0)
    }
  };
let _e = -1;
const kd = () => {
    var t, e;
    return ((t = S.document) == null ? void 0 : t.visibilityState) === "hidden" && !((e = S.document) != null && e.prerendering) ? 0 : 1 / 0
  },
  fn = t => {
    S.document.visibilityState === "hidden" && _e > -1 && (_e = t.type === "visibilitychange" ? t.timeStamp : 0, Nd())
  },
  Pd = () => {
    addEventListener("visibilitychange", fn, !0), addEventListener("prerenderingchange", fn, !0)
  },
  Nd = () => {
    removeEventListener("visibilitychange", fn, !0), removeEventListener("prerenderingchange", fn, !0)
  },
  Nr = () => {
    var t;
    if (S.document && _e < 0) {
      const e = fe();
      _e = (S.document.prerendering || (t = globalThis.performance.getEntriesByType("visibility-state").filter(r => r.name === "hidden" && r.startTime > e)[0]) == null ? void 0 : t.startTime) ?? kd(), Pd()
    }
    return {
      get firstHiddenTime() {
        return _e
      }
    }
  },
  yn = t => {
    var e;
    (e = S.document) != null && e.prerendering ? addEventListener("prerenderingchange", () => t(), !0) : t()
  },
  Cd = [1800, 3e3],
  Od = (t, e = {}) => {
    yn(() => {
      const n = Nr(),
        r = xe("FCP");
      let s;
      const o = le("paint", c => {
        for (const a of c) a.name === "first-contentful-paint" && (o.disconnect(), a.startTime < n.firstHiddenTime && (r.value = Math.max(a.startTime - fe(), 0), r.entries.push(a), s(!0)))
      });
      o && (s = Oe(t, r, Cd, e.reportAllChanges))
    })
  },
  Ld = [.1, .25],
  xd = (t, e = {}) => {
    Od(Pr(() => {
      var c, a;
      const n = xe("CLS", 0);
      let r;
      const s = kr(e, dn),
        i = u => {
          for (const f of u) s._processEntry(f);
          s._sessionValue > n.value && (n.value = s._sessionValue, n.entries = s._sessionEntries, r())
        },
        o = le("layout-shift", i);
      o && (r = Oe(t, n, Ld, e.reportAllChanges), (c = S.document) == null || c.addEventListener("visibilitychange", () => {
        var u;
        ((u = S.document) == null ? void 0 : u.visibilityState) === "hidden" && (i(o.takeRecords()), r(!0))
      }), (a = S == null ? void 0 : S.setTimeout) == null || a.call(S, r))
    }))
  };
let Gi = 0,
  Fn = 1 / 0,
  qe = 0;
const Dd = t => {
  t.forEach(e => {
    e.interactionId && (Fn = Math.min(Fn, e.interactionId), qe = Math.max(qe, e.interactionId), Gi = qe ? (qe - Fn) / 7 + 1 : 0)
  })
};
let rr;
const Vi = () => rr ? Gi : performance.interactionCount || 0,
  Md = () => {
    "interactionCount" in performance || rr || (rr = le("event", Dd, {
      type: "event",
      buffered: !0,
      durationThreshold: 0
    }))
  },
  $n = 10;
let Wi = 0;
const Fd = () => Vi() - Wi;
class ln {
  constructor() {
    ln.prototype.__init.call(this), ln.prototype.__init2.call(this)
  }
  __init() {
    this._longestInteractionList = []
  }
  __init2() {
    this._longestInteractionMap = new Map
  }
  _resetInteractions() {
    Wi = Vi(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
  }
  _estimateP98LongestInteraction() {
    const e = Math.min(this._longestInteractionList.length - 1, Math.floor(Fd() / 50));
    return this._longestInteractionList[e]
  }
  _processEntry(e) {
    var s, i;
    if ((s = this._onBeforeProcessingEntry) == null || s.call(this, e), !(e.interactionId || e.entryType === "first-input")) return;
    const n = this._longestInteractionList.at(-1);
    let r = this._longestInteractionMap.get(e.interactionId);
    if (r || this._longestInteractionList.length < $n || e.duration > n._latency) {
      if (r ? e.duration > r._latency ? (r.entries = [e], r._latency = e.duration) : e.duration === r._latency && e.startTime === r.entries[0].startTime && r.entries.push(e) : (r = {
          id: e.interactionId,
          entries: [e],
          _latency: e.duration
        }, this._longestInteractionMap.set(r.id, r), this._longestInteractionList.push(r)), this._longestInteractionList.sort((o, c) => c._latency - o._latency), this._longestInteractionList.length > $n) {
        const o = this._longestInteractionList.splice($n);
        for (const c of o) this._longestInteractionMap.delete(c.id)
      }(i = this._onAfterProcessingINPCandidate) == null || i.call(this, r)
    }
  }
}
const Cr = t => {
    const e = n => {
      var r;
      (n.type === "pagehide" || ((r = S.document) == null ? void 0 : r.visibilityState) === "hidden") && t(n)
    };
    S.document && (addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0))
  },
  zi = t => {
    var n;
    const e = S.requestIdleCallback || S.setTimeout;
    ((n = S.document) == null ? void 0 : n.visibilityState) === "hidden" ? t(): (t = Pr(t), e(t), Cr(t))
  },
  $d = [200, 500],
  Hd = 40,
  Bd = (t, e = {}) => {
    globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && yn(() => {
      Md();
      const n = xe("INP");
      let r;
      const s = kr(e, ln),
        i = c => {
          zi(() => {
            for (const u of c) s._processEntry(u);
            const a = s._estimateP98LongestInteraction();
            a && a._latency !== n.value && (n.value = a._latency, n.entries = a.entries, r())
          })
        },
        o = le("event", i, {
          durationThreshold: e.durationThreshold ?? Hd
        });
      r = Oe(t, n, $d, e.reportAllChanges), o && (o.observe({
        type: "first-input",
        buffered: !0
      }), Cr(() => {
        i(o.takeRecords()), r(!0)
      }))
    })
  };
class Ud {
  _processEntry(e) {
    var n;
    (n = this._onBeforeProcessingEntry) == null || n.call(this, e)
  }
}
const jd = [2500, 4e3],
  qd = (t, e = {}) => {
    yn(() => {
      const n = Nr(),
        r = xe("LCP");
      let s;
      const i = kr(e, Ud),
        o = a => {
          e.reportAllChanges || (a = a.slice(-1));
          for (const u of a) i._processEntry(u), u.startTime < n.firstHiddenTime && (r.value = Math.max(u.startTime - fe(), 0), r.entries = [u], s())
        },
        c = le("largest-contentful-paint", o);
      if (c) {
        s = Oe(t, r, jd, e.reportAllChanges);
        const a = Pr(() => {
          o(c.takeRecords()), c.disconnect(), s(!0)
        });
        for (const u of ["keydown", "click", "visibilitychange"]) S.document && addEventListener(u, () => zi(a), {
          capture: !0,
          once: !0
        })
      }
    })
  },
  Gd = [800, 1800],
  sr = t => {
    var e, n;
    (e = S.document) != null && e.prerendering ? yn(() => sr(t)) : ((n = S.document) == null ? void 0 : n.readyState) !== "complete" ? addEventListener("load", () => sr(t), !0) : setTimeout(t)
  },
  Vd = (t, e = {}) => {
    const n = xe("TTFB"),
      r = Oe(t, n, Gd, e.reportAllChanges);
    sr(() => {
      const s = Le();
      s && (n.value = Math.max(s.responseStart - fe(), 0), n.entries = [s], r(!0))
    })
  },
  Se = {},
  pn = {};
let Yi, Xi, Ji, Ki;

function Zi(t, e = !1) {
  return En("cls", t, Yd, Yi, e)
}

function Qi(t, e = !1) {
  return En("lcp", t, Xd, Xi, e)
}

function Wd(t) {
  return En("ttfb", t, Jd, Ji)
}

function zd(t) {
  return En("inp", t, Kd, Ki)
}

function oe(t, e) {
  return to(t, e), pn[t] || (Zd(t), pn[t] = !0), eo(t, e)
}

function De(t, e) {
  const n = Se[t];
  if (n != null && n.length)
    for (const r of n) try {
      r(e)
    } catch (s) {
      Sn && g.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Et(r)}
Error:`, s)
    }
}

function Yd() {
  return xd(t => {
    De("cls", {
      metric: t
    }), Yi = t
  }, {
    reportAllChanges: !0
  })
}

function Xd() {
  return qd(t => {
    De("lcp", {
      metric: t
    }), Xi = t
  }, {
    reportAllChanges: !0
  })
}

function Jd() {
  return Vd(t => {
    De("ttfb", {
      metric: t
    }), Ji = t
  })
}

function Kd() {
  return Bd(t => {
    De("inp", {
      metric: t
    }), Ki = t
  })
}

function En(t, e, n, r, s = !1) {
  to(t, e);
  let i;
  return pn[t] || (i = n(), pn[t] = !0), r && e({
    metric: r
  }), eo(t, e, s ? i : void 0)
}

function Zd(t) {
  const e = {};
  t === "event" && (e.durationThreshold = 0), le(t, n => {
    De(t, {
      entries: n
    })
  }, e)
}

function to(t, e) {
  Se[t] = Se[t] || [], Se[t].push(e)
}

function eo(t, e, n) {
  return () => {
    n && n();
    const r = Se[t];
    if (!r) return;
    const s = r.indexOf(e);
    s !== -1 && r.splice(s, 1)
  }
}

function Qd(t) {
  return "duration" in t
}

function Hn(t) {
  return typeof t == "number" && isFinite(t)
}

function Ct(t, e, n, {
  ...r
}) {
  const s = I(t).start_timestamp;
  return s && s > e && typeof t.updateStartTime == "function" && t.updateStartTime(e), br(t, () => {
    const i = Zt({
      startTime: e,
      ...r
    });
    return i && i.end(n), i
  })
}

function Or(t) {
  var b;
  const e = k();
  if (!e) return;
  const {
    name: n,
    transaction: r,
    attributes: s,
    startTime: i
  } = t, {
    release: o,
    environment: c,
    sendDefaultPii: a
  } = e.getOptions(), u = e.getIntegrationByName("Replay"), f = u == null ? void 0 : u.getReplayId(), d = A(), p = d.getUser(), l = p !== void 0 ? p.email || p.id || p.ip_address : void 0;
  let m;
  try {
    m = d.getScopeData().contexts.profile.profile_id
  } catch {}
  const h = {
    release: o,
    environment: c,
    user: l || void 0,
    profile_id: m || void 0,
    replay_id: f || void 0,
    transaction: r,
    "user_agent.original": (b = S.navigator) == null ? void 0 : b.userAgent,
    "client.address": a ? "{{auto}}" : void 0,
    ...s
  };
  return Zt({
    name: n,
    attributes: h,
    startTime: i,
    experimental: {
      standalone: !0
    }
  })
}

function bn() {
  return S.addEventListener && S.performance
}

function x(t) {
  return t / 1e3
}

function no(t) {
  let e = "unknown",
    n = "unknown",
    r = "";
  for (const s of t) {
    if (s === "/") {
      [e, n] = t.split("/");
      break
    }
    if (!isNaN(Number(s))) {
      e = r === "h" ? "http" : r, n = t.split(r)[1];
      break
    }
    r += s
  }
  return r === t && (e = r), {
    name: e,
    version: n
  }
}

function ro(t) {
  try {
    return PerformanceObserver.supportedEntryTypes.includes(t)
  } catch {
    return !1
  }
}

function so(t, e) {
  let n, r = !1;

  function s(c) {
    !r && n && e(c, n), r = !0
  }
  Cr(() => {
    s("pagehide")
  });
  const i = t.on("beforeStartNavigationSpan", (c, a) => {
      a != null && a.isRedirect || (s("navigation"), Rs(i, o))
    }),
    o = t.on("afterStartPageLoadSpan", c => {
      n = c.spanContext().spanId, Rs(o)
    })
}

function Rs(...t) {
  t.forEach(e => e && setTimeout(e, 0))
}

function tf(t) {
  let e = 0,
    n;
  if (!ro("layout-shift")) return;
  const r = Zi(({
    metric: s
  }) => {
    const i = s.entries[s.entries.length - 1];
    i && (e = s.value, n = i)
  }, !0);
  so(t, (s, i) => {
    ef(e, n, i, s), r()
  })
}

function ef(t, e, n, r) {
  var u;
  Sn && g.log(`Sending CLS span (${t})`);
  const s = x((X() || 0) + ((e == null ? void 0 : e.startTime) || 0)),
    i = A().getScopeData().transactionName,
    o = e ? dt((u = e.sources[0]) == null ? void 0 : u.node) : "Layout shift",
    c = {
      [D]: "auto.http.browser.cls",
      [Tt]: "ui.webvital.cls",
      [ue]: (e == null ? void 0 : e.duration) || 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r
    };
  e != null && e.sources && e.sources.forEach((f, d) => {
    c[`cls.source.${d+1}`] = dt(f.node)
  });
  const a = Or({
    name: o,
    transaction: i,
    attributes: c,
    startTime: s
  });
  a && (a.addEvent("cls", {
    [Pe]: "",
    [Ne]: t
  }), a.end(s))
}

function nf(t) {
  let e = 0,
    n;
  if (!ro("largest-contentful-paint")) return;
  const r = Qi(({
    metric: s
  }) => {
    const i = s.entries[s.entries.length - 1];
    i && (e = s.value, n = i)
  }, !0);
  so(t, (s, i) => {
    rf(e, n, i, s), r()
  })
}

function rf(t, e, n, r) {
  Sn && g.log(`Sending LCP span (${t})`);
  const s = x((X() || 0) + ((e == null ? void 0 : e.startTime) || 0)),
    i = A().getScopeData().transactionName,
    o = e ? dt(e.element) : "Largest contentful paint",
    c = {
      [D]: "auto.http.browser.lcp",
      [Tt]: "ui.webvital.lcp",
      [ue]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r
    };
  e && (e.element && (c["lcp.element"] = dt(e.element)), e.id && (c["lcp.id"] = e.id), e.url && (c["lcp.url"] = e.url.trim().slice(0, 200)), e.loadTime != null && (c["lcp.loadTime"] = e.loadTime), e.renderTime != null && (c["lcp.renderTime"] = e.renderTime), e.size != null && (c["lcp.size"] = e.size));
  const a = Or({
    name: o,
    transaction: i,
    attributes: c,
    startTime: s
  });
  a && (a.addEvent("lcp", {
    [Pe]: "millisecond",
    [Ne]: t
  }), a.end(s))
}
const sf = 2147483647;
let ws = 0,
  ot = {},
  G, Qt;

function of({
  recordClsStandaloneSpans: t,
  recordLcpStandaloneSpans: e,
  client: n
}) {
  const r = bn();
  if (r && X()) {
    r.mark && S.performance.mark("sentry-tracing-init");
    const s = e ? nf(n) : ff(),
      i = lf(),
      o = t ? tf(n) : df();
    return () => {
      s == null || s(), i(), o == null || o()
    }
  }
  return () => {}
}

function af() {
  oe("longtask", ({
    entries: t
  }) => {
    const e = J();
    if (!e) return;
    const {
      op: n,
      start_timestamp: r
    } = I(e);
    for (const s of t) {
      const i = x(X() + s.startTime),
        o = x(s.duration);
      n === "navigation" && r && i < r || Ct(e, i, i + o, {
        name: "Main UI thread blocked",
        op: "ui.long-task",
        attributes: {
          [D]: "auto.ui.browser.metrics"
        }
      })
    }
  })
}

function cf() {
  new PerformanceObserver(e => {
    const n = J();
    if (n)
      for (const r of e.getEntries()) {
        if (!r.scripts[0]) continue;
        const s = x(X() + r.startTime),
          {
            start_timestamp: i,
            op: o
          } = I(n);
        if (o === "navigation" && i && s < i) continue;
        const c = x(r.duration),
          a = {
            [D]: "auto.ui.browser.metrics"
          },
          u = r.scripts[0],
          {
            invoker: f,
            invokerType: d,
            sourceURL: p,
            sourceFunctionName: l,
            sourceCharPosition: m
          } = u;
        a["browser.script.invoker"] = f, a["browser.script.invoker_type"] = d, p && (a["code.filepath"] = p), l && (a["code.function"] = l), m !== -1 && (a["browser.script.source_char_position"] = m), Ct(n, s, s + c, {
          name: "Main UI thread blocked",
          op: "ui.long-animation-frame",
          attributes: a
        })
      }
  }).observe({
    type: "long-animation-frame",
    buffered: !0
  })
}

function uf() {
  oe("event", ({
    entries: t
  }) => {
    const e = J();
    if (e) {
      for (const n of t)
        if (n.name === "click") {
          const r = x(X() + n.startTime),
            s = x(n.duration),
            i = {
              name: dt(n.target),
              op: `ui.interaction.${n.name}`,
              startTime: r,
              attributes: {
                [D]: "auto.ui.browser.metrics"
              }
            },
            o = Ys(n.target);
          o && (i.attributes["ui.component_name"] = o), Ct(e, r, r + s, i)
        }
    }
  })
}

function df() {
  return Zi(({
    metric: t
  }) => {
    const e = t.entries[t.entries.length - 1];
    e && (ot.cls = {
      value: t.value,
      unit: ""
    }, Qt = e)
  }, !0)
}

function ff() {
  return Qi(({
    metric: t
  }) => {
    const e = t.entries[t.entries.length - 1];
    e && (ot.lcp = {
      value: t.value,
      unit: "millisecond"
    }, G = e)
  }, !0)
}

function lf() {
  return Wd(({
    metric: t
  }) => {
    t.entries[t.entries.length - 1] && (ot.ttfb = {
      value: t.value,
      unit: "millisecond"
    })
  })
}

function pf(t, e) {
  const n = bn(),
    r = X();
  if (!(n != null && n.getEntries) || !r) return;
  const s = x(r),
    i = n.getEntries(),
    {
      op: o,
      start_timestamp: c
    } = I(t);
  i.slice(ws).forEach(a => {
    const u = x(a.startTime),
      f = x(Math.max(0, a.duration));
    if (!(o === "navigation" && c && s + u < c)) switch (a.entryType) {
      case "navigation": {
        hf(t, a, s);
        break
      }
      case "mark":
      case "paint":
      case "measure": {
        mf(t, a, u, f, s, e.ignorePerformanceApiSpans);
        const d = Nr(),
          p = a.startTime < d.firstHiddenTime;
        a.name === "first-paint" && p && (ot.fp = {
          value: a.startTime,
          unit: "millisecond"
        }), a.name === "first-contentful-paint" && p && (ot.fcp = {
          value: a.startTime,
          unit: "millisecond"
        });
        break
      }
      case "resource": {
        yf(t, a, a.name, u, f, s, e.ignoreResourceSpans);
        break
      }
    }
  }), ws = Math.max(i.length - 1, 0), Ef(t), o === "pageload" && (Tf(ot), e.recordClsOnPageloadSpan || delete ot.cls, e.recordLcpOnPageloadSpan || delete ot.lcp, Object.entries(ot).forEach(([a, u]) => {
    pc(a, u.value, u.unit)
  }), t.setAttribute("performance.timeOrigin", s), t.setAttribute("performance.activationStart", fe()), bf(t, e)), G = void 0, Qt = void 0, ot = {}
}

function mf(t, e, n, r, s, i) {
  if (["mark", "measure"].includes(e.entryType) && Rt(e.name, i)) return;
  const o = Le(!1),
    c = x(o ? o.requestStart : 0),
    a = s + Math.max(n, c),
    u = s + n,
    f = u + r,
    d = {
      [D]: "auto.resource.browser.metrics"
    };
  a !== u && (d["sentry.browser.measure_happened_before_request"] = !0, d["sentry.browser.measure_start_time"] = a), gf(d, e), a <= f && Ct(t, a, f, {
    name: e.name,
    op: e.entryType,
    attributes: d
  })
}

function gf(t, e) {
  try {
    const n = e.detail;
    if (!n) return;
    if (typeof n == "object") {
      for (const [r, s] of Object.entries(n))
        if (s && ye(s)) t[`sentry.browser.measure.detail.${r}`] = s;
        else if (s !== void 0) try {
        t[`sentry.browser.measure.detail.${r}`] = JSON.stringify(s)
      } catch {}
      return
    }
    if (ye(n)) {
      t["sentry.browser.measure.detail"] = n;
      return
    }
    try {
      t["sentry.browser.measure.detail"] = JSON.stringify(n)
    } catch {}
  } catch {}
}

function hf(t, e, n) {
  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
    Ge(t, e, r, n)
  }), Ge(t, e, "secureConnection", n, "TLS/SSL"), Ge(t, e, "fetch", n, "cache"), Ge(t, e, "domainLookup", n, "DNS"), Sf(t, e, n)
}

function Ge(t, e, n, r, s = n) {
  const i = _f(n),
    o = e[i],
    c = e[`${n}Start`];
  !c || !o || Ct(t, r + x(c), r + x(o), {
    op: `browser.${s}`,
    name: e.name,
    attributes: {
      [D]: "auto.ui.browser.metrics",
      ...n === "redirect" && e.redirectCount != null ? {
        "http.redirect_count": e.redirectCount
      } : {}
    }
  })
}

function _f(t) {
  return t === "secureConnection" ? "connectEnd" : t === "fetch" ? "domainLookupStart" : `${t}End`
}

function Sf(t, e, n) {
  const r = n + x(e.requestStart),
    s = n + x(e.responseEnd),
    i = n + x(e.responseStart);
  e.responseEnd && (Ct(t, r, s, {
    op: "browser.request",
    name: e.name,
    attributes: {
      [D]: "auto.ui.browser.metrics"
    }
  }), Ct(t, i, s, {
    op: "browser.response",
    name: e.name,
    attributes: {
      [D]: "auto.ui.browser.metrics"
    }
  }))
}

function yf(t, e, n, r, s, i, o) {
  if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch") return;
  const c = e.initiatorType ? `resource.${e.initiatorType}` : "resource.other";
  if (o != null && o.includes(c)) return;
  const a = qt(n),
    u = {
      [D]: "auto.resource.browser.metrics"
    };
  Bn(u, e, "transferSize", "http.response_transfer_size"), Bn(u, e, "encodedBodySize", "http.response_content_length"), Bn(u, e, "decodedBodySize", "http.decoded_response_content_length");
  const f = e.deliveryType;
  f != null && (u["http.response_delivery_type"] = f);
  const d = e.renderBlockingStatus;
  if (d && (u["resource.render_blocking_status"] = d), a.protocol && (u["url.scheme"] = a.protocol.split(":").pop()), a.host && (u["server.address"] = a.host), u["url.same_origin"] = n.includes(S.location.origin), e.nextHopProtocol != null) {
    const {
      name: m,
      version: h
    } = no(e.nextHopProtocol);
    u["network.protocol.name"] = m, u["network.protocol.version"] = h
  }
  const p = i + r,
    l = p + s;
  Ct(t, p, l, {
    name: n.replace(S.location.origin, ""),
    op: c,
    attributes: u
  })
}

function Ef(t) {
  const e = S.navigator;
  if (!e) return;
  const n = e.connection;
  n && (n.effectiveType && t.setAttribute("effectiveConnectionType", n.effectiveType), n.type && t.setAttribute("connectionType", n.type), Hn(n.rtt) && (ot["connection.rtt"] = {
    value: n.rtt,
    unit: "millisecond"
  })), Hn(e.deviceMemory) && t.setAttribute("deviceMemory", `${e.deviceMemory} GB`), Hn(e.hardwareConcurrency) && t.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency))
}

function bf(t, e) {
  G && e.recordLcpOnPageloadSpan && (G.element && t.setAttribute("lcp.element", dt(G.element)), G.id && t.setAttribute("lcp.id", G.id), G.url && t.setAttribute("lcp.url", G.url.trim().slice(0, 200)), G.loadTime != null && t.setAttribute("lcp.loadTime", G.loadTime), G.renderTime != null && t.setAttribute("lcp.renderTime", G.renderTime), t.setAttribute("lcp.size", G.size)), Qt != null && Qt.sources && e.recordClsOnPageloadSpan && Qt.sources.forEach((n, r) => t.setAttribute(`cls.source.${r+1}`, dt(n.node)))
}

function Bn(t, e, n, r) {
  const s = e[n];
  s != null && s < sf && (t[r] = s)
}

function Tf(t) {
  const e = Le(!1);
  if (!e) return;
  const {
    responseStart: n,
    requestStart: r
  } = e;
  r <= n && (t["ttfb.requestTime"] = {
    value: n - r,
    unit: "millisecond"
  })
}

function vf() {
  return bn() && X() ? oe("element", If) : () => {}
}
const If = ({
    entries: t
  }) => {
    const e = J(),
      n = e ? U(e) : void 0,
      r = n ? I(n).description : A().getScopeData().transactionName;
    t.forEach(s => {
      var l, m;
      const i = s;
      if (!i.identifier) return;
      const o = i.name,
        c = i.renderTime,
        a = i.loadTime,
        [u, f] = a ? [x(a), "load-time"] : c ? [x(c), "render-time"] : [$(), "entry-emission"],
        d = o === "image-paint" ? x(Math.max(0, (c ?? 0) - (a ?? 0))) : 0,
        p = {
          [D]: "auto.ui.browser.elementtiming",
          [Tt]: "ui.elementtiming",
          [z]: "component",
          "sentry.span_start_time_source": f,
          "sentry.transaction_name": r,
          "element.id": i.id,
          "element.type": ((m = (l = i.element) == null ? void 0 : l.tagName) == null ? void 0 : m.toLowerCase()) || "unknown",
          "element.size": i.naturalWidth && i.naturalHeight ? `${i.naturalWidth}x${i.naturalHeight}` : void 0,
          "element.render_time": c,
          "element.load_time": a,
          "element.url": i.url || void 0,
          "element.identifier": i.identifier,
          "element.paint_type": o
        };
      yc({
        name: `element[${i.identifier}]`,
        attributes: p,
        startTime: u,
        onlyIfParent: !0
      }, h => {
        h.end(u + d)
      })
    })
  },
  Rf = 1e3;
let As, ir, or;

function wf(t) {
  Ot("dom", t), Lt("dom", Af)
}

function Af() {
  if (!S.document) return;
  const t = nt.bind(null, "dom"),
    e = ks(t, !0);
  S.document.addEventListener("click", e, !1), S.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(n => {
    var i, o;
    const s = (i = S[n]) == null ? void 0 : i.prototype;
    (o = s == null ? void 0 : s.hasOwnProperty) != null && o.call(s, "addEventListener") && (W(s, "addEventListener", function(c) {
      return function(a, u, f) {
        if (a === "click" || a == "keypress") try {
          const d = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
            p = d[a] = d[a] || {
              refCount: 0
            };
          if (!p.handler) {
            const l = ks(t);
            p.handler = l, c.call(this, a, l, f)
          }
          p.refCount++
        } catch {}
        return c.call(this, a, u, f)
      }
    }), W(s, "removeEventListener", function(c) {
      return function(a, u, f) {
        if (a === "click" || a == "keypress") try {
          const d = this.__sentry_instrumentation_handlers__ || {},
            p = d[a];
          p && (p.refCount--, p.refCount <= 0 && (c.call(this, a, p.handler, f), p.handler = void 0, delete d[a]), Object.keys(d).length === 0 && delete this.__sentry_instrumentation_handlers__)
        } catch {}
        return c.call(this, a, u, f)
      }
    }))
  })
}

function kf(t) {
  if (t.type !== ir) return !1;
  try {
    if (!t.target || t.target._sentryId !== or) return !1
  } catch {}
  return !0
}

function Pf(t, e) {
  return t !== "keypress" ? !1 : e != null && e.tagName ? !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) : !0
}

function ks(t, e = !1) {
  return n => {
    if (!n || n._sentryCaptured) return;
    const r = Nf(n);
    if (Pf(n.type, r)) return;
    Y(n, "_sentryCaptured", !0), r && !r._sentryId && Y(r, "_sentryId", rt());
    const s = n.type === "keypress" ? "input" : n.type;
    kf(n) || (t({
      event: n,
      name: s,
      global: e
    }), ir = n.type, or = r ? r._sentryId : void 0), clearTimeout(As), As = S.setTimeout(() => {
      or = void 0, ir = void 0
    }, Rf)
  }
}

function Nf(t) {
  try {
    return t.target
  } catch {
    return null
  }
}
let Ve;

function Lr(t) {
  const e = "history";
  Ot(e, t), Lt(e, Cf)
}

function Cf() {
  if (S.addEventListener("popstate", () => {
      const e = S.location.href,
        n = Ve;
      if (Ve = e, n === e) return;
      nt("history", {
        from: n,
        to: e
      })
    }), !nd()) return;

  function t(e) {
    return function(...n) {
      const r = n.length > 2 ? n[2] : void 0;
      if (r) {
        const s = Ve,
          i = Of(String(r));
        if (Ve = i, s === i) return e.apply(this, n);
        nt("history", {
          from: s,
          to: i
        })
      }
      return e.apply(this, n)
    }
  }
  W(S.history, "pushState", t), W(S.history, "replaceState", t)
}

function Of(t) {
  try {
    return new URL(t, S.location.origin).toString()
  } catch {
    return t
  }
}
const tn = {};

function Lf(t) {
  const e = tn[t];
  if (e) return e;
  let n = S[t];
  if (Qn(n)) return tn[t] = n.bind(S);
  const r = S.document;
  if (r && typeof r.createElement == "function") try {
    const s = r.createElement("iframe");
    s.hidden = !0, r.head.appendChild(s);
    const i = s.contentWindow;
    i != null && i[t] && (n = i[t]), r.head.removeChild(s)
  } catch (s) {
    Sn && g.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s)
  }
  return n && (tn[t] = n.bind(S))
}

function Ps(t) {
  tn[t] = void 0
}
const te = "__sentry_xhr_v3__";

function io(t) {
  Ot("xhr", t), Lt("xhr", xf)
}

function xf() {
  if (!S.XMLHttpRequest) return;
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, {
    apply(e, n, r) {
      const s = new Error,
        i = $() * 1e3,
        o = yt(r[0]) ? r[0].toUpperCase() : void 0,
        c = Df(r[1]);
      if (!o || !c) return e.apply(n, r);
      n[te] = {
        method: o,
        url: c,
        request_headers: {}
      }, o === "POST" && c.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
      const a = () => {
        const u = n[te];
        if (u && n.readyState === 4) {
          try {
            u.status_code = n.status
          } catch {}
          const f = {
            endTimestamp: $() * 1e3,
            startTimestamp: i,
            xhr: n,
            virtualError: s
          };
          nt("xhr", f)
        }
      };
      return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
        apply(u, f, d) {
          return a(), u.apply(f, d)
        }
      }) : n.addEventListener("readystatechange", a), n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(u, f, d) {
          const [p, l] = d, m = f[te];
          return m && yt(p) && yt(l) && (m.request_headers[p.toLowerCase()] = l), u.apply(f, d)
        }
      }), e.apply(n, r)
    }
  }), t.send = new Proxy(t.send, {
    apply(e, n, r) {
      const s = n[te];
      if (!s) return e.apply(n, r);
      r[0] !== void 0 && (s.body = r[0]);
      const i = {
        startTimestamp: $() * 1e3,
        xhr: n
      };
      return nt("xhr", i), e.apply(n, r)
    }
  })
}

function Df(t) {
  if (yt(t)) return t;
  try {
    return t.toString()
  } catch {}
}
const Un = [],
  en = new Map,
  Mf = 60;

function Ff() {
  if (bn() && X()) {
    const e = $f();
    return () => {
      e()
    }
  }
  return () => {}
}
const Ns = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press"
};

function $f() {
  return zd(Hf)
}
const Hf = ({
  metric: t
}) => {
  if (t.value == null) return;
  const e = x(t.value);
  if (e > Mf) return;
  const n = t.entries.find(m => m.duration === t.value && Ns[m.name]);
  if (!n) return;
  const {
    interactionId: r
  } = n, s = Ns[n.name], i = x(X() + n.startTime), o = J(), c = o ? U(o) : void 0, u = (r != null ? en.get(r) : void 0) || c, f = u ? I(u).description : A().getScopeData().transactionName, d = dt(n.target), p = {
    [D]: "auto.http.browser.inp",
    [Tt]: `ui.interaction.${s}`,
    [ue]: n.duration
  }, l = Or({
    name: d,
    transaction: f,
    attributes: p,
    startTime: i
  });
  l && (l.addEvent("inp", {
    [Pe]: "millisecond",
    [Ne]: t.value
  }), l.end(i + e))
};

function Bf() {
  const t = ({
    entries: e
  }) => {
    const n = J(),
      r = n && U(n);
    e.forEach(s => {
      if (!Qd(s) || !r) return;
      const i = s.interactionId;
      if (i != null && !en.has(i)) {
        if (Un.length > 10) {
          const o = Un.shift();
          en.delete(o)
        }
        Un.push(i), en.set(i, r)
      }
    })
  };
  oe("event", t), oe("first-input", t)
}

function Uf(t, e = Lf("fetch")) {
  let n = 0,
    r = 0;

  function s(i) {
    const o = i.body.length;
    n += o, r++;
    const c = {
      body: i.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: t.headers,
      keepalive: n <= 6e4 && r < 15,
      ...t.fetchOptions
    };
    if (!e) return Ps("fetch"), cn("No fetch implementation available");
    try {
      return e(t.url, c).then(a => (n -= o, r--, {
        statusCode: a.status,
        headers: {
          "x-sentry-rate-limits": a.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": a.headers.get("Retry-After")
        }
      }))
    } catch (a) {
      return Ps("fetch"), n -= o, r--, cn(a)
    }
  }
  return Su(t, s)
}
const jf = 30,
  qf = 50;

function ar(t, e, n, r) {
  const s = {
    filename: t,
    function: e === "<anonymous>" ? Gt : e,
    in_app: !0
  };
  return n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s
}
const Gf = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  Vf = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Wf = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  zf = /at (.+?) ?\(data:(.+?),/,
  Yf = t => {
    const e = t.match(zf);
    if (e) return {
      filename: `<data:${e[2]}>`,
      function: e[1]
    };
    const n = Gf.exec(t);
    if (n) {
      const [, s, i, o] = n;
      return ar(s, Gt, +i, +o)
    }
    const r = Vf.exec(t);
    if (r) {
      if (r[2] && r[2].indexOf("eval") === 0) {
        const c = Wf.exec(r[2]);
        c && (r[2] = c[1], r[3] = c[2], r[4] = c[3])
      }
      const [i, o] = oo(r[1] || Gt, r[2]);
      return ar(o, i, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
    }
  },
  Xf = [jf, Yf],
  Jf = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Kf = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Zf = t => {
    const e = Jf.exec(t);
    if (e) {
      if (e[3] && e[3].indexOf(" > eval") > -1) {
        const i = Kf.exec(e[3]);
        i && (e[1] = e[1] || "eval", e[3] = i[1], e[4] = i[2], e[5] = "")
      }
      let r = e[3],
        s = e[1] || Gt;
      return [s, r] = oo(s, r), ar(r, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
    }
  },
  Qf = [qf, Zf],
  tl = [Xf, Qf],
  el = Us(...tl),
  oo = (t, e) => {
    const n = t.indexOf("safari-extension") !== -1,
      r = t.indexOf("safari-web-extension") !== -1;
    return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Gt, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
  },
  st = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  We = 1024,
  nl = "Breadcrumbs",
  rl = ((t = {}) => {
    const e = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...t
    };
    return {
      name: nl,
      setup(n) {
        e.console && Uu(al(n)), e.dom && wf(ol(n, e.dom)), e.xhr && io(cl(n)), e.fetch && Bi(ul(n)), e.history && Lr(dl(n)), e.sentry && n.on("beforeSendEvent", il(n))
      }
    }
  }),
  sl = rl;

function il(t) {
  return function(n) {
    k() === t && Wt({
      category: `sentry.${n.type==="transaction"?"transaction":"event"}`,
      event_id: n.event_id,
      level: n.level,
      message: Ht(n)
    }, {
      event: n
    })
  }
}

function ol(t, e) {
  return function(r) {
    if (k() !== t) return;
    let s, i, o = typeof e == "object" ? e.serializeAttribute : void 0,
      c = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
    c && c > We && (st && g.warn(`\`dom.maxStringLength\` cannot exceed ${We}, but a value of ${c} was configured. Sentry will use ${We} instead.`), c = We), typeof o == "string" && (o = [o]);
    try {
      const u = r.event,
        f = fl(u) ? u.target : u;
      s = dt(f, {
        keyAttrs: o,
        maxStringLength: c
      }), i = Ys(f)
    } catch {
      s = "<unknown>"
    }
    if (s.length === 0) return;
    const a = {
      category: `ui.${r.name}`,
      message: s
    };
    i && (a.data = {
      "ui.component_name": i
    }), Wt(a, {
      event: r.event,
      name: r.name,
      global: r.global
    })
  }
}

function al(t) {
  return function(n) {
    if (k() !== t) return;
    const r = {
      category: "console",
      data: {
        arguments: n.args,
        logger: "console"
      },
      level: qu(n.level),
      message: jr(n.args, " ")
    };
    if (n.level === "assert")
      if (n.args[0] === !1) r.message = `Assertion failed: ${jr(n.args.slice(1)," ")||"console.assert"}`, r.data.arguments = n.args.slice(1);
      else return;
    Wt(r, {
      input: n.args,
      level: n.level
    })
  }
}

function cl(t) {
  return function(n) {
    if (k() !== t) return;
    const {
      startTimestamp: r,
      endTimestamp: s
    } = n, i = n.xhr[te];
    if (!r || !s || !i) return;
    const {
      method: o,
      url: c,
      status_code: a,
      body: u
    } = i, f = {
      method: o,
      url: c,
      status_code: a
    }, d = {
      xhr: n.xhr,
      input: u,
      startTimestamp: r,
      endTimestamp: s
    }, p = {
      category: "xhr",
      data: f,
      type: "http",
      level: Hi(a)
    };
    t.emit("beforeOutgoingRequestBreadcrumb", p, d), Wt(p, d)
  }
}

function ul(t) {
  return function(n) {
    if (k() !== t) return;
    const {
      startTimestamp: r,
      endTimestamp: s
    } = n;
    if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
      if (n.fetchData.method, n.fetchData.url, n.error) {
        const i = n.fetchData,
          o = {
            data: n.error,
            input: n.args,
            startTimestamp: r,
            endTimestamp: s
          },
          c = {
            category: "fetch",
            data: i,
            level: "error",
            type: "http"
          };
        t.emit("beforeOutgoingRequestBreadcrumb", c, o), Wt(c, o)
      } else {
        const i = n.response,
          o = {
            ...n.fetchData,
            status_code: i == null ? void 0 : i.status
          };
        n.fetchData.request_body_size, n.fetchData.response_body_size, i == null || i.status;
        const c = {
            input: n.args,
            response: i,
            startTimestamp: r,
            endTimestamp: s
          },
          a = {
            category: "fetch",
            data: o,
            type: "http",
            level: Hi(o.status_code)
          };
        t.emit("beforeOutgoingRequestBreadcrumb", a, c), Wt(a, c)
      }
  }
}

function dl(t) {
  return function(n) {
    if (k() !== t) return;
    let r = n.from,
      s = n.to;
    const i = qt(E.location.href);
    let o = r ? qt(r) : void 0;
    const c = qt(s);
    o != null && o.path || (o = i), i.protocol === c.protocol && i.host === c.host && (s = c.relative), i.protocol === o.protocol && i.host === o.host && (r = o.relative), Wt({
      category: "navigation",
      data: {
        from: r,
        to: s
      }
    })
  }
}

function fl(t) {
  return !!t && !!t.target
}
const ll = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
  pl = "BrowserApiErrors",
  ml = ((t = {}) => {
    const e = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      unregisterOriginalCallbacks: !1,
      ...t
    };
    return {
      name: pl,
      setupOnce() {
        e.setTimeout && W(E, "setTimeout", Cs), e.setInterval && W(E, "setInterval", Cs), e.requestAnimationFrame && W(E, "requestAnimationFrame", hl), e.XMLHttpRequest && "XMLHttpRequest" in E && W(XMLHttpRequest.prototype, "send", _l);
        const n = e.eventTarget;
        n && (Array.isArray(n) ? n : ll).forEach(s => Sl(s, e))
      }
    }
  }),
  gl = ml;

function Cs(t) {
  return function(...e) {
    const n = e[0];
    return e[0] = ie(n, {
      mechanism: {
        handled: !1,
        type: `auto.browser.browserapierrors.${Et(t)}`
      }
    }), t.apply(this, e)
  }
}

function hl(t) {
  return function(e) {
    return t.apply(this, [ie(e, {
      mechanism: {
        data: {
          handler: Et(t)
        },
        handled: !1,
        type: "auto.browser.browserapierrors.requestAnimationFrame"
      }
    })])
  }
}

function _l(t) {
  return function(...e) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
      s in n && typeof n[s] == "function" && W(n, s, function(i) {
        const o = {
            mechanism: {
              data: {
                handler: Et(i)
              },
              handled: !1,
              type: `auto.browser.browserapierrors.xhr.${s}`
            }
          },
          c = gr(i);
        return c && (o.mechanism.data.handler = Et(c)), ie(i, o)
      })
    }), t.apply(this, e)
  }
}

function Sl(t, e) {
  var s, i;
  const r = (s = E[t]) == null ? void 0 : s.prototype;
  (i = r == null ? void 0 : r.hasOwnProperty) != null && i.call(r, "addEventListener") && (W(r, "addEventListener", function(o) {
    return function(c, a, u) {
      try {
        yl(a) && (a.handleEvent = ie(a.handleEvent, {
          mechanism: {
            data: {
              handler: Et(a),
              target: t
            },
            handled: !1,
            type: "auto.browser.browserapierrors.handleEvent"
          }
        }))
      } catch {}
      return e.unregisterOriginalCallbacks && El(this, c, a), o.apply(this, [c, ie(a, {
        mechanism: {
          data: {
            handler: Et(a),
            target: t
          },
          handled: !1,
          type: "auto.browser.browserapierrors.addEventListener"
        }
      }), u])
    }
  }), W(r, "removeEventListener", function(o) {
    return function(c, a, u) {
      try {
        const f = a.__sentry_wrapped__;
        f && o.call(this, c, f, u)
      } catch {}
      return o.call(this, c, a, u)
    }
  }))
}

function yl(t) {
  return typeof t.handleEvent == "function"
}

function El(t, e, n) {
  t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function" && t.removeEventListener(e, n)
}
const bl = () => ({
    name: "BrowserSession",
    setupOnce() {
      if (typeof E.document > "u") {
        st && g.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
        return
      }
      ds({
        ignoreDuration: !0
      }), fs(), Lr(({
        from: t,
        to: e
      }) => {
        t !== void 0 && t !== e && (ds({
          ignoreDuration: !0
        }), fs())
      })
    }
  }),
  Tl = "GlobalHandlers",
  vl = ((t = {}) => {
    const e = {
      onerror: !0,
      onunhandledrejection: !0,
      ...t
    };
    return {
      name: Tl,
      setupOnce() {
        Error.stackTraceLimit = 50
      },
      setup(n) {
        e.onerror && (Rl(n), Os("onerror")), e.onunhandledrejection && (wl(n), Os("onunhandledrejection"))
      }
    }
  }),
  Il = vl;

function Rl(t) {
  js(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = ao();
    if (k() !== t || ji()) return;
    const {
      msg: s,
      url: i,
      line: o,
      column: c,
      error: a
    } = e, u = Pl(Ar(n, a || s, void 0, r, !1), i, o, c);
    u.level = "error", Ii(u, {
      originalException: a,
      mechanism: {
        handled: !1,
        type: "auto.browser.global_handlers.onerror"
      }
    })
  })
}

function wl(t) {
  qs(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = ao();
    if (k() !== t || ji()) return;
    const s = Al(e),
      i = ye(s) ? kl(s) : Ar(n, s, void 0, r, !0);
    i.level = "error", Ii(i, {
      originalException: s,
      mechanism: {
        handled: !1,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    })
  })
}

function Al(t) {
  if (ye(t)) return t;
  try {
    if ("reason" in t) return t.reason;
    if ("detail" in t && "reason" in t.detail) return t.detail.reason
  } catch {}
  return t
}

function kl(t) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(t)}`
      }]
    }
  }
}

function Pl(t, e, n, r) {
  const s = t.exception = t.exception || {},
    i = s.values = s.values || [],
    o = i[0] = i[0] || {},
    c = o.stacktrace = o.stacktrace || {},
    a = c.frames = c.frames || [],
    u = r,
    f = n,
    d = Nl(e) ?? we();
  return a.length === 0 && a.push({
    colno: u,
    filename: d,
    function: Gt,
    in_app: !0,
    lineno: f
  }), t
}

function Os(t) {
  st && g.log(`Global Handler attached: ${t}`)
}

function ao() {
  const t = k();
  return (t == null ? void 0 : t.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: !1
  }
}

function Nl(t) {
  if (!(!yt(t) || t.length === 0)) {
    if (t.startsWith("data:")) {
      const e = t.match(/^data:([^;]+)/),
        n = e ? e[1] : "text/javascript",
        r = t.includes("base64,");
      return `<data:${n}${r?",base64":""}>`
    }
    return t.slice(0, 1024)
  }
}
const Cl = () => ({
    name: "HttpContext",
    preprocessEvent(t) {
      var r;
      if (!E.navigator && !E.location && !E.document) return;
      const e = Ir(),
        n = {
          ...e.headers,
          ...(r = t.request) == null ? void 0 : r.headers
        };
      t.request = {
        ...e,
        ...t.request,
        headers: n
      }
    }
  }),
  Ol = "cause",
  Ll = 5,
  xl = "LinkedErrors",
  Dl = ((t = {}) => {
    const e = t.limit || Ll,
      n = t.key || Ol;
    return {
      name: xl,
      preprocessEvent(r, s, i) {
        const o = i.getOptions();
        Bu(Rr, o.stackParser, n, e, r, s)
      }
    }
  }),
  Ml = Dl;

function Fl() {
  return $l() ? (st && Yt(() => {
    console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
  }), !0) : !1
}

function $l() {
  var i;
  if (typeof E.window > "u") return !1;
  const t = E;
  if (t.nw) return !1;
  const e = t.chrome || t.browser;
  if (!((i = e == null ? void 0 : e.runtime) != null && i.id)) return !1;
  const n = we(),
    r = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return !(E === E.top && r.some(o => n.startsWith(`${o}://`)))
}

function cr(t) {
  return [Ou(), ku(), gl(), sl(), Il(), Ml(), Wu(), Cl(), bl()]
}

function Hl(t = {}) {
  const e = !t.skipBrowserExtensionCheck && Fl(),
    n = {
      ...t,
      enabled: e ? !1 : t.enabled,
      stackParser: Yo(t.stackParser || el),
      integrations: Zc({
        integrations: t.integrations,
        defaultIntegrations: t.defaultIntegrations == null ? cr() : t.defaultIntegrations
      }),
      transport: t.transport || Uf
    };
  return uu(Id, n)
}

function ut(t = 0) {
  return ((X() || performance.timeOrigin) + t) / 1e3
}

function Bl(t) {
  const e = [];
  if (t.nextHopProtocol != null) {
    const {
      name: n,
      version: r
    } = no(t.nextHopProtocol);
    e.push(["network.protocol.version", r], ["network.protocol.name", n])
  }
  return X() ? [...e, ["http.request.redirect_start", ut(t.redirectStart)],
    ["http.request.fetch_start", ut(t.fetchStart)],
    ["http.request.domain_lookup_start", ut(t.domainLookupStart)],
    ["http.request.domain_lookup_end", ut(t.domainLookupEnd)],
    ["http.request.connect_start", ut(t.connectStart)],
    ["http.request.secure_connection_start", ut(t.secureConnectionStart)],
    ["http.request.connection_end", ut(t.connectEnd)],
    ["http.request.request_start", ut(t.requestStart)],
    ["http.request.response_start", ut(t.responseStart)],
    ["http.request.response_end", ut(t.responseEnd)]
  ] : e
}
const Ls = new WeakMap,
  jn = new Map,
  co = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1
  };

function Ul(t, e) {
  const {
    traceFetch: n,
    traceXHR: r,
    trackFetchStreamPerformance: s,
    shouldCreateSpanForRequest: i,
    enableHTTPTimings: o,
    tracePropagationTargets: c,
    onRequestSpanStart: a
  } = {
    ...co,
    ...e
  }, u = typeof i == "function" ? i : l => !0, f = l => ql(l, c), d = {}, p = t.getOptions().propagateTraceparent;
  n && (t.addEventProcessor(l => (l.type === "transaction" && l.spans && l.spans.forEach(m => {
    if (m.op === "http.client") {
      const h = jn.get(m.span_id);
      h && (m.timestamp = h / 1e3, jn.delete(m.span_id))
    }
  }), l)), s && id(l => {
    if (l.response) {
      const m = Ls.get(l.response);
      m && l.endTimestamp && jn.set(m, l.endTimestamp)
    }
  }), Bi(l => {
    const m = Ju(l, u, f, d, {
      propagateTraceparent: p
    });
    if (l.response && l.fetchData.__span && Ls.set(l.response, l.fetchData.__span), m) {
      const h = uo(l.fetchData.url),
        b = h ? qt(h).host : void 0;
      m.setAttributes({
        "http.url": h,
        "server.address": b
      }), o && xs(m), a == null || a(m, {
        headers: l.headers
      })
    }
  })), r && io(l => {
    var h;
    const m = Gl(l, u, f, d, p);
    if (m) {
      o && xs(m);
      let b;
      try {
        b = new Headers((h = l.xhr.__sentry_xhr_v3__) == null ? void 0 : h.request_headers)
      } catch {}
      a == null || a(m, {
        headers: b
      })
    }
  })
}

function jl(t) {
  return t.entryType === "resource" && "initiatorType" in t && typeof t.nextHopProtocol == "string" && (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest")
}

function xs(t) {
  const {
    url: e
  } = I(t).data;
  if (!e || typeof e != "string") return;
  const n = oe("resource", ({
    entries: r
  }) => {
    r.forEach(s => {
      jl(s) && s.name.endsWith(e) && (Bl(s).forEach(o => t.setAttribute(...o)), setTimeout(n))
    })
  })
}

function ql(t, e) {
  const n = we();
  if (n) {
    let r, s;
    try {
      r = new URL(t, n), s = new URL(n).origin
    } catch {
      return !1
    }
    const i = r.origin === s;
    return e ? Rt(r.toString(), e) || i && Rt(r.pathname, e) : i
  } else {
    const r = !!t.match(/^\/(?!\/)/);
    return e ? Rt(t, e) : r
  }
}

function Gl(t, e, n, r, s) {
  const i = t.xhr,
    o = i == null ? void 0 : i[te];
  if (!i || i.__sentry_own_request__ || !o) return;
  const {
    url: c,
    method: a
  } = o, u = At() && e(c);
  if (t.endTimestamp && u) {
    const b = i.__sentry_xhr_span_id__;
    if (!b) return;
    const P = r[b];
    P && o.status_code !== void 0 && (ei(P, o.status_code), P.end(), delete r[b]);
    return
  }
  const f = uo(c),
    d = qt(f || c),
    p = bu(c),
    l = !!J(),
    m = u && l ? Zt({
      name: `${a} ${p}`,
      attributes: {
        url: c,
        type: "xhr",
        "http.method": a,
        "http.url": f,
        "server.address": d == null ? void 0 : d.host,
        [D]: "auto.http.browser",
        [Tt]: "http.client",
        ...(d == null ? void 0 : d.search) && {
          "http.query": d == null ? void 0 : d.search
        },
        ...(d == null ? void 0 : d.hash) && {
          "http.fragment": d == null ? void 0 : d.hash
        }
      }
    }) : new Pt;
  i.__sentry_xhr_span_id__ = m.spanContext().spanId, r[i.__sentry_xhr_span_id__] = m, n(c) && Vl(i, At() && l ? m : void 0, s);
  const h = k();
  return h && h.emit("beforeOutgoingRequestSpan", m, t), m
}

function Vl(t, e, n) {
  const {
    "sentry-trace": r,
    baggage: s,
    traceparent: i
  } = Mi({
    span: e,
    propagateTraceparent: n
  });
  r && Wl(t, r, s, i)
}

function Wl(t, e, n, r) {
  var i;
  const s = (i = t.__sentry_xhr_v3__) == null ? void 0 : i.request_headers;
  if (!(s != null && s["sentry-trace"] || !t.setRequestHeader)) try {
    if (t.setRequestHeader("sentry-trace", e), r && !(s != null && s.traceparent) && t.setRequestHeader("traceparent", r), n) {
      const o = s == null ? void 0 : s.baggage;
      (!o || !zl(o)) && t.setRequestHeader("baggage", n)
    }
  } catch {}
}

function zl(t) {
  return t.split(",").some(e => e.trim().startsWith("sentry-"))
}

function uo(t) {
  try {
    return new URL(t, E.location.origin).href
  } catch {
    return
  }
}

function Yl() {
  E.document ? E.document.addEventListener("visibilitychange", () => {
    const t = J();
    if (!t) return;
    const e = U(t);
    if (E.document.hidden && e) {
      const n = "cancelled",
        {
          op: r,
          status: s
        } = I(e);
      st && g.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`), s || e.setStatus({
        code: F,
        message: n
      }), e.setAttribute("sentry.cancellation_reason", "document.hidden"), e.end()
    }
  }) : st && g.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
const Xl = 3600,
  fo = "sentry_previous_trace",
  Jl = "sentry.previous_trace";

function Kl(t, {
  linkPreviousTrace: e,
  consistentTraceSampling: n
}) {
  const r = e === "session-storage";
  let s = r ? tp() : void 0;
  t.on("spanStart", o => {
    if (U(o) !== o) return;
    const c = A().getPropagationContext();
    s = Zl(s, o, c), r && Ql(s)
  });
  let i = !0;
  n && t.on("beforeSampling", o => {
    if (!s) return;
    const c = A(),
      a = c.getPropagationContext();
    if (i && a.parentSpanId) {
      i = !1;
      return
    }
    c.setPropagationContext({
      ...a,
      dsc: {
        ...a.dsc,
        sample_rate: String(s.sampleRate),
        sampled: String(ur(s.spanContext))
      },
      sampleRand: s.sampleRand
    }), o.parentSampled = ur(s.spanContext), o.parentSampleRate = s.sampleRate, o.spanAttributes = {
      ...o.spanAttributes,
      [Qs]: s.sampleRate
    }
  })
}

function Zl(t, e, n) {
  const r = I(e);

  function s() {
    var c, a;
    try {
      return Number((c = n.dsc) == null ? void 0 : c.sample_rate) ?? Number((a = r.data) == null ? void 0 : a[hr])
    } catch {
      return 0
    }
  }
  const i = {
    spanContext: e.spanContext(),
    startTimestamp: r.start_timestamp,
    sampleRate: s(),
    sampleRand: n.sampleRand
  };
  if (!t) return i;
  const o = t.spanContext;
  return o.traceId === r.trace_id ? t : (Date.now() / 1e3 - t.startTimestamp <= Xl && (st && g.log(`Adding previous_trace ${o} link to span ${{op:r.op,...e.spanContext()}}`), e.addLink({
    context: o,
    attributes: {
      [ba]: "previous_trace"
    }
  }), e.setAttribute(Jl, `${o.traceId}-${o.spanId}-${ur(o)?1:0}`)), i)
}

function Ql(t) {
  try {
    E.sessionStorage.setItem(fo, JSON.stringify(t))
  } catch (e) {
    st && g.warn("Could not store previous trace in sessionStorage", e)
  }
}

function tp() {
  var t;
  try {
    const e = (t = E.sessionStorage) == null ? void 0 : t.getItem(fo);
    return JSON.parse(e)
  } catch {
    return
  }
}

function ur(t) {
  return t.traceFlags === 1
}
const ep = "BrowserTracing",
  np = {
    ...Ze,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    enableElementTiming: !0,
    ignoreResourceSpans: [],
    ignorePerformanceApiSpans: [],
    detectRedirects: !0,
    linkPreviousTrace: "in-memory",
    consistentTraceSampling: !1,
    _experiments: {},
    ...co
  },
  rp = ((t = {}) => {
    const e = {
        name: void 0,
        source: void 0
      },
      n = E.document,
      {
        enableInp: r,
        enableElementTiming: s,
        enableLongTask: i,
        enableLongAnimationFrame: o,
        _experiments: {
          enableInteractions: c,
          enableStandaloneClsSpans: a,
          enableStandaloneLcpSpans: u
        },
        beforeStartSpan: f,
        idleTimeout: d,
        finalTimeout: p,
        childSpanTimeout: l,
        markBackgroundSpan: m,
        traceFetch: h,
        traceXHR: b,
        trackFetchStreamPerformance: P,
        shouldCreateSpanForRequest: H,
        enableHTTPTimings: j,
        ignoreResourceSpans: lt,
        ignorePerformanceApiSpans: K,
        instrumentPageLoad: y,
        instrumentNavigation: w,
        detectRedirects: xt,
        linkPreviousTrace: vt,
        consistentTraceSampling: It,
        onRequestSpanStart: pt
      } = {
        ...np,
        ...t
      };
    let L, B;

    function Z(T, C, v = !0) {
      const O = C.op === "pageload",
        N = C.name,
        Q = f ? f(C) : C,
        at = Q.attributes || {};
      if (N !== Q.name && (at[z] = "custom", Q.attributes = at), !v) {
        const Dt = Xt();
        Zt({
          ...Q,
          startTime: Dt
        }).end(Dt);
        return
      }
      e.name = Q.name, e.source = at[z];
      const mt = Ti(Q, {
        idleTimeout: d,
        finalTimeout: p,
        childSpanTimeout: l,
        disableAutoFinish: O,
        beforeSpanEnd: Dt => {
          L == null || L(), pf(Dt, {
            recordClsOnPageloadSpan: !a,
            recordLcpOnPageloadSpan: !u,
            ignoreResourceSpans: lt,
            ignorePerformanceApiSpans: K
          }), Ms(T, void 0);
          const gt = A(),
            pe = gt.getPropagationContext();
          gt.setPropagationContext({
            ...pe,
            traceId: mt.spanContext().traceId,
            sampled: Kt(mt),
            dsc: kt(Dt)
          })
        }
      });
      Ms(T, mt);

      function Me() {
        n && ["interactive", "complete"].includes(n.readyState) && T.emit("idleSpanEnableAutoFinish", mt)
      }
      O && n && (n.addEventListener("readystatechange", () => {
        Me()
      }), Me())
    }
    return {
      name: ep,
      setup(T) {
        if (Wa(), L = of({
            recordClsStandaloneSpans: a || !1,
            recordLcpStandaloneSpans: u || !1,
            client: T
          }), r && Ff(), s && vf(), o && R.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? cf() : i && af(), c && uf(), xt && n) {
          const v = () => {
            B = $()
          };
          addEventListener("click", v, {
            capture: !0
          }), addEventListener("keydown", v, {
            capture: !0,
            passive: !0
          })
        }

        function C() {
          const v = ve(T);
          v && !I(v).timestamp && (st && g.log(`[Tracing] Finishing current active span with op: ${I(v).op}`), v.setAttribute(on, "cancelled"), v.end())
        }
        T.on("startNavigationSpan", (v, O) => {
          if (k() !== T) return;
          if (O != null && O.isRedirect) {
            st && g.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), Z(T, {
              op: "navigation.redirect",
              ...v
            }, !1);
            return
          }
          B = void 0, C(), Jt().setPropagationContext({
            traceId: wt(),
            sampleRand: Math.random()
          });
          const N = A();
          N.setPropagationContext({
            traceId: wt(),
            sampleRand: Math.random()
          }), N.setSDKProcessingMetadata({
            normalizedRequest: void 0
          }), Z(T, {
            op: "navigation",
            ...v
          })
        }), T.on("startPageLoadSpan", (v, O = {}) => {
          if (k() !== T) return;
          C();
          const N = O.sentryTrace || Ds("sentry-trace"),
            Q = O.baggage || Ds("baggage"),
            at = $a(N, Q),
            mt = A();
          mt.setPropagationContext(at), mt.setSDKProcessingMetadata({
            normalizedRequest: Ir()
          }), Z(T, {
            op: "pageload",
            ...v
          })
        })
      },
      afterAllSetup(T) {
        let C = we();
        if (vt !== "off" && Kl(T, {
            linkPreviousTrace: vt,
            consistentTraceSampling: It
          }), E.location) {
          if (y) {
            const v = X();
            lo(T, {
              name: E.location.pathname,
              startTime: v ? v / 1e3 : void 0,
              attributes: {
                [z]: "url",
                [D]: "auto.pageload.browser"
              }
            })
          }
          w && Lr(({
            to: v,
            from: O
          }) => {
            if (O === void 0 && (C == null ? void 0 : C.indexOf(v)) !== -1) {
              C = void 0;
              return
            }
            C = void 0;
            const N = Di(v),
              Q = ve(T),
              at = Q && xt && ip(Q, B);
            po(T, {
              name: (N == null ? void 0 : N.pathname) || E.location.pathname,
              attributes: {
                [z]: "url",
                [D]: "auto.navigation.browser"
              }
            }, {
              url: v,
              isRedirect: at
            })
          })
        }
        m && Yl(), c && sp(T, d, p, l, e), r && Bf(), Ul(T, {
          traceFetch: h,
          traceXHR: b,
          trackFetchStreamPerformance: P,
          tracePropagationTargets: T.getOptions().tracePropagationTargets,
          shouldCreateSpanForRequest: H,
          enableHTTPTimings: j,
          onRequestSpanStart: pt
        })
      }
    }
  });

function lo(t, e, n) {
  t.emit("startPageLoadSpan", e, n), A().setTransactionName(e.name);
  const r = ve(t);
  return r && t.emit("afterStartPageLoadSpan", r), r
}

function po(t, e, n) {
  const {
    url: r,
    isRedirect: s
  } = n || {};
  t.emit("beforeStartNavigationSpan", e, {
    isRedirect: s
  }), t.emit("startNavigationSpan", e, {
    isRedirect: s
  });
  const i = A();
  return i.setTransactionName(e.name), r && !s && i.setSDKProcessingMetadata({
    normalizedRequest: {
      ...Ir(),
      url: r
    }
  }), ve(t)
}

function Ds(t) {
  const e = E.document,
    n = e == null ? void 0 : e.querySelector(`meta[name=${t}]`);
  return (n == null ? void 0 : n.getAttribute("content")) || void 0
}

function sp(t, e, n, r, s) {
  const i = E.document;
  let o;
  const c = () => {
    const a = "ui.action.click",
      u = ve(t);
    if (u) {
      const f = I(u).op;
      if (["navigation", "pageload"].includes(f)) {
        st && g.warn(`[Tracing] Did not create ${a} span because a pageload or navigation span is in progress.`);
        return
      }
    }
    if (o && (o.setAttribute(on, "interactionInterrupted"), o.end(), o = void 0), !s.name) {
      st && g.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`);
      return
    }
    o = Ti({
      name: s.name,
      op: a,
      attributes: {
        [z]: s.source || "url"
      }
    }, {
      idleTimeout: e,
      finalTimeout: n,
      childSpanTimeout: r
    })
  };
  i && addEventListener("click", c, {
    capture: !0
  })
}
const mo = "_sentry_idleSpan";

function ve(t) {
  return t[mo]
}

function Ms(t, e) {
  Y(t, mo, e)
}
const Fs = 1.5;

function ip(t, e) {
  const n = I(t),
    r = Xt(),
    s = n.start_timestamp;
  return !(r - s > Fs || e && r - e <= Fs)
}

function op(t) {
  const e = {
    ...t
  };
  return vr(e, "svelte"), Hl(e)
}
const go = () => {
    const t = yo;
    return {
      page: {
        subscribe: t.page.subscribe
      },
      navigating: {
        subscribe: t.navigating.subscribe
      },
      updated: t.updated
    }
  },
  ap = {
    subscribe(t) {
      return go().page.subscribe(t)
    }
  },
  cp = {
    subscribe(t) {
      return go().navigating.subscribe(t)
    }
  };

function up(t = {}) {
  const e = {
    ...rp({
      ...t,
      instrumentNavigation: !1,
      instrumentPageLoad: !1
    })
  };
  return {
    ...e,
    afterAllSetup: n => {
      e.afterAllSetup(n), t.instrumentPageLoad !== !1 && dp(n), t.instrumentNavigation !== !1 && fp(n)
    }
  }
}

function dp(t) {
  var r;
  const e = (r = E.location) == null ? void 0 : r.pathname,
    n = lo(t, {
      name: e,
      op: "pageload",
      attributes: {
        [D]: "auto.pageload.sveltekit",
        [z]: "url"
      }
    });
  n && ap.subscribe(s => {
    var o;
    if (!s) return;
    const i = (o = s.route) == null ? void 0 : o.id;
    i && (n.updateName(i), n.setAttribute(z, "route"), A().setTransactionName(i))
  })
}

function fp(t) {
  let e;
  cp.subscribe(n => {
    var f;
    if (!n) {
      e && (e.end(), e = void 0);
      return
    }
    const r = n.from,
      s = n.to,
      i = (r == null ? void 0 : r.url.pathname) || ((f = E.location) == null ? void 0 : f.pathname),
      o = s == null ? void 0 : s.url.pathname;
    if (i === o) return;
    const c = r == null ? void 0 : r.route.id,
      a = s == null ? void 0 : s.route.id;
    e && e.end();
    const u = {
      "sentry.sveltekit.navigation.type": n.type,
      "sentry.sveltekit.navigation.from": c || void 0,
      "sentry.sveltekit.navigation.to": a || void 0
    };
    po(t, {
      name: a || o || "unknown",
      op: "navigation",
      attributes: {
        [D]: "auto.navigation.sveltekit",
        [z]: a ? "route" : "url",
        ...u
      }
    }), e = Zt({
      op: "ui.sveltekit.routing",
      name: "SvelteKit Route Change",
      attributes: {
        [D]: "auto.ui.sveltekit",
        ...u
      },
      onlyIfParent: !0
    })
  })
}

function lp(t) {
  const e = {
    defaultIntegrations: pp(),
    ...t
  };
  vr(e, "sveltekit", ["sveltekit", "svelte"]);
  const n = mp(),
    r = op(e);
  return n && gp(n), r
}

function pp(t) {
  return typeof __SENTRY_TRACING__ > "u" || __SENTRY_TRACING__ ? [...cr(), up()] : cr()
}

function mp() {
  const t = E,
    e = t.fetch;
  if (t._sentryFetchProxy && e) return t.fetch = t._sentryFetchProxy, e
}

function gp(t) {
  const e = E;
  e._sentryFetchProxy = e.fetch, e.fetch = t
}

function hp({
  error: t
}) {
  Yt(() => {
    console.error(t)
  })
}

function _p(t) {
  const e = hp;
  return n => (Sp(n) || vi(n.error, {
    mechanism: {
      type: "sveltekit",
      handled: !1
    }
  }), e(n))
}

function Sp(t) {
  const {
    status: e
  } = t;
  return e ? e >= 400 && e < 500 : !1
}
lp({
  dsn: "https://ef9fc09cd53942366f18dbc146ea7350@o4509998160805888.ingest.us.sentry.io/4509998167687168",
  tracesSampleRate: 1,
  enableLogs: !0,
  environment: "prod"
});
const yp = _p(),
  Mp = {};
var Ep = $s('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),
  bp = $s("<!> <!>", 1);

function Tp(t, e) {
  Io(e, !0);
  let n = ge(e, "components", 23, () => []),
    r = ge(e, "data_0", 3, null),
    s = ge(e, "data_1", 3, null),
    i = ge(e, "data_2", 3, null),
    o = ge(e, "data_3", 3, null);
  Ro(() => e.stores.page.set(e.page)), wo(() => {
    e.stores, e.page, e.constructors, n(), e.form, r(), s(), i(), o(), e.stores.page.notify()
  });
  let c = An(!1),
    a = An(!1),
    u = An(null);
  $o(() => {
    const P = e.stores.page.subscribe(() => {
      V(c) && (ze(a, !0), Ao().then(() => {
        ze(u, document.title || "untitled page", !0)
      }))
    });
    return ze(c, !0), P
  });
  const f = Mt(() => e.constructors[3]);
  var d = bp(),
    p = ct(d);
  {
    var l = P => {
        const H = Mt(() => e.constructors[0]);
        var j = ht(),
          lt = ct(j);
        Ft(lt, () => V(H), (K, y) => {
          $t(y(K, {
            get data() {
              return r()
            },
            get form() {
              return e.form
            },
            get params() {
              return e.page.params
            },
            children: (w, xt) => {
              var vt = ht(),
                It = ct(vt);
              {
                var pt = B => {
                    const Z = Mt(() => e.constructors[1]);
                    var T = ht(),
                      C = ct(T);
                    Ft(C, () => V(Z), (v, O) => {
                      $t(O(v, {
                        get data() {
                          return s()
                        },
                        get form() {
                          return e.form
                        },
                        get params() {
                          return e.page.params
                        },
                        children: (N, Q) => {
                          var at = ht(),
                            mt = ct(at);
                          {
                            var Me = gt => {
                                const pe = Mt(() => e.constructors[2]);
                                var me = ht(),
                                  Tn = ct(me);
                                Ft(Tn, () => V(pe), (vn, In) => {
                                  $t(In(vn, {
                                    get data() {
                                      return i()
                                    },
                                    get form() {
                                      return e.form
                                    },
                                    get params() {
                                      return e.page.params
                                    },
                                    children: (it, Rp) => {
                                      var xr = ht(),
                                        ho = ct(xr);
                                      Ft(ho, () => V(f), (_o, So) => {
                                        $t(So(_o, {
                                          get data() {
                                            return o()
                                          },
                                          get form() {
                                            return e.form
                                          },
                                          get params() {
                                            return e.page.params
                                          }
                                        }), Fe => n()[3] = Fe, () => {
                                          var Fe;
                                          return (Fe = n()) == null ? void 0 : Fe[3]
                                        })
                                      }), tt(it, xr)
                                    },
                                    $$slots: {
                                      default: !0
                                    }
                                  }), it => n()[2] = it, () => {
                                    var it;
                                    return (it = n()) == null ? void 0 : it[2]
                                  })
                                }), tt(gt, me)
                              },
                              Dt = gt => {
                                const pe = Mt(() => e.constructors[2]);
                                var me = ht(),
                                  Tn = ct(me);
                                Ft(Tn, () => V(pe), (vn, In) => {
                                  $t(In(vn, {
                                    get data() {
                                      return i()
                                    },
                                    get form() {
                                      return e.form
                                    },
                                    get params() {
                                      return e.page.params
                                    }
                                  }), it => n()[2] = it, () => {
                                    var it;
                                    return (it = n()) == null ? void 0 : it[2]
                                  })
                                }), tt(gt, me)
                              };
                            he(mt, gt => {
                              e.constructors[3] ? gt(Me) : gt(Dt, !1)
                            })
                          }
                          tt(N, at)
                        },
                        $$slots: {
                          default: !0
                        }
                      }), N => n()[1] = N, () => {
                        var N;
                        return (N = n()) == null ? void 0 : N[1]
                      })
                    }), tt(B, T)
                  },
                  L = B => {
                    const Z = Mt(() => e.constructors[1]);
                    var T = ht(),
                      C = ct(T);
                    Ft(C, () => V(Z), (v, O) => {
                      $t(O(v, {
                        get data() {
                          return s()
                        },
                        get form() {
                          return e.form
                        },
                        get params() {
                          return e.page.params
                        }
                      }), N => n()[1] = N, () => {
                        var N;
                        return (N = n()) == null ? void 0 : N[1]
                      })
                    }), tt(B, T)
                  };
                he(It, B => {
                  e.constructors[2] ? B(pt) : B(L, !1)
                })
              }
              tt(w, vt)
            },
            $$slots: {
              default: !0
            }
          }), w => n()[0] = w, () => {
            var w;
            return (w = n()) == null ? void 0 : w[0]
          })
        }), tt(P, j)
      },
      m = P => {
        const H = Mt(() => e.constructors[0]);
        var j = ht(),
          lt = ct(j);
        Ft(lt, () => V(H), (K, y) => {
          $t(y(K, {
            get data() {
              return r()
            },
            get form() {
              return e.form
            },
            get params() {
              return e.page.params
            }
          }), w => n()[0] = w, () => {
            var w;
            return (w = n()) == null ? void 0 : w[0]
          })
        }), tt(P, j)
      };
    he(p, P => {
      e.constructors[1] ? P(l) : P(m, !1)
    })
  }
  var h = ko(p, 2);
  {
    var b = P => {
      var H = Ep(),
        j = No(H);
      {
        var lt = K => {
          var y = Oo();
          Lo(() => Fo(y, V(u))), tt(K, y)
        };
        he(j, K => {
          V(a) && K(lt)
        })
      }
      Co(H), tt(P, H)
    };
    he(h, P => {
      V(c) && P(b)
    })
  }
  tt(t, d), Po()
}
const Fp = Ho(Tp),
  $p = [() => M(() => import("../nodes/0.Uv3Rrzgj.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), import.meta.url), () => M(() => import("../nodes/1.JAmAaEsI.js"), __vite__mapDeps([16, 1, 14, 3, 4, 5, 17, 18, 19, 2]), import.meta.url), () => M(() => import("../nodes/2.DQV2e5Vz.js"), __vite__mapDeps([20, 1, 3, 4, 5, 2, 21, 10, 11, 18, 19, 22, 9, 23]), import.meta.url), () => M(() => import("../nodes/3.c5zaCLvA.js"), __vite__mapDeps([24, 1, 3, 4, 5, 2, 21, 10, 11, 18, 19, 23]), import.meta.url), () => M(() => import("../nodes/4.QUbfB9nv.js"), __vite__mapDeps([25, 1, 2, 3, 4, 5, 9, 11, 21, 10, 18, 19, 6, 7, 8, 26, 12, 27, 28, 29, 30, 31, 23, 32, 33, 34, 35, 36, 14, 17, 22, 13, 37, 38, 39, 40, 41, 42, 43]), import.meta.url), () => M(() => import("../nodes/5.DgaxxUVo.js"), __vite__mapDeps([44, 1, 14, 3, 22, 9, 11]), import.meta.url), () => M(() => import("../nodes/6.W7Nzhsvh.js"), __vite__mapDeps([45, 1, 14, 3, 2, 4, 5, 17, 7, 19]), import.meta.url), () => M(() => import("../nodes/7.wn7N04ib.js"), __vite__mapDeps([46, 1, 2, 3, 4, 5, 9, 10, 11, 28, 19, 6, 7, 40, 47, 48, 49]), import.meta.url), () => M(() => import("../nodes/8.CCOt-8rn.js"), __vite__mapDeps([50, 1, 14, 3, 5, 7, 19, 2, 4]), import.meta.url), () => M(() => import("../nodes/9.CA_dqFQ0.js"), __vite__mapDeps([51, 1, 2, 3, 4, 5, 9, 10, 11, 28, 19, 6, 7, 29, 26, 40, 48, 52, 49]), import.meta.url), () => M(() => import("../nodes/10.D1LFMiKv.js"), __vite__mapDeps([53, 1, 3, 4, 5, 9, 21, 10, 11, 28, 19, 2, 18, 6, 7, 27, 12, 29, 26, 30, 31, 23, 32, 54, 40, 42, 55, 48, 52]), import.meta.url), () => M(() => import("../nodes/11.DyYxOX-z.js"), __vite__mapDeps([56, 1, 2, 3, 4, 5, 9, 19, 18, 6, 7, 37, 11, 12, 22, 38, 57]), import.meta.url), () => M(() => import("../nodes/12.BOcq1c4X.js"), __vite__mapDeps([58, 1, 2, 3, 4, 5, 9, 21, 10, 11, 19, 18, 6, 7, 29, 26, 34, 32, 54, 40, 42, 33, 47, 31]), import.meta.url), () => M(() => import("../nodes/13.CuH6TBxa.js"), __vite__mapDeps([59, 1, 14, 3, 4, 5, 17, 22, 9, 11, 40, 41, 7, 42]), import.meta.url), () => M(() => import("../nodes/14.BZ3lUTqq.js"), __vite__mapDeps([60, 1, 2, 3, 4, 5, 9, 26, 18, 19, 6, 7, 22, 11, 57]), import.meta.url), () => M(() => import("../nodes/15.DcTbIs5Q.js"), __vite__mapDeps([61, 1, 3, 4, 5, 9, 10, 11, 28, 12, 19, 2, 6, 7, 35, 29, 26, 36, 34, 30, 55, 31]), import.meta.url), () => M(() => import("../nodes/16.cFJAMbge.js"), __vite__mapDeps([62, 1, 14, 3, 5, 22, 9, 11, 63]), import.meta.url), () => M(() => import("../nodes/17.YiUChzzD.js"), __vite__mapDeps([64, 1, 14, 3, 5, 22, 9, 11]), import.meta.url), () => M(() => import("../nodes/18.2qcp0iSe.js"), __vite__mapDeps([65, 1, 14, 3, 5, 22, 9, 11, 63]), import.meta.url)],
  Hp = [],
  Bp = {
    "/": [4],
    "/404": [5],
    "/admin": [6, [2]],
    "/admin/dashboard": [7, [2]],
    "/admin/mods": [8, [2, 3]],
    "/admin/mods/leaderboard": [9, [2, 3]],
    "/admin/users": [10, [2]],
    "/join": [11],
    "/moderation": [12],
    "/offline": [13],
    "/payment/success": [14],
    "/profile-picture": [15],
    "/terms/privacy": [16],
    "/terms/return": [17],
    "/terms/terms-of-service": [18]
  },
  vp = {
    handleError: yp || (({
      error: t
    }) => {
      console.error(t)
    }),
    init: void 0,
    reroute: (() => {}),
    transport: {}
  },
  Ip = Object.fromEntries(Object.entries(vp.transport).map(([t, e]) => [t, e.decode])),
  Up = !1,
  jp = (t, e) => Ip[t](e);
export {
  jp as decode, Ip as decoders, Bp as dictionary, Up as hash, vp as hooks, Mp as matchers, $p as nodes, Fp as root, Hp as server_loads
};