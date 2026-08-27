import {
  t as A,
  N as d,
  S as v,
  ab as i,
  O as E,
  Y as C,
  aB as _,
  aC as N,
  U as M,
  ad as T,
  aw as m,
  aD as p,
  aE as H,
  aF as O,
  aG as b,
  aH as g
} from "./D5GL_E7i.js";

function D(h, w, u = !1, f = !1, t = !1, R = !1) {
  var n = h,
    e = "";
  if (u) {
    var l = h;
    d && (n = v(i(l)))
  }
  A(() => {
    var s = C;
    if (e === (e = w() ?? "")) {
      d && E();
      return
    }
    if (u && !d) {
      s.nodes = null, l.innerHTML = e, e !== "" && _(i(l), l.lastChild);
      return
    }
    if (s.nodes !== null && (N(s.nodes.start, s.nodes.end), s.nodes = null), e !== "") {
      if (d) {
        M.data;
        for (var a = E(), c = a; a !== null && (a.nodeType !== T || a.data !== "");) c = a, a = m(a);
        if (a === null) throw p(), H;
        _(M, c), n = v(a);
        return
      }
      var y = f ? b : t ? g : void 0,
        o = O(f ? "svg" : t ? "math" : "template", y);
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