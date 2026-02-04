import {
  S as y
} from "./DCvUtWQu.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
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
    const c = o;
    for (let t = 0; t < c.length; t += 1) a.push(c[t])
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
        const r = t;
        for (let f = 0; f < r.length; f += 1) s.push(r[f])
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
        const r = c[t];
        if (s.has(r)) continue;
        const f = e[r];
        if (typeof f == "string") {
          o.push(f);
          continue
        }
        const d = f;
        for (let l = 0; l < d.length; l += 1) o.push(d[l])
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