import {
  O as p,
  as as g,
  C as d,
  G as _,
  at as y,
  au as l,
  i as b,
  F as v,
  av as h
} from "./Df0Hz134.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "db360b14-d72f-4715-8759-e215e505134f", e._sentryDebugIdIdentifier = "sentry-dbid-db360b14-d72f-4715-8759-e215e505134f")
  } catch {}
})();

function w(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let r = () => v(n.s);
  if (e) {
    let f = 0,
      s = {};
    const u = h(() => {
      let i = !1;
      const a = n.s;
      for (const o in a) a[o] !== s[o] && (s[o] = a[o], i = !0);
      return i && f++, f
    });
    r = () => b(u)
  }
  t.b.length && g(() => {
    c(n, r), l(t.b)
  }), d(() => {
    const f = _(() => t.m.map(y));
    return () => {
      for (const s of f) typeof s == "function" && s()
    }
  }), t.a.length && d(() => {
    c(n, r), l(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) b(t);
  n()
}
export {
  w as i
};