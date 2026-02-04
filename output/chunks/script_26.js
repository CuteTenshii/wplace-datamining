import {
  S as y
} from "./o0_U8pOt.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "8ee0bd29-7987-4cc1-865c-dab8ce78c4bc", n._sentryDebugIdIdentifier = "sentry-dbid-8ee0bd29-7987-4cc1-865c-dab8ce78c4bc")
  })()
} catch {}
const g = y;

function u(n) {
  const e = [],
    d = e,
    b = Object.keys(n);
  for (const i of b) {
    const s = n[i];
    if (typeof s == "string") {
      d.push(s), Object.defineProperty(e, i, {
        value: s,
        enumerable: !0,
        configurable: !1,
        writable: !1
      });
      continue
    }
    const o = u(s);
    Object.defineProperty(e, i, {
      value: o,
      enumerable: !0,
      configurable: !1,
      writable: !1
    });
    const c = o;
    for (let t = 0; t < c.length; t += 1) d.push(c[t])
  }
  return Object.defineProperty(e, "only", {
    value: (...i) => {
      const s = [];
      for (let o = 0; o < i.length; o += 1) {
        const c = i[o],
          t = e[c];
        if (typeof t == "string") {
          s.push(t);
          continue
        }
        const l = t;
        for (let r = 0; r < l.length; r += 1) s.push(l[r])
      }
      return s
    },
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), Object.defineProperty(e, "but", {
    value: (...i) => {
      const s = new Set(i),
        o = [],
        c = Object.keys(e);
      for (let t = 0; t < c.length; t += 1) {
        const l = c[t];
        if (s.has(l)) continue;
        const r = e[l];
        if (typeof r == "string") {
          o.push(r);
          continue
        }
        const a = r;
        for (let f = 0; f < a.length; f += 1) o.push(a[f])
      }
      return o
    },
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), Object.freeze(e)
}
const h = u(g);
export {
  h as P
};