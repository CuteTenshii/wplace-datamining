import {
  k as t,
  R as S,
  I as T,
  S as h,
  T as c
} from "./5zj5-rPA.js";

function k(r, i) {
  return r === i || (r == null ? void 0 : r[c]) === i
}

function A(r = {}, i, a, q) {
  return t(() => {
    var f, s;
    return S(() => {
      f = s, s = [], T(() => {
        r !== a(...s) && (i(r, ...s), f && k(a(...f), r) && i(null, ...f))
      })
    }), () => {
      h(() => {
        s && k(a(...s), r) && i(null, ...s)
      })
    }
  }), r
}
export {
  A as b
};