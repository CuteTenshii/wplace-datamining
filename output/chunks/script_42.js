import {
  g as r
} from "./BMZgV-pO.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "38bb15d6890b2160becfb07b4396631f8d785598"
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
  s = () => "Suspender",
  d = () => "Suspendre",
  c = () => "Sospendi",
  l = () => "タイムアウト",
  b = () => "Zawieszenie",
  p = () => "Тайм-аут",
  a = () => "Тайм-аут",
  m = () => "Tạm khóa",
  y = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? f() : e === "es" ? s() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? b() : e === "ru" ? p() : e === "uk" ? a() : m()
  };
export {
  y as t
};