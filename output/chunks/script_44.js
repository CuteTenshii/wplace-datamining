import {
  t as T,
  J as d,
  O as v,
  a6 as i,
  K as M,
  T as C,
  ax as _,
  ay as m,
  Q as y,
  a8 as p,
  ar as w,
  az as N,
  aA as O,
  aB as g,
  aC as H,
  aD as R
} from "./BIlwexl9.js";

function L(h, A, u = !1, f = !1, t = !1, b = !1) {
  var n = h,
    e = "";
  if (u) {
    var l = h;
    d && (n = v(i(l)))
  }
  T(() => {
    var r = C;
    if (e === (e = A() ?? "")) {
      d && M();
      return
    }
    if (u && !d) {
      r.nodes = null, l.innerHTML = e, e !== "" && _(i(l), l.lastChild);
      return
    }
    if (r.nodes !== null && (m(r.nodes.start, r.nodes.end), r.nodes = null), e !== "") {
      if (d) {
        y.data;
        for (var a = M(), c = a; a !== null && (a.nodeType !== p || a.data !== "");) c = a, a = w(a);
        if (a === null) throw N(), O;
        _(y, c), n = v(a);
        return
      }
      var E = f ? H : t ? R : void 0,
        o = g(f ? "svg" : t ? "math" : "template", E);
      o.innerHTML = e;
      var s = f || t ? o : o.content;
      if (_(i(s), s.lastChild), f || t)
        for (; i(s);) n.before(i(s));
      else n.before(s)
    }
  })
}
export {
  L as h
};