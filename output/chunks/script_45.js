import {
  g as n
} from "./sPnE0boO.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "12b42eb8-202a-4da8-bbd3-614a85a9de45", t._sentryDebugIdIdentifier = "sentry-dbid-12b42eb8-202a-4da8-bbd3-614a85a9de45")
  } catch {}
})();
const s = () => "Last pixel",
  i = () => "Último pixel",
  u = () => "最后一个像素",
  c = () => "Letzter Pixel",
  o = () => "Último píxel",
  a = () => "Dernier pixel",
  l = () => "Ultimo pixel",
  _ = () => "最後のピクセル",
  f = () => "Ostatni piksel",
  p = () => "Последний пиксель",
  d = () => "Останній піксель",
  v = () => "Pixel cuối cùng",
  _r = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? s() : r === "pt" ? i() : r === "ch" ? u() : r === "de" ? c() : r === "es" ? o() : r === "fr" ? a() : r === "it" ? l() : r === "jp" ? _() : r === "pl" ? f() : r === "ru" ? p() : r === "uk" ? d() : v()
  },
  h = () => "Save",
  b = () => "Salvar",
  x = () => "保存",
  g = () => "Speichern",
  k = () => "Guardar",
  S = () => "Enregistrer",
  m = () => "Salva",
  j = () => "保存",
  y = () => "Zapisz",
  z = () => "Сохранить",
  w = () => "Зберегти",
  E = () => "Lưu",
  fr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? h() : r === "pt" ? b() : r === "ch" ? x() : r === "de" ? g() : r === "es" ? k() : r === "fr" ? S() : r === "it" ? m() : r === "jp" ? j() : r === "pl" ? y() : r === "ru" ? z() : r === "uk" ? w() : E()
  },
  D = () => "Search",
  I = () => "Buscar",
  L = () => "搜索",
  T = () => "Suchen",
  V = () => "Buscar",
  B = () => "Rechercher",
  R = () => "Cerca",
  C = () => "検索",
  G = () => "Szukaj",
  O = () => "Поиск",
  P = () => "Пошук",
  A = () => "Tìm kiếm",
  pr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? D() : r === "pt" ? I() : r === "ch" ? L() : r === "de" ? T() : r === "es" ? V() : r === "fr" ? B() : r === "it" ? R() : r === "jp" ? C() : r === "pl" ? G() : r === "ru" ? O() : r === "uk" ? P() : A()
  },
  M = () => "Select the report reason",
  N = () => "Selecione o motivo da denúncia",
  U = () => "选择举报原因",
  W = () => "Grund für die Meldung auswählen",
  Y = () => "Selecciona el motivo del reporte",
  Z = () => "Sélectionnez la raison du signalement",
  q = () => "Seleziona il motivo della segnalazione",
  F = () => "通報理由を選択",
  H = () => "Wybierz powód zgłoszenia",
  J = () => "Выберите причину жалобы",
  K = () => "Виберіть причину скарги",
  Q = () => "Chọn lý do báo cáo",
  dr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? M() : r === "pt" ? N() : r === "ch" ? U() : r === "de" ? W() : r === "es" ? Y() : r === "fr" ? Z() : r === "it" ? q() : r === "jp" ? F() : r === "pl" ? H() : r === "ru" ? J() : r === "uk" ? K() : Q()
  },
  X = () => "Visit",
  $ = () => "Visitar",
  rr = () => "访问",
  er = () => "Besuchen",
  tr = () => "Visitar",
  nr = () => "Visiter",
  sr = () => "Visita",
  ir = () => "訪問",
  ur = () => "Odwiedź",
  cr = () => "Перейти",
  or = () => "Перейти",
  ar = () => "Thăm",
  vr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? X() : r === "pt" ? $() : r === "ch" ? rr() : r === "de" ? er() : r === "es" ? tr() : r === "fr" ? nr() : r === "it" ? sr() : r === "jp" ? ir() : r === "pl" ? ur() : r === "ru" ? cr() : r === "uk" ? or() : ar()
  };
export {
  fr as a, dr as b, _r as l, pr as s, vr as v
};