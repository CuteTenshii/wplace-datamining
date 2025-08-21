import {
  i as _,
  g as o,
  al as f,
  h as a,
  P as u,
  ad as c,
  a2 as d,
  O as i,
  I as s,
  m as r,
  J as y
} from "./CwgCbQ4J.js";
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
    e === null ? i(!1) : e = s(d(e))
  }
  a || (n = document.head.appendChild(_()));
  try {
    o(() => h(n), f)
  } finally {
    l && (i(!0), e = r, s(t))
  }
}
export {
  T as h, p as r
};