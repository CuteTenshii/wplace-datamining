import {
  g as t
} from "./DolGb-m3.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "d5467f2c-fd41-4e78-8ffc-826136ab96ef", n._sentryDebugIdIdentifier = "sentry-dbid-d5467f2c-fd41-4e78-8ffc-826136ab96ef")
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