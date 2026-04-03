import {
  g as t
} from "./DNNhrQmR.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
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
  f = () => "Alliances",
  u = () => "Alleanze",
  o = () => "アライアンス",
  d = () => "Sojusze",
  b = () => "Альянсы",
  _ = () => "Альянси",
  p = () => "Các liên minh",
  y = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? l() : e === "ch" ? s() : e === "de" ? i() : e === "es" ? c() : e === "fr" ? f() : e === "it" ? u() : e === "jp" ? o() : e === "pl" ? d() : e === "ru" ? b() : e === "uk" ? _() : p()
  };
export {
  y as a
};