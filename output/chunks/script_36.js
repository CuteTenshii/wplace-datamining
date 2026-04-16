import {
  t as E,
  B as _,
  C as c,
  aC as g,
  aD as p,
  K as u,
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
} from "./CJNfechn.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "7590baa4-ff3c-46ff-bba0-15d80aa5e61b", a._sentryDebugIdIdentifier = "sentry-dbid-7590baa4-ff3c-46ff-bba0-15d80aa5e61b")
  } catch {}
})();

function m(a, r, d = !1, n = !1, N = !1) {
  var i = a,
    s = "";
  E(() => {
    var t = g;
    if (s === (s = r() ?? "")) {
      _ && c();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), s !== "") {
      if (_) {
        u.data;
        for (var e = c(), b = e; e !== null && (e.nodeType !== v || e.data !== "");) b = e, e = w(e);
        if (e === null) throw T(), A;
        y(u, b), i = D(e);
        return
      }
      var h = d ? M : n ? C : void 0,
        o = I(d ? "svg" : n ? "math" : "template", h);
      o.innerHTML = s;
      var f = d || n ? o : o.content;
      if (y(l(f), f.lastChild), d || n)
        for (; l(f);) i.before(l(f));
      else i.before(f)
    }
  })
}
export {
  m as h
};