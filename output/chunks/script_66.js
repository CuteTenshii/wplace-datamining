import {
  g as n
} from "./fWTupIuD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "066116d2a0b0fea465998abdea5fdee468dc0d44"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e8766c05-867d-4e65-ae94-0e09d1aad9d4", e._sentryDebugIdIdentifier = "sentry-dbid-e8766c05-867d-4e65-ae94-0e09d1aad9d4")
  } catch {}
})();
const s = () => "Patch notes",
  o = () => "Notas de atualização",
  u = () => "更新日志",
  a = () => "Versionshinweise",
  c = () => "Notas de actualización",
  i = () => "Notes de mise à jour",
  f = () => "Note di aggiornamento",
  l = () => "リリースノート",
  _ = () => "Informacje o aktualizacji",
  d = () => "Примечания к обновлению",
  p = () => "Нотатки про оновлення",
  h = () => "Ghi chú cập nhật",
  L = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? s() : t === "pt" ? o() : t === "ch" ? u() : t === "de" ? a() : t === "es" ? c() : t === "fr" ? i() : t === "it" ? f() : t === "jp" ? l() : t === "pl" ? _() : t === "ru" ? d() : t === "uk" ? p() : h()
  },
  g = () => "Latest",
  b = () => "Mais recente",
  y = () => "最新",
  j = () => "Neueste",
  m = () => "Último",
  w = () => "Derniers",
  N = () => "Ultimi",
  k = () => "最新",
  I = () => "Najnowsze",
  D = () => "Последние",
  E = () => "Останні",
  v = () => "Mới nhất",
  T = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? g() : t === "pt" ? b() : t === "ch" ? y() : t === "de" ? j() : t === "es" ? m() : t === "fr" ? w() : t === "it" ? N() : t === "jp" ? k() : t === "pl" ? I() : t === "ru" ? D() : t === "uk" ? E() : v()
  };
export {
  T as l, L as p
};