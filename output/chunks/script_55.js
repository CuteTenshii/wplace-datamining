import {
  g as t
} from "./CPyFfAXW.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "38af963429a32dfcd0b04890bc625a0716dd4620"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "74037bd5-9c91-4508-bba1-603aade3ed7d", n._sentryDebugIdIdentifier = "sentry-dbid-74037bd5-9c91-4508-bba1-603aade3ed7d")
  })()
} catch {}
const l = () => "Alliances",
  a = () => "Alianças",
  i = () => "联盟",
  s = () => "Allianzen",
  c = () => "Alianzas",
  o = () => "Alliances",
  u = () => "Alleanze",
  d = () => "アライアンス",
  f = () => "Sojusze",
  b = () => "Альянсы",
  p = () => "Альянси",
  _ = () => "Các liên minh",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? c() : e === "fr" ? o() : e === "it" ? u() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as a
};