import {
  g as n
} from "./BIwJezZo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
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
  d = () => "Suspendre",
  c = () => "Sospendi",
  a = () => "タイムアウト",
  m = () => "Zawieszenie",
  l = () => "Тайм-аут",
  p = () => "Тайм-аут",
  _ = () => "Tạm khóa",
  g = (e = {}, r = {}) => {
    const t = r.locale ?? n();
    return t === "en" ? u() : t === "pt" ? o() : t === "ch" ? i() : t === "de" ? s() : t === "es" ? f() : t === "fr" ? d() : t === "it" ? c() : t === "jp" ? a() : t === "pl" ? m() : t === "ru" ? l() : t === "uk" ? p() : _()
  };
export {
  g as t
};