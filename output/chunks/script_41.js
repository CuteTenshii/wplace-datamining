import {
  g as t
} from "./CUn96ABT.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
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
  i = () => "Annulla",
  f = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  _ = () => "Скасувати",
  p = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? l() : e === "es" ? o() : e === "fr" ? s() : e === "it" ? i() : e === "jp" ? f() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? _() : p()
  };
export {
  g as c
};