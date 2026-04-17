import {
  t as E,
  A as _,
  B as u,
  aC as g,
  aD as p,
  J as c,
  aa as v,
  ar as w,
  aE as A,
  aF as T,
  aG as y,
  G as D,
  aH as I,
  aI as M,
  aJ as N,
  a9 as b
} from "./Dcbzw1se.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var s = new a.Error().stack;
    s && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[s] = "f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b", a._sentryDebugIdIdentifier = "sentry-dbid-f17f1ae6-0b60-45a6-a327-f4b2b1a2e47b")
  } catch {}
})();

function C(a, s, r = !1, f = !1, R = !1) {
  var i = a,
    t = "";
  E(() => {
    var d = g;
    if (t === (t = s() ?? "")) {
      _ && u();
      return
    }
    if (d.nodes !== null && (p(d.nodes.start, d.nodes.end), d.nodes = null), t !== "") {
      if (_) {
        c.data;
        for (var e = u(), l = e; e !== null && (e.nodeType !== v || e.data !== "");) l = e, e = w(e);
        if (e === null) throw A(), T;
        y(c, l), i = D(e);
        return
      }
      var h = r ? M : f ? N : void 0,
        o = I(r ? "svg" : f ? "math" : "template", h);
      o.innerHTML = t;
      var n = r || f ? o : o.content;
      if (y(b(n), n.lastChild), r || f)
        for (; b(n);) i.before(b(n));
      else i.before(n)
    }
  })
}
export {
  C as h
};