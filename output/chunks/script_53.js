import {
  g as r
} from "./lNmZA2C_.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new t.Error().stack;
    n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "3ec605d5-5f91-4ad8-84e0-31115df5feed", t._sentryDebugIdIdentifier = "sentry-dbid-3ec605d5-5f91-4ad8-84e0-31115df5feed")
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
  m = () => "Тайм-аут",
  _ = () => "Tạm khóa",
  g = (t = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? f() : e === "es" ? d() : e === "fr" ? s() : e === "it" ? c() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? p() : e === "uk" ? m() : _()
  };
export {
  g as t
};