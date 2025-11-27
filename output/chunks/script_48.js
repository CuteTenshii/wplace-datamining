import {
  g as t
} from "./DZOq0nrk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2c85364e3128b797172dc28599b1641f9b6765ae"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "761bf868-dc26-4c77-ab7a-789c5751409a", e._sentryDebugIdIdentifier = "sentry-dbid-761bf868-dc26-4c77-ab7a-789c5751409a")
  })()
} catch {}
const u = () => "Unban",
  a = () => "Desbanir",
  o = () => "解封",
  b = () => "Entbannen",
  f = () => "Desbanear",
  i = () => "Débannir",
  s = () => "Unban",
  c = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? o() : n === "de" ? b() : n === "es" ? f() : n === "fr" ? i() : n === "it" ? s() : n === "jp" ? c() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};