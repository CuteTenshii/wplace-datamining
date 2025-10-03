import {
  w as p,
  x as g,
  y as l,
  z as y,
  A as _,
  B as d,
  g as b,
  C as w,
  D as h
} from "./ByX6hzNF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "271525ca33b9062741a3aa9359d1b5202c5b5a4b"
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
    const u = h(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== f[o] && (f[o] = i[o], r = !0);
      return r && s++, s
    });
    a = () => b(u)
  }
  t.b.length && g(() => {
    c(n, a), d(t.b)
  }), l(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && l(() => {
    c(n, a), d(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) b(t);
  n()
}
export {
  m as i
};