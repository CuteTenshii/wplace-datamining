import {
  w as p,
  x as g,
  y as l,
  z as y,
  A as _,
  B as d,
  g as u,
  C as w,
  D as h
} from "./DQc9Bjlo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "96e7de35a79bbd0971b03a9483bfe62a1a391d64"
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
  let a = () => w(n.s);
  if (e) {
    let s = 0,
      f = {};
    const c = h(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== f[o] && (f[o] = i[o], r = !0);
      return r && s++, s
    });
    a = () => u(c)
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
    for (const t of e.l.s) u(t);
  n()
}
export {
  m as i
};