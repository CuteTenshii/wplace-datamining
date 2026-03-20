import {
  s,
  p as t
} from "./CVjtJP2P.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "c31cb3e5-644c-4fe3-8bd0-8b1ca8463869", e._sentryDebugIdIdentifier = "sentry-dbid-c31cb3e5-644c-4fe3-8bd0-8b1ca8463869")
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
const c = d;
export {
  c as p
};