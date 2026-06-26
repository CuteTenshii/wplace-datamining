import {
  z as h,
  m as w,
  S as x,
  B,
  T as E,
  U as O,
  V as Y
} from "./DmPVOt2G.js";

function n(r, f) {
  return r === f || (r == null ? void 0 : r[Y]) === f
}

function A(r = {}, f, i, k) {
  var p = h.r,
    S = E;
  return w(() => {
    var a, t;
    return x(() => {
      a = t, t = [], B(() => {
        n(i(...t), r) || (f(r, ...t), a && n(i(...a), r) && f(null, ...a))
      })
    }), () => {
      let s = S;
      for (; s !== p && s.parent !== null && s.parent.f & O;) s = s.parent;
      const T = () => {
          t && n(i(...t), r) && f(null, ...t)
        },
        c = s.teardown;
      s.teardown = () => {
        T(), c == null || c()
      }
    }
  }), r
}
export {
  A as b
};