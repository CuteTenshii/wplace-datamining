import {
  I as p,
  J as g,
  K as r,
  x as y,
  L as _,
  M as l,
  j as b,
  H as h,
  N as w
} from "./BNGAEk_0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3a8d7c66397947b49ed2868fcbd9febd8dcf5eb4"
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
      let d = !1;
      const i = n.s;
      for (const o in i) i[o] !== f[o] && (f[o] = i[o], d = !0);
      return d && s++, s
    });
    a = () => b(u)
  }
  t.b.length && g(() => {
    c(n, a), l(t.b)
  }), r(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && r(() => {
    c(n, a), l(t.a)
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