import {
  g as n
} from "./CMbhZE-K.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "3b084db5-397a-4338-be5e-4e75d0048d59", r._sentryDebugIdIdentifier = "sentry-dbid-3b084db5-397a-4338-be5e-4e75d0048d59")
  } catch {}
})();
const i = () => "Preview",
  u = () => "Prévia",
  o = () => "预览",
  s = () => "Vorschau",
  f = () => "Vista previa",
  d = () => "Aperçu",
  p = () => "Anteprima",
  c = () => "プレビュー",
  a = () => "Podgląd",
  v = () => "Предпросмотр",
  w = () => "Попередній перегляд",
  b = () => "Xem trước",
  _ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? d() : e === "it" ? p() : e === "jp" ? c() : e === "pl" ? a() : e === "ru" ? v() : e === "uk" ? w() : b()
  };
export {
  _ as p
};