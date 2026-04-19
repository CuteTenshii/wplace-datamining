import {
  C as h,
  A as o,
  B as v,
  E as A,
  D as b,
  I as p,
  V as E,
  F as R,
  G as g,
  H as l,
  J as m
} from "./B66BVdRM.js";
import {
  B as I
} from "./BMlge2Gf.js";

function d(_, u, c = !1) {
  var i;
  o && (i = m, v());
  var n = new I(_),
    T = c ? A : 0;

  function t(a, r) {
    if (o) {
      var s = b(i),
        e;
      if (s === p ? e = 0 : s === E ? e = !1 : e = parseInt(s.substring(1)), a !== e) {
        var f = R();
        g(f), n.anchor = f, l(!1), n.ensure(a, r), l(!0);
        return
      }
    }
    n.ensure(a, r)
  }
  h(() => {
    var a = !1;
    u((r, s = 0) => {
      a = !0, t(s, r)
    }), a || t(!1, null)
  }, T)
}
export {
  d as i
};