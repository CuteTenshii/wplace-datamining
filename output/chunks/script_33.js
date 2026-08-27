import {
  a3 as o,
  M as _,
  a4 as g,
  ax as p,
  N as a,
  ad as v,
  aw as i,
  T as l,
  S as r,
  U as m,
  ab as E
} from "./D5GL_E7i.js";

function x(d, n) {
  let t = null,
    f = a;
  var s;
  if (a) {
    t = m;
    for (var e = E(document.head); e !== null && (e.nodeType !== v || e.data !== d);) e = i(e);
    if (e === null) l(!1);
    else {
      var y = i(e);
      e.remove(), r(y)
    }
  }
  a || (s = document.head.appendChild(o()));
  try {
    _(() => {
      var u = g(() => n(s));
      u.f |= p
    })
  } finally {
    f && (l(!0), r(t))
  }
}
export {
  x as h
};