import {
  g as _
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  p as A,
  i as c,
  h,
  I as E,
  d as o,
  s as v,
  bm as N,
  r as u,
  t as g,
  a as b,
  b as T,
  e as W,
  u as B,
  c as q
} from "./CV6xI6o5.js";
import {
  s as k
} from "./hBdZmm-r.js";
import {
  i as S
} from "./iywslKou.js";
import {
  d as D,
  C as G
} from "./g3dAVNmx.js";
import {
  b as R
} from "./O_2bA_pp.js";
import {
  b as V
} from "./BV5xAkCC.js";
import {
  p as f,
  r as F
} from "./BQ880tYw.js";
const H = () => "Extra context on what happened (required)",
  J = () => "Mais informações sobre o que aconteceu (obrigatório)",
  K = () => "请提供发生情况的额外背景（必填）",
  P = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  Q = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  U = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  X = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  Y = () => "何が起きたかの詳細な説明（必須）",
  $ = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  ee = () => "Дополнительный контекст о произошедшем (обязательно)",
  re = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  te = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  mr = (e = {}, t = {}) => {
    const r = t.locale ?? _();
    return r === "en" ? H() : r === "pt" ? J() : r === "ch" ? K() : r === "de" ? P() : r === "es" ? Q() : r === "fr" ? U() : r === "it" ? X() : r === "jp" ? Y() : r === "pl" ? $() : r === "ru" ? ee() : r === "uk" ? re() : te()
  },
  ne = e => `Max. characters: ${e.max}`,
  ae = e => `Máximo de caracteres: ${e.max}`,
  ce = e => `最大字符数：${e.max}`,
  ie = e => `Max. Zeichen: ${e.max}`,
  se = e => `Máx. de caracteres: ${e.max}`,
  oe = e => `Max. de caractères : ${e.max}`,
  ue = e => `Numero massimo di caratteri: ${e.max}`,
  _e = e => `最大文字数: ${e.max}`,
  le = e => `Maks. znaków: ${e.max}`,
  fe = e => `Макс. символов: ${e.max}`,
  me = e => `Макс. символів: ${e.max}`,
  xe = e => `Số ký tự tối đa: ${e.max}`,
  de = (e, t = {}) => {
    const r = t.locale ?? _();
    return r === "en" ? ne(e) : r === "pt" ? ae(e) : r === "ch" ? ce(e) : r === "de" ? ie(e) : r === "es" ? se(e) : r === "fr" ? oe(e) : r === "it" ? ue(e) : r === "jp" ? _e(e) : r === "pl" ? le(e) : r === "ru" ? fe(e) : r === "uk" ? me(e) : xe(e)
  },
  he = e => `Min. characters: ${e.min}`,
  ve = e => `Mínimo de caracteres: ${e.min}`,
  ge = e => `最少字符数：${e.min}`,
  be = e => `Min. Zeichen: ${e.min}`,
  ke = e => `Mín. de caracteres: ${e.min}`,
  qe = e => `Min. de caractères : ${e.min}`,
  Me = e => `Numero minimo di caratteri: ${e.min}`,
  je = e => `最小文字数: ${e.min}`,
  we = e => `Min. znaków: ${e.min}`,
  Se = e => `Мин. символов: ${e.min}`,
  pe = e => `Мін. символів: ${e.min}`,
  ye = e => `Số ký tự tối thiểu: ${e.min}`,
  ze = (e, t = {}) => {
    const r = t.locale ?? _();
    return r === "en" ? he(e) : r === "pt" ? ve(e) : r === "ch" ? ge(e) : r === "de" ? be(e) : r === "es" ? ke(e) : r === "fr" ? qe(e) : r === "it" ? Me(e) : r === "jp" ? je(e) : r === "pl" ? we(e) : r === "ru" ? Se(e) : r === "uk" ? pe(e) : ye(e)
  },
  Ce = () => "Required",
  Le = () => "Obrigatório",
  Oe = () => "必填",
  Ie = () => "Erforderlich",
  Ze = () => "Obligatorio",
  Ae = () => "Obligatoire",
  Ee = () => "Obbligatorio",
  Ne = () => "必須",
  Te = () => "Wymagane",
  We = () => "Обязательно",
  Be = () => "Обовʼязково",
  De = () => "Bắt buộc",
  Ge = (e = {}, t = {}) => {
    const r = t.locale ?? _();
    return r === "en" ? Ce() : r === "pt" ? Le() : r === "ch" ? Oe() : r === "de" ? Ie() : r === "es" ? Ze() : r === "fr" ? Ae() : r === "it" ? Ee() : r === "jp" ? Ne() : r === "pl" ? Te() : r === "ru" ? We() : r === "uk" ? Be() : De()
  },
  Re = () => "Select the reason",
  Ve = () => "Selecione o motivo",
  Fe = () => "选择原因",
  He = () => "Grund auswählen",
  Je = () => "Selecciona el motivo",
  Ke = () => "Sélectionnez la raison",
  Pe = () => "Seleziona il motivo",
  Qe = () => "理由を選択",
  Ue = () => "Wybierz powód",
  Xe = () => "Выберите причину",
  Ye = () => "Виберіть причину",
  $e = () => "Chọn lý do",
  xr = (e = {}, t = {}) => {
    const r = t.locale ?? _();
    return r === "en" ? Re() : r === "pt" ? Ve() : r === "ch" ? Fe() : r === "de" ? He() : r === "es" ? Je() : r === "fr" ? Ke() : r === "it" ? Pe() : r === "jp" ? Qe() : r === "pl" ? Ue() : r === "ru" ? Xe() : r === "uk" ? Ye() : $e()
  };
var er = new Set(["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
  rr = q('<legend class="fieldset-legend"> </legend>'),
  tr = q('<span class="text-base-content/80"> </span>'),
  nr = q('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function dr(e, t) {
  A(t, !0);
  let r = f(t, "value", 15),
    p = f(t, "validate", 15),
    y = f(t, "disabled", 3, !1),
    M = f(t, "ref", 15),
    z = F(t, er),
    i = W("");
  const l = B(() => {
    var n;
    return ((n = r()) == null ? void 0 : n.length) ?? 0
  });
  p(C);

  function C() {
    return t.min !== void 0 && c(l) < t.min ? (h(i, t.min === 1 ? Ge() : ze({
      min: t.min
    }), !0), !1) : t.max !== void 0 && c(l) > t.max ? (h(i, de({
      max: t.max
    }), !0), !1) : (h(i, ""), !0)
  }
  E(() => {
    var n;
    t.max !== void 0 && c(l) > t.max && r((n = r()) == null ? void 0 : n.substring(0, t.max))
  });
  var m = nr(),
    j = o(m);
  {
    var L = n => {
      var a = rr(),
        d = o(a, !0);
      u(a), g(() => k(d, t.label)), b(n, a)
    };
    S(j, n => {
      t.label && n(L)
    })
  }
  var s = v(j, 2);
  N(s), D(s, () => ({
    ...z,
    class: `textarea w-full ${t.class??""}`,
    placeholder: t.placeholder,
    disabled: y(),
    [G]: {
      "textarea-error": !!c(i)
    }
  })), V(s, n => M(n), () => M());
  var w = v(s, 2),
    x = o(w),
    O = o(x, !0);
  u(x);
  var I = v(x, 2);
  {
    var Z = n => {
      var a = tr(),
        d = o(a, !0);
      u(a), g(() => k(d, t.max - c(l))), b(n, a)
    };
    S(I, n => {
      t.max !== void 0 && n(Z)
    })
  }
  u(w), u(m), g(() => k(O, c(i))), R(s, r), b(e, m), T()
}
export {
  dr as L, mr as g, xr as s
};