import "./DTln4VLu.js";
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
} from "./DBVFc_3b.js";
import {
  s as _
} from "./BDhEgAxR.js";
import {
  i as E
} from "./iiPVLS4p.js";
import {
  d as F,
  C as G
} from "./5cOkalqm.js";
import {
  b as H
} from "./BGDc_R2b.js";
import {
  p as g,
  r as J
} from "./SPA6DZVo.js";
import "./DIegaxO1.js";
import {
  r as K,
  m as M,
  a as O
} from "./ifLwDmUz.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
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
  var m = U(),
    y = i(m);
  {
    var A = a => {
      var r = P(),
        b = i(r, !0);
      l(r), v(() => _(b, e.label)), x(a, r)
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
    u = i(w),
    C = i(u, !0);
  l(u);
  var k = o(u, 2);
  {
    var R = a => {
      var r = Q(),
        b = i(r, !0);
      l(r), v(() => _(b, e.max - d(f))), x(a, r)
    };
    E(k, a => {
      e.max !== void 0 && a(R)
    })
  }
  l(w), l(m), v(() => _(C, d(n))), H(c, s), x(t, m), Y()
}
export {
  re as L
};