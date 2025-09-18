import {
  s as f,
  p as t
} from "./BZ71a0lL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "64a827f251b09c64d2dcef6cfc561f774a8ba67c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "82f82013-4b06-4bf5-86af-993b0df68509", e._sentryDebugIdIdentifier = "sentry-dbid-82f82013-4b06-4bf5-86af-993b0df68509")
  })()
} catch {}
const d = {
  get error() {
    return t.error
  },
  get status() {
    return t.status
  },
  get url() {
    return t.url
  }
};
f.updated.check;
const r = d;
export {
  r as p
};