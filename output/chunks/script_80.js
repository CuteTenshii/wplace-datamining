import {
  z as d,
  aE as g,
  y as c,
  aF as l,
  B as m,
  aG as b,
  i as p,
  at as v,
  aH as h
} from "./DmPVOt2G.js";

function y(n = !1) {
  const t = d,
    e = t.l.u;
  if (!e) return;
  let f = () => v(t.s);
  if (n) {
    let a = 0,
      s = {};
    const _ = h(() => {
      let i = !1;
      const r = t.s;
      for (const o in r) r[o] !== s[o] && (s[o] = r[o], i = !0);
      return i && a++, a
    });
    f = () => p(_)
  }
  e.b.length && g(() => {
    u(t, f), l(e.b)
  }), c(() => {
    const a = m(() => e.m.map(b));
    return () => {
      for (const s of a) typeof s == "function" && s()
    }
  }), e.a.length && c(() => {
    u(t, f), l(e.a)
  })
}

function u(n, t) {
  if (n.l.s)
    for (const e of n.l.s) p(e);
  t()
}
export {
  y as i
};