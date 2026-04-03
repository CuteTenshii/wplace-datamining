import {
  g as n
} from "./DNNhrQmR.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var t = new r.Error().stack;
    t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "34b20000-aaf6-474f-a087-a222515fb8cf", r._sentryDebugIdIdentifier = "sentry-dbid-34b20000-aaf6-474f-a087-a222515fb8cf")
  } catch {}
})();
const i = () => "Preview",
  f = () => "Prévia",
  u = () => "预览",
  o = () => "Vorschau",
  s = () => "Vista previa",
  c = () => "Aperçu",
  p = () => "Anteprima",
  a = () => "プレビュー",
  d = () => "Podgląd",
  v = () => "Предпросмотр",
  w = () => "Попередній перегляд",
  l = () => "Xem trước",
  _ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? f() : e === "ch" ? u() : e === "de" ? o() : e === "es" ? s() : e === "fr" ? c() : e === "it" ? p() : e === "jp" ? a() : e === "pl" ? d() : e === "ru" ? v() : e === "uk" ? w() : l()
  };
export {
  _ as p
};