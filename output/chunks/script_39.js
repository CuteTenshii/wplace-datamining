import {
  M as b,
  as as g,
  q as d,
  x as _,
  at as y,
  au as l,
  i as u,
  w as v,
  av as h
} from "./CdM0B1iz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e7309f16-24e7-4320-aba2-0c7d36ad00de", e._sentryDebugIdIdentifier = "sentry-dbid-e7309f16-24e7-4320-aba2-0c7d36ad00de")
  } catch {}
})();

function m(e = !1) {
  const n = b,
    t = n.l.u;
  if (!t) return;
  let o = () => v(n.s);
  if (e) {
    let a = 0,
      s = {};
    const p = h(() => {
      let i = !1;
      const r = n.s;
      for (const f in r) r[f] !== s[f] && (s[f] = r[f], i = !0);
      return i && a++, a
    });
    o = () => u(p)
  }
  t.b.length && g(() => {
    c(n, o), l(t.b)
  }), d(() => {
    const a = _(() => t.m.map(y));
    return () => {
      for (const s of a) typeof s == "function" && s()
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
  m as i
};