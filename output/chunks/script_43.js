import {
  g as t
} from "./DCOr_wmp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
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
  b = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : o();
export {
  b as r
};