import {
  g as i
} from "./ClPe_s4O.js";
import "./s6SinlRJ.js";
import {
  p as A,
  j as c,
  u as D,
  i as w,
  e as L,
  K as C,
  f as p,
  d as o,
  s as h,
  bi as N,
  r as s,
  t as x,
  b as v,
  c as R
} from "./DCrkY18i.js";
import {
  s as b
} from "./BQ-01Ncd.js";
import {
  i as q
} from "./CAN2JA9L.js";
import {
  b as Z,
  C as G
} from "./DyzzNIjt.js";
import {
  b as K
} from "./DLeuPI2V.js";
import {
  p as g,
  r as W
} from "./CRdj_r_F.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f20ce6c7de81c065c8837dcafe40492e8d59c7f8"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "faf07862-80fe-415b-bc0c-ac802ef8d950", e._sentryDebugIdIdentifier = "sentry-dbid-faf07862-80fe-415b-bc0c-ac802ef8d950")
  })()
} catch {}
const B = () => "Extra context on what happened (required)",
  V = () => "Mais informações sobre o que aconteceu (obrigatório)",
  Y = () => "请提供发生情况的额外背景（必填）",
  F = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  H = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  J = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  P = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  Q = () => "何が起きたかの詳細な説明（必須）",
  U = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  X = () => "Дополнительный контекст о произошедшем (обязательно)",
  $ = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  ee = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  yr = (e = {}, t = {}) => {
    const r = t.locale ?? i();
    return r === "en" ? B() : r === "pt" ? V() : r === "ch" ? Y() : r === "de" ? F() : r === "es" ? H() : r === "fr" ? J() : r === "it" ? P() : r === "jp" ? Q() : r === "pl" ? U() : r === "ru" ? X() : r === "uk" ? $() : ee()
  },
  re = e => `Max. characters: ${e.max}`,
  te = e => `Máximo de caracteres: ${e.max}`,
  ne = e => `最大字符数：${e.max}`,
  ae = e => `Max. Zeichen: ${e.max}`,
  ce = e => `Máx. de caracteres: ${e.max}`,
  ie = e => `Max. de caractères : ${e.max}`,
  oe = e => `Numero massimo di caratteri: ${e.max}`,
  se = e => `最大文字数: ${e.max}`,
  ue = e => `Maks. znaków: ${e.max}`,
  _e = e => `Макс. символов: ${e.max}`,
  fe = e => `Макс. символів: ${e.max}`,
  le = e => `Số ký tự tối đa: ${e.max}`,
  de = (e, t = {}) => {
    const r = t.locale ?? i();
    return r === "en" ? re(e) : r === "pt" ? te(e) : r === "ch" ? ne(e) : r === "de" ? ae(e) : r === "es" ? ce(e) : r === "fr" ? ie(e) : r === "it" ? oe(e) : r === "jp" ? se(e) : r === "pl" ? ue(e) : r === "ru" ? _e(e) : r === "uk" ? fe(e) : le(e)
  },
  me = e => `Min. characters: ${e.min}`,
  he = e => `Mínimo de caracteres: ${e.min}`,
  xe = e => `最少字符数：${e.min}`,
  ve = e => `Min. Zeichen: ${e.min}`,
  be = e => `Mín. de caracteres: ${e.min}`,
  ge = e => `Min. de caractères : ${e.min}`,
  pe = e => `Numero minimo di caratteri: ${e.min}`,
  ye = e => `最小文字数: ${e.min}`,
  ke = e => `Min. znaków: ${e.min}`,
  we = e => `Мин. символов: ${e.min}`,
  qe = e => `Мін. символів: ${e.min}`,
  Me = e => `Số ký tự tối thiểu: ${e.min}`,
  je = (e, t = {}) => {
    const r = t.locale ?? i();
    return r === "en" ? me(e) : r === "pt" ? he(e) : r === "ch" ? xe(e) : r === "de" ? ve(e) : r === "es" ? be(e) : r === "fr" ? ge(e) : r === "it" ? pe(e) : r === "jp" ? ye(e) : r === "pl" ? ke(e) : r === "ru" ? we(e) : r === "uk" ? qe(e) : Me(e)
  },
  Se = () => "Other",
  ze = () => "Outro motivo",
  Ie = () => "其他",
  Ee = () => "Anderer Grund",
  Oe = () => "Otro",
  Te = () => "Autre raison",
  Ae = () => "Altro motivo",
  De = () => "その他",
  Le = () => "Inny powód",
  Ce = () => "Другое",
  Ne = () => "Інше",
  Re = () => "Khác",
  kr = (e = {}, t = {}) => {
    const r = t.locale ?? i();
    return r === "en" ? Se() : r === "pt" ? ze() : r === "ch" ? Ie() : r === "de" ? Ee() : r === "es" ? Oe() : r === "fr" ? Te() : r === "it" ? Ae() : r === "jp" ? De() : r === "pl" ? Le() : r === "ru" ? Ce() : r === "uk" ? Ne() : Re()
  },
  Ze = () => "Required",
  Ge = () => "Obrigatório",
  Ke = () => "必填",
  We = () => "Erforderlich",
  Be = () => "Obligatorio",
  Ve = () => "Obligatoire",
  Ye = () => "Obbligatorio",
  Fe = () => "必須",
  He = () => "Wymagane",
  Je = () => "Обязательно",
  Pe = () => "Обовʼязково",
  Qe = () => "Bắt buộc",
  Ue = (e = {}, t = {}) => {
    const r = t.locale ?? i();
    return r === "en" ? Ze() : r === "pt" ? Ge() : r === "ch" ? Ke() : r === "de" ? We() : r === "es" ? Be() : r === "fr" ? Ve() : r === "it" ? Ye() : r === "jp" ? Fe() : r === "pl" ? He() : r === "ru" ? Je() : r === "uk" ? Pe() : Qe()
  },
  Xe = () => "Select the reason",
  $e = () => "Selecione o motivo",
  er = () => "选择原因",
  rr = () => "Grund auswählen",
  tr = () => "Selecciona el motivo",
  nr = () => "Sélectionnez la raison",
  ar = () => "Seleziona il motivo",
  cr = () => "理由を選択",
  ir = () => "Wybierz powód",
  or = () => "Выберите причину",
  sr = () => "Виберіть причину",
  ur = () => "Chọn lý do",
  wr = (e = {}, t = {}) => {
    const r = t.locale ?? i();
    return r === "en" ? Xe() : r === "pt" ? $e() : r === "ch" ? er() : r === "de" ? rr() : r === "es" ? tr() : r === "fr" ? nr() : r === "it" ? ar() : r === "jp" ? cr() : r === "pl" ? ir() : r === "ru" ? or() : r === "uk" ? sr() : ur()
  };
var _r = p('<legend class="fieldset-legend"> </legend>'),
  fr = p('<span class="text-base-content/80"> </span>'),
  lr = p('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function qr(e, t) {
  A(t, !0);
  let r = g(t, "value", 15),
    M = g(t, "validate", 15),
    j = g(t, "disabled", 3, !1),
    S = W(t, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled"]),
    u = L("");
  const _ = D(() => {
    var n;
    return ((n = r()) == null ? void 0 : n.length) ?? 0
  });
  M(z);

  function z() {
    return t.min !== void 0 && c(_) < t.min ? (w(u, t.min === 1 ? Ue() : je({
      min: t.min
    }), !0), !1) : t.max !== void 0 && c(_) > t.max ? (w(u, de({
      max: t.max
    }), !0), !1) : !0
  }
  C(() => {
    var n;
    t.max !== void 0 && c(_) > t.max && r((n = r()) == null ? void 0 : n.substring(0, t.max))
  });
  var l = lr(),
    y = o(l);
  {
    var I = n => {
      var a = _r(),
        m = o(a, !0);
      s(a), x(() => b(m, t.label)), v(n, a)
    };
    q(y, n => {
      t.label && n(I)
    })
  }
  var f = h(y, 2);
  N(f), Z(f, () => ({
    ...S,
    class: `textarea w-full ${t.class??""}`,
    placeholder: t.placeholder,
    disabled: j(),
    [G]: {
      "textarea-error": !!c(u)
    }
  }));
  var k = h(f, 2),
    d = o(k),
    E = o(d, !0);
  s(d);
  var O = h(d, 2);
  {
    var T = n => {
      var a = fr(),
        m = o(a, !0);
      s(a), x(() => b(m, t.max - c(_))), v(n, a)
    };
    q(O, n => {
      t.max !== void 0 && n(T)
    })
  }
  s(k), s(l), x(() => b(E, c(u))), K(f, r), v(e, l), R()
}
export {
  qr as L, yr as g, kr as o, wr as s
};