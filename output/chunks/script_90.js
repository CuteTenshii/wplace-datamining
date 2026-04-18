import {
  g as n
} from "./YjF1d-DF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c5ac45ef-619c-46ac-8852-e70242b675e6", e._sentryDebugIdIdentifier = "sentry-dbid-c5ac45ef-619c-46ac-8852-e70242b675e6")
  } catch {}
})();
const s = () => "Refresh",
  f = () => "Atualizar",
  u = () => "刷新",
  c = () => "Aktualisieren",
  i = () => "Actualizar",
  o = () => "Actualiser",
  a = () => "Aggiorna",
  d = () => "更新",
  l = () => "Odśwież",
  h = () => "Обновить",
  _ = () => "Оновити",
  b = () => "Làm mới",
  g = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? s() : r === "pt" ? f() : r === "ch" ? u() : r === "de" ? c() : r === "es" ? i() : r === "fr" ? o() : r === "it" ? a() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? h() : r === "uk" ? _() : b()
  };
export {
  g as r
};