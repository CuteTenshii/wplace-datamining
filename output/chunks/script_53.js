import {
  g as t
} from "./uhNN53MD.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "72535b980ce58632366910417763e3bb1f48d885"
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
  o = () => "Alianzas",
  u = () => "Alliances",
  c = () => "Alleanze",
  f = () => "アライアンス",
  d = () => "Sojusze",
  b = () => "Альянсы",
  p = () => "Альянси",
  _ = () => "Các liên minh",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? o() : e === "fr" ? u() : e === "it" ? c() : e === "jp" ? f() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as a
};