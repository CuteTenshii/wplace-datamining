import {
  g as t
} from "./Ebtv1rHw.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "93f384388d5e7c5014b7c7528c87cda732169ee9"
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
  l = () => "更新",
  a = () => "Odśwież",
  h = () => "Обновить",
  p = () => "Оновити",
  _ = () => "Làm mới",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? f() : e === "pt" ? s() : e === "ch" ? u() : e === "de" ? i() : e === "es" ? o() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? h() : e === "uk" ? p() : _()
  };
export {
  g as r
};