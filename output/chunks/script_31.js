import {
  g as o
} from "./C2egeWDR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6fe71e2aef866a931e2568b1d6f6762fddc1f62d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "229445bf-dd55-4e7f-99d6-0afe0ad6a0ba", e._sentryDebugIdIdentifier = "sentry-dbid-229445bf-dd55-4e7f-99d6-0afe0ad6a0ba")
  })()
} catch {}
const d = () => "Select the report reason",
  t = () => "Selecione o motivo da denúncia",
  l = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? d() : t();
export {
  l as s
};