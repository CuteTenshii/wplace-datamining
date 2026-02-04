import {
  s as n,
  p as d
} from "./DQKx2_bY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d1fdd55a-732a-4e0b-9184-fae0134e4dde", e._sentryDebugIdIdentifier = "sentry-dbid-d1fdd55a-732a-4e0b-9184-fae0134e4dde")
  })()
} catch {}
const a = {
  get error() {
    return d.error
  },
  get params() {
    return d.params
  },
  get status() {
    return d.status
  },
  get url() {
    return d.url
  }
};
n.updated.check;
const f = a;
export {
  f as p
};