import {
  Z as _,
  I as o,
  _ as g,
  as as p,
  J as t,
  a8 as v,
  ar as i,
  P as l,
  O as r,
  Q as m,
  a6 as E
} from "./CxLQz1V2.js";

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