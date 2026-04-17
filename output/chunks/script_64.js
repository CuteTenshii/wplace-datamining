import {
  g as n
} from "./CLdytBYG.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "3ec605d5-5f91-4ad8-84e0-31115df5feed", t._sentryDebugIdIdentifier = "sentry-dbid-3ec605d5-5f91-4ad8-84e0-31115df5feed")
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
  g = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? f() : e === "fr" ? d() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? m() : e === "ru" ? l() : e === "uk" ? p() : _()
  };
export {
  g as t
};