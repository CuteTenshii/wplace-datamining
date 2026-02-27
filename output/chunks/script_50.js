import {
  g as t
} from "./BERb6pDx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
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
  o = () => "解封",
  f = () => "Entbannen",
  b = () => "Desbanear",
  i = () => "Débannir",
  d = () => "Unban",
  c = () => "BANを解除",
  s = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? o() : n === "de" ? f() : n === "es" ? b() : n === "fr" ? i() : n === "it" ? d() : n === "jp" ? c() : n === "pl" ? s() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};