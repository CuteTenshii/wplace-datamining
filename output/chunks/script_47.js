import {
  g as n
} from "./DhZUX4Dk.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "3b084db5-397a-4338-be5e-4e75d0048d59", r._sentryDebugIdIdentifier = "sentry-dbid-3b084db5-397a-4338-be5e-4e75d0048d59")
  } catch {}
})();
const i = () => "Preview",
  u = () => "Prévia",
  o = () => "预览",
  s = () => "Vorschau",
  p = () => "Vista previa",
  d = () => "Aperçu",
  f = () => "Anteprima",
  c = () => "プレビュー",
  b = () => "Podgląd",
  a = () => "Предпросмотр",
  v = () => "Попередній перегляд",
  w = () => "Xem trước",
  _ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? p() : e === "fr" ? d() : e === "it" ? f() : e === "jp" ? c() : e === "pl" ? b() : e === "ru" ? a() : e === "uk" ? v() : w()
  };
export {
  _ as p
};