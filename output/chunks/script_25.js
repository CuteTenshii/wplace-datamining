import {
  g as s
} from "./Ck9C8CiE.js";
import "./CrvzmjT9.js";
import {
  p as O,
  g as o,
  u as R,
  Z as w,
  Y as j,
  y as k,
  f as g,
  d as l,
  s as x,
  bj as C,
  r as c,
  t as b,
  b as v,
  c as Y
} from "./DX6AFU53.js";
import {
  s as h
} from "./CHUYULMG.js";
import {
  p as S,
  i as q,
  r as N
} from "./DuVNK5FV.js";
import {
  b as Z,
  C as z
} from "./BQ6y4KYV.js";
import {
  b as B
} from "./ZpaGHR7h.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "05ce49009207a0735deeeb4c7a853abc987d7d99"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "4be24669-f83b-4338-bee2-7680f5f90faf", t._sentryDebugIdIdentifier = "sentry-dbid-4be24669-f83b-4338-bee2-7680f5f90faf")
  })()
} catch {}
const F = () => "Select the reason",
  G = () => "Selecione o motivo",
  xe = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? F() : G(),
  H = () => "Other",
  J = () => "Outro motivo",
  be = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? H() : J(),
  K = () => "Extra context on what happened (required)",
  P = () => "Mais informações sobre o que aconteceu (obrigatório)",
  ve = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? K() : P(),
  Q = () => "Select the report reason",
  U = () => "Selecione o motivo da denúncia",
  he = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Q() : U(),
  V = () => "Required",
  W = () => "Obrigatório",
  X = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? V() : W(),
  $ = t => `Min. characters: ${t.min}`,
  ee = t => `Mínimo de caracteres: ${t.min}`,
  te = (t, e = {}) => (e.locale ?? s()) === "en" ? $(t) : ee(t),
  ae = t => `Max. characters: ${t.max}`,
  re = t => `Máximo de caracteres: ${t.max}`,
  ne = (t, e = {}) => (e.locale ?? s()) === "en" ? ae(t) : re(t);
var se = g('<legend class="fieldset-legend"> </legend>'),
  oe = g('<span class="text-base-content/80"> </span>'),
  le = g('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function ge(t, e) {
  O(e, !0);
  let r = S(e, "value", 15),
    E = S(e, "validate", 15),
    I = N(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    i = j("");
  const u = R(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  E(T);

  function T() {
    return e.min !== void 0 && o(u) < e.min ? (w(i, e.min === 1 ? X() : te({
      min: e.min
    }), !0), !1) : e.max !== void 0 && o(u) > e.max ? (w(i, ne({
      max: e.max
    }), !0), !1) : !0
  }
  k(() => {
    var a;
    e.max !== void 0 && o(u) > e.max && r((a = r()) == null ? void 0 : a.substring(0, e.max))
  });
  var f = le(),
    y = l(f);
  {
    var L = a => {
      var n = se(),
        m = l(n, !0);
      c(n), b(() => h(m, e.label)), v(a, n)
    };
    q(y, a => {
      e.label && a(L)
    })
  }
  var d = x(y, 2);
  C(d), Z(d, a => ({
    ...I,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [z]: a
  }), [() => ({
    "textarea-error": !!o(i)
  })]);
  var p = x(d, 2),
    _ = l(p),
    M = l(_, !0);
  c(_);
  var D = x(_, 2);
  {
    var A = a => {
      var n = oe(),
        m = l(n, !0);
      c(n), b(() => h(m, e.max - o(u))), v(a, n)
    };
    q(D, a => {
      e.max !== void 0 && a(A)
    })
  }
  c(p), c(f), b(() => h(M, o(i))), B(d, r), v(t, f), Y()
}
export {
  ge as L, he as a, ve as g, be as o, xe as s
};