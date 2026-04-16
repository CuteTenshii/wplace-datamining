import {
  g as n
} from "./kxb4d0Jk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5e55f805-801d-468d-93e7-0a6fcf9fa52d", e._sentryDebugIdIdentifier = "sentry-dbid-5e55f805-801d-468d-93e7-0a6fcf9fa52d")
  } catch {}
})();
const s = () => "Latest",
  o = () => "Mais recente",
  u = () => "最新",
  a = () => "Neueste",
  c = () => "Último",
  i = () => "Derniers",
  f = () => "Ultimi",
  l = () => "最新",
  _ = () => "Najnowsze",
  d = () => "Последние",
  p = () => "Останні",
  h = () => "Mới nhất",
  L = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? s() : t === "pt" ? o() : t === "ch" ? u() : t === "de" ? a() : t === "es" ? c() : t === "fr" ? i() : t === "it" ? f() : t === "jp" ? l() : t === "pl" ? _() : t === "ru" ? d() : t === "uk" ? p() : h()
  },
  b = () => "Patch notes",
  g = () => "Notas de atualização",
  y = () => "更新日志",
  j = () => "Versionshinweise",
  m = () => "Notas de actualización",
  w = () => "Notes de mise à jour",
  N = () => "Note di aggiornamento",
  k = () => "リリースノート",
  I = () => "Informacje o aktualizacji",
  D = () => "Примечания к обновлению",
  E = () => "Нотатки про оновлення",
  v = () => "Ghi chú cập nhật",
  T = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? b() : t === "pt" ? g() : t === "ch" ? y() : t === "de" ? j() : t === "es" ? m() : t === "fr" ? w() : t === "it" ? N() : t === "jp" ? k() : t === "pl" ? I() : t === "ru" ? D() : t === "uk" ? E() : v()
  };
export {
  L as l, T as p
};