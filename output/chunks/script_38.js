import {
  S as p
} from "./ClF9qu09.js";
const h = p;

function b(f) {
  const s = [],
    a = s,
    d = Object.keys(f);
  for (const o of d) {
    const t = f[o];
    if (typeof t == "string") {
      a.push(t), Object.defineProperty(s, o, {
        value: t,
        enumerable: !0,
        configurable: !1,
        writable: !1
      });
      continue
    }
    const n = b(t);
    Object.defineProperty(s, o, {
      value: n,
      enumerable: !0,
      configurable: !1,
      writable: !1
    });
    const r = n;
    for (let e = 0; e < r.length; e += 1) a.push(r[e])
  }
  return Object.defineProperty(s, "only", {
    value: (...o) => {
      const t = [];
      for (let n = 0; n < o.length; n += 1) {
        const r = o[n],
          e = s[r];
        if (typeof e == "string") {
          t.push(e);
          continue
        }
        const l = e;
        for (let i = 0; i < l.length; i += 1) t.push(l[i])
      }
      return t
    },
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), Object.defineProperty(s, "but", {
    value: (...o) => {
      const t = new Set(o),
        n = [],
        r = Object.keys(s);
      for (let e = 0; e < r.length; e += 1) {
        const l = r[e];
        if (t.has(l)) continue;
        const i = s[l];
        if (typeof i == "string") {
          n.push(i);
          continue
        }
        const u = i;
        for (let c = 0; c < u.length; c += 1) n.push(u[c])
      }
      return n
    },
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), Object.freeze(s)
}
const m = b(h);
export {
  m as P
};