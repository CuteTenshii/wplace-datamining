import {
  I as p,
  J as g,
  K as l,
  L as y,
  M as _,
  N as d,
  g as b,
  O as h,
  P as w
} from "./Vo-uc5TQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "70227dba-cb62-45f9-8131-50cc9e006f67", e._sentryDebugIdIdentifier = "sentry-dbid-70227dba-cb62-45f9-8131-50cc9e006f67")
  })()
} catch {}

function I(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let a = () => h(n.s);
  if (e) {
    let s = 0,
      f = {};
    const u = w(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== f[o] && (f[o] = i[o], r = !0);
      return r && s++, s
    });
    a = () => b(u)
  }
  t.b.length && g(() => {
    c(n, a), d(t.b)
  }), l(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
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