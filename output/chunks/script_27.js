import {
  I as p,
  J as g,
  K as l,
  x as y,
  L as _,
  M as d,
  j as c,
  H as h,
  N as w
} from "./BXFuHbHZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "38bb15d6890b2160becfb07b4396631f8d785598"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3933e62a-9342-401b-b615-677975fab732", e._sentryDebugIdIdentifier = "sentry-dbid-3933e62a-9342-401b-b615-677975fab732")
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
    a = () => c(u)
  }
  t.b.length && g(() => {
    b(n, a), d(t.b)
  }), l(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && l(() => {
    b(n, a), d(t.a)
  })
}

function b(e, n) {
  if (e.l.s)
    for (const t of e.l.s) c(t);
  n()
}
export {
  I as i
};