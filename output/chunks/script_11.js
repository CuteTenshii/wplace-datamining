import {
  h as i,
  e as m,
  i as p,
  E as _,
  j as h,
  k as v,
  l,
  m as b,
  o as k,
  q as E
} from "./B6s--CY1.js";

function x(s, d, u) {
  i && m();
  var r = s,
    n, e, a = null,
    f = null;

  function t() {
    e && (E(e), e = null), a && (a.lastChild.remove(), r.before(a), a = null), e = f, f = null
  }
  p(() => {
    if (n !== (n = d())) {
      var c = b();
      if (n) {
        var o = r;
        c && (a = document.createDocumentFragment(), a.append(o = h()), e && l.skipped_effects.add(e)), f = v(() => u(o, n))
      }
      c ? l.add_callback(t) : t()
    }
  }, _), i && (r = k)
}
export {
  x as c
};