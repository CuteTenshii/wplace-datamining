import {
  g as l
} from "./BmECnhD6.js";
import "./DJf8azCZ.js";
import {
  p as R,
  h as s,
  u as k,
  e as q,
  K as C,
  f as y,
  t as b,
  b as x,
  c as j,
  g as K,
  s as v,
  d as o,
  b5 as N,
  r as c
} from "./KRt5sQSh.js";
import {
  s as h
} from "./neqrhZzQ.js";
import {
  p as g,
  i as E,
  r as Y
} from "./B05Gf6YB.js";
import {
  d as z,
  C as B
} from "./QDzF7g1C.js";
import {
  b as F
} from "./DK-eZpGd.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
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
  be = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? J() : P(),
  Q = () => "Extra context on what happened (required)",
  U = () => "Mais informações sobre o que aconteceu (obrigatório)",
  xe = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Q() : U(),
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
  var f = le(),
    w = o(f);
  {
    var M = a => {
      var n = ne(),
        m = o(n, !0);
      c(n), b(() => h(m, e.label)), x(a, n)
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
    "textarea-error": !!s(i)
  })]);
  var p = v(u, 2),
    _ = o(p),
    D = o(_, !0);
  c(_);
  var A = v(_, 2);
  {
    var O = a => {
      var n = se(),
        m = o(n, !0);
      c(n), b(() => h(m, e.max - s(d))), x(a, n)
    };
    E(A, a => {
      e.max !== void 0 && a(O)
    })
  }
  c(p), c(f), b(() => h(D, s(i))), F(u, r), x(t, f), j()
}
export {
  ve as L, xe as g, be as o, me as s
};