import {
  S as y
} from "./DpJUZDDk.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
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
    const r = o;
    for (let t = 0; t < r.length; t += 1) d.push(r[t])
  }
  return Object.defineProperty(e, "only", {
    value: (...i) => {
      const s = [];
      for (let o = 0; o < i.length; o += 1) {
        const r = i[o],
          t = e[r];
        if (typeof t == "string") {
          s.push(t);
          continue
        }
        const l = t;
        for (let f = 0; f < l.length; f += 1) s.push(l[f])
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
        r = Object.keys(e);
      for (let t = 0; t < r.length; t += 1) {
        const l = r[t];
        if (s.has(l)) continue;
        const f = e[l];
        if (typeof f == "string") {
          o.push(f);
          continue
        }
        const a = f;
        for (let c = 0; c < a.length; c += 1) o.push(a[c])
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