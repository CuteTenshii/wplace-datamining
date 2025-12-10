import {
  g as t
} from "./CVslo3Xr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3555dcfd10153d679a83fc3bd1544987e233c7a6"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "27280b6c-7ad7-4d26-9c5b-1e27ff3ddbb3", e._sentryDebugIdIdentifier = "sentry-dbid-27280b6c-7ad7-4d26-9c5b-1e27ff3ddbb3")
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
  d = () => "Członkowie",
  p = () => "Участники",
  _ = () => "Учасники",
  b = () => "Thành viên",
  Z = (e = {}, n = {}) => {
    const r = n.locale ?? t();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? o() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? f() : r === "it" ? a() : r === "jp" ? l() : r === "pl" ? d() : r === "ru" ? p() : r === "uk" ? _() : b()
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