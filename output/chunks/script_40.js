import {
  g as o
} from "./Ck9C8CiE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "05ce49009207a0735deeeb4c7a853abc987d7d99"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "40e7372b-7a7a-4331-8256-93db1f959536", e._sentryDebugIdIdentifier = "sentry-dbid-40e7372b-7a7a-4331-8256-93db1f959536")
  })()
} catch {}
const t = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  r as c
};