import {
  s as d,
  p as t
} from "./JWtOTBEX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "22a546fbb215f27eb1e048884138171ecb9ba2c5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bde4f971-2b66-4b7e-a18d-b2c5586c2ffd", e._sentryDebugIdIdentifier = "sentry-dbid-bde4f971-2b66-4b7e-a18d-b2c5586c2ffd")
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