import {
  g as n
} from "./BKKpqwch.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
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
  f = () => "Aperçu",
  d = () => "Anteprima",
  c = () => "プレビュー",
  a = () => "Podgląd",
  v = () => "Предпросмотр",
  w = () => "Попередній перегляд",
  l = () => "Xem trước",
  _ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? p() : e === "fr" ? f() : e === "it" ? d() : e === "jp" ? c() : e === "pl" ? a() : e === "ru" ? v() : e === "uk" ? w() : l()
  };
export {
  _ as p
};