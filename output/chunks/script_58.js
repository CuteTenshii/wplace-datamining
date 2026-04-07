import {
  g as n
} from "./CTqtndnH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e65d2160-87a3-4c4c-9e7a-6fbff79400c2", e._sentryDebugIdIdentifier = "sentry-dbid-e65d2160-87a3-4c4c-9e7a-6fbff79400c2")
  } catch {}
})();
const u = () => "Timeout",
  o = () => "Suspender",
  i = () => "禁言",
  s = () => "Timeout",
  f = () => "Suspender",
  c = () => "Suspendre",
  d = () => "Sospendi",
  a = () => "タイムアウト",
  m = () => "Zawieszenie",
  l = () => "Тайм-аут",
  p = () => "Тайм-аут",
  _ = () => "Tạm khóa",
  g = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? u() : t === "pt" ? o() : t === "ch" ? i() : t === "de" ? s() : t === "es" ? f() : t === "fr" ? c() : t === "it" ? d() : t === "jp" ? a() : t === "pl" ? m() : t === "ru" ? l() : t === "uk" ? p() : _()
  };
export {
  g as t
};