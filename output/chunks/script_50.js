import {
  g as t
} from "./DolGb-m3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
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
  f = () => "解封",
  o = () => "Entbannen",
  a = () => "Desbanear",
  i = () => "Débannir",
  c = () => "Unban",
  s = () => "BANを解除",
  d = () => "Odbanuj",
  l = () => "Разбанить",
  p = () => "Розбанити",
  _ = () => "Gỡ cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? u() : n === "pt" ? b() : n === "ch" ? f() : n === "de" ? o() : n === "es" ? a() : n === "fr" ? i() : n === "it" ? c() : n === "jp" ? s() : n === "pl" ? d() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as u
};