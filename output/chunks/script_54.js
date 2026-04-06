import {
  g as n
} from "./rBENuJnv.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "ef8b3040-6b93-4d0f-be51-bb5dbad08aed", t._sentryDebugIdIdentifier = "sentry-dbid-ef8b3040-6b93-4d0f-be51-bb5dbad08aed")
  } catch {}
})();
const s = () => "Name",
  u = () => "Nome",
  a = () => "名称",
  o = () => "Name",
  i = () => "Nombre",
  _ = () => "Nom",
  c = () => "Nome",
  l = () => "名前",
  f = () => "Nazwa",
  d = () => "Имя",
  m = () => "Імʼя",
  p = () => "Tên",
  le = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? s() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? o() : e === "es" ? i() : e === "fr" ? _() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? f() : e === "ru" ? d() : e === "uk" ? m() : p()
  },
  b = () => "We don't have frames to buy yet, wait for future updates ;)",
  k = () => "Ainda não temos molduras, crie sua primeira!",
  h = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  y = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  g = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  j = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  z = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  N = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  v = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  T = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  w = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  E = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  fe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? b() : e === "pt" ? k() : e === "ch" ? h() : e === "de" ? y() : e === "es" ? g() : e === "fr" ? j() : e === "it" ? z() : e === "jp" ? N() : e === "pl" ? v() : e === "ru" ? T() : e === "uk" ? w() : E()
  },
  D = () => "All Frames",
  A = () => "Todas as Molduras",
  I = () => "所有相框",
  R = () => "Alle Rahmen",
  L = () => "Todos los Marcos",
  W = () => "Tous les cadres",
  S = () => "Tutte le cornici",
  M = () => "すべてのフレーム",
  U = () => "Wszystkie ramki",
  V = () => "Все рамки",
  q = () => "Усі Рамки",
  x = () => "Tất cả các khung",
  de = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? D() : e === "pt" ? A() : e === "ch" ? I() : e === "de" ? R() : e === "es" ? L() : e === "fr" ? W() : e === "it" ? S() : e === "jp" ? M() : e === "pl" ? U() : e === "ru" ? V() : e === "uk" ? q() : x()
  },
  B = () => "Back to list",
  C = () => "Voltar para a lista",
  F = () => "返回列表",
  K = () => "Zurück zur Liste",
  Q = () => "Volver a la lista",
  X = () => "Retour à la liste",
  Y = () => "Torna alla lista",
  Z = () => "一覧に戻る",
  G = () => "Wróć do listy",
  H = () => "Вернуться к списку",
  J = () => "Повернутися до списку",
  O = () => "Quay lại danh sách",
  me = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? B() : e === "pt" ? C() : e === "ch" ? F() : e === "de" ? K() : e === "es" ? Q() : e === "fr" ? X() : e === "it" ? Y() : e === "jp" ? Z() : e === "pl" ? G() : e === "ru" ? H() : e === "uk" ? J() : O()
  },
  P = () => "Delete",
  $ = () => "Deletar",
  ee = () => "删除",
  re = () => "Löschen",
  te = () => "Eliminar",
  ne = () => "Supprimer",
  se = () => "Eliminare",
  ue = () => "削除",
  ae = () => "Usuń",
  oe = () => "Удалить",
  ie = () => "Видалити",
  _e = () => "Xóa",
  pe = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? P() : e === "pt" ? $() : e === "ch" ? ee() : e === "de" ? re() : e === "es" ? te() : e === "fr" ? ne() : e === "it" ? se() : e === "jp" ? ue() : e === "pl" ? ae() : e === "ru" ? oe() : e === "uk" ? ie() : _e()
  };
export {
  pe as _, de as a, me as b, fe as c, le as n
};