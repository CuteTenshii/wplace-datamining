import {
  g as o
} from "./BzyUMEdi.js";
import "./DpsrLiXi.js";
import {
  p as O,
  g as s,
  u as R,
  Z as w,
  y as k,
  f as g,
  t as x,
  b as v,
  c as C,
  Y,
  s as b,
  d as l,
  b5 as j,
  r as c
} from "./nXP0Sia0.js";
import {
  s as h
} from "./BPjS_4_e.js";
import {
  p as q,
  i as E,
  r as N
} from "./BjlNU-Hu.js";
import {
  b as Z,
  C as z
} from "./D8B8oGuI.js";
import {
  b as B
} from "./e0IcmQyV.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "22dd6d20080aececfaae9b3120dfb71899337f43"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "743521e9-152e-4feb-adc2-c27f52db8949", t._sentryDebugIdIdentifier = "sentry-dbid-743521e9-152e-4feb-adc2-c27f52db8949")
  })()
} catch {}
const F = () => "Select the reason",
  G = () => "Selecione o motivo",
  _e = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? F() : G(),
  H = () => "Other",
  J = () => "Outro motivo",
  me = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? H() : J(),
  K = () => "Extra context on what happened (required)",
  P = () => "Mais informações sobre o que aconteceu (obrigatório)",
  xe = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? K() : P(),
  Q = () => "Required",
  U = () => "Obrigatório",
  V = (t = {}, e = {}) => (e.locale ?? o()) === "en" ? Q() : U(),
  W = t => `Min. characters: ${t.min}`,
  X = t => `Mínimo de caracteres: ${t.min}`,
  $ = (t, e = {}) => (e.locale ?? o()) === "en" ? W(t) : X(t),
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
    S = N(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    i = Y("");
  const d = R(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  I(T);

  function T() {
    return e.min !== void 0 && s(d) < e.min ? (w(i, e.min === 1 ? V() : $({
      min: e.min
    }), !0), !1) : e.max !== void 0 && s(d) > e.max ? (w(i, ae({
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
  j(u), Z(u, a => ({
    ...S,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [z]: a
  }), [() => ({
    "textarea-error": !!s(i)
  })]);
  var p = b(u, 2),
    _ = l(p),
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
  c(p), c(f), x(() => h(M, s(i))), B(u, r), v(t, f), C()
}
export {
  ve as L, xe as g, me as o, _e as s
};