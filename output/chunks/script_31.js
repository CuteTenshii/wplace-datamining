import {
  g as o
} from "./GKUa23OF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
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
const t = () => "Select the report reason",
  a = () => "Selecione o motivo da denúncia",
  l = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : a();
export {
  l as s
};