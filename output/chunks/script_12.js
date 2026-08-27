import {
  C as E,
  W as S,
  X as T,
  E as Y,
  Y as x,
  Z as O,
  _ as k
} from "./D5GL_E7i.js";

function n(r, f) {
  return r === f || (r == null ? void 0 : r[k]) === f
}

function C(r = {}, f, i, A) {
  var p = E.r,
    h = x;
  return S(() => {
    var a, t;
    return T(() => {
      a = t, t = [], Y(() => {
        n(i(...t), r) || (f(r, ...t), a && n(i(...a), r) && f(null, ...a))
      })
    }), () => {
      let s = h;
      for (; s !== p && s.parent !== null && s.parent.f & O;) s = s.parent;
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
  C as b
};