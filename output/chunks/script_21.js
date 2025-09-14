import {
  s as d,
  p as t
} from "./DA-yHx66.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "672e85eb3631872fd08d4c9c3edf522c2ebd7ca9"
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
const o = {
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
d.updated.check;
const f = o;
export {
  f as p
};