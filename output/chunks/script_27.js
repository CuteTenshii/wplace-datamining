import {
  I as p,
  J as g,
  K as r,
  x as y,
  L as _,
  M as l,
  j as u,
  H as h,
  N as w
} from "./AT3DTgMx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "38850961237e3d7e0cabf73306ceed2d401b42cd"
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
    t = n.l.u;
  if (!t) return;
  let a = () => h(n.s);
  if (e) {
    let s = 0,
      f = {};
    const b = w(() => {
      let i = !1;
      const d = n.s;
      for (const o in d) d[o] !== f[o] && (f[o] = d[o], i = !0);
      return i && s++, s
    });
    a = () => u(b)
  }
  t.b.length && g(() => {
    c(n, a), l(t.b)
  }), r(() => {
    const s = y(() => t.m.map(_));
    return () => {
      for (const f of s) typeof f == "function" && f()
    }
  }), t.a.length && r(() => {
    c(n, a), l(t.a)
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