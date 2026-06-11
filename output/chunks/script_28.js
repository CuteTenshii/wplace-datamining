import {
  Z as _,
  z as o,
  _ as g,
  as as p,
  x as t,
  a8 as v,
  ar as i,
  D as l,
  C as r,
  F as m,
  a6 as E
} from "./CV6xI6o5.js";

function C(n, d) {
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
  C as h
};