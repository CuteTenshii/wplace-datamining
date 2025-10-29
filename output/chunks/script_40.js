import {
  I as p,
  J as g,
  K as l,
  L as y,
  M as _,
  N as d,
  h as b,
  O as h,
  P as w
} from "./DzYLfSyw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "274e4e697c621b0b0021d13ee96b23137b8f2a87"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ce759b03-4002-4bb5-a31c-5a076972e523", e._sentryDebugIdIdentifier = "sentry-dbid-ce759b03-4002-4bb5-a31c-5a076972e523")
  })()
} catch {}

function I(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let a = () => h(n.s);
  if (e) {
    let f = 0,
      s = {};
    const u = w(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== s[o] && (s[o] = i[o], r = !0);
      return r && f++, f
    });
    a = () => b(u)
  }
  t.b.length && g(() => {
    c(n, a), d(t.b)
  }), l(() => {
    const f = y(() => t.m.map(_));
    return () => {
      for (const s of f) typeof s == "function" && s()
    }
  }), t.a.length && l(() => {
    c(n, a), d(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) b(t);
  n()
}
export {
  I as i
};