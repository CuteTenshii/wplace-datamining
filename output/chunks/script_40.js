import {
  I as p,
  J as g,
  K as l,
  L as y,
  M as _,
  N as d,
  g as u,
  O as h,
  P as w
} from "./CjHooIZx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c5b6f4008280188b6965f20aa04502030e013ff2"
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
    f = n.l.u;
  if (!f) return;
  let a = () => h(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = w(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], r = !0);
      return r && s++, s
    });
    a = () => u(b)
  }
  f.b.length && g(() => {
    c(n, a), d(f.b)
  }), l(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && l(() => {
    c(n, a), d(f.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  I as i
};