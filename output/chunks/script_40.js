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
} from "./DlUXbix6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a284527cbd407023d7d6ce22d7062bdeed40257e"
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
  let d = () => h(n.s);
  if (e) {
    let s = 0,
      f = {};
    const b = w(() => {
      let a = !1;
      const i = n.s;
      for (const o in i) i[o] !== f[o] && (f[o] = i[o], a = !0);
      return a && s++, s
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