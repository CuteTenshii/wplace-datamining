import {
  At as e,
  Mt as t,
  Ot as n,
  bt as r,
  lt as i
} from "./R3px7NU1.js";

function a(a) {
  let o = t(n(a()));
  return r(() => {
    if (a()) {
      e(o, !0);
      return
    }
    let t = setTimeout(() => e(o, !1), 300);
    return () => clearTimeout(t)
  }), {
    get current() {
      return i(o)
    }
  }
}
export {
  a as t
};