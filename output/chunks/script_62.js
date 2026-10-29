import {
  At as e,
  Bt as t,
  Ct as n,
  M as r,
  Mt as i,
  Q as a,
  Y as o,
  a as s,
  cn as c,
  en as l,
  et as u,
  j as d,
  jt as f,
  nt as p,
  pt as m,
  tn as h
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  t as g
} from "./WjPvS9le.js";
import {
  i as _
} from "./DIjPQh1S.js";
var v = p(`<span> </span>`),
  y = p(`<span> </span> <!>`, 1);

function b(p, b) {
  h(b, !0);
  let x = s(b, `showId`, 3, !0),
    S = s(b, `class`, 3, ``),
    C = t(() => {
      var e;
      return ((e = b.equippedNameCosmetic) == null || (e = e.resolved) == null ? void 0 : e.text) ?? ``
    }),
    w = t(() => _(b.id ?? 0));
  g(p, {
    get userId() {
      return b.id
    },
    get class() {
      return `inline-flex items-baseline gap-1.5 font-medium ${S()??``}`
    },
    children: (t, s) => {
      var l = y(),
        p = f(l),
        h = e(p, !0);
      c(p);
      var g = i(p, 2),
        _ = t => {
          var i = v(),
            o = e(i);
          c(i), n(() => {
            r(i, 1, `${m(w)??``} ${b.idClass??``??``}`), a(o, `#${b.id??``}`)
          }), u(t, i)
        };
      o(g, e => {
        x() && e(_)
      }), n(() => {
        r(p, 1, `inline-block ${(m(C)?m(w):``)??``}`), d(p, m(C)), a(h, b.name)
      }), u(t, l)
    },
    $$slots: {
      default: !0
    }
  }), l()
}
export {
  b as t
};