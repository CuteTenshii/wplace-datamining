import {
  w as p,
  x as g,
  y as r,
  z as y,
  A as _,
  B as l,
  g as c,
  C as w,
  D as h
} from "./BONTOiKC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b27063fa-afaa-487d-9b71-b73481204781", e._sentryDebugIdIdentifier = "sentry-dbid-b27063fa-afaa-487d-9b71-b73481204781")
  })()
} catch {}

function m(e = !1) {
  const n = p,
    f = n.l.u;
  if (!f) return;
  let o = () => w(n.s);
  if (e) {
    let s = 0,
      t = {};
    const u = h(() => {
      let d = !1;
      const i = n.s;
      for (const a in i) i[a] !== t[a] && (t[a] = i[a], d = !0);
      return d && s++, s
    });
    o = () => c(u)
  }
  f.b.length && g(() => {
    b(n, o), l(f.b)
  }), r(() => {
    const s = y(() => f.m.map(_));
    return () => {
      for (const t of s) typeof t == "function" && t()
    }
  }), f.a.length && r(() => {
    b(n, o), l(f.a)
  })
}

function b(e, n) {
  if (e.l.s)
    for (const f of e.l.s) c(f);
  n()
}
export {
  m as i
};