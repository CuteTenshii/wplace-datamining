import {
  g as n
} from "./n6S4vljj.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "499b14f045c01e257aa2f9d700904a576cc252cf"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "3c170bda-c666-43d6-85a6-5d1a13ae8f7a", r._sentryDebugIdIdentifier = "sentry-dbid-3c170bda-c666-43d6-85a6-5d1a13ae8f7a")
  } catch {}
})();
const c = () => "Extra context on what happened (required)",
  o = () => "Mais informações sobre o que aconteceu (obrigatório)",
  a = () => "请提供发生情况的额外背景（必填）",
  i = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  u = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  s = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  _ = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  f = () => "何が起きたかの詳細な説明（必須）",
  h = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  l = () => "Дополнительный контекст о произошедшем (обязательно)",
  m = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  d = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  qr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? c() : e === "pt" ? o() : e === "ch" ? a() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? _() : e === "jp" ? f() : e === "pl" ? h() : e === "ru" ? l() : e === "uk" ? m() : d()
  },
  x = r => `Max. characters: ${r.max}`,
  g = r => `Máximo de caracteres: ${r.max}`,
  p = r => `最大字符数：${r.max}`,
  b = r => `Max. Zeichen: ${r.max}`,
  v = r => `Máx. de caracteres: ${r.max}`,
  $ = r => `Max. de caractères : ${r.max}`,
  k = r => `Numero massimo di caratteri: ${r.max}`,
  q = r => `最大文字数: ${r.max}`,
  y = r => `Maks. znaków: ${r.max}`,
  M = r => `Макс. символов: ${r.max}`,
  w = r => `Макс. символів: ${r.max}`,
  j = r => `Số ký tự tối đa: ${r.max}`,
  yr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? x(r) : e === "pt" ? g(r) : e === "ch" ? p(r) : e === "de" ? b(r) : e === "es" ? v(r) : e === "fr" ? $(r) : e === "it" ? k(r) : e === "jp" ? q(r) : e === "pl" ? y(r) : e === "ru" ? M(r) : e === "uk" ? w(r) : j(r)
  },
  S = r => `Min. characters: ${r.min}`,
  z = r => `Mínimo de caracteres: ${r.min}`,
  E = r => `最少字符数：${r.min}`,
  I = r => `Min. Zeichen: ${r.min}`,
  O = r => `Mín. de caracteres: ${r.min}`,
  D = r => `Min. de caractères : ${r.min}`,
  A = r => `Numero minimo di caratteri: ${r.min}`,
  T = r => `最小文字数: ${r.min}`,
  N = r => `Min. znaków: ${r.min}`,
  R = r => `Мин. символов: ${r.min}`,
  Z = r => `Мін. символів: ${r.min}`,
  C = r => `Số ký tự tối thiểu: ${r.min}`,
  Mr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? S(r) : e === "pt" ? z(r) : e === "ch" ? E(r) : e === "de" ? I(r) : e === "es" ? O(r) : e === "fr" ? D(r) : e === "it" ? A(r) : e === "jp" ? T(r) : e === "pl" ? N(r) : e === "ru" ? R(r) : e === "uk" ? Z(r) : C(r)
  },
  G = () => "Other",
  L = () => "Outro motivo",
  W = () => "其他",
  B = () => "Anderer Grund",
  K = () => "Otro",
  V = () => "Autre raison",
  Y = () => "Altro motivo",
  F = () => "その他",
  H = () => "Inny powód",
  J = () => "Другое",
  P = () => "Інше",
  Q = () => "Khác",
  wr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? G() : e === "pt" ? L() : e === "ch" ? W() : e === "de" ? B() : e === "es" ? K() : e === "fr" ? V() : e === "it" ? Y() : e === "jp" ? F() : e === "pl" ? H() : e === "ru" ? J() : e === "uk" ? P() : Q()
  },
  U = () => "Required",
  X = () => "Obrigatório",
  rr = () => "必填",
  er = () => "Erforderlich",
  tr = () => "Obligatorio",
  nr = () => "Obligatoire",
  cr = () => "Obbligatorio",
  or = () => "必須",
  ar = () => "Wymagane",
  ir = () => "Обязательно",
  ur = () => "Обовʼязково",
  sr = () => "Bắt buộc",
  jr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? U() : e === "pt" ? X() : e === "ch" ? rr() : e === "de" ? er() : e === "es" ? tr() : e === "fr" ? nr() : e === "it" ? cr() : e === "jp" ? or() : e === "pl" ? ar() : e === "ru" ? ir() : e === "uk" ? ur() : sr()
  },
  _r = () => "Select the reason",
  fr = () => "Selecione o motivo",
  hr = () => "选择原因",
  lr = () => "Grund auswählen",
  mr = () => "Selecciona el motivo",
  dr = () => "Sélectionnez la raison",
  xr = () => "Seleziona il motivo",
  gr = () => "理由を選択",
  pr = () => "Wybierz powód",
  br = () => "Выберите причину",
  vr = () => "Виберіть причину",
  $r = () => "Chọn lý do",
  Sr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? _r() : e === "pt" ? fr() : e === "ch" ? hr() : e === "de" ? lr() : e === "es" ? mr() : e === "fr" ? dr() : e === "it" ? xr() : e === "jp" ? gr() : e === "pl" ? pr() : e === "ru" ? br() : e === "uk" ? vr() : $r()
  };
export {
  yr as a, qr as g, Mr as m, wr as o, jr as r, Sr as s
};