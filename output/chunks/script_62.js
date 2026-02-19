import {
  g as t
} from "./tk-xaxvS.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "5813ae56f58e7333550e54b13dee572a566ecd62"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "8d7de972-68a4-48d9-81b1-8b33885572d7", n._sentryDebugIdIdentifier = "sentry-dbid-8d7de972-68a4-48d9-81b1-8b33885572d7")
  })()
} catch {}
const l = () => "Alliances",
  i = () => "Alianças",
  a = () => "联盟",
  s = () => "Allianzen",
  o = () => "Alianzas",
  u = () => "Alliances",
  c = () => "Alleanze",
  d = () => "アライアンス",
  f = () => "Sojusze",
  b = () => "Альянсы",
  p = () => "Альянси",
  _ = () => "Các liên minh",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l() : e === "pt" ? i() : e === "ch" ? a() : e === "de" ? s() : e === "es" ? o() : e === "fr" ? u() : e === "it" ? c() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as a
};