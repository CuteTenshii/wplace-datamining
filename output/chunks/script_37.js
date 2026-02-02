import "./DlAkGZ8n.js";
import {
  p as C,
  j as i,
  u as R,
  i as I,
  e as q,
  v as N,
  f as y,
  d as n,
  s as b,
  x as Y,
  r as s,
  t as v,
  b as x,
  c as z
} from "./0lw74TdK.js";
import {
  s as _
} from "./BplYE9J1.js";
import {
  i as T
} from "./DrYQconx.js";
import {
  f as B,
  C as F
} from "./k6HFfx4L.js";
import {
  b as G
} from "./CNwSYcGi.js";
import {
  p as g,
  r as H
} from "./BVnMFPWi.js";
import "./B4ScQ8O8.js";
import {
  r as J,
  m as K,
  a as M
} from "./Bu813obD.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
      s(r), v(() => _(c, e.label)), x(a, r)
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
      "textarea-error": !!i(d)
    }
  }));
  var w = b(o, 2),
    m = n(w),
    j = n(m, !0);
  s(m);
  var k = b(m, 2);
  {
    var p = a => {
      var r = P(),
        c = n(r, !0);
      s(r), v(() => _(c, e.max - i(f))), x(a, r)
    };
    T(k, a => {
      e.max !== void 0 && a(p)
    })
  }
  s(w), s(u), v(() => _(j, i(d))), G(o, l), x(t, u), z()
}
export {
  re as L
};