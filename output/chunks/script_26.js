import {
  g as d
} from "./B_rlGoi1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7278ed977b90641928943db9499ca73f82620c56"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "deb61115-9e94-4ec9-a232-23465dda2297", e._sentryDebugIdIdentifier = "sentry-dbid-deb61115-9e94-4ec9-a232-23465dda2297")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  c = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  c
};