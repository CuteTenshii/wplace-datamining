import {
  s as a,
  p as t
} from "./CvUuzEOb.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aeec6004f37eb410c4fa5f542a20b7bcda513933"
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
const o = d;
export {
  o as p
};