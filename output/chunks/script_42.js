import {
  I as p,
  J as g,
  K as r,
  L as y,
  M as _,
  N as l,
  g as u,
  O as h,
  P as w
} from "./QY1-WrVz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93d2d5a1c9ea65de4db2c69715b442df23632ed6"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "907e4785-8bea-4b9d-940e-39588f8476cd", e._sentryDebugIdIdentifier = "sentry-dbid-907e4785-8bea-4b9d-940e-39588f8476cd")
  })()
} catch {}

function I(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let d = () => h(n.s);
  if (e) {
    let s = 0,
      f = {};
    const b = w(() => {
      let i = !1;
      const a = n.s;
      for (const o in a) a[o] !== f[o] && (f[o] = a[o], i = !0);
      return i && s++, s
    });
    d = () => u(b)
  }
  t.b.length && g(() => {
    c(n, d), l(t.b)
  }), r(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && r(() => {
    c(n, d), l(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) u(t);
  n()
}
export {
  I as i
};