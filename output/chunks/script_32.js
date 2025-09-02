import {
  v as u,
  w as h,
  x as m,
  i as v,
  h as o,
  e as p,
  j as k,
  k as b,
  l as y,
  m as g,
  o as x,
  U as I,
  q
} from "./DDWIi-vs.js";

function N(i, l, _) {
  o && p();
  var e = i,
    r = I,
    n, t, a = null,
    d = u() ? h : m;

  function s() {
    n && q(n), a !== null && (a.lastChild.remove(), e.before(a), a = null), n = t
  }
  v(() => {
    if (d(r, r = l())) {
      var f = e,
        c = g();
      c && (a = document.createDocumentFragment(), a.append(f = k())), t = b(() => _(f)), c ? y.add_callback(s) : s()
    }
  }), o && (e = x)
}
export {
  N as k
};