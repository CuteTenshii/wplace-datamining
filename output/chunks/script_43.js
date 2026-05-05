import "./Bzak7iHL.js";
import {
  p as D,
  i as r,
  h as c,
  m as E,
  d as l,
  s as o,
  y as F,
  r as n,
  t as _,
  a as b,
  b as G,
  e as H,
  u as J,
  c as g
} from "./wFsvFKKp.js";
import {
  s as h
} from "./B_EGJrw5.js";
import {
  i as A
} from "./BVciu6sd.js";
import {
  e as K,
  C as M
} from "./BGMKwhhq.js";
import {
  b as N
} from "./rR7wqgw4.js";
import {
  b as O
} from "./BlUCsbYQ.js";
import {
  p as f,
  r as P
} from "./C4jQIU3W.js";
import "./BhCkpOlh.js";
import {
  r as Q,
  m as R,
  a as U
} from "./BLjWTpzi.js";
var V = g('<legend class="fieldset-legend"> </legend>'),
  W = g('<span class="text-base-content/80"> </span>'),
  X = g('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function le(C, e) {
  D(e, !0);
  let d = f(e, "value", 15),
    S = f(e, "validate", 15),
    j = f(e, "disabled", 3, !1),
    y = f(e, "ref", 15),
    k = P(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
    s = H("");
  const m = J(() => {
    var a;
    return ((a = d()) == null ? void 0 : a.length) ?? 0
  });
  S(q);

  function q() {
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
    L = l(u);
  {
    var I = a => {
      var t = V(),
        x = l(t, !0);
      n(t), _(() => h(x, e.label)), b(a, t)
    };
    A(L, a => {
      e.label && a(I)
    })
  }
  var i = o(L, 2);
  F(i), K(i, () => ({
    ...k,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: j(),
    [M]: {
      "textarea-error": !!r(s)
    }
  })), O(i, a => y(a), () => y());
  var w = o(i, 2),
    v = l(w),
    T = l(v, !0);
  n(v);
  var z = o(v, 2);
  {
    var B = a => {
      var t = W(),
        x = l(t, !0);
      n(t), _(() => h(x, e.max - r(m))), b(a, t)
    };
    A(z, a => {
      e.max !== void 0 && a(B)
    })
  }
  n(w), n(u), _(() => h(T, r(s))), N(i, d), b(C, u), G()
}
export {
  le as L
};