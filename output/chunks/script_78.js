import "./56ZBUmtO.js";
import {
  a as d,
  g as a,
  m as t,
  d as s,
  u as r
} from "./m3_B81HI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "e8fab307-0c19-489f-9189-255b4f099f28", e._sentryDebugIdIdentifier = "sentry-dbid-e8fab307-0c19-489f-9189-255b4f099f28")
  } catch {}
})();
const b = {
    user: r(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  m = {
    user: r(),
    community_leader: s(),
    moderator: t(),
    global_moderator: a(),
    admin: d()
  };
export {
  m as R, b as a
};