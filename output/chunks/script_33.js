import {
  w as p,
  x as g,
  y as r,
  z as y,
  A as _,
  B as l,
  g as b,
  C as w,
  D as h
} from "./CmkSLWfN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7278ed977b90641928943db9499ca73f82620c56"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d5cd7b52-44e1-408d-9ad3-b18b3172be59", e._sentryDebugIdIdentifier = "sentry-dbid-d5cd7b52-44e1-408d-9ad3-b18b3172be59")
  })()
} catch {}

function m(e = !1) {
  const n = p,
    t = n.l.u;
  if (!t) return;
  let d = () => w(n.s);
  if (e) {
    let f = 0,
      s = {};
    const u = h(() => {
      let a = !1;
      const i = n.s;
      for (const o in i) i[o] !== s[o] && (s[o] = i[o], a = !0);
      return a && f++, f
    });
    d = () => b(u)
  }
  t.b.length && g(() => {
    c(n, d), l(t.b)
  }), r(() => {
    const f = y(() => t.m.map(_));
    return () => {
      for (const s of f) typeof s == "function" && s()
    }
  }), t.a.length && r(() => {
    c(n, d), l(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) b(t);
  n()
}
export {
  m as i
};