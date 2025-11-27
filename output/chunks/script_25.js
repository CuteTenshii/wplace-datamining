import {
  P as y
} from "./B4qmM7M1.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a3ac030b39e1c69cc580b4434d12301a02e465ee"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "701c53a9-a5a4-43ed-9b5a-6965f6fb50e6", n._sentryDebugIdIdentifier = "sentry-dbid-701c53a9-a5a4-43ed-9b5a-6965f6fb50e6")
  })()
} catch {}
const g = y;

function u(n) {
  const e = [],
    c = e,
    b = Object.keys(n);
  for (const i of b) {
    const s = n[i];
    if (typeof s == "string") {
      c.push(s), Object.defineProperty(e, i, {
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
    for (let t = 0; t < r.length; t += 1) c.push(r[t])
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
        const d = f;
        for (let a = 0; a < d.length; a += 1) o.push(d[a])
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