import {
  j as _,
  i as o,
  av as f,
  h as a,
  Z as c,
  an as u,
  ac as d,
  Y as i,
  Q as s,
  o as r,
  R as y
} from "./DDWIi-vs.js";
let e;

function p() {
  e = void 0
}

function T(h) {
  let n = null,
    l = a;
  var t;
  if (a) {
    for (n = r, e === void 0 && (e = y(document.head)); e !== null && (e.nodeType !== c || e.data !== u);) e = d(e);
    e === null ? i(!1) : e = s(d(e))
  }
  a || (t = document.head.appendChild(_()));
  try {
    o(() => h(t), f)
  } finally {
    l && (i(!0), e = r, s(n))
  }
}
export {
  T as h, p as r
};