import {
  ae as p,
  af as g,
  v as r,
  y,
  ag as _,
  ah as l,
  j as u,
  z as h,
  ai as w
} from "./BrDbkhPu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "2a6ffaea-c3f4-4f0d-bd3a-6965b2124f55", e._sentryDebugIdIdentifier = "sentry-dbid-2a6ffaea-c3f4-4f0d-bd3a-6965b2124f55")
  })()
} catch {}

function m(e = !1) {
  const f = p,
    n = f.l.u;
  if (!n) return;
  let o = () => h(f.s);
  if (e) {
    let s = 0,
      t = {};
    const b = w(() => {
      let d = !1;
      const i = f.s;
      for (const a in i) i[a] !== t[a] && (t[a] = i[a], d = !0);
      return d && s++, s
    });
    o = () => u(b)
  }
  n.b.length && g(() => {
    c(f, o), l(n.b)
  }), r(() => {
    const s = y(() => n.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), n.a.length && r(() => {
    c(f, o), l(n.a)
  })
}

function c(e, f) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  f()
}
export {
  m as i
};