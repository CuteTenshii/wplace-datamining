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
} from "./BlTsffte.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cf70b86b5c91cdc18d318e8e942fc55d8b1d0f41"
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
  let i = () => h(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = w(() => {
      let a = !1;
      const d = n.s;
      for (const o in d) d[o] !== t[o] && (t[o] = d[o], a = !0);
      return a && s++, s
    });
    i = () => u(b)
  }
  f.b.length && g(() => {
    c(n, i), l(f.b)
  }), r(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && r(() => {
    c(n, i), l(f.a)
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