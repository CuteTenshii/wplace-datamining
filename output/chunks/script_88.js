import {
  g as n
} from "./BhCkpOlh.js";
const i = () => "Alliance name",
  a = () => "Nome da aliança",
  _ = () => "联盟名称",
  o = () => "Allianzname",
  c = () => "Nombre de la alianza",
  s = () => "Nom de l'alliance",
  l = () => "Nome dell'alleanza",
  u = () => "アライアンス名",
  d = () => "Nazwa sojuszu",
  p = () => "Название альянса",
  f = () => "Назва альянсу",
  g = () => "Tên liên minh",
  Y = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? i() : r === "pt" ? a() : r === "ch" ? _() : r === "de" ? o() : r === "es" ? c() : r === "fr" ? s() : r === "it" ? l() : r === "jp" ? u() : r === "pl" ? d() : r === "ru" ? p() : r === "uk" ? f() : g()
  },
  v = () => "Description",
  m = () => "Descrição",
  D = () => "描述",
  $ = () => "Beschreibung",
  h = () => "Descripción",
  j = () => "Description",
  k = () => "Descrizione",
  z = () => "説明",
  R = () => "Opis",
  N = () => "Описание",
  b = () => "Опис",
  I = () => "Mô tả",
  rr = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? v() : r === "pt" ? m() : r === "ch" ? D() : r === "de" ? $() : r === "es" ? h() : r === "fr" ? j() : r === "it" ? k() : r === "jp" ? z() : r === "pl" ? R() : r === "ru" ? N() : r === "uk" ? b() : I()
  },
  w = () => "Discord invite",
  A = () => "Convite do Discord",
  B = () => "Discord 邀请",
  L = () => "Discord-Einladung",
  x = () => "Invitación de Discord",
  C = () => "Invitation Discord",
  E = () => "Invito Discord",
  M = () => "Discord招待",
  O = () => "Zaproszenie na Discord",
  T = () => "Приглашение в Discord",
  Z = () => "Запрошення в Discord",
  q = () => "Lời mời Discord",
  er = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? w() : r === "pt" ? A() : r === "ch" ? B() : r === "de" ? L() : r === "es" ? x() : r === "fr" ? C() : r === "it" ? E() : r === "jp" ? M() : r === "pl" ? O() : r === "ru" ? T() : r === "uk" ? Z() : q()
  },
  y = e => `Revision ${e.id}`,
  F = e => `Revisao ${e.id}`,
  G = e => `修订 ${e.id}`,
  H = e => `Revision ${e.id}`,
  J = e => `Revisión ${e.id}`,
  K = e => `Révision ${e.id}`,
  P = e => `Revisione ${e.id}`,
  Q = e => `リビジョン ${e.id}`,
  S = e => `Rewizja ${e.id}`,
  U = e => `Ревизия ${e.id}`,
  V = e => `Ревізія ${e.id}`,
  W = e => `Bản sửa đổi ${e.id}`,
  tr = (e, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? y(e) : r === "pt" ? F(e) : r === "ch" ? G(e) : r === "de" ? H(e) : r === "es" ? J(e) : r === "fr" ? K(e) : r === "it" ? P(e) : r === "jp" ? Q(e) : r === "pl" ? S(e) : r === "ru" ? U(e) : r === "uk" ? V(e) : W(e)
  };
export {
  er as a, rr as b, Y as c, tr as d
};