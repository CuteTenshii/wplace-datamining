import {
  g as d
} from "./p5JClCcr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ed542c83f3200bdd2dcdd4a1cf4ac45a32651d00"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f963200f-b3fc-4bed-93ab-c2202c006209", e._sentryDebugIdIdentifier = "sentry-dbid-f963200f-b3fc-4bed-93ab-c2202c006209")
  })()
} catch {}
const f = () => "Refresh",
  t = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? f() : t();
export {
  l as r
};