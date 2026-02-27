import {
  g as t
} from "./BIwJezZo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
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
  d = () => "Alleanze",
  f = () => "アライアンス",
  o = () => "Sojusze",
  _ = () => "Альянсы",
  b = () => "Альянси",
  p = () => "Các liên minh",
  y = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? l() : n === "ch" ? s() : n === "de" ? i() : n === "es" ? c() : n === "fr" ? u() : n === "it" ? d() : n === "jp" ? f() : n === "pl" ? o() : n === "ru" ? _() : n === "uk" ? b() : p()
  };
export {
  y as a
};