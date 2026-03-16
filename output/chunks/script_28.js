import {
  f as y
} from "./DTvwujfW.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "8f3737e0-a627-4945-a31b-a9c68a39909d", o._sentryDebugIdIdentifier = "sentry-dbid-8f3737e0-a627-4945-a31b-a9c68a39909d")
  } catch {}
})();
const g = y;

function d(o) {
  const e = [],
    l = e,
    b = Object.keys(o);
  for (const r of b) {
    const t = o[r];
    if (typeof t == "string") {
      l.push(t), Object.defineProperty(e, r, {
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
    for (let n = 0; n < i.length; n += 1) l.push(i[n])
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
        const a = n;
        for (let f = 0; f < a.length; f += 1) t.push(a[f])
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
        const a = i[n];
        if (t.has(a)) continue;
        const f = e[a];
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