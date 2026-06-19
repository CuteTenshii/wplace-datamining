import {
  t as E,
  x as d,
  C as v,
  a6 as i,
  y,
  T,
  ax as _,
  ay as m,
  F as M,
  a8 as p,
  ar as w,
  az as N,
  aA as g,
  aB as H,
  aC as O,
  aD as R
} from "./CV6xI6o5.js";

function L(h, A, u = !1, f = !1, t = !1, b = !1) {
  var n = h,
    e = "";
  if (u) {
    var l = h;
    d && (n = v(i(l)))
  }
  E(() => {
    var r = T;
    if (e === (e = A() ?? "")) {
      d && y();
      return
    }
    if (u && !d) {
      r.nodes = null, l.innerHTML = e, e !== "" && _(i(l), l.lastChild);
      return
    }
    if (r.nodes !== null && (m(r.nodes.start, r.nodes.end), r.nodes = null), e !== "") {
      if (d) {
        M.data;
        for (var a = y(), c = a; a !== null && (a.nodeType !== p || a.data !== "");) c = a, a = w(a);
        if (a === null) throw N(), g;
        _(M, c), n = v(a);
        return
      }
      var C = f ? O : t ? R : void 0,
        o = H(f ? "svg" : t ? "math" : "template", C);
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