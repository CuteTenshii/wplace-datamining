import {
  ae as p,
  af as g,
  v as d,
  y,
  ag as _,
  ah as l,
  j as u,
  z as h,
  ai as w
} from "./CJKTONAG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2a6ffaea-c3f4-4f0d-bd3a-6965b2124f55", e._sentryDebugIdIdentifier = "sentry-dbid-2a6ffaea-c3f4-4f0d-bd3a-6965b2124f55")
  })()
} catch {}

function m(e = !1) {
  const n = p,
    f = n.l.u;
  if (!f) return;
  let o = () => h(n.s);
  if (e) {
    let a = 0,
      t = {};
    const b = w(() => {
      let r = !1;
      const i = n.s;
      for (const s in i) i[s] !== t[s] && (t[s] = i[s], r = !0);
      return r && a++, a
    });
    o = () => u(b)
  }
  f.b.length && g(() => {
    c(n, o), l(f.b)
  }), d(() => {
    const a = y(() => f.m.map(_));
    return () => {
      for (const t of a) typeof t == "function" && t()
    }
  }), f.a.length && d(() => {
    c(n, o), l(f.a)
  })
}

function c(e, n) {
  if (e.l.s)
    for (const f of e.l.s) u(f);
  n()
}
export {
  m as i
};