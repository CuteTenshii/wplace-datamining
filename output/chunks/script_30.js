import {
  s,
  p as t
} from "./BaT1teKg.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3edfefb4-7d00-474f-b039-2f5b834c3c58", e._sentryDebugIdIdentifier = "sentry-dbid-3edfefb4-7d00-474f-b039-2f5b834c3c58")
  } catch {}
})();
const a = {
  get error() {
    return t.error
  },
  get params() {
    return t.params
  },
  get state() {
    return t.state
  },
  get status() {
    return t.status
  },
  get url() {
    return t.url
  }
};
s.updated.check;
const f = a;
export {
  f as p
};