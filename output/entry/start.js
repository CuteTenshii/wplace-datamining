import {
  l as o,
  a as t
} from "../chunks/DThAtEM5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3c9334ae758047b148030b2b1b11409cfc37ff31"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "186bf26c-a5d1-4522-969a-347e1cd11460", e._sentryDebugIdIdentifier = "sentry-dbid-186bf26c-a5d1-4522-969a-347e1cd11460")
  })()
} catch {}
export {
  o as load_css, t as start
};