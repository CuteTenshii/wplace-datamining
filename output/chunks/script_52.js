import {
  g as t
} from "./C_a06lyj.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "4a05b333-b65d-4d37-ba55-f3be096b7668", n._sentryDebugIdIdentifier = "sentry-dbid-4a05b333-b65d-4d37-ba55-f3be096b7668")
  })()
} catch {}
const a = () => "Name",
  o = () => "Nome",
  u = () => "名称",
  s = () => "Name",
  f = () => "Nombre",
  i = () => "Nom",
  c = () => "Nome",
  _ = () => "名前",
  d = () => "Nazwa",
  m = () => "Имя",
  l = () => "Імʼя",
  p = () => "Tên",
  D = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? o() : e === "ch" ? u() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? i() : e === "it" ? c() : e === "jp" ? _() : e === "pl" ? d() : e === "ru" ? m() : e === "uk" ? l() : p()
  },
  y = () => "We don't have frames yet, create your first one!",
  b = () => "Ainda não temos molduras, crie sua primeira!",
  h = () => "我们还没有相框可供购买，敬请期待未来的更新 :)",
  g = () => "Wir haben noch keine Rahmen zum Kauf, bleibt dran für zukünftige Updates ;)",
  k = () => "Aún no tenemos marcos para comprar, espera futuras actualizaciones ;)",
  z = () => "Nous n'avons pas encore de cadres à acheter, attendez les futures mises à jour ;)",
  N = () => "Non abbiamo ancora cornici da acquistare, attendete futuri aggiornamenti ;)",
  w = () => "まだ購入できるフレームはありません。今後のアップデートをお待ちくださいね ;)",
  j = () => "Nie mamy jeszcze ramek do kupienia, poczekaj na przyszłe aktualizacje ;)",
  v = () => "У нас пока нет рам для покупки, ждите будущих обновлений ;)",
  T = () => "У нас ще немає рам для покупки, чекайте майбутніх оновлень ;)",
  E = () => "Chúng tôi chưa có khung ảnh để bán đâu, hãy chờ các bản cập nhật sắp tới nhé ;)",
  A = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? y() : e === "pt" ? b() : e === "ch" ? h() : e === "de" ? g() : e === "es" ? k() : e === "fr" ? z() : e === "it" ? N() : e === "jp" ? w() : e === "pl" ? j() : e === "ru" ? v() : e === "uk" ? T() : E()
  };
export {
  A as a, D as n
};