import "./Bzak7iHL.js";
import {
  p as D,
  i as r,
  h as c,
  q as E,
  d as l,
  s as o,
  B as F,
  r as n,
  t as _,
  a as b,
  b as G,
  e as H,
  u as J,
  c as g
} from "./BC180BoF.js";
import {
  s as h
} from "./CpsyGtAr.js";
import {
  i as y
} from "./CYlrjl7C.js";
import {
  e as K,
  C as M
} from "./Bbytcfj7.js";
import {
  b as N
} from "./CHkwcO23.js";
import {
  b as O
} from "./CxzHUe37.js";
import {
  p as f,
  r as P
} from "./BQ15Turv.js";
import "./BhCkpOlh.js";
import {
  r as Q,
  m as R,
  a as U
} from "./BLjWTpzi.js";
var V = g('<legend class="fieldset-legend"> </legend>'),
  W = g('<span class="text-base-content/80"> </span>'),
  X = g('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function le(A, e) {
  D(e, !0);
  let d = f(e, "value", 15),
    C = f(e, "validate", 15),
    S = f(e, "disabled", 3, !1),
    L = f(e, "ref", 15),
    j = P(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
    s = H("");
  const m = J(() => {
    var a;
    return ((a = d()) == null ? void 0 : a.length) ?? 0
  });
  C(k);

  function k() {
    return e.min !== void 0 && r(m) < e.min ? (c(s, e.min === 1 ? Q() : R({
      min: e.min
    }), !0), !1) : e.max !== void 0 && r(m) > e.max ? (c(s, U({
      max: e.max
    }), !0), !1) : (c(s, ""), !0)
  }
  E(() => {
    var a;
    e.max !== void 0 && r(m) > e.max && d((a = d()) == null ? void 0 : a.substring(0, e.max))
  });
  var u = X(),
    q = l(u);
  {
    var B = a => {
      var t = V(),
        x = l(t, !0);
      n(t), _(() => h(x, e.label)), b(a, t)
    };
    y(q, a => {
      e.label && a(B)
    })
  }
  var i = o(q, 2);
  F(i), K(i, () => ({
    ...j,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: S(),
    [M]: {
      "textarea-error": !!r(s)
    }
  })), O(i, a => L(a), () => L());
  var w = o(i, 2),
    v = l(w),
    I = l(v, !0);
  n(v);
  var T = o(v, 2);
  {
    var z = a => {
      var t = W(),
        x = l(t, !0);
      n(t), _(() => h(x, e.max - r(m))), b(a, t)
    };
    y(T, a => {
      e.max !== void 0 && a(z)
    })
  }
  n(w), n(u), _(() => h(I, r(s))), N(i, d), b(A, u), G()
}
export {
  le as L
};