import "./YjF1d-DF.js";
import {
  a,
  g as o,
  m as s,
  d as t,
  b as i,
  u as r
} from "./CZTV1YKu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "be9e3ceb-4b3c-408f-8861-23dda3204cca", e._sentryDebugIdIdentifier = "sentry-dbid-be9e3ceb-4b3c-408f-8861-23dda3204cca")
  } catch {}
})();
const l = {
    user: r(),
    community_leader: "Disc. Mod",
    discord_leader: "Disc. Lead",
    moderator: "MOD",
    global_moderator: "GM",
    admin: "Admin"
  },
  m = {
    user: r(),
    community_leader: i(),
    discord_leader: t(),
    moderator: s(),
    global_moderator: o(),
    admin: a()
  };
export {
  m as R, l as a
};