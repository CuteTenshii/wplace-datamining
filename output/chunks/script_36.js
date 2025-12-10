import {
  g as t
} from "./CVslo3Xr.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "3555dcfd10153d679a83fc3bd1544987e233c7a6"
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
  f = () => "Cancelar",
  l = () => "取消",
  u = () => "Abbrechen",
  o = () => "Cancelar",
  a = () => "Annuler",
  i = () => "Annulla",
  d = () => "キャンセル",
  s = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? f() : e === "ch" ? l() : e === "de" ? u() : e === "es" ? o() : e === "fr" ? a() : e === "it" ? i() : e === "jp" ? d() : e === "pl" ? s() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};