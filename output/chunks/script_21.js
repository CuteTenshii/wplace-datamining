import {
  t as u,
  h as o,
  e as l,
  a1 as g,
  a5 as y,
  m as h,
  K as p,
  Z as w,
  a6 as O,
  a7 as R,
  a8 as m,
  C as b,
  a9 as C,
  D as f
} from "./BUjsOn5w.js";

function N(c, v, i = !1, _ = !1, D = !1) {
  var n = c,
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
        for (var a = l(), d = a; a !== null && (a.nodeType !== p || a.data !== "");) d = a, a = w(a);
        if (a === null) throw O(), R;
        m(h, d), n = b(a);
        return
      }
      var r = t + "";
      i ? r = `<svg>${r}</svg>` : _ && (r = `<math>${r}</math>`);
      var e = C(r);
      if ((i || _) && (e = f(e)), m(f(e), e.lastChild), i || _)
        for (; f(e);) n.before(f(e));
      else n.before(e)
    }
  })
}
export {
  N as h
};