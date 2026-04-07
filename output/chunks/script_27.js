import {
  s,
  p as t
} from "./BGcKgAMO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "c31cb3e5-644c-4fe3-8bd0-8b1ca8463869", e._sentryDebugIdIdentifier = "sentry-dbid-c31cb3e5-644c-4fe3-8bd0-8b1ca8463869")
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
const o = a;
export {
  o as p
};