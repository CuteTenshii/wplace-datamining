import "./M8DO3TCO.js";
import {
  p as j,
  i as d,
  h as I,
  C as q,
  d as i,
  s as o,
  I as N,
  r as l,
  t as v,
  a as x,
  b as Y,
  e as z,
  u as B,
  c as h
} from "./Df0Hz134.js";
import {
  s as _
} from "./BXg7_WfL.js";
import {
  i as E
} from "./2QgDRSWz.js";
import {
  d as F,
  C as G
} from "./CHn7OGu9.js";
import {
  b as H
} from "./CGQ0x9cB.js";
import {
  p as g,
  r as J
} from "./D71bP1Ad.js";
import "./CCnR8d1l.js";
import {
  r as K,
  m as M,
  a as O
} from "./BFeFma9T.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "bcc84ebf-dd11-4db9-886d-a5b7ce6bcc52", t._sentryDebugIdIdentifier = "sentry-dbid-bcc84ebf-dd11-4db9-886d-a5b7ce6bcc52")
  } catch {}
})();
var P = h('<legend class="fieldset-legend"> </legend>'),
  Q = h('<span class="text-base-content/80"> </span>'),
  U = h('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function re(t, e) {
  j(e, !0);
  let s = g(e, "value", 15),
    D = g(e, "validate", 15),
    L = g(e, "disabled", 3, !1),
    S = J(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    n = z("");
  const f = B(() => {
    var a;
    return ((a = s()) == null ? void 0 : a.length) ?? 0
  });
  D(T);

  function T() {
    return e.min !== void 0 && d(f) < e.min ? (I(n, e.min === 1 ? K() : M({
      min: e.min
    }), !0), !1) : e.max !== void 0 && d(f) > e.max ? (I(n, O({
      max: e.max
    }), !0), !1) : !0
  }
  q(() => {
    var a;
    e.max !== void 0 && d(f) > e.max && s((a = s()) == null ? void 0 : a.substring(0, e.max))
  });
  var b = U(),
    y = i(b);
  {
    var A = a => {
      var r = P(),
        u = i(r, !0);
      l(r), v(() => _(u, e.label)), x(a, r)
    };
    E(y, a => {
      e.label && a(A)
    })
  }
  var c = o(y, 2);
  N(c), F(c, () => ({
    ...S,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: L(),
    [G]: {
      "textarea-error": !!d(n)
    }
  }));
  var w = o(c, 2),
    m = i(w),
    C = i(m, !0);
  l(m);
  var k = o(m, 2);
  {
    var R = a => {
      var r = Q(),
        u = i(r, !0);
      l(r), v(() => _(u, e.max - d(f))), x(a, r)
    };
    E(k, a => {
      e.max !== void 0 && a(R)
    })
  }
  l(w), l(b), v(() => _(C, d(n))), H(c, s), x(t, b), Y()
}
export {
  re as L
};