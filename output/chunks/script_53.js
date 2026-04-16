import {
  g as n
} from "./C6AhFN09.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
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
  l = () => "Membri",
  a = () => "メンバー",
  p = () => "Członkowie",
  m = () => "Участники",
  b = () => "Учасники",
  _ = () => "Thành viên",
  J = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? o() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? f() : r === "it" ? l() : r === "jp" ? a() : r === "pl" ? p() : r === "ru" ? m() : r === "uk" ? b() : _()
  },
  d = () => "Player",
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
    return r === "en" ? d() : r === "pt" ? y() : r === "ch" ? g() : r === "de" ? h() : r === "es" ? k() : r === "fr" ? w() : r === "it" ? M() : r === "jp" ? v() : r === "pl" ? E() : r === "ru" ? I() : r === "uk" ? j() : D()
  };
export {
  J as m, S as p
};