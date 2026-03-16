import {
  t as E,
  k as _,
  l as c,
  aD as g,
  aE as p,
  w as u,
  ab as v,
  ar as w,
  aF as T,
  aG as A,
  aH as y,
  q as D,
  aI as I,
  aJ as M,
  aK as N,
  aa as l
} from "./Df0Hz134.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "a9a4f49c-5753-4b84-844f-721621b67db7", a._sentryDebugIdIdentifier = "sentry-dbid-a9a4f49c-5753-4b84-844f-721621b67db7")
  } catch {}
})();

function S(a, n, r = !1, s = !1, R = !1) {
  var i = a,
    f = "";
  E(() => {
    var t = g;
    if (f === (f = n() ?? "")) {
      _ && c();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), f !== "") {
      if (_) {
        u.data;
        for (var e = c(), b = e; e !== null && (e.nodeType !== v || e.data !== "");) b = e, e = w(e);
        if (e === null) throw T(), A;
        y(u, b), i = D(e);
        return
      }
      var h = r ? M : s ? N : void 0,
        o = I(r ? "svg" : s ? "math" : "template", h);
      o.innerHTML = f;
      var d = r || s ? o : o.content;
      if (y(l(d), d.lastChild), r || s)
        for (; l(d);) i.before(l(d));
      else i.before(d)
    }
  })
}
export {
  S as h
};