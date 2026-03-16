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
} from "./CEUoH-Z0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "a9a4f49c-5753-4b84-844f-721621b67db7", e._sentryDebugIdIdentifier = "sentry-dbid-a9a4f49c-5753-4b84-844f-721621b67db7")
  } catch {}
})();

function S(e, s, r = !1, f = !1, R = !1) {
  var i = e,
    d = "";
  E(() => {
    var t = g;
    if (d === (d = s() ?? "")) {
      b && c();
      return
    }
    if (t.nodes !== null && (p(t.nodes.start, t.nodes.end), t.nodes = null), d !== "") {
      if (b) {
        u.data;
        for (var a = c(), _ = a; a !== null && (a.nodeType !== v || a.data !== "");) _ = a, a = w(a);
        if (a === null) throw T(), A;
        y(u, _), i = D(a);
        return
      }
      var h = r ? M : f ? N : void 0,
        o = I(r ? "svg" : f ? "math" : "template", h);
      o.innerHTML = d;
      var n = r || f ? o : o.content;
      if (y(l(n), n.lastChild), r || f)
        for (; l(n);) i.before(l(n));
      else i.before(n)
    }
  })
}
export {
  S as h
};