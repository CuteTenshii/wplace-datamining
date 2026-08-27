import {
  e as s,
  g as u,
  y as n,
  i as a,
  h as r
} from "./D5GL_E7i.js";
const i = 300;

function f(t) {
  let e = s(u(t()));
  return n(() => {
    if (t()) {
      r(e, !0);
      return
    }
    const o = setTimeout(() => r(e, !1), i);
    return () => clearTimeout(o)
  }), {
    get current() {
      return a(e)
    }
  }
}
export {
  f as k
};