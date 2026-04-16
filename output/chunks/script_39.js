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
} from "./CJNfechn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "651f5538-d60e-4494-b6da-df3d5a2dc4be", e._sentryDebugIdIdentifier = "sentry-dbid-651f5538-d60e-4494-b6da-df3d5a2dc4be")
  } catch {}
})();

function m(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let d = () => v(n.s);
  if (e) {
    let f = 0,
      s = {};
    const b = h(() => {
      let r = !1;
      const o = n.s;
      for (const a in o) o[a] !== s[a] && (s[a] = o[a], r = !0);
      return r && f++, f
    });
    d = () => u(b)
  }
  t.b.length && g(() => {
    c(n, d), l(t.b)
  }), i(() => {
    const f = _(() => t.m.map(y));
    return () => {
      for (const s of f) typeof s == "function" && s()
    }
  }), t.a.length && i(() => {
    c(n, d), l(t.a)
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