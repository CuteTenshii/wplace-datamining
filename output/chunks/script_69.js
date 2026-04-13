import {
  g as t
} from "./obv90mRu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b4aa13f6-08c7-49cd-9e53-dfbd6f6305da", e._sentryDebugIdIdentifier = "sentry-dbid-b4aa13f6-08c7-49cd-9e53-dfbd6f6305da")
  } catch {}
})();
const a = () => "Alliances",
  l = () => "Alianças",
  s = () => "联盟",
  i = () => "Allianzen",
  c = () => "Alianzas",
  u = () => "Alliances",
  f = () => "Alleanze",
  o = () => "アライアンス",
  d = () => "Sojusze",
  b = () => "Альянсы",
  _ = () => "Альянси",
  p = () => "Các liên minh",
  y = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? l() : n === "ch" ? s() : n === "de" ? i() : n === "es" ? c() : n === "fr" ? u() : n === "it" ? f() : n === "jp" ? o() : n === "pl" ? d() : n === "ru" ? b() : n === "uk" ? _() : p()
  };
export {
  y as a
};