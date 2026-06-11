import {
  J as h,
  m as w,
  S as x,
  L as E,
  T as L,
  U as O,
  V as Y
} from "./CV6xI6o5.js";

function n(r, f) {
  return r === f || (r == null ? void 0 : r[Y]) === f
}

function B(r = {}, f, i, k) {
  var p = h.r,
    S = L;
  return w(() => {
    var a, t;
    return x(() => {
      a = t, t = [], E(() => {
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
  B as b
};