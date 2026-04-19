import "./Bzak7iHL.js";
import {
  p as D,
  i as r,
  h as c,
  q as E,
  d as l,
  s as o,
  y as F,
  r as d,
  t as _,
  a as b,
  b as G,
  e as H,
  u as J,
  c as g
} from "./B66BVdRM.js";
import {
  s as h
} from "./D1f3t9ko.js";
import {
  i as w
} from "./BLRpBUXo.js";
import {
  d as K,
  C as M
} from "./D6WlI9xC.js";
import {
  b as N
} from "./BFrbk8jB.js";
import {
  b as O
} from "./C6-mkiPL.js";
import {
  p as f,
  r as P
} from "./DFHlj6pU.js";
import "./BhCkpOlh.js";
import {
  r as Q,
  m as R,
  a as U
} from "./CwXUm1Ed.js";
var V = g('<legend class="fieldset-legend"> </legend>'),
  W = g('<span class="text-base-content/80"> </span>'),
  X = g('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function le(A, e) {
  D(e, !0);
  let n = f(e, "value", 15),
    C = f(e, "validate", 15),
    S = f(e, "disabled", 3, !1),
    y = f(e, "ref", 15),
    j = P(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
    s = H("");
  const m = J(() => {
    var a;
    return ((a = n()) == null ? void 0 : a.length) ?? 0
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
    e.max !== void 0 && r(m) > e.max && n((a = n()) == null ? void 0 : a.substring(0, e.max))
  });
  var u = X(),
    L = l(u);
  {
    var I = a => {
      var t = V(),
        x = l(t, !0);
      d(t), _(() => h(x, e.label)), b(a, t)
    };
    w(L, a => {
      e.label && a(I)
    })
  }
  var i = o(L, 2);
  F(i), K(i, () => ({
    ...j,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: S(),
    [M]: {
      "textarea-error": !!r(s)
    }
  })), O(i, a => y(a), () => y());
  var q = o(i, 2),
    v = l(q),
    T = l(v, !0);
  d(v);
  var z = o(v, 2);
  {
    var B = a => {
      var t = W(),
        x = l(t, !0);
      d(t), _(() => h(x, e.max - r(m))), b(a, t)
    };
    w(z, a => {
      e.max !== void 0 && a(B)
    })
  }
  d(q), d(u), _(() => h(T, r(s))), N(i, n), b(A, u), G()
}
export {
  le as L
};