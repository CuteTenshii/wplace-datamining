import {
  s,
  p as t
} from "./DUSC1KvV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3edfefb4-7d00-474f-b039-2f5b834c3c58", e._sentryDebugIdIdentifier = "sentry-dbid-3edfefb4-7d00-474f-b039-2f5b834c3c58")
  } catch {}
})();
const d = {
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
const a = d;
export {
  a as p
};