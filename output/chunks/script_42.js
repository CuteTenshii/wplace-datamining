import {
  g as r
} from "./CQePO0m_.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
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
  f = () => "Suspender",
  c = () => "Suspendre",
  d = () => "Sospendi",
  a = () => "タイムアウト",
  l = () => "Zawieszenie",
  b = () => "Тайм-аут",
  p = () => "Тайм-аут",
  m = () => "Tạm khóa",
  y = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? c() : e === "it" ? d() : e === "jp" ? a() : e === "pl" ? l() : e === "ru" ? b() : e === "uk" ? p() : m()
  };
export {
  y as t
};