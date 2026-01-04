import {
  g as t
} from "./CCwyOsrP.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "845cd245f9645ae957e3eeb4920045ede245aa3a"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "959de0f5-3fff-4b46-9468-672b3a594538", n._sentryDebugIdIdentifier = "sentry-dbid-959de0f5-3fff-4b46-9468-672b3a594538")
  })()
} catch {}
const c = () => "Cancel",
  l = () => "Cancelar",
  u = () => "取消",
  f = () => "Abbrechen",
  a = () => "Cancelar",
  o = () => "Annuler",
  i = () => "Annulla",
  s = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? l() : e === "ch" ? u() : e === "de" ? f() : e === "es" ? a() : e === "fr" ? o() : e === "it" ? i() : e === "jp" ? s() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};