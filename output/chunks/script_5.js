import {
  j as _,
  i as o,
  as as f,
  h as a,
  W as u,
  ak as c,
  a9 as d,
  V as s,
  O as i,
  o as r,
  P as y
} from "./apxRKl0u.js";
let e;

function p() {
  e = void 0
}

function T(h) {
  let t = null,
    l = a;
  var n;
  if (a) {
    for (t = r, e === void 0 && (e = y(document.head)); e !== null && (e.nodeType !== u || e.data !== c);) e = d(e);
    e === null ? s(!1) : e = i(d(e))
  }
  a || (n = document.head.appendChild(_()));
  try {
    o(() => h(n), f)
  } finally {
    l && (s(!0), e = r, i(t))
  }
}
export {
  T as h, p as r
};