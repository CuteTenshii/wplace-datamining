import {
  g as t
} from "./CQ_gfREe.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "e6efb14bb5e52798ae71a524d6603a123d144219"
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
  a = () => "Alianças",
  i = () => "联盟",
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
    return e === "en" ? l() : e === "pt" ? a() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? o() : e === "fr" ? u() : e === "it" ? c() : e === "jp" ? d() : e === "pl" ? f() : e === "ru" ? b() : e === "uk" ? p() : _()
  };
export {
  g as a
};