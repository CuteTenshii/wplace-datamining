import {
  g as t
} from "./BhCkpOlh.js";
const u = () => "All Frames",
  s = () => "Todas as Molduras",
  a = () => "所有相框",
  o = () => "Alle Rahmen",
  _ = () => "Todos los Marcos",
  c = () => "Tous les cadres",
  i = () => "Tutte le cornici",
  l = () => "すべてのフレーム",
  f = () => "Wszystkie ramki",
  m = () => "Все рамки",
  p = () => "Усі Рамки",
  d = () => "Tất cả các khung",
  lr = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? a() : r === "de" ? o() : r === "es" ? _() : r === "fr" ? c() : r === "it" ? i() : r === "jp" ? l() : r === "pl" ? f() : r === "ru" ? m() : r === "uk" ? p() : d()
  },
  k = () => "Back to list",
  h = () => "Voltar para a lista",
  b = () => "返回列表",
  y = () => "Zurück zur Liste",
  j = () => "Volver a la lista",
  z = () => "Retour à la liste",
  N = () => "Torna alla lista",
  g = () => "一覧に戻る",
  v = () => "Wróć do listy",
  T = () => "Вернуться к списку",
  A = () => "Повернутися до списку",
  W = () => "Quay lại danh sách",
  fr = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? k() : r === "pt" ? h() : r === "ch" ? b() : r === "de" ? y() : r === "es" ? j() : r === "fr" ? z() : r === "it" ? N() : r === "jp" ? g() : r === "pl" ? v() : r === "ru" ? T() : r === "uk" ? A() : W()
  },
  L = () => "Delete",
  R = () => "Deletar",
  w = () => "删除",
  D = () => "Löschen",
  E = () => "Eliminar",
  M = () => "Supprimer",
  U = () => "Eliminare",
  V = () => "削除",
  q = () => "Usuń",
  x = () => "Удалить",
  B = () => "Видалити",
  C = () => "Xóa",
  mr = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? L() : r === "pt" ? R() : r === "ch" ? w() : r === "de" ? D() : r === "es" ? E() : r === "fr" ? M() : r === "it" ? U() : r === "jp" ? V() : r === "pl" ? q() : r === "ru" ? x() : r === "uk" ? B() : C()
  },
  F = () => "Name",
  K = () => "Nome",
  Q = () => "名称",
  S = () => "Name",
  X = () => "Nombre",
  Z = () => "Nom",
  G = () => "Nome",
  H = () => "名前",
  I = () => "Nazwa",
  J = () => "Имя",
  O = () => "Імʼя",
  P = () => "Tên",
  pr = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? F() : r === "pt" ? K() : r === "ch" ? Q() : r === "de" ? S() : r === "es" ? X() : r === "fr" ? Z() : r === "it" ? G() : r === "jp" ? H() : r === "pl" ? I() : r === "ru" ? J() : r === "uk" ? O() : P()
  },
  Y = () => "We don't have frames to buy yet, wait for future updates ;)",
  $ = () => "Ainda não temos molduras, crie sua primeira!",
  rr = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  er = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  tr = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  nr = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  ur = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  sr = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  ar = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  or = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  _r = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  cr = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  dr = (n = {}, e = {}) => {
    const r = e.locale ?? t();
    return r === "en" ? Y() : r === "pt" ? $() : r === "ch" ? rr() : r === "de" ? er() : r === "es" ? tr() : r === "fr" ? nr() : r === "it" ? ur() : r === "jp" ? sr() : r === "pl" ? ar() : r === "ru" ? or() : r === "uk" ? _r() : cr()
  };
export {
  mr as _, lr as a, fr as b, dr as c, pr as n
};