import {
  t as E,
  k as b,
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
} from "./CA9fhze-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a9a4f49c-5753-4b84-844f-721621b67db7", e._sentryDebugIdIdentifier = "sentry-dbid-a9a4f49c-5753-4b84-844f-721621b67db7")
  } catch {}
})();

function S(e, n, r = !1, s = !1, R = !1) {
  var i = e,
    f = "";
  E(() => {
    var t = g;
    if (f === (f = n() ?? "")) {
      b && c();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), f !== "") {
      if (b) {
        u.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== v || a.data !== "");) _ = a, a = w(a);
        if (a === null) throw T(), A;
        y(u, _), i = D(a);
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