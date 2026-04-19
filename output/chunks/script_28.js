import {
  a2 as y,
  C as u,
  aw as _,
  ax as o,
  A as a,
  aa as g,
  ar as i,
  H as l,
  G as r,
  J as p,
  a9 as m
} from "./B66BVdRM.js";

function C(d, n) {
  let t = null,
    E = a;
  var s;
  if (a) {
    t = p;
    for (var e = m(document.head); e !== null && (e.nodeType !== g || e.data !== d);) e = i(e);
    if (e === null) l(!1);
    else {
      var f = i(e);
      e.remove(), r(f)
    }
  }
  a || (s = document.head.appendChild(y()));
  try {
    u(() => n(s), _ | o)
  } finally {
    E && (l(!0), r(t))
  }
}
export {
  C as h
};