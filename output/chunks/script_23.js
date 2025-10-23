import {
  s as t,
  p as n
} from "./B-IjB-5n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a8e86ea7c5dac5456cbf3520a3090956fd737b8f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "64cbd753-0d34-4c63-912a-2f9cd5bd8527", e._sentryDebugIdIdentifier = "sentry-dbid-64cbd753-0d34-4c63-912a-2f9cd5bd8527")
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