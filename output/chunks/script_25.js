import {
  S as y
} from "./CmQ5WwDX.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "3026a9c9-32a9-4a21-b39f-3766d314688c", n._sentryDebugIdIdentifier = "sentry-dbid-3026a9c9-32a9-4a21-b39f-3766d314688c")
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
    const f = o;
    for (let t = 0; t < f.length; t += 1) c.push(f[t])
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
        f = Object.keys(e);
      for (let t = 0; t < f.length; t += 1) {
        const l = f[t];
        if (s.has(l)) continue;
        const r = e[l];
        if (typeof r == "string") {
          o.push(r);
          continue
        }
        const d = r;
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