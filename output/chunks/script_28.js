import {
  a0 as y,
  z as u,
  av as _,
  aw as o,
  x as t,
  a8 as p,
  ap as i,
  D as l,
  C as d,
  F as g,
  a7 as v
} from "./Dbe4PVAU.js";

function C(n, r) {
  let a = null,
    E = t;
  var s;
  if (t) {
    a = g;
    for (var e = v(document.head); e !== null && (e.nodeType !== p || e.data !== n);) e = i(e);
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