import {
  g as n
} from "./sPnE0boO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "42275893-d707-4dc7-a91c-2773263524d4", e._sentryDebugIdIdentifier = "sentry-dbid-42275893-d707-4dc7-a91c-2773263524d4")
  } catch {}
})();
const s = () => "Name",
  a = () => "Nome",
  u = () => "名称",
  o = () => "Name",
  c = () => "Nombre",
  i = () => "Nom",
  _ = () => "Nome",
  f = () => "名前",
  l = () => "Nazwa",
  m = () => "Имя",
  d = () => "Імʼя",
  p = () => "Tên",
  $ = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? s() : r === "pt" ? a() : r === "ch" ? u() : r === "de" ? o() : r === "es" ? c() : r === "fr" ? i() : r === "it" ? _() : r === "jp" ? f() : r === "pl" ? l() : r === "ru" ? m() : r === "uk" ? d() : p()
  },
  b = () => "We don't have frames to buy yet, wait for future updates ;)",
  k = () => "Ainda não temos molduras, crie sua primeira!",
  y = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  h = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  g = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  z = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  j = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  N = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  T = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  v = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  w = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  A = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  rr = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? b() : r === "pt" ? k() : r === "ch" ? y() : r === "de" ? h() : r === "es" ? g() : r === "fr" ? z() : r === "it" ? j() : r === "jp" ? N() : r === "pl" ? T() : r === "ru" ? v() : r === "uk" ? w() : A()
  },
  E = () => "All Frames",
  I = () => "Todas as Molduras",
  R = () => "所有相框",
  D = () => "Alle Rahmen",
  W = () => "Todos los Marcos",
  L = () => "Tous les cadres",
  M = () => "Tutte le cornici",
  S = () => "すべてのフレーム",
  V = () => "Wszystkie ramki",
  q = () => "Все рамки",
  x = () => "Усі Рамки",
  B = () => "Tất cả các khung",
  er = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? E() : r === "pt" ? I() : r === "ch" ? R() : r === "de" ? D() : r === "es" ? W() : r === "fr" ? L() : r === "it" ? M() : r === "jp" ? S() : r === "pl" ? V() : r === "ru" ? q() : r === "uk" ? x() : B()
  },
  C = () => "Back to list",
  F = () => "Voltar para a lista",
  K = () => "返回列表",
  Q = () => "Zurück zur Liste",
  U = () => "Volver a la lista",
  Y = () => "Retour à la liste",
  Z = () => "Torna alla lista",
  G = () => "一覧に戻る",
  H = () => "Wróć do listy",
  J = () => "Вернуться к списку",
  O = () => "Повернутися до списку",
  P = () => "Quay lại danh sách",
  tr = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? C() : r === "pt" ? F() : r === "ch" ? K() : r === "de" ? Q() : r === "es" ? U() : r === "fr" ? Y() : r === "it" ? Z() : r === "jp" ? G() : r === "pl" ? H() : r === "ru" ? J() : r === "uk" ? O() : P()
  };
export {
  er as a, tr as b, rr as c, $ as n
};