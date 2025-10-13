import {
  g as o
} from "./DNe0cQT0.js";
import "./CxZHGuTs.js";
import {
  p as O,
  g as s,
  u as R,
  z as p,
  G as k,
  f as g,
  t as x,
  b as v,
  c as C,
  w as j,
  s as b,
  d as l,
  b5 as z,
  r as c
} from "./j_iXX3SE.js";
import {
  s as h
} from "./CyTBL2UF.js";
import {
  p as q,
  i as E,
  r as G
} from "./Cj0u-77H.js";
import {
  d as N,
  C as Y
} from "./T5YiijHj.js";
import {
  b as B
} from "./C86DRWzC.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "29ae9b21d49bd1827c9d9708d11ce0563a962117"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "311e58c4-05d9-4dcc-b8ee-474300146ef7", t._sentryDebugIdIdentifier = "sentry-dbid-311e58c4-05d9-4dcc-b8ee-474300146ef7")
  })()
} catch {}
const F = () => "Select the reason",
  H = () => "Selecione o motivo",
  _e = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? F() : H(),
  J = () => "Other",
  K = () => "Outro motivo",
  me = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? J() : K(),
  P = () => "Extra context on what happened (required)",
  Q = () => "Mais informações sobre o que aconteceu (obrigatório)",
  xe = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? P() : Q(),
  U = () => "Required",
  V = () => "Obrigatório",
  W = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? U() : V(),
  X = t => `Min. characters: ${t.min}`,
  Z = t => `Mínimo de caracteres: ${t.min}`,
  $ = (t, e = {}) => (e.locale ?? o()) === "en" ? X(t) : Z(t),
  ee = t => `Max. characters: ${t.max}`,
  te = t => `Máximo de caracteres: ${t.max}`,
  ae = (t, e = {}) => (e.locale ?? o()) === "en" ? ee(t) : te(t);
var re = g('<legend class="fieldset-legend"> </legend>'),
  ne = g('<span class="text-base-content/80"> </span>'),
  se = g('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function ve(t, e) {
  O(e, !0);
  let r = q(e, "value", 15),
    I = q(e, "validate", 15),
    S = G(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    i = j("");
  const d = R(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  I(T);

  function T() {
    return e.min !== void 0 && s(d) < e.min ? (p(i, e.min === 1 ? W() : $({
      min: e.min
    }), !0), !1) : e.max !== void 0 && s(d) > e.max ? (p(i, ae({
      max: e.max
    }), !0), !1) : !0
  }
  k(() => {
    var a;
    e.max !== void 0 && s(d) > e.max && r((a = r()) == null ? void 0 : a.substring(0, e.max))
  });
  var f = se(),
    y = l(f);
  {
    var L = a => {
      var n = re(),
        m = l(n, !0);
      c(n), x(() => h(m, e.label)), v(a, n)
    };
    E(y, a => {
      e.label && a(L)
    })
  }
  var u = b(y, 2);
  z(u), N(u, a => ({
    ...S,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [Y]: a
  }), [() => ({
    "textarea-error": !!s(i)
  })]);
  var w = b(u, 2),
    _ = l(w),
    M = l(_, !0);
  c(_);
  var D = b(_, 2);
  {
    var A = a => {
      var n = ne(),
        m = l(n, !0);
      c(n), x(() => h(m, e.max - s(d))), v(a, n)
    };
    E(D, a => {
      e.max !== void 0 && a(A)
    })
  }
  c(w), c(f), x(() => h(M, s(i))), B(u, r), v(t, f), C()
}
export {
  ve as L, xe as g, me as o, _e as s
};