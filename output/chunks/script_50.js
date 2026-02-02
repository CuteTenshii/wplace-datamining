import {
  g as t
} from "./B4ScQ8O8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
  b = () => "Desbanir",
  a = () => "解封",
  o = () => "Entbannen",
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
    return n === "en" ? u() : n === "pt" ? b() : n === "ch" ? a() : n === "de" ? o() : n === "es" ? f() : n === "fr" ? i() : n === "it" ? s() : n === "jp" ? c() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};