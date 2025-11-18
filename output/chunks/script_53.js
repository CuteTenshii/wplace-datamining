import {
  g as t
} from "./ByzlWgKr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c3da3986-2727-41b4-85e7-13fa1662e896", e._sentryDebugIdIdentifier = "sentry-dbid-c3da3986-2727-41b4-85e7-13fa1662e896")
  })()
} catch {}
const f = () => "Refresh",
  o = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : o();
export {
  l as r
};