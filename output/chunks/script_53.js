import {
  g as t
} from "./D4nF9vGJ.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "3a8d7c66397947b49ed2868fcbd9febd8dcf5eb4"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "0e8a60a4-8fd6-4de6-b91d-370359835fa2", n._sentryDebugIdIdentifier = "sentry-dbid-0e8a60a4-8fd6-4de6-b91d-370359835fa2")
  })()
} catch {}
const l = () => "Alliances",
  a = () => "Alianças",
  i = () => "联盟",
  s = () => "Allianzen",
  c = () => "Alianzas",
  f = () => "Alliances",
  o = () => "Alleanze",
  u = () => "アライアンス",
  d = () => "Sojusze",
  b = () => "Альянсы",
  p = () => "Альянси",
  _ = () => "Các liên minh",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? c() : e === "fr" ? f() : e === "it" ? o() : e === "jp" ? u() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as a
};