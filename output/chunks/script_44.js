import {
  g as t
} from "./CLdytBYG.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "e0ff4e4a-9644-4fb0-8d54-8257f281c4f6", n._sentryDebugIdIdentifier = "sentry-dbid-e0ff4e4a-9644-4fb0-8d54-8257f281c4f6")
  } catch {}
})();
const c = () => "Cancel",
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
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? c() : e === "pt" ? u() : e === "ch" ? f() : e === "de" ? a() : e === "es" ? l() : e === "fr" ? o() : e === "it" ? s() : e === "jp" ? i() : e === "pl" ? d() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  g as c
};