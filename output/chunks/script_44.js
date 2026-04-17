import {
  g as c
} from "./Cl_dwRWp.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "e0ff4e4a-9644-4fb0-8d54-8257f281c4f6", n._sentryDebugIdIdentifier = "sentry-dbid-e0ff4e4a-9644-4fb0-8d54-8257f281c4f6")
  } catch {}
})();
const t = () => "Cancel",
  u = () => "Cancelar",
  a = () => "取消",
  f = () => "Abbrechen",
  l = () => "Cancelar",
  o = () => "Annuler",
  s = () => "Annulla",
  i = () => "キャンセル",
  d = () => "Anuluj",
  _ = () => "Отмена",
  b = () => "Скасувати",
  p = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? c();
    return e === "en" ? t() : e === "pt" ? u() : e === "ch" ? a() : e === "de" ? f() : e === "es" ? l() : e === "fr" ? o() : e === "it" ? s() : e === "jp" ? i() : e === "pl" ? d() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  g as c
};