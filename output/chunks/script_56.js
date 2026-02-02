import {
  g as r
} from "./B4ScQ8O8.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new t.Error().stack;
    n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "ef9b2e36-4b3b-4467-b0cf-a6c277aebb33", t._sentryDebugIdIdentifier = "sentry-dbid-ef9b2e36-4b3b-4467-b0cf-a6c277aebb33")
  })()
} catch {}
const u = () => "Timeout",
  o = () => "Suspender",
  i = () => "禁言",
  f = () => "Timeout",
  s = () => "Suspender",
  d = () => "Suspendre",
  c = () => "Sospendi",
  b = () => "タイムアウト",
  l = () => "Zawieszenie",
  a = () => "Тайм-аут",
  p = () => "Тайм-аут",
  m = () => "Tạm khóa",
  y = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? f() : e === "es" ? s() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? b() : e === "pl" ? l() : e === "ru" ? a() : e === "uk" ? p() : m()
  };
export {
  y as t
};