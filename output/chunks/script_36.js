import {
  g as l
} from "./ByzlWgKr.js";
import "./CMSI2xec.js";
import {
  p as R,
  g as s,
  u as k,
  o as q,
  D as C,
  f as y,
  t as x,
  b as v,
  c as j,
  l as N,
  s as b,
  d as o,
  bi as Y,
  r as c
} from "./Dff7lKDG.js";
import {
  s as h
} from "./gUzJCzJF.js";
import {
  i as E
} from "./C4Sx64Nr.js";
import {
  d as z,
  C as B
} from "./CxMyuyR3.js";
import {
  b as F
} from "./BcFRxG3e.js";
import {
  p as g,
  r as G
} from "./FaLwwzG2.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "60a4f788-4f2f-4699-a1c0-4f33cc647614", t._sentryDebugIdIdentifier = "sentry-dbid-60a4f788-4f2f-4699-a1c0-4f33cc647614")
  })()
} catch {}
const H = () => "Select the reason",
  J = () => "Selecione o motivo",
  xe = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? H() : J(),
  K = () => "Other",
  P = () => "Outro motivo",
  ve = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? K() : P(),
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

function he(t, e) {
  R(e, !0);
  let r = g(e, "value", 15),
    I = g(e, "validate", 15),
    S = g(e, "disabled", 3, !1),
    T = G(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    i = N("");
  const d = k(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  I(D);

  function D() {
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
    var L = a => {
      var n = ne(),
        _ = o(n, !0);
      c(n), x(() => h(_, e.label)), v(a, n)
    };
    E(w, a => {
      e.label && a(L)
    })
  }
  var f = b(w, 2);
  Y(f), z(f, () => ({
    ...T,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: S(),
    [B]: {
      "textarea-error": !!s(i)
    }
  }));
  var p = b(f, 2),
    m = o(p),
    M = o(m, !0);
  c(m);
  var A = b(m, 2);
  {
    var O = a => {
      var n = se(),
        _ = o(n, !0);
      c(n), x(() => h(_, e.max - s(d))), v(a, n)
    };
    E(A, a => {
      e.max !== void 0 && a(O)
    })
  }
  c(p), c(u), x(() => h(M, s(i))), F(f, r), v(t, u), j()
}
export {
  he as L, be as g, ve as o, xe as s
};