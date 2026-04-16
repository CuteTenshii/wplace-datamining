import {
  s,
  p as t
} from "./8N7954wf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
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