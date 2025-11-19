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
} from "./CJTyhPUr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "41710f7ccc2fafb6890924daac86ac6566913848"
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
    const b = w(() => {
      let i = !1;
      const c = n.s;
      for (const o in c) c[o] !== t[o] && (t[o] = c[o], i = !0);
      return i && s++, s
    });
    a = () => u(b)
  }
  f.b.length && g(() => {
    l(n, a), r(f.b)
  }), d(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && d(() => {
    l(n, a), r(f.a)
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