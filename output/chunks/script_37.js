import {
  S as y
} from "./0P0glXsw.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
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
        const d = f;
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