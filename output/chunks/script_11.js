import {
  N as o,
  O as v,
  M as y,
  P as T,
  Q as f,
  R as l,
  S as m,
  T as i,
  V as p,
  U as R
} from "./D5GL_E7i.js";
import {
  B as A
} from "./yJVs3h_J.js";

function E(d, _, e) {
  var s;
  o && (s = R, v());
  var r = new A(d);
  y(() => {
    var a = _() ?? null;
    if (o) {
      var h = f(s),
        c = h === p,
        u = a !== null;
      if (c !== u) {
        var t = l();
        m(t), r.anchor = t, i(!1), r.ensure(a, a && (n => e(n, a))), i(!0);
        return
      }
    }
    r.ensure(a, a && (n => e(n, a)))
  }, T)
}
export {
  E as c
};