import {
  I as p,
  J as g,
  K as d,
  x as y,
  L as _,
  M as l,
  j as b,
  H as h,
  N as w
} from "./lghyzkeh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6c7165b9-ef65-47ce-9fbd-d3e25aaa1328", e._sentryDebugIdIdentifier = "sentry-dbid-6c7165b9-ef65-47ce-9fbd-d3e25aaa1328")
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
    a = () => b(u)
  }
  f.b.length && g(() => {
    c(n, a), l(f.b)
  }), d(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && d(() => {
    c(n, a), l(f.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const f of e.l.s) b(f);
  n()
}
export {
  I as i
};