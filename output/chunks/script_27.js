import {
  y as p,
  z as y,
  A as r,
  w as g,
  C as _,
  D as l,
  j as u,
  x as w,
  F as h
} from "./DcuED2r1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f934cb4d-276c-4787-ba72-3d054925827c", e._sentryDebugIdIdentifier = "sentry-dbid-f934cb4d-276c-4787-ba72-3d054925827c")
  })()
} catch {}

function m(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let a = () => w(n.s);
  if (e) {
    let s = 0,
      f = {};
    const b = h(() => {
      let i = !1;
      const d = n.s;
      for (const o in d) d[o] !== f[o] && (f[o] = d[o], i = !0);
      return i && s++, s
    });
    a = () => u(b)
  }
  t.b.length && y(() => {
    c(n, a), l(t.b)
  }), r(() => {
    const s = g(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && r(() => {
    c(n, a), l(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) u(t);
  n()
}
export {
  m as i
};