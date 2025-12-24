import {
  g as n
} from "./C1q_NHWL.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "43095d4f05ba46dbb6f54b9ec680b6ad581b5a8e"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "f1786604-9554-494c-97c4-ca7287ffc061", r._sentryDebugIdIdentifier = "sentry-dbid-f1786604-9554-494c-97c4-ca7287ffc061")
  })()
} catch {}
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
  _e = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? s() : e === "pt" ? i() : e === "ch" ? u() : e === "de" ? c() : e === "es" ? o() : e === "fr" ? a() : e === "it" ? l() : e === "jp" ? _() : e === "pl" ? f() : e === "ru" ? p() : e === "uk" ? d() : v()
  },
  h = () => "Save",
  b = () => "Salvar",
  x = () => "保存",
  g = () => "Speichern",
  y = () => "Guardar",
  k = () => "Enregistrer",
  S = () => "Salva",
  m = () => "保存",
  w = () => "Zapisz",
  j = () => "Сохранить",
  z = () => "Зберегти",
  T = () => "Lưu",
  fe = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? h() : e === "pt" ? b() : e === "ch" ? x() : e === "de" ? g() : e === "es" ? y() : e === "fr" ? k() : e === "it" ? S() : e === "jp" ? m() : e === "pl" ? w() : e === "ru" ? j() : e === "uk" ? z() : T()
  },
  E = () => "Search",
  D = () => "Buscar",
  I = () => "搜索",
  L = () => "Suchen",
  V = () => "Buscar",
  B = () => "Rechercher",
  R = () => "Cerca",
  C = () => "検索",
  G = () => "Szukaj",
  O = () => "Поиск",
  P = () => "Пошук",
  A = () => "Tìm kiếm",
  pe = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? E() : e === "pt" ? D() : e === "ch" ? I() : e === "de" ? L() : e === "es" ? V() : e === "fr" ? B() : e === "it" ? R() : e === "jp" ? C() : e === "pl" ? G() : e === "ru" ? O() : e === "uk" ? P() : A()
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
  de = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? M() : e === "pt" ? N() : e === "ch" ? U() : e === "de" ? W() : e === "es" ? Y() : e === "fr" ? Z() : e === "it" ? q() : e === "jp" ? F() : e === "pl" ? H() : e === "ru" ? J() : e === "uk" ? K() : Q()
  },
  X = () => "Visit",
  $ = () => "Visitar",
  ee = () => "访问",
  re = () => "Besuchen",
  te = () => "Visitar",
  ne = () => "Visiter",
  se = () => "Visita",
  ie = () => "訪問",
  ue = () => "Odwiedź",
  ce = () => "Перейти",
  oe = () => "Перейти",
  ae = () => "Thăm",
  ve = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? X() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? te() : e === "fr" ? ne() : e === "it" ? se() : e === "jp" ? ie() : e === "pl" ? ue() : e === "ru" ? ce() : e === "uk" ? oe() : ae()
  };
export {
  fe as a, de as b, _e as l, pe as s, ve as v
};