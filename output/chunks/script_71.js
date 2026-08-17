import {
  g as t
} from "./BhCkpOlh.js";
const a = () => "Load more",
  s = () => "Carregar mais",
  l = () => "加载更多",
  o = () => "Mehr laden",
  u = () => "Cargar más",
  _ = () => "Charger plus",
  c = () => "Carica altro",
  i = () => "さらに読み込む",
  p = () => "Wczytaj więcej",
  d = () => "Загрузить ещё",
  f = () => "Завантажити ще",
  m = () => "Tải thêm",
  $ = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? s() : e === "ch" ? l() : e === "de" ? o() : e === "es" ? u() : e === "fr" ? _() : e === "it" ? c() : e === "jp" ? i() : e === "pl" ? p() : e === "ru" ? d() : e === "uk" ? f() : m()
  },
  h = () => "Player",
  y = () => "Jogador",
  g = () => "玩家",
  j = () => "Spieler",
  k = () => "Jugador",
  v = () => "Joueur",
  N = () => "Giocatore",
  x = () => "プレイヤー",
  C = () => "Gracz",
  z = () => "Игрок",
  E = () => "Гравець",
  G = () => "Người chơi",
  ee = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? h() : e === "pt" ? y() : e === "ch" ? g() : e === "de" ? j() : e === "es" ? k() : e === "fr" ? v() : e === "it" ? N() : e === "jp" ? x() : e === "pl" ? C() : e === "ru" ? z() : e === "uk" ? E() : G()
  },
  J = () => "Deleted",
  S = () => "Excluido",
  w = () => "已删除",
  K = () => "Gelöscht",
  L = () => "Eliminado",
  b = () => "Supprimé",
  A = () => "Eliminato",
  D = () => "削除済み",
  F = () => "Usunięte",
  M = () => "Удалено",
  P = () => "Видалено",
  T = () => "Đã xóa",
  re = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? J() : e === "pt" ? S() : e === "ch" ? w() : e === "de" ? K() : e === "es" ? L() : e === "fr" ? b() : e === "it" ? A() : e === "jp" ? D() : e === "pl" ? F() : e === "ru" ? M() : e === "uk" ? P() : T()
  },
  U = () => "No players match the current filters.",
  W = () => "Nenhum jogador corresponde aos filtros atuais.",
  q = () => "没有玩家符合当前筛选条件。",
  B = () => "Keine Spieler entsprechen den aktuellen Filtern.",
  H = () => "Ningún jugador coincide con los filtros actuales.",
  I = () => "Aucun joueur ne correspond aux filtres actuels.",
  O = () => "Nessun giocatore corrisponde ai filtri attuali.",
  Q = () => "現在のフィルターに一致するプレイヤーはいません。",
  R = () => "Żaden gracz nie pasuje do aktualnych filtrów.",
  V = () => "Нет игроков, соответствующих текущим фильтрам.",
  X = () => "Жоден гравець не відповідає поточним фільтрам.",
  Y = () => "Không có người chơi nào khớp với bộ lọc hiện tại.",
  te = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? U() : e === "pt" ? W() : e === "ch" ? q() : e === "de" ? B() : e === "es" ? H() : e === "fr" ? I() : e === "it" ? O() : e === "jp" ? Q() : e === "pl" ? R() : e === "ru" ? V() : e === "uk" ? X() : Y()
  };
export {
  re as a, $ as l, ee as p, te as s
};