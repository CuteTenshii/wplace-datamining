import {
  g as c
} from "./BHEqZqXQ.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "e0ff4e4a-9644-4fb0-8d54-8257f281c4f6", n._sentryDebugIdIdentifier = "sentry-dbid-e0ff4e4a-9644-4fb0-8d54-8257f281c4f6")
  } catch {}
})();
const t = () => "Cancel",
  u = () => "Cancelar",
  f = () => "取消",
  l = () => "Abbrechen",
  a = () => "Cancelar",
  o = () => "Annuler",
  s = () => "Annulla",
  i = () => "キャンセル",
  d = () => "Anuluj",
  b = () => "Отмена",
  _ = () => "Скасувати",
  p = () => "Hủy",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? c();
    return e === "en" ? t() : e === "pt" ? u() : e === "ch" ? f() : e === "de" ? l() : e === "es" ? a() : e === "fr" ? o() : e === "it" ? s() : e === "jp" ? i() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? _() : p()
  };
export {
  g as c
};