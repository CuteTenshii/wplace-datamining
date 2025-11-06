import {
  s as t,
  p as n
} from "./Cf-nhGUp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3b81c531726e4eb39728af6e2ad358d2a11d8033"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f1fbd896-ae76-439a-9d8b-27860c02afc6", e._sentryDebugIdIdentifier = "sentry-dbid-f1fbd896-ae76-439a-9d8b-27860c02afc6")
  })()
} catch {}
const a = {
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
const o = a;
export {
  o as p
};