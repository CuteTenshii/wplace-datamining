import {
  A as p,
  C as g,
  D as r,
  F as y,
  G as _,
  H as l,
  g as b,
  I as h,
  J as w
} from "./DnEjpmVm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dcafbf70eeb3b56ec7077bb04087bc09c7e58c55"
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
    const u = w(() => {
      let c = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], c = !0);
      return c && s++, s
    });
    a = () => b(u)
  }
  f.b.length && g(() => {
    d(n, a), l(f.b)
  }), r(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && r(() => {
    d(n, a), l(f.a)
  })
}

function d(e, n) {
  if (e.l.s)
    for (const f of e.l.s) b(f);
  n()
}
export {
  I as i
};