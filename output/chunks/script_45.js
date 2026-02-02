import {
  g as t
} from "./CWSLadsn.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "7deb3759-e2f1-46a1-a938-a0fe039d7679", r._sentryDebugIdIdentifier = "sentry-dbid-7deb3759-e2f1-46a1-a938-a0fe039d7679")
  })()
} catch {}
const u = () => "Members",
  s = () => "Membros",
  o = () => "成员",
  i = () => "Mitglieder",
  f = () => "Miembros",
  l = () => "Membres",
  c = () => "Membri",
  a = () => "メンバー",
  d = () => "Członkowie",
  p = () => "Участники",
  b = () => "Учасники",
  m = () => "Thành viên",
  J = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? u() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? l() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? d() : e === "ru" ? p() : e === "uk" ? b() : m()
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