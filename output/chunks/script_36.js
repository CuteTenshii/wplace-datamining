import {
  t as E,
  B as _,
  C as u,
  aC as g,
  aD as p,
  K as c,
  ab as v,
  ar as w,
  aE as T,
  aF as A,
  aG as y,
  H as D,
  aH as I,
  aI as M,
  aJ as C,
  aa as l
} from "./DjeFwfzX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7590baa4-ff3c-46ff-bba0-15d80aa5e61b", e._sentryDebugIdIdentifier = "sentry-dbid-7590baa4-ff3c-46ff-bba0-15d80aa5e61b")
  } catch {}
})();

function m(e, d, f = !1, n = !1, N = !1) {
  var i = e,
    s = "";
  E(() => {
    var t = g;
    if (s === (s = d() ?? "")) {
      _ && u();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), s !== "") {
      if (_) {
        c.data;
        for (var a = u(), b = a; a !== null && (a.nodeType !== v || a.data !== "");) b = a, a = w(a);
        if (a === null) throw T(), A;
        y(c, b), i = D(a);
        return
      }
      var h = f ? M : n ? C : void 0,
        o = I(f ? "svg" : n ? "math" : "template", h);
      o.innerHTML = s;
      var r = f || n ? o : o.content;
      if (y(l(r), r.lastChild), f || n)
        for (; l(r);) i.before(l(r));
      else i.before(r)
    }
  })
}
export {
  m as h
};