import {
  g as f
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f963200f-b3fc-4bed-93ab-c2202c006209", e._sentryDebugIdIdentifier = "sentry-dbid-f963200f-b3fc-4bed-93ab-c2202c006209")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : o();
export {
  l as r
};