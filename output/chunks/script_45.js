import {
  g as t
} from "./DPMSJe7W.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ed3bbe4c8b5513729863e5c0724fcbd405ffa555"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "27280b6c-7ad7-4d26-9c5b-1e27ff3ddbb3", r._sentryDebugIdIdentifier = "sentry-dbid-27280b6c-7ad7-4d26-9c5b-1e27ff3ddbb3")
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
  b = () => "Учасники",
  _ = () => "Thành viên",
  Z = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? u() : e === "pt" ? s() : e === "ch" ? o() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? f() : e === "it" ? a() : e === "jp" ? l() : e === "pl" ? d() : e === "ru" ? p() : e === "uk" ? b() : _()
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
  q = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? m() : e === "pt" ? y() : e === "ch" ? v() : e === "de" ? g() : e === "es" ? h() : e === "fr" ? w() : e === "it" ? k() : e === "jp" ? S() : e === "pl" ? j() : e === "ru" ? E() : e === "uk" ? M() : T()
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
  B = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? I() : e === "pt" ? D() : e === "ch" ? z() : e === "de" ? G() : e === "es" ? J() : e === "fr" ? L() : e === "it" ? N() : e === "jp" ? R() : e === "pl" ? x() : e === "ru" ? A() : e === "uk" ? C() : P()
  };
export {
  Z as m, q as p, B as s
};