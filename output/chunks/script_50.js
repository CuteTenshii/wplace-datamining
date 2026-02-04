import {
  g as t
} from "./DFupwelK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4b52d08f-5fc6-4075-96a4-14dbcb10c32c", e._sentryDebugIdIdentifier = "sentry-dbid-4b52d08f-5fc6-4075-96a4-14dbcb10c32c")
  })()
} catch {}
const u = () => "Unban",
  a = () => "Desbanir",
  f = () => "解封",
  o = () => "Entbannen",
  b = () => "Desbanear",
  d = () => "Débannir",
  i = () => "Unban",
  c = () => "BANを解除",
  s = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? f() : n === "de" ? o() : n === "es" ? b() : n === "fr" ? d() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? s() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};