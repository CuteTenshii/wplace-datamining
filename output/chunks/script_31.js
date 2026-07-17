import {
  _,
  I as o,
  a0 as g,
  at as p,
  J as t,
  a9 as v,
  as as i,
  P as l,
  O as r,
  Q as m,
  a7 as E
} from "./BKnGt6Ki.js";

function x(n, d) {
  let a = null,
    f = t;
  var s;
  if (t) {
    a = m;
    for (var e = E(document.head); e !== null && (e.nodeType !== v || e.data !== n);) e = i(e);
    if (e === null) l(!1);
    else {
      var y = i(e);
      e.remove(), r(y)
    }
  }
  t || (s = document.head.appendChild(_()));
  try {
    o(() => {
      var u = g(() => d(s));
      u.f |= p
    })
  } finally {
    f && (l(!0), r(a))
  }
}
export {
  x as h
};