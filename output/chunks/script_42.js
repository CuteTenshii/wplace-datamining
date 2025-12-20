import {
  g as r
} from "./Cg2XhUFn.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new t.Error().stack;
    n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "c5a13364-7383-4199-b1dc-304ba976a3c6", t._sentryDebugIdIdentifier = "sentry-dbid-c5a13364-7383-4199-b1dc-304ba976a3c6")
  })()
} catch {}
const u = () => "Timeout",
  o = () => "Suspender",
  i = () => "禁言",
  s = () => "Timeout",
  d = () => "Suspender",
  f = () => "Suspendre",
  c = () => "Sospendi",
  a = () => "タイムアウト",
  l = () => "Zawieszenie",
  p = () => "Тайм-аут",
  b = () => "Тайм-аут",
  m = () => "Tạm khóa",
  y = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? d() : e === "fr" ? f() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? p() : e === "uk" ? b() : m()
  };
export {
  y as t
};