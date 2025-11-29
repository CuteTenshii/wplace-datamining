import {
  g as t
} from "./Blx2cLJH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c162605020db3f70298b20f062b9da755abfa489"
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
  f = () => "Entbannen",
  b = () => "Desbanear",
  i = () => "Débannir",
  s = () => "Unban",
  d = () => "BANを解除",
  c = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? a() : n === "ch" ? o() : n === "de" ? f() : n === "es" ? b() : n === "fr" ? i() : n === "it" ? s() : n === "jp" ? d() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};