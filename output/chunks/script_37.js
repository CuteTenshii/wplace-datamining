import "./Dqa_tdCE.js";
import {
  p as C,
  j as i,
  u as R,
  i as I,
  e as q,
  v as N,
  f as y,
  d as n,
  s as v,
  x as Y,
  r as s,
  t as b,
  b as x,
  c as z
} from "./BrDbkhPu.js";
import {
  s as _
} from "./CGiign8e.js";
import {
  i as T
} from "./BSSwFqdp.js";
import {
  f as B,
  C as F
} from "./Dc7LljEh.js";
import {
  b as G
} from "./HUhPalzC.js";
import {
  p as g,
  r as H
} from "./DhCXuMRP.js";
import "./DSNL03G2.js";
import {
  r as J,
  m as K,
  a as M
} from "./49GDILa8.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0ce1ae77-9414-42e5-9720-27422e906236", t._sentryDebugIdIdentifier = "sentry-dbid-0ce1ae77-9414-42e5-9720-27422e906236")
  })()
} catch {}
var O = y('<legend class="fieldset-legend"> </legend>'),
  P = y('<span class="text-base-content/80"> </span>'),
  Q = y('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function re(t, e) {
  C(e, !0);
  let l = g(e, "value", 15),
    E = g(e, "validate", 15),
    D = g(e, "disabled", 3, !1),
    L = H(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    d = q("");
  const f = R(() => {
    var a;
    return ((a = l()) == null ? void 0 : a.length) ?? 0
  });
  E(S);

  function S() {
    return e.min !== void 0 && i(f) < e.min ? (I(d, e.min === 1 ? J() : K({
      min: e.min
    }), !0), !1) : e.max !== void 0 && i(f) > e.max ? (I(d, M({
      max: e.max
    }), !0), !1) : !0
  }
  N(() => {
    var a;
    e.max !== void 0 && i(f) > e.max && l((a = l()) == null ? void 0 : a.substring(0, e.max))
  });
  var u = Q(),
    h = n(u);
  {
    var A = a => {
      var r = O(),
        c = n(r, !0);
      s(r), b(() => _(c, e.label)), x(a, r)
    };
    T(h, a => {
      e.label && a(A)
    })
  }
  var o = v(h, 2);
  Y(o), B(o, () => ({
    ...L,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: D(),
    [F]: {
      "textarea-error": !!i(d)
    }
  }));
  var w = v(o, 2),
    m = n(w),
    j = n(m, !0);
  s(m);
  var k = v(m, 2);
  {
    var p = a => {
      var r = P(),
        c = n(r, !0);
      s(r), b(() => _(c, e.max - i(f))), x(a, r)
    };
    T(k, a => {
      e.max !== void 0 && a(p)
    })
  }
  s(w), s(u), b(() => _(j, i(d))), G(o, l), x(t, u), z()
}
export {
  re as L
};