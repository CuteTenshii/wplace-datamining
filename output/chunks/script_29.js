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
} from "./_uPdD6ej.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8ca9d5bb8d7e9609a9f3fa05a0fcc401dd1cd4cb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "72606fcc-f5a4-4427-9c3b-f14259fc0ab7", e._sentryDebugIdIdentifier = "sentry-dbid-72606fcc-f5a4-4427-9c3b-f14259fc0ab7")
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
      let c = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], c = !0);
      return c && s++, s
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