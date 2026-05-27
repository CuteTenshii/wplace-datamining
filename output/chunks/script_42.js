import {
  F as d,
  an as g,
  D as c,
  I as m,
  ao as b,
  ap as l,
  i as u,
  aq as v,
  ar as h
} from "./Cky4CUzE.js";

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
    r = () => u(_)
  }
  e.b.length && g(() => {
    p(s, r), l(e.b)
  }), c(() => {
    const a = m(() => e.m.map(b));
    return () => {
      for (const t of a) typeof t == "function" && t()
    }
  }), e.a.length && c(() => {
    p(s, r), l(e.a)
  })
}

function p(n, s) {
  if (n.l.s)
    for (const e of n.l.s) u(e);
  s()
}
export {
  x as i
};