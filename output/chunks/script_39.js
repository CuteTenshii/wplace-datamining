import {
  M as p,
  as as g,
  q as d,
  x as _,
  at as y,
  au as c,
  i as u,
  w as v,
  av as h
} from "./DK4l5t5k.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e7309f16-24e7-4320-aba2-0c7d36ad00de", e._sentryDebugIdIdentifier = "sentry-dbid-e7309f16-24e7-4320-aba2-0c7d36ad00de")
  } catch {}
})();

function m(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let o = () => v(n.s);
  if (e) {
    let a = 0,
      s = {};
    const b = h(() => {
      let i = !1;
      const r = n.s;
      for (const f in r) r[f] !== s[f] && (s[f] = r[f], i = !0);
      return i && a++, a
    });
    o = () => u(b)
  }
  t.b.length && g(() => {
    l(n, o), c(t.b)
  }), d(() => {
    const a = _(() => t.m.map(y));
    return () => {
      for (const s of a) typeof s == "function" && s()
    }
  }), t.a.length && d(() => {
    l(n, o), c(t.a)
  })
}

function l(e, n) {
  if (e.l.s)
    for (const t of e.l.s) u(t);
  n()
}
export {
  m as i
};