import {
  g as l
} from "./QpTCyiP3.js";
import "./CVtsYuox.js";
import {
  p as R,
  g as s,
  u as k,
  o as q,
  D as C,
  f as y,
  t as b,
  b as x,
  c as j,
  l as N,
  s as v,
  d as o,
  bi as Y,
  r as i
} from "./CYmALYaf.js";
import {
  s as h
} from "./Bxxjoywg.js";
import {
  i as E
} from "./CUW3HYkd.js";
import {
  d as z,
  C as B
} from "./DLoppxIO.js";
import {
  b as F
} from "./DdbVlRsc.js";
import {
  p as g,
  r as G
} from "./7r_dBKZS.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9cf99aca-6d8a-4bf3-a9bf-d5775ff9a468", t._sentryDebugIdIdentifier = "sentry-dbid-9cf99aca-6d8a-4bf3-a9bf-d5775ff9a468")
  })()
} catch {}
const H = () => "Select the reason",
  J = () => "Selecione o motivo",
  be = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? H() : J(),
  K = () => "Other",
  P = () => "Outro motivo",
  xe = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? K() : P(),
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
    T = G(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    c = N("");
  const d = k(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  I(D);

  function D() {
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
  var u = le(),
    w = o(u);
  {
    var L = a => {
      var n = ne(),
        _ = o(n, !0);
      i(n), b(() => h(_, e.label)), x(a, n)
    };
    E(w, a => {
      e.label && a(L)
    })
  }
  var f = v(w, 2);
  Y(f), z(f, () => ({
    ...T,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    disabled: S(),
    [B]: {
      "textarea-error": !!s(c)
    }
  }));
  var p = v(f, 2),
    m = o(p),
    M = o(m, !0);
  i(m);
  var A = v(m, 2);
  {
    var O = a => {
      var n = se(),
        _ = o(n, !0);
      i(n), b(() => h(_, e.max - s(d))), x(a, n)
    };
    E(A, a => {
      e.max !== void 0 && a(O)
    })
  }
  i(p), i(u), b(() => h(M, s(c))), F(f, r), x(t, u), j()
}
export {
  he as L, ve as g, xe as o, be as s
};