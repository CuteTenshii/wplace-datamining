import {
  g as f
} from "./BrwGNZk-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b5b27c83ae3760cb72717576498367b1362fdc48"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fce2c009-40ff-4494-9f49-1c0e2d36545d", e._sentryDebugIdIdentifier = "sentry-dbid-fce2c009-40ff-4494-9f49-1c0e2d36545d")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  l = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : t();
export {
  l as c
};