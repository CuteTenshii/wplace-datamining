import {
  g as o
} from "./DKiJ5IW8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cc0c831cfe290b2f9f3fef653d3fc44d780a59c1"
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
  t = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? f() : t();
export {
  r as c
};