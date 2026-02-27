import {
  g as t
} from "./sPnE0boO.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "5f94ed96-6b3a-41b9-b71c-23a660596945", n._sentryDebugIdIdentifier = "sentry-dbid-5f94ed96-6b3a-41b9-b71c-23a660596945")
  } catch {}
})();
const c = () => "Cancel",
  u = () => "Cancelar",
  a = () => "取消",
  l = () => "Abbrechen",
  o = () => "Cancelar",
  s = () => "Annuler",
  f = () => "Annulla",
  i = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  _ = () => "Скасувати",
  p = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? l() : e === "es" ? o() : e === "fr" ? s() : e === "it" ? f() : e === "jp" ? i() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? _() : p()
  };
export {
  g as c
};