import {
  g as c
} from "./DawG3Hoa.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "5f94ed96-6b3a-41b9-b71c-23a660596945", n._sentryDebugIdIdentifier = "sentry-dbid-5f94ed96-6b3a-41b9-b71c-23a660596945")
  } catch {}
})();
const t = () => "Cancel",
  u = () => "Cancelar",
  a = () => "取消",
  l = () => "Abbrechen",
  o = () => "Cancelar",
  s = () => "Annuler",
  f = () => "Annulla",
  i = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  _ = () => "Скасувати",
  p = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? c();
    return e === "en" ? t() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? l() : e === "es" ? o() : e === "fr" ? s() : e === "it" ? f() : e === "jp" ? i() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? _() : p()
  };
export {
  g as c
};