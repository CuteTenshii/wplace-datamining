import {
  a0 as u,
  B as y,
  au as _,
  av as o,
  z as t,
  a8 as p,
  ap as i,
  G as l,
  F as d,
  I as g,
  a7 as v
} from "./wFsvFKKp.js";

function F(n, r) {
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
  t || (s = document.head.appendChild(u()));
  try {
    y(() => r(s), _ | o)
  } finally {
    E && (l(!0), d(a))
  }
}
export {
  F as h
};