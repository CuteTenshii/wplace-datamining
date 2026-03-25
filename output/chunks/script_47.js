import {
  g as n
} from "./Cq_U3JVf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cb8a8c42-bfef-4d63-bd7e-6819d1f929eb", e._sentryDebugIdIdentifier = "sentry-dbid-cb8a8c42-bfef-4d63-bd7e-6819d1f929eb")
  } catch {}
})();
const u = () => "Members",
  s = () => "Membros",
  o = () => "成员",
  i = () => "Mitglieder",
  c = () => "Miembros",
  f = () => "Membres",
  l = () => "Membri",
  a = () => "メンバー",
  b = () => "Członkowie",
  p = () => "Участники",
  m = () => "Учасники",
  d = () => "Thành viên",
  J = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? o() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? f() : r === "it" ? l() : r === "jp" ? a() : r === "pl" ? b() : r === "ru" ? p() : r === "uk" ? m() : d()
  },
  _ = () => "Player",
  y = () => "Jogador",
  g = () => "玩家",
  h = () => "Spieler",
  k = () => "Jugador",
  w = () => "Joueur",
  M = () => "Giocatore",
  v = () => "プレイヤー",
  E = () => "Gracz",
  I = () => "Игрок",
  j = () => "Гравець",
  D = () => "Người chơi",
  S = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? _() : r === "pt" ? y() : r === "ch" ? g() : r === "de" ? h() : r === "es" ? k() : r === "fr" ? w() : r === "it" ? M() : r === "jp" ? v() : r === "pl" ? E() : r === "ru" ? I() : r === "uk" ? j() : D()
  };
export {
  J as m, S as p
};