import {
  w as h,
  q as o,
  v,
  E as A,
  x as b,
  H as p,
  Q as E,
  y as R,
  z as g,
  A as l,
  B as m
} from "./Cky4CUzE.js";
import {
  B as N
} from "./BYJSyRh2.js";

function x(_, u, c = !1) {
  var i;
  o && (i = m, v());
  var n = new N(_),
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
  x as i
};