import {
  g as t
} from "./BhCkpOlh.js";
const a = () => "Load more",
  l = () => "Carregar mais",
  u = () => "加载更多",
  o = () => "Mehr laden",
  s = () => "Cargar más",
  c = () => "Charger plus",
  _ = () => "Carica altro",
  i = () => "さらに読み込む",
  d = () => "Wczytaj więcej",
  p = () => "Загрузить ещё",
  f = () => "Завантажити ще",
  m = () => "Tải thêm",
  B = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? l() : e === "ch" ? u() : e === "de" ? o() : e === "es" ? s() : e === "fr" ? c() : e === "it" ? _() : e === "jp" ? i() : e === "pl" ? d() : e === "ru" ? p() : e === "uk" ? f() : m()
  },
  y = () => "Player",
  h = () => "Jogador",
  g = () => "玩家",
  j = () => "Spieler",
  k = () => "Jugador",
  C = () => "Joueur",
  v = () => "Giocatore",
  x = () => "プレイヤー",
  E = () => "Gracz",
  G = () => "Игрок",
  J = () => "Гравець",
  z = () => "Người chơi",
  F = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? y() : e === "pt" ? h() : e === "ch" ? g() : e === "de" ? j() : e === "es" ? k() : e === "fr" ? C() : e === "it" ? v() : e === "jp" ? x() : e === "pl" ? E() : e === "ru" ? G() : e === "uk" ? J() : z()
  },
  L = () => "Deleted",
  S = () => "Excluido",
  w = () => "已删除",
  D = () => "Gelöscht",
  M = () => "Eliminado",
  N = () => "Supprimé",
  P = () => "Eliminato",
  T = () => "削除済み",
  U = () => "Usunięte",
  W = () => "Удалено",
  b = () => "Видалено",
  q = () => "Đã xóa",
  H = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? L() : e === "pt" ? S() : e === "ch" ? w() : e === "de" ? D() : e === "es" ? M() : e === "fr" ? N() : e === "it" ? P() : e === "jp" ? T() : e === "pl" ? U() : e === "ru" ? W() : e === "uk" ? b() : q()
  };
export {
  H as a, B as l, F as p
};