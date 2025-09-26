import {
  g as s
} from "./l6Sqoly_.js";
import "./B0dsE6nP.js";
import {
  p as O,
  g as o,
  u as R,
  aw as w,
  au as j,
  y as k,
  f as g,
  d as c,
  s as x,
  bj as C,
  r as l,
  t as v,
  b as h,
  c as N
} from "./BS43lSzs.js";
import {
  s as b
} from "./NwUzcdrl.js";
import {
  p as S,
  i as q,
  r as Y
} from "./_OAXuBJ8.js";
import {
  b as z,
  C as B
} from "./y5z5CiLS.js";
import {
  b as F
} from "./C1Ret9Ka.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "f081a31e50addc038845f96ddcdcac2e385f6a91"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "832b2d91-c507-495d-8a1f-d5c91dd6acad", t._sentryDebugIdIdentifier = "sentry-dbid-832b2d91-c507-495d-8a1f-d5c91dd6acad")
  })()
} catch {}
const G = () => "Select the reason",
  H = () => "Selecione o motivo",
  xe = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? G() : H(),
  J = () => "Other",
  K = () => "Outro motivo",
  ve = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? J() : K(),
  P = () => "Extra context on what happened (required)",
  Q = () => "Mais informações sobre o que aconteceu (obrigatório)",
  he = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? P() : Q(),
  U = () => "Select the report reason",
  V = () => "Selecione o motivo da denúncia",
  be = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? U() : V(),
  W = () => "Required",
  X = () => "Obrigatório",
  Z = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? W() : X(),
  $ = t => `Min. characters: ${t.min}`,
  ee = t => `Mínimo de caracteres: ${t.min}`,
  te = (t, e = {}) => (e.locale ?? s()) === "en" ? $(t) : ee(t),
  ae = t => `Max. characters: ${t.max}`,
  re = t => `Máximo de caracteres: ${t.max}`,
  ne = (t, e = {}) => (e.locale ?? s()) === "en" ? ae(t) : re(t);
var se = g('<legend class="fieldset-legend"> </legend>'),
  oe = g('<span class="text-base-content/80"> </span>'),
  ce = g('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function ge(t, e) {
  O(e, !0);
  let r = S(e, "value", 15),
    E = S(e, "validate", 15),
    I = Y(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    i = j("");
  const d = R(() => {
    var a;
    return ((a = r()) == null ? void 0 : a.length) ?? 0
  });
  E(T);

  function T() {
    return e.min !== void 0 && o(d) < e.min ? (w(i, e.min === 1 ? Z() : te({
      min: e.min
    }), !0), !1) : e.max !== void 0 && o(d) > e.max ? (w(i, ne({
      max: e.max
    }), !0), !1) : !0
  }
  k(() => {
    var a;
    e.max !== void 0 && o(d) > e.max && r((a = r()) == null ? void 0 : a.substring(0, e.max))
  });
  var f = ce(),
    y = c(f);
  {
    var L = a => {
      var n = se(),
        m = c(n, !0);
      l(n), v(() => b(m, e.label)), h(a, n)
    };
    q(y, a => {
      e.label && a(L)
    })
  }
  var u = x(y, 2);
  C(u), z(u, a => ({
    ...I,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [B]: a
  }), [() => ({
    "textarea-error": !!o(i)
  })]);
  var p = x(u, 2),
    _ = c(p),
    M = c(_, !0);
  l(_);
  var D = x(_, 2);
  {
    var A = a => {
      var n = oe(),
        m = c(n, !0);
      l(n), v(() => b(m, e.max - o(d))), h(a, n)
    };
    q(D, a => {
      e.max !== void 0 && a(A)
    })
  }
  l(p), l(f), v(() => b(M, o(i))), F(u, r), h(t, f), N()
}
export {
  ge as L, be as a, he as g, ve as o, xe as s
};