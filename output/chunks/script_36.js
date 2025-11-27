import {
  g as t
} from "./CTj1-3x0.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "d750dbde4bb0382aeca7acd55c05ffdf7a87fc2c"
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
  d = () => "Annuler",
  o = () => "Annulla",
  i = () => "キャンセル",
  s = () => "Anuluj",
  b = () => "Отмена",
  p = () => "Скасувати",
  _ = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? a() : e === "ch" ? f() : e === "de" ? l() : e === "es" ? u() : e === "fr" ? d() : e === "it" ? o() : e === "jp" ? i() : e === "pl" ? s() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as c
};