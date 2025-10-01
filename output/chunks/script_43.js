import {
  g as t
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b6fedc18-c426-4b17-bf09-8644b91cab4b", e._sentryDebugIdIdentifier = "sentry-dbid-b6fedc18-c426-4b17-bf09-8644b91cab4b")
  })()
} catch {}
const f = () => "Refresh",
  o = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : o();
export {
  l as r
};