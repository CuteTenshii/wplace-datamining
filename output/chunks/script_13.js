import {
  z as w,
  T as S,
  U as x,
  B,
  V as E,
  W as O,
  X as Y
} from "./B20EPEO9.js";

function n(r, f) {
  return r === f || (r == null ? void 0 : r[Y]) === f
}

function A(r = {}, f, i, k) {
  var p = w.r,
    T = E;
  return S(() => {
    var a, t;
    return x(() => {
      a = t, t = [], B(() => {
        n(i(...t), r) || (f(r, ...t), a && n(i(...a), r) && f(null, ...a))
      })
    }), () => {
      let s = T;
      for (; s !== p && s.parent !== null && s.parent.f & O;) s = s.parent;
      const h = () => {
          t && n(i(...t), r) && f(null, ...t)
        },
        c = s.teardown;
      s.teardown = () => {
        h(), c == null || c()
      }
    }
  }), r
}
export {
  A as b
};