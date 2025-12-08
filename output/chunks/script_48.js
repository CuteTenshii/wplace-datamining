import {
  g as t
} from "./CHeeGe8w.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d65f9ae170f28bf8512e5ff594eb3797e287c65b"
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
  f = () => "解封",
  o = () => "Entbannen",
  b = () => "Desbanear",
  i = () => "Débannir",
  s = () => "Unban",
  c = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? f() : n === "de" ? o() : n === "es" ? b() : n === "fr" ? i() : n === "it" ? s() : n === "jp" ? c() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};