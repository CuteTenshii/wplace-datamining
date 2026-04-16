import {
  g as c
} from "./8FlXsgLB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e0ff4e4a-9644-4fb0-8d54-8257f281c4f6", e._sentryDebugIdIdentifier = "sentry-dbid-e0ff4e4a-9644-4fb0-8d54-8257f281c4f6")
  } catch {}
})();
const t = () => "Cancel",
  u = () => "Cancelar",
  f = () => "取消",
  a = () => "Abbrechen",
  l = () => "Cancelar",
  o = () => "Annuler",
  s = () => "Annulla",
  i = () => "キャンセル",
  d = () => "Anuluj",
  _ = () => "Отмена",
  b = () => "Скасувати",
  p = () => "Hủy",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? c();
    return n === "en" ? t() : n === "pt" ? u() : n === "ch" ? f() : n === "de" ? a() : n === "es" ? l() : n === "fr" ? o() : n === "it" ? s() : n === "jp" ? i() : n === "pl" ? d() : n === "ru" ? _() : n === "uk" ? b() : p()
  };
export {
  g as c
};