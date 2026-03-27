import {
  f as y
} from "./B6mm0pNb.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "8f3737e0-a627-4945-a31b-a9c68a39909d", o._sentryDebugIdIdentifier = "sentry-dbid-8f3737e0-a627-4945-a31b-a9c68a39909d")
  } catch {}
})();
const g = y;

function b(o) {
  const e = [],
    a = e,
    d = Object.keys(o);
  for (const r of d) {
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
    const s = b(t);
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
        const u = l;
        for (let c = 0; c < u.length; c += 1) s.push(u[c])
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