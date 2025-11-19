import {
  A as p,
  C as g,
  D as i,
  F as y,
  G as _,
  H as r,
  g as b,
  I as h,
  J as w
} from "./Ci4OD8YS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d97a8a46c0eab54dca8573924bccbc5e0735b3d"
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
  let a = () => h(n.s);
  if (e) {
    let s = 0,
      t = {};
    const u = w(() => {
      let d = !1;
      const c = n.s;
      for (const o in c) c[o] !== t[o] && (t[o] = c[o], d = !0);
      return d && s++, s
    });
    a = () => b(u)
  }
  f.b.length && g(() => {
    l(n, a), r(f.b)
  }), i(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && i(() => {
    l(n, a), r(f.a)
  })
}

function l(e, n) {
  if (e.l.s)
    for (const f of e.l.s) b(f);
  n()
}
export {
  I as i
};