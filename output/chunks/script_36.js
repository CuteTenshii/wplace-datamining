import {
  t as E,
  B as b,
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
} from "./jMNCXwTX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7590baa4-ff3c-46ff-bba0-15d80aa5e61b", e._sentryDebugIdIdentifier = "sentry-dbid-7590baa4-ff3c-46ff-bba0-15d80aa5e61b")
  } catch {}
})();

function m(e, n, f = !1, s = !1, N = !1) {
  var i = e,
    d = "";
  E(() => {
    var t = g;
    if (d === (d = n() ?? "")) {
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
      var h = f ? M : s ? C : void 0,
        o = I(f ? "svg" : s ? "math" : "template", h);
      o.innerHTML = d;
      var r = f || s ? o : o.content;
      if (y(l(r), r.lastChild), f || s)
        for (; l(r);) i.before(l(r));
      else i.before(r)
    }
  })
}
export {
  m as h
};