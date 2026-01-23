import {
  g as t
} from "./BWURdrR3.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "c5ac45ef-619c-46ac-8852-e70242b675e6", r._sentryDebugIdIdentifier = "sentry-dbid-c5ac45ef-619c-46ac-8852-e70242b675e6")
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