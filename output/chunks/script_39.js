import "./B3yE5ox1.js";
import {
  p as j,
  i as s,
  h as I,
  C as q,
  d as l,
  s as v,
  I as N,
  r as d,
  t as b,
  a as x,
  b as Y,
  e as z,
  u as B,
  c as h
} from "./DAkfeAd4.js";
import {
  s as _
} from "./CyysjIuB.js";
import {
  i as E
} from "./Dygw0w-s.js";
import {
  d as F,
  C as G
} from "./DqCCRIxQ.js";
import {
  b as H
} from "./C1DVtz7I.js";
import {
  p as g,
  r as J
} from "./C9nu7S8N.js";
import "./CUn96ABT.js";
import {
  r as K,
  m as M,
  a as O
} from "./DYlETR5a.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
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
  let i = g(e, "value", 15),
    D = g(e, "validate", 15),
    L = g(e, "disabled", 3, !1),
    S = J(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    n = z("");
  const f = B(() => {
    var a;
    return ((a = i()) == null ? void 0 : a.length) ?? 0
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
    e.max !== void 0 && s(f) > e.max && i((a = i()) == null ? void 0 : a.substring(0, e.max))
  });
  var u = U(),
    y = l(u);
  {
    var A = a => {
      var r = P(),
        o = l(r, !0);
      d(r), b(() => _(o, e.label)), x(a, r)
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
    c = l(w),
    C = l(c, !0);
  d(c);
  var k = v(c, 2);
  {
    var R = a => {
      var r = Q(),
        o = l(r, !0);
      d(r), b(() => _(o, e.max - s(f))), x(a, r)
    };
    E(k, a => {
      e.max !== void 0 && a(R)
    })
  }
  d(w), d(u), b(() => _(C, s(n))), H(m, i), x(t, u), Y()
}
export {
  re as L
};