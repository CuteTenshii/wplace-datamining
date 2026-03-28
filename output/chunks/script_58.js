import {
  g as n
} from "./CUn96ABT.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "e65d2160-87a3-4c4c-9e7a-6fbff79400c2", t._sentryDebugIdIdentifier = "sentry-dbid-e65d2160-87a3-4c4c-9e7a-6fbff79400c2")
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
  g = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? c() : e === "it" ? d() : e === "jp" ? a() : e === "pl" ? m() : e === "ru" ? l() : e === "uk" ? p() : _()
  };
export {
  g as t
};