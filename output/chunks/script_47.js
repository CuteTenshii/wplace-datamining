import {
  g as n
} from "./BYsICFKS.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "3b084db5-397a-4338-be5e-4e75d0048d59", r._sentryDebugIdIdentifier = "sentry-dbid-3b084db5-397a-4338-be5e-4e75d0048d59")
  } catch {}
})();
const i = () => "Preview",
  u = () => "Prévia",
  o = () => "预览",
  s = () => "Vorschau",
  d = () => "Vista previa",
  p = () => "Aperçu",
  f = () => "Anteprima",
  c = () => "プレビュー",
  a = () => "Podgląd",
  b = () => "Предпросмотр",
  v = () => "Попередній перегляд",
  w = () => "Xem trước",
  _ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? o() : e === "de" ? s() : e === "es" ? d() : e === "fr" ? p() : e === "it" ? f() : e === "jp" ? c() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? v() : w()
  };
export {
  _ as p
};