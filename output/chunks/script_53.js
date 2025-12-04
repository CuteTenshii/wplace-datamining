import {
  g as t
} from "./CHxYu7UU.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
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
const a = () => "Alliances",
  l = () => "Alianças",
  i = () => "联盟",
  s = () => "Allianzen",
  f = () => "Alianzas",
  o = () => "Alliances",
  u = () => "Alleanze",
  c = () => "アライアンス",
  d = () => "Sojusze",
  p = () => "Альянсы",
  _ = () => "Альянси",
  b = () => "Các liên minh",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? l() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? o() : e === "it" ? u() : e === "jp" ? c() : e === "pl" ? d() : e === "ru" ? p() : e === "uk" ? _() : b()
  };
export {
  g as a
};