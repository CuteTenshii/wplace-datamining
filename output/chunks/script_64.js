import {
  g as n
} from "./DADvmwwi.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var r = new t.Error().stack;
    r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "3ec605d5-5f91-4ad8-84e0-31115df5feed", t._sentryDebugIdIdentifier = "sentry-dbid-3ec605d5-5f91-4ad8-84e0-31115df5feed")
  } catch {}
})();
const u = () => "Timeout",
  o = () => "Suspender",
  i = () => "禁言",
  s = () => "Timeout",
  d = () => "Suspender",
  f = () => "Suspendre",
  c = () => "Sospendi",
  a = () => "タイムアウト",
  m = () => "Zawieszenie",
  l = () => "Тайм-аут",
  p = () => "Тайм-аут",
  _ = () => "Tạm khóa",
  y = (t = {}, r = {}) => {
    const e = r.locale ?? n();
    return e === "en" ? u() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? s() : e === "es" ? d() : e === "fr" ? f() : e === "it" ? c() : e === "jp" ? a() : e === "pl" ? m() : e === "ru" ? l() : e === "uk" ? p() : _()
  };
export {
  y as t
};