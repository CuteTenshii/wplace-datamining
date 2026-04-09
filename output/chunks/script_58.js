import {
  g as n
} from "./DrzYdI9r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e65d2160-87a3-4c4c-9e7a-6fbff79400c2", e._sentryDebugIdIdentifier = "sentry-dbid-e65d2160-87a3-4c4c-9e7a-6fbff79400c2")
  } catch {}
})();
const u = () => "Timeout",
  o = () => "Suspender",
  i = () => "禁言",
  f = () => "Timeout",
  s = () => "Suspender",
  d = () => "Suspendre",
  c = () => "Sospendi",
  a = () => "タイムアウト",
  m = () => "Zawieszenie",
  l = () => "Тайм-аут",
  p = () => "Тайм-аут",
  _ = () => "Tạm khóa",
  g = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? u() : t === "pt" ? o() : t === "ch" ? i() : t === "de" ? f() : t === "es" ? s() : t === "fr" ? d() : t === "it" ? c() : t === "jp" ? a() : t === "pl" ? m() : t === "ru" ? l() : t === "uk" ? p() : _()
  };
export {
  g as t
};