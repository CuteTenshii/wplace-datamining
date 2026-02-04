import {
  g as t
} from "./DZjUHX_D.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "b927753e-6222-4006-a4b4-e4dd84cef392", r._sentryDebugIdIdentifier = "sentry-dbid-b927753e-6222-4006-a4b4-e4dd84cef392")
  })()
} catch {}
const f = () => "Refresh",
  s = () => "Atualizar",
  u = () => "刷新",
  i = () => "Aktualisieren",
  o = () => "Actualizar",
  d = () => "Actualiser",
  l = () => "Aggiorna",
  c = () => "更新",
  a = () => "Odśwież",
  b = () => "Обновить",
  h = () => "Оновити",
  p = () => "Làm mới",
  g = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? f() : e === "pt" ? s() : e === "ch" ? u() : e === "de" ? i() : e === "es" ? o() : e === "fr" ? d() : e === "it" ? l() : e === "jp" ? c() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? h() : p()
  };
export {
  g as r
};