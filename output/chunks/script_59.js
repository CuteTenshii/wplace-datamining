import {
  g as n
} from "./8FlXsgLB.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "98aaa04a-ddcb-4a51-ae9b-9ba4f25d9d95", t._sentryDebugIdIdentifier = "sentry-dbid-98aaa04a-ddcb-4a51-ae9b-9ba4f25d9d95")
  } catch {}
})();
const s = () => "All Frames",
  a = () => "Todas as Molduras",
  u = () => "所有相框",
  o = () => "Alle Rahmen",
  c = () => "Todos los Marcos",
  i = () => "Tous les cadres",
  _ = () => "Tutte le cornici",
  l = () => "すべてのフレーム",
  f = () => "Wszystkie ramki",
  d = () => "Все рамки",
  m = () => "Усі Рамки",
  p = () => "Tất cả các khung",
  lr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? s() : r === "pt" ? a() : r === "ch" ? u() : r === "de" ? o() : r === "es" ? c() : r === "fr" ? i() : r === "it" ? _() : r === "jp" ? l() : r === "pl" ? f() : r === "ru" ? d() : r === "uk" ? m() : p()
  },
  b = () => "Back to list",
  k = () => "Voltar para a lista",
  h = () => "返回列表",
  y = () => "Zurück zur Liste",
  g = () => "Volver a la lista",
  j = () => "Retour à la liste",
  z = () => "Torna alla lista",
  N = () => "一覧に戻る",
  v = () => "Wróć do listy",
  T = () => "Вернуться к списку",
  w = () => "Повернутися до списку",
  E = () => "Quay lại danh sách",
  fr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? b() : r === "pt" ? k() : r === "ch" ? h() : r === "de" ? y() : r === "es" ? g() : r === "fr" ? j() : r === "it" ? z() : r === "jp" ? N() : r === "pl" ? v() : r === "ru" ? T() : r === "uk" ? w() : E()
  },
  D = () => "Delete",
  A = () => "Deletar",
  I = () => "删除",
  R = () => "Löschen",
  L = () => "Eliminar",
  W = () => "Supprimer",
  S = () => "Eliminare",
  M = () => "削除",
  U = () => "Usuń",
  V = () => "Удалить",
  q = () => "Видалити",
  x = () => "Xóa",
  dr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? D() : r === "pt" ? A() : r === "ch" ? I() : r === "de" ? R() : r === "es" ? L() : r === "fr" ? W() : r === "it" ? S() : r === "jp" ? M() : r === "pl" ? U() : r === "ru" ? V() : r === "uk" ? q() : x()
  },
  B = () => "Name",
  C = () => "Nome",
  F = () => "名称",
  K = () => "Name",
  Q = () => "Nombre",
  X = () => "Nom",
  Y = () => "Nome",
  Z = () => "名前",
  G = () => "Nazwa",
  H = () => "Имя",
  J = () => "Імʼя",
  O = () => "Tên",
  mr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? B() : r === "pt" ? C() : r === "ch" ? F() : r === "de" ? K() : r === "es" ? Q() : r === "fr" ? X() : r === "it" ? Y() : r === "jp" ? Z() : r === "pl" ? G() : r === "ru" ? H() : r === "uk" ? J() : O()
  },
  P = () => "We don't have frames to buy yet, wait for future updates ;)",
  $ = () => "Ainda não temos molduras, crie sua primeira!",
  rr = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  er = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  tr = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  nr = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  sr = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  ar = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  ur = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  or = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  cr = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  ir = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  pr = (t = {}, e = {}) => {
    const r = e.locale ?? n();
    return r === "en" ? P() : r === "pt" ? $() : r === "ch" ? rr() : r === "de" ? er() : r === "es" ? tr() : r === "fr" ? nr() : r === "it" ? sr() : r === "jp" ? ar() : r === "pl" ? ur() : r === "ru" ? or() : r === "uk" ? cr() : ir()
  };
export {
  dr as _, lr as a, fr as b, pr as c, mr as n
};