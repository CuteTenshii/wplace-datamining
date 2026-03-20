import {
  s,
  p as t
} from "./BRWqB-5h.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
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
const c = a;
export {
  c as p
};