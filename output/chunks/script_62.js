import {
  g as t
} from "./BhCkpOlh.js";
const s = () => "Select the report reason",
  o = () => "Selecione o motivo da denúncia",
  _ = () => "选择举报原因",
  c = () => "Grund für die Meldung auswählen",
  a = () => "Selecciona el motivo del reporte",
  l = () => "Sélectionnez la raison du signalement",
  u = () => "Seleziona il motivo della segnalazione",
  i = () => "通報理由を選択",
  f = () => "Wybierz powód zgłoszenia",
  h = () => "Выберите причину жалобы",
  p = () => "Виберіть причину скарги",
  d = () => "Chọn lý do báo cáo",
  x = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? s() : e === "pt" ? o() : e === "ch" ? _() : e === "de" ? c() : e === "es" ? a() : e === "fr" ? l() : e === "it" ? u() : e === "jp" ? i() : e === "pl" ? f() : e === "ru" ? h() : e === "uk" ? p() : d()
  },
  S = () => "Select the reason",
  m = () => "Selecione o motivo",
  z = () => "选择原因",
  v = () => "Grund auswählen",
  g = () => "Selecciona el motivo",
  j = () => "Sélectionnez la raison",
  k = () => "Seleziona il motivo",
  w = () => "理由を選択",
  b = () => "Wybierz powód",
  y = () => "Выберите причину",
  C = () => "Виберіть причину",
  G = () => "Chọn lý do",
  L = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? S() : e === "pt" ? m() : e === "ch" ? z() : e === "de" ? v() : e === "es" ? g() : e === "fr" ? j() : e === "it" ? k() : e === "jp" ? w() : e === "pl" ? b() : e === "ru" ? y() : e === "uk" ? C() : G()
  };
export {
  x as a, L as s
};