import {
  g as n
} from "./CLdytBYG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f3916074-7b40-4047-be6a-c4edffb7c113", e._sentryDebugIdIdentifier = "sentry-dbid-f3916074-7b40-4047-be6a-c4edffb7c113")
  } catch {}
})();
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
  m = () => "Учасники",
  d = () => "Thành viên",
  J = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? o() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? f() : r === "it" ? a() : r === "jp" ? l() : r === "pl" ? p() : r === "ru" ? b() : r === "uk" ? m() : d()
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