import {
  Nt as e,
  jt as t,
  kt as n,
  ut as r,
  xt as i
} from "./D2z8HFb7.js";

function a(a) {
  let o = e(n(a()));
  return i(() => {
    if (a()) {
      t(o, !0);
      return
    }
    let e = setTimeout(() => t(o, !1), 300);
    return () => clearTimeout(e)
  }), {
    get current() {
      return r(o)
    }
  }
}
export {
  a as t
};