import "./CDV-gvd8.js";
import {
  a as r,
  g as d,
  m as t,
  d as s,
  u as a
} from "./4WAcArVu.js";
(function() {
  try {
    var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    o.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var e = new o.Error().stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "e8fab307-0c19-489f-9189-255b4f099f28", o._sentryDebugIdIdentifier = "sentry-dbid-e8fab307-0c19-489f-9189-255b4f099f28")
  } catch {}
})();
const b = {
    user: a(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  m = {
    user: a(),
    community_leader: s(),
    moderator: t(),
    global_moderator: d(),
    admin: r()
  };
export {
  m as R, b as a
};