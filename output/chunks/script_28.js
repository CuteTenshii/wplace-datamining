import {
  f as y
} from "./BYgMmISn.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "8f3737e0-a627-4945-a31b-a9c68a39909d", o._sentryDebugIdIdentifier = "sentry-dbid-8f3737e0-a627-4945-a31b-a9c68a39909d")
  } catch {}
})();
const g = y;

function u(o) {
  const e = [],
    f = e,
    b = Object.keys(o);
  for (const r of b) {
    const t = o[r];
    if (typeof t == "string") {
      f.push(t), Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !1,
        writable: !1
      });
      continue
    }
    const s = u(t);
    Object.defineProperty(e, r, {
      value: s,
      enumerable: !0,
      configurable: !1,
      writable: !1
    });
    const i = s;
    for (let n = 0; n < i.length; n += 1) f.push(i[n])
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
        const c = n;
        for (let l = 0; l < c.length; l += 1) t.push(c[l])
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
        const c = i[n];
        if (t.has(c)) continue;
        const l = e[c];
        if (typeof l == "string") {
          s.push(l);
          continue
        }
        const d = l;
        for (let a = 0; a < d.length; a += 1) s.push(d[a])
      }
      return s
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