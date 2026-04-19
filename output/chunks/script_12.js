import {
  K as h,
  W as k,
  x,
  X as S,
  Y as T
} from "./B66BVdRM.js";

function t(r, i) {
  return r === i || (r == null ? void 0 : r[T]) === i
}

function q(r = {}, i, a, Y) {
  return h(() => {
    var f, s;
    return k(() => {
      f = s, s = [], x(() => {
        r !== a(...s) && (i(r, ...s), f && t(a(...f), r) && i(null, ...f))
      })
    }), () => {
      S(() => {
        s && t(a(...s), r) && i(null, ...s)
      })
    }
  }), r
}
export {
  q as b
};