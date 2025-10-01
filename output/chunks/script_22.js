import {
  s as d,
  p as t
} from "./DKHAn3wZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe77e0a32f22395333b3f54fb7a95ef6936c7140"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a3dbed05-c198-4ed7-927f-c0428effe604", e._sentryDebugIdIdentifier = "sentry-dbid-a3dbed05-c198-4ed7-927f-c0428effe604")
  })()
} catch {}
const f = {
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
d.updated.check;
const r = f;
export {
  r as p
};