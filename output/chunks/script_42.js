import {
  g as c
} from "./n6S4vljj.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "499b14f045c01e257aa2f9d700904a576cc252cf"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5f94ed96-6b3a-41b9-b71c-23a660596945", e._sentryDebugIdIdentifier = "sentry-dbid-5f94ed96-6b3a-41b9-b71c-23a660596945")
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
  g = (e = {}, r = {}) => {
    const n = r.locale ?? c();
    return n === "en" ? t() : n === "pt" ? u() : n === "ch" ? a() : n === "de" ? l() : n === "es" ? o() : n === "fr" ? s() : n === "it" ? f() : n === "jp" ? i() : n === "pl" ? d() : n === "ru" ? b() : n === "uk" ? _() : p()
  };
export {
  g as c
};