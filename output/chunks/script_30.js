import {
  O as p,
  as as g,
  C as i,
  G as _,
  at as y,
  au as l,
  i as u,
  F as v,
  av as h
} from "./DBVFc_3b.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "db360b14-d72f-4715-8759-e215e505134f", e._sentryDebugIdIdentifier = "sentry-dbid-db360b14-d72f-4715-8759-e215e505134f")
  } catch {}
})();

function w(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let a = () => v(n.s);
  if (e) {
    let f = 0,
      s = {};
    const b = h(() => {
      let d = !1;
      const r = n.s;
      for (const o in r) r[o] !== s[o] && (s[o] = r[o], d = !0);
      return d && f++, f
    });
    a = () => u(b)
  }
  t.b.length && g(() => {
    c(n, a), l(t.b)
  }), i(() => {
    const f = _(() => t.m.map(y));
    return () => {
      for (const s of f) typeof s == "function" && s()
    }
  }), t.a.length && i(() => {
    c(n, a), l(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) u(t);
  n()
}
export {
  w as i
};