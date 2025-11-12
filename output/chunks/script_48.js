import {
  g as d
} from "./4LWkpq0F.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "deff0df3054d4e17d810032708dfa15d941dfa1b"
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