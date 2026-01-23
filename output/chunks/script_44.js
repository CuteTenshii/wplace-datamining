import {
  g as t
} from "./BWURdrR3.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "f3916074-7b40-4047-be6a-c4edffb7c113", r._sentryDebugIdIdentifier = "sentry-dbid-f3916074-7b40-4047-be6a-c4edffb7c113")
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
  b = () => "Członkowie",
  p = () => "Участники",
  d = () => "Учасники",
  m = () => "Thành viên",
  J = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? u() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? c() : e === "it" ? l() : e === "jp" ? a() : e === "pl" ? b() : e === "ru" ? p() : e === "uk" ? d() : m()
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