import {
  g as t
} from "./D6LZhko2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "73973961cce1223172a2858ab6abc5d2386ef402"
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