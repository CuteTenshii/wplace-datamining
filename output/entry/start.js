import {
  l as t,
  d as a
} from "../chunks/C-630T02.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0cee40ed-d185-46d5-9770-fe21dc5e1f61", e._sentryDebugIdIdentifier = "sentry-dbid-0cee40ed-d185-46d5-9770-fe21dc5e1f61")
  } catch {}
})();
export {
  t as load_css, a as start
};