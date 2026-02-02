import "./DSNL03G2.js";
import {
  a as n,
  g as r,
  m as a,
  d as t,
  u as o
} from "./yh9gKRVP.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "599942de-6010-4013-9101-20f4d64804e8", e._sentryDebugIdIdentifier = "sentry-dbid-599942de-6010-4013-9101-20f4d64804e8")
  })()
} catch {}
const s = {
    user: o(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  l = {
    user: o(),
    community_leader: t(),
    moderator: a(),
    global_moderator: r(),
    admin: n()
  };
export {
  l as R, s as a
};