import {
  I as p,
  J as g,
  K as l,
  x as y,
  L as _,
  M as d,
  j as c,
  H as h,
  N as w
} from "./CjkM38R6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "51633bbb0f20b0f5578caf566ba6bc15f3497cdd"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3933e62a-9342-401b-b615-677975fab732", e._sentryDebugIdIdentifier = "sentry-dbid-3933e62a-9342-401b-b615-677975fab732")
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
    const u = w(() => {
      let r = !1;
      const i = n.s;
      for (const o in i) i[o] !== t[o] && (t[o] = i[o], r = !0);
      return r && s++, s
    });
    a = () => c(u)
  }
  f.b.length && g(() => {
    b(n, a), d(f.b)
  }), l(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && l(() => {
    b(n, a), d(f.a)
  })
}

function b(e, n) {
  if (e.l.s)
    for (const f of e.l.s) c(f);
  n()
}
export {
  I as i
};