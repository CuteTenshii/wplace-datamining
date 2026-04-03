import {
  O as p,
  as as g,
  C as d,
  G as _,
  at as y,
  au as l,
  i as u,
  F as v,
  av as h
} from "./D28CkLTn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "db360b14-d72f-4715-8759-e215e505134f", e._sentryDebugIdIdentifier = "sentry-dbid-db360b14-d72f-4715-8759-e215e505134f")
  } catch {}
})();

function w(e = !1) {
  const n = p,
    f = n.l.u;
  if (!f) return;
  let a = () => v(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = h(() => {
      let i = !1;
      const r = n.s;
      for (const o in r) r[o] !== t[o] && (t[o] = r[o], i = !0);
      return i && s++, s
    });
    a = () => u(b)
  }
  f.b.length && g(() => {
    c(n, a), l(f.b)
  }), d(() => {
    const s = _(() => f.m.map(y));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && d(() => {
    c(n, a), l(f.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  w as i
};