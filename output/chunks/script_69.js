import {
  g as t
} from "./BTC2qzU8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
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
  _ = () => "Альянсы",
  b = () => "Альянси",
  p = () => "Các liên minh",
  y = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? l() : n === "ch" ? s() : n === "de" ? i() : n === "es" ? c() : n === "fr" ? u() : n === "it" ? f() : n === "jp" ? o() : n === "pl" ? d() : n === "ru" ? _() : n === "uk" ? b() : p()
  };
export {
  y as a
};