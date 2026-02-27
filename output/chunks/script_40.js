import "./BLuq94kG.js";
import {
  p as j,
  i as s,
  h as I,
  C as q,
  d,
  s as v,
  F,
  r as l,
  t as b,
  a as x,
  b as N,
  e as Y,
  u as z,
  c as h
} from "./BGZizgo7.js";
import {
  s as _
} from "./BYUo2UjJ.js";
import {
  i as E
} from "./DclWce1c.js";
import {
  f as B,
  C as G
} from "./Bhr_YgHq.js";
import {
  b as H
} from "./DK8uREdl.js";
import {
  p as g,
  r as J
} from "./B9brejRs.js";
import "./BIwJezZo.js";
import {
  r as K,
  m as M,
  a as O
} from "./DBeK6l6f.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6e283efa-6353-4045-b521-827dea51a486", t._sentryDebugIdIdentifier = "sentry-dbid-6e283efa-6353-4045-b521-827dea51a486")
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
    n = Y("");
  const f = z(() => {
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
  F(m), B(m, () => ({
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
  l(w), l(u), b(() => _(C, s(n))), H(m, i), x(t, u), N()
}
export {
  re as L
};