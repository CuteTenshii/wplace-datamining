import {
  A as p,
  C as g,
  D as d,
  F as y,
  G as _,
  H as r,
  g as u,
  I as h,
  J as w
} from "./DKMpf0HC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "399bc8c4e783d71b221f731ebe74f832c15927f3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f9b994b3-2d1e-42b0-837f-acfd2cc50c7c", e._sentryDebugIdIdentifier = "sentry-dbid-f9b994b3-2d1e-42b0-837f-acfd2cc50c7c")
  })()
} catch {}

function I(e = !1) {
  const n = p,
    f = n.l.u;
  if (!f) return;
  let i = () => h(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = w(() => {
      let c = !1;
      const a = n.s;
      for (const o in a) a[o] !== t[o] && (t[o] = a[o], c = !0);
      return c && s++, s
    });
    i = () => u(b)
  }
  f.b.length && g(() => {
    l(n, i), r(f.b)
  }), d(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && d(() => {
    l(n, i), r(f.a)
  })
}

function l(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  I as i
};