import {
  Y as y,
  w as u,
  as as _,
  at as o,
  q as t,
  a5 as g,
  am as i,
  A as l,
  z as d,
  B as m,
  a4 as p
} from "./5zj5-rPA.js";

function C(n, r) {
  let a = null,
    E = t;
  var s;
  if (t) {
    a = m;
    for (var e = p(document.head); e !== null && (e.nodeType !== g || e.data !== n);) e = i(e);
    if (e === null) l(!1);
    else {
      var f = i(e);
      e.remove(), d(f)
    }
  }
  t || (s = document.head.appendChild(y()));
  try {
    u(() => r(s), _ | o)
  } finally {
    E && (l(!0), d(a))
  }
}
export {
  C as h
};