import {
  Ft as e,
  Lt as t,
  Nt as n,
  pt as r,
  wt as i
} from "./DXDHrD2o.js";

function a(a) {
  let o = t(n(a()));
  return i(() => {
    if (a()) {
      e(o, !0);
      return
    }
    let t = setTimeout(() => e(o, !1), 300);
    return () => clearTimeout(t)
  }), {
    get current() {
      return r(o)
    }
  }
}
export {
  a as t
};