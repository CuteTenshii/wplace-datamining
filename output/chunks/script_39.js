import "./DfSPqPjB.js";
import {
  p as C,
  j as i,
  u as R,
  i as I,
  e as q,
  v as N,
  f as y,
  d,
  s as b,
  x as Y,
  r as n,
  t as v,
  b as x,
  c as z
} from "./BX08WKHH.js";
import {
  s as _
} from "./BuYVmOfq.js";
import {
  i as T
} from "./WtIPnxxX.js";
import {
  f as B,
  C as F
} from "./D1NSdIK5.js";
import {
  b as G
} from "./DNdyIOqY.js";
import {
  p as g,
  r as H
} from "./BdjyGa6-.js";
import "./DvwOtY4M.js";
import {
  r as J,
  m as K,
  a as M
} from "./BGn9s_Id.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "021ee522-ec3f-4cbe-9cc6-f7df7685fa26", t._sentryDebugIdIdentifier = "sentry-dbid-021ee522-ec3f-4cbe-9cc6-f7df7685fa26")
  })()
} catch {}
var O = y('<legend class="fieldset-legend"> </legend>'),
  P = y('<span class="text-base-content/80"> </span>'),
  Q = y('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function re(t, e) {
  C(e, !0);
  let s = g(e, "value", 15),
    E = g(e, "validate", 15),
    D = g(e, "disabled", 3, !1),
    L = H(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    l = q("");
  const f = R(() => {
    var a;
    return ((a = s()) == null ? void 0 : a.length) ?? 0
  });
  E(S);

  function S() {
    return e.min !== void 0 && i(f) < e.min ? (I(l, e.min === 1 ? J() : K({
      min: e.min
    }), !0), !1) : e.max !== void 0 && i(f) > e.max ? (I(l, M({
      max: e.max
    }), !0), !1) : !0
  }
  N(() => {
    var a;
    e.max !== void 0 && i(f) > e.max && s((a = s()) == null ? void 0 : a.substring(0, e.max))
  });
  var c = Q(),
    h = d(c);
  {
    var A = a => {
      var r = O(),
        m = d(r, !0);
      n(r), v(() => _(m, e.label)), x(a, r)
    };
    T(h, a => {
      e.label && a(A)
    })
  }
  var o = b(h, 2);
  Y(o), B(o, () => ({
    ...L,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: D(),
    [F]: {
      "textarea-error": !!i(l)
    }
  }));
  var w = b(o, 2),
    u = d(w),
    j = d(u, !0);
  n(u);
  var k = b(u, 2);
  {
    var p = a => {
      var r = P(),
        m = d(r, !0);
      n(r), v(() => _(m, e.max - i(f))), x(a, r)
    };
    T(k, a => {
      e.max !== void 0 && a(p)
    })
  }
  n(w), n(c), v(() => _(j, i(l))), G(o, s), x(t, c), z()
}
export {
  re as L
};