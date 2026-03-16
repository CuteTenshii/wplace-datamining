import {
  g as n
} from "./CCnR8d1l.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "10929b4a-a6c3-45b2-ac09-e2df787ceff3", e._sentryDebugIdIdentifier = "sentry-dbid-10929b4a-a6c3-45b2-ac09-e2df787ceff3")
  } catch {}
})();
const f = () => "Refresh",
  s = () => "Atualizar",
  u = () => "刷新",
  i = () => "Aktualisieren",
  c = () => "Actualizar",
  o = () => "Actualiser",
  a = () => "Aggiorna",
  d = () => "更新",
  l = () => "Odśwież",
  b = () => "Обновить",
  h = () => "Оновити",
  _ = () => "Làm mới",
  g = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? f() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? c() : r === "fr" ? o() : r === "it" ? a() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? b() : r === "uk" ? h() : _()
  };
export {
  g as r
};