import {
  g as e
} from "./BhCkpOlh.js";
const u = () => "All Frames",
  s = () => "Todas as Molduras",
  a = () => "所有相框",
  o = () => "Alle Rahmen",
  i = () => "Todos los Marcos",
  c = () => "Tous les cadres",
  _ = () => "Tutte le cornici",
  f = () => "すべてのフレーム",
  l = () => "Wszystkie ramki",
  m = () => "Все рамки",
  p = () => "Усі Рамки",
  h = () => "Tất cả các khung",
  fr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? u() : r === "pt" ? s() : r === "ch" ? a() : r === "de" ? o() : r === "es" ? i() : r === "fr" ? c() : r === "it" ? _() : r === "jp" ? f() : r === "pl" ? l() : r === "ru" ? m() : r === "uk" ? p() : h()
  },
  d = () => "Back to list",
  k = () => "Voltar para a lista",
  b = () => "返回列表",
  y = () => "Zurück zur Liste",
  w = () => "Volver a la lista",
  z = () => "Retour à la liste",
  j = () => "Torna alla lista",
  g = () => "一覧に戻る",
  N = () => "Wróć do listy",
  v = () => "Вернуться к списку",
  T = () => "Повернутися до списку",
  A = () => "Quay lại danh sách",
  lr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? d() : r === "pt" ? k() : r === "ch" ? b() : r === "de" ? y() : r === "es" ? w() : r === "fr" ? z() : r === "it" ? j() : r === "jp" ? g() : r === "pl" ? N() : r === "ru" ? v() : r === "uk" ? T() : A()
  },
  L = () => "Name",
  W = () => "Nome",
  R = () => "名称",
  B = () => "Name",
  C = () => "Nombre",
  M = () => "Nom",
  V = () => "Nome",
  q = () => "名前",
  x = () => "Nazwa",
  F = () => "Имя",
  K = () => "Імʼя",
  Q = () => "Tên",
  mr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? L() : r === "pt" ? W() : r === "ch" ? R() : r === "de" ? B() : r === "es" ? C() : r === "fr" ? M() : r === "it" ? V() : r === "jp" ? q() : r === "pl" ? x() : r === "ru" ? F() : r === "uk" ? K() : Q()
  },
  S = () => "We don't have frames to buy yet, wait for future updates ;)",
  U = () => "Ainda não temos molduras, crie sua primeira!",
  Z = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  D = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  E = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  G = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  H = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  I = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  J = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  O = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  P = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  X = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  pr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? S() : r === "pt" ? U() : r === "ch" ? Z() : r === "de" ? D() : r === "es" ? E() : r === "fr" ? G() : r === "it" ? H() : r === "jp" ? I() : r === "pl" ? J() : r === "ru" ? O() : r === "uk" ? P() : X()
  },
  Y = () => "Width",
  $ = () => "Largura",
  rr = () => "宽度",
  tr = () => "Breite",
  er = () => "Ancho",
  nr = () => "Largeur",
  ur = () => "Larghezza",
  sr = () => "幅",
  ar = () => "Szerokość",
  or = () => "Ширина",
  ir = () => "Ширина",
  cr = () => "Chiều rộng",
  hr = (n = {}, t = {}) => {
    const r = t.locale ?? e();
    return r === "en" ? Y() : r === "pt" ? $() : r === "ch" ? rr() : r === "de" ? tr() : r === "es" ? er() : r === "fr" ? nr() : r === "it" ? ur() : r === "jp" ? sr() : r === "pl" ? ar() : r === "ru" ? or() : r === "uk" ? ir() : cr()
  };
export {
  fr as a, lr as b, pr as c, mr as n, hr as w
};