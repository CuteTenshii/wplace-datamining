import {
  g as t
} from "./BloWRfoW.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "c498731282e2bfa2154b3f8dba9ff6bac18e13ab"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "fd5ef816-49ba-48a5-8d00-55cadd85aa0f", n._sentryDebugIdIdentifier = "sentry-dbid-fd5ef816-49ba-48a5-8d00-55cadd85aa0f")
  })()
} catch {}
const c = () => "Cancel",
  a = () => "Cancelar",
  f = () => "取消",
  l = () => "Abbrechen",
  u = () => "Cancelar",
  o = () => "Annuler",
  d = () => "Annulla",
  i = () => "キャンセル",
  s = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? a() : e === "ch" ? f() : e === "de" ? l() : e === "es" ? u() : e === "fr" ? o() : e === "it" ? d() : e === "jp" ? i() : e === "pl" ? s() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};