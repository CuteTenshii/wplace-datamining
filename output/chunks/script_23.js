import {
  s as f,
  p as t
} from "./Da7nXB_0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0f5526c28af3fe231e905447f161f05590c76727"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "44f38684-df42-4642-94c0-f749e5296e5d", e._sentryDebugIdIdentifier = "sentry-dbid-44f38684-df42-4642-94c0-f749e5296e5d")
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