import "./DolGb-m3.js";
import {
  a as n,
  g as a,
  m as r,
  d as t,
  u as o
} from "./dP8wHJHS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
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
const f = {
    user: o(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  l = {
    user: o(),
    community_leader: t(),
    moderator: r(),
    global_moderator: a(),
    admin: n()
  };
export {
  l as R, f as a
};