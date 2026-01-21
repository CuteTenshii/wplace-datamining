import "./NJ1wl9Ag.js";
import {
  p as C,
  j as r,
  u as R,
  i as I,
  e as q,
  v as z,
  f as y,
  d as i,
  s as c,
  z as N,
  r as n,
  t as v,
  b as x,
  c as Y
} from "./8X9bXL-a.js";
import {
  s as _
} from "./DccA2BST.js";
import {
  i as T
} from "./DX5d1P7w.js";
import {
  d as B,
  C as F
} from "./dddymV92.js";
import {
  b as G
} from "./C5hk-IyE.js";
import {
  p as g,
  r as H
} from "./CFd8M3Ff.js";
import "./lNmZA2C_.js";
import {
  r as J,
  m as K,
  a as M
} from "./Ct1CB4vK.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d444f69e-4652-49b5-9e8d-9d86836deb1b", t._sentryDebugIdIdentifier = "sentry-dbid-d444f69e-4652-49b5-9e8d-9d86836deb1b")
  })()
} catch {}
var O = y('<legend class="fieldset-legend"> </legend>'),
  P = y('<span class="text-base-content/80"> </span>'),
  Q = y('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function de(t, e) {
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
    return e.min !== void 0 && r(f) < e.min ? (I(l, e.min === 1 ? J() : K({
      min: e.min
    }), !0), !1) : e.max !== void 0 && r(f) > e.max ? (I(l, M({
      max: e.max
    }), !0), !1) : !0
  }
  z(() => {
    var a;
    e.max !== void 0 && r(f) > e.max && s((a = s()) == null ? void 0 : a.substring(0, e.max))
  });
  var u = Q(),
    h = i(u);
  {
    var A = a => {
      var d = O(),
        b = i(d, !0);
      n(d), v(() => _(b, e.label)), x(a, d)
    };
    T(h, a => {
      e.label && a(A)
    })
  }
  var o = c(h, 2);
  N(o), B(o, () => ({
    ...L,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: D(),
    [F]: {
      "textarea-error": !!r(l)
    }
  }));
  var w = c(o, 2),
    m = i(w),
    j = i(m, !0);
  n(m);
  var k = c(m, 2);
  {
    var p = a => {
      var d = P(),
        b = i(d, !0);
      n(d), v(() => _(b, e.max - r(f))), x(a, d)
    };
    T(k, a => {
      e.max !== void 0 && a(p)
    })
  }
  n(w), n(u), v(() => _(j, r(l))), G(o, s), x(t, u), Y()
}
export {
  de as L
};