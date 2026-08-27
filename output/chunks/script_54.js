import {
  t as C,
  K as d,
  P as v,
  a8 as i,
  L as E,
  V as T,
  ay as _,
  az as m,
  R as M,
  aa as p,
  at as w,
  aA as N,
  aB as R,
  aC as g,
  aD as H,
  aE as L
} from "./B20EPEO9.js";

function D(h, y, u = !1, f = !1, t = !1, O = !1) {
  var n = h,
    e = "";
  if (u) {
    var l = h;
    d && (n = v(i(l)))
  }
  C(() => {
    var s = T;
    if (e === (e = y() ?? "")) {
      d && E();
      return
    }
    if (u && !d) {
      s.nodes = null, l.innerHTML = e, e !== "" && _(i(l), l.lastChild);
      return
    }
    if (s.nodes !== null && (m(s.nodes.start, s.nodes.end), s.nodes = null), e !== "") {
      if (d) {
        M.data;
        for (var a = E(), c = a; a !== null && (a.nodeType !== p || a.data !== "");) c = a, a = w(a);
        if (a === null) throw N(), R;
        _(M, c), n = v(a);
        return
      }
      var A = f ? H : t ? L : void 0,
        o = g(f ? "svg" : t ? "math" : "template", A);
      o.innerHTML = e;
      var r = f || t ? o : o.content;
      if (_(i(r), r.lastChild), f || t)
        for (; i(r);) n.before(i(r));
      else n.before(r)
    }
  })
}
export {
  D as h
};