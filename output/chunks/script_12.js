import {
  m as h,
  U as k,
  L,
  V as S,
  W as T
} from "./Dbe4PVAU.js";

function t(r, i) {
  return r === i || (r == null ? void 0 : r[T]) === i
}

function x(r = {}, i, a, c) {
  return h(() => {
    var f, s;
    return k(() => {
      f = s, s = [], L(() => {
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
  x as b
};