import {
  g as t
} from "./DqmGa208.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "4a4894320a12997d7c10bab38a71bb767b99274e"
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
const s = () => "Refresh",
  f = () => "Atualizar",
  u = () => "刷新",
  i = () => "Aktualisieren",
  o = () => "Actualizar",
  d = () => "Actualiser",
  a = () => "Aggiorna",
  c = () => "更新",
  l = () => "Odśwież",
  h = () => "Обновить",
  b = () => "Оновити",
  p = () => "Làm mới",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? s() : e === "pt" ? f() : e === "ch" ? u() : e === "de" ? i() : e === "es" ? o() : e === "fr" ? d() : e === "it" ? a() : e === "jp" ? c() : e === "pl" ? l() : e === "ru" ? h() : e === "uk" ? b() : p()
  };
export {
  g as r
};