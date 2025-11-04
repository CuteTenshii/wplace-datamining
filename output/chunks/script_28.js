import {
  g as l
} from "./DFNHoEBO.js";
import "./Dz1gcJiP.js";
import {
  p as R,
  g as s,
  u as k,
  y as q,
  K as C,
  f as y,
  t as x,
  b,
  c as j,
  w as K,
  s as v,
  d as o,
  b5 as N,
  r as c
} from "./QY1-WrVz.js";
import {
  s as h
} from "./B2BqFsu3.js";
import {
  i as E
} from "./DGzMCtF2.js";
import {
  d as Y,
  C as z
} from "./B9bGlQNK.js";
import {
  b as B
} from "./DbJrukA2.js";
import {
  p as g,
  r as F
} from "./EK4fqPP3.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "93d2d5a1c9ea65de4db2c69715b442df23632ed6"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "443a4f09-de2f-43eb-9679-c55360cfedef", t._sentryDebugIdIdentifier = "sentry-dbid-443a4f09-de2f-43eb-9679-c55360cfedef")
  })()
} catch {}
const G = () => "Select the reason",
  H = () => "Selecione o motivo",
  xe = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? G() : H(),
  J = () => "Other",
  P = () => "Outro motivo",
  be = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? J() : P(),
  Q = () => "Extra context on what happened (required)",
  U = () => "Mais informações sobre o que aconteceu (obrigatório)",
  ve = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Q() : U(),
  V = () => "Required",
  W = () => "Obrigatório",
  X = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? V() : W(),
  Z = t => `Min. characters: ${t.min}`,
  $ = t => `Mínimo de caracteres: ${t.min}`,
  ee = (t, e = {}) => (e.locale ?? l()) === "en" ? Z(t) : $(t),
  te = t => `Max. characters: ${t.max}`,
  ae = t => `Máximo de caracteres: ${t.max}`,
  re = (t, e = {}) => (e.locale ?? l()) === "en" ? te(t) : ae(t);
var ne = y('<legend class="fieldset-legend"> </legend>'),
  se = y('<span class="text-base-content/80"> </span>'),
  le = y('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function he(t, e) {
  R(e, !0);
  let r = g(e, "value", 15),
    I = g(e, "validate", 15),
    S = g(e, "disabled", 3, !1),
    T = F(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    i = K("");
  const d = k(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  I(L);

  function L() {
    return e.min !== void 0 && s(d) < e.min ? (q(i, e.min === 1 ? X() : ee({
      min: e.min
    }), !0), !1) : e.max !== void 0 && s(d) > e.max ? (q(i, re({
      max: e.max
    }), !0), !1) : !0
  }
  C(() => {
    var a;
    e.max !== void 0 && s(d) > e.max && r((a = r()) == null ? void 0 : a.substring(0, e.max))
  });
  var u = le(),
    w = o(u);
  {
    var M = a => {
      var n = ne(),
        _ = o(n, !0);
      c(n), x(() => h(_, e.label)), b(a, n)
    };
    E(w, a => {
      e.label && a(M)
    })
  }
  var f = v(w, 2);
  N(f), Y(f, a => ({
    ...T,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: S(),
    [z]: a
  }), [() => ({
    "textarea-error": !!s(i)
  })]);
  var p = v(f, 2),
    m = o(p),
    D = o(m, !0);
  c(m);
  var A = v(m, 2);
  {
    var O = a => {
      var n = se(),
        _ = o(n, !0);
      c(n), x(() => h(_, e.max - s(d))), b(a, n)
    };
    E(A, a => {
      e.max !== void 0 && a(O)
    })
  }
  c(p), c(u), x(() => h(D, s(i))), B(f, r), b(t, u), j()
}
export {
  he as L, ve as g, be as o, xe as s
};