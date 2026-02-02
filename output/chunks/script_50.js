import {
  g as t
} from "./CWSLadsn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
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
  f = () => "Desbanir",
  o = () => "解封",
  a = () => "Entbannen",
  d = () => "Desbanear",
  b = () => "Débannir",
  i = () => "Unban",
  s = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? f() : n === "ch" ? o() : n === "de" ? a() : n === "es" ? d() : n === "fr" ? b() : n === "it" ? i() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};