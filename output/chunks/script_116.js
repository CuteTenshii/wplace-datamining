import {
  g as e
} from "./BhCkpOlh.js";
const s = () => "All Frames",
  a = () => "Todas as Molduras",
  u = () => "所有相框",
  o = () => "Alle Rahmen",
  c = () => "Todos los Marcos",
  _ = () => "Tous les cadres",
  i = () => "Tutte le cornici",
  l = () => "すべてのフレーム",
  f = () => "Wszystkie ramki",
  m = () => "Все рамки",
  p = () => "Усі Рамки",
  k = () => "Tất cả các khung",
  $ = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? s() : r === "pt" ? a() : r === "ch" ? u() : r === "de" ? o() : r === "es" ? c() : r === "fr" ? _() : r === "it" ? i() : r === "jp" ? l() : r === "pl" ? f() : r === "ru" ? m() : r === "uk" ? p() : k()
  },
  d = () => "Back to list",
  h = () => "Voltar para a lista",
  b = () => "返回列表",
  y = () => "Zurück zur Liste",
  z = () => "Volver a la lista",
  j = () => "Retour à la liste",
  N = () => "Torna alla lista",
  g = () => "一覧に戻る",
  v = () => "Wróć do listy",
  T = () => "Вернуться к списку",
  A = () => "Повернутися до списку",
  W = () => "Quay lại danh sách",
  rr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? d() : r === "pt" ? h() : r === "ch" ? b() : r === "de" ? y() : r === "es" ? z() : r === "fr" ? j() : r === "it" ? N() : r === "jp" ? g() : r === "pl" ? v() : r === "ru" ? T() : r === "uk" ? A() : W()
  },
  R = () => "Name",
  w = () => "Nome",
  L = () => "名称",
  M = () => "Name",
  V = () => "Nombre",
  q = () => "Nom",
  x = () => "Nome",
  B = () => "名前",
  C = () => "Nazwa",
  F = () => "Имя",
  K = () => "Імʼя",
  Q = () => "Tên",
  tr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? R() : r === "pt" ? w() : r === "ch" ? L() : r === "de" ? M() : r === "es" ? V() : r === "fr" ? q() : r === "it" ? x() : r === "jp" ? B() : r === "pl" ? C() : r === "ru" ? F() : r === "uk" ? K() : Q()
  },
  U = () => "We don't have frames to buy yet, wait for future updates ;)",
  Z = () => "Ainda não temos molduras, crie sua primeira!",
  D = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  E = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  G = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  H = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  I = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  J = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  O = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  P = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  S = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  X = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  er = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? U() : r === "pt" ? Z() : r === "ch" ? D() : r === "de" ? E() : r === "es" ? G() : r === "fr" ? H() : r === "it" ? I() : r === "jp" ? J() : r === "pl" ? O() : r === "ru" ? P() : r === "uk" ? S() : X()
  };
export {
  $ as a, rr as b, er as c, tr as n
};