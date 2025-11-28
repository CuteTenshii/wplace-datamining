import {
  g as t
} from "./Bb_g4xm1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bb5d5d7c8d5938b4a51a8b309833405bb5c12631"
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
  b = () => "解封",
  o = () => "Entbannen",
  i = () => "Desbanear",
  f = () => "Débannir",
  s = () => "Unban",
  d = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? b() : n === "de" ? o() : n === "es" ? i() : n === "fr" ? f() : n === "it" ? s() : n === "jp" ? d() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};