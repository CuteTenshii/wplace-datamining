import {
  t as A,
  z as _,
  A as l,
  aA as E,
  aB as M,
  I as h,
  a8 as y,
  ap as m,
  aC as w,
  aD as C,
  aE as c,
  F as N,
  aF as T,
  aG as g,
  aH as H,
  a7 as d
} from "./wFsvFKKp.js";

function b(u, p, r = !1, s = !1, O = !1) {
  var i = u,
    n = "";
  A(() => {
    var t = E;
    if (n === (n = p() ?? "")) {
      _ && l();
      return
    }
    if (t.nodes !== null && (M(t.nodes.start, t.nodes.end), t.nodes = null), n !== "") {
      if (_) {
        h.data;
        for (var a = l(), o = a; a !== null && (a.nodeType !== y || a.data !== "");) o = a, a = m(a);
        if (a === null) throw w(), C;
        c(h, o), i = N(a);
        return
      }
      var v = r ? g : s ? H : void 0,
        f = T(r ? "svg" : s ? "math" : "template", v);
      f.innerHTML = n;
      var e = r || s ? f : f.content;
      if (c(d(e), e.lastChild), r || s)
        for (; d(e);) i.before(d(e));
      else i.before(e)
    }
  })
}
export {
  b as h
};