import {
  g as t
} from "./C_a06lyj.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
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
  a = () => "解封",
  o = () => "Entbannen",
  d = () => "Desbanear",
  i = () => "Débannir",
  b = () => "Unban",
  s = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? f() : n === "ch" ? a() : n === "de" ? o() : n === "es" ? d() : n === "fr" ? i() : n === "it" ? b() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};