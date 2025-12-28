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
} from "./C0b57ARY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e61b7999f3615b75da925cd12f2c77d312c3e072"
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
    const b = w(() => {
      let i = !1;
      const d = n.s;
      for (const o in d) d[o] !== t[o] && (t[o] = d[o], i = !0);
      return i && s++, s
    });
    a = () => u(b)
  }
  f.b.length && g(() => {
    c(n, a), l(f.b)
  }), r(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && r(() => {
    c(n, a), l(f.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  I as i
};