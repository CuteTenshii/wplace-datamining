import {
  g as n
} from "./C6AhFN09.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
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
  a = () => "Aggiorna",
  d = () => "更新",
  l = () => "Odśwież",
  h = () => "Обновить",
  _ = () => "Оновити",
  p = () => "Làm mới",
  b = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? s() : r === "pt" ? f() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? o() : r === "it" ? a() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? h() : r === "uk" ? _() : p()
  };
export {
  b as r
};