import {
  g as t
} from "./BfjUzAZv.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "baa56445-7a4d-4c4e-9b15-a67ddb9b0ea5", r._sentryDebugIdIdentifier = "sentry-dbid-baa56445-7a4d-4c4e-9b15-a67ddb9b0ea5")
  })()
} catch {}
const u = () => "Members",
  s = () => "Membros",
  o = () => "成员",
  i = () => "Mitglieder",
  f = () => "Miembros",
  a = () => "Membres",
  c = () => "Membri",
  l = () => "メンバー",
  d = () => "Członkowie",
  b = () => "Участники",
  p = () => "Учасники",
  m = () => "Thành viên",
  J = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? u() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? f() : e === "fr" ? a() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? p() : m()
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