import "./Bw2t7C85.js";
import {
  p as j,
  i as s,
  h as I,
  C as q,
  d as i,
  s as v,
  I as N,
  r as l,
  t as b,
  a as x,
  b as Y,
  e as z,
  u as B,
  c as h
} from "./Cu0FD5l7.js";
import {
  s as _
} from "./Cp1uLEad.js";
import {
  i as E
} from "./B6XsWLho.js";
import {
  d as F,
  C as G
} from "./CjbocO6j.js";
import {
  b as H
} from "./qD1GhkFm.js";
import {
  p as g,
  r as J
} from "./BGoOJG7D.js";
import "./DrzYdI9r.js";
import {
  r as K,
  m as M,
  a as O
} from "./8TBblac3.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "338a7b6a-ea7c-4233-945e-0a263a5de64a", t._sentryDebugIdIdentifier = "sentry-dbid-338a7b6a-ea7c-4233-945e-0a263a5de64a")
  } catch {}
})();
var P = h('<legend class="fieldset-legend"> </legend>'),
  Q = h('<span class="text-base-content/80"> </span>'),
  U = h('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function re(t, e) {
  j(e, !0);
  let d = g(e, "value", 15),
    D = g(e, "validate", 15),
    L = g(e, "disabled", 3, !1),
    S = J(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    n = z("");
  const f = B(() => {
    var a;
    return ((a = d()) == null ? void 0 : a.length) ?? 0
  });
  D(T);

  function T() {
    return e.min !== void 0 && s(f) < e.min ? (I(n, e.min === 1 ? K() : M({
      min: e.min
    }), !0), !1) : e.max !== void 0 && s(f) > e.max ? (I(n, O({
      max: e.max
    }), !0), !1) : !0
  }
  q(() => {
    var a;
    e.max !== void 0 && s(f) > e.max && d((a = d()) == null ? void 0 : a.substring(0, e.max))
  });
  var u = U(),
    y = i(u);
  {
    var A = a => {
      var r = P(),
        c = i(r, !0);
      l(r), b(() => _(c, e.label)), x(a, r)
    };
    E(y, a => {
      e.label && a(A)
    })
  }
  var m = v(y, 2);
  N(m), F(m, () => ({
    ...S,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: L(),
    [G]: {
      "textarea-error": !!s(n)
    }
  }));
  var w = v(m, 2),
    o = i(w),
    C = i(o, !0);
  l(o);
  var k = v(o, 2);
  {
    var R = a => {
      var r = Q(),
        c = i(r, !0);
      l(r), b(() => _(c, e.max - s(f))), x(a, r)
    };
    E(k, a => {
      e.max !== void 0 && a(R)
    })
  }
  l(w), l(u), b(() => _(C, s(n))), H(m, d), x(t, u), Y()
}
export {
  re as L
};