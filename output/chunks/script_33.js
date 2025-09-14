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
} from "./DlWygu_S.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "48232197bdcdfc2a880dd0de2ffd5bc2075b51d0"
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
  let d = () => w(n.s);
  if (e) {
    let s = 0,
      f = {};
    const b = h(() => {
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
  m as i
};