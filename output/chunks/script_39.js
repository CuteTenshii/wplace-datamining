import "./BpFtEuzJ.js";
import {
  p as j,
  i as s,
  h as I,
  C as q,
  d,
  s as v,
  I as N,
  r as l,
  t as b,
  a as x,
  b as Y,
  e as z,
  u as B,
  c as h
} from "./Dwt3-WzD.js";
import {
  s as _
} from "./D0b7Bjov.js";
import {
  i as E
} from "./Cet_iMrh.js";
import {
  d as F,
  C as G
} from "./B5GLusoU.js";
import {
  b as H
} from "./CKMMc_iN.js";
import {
  p as g,
  r as J
} from "./B_Pp_K5E.js";
import "./rVFhRxiC.js";
import {
  r as K,
  m as M,
  a as O
} from "./N2UDkyZk.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "474a06d87b269a074076fdcef11eba6226920584"
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
    y = d(u);
  {
    var A = a => {
      var r = P(),
        c = d(r, !0);
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
    o = d(w),
    C = d(o, !0);
  l(o);
  var k = v(o, 2);
  {
    var R = a => {
      var r = Q(),
        c = d(r, !0);
      l(r), b(() => _(c, e.max - s(f))), x(a, r)
    };
    E(k, a => {
      e.max !== void 0 && a(R)
    })
  }
  l(w), l(u), b(() => _(C, s(n))), H(m, i), x(t, u), Y()
}
export {
  re as L
};