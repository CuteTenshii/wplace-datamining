import {
  S as y
} from "./Dzi3l866.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "f7674a52-188a-4076-bfbb-3ac3688ded2d", o._sentryDebugIdIdentifier = "sentry-dbid-f7674a52-188a-4076-bfbb-3ac3688ded2d")
  } catch {}
})();
const g = y;

function b(o) {
  const e = [],
    c = e,
    u = Object.keys(o);
  for (const r of u) {
    const t = o[r];
    if (typeof t == "string") {
      c.push(t), Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !1,
        writable: !1
      });
      continue
    }
    const s = b(t);
    Object.defineProperty(e, r, {
      value: s,
      enumerable: !0,
      configurable: !1,
      writable: !1
    });
    const i = s;
    for (let n = 0; n < i.length; n += 1) c.push(i[n])
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
        const f = n;
        for (let l = 0; l < f.length; l += 1) t.push(f[l])
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
        const f = i[n];
        if (t.has(f)) continue;
        const l = e[f];
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
const h = b(g);
export {
  h as P
};