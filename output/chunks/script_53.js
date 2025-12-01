import {
  g as t
} from "./DSQTBCbU.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "81e0d27a89a6ed71e59e16e2f2fe2aa899a3b379"
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
  o = () => "Alianzas",
  u = () => "Alliances",
  f = () => "Alleanze",
  c = () => "アライアンス",
  d = () => "Sojusze",
  p = () => "Альянсы",
  _ = () => "Альянси",
  b = () => "Các liên minh",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? a() : e === "pt" ? l() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? o() : e === "fr" ? u() : e === "it" ? f() : e === "jp" ? c() : e === "pl" ? d() : e === "ru" ? p() : e === "uk" ? _() : b()
  };
export {
  g as a
};