import "./C6F2EJBU.js";
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
} from "./Cvq33p-I.js";
import {
  s as _
} from "./CQJ1gLMQ.js";
import {
  i as E
} from "./DaJK_foC.js";
import {
  d as F,
  C as G
} from "./BwDROv2K.js";
import {
  b as H
} from "./CT-eFD4T.js";
import {
  p as g,
  r as J
} from "./D5saCjJm.js";
import "./Cl6aE3Q9.js";
import {
  r as K,
  m as M,
  a as O
} from "./C1gfqYtY.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "017c00da74943be59fb953c55a7af7db0cfe4436"
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
        o = d(r, !0);
      l(r), b(() => _(o, e.label)), x(a, r)
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
    c = d(w),
    C = d(c, !0);
  l(c);
  var k = v(c, 2);
  {
    var R = a => {
      var r = Q(),
        o = d(r, !0);
      l(r), b(() => _(o, e.max - s(f))), x(a, r)
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