import {
  g as f
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4cabca8b-66f2-4e69-bb29-18897bbab378", e._sentryDebugIdIdentifier = "sentry-dbid-4cabca8b-66f2-4e69-bb29-18897bbab378")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  b = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : o();
export {
  b as r
};