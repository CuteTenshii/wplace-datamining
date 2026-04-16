import {
  N as p,
  as as g,
  q as i,
  x as _,
  at as y,
  au as l,
  i as u,
  w as v,
  av as h
} from "./B8NcJmf7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "651f5538-d60e-4494-b6da-df3d5a2dc4be", e._sentryDebugIdIdentifier = "sentry-dbid-651f5538-d60e-4494-b6da-df3d5a2dc4be")
  } catch {}
})();

function m(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let o = () => v(n.s);
  if (e) {
    let f = 0,
      s = {};
    const b = h(() => {
      let d = !1;
      const r = n.s;
      for (const a in r) r[a] !== s[a] && (s[a] = r[a], d = !0);
      return d && f++, f
    });
    o = () => u(b)
  }
  t.b.length && g(() => {
    c(n, o), l(t.b)
  }), i(() => {
    const f = _(() => t.m.map(y));
    return () => {
      for (const s of f) typeof s == "function" && s()
    }
  }), t.a.length && i(() => {
    c(n, o), l(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) u(t);
  n()
}
export {
  m as i
};