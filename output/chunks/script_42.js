import {
  g as r
} from "./DCTOo5lo.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
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
  f = () => "Timeout",
  s = () => "Suspender",
  d = () => "Suspendre",
  c = () => "Sospendi",
  a = () => "タイムアウト",
  l = () => "Zawieszenie",
  b = () => "Тайм-аут",
  p = () => "Тайм-аут",
  m = () => "Tạm khóa",
  y = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? f() : e === "es" ? s() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? b() : e === "uk" ? p() : m()
  };
export {
  y as t
};