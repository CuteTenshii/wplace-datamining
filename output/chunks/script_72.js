import {
  g as n
} from "./CCnR8d1l.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
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
  c = () => "Aperçu",
  p = () => "Anteprima",
  a = () => "プレビュー",
  d = () => "Podgląd",
  b = () => "Предпросмотр",
  v = () => "Попередній перегляд",
  w = () => "Xem trước",
  _ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? f() : e === "de" ? o() : e === "es" ? s() : e === "fr" ? c() : e === "it" ? p() : e === "jp" ? a() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? v() : w()
  };
export {
  _ as p
};