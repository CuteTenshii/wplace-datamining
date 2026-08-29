import {
  Dt as e,
  ct as t,
  jt as n,
  kt as r,
  yt as i
} from "./D6uuD926.js";

function a(a) {
  let o = n(e(a()));
  return i(() => {
    if (a()) {
      r(o, !0);
      return
    }
    let e = setTimeout(() => r(o, !1), 300);
    return () => clearTimeout(e)
  }), {
    get current() {
      return t(o)
    }
  }
}
export {
  a as t
};