import {
  g as n
} from "./BhCkpOlh.js";
const c = () => "Extra context on what happened (required)",
  a = () => "Mais informações sobre o que aconteceu (obrigatório)",
  o = () => "请提供发生情况的额外背景（必填）",
  i = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  u = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  s = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  _ = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  f = () => "何が起きたかの詳細な説明（必須）",
  m = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  l = () => "Дополнительный контекст о произошедшем (обязательно)",
  h = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  x = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  fr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? c() : e === "pt" ? a() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? _() : e === "jp" ? f() : e === "pl" ? m() : e === "ru" ? l() : e === "uk" ? h() : x()
  },
  d = r => `Max. characters: ${r.max}`,
  g = r => `Máximo de caracteres: ${r.max}`,
  $ = r => `最大字符数：${r.max}`,
  v = r => `Max. Zeichen: ${r.max}`,
  p = r => `Máx. de caracteres: ${r.max}`,
  k = r => `Max. de caractères : ${r.max}`,
  q = r => `Numero massimo di caratteri: ${r.max}`,
  b = r => `最大文字数: ${r.max}`,
  M = r => `Maks. znaków: ${r.max}`,
  j = r => `Макс. символов: ${r.max}`,
  z = r => `Макс. символів: ${r.max}`,
  w = r => `Số ký tự tối đa: ${r.max}`,
  mr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? d(r) : e === "pt" ? g(r) : e === "ch" ? $(r) : e === "de" ? v(r) : e === "es" ? p(r) : e === "fr" ? k(r) : e === "it" ? q(r) : e === "jp" ? b(r) : e === "pl" ? M(r) : e === "ru" ? j(r) : e === "uk" ? z(r) : w(r)
  },
  S = r => `Min. characters: ${r.min}`,
  y = r => `Mínimo de caracteres: ${r.min}`,
  O = r => `最少字符数：${r.min}`,
  Z = r => `Min. Zeichen: ${r.min}`,
  C = r => `Mín. de caracteres: ${r.min}`,
  E = r => `Min. de caractères : ${r.min}`,
  N = r => `Numero minimo di caratteri: ${r.min}`,
  W = r => `最小文字数: ${r.min}`,
  B = r => `Min. znaków: ${r.min}`,
  D = r => `Мин. символов: ${r.min}`,
  G = r => `Мін. символів: ${r.min}`,
  I = r => `Số ký tự tối thiểu: ${r.min}`,
  lr = (r, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? S(r) : e === "pt" ? y(r) : e === "ch" ? O(r) : e === "de" ? Z(r) : e === "es" ? C(r) : e === "fr" ? E(r) : e === "it" ? N(r) : e === "jp" ? W(r) : e === "pl" ? B(r) : e === "ru" ? D(r) : e === "uk" ? G(r) : I(r)
  },
  L = () => "Required",
  R = () => "Obrigatório",
  T = () => "必填",
  V = () => "Erforderlich",
  A = () => "Obligatorio",
  F = () => "Obligatoire",
  H = () => "Obbligatorio",
  J = () => "必須",
  K = () => "Wymagane",
  P = () => "Обязательно",
  Q = () => "Обовʼязково",
  U = () => "Bắt buộc",
  hr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? L() : e === "pt" ? R() : e === "ch" ? T() : e === "de" ? V() : e === "es" ? A() : e === "fr" ? F() : e === "it" ? H() : e === "jp" ? J() : e === "pl" ? K() : e === "ru" ? P() : e === "uk" ? Q() : U()
  },
  X = () => "Select the reason",
  Y = () => "Selecione o motivo",
  rr = () => "选择原因",
  er = () => "Grund auswählen",
  tr = () => "Selecciona el motivo",
  nr = () => "Sélectionnez la raison",
  cr = () => "Seleziona il motivo",
  ar = () => "理由を選択",
  or = () => "Wybierz powód",
  ir = () => "Выберите причину",
  ur = () => "Виберіть причину",
  sr = () => "Chọn lý do",
  xr = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? X() : e === "pt" ? Y() : e === "ch" ? rr() : e === "de" ? er() : e === "es" ? tr() : e === "fr" ? nr() : e === "it" ? cr() : e === "jp" ? ar() : e === "pl" ? or() : e === "ru" ? ir() : e === "uk" ? ur() : sr()
  };
export {
  mr as a, fr as g, lr as m, hr as r, xr as s
};