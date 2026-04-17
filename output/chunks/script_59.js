import {
  g as n
} from "./BYsICFKS.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "98aaa04a-ddcb-4a51-ae9b-9ba4f25d9d95", t._sentryDebugIdIdentifier = "sentry-dbid-98aaa04a-ddcb-4a51-ae9b-9ba4f25d9d95")
  } catch {}
})();
const s = () => "All Frames",
  u = () => "Todas as Molduras",
  a = () => "所有相框",
  o = () => "Alle Rahmen",
  c = () => "Todos los Marcos",
  i = () => "Tous les cadres",
  _ = () => "Tutte le cornici",
  l = () => "すべてのフレーム",
  f = () => "Wszystkie ramki",
  d = () => "Все рамки",
  m = () => "Усі Рамки",
  p = () => "Tất cả các khung",
  le = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? o() : e === "es" ? c() : e === "fr" ? i() : e === "it" ? _() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? d() : e === "uk" ? m() : p()
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
  fe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? b() : e === "pt" ? k() : e === "ch" ? h() : e === "de" ? y() : e === "es" ? g() : e === "fr" ? j() : e === "it" ? z() : e === "jp" ? N() : e === "pl" ? v() : e === "ru" ? T() : e === "uk" ? w() : E()
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
  de = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? D() : e === "pt" ? A() : e === "ch" ? I() : e === "de" ? R() : e === "es" ? L() : e === "fr" ? W() : e === "it" ? S() : e === "jp" ? M() : e === "pl" ? U() : e === "ru" ? V() : e === "uk" ? q() : x()
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
  me = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? B() : e === "pt" ? C() : e === "ch" ? F() : e === "de" ? K() : e === "es" ? Q() : e === "fr" ? X() : e === "it" ? Y() : e === "jp" ? Z() : e === "pl" ? G() : e === "ru" ? H() : e === "uk" ? J() : O()
  },
  P = () => "We don't have frames to buy yet, wait for future updates ;)",
  $ = () => "Ainda não temos molduras, crie sua primeira!",
  ee = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  re = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  te = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  ne = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  se = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  ue = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  ae = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  oe = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  ce = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  ie = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  pe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? P() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? te() : e === "fr" ? ne() : e === "it" ? se() : e === "jp" ? ue() : e === "pl" ? ae() : e === "ru" ? oe() : e === "uk" ? ce() : ie()
  };
export {
  de as _, le as a, fe as b, pe as c, me as n
};