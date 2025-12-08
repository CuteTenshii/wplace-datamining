import {
  g as t
} from "./D4nF9vGJ.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "3a8d7c66397947b49ed2868fcbd9febd8dcf5eb4"
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
  l = () => "取消",
  u = () => "Abbrechen",
  f = () => "Cancelar",
  d = () => "Annuler",
  o = () => "Annulla",
  i = () => "キャンセル",
  s = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? a() : e === "ch" ? l() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? d() : e === "it" ? o() : e === "jp" ? i() : e === "pl" ? s() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};