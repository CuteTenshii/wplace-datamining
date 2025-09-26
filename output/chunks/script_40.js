import {
  g as o
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a39ce8e6-c68e-4670-97d0-cab3082bdbf7", e._sentryDebugIdIdentifier = "sentry-dbid-a39ce8e6-c68e-4670-97d0-cab3082bdbf7")
  })()
} catch {}
const d = () => "Confirm",
  f = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? d() : f();
export {
  r as c
};