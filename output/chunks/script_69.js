import {
  g as t
} from "./CUn96ABT.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "b4aa13f6-08c7-49cd-9e53-dfbd6f6305da", n._sentryDebugIdIdentifier = "sentry-dbid-b4aa13f6-08c7-49cd-9e53-dfbd6f6305da")
  } catch {}
})();
const a = () => "Alliances",
  l = () => "Alianças",
  s = () => "联盟",
  i = () => "Allianzen",
  c = () => "Alianzas",
  u = () => "Alliances",
  o = () => "Alleanze",
  f = () => "アライアンス",
  d = () => "Sojusze",
  _ = () => "Альянсы",
  b = () => "Альянси",
  p = () => "Các liên minh",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? l() : e === "ch" ? s() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? u() : e === "it" ? o() : e === "jp" ? f() : e === "pl" ? d() : e === "ru" ? _() : e === "uk" ? b() : p()
  };
export {
  y as a
};