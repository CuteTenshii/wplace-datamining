import {
  g as n
} from "./CWSLadsn.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "c610c432-f2a4-4db6-8247-2674955666af", r._sentryDebugIdIdentifier = "sentry-dbid-c610c432-f2a4-4db6-8247-2674955666af")
  })()
} catch {}
const c = () => "Extra context on what happened (required)",
  o = () => "Mais informações sobre o que aconteceu (obrigatório)",
  i = () => "请提供发生情况的额外背景（必填）",
  a = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  u = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  s = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  _ = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  f = () => "何が起きたかの詳細な説明（必須）",
  l = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  h = () => "Дополнительный контекст о произошедшем (обязательно)",
  d = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  m = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  kr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? c() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? a() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? _() : e === "jp" ? f() : e === "pl" ? l() : e === "ru" ? h() : e === "uk" ? d() : m()
  },
  x = r => `Max. characters: ${r.max}`,
  g = r => `Máximo de caracteres: ${r.max}`,
  p = r => `最大字符数：${r.max}`,
  b = r => `Max. Zeichen: ${r.max}`,
  v = r => `Máx. de caracteres: ${r.max}`,
  $ = r => `Max. de caractères : ${r.max}`,
  y = r => `Numero massimo di caratteri: ${r.max}`,
  k = r => `最大文字数: ${r.max}`,
  q = r => `Maks. znaków: ${r.max}`,
  w = r => `Макс. символов: ${r.max}`,
  M = r => `Макс. символів: ${r.max}`,
  j = r => `Số ký tự tối đa: ${r.max}`,
  qr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? x(r) : e === "pt" ? g(r) : e === "ch" ? p(r) : e === "de" ? b(r) : e === "es" ? v(r) : e === "fr" ? $(r) : e === "it" ? y(r) : e === "jp" ? k(r) : e === "pl" ? q(r) : e === "ru" ? w(r) : e === "uk" ? M(r) : j(r)
  },
  S = r => `Min. characters: ${r.min}`,
  z = r => `Mínimo de caracteres: ${r.min}`,
  E = r => `最少字符数：${r.min}`,
  I = r => `Min. Zeichen: ${r.min}`,
  O = r => `Mín. de caracteres: ${r.min}`,
  T = r => `Min. de caractères : ${r.min}`,
  D = r => `Numero minimo di caratteri: ${r.min}`,
  A = r => `最小文字数: ${r.min}`,
  N = r => `Min. znaków: ${r.min}`,
  R = r => `Мин. символов: ${r.min}`,
  Z = r => `Мін. символів: ${r.min}`,
  C = r => `Số ký tự tối thiểu: ${r.min}`,
  wr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? S(r) : e === "pt" ? z(r) : e === "ch" ? E(r) : e === "de" ? I(r) : e === "es" ? O(r) : e === "fr" ? T(r) : e === "it" ? D(r) : e === "jp" ? A(r) : e === "pl" ? N(r) : e === "ru" ? R(r) : e === "uk" ? Z(r) : C(r)
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
  Mr = (r = {}, t = {}) => {
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
  ir = () => "Wymagane",
  ar = () => "Обязательно",
  ur = () => "Обовʼязково",
  sr = () => "Bắt buộc",
  jr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? U() : e === "pt" ? X() : e === "ch" ? rr() : e === "de" ? er() : e === "es" ? tr() : e === "fr" ? nr() : e === "it" ? cr() : e === "jp" ? or() : e === "pl" ? ir() : e === "ru" ? ar() : e === "uk" ? ur() : sr()
  },
  _r = () => "Select the reason",
  fr = () => "Selecione o motivo",
  lr = () => "选择原因",
  hr = () => "Grund auswählen",
  dr = () => "Selecciona el motivo",
  mr = () => "Sélectionnez la raison",
  xr = () => "Seleziona il motivo",
  gr = () => "理由を選択",
  pr = () => "Wybierz powód",
  br = () => "Выберите причину",
  vr = () => "Виберіть причину",
  $r = () => "Chọn lý do",
  Sr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? _r() : e === "pt" ? fr() : e === "ch" ? lr() : e === "de" ? hr() : e === "es" ? dr() : e === "fr" ? mr() : e === "it" ? xr() : e === "jp" ? gr() : e === "pl" ? pr() : e === "ru" ? br() : e === "uk" ? vr() : $r()
  };
export {
  qr as a, kr as g, wr as m, Mr as o, jr as r, Sr as s
};