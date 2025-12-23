import {
  g as r
} from "./CMw04vg4.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "8706a848567fc83422d651908aa77f13fdf383e3"
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
  p = () => "Тайм-аут",
  m = () => "Тайм-аут",
  b = () => "Tạm khóa",
  y = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? f() : e === "es" ? s() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? p() : e === "uk" ? m() : b()
  };
export {
  y as t
};