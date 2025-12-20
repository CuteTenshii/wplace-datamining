import {
  g as t
} from "./Cg2XhUFn.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "39650ef3-fbdd-4a8f-853e-9a659ec45539", r._sentryDebugIdIdentifier = "sentry-dbid-39650ef3-fbdd-4a8f-853e-9a659ec45539")
  })()
} catch {}
const u = () => "Members",
  s = () => "Membros",
  o = () => "成员",
  i = () => "Mitglieder",
  f = () => "Miembros",
  c = () => "Membres",
  l = () => "Membri",
  a = () => "メンバー",
  d = () => "Członkowie",
  p = () => "Участники",
  b = () => "Учасники",
  m = () => "Thành viên",
  J = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? u() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? c() : e === "it" ? l() : e === "jp" ? a() : e === "pl" ? d() : e === "ru" ? p() : e === "uk" ? b() : m()
  },
  y = () => "Player",
  _ = () => "Jogador",
  g = () => "玩家",
  h = () => "Spieler",
  w = () => "Jugador",
  k = () => "Joueur",
  M = () => "Giocatore",
  T = () => "プレイヤー",
  v = () => "Gracz",
  E = () => "Игрок",
  I = () => "Гравець",
  j = () => "Người chơi",
  S = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? y() : e === "pt" ? _() : e === "ch" ? g() : e === "de" ? h() : e === "es" ? w() : e === "fr" ? k() : e === "it" ? M() : e === "jp" ? T() : e === "pl" ? v() : e === "ru" ? E() : e === "uk" ? I() : j()
  };
export {
  J as m, S as p
};