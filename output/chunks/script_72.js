import {
  g as n
} from "./fWTupIuD.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "066116d2a0b0fea465998abdea5fdee468dc0d44"
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
  a = () => "Aperçu",
  p = () => "Anteprima",
  c = () => "プレビュー",
  d = () => "Podgląd",
  v = () => "Предпросмотр",
  w = () => "Попередній перегляд",
  l = () => "Xem trước",
  b = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? f() : e === "de" ? o() : e === "es" ? s() : e === "fr" ? a() : e === "it" ? p() : e === "jp" ? c() : e === "pl" ? d() : e === "ru" ? v() : e === "uk" ? w() : l()
  };
export {
  b as p
};