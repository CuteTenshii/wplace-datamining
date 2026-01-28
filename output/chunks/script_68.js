import {
  g as t
} from "./CQ_gfREe.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e6efb14bb5e52798ae71a524d6603a123d144219"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new r.Error().stack;
    n && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[n] = "b4ff575e-d7a2-4f76-bf89-beb0a499b1b2", r._sentryDebugIdIdentifier = "sentry-dbid-b4ff575e-d7a2-4f76-bf89-beb0a499b1b2")
  })()
} catch {}
const i = () => "Preview",
  f = () => "Prévia",
  o = () => "预览",
  u = () => "Vorschau",
  s = () => "Vista previa",
  d = () => "Aperçu",
  p = () => "Anteprima",
  a = () => "プレビュー",
  b = () => "Podgląd",
  c = () => "Предпросмотр",
  l = () => "Попередній перегляд",
  w = () => "Xem trước",
  _ = (r = {}, n = {}) => {
    const e = n.locale ?? t();
    return e === "en" ? i() : e === "pt" ? f() : e === "ch" ? o() : e === "de" ? u() : e === "es" ? s() : e === "fr" ? d() : e === "it" ? p() : e === "jp" ? a() : e === "pl" ? b() : e === "ru" ? c() : e === "uk" ? l() : w()
  };
export {
  _ as p
};