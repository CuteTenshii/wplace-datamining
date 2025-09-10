import {
  t as u,
  h as o,
  e as l,
  ad as g,
  ae as y,
  o as h,
  W as p,
  a9 as O,
  af as w,
  ag as R,
  ah as c,
  O as b,
  ai as E,
  P as f
} from "./B0_b_ZC0.js";

function C(m, v, i = !1, _ = !1, N = !1) {
  var d = m,
    t = "";
  u(() => {
    var s = g;
    if (t === (t = v() ?? "")) {
      o && l();
      return
    }
    if (s.nodes_start !== null && (y(s.nodes_start, s.nodes_end), s.nodes_start = s.nodes_end = null), t !== "") {
      if (o) {
        h.data;
        for (var a = l(), n = a; a !== null && (a.nodeType !== p || a.data !== "");) n = a, a = O(a);
        if (a === null) throw w(), R;
        c(h, n), d = b(a);
        return
      }
      var r = t + "";
      i ? r = `<svg>${r}</svg>` : _ && (r = `<math>${r}</math>`);
      var e = E(r);
      if ((i || _) && (e = f(e)), c(f(e), e.lastChild), i || _)
        for (; f(e);) d.before(f(e));
      else d.before(e)
    }
  })
}
export {
  C as h
};