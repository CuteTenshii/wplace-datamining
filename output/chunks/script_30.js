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
} from "./CqOPxJme.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
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
    const b = h(() => {
      let i = !1;
      const a = n.s;
      for (const o in a) a[o] !== s[o] && (s[o] = a[o], i = !0);
      return i && f++, f
    });
    r = () => u(b)
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
    for (const t of e.l.s) u(t);
  n()
}
export {
  w as i
};