import {
  a0 as o,
  J as _,
  a1 as g,
  au as p,
  K as e,
  aa as v,
  at as i,
  Q as l,
  P as r,
  R as m,
  a8 as E
} from "./m4hpPlb8.js";

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