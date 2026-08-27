import "./Bzak7iHL.js";
import {
  p as E,
  i as r,
  h as c,
  y as F,
  d as l,
  s as o,
  A as G,
  r as d,
  t as _,
  a as b,
  b as H,
  e as J,
  u as K,
  c as w
} from "./D5GL_E7i.js";
import {
  s as h
} from "./BATewRf7.js";
import {
  i as S
} from "./unjGrhDm.js";
import {
  e as M,
  C as N
} from "./Ce1mtF2R.js";
import {
  b as O
} from "./siaHaSCw.js";
import {
  b as P
} from "./59dp7Pbq.js";
import {
  p as f,
  r as Q
} from "./LT-XNHCk.js";
import {
  m as g
} from "./XL5Wf48w.js";
var R = new Set(["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
  U = w('<legend class="fieldset-legend"> </legend>'),
  V = w('<span class="text-base-content/80"> </span>'),
  W = w('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function ie(C, e) {
  E(e, !0);
  let n = f(e, "value", 15),
    j = f(e, "validate", 15),
    k = f(e, "disabled", 3, !1),
    y = f(e, "ref", 15),
    q = Q(e, R),
    i = J("");
  const m = K(() => {
    var a;
    return ((a = n()) == null ? void 0 : a.length) ?? 0
  });
  j(I);

  function I() {
    return e.min !== void 0 && r(m) < e.min ? (c(i, e.min === 1 ? g.required() : g.min_characters({
      min: e.min
    }), !0), !1) : e.max !== void 0 && r(m) > e.max ? (c(i, g.max_characters({
      max: e.max
    }), !0), !1) : (c(i, ""), !0)
  }
  F(() => {
    var a;
    e.max !== void 0 && r(m) > e.max && n((a = n()) == null ? void 0 : a.substring(0, e.max))
  });
  var v = W(),
    A = l(v);
  {
    var T = a => {
      var t = U(),
        x = l(t, !0);
      d(t), _(() => h(x, e.label)), b(a, t)
    };
    S(A, a => {
      e.label && a(T)
    })
  }
  var s = o(A, 2);
  G(s), M(s, () => ({
    ...q,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: k(),
    [N]: {
      "textarea-error": !!r(i)
    }
  }), void 0, void 0, void 0, "svelte-16tom9o"), P(s, a => y(a), () => y());
  var L = o(s, 2),
    u = l(L),
    z = l(u, !0);
  d(u);
  var B = o(u, 2);
  {
    var D = a => {
      var t = V(),
        x = l(t, !0);
      d(t), _(() => h(x, e.max - r(m))), b(a, t)
    };
    S(B, a => {
      e.max !== void 0 && a(D)
    })
  }
  d(L), d(v), _(() => h(z, r(i))), O(s, n), b(C, v), H()
}
export {
  ie as L
};