import {
  g as t
} from "./DditNrNW.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d8fe2b59c656bd9f6dccc34a4ac724cc1c260861"
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
  f = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? o() : f();
export {
  a as r
};