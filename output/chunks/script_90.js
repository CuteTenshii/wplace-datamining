import {
  C as d,
  aI as g,
  y as c,
  aJ as l,
  E as m,
  aK as b,
  i as p,
  aL as v,
  aM as h
} from "./D5GL_E7i.js";

function y(n = !1) {
  const s = d,
    e = s.l.u;
  if (!e) return;
  let f = () => v(s.s);
  if (n) {
    let a = 0,
      t = {};
    const _ = h(() => {
      let i = !1;
      const r = s.s;
      for (const o in r) r[o] !== t[o] && (t[o] = r[o], i = !0);
      return i && a++, a
    });
    f = () => p(_)
  }
  e.b.length && g(() => {
    u(s, f), l(e.b)
  }), c(() => {
    const a = m(() => e.m.map(b));
    return () => {
      for (const t of a) typeof t == "function" && t()
    }
  }), e.a.length && c(() => {
    u(s, f), l(e.a)
  })
}

function u(n, s) {
  if (n.l.s)
    for (const e of n.l.s) p(e);
  s()
}
export {
  y as i
};