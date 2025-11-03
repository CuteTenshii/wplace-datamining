import {
  I as p,
  J as g,
  K as l,
  L as y,
  M as _,
  N as c,
  h as u,
  O as h,
  P as w
} from "./KRt5sQSh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ce759b03-4002-4bb5-a31c-5a076972e523", e._sentryDebugIdIdentifier = "sentry-dbid-ce759b03-4002-4bb5-a31c-5a076972e523")
  })()
} catch {}

function I(e = !1) {
  const n = p,
    f = n.l.u;
  if (!f) return;
  let a = () => h(n.s);
  if (e) {
    let s = 0,
      t = {};
    const b = w(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], r = !0);
      return r && s++, s
    });
    a = () => u(b)
  }
  f.b.length && g(() => {
    d(n, a), c(f.b)
  }), l(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && l(() => {
    d(n, a), c(f.a)
  })
}

function d(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  I as i
};