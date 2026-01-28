import {
  s as n,
  p as d
} from "./BX8ZMyI1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
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
const r = a;
export {
  r as p
};