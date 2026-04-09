import {
  g as t
} from "./DrzYdI9r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5f94ed96-6b3a-41b9-b71c-23a660596945", e._sentryDebugIdIdentifier = "sentry-dbid-5f94ed96-6b3a-41b9-b71c-23a660596945")
  } catch {}
})();
const c = () => "Cancel",
  u = () => "Cancelar",
  a = () => "取消",
  l = () => "Abbrechen",
  f = () => "Cancelar",
  o = () => "Annuler",
  s = () => "Annulla",
  i = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  _ = () => "Скасувати",
  p = () => "Hủy",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? c() : n === "pt" ? u() : n === "ch" ? a() : n === "de" ? l() : n === "es" ? f() : n === "fr" ? o() : n === "it" ? s() : n === "jp" ? i() : n === "pl" ? d() : n === "ru" ? b() : n === "uk" ? _() : p()
  };
export {
  g as c
};