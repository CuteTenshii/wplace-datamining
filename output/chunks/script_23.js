import {
  t as u,
  h as d,
  e as l,
  ag as g,
  ah as y,
  o as h,
  Z as p,
  ac as R,
  ai as w,
  aj as O,
  ak as c,
  Q as b,
  al as E,
  R as f
} from "./DDWIi-vs.js";

function k(m, v, i = !1, _ = !1, N = !1) {
  var n = m,
    t = "";
  u(() => {
    var s = g;
    if (t === (t = v() ?? "")) {
      d && l();
      return
    }
    if (s.nodes_start !== null && (y(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), t !== "") {
      if (d) {
        h.data;
        for (var a = l(), o = a; a !== null && (a.nodeType !== p || a.data !== "");) o = a, a = R(a);
        if (a === null) throw w(), O;
        c(h, o), n = b(a);
        return
      }
      var r = t + "";
      i ? r = `<svg>${r}</svg>` : _ && (r = `<math>${r}</math>`);
      var e = E(r);
      if ((i || _) && (e = f(e)), c(f(e), e.lastChild), i || _)
        for (; f(e);) n.before(f(e));
      else n.before(e)
    }
  })
}
export {
  k as h
};