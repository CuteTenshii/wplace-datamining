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
} from "./li5wq6e0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f261223d088ed61b87361f00600c7fcc32afef6a"
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
    f = n.l.u;
  if (!f) return;
  let a = () => w(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = h(() => {
      let d = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], d = !0);
      return d && s++, s
    });
    a = () => u(b)
  }
  f.b.length && g(() => {
    c(n, a), l(f.b)
  }), r(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && r(() => {
    c(n, a), l(f.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  m as i
};