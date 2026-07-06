import {
  B as S,
  m as T,
  U as x,
  D as B,
  V as D,
  W as E,
  X as O
} from "./Dkgr_Dbt.js";

function n(r, f) {
  return r === f || (r == null ? void 0 : r[O]) === f
}

function A(r = {}, f, i, Y) {
  var p = S.r,
    h = D;
  return T(() => {
    var a, t;
    return x(() => {
      a = t, t = [], B(() => {
        n(i(...t), r) || (f(r, ...t), a && n(i(...a), r) && f(null, ...a))
      })
    }), () => {
      let s = h;
      for (; s !== p && s.parent !== null && s.parent.f & E;) s = s.parent;
      const w = () => {
          t && n(i(...t), r) && f(null, ...t)
        },
        c = s.teardown;
      s.teardown = () => {
        w(), c == null || c()
      }
    }
  }), r
}
export {
  A as b
};