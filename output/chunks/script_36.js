import {
  g as t
} from "./C78XSJmb.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "718929eb34b39115ade64201f12b715208957752"
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
  o = () => "Cancelar",
  a = () => "Annuler",
  i = () => "Annulla",
  s = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? l() : e === "ch" ? u() : e === "de" ? f() : e === "es" ? o() : e === "fr" ? a() : e === "it" ? i() : e === "jp" ? s() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};