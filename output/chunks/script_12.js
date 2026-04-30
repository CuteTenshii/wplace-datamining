import {
  w as h,
  X as k,
  A,
  Y as S,
  Z as T
} from "./BC180BoF.js";

function t(r, i) {
  return r === i || (r == null ? void 0 : r[T]) === i
}

function q(r = {}, i, a, Y) {
  return h(() => {
    var f, s;
    return k(() => {
      f = s, s = [], A(() => {
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