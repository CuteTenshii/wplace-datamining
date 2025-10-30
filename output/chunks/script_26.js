import {
  g as l
} from "./eqSfXg5t.js";
import "./AoAsxiA5.js";
import {
  p as R,
  h as s,
  u as k,
  e as q,
  K as C,
  f as y,
  t as x,
  b,
  c as j,
  g as K,
  s as v,
  d as o,
  b5 as N,
  r as i
} from "./CBd9NCKG.js";
import {
  s as h
} from "./DUA3RLV8.js";
import {
  p as g,
  i as E,
  r as Y
} from "./48K2UdfX.js";
import {
  d as z,
  C as B
} from "./Djw9YyXo.js";
import {
  b as F
} from "./77gbqhTP.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "251f3ef5bc14649f46f335286261e6c964681eae"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0ba826bb-08e0-4a76-a5ed-6ad55a2efa9c", t._sentryDebugIdIdentifier = "sentry-dbid-0ba826bb-08e0-4a76-a5ed-6ad55a2efa9c")
  })()
} catch {}
const G = () => "Select the reason",
  H = () => "Selecione o motivo",
  me = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? G() : H(),
  J = () => "Other",
  P = () => "Outro motivo",
  xe = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? J() : P(),
  Q = () => "Extra context on what happened (required)",
  U = () => "Mais informações sobre o que aconteceu (obrigatório)",
  be = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Q() : U(),
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

function ve(t, e) {
  R(e, !0);
  let r = g(e, "value", 15),
    I = g(e, "validate", 15),
    S = g(e, "disabled", 3, !1),
    T = Y(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    c = K("");
  const d = k(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  I(L);

  function L() {
    return e.min !== void 0 && s(d) < e.min ? (q(c, e.min === 1 ? X() : ee({
      min: e.min
    }), !0), !1) : e.max !== void 0 && s(d) > e.max ? (q(c, re({
      max: e.max
    }), !0), !1) : !0
  }
  C(() => {
    var a;
    e.max !== void 0 && s(d) > e.max && r((a = r()) == null ? void 0 : a.substring(0, e.max))
  });
  var f = le(),
    w = o(f);
  {
    var M = a => {
      var n = ne(),
        m = o(n, !0);
      i(n), x(() => h(m, e.label)), b(a, n)
    };
    E(w, a => {
      e.label && a(M)
    })
  }
  var u = v(w, 2);
  N(u), z(u, a => ({
    ...T,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: S(),
    [B]: a
  }), [() => ({
    "textarea-error": !!s(c)
  })]);
  var p = v(u, 2),
    _ = o(p),
    D = o(_, !0);
  i(_);
  var A = v(_, 2);
  {
    var O = a => {
      var n = se(),
        m = o(n, !0);
      i(n), x(() => h(m, e.max - s(d))), b(a, n)
    };
    E(A, a => {
      e.max !== void 0 && a(O)
    })
  }
  i(p), i(f), x(() => h(D, s(c))), F(u, r), b(t, f), j()
}
export {
  ve as L, be as g, xe as o, me as s
};