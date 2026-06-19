import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "Members",
  s = () => "Membros",
  o = () => "成员",
  i = () => "Mitglieder",
  c = () => "Miembros",
  m = () => "Membres",
  p = () => "Membri",
  l = () => "メンバー",
  f = () => "Członkowie",
  a = () => "Участники",
  _ = () => "Учасники",
  b = () => "Thành viên",
  C = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? o() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? m() : r === "it" ? p() : r === "jp" ? l() : r === "pl" ? f() : r === "ru" ? a() : r === "uk" ? _() : b()
  },
  y = () => "Player",
  d = () => "Jogador",
  h = () => "玩家",
  g = () => "Spieler",
  M = () => "Jugador",
  k = () => "Joueur",
  j = () => "Giocatore",
  v = () => "プレイヤー",
  J = () => "Gracz",
  z = () => "Игрок",
  G = () => "Гравець",
  w = () => "Người chơi",
  L = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? y() : r === "pt" ? d() : r === "ch" ? h() : r === "de" ? g() : r === "es" ? M() : r === "fr" ? k() : r === "it" ? j() : r === "jp" ? v() : r === "pl" ? J() : r === "ru" ? z() : r === "uk" ? G() : w()
  };
export {
  C as m, L as p
};