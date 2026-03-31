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
} from "./Dwt3-WzD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "474a06d87b269a074076fdcef11eba6226920584"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "db360b14-d72f-4715-8759-e215e505134f", e._sentryDebugIdIdentifier = "sentry-dbid-db360b14-d72f-4715-8759-e215e505134f")
  } catch {}
})();

function w(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let o = () => v(n.s);
  if (e) {
    let f = 0,
      s = {};
    const b = h(() => {
      let i = !1;
      const r = n.s;
      for (const a in r) r[a] !== s[a] && (s[a] = r[a], i = !0);
      return i && f++, f
    });
    o = () => u(b)
  }
  t.b.length && g(() => {
    c(n, o), l(t.b)
  }), d(() => {
    const f = _(() => t.m.map(y));
    return () => {
      for (const s of f) typeof s == "function" && s()
    }
  }), t.a.length && d(() => {
    c(n, o), l(t.a)
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