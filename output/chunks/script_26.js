import {
  S as y
} from "./B_MT7uZX.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
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

function b(n) {
  const e = [],
    a = e,
    u = Object.keys(n);
  for (const i of u) {
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
    const o = b(s);
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
        const l = t;
        for (let c = 0; c < l.length; c += 1) s.push(l[c])
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
        const c = e[l];
        if (typeof c == "string") {
          o.push(c);
          continue
        }
        const d = c;
        for (let f = 0; f < d.length; f += 1) o.push(d[f])
      }
      return o
    },
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), Object.freeze(e)
}
const h = b(g);
export {
  h as P
};