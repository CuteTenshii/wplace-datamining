import {
  K as o,
  L as v,
  J as y,
  M as f,
  N as l,
  O as m,
  P as p,
  Q as i,
  S as T,
  R
} from "./B20EPEO9.js";
import {
  B as A
} from "./CwOkdcsw.js";

function E(d, _, e) {
  var s;
  o && (s = R, v());
  var r = new A(d);
  y(() => {
    var a = _() ?? null;
    if (o) {
      var h = l(s),
        c = h === T,
        u = a !== null;
      if (c !== u) {
        var t = m();
        p(t), r.anchor = t, i(!1), r.ensure(a, a && (n => e(n, a))), i(!0);
        return
      }
    }
    r.ensure(a, a && (n => e(n, a)))
  }, f)
}
export {
  E as c
};