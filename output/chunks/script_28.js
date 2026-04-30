import {
  a3 as f,
  E as u,
  ax as _,
  ay as o,
  C as a,
  ab as g,
  as as i,
  J as l,
  I as d,
  L as p,
  aa as m
} from "./BC180BoF.js";

function C(n, r) {
  let t = null,
    E = a;
  var s;
  if (a) {
    t = p;
    for (var e = m(document.head); e !== null && (e.nodeType !== g || e.data !== n);) e = i(e);
    if (e === null) l(!1);
    else {
      var y = i(e);
      e.remove(), d(y)
    }
  }
  a || (s = document.head.appendChild(f()));
  try {
    u(() => r(s), _ | o)
  } finally {
    E && (l(!0), d(t))
  }
}
export {
  C as h
};