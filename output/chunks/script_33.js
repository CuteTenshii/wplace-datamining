import {
  w as p,
  x as g,
  y as r,
  z as y,
  A as _,
  B as l,
  g as c,
  C as w,
  D as h
} from "./BhjnkBaE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ab54e7d2bb082741522faef467264167f3245873"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d5cd7b52-44e1-408d-9ad3-b18b3172be59", e._sentryDebugIdIdentifier = "sentry-dbid-d5cd7b52-44e1-408d-9ad3-b18b3172be59")
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
    const u = h(() => {
      let i = !1;
      const a = n.s;
      for (const o in a) a[o] !== f[o] && (f[o] = a[o], i = !0);
      return i && s++, s
    });
    d = () => c(u)
  }
  t.b.length && g(() => {
    b(n, d), l(t.b)
  }), r(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && r(() => {
    b(n, d), l(t.a)
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