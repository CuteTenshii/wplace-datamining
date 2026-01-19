import {
  g as t
} from "./BfjUzAZv.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "2af0ab49-0639-455e-b61a-08e40253b38d", n._sentryDebugIdIdentifier = "sentry-dbid-2af0ab49-0639-455e-b61a-08e40253b38d")
  })()
} catch {}
const c = () => "Cancel",
  l = () => "Cancelar",
  u = () => "取消",
  a = () => "Abbrechen",
  o = () => "Cancelar",
  f = () => "Annuler",
  i = () => "Annulla",
  s = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? l() : e === "ch" ? u() : e === "de" ? a() : e === "es" ? o() : e === "fr" ? f() : e === "it" ? i() : e === "jp" ? s() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};