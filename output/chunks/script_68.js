import {
  J as d,
  aq as g,
  I as c,
  L as m,
  ar as b,
  as as l,
  i as p,
  at as v,
  au as h
} from "./Dbe4PVAU.js";

function x(n = !1) {
  const s = d,
    e = s.l.u;
  if (!e) return;
  let r = () => v(s.s);
  if (n) {
    let a = 0,
      t = {};
    const _ = h(() => {
      let i = !1;
      const f = s.s;
      for (const o in f) f[o] !== t[o] && (t[o] = f[o], i = !0);
      return i && a++, a
    });
    r = () => p(_)
  }
  e.b.length && g(() => {
    u(s, r), l(e.b)
  }), c(() => {
    const a = m(() => e.m.map(b));
    return () => {
      for (const t of a) typeof t == "function" && t()
    }
  }), e.a.length && c(() => {
    u(s, r), l(e.a)
  })
}

function u(n, s) {
  if (n.l.s)
    for (const e of n.l.s) p(e);
  s()
}
export {
  x as i
};