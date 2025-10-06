import {
  g as t
} from "./BzyUMEdi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "22dd6d20080aececfaae9b3120dfb71899337f43"
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
const f = () => "Refresh",
  o = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : o();
export {
  a as r
};