import {
  t as C,
  J as d,
  O as v,
  a7 as i,
  K as M,
  U as T,
  ax as _,
  ay as m,
  Q as y,
  a9 as p,
  as as w,
  az as N,
  aA as O,
  aB as g,
  aC as H,
  aD as R
} from "./BKnGt6Ki.js";

function L(h, A, u = !1, f = !1, t = !1, b = !1) {
  var n = h,
    e = "";
  if (u) {
    var l = h;
    d && (n = v(i(l)))
  }
  C(() => {
    var s = T;
    if (e === (e = A() ?? "")) {
      d && M();
      return
    }
    if (u && !d) {
      s.nodes = null, l.innerHTML = e, e !== "" && _(i(l), l.lastChild);
      return
    }
    if (s.nodes !== null && (m(s.nodes.start, s.nodes.end), s.nodes = null), e !== "") {
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
      var r = f || t ? o : o.content;
      if (_(i(r), r.lastChild), f || t)
        for (; i(r);) n.before(i(r));
      else n.before(r)
    }
  })
}
export {
  L as h
};