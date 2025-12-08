import {
  g as t
} from "./BsHwvxn8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e76e01713b9f24724b47470026b2b700ac9e05af"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c99c662-d21f-44b8-bfb3-2c88b42653d4", e._sentryDebugIdIdentifier = "sentry-dbid-5c99c662-d21f-44b8-bfb3-2c88b42653d4")
  })()
} catch {}
const u = () => "Members",
  s = () => "Membros",
  o = () => "成员",
  i = () => "Mitglieder",
  c = () => "Miembros",
  f = () => "Membres",
  a = () => "Membri",
  l = () => "メンバー",
  p = () => "Członkowie",
  b = () => "Участники",
  d = () => "Учасники",
  _ = () => "Thành viên",
  Z = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? o() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? f() : r === "it" ? a() : r === "jp" ? l() : r === "pl" ? p() : r === "ru" ? b() : r === "uk" ? d() : _()
  },
  m = () => "Player",
  y = () => "Jogador",
  v = () => "玩家",
  g = () => "Spieler",
  h = () => "Jugador",
  w = () => "Joueur",
  k = () => "Giocatore",
  S = () => "プレイヤー",
  j = () => "Gracz",
  E = () => "Игрок",
  M = () => "Гравець",
  T = () => "Người chơi",
  q = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? m() : r === "pt" ? y() : r === "ch" ? v() : r === "de" ? g() : r === "es" ? h() : r === "fr" ? w() : r === "it" ? k() : r === "jp" ? S() : r === "pl" ? j() : r === "ru" ? E() : r === "uk" ? M() : T()
  },
  I = () => "Save",
  D = () => "Salvar",
  z = () => "保存",
  G = () => "Speichern",
  J = () => "Guardar",
  L = () => "Enregistrer",
  N = () => "Salva",
  R = () => "保存",
  x = () => "Zapisz",
  A = () => "Сохранить",
  C = () => "Зберегти",
  P = () => "Lưu",
  B = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? I() : r === "pt" ? D() : r === "ch" ? z() : r === "de" ? G() : r === "es" ? J() : r === "fr" ? L() : r === "it" ? N() : r === "jp" ? R() : r === "pl" ? x() : r === "ru" ? A() : r === "uk" ? C() : P()
  };
export {
  Z as m, q as p, B as s
};