import {
  s as a,
  p as t
} from "./CXMsWXig.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "c31cb3e5-644c-4fe3-8bd0-8b1ca8463869", e._sentryDebugIdIdentifier = "sentry-dbid-c31cb3e5-644c-4fe3-8bd0-8b1ca8463869")
  } catch {}
})();
const s = {
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
a.updated.check;
const c = s;
export {
  c as p
};