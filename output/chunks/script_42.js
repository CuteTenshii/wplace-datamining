import {
  g as n
} from "./BhCkpOlh.js";
const c = () => "Extra context on what happened (required)",
  o = () => "Mais informações sobre o que aconteceu (obrigatório)",
  u = () => "请提供发生情况的额外背景（必填）",
  a = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  i = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  s = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  _ = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  f = () => "何が起きたかの詳細な説明（必須）",
  h = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  l = () => "Дополнительный контекст о произошедшем (обязательно)",
  m = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  x = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  br = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? c() : e === "pt" ? o() : e === "ch" ? u() : e === "de" ? a() : e === "es" ? i() : e === "fr" ? s() : e === "it" ? _() : e === "jp" ? f() : e === "pl" ? h() : e === "ru" ? l() : e === "uk" ? m() : x()
  },
  d = r => `Max. characters: ${r.max}`,
  g = r => `Máximo de caracteres: ${r.max}`,
  p = r => `最大字符数：${r.max}`,
  v = r => `Max. Zeichen: ${r.max}`,
  $ = r => `Máx. de caracteres: ${r.max}`,
  k = r => `Max. de caractères : ${r.max}`,
  q = r => `Numero massimo di caratteri: ${r.max}`,
  b = r => `最大文字数: ${r.max}`,
  M = r => `Maks. znaków: ${r.max}`,
  j = r => `Макс. символов: ${r.max}`,
  w = r => `Макс. символів: ${r.max}`,
  z = r => `Số ký tự tối đa: ${r.max}`,
  Mr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? d(r) : e === "pt" ? g(r) : e === "ch" ? p(r) : e === "de" ? v(r) : e === "es" ? $(r) : e === "fr" ? k(r) : e === "it" ? q(r) : e === "jp" ? b(r) : e === "pl" ? M(r) : e === "ru" ? j(r) : e === "uk" ? w(r) : z(r)
  },
  y = r => `Min. characters: ${r.min}`,
  O = r => `Mínimo de caracteres: ${r.min}`,
  S = r => `最少字符数：${r.min}`,
  A = r => `Min. Zeichen: ${r.min}`,
  Z = r => `Mín. de caracteres: ${r.min}`,
  C = r => `Min. de caractères : ${r.min}`,
  E = r => `Numero minimo di caratteri: ${r.min}`,
  G = r => `最小文字数: ${r.min}`,
  I = r => `Min. znaków: ${r.min}`,
  N = r => `Мин. символов: ${r.min}`,
  W = r => `Мін. символів: ${r.min}`,
  B = r => `Số ký tự tối thiểu: ${r.min}`,
  jr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? y(r) : e === "pt" ? O(r) : e === "ch" ? S(r) : e === "de" ? A(r) : e === "es" ? Z(r) : e === "fr" ? C(r) : e === "it" ? E(r) : e === "jp" ? G(r) : e === "pl" ? I(r) : e === "ru" ? N(r) : e === "uk" ? W(r) : B(r)
  },
  D = () => "Other",
  K = () => "Outro motivo",
  L = () => "其他",
  R = () => "Anderer Grund",
  T = () => "Otro",
  V = () => "Autre raison",
  F = () => "Altro motivo",
  H = () => "その他",
  J = () => "Inny powód",
  P = () => "Другое",
  Q = () => "Інше",
  U = () => "Khác",
  wr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? D() : e === "pt" ? K() : e === "ch" ? L() : e === "de" ? R() : e === "es" ? T() : e === "fr" ? V() : e === "it" ? F() : e === "jp" ? H() : e === "pl" ? J() : e === "ru" ? P() : e === "uk" ? Q() : U()
  },
  X = () => "Required",
  Y = () => "Obrigatório",
  rr = () => "必填",
  er = () => "Erforderlich",
  tr = () => "Obligatorio",
  nr = () => "Obligatoire",
  cr = () => "Obbligatorio",
  or = () => "必須",
  ur = () => "Wymagane",
  ar = () => "Обязательно",
  ir = () => "Обовʼязково",
  sr = () => "Bắt buộc",
  zr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? X() : e === "pt" ? Y() : e === "ch" ? rr() : e === "de" ? er() : e === "es" ? tr() : e === "fr" ? nr() : e === "it" ? cr() : e === "jp" ? or() : e === "pl" ? ur() : e === "ru" ? ar() : e === "uk" ? ir() : sr()
  },
  _r = () => "Select the reason",
  fr = () => "Selecione o motivo",
  hr = () => "选择原因",
  lr = () => "Grund auswählen",
  mr = () => "Selecciona el motivo",
  xr = () => "Sélectionnez la raison",
  dr = () => "Seleziona il motivo",
  gr = () => "理由を選択",
  pr = () => "Wybierz powód",
  vr = () => "Выберите причину",
  $r = () => "Виберіть причину",
  kr = () => "Chọn lý do",
  yr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? _r() : e === "pt" ? fr() : e === "ch" ? hr() : e === "de" ? lr() : e === "es" ? mr() : e === "fr" ? xr() : e === "it" ? dr() : e === "jp" ? gr() : e === "pl" ? pr() : e === "ru" ? vr() : e === "uk" ? $r() : kr()
  };
export {
  Mr as a, br as g, jr as m, wr as o, zr as r, yr as s
};