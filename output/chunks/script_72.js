import {
  g as n
} from "./CDV-gvd8.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
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
  a = () => "Anteprima",
  c = () => "プレビュー",
  d = () => "Podgląd",
  v = () => "Предпросмотр",
  w = () => "Попередній перегляд",
  b = () => "Xem trước",
  _ = (r = {}, t = {}) => {
    const e = t.locale ?? n();
    return e === "en" ? i() : e === "pt" ? u() : e === "ch" ? f() : e === "de" ? o() : e === "es" ? s() : e === "fr" ? p() : e === "it" ? a() : e === "jp" ? c() : e === "pl" ? d() : e === "ru" ? v() : e === "uk" ? w() : b()
  };
export {
  _ as p
};