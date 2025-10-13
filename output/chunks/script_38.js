import {
  D as p,
  F as g,
  G as r,
  H as y,
  I as _,
  J as l,
  g as u,
  K as h,
  L as w
} from "./j_iXX3SE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29ae9b21d49bd1827c9d9708d11ce0563a962117"
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
      let a = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], a = !0);
      return a && s++, s
    });
    d = () => u(b)
  }
  f.b.length && g(() => {
    c(n, d), l(f.b)
  }), r(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && r(() => {
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