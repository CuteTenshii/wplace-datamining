import "./kxb4d0Jk.js";
import {
  a,
  g as r,
  m as t,
  d as s,
  u as o
} from "./CMghSi3a.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var e = new d.Error().stack;
    e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "fb7e5743-07cb-435a-bde9-b7ccba77661d", d._sentryDebugIdIdentifier = "sentry-dbid-fb7e5743-07cb-435a-bde9-b7ccba77661d")
  } catch {}
})();
const m = {
    user: o(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  f = {
    user: o(),
    community_leader: s(),
    moderator: t(),
    global_moderator: r(),
    admin: a()
  };
export {
  f as R, m as a
};