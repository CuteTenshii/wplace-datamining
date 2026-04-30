import {
  t as E,
  C as _,
  D as l,
  aD as M,
  aE as y,
  L as h,
  ab as A,
  as as m,
  aF as w,
  aG as C,
  aH as c,
  I as N,
  aI as T,
  aJ as b,
  aK as g,
  aa as d
} from "./BC180BoF.js";

function O(u, v, r = !1, s = !1, D = !1) {
  var i = u,
    n = "";
  E(() => {
    var t = M;
    if (n === (n = v() ?? "")) {
      _ && l();
      return
    }
    if (t.nodes !== null && (y(t.nodes.start, t.nodes.end), t.nodes = null), n !== "") {
      if (_) {
        h.data;
        for (var a = l(), o = a; a !== null && (a.nodeType !== A || a.data !== "");) o = a, a = m(a);
        if (a === null) throw w(), C;
        c(h, o), i = N(a);
        return
      }
      var p = r ? b : s ? g : void 0,
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
  O as h
};