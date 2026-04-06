import {
  g as n
} from "./rBENuJnv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "10929b4a-a6c3-45b2-ac09-e2df787ceff3", e._sentryDebugIdIdentifier = "sentry-dbid-10929b4a-a6c3-45b2-ac09-e2df787ceff3")
  } catch {}
})();
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
  _ = () => "Оновити",
  b = () => "Làm mới",
  g = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? f() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? o() : r === "fr" ? c() : r === "it" ? d() : r === "jp" ? a() : r === "pl" ? l() : r === "ru" ? h() : r === "uk" ? _() : b()
  };
export {
  g as r
};