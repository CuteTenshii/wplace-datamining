import {
  g as t
} from "./Cg2XhUFn.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "1338d18d-a932-4cd5-82b0-47977758a5ce", r._sentryDebugIdIdentifier = "sentry-dbid-1338d18d-a932-4cd5-82b0-47977758a5ce")
  })()
} catch {}
const f = () => "Refresh",
  s = () => "Atualizar",
  u = () => "刷新",
  i = () => "Aktualisieren",
  o = () => "Actualizar",
  d = () => "Actualiser",
  c = () => "Aggiorna",
  a = () => "更新",
  l = () => "Odśwież",
  h = () => "Обновить",
  b = () => "Оновити",
  p = () => "Làm mới",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? f() : e === "pt" ? s() : e === "ch" ? u() : e === "de" ? i() : e === "es" ? o() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? h() : e === "uk" ? b() : p()
  };
export {
  g as r
};