import {
  g as o
} from "./Dk78P9j5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "9b2648606e2bb7a01bef003b9890229599179c1c"
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
const t = () => "Confirm",
  f = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : f();
export {
  r as c
};