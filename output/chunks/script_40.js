import {
  g as o
} from "./BHVh6a9r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "123067dbd61a163d94930a4efc762fdca932af1b"
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
const f = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? f() : d();
export {
  r as c
};