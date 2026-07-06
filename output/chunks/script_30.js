import {
  a0 as o,
  K as _,
  a1 as g,
  au as p,
  L as e,
  aa as v,
  at as i,
  R as l,
  Q as r,
  S as m,
  a8 as E
} from "./Dkgr_Dbt.js";

function x(n, d) {
  let t = null,
    f = e;
  var s;
  if (e) {
    t = m;
    for (var a = E(document.head); a !== null && (a.nodeType !== v || a.data !== n);) a = i(a);
    if (a === null) l(!1);
    else {
      var u = i(a);
      a.remove(), r(u)
    }
  }
  e || (s = document.head.appendChild(o()));
  try {
    _(() => {
      var y = g(() => d(s));
      y.f |= p
    })
  } finally {
    f && (l(!0), r(t))
  }
}
export {
  x as h
};