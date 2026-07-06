import {
  L as o,
  M as v,
  K as y,
  N as T,
  O as f,
  P as l,
  Q as m,
  R as i,
  T as p,
  S as R
} from "./Dkgr_Dbt.js";
import {
  B as A
} from "./6BB2hkhT.js";

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