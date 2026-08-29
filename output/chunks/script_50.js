import {
  Et as e,
  G as t,
  Jt as n,
  Pt as r,
  Y as i,
  Yt as a,
  Z as o,
  _ as s,
  a as c,
  ct as l,
  f as u,
  g as d,
  jt as f,
  kt as p,
  nn as m,
  o as h,
  q as g,
  vt as _,
  wt as v,
  xt as y,
  y as b,
  yt as x
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as S
} from "./ciZYZuIg.js";
var C = new Set([`$$slots`, `$$events`, `$$legacy`, `label`, `placeholder`, `value`, `max`, `min`, `validate`, `disabled`, `ref`]),
  w = o(`<legend class="fieldset-legend"> </legend>`),
  T = o(`<span class="text-base-content/80"> </span>`),
  E = o(`<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>`);

function D(o, D) {
  a(D, !0);
  let O = c(D, `value`, 15),
    k = c(D, `validate`, 15),
    A = c(D, `disabled`, 3, !1),
    j = c(D, `ref`, 15),
    M = h(D, C),
    N = f(``),
    P = r(() => {
      var e;
      return ((e = O()) == null ? void 0 : e.length) ?? 0
    });
  k(F);

  function F() {
    return D.min !== void 0 && l(P) < D.min ? (p(N, D.min === 1 ? S.required() : S.min_characters({
      min: D.min
    }), !0), !1) : D.max !== void 0 && l(P) > D.max ? (p(N, S.max_characters({
      max: D.max
    }), !0), !1) : (p(N, ``), !0)
  }
  x(() => {
    if (D.max !== void 0 && l(P) > D.max) {
      var e;
      O((e = O()) == null ? void 0 : e.substring(0, D.max))
    }
  });
  var I = E(),
    L = v(I),
    R = e => {
      var t = w(),
        n = v(t, !0);
      m(t), _(() => g(n, D.label)), i(e, t)
    };
  t(L, e => {
    D.label && e(R)
  });
  var z = e(L, 2);
  y(z), b(z, () => ({
    ...M,
    class: `textarea w-full ${D.class??``}`,
    placeholder: D.placeholder,
    disabled: A(),
    [s]: {
      "textarea-error": !!l(N)
    }
  }), void 0, void 0, void 0, `svelte-16tom9o`), u(z, e => j(e), () => j());
  var B = e(z, 2),
    V = v(B),
    H = v(V, !0);
  m(V);
  var U = e(V, 2),
    W = e => {
      var t = T(),
        n = v(t, !0);
      m(t), _(() => g(n, D.max - l(P))), i(e, t)
    };
  t(U, e => {
    D.max !== void 0 && e(W)
  }), m(B), m(I), _(() => g(H, l(N))), d(z, O), i(o, I), n()
}
export {
  D as t
};