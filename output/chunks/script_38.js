import {
  D as p,
  F as g,
  G as a,
  H as y,
  I as _,
  J as l,
  g as u,
  K as h,
  L as w
} from "./BR3IUnhn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b227214883eb8641881975e44ed77db97966a3e5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "466827c8-7394-4483-bcd6-e0d3ff749d8f", e._sentryDebugIdIdentifier = "sentry-dbid-466827c8-7394-4483-bcd6-e0d3ff749d8f")
  })()
} catch {}

function I(e = !1) {
  const n = p,
    f = n.l.u;
  if (!f) return;
  let d = () => h(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = w(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], r = !0);
      return r && s++, s
    });
    d = () => u(b)
  }
  f.b.length && g(() => {
    c(n, d), l(f.b)
  }), a(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && a(() => {
    c(n, d), l(f.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  I as i
};