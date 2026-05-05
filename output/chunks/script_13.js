import {
  o as h,
  U as k,
  x,
  V as S,
  W as T
} from "./wFsvFKKp.js";

function t(r, i) {
  return r === i || (r == null ? void 0 : r[T]) === i
}

function A(r = {}, i, a, c) {
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
  A as b
};