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
} from "./BBaHVBJx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
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
    let a = 0,
      t = {};
    const b = w(() => {
      let i = !1;
      const d = f.s;
      for (const s in d) d[s] !== t[s] && (t[s] = d[s], i = !0);
      return i && a++, a
    });
    o = () => u(b)
  }
  n.b.length && g(() => {
    c(f, o), l(n.b)
  }), r(() => {
    const a = y(() => n.m.map(_));
    return () => {
      for (const t of a) typeof t == "function" && t()
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