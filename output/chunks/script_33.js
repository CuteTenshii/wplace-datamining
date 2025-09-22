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
} from "./29bc7E1V.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "08e863ad0717da163bc2a8f4fbd2a2e653d7b37d"
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