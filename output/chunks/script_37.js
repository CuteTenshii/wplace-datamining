import {
  S as y
} from "./63a9cj_g.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "f7674a52-188a-4076-bfbb-3ac3688ded2d", o._sentryDebugIdIdentifier = "sentry-dbid-f7674a52-188a-4076-bfbb-3ac3688ded2d")
  } catch {}
})();
const g = y;

function u(o) {
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
    const s = u(t);
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
        const f = n;
        for (let c = 0; c < f.length; c += 1) t.push(f[c])
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
        const c = e[f];
        if (typeof c == "string") {
          s.push(c);
          continue
        }
        const d = c;
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