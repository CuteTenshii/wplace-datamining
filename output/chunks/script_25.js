import {
  S as y
} from "./CBmzf2X6.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "6e518152-40f3-4c64-9828-477f44afd1d7", n._sentryDebugIdIdentifier = "sentry-dbid-6e518152-40f3-4c64-9828-477f44afd1d7")
  })()
} catch {}
const g = y;

function u(n) {
  const e = [],
    d = e,
    b = Object.keys(n);
  for (const f of b) {
    const s = n[f];
    if (typeof s == "string") {
      d.push(s), Object.defineProperty(e, f, {
        value: s,
        enumerable: !0,
        configurable: !1,
        writable: !1
      });
      continue
    }
    const o = u(s);
    Object.defineProperty(e, f, {
      value: o,
      enumerable: !0,
      configurable: !1,
      writable: !1
    });
    const i = o;
    for (let t = 0; t < i.length; t += 1) d.push(i[t])
  }
  return Object.defineProperty(e, "only", {
    value: (...f) => {
      const s = [];
      for (let o = 0; o < f.length; o += 1) {
        const i = f[o],
          t = e[i];
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
    value: (...f) => {
      const s = new Set(f),
        o = [],
        i = Object.keys(e);
      for (let t = 0; t < i.length; t += 1) {
        const l = i[t];
        if (s.has(l)) continue;
        const r = e[l];
        if (typeof r == "string") {
          o.push(r);
          continue
        }
        const a = r;
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