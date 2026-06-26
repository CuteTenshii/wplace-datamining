import {
  g as r
} from "./BhCkpOlh.js";
const o = () => "Extra context on what happened (required)",
  s = () => "Mais informações sobre o que aconteceu (obrigatório)",
  c = () => "请提供发生情况的额外背景（必填）",
  _ = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  i = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  u = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  a = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  l = () => "何が起きたかの詳細な説明（必須）",
  f = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  h = () => "Дополнительный контекст о произошедшем (обязательно)",
  p = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  x = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  F = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? o() : e === "pt" ? s() : e === "ch" ? c() : e === "de" ? _() : e === "es" ? i() : e === "fr" ? u() : e === "it" ? a() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? h() : e === "uk" ? p() : x()
  },
  g = () => "Select the report reason",
  d = () => "Selecione o motivo da denúncia",
  v = () => "选择举报原因",
  m = () => "Grund für die Meldung auswählen",
  b = () => "Selecciona el motivo del reporte",
  z = () => "Sélectionnez la raison du signalement",
  S = () => "Seleziona il motivo della segnalazione",
  k = () => "通報理由を選択",
  w = () => "Wybierz powód zgłoszenia",
  j = () => "Выберите причину жалобы",
  y = () => "Виберіть причину скарги",
  q = () => "Chọn lý do báo cáo",
  H = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? g() : e === "pt" ? d() : e === "ch" ? v() : e === "de" ? m() : e === "es" ? b() : e === "fr" ? z() : e === "it" ? S() : e === "jp" ? k() : e === "pl" ? w() : e === "ru" ? j() : e === "uk" ? y() : q()
  },
  M = () => "Select the reason",
  C = () => "Selecione o motivo",
  G = () => "选择原因",
  W = () => "Grund auswählen",
  D = () => "Selecciona el motivo",
  E = () => "Sélectionnez la raison",
  I = () => "Seleziona il motivo",
  L = () => "理由を選択",
  T = () => "Wybierz powód",
  V = () => "Выберите причину",
  Z = () => "Виберіть причину",
  A = () => "Chọn lý do",
  J = (n = {}, t = {}) => {
    const e = t.locale ?? r();
    return e === "en" ? M() : e === "pt" ? C() : e === "ch" ? G() : e === "de" ? W() : e === "es" ? D() : e === "fr" ? E() : e === "it" ? I() : e === "jp" ? L() : e === "pl" ? T() : e === "ru" ? V() : e === "uk" ? Z() : A()
  };
export {
  H as a, F as g, J as s
};