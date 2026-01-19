import {
  b as y
} from "./CPCzdhld.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "342ba448-c093-411a-bb10-6410e9994399", n._sentryDebugIdIdentifier = "sentry-dbid-342ba448-c093-411a-bb10-6410e9994399")
  })()
} catch {}
const g = y;

function u(n) {
  const e = [],
    a = e,
    b = Object.keys(n);
  for (const i of b) {
    const s = n[i];
    if (typeof s == "string") {
      a.push(s), Object.defineProperty(e, i, {
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
    for (let t = 0; t < r.length; t += 1) a.push(r[t])
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
        const f = t;
        for (let l = 0; l < f.length; l += 1) s.push(f[l])
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
        const f = r[t];
        if (s.has(f)) continue;
        const l = e[f];
        if (typeof l == "string") {
          o.push(l);
          continue
        }
        const d = l;
        for (let c = 0; c < d.length; c += 1) o.push(d[c])
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