import {
  s as t,
  p as n
} from "./Bfnu36pa.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "271525ca33b9062741a3aa9359d1b5202c5b5a4b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a3dbed05-c198-4ed7-927f-c0428effe604", e._sentryDebugIdIdentifier = "sentry-dbid-a3dbed05-c198-4ed7-927f-c0428effe604")
  })()
} catch {}
const o = {
  get error() {
    return n.error
  },
  get status() {
    return n.status
  },
  get url() {
    return n.url
  }
};
t.updated.check;
const f = o;
export {
  f as p
};