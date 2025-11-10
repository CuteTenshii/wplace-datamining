import {
  g as d
} from "./CGnAXBz7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4871fd2f83b0bcd7abd0ecfe3a61b3d6255622d1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ccbcb242-a46e-40d3-b66f-926d15b2df4f", e._sentryDebugIdIdentifier = "sentry-dbid-ccbcb242-a46e-40d3-b66f-926d15b2df4f")
  })()
} catch {}
const f = () => "Confirm",
  o = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? f() : o();
export {
  r as c
};