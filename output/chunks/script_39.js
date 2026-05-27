import {
  t as E,
  q as _,
  v as l,
  ay as y,
  az as A,
  B as h,
  a5 as M,
  am as m,
  aA as w,
  aB as C,
  aC as c,
  z as N,
  aD as T,
  aE as g,
  aF as O,
  a4 as d
} from "./Cky4CUzE.js";

function D(u, v, r = !1, s = !1, R = !1) {
  var i = u,
    n = "";
  E(() => {
    var t = y;
    if (n === (n = v() ?? "")) {
      _ && l();
      return
    }
    if (t.nodes !== null && (A(t.nodes.start, t.nodes.end), t.nodes = null), n !== "") {
      if (_) {
        h.data;
        for (var a = l(), o = a; a !== null && (a.nodeType !== M || a.data !== "");) o = a, a = m(a);
        if (a === null) throw w(), C;
        c(h, o), i = N(a);
        return
      }
      var p = r ? g : s ? O : void 0,
        f = T(r ? "svg" : s ? "math" : "template", p);
      f.innerHTML = n;
      var e = r || s ? f : f.content;
      if (c(d(e), e.lastChild), r || s)
        for (; d(e);) i.before(d(e));
      else i.before(e)
    }
  })
}
export {
  D as h
};