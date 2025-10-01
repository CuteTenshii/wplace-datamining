import {
  g as o
} from "./MkhDhP69.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "62927027eb35380145df236b415c7021973de3ee"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a39ce8e6-c68e-4670-97d0-cab3082bdbf7", e._sentryDebugIdIdentifier = "sentry-dbid-a39ce8e6-c68e-4670-97d0-cab3082bdbf7")
  })()
} catch {}
const d = () => "Confirm",
  t = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? d() : t();
export {
  r as c
};