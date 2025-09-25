import {
  s as t,
  p as n
} from "./Dq-Wn-QO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "99d09c0a99d21d08ae7e452ed085de091ad1bef9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a3dbed05-c198-4ed7-927f-c0428effe604", e._sentryDebugIdIdentifier = "sentry-dbid-a3dbed05-c198-4ed7-927f-c0428effe604")
  })()
} catch {}
const f = {
  get error() {
    return n.error
  },
  get status() {
    return n.status
  },
  get url() {
    return n.url
  }
};
t.updated.check;
const r = f;
export {
  r as p
};