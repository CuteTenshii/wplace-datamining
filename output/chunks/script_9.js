import {
  E as h,
  C as o,
  D as v,
  F as b,
  G as p,
  K as A,
  W as E,
  H as R,
  I as g,
  J as l,
  L as m
} from "./C_-299ry.js";
import {
  B as I
} from "./cxcqUcOT.js";

function d(_, u, c = !1) {
  var i;
  o && (i = m, v());
  var n = new I(_),
    T = c ? b : 0;

  function t(a, r) {
    if (o) {
      var s = p(i),
        e;
      if (s === A ? e = 0 : s === E ? e = !1 : e = parseInt(s.substring(1)), a !== e) {
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