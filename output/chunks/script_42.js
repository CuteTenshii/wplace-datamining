import {
  g as r
} from "./D5qrl5-_.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1064b7515953fcf97fd0dd3f98c3a1e27dfd80a9"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new t.Error().stack;
    n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "30edfb15-4df8-4662-9e50-e0b71901b649", t._sentryDebugIdIdentifier = "sentry-dbid-30edfb15-4df8-4662-9e50-e0b71901b649")
  })()
} catch {}
const u = () => "Timeout",
  o = () => "Suspender",
  i = () => "禁言",
  f = () => "Timeout",
  d = () => "Suspender",
  s = () => "Suspendre",
  c = () => "Sospendi",
  l = () => "タイムアウト",
  a = () => "Zawieszenie",
  p = () => "Тайм-аут",
  b = () => "Тайм-аут",
  m = () => "Tạm khóa",
  y = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? f() : e === "es" ? d() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? p() : e === "uk" ? b() : m()
  };
export {
  y as t
};