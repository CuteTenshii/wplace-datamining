import {
  g as n
} from "./IUeg5Z1n.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "4732328793523ae4665fa1786d8c6f0e6111919b"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "7b967571-6129-4650-9f2b-fc788c6ecc07", r._sentryDebugIdIdentifier = "sentry-dbid-7b967571-6129-4650-9f2b-fc788c6ecc07")
  })()
} catch {}
const s = () => "Last pixel",
  i = () => "Último pixel",
  u = () => "最后一个像素",
  c = () => "Letzter Pixel",
  o = () => "Último píxel",
  l = () => "Dernier pixel",
  a = () => "Ultimo pixel",
  _ = () => "最後のピクセル",
  f = () => "Ostatni piksel",
  p = () => "Последний пиксель",
  d = () => "Останній піксель",
  h = () => "Pixel cuối cùng",
  $ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? s() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? c() : e === "es" ? o() : e === "fr" ? l() : e === "it" ? a() : e === "jp" ? _() : e === "pl" ? f() : e === "ru" ? p() : e === "uk" ? d() : h()
  },
  v = () => "Search",
  x = () => "Buscar",
  b = () => "搜索",
  g = () => "Suchen",
  y = () => "Buscar",
  k = () => "Rechercher",
  m = () => "Cerca",
  w = () => "検索",
  S = () => "Szukaj",
  j = () => "Поиск",
  z = () => "Пошук",
  T = () => "Tìm kiếm",
  ee = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? v() : e === "pt" ? x() : e === "ch" ? b() : e === "de" ? g() : e === "es" ? y() : e === "fr" ? k() : e === "it" ? m() : e === "jp" ? w() : e === "pl" ? S() : e === "ru" ? j() : e === "uk" ? z() : T()
  },
  D = () => "Select the report reason",
  E = () => "Selecione o motivo da denúncia",
  I = () => "选择举报原因",
  V = () => "Grund für die Meldung auswählen",
  L = () => "Selecciona el motivo del reporte",
  B = () => "Sélectionnez la raison du signalement",
  R = () => "Seleziona il motivo della segnalazione",
  C = () => "通報理由を選択",
  O = () => "Wybierz powód zgłoszenia",
  P = () => "Выберите причину жалобы",
  A = () => "Виберіть причину скарги",
  G = () => "Chọn lý do báo cáo",
  re = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? D() : e === "pt" ? E() : e === "ch" ? I() : e === "de" ? V() : e === "es" ? L() : e === "fr" ? B() : e === "it" ? R() : e === "jp" ? C() : e === "pl" ? O() : e === "ru" ? P() : e === "uk" ? A() : G()
  },
  M = () => "Visit",
  N = () => "Visitar",
  U = () => "访问",
  W = () => "Besuchen",
  Y = () => "Visitar",
  q = () => "Visiter",
  F = () => "Visita",
  H = () => "訪問",
  J = () => "Odwiedź",
  K = () => "Перейти",
  Q = () => "Перейти",
  X = () => "Thăm",
  te = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? M() : e === "pt" ? N() : e === "ch" ? U() : e === "de" ? W() : e === "es" ? Y() : e === "fr" ? q() : e === "it" ? F() : e === "jp" ? H() : e === "pl" ? J() : e === "ru" ? K() : e === "uk" ? Q() : X()
  };
export {
  re as a, $ as l, ee as s, te as v
};