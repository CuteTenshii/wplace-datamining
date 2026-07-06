import {
  t as C,
  L as d,
  Q as v,
  a8 as i,
  M,
  V as T,
  ay as _,
  az as m,
  S as E,
  aa as p,
  at as w,
  aA as N,
  aB as g,
  aC as H,
  aD as L,
  aE as O
} from "./Dkgr_Dbt.js";

function b(h, y, u = !1, f = !1, t = !1, R = !1) {
  var n = h,
    e = "";
  if (u) {
    var l = h;
    d && (n = v(i(l)))
  }
  C(() => {
    var s = T;
    if (e === (e = y() ?? "")) {
      d && M();
      return
    }
    if (u && !d) {
      s.nodes = null, l.innerHTML = e, e !== "" && _(i(l), l.lastChild);
      return
    }
    if (s.nodes !== null && (m(s.nodes.start, s.nodes.end), s.nodes = null), e !== "") {
      if (d) {
        E.data;
        for (var a = M(), c = a; a !== null && (a.nodeType !== p || a.data !== "");) c = a, a = w(a);
        if (a === null) throw N(), g;
        _(E, c), n = v(a);
        return
      }
      var A = f ? L : t ? O : void 0,
        o = H(f ? "svg" : t ? "math" : "template", A);
      o.innerHTML = e;
      var r = f || t ? o : o.content;
      if (_(i(r), r.lastChild), f || t)
        for (; i(r);) n.before(i(r));
      else n.before(r)
    }
  })
}
export {
  b as h
};