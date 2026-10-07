import {
  D as e,
  Dt as t,
  Et as n,
  G as r,
  It as i,
  J as a,
  O as o,
  Ot as s,
  Q as c,
  X as l,
  Xt as u,
  Zt as d,
  a as f,
  bt as p,
  in as m,
  ut as h
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as g
} from "./BztibQ2i.js";
import {
  i as _
} from "./Bb_kc8p6.js";
var v = c(`<span> </span>`),
  y = c(`<span> </span> <!>`, 1);

function b(c, b) {
  d(b, !0);
  let x = f(b, `showId`, 3, !0),
    S = f(b, `class`, 3, ``),
    C = i(() => {
      var e;
      return ((e = b.equippedNameCosmetic) == null || (e = e.resolved) == null ? void 0 : e.text) ?? ``
    }),
    w = i(() => _(b.id ?? 0));
  g(c, {
    get userId() {
      return b.id
    },
    get class() {
      return `inline-flex items-baseline gap-1.5 font-medium ${S()??``}`
    },
    children: (i, c) => {
      var u = y(),
        d = t(u),
        f = n(d, !0);
      m(d);
      var g = s(d, 2),
        _ = e => {
          var t = v(),
            r = n(t);
          m(t), p(() => {
            o(t, 1, `${h(w)??``} ${b.idClass??``??``}`), a(r, `#${b.id??``}`)
          }), l(e, t)
        };
      r(g, e => {
        x() && e(_)
      }), p(() => {
        o(d, 1, `inline-block ${(h(C)?h(w):``)??``}`), e(d, h(C)), a(f, b.name)
      }), l(i, u)
    },
    $$slots: {
      default: !0
    }
  }), u()
}
export {
  b as t
};