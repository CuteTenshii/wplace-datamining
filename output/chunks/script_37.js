import {
  w as p,
  x as g,
  y as l,
  z as y,
  A as _,
  B as d,
  g as c,
  C as w,
  D as h
} from "./4_8LKkOo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "9b2648606e2bb7a01bef003b9890229599179c1c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "888755b8-82ba-4039-836b-67876fe1f611", e._sentryDebugIdIdentifier = "sentry-dbid-888755b8-82ba-4039-836b-67876fe1f611")
  })()
} catch {}

function m(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let i = () => w(n.s);
  if (e) {
    let s = 0,
      f = {};
    const u = h(() => {
      let r = !1;
      const a = n.s;
      for (const o in a) a[o] !== f[o] && (f[o] = a[o], r = !0);
      return r && s++, s
    });
    i = () => c(u)
  }
  t.b.length && g(() => {
    b(n, i), d(t.b)
  }), l(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && l(() => {
    b(n, i), d(t.a)
  })
}

function b(e, n) {
  if (e.l.s)
    for (const t of e.l.s) c(t);
  n()
}
export {
  m as i
};