import {
  g as n
} from "./C-uTzaOB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c5ac45ef-619c-46ac-8852-e70242b675e6", e._sentryDebugIdIdentifier = "sentry-dbid-c5ac45ef-619c-46ac-8852-e70242b675e6")
  } catch {}
})();
const s = () => "Refresh",
  f = () => "Atualizar",
  u = () => "刷新",
  i = () => "Aktualisieren",
  c = () => "Actualizar",
  o = () => "Actualiser",
  d = () => "Aggiorna",
  a = () => "更新",
  l = () => "Odśwież",
  h = () => "Обновить",
  _ = () => "Оновити",
  b = () => "Làm mới",
  g = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? s() : r === "pt" ? f() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? o() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? h() : r === "uk" ? _() : b()
  };
export {
  g as r
};