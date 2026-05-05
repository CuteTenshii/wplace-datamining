import {
  B as h,
  z as o,
  A as v,
  E as A,
  C as b,
  H as p,
  T as E,
  D as R,
  F as g,
  G as l,
  I as m
} from "./wFsvFKKp.js";
import {
  B as I
} from "./Ce1vLMyo.js";

function d(_, u, T = !1) {
  var i;
  o && (i = m, v());
  var n = new I(_),
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
  d as i
};