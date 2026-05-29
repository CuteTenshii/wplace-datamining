import {
  z as h,
  x as o,
  y as v,
  E as A,
  A as b,
  H as p,
  T as E,
  B as R,
  C as g,
  D as l,
  F as m
} from "./Dbe4PVAU.js";
import {
  B as N
} from "./D4oMlC_L.js";

function x(_, u, T = !1) {
  var i;
  o && (i = m, v());
  var n = new N(_),
    c = T ? A : 0;

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
  }, c)
}
export {
  x as i
};