import "./Bzak7iHL.js";
import {
  p as B,
  i as c,
  h as x,
  y as E,
  d as u,
  s as h,
  bk as I,
  r as m,
  t as v,
  a as b,
  b as R,
  e as T,
  u as W,
  c as q
} from "./DmPVOt2G.js";
import {
  s as g
} from "./DhqkUb9U.js";
import {
  i as S
} from "./CPZ_RRGr.js";
import {
  d as D,
  C as F
} from "./C9hRcinp.js";
import {
  b as G
} from "./8J2sB2km.js";
import {
  b as H
} from "./CqzYBvze.js";
import {
  p as l,
  r as J
} from "./D4ILXblz.js";
import {
  g as k
} from "./BhCkpOlh.js";
const K = r => `Max. characters: ${r.max}`,
  P = r => `Máximo de caracteres: ${r.max}`,
  Q = r => `最大字符数：${r.max}`,
  U = r => `Max. Zeichen: ${r.max}`,
  V = r => `Máx. de caracteres: ${r.max}`,
  X = r => `Max. de caractères : ${r.max}`,
  Y = r => `Numero massimo di caratteri: ${r.max}`,
  p = r => `最大文字数: ${r.max}`,
  $ = r => `Maks. znaków: ${r.max}`,
  rr = r => `Макс. символов: ${r.max}`,
  er = r => `Макс. символів: ${r.max}`,
  tr = r => `Số ký tự tối đa: ${r.max}`,
  ar = (r, t = {}) => {
    const e = t.locale ?? k();
    return e === "en" ? K(r) : e === "pt" ? P(r) : e === "ch" ? Q(r) : e === "de" ? U(r) : e === "es" ? V(r) : e === "fr" ? X(r) : e === "it" ? Y(r) : e === "jp" ? p(r) : e === "pl" ? $(r) : e === "ru" ? rr(r) : e === "uk" ? er(r) : tr(r)
  },
  nr = r => `Min. characters: ${r.min}`,
  cr = r => `Mínimo de caracteres: ${r.min}`,
  ir = r => `最少字符数：${r.min}`,
  sr = r => `Min. Zeichen: ${r.min}`,
  ur = r => `Mín. de caracteres: ${r.min}`,
  mr = r => `Min. de caractères : ${r.min}`,
  or = r => `Numero minimo di caratteri: ${r.min}`,
  lr = r => `最小文字数: ${r.min}`,
  fr = r => `Min. znaków: ${r.min}`,
  _r = r => `Мин. символов: ${r.min}`,
  dr = r => `Мін. символів: ${r.min}`,
  xr = r => `Số ký tự tối thiểu: ${r.min}`,
  hr = (r, t = {}) => {
    const e = t.locale ?? k();
    return e === "en" ? nr(r) : e === "pt" ? cr(r) : e === "ch" ? ir(r) : e === "de" ? sr(r) : e === "es" ? ur(r) : e === "fr" ? mr(r) : e === "it" ? or(r) : e === "jp" ? lr(r) : e === "pl" ? fr(r) : e === "ru" ? _r(r) : e === "uk" ? dr(r) : xr(r)
  },
  vr = () => "Required",
  br = () => "Obrigatório",
  gr = () => "必填",
  qr = () => "Erforderlich",
  kr = () => "Obligatorio",
  Mr = () => "Obligatoire",
  jr = () => "Obbligatorio",
  wr = () => "必須",
  Sr = () => "Wymagane",
  yr = () => "Обязательно",
  Lr = () => "Обовʼязково",
  Or = () => "Bắt buộc",
  zr = (r = {}, t = {}) => {
    const e = t.locale ?? k();
    return e === "en" ? vr() : e === "pt" ? br() : e === "ch" ? gr() : e === "de" ? qr() : e === "es" ? kr() : e === "fr" ? Mr() : e === "it" ? jr() : e === "jp" ? wr() : e === "pl" ? Sr() : e === "ru" ? yr() : e === "uk" ? Lr() : Or()
  };
var Ar = new Set(["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
  Cr = q('<legend class="fieldset-legend"> </legend>'),
  Nr = q('<span class="text-base-content/80"> </span>'),
  Zr = q('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function Hr(r, t) {
  B(t, !0);
  let e = l(t, "value", 15),
    y = l(t, "validate", 15),
    L = l(t, "disabled", 3, !1),
    M = l(t, "ref", 15),
    O = J(t, Ar),
    i = T("");
  const o = W(() => {
    var a;
    return ((a = e()) == null ? void 0 : a.length) ?? 0
  });
  y(z);

  function z() {
    return t.min !== void 0 && c(o) < t.min ? (x(i, t.min === 1 ? zr() : hr({
      min: t.min
    }), !0), !1) : t.max !== void 0 && c(o) > t.max ? (x(i, ar({
      max: t.max
    }), !0), !1) : (x(i, ""), !0)
  }
  E(() => {
    var a;
    t.max !== void 0 && c(o) > t.max && e((a = e()) == null ? void 0 : a.substring(0, t.max))
  });
  var f = Zr(),
    j = u(f);
  {
    var A = a => {
      var n = Cr(),
        d = u(n, !0);
      m(n), v(() => g(d, t.label)), b(a, n)
    };
    S(j, a => {
      t.label && a(A)
    })
  }
  var s = h(j, 2);
  I(s), D(s, () => ({
    ...O,
    class: `textarea w-full ${t.class??""}`,
    placeholder: t.placeholder,
    disabled: L(),
    [F]: {
      "textarea-error": !!c(i)
    }
  })), H(s, a => M(a), () => M());
  var w = h(s, 2),
    _ = u(w),
    C = u(_, !0);
  m(_);
  var N = h(_, 2);
  {
    var Z = a => {
      var n = Nr(),
        d = u(n, !0);
      m(n), v(() => g(d, t.max - c(o))), b(a, n)
    };
    S(N, a => {
      t.max !== void 0 && a(Z)
    })
  }
  m(w), m(f), v(() => g(C, c(i))), G(s, e), b(r, f), R()
}
export {
  Hr as L
};