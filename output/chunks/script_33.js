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
} from "./CJ1cckJE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e3f70f7829e704b21f2ec68a0bb0b01d91efd9a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6993cafb-885a-4e67-afef-2178e1f1e430", e._sentryDebugIdIdentifier = "sentry-dbid-6993cafb-885a-4e67-afef-2178e1f1e430")
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
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], r = !0);
      return r && s++, s
    });
    a = () => u(b)
  }
  f.b.length && g(() => {
    c(n, a), d(f.b)
  }), l(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && l(() => {
    c(n, a), d(f.a)
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