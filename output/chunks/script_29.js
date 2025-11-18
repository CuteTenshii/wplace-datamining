import {
  A as p,
  C as g,
  D as r,
  F as y,
  G as _,
  H as c,
  g as u,
  I as h,
  J as w
} from "./Dff7lKDG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
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
      let d = !1;
      const a = n.s;
      for (const o in a) a[o] !== t[o] && (t[o] = a[o], d = !0);
      return d && s++, s
    });
    i = () => u(b)
  }
  f.b.length && g(() => {
    l(n, i), c(f.b)
  }), r(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && r(() => {
    l(n, i), c(f.a)
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