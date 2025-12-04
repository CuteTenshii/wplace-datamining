import {
  g as t
} from "./CHxYu7UU.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
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
  o = () => "Annuler",
  d = () => "Annulla",
  i = () => "キャンセル",
  s = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? a() : e === "ch" ? l() : e === "de" ? u() : e === "es" ? f() : e === "fr" ? o() : e === "it" ? d() : e === "jp" ? i() : e === "pl" ? s() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};