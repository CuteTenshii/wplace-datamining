import "./DMLR2ssG.js";
import {
  a as r,
  g as a,
  m as t,
  d as s,
  u as d
} from "./DMIOHzM0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c25d240cfeb94229297bfd517188330be66c0dac"
    };
    var o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "e8fab307-0c19-489f-9189-255b4f099f28", e._sentryDebugIdIdentifier = "sentry-dbid-e8fab307-0c19-489f-9189-255b4f099f28")
  } catch {}
})();
const b = {
    user: d(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  m = {
    user: d(),
    community_leader: s(),
    moderator: t(),
    global_moderator: a(),
    admin: r()
  };
export {
  m as R, b as a
};