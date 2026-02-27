import {
  S as y
} from "./DAunMILJ.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "f6d93219-b8ef-4a9a-af71-bbc49c014de1", o._sentryDebugIdIdentifier = "sentry-dbid-f6d93219-b8ef-4a9a-af71-bbc49c014de1")
  } catch {}
})();
const g = y;

function u(o) {
  const e = [],
    c = e,
    b = Object.keys(o);
  for (const r of b) {
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
    const s = u(t);
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
const h = u(g);
export {
  h as P
};