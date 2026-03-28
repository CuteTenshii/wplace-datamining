import "./CUn96ABT.js";
import {
  a,
  g as d,
  m as t,
  d as s,
  u as r
} from "./C2PWjLGh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "e8fab307-0c19-489f-9189-255b4f099f28", e._sentryDebugIdIdentifier = "sentry-dbid-e8fab307-0c19-489f-9189-255b4f099f28")
  } catch {}
})();
const m = {
    user: r(),
    community_leader: "Disc. Mod",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  b = {
    user: r(),
    community_leader: s(),
    moderator: t(),
    global_moderator: d(),
    admin: a()
  };
export {
  b as R, m as a
};