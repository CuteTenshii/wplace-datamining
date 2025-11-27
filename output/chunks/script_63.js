import {
  g as t
} from "./DBHcKzVK.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "a3ac030b39e1c69cc580b4434d12301a02e465ee"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "cabc8506-c663-431b-95d5-7fd4af6f0939", r._sentryDebugIdIdentifier = "sentry-dbid-cabc8506-c663-431b-95d5-7fd4af6f0939")
  })()
} catch {}
const f = () => "Refresh",
  s = () => "Atualizar",
  u = () => "刷新",
  i = () => "Aktualisieren",
  o = () => "Actualizar",
  c = () => "Actualiser",
  d = () => "Aggiorna",
  a = () => "更新",
  l = () => "Odśwież",
  h = () => "Обновить",
  b = () => "Оновити",
  p = () => "Làm mới",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? f() : e === "pt" ? s() : e === "ch" ? u() : e === "de" ? i() : e === "es" ? o() : e === "fr" ? c() : e === "it" ? d() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? h() : e === "uk" ? b() : p()
  };
export {
  g as r
};