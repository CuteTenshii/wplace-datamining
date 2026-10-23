import {
  Nt as e,
  bt as t,
  jt as n,
  kt as r,
  lt as i
} from "./DTpxYwnW.js";

function a(a) {
  let o = e(r(a()));
  return t(() => {
    if (a()) {
      n(o, !0);
      return
    }
    let e = setTimeout(() => n(o, !1), 300);
    return () => clearTimeout(e)
  }), {
    get current() {
      return i(o)
    }
  }
}
export {
  a as t
};