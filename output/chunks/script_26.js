import {
  g as s
} from "./CC4jxA2W.js";
import "./CIV-60i_.js";
import {
  p as O,
  g as c,
  u as R,
  z as p,
  G as k,
  f as g,
  t as x,
  b as v,
  c as C,
  w as j,
  s as h,
  d as o,
  b5 as z,
  r as l
} from "./DUWZzbWe.js";
import {
  s as b
} from "./B_aSMPcR.js";
import {
  p as q,
  i as E,
  r as G
} from "./D3IB6IMS.js";
import {
  d as N,
  C as Y
} from "./BCmvehz2.js";
import {
  b as B
} from "./DiGns8jr.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "10f34814-ecc7-4e67-a18c-5a3ccd59c466", t._sentryDebugIdIdentifier = "sentry-dbid-10f34814-ecc7-4e67-a18c-5a3ccd59c466")
  })()
} catch {}
const F = () => "Select the reason",
  H = () => "Selecione o motivo",
  _e = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? F() : H(),
  J = () => "Other",
  K = () => "Outro motivo",
  me = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? J() : K(),
  P = () => "Extra context on what happened (required)",
  Q = () => "Mais informações sobre o que aconteceu (obrigatório)",
  xe = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? P() : Q(),
  U = () => "Required",
  V = () => "Obrigatório",
  W = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? U() : V(),
  X = t => `Min. characters: ${t.min}`,
  Z = t => `Mínimo de caracteres: ${t.min}`,
  $ = (t, e = {}) => (e.locale ?? s()) === "en" ? X(t) : Z(t),
  ee = t => `Max. characters: ${t.max}`,
  te = t => `Máximo de caracteres: ${t.max}`,
  ae = (t, e = {}) => (e.locale ?? s()) === "en" ? ee(t) : te(t);
var re = g('<legend class="fieldset-legend"> </legend>'),
  ne = g('<span class="text-base-content/80"> </span>'),
  ce = g('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

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
    return e.min !== void 0 && c(d) < e.min ? (p(i, e.min === 1 ? W() : $({
      min: e.min
    }), !0), !1) : e.max !== void 0 && c(d) > e.max ? (p(i, ae({
      max: e.max
    }), !0), !1) : !0
  }
  k(() => {
    var a;
    e.max !== void 0 && c(d) > e.max && r((a = r()) == null ? void 0 : a.substring(0, e.max))
  });
  var f = ce(),
    y = o(f);
  {
    var L = a => {
      var n = re(),
        m = o(n, !0);
      l(n), x(() => b(m, e.label)), v(a, n)
    };
    E(y, a => {
      e.label && a(L)
    })
  }
  var u = h(y, 2);
  z(u), N(u, a => ({
    ...S,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [Y]: a
  }), [() => ({
    "textarea-error": !!c(i)
  })]);
  var w = h(u, 2),
    _ = o(w),
    M = o(_, !0);
  l(_);
  var D = h(_, 2);
  {
    var A = a => {
      var n = ne(),
        m = o(n, !0);
      l(n), x(() => b(m, e.max - c(d))), v(a, n)
    };
    E(D, a => {
      e.max !== void 0 && a(A)
    })
  }
  l(w), l(f), x(() => b(M, c(i))), B(u, r), v(t, f), C()
}
export {
  ve as L, xe as g, me as o, _e as s
};