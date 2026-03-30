import {
  g as n
} from "./56ZBUmtO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
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
  a = () => "Aggiorna",
  d = () => "更新",
  l = () => "Odśwież",
  h = () => "Обновить",
  b = () => "Оновити",
  _ = () => "Làm mới",
  g = (e = {}, t = {}) => {
    const r = t.locale ?? n();
    return r === "en" ? f() : r === "pt" ? s() : r === "ch" ? u() : r === "de" ? i() : r === "es" ? o() : r === "fr" ? c() : r === "it" ? a() : r === "jp" ? d() : r === "pl" ? l() : r === "ru" ? h() : r === "uk" ? b() : _()
  };
export {
  g as r
};