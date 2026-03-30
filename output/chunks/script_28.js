import {
  f as y
} from "./0I7eAuE9.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "8f3737e0-a627-4945-a31b-a9c68a39909d", o._sentryDebugIdIdentifier = "sentry-dbid-8f3737e0-a627-4945-a31b-a9c68a39909d")
  } catch {}
})();
const g = y;

function d(o) {
  const e = [],
    a = e,
    b = Object.keys(o);
  for (const r of b) {
    const t = o[r];
    if (typeof t == "string") {
      a.push(t), Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !1,
        writable: !1
      });
      continue
    }
    const s = d(t);
    Object.defineProperty(e, r, {
      value: s,
      enumerable: !0,
      configurable: !1,
      writable: !1
    });
    const i = s;
    for (let n = 0; n < i.length; n += 1) a.push(i[n])
  }
  return Object.defineProperty(e, "only", {
    value: (...r) => {
      const t = [];
      for (let s = 0; s < r.length; s += 1) {
        const i = r[s],
          n = e[i];
        if (typeof n == "string") {
          t.push(n);
          continue
        }
        const l = n;
        for (let f = 0; f < l.length; f += 1) t.push(l[f])
      }
      return t
    },
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), Object.defineProperty(e, "but", {
    value: (...r) => {
      const t = new Set(r),
        s = [],
        i = Object.keys(e);
      for (let n = 0; n < i.length; n += 1) {
        const l = i[n];
        if (t.has(l)) continue;
        const f = e[l];
        if (typeof f == "string") {
          s.push(f);
          continue
        }
        const u = f;
        for (let c = 0; c < u.length; c += 1) s.push(u[c])
      }
      return s
    },
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), Object.freeze(e)
}
const h = d(g);
export {
  h as P
};