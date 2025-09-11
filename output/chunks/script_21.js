import {
  s as a,
  p as t
} from "./CZVPITxV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a08aaa4cc3329c16d583f3f519629bce2e5a6410"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "17c8100a-af6c-40ec-9bb1-af0b4c050509", e._sentryDebugIdIdentifier = "sentry-dbid-17c8100a-af6c-40ec-9bb1-af0b4c050509")
  })()
} catch {}
const d = {
  get error() {
    return t.error
  },
  get status() {
    return t.status
  },
  get url() {
    return t.url
  }
};
a.updated.check;
const r = d;
export {
  r as p
};