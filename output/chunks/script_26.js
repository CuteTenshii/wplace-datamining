import {
  S as y
} from "./7DPziOfr.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
    const f = o;
    for (let t = 0; t < f.length; t += 1) d.push(f[t])
  }
  return Object.defineProperty(e, "only", {
    value: (...i) => {
      const s = [];
      for (let o = 0; o < i.length; o += 1) {
        const f = i[o],
          t = e[f];
        if (typeof t == "string") {
          s.push(t);
          continue
        }
        const r = t;
        for (let c = 0; c < r.length; c += 1) s.push(r[c])
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
        f = Object.keys(e);
      for (let t = 0; t < f.length; t += 1) {
        const r = f[t];
        if (s.has(r)) continue;
        const c = e[r];
        if (typeof c == "string") {
          o.push(c);
          continue
        }
        const a = c;
        for (let l = 0; l < a.length; l += 1) o.push(a[l])
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