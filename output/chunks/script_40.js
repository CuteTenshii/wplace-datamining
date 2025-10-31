import {
  I as p,
  J as g,
  K as l,
  L as y,
  M as _,
  N as d,
  h as u,
  O as h,
  P as w
} from "./DRybHg5Z.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52c32908d40da7633c03ed8a85ce90814a387626"
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
    t = n.l.u;
  if (!t) return;
  let a = () => h(n.s);
  if (e) {
    let o = 0,
      s = {};
    const b = w(() => {
      let r = !1;
      const i = n.s;
      for (const f in i) i[f] !== s[f] && (s[f] = i[f], r = !0);
      return r && o++, o
    });
    a = () => u(b)
  }
  t.b.length && g(() => {
    c(n, a), d(t.b)
  }), l(() => {
    const o = y(() => t.m.map(_));
    return () => {
      for (const s of o) typeof s == "function" && s()
    }
  }), t.a.length && l(() => {
    c(n, a), d(t.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const t of e.l.s) u(t);
  n()
}
export {
  I as i
};