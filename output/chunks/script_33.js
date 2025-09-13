import {
  w as p,
  x as g,
  y as r,
  z as y,
  A as _,
  B as l,
  g as u,
  C as w,
  D as h
} from "./JMoIuhVR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4097d37663b9a72f9231b790868cce52a6a81192"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3c163396-3a0b-4f0d-8db9-a8b1a3636372", e._sentryDebugIdIdentifier = "sentry-dbid-3c163396-3a0b-4f0d-8db9-a8b1a3636372")
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
      let d = !1;
      const i = n.s;
      for (const o in i) i[o] !== f[o] && (f[o] = i[o], d = !0);
      return d && s++, s
    });
    a = () => u(b)
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
    for (const t of e.l.s) u(t);
  n()
}
export {
  m as i
};