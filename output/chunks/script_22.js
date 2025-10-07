import {
  s as d,
  p as t
} from "./clDIvoYc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "08e66319-20eb-452a-87e2-724bedfd6a6a", e._sentryDebugIdIdentifier = "sentry-dbid-08e66319-20eb-452a-87e2-724bedfd6a6a")
  })()
} catch {}
const a = {
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
const r = a;
export {
  r as p
};