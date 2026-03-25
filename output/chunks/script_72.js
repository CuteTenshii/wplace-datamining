import {
  g as n
} from "./Cq_U3JVf.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "34b20000-aaf6-474f-a087-a222515fb8cf", r._sentryDebugIdIdentifier = "sentry-dbid-34b20000-aaf6-474f-a087-a222515fb8cf")
  } catch {}
})();
const i = () => "Preview",
  u = () => "Prévia",
  f = () => "预览",
  o = () => "Vorschau",
  s = () => "Vista previa",
  p = () => "Aperçu",
  c = () => "Anteprima",
  a = () => "プレビュー",
  d = () => "Podgląd",
  v = () => "Предпросмотр",
  w = () => "Попередній перегляд",
  l = () => "Xem trước",
  b = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? f() : e === "de" ? o() : e === "es" ? s() : e === "fr" ? p() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? d() : e === "ru" ? v() : e === "uk" ? w() : l()
  };
export {
  b as p
};