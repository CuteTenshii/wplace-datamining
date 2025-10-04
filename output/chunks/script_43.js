import {
  g as t
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4cabca8b-66f2-4e69-bb29-18897bbab378", e._sentryDebugIdIdentifier = "sentry-dbid-4cabca8b-66f2-4e69-bb29-18897bbab378")
  })()
} catch {}
const o = () => "Refresh",
  r = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? o() : r();
export {
  a as r
};