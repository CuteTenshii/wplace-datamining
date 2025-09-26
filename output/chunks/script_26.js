import {
  g as c
} from "./l6Sqoly_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f081a31e50addc038845f96ddcdcac2e385f6a91"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "476c3416-464c-44fb-9f2f-18bebc310382", e._sentryDebugIdIdentifier = "sentry-dbid-476c3416-464c-44fb-9f2f-18bebc310382")
  })()
} catch {}
const f = () => "Cancel",
  o = () => "Cancelar",
  l = (e = {}, n = {}) => (n.locale ?? c()) === "en" ? f() : o();
export {
  l as c
};